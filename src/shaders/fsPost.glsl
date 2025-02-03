// Rendering HDR scene to the screen.

precision highp float;

uniform sampler2D hdrTexture;
// uniform vec2 resolution;

varying vec4 vPosition;
varying vec2 vUv;

void main() {
    float exposure = 1.0;
    vec2 p = vPosition.xy*0.5 + vec2(0.5, 0.5);
    vec3 hdrColor = texture(hdrTexture, p).rgb;
    vec3 color = vec3(1.0) - exp(-hdrColor*exposure);
    // vec3 color = hdrColor / (vec3(1.0) + hdrColor);
    gl_FragColor = vec4(color, 1.0);
}