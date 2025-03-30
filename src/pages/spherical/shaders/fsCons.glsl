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
    float theta = 0.5 - q.x / PI;
    float phi = mod(0.001*time + 0.5 + (q.y) / (2.0*PI), 1.0);
    int iPhi = int(floor(phi * size.x));
    int iTheta = int(floor(theta * size.y));
    float x = texelFetch(raTexture, ivec2(iPhi % MAX_WIDTH, iPhi / MAX_WIDTH), 0).r;
    float y = texelFetch(deTexture, ivec2(iTheta % MAX_WIDTH, iTheta / MAX_WIDTH), 0).r;
    float col = texture(conTexture, vec2(x, y)).r;      // TODO fix
    // if (abs(col*256.0 - mod(0.1*time, 88.0)) < 0.5)
    //     return 1.0;
    // else 
    //     return 0.0;
    return col/90.0*256.0;
}

vec2 mollweideInverse(vec2 p) {
    float R = 1.0;
    float t = asin(p.y / (R*sqrt(2.0)));
    float phi = PI*p.x / (2.0*R*sqrt(2.0)*cos(t));
    float theta = asin((2.0*t + sin(2.0*t)) / PI);
    return vec2(theta, phi);
}

void main() {
    float aspect = resolution.x / resolution.y;
    vec2 p = 4.0*vUv - vec2(2.0);
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

    vec2 q = mollweideInverse(p);
    float col = lookup(q);
    gl_FragColor = vec4(col, 0.0, 0.0, 1.0);
}