// For constellations
uniform sampler2D raTexture;
uniform sampler2D deTexture;
uniform sampler2D conTexture;
uniform vec2 size;
uniform mat3 conMatrix;

uniform samplerCube cubeTexture;
uniform float focalLength;
uniform mat3 rotation;

in vec2 vPos;

#define MAX_WIDTH 1024          // Has to match cpu-side value
#define PI 3.1415926535898

vec3 inverseProject(vec2 p) {
#ifdef PROJECTION_STEREOGRAPHIC
    vec2 q = p / focalLength;
    float t = 2.0 / (1.0 + q.x*q.x + q.y*q.y);
    return vec3(t*q, 1.0-t);
#elif defined(PROJECTION_GNOMONIC)
    //...
#elif defined(PROJECTION_MOLLWEIDE)
    //...
#elif defined(PROJECTION_HAMMER)
    //...
#endif
}

float lookup(vec2 q) {
    float theta = 0.5 + q.y / PI;
    float phi = mod(q.x / (2.0*PI), 1.0);
    int iPhi = int(floor(0.5 + phi * size.x));
    int iTheta = int(floor(0.5 + theta * size.y));
    float x = texelFetch(raTexture, ivec2(iPhi % MAX_WIDTH, iPhi / MAX_WIDTH), 0).r;
    float y = texelFetch(deTexture, ivec2(iTheta % MAX_WIDTH, iTheta / MAX_WIDTH), 0).r;
    float col = texture(conTexture, vec2(x, y)).r;
    return col/90.0*256.0;
}

vec3 sphericalFromCartesian(vec3 p) {
    float r = length(p);
    float rxy = length(p.xy);
    float azimuth = atan(p.y, p.x);
    float elevation = atan(p.z, rxy);
    return vec3(azimuth, elevation, r);
}

vec3 cartesianFromSpherical(vec3 p) {
    float rxy = p.z * cos(p.y);
    return vec3(rxy*cos(p.x), rxy*sin(p.x), p.z*sin(p.y));
}

vec4 axes(vec3 p) {
    float dotSize = 0.1;
    if (length(p-vec3(1.0, 0.0, 0.0)) < 0.1*dotSize)
        return vec4(1.0, 0.0, 0.0, 1.0);
    if (length(p-vec3(-1.0, 0.0, 0.0)) < 0.05*dotSize)
        return vec4(0.25, 0.0, 0.0, 1.0);
    if (length(p-vec3(0.0, 1.0, 0.0)) < 0.1*dotSize)
        return vec4(0.0, 1.0, 0.0, 1.0);
    if (length(p-vec3(0.0, -1.0, 0.0)) < 0.05*dotSize)
        return vec4(0.0, 0.25, 0.0, 1.0);
    if (length(p-vec3(0.0, 0.0, 1.0)) < 0.1*dotSize)
        return vec4(0.0, 0.0, 1.0, 1.0);
    if (length(p-vec3(0.0, 0.0, -1.0)) < 0.05*dotSize)
        return vec4(0.0, 0.0, 0.25, 1.0);
    return vec4(0.0);
}

void main() {
    vec3 p = transpose(rotation) * inverseProject(vPos);

    vec4 axesColor = axes(p);
    if (axesColor.a > 0.5) {
        gl_FragColor = axesColor;
        return;
    }

    vec3 q = sphericalFromCartesian(conMatrix * p);
    float col = lookup(q.xy);
    vec3 colorCons = vec3(col, 0.0, 0.0);

    vec4 color = textureCube(cubeTexture, p);
    gl_FragColor = vec4(0.5*color.rgb + 0.1*colorCons, 1.0);
}