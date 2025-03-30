precision highp float;

uniform sampler2D raTexture;
uniform sampler2D deTexture;
uniform sampler2D conTexture;
uniform vec2 size;
uniform vec2 resolution;
uniform float time;

varying vec4 vPosition;
varying vec2 vUv;

#define PI 3.14159265359
#define MAX_WIDTH 1024          // Has to match cpu-side value

float lookup(vec2 q) {
    // float phi = 0.5 + atan(p.y, p.x) / (2.0*PI);
    // float theta = 0.5 + atan(p.z, length(p.xy)) / PI;
    float theta = 0.5 + q.x / PI;
    float phi = mod(q.y / (2.0*PI), 1.0);
    int iPhi = int(floor(0.5 + phi * size.x));
    int iTheta = int(floor(0.5 + theta * size.y));
    float x = texelFetch(raTexture, ivec2(iPhi % MAX_WIDTH, iPhi / MAX_WIDTH), 0).r;
    float y = texelFetch(deTexture, ivec2(iTheta % MAX_WIDTH, iTheta / MAX_WIDTH), 0).r;
    float col = texture(conTexture, vec2(x, y)).r;
    return col/90.0*256.0;
}

vec2 mollweideInverse(vec2 p) {
    float R = 1.0;
    float tau = asin(p.y / (R*sqrt(2.0)));
    float phi = PI*p.x / (2.0*R*sqrt(2.0)*cos(tau));
    float theta = asin((2.0*tau + sin(2.0*tau)) / PI);
    return vec2(theta, phi);
}

void main() {
    float aspect = resolution.x / resolution.y;
    float scale = 3.0;
    vec2 p = scale*(vUv - vec2(0.5));
    vec2 pn = vec2(aspect*p.x/2.0, p.y);
    vec2 proj = normalize(pn) * sqrt(2.0);
    float r = length((pn - proj)*vec2(2.0, 1.0));
    if (length(pn) > sqrt(2.0) && r > 0.02) {
        discard;
        return;
    } else if (length(pn) > sqrt(2.0)) {
        gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0-abs(2.0*r/0.02 - 1.0));  // antialiasing
        return;
    }

    vec2 q = mollweideInverse(vec2(aspect*p.x, p.y));
    float col = lookup(q);
    gl_FragColor = vec4(col, 0.0, 0.0, 1.0);
}