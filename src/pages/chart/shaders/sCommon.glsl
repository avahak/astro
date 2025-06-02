precision highp float;

uniform sampler2D mollweideTexture;     // Precomputed theta values for Mollweide projection
uniform float focalLength;

#define PI 3.1415926535898
#define SQRT2 1.4142135623731
#define MAX_WIDTH 1024          // Has to match cpu-side value

vec3 sphericalFromCartesian(vec3 p) {
    float r = length(p);
    float rxy = length(p.xy);
    float az = atan(p.y, p.x);
    float el = atan(p.z, rxy);
    return vec3(az, el, r);
}

vec3 cartesianFromSpherical(vec3 p) {
    float rxy = p.z * cos(p.y);
    return vec3(rxy*cos(p.x), rxy*sin(p.x), p.z*sin(p.y));
}

vec3 project(vec3 p, bool isCartesian) {
    #ifdef PROJECTION_STEREOGRAPHIC
        float r = length(p);
        vec2 q = p.xy / (r-p.z);
        return vec3(focalLength * q, 0.1+0.9*length(q)/20.0);
    #elif defined(PROJECTION_GNOMONIC)
        float r = length(p);
        return vec3(-focalLength * p.xy / p.z, 1.0+0.5*p.z/r);
    #elif defined(PROJECTION_MOLLWEIDE)
        p = isCartesian ? vec3(-p.z, p.x, p.y) : p;
        vec3 sp = isCartesian ? sphericalFromCartesian(p) : p;
        // Use precomputed texture to solve 2*tau+sin(2*tau)=PI*sin(elevation)
        float tau = sign(sp.y) * texture(mollweideTexture, vec2(abs(sp.y)/(PI/2.0), 0.0)).r;
        float x = 2.0*SQRT2/PI * sp.x * cos(tau);
        float y = SQRT2 * sin(tau);
        return vec3(focalLength * x, focalLength * y, 0.1);
    #elif defined(PROJECTION_HAMMER)
        p = isCartesian ? vec3(-p.z, p.x, p.y) : p;
        vec3 sp = isCartesian ? sphericalFromCartesian(p) : p;
        float denom = sqrt(1.0 + cos(sp.y)*cos(sp.x/2.0));
        float x = 2.0*SQRT2 * cos(sp.y) * sin(sp.x/2.0) / denom;
        float y = SQRT2 * sin(sp.y) / denom;
        return vec3(focalLength * x, focalLength * y, 0.1);
    #endif
}

vec3 inverseProject(vec2 p) {
    #ifdef PROJECTION_STEREOGRAPHIC
        vec2 q = p / focalLength;
        float t = 2.0 / (1.0 + q.x*q.x + q.y*q.y);
        return vec3(t*q, 1.0-t);
    #elif defined(PROJECTION_GNOMONIC)
        vec2 q = p / focalLength;
        return vec3(q, -1.0);
    #elif defined(PROJECTION_MOLLWEIDE)
        vec2 q = p / focalLength;
        float tau = asin(q.y / SQRT2);
        float el = asin((2.0*tau + sin(2.0*tau)) / PI);
        float az = (PI*q.x) / (2.0*SQRT2*cos(tau));
        vec3 rp = cartesianFromSpherical(vec3(az, el, 1.0));
        return vec3(rp.y, rp.z, -rp.x);
    #elif defined(PROJECTION_HAMMER)
        vec2 q = p / focalLength;
        float z = sqrt(1.0 - 0.0625*q.x*q.x - 0.25*q.y*q.y);
        float az = 2.0*atan(z*q.x, 4.0*z*z - 2.0);
        float el = asin(z*q.y);
        vec3 rp = cartesianFromSpherical(vec3(az, el, 1.0));
        return vec3(rp.y, rp.z, -rp.x);
    #endif
}