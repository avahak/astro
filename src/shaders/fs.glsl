// We use the standard xyz coordinate system here, not the GLSL coordinate system.
// IMPORTANT! Do not use mipmapping here since mipmap level is not be calculated correctly.

precision highp float;

uniform sampler2D terrain;
uniform vec2 resolution;
uniform vec3 pSun;
uniform vec3 pMoon;
uniform vec3 pJupiter;
uniform vec2 vDir;
uniform mat3 mDir;
uniform float focalLength;
uniform float terrainLight;

uniform vec3 radii;         // (earth radius, atmosphere radius, observer radius)
uniform vec3 scatterCoeff;  // scattering coefficients for r,g,b

varying vec4 vPosition;
varying vec2 vUv;

#define PI 3.14159265359
#define EP 1.0E-7

vec3 cartesian_to_spherical(vec3 u) {
    float r = length(u);
    float phi = atan(u.y, u.x);
    float theta = acos(u.z/r);
    return vec3(phi, theta, r);
}

vec3 spherical_to_cartesian(vec3 v) {
    float x = v.z*sin(v.y)*cos(v.x);
    float y = v.z*sin(v.y)*sin(v.x);
    float z = v.z*cos(v.y);
    return vec3(x, y, z);
}

vec2 clamp_spherical(vec3 u) {
    return vec2(mod(u.x, 2.0*PI)/(2.0*PI), 1.0-u.y/PI);
}

vec4 axes(vec3 p) {
    if (length(p-vec3(1.0, 0.0, 0.0)) < 0.1)
        return vec4(1.0, 0.0, 0.0, 1.0);
    if (length(p-vec3(-1.0, 0.0, 0.0)) < 0.05)
        return vec4(0.25, 0.0, 0.0, 1.0);
    if (length(p-vec3(0.0, 1.0, 0.0)) < 0.1)
        return vec4(0.0, 1.0, 0.0, 1.0);
    if (length(p-vec3(0.0, -1.0, 0.0)) < 0.05)
        return vec4(0.0, 0.25, 0.0, 1.0);
    if (length(p-vec3(0.0, 0.0, 1.0)) < 0.1)
        return vec4(0.0, 0.0, 1.0, 1.0);
    if (length(p-vec3(0.0, 0.0, -1.0)) < 0.05)
        return vec4(0.0, 0.0, 0.25, 1.0);
    return vec4(0.0);
}

// Given sphere S(s0,r) and ray t->p0+t*v (t>=0), returns (segment start t, length of seg)
// for segment of ray inside the sphere or (-1,0) if no intersection.
vec2 raySphereIntersection(vec3 s0, float r, vec3 p0, vec3 v) {
    // |p0+t*v-s0|=r
    // |p0-s0|^2 + 2*t*<p0-s0,v> + t*t*<v,v> = r*r
    float a = dot(v, v);        // =1
    float b = 2.0*dot(p0-s0, v);
    float c = dot(p0-s0, p0-s0) - r*r;
    // a*t^2 + b*t + c = 0
    // t = (-b +- sqrt(b*b-4*a*c))/(2*a)
    float d = b*b - 4.0*a*c;
    if (d <= 0.0)
        return vec2(-1.0, 0.0);
    float t1 = (-b - sqrt(d))/(2.0*a);
    float t2 = (-b + sqrt(d))/(2.0*a);
    if (t2 <= 0.0)
        return vec2(-1.0, 0.0);
    if (t1 <= 0.0)
        return vec2(0.0, t2);
    return vec2(t1, t2-t1);
}

vec2 density(vec3 p) {
    vec2 densityFalloff = vec2(4.0, 16.0);
    float h01 = (length(p) - radii.x)/(radii.y-radii.x);
    return exp(-densityFalloff*h01)*(1.0-h01);
}

vec2 opticalDepth(vec3 rayOrigin, vec3 rayDir, float rayLength) {
    int numSamples = 6;
    float stepSize = rayLength/(float(numSamples)-1.0);
    vec2 depth = vec2(0.0);
    for (int k = 0; k < numSamples; k++) {
        vec3 samplePoint = rayOrigin + float(k)*rayDir*stepSize;
        depth += density(samplePoint) * stepSize;
    }
    return depth;
}

