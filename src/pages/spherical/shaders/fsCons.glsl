precision highp float;

uniform sampler2D raTexture;
uniform sampler2D deTexture;
uniform sampler2D conTexture;
uniform vec2 size;
uniform vec2 resolution;
uniform float time;
uniform mat4 mvMatrix;
uniform float scale;

varying vec2 vPosition;

#define PI 3.14159265359
#define MAX_WIDTH 1024          // Has to match cpu-side value

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

vec2 mollweideInverse(vec2 p) {
    float R = 1.0;
    float tau = asin(p.y / (R*sqrt(2.0)));
    float phi = PI*p.x / (2.0*R*sqrt(2.0)*cos(tau));
    float theta = asin((2.0*tau + sin(2.0*tau)) / PI);
    return vec2(phi, theta);
}

vec3 sphericalFromCartesian(vec3 p) {
    float r = length(p);
    float azimuth = atan(p.y, p.x);
    float rxy = length(p.xy);
    float elevation = atan(p.z, rxy);
    return vec3(azimuth, elevation, r);
}

vec3 cartesianFromSpherical(vec3 p) {
    float rxy = p.z * cos(p.y);
    return vec3(rxy*cos(p.x), rxy*sin(p.x), p.z*sin(p.y));
}

void main() {
    float border = 0.01;

    float aspect = resolution.x / resolution.y;
    vec2 pn = scale*vec2(aspect*vPosition.x/2.0, vPosition.y);
    vec2 proj = normalize(pn) * sqrt(2.0);
    float r = length((pn - proj)*vec2(2.0, 1.0)) / border;
    if (length(pn) > sqrt(2.0) && r > 1.0) {
        discard;
        return;
    } 
    vec4 color = vec4(0.0, 0.0, 0.0, 1.0);
    if (length(pn) < sqrt(2.0)) {
        vec2 p = scale*vec2(aspect*vPosition.x, vPosition.y);
        vec2 q = mollweideInverse(p);
        q = sphericalFromCartesian((mvMatrix * vec4(cartesianFromSpherical(vec3(q.xy, 1.0)), 1.0)).xyz).xy;
        float col = lookup(q);
        color = vec4(col, 0.0, 0.0, 1.0);
    }
    gl_FragColor = mix(color, vec4(1.0, 1.0, 1.0, 1.0), clamp(1.0-r*r, 0.0, 1.0));
}