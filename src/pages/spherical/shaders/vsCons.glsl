precision highp float;

varying vec2 vPosition;

void main() {
    vPosition = position.xy;
    gl_Position = vec4(position.xy, 0.0, 1.0);
}