// IMPORTANT! Do not use mipmapping here since mipmap level is not be calculated correctly.

precision highp float;

uniform sampler2D terrain;
uniform vec2 resolution;
uniform vec3 pSun;
uniform vec3 pMoon;
uniform vec2 vDir;
uniform mat3 mDir;
varying vec4 vPosition;
varying vec2 vUv;

#define PI 3.14159265359

vec3 cartesian_to_spherical(vec3 u) {
    float r = length(u);
    float phi = atan(u.z, u.x);
    float theta = acos(u.y/r);
    return vec3(phi, theta, r);
}

vec3 spherical_to_cartesian(vec3 v) {
    float x = v.z*sin(v.y)*cos(v.x);
    float z = v.z*sin(v.y)*sin(v.x);
    float y = v.z*cos(v.y);
    return vec3(x, y, z);
}

vec3 clampSpherical(vec3 u) {
    return vec3(mod(u.x, 2.0*PI)/(2.0*PI), u.y/PI, u.z);
}

void main() {

    float aspect = resolution.x / resolution.y;
    vec3 p0 = (inverse(viewMatrix) * (vPosition * vec4(aspect, 1.0, 1.0, 1.0))).xyz;
    float r = length(p0.xy);
    float k = 2.0;
    float f = 0.5;
    float t = r / (k*f);
    float gi = atan(t);      // t, asin(t), atan(t)
    float theta = k*gi;
    if (abs(theta) > PI/2.0) {
        // r = -r;
    }
    vec3 p = -mDir * vec3(sin(theta)*p0.xy/r, cos(theta));

    vec2 q = clampSpherical(cartesian_to_spherical(p)).xy;

    if (length(p-vec3(1.0, 0.0, 0.0)) < 0.1) {
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        return;
    }
    if (length(p-vec3(-1.0, 0.0, 0.0)) < 0.05) {
        gl_FragColor = vec4(0.25, 0.0, 0.0, 1.0);
        return;
    }
    if (length(p-vec3(0.0, 1.0, 0.0)) < 0.1) {
        gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);
        return;
    }
    if (length(p-vec3(0.0, -1.0, 0.0)) < 0.05) {
        gl_FragColor = vec4(0.0, 0.25, 0.0, 1.0);
        return;
    }
    if (length(p-vec3(0.0, 0.0, 1.0)) < 0.1) {
        gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);
        return;
    }
    if (length(p-vec3(0.0, 0.0, -1.0)) < 0.05) {
        gl_FragColor = vec4(0.0, 0.0, 0.25, 1.0);
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

    // return;

    vec4 color = texture2D(terrain, q);
    vec3 color2 = vec3(q.x, q.y, 0.6);
    gl_FragColor = vec4(mix(color.rgb, color2, 1.0-color.a), 1.0);
}