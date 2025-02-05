var gh=Object.defineProperty;var vh=(n,e,t)=>e in n?gh(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var ze=(n,e,t)=>vh(n,typeof e!="symbol"?e+"":e,t);import{_ as Gl,r as cu,j as _h}from"./index-CZT2YQli.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Go="172",xh=0,hu=1,Eh=2,kl=1,yh=2,kn=3,ci=0,jt=1,Wn=2,ui=0,ir=1,fu=2,du=3,pu=4,Mh=5,Ai=100,Dh=101,Sh=102,Ah=103,wh=104,bh=200,Th=201,Ch=202,Fh=203,Ga=204,ka=205,Rh=206,Ph=207,Ih=208,Nh=209,Lh=210,Uh=211,Bh=212,Oh=213,zh=214,Wa=0,Xa=1,$a=2,ur=3,qa=4,Ya=5,Za=6,Ka=7,Wl=0,Hh=1,Vh=2,li=0,Gh=1,kh=2,Wh=3,Xh=4,$h=5,qh=6,Yh=7,Xl=300,lr=301,cr=302,Ja=303,ja=304,Ws=306,Qa=1e3,Xn=1001,eo=1002,an=1003,Zh=1004,Kr=1005,Fn=1006,oa=1007,Ti=1008,Kn=1009,$l=1010,ql=1011,Fr=1012,ko=1013,Fi=1014,Rn=1015,Or=1016,Wo=1017,Xo=1018,hr=1020,Yl=35902,Zl=1021,Kl=1022,gn=1023,Jl=1024,jl=1025,rr=1026,fr=1027,Ql=1028,$o=1029,ec=1030,qo=1031,Yo=1033,Ds=33776,Ss=33777,As=33778,ws=33779,to=35840,no=35841,io=35842,ro=35843,so=36196,ao=37492,oo=37496,uo=37808,lo=37809,co=37810,ho=37811,fo=37812,po=37813,mo=37814,go=37815,vo=37816,_o=37817,xo=37818,Eo=37819,yo=37820,Mo=37821,bs=36492,Do=36494,So=36495,tc=36283,Ao=36284,wo=36285,bo=36286,Kh=3200,Jh=3201,jh=0,Qh=1,ai="",pn="srgb",dr="srgb-linear",Rs="linear",lt="srgb",Oi=7680,mu=519,ef=512,tf=513,nf=514,nc=515,rf=516,sf=517,af=518,of=519,gu=35044,vu="300 es",$n=2e3,Ps=2001;class vr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ua=Math.PI/180,To=180/Math.PI;function zr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function et(n,e,t){return Math.max(e,Math.min(t,n))}function uf(n,e){return(n%e+e)%e}function la(n,e,t){return(1-t)*n+t*e}function Dr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Zt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ht{constructor(e=0,t=0){ht.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,t,i,r,s,a,o,u,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,u,c)}set(e,t,i,r,s,a,o,u,c){const l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=s,l[5]=u,l[6]=i,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],u=i[6],c=i[1],l=i[4],h=i[7],f=i[2],m=i[5],v=i[8],d=r[0],g=r[3],p=r[6],A=r[1],_=r[4],M=r[7],D=r[2],E=r[5],w=r[8];return s[0]=a*d+o*A+u*D,s[3]=a*g+o*_+u*E,s[6]=a*p+o*M+u*w,s[1]=c*d+l*A+h*D,s[4]=c*g+l*_+h*E,s[7]=c*p+l*M+h*w,s[2]=f*d+m*A+v*D,s[5]=f*g+m*_+v*E,s[8]=f*p+m*M+v*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],u=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-i*s*l+i*o*u+r*s*c-r*a*u}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],u=e[6],c=e[7],l=e[8],h=l*a-o*c,f=o*u-l*s,m=c*s-a*u,v=t*h+i*f+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/v;return e[0]=h*d,e[1]=(r*c-l*i)*d,e[2]=(o*i-r*a)*d,e[3]=f*d,e[4]=(l*t-r*u)*d,e[5]=(r*s-o*t)*d,e[6]=m*d,e[7]=(i*u-c*t)*d,e[8]=(a*t-i*s)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const u=Math.cos(s),c=Math.sin(s);return this.set(i*u,i*c,-i*(u*a+c*o)+a+e,-r*c,r*u,-r*(-c*a+u*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ca.makeScale(e,t)),this}rotate(e){return this.premultiply(ca.makeRotation(-e)),this}translate(e,t){return this.premultiply(ca.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ca=new Ze;function ic(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Rr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function lf(){const n=Rr("canvas");return n.style.display="block",n}const _u={};function tr(n){n in _u||(_u[n]=!0,console.warn(n))}function cf(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function hf(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ff(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const xu=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Eu=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function df(){const n={enabled:!0,workingColorSpace:dr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===lt&&(r.r=Yn(r.r),r.g=Yn(r.g),r.b=Yn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===lt&&(r.r=sr(r.r),r.g=sr(r.g),r.b=sr(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ai?Rs:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[dr]:{primaries:e,whitePoint:i,transfer:Rs,toXYZ:xu,fromXYZ:Eu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:xu,fromXYZ:Eu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}}),n}const rt=df();function Yn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function sr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let zi;class pf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{zi===void 0&&(zi=Rr("canvas")),zi.width=e.width,zi.height=e.height;const i=zi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=zi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Rr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Yn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Yn(t[i]/255)*255):t[i]=Yn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mf=0;class rc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=zr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ha(r[a].image)):s.push(ha(r[a]))}else s=ha(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ha(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?pf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gf=0;class qt extends vr{constructor(e=qt.DEFAULT_IMAGE,t=qt.DEFAULT_MAPPING,i=Xn,r=Xn,s=Fn,a=Ti,o=gn,u=Kn,c=qt.DEFAULT_ANISOTROPY,l=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=zr(),this.name="",this.source=new rc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=u,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qa:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case eo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qa:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case eo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=Xl;qt.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,t=0,i=0,r=1){At.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const u=e.elements,c=u[0],l=u[4],h=u[8],f=u[1],m=u[5],v=u[9],d=u[2],g=u[6],p=u[10];if(Math.abs(l-f)<.01&&Math.abs(h-d)<.01&&Math.abs(v-g)<.01){if(Math.abs(l+f)<.1&&Math.abs(h+d)<.1&&Math.abs(v+g)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,M=(m+1)/2,D=(p+1)/2,E=(l+f)/4,w=(h+d)/4,T=(v+g)/4;return _>M&&_>D?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=E/i,s=w/i):M>D?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=E/r,s=T/r):D<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),i=w/s,r=T/s),this.set(i,r,s,t),this}let A=Math.sqrt((g-v)*(g-v)+(h-d)*(h-d)+(f-l)*(f-l));return Math.abs(A)<.001&&(A=1),this.x=(g-v)/A,this.y=(h-d)/A,this.z=(f-l)/A,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vf extends vr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new qt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new rc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hi extends vf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class sc extends qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _f extends qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let u=i[r+0],c=i[r+1],l=i[r+2],h=i[r+3];const f=s[a+0],m=s[a+1],v=s[a+2],d=s[a+3];if(o===0){e[t+0]=u,e[t+1]=c,e[t+2]=l,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=v,e[t+3]=d;return}if(h!==d||u!==f||c!==m||l!==v){let g=1-o;const p=u*f+c*m+l*v+h*d,A=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const D=Math.sqrt(_),E=Math.atan2(D,p*A);g=Math.sin(g*E)/D,o=Math.sin(o*E)/D}const M=o*A;if(u=u*g+f*M,c=c*g+m*M,l=l*g+v*M,h=h*g+d*M,g===1-o){const D=1/Math.sqrt(u*u+c*c+l*l+h*h);u*=D,c*=D,l*=D,h*=D}}e[t]=u,e[t+1]=c,e[t+2]=l,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],u=i[r+1],c=i[r+2],l=i[r+3],h=s[a],f=s[a+1],m=s[a+2],v=s[a+3];return e[t]=o*v+l*h+u*m-c*f,e[t+1]=u*v+l*f+c*h-o*m,e[t+2]=c*v+l*m+o*f-u*h,e[t+3]=l*v-o*h-u*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,u=Math.sin,c=o(i/2),l=o(r/2),h=o(s/2),f=u(i/2),m=u(r/2),v=u(s/2);switch(a){case"XYZ":this._x=f*l*h+c*m*v,this._y=c*m*h-f*l*v,this._z=c*l*v+f*m*h,this._w=c*l*h-f*m*v;break;case"YXZ":this._x=f*l*h+c*m*v,this._y=c*m*h-f*l*v,this._z=c*l*v-f*m*h,this._w=c*l*h+f*m*v;break;case"ZXY":this._x=f*l*h-c*m*v,this._y=c*m*h+f*l*v,this._z=c*l*v+f*m*h,this._w=c*l*h-f*m*v;break;case"ZYX":this._x=f*l*h-c*m*v,this._y=c*m*h+f*l*v,this._z=c*l*v-f*m*h,this._w=c*l*h+f*m*v;break;case"YZX":this._x=f*l*h+c*m*v,this._y=c*m*h+f*l*v,this._z=c*l*v-f*m*h,this._w=c*l*h-f*m*v;break;case"XZY":this._x=f*l*h-c*m*v,this._y=c*m*h-f*l*v,this._z=c*l*v+f*m*h,this._w=c*l*h+f*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],u=t[9],c=t[2],l=t[6],h=t[10],f=i+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(l-u)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>h){const m=2*Math.sqrt(1+i-o-h);this._w=(l-u)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-i-h);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(u+l)/m}else{const m=2*Math.sqrt(1+h-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(u+l)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,u=t._y,c=t._z,l=t._w;return this._x=i*l+a*o+r*c-s*u,this._y=r*l+a*u+s*o-i*c,this._z=s*l+a*c+i*u-r*o,this._w=a*l-i*o-r*u-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const u=1-o*o;if(u<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(u),l=Math.atan2(c,o),h=Math.sin((1-t)*l)/c,f=Math.sin(t*l)/c;return this._w=a*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,t=0,i=0){Q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,u=e.w,c=2*(a*r-o*i),l=2*(o*t-s*r),h=2*(s*i-a*t);return this.x=t+u*c+a*h-o*l,this.y=i+u*l+o*c-s*h,this.z=r+u*h+s*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,u=t.z;return this.x=r*u-s*o,this.y=s*a-i*u,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return fa.copy(this).projectOnVector(e),this.sub(fa)}reflect(e){return this.sub(fa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fa=new Q,yu=new Hr;class Vr{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,yn):yn.fromBufferAttribute(s,a),yn.applyMatrix4(e.matrixWorld),this.expandByPoint(yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Jr.copy(i.boundingBox)),Jr.applyMatrix4(e.matrixWorld),this.union(Jr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sr),jr.subVectors(this.max,Sr),Hi.subVectors(e.a,Sr),Vi.subVectors(e.b,Sr),Gi.subVectors(e.c,Sr),jn.subVectors(Vi,Hi),Qn.subVectors(Gi,Vi),gi.subVectors(Hi,Gi);let t=[0,-jn.z,jn.y,0,-Qn.z,Qn.y,0,-gi.z,gi.y,jn.z,0,-jn.x,Qn.z,0,-Qn.x,gi.z,0,-gi.x,-jn.y,jn.x,0,-Qn.y,Qn.x,0,-gi.y,gi.x,0];return!da(t,Hi,Vi,Gi,jr)||(t=[1,0,0,0,1,0,0,0,1],!da(t,Hi,Vi,Gi,jr))?!1:(Qr.crossVectors(jn,Qn),t=[Qr.x,Qr.y,Qr.z],da(t,Hi,Vi,Gi,jr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Bn=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],yn=new Q,Jr=new Vr,Hi=new Q,Vi=new Q,Gi=new Q,jn=new Q,Qn=new Q,gi=new Q,Sr=new Q,jr=new Q,Qr=new Q,vi=new Q;function da(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){vi.fromArray(n,s);const o=r.x*Math.abs(vi.x)+r.y*Math.abs(vi.y)+r.z*Math.abs(vi.z),u=e.dot(vi),c=t.dot(vi),l=i.dot(vi);if(Math.max(-Math.max(u,c,l),Math.min(u,c,l))>o)return!1}return!0}const xf=new Vr,Ar=new Q,pa=new Q;class Zo{constructor(e=new Q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):xf.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ar.subVectors(e,this.center);const t=Ar.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ar,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ar.copy(e.center).add(pa)),this.expandByPoint(Ar.copy(e.center).sub(pa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const On=new Q,ma=new Q,es=new Q,ei=new Q,ga=new Q,ts=new Q,va=new Q;class Ef{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,On)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=On.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(On.copy(this.origin).addScaledVector(this.direction,t),On.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ma.copy(e).add(t).multiplyScalar(.5),es.copy(t).sub(e).normalize(),ei.copy(this.origin).sub(ma);const s=e.distanceTo(t)*.5,a=-this.direction.dot(es),o=ei.dot(this.direction),u=-ei.dot(es),c=ei.lengthSq(),l=Math.abs(1-a*a);let h,f,m,v;if(l>0)if(h=a*u-o,f=a*o-u,v=s*l,h>=0)if(f>=-v)if(f<=v){const d=1/l;h*=d,f*=d,m=h*(h+a*f+2*o)+f*(a*h+f+2*u)+c}else f=s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*u)+c;else f=-s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*u)+c;else f<=-v?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-u),s),m=-h*h+f*(f+2*u)+c):f<=v?(h=0,f=Math.min(Math.max(-s,-u),s),m=f*(f+2*u)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-u),s),m=-h*h+f*(f+2*u)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*u)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ma).addScaledVector(es,f),m}intersectSphere(e,t){On.subVectors(e.center,this.origin);const i=On.dot(this.direction),r=On.dot(On)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,u=i+a;return u<0?null:o<0?this.at(u,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,u;const c=1/this.direction.x,l=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),l>=0?(s=(e.min.y-f.y)*l,a=(e.max.y-f.y)*l):(s=(e.max.y-f.y)*l,a=(e.min.y-f.y)*l),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,u=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,u=(e.min.z-f.z)*h),i>u||o>r)||((o>i||i!==i)&&(i=o),(u<r||r!==r)&&(r=u),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,On)!==null}intersectTriangle(e,t,i,r,s){ga.subVectors(t,e),ts.subVectors(i,e),va.crossVectors(ga,ts);let a=this.direction.dot(va),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ei.subVectors(this.origin,e);const u=o*this.direction.dot(ts.crossVectors(ei,ts));if(u<0)return null;const c=o*this.direction.dot(ga.cross(ei));if(c<0||u+c>a)return null;const l=-o*ei.dot(va);return l<0?null:this.at(l/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ct{constructor(e,t,i,r,s,a,o,u,c,l,h,f,m,v,d,g){Ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,u,c,l,h,f,m,v,d,g)}set(e,t,i,r,s,a,o,u,c,l,h,f,m,v,d,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=u,p[2]=c,p[6]=l,p[10]=h,p[14]=f,p[3]=m,p[7]=v,p[11]=d,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ct().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ki.setFromMatrixColumn(e,0).length(),s=1/ki.setFromMatrixColumn(e,1).length(),a=1/ki.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),u=Math.cos(r),c=Math.sin(r),l=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*l,m=a*h,v=o*l,d=o*h;t[0]=u*l,t[4]=-u*h,t[8]=c,t[1]=m+v*c,t[5]=f-d*c,t[9]=-o*u,t[2]=d-f*c,t[6]=v+m*c,t[10]=a*u}else if(e.order==="YXZ"){const f=u*l,m=u*h,v=c*l,d=c*h;t[0]=f+d*o,t[4]=v*o-m,t[8]=a*c,t[1]=a*h,t[5]=a*l,t[9]=-o,t[2]=m*o-v,t[6]=d+f*o,t[10]=a*u}else if(e.order==="ZXY"){const f=u*l,m=u*h,v=c*l,d=c*h;t[0]=f-d*o,t[4]=-a*h,t[8]=v+m*o,t[1]=m+v*o,t[5]=a*l,t[9]=d-f*o,t[2]=-a*c,t[6]=o,t[10]=a*u}else if(e.order==="ZYX"){const f=a*l,m=a*h,v=o*l,d=o*h;t[0]=u*l,t[4]=v*c-m,t[8]=f*c+d,t[1]=u*h,t[5]=d*c+f,t[9]=m*c-v,t[2]=-c,t[6]=o*u,t[10]=a*u}else if(e.order==="YZX"){const f=a*u,m=a*c,v=o*u,d=o*c;t[0]=u*l,t[4]=d-f*h,t[8]=v*h+m,t[1]=h,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=m*h+v,t[10]=f-d*h}else if(e.order==="XZY"){const f=a*u,m=a*c,v=o*u,d=o*c;t[0]=u*l,t[4]=-h,t[8]=c*l,t[1]=f*h+d,t[5]=a*l,t[9]=m*h-v,t[2]=v*h-m,t[6]=o*l,t[10]=d*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yf,e,Mf)}lookAt(e,t,i){const r=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),ti.crossVectors(i,rn),ti.lengthSq()===0&&(Math.abs(i.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),ti.crossVectors(i,rn)),ti.normalize(),ns.crossVectors(rn,ti),r[0]=ti.x,r[4]=ns.x,r[8]=rn.x,r[1]=ti.y,r[5]=ns.y,r[9]=rn.y,r[2]=ti.z,r[6]=ns.z,r[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],u=i[8],c=i[12],l=i[1],h=i[5],f=i[9],m=i[13],v=i[2],d=i[6],g=i[10],p=i[14],A=i[3],_=i[7],M=i[11],D=i[15],E=r[0],w=r[4],T=r[8],x=r[12],y=r[1],F=r[5],H=r[9],B=r[13],z=r[2],$=r[6],U=r[10],J=r[14],G=r[3],ne=r[7],se=r[11],he=r[15];return s[0]=a*E+o*y+u*z+c*G,s[4]=a*w+o*F+u*$+c*ne,s[8]=a*T+o*H+u*U+c*se,s[12]=a*x+o*B+u*J+c*he,s[1]=l*E+h*y+f*z+m*G,s[5]=l*w+h*F+f*$+m*ne,s[9]=l*T+h*H+f*U+m*se,s[13]=l*x+h*B+f*J+m*he,s[2]=v*E+d*y+g*z+p*G,s[6]=v*w+d*F+g*$+p*ne,s[10]=v*T+d*H+g*U+p*se,s[14]=v*x+d*B+g*J+p*he,s[3]=A*E+_*y+M*z+D*G,s[7]=A*w+_*F+M*$+D*ne,s[11]=A*T+_*H+M*U+D*se,s[15]=A*x+_*B+M*J+D*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],u=e[9],c=e[13],l=e[2],h=e[6],f=e[10],m=e[14],v=e[3],d=e[7],g=e[11],p=e[15];return v*(+s*u*h-r*c*h-s*o*f+i*c*f+r*o*m-i*u*m)+d*(+t*u*m-t*c*f+s*a*f-r*a*m+r*c*l-s*u*l)+g*(+t*c*h-t*o*m-s*a*h+i*a*m+s*o*l-i*c*l)+p*(-r*o*l-t*u*h+t*o*f+r*a*h-i*a*f+i*u*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],u=e[6],c=e[7],l=e[8],h=e[9],f=e[10],m=e[11],v=e[12],d=e[13],g=e[14],p=e[15],A=h*g*c-d*f*c+d*u*m-o*g*m-h*u*p+o*f*p,_=v*f*c-l*g*c-v*u*m+a*g*m+l*u*p-a*f*p,M=l*d*c-v*h*c+v*o*m-a*d*m-l*o*p+a*h*p,D=v*h*u-l*d*u-v*o*f+a*d*f+l*o*g-a*h*g,E=t*A+i*_+r*M+s*D;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=A*w,e[1]=(d*f*s-h*g*s-d*r*m+i*g*m+h*r*p-i*f*p)*w,e[2]=(o*g*s-d*u*s+d*r*c-i*g*c-o*r*p+i*u*p)*w,e[3]=(h*u*s-o*f*s-h*r*c+i*f*c+o*r*m-i*u*m)*w,e[4]=_*w,e[5]=(l*g*s-v*f*s+v*r*m-t*g*m-l*r*p+t*f*p)*w,e[6]=(v*u*s-a*g*s-v*r*c+t*g*c+a*r*p-t*u*p)*w,e[7]=(a*f*s-l*u*s+l*r*c-t*f*c-a*r*m+t*u*m)*w,e[8]=M*w,e[9]=(v*h*s-l*d*s-v*i*m+t*d*m+l*i*p-t*h*p)*w,e[10]=(a*d*s-v*o*s+v*i*c-t*d*c-a*i*p+t*o*p)*w,e[11]=(l*o*s-a*h*s-l*i*c+t*h*c+a*i*m-t*o*m)*w,e[12]=D*w,e[13]=(l*d*r-v*h*r+v*i*f-t*d*f-l*i*g+t*h*g)*w,e[14]=(v*o*r-a*d*r-v*i*u+t*d*u+a*i*g-t*o*g)*w,e[15]=(a*h*r-l*o*r+l*i*u-t*h*u-a*i*f+t*o*f)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,u=e.z,c=s*a,l=s*o;return this.set(c*a+i,c*o-r*u,c*u+r*o,0,c*o+r*u,l*o+i,l*u-r*a,0,c*u-r*o,l*u+r*a,s*u*u+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,u=t._w,c=s+s,l=a+a,h=o+o,f=s*c,m=s*l,v=s*h,d=a*l,g=a*h,p=o*h,A=u*c,_=u*l,M=u*h,D=i.x,E=i.y,w=i.z;return r[0]=(1-(d+p))*D,r[1]=(m+M)*D,r[2]=(v-_)*D,r[3]=0,r[4]=(m-M)*E,r[5]=(1-(f+p))*E,r[6]=(g+A)*E,r[7]=0,r[8]=(v+_)*w,r[9]=(g-A)*w,r[10]=(1-(f+d))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ki.set(r[0],r[1],r[2]).length();const a=ki.set(r[4],r[5],r[6]).length(),o=ki.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Mn.copy(this);const c=1/s,l=1/a,h=1/o;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=l,Mn.elements[5]*=l,Mn.elements[6]*=l,Mn.elements[8]*=h,Mn.elements[9]*=h,Mn.elements[10]*=h,t.setFromRotationMatrix(Mn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=$n){const u=this.elements,c=2*s/(t-e),l=2*s/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let m,v;if(o===$n)m=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Ps)m=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=c,u[4]=0,u[8]=h,u[12]=0,u[1]=0,u[5]=l,u[9]=f,u[13]=0,u[2]=0,u[6]=0,u[10]=m,u[14]=v,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=$n){const u=this.elements,c=1/(t-e),l=1/(i-r),h=1/(a-s),f=(t+e)*c,m=(i+r)*l;let v,d;if(o===$n)v=(a+s)*h,d=-2*h;else if(o===Ps)v=s*h,d=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=2*c,u[4]=0,u[8]=0,u[12]=-f,u[1]=0,u[5]=2*l,u[9]=0,u[13]=-m,u[2]=0,u[6]=0,u[10]=d,u[14]=-v,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ki=new Q,Mn=new Ct,yf=new Q(0,0,0),Mf=new Q(1,1,1),ti=new Q,ns=new Q,rn=new Q,Mu=new Ct,Du=new Hr;class Jn{constructor(e=0,t=0,i=0,r=Jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],u=r[1],c=r[5],l=r[9],h=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(u,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(et(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-l,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Mu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Du.setFromEuler(this),this.setFromQuaternion(Du,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jn.DEFAULT_ORDER="XYZ";class ac{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Df=0;const Su=new Q,Wi=new Hr,zn=new Ct,is=new Q,wr=new Q,Sf=new Q,Af=new Hr,Au=new Q(1,0,0),wu=new Q(0,1,0),bu=new Q(0,0,1),Tu={type:"added"},wf={type:"removed"},Xi={type:"childadded",child:null},_a={type:"childremoved",child:null};class on extends vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=zr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=on.DEFAULT_UP.clone();const e=new Q,t=new Jn,i=new Hr,r=new Q(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ct},normalMatrix:{value:new Ze}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=on.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ac,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.premultiply(Wi),this}rotateX(e){return this.rotateOnAxis(Au,e)}rotateY(e){return this.rotateOnAxis(wu,e)}rotateZ(e){return this.rotateOnAxis(bu,e)}translateOnAxis(e,t){return Su.copy(e).applyQuaternion(this.quaternion),this.position.add(Su.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Au,e)}translateY(e){return this.translateOnAxis(wu,e)}translateZ(e){return this.translateOnAxis(bu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?is.copy(e):is.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(wr,is,this.up):zn.lookAt(is,wr,this.up),this.quaternion.setFromRotationMatrix(zn),r&&(zn.extractRotation(r.matrixWorld),Wi.setFromRotationMatrix(zn),this.quaternion.premultiply(Wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tu),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wf),_a.child=e,this.dispatchEvent(_a),_a.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tu),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,e,Sf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,Af,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,u){return o[u.uuid]===void 0&&(o[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const u=o.shapes;if(Array.isArray(u))for(let c=0,l=u.length;c<l;c++){const h=u[c];s(e.shapes,h)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let u=0,c=this.material.length;u<c;u++)o.push(s(e.materials,this.material[u]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const u=this.animations[o];r.animations.push(s(e.animations,u))}}if(t){const o=a(e.geometries),u=a(e.materials),c=a(e.textures),l=a(e.images),h=a(e.shapes),f=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),u.length>0&&(i.materials=u),c.length>0&&(i.textures=c),l.length>0&&(i.images=l),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const u=[];for(const c in o){const l=o[c];delete l.metadata,u.push(l)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}on.DEFAULT_UP=new Q(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new Q,Hn=new Q,xa=new Q,Vn=new Q,$i=new Q,qi=new Q,Cu=new Q,Ea=new Q,ya=new Q,Ma=new Q,Da=new At,Sa=new At,Aa=new At;class An{constructor(e=new Q,t=new Q,i=new Q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Dn.subVectors(e,t),r.cross(Dn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Dn.subVectors(r,t),Hn.subVectors(i,t),xa.subVectors(e,t);const a=Dn.dot(Dn),o=Dn.dot(Hn),u=Dn.dot(xa),c=Hn.dot(Hn),l=Hn.dot(xa),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,m=(c*u-o*l)*f,v=(a*l-o*u)*f;return s.set(1-m-v,v,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,t,i,r,s,a,o,u){return this.getBarycoord(e,t,i,r,Vn)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,Vn.x),u.addScaledVector(a,Vn.y),u.addScaledVector(o,Vn.z),u)}static getInterpolatedAttribute(e,t,i,r,s,a){return Da.setScalar(0),Sa.setScalar(0),Aa.setScalar(0),Da.fromBufferAttribute(e,t),Sa.fromBufferAttribute(e,i),Aa.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Da,s.x),a.addScaledVector(Sa,s.y),a.addScaledVector(Aa,s.z),a}static isFrontFacing(e,t,i,r){return Dn.subVectors(i,t),Hn.subVectors(e,t),Dn.cross(Hn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),Dn.cross(Hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return An.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return An.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return An.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return An.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return An.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;$i.subVectors(r,i),qi.subVectors(s,i),Ea.subVectors(e,i);const u=$i.dot(Ea),c=qi.dot(Ea);if(u<=0&&c<=0)return t.copy(i);ya.subVectors(e,r);const l=$i.dot(ya),h=qi.dot(ya);if(l>=0&&h<=l)return t.copy(r);const f=u*h-l*c;if(f<=0&&u>=0&&l<=0)return a=u/(u-l),t.copy(i).addScaledVector($i,a);Ma.subVectors(e,s);const m=$i.dot(Ma),v=qi.dot(Ma);if(v>=0&&m<=v)return t.copy(s);const d=m*c-u*v;if(d<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(i).addScaledVector(qi,o);const g=l*v-m*h;if(g<=0&&h-l>=0&&m-v>=0)return Cu.subVectors(s,r),o=(h-l)/(h-l+(m-v)),t.copy(r).addScaledVector(Cu,o);const p=1/(g+d+f);return a=d*p,o=f*p,t.copy(i).addScaledVector($i,a).addScaledVector(qi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const oc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},rs={h:0,s:0,l:0};function wa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ct{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=rt.workingColorSpace){if(e=uf(e,1),t=et(t,0,1),i=et(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=wa(a,s,e+1/3),this.g=wa(a,s,e),this.b=wa(a,s,e-1/3)}return rt.toWorkingColorSpace(this,r),this}setStyle(e,t=pn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pn){const i=oc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yn(e.r),this.g=Yn(e.g),this.b=Yn(e.b),this}copyLinearToSRGB(e){return this.r=sr(e.r),this.g=sr(e.g),this.b=sr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pn){return rt.fromWorkingColorSpace(Vt.copy(this),e),Math.round(et(Vt.r*255,0,255))*65536+Math.round(et(Vt.g*255,0,255))*256+Math.round(et(Vt.b*255,0,255))}getHexString(e=pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.fromWorkingColorSpace(Vt.copy(this),t);const i=Vt.r,r=Vt.g,s=Vt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let u,c;const l=(o+a)/2;if(o===a)u=0,c=0;else{const h=a-o;switch(c=l<=.5?h/(a+o):h/(2-a-o),a){case i:u=(r-s)/h+(r<s?6:0);break;case r:u=(s-i)/h+2;break;case s:u=(i-r)/h+4;break}u/=6}return e.h=u,e.s=c,e.l=l,e}getRGB(e,t=rt.workingColorSpace){return rt.fromWorkingColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=pn){rt.fromWorkingColorSpace(Vt.copy(this),e);const t=Vt.r,i=Vt.g,r=Vt.b;return e!==pn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ni),this.setHSL(ni.h+e,ni.s+t,ni.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ni),e.getHSL(rs);const i=la(ni.h,rs.h,t),r=la(ni.s,rs.s,t),s=la(ni.l,rs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new ct;ct.NAMES=oc;let bf=0;class Xs extends vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=zr(),this.name="",this.type="Material",this.blending=ir,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ga,this.blendDst=ka,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ir&&(i.blending=this.blending),this.side!==ci&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ga&&(i.blendSrc=this.blendSrc),this.blendDst!==ka&&(i.blendDst=this.blendDst),this.blendEquation!==Ai&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ur&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const u=s[o];delete u.metadata,a.push(u)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class uc extends Xs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=Wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new Q,ss=new ht;class In{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=gu,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ss.fromBufferAttribute(this,t),ss.applyMatrix3(e),this.setXY(t,ss.x,ss.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Dr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Zt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Dr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Dr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Dr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Dr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array),r=Zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array),r=Zt(r,this.array),s=Zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gu&&(e.usage=this.usage),e}}class lc extends In{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class cc extends In{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ci extends In{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Tf=0;const cn=new Ct,ba=new on,Yi=new Q,sn=new Vr,br=new Vr,Lt=new Q;class Ri extends vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=zr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ic(e)?cc:lc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,i){return cn.makeTranslation(e,t,i),this.applyMatrix4(cn),this}scale(e,t,i){return cn.makeScale(e,t,i),this.applyMatrix4(cn),this}lookAt(e){return ba.lookAt(e),ba.updateMatrix(),this.applyMatrix4(ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ci(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];sn.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const i=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];br.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(sn.min,br.min),sn.expandByPoint(Lt),Lt.addVectors(sn.max,br.max),sn.expandByPoint(Lt)):(sn.expandByPoint(br.min),sn.expandByPoint(br.max))}sn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Lt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Lt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],u=this.morphTargetsRelative;for(let c=0,l=o.count;c<l;c++)Lt.fromBufferAttribute(o,c),u&&(Yi.fromBufferAttribute(e,c),Lt.add(Yi)),r=Math.max(r,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new In(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],u=[];for(let T=0;T<i.count;T++)o[T]=new Q,u[T]=new Q;const c=new Q,l=new Q,h=new Q,f=new ht,m=new ht,v=new ht,d=new Q,g=new Q;function p(T,x,y){c.fromBufferAttribute(i,T),l.fromBufferAttribute(i,x),h.fromBufferAttribute(i,y),f.fromBufferAttribute(s,T),m.fromBufferAttribute(s,x),v.fromBufferAttribute(s,y),l.sub(c),h.sub(c),m.sub(f),v.sub(f);const F=1/(m.x*v.y-v.x*m.y);isFinite(F)&&(d.copy(l).multiplyScalar(v.y).addScaledVector(h,-m.y).multiplyScalar(F),g.copy(h).multiplyScalar(m.x).addScaledVector(l,-v.x).multiplyScalar(F),o[T].add(d),o[x].add(d),o[y].add(d),u[T].add(g),u[x].add(g),u[y].add(g))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let T=0,x=A.length;T<x;++T){const y=A[T],F=y.start,H=y.count;for(let B=F,z=F+H;B<z;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const _=new Q,M=new Q,D=new Q,E=new Q;function w(T){D.fromBufferAttribute(r,T),E.copy(D);const x=o[T];_.copy(x),_.sub(D.multiplyScalar(D.dot(x))).normalize(),M.crossVectors(E,x);const F=M.dot(u[T])<0?-1:1;a.setXYZW(T,_.x,_.y,_.z,F)}for(let T=0,x=A.length;T<x;++T){const y=A[T],F=y.start,H=y.count;for(let B=F,z=F+H;B<z;B+=3)w(e.getX(B+0)),w(e.getX(B+1)),w(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new In(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new Q,s=new Q,a=new Q,o=new Q,u=new Q,c=new Q,l=new Q,h=new Q;if(e)for(let f=0,m=e.count;f<m;f+=3){const v=e.getX(f+0),d=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,d),a.fromBufferAttribute(t,g),l.subVectors(a,s),h.subVectors(r,s),l.cross(h),o.fromBufferAttribute(i,v),u.fromBufferAttribute(i,d),c.fromBufferAttribute(i,g),o.add(l),u.add(l),c.add(l),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(d,u.x,u.y,u.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),l.subVectors(a,s),h.subVectors(r,s),l.cross(h),i.setXYZ(f+0,l.x,l.y,l.z),i.setXYZ(f+1,l.x,l.y,l.z),i.setXYZ(f+2,l.x,l.y,l.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(o,u){const c=o.array,l=o.itemSize,h=o.normalized,f=new c.constructor(u.length*l);let m=0,v=0;for(let d=0,g=u.length;d<g;d++){o.isInterleavedBufferAttribute?m=u[d]*o.data.stride+o.offset:m=u[d]*l;for(let p=0;p<l;p++)f[v++]=c[m++]}return new In(f,l,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ri,i=this.index.array,r=this.attributes;for(const o in r){const u=r[o],c=e(u,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const u=[],c=s[o];for(let l=0,h=c.length;l<h;l++){const f=c[l],m=e(f,i);u.push(m)}t.morphAttributes[o]=u}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,u=a.length;o<u;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const c in u)u[c]!==void 0&&(e[c]=u[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const u in i){const c=i[u];e.data.attributes[u]=c.toJSON(e.data)}const r={};let s=!1;for(const u in this.morphAttributes){const c=this.morphAttributes[u],l=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];l.push(m.toJSON(e.data))}l.length>0&&(r[u]=l,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const l=r[c];this.setAttribute(c,l.clone(t))}const s=e.morphAttributes;for(const c in s){const l=[],h=s[c];for(let f=0,m=h.length;f<m;f++)l.push(h[f].clone(t));this.morphAttributes[c]=l}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,l=a.length;c<l;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fu=new Ct,_i=new Ef,as=new Zo,Ru=new Q,os=new Q,us=new Q,ls=new Q,Ta=new Q,cs=new Q,Pu=new Q,hs=new Q;class vn extends on{constructor(e=new Ri,t=new uc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){cs.set(0,0,0);for(let u=0,c=s.length;u<c;u++){const l=o[u],h=s[u];l!==0&&(Ta.fromBufferAttribute(h,e),a?cs.addScaledVector(Ta,l):cs.addScaledVector(Ta.sub(t),l))}t.add(cs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),as.copy(i.boundingSphere),as.applyMatrix4(s),_i.copy(e.ray).recast(e.near),!(as.containsPoint(_i.origin)===!1&&(_i.intersectSphere(as,Ru)===null||_i.origin.distanceToSquared(Ru)>(e.far-e.near)**2))&&(Fu.copy(s).invert(),_i.copy(e.ray).applyMatrix4(Fu),!(i.boundingBox!==null&&_i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,_i)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,u=s.attributes.position,c=s.attributes.uv,l=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,d=f.length;v<d;v++){const g=f[v],p=a[g.materialIndex],A=Math.max(g.start,m.start),_=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let M=A,D=_;M<D;M+=3){const E=o.getX(M),w=o.getX(M+1),T=o.getX(M+2);r=fs(this,p,e,i,c,l,h,E,w,T),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),d=Math.min(o.count,m.start+m.count);for(let g=v,p=d;g<p;g+=3){const A=o.getX(g),_=o.getX(g+1),M=o.getX(g+2);r=fs(this,a,e,i,c,l,h,A,_,M),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(u!==void 0)if(Array.isArray(a))for(let v=0,d=f.length;v<d;v++){const g=f[v],p=a[g.materialIndex],A=Math.max(g.start,m.start),_=Math.min(u.count,Math.min(g.start+g.count,m.start+m.count));for(let M=A,D=_;M<D;M+=3){const E=M,w=M+1,T=M+2;r=fs(this,p,e,i,c,l,h,E,w,T),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),d=Math.min(u.count,m.start+m.count);for(let g=v,p=d;g<p;g+=3){const A=g,_=g+1,M=g+2;r=fs(this,a,e,i,c,l,h,A,_,M),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function Cf(n,e,t,i,r,s,a,o){let u;if(e.side===jt?u=i.intersectTriangle(a,s,r,!0,o):u=i.intersectTriangle(r,s,a,e.side===ci,o),u===null)return null;hs.copy(o),hs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(hs);return c<t.near||c>t.far?null:{distance:c,point:hs.clone(),object:n}}function fs(n,e,t,i,r,s,a,o,u,c){n.getVertexPosition(o,os),n.getVertexPosition(u,us),n.getVertexPosition(c,ls);const l=Cf(n,e,t,i,os,us,ls,Pu);if(l){const h=new Q;An.getBarycoord(Pu,os,us,ls,h),r&&(l.uv=An.getInterpolatedAttribute(r,o,u,c,h,new ht)),s&&(l.uv1=An.getInterpolatedAttribute(s,o,u,c,h,new ht)),a&&(l.normal=An.getInterpolatedAttribute(a,o,u,c,h,new Q),l.normal.dot(i.direction)>0&&l.normal.multiplyScalar(-1));const f={a:o,b:u,c,normal:new Q,materialIndex:0};An.getNormal(os,us,ls,f.normal),l.face=f,l.barycoord=h}return l}class Gr extends Ri{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const u=[],c=[],l=[],h=[];let f=0,m=0;v("z","y","x",-1,-1,i,t,e,a,s,0),v("z","y","x",1,-1,i,t,-e,a,s,1),v("x","z","y",1,1,e,i,t,r,a,2),v("x","z","y",1,-1,e,i,-t,r,a,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(u),this.setAttribute("position",new Ci(c,3)),this.setAttribute("normal",new Ci(l,3)),this.setAttribute("uv",new Ci(h,2));function v(d,g,p,A,_,M,D,E,w,T,x){const y=M/w,F=D/T,H=M/2,B=D/2,z=E/2,$=w+1,U=T+1;let J=0,G=0;const ne=new Q;for(let se=0;se<U;se++){const he=se*F-B;for(let Se=0;Se<$;Se++){const Ce=Se*y-H;ne[d]=Ce*A,ne[g]=he*_,ne[p]=z,c.push(ne.x,ne.y,ne.z),ne[d]=0,ne[g]=0,ne[p]=E>0?1:-1,l.push(ne.x,ne.y,ne.z),h.push(Se/w),h.push(1-se/T),J+=1}}for(let se=0;se<T;se++)for(let he=0;he<w;he++){const Se=f+he+$*se,Ce=f+he+$*(se+1),ee=f+(he+1)+$*(se+1),ue=f+(he+1)+$*se;u.push(Se,Ce,ue),u.push(Ce,ee,ue),G+=6}o.addGroup(m,G,x),m+=G,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function pr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function $t(n){const e={};for(let t=0;t<n.length;t++){const i=pr(n[t]);for(const r in i)e[r]=i[r]}return e}function Ff(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function hc(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const Rf={clone:pr,merge:$t};var Pf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,If=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends Xs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pf,this.fragmentShader=If,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pr(e.uniforms),this.uniformsGroups=Ff(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class fc extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=$n}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ii=new Q,Iu=new ht,Nu=new ht;class mn extends fc{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=To*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ua*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return To*2*Math.atan(Math.tan(ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ii.x,ii.y).multiplyScalar(-e/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ii.x,ii.y).multiplyScalar(-e/ii.z)}getViewSize(e,t){return this.getViewBounds(e,Iu,Nu),t.subVectors(Nu,Iu)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ua*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const u=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/u,t-=a.offsetY*i/c,r*=a.width/u,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Zi=-90,Ki=1;class Nf extends on{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new mn(Zi,Ki,e,t);r.layers=this.layers,this.add(r);const s=new mn(Zi,Ki,e,t);s.layers=this.layers,this.add(s);const a=new mn(Zi,Ki,e,t);a.layers=this.layers,this.add(a);const o=new mn(Zi,Ki,e,t);o.layers=this.layers,this.add(o);const u=new mn(Zi,Ki,e,t);u.layers=this.layers,this.add(u);const c=new mn(Zi,Ki,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,u]=t;for(const c of t)this.remove(c);if(e===$n)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===Ps)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,u,c,l]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,u),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=d,e.setRenderTarget(i,5,r),e.render(t,l),e.setRenderTarget(h,f,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class dc extends qt{constructor(e,t,i,r,s,a,o,u,c,l){e=e!==void 0?e:[],t=t!==void 0?t:lr,super(e,t,i,r,s,a,o,u,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Lf extends hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new dc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Fn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Gr(5,5,5),s=new bn({name:"CubemapFromEquirect",uniforms:pr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:jt,blending:ui});s.uniforms.tEquirect.value=t;const a=new vn(r,s),o=t.minFilter;return t.minFilter===Ti&&(t.minFilter=Fn),new Nf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class Ko extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ca=new Q,Uf=new Q,Bf=new Ze;class Mi{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ca.subVectors(i,t).cross(Uf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ca),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Bf.getNormalMatrix(e),r=this.coplanarPoint(Ca).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xi=new Zo,ds=new Q;class pc{constructor(e=new Mi,t=new Mi,i=new Mi,r=new Mi,s=new Mi,a=new Mi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=$n){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],u=r[3],c=r[4],l=r[5],h=r[6],f=r[7],m=r[8],v=r[9],d=r[10],g=r[11],p=r[12],A=r[13],_=r[14],M=r[15];if(i[0].setComponents(u-s,f-c,g-m,M-p).normalize(),i[1].setComponents(u+s,f+c,g+m,M+p).normalize(),i[2].setComponents(u+a,f+l,g+v,M+A).normalize(),i[3].setComponents(u-a,f-l,g-v,M-A).normalize(),i[4].setComponents(u-o,f-h,g-d,M-_).normalize(),t===$n)i[5].setComponents(u+o,f+h,g+d,M+_).normalize();else if(t===Ps)i[5].setComponents(o,h,d,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(e){return xi.center.set(0,0,0),xi.radius=.7071067811865476,xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ds.x=r.normal.x>0?e.max.x:e.min.x,ds.y=r.normal.y>0?e.max.y:e.min.y,ds.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ds)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ps extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}}class mc extends qt{constructor(e,t,i,r,s,a,o,u,c,l=rr){if(l!==rr&&l!==fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&l===rr&&(i=Fi),i===void 0&&l===fr&&(i=hr),super(null,r,s,a,o,u,l,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:an,this.minFilter=u!==void 0?u:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Pi extends Ri{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),u=Math.floor(r),c=o+1,l=u+1,h=e/o,f=t/u,m=[],v=[],d=[],g=[];for(let p=0;p<l;p++){const A=p*f-a;for(let _=0;_<c;_++){const M=_*h-s;v.push(M,-A,0),d.push(0,0,1),g.push(_/o),g.push(1-p/u)}}for(let p=0;p<u;p++)for(let A=0;A<o;A++){const _=A+c*p,M=A+c*(p+1),D=A+1+c*(p+1),E=A+1+c*p;m.push(_,M,E),m.push(M,D,E)}this.setIndex(m),this.setAttribute("position",new Ci(v,3)),this.setAttribute("normal",new Ci(d,3)),this.setAttribute("uv",new Ci(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Of extends Xs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zf extends Xs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Lu={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Hf{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,u;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(l){o++,s===!1&&r.onStart!==void 0&&r.onStart(l,a,o),s=!0},this.itemEnd=function(l){a++,r.onProgress!==void 0&&r.onProgress(l,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(l){r.onError!==void 0&&r.onError(l)},this.resolveURL=function(l){return u?u(l):l},this.setURLModifier=function(l){return u=l,this},this.addHandler=function(l,h){return c.push(l,h),this},this.removeHandler=function(l){const h=c.indexOf(l);return h!==-1&&c.splice(h,2),this},this.getHandler=function(l){for(let h=0,f=c.length;h<f;h+=2){const m=c[h],v=c[h+1];if(m.global&&(m.lastIndex=0),m.test(l))return v}return null}}}const Vf=new Hf;class Jo{constructor(e){this.manager=e!==void 0?e:Vf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Jo.DEFAULT_MATERIAL_NAME="__DEFAULT";class Gf extends Jo{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Lu.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Rr("img");function u(){l(),Lu.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){l(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function l(){o.removeEventListener("load",u,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",u,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class kf extends Jo{constructor(e){super(e)}load(e,t,i,r){const s=new qt,a=new Gf(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class gc extends fc{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,u=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=l*this.view.offsetY,u=o-l*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Wf extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}function Uu(n,e,t,i){const r=Xf(i);switch(t){case Zl:return n*e;case Jl:return n*e;case jl:return n*e*2;case Ql:return n*e/r.components*r.byteLength;case $o:return n*e/r.components*r.byteLength;case ec:return n*e*2/r.components*r.byteLength;case qo:return n*e*2/r.components*r.byteLength;case Kl:return n*e*3/r.components*r.byteLength;case gn:return n*e*4/r.components*r.byteLength;case Yo:return n*e*4/r.components*r.byteLength;case Ds:case Ss:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case As:case ws:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case no:case ro:return Math.max(n,16)*Math.max(e,8)/4;case to:case io:return Math.max(n,8)*Math.max(e,8)/2;case so:case ao:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case oo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case uo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case lo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case co:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ho:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case fo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case po:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case mo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case go:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case vo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case _o:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case xo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Eo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case yo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Mo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case bs:case Do:case So:return Math.ceil(n/4)*Math.ceil(e/4)*16;case tc:case Ao:return Math.ceil(n/4)*Math.ceil(e/4)*8;case wo:case bo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Xf(n){switch(n){case Kn:case $l:return{byteLength:1,components:1};case Fr:case ql:case Or:return{byteLength:2,components:1};case Wo:case Xo:return{byteLength:2,components:4};case Fi:case ko:case Rn:return{byteLength:4,components:1};case Yl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Go}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Go);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function vc(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function $f(n){const e=new WeakMap;function t(o,u){const c=o.array,l=o.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(u,f),n.bufferData(u,c,l),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,u,c){const l=u.array,h=u.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,l);else{h.sort((m,v)=>m.start-v.start);let f=0;for(let m=1;m<h.length;m++){const v=h[f],d=h[m];d.start<=v.start+v.count+1?v.count=Math.max(v.count,d.start+d.count-v.start):(++f,h[f]=d)}h.length=f+1;for(let m=0,v=h.length;m<v;m++){const d=h[m];n.bufferSubData(c,d.start*l.BYTES_PER_ELEMENT,l,d.start,d.count)}u.clearUpdateRanges()}u.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const u=e.get(o);u&&(n.deleteBuffer(u.buffer),e.delete(o))}function a(o,u){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const l=e.get(o);(!l||l.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,u));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,u),c.version=o.version}}return{get:r,remove:s,update:a}}var qf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Zf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ed=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,td=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,nd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,id=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ad=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,od=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ud=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ld=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,md=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,gd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_d=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ed=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Md=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ad=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Td=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Fd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Id=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ld=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ud=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Od=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,zd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Hd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Xd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$d=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Yd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ep=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,np=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ip=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ap=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,op=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,up=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,lp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_p=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ep=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Mp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ap=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Cp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Fp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Rp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Pp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ip=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Np=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Up=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Op=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Vp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Xp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $p=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Qp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,em=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,im=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,am=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,om=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,um=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_m=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Em=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ym=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Sm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Am=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:qf,alphahash_pars_fragment:Yf,alphamap_fragment:Zf,alphamap_pars_fragment:Kf,alphatest_fragment:Jf,alphatest_pars_fragment:jf,aomap_fragment:Qf,aomap_pars_fragment:ed,batching_pars_vertex:td,batching_vertex:nd,begin_vertex:id,beginnormal_vertex:rd,bsdfs:sd,iridescence_fragment:ad,bumpmap_pars_fragment:od,clipping_planes_fragment:ud,clipping_planes_pars_fragment:ld,clipping_planes_pars_vertex:cd,clipping_planes_vertex:hd,color_fragment:fd,color_pars_fragment:dd,color_pars_vertex:pd,color_vertex:md,common:gd,cube_uv_reflection_fragment:vd,defaultnormal_vertex:_d,displacementmap_pars_vertex:xd,displacementmap_vertex:Ed,emissivemap_fragment:yd,emissivemap_pars_fragment:Md,colorspace_fragment:Dd,colorspace_pars_fragment:Sd,envmap_fragment:Ad,envmap_common_pars_fragment:wd,envmap_pars_fragment:bd,envmap_pars_vertex:Td,envmap_physical_pars_fragment:zd,envmap_vertex:Cd,fog_vertex:Fd,fog_pars_vertex:Rd,fog_fragment:Pd,fog_pars_fragment:Id,gradientmap_pars_fragment:Nd,lightmap_pars_fragment:Ld,lights_lambert_fragment:Ud,lights_lambert_pars_fragment:Bd,lights_pars_begin:Od,lights_toon_fragment:Hd,lights_toon_pars_fragment:Vd,lights_phong_fragment:Gd,lights_phong_pars_fragment:kd,lights_physical_fragment:Wd,lights_physical_pars_fragment:Xd,lights_fragment_begin:$d,lights_fragment_maps:qd,lights_fragment_end:Yd,logdepthbuf_fragment:Zd,logdepthbuf_pars_fragment:Kd,logdepthbuf_pars_vertex:Jd,logdepthbuf_vertex:jd,map_fragment:Qd,map_pars_fragment:ep,map_particle_fragment:tp,map_particle_pars_fragment:np,metalnessmap_fragment:ip,metalnessmap_pars_fragment:rp,morphinstance_vertex:sp,morphcolor_vertex:ap,morphnormal_vertex:op,morphtarget_pars_vertex:up,morphtarget_vertex:lp,normal_fragment_begin:cp,normal_fragment_maps:hp,normal_pars_fragment:fp,normal_pars_vertex:dp,normal_vertex:pp,normalmap_pars_fragment:mp,clearcoat_normal_fragment_begin:gp,clearcoat_normal_fragment_maps:vp,clearcoat_pars_fragment:_p,iridescence_pars_fragment:xp,opaque_fragment:Ep,packing:yp,premultiplied_alpha_fragment:Mp,project_vertex:Dp,dithering_fragment:Sp,dithering_pars_fragment:Ap,roughnessmap_fragment:wp,roughnessmap_pars_fragment:bp,shadowmap_pars_fragment:Tp,shadowmap_pars_vertex:Cp,shadowmap_vertex:Fp,shadowmask_pars_fragment:Rp,skinbase_vertex:Pp,skinning_pars_vertex:Ip,skinning_vertex:Np,skinnormal_vertex:Lp,specularmap_fragment:Up,specularmap_pars_fragment:Bp,tonemapping_fragment:Op,tonemapping_pars_fragment:zp,transmission_fragment:Hp,transmission_pars_fragment:Vp,uv_pars_fragment:Gp,uv_pars_vertex:kp,uv_vertex:Wp,worldpos_vertex:Xp,background_vert:$p,background_frag:qp,backgroundCube_vert:Yp,backgroundCube_frag:Zp,cube_vert:Kp,cube_frag:Jp,depth_vert:jp,depth_frag:Qp,distanceRGBA_vert:em,distanceRGBA_frag:tm,equirect_vert:nm,equirect_frag:im,linedashed_vert:rm,linedashed_frag:sm,meshbasic_vert:am,meshbasic_frag:om,meshlambert_vert:um,meshlambert_frag:lm,meshmatcap_vert:cm,meshmatcap_frag:hm,meshnormal_vert:fm,meshnormal_frag:dm,meshphong_vert:pm,meshphong_frag:mm,meshphysical_vert:gm,meshphysical_frag:vm,meshtoon_vert:_m,meshtoon_frag:xm,points_vert:Em,points_frag:ym,shadow_vert:Mm,shadow_frag:Dm,sprite_vert:Sm,sprite_frag:Am},_e={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Tn={basic:{uniforms:$t([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:$t([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new ct(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:$t([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:$t([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:$t([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new ct(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:$t([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:$t([_e.points,_e.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:$t([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:$t([_e.common,_e.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:$t([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:$t([_e.sprite,_e.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:$t([_e.common,_e.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:$t([_e.lights,_e.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Tn.physical={uniforms:$t([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const ms={r:0,b:0,g:0},Ei=new Jn,wm=new Ct;function bm(n,e,t,i,r,s,a){const o=new ct(0);let u=s===!0?0:1,c,l,h=null,f=0,m=null;function v(_){let M=_.isScene===!0?_.background:null;return M&&M.isTexture&&(M=(_.backgroundBlurriness>0?t:e).get(M)),M}function d(_){let M=!1;const D=v(_);D===null?p(o,u):D&&D.isColor&&(p(D,1),M=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(_,M){const D=v(M);D&&(D.isCubeTexture||D.mapping===Ws)?(l===void 0&&(l=new vn(new Gr(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:pr(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),Ei.copy(M.backgroundRotation),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),l.material.uniforms.envMap.value=D,l.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(wm.makeRotationFromEuler(Ei)),l.material.toneMapped=rt.getTransfer(D.colorSpace)!==lt,(h!==D||f!==D.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,h=D,f=D.version,m=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null)):D&&D.isTexture&&(c===void 0&&(c=new vn(new Pi(2,2),new bn({name:"BackgroundMaterial",uniforms:pr(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=D,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=rt.getTransfer(D.colorSpace)!==lt,D.matrixAutoUpdate===!0&&D.updateMatrix(),c.material.uniforms.uvTransform.value.copy(D.matrix),(h!==D||f!==D.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,h=D,f=D.version,m=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,M){_.getRGB(ms,hc(n)),i.buffers.color.setClear(ms.r,ms.g,ms.b,M,a)}function A(){l!==void 0&&(l.geometry.dispose(),l.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(_,M=1){o.set(_),u=M,p(o,u)},getClearAlpha:function(){return u},setClearAlpha:function(_){u=_,p(o,u)},render:d,addToRenderList:g,dispose:A}}function Tm(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(y,F,H,B,z){let $=!1;const U=h(B,H,F);s!==U&&(s=U,c(s.object)),$=m(y,B,H,z),$&&v(y,B,H,z),z!==null&&e.update(z,n.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,M(y,F,H,B),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function u(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function l(y){return n.deleteVertexArray(y)}function h(y,F,H){const B=H.wireframe===!0;let z=i[y.id];z===void 0&&(z={},i[y.id]=z);let $=z[F.id];$===void 0&&($={},z[F.id]=$);let U=$[B];return U===void 0&&(U=f(u()),$[B]=U),U}function f(y){const F=[],H=[],B=[];for(let z=0;z<t;z++)F[z]=0,H[z]=0,B[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:H,attributeDivisors:B,object:y,attributes:{},index:null}}function m(y,F,H,B){const z=s.attributes,$=F.attributes;let U=0;const J=H.getAttributes();for(const G in J)if(J[G].location>=0){const se=z[G];let he=$[G];if(he===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(he=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(he=y.instanceColor)),se===void 0||se.attribute!==he||he&&se.data!==he.data)return!0;U++}return s.attributesNum!==U||s.index!==B}function v(y,F,H,B){const z={},$=F.attributes;let U=0;const J=H.getAttributes();for(const G in J)if(J[G].location>=0){let se=$[G];se===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(se=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(se=y.instanceColor));const he={};he.attribute=se,se&&se.data&&(he.data=se.data),z[G]=he,U++}s.attributes=z,s.attributesNum=U,s.index=B}function d(){const y=s.newAttributes;for(let F=0,H=y.length;F<H;F++)y[F]=0}function g(y){p(y,0)}function p(y,F){const H=s.newAttributes,B=s.enabledAttributes,z=s.attributeDivisors;H[y]=1,B[y]===0&&(n.enableVertexAttribArray(y),B[y]=1),z[y]!==F&&(n.vertexAttribDivisor(y,F),z[y]=F)}function A(){const y=s.newAttributes,F=s.enabledAttributes;for(let H=0,B=F.length;H<B;H++)F[H]!==y[H]&&(n.disableVertexAttribArray(H),F[H]=0)}function _(y,F,H,B,z,$,U){U===!0?n.vertexAttribIPointer(y,F,H,z,$):n.vertexAttribPointer(y,F,H,B,z,$)}function M(y,F,H,B){d();const z=B.attributes,$=H.getAttributes(),U=F.defaultAttributeValues;for(const J in $){const G=$[J];if(G.location>=0){let ne=z[J];if(ne===void 0&&(J==="instanceMatrix"&&y.instanceMatrix&&(ne=y.instanceMatrix),J==="instanceColor"&&y.instanceColor&&(ne=y.instanceColor)),ne!==void 0){const se=ne.normalized,he=ne.itemSize,Se=e.get(ne);if(Se===void 0)continue;const Ce=Se.buffer,ee=Se.type,ue=Se.bytesPerElement,de=ee===n.INT||ee===n.UNSIGNED_INT||ne.gpuType===ko;if(ne.isInterleavedBufferAttribute){const le=ne.data,be=le.stride,xe=ne.offset;if(le.isInstancedInterleavedBuffer){for(let Ae=0;Ae<G.locationSize;Ae++)p(G.location+Ae,le.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ae=0;Ae<G.locationSize;Ae++)g(G.location+Ae);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let Ae=0;Ae<G.locationSize;Ae++)_(G.location+Ae,he/G.locationSize,ee,se,be*ue,(xe+he/G.locationSize*Ae)*ue,de)}else{if(ne.isInstancedBufferAttribute){for(let le=0;le<G.locationSize;le++)p(G.location+le,ne.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let le=0;le<G.locationSize;le++)g(G.location+le);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let le=0;le<G.locationSize;le++)_(G.location+le,he/G.locationSize,ee,se,he*ue,he/G.locationSize*le*ue,de)}}else if(U!==void 0){const se=U[J];if(se!==void 0)switch(se.length){case 2:n.vertexAttrib2fv(G.location,se);break;case 3:n.vertexAttrib3fv(G.location,se);break;case 4:n.vertexAttrib4fv(G.location,se);break;default:n.vertexAttrib1fv(G.location,se)}}}}A()}function D(){T();for(const y in i){const F=i[y];for(const H in F){const B=F[H];for(const z in B)l(B[z].object),delete B[z];delete F[H]}delete i[y]}}function E(y){if(i[y.id]===void 0)return;const F=i[y.id];for(const H in F){const B=F[H];for(const z in B)l(B[z].object),delete B[z];delete F[H]}delete i[y.id]}function w(y){for(const F in i){const H=i[F];if(H[y.id]===void 0)continue;const B=H[y.id];for(const z in B)l(B[z].object),delete B[z];delete H[y.id]}}function T(){x(),a=!0,s!==r&&(s=r,c(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:x,dispose:D,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:d,enableAttribute:g,disableUnusedAttributes:A}}function Cm(n,e,t){let i;function r(c){i=c}function s(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function a(c,l,h){h!==0&&(n.drawArraysInstanced(i,c,l,h),t.update(l,i,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let m=0;for(let v=0;v<h;v++)m+=l[v];t.update(m,i,1)}function u(c,l,h,f){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)a(c[v],l[v],f[v]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,l,0,f,0,h);let v=0;for(let d=0;d<h;d++)v+=l[d]*f[d];t.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=u}function Fm(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==gn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const T=w===Or&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Kn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Rn&&!T)}function u(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const l=u(c);l!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",l,"instead."),c=l);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=v>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:u,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:v,maxTextureSize:d,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:A,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:D,maxSamples:E}}function Rm(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Mi,o=new Ze,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||r;return r=f,i=h.length,m},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=l(h,f,0)},this.setState=function(h,f,m){const v=h.clippingPlanes,d=h.clipIntersection,g=h.clipShadows,p=n.get(h);if(!r||v===null||v.length===0||s&&!g)s?l(null):c();else{const A=s?0:i,_=A*4;let M=p.clippingState||null;u.value=M,M=l(v,f,_,m);for(let D=0;D!==_;++D)M[D]=t[D];p.clippingState=M,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=A}};function c(){u.value!==t&&(u.value=t,u.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function l(h,f,m,v){const d=h!==null?h.length:0;let g=null;if(d!==0){if(g=u.value,v!==!0||g===null){const p=m+d*4,A=f.matrixWorldInverse;o.getNormalMatrix(A),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,M=m;_!==d;++_,M+=4)a.copy(h[_]).applyMatrix4(A,o),a.normal.toArray(g,M),g[M+3]=a.constant}u.value=g,u.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,g}}function Pm(n){let e=new WeakMap;function t(a,o){return o===Ja?a.mapping=lr:o===ja&&(a.mapping=cr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ja||o===ja)if(e.has(a)){const u=e.get(a).texture;return t(u,a.mapping)}else{const u=a.image;if(u&&u.height>0){const c=new Lf(u.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const u=e.get(o);u!==void 0&&(e.delete(o),u.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const nr=4,Bu=[.125,.215,.35,.446,.526,.582],wi=20,Fa=new gc,Ou=new ct;let Ra=null,Pa=0,Ia=0,Na=!1;const Di=(1+Math.sqrt(5))/2,Ji=1/Di,zu=[new Q(-Di,Ji,0),new Q(Di,Ji,0),new Q(-Ji,0,Di),new Q(Ji,0,Di),new Q(0,Di,-Ji),new Q(0,Di,Ji),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)];class Hu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ra=this._renderer.getRenderTarget(),Pa=this._renderer.getActiveCubeFace(),Ia=this._renderer.getActiveMipmapLevel(),Na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ku(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ra,Pa,Ia),this._renderer.xr.enabled=Na,e.scissorTest=!1,gs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===lr||e.mapping===cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ra=this._renderer.getRenderTarget(),Pa=this._renderer.getActiveCubeFace(),Ia=this._renderer.getActiveMipmapLevel(),Na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:Or,format:gn,colorSpace:dr,depthBuffer:!1},r=Vu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vu(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Im(s)),this._blurMaterial=Nm(s,e,t)}return r}_compileMaterial(e){const t=new vn(this._lodPlanes[0],e);this._renderer.compile(t,Fa)}_sceneToCubeUV(e,t,i,r){const o=new mn(90,1,t,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,f=l.toneMapping;l.getClearColor(Ou),l.toneMapping=li,l.autoClear=!1;const m=new uc({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),v=new vn(new Gr,m);let d=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,d=!0):(m.color.copy(Ou),d=!0);for(let p=0;p<6;p++){const A=p%3;A===0?(o.up.set(0,u[p],0),o.lookAt(c[p],0,0)):A===1?(o.up.set(0,0,u[p]),o.lookAt(0,c[p],0)):(o.up.set(0,u[p],0),o.lookAt(0,0,c[p]));const _=this._cubeSize;gs(r,A*_,p>2?_:0,_,_),l.setRenderTarget(r),d&&l.render(v,o),l.render(e,o)}v.geometry.dispose(),v.material.dispose(),l.toneMapping=f,l.autoClear=h,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===lr||e.mapping===cr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ku()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gu());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new vn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const u=this._cubeSize;gs(t,0,0,3*u,2*u),i.setRenderTarget(t),i.render(a,Fa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=zu[(r-s-1)%zu.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const u=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,h=new vn(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*wi-1),d=s/v,g=isFinite(s)?1+Math.floor(l*d):wi;g>wi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${wi}`);const p=[];let A=0;for(let w=0;w<wi;++w){const T=w/d,x=Math.exp(-T*T/2);p.push(x),w===0?A+=x:w<g&&(A+=2*x)}for(let w=0;w<p.length;w++)p[w]=p[w]/A;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:_}=this;f.dTheta.value=v,f.mipInt.value=_-i;const M=this._sizeLods[r],D=3*M*(r>_-nr?r-_+nr:0),E=4*(this._cubeSize-M);gs(t,D,E,3*M,2*M),u.setRenderTarget(t),u.render(h,Fa)}}function Im(n){const e=[],t=[],i=[];let r=n;const s=n-nr+1+Bu.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let u=1/o;a>n-nr?u=Bu[a-n+nr-1]:a===0&&(u=0),i.push(u);const c=1/(o-2),l=-c,h=1+c,f=[l,l,h,l,h,h,l,l,h,h,l,h],m=6,v=6,d=3,g=2,p=1,A=new Float32Array(d*v*m),_=new Float32Array(g*v*m),M=new Float32Array(p*v*m);for(let E=0;E<m;E++){const w=E%3*2/3-1,T=E>2?0:-1,x=[w,T,0,w+2/3,T,0,w+2/3,T+1,0,w,T,0,w+2/3,T+1,0,w,T+1,0];A.set(x,d*v*E),_.set(f,g*v*E);const y=[E,E,E,E,E,E];M.set(y,p*v*E)}const D=new Ri;D.setAttribute("position",new In(A,d)),D.setAttribute("uv",new In(_,g)),D.setAttribute("faceIndex",new In(M,p)),e.push(D),r>nr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Vu(n,e,t){const i=new hi(n,e,t);return i.texture.mapping=Ws,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function gs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Nm(n,e,t){const i=new Float32Array(wi),r=new Q(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Gu(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function ku(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function jo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Lm(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const u=o.mapping,c=u===Ja||u===ja,l=u===lr||u===cr;if(c||l){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Hu(n)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const m=o.image;return c&&m&&m.height>0||l&&m&&r(m)?(t===null&&(t=new Hu(n)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let u=0;const c=6;for(let l=0;l<c;l++)o[l]!==void 0&&u++;return u===c}function s(o){const u=o.target;u.removeEventListener("dispose",s);const c=e.get(u);c!==void 0&&(e.delete(u),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Um(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&tr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Bm(n,e,t,i){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function u(h){const f=h.attributes;for(const m in f)e.update(f[m],n.ARRAY_BUFFER)}function c(h){const f=[],m=h.index,v=h.attributes.position;let d=0;if(m!==null){const A=m.array;d=m.version;for(let _=0,M=A.length;_<M;_+=3){const D=A[_+0],E=A[_+1],w=A[_+2];f.push(D,E,E,w,w,D)}}else if(v!==void 0){const A=v.array;d=v.version;for(let _=0,M=A.length/3-1;_<M;_+=3){const D=_+0,E=_+1,w=_+2;f.push(D,E,E,w,w,D)}}else return;const g=new(ic(f)?cc:lc)(f,1);g.version=d;const p=s.get(h);p&&e.remove(p),s.set(h,g)}function l(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:u,getWireframeAttribute:l}}function Om(n,e,t){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function u(f,m){n.drawElements(i,m,s,f*a),t.update(m,i,1)}function c(f,m,v){v!==0&&(n.drawElementsInstanced(i,m,s,f*a,v),t.update(m,i,v))}function l(f,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,f,0,v);let g=0;for(let p=0;p<v;p++)g+=m[p];t.update(g,i,1)}function h(f,m,v,d){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/a,m[p],d[p]);else{g.multiDrawElementsInstancedWEBGL(i,m,0,s,f,0,d,0,v);let p=0;for(let A=0;A<v;A++)p+=m[A]*d[A];t.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=u,this.renderInstances=c,this.renderMultiDraw=l,this.renderMultiDrawInstances=h}function zm(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Hm(n,e,t){const i=new WeakMap,r=new At;function s(a,o,u){const c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=l!==void 0?l.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let x=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",x)};f!==void 0&&f.texture.dispose();const m=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,d=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let _=0;m===!0&&(_=1),v===!0&&(_=2),d===!0&&(_=3);let M=o.attributes.position.count*_,D=1;M>e.maxTextureSize&&(D=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const E=new Float32Array(M*D*4*h),w=new sc(E,M,D,h);w.type=Rn,w.needsUpdate=!0;const T=_*4;for(let y=0;y<h;y++){const F=g[y],H=p[y],B=A[y],z=M*D*4*y;for(let $=0;$<F.count;$++){const U=$*T;m===!0&&(r.fromBufferAttribute(F,$),E[z+U+0]=r.x,E[z+U+1]=r.y,E[z+U+2]=r.z,E[z+U+3]=0),v===!0&&(r.fromBufferAttribute(H,$),E[z+U+4]=r.x,E[z+U+5]=r.y,E[z+U+6]=r.z,E[z+U+7]=0),d===!0&&(r.fromBufferAttribute(B,$),E[z+U+8]=r.x,E[z+U+9]=r.y,E[z+U+10]=r.z,E[z+U+11]=B.itemSize===4?r.w:1)}}f={count:h,texture:w,size:new ht(M,D)},i.set(o,f),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)u.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let m=0;for(let d=0;d<c.length;d++)m+=c[d];const v=o.morphTargetsRelative?1:1-m;u.getUniforms().setValue(n,"morphTargetBaseInfluence",v),u.getUniforms().setValue(n,"morphTargetInfluences",c)}u.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function Vm(n,e,t,i){let r=new WeakMap;function s(u){const c=i.render.frame,l=u.geometry,h=e.get(u,l);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",o)===!1&&u.addEventListener("dispose",o),r.get(u)!==c&&(t.update(u.instanceMatrix,n.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,n.ARRAY_BUFFER),r.set(u,c))),u.isSkinnedMesh){const f=u.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function a(){r=new WeakMap}function o(u){const c=u.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const _c=new qt,Wu=new mc(1,1),xc=new sc,Ec=new _f,yc=new dc,Xu=[],$u=[],qu=new Float32Array(16),Yu=new Float32Array(9),Zu=new Float32Array(4);function _r(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Xu[r];if(s===void 0&&(s=new Float32Array(r),Xu[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Rt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function $s(n,e){let t=$u[e];t===void 0&&(t=new Int32Array(e),$u[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Gm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function km(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2fv(this.addr,e),Pt(t,e)}}function Wm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;n.uniform3fv(this.addr,e),Pt(t,e)}}function Xm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4fv(this.addr,e),Pt(t,e)}}function $m(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,i))return;Zu.set(i),n.uniformMatrix2fv(this.addr,!1,Zu),Pt(t,i)}}function qm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,i))return;Yu.set(i),n.uniformMatrix3fv(this.addr,!1,Yu),Pt(t,i)}}function Ym(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,i))return;qu.set(i),n.uniformMatrix4fv(this.addr,!1,qu),Pt(t,i)}}function Zm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Km(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2iv(this.addr,e),Pt(t,e)}}function Jm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3iv(this.addr,e),Pt(t,e)}}function jm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4iv(this.addr,e),Pt(t,e)}}function Qm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function e0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2uiv(this.addr,e),Pt(t,e)}}function t0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3uiv(this.addr,e),Pt(t,e)}}function n0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4uiv(this.addr,e),Pt(t,e)}}function i0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Wu.compareFunction=nc,s=Wu):s=_c,t.setTexture2D(e||s,r)}function r0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ec,r)}function s0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||yc,r)}function a0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||xc,r)}function o0(n){switch(n){case 5126:return Gm;case 35664:return km;case 35665:return Wm;case 35666:return Xm;case 35674:return $m;case 35675:return qm;case 35676:return Ym;case 5124:case 35670:return Zm;case 35667:case 35671:return Km;case 35668:case 35672:return Jm;case 35669:case 35673:return jm;case 5125:return Qm;case 36294:return e0;case 36295:return t0;case 36296:return n0;case 35678:case 36198:case 36298:case 36306:case 35682:return i0;case 35679:case 36299:case 36307:return r0;case 35680:case 36300:case 36308:case 36293:return s0;case 36289:case 36303:case 36311:case 36292:return a0}}function u0(n,e){n.uniform1fv(this.addr,e)}function l0(n,e){const t=_r(e,this.size,2);n.uniform2fv(this.addr,t)}function c0(n,e){const t=_r(e,this.size,3);n.uniform3fv(this.addr,t)}function h0(n,e){const t=_r(e,this.size,4);n.uniform4fv(this.addr,t)}function f0(n,e){const t=_r(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function d0(n,e){const t=_r(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function p0(n,e){const t=_r(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function m0(n,e){n.uniform1iv(this.addr,e)}function g0(n,e){n.uniform2iv(this.addr,e)}function v0(n,e){n.uniform3iv(this.addr,e)}function _0(n,e){n.uniform4iv(this.addr,e)}function x0(n,e){n.uniform1uiv(this.addr,e)}function E0(n,e){n.uniform2uiv(this.addr,e)}function y0(n,e){n.uniform3uiv(this.addr,e)}function M0(n,e){n.uniform4uiv(this.addr,e)}function D0(n,e,t){const i=this.cache,r=e.length,s=$s(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||_c,s[a])}function S0(n,e,t){const i=this.cache,r=e.length,s=$s(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Ec,s[a])}function A0(n,e,t){const i=this.cache,r=e.length,s=$s(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||yc,s[a])}function w0(n,e,t){const i=this.cache,r=e.length,s=$s(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||xc,s[a])}function b0(n){switch(n){case 5126:return u0;case 35664:return l0;case 35665:return c0;case 35666:return h0;case 35674:return f0;case 35675:return d0;case 35676:return p0;case 5124:case 35670:return m0;case 35667:case 35671:return g0;case 35668:case 35672:return v0;case 35669:case 35673:return _0;case 5125:return x0;case 36294:return E0;case 36295:return y0;case 36296:return M0;case 35678:case 36198:case 36298:case 36306:case 35682:return D0;case 35679:case 36299:case 36307:return S0;case 35680:case 36300:case 36308:case 36293:return A0;case 36289:case 36303:case 36311:case 36292:return w0}}class T0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=o0(t.type)}}class C0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=b0(t.type)}}class F0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const La=/(\w+)(\])?(\[|\.)?/g;function Ku(n,e){n.seq.push(e),n.map[e.id]=e}function R0(n,e,t){const i=n.name,r=i.length;for(La.lastIndex=0;;){const s=La.exec(i),a=La.lastIndex;let o=s[1];const u=s[2]==="]",c=s[3];if(u&&(o=o|0),c===void 0||c==="["&&a+2===r){Ku(t,c===void 0?new T0(o,n,e):new C0(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new F0(o),Ku(t,h)),t=h}}}class Ts{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);R0(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],u=i[o.id];u.needsUpdate!==!1&&o.setValue(e,u.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Ju(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const P0=37297;let I0=0;function N0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const ju=new Ze;function L0(n){rt._getMatrix(ju,rt.workingColorSpace,n);const e=`mat3( ${ju.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(n)){case Rs:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Qu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+N0(n.getShaderSource(e),a)}else return r}function U0(n,e){const t=L0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function B0(n,e){let t;switch(e){case Gh:t="Linear";break;case kh:t="Reinhard";break;case Wh:t="Cineon";break;case Xh:t="ACESFilmic";break;case qh:t="AgX";break;case Yh:t="Neutral";break;case $h:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const vs=new Q;function O0(){rt.getLuminanceCoefficients(vs);const n=vs.x.toFixed(4),e=vs.y.toFixed(4),t=vs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function z0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Tr).join(`
`)}function H0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function V0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Tr(n){return n!==""}function el(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tl(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const G0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Co(n){return n.replace(G0,W0)}const k0=new Map;function W0(n,e){let t=Ke[e];if(t===void 0){const i=k0.get(e);if(i!==void 0)t=Ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Co(t)}const X0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nl(n){return n.replace(X0,$0)}function $0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function il(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function q0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===kl?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===yh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===kn&&(e="SHADOWMAP_TYPE_VSM"),e}function Y0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case lr:case cr:e="ENVMAP_TYPE_CUBE";break;case Ws:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Z0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case cr:e="ENVMAP_MODE_REFRACTION";break}return e}function K0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Wl:e="ENVMAP_BLENDING_MULTIPLY";break;case Hh:e="ENVMAP_BLENDING_MIX";break;case Vh:e="ENVMAP_BLENDING_ADD";break}return e}function J0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function j0(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const u=q0(t),c=Y0(t),l=Z0(t),h=K0(t),f=J0(t),m=z0(t),v=H0(s),d=r.createProgram();let g,p,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Tr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Tr).join(`
`),p.length>0&&(p+=`
`)):(g=[il(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tr).join(`
`),p=[il(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==li?"#define TONE_MAPPING":"",t.toneMapping!==li?Ke.tonemapping_pars_fragment:"",t.toneMapping!==li?B0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,U0("linearToOutputTexel",t.outputColorSpace),O0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Tr).join(`
`)),a=Co(a),a=el(a,t),a=tl(a,t),o=Co(o),o=el(o,t),o=tl(o,t),a=nl(a),o=nl(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===vu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=A+g+a,M=A+p+o,D=Ju(r,r.VERTEX_SHADER,_),E=Ju(r,r.FRAGMENT_SHADER,M);r.attachShader(d,D),r.attachShader(d,E),t.index0AttributeName!==void 0?r.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(d,0,"position"),r.linkProgram(d);function w(F){if(n.debug.checkShaderErrors){const H=r.getProgramInfoLog(d).trim(),B=r.getShaderInfoLog(D).trim(),z=r.getShaderInfoLog(E).trim();let $=!0,U=!0;if(r.getProgramParameter(d,r.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,d,D,E);else{const J=Qu(r,D,"vertex"),G=Qu(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(d,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+H+`
`+J+`
`+G)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(B===""||z==="")&&(U=!1);U&&(F.diagnostics={runnable:$,programLog:H,vertexShader:{log:B,prefix:g},fragmentShader:{log:z,prefix:p}})}r.deleteShader(D),r.deleteShader(E),T=new Ts(r,d),x=V0(r,d)}let T;this.getUniforms=function(){return T===void 0&&w(this),T};let x;this.getAttributes=function(){return x===void 0&&w(this),x};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(d,P0)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(d),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=I0++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=D,this.fragmentShader=E,this}let Q0=0;class eg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new tg(e),t.set(e,i)),i}}class tg{constructor(e){this.id=Q0++,this.code=e,this.usedTimes=0}}function ng(n,e,t,i,r,s,a){const o=new ac,u=new eg,c=new Set,l=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return c.add(x),x===0?"uv":`uv${x}`}function g(x,y,F,H,B){const z=H.fog,$=B.geometry,U=x.isMeshStandardMaterial?H.environment:null,J=(x.isMeshStandardMaterial?t:e).get(x.envMap||U),G=J&&J.mapping===Ws?J.image.height:null,ne=v[x.type];x.precision!==null&&(m=r.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const se=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,he=se!==void 0?se.length:0;let Se=0;$.morphAttributes.position!==void 0&&(Se=1),$.morphAttributes.normal!==void 0&&(Se=2),$.morphAttributes.color!==void 0&&(Se=3);let Ce,ee,ue,de;if(ne){const st=Tn[ne];Ce=st.vertexShader,ee=st.fragmentShader}else Ce=x.vertexShader,ee=x.fragmentShader,u.update(x),ue=u.getVertexShaderID(x),de=u.getFragmentShaderID(x);const le=n.getRenderTarget(),be=n.state.buffers.depth.getReversed(),xe=B.isInstancedMesh===!0,Ae=B.isBatchedMesh===!0,Qe=!!x.map,Ue=!!x.matcap,He=!!J,L=!!x.aoMap,pt=!!x.lightMap,We=!!x.bumpMap,Xe=!!x.normalMap,Te=!!x.displacementMap,nt=!!x.emissiveMap,Fe=!!x.metalnessMap,P=!!x.roughnessMap,b=x.anisotropy>0,S=x.clearcoat>0,R=x.dispersion>0,I=x.iridescence>0,N=x.sheen>0,Y=x.transmission>0,W=b&&!!x.anisotropyMap,j=S&&!!x.clearcoatMap,re=S&&!!x.clearcoatNormalMap,q=S&&!!x.clearcoatRoughnessMap,Z=I&&!!x.iridescenceMap,me=I&&!!x.iridescenceThicknessMap,Ee=N&&!!x.sheenColorMap,fe=N&&!!x.sheenRoughnessMap,Ve=!!x.specularMap,Re=!!x.specularColorMap,je=!!x.specularIntensityMap,O=Y&&!!x.transmissionMap,pe=Y&&!!x.thicknessMap,te=!!x.gradientMap,ae=!!x.alphaMap,Me=x.alphaTest>0,ye=!!x.alphaHash,qe=!!x.extensions;let gt=li;x.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(gt=n.toneMapping);const Nt={shaderID:ne,shaderType:x.type,shaderName:x.name,vertexShader:Ce,fragmentShader:ee,defines:x.defines,customVertexShaderID:ue,customFragmentShaderID:de,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,batching:Ae,batchingColor:Ae&&B._colorsTexture!==null,instancing:xe,instancingColor:xe&&B.instanceColor!==null,instancingMorph:xe&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:le===null?n.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:dr,alphaToCoverage:!!x.alphaToCoverage,map:Qe,matcap:Ue,envMap:He,envMapMode:He&&J.mapping,envMapCubeUVHeight:G,aoMap:L,lightMap:pt,bumpMap:We,normalMap:Xe,displacementMap:f&&Te,emissiveMap:nt,normalMapObjectSpace:Xe&&x.normalMapType===Qh,normalMapTangentSpace:Xe&&x.normalMapType===jh,metalnessMap:Fe,roughnessMap:P,anisotropy:b,anisotropyMap:W,clearcoat:S,clearcoatMap:j,clearcoatNormalMap:re,clearcoatRoughnessMap:q,dispersion:R,iridescence:I,iridescenceMap:Z,iridescenceThicknessMap:me,sheen:N,sheenColorMap:Ee,sheenRoughnessMap:fe,specularMap:Ve,specularColorMap:Re,specularIntensityMap:je,transmission:Y,transmissionMap:O,thicknessMap:pe,gradientMap:te,opaque:x.transparent===!1&&x.blending===ir&&x.alphaToCoverage===!1,alphaMap:ae,alphaTest:Me,alphaHash:ye,combine:x.combine,mapUv:Qe&&d(x.map.channel),aoMapUv:L&&d(x.aoMap.channel),lightMapUv:pt&&d(x.lightMap.channel),bumpMapUv:We&&d(x.bumpMap.channel),normalMapUv:Xe&&d(x.normalMap.channel),displacementMapUv:Te&&d(x.displacementMap.channel),emissiveMapUv:nt&&d(x.emissiveMap.channel),metalnessMapUv:Fe&&d(x.metalnessMap.channel),roughnessMapUv:P&&d(x.roughnessMap.channel),anisotropyMapUv:W&&d(x.anisotropyMap.channel),clearcoatMapUv:j&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:re&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&d(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:me&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:fe&&d(x.sheenRoughnessMap.channel),specularMapUv:Ve&&d(x.specularMap.channel),specularColorMapUv:Re&&d(x.specularColorMap.channel),specularIntensityMapUv:je&&d(x.specularIntensityMap.channel),transmissionMapUv:O&&d(x.transmissionMap.channel),thicknessMapUv:pe&&d(x.thicknessMap.channel),alphaMapUv:ae&&d(x.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Xe||b),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!$.attributes.uv&&(Qe||ae),fog:!!z,useFog:x.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:be,skinning:B.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Se,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:gt,decodeVideoTexture:Qe&&x.map.isVideoTexture===!0&&rt.getTransfer(x.map.colorSpace)===lt,decodeVideoTextureEmissive:nt&&x.emissiveMap.isVideoTexture===!0&&rt.getTransfer(x.emissiveMap.colorSpace)===lt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Wn,flipSided:x.side===jt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:qe&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&x.extensions.multiDraw===!0||Ae)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Nt.vertexUv1s=c.has(1),Nt.vertexUv2s=c.has(2),Nt.vertexUv3s=c.has(3),c.clear(),Nt}function p(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const F in x.defines)y.push(F),y.push(x.defines[F]);return x.isRawShaderMaterial===!1&&(A(y,x),_(y,x),y.push(n.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function A(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function _(x,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),x.push(o.mask)}function M(x){const y=v[x.type];let F;if(y){const H=Tn[y];F=Rf.clone(H.uniforms)}else F=x.uniforms;return F}function D(x,y){let F;for(let H=0,B=l.length;H<B;H++){const z=l[H];if(z.cacheKey===y){F=z,++F.usedTimes;break}}return F===void 0&&(F=new j0(n,y,x,s),l.push(F)),F}function E(x){if(--x.usedTimes===0){const y=l.indexOf(x);l[y]=l[l.length-1],l.pop(),x.destroy()}}function w(x){u.remove(x)}function T(){u.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:M,acquireProgram:D,releaseProgram:E,releaseShaderCache:w,programs:l,dispose:T}}function ig(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,u){n.get(a)[o]=u}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function rg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function rl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function sl(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h,f,m,v,d,g){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:m,groupOrder:v,renderOrder:h.renderOrder,z:d,group:g},n[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=m,p.groupOrder=v,p.renderOrder=h.renderOrder,p.z=d,p.group=g),e++,p}function o(h,f,m,v,d,g){const p=a(h,f,m,v,d,g);m.transmission>0?i.push(p):m.transparent===!0?r.push(p):t.push(p)}function u(h,f,m,v,d,g){const p=a(h,f,m,v,d,g);m.transmission>0?i.unshift(p):m.transparent===!0?r.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||rg),i.length>1&&i.sort(f||rl),r.length>1&&r.sort(f||rl)}function l(){for(let h=e,f=n.length;h<f;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:u,finish:l,sort:c}}function sg(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new sl,n.set(i,[a])):r>=s.length?(a=new sl,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function ag(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Q,color:new ct};break;case"SpotLight":t={position:new Q,direction:new Q,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Q,color:new ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Q,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":t={color:new ct,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return n[e.id]=t,t}}}function og(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let ug=0;function lg(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function cg(n){const e=new ag,t=og(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Q);const r=new Q,s=new Ct,a=new Ct;function o(c){let l=0,h=0,f=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let m=0,v=0,d=0,g=0,p=0,A=0,_=0,M=0,D=0,E=0,w=0;c.sort(lg);for(let x=0,y=c.length;x<y;x++){const F=c[x],H=F.color,B=F.intensity,z=F.distance,$=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)l+=H.r*B,h+=H.g*B,f+=H.b*B;else if(F.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(F.sh.coefficients[U],B);w++}else if(F.isDirectionalLight){const U=e.get(F);if(U.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const J=F.shadow,G=t.get(F);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,i.directionalShadow[m]=G,i.directionalShadowMap[m]=$,i.directionalShadowMatrix[m]=F.shadow.matrix,A++}i.directional[m]=U,m++}else if(F.isSpotLight){const U=e.get(F);U.position.setFromMatrixPosition(F.matrixWorld),U.color.copy(H).multiplyScalar(B),U.distance=z,U.coneCos=Math.cos(F.angle),U.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),U.decay=F.decay,i.spot[d]=U;const J=F.shadow;if(F.map&&(i.spotLightMap[D]=F.map,D++,J.updateMatrices(F),F.castShadow&&E++),i.spotLightMatrix[d]=J.matrix,F.castShadow){const G=t.get(F);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,i.spotShadow[d]=G,i.spotShadowMap[d]=$,M++}d++}else if(F.isRectAreaLight){const U=e.get(F);U.color.copy(H).multiplyScalar(B),U.halfWidth.set(F.width*.5,0,0),U.halfHeight.set(0,F.height*.5,0),i.rectArea[g]=U,g++}else if(F.isPointLight){const U=e.get(F);if(U.color.copy(F.color).multiplyScalar(F.intensity),U.distance=F.distance,U.decay=F.decay,F.castShadow){const J=F.shadow,G=t.get(F);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,G.shadowCameraNear=J.camera.near,G.shadowCameraFar=J.camera.far,i.pointShadow[v]=G,i.pointShadowMap[v]=$,i.pointShadowMatrix[v]=F.shadow.matrix,_++}i.point[v]=U,v++}else if(F.isHemisphereLight){const U=e.get(F);U.skyColor.copy(F.color).multiplyScalar(B),U.groundColor.copy(F.groundColor).multiplyScalar(B),i.hemi[p]=U,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=l,i.ambient[1]=h,i.ambient[2]=f;const T=i.hash;(T.directionalLength!==m||T.pointLength!==v||T.spotLength!==d||T.rectAreaLength!==g||T.hemiLength!==p||T.numDirectionalShadows!==A||T.numPointShadows!==_||T.numSpotShadows!==M||T.numSpotMaps!==D||T.numLightProbes!==w)&&(i.directional.length=m,i.spot.length=d,i.rectArea.length=g,i.point.length=v,i.hemi.length=p,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=M+D-E,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=w,T.directionalLength=m,T.pointLength=v,T.spotLength=d,T.rectAreaLength=g,T.hemiLength=p,T.numDirectionalShadows=A,T.numPointShadows=_,T.numSpotShadows=M,T.numSpotMaps=D,T.numLightProbes=w,i.version=ug++)}function u(c,l){let h=0,f=0,m=0,v=0,d=0;const g=l.matrixWorldInverse;for(let p=0,A=c.length;p<A;p++){const _=c[p];if(_.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),h++}else if(_.isSpotLight){const M=i.spot[m];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),m++}else if(_.isRectAreaLight){const M=i.rectArea[v];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(g),a.identity(),s.copy(_.matrixWorld),s.premultiply(g),a.extractRotation(s),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),v++}else if(_.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(g),f++}else if(_.isHemisphereLight){const M=i.hemi[d];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(g),d++}}}return{setup:o,setupView:u,state:i}}function al(n){const e=new cg(n),t=[],i=[];function r(l){c.camera=l,t.length=0,i.length=0}function s(l){t.push(l)}function a(l){i.push(l)}function o(){e.setup(t)}function u(l){e.setupView(t,l)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:u,pushLight:s,pushShadow:a}}function hg(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new al(n),e.set(r,[o])):s>=a.length?(o=new al(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const fg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function pg(n,e,t){let i=new pc;const r=new ht,s=new ht,a=new At,o=new Of({depthPacking:Jh}),u=new zf,c={},l=t.maxTextureSize,h={[ci]:jt,[jt]:ci,[Wn]:Wn},f=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:fg,fragmentShader:dg}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new Ri;v.setAttribute("position",new In(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new vn(v,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kl;let p=this.type;this.render=function(E,w,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;const x=n.getRenderTarget(),y=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),H=n.state;H.setBlending(ui),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const B=p!==kn&&this.type===kn,z=p===kn&&this.type!==kn;for(let $=0,U=E.length;$<U;$++){const J=E[$],G=J.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const ne=G.getFrameExtents();if(r.multiply(ne),s.copy(G.mapSize),(r.x>l||r.y>l)&&(r.x>l&&(s.x=Math.floor(l/ne.x),r.x=s.x*ne.x,G.mapSize.x=s.x),r.y>l&&(s.y=Math.floor(l/ne.y),r.y=s.y*ne.y,G.mapSize.y=s.y)),G.map===null||B===!0||z===!0){const he=this.type!==kn?{minFilter:an,magFilter:an}:{};G.map!==null&&G.map.dispose(),G.map=new hi(r.x,r.y,he),G.map.texture.name=J.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const se=G.getViewportCount();for(let he=0;he<se;he++){const Se=G.getViewport(he);a.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),H.viewport(a),G.updateMatrices(J,he),i=G.getFrustum(),M(w,T,G.camera,J,this.type)}G.isPointLightShadow!==!0&&this.type===kn&&A(G,T),G.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(x,y,F)};function A(E,w){const T=e.update(d);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new hi(r.x,r.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(w,null,T,f,d,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(w,null,T,m,d,null)}function _(E,w,T,x){let y=null;const F=T.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(F!==void 0)y=F;else if(y=T.isPointLight===!0?u:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const H=y.uuid,B=w.uuid;let z=c[H];z===void 0&&(z={},c[H]=z);let $=z[B];$===void 0&&($=y.clone(),z[B]=$,w.addEventListener("dispose",D)),y=$}if(y.visible=w.visible,y.wireframe=w.wireframe,x===kn?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:h[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,T.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const H=n.properties.get(y);H.light=T}return y}function M(E,w,T,x,y){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&y===kn)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,E.matrixWorld);const B=e.update(E),z=E.material;if(Array.isArray(z)){const $=B.groups;for(let U=0,J=$.length;U<J;U++){const G=$[U],ne=z[G.materialIndex];if(ne&&ne.visible){const se=_(E,ne,x,y);E.onBeforeShadow(n,E,w,T,B,se,G),n.renderBufferDirect(T,null,B,se,E,G),E.onAfterShadow(n,E,w,T,B,se,G)}}}else if(z.visible){const $=_(E,z,x,y);E.onBeforeShadow(n,E,w,T,B,$,null),n.renderBufferDirect(T,null,B,$,E,null),E.onAfterShadow(n,E,w,T,B,$,null)}}const H=E.children;for(let B=0,z=H.length;B<z;B++)M(H[B],w,T,x,y)}function D(E){E.target.removeEventListener("dispose",D);for(const T in c){const x=c[T],y=E.target.uuid;y in x&&(x[y].dispose(),delete x[y])}}}const mg={[Wa]:Xa,[$a]:Za,[qa]:Ka,[ur]:Ya,[Xa]:Wa,[Za]:$a,[Ka]:qa,[Ya]:ur};function gg(n,e){function t(){let O=!1;const pe=new At;let te=null;const ae=new At(0,0,0,0);return{setMask:function(Me){te!==Me&&!O&&(n.colorMask(Me,Me,Me,Me),te=Me)},setLocked:function(Me){O=Me},setClear:function(Me,ye,qe,gt,Nt){Nt===!0&&(Me*=gt,ye*=gt,qe*=gt),pe.set(Me,ye,qe,gt),ae.equals(pe)===!1&&(n.clearColor(Me,ye,qe,gt),ae.copy(pe))},reset:function(){O=!1,te=null,ae.set(-1,0,0,0)}}}function i(){let O=!1,pe=!1,te=null,ae=null,Me=null;return{setReversed:function(ye){if(pe!==ye){const qe=e.get("EXT_clip_control");pe?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT);const gt=Me;Me=null,this.setClear(gt)}pe=ye},getReversed:function(){return pe},setTest:function(ye){ye?le(n.DEPTH_TEST):be(n.DEPTH_TEST)},setMask:function(ye){te!==ye&&!O&&(n.depthMask(ye),te=ye)},setFunc:function(ye){if(pe&&(ye=mg[ye]),ae!==ye){switch(ye){case Wa:n.depthFunc(n.NEVER);break;case Xa:n.depthFunc(n.ALWAYS);break;case $a:n.depthFunc(n.LESS);break;case ur:n.depthFunc(n.LEQUAL);break;case qa:n.depthFunc(n.EQUAL);break;case Ya:n.depthFunc(n.GEQUAL);break;case Za:n.depthFunc(n.GREATER);break;case Ka:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ae=ye}},setLocked:function(ye){O=ye},setClear:function(ye){Me!==ye&&(pe&&(ye=1-ye),n.clearDepth(ye),Me=ye)},reset:function(){O=!1,te=null,ae=null,Me=null,pe=!1}}}function r(){let O=!1,pe=null,te=null,ae=null,Me=null,ye=null,qe=null,gt=null,Nt=null;return{setTest:function(st){O||(st?le(n.STENCIL_TEST):be(n.STENCIL_TEST))},setMask:function(st){pe!==st&&!O&&(n.stencilMask(st),pe=st)},setFunc:function(st,tn,xn){(te!==st||ae!==tn||Me!==xn)&&(n.stencilFunc(st,tn,xn),te=st,ae=tn,Me=xn)},setOp:function(st,tn,xn){(ye!==st||qe!==tn||gt!==xn)&&(n.stencilOp(st,tn,xn),ye=st,qe=tn,gt=xn)},setLocked:function(st){O=st},setClear:function(st){Nt!==st&&(n.clearStencil(st),Nt=st)},reset:function(){O=!1,pe=null,te=null,ae=null,Me=null,ye=null,qe=null,gt=null,Nt=null}}}const s=new t,a=new i,o=new r,u=new WeakMap,c=new WeakMap;let l={},h={},f=new WeakMap,m=[],v=null,d=!1,g=null,p=null,A=null,_=null,M=null,D=null,E=null,w=new ct(0,0,0),T=0,x=!1,y=null,F=null,H=null,B=null,z=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,J=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(G)[1]),U=J>=1):G.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),U=J>=2);let ne=null,se={};const he=n.getParameter(n.SCISSOR_BOX),Se=n.getParameter(n.VIEWPORT),Ce=new At().fromArray(he),ee=new At().fromArray(Se);function ue(O,pe,te,ae){const Me=new Uint8Array(4),ye=n.createTexture();n.bindTexture(O,ye),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qe=0;qe<te;qe++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(pe,0,n.RGBA,1,1,ae,0,n.RGBA,n.UNSIGNED_BYTE,Me):n.texImage2D(pe+qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Me);return ye}const de={};de[n.TEXTURE_2D]=ue(n.TEXTURE_2D,n.TEXTURE_2D,1),de[n.TEXTURE_CUBE_MAP]=ue(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[n.TEXTURE_2D_ARRAY]=ue(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),de[n.TEXTURE_3D]=ue(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),le(n.DEPTH_TEST),a.setFunc(ur),We(!1),Xe(hu),le(n.CULL_FACE),L(ui);function le(O){l[O]!==!0&&(n.enable(O),l[O]=!0)}function be(O){l[O]!==!1&&(n.disable(O),l[O]=!1)}function xe(O,pe){return h[O]!==pe?(n.bindFramebuffer(O,pe),h[O]=pe,O===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=pe),O===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=pe),!0):!1}function Ae(O,pe){let te=m,ae=!1;if(O){te=f.get(pe),te===void 0&&(te=[],f.set(pe,te));const Me=O.textures;if(te.length!==Me.length||te[0]!==n.COLOR_ATTACHMENT0){for(let ye=0,qe=Me.length;ye<qe;ye++)te[ye]=n.COLOR_ATTACHMENT0+ye;te.length=Me.length,ae=!0}}else te[0]!==n.BACK&&(te[0]=n.BACK,ae=!0);ae&&n.drawBuffers(te)}function Qe(O){return v!==O?(n.useProgram(O),v=O,!0):!1}const Ue={[Ai]:n.FUNC_ADD,[Dh]:n.FUNC_SUBTRACT,[Sh]:n.FUNC_REVERSE_SUBTRACT};Ue[Ah]=n.MIN,Ue[wh]=n.MAX;const He={[bh]:n.ZERO,[Th]:n.ONE,[Ch]:n.SRC_COLOR,[Ga]:n.SRC_ALPHA,[Lh]:n.SRC_ALPHA_SATURATE,[Ih]:n.DST_COLOR,[Rh]:n.DST_ALPHA,[Fh]:n.ONE_MINUS_SRC_COLOR,[ka]:n.ONE_MINUS_SRC_ALPHA,[Nh]:n.ONE_MINUS_DST_COLOR,[Ph]:n.ONE_MINUS_DST_ALPHA,[Uh]:n.CONSTANT_COLOR,[Bh]:n.ONE_MINUS_CONSTANT_COLOR,[Oh]:n.CONSTANT_ALPHA,[zh]:n.ONE_MINUS_CONSTANT_ALPHA};function L(O,pe,te,ae,Me,ye,qe,gt,Nt,st){if(O===ui){d===!0&&(be(n.BLEND),d=!1);return}if(d===!1&&(le(n.BLEND),d=!0),O!==Mh){if(O!==g||st!==x){if((p!==Ai||M!==Ai)&&(n.blendEquation(n.FUNC_ADD),p=Ai,M=Ai),st)switch(O){case ir:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fu:n.blendFunc(n.ONE,n.ONE);break;case du:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case pu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case ir:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case du:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case pu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}A=null,_=null,D=null,E=null,w.set(0,0,0),T=0,g=O,x=st}return}Me=Me||pe,ye=ye||te,qe=qe||ae,(pe!==p||Me!==M)&&(n.blendEquationSeparate(Ue[pe],Ue[Me]),p=pe,M=Me),(te!==A||ae!==_||ye!==D||qe!==E)&&(n.blendFuncSeparate(He[te],He[ae],He[ye],He[qe]),A=te,_=ae,D=ye,E=qe),(gt.equals(w)===!1||Nt!==T)&&(n.blendColor(gt.r,gt.g,gt.b,Nt),w.copy(gt),T=Nt),g=O,x=!1}function pt(O,pe){O.side===Wn?be(n.CULL_FACE):le(n.CULL_FACE);let te=O.side===jt;pe&&(te=!te),We(te),O.blending===ir&&O.transparent===!1?L(ui):L(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),s.setMask(O.colorWrite);const ae=O.stencilWrite;o.setTest(ae),ae&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),nt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?le(n.SAMPLE_ALPHA_TO_COVERAGE):be(n.SAMPLE_ALPHA_TO_COVERAGE)}function We(O){y!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),y=O)}function Xe(O){O!==xh?(le(n.CULL_FACE),O!==F&&(O===hu?n.cullFace(n.BACK):O===Eh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):be(n.CULL_FACE),F=O}function Te(O){O!==H&&(U&&n.lineWidth(O),H=O)}function nt(O,pe,te){O?(le(n.POLYGON_OFFSET_FILL),(B!==pe||z!==te)&&(n.polygonOffset(pe,te),B=pe,z=te)):be(n.POLYGON_OFFSET_FILL)}function Fe(O){O?le(n.SCISSOR_TEST):be(n.SCISSOR_TEST)}function P(O){O===void 0&&(O=n.TEXTURE0+$-1),ne!==O&&(n.activeTexture(O),ne=O)}function b(O,pe,te){te===void 0&&(ne===null?te=n.TEXTURE0+$-1:te=ne);let ae=se[te];ae===void 0&&(ae={type:void 0,texture:void 0},se[te]=ae),(ae.type!==O||ae.texture!==pe)&&(ne!==te&&(n.activeTexture(te),ne=te),n.bindTexture(O,pe||de[O]),ae.type=O,ae.texture=pe)}function S(){const O=se[ne];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function R(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function I(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function N(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Y(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function W(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function j(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function re(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function q(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Z(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function me(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ee(O){Ce.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),Ce.copy(O))}function fe(O){ee.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),ee.copy(O))}function Ve(O,pe){let te=c.get(pe);te===void 0&&(te=new WeakMap,c.set(pe,te));let ae=te.get(O);ae===void 0&&(ae=n.getUniformBlockIndex(pe,O.name),te.set(O,ae))}function Re(O,pe){const ae=c.get(pe).get(O);u.get(pe)!==ae&&(n.uniformBlockBinding(pe,ae,O.__bindingPointIndex),u.set(pe,ae))}function je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},ne=null,se={},h={},f=new WeakMap,m=[],v=null,d=!1,g=null,p=null,A=null,_=null,M=null,D=null,E=null,w=new ct(0,0,0),T=0,x=!1,y=null,F=null,H=null,B=null,z=null,Ce.set(0,0,n.canvas.width,n.canvas.height),ee.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:le,disable:be,bindFramebuffer:xe,drawBuffers:Ae,useProgram:Qe,setBlending:L,setMaterial:pt,setFlipSided:We,setCullFace:Xe,setLineWidth:Te,setPolygonOffset:nt,setScissorTest:Fe,activeTexture:P,bindTexture:b,unbindTexture:S,compressedTexImage2D:R,compressedTexImage3D:I,texImage2D:Z,texImage3D:me,updateUBOMapping:Ve,uniformBlockBinding:Re,texStorage2D:re,texStorage3D:q,texSubImage2D:N,texSubImage3D:Y,compressedTexSubImage2D:W,compressedTexSubImage3D:j,scissor:Ee,viewport:fe,reset:je}}function vg(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ht,l=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,b){return m?new OffscreenCanvas(P,b):Rr("canvas")}function d(P,b,S){let R=1;const I=Fe(P);if((I.width>S||I.height>S)&&(R=S/Math.max(I.width,I.height)),R<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const N=Math.floor(R*I.width),Y=Math.floor(R*I.height);h===void 0&&(h=v(N,Y));const W=b?v(N,Y):h;return W.width=N,W.height=Y,W.getContext("2d").drawImage(P,0,0,N,Y),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+N+"x"+Y+")."),W}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),P;return P}function g(P){return P.generateMipmaps}function p(P){n.generateMipmap(P)}function A(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(P,b,S,R,I=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let N=b;if(b===n.RED&&(S===n.FLOAT&&(N=n.R32F),S===n.HALF_FLOAT&&(N=n.R16F),S===n.UNSIGNED_BYTE&&(N=n.R8)),b===n.RED_INTEGER&&(S===n.UNSIGNED_BYTE&&(N=n.R8UI),S===n.UNSIGNED_SHORT&&(N=n.R16UI),S===n.UNSIGNED_INT&&(N=n.R32UI),S===n.BYTE&&(N=n.R8I),S===n.SHORT&&(N=n.R16I),S===n.INT&&(N=n.R32I)),b===n.RG&&(S===n.FLOAT&&(N=n.RG32F),S===n.HALF_FLOAT&&(N=n.RG16F),S===n.UNSIGNED_BYTE&&(N=n.RG8)),b===n.RG_INTEGER&&(S===n.UNSIGNED_BYTE&&(N=n.RG8UI),S===n.UNSIGNED_SHORT&&(N=n.RG16UI),S===n.UNSIGNED_INT&&(N=n.RG32UI),S===n.BYTE&&(N=n.RG8I),S===n.SHORT&&(N=n.RG16I),S===n.INT&&(N=n.RG32I)),b===n.RGB_INTEGER&&(S===n.UNSIGNED_BYTE&&(N=n.RGB8UI),S===n.UNSIGNED_SHORT&&(N=n.RGB16UI),S===n.UNSIGNED_INT&&(N=n.RGB32UI),S===n.BYTE&&(N=n.RGB8I),S===n.SHORT&&(N=n.RGB16I),S===n.INT&&(N=n.RGB32I)),b===n.RGBA_INTEGER&&(S===n.UNSIGNED_BYTE&&(N=n.RGBA8UI),S===n.UNSIGNED_SHORT&&(N=n.RGBA16UI),S===n.UNSIGNED_INT&&(N=n.RGBA32UI),S===n.BYTE&&(N=n.RGBA8I),S===n.SHORT&&(N=n.RGBA16I),S===n.INT&&(N=n.RGBA32I)),b===n.RGB&&S===n.UNSIGNED_INT_5_9_9_9_REV&&(N=n.RGB9_E5),b===n.RGBA){const Y=I?Rs:rt.getTransfer(R);S===n.FLOAT&&(N=n.RGBA32F),S===n.HALF_FLOAT&&(N=n.RGBA16F),S===n.UNSIGNED_BYTE&&(N=Y===lt?n.SRGB8_ALPHA8:n.RGBA8),S===n.UNSIGNED_SHORT_4_4_4_4&&(N=n.RGBA4),S===n.UNSIGNED_SHORT_5_5_5_1&&(N=n.RGB5_A1)}return(N===n.R16F||N===n.R32F||N===n.RG16F||N===n.RG32F||N===n.RGBA16F||N===n.RGBA32F)&&e.get("EXT_color_buffer_float"),N}function M(P,b){let S;return P?b===null||b===Fi||b===hr?S=n.DEPTH24_STENCIL8:b===Rn?S=n.DEPTH32F_STENCIL8:b===Fr&&(S=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Fi||b===hr?S=n.DEPTH_COMPONENT24:b===Rn?S=n.DEPTH_COMPONENT32F:b===Fr&&(S=n.DEPTH_COMPONENT16),S}function D(P,b){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==an&&P.minFilter!==Fn?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function E(P){const b=P.target;b.removeEventListener("dispose",E),T(b),b.isVideoTexture&&l.delete(b)}function w(P){const b=P.target;b.removeEventListener("dispose",w),y(b)}function T(P){const b=i.get(P);if(b.__webglInit===void 0)return;const S=P.source,R=f.get(S);if(R){const I=R[b.__cacheKey];I.usedTimes--,I.usedTimes===0&&x(P),Object.keys(R).length===0&&f.delete(S)}i.remove(P)}function x(P){const b=i.get(P);n.deleteTexture(b.__webglTexture);const S=P.source,R=f.get(S);delete R[b.__cacheKey],a.memory.textures--}function y(P){const b=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let R=0;R<6;R++){if(Array.isArray(b.__webglFramebuffer[R]))for(let I=0;I<b.__webglFramebuffer[R].length;I++)n.deleteFramebuffer(b.__webglFramebuffer[R][I]);else n.deleteFramebuffer(b.__webglFramebuffer[R]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[R])}else{if(Array.isArray(b.__webglFramebuffer))for(let R=0;R<b.__webglFramebuffer.length;R++)n.deleteFramebuffer(b.__webglFramebuffer[R]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let R=0;R<b.__webglColorRenderbuffer.length;R++)b.__webglColorRenderbuffer[R]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[R]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const S=P.textures;for(let R=0,I=S.length;R<I;R++){const N=i.get(S[R]);N.__webglTexture&&(n.deleteTexture(N.__webglTexture),a.memory.textures--),i.remove(S[R])}i.remove(P)}let F=0;function H(){F=0}function B(){const P=F;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),F+=1,P}function z(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function $(P,b){const S=i.get(P);if(P.isVideoTexture&&Te(P),P.isRenderTargetTexture===!1&&P.version>0&&S.__version!==P.version){const R=P.image;if(R===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(R.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(S,P,b);return}}t.bindTexture(n.TEXTURE_2D,S.__webglTexture,n.TEXTURE0+b)}function U(P,b){const S=i.get(P);if(P.version>0&&S.__version!==P.version){ee(S,P,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,S.__webglTexture,n.TEXTURE0+b)}function J(P,b){const S=i.get(P);if(P.version>0&&S.__version!==P.version){ee(S,P,b);return}t.bindTexture(n.TEXTURE_3D,S.__webglTexture,n.TEXTURE0+b)}function G(P,b){const S=i.get(P);if(P.version>0&&S.__version!==P.version){ue(S,P,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+b)}const ne={[Qa]:n.REPEAT,[Xn]:n.CLAMP_TO_EDGE,[eo]:n.MIRRORED_REPEAT},se={[an]:n.NEAREST,[Zh]:n.NEAREST_MIPMAP_NEAREST,[Kr]:n.NEAREST_MIPMAP_LINEAR,[Fn]:n.LINEAR,[oa]:n.LINEAR_MIPMAP_NEAREST,[Ti]:n.LINEAR_MIPMAP_LINEAR},he={[ef]:n.NEVER,[of]:n.ALWAYS,[tf]:n.LESS,[nc]:n.LEQUAL,[nf]:n.EQUAL,[af]:n.GEQUAL,[rf]:n.GREATER,[sf]:n.NOTEQUAL};function Se(P,b){if(b.type===Rn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Fn||b.magFilter===oa||b.magFilter===Kr||b.magFilter===Ti||b.minFilter===Fn||b.minFilter===oa||b.minFilter===Kr||b.minFilter===Ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,ne[b.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,ne[b.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,ne[b.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,se[b.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,se[b.minFilter]),b.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,he[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===an||b.minFilter!==Kr&&b.minFilter!==Ti||b.type===Rn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const S=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,S.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Ce(P,b){let S=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",E));const R=b.source;let I=f.get(R);I===void 0&&(I={},f.set(R,I));const N=z(b);if(N!==P.__cacheKey){I[N]===void 0&&(I[N]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,S=!0),I[N].usedTimes++;const Y=I[P.__cacheKey];Y!==void 0&&(I[P.__cacheKey].usedTimes--,Y.usedTimes===0&&x(b)),P.__cacheKey=N,P.__webglTexture=I[N].texture}return S}function ee(P,b,S){let R=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(R=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(R=n.TEXTURE_3D);const I=Ce(P,b),N=b.source;t.bindTexture(R,P.__webglTexture,n.TEXTURE0+S);const Y=i.get(N);if(N.version!==Y.__version||I===!0){t.activeTexture(n.TEXTURE0+S);const W=rt.getPrimaries(rt.workingColorSpace),j=b.colorSpace===ai?null:rt.getPrimaries(b.colorSpace),re=b.colorSpace===ai||W===j?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let q=d(b.image,!1,r.maxTextureSize);q=nt(b,q);const Z=s.convert(b.format,b.colorSpace),me=s.convert(b.type);let Ee=_(b.internalFormat,Z,me,b.colorSpace,b.isVideoTexture);Se(R,b);let fe;const Ve=b.mipmaps,Re=b.isVideoTexture!==!0,je=Y.__version===void 0||I===!0,O=N.dataReady,pe=D(b,q);if(b.isDepthTexture)Ee=M(b.format===fr,b.type),je&&(Re?t.texStorage2D(n.TEXTURE_2D,1,Ee,q.width,q.height):t.texImage2D(n.TEXTURE_2D,0,Ee,q.width,q.height,0,Z,me,null));else if(b.isDataTexture)if(Ve.length>0){Re&&je&&t.texStorage2D(n.TEXTURE_2D,pe,Ee,Ve[0].width,Ve[0].height);for(let te=0,ae=Ve.length;te<ae;te++)fe=Ve[te],Re?O&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,fe.width,fe.height,Z,me,fe.data):t.texImage2D(n.TEXTURE_2D,te,Ee,fe.width,fe.height,0,Z,me,fe.data);b.generateMipmaps=!1}else Re?(je&&t.texStorage2D(n.TEXTURE_2D,pe,Ee,q.width,q.height),O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,q.width,q.height,Z,me,q.data)):t.texImage2D(n.TEXTURE_2D,0,Ee,q.width,q.height,0,Z,me,q.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Re&&je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,Ee,Ve[0].width,Ve[0].height,q.depth);for(let te=0,ae=Ve.length;te<ae;te++)if(fe=Ve[te],b.format!==gn)if(Z!==null)if(Re){if(O)if(b.layerUpdates.size>0){const Me=Uu(fe.width,fe.height,b.format,b.type);for(const ye of b.layerUpdates){const qe=fe.data.subarray(ye*Me/fe.data.BYTES_PER_ELEMENT,(ye+1)*Me/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,ye,fe.width,fe.height,1,Z,qe)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,fe.width,fe.height,q.depth,Z,fe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,Ee,fe.width,fe.height,q.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Re?O&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,fe.width,fe.height,q.depth,Z,me,fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,Ee,fe.width,fe.height,q.depth,0,Z,me,fe.data)}else{Re&&je&&t.texStorage2D(n.TEXTURE_2D,pe,Ee,Ve[0].width,Ve[0].height);for(let te=0,ae=Ve.length;te<ae;te++)fe=Ve[te],b.format!==gn?Z!==null?Re?O&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,fe.width,fe.height,Z,fe.data):t.compressedTexImage2D(n.TEXTURE_2D,te,Ee,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?O&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,fe.width,fe.height,Z,me,fe.data):t.texImage2D(n.TEXTURE_2D,te,Ee,fe.width,fe.height,0,Z,me,fe.data)}else if(b.isDataArrayTexture)if(Re){if(je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,Ee,q.width,q.height,q.depth),O)if(b.layerUpdates.size>0){const te=Uu(q.width,q.height,b.format,b.type);for(const ae of b.layerUpdates){const Me=q.data.subarray(ae*te/q.data.BYTES_PER_ELEMENT,(ae+1)*te/q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ae,q.width,q.height,1,Z,me,Me)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,Z,me,q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ee,q.width,q.height,q.depth,0,Z,me,q.data);else if(b.isData3DTexture)Re?(je&&t.texStorage3D(n.TEXTURE_3D,pe,Ee,q.width,q.height,q.depth),O&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,Z,me,q.data)):t.texImage3D(n.TEXTURE_3D,0,Ee,q.width,q.height,q.depth,0,Z,me,q.data);else if(b.isFramebufferTexture){if(je)if(Re)t.texStorage2D(n.TEXTURE_2D,pe,Ee,q.width,q.height);else{let te=q.width,ae=q.height;for(let Me=0;Me<pe;Me++)t.texImage2D(n.TEXTURE_2D,Me,Ee,te,ae,0,Z,me,null),te>>=1,ae>>=1}}else if(Ve.length>0){if(Re&&je){const te=Fe(Ve[0]);t.texStorage2D(n.TEXTURE_2D,pe,Ee,te.width,te.height)}for(let te=0,ae=Ve.length;te<ae;te++)fe=Ve[te],Re?O&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,Z,me,fe):t.texImage2D(n.TEXTURE_2D,te,Ee,Z,me,fe);b.generateMipmaps=!1}else if(Re){if(je){const te=Fe(q);t.texStorage2D(n.TEXTURE_2D,pe,Ee,te.width,te.height)}O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Z,me,q)}else t.texImage2D(n.TEXTURE_2D,0,Ee,Z,me,q);g(b)&&p(R),Y.__version=N.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function ue(P,b,S){if(b.image.length!==6)return;const R=Ce(P,b),I=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+S);const N=i.get(I);if(I.version!==N.__version||R===!0){t.activeTexture(n.TEXTURE0+S);const Y=rt.getPrimaries(rt.workingColorSpace),W=b.colorSpace===ai?null:rt.getPrimaries(b.colorSpace),j=b.colorSpace===ai||Y===W?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);const re=b.isCompressedTexture||b.image[0].isCompressedTexture,q=b.image[0]&&b.image[0].isDataTexture,Z=[];for(let ae=0;ae<6;ae++)!re&&!q?Z[ae]=d(b.image[ae],!0,r.maxCubemapSize):Z[ae]=q?b.image[ae].image:b.image[ae],Z[ae]=nt(b,Z[ae]);const me=Z[0],Ee=s.convert(b.format,b.colorSpace),fe=s.convert(b.type),Ve=_(b.internalFormat,Ee,fe,b.colorSpace),Re=b.isVideoTexture!==!0,je=N.__version===void 0||R===!0,O=I.dataReady;let pe=D(b,me);Se(n.TEXTURE_CUBE_MAP,b);let te;if(re){Re&&je&&t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,Ve,me.width,me.height);for(let ae=0;ae<6;ae++){te=Z[ae].mipmaps;for(let Me=0;Me<te.length;Me++){const ye=te[Me];b.format!==gn?Ee!==null?Re?O&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Me,0,0,ye.width,ye.height,Ee,ye.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Me,Ve,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Me,0,0,ye.width,ye.height,Ee,fe,ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Me,Ve,ye.width,ye.height,0,Ee,fe,ye.data)}}}else{if(te=b.mipmaps,Re&&je){te.length>0&&pe++;const ae=Fe(Z[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,Ve,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(q){Re?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Z[ae].width,Z[ae].height,Ee,fe,Z[ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ve,Z[ae].width,Z[ae].height,0,Ee,fe,Z[ae].data);for(let Me=0;Me<te.length;Me++){const qe=te[Me].image[ae].image;Re?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Me+1,0,0,qe.width,qe.height,Ee,fe,qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Me+1,Ve,qe.width,qe.height,0,Ee,fe,qe.data)}}else{Re?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ee,fe,Z[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ve,Ee,fe,Z[ae]);for(let Me=0;Me<te.length;Me++){const ye=te[Me];Re?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Me+1,0,0,Ee,fe,ye.image[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Me+1,Ve,Ee,fe,ye.image[ae])}}}g(b)&&p(n.TEXTURE_CUBE_MAP),N.__version=I.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function de(P,b,S,R,I,N){const Y=s.convert(S.format,S.colorSpace),W=s.convert(S.type),j=_(S.internalFormat,Y,W,S.colorSpace),re=i.get(b),q=i.get(S);if(q.__renderTarget=b,!re.__hasExternalTextures){const Z=Math.max(1,b.width>>N),me=Math.max(1,b.height>>N);I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?t.texImage3D(I,N,j,Z,me,b.depth,0,Y,W,null):t.texImage2D(I,N,j,Z,me,0,Y,W,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),Xe(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,R,I,q.__webglTexture,0,We(b)):(I===n.TEXTURE_2D||I>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&I<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,R,I,q.__webglTexture,N),t.bindFramebuffer(n.FRAMEBUFFER,null)}function le(P,b,S){if(n.bindRenderbuffer(n.RENDERBUFFER,P),b.depthBuffer){const R=b.depthTexture,I=R&&R.isDepthTexture?R.type:null,N=M(b.stencilBuffer,I),Y=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=We(b);Xe(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,W,N,b.width,b.height):S?n.renderbufferStorageMultisample(n.RENDERBUFFER,W,N,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,N,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,P)}else{const R=b.textures;for(let I=0;I<R.length;I++){const N=R[I],Y=s.convert(N.format,N.colorSpace),W=s.convert(N.type),j=_(N.internalFormat,Y,W,N.colorSpace),re=We(b);S&&Xe(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,j,b.width,b.height):Xe(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,j,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,j,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function be(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const R=i.get(b.depthTexture);R.__renderTarget=b,(!R.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),$(b.depthTexture,0);const I=R.__webglTexture,N=We(b);if(b.depthTexture.format===rr)Xe(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,I,0,N):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,I,0);else if(b.depthTexture.format===fr)Xe(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,I,0,N):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,I,0);else throw new Error("Unknown depthTexture format")}function xe(P){const b=i.get(P),S=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const R=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),R){const I=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,R.removeEventListener("dispose",I)};R.addEventListener("dispose",I),b.__depthDisposeCallback=I}b.__boundDepthTexture=R}if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(S)throw new Error("target.depthTexture not supported in Cube render targets");be(b.__webglFramebuffer,P)}else if(S){b.__webglDepthbuffer=[];for(let R=0;R<6;R++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[R]),b.__webglDepthbuffer[R]===void 0)b.__webglDepthbuffer[R]=n.createRenderbuffer(),le(b.__webglDepthbuffer[R],P,!1);else{const I=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,N=b.__webglDepthbuffer[R];n.bindRenderbuffer(n.RENDERBUFFER,N),n.framebufferRenderbuffer(n.FRAMEBUFFER,I,n.RENDERBUFFER,N)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),le(b.__webglDepthbuffer,P,!1);else{const R=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,I=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,I),n.framebufferRenderbuffer(n.FRAMEBUFFER,R,n.RENDERBUFFER,I)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ae(P,b,S){const R=i.get(P);b!==void 0&&de(R.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),S!==void 0&&xe(P)}function Qe(P){const b=P.texture,S=i.get(P),R=i.get(b);P.addEventListener("dispose",w);const I=P.textures,N=P.isWebGLCubeRenderTarget===!0,Y=I.length>1;if(Y||(R.__webglTexture===void 0&&(R.__webglTexture=n.createTexture()),R.__version=b.version,a.memory.textures++),N){S.__webglFramebuffer=[];for(let W=0;W<6;W++)if(b.mipmaps&&b.mipmaps.length>0){S.__webglFramebuffer[W]=[];for(let j=0;j<b.mipmaps.length;j++)S.__webglFramebuffer[W][j]=n.createFramebuffer()}else S.__webglFramebuffer[W]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){S.__webglFramebuffer=[];for(let W=0;W<b.mipmaps.length;W++)S.__webglFramebuffer[W]=n.createFramebuffer()}else S.__webglFramebuffer=n.createFramebuffer();if(Y)for(let W=0,j=I.length;W<j;W++){const re=i.get(I[W]);re.__webglTexture===void 0&&(re.__webglTexture=n.createTexture(),a.memory.textures++)}if(P.samples>0&&Xe(P)===!1){S.__webglMultisampledFramebuffer=n.createFramebuffer(),S.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,S.__webglMultisampledFramebuffer);for(let W=0;W<I.length;W++){const j=I[W];S.__webglColorRenderbuffer[W]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,S.__webglColorRenderbuffer[W]);const re=s.convert(j.format,j.colorSpace),q=s.convert(j.type),Z=_(j.internalFormat,re,q,j.colorSpace,P.isXRRenderTarget===!0),me=We(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,me,Z,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+W,n.RENDERBUFFER,S.__webglColorRenderbuffer[W])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(S.__webglDepthRenderbuffer=n.createRenderbuffer(),le(S.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(N){t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture),Se(n.TEXTURE_CUBE_MAP,b);for(let W=0;W<6;W++)if(b.mipmaps&&b.mipmaps.length>0)for(let j=0;j<b.mipmaps.length;j++)de(S.__webglFramebuffer[W][j],P,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+W,j);else de(S.__webglFramebuffer[W],P,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);g(b)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Y){for(let W=0,j=I.length;W<j;W++){const re=I[W],q=i.get(re);t.bindTexture(n.TEXTURE_2D,q.__webglTexture),Se(n.TEXTURE_2D,re),de(S.__webglFramebuffer,P,re,n.COLOR_ATTACHMENT0+W,n.TEXTURE_2D,0),g(re)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let W=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(W=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(W,R.__webglTexture),Se(W,b),b.mipmaps&&b.mipmaps.length>0)for(let j=0;j<b.mipmaps.length;j++)de(S.__webglFramebuffer[j],P,b,n.COLOR_ATTACHMENT0,W,j);else de(S.__webglFramebuffer,P,b,n.COLOR_ATTACHMENT0,W,0);g(b)&&p(W),t.unbindTexture()}P.depthBuffer&&xe(P)}function Ue(P){const b=P.textures;for(let S=0,R=b.length;S<R;S++){const I=b[S];if(g(I)){const N=A(P),Y=i.get(I).__webglTexture;t.bindTexture(N,Y),p(N),t.unbindTexture()}}}const He=[],L=[];function pt(P){if(P.samples>0){if(Xe(P)===!1){const b=P.textures,S=P.width,R=P.height;let I=n.COLOR_BUFFER_BIT;const N=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=i.get(P),W=b.length>1;if(W)for(let j=0;j<b.length;j++)t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+j,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+j,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Y.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Y.__webglFramebuffer);for(let j=0;j<b.length;j++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(I|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(I|=n.STENCIL_BUFFER_BIT)),W){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Y.__webglColorRenderbuffer[j]);const re=i.get(b[j]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,re,0)}n.blitFramebuffer(0,0,S,R,0,0,S,R,I,n.NEAREST),u===!0&&(He.length=0,L.length=0,He.push(n.COLOR_ATTACHMENT0+j),P.depthBuffer&&P.resolveDepthBuffer===!1&&(He.push(N),L.push(N),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,L)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,He))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),W)for(let j=0;j<b.length;j++){t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+j,n.RENDERBUFFER,Y.__webglColorRenderbuffer[j]);const re=i.get(b[j]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+j,n.TEXTURE_2D,re,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Y.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&u){const b=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function We(P){return Math.min(r.maxSamples,P.samples)}function Xe(P){const b=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Te(P){const b=a.render.frame;l.get(P)!==b&&(l.set(P,b),P.update())}function nt(P,b){const S=P.colorSpace,R=P.format,I=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||S!==dr&&S!==ai&&(rt.getTransfer(S)===lt?(R!==gn||I!==Kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",S)),b}function Fe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=H,this.setTexture2D=$,this.setTexture2DArray=U,this.setTexture3D=J,this.setTextureCube=G,this.rebindTextures=Ae,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=Ue,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=de,this.useMultisampledRTT=Xe}function _g(n,e){function t(i,r=ai){let s;const a=rt.getTransfer(r);if(i===Kn)return n.UNSIGNED_BYTE;if(i===Wo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Xo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Yl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===$l)return n.BYTE;if(i===ql)return n.SHORT;if(i===Fr)return n.UNSIGNED_SHORT;if(i===ko)return n.INT;if(i===Fi)return n.UNSIGNED_INT;if(i===Rn)return n.FLOAT;if(i===Or)return n.HALF_FLOAT;if(i===Zl)return n.ALPHA;if(i===Kl)return n.RGB;if(i===gn)return n.RGBA;if(i===Jl)return n.LUMINANCE;if(i===jl)return n.LUMINANCE_ALPHA;if(i===rr)return n.DEPTH_COMPONENT;if(i===fr)return n.DEPTH_STENCIL;if(i===Ql)return n.RED;if(i===$o)return n.RED_INTEGER;if(i===ec)return n.RG;if(i===qo)return n.RG_INTEGER;if(i===Yo)return n.RGBA_INTEGER;if(i===Ds||i===Ss||i===As||i===ws)if(a===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ds)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ss)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===As)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ds)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ss)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===As)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ws)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===to||i===no||i===io||i===ro)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===to)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===no)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===io)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ro)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===so||i===ao||i===oo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===so||i===ao)return a===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===oo)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===uo||i===lo||i===co||i===ho||i===fo||i===po||i===mo||i===go||i===vo||i===_o||i===xo||i===Eo||i===yo||i===Mo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===uo)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===lo)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===co)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ho)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===fo)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===po)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===mo)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===go)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===vo)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_o)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xo)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Eo)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===yo)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Mo)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===bs||i===Do||i===So)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===bs)return a===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Do)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===So)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===tc||i===Ao||i===wo||i===bo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===bs)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ao)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===wo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===hr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const xg={type:"move"};class Ua{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ps,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ps,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ps,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,u=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const d of e.hand.values()){const g=t.getJointPose(d,i),p=this._getHandJoint(c,d);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const l=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=l.position.distanceTo(h.position),m=.02,v=.005;c.inputState.pinching&&f>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xg)))}return o!==null&&(o.visible=r!==null),u!==null&&(u.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ps;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Eg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Mg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new qt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new bn({vertexShader:Eg,fragmentShader:yg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vn(new Pi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Dg extends vr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",u=1,c=null,l=null,h=null,f=null,m=null,v=null;const d=new Mg,g=t.getContextAttributes();let p=null,A=null;const _=[],M=[],D=new ht;let E=null;const w=new mn;w.viewport=new At;const T=new mn;T.viewport=new At;const x=[w,T],y=new Wf;let F=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ue=_[ee];return ue===void 0&&(ue=new Ua,_[ee]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ee){let ue=_[ee];return ue===void 0&&(ue=new Ua,_[ee]=ue),ue.getGripSpace()},this.getHand=function(ee){let ue=_[ee];return ue===void 0&&(ue=new Ua,_[ee]=ue),ue.getHandSpace()};function B(ee){const ue=M.indexOf(ee.inputSource);if(ue===-1)return;const de=_[ue];de!==void 0&&(de.update(ee.inputSource,ee.frame,c||a),de.dispatchEvent({type:ee.type,data:ee.inputSource}))}function z(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",$);for(let ee=0;ee<_.length;ee++){const ue=M[ee];ue!==null&&(M[ee]=null,_[ee].disconnect(ue))}F=null,H=null,d.reset(),e.setRenderTarget(p),m=null,f=null,h=null,r=null,A=null,Ce.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",z),r.addEventListener("inputsourceschange",$),g.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(D),r.enabledFeatures!==void 0&&r.enabledFeatures.includes("layers")){let de=null,le=null,be=null;g.depth&&(be=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=g.stencil?fr:rr,le=g.stencil?hr:Fi);const xe={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(xe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),A=new hi(f.textureWidth,f.textureHeight,{format:gn,type:Kn,depthTexture:new mc(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{const de={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,de),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),A=new hi(m.framebufferWidth,m.framebufferHeight,{format:gn,type:Kn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}A.isXRRenderTarget=!0,this.setFoveation(u),c=null,a=await r.requestReferenceSpace(o),Ce.setContext(r),Ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function $(ee){for(let ue=0;ue<ee.removed.length;ue++){const de=ee.removed[ue],le=M.indexOf(de);le>=0&&(M[le]=null,_[le].disconnect(de))}for(let ue=0;ue<ee.added.length;ue++){const de=ee.added[ue];let le=M.indexOf(de);if(le===-1){for(let xe=0;xe<_.length;xe++)if(xe>=M.length){M.push(de),le=xe;break}else if(M[xe]===null){M[xe]=de,le=xe;break}if(le===-1)break}const be=_[le];be&&be.connect(de)}}const U=new Q,J=new Q;function G(ee,ue,de){U.setFromMatrixPosition(ue.matrixWorld),J.setFromMatrixPosition(de.matrixWorld);const le=U.distanceTo(J),be=ue.projectionMatrix.elements,xe=de.projectionMatrix.elements,Ae=be[14]/(be[10]-1),Qe=be[14]/(be[10]+1),Ue=(be[9]+1)/be[5],He=(be[9]-1)/be[5],L=(be[8]-1)/be[0],pt=(xe[8]+1)/xe[0],We=Ae*L,Xe=Ae*pt,Te=le/(-L+pt),nt=Te*-L;if(ue.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(nt),ee.translateZ(Te),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),be[10]===-1)ee.projectionMatrix.copy(ue.projectionMatrix),ee.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const Fe=Ae+Te,P=Qe+Te,b=We-nt,S=Xe+(le-nt),R=Ue*Qe/P*Fe,I=He*Qe/P*Fe;ee.projectionMatrix.makePerspective(b,S,R,I,Fe,P),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function ne(ee,ue){ue===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ue.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;let ue=ee.near,de=ee.far;d.texture!==null&&(d.depthNear>0&&(ue=d.depthNear),d.depthFar>0&&(de=d.depthFar)),y.near=T.near=w.near=ue,y.far=T.far=w.far=de,(F!==y.near||H!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),F=y.near,H=y.far),w.layers.mask=ee.layers.mask|2,T.layers.mask=ee.layers.mask|4,y.layers.mask=w.layers.mask|T.layers.mask;const le=ee.parent,be=y.cameras;ne(y,le);for(let xe=0;xe<be.length;xe++)ne(be[xe],le);be.length===2?G(y,w,T):y.projectionMatrix.copy(w.projectionMatrix),se(ee,y,le)};function se(ee,ue,de){de===null?ee.matrix.copy(ue.matrixWorld):(ee.matrix.copy(de.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ue.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(ue.projectionMatrix),ee.projectionMatrixInverse.copy(ue.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=To*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&m===null))return u},this.setFoveation=function(ee){u=ee,f!==null&&(f.fixedFoveation=ee),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ee)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(y)};let he=null;function Se(ee,ue){if(l=ue.getViewerPose(c||a),v=ue,l!==null){const de=l.views;m!==null&&(e.setRenderTargetFramebuffer(A,m.framebuffer),e.setRenderTarget(A));let le=!1;de.length!==y.cameras.length&&(y.cameras.length=0,le=!0);for(let xe=0;xe<de.length;xe++){const Ae=de[xe];let Qe=null;if(m!==null)Qe=m.getViewport(Ae);else{const He=h.getViewSubImage(f,Ae);Qe=He.viewport,xe===0&&(e.setRenderTargetTextures(A,He.colorTexture,f.ignoreDepthValues?void 0:He.depthStencilTexture),e.setRenderTarget(A))}let Ue=x[xe];Ue===void 0&&(Ue=new mn,Ue.layers.enable(xe),Ue.viewport=new At,x[xe]=Ue),Ue.matrix.fromArray(Ae.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(Ae.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),xe===0&&(y.matrix.copy(Ue.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),le===!0&&y.cameras.push(Ue)}const be=r.enabledFeatures;if(be&&be.includes("depth-sensing")){const xe=h.getDepthInformation(de[0]);xe&&xe.isValid&&xe.texture&&d.init(e,xe,r.renderState)}}for(let de=0;de<_.length;de++){const le=M[de],be=_[de];le!==null&&be!==void 0&&be.update(le,ue,c||a)}he&&he(ee,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),v=null}const Ce=new vc;Ce.setAnimationLoop(Se),this.setAnimationLoop=function(ee){he=ee},this.dispose=function(){}}}const yi=new Jn,Sg=new Ct;function Ag(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,hc(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,A,_,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),h(g,p)):p.isMeshPhongMaterial?(s(g,p),l(g,p)):p.isMeshStandardMaterial?(s(g,p),f(g,p),p.isMeshPhysicalMaterial&&m(g,p,M)):p.isMeshMatcapMaterial?(s(g,p),v(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),d(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?u(g,p,A,_):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===jt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===jt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const A=e.get(p),_=A.envMap,M=A.envMapRotation;_&&(g.envMap.value=_,yi.copy(M),yi.x*=-1,yi.y*=-1,yi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),g.envMapRotation.value.setFromMatrix4(Sg.makeRotationFromEuler(yi)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function u(g,p,A,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*A,g.scale.value=_*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function m(g,p,A){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===jt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=A.texture,g.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,p){p.matcap&&(g.matcap.value=p.matcap)}function d(g,p){const A=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(A.matrixWorld),g.nearDistance.value=A.shadow.camera.near,g.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function wg(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function u(A,_){const M=_.program;i.uniformBlockBinding(A,M)}function c(A,_){let M=r[A.id];M===void 0&&(v(A),M=l(A),r[A.id]=M,A.addEventListener("dispose",g));const D=_.program;i.updateUBOMapping(A,D);const E=e.render.frame;s[A.id]!==E&&(f(A),s[A.id]=E)}function l(A){const _=h();A.__bindingPointIndex=_;const M=n.createBuffer(),D=A.__size,E=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,D,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,M),M}function h(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const _=r[A.id],M=A.uniforms,D=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let E=0,w=M.length;E<w;E++){const T=Array.isArray(M[E])?M[E]:[M[E]];for(let x=0,y=T.length;x<y;x++){const F=T[x];if(m(F,E,x,D)===!0){const H=F.__offset,B=Array.isArray(F.value)?F.value:[F.value];let z=0;for(let $=0;$<B.length;$++){const U=B[$],J=d(U);typeof U=="number"||typeof U=="boolean"?(F.__data[0]=U,n.bufferSubData(n.UNIFORM_BUFFER,H+z,F.__data)):U.isMatrix3?(F.__data[0]=U.elements[0],F.__data[1]=U.elements[1],F.__data[2]=U.elements[2],F.__data[3]=0,F.__data[4]=U.elements[3],F.__data[5]=U.elements[4],F.__data[6]=U.elements[5],F.__data[7]=0,F.__data[8]=U.elements[6],F.__data[9]=U.elements[7],F.__data[10]=U.elements[8],F.__data[11]=0):(U.toArray(F.__data,z),z+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,F.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(A,_,M,D){const E=A.value,w=_+"_"+M;if(D[w]===void 0)return typeof E=="number"||typeof E=="boolean"?D[w]=E:D[w]=E.clone(),!0;{const T=D[w];if(typeof E=="number"||typeof E=="boolean"){if(T!==E)return D[w]=E,!0}else if(T.equals(E)===!1)return T.copy(E),!0}return!1}function v(A){const _=A.uniforms;let M=0;const D=16;for(let w=0,T=_.length;w<T;w++){const x=Array.isArray(_[w])?_[w]:[_[w]];for(let y=0,F=x.length;y<F;y++){const H=x[y],B=Array.isArray(H.value)?H.value:[H.value];for(let z=0,$=B.length;z<$;z++){const U=B[z],J=d(U),G=M%D,ne=G%J.boundary,se=G+ne;M+=ne,se!==0&&D-se<J.storage&&(M+=D-se),H.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=M,M+=J.storage}}}const E=M%D;return E>0&&(M+=D-E),A.__size=M,A.__cache={},this}function d(A){const _={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(_.boundary=4,_.storage=4):A.isVector2?(_.boundary=8,_.storage=8):A.isVector3||A.isColor?(_.boundary=16,_.storage=12):A.isVector4?(_.boundary=16,_.storage=16):A.isMatrix3?(_.boundary=48,_.storage=48):A.isMatrix4?(_.boundary=64,_.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),_}function g(A){const _=A.target;_.removeEventListener("dispose",g);const M=a.indexOf(_.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function p(){for(const A in r)n.deleteBuffer(r[A]);a=[],r={},s={}}return{bind:u,update:c,dispose:p}}class bg{constructor(e={}){const{canvas:t=lf(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:c=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const v=new Uint32Array(4),d=new Int32Array(4);let g=null,p=null;const A=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pn,this.toneMapping=li,this.toneMappingExposure=1;const M=this;let D=!1,E=0,w=0,T=null,x=-1,y=null;const F=new At,H=new At;let B=null;const z=new ct(0);let $=0,U=t.width,J=t.height,G=1,ne=null,se=null;const he=new At(0,0,U,J),Se=new At(0,0,U,J);let Ce=!1;const ee=new pc;let ue=!1,de=!1;this.transmissionResolutionScale=1;const le=new Ct,be=new Ct,xe=new Q,Ae=new At,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ue=!1;function He(){return T===null?G:1}let L=i;function pt(C,k){return t.getContext(C,k)}try{const C={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:u,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Go}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",ye,!1),L===null){const k="webgl2";if(L=pt(k,C),L===null)throw pt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let We,Xe,Te,nt,Fe,P,b,S,R,I,N,Y,W,j,re,q,Z,me,Ee,fe,Ve,Re,je,O;function pe(){We=new Um(L),We.init(),Re=new _g(L,We),Xe=new Fm(L,We,e,Re),Te=new gg(L,We),Xe.reverseDepthBuffer&&f&&Te.buffers.depth.setReversed(!0),nt=new zm(L),Fe=new ig,P=new vg(L,We,Te,Fe,Xe,Re,nt),b=new Pm(M),S=new Lm(M),R=new $f(L),je=new Tm(L,R),I=new Bm(L,R,nt,je),N=new Vm(L,I,R,nt),Ee=new Hm(L,Xe,P),q=new Rm(Fe),Y=new ng(M,b,S,We,Xe,je,q),W=new Ag(M,Fe),j=new sg,re=new hg(We),me=new bm(M,b,S,Te,N,m,u),Z=new pg(M,N,Xe),O=new wg(L,nt,Xe,Te),fe=new Cm(L,We,nt),Ve=new Om(L,We,nt),nt.programs=Y.programs,M.capabilities=Xe,M.extensions=We,M.properties=Fe,M.renderLists=j,M.shadowMap=Z,M.state=Te,M.info=nt}pe();const te=new Dg(M,L);this.xr=te,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const C=We.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=We.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(C){C!==void 0&&(G=C,this.setSize(U,J,!1))},this.getSize=function(C){return C.set(U,J)},this.setSize=function(C,k,K=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=C,J=k,t.width=Math.floor(C*G),t.height=Math.floor(k*G),K===!0&&(t.style.width=C+"px",t.style.height=k+"px"),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(U*G,J*G).floor()},this.setDrawingBufferSize=function(C,k,K){U=C,J=k,G=K,t.width=Math.floor(C*K),t.height=Math.floor(k*K),this.setViewport(0,0,C,k)},this.getCurrentViewport=function(C){return C.copy(F)},this.getViewport=function(C){return C.copy(he)},this.setViewport=function(C,k,K,X){C.isVector4?he.set(C.x,C.y,C.z,C.w):he.set(C,k,K,X),Te.viewport(F.copy(he).multiplyScalar(G).round())},this.getScissor=function(C){return C.copy(Se)},this.setScissor=function(C,k,K,X){C.isVector4?Se.set(C.x,C.y,C.z,C.w):Se.set(C,k,K,X),Te.scissor(H.copy(Se).multiplyScalar(G).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(C){Te.setScissorTest(Ce=C)},this.setOpaqueSort=function(C){ne=C},this.setTransparentSort=function(C){se=C},this.getClearColor=function(C){return C.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor.apply(me,arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha.apply(me,arguments)},this.clear=function(C=!0,k=!0,K=!0){let X=0;if(C){let V=!1;if(T!==null){const ce=T.texture.format;V=ce===Yo||ce===qo||ce===$o}if(V){const ce=T.texture.type,ge=ce===Kn||ce===Fi||ce===Fr||ce===hr||ce===Wo||ce===Xo,De=me.getClearColor(),we=me.getClearAlpha(),ke=De.r,$e=De.g,Le=De.b;ge?(v[0]=ke,v[1]=$e,v[2]=Le,v[3]=we,L.clearBufferuiv(L.COLOR,0,v)):(d[0]=ke,d[1]=$e,d[2]=Le,d[3]=we,L.clearBufferiv(L.COLOR,0,d))}else X|=L.COLOR_BUFFER_BIT}k&&(X|=L.DEPTH_BUFFER_BIT),K&&(X|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),me.dispose(),j.dispose(),re.dispose(),Fe.dispose(),b.dispose(),S.dispose(),N.dispose(),je.dispose(),O.dispose(),Y.dispose(),te.dispose(),te.removeEventListener("sessionstart",kr),te.removeEventListener("sessionend",Wr),Un.stop()};function ae(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const C=nt.autoReset,k=Z.enabled,K=Z.autoUpdate,X=Z.needsUpdate,V=Z.type;pe(),nt.autoReset=C,Z.enabled=k,Z.autoUpdate=K,Z.needsUpdate=X,Z.type=V}function ye(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function qe(C){const k=C.target;k.removeEventListener("dispose",qe),gt(k)}function gt(C){Nt(C),Fe.remove(C)}function Nt(C){const k=Fe.get(C).programs;k!==void 0&&(k.forEach(function(K){Y.releaseProgram(K)}),C.isShaderMaterial&&Y.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,K,X,V,ce){k===null&&(k=Qe);const ge=V.isMesh&&V.matrixWorld.determinant()<0,De=ea(C,k,K,X,V);Te.setMaterial(X,ge);let we=K.index,ke=1;if(X.wireframe===!0){if(we=I.getWireframeAttribute(K),we===void 0)return;ke=2}const $e=K.drawRange,Le=K.attributes.position;let tt=$e.start*ke,at=($e.start+$e.count)*ke;ce!==null&&(tt=Math.max(tt,ce.start*ke),at=Math.min(at,(ce.start+ce.count)*ke)),we!==null?(tt=Math.max(tt,0),at=Math.min(at,we.count)):Le!=null&&(tt=Math.max(tt,0),at=Math.min(at,Le.count));const wt=at-tt;if(wt<0||wt===1/0)return;je.setup(V,X,De,K,we);let Mt,it=fe;if(we!==null&&(Mt=R.get(we),it=Ve,it.setIndex(Mt)),V.isMesh)X.wireframe===!0?(Te.setLineWidth(X.wireframeLinewidth*He()),it.setMode(L.LINES)):it.setMode(L.TRIANGLES);else if(V.isLine){let Be=X.linewidth;Be===void 0&&(Be=1),Te.setLineWidth(Be*He()),V.isLineSegments?it.setMode(L.LINES):V.isLineLoop?it.setMode(L.LINE_LOOP):it.setMode(L.LINE_STRIP)}else V.isPoints?it.setMode(L.POINTS):V.isSprite&&it.setMode(L.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)it.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))it.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Be=V._multiDrawStarts,Ot=V._multiDrawCounts,ot=V._multiDrawCount,En=we?R.get(we).bytesPerElement:1,Bi=Fe.get(X).currentProgram.getUniforms();for(let nn=0;nn<ot;nn++)Bi.setValue(L,"_gl_DrawID",nn),it.render(Be[nn]/En,Ot[nn])}else if(V.isInstancedMesh)it.renderInstances(tt,wt,V.count);else if(K.isInstancedBufferGeometry){const Be=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ot=Math.min(K.instanceCount,Be);it.renderInstances(tt,wt,Ot)}else it.render(tt,wt)};function st(C,k,K){C.transparent===!0&&C.side===Wn&&C.forceSinglePass===!1?(C.side=jt,C.needsUpdate=!0,Ui(C,k,K),C.side=ci,C.needsUpdate=!0,Ui(C,k,K),C.side=Wn):Ui(C,k,K)}this.compile=function(C,k,K=null){K===null&&(K=C),p=re.get(K),p.init(k),_.push(p),K.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),C!==K&&C.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();const X=new Set;return C.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const ce=V.material;if(ce)if(Array.isArray(ce))for(let ge=0;ge<ce.length;ge++){const De=ce[ge];st(De,K,V),X.add(De)}else st(ce,K,V),X.add(ce)}),_.pop(),p=null,X},this.compileAsync=function(C,k,K=null){const X=this.compile(C,k,K);return new Promise(V=>{function ce(){if(X.forEach(function(ge){Fe.get(ge).currentProgram.isReady()&&X.delete(ge)}),X.size===0){V(C);return}setTimeout(ce,10)}We.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let tn=null;function xn(C){tn&&tn(C)}function kr(){Un.stop()}function Wr(){Un.start()}const Un=new vc;Un.setAnimationLoop(xn),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(C){tn=C,te.setAnimationLoop(C),C===null?Un.stop():Un.start()},te.addEventListener("sessionstart",kr),te.addEventListener("sessionend",Wr),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(k),k=te.getCamera()),C.isScene===!0&&C.onBeforeRender(M,C,k,T),p=re.get(C,_.length),p.init(k),_.push(p),be.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ee.setFromProjectionMatrix(be),de=this.localClippingEnabled,ue=q.init(this.clippingPlanes,de),g=j.get(C,A.length),g.init(),A.push(g),te.enabled===!0&&te.isPresenting===!0){const ce=M.xr.getDepthSensingMesh();ce!==null&&yr(ce,k,-1/0,M.sortObjects)}yr(C,k,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort(ne,se),Ue=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,Ue&&me.addToRenderList(g,C),this.info.render.frame++,ue===!0&&q.beginShadows();const K=p.state.shadowsArray;Z.render(K,C,k),ue===!0&&q.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=g.opaque,V=g.transmissive;if(p.setupLights(),k.isArrayCamera){const ce=k.cameras;if(V.length>0)for(let ge=0,De=ce.length;ge<De;ge++){const we=ce[ge];$r(X,V,C,we)}Ue&&me.render(C);for(let ge=0,De=ce.length;ge<De;ge++){const we=ce[ge];Xr(g,C,we,we.viewport)}}else V.length>0&&$r(X,V,C,k),Ue&&me.render(C),Xr(g,C,k);T!==null&&w===0&&(P.updateMultisampleRenderTarget(T),P.updateRenderTargetMipmap(T)),C.isScene===!0&&C.onAfterRender(M,C,k),je.resetDefaultState(),x=-1,y=null,_.pop(),_.length>0?(p=_[_.length-1],ue===!0&&q.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,A.pop(),A.length>0?g=A[A.length-1]:g=null};function yr(C,k,K,X){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)K=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ee.intersectsSprite(C)){X&&Ae.setFromMatrixPosition(C.matrixWorld).applyMatrix4(be);const ge=N.update(C),De=C.material;De.visible&&g.push(C,ge,De,K,Ae.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ee.intersectsObject(C))){const ge=N.update(C),De=C.material;if(X&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ae.copy(C.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Ae.copy(ge.boundingSphere.center)),Ae.applyMatrix4(C.matrixWorld).applyMatrix4(be)),Array.isArray(De)){const we=ge.groups;for(let ke=0,$e=we.length;ke<$e;ke++){const Le=we[ke],tt=De[Le.materialIndex];tt&&tt.visible&&g.push(C,ge,tt,K,Ae.z,Le)}}else De.visible&&g.push(C,ge,De,K,Ae.z,null)}}const ce=C.children;for(let ge=0,De=ce.length;ge<De;ge++)yr(ce[ge],k,K,X)}function Xr(C,k,K,X){const V=C.opaque,ce=C.transmissive,ge=C.transparent;p.setupLightsView(K),ue===!0&&q.setGlobalState(M.clippingPlanes,K),X&&Te.viewport(F.copy(X)),V.length>0&&Li(V,k,K),ce.length>0&&Li(ce,k,K),ge.length>0&&Li(ge,k,K),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function $r(C,k,K,X){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new hi(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?Or:Kn,minFilter:Ti,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const ce=p.state.transmissionRenderTarget[X.id],ge=X.viewport||F;ce.setSize(ge.z*M.transmissionResolutionScale,ge.w*M.transmissionResolutionScale);const De=M.getRenderTarget();M.setRenderTarget(ce),M.getClearColor(z),$=M.getClearAlpha(),$<1&&M.setClearColor(16777215,.5),M.clear(),Ue&&me.render(K);const we=M.toneMapping;M.toneMapping=li;const ke=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),ue===!0&&q.setGlobalState(M.clippingPlanes,X),Li(C,K,X),P.updateMultisampleRenderTarget(ce),P.updateRenderTargetMipmap(ce),We.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Le=0,tt=k.length;Le<tt;Le++){const at=k[Le],wt=at.object,Mt=at.geometry,it=at.material,Be=at.group;if(it.side===Wn&&wt.layers.test(X.layers)){const Ot=it.side;it.side=jt,it.needsUpdate=!0,qr(wt,K,X,Mt,it,Be),it.side=Ot,it.needsUpdate=!0,$e=!0}}$e===!0&&(P.updateMultisampleRenderTarget(ce),P.updateRenderTargetMipmap(ce))}M.setRenderTarget(De),M.setClearColor(z,$),ke!==void 0&&(X.viewport=ke),M.toneMapping=we}function Li(C,k,K){const X=k.isScene===!0?k.overrideMaterial:null;for(let V=0,ce=C.length;V<ce;V++){const ge=C[V],De=ge.object,we=ge.geometry,ke=X===null?ge.material:X,$e=ge.group;De.layers.test(K.layers)&&qr(De,k,K,we,ke,$e)}}function qr(C,k,K,X,V,ce){C.onBeforeRender(M,k,K,X,V,ce),C.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),V.onBeforeRender(M,k,K,X,C,ce),V.transparent===!0&&V.side===Wn&&V.forceSinglePass===!1?(V.side=jt,V.needsUpdate=!0,M.renderBufferDirect(K,k,X,V,C,ce),V.side=ci,V.needsUpdate=!0,M.renderBufferDirect(K,k,X,V,C,ce),V.side=Wn):M.renderBufferDirect(K,k,X,V,C,ce),C.onAfterRender(M,k,K,X,V,ce)}function Ui(C,k,K){k.isScene!==!0&&(k=Qe);const X=Fe.get(C),V=p.state.lights,ce=p.state.shadowsArray,ge=V.state.version,De=Y.getParameters(C,V.state,ce,k,K),we=Y.getProgramCacheKey(De);let ke=X.programs;X.environment=C.isMeshStandardMaterial?k.environment:null,X.fog=k.fog,X.envMap=(C.isMeshStandardMaterial?S:b).get(C.envMap||X.environment),X.envMapRotation=X.environment!==null&&C.envMap===null?k.environmentRotation:C.envMapRotation,ke===void 0&&(C.addEventListener("dispose",qe),ke=new Map,X.programs=ke);let $e=ke.get(we);if($e!==void 0){if(X.currentProgram===$e&&X.lightsStateVersion===ge)return Zr(C,De),$e}else De.uniforms=Y.getUniforms(C),C.onBeforeCompile(De,M),$e=Y.acquireProgram(De,we),ke.set(we,$e),X.uniforms=De.uniforms;const Le=X.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Le.clippingPlanes=q.uniform),Zr(C,De),X.needsLights=na(C),X.lightsStateVersion=ge,X.needsLights&&(Le.ambientLightColor.value=V.state.ambient,Le.lightProbe.value=V.state.probe,Le.directionalLights.value=V.state.directional,Le.directionalLightShadows.value=V.state.directionalShadow,Le.spotLights.value=V.state.spot,Le.spotLightShadows.value=V.state.spotShadow,Le.rectAreaLights.value=V.state.rectArea,Le.ltc_1.value=V.state.rectAreaLTC1,Le.ltc_2.value=V.state.rectAreaLTC2,Le.pointLights.value=V.state.point,Le.pointLightShadows.value=V.state.pointShadow,Le.hemisphereLights.value=V.state.hemi,Le.directionalShadowMap.value=V.state.directionalShadowMap,Le.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Le.spotShadowMap.value=V.state.spotShadowMap,Le.spotLightMatrix.value=V.state.spotLightMatrix,Le.spotLightMap.value=V.state.spotLightMap,Le.pointShadowMap.value=V.state.pointShadowMap,Le.pointShadowMatrix.value=V.state.pointShadowMatrix),X.currentProgram=$e,X.uniformsList=null,$e}function Yr(C){if(C.uniformsList===null){const k=C.currentProgram.getUniforms();C.uniformsList=Ts.seqWithValue(k.seq,C.uniforms)}return C.uniformsList}function Zr(C,k){const K=Fe.get(C);K.outputColorSpace=k.outputColorSpace,K.batching=k.batching,K.batchingColor=k.batchingColor,K.instancing=k.instancing,K.instancingColor=k.instancingColor,K.instancingMorph=k.instancingMorph,K.skinning=k.skinning,K.morphTargets=k.morphTargets,K.morphNormals=k.morphNormals,K.morphColors=k.morphColors,K.morphTargetsCount=k.morphTargetsCount,K.numClippingPlanes=k.numClippingPlanes,K.numIntersection=k.numClipIntersection,K.vertexAlphas=k.vertexAlphas,K.vertexTangents=k.vertexTangents,K.toneMapping=k.toneMapping}function ea(C,k,K,X,V){k.isScene!==!0&&(k=Qe),P.resetTextureUnits();const ce=k.fog,ge=X.isMeshStandardMaterial?k.environment:null,De=T===null?M.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:dr,we=(X.isMeshStandardMaterial?S:b).get(X.envMap||ge),ke=X.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,$e=!!K.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Le=!!K.morphAttributes.position,tt=!!K.morphAttributes.normal,at=!!K.morphAttributes.color;let wt=li;X.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(wt=M.toneMapping);const Mt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,it=Mt!==void 0?Mt.length:0,Be=Fe.get(X),Ot=p.state.lights;if(ue===!0&&(de===!0||C!==y)){const Xt=C===y&&X.id===x;q.setState(X,C,Xt)}let ot=!1;X.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Ot.state.version||Be.outputColorSpace!==De||V.isBatchedMesh&&Be.batching===!1||!V.isBatchedMesh&&Be.batching===!0||V.isBatchedMesh&&Be.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Be.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Be.instancing===!1||!V.isInstancedMesh&&Be.instancing===!0||V.isSkinnedMesh&&Be.skinning===!1||!V.isSkinnedMesh&&Be.skinning===!0||V.isInstancedMesh&&Be.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Be.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Be.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Be.instancingMorph===!1&&V.morphTexture!==null||Be.envMap!==we||X.fog===!0&&Be.fog!==ce||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==q.numPlanes||Be.numIntersection!==q.numIntersection)||Be.vertexAlphas!==ke||Be.vertexTangents!==$e||Be.morphTargets!==Le||Be.morphNormals!==tt||Be.morphColors!==at||Be.toneMapping!==wt||Be.morphTargetsCount!==it)&&(ot=!0):(ot=!0,Be.__version=X.version);let En=Be.currentProgram;ot===!0&&(En=Ui(X,k,V));let Bi=!1,nn=!1,Mr=!1;const vt=En.getUniforms(),un=Be.uniforms;if(Te.useProgram(En.program)&&(Bi=!0,nn=!0,Mr=!0),X.id!==x&&(x=X.id,nn=!0),Bi||y!==C){Te.buffers.depth.getReversed()?(le.copy(C.projectionMatrix),hf(le),ff(le),vt.setValue(L,"projectionMatrix",le)):vt.setValue(L,"projectionMatrix",C.projectionMatrix),vt.setValue(L,"viewMatrix",C.matrixWorldInverse);const Yt=vt.map.cameraPosition;Yt!==void 0&&Yt.setValue(L,xe.setFromMatrixPosition(C.matrixWorld)),Xe.logarithmicDepthBuffer&&vt.setValue(L,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&vt.setValue(L,"isOrthographic",C.isOrthographicCamera===!0),y!==C&&(y=C,nn=!0,Mr=!0)}if(V.isSkinnedMesh){vt.setOptional(L,V,"bindMatrix"),vt.setOptional(L,V,"bindMatrixInverse");const Xt=V.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),vt.setValue(L,"boneTexture",Xt.boneTexture,P))}V.isBatchedMesh&&(vt.setOptional(L,V,"batchingTexture"),vt.setValue(L,"batchingTexture",V._matricesTexture,P),vt.setOptional(L,V,"batchingIdTexture"),vt.setValue(L,"batchingIdTexture",V._indirectTexture,P),vt.setOptional(L,V,"batchingColorTexture"),V._colorsTexture!==null&&vt.setValue(L,"batchingColorTexture",V._colorsTexture,P));const ln=K.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&Ee.update(V,K,En),(nn||Be.receiveShadow!==V.receiveShadow)&&(Be.receiveShadow=V.receiveShadow,vt.setValue(L,"receiveShadow",V.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(un.envMap.value=we,un.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&k.environment!==null&&(un.envMapIntensity.value=k.environmentIntensity),nn&&(vt.setValue(L,"toneMappingExposure",M.toneMappingExposure),Be.needsLights&&ta(un,Mr),ce&&X.fog===!0&&W.refreshFogUniforms(un,ce),W.refreshMaterialUniforms(un,X,G,J,p.state.transmissionRenderTarget[C.id]),Ts.upload(L,Yr(Be),un,P)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ts.upload(L,Yr(Be),un,P),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&vt.setValue(L,"center",V.center),vt.setValue(L,"modelViewMatrix",V.modelViewMatrix),vt.setValue(L,"normalMatrix",V.normalMatrix),vt.setValue(L,"modelMatrix",V.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Xt=X.uniformsGroups;for(let Yt=0,aa=Xt.length;Yt<aa;Yt++){const mi=Xt[Yt];O.update(mi,En),O.bind(mi,En)}}return En}function ta(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function na(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(C,k,K){Fe.get(C.texture).__webglTexture=k,Fe.get(C.depthTexture).__webglTexture=K;const X=Fe.get(C);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=K===void 0,X.__autoAllocateDepthBuffer||We.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,k){const K=Fe.get(C);K.__webglFramebuffer=k,K.__useDefaultFramebuffer=k===void 0};const ia=L.createFramebuffer();this.setRenderTarget=function(C,k=0,K=0){T=C,E=k,w=K;let X=!0,V=null,ce=!1,ge=!1;if(C){const we=Fe.get(C);if(we.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(L.FRAMEBUFFER,null),X=!1;else if(we.__webglFramebuffer===void 0)P.setupRenderTarget(C);else if(we.__hasExternalTextures)P.rebindTextures(C,Fe.get(C.texture).__webglTexture,Fe.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Le=C.depthTexture;if(we.__boundDepthTexture!==Le){if(Le!==null&&Fe.has(Le)&&(C.width!==Le.image.width||C.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(C)}}const ke=C.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(ge=!0);const $e=Fe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray($e[k])?V=$e[k][K]:V=$e[k],ce=!0):C.samples>0&&P.useMultisampledRTT(C)===!1?V=Fe.get(C).__webglMultisampledFramebuffer:Array.isArray($e)?V=$e[K]:V=$e,F.copy(C.viewport),H.copy(C.scissor),B=C.scissorTest}else F.copy(he).multiplyScalar(G).floor(),H.copy(Se).multiplyScalar(G).floor(),B=Ce;if(K!==0&&(V=ia),Te.bindFramebuffer(L.FRAMEBUFFER,V)&&X&&Te.drawBuffers(C,V),Te.viewport(F),Te.scissor(H),Te.setScissorTest(B),ce){const we=Fe.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+k,we.__webglTexture,K)}else if(ge){const we=Fe.get(C.texture),ke=k;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,we.__webglTexture,K,ke)}else if(C!==null&&K!==0){const we=Fe.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,we.__webglTexture,K)}x=-1},this.readRenderTargetPixels=function(C,k,K,X,V,ce,ge){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Fe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ge!==void 0&&(De=De[ge]),De){Te.bindFramebuffer(L.FRAMEBUFFER,De);try{const we=C.texture,ke=we.format,$e=we.type;if(!Xe.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-X&&K>=0&&K<=C.height-V&&L.readPixels(k,K,X,V,Re.convert(ke),Re.convert($e),ce)}finally{const we=T!==null?Fe.get(T).__webglFramebuffer:null;Te.bindFramebuffer(L.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(C,k,K,X,V,ce,ge){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=Fe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ge!==void 0&&(De=De[ge]),De){const we=C.texture,ke=we.format,$e=we.type;if(!Xe.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=C.width-X&&K>=0&&K<=C.height-V){Te.bindFramebuffer(L.FRAMEBUFFER,De);const Le=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Le),L.bufferData(L.PIXEL_PACK_BUFFER,ce.byteLength,L.STREAM_READ),L.readPixels(k,K,X,V,Re.convert(ke),Re.convert($e),0);const tt=T!==null?Fe.get(T).__webglFramebuffer:null;Te.bindFramebuffer(L.FRAMEBUFFER,tt);const at=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await cf(L,at,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Le),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ce),L.deleteBuffer(Le),L.deleteSync(at),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,k=null,K=0){C.isTexture!==!0&&(tr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,C=arguments[1]);const X=Math.pow(2,-K),V=Math.floor(C.image.width*X),ce=Math.floor(C.image.height*X),ge=k!==null?k.x:0,De=k!==null?k.y:0;P.setTexture2D(C,0),L.copyTexSubImage2D(L.TEXTURE_2D,K,0,0,ge,De,V,ce),Te.unbindTexture()};const ra=L.createFramebuffer(),sa=L.createFramebuffer();this.copyTextureToTexture=function(C,k,K=null,X=null,V=0,ce=null){C.isTexture!==!0&&(tr("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,C=arguments[1],k=arguments[2],ce=arguments[3]||0,K=null),ce===null&&(V!==0?(tr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ce=V,V=0):ce=0);let ge,De,we,ke,$e,Le,tt,at,wt;const Mt=C.isCompressedTexture?C.mipmaps[ce]:C.image;if(K!==null)ge=K.max.x-K.min.x,De=K.max.y-K.min.y,we=K.isBox3?K.max.z-K.min.z:1,ke=K.min.x,$e=K.min.y,Le=K.isBox3?K.min.z:0;else{const ln=Math.pow(2,-V);ge=Math.floor(Mt.width*ln),De=Math.floor(Mt.height*ln),C.isDataArrayTexture?we=Mt.depth:C.isData3DTexture?we=Math.floor(Mt.depth*ln):we=1,ke=0,$e=0,Le=0}X!==null?(tt=X.x,at=X.y,wt=X.z):(tt=0,at=0,wt=0);const it=Re.convert(k.format),Be=Re.convert(k.type);let Ot;k.isData3DTexture?(P.setTexture3D(k,0),Ot=L.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(P.setTexture2DArray(k,0),Ot=L.TEXTURE_2D_ARRAY):(P.setTexture2D(k,0),Ot=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,k.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,k.unpackAlignment);const ot=L.getParameter(L.UNPACK_ROW_LENGTH),En=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Bi=L.getParameter(L.UNPACK_SKIP_PIXELS),nn=L.getParameter(L.UNPACK_SKIP_ROWS),Mr=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Mt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Mt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ke),L.pixelStorei(L.UNPACK_SKIP_ROWS,$e),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Le);const vt=C.isDataArrayTexture||C.isData3DTexture,un=k.isDataArrayTexture||k.isData3DTexture;if(C.isDepthTexture){const ln=Fe.get(C),Xt=Fe.get(k),Yt=Fe.get(ln.__renderTarget),aa=Fe.get(Xt.__renderTarget);Te.bindFramebuffer(L.READ_FRAMEBUFFER,Yt.__webglFramebuffer),Te.bindFramebuffer(L.DRAW_FRAMEBUFFER,aa.__webglFramebuffer);for(let mi=0;mi<we;mi++)vt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Fe.get(C).__webglTexture,V,Le+mi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Fe.get(k).__webglTexture,ce,wt+mi)),L.blitFramebuffer(ke,$e,ge,De,tt,at,ge,De,L.DEPTH_BUFFER_BIT,L.NEAREST);Te.bindFramebuffer(L.READ_FRAMEBUFFER,null),Te.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(V!==0||C.isRenderTargetTexture||Fe.has(C)){const ln=Fe.get(C),Xt=Fe.get(k);Te.bindFramebuffer(L.READ_FRAMEBUFFER,ra),Te.bindFramebuffer(L.DRAW_FRAMEBUFFER,sa);for(let Yt=0;Yt<we;Yt++)vt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ln.__webglTexture,V,Le+Yt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ln.__webglTexture,V),un?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Xt.__webglTexture,ce,wt+Yt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Xt.__webglTexture,ce),V!==0?L.blitFramebuffer(ke,$e,ge,De,tt,at,ge,De,L.COLOR_BUFFER_BIT,L.NEAREST):un?L.copyTexSubImage3D(Ot,ce,tt,at,wt+Yt,ke,$e,ge,De):L.copyTexSubImage2D(Ot,ce,tt,at,ke,$e,ge,De);Te.bindFramebuffer(L.READ_FRAMEBUFFER,null),Te.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else un?C.isDataTexture||C.isData3DTexture?L.texSubImage3D(Ot,ce,tt,at,wt,ge,De,we,it,Be,Mt.data):k.isCompressedArrayTexture?L.compressedTexSubImage3D(Ot,ce,tt,at,wt,ge,De,we,it,Mt.data):L.texSubImage3D(Ot,ce,tt,at,wt,ge,De,we,it,Be,Mt):C.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ce,tt,at,ge,De,it,Be,Mt.data):C.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ce,tt,at,Mt.width,Mt.height,it,Mt.data):L.texSubImage2D(L.TEXTURE_2D,ce,tt,at,ge,De,it,Be,Mt);L.pixelStorei(L.UNPACK_ROW_LENGTH,ot),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,En),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Bi),L.pixelStorei(L.UNPACK_SKIP_ROWS,nn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Mr),ce===0&&k.generateMipmaps&&L.generateMipmap(Ot),Te.unbindTexture()},this.copyTextureToTexture3D=function(C,k,K=null,X=null,V=0){return C.isTexture!==!0&&(tr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,X=arguments[1]||null,C=arguments[2],k=arguments[3],V=arguments[4]||0),tr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,k,K,X,V)},this.initRenderTarget=function(C){Fe.get(C).__webglFramebuffer===void 0&&P.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?P.setTextureCube(C,0):C.isData3DTexture?P.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?P.setTexture2DArray(C,0):P.setTexture2D(C,0),Te.unbindTexture()},this.resetState=function(){E=0,w=0,T=null,Te.reset(),je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class Nn{constructor(e,t,i,r,s="div"){this.parent=e,this.object=t,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),Nn.nextNameID=Nn.nextNameID||0,this.$name.id="lil-gui-name-"+ ++Nn.nextNameID,this.$widget=document.createElement(s),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled||(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e)),this}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Tg extends Nn{constructor(e,t,i){super(e,t,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Fo(n){let e,t;return(e=n.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=n.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=n.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),!!t&&"#"+t}const Cg={isPrimitive:!0,match:n=>typeof n=="string",fromHexString:Fo,toHexString:Fo},Pr={isPrimitive:!0,match:n=>typeof n=="number",fromHexString:n=>parseInt(n.substring(1),16),toHexString:n=>"#"+n.toString(16).padStart(6,0)},Fg={isPrimitive:!1,match:Array.isArray,fromHexString(n,e,t=1){const i=Pr.fromHexString(n);e[0]=(i>>16&255)/255*t,e[1]=(i>>8&255)/255*t,e[2]=(255&i)/255*t},toHexString:([n,e,t],i=1)=>Pr.toHexString(n*(i=255/i)<<16^e*i<<8^t*i<<0)},Rg={isPrimitive:!1,match:n=>Object(n)===n,fromHexString(n,e,t=1){const i=Pr.fromHexString(n);e.r=(i>>16&255)/255*t,e.g=(i>>8&255)/255*t,e.b=(255&i)/255*t},toHexString:({r:n,g:e,b:t},i=1)=>Pr.toHexString(n*(i=255/i)<<16^e*i<<8^t*i<<0)},Pg=[Cg,Pr,Fg,Rg];class Ig extends Nn{constructor(e,t,i,r){var s;super(e,t,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(s=this.initialValue,Pg.find(a=>a.match(s))),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const a=Fo(this.$text.value);a&&this._setValueFromHexString(a)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Ba extends Nn{constructor(e,t,i){super(e,t,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Ng extends Nn{constructor(e,t,i,r,s,a){super(e,t,i,"number"),this._initInput(),this.min(r),this.max(s);const o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=100*t+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=l=>{const h=parseFloat(this.$input.value);isNaN(h)||(this._snapClampSetValue(h+l),this.$input.value=this.getValue())};let t,i,r,s,a,o=!1;const u=l=>{if(o){const h=l.clientX-t,f=l.clientY-i;Math.abs(f)>5?(l.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(h)>5&&c()}if(!o){const h=l.clientY-r;a-=h*this._step*this._arrowKeyMultiplier(l),s+a>this._max?a=this._max-s:s+a<this._min&&(a=this._min-s),this._snapClampSetValue(s+a)}r=l.clientY},c=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",u),window.removeEventListener("mouseup",c)};this.$input.addEventListener("input",()=>{let l=parseFloat(this.$input.value);isNaN(l)||(this._stepExplicit&&(l=this._snap(l)),this.setValue(this._clamp(l)))}),this.$input.addEventListener("keydown",l=>{l.code==="Enter"&&this.$input.blur(),l.code==="ArrowUp"&&(l.preventDefault(),e(this._step*this._arrowKeyMultiplier(l))),l.code==="ArrowDown"&&(l.preventDefault(),e(this._step*this._arrowKeyMultiplier(l)*-1))}),this.$input.addEventListener("wheel",l=>{this._inputFocused&&(l.preventDefault(),e(this._step*this._normalizeMouseWheel(l)))},{passive:!1}),this.$input.addEventListener("mousedown",l=>{t=l.clientX,i=r=l.clientY,o=!0,s=this.getValue(),a=0,window.addEventListener("mousemove",u),window.addEventListener("mouseup",c)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=f=>{const m=this.$slider.getBoundingClientRect();let v=(d=f,g=m.left,p=m.right,A=this._min,_=this._max,(d-g)/(p-g)*(_-A)+A);var d,g,p,A,_;this._snapClampSetValue(v)},t=f=>{e(f.clientX)},i=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",t),window.removeEventListener("mouseup",i)};let r,s,a=!1;const o=f=>{f.preventDefault(),this._setDraggingStyle(!0),e(f.touches[0].clientX),a=!1},u=f=>{if(a){const m=f.touches[0].clientX-r,v=f.touches[0].clientY-s;Math.abs(m)>Math.abs(v)?o(f):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",c))}else f.preventDefault(),e(f.touches[0].clientX)},c=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",c)},l=this._callOnFinishChange.bind(this);let h;this.$slider.addEventListener("mousedown",f=>{this._setDraggingStyle(!0),e(f.clientX),window.addEventListener("mousemove",t),window.addEventListener("mouseup",i)}),this.$slider.addEventListener("touchstart",f=>{f.touches.length>1||(this._hasScrollBar?(r=f.touches[0].clientX,s=f.touches[0].clientY,a=!0):o(f),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",c))},{passive:!1}),this.$slider.addEventListener("wheel",f=>{if(Math.abs(f.deltaX)<Math.abs(f.deltaY)&&this._hasScrollBar)return;f.preventDefault();const m=this._normalizeMouseWheel(f)*this._step;this._snapClampSetValue(this.getValue()+m),this.$input.value=this.getValue(),clearTimeout(h),h=setTimeout(l,400)},{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle("lil-gui-"+t,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),t+-i}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Lg extends Nn{constructor(e,t,i,r){super(e,t,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(r)?r:Object.values(r),this._names=Array.isArray(r)?r:Object.keys(r),this._names.forEach(s=>{const a=document.createElement("option");a.innerHTML=s,this.$select.appendChild(a)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class Ug extends Nn{constructor(e,t,i){super(e,t,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}let ol=!1;class Qo{constructor({parent:e,autoPlace:t=e===void 0,container:i,width:r,title:s="Controls",injectStyles:a=!0,touchStyles:o=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",u=>{u.code!=="Enter"&&u.code!=="Space"||(u.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),o&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!ol&&a&&(function(u){const c=document.createElement("style");c.innerHTML=u;const l=document.querySelector("head link[rel=stylesheet], head style");l?document.head.insertBefore(c,l):document.head.appendChild(c)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"↕";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"▾";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"▸"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"✓";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),ol=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this.domElement.addEventListener("keydown",u=>u.stopPropagation()),this.domElement.addEventListener("keyup",u=>u.stopPropagation())}add(e,t,i,r,s){if(Object(i)===i)return new Lg(this,e,t,i);const a=e[t];switch(typeof a){case"number":return new Ng(this,e,t,i,r,s);case"boolean":return new Tg(this,e,t);case"string":return new Ug(this,e,t);case"function":return new Ba(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,a)}addColor(e,t,i=1){return new Ig(this,e,t,i)}addFolder(e){return new Qo({parent:this,title:e})}load(e,t=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof Ba||i._name in e.controllers&&i.load(e.controllers[i._name])}),t&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof Ba)){if(i._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);t.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);t.folders[i._title]=i.save()}),t}open(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const i=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const r=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(t=>t.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}var Mc={relTol:1e-12,absTol:1e-15,matrix:"Matrix",number:"number",numberFallback:"number",precision:64,predictable:!1,randomSeed:null};function Bg(n,e){if(Is(n,e))return n[e];throw typeof n[e]=="function"&&zg(n,e)?new Error('Cannot access method "'+e+'" as a property'):new Error('No access to property "'+e+'"')}function Og(n,e,t){if(Is(n,e))return n[e]=t,t;throw new Error('No access to property "'+e+'"')}function Is(n,e){return!Hg(n)&&!Array.isArray(n)?!1:Ir(Vg,e)?!0:!(e in Object.prototype||e in Function.prototype)}function zg(n,e){return n==null||typeof n[e]!="function"||Ir(n,e)&&Object.getPrototypeOf&&e in Object.getPrototypeOf(n)?!1:Ir(Gg,e)?!0:!(e in Object.prototype||e in Function.prototype)}function Hg(n){return typeof n=="object"&&n&&n.constructor===Object}var Vg={length:!0,name:!0},Gg={toString:!0,valueOf:!0,toLocaleString:!0};class kg{constructor(e){this.wrappedObject=e,this[Symbol.iterator]=this.entries}keys(){return Object.keys(this.wrappedObject).filter(e=>this.has(e)).values()}get(e){return Bg(this.wrappedObject,e)}set(e,t){return Og(this.wrappedObject,e,t),this}has(e){return Is(this.wrappedObject,e)&&e in this.wrappedObject}entries(){return Wg(this.keys(),e=>[e,this.get(e)])}forEach(e){for(var t of this.keys())e(this.get(t),t,this)}delete(e){Is(this.wrappedObject,e)&&delete this.wrappedObject[e]}clear(){for(var e of this.keys())this.delete(e)}get size(){return Object.keys(this.wrappedObject).length}}function Wg(n,e){return{next:()=>{var t=n.next();return t.done?t:{value:e(t.value),done:!1}}}}function dt(n){return typeof n=="number"}function yt(n){return!n||typeof n!="object"||typeof n.constructor!="function"?!1:n.isBigNumber===!0&&typeof n.constructor.prototype=="object"&&n.constructor.prototype.isBigNumber===!0||typeof n.constructor.isDecimal=="function"&&n.constructor.isDecimal(n)===!0}function Xg(n){return typeof n=="bigint"}function Dc(n){return n&&typeof n=="object"&&Object.getPrototypeOf(n).isComplex===!0||!1}function Sc(n){return n&&typeof n=="object"&&Object.getPrototypeOf(n).isFraction===!0||!1}function Ac(n){return n&&n.constructor.prototype.isUnit===!0||!1}function Cn(n){return typeof n=="string"}var mt=Array.isArray;function Tt(n){return n&&n.constructor.prototype.isMatrix===!0||!1}function Ns(n){return Array.isArray(n)||Tt(n)}function $g(n){return n&&n.isDenseMatrix&&n.constructor.prototype.isMatrix===!0||!1}function qg(n){return n&&n.isSparseMatrix&&n.constructor.prototype.isMatrix===!0||!1}function wc(n){return n&&n.constructor.prototype.isRange===!0||!1}function eu(n){return n&&n.constructor.prototype.isIndex===!0||!1}function Yg(n){return typeof n=="boolean"}function Zg(n){return n&&n.constructor.prototype.isResultSet===!0||!1}function Kg(n){return n&&n.constructor.prototype.isHelp===!0||!1}function Jg(n){return typeof n=="function"}function jg(n){return n instanceof Date}function Qg(n){return n instanceof RegExp}function tu(n){return!!(n&&typeof n=="object"&&n.constructor===Object&&!Dc(n)&&!Sc(n))}function ev(n){return n?n instanceof Map||n instanceof kg||typeof n.set=="function"&&typeof n.get=="function"&&typeof n.keys=="function"&&typeof n.has=="function":!1}function tv(n){return n===null}function nv(n){return n===void 0}function iv(n){return n&&n.isAccessorNode===!0&&n.constructor.prototype.isNode===!0||!1}function rv(n){return n&&n.isArrayNode===!0&&n.constructor.prototype.isNode===!0||!1}function sv(n){return n&&n.isAssignmentNode===!0&&n.constructor.prototype.isNode===!0||!1}function av(n){return n&&n.isBlockNode===!0&&n.constructor.prototype.isNode===!0||!1}function ov(n){return n&&n.isConditionalNode===!0&&n.constructor.prototype.isNode===!0||!1}function uv(n){return n&&n.isConstantNode===!0&&n.constructor.prototype.isNode===!0||!1}function lv(n){return n&&n.isFunctionAssignmentNode===!0&&n.constructor.prototype.isNode===!0||!1}function cv(n){return n&&n.isFunctionNode===!0&&n.constructor.prototype.isNode===!0||!1}function hv(n){return n&&n.isIndexNode===!0&&n.constructor.prototype.isNode===!0||!1}function fv(n){return n&&n.isNode===!0&&n.constructor.prototype.isNode===!0||!1}function dv(n){return n&&n.isObjectNode===!0&&n.constructor.prototype.isNode===!0||!1}function pv(n){return n&&n.isOperatorNode===!0&&n.constructor.prototype.isNode===!0||!1}function mv(n){return n&&n.isParenthesisNode===!0&&n.constructor.prototype.isNode===!0||!1}function gv(n){return n&&n.isRangeNode===!0&&n.constructor.prototype.isNode===!0||!1}function vv(n){return n&&n.isRelationalNode===!0&&n.constructor.prototype.isNode===!0||!1}function _v(n){return n&&n.isSymbolNode===!0&&n.constructor.prototype.isNode===!0||!1}function xv(n){return n&&n.constructor.prototype.isChain===!0||!1}function Zn(n){var e=typeof n;return e==="object"?n===null?"null":yt(n)?"BigNumber":n.constructor&&n.constructor.name?n.constructor.name:"Object":e}function Et(n){var e=typeof n;if(e==="number"||e==="bigint"||e==="string"||e==="boolean"||n===null||n===void 0)return n;if(typeof n.clone=="function")return n.clone();if(Array.isArray(n))return n.map(function(t){return Et(t)});if(n instanceof Date)return new Date(n.valueOf());if(yt(n))return n;if(tu(n))return Ev(n,Et);if(e==="function")return n;throw new TypeError("Cannot clone: unknown type of value (value: ".concat(n,")"))}function Ev(n,e){var t={};for(var i in n)Ir(n,i)&&(t[i]=e(n[i]));return t}function yv(n,e){for(var t in e)Ir(e,t)&&(n[t]=e[t]);return n}function fi(n,e){var t,i,r;if(Array.isArray(n)){if(!Array.isArray(e)||n.length!==e.length)return!1;for(i=0,r=n.length;i<r;i++)if(!fi(n[i],e[i]))return!1;return!0}else{if(typeof n=="function")return n===e;if(n instanceof Object){if(Array.isArray(e)||!(e instanceof Object))return!1;for(t in n)if(!(t in e)||!fi(n[t],e[t]))return!1;for(t in e)if(!(t in n))return!1;return!0}else return n===e}}function Ir(n,e){return n&&Object.hasOwnProperty.call(n,e)}function Mv(n,e){for(var t={},i=0;i<e.length;i++){var r=e[i],s=n[r];s!==void 0&&(t[r]=s)}return t}var Dv=["Matrix","Array"],Sv=["number","BigNumber","Fraction"],xr=function(e){if(e)throw new Error(`The global config is readonly. 
Please create a mathjs instance if you want to change the default configuration. 
Example:

  import { create, all } from 'mathjs';
  const mathjs = create(all);
  mathjs.config({ number: 'BigNumber' });
`);return Object.freeze(Mc)};Gl(xr,Mc,{MATRIX_OPTIONS:Dv,NUMBER_OPTIONS:Sv});function ul(){return!0}function hn(){return!1}function ji(){}const ll="Argument is not a typed-function.";function bc(){function n(S){return typeof S=="object"&&S!==null&&S.constructor===Object}const e=[{name:"number",test:function(S){return typeof S=="number"}},{name:"string",test:function(S){return typeof S=="string"}},{name:"boolean",test:function(S){return typeof S=="boolean"}},{name:"Function",test:function(S){return typeof S=="function"}},{name:"Array",test:Array.isArray},{name:"Date",test:function(S){return S instanceof Date}},{name:"RegExp",test:function(S){return S instanceof RegExp}},{name:"Object",test:n},{name:"null",test:function(S){return S===null}},{name:"undefined",test:function(S){return S===void 0}}],t={name:"any",test:ul,isAny:!0};let i,r,s=0,a={createCount:0};function o(S){const R=i.get(S);if(R)return R;let I='Unknown type "'+S+'"';const N=S.toLowerCase();let Y;for(Y of r)if(Y.toLowerCase()===N){I+='. Did you mean "'+Y+'" ?';break}throw new TypeError(I)}function u(S){let R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"any";const I=R?o(R).index:r.length,N=[];for(let W=0;W<S.length;++W){if(!S[W]||typeof S[W].name!="string"||typeof S[W].test!="function")throw new TypeError("Object with properties {name: string, test: function} expected");const j=S[W].name;if(i.has(j))throw new TypeError('Duplicate type name "'+j+'"');N.push(j),i.set(j,{name:j,test:S[W].test,isAny:S[W].isAny,index:I+W,conversionsTo:[]})}const Y=r.slice(I);r=r.slice(0,I).concat(N).concat(Y);for(let W=I+N.length;W<r.length;++W)i.get(r[W]).index=W}function c(){i=new Map,r=[],s=0,u([t],!1)}c(),u(e);function l(){let S;for(S of r)i.get(S).conversionsTo=[];s=0}function h(S){const R=r.filter(I=>{const N=i.get(I);return!N.isAny&&N.test(S)});return R.length?R:["any"]}function f(S){return S&&typeof S=="function"&&"_typedFunctionData"in S}function m(S,R,I){if(!f(S))throw new TypeError(ll);const N=I&&I.exact,Y=Array.isArray(R)?R.join(","):R,W=M(Y),j=g(W);if(!N||j in S.signatures){const me=S._typedFunctionData.signatureMap.get(j);if(me)return me}const re=W.length;let q;if(N){q=[];let me;for(me in S.signatures)q.push(S._typedFunctionData.signatureMap.get(me))}else q=S._typedFunctionData.signatures;for(let me=0;me<re;++me){const Ee=W[me],fe=[];let Ve;for(Ve of q){const Re=T(Ve.params,me);if(!(!Re||Ee.restParam&&!Re.restParam)){if(!Re.hasAny){const je=_(Re);if(Ee.types.some(O=>!je.has(O.name)))continue}fe.push(Ve)}}if(q=fe,q.length===0)break}let Z;for(Z of q)if(Z.params.length<=re)return Z;throw new TypeError("Signature not found (signature: "+(S.name||"unnamed")+"("+g(W,", ")+"))")}function v(S,R,I){return m(S,R,I).implementation}function d(S,R){const I=o(R);if(I.test(S))return S;const N=I.conversionsTo;if(N.length===0)throw new Error("There are no conversions to "+R+" defined.");for(let Y=0;Y<N.length;Y++)if(o(N[Y].from).test(S))return N[Y].convert(S);throw new Error("Cannot convert "+S+" to "+R)}function g(S){let R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:",";return S.map(I=>I.name).join(R)}function p(S){const R=S.indexOf("...")===0,N=(R?S.length>3?S.slice(3):"any":S).split("|").map(re=>o(re.trim()));let Y=!1,W=R?"...":"";return{types:N.map(function(re){return Y=re.isAny||Y,W+=re.name+"|",{name:re.name,typeIndex:re.index,test:re.test,isAny:re.isAny,conversion:null,conversionIndex:-1}}),name:W.slice(0,-1),hasAny:Y,hasConversion:!1,restParam:R}}function A(S){const R=S.types.map(j=>j.name),I=J(R);let N=S.hasAny,Y=S.name;const W=I.map(function(j){const re=o(j.from);return N=re.isAny||N,Y+="|"+j.from,{name:j.from,typeIndex:re.index,test:re.test,isAny:re.isAny,conversion:j,conversionIndex:j.index}});return{types:S.types.concat(W),name:Y,hasAny:N,hasConversion:W.length>0,restParam:S.restParam}}function _(S){return S.typeSet||(S.typeSet=new Set,S.types.forEach(R=>S.typeSet.add(R.name))),S.typeSet}function M(S){const R=[];if(typeof S!="string")throw new TypeError("Signatures must be strings");const I=S.trim();if(I==="")return R;const N=I.split(",");for(let Y=0;Y<N.length;++Y){const W=p(N[Y].trim());if(W.restParam&&Y!==N.length-1)throw new SyntaxError('Unexpected rest parameter "'+N[Y]+'": only allowed for the last parameter');if(W.types.length===0)return null;R.push(W)}return R}function D(S){const R=xe(S);return R?R.restParam:!1}function E(S){if(!S||S.types.length===0)return ul;if(S.types.length===1)return o(S.types[0].name).test;if(S.types.length===2){const R=o(S.types[0].name).test,I=o(S.types[1].name).test;return function(Y){return R(Y)||I(Y)}}else{const R=S.types.map(function(I){return o(I.name).test});return function(N){for(let Y=0;Y<R.length;Y++)if(R[Y](N))return!0;return!1}}}function w(S){let R,I,N;if(D(S)){R=be(S).map(E);const Y=R.length,W=E(xe(S)),j=function(re){for(let q=Y;q<re.length;q++)if(!W(re[q]))return!1;return!0};return function(q){for(let Z=0;Z<R.length;Z++)if(!R[Z](q[Z]))return!1;return j(q)&&q.length>=Y+1}}else return S.length===0?function(W){return W.length===0}:S.length===1?(I=E(S[0]),function(W){return I(W[0])&&W.length===1}):S.length===2?(I=E(S[0]),N=E(S[1]),function(W){return I(W[0])&&N(W[1])&&W.length===2}):(R=S.map(E),function(W){for(let j=0;j<R.length;j++)if(!R[j](W[j]))return!1;return W.length===R.length})}function T(S,R){return R<S.length?S[R]:D(S)?xe(S):null}function x(S,R){const I=T(S,R);return I?_(I):new Set}function y(S){return S.conversion===null||S.conversion===void 0}function F(S,R){const I=new Set;return S.forEach(N=>{const Y=x(N.params,R);let W;for(W of Y)I.add(W)}),I.has("any")?["any"]:Array.from(I)}function H(S,R,I){let N,Y;const W=S||"unnamed";let j=I,re;for(re=0;re<R.length;re++){const Ee=[];if(j.forEach(fe=>{const Ve=T(fe.params,re),Re=E(Ve);(re<fe.params.length||D(fe.params))&&Re(R[re])&&Ee.push(fe)}),Ee.length===0){if(Y=F(j,re),Y.length>0){const fe=h(R[re]);return N=new TypeError("Unexpected type of argument in function "+W+" (expected: "+Y.join(" or ")+", actual: "+fe.join(" | ")+", index: "+re+")"),N.data={category:"wrongType",fn:W,index:re,actual:fe,expected:Y},N}}else j=Ee}const q=j.map(function(Ee){return D(Ee.params)?1/0:Ee.params.length});if(R.length<Math.min.apply(null,q))return Y=F(j,re),N=new TypeError("Too few arguments in function "+W+" (expected: "+Y.join(" or ")+", index: "+R.length+")"),N.data={category:"tooFewArgs",fn:W,index:R.length,expected:Y},N;const Z=Math.max.apply(null,q);if(R.length>Z)return N=new TypeError("Too many arguments in function "+W+" (expected: "+Z+", actual: "+R.length+")"),N.data={category:"tooManyArgs",fn:W,index:R.length,expectedLength:Z},N;const me=[];for(let Ee=0;Ee<R.length;++Ee)me.push(h(R[Ee]).join("|"));return N=new TypeError('Arguments of type "'+me.join(", ")+'" do not match any of the defined signatures of function '+W+"."),N.data={category:"mismatch",actual:me},N}function B(S){let R=r.length+1;for(let I=0;I<S.types.length;I++)y(S.types[I])&&(R=Math.min(R,S.types[I].typeIndex));return R}function z(S){let R=s+1;for(let I=0;I<S.types.length;I++)y(S.types[I])||(R=Math.min(R,S.types[I].conversionIndex));return R}function $(S,R){if(S.hasAny){if(!R.hasAny)return 1}else if(R.hasAny)return-1;if(S.restParam){if(!R.restParam)return 1}else if(R.restParam)return-1;if(S.hasConversion){if(!R.hasConversion)return 1}else if(R.hasConversion)return-1;const I=B(S)-B(R);if(I<0)return-1;if(I>0)return 1;const N=z(S)-z(R);return N<0?-1:N>0?1:0}function U(S,R){const I=S.params,N=R.params,Y=xe(I),W=xe(N),j=D(I),re=D(N);if(j&&Y.hasAny){if(!re||!W.hasAny)return 1}else if(re&&W.hasAny)return-1;let q=0,Z=0,me;for(me of I)me.hasAny&&++q,me.hasConversion&&++Z;let Ee=0,fe=0;for(me of N)me.hasAny&&++Ee,me.hasConversion&&++fe;if(q!==Ee)return q-Ee;if(j&&Y.hasConversion){if(!re||!W.hasConversion)return 1}else if(re&&W.hasConversion)return-1;if(Z!==fe)return Z-fe;if(j){if(!re)return 1}else if(re)return-1;const Ve=(I.length-N.length)*(j?-1:1);if(Ve!==0)return Ve;const Re=[];let je=0;for(let pe=0;pe<I.length;++pe){const te=$(I[pe],N[pe]);Re.push(te),je+=te}if(je!==0)return je;let O;for(O of Re)if(O!==0)return O;return 0}function J(S){if(S.length===0)return[];const R=S.map(o);S.length>1&&R.sort((Y,W)=>Y.index-W.index);let I=R[0].conversionsTo;if(S.length===1)return I;I=I.concat([]);const N=new Set(S);for(let Y=1;Y<R.length;++Y){let W;for(W of R[Y].conversionsTo)N.has(W.from)||(I.push(W),N.add(W.from))}return I}function G(S,R){let I=R;if(S.some(Y=>Y.hasConversion)){const Y=D(S),W=S.map(ne);I=function(){const re=[],q=Y?arguments.length-1:arguments.length;for(let Z=0;Z<q;Z++)re[Z]=W[Z](arguments[Z]);return Y&&(re[q]=arguments[q].map(W[q])),R.apply(this,re)}}let N=I;if(D(S)){const Y=S.length-1;N=function(){return I.apply(this,Ae(arguments,0,Y).concat([Ae(arguments,Y)]))}}return N}function ne(S){let R,I,N,Y;const W=[],j=[];switch(S.types.forEach(function(re){re.conversion&&(W.push(o(re.conversion.from).test),j.push(re.conversion.convert))}),j.length){case 0:return function(q){return q};case 1:return R=W[0],N=j[0],function(q){return R(q)?N(q):q};case 2:return R=W[0],I=W[1],N=j[0],Y=j[1],function(q){return R(q)?N(q):I(q)?Y(q):q};default:return function(q){for(let Z=0;Z<j.length;Z++)if(W[Z](q))return j[Z](q);return q}}}function se(S){function R(I,N,Y){if(N<I.length){const W=I[N];let j=[];if(W.restParam){const re=W.types.filter(y);re.length<W.types.length&&j.push({types:re,name:"..."+re.map(q=>q.name).join("|"),hasAny:re.some(q=>q.isAny),hasConversion:!1,restParam:!0}),j.push(W)}else j=W.types.map(function(re){return{types:[re],name:re.name,hasAny:re.isAny,hasConversion:re.conversion,restParam:!1}});return Ue(j,function(re){return R(I,N+1,Y.concat([re]))})}else return[Y]}return R(S,0,[])}function he(S,R){const I=Math.max(S.length,R.length);for(let re=0;re<I;re++){const q=x(S,re),Z=x(R,re);let me=!1,Ee;for(Ee of Z)if(q.has(Ee)){me=!0;break}if(!me)return!1}const N=S.length,Y=R.length,W=D(S),j=D(R);return W?j?N===Y:Y>=N:j?N>=Y:N===Y}function Se(S){return S.map(R=>Xe(R)?pt(R.referToSelf.callback):We(R)?L(R.referTo.references,R.referTo.callback):R)}function Ce(S,R,I){const N=[];let Y;for(Y of S){let W=I[Y];if(typeof W!="number")throw new TypeError('No definition for referenced signature "'+Y+'"');if(W=R[W],typeof W!="function")return!1;N.push(W)}return N}function ee(S,R,I){const N=Se(S),Y=new Array(N.length).fill(!1);let W=!0;for(;W;){W=!1;let j=!0;for(let re=0;re<N.length;++re){if(Y[re])continue;const q=N[re];if(Xe(q))N[re]=q.referToSelf.callback(I),N[re].referToSelf=q.referToSelf,Y[re]=!0,j=!1;else if(We(q)){const Z=Ce(q.referTo.references,N,R);Z?(N[re]=q.referTo.callback.apply(this,Z),N[re].referTo=q.referTo,Y[re]=!0,j=!1):W=!0}}if(j&&W)throw new SyntaxError("Circular reference detected in resolving typed.referTo")}return N}function ue(S){const R=/\bthis(\(|\.signatures\b)/;Object.keys(S).forEach(I=>{const N=S[I];if(R.test(N.toString()))throw new SyntaxError("Using `this` to self-reference a function is deprecated since typed-function@3. Use typed.referTo and typed.referToSelf instead.")})}function de(S,R){if(a.createCount++,Object.keys(R).length===0)throw new SyntaxError("No signatures provided");a.warnAgainstDeprecatedThis&&ue(R);const I=[],N=[],Y={},W=[];let j;for(j in R){if(!Object.prototype.hasOwnProperty.call(R,j))continue;const X=M(j);if(!X)continue;I.forEach(function(De){if(he(De,X))throw new TypeError('Conflicting signatures "'+g(De)+'" and "'+g(X)+'".')}),I.push(X);const V=N.length;N.push(R[j]);const ce=X.map(A);let ge;for(ge of se(ce)){const De=g(ge);W.push({params:ge,name:De,fn:V}),ge.every(we=>!we.hasConversion)&&(Y[De]=V)}}W.sort(U);const re=ee(N,Y,K);let q;for(q in Y)Object.prototype.hasOwnProperty.call(Y,q)&&(Y[q]=re[Y[q]]);const Z=[],me=new Map;for(q of W)me.has(q.name)||(q.fn=re[q.fn],Z.push(q),me.set(q.name,q));const Ee=Z[0]&&Z[0].params.length<=2&&!D(Z[0].params),fe=Z[1]&&Z[1].params.length<=2&&!D(Z[1].params),Ve=Z[2]&&Z[2].params.length<=2&&!D(Z[2].params),Re=Z[3]&&Z[3].params.length<=2&&!D(Z[3].params),je=Z[4]&&Z[4].params.length<=2&&!D(Z[4].params),O=Z[5]&&Z[5].params.length<=2&&!D(Z[5].params),pe=Ee&&fe&&Ve&&Re&&je&&O;for(let X=0;X<Z.length;++X)Z[X].test=w(Z[X].params);const te=Ee?E(Z[0].params[0]):hn,ae=fe?E(Z[1].params[0]):hn,Me=Ve?E(Z[2].params[0]):hn,ye=Re?E(Z[3].params[0]):hn,qe=je?E(Z[4].params[0]):hn,gt=O?E(Z[5].params[0]):hn,Nt=Ee?E(Z[0].params[1]):hn,st=fe?E(Z[1].params[1]):hn,tn=Ve?E(Z[2].params[1]):hn,xn=Re?E(Z[3].params[1]):hn,kr=je?E(Z[4].params[1]):hn,Wr=O?E(Z[5].params[1]):hn;for(let X=0;X<Z.length;++X)Z[X].implementation=G(Z[X].params,Z[X].fn);const Un=Ee?Z[0].implementation:ji,yr=fe?Z[1].implementation:ji,Xr=Ve?Z[2].implementation:ji,$r=Re?Z[3].implementation:ji,Li=je?Z[4].implementation:ji,qr=O?Z[5].implementation:ji,Ui=Ee?Z[0].params.length:-1,Yr=fe?Z[1].params.length:-1,Zr=Ve?Z[2].params.length:-1,ea=Re?Z[3].params.length:-1,ta=je?Z[4].params.length:-1,na=O?Z[5].params.length:-1,ia=pe?6:0,ra=Z.length,sa=Z.map(X=>X.test),C=Z.map(X=>X.implementation),k=function(){for(let V=ia;V<ra;V++)if(sa[V](arguments))return C[V].apply(this,arguments);return a.onMismatch(S,arguments,Z)};function K(X,V){return arguments.length===Ui&&te(X)&&Nt(V)?Un.apply(this,arguments):arguments.length===Yr&&ae(X)&&st(V)?yr.apply(this,arguments):arguments.length===Zr&&Me(X)&&tn(V)?Xr.apply(this,arguments):arguments.length===ea&&ye(X)&&xn(V)?$r.apply(this,arguments):arguments.length===ta&&qe(X)&&kr(V)?Li.apply(this,arguments):arguments.length===na&&gt(X)&&Wr(V)?qr.apply(this,arguments):k.apply(this,arguments)}try{Object.defineProperty(K,"name",{value:S})}catch{}return K.signatures=Y,K._typedFunctionData={signatures:Z,signatureMap:me},K}function le(S,R,I){throw H(S,R,I)}function be(S){return Ae(S,0,S.length-1)}function xe(S){return S[S.length-1]}function Ae(S,R,I){return Array.prototype.slice.call(S,R,I)}function Qe(S,R){for(let I=0;I<S.length;I++)if(R(S[I]))return S[I]}function Ue(S,R){return Array.prototype.concat.apply([],S.map(R))}function He(){const S=be(arguments).map(I=>g(M(I))),R=xe(arguments);if(typeof R!="function")throw new TypeError("Callback function expected as last argument");return L(S,R)}function L(S,R){return{referTo:{references:S,callback:R}}}function pt(S){if(typeof S!="function")throw new TypeError("Callback function expected as first argument");return{referToSelf:{callback:S}}}function We(S){return S&&typeof S.referTo=="object"&&Array.isArray(S.referTo.references)&&typeof S.referTo.callback=="function"}function Xe(S){return S&&typeof S.referToSelf=="object"&&typeof S.referToSelf.callback=="function"}function Te(S,R){if(!S)return R;if(R&&R!==S){const I=new Error("Function names do not match (expected: "+S+", actual: "+R+")");throw I.data={actual:R,expected:S},I}return S}function nt(S){let R;for(const I in S)Object.prototype.hasOwnProperty.call(S,I)&&(f(S[I])||typeof S[I].signature=="string")&&(R=Te(R,S[I].name));return R}function Fe(S,R){let I;for(I in R)if(Object.prototype.hasOwnProperty.call(R,I)){if(I in S&&R[I]!==S[I]){const N=new Error('Signature "'+I+'" is defined twice');throw N.data={signature:I,sourceFunction:R[I],destFunction:S[I]},N}S[I]=R[I]}}const P=a;a=function(S){const R=typeof S=="string",I=R?1:0;let N=R?S:"";const Y={};for(let W=I;W<arguments.length;++W){const j=arguments[W];let re={},q;if(typeof j=="function"?(q=j.name,typeof j.signature=="string"?re[j.signature]=j:f(j)&&(re=j.signatures)):n(j)&&(re=j,R||(q=nt(j))),Object.keys(re).length===0){const Z=new TypeError("Argument to 'typed' at index "+W+" is not a (typed) function, nor an object with signatures as keys and functions as values.");throw Z.data={index:W,argument:j},Z}R||(N=Te(N,q)),Fe(Y,re)}return de(N||"",Y)},a.create=bc,a.createCount=P.createCount,a.onMismatch=le,a.throwMismatchError=le,a.createError=H,a.clear=c,a.clearConversions=l,a.addTypes=u,a._findType=o,a.referTo=He,a.referToSelf=pt,a.convert=d,a.findSignature=m,a.find=v,a.isTypedFunction=f,a.warnAgainstDeprecatedThis=!0,a.addType=function(S,R){let I="any";R!==!1&&i.has("Object")&&(I="Object"),a.addTypes([S],I)};function b(S){if(!S||typeof S.from!="string"||typeof S.to!="string"||typeof S.convert!="function")throw new TypeError("Object with properties {from: string, to: string, convert: function} expected");if(S.to===S.from)throw new SyntaxError('Illegal to define conversion from "'+S.from+'" to itself.')}return a.addConversion=function(S){let R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{override:!1};b(S);const I=o(S.to),N=I.conversionsTo.find(Y=>Y.from===S.from);if(N)if(R&&R.override)a.removeConversion({from:N.from,to:S.to,convert:N.convert});else throw new Error('There is already a conversion from "'+S.from+'" to "'+I.name+'"');I.conversionsTo.push({from:S.from,convert:S.convert,index:s++})},a.addConversions=function(S,R){S.forEach(I=>a.addConversion(I,R))},a.removeConversion=function(S){b(S);const R=o(S.to),I=Qe(R.conversionsTo,Y=>Y.from===S.from);if(!I)throw new Error("Attempt to remove nonexistent conversion from "+S.from+" to "+S.to);if(I.convert!==S.convert)throw new Error("Conversion to remove does not match existing conversion");const N=R.conversionsTo.indexOf(I);R.conversionsTo.splice(N,1)},a.resolve=function(S,R){if(!f(S))throw new TypeError(ll);const I=S._typedFunctionData.signatures;for(let N=0;N<I.length;++N)if(I[N].test(R))return I[N];return null},a}const Ls=bc();function Je(n,e,t,i){function r(s){var a=Mv(s,e.map(bv));return Av(n,e,s),t(a)}return r.isFactory=!0,r.fn=n,r.dependencies=e.slice().sort(),i&&(r.meta=i),r}function Av(n,e,t){var i=e.filter(s=>!wv(s)).every(s=>t[s]!==void 0);if(!i){var r=e.filter(s=>t[s]===void 0);throw new Error('Cannot create function "'.concat(n,'", ')+"some dependencies are missing: ".concat(r.map(s=>'"'.concat(s,'"')).join(", "),"."))}}function wv(n){return n&&n[0]==="?"}function bv(n){return n&&n[0]==="?"?n.slice(1):n}function St(n){return typeof n=="boolean"?!0:isFinite(n)?n===Math.round(n):!1}function Oa(n,e,t){var i={2:"0b",8:"0o",16:"0x"},r=i[e],s="";if(t){if(t<1)throw new Error("size must be in greater than 0");if(!St(t))throw new Error("size must be an integer");if(n>2**(t-1)-1||n<-(2**(t-1)))throw new Error("Value must be in range [-2^".concat(t-1,", 2^").concat(t-1,"-1]"));if(!St(n))throw new Error("Value must be an integer");n<0&&(n=n+2**t),s="i".concat(t)}var a="";return n<0&&(n=-n,a="-"),"".concat(a).concat(r).concat(n.toString(e)).concat(s)}function Ro(n,e){if(typeof e=="function")return e(n);if(n===1/0)return"Infinity";if(n===-1/0)return"-Infinity";if(isNaN(n))return"NaN";var{notation:t,precision:i,wordSize:r}=Tc(e);switch(t){case"fixed":return Cv(n,i);case"exponential":return Cc(n,i);case"engineering":return Tv(n,i);case"bin":return Oa(n,2,r);case"oct":return Oa(n,8,r);case"hex":return Oa(n,16,r);case"auto":return Fv(n,i,e).replace(/((\.\d*?)(0+))($|e)/,function(){var s=arguments[2],a=arguments[4];return s!=="."?s+a:a});default:throw new Error('Unknown notation "'+t+'". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.')}}function Tc(n){var e="auto",t,i;if(n!==void 0)if(dt(n))t=n;else if(yt(n))t=n.toNumber();else if(tu(n))n.precision!==void 0&&(t=cl(n.precision,()=>{throw new Error('Option "precision" must be a number or BigNumber')})),n.wordSize!==void 0&&(i=cl(n.wordSize,()=>{throw new Error('Option "wordSize" must be a number or BigNumber')})),n.notation&&(e=n.notation);else throw new Error("Unsupported type of options, number, BigNumber, or object expected");return{notation:e,precision:t,wordSize:i}}function qs(n){var e=String(n).toLowerCase().match(/^(-?)(\d+\.?\d*)(e([+-]?\d+))?$/);if(!e)throw new SyntaxError("Invalid number "+n);var t=e[1],i=e[2],r=parseFloat(e[4]||"0"),s=i.indexOf(".");r+=s!==-1?s-1:i.length-1;var a=i.replace(".","").replace(/^0*/,function(o){return r-=o.length,""}).replace(/0*$/,"").split("").map(function(o){return parseInt(o)});return a.length===0&&(a.push(0),r++),{sign:t,coefficients:a,exponent:r}}function Tv(n,e){if(isNaN(n)||!isFinite(n))return String(n);var t=qs(n),i=Ys(t,e),r=i.exponent,s=i.coefficients,a=r%3===0?r:r<0?r-3-r%3:r-r%3;if(dt(e))for(;e>s.length||r-a+1>s.length;)s.push(0);else for(var o=Math.abs(r-a)-(s.length-1),u=0;u<o;u++)s.push(0);for(var c=Math.abs(r-a),l=1;c>0;)l++,c--;var h=s.slice(l).join(""),f=dt(e)&&h.length||h.match(/[1-9]/)?"."+h:"",m=s.slice(0,l).join("")+f+"e"+(r>=0?"+":"")+a.toString();return i.sign+m}function Cv(n,e){if(isNaN(n)||!isFinite(n))return String(n);var t=qs(n),i=typeof e=="number"?Ys(t,t.exponent+1+e):t,r=i.coefficients,s=i.exponent+1,a=s+(e||0);return r.length<a&&(r=r.concat(ar(a-r.length))),s<0&&(r=ar(-s+1).concat(r),s=1),s<r.length&&r.splice(s,0,s===0?"0.":"."),i.sign+r.join("")}function Cc(n,e){if(isNaN(n)||!isFinite(n))return String(n);var t=qs(n),i=e?Ys(t,e):t,r=i.coefficients,s=i.exponent;r.length<e&&(r=r.concat(ar(e-r.length)));var a=r.shift();return i.sign+a+(r.length>0?"."+r.join(""):"")+"e"+(s>=0?"+":"")+s}function Fv(n,e,t){if(isNaN(n)||!isFinite(n))return String(n);var i=hl(t==null?void 0:t.lowerExp,-3),r=hl(t==null?void 0:t.upperExp,5),s=qs(n),a=e?Ys(s,e):s;if(a.exponent<i||a.exponent>=r)return Cc(n,e);var o=a.coefficients,u=a.exponent;o.length<e&&(o=o.concat(ar(e-o.length))),o=o.concat(ar(u-o.length+1+(o.length<e?e-o.length:0))),o=ar(-u).concat(o);var c=u>0?u:0;return c<o.length-1&&o.splice(c+1,0,"."),a.sign+o.join("")}function Ys(n,e){for(var t={sign:n.sign,coefficients:n.coefficients,exponent:n.exponent},i=t.coefficients;e<=0;)i.unshift(0),t.exponent++,e++;if(i.length>e){var r=i.splice(e,i.length-e);if(r[0]>=5){var s=e-1;for(i[s]++;i[s]===10;)i.pop(),s===0&&(i.unshift(0),t.exponent++,s++),s--,i[s]++}}return t}function ar(n){for(var e=[],t=0;t<n;t++)e.push(0);return e}function Rv(n){return n.toExponential().replace(/e.*$/,"").replace(/^0\.?0*|\./,"").length}function Nr(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1e-8,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;if(t<=0)throw new Error("Relative tolerance must be greater than 0");if(i<0)throw new Error("Absolute tolerance must be at least 0");return isNaN(n)||isNaN(e)?!1:!isFinite(n)||!isFinite(e)?n===e:n===e?!0:Math.abs(n-e)<=Math.max(t*Math.max(Math.abs(n),Math.abs(e)),i)}function cl(n,e){if(dt(n))return n;if(yt(n))return n.toNumber();e()}function hl(n,e){return dt(n)?n:yt(n)?n.toNumber():e}var Fc=function(){return Fc=Ls.create,Ls},Pv=["?BigNumber","?Complex","?DenseMatrix","?Fraction"],Iv=Je("typed",Pv,function(e){var{BigNumber:t,Complex:i,DenseMatrix:r,Fraction:s}=e,a=Fc();return a.clear(),a.addTypes([{name:"number",test:dt},{name:"Complex",test:Dc},{name:"BigNumber",test:yt},{name:"bigint",test:Xg},{name:"Fraction",test:Sc},{name:"Unit",test:Ac},{name:"identifier",test:o=>/^(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CD\uA7D0\uA7D1\uA7D3\uA7D5-\uA7DC\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDD4A-\uDD65\uDD6F-\uDD85\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC4\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDFC0-\uDFE0]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDDD0-\uDDED\uDDF0\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CD\uA7D0\uA7D1\uA7D3\uA7D5-\uA7DC\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDD4A-\uDD65\uDD6F-\uDD85\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC4\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDFC0-\uDFE0]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDDD0-\uDDED\uDDF0\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])*$/.test(o)},{name:"string",test:Cn},{name:"Chain",test:xv},{name:"Array",test:mt},{name:"Matrix",test:Tt},{name:"DenseMatrix",test:$g},{name:"SparseMatrix",test:qg},{name:"Range",test:wc},{name:"Index",test:eu},{name:"boolean",test:Yg},{name:"ResultSet",test:Zg},{name:"Help",test:Kg},{name:"function",test:Jg},{name:"Date",test:jg},{name:"RegExp",test:Qg},{name:"null",test:tv},{name:"undefined",test:nv},{name:"AccessorNode",test:iv},{name:"ArrayNode",test:rv},{name:"AssignmentNode",test:sv},{name:"BlockNode",test:av},{name:"ConditionalNode",test:ov},{name:"ConstantNode",test:uv},{name:"FunctionNode",test:cv},{name:"FunctionAssignmentNode",test:lv},{name:"IndexNode",test:hv},{name:"Node",test:fv},{name:"ObjectNode",test:dv},{name:"OperatorNode",test:pv},{name:"ParenthesisNode",test:mv},{name:"RangeNode",test:gv},{name:"RelationalNode",test:vv},{name:"SymbolNode",test:_v},{name:"Map",test:ev},{name:"Object",test:tu}]),a.addConversions([{from:"number",to:"BigNumber",convert:function(u){if(t||_s(u),Rv(u)>15)throw new TypeError("Cannot implicitly convert a number with >15 significant digits to BigNumber (value: "+u+"). Use function bignumber(x) to convert to BigNumber.");return new t(u)}},{from:"number",to:"Complex",convert:function(u){return i||xs(u),new i(u,0)}},{from:"BigNumber",to:"Complex",convert:function(u){return i||xs(u),new i(u.toNumber(),0)}},{from:"bigint",to:"number",convert:function(u){if(u>Number.MAX_SAFE_INTEGER)throw new TypeError("Cannot implicitly convert bigint to number: value exceeds the max safe integer value (value: "+u+")");return Number(u)}},{from:"bigint",to:"BigNumber",convert:function(u){return t||_s(u),new t(u.toString())}},{from:"bigint",to:"Fraction",convert:function(u){return s||Es(u),new s(u)}},{from:"Fraction",to:"BigNumber",convert:function(u){throw new TypeError("Cannot implicitly convert a Fraction to BigNumber or vice versa. Use function bignumber(x) to convert to BigNumber or fraction(x) to convert to Fraction.")}},{from:"Fraction",to:"Complex",convert:function(u){return i||xs(u),new i(u.valueOf(),0)}},{from:"number",to:"Fraction",convert:function(u){s||Es(u);var c=new s(u);if(c.valueOf()!==u)throw new TypeError("Cannot implicitly convert a number to a Fraction when there will be a loss of precision (value: "+u+"). Use function fraction(x) to convert to Fraction.");return c}},{from:"string",to:"number",convert:function(u){var c=Number(u);if(isNaN(c))throw new Error('Cannot convert "'+u+'" to a number');return c}},{from:"string",to:"BigNumber",convert:function(u){t||_s(u);try{return new t(u)}catch{throw new Error('Cannot convert "'+u+'" to BigNumber')}}},{from:"string",to:"bigint",convert:function(u){try{return BigInt(u)}catch{throw new Error('Cannot convert "'+u+'" to BigInt')}}},{from:"string",to:"Fraction",convert:function(u){s||Es(u);try{return new s(u)}catch{throw new Error('Cannot convert "'+u+'" to Fraction')}}},{from:"string",to:"Complex",convert:function(u){i||xs(u);try{return new i(u)}catch{throw new Error('Cannot convert "'+u+'" to Complex')}}},{from:"boolean",to:"number",convert:function(u){return+u}},{from:"boolean",to:"BigNumber",convert:function(u){return t||_s(u),new t(+u)}},{from:"boolean",to:"bigint",convert:function(u){return BigInt(+u)}},{from:"boolean",to:"Fraction",convert:function(u){return s||Es(u),new s(+u)}},{from:"boolean",to:"string",convert:function(u){return String(u)}},{from:"Array",to:"Matrix",convert:function(u){return r||Nv(),new r(u)}},{from:"Matrix",to:"Array",convert:function(u){return u.valueOf()}}]),a.onMismatch=(o,u,c)=>{var l=a.createError(o,u,c);if(["wrongType","mismatch"].includes(l.data.category)&&u.length===1&&Ns(u[0])&&c.some(f=>!f.params.includes(","))){var h=new TypeError("Function '".concat(o,"' doesn't apply to matrices. To call it ")+"elementwise on a matrix 'M', try 'map(M, ".concat(o,")'."));throw h.data=l.data,h}throw l},a.onMismatch=(o,u,c)=>{var l=a.createError(o,u,c);if(["wrongType","mismatch"].includes(l.data.category)&&u.length===1&&Ns(u[0])&&c.some(f=>!f.params.includes(","))){var h=new TypeError("Function '".concat(o,"' doesn't apply to matrices. To call it ")+"elementwise on a matrix 'M', try 'map(M, ".concat(o,")'."));throw h.data=l.data,h}throw l},a});function _s(n){throw new Error("Cannot convert value ".concat(n," into a BigNumber: no class 'BigNumber' provided"))}function xs(n){throw new Error("Cannot convert value ".concat(n," into a Complex number: no class 'Complex' provided"))}function Nv(){throw new Error("Cannot convert array into a Matrix: no class 'DenseMatrix' provided")}function Es(n){throw new Error("Cannot convert value ".concat(n," into a Fraction, no class 'Fraction' provided."))}/*!
 *  decimal.js v10.5.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2025 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */var Po=9e15,pi=1e9,Io="0123456789abcdef",Us="2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",Bs="3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",No={precision:20,rounding:4,modulo:1,toExpNeg:-7,toExpPos:21,minE:-9e15,maxE:Po,crypto:!1},Rc,qn,Ge=!0,Zs="[DecimalError] ",di=Zs+"Invalid argument: ",Pc=Zs+"Precision limit exceeded",Ic=Zs+"crypto unavailable",Nc="[object Decimal]",Wt=Math.floor,Ft=Math.pow,Lv=/^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,Uv=/^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,Bv=/^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,Lc=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,wn=1e7,Oe=7,Ov=9007199254740991,zv=Us.length-1,Lo=Bs.length-1,oe={toStringTag:Nc};oe.absoluteValue=oe.abs=function(){var n=new this.constructor(this);return n.s<0&&(n.s=1),Ie(n)};oe.ceil=function(){return Ie(new this.constructor(this),this.e+1,2)};oe.clampedTo=oe.clamp=function(n,e){var t,i=this,r=i.constructor;if(n=new r(n),e=new r(e),!n.s||!e.s)return new r(NaN);if(n.gt(e))throw Error(di+e);return t=i.cmp(n),t<0?n:i.cmp(e)>0?e:new r(i)};oe.comparedTo=oe.cmp=function(n){var e,t,i,r,s=this,a=s.d,o=(n=new s.constructor(n)).d,u=s.s,c=n.s;if(!a||!o)return!u||!c?NaN:u!==c?u:a===o?0:!a^u<0?1:-1;if(!a[0]||!o[0])return a[0]?u:o[0]?-c:0;if(u!==c)return u;if(s.e!==n.e)return s.e>n.e^u<0?1:-1;for(i=a.length,r=o.length,e=0,t=i<r?i:r;e<t;++e)if(a[e]!==o[e])return a[e]>o[e]^u<0?1:-1;return i===r?0:i>r^u<0?1:-1};oe.cosine=oe.cos=function(){var n,e,t=this,i=t.constructor;return t.d?t.d[0]?(n=i.precision,e=i.rounding,i.precision=n+Math.max(t.e,t.sd())+Oe,i.rounding=1,t=Hv(i,Hc(i,t)),i.precision=n,i.rounding=e,Ie(qn==2||qn==3?t.neg():t,n,e,!0)):new i(1):new i(NaN)};oe.cubeRoot=oe.cbrt=function(){var n,e,t,i,r,s,a,o,u,c,l=this,h=l.constructor;if(!l.isFinite()||l.isZero())return new h(l);for(Ge=!1,s=l.s*Ft(l.s*l,1/3),!s||Math.abs(s)==1/0?(t=zt(l.d),n=l.e,(s=(n-t.length+1)%3)&&(t+=s==1||s==-2?"0":"00"),s=Ft(t,1/3),n=Wt((n+1)/3)-(n%3==(n<0?-1:2)),s==1/0?t="5e"+n:(t=s.toExponential(),t=t.slice(0,t.indexOf("e")+1)+n),i=new h(t),i.s=l.s):i=new h(s.toString()),a=(n=h.precision)+3;;)if(o=i,u=o.times(o).times(o),c=u.plus(l),i=ft(c.plus(l).times(o),c.plus(u),a+2,1),zt(o.d).slice(0,a)===(t=zt(i.d)).slice(0,a))if(t=t.slice(a-3,a+1),t=="9999"||!r&&t=="4999"){if(!r&&(Ie(o,n+1,0),o.times(o).times(o).eq(l))){i=o;break}a+=4,r=1}else{(!+t||!+t.slice(1)&&t.charAt(0)=="5")&&(Ie(i,n+1,1),e=!i.times(i).times(i).eq(l));break}return Ge=!0,Ie(i,n,h.rounding,e)};oe.decimalPlaces=oe.dp=function(){var n,e=this.d,t=NaN;if(e){if(n=e.length-1,t=(n-Wt(this.e/Oe))*Oe,n=e[n],n)for(;n%10==0;n/=10)t--;t<0&&(t=0)}return t};oe.dividedBy=oe.div=function(n){return ft(this,new this.constructor(n))};oe.dividedToIntegerBy=oe.divToInt=function(n){var e=this,t=e.constructor;return Ie(ft(e,new t(n),0,1,1),t.precision,t.rounding)};oe.equals=oe.eq=function(n){return this.cmp(n)===0};oe.floor=function(){return Ie(new this.constructor(this),this.e+1,3)};oe.greaterThan=oe.gt=function(n){return this.cmp(n)>0};oe.greaterThanOrEqualTo=oe.gte=function(n){var e=this.cmp(n);return e==1||e===0};oe.hyperbolicCosine=oe.cosh=function(){var n,e,t,i,r,s=this,a=s.constructor,o=new a(1);if(!s.isFinite())return new a(s.s?1/0:NaN);if(s.isZero())return o;t=a.precision,i=a.rounding,a.precision=t+Math.max(s.e,s.sd())+4,a.rounding=1,r=s.d.length,r<32?(n=Math.ceil(r/3),e=(1/Js(4,n)).toString()):(n=16,e="2.3283064365386962890625e-10"),s=mr(a,1,s.times(e),new a(1),!0);for(var u,c=n,l=new a(8);c--;)u=s.times(s),s=o.minus(u.times(l.minus(u.times(l))));return Ie(s,a.precision=t,a.rounding=i,!0)};oe.hyperbolicSine=oe.sinh=function(){var n,e,t,i,r=this,s=r.constructor;if(!r.isFinite()||r.isZero())return new s(r);if(e=s.precision,t=s.rounding,s.precision=e+Math.max(r.e,r.sd())+4,s.rounding=1,i=r.d.length,i<3)r=mr(s,2,r,r,!0);else{n=1.4*Math.sqrt(i),n=n>16?16:n|0,r=r.times(1/Js(5,n)),r=mr(s,2,r,r,!0);for(var a,o=new s(5),u=new s(16),c=new s(20);n--;)a=r.times(r),r=r.times(o.plus(a.times(u.times(a).plus(c))))}return s.precision=e,s.rounding=t,Ie(r,e,t,!0)};oe.hyperbolicTangent=oe.tanh=function(){var n,e,t=this,i=t.constructor;return t.isFinite()?t.isZero()?new i(t):(n=i.precision,e=i.rounding,i.precision=n+7,i.rounding=1,ft(t.sinh(),t.cosh(),i.precision=n,i.rounding=e)):new i(t.s)};oe.inverseCosine=oe.acos=function(){var n=this,e=n.constructor,t=n.abs().cmp(1),i=e.precision,r=e.rounding;return t!==-1?t===0?n.isNeg()?Pn(e,i,r):new e(0):new e(NaN):n.isZero()?Pn(e,i+4,r).times(.5):(e.precision=i+6,e.rounding=1,n=new e(1).minus(n).div(n.plus(1)).sqrt().atan(),e.precision=i,e.rounding=r,n.times(2))};oe.inverseHyperbolicCosine=oe.acosh=function(){var n,e,t=this,i=t.constructor;return t.lte(1)?new i(t.eq(1)?0:NaN):t.isFinite()?(n=i.precision,e=i.rounding,i.precision=n+Math.max(Math.abs(t.e),t.sd())+4,i.rounding=1,Ge=!1,t=t.times(t).minus(1).sqrt().plus(t),Ge=!0,i.precision=n,i.rounding=e,t.ln()):new i(t)};oe.inverseHyperbolicSine=oe.asinh=function(){var n,e,t=this,i=t.constructor;return!t.isFinite()||t.isZero()?new i(t):(n=i.precision,e=i.rounding,i.precision=n+2*Math.max(Math.abs(t.e),t.sd())+6,i.rounding=1,Ge=!1,t=t.times(t).plus(1).sqrt().plus(t),Ge=!0,i.precision=n,i.rounding=e,t.ln())};oe.inverseHyperbolicTangent=oe.atanh=function(){var n,e,t,i,r=this,s=r.constructor;return r.isFinite()?r.e>=0?new s(r.abs().eq(1)?r.s/0:r.isZero()?r:NaN):(n=s.precision,e=s.rounding,i=r.sd(),Math.max(i,n)<2*-r.e-1?Ie(new s(r),n,e,!0):(s.precision=t=i-r.e,r=ft(r.plus(1),new s(1).minus(r),t+n,1),s.precision=n+4,s.rounding=1,r=r.ln(),s.precision=n,s.rounding=e,r.times(.5))):new s(NaN)};oe.inverseSine=oe.asin=function(){var n,e,t,i,r=this,s=r.constructor;return r.isZero()?new s(r):(e=r.abs().cmp(1),t=s.precision,i=s.rounding,e!==-1?e===0?(n=Pn(s,t+4,i).times(.5),n.s=r.s,n):new s(NaN):(s.precision=t+6,s.rounding=1,r=r.div(new s(1).minus(r.times(r)).sqrt().plus(1)).atan(),s.precision=t,s.rounding=i,r.times(2)))};oe.inverseTangent=oe.atan=function(){var n,e,t,i,r,s,a,o,u,c=this,l=c.constructor,h=l.precision,f=l.rounding;if(c.isFinite()){if(c.isZero())return new l(c);if(c.abs().eq(1)&&h+4<=Lo)return a=Pn(l,h+4,f).times(.25),a.s=c.s,a}else{if(!c.s)return new l(NaN);if(h+4<=Lo)return a=Pn(l,h+4,f).times(.5),a.s=c.s,a}for(l.precision=o=h+10,l.rounding=1,t=Math.min(28,o/Oe+2|0),n=t;n;--n)c=c.div(c.times(c).plus(1).sqrt().plus(1));for(Ge=!1,e=Math.ceil(o/Oe),i=1,u=c.times(c),a=new l(c),r=c;n!==-1;)if(r=r.times(u),s=a.minus(r.div(i+=2)),r=r.times(u),a=s.plus(r.div(i+=2)),a.d[e]!==void 0)for(n=e;a.d[n]===s.d[n]&&n--;);return t&&(a=a.times(2<<t-1)),Ge=!0,Ie(a,l.precision=h,l.rounding=f,!0)};oe.isFinite=function(){return!!this.d};oe.isInteger=oe.isInt=function(){return!!this.d&&Wt(this.e/Oe)>this.d.length-2};oe.isNaN=function(){return!this.s};oe.isNegative=oe.isNeg=function(){return this.s<0};oe.isPositive=oe.isPos=function(){return this.s>0};oe.isZero=function(){return!!this.d&&this.d[0]===0};oe.lessThan=oe.lt=function(n){return this.cmp(n)<0};oe.lessThanOrEqualTo=oe.lte=function(n){return this.cmp(n)<1};oe.logarithm=oe.log=function(n){var e,t,i,r,s,a,o,u,c=this,l=c.constructor,h=l.precision,f=l.rounding,m=5;if(n==null)n=new l(10),e=!0;else{if(n=new l(n),t=n.d,n.s<0||!t||!t[0]||n.eq(1))return new l(NaN);e=n.eq(10)}if(t=c.d,c.s<0||!t||!t[0]||c.eq(1))return new l(t&&!t[0]?-1/0:c.s!=1?NaN:t?0:1/0);if(e)if(t.length>1)s=!0;else{for(r=t[0];r%10===0;)r/=10;s=r!==1}if(Ge=!1,o=h+m,a=oi(c,o),i=e?Os(l,o+10):oi(n,o),u=ft(a,i,o,1),Lr(u.d,r=h,f))do if(o+=10,a=oi(c,o),i=e?Os(l,o+10):oi(n,o),u=ft(a,i,o,1),!s){+zt(u.d).slice(r+1,r+15)+1==1e14&&(u=Ie(u,h+1,0));break}while(Lr(u.d,r+=10,f));return Ge=!0,Ie(u,h,f)};oe.minus=oe.sub=function(n){var e,t,i,r,s,a,o,u,c,l,h,f,m=this,v=m.constructor;if(n=new v(n),!m.d||!n.d)return!m.s||!n.s?n=new v(NaN):m.d?n.s=-n.s:n=new v(n.d||m.s!==n.s?m:NaN),n;if(m.s!=n.s)return n.s=-n.s,m.plus(n);if(c=m.d,f=n.d,o=v.precision,u=v.rounding,!c[0]||!f[0]){if(f[0])n.s=-n.s;else if(c[0])n=new v(m);else return new v(u===3?-0:0);return Ge?Ie(n,o,u):n}if(t=Wt(n.e/Oe),l=Wt(m.e/Oe),c=c.slice(),s=l-t,s){for(h=s<0,h?(e=c,s=-s,a=f.length):(e=f,t=l,a=c.length),i=Math.max(Math.ceil(o/Oe),a)+2,s>i&&(s=i,e.length=1),e.reverse(),i=s;i--;)e.push(0);e.reverse()}else{for(i=c.length,a=f.length,h=i<a,h&&(a=i),i=0;i<a;i++)if(c[i]!=f[i]){h=c[i]<f[i];break}s=0}for(h&&(e=c,c=f,f=e,n.s=-n.s),a=c.length,i=f.length-a;i>0;--i)c[a++]=0;for(i=f.length;i>s;){if(c[--i]<f[i]){for(r=i;r&&c[--r]===0;)c[r]=wn-1;--c[r],c[i]+=wn}c[i]-=f[i]}for(;c[--a]===0;)c.pop();for(;c[0]===0;c.shift())--t;return c[0]?(n.d=c,n.e=Ks(c,t),Ge?Ie(n,o,u):n):new v(u===3?-0:0)};oe.modulo=oe.mod=function(n){var e,t=this,i=t.constructor;return n=new i(n),!t.d||!n.s||n.d&&!n.d[0]?new i(NaN):!n.d||t.d&&!t.d[0]?Ie(new i(t),i.precision,i.rounding):(Ge=!1,i.modulo==9?(e=ft(t,n.abs(),0,3,1),e.s*=n.s):e=ft(t,n,0,i.modulo,1),e=e.times(n),Ge=!0,t.minus(e))};oe.naturalExponential=oe.exp=function(){return Uo(this)};oe.naturalLogarithm=oe.ln=function(){return oi(this)};oe.negated=oe.neg=function(){var n=new this.constructor(this);return n.s=-n.s,Ie(n)};oe.plus=oe.add=function(n){var e,t,i,r,s,a,o,u,c,l,h=this,f=h.constructor;if(n=new f(n),!h.d||!n.d)return!h.s||!n.s?n=new f(NaN):h.d||(n=new f(n.d||h.s===n.s?h:NaN)),n;if(h.s!=n.s)return n.s=-n.s,h.minus(n);if(c=h.d,l=n.d,o=f.precision,u=f.rounding,!c[0]||!l[0])return l[0]||(n=new f(h)),Ge?Ie(n,o,u):n;if(s=Wt(h.e/Oe),i=Wt(n.e/Oe),c=c.slice(),r=s-i,r){for(r<0?(t=c,r=-r,a=l.length):(t=l,i=s,a=c.length),s=Math.ceil(o/Oe),a=s>a?s+1:a+1,r>a&&(r=a,t.length=1),t.reverse();r--;)t.push(0);t.reverse()}for(a=c.length,r=l.length,a-r<0&&(r=a,t=l,l=c,c=t),e=0;r;)e=(c[--r]=c[r]+l[r]+e)/wn|0,c[r]%=wn;for(e&&(c.unshift(e),++i),a=c.length;c[--a]==0;)c.pop();return n.d=c,n.e=Ks(c,i),Ge?Ie(n,o,u):n};oe.precision=oe.sd=function(n){var e,t=this;if(n!==void 0&&n!==!!n&&n!==1&&n!==0)throw Error(di+n);return t.d?(e=Uc(t.d),n&&t.e+1>e&&(e=t.e+1)):e=NaN,e};oe.round=function(){var n=this,e=n.constructor;return Ie(new e(n),n.e+1,e.rounding)};oe.sine=oe.sin=function(){var n,e,t=this,i=t.constructor;return t.isFinite()?t.isZero()?new i(t):(n=i.precision,e=i.rounding,i.precision=n+Math.max(t.e,t.sd())+Oe,i.rounding=1,t=Gv(i,Hc(i,t)),i.precision=n,i.rounding=e,Ie(qn>2?t.neg():t,n,e,!0)):new i(NaN)};oe.squareRoot=oe.sqrt=function(){var n,e,t,i,r,s,a=this,o=a.d,u=a.e,c=a.s,l=a.constructor;if(c!==1||!o||!o[0])return new l(!c||c<0&&(!o||o[0])?NaN:o?a:1/0);for(Ge=!1,c=Math.sqrt(+a),c==0||c==1/0?(e=zt(o),(e.length+u)%2==0&&(e+="0"),c=Math.sqrt(e),u=Wt((u+1)/2)-(u<0||u%2),c==1/0?e="5e"+u:(e=c.toExponential(),e=e.slice(0,e.indexOf("e")+1)+u),i=new l(e)):i=new l(c.toString()),t=(u=l.precision)+3;;)if(s=i,i=s.plus(ft(a,s,t+2,1)).times(.5),zt(s.d).slice(0,t)===(e=zt(i.d)).slice(0,t))if(e=e.slice(t-3,t+1),e=="9999"||!r&&e=="4999"){if(!r&&(Ie(s,u+1,0),s.times(s).eq(a))){i=s;break}t+=4,r=1}else{(!+e||!+e.slice(1)&&e.charAt(0)=="5")&&(Ie(i,u+1,1),n=!i.times(i).eq(a));break}return Ge=!0,Ie(i,u,l.rounding,n)};oe.tangent=oe.tan=function(){var n,e,t=this,i=t.constructor;return t.isFinite()?t.isZero()?new i(t):(n=i.precision,e=i.rounding,i.precision=n+10,i.rounding=1,t=t.sin(),t.s=1,t=ft(t,new i(1).minus(t.times(t)).sqrt(),n+10,0),i.precision=n,i.rounding=e,Ie(qn==2||qn==4?t.neg():t,n,e,!0)):new i(NaN)};oe.times=oe.mul=function(n){var e,t,i,r,s,a,o,u,c,l=this,h=l.constructor,f=l.d,m=(n=new h(n)).d;if(n.s*=l.s,!f||!f[0]||!m||!m[0])return new h(!n.s||f&&!f[0]&&!m||m&&!m[0]&&!f?NaN:!f||!m?n.s/0:n.s*0);for(t=Wt(l.e/Oe)+Wt(n.e/Oe),u=f.length,c=m.length,u<c&&(s=f,f=m,m=s,a=u,u=c,c=a),s=[],a=u+c,i=a;i--;)s.push(0);for(i=c;--i>=0;){for(e=0,r=u+i;r>i;)o=s[r]+m[i]*f[r-i-1]+e,s[r--]=o%wn|0,e=o/wn|0;s[r]=(s[r]+e)%wn|0}for(;!s[--a];)s.pop();return e?++t:s.shift(),n.d=s,n.e=Ks(s,t),Ge?Ie(n,h.precision,h.rounding):n};oe.toBinary=function(n,e){return nu(this,2,n,e)};oe.toDecimalPlaces=oe.toDP=function(n,e){var t=this,i=t.constructor;return t=new i(t),n===void 0?t:(en(n,0,pi),e===void 0?e=i.rounding:en(e,0,8),Ie(t,n+t.e+1,e))};oe.toExponential=function(n,e){var t,i=this,r=i.constructor;return n===void 0?t=Ln(i,!0):(en(n,0,pi),e===void 0?e=r.rounding:en(e,0,8),i=Ie(new r(i),n+1,e),t=Ln(i,!0,n+1)),i.isNeg()&&!i.isZero()?"-"+t:t};oe.toFixed=function(n,e){var t,i,r=this,s=r.constructor;return n===void 0?t=Ln(r):(en(n,0,pi),e===void 0?e=s.rounding:en(e,0,8),i=Ie(new s(r),n+r.e+1,e),t=Ln(i,!1,n+i.e+1)),r.isNeg()&&!r.isZero()?"-"+t:t};oe.toFraction=function(n){var e,t,i,r,s,a,o,u,c,l,h,f,m=this,v=m.d,d=m.constructor;if(!v)return new d(m);if(c=t=new d(1),i=u=new d(0),e=new d(i),s=e.e=Uc(v)-m.e-1,a=s%Oe,e.d[0]=Ft(10,a<0?Oe+a:a),n==null)n=s>0?e:c;else{if(o=new d(n),!o.isInt()||o.lt(c))throw Error(di+o);n=o.gt(e)?s>0?e:c:o}for(Ge=!1,o=new d(zt(v)),l=d.precision,d.precision=s=v.length*Oe*2;h=ft(o,e,0,1,1),r=t.plus(h.times(i)),r.cmp(n)!=1;)t=i,i=r,r=c,c=u.plus(h.times(r)),u=r,r=e,e=o.minus(h.times(r)),o=r;return r=ft(n.minus(t),i,0,1,1),u=u.plus(r.times(c)),t=t.plus(r.times(i)),u.s=c.s=m.s,f=ft(c,i,s,1).minus(m).abs().cmp(ft(u,t,s,1).minus(m).abs())<1?[c,i]:[u,t],d.precision=l,Ge=!0,f};oe.toHexadecimal=oe.toHex=function(n,e){return nu(this,16,n,e)};oe.toNearest=function(n,e){var t=this,i=t.constructor;if(t=new i(t),n==null){if(!t.d)return t;n=new i(1),e=i.rounding}else{if(n=new i(n),e===void 0?e=i.rounding:en(e,0,8),!t.d)return n.s?t:n;if(!n.d)return n.s&&(n.s=t.s),n}return n.d[0]?(Ge=!1,t=ft(t,n,0,e,1).times(n),Ge=!0,Ie(t)):(n.s=t.s,t=n),t};oe.toNumber=function(){return+this};oe.toOctal=function(n,e){return nu(this,8,n,e)};oe.toPower=oe.pow=function(n){var e,t,i,r,s,a,o=this,u=o.constructor,c=+(n=new u(n));if(!o.d||!n.d||!o.d[0]||!n.d[0])return new u(Ft(+o,c));if(o=new u(o),o.eq(1))return o;if(i=u.precision,s=u.rounding,n.eq(1))return Ie(o,i,s);if(e=Wt(n.e/Oe),e>=n.d.length-1&&(t=c<0?-c:c)<=Ov)return r=Bc(u,o,t,i),n.s<0?new u(1).div(r):Ie(r,i,s);if(a=o.s,a<0){if(e<n.d.length-1)return new u(NaN);if(n.d[e]&1||(a=1),o.e==0&&o.d[0]==1&&o.d.length==1)return o.s=a,o}return t=Ft(+o,c),e=t==0||!isFinite(t)?Wt(c*(Math.log("0."+zt(o.d))/Math.LN10+o.e+1)):new u(t+"").e,e>u.maxE+1||e<u.minE-1?new u(e>0?a/0:0):(Ge=!1,u.rounding=o.s=1,t=Math.min(12,(e+"").length),r=Uo(n.times(oi(o,i+t)),i),r.d&&(r=Ie(r,i+5,1),Lr(r.d,i,s)&&(e=i+10,r=Ie(Uo(n.times(oi(o,e+t)),e),e+5,1),+zt(r.d).slice(i+1,i+15)+1==1e14&&(r=Ie(r,i+1,0)))),r.s=a,Ge=!0,u.rounding=s,Ie(r,i,s))};oe.toPrecision=function(n,e){var t,i=this,r=i.constructor;return n===void 0?t=Ln(i,i.e<=r.toExpNeg||i.e>=r.toExpPos):(en(n,1,pi),e===void 0?e=r.rounding:en(e,0,8),i=Ie(new r(i),n,e),t=Ln(i,n<=i.e||i.e<=r.toExpNeg,n)),i.isNeg()&&!i.isZero()?"-"+t:t};oe.toSignificantDigits=oe.toSD=function(n,e){var t=this,i=t.constructor;return n===void 0?(n=i.precision,e=i.rounding):(en(n,1,pi),e===void 0?e=i.rounding:en(e,0,8)),Ie(new i(t),n,e)};oe.toString=function(){var n=this,e=n.constructor,t=Ln(n,n.e<=e.toExpNeg||n.e>=e.toExpPos);return n.isNeg()&&!n.isZero()?"-"+t:t};oe.truncated=oe.trunc=function(){return Ie(new this.constructor(this),this.e+1,1)};oe.valueOf=oe.toJSON=function(){var n=this,e=n.constructor,t=Ln(n,n.e<=e.toExpNeg||n.e>=e.toExpPos);return n.isNeg()?"-"+t:t};function zt(n){var e,t,i,r=n.length-1,s="",a=n[0];if(r>0){for(s+=a,e=1;e<r;e++)i=n[e]+"",t=Oe-i.length,t&&(s+=si(t)),s+=i;a=n[e],i=a+"",t=Oe-i.length,t&&(s+=si(t))}else if(a===0)return"0";for(;a%10===0;)a/=10;return s+a}function en(n,e,t){if(n!==~~n||n<e||n>t)throw Error(di+n)}function Lr(n,e,t,i){var r,s,a,o;for(s=n[0];s>=10;s/=10)--e;return--e<0?(e+=Oe,r=0):(r=Math.ceil((e+1)/Oe),e%=Oe),s=Ft(10,Oe-e),o=n[r]%s|0,i==null?e<3?(e==0?o=o/100|0:e==1&&(o=o/10|0),a=t<4&&o==99999||t>3&&o==49999||o==5e4||o==0):a=(t<4&&o+1==s||t>3&&o+1==s/2)&&(n[r+1]/s/100|0)==Ft(10,e-2)-1||(o==s/2||o==0)&&(n[r+1]/s/100|0)==0:e<4?(e==0?o=o/1e3|0:e==1?o=o/100|0:e==2&&(o=o/10|0),a=(i||t<4)&&o==9999||!i&&t>3&&o==4999):a=((i||t<4)&&o+1==s||!i&&t>3&&o+1==s/2)&&(n[r+1]/s/1e3|0)==Ft(10,e-3)-1,a}function Cs(n,e,t){for(var i,r=[0],s,a=0,o=n.length;a<o;){for(s=r.length;s--;)r[s]*=e;for(r[0]+=Io.indexOf(n.charAt(a++)),i=0;i<r.length;i++)r[i]>t-1&&(r[i+1]===void 0&&(r[i+1]=0),r[i+1]+=r[i]/t|0,r[i]%=t)}return r.reverse()}function Hv(n,e){var t,i,r;if(e.isZero())return e;i=e.d.length,i<32?(t=Math.ceil(i/3),r=(1/Js(4,t)).toString()):(t=16,r="2.3283064365386962890625e-10"),n.precision+=t,e=mr(n,1,e.times(r),new n(1));for(var s=t;s--;){var a=e.times(e);e=a.times(a).minus(a).times(8).plus(1)}return n.precision-=t,e}var ft=function(){function n(i,r,s){var a,o=0,u=i.length;for(i=i.slice();u--;)a=i[u]*r+o,i[u]=a%s|0,o=a/s|0;return o&&i.unshift(o),i}function e(i,r,s,a){var o,u;if(s!=a)u=s>a?1:-1;else for(o=u=0;o<s;o++)if(i[o]!=r[o]){u=i[o]>r[o]?1:-1;break}return u}function t(i,r,s,a){for(var o=0;s--;)i[s]-=o,o=i[s]<r[s]?1:0,i[s]=o*a+i[s]-r[s];for(;!i[0]&&i.length>1;)i.shift()}return function(i,r,s,a,o,u){var c,l,h,f,m,v,d,g,p,A,_,M,D,E,w,T,x,y,F,H,B=i.constructor,z=i.s==r.s?1:-1,$=i.d,U=r.d;if(!$||!$[0]||!U||!U[0])return new B(!i.s||!r.s||($?U&&$[0]==U[0]:!U)?NaN:$&&$[0]==0||!U?z*0:z/0);for(u?(m=1,l=i.e-r.e):(u=wn,m=Oe,l=Wt(i.e/m)-Wt(r.e/m)),F=U.length,x=$.length,p=new B(z),A=p.d=[],h=0;U[h]==($[h]||0);h++);if(U[h]>($[h]||0)&&l--,s==null?(E=s=B.precision,a=B.rounding):o?E=s+(i.e-r.e)+1:E=s,E<0)A.push(1),v=!0;else{if(E=E/m+2|0,h=0,F==1){for(f=0,U=U[0],E++;(h<x||f)&&E--;h++)w=f*u+($[h]||0),A[h]=w/U|0,f=w%U|0;v=f||h<x}else{for(f=u/(U[0]+1)|0,f>1&&(U=n(U,f,u),$=n($,f,u),F=U.length,x=$.length),T=F,_=$.slice(0,F),M=_.length;M<F;)_[M++]=0;H=U.slice(),H.unshift(0),y=U[0],U[1]>=u/2&&++y;do f=0,c=e(U,_,F,M),c<0?(D=_[0],F!=M&&(D=D*u+(_[1]||0)),f=D/y|0,f>1?(f>=u&&(f=u-1),d=n(U,f,u),g=d.length,M=_.length,c=e(d,_,g,M),c==1&&(f--,t(d,F<g?H:U,g,u))):(f==0&&(c=f=1),d=U.slice()),g=d.length,g<M&&d.unshift(0),t(_,d,M,u),c==-1&&(M=_.length,c=e(U,_,F,M),c<1&&(f++,t(_,F<M?H:U,M,u))),M=_.length):c===0&&(f++,_=[0]),A[h++]=f,c&&_[0]?_[M++]=$[T]||0:(_=[$[T]],M=1);while((T++<x||_[0]!==void 0)&&E--);v=_[0]!==void 0}A[0]||A.shift()}if(m==1)p.e=l,Rc=v;else{for(h=1,f=A[0];f>=10;f/=10)h++;p.e=h+l*m-1,Ie(p,o?s+p.e+1:s,a,v)}return p}}();function Ie(n,e,t,i){var r,s,a,o,u,c,l,h,f,m=n.constructor;e:if(e!=null){if(h=n.d,!h)return n;for(r=1,o=h[0];o>=10;o/=10)r++;if(s=e-r,s<0)s+=Oe,a=e,l=h[f=0],u=l/Ft(10,r-a-1)%10|0;else if(f=Math.ceil((s+1)/Oe),o=h.length,f>=o)if(i){for(;o++<=f;)h.push(0);l=u=0,r=1,s%=Oe,a=s-Oe+1}else break e;else{for(l=o=h[f],r=1;o>=10;o/=10)r++;s%=Oe,a=s-Oe+r,u=a<0?0:l/Ft(10,r-a-1)%10|0}if(i=i||e<0||h[f+1]!==void 0||(a<0?l:l%Ft(10,r-a-1)),c=t<4?(u||i)&&(t==0||t==(n.s<0?3:2)):u>5||u==5&&(t==4||i||t==6&&(s>0?a>0?l/Ft(10,r-a):0:h[f-1])%10&1||t==(n.s<0?8:7)),e<1||!h[0])return h.length=0,c?(e-=n.e+1,h[0]=Ft(10,(Oe-e%Oe)%Oe),n.e=-e||0):h[0]=n.e=0,n;if(s==0?(h.length=f,o=1,f--):(h.length=f+1,o=Ft(10,Oe-s),h[f]=a>0?(l/Ft(10,r-a)%Ft(10,a)|0)*o:0),c)for(;;)if(f==0){for(s=1,a=h[0];a>=10;a/=10)s++;for(a=h[0]+=o,o=1;a>=10;a/=10)o++;s!=o&&(n.e++,h[0]==wn&&(h[0]=1));break}else{if(h[f]+=o,h[f]!=wn)break;h[f--]=0,o=1}for(s=h.length;h[--s]===0;)h.pop()}return Ge&&(n.e>m.maxE?(n.d=null,n.e=NaN):n.e<m.minE&&(n.e=0,n.d=[0])),n}function Ln(n,e,t){if(!n.isFinite())return zc(n);var i,r=n.e,s=zt(n.d),a=s.length;return e?(t&&(i=t-a)>0?s=s.charAt(0)+"."+s.slice(1)+si(i):a>1&&(s=s.charAt(0)+"."+s.slice(1)),s=s+(n.e<0?"e":"e+")+n.e):r<0?(s="0."+si(-r-1)+s,t&&(i=t-a)>0&&(s+=si(i))):r>=a?(s+=si(r+1-a),t&&(i=t-r-1)>0&&(s=s+"."+si(i))):((i=r+1)<a&&(s=s.slice(0,i)+"."+s.slice(i)),t&&(i=t-a)>0&&(r+1===a&&(s+="."),s+=si(i))),s}function Ks(n,e){var t=n[0];for(e*=Oe;t>=10;t/=10)e++;return e}function Os(n,e,t){if(e>zv)throw Ge=!0,t&&(n.precision=t),Error(Pc);return Ie(new n(Us),e,1,!0)}function Pn(n,e,t){if(e>Lo)throw Error(Pc);return Ie(new n(Bs),e,t,!0)}function Uc(n){var e=n.length-1,t=e*Oe+1;if(e=n[e],e){for(;e%10==0;e/=10)t--;for(e=n[0];e>=10;e/=10)t++}return t}function si(n){for(var e="";n--;)e+="0";return e}function Bc(n,e,t,i){var r,s=new n(1),a=Math.ceil(i/Oe+4);for(Ge=!1;;){if(t%2&&(s=s.times(e),dl(s.d,a)&&(r=!0)),t=Wt(t/2),t===0){t=s.d.length-1,r&&s.d[t]===0&&++s.d[t];break}e=e.times(e),dl(e.d,a)}return Ge=!0,s}function fl(n){return n.d[n.d.length-1]&1}function Oc(n,e,t){for(var i,r,s=new n(e[0]),a=0;++a<e.length;){if(r=new n(e[a]),!r.s){s=r;break}i=s.cmp(r),(i===t||i===0&&s.s===t)&&(s=r)}return s}function Uo(n,e){var t,i,r,s,a,o,u,c=0,l=0,h=0,f=n.constructor,m=f.rounding,v=f.precision;if(!n.d||!n.d[0]||n.e>17)return new f(n.d?n.d[0]?n.s<0?0:1/0:1:n.s?n.s<0?0:n:NaN);for(e==null?(Ge=!1,u=v):u=e,o=new f(.03125);n.e>-2;)n=n.times(o),h+=5;for(i=Math.log(Ft(2,h))/Math.LN10*2+5|0,u+=i,t=s=a=new f(1),f.precision=u;;){if(s=Ie(s.times(n),u,1),t=t.times(++l),o=a.plus(ft(s,t,u,1)),zt(o.d).slice(0,u)===zt(a.d).slice(0,u)){for(r=h;r--;)a=Ie(a.times(a),u,1);if(e==null)if(c<3&&Lr(a.d,u-i,m,c))f.precision=u+=10,t=s=o=new f(1),l=0,c++;else return Ie(a,f.precision=v,m,Ge=!0);else return f.precision=v,a}a=o}}function oi(n,e){var t,i,r,s,a,o,u,c,l,h,f,m=1,v=10,d=n,g=d.d,p=d.constructor,A=p.rounding,_=p.precision;if(d.s<0||!g||!g[0]||!d.e&&g[0]==1&&g.length==1)return new p(g&&!g[0]?-1/0:d.s!=1?NaN:g?0:d);if(e==null?(Ge=!1,l=_):l=e,p.precision=l+=v,t=zt(g),i=t.charAt(0),Math.abs(s=d.e)<15e14){for(;i<7&&i!=1||i==1&&t.charAt(1)>3;)d=d.times(n),t=zt(d.d),i=t.charAt(0),m++;s=d.e,i>1?(d=new p("0."+t),s++):d=new p(i+"."+t.slice(1))}else return c=Os(p,l+2,_).times(s+""),d=oi(new p(i+"."+t.slice(1)),l-v).plus(c),p.precision=_,e==null?Ie(d,_,A,Ge=!0):d;for(h=d,u=a=d=ft(d.minus(1),d.plus(1),l,1),f=Ie(d.times(d),l,1),r=3;;){if(a=Ie(a.times(f),l,1),c=u.plus(ft(a,new p(r),l,1)),zt(c.d).slice(0,l)===zt(u.d).slice(0,l))if(u=u.times(2),s!==0&&(u=u.plus(Os(p,l+2,_).times(s+""))),u=ft(u,new p(m),l,1),e==null)if(Lr(u.d,l-v,A,o))p.precision=l+=v,c=a=d=ft(h.minus(1),h.plus(1),l,1),f=Ie(d.times(d),l,1),r=o=1;else return Ie(u,p.precision=_,A,Ge=!0);else return p.precision=_,u;u=c,r+=2}}function zc(n){return String(n.s*n.s/0)}function Fs(n,e){var t,i,r;for((t=e.indexOf("."))>-1&&(e=e.replace(".","")),(i=e.search(/e/i))>0?(t<0&&(t=i),t+=+e.slice(i+1),e=e.substring(0,i)):t<0&&(t=e.length),i=0;e.charCodeAt(i)===48;i++);for(r=e.length;e.charCodeAt(r-1)===48;--r);if(e=e.slice(i,r),e){if(r-=i,n.e=t=t-i-1,n.d=[],i=(t+1)%Oe,t<0&&(i+=Oe),i<r){for(i&&n.d.push(+e.slice(0,i)),r-=Oe;i<r;)n.d.push(+e.slice(i,i+=Oe));e=e.slice(i),i=Oe-e.length}else i-=r;for(;i--;)e+="0";n.d.push(+e),Ge&&(n.e>n.constructor.maxE?(n.d=null,n.e=NaN):n.e<n.constructor.minE&&(n.e=0,n.d=[0]))}else n.e=0,n.d=[0];return n}function Vv(n,e){var t,i,r,s,a,o,u,c,l;if(e.indexOf("_")>-1){if(e=e.replace(/(\d)_(?=\d)/g,"$1"),Lc.test(e))return Fs(n,e)}else if(e==="Infinity"||e==="NaN")return+e||(n.s=NaN),n.e=NaN,n.d=null,n;if(Uv.test(e))t=16,e=e.toLowerCase();else if(Lv.test(e))t=2;else if(Bv.test(e))t=8;else throw Error(di+e);for(s=e.search(/p/i),s>0?(u=+e.slice(s+1),e=e.substring(2,s)):e=e.slice(2),s=e.indexOf("."),a=s>=0,i=n.constructor,a&&(e=e.replace(".",""),o=e.length,s=o-s,r=Bc(i,new i(t),s,s*2)),c=Cs(e,t,wn),l=c.length-1,s=l;c[s]===0;--s)c.pop();return s<0?new i(n.s*0):(n.e=Ks(c,l),n.d=c,Ge=!1,a&&(n=ft(n,r,o*4)),u&&(n=n.times(Math.abs(u)<54?Ft(2,u):gr.pow(2,u))),Ge=!0,n)}function Gv(n,e){var t,i=e.d.length;if(i<3)return e.isZero()?e:mr(n,2,e,e);t=1.4*Math.sqrt(i),t=t>16?16:t|0,e=e.times(1/Js(5,t)),e=mr(n,2,e,e);for(var r,s=new n(5),a=new n(16),o=new n(20);t--;)r=e.times(e),e=e.times(s.plus(r.times(a.times(r).minus(o))));return e}function mr(n,e,t,i,r){var s,a,o,u,c=n.precision,l=Math.ceil(c/Oe);for(Ge=!1,u=t.times(t),o=new n(i);;){if(a=ft(o.times(u),new n(e++*e++),c,1),o=r?i.plus(a):i.minus(a),i=ft(a.times(u),new n(e++*e++),c,1),a=o.plus(i),a.d[l]!==void 0){for(s=l;a.d[s]===o.d[s]&&s--;);if(s==-1)break}s=o,o=i,i=a,a=s}return Ge=!0,a.d.length=l+1,a}function Js(n,e){for(var t=n;--e;)t*=n;return t}function Hc(n,e){var t,i=e.s<0,r=Pn(n,n.precision,1),s=r.times(.5);if(e=e.abs(),e.lte(s))return qn=i?4:1,e;if(t=e.divToInt(r),t.isZero())qn=i?3:2;else{if(e=e.minus(t.times(r)),e.lte(s))return qn=fl(t)?i?2:3:i?4:1,e;qn=fl(t)?i?1:4:i?3:2}return e.minus(r).abs()}function nu(n,e,t,i){var r,s,a,o,u,c,l,h,f,m=n.constructor,v=t!==void 0;if(v?(en(t,1,pi),i===void 0?i=m.rounding:en(i,0,8)):(t=m.precision,i=m.rounding),!n.isFinite())l=zc(n);else{for(l=Ln(n),a=l.indexOf("."),v?(r=2,e==16?t=t*4-3:e==8&&(t=t*3-2)):r=e,a>=0&&(l=l.replace(".",""),f=new m(1),f.e=l.length-a,f.d=Cs(Ln(f),10,r),f.e=f.d.length),h=Cs(l,10,r),s=u=h.length;h[--u]==0;)h.pop();if(!h[0])l=v?"0p+0":"0";else{if(a<0?s--:(n=new m(n),n.d=h,n.e=s,n=ft(n,f,t,i,0,r),h=n.d,s=n.e,c=Rc),a=h[t],o=r/2,c=c||h[t+1]!==void 0,c=i<4?(a!==void 0||c)&&(i===0||i===(n.s<0?3:2)):a>o||a===o&&(i===4||c||i===6&&h[t-1]&1||i===(n.s<0?8:7)),h.length=t,c)for(;++h[--t]>r-1;)h[t]=0,t||(++s,h.unshift(1));for(u=h.length;!h[u-1];--u);for(a=0,l="";a<u;a++)l+=Io.charAt(h[a]);if(v){if(u>1)if(e==16||e==8){for(a=e==16?4:3,--u;u%a;u++)l+="0";for(h=Cs(l,r,e),u=h.length;!h[u-1];--u);for(a=1,l="1.";a<u;a++)l+=Io.charAt(h[a])}else l=l.charAt(0)+"."+l.slice(1);l=l+(s<0?"p":"p+")+s}else if(s<0){for(;++s;)l="0"+l;l="0."+l}else if(++s>u)for(s-=u;s--;)l+="0";else s<u&&(l=l.slice(0,s)+"."+l.slice(s))}l=(e==16?"0x":e==2?"0b":e==8?"0o":"")+l}return n.s<0?"-"+l:l}function dl(n,e){if(n.length>e)return n.length=e,!0}function kv(n){return new this(n).abs()}function Wv(n){return new this(n).acos()}function Xv(n){return new this(n).acosh()}function $v(n,e){return new this(n).plus(e)}function qv(n){return new this(n).asin()}function Yv(n){return new this(n).asinh()}function Zv(n){return new this(n).atan()}function Kv(n){return new this(n).atanh()}function Jv(n,e){n=new this(n),e=new this(e);var t,i=this.precision,r=this.rounding,s=i+4;return!n.s||!e.s?t=new this(NaN):!n.d&&!e.d?(t=Pn(this,s,1).times(e.s>0?.25:.75),t.s=n.s):!e.d||n.isZero()?(t=e.s<0?Pn(this,i,r):new this(0),t.s=n.s):!n.d||e.isZero()?(t=Pn(this,s,1).times(.5),t.s=n.s):e.s<0?(this.precision=s,this.rounding=1,t=this.atan(ft(n,e,s,1)),e=Pn(this,s,1),this.precision=i,this.rounding=r,t=n.s<0?t.minus(e):t.plus(e)):t=this.atan(ft(n,e,s,1)),t}function jv(n){return new this(n).cbrt()}function Qv(n){return Ie(n=new this(n),n.e+1,2)}function e_(n,e,t){return new this(n).clamp(e,t)}function t_(n){if(!n||typeof n!="object")throw Error(Zs+"Object expected");var e,t,i,r=n.defaults===!0,s=["precision",1,pi,"rounding",0,8,"toExpNeg",-9e15,0,"toExpPos",0,Po,"maxE",0,Po,"minE",-9e15,0,"modulo",0,9];for(e=0;e<s.length;e+=3)if(t=s[e],r&&(this[t]=No[t]),(i=n[t])!==void 0)if(Wt(i)===i&&i>=s[e+1]&&i<=s[e+2])this[t]=i;else throw Error(di+t+": "+i);if(t="crypto",r&&(this[t]=No[t]),(i=n[t])!==void 0)if(i===!0||i===!1||i===0||i===1)if(i)if(typeof crypto<"u"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))this[t]=!0;else throw Error(Ic);else this[t]=!1;else throw Error(di+t+": "+i);return this}function n_(n){return new this(n).cos()}function i_(n){return new this(n).cosh()}function Vc(n){var e,t,i;function r(s){var a,o,u,c=this;if(!(c instanceof r))return new r(s);if(c.constructor=r,pl(s)){c.s=s.s,Ge?!s.d||s.e>r.maxE?(c.e=NaN,c.d=null):s.e<r.minE?(c.e=0,c.d=[0]):(c.e=s.e,c.d=s.d.slice()):(c.e=s.e,c.d=s.d?s.d.slice():s.d);return}if(u=typeof s,u==="number"){if(s===0){c.s=1/s<0?-1:1,c.e=0,c.d=[0];return}if(s<0?(s=-s,c.s=-1):c.s=1,s===~~s&&s<1e7){for(a=0,o=s;o>=10;o/=10)a++;Ge?a>r.maxE?(c.e=NaN,c.d=null):a<r.minE?(c.e=0,c.d=[0]):(c.e=a,c.d=[s]):(c.e=a,c.d=[s]);return}if(s*0!==0){s||(c.s=NaN),c.e=NaN,c.d=null;return}return Fs(c,s.toString())}if(u==="string")return(o=s.charCodeAt(0))===45?(s=s.slice(1),c.s=-1):(o===43&&(s=s.slice(1)),c.s=1),Lc.test(s)?Fs(c,s):Vv(c,s);if(u==="bigint")return s<0?(s=-s,c.s=-1):c.s=1,Fs(c,s.toString());throw Error(di+s)}if(r.prototype=oe,r.ROUND_UP=0,r.ROUND_DOWN=1,r.ROUND_CEIL=2,r.ROUND_FLOOR=3,r.ROUND_HALF_UP=4,r.ROUND_HALF_DOWN=5,r.ROUND_HALF_EVEN=6,r.ROUND_HALF_CEIL=7,r.ROUND_HALF_FLOOR=8,r.EUCLID=9,r.config=r.set=t_,r.clone=Vc,r.isDecimal=pl,r.abs=kv,r.acos=Wv,r.acosh=Xv,r.add=$v,r.asin=qv,r.asinh=Yv,r.atan=Zv,r.atanh=Kv,r.atan2=Jv,r.cbrt=jv,r.ceil=Qv,r.clamp=e_,r.cos=n_,r.cosh=i_,r.div=r_,r.exp=s_,r.floor=a_,r.hypot=o_,r.ln=u_,r.log=l_,r.log10=h_,r.log2=c_,r.max=f_,r.min=d_,r.mod=p_,r.mul=m_,r.pow=g_,r.random=v_,r.round=__,r.sign=x_,r.sin=E_,r.sinh=y_,r.sqrt=M_,r.sub=D_,r.sum=S_,r.tan=A_,r.tanh=w_,r.trunc=b_,n===void 0&&(n={}),n&&n.defaults!==!0)for(i=["precision","rounding","toExpNeg","toExpPos","maxE","minE","modulo","crypto"],e=0;e<i.length;)n.hasOwnProperty(t=i[e++])||(n[t]=this[t]);return r.config(n),r}function r_(n,e){return new this(n).div(e)}function s_(n){return new this(n).exp()}function a_(n){return Ie(n=new this(n),n.e+1,3)}function o_(){var n,e,t=new this(0);for(Ge=!1,n=0;n<arguments.length;)if(e=new this(arguments[n++]),e.d)t.d&&(t=t.plus(e.times(e)));else{if(e.s)return Ge=!0,new this(1/0);t=e}return Ge=!0,t.sqrt()}function pl(n){return n instanceof gr||n&&n.toStringTag===Nc||!1}function u_(n){return new this(n).ln()}function l_(n,e){return new this(n).log(e)}function c_(n){return new this(n).log(2)}function h_(n){return new this(n).log(10)}function f_(){return Oc(this,arguments,-1)}function d_(){return Oc(this,arguments,1)}function p_(n,e){return new this(n).mod(e)}function m_(n,e){return new this(n).mul(e)}function g_(n,e){return new this(n).pow(e)}function v_(n){var e,t,i,r,s=0,a=new this(1),o=[];if(n===void 0?n=this.precision:en(n,1,pi),i=Math.ceil(n/Oe),this.crypto)if(crypto.getRandomValues)for(e=crypto.getRandomValues(new Uint32Array(i));s<i;)r=e[s],r>=429e7?e[s]=crypto.getRandomValues(new Uint32Array(1))[0]:o[s++]=r%1e7;else if(crypto.randomBytes){for(e=crypto.randomBytes(i*=4);s<i;)r=e[s]+(e[s+1]<<8)+(e[s+2]<<16)+((e[s+3]&127)<<24),r>=214e7?crypto.randomBytes(4).copy(e,s):(o.push(r%1e7),s+=4);s=i/4}else throw Error(Ic);else for(;s<i;)o[s++]=Math.random()*1e7|0;for(i=o[--s],n%=Oe,i&&n&&(r=Ft(10,Oe-n),o[s]=(i/r|0)*r);o[s]===0;s--)o.pop();if(s<0)t=0,o=[0];else{for(t=-1;o[0]===0;t-=Oe)o.shift();for(i=1,r=o[0];r>=10;r/=10)i++;i<Oe&&(t-=Oe-i)}return a.e=t,a.d=o,a}function __(n){return Ie(n=new this(n),n.e+1,this.rounding)}function x_(n){return n=new this(n),n.d?n.d[0]?n.s:0*n.s:n.s||NaN}function E_(n){return new this(n).sin()}function y_(n){return new this(n).sinh()}function M_(n){return new this(n).sqrt()}function D_(n,e){return new this(n).sub(e)}function S_(){var n=0,e=arguments,t=new this(e[n]);for(Ge=!1;t.s&&++n<e.length;)t=t.plus(e[n]);return Ge=!0,Ie(t,this.precision,this.rounding)}function A_(n){return new this(n).tan()}function w_(n){return new this(n).tanh()}function b_(n){return Ie(n=new this(n),n.e+1,1)}oe[Symbol.for("nodejs.util.inspect.custom")]=oe.toString;oe[Symbol.toStringTag]="Decimal";var gr=oe.constructor=Vc(No);Us=new gr(Us);Bs=new gr(Bs);var T_="BigNumber",C_=["?on","config"],F_=Je(T_,C_,n=>{var{on:e,config:t}=n,i=gr.clone({precision:t.precision,modulo:gr.EUCLID});return i.prototype=Object.create(i.prototype),i.prototype.type="BigNumber",i.prototype.isBigNumber=!0,i.prototype.toJSON=function(){return{mathjs:"BigNumber",value:this.toString()}},i.fromJSON=function(r){return new i(r.value)},e&&e("config",function(r,s){r.precision!==s.precision&&i.config({precision:r.precision})}),i},{isClass:!0});const Gt=Math.cosh||function(n){return Math.abs(n)<1e-9?1-n:(Math.exp(n)+Math.exp(-n))*.5},fn=Math.sinh||function(n){return Math.abs(n)<1e-9?n:(Math.exp(n)-Math.exp(-n))*.5},R_=function(n){const e=Math.PI/4;if(-e>n||n>e)return Math.cos(n)-1;const t=n*n;return t*(t*(t*(t*(t*(t*(t*(t/20922789888e3-1/87178291200)+1/479001600)-1/3628800)+1/40320)-1/720)+1/24)-1/2)},za=function(n,e){return n=Math.abs(n),e=Math.abs(e),n<e&&([n,e]=[e,n]),n<1e8?Math.sqrt(n*n+e*e):(e/=n,n*Math.sqrt(1+e*e))},Qi=function(){throw SyntaxError("Invalid Param")};function Ha(n,e){const t=Math.abs(n),i=Math.abs(e);return n===0?Math.log(i):e===0?Math.log(t):t<3e3&&i<3e3?Math.log(n*n+e*e)*.5:(n=n*.5,e=e*.5,.5*Math.log(n*n+e*e)+Math.LN2)}const P_={re:0,im:0},Si=function(n,e){const t=P_;if(n==null)t.re=t.im=0;else if(e!==void 0)t.re=n,t.im=e;else switch(typeof n){case"object":if("im"in n&&"re"in n)t.re=n.re,t.im=n.im;else if("abs"in n&&"arg"in n){if(!isFinite(n.abs)&&isFinite(n.arg))return ie.INFINITY;t.re=n.abs*Math.cos(n.arg),t.im=n.abs*Math.sin(n.arg)}else if("r"in n&&"phi"in n){if(!isFinite(n.r)&&isFinite(n.phi))return ie.INFINITY;t.re=n.r*Math.cos(n.phi),t.im=n.r*Math.sin(n.phi)}else n.length===2?(t.re=n[0],t.im=n[1]):Qi();break;case"string":t.im=t.re=0;const i=n.replace(/_/g,"").match(/\d+\.?\d*e[+-]?\d+|\d+\.?\d*|\.\d+|./g);let r=1,s=0;i===null&&Qi();for(let a=0;a<i.length;a++){const o=i[a];o===" "||o==="	"||o===`
`||(o==="+"?r++:o==="-"?s++:o==="i"||o==="I"?(r+s===0&&Qi(),i[a+1]!==" "&&!isNaN(i[a+1])?(t.im+=parseFloat((s%2?"-":"")+i[a+1]),a++):t.im+=parseFloat((s%2?"-":"")+"1"),r=s=0):((r+s===0||isNaN(o))&&Qi(),i[a+1]==="i"||i[a+1]==="I"?(t.im+=parseFloat((s%2?"-":"")+o),a++):t.re+=parseFloat((s%2?"-":"")+o),r=s=0))}r+s>0&&Qi();break;case"number":t.im=0,t.re=n;break;default:Qi()}return isNaN(t.re)||isNaN(t.im),t};function ie(n,e){if(!(this instanceof ie))return new ie(n,e);const t=Si(n,e);this.re=t.re,this.im=t.im}ie.prototype={re:0,im:0,sign:function(){const n=za(this.re,this.im);return new ie(this.re/n,this.im/n)},add:function(n,e){const t=Si(n,e),i=this.isInfinite(),r=!(isFinite(t.re)&&isFinite(t.im));return i||r?i&&r?ie.NAN:ie.INFINITY:new ie(this.re+t.re,this.im+t.im)},sub:function(n,e){const t=Si(n,e),i=this.isInfinite(),r=!(isFinite(t.re)&&isFinite(t.im));return i||r?i&&r?ie.NAN:ie.INFINITY:new ie(this.re-t.re,this.im-t.im)},mul:function(n,e){const t=Si(n,e),i=this.isInfinite(),r=!(isFinite(t.re)&&isFinite(t.im)),s=this.re===0&&this.im===0,a=t.re===0&&t.im===0;return i&&a||r&&s?ie.NAN:i||r?ie.INFINITY:t.im===0&&this.im===0?new ie(this.re*t.re,0):new ie(this.re*t.re-this.im*t.im,this.re*t.im+this.im*t.re)},div:function(n,e){const t=Si(n,e),i=this.isInfinite(),r=!(isFinite(t.re)&&isFinite(t.im)),s=this.re===0&&this.im===0,a=t.re===0&&t.im===0;if(s&&a||i&&r)return ie.NAN;if(a||i)return ie.INFINITY;if(s||r)return ie.ZERO;if(t.im===0)return new ie(this.re/t.re,this.im/t.re);if(Math.abs(t.re)<Math.abs(t.im)){const o=t.re/t.im,u=t.re*o+t.im;return new ie((this.re*o+this.im)/u,(this.im*o-this.re)/u)}else{const o=t.im/t.re,u=t.im*o+t.re;return new ie((this.re+this.im*o)/u,(this.im-this.re*o)/u)}},pow:function(n,e){const t=Si(n,e),i=this.re===0&&this.im===0;if(t.re===0&&t.im===0)return ie.ONE;if(t.im===0){if(this.im===0&&this.re>0)return new ie(Math.pow(this.re,t.re),0);if(this.re===0)switch((t.re%4+4)%4){case 0:return new ie(Math.pow(this.im,t.re),0);case 1:return new ie(0,Math.pow(this.im,t.re));case 2:return new ie(-Math.pow(this.im,t.re),0);case 3:return new ie(0,-Math.pow(this.im,t.re))}}if(i&&t.re>0)return ie.ZERO;const s=Math.atan2(this.im,this.re),a=Ha(this.re,this.im);let o=Math.exp(t.re*a-t.im*s),u=t.im*a+t.re*s;return new ie(o*Math.cos(u),o*Math.sin(u))},sqrt:function(){const n=this.re,e=this.im;if(e===0)return n>=0?new ie(Math.sqrt(n),0):new ie(0,Math.sqrt(-n));const t=za(n,e);let i=Math.sqrt(.5*(t+Math.abs(n))),r=Math.abs(e)/(2*i);return n>=0?new ie(i,e<0?-r:r):new ie(r,e<0?-i:i)},exp:function(){const n=Math.exp(this.re);return this.im===0?new ie(n,0):new ie(n*Math.cos(this.im),n*Math.sin(this.im))},expm1:function(){const n=this.re,e=this.im;return new ie(Math.expm1(n)*Math.cos(e)+R_(e),Math.exp(n)*Math.sin(e))},log:function(){const n=this.re,e=this.im;return e===0&&n>0?new ie(Math.log(n),0):new ie(Ha(n,e),Math.atan2(e,n))},abs:function(){return za(this.re,this.im)},arg:function(){return Math.atan2(this.im,this.re)},sin:function(){const n=this.re,e=this.im;return new ie(Math.sin(n)*Gt(e),Math.cos(n)*fn(e))},cos:function(){const n=this.re,e=this.im;return new ie(Math.cos(n)*Gt(e),-Math.sin(n)*fn(e))},tan:function(){const n=2*this.re,e=2*this.im,t=Math.cos(n)+Gt(e);return new ie(Math.sin(n)/t,fn(e)/t)},cot:function(){const n=2*this.re,e=2*this.im,t=Math.cos(n)-Gt(e);return new ie(-Math.sin(n)/t,fn(e)/t)},sec:function(){const n=this.re,e=this.im,t=.5*Gt(2*e)+.5*Math.cos(2*n);return new ie(Math.cos(n)*Gt(e)/t,Math.sin(n)*fn(e)/t)},csc:function(){const n=this.re,e=this.im,t=.5*Gt(2*e)-.5*Math.cos(2*n);return new ie(Math.sin(n)*Gt(e)/t,-Math.cos(n)*fn(e)/t)},asin:function(){const n=this.re,e=this.im,t=new ie(e*e-n*n+1,-2*n*e).sqrt(),i=new ie(t.re-e,t.im+n).log();return new ie(i.im,-i.re)},acos:function(){const n=this.re,e=this.im,t=new ie(e*e-n*n+1,-2*n*e).sqrt(),i=new ie(t.re-e,t.im+n).log();return new ie(Math.PI/2-i.im,i.re)},atan:function(){const n=this.re,e=this.im;if(n===0){if(e===1)return new ie(0,1/0);if(e===-1)return new ie(0,-1/0)}const t=n*n+(1-e)*(1-e),i=new ie((1-e*e-n*n)/t,-2*n/t).log();return new ie(-.5*i.im,.5*i.re)},acot:function(){const n=this.re,e=this.im;if(e===0)return new ie(Math.atan2(1,n),0);const t=n*n+e*e;return t!==0?new ie(n/t,-e/t).atan():new ie(n!==0?n/0:0,e!==0?-e/0:0).atan()},asec:function(){const n=this.re,e=this.im;if(n===0&&e===0)return new ie(0,1/0);const t=n*n+e*e;return t!==0?new ie(n/t,-e/t).acos():new ie(n!==0?n/0:0,e!==0?-e/0:0).acos()},acsc:function(){const n=this.re,e=this.im;if(n===0&&e===0)return new ie(Math.PI/2,1/0);const t=n*n+e*e;return t!==0?new ie(n/t,-e/t).asin():new ie(n!==0?n/0:0,e!==0?-e/0:0).asin()},sinh:function(){const n=this.re,e=this.im;return new ie(fn(n)*Math.cos(e),Gt(n)*Math.sin(e))},cosh:function(){const n=this.re,e=this.im;return new ie(Gt(n)*Math.cos(e),fn(n)*Math.sin(e))},tanh:function(){const n=2*this.re,e=2*this.im,t=Gt(n)+Math.cos(e);return new ie(fn(n)/t,Math.sin(e)/t)},coth:function(){const n=2*this.re,e=2*this.im,t=Gt(n)-Math.cos(e);return new ie(fn(n)/t,-Math.sin(e)/t)},csch:function(){const n=this.re,e=this.im,t=Math.cos(2*e)-Gt(2*n);return new ie(-2*fn(n)*Math.cos(e)/t,2*Gt(n)*Math.sin(e)/t)},sech:function(){const n=this.re,e=this.im,t=Math.cos(2*e)+Gt(2*n);return new ie(2*Gt(n)*Math.cos(e)/t,-2*fn(n)*Math.sin(e)/t)},asinh:function(){let n=this.im;this.im=-this.re,this.re=n;const e=this.asin();return this.re=-this.im,this.im=n,n=e.re,e.re=-e.im,e.im=n,e},acosh:function(){const n=this.acos();if(n.im<=0){const e=n.re;n.re=-n.im,n.im=e}else{const e=n.im;n.im=-n.re,n.re=e}return n},atanh:function(){const n=this.re,e=this.im,t=n>1&&e===0,i=1-n,r=1+n,s=i*i+e*e,a=s!==0?new ie((r*i-e*e)/s,(e*i+r*e)/s):new ie(n!==-1?n/0:0,e!==0?e/0:0),o=a.re;return a.re=Ha(a.re,a.im)/2,a.im=Math.atan2(a.im,o)/2,t&&(a.im=-a.im),a},acoth:function(){const n=this.re,e=this.im;if(n===0&&e===0)return new ie(0,Math.PI/2);const t=n*n+e*e;return t!==0?new ie(n/t,-e/t).atanh():new ie(n!==0?n/0:0,e!==0?-e/0:0).atanh()},acsch:function(){const n=this.re,e=this.im;if(e===0)return new ie(n!==0?Math.log(n+Math.sqrt(n*n+1)):1/0,0);const t=n*n+e*e;return t!==0?new ie(n/t,-e/t).asinh():new ie(n!==0?n/0:0,e!==0?-e/0:0).asinh()},asech:function(){const n=this.re,e=this.im;if(this.isZero())return ie.INFINITY;const t=n*n+e*e;return t!==0?new ie(n/t,-e/t).acosh():new ie(n!==0?n/0:0,e!==0?-e/0:0).acosh()},inverse:function(){if(this.isZero())return ie.INFINITY;if(this.isInfinite())return ie.ZERO;const n=this.re,e=this.im,t=n*n+e*e;return new ie(n/t,-e/t)},conjugate:function(){return new ie(this.re,-this.im)},neg:function(){return new ie(-this.re,-this.im)},ceil:function(n){return n=Math.pow(10,n||0),new ie(Math.ceil(this.re*n)/n,Math.ceil(this.im*n)/n)},floor:function(n){return n=Math.pow(10,n||0),new ie(Math.floor(this.re*n)/n,Math.floor(this.im*n)/n)},round:function(n){return n=Math.pow(10,n||0),new ie(Math.round(this.re*n)/n,Math.round(this.im*n)/n)},equals:function(n,e){const t=Si(n,e);return Math.abs(t.re-this.re)<=ie.EPSILON&&Math.abs(t.im-this.im)<=ie.EPSILON},clone:function(){return new ie(this.re,this.im)},toString:function(){let n=this.re,e=this.im,t="";return this.isNaN()?"NaN":this.isInfinite()?"Infinity":(Math.abs(n)<ie.EPSILON&&(n=0),Math.abs(e)<ie.EPSILON&&(e=0),e===0?t+n:(n!==0?(t+=n,t+=" ",e<0?(e=-e,t+="-"):t+="+",t+=" "):e<0&&(e=-e,t+="-"),e!==1&&(t+=e),t+"i"))},toVector:function(){return[this.re,this.im]},valueOf:function(){return this.im===0?this.re:null},isNaN:function(){return isNaN(this.re)||isNaN(this.im)},isZero:function(){return this.im===0&&this.re===0},isFinite:function(){return isFinite(this.re)&&isFinite(this.im)},isInfinite:function(){return!this.isFinite()}};ie.ZERO=new ie(0,0);ie.ONE=new ie(1,0);ie.I=new ie(0,1);ie.PI=new ie(Math.PI,0);ie.E=new ie(Math.E,0);ie.INFINITY=new ie(1/0,1/0);ie.NAN=new ie(NaN,NaN);ie.EPSILON=1e-15;var I_="Complex",N_=[],L_=Je(I_,N_,()=>(Object.defineProperty(ie,"name",{value:"Complex"}),ie.prototype.constructor=ie,ie.prototype.type="Complex",ie.prototype.isComplex=!0,ie.prototype.toJSON=function(){return{mathjs:"Complex",re:this.re,im:this.im}},ie.prototype.toPolar=function(){return{r:this.abs(),phi:this.arg()}},ie.prototype.format=function(n){var e="",t=this.im,i=this.re,r=Ro(this.re,n),s=Ro(this.im,n),a=dt(n)?n:n?n.precision:null;if(a!==null){var o=Math.pow(10,-a);Math.abs(i/t)<o&&(i=0),Math.abs(t/i)<o&&(t=0)}return t===0?e=r:i===0?t===1?e="i":t===-1?e="-i":e=s+"i":t<0?t===-1?e=r+" - i":e=r+" - "+s.substring(1)+"i":t===1?e=r+" + i":e=r+" + "+s+"i",e},ie.fromPolar=function(n){switch(arguments.length){case 1:{var e=arguments[0];if(typeof e=="object")return ie(e);throw new TypeError("Input has to be an object with r and phi keys.")}case 2:{var t=arguments[0],i=arguments[1];if(dt(t)){if(Ac(i)&&i.hasBase("ANGLE")&&(i=i.toNumber("rad")),dt(i))return new ie({r:t,phi:i});throw new TypeError("Phi is not a number nor an angle unit.")}else throw new TypeError("Radius r is not a number.")}default:throw new SyntaxError("Wrong number of arguments in function fromPolar")}},ie.prototype.valueOf=ie.prototype.toString,ie.fromJSON=function(n){return new ie(n)},ie.compare=function(n,e){return n.re>e.re?1:n.re<e.re?-1:n.im>e.im?1:n.im<e.im?-1:0},ie),{isClass:!0});typeof BigInt>"u"&&(BigInt=function(n){if(isNaN(n))throw new Error("");return n});const Pe=BigInt(0),Ye=BigInt(1),Ur=BigInt(2),Bo=BigInt(5),Kt=BigInt(10),U_=2e3,ve={s:Ye,n:Pe,d:Ye};function Gn(n,e){try{n=BigInt(n)}catch{throw ri()}return n*e}function Sn(n){return typeof n=="bigint"?n:Math.floor(n)}function xt(n,e){if(e===Pe)throw iu();const t=Object.create(dn.prototype);t.s=n<Pe?-Ye:Ye,n=n<Pe?-n:n;const i=bi(n,e);return t.n=n/i,t.d=e/i,t}function er(n){const e={};let t=n,i=Ur,r=Bo-Ye;for(;r<=t;){for(;t%i===Pe;)t/=i,e[i]=(e[i]||Pe)+Ye;r+=Ye+Ur*i++}return t!==n?t>1&&(e[t]=(e[t]||Pe)+Ye):e[n]=(e[n]||Pe)+Ye,e}const Bt=function(n,e){let t=Pe,i=Ye,r=Ye;if(n!=null)if(e!==void 0){if(typeof n=="bigint")t=n;else{if(isNaN(n))throw ri();if(n%1!==0)throw ml();t=BigInt(n)}if(typeof e=="bigint")i=e;else{if(isNaN(e))throw ri();if(e%1!==0)throw ml();i=BigInt(e)}r=t*i}else if(typeof n=="object"){if("d"in n&&"n"in n)t=BigInt(n.n),i=BigInt(n.d),"s"in n&&(t*=BigInt(n.s));else if(0 in n)t=BigInt(n[0]),1 in n&&(i=BigInt(n[1]));else if(typeof n=="bigint")t=n;else throw ri();r=t*i}else if(typeof n=="number"){if(isNaN(n))throw ri();if(n<0&&(r=-Ye,n=-n),n%1===0)t=BigInt(n);else if(n>0){let s=1,a=0,o=1,u=1,c=1,l=1e7;for(n>=1&&(s=10**Math.floor(1+Math.log10(n)),n/=s);o<=l&&c<=l;){let h=(a+u)/(o+c);if(n===h){o+c<=l?(t=a+u,i=o+c):c>o?(t=u,i=c):(t=a,i=o);break}else n>h?(a+=u,o+=c):(u+=a,c+=o),o>l?(t=u,i=c):(t=a,i=o)}t=BigInt(t)*BigInt(s),i=BigInt(i)}}else if(typeof n=="string"){let s=0,a=Pe,o=Pe,u=Pe,c=Ye,l=Ye,h=n.replace(/_/g,"").match(/\d+|./g);if(h===null)throw ri();if(h[s]==="-"?(r=-Ye,s++):h[s]==="+"&&s++,h.length===s+1?o=Gn(h[s++],r):h[s+1]==="."||h[s]==="."?(h[s]!=="."&&(a=Gn(h[s++],r)),s++,(s+1===h.length||h[s+1]==="("&&h[s+3]===")"||h[s+1]==="'"&&h[s+3]==="'")&&(o=Gn(h[s],r),c=Kt**BigInt(h[s].length),s++),(h[s]==="("&&h[s+2]===")"||h[s]==="'"&&h[s+2]==="'")&&(u=Gn(h[s+1],r),l=Kt**BigInt(h[s+1].length)-Ye,s+=3)):h[s+1]==="/"||h[s+1]===":"?(o=Gn(h[s],r),c=Gn(h[s+2],Ye),s+=3):h[s+3]==="/"&&h[s+1]===" "&&(a=Gn(h[s],r),o=Gn(h[s+2],r),c=Gn(h[s+4],Ye),s+=5),h.length<=s)i=c*l,r=t=u+i*a+l*o;else throw ri()}else if(typeof n=="bigint")t=n,r=n,i=Ye;else throw ri();if(i===Pe)throw iu();ve.s=r<Pe?-Ye:Ye,ve.n=t<Pe?-t:t,ve.d=i<Pe?-i:i};function B_(n,e,t){let i=Ye;for(;e>Pe;n=n*n%t,e>>=Ye)e&Ye&&(i=i*n%t);return i}function O_(n,e){for(;e%Ur===Pe;e/=Ur);for(;e%Bo===Pe;e/=Bo);if(e===Ye)return Pe;let t=Kt%e,i=1;for(;t!==Ye;i++)if(t=t*Kt%e,i>U_)return Pe;return BigInt(i)}function z_(n,e,t){let i=Ye,r=B_(Kt,t,e);for(let s=0;s<300;s++){if(i===r)return BigInt(s);i=i*Kt%e,r=r*Kt%e}return 0}function bi(n,e){if(!n)return e;if(!e)return n;for(;;){if(n%=e,!n)return e;if(e%=n,!e)return n}}function dn(n,e){if(Bt(n,e),this instanceof dn)n=bi(ve.d,ve.n),this.s=ve.s,this.n=ve.n/n,this.d=ve.d/n;else return xt(ve.s*ve.n,ve.d)}var iu=function(){return new Error("Division by Zero")},ri=function(){return new Error("Invalid argument")},ml=function(){return new Error("Parameters must be integer")};dn.prototype={s:Ye,n:Pe,d:Ye,abs:function(){return xt(this.n,this.d)},neg:function(){return xt(-this.s*this.n,this.d)},add:function(n,e){return Bt(n,e),xt(this.s*this.n*ve.d+ve.s*this.d*ve.n,this.d*ve.d)},sub:function(n,e){return Bt(n,e),xt(this.s*this.n*ve.d-ve.s*this.d*ve.n,this.d*ve.d)},mul:function(n,e){return Bt(n,e),xt(this.s*ve.s*this.n*ve.n,this.d*ve.d)},div:function(n,e){return Bt(n,e),xt(this.s*ve.s*this.n*ve.d,this.d*ve.n)},clone:function(){return xt(this.s*this.n,this.d)},mod:function(n,e){if(n===void 0)return xt(this.s*this.n%this.d,Ye);if(Bt(n,e),Pe===ve.n*this.d)throw iu();return xt(this.s*(ve.d*this.n)%(ve.n*this.d),ve.d*this.d)},gcd:function(n,e){return Bt(n,e),xt(bi(ve.n,this.n)*bi(ve.d,this.d),ve.d*this.d)},lcm:function(n,e){return Bt(n,e),ve.n===Pe&&this.n===Pe?xt(Pe,Ye):xt(ve.n*this.n,bi(ve.n,this.n)*bi(ve.d,this.d))},inverse:function(){return xt(this.s*this.d,this.n)},pow:function(n,e){if(Bt(n,e),ve.d===Ye)return ve.s<Pe?xt((this.s*this.d)**ve.n,this.n**ve.n):xt((this.s*this.n)**ve.n,this.d**ve.n);if(this.s<Pe)return null;let t=er(this.n),i=er(this.d),r=Ye,s=Ye;for(let a in t)if(a!=="1"){if(a==="0"){r=Pe;break}if(t[a]*=ve.n,t[a]%ve.d===Pe)t[a]/=ve.d;else return null;r*=BigInt(a)**t[a]}for(let a in i)if(a!=="1"){if(i[a]*=ve.n,i[a]%ve.d===Pe)i[a]/=ve.d;else return null;s*=BigInt(a)**i[a]}return ve.s<Pe?xt(s,r):xt(r,s)},log:function(n,e){if(Bt(n,e),this.s<=Pe||ve.s<=Pe)return null;const t={},i=er(ve.n),r=er(ve.d),s=er(this.n),a=er(this.d);for(const c in r)i[c]=(i[c]||Pe)-r[c];for(const c in a)s[c]=(s[c]||Pe)-a[c];for(const c in i)c!=="1"&&(t[c]=!0);for(const c in s)c!=="1"&&(t[c]=!0);let o=null,u=null;for(const c in t){const l=i[c]||Pe,h=s[c]||Pe;if(l===Pe){if(h!==Pe)return null;continue}let f=h,m=l;const v=bi(f,m);if(f/=v,m/=v,o===null&&u===null)o=f,u=m;else if(f*u!==o*m)return null}return o!==null&&u!==null?xt(o,u):null},equals:function(n,e){return Bt(n,e),this.s*this.n*ve.d===ve.s*ve.n*this.d},lt:function(n,e){return Bt(n,e),this.s*this.n*ve.d<ve.s*ve.n*this.d},lte:function(n,e){return Bt(n,e),this.s*this.n*ve.d<=ve.s*ve.n*this.d},gt:function(n,e){return Bt(n,e),this.s*this.n*ve.d>ve.s*ve.n*this.d},gte:function(n,e){return Bt(n,e),this.s*this.n*ve.d>=ve.s*ve.n*this.d},compare:function(n,e){Bt(n,e);let t=this.s*this.n*ve.d-ve.s*ve.n*this.d;return(Pe<t)-(t<Pe)},ceil:function(n){return n=Kt**BigInt(n||0),xt(Sn(this.s*n*this.n/this.d)+(n*this.n%this.d>Pe&&this.s>=Pe?Ye:Pe),n)},floor:function(n){return n=Kt**BigInt(n||0),xt(Sn(this.s*n*this.n/this.d)-(n*this.n%this.d>Pe&&this.s<Pe?Ye:Pe),n)},round:function(n){return n=Kt**BigInt(n||0),xt(Sn(this.s*n*this.n/this.d)+this.s*((this.s>=Pe?Ye:Pe)+Ur*(n*this.n%this.d)>this.d?Ye:Pe),n)},roundTo:function(n,e){Bt(n,e);const t=this.n*ve.d,i=this.d*ve.n,r=t%i;let s=Sn(t/i);return r+r>=i&&s++,xt(this.s*s*ve.n,ve.d)},divisible:function(n,e){return Bt(n,e),!(!(ve.n*this.d)||this.n*ve.d%(ve.n*this.d))},valueOf:function(){return Number(this.s*this.n)/Number(this.d)},toString:function(n){let e=this.n,t=this.d;n=n||15;let i=O_(e,t),r=z_(e,t,i),s=this.s<Pe?"-":"";if(s+=Sn(e/t),e%=t,e*=Kt,e&&(s+="."),i){for(let a=r;a--;)s+=Sn(e/t),e%=t,e*=Kt;s+="(";for(let a=i;a--;)s+=Sn(e/t),e%=t,e*=Kt;s+=")"}else for(let a=n;e&&a--;)s+=Sn(e/t),e%=t,e*=Kt;return s},toFraction:function(n){let e=this.n,t=this.d,i=this.s<Pe?"-":"";if(t===Ye)i+=e;else{let r=Sn(e/t);n&&r>Pe&&(i+=r,i+=" ",e%=t),i+=e,i+="/",i+=t}return i},toLatex:function(n){let e=this.n,t=this.d,i=this.s<Pe?"-":"";if(t===Ye)i+=e;else{let r=Sn(e/t);n&&r>Pe&&(i+=r,e%=t),i+="\\frac{",i+=e,i+="}{",i+=t,i+="}"}return i},toContinued:function(){let n=this.n,e=this.d,t=[];do{t.push(Sn(n/e));let i=n%e;n=e,e=i}while(n!==Ye);return t},simplify:function(n){const e=BigInt(1/(n||.001)|0),t=this.abs(),i=t.toContinued();for(let r=1;r<i.length;r++){let s=xt(i[r-1],Ye);for(let o=r-2;o>=0;o--)s=s.inverse().add(i[o]);let a=s.sub(t);if(a.n*e<a.d)return s.mul(this.s)}return this}};var H_="Fraction",V_=[],G_=Je(H_,V_,()=>(Object.defineProperty(dn,"name",{value:"Fraction"}),dn.prototype.constructor=dn,dn.prototype.type="Fraction",dn.prototype.isFraction=!0,dn.prototype.toJSON=function(){return{mathjs:"Fraction",n:String(this.s*this.n),d:String(this.d)}},dn.fromJSON=function(n){return new dn(n)},dn),{isClass:!0}),k_="Matrix",W_=[],X_=Je(k_,W_,()=>{function n(){if(!(this instanceof n))throw new SyntaxError("Constructor must be called with the new operator")}return n.prototype.type="Matrix",n.prototype.isMatrix=!0,n.prototype.storage=function(){throw new Error("Cannot invoke storage on a Matrix interface")},n.prototype.datatype=function(){throw new Error("Cannot invoke datatype on a Matrix interface")},n.prototype.create=function(e,t){throw new Error("Cannot invoke create on a Matrix interface")},n.prototype.subset=function(e,t,i){throw new Error("Cannot invoke subset on a Matrix interface")},n.prototype.get=function(e){throw new Error("Cannot invoke get on a Matrix interface")},n.prototype.set=function(e,t,i){throw new Error("Cannot invoke set on a Matrix interface")},n.prototype.resize=function(e,t){throw new Error("Cannot invoke resize on a Matrix interface")},n.prototype.reshape=function(e,t){throw new Error("Cannot invoke reshape on a Matrix interface")},n.prototype.clone=function(){throw new Error("Cannot invoke clone on a Matrix interface")},n.prototype.size=function(){throw new Error("Cannot invoke size on a Matrix interface")},n.prototype.map=function(e,t){throw new Error("Cannot invoke map on a Matrix interface")},n.prototype.forEach=function(e){throw new Error("Cannot invoke forEach on a Matrix interface")},n.prototype[Symbol.iterator]=function(){throw new Error("Cannot iterate a Matrix interface")},n.prototype.toArray=function(){throw new Error("Cannot invoke toArray on a Matrix interface")},n.prototype.valueOf=function(){throw new Error("Cannot invoke valueOf on a Matrix interface")},n.prototype.format=function(e){throw new Error("Cannot invoke format on a Matrix interface")},n.prototype.toString=function(){throw new Error("Cannot invoke toString on a Matrix interface")},n},{isClass:!0});function Va(n,e,t){var i=n.constructor,r=new i(2),s="";if(t){if(t<1)throw new Error("size must be in greater than 0");if(!St(t))throw new Error("size must be an integer");if(n.greaterThan(r.pow(t-1).sub(1))||n.lessThan(r.pow(t-1).mul(-1)))throw new Error("Value must be in range [-2^".concat(t-1,", 2^").concat(t-1,"-1]"));if(!n.isInteger())throw new Error("Value must be an integer");n.lessThan(0)&&(n=n.add(r.pow(t))),s="i".concat(t)}switch(e){case 2:return"".concat(n.toBinary()).concat(s);case 8:return"".concat(n.toOctal()).concat(s);case 16:return"".concat(n.toHexadecimal()).concat(s);default:throw new Error("Base ".concat(e," not supported "))}}function $_(n,e){if(typeof e=="function")return e(n);if(!n.isFinite())return n.isNaN()?"NaN":n.gt(0)?"Infinity":"-Infinity";var{notation:t,precision:i,wordSize:r}=Tc(e);switch(t){case"fixed":return Y_(n,i);case"exponential":return gl(n,i);case"engineering":return q_(n,i);case"bin":return Va(n,2,r);case"oct":return Va(n,8,r);case"hex":return Va(n,16,r);case"auto":{var s=vl(e==null?void 0:e.lowerExp,-3),a=vl(e==null?void 0:e.upperExp,5);if(n.isZero())return"0";var o,u=n.toSignificantDigits(i),c=u.e;return c>=s&&c<a?o=u.toFixed():o=gl(n,i),o.replace(/((\.\d*?)(0+))($|e)/,function(){var l=arguments[2],h=arguments[4];return l!=="."?l+h:h})}default:throw new Error('Unknown notation "'+t+'". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.')}}function q_(n,e){var t=n.e,i=t%3===0?t:t<0?t-3-t%3:t-t%3,r=n.mul(Math.pow(10,-i)),s=r.toPrecision(e);if(s.includes("e")){var a=n.constructor;s=new a(s).toFixed()}return s+"e"+(t>=0?"+":"")+i.toString()}function gl(n,e){return e!==void 0?n.toExponential(e-1):n.toExponential()}function Y_(n,e){return n.toFixed(e)}function vl(n,e){return dt(n)?n:yt(n)?n.toNumber():e}function kt(n,e){var t=Z_(n,e);return e&&typeof e=="object"&&"truncate"in e&&t.length>e.truncate?t.substring(0,e.truncate-3)+"...":t}function Z_(n,e){if(typeof n=="number")return Ro(n,e);if(yt(n))return $_(n,e);if(K_(n))return!e||e.fraction!=="decimal"?"".concat(n.s*n.n,"/").concat(n.d):n.toString();if(Array.isArray(n))return Gc(n,e);if(Cn(n))return _l(n);if(typeof n=="function")return n.syntax?String(n.syntax):"function";if(n&&typeof n=="object"){if(typeof n.format=="function")return n.format(e);if(n&&n.toString(e)!=={}.toString())return n.toString(e);var t=Object.keys(n).map(i=>_l(i)+": "+kt(n[i],e));return"{"+t.join(", ")+"}"}return String(n)}function _l(n){for(var e=String(n),t="",i=0;i<e.length;){var r=e.charAt(i);t+=r in xl?xl[r]:r,i++}return'"'+t+'"'}var xl={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t"};function Gc(n,e){if(Array.isArray(n)){for(var t="[",i=n.length,r=0;r<i;r++)r!==0&&(t+=", "),t+=Gc(n[r],e);return t+="]",t}else return kt(n,e)}function K_(n){return n&&typeof n=="object"&&typeof n.s=="bigint"&&typeof n.n=="bigint"&&typeof n.d=="bigint"||!1}function ut(n,e,t){if(!(this instanceof ut))throw new SyntaxError("Constructor must be called with the new operator");this.actual=n,this.expected=e,this.relation=t,this.message="Dimension mismatch ("+(Array.isArray(n)?"["+n.join(", ")+"]":n)+" "+(this.relation||"!=")+" "+(Array.isArray(e)?"["+e.join(", ")+"]":e)+")",this.stack=new Error().stack}ut.prototype=new RangeError;ut.prototype.constructor=RangeError;ut.prototype.name="DimensionError";ut.prototype.isDimensionError=!0;function Ii(n,e,t){if(!(this instanceof Ii))throw new SyntaxError("Constructor must be called with the new operator");this.index=n,arguments.length<3?(this.min=0,this.max=e):(this.min=e,this.max=t),this.min!==void 0&&this.index<this.min?this.message="Index out of range ("+this.index+" < "+this.min+")":this.max!==void 0&&this.index>=this.max?this.message="Index out of range ("+this.index+" > "+(this.max-1)+")":this.message="Index out of range ("+this.index+")",this.stack=new Error().stack}Ii.prototype=new RangeError;Ii.prototype.constructor=RangeError;Ii.prototype.name="IndexError";Ii.prototype.isIndexError=!0;function Qt(n){for(var e=[];Array.isArray(n);)e.push(n.length),n=n[0];return e}function kc(n,e,t){var i,r=n.length;if(r!==e[t])throw new ut(r,e[t]);if(t<e.length-1){var s=t+1;for(i=0;i<r;i++){var a=n[i];if(!Array.isArray(a))throw new ut(e.length-1,e.length,"<");kc(n[i],e,s)}}else for(i=0;i<r;i++)if(Array.isArray(n[i]))throw new ut(e.length+1,e.length,">")}function El(n,e){var t=e.length===0;if(t){if(Array.isArray(n))throw new ut(n.length,0)}else kc(n,e,0)}function Dt(n,e){if(n!==void 0){if(!dt(n)||!St(n))throw new TypeError("Index must be an integer (value: "+n+")");if(n<0||typeof e=="number"&&n>=e)throw new Ii(n,e)}}function Oo(n,e,t){if(!Array.isArray(e))throw new TypeError("Array expected");if(e.length===0)throw new Error("Resizing to scalar is not supported");e.forEach(function(r){if(!dt(r)||!St(r)||r<0)throw new TypeError("Invalid size, must contain positive integers (size: "+kt(e)+")")}),(dt(n)||yt(n))&&(n=[n]);var i=t!==void 0?t:0;return zo(n,e,0,i),n}function zo(n,e,t,i){var r,s,a=n.length,o=e[t],u=Math.min(a,o);if(n.length=o,t<e.length-1){var c=t+1;for(r=0;r<u;r++)s=n[r],Array.isArray(s)||(s=[s],n[r]=s),zo(s,e,c,i);for(r=u;r<o;r++)s=[],n[r]=s,zo(s,e,c,i)}else{for(r=0;r<u;r++)for(;Array.isArray(n[r]);)n[r]=n[r][0];for(r=u;r<o;r++)n[r]=i}}function Wc(n,e){var t=j_(n),i=t.length;if(!Array.isArray(n)||!Array.isArray(e))throw new TypeError("Array expected");if(e.length===0)throw new ut(0,i,"!=");e=ru(e,i);var r=Xc(e);if(i!==r)throw new ut(r,i,"!=");try{return J_(t,e)}catch(s){throw s instanceof ut?new ut(r,i,"!="):s}}function ru(n,e){var t=Xc(n),i=n.slice(),r=-1,s=n.indexOf(r),a=n.indexOf(r,s+1)>=0;if(a)throw new Error("More than one wildcard in sizes");var o=s>=0,u=e%t===0;if(o)if(u)i[s]=-e/t;else throw new Error("Could not replace wildcard, since "+e+" is no multiple of "+-t);return i}function Xc(n){return n.reduce((e,t)=>e*t,1)}function J_(n,e){for(var t=n,i,r=e.length-1;r>0;r--){var s=e[r];i=[];for(var a=t.length/s,o=0;o<a;o++)i.push(t.slice(o*s,(o+1)*s));t=i}return t}function $c(n,e,t,i){var r=i||Qt(n);if(t)for(var s=0;s<t;s++)n=[n],r.unshift(1);for(n=qc(n,e,0);r.length<e;)r.push(1);return n}function qc(n,e,t){var i,r;if(Array.isArray(n)){var s=t+1;for(i=0,r=n.length;i<r;i++)n[i]=qc(n[i],e,s)}else for(var a=t;a<e;a++)n=[n];return n}function j_(n){if(!Array.isArray(n))return n;var e=[];return n.forEach(function t(i){Array.isArray(i)?i.forEach(t):e.push(i)}),e}function js(n,e){for(var t,i=0,r=0;r<n.length;r++){var s=n[r],a=Array.isArray(s);if(r===0&&a&&(i=s.length),a&&s.length!==i)return;var o=a?js(s,e):e(s);if(t===void 0)t=o;else if(t!==o)return"mixed"}return t}function Yc(n,e,t,i){if(i<t){if(n.length!==e.length)throw new ut(n.length,e.length);for(var r=[],s=0;s<n.length;s++)r[s]=Yc(n[s],e[s],t,i+1);return r}else return n.concat(e)}function Zc(){var n=Array.prototype.slice.call(arguments,0,-1),e=Array.prototype.slice.call(arguments,-1);if(n.length===1)return n[0];if(n.length>1)return n.slice(1).reduce(function(t,i){return Yc(t,i,e,0)},n[0]);throw new Error("Wrong number of arguments in function concat")}function Kc(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];for(var i=e.map(f=>f.length),r=Math.max(...i),s=new Array(r).fill(null),a=0;a<e.length;a++)for(var o=e[a],u=i[a],c=0;c<u;c++){var l=r-u+c;o[c]>s[l]&&(s[l]=o[c])}for(var h=0;h<e.length;h++)Jc(e[h],s);return s}function Jc(n,e){for(var t=e.length,i=n.length,r=0;r<i;r++){var s=t-i+r;if(n[r]<e[s]&&n[r]>1||n[r]>e[s])throw new Error("shape missmatch: missmatch is found in arg with shape (".concat(n,") not possible to broadcast dimension ").concat(i," with size ").concat(n[r]," to size ").concat(e[s]))}}function Ho(n,e){var t=Qt(n);if(fi(t,e))return n;Jc(t,e);var i=Kc(t,e),r=i.length,s=[...Array(r-t.length).fill(1),...t],a=ex(n);t.length<r&&(a=Wc(a,s),t=Qt(a));for(var o=0;o<r;o++)t[o]<i[o]&&(a=Q_(a,i[o],o),t=Qt(a));return a}function Q_(n,e,t){return Zc(...Array(e).fill(n),t)}function jc(n,e){if(!Array.isArray(n))throw new Error("Array expected");var t=Qt(n);if(e.length!==t.length)throw new ut(e.length,t.length);for(var i=0;i<e.length;i++)Dt(e[i],t[i]);return e.reduce((r,s)=>r[s],n)}function ex(n){return Gl([],n)}function zs(n,e,t){if(Ls.isTypedFunction(n)){var i=(e.isMatrix?e.size():Qt(e)).map(()=>0),r=e.isMatrix?e.get(i):jc(e,i),s=Object.keys(n.signatures).length===1,a=tx(n,r,i,e),o=s?Object.values(n.signatures)[0]:n;return a>=1&&a<=3?function(){for(var u=arguments.length,c=new Array(u),l=0;l<u;l++)c[l]=arguments[l];return yl(o,c.slice(0,a),t,n.name)}:function(){for(var u=arguments.length,c=new Array(u),l=0;l<u;l++)c[l]=arguments[l];return yl(o,c,t,n.name)}}return n}function tx(n,e,t,i){for(var r=[e,t,i],s=3;s>0;s--){var a=r.slice(0,s);if(Ls.resolve(n,a)!==null)return s}}function yl(n,e,t,i){try{return n(...e)}catch(r){nx(r,e,t,i)}}function nx(n,e,t,i){var r;if(n instanceof TypeError&&((r=n.data)===null||r===void 0?void 0:r.category)==="wrongType"){var s=[];throw s.push("value: ".concat(Zn(e[0]))),e.length>=2&&s.push("index: ".concat(Zn(e[1]))),e.length>=3&&s.push("array: ".concat(Zn(e[2]))),new TypeError("Function ".concat(t," cannot apply callback arguments ")+"".concat(i,"(").concat(s.join(", "),") at index ").concat(JSON.stringify(e[1])))}else throw new TypeError("Function ".concat(t," cannot apply callback arguments ")+"to function ".concat(i,": ").concat(n.message))}var ix="DenseMatrix",rx=["Matrix"],sx=Je(ix,rx,n=>{var{Matrix:e}=n;function t(l,h){if(!(this instanceof t))throw new SyntaxError("Constructor must be called with the new operator");if(h&&!Cn(h))throw new Error("Invalid datatype: "+h);if(Tt(l))l.type==="DenseMatrix"?(this._data=Et(l._data),this._size=Et(l._size),this._datatype=h||l._datatype):(this._data=l.toArray(),this._size=l.size(),this._datatype=h||l._datatype);else if(l&&mt(l.data)&&mt(l.size))this._data=l.data,this._size=l.size,El(this._data,this._size),this._datatype=h||l.datatype;else if(mt(l))this._data=c(l),this._size=Qt(this._data),El(this._data,this._size),this._datatype=h;else{if(l)throw new TypeError("Unsupported type of data ("+Zn(l)+")");this._data=[],this._size=[0],this._datatype=h}}t.prototype=new e,t.prototype.createDenseMatrix=function(l,h){return new t(l,h)},Object.defineProperty(t,"name",{value:"DenseMatrix"}),t.prototype.constructor=t,t.prototype.type="DenseMatrix",t.prototype.isDenseMatrix=!0,t.prototype.getDataType=function(){return js(this._data,Zn)},t.prototype.storage=function(){return"dense"},t.prototype.datatype=function(){return this._datatype},t.prototype.create=function(l,h){return new t(l,h)},t.prototype.subset=function(l,h,f){switch(arguments.length){case 1:return i(this,l);case 2:case 3:return s(this,l,h,f);default:throw new SyntaxError("Wrong number of arguments")}},t.prototype.get=function(l){return jc(this._data,l)},t.prototype.set=function(l,h,f){if(!mt(l))throw new TypeError("Array expected");if(l.length<this._size.length)throw new ut(l.length,this._size.length,"<");var m,v,d,g=l.map(function(A){return A+1});u(this,g,f);var p=this._data;for(m=0,v=l.length-1;m<v;m++)d=l[m],Dt(d,p.length),p=p[d];return d=l[l.length-1],Dt(d,p.length),p[d]=h,this};function i(l,h){if(!eu(h))throw new TypeError("Invalid index");var f=h.isScalar();if(f)return l.get(h.min());var m=h.size();if(m.length!==l._size.length)throw new ut(m.length,l._size.length);for(var v=h.min(),d=h.max(),g=0,p=l._size.length;g<p;g++)Dt(v[g],l._size[g]),Dt(d[g],l._size[g]);return new t(r(l._data,h,m.length,0),l._datatype)}function r(l,h,f,m){var v=m===f-1,d=h.dimension(m);return v?d.map(function(g){return Dt(g,l.length),l[g]}).valueOf():d.map(function(g){Dt(g,l.length);var p=l[g];return r(p,h,f,m+1)}).valueOf()}function s(l,h,f,m){if(!h||h.isIndex!==!0)throw new TypeError("Invalid index");var v=h.size(),d=h.isScalar(),g;if(Tt(f)?(g=f.size(),f=f.valueOf()):g=Qt(f),d){if(g.length!==0)throw new TypeError("Scalar expected");l.set(h.min(),f,m)}else{if(!fi(g,v))try{g.length===0?f=Ho([f],v):f=Ho(f,v),g=Qt(f)}catch{}if(v.length<l._size.length)throw new ut(v.length,l._size.length,"<");if(g.length<v.length){for(var p=0,A=0;v[p]===1&&g[p]===1;)p++;for(;v[p]===1;)A++,p++;f=$c(f,v.length,A,g)}if(!fi(v,g))throw new ut(v,g,">");var _=h.max().map(function(E){return E+1});u(l,_,m);var M=v.length,D=0;a(l._data,h,f,M,D)}return l}function a(l,h,f,m,v){var d=v===m-1,g=h.dimension(v);d?g.forEach(function(p,A){Dt(p),l[p]=f[A[0]]}):g.forEach(function(p,A){Dt(p),a(l[p],h,f[A[0]],m,v+1)})}t.prototype.resize=function(l,h,f){if(!Ns(l))throw new TypeError("Array or Matrix expected");var m=l.valueOf().map(d=>Array.isArray(d)&&d.length===1?d[0]:d),v=f?this.clone():this;return o(v,m,h)};function o(l,h,f){if(h.length===0){for(var m=l._data;mt(m);)m=m[0];return m}return l._size=h.slice(0),l._data=Oo(l._data,l._size,f),l}t.prototype.reshape=function(l,h){var f=h?this.clone():this;f._data=Wc(f._data,l);var m=f._size.reduce((v,d)=>v*d);return f._size=ru(l,m),f};function u(l,h,f){for(var m=l._size.slice(0),v=!1;m.length<h.length;)m.push(0),v=!0;for(var d=0,g=h.length;d<g;d++)h[d]>m[d]&&(m[d]=h[d],v=!0);v&&o(l,m,f)}t.prototype.clone=function(){var l=new t({data:Et(this._data),size:Et(this._size),datatype:this._datatype});return l},t.prototype.size=function(){return this._size.slice(0)},t.prototype._forEach=function(l){var h=this,f=h.size();if(f.length===1){for(var m=0;m<f[0];m++)l(h._data,m,[m]);return}var v=Array(f.length).fill(0),d=Array(f.length-1),g=d.length-1;d[0]=h._data[0];for(var p=0;p<g;p++)d[p+1]=d[p][0];for(v[g]=-1;;){var A=void 0;for(A=g;A>=0;A--){if(v[A]++,v[A]===f[A]){v[A]=0;continue}d[A]=A===0?h._data[v[A]]:d[A-1][v[A]];for(var _=A;_<g;_++)d[_+1]=d[_][0];for(var M=0;M<f[d.length];M++)v[d.length]=M,l(d[g],M,v.slice(0));break}if(A===-1)break}},t.prototype.map=function(l){var h=this,f=new t(h),m=zs(l,h._data,"map");return f._forEach(function(v,d,g){v[d]=m(v[d],g,h)}),f},t.prototype.forEach=function(l){var h=this,f=zs(l,h._data,"map");h._forEach(function(m,v,d){f(m[v],d,h)})},t.prototype[Symbol.iterator]=function*(){var l=function*(f,m){if(mt(f))for(var v=0;v<f.length;v++)yield*l(f[v],m.concat(v));else yield{value:f,index:m}};yield*l(this._data,[])},t.prototype.rows=function(){var l=[],h=this.size();if(h.length!==2)throw new TypeError("Rows can only be returned for a 2D matrix.");var f=this._data;for(var m of f)l.push(new t([m],this._datatype));return l},t.prototype.columns=function(){var l=this,h=[],f=this.size();if(f.length!==2)throw new TypeError("Rows can only be returned for a 2D matrix.");for(var m=this._data,v=function(p){var A=m.map(_=>[_[p]]);h.push(new t(A,l._datatype))},d=0;d<f[1];d++)v(d);return h},t.prototype.toArray=function(){return Et(this._data)},t.prototype.valueOf=function(){return this._data},t.prototype.format=function(l){return kt(this._data,l)},t.prototype.toString=function(){return kt(this._data)},t.prototype.toJSON=function(){return{mathjs:"DenseMatrix",data:this._data,size:this._size,datatype:this._datatype}},t.prototype.diagonal=function(l){if(l){if(yt(l)&&(l=l.toNumber()),!dt(l)||!St(l))throw new TypeError("The parameter k must be an integer number")}else l=0;for(var h=l>0?l:0,f=l<0?-l:0,m=this._size[0],v=this._size[1],d=Math.min(m-f,v-h),g=[],p=0;p<d;p++)g[p]=this._data[p+f][p+h];return new t({data:g,size:[d],datatype:this._datatype})},t.diagonal=function(l,h,f,m){if(!mt(l))throw new TypeError("Array expected, size parameter");if(l.length!==2)throw new Error("Only two dimensions matrix are supported");if(l=l.map(function(w){if(yt(w)&&(w=w.toNumber()),!dt(w)||!St(w)||w<1)throw new Error("Size values must be positive integers");return w}),f){if(yt(f)&&(f=f.toNumber()),!dt(f)||!St(f))throw new TypeError("The parameter k must be an integer number")}else f=0;var v=f>0?f:0,d=f<0?-f:0,g=l[0],p=l[1],A=Math.min(g-d,p-v),_;if(mt(h)){if(h.length!==A)throw new Error("Invalid value array length");_=function(T){return h[T]}}else if(Tt(h)){var M=h.size();if(M.length!==1||M[0]!==A)throw new Error("Invalid matrix length");_=function(T){return h.get([T])}}else _=function(){return h};m||(m=yt(_(0))?_(0).mul(0):0);var D=[];if(l.length>0){D=Oo(D,l,m);for(var E=0;E<A;E++)D[E+d][E+v]=_(E)}return new t({data:D,size:[g,p]})},t.fromJSON=function(l){return new t(l)},t.prototype.swapRows=function(l,h){if(!dt(l)||!St(l)||!dt(h)||!St(h))throw new Error("Row index must be positive integers");if(this._size.length!==2)throw new Error("Only two dimensional matrix is supported");return Dt(l,this._size[0]),Dt(h,this._size[0]),t._swapRows(l,h,this._data),this},t._swapRows=function(l,h,f){var m=f[l];f[l]=f[h],f[h]=m};function c(l){return Tt(l)?c(l.valueOf()):mt(l)?l.map(c):l}return t},{isClass:!0});function Qs(n,e,t){return n&&typeof n.map=="function"?n.map(function(i){return Qs(i,e)}):e(n)}var Ml="isInteger",ax=["typed"],ox=Je(Ml,ax,n=>{var{typed:e}=n;return e(Ml,{number:St,BigNumber:function(i){return i.isInt()},bigint:function(i){return!0},Fraction:function(i){return i.d===1n},"Array | Matrix":e.referToSelf(t=>i=>Qs(i,t))})}),ux="number",su="number, number";function Qc(n,e){return n+e}Qc.signature=su;function eh(n,e){return n-e}eh.signature=su;function th(n,e){return n*e}th.signature=su;function nh(n){return-n}nh.signature=ux;function ih(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1e-9,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;if(t<=0)throw new Error("Relative tolerance must be greater than 0");if(i<0)throw new Error("Absolute tolerance must be at least 0");return n.isNaN()||e.isNaN()?!1:!n.isFinite()||!e.isFinite()?n.eq(e):n.eq(e)?!0:n.minus(e).abs().lte(n.constructor.max(n.constructor.max(n.abs(),e.abs()).mul(t),i))}function lx(n,e,t,i){return Nr(n.re,e.re,t,i)&&Nr(n.im,e.im,t,i)}var rh=Je("compareUnits",["typed"],n=>{var{typed:e}=n;return{"Unit, Unit":e.referToSelf(t=>(i,r)=>{if(!i.equalBase(r))throw new Error("Cannot compare units with different base");return e.find(t,[i.valueType(),r.valueType()])(i.value,r.value)})}}),Hs="equalScalar",cx=["typed","config"],hx=Je(Hs,cx,n=>{var{typed:e,config:t}=n,i=rh({typed:e});return e(Hs,{"boolean, boolean":function(s,a){return s===a},"number, number":function(s,a){return Nr(s,a,t.relTol,t.absTol)},"BigNumber, BigNumber":function(s,a){return s.eq(a)||ih(s,a,t.relTol,t.absTol)},"bigint, bigint":function(s,a){return s===a},"Fraction, Fraction":function(s,a){return s.equals(a)},"Complex, Complex":function(s,a){return lx(s,a,t.relTol,t.absTol)}},i)});Je(Hs,["typed","config"],n=>{var{typed:e,config:t}=n;return e(Hs,{"number, number":function(r,s){return Nr(r,s,t.relTol,t.absTol)}})});var fx="SparseMatrix",dx=["typed","equalScalar","Matrix"],px=Je(fx,dx,n=>{var{typed:e,equalScalar:t,Matrix:i}=n;function r(d,g){if(!(this instanceof r))throw new SyntaxError("Constructor must be called with the new operator");if(g&&!Cn(g))throw new Error("Invalid datatype: "+g);if(Tt(d))s(this,d,g);else if(d&&mt(d.index)&&mt(d.ptr)&&mt(d.size))this._values=d.values,this._index=d.index,this._ptr=d.ptr,this._size=d.size,this._datatype=g||d.datatype;else if(mt(d))a(this,d,g);else{if(d)throw new TypeError("Unsupported type of data ("+Zn(d)+")");this._values=[],this._index=[],this._ptr=[0],this._size=[0,0],this._datatype=g}}function s(d,g,p){g.type==="SparseMatrix"?(d._values=g._values?Et(g._values):void 0,d._index=Et(g._index),d._ptr=Et(g._ptr),d._size=Et(g._size),d._datatype=p||g._datatype):a(d,g.valueOf(),p||g._datatype)}function a(d,g,p){d._values=[],d._index=[],d._ptr=[],d._datatype=p;var A=g.length,_=0,M=t,D=0;if(Cn(p)&&(M=e.find(t,[p,p])||t,D=e.convert(0,p)),A>0){var E=0;do{d._ptr.push(d._index.length);for(var w=0;w<A;w++){var T=g[w];if(mt(T)){if(E===0&&_<T.length&&(_=T.length),E<T.length){var x=T[E];M(x,D)||(d._values.push(x),d._index.push(w))}}else E===0&&_<1&&(_=1),M(T,D)||(d._values.push(T),d._index.push(w))}E++}while(E<_)}d._ptr.push(d._index.length),d._size=[A,_]}r.prototype=new i,r.prototype.createSparseMatrix=function(d,g){return new r(d,g)},Object.defineProperty(r,"name",{value:"SparseMatrix"}),r.prototype.constructor=r,r.prototype.type="SparseMatrix",r.prototype.isSparseMatrix=!0,r.prototype.getDataType=function(){return js(this._values,Zn)},r.prototype.storage=function(){return"sparse"},r.prototype.datatype=function(){return this._datatype},r.prototype.create=function(d,g){return new r(d,g)},r.prototype.density=function(){var d=this._size[0],g=this._size[1];return d!==0&&g!==0?this._index.length/(d*g):0},r.prototype.subset=function(d,g,p){if(!this._values)throw new Error("Cannot invoke subset on a Pattern only matrix");switch(arguments.length){case 1:return o(this,d);case 2:case 3:return u(this,d,g,p);default:throw new SyntaxError("Wrong number of arguments")}};function o(d,g){if(!eu(g))throw new TypeError("Invalid index");var p=g.isScalar();if(p)return d.get(g.min());var A=g.size();if(A.length!==d._size.length)throw new ut(A.length,d._size.length);var _,M,D,E,w=g.min(),T=g.max();for(_=0,M=d._size.length;_<M;_++)Dt(w[_],d._size[_]),Dt(T[_],d._size[_]);var x=d._values,y=d._index,F=d._ptr,H=g.dimension(0),B=g.dimension(1),z=[],$=[];H.forEach(function(ne,se){$[ne]=se[0],z[ne]=!0});var U=x?[]:void 0,J=[],G=[];return B.forEach(function(ne){for(G.push(J.length),D=F[ne],E=F[ne+1];D<E;D++)_=y[D],z[_]===!0&&(J.push($[_]),U&&U.push(x[D]))}),G.push(J.length),new r({values:U,index:J,ptr:G,size:A,datatype:d._datatype})}function u(d,g,p,A){if(!g||g.isIndex!==!0)throw new TypeError("Invalid index");var _=g.size(),M=g.isScalar(),D;if(Tt(p)?(D=p.size(),p=p.toArray()):D=Qt(p),M){if(D.length!==0)throw new TypeError("Scalar expected");d.set(g.min(),p,A)}else{if(_.length!==1&&_.length!==2)throw new ut(_.length,d._size.length,"<");if(D.length<_.length){for(var E=0,w=0;_[E]===1&&D[E]===1;)E++;for(;_[E]===1;)w++,E++;p=$c(p,_.length,w,D)}if(!fi(_,D))throw new ut(_,D,">");if(_.length===1){var T=g.dimension(0);T.forEach(function(F,H){Dt(F),d.set([F,0],p[H[0]],A)})}else{var x=g.dimension(0),y=g.dimension(1);x.forEach(function(F,H){Dt(F),y.forEach(function(B,z){Dt(B),d.set([F,B],p[H[0]][z[0]],A)})})}}return d}r.prototype.get=function(d){if(!mt(d))throw new TypeError("Array expected");if(d.length!==this._size.length)throw new ut(d.length,this._size.length);if(!this._values)throw new Error("Cannot invoke get on a Pattern only matrix");var g=d[0],p=d[1];Dt(g,this._size[0]),Dt(p,this._size[1]);var A=c(g,this._ptr[p],this._ptr[p+1],this._index);return A<this._ptr[p+1]&&this._index[A]===g?this._values[A]:0},r.prototype.set=function(d,g,p){if(!mt(d))throw new TypeError("Array expected");if(d.length!==this._size.length)throw new ut(d.length,this._size.length);if(!this._values)throw new Error("Cannot invoke set on a Pattern only matrix");var A=d[0],_=d[1],M=this._size[0],D=this._size[1],E=t,w=0;Cn(this._datatype)&&(E=e.find(t,[this._datatype,this._datatype])||t,w=e.convert(0,this._datatype)),(A>M-1||_>D-1)&&(f(this,Math.max(A+1,M),Math.max(_+1,D),p),M=this._size[0],D=this._size[1]),Dt(A,M),Dt(_,D);var T=c(A,this._ptr[_],this._ptr[_+1],this._index);return T<this._ptr[_+1]&&this._index[T]===A?E(g,w)?l(T,_,this._values,this._index,this._ptr):this._values[T]=g:E(g,w)||h(T,A,_,g,this._values,this._index,this._ptr),this};function c(d,g,p,A){if(p-g===0)return p;for(var _=g;_<p;_++)if(A[_]===d)return _;return g}function l(d,g,p,A,_){p.splice(d,1),A.splice(d,1);for(var M=g+1;M<_.length;M++)_[M]--}function h(d,g,p,A,_,M,D){_.splice(d,0,A),M.splice(d,0,g);for(var E=p+1;E<D.length;E++)D[E]++}r.prototype.resize=function(d,g,p){if(!Ns(d))throw new TypeError("Array or Matrix expected");var A=d.valueOf().map(M=>Array.isArray(M)&&M.length===1?M[0]:M);if(A.length!==2)throw new Error("Only two dimensions matrix are supported");A.forEach(function(M){if(!dt(M)||!St(M)||M<0)throw new TypeError("Invalid size, must contain positive integers (size: "+kt(A)+")")});var _=p?this.clone():this;return f(_,A[0],A[1],g)};function f(d,g,p,A){var _=A||0,M=t,D=0;Cn(d._datatype)&&(M=e.find(t,[d._datatype,d._datatype])||t,D=e.convert(0,d._datatype),_=e.convert(_,d._datatype));var E=!M(_,D),w=d._size[0],T=d._size[1],x,y,F;if(p>T){for(y=T;y<p;y++)if(d._ptr[y]=d._values.length,E)for(x=0;x<w;x++)d._values.push(_),d._index.push(x);d._ptr[p]=d._values.length}else p<T&&(d._ptr.splice(p+1,T-p),d._values.splice(d._ptr[p],d._values.length),d._index.splice(d._ptr[p],d._index.length));if(T=p,g>w){if(E){var H=0;for(y=0;y<T;y++){d._ptr[y]=d._ptr[y]+H,F=d._ptr[y+1]+H;var B=0;for(x=w;x<g;x++,B++)d._values.splice(F+B,0,_),d._index.splice(F+B,0,x),H++}d._ptr[T]=d._values.length}}else if(g<w){var z=0;for(y=0;y<T;y++){d._ptr[y]=d._ptr[y]-z;var $=d._ptr[y],U=d._ptr[y+1]-z;for(F=$;F<U;F++)x=d._index[F],x>g-1&&(d._values.splice(F,1),d._index.splice(F,1),z++)}d._ptr[y]=d._values.length}return d._size[0]=g,d._size[1]=p,d}r.prototype.reshape=function(d,g){if(!mt(d))throw new TypeError("Array expected");if(d.length!==2)throw new Error("Sparse matrices can only be reshaped in two dimensions");d.forEach(function(ne){if(!dt(ne)||!St(ne)||ne<=-2||ne===0)throw new TypeError("Invalid size, must contain positive integers or -1 (size: "+kt(d)+")")});var p=this._size[0]*this._size[1];d=ru(d,p);var A=d[0]*d[1];if(p!==A)throw new Error("Reshaping sparse matrix will result in the wrong number of elements");var _=g?this.clone():this;if(this._size[0]===d[0]&&this._size[1]===d[1])return _;for(var M=[],D=0;D<_._ptr.length;D++)for(var E=0;E<_._ptr[D+1]-_._ptr[D];E++)M.push(D);for(var w=_._values.slice(),T=_._index.slice(),x=0;x<_._index.length;x++){var y=T[x],F=M[x],H=y*_._size[1]+F;M[x]=H%d[1],T[x]=Math.floor(H/d[1])}_._values.length=0,_._index.length=0,_._ptr.length=d[1]+1,_._size=d.slice();for(var B=0;B<_._ptr.length;B++)_._ptr[B]=0;for(var z=0;z<w.length;z++){var $=T[z],U=M[z],J=w[z],G=c($,_._ptr[U],_._ptr[U+1],_._index);h(G,$,U,J,_._values,_._index,_._ptr)}return _},r.prototype.clone=function(){var d=new r({values:this._values?Et(this._values):void 0,index:Et(this._index),ptr:Et(this._ptr),size:Et(this._size),datatype:this._datatype});return d},r.prototype.size=function(){return this._size.slice(0)},r.prototype.map=function(d,g){if(!this._values)throw new Error("Cannot invoke map on a Pattern only matrix");var p=this,A=this._size[0],_=this._size[1],M=zs(d,p,"map"),D=function(w,T,x){return M(w,[T,x],p)};return m(this,0,A-1,0,_-1,D,g)};function m(d,g,p,A,_,M,D){var E=[],w=[],T=[],x=t,y=0;Cn(d._datatype)&&(x=e.find(t,[d._datatype,d._datatype])||t,y=e.convert(0,d._datatype));for(var F=function(Ce,ee,ue){var de=M(Ce,ee,ue);x(de,y)||(E.push(de),w.push(ee))},H=A;H<=_;H++){T.push(E.length);var B=d._ptr[H],z=d._ptr[H+1];if(D)for(var $=B;$<z;$++){var U=d._index[$];U>=g&&U<=p&&F(d._values[$],U-g,H-A)}else{for(var J={},G=B;G<z;G++){var ne=d._index[G];J[ne]=d._values[G]}for(var se=g;se<=p;se++){var he=se in J?J[se]:0;F(he,se-g,H-A)}}}return T.push(E.length),new r({values:E,index:w,ptr:T,size:[p-g+1,_-A+1]})}r.prototype.forEach=function(d,g){if(!this._values)throw new Error("Cannot invoke forEach on a Pattern only matrix");for(var p=this,A=this._size[0],_=this._size[1],M=zs(d,p,"forEach"),D=0;D<_;D++){var E=this._ptr[D],w=this._ptr[D+1];if(g)for(var T=E;T<w;T++){var x=this._index[T];M(this._values[T],[x,D],p)}else{for(var y={},F=E;F<w;F++){var H=this._index[F];y[H]=this._values[F]}for(var B=0;B<A;B++){var z=B in y?y[B]:0;M(z,[B,D],p)}}}},r.prototype[Symbol.iterator]=function*(){if(!this._values)throw new Error("Cannot iterate a Pattern only matrix");for(var d=this._size[1],g=0;g<d;g++)for(var p=this._ptr[g],A=this._ptr[g+1],_=p;_<A;_++){var M=this._index[_];yield{value:this._values[_],index:[M,g]}}},r.prototype.toArray=function(){return v(this._values,this._index,this._ptr,this._size,!0)},r.prototype.valueOf=function(){return v(this._values,this._index,this._ptr,this._size,!1)};function v(d,g,p,A,_){var M=A[0],D=A[1],E=[],w,T;for(w=0;w<M;w++)for(E[w]=[],T=0;T<D;T++)E[w][T]=0;for(T=0;T<D;T++)for(var x=p[T],y=p[T+1],F=x;F<y;F++)w=g[F],E[w][T]=d?_?Et(d[F]):d[F]:1;return E}return r.prototype.format=function(d){for(var g=this._size[0],p=this._size[1],A=this.density(),_="Sparse Matrix ["+kt(g,d)+" x "+kt(p,d)+"] density: "+kt(A,d)+`
`,M=0;M<p;M++)for(var D=this._ptr[M],E=this._ptr[M+1],w=D;w<E;w++){var T=this._index[w];_+=`
    (`+kt(T,d)+", "+kt(M,d)+") ==> "+(this._values?kt(this._values[w],d):"X")}return _},r.prototype.toString=function(){return kt(this.toArray())},r.prototype.toJSON=function(){return{mathjs:"SparseMatrix",values:this._values,index:this._index,ptr:this._ptr,size:this._size,datatype:this._datatype}},r.prototype.diagonal=function(d){if(d){if(yt(d)&&(d=d.toNumber()),!dt(d)||!St(d))throw new TypeError("The parameter k must be an integer number")}else d=0;var g=d>0?d:0,p=d<0?-d:0,A=this._size[0],_=this._size[1],M=Math.min(A-p,_-g),D=[],E=[],w=[];w[0]=0;for(var T=g;T<_&&D.length<M;T++)for(var x=this._ptr[T],y=this._ptr[T+1],F=x;F<y;F++){var H=this._index[F];if(H===T-g+p){D.push(this._values[F]),E[D.length-1]=H-p;break}}return w.push(D.length),new r({values:D,index:E,ptr:w,size:[M,1]})},r.fromJSON=function(d){return new r(d)},r.diagonal=function(d,g,p,A,_){if(!mt(d))throw new TypeError("Array expected, size parameter");if(d.length!==2)throw new Error("Only two dimensions matrix are supported");if(d=d.map(function(ne){if(yt(ne)&&(ne=ne.toNumber()),!dt(ne)||!St(ne)||ne<1)throw new Error("Size values must be positive integers");return ne}),p){if(yt(p)&&(p=p.toNumber()),!dt(p)||!St(p))throw new TypeError("The parameter k must be an integer number")}else p=0;var M=t,D=0;Cn(_)&&(M=e.find(t,[_,_])||t,D=e.convert(0,_));var E=p>0?p:0,w=p<0?-p:0,T=d[0],x=d[1],y=Math.min(T-w,x-E),F;if(mt(g)){if(g.length!==y)throw new Error("Invalid value array length");F=function(se){return g[se]}}else if(Tt(g)){var H=g.size();if(H.length!==1||H[0]!==y)throw new Error("Invalid matrix length");F=function(se){return g.get([se])}}else F=function(){return g};for(var B=[],z=[],$=[],U=0;U<x;U++){$.push(B.length);var J=U-E;if(J>=0&&J<y){var G=F(J);M(G,D)||(z.push(J+w),B.push(G))}}return $.push(B.length),new r({values:B,index:z,ptr:$,size:[T,x]})},r.prototype.swapRows=function(d,g){if(!dt(d)||!St(d)||!dt(g)||!St(g))throw new Error("Row index must be positive integers");if(this._size.length!==2)throw new Error("Only two dimensional matrix is supported");return Dt(d,this._size[0]),Dt(g,this._size[0]),r._swapRows(d,g,this._size[1],this._values,this._index,this._ptr),this},r._forEachRow=function(d,g,p,A,_){for(var M=A[d],D=A[d+1],E=M;E<D;E++)_(p[E],g[E])},r._swapRows=function(d,g,p,A,_,M){for(var D=0;D<p;D++){var E=M[D],w=M[D+1],T=c(d,E,w,_),x=c(g,E,w,_);if(T<w&&x<w&&_[T]===d&&_[x]===g){if(A){var y=A[T];A[T]=A[x],A[x]=y}continue}if(T<w&&_[T]===d&&(x>=w||_[x]!==g)){var F=A?A[T]:void 0;_.splice(x,0,g),A&&A.splice(x,0,F),_.splice(x<=T?T+1:T,1),A&&A.splice(x<=T?T+1:T,1);continue}if(x<w&&_[x]===g&&(T>=w||_[T]!==d)){var H=A?A[x]:void 0;_.splice(T,0,d),A&&A.splice(T,0,H),_.splice(T<=x?x+1:x,1),A&&A.splice(T<=x?x+1:x,1)}}},r},{isClass:!0}),Dl="matrix",mx=["typed","Matrix","DenseMatrix","SparseMatrix"],gx=Je(Dl,mx,n=>{var{typed:e,Matrix:t,DenseMatrix:i,SparseMatrix:r}=n;return e(Dl,{"":function(){return s([])},string:function(o){return s([],o)},"string, string":function(o,u){return s([],o,u)},Array:function(o){return s(o)},Matrix:function(o){return s(o,o.storage())},"Array | Matrix, string":s,"Array | Matrix, string, string":s});function s(a,o,u){if(o==="dense"||o==="default"||o===void 0)return new i(a,u);if(o==="sparse")return new r(a,u);throw new TypeError("Unknown matrix type "+JSON.stringify(o)+".")}}),Sl="unaryMinus",vx=["typed"],_x=Je(Sl,vx,n=>{var{typed:e}=n;return e(Sl,{number:nh,"Complex | BigNumber | Fraction":t=>t.neg(),bigint:t=>-t,Unit:e.referToSelf(t=>i=>{var r=i.clone();return r.value=e.find(t,r.valueType())(i.value),r}),"Array | Matrix":e.referToSelf(t=>i=>Qs(i,t))})}),Al="addScalar",xx=["typed"],Ex=Je(Al,xx,n=>{var{typed:e}=n;return e(Al,{"number, number":Qc,"Complex, Complex":function(i,r){return i.add(r)},"BigNumber, BigNumber":function(i,r){return i.plus(r)},"bigint, bigint":function(i,r){return i+r},"Fraction, Fraction":function(i,r){return i.add(r)},"Unit, Unit":e.referToSelf(t=>(i,r)=>{if(i.value===null||i.value===void 0)throw new Error("Parameter x contains a unit with undefined value");if(r.value===null||r.value===void 0)throw new Error("Parameter y contains a unit with undefined value");if(!i.equalBase(r))throw new Error("Units do not match");var s=i.clone();return s.value=e.find(t,[s.valueType(),r.valueType()])(s.value,r.value),s.fixPrefix=!1,s})})}),wl="subtractScalar",yx=["typed"],Mx=Je(wl,yx,n=>{var{typed:e}=n;return e(wl,{"number, number":eh,"Complex, Complex":function(i,r){return i.sub(r)},"BigNumber, BigNumber":function(i,r){return i.minus(r)},"bigint, bigint":function(i,r){return i-r},"Fraction, Fraction":function(i,r){return i.sub(r)},"Unit, Unit":e.referToSelf(t=>(i,r)=>{if(i.value===null||i.value===void 0)throw new Error("Parameter x contains a unit with undefined value");if(r.value===null||r.value===void 0)throw new Error("Parameter y contains a unit with undefined value");if(!i.equalBase(r))throw new Error("Units do not match");var s=i.clone();return s.value=e.find(t,[s.valueType(),r.valueType()])(s.value,r.value),s.fixPrefix=!1,s})})}),Dx="matAlgo11xS0s",Sx=["typed","equalScalar"],Ax=Je(Dx,Sx,n=>{var{typed:e,equalScalar:t}=n;return function(r,s,a,o){var u=r._values,c=r._index,l=r._ptr,h=r._size,f=r._datatype;if(!u)throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");var m=h[0],v=h[1],d,g=t,p=0,A=a;typeof f=="string"&&(d=f,g=e.find(t,[d,d]),p=e.convert(0,d),s=e.convert(s,d),A=e.find(a,[d,d]));for(var _=[],M=[],D=[],E=0;E<v;E++){D[E]=M.length;for(var w=l[E],T=l[E+1],x=w;x<T;x++){var y=c[x],F=o?A(s,u[x]):A(u[x],s);g(F,p)||(M.push(y),_.push(F))}}return D[v]=M.length,r.createSparseMatrix({values:_,index:M,ptr:D,size:[m,v],datatype:d})}}),wx="matAlgo12xSfs",bx=["typed","DenseMatrix"],sh=Je(wx,bx,n=>{var{typed:e,DenseMatrix:t}=n;return function(r,s,a,o){var u=r._values,c=r._index,l=r._ptr,h=r._size,f=r._datatype;if(!u)throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");var m=h[0],v=h[1],d,g=a;typeof f=="string"&&(d=f,s=e.convert(s,d),g=e.find(a,[d,d]));for(var p=[],A=[],_=[],M=0;M<v;M++){for(var D=M+1,E=l[M],w=l[M+1],T=E;T<w;T++){var x=c[T];A[x]=u[T],_[x]=D}for(var y=0;y<m;y++)M===0&&(p[y]=[]),_[y]===D?p[y][M]=o?g(s,A[y]):g(A[y],s):p[y][M]=o?g(s,0):g(0,s)}return new t({data:p,size:[m,v],datatype:d})}}),Tx="matAlgo14xDs",Cx=["typed"],ah=Je(Tx,Cx,n=>{var{typed:e}=n;return function(r,s,a,o){var u=r._data,c=r._size,l=r._datatype,h,f=a;typeof l=="string"&&(h=l,s=e.convert(s,h),f=e.find(a,[h,h]));var m=c.length>0?t(f,0,c,c[0],u,s,o):[];return r.createDenseMatrix({data:m,size:Et(c),datatype:h})};function t(i,r,s,a,o,u,c){var l=[];if(r===s.length-1)for(var h=0;h<a;h++)l[h]=c?i(u,o[h]):i(o[h],u);else for(var f=0;f<a;f++)l[f]=t(i,r+1,s,s[r+1],o[f],u,c);return l}}),Fx="matAlgo03xDSf",Rx=["typed"],oh=Je(Fx,Rx,n=>{var{typed:e}=n;return function(i,r,s,a){var o=i._data,u=i._size,c=i._datatype||i.getDataType(),l=r._values,h=r._index,f=r._ptr,m=r._size,v=r._datatype||r._data===void 0?r._datatype:r.getDataType();if(u.length!==m.length)throw new ut(u.length,m.length);if(u[0]!==m[0]||u[1]!==m[1])throw new RangeError("Dimension mismatch. Matrix A ("+u+") must match Matrix B ("+m+")");if(!l)throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");var d=u[0],g=u[1],p,A=0,_=s;typeof c=="string"&&c===v&&c!=="mixed"&&(p=c,A=e.convert(0,p),_=e.find(s,[p,p]));for(var M=[],D=0;D<d;D++)M[D]=[];for(var E=[],w=[],T=0;T<g;T++){for(var x=T+1,y=f[T],F=f[T+1],H=y;H<F;H++){var B=h[H];E[B]=a?_(l[H],o[B][T]):_(o[B][T],l[H]),w[B]=x}for(var z=0;z<d;z++)w[z]===x?M[z][T]=E[z]:M[z][T]=a?_(A,o[z][T]):_(o[z][T],A)}return i.createDenseMatrix({data:M,size:[d,g],datatype:c===i._datatype&&v===r._datatype?p:void 0})}}),Px="matAlgo05xSfSf",Ix=["typed","equalScalar"],Nx=Je(Px,Ix,n=>{var{typed:e,equalScalar:t}=n;return function(r,s,a){var o=r._values,u=r._index,c=r._ptr,l=r._size,h=r._datatype||r._data===void 0?r._datatype:r.getDataType(),f=s._values,m=s._index,v=s._ptr,d=s._size,g=s._datatype||s._data===void 0?s._datatype:s.getDataType();if(l.length!==d.length)throw new ut(l.length,d.length);if(l[0]!==d[0]||l[1]!==d[1])throw new RangeError("Dimension mismatch. Matrix A ("+l+") must match Matrix B ("+d+")");var p=l[0],A=l[1],_,M=t,D=0,E=a;typeof h=="string"&&h===g&&h!=="mixed"&&(_=h,M=e.find(t,[_,_]),D=e.convert(0,_),E=e.find(a,[_,_]));var w=o&&f?[]:void 0,T=[],x=[],y=w?[]:void 0,F=w?[]:void 0,H=[],B=[],z,$,U,J;for($=0;$<A;$++){x[$]=T.length;var G=$+1;for(U=c[$],J=c[$+1];U<J;U++)z=u[U],T.push(z),H[z]=G,y&&(y[z]=o[U]);for(U=v[$],J=v[$+1];U<J;U++)z=m[U],H[z]!==G&&T.push(z),B[z]=G,F&&(F[z]=f[U]);if(w)for(U=x[$];U<T.length;){z=T[U];var ne=H[z],se=B[z];if(ne===G||se===G){var he=ne===G?y[z]:D,Se=se===G?F[z]:D,Ce=E(he,Se);M(Ce,D)?T.splice(U,1):(w.push(Ce),U++)}}}return x[A]=T.length,r.createSparseMatrix({values:w,index:T,ptr:x,size:[p,A],datatype:h===r._datatype&&g===s._datatype?_:void 0})}}),Lx="matAlgo13xDD",Ux=["typed"],Bx=Je(Lx,Ux,n=>{var{typed:e}=n;return function(r,s,a){var o=r._data,u=r._size,c=r._datatype,l=s._data,h=s._size,f=s._datatype,m=[];if(u.length!==h.length)throw new ut(u.length,h.length);for(var v=0;v<u.length;v++){if(u[v]!==h[v])throw new RangeError("Dimension mismatch. Matrix A ("+u+") must match Matrix B ("+h+")");m[v]=u[v]}var d,g=a;typeof c=="string"&&c===f&&(d=c,g=e.find(a,[d,d]));var p=m.length>0?t(g,0,m,m[0],o,l):[];return r.createDenseMatrix({data:p,size:m,datatype:d})};function t(i,r,s,a,o,u){var c=[];if(r===s.length-1)for(var l=0;l<a;l++)c[l]=i(o[l],u[l]);else for(var h=0;h<a;h++)c[h]=t(i,r+1,s,s[r+1],o[h],u[h]);return c}});function Ut(n,e){if(fi(n.size(),e.size()))return[n,e];var t=Kc(n.size(),e.size());return[n,e].map(i=>Ox(i,t))}function Ox(n,e){return fi(n.size(),e)?n:n.create(Ho(n.valueOf(),e),n.datatype())}var zx="matrixAlgorithmSuite",Hx=["typed","matrix"],uh=Je(zx,Hx,n=>{var{typed:e,matrix:t}=n,i=Bx({typed:e}),r=ah({typed:e});return function(a){var o=a.elop,u=a.SD||a.DS,c;o?(c={"DenseMatrix, DenseMatrix":(m,v)=>i(...Ut(m,v),o),"Array, Array":(m,v)=>i(...Ut(t(m),t(v)),o).valueOf(),"Array, DenseMatrix":(m,v)=>i(...Ut(t(m),v),o),"DenseMatrix, Array":(m,v)=>i(...Ut(m,t(v)),o)},a.SS&&(c["SparseMatrix, SparseMatrix"]=(m,v)=>a.SS(...Ut(m,v),o,!1)),a.DS&&(c["DenseMatrix, SparseMatrix"]=(m,v)=>a.DS(...Ut(m,v),o,!1),c["Array, SparseMatrix"]=(m,v)=>a.DS(...Ut(t(m),v),o,!1)),u&&(c["SparseMatrix, DenseMatrix"]=(m,v)=>u(...Ut(v,m),o,!0),c["SparseMatrix, Array"]=(m,v)=>u(...Ut(t(v),m),o,!0))):(c={"DenseMatrix, DenseMatrix":e.referToSelf(m=>(v,d)=>i(...Ut(v,d),m)),"Array, Array":e.referToSelf(m=>(v,d)=>i(...Ut(t(v),t(d)),m).valueOf()),"Array, DenseMatrix":e.referToSelf(m=>(v,d)=>i(...Ut(t(v),d),m)),"DenseMatrix, Array":e.referToSelf(m=>(v,d)=>i(...Ut(v,t(d)),m))},a.SS&&(c["SparseMatrix, SparseMatrix"]=e.referToSelf(m=>(v,d)=>a.SS(...Ut(v,d),m,!1))),a.DS&&(c["DenseMatrix, SparseMatrix"]=e.referToSelf(m=>(v,d)=>a.DS(...Ut(v,d),m,!1)),c["Array, SparseMatrix"]=e.referToSelf(m=>(v,d)=>a.DS(...Ut(t(v),d),m,!1))),u&&(c["SparseMatrix, DenseMatrix"]=e.referToSelf(m=>(v,d)=>u(...Ut(d,v),m,!0)),c["SparseMatrix, Array"]=e.referToSelf(m=>(v,d)=>u(...Ut(t(d),v),m,!0))));var l=a.scalar||"any",h=a.Ds||a.Ss;h&&(o?(c["DenseMatrix,"+l]=(m,v)=>r(m,v,o,!1),c[l+", DenseMatrix"]=(m,v)=>r(v,m,o,!0),c["Array,"+l]=(m,v)=>r(t(m),v,o,!1).valueOf(),c[l+", Array"]=(m,v)=>r(t(v),m,o,!0).valueOf()):(c["DenseMatrix,"+l]=e.referToSelf(m=>(v,d)=>r(v,d,m,!1)),c[l+", DenseMatrix"]=e.referToSelf(m=>(v,d)=>r(d,v,m,!0)),c["Array,"+l]=e.referToSelf(m=>(v,d)=>r(t(v),d,m,!1).valueOf()),c[l+", Array"]=e.referToSelf(m=>(v,d)=>r(t(d),v,m,!0).valueOf())));var f=a.sS!==void 0?a.sS:a.Ss;return o?(a.Ss&&(c["SparseMatrix,"+l]=(m,v)=>a.Ss(m,v,o,!1)),f&&(c[l+", SparseMatrix"]=(m,v)=>f(v,m,o,!0))):(a.Ss&&(c["SparseMatrix,"+l]=e.referToSelf(m=>(v,d)=>a.Ss(v,d,m,!1))),f&&(c[l+", SparseMatrix"]=e.referToSelf(m=>(v,d)=>f(d,v,m,!0)))),o&&o.signatures&&yv(c,o.signatures),c}}),Vx="matAlgo01xDSid",Gx=["typed"],kx=Je(Vx,Gx,n=>{var{typed:e}=n;return function(i,r,s,a){var o=i._data,u=i._size,c=i._datatype||i.getDataType(),l=r._values,h=r._index,f=r._ptr,m=r._size,v=r._datatype||r._data===void 0?r._datatype:r.getDataType();if(u.length!==m.length)throw new ut(u.length,m.length);if(u[0]!==m[0]||u[1]!==m[1])throw new RangeError("Dimension mismatch. Matrix A ("+u+") must match Matrix B ("+m+")");if(!l)throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");var d=u[0],g=u[1],p=typeof c=="string"&&c!=="mixed"&&c===v?c:void 0,A=p?e.find(s,[p,p]):s,_,M,D=[];for(_=0;_<d;_++)D[_]=[];var E=[],w=[];for(M=0;M<g;M++){for(var T=M+1,x=f[M],y=f[M+1],F=x;F<y;F++)_=h[F],E[_]=a?A(l[F],o[_][M]):A(o[_][M],l[F]),w[_]=T;for(_=0;_<d;_++)w[_]===T?D[_][M]=E[_]:D[_][M]=o[_][M]}return i.createDenseMatrix({data:D,size:[d,g],datatype:c===i._datatype&&v===r._datatype?p:void 0})}}),Wx="matAlgo10xSids",Xx=["typed","DenseMatrix"],$x=Je(Wx,Xx,n=>{var{typed:e,DenseMatrix:t}=n;return function(r,s,a,o){var u=r._values,c=r._index,l=r._ptr,h=r._size,f=r._datatype;if(!u)throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");var m=h[0],v=h[1],d,g=a;typeof f=="string"&&(d=f,s=e.convert(s,d),g=e.find(a,[d,d]));for(var p=[],A=[],_=[],M=0;M<v;M++){for(var D=M+1,E=l[M],w=l[M+1],T=E;T<w;T++){var x=c[T];A[x]=u[T],_[x]=D}for(var y=0;y<m;y++)M===0&&(p[y]=[]),_[y]===D?p[y][M]=o?g(s,A[y]):g(A[y],s):p[y][M]=s}return new t({data:p,size:[m,v],datatype:d})}}),qx="multiplyScalar",Yx=["typed"],Zx=Je(qx,Yx,n=>{var{typed:e}=n;return e("multiplyScalar",{"number, number":th,"Complex, Complex":function(i,r){return i.mul(r)},"BigNumber, BigNumber":function(i,r){return i.times(r)},"bigint, bigint":function(i,r){return i*r},"Fraction, Fraction":function(i,r){return i.mul(r)},"number | Fraction | BigNumber | Complex, Unit":(t,i)=>i.multiply(t),"Unit, number | Fraction | BigNumber | Complex | Unit":(t,i)=>t.multiply(i)})}),bl="multiply",Kx=["typed","matrix","addScalar","multiplyScalar","equalScalar","dot"],Jx=Je(bl,Kx,n=>{var{typed:e,matrix:t,addScalar:i,multiplyScalar:r,equalScalar:s,dot:a}=n,o=Ax({typed:e,equalScalar:s}),u=ah({typed:e});function c(D,E){switch(D.length){case 1:switch(E.length){case 1:if(D[0]!==E[0])throw new RangeError("Dimension mismatch in multiplication. Vectors must have the same length");break;case 2:if(D[0]!==E[0])throw new RangeError("Dimension mismatch in multiplication. Vector length ("+D[0]+") must match Matrix rows ("+E[0]+")");break;default:throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has "+E.length+" dimensions)")}break;case 2:switch(E.length){case 1:if(D[1]!==E[0])throw new RangeError("Dimension mismatch in multiplication. Matrix columns ("+D[1]+") must match Vector length ("+E[0]+")");break;case 2:if(D[1]!==E[0])throw new RangeError("Dimension mismatch in multiplication. Matrix A columns ("+D[1]+") must match Matrix B rows ("+E[0]+")");break;default:throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has "+E.length+" dimensions)")}break;default:throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix A has "+D.length+" dimensions)")}}function l(D,E,w){if(w===0)throw new Error("Cannot multiply two empty vectors");return a(D,E)}function h(D,E){if(E.storage()!=="dense")throw new Error("Support for SparseMatrix not implemented");return f(D,E)}function f(D,E){var w=D._data,T=D._size,x=D._datatype||D.getDataType(),y=E._data,F=E._size,H=E._datatype||E.getDataType(),B=T[0],z=F[1],$,U=i,J=r;x&&H&&x===H&&typeof x=="string"&&x!=="mixed"&&($=x,U=e.find(i,[$,$]),J=e.find(r,[$,$]));for(var G=[],ne=0;ne<z;ne++){for(var se=J(w[0],y[0][ne]),he=1;he<B;he++)se=U(se,J(w[he],y[he][ne]));G[ne]=se}return D.createDenseMatrix({data:G,size:[z],datatype:x===D._datatype&&H===E._datatype?$:void 0})}var m=e("_multiplyMatrixVector",{"DenseMatrix, any":d,"SparseMatrix, any":A}),v=e("_multiplyMatrixMatrix",{"DenseMatrix, DenseMatrix":g,"DenseMatrix, SparseMatrix":p,"SparseMatrix, DenseMatrix":_,"SparseMatrix, SparseMatrix":M});function d(D,E){var w=D._data,T=D._size,x=D._datatype||D.getDataType(),y=E._data,F=E._datatype||E.getDataType(),H=T[0],B=T[1],z,$=i,U=r;x&&F&&x===F&&typeof x=="string"&&x!=="mixed"&&(z=x,$=e.find(i,[z,z]),U=e.find(r,[z,z]));for(var J=[],G=0;G<H;G++){for(var ne=w[G],se=U(ne[0],y[0]),he=1;he<B;he++)se=$(se,U(ne[he],y[he]));J[G]=se}return D.createDenseMatrix({data:J,size:[H],datatype:x===D._datatype&&F===E._datatype?z:void 0})}function g(D,E){var w=D._data,T=D._size,x=D._datatype||D.getDataType(),y=E._data,F=E._size,H=E._datatype||E.getDataType(),B=T[0],z=T[1],$=F[1],U,J=i,G=r;x&&H&&x===H&&typeof x=="string"&&x!=="mixed"&&x!=="mixed"&&(U=x,J=e.find(i,[U,U]),G=e.find(r,[U,U]));for(var ne=[],se=0;se<B;se++){var he=w[se];ne[se]=[];for(var Se=0;Se<$;Se++){for(var Ce=G(he[0],y[0][Se]),ee=1;ee<z;ee++)Ce=J(Ce,G(he[ee],y[ee][Se]));ne[se][Se]=Ce}}return D.createDenseMatrix({data:ne,size:[B,$],datatype:x===D._datatype&&H===E._datatype?U:void 0})}function p(D,E){var w=D._data,T=D._size,x=D._datatype||D.getDataType(),y=E._values,F=E._index,H=E._ptr,B=E._size,z=E._datatype||E._data===void 0?E._datatype:E.getDataType();if(!y)throw new Error("Cannot multiply Dense Matrix times Pattern only Matrix");var $=T[0],U=B[1],J,G=i,ne=r,se=s,he=0;x&&z&&x===z&&typeof x=="string"&&x!=="mixed"&&(J=x,G=e.find(i,[J,J]),ne=e.find(r,[J,J]),se=e.find(s,[J,J]),he=e.convert(0,J));for(var Se=[],Ce=[],ee=[],ue=E.createSparseMatrix({values:Se,index:Ce,ptr:ee,size:[$,U],datatype:x===D._datatype&&z===E._datatype?J:void 0}),de=0;de<U;de++){ee[de]=Ce.length;var le=H[de],be=H[de+1];if(be>le)for(var xe=0,Ae=0;Ae<$;Ae++){for(var Qe=Ae+1,Ue=void 0,He=le;He<be;He++){var L=F[He];xe!==Qe?(Ue=ne(w[Ae][L],y[He]),xe=Qe):Ue=G(Ue,ne(w[Ae][L],y[He]))}xe===Qe&&!se(Ue,he)&&(Ce.push(Ae),Se.push(Ue))}}return ee[U]=Ce.length,ue}function A(D,E){var w=D._values,T=D._index,x=D._ptr,y=D._datatype||D._data===void 0?D._datatype:D.getDataType();if(!w)throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix");var F=E._data,H=E._datatype||E.getDataType(),B=D._size[0],z=E._size[0],$=[],U=[],J=[],G,ne=i,se=r,he=s,Se=0;y&&H&&y===H&&typeof y=="string"&&y!=="mixed"&&(G=y,ne=e.find(i,[G,G]),se=e.find(r,[G,G]),he=e.find(s,[G,G]),Se=e.convert(0,G));var Ce=[],ee=[];J[0]=0;for(var ue=0;ue<z;ue++){var de=F[ue];if(!he(de,Se))for(var le=x[ue],be=x[ue+1],xe=le;xe<be;xe++){var Ae=T[xe];ee[Ae]?Ce[Ae]=ne(Ce[Ae],se(de,w[xe])):(ee[Ae]=!0,U.push(Ae),Ce[Ae]=se(de,w[xe]))}}for(var Qe=U.length,Ue=0;Ue<Qe;Ue++){var He=U[Ue];$[Ue]=Ce[He]}return J[1]=U.length,D.createSparseMatrix({values:$,index:U,ptr:J,size:[B,1],datatype:y===D._datatype&&H===E._datatype?G:void 0})}function _(D,E){var w=D._values,T=D._index,x=D._ptr,y=D._datatype||D._data===void 0?D._datatype:D.getDataType();if(!w)throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix");var F=E._data,H=E._datatype||E.getDataType(),B=D._size[0],z=E._size[0],$=E._size[1],U,J=i,G=r,ne=s,se=0;y&&H&&y===H&&typeof y=="string"&&y!=="mixed"&&(U=y,J=e.find(i,[U,U]),G=e.find(r,[U,U]),ne=e.find(s,[U,U]),se=e.convert(0,U));for(var he=[],Se=[],Ce=[],ee=D.createSparseMatrix({values:he,index:Se,ptr:Ce,size:[B,$],datatype:y===D._datatype&&H===E._datatype?U:void 0}),ue=[],de=[],le=0;le<$;le++){Ce[le]=Se.length;for(var be=le+1,xe=0;xe<z;xe++){var Ae=F[xe][le];if(!ne(Ae,se))for(var Qe=x[xe],Ue=x[xe+1],He=Qe;He<Ue;He++){var L=T[He];de[L]!==be?(de[L]=be,Se.push(L),ue[L]=G(Ae,w[He])):ue[L]=J(ue[L],G(Ae,w[He]))}}for(var pt=Ce[le],We=Se.length,Xe=pt;Xe<We;Xe++){var Te=Se[Xe];he[Xe]=ue[Te]}}return Ce[$]=Se.length,ee}function M(D,E){var w=D._values,T=D._index,x=D._ptr,y=D._datatype||D._data===void 0?D._datatype:D.getDataType(),F=E._values,H=E._index,B=E._ptr,z=E._datatype||E._data===void 0?E._datatype:E.getDataType(),$=D._size[0],U=E._size[1],J=w&&F,G,ne=i,se=r;y&&z&&y===z&&typeof y=="string"&&y!=="mixed"&&(G=y,ne=e.find(i,[G,G]),se=e.find(r,[G,G]));for(var he=J?[]:void 0,Se=[],Ce=[],ee=D.createSparseMatrix({values:he,index:Se,ptr:Ce,size:[$,U],datatype:y===D._datatype&&z===E._datatype?G:void 0}),ue=J?[]:void 0,de=[],le,be,xe,Ae,Qe,Ue,He,L,pt=0;pt<U;pt++){Ce[pt]=Se.length;var We=pt+1;for(Qe=B[pt],Ue=B[pt+1],Ae=Qe;Ae<Ue;Ae++)if(L=H[Ae],J)for(be=x[L],xe=x[L+1],le=be;le<xe;le++)He=T[le],de[He]!==We?(de[He]=We,Se.push(He),ue[He]=se(F[Ae],w[le])):ue[He]=ne(ue[He],se(F[Ae],w[le]));else for(be=x[L],xe=x[L+1],le=be;le<xe;le++)He=T[le],de[He]!==We&&(de[He]=We,Se.push(He));if(J)for(var Xe=Ce[pt],Te=Se.length,nt=Xe;nt<Te;nt++){var Fe=Se[nt];he[nt]=ue[Fe]}}return Ce[U]=Se.length,ee}return e(bl,r,{"Array, Array":e.referTo("Matrix, Matrix",D=>(E,w)=>{c(Qt(E),Qt(w));var T=D(t(E),t(w));return Tt(T)?T.valueOf():T}),"Matrix, Matrix":function(E,w){var T=E.size(),x=w.size();return c(T,x),T.length===1?x.length===1?l(E,w,T[0]):h(E,w):x.length===1?m(E,w):v(E,w)},"Matrix, Array":e.referTo("Matrix,Matrix",D=>(E,w)=>D(E,t(w))),"Array, Matrix":e.referToSelf(D=>(E,w)=>D(t(E,w.storage()),w)),"SparseMatrix, any":function(E,w){return o(E,w,r,!1)},"DenseMatrix, any":function(E,w){return u(E,w,r,!1)},"any, SparseMatrix":function(E,w){return o(w,E,r,!0)},"any, DenseMatrix":function(E,w){return u(w,E,r,!0)},"Array, any":function(E,w){return u(t(E),w,r,!1).valueOf()},"any, Array":function(E,w){return u(t(w),E,r,!0).valueOf()},"any, any":r,"any, any, ...any":e.referToSelf(D=>(E,w,T)=>{for(var x=D(E,w),y=0;y<T.length;y++)x=D(x,T[y]);return x})})}),Tl="subtract",jx=["typed","matrix","equalScalar","subtractScalar","unaryMinus","DenseMatrix","concat"],Qx=Je(Tl,jx,n=>{var{typed:e,matrix:t,equalScalar:i,subtractScalar:r,unaryMinus:s,DenseMatrix:a,concat:o}=n,u=kx({typed:e}),c=oh({typed:e}),l=Nx({typed:e,equalScalar:i}),h=$x({typed:e,DenseMatrix:a}),f=sh({typed:e,DenseMatrix:a}),m=uh({typed:e,matrix:t,concat:o});return e(Tl,{"any, any":r},m({elop:r,SS:l,DS:u,SD:c,Ss:f,sS:h}))}),eE="matAlgo07xSSf",tE=["typed","SparseMatrix"],nE=Je(eE,tE,n=>{var{typed:e,SparseMatrix:t}=n;return function(s,a,o){var u=s._size,c=s._datatype||s._data===void 0?s._datatype:s.getDataType(),l=a._size,h=a._datatype||a._data===void 0?a._datatype:a.getDataType();if(u.length!==l.length)throw new ut(u.length,l.length);if(u[0]!==l[0]||u[1]!==l[1])throw new RangeError("Dimension mismatch. Matrix A ("+u+") must match Matrix B ("+l+")");var f=u[0],m=u[1],v,d=0,g=o;typeof c=="string"&&c===h&&c!=="mixed"&&(v=c,d=e.convert(0,v),g=e.find(o,[v,v]));for(var p=[],A=[],_=new Array(m+1).fill(0),M=[],D=[],E=[],w=[],T=0;T<m;T++){var x=T+1,y=0;i(s,T,E,M,x),i(a,T,w,D,x);for(var F=0;F<f;F++){var H=E[F]===x?M[F]:d,B=w[F]===x?D[F]:d,z=g(H,B);z!==0&&z!==!1&&(A.push(F),p.push(z),y++)}_[T+1]=_[T]+y}return new t({values:p,index:A,ptr:_,size:[f,m],datatype:c===s._datatype&&h===a._datatype?v:void 0})};function i(r,s,a,o,u){for(var c=r._values,l=r._index,h=r._ptr,f=h[s],m=h[s+1];f<m;f++){var v=l[f];a[v]=u,o[v]=c[f]}}}),Cl="conj",iE=["typed"],rE=Je(Cl,iE,n=>{var{typed:e}=n;return e(Cl,{"number | BigNumber | Fraction":t=>t,Complex:t=>t.conjugate(),"Array | Matrix":e.referToSelf(t=>i=>Qs(i,t))})}),Fl="concat",sE=["typed","matrix","isInteger"],aE=Je(Fl,sE,n=>{var{typed:e,matrix:t,isInteger:i}=n;return e(Fl,{"...Array | Matrix | number | BigNumber":function(s){var a,o=s.length,u=-1,c,l=!1,h=[];for(a=0;a<o;a++){var f=s[a];if(Tt(f)&&(l=!0),dt(f)||yt(f)){if(a!==o-1)throw new Error("Dimension must be specified as last argument");if(c=u,u=f.valueOf(),!i(u))throw new TypeError("Integer number expected for dimension");if(u<0||a>0&&u>c)throw new Ii(u,c+1)}else{var m=Et(f).valueOf(),v=Qt(m);if(h[a]=m,c=u,u=v.length-1,a>0&&u!==c)throw new ut(c+1,u+1)}}if(h.length===0)throw new SyntaxError("At least one matrix expected");for(var d=h.shift();h.length;)d=Zc(d,h.shift(),u);return l?t(d):d},"...string":function(s){return s.join("")}})}),Rl="getMatrixDataType",oE=["typed"],uE=Je(Rl,oE,n=>{var{typed:e}=n;return e(Rl,{Array:function(i){return js(i,Zn)},Matrix:function(i){return i.getDataType()}})}),Pl="identity",lE=["typed","config","matrix","BigNumber","DenseMatrix","SparseMatrix"],cE=Je(Pl,lE,n=>{var{typed:e,config:t,matrix:i,BigNumber:r,DenseMatrix:s,SparseMatrix:a}=n;return e(Pl,{"":function(){return t.matrix==="Matrix"?i([]):[]},string:function(l){return i(l)},"number | BigNumber":function(l){return u(l,l,t.matrix==="Matrix"?"dense":void 0)},"number | BigNumber, string":function(l,h){return u(l,l,h)},"number | BigNumber, number | BigNumber":function(l,h){return u(l,h,t.matrix==="Matrix"?"dense":void 0)},"number | BigNumber, number | BigNumber, string":function(l,h,f){return u(l,h,f)},Array:function(l){return o(l)},"Array, string":function(l,h){return o(l,h)},Matrix:function(l){return o(l.valueOf(),l.storage())},"Matrix, string":function(l,h){return o(l.valueOf(),h)}});function o(c,l){switch(c.length){case 0:return l?i(l):[];case 1:return u(c[0],c[0],l);case 2:return u(c[0],c[1],l);default:throw new Error("Vector containing two values expected")}}function u(c,l,h){var f=yt(c)||yt(l)?r:null;if(yt(c)&&(c=c.toNumber()),yt(l)&&(l=l.toNumber()),!St(c)||c<1)throw new Error("Parameters in function identity must be positive integers");if(!St(l)||l<1)throw new Error("Parameters in function identity must be positive integers");var m=f?new r(1):1,v=f?new f(0):0,d=[c,l];if(h){if(h==="sparse")return a.diagonal(d,m,0,v);if(h==="dense")return s.diagonal(d,m,0,v);throw new TypeError('Unknown matrix type "'.concat(h,'"'))}for(var g=Oo([],d,v),p=c<l?c:l,A=0;A<p;A++)g[A][A]=m;return g}});function hE(){throw new Error('No "matrix" implementation available')}var Il="size",fE=["typed","config","?matrix"],dE=Je(Il,fE,n=>{var{typed:e,config:t,matrix:i}=n;return e(Il,{Matrix:function(s){return s.create(s.size(),"number")},Array:Qt,string:function(s){return t.matrix==="Array"?[s.length]:i([s.length],"dense","number")},"number | Complex | BigNumber | Unit | boolean | null":function(s){return t.matrix==="Array"?[]:i?i([],"dense","number"):hE()}})}),Nl="transpose",pE=["typed","matrix"],mE=Je(Nl,pE,n=>{var{typed:e,matrix:t}=n;return e(Nl,{Array:a=>i(t(a)).valueOf(),Matrix:i,any:Et});function i(a){var o=a.size(),u;switch(o.length){case 1:u=a.clone();break;case 2:{var c=o[0],l=o[1];if(l===0)throw new RangeError("Cannot transpose a 2D matrix with no columns (size: "+kt(o)+")");switch(a.storage()){case"dense":u=r(a,c,l);break;case"sparse":u=s(a,c,l);break}}break;default:throw new RangeError("Matrix must be a vector or two dimensional (size: "+kt(o)+")")}return u}function r(a,o,u){for(var c=a._data,l=[],h,f=0;f<u;f++){h=l[f]=[];for(var m=0;m<o;m++)h[m]=Et(c[m][f])}return a.createDenseMatrix({data:l,size:[u,o],datatype:a._datatype})}function s(a,o,u){for(var c=a._values,l=a._index,h=a._ptr,f=c?[]:void 0,m=[],v=[],d=[],g=0;g<o;g++)d[g]=0;var p,A,_;for(p=0,A=l.length;p<A;p++)d[l[p]]++;for(var M=0,D=0;D<o;D++)v.push(M),M+=d[D],d[D]=v[D];for(v.push(M),_=0;_<u;_++)for(var E=h[_],w=h[_+1],T=E;T<w;T++){var x=d[l[T]]++;m[x]=_,c&&(f[x]=Et(c[T]))}return a.createSparseMatrix({values:f,index:m,ptr:v,size:[u,o],datatype:a._datatype})}}),Vs="smaller",gE=["typed","config","matrix","DenseMatrix","concat","SparseMatrix"],vE=Je(Vs,gE,n=>{var{typed:e,config:t,matrix:i,DenseMatrix:r,concat:s,SparseMatrix:a}=n,o=oh({typed:e}),u=nE({typed:e,SparseMatrix:a}),c=sh({typed:e,DenseMatrix:r}),l=uh({typed:e,matrix:i,concat:s}),h=rh({typed:e});return e(Vs,_E({typed:e,config:t}),{"boolean, boolean":(f,m)=>f<m,"BigNumber, BigNumber":function(m,v){return m.lt(v)&&!ih(m,v,t.relTol,t.absTol)},"bigint, bigint":(f,m)=>f<m,"Fraction, Fraction":(f,m)=>f.compare(m)===-1,"Complex, Complex":function(m,v){throw new TypeError("No ordering relation is defined for complex numbers")}},h,l({SS:u,DS:o,Ss:c}))}),_E=Je(Vs,["typed","config"],n=>{var{typed:e,config:t}=n;return e(Vs,{"number, number":function(r,s){return r<s&&!Nr(r,s,t.relTol,t.absTol)}})}),xE="ImmutableDenseMatrix",EE=["smaller","DenseMatrix"],yE=Je(xE,EE,n=>{var{smaller:e,DenseMatrix:t}=n;function i(r,s){if(!(this instanceof i))throw new SyntaxError("Constructor must be called with the new operator");if(s&&!Cn(s))throw new Error("Invalid datatype: "+s);if(Tt(r)||mt(r)){var a=new t(r,s);this._data=a._data,this._size=a._size,this._datatype=a._datatype,this._min=null,this._max=null}else if(r&&mt(r.data)&&mt(r.size))this._data=r.data,this._size=r.size,this._datatype=r.datatype,this._min=typeof r.min<"u"?r.min:null,this._max=typeof r.max<"u"?r.max:null;else{if(r)throw new TypeError("Unsupported type of data ("+Zn(r)+")");this._data=[],this._size=[0],this._datatype=s,this._min=null,this._max=null}}return i.prototype=new t,i.prototype.type="ImmutableDenseMatrix",i.prototype.isImmutableDenseMatrix=!0,i.prototype.subset=function(r){switch(arguments.length){case 1:{var s=t.prototype.subset.call(this,r);return Tt(s)?new i({data:s._data,size:s._size,datatype:s._datatype}):s}case 2:case 3:throw new Error("Cannot invoke set subset on an Immutable Matrix instance");default:throw new SyntaxError("Wrong number of arguments")}},i.prototype.set=function(){throw new Error("Cannot invoke set on an Immutable Matrix instance")},i.prototype.resize=function(){throw new Error("Cannot invoke resize on an Immutable Matrix instance")},i.prototype.reshape=function(){throw new Error("Cannot invoke reshape on an Immutable Matrix instance")},i.prototype.clone=function(){return new i({data:Et(this._data),size:Et(this._size),datatype:this._datatype})},i.prototype.toJSON=function(){return{mathjs:"ImmutableDenseMatrix",data:this._data,size:this._size,datatype:this._datatype}},i.fromJSON=function(r){return new i(r)},i.prototype.swapRows=function(){throw new Error("Cannot invoke swapRows on an Immutable Matrix instance")},i.prototype.min=function(){if(this._min===null){var r=null;this.forEach(function(s){(r===null||e(s,r))&&(r=s)}),this._min=r!==null?r:void 0}return this._min},i.prototype.max=function(){if(this._max===null){var r=null;this.forEach(function(s){(r===null||e(r,s))&&(r=s)}),this._max=r!==null?r:void 0}return this._max},i},{isClass:!0}),ME="Index",DE=["ImmutableDenseMatrix","getMatrixDataType"],SE=Je(ME,DE,n=>{var{ImmutableDenseMatrix:e,getMatrixDataType:t}=n;function i(s){if(!(this instanceof i))throw new SyntaxError("Constructor must be called with the new operator");this._dimensions=[],this._sourceSize=[],this._isScalar=!0;for(var a=0,o=arguments.length;a<o;a++){var u=arguments[a],c=mt(u),l=Tt(u),h=null;if(wc(u))this._dimensions.push(u),this._isScalar=!1;else if(c||l){var f=void 0;t(u)==="boolean"?(c&&(f=r(Ll(u).valueOf())),l&&(f=r(Ll(u._data).valueOf())),h=u.valueOf().length):f=r(u.valueOf()),this._dimensions.push(f);var m=f.size();(m.length!==1||m[0]!==1||h!==null)&&(this._isScalar=!1)}else if(typeof u=="number")this._dimensions.push(r([u]));else if(typeof u=="string")this._dimensions.push(u);else throw new TypeError("Dimension must be an Array, Matrix, number, string, or Range");this._sourceSize.push(h)}}i.prototype.type="Index",i.prototype.isIndex=!0;function r(s){for(var a=0,o=s.length;a<o;a++)if(typeof s[a]!="number"||!St(s[a]))throw new TypeError("Index parameters must be positive integer numbers");return new e(s)}return i.prototype.clone=function(){var s=new i;return s._dimensions=Et(this._dimensions),s._isScalar=this._isScalar,s._sourceSize=this._sourceSize,s},i.create=function(s){var a=new i;return i.apply(a,s),a},i.prototype.size=function(){for(var s=[],a=0,o=this._dimensions.length;a<o;a++){var u=this._dimensions[a];s[a]=typeof u=="string"?1:u.size()[0]}return s},i.prototype.max=function(){for(var s=[],a=0,o=this._dimensions.length;a<o;a++){var u=this._dimensions[a];s[a]=typeof u=="string"?u:u.max()}return s},i.prototype.min=function(){for(var s=[],a=0,o=this._dimensions.length;a<o;a++){var u=this._dimensions[a];s[a]=typeof u=="string"?u:u.min()}return s},i.prototype.forEach=function(s){for(var a=0,o=this._dimensions.length;a<o;a++)s(this._dimensions[a],a,this)},i.prototype.dimension=function(s){return typeof s!="number"?null:this._dimensions[s]||null},i.prototype.isObjectProperty=function(){return this._dimensions.length===1&&typeof this._dimensions[0]=="string"},i.prototype.getObjectProperty=function(){return this.isObjectProperty()?this._dimensions[0]:null},i.prototype.isScalar=function(){return this._isScalar},i.prototype.toArray=function(){for(var s=[],a=0,o=this._dimensions.length;a<o;a++){var u=this._dimensions[a];s.push(typeof u=="string"?u:u.toArray())}return s},i.prototype.valueOf=i.prototype.toArray,i.prototype.toString=function(){for(var s=[],a=0,o=this._dimensions.length;a<o;a++){var u=this._dimensions[a];typeof u=="string"?s.push(JSON.stringify(u)):s.push(u.toString())}return"["+s.join(", ")+"]"},i.prototype.toJSON=function(){return{mathjs:"Index",dimensions:this._dimensions}},i.fromJSON=function(s){return i.create(s.dimensions)},i},{isClass:!0});function Ll(n){var e=[];return n.forEach((t,i)=>{t&&e.push(i)}),e}var Ul="dot",AE=["typed","addScalar","multiplyScalar","conj","size"],wE=Je(Ul,AE,n=>{var{typed:e,addScalar:t,multiplyScalar:i,conj:r,size:s}=n;return e(Ul,{"Array | DenseMatrix, Array | DenseMatrix":o,"SparseMatrix, SparseMatrix":u});function a(l,h){var f=c(l),m=c(h),v,d;if(f.length===1)v=f[0];else if(f.length===2&&f[1]===1)v=f[0];else throw new RangeError("Expected a column vector, instead got a matrix of size ("+f.join(", ")+")");if(m.length===1)d=m[0];else if(m.length===2&&m[1]===1)d=m[0];else throw new RangeError("Expected a column vector, instead got a matrix of size ("+m.join(", ")+")");if(v!==d)throw new RangeError("Vectors must have equal length ("+v+" != "+d+")");if(v===0)throw new RangeError("Cannot calculate the dot product of empty vectors");return v}function o(l,h){var f=a(l,h),m=Tt(l)?l._data:l,v=Tt(l)?l._datatype||l.getDataType():void 0,d=Tt(h)?h._data:h,g=Tt(h)?h._datatype||h.getDataType():void 0,p=c(l).length===2,A=c(h).length===2,_=t,M=i;if(v&&g&&v===g&&typeof v=="string"&&v!=="mixed"){var D=v;_=e.find(t,[D,D]),M=e.find(i,[D,D])}if(!p&&!A){for(var E=M(r(m[0]),d[0]),w=1;w<f;w++)E=_(E,M(r(m[w]),d[w]));return E}if(!p&&A){for(var T=M(r(m[0]),d[0][0]),x=1;x<f;x++)T=_(T,M(r(m[x]),d[x][0]));return T}if(p&&!A){for(var y=M(r(m[0][0]),d[0]),F=1;F<f;F++)y=_(y,M(r(m[F][0]),d[F]));return y}if(p&&A){for(var H=M(r(m[0][0]),d[0][0]),B=1;B<f;B++)H=_(H,M(r(m[B][0]),d[B][0]));return H}}function u(l,h){a(l,h);for(var f=l._index,m=l._values,v=h._index,d=h._values,g=0,p=t,A=i,_=0,M=0;_<f.length&&M<v.length;){var D=f[_],E=v[M];if(D<E){_++;continue}if(D>E){M++;continue}D===E&&(g=p(g,A(m[_],d[M])),_++,M++)}return g}function c(l){return Tt(l)?l.size():s(l)}}),Bl="index",bE=["typed","Index"],TE=Je(Bl,bE,n=>{var{typed:e,Index:t}=n;return e(Bl,{"...number | string | BigNumber | Range | Array | Matrix":function(r){var s=r.map(function(o){return yt(o)?o.toNumber():mt(o)||Tt(o)?o.map(function(u){return yt(u)?u.toNumber():u}):o}),a=new t;return t.apply(a,s),a}})}),lh=F_({config:xr}),CE=L_({}),FE=G_({}),au=X_({}),Er=sx({Matrix:au}),It=Iv({BigNumber:lh,Complex:CE,DenseMatrix:Er,Fraction:FE}),ch=Ex({typed:It}),RE=rE({typed:It}),ou=hx({config:xr,typed:It}),PE=uE({typed:It}),IE=ox({typed:It}),hh=Zx({typed:It}),uu=px({Matrix:au,equalScalar:ou,typed:It}),NE=Mx({typed:It}),LE=_x({typed:It}),Ni=gx({DenseMatrix:Er,Matrix:au,SparseMatrix:uu,typed:It}),UE=dE({matrix:Ni,config:xr,typed:It}),BE=mE({matrix:Ni,typed:It}),fh=aE({isInteger:IE,matrix:Ni,typed:It}),OE=cE({BigNumber:lh,DenseMatrix:Er,SparseMatrix:uu,config:xr,matrix:Ni,typed:It}),zE=vE({DenseMatrix:Er,SparseMatrix:uu,concat:fh,config:xr,matrix:Ni,typed:It}),HE=Qx({DenseMatrix:Er,concat:fh,equalScalar:ou,matrix:Ni,subtractScalar:NE,typed:It,unaryMinus:LE}),VE=wE({addScalar:ch,conj:RE,multiplyScalar:hh,size:UE,typed:It}),GE=yE({DenseMatrix:Er,smaller:zE}),kE=SE({ImmutableDenseMatrix:GE,getMatrixDataType:PE}),Jt=Jx({addScalar:ch,dot:VE,equalScalar:ou,matrix:Ni,multiplyScalar:hh,typed:It}),ys=TE({Index:kE,typed:It});function Cr(n,e,t){return Math.max(e,Math.min(n,t))}function or(n,e){return n.reduce((t,i,r)=>t+i*e**r,0)}function WE(n){const e=n.reduce((t,i)=>t+i*i,0);return Math.sqrt(e)}function _n(n,e){const[t,i]=[Math.cos(e),Math.sin(e)],[r,s]=[(n+1)%3,(n+2)%3],a=OE(3);return a.subset(ys(r,r),t),a.subset(ys(r,s),-i),a.subset(ys(s,r),i),a.subset(ys(s,s),t),a}function Vo(n,e){return[n[0],n[1]*Math.cos(e)-n[2]*Math.sin(e),n[1]*Math.sin(e)+n[2]*Math.cos(e)]}function Ol(n,e){return[n[0]*Math.cos(e)-n[1]*Math.sin(e),n[0]*Math.sin(e)+n[1]*Math.cos(e),n[2]]}function XE(n,e,t){const i=n*Math.cos(e);return[i*Math.cos(t),i*Math.sin(t),n*Math.sin(e)]}const lu=`precision highp float;\r
\r
varying vec4 vPosition;\r
varying vec2 vUv;\r
\r
void main() {\r
    vPosition = vec4(position.xy, 0.0, 1.0);\r
    vUv = uv;\r
    gl_Position = vPosition;\r
    // gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r
}`,$E=`// We use the standard xyz coordinate system here, not the GLSL coordinate system.\r
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
}`;function qE(n){return Cr(2*n[2]/WE(n),.1,1)}class YE{constructor(e){ze(this,"scene");ze(this,"mainScene");ze(this,"cleanUpTasks");ze(this,"shader");this.mainScene=e,this.cleanUpTasks=[],this.scene=this.setupScene()}onResize(){this.shader.uniforms.resolution.value=this.mainScene.getResolution()}setupScene(){const e=new Ko,t=new kf,i=t.load("/astro/klippad_sunrise_2_4k.webp");i.generateMipmaps=!1;const r=t.load("/astro/depth.png");r.wrapS=Xn,r.wrapT=Xn,r.generateMipmaps=!1,this.shader=new bn({uniforms:{terrain:{value:i},depthTexture:{value:r},pSun:{value:null},pMoon:{value:null},pJupiter:{value:null},resolution:{value:null},vDir:{value:null},vMat:{value:null},focalLength:{value:null},terrainLight:{value:null},radii:{value:null},scatterCoeff:{value:[Math.pow(500/700,4),Math.pow(500/530,4),Math.pow(500/440,4)]}},vertexShader:lu,fragmentShader:$E,transparent:!0});const s=new Pi(2,2);let a=new vn(s,this.shader);return e.add(a),e}render(e,t){this.shader.uniforms.pSun.value=this.mainScene.params.pSun,this.shader.uniforms.pMoon.value=this.mainScene.params.pMoon,this.shader.uniforms.pJupiter.value=this.mainScene.params.pJupiter,this.shader.uniforms.vDir.value=[this.mainScene.params.viewDirection.phi,this.mainScene.params.viewDirection.theta],this.shader.uniforms.vMat.value=this.mainScene.params.viewMatrix,this.shader.uniforms.focalLength.value=this.mainScene.params.focalLength,this.shader.uniforms.terrainLight.value=qE(this.mainScene.params.pSun),this.shader.uniforms.radii.value=[1,1.002,1.0001],e.setRenderTarget(this.mainScene.hdrFbo),e.render(this.scene,t),e.setRenderTarget(null)}}const ZE=`// Rendering HDR scene to the screen.\r
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
}`;class KE{constructor(e){ze(this,"mainScene");ze(this,"scene");ze(this,"cleanUpTasks");ze(this,"shader");this.mainScene=e,this.cleanUpTasks=[],this.scene=this.setupScene()}onResize(){}setupScene(){const e=new Ko;this.shader=new bn({uniforms:{hdrTexture:{value:null}},vertexShader:lu,fragmentShader:ZE,transparent:!0});const t=new Pi(2,2),i=new vn(t,this.shader);return e.add(i),e}render(e,t){this.shader.uniforms.hdrTexture.value=this.mainScene.hdrFbo.texture,e.setRenderTarget(null),e.render(this.scene,t)}}const JE=`precision highp float;\r
\r
varying vec4 vPosition;\r
varying vec2 vUv;\r
\r
#define PI 3.14159265359\r
\r
void main() {\r
    gl_FragColor = vec4(0.2, 0.3, 0.4, 1.0);\r
}`;class jE{constructor(e){ze(this,"mainScene");ze(this,"scene");ze(this,"cleanUpTasks");ze(this,"shader");this.mainScene=e,this.cleanUpTasks=[],this.scene=this.setupScene()}onResize(){}setupScene(){const e=new Ko;this.shader=new bn({uniforms:{hdrTexture:{value:null}},vertexShader:lu,fragmentShader:JE,transparent:!0});const t=new Pi(2,2),i=new vn(t,this.shader);return e.add(i),e}render(e,t){e.setRenderTarget(this.mainScene.hdrFbo),e.render(this.scene,t),e.setRenderTarget(null)}}const QE=2*Math.PI,_t=Math.PI/180,Br=1/149597870691,Ms=1e3*Br,Gs=1/(36525*24*3600),zl=66743e-15*Br**3/Gs**2,Hl=1327124e14*Br**3/Gs**2,dh=81.30056,e1=332946.050895,ph=1/(1+1/dh),t1=ph-1,Ne={TAU:QE,DEG:_t,M:Br,KM:Ms,S:Gs,G:zl,GMS:Hl,MASS_RATIO_EARTH_MOON:dh,MASS_RATIO_SUN_EARTH:e1,RATIO_EMB_MOON_TO_EARTH_MOON:ph,RATIO_EMB_EARTH_TO_EARTH_MOON:t1,ARCMIN:_t/60,ARCSEC:_t/60/60,DEC_GALACTIC_NORTH_POLE:27.12825*_t,RA_GALACTIC_NORTH_POLE:192.85948*_t,GLON_CELESTIAL_NORTH_POLE:122.93192*_t,PC:206265,LY:63241,C:299792458*Br/Gs,MASS_SUN:Hl/zl,MASS_EARTH:59722e20,MASS_MOON:7342e19,RADIUS_EARTH_E:6378.137*Ms,RADIUS_EARTH_P:6356.7523*Ms,RADIUS_EARTH_F:1/298.25642,RADIUS_EARTH:6371*Ms,EARTH_LOC_DICT:{Helsinki:{lat:60.167*_t,lon:24.942*_t,h:0},London:{lat:51.5*_t,lon:-.1*_t,h:0},"New York":{lat:40.7*_t,lon:-74*_t,h:0},Wellington:{lat:-41.3*_t,lon:174.8*_t,h:0},Fairbanks:{lat:64.84*_t,lon:-147.72*_t,h:0},Singapore:{lat:1.34*_t,lon:103.8*_t,h:0},"Kaffeklubben Island":{lat:83.66*_t,lon:-30.61*_t,h:0},"North Pole":{lat:90*_t,lon:0,h:0},"South Pole":{lat:-90*_t,lon:0,h:0},Utrecht:{lat:52*_t,lon:5*_t,h:0}}};function n1(n){const e=(.779057273264+1.0027378119113546*n*36525)%1;return Ne.TAU*e}function i1(n){const t=or([.014506,4612.156534,1.3915817,-44e-8,-29956e-9,-368e-10],n);return(n1(n)+Ne.TAU*t/15/86400)%Ne.TAU}function r1(n){const[e,,t]=mh(n),r=or([450160.398036,-69628905431e-4,7.4722,.007702,-5939e-8],n),s=t*Math.cos(e)+.00264096*Math.sin(r)+6352e-8*Math.sin(2*r);return i1(n)+Ne.TAU*s/86400}function s1(n){const e=[2.650545,2306.083227,.2988499,.01801828,-5971e-9,-3173e-10],t=[-2.650545,2306.077181,1.0927348,.01826837,-28596e-9,-2904e-10],i=[0,2004.191903,-.4294934,-.04182264,-7089e-9,-1274e-10],r=or(e,n)*Ne.ARCSEC,s=or(t,n)*Ne.ARCSEC,a=or(i,n)*Ne.ARCSEC;return[r,s,a]}function mh(n){const e=n*36525,i=or([23.439291111,-.013004167,-164e-9,504e-9],n)*Ne.DEG,r=(125-.05295*e)*Ne.DEG,s=(200.9+1.97129*e)*Ne.DEG,a=(.0026*Math.cos(r)+2e-4*Math.cos(s))*Ne.DEG,o=(-.0048*Math.sin(r)-4e-4*Math.sin(s))*Ne.DEG;return[i,a,o]}function a1(n){const[e,t,i]=s1(n);return Jt(_n(2,t),Jt(_n(1,-i),_n(2,e)))}function o1(n){const[e,t,i]=mh(n);return Jt(_n(0,e+t),Jt(_n(2,i),_n(0,-e)))}function u1(n){return Jt(o1(n),a1(n))}function l1(n){const e=u1(n),t=_n(2,-r1(n));return Jt(t,e)}function c1(n,e){const t=_n(2,-Math.PI/2),i=_n(1,-Math.PI/2+n.lat),r=_n(2,-n.lon);return Jt(t,Jt(i,r))}function h1(n,e){const t=l1(e),i=c1(n);return Jt(i,t)}function f1(n,e){n=(n%(2*Math.PI)+Math.PI)%(2*Math.PI)-Math.PI;let t=n+e*Math.sin(n),i=1;for(;Math.abs(i)>1e-12;)i=(n-t+e*Math.sin(t))/(1-e*Math.cos(t)),t+=i;return t}function Vl(n,e,t,i,r,s){const a=f1(s,r),o=i*(Math.cos(a)-r),u=i*Math.sqrt(1-r*r)*Math.sin(a);return Ol(Vo(Ol([o,u,0],t),e),n)}function ks(n,e){if([1,2,3,4,8,9].includes(n)){let t=new Array(6).fill(0),i=new Array(6).fill(0);if(n===1)t=[.38709927,.20563593,7.00497902,252.2503235,77.45779628,48.33076593],i=[37e-8,1906e-8,-.00594749,149472.67411175,.16047689,-.12534081];else if(n===2)t=[.72333566,.00677672,3.39467605,181.9790995,131.60246718,76.67984255],i=[39e-7,-4107e-8,-7889e-7,58517.81538729,.00268329,-.27769418];else if(n===3)t=[1.00000261,.01671123,-1531e-8,100.46457166,102.93768193,0],i=[562e-8,-4392e-8,-.01294668,35999.37244981,.32327364,0];else if(n===4)t=[1.52371034,.0933941,1.84969142,-4.55343205,-23.94362959,49.55953891],i=[1847e-8,7882e-8,-.00813131,19140.30268499,.44441088,-.29257343];else if(n===8)t=[30.06992276,.00859048,1.77004347,-55.12002969,44.96476227,131.78422574],i=[26291e-8,5105e-8,35372e-8,218.45945325,-.32241464,-.00508664];else if(n===9)t=[39.48211675,.2488273,17.14001206,238.92903833,224.06891629,110.30393684],i=[-31596e-8,517e-7,4818e-8,145.20780515,-.04062942,-.01183482];else return null;const r=t.map((a,o)=>a+e*i[o]),s=Vl(r[5]*Ne.DEG,r[2]*Ne.DEG,(r[4]-r[5])*Ne.DEG,r[0],r[1],(r[3]-r[4])*Ne.DEG);return Vo(s,23.43928*Ne.DEG)}else{const t=e*36525+1.5,i=(23.4393-3563e-10*t)*Ne.DEG,r=-382394e-10*t*Ne.DEG;let s=new Array(6).fill(0),a=new Array(6).fill(0);if(n===301)s=[125.1228,5.1454,318.0634,60.2666*Ne.RADIUS_EARTH,.0549,115.3654],a=[-.0529538083,0,.1643573223,0,0,13.0649929509];else if(n===5)s=[100.4542,1.303,273.8777,5.20256,.048498,19.895],a=[276854e-10,-1557e-10,164505e-10,0,4469e-12,.0830853001];else if(n===6)s=[113.6634,2.4886,339.3939,9.55475,.055546,316.967],a=[23898e-9,-1081e-10,297661e-10,0,-9499e-12,.0334442282];else if(n===7)s=[74.0005,.7733,96.6612,19.18171,.047318,142.5905],a=[13978e-9,19e-9,30565e-9,-155e-10,745e-11,.011725806];else return null;const o=s.map((D,E)=>D+t*a[E]),[u,c,l,h,f,m]=[o[0]*Ne.DEG,o[1]*Ne.DEG,o[2]*Ne.DEG,o[3],o[4],o[5]*Ne.DEG],[v,d,g]=Vl(u,c,l,h,f,m);let p=Math.sqrt(v*v+d*d+g*g),A=Math.atan2(d,v),_=Math.atan2(g,Math.sqrt(v*v+d*d));if(n===301){const D=(356.047+t*.9856002585)*Ne.DEG,E=(282.9404+t*470935e-10)*Ne.DEG,w=D+E,T=m+l+u,x=T-w,y=T-u,F=(-1.274*Math.sin(m-2*x)+.658*Math.sin(2*x)-.186*Math.sin(D)-.059*Math.sin(2*m-2*x)-.057*Math.sin(m-2*x+D)+.053*Math.sin(m+2*x)+.046*Math.sin(2*x-D)+.041*Math.sin(m-D)-.035*Math.sin(x)-.031*Math.sin(m+D)-.015*Math.sin(2*y-2*x)+.011*Math.sin(m-4*x))*Ne.DEG,H=(-.173*Math.sin(y-2*x)-.055*Math.sin(m-y-2*x)-.046*Math.sin(m+y-2*x)+.033*Math.sin(m-y+x)-.017*Math.sin(2*x-y))*Ne.DEG,B=(-.58*Math.cos(m-2*x)-.46*Math.cos(2*x))*Ne.RADIUS_EARTH;A+=F,_+=H,p+=B}if([5,6,7].includes(n)){const D=(19.895+t*.0830853001)*Ne.DEG,E=(316.967+t*.0334442282)*Ne.DEG;if(n===5)A+=(-.332*Math.sin(2*D-5*E-67.6*Ne.DEG)-.056*Math.sin(2*D-2*E+21*Ne.DEG)+.042*Math.sin(3*D-5*E+21*Ne.DEG)-.036*Math.sin(D-2*E)+.022*Math.cos(D-E)+.023*Math.sin(2*D-3*E+52*Ne.DEG)-.016*Math.sin(D-5*E-69*Ne.DEG))*Ne.DEG;else if(n===6)A+=(.812*Math.sin(2*D-5*E-67.6*Ne.DEG)-.229*Math.cos(2*D-4*E-2*Ne.DEG)+.119*Math.sin(D-2*E-3*Ne.DEG)+.046*Math.sin(2*D-6*E-69*Ne.DEG)+.014*Math.sin(D-3*E+32*Ne.DEG))*Ne.DEG,_+=(-.02*Math.cos(2*D-4*E-2*Ne.DEG)+.018*Math.sin(2*D-6*E-49*Ne.DEG))*Ne.DEG;else if(n===7){const w=(142.5905+t*.011725806)*Ne.DEG;A+=(.04*Math.sin(E-2*w+6*Ne.DEG)+.035*Math.sin(E-3*w+33*Ne.DEG)-.015*Math.sin(D-w+20*Ne.DEG))*Ne.DEG}}const M=XE(p,_,A+r);return Vo(M,i)}}function d1(n){const e=ks(301,n),t=ks(3,n),i=-1/(Ne.MASS_RATIO_EARTH_MOON+1);return[t[0]+i*e[0],t[1]+i*e[1],t[2]+i*e[2]]}class p1{constructor(){ze(this,"viewDirection");ze(this,"viewMatrix");ze(this,"focalLength");ze(this,"t");ze(this,"location");ze(this,"horizonMatrix");ze(this,"pSun");ze(this,"pMoon");ze(this,"pJupiter");this.setView({viewDirection:{phi:0,theta:Math.PI/2},focalLength:1}),this.setTimeAndOrLocation({t:.2,location:Ne.EARTH_LOC_DICT.Singapore})}setTimeAndOrLocation(e){e.t&&(this.t=e.t),e.location&&(this.location=e.location),this.horizonMatrix=h1(this.location,this.t);const t=d1(this.t),i=Jt(this.horizonMatrix,t).valueOf();this.pSun=Jt(i,-1).valueOf(),this.pMoon=Jt(this.horizonMatrix,ks(301,this.t)).valueOf(),this.pJupiter=Jt(this.horizonMatrix,HE(ks(5,this.t),t)).valueOf()}setView(e){e.focalLength&&(this.focalLength=e.focalLength),e.viewDirection&&(this.viewDirection=e.viewDirection,this.viewMatrix=BE(Jt(_n(2,this.viewDirection.phi),_n(1,this.viewDirection.theta-Math.PI/2))).valueOf().flat())}}class m1{constructor(e){ze(this,"container");ze(this,"camera");ze(this,"params");ze(this,"renderer");ze(this,"cleanUpTasks");ze(this,"animationRequestID",null);ze(this,"lastTime",null);ze(this,"gui");ze(this,"isStopped",!1);ze(this,"averageRenderTime",0);ze(this,"hdrFbo");ze(this,"disposeFbos",()=>{});ze(this,"spaceScene");ze(this,"earthScene");ze(this,"postScene");this.container=e,this.cleanUpTasks=[],this.renderer=new bg({antialias:!0,alpha:!0}),this.renderer.setClearColor(0,0),e.appendChild(this.renderer.domElement),this.renderer.getContext().getExtension("EXT_float_blend"),this.params=new p1,this.spaceScene=new jE(this),this.earthScene=new YE(this),this.postScene=new KE(this),this.camera=this.setupCamera(),this.setupResizeRenderer(),this.resizeRenderer(),this.createGUI(),this.cleanUpTasks.push(()=>{this.animationRequestID&&cancelAnimationFrame(this.animationRequestID),this.disposeFbos()}),this.animate=this.animate.bind(this),this.animate()}resizeRenderer(){this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const{clientWidth:e,clientHeight:t}=this.container;console.log(`Resize! (${e}, ${t})`),this.renderer.setSize(e,t),this.camera instanceof mn&&(this.camera.aspect=e/t,this.camera.updateProjectionMatrix()),this.setupFbos(),this.spaceScene.onResize(),this.earthScene.onResize(),this.postScene.onResize()}setupResizeRenderer(){const e=new ResizeObserver(()=>{this.resizeRenderer()});e.observe(this.container),this.cleanUpTasks.push(()=>e.unobserve(this.container)),this.resizeRenderer()}setupFbos(){this.disposeFbos(),this.hdrFbo=this.createRenderTarget(),this.disposeFbos=()=>this.hdrFbo.dispose()}createRenderTarget(){const{clientWidth:e,clientHeight:t}=this.container;return new hi(e,t,{minFilter:an,magFilter:an,format:gn,type:Rn})}createGUI(){this.gui=new Qo;const r={animateButton:()=>this.animateStep(!1),toggleStop:()=>{this.isStopped=!this.isStopped},info:()=>{console.log(this.params),alert(JSON.stringify(this.params))}};this.gui.add(r,"animateButton").name("Animate step"),this.gui.add(r,"toggleStop").name("Toggle stop/play"),this.gui.add(r,"info").name("Info"),this.gui.close()}cleanUp(){this.container.removeChild(this.renderer.domElement);for(const e of this.cleanUpTasks)e();this.renderer.dispose(),this.gui.destroy()}setupCamera(){const e=new gc(-1,1,-1,1,.1,1e3);return e.position.set(0,0,1),e.lookAt(new Q(0,0,0)),e}getResolution(){const{clientWidth:e,clientHeight:t}=this.container;return new ht(e,t)}animate(){this.animationRequestID=requestAnimationFrame(this.animate),this.animateStep(this.isStopped)}animateStep(e){const t=(this.lastTime??0)+(e?0:1);this.lastTime=t;const i=.192+this.lastTime/36525;this.params.setTimeAndOrLocation({t:i}),this.spaceScene.render(this.renderer,this.camera),this.earthScene.render(this.renderer,this.camera),this.postScene.render(this.renderer,this.camera)}}function g1(n,e,t){return e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom}class v1{constructor(e,t){ze(this,"container");ze(this,"mapper");ze(this,"pointers",new Map);ze(this,"lastDistance",null);ze(this,"lastAngle",null);ze(this,"lastMidpoint",null);ze(this,"onContextmenu",e=>{e.preventDefault()});ze(this,"onPointerDown",e=>{var i,r;e.preventDefault();const t=this.container.getBoundingClientRect();if(this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY}),e.pointerType==="mouse"&&((i=this.mapper.mouse)!=null&&i.down)?this.mapper.mouse.down(e.clientX-t.left,e.clientY-t.top,e.button):e.pointerType==="touch"&&this.pointers.size===1&&((r=this.mapper.touch)!=null&&r.start)&&this.mapper.touch.start(e.clientX-t.left,e.clientY-t.top),this.pointers.size===2&&e.pointerType==="touch"){const[s,a]=Array.from(this.pointers.values());this.lastDistance=this.getDistance(s,a),this.lastAngle=this.getAngle(s,a),this.lastMidpoint=this.getMidpoint(s,a)}});ze(this,"onPointerMove",e=>{var a,o,u,c;e.preventDefault();const t=this.container.getBoundingClientRect();e.pointerType==="mouse"&&(a=this.mapper.mouse)!=null&&a.move&&this.mapper.mouse.move(e.clientX-t.left,e.clientY-t.top,g1(t,e.clientX,e.clientY));const i=this.pointers.get(e.pointerId);if(!i)return;const r=e.clientX-i.x,s=e.clientY-i.y;if(e.pointerType==="mouse")(o=this.mapper.mouse)!=null&&o.drag&&this.mapper.mouse.drag(e.clientX-t.left,e.clientY-t.top,r,s,e.buttons);else if(e.pointerType==="touch"){if(this.pointers.size===1&&((u=this.mapper.touch)!=null&&u.dragSingle))this.mapper.touch.dragSingle(e.clientX-t.left,e.clientY-t.top,r,s);else if(this.pointers.size===2){const[l,h]=Array.from(this.pointers.values()),f=this.getDistance(l,h),m=this.getAngle(l,h),v=this.getMidpoint(l,h);if(this.lastDistance&&this.lastAngle&&this.lastMidpoint){const d=this.lastDistance/f,g=m-this.lastAngle,p={x:v.x-this.lastMidpoint.x,y:v.y-this.lastMidpoint.y};(c=this.mapper.touch)!=null&&c.dragPair&&this.mapper.touch.dragPair(v.x,v.y,p.x,p.y,d,g),this.lastDistance=f,this.lastAngle=m,this.lastMidpoint=v}}}this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY})});ze(this,"onPointerUp",e=>{var i,r;e.preventDefault();const t=this.container.getBoundingClientRect();this.pointers.delete(e.pointerId),e.pointerType==="mouse"&&((i=this.mapper.mouse)!=null&&i.up)?this.mapper.mouse.up(e.clientX-t.left,e.clientY-t.top,e.button):e.pointerType==="touch"&&this.pointers.size===0&&((r=this.mapper.touch)!=null&&r.end)&&this.mapper.touch.end(e.clientX-t.left,e.clientY-t.top),this.pointers.size<2&&(this.lastDistance=null,this.lastAngle=null,this.lastMidpoint=null)});ze(this,"onWheel",e=>{var i;e.preventDefault();const t=this.container.getBoundingClientRect();if((i=this.mapper.mouse)!=null&&i.wheel){const r=e.deltaY<0?.8333333333333334:1.2;this.mapper.mouse.wheel(e.clientX-t.left,e.clientY-t.top,r)}});ze(this,"onKeydown",e=>{var t;(t=this.mapper.keyboard)!=null&&t.keydown&&this.mapper.keyboard.keydown({key:e.key,code:e.code,shiftKey:e.shiftKey,ctrlKey:e.ctrlKey,altKey:e.altKey,metaKey:e.metaKey})});ze(this,"onKeyup",e=>{var t;(t=this.mapper.keyboard)!=null&&t.keyup&&this.mapper.keyboard.keyup({key:e.key,code:e.code,shiftKey:e.shiftKey,ctrlKey:e.ctrlKey,altKey:e.altKey,metaKey:e.metaKey})});this.container=e,this.mapper=t,this.container.style.touchAction="none",this.container.style.userSelect="none",this.container.addEventListener("pointerdown",this.onPointerDown),window.addEventListener("pointermove",this.onPointerMove),this.container.addEventListener("pointerup",this.onPointerUp),this.container.addEventListener("pointercancel",this.onPointerUp),this.container.addEventListener("wheel",this.onWheel),this.container.addEventListener("contextmenu",this.onContextmenu),document.addEventListener("keydown",this.onKeydown),document.addEventListener("keyup",this.onKeyup)}getDistance(e,t){const i=t.x-e.x,r=t.y-e.y;return Math.sqrt(i*i+r*r)}getAngle(e,t){return Math.atan2(t.y-e.y,t.x-e.x)}getMidpoint(e,t){return{x:(e.x+t.x)/2,y:(e.y+t.y)/2}}cleanup(){this.container.removeEventListener("pointerdown",this.onPointerDown),window.removeEventListener("pointermove",this.onPointerMove),this.container.removeEventListener("pointerup",this.onPointerUp),this.container.removeEventListener("pointercancel",this.onPointerUp),this.container.removeEventListener("wheel",this.onWheel),this.container.removeEventListener("contextmenu",this.onContextmenu),document.removeEventListener("keydown",this.onKeydown),document.removeEventListener("keyup",this.onKeyup)}}const E1=()=>{const n=cu.useRef(null);return cu.useEffect(()=>{console.log("useEffect: ",n.current);const e=new m1(n.current),t=new v1(n.current,{mouse:{drag:(i,r,s,a,o)=>{const u=(e.params.viewDirection.phi+.01*s)%Ne.TAU,c=Cr(e.params.viewDirection.theta-.01*a,0,Math.PI);e.params.setView({viewDirection:{phi:u,theta:c}})},wheel:(i,r,s)=>{e.params.setView({focalLength:Cr(e.params.focalLength/s,.1,10)})},down:(i,r,s)=>{}},touch:{start:(i,r)=>{},dragSingle:(i,r,s,a)=>{const o=(e.params.viewDirection.phi+.01*s)%Ne.TAU,u=Cr(e.params.viewDirection.theta-.01*a,0,Math.PI);e.params.setView({viewDirection:{phi:o,theta:u}})},dragPair:(i,r,s,a,o,u)=>{e.params.setView({focalLength:Cr(e.params.focalLength/o,.1,10)})}},keyboard:{keydown:i=>{i.key.toUpperCase()==="T"&&console.log("TEST")}}});return()=>{e.cleanUp(),t.cleanup()}},[]),_h.jsx("div",{ref:n,style:{width:"100%",height:"100%"}})};export{E1 as default};