vec3 atmosphere(vec3 v) {
    vec3 observerPos = vec3(0.0, 0.0, radii.z);
    vec2 tInner = raySphereIntersection(vec3(0.0), radii.x, observerPos, v);
    vec2 tOuter = raySphereIntersection(vec3(0.0), radii.y, observerPos, v);
    vec2 t = vec2(tOuter.x, tInner.x >= 0.0 ? min(tOuter.y, tInner.x-tOuter.x) : tOuter.y);
    // return vec3(0.0+0.0*atan(100.0*t.x)/PI, t.y, 0.0);
    // if ()
    //     return vec3(1.0, 0.0, 0.0);

    vec3 dirToSun = normalize(pSun);
    float c_theta = dot(dirToSun, v);
    float c_theta2 = c_theta*c_theta;
    float K_Rayleigh = 3.0/4.0*(1.0 + c_theta2);
    float g = 0.7;      // 0.64 to 0.81
    float K_Mie = 3.0/2.0*(1.0-g*g)/(2.0+g*g)*(1.0+c_theta2)/pow(1.0+g*g-2.0*g*c_theta, 3.0/2.0);

    float scatterStr = 50.0;

    // Segment inside atmosphere is observerPos+t*v where t in [t.x, t.x+t.y]
    int stepNum = 10;
    float stepSize = t.y/float(stepNum);
    vec3 pos = observerPos + t.x*v;
    vec3 lightRayleigh = vec3(0.0);
    float lightMie = 0.0;
    // vec3 light2 = vec3(0.0);
    for (int k = 0; k < stepNum; k++) {
        float sunRayLength = raySphereIntersection(vec3(0.0), radii.y, pos, dirToSun).y;
        vec2 sunRayOpticalDepth = opticalDepth(pos, dirToSun, sunRayLength);
        vec2 viewRayOpticalDepth = opticalDepth(pos, -v, float(k)*stepSize);

        vec3 lightInRayleigh = exp(-(sunRayOpticalDepth.x + viewRayOpticalDepth.x)*scatterCoeff*scatterStr);
        float lightInMie = exp(-(sunRayOpticalDepth.x + viewRayOpticalDepth.x)*scatterStr);

        // float sunBlock = raySphereIntersection(vec3(0.0), radii.x, pos, dirToSun).x;
        // float blockFactor = 1.0;
        // if (sunBlock >= -EP)
        //     blockFactor = 0.0;
        // light2 += s * density(pos) * lightIn * blockFactor * scatterCoeff * scatterStr * stepSize;

        lightRayleigh += K_Rayleigh * density(pos).x * lightInRayleigh * scatterCoeff * scatterStr * stepSize;
        lightMie += K_Mie * density(pos).y * lightInMie * scatterStr * stepSize;
        pos += v*stepSize;
    }

    return lightRayleigh + vec3(lightMie);
}

void main() {

    float aspect = resolution.x / resolution.y;
    vec2 p0 = vPosition.xy * vec2(aspect, 1.0);
    float r = length(p0);
    float theta = 2.0*atan(r/(2.0*focalLength));
    // vec3 p = -mDir * vec3(sin(theta)*p0/r, cos(theta));
    vec3 p = mDir * vec3(cos(theta), -sin(theta)*p0.x/r, sin(theta)*p0.y/r);

    vec2 q = clamp_spherical(cartesian_to_spherical(p));

    vec4 axesColor = axes(p);
    if (axesColor.a > 0.5) {
        gl_FragColor = axesColor;
        return;
    }

    if (length(p-normalize(pSun)) < 0.1) {
        gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
        return;
    }

    if (length(p-normalize(pMoon)) < 0.1) {
        gl_FragColor = vec4(0.6, 0.6, 0.6, 1.0);
        return;
    }

    if (length(p-normalize(pJupiter)) < 0.1) {
        gl_FragColor = vec4(0.2, 0.2, 1.0, 1.0);
        return;
    }

    vec4 color = texture2D(terrain, q);
    // color.a = 0.0;
    color = vec4(terrainLight*color.rgb, color.a);
    vec3 color2 = atmosphere(normalize(p));
    gl_FragColor = vec4(mix(color.rgb, color2, 1.0-color.a), 1.0);
}