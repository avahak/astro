precision highp float;

varying vec4 vPosition;
varying vec2 vUv;

void main() {
    vPosition = modelViewMatrix * vec4(position.xy, 0.0, 1.0);
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
    // gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}