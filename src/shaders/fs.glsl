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
varying vec4 vPosition;
varying vec2 vUv;

#define PI 3.14159265359

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

vec3 clamp_spherical(vec3 u) {
    return vec3(mod(u.x, 2.0*PI)/(2.0*PI), 1.0-u.y/PI, u.z);
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

void main() {

    float aspect = resolution.x / resolution.y;
    vec2 p0 = vPosition.xy * vec2(aspect, 1.0);
    float r = length(p0);
    float theta = 2.0*atan(r/(2.0*focalLength));
    // vec3 p = -mDir * vec3(sin(theta)*p0/r, cos(theta));
    vec3 p = mDir * vec3(cos(theta), -sin(theta)*p0.x/r, sin(theta)*p0.y/r);

    vec2 q = clamp_spherical(cartesian_to_spherical(p)).xy;

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

    // return;

    vec4 color = texture2D(terrain, q);
    color = vec4(terrainLight*color.rgb, color.a);
    vec3 color2 = vec3(q.x, q.y, 0.6);
    gl_FragColor = vec4(mix(color.rgb, color2, 1.0-color.a), 1.0);
}