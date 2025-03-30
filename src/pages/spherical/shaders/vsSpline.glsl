/*
 * Renders uniform cubic B-splines in spherical coordinates (azimuth, elevation),
 * suitable for projections like Mollweide or Hammer. Splines are split into line segments
 * using instanced rendering.
 *
 * Problem: discontinuity at the antimeridian (y=0, x<=0) causes incorrect wrapping of
 * line segments, creating visual artifacts.
 *
 * Solution:
 * 1. Pair segments within base segments (even-indexed vertices).
 * 2. If either subsegment crosses the antimeridian, move the middle points of the two subsegments:
 *    - Use elevation from the intersection point of the base segment.
 *    - Clamp azimuth to the antimeridian on same side as the base segment endpoint.
 * 3. Special case: If a subsegment intersects but the base does not, follow the base segment.
 */

precision highp float;

// uniform vec2 resolution;
uniform int numSegments;                // Must be even to allow segment pairing
uniform sampler2D controlPointTexture;  // B-spline control points and colors
uniform isampler2D indexTexture;
uniform sampler2D mollweideTexture;     // Precomputed theta values for Mollweide projection

out vec3 color;
out vec4 vPos;

#define PI 3.1415926535898
#define SQRT2 1.4142135623731

// MAX_WIDTH has to match with CPU-side value
#define MAX_WIDTH 1024

vec4 splineCoeffs(float t) {
    float s1 = 1.0 - t;
    float s2 = s1*s1;
    float s3 = s2*s1;
    float t2 = t*t;
    float t3 = t2*t;
    return vec4(s3, 3.0*t3-6.0*t2+4.0, 3.0*t2*s1+3.0*t+1.0, t3) / 6.0;
}

// Projects p.xyz to spherical angle pair (azimuth,elevation)
vec2 sphericalCoordsProjection(vec4 p) {
    float azimuth = atan(p.y, p.x);
    float rxy = length(p.xy);
    float elevation = atan(p.z, rxy);
    return vec2(azimuth, elevation);
}

// Find elevation angle where segment [p,q] crosses antimeridian
float antimeridianIntersectionElevation(vec3 p, vec3 q) {
    float t = -p.y / (q.y-p.y);
    vec3 pt = p + t*(q-p);      // pt.y=0
    float rxy = length(pt.xy);
    float elevation = atan(pt.z, rxy);
    return elevation;
}

// Computes Mollweide projection from (azimuth,elevation angle)
vec2 mollweide(vec2 azel) {
    // Use precomputed texture to solve 2*theta+sin(2*theta)=PI*sin(elevation)
    float theta = sign(azel.y) * texture(mollweideTexture, vec2(abs(azel.y)/(PI/2.0), 0.0)).r;
    float x = 2.0*SQRT2/PI * azel.x * cos(theta);
    float y = SQRT2 * sin(theta);
    return vec2(x, y);
}

// Computes Hammer projection from (azimuth,elevation angle)
vec2 hammer(vec2 azel) {
    float denom = sqrt(1.0 + cos(azel.y)*cos(azel.x/2.0));
    float x = 2.0*SQRT2 * cos(azel.y) * sin(azel.x/2.0) / denom;
    float y = SQRT2 * sin(azel.y) / denom;
    return vec2(x, y);
}

