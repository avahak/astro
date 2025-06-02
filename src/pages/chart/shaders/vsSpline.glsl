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

uniform int numSegments;                // Must be even to allow segment pairing
uniform sampler2D controlPointTexture;  // B-spline control points and colors
uniform isampler2D indexTexture;
uniform mat3 rotation;

out vec3 color;
out vec4 vPos;

vec4 splineCoeffs(float t) {
    float s1 = 1.0 - t;
    float s2 = s1*s1;
    float s3 = s2*s1;
    float t2 = t*t;
    float t3 = t2*t;
    return vec4(s3, 3.0*t3-6.0*t2+4.0, 3.0*t2*s1+3.0*t+1.0, t3) / 6.0;
}

// Find elevation angle where segment [p,q] crosses antimeridian
float antimeridianIntersectionElevation(vec3 p, vec3 q) {
    float t = -p.x / (q.x-p.x);
    vec3 pt = p + t*(q-p);
    float rxz = length(pt.xz);
    float el = atan(pt.y, rxz);
    return el;
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
    vec3 p = rotation * (weights.x*cp0 + weights.y*cp1 + weights.z*cp2 + weights.w*cp3);
    color = weights.x*color0 + weights.y*color1 + weights.z*color2 + weights.w*color3;


    #if defined(PROJECTION_MOLLWEIDE) || defined(PROJECTION_HAMMER)
        vec3 sp = sphericalFromCartesian(vec3(-p.z, p.x, p.y));
        // Discontinuity handling when line segments cross the antimeridian
        if (index % 2 == 1) {
            // Vertex is a middle vertex and may have to be moved.
            float prevT = float(index-1) / float(numSegments);
            float nextT = float(index+1) / float(numSegments);
            vec4 prevWeights = splineCoeffs(prevT);
            vec4 nextWeights = splineCoeffs(nextT);
            vec3 prevPos = rotation * (prevWeights.x*cp0 + prevWeights.y*cp1 + prevWeights.z*cp2 + prevWeights.w*cp3);
            vec3 nextPos = rotation * (nextWeights.x*cp0 + nextWeights.y*cp1 + nextWeights.z*cp2 + nextWeights.w*cp3);
            // Base is [prevPos,nextPos] and its subsegment pair is [prevPos,pos], [pos,nextPos]

            float prevAzimuth = atan(prevPos.x, -prevPos.z);
            float nextAzimuth = atan(nextPos.x, -nextPos.z);
            // Check if either subsegment spans >180 degrees
            if ((abs(prevAzimuth-sp.x) > PI) || (abs(sp.x-nextAzimuth) > PI)) {
                if (abs(prevAzimuth-nextAzimuth) > PI) {
                    // Base segment crosses antimeridian - split at intersection point
                    sp.y = antimeridianIntersectionElevation(prevPos, nextPos);
                    // Determine which side of the antimeridian to clamp to
                    if (vIndex == 0)
                        // Subsegment [pos,nextPos]
                        sp.x = nextAzimuth > 0.0 ? PI : -PI;
                    else
                        // Subsegment [prevPos,pos]
                        sp.x = prevAzimuth > 0.0 ? PI : -PI;
                } else {
                    // Special case: subsegment crosses but base doesn't - use base segment midpoint
                    vec3 tp = 0.5*prevPos + 0.5*nextPos;
                    sp = sphericalFromCartesian(vec3(-tp.z, tp.x, tp.y));
                }

                // color = vec3(1.0, 0.0, 0.0);
            }
        }
        vPos = vec4(project(sp, false), 1.0);
    #else 
        vPos = vec4(project(p, true), 1.0);
    #endif


    gl_Position = projectionMatrix * modelViewMatrix * vPos;
}