precision highp float;

uniform sampler2D terrain;
uniform vec2 resolution;
varying vec4 vPosition;
varying vec2 vUv;

#define PI 3.14159265359

vec3 cartesian_to_spherical(vec3 u) {
    // IMPORTANT! Do not use mipmapping here since mipmap level is not be calculated correctly.
    u = normalize(u);
    float r = length(u);
    float x = clamp(0.5 + atan(u.z, u.x)/(2.0*PI), 0.0, 1.0);
    float y = clamp(1.0 - acos(u.y)/PI, 0.0, 1.0);
    return vec3(x, y, r);
}

void main() {
    float aspect = resolution.x/resolution.y;
    vec3 p = normalize((inverse(viewMatrix) * (vPosition * vec4(aspect, 1.0, 1.0, 1.0))).xyz);
    vec2 q = cartesian_to_spherical(p).xy;

    vec4 color = texture2D(terrain, q);
    vec3 color2 = vec3(q.x, q.y, 0.6);
    gl_FragColor = vec4(mix(color.rgb, color2, 1.0-color.a), 1.0);
}