void main() {
    int vIndex = gl_VertexID;       // 0 = segment start, 1 = segment end
    int iIndex = gl_InstanceID;

    int splineIndex = iIndex / numSegments;
    int i = 2 * texelFetch(indexTexture, ivec2(splineIndex % MAX_WIDTH, splineIndex / MAX_WIDTH), 0).r;

    // Fetch 4 control points and their colors
    vec3 cp0 =    texelFetch(controlPointTexture, ivec2(i % MAX_WIDTH, i / MAX_WIDTH), 0).rgb;
    vec3 color0 = texelFetch(controlPointTexture, ivec2((i+1) % MAX_WIDTH, (i+1) / MAX_WIDTH), 0).rgb;
    vec3 cp1 =    texelFetch(controlPointTexture, ivec2((i+2) % MAX_WIDTH, (i+2) / MAX_WIDTH), 0).rgb;
    vec3 color1 = texelFetch(controlPointTexture, ivec2((i+3) % MAX_WIDTH, (i+3) / MAX_WIDTH), 0).rgb;
    vec3 cp2 =    texelFetch(controlPointTexture, ivec2((i+4) % MAX_WIDTH, (i+4) / MAX_WIDTH), 0).rgb;
    vec3 color2 = texelFetch(controlPointTexture, ivec2((i+5) % MAX_WIDTH, (i+5) / MAX_WIDTH), 0).rgb;
    vec3 cp3 =    texelFetch(controlPointTexture, ivec2((i+6) % MAX_WIDTH, (i+6) / MAX_WIDTH), 0).rgb;
    vec3 color3 = texelFetch(controlPointTexture, ivec2((i+7) % MAX_WIDTH, (i+7) / MAX_WIDTH), 0).rgb;

    // B-spline evaluation
    int index = (iIndex % numSegments) + vIndex;
    float t = float(index) / float(numSegments);
    vec4 weights = splineCoeffs(t);
    vec4 pos = modelViewMatrix * vec4(weights.x*cp0 + weights.y*cp1 + weights.z*cp2 + weights.w*cp3, 1.0);
    color = weights.x*color0 + weights.y*color1 + weights.z*color2 + weights.w*color3;
    float r = length(pos.xyz);




    // stereographic projection
    // vPos = vec4(pos.xy / (r-pos.z), -1.0, 1.0);
    // vPos.xyz = r * normalize(vPos.xyz);
    // gl_Position = projectionMatrix * vPos;
    // return;








    vec2 azel = sphericalCoordsProjection(pos);
    // Discontinuity handling when line segments cross the antimeridian
    if (index % 2 == 1) {
        // Vertex is a middle vertex and may have to be moved.
        float prevT = float(index-1) / float(numSegments);
        float nextT = float(index+1) / float(numSegments);
        vec4 prevWeights = splineCoeffs(prevT);
        vec4 nextWeights = splineCoeffs(nextT);
        vec4 prevPos = modelViewMatrix * vec4(prevWeights.x*cp0 + prevWeights.y*cp1 + prevWeights.z*cp2 + prevWeights.w*cp3, 1.0);
        vec4 nextPos = modelViewMatrix * vec4(nextWeights.x*cp0 + nextWeights.y*cp1 + nextWeights.z*cp2 + nextWeights.w*cp3, 1.0);        
        // Base is [prevPos,nextPos] and its subsegment pair is [prevPos,pos], [pos,nextPos].

        float prevAzimuth = atan(prevPos.y, prevPos.x);
        float nextAzimuth = atan(nextPos.y, nextPos.x);
        // Check if either subsegment spans >180 degrees
        if ((abs(prevAzimuth-azel.x) > PI) || (abs(azel.x-nextAzimuth) > PI)) {
            if (abs(prevAzimuth-nextAzimuth) > PI) {
                // Base segment crosses antimeridian - split at intersection point
                azel.y = antimeridianIntersectionElevation(prevPos.xyz, nextPos.xyz);
                // Determine which side of the antimeridian to clamp to
                if (vIndex == 0)
                    // Subsegment [pos,nextPos]
                    azel.x = nextAzimuth > 0.0 ? PI : -PI;
                else
                    // Subsegment [prevPos,pos]
                    azel.x = prevAzimuth > 0.0 ? PI : -PI;
            } else 
                // Special case: subsegment crosses but base doesn't - use base segment midpoint
                azel = sphericalCoordsProjection(0.5*prevPos + 0.5*nextPos);

            // color = vec3(1.0, 0.0, 0.0);
        }
    }
    // vPos = vec4(azel, -1.0, 1.0);
    // vPos = vec4(mollweide(azel), -1.0, 1.0);
    // vPos = vec4(hammer(azel), -1.0, 1.0);
    // vPos.xyz = r * normalize(vPos.xyz);


    vPos = vec4(mollweide(azel)/1.5, -r, 1.0);
    // vPos = vec4(0.5*hammer(azel), -r, 1.0);
    gl_Position = projectionMatrix * vPos;
}