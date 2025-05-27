flat in vec3 vColor;
flat in float vSize;

float FALLOFF = 0.1;
float FALLOFF2 = 0.01;

void main() {
    vec2 coord = 2.0*gl_PointCoord - vec2(1.0);
    float d = length(coord)*(vSize+16.0);
    // float alpha = clamp(FALLOFF*(vSize-t), 0.0, 1.0);
    float a = clamp(FALLOFF*(vSize-d), 0.0, 1.0);
    float alpha = clamp(0.5*vSize*a, 0.0, 1.0);
    float a2 = clamp(FALLOFF2*(vSize+16.0-d), 0.0, 1.0);
    float alpha2 = clamp(0.02*vSize*a2, 0.0, 1.0);
    if (alpha+(1.0-alpha)*alpha2 < 0.01) {
        // gl_FragColor = vec4(1.0, 0.2, 0.5, 1.0);
        // return;
        discard;
    }

    gl_FragColor = vec4(vColor, alpha+(1.0-alpha)*alpha2);
}