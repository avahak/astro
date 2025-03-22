precision highp float;

in vec3 color;
in vec4 vPos;

void main() {
    // float r = length(vPos.xy / vPos.z);
    // if (r > 0.4) {
    //     discard;
    //     return;
    // }
    gl_FragColor = vec4(color, 1.0);
}