precision highp float;

uniform sampler2D starDataTexture;
uniform float focalLength;
uniform mat3 rotation;

flat out vec3 vColor;
flat out float vSize;

#define MAX_WIDTH 1024
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

// Computes Mollweide projection from (azimuth,elevation angle)
// vec2 mollweide(vec2 azel) {
//     // Use precomputed texture to solve 2*tau+sin(2*tau)=PI*sin(elevation)
//     float tau = sign(azel.y) * texture(mollweideTexture, vec2(abs(azel.y)/(PI/2.0), 0.0)).r;
//     float x = 2.0*SQRT2/PI * azel.x * cos(tau);
//     float y = SQRT2 * sin(tau);
//     return vec2(x, y);
// }

// Computes Hammer projection from (azimuth,elevation angle)
// vec2 hammer(vec2 azel) {
//     float denom = sqrt(1.0 + cos(azel.y)*cos(azel.x/2.0));
//     float x = 2.0*SQRT2 * cos(azel.y) * sin(azel.x/2.0) / denom;
//     float y = SQRT2 * sin(azel.y) / denom;
//     return vec2(x, y);
// }

// vec3 fisheyeStereographic(vec3 p0) {
//     float r0 = length(p0);
//     float r0xy = length(p0.xy);
//     float phi = 0.5 * atan(r0xy, -p0.z);
//     vec3 p = r0 * vec3(2.0*focalLength * sin(phi)*p0.xy/r0xy, -cos(phi));
//     return p;
//     // Now r on image plane is c*|p.xy|/(-p.z) = c*2f*tan(phi) = c*2f*tan(theta/2), 
//     // i.e. r = c*2f tan(theta/2), which is the formula for fisheye lens 
//     // with stereographic projection.
// }

vec3 linearFromSRGB(vec3 color) {
    return mix(
        color / 12.92,
        pow((color + 0.055) / 1.055, vec3(2.4)),
        step(0.04045, color)
    );
}

vec3 sRGBFromLinear(vec3 color) {
    return mix(
        12.92 * color,
        1.055 * pow(color, vec3(1.0/2.4)) - 0.055,
        step(0.0031308, color)
    );
}

vec3 rgbFromBv(float bv) {
    // Normalize B-V to [-1, 1] range
    float x = clamp(-1.0 + 2.0 * (bv + 0.53575) / 9.3092, -1.0, 1.0);
    vec3 color = vec3(1.0, 0.0, 1.0);
    
    // Red component
    if (bv < 0.46305)
        color.r = 18.078 + x * (45.766 + x * (39.989 + x * 11.973));
    
    // Blue component
    if (bv > 4.067)
        color.b = 0.0;
    else if (bv > 0.46244)
        color.b = -0.00065961 + x * (-0.047117 + x * (0.98685 + x * (2.9745 + x * (9.0223 + x * (10.758 + x * 6.7196)))));
    
    // Green component
    if (bv < 0.46296)
        color.g = 6.9697 + x * (14.146 + x * (10.356 + x * 2.6782));
    else
        color.g = 0.22605 + x * (-0.34828 + x * (0.36165 + x * (-0.25874 + x * (0.063761 + x * (-0.1471 + x * 0.14321)))));
    
    return sRGBFromLinear(clamp(color, 0.0, 1.0));
}

void main() {
    int iIndex = gl_InstanceID;

    int index = 2 * iIndex;
    vec4 v1 = texelFetch(starDataTexture, ivec2(index % MAX_WIDTH, index / MAX_WIDTH), 0);
    vec4 v2 = texelFetch(starDataTexture, ivec2((index+1) % MAX_WIDTH, (index+1) / MAX_WIDTH), 0);

    vec3 p = v1.xyz;
    vec3 dp = vec3(v1.a, v2.xy);
    float vMag = v2.z;
    float bmv = v2.a;

    vColor = rgbFromBv(bmv);
    vSize = max(1.0, sqrt(focalLength)*(5.0-0.7*vMag+0.02*vMag*vMag));            // ad hoc

    gl_PointSize = 16.0 + vSize;

    vec3 q = rotation * p;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(project(q), 0.0, 1.0);
}