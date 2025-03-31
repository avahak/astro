var J=Object.defineProperty;var N=(n,e,t)=>e in n?J(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var i=(n,e,t)=>N(n,typeof e!="symbol"?e+"":e,t);import{S as G,T as j,a as $,C as F,b as I,P as C,M as _,c as P,l as Q,n as Z,e as Y,d as s,m as f,f as ee,p as te,r as M,x as k,z as U,g as ne,s as re,t as ie,W as se,h as ae,i as oe,F as ce,R as he,N as K,j as le,O as pe,V as ue,k as de,o as q,q as me}from"./index-DquXr3RX.js";const A=`precision highp float;\r
\r
varying vec4 vPosition;\r
varying vec2 vUv;\r
\r
void main() {\r
    vPosition = vec4(position.xy, 0.0, 1.0);\r
    vUv = uv;\r
    gl_Position = vPosition;\r
    // gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r
}`,ve=`// We use the standard xyz coordinate system here, not the GLSL coordinate system.\r
// IMPORTANT! Do not use mipmapping here since mipmap level is not be calculated correctly.\r
\r
precision highp float;\r
\r
uniform sampler2D terrain;\r
uniform sampler2D depthTexture;\r
uniform vec2 resolution;\r
uniform vec3 pSun;\r
uniform vec3 pMoon;\r
uniform vec3 pJupiter;\r
uniform vec2 vDir;\r
uniform mat3 vMat;\r
uniform float focalLength;\r
uniform float terrainLight;\r
\r
uniform vec3 radii;         // (earth radius, atmosphere radius, observer radius)\r
uniform vec3 scatterCoeff;  // scattering coefficients for r,g,b\r
\r
varying vec4 vPosition;\r
varying vec2 vUv;\r
\r
#define PI 3.14159265359\r
#define EP 1.0E-7\r
\r
vec3 cartesian_to_spherical(vec3 u) {\r
    float r = length(u);\r
    float phi = atan(u.y, u.x);\r
    float theta = acos(u.z/r);\r
    return vec3(phi, theta, r);\r
}\r
\r
vec3 spherical_to_cartesian(vec3 v) {\r
    float x = v.z*sin(v.y)*cos(v.x);\r
    float y = v.z*sin(v.y)*sin(v.x);\r
    float z = v.z*cos(v.y);\r
    return vec3(x, y, z);\r
}\r
\r
vec2 clamp_spherical(vec3 u) {\r
    return vec2(mod(u.x, 2.0*PI)/(2.0*PI), 1.0-u.y/PI);\r
}\r
\r
vec4 axes(vec3 p) {\r
    if (length(p-vec3(1.0, 0.0, 0.0)) < 0.1)\r
        return vec4(1.0, 0.0, 0.0, 1.0);\r
    if (length(p-vec3(-1.0, 0.0, 0.0)) < 0.05)\r
        return vec4(0.25, 0.0, 0.0, 1.0);\r
    if (length(p-vec3(0.0, 1.0, 0.0)) < 0.1)\r
        return vec4(0.0, 1.0, 0.0, 1.0);\r
    if (length(p-vec3(0.0, -1.0, 0.0)) < 0.05)\r
        return vec4(0.0, 0.25, 0.0, 1.0);\r
    if (length(p-vec3(0.0, 0.0, 1.0)) < 0.1)\r
        return vec4(0.0, 0.0, 1.0, 1.0);\r
    if (length(p-vec3(0.0, 0.0, -1.0)) < 0.05)\r
        return vec4(0.0, 0.0, 0.25, 1.0);\r
    return vec4(0.0);\r
}\r
\r
// Given sphere S(s0,r) and ray t->p0+t*v (t>=0), returns (segment start t, length of seg)\r
// for segment of ray inside the sphere or (-1,0) if no intersection.\r
vec2 raySphereIntersection(vec3 s0, float r, vec3 p0, vec3 v) {\r
    // |p0+t*v-s0|=r\r
    // |p0-s0|^2 + 2*t*<p0-s0,v> + t*t*<v,v> = r*r\r
    float a = dot(v, v);        // =1\r
    float b = 2.0*dot(p0-s0, v);\r
    float c = dot(p0-s0, p0-s0) - r*r;\r
    // a*t^2 + b*t + c = 0\r
    // t = (-b +- sqrt(b*b-4*a*c))/(2*a)\r
    float d = b*b - 4.0*a*c;\r
    if (d <= 0.0)\r
        return vec2(-1.0, 0.0);\r
    float t1 = (-b - sqrt(d))/(2.0*a);\r
    float t2 = (-b + sqrt(d))/(2.0*a);\r
    if (t2 <= 0.0)\r
        return vec2(-1.0, 0.0);\r
    if (t1 <= 0.0)\r
        return vec2(0.0, t2);\r
    return vec2(t1, t2-t1);\r
}\r
\r
vec2 density(vec3 p) {\r
    vec2 densityFalloff = vec2(2.0, 8.0);\r
    float h01 = clamp((length(p) - radii.x)/(radii.y-radii.x), 0.0, 1.0);\r
    return exp(-densityFalloff*h01)*(1.0-h01);\r
}\r
\r
vec2 opticalDepth(vec3 rayOrigin, vec3 rayDir, float rayLength) {\r
    int numSamples = 10;\r
    float stepSize = rayLength/(float(numSamples)-1.0);\r
    vec2 depth = vec2(0.0);\r
    for (int k = 0; k < numSamples; k++) {\r
        vec3 samplePoint = rayOrigin + float(k)*rayDir*stepSize;\r
        depth += density(samplePoint)*stepSize;\r
    }\r
    return depth;\r
}\r
\r
vec2 opticalDepth2(vec3 rayOrigin, vec3 rayDir) {\r
    int numSamples = 200;\r
    float stepSize = 2.0*radii.y/(float(numSamples)-1.0);\r
    vec2 depth = vec2(0.0);\r
    for (int k = 0; k < numSamples; k++) {\r
        vec3 samplePoint = rayOrigin + float(k)*rayDir*stepSize;\r
        depth += density(samplePoint)*stepSize;\r
    }\r
    return depth;\r
}\r
\r
vec2 opticalDepthTextureLookup(float h01, float dp01) {\r
    vec3 rayOrigin = vec3(0.0, radii.z+h01*(radii.y-radii.x), 0.0);\r
    float dp = 1.0 - 2.0*dp01;\r
    vec3 rayDir = vec3(sqrt(1.0-dp*dp), dp, 0.0);\r
    return opticalDepth2(rayOrigin, rayDir);\r
}\r
\r
vec2 opticalDepthFromTexture(vec3 rayOrigin, vec3 rayDir) {\r
    float h01 = (length(rayOrigin)-radii.x)/(radii.y-radii.x);\r
    float dp01 = 0.5 - dot(rayOrigin, rayDir)/length(rayOrigin)*0.5;\r
    // return opticalDepthTextureLookup(h01, dp01);\r
\r
    vec2 tex = texture(depthTexture, vec2(h01, dp01)).rg;\r
    // return 2.0*tex;\r
    return exp(vec2(2.0-1.0/tex.x, 2.0-1.0/tex.y));\r
}\r
\r
vec3 atmosphere(vec3 v) {\r
    vec3 observerPos = vec3(0.0, 0.0, radii.z);\r
    vec2 tInner = raySphereIntersection(vec3(0.0), radii.x, observerPos, v);\r
    vec2 tOuter = raySphereIntersection(vec3(0.0), radii.y, observerPos, v);\r
    vec2 t = vec2(tOuter.x, tInner.x >= 0.0 ? min(tOuter.y, tInner.x-tOuter.x) : tOuter.y);\r
    // return vec3(0.0+0.0*atan(100.0*t.x)/PI, t.y, 0.0);\r
    // if ()\r
    //     return vec3(1.0, 0.0, 0.0);\r
\r
    vec3 dirToSun = normalize(pSun);\r
    float c_theta = dot(dirToSun, v);\r
    float c_theta2 = c_theta*c_theta;\r
    float K_Rayleigh = 3.0/4.0*(1.0 + c_theta2);\r
    float g = 0.8;  // asymmetry parameter, in (-1,1), positive for forward scattering\r
    float K_Mie = 2.0*(1.0-g*g)/(4.0*PI)/pow(1.0+g*g-2.0*g*c_theta, 3.0/2.0);\r
\r
    float scatterStr = 500.0;\r
\r
    // Segment inside atmosphere is observerPos+t*v where t in [t.x, t.x+t.y]\r
    int stepNum = 20;\r
    float stepSize = t.y/float(stepNum);\r
    vec3 pos0 = observerPos + t.x*v;// + 0.5*stepSize*v; \r
    vec3 pos = pos0; \r
    vec3 lightRayleigh = vec3(0.0);\r
    float lightMie = 0.0;\r
    // vec3 light2 = vec3(0.0);\r
    vec2 viewRayOpticalDepth = vec2(0.0);\r
    for (int k = 0; k < stepNum; k++) {\r
        float sunRayLength = raySphereIntersection(vec3(0.0), radii.y, pos, dirToSun).y;\r
        vec2 sunRayOpticalDepth = opticalDepth(pos, dirToSun, sunRayLength);\r
        // vec2 viewRayOpticalDepth = opticalDepth(pos, -v, float(k)*stepSize);\r
        // vec2 viewRayOpticalDepth = opticalDepth(pos0, v, float(k)*stepSize);\r
\r
        // vec2 sunRayOpticalDepth = opticalDepthFromTexture(pos, dirToSun);\r
        // vec2 viewRayOpticalDepth = opticalDepthFromTexture(pos0, v) - opticalDepthFromTexture(pos, v);\r
\r
        vec3 lightInRayleigh = exp(-(sunRayOpticalDepth.x + viewRayOpticalDepth.x)*scatterCoeff*scatterStr);\r
        float lightInMie = exp(-(sunRayOpticalDepth.x + viewRayOpticalDepth.x)*scatterStr);\r
\r
        vec2 d = density(pos) * stepSize;\r
        viewRayOpticalDepth += d;\r
        lightRayleigh += K_Rayleigh * d.x * lightInRayleigh * scatterCoeff * scatterStr;\r
        lightMie += K_Mie * d.y * lightInMie * scatterStr;\r
        pos += v * stepSize;\r
    }\r
\r
    return lightRayleigh + vec3(lightMie);\r
}\r
\r
void main() {\r
\r
    float aspect = resolution.x / resolution.y;\r
    vec2 p0 = vPosition.xy * vec2(aspect, 1.0);\r
    float r = length(p0);\r
    float theta = 2.0*atan(r/(2.0*focalLength));\r
    // vec3 p = -vMat * vec3(sin(theta)*p0/r, cos(theta));\r
    vec3 p = vMat * vec3(cos(theta), -sin(theta)*p0.x/r, sin(theta)*p0.y/r);\r
\r
    vec2 q = clamp_spherical(cartesian_to_spherical(p));\r
\r
    vec4 axesColor = axes(p);\r
    if (axesColor.a > 0.5) {\r
        gl_FragColor = axesColor;\r
        return;\r
    }\r
\r
    if (length(p-normalize(pSun)) < 0.1) {\r
        gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);\r
        return;\r
    }\r
\r
    if (length(p-normalize(pMoon)) < 0.1) {\r
        gl_FragColor = vec4(0.6, 0.6, 0.6, 1.0);\r
        return;\r
    }\r
\r
    if (length(p-normalize(pJupiter)) < 0.1) {\r
        gl_FragColor = vec4(0.2, 0.2, 1.0, 1.0);\r
        return;\r
    }\r
\r
    vec4 color = texture(terrain, q);\r
    // color.a = 0.0;\r
    color = vec4(terrainLight*color.rgb, color.a);\r
    vec3 color2 = atmosphere(normalize(p));\r
    // gl_FragColor = vec4(0.5+vPosition.x*0.5, 0.5-vPosition.y*0.5, 0.0, 1.0);\r
    // gl_FragColor = vec4(opticalDepthTextureLookup(0.5+vPosition.x*0.5, 0.5-vPosition.y*0.5), 0.0, 1.0);\r
    // vec2 tex = texture(depthTexture, vec2(0.5+vPosition.x*0.5, 0.5-vPosition.y*0.5)).rg;\r
    // vec2 depth = exp(vec2(2.0-1.0/tex.x, 2.0-1.0/tex.y));\r
    // gl_FragColor = vec4(depth, 0.0, 1.0);\r
    gl_FragColor = vec4(mix(color.rgb, color2, 1.0-color.a), 1.0);\r
}`;function fe(n){return P(2*n[2]/Q(n),.1,1)}class ge{constructor(e){i(this,"scene");i(this,"mainScene");i(this,"cleanUpTasks");i(this,"shader");this.mainScene=e,this.cleanUpTasks=[],this.scene=this.setupScene()}onResize(){this.shader.uniforms.resolution.value=this.mainScene.getResolution()}setupScene(){const e=new G,t=new j,r=t.load("/astro/klippad_sunrise_2_4k.webp");r.colorSpace=$,r.generateMipmaps=!1;const a=t.load("/astro/depth.png");a.wrapS=F,a.wrapT=F,a.generateMipmaps=!1,this.shader=new I({uniforms:{terrain:{value:r},depthTexture:{value:a},pSun:{value:null},pMoon:{value:null},pJupiter:{value:null},resolution:{value:null},vDir:{value:null},vMat:{value:null},focalLength:{value:null},terrainLight:{value:null},radii:{value:null},scatterCoeff:{value:[Math.pow(500/700,4),Math.pow(500/530,4),Math.pow(500/440,4)]}},vertexShader:A,fragmentShader:ve,transparent:!0});const o=new C(2,2);let c=new _(o,this.shader);return e.add(c),e}render(e,t){this.shader.uniforms.pSun.value=this.mainScene.params.pSun,this.shader.uniforms.pMoon.value=this.mainScene.params.pMoon,this.shader.uniforms.pJupiter.value=this.mainScene.params.pJupiter,this.shader.uniforms.vDir.value=[this.mainScene.params.viewDirection.phi,this.mainScene.params.viewDirection.theta],this.shader.uniforms.vMat.value=this.mainScene.params.viewMatrix,this.shader.uniforms.focalLength.value=this.mainScene.params.focalLength,this.shader.uniforms.terrainLight.value=fe(this.mainScene.params.pSun),this.shader.uniforms.radii.value=[1,1.002,1.0001],e.setRenderTarget(this.mainScene.hdrFbo),e.render(this.scene,t),e.setRenderTarget(null)}}const ye=`// Rendering HDR scene to the screen.\r
\r
precision highp float;\r
\r
uniform sampler2D hdrTexture;\r
// uniform vec2 resolution;\r
\r
varying vec4 vPosition;\r
varying vec2 vUv;\r
\r
void main() {\r
    float exposure = 1.0;\r
    vec2 p = vPosition.xy*0.5 + vec2(0.5, 0.5);\r
    vec3 hdrColor = texture(hdrTexture, p).rgb;\r
    vec3 color = vec3(1.0) - exp(-hdrColor*exposure);\r
    // vec3 color = hdrColor / (vec3(1.0) + hdrColor);\r
    gl_FragColor = vec4(color, 1.0);\r
}`;class xe{constructor(e){i(this,"mainScene");i(this,"scene");i(this,"cleanUpTasks");i(this,"shader");this.mainScene=e,this.cleanUpTasks=[],this.scene=this.setupScene()}onResize(){}setupScene(){const e=new G;this.shader=new I({uniforms:{hdrTexture:{value:null}},vertexShader:A,fragmentShader:ye,transparent:!0});const t=new C(2,2),r=new _(t,this.shader);return e.add(r),e}render(e,t){this.shader.uniforms.hdrTexture.value=this.mainScene.hdrFbo.texture,e.setRenderTarget(null),e.render(this.scene,t)}}const Se=`precision highp float;\r
\r
varying vec4 vPosition;\r
varying vec2 vUv;\r
\r
#define PI 3.14159265359\r
\r
void main() {\r
    gl_FragColor = vec4(0.2, 0.3, 0.4, 1.0);\r
}`;class Me{constructor(e){i(this,"mainScene");i(this,"scene");i(this,"cleanUpTasks");i(this,"shader");this.mainScene=e,this.cleanUpTasks=[],this.scene=this.setupScene()}onResize(){}setupScene(){const e=new G;this.shader=new I({uniforms:{hdrTexture:{value:null}},vertexShader:A,fragmentShader:Se,transparent:!0});const t=new C(2,2),r=new _(t,this.shader);return e.add(r),e}render(e,t){e.setRenderTarget(this.mainScene.hdrFbo),e.render(this.scene,t),e.setRenderTarget(null)}}function De(n){const e=(.779057273264+1.0027378119113546*n*36525)%1;return s.TAU*e}function we(n){const t=Y([.014506,4612.156534,1.3915817,-44e-8,-29956e-9,-368e-10],n);return(De(n)+s.TAU*t/15/86400)%s.TAU}function Te(n){const[e,t,r]=Z(n),o=Y([450160.398036,-69628905431e-4,7.4722,.007702,-5939e-8],n),c=r*Math.cos(e)+.00264096*Math.sin(o)+6352e-8*Math.sin(2*o);return we(n)+s.TAU*c/86400}function Re(n){const e=f(ee(n),te(n),s.FRAME_BIAS_MATRIX),t=M(2,-Te(n));return f(t,e)}function Ee(n,e){const t=M(2,-Math.PI/2),r=M(1,-Math.PI/2+n.lat),a=M(2,-n.lon);return f(t,r,a)}function Pe(n,e){const t=Re(e),r=Ee(n);return f(r,t)}function ze(n,e){n=(n%(2*Math.PI)+Math.PI)%(2*Math.PI)-Math.PI;let t=n+e*Math.sin(n),r=1;for(;Math.abs(r)>1e-12;)r=(n-t+e*Math.sin(t))/(1-e*Math.cos(t)),t+=r;return t}function X(n,e,t,r,a,o){const c=ze(o,a),p=r*(Math.cos(c)-a),m=r*Math.sqrt(1-a*a)*Math.sin(c);return U(k(U([p,m,0],t),e),n)}function b(n,e){if([1,2,3,4,8,9].includes(n)){let t=new Array(6).fill(0),r=new Array(6).fill(0);if(n===1)t=[.38709927,.20563593,7.00497902,252.2503235,77.45779628,48.33076593],r=[37e-8,1906e-8,-.00594749,149472.67411175,.16047689,-.12534081];else if(n===2)t=[.72333566,.00677672,3.39467605,181.9790995,131.60246718,76.67984255],r=[39e-7,-4107e-8,-7889e-7,58517.81538729,.00268329,-.27769418];else if(n===3)t=[1.00000261,.01671123,-1531e-8,100.46457166,102.93768193,0],r=[562e-8,-4392e-8,-.01294668,35999.37244981,.32327364,0];else if(n===4)t=[1.52371034,.0933941,1.84969142,-4.55343205,-23.94362959,49.55953891],r=[1847e-8,7882e-8,-.00813131,19140.30268499,.44441088,-.29257343];else if(n===8)t=[30.06992276,.00859048,1.77004347,-55.12002969,44.96476227,131.78422574],r=[26291e-8,5105e-8,35372e-8,218.45945325,-.32241464,-.00508664];else if(n===9)t=[39.48211675,.2488273,17.14001206,238.92903833,224.06891629,110.30393684],r=[-31596e-8,517e-7,4818e-8,145.20780515,-.04062942,-.01183482];else return null;const a=t.map((c,p)=>c+e*r[p]),o=X(a[5]*s.DEG,a[2]*s.DEG,(a[4]-a[5])*s.DEG,a[0],a[1],(a[3]-a[4])*s.DEG);return k(o,23.43928*s.DEG)}else{const t=e*36525+1.5,r=(23.4393-3563e-10*t)*s.DEG,a=-382394e-10*t*s.DEG;let o=new Array(6).fill(0),c=new Array(6).fill(0);if(n===301)o=[125.1228,5.1454,318.0634,60.2666*s.RADIUS_EARTH,.0549,115.3654],c=[-.0529538083,0,.1643573223,0,0,13.0649929509];else if(n===5)o=[100.4542,1.303,273.8777,5.20256,.048498,19.895],c=[276854e-10,-1557e-10,164505e-10,0,4469e-12,.0830853001];else if(n===6)o=[113.6634,2.4886,339.3939,9.55475,.055546,316.967],c=[23898e-9,-1081e-10,297661e-10,0,-9499e-12,.0334442282];else if(n===7)o=[74.0005,.7733,96.6612,19.18171,.047318,142.5905],c=[13978e-9,19e-9,30565e-9,-155e-10,745e-11,.011725806];else return null;const p=o.map((h,l)=>h+t*c[l]),[m,y,x,D,z,u]=[p[0]*s.DEG,p[1]*s.DEG,p[2]*s.DEG,p[3],p[4],p[5]*s.DEG],[v,g,w]=X(m,y,x,D,z,u);let T=Math.sqrt(v*v+g*g+w*w),R=Math.atan2(g,v),L=Math.atan2(w,Math.sqrt(v*v+g*g));if(n===301){const h=(356.047+t*.9856002585)*s.DEG,l=(282.9404+t*470935e-10)*s.DEG,E=h+l,O=u+x+m,d=O-E,S=O-m,B=(-1.274*Math.sin(u-2*d)+.658*Math.sin(2*d)-.186*Math.sin(h)-.059*Math.sin(2*u-2*d)-.057*Math.sin(u-2*d+h)+.053*Math.sin(u+2*d)+.046*Math.sin(2*d-h)+.041*Math.sin(u-h)-.035*Math.sin(d)-.031*Math.sin(u+h)-.015*Math.sin(2*S-2*d)+.011*Math.sin(u-4*d))*s.DEG,V=(-.173*Math.sin(S-2*d)-.055*Math.sin(u-S-2*d)-.046*Math.sin(u+S-2*d)+.033*Math.sin(u-S+d)-.017*Math.sin(2*d-S))*s.DEG,H=(-.58*Math.cos(u-2*d)-.46*Math.cos(2*d))*s.RADIUS_EARTH;R+=B,L+=V,T+=H}if([5,6,7].includes(n)){const h=(19.895+t*.0830853001)*s.DEG,l=(316.967+t*.0334442282)*s.DEG;if(n===5)R+=(-.332*Math.sin(2*h-5*l-67.6*s.DEG)-.056*Math.sin(2*h-2*l+21*s.DEG)+.042*Math.sin(3*h-5*l+21*s.DEG)-.036*Math.sin(h-2*l)+.022*Math.cos(h-l)+.023*Math.sin(2*h-3*l+52*s.DEG)-.016*Math.sin(h-5*l-69*s.DEG))*s.DEG;else if(n===6)R+=(.812*Math.sin(2*h-5*l-67.6*s.DEG)-.229*Math.cos(2*h-4*l-2*s.DEG)+.119*Math.sin(h-2*l-3*s.DEG)+.046*Math.sin(2*h-6*l-69*s.DEG)+.014*Math.sin(h-3*l+32*s.DEG))*s.DEG,L+=(-.02*Math.cos(2*h-4*l-2*s.DEG)+.018*Math.sin(2*h-6*l-49*s.DEG))*s.DEG;else if(n===7){const E=(142.5905+t*.011725806)*s.DEG;R+=(.04*Math.sin(l-2*E+6*s.DEG)+.035*Math.sin(l-3*E+33*s.DEG)-.015*Math.sin(h-E+20*s.DEG))*s.DEG}}const W=ne(T,L,R+a);return k(W,r)}}function be(n){const e=b(301,n),t=b(3,n),r=-1/(s.MASS_RATIO_EARTH_MOON+1);return[t[0]+r*e[0],t[1]+r*e[1],t[2]+r*e[2]]}class Le{constructor(){i(this,"viewDirection");i(this,"viewMatrix");i(this,"focalLength");i(this,"t");i(this,"location");i(this,"horizonMatrix");i(this,"pSun");i(this,"pMoon");i(this,"pJupiter");this.setView({viewDirection:{phi:0,theta:Math.PI/2},focalLength:1}),this.setTimeAndOrLocation({t:.2,location:s.EARTH_LOC_DICT.Singapore})}setTimeAndOrLocation(e){e.t&&(this.t=e.t),e.location&&(this.location=e.location),this.horizonMatrix=Pe(this.location,this.t);const t=be(this.t),r=f(this.horizonMatrix,t).valueOf();this.pSun=f(r,-1).valueOf(),this.pMoon=f(this.horizonMatrix,b(301,this.t)).valueOf(),this.pJupiter=f(this.horizonMatrix,re(b(5,this.t),t)).valueOf()}setView(e){e.focalLength&&(this.focalLength=e.focalLength),e.viewDirection&&(this.viewDirection=e.viewDirection,this.viewMatrix=ie(f(M(2,this.viewDirection.phi),M(1,this.viewDirection.theta-Math.PI/2))).valueOf().flat())}}class ke{constructor(e){i(this,"container");i(this,"camera");i(this,"params");i(this,"renderer");i(this,"cleanUpTasks");i(this,"animationRequestID",null);i(this,"lastTime",null);i(this,"gui");i(this,"isStopped",!1);i(this,"averageRenderTime",0);i(this,"hdrFbo");i(this,"disposeFbos",()=>{});i(this,"spaceScene");i(this,"earthScene");i(this,"postScene");this.container=e,this.cleanUpTasks=[],this.renderer=new se({antialias:!0,alpha:!0}),this.renderer.setClearColor(0,0),e.appendChild(this.renderer.domElement),this.renderer.getContext().getExtension("EXT_float_blend"),this.params=new Le,this.spaceScene=new Me(this),this.earthScene=new ge(this),this.postScene=new xe(this),this.camera=this.setupCamera(),this.setupResizeRenderer(),this.resizeRenderer(),this.createGUI(),this.cleanUpTasks.push(()=>{this.animationRequestID&&cancelAnimationFrame(this.animationRequestID),this.disposeFbos()}),this.animate=this.animate.bind(this),this.animate()}resizeRenderer(){this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const{clientWidth:e,clientHeight:t}=this.container;console.log(`Resize! (${e}, ${t})`),this.renderer.setSize(e,t),this.camera instanceof ae&&(this.camera.aspect=e/t,this.camera.updateProjectionMatrix()),this.setupFbos(),this.spaceScene.onResize(),this.earthScene.onResize(),this.postScene.onResize()}setupResizeRenderer(){const e=new ResizeObserver(()=>{this.resizeRenderer()});e.observe(this.container),this.cleanUpTasks.push(()=>e.unobserve(this.container)),this.resizeRenderer()}setupFbos(){this.disposeFbos(),this.hdrFbo=this.createRenderTarget(),this.disposeFbos=()=>this.hdrFbo.dispose()}createRenderTarget(){const{clientWidth:e,clientHeight:t}=this.container;return new oe(e,t,{minFilter:K,magFilter:K,format:he,type:ce})}createGUI(){this.gui=new le;const a={animateButton:()=>this.animateStep(!1),toggleStop:()=>{this.isStopped=!this.isStopped},info:()=>{console.log(this.params),alert(JSON.stringify(this.params))}};this.gui.add(a,"animateButton").name("Animate step"),this.gui.add(a,"toggleStop").name("Toggle stop/play"),this.gui.add(a,"info").name("Info"),this.gui.close()}cleanUp(){this.container.removeChild(this.renderer.domElement);for(const e of this.cleanUpTasks)e();this.renderer.dispose(),this.gui.destroy()}setupCamera(){const e=new pe(-1,1,-1,1,.1,1e3);return e.position.set(0,0,1),e.lookAt(new ue(0,0,0)),e}getResolution(){const{clientWidth:e,clientHeight:t}=this.container;return new de(e,t)}animate(){this.animationRequestID=requestAnimationFrame(this.animate),this.animateStep(this.isStopped)}animateStep(e){const t=(this.lastTime??0)+(e?0:1);this.lastTime=t;const r=.192+this.lastTime/36525;this.params.setTimeAndOrLocation({t:r}),this.spaceScene.render(this.renderer,this.camera),this.earthScene.render(this.renderer,this.camera),this.postScene.render(this.renderer,this.camera)}}function Ge(n,e,t){return e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom}class Ie{constructor(e,t){i(this,"container");i(this,"mapper");i(this,"pointers",new Map);i(this,"lastDistance",null);i(this,"lastAngle",null);i(this,"lastMidpoint",null);i(this,"onContextmenu",e=>{e.preventDefault()});i(this,"onPointerDown",e=>{var r,a;e.preventDefault();const t=this.container.getBoundingClientRect();if(this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY}),e.pointerType==="mouse"&&((r=this.mapper.mouse)!=null&&r.down)?this.mapper.mouse.down(e.clientX-t.left,e.clientY-t.top,e.button):e.pointerType==="touch"&&this.pointers.size===1&&((a=this.mapper.touch)!=null&&a.start)&&this.mapper.touch.start(e.clientX-t.left,e.clientY-t.top),this.pointers.size===2&&e.pointerType==="touch"){const[o,c]=Array.from(this.pointers.values());this.lastDistance=this.getDistance(o,c),this.lastAngle=this.getAngle(o,c),this.lastMidpoint=this.getMidpoint(o,c)}});i(this,"onPointerMove",e=>{var c,p,m,y;e.preventDefault();const t=this.container.getBoundingClientRect();e.pointerType==="mouse"&&(c=this.mapper.mouse)!=null&&c.move&&this.mapper.mouse.move(e.clientX-t.left,e.clientY-t.top,Ge(t,e.clientX,e.clientY));const r=this.pointers.get(e.pointerId);if(!r)return;const a=e.clientX-r.x,o=e.clientY-r.y;if(e.pointerType==="mouse")(p=this.mapper.mouse)!=null&&p.drag&&this.mapper.mouse.drag(e.clientX-t.left,e.clientY-t.top,a,o,e.buttons);else if(e.pointerType==="touch"){if(this.pointers.size===1&&((m=this.mapper.touch)!=null&&m.dragSingle))this.mapper.touch.dragSingle(e.clientX-t.left,e.clientY-t.top,a,o);else if(this.pointers.size===2){const[x,D]=Array.from(this.pointers.values()),z=this.getDistance(x,D),u=this.getAngle(x,D),v=this.getMidpoint(x,D);if(this.lastDistance&&this.lastAngle&&this.lastMidpoint){const g=this.lastDistance/z,w=u-this.lastAngle,T={x:v.x-this.lastMidpoint.x,y:v.y-this.lastMidpoint.y};(y=this.mapper.touch)!=null&&y.dragPair&&this.mapper.touch.dragPair(v.x,v.y,T.x,T.y,g,w),this.lastDistance=z,this.lastAngle=u,this.lastMidpoint=v}}}this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY})});i(this,"onPointerUp",e=>{var r,a;e.preventDefault();const t=this.container.getBoundingClientRect();this.pointers.delete(e.pointerId),e.pointerType==="mouse"&&((r=this.mapper.mouse)!=null&&r.up)?this.mapper.mouse.up(e.clientX-t.left,e.clientY-t.top,e.button):e.pointerType==="touch"&&this.pointers.size===0&&((a=this.mapper.touch)!=null&&a.end)&&this.mapper.touch.end(e.clientX-t.left,e.clientY-t.top),this.pointers.size<2&&(this.lastDistance=null,this.lastAngle=null,this.lastMidpoint=null)});i(this,"onWheel",e=>{var r;e.preventDefault();const t=this.container.getBoundingClientRect();if((r=this.mapper.mouse)!=null&&r.wheel){const a=e.deltaY<0?.8333333333333334:1.2;this.mapper.mouse.wheel(e.clientX-t.left,e.clientY-t.top,a)}});i(this,"onKeydown",e=>{var t;(t=this.mapper.keyboard)!=null&&t.keydown&&this.mapper.keyboard.keydown({key:e.key,code:e.code,shiftKey:e.shiftKey,ctrlKey:e.ctrlKey,altKey:e.altKey,metaKey:e.metaKey})});i(this,"onKeyup",e=>{var t;(t=this.mapper.keyboard)!=null&&t.keyup&&this.mapper.keyboard.keyup({key:e.key,code:e.code,shiftKey:e.shiftKey,ctrlKey:e.ctrlKey,altKey:e.altKey,metaKey:e.metaKey})});this.container=e,this.mapper=t,this.container.style.touchAction="none",this.container.style.userSelect="none",this.container.addEventListener("pointerdown",this.onPointerDown),window.addEventListener("pointermove",this.onPointerMove),this.container.addEventListener("pointerup",this.onPointerUp),this.container.addEventListener("pointercancel",this.onPointerUp),this.container.addEventListener("wheel",this.onWheel),this.container.addEventListener("contextmenu",this.onContextmenu),document.addEventListener("keydown",this.onKeydown),document.addEventListener("keyup",this.onKeyup)}getDistance(e,t){const r=t.x-e.x,a=t.y-e.y;return Math.sqrt(r*r+a*a)}getAngle(e,t){return Math.atan2(t.y-e.y,t.x-e.x)}getMidpoint(e,t){return{x:(e.x+t.x)/2,y:(e.y+t.y)/2}}cleanup(){this.container.removeEventListener("pointerdown",this.onPointerDown),window.removeEventListener("pointermove",this.onPointerMove),this.container.removeEventListener("pointerup",this.onPointerUp),this.container.removeEventListener("pointercancel",this.onPointerUp),this.container.removeEventListener("wheel",this.onWheel),this.container.removeEventListener("contextmenu",this.onContextmenu),document.removeEventListener("keydown",this.onKeydown),document.removeEventListener("keyup",this.onKeyup)}}const Ae=()=>{const n=q.useRef(null);return q.useEffect(()=>{console.log("useEffect: ",n.current);const e=new ke(n.current),t=new Ie(n.current,{mouse:{drag:(r,a,o,c,p)=>{const m=(e.params.viewDirection.phi+.01*o)%s.TAU,y=P(e.params.viewDirection.theta-.01*c,0,Math.PI);e.params.setView({viewDirection:{phi:m,theta:y}})},wheel:(r,a,o)=>{e.params.setView({focalLength:P(e.params.focalLength/o,.1,10)})},down:(r,a,o)=>{}},touch:{start:(r,a)=>{},dragSingle:(r,a,o,c)=>{const p=(e.params.viewDirection.phi+.01*o)%s.TAU,m=P(e.params.viewDirection.theta-.01*c,0,Math.PI);e.params.setView({viewDirection:{phi:p,theta:m}})},dragPair:(r,a,o,c,p,m)=>{e.params.setView({focalLength:P(e.params.focalLength/p,.1,10)})}},keyboard:{keydown:r=>{r.key.toUpperCase()==="T"&&console.log("TEST")}}});return()=>{e.cleanUp(),t.cleanup()}},[]),me.jsx("div",{ref:n,style:{width:"100%",height:"100%"}})};export{Ae as default};
