var H=Object.defineProperty;var N=(r,e,t)=>e in r?H(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var a=(r,e,t)=>N(r,typeof e!="symbol"?e+"":e,t);import{S as T,T as B,a as K,C as I,b as E,P,M as z,c as D,V as d,d as i,e as $,m as M,t as X,W as Q,f as Y,g as Z,F as ee,R as te,N as L,h as re,O as ne,i as ie,j as ae,r as _,I as se,k as oe}from"./index-BXtn_oyq.js";const G=`precision highp float;\r
\r
varying vec4 vPosition;\r
varying vec2 vUv;\r
\r
void main() {\r
    vPosition = vec4(position.xy, 0.0, 1.0);\r
    vUv = uv;\r
    gl_Position = vPosition;\r
    // gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r
}`,ce=`// We use the standard xyz coordinate system here, not the GLSL coordinate system.\r
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
}`;function he(r){return D(2*r[2]/d.norm(r),.1,1)}class le{constructor(e){a(this,"scene");a(this,"mainScene");a(this,"cleanUpTasks");a(this,"shader");this.mainScene=e,this.cleanUpTasks=[],this.scene=this.setupScene()}onResize(){this.shader.uniforms.resolution.value=this.mainScene.getResolution()}setupScene(){const e=new T,t=new B,n=t.load("/astro/klippad_sunrise_2_4k.webp");n.colorSpace=K,n.generateMipmaps=!1;const s=t.load("/astro/depth.png");s.wrapS=I,s.wrapT=I,s.generateMipmaps=!1,this.shader=new E({uniforms:{terrain:{value:n},depthTexture:{value:s},pSun:{value:null},pMoon:{value:null},pJupiter:{value:null},resolution:{value:null},vDir:{value:null},vMat:{value:null},focalLength:{value:null},terrainLight:{value:null},radii:{value:null},scatterCoeff:{value:[Math.pow(500/700,4),Math.pow(500/530,4),Math.pow(500/440,4)]}},vertexShader:G,fragmentShader:ce,transparent:!0});const l=new P(2,2);let v=new z(l,this.shader);return e.add(v),e}render(e,t){this.shader.uniforms.pSun.value=this.mainScene.params.pSun,this.shader.uniforms.pMoon.value=this.mainScene.params.pMoon,this.shader.uniforms.pJupiter.value=this.mainScene.params.pJupiter,this.shader.uniforms.vDir.value=[this.mainScene.params.viewDirection.phi,this.mainScene.params.viewDirection.theta],this.shader.uniforms.vMat.value=this.mainScene.params.viewMatrix,this.shader.uniforms.focalLength.value=this.mainScene.params.focalLength,this.shader.uniforms.terrainLight.value=he(this.mainScene.params.pSun),this.shader.uniforms.radii.value=[1,1.002,1.0001],e.setRenderTarget(this.mainScene.hdrFbo),e.render(this.scene,t),e.setRenderTarget(null)}}const pe=`// Rendering HDR scene to the screen.\r
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
}`;class ve{constructor(e){a(this,"mainScene");a(this,"scene");a(this,"cleanUpTasks");a(this,"shader");this.mainScene=e,this.cleanUpTasks=[],this.scene=this.setupScene()}onResize(){}setupScene(){const e=new T;this.shader=new E({uniforms:{hdrTexture:{value:null}},vertexShader:G,fragmentShader:pe,transparent:!0});const t=new P(2,2),n=new z(t,this.shader);return e.add(n),e}render(e,t){this.shader.uniforms.hdrTexture.value=this.mainScene.hdrFbo.texture,e.setRenderTarget(null),e.render(this.scene,t)}}const ue=`precision highp float;\r
\r
varying vec4 vPosition;\r
varying vec2 vUv;\r
\r
#define PI 3.14159265359\r
\r
void main() {\r
    gl_FragColor = vec4(0.2, 0.3, 0.4, 1.0);\r
}`;class de{constructor(e){a(this,"mainScene");a(this,"scene");a(this,"cleanUpTasks");a(this,"shader");this.mainScene=e,this.cleanUpTasks=[],this.scene=this.setupScene()}onResize(){}setupScene(){const e=new T;this.shader=new E({uniforms:{hdrTexture:{value:null}},vertexShader:G,fragmentShader:ue,transparent:!0});const t=new P(2,2),n=new z(t,this.shader);return e.add(n),e}render(e,t){e.setRenderTarget(this.mainScene.hdrFbo),e.render(this.scene,t),e.setRenderTarget(null)}}function me(r,e){r=(r%(2*Math.PI)+Math.PI)%(2*Math.PI)-Math.PI;let t=r+e*Math.sin(r),n=1;for(;Math.abs(n)>1e-12;)n=(r-t+e*Math.sin(t))/(1-e*Math.cos(t)),t+=n;return t}function k(r,e,t,n,s,l){const v=me(l,s),u=n*(Math.cos(v)-s),f=n*Math.sqrt(1-s*s)*Math.sin(v);return d.zRotate(d.xRotate(d.zRotate([u,f,0],t),e),r)}function C(r,e){if([1,2,3,4,8,9].includes(r)){let t=new Array(6).fill(0),n=new Array(6).fill(0);if(r===1)t=[.38709927,.20563593,7.00497902,252.2503235,77.45779628,48.33076593],n=[37e-8,1906e-8,-.00594749,149472.67411175,.16047689,-.12534081];else if(r===2)t=[.72333566,.00677672,3.39467605,181.9790995,131.60246718,76.67984255],n=[39e-7,-4107e-8,-7889e-7,58517.81538729,.00268329,-.27769418];else if(r===3)t=[1.00000261,.01671123,-1531e-8,100.46457166,102.93768193,0],n=[562e-8,-4392e-8,-.01294668,35999.37244981,.32327364,0];else if(r===4)t=[1.52371034,.0933941,1.84969142,-4.55343205,-23.94362959,49.55953891],n=[1847e-8,7882e-8,-.00813131,19140.30268499,.44441088,-.29257343];else if(r===8)t=[30.06992276,.00859048,1.77004347,-55.12002969,44.96476227,131.78422574],n=[26291e-8,5105e-8,35372e-8,218.45945325,-.32241464,-.00508664];else if(r===9)t=[39.48211675,.2488273,17.14001206,238.92903833,224.06891629,110.30393684],n=[-31596e-8,517e-7,4818e-8,145.20780515,-.04062942,-.01183482];else return null;const s=t.map((v,u)=>v+e*n[u]),l=k(s[5]*i.DEG,s[2]*i.DEG,(s[4]-s[5])*i.DEG,s[0],s[1],(s[3]-s[4])*i.DEG);return d.xRotate(l,23.43928*i.DEG)}else{const t=e*36525+1.5,n=(23.4393-3563e-10*t)*i.DEG,s=-382394e-10*t*i.DEG;let l=new Array(6).fill(0),v=new Array(6).fill(0);if(r===301)l=[125.1228,5.1454,318.0634,60.2666*i.RADIUS_EARTH,.0549,115.3654],v=[-.0529538083,0,.1643573223,0,0,13.0649929509];else if(r===5)l=[100.4542,1.303,273.8777,5.20256,.048498,19.895],v=[276854e-10,-1557e-10,164505e-10,0,4469e-12,.0830853001];else if(r===6)l=[113.6634,2.4886,339.3939,9.55475,.055546,316.967],v=[23898e-9,-1081e-10,297661e-10,0,-9499e-12,.0334442282];else if(r===7)l=[74.0005,.7733,96.6612,19.18171,.047318,142.5905],v=[13978e-9,19e-9,30565e-9,-155e-10,745e-11,.011725806];else return null;const u=l.map((o,c)=>o+t*v[c]),[f,U,b,A,q,p]=[u[0]*i.DEG,u[1]*i.DEG,u[2]*i.DEG,u[3],u[4],u[5]*i.DEG],[g,y,w]=k(f,U,b,A,q,p);let O=Math.sqrt(g*g+y*y+w*w),S=Math.atan2(y,g),R=Math.atan2(w,Math.sqrt(g*g+y*y));if(r===301){const o=(356.047+t*.9856002585)*i.DEG,c=(282.9404+t*470935e-10)*i.DEG,x=o+c,F=p+b+f,h=F-x,m=F-f,J=(-1.274*Math.sin(p-2*h)+.658*Math.sin(2*h)-.186*Math.sin(o)-.059*Math.sin(2*p-2*h)-.057*Math.sin(p-2*h+o)+.053*Math.sin(p+2*h)+.046*Math.sin(2*h-o)+.041*Math.sin(p-o)-.035*Math.sin(h)-.031*Math.sin(p+o)-.015*Math.sin(2*m-2*h)+.011*Math.sin(p-4*h))*i.DEG,W=(-.173*Math.sin(m-2*h)-.055*Math.sin(p-m-2*h)-.046*Math.sin(p+m-2*h)+.033*Math.sin(p-m+h)-.017*Math.sin(2*h-m))*i.DEG,j=(-.58*Math.cos(p-2*h)-.46*Math.cos(2*h))*i.RADIUS_EARTH;S+=J,R+=W,O+=j}if([5,6,7].includes(r)){const o=(19.895+t*.0830853001)*i.DEG,c=(316.967+t*.0334442282)*i.DEG;if(r===5)S+=(-.332*Math.sin(2*o-5*c-67.6*i.DEG)-.056*Math.sin(2*o-2*c+21*i.DEG)+.042*Math.sin(3*o-5*c+21*i.DEG)-.036*Math.sin(o-2*c)+.022*Math.cos(o-c)+.023*Math.sin(2*o-3*c+52*i.DEG)-.016*Math.sin(o-5*c-69*i.DEG))*i.DEG;else if(r===6)S+=(.812*Math.sin(2*o-5*c-67.6*i.DEG)-.229*Math.cos(2*o-4*c-2*i.DEG)+.119*Math.sin(o-2*c-3*i.DEG)+.046*Math.sin(2*o-6*c-69*i.DEG)+.014*Math.sin(o-3*c+32*i.DEG))*i.DEG,R+=(-.02*Math.cos(2*o-4*c-2*i.DEG)+.018*Math.sin(2*o-6*c-49*i.DEG))*i.DEG;else if(r===7){const x=(142.5905+t*.011725806)*i.DEG;S+=(.04*Math.sin(c-2*x+6*i.DEG)+.035*Math.sin(c-3*x+33*i.DEG)-.015*Math.sin(o-x+20*i.DEG))*i.DEG}}const V=$(O,R,S+s);return d.xRotate(V,n)}}class fe{constructor(){a(this,"viewDirection");a(this,"viewMatrix");a(this,"focalLength");a(this,"t");a(this,"location");a(this,"horizonMatrix");a(this,"pSun");a(this,"pMoon");a(this,"pJupiter");this.setView({viewDirection:{phi:0,theta:Math.PI/2},focalLength:1}),this.setTimeAndOrLocation({t:.2,location:i.EARTH_LOC_DICT.Singapore})}setTimeAndOrLocation(e){e.t&&(this.t=e.t),e.location&&(this.location=e.location),this.horizonMatrix=[[1,0,0],[0,1,0],[0,0,1]];const t=[.7,.7,-.2];this.pSun=M(t,-1).valueOf(),this.pMoon=M(this.horizonMatrix,C(301,this.t)).valueOf(),this.pJupiter=M(this.horizonMatrix,C(5,this.t)).valueOf()}setView(e){e.focalLength&&(this.focalLength=e.focalLength),e.viewDirection&&(this.viewDirection=e.viewDirection,this.viewMatrix=X(M(d.rotationMatrix(2,this.viewDirection.phi),d.rotationMatrix(1,this.viewDirection.theta-Math.PI/2))).valueOf().flat())}}class ge{constructor(e){a(this,"container");a(this,"camera");a(this,"params");a(this,"renderer");a(this,"cleanUpTasks");a(this,"animationRequestID",null);a(this,"lastTime",null);a(this,"gui");a(this,"isStopped",!1);a(this,"averageRenderTime",0);a(this,"hdrFbo");a(this,"disposeFbos",()=>{});a(this,"spaceScene");a(this,"earthScene");a(this,"postScene");this.container=e,this.cleanUpTasks=[],this.renderer=new Q({antialias:!0,alpha:!0}),this.renderer.setClearColor(0,0),e.appendChild(this.renderer.domElement),this.renderer.getContext().getExtension("EXT_float_blend"),this.params=new fe,this.spaceScene=new de(this),this.earthScene=new le(this),this.postScene=new ve(this),this.camera=this.setupCamera(),this.setupResizeRenderer(),this.resizeRenderer(),this.createGUI(),this.cleanUpTasks.push(()=>{this.animationRequestID&&cancelAnimationFrame(this.animationRequestID),this.disposeFbos()}),this.animate=this.animate.bind(this),this.animate()}resizeRenderer(){this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const{clientWidth:e,clientHeight:t}=this.container;console.log(`Resize! (${e}, ${t})`),this.renderer.setSize(e,t),this.camera instanceof Y&&(this.camera.aspect=e/t,this.camera.updateProjectionMatrix()),this.setupFbos(),this.spaceScene.onResize(),this.earthScene.onResize(),this.postScene.onResize()}setupResizeRenderer(){const e=new ResizeObserver(()=>{this.resizeRenderer()});e.observe(this.container),this.cleanUpTasks.push(()=>e.unobserve(this.container)),this.resizeRenderer()}setupFbos(){this.disposeFbos(),this.hdrFbo=this.createRenderTarget(),this.disposeFbos=()=>this.hdrFbo.dispose()}createRenderTarget(){const{clientWidth:e,clientHeight:t}=this.container;return new Z(e,t,{minFilter:L,magFilter:L,format:te,type:ee})}createGUI(){this.gui=new re;const s={animateButton:()=>this.animateStep(!1),toggleStop:()=>{this.isStopped=!this.isStopped},info:()=>{console.log(this.params),alert(JSON.stringify(this.params))}};this.gui.add(s,"animateButton").name("Animate step"),this.gui.add(s,"toggleStop").name("Toggle stop/play"),this.gui.add(s,"info").name("Info"),this.gui.close()}cleanUp(){this.container.removeChild(this.renderer.domElement);for(const e of this.cleanUpTasks)e();this.renderer.dispose(),this.gui.destroy()}setupCamera(){const e=new ne(-1,1,-1,1,.1,1e3);return e.position.set(0,0,1),e.lookAt(new ie(0,0,0)),e}getResolution(){const{clientWidth:e,clientHeight:t}=this.container;return new ae(e,t)}animate(){this.animationRequestID=requestAnimationFrame(this.animate),this.animateStep(this.isStopped)}animateStep(e){const t=(this.lastTime??0)+(e?0:1);this.lastTime=t;const n=.192+this.lastTime/36525;this.params.setTimeAndOrLocation({t:n}),this.spaceScene.render(this.renderer,this.camera),this.earthScene.render(this.renderer,this.camera),this.postScene.render(this.renderer,this.camera)}}const xe=()=>{const r=_.useRef(null);return _.useEffect(()=>{console.log("useEffect: ",r.current);const e=new ge(r.current),t=new se(r.current,{mouse:{drag:n=>{const s=(e.params.viewDirection.phi+.01*n.dx)%i.TAU,l=D(e.params.viewDirection.theta-.01*n.dy,0,Math.PI);e.params.setView({viewDirection:{phi:s,theta:l}})},down:n=>{}},wheel:{zoom:n=>e.params.setView({focalLength:D(e.params.focalLength/(1+.001*n.delta),.1,10)}),pan:n=>{}},touch:{start:n=>{},dragSingle:n=>{const s=(e.params.viewDirection.phi+.01*n.dx)%i.TAU,l=D(e.params.viewDirection.theta-.01*n.dy,0,Math.PI);e.params.setView({viewDirection:{phi:s,theta:l}})},dragPair:n=>{e.params.setView({focalLength:D(e.params.focalLength/n.scale,.1,10)})}},keyboard:{keydown:n=>{n.key.toUpperCase()==="T"&&console.log("TEST")}}});return()=>{e.cleanUp(),t.cleanup()}},[]),oe.jsx("div",{ref:r,style:{width:"100%",height:"100%"}})};export{xe as default};
