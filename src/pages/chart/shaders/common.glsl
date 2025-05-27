#ifdef PROJECTION_MOLLWEIDE
    uniform sampler2D mollweideTexture;     // Precomputed theta values for Mollweide projection
#endif
uniform float focalLength;

#define PI 3.1415926535898
#define SQRT2 1.4142135623731

vec2 project(vec3 p) {
#ifdef PROJECTION_STEREOGRAPHIC
    float r = length(p);
    return focalLength * p.xy / (r-p.z);
#elif defined(PROJECTION_GNOMONIC)
    //...
#elif defined(PROJECTION_MOLLWEIDE)
    //...
#elif defined(PROJECTION_HAMMER)
    //...
#endif
}

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