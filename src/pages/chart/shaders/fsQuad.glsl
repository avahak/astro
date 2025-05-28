// For constellations
uniform sampler2D raTexture;
uniform sampler2D deTexture;
uniform sampler2D conTexture;
uniform vec2 size;
uniform mat3 conMatrix;

uniform samplerCube cubeTexture;
uniform mat3 rotation;

in vec2 vPos;

float conLookup(vec2 q) {
    float theta = 0.5 + q.y / PI;
    float phi = mod(q.x / (2.0*PI), 1.0);
    int iPhi = int(floor(0.5 + phi * size.x));
    int iTheta = int(floor(0.5 + theta * size.y));
    float x = texelFetch(raTexture, ivec2(iPhi % MAX_WIDTH, iPhi / MAX_WIDTH), 0).r;
    float y = texelFetch(deTexture, ivec2(iTheta % MAX_WIDTH, iTheta / MAX_WIDTH), 0).r;
    float col = texture(conTexture, vec2(x, y)).r;
    return col/90.0*256.0;
}

vec4 axes(vec3 p) {
    float dotSize = 1.0;
    if (length(p-vec3(1.0, 0.0, 0.0)) < 0.1*dotSize)
        return vec4(1.0, 0.0, 0.0, 1.0);
    if (length(p-vec3(-1.0, 0.0, 0.0)) < 0.05*dotSize)
        return vec4(0.25, 0.0, 0.0, 1.0);
    if (length(p-vec3(0.0, 1.0, 0.0)) < 0.1*dotSize)
        return vec4(0.0, 1.0, 0.0, 1.0);
    if (length(p-vec3(0.0, -1.0, 0.0)) < 0.05*dotSize)
        return vec4(0.0, 0.25, 0.0, 1.0);
    if (length(p-vec3(0.0, 0.0, 1.0)) < 0.1*dotSize)
        return vec4(0.0, 0.0, 1.0, 1.0);
    if (length(p-vec3(0.0, 0.0, -1.0)) < 0.05*dotSize)
        return vec4(0.0, 0.0, 0.25, 1.0);
    return vec4(0.0);
}

void main() {
    vec3 p = normalize(transpose(rotation) * inverseProject(vPos));

    float borderStrength = 0.0;
    #if defined(PROJECTION_MOLLWEIDE) || defined(PROJECTION_HAMMER)
        float BORDER = 0.005;
        vec2 pn = vec2(vPos.x/2.0, vPos.y);
        vec2 proj = normalize(pn) * SQRT2 * focalLength;
        float r = length((pn - proj)*vec2(2.0, 1.0)) / BORDER;
        if (abs(r) < 1.0)
            borderStrength = smoothstep(-1.0, -0.5, r)*(1.0-smoothstep(0.5, 1.0, r));
        if (length(pn) > SQRT2 * focalLength) {
            if (r > 1.0)
                discard;
            gl_FragColor = vec4(vec3(borderStrength), 1.0);
            return;
        }
    #endif

    vec4 axesColor = axes(p);
    if (axesColor.a > 0.5) {
        gl_FragColor = vec4(mix(axesColor.rgb, vec3(1.0), borderStrength), 1.0);
        return;
    }

    vec3 q = sphericalFromCartesian(conMatrix * p);
    float col = conLookup(q.xy);
    vec3 colorCons = vec3(col, 0.0, 0.0);

    vec4 color = textureCube(cubeTexture, p);
    gl_FragColor = vec4(mix(0.5*color.rgb + 0.1*colorCons, vec3(1.0), borderStrength), 1.0);
}