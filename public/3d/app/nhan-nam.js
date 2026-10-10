var vs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ys={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ff=0,Gh=1,Uf=2;var to=1,Of=2,Qr=3,zn=0,an=1,Mn=2,Qn=0,ea=1,no=2,Vh=3,Hh=4,Zs=5;var ei=100,kf=101,Bf=102,zf=103,Gf=104,Qs=200,Sn=201,Vf=202,Hf=203,Wh=204,qh=205,Wf=206,qf=207,Xf=208,jf=209,Kf=210,$f=211,Yf=212,Jf=213,Zf=214,nc=0,ic=1,sc=2,Dr=3,rc=4,ac=5,oc=6,cc=7,Xh=0,Qf=1,ep=2,Gn=0,jh=1,Kh=2,$h=3,Yh=4,Jh=5,Zh=6,Qh=7,Ch="attached",tp="detached",eu=300,Ms=301,er=302,Rc=303,Cc=304,io=306,ms=1e3,Zn=1001,Nr=1002,Wt=1003,Pc=1004;var tr=1005;var qt=1006,ta=1007;var Rn=1008;var Cn=1009,tu=1010,nu=1011,na=1012,Ic=1013,pi=1014,Vn=1015,jt=1016,Lc=1017,Dc=1018,ia=1020,iu=35902,su=35899,ru=1021,au=1022,Hn=1023,Ti=1026,Ss=1027,Nc=1028,Fc=1029,Ts=1030,Uc=1031;var Oc=1033,so=33776,ro=33777,ao=33778,oo=33779,kc=35840,Bc=35841,zc=35842,Gc=35843,Vc=36196,Hc=37492,Wc=37496,qc=37488,Xc=37489,co=37490,jc=37491,Kc=37808,$c=37809,Yc=37810,Jc=37811,Zc=37812,Qc=37813,el=37814,tl=37815,nl=37816,il=37817,sl=37818,rl=37819,al=37820,ol=37821,cl=36492,ll=36494,hl=36495,ul=36283,dl=36284,lo=36285,fl=36286;var Hs=2300,Ws=2301,Qo=2302,Ph=2303,Ih=2400,Lh=2401,Dh=2402,np=2500;var ou=0,ho=1,sa=2,ip=3200;var pl=0,sp=1,Qi="",Ht="srgb",vn="srgb-linear",Ia="linear",xt="srgb";var ec=7680;var rp=519,ap=512,op=513,cp=514,ml=515,lp=516,hp=517,gl=518,up=519,cu=35044;var lu="300 es",ui=2e3,Fr=2001;function Jm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Zm(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Ur(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function dp(){let n=Ur("canvas");return n.style.display="block",n}var $d={},Or=null;function La(...n){let e="THREE."+n.shift();Or?Or("log",e,...n):console.log(e,...n)}function fp(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ve(...n){n=fp(n);let e="THREE."+n.shift();if(Or)Or("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function je(...n){n=fp(n);let e="THREE."+n.shift();if(Or)Or("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Vs(...n){let e=n.join(" ");e in $d||($d[e]=!0,Ve(...n))}function pp(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var mp={[nc]:ic,[sc]:oc,[rc]:cc,[Dr]:ac,[ic]:nc,[oc]:sc,[cc]:rc,[ac]:Dr},fi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yd=1234567,Ca=Math.PI/180,qs=180/Math.PI;function di(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]).toLowerCase()}function et(n,e,t){return Math.max(e,Math.min(t,n))}function hu(n,e){return(n%e+e)%e}function Qm(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function eg(n,e,t){return n!==e?(t-n)/(e-n):0}function Pa(n,e,t){return(1-t)*n+t*e}function tg(n,e,t,i){return Pa(n,e,1-Math.exp(-t*i))}function ng(n,e=1){return e-Math.abs(hu(n,e*2)-e)}function ig(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function sg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function rg(n,e){return n+Math.floor(Math.random()*(e-n+1))}function ag(n,e){return n+Math.random()*(e-n)}function og(n){return n*(.5-Math.random())}function cg(n){n!==void 0&&(Yd=n);let e=Yd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lg(n){return n*Ca}function hg(n){return n*qs}function ug(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function dg(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function fg(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function pg(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+i)/2),h=a((e+i)/2),u=r((e-i)/2),d=a((e-i)/2),f=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*h,c*u,c*d,o*l);break;case"YZY":n.set(c*d,o*h,c*u,o*l);break;case"ZXZ":n.set(c*u,c*d,o*h,o*l);break;case"XZX":n.set(o*h,c*g,c*f,o*l);break;case"YXY":n.set(c*f,o*h,c*g,o*l);break;case"ZYZ":n.set(c*g,c*f,o*h,o*l);break;default:Ve("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function hi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Mt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var uo={DEG2RAD:Ca,RAD2DEG:qs,generateUUID:di,clamp:et,euclideanModulo:hu,mapLinear:Qm,inverseLerp:eg,lerp:Pa,damp:tg,pingpong:ng,smoothstep:ig,smootherstep:sg,randInt:rg,randFloat:ag,randFloatSpread:og,seededRandom:cg,degToRad:lg,radToDeg:hg,isPowerOfTwo:ug,ceilPowerOfTwo:dg,floorPowerOfTwo:fg,setQuaternionFromProperEuler:pg,normalize:Mt,denormalize:hi},gu=class gu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};gu.prototype.isVector2=!0;var Ae=gu,Xt=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],d=r[a+0],f=r[a+1],g=r[a+2],b=r[a+3];if(u!==b||c!==d||l!==f||h!==g){let m=c*d+l*f+h*g+u*b;m<0&&(d=-d,f=-f,g=-g,b=-b,m=-m);let p=1-o;if(m<.9995){let _=Math.acos(m),T=Math.sin(_);p=Math.sin(p*_)/T,o=Math.sin(o*_)/T,c=c*p+d*o,l=l*p+f*o,h=h*p+g*o,u=u*p+b*o}else{c=c*p+d*o,l=l*p+f*o,h=h*p+g*o,u=u*p+b*o;let _=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=_,l*=_,h*=_,u*=_}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-o*f,e[t+2]=l*g+h*f+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),u=o(r/2),d=c(i/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-s*o,this._w=a*h-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},bu=class bu{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+c*l+a*u-o*h,this.y=i+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return nh.copy(this).projectOnVector(e),this.sub(nh)}reflect(e){return this.sub(nh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};bu.prototype.isVector3=!0;var I=bu,nh=new I,Jd=new Xt,_u=class _u{constructor(e,t,i,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l)}set(e,t,i,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],b=s[0],m=s[3],p=s[6],_=s[1],T=s[4],x=s[7],v=s[2],M=s[5],A=s[8];return r[0]=a*b+o*_+c*v,r[3]=a*m+o*T+c*M,r[6]=a*p+o*x+c*A,r[1]=l*b+h*_+u*v,r[4]=l*m+h*T+u*M,r[7]=l*p+h*x+u*A,r[2]=d*b+f*_+g*v,r[5]=d*m+f*T+g*M,r[8]=d*p+f*x+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*r*h+i*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,g=t*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/g;return e[0]=u*b,e[1]=(s*l-h*i)*b,e[2]=(o*i-s*a)*b,e[3]=d*b,e[4]=(h*t-s*c)*b,e[5]=(s*r-o*t)*b,e[6]=f*b,e[7]=(i*c-l*t)*b,e[8]=(a*t-i*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Vs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ih.makeScale(e,t)),this}rotate(e){return Vs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ih.makeRotation(-e)),this}translate(e,t){return Vs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ih.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};_u.prototype.isMatrix3=!0;var Je=_u,ih=new Je,Zd=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qd=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mg(){let n={enabled:!0,workingColorSpace:vn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===xt&&(s.r=Vi(s.r),s.g=Vi(s.g),s.b=Vi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xt&&(s.r=Lr(s.r),s.g=Lr(s.g),s.b=Lr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Qi?Ia:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Vs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Vs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[vn]:{primaries:e,whitePoint:i,transfer:Ia,toXYZ:Zd,fromXYZ:Qd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:e,whitePoint:i,transfer:xt,toXYZ:Zd,fromXYZ:Qd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}}),n}var st=mg();function Vi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Lr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var _r,lc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{_r===void 0&&(_r=Ur("canvas")),_r.width=e.width,_r.height=e.height;let s=_r.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=_r}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ur("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Vi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Vi(t[i]/255)*255):t[i]=Vi(t[i]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},gg=0,kr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:gg++}),this.uuid=di(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(sh(s[a].image)):r.push(sh(s[a]))}else r=sh(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function sh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?lc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}var bg=0,rh=new I,Zt=class n extends fi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Zn,s=Zn,r=qt,a=Rn,o=Hn,c=Cn,l=n.DEFAULT_ANISOTROPY,h=Qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=di(),this.name="",this.source=new kr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(rh).x}get height(){return this.source.getSize(rh).y}get depth(){return this.source.getSize(rh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ve(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==eu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ms:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case Nr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ms:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case Nr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=eu;Zt.DEFAULT_ANISOTROPY=1;var xu=class xu{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],b=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+b)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(l+1)/2,x=(f+1)/2,v=(p+1)/2,M=(h+d)/4,A=(u+b)/4,y=(g+m)/4;return T>x&&T>v?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=M/i,r=A/i):x>v?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=M/s,r=y/s):v<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),i=A/r,s=y/r),this.set(i,s,r,t),this}let _=Math.sqrt((m-g)*(m-g)+(u-b)*(u-b)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-b)/_,this.z=(d-h)/_,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};xu.prototype.isVector4=!0;var bt=xu,hc=class extends fi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new Zt(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new kr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bt=class extends hc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Da=class extends Zt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var uc=class extends Zt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ec=class Ec{constructor(e,t,i,s,r,a,o,c,l,h,u,d,f,g,b,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l,h,u,d,f,g,b,m)}set(e,t,i,s,r,a,o,c,l,h,u,d,f,g,b,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=b,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ec().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/xr.setFromMatrixColumn(e,0).length(),r=1/xr.setFromMatrixColumn(e,1).length(),a=1/xr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,b=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-b*l,t[9]=-o*c,t[2]=b-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,g=l*h,b=l*u;t[0]=d+b*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=b+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,g=l*h,b=l*u;t[0]=d-b*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=b-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,b=o*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+b,t[1]=c*u,t[5]=b*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,g=o*c,b=o*l;t[0]=c*h,t[4]=b-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-b*u}else if(e.order==="XZY"){let d=a*c,f=a*l,g=o*c,b=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+b,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=b*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_g,e,xg)}lookAt(e,t,i){let s=this.elements;return On.subVectors(e,t),On.lengthSq()===0&&(On.z=1),On.normalize(),cs.crossVectors(i,On),cs.lengthSq()===0&&(Math.abs(i.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),cs.crossVectors(i,On)),cs.normalize(),Ro.crossVectors(On,cs),s[0]=cs.x,s[4]=Ro.x,s[8]=On.x,s[1]=cs.y,s[5]=Ro.y,s[9]=On.y,s[2]=cs.z,s[6]=Ro.z,s[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],b=i[6],m=i[10],p=i[14],_=i[3],T=i[7],x=i[11],v=i[15],M=s[0],A=s[4],y=s[8],E=s[12],L=s[1],O=s[5],U=s[9],F=s[13],D=s[2],k=s[6],V=s[10],N=s[14],K=s[3],P=s[7],H=s[11],X=s[15];return r[0]=a*M+o*L+c*D+l*K,r[4]=a*A+o*O+c*k+l*P,r[8]=a*y+o*U+c*V+l*H,r[12]=a*E+o*F+c*N+l*X,r[1]=h*M+u*L+d*D+f*K,r[5]=h*A+u*O+d*k+f*P,r[9]=h*y+u*U+d*V+f*H,r[13]=h*E+u*F+d*N+f*X,r[2]=g*M+b*L+m*D+p*K,r[6]=g*A+b*O+m*k+p*P,r[10]=g*y+b*U+m*V+p*H,r[14]=g*E+b*F+m*N+p*X,r[3]=_*M+T*L+x*D+v*K,r[7]=_*A+T*O+x*k+v*P,r[11]=_*y+T*U+x*V+v*H,r[15]=_*E+T*F+x*N+v*X,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],b=e[7],m=e[11],p=e[15],_=c*f-l*d,T=o*f-l*u,x=o*d-c*u,v=a*f-l*h,M=a*d-c*h,A=a*u-o*h;return t*(b*_-m*T+p*x)-i*(g*_-m*v+p*M)+s*(g*T-b*v+p*A)-r*(g*x-b*M+m*A)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-i*(r*h-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],b=e[13],m=e[14],p=e[15],_=t*o-i*a,T=t*c-s*a,x=t*l-r*a,v=i*c-s*o,M=i*l-r*o,A=s*l-r*c,y=h*b-u*g,E=h*m-d*g,L=h*p-f*g,O=u*m-d*b,U=u*p-f*b,F=d*p-f*m,D=_*F-T*U+x*O+v*L-M*E+A*y;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/D;return e[0]=(o*F-c*U+l*O)*k,e[1]=(s*U-i*F-r*O)*k,e[2]=(b*A-m*M+p*v)*k,e[3]=(d*M-u*A-f*v)*k,e[4]=(c*L-a*F-l*E)*k,e[5]=(t*F-s*L+r*E)*k,e[6]=(m*x-g*A-p*T)*k,e[7]=(h*A-d*x+f*T)*k,e[8]=(a*U-o*L+l*y)*k,e[9]=(i*L-t*U-r*y)*k,e[10]=(g*M-b*x+p*_)*k,e[11]=(u*x-h*M-f*_)*k,e[12]=(o*E-a*O-c*y)*k,e[13]=(t*O-i*E+s*y)*k,e[14]=(b*T-g*v-m*_)*k,e[15]=(h*v-u*T+d*_)*k,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,g=r*u,b=a*h,m=a*u,p=o*u,_=c*l,T=c*h,x=c*u,v=i.x,M=i.y,A=i.z;return s[0]=(1-(b+p))*v,s[1]=(f+x)*v,s[2]=(g-T)*v,s[3]=0,s[4]=(f-x)*M,s[5]=(1-(d+p))*M,s[6]=(m+_)*M,s[7]=0,s[8]=(g+T)*A,s[9]=(m-_)*A,s[10]=(1-(d+b))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=xr.set(s[0],s[1],s[2]).length(),o=xr.set(s[4],s[5],s[6]).length(),c=xr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),oi.copy(this);let l=1/a,h=1/o,u=1/c;return oi.elements[0]*=l,oi.elements[1]*=l,oi.elements[2]*=l,oi.elements[4]*=h,oi.elements[5]*=h,oi.elements[6]*=h,oi.elements[8]*=u,oi.elements[9]*=u,oi.elements[10]*=u,t.setFromRotationMatrix(oi),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,s,r,a,o=ui,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s),g,b;if(c)g=r/(a-r),b=a*r/(a-r);else if(o===ui)g=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===Fr)g=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=b,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=ui,c=!1){let l=this.elements,h=2/(t-e),u=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s),g,b;if(c)g=1/(a-r),b=a/(a-r);else if(o===ui)g=-2/(a-r),b=-(a+r)/(a-r);else if(o===Fr)g=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=b,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Ec.prototype.isMatrix4=!0;var Ye=Ec,xr=new I,oi=new Ye,_g=new I(0,0,0),xg=new I(1,1,1),cs=new I,Ro=new I,On=new I,ef=new Ye,tf=new Xt,Hi=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(et(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ef.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ef,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tf.setFromEuler(this),this.setFromQuaternion(tf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Hi.DEFAULT_ORDER="XYZ";var Na=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},vg=0,nf=new I,vr=new Xt,Ui=new Ye,Co=new I,ya=new I,yg=new I,Mg=new Xt,sf=new I(1,0,0),rf=new I(0,1,0),af=new I(0,0,1),of={type:"added"},Sg={type:"removed"},yr={type:"childadded",child:null},ah={type:"childremoved",child:null},Ot=class n extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vg++}),this.uuid=di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new I,t=new Hi,i=new Xt,s=new I(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ye},normalMatrix:{value:new Je}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Na,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vr.setFromAxisAngle(e,t),this.quaternion.multiply(vr),this}rotateOnWorldAxis(e,t){return vr.setFromAxisAngle(e,t),this.quaternion.premultiply(vr),this}rotateX(e){return this.rotateOnAxis(sf,e)}rotateY(e){return this.rotateOnAxis(rf,e)}rotateZ(e){return this.rotateOnAxis(af,e)}translateOnAxis(e,t){return nf.copy(e).applyQuaternion(this.quaternion),this.position.add(nf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sf,e)}translateY(e){return this.translateOnAxis(rf,e)}translateZ(e){return this.translateOnAxis(af,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Co.copy(e):Co.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ya.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(ya,Co,this.up):Ui.lookAt(Co,ya,this.up),this.quaternion.setFromRotationMatrix(Ui),s&&(Ui.extractRotation(s.matrixWorld),vr.setFromRotationMatrix(Ui),this.quaternion.premultiply(vr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(of),yr.child=e,this.dispatchEvent(yr),yr.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sg),ah.child=e,this.dispatchEvent(ah),ah.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(of),yr.child=e,this.dispatchEvent(yr),yr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ya,e,yg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ya,Mg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ot.DEFAULT_UP=new I(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var pn=class extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}},Tg={type:"move"},Br=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let b of e.hand.values()){let m=t.getJointPose(b,i),p=this._getHandJoint(l,b);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tg)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new pn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},gp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ls={h:0,s:0,l:0},Po={h:0,s:0,l:0};function oh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Be=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=st.workingColorSpace){if(e=hu(e,1),t=et(t,0,1),i=et(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=oh(a,r,e+1/3),this.g=oh(a,r,e),this.b=oh(a,r,e-1/3)}return st.colorSpaceToWorking(this,s),this}setStyle(e,t=Ht){function i(r){r!==void 0&&parseFloat(r)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){let i=gp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=Lr(e.r),this.g=Lr(e.g),this.b=Lr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return st.workingToColorSpace(fn.copy(this),e),Math.round(et(fn.r*255,0,255))*65536+Math.round(et(fn.g*255,0,255))*256+Math.round(et(fn.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(fn.copy(this),t);let i=fn.r,s=fn.g,r=fn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(fn.copy(this),t),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=Ht){st.workingToColorSpace(fn.copy(this),e);let t=fn.r,i=fn.g,s=fn.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ls),this.setHSL(ls.h+e,ls.s+t,ls.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ls),e.getHSL(Po);let i=Pa(ls.h,Po.h,t),s=Pa(ls.s,Po.s,t),r=Pa(ls.l,Po.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fn=new Be;Be.NAMES=gp;var zr=class extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hi,this.environmentIntensity=1,this.environmentRotation=new Hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ci=new I,Oi=new I,ch=new I,ki=new I,Mr=new I,Sr=new I,cf=new I,lh=new I,hh=new I,uh=new I,dh=new bt,fh=new bt,ph=new bt,ps=class n{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ci.subVectors(e,t),s.cross(ci);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){ci.subVectors(s,t),Oi.subVectors(i,t),ch.subVectors(e,t);let a=ci.dot(ci),o=ci.dot(Oi),c=ci.dot(ch),l=Oi.dot(Oi),h=Oi.dot(ch),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(e,t,i,s,r,a,o,c){return this.getBarycoord(e,t,i,s,ki)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ki.x),c.addScaledVector(a,ki.y),c.addScaledVector(o,ki.z),c)}static getInterpolatedAttribute(e,t,i,s,r,a){return dh.setScalar(0),fh.setScalar(0),ph.setScalar(0),dh.fromBufferAttribute(e,t),fh.fromBufferAttribute(e,i),ph.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(dh,r.x),a.addScaledVector(fh,r.y),a.addScaledVector(ph,r.z),a}static isFrontFacing(e,t,i,s){return ci.subVectors(i,t),Oi.subVectors(e,t),ci.cross(Oi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),ci.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Mr.subVectors(s,i),Sr.subVectors(r,i),lh.subVectors(e,i);let c=Mr.dot(lh),l=Sr.dot(lh);if(c<=0&&l<=0)return t.copy(i);hh.subVectors(e,s);let h=Mr.dot(hh),u=Sr.dot(hh);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(Mr,a);uh.subVectors(e,r);let f=Mr.dot(uh),g=Sr.dot(uh);if(g>=0&&f<=g)return t.copy(r);let b=f*l-c*g;if(b<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(Sr,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return cf.subVectors(r,s),o=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(cf,o);let p=1/(m+b+d);return a=b*p,o=d*p,t.copy(i).addScaledVector(Mr,a).addScaledVector(Sr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},yn=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,li):li.fromBufferAttribute(r,a),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Io.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Io.copy(i.boundingBox)),Io.applyMatrix4(e.matrixWorld),this.union(Io)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ma),Lo.subVectors(this.max,Ma),Tr.subVectors(e.a,Ma),wr.subVectors(e.b,Ma),Ar.subVectors(e.c,Ma),hs.subVectors(wr,Tr),us.subVectors(Ar,wr),ks.subVectors(Tr,Ar);let t=[0,-hs.z,hs.y,0,-us.z,us.y,0,-ks.z,ks.y,hs.z,0,-hs.x,us.z,0,-us.x,ks.z,0,-ks.x,-hs.y,hs.x,0,-us.y,us.x,0,-ks.y,ks.x,0];return!mh(t,Tr,wr,Ar,Lo)||(t=[1,0,0,0,1,0,0,0,1],!mh(t,Tr,wr,Ar,Lo))?!1:(Do.crossVectors(hs,us),t=[Do.x,Do.y,Do.z],mh(t,Tr,wr,Ar,Lo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Bi=[new I,new I,new I,new I,new I,new I,new I,new I],li=new I,Io=new yn,Tr=new I,wr=new I,Ar=new I,hs=new I,us=new I,ks=new I,Ma=new I,Lo=new I,Do=new I,Bs=new I;function mh(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Bs.fromArray(n,r);let o=s.x*Math.abs(Bs.x)+s.y*Math.abs(Bs.y)+s.z*Math.abs(Bs.z),c=e.dot(Bs),l=t.dot(Bs),h=i.dot(Bs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Yt=new I,No=new Ae,wg=0,gt=class extends fi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=cu,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)No.fromBufferAttribute(this,t),No.applyMatrix3(e),this.setXY(t,No.x,No.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=hi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Mt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),s=Mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),s=Mt(s,this.array),r=Mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Fa=class extends gt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ua=class extends gt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var vt=class extends gt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Ag=new yn,Sa=new I,gh=new I,mn=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Ag.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sa.subVectors(e,this.center);let t=Sa.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Sa,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sa.copy(e.center).add(gh)),this.expandByPoint(Sa.copy(e.center).sub(gh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Eg=0,Jn=new Ye,bh=new Ot,Er=new I,kn=new yn,Ta=new yn,rn=new I,dt=class n extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Eg++}),this.uuid=di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jm(e)?Ua:Fa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,t,i){return Jn.makeTranslation(e,t,i),this.applyMatrix4(Jn),this}scale(e,t,i){return Jn.makeScale(e,t,i),this.applyMatrix4(Jn),this}lookAt(e){return bh.lookAt(e),bh.updateMatrix(),this.applyMatrix4(bh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Er).negate(),this.translate(Er.x,Er.y,Er.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new vt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];kn.setFromBufferAttribute(r),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let i=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ta.setFromBufferAttribute(o),this.morphTargetsRelative?(rn.addVectors(kn.min,Ta.min),kn.expandByPoint(rn),rn.addVectors(kn.max,Ta.max),kn.expandByPoint(rn)):(kn.expandByPoint(Ta.min),kn.expandByPoint(Ta.max))}kn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)rn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(rn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)rn.fromBufferAttribute(o,l),c&&(Er.fromBufferAttribute(e,l),rn.add(Er)),s=Math.max(s,i.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new gt(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let y=0;y<i.count;y++)o[y]=new I,c[y]=new I;let l=new I,h=new I,u=new I,d=new Ae,f=new Ae,g=new Ae,b=new I,m=new I;function p(y,E,L){l.fromBufferAttribute(i,y),h.fromBufferAttribute(i,E),u.fromBufferAttribute(i,L),d.fromBufferAttribute(r,y),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,L),h.sub(l),u.sub(l),f.sub(d),g.sub(d);let O=1/(f.x*g.y-g.x*f.y);isFinite(O)&&(b.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(O),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(O),o[y].add(b),o[E].add(b),o[L].add(b),c[y].add(m),c[E].add(m),c[L].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let y=0,E=_.length;y<E;++y){let L=_[y],O=L.start,U=L.count;for(let F=O,D=O+U;F<D;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let T=new I,x=new I,v=new I,M=new I;function A(y){v.fromBufferAttribute(s,y),M.copy(v);let E=o[y];T.copy(E),T.sub(v.multiplyScalar(v.dot(E))).normalize(),x.crossVectors(M,E);let O=x.dot(c[y])<0?-1:1;a.setXYZW(y,T.x,T.y,T.z,O)}for(let y=0,E=_.length;y<E;++y){let L=_[y],O=L.start,U=L.count;for(let F=O,D=O+U;F<D;F+=3)A(e.getX(F+0)),A(e.getX(F+1)),A(e.getX(F+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new gt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new I,r=new I,a=new I,o=new I,c=new I,l=new I,h=new I,u=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),b=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,b),l.fromBufferAttribute(i,m),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(b,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)rn.fromBufferAttribute(e,t),rn.normalize(),e.setXYZ(t,rn.x,rn.y,rn.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let b=0,m=c.length;b<m;b++){o.isInterleavedBufferAttribute?f=c[b]*o.data.stride+o.offset:f=c[b]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new gt(d,h,u)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,i);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,i);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=cu,this.updateRanges=[],this.version=0,this.uuid=di()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},xn=new I,Vr=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xn.fromBufferAttribute(this,t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xn.fromBufferAttribute(this,t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=hi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Mt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=hi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=hi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=hi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=hi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),s=Mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),s=Mt(s,this.array),r=Mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){La("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){La("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},_h=new I,Rg=new I,Cg=new Je,Bn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=_h.subVectors(i,t).cross(Rg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(_h),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Cg.getNormalMatrix(e),s=this.coplanarPoint(_h).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Pg=0,An=class extends fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pg++}),this.uuid=di(),this.name="",this.type="Material",this.blending=ea,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wh,this.blendDst=qh,this.blendEquation=ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ec,this.stencilZFail=ec,this.stencilZPass=ec,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Bn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ae().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ae().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var zi=new I,xh=new I,Fo=new I,Uo=new I,Wi=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,t),zi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){xh.copy(e).add(t).multiplyScalar(.5),Fo.copy(t).sub(e).normalize(),Uo.copy(this.origin).sub(xh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Fo),o=Uo.dot(this.direction),c=-Uo.dot(Fo),l=Uo.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let b=1/h;u*=b,d*=b,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(xh).addScaledVector(Fo,d),f}intersectSphere(e,t){if(e.radius<0)return null;zi.subVectors(e.center,this.origin);let i=zi.dot(this.direction),s=zi.dot(zi)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,g=t.x-a.x,b=t.y-a.y,m=t.z-a.z,p=i.x-a.x,_=i.y-a.y,T=i.z-a.z,x=Math.abs(c),v=Math.abs(l),M=Math.abs(h),A,y,E,L,O,U,F,D,k,V,N,K;if(x>=v&&x>=M?(E=c,U=u,k=g,K=p,c>=0?(A=l,y=h,L=d,O=f,F=b,D=m,V=_,N=T):(A=h,y=l,L=f,O=d,F=m,D=b,V=T,N=_)):v>=M?(E=l,U=d,k=b,K=_,l>=0?(A=h,y=c,L=f,O=u,F=m,D=g,V=T,N=p):(A=c,y=h,L=u,O=f,F=g,D=m,V=p,N=T)):(E=h,U=f,k=m,K=T,h>=0?(A=c,y=l,L=u,O=d,F=g,D=b,V=p,N=_):(A=l,y=c,L=d,O=u,F=b,D=g,V=_,N=p)),E===0)return null;let P=A/E,H=y/E,X=1/E,he=L-P*U,J=O-H*U,se=F-P*k,ie=D-H*k,pe=V-P*K,q=N-H*K,R=pe*ie-q*se,W=he*q-J*pe,te=se*J-ie*he;if(s){if(R<0||W<0||te<0)return null}else if((R<0||W<0||te<0)&&(R>0||W>0||te>0))return null;let ue=R+W+te;if(ue===0)return null;let le=X*(R*U+W*k+te*K);return(ue>0?le<0:le>0)?null:this.at(le/ue,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},zt=class extends An{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=Xh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},lf=new Ye,zs=new Wi,Oo=new mn,hf=new I,ko=new I,Bo=new I,zo=new I,vh=new I,Go=new I,uf=new I,Vo=new I,St=class extends Ot{constructor(e=new dt,t=new zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Go.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(vh.fromBufferAttribute(u,e),a?Go.addScaledVector(vh,h):Go.addScaledVector(vh.sub(t),h))}t.add(Go)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Oo.copy(i.boundingSphere),Oo.applyMatrix4(r),zs.copy(e.ray).recast(e.near),!(Oo.containsPoint(zs.origin)===!1&&(zs.intersectSphere(Oo,hf)===null||zs.origin.distanceToSquared(hf)>(e.far-e.near)**2))&&(lf.copy(r).invert(),zs.copy(e.ray).applyMatrix4(lf),!(i.boundingBox!==null&&zs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,zs)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){let m=d[g],p=a[m.materialIndex],_=Math.max(m.start,f.start),T=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,v=T;x<v;x+=3){let M=o.getX(x),A=o.getX(x+1),y=o.getX(x+2);s=Ho(this,p,e,i,l,h,u,M,A,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){let _=o.getX(m),T=o.getX(m+1),x=o.getX(m+2);s=Ho(this,a,e,i,l,h,u,_,T,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){let m=d[g],p=a[m.materialIndex],_=Math.max(m.start,f.start),T=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,v=T;x<v;x+=3){let M=x,A=x+1,y=x+2;s=Ho(this,p,e,i,l,h,u,M,A,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),b=Math.min(c.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){let _=m,T=m+1,x=m+2;s=Ho(this,a,e,i,l,h,u,_,T,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Ig(n,e,t,i,s,r,a,o){let c;if(e.side===an?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,e.side===zn,o),c===null)return null;Vo.copy(o),Vo.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Vo);return l<t.near||l>t.far?null:{distance:l,point:Vo.clone(),object:n}}function Ho(n,e,t,i,s,r,a,o,c,l){n.getVertexPosition(o,ko),n.getVertexPosition(c,Bo),n.getVertexPosition(l,zo);let h=Ig(n,e,t,i,ko,Bo,zo,uf);if(h){let u=new I;ps.getBarycoord(uf,ko,Bo,zo,u),s&&(h.uv=ps.getInterpolatedAttribute(s,o,c,l,u,new Ae)),r&&(h.uv1=ps.getInterpolatedAttribute(r,o,c,l,u,new Ae)),a&&(h.normal=ps.getInterpolatedAttribute(a,o,c,l,u,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new I,materialIndex:0};ps.getNormal(ko,Bo,zo,d.normal),h.face=d,h.barycoord=u}return h}var wa=new bt,df=new bt,ff=new bt,Lg=new bt,pf=new Ye,Wo=new I,yh=new mn,mf=new Ye,Mh=new Wi,Oa=class extends St{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ch,this.bindMatrix=new Ye,this.bindMatrixInverse=new Ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new yn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Wo),this.boundingBox.expandByPoint(Wo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new mn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Wo),this.boundingSphere.expandByPoint(Wo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yh.copy(this.boundingSphere),yh.applyMatrix4(s),e.ray.intersectsSphere(yh)!==!1&&(mf.copy(s).invert(),Mh.copy(e.ray).applyMatrix4(mf),!(this.boundingBox!==null&&Mh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Mh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new bt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ch?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===tp?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ve("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;df.fromBufferAttribute(s.attributes.skinIndex,e),ff.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(wa.copy(t),t.set(0,0,0,0)):(wa.set(...t,1),t.set(0,0,0)),wa.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=ff.getComponent(r);if(a!==0){let o=df.getComponent(r);pf.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(Lg.copy(wa).applyMatrix4(pf),a)}}return t.isVector4&&(t.w=wa.w),t.applyMatrix4(this.bindMatrixInverse)}},Hr=class extends Ot{constructor(){super(),this.isBone=!0,this.type="Bone"}},Wr=class extends Zt{constructor(e=null,t=1,i=1,s,r,a,o,c,l=Wt,h=Wt,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},gf=new Ye,Dg=new Ye,ka=class n{constructor(e=[],t=[]){this.uuid=di(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ve("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new Ye;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Dg;gf.multiplyMatrices(o,t[r]),gf.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Wr(t,e,e,Hn,Vn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],a=t[r];a===void 0&&(Ve("Skeleton: No bone found with UUID:",r),a=new Hr),this.bones.push(a),this.boneInverses.push(new Ye().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=i[s];e.boneInverses.push(o.toArray())}return e}},qi=class extends gt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Rr=new Ye,bf=new Ye,qo=[],_f=new yn,Ng=new Ye,Aa=new St,Ea=new mn,Xs=class extends St{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new qi(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Ng)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new yn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Rr),_f.copy(e.boundingBox).applyMatrix4(Rr),this.boundingBox.union(_f)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new mn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Rr),Ea.copy(e.boundingSphere).applyMatrix4(Rr),this.boundingSphere.union(Ea)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Aa.geometry=this.geometry,Aa.material=this.material,Aa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ea.copy(this.boundingSphere),Ea.applyMatrix4(i),e.ray.intersectsSphere(Ea)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Rr),bf.multiplyMatrices(i,Rr),Aa.matrixWorld=bf,Aa.raycast(e,qo);for(let a=0,o=qo.length;a<o;a++){let c=qo[a];c.instanceId=r,c.object=this,t.push(c)}qo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new qi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Wr(new Float32Array(s*this.count),s,this.count,Nc,Vn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<i.length;l++)a+=i[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Gs=new mn,Fg=new Ae(.5,.5),Xo=new I,qr=class{constructor(e=new Bn,t=new Bn,i=new Bn,s=new Bn,r=new Bn,a=new Bn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ui,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],b=r[9],m=r[10],p=r[11],_=r[12],T=r[13],x=r[14],v=r[15];if(s[0].setComponents(l-a,f-h,p-g,v-_).normalize(),s[1].setComponents(l+a,f+h,p+g,v+_).normalize(),s[2].setComponents(l+o,f+u,p+b,v+T).normalize(),s[3].setComponents(l-o,f-u,p-b,v-T).normalize(),i)s[4].setComponents(c,d,m,x).normalize(),s[5].setComponents(l-c,f-d,p-m,v-x).normalize();else if(s[4].setComponents(l-c,f-d,p-m,v-x).normalize(),t===ui)s[5].setComponents(l+c,f+d,p+m,v+x).normalize();else if(t===Fr)s[5].setComponents(c,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gs)}intersectsSprite(e){Gs.center.set(0,0,0);let t=Fg.distanceTo(e.center);return Gs.radius=.7071067811865476+t,Gs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Xo.x=s.normal.x>0?e.max.x:e.min.x,Xo.y=s.normal.y>0?e.max.y:e.min.y,Xo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Xo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Xr=class extends An{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},dc=new I,fc=new I,xf=new Ye,Ra=new Wi,jo=new mn,Sh=new I,vf=new I,js=class extends Ot{constructor(e=new dt,t=new Xr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)dc.fromBufferAttribute(t,s-1),fc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=dc.distanceTo(fc);e.setAttribute("lineDistance",new vt(i,1))}else Ve("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),jo.copy(i.boundingSphere),jo.applyMatrix4(s),jo.radius+=r,e.ray.intersectsSphere(jo)===!1)return;xf.copy(s).invert(),Ra.copy(e.ray).applyMatrix4(xf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let b=f,m=g-1;b<m;b+=l){let p=h.getX(b),_=h.getX(b+1),T=Ko(this,e,Ra,c,p,_,b);T&&t.push(T)}if(this.isLineLoop){let b=h.getX(g-1),m=h.getX(f),p=Ko(this,e,Ra,c,b,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let b=f,m=g-1;b<m;b+=l){let p=Ko(this,e,Ra,c,b,b+1,b);p&&t.push(p)}if(this.isLineLoop){let b=Ko(this,e,Ra,c,g-1,f,g-1);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ko(n,e,t,i,s,r,a){let o=n.geometry.attributes.position;if(dc.fromBufferAttribute(o,s),fc.fromBufferAttribute(o,r),t.distanceSqToSegment(dc,fc,Sh,vf)>i)return;Sh.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Sh);if(!(l<e.near||l>e.far))return{distance:l,point:vf.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var yf=new I,Mf=new I,Ba=class extends js{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)yf.fromBufferAttribute(t,s),Mf.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+yf.distanceTo(Mf);e.setAttribute("lineDistance",new vt(i,1))}else Ve("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},za=class extends js{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},jr=class extends An{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Sf=new Ye,Nh=new Wi,$o=new mn,Yo=new I,Ga=class extends Ot{constructor(e=new dt,t=new jr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$o.copy(i.boundingSphere),$o.applyMatrix4(s),$o.radius+=r,e.ray.intersectsSphere($o)===!1)return;Sf.copy(s).invert(),Nh.copy(e.ray).applyMatrix4(Sf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,u=i.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,b=f;g<b;g++){let m=l.getX(g);Yo.fromBufferAttribute(u,m),Tf(Yo,m,c,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,b=f;g<b;g++)Yo.fromBufferAttribute(u,g),Tf(Yo,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Tf(n,e,t,i,s,r,a){let o=Nh.distanceSqToPoint(n);if(o<t){let c=new I;Nh.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Va=class extends Zt{constructor(e=[],t=Ms,i,s,r,a,o,c,l,h){super(e,t,i,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},gs=class extends Zt{constructor(e,t,i,s,r,a,o,c,l){super(e,t,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var bs=class extends Zt{constructor(e,t,i=pi,s,r,a,o=Wt,c=Wt,l,h=Ti,u=1){if(h!==Ti&&h!==Ss)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new kr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},pc=class extends bs{constructor(e,t=pi,i=Ms,s,r,a=Wt,o=Wt,c,l=Ti){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,s,r,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ha=class extends Zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Xi=class n extends dt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new vt(l,3)),this.setAttribute("normal",new vt(h,3)),this.setAttribute("uv",new vt(u,2));function g(b,m,p,_,T,x,v,M,A,y,E){let L=x/A,O=v/y,U=x/2,F=v/2,D=M/2,k=A+1,V=y+1,N=0,K=0,P=new I;for(let H=0;H<V;H++){let X=H*O-F;for(let he=0;he<k;he++){let J=he*L-U;P[b]=J*_,P[m]=X*T,P[p]=D,l.push(P.x,P.y,P.z),P[b]=0,P[m]=0,P[p]=M>0?1:-1,h.push(P.x,P.y,P.z),u.push(he/A),u.push(1-H/y),N+=1}}for(let H=0;H<y;H++)for(let X=0;X<A;X++){let he=d+X+k*H,J=d+X+k*(H+1),se=d+(X+1)+k*(H+1),ie=d+(X+1)+k*H;c.push(he,J,ie),c.push(J,se,ie),K+=6}o.addGroup(f,K,E),f+=K,d+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Kr=class n extends dt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,b=[],m=i/2,p=0;_(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new vt(u,3)),this.setAttribute("normal",new vt(d,3)),this.setAttribute("uv",new vt(f,2));function _(){let x=new I,v=new I,M=0,A=(t-e)/i;for(let y=0;y<=r;y++){let E=[],L=y/r,O=L*(t-e)+e;for(let U=0;U<=s;U++){let F=U/s,D=F*c+o,k=Math.sin(D),V=Math.cos(D);v.x=O*k,v.y=-L*i+m,v.z=O*V,u.push(v.x,v.y,v.z),x.set(k,A,V).normalize(),d.push(x.x,x.y,x.z),f.push(F,1-L),E.push(g++)}b.push(E)}for(let y=0;y<s;y++)for(let E=0;E<r;E++){let L=b[E][y],O=b[E+1][y],U=b[E+1][y+1],F=b[E][y+1];(e>0||E!==0)&&(h.push(L,O,F),M+=3),(t>0||E!==r-1)&&(h.push(O,U,F),M+=3)}l.addGroup(p,M,0),p+=M}function T(x){let v=g,M=new Ae,A=new I,y=0,E=x===!0?e:t,L=x===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,m*L,0),d.push(0,L,0),f.push(.5,.5),g++;let O=g;for(let U=0;U<=s;U++){let D=U/s*c+o,k=Math.cos(D),V=Math.sin(D);A.x=E*V,A.y=m*L,A.z=E*k,u.push(A.x,A.y,A.z),d.push(0,L,0),M.x=k*.5+.5,M.y=V*.5*L+.5,f.push(M.x,M.y),g++}for(let U=0;U<s;U++){let F=v+U,D=O+U;x===!0?h.push(D,D+1,F):h.push(D+1,D,F),y+=3}l.addGroup(p,y,x===!0?1:2),p+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var mc=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ve("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=i[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===a)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new Ae:new I);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new I,s=[],r=[],a=[],o=new I,c=new Ye;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),d<=l&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(et(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(et(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};function uu(){let n=0,e=0,t=0,i=0;function s(r,a,o,c){n=r,e=o,t=-3*r+3*a-2*o-c,i=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}var wf=new I,Af=new I,Th=new uu,wh=new uu,Ah=new uu,Wa=class extends mc{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new I){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Af.subVectors(s[0],s[1]).add(s[0]),l=Af);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(wf.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=wf),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),f),b=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);b<1e-4&&(b=1),g<1e-4&&(g=b),m<1e-4&&(m=b),Th.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,b,m),wh.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,b,m),Ah.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,b,m)}else this.curveType==="catmullrom"&&(Th.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),wh.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Ah.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return i.set(Th.calc(c),wh.calc(c),Ah.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};var $r=class n extends dt{constructor(e=[new Ae(0,-.5),new Ae(.5,0),new Ae(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=et(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/t,u=new I,d=new Ae,f=new I,g=new I,b=new I,m=0,p=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,f.x=p*1,f.y=-m,f.z=p*0,b.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(b.x,b.y,b.z);break;default:m=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=b.x,f.y+=b.y,f.z+=b.z,f.normalize(),c.push(f.x,f.y,f.z),b.copy(g)}for(let _=0;_<=t;_++){let T=i+_*h*s,x=Math.sin(T),v=Math.cos(T);for(let M=0;M<=e.length-1;M++){u.x=e[M].x*x,u.y=e[M].y,u.z=e[M].x*v,a.push(u.x,u.y,u.z),d.x=_/t,d.y=M/(e.length-1),o.push(d.x,d.y);let A=c[3*M+0]*x,y=c[3*M+1],E=c[3*M+0]*v;l.push(A,y,E)}}for(let _=0;_<t;_++)for(let T=0;T<e.length-1;T++){let x=T+_*e.length,v=x,M=x+e.length,A=x+e.length+1,y=x+1;r.push(v,M,y),r.push(A,y,M)}this.setIndex(r),this.setAttribute("position",new vt(a,3)),this.setAttribute("uv",new vt(o,2)),this.setAttribute("normal",new vt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var ji=class n extends dt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=t/c,f=[],g=[],b=[],m=[];for(let p=0;p<h;p++){let _=p*d-a;for(let T=0;T<l;T++){let x=T*u-r;g.push(x,-_,0),b.push(0,0,1),m.push(T/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<o;_++){let T=_+l*p,x=_+l*(p+1),v=_+1+l*(p+1),M=_+1+l*p;f.push(T,x,M),f.push(x,v,M)}this.setIndex(f),this.setAttribute("position",new vt(g,3)),this.setAttribute("normal",new vt(b,3)),this.setAttribute("uv",new vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ks=class n extends dt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new I,d=new I,f=[],g=[],b=[],m=[];for(let p=0;p<=i;p++){let _=[],T=p/i,x=a+T*o,v=e*Math.cos(x),M=Math.sqrt(e*e-v*v),A=0;p===0&&a===0?A=.5/t:p===i&&c===Math.PI&&(A=-.5/t);for(let y=0;y<=t;y++){let E=y/t,L=s+E*r;u.x=-M*Math.cos(L),u.y=v,u.z=M*Math.sin(L),g.push(u.x,u.y,u.z),d.copy(u).normalize(),b.push(d.x,d.y,d.z),m.push(E+A,1-T),_.push(l++)}h.push(_)}for(let p=0;p<i;p++)for(let _=0;_<t;_++){let T=h[p][_+1],x=h[p][_],v=h[p+1][_],M=h[p+1][_+1];(p!==0||a>0)&&f.push(T,x,M),(p!==i-1||c<Math.PI)&&f.push(x,v,M)}this.setIndex(f),this.setAttribute("position",new vt(g,3)),this.setAttribute("normal",new vt(b,3)),this.setAttribute("uv",new vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var qa=class n extends dt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let c=[],l=[],h=[],u=[],d=new I,f=new I,g=new I;for(let b=0;b<=i;b++){let m=a+b/i*o;for(let p=0;p<=s;p++){let _=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(_),f.y=(e+t*Math.cos(m))*Math.sin(_),f.z=t*Math.sin(m),l.push(f.x,f.y,f.z),d.x=e*Math.cos(_),d.y=e*Math.sin(_),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(p/s),u.push(b/i)}}for(let b=1;b<=i;b++)for(let m=1;m<=s;m++){let p=(s+1)*b+m-1,_=(s+1)*(b-1)+m-1,T=(s+1)*(b-1)+m,x=(s+1)*b+m;c.push(p,_,x),c.push(_,T,x)}this.setIndex(c),this.setAttribute("position",new vt(l,3)),this.setAttribute("normal",new vt(h,3)),this.setAttribute("uv",new vt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function nr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Ef(s))s.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Ef(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function bn(n){let e={};for(let t=0;t<n.length;t++){let i=nr(n[t]);for(let s in i)e[s]=i[s]}return e}function Ef(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Ug(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function du(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}var ir={clone:nr,merge:bn},Og=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ut=class extends An{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Og,this.fragmentShader=kg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=nr(e.uniforms),this.uniformsGroups=Ug(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Be().setHex(s.value);break;case"v2":this.uniforms[i].value=new Ae().fromArray(s.value);break;case"v3":this.uniforms[i].value=new I().fromArray(s.value);break;case"v4":this.uniforms[i].value=new bt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Je().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Ye().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},gc=class extends Ut{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},$s=class extends An{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pl,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},gn=class extends $s{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var bc=class extends An{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ip,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},_c=class extends An{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function fs(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function tc(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}function Bg(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Rf(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,a=0;a!==i;++r){let o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=n[o+c]}return s}function zg(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push(...a)),r=n[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=n[s++];while(r!==void 0)}var wi=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},xc=class extends wi{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ih,endingEnd:Ih}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Lh:r=e,o=2*t-i;break;case Dh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Lh:a=e,c=2*i-t;break;case Dh:a=1,c=i+s[1]-s[0];break;default:a=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),b=g*g,m=b*g,p=-d*m+2*d*b-d*g,_=(1+d)*m+(-1.5-2*d)*b+(-.5+d)*g+1,T=(-1-f)*m+(1.5+f)*b+.5*g,x=f*m-f*b;for(let v=0;v!==o;++v)r[v]=p*a[h+v]+_*a[l+v]+T*a[c+v]+x*a[u+v];return r}},vc=class extends wi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},yc=class extends wi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Mc=class extends wi{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(i-t)/(s-t),b=1-g;for(let m=0;m!==o;++m)r[m]=a[l+m]*b+a[c+m]*g;return r}let d=o*2,f=e-1;for(let g=0;g!==o;++g){let b=a[l+g],m=a[c+g],p=f*d+g*2,_=u[p],T=u[p+1],x=e*d+g*2,v=h[x],M=h[x+1],A=Vg(i,t,_,v,s);r[g]=bp(A,b,T,M,m)}return r}};function bp(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function Gg(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function Vg(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=bp(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let c=Gg(r,e,t,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var En=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=fs(t,this.TimeBufferType),this.values=fs(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:fs(e.times,Array),values:fs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),tc(e.settings)&&(i.settings={inTangents:fs(e.settings.inTangents,Array),outTangents:fs(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new yc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new vc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new xc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Mc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Hs:t=this.InterpolantFactoryMethodDiscrete;break;case Ws:t=this.InterpolantFactoryMethodLinear;break;case Qo:t=this.InterpolantFactoryMethodSmooth;break;case Ph:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ve("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hs;case this.InterpolantFactoryMethodLinear:return Ws;case this.InterpolantFactoryMethodSmooth:return Qo;case this.InterpolantFactoryMethodBezier:return Ph}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;tc(this.settings)&&(Cf(this.settings.inTangents,e),Cf(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(je("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(je("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){je("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){je("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Zm(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){je("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Qo,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let b=t[u+g];if(b!==t[d+g]||b!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,tc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Cf(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}En.prototype.ValueTypeName="";En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=Ws;var Ki=class extends En{constructor(e,t,i){super(e,t,i)}};Ki.prototype.ValueTypeName="bool";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=Hs;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Xa=class extends En{constructor(e,t,i,s){super(e,t,i,s)}};Xa.prototype.ValueTypeName="color";var $i=class extends En{constructor(e,t,i,s){super(e,t,i,s)}};$i.prototype.ValueTypeName="number";var Sc=class extends wi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)Xt.slerpFlat(r,0,a,l-o,a,l,c);return r}},Yi=class extends En{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Sc(this.times,this.values,this.getValueSize(),e)}};Yi.prototype.ValueTypeName="quaternion";Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ji=class extends En{constructor(e,t,i){super(e,t,i)}};Ji.prototype.ValueTypeName="string";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=Hs;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var _s=class extends En{constructor(e,t,i,s){super(e,t,i,s)}};_s.prototype.ValueTypeName="vector";var ja=class{constructor(e="",t=-1,i=[],s=np){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=di(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(Wg(i[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=i.length;r!==a;++r)t.push(En.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=Bg(c);c=Rf(c,1,h),l=Rf(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new $i(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,i));return a}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Hg(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return $i;case"vector":case"vector2":case"vector3":case"vector4":return _s;case"color":return Xa;case"quaternion":return Yi;case"bool":case"boolean":return Ki;case"string":return Ji}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function Wg(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Hg(n.type);if(n.times===void 0){let i=[],s=[];zg(n.keys,i,s,"value"),n.times=i,n.values=s}let t;return e.parse!==void 0?t=e.parse(n):t=new e(n.name,n.times,n.values,n.interpolation),tc(n.settings)&&(t.settings={inTangents:fs(n.settings.inTangents,Float32Array),outTangents:fs(n.settings.outTangents,Float32Array)}),t}var Si={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Pf(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Pf(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Pf(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Tc=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},_p=new Tc,Ai=class{constructor(e){this.manager=e!==void 0?e:_p,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ai.DEFAULT_MATERIAL_NAME="__DEFAULT";var Gi={},Fh=class extends Error{constructor(e,t){super(e),this.response=t}},Yr=class extends Ai{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Si.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Gi[e]!==void 0){Gi[e].push({onLoad:t,onProgress:i,onError:s});return}Gi[e]=[],Gi[e].push({onLoad:t,onProgress:i,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ve("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Gi[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,b=0,m=new ReadableStream({start(p){_();function _(){u.read().then(({done:T,value:x})=>{if(T)p.close();else{b+=x.byteLength;let v=new ProgressEvent("progress",{lengthComputable:g,loaded:b,total:f});for(let M=0,A=h.length;M<A;M++){let y=h[M];y.onProgress&&y.onProgress(v)}p.enqueue(x),_()}},T=>{p.error(T)})}}});return new Response(m)}else throw new Fh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Si.add(`file:${e}`,l);let h=Gi[e];delete Gi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=Gi[e];if(h===void 0)throw this.manager.itemError(e),l;delete Gi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Cr=new WeakMap,wc=class extends Ai{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Si.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Cr.get(a);u===void 0&&(u=[],Cr.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=Ur("img");function c(){h(),t&&t(this);let u=Cr.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Cr.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),Si.remove(`image:${e}`);let d=Cr.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(u)}Cr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Si.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var Ka=class extends Ai{constructor(e){super(e)}load(e,t,i,s){let r=new Zt,a=new wc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},Jr=class extends Ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var Eh=new Ye,If=new I,Lf=new I,Zr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.mapType=Cn,this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qr,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;If.setFromMatrixPosition(e.matrixWorld),t.position.copy(If),Lf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Eh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Eh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Fr||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Eh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Jo=new I,Zo=new Xt,Mi=new I,$a=class extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Jo,Zo,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jo,Zo,Mi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Jo,Zo,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jo,Zo,Mi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ds=new I,Df=new Ae,Nf=new Ae,Jt=class extends $a{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ca*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(Ca*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ds.x,ds.y).multiplyScalar(-e/ds.z),ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ds.x,ds.y).multiplyScalar(-e/ds.z)}getViewSize(e,t){return this.getViewBounds(e,Df,Nf),t.subVectors(Nf,Df)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ca*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Uh=class extends Zr{constructor(){super(new Jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=qs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Ya=class extends Jr{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Uh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Oh=class extends Zr{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0}},Ja=class extends Jr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Oh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ei=class extends $a{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},kh=class extends Zr{constructor(){super(new Ei(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Za=class extends Jr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new kh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Zi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Rh=new WeakMap,Qa=class extends Ai{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ve("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ve("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Si.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{Rh.has(a)===!0?(s&&s(Rh.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Si.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Rh.set(c,l),Si.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Si.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Pr=-90,Ir=1,Ys=class extends Ot{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Jt(Pr,Ir,e,t);s.layers=this.layers,this.add(s);let r=new Jt(Pr,Ir,e,t);r.layers=this.layers,this.add(r);let a=new Jt(Pr,Ir,e,t);a.layers=this.layers,this.add(a);let o=new Jt(Pr,Ir,e,t);o.layers=this.layers,this.add(o);let c=new Jt(Pr,Ir,e,t);c.layers=this.layers,this.add(c);let l=new Jt(Pr,Ir,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===ui)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Fr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ac=class extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Js=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=qg.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function qg(){this._document.hidden===!1&&this.reset()}var fu="\\[\\]\\.:\\/",Xg=new RegExp("["+fu+"]","g"),pu="[^"+fu+"]",jg="[^"+fu.replace("\\.","")+"]",Kg=/((?:WC+[\/:])*)/.source.replace("WC",pu),$g=/(WCOD+)?/.source.replace("WCOD",jg),Yg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pu),Jg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pu),Zg=new RegExp("^"+Kg+$g+Yg+Jg+"$"),Qg=["material","materials","bones","map"],Bh=class{constructor(e,t,i){let s=i||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Rt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Xg,"")}static parseTrackName(e){let t=Zg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Qg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ve("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;je("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Rt.Composite=Bh;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var wM=new Float32Array(1);var xs=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=et(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var vu=class vu{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};vu.prototype.isMatrix2=!0;var zh=vu;var eo=class extends fi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function mu(n,e,t,i){let s=e0(i);switch(t){case ru:return n*e;case Nc:return n*e/s.components*s.byteLength;case Fc:return n*e/s.components*s.byteLength;case Ts:return n*e*2/s.components*s.byteLength;case Uc:return n*e*2/s.components*s.byteLength;case au:return n*e*3/s.components*s.byteLength;case Hn:return n*e*4/s.components*s.byteLength;case Oc:return n*e*4/s.components*s.byteLength;case so:case ro:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ao:case oo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bc:case Gc:return Math.max(n,16)*Math.max(e,8)/4;case kc:case zc:return Math.max(n,8)*Math.max(e,8)/2;case Vc:case Hc:case qc:case Xc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Wc:case co:case jc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Kc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $c:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Yc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Jc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Zc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Qc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case el:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case tl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case nl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case il:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case sl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case rl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case al:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ol:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case cl:case ll:case hl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ul:case dl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case lo:case fl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function e0(n){switch(n){case Cn:case tu:return{byteLength:1,components:1};case na:case nu:case jt:return{byteLength:2,components:1};case Lc:case Dc:return{byteLength:2,components:4};case pi:case Ic:case Vn:return{byteLength:4,components:1};case iu:case su:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function zp(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function n0(n){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,c,l){let h=c.array,u=c.updateRanges;if(n.bindBuffer(l,o),u.length===0)n.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],b=u[f];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++d,u[d]=b)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let b=u[f];n.bufferSubData(l,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var i0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,s0=`#ifdef USE_ALPHAHASH
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
#endif`,r0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,a0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,o0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,c0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,l0=`#ifdef USE_AOMAP
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
#endif`,h0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,u0=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,d0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,f0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,p0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,m0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,g0=`#ifdef USE_IRIDESCENCE
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
#endif`,b0=`#ifdef USE_BUMPMAP
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
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,M0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,S0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,T0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,w0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,A0=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,E0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,R0=`vec3 transformedNormal = objectNormal;
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
#endif`,C0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,P0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,I0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,L0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,D0="gl_FragColor = linearToOutputTexel( gl_FragColor );",N0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,F0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,U0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,O0=`#ifdef USE_ENVMAP
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
#endif`,k0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,B0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,z0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,G0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,V0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,H0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,W0=`#ifdef USE_GRADIENTMAP
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
}`,q0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,X0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,j0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,K0=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,$0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Y0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,J0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Z0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,tb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nb=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ib=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rb=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ab=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ob=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ub=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,db=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fb=`#if defined( USE_POINTS_UV )
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
#endif`,pb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_b=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xb=`#ifdef USE_MORPHTARGETS
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
#endif`,vb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Mb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Sb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ab=`#ifdef USE_NORMALMAP
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
#endif`,Eb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ib=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Db=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ub=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ob=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,zb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,Gb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Vb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,Hb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wb=`#ifdef USE_SKINNING
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
#endif`,qb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xb=`#ifdef USE_SKINNING
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
#endif`,jb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$b=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jb=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zb=`#ifdef USE_TRANSMISSION
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
#endif`,Qb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,i_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,s_=`uniform sampler2D t2D;
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
}`,r_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l_=`#include <common>
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
}`,h_=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,u_=`#define DISTANCE
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
}`,d_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,f_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,p_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m_=`uniform float scale;
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
}`,g_=`uniform vec3 diffuse;
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
}`,b_=`#include <common>
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
}`,__=`uniform vec3 diffuse;
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
}`,x_=`#define LAMBERT
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
}`,v_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,y_=`#define MATCAP
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
}`,M_=`#define MATCAP
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
}`,S_=`#define NORMAL
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
}`,T_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,w_=`#define PHONG
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
}`,A_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,E_=`#define STANDARD
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
}`,R_=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,C_=`#define TOON
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
}`,P_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,I_=`uniform float size;
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
}`,L_=`uniform vec3 diffuse;
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
}`,D_=`#include <common>
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
}`,N_=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,F_=`uniform float rotation;
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
}`,U_=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:i0,alphahash_pars_fragment:s0,alphamap_fragment:r0,alphamap_pars_fragment:a0,alphatest_fragment:o0,alphatest_pars_fragment:c0,aomap_fragment:l0,aomap_pars_fragment:h0,batching_pars_vertex:u0,batching_vertex:d0,begin_vertex:f0,beginnormal_vertex:p0,bsdfs:m0,iridescence_fragment:g0,bumpmap_pars_fragment:b0,clipping_planes_fragment:_0,clipping_planes_pars_fragment:x0,clipping_planes_pars_vertex:v0,clipping_planes_vertex:y0,color_fragment:M0,color_pars_fragment:S0,color_pars_vertex:T0,color_vertex:w0,common:A0,cube_uv_reflection_fragment:E0,defaultnormal_vertex:R0,displacementmap_pars_vertex:C0,displacementmap_vertex:P0,emissivemap_fragment:I0,emissivemap_pars_fragment:L0,colorspace_fragment:D0,colorspace_pars_fragment:N0,envmap_fragment:F0,envmap_common_pars_fragment:U0,envmap_pars_fragment:O0,envmap_pars_vertex:k0,envmap_physical_pars_fragment:$0,envmap_vertex:B0,fog_vertex:z0,fog_pars_vertex:G0,fog_fragment:V0,fog_pars_fragment:H0,gradientmap_pars_fragment:W0,lightmap_pars_fragment:q0,lights_lambert_fragment:X0,lights_lambert_pars_fragment:j0,lights_pars_begin:K0,lights_toon_fragment:Y0,lights_toon_pars_fragment:J0,lights_phong_fragment:Z0,lights_phong_pars_fragment:Q0,lights_physical_fragment:eb,lights_physical_pars_fragment:tb,lights_fragment_begin:nb,lights_fragment_maps:ib,lights_fragment_end:sb,lightprobes_pars_fragment:rb,logdepthbuf_fragment:ab,logdepthbuf_pars_fragment:ob,logdepthbuf_pars_vertex:cb,logdepthbuf_vertex:lb,map_fragment:hb,map_pars_fragment:ub,map_particle_fragment:db,map_particle_pars_fragment:fb,metalnessmap_fragment:pb,metalnessmap_pars_fragment:mb,morphinstance_vertex:gb,morphcolor_vertex:bb,morphnormal_vertex:_b,morphtarget_pars_vertex:xb,morphtarget_vertex:vb,normal_fragment_begin:yb,normal_fragment_maps:Mb,normal_pars_fragment:Sb,normal_pars_vertex:Tb,normal_vertex:wb,normalmap_pars_fragment:Ab,clearcoat_normal_fragment_begin:Eb,clearcoat_normal_fragment_maps:Rb,clearcoat_pars_fragment:Cb,iridescence_pars_fragment:Pb,opaque_fragment:Ib,packing:Lb,premultiplied_alpha_fragment:Db,project_vertex:Nb,dithering_fragment:Fb,dithering_pars_fragment:Ub,roughnessmap_fragment:Ob,roughnessmap_pars_fragment:kb,shadowmap_pars_fragment:Bb,shadowmap_pars_vertex:zb,shadowmap_vertex:Gb,shadowmask_pars_fragment:Vb,skinbase_vertex:Hb,skinning_pars_vertex:Wb,skinning_vertex:qb,skinnormal_vertex:Xb,specularmap_fragment:jb,specularmap_pars_fragment:Kb,tonemapping_fragment:$b,tonemapping_pars_fragment:Yb,transmission_fragment:Jb,transmission_pars_fragment:Zb,uv_pars_fragment:Qb,uv_pars_vertex:e_,uv_vertex:t_,worldpos_vertex:n_,background_vert:i_,background_frag:s_,backgroundCube_vert:r_,backgroundCube_frag:a_,cube_vert:o_,cube_frag:c_,depth_vert:l_,depth_frag:h_,distance_vert:u_,distance_frag:d_,equirect_vert:f_,equirect_frag:p_,linedashed_vert:m_,linedashed_frag:g_,meshbasic_vert:b_,meshbasic_frag:__,meshlambert_vert:x_,meshlambert_frag:v_,meshmatcap_vert:y_,meshmatcap_frag:M_,meshnormal_vert:S_,meshnormal_frag:T_,meshphong_vert:w_,meshphong_frag:A_,meshphysical_vert:E_,meshphysical_frag:R_,meshtoon_vert:C_,meshtoon_frag:P_,points_vert:I_,points_frag:L_,shadow_vert:D_,shadow_frag:N_,sprite_vert:F_,sprite_frag:U_},Ce={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Ci={basic:{uniforms:bn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:bn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Be(0)},envMapIntensity:{value:1}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:bn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:bn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:bn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new Be(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:bn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:bn([Ce.points,Ce.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:bn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:bn([Ce.common,Ce.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:bn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:bn([Ce.sprite,Ce.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:bn([Ce.common,Ce.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:bn([Ce.lights,Ce.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Ci.physical={uniforms:bn([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};var bl={r:0,b:0,g:0},O_=new Ye,Gp=new Je;Gp.set(-1,0,0,0,1,0,0,0,1);function k_(n,e,t,i,s,r){let a=new Be(0),o=s===!0?0:1,c,l,h=null,u=0,d=null;function f(_){let T=_.isScene===!0?_.background:null;if(T&&T.isTexture){let x=_.backgroundBlurriness>0;T=e.get(T,x)}return T}function g(_){let T=!1,x=f(_);x===null?m(a,o):x&&x.isColor&&(m(x,1),T=!0);let v=n.xr.getEnvironmentBlendMode();v==="additive"?t.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function b(_,T){let x=f(T);x&&(x.isCubeTexture||x.mapping===io)?(l===void 0&&(l=new St(new Xi(1,1,1),new Ut({name:"BackgroundCubeMaterial",uniforms:nr(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(v,M,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(O_.makeRotationFromEuler(T.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Gp),l.material.toneMapped=st.getTransfer(x.colorSpace)!==xt,(h!==x||u!==x.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=x,u=x.version,d=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new St(new ji(2,2),new Ut({name:"BackgroundMaterial",uniforms:nr(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=st.getTransfer(x.colorSpace)!==xt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||u!==x.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=x,u=x.version,d=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function m(_,T){_.getRGB(bl,du(n)),t.buffers.color.setClear(bl.r,bl.g,bl.b,T,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,T=1){a.set(_),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,m(a,o)},render:g,addToRenderList:b,dispose:p}}function B_(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,a=!1;function o(O,U,F,D,k){let V=!1,N=u(O,D,F,U);r!==N&&(r=N,l(r.object)),V=f(O,D,F,k),V&&g(O,D,F,k),k!==null&&e.update(k,n.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,x(O,U,F,D),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return n.createVertexArray()}function l(O){return n.bindVertexArray(O)}function h(O){return n.deleteVertexArray(O)}function u(O,U,F,D){let k=D.wireframe===!0,V=i[U.id];V===void 0&&(V={},i[U.id]=V);let N=O.isInstancedMesh===!0?O.id:0,K=V[N];K===void 0&&(K={},V[N]=K);let P=K[F.id];P===void 0&&(P={},K[F.id]=P);let H=P[k];return H===void 0&&(H=d(c()),P[k]=H),H}function d(O){let U=[],F=[],D=[];for(let k=0;k<t;k++)U[k]=0,F[k]=0,D[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:F,attributeDivisors:D,object:O,attributes:{},index:null}}function f(O,U,F,D){let k=r.attributes,V=U.attributes,N=0,K=F.getAttributes();for(let P in K)if(K[P].location>=0){let X=k[P],he=V[P];if(he===void 0&&(P==="instanceMatrix"&&O.instanceMatrix&&(he=O.instanceMatrix),P==="instanceColor"&&O.instanceColor&&(he=O.instanceColor)),X===void 0||X.attribute!==he||he&&X.data!==he.data)return!0;N++}return r.attributesNum!==N||r.index!==D}function g(O,U,F,D){let k={},V=U.attributes,N=0,K=F.getAttributes();for(let P in K)if(K[P].location>=0){let X=V[P];X===void 0&&(P==="instanceMatrix"&&O.instanceMatrix&&(X=O.instanceMatrix),P==="instanceColor"&&O.instanceColor&&(X=O.instanceColor));let he={};he.attribute=X,X&&X.data&&(he.data=X.data),k[P]=he,N++}r.attributes=k,r.attributesNum=N,r.index=D}function b(){let O=r.newAttributes;for(let U=0,F=O.length;U<F;U++)O[U]=0}function m(O){p(O,0)}function p(O,U){let F=r.newAttributes,D=r.enabledAttributes,k=r.attributeDivisors;F[O]=1,D[O]===0&&(n.enableVertexAttribArray(O),D[O]=1),k[O]!==U&&(n.vertexAttribDivisor(O,U),k[O]=U)}function _(){let O=r.newAttributes,U=r.enabledAttributes;for(let F=0,D=U.length;F<D;F++)U[F]!==O[F]&&(n.disableVertexAttribArray(F),U[F]=0)}function T(O,U,F,D,k,V,N){N===!0?n.vertexAttribIPointer(O,U,F,k,V):n.vertexAttribPointer(O,U,F,D,k,V)}function x(O,U,F,D){b();let k=D.attributes,V=F.getAttributes(),N=U.defaultAttributeValues;for(let K in V){let P=V[K];if(P.location>=0){let H=k[K];if(H===void 0&&(K==="instanceMatrix"&&O.instanceMatrix&&(H=O.instanceMatrix),K==="instanceColor"&&O.instanceColor&&(H=O.instanceColor)),H!==void 0){let X=H.normalized,he=H.itemSize,J=e.get(H);if(J===void 0)continue;let se=J.buffer,ie=J.type,pe=J.bytesPerElement,q=ie===n.INT||ie===n.UNSIGNED_INT||H.gpuType===Ic;if(H.isInterleavedBufferAttribute){let R=H.data,W=R.stride,te=H.offset;if(R.isInstancedInterleavedBuffer){for(let ue=0;ue<P.locationSize;ue++)p(P.location+ue,R.meshPerAttribute);O.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let ue=0;ue<P.locationSize;ue++)m(P.location+ue);n.bindBuffer(n.ARRAY_BUFFER,se);for(let ue=0;ue<P.locationSize;ue++)T(P.location+ue,he/P.locationSize,ie,X,W*pe,(te+he/P.locationSize*ue)*pe,q)}else{if(H.isInstancedBufferAttribute){for(let R=0;R<P.locationSize;R++)p(P.location+R,H.meshPerAttribute);O.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let R=0;R<P.locationSize;R++)m(P.location+R);n.bindBuffer(n.ARRAY_BUFFER,se);for(let R=0;R<P.locationSize;R++)T(P.location+R,he/P.locationSize,ie,X,he*pe,he/P.locationSize*R*pe,q)}}else if(N!==void 0){let X=N[K];if(X!==void 0)switch(X.length){case 2:n.vertexAttrib2fv(P.location,X);break;case 3:n.vertexAttrib3fv(P.location,X);break;case 4:n.vertexAttrib4fv(P.location,X);break;default:n.vertexAttrib1fv(P.location,X)}}}}_()}function v(){E();for(let O in i){let U=i[O];for(let F in U){let D=U[F];for(let k in D){let V=D[k];for(let N in V)h(V[N].object),delete V[N];delete D[k]}}delete i[O]}}function M(O){if(i[O.id]===void 0)return;let U=i[O.id];for(let F in U){let D=U[F];for(let k in D){let V=D[k];for(let N in V)h(V[N].object),delete V[N];delete D[k]}}delete i[O.id]}function A(O){for(let U in i){let F=i[U];for(let D in F){let k=F[D];if(k[O.id]===void 0)continue;let V=k[O.id];for(let N in V)h(V[N].object),delete V[N];delete k[O.id]}}}function y(O){for(let U in i){let F=i[U],D=O.isInstancedMesh===!0?O.id:0,k=F[D];if(k!==void 0){for(let V in k){let N=k[V];for(let K in N)h(N[K].object),delete N[K];delete k[V]}delete F[D],Object.keys(F).length===0&&delete i[U]}}}function E(){L(),a=!0,r!==s&&(r=s,l(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:L,dispose:v,releaseStatesOfGeometry:M,releaseStatesOfObject:y,releaseStatesOfProgram:A,initAttributes:b,enableAttribute:m,disableUnusedAttributes:_}}function z_(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function a(c,l,h){h!==0&&(n.drawArraysInstanced(i,c,l,h),t.update(l,i,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];t.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function G_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Hn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let y=A===jt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Cn&&A!==Vn&&!y&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Ve("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ve("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=n.getParameter(n.MAX_SAMPLES),M=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:T,maxFragmentUniforms:x,maxSamples:v,samples:M}}function V_(n){let e=this,t=null,i=0,s=!1,r=!1,a=new Bn,o=new Je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,b=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let _=r?0:i,T=_*4,x=p.clippingState||null;c.value=x,x=h(g,d,T,f);for(let v=0;v!==T;++v)x[v]=t[v];p.clippingState=x,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){let b=u!==null?u.length:0,m=null;if(b!==0){if(m=c.value,g!==!0||m===null){let p=f+b*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,x=f;T!==b;++T,x+=4)a.copy(u[T]).applyMatrix4(_,o),a.normal.toArray(m,x),m[x+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}var aa=4,H_=6,W_=20,q_=256,fo=new Ei,xp=new Be,yu=null,Mu=0,Su=0,Tu=!1,X_=new I,sr=new I,ca=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=X_}=r;yu=this._renderer.getRenderTarget(),Mu=this._renderer.getActiveCubeFace(),Su=this._renderer.getActiveMipmapLevel(),Tu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(yu,Mu,Su),this._renderer.xr.enabled=Tu,e.scissorTest=!1,ra(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ms||e.mapping===er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yu=this._renderer.getRenderTarget(),Mu=this._renderer.getActiveCubeFace(),Su=this._renderer.getActiveMipmapLevel(),Tu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:jt,format:Hn,colorSpace:vn,depthBuffer:!1},s=vp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vp(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=j_(r)),this._blurMaterial=$_(r,e,t),this._ggxMaterial=K_(r,e,t)}return s}_compileMaterial(e){let t=new St(new dt,e);this._renderer.compile(t,fo)}_sceneToCubeUV(e,t,i,s,r){let c=new Jt(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(xp),u.toneMapping=Gn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new St(new Xi,new zt({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,m=b.material,p=!1,_=e.background;_?_.isColor&&(m.color.copy(_),e.background=null,p=!0):(m.color.copy(xp),p=!0);for(let T=0;T<6;T++){let x=T%3;x===0?(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[T],r.y,r.z)):x===1?(c.up.set(0,0,l[T]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[T],r.z)):(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[T]));let v=this._cubeSize;ra(s,x*v,T>2?v:0,v,v),u.setRenderTarget(s),p&&u.render(b,c),u.render(e,c)}u.toneMapping=f,u.autoClear=d,e.background=_}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Ms||e.mapping===er;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yp());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;ra(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,fo)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let c=a.uniforms,l=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=l*1.25,f=u*d,{_lodMax:g}=this,b=this._sizeLods[i],m=3*b*(i>g-aa?i-g+aa:0),p=4*(this._cubeSize-b);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,ra(r,m,p,3*b,2*b),s.setRenderTarget(r),s.render(o,fo),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-i,ra(e,m,p,3*b,2*b),s.setRenderTarget(e),s.render(o,fo)}_blur(e,t,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-aa?s-this._lodMax+aa:0),d=4*(this._cubeSize-h);ra(t,u,d,3*h,2*h),a.setRenderTarget(t),a.render(c,fo)}};function j_(n){let e=[],t=[],i=n,s=n-aa+1+H_;for(let r=0;r<s;r++){let a=Math.pow(2,i);e.push(a);let o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,d=6,f=3,g=new Float32Array(f*d*u),b=new Float32Array(f*d*u);for(let p=0;p<u;p++){let _=p%3*2/3-1,T=p>2?0:-1,x=[_,T,0,_+2/3,T,0,_+2/3,T+1,0,_,T,0,_+2/3,T+1,0,_,T+1,0];g.set(x,f*d*p);for(let v=0;v<d;v++){let M=h[v*2]*2-1,A=h[v*2+1]*2-1;p===0?sr.set(1,A,M):p===1?sr.set(-M,1,-A):p===2?sr.set(-M,A,1):p===3?sr.set(-1,A,-M):p===4?sr.set(-M,-1,A):sr.set(M,A,-1),sr.toArray(b,(p*d+v)*f)}}let m=new dt;m.setAttribute("position",new gt(g,f)),m.setAttribute("outputDirection",new gt(b,f)),t.push(new St(m,null)),i>aa&&i--}return{lodMeshes:t,sizeLods:e}}function vp(n,e,t){let i=new Bt(n,e,t);return i.texture.mapping=io,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ra(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function K_(n,e,t){return new Ut({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:q_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function $_(n,e,t){return new Ut({name:"SphericalGaussianBlur",defines:{SAMPLES:W_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:vl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function yp(){return new Ut({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vl(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Mp(){return new Ut({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function vl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var rr=class extends Bt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Va(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Xi(5,5,5),r=new Ut({name:"CubemapFromEquirect",uniforms:nr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:Qn});r.uniforms.tEquirect.value=t;let a=new St(s,r),o=t.minFilter;return t.minFilter===Rn&&(t.minFilter=qt),new Ys(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}};function Y_(n){let e=new WeakMap,t=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Rc||f===Cc)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let b=new rr(g.height);return b.fromEquirectangularTexture(n,d),e.set(d,b),d.addEventListener("dispose",l),o(b.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,g=f===Rc||f===Cc,b=f===Ms||f===er;if(g||b){let m=t.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new ca(n)),m=g?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let _=d.image;return g&&_&&_.height>0||b&&_&&c(_)?(i===null&&(i=new ca(n)),m=g?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===Rc?d.mapping=Ms:f===Cc&&(d.mapping=er),d}function c(d){let f=0,g=6;for(let b=0;b<g;b++)d[b]!==void 0&&f++;return f===g}function l(d){let f=d.target;f.removeEventListener("dispose",l);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function J_(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Vs("WebGLRenderer: "+i+" extension not supported."),s}}}function Z_(n,e,t,i){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let f in d)e.update(d[f],n.ARRAY_BUFFER)}function l(u){let d=[],f=u.index,g=u.attributes.position,b=0;if(g===void 0)return;if(f!==null){let _=f.array;b=f.version;for(let T=0,x=_.length;T<x;T+=3){let v=_[T+0],M=_[T+1],A=_[T+2];d.push(v,M,M,A,A,v)}}else{let _=g.array;b=g.version;for(let T=0,x=_.length/3-1;T<x;T+=3){let v=T+0,M=T+1,A=T+2;d.push(v,M,M,A,A,v)}}let m=new(g.count>=65535?Ua:Fa)(d,1);m.version=b;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Q_(n,e,t){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,d){n.drawElements(i,d,r,u*a),t.update(d,i,1)}function l(u,d,f){f!==0&&(n.drawElementsInstanced(i,d,r,u*a,f),t.update(d,i,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,f);let b=0;for(let m=0;m<f;m++)b+=d[m];t.update(b,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function ex(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:je("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function tx(n,e,t){let i=new WeakMap,s=new bt;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let E=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],T=0;f===!0&&(T=1),g===!0&&(T=2),b===!0&&(T=3);let x=o.attributes.position.count*T,v=1;x>e.maxTextureSize&&(v=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let M=new Float32Array(x*v*4*u),A=new Da(M,x,v,u);A.type=Vn,A.needsUpdate=!0;let y=T*4;for(let L=0;L<u;L++){let O=m[L],U=p[L],F=_[L],D=x*v*4*L;for(let k=0;k<O.count;k++){let V=k*y;f===!0&&(s.fromBufferAttribute(O,k),M[D+V+0]=s.x,M[D+V+1]=s.y,M[D+V+2]=s.z,M[D+V+3]=0),g===!0&&(s.fromBufferAttribute(U,k),M[D+V+4]=s.x,M[D+V+5]=s.y,M[D+V+6]=s.z,M[D+V+7]=0),b===!0&&(s.fromBufferAttribute(F,k),M[D+V+8]=s.x,M[D+V+9]=s.y,M[D+V+10]=s.z,M[D+V+11]=F.itemSize===4?s.w:1)}}d={count:u,texture:A,size:new Ae(x,v)},i.set(o,d),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let b=0;b<l.length;b++)f+=l[b];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function nx(n,e,t,i,s){let r=new WeakMap;function a(l){let h=s.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var ix={[jh]:"LINEAR_TONE_MAPPING",[Kh]:"REINHARD_TONE_MAPPING",[$h]:"CINEON_TONE_MAPPING",[Yh]:"ACES_FILMIC_TONE_MAPPING",[Zh]:"AGX_TONE_MAPPING",[Qh]:"NEUTRAL_TONE_MAPPING",[Jh]:"CUSTOM_TONE_MAPPING"};function sx(n,e,t,i,s,r){let a=new Bt(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new dt;l.setAttribute("position",new vt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new vt([0,2,0,0,2,0],2));let h=new gc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new St(l,h),d=new Ei(-1,1,1,-1,0,1),f=null,g=null,b=!1,m,p=null,_=[],T=!1;this.setSize=function(x,v){a.setSize(x,v),o!==null&&o.setSize(x,v),c!==null&&c.setSize(x,v);for(let M=0;M<_.length;M++){let A=_[M];A.setSize&&A.setSize(x,v)}},this.setEffects=function(x){_=x,T=_.length>0&&_[0].isRenderPass===!0;let v=a.width,M=a.height;_.length>0&&o===null&&(o=new Bt(v,M,{type:jt,depthBuffer:!1,stencilBuffer:!1}),c=new Bt(v,M,{type:jt,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<_.length;A++){let y=_[A];y.setSize&&y.setSize(v,M)}},this.begin=function(x,v){if(b||x.toneMapping===Gn&&_.length===0)return!1;if(p=v,v!==null){let M=v.width,A=v.height;(a.width!==M||a.height!==A)&&this.setSize(M,A)}return T===!1&&x.setRenderTarget(a),m=x.toneMapping,x.toneMapping=Gn,!0},this.hasRenderPass=function(){return T},this.end=function(x,v){x.toneMapping=m,b=!0;let M=a,A=o;for(let y=0;y<_.length;y++){let E=_[y];E.enabled!==!1&&(E.render(x,A,M,v),E.needsSwap!==!1&&(M=A,A=A===o?c:o))}if(f!==x.outputColorSpace||g!==x.toneMapping){f=x.outputColorSpace,g=x.toneMapping,h.defines={},st.getTransfer(f)===xt&&(h.defines.SRGB_TRANSFER="");let y=ix[g];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=M.texture,x.setRenderTarget(p),x.render(u,d),p=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var Vp=new Zt,Eu=new bs(1,1),Hp=new Da,Wp=new uc,qp=new Va,Sp=[],Tp=[],wp=new Float32Array(16),Ap=new Float32Array(9),Ep=new Float32Array(4);function la(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Sp[s];if(r===void 0&&(r=new Float32Array(s),Sp[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Qt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function en(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function yl(n,e){let t=Tp[e];t===void 0&&(t=new Int32Array(e),Tp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function rx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ax(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;n.uniform2fv(this.addr,e),en(t,e)}}function ox(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;n.uniform3fv(this.addr,e),en(t,e)}}function cx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;n.uniform4fv(this.addr,e),en(t,e)}}function lx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,i))return;Ep.set(i),n.uniformMatrix2fv(this.addr,!1,Ep),en(t,i)}}function hx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,i))return;Ap.set(i),n.uniformMatrix3fv(this.addr,!1,Ap),en(t,i)}}function ux(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,i))return;wp.set(i),n.uniformMatrix4fv(this.addr,!1,wp),en(t,i)}}function dx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function fx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;n.uniform2iv(this.addr,e),en(t,e)}}function px(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;n.uniform3iv(this.addr,e),en(t,e)}}function mx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;n.uniform4iv(this.addr,e),en(t,e)}}function gx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function bx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;n.uniform2uiv(this.addr,e),en(t,e)}}function _x(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;n.uniform3uiv(this.addr,e),en(t,e)}}function xx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;n.uniform4uiv(this.addr,e),en(t,e)}}function vx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Eu.compareFunction=t.isReversedDepthBuffer()?gl:ml,r=Eu):r=Vp,t.setTexture2D(e||r,s)}function yx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Wp,s)}function Mx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||qp,s)}function Sx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Hp,s)}function Tx(n){switch(n){case 5126:return rx;case 35664:return ax;case 35665:return ox;case 35666:return cx;case 35674:return lx;case 35675:return hx;case 35676:return ux;case 5124:case 35670:return dx;case 35667:case 35671:return fx;case 35668:case 35672:return px;case 35669:case 35673:return mx;case 5125:return gx;case 36294:return bx;case 36295:return _x;case 36296:return xx;case 35678:case 36198:case 36298:case 36306:case 35682:return vx;case 35679:case 36299:case 36307:return yx;case 35680:case 36300:case 36308:case 36293:return Mx;case 36289:case 36303:case 36311:case 36292:return Sx}}function wx(n,e){n.uniform1fv(this.addr,e)}function Ax(n,e){let t=la(e,this.size,2);n.uniform2fv(this.addr,t)}function Ex(n,e){let t=la(e,this.size,3);n.uniform3fv(this.addr,t)}function Rx(n,e){let t=la(e,this.size,4);n.uniform4fv(this.addr,t)}function Cx(n,e){let t=la(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Px(n,e){let t=la(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Ix(n,e){let t=la(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Lx(n,e){n.uniform1iv(this.addr,e)}function Dx(n,e){n.uniform2iv(this.addr,e)}function Nx(n,e){n.uniform3iv(this.addr,e)}function Fx(n,e){n.uniform4iv(this.addr,e)}function Ux(n,e){n.uniform1uiv(this.addr,e)}function Ox(n,e){n.uniform2uiv(this.addr,e)}function kx(n,e){n.uniform3uiv(this.addr,e)}function Bx(n,e){n.uniform4uiv(this.addr,e)}function zx(n,e,t){let i=this.cache,s=e.length,r=yl(t,s);Qt(i,r)||(n.uniform1iv(this.addr,r),en(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Eu:a=Vp;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Gx(n,e,t){let i=this.cache,s=e.length,r=yl(t,s);Qt(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Wp,r[a])}function Vx(n,e,t){let i=this.cache,s=e.length,r=yl(t,s);Qt(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||qp,r[a])}function Hx(n,e,t){let i=this.cache,s=e.length,r=yl(t,s);Qt(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Hp,r[a])}function Wx(n){switch(n){case 5126:return wx;case 35664:return Ax;case 35665:return Ex;case 35666:return Rx;case 35674:return Cx;case 35675:return Px;case 35676:return Ix;case 5124:case 35670:return Lx;case 35667:case 35671:return Dx;case 35668:case 35672:return Nx;case 35669:case 35673:return Fx;case 5125:return Ux;case 36294:return Ox;case 36295:return kx;case 36296:return Bx;case 35678:case 36198:case 36298:case 36306:case 35682:return zx;case 35679:case 36299:case 36307:return Gx;case 35680:case 36300:case 36308:case 36293:return Vx;case 36289:case 36303:case 36311:case 36292:return Hx}}var Ru=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Tx(t.type)}},Cu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Wx(t.type)}},Pu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},wu=/(\w+)(\])?(\[|\.)?/g;function Rp(n,e){n.seq.push(e),n.map[e.id]=e}function qx(n,e,t){let i=n.name,s=i.length;for(wu.lastIndex=0;;){let r=wu.exec(i),a=wu.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Rp(t,l===void 0?new Ru(o,n,e):new Cu(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new Pu(o),Rp(t,u)),t=u}}}var oa=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);qx(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function Cp(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Xx=37297,jx=0;function Kx(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var Pp=new Je;function $x(n){st._getMatrix(Pp,st.workingColorSpace,n);let e=`mat3( ${Pp.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(n)){case Ia:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ip(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Kx(n.getShaderSource(e),o)}else return r}function Yx(n,e){let t=$x(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Jx={[jh]:"Linear",[Kh]:"Reinhard",[$h]:"Cineon",[Yh]:"ACESFilmic",[Zh]:"AgX",[Qh]:"Neutral",[Jh]:"Custom"};function Zx(n,e){let t=Jx[e];return t===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var _l=new I;function Qx(){st.getLuminanceCoefficients(_l);let n=_l.x.toFixed(4),e=_l.y.toFixed(4),t=_l.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ev(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mo).join(`
`)}function tv(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function nv(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function mo(n){return n!==""}function Lp(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var iv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Iu(n){return n.replace(iv,rv)}var sv=new Map;function rv(n,e){let t=it[e];if(t===void 0){let i=sv.get(e);if(i!==void 0)t=it[i],Ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Iu(t)}var av=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Np(n){return n.replace(av,ov)}function ov(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fp(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var cv={[to]:"SHADOWMAP_TYPE_PCF",[Qr]:"SHADOWMAP_TYPE_VSM"};function lv(n){return cv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var hv={[Ms]:"ENVMAP_TYPE_CUBE",[er]:"ENVMAP_TYPE_CUBE",[io]:"ENVMAP_TYPE_CUBE_UV"};function uv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":hv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var dv={[er]:"ENVMAP_MODE_REFRACTION"};function fv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":dv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var pv={[Xh]:"ENVMAP_BLENDING_MULTIPLY",[Qf]:"ENVMAP_BLENDING_MIX",[ep]:"ENVMAP_BLENDING_ADD"};function mv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":pv[n.combine]||"ENVMAP_BLENDING_NONE"}function gv(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function bv(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=lv(t),l=uv(t),h=fv(t),u=mv(t),d=gv(t),f=ev(t),g=tv(r),b=s.createProgram(),m,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(mo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(mo).join(`
`),p.length>0&&(p+=`
`)):(m=[Fp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mo).join(`
`),p=[Fp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gn?"#define TONE_MAPPING":"",t.toneMapping!==Gn?it.tonemapping_pars_fragment:"",t.toneMapping!==Gn?Zx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,Yx("linearToOutputTexel",t.outputColorSpace),Qx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mo).join(`
`)),a=Iu(a),a=Lp(a,t),a=Dp(a,t),o=Iu(o),o=Lp(o,t),o=Dp(o,t),a=Np(a),o=Np(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===lu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let T=_+m+a,x=_+p+o,v=Cp(s,s.VERTEX_SHADER,T),M=Cp(s,s.FRAGMENT_SHADER,x);s.attachShader(b,v),s.attachShader(b,M),t.index0AttributeName!==void 0?s.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function A(O){if(n.debug.checkShaderErrors){let U=s.getProgramInfoLog(b)||"",F=s.getShaderInfoLog(v)||"",D=s.getShaderInfoLog(M)||"",k=U.trim(),V=F.trim(),N=D.trim(),K=!0,P=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,b,v,M);else{let H=Ip(s,v,"vertex"),X=Ip(s,M,"fragment");je("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+k+`
`+H+`
`+X)}else k!==""?Ve("WebGLProgram: Program Info Log:",k):(V===""||N==="")&&(P=!1);P&&(O.diagnostics={runnable:K,programLog:k,vertexShader:{log:V,prefix:m},fragmentShader:{log:N,prefix:p}})}s.deleteShader(v),s.deleteShader(M),y=new oa(s,b),E=nv(s,b)}let y;this.getUniforms=function(){return y===void 0&&A(this),y};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(b,Xx)),L},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jx++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=v,this.fragmentShader=M,this}var _v=0,Lu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Du(e),t.set(e,i)),i}},Du=class{constructor(e){this.id=_v++,this.code=e,this.usedTimes=0}};function xv(n){return n===Ts||n===co||n===lo}function vv(n,e,t,i,s,r){let a=new Na,o=new Lu,c=new Set,l=[],h=new Map,u=i.logarithmicDepthBuffer,d=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function b(y,E,L,O,U,F){let D=O.fog,k=U.geometry,V=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?O.environment:null,N=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,K=e.get(y.envMap||V,N),P=K&&K.mapping===io?K.image.height:null,H=f[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&Ve("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let X=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,he=X!==void 0?X.length:0,J=0;k.morphAttributes.position!==void 0&&(J=1),k.morphAttributes.normal!==void 0&&(J=2),k.morphAttributes.color!==void 0&&(J=3);let se,ie,pe,q;if(H){let wt=Ci[H];se=wt.vertexShader,ie=wt.fragmentShader}else{se=y.vertexShader,ie=y.fragmentShader;let wt=o.getVertexShaderStage(y),pt=o.getFragmentShaderStage(y);o.update(y,wt,pt),pe=wt.id,q=pt.id}let R=n.getRenderTarget(),W=n.state.buffers.depth.getReversed(),te=U.isInstancedMesh===!0,ue=U.isBatchedMesh===!0,le=!!y.map,fe=!!y.matcap,me=!!K,Re=!!y.aoMap,Ie=!!y.lightMap,ze=!!y.bumpMap&&y.wireframe===!1,Qe=!!y.normalMap,tt=!!y.displacementMap,Pt=!!y.emissiveMap,ct=!!y.metalnessMap,Lt=!!y.roughnessMap,G=y.anisotropy>0,Dt=y.clearcoat>0,ft=y.dispersion>0,C=y.retroreflectivity>0,S=y.iridescence>0,j=y.sheen>0,Q=y.transmission>0,re=G&&!!y.anisotropyMap,ge=Dt&&!!y.clearcoatMap,be=Dt&&!!y.clearcoatNormalMap,ne=Dt&&!!y.clearcoatRoughnessMap,ce=S&&!!y.iridescenceMap,ye=S&&!!y.iridescenceThicknessMap,ke=j&&!!y.sheenColorMap,Me=j&&!!y.sheenRoughnessMap,xe=!!y.specularMap,Ue=!!y.specularColorMap,He=!!y.specularIntensityMap,$e=Q&&!!y.transmissionMap,z=Q&&!!y.thicknessMap,Se=!!y.gradientMap,ae=!!y.alphaMap,ve=y.alphaTest>0,Ee=!!y.alphaHash,de=!!y.extensions,Oe=Gn;y.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Oe=n.toneMapping);let Ne={shaderID:H,shaderType:y.type,shaderName:y.name,vertexShader:se,fragmentShader:ie,defines:y.defines,customVertexShaderID:pe,customFragmentShaderID:q,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:ue,batchingColor:ue&&U._colorsTexture!==null,instancing:te,instancingColor:te&&U.instanceColor!==null,instancingMorph:te&&U.morphTexture!==null,outputColorSpace:R===null?n.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:st.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:le,matcap:fe,envMap:me,envMapMode:me&&K.mapping,envMapCubeUVHeight:P,aoMap:Re,lightMap:Ie,bumpMap:ze,normalMap:Qe,displacementMap:tt,emissiveMap:Pt,normalMapObjectSpace:Qe&&y.normalMapType===sp,normalMapTangentSpace:Qe&&y.normalMapType===pl,packedNormalMap:Qe&&y.normalMapType===pl&&xv(y.normalMap.format),metalnessMap:ct,roughnessMap:Lt,anisotropy:G,anisotropyMap:re,clearcoat:Dt,clearcoatMap:ge,clearcoatNormalMap:be,clearcoatRoughnessMap:ne,dispersion:ft,retroreflection:C,iridescence:S,iridescenceMap:ce,iridescenceThicknessMap:ye,sheen:j,sheenColorMap:ke,sheenRoughnessMap:Me,specularMap:xe,specularColorMap:Ue,specularIntensityMap:He,transmission:Q,transmissionMap:$e,thicknessMap:z,gradientMap:Se,opaque:y.transparent===!1&&y.blending===ea&&y.alphaToCoverage===!1,alphaMap:ae,alphaTest:ve,alphaHash:Ee,combine:y.combine,mapUv:le&&g(y.map.channel),aoMapUv:Re&&g(y.aoMap.channel),lightMapUv:Ie&&g(y.lightMap.channel),bumpMapUv:ze&&g(y.bumpMap.channel),normalMapUv:Qe&&g(y.normalMap.channel),displacementMapUv:tt&&g(y.displacementMap.channel),emissiveMapUv:Pt&&g(y.emissiveMap.channel),metalnessMapUv:ct&&g(y.metalnessMap.channel),roughnessMapUv:Lt&&g(y.roughnessMap.channel),anisotropyMapUv:re&&g(y.anisotropyMap.channel),clearcoatMapUv:ge&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:be&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Me&&g(y.sheenRoughnessMap.channel),specularMapUv:xe&&g(y.specularMap.channel),specularColorMapUv:Ue&&g(y.specularColorMap.channel),specularIntensityMapUv:He&&g(y.specularIntensityMap.channel),transmissionMapUv:$e&&g(y.transmissionMap.channel),thicknessMapUv:z&&g(y.thicknessMap.channel),alphaMapUv:ae&&g(y.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Qe||G),vertexNormals:!!k.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!k.attributes.uv&&(le||ae),fog:!!D,useFog:y.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||k.attributes.normal===void 0&&Qe===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:W,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:J,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Oe,decodeVideoTexture:le&&y.map.isVideoTexture===!0&&st.getTransfer(y.map.colorSpace)===xt,decodeVideoTextureEmissive:Pt&&y.emissiveMap.isVideoTexture===!0&&st.getTransfer(y.emissiveMap.colorSpace)===xt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Mn,flipSided:y.side===an,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:de&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(de&&y.extensions.multiDraw===!0||ue)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ne.vertexUv1s=c.has(1),Ne.vertexUv2s=c.has(2),Ne.vertexUv3s=c.has(3),c.clear(),Ne}function m(y){let E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(let L in y.defines)E.push(L),E.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(p(E,y),_(E,y),E.push(n.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function p(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numSunLights),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numSunLightShadows),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function _(y,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function T(y){let E=f[y.type],L;if(E){let O=Ci[E];L=ir.clone(O.uniforms)}else L=y.uniforms;return L}function x(y,E){let L=h.get(E);return L!==void 0?++L.usedTimes:(L=new bv(n,E,y,s),l.push(L),h.set(E,L)),L}function v(y){if(--y.usedTimes===0){let E=l.indexOf(y);l[E]=l[l.length-1],l.pop(),h.delete(y.cacheKey),y.destroy()}}function M(y){o.remove(y)}function A(){o.dispose()}return{getParameters:b,getProgramCacheKey:m,getUniforms:T,acquireProgram:x,releaseProgram:v,releaseShaderCache:M,programs:l,dispose:A}}function yv(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Mv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Up(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Op(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,b,m,p){let _=n[e];return _===void 0?(_={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:b,renderOrder:d.renderOrder,z:m,group:p},n[e]=_):(_.id=d.id,_.object=d,_.geometry=f,_.material=g,_.materialVariant=a(d),_.groupOrder=b,_.renderOrder=d.renderOrder,_.z=m,_.group=p),e++,_}function c(d,f,g,b,m,p,_){_.reversedDepth===!0&&(m=-m);let T=o(d,f,g,b,m,p);g.transmission>0?i.push(T):g.transparent===!0?s.push(T):t.push(T)}function l(d,f,g,b,m,p){let _=o(d,f,g,b,m,p);g.transmission>0?i.unshift(_):g.transparent===!0?s.unshift(_):t.unshift(_)}function h(d,f){t.length>1&&t.sort(d||Mv),i.length>1&&i.sort(f||Up),s.length>1&&s.sort(f||Up)}function u(){for(let d=e,f=n.length;d<f;d++){let g=n[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function Sv(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new Op,n.set(i,[a])):s>=r.length?(a=new Op,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Tv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new I,color:new Be};break;case"SpotLight":t={position:new I,direction:new I,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function wv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Av=0;function Ev(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Rv(n){let e=new Tv,t=wv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new I);let s=new I,r=new Ye,a=new Ye;function o(l){let h=0,u=0,d=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let f=0,g=0,b=0,m=0,p=0,_=0,T=0,x=0,v=0,M=0,A=0,y=0,E=0,L=0;l.sort(Ev);for(let U=0,F=l.length;U<F;U++){let D=l[U],k=D.color,V=D.intensity,N=D.distance,K=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Ts?K=D.shadow.map.texture:K=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=k.r*V,u+=k.g*V,d+=k.b*V;else if(D.isLightProbe){for(let P=0;P<9;P++)i.probe[P].addScaledVector(D.sh.coefficients[P],V);L++}else if(D.isSunLight){let P=e.get(D);if(P.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let H=D.shadow,X=t.get(D);X.shadowIntensity=H.intensity,X.shadowBias=H.bias,X.shadowNormalBias=H.normalBias,X.shadowRadius=H.radius,X.shadowMapSize.copy(H.mapSize).multiply(H.getFrameExtents()),i.sunShadow[g]=X,i.sunShadowMap[g]=K;let he=H.getViewportCount();for(let J=0;J<he;J++)i.sunShadowMatrix[b+J]=H.getMatrix(J),i.sunShadowCascade[b+J]=H._cascadeData[J];b+=he,g++}i.sun[f]=P,f++}else if(D.isDirectionalLight){let P=e.get(D);if(P.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let H=D.shadow,X=t.get(D);X.shadowIntensity=H.intensity,X.shadowBias=H.bias,X.shadowNormalBias=H.normalBias,X.shadowRadius=H.radius,X.shadowMapSize=H.mapSize,i.directionalShadow[m]=X,i.directionalShadowMap[m]=K,i.directionalShadowMatrix[m]=D.shadow.matrix,v++}i.directional[m]=P,m++}else if(D.isSpotLight){let P=e.get(D);P.position.setFromMatrixPosition(D.matrixWorld),P.color.copy(k).multiplyScalar(V),P.distance=N,P.coneCos=Math.cos(D.angle),P.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),P.decay=D.decay,i.spot[_]=P;let H=D.shadow;if(D.map&&(i.spotLightMap[y]=D.map,y++,H.updateMatrices(D),D.castShadow&&E++),i.spotLightMatrix[_]=H.matrix,D.castShadow){let X=t.get(D);X.shadowIntensity=H.intensity,X.shadowBias=H.bias,X.shadowNormalBias=H.normalBias,X.shadowRadius=H.radius,X.shadowMapSize=H.mapSize,i.spotShadow[_]=X,i.spotShadowMap[_]=K,A++}_++}else if(D.isRectAreaLight){let P=e.get(D);P.color.copy(k).multiplyScalar(V),P.halfWidth.set(D.width*.5,0,0),P.halfHeight.set(0,D.height*.5,0),i.rectArea[T]=P,T++}else if(D.isPointLight){let P=e.get(D);if(P.color.copy(D.color).multiplyScalar(D.intensity),P.distance=D.distance,P.decay=D.decay,D.castShadow){let H=D.shadow,X=t.get(D);X.shadowIntensity=H.intensity,X.shadowBias=H.bias,X.shadowNormalBias=H.normalBias,X.shadowRadius=H.radius,X.shadowMapSize=H.mapSize,X.shadowCameraNear=H.camera.near,X.shadowCameraFar=H.camera.far,i.pointShadow[p]=X,i.pointShadowMap[p]=K,i.pointShadowMatrix[p]=D.shadow.matrix,M++}i.point[p]=P,p++}else if(D.isHemisphereLight){let P=e.get(D);P.skyColor.copy(D.color).multiplyScalar(V),P.groundColor.copy(D.groundColor).multiplyScalar(V),i.hemi[x]=P,x++}}T>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let O=i.hash;(O.sunLength!==f||O.directionalLength!==m||O.pointLength!==p||O.spotLength!==_||O.rectAreaLength!==T||O.hemiLength!==x||O.numSunShadows!==g||O.numDirectionalShadows!==v||O.numPointShadows!==M||O.numSpotShadows!==A||O.numSpotMaps!==y||O.numLightProbes!==L)&&(i.sun.length=f,i.directional.length=m,i.spot.length=_,i.rectArea.length=T,i.point.length=p,i.hemi.length=x,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=b,i.sunShadowCascade.length=b,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.directionalShadowMatrix.length=v,i.pointShadow.length=M,i.pointShadowMap.length=M,i.pointShadowMatrix.length=M,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+y-E,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=L,O.sunLength=f,O.directionalLength=m,O.pointLength=p,O.spotLength=_,O.rectAreaLength=T,O.hemiLength=x,O.numSunShadows=g,O.numDirectionalShadows=v,O.numPointShadows=M,O.numSpotShadows=A,O.numSpotMaps=y,O.numLightProbes=L,i.version=Av++)}function c(l,h){let u=0,d=0,f=0,g=0,b=0,m=0,p=h.matrixWorldInverse;for(let _=0,T=l.length;_<T;_++){let x=l[_];if(x.isSunLight){let v=i.sun[u];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(p),u++}else if(x.isDirectionalLight){let v=i.directional[d];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),d++}else if(x.isSpotLight){let v=i.spot[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),g++}else if(x.isRectAreaLight){let v=i.rectArea[b];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(p),a.identity(),r.copy(x.matrixWorld),r.premultiply(p),a.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),b++}else if(x.isPointLight){let v=i.point[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){let v=i.hemi[m];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:i}}function kp(n){let e=new Rv(n),t=[],i=[],s=[];function r(d){u.camera=d,t.length=0,i.length=0,s.length=0}function a(d){t.push(d)}function o(d){i.push(d)}function c(d){s.push(d)}function l(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Cv(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new kp(n),e.set(s,[o])):r>=a.length?(o=new kp(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var Pv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Iv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Lv=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],Dv=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Bp=new Ye,po=new I,Au=new I;function Nv(n,e,t){let i=new qr,s=new Ae,r=new Ae,a=new bt,o=new bc,c=new _c,l={},h=t.maxTextureSize,u={[zn]:an,[an]:zn,[Mn]:Mn},d=new Ut({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:Pv,fragmentShader:Iv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new dt;g.setAttribute("position",new gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new St(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=to;let p=this.type;this.render=function(M,A,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===Of&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=to);let E=n.getRenderTarget(),L=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Qn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let F=p!==this.type;F&&A.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(k=>k.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,k=M.length;D<k;D++){let V=M[D],N=V.shadow;if(N===void 0){Ve("WebGLShadowMap:",V,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);let K=N.getFrameExtents();s.multiply(K),r.copy(N.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/K.x),s.x=r.x*K.x,N.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/K.y),s.y=r.y*K.y,N.mapSize.y=r.y));let P=n.state.buffers.depth.getReversed();if(N.camera._reversedDepth=P,N.map===null||F===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===Qr){if(V.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new Bt(s.x,s.y,{format:Ts,type:jt,minFilter:qt,magFilter:qt,generateMipmaps:!1}),N.map.texture.name=V.name+".shadowMap",N.map.depthTexture=new bs(s.x,s.y,Vn),N.map.depthTexture.name=V.name+".shadowMapDepth",N.map.depthTexture.format=Ti,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Wt,N.map.depthTexture.magFilter=Wt}else V.isPointLight?(N.map=new rr(s.x),N.map.depthTexture=new pc(s.x,pi)):(N.map=new Bt(s.x,s.y),N.map.depthTexture=new bs(s.x,s.y,pi)),N.map.depthTexture.name=V.name+".shadowMap",N.map.depthTexture.format=Ti,this.type===to?(N.map.depthTexture.compareFunction=P?gl:ml,N.map.depthTexture.minFilter=qt,N.map.depthTexture.magFilter=qt):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Wt,N.map.depthTexture.magFilter=Wt);N.camera.updateProjectionMatrix()}N.map.isWebGLCubeRenderTarget!==!0&&(N.map.width!==s.x||N.map.height!==s.y)&&N.map.setSize(s.x,s.y);let H=N.map.isWebGLCubeRenderTarget?6:N.getViewportCount();V.isPointLight!==!0&&N.updateMatrices(V,y);for(let X=0;X<H;X++){let he=N.getCamera(X);if(V.isPointLight){let J=N.camera,se=N.matrix,ie=V.distance||J.far;ie!==J.far&&(J.far=ie,J.updateProjectionMatrix()),po.setFromMatrixPosition(V.matrixWorld),J.position.copy(po),Au.copy(J.position),Au.add(Lv[X]),J.up.copy(Dv[X]),J.lookAt(Au),J.updateMatrixWorld(),se.makeTranslation(-po.x,-po.y,-po.z),Bp.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),N._frustum.setFromProjectionMatrix(Bp,J.coordinateSystem,J.reversedDepth)}if(N.map.isWebGLCubeRenderTarget)n.setRenderTarget(N.map,X),n.clear();else{X===0&&(n.setRenderTarget(N.map),n.clear());let J=N.getViewport(X);a.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),U.viewport(a)}i=N.getFrustum(X),x(A,y,he,V,this.type)}N.isPointLightShadow!==!0&&this.type===Qr&&_(N,y),N.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(E,L,O)};function _(M,A){let y=e.update(b);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null?M.mapPass=new Bt(s.x,s.y,{format:Ts,type:jt}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),d.uniforms.shadow_pass.value=M.map.depthTexture,d.uniforms.resolution.value.set(M.map.width,M.map.height),d.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(A,null,y,d,b,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(A,null,y,f,b,null)}function T(M,A,y,E){let L=null,O=y.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(O!==void 0)L=O;else if(L=y.isPointLight===!0?c:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let U=L.uuid,F=A.uuid,D=l[U];D===void 0&&(D={},l[U]=D);let k=D[F];k===void 0&&(k=L.clone(),D[F]=k,A.addEventListener("dispose",v)),L=k}if(L.visible=A.visible,L.wireframe=A.wireframe,E===Qr?L.side=A.shadowSide!==null?A.shadowSide:A.side:L.side=A.shadowSide!==null?A.shadowSide:u[A.side],L.alphaMap=A.alphaMap,L.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,L.map=A.map,L.clipShadows=A.clipShadows,L.clippingPlanes=A.clippingPlanes,L.clipIntersection=A.clipIntersection,L.displacementMap=A.displacementMap,L.displacementScale=A.displacementScale,L.displacementBias=A.displacementBias,L.wireframeLinewidth=A.wireframeLinewidth,L.linewidth=A.linewidth,y.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let U=n.properties.get(L);U.light=y}return L}function x(M,A,y,E,L){if(M.visible===!1)return;if(M.layers.test(A.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&L===Qr)&&(!M.frustumCulled||M.intersectsFrustum(i))){M.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,M.matrixWorld);let F=e.update(M),D=M.material;if(Array.isArray(D)){let k=F.groups;for(let V=0,N=k.length;V<N;V++){let K=k[V],P=D[K.materialIndex];if(P&&P.visible){let H=T(M,P,E,L);M.onBeforeShadow(n,M,A,y,F,H,K),n.renderBufferDirect(y,null,F,H,M,K),M.onAfterShadow(n,M,A,y,F,H,K)}}}else if(D.visible){let k=T(M,D,E,L);M.onBeforeShadow(n,M,A,y,F,k,null),n.renderBufferDirect(y,null,F,k,M,null),M.onAfterShadow(n,M,A,y,F,k,null)}}let U=M.children;for(let F=0,D=U.length;F<D;F++)x(U[F],A,y,E,L)}function v(M){M.target.removeEventListener("dispose",v);for(let y in l){let E=l[y],L=M.target.uuid;L in E&&(E[L].dispose(),delete E[L])}}}function Fv(n,e){function t(){let z=!1,Se=new bt,ae=null,ve=new bt(0,0,0,0);return{setMask:function(Ee){ae!==Ee&&!z&&(n.colorMask(Ee,Ee,Ee,Ee),ae=Ee)},setLocked:function(Ee){z=Ee},setClear:function(Ee,de,Oe,Ne,wt){wt===!0&&(Ee*=Ne,de*=Ne,Oe*=Ne),Se.set(Ee,de,Oe,Ne),ve.equals(Se)===!1&&(n.clearColor(Ee,de,Oe,Ne),ve.copy(Se))},reset:function(){z=!1,ae=null,ve.set(-1,0,0,0)}}}function i(){let z=!1,Se=!1,ae=null,ve=null,Ee=null;return{setReversed:function(de){if(Se!==de){let Oe=e.get("EXT_clip_control");de?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),Se=de;let Ne=Ee;Ee=null,this.setClear(Ne)}},getReversed:function(){return Se},setTest:function(de){de?R(n.DEPTH_TEST):W(n.DEPTH_TEST)},setMask:function(de){ae!==de&&!z&&(n.depthMask(de),ae=de)},setFunc:function(de){if(Se&&(de=mp[de]),ve!==de){switch(de){case nc:n.depthFunc(n.NEVER);break;case ic:n.depthFunc(n.ALWAYS);break;case sc:n.depthFunc(n.LESS);break;case Dr:n.depthFunc(n.LEQUAL);break;case rc:n.depthFunc(n.EQUAL);break;case ac:n.depthFunc(n.GEQUAL);break;case oc:n.depthFunc(n.GREATER);break;case cc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ve=de}},setLocked:function(de){z=de},setClear:function(de){Ee!==de&&(Ee=de,Se&&(de=1-de),n.clearDepth(de))},reset:function(){z=!1,ae=null,ve=null,Ee=null,Se=!1}}}function s(){let z=!1,Se=null,ae=null,ve=null,Ee=null,de=null,Oe=null,Ne=null,wt=null;return{setTest:function(pt){z||(pt?R(n.STENCIL_TEST):W(n.STENCIL_TEST))},setMask:function(pt){Se!==pt&&!z&&(n.stencilMask(pt),Se=pt)},setFunc:function(pt,Nn,$n){(ae!==pt||ve!==Nn||Ee!==$n)&&(n.stencilFunc(pt,Nn,$n),ae=pt,ve=Nn,Ee=$n)},setOp:function(pt,Nn,$n){(de!==pt||Oe!==Nn||Ne!==$n)&&(n.stencilOp(pt,Nn,$n),de=pt,Oe=Nn,Ne=$n)},setLocked:function(pt){z=pt},setClear:function(pt){wt!==pt&&(n.clearStencil(pt),wt=pt)},reset:function(){z=!1,Se=null,ae=null,ve=null,Ee=null,de=null,Oe=null,Ne=null,wt=null}}}let r=new t,a=new i,o=new s,c=new WeakMap,l=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],b=null,m=!1,p=null,_=null,T=null,x=null,v=null,M=null,A=null,y=new Be(0,0,0),E=0,L=!1,O=null,U=null,F=null,D=null,k=null,V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,K=0,P=n.getParameter(n.VERSION);P.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(P)[1]),N=K>=1):P.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),N=K>=2);let H=null,X={},he=n.getParameter(n.SCISSOR_BOX),J=n.getParameter(n.VIEWPORT),se=new bt().fromArray(he),ie=new bt().fromArray(J);function pe(z,Se,ae,ve){let Ee=new Uint8Array(4),de=n.createTexture();n.bindTexture(z,de),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Oe=0;Oe<ae;Oe++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(Se,0,n.RGBA,1,1,ve,0,n.RGBA,n.UNSIGNED_BYTE,Ee):n.texImage2D(Se+Oe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ee);return de}let q={};q[n.TEXTURE_2D]=pe(n.TEXTURE_2D,n.TEXTURE_2D,1),q[n.TEXTURE_CUBE_MAP]=pe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[n.TEXTURE_2D_ARRAY]=pe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),q[n.TEXTURE_3D]=pe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),R(n.DEPTH_TEST),a.setFunc(Dr),ze(!1),Qe(Gh),R(n.CULL_FACE),Re(Qn);function R(z){h[z]!==!0&&(n.enable(z),h[z]=!0)}function W(z){h[z]!==!1&&(n.disable(z),h[z]=!1)}function te(z,Se){return d[z]!==Se?(n.bindFramebuffer(z,Se),d[z]=Se,z===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Se),z===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Se),!0):!1}function ue(z,Se){let ae=g,ve=!1;if(z){ae=f.get(Se),ae===void 0&&(ae=[],f.set(Se,ae));let Ee=z.textures;if(ae.length!==Ee.length||ae[0]!==n.COLOR_ATTACHMENT0){for(let de=0,Oe=Ee.length;de<Oe;de++)ae[de]=n.COLOR_ATTACHMENT0+de;ae.length=Ee.length,ve=!0}}else ae[0]!==n.BACK&&(ae[0]=n.BACK,ve=!0);ve&&n.drawBuffers(ae)}function le(z){return b!==z?(n.useProgram(z),b=z,!0):!1}let fe={[ei]:n.FUNC_ADD,[kf]:n.FUNC_SUBTRACT,[Bf]:n.FUNC_REVERSE_SUBTRACT};fe[zf]=n.MIN,fe[Gf]=n.MAX;let me={[Qs]:n.ZERO,[Sn]:n.ONE,[Vf]:n.SRC_COLOR,[Wh]:n.SRC_ALPHA,[Kf]:n.SRC_ALPHA_SATURATE,[Xf]:n.DST_COLOR,[Wf]:n.DST_ALPHA,[Hf]:n.ONE_MINUS_SRC_COLOR,[qh]:n.ONE_MINUS_SRC_ALPHA,[jf]:n.ONE_MINUS_DST_COLOR,[qf]:n.ONE_MINUS_DST_ALPHA,[$f]:n.CONSTANT_COLOR,[Yf]:n.ONE_MINUS_CONSTANT_COLOR,[Jf]:n.CONSTANT_ALPHA,[Zf]:n.ONE_MINUS_CONSTANT_ALPHA};function Re(z,Se,ae,ve,Ee,de,Oe,Ne,wt,pt){if(z===Qn){m===!0&&(W(n.BLEND),m=!1);return}if(m===!1&&(R(n.BLEND),m=!0),z!==Zs){if(z!==p||pt!==L){if((_!==ei||v!==ei)&&(n.blendEquation(n.FUNC_ADD),_=ei,v=ei),pt)switch(z){case ea:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case no:n.blendFunc(n.ONE,n.ONE);break;case Vh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Hh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:je("WebGLState: Invalid blending: ",z);break}else switch(z){case ea:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case no:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Vh:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hh:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",z);break}T=null,x=null,M=null,A=null,y.set(0,0,0),E=0,p=z,L=pt}return}Ee=Ee||Se,de=de||ae,Oe=Oe||ve,(Se!==_||Ee!==v)&&(n.blendEquationSeparate(fe[Se],fe[Ee]),_=Se,v=Ee),(ae!==T||ve!==x||de!==M||Oe!==A)&&(n.blendFuncSeparate(me[ae],me[ve],me[de],me[Oe]),T=ae,x=ve,M=de,A=Oe),(Ne.equals(y)===!1||wt!==E)&&(n.blendColor(Ne.r,Ne.g,Ne.b,wt),y.copy(Ne),E=wt),p=z,L=!1}function Ie(z,Se){z.side===Mn?W(n.CULL_FACE):R(n.CULL_FACE);let ae=z.side===an;Se&&(ae=!ae),ze(ae),z.blending===ea&&z.transparent===!1?Re(Qn):Re(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);let ve=z.stencilWrite;o.setTest(ve),ve&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Pt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?R(n.SAMPLE_ALPHA_TO_COVERAGE):W(n.SAMPLE_ALPHA_TO_COVERAGE)}function ze(z){O!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),O=z)}function Qe(z){z!==Ff?(R(n.CULL_FACE),z!==U&&(z===Gh?n.cullFace(n.BACK):z===Uf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):W(n.CULL_FACE),U=z}function tt(z){z!==F&&(N&&n.lineWidth(z),F=z)}function Pt(z,Se,ae){z?(R(n.POLYGON_OFFSET_FILL),(D!==Se||k!==ae)&&(D=Se,k=ae,a.getReversed()&&(Se=-Se),n.polygonOffset(Se,ae))):W(n.POLYGON_OFFSET_FILL)}function ct(z){z?R(n.SCISSOR_TEST):W(n.SCISSOR_TEST)}function Lt(z){z===void 0&&(z=n.TEXTURE0+V-1),H!==z&&(n.activeTexture(z),H=z)}function G(z,Se,ae){ae===void 0&&(H===null?ae=n.TEXTURE0+V-1:ae=H);let ve=X[ae];ve===void 0&&(ve={type:void 0,texture:void 0},X[ae]=ve),(ve.type!==z||ve.texture!==Se)&&(H!==ae&&(n.activeTexture(ae),H=ae),n.bindTexture(z,Se||q[z]),ve.type=z,ve.texture=Se)}function Dt(){let z=X[H];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function ft(){try{n.compressedTexImage2D(...arguments)}catch(z){je("WebGLState:",z)}}function C(){try{n.compressedTexImage3D(...arguments)}catch(z){je("WebGLState:",z)}}function S(){try{n.texSubImage2D(...arguments)}catch(z){je("WebGLState:",z)}}function j(){try{n.texSubImage3D(...arguments)}catch(z){je("WebGLState:",z)}}function Q(){try{n.compressedTexSubImage2D(...arguments)}catch(z){je("WebGLState:",z)}}function re(){try{n.compressedTexSubImage3D(...arguments)}catch(z){je("WebGLState:",z)}}function ge(){try{n.texStorage2D(...arguments)}catch(z){je("WebGLState:",z)}}function be(){try{n.texStorage3D(...arguments)}catch(z){je("WebGLState:",z)}}function ne(){try{n.texImage2D(...arguments)}catch(z){je("WebGLState:",z)}}function ce(){try{n.texImage3D(...arguments)}catch(z){je("WebGLState:",z)}}function ye(z){return u[z]!==void 0?u[z]:n.getParameter(z)}function ke(z,Se){u[z]!==Se&&(n.pixelStorei(z,Se),u[z]=Se)}function Me(z){se.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),se.copy(z))}function xe(z){ie.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),ie.copy(z))}function Ue(z,Se){let ae=l.get(Se);ae===void 0&&(ae=new WeakMap,l.set(Se,ae));let ve=ae.get(z);ve===void 0&&(ve=n.getUniformBlockIndex(Se,z.name),ae.set(z,ve))}function He(z,Se){let ve=l.get(Se).get(z);c.get(Se)!==ve&&(n.uniformBlockBinding(Se,ve,z.__bindingPointIndex),c.set(Se,ve))}function $e(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},u={},H=null,X={},d={},f=new WeakMap,g=[],b=null,m=!1,p=null,_=null,T=null,x=null,v=null,M=null,A=null,y=new Be(0,0,0),E=0,L=!1,O=null,U=null,F=null,D=null,k=null,se.set(0,0,n.canvas.width,n.canvas.height),ie.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:R,disable:W,bindFramebuffer:te,drawBuffers:ue,useProgram:le,setBlending:Re,setMaterial:Ie,setFlipSided:ze,setCullFace:Qe,setLineWidth:tt,setPolygonOffset:Pt,setScissorTest:ct,activeTexture:Lt,bindTexture:G,unbindTexture:Dt,compressedTexImage2D:ft,compressedTexImage3D:C,texImage2D:ne,texImage3D:ce,pixelStorei:ke,getParameter:ye,updateUBOMapping:Ue,uniformBlockBinding:He,texStorage2D:ge,texStorage3D:be,texSubImage2D:S,texSubImage3D:j,compressedTexSubImage2D:Q,compressedTexSubImage3D:re,scissor:Me,viewport:xe,reset:$e}}function Uv(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ae,h=new WeakMap,u=new Set,d,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(C,S){return g?new OffscreenCanvas(C,S):Ur("canvas")}function m(C,S,j){let Q=1,re=ft(C);if((re.width>j||re.height>j)&&(Q=j/Math.max(re.width,re.height)),Q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ge=Math.floor(Q*re.width),be=Math.floor(Q*re.height);d===void 0&&(d=b(ge,be));let ne=S?b(ge,be):d;return ne.width=ge,ne.height=be,ne.getContext("2d").drawImage(C,0,0,ge,be),Ve("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+ge+"x"+be+")."),ne}else return"data"in C&&Ve("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),C;return C}function p(C){return C.generateMipmaps}function _(C){n.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(C,S,j,Q,re,ge=!1){if(C!==null){if(n[C]!==void 0)return n[C];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let be;Q&&(be=e.get("EXT_texture_norm16"),be||Ve("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=S;if(S===n.RED&&(j===n.FLOAT&&(ne=n.R32F),j===n.HALF_FLOAT&&(ne=n.R16F),j===n.UNSIGNED_BYTE&&(ne=n.R8),j===n.UNSIGNED_SHORT&&be&&(ne=be.R16_EXT),j===n.SHORT&&be&&(ne=be.R16_SNORM_EXT)),S===n.RED_INTEGER&&(j===n.UNSIGNED_BYTE&&(ne=n.R8UI),j===n.UNSIGNED_SHORT&&(ne=n.R16UI),j===n.UNSIGNED_INT&&(ne=n.R32UI),j===n.BYTE&&(ne=n.R8I),j===n.SHORT&&(ne=n.R16I),j===n.INT&&(ne=n.R32I)),S===n.RG&&(j===n.FLOAT&&(ne=n.RG32F),j===n.HALF_FLOAT&&(ne=n.RG16F),j===n.UNSIGNED_BYTE&&(ne=n.RG8),j===n.UNSIGNED_SHORT&&be&&(ne=be.RG16_EXT),j===n.SHORT&&be&&(ne=be.RG16_SNORM_EXT)),S===n.RG_INTEGER&&(j===n.UNSIGNED_BYTE&&(ne=n.RG8UI),j===n.UNSIGNED_SHORT&&(ne=n.RG16UI),j===n.UNSIGNED_INT&&(ne=n.RG32UI),j===n.BYTE&&(ne=n.RG8I),j===n.SHORT&&(ne=n.RG16I),j===n.INT&&(ne=n.RG32I)),S===n.RGB_INTEGER&&(j===n.UNSIGNED_BYTE&&(ne=n.RGB8UI),j===n.UNSIGNED_SHORT&&(ne=n.RGB16UI),j===n.UNSIGNED_INT&&(ne=n.RGB32UI),j===n.BYTE&&(ne=n.RGB8I),j===n.SHORT&&(ne=n.RGB16I),j===n.INT&&(ne=n.RGB32I)),S===n.RGBA_INTEGER&&(j===n.UNSIGNED_BYTE&&(ne=n.RGBA8UI),j===n.UNSIGNED_SHORT&&(ne=n.RGBA16UI),j===n.UNSIGNED_INT&&(ne=n.RGBA32UI),j===n.BYTE&&(ne=n.RGBA8I),j===n.SHORT&&(ne=n.RGBA16I),j===n.INT&&(ne=n.RGBA32I)),S===n.RGB&&(j===n.UNSIGNED_SHORT&&be&&(ne=be.RGB16_EXT),j===n.SHORT&&be&&(ne=be.RGB16_SNORM_EXT),j===n.UNSIGNED_INT_5_9_9_9_REV&&(ne=n.RGB9_E5),j===n.UNSIGNED_INT_10F_11F_11F_REV&&(ne=n.R11F_G11F_B10F)),S===n.RGBA){let ce=ge?Ia:st.getTransfer(re);j===n.FLOAT&&(ne=n.RGBA32F),j===n.HALF_FLOAT&&(ne=n.RGBA16F),j===n.UNSIGNED_BYTE&&(ne=ce===xt?n.SRGB8_ALPHA8:n.RGBA8),j===n.UNSIGNED_SHORT&&be&&(ne=be.RGBA16_EXT),j===n.SHORT&&be&&(ne=be.RGBA16_SNORM_EXT),j===n.UNSIGNED_SHORT_4_4_4_4&&(ne=n.RGBA4),j===n.UNSIGNED_SHORT_5_5_5_1&&(ne=n.RGB5_A1)}return(ne===n.R16F||ne===n.R32F||ne===n.RG16F||ne===n.RG32F||ne===n.RGBA16F||ne===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function v(C,S){let j;return C?S===null||S===pi||S===ia?j=n.DEPTH24_STENCIL8:S===Vn?j=n.DEPTH32F_STENCIL8:S===na&&(j=n.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===pi||S===ia?j=n.DEPTH_COMPONENT24:S===Vn?j=n.DEPTH_COMPONENT32F:S===na&&(j=n.DEPTH_COMPONENT16),j}function M(C,S){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Wt&&C.minFilter!==qt?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function A(C){let S=C.target;S.removeEventListener("dispose",A),E(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&u.delete(S)}function y(C){let S=C.target;S.removeEventListener("dispose",y),O(S)}function E(C){let S=i.get(C);if(S.__webglInit===void 0)return;let j=C.source,Q=f.get(j);if(Q){let re=Q[S.__cacheKey];re.usedTimes--,re.usedTimes===0&&L(C),Object.keys(Q).length===0&&f.delete(j)}i.remove(C)}function L(C){let S=i.get(C);n.deleteTexture(S.__webglTexture);let j=C.source,Q=f.get(j);delete Q[S.__cacheKey],a.memory.textures--}function O(C){let S=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(S.__webglFramebuffer[Q]))for(let re=0;re<S.__webglFramebuffer[Q].length;re++)n.deleteFramebuffer(S.__webglFramebuffer[Q][re]);else n.deleteFramebuffer(S.__webglFramebuffer[Q]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[Q])}else{if(Array.isArray(S.__webglFramebuffer))for(let Q=0;Q<S.__webglFramebuffer.length;Q++)n.deleteFramebuffer(S.__webglFramebuffer[Q]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Q=0;Q<S.__webglColorRenderbuffer.length;Q++)S.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[Q]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let j=C.textures;for(let Q=0,re=j.length;Q<re;Q++){let ge=i.get(j[Q]);ge.__webglTexture&&(n.deleteTexture(ge.__webglTexture),a.memory.textures--),i.remove(j[Q])}i.remove(C)}let U=0;function F(){U=0}function D(){return U}function k(C){U=C}function V(){let C=U;return C>=s.maxTextures&&Ve("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,C}function N(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function K(C,S){let j=i.get(C);if(C.isVideoTexture&&G(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&j.__version!==C.version){let Q=C.image;if(Q===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{W(j,C,S);return}}else C.isExternalTexture&&(j.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,j.__webglTexture,n.TEXTURE0+S)}function P(C,S){let j=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&j.__version!==C.version){W(j,C,S);return}else C.isExternalTexture&&(j.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,j.__webglTexture,n.TEXTURE0+S)}function H(C,S){let j=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&j.__version!==C.version){W(j,C,S);return}t.bindTexture(n.TEXTURE_3D,j.__webglTexture,n.TEXTURE0+S)}function X(C,S){let j=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&j.__version!==C.version){te(j,C,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture,n.TEXTURE0+S)}let he={[ms]:n.REPEAT,[Zn]:n.CLAMP_TO_EDGE,[Nr]:n.MIRRORED_REPEAT},J={[Wt]:n.NEAREST,[Pc]:n.NEAREST_MIPMAP_NEAREST,[tr]:n.NEAREST_MIPMAP_LINEAR,[qt]:n.LINEAR,[ta]:n.LINEAR_MIPMAP_NEAREST,[Rn]:n.LINEAR_MIPMAP_LINEAR},se={[ap]:n.NEVER,[up]:n.ALWAYS,[op]:n.LESS,[ml]:n.LEQUAL,[cp]:n.EQUAL,[gl]:n.GEQUAL,[lp]:n.GREATER,[hp]:n.NOTEQUAL};function ie(C,S){if(S.type===Vn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===qt||S.magFilter===ta||S.magFilter===tr||S.magFilter===Rn||S.minFilter===qt||S.minFilter===ta||S.minFilter===tr||S.minFilter===Rn)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,he[S.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,he[S.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,he[S.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,J[S.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,J[S.minFilter]),S.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,se[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Wt||S.minFilter!==tr&&S.minFilter!==Rn||S.type===Vn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let j=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function pe(C,S){let j=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",A));let Q=S.source,re=f.get(Q);re===void 0&&(re={},f.set(Q,re));let ge=N(S);if(ge!==C.__cacheKey){re[ge]===void 0&&(re[ge]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,j=!0),re[ge].usedTimes++;let be=re[C.__cacheKey];be!==void 0&&(re[C.__cacheKey].usedTimes--,be.usedTimes===0&&L(S)),C.__cacheKey=ge,C.__webglTexture=re[ge].texture}return j}function q(C,S,j){return Math.floor(Math.floor(C/j)/S)}function R(C,S,j,Q){let ge=C.updateRanges;if(ge.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,j,Q,S.data);else{ge.sort((ke,Me)=>ke.start-Me.start);let be=0;for(let ke=1;ke<ge.length;ke++){let Me=ge[be],xe=ge[ke],Ue=Me.start+Me.count,He=q(xe.start,S.width,4),$e=q(Me.start,S.width,4);xe.start<=Ue+1&&He===$e&&q(xe.start+xe.count-1,S.width,4)===He?Me.count=Math.max(Me.count,xe.start+xe.count-Me.start):(++be,ge[be]=xe)}ge.length=be+1;let ne=t.getParameter(n.UNPACK_ROW_LENGTH),ce=t.getParameter(n.UNPACK_SKIP_PIXELS),ye=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let ke=0,Me=ge.length;ke<Me;ke++){let xe=ge[ke],Ue=Math.floor(xe.start/4),He=Math.ceil(xe.count/4),$e=Ue%S.width,z=Math.floor(Ue/S.width),Se=He,ae=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,$e),t.pixelStorei(n.UNPACK_SKIP_ROWS,z),t.texSubImage2D(n.TEXTURE_2D,0,$e,z,Se,ae,j,Q,S.data)}C.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ne),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ce),t.pixelStorei(n.UNPACK_SKIP_ROWS,ye)}}function W(C,S,j){let Q=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Q=n.TEXTURE_3D);let re=pe(C,S),ge=S.source;t.bindTexture(Q,C.__webglTexture,n.TEXTURE0+j);let be=i.get(ge);if(ge.version!==be.__version||re===!0){if(t.activeTexture(n.TEXTURE0+j),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let ae=st.getPrimaries(st.workingColorSpace),ve=S.colorSpace===Qi?null:st.getPrimaries(S.colorSpace),Ee=S.colorSpace===Qi||ae===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee)}t.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment);let ce=m(S.image,!1,s.maxTextureSize);ce=Dt(S,ce);let ye=r.convert(S.format,S.colorSpace),ke=r.convert(S.type),Me=x(S.internalFormat,ye,ke,S.normalized,S.colorSpace,S.isVideoTexture);ie(Q,S);let xe,Ue=S.mipmaps,He=S.isVideoTexture!==!0,$e=be.__version===void 0||re===!0,z=ge.dataReady,Se=M(S,ce);if(S.isDepthTexture)Me=v(S.format===Ss,S.type),$e&&(He?t.texStorage2D(n.TEXTURE_2D,1,Me,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,Me,ce.width,ce.height,0,ye,ke,null));else if(S.isDataTexture)if(Ue.length>0){He&&$e&&t.texStorage2D(n.TEXTURE_2D,Se,Me,Ue[0].width,Ue[0].height);for(let ae=0,ve=Ue.length;ae<ve;ae++)xe=Ue[ae],He?z&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,xe.width,xe.height,ye,ke,xe.data):t.texImage2D(n.TEXTURE_2D,ae,Me,xe.width,xe.height,0,ye,ke,xe.data);S.generateMipmaps=!1}else He?($e&&t.texStorage2D(n.TEXTURE_2D,Se,Me,ce.width,ce.height),z&&R(S,ce,ye,ke)):t.texImage2D(n.TEXTURE_2D,0,Me,ce.width,ce.height,0,ye,ke,ce.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){He&&$e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,Me,Ue[0].width,Ue[0].height,ce.depth);for(let ae=0,ve=Ue.length;ae<ve;ae++)if(xe=Ue[ae],S.format!==Hn)if(ye!==null)if(He){if(z)if(S.layerUpdates.size>0){let Ee=mu(xe.width,xe.height,S.format,S.type);for(let de of S.layerUpdates){let Oe=xe.data.subarray(de*Ee/xe.data.BYTES_PER_ELEMENT,(de+1)*Ee/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,de,xe.width,xe.height,1,ye,Oe)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,xe.width,xe.height,ce.depth,ye,xe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,Me,xe.width,xe.height,ce.depth,0,xe.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?z&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,xe.width,xe.height,ce.depth,ye,ke,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,Me,xe.width,xe.height,ce.depth,0,ye,ke,xe.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{He&&$e&&t.texStorage2D(n.TEXTURE_2D,Se,Me,Ue[0].width,Ue[0].height);for(let ae=0,ve=Ue.length;ae<ve;ae++)xe=Ue[ae],S.format!==Hn?ye!==null?He?z&&t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,xe.width,xe.height,ye,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,Me,xe.width,xe.height,0,xe.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?z&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,xe.width,xe.height,ye,ke,xe.data):t.texImage2D(n.TEXTURE_2D,ae,Me,xe.width,xe.height,0,ye,ke,xe.data)}else if(S.isDataArrayTexture)if(He){if($e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,Me,ce.width,ce.height,ce.depth),z)if(S.layerUpdates.size>0){let ae=mu(ce.width,ce.height,S.format,S.type);for(let ve of S.layerUpdates){let Ee=ce.data.subarray(ve*ae/ce.data.BYTES_PER_ELEMENT,(ve+1)*ae/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ve,ce.width,ce.height,1,ye,ke,Ee)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,ye,ke,ce.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Me,ce.width,ce.height,ce.depth,0,ye,ke,ce.data);else if(S.isData3DTexture)He?($e&&t.texStorage3D(n.TEXTURE_3D,Se,Me,ce.width,ce.height,ce.depth),z&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,ye,ke,ce.data)):t.texImage3D(n.TEXTURE_3D,0,Me,ce.width,ce.height,ce.depth,0,ye,ke,ce.data);else if(S.isFramebufferTexture){if($e)if(He)t.texStorage2D(n.TEXTURE_2D,Se,Me,ce.width,ce.height);else{let ae=ce.width,ve=ce.height;for(let Ee=0;Ee<Se;Ee++)t.texImage2D(n.TEXTURE_2D,Ee,Me,ae,ve,0,ye,ke,null),ae>>=1,ve>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in n){let ae=n.canvas;if(ae.hasAttribute("layoutsubtree")||ae.setAttribute("layoutsubtree","true"),ce.parentNode!==ae){ae.appendChild(ce),u.add(S),ae.onpaint=ve=>{let Ee=ve.changedElements;for(let de of u)Ee.includes(de.image)&&(de.needsUpdate=!0)},ae.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ce);else{let Ee=n.RGBA,de=n.RGBA,Oe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ee,de,Oe,ce)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(He&&$e){let ae=ft(Ue[0]);t.texStorage2D(n.TEXTURE_2D,Se,Me,ae.width,ae.height)}for(let ae=0,ve=Ue.length;ae<ve;ae++)xe=Ue[ae],He?z&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,ye,ke,xe):t.texImage2D(n.TEXTURE_2D,ae,Me,ye,ke,xe);S.generateMipmaps=!1}else if(He){if($e){let ae=ft(ce);t.texStorage2D(n.TEXTURE_2D,Se,Me,ae.width,ae.height)}z&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye,ke,ce)}else t.texImage2D(n.TEXTURE_2D,0,Me,ye,ke,ce);p(S)&&_(Q),be.__version=ge.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function te(C,S,j){if(S.image.length!==6)return;let Q=pe(C,S),re=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+j);let ge=i.get(re);if(re.version!==ge.__version||Q===!0){t.activeTexture(n.TEXTURE0+j);let be=st.getPrimaries(st.workingColorSpace),ne=S.colorSpace===Qi?null:st.getPrimaries(S.colorSpace),ce=S.colorSpace===Qi||be===ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);let ye=S.isCompressedTexture||S.image[0].isCompressedTexture,ke=S.image[0]&&S.image[0].isDataTexture,Me=[];for(let de=0;de<6;de++)!ye&&!ke?Me[de]=m(S.image[de],!0,s.maxCubemapSize):Me[de]=ke?S.image[de].image:S.image[de],Me[de]=Dt(S,Me[de]);let xe=Me[0],Ue=r.convert(S.format,S.colorSpace),He=r.convert(S.type),$e=x(S.internalFormat,Ue,He,S.normalized,S.colorSpace),z=S.isVideoTexture!==!0,Se=ge.__version===void 0||Q===!0,ae=re.dataReady,ve=M(S,xe);ie(n.TEXTURE_CUBE_MAP,S);let Ee;if(ye){z&&Se&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,$e,xe.width,xe.height);for(let de=0;de<6;de++){Ee=Me[de].mipmaps;for(let Oe=0;Oe<Ee.length;Oe++){let Ne=Ee[Oe];S.format!==Hn?Ue!==null?z?ae&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Oe,0,0,Ne.width,Ne.height,Ue,Ne.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Oe,$e,Ne.width,Ne.height,0,Ne.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Oe,0,0,Ne.width,Ne.height,Ue,He,Ne.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Oe,$e,Ne.width,Ne.height,0,Ue,He,Ne.data)}}}else{if(Ee=S.mipmaps,z&&Se){Ee.length>0&&ve++;let de=ft(Me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,$e,de.width,de.height)}for(let de=0;de<6;de++)if(ke){z?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Me[de].width,Me[de].height,Ue,He,Me[de].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,$e,Me[de].width,Me[de].height,0,Ue,He,Me[de].data);for(let Oe=0;Oe<Ee.length;Oe++){let wt=Ee[Oe].image[de].image;z?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Oe+1,0,0,wt.width,wt.height,Ue,He,wt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Oe+1,$e,wt.width,wt.height,0,Ue,He,wt.data)}}else{z?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ue,He,Me[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,$e,Ue,He,Me[de]);for(let Oe=0;Oe<Ee.length;Oe++){let Ne=Ee[Oe];z?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Oe+1,0,0,Ue,He,Ne.image[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Oe+1,$e,Ue,He,Ne.image[de])}}}p(S)&&_(n.TEXTURE_CUBE_MAP),ge.__version=re.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ue(C,S,j,Q,re,ge){let be=r.convert(j.format,j.colorSpace),ne=r.convert(j.type),ce=x(j.internalFormat,be,ne,j.normalized,j.colorSpace),ye=i.get(S),ke=i.get(j);if(ke.__renderTarget=S,!ye.__hasExternalTextures){let Me=Math.max(1,S.width>>ge),xe=Math.max(1,S.height>>ge);re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?t.texImage3D(re,ge,ce,Me,xe,S.depth,0,be,ne,null):t.texImage2D(re,ge,ce,Me,xe,0,be,ne,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),Lt(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,re,ke.__webglTexture,0,ct(S)):(re===n.TEXTURE_2D||re>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,re,ke.__webglTexture,ge),t.bindFramebuffer(n.FRAMEBUFFER,null)}function le(C,S,j){if(n.bindRenderbuffer(n.RENDERBUFFER,C),S.depthBuffer){let Q=S.depthTexture,re=Q&&Q.isDepthTexture?Q.type:null,ge=v(S.stencilBuffer,re),be=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Lt(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ct(S),ge,S.width,S.height):j?n.renderbufferStorageMultisample(n.RENDERBUFFER,ct(S),ge,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,ge,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,be,n.RENDERBUFFER,C)}else{let Q=S.textures;for(let re=0;re<Q.length;re++){let ge=Q[re],be=r.convert(ge.format,ge.colorSpace),ne=r.convert(ge.type),ce=x(ge.internalFormat,be,ne,ge.normalized,ge.colorSpace);Lt(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ct(S),ce,S.width,S.height):j?n.renderbufferStorageMultisample(n.RENDERBUFFER,ct(S),ce,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,ce,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function fe(C,S,j){let Q=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let re=i.get(S.depthTexture);if(re.__renderTarget=S,(!re.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Q){if(re.__webglInit===void 0&&(re.__webglInit=!0,S.depthTexture.addEventListener("dispose",A)),re.__webglTexture===void 0){re.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,re.__webglTexture),ie(n.TEXTURE_CUBE_MAP,S.depthTexture);let ye=r.convert(S.depthTexture.format),ke=r.convert(S.depthTexture.type),Me;S.depthTexture.format===Ti?Me=n.DEPTH_COMPONENT24:S.depthTexture.format===Ss&&(Me=n.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Me,S.width,S.height,0,ye,ke,null)}}else K(S.depthTexture,0);let ge=re.__webglTexture,be=ct(S),ne=Q?n.TEXTURE_CUBE_MAP_POSITIVE_X+j:n.TEXTURE_2D,ce=S.depthTexture.format===Ss?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(S.depthTexture.format===Ti)Lt(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ce,ne,ge,0,be):n.framebufferTexture2D(n.FRAMEBUFFER,ce,ne,ge,0);else if(S.depthTexture.format===Ss)Lt(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ce,ne,ge,0,be):n.framebufferTexture2D(n.FRAMEBUFFER,ce,ne,ge,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function me(C){let S=i.get(C),j=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){let Q=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Q){let re=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Q.removeEventListener("dispose",re)};Q.addEventListener("dispose",re),S.__depthDisposeCallback=re}S.__boundDepthTexture=Q}if(C.depthTexture&&!S.__autoAllocateDepthBuffer)if(j)for(let Q=0;Q<6;Q++)fe(S.__webglFramebuffer[Q],C,Q);else{let Q=C.texture.mipmaps;Q&&Q.length>0?fe(S.__webglFramebuffer[0],C,0):fe(S.__webglFramebuffer,C,0)}else if(j){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]===void 0)S.__webglDepthbuffer[Q]=n.createRenderbuffer(),le(S.__webglDepthbuffer[Q],C,!1);else{let re=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=S.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,ge),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,ge)}}else{let Q=C.texture.mipmaps;if(Q&&Q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),le(S.__webglDepthbuffer,C,!1);else{let re=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ge),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,ge)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Re(C,S,j){let Q=i.get(C);S!==void 0&&ue(Q.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),j!==void 0&&me(C)}function Ie(C){let S=C.texture,j=i.get(C),Q=i.get(S);C.addEventListener("dispose",y);let re=C.textures,ge=C.isWebGLCubeRenderTarget===!0,be=re.length>1;if(be||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=S.version,a.memory.textures++),ge){j.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(S.mipmaps&&S.mipmaps.length>0){j.__webglFramebuffer[ne]=[];for(let ce=0;ce<S.mipmaps.length;ce++)j.__webglFramebuffer[ne][ce]=n.createFramebuffer()}else j.__webglFramebuffer[ne]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){j.__webglFramebuffer=[];for(let ne=0;ne<S.mipmaps.length;ne++)j.__webglFramebuffer[ne]=n.createFramebuffer()}else j.__webglFramebuffer=n.createFramebuffer();if(be)for(let ne=0,ce=re.length;ne<ce;ne++){let ye=i.get(re[ne]);ye.__webglTexture===void 0&&(ye.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&Lt(C)===!1){j.__webglMultisampledFramebuffer=n.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let ne=0;ne<re.length;ne++){let ce=re[ne];j.__webglColorRenderbuffer[ne]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,j.__webglColorRenderbuffer[ne]);let ye=r.convert(ce.format,ce.colorSpace),ke=r.convert(ce.type),Me=x(ce.internalFormat,ye,ke,ce.normalized,ce.colorSpace,C.isXRRenderTarget===!0),xe=ct(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,Me,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ne,n.RENDERBUFFER,j.__webglColorRenderbuffer[ne])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(j.__webglDepthRenderbuffer=n.createRenderbuffer(),le(j.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ge){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),ie(n.TEXTURE_CUBE_MAP,S);for(let ne=0;ne<6;ne++)if(S.mipmaps&&S.mipmaps.length>0)for(let ce=0;ce<S.mipmaps.length;ce++)ue(j.__webglFramebuffer[ne][ce],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ce);else ue(j.__webglFramebuffer[ne],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);p(S)&&_(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let ne=0,ce=re.length;ne<ce;ne++){let ye=re[ne],ke=i.get(ye),Me=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Me=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Me,ke.__webglTexture),ie(Me,ye),ue(j.__webglFramebuffer,C,ye,n.COLOR_ATTACHMENT0+ne,Me,0),p(ye)&&_(Me)}t.unbindTexture()}else{let ne=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ne=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ne,Q.__webglTexture),ie(ne,S),S.mipmaps&&S.mipmaps.length>0)for(let ce=0;ce<S.mipmaps.length;ce++)ue(j.__webglFramebuffer[ce],C,S,n.COLOR_ATTACHMENT0,ne,ce);else ue(j.__webglFramebuffer,C,S,n.COLOR_ATTACHMENT0,ne,0);p(S)&&_(ne),t.unbindTexture()}C.depthBuffer&&me(C)}function ze(C){let S=C.textures;for(let j=0,Q=S.length;j<Q;j++){let re=S[j];if(p(re)){let ge=T(C),be=i.get(re).__webglTexture;t.bindTexture(ge,be),_(ge),t.unbindTexture()}}}let Qe=[],tt=[];function Pt(C){if(C.samples>0){if(Lt(C)===!1){let S=C.textures,j=C.width,Q=C.height,re=n.COLOR_BUFFER_BIT,ge=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=i.get(C),ne=S.length>1;if(ne)for(let ye=0;ye<S.length;ye++)t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);let ce=C.texture.mipmaps;ce&&ce.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let ye=0;ye<S.length;ye++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(re|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(re|=n.STENCIL_BUFFER_BIT)),ne){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,be.__webglColorRenderbuffer[ye]);let ke=i.get(S[ye]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ke,0)}n.blitFramebuffer(0,0,j,Q,0,0,j,Q,re,n.NEAREST),c===!0&&(Qe.length=0,tt.length=0,Qe.push(n.COLOR_ATTACHMENT0+ye),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(Qe.push(ge),tt.push(ge),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,tt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Qe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ne)for(let ye=0;ye<S.length;ye++){t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,be.__webglColorRenderbuffer[ye]);let ke=i.get(S[ye]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&c){let S=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function ct(C){return Math.min(s.maxSamples,C.samples)}function Lt(C){let S=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function G(C){let S=a.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function Dt(C,S){let j=C.colorSpace,Q=C.format,re=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||j!==vn&&j!==Qi&&(st.getTransfer(j)===xt?(Q!==Hn||re!==Cn)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",j)),S}function ft(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=F,this.getTextureUnits=D,this.setTextureUnits=k,this.setTexture2D=K,this.setTexture2DArray=P,this.setTexture3D=H,this.setTextureCube=X,this.rebindTextures=Re,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Lt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Ov(n,e){function t(i,s=Qi){let r,a=st.getTransfer(s);if(i===Cn)return n.UNSIGNED_BYTE;if(i===Lc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Dc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===iu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===su)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===tu)return n.BYTE;if(i===nu)return n.SHORT;if(i===na)return n.UNSIGNED_SHORT;if(i===Ic)return n.INT;if(i===pi)return n.UNSIGNED_INT;if(i===Vn)return n.FLOAT;if(i===jt)return n.HALF_FLOAT;if(i===ru)return n.ALPHA;if(i===au)return n.RGB;if(i===Hn)return n.RGBA;if(i===Ti)return n.DEPTH_COMPONENT;if(i===Ss)return n.DEPTH_STENCIL;if(i===Nc)return n.RED;if(i===Fc)return n.RED_INTEGER;if(i===Ts)return n.RG;if(i===Uc)return n.RG_INTEGER;if(i===Oc)return n.RGBA_INTEGER;if(i===so||i===ro||i===ao||i===oo)if(a===xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===so)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===so)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ro)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ao)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===oo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===kc||i===Bc||i===zc||i===Gc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===kc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Bc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===zc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Gc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Vc||i===Hc||i===Wc||i===qc||i===Xc||i===co||i===jc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Vc||i===Hc)return a===xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Wc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===qc)return r.COMPRESSED_R11_EAC;if(i===Xc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===co)return r.COMPRESSED_RG11_EAC;if(i===jc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Kc||i===$c||i===Yc||i===Jc||i===Zc||i===Qc||i===el||i===tl||i===nl||i===il||i===sl||i===rl||i===al||i===ol)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Kc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===$c)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Yc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Zc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Qc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===el)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===tl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===nl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===il)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===rl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===al)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ol)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===cl||i===ll||i===hl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===cl)return a===xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ll)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===hl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ul||i===dl||i===lo||i===fl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ul)return r.COMPRESSED_RED_RGTC1_EXT;if(i===dl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===lo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ia?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var kv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bv=`
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

}`,Nu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ha(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Ut({vertexShader:kv,fragmentShader:Bv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new St(new ji(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Fu=class extends fi{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,b=typeof XRWebGLBinding<"u",m=new Nu,p={},_=t.getContextAttributes(),T=null,x=null,v=[],M=[],A=new Ae,y=null,E=null,L=new Jt;L.viewport=new bt;let O=new Jt;O.viewport=new bt;let U=[L,O],F=new Ac,D=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let R=v[q];return R===void 0&&(R=new Br,v[q]=R),R.getTargetRaySpace()},this.getControllerGrip=function(q){let R=v[q];return R===void 0&&(R=new Br,v[q]=R),R.getGripSpace()},this.getHand=function(q){let R=v[q];return R===void 0&&(R=new Br,v[q]=R),R.getHandSpace()};function V(q){let R=M.indexOf(q.inputSource);if(R===-1)return;let W=v[R];W!==void 0&&(W.update(q.inputSource,q.frame,l||a),W.dispatchEvent({type:q.type,data:q.inputSource}))}function N(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",K);for(let q=0;q<v.length;q++){let R=M[q];R!==null&&(M[q]=null,v[q].disconnect(R))}D=null,k=null,m.reset();for(let q in p)delete p[q];if(e.setRenderTarget(T),f=null,d=null,u=null,s=null,x=null,pe.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(A.width,A.height,!1),E!==null){let q=E.camera;q.fov=E.fov,q.zoom=E.zoom,q.updateProjectionMatrix(),E=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&b&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",N),s.addEventListener("inputsourceschange",K),_.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(A),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let W=null,te=null,ue=null;_.depth&&(ue=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,W=_.stencil?Ss:Ti,te=_.stencil?ia:pi);let le={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(le),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Bt(d.textureWidth,d.textureHeight,{format:Hn,type:Cn,depthTexture:new bs(d.textureWidth,d.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let W={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,W),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Bt(f.framebufferWidth,f.framebufferHeight,{format:Hn,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),pe.setContext(s),pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function K(q){for(let R=0;R<q.removed.length;R++){let W=q.removed[R],te=M.indexOf(W);te>=0&&(M[te]=null,v[te].disconnect(W))}for(let R=0;R<q.added.length;R++){let W=q.added[R],te=M.indexOf(W);if(te===-1){for(let le=0;le<v.length;le++)if(le>=M.length){M.push(W),te=le;break}else if(M[le]===null){M[le]=W,te=le;break}if(te===-1)break}let ue=v[te];ue&&ue.connect(W)}}let P=new I,H=new I;function X(q,R,W){P.setFromMatrixPosition(R.matrixWorld),H.setFromMatrixPosition(W.matrixWorld);let te=P.distanceTo(H),ue=R.projectionMatrix.elements,le=W.projectionMatrix.elements,fe=ue[14]/(ue[10]-1),me=ue[14]/(ue[10]+1),Re=(ue[9]+1)/ue[5],Ie=(ue[9]-1)/ue[5],ze=(ue[8]-1)/ue[0],Qe=(le[8]+1)/le[0],tt=fe*ze,Pt=fe*Qe,ct=te/(-ze+Qe),Lt=ct*-ze;if(R.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Lt),q.translateZ(ct),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),ue[10]===-1)q.projectionMatrix.copy(R.projectionMatrix),q.projectionMatrixInverse.copy(R.projectionMatrixInverse);else{let G=fe+ct,Dt=me+ct,ft=tt-Lt,C=Pt+(te-Lt),S=Re*me/Dt*G,j=Ie*me/Dt*G;q.projectionMatrix.makePerspective(ft,C,S,j,G,Dt),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function he(q,R){R===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(R.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let R=q.near,W=q.far;m.texture!==null&&(m.depthNear>0&&(R=m.depthNear),m.depthFar>0&&(W=m.depthFar)),F.near=O.near=L.near=R,F.far=O.far=L.far=W,(D!==F.near||k!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),D=F.near,k=F.far),F.layers.mask=q.layers.mask|6,L.layers.mask=F.layers.mask&-5,O.layers.mask=F.layers.mask&-3;let te=q.parent,ue=F.cameras;he(F,te);for(let le=0;le<ue.length;le++)he(ue[le],te);ue.length===2?X(F,L,O):F.projectionMatrix.copy(L.projectionMatrix),E===null&&q.isPerspectiveCamera&&(E={camera:q,fov:q.fov,zoom:q.zoom}),J(q,F,te)};function J(q,R,W){W===null?q.matrix.copy(R.matrixWorld):(q.matrix.copy(W.matrixWorld),q.matrix.invert(),q.matrix.multiply(R.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(R.projectionMatrix),q.projectionMatrixInverse.copy(R.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=qs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(q){return p[q]};let se=null;function ie(q,R){if(h=R.getViewerPose(l||a),g=R,h!==null){let W=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let te=!1;W.length!==F.cameras.length&&(F.cameras.length=0,te=!0);for(let me=0;me<W.length;me++){let Re=W[me],Ie=null;if(f!==null)Ie=f.getViewport(Re);else{let Qe=u.getViewSubImage(d,Re);Ie=Qe.viewport,me===0&&(e.setRenderTargetTextures(x,Qe.colorTexture,Qe.depthStencilTexture),e.setRenderTarget(x))}let ze=U[me];ze===void 0&&(ze=new Jt,ze.layers.enable(me),ze.viewport=new bt,U[me]=ze),ze.matrix.fromArray(Re.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(Re.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),me===0&&(F.matrix.copy(ze.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),te===!0&&F.cameras.push(ze)}let ue=s.enabledFeatures;if(ue&&ue.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){u=i.getBinding();let me=u.getDepthInformation(W[0]);me&&me.isValid&&me.texture&&m.init(me,s.renderState)}if(ue&&ue.includes("camera-access")&&b){e.state.unbindTexture(),u=i.getBinding();for(let me=0;me<W.length;me++){let Re=W[me].camera;if(Re){let Ie=p[Re];Ie||(Ie=new Ha,p[Re]=Ie);let ze=u.getCameraImage(Re);Ie.sourceTexture=ze}}}}for(let W=0;W<v.length;W++){let te=M[W],ue=v[W];te!==null&&ue!==void 0&&ue.update(te,R,l||a)}se&&se(q,R),R.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:R}),g=null}let pe=new zp;pe.setAnimationLoop(ie),this.setAnimationLoop=function(q){se=q},this.dispose=function(){}}},zv=new Ye,Xp=new Je;Xp.set(-1,0,0,0,1,0,0,0,1);function Gv(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,du(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,T,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),b(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,_,T):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===an&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===an&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=e.get(p),T=_.envMap,x=_.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(zv.makeRotationFromEuler(x)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Xp),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,_,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===an&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function b(m,p){let _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Vv(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,v){let M=v.program;i.uniformBlockBinding(x,M)}function l(x,v){let M=s[x.id];M===void 0&&(m(x),M=h(x),s[x.id]=M,x.addEventListener("dispose",_));let A=v.program;i.updateUBOMapping(x,A);let y=e.render.frame;r[x.id]!==y&&(d(x),r[x.id]=y)}function h(x){let v=u();x.__bindingPointIndex=v;let M=n.createBuffer(),A=x.__size,y=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,A,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,M),M}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let v=s[x.id],M=x.uniforms,A=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let y=0,E=M.length;y<E;y++){let L=M[y];if(Array.isArray(L))for(let O=0,U=L.length;O<U;O++)f(L[O],y,O,A);else f(L,y,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(x,v,M,A){if(b(x,v,M,A)===!0){let y=x.__offset,E=x.value;if(Array.isArray(E)){let L=0;for(let O=0;O<E.length;O++){let U=E[O],F=p(U);g(U,x.__data,L),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(L+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(E,x.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,y,x.__data)}}function g(x,v,M){typeof x=="number"||typeof x=="boolean"?v[0]=x:x.isMatrix3?(v[0]=x.elements[0],v[1]=x.elements[1],v[2]=x.elements[2],v[3]=0,v[4]=x.elements[3],v[5]=x.elements[4],v[6]=x.elements[5],v[7]=0,v[8]=x.elements[6],v[9]=x.elements[7],v[10]=x.elements[8],v[11]=0):ArrayBuffer.isView(x)?v.set(new x.constructor(x.buffer,x.byteOffset,v.length)):x.toArray(v,M)}function b(x,v,M,A){let y=x.value,E=v+"_"+M;if(A[E]===void 0)return typeof y=="number"||typeof y=="boolean"?A[E]=y:ArrayBuffer.isView(y)?A[E]=y.slice():A[E]=y.clone(),!0;{let L=A[E];if(typeof y=="number"||typeof y=="boolean"){if(L!==y)return A[E]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(L.equals(y)===!1)return L.copy(y),!0}}return!1}function m(x){let v=x.uniforms,M=0,A=16;for(let E=0,L=v.length;E<L;E++){let O=Array.isArray(v[E])?v[E]:[v[E]];for(let U=0,F=O.length;U<F;U++){let D=O[U],k=Array.isArray(D.value)?D.value:[D.value];for(let V=0,N=k.length;V<N;V++){let K=k[V],P=p(K),H=M%A,X=H%P.boundary,he=H+X;M+=X,he!==0&&A-he<P.storage&&(M+=A-he),D.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=M,M+=P.storage}}}let y=M%A;return y>0&&(M+=A-y),x.__size=M,x.__cache={},this}function p(x){let v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(v.boundary=16,v.storage=x.byteLength):Ve("WebGLRenderer: Unsupported uniform value type.",x),v}function _(x){let v=x.target;v.removeEventListener("dispose",_);let M=a.indexOf(v.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function T(){for(let x in s)n.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:c,update:l,dispose:T}}var Hv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ri=null;function Wv(){return Ri===null&&(Ri=new Wr(Hv,16,16,Ts,jt),Ri.name="DFG_LUT",Ri.minFilter=qt,Ri.magFilter=qt,Ri.wrapS=Zn,Ri.wrapT=Zn,Ri.generateMipmaps=!1,Ri.needsUpdate=!0),Ri}var xl=class{constructor(e={}){let{canvas:t=dp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Cn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let b=f,m=new Set([Oc,Uc,Fc]),p=new Set([Cn,pi,na,ia,Lc,Dc]),_=new Uint32Array(4),T=new Int32Array(4),x=new I,v=null,M=null,A=[],y=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,O=!1,U=null,F=null,D=null,k=null;this._outputColorSpace=Ht;let V=0,N=0,K=null,P=-1,H=null,X=new bt,he=new bt,J=null,se=new Be(0),ie=0,pe=t.width,q=t.height,R=1,W=null,te=null,ue=new bt(0,0,pe,q),le=new bt(0,0,pe,q),fe=!1,me=new qr,Re=!1,Ie=!1,ze=new Ye,Qe=new I,tt=new bt,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ct=!1;function Lt(){return K===null?R:1}let G=i;function Dt(w,B){return t.getContext(w,B)}let ft,C,S,j,Q,re,ge,be,ne,ce,ye,ke,Me,xe,Ue,He,$e,z,Se,ae,ve,Ee,de;try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",wt,!1),t.addEventListener("webglcontextrestored",pt,!1),t.addEventListener("webglcontextcreationerror",Nn,!1),G===null){let B="webgl2";if(G=Dt(B,w),G===null)throw Dt(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Oe()}catch(w){throw t.removeEventListener("webglcontextlost",wt,!1),t.removeEventListener("webglcontextrestored",pt,!1),t.removeEventListener("webglcontextcreationerror",Nn,!1),je("WebGLRenderer: "+w.message),w}function Oe(){ft=new J_(G),ft.init(),ve=new Ov(G,ft),C=new G_(G,ft,e,ve),S=new Fv(G,ft),C.reversedDepthBuffer&&d&&S.buffers.depth.setReversed(!0),F=G.createFramebuffer(),D=G.createFramebuffer(),k=G.createFramebuffer(),j=new ex(G),Q=new yv,re=new Uv(G,ft,S,Q,C,ve,j),ge=new Y_(L),be=new n0(G),Ee=new B_(G,be),ne=new Z_(G,be,j,Ee),ce=new nx(G,ne,be,Ee,j),z=new tx(G,C,re),Ue=new V_(Q),ye=new vv(L,ge,ft,C,Ee,Ue),ke=new Gv(L,Q),Me=new Sv,xe=new Cv(ft),$e=new k_(L,ge,S,ce,g,c),He=new Nv(L,ce,C),de=new Vv(G,j,C,S),Se=new z_(G,ft,j),ae=new Q_(G,ft,j),j.programs=ye.programs,L.capabilities=C,L.extensions=ft,L.properties=Q,L.renderLists=Me,L.shadowMap=He,L.state=S,L.info=j}b!==Cn&&(E=new sx(b,t.width,t.height,o,s,r));let Ne=new Fu(L,G);this.xr=Ne,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let w=ft.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=ft.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return R},this.setPixelRatio=function(w){w!==void 0&&(R=w,this.setSize(pe,q,!1))},this.getSize=function(w){return w.set(pe,q)},this.setSize=function(w,B,ee=!0){if(Ne.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}pe=w,q=B,t.width=Math.floor(w*R),t.height=Math.floor(B*R),ee===!0&&(t.style.width=w+"px",t.style.height=B+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(pe*R,q*R).floor()},this.setDrawingBufferSize=function(w,B,ee){pe=w,q=B,R=ee,t.width=Math.floor(w*ee),t.height=Math.floor(B*ee),this.setViewport(0,0,w,B)},this.setEffects=function(w){if(b===Cn){je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let B=0;B<w.length;B++)if(w[B].isOutputPass===!0){Ve("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(X)},this.getViewport=function(w){return w.copy(ue)},this.setViewport=function(w,B,ee,Y){w.isVector4?ue.set(w.x,w.y,w.z,w.w):ue.set(w,B,ee,Y),S.viewport(X.copy(ue).multiplyScalar(R).round())},this.getScissor=function(w){return w.copy(le)},this.setScissor=function(w,B,ee,Y){w.isVector4?le.set(w.x,w.y,w.z,w.w):le.set(w,B,ee,Y),S.scissor(he.copy(le).multiplyScalar(R).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(w){S.setScissorTest(fe=w)},this.setOpaqueSort=function(w){W=w},this.setTransparentSort=function(w){te=w},this.getClearColor=function(w){return w.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor(...arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha(...arguments)},this.clear=function(w=!0,B=!0,ee=!0){let Y=0;if(w){let $=!1;if(K!==null){let we=K.texture.format;$=m.has(we)}if($){let we=K.texture.type,Pe=p.has(we),Te=$e.getClearColor(),De=$e.getClearAlpha(),Ge=Te.r,nt=Te.g,lt=Te.b;Pe?(_[0]=Ge,_[1]=nt,_[2]=lt,_[3]=De,G.clearBufferuiv(G.COLOR,0,_)):(T[0]=Ge,T[1]=nt,T[2]=lt,T[3]=De,G.clearBufferiv(G.COLOR,0,T))}else Y|=G.COLOR_BUFFER_BIT}B&&(Y|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ee&&(Y|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&G.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),U=w},this.dispose=function(){t.removeEventListener("webglcontextlost",wt,!1),t.removeEventListener("webglcontextrestored",pt,!1),t.removeEventListener("webglcontextcreationerror",Nn,!1),$e.dispose(),Me.dispose(),xe.dispose(),Q.dispose(),ge.dispose(),ce.dispose(),Ee.dispose(),de.dispose(),ye.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",mt),Ne.removeEventListener("sessionend",rt),qe.stop()};function wt(w){w.preventDefault(),La("WebGLRenderer: Context Lost."),O=!0}function pt(){La("WebGLRenderer: Context Restored."),O=!1;let w=j.autoReset,B=He.enabled,ee=He.autoUpdate,Y=He.needsUpdate,$=He.type;Oe(),j.autoReset=w,He.enabled=B,He.autoUpdate=ee,He.needsUpdate=Y,He.type=$}function Nn(w){je("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function $n(w){let B=w.target;B.removeEventListener("dispose",$n),eh(B)}function eh(w){th(w),Q.remove(w)}function th(w){let B=Q.get(w).programs;B!==void 0&&(B.forEach(function(ee){ye.releaseProgram(ee)}),w.isShaderMaterial&&ye.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,ee,Y,$,we){B===null&&(B=Pt);let Pe=$.isMesh&&$.matrixWorld.determinantAffine()<0,Te=Ft(w,B,ee,Y,$);S.setMaterial(Y,Pe);let De=ee.index,Ge=1;if(Y.wireframe===!0){if(De=ne.getWireframeAttribute(ee),De===void 0)return;Ge=2}let nt=ee.drawRange,lt=ee.attributes.position,Fe=nt.start*Ge,_t=(nt.start+nt.count)*Ge;we!==null&&(Fe=Math.max(Fe,we.start*Ge),_t=Math.min(_t,(we.start+we.count)*Ge)),De!==null?(Fe=Math.max(Fe,0),_t=Math.min(_t,De.count)):lt!=null&&(Fe=Math.max(Fe,0),_t=Math.min(_t,lt.count));let $t=_t-Fe;if($t<0||$t===1/0)return;Ee.setup($,Y,Te,ee,De);let Nt,Et=Se;if(De!==null&&(Nt=be.get(De),Et=ae,Et.setIndex(Nt)),$.isMesh)Y.wireframe===!0?(S.setLineWidth(Y.wireframeLinewidth*Lt()),Et.setMode(G.LINES)):Et.setMode(G.TRIANGLES);else if($.isLine){let un=Y.linewidth;un===void 0&&(un=1),S.setLineWidth(un*Lt()),$.isLineSegments?Et.setMode(G.LINES):$.isLineLoop?Et.setMode(G.LINE_LOOP):Et.setMode(G.LINE_STRIP)}else $.isPoints?Et.setMode(G.POINTS):$.isSprite&&Et.setMode(G.TRIANGLES);if($.isBatchedMesh)if(ft.get("WEBGL_multi_draw"))Et.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let un=$._multiDrawStarts,Le=$._multiDrawCounts,_n=$._multiDrawCount,ut=De?be.get(De).bytesPerElement:1,Yn=Q.get(Y).currentProgram.getUniforms();for(let yi=0;yi<_n;yi++)Yn.setValue(G,"_gl_DrawID",yi),Et.render(un[yi]/ut,Le[yi])}else if($.isInstancedMesh)Et.renderInstances(Fe,$t,$.count);else if(ee.isInstancedBufferGeometry){let un=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Le=Math.min(ee.instanceCount,un);Et.renderInstances(Fe,$t,Le)}else Et.render(Fe,$t)};function oe(w,B,ee,Y){U!==null&&w.isNodeMaterial&&U.setObject(Y,w),Re===!0&&Ue.setState(w,ee,!1),w.transparent===!0&&w.side===Mn&&w.forceSinglePass===!1?(w.side=an,w.needsUpdate=!0,ai(w,B,Y),w.side=zn,w.needsUpdate=!0,ai(w,B,Y),w.side=Mn):ai(w,B,Y)}this.compile=function(w,B,ee=null){ee===null&&(ee=w),U!==null&&U.renderStart(w,B,ee),M=xe.get(ee),M.init(B),y.push(M),ee.traverseVisible(function($){$.isLight&&$.layers.test(B.layers)&&(M.pushLight($),$.castShadow&&M.pushShadow($))}),w!==ee&&w.traverseVisible(function($){$.isLight&&$.layers.test(B.layers)&&(M.pushLight($),$.castShadow&&M.pushShadow($))}),M.setupLights(),U!==null&&U.updateLights(M.state.lightsArray),Ie=this.localClippingEnabled,Re=Ue.init(this.clippingPlanes,Ie),Re===!0&&Ue.setGlobalState(this.clippingPlanes,B),U!==null&&He.render(M.state.shadowsArray,ee,B);let Y=new Set;return w.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let we=$.material;if(we)if(Array.isArray(we))for(let Pe=0;Pe<we.length;Pe++){let Te=we[Pe];oe(Te,ee,B,$),Y.add(Te)}else oe(we,ee,B,$),Y.add(we)}),M=y.pop(),U!==null&&U.renderEnd(),Y},this.compileAsync=function(w,B,ee=null){let Y=this.compile(w,B,ee);return new Promise($=>{function we(){if(Y.forEach(function(Pe){let De=Q.get(Pe).currentProgram;(De===void 0||De.isReady())&&Y.delete(Pe)}),Y.size===0){$(w);return}setTimeout(we,10)}ft.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let _e=null;function Xe(w){_e&&_e(w)}function mt(){qe.stop()}function rt(){qe.start()}let qe=new zp;qe.setAnimationLoop(Xe),typeof self<"u"&&qe.setContext(self),this.setAnimationLoop=function(w){_e=w,Ne.setAnimationLoop(w),w===null?qe.stop():qe.start()},Ne.addEventListener("sessionstart",mt),Ne.addEventListener("sessionend",rt),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;U!==null&&U.renderStart(w,B);let ee=Ne.enabled===!0&&Ne.isPresenting===!0,Y=E!==null&&(K===null||ee)&&E.begin(L,K);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(B),B=Ne.getCamera()),w.isScene===!0&&w.onBeforeRender(L,w,B,K),M=xe.get(w,y.length),M.init(B),M.state.textureUnits=re.getTextureUnits(),y.push(M),ze.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),me.setFromProjectionMatrix(ze,ui,B.reversedDepth),Ie=this.localClippingEnabled,Re=Ue.init(this.clippingPlanes,Ie),v=Me.get(w,A.length),v.init(),A.push(v),Ne.enabled===!0&&Ne.isPresenting===!0){let Pe=L.xr.getDepthSensingMesh();Pe!==null&&at(Pe,B,-1/0,L.sortObjects)}at(w,B,0,L.sortObjects),v.finish(),U!==null&&U.updateLights(M.state.lightsArray),L.sortObjects===!0&&v.sort(W,te),ct=Ne.enabled===!1||Ne.isPresenting===!1||Ne.hasDepthSensing()===!1,ct&&$e.addToRenderList(v,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Re===!0&&Ue.beginShadows();let $=M.state.shadowsArray;if(He.render($,w,B),Re===!0&&Ue.endShadows(),(Y&&E.hasRenderPass())===!1){let Pe=v.opaque,Te=v.transmissive;if(M.setupLights(),B.isArrayCamera){let De=B.cameras;if(Te.length>0)for(let Ge=0,nt=De.length;Ge<nt;Ge++){let lt=De[Ge];Fn(Pe,Te,w,lt)}ct&&$e.render(w);for(let Ge=0,nt=De.length;Ge<nt;Ge++){let lt=De[Ge];ht(v,w,lt,lt.viewport)}}else Te.length>0&&Fn(Pe,Te,w,B),ct&&$e.render(w),ht(v,w,B)}K!==null&&N===0&&(re.updateMultisampleRenderTarget(K),re.updateRenderTargetMipmap(K)),Y&&E.end(L),w.isScene===!0&&w.onAfterRender(L,w,B),Ee.resetDefaultState(),P=-1,H=null,y.pop(),y.length>0?(M=y[y.length-1],re.setTextureUnits(M.state.textureUnits),Re===!0&&Ue.setGlobalState(L.clippingPlanes,M.state.camera)):M=null,A.pop(),A.length>0?v=A[A.length-1]:v=null,U!==null&&U.renderEnd()};function at(w,B,ee,Y){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)ee=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLightProbeGrid)M.pushLightProbeGrid(w);else if(w.isLight)M.pushLight(w),w.castShadow&&M.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(me)){Y&&tt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ze);let Pe=ce.update(w),Te=w.material;Te.visible&&v.push(w,Pe,Te,ee,tt.z,null,B)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(me))){let Pe=ce.update(w),Te=w.material;if(Y&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),tt.copy(w.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),tt.copy(Pe.boundingSphere.center)),tt.applyMatrix4(w.matrixWorld).applyMatrix4(ze)),Array.isArray(Te)){let De=Pe.groups;for(let Ge=0,nt=De.length;Ge<nt;Ge++){let lt=De[Ge],Fe=Te[lt.materialIndex];Fe&&Fe.visible&&v.push(w,Pe,Fe,ee,tt.z,lt,B)}}else Te.visible&&v.push(w,Pe,Te,ee,tt.z,null,B)}}let we=w.children;for(let Pe=0,Te=we.length;Pe<Te;Pe++)at(we[Pe],B,ee,Y)}function ht(w,B,ee,Y){let{opaque:$,transmissive:we,transparent:Pe}=w;M.setupLightsView(ee),Re===!0&&Ue.setGlobalState(L.clippingPlanes,ee),Y&&S.viewport(X.copy(Y)),$.length>0&&Ni($,B,ee),we.length>0&&Ni(we,B,ee),Pe.length>0&&Ni(Pe,B,ee),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function Fn(w,B,ee,Y){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[Y.id]===void 0){let Fe=ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[Y.id]=new Bt(1,1,{generateMipmaps:!0,type:Fe?jt:Cn,minFilter:Rn,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:st.workingColorSpace})}let we=M.state.transmissionRenderTarget[Y.id],Pe=Y.viewport||X;we.setSize(Pe.z*L.transmissionResolutionScale,Pe.w*L.transmissionResolutionScale);let Te=L.getRenderTarget(),De=L.getActiveCubeFace(),Ge=L.getActiveMipmapLevel();L.setRenderTarget(we),L.getClearColor(se),ie=L.getClearAlpha(),ie<1&&L.setClearColor(16777215,.5),L.clear(),ct&&$e.render(ee);let nt=L.toneMapping;L.toneMapping=Gn;let lt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),M.setupLightsView(Y),Re===!0&&Ue.setGlobalState(L.clippingPlanes,Y),Ni(w,ee,Y),re.updateMultisampleRenderTarget(we),re.updateRenderTargetMipmap(we),ft.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let _t=0,$t=B.length;_t<$t;_t++){let Nt=B[_t],{object:Et,geometry:un,material:Le,group:_n}=Nt;if(Le.side===Mn&&Et.layers.test(Y.layers)){let ut=Le.side;Le.side=an,Le.needsUpdate=!0,Un(Et,ee,Y,un,Le,_n),Le.side=ut,Le.needsUpdate=!0,Fe=!0}}Fe===!0&&(re.updateMultisampleRenderTarget(we),re.updateRenderTargetMipmap(we))}L.setRenderTarget(Te,De,Ge),L.setClearColor(se,ie),lt!==void 0&&(Y.viewport=lt),L.toneMapping=nt}function Ni(w,B,ee){let Y=B.isScene===!0?B.overrideMaterial:null;for(let $=0,we=w.length;$<we;$++){let Pe=w[$],{object:Te,geometry:De,group:Ge}=Pe,nt=Pe.material;nt.allowOverride===!0&&Y!==null&&(nt=Y),Te.layers.test(ee.layers)&&Un(Te,B,ee,De,nt,Ge)}}function Un(w,B,ee,Y,$,we){U!==null&&$.isNodeMaterial&&U.setObject(w,$),w.onBeforeRender(L,B,ee,Y,$,we),w.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),$.onBeforeRender(L,B,ee,Y,w,we),$.transparent===!0&&$.side===Mn&&$.forceSinglePass===!1?($.side=an,$.needsUpdate=!0,L.renderBufferDirect(ee,B,Y,$,w,we),$.side=zn,$.needsUpdate=!0,L.renderBufferDirect(ee,B,Y,$,w,we),$.side=Mn):L.renderBufferDirect(ee,B,Y,$,w,we),w.onAfterRender(L,B,ee,Y,$,we)}function ai(w,B,ee){B.isScene!==!0&&(B=Pt);let Y=Q.get(w),$=M.state.lights,we=M.state.shadowsArray,Pe=$.state.version,Te=ye.getParameters(w,$.state,we,B,ee,M.state.lightProbeGridArray),De=ye.getProgramCacheKey(Te),Ge=Y.programs;Y.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?B.environment:null,Y.fog=B.fog;let nt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;Y.envMap=ge.get(w.envMap||Y.environment,nt),Y.envMapRotation=Y.environment!==null&&w.envMap===null?B.environmentRotation:w.envMapRotation,Ge===void 0&&(w.addEventListener("dispose",$n),Ge=new Map,Y.programs=Ge);let lt=Ge.get(De);if(lt!==void 0){if(Y.currentProgram===lt&&Y.lightsStateVersion===Pe)return Os(w,Te),lt}else Te.uniforms=ye.getUniforms(w),U!==null&&w.isNodeMaterial&&U.build(w,ee,Te),w.onBeforeCompile(Te,L),lt=ye.acquireProgram(Te,De),Ge.set(De,lt),Y.uniforms=Te.uniforms;let Fe=Y.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Fe.clippingPlanes=Ue.uniform),Os(w,Te),Y.needsLights=vi(w),Y.lightsStateVersion=Pe,Y.needsLights&&(Fe.ambientLightColor.value=$.state.ambient,Fe.lightProbe.value=$.state.probe,Fe.sunLights.value=$.state.sun,Fe.sunLightShadows.value=$.state.sunShadow,Fe.directionalLights.value=$.state.directional,Fe.directionalLightShadows.value=$.state.directionalShadow,Fe.spotLights.value=$.state.spot,Fe.spotLightShadows.value=$.state.spotShadow,Fe.rectAreaLights.value=$.state.rectArea,Fe.ltc_1.value=$.state.rectAreaLTC1,Fe.ltc_2.value=$.state.rectAreaLTC2,Fe.pointLights.value=$.state.point,Fe.pointLightShadows.value=$.state.pointShadow,Fe.hemisphereLights.value=$.state.hemi,Fe.sunShadowMatrix.value=$.state.sunShadowMatrix,Fe.sunShadowCascade.value=$.state.sunShadowCascade,Fe.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Fe.spotLightMatrix.value=$.state.spotLightMatrix,Fe.spotLightMap.value=$.state.spotLightMap,Fe.pointShadowMatrix.value=$.state.pointShadowMatrix),Y.lightProbeGrid=M.state.lightProbeGridArray.length>0,Y.currentProgram=lt,Y.uniformsList=null,lt}function Us(w){if(w.uniformsList===null){let B=w.currentProgram.getUniforms();w.uniformsList=oa.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function Os(w,B){let ee=Q.get(w);ee.outputColorSpace=B.outputColorSpace,ee.batching=B.batching,ee.batchingColor=B.batchingColor,ee.instancing=B.instancing,ee.instancingColor=B.instancingColor,ee.instancingMorph=B.instancingMorph,ee.skinning=B.skinning,ee.morphTargets=B.morphTargets,ee.morphNormals=B.morphNormals,ee.morphColors=B.morphColors,ee.morphTargetsCount=B.morphTargetsCount,ee.numClippingPlanes=B.numClippingPlanes,ee.numIntersection=B.numClipIntersection,ee.vertexAlphas=B.vertexAlphas,ee.vertexTangents=B.vertexTangents,ee.toneMapping=B.toneMapping}function We(w,B){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;x.setFromMatrixPosition(B.matrixWorld);for(let ee=0,Y=w.length;ee<Y;ee++){let $=w[ee];if($.texture!==null&&$.boundingBox.containsPoint(x))return $}return null}function Ft(w,B,ee,Y,$){B.isScene!==!0&&(B=Pt),re.resetTextureUnits();let we=B.fog,Pe=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?B.environment:null,Te=K===null?L.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:st.workingColorSpace,De=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Ge=ge.get(Y.envMap||Pe,De),nt=Y.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,lt=!!ee.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Fe=!!ee.morphAttributes.position,_t=!!ee.morphAttributes.normal,$t=!!ee.morphAttributes.color,Nt=Gn;Y.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Nt=L.toneMapping);let Et=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,un=Et!==void 0?Et.length:0,Le=Q.get(Y),_n=M.state.lights;if(Re===!0&&(Ie===!0||w!==H)){let It=w===H&&Y.id===P;Ue.setState(Y,w,It)}let ut=!1;Y.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==_n.state.version||Le.outputColorSpace!==Te||$.isBatchedMesh&&Le.batching===!1||!$.isBatchedMesh&&Le.batching===!0||$.isBatchedMesh&&Le.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Le.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Le.instancing===!1||!$.isInstancedMesh&&Le.instancing===!0||$.isSkinnedMesh&&Le.skinning===!1||!$.isSkinnedMesh&&Le.skinning===!0||$.isInstancedMesh&&Le.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Le.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Le.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Le.instancingMorph===!1&&$.morphTexture!==null||Le.envMap!==Ge||Y.fog===!0&&Le.fog!==we||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==Ue.numPlanes||Le.numIntersection!==Ue.numIntersection)||Le.vertexAlphas!==nt||Le.vertexTangents!==lt||Le.morphTargets!==Fe||Le.morphNormals!==_t||Le.morphColors!==$t||Le.toneMapping!==Nt||Le.morphTargetsCount!==un||!!Le.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(ut=!0):(ut=!0,Le.__version=Y.version);let Yn=Le.currentProgram;ut===!0&&(Yn=ai(Y,B,$),U&&Y.isNodeMaterial&&U.onUpdateProgram(Y,Yn,Le));let yi=!1,rs=!1,gr=!1,At=Yn.getUniforms(),Vt=Le.uniforms;if(S.useProgram(Yn.program)&&(yi=!0,rs=!0,gr=!0),Y.id!==P&&(P=Y.id,rs=!0),Le.needsLights){let It=We(M.state.lightProbeGridArray,$);Le.lightProbeGrid!==It&&(Le.lightProbeGrid=It,rs=!0)}if(yi||H!==w){S.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),At.setValue(G,"projectionMatrix",w.projectionMatrix),At.setValue(G,"viewMatrix",w.matrixWorldInverse);let os=At.map.cameraPosition;os!==void 0&&os.setValue(G,Qe.setFromMatrixPosition(w.matrixWorld)),C.logarithmicDepthBuffer&&At.setValue(G,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&At.setValue(G,"isOrthographic",w.isOrthographicCamera===!0),H!==w&&(H=w,rs=!0,gr=!0)}if(Le.needsLights&&(_n.state.sunShadowMap.length>0&&At.setValue(G,"sunShadowMap",_n.state.sunShadowMap,re),_n.state.directionalShadowMap.length>0&&At.setValue(G,"directionalShadowMap",_n.state.directionalShadowMap,re),_n.state.spotShadowMap.length>0&&At.setValue(G,"spotShadowMap",_n.state.spotShadowMap,re),_n.state.pointShadowMap.length>0&&At.setValue(G,"pointShadowMap",_n.state.pointShadowMap,re)),$.isSkinnedMesh){At.setOptional(G,$,"bindMatrix"),At.setOptional(G,$,"bindMatrixInverse");let It=$.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),At.setValue(G,"boneTexture",It.boneTexture,re))}$.isBatchedMesh&&(At.setOptional(G,$,"batchingTexture"),At.setValue(G,"batchingTexture",$._matricesTexture,re),At.setOptional(G,$,"batchingIdTexture"),At.setValue(G,"batchingIdTexture",$._indirectTexture,re),At.setOptional(G,$,"batchingColorTexture"),$._colorsTexture!==null&&At.setValue(G,"batchingColorTexture",$._colorsTexture,re));let as=ee.morphAttributes;if((as.position!==void 0||as.normal!==void 0||as.color!==void 0)&&z.update($,ee,Yn),(rs||Le.receiveShadow!==$.receiveShadow)&&(Le.receiveShadow=$.receiveShadow,At.setValue(G,"receiveShadow",$.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&B.environment!==null&&(Vt.envMapIntensity.value=B.environmentIntensity),Vt.dfgLUT!==void 0&&(Vt.dfgLUT.value=Wv()),rs){if(At.setValue(G,"toneMappingExposure",L.toneMappingExposure),Le.needsLights&&Fi(Vt,gr),we&&Y.fog===!0&&ke.refreshFogUniforms(Vt,we),ke.refreshMaterialUniforms(Vt,Y,R,q,M.state.transmissionRenderTarget[w.id]),Le.needsLights&&Le.lightProbeGrid){let It=Le.lightProbeGrid;Vt.probesSH.value=It.texture,Vt.probesMin.value.copy(It.boundingBox.min),Vt.probesMax.value.copy(It.boundingBox.max),Vt.probesResolution.value.copy(It.resolution)}oa.upload(G,Us(Le),Vt,re)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(oa.upload(G,Us(Le),Vt,re),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&At.setValue(G,"center",$.center),At.setValue(G,"modelViewMatrix",$.modelViewMatrix),At.setValue(G,"normalMatrix",$.normalMatrix),At.setValue(G,"modelMatrix",$.matrixWorld),Y.uniformsGroups!==void 0){let It=Y.uniformsGroups;for(let os=0,br=It.length;os<br;os++){let Kd=It[os];de.update(Kd,Yn),de.bind(Kd,Yn)}}return Yn}function Fi(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.sunLights.needsUpdate=B,w.sunLightShadows.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function vi(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(w,B,ee){let Y=Q.get(w);Y.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),Q.get(w.texture).__webglTexture=B,Q.get(w.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:ee,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,B){let ee=Q.get(w);ee.__webglFramebuffer=B,ee.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(w,B=0,ee=0){K=w,V=B,N=ee;let Y=null,$=!1,we=!1;if(w){let Te=Q.get(w);if(Te.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(G.FRAMEBUFFER,Te.__webglFramebuffer),X.copy(w.viewport),he.copy(w.scissor),J=w.scissorTest,S.viewport(X),S.scissor(he),S.setScissorTest(J),P=-1;return}else if(Te.__webglFramebuffer===void 0)re.setupRenderTarget(w);else if(Te.__hasExternalTextures)re.rebindTextures(w,Q.get(w.texture).__webglTexture,Q.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let nt=w.depthTexture;if(Te.__boundDepthTexture!==nt){if(nt!==null&&Q.has(nt)&&(w.width!==nt.image.width||w.height!==nt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(w)}}let De=w.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(we=!0);let Ge=Q.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ge[B])?Y=Ge[B][ee]:Y=Ge[B],$=!0):w.samples>0&&re.useMultisampledRTT(w)===!1?Y=Q.get(w).__webglMultisampledFramebuffer:Array.isArray(Ge)?Y=Ge[ee]:Y=Ge,X.copy(w.viewport),he.copy(w.scissor),J=w.scissorTest}else X.copy(ue).multiplyScalar(R).floor(),he.copy(le).multiplyScalar(R).floor(),J=fe;if(ee!==0&&(Y=F),S.bindFramebuffer(G.FRAMEBUFFER,Y)&&S.drawBuffers(w,Y),S.viewport(X),S.scissor(he),S.setScissorTest(J),$){let Te=Q.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+B,Te.__webglTexture,ee)}else if(we){let Te=B;for(let De=0;De<w.textures.length;De++){let Ge=Q.get(w.textures[De]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+De,Ge.__webglTexture,ee,Te)}}else if(w!==null&&ee!==0){let Te=Q.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Te.__webglTexture,ee)}P=-1};function Eo(w){let B=Q.get(w);return(B.__readFormat!==w.format||B.__readType!==w.type)&&(B.__readFormat=w.format,B.__readType=w.type,B.__formatReadable=C.textureFormatReadable(w.format),B.__typeReadable=C.textureTypeReadable(w.type)),B}this.readRenderTargetPixels=function(w,B,ee,Y,$,we,Pe,Te=0){if(!(w&&w.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Pe!==void 0&&(De=De[Pe]),De){S.bindFramebuffer(G.FRAMEBUFFER,De);try{let Ge=w.textures[Te],nt=Ge.format,lt=Ge.type;w.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Te);let Fe=Eo(Ge);if(Fe.__formatReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Fe.__typeReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-Y&&ee>=0&&ee<=w.height-$&&G.readPixels(B,ee,Y,$,ve.convert(nt),ve.convert(lt),we)}finally{let Ge=K!==null?Q.get(K).__webglFramebuffer:null;S.bindFramebuffer(G.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(w,B,ee,Y,$,we,Pe,Te=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=Q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Pe!==void 0&&(De=De[Pe]),De)if(B>=0&&B<=w.width-Y&&ee>=0&&ee<=w.height-$){S.bindFramebuffer(G.FRAMEBUFFER,De);let Ge=w.textures[Te],nt=Ge.format,lt=Ge.type;w.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Te);let Fe=Eo(Ge);if(Fe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Fe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let _t=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,_t),G.bufferData(G.PIXEL_PACK_BUFFER,we.byteLength,G.STREAM_READ),G.readPixels(B,ee,Y,$,ve.convert(nt),ve.convert(lt),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);let $t=K!==null?Q.get(K).__webglFramebuffer:null;S.bindFramebuffer(G.FRAMEBUFFER,$t);let Nt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await pp(G,Nt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,_t),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,we),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(_t),G.deleteSync(Nt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,B=null,ee=0){let Y=Math.pow(2,-ee),$=Math.floor(w.image.width*Y),we=Math.floor(w.image.height*Y),Pe=B!==null?B.x:0,Te=B!==null?B.y:0;re.setTexture2D(w,0),G.copyTexSubImage2D(G.TEXTURE_2D,ee,0,0,Pe,Te,$,we),S.unbindTexture()},this.copyTextureToTexture=function(w,B,ee=null,Y=null,$=0,we=0){let Pe,Te,De,Ge,nt,lt,Fe,_t,$t,Nt=w.isCompressedTexture?w.mipmaps[we]:w.image;if(ee!==null)Pe=ee.max.x-ee.min.x,Te=ee.max.y-ee.min.y,De=ee.isBox3?ee.max.z-ee.min.z:1,Ge=ee.min.x,nt=ee.min.y,lt=ee.isBox3?ee.min.z:0;else{let Vt=Math.pow(2,-$);Pe=Math.floor(Nt.width*Vt),Te=Math.floor(Nt.height*Vt),w.isDataArrayTexture?De=Nt.depth:w.isData3DTexture?De=Math.floor(Nt.depth*Vt):De=1,Ge=0,nt=0,lt=0}Y!==null?(Fe=Y.x,_t=Y.y,$t=Y.z):(Fe=0,_t=0,$t=0);let Et=ve.convert(B.format),un=ve.convert(B.type),Le;B.isData3DTexture?(re.setTexture3D(B,0),Le=G.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(re.setTexture2DArray(B,0),Le=G.TEXTURE_2D_ARRAY):(re.setTexture2D(B,0),Le=G.TEXTURE_2D),S.activeTexture(G.TEXTURE0),S.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,B.flipY),S.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),S.pixelStorei(G.UNPACK_ALIGNMENT,B.unpackAlignment);let _n=S.getParameter(G.UNPACK_ROW_LENGTH),ut=S.getParameter(G.UNPACK_IMAGE_HEIGHT),Yn=S.getParameter(G.UNPACK_SKIP_PIXELS),yi=S.getParameter(G.UNPACK_SKIP_ROWS),rs=S.getParameter(G.UNPACK_SKIP_IMAGES);S.pixelStorei(G.UNPACK_ROW_LENGTH,Nt.width),S.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Nt.height),S.pixelStorei(G.UNPACK_SKIP_PIXELS,Ge),S.pixelStorei(G.UNPACK_SKIP_ROWS,nt),S.pixelStorei(G.UNPACK_SKIP_IMAGES,lt);let gr=w.isDataArrayTexture||w.isData3DTexture,At=B.isDataArrayTexture||B.isData3DTexture;if(w.isDepthTexture){let Vt=Q.get(w),as=Q.get(B),It=Q.get(Vt.__renderTarget),os=Q.get(as.__renderTarget);S.bindFramebuffer(G.READ_FRAMEBUFFER,It.__webglFramebuffer),S.bindFramebuffer(G.DRAW_FRAMEBUFFER,os.__webglFramebuffer);for(let br=0;br<De;br++)gr&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Q.get(w).__webglTexture,$,lt+br),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Q.get(B).__webglTexture,we,$t+br)),G.blitFramebuffer(Ge,nt,Pe,Te,Fe,_t,Pe,Te,G.DEPTH_BUFFER_BIT,G.NEAREST);S.bindFramebuffer(G.READ_FRAMEBUFFER,null),S.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if($!==0||w.isRenderTargetTexture||Q.has(w)){let Vt=Q.get(w),as=Q.get(B);S.bindFramebuffer(G.READ_FRAMEBUFFER,D),S.bindFramebuffer(G.DRAW_FRAMEBUFFER,k);for(let It=0;It<De;It++)gr?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Vt.__webglTexture,$,lt+It):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Vt.__webglTexture,$),At?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,as.__webglTexture,we,$t+It):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,as.__webglTexture,we),$!==0?G.blitFramebuffer(Ge,nt,Pe,Te,Fe,_t,Pe,Te,G.COLOR_BUFFER_BIT,G.NEAREST):At?G.copyTexSubImage3D(Le,we,Fe,_t,$t+It,Ge,nt,Pe,Te):G.copyTexSubImage2D(Le,we,Fe,_t,Ge,nt,Pe,Te);S.bindFramebuffer(G.READ_FRAMEBUFFER,null),S.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else At?w.isDataTexture||w.isData3DTexture?G.texSubImage3D(Le,we,Fe,_t,$t,Pe,Te,De,Et,un,Nt.data):B.isCompressedArrayTexture?G.compressedTexSubImage3D(Le,we,Fe,_t,$t,Pe,Te,De,Et,Nt.data):G.texSubImage3D(Le,we,Fe,_t,$t,Pe,Te,De,Et,un,Nt):w.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,we,Fe,_t,Pe,Te,Et,un,Nt.data):w.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,we,Fe,_t,Nt.width,Nt.height,Et,Nt.data):G.texSubImage2D(G.TEXTURE_2D,we,Fe,_t,Pe,Te,Et,un,Nt);S.pixelStorei(G.UNPACK_ROW_LENGTH,_n),S.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ut),S.pixelStorei(G.UNPACK_SKIP_PIXELS,Yn),S.pixelStorei(G.UNPACK_SKIP_ROWS,yi),S.pixelStorei(G.UNPACK_SKIP_IMAGES,rs),we===0&&B.generateMipmaps&&G.generateMipmap(Le),S.unbindTexture()},this.initRenderTarget=function(w){Q.get(w).__webglFramebuffer===void 0&&re.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?re.setTextureCube(w,0):w.isData3DTexture?re.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?re.setTexture2DArray(w,0):re.setTexture2D(w,0),S.unbindTexture()},this.resetState=function(){V=0,N=0,K=null,S.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}};var jp={type:"change"},Ou={type:"start"},$p={type:"end"},Ml=new Wi,Kp=new Bn,qv=Math.cos(70*uo.DEG2RAD),tn=new I,Pn=2*Math.PI,Tt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Uu=1e-6,Sl=class extends eo{constructor(e,t=null){super(e,t),this.state=Tt.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:vs.ROTATE,MIDDLE:vs.DOLLY,RIGHT:vs.PAN},this.touches={ONE:ys.ROTATE,TWO:ys.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new Xt,this._lastTargetPosition=new I,this._quat=new Xt().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new xs,this._sphericalDelta=new xs,this._scale=1,this._panOffset=new I,this._rotateStart=new Ae,this._rotateEnd=new Ae,this._rotateDelta=new Ae,this._panStart=new Ae,this._panEnd=new Ae,this._panDelta=new Ae,this._dollyStart=new Ae,this._dollyEnd=new Ae,this._dollyDelta=new Ae,this._dollyDirection=new I,this._mouse=new Ae,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=jv.bind(this),this._onPointerDown=Xv.bind(this),this._onPointerUp=Kv.bind(this),this._onContextMenu=ty.bind(this),this._onMouseWheel=Jv.bind(this),this._onKeyDown=Zv.bind(this),this._onTouchStart=Qv.bind(this),this._onTouchMove=ey.bind(this),this._onMouseDown=$v.bind(this),this._onMouseMove=Yv.bind(this),this._interceptControlDown=ny.bind(this),this._interceptControlUp=iy.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Tt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(jp),this.update(),this.state=Tt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;tn.copy(t).sub(this.target),tn.applyQuaternion(this._quat),this._spherical.setFromVector3(tn),this.autoRotate&&this.state===Tt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Pn:i>Math.PI&&(i-=Pn),s<-Math.PI?s+=Pn:s>Math.PI&&(s-=Pn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(tn.setFromSpherical(this._spherical),tn.applyQuaternion(this._quatInverse),t.copy(this.target).add(tn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=tn.length();a=this._clampDistance(o*this._scale);let c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let o=new I(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new I(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=tn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ml.origin.copy(this.object.position),Ml.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ml.direction))<qv?this.object.lookAt(this.target):(Kp.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ml.intersectPlane(Kp,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Uu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Uu||this._lastTargetPosition.distanceToSquared(this.target)>Uu?(this.dispatchEvent(jp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Pn/60*this.autoRotateSpeed*e:Pn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){tn.setFromMatrixColumn(t,0),tn.multiplyScalar(-e),this._panOffset.add(tn)}_panUp(e,t){this.screenSpacePanning===!0?tn.setFromMatrixColumn(t,1):(tn.setFromMatrixColumn(t,0),tn.crossVectors(this.object.up,tn)),tn.multiplyScalar(e),this._panOffset.add(tn)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;tn.copy(s).sub(this.target);let r=tn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Pn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Pn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Pn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Pn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ae,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function Xv(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function jv(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Kv(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent($p),this.state=Tt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function $v(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case vs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Tt.DOLLY;break;case vs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Tt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Tt.ROTATE}break;case vs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Tt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Tt.PAN}break;default:this.state=Tt.NONE}this.state!==Tt.NONE&&this.dispatchEvent(Ou)}function Yv(n){switch(this.state){case Tt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Tt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Tt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Jv(n){this.enabled===!1||this.enableZoom===!1||this.state!==Tt.NONE||(n.preventDefault(),this.dispatchEvent(Ou),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent($p))}function Zv(n){this.enabled!==!1&&this._handleKeyDown(n)}function Qv(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ys.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Tt.TOUCH_ROTATE;break;case ys.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Tt.TOUCH_PAN;break;default:this.state=Tt.NONE}break;case 2:switch(this.touches.TWO){case ys.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Tt.TOUCH_DOLLY_PAN;break;case ys.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Tt.TOUCH_DOLLY_ROTATE;break;default:this.state=Tt.NONE}break;default:this.state=Tt.NONE}this.state!==Tt.NONE&&this.dispatchEvent(Ou)}function ey(n){switch(this._trackPointer(n),this.state){case Tt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Tt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Tt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Tt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Tt.NONE}}function ty(n){this.enabled!==!1&&n.preventDefault()}function ny(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function iy(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Wn(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,c=new dt,l=0;for(let h=0;h<n.length;++h){let u=n[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0,u=[];for(let d=0;d<n.length;++d){let f=n[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=n[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Yp(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let b=0;b<a[h].length;++b)f.push(a[h][b][d]);let g=Yp(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}}return c}function Yp(n){let e,t,i,s=-1,r=0;for(let l=0;l<n.length;++l){let h=n[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new gt(a,t,i),c=0;for(let l=0;l<n.length;++l){let h=n[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){let b=h.getComponent(d,g);o.setComponent(d+u,g,b)}}else a.set(h.array,c);c+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function ku(n,e){if(e===ou)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===sa||e===ho){let t=n.getIndex();if(t===null){let r=[],a=n.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);n.setIndex(r),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,s=[];if(e===sa)for(let r=1;r<=i;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<i;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),n.setIndex(s),n.clearGroups(),n}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}function Jp(n){let e=new Map,t=new Map,i=n.clone();return Zp(n,i,function(s,r){e.set(r,s),t.set(s,r)}),i.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),i}function Zp(n,e,t){t(n,e);for(let i=0;i<n.children.length;i++)Zp(n.children[i],e.children[i],t)}var Tl=class extends Ai{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new qu(t)}),this.register(function(t){return new Xu(t)}),this.register(function(t){return new td(t)}),this.register(function(t){return new nd(t)}),this.register(function(t){return new id(t)}),this.register(function(t){return new Ku(t)}),this.register(function(t){return new $u(t)}),this.register(function(t){return new Yu(t)}),this.register(function(t){return new Ju(t)}),this.register(function(t){return new Wu(t)}),this.register(function(t){return new Zu(t)}),this.register(function(t){return new ju(t)}),this.register(function(t){return new ed(t)}),this.register(function(t){return new Qu(t)}),this.register(function(t){return new Vu(t)}),this.register(function(t){return new wl(t,ot.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new wl(t,ot.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new sd(t)})}load(e,t,i,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=Zi.extractUrlBase(e);a=Zi.resolveURL(l,this.path)}else a=Zi.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Yr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===im){try{a[ot.KHR_BINARY_GLTF]=new rd(e)}catch(u){s&&s(u);return}r=JSON.parse(a[ot.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new dd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case ot.KHR_MATERIALS_UNLIT:a[u]=new Hu;break;case ot.KHR_DRACO_MESH_COMPRESSION:a[u]=new ad(r,this.dracoLoader);break;case ot.KHR_TEXTURE_TRANSFORM:a[u]=new od;break;case ot.KHR_MESH_QUANTIZATION:a[u]=new cd;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(i,s)}parseAsync(e,t){let i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}};function sy(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}function Kt(n,e,t){let i=n.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}var ot={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Vu=class{constructor(e){this.parser=e,this.name=ot.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,s=t.cache.get(i);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Be(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],vn);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Za(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Ja(h),l.distance=u;break;case"spot":l=new Ya(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Pi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return i._getNodeRef(t.cache,o,c)})}},Hu=class{constructor(){this.name=ot.KHR_MATERIALS_UNLIT}getMaterialType(){return zt}extendParams(e,t,i){let s=[];e.color=new Be(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],vn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Ht))}return Promise.all(s)}},Wu=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=Kt(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}},qu=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let i=Kt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){let r=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ae(r,r)}return Promise.all(s)}},Xu=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let i=Kt(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}},ju=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let i=Kt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(s)}},Ku=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SHEEN}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let i=Kt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(t.sheenColor=new Be(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){let r=i.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],vn)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,Ht)),i.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(s)}},$u=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let i=Kt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(s)}},Yu=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_VOLUME}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let i=Kt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;let r=i.attenuationColor||[1,1,1];return t.attenuationColor=new Be().setRGB(r[0],r[1],r[2],vn),Promise.all(s)}},Ju=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IOR}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let i=Kt(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Zu=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let i=Kt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));let r=i.specularColorFactor||[1,1,1];return t.specularColor=new Be().setRGB(r[0],r[1],r[2],vn),i.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,Ht)),Promise.all(s)}},Qu=class{constructor(e){this.parser=e,this.name=ot.EXT_MATERIALS_BUMP}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let i=Kt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(s)}},ed=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let i=Kt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(s)}},td=class{constructor(e){this.parser=e,this.name=ot.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},nd=class{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=i.textureLoader;if(o.uri){let l=i.options.manager.getHandler(o.uri);l!==null&&(c=l)}return i.loadTextureImage(e,a.source,c)}},id=class{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=i.textureLoader;if(o.uri){let l=i.options.manager.getHandler(o.uri);l!==null&&(c=l)}return i.loadTextureImage(e,a.source,c)}},wl=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},sd=class{constructor(e){this.name=ot.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=t.meshes[i.mesh];for(let l of s.primitives)if(l.mode!==ti.TRIANGLES&&l.mode!==ti.TRIANGLE_STRIP&&l.mode!==ti.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=i.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let g of u){let b=new Ye,m=new I,p=new Xt,_=new I(1,1,1),T=new Xs(g.geometry,g.material,d);for(let v=0;v<d;v++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,v),c.SCALE&&_.fromBufferAttribute(c.SCALE,v),T.setMatrixAt(v,b.compose(m,p,_));let x=null;for(let v in c)if(v==="_COLOR_0"){let M=c[v];T.instanceColor=new qi(M.array,M.itemSize,M.normalized)}else if(v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"){if(x===null){let A=T.geometry;x=new dt,x.name=A.name;for(let y in A.attributes)x.setAttribute(y,A.attributes[y]);for(let y in A.morphAttributes)x.morphAttributes[y]=A.morphAttributes[y];A.index!==null&&x.setIndex(A.index),x.morphTargetsRelative=A.morphTargetsRelative;for(let y of A.groups)x.addGroup(y.start,y.count,y.materialIndex);A.boundingBox!==null&&(x.boundingBox=A.boundingBox.clone()),A.boundingSphere!==null&&(x.boundingSphere=A.boundingSphere.clone()),x.drawRange.start=A.drawRange.start,x.drawRange.count=A.drawRange.count,x.userData=Object.assign({},A.userData),T.geometry=x}let M=c[v];x.setAttribute(v,new qi(M.array,M.itemSize,M.normalized))}Ot.prototype.copy.call(T,g),this.parser.assignFinalMaterial(T),f.push(T)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},im="glTF",go=12,Qp={JSON:1313821514,BIN:5130562},rd=class{constructor(e){this.name=ot.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,go),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==im)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-go,r=new DataView(e,go),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===Qp.JSON){let l=new Uint8Array(e,go+a,o);this.content=i.decode(l)}else if(c===Qp.BIN){let l=go+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},ad=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ot.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=hd[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=hd[h]||h.toLowerCase();if(a[h]!==void 0){let d=i.accessors[e.attributes[h]],f=ha[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let b=f.attributes[g],m=c[g];m!==void 0&&(b.normalized=m)}u(f)},o,l,vn,d)})})}},od=class{constructor(){this.name=ot.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let i=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*i,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*i,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},cd=class{constructor(){this.name=ot.KHR_MESH_QUANTIZATION}},Al=class extends wi{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=i[r+a];return t}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=s-t,u=(i-t)/h,d=u*u,f=d*u,g=e*l,b=g-l,m=-2*f+3*d,p=f-d,_=1-m,T=p-d+u;for(let x=0;x!==o;x++){let v=a[b+x+o],M=a[b+x+c]*h,A=a[g+x+o],y=a[g+x]*h;r[x]=_*v+T*M+m*A+p*y}return r}},ry=new Xt,ld=class extends Al{interpolate_(e,t,i,s){let r=super.interpolate_(e,t,i,s);return ry.fromArray(r).normalize().toArray(r),r}},ti={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ha={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},em={9728:Wt,9729:qt,9984:Pc,9985:ta,9986:tr,9987:Rn},tm={33071:Zn,33648:Nr,10497:ms},Bu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},hd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ws={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ay={CUBICSPLINE:void 0,LINEAR:Ws,STEP:Hs},zu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function oy(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new $s({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:zn})),n.DefaultMaterial}function ar(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Pi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function cy(n,e,t){let i=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(i){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):n.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):n.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):n.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return i&&(n.morphAttributes.position=h),s&&(n.morphAttributes.normal=u),r&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function ly(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function hy(n){let e,t=n.extensions&&n.extensions[ot.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Gu(t.attributes):e=n.indices+":"+Gu(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+Gu(n.targets[i]);return e}function Gu(n){let e="",t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function ud(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function uy(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var dy=new Ye,dd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new sy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);s=i&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&a<98?this.textureLoader=new Ka(this.options.manager):this.textureLoader=new Qa(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Yr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:i,userData:{}};return ar(r,o,s),Pi(o,s),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let s=i.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let s=e(t[i]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ot.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){i.load(Zi.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){let t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=Bu[s.type],o=ha[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new gt(l,a,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=Bu[s.type],l=ha[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,b,m;if(f&&f!==u){let p=Math.floor(d/f),_="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,T=t.cache.get(_);T||(b=new l(o,p*f,s.count*f/h),T=new Gr(b,f/h),t.cache.add(_,T)),m=new Vr(T,c,d%f/h,g)}else o===null?b=new l(s.count*c):b=new l(o,d,s.count*c),m=new gt(b,c,g);if(s.sparse!==void 0){let p=Bu.SCALAR,_=ha[s.sparse.indices.componentType],T=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,v=new _(a[1],T,s.sparse.count*p),M=new l(a[2],x,s.sparse.count*c);o!==null&&(m=new gt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,y=v.length;A<y;A++){let E=v[A];if(m.setX(E,M[A*c]),c>=2&&m.setY(E,M[A*c+1]),c>=3&&m.setZ(E,M[A*c+2]),c>=4&&m.setW(E,M[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=i.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,i){let s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=em[d.magFilter]||qt,h.minFilter=em[d.minFilter]||Rn,h.wrapS=tm[d.wrapS]||ms,h.wrapT=tm[d.wrapT]||ms,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Wt&&h.minFilter!==qt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=i.getDependency("bufferView",a.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(b){let m=new Zt(b);m.needsUpdate=!0,d(m)}),t.load(Zi.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),Pi(u,a),u.userData.mimeType=a.mimeType||uy(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,s){let r=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),r.extensions[ot.KHR_TEXTURE_TRANSFORM]){let o=i.extensions!==void 0?i.extensions[ot.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[ot.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,i=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+i.uuid,c=this.cache.get(o);c||(c=new jr,An.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(o,c)),i=c}else if(e.isLine){let o="LineBasicMaterial:"+i.uuid,c=this.cache.get(o);c||(c=new Xr,An.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(o,c)),i=c}if(s||r||a){let o="ClonedMaterial:"+i.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=i.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return $s}loadMaterial(e){let t=this,i=this.json,s=this.extensions,r=i.materials[e],a,o={},c=r.extensions||{},l=[];if(c[ot.KHR_MATERIALS_UNLIT]){let u=s[ot.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Be(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],vn),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,Ht)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Mn);let h=r.alphaMode||zu.OPAQUE;if(h===zu.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===zu.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==zt&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ae(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==zt&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==zt){let u=r.emissiveFactor;o.emissive=new Be().setRGB(u[0],u[1],u[2],vn)}return r.emissiveTexture!==void 0&&a!==zt&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Ht)),Promise.all(l).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Pi(u,r),t.associations.set(u,{materials:e}),r.extensions&&ar(s,u,r),u})}createUniqueName(e){let t=Rt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,s=this.primitiveCache;function r(o){return i[ot.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return nm(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=hy(l),u=s[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[ot.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=nm(new dt,l,t),l.mode===ti.TRIANGLE_STRIP?d=d.then(f=>ku(f,ho)):l.mode===ti.TRIANGLE_FAN&&(d=d.then(f=>ku(f,sa))),s[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,i=this.json,s=this.extensions,r=i.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?oy(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let b=h[f],m=a[f],p,_=l[f];if(m.mode===ti.TRIANGLES||m.mode===ti.TRIANGLE_STRIP||m.mode===ti.TRIANGLE_FAN||m.mode===void 0){let T=r.isSkinnedMesh===!0,x=b.hasAttribute("skinIndex")&&b.hasAttribute("skinWeight");T&&x===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=T&&x?new Oa(b,_):new St(b,_),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(m.mode===ti.LINES)p=new Ba(b,_);else if(m.mode===ti.LINE_STRIP)p=new js(b,_);else if(m.mode===ti.LINE_LOOP)p=new za(b,_);else if(m.mode===ti.POINTS)p=new Ga(b,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&ly(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Pi(p,r),m.extensions&&ar(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&ar(s,u[0],r),u[0];let d=new pn;r.extensions&&ar(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Jt(uo.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Ei(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Pi(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){let r=s.pop(),a=s,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let d=new Ye;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ka(o,c)})}loadAnimation(e){let t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],g=s.samplers[f.sampler],b=f.target,m=b.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,_=s.parameters!==void 0?s.parameters[g.output]:g.output;b.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",_)),l.push(g),h.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],b=u[3],m=u[4],p=[];for(let T=0,x=d.length;T<x;T++){let v=d[T],M=f[T],A=g[T],y=b[T],E=m[T];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();let L=i._createAnimationTracks(v,M,A,y,E);if(L)for(let O=0;O<L.length;O++)p.push(L[O])}let _=new ja(r,void 0,p);return Pi(_,s),_})}createNodeMesh(e){let t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){let a=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){let t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,h=o.length;l<h;l++)a.push(i.getDependency("node",o[l]));let c=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,dy)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,g=u[0];h.pivot=new I().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new Hr:l.length>1?h=new pn:l.length===1?h=l[0]:h=new Ot,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Pi(h,r),r.extensions&&ar(i,h,r),r.matrix!==void 0){let u=new Ye;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],s=this,r=new pn;i.name&&(r.name=s.createUniqueName(i.name)),Pi(r,i),i.extensions&&ar(t,r,i);let a=i.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++){let d=c[h];d.parent!==null?r.add(Jp(d)):r.add(d)}let l=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof An||d instanceof Zt)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,i,s,r){let a=[],o=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}ws[r.path]===ws.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let h;switch(ws[r.path]){case ws.weights:h=$i;break;case ws.rotation:h=Yi;break;case ws.translation:case ws.scale:h=_s;break;default:i.itemSize===1?h=$i:h=_s;break}let u=s.interpolation!==void 0?ay[s.interpolation]:Ws,d=this._getArrayFromAccessor(i);for(let f=0,g=c.length;f<g;f++){let b=new h(c[f]+"."+ws[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(b),a.push(b)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=ud(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let s=this instanceof Yi?ld:Al;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function fy(n,e,t){let i=e.attributes,s=new yn;if(i.POSITION!==void 0){let o=t.json.accessors[i.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new I(c[0],c[1],c[2]),new I(l[0],l[1],l[2])),o.normalized){let h=ud(ha[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new I,c=new I;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let b=ud(ha[d.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}n.boundingBox=s;let a=new mn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=a}function nm(n,e,t){let i=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){n.setAttribute(o,c)})}for(let a in i){let o=hd[a]||a.toLowerCase();o in n.attributes||s.push(r(i[a],o))}if(e.indices!==void 0&&!n.index){let a=t.getDependency("accessor",e.indices).then(function(o){n.setIndex(o)});s.push(a)}return st.workingColorSpace!==vn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${st.workingColorSpace}" not supported.`),Pi(n,e),fy(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?cy(n,e.targets,t):n})}var sm=(function(){var n="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),i=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?o(e):o(n),r,a=WebAssembly.instantiate(s,{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var _=new Uint8Array(p.length),T=0;T<p.length;++T){var x=p.charCodeAt(T);_[T]=x>96?x-97:x>64?x-39:x+4}for(var v=0,T=0;T<p.length;++T)_[v++]=_[T]<60?i[_[T]]:(_[T]-60)*64+_[++T];return _.buffer.slice(0,v)}function c(p,_,T,x,v,M,A){var y=p.exports.sbrk,E=x+3&-4,L=y(E*v),O=y(M.length),U=new Uint8Array(p.exports.memory.buffer);U.set(M,O);var F=_(L,x,v,O,M.length);if(F==0&&A&&A(L,E,v),T.set(U.subarray(L,L+x*v)),y(L-y(0)),F!=0)throw new Error("Malformed buffer data: "+F)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(p){var _={object:new Worker(p),pending:0,requests:{}};return _.object.onmessage=function(T){var x=T.data;_.pending-=x.count,_.requests[x.id][x.action](x.value),delete _.requests[x.id]},_}function g(p){for(var _="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(s)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+m.name+";"+c.toString()+m.toString(),T=new Blob([_],{type:"text/javascript"}),x=URL.createObjectURL(T),v=u.length;v<p;++v)u[v]=f(x);for(var v=p;v<u.length;++v)u[v].object.postMessage({});u.length=p,URL.revokeObjectURL(x)}function b(p,_,T,x,v){for(var M=u[0],A=1;A<u.length;++A)u[A].pending<M.pending&&(M=u[A]);return new Promise(function(y,E){var L=new Uint8Array(T),O=++d;M.pending+=p,M.requests[O]={resolve:y,reject:E},M.object.postMessage({id:O,count:p,size:_,source:L,mode:x,filter:v},[L.buffer])})}function m(p){var _=p.data;self.ready.then(function(T){if(!_.id)return self.close();try{var x=new Uint8Array(_.count*_.size);c(T,T.exports[_.mode],x,_.count,_.size,_.source,T.exports[_.filter]),self.postMessage({id:_.id,count:_.count,action:"resolve",value:x},[x.buffer])}catch(v){self.postMessage({id:_.id,count:_.count,action:"reject",value:v})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,_,T,x,v){c(r,r.exports.meshopt_decodeVertexBuffer,p,_,T,x,r.exports[l[v]])},decodeIndexBuffer:function(p,_,T,x){c(r,r.exports.meshopt_decodeIndexBuffer,p,_,T,x)},decodeIndexSequence:function(p,_,T,x){c(r,r.exports.meshopt_decodeIndexSequence,p,_,T,x)},decodeGltfBuffer:function(p,_,T,x,v,M){c(r,r.exports[h[v]],p,_,T,x,r.exports[l[M]])},decodeGltfBufferAsync:function(p,_,T,x,v){return u.length>0?b(p,_,T,h[x],l[v]):a.then(function(){var M=new Uint8Array(p*_);return c(r,r.exports[h[x]],M,p,_,T,r.exports[l[v]]),M})}}})();var ua={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var mi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},py=new Ei(-1,1,1,-1,0,1),fd=class extends dt{constructor(){super(),this.setAttribute("position",new vt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new vt([0,2,0,0,2,0],2))}},my=new fd,da=class{constructor(e){this._mesh=new St(my,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,py)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var fa=class extends mi{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ut?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ir.clone(e.uniforms),this.material=new Ut({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new da(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var bo=class extends mi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},El=class extends mi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Rl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new Ae);this._width=i.width,this._height=i.height,t=new Bt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:jt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new fa(ua),this.copyPass.material.blending=Qn,this.timer=new Js}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}bo!==void 0&&(a instanceof bo?i=!0:a instanceof El&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ae);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Cl=class extends mi{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Be}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var rm={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Be(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var es=class n extends mi{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new Ae(e.x,e.y):new Ae(256,256),this.clearColor=new Be(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Bt(r,a,{type:jt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Bt(r,a,{type:jt,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new Bt(r,a,{type:jt,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=rm;this.highPassUniforms=ir.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ut({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ae(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ir.clone(ua.uniforms),this.blendMaterial=new Ut({uniforms:this.copyUniforms,vertexShader:ua.vertexShader,fragmentShader:ua.fragmentShader,premultipliedAlpha:!0,blending:no,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Be,this._oldClearAlpha=1,this._basic=new zt,this._fsQuad=new da(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ae(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(i*i))/i);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],c=a+1<e?t[a+1]:0,l=o+c;s.push((a*o+(a+1)*c)/l),r.push(l)}return new Ut({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Ae(.5,.5)},direction:{value:new Ae(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Ut({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};es.BlurDirectionX=new Ae(1,0);es.BlurDirectionY=new Ae(0,1);var Pl={light:{bg:"#E4DBD2",exposure:1.55,bloom:{strength:.2,radius:0,threshold:4},bloomFactors:[1,0,0,0,0],bloomKernel:4,gemExposure:.8,shadow:.35,roughness:.04,sky:[.35,.8,1],tint:[1,1,1],boxes:1,edge:.5,flags:2,flagSoft:.55,flagOpacity:.6,horizon:.4,horizonW:.07,spots:12,metalGlow:{strength:.4,threshold:3,radius:.5,factors:[1,.8,.5,.25,0]},paveGlint:{maxD:2,thrK:1.5,kernel:2,strength:.15},lights:[[50,50,2.8,[0,44,0]],[9,60,3.6,[-40,4,16]],[9,60,3.4,[40,4,4]],[70,8,3.2,[0,16,-40]],[28,32,3.2,[24,18,32]],[60,8,2.4,[0,-6,42]],[20,40,3,[-30,10,30]],[2.5,60,7,[-22,10,36]],[2.5,60,7,[30,8,-28]],[60,2.5,6,[0,-2,-44]],[2.5,50,6,[44,6,-6]]],metals:{vang:[1,.68,.27],"vang-trang":[.82,.82,.83],"vang-hong":[1,.62,.38]},metalDeep:{"vang-hong":2.6},metalDeepR:.4},dark:{bg:null,exposure:1,shadow:.8,roughness:.16,bloom:{strength:.27,radius:.05,threshold:30},sky:[.02,.22,.6],tint:[1,.95,.88],boxes:1,flags:1,spots:18,metals:{vang:[1,.71,.33],"vang-trang":[.86,.86,.85],"vang-hong":[.98,.64,.52]}}},dw=Pl.light.metals,_o=[1,.97,.93],am={sky:[.2,.32,.55],tint:[1,.99,.97],boxes:1.1,flags:1,spots:35,spotSize:1.1,spotPh:[.15,2.1],spotK:[30,30],lights:[[46,46,1.8,[0,44,0],_o],[12,60,5,[-40,4,16],_o],[12,60,4.2,[40,4,4],_o],[70,10,3,[0,16,-40],_o],[26,30,3.4,[24,18,32],_o],[60,8,1.6,[0,-6,42],[1,.94,.86]],[20,20,0,[0,40,0]]],ring:{n:24,w:3,h:34,k:4},panels:70,panelSize:4,panelK:[2.5,3]},pd={moissanite:{ior:2.65,disp:.052},"lab-diamond":{ior:2.417,disp:.0154},"natural-diamond":{ior:2.417,disp:.0154},sapphire:{ior:2.417,disp:.006,spark:1,reflK:.5,reflHi:1.5,absorb:[2.77,1.43,.215],gain:1.2},ruby:{ior:2.417,disp:.006,spark:1,reflK:.5,reflHi:1.5,absorb:[.044,5.8,2.07],gain:1},emerald:{ior:2.417,disp:.006,spark:1,reflK:.5,reflHi:1.5,absorb:[21.7,.96,1.77],gain:1.93},"yellow-sapphire":{ior:2.417,disp:.006,spark:.6,reflK:.5,reflHi:1.5,absorb:[.18,.46,26.2],gain:2.31},"moissanite-vang":{ior:2.417,disp:.006,spark:.6,reflK:.5,reflHi:1.5,absorb:[.18,.62,24],gain:2.3},"moissanite-xanh":{ior:2.417,disp:.006,spark:1,reflK:.5,reflHi:1.5,absorb:[24,3.3,4.4],gain:1.5}},gy={play:"T\u1EF1 xoay",pause:"D\u1EEBng xoay",reset:"V\u1EC1 g\xF3c nh\xECn ban \u0111\u1EA7u",zoomIn:"Ph\xF3ng to",zoomOut:"Thu nh\u1ECF",tilt:"Xoay ch\xE9o (th\u1EA5y c\u1EA3 m\u1EB7t tr\xEAn vi\xEAn \u0111\xE1)",tiltOff:"V\u1EC1 xoay ngang",full:"To\xE0n m\xE0n h\xECnh",exitFull:"Tho\xE1t to\xE0n m\xE0n h\xECnh",hint:"K\xE9o \u0111\u1EC3 xoay \xB7 Ch\u1EE5m ho\u1EB7c cu\u1ED9n \u0111\u1EC3 ph\xF3ng to",loading:"\u0110ang t\u1EA3i m\xF4 h\xECnh 3D",error:"Ch\u01B0a t\u1EA3i \u0111\u01B0\u1EE3c m\xF4 h\xECnh 3D. B\u1EA1n th\u1EED t\u1EA3i l\u1EA1i trang nh\xE9.",metal:"M\xE0u v\xE0ng",stage:"M\xF4 h\xECnh 3D \u2014 k\xE9o \u0111\u1EC3 xoay"},by={play:'<path d="M8 5.5v13l10.5-6.5z"/>',pause:'<path d="M8.5 5.5v13M15.5 5.5v13"/>',reset:'<path d="M4.5 12a7.5 7.5 0 1 0 2.2-5.3"/><path d="M4.5 4.5v4h4"/>',plus:'<path d="M12 5.5v13M5.5 12h13"/>',minus:'<path d="M5.5 12h13"/>',full:'<path d="M4.5 9V4.5H9M15 4.5h4.5V9M19.5 15v4.5H15M9 19.5H4.5V15"/>',tilt:'<path d="M3.5 15.5c2-5.5 9.5-10 16.5-9.5"/><path d="M17.4 3.8l2.8 2.2-2.3 2.6"/><path d="M20.5 8.5c-2 5.5-9.5 10-16.5 9.5"/><path d="M6.6 20.2 3.8 18l2.3-2.6"/><path d="M10.4 12 12 10.2 13.6 12 12 13.8z"/>',exit:'<path d="M9 4.5V9H4.5M19.5 9H15V4.5M15 19.5V15h4.5M4.5 15H9v4.5"/>'},As=n=>`<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${by[n]}</svg>`;function om(n=.35){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d"),i=t.createImageData(128,128);for(let s=0;s<128;s++)for(let r=0;r<128;r++){let a=Math.abs(r-63.5)/64,o=Math.abs(s-63.5)/64,c=Math.max(0,Math.min(1,(1-a)/n)*Math.min(1,(1-o)/n))**1.6,l=(s*128+r)*4;i.data[l]=i.data[l+1]=i.data[l+2]=255*c,i.data[l+3]=255}return t.putImageData(i,0,0),new gs(e)}function md(n){let e=new zr,t=50,[i,s,r]=n.sky,a=n.tint,o=new Ks(t,64,32),c=o.attributes.position,l=new Float32Array(c.count*3);for(let g=0;g<c.count;g++){let b=c.getY(g)/t,m=b<0?i+(s-i)*Math.pow(1+b,2.2):s+(r-s)*Math.pow(b,.7);n.horizon&&(m*=1-(1-n.horizon)*Math.exp(-(((b+.06)/(n.horizonW??.07))**2))),l.set([m*a[0],m*a[1],m*a[2]],g*3)}o.setAttribute("color",new gt(l,3)),e.add(new St(o,new zt({vertexColors:!0,side:an})));let h=om(n.edge??.35),u=(g,b,m,[p,_,T],x=[1,.97,.93],v=!0)=>{let M=m*n.boxes,A=new St(new ji(g,b),new zt({map:v?h:null,color:new Be(x[0]*M,x[1]*M,x[2]*M),side:Mn}));A.position.set(p,_,T),A.lookAt(0,0,0),e.add(A)};if(n.lights?n.lights.forEach(([g,b,m,p,_])=>u(g,b,m,p,_||[1,1,1],m>0)):(u(46,46,3.2,[0,44,0]),u(12,60,5,[-40,4,16]),u(12,60,4.2,[40,4,4]),u(70,10,3,[0,16,-40]),u(26,30,3.4,[24,18,32]),u(60,8,1.6,[0,-6,42],[1,.94,.86])),n.flags){let g=n.flagW||1,b=n.flagSoft?om(n.flagSoft):null,m=(p,_,[T,x,v])=>{if(!b)return u(p,_,0,[T,x,v],[0,0,0],!1);let M=new St(new ji(p,_),new zt({color:0,alphaMap:b,transparent:!0,opacity:n.flagOpacity??1,depthWrite:!1,side:Mn}));M.position.set(T,x,v),M.lookAt(0,0,0),M.renderOrder=2,e.add(M)};m(10*g,44,[-30,6,-32]),m(10*g,44,[33,6,-26]),m(14*g,40,[-6,4,44]),n.flags>1&&(m(8*g,50,[44,2,22]),m(8*g,50,[-44,2,-8]),m(60,7*g,[0,30,-30]))}let d=7,f=()=>(d=d*16807%2147483647)/2147483647;for(let g=0;g<n.spots;g++){let[b,m]=n.spotPh||[.2,1.35],p=f()*Math.PI*2,_=b+f()*(m-b);u(n.spotSize||1.6,n.spotSize||1.6,(n.spotK?.[0]??14)+f()*(n.spotK?.[1]??10),[Math.cos(p)*Math.sin(_)*36,Math.cos(_)*36,Math.sin(p)*Math.sin(_)*36])}if(n.ring){let{n:g,w:b,h:m,k:p,y:_=8,r:T=42}=n.ring;for(let x=0;x<g;x++){let v=(x+.5)/g*Math.PI*2;u(b,m,p,[Math.cos(v)*T,_,Math.sin(v)*T])}}for(let g=0;g<(n.panels||0);g++){let[b,m]=n.panelPh||[.1,1.9],p=f()*Math.PI*2,_=b+f()*(m-b),T=n.panelSize*(.6+f()*.8);u(T,T,n.panelK[0]+f()*n.panelK[1],[Math.cos(p)*Math.sin(_)*40,Math.cos(_)*40,Math.sin(p)*Math.sin(_)*40])}return e}var cm=180;function _y(n){let e=n.attributes.position,t=e.count/3;n.computeBoundingSphere();let i=n.boundingSphere.radius,s=new I,r=new I,a=new I,o=new I,c=.99995,l;for(let h=0;h<6;h++,c=1-(1-c)*3){l=[];for(let u=0;u<t;u++){s.fromBufferAttribute(e,u*3),r.fromBufferAttribute(e,u*3+1),a.fromBufferAttribute(e,u*3+2),o.subVectors(r,s).cross(a.clone().sub(s));let d=o.length();if(d<1e-9*i*i)continue;o.divideScalar(d);let f=o.dot(s);l.some(g=>g.x*o.x+g.y*o.y+g.z*o.z>c&&Math.abs(g.w-f)<.002*i)||l.push(new bt(o.x,o.y,o.z,f))}if(l=l.filter(u=>{for(let d=0;d<e.count;d++)if(u.x*e.getX(d)+u.y*e.getY(d)+u.z*e.getZ(d)-u.w>.004*i)return!1;return!0}),l.length<=cm)break}return l.slice(0,cm)}function xy(n,e,t,i=zn,s=1){return new Ut({side:i,defines:{NPLANES:e.length,BOUNCES:t.bounces,CHROMA:t.chroma},uniforms:{envMap:{value:n},planes:{value:e},nPlanes:{value:e.length},nBounces:{value:t.bounces},ior:{value:2.417},disp:{value:.044},gain:{value:1.35},ex:{value:1},lod:{value:1.25},absorb:{value:new I},gsize:{value:s},spark:{value:0},reflK:{value:1},reflHi:{value:0},pave:{value:0}},vertexShader:`
      varying vec3 vPos; varying vec3 vNrm; flat varying vec3 vCam; flat varying mat3 vRot;
      void main() {
        mat4 M = modelMatrix;
        #ifdef USE_INSTANCING
          M = M * instanceMatrix;
        #endif
        vPos = position; vNrm = normal;
        vCam = (inverse(M) * vec4(cameraPosition, 1.0)).xyz;
        mat3 R = mat3(M); vRot = mat3(normalize(R[0]), normalize(R[1]), normalize(R[2]));
        gl_Position = projectionMatrix * viewMatrix * M * vec4(position, 1.0);
      }`,fragmentShader:`
      uniform samplerCube envMap; uniform vec4 planes[NPLANES]; uniform int nPlanes; uniform int nBounces; uniform float ior; uniform float disp; uniform float gain; uniform float ex; uniform float lod;
      uniform vec3 absorb; uniform float gsize; uniform float spark; uniform float reflK; uniform float reflHi; uniform float pave;
      varying vec3 vPos; varying vec3 vNrm; flat varying vec3 vCam; flat varying mat3 vRot;

      // len: qu\xE3ng \u0111\u01B0\u1EDDng tia \u0111i b\xEAn trong vi\xEAn (\u0111\u1EC3 t\xEDnh m\xE0u c\u1EE7a \u0111\xE1 m\xE0u)
      vec3 traceExit(vec3 ro, vec3 V, vec3 N, float eta, out float len) {
        vec3 rd = refract(V, N, 1.0 / eta); len = 0.0;
        for (int b = 0; b < nBounces; b++) {        // gi\u1EDBi h\u1EA1n v\xF2ng l\u1EB7p l\xE0 uniform \u2192 tr\xECnh bi\xEAn d\u1ECBch kh\xF4ng tr\u1EA3i v\xF2ng l\u1EB7p ra (nhanh h\u01A1n nhi\u1EC1u)
          float tmin = 1e6; vec3 nh = -rd;
          for (int i = 0; i < nPlanes; i++) {
            vec4 pl = planes[i]; float dn = dot(rd, pl.xyz);
            if (dn > 1e-5) { float t = (pl.w - dot(ro, pl.xyz)) / dn; if (t > 1e-5 && t < tmin) { tmin = t; nh = pl.xyz; } }
          }
          ro += rd * tmin; len += min(tmin, gsize * 2.0);
          vec3 t = refract(rd, -nh, eta);
          if (dot(t, t) > 0.0) return t;               // tho\xE1t ra ngo\xE0i
          rd = reflect(rd, -nh);                        // ph\u1EA3n x\u1EA1 to\xE0n ph\u1EA7n
        }
        return rd;
      }

      void main() {
        vec3 V = normalize(vPos - vCam);
        vec3 N = normalize(vNrm);
        float cosi = clamp(dot(-V, N), 0.0, 1.0);
        float f0 = pow((ior - 1.0) / (ior + 1.0), 2.0);
        float F = f0 + (1.0 - f0) * pow(1.0 - cosi, 5.0);
        vec3 refl = textureLod(envMap, vRot * reflect(V, N), 0.5).rgb;
        vec3 c;
        vec3 len;
        #if CHROMA == 3
          c.r = textureLod(envMap, vRot * traceExit(vPos, V, N, ior - disp * 0.5, len.r), lod).r;
          c.g = textureLod(envMap, vRot * traceExit(vPos, V, N, ior, len.g), lod).g;
          c.b = textureLod(envMap, vRot * traceExit(vPos, V, N, ior + disp * 0.5, len.b), lod).b;
        #else
          vec3 d = vRot * traceExit(vPos, V, N, ior, len.g); len = vec3(len.g);
          c = vec3(textureLod(envMap, d + vec3(disp) * 0.6, lod).r, textureLod(envMap, d, lod).g, textureLod(envMap, d - vec3(disp) * 0.6, lod).b);
        #endif
        vec3 sp = vec3(0.0);
        if (absorb.r + absorb.g + absorb.b > 0.0) { // \u0111\xE1 m\xE0u: h\u1EA5p th\u1EE5 theo qu\xE3ng \u0111\u01B0\u1EDDng trong vi\xEAn
          vec3 tr = exp(-absorb * len / gsize);
          // tia l\u1EA5p l\xE1nh: ph\u1EA7n \xE1nh s\xE1ng v\u01B0\u1EE3t m\u1EE9c h\u1ED9p \u0111\xE8n (ch\u1EC9 \u0111\u1ED1m s\xE1ng) \u0111i qua g\u1EA7n nh\u01B0 nguy\xEAn v\u1EB9n, m\u1EA1nh ngang kim c\u01B0\u01A1ng (kh\xF4ng theo \u0111\u1ED9 s\xE1ng th\xE2n \u0111\xE1)
          sp = max(c - 8.0, 0.0) * (1.0 - tr) * spark * 1.35; c *= tr;
        }
        // reflHi: ph\u1EA7n ph\u1EA3n chi\u1EBFu s\xE1ng h\u01A1n m\u1EE9c tr\u1EDDi (h\u1ED9p \u0111\xE8n) \u0111\u01B0\u1EE3c t\u0103ng th\xEAm \u2192 m\u1EB7t gi\xE1c l\xF3e tr\u1EAFng r\xF5 nh\u01B0 khung tham kh\u1EA3o; tr\u1EDDi x\xE1m kh\xF4ng b\u1ECB ph\u1EE7 th\xEAm
        gl_FragColor = vec4((mix(c * gain + sp, refl * reflK, F) + F * reflHi * max(refl - 1.0, 0.0)) * ex, pave > 2.5 ? 4.0 : pave > 0.5 && pave < 1.5 ? 2.0 : 3.0); // b\u1EADt look.sideGlint: vi\xEAn ch\u1EE7 alpha 4 (cao nh\u1EA5t \u2192 m\xE9p c\xE1c vi\xEAn kh\xE1c kh\xF4ng l\u1ECDt sang l\u1EDBp qu\u1EA7ng vi\xEAn ch\u1EE7), vi\xEAn l\u1EDBn kh\xE1c alpha 3. ex: b\xF9 \u0111\u1ED9 s\xE1ng chung \u0111\u1EC3 \u0111\xE1 qu\xFD kh\xF4ng ch\xE1y tr\u1EAFng; alpha > 1 = d\u1EA5u \u201C\u0111\xE1 qu\xFD\u201D cho qu\u1EA7ng s\xE1ng (3: vi\xEAn l\u1EDBn, 2: \u0111\xE1 t\u1EA5m)
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`})}function vy(n){let e=n.attributes.position,t=n.index,i=t?t.count:e.count,s=new Float32Array(i*3),r=new I;for(let c=0;c<i;c++)r.fromBufferAttribute(e,t?t.getX(c):c),s.set([r.x,r.y,r.z],c*3);let a=0;for(let c=0;c<s.length;c+=9)a+=s[c]*(s[c+4]*s[c+8]-s[c+5]*s[c+7])-s[c+1]*(s[c+3]*s[c+8]-s[c+5]*s[c+6])+s[c+2]*(s[c+3]*s[c+7]-s[c+4]*s[c+6]);if(a<0)for(let c=0;c<s.length;c+=9)for(let l=0;l<3;l++){let h=s[c+3+l];s[c+3+l]=s[c+6+l],s[c+6+l]=h}let o=new dt;return o.setAttribute("position",new gt(s,3)),o.computeVertexNormals(),o}function yy(){let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(0,0,0,0.85)"),t.addColorStop(.45,"rgba(0,0,0,0.35)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),new gs(n)}function lm(n,e={}){let t={...gy,...e.labels||{}},i=e.metals||Object.keys(Pl.light.metals),s=e.swatches||{vang:"#D9B35E","vang-trang":"#E4E2DC","vang-hong":"#D9A08A"},r=e.metalNames||{vang:"V\xE0ng","vang-trang":"V\xE0ng tr\u1EAFng","vang-hong":"V\xE0ng h\u1ED3ng"},a=Pl[e.theme]?e.theme:"light",o={...Pl[a],...e.look||{}},c=Math.min(devicePixelRatio||1,2),l=Math.min(c,e.minPR??((devicePixelRatio||1)>=2?1.5:1)),h=c;n.classList.add("tg3d",`tg3d-${a}`),n.innerHTML=`
    <div class="tg3d-canvas" role="img" aria-label="${t.stage}"></div>
    <div class="tg3d-load" data-load><span>${t.loading}</span><i><b data-bar></b></i></div>
    <p class="tg3d-hint" data-hint>${t.hint}</p>
    <div class="tg3d-tools" role="toolbar" aria-label="3D">
      <button type="button" data-act="play" aria-pressed="true" title="${t.pause}" aria-label="${t.pause}">${As("pause")}</button>
      <button type="button" data-act="tilt" aria-pressed="false" title="${t.tilt}" aria-label="${t.tilt}">${As("tilt")}</button>
      <button type="button" data-act="reset" title="${t.reset}" aria-label="${t.reset}">${As("reset")}</button>
      <button type="button" data-act="in" title="${t.zoomIn}" aria-label="${t.zoomIn}">${As("plus")}</button>
      <button type="button" data-act="out" title="${t.zoomOut}" aria-label="${t.zoomOut}">${As("minus")}</button>
      <button type="button" data-act="full" title="${t.full}" aria-label="${t.full}">${As("full")}</button>
    </div>
    <div class="tg3d-sw" role="radiogroup" aria-label="${t.metal}">${i.map(oe=>`<button type="button" role="radio" data-metal="${oe}" aria-checked="false" title="${r[oe]}" aria-label="${r[oe]}"><i style="background:${s[oe]}"></i></button>`).join("")}</div>`;let u=oe=>n.querySelector(oe),d=u(".tg3d-canvas"),f=new xl({antialias:!0,alpha:!0,powerPreference:"high-performance"});f.setPixelRatio(h),f.outputColorSpace=Ht,f.toneMapping=Gn,d.appendChild(f.domElement);let g=new zr,b=new Jt(28,1,.5,2e3),m=new Rl(f,new Bt(1,1,{type:jt,samples:4}));m.setPixelRatio(h),m.addPass(new Cl(g,b));let p=new es(new Ae(256,256),.5,.35,4);Object.assign(p.blendMaterial,{blending:Zs,blendEquation:ei,blendSrc:Sn,blendDst:Sn,blendSrcAlpha:Qs,blendDstAlpha:Sn}),p.materialHighPassFilter.fragmentShader=`
    uniform sampler2D tDiffuse; uniform float luminosityThreshold; uniform float smoothWidth; uniform float metalBloom; uniform float metalThr; uniform float paveOn; uniform float sideOn; varying vec2 vUv;
    void main() {
      vec4 t = texture2D(tDiffuse, vUv); vec3 c = t.rgb;
      float peak = max(c.r, max(c.g, c.b));
      float aGem = smoothstep(luminosityThreshold, luminosityThreshold + max(smoothWidth, luminosityThreshold * 0.5), peak);
      // kim lo\u1EA1i: ch\u1EC9 ch\u1EA5m \u0111\xE8n nh\u1ECF r\u1EA5t s\xE1ng (v\u01B0\u1EE3t metalThr, cao h\u01A1n m\u1ECDi h\u1ED9p \u0111\xE8n l\u1EDBn) m\u1EDBi ph\xE1t qu\u1EA7ng, m\u1EE9c metalBloom
      float aMetal = metalBloom * smoothstep(metalThr, metalThr * 1.6, peak);
      float big = sideOn > 0.5 ? clamp(t.a - 3.0, 0.0, 1.0) : mix(1.0, clamp(t.a - 2.0, 0.0, 1.0), paveOn); // \u0111\xE1 t\u1EA5m (alpha 2) \u0111i l\u1EDBp qu\u1EA7ng ri\xEAng; b\u1EADt sideGlint: l\u1EDBp n\xE0y ch\u1EC9 c\xF2n vi\xEAn ch\u1EE7 (alpha 4)
      float a = mix(aMetal, aGem * big, clamp(t.a - 1.0, 0.0, 1.0));
      vec3 w = mix(c, vec3(peak), 0.8);
      gl_FragColor = vec4(min(w, vec3(luminosityThreshold * 3.0)) * a, 1.0);
    }`,p.materialHighPassFilter.uniforms.metalBloom={value:0},p.materialHighPassFilter.uniforms.metalThr={value:12},p.materialHighPassFilter.uniforms.paveOn={value:0},p.materialHighPassFilter.uniforms.sideOn={value:0},p.materialHighPassFilter.needsUpdate=!0,p.compositeMaterial.uniforms.bloomFactors.value=[1,.4,.12,.03,0],m.addPass(p);let _=new es(new Ae(256,256),0,0,4);Object.assign(_.blendMaterial,{blending:Zs,blendEquation:ei,blendSrc:Sn,blendDst:Sn,blendSrcAlpha:Qs,blendDstAlpha:Sn}),_.materialHighPassFilter.fragmentShader=`
    uniform sampler2D tDiffuse; uniform float luminosityThreshold; uniform float smoothWidth; uniform float capT; varying vec2 vUv;
    void main() {
      vec4 t = texture2D(tDiffuse, vUv); vec3 c = t.rgb;
      float peak = max(c.r, max(c.g, c.b));
      float small = clamp(t.a - 1.0, 0.0, 1.0) * (1.0 - clamp(t.a - 2.0, 0.0, 1.0));
      float a = small * smoothstep(luminosityThreshold, luminosityThreshold + max(smoothWidth, luminosityThreshold * 0.5), peak);
      vec3 w = mix(c, vec3(peak), 0.8);
      gl_FragColor = vec4(min(w, vec3(capT)) * a, 1.0);
    }`,_.materialHighPassFilter.uniforms.capT={value:12},_.materialHighPassFilter.needsUpdate=!0,_.compositeMaterial.uniforms.bloomFactors.value=[1,0,0,0,0],_.nMips=1,_.enabled=!1,m.addPass(_);let T=new es(new Ae(256,256),0,0,4);Object.assign(T.blendMaterial,{blending:Zs,blendEquation:ei,blendSrc:Sn,blendDst:Sn,blendSrcAlpha:Qs,blendDstAlpha:Sn}),T.materialHighPassFilter.fragmentShader=`
    uniform sampler2D tDiffuse; uniform float luminosityThreshold; uniform float smoothWidth; uniform float capT; varying vec2 vUv;
    void main() {
      vec4 t = texture2D(tDiffuse, vUv); vec3 c = t.rgb;
      float peak = max(c.r, max(c.g, c.b));
      float a = clamp(t.a - 2.0, 0.0, 1.0) * (1.0 - clamp(t.a - 3.0, 0.0, 1.0)) * smoothstep(luminosityThreshold, luminosityThreshold + max(smoothWidth, luminosityThreshold * 0.5), peak);
      vec3 w = mix(c, vec3(peak), 0.8);
      gl_FragColor = vec4(min(w, vec3(capT)) * a, 1.0);
    }`,T.materialHighPassFilter.uniforms.capT={value:12},T.materialHighPassFilter.needsUpdate=!0,T.compositeMaterial.uniforms.bloomFactors.value=[1,0,0,0,0],T.nMips=1,T.enabled=!1,m.addPass(T);let x=new es(new Ae(256,256),0,.5,6);Object.assign(x.blendMaterial,{blending:Zs,blendEquation:ei,blendSrc:Sn,blendDst:Sn,blendSrcAlpha:Qs,blendDstAlpha:Sn}),x.materialHighPassFilter.fragmentShader=`
    uniform sampler2D tDiffuse; uniform float luminosityThreshold; uniform float smoothWidth; varying vec2 vUv;
    void main() {
      vec4 t = texture2D(tDiffuse, vUv); vec3 c = t.rgb;
      float peak = max(c.r, max(c.g, c.b));
      float isMetal = step(0.5, t.a) * (1.0 - clamp(t.a - 1.0, 0.0, 1.0));
      float a = isMetal * smoothstep(luminosityThreshold, luminosityThreshold * 1.8, peak);
      gl_FragColor = vec4(min(c, vec3(luminosityThreshold * 2.5)) * a, 1.0); // gi\u1EEF m\xE0u v\xE0ng trong qu\u1EA7ng
    }`,x.materialHighPassFilter.needsUpdate=!0,x.enabled=!1,x.blendMaterial.colorWrite=!1,m.addPass(x);let v=new fa(new Ut({uniforms:{tDiffuse:{value:null},exposure:{value:1},tGlow:{value:null},glowK:{value:0}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform sampler2D tDiffuse; uniform float exposure; uniform sampler2D tGlow; uniform float glowK; varying vec2 vUv;
      vec3 neutral(vec3 color) { // Khronos PBR Neutral \u2014 gi\u1EEF \u0111\xFAng s\u1EAFc m\xE0u v\xE0ng
        const float start = 0.76; const float desat = 0.15;
        float x = min(color.r, min(color.g, color.b));
        color -= x < 0.08 ? x - 6.25 * x * x : 0.04;
        float peak = max(color.r, max(color.g, color.b));
        if (peak < start) return color;
        float d = 1.0 - start; float np = 1.0 - d * d / (peak + d - start);
        color *= np / peak;
        return mix(color, vec3(np), 1.0 - 1.0 / (desat * (peak - np) + 1.0));
      }
      vec3 srgb(vec3 c) { return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c)); }
      void main() {
        vec4 t = texture2D(tDiffuse, vUv);
        if (glowK > 0.0) { float metal = smoothstep(0.3, 0.9, t.a) * (1.0 - clamp(t.a - 1.0, 0.0, 1.0)); t.rgb += texture2D(tGlow, vUv).rgb * metal * glowK; } // qu\u1EA7ng v\xE0ng ch\u1EC9 trong th\xE2n nh\u1EABn
        vec3 c = clamp(neutral(max(t.rgb, 0.0) * exposure), 0.0, 1.0);
        float a = max(t.a, max(c.r, max(c.g, c.b))); // v\xF9ng qu\u1EA7ng tr\xEAn n\u1EC1n: ho\xE0 ki\u1EC3u "screen"
        gl_FragColor = vec4(srgb(c), clamp(a, 0.0, 1.0));
      }`}));m.addPass(v),v.uniforms.tGlow.value=x.renderTargetsHorizontal[0].texture;let M=()=>m.render(),A=[],y=new gn({metalness:1,roughness:.16,envMapIntensity:1}),E={deep:{value:0},deepR:{value:.6}},L=0,O=oe=>_e=>{Object.assign(_e.uniforms,oe),_e.fragmentShader=_e.fragmentShader.replace("#include <common>",`#include <common>
uniform float deep; uniform float deepR;`).replace("#include <opaque_fragment>",`
      if (deep > 0.0) {
        float lum = dot(outgoingLight, vec3(0.2126, 0.7152, 0.0722));
        vec3 cn = diffuseColor.rgb / max(max(diffuseColor.r, diffuseColor.g), max(diffuseColor.b, 1e-4));
        outgoingLight *= pow(cn, vec3(deep * (1.0 - smoothstep(0.0, deepR, lum))));
      }
      #include <opaque_fragment>`)};y.onBeforeCompile=O(E);let U=new Be,F={deep:{value:0},deepR:{value:.6}},D=new Map,k=oe=>{let _e=oe.userData.fin;oe.roughness=Math.max(y.roughness,{satin:o.satinRough??.34,brush:o.brushRough??.2}[_e]??0),oe.envMapIntensity={satin:o.satinEnv??1,brush:o.brushEnv??1}[_e]??1,oe.clearcoat=y.clearcoat};function V(oe){let _e=/:satin/.test(oe)?"satin":/:brush/.test(oe)?"brush":"",Xe=/:alt/.test(oe),mt=/:shade/.test(oe);if(!_e&&!Xe&&!mt)return y;let rt=`${_e}|${Xe}|${mt}`;if(!D.has(rt)){let qe=y.clone();qe.color=Xe?U:y.color;let at=Xe?O(F):y.onBeforeCompile;qe.onBeforeCompile=at,mt&&(qe.onBeforeCompile=ht=>{at(ht),ht.fragmentShader=ht.fragmentShader.replace("#include <opaque_fragment>",`outgoingLight *= ${(o.shade??.22).toFixed(3)};
#include <opaque_fragment>`)},qe.customProgramCacheKey=()=>`shade|${Xe}`),qe.userData.fin=_e,k(qe),D.set(rt,qe)}return D.get(rt)}let N=[],K=oe=>{y.onBeforeCompile(oe),oe.fragmentShader=oe.fragmentShader.replace("#include <opaque_fragment>",`outgoingLight *= 0.17;
#include <opaque_fragment>`)};function P(oe){let _e=y.clone();return _e.color=y.color,_e.onBeforeCompile=K,_e.customProgramCacheKey=()=>"engrave",Object.assign(_e,{roughness:.85,alphaMap:oe||null,bumpMap:oe||null,bumpScale:-6,transparent:!0,alphaTest:.04,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),N.push(_e),_e}let H=new ca(f),X=new rr(512,{type:jt,generateMipmaps:!0,minFilter:Rn}),he=null,J=oe=>(he&&oe!=="center"?he:X).texture,se=null,ie=null,pe=oe=>{oe.uniforms.pave.value=oe.userData.small&&o.paveGlint?.strength>0?1:o.sideGlint?.strength>0?oe.userData.role!=="center"?2:3:0,oe.uniforms.envMap.value=J(oe.userData.role),oe.uniforms.ex.value=(o.gemExposure??1)/o.exposure,oe.uniforms.gain.value=(o.gemGain??1.35)*(pd[Qe[oe.userData.role||"center"]]?.gain??1),oe.uniforms.lod.value=o.gemLod??.7};function q(){let oe=md(o);se?.dispose(),se=H.fromScene(oe,o.envSoft??0),g.environment=se.texture;let _e=md({...am,...o.gemStudio||{}});new Ys(.1,200,X).update(f,_e);let Xe=null;o.gemStudioRest?(he||(he=new rr(512,{type:jt,generateMipmaps:!0,minFilter:Rn})),Xe=md({...am,...o.gemStudio||{},...o.gemStudioRest}),new Ys(.1,200,he).update(f,Xe)):he&&(he.dispose(),he=null);for(let at of[oe,_e,Xe].filter(Boolean))at.traverse(ht=>{ht.geometry?.dispose(),ht.material?.map?.dispose(),ht.material?.dispose()});v.uniforms.exposure.value=o.exposure,y.roughness=o.roughness??.16,y.clearcoat=o.clearcoat??0,y.clearcoatRoughness=o.clearcoatRoughness??.03;for(let at of D.values())k(at);ie&&(ie.opacity=o.shadow),Object.assign(p,{strength:o.bloom?.strength??0,radius:o.bloom?.radius??.1,threshold:o.bloom?.threshold??30});let mt=o.metalGlow;if(x.enabled=!!(mt&&mt.strength>0),v.uniforms.glowK.value=x.enabled?1:0,mt&&(Object.assign(x,{strength:mt.strength,radius:mt.radius??.5,threshold:mt.threshold??4}),mt.factors&&(x.compositeMaterial.uniforms.bloomFactors.value=mt.factors)),p.materialHighPassFilter.uniforms.metalBloom.value=o.metalBloom??0,p.materialHighPassFilter.uniforms.metalThr.value=o.metalThr??12,o.bloomFactors&&(p.compositeMaterial.uniforms.bloomFactors.value=o.bloomFactors),p.enabled=p.strength>0,p.nMips=p.compositeMaterial.uniforms.bloomFactors.value.slice(1).every(at=>!at)?1:5,o.bloomKernel&&p._k0!==o.bloomKernel){let at=p.separableBlurMaterials[0],ht=p._getSeparableBlurMaterial(o.bloomKernel);ht.uniforms.invSize.value.copy(at.uniforms.invSize.value),p.separableBlurMaterials[0]=ht,at.dispose(),p._k0=o.bloomKernel}let rt=o.paveGlint;if(_.enabled=!!(rt&&rt.strength>0&&p.enabled),p.materialHighPassFilter.uniforms.paveOn.value=_.enabled?1:0,rt){Object.assign(_,{strength:rt.strength,radius:0,threshold:p.threshold*(rt.thrK??1)}),_.materialHighPassFilter.uniforms.capT.value=p.threshold*3;let at=rt.kernel??o.bloomKernel??6;if(_._k0!==at){let ht=_.separableBlurMaterials[0],Fn=_._getSeparableBlurMaterial(at);Fn.uniforms.invSize.value.copy(ht.uniforms.invSize.value),_.separableBlurMaterials[0]=Fn,ht.dispose(),_._k0=at}}let qe=o.sideGlint;if(T.enabled=!!(qe&&qe.strength>0&&p.enabled),p.materialHighPassFilter.uniforms.sideOn.value=T.enabled?1:0,qe){Object.assign(T,{strength:qe.strength,radius:0,threshold:p.threshold*(qe.thrK??1)}),T.materialHighPassFilter.uniforms.capT.value=p.threshold*3;let at=qe.kernel??o.bloomKernel??6;if(T._k0!==at){let ht=T.separableBlurMaterials[0],Fn=T._getSeparableBlurMaterial(at);Fn.uniforms.invSize.value.copy(ht.uniforms.invSize.value),T.separableBlurMaterials[0]=Fn,ht.dispose(),T._k0=at}}for(let at of A)pe(at)}q();let R=new Be,W=new pn;g.add(W);let te=new Sl(b,f.domElement);Object.assign(te,{enableDamping:!0,dampingFactor:.08,enablePan:!1,rotateSpeed:.8,zoomSpeed:.8,autoRotate:!0,autoRotateSpeed:1.4});let ue=()=>{f.domElement.style.touchAction=e.touchAll||n.classList.contains("is-full")||document.fullscreenElement===n?"none":"pan-y"};ue();let le=null,fe=!0,me=0,Re=!0,Ie=!1,ze=!1,Qe={center:e.gem||"lab-diamond",accent:e.accentGem||e.gem||"lab-diamond",side:e.sideGem||e.accentGem||e.gem||"lab-diamond",inner:e.innerGem||"ruby"},tt=new Js,Pt=null;function ct(oe,{keepView:_e=!1}={}){for(let We of[...W.children])W.remove(We),We.traverse?.(Ft=>{Ft.isInstancedMesh||Ft===Pt?(Ft.geometry?.dispose(),Ft.material!==y&&Ft.material?.dispose?.()):Ft.isMesh&&Ft.userData.ownGeo&&Ft.geometry?.dispose()});A.length=0;for(let We of N.splice(0))We.alphaMap?.dispose(),We.dispose();oe.traverse(We=>{We.name&&We.name.includes("~")&&(We.name=We.name.replace(/~/g,":"))}),oe.updateMatrixWorld(!0);let Xe=new Map;oe.traverse(We=>{We.isMesh&&(/gem|diamond|stone/i.test(`${We.name} ${We.material?.name}`)?(Xe.has(We.geometry)||Xe.set(We.geometry,[]),Xe.get(We.geometry).push(We)):We.material=/engrave/.test(We.name)?P(We.userData.alphaMap):V(We.name))});let mt=new yn().setFromObject(oe);for(let[We,Ft]of Xe){Ft.forEach(ee=>ee.parent.remove(ee));let Fi=/gem:accent/i.test(Ft[0].name)?"accent":/gem:side/i.test(Ft[0].name)?"side":/gem:inner/i.test(Ft[0].name)?"inner":"center",vi=vy(We),Eo=_y(vi),w=vi.boundingSphere.radius*2,B=ee=>w*ee.matrixWorld.getMaxScaleOnAxis()<=(o.paveGlint?.maxD??0);for(let ee of[!1,!0])for(let Y of[!1,!0]){let $=Ft.filter(Te=>Te.matrixWorld.determinant()<0===ee&&B(Te)===Y);if(!$.length)continue;let we=xy(J(Fi),Eo,{bounces:6,chroma:3},ee?an:zn,w);we.userData.role=Fi,we.userData.small=Y;let Pe=new Xs(vi,we,$.length);$.forEach((Te,De)=>Pe.setMatrixAt(De,Te.matrixWorld)),Pe.renderOrder=1,Pe.computeBoundingSphere(),Pe.computeBoundingBox(),mt.union(Pe.boundingBox),W.add(Pe),A.push(we)}}W.add(oe);let rt=mt.getSize(new I),qe=mt.getCenter(new I);Pt=new St(new ji(rt.x*1.5,Math.max(rt.z,rt.x*.5)*1.6),ie=new zt({map:yy(),transparent:!0,depthWrite:!1,opacity:o.shadow})),Pt.rotation.x=-Math.PI/2,Pt.position.set(qe.x,mt.min.y-.02,qe.z),W.add(Pt);let at=mt.getBoundingSphere(new mn),ht=b.fov*Math.PI/360,Fn=n.clientWidth&&n.clientHeight?n.clientWidth/n.clientHeight:b.aspect,Ni=e.fitWidth?Math.min(ht,Math.atan(Math.tan(ht)*Fn)):ht,Un=at.radius/Math.sin(Ni)*(e.fit||1.08),ai=new I(...e.view||[.62,.32,1]).normalize(),Us=!le,Os=le?.dist0;if(le={target:at.center.clone(),pos:at.center.clone().addScaledVector(ai,Un*(e.start??1.33)),theta0:Math.atan2(ai.x,ai.z),dist0:Os},Us||!_e)te.target.copy(le.target),b.position.copy(le.pos);else{let We=b.position.clone().sub(te.target);e.rescale&&le.dist0&&We.multiplyScalar(Un/le.dist0),te.target.copy(le.target),b.position.copy(le.target).add(We)}le.dist0=Un,te.minDistance=Un*.3,te.maxDistance=Un*2.2,b.near=Un/50,b.far=Un*20,b.updateProjectionMatrix(),Oe(Ee||e.metal||i[0],!0),Ne(),Us&&(u("[data-load]").hidden=!0,n.classList.add("is-ready")),be(),M()}e.object?requestAnimationFrame(()=>ct(e.object)):new Tl().setMeshoptDecoder(sm).load(e.src,_e=>ct(_e.scene),_e=>{_e.total&&(u("[data-bar]").style.width=`${Math.round(_e.loaded/_e.total*100)}%`)},()=>{u("[data-load]").innerHTML=`<span>${t.error}</span>`});let Lt=0,G=0,Dt=c;function ft(oe){if(ze)return;tt.update(oe);let _e=Math.min(tt.getDelta(),.1),Xe=fe&&performance.now()>=me;te.autoRotate=Xe&&!C,Xe&&C&&!ne&&re(_e);let mt=te.update(_e),rt=!y.color.equals(R)||E.deep.value!==L;if(rt){let ht=Math.min(1,_e*8);y.color.lerp(R,ht),E.deep.value+=(L-E.deep.value)*ht,Math.abs(y.color.r-R.r)+Math.abs(y.color.g-R.g)+Math.abs(y.color.b-R.b)<.002&&(y.color.copy(R),E.deep.value=L)}ce(_e);let qe=mt||Xe||rt||ne;if(qe&&(h!==Dt&&ge(Dt),Lt+=_e,G++,G>=20)){let ht=Lt/G;Lt=G=0,ht>1/28&&Dt>l?ge(Dt=Math.max(l,Dt-.25)):ht<1/50&&Dt<c&&ge(Dt=Math.min(c,Dt+.25))}let at=Re&&!document.hidden&&(qe||performance.now()<me);!at&&h<c&&ge(c),M(),at?requestAnimationFrame(ft):Ie=!1}let C=!!e.tilt,S=new xs,j=new I,Q={mid:37.5,amp:27.5,phase:125};function re(oe){j.copy(b.position).sub(te.target),S.setFromVector3(j),S.theta-=2*Math.PI/60*te.autoRotateSpeed*oe;let _e=Q.mid+Q.amp*Math.sin(S.theta-le.theta0-Q.phase*Math.PI/180);S.phi+=(Math.PI/2-_e*Math.PI/180-S.phi)*Math.min(1,oe*.8),b.position.copy(te.target).add(j.setFromSpherical(S)),b.lookAt(te.target)}function ge(oe){h=Math.max(l,Math.min(c,oe)),f.setPixelRatio(h),m.setPixelRatio(h),Lt=G=0}function be(){!Ie&&le&&(Ie=!0,tt.reset(),requestAnimationFrame(ft))}let ne=null;function ce(oe){if(!ne)return;ne.t=Math.min(1,ne.t+oe/ne.d);let _e=1-Math.pow(1-ne.t,3);b.position.lerpVectors(ne.p0,ne.p1,_e),te.target.lerpVectors(ne.t0,ne.t1,_e),ne.t>=1&&(ne=null)}let ye=(oe,_e,Xe=.6)=>{ne={t:0,d:Xe,p0:b.position.clone(),p1:oe,t0:te.target.clone(),t1:_e},be()},ke=oe=>{let _e=b.position.clone().sub(te.target),Xe=Math.min(te.maxDistance,Math.max(te.minDistance,_e.length()*oe));ye(te.target.clone().add(_e.setLength(Xe)),te.target.clone(),.35)};if(te.addEventListener("start",()=>{me=1/0,ne=null,u("[data-hint]").classList.add("off"),be()}),e.holdPan){let oe=e.holdMs??3e3,_e=8,Xe=f.domElement,mt=Xe.ownerDocument,rt=document.createElement("div");rt.className="tg3d-hold",rt.style.setProperty("--hold",`${oe-250}ms`),rt.innerHTML=`<svg viewBox="0 0 44 44" aria-hidden="true"><circle cx="22" cy="22" r="18"/><circle class="p" cx="22" cy="22" r="18"/><path class="mv" d="M22 13v18M13 22h18M22 13l-3 3M22 13l3 3M22 31l-3-3M22 31l3-3M13 22l3-3M13 22l3 3M31 22l-3-3M31 22l-3 3"/></svg><span>${t.pan||"K\xE9o \u0111\u1EC3 d\u1ECBch khung"}</span>`,n.appendChild(rt);let qe=null,at=!1,ht=new Set,Fn=new I,Ni=new I,Un=()=>{rt.classList.remove("show","fill","on"),n.classList.remove("is-pan")},ai=()=>{qe&&(clearTimeout(qe.t0),clearTimeout(qe.t1),qe=null),at||Un()},Us=(We,Ft)=>{let Fi=2*b.position.distanceTo(te.target)*Math.tan(b.fov*Math.PI/360)/Xe.clientHeight;Fn.setFromMatrixColumn(b.matrix,0),Ni.setFromMatrixColumn(b.matrix,1);let vi=Fn.multiplyScalar(-We*Fi).addScaledVector(Ni,Ft*Fi);b.position.add(vi),te.target.add(vi),M()};Xe.addEventListener("pointerdown",We=>{if(ht.add(We.pointerId),ht.size>1){ai();return}let Ft=n.getBoundingClientRect(),Fi=We.clientX-Ft.left,vi=We.clientY-Ft.top;qe={id:We.pointerId,x:We.clientX,y:We.clientY,lx:We.clientX,ly:We.clientY},rt.style.left=`${Fi}px`,rt.style.top=`${vi}px`,qe.t0=setTimeout(()=>{rt.classList.add("show"),requestAnimationFrame(()=>rt.classList.add("fill"))},250),qe.t1=setTimeout(()=>{qe&&(at=!0,te.enabled=!1,rt.classList.add("on"),n.classList.add("is-pan"),navigator.vibrate?.(15))},oe)}),mt.addEventListener("pointermove",We=>{if(!(!qe||We.pointerId!==qe.id)){if(at){Us(We.clientX-qe.lx,We.clientY-qe.ly),qe.lx=We.clientX,qe.ly=We.clientY;let Ft=n.getBoundingClientRect();rt.style.left=`${We.clientX-Ft.left}px`,rt.style.top=`${We.clientY-Ft.top}px`;return}Math.hypot(We.clientX-qe.x,We.clientY-qe.y)>_e&&ai()}});let Os=We=>{ht.delete(We.pointerId),!(!qe||We.pointerId!==qe.id)&&(clearTimeout(qe.t0),clearTimeout(qe.t1),qe=null,at&&(at=!1,te.enabled=!0),Un())};mt.addEventListener("pointerup",Os),mt.addEventListener("pointercancel",Os)}te.addEventListener("end",()=>{me=performance.now()+2500,be()}),te.addEventListener("change",be);let Me=u('[data-act="play"]'),xe=u('[data-act="tilt"]'),Ue=oe=>{C=oe,xe.setAttribute("aria-pressed",oe),xe.title=oe?t.tiltOff:t.tilt,xe.setAttribute("aria-label",xe.title),oe&&!fe&&He(!0),be()},He=oe=>{fe=oe,me=0,Me.setAttribute("aria-pressed",oe),Me.innerHTML=As(oe?"pause":"play"),Me.title=oe?t.pause:t.play,Me.setAttribute("aria-label",Me.title),be()};Ue(C),n.addEventListener("click",oe=>{let _e=oe.target.closest("button");if(!_e)return;let Xe=_e.dataset.act;Xe==="play"?He(!fe):Xe==="tilt"?Ue(!C):Xe==="reset"&&le?ye(le.pos.clone(),le.target.clone(),.8):Xe==="in"?ke(.75):Xe==="out"?ke(1.33):Xe==="full"?Se():_e.dataset.metal&&(Oe(_e.dataset.metal),n.dispatchEvent(new CustomEvent("tg3d:metal",{detail:_e.dataset.metal,bubbles:!0})))});let $e=!!(n.requestFullscreen&&document.fullscreenEnabled),z=()=>$e?document.fullscreenElement===n:n.classList.contains("is-full");function Se(){if($e){z()?document.exitFullscreen():n.requestFullscreen().catch(()=>{});return}n.classList.toggle("is-full"),document.documentElement.classList.toggle("tg3d-lock",z()),ae()}function ae(){ue();let oe=z(),_e=u('[data-act="full"]');_e.innerHTML=As(oe?"exit":"full"),_e.title=oe?t.exitFull:t.full,_e.setAttribute("aria-label",_e.title),setTimeout(ve,60)}document.addEventListener("fullscreenchange",ae),document.addEventListener("keydown",oe=>{oe.key==="Escape"&&!$e&&z()&&Se()});function ve(oe=!0){let _e=d.clientWidth,Xe=d.clientHeight;!_e||!Xe||(f.setSize(_e,Xe,!1),m.setSize(_e,Xe),b.aspect=_e/Xe,b.updateProjectionMatrix(),oe&&le&&M())}new ResizeObserver(()=>ve()).observe(d),ve(),new IntersectionObserver(([oe])=>{Re=oe.isIntersecting,Re&&be()}).observe(n),document.addEventListener("visibilitychange",()=>{document.hidden||be()});let Ee=null;function de(oe){o.metals[oe]&&(U.setRGB(...o.metals[oe]),F.deep.value=o.metalDeep?.[oe]??0,F.deepR.value=o.metalDeepR??.6,le&&M())}e.metal2&&de(e.metal2);function Oe(oe,_e){o.metals[oe]&&(Ee=oe,R.setRGB(...o.metals[oe]),L=o.metalDeep?.[oe]??0,E.deepR.value=o.metalDeepR??.6,_e&&(y.color.copy(R),E.deep.value=L),n.querySelectorAll("[data-metal]").forEach(Xe=>Xe.setAttribute("aria-checked",Xe.dataset.metal===oe)),be(),_e&&le&&M())}function Ne(){for(let oe of A){let _e=pd[Qe[oe.userData.role||"center"]];_e&&(oe.uniforms.ior.value=_e.ior,oe.uniforms.disp.value=_e.disp,oe.uniforms.absorb.value.fromArray(_e.absorb||[0,0,0]),oe.uniforms.spark.value=_e.spark??0,oe.uniforms.reflK.value=_e.reflK??1,oe.uniforms.reflHi.value=_e.reflHi??0,pe(oe))}}function wt(oe,_e){pd[oe]&&(_e?Qe[_e]=oe:Qe.center=Qe.accent=oe,Ne(),le&&M())}function pt(oe,_e=1,Xe){if(!le)return;let mt=le.pos.distanceTo(le.target)*_e,rt=Xe?new I(...Xe):le.target.clone();b.position.copy(rt).addScaledVector(new I(...oe).normalize(),mt),te.target.copy(rt),te.update(0),M()}function Nn(oe){o={...o,...oe,metals:{...o.metals,...oe.metals||{}}},q(),Ee&&Oe(Ee,!0),oe.bg&&(n.style.background=oe.bg),M()}let $n={renderer:f,composer:m,bloom:p,bloomP:_,bloomS:T,paint:M,scene:g,camera:b,gemMats:A,metalMat:y,metalU:E,resize:ve,setLook:Nn,get look(){return o},get pr(){return h}},eh=(oe,_e={})=>ct(oe,{keepView:!0,..._e});function th(oe,_e=1,Xe){if(!le)return;let mt=oe?new I(...oe):le.target.clone(),rt=Xe?new I(...Xe).normalize():b.position.clone().sub(te.target).normalize();ye(mt.clone().addScaledVector(rt,le.pos.distanceTo(le.target)*_e),mt,.7)}return{_debug:$n,setMetal:Oe,setMetal2:de,setGem:wt,setObject:eh,setPlay:He,setTilt:Ue,setView:pt,lookAt:th,destroy(){ze=!0,f.dispose(),n.innerHTML=""}}}var Rs=Math.PI/180,Es=(n,e)=>n[0]*e[0]+n[1]*e[1]+n[2]*e[2];function My(n,e=20){let t=e,i=[[[-t,-t,-t],[-t,-t,t],[-t,t,t],[-t,t,-t]],[[t,-t,-t],[t,t,-t],[t,t,t],[t,-t,t]],[[-t,-t,-t],[t,-t,-t],[t,-t,t],[-t,-t,t]],[[-t,t,-t],[-t,t,t],[t,t,t],[t,t,-t]],[[-t,-t,-t],[-t,t,-t],[t,t,-t],[t,-t,-t]],[[-t,-t,t],[t,-t,t],[t,t,t],[-t,t,t]]],s=1e-9;for(let{n:r,d:a}of n){let o=[],c=[];for(let l of i){let h=[];for(let u=0;u<l.length;u++){let d=l[u],f=l[(u+1)%l.length],g=Es(r,d)-a,b=Es(r,f)-a;if(g<=s&&h.push(d),g<-s&&b>s||g>s&&b<-s){let m=g/(g-b),p=[d[0]+(f[0]-d[0])*m,d[1]+(f[1]-d[1])*m,d[2]+(f[2]-d[2])*m];h.push(p),o.push(p)}else Math.abs(g)<=s&&o.push(d)}h.length>=3&&c.push(h)}if(i=c,o.length>=3){let l=o.reduce((b,m)=>[b[0]+m[0],b[1]+m[1],b[2]+m[2]],[0,0,0]).map(b=>b/o.length),h=Math.abs(r[0])<.9?[0,r[2],-r[1]]:[-r[2],0,r[0]],u=Math.hypot(...h),d=h.map(b=>b/u),f=[r[1]*d[2]-r[2]*d[1],r[2]*d[0]-r[0]*d[2],r[0]*d[1]-r[1]*d[0]],g=[];for(let b of o)g.some(m=>Math.hypot(b[0]-m[0],b[1]-m[1],b[2]-m[2])<1e-7)||g.push(b);g.sort((b,m)=>Math.atan2(Es(f,[b[0]-l[0],b[1]-l[1],b[2]-l[2]]),Es(d,[b[0]-l[0],b[1]-l[1],b[2]-l[2]]))-Math.atan2(Es(f,[m[0]-l[0],m[1]-l[1],m[2]-l[2]]),Es(d,[m[0]-l[0],m[1]-l[1],m[2]-l[2]]))),g.length>=3&&i.push(g)}}return i}function Sy(n,e=[1,1,1]){let t=[];for(let s of n)for(let r=1;r<s.length-1;r++)for(let a of[s[0],s[r],s[r+1]])t.push(a[0]*e[0],a[1]*e[1],a[2]*e[2]);let i=new dt;return i.setAttribute("position",new gt(new Float32Array(t),3)),i.computeVertexNormals(),i}function Il(n,e,t,i=128){let s=[];for(let r=0;r<i;r++){let a=r/i*Math.PI*2,o=Math.cos(a),c=Math.sin(a);s.push([n*Math.sign(o)*Math.abs(o)**(2/t),e*Math.sign(c)*Math.abs(c)**(2/t)])}return s}function Ll(n,e,t){return[[n,-e+t],[n,e-t],[n-t,e],[-n+t,e],[-n,e-t],[-n,-e+t],[-n+t,-e],[n-t,-e]]}function Ty(n,e=128){let t=(n*n+1)/2,i=[],s=Math.asin(n/t);for(let r=0;r<e/2;r++){let a=-s+2*s*r/(e/2);i.push([t*Math.sin(a),t*Math.cos(a)-(t-1)])}for(let r=0;r<e/2;r++){let a=-s+2*s*r/(e/2);i.push([-t*Math.sin(a),-(t*Math.cos(a)-(t-1))])}return i}function wy(n,e=128){let t=[],i=-(n-1)/2,s=n+i,r=s-i,a=Math.acos(1/r),o=Math.round(e*.75);for(let u=0;u<=o;u++){let d=a+(2*Math.PI-2*a)*u/o;t.push([i+Math.cos(d),Math.sin(d)])}let c=u=>{let d=[i+Math.cos(u*a),Math.sin(u*a)],f=[s,0],g=10,b=[];for(let m=1;m<g;m++){let p=m/g,_=d[0]+(f[0]-d[0])*p,T=d[1]+(f[1]-d[1])*p,x=.08*Math.sin(Math.PI*p)*u;b.push([_+x*.3,T+x])}return b},l=c(-1);for(let u of l)t.push(u);t.push([s,0]);let h=c(1).reverse();for(let u of h)t.push(u);return t}function Ay(n){let e=n.length,t=[0];for(let r=0;r<e;r++){let a=n[r],o=n[(r+1)%e];t.push(t[r]+Math.hypot(o[0]-a[0],o[1]-a[1]))}let i=t[e];return{at:r=>{let a=(r%1+1)%1*i,o=0;for(;o<e-1&&t[o+1]<a;)o++;let c=n[o],l=n[(o+1)%e],h=(a-t[o])/(t[o+1]-t[o]||1),u=[c[0]+(l[0]-c[0])*h,c[1]+(l[1]-c[1])*h],d=b=>{let m=n[(b+e)%e],p=n[(b+1)%e],_=p[0]-m[0],T=p[1]-m[1],x=Math.hypot(_,T)||1;return[T/x,-_/x]},f=d(o);if(h<.02){let b=d(o-1);f=[f[0]+b[0],f[1]+b[1]]}else if(h>.98){let b=d(o+1);f=[f[0]+b[0],f[1]+b[1]]}let g=Math.hypot(f[0],f[1]);return{p:u,n:[f[0]/g,f[1]/g]}},L:i,pts:n}}var Dl=n=>{let e=0;for(let t=0;t<n.length;t++){let i=n[t],s=n[(t+1)%n.length];e+=i[0]*s[1]-s[0]*i[1]}return e>0?n:n.slice().reverse()};function Ey(n,e={}){let t=Dl(n),i=Ay(t),s=e.girdle??.03,r=(e.crown??34.5)*Rs,a=(e.pavilion??40.75)*Rs,c=1-(e.table??.57),l=c*Math.tan(r),h=s/2+l,u=[],d=(m,p,_,T)=>{let x=Math.hypot(m,p,_),v=[m/x,p/x,_/x];u.push({n:v,d:Es(v,T)})},f=e.girdleN??64;for(let m=0;m<f;m++){let{p,n:_}=i.at(m/f);d(_[0],0,_[1],[p[0],0,p[1]])}d(0,1,0,[0,h,0]);let g=e.offset??0,b=(m,p,_)=>[Math.sin(m)*p[0],_?Math.cos(m):-Math.cos(m),Math.sin(m)*p[1]];for(let m=0;m<8;m++){let{p,n:_}=i.at(g+m/8);d(...b(r,_,!0),[p[0],s/2,p[1]])}for(let m=0;m<8;m++){let{p,n:_}=i.at(g+(m+.5)/8);d(...b(r*.62,_,!0),[p[0]-_[0]*c,h,p[1]-_[1]*c])}for(let m=0;m<16;m++){let{p,n:_}=i.at(g+(m+.5)/16);d(...b(r+7.5*Rs,_,!0),[p[0],s/2,p[1]])}for(let m=0;m<8;m++){let{p,n:_}=i.at(g+m/8);d(...b(a,_,!1),[p[0],-s/2,p[1]])}for(let m=0;m<16;m++){let{p,n:_}=i.at(g+(m+.5)/16);d(...b(a+1.3*Rs,_,!1),[p[0],-s/2,p[1]])}return u}function Ry(n,e={}){let t=Dl(n),i=e.girdle??.03,s=e.crown??[[.13,50],[.13,38],[.12,26]],r=e.pav??[[.2,62],[.22,52],[.25,43],[.4,36]],a=[],o=(l,h)=>{let u=Math.hypot(...l),d=l.map(f=>f/u);a.push({n:d,d:Es(d,h)})},c=i/2;for(let l=0;l<t.length;l++){let h=t[l],u=t[(l+1)%t.length],d=u[0]-h[0],f=u[1]-h[1],g=Math.hypot(d,f),b=[f/g,-d/g],m=[(h[0]+u[0])/2,(h[1]+u[1])/2];o([b[0],0,b[1]],[m[0],0,m[1]]);let p=0,_=i/2;for(let[T,x]of s){let v=x*Rs;o([Math.sin(v)*b[0],Math.cos(v),Math.sin(v)*b[1]],[m[0]-b[0]*p,_,m[1]-b[1]*p]),p+=T,_+=T*Math.tan(v)}c=_,p=0,_=-i/2;for(let[T,x]of r){let v=x*Rs;o([Math.sin(v)*b[0],-Math.cos(v),Math.sin(v)*b[1]],[m[0]-b[0]*p,_,m[1]-b[1]*p]),p+=T,_-=T*Math.tan(v)}}return a.push({n:[0,1,0],d:c}),a}var hm=[[1.3,0],[.62,1],[-.62,1],[-1.3,0],[-.62,-1],[.62,-1]],um=[[1.6,-.62],[1.6,.62],[-1.6,1],[-1.6,-1]],qn={round:{vi:"Tr\xF2n",en:"Round",ratio:1,mm1ct:[6.5,6.5],outline:()=>Il(1,1,2),cut:"brilliant",kind:"curved"},oval:{vi:"Oval",en:"Oval",ratio:1.38,mm1ct:[7.7,5.6],outline:()=>Il(1.38,1,2),cut:"brilliant",kind:"curved"},cushion:{vi:"Cushion",en:"Cushion",ratio:1.05,mm1ct:[5.8,5.5],outline:()=>Il(1.05,1,3.4),cut:"brilliant",kind:"curved"},cushionLong:{vi:"Cushion d\xE0i",en:"Elongated cushion",ratio:1.25,mm1ct:[6.6,5.3],outline:()=>Il(1.25,1,3.4),cut:"brilliant",kind:"curved"},princess:{vi:"Princess",en:"Princess",ratio:1,mm1ct:[5.5,5.5],outline:()=>Ll(1,1,.04),cut:"brilliant",offset:1/16,kind:"rect",rect:[1,1,.04]},radiant:{vi:"Radiant",en:"Radiant",ratio:1.25,mm1ct:[6.5,5.2],outline:()=>Ll(1.25,1,.22),cut:"brilliant",offset:1/16,kind:"rect",rect:[1.25,1,.22]},emerald:{vi:"Emerald",en:"Emerald",ratio:1.42,mm1ct:[7,5],outline:()=>Ll(1.42,1,.26),cut:"step",kind:"rect",rect:[1.42,1,.26]},asscher:{vi:"Asscher",en:"Asscher",ratio:1,mm1ct:[5.6,5.6],outline:()=>Ll(1,1,.32),cut:"step",kind:"rect",rect:[1,1,.32]},hexagon:{vi:"L\u1EE5c gi\xE1c",en:"Hexagon",ratio:1.3,mm1ct:[7,5.4],outline:()=>hm,cut:"step",kind:"poly",poly:hm},pear:{vi:"Gi\u1ECDt n\u01B0\u1EDBc",en:"Pear",ratio:1.55,mm1ct:[8.2,5.4],outline:()=>wy(3.1-1),cut:"brilliant",kind:"pear"},marquise:{vi:"Marquise",en:"Marquise",ratio:2,mm1ct:[10,5],outline:()=>Ty(2),cut:"brilliant",kind:"marquise"}},Cy={outline:()=>[[2.6,-1],[2.6,1],[-2.6,1],[-2.6,-1]],cut:"step",crown:[[.12,45],[.12,30]],pav:[[.3,55],[.4,42],[.5,35]]},dm=[[2,-1],[2,1],[-2,1],[-2,-1]],fm=[[1,-1],[1,1],[-1,1],[-1,-1]],pm={taperedBaguette:{outline:()=>um,cut:"step",kind:"poly",poly:um,crown:[[.12,45],[.12,30]],pav:[[.22,55],[.3,42],[.4,35]]},bag2:{outline:()=>dm,cut:"step",kind:"poly",poly:dm,crown:[[.12,45],[.12,30]],pav:[[.3,55],[.4,42],[.5,35]]},carre:{outline:()=>fm,cut:"step",kind:"poly",poly:fm,crown:[[.12,45],[.12,30]],pav:[[.3,55],[.35,42],[.35,35]]}},mm=n=>n==="baguette"?Cy:qn[n]||pm[n];function Nl(n,e=144){let t=Dl(n),i=t.length,s=[0];for(let h=0;h<i;h++){let u=t[h],d=t[(h+1)%i];s.push(s[h]+Math.hypot(d[0]-u[0],d[1]-u[1]))}let r=s[i],a=0;for(let h=0;h<i;h++){let u=t[h],d=t[(h+1)%i];if(u[1]<0&&d[1]>=0){let f=-u[1]/(d[1]-u[1]);if(u[0]+(d[0]-u[0])*f>0){a=s[h]+f*(s[h+1]-s[h]);break}}}let o=h=>{let u=((a+h*r)%r+r)%r,d=0;for(;d<i-1&&s[d+1]<u;)d++;let f=t[d],g=t[(d+1)%i],b=(u-s[d])/(s[d+1]-s[d]||1);return[f[0]+(g[0]-f[0])*b,f[1]+(g[1]-f[1])*b]},c=h=>{let d=o(h-.004),f=o(h+.004),g=f[0]-d[0],b=f[1]-d[1],m=Math.hypot(g,b)||1;return{p:o(h),n:[b/m,-g/m]}},l=Array.from({length:e},(h,u)=>c(u/e));return l.at=c,l}var pa=(n,e)=>{let t=Math.hypot(n,e)||1;return[n/t,e/t]};function Fl(n,e){let t=mm(n),i=[],s=(r,a,o=!1,c=null)=>i.push({p:r,n:a,v:o,e:c});if(t.kind==="curved"){let r=Nl(t.outline(),64),a=e==="compass"?[0,.25,.5,.75]:Array.from({length:e},(o,c)=>(2*c+1)/(2*e));for(let o of a){let{p:c,n:l}=r.at(o);s(c,l)}}else if(t.kind==="rect"){let[r,a,o]=t.rect;if(e==="compass"&&t.ratio>1.02)s([r,0],[1,0]),s([-r,0],[-1,0]),s([0,a],[0,1]),s([0,-a],[0,-1]);else{for(let[c,l]of[[1,1],[-1,1],[-1,-1],[1,-1]])s([c*(r-o/2),l*(a-o/2)],pa(c,l),"opt",[[-c,0],[0,-l]]);e===6&&(s([0,a],[0,1]),s([0,-a],[0,-1]))}}else if(t.kind==="poly"){let r=t.poly,a=r.length,o=r.map((c,l)=>{let h=r[(l-1+a)%a],u=r[(l+1)%a],d=pa(h[0]-c[0],h[1]-c[1]),f=pa(u[0]-c[0],u[1]-c[1]);return{p:c,n:pa(-(d[0]+f[0]),-(d[1]+f[1])),e:[d,f]}});a===6&&e===4&&(o=o.filter(c=>Math.abs(c.p[1])>.5)),a===6&&e==="compass"&&(o=[...o.filter(c=>Math.abs(c.p[1])<.5),{p:[0,1],n:[0,1]},{p:[0,-1],n:[0,-1]}]);for(let c of o)s(c.p,c.n,c.e?"opt":!1,c.e)}else if(t.kind==="pear"){let c=Math.acos(.47619047619047616);s([1.55,0],[1,0],"auto",[pa(-.55+Math.cos(c)-1.55,Math.sin(c)),pa(-.55+Math.cos(c)-1.55,-Math.sin(c))]);let l=e===6?[78,-78,130,-130,180]:[95,-95,180];for(let h of l){let u=h*Math.PI/180;s([-.55+Math.cos(u),Math.sin(u)],[Math.cos(u),Math.sin(u)])}}else if(t.kind==="marquise"){for(let r of[1,-1])s([2*r,0],[r,0],"auto",[[-.6*r,.8],[-.6*r,-.8]]);if(e===6){let a=Math.sqrt(.8704000000000001);for(let o of[1,-1])for(let c of[1,-1])s([.9*o,c*(2.5*a-1.5)],[.36*o,a*c])}else s([0,1],[0,1]),s([0,-1],[0,-1])}return i}var gd=new Map;function xo(n){if(gd.has(n))return gd.get(n);let e=mm(n),t=Dl(e.outline()),i=e.cut==="step"?Ry(t,e):Ey(t,{offset:e.offset||0}),s=My(i),r=Sy(s);r.computeBoundingBox();let a=r.boundingBox,o;if(e.cut==="step"){let l=e.pav??[[.2,62],[.22,52],[.25,43],[.4,36]],h=[[0,0]];for(let[u,d]of l){let[f,g]=h[h.length-1];h.push([f+u*Math.tan(d*Rs),g+u])}o=u=>{for(let d=1;d<h.length;d++)if(u<=h[d][0]){let[f,g]=h[d-1],[b,m]=h[d];return g+(u-f)/(b-f)*(m-g)}return h[h.length-1][1]}}else o=l=>l/Math.tan(40.75*Rs);let c={geo:r,outline:t,top:a.max.y,bottom:a.min.y,planes:i.length,inset:o,crownAngle:e.cut==="step"?48:35};return gd.set(n,c),c}var vw=Math.PI/180,gm=new zt;function In(n,e,t,i,s){let r=new Float32Array(n*e*3),a=0;for(let u=0;u<n;u++)for(let d=0;d<e;d++){let f=t(u,d);r[a++]=f[0],r[a++]=f[1],r[a++]=f[2]}let o=[],c=i?n:n-1,l=s?e:e-1;for(let u=0;u<c;u++)for(let d=0;d<l;d++){let f=u*e+d,g=(u+1)%n*e+d,b=(u+1)%n*e+(d+1)%e,m=u*e+(d+1)%e;o.push(f,g,b,f,b,m)}let h=new dt;return h.setAttribute("position",new gt(r,3)),h.setIndex(o),Py(h)}function Py(n){let e=n.attributes.position.array,t=n.index.array,i=0;for(let s=0;s<t.length;s+=3){let r=t[s]*3,a=t[s+1]*3,o=t[s+2]*3;i+=e[r]*(e[a+1]*e[o+2]-e[a+2]*e[o+1])-e[r+1]*(e[a]*e[o+2]-e[a+2]*e[o])+e[r+2]*(e[a]*e[o+1]-e[a+1]*e[o])}if(i<0){let s=Array.from(t);for(let r=0;r<s.length;r+=3){let a=s[r+1];s[r+1]=s[r+2],s[r+2]=a}n.setIndex(s)}return n.computeVertexNormals(),n}function Ul(n,e,t=14,i=64){let r=new Wa(n,!1,"centripetal").getSpacedPoints(i-1),a=r.map((h,u)=>r[Math.min(u+1,r.length-1)].clone().sub(r[Math.max(u-1,0)]).normalize()),o=new I(0,1,0);Math.abs(o.dot(a[0]))>.9&&o.set(1,0,0),o.sub(a[0].clone().multiplyScalar(o.dot(a[0]))).normalize();let c=[],l=[];for(let h=0;h<r.length;h++)h&&o.sub(a[h].clone().multiplyScalar(o.dot(a[h]))).normalize(),c.push(o.clone()),l.push(a[h].clone().cross(o).normalize());return In(r.length,t,(h,u)=>{let d=h/(r.length-1),f=u/t*Math.PI*2,g=e(d),b=r[h].clone().addScaledVector(c[h],Math.cos(f)*g).addScaledVector(l[h],Math.sin(f)*g);return[b.x,b.y,b.z]},!1,!0)}function vo(n,e,t=10){let i=n.length;return In(i,t,(s,r)=>{let a=n[s],o=n[(s+1)%i].clone().sub(n[(s-1+i)%i]).normalize(),c=new I(a.x,a.y,0).normalize();c.sub(o.clone().multiplyScalar(c.dot(o))).normalize();let l=o.clone().cross(c),h=r/t*Math.PI*2,u=a.clone().addScaledVector(c,Math.cos(h)*e).addScaledVector(l,Math.sin(h)*e);return[u.x,u.y,u.z]},!0,!0)}function on(n,e,t=28){let i=0;for(let r=1;r<n.length;r++)i+=n[r].distanceTo(n[r-1]);let s=Math.min(.3,e/i);return Ul(n,r=>{let a=r<s?(s-r)/s:r>1-s?(r-(1-s))/s:0;return e*Math.sqrt(Math.max(0,1-a*a))},12,t)}function _d(n,e){let t=n.length,i=n.map((a,o)=>{let c=n[(o-1+t)%t],l=n[(o+1)%t],h=l[0]-c[0],u=l[1]-c[1],d=Math.hypot(h,u)||1;return[u/d,-h/d]}),s=n.reduce((a,o)=>[a[0]+o[0]/t,a[1]+o[1]/t],[0,0]),r=Math.sign((n[0][0]-s[0])*i[0][0]+(n[0][1]-s[1])*i[0][1])||1;return In(t,e.length,(a,o)=>{let[c,l]=e[o];return[n[a][0]+i[a][0]*c*r,l,n[a][1]+i[a][1]*c*r]},!0,!0)}function bm(n,e,t=8){if(!n.length)return null;let i=n.map(s=>{let r=new Ks(s[3]??e,t,Math.max(4,t-2));return r.translate(s[0],s[1],s[2]),r});return Wn(i)}function Gt(n,e,t="metal"){if(!e)return;let i=new St(e,gm);i.name=t,i.userData.ownGeo=!0,n.add(i)}var bd=new Map;function _m(n,e,t,i,s){let r=xo(n).geo,a=`${e}:${n}`;e!=="center"&&(bd.has(a)||bd.set(a,r.clone()),r=bd.get(a));let o=new St(r,gm);return o.name=e==="center"?"gem:center":`gem:${e}:${n}`,o.scale.setScalar(t),o.position.copy(i),s&&o.quaternion.copy(s),o}var xd={A:[[[0,0],[2,6],[4,0]],[[.8,2.1],[3.2,2.1]]],B:[[[0,0],[0,6],[2.4,6],[3.6,5.3],[3.6,3.9],[2.4,3.2],[0,3.2]],[[2.4,3.2],[4,2.4],[4,.9],[2.7,0],[0,0]]],C:[[[4,4.8],[3,6],[1,6],[0,4.8],[0,1.2],[1,0],[3,0],[4,1.2]]],D:[[[0,0],[0,6],[2.2,6],[4,4.4],[4,1.6],[2.2,0],[0,0]]],\u0110:[[[.4,0],[.4,6],[2.4,6],[4,4.4],[4,1.6],[2.4,0],[.4,0]],[[-.5,3],[1.9,3]]],E:[[[4,6],[0,6],[0,0],[4,0]],[[0,3.1],[3,3.1]]],F:[[[4,6],[0,6],[0,0]],[[0,3.1],[3,3.1]]],G:[[[4,4.8],[3,6],[1,6],[0,4.8],[0,1.2],[1,0],[3,0],[4,1.2],[4,2.8],[2.3,2.8]]],H:[[[0,0],[0,6]],[[4,0],[4,6]],[[0,3],[4,3]]],I:[[[2,0],[2,6]],[[.7,6],[3.3,6]],[[.7,0],[3.3,0]]],J:[[[1.4,6],[3.6,6]],[[3.2,6],[3.2,1.3],[2.2,0],[1,0],[0,1.3]]],K:[[[0,0],[0,6]],[[4,6],[0,2.5]],[[1.5,3.8],[4,0]]],L:[[[0,6],[0,0],[4,0]]],M:[[[0,0],[0,6],[2,2.4],[4,6],[4,0]]],N:[[[0,0],[0,6],[4,0],[4,6]]],O:[[[1,0],[3,0],[4,1.2],[4,4.8],[3,6],[1,6],[0,4.8],[0,1.2],[1,0]]],P:[[[0,0],[0,6],[2.6,6],[3.9,5.2],[3.9,3.6],[2.6,2.8],[0,2.8]]],Q:[[[1,0],[3,0],[4,1.2],[4,4.8],[3,6],[1,6],[0,4.8],[0,1.2],[1,0]],[[2.4,1.7],[4.2,-.3]]],R:[[[0,0],[0,6],[2.6,6],[3.9,5.2],[3.9,3.6],[2.6,2.8],[0,2.8]],[[2,2.8],[4,0]]],S:[[[4,4.9],[3,6],[1,6],[0,4.9],[0,3.9],[1,3.1],[3,2.9],[4,2.1],[4,1.1],[3,0],[1,0],[0,1.1]]],T:[[[0,6],[4,6]],[[2,6],[2,0]]],U:[[[0,6],[0,1.2],[1,0],[3,0],[4,1.2],[4,6]]],V:[[[0,6],[2,0],[4,6]]],W:[[[0,6],[.9,0],[2,4.2],[3.1,0],[4,6]]],X:[[[0,0],[4,6]],[[0,6],[4,0]]],Y:[[[0,6],[2,3],[4,6]],[[2,3],[2,0]]],Z:[[[0,6],[4,6],[0,0],[4,0]]],0:[[[1,0],[3,0],[4,1.2],[4,4.8],[3,6],[1,6],[0,4.8],[0,1.2],[1,0]]],1:[[[.9,4.8],[2.3,6],[2.3,0]],[[.8,0],[3.8,0]]],2:[[[0,4.8],[1,6],[3,6],[4,4.8],[4,3.6],[0,0],[4,0]]],3:[[[0,4.9],[1,6],[3,6],[4,4.9],[4,3.9],[3,3.1],[1.6,3.1]],[[3,3.1],[4,2.3],[4,1.1],[3,0],[1,0],[0,1.1]]],4:[[[3.1,0],[3.1,6],[0,1.9],[4.2,1.9]]],5:[[[4,6],[.4,6],[.2,3.3],[2.6,3.6],[4,2.6],[4,1.1],[3,0],[1,0],[0,1.1]]],6:[[[3.8,5.2],[2.8,6],[1.2,6],[0,4.8],[0,1.2],[1,0],[3,0],[4,1.2],[4,2.4],[3,3.5],[1,3.5],[0,2.4]]],7:[[[0,6],[4,6],[1.4,0]]],8:[[[1,3.2],[.2,4],[.2,5.1],[1.1,6],[2.9,6],[3.8,5.1],[3.8,4],[3,3.2],[1,3.2],[0,2.3],[0,1.1],[1,0],[3,0],[4,1.1],[4,2.3],[3,3.2]]],9:[[[4,3.6],[3,2.5],[1,2.5],[0,3.6],[0,4.8],[1,6],[3,6],[4,4.8],[4,1.2],[2.8,0],[1.2,0],[.2,.8]]],"\u271D":[[[2,6.4],[2,-.4]],[[.2,4.3],[3.8,4.3]]],$:[[[4,4.6],[3,5.6],[1,5.6],[0,4.6],[0,3.8],[1,3.1],[3,2.9],[4,2.2],[4,1.4],[3,.4],[1,.4],[0,1.4]],[[2,6.9],[2,-.9]]],"\u2665":[[[2,.2],[.3,2.6],[0,3.9],[.4,5.1],[1.2,5.6],[1.8,5.2],[2,4.5],[2.2,5.2],[2.8,5.6],[3.6,5.1],[4,3.9],[3.7,2.6],[2,.2]]],"\u2605":[[[2,6.3],[2.75,4.05],[5.1,4.05],[3.2,2.6],[3.9,.3],[2,1.7],[.1,.3],[.8,2.6],[-1.1,4.05],[1.25,4.05],[2,6.3]]]};var Ls={type:"signet",top:"square",dome:"flat",faceW:13.5,height:"high",face:"plate",faceLen:"full",center:"stone",faceLetter:"T",faceField:"satin",shape:"round",centerD:7.2,setting:"prong4",prongTip:"round",headH:"high",plinth:"on",frame:"haloSq",faceBars:"on",facePave:"off",corners:"off",rim:"none",shoulder:"ladder",shoulderLen:"long",flank:"pave2",shank:"taper",bottomW:8,shankDeco:"flutes",lattice:"x",letter:"T",letter2:"",letterStone:"on",letterTurn:"off",tierRows:1,bandW:7,bandProfile:"flat",bandStones:"pave",cover:"full",paveD:"big",edge:"bevel",finish:"bong",twoTone:"none",engraveFont:"serif",metal:"vang-hong",metal2:"vang-trang",gem:"emerald",accentGem:"lab-diamond",sideGem:"emerald",karat:"18K",size:"",engrave:""},zl=["square","octagon","cushion","round"],Ad=["round","cushion","princess","asscher","radiant","emerald","oval","hexagon"],Ed=[9,10,12,13.5,15],Iy=["stone","letter","plain","run"],lr=[6,6.5,7.2,8,9,10],Rd=[5,6,7,8,9,10,12],Cd=[4,5,6,8,10,12],Ly=["prong4","prong6","bezel"],yo=["none","halo","haloSq","bagFrame","bagRing","double","stepSq","star"],Pd=["plain","pave","honey","rows","ladder","ladderBig","ladderRd","ladderT","ladder2","ladder2s","ladder3","ladder3s","carre","bagLong","tiersBag","grid","tiers","chevron","chevronPlain","letter"],hr=[..."ABCD\u0110EFGHIJKLMNOPQRSTUVWXYZ"],Dy=["tram","x","ong","dac"],Id=["plain","pave","honey","paveBig","rows","ladder","ladderRd","ladder2s","carre","bagLong","grid","stations","flush"],Ny=["none","rail","band","milgrain","pave","bevel","notch"],Fy=["plain","milgrain","pave1","pave2","pave3"],Uy=["none","flutes","pave","milgrain"],Oy=1.25,Ld={small:1.2,mid:1.5,big:1.9},vd={low:2.6,mid:3.1,high:3.7},yd={low:0,mid:.7,high:1.7},ky=1.2,By={square:1,octagon:.88,cushion:.84,round:.76},zy=10,nn=Math.PI*2,ts=Math.PI/180,ln=(n,e,t)=>Math.min(t,Math.max(e,n)),or=n=>{let e=ln(n,0,1);return e*e*(3-2*e)},Gy=new I(0,1,0),kl=new I(0,0,1),gi=n=>new Xt().setFromUnitVectors(Gy,n);function ma(n,e,t=!1){let i=gi(n),s=new I(1,0,0).applyQuaternion(i),r=e.clone().projectOnPlane(n).normalize();return!t&&s.dot(r)<0&&r.negate(),new Xt().setFromAxisAngle(n,Math.atan2(n.dot(s.clone().cross(r)),s.dot(r))).multiply(i)}var Md=n=>qn[n].ratio>1.1,Li=n=>[n.centerD*qn[n.shape].ratio,n.centerD],Cs=1.7,Vy=.8,Ii=n=>n.faceBars==="on"&&n.type!=="band"&&n.dome!=="dome"&&n.top==="square",Hy=n=>Ii(n)||n.faceLen==="tight",Mm=n=>{let e=n.top==="round"?.74:n.top==="octagon"?.9:Gl(n);return(Ii(n)?n.faceW/2-Cs:n.faceW/2*e-.35)-.75},Sm=n=>n.center==="letter"&&n.faceLen==="tight"&&n.letterTurn==="on"&&n.letterStone==="bag";function Tm(n){if(n.center==="letter"){if(n.faceLen!=="tight")return n.faceW/2;let i=Mm(n);return Sm(n)?(2*i+1)*.31+.95:(n.letterTurn==="on"?i/.84:i*.84)+.95}if(n.face==="cradle")return Li(n)[0]/2+1.05;if(n.center==="run")return n.faceW/2;if(!Hy(n))return n.faceW/2*(Md(n.shape)?1.2:n.corners==="row"?1.18:1);let e=ns(n),t={none:n.plinth==="on"?.75:.5,halo:e+.1,haloSq:e+.1,double:2*e+.2,bagFrame:e+.33,bagRing:e+.3,stepSq:e+.1,star:e+.1}[e?n.frame:"none"];return ln(Li(n)[0]/2+yt+t+(n.plinth==="on"?.5:.3),4.6,n.faceW/2*1.2)}var yt=.4,Gl=n=>n.top==="round"?.86:n.top==="cushion"?.93:1;function wm(n){let[e,t]=Li(n),i=Gl(n);return Ii(n)?n.faceW/2-Cs-t/2-yt-.05:n.faceLen==="tight"?n.faceW/2*i-t/2-yt-.3-(n.plinth==="on"?.3:0):Math.min(Tm(n)*i-e/2,n.faceW/2*i-t/2)-yt-.3-(n.plinth==="on"?.3:0)}function ns(n,e=n.frame){if(n.center==="letter"||n.center==="run"||n.face==="cradle")return 0;let t=wm(n);if(e==="none")return 0;if(e==="stepSq")return t>=.9?Math.min(n.corners==="row"?.55:1.7,Math.round(t*20)/20):0;if(e==="star")return t>=1.3?Math.min(2.6,Math.round(t*20)/20):0;if(e==="bagRing"){let r=Math.min(2.6,Math.round((t-.05)*20)/20);return r>=1.5?r:0}let i=e==="double"?(t-.1)/2:t,s=e==="bagFrame"?1.7:1.8;return i>=(e==="bagFrame"?1.1:.95)?Math.min(s,Math.round(i*20)/20):0}var Mo=(n,e)=>e==="none"||ns(n,e)>0&&!(e==="haloSq"&&!["round","cushion"].includes(n.shape))&&!(e==="bagFrame"&&Md(n.shape))&&!(e==="bagRing"&&n.shape!=="round")&&!(e==="star"&&n.shape!=="round")&&!(e==="stepSq"&&Md(n.shape)),ga=(n,e)=>n.face==="cradle"?e<=n.faceW+.6:wm({...n,centerD:e,plinth:"off"})+yt+.3>=1.15;function Vl(n){if(Ii(n)||n.face==="cradle"||n.center==="run")return!1;if(n.center==="letter")return!0;let e=ns(n),t=n.centerD/2,i=n.plinth==="on"?.22:0;return(t+yt+{none:i?.75:.3,halo:e+.1+i,haloSq:e+.1+i,double:2*e+.2+i,bagFrame:e+.33+i,bagRing:e+.3+i,stepSq:e+.1+i,star:e+.1+i}[e?n.frame:"none"])*(qn[n.shape].ratio>1.1,1)<=n.faceW/2*Gl(n)-.35-.22-.3}var Dd=(n,e)=>Ly.includes(e)&&!(e==="prong6"&&qn[n].kind!=="curved");function ur(n){let e={...Ls,...n};["signet","band"].includes(e.type)||(e.type="signet"),Iy.includes(e.center)||(e.center="stone"),Pd.includes(e.shoulder)||(e.shoulder="ladder"),e.center==="run"&&["plain","letter","chevron","chevronPlain"].includes(e.shoulder)&&(e.center="plain"),(!["plate","cradle"].includes(e.face)||e.center!=="stone")&&(e.face="plate");let t=e.face==="cradle",i=e.center==="run",s=t||i;return(!zl.includes(e.top)||t)&&(e.top="square"),(!["flat","dome","bombe"].includes(e.dome)||t)&&(e.dome="flat"),e.faceW=Number(e.faceW),Ed.includes(e.faceW)||(e.faceW=12),vd[e.height]||(e.height="mid"),["full","tight"].includes(e.faceLen)||(e.faceLen="full"),(!["on","off"].includes(e.faceBars)||e.dome!=="flat"||e.top!=="square"||s)&&(e.faceBars="off"),e.faceLetter=String(e.faceLetter||"").toUpperCase(),hr.includes(e.faceLetter)||(e.faceLetter="T"),["on","off"].includes(e.letterTurn)||(e.letterTurn="off"),["satin","bong"].includes(e.faceField)||(e.faceField="satin"),["round","claw"].includes(e.prongTip)||(e.prongTip="round"),(!["on","off","row"].includes(e.corners)||s)&&(e.corners="off"),e.corners==="row"&&(e.top!=="square"||e.dome!=="flat"||e.faceBars==="on"||e.center==="letter")&&(e.corners="off"),["serif","script"].includes(e.engraveFont)||(e.engraveFont="serif"),Ad.includes(e.shape)||(e.shape="round"),e.centerD=Number(e.centerD),lr.includes(e.centerD)||(e.centerD=7.2),ga(e,e.centerD)||(e.centerD=[...lr].reverse().find(r=>ga(e,r))??lr[0]),Dd(e.shape,e.setting)||(e.setting="prong4"),yd[e.headH]==null&&(e.headH="low"),(!["on","off"].includes(e.plinth)||s)&&(e.plinth=s?"off":"on"),s?e.frame="none":(!yo.includes(e.frame)||!Mo(e,e.frame))&&(e.frame=Mo(e,"halo")&&yo.includes(e.frame)&&e.frame!=="none"?"halo":"none"),(!["off","on"].includes(e.facePave)||s)&&(e.facePave="off"),["none","rail","milgrain"].includes(e.rim)||(e.rim="rail"),s&&(e.rim="none"),["short","mid","long"].includes(e.shoulderLen)||(e.shoulderLen="mid"),Fy.includes(e.flank)||(e.flank="plain"),["taper","step"].includes(e.shank)||(e.shank="taper"),e.bottomW=Number(e.bottomW),Cd.includes(e.bottomW)||(e.bottomW=5),Uy.includes(e.shankDeco)||(e.shankDeco="none"),Dy.includes(e.lattice)||(e.lattice="tram"),e.letter=String(e.letter||"").toUpperCase(),hr.includes(e.letter)||(e.letter="T"),e.letter2=String(e.letter2||"").toUpperCase(),hr.includes(e.letter2)||(e.letter2=""),["on","off","bag"].includes(e.letterStone)||(e.letterStone="on"),e.shoulder==="letter"&&e.shoulderLen==="short"&&(e.shoulderLen="mid"),e.tierRows=Number(e.tierRows)===2?2:1,e.bandW=Number(e.bandW),Rd.includes(e.bandW)||(e.bandW=7),["flat","dome","bevel"].includes(e.bandProfile)||(e.bandProfile="flat"),Id.includes(e.bandStones)||(e.bandStones="pave"),["full","half","third"].includes(e.cover)||(e.cover="full"),Ld[e.paveD]||(e.paveD="mid"),Ny.includes(e.edge)||(e.edge="none"),["bong","nham","chai"].includes(e.finish)||(e.finish="bong"),["none","head","settings","letter","shoulder"].includes(e.twoTone)||(e.twoTone="none"),e.type==="band"&&e.twoTone==="head"&&(e.twoTone="settings"),e.twoTone==="letter"&&!(e.type==="signet"&&(e.shoulder==="letter"||e.center==="letter"))&&(e.twoTone="none"),e.twoTone==="shoulder"&&!(e.type==="signet"&&e.shoulder==="chevronPlain")&&(e.twoTone="none"),e.twoTone==="head"&&e.center!=="stone"&&(e.twoTone="none"),e}function Wy(n){let e=zy;if(n.type==="band"){let R=n.bandW,W=R>=8?1.9:1.75,te=n.bandProfile==="dome"?Math.min(.75,R*.09):0;return{band:!0,R:e,ri:()=>e,bevel:n.edge==="bevel"?()=>1:null,W:R,t:W,c:n.bandProfile==="bevel"?.7:.3,hw:()=>R/2,ro:(ue,le)=>e+W-te*(le/(R/2))**2,nTop:te?12:2,aF:0,flat:!1}}let t=n.dome==="flat",i=n.dome==="bombe",s=n.faceW,r=Tm(n),a=n.face==="cradle"?{s:Li(n)[0]/2,pd:-xo(n.shape).bottom*(n.centerD/2)}:null,o=.6,c=65*ts,l=R=>R<c?e-o*Math.cos(Math.PI/2*(R/c))**2:e,h=a?ln(a.pd-.4,vd[n.height],6.2):vd[n.height]+(t?0:i?.8:.3),u=l(0)+h,d=98*ts,f=t?Math.atan(r/u):r/u,g=t?R=>u*Math.tan(R):R=>R*u,b=t?R=>Math.atan(R/u):R=>R/u,m=1.3,p=ln(Math.hypot(r,u)-e-.12,1.9,3.1),_=R=>m+(p-m)*Math.sin((Math.PI-R)/2)**2,T=f,x=-1/0;if(t)for(let R=f+.01;R<2.7;R+=.003){let W=e+_(R),te=Math.atan2(W*Math.sin(R)-r,u-W*Math.cos(R));te>x&&(x=te,T=R)}let v=e+_(T),M=v*Math.sin(T)-r,A=v*Math.cos(T)-u,y=R=>{let W=(u*Math.sin(R)-r*Math.cos(R))/(M*Math.cos(R)-A*Math.sin(R));return Math.hypot(r+W*M,u+W*A)-e},E=2.2,L=R=>{if(!t)return R<=d?E+(u-e-E)*Math.cos(R/d*Math.PI/2)**2:m+(E-m)*(1-or((R-d)/(Math.PI-d)));if(R<=f&&a){let W=u,te=Math.tan(R);for(let ue=0;ue<4;ue++)W=O(W*te);return W/Math.cos(R)-e}return R<=f?u/Math.cos(R)-e:R<=T?y(R):_(R)},O=a?R=>ln(u+.55-.92*a.pd*(1-Math.abs(R)/a.s),l(0)+1,u):null,U=Ii(n)?s-2*Vy:s*By[n.top],F=Math.min(n.bottomW,U),D=s*.15,k=R=>{let W=Math.min(1,Math.abs(R)/r);return n.top==="octagon"?s/2-Math.max(0,Math.abs(R)-(r-D)):n.top==="cushion"?s/2*(1-W**4)**.25:n.top==="round"?s/2*Math.sqrt(1-W*W):s/2},V=160*ts,N=96*ts,K=n.shank==="step",P=R=>K?R<N?U/2:F/2+(U/2-F/2)*(1-or((R-N)/.5)):F/2+(U/2-F/2)*(1-or((R-f)/(V-f))),H=R=>R<f?Math.max(k(g(R)),U/2):P(R),X=t?0:i?2.3:.95,he=R=>X*(1-or(R/d)),J=(R,W)=>e+L(R)-(X?he(R)*(W/H(R))**2:0),se=n.lattice==="dac"?null:{aH:106*ts,ramp:14*ts,ts:.85},ie=.95,pe=se?(R,W)=>{let te=1-or((R-(se.aH-se.ramp))/se.ramp),ue=l(R),le=J(R,W)-se.ts-ue;return ue+Math.max(0,le)*te}:null,q=(()=>{if(n.center!=="stone")return null;let[R,W]=Li(n),te=R/2,ue=W/2,le=qn[n.shape],fe,me,Re=["haloSq","bagFrame","stepSq"].includes(n.frame)&&ns(n)>0;if(le.kind==="rect"){let Ie=Math.max(.55,le.rect[2]*ue*.5+.35);fe=te-Ie,me=ue-Ie}else{let Ie=a?.6:le.kind==="curved"?Re?.92:.72:.6;fe=te*Ie,me=ue*Ie}return fe=Math.min(fe,r-1.2),me=Math.min(me,.7*(U/2-.95)),fe>=1&&me>=1?{hx:fe,hz:me,aH:b(fe),nA:t?1:3,nM:t?2:6}:null})();return{band:!1,R:e,ri:l,bevel:n.edge==="bevel"?n.center==="run"?()=>1:R=>or((R-f)/.05):null,cradle:a,bombe:i,W:s,H:u,La:r,ch:D,flat:t,aF:f,aS:d,aTan:T,aStep:N,step:K,tTop:h,c:.35,hw:H,ro:J,faceHw:k,xOf:g,thOfX:b,nTop:t?2:12,oct:n.top==="octagon",Ws:U,cav:se,rc:pe,wt:ie,hole:q}}var Ps=(n,e)=>{let t=Math.abs(e),i=n.ro(t,n.hw(t))-n.ri(t),s=n.bevel?n.bevel(t):0;return s>0?Math.min(n.c+(Oy-n.c)*s,i*.52):Math.min(n.c,i*.3)},cr=(n,e,t)=>{let i=n.ro(Math.abs(e),t);return new I(Math.sin(e)*i,Math.cos(e)*i,t)};function Tn(n,e,t){let s=cr(n,e,t),r=n.hw(Math.abs(e)),a=cr(n,e+.002,t).sub(cr(n,e-.002,t)).normalize(),o=cr(n,e,Math.min(t+.002,r)).sub(cr(n,e,Math.max(t-.002,-r))).normalize();return{p:s,n:o.clone().cross(a).normalize(),t:a,b:o}}var Xn=(n,e,t=0)=>cr(n,e+.001,t).distanceTo(cr(n,e-.001,t))/.002;function qy(n,e){let t=Math.abs(e),i=n.hw(t),s=n.ri(t),r=Math.min(.45,i*.3),a=n.ro(t,i),o=Ps(n,t),c=i-o,l=i-Math.min(n.wt??.95,i*.45),h=g=>n.rc?n.rc(t,g):s,u=Math.PI/2,d=[];d.push([s,-l],[s,-l],[s,-(i-r)]);for(let g=1;g<=3;g++){let b=g/3*u;d.push([s+r*(1-Math.cos(b)),-(i-r*(1-Math.sin(b)))])}d.push([s+r,-i],[a-o,-i],[a-o,-i],[n.ro(t,c),-c],[n.ro(t,c),-c]);let f=n.hole;if(f){let g=Math.min(f.hz,c*.72);for(let b=1;b<=f.nA;b++){let m=-c+(c-g)*b/f.nA;d.push([n.ro(t,m),m])}f.jT0=d.length-1;for(let b=1;b<=f.nM;b++){let m=-g+2*g*b/f.nM;d.push([n.ro(t,m),m])}f.jT1=d.length-1;for(let b=1;b<f.nA;b++){let m=g+(c-g)*b/f.nA;d.push([n.ro(t,m),m])}}else for(let g=1;g<n.nTop;g++){let b=-c+2*c*g/n.nTop;d.push([n.ro(t,b),b])}d.push([n.ro(t,c),c],[n.ro(t,c),c],[a-o,i],[a-o,i],[s+r,i],[s+r,i]);for(let g=1;g<=3;g++){let b=g/3*u;d.push([s+r*(1-Math.sin(b)),i-r*(1-Math.cos(b))])}if(d.push([s,l],[s,l],[h(l),l],[h(l),l]),f){let g=Math.min(f.hz,l*.72),b=2;for(let m=1;m<=b;m++){let p=l-(l-g)*m/b;d.push([h(p),p])}f.jC0=d.length-1;for(let m=1;m<=f.nM;m++){let p=g-2*g*m/f.nM;d.push([h(p),p])}f.jC1=d.length-1;for(let m=1;m<b;m++){let p=-g-(l-g)*m/b;d.push([h(p),p])}}else for(let b=1;b<8;b++){let m=l-2*l*b/8;d.push([h(m),m])}return d.push([h(l),-l],[h(l),-l]),d}function Xy(n){let t=Array.from({length:240},(s,r)=>-Math.PI+r/240*nn),i=[];if(!n.band){n.flat&&i.push(n.aF-.0012,n.aF+.0012);let s=n.cradle?30:14;for(let r=1;r<s;r++)i.push(n.aF*r/s);n.oct&&i.push(n.thOfX(n.La-n.ch)),n.step&&i.push(n.aStep),n.cav&&i.push(n.cav.aH,n.cav.aH-n.cav.ramp,n.cav.aH-n.cav.ramp/2),n.flat&&i.push(n.aTan),n.hole&&i.push(n.hole.aH,n.hole.aH*.5)}for(let s of i)t.push(s,-s);return[...new Set(t.map(s=>+s.toFixed(5)))].sort((s,r)=>s-r)}function jy(n){let e=Xy(n),t=e.map(v=>qy(n,v)),i=e.length,s=t[0].length,r=n.hole,a=(v,M)=>{let[A,y]=t[v][M];return[Math.sin(e[v])*A,Math.cos(e[v])*A,y]};if(!r)return In(i,s,a,!0,!0);let o=v=>v+1<i&&e[v]>=-r.aH-1e-4&&e[v+1]<=r.aH+1e-4,c=new Float32Array(i*s*3),l=0;for(let v=0;v<i;v++)for(let M=0;M<s;M++){let A=a(v,M);c[l++]=A[0],c[l++]=A[1],c[l++]=A[2]}let h=[];for(let v=0;v<i;v++)for(let M=0;M<s;M++){if(o(v)&&(M>=r.jT0&&M<r.jT1||M>=r.jC0&&M<r.jC1))continue;let A=v*s+M,y=(v+1)%i*s+M,E=(v+1)%i*s+(M+1)%s,L=v*s+(M+1)%s;h.push(A,y,E,A,E,L)}let u=0;for(let v=0;v<h.length;v+=3){let M=h[v]*3,A=h[v+1]*3,y=h[v+2]*3;u+=c[M]*(c[A+1]*c[y+2]-c[A+2]*c[y+1])-c[M+1]*(c[A]*c[y+2]-c[A+2]*c[y])+c[M+2]*(c[A]*c[y+1]-c[A+1]*c[y])}if(u<0)for(let v=0;v<h.length;v+=3){let M=h[v+1];h[v+1]=h[v+2],h[v+2]=M}let d=new dt;d.setAttribute("position",new gt(c,3)),d.setIndex(h),d.computeVertexNormals();let f=[];for(let v=0;v<i;v++)o(v)&&f.push(v);let g=f[0],b=f[f.length-1]+1,m=[],p=(t[g][r.jT0][0]+t[g][r.jC0][0])/2,_=(v,M,A)=>{let y=M[0]-v[0],E=M[1]-v[1],L=M[2]-v[2],O=A[0]-v[0],U=A[1]-v[1],F=A[2]-v[2],D=E*F-L*U,k=L*O-y*F,V=y*U-E*O,N=-(v[0]+M[0]+A[0])/3,K=p-(v[1]+M[1]+A[1])/3,P=-(v[2]+M[2]+A[2])/3;D*N+k*K+V*P<0?m.push(...v,...A,...M):m.push(...v,...M,...A)},T=(v,M,A,y)=>{_(v,M,A),_(v,A,y)};for(let v of f)T(a(v,r.jT0),a(v+1,r.jT0),a(v+1,r.jC1),a(v,r.jC1)),T(a(v,r.jT1),a(v+1,r.jT1),a(v+1,r.jC0),a(v,r.jC0));for(let v of[g,b])for(let M=0;M<r.nM;M++)T(a(v,r.jT0+M),a(v,r.jT0+M+1),a(v,r.jC1-M-1),a(v,r.jC1-M));let x=new dt;return x.setAttribute("position",new gt(new Float32Array(m),3)),x.computeVertexNormals(),d.userData.walls=x,d}var Ky=(n,e,t)=>({g:n,rg:e,o:t,bead:[],rims:[],bars:[],letter:[],flutes:[],notch:[],chev:[],cnt:{accent:0,side:0},list:[]});function cn(n,e,t,i,s,r,a){i>.2&&(n.g.add(_m(e,t,i,s,r)),n.cnt[t]!=null&&n.cnt[t]++,a&&n.list.push([t,e,Math.round(a*20)/20]))}var is=(n,e,t,i,s="accent",r=.04)=>{let{p:a,n:o}=Tn(n.rg,e,t);cn(n,"round",s,i/2,a.addScaledVector(o,r),gi(o),i)},ni=(n,e,t,i,s=.5)=>{let{p:r,n:a}=Tn(n.rg,e,t);n.bead.push([...r.addScaledVector(a,i*s).toArray(),i])},Ln=(n,e,t=.05)=>e.map(([i,s])=>{let{p:r,n:a}=Tn(n,i,s);return r.addScaledVector(a,t)}),Sd=1.1,$y=n=>({none:.2,rail:.7,band:1.5,milgrain:.55,pave:Sd+.15,bevel:.15,notch:1.15})[n.edge],sn=(n,e)=>n.rg.hw(Math.abs(e))-Ps(n.rg,e)-$y(n.o);function dr(n,e,t,i,{z:s=0,full:r=!1}={}){let{rg:a}=n,o=[];if(r){let u=i(0);if(!(u>0))return o.step=0,o;let d=Math.max(6,Math.round(nn*a.ro(0,s)/u));for(let f=0;f<d;f++)o.push(-Math.PI+(f+.5)/d*nn);return o.step=nn/d,o}let c=Math.sign(t-e)||1,l=e,h=!0;for(let u=0;u<400;u++){let d=i(l);if(!(d>0))break;let f=d/Xn(a,l,s)*c,g=l+f*(h?.5:1);if((g+f*.5-t)*c>1e-4)break;o.push(g),l=g,h=!1}return o}function Is(n,e,t,{dT:i=1.5,honey:s=!1,full:r=!1,uOf:a=d=>sn(n,d),zOf:o=()=>0,role:c="accent",dCap:l=2.4,cross:h=!1,every:u=1}={}){let d=s?.88:1,f=a(r?0:e);if(f<.5)return;let g=Math.max(1,Math.round((2*f-(s?.12*i:0))/((i+.1)*d))),b=T=>{let x=a(T),v=g,M;for(;M=Math.min(l,s?2*x/(1+(v-1)*d)-.1:2*x/v-.1),!(M>=.9||v<=1);)v--;return{u:x,r:v,d:M,pz:(M+.1)*d}},m=dr(n,e,t,T=>{let x=b(T);return x.d>=.9?x.d+.1:0},{full:r}),p=r?1:Math.sign(t-e)||1,_=m.length-1;m.forEach((T,x)=>{let v=b(T);g=v.r;let M=o(T),A=r?m.step/2:(v.d+.1)/Xn(n.rg,T)/2*p;for(let E=0;E<v.r;E++){let L=M+(E-(v.r-1)/2)*v.pz,O=s&&E%2?A:0;if(!(s&&E%2&&!r&&x===_)&&(is(n,T+O,L,v.d,c),s))for(let U of[-1,1])ni(n,T+O+A,L+U*v.pz/3,v.d*.15)}let y=h&&((x+1)%u===0||x===_&&!r);if(h){let E=L=>n.bars.push(on(Ln(n.rg,[-1,-.5,0,.5,1].map(O=>[L,M+O*(v.u+.1)]),.1),.2,12));y&&E(T+A),x===0&&!r&&E(T-A)}if(h?!y:!s)for(let E=0;E<=v.r;E++){let L=M+(E-v.r/2)*v.pz;ni(n,T+A,L,v.d*.17),x===0&&!r&&ni(n,T-A,L,v.d*.17)}})}function Bl(n,e,t,{zOf:i,d:s,full:r=!1,role:a="accent"}){let o=dr(n,e,t,()=>s+.1,{full:r}),c=r?1:Math.sign(t-e)||1;o.forEach((l,h)=>{let u=i(l);is(n,l,u,s,a);let d=r?o.step/2:(s+.1)/Xn(n.rg,l,u)/2*c;for(let f of[-1,1])ni(n,l+d,i(l+d)+f*s*.46,s*.17),h===0&&!r&&ni(n,l-d,i(l-d)+f*s*.46,s*.17)})}function xm(n,e,t,{dT:i=1.6,full:s=!1,cross:r=!0}={}){let{rg:a}=n,o=sn(n,s?0:e);if(o<.8)return;let c=Math.max(1,Math.round(2*o/(i+.55))),l=p=>{let _=sn(n,p),T=2*_/c;return{u:_,pz:T,d:Math.min(2.4,T-.5)}},h=dr(n,e,t,p=>{let _=l(p);return _.d>=.85?r?_.pz:_.d+.08:0},{full:s});if(!h.length)return;let u=s?1:Math.sign(t-e)||1,d=p=>s?h.step/2:(r?l(p).pz:l(p).d+.08)/Xn(a,p)/2*u;for(let p of h){let _=l(p);for(let T=0;T<c;T++)is(n,p,(T-(c-1)/2)*_.pz,_.d,"accent",-.02)}let f=h[0]-d(h[0]),g=h[h.length-1]+d(h[h.length-1]),b=Math.max(16,Math.round(Math.abs(g-f)*a.ro(0,0)/.4));for(let p=0;p<=c;p++){let _=[];for(let T=0;T<=b;T++){let x=f+(g-f)*T/b;_.push([x,(p-c/2)*l(x).pz])}n.bars.push(on(Ln(a,_,.06),.15,Math.max(40,b)))}let m=p=>{let _=l(p);n.bars.push(on(Ln(a,[-1,-.5,0,.5,1].map(T=>[p,T*_.u]),.06),.14,12))};if(r)h.forEach((p,_)=>{m(p+d(p)),_===0&&!s&&m(p-d(p))});else if(!s)for(let p of[f,g])m(p)}function Am(n,e,t,{zOf:i=()=>0,hlOf:s,full:r=!1,carre:a=!1,rails:o=[1,1],caps:c=!0}){let{rg:l}=n,h=p=>(a?2*p:p)+.07,u=dr(n,e,t,p=>{let _=s(p);return _>=.6?h(_):0},{full:r});if(!u.length)return null;let d=r?1:Math.sign(t-e)||1;for(let p of u){let _=s(p),{p:T,n:x}=Tn(l,p,i(p));cn(n,a?"carre":"bag2","side",a?_:_/2,T.addScaledVector(x,-.03),ma(x,kl),_*2)}let f=p=>r?u.step/2:h(s(p))/Xn(l,p)/2*d,g=r?-Math.PI:u[0]-f(u[0]),b=r?Math.PI:u[u.length-1]+f(u[u.length-1]),m=Math.max(16,Math.round(Math.abs(b-g)*l.ro(0,0)/.4));for(let p of[-1,1])if(o[(p+1)/2]){let _=[];for(let T=0;T<=m;T++){let x=g+(b-g)*T/m;_.push([x,i(x)+p*(s(x)+.2)])}n.rims.push(on(Ln(l,_,.07),.2,Math.max(40,m)))}if(!r&&c)for(let p of[g,b])n.rims.push(on(Ln(l,[-1,0,1].map(_=>[p,i(p)+_*(s(p)+.2)]),.07),.18,10));return{A0:g,A1:b}}function Em(n,e,t,{zOf:i,dOf:s,full:r=!1,role:a="accent"}){let{rg:o}=n;if(r){let u=s(0);u>=.85&&Bl(n,e,t,{zOf:i,d:u,full:r,role:a});return}let c=Math.sign(t-e)||1,l=e,h=!0;for(let u=0;u<300;u++){let d=s(l);if(!(d>=.85))break;let f=(d+.1)/Xn(o,l,i(l))*c;if((l+f-t)*c>1e-4)break;let g=l+f/2;is(n,g,i(g),d,a);for(let b of[-1,1])ni(n,l+f,i(l+f)+b*d*.46,d*.17),h&&ni(n,l,i(l)+b*d*.46,d*.17);h=!1,l+=f}}function Ol(n,e,t,{full:i=!1,dT:s=1.5,carre:r=!1,side:a="pave",every:o=1,big:c=!1}={}){let l=a==="rd",h=c?2.9:r?1.45:l?1.6:n.o.paveD==="small"&&a==="pave"?1.75:2.05,u=g=>{let b=sn(n,g);return Math.min(h,l?b*.42:b-.2)},d=g=>sn(n,g)-u(g)-.45;if(!Am(n,e,t,{hlOf:u,full:i,carre:r})||c)return;let f=(g,b)=>b*(u(g)+.45+d(g)/2);if(l)for(let g of[-1,1])Em(n,e,t,{zOf:b=>f(b,g),dOf:b=>Math.min(2.4,d(b)-.2),full:i});else if(d(i?0:e)>=1)for(let g of[-1,1])Is(n,e,t,{dT:s,full:i,cross:a==="tiers",every:o,uOf:b=>d(b)/2,zOf:b=>f(b,g)})}function Yy(n,e,t,i,{full:s=!1,dT:r=1.5}={}){let a=i==="ladder3"||i==="ladder3s"?3:2,o=i==="ladder2s"||i==="ladder3s",c=1.2,l=sn(n,s?0:e),h=i==="ladder2"&&l-2*Math.min(1.7,l*.33)-.4>=1,u=d=>{let f=sn(n,d);if(i==="ladder3"){let b=f/3-.2;return{hl:b,zc:[-(2*b+.4),0,2*b+.4],side:0}}if(o&&a===3){let b=(f-c/2-.05)*2/3;return{hl:(b-c-.65)/2,zc:[-b,0,b],rows:[-1.5*b,-.5*b,.5*b,1.5*b]}}if(o){let b=(2*f-3*(c+.25)-.8)/4,m=c/2+.325+b;return{hl:b,zc:[-m,m],rows:[-(f-c/2-.05),0,f-c/2-.05]}}if(!h){let b=f/2-.2;return{hl:b,zc:[-(b+.2),b+.2],side:0}}let g=Math.min(1.7,f*.33);return{hl:g,zc:[-(g+.2),g+.2],side:f-2*g-.4}};if(u(s?0:e).hl<.6){Is(n,e,t,{dT:r,full:s});return}for(let d=0;d<a;d++)Am(n,e,t,{zOf:f=>u(f).zc[d],hlOf:f=>u(f).hl,full:s,rails:i==="ladder3"?d===1?[0,0]:[1,1]:o||d===0?[1,1]:[0,1]});if(o)for(let d=0;d<=a;d++)Em(n,e,t,{zOf:f=>u(f).rows[d],dOf:()=>c,full:s});else if(h)for(let d of[-1,1])Is(n,e,t,{dT:r,full:s,uOf:f=>u(f).side/2,zOf:f=>d*(2*u(f).hl+.45+u(f).side/2)})}function Jy(n,e,t,{full:i=!1}={}){let{rg:s}=n,r=g=>{let b=sn(n,g),m=Math.max(1,Math.round(2*b/1.3)),p=2*b/m;return{u:b,n:m,w:p,sc:Math.min(.62,(p-.08)/2)}};if(r(i?0:e).u<1)return;let a=g=>4*r(g).sc+.42,o=dr(n,e,t,g=>r(g).sc>=.38?a(g):0,{full:i});if(!o.length)return;let c=i?1:Math.sign(t-e)||1,l=g=>i?o.step/2:a(g)/Xn(s,g)/2*c,h=g=>n.bars.push(on(Ln(s,[-1,-.5,0,.5,1].map(b=>[g,b*(sn(n,g)+.1)]),.1),.2,12));o.forEach((g,b)=>{let m=r(g);for(let p=0;p<m.n;p++){let _=Tn(s,g,(p-(m.n-1)/2)*m.w);cn(n,"bag2","side",m.sc,_.p.addScaledVector(_.n,-.03),ma(_.n,_.t),m.sc*4)}h(g+l(g)),b===0&&!i&&h(g-l(g))});let u=i?-Math.PI:o[0]-l(o[0]),d=i?Math.PI:o[o.length-1]+l(o[o.length-1]),f=Math.max(16,Math.round(Math.abs(d-u)*s.ro(0,0)/.4));for(let g of[-1,1]){let b=[];for(let m=0;m<=f;m++){let p=u+(d-u)*m/f;b.push([p,g*(sn(n,p)+.12)])}n.rims.push(on(Ln(s,b,.07),.19,Math.max(40,f)))}}function Zy(n,e,t,{full:i=!1}={}){let{rg:s}=n,r=sn(n,i?0:e);if(r<1)return;let a=Math.max(1,Math.round(2*r/2.5)),o=g=>{let b=sn(n,g),m=2*b/a;return{u:b,pz:m,sc:Math.min(.8,(m-.5)/2)}},c=dr(n,e,t,g=>{let b=o(g);return b.sc>=.45?4*b.sc+.1:0},{full:i});if(!c.length)return;let l=i?1:Math.sign(t-e)||1;for(let g of c){let b=o(g);for(let m=0;m<a;m++){let p=Tn(s,g,(m-(a-1)/2)*b.pz);cn(n,"bag2","side",b.sc,p.p.addScaledVector(p.n,-.03),ma(p.n,p.t),b.sc*4)}}let h=g=>i?c.step/2:(4*o(g).sc+.1)/Xn(s,g)/2*l,u=i?-Math.PI:c[0]-h(c[0]),d=i?Math.PI:c[c.length-1]+h(c[c.length-1]),f=Math.max(16,Math.round(Math.abs(d-u)*s.ro(0,0)/.4));for(let g=0;g<=a;g++){let b=[];for(let m=0;m<=f;m++){let p=u+(d-u)*m/f;b.push([p,(g-a/2)*o(p).pz])}n.rims.push(on(Ln(s,b,.07),.19,Math.max(40,f)))}if(!i)for(let g of[u,d])n.rims.push(on(Ln(s,[-1,0,1].map(b=>[g,b*o(g).u]),.07),.18,10))}function So(n,e,t,i=!1){let{rg:s,o:r}=n;if(r.edge==="none")return;let a=(h,u)=>s.hw(Math.abs(h))-Ps(s,h)-u;if(r.edge==="pave"){for(let h of[-1,1])Bl(n,e,t,{zOf:u=>h*a(u,Sd/2+.05),d:Sd,full:i});return}if(r.edge==="bevel"){for(let h of[-1,1]){let u=b=>{let m=Math.abs(b),p=s.hw(m),_=Ps(s,b),T=(s.ro(m,p)-_+s.ro(m,p-_))/2,x=new I(Math.sin(b),Math.cos(b),0);return{c:_,p:new I(x.x*T,x.y*T,h*(p-_/2)),n:x.clone().multiplyScalar(Math.SQRT1_2).add(new I(0,0,h*Math.SQRT1_2)),up:x.clone().multiplyScalar(-Math.SQRT1_2).add(new I(0,0,h*Math.SQRT1_2))}},d=b=>Math.min(1.25,u(b).c*Math.SQRT2-.45),f=dr(n,e,t,b=>d(b)>=.85?d(b)+.1:0,{full:i}),g=i?1:Math.sign(t-e)||1;f.forEach((b,m)=>{let p=u(b),_=d(b);cn(n,"round","accent",_/2,p.p.clone().addScaledVector(p.n,.04),gi(p.n),_);let T=i?f.step/2:(_+.1)/Xn(s,b)/2*g,x=v=>{let M=u(v);for(let A of[-1,1])n.bead.push([...M.p.clone().addScaledVector(M.up,A*_*.46).addScaledVector(M.n,_*.08).toArray(),_*.16])};x(b+T),m===0&&!i&&x(b-T)})}return}if(r.edge==="notch"){let h=i?-Math.PI:e,u=i?Math.PI:t,d=Math.abs(u-h)*s.ro(0,0),f=Math.max(3,Math.round(d/1.5));for(let g of[-1,1])for(let b=0;b<f+(i?0:1);b++){let m=h+(u-h)*b/f,p=Tn(s,m,g*a(m,.5)),_=new Xi(.85,.75,.95);_.deleteAttribute("uv"),_.applyMatrix4(new Ye().makeBasis(p.t,p.n,p.b).setPosition(p.p.clone().addScaledVector(p.n,.12)));let T=_.toNonIndexed();T.computeVertexNormals(),n.notch.push(T)}return}let o=i?-Math.PI:e,c=i?Math.PI:t,l=Math.abs(c-o)*s.ro(0,0);for(let h of[-1,1])if(r.edge==="rail"||r.edge==="band"){let u=r.edge==="band",d=Math.max(16,Math.round(l/.4)),f=[];for(let g=0;g<=d;g++){let b=o+(c-o)*g/d;f.push([b,h*a(b,u?1.3:.28)])}n.rims.push(on(Ln(s,f,u?.06:.1),u?.17:.24,Math.max(40,d)))}else{let u=Math.max(8,Math.round(l/.36));for(let d=0;d<u+(i?0:1);d++){let f=o+(c-o)*d/u;ni(n,f,h*a(f,.22),.15,.35)}}}function Qy(n,e,t,{dT:i=1.4}={}){let{rg:s}=n,r=Math.sign(t-e)||1,a=(e+t)/2,o=Xn(s,a),c=Math.abs(t-e)*o,l=Math.min(i,1.4),h=b=>e+r*b/o,u=b=>sn(n,h(b)),d=Math.min(2.6,u(c/2)*.55),f=l+.8,g=b=>{let m=u(b)+.1,p=[];for(let _=-8;_<=8;_++){let T=m*_/8,x=b-d*(Math.abs(T)/m);x>.05&&x<c&&p.push([h(x),T])}return p};for(let b=d+l/2+.25;b+l/2<=c+.05;b+=f){let m=u(b)-l/2;if(m<.2)break;let p=Math.atan(d/(m+l/2)),_=(l+.1)*Math.cos(p),T=Math.floor(m/_);for(let v=-T;v<=T;v++){let M=v*_;is(n,h(b-d*(Math.abs(M)/(m+l/2))),M,l)}let x=g(b-f/2);if(x.length>3&&n.bars.push(on(Ln(s,x,.1),.19,24)),b+f+l/2>c+.05){let v=g(b+f/2);v.length>3&&n.bars.push(on(Ln(s,v,.1),.19,24))}}}function Rm(n,e,t,i,s,r,a=!0,o=!0,c=0,l=!1){let h=i[0]-t[0],u=i[1]-t[1],d=Math.hypot(h,u)||1e-6,f=s/2/d,g=a?[t[0]-h*f,t[1]-u*f]:t,b=o?[i[0]+h*f,i[1]+u*f]:i,m=Math.max(2,Math.ceil((d+s)/.9)),p=[];for(let M=0;M<=m;M++){let A=M/m;p.push(Tn(n,e(g[0]+(b[0]-g[0])*A),g[1]+(b[1]-g[1])*A))}let _=p.map((M,A)=>{let y=p[Math.min(m,A+1)].p.clone().sub(p[Math.max(0,A-1)].p).normalize(),E=M.n.clone().cross(y).normalize().multiplyScalar(s/2),L=M.p.clone().addScaledVector(M.n,-.15),O=M.p.clone().addScaledVector(M.n,r),U=L.clone().sub(E),F=L.clone().add(E),D=O.clone().sub(E),k=O.clone().add(E);if(l){let he=r*Cm,J=[U,U];for(let se=0;se<=16;se++){let ie=se/16*Math.PI;J.push(M.p.clone().addScaledVector(M.n,he+(r-he)*Math.sin(ie)).addScaledVector(E,-Math.cos(ie)))}return J.push(F,F),J}if(!c)return[U,D,D,k,k,F,F,U];let V=1-c/(s/2),N=M.n.clone().multiplyScalar(-c),K=D.clone().add(N),P=k.clone().add(N),H=O.clone().addScaledVector(E,-V),X=O.clone().addScaledVector(E,V);return[U,K,K,H,H,X,X,P,P,F,F,U]}),T=_[0].length,x=M=>Array(T).fill(M.p.clone().addScaledVector(M.n,r/2)),v=[x(p[0]),_[0],..._,_[m],x(p[m])];return In(v.length,T,(M,A)=>v[M][A].toArray(),!1,!0)}var Cm=.4;function Pm(n,e,t,i,s,r=0,a=!1){let o=Tn(n,e(t[0]),t[1]),c=gi(o.n);if(a){let g=s*Cm,b=[new Ae(i/2,-.15)];for(let p=0;p<=8;p++){let _=p/8*(Math.PI/2);b.push(new Ae(Math.max(.001,i/2*Math.cos(_)),g+(s-g)*Math.sin(_)))}let m=new $r(b,20).toNonIndexed();return m.deleteAttribute("uv"),m.applyQuaternion(c),m.translate(o.p.x,o.p.y,o.p.z),m}let l=s-r+.15,h=new Kr(i/2,i/2,l,18).toNonIndexed();h.deleteAttribute("uv"),h.applyQuaternion(c);let u=o.p.clone().addScaledVector(o.n,l/2-.15);if(h.translate(u.x,u.y,u.z),!r)return h;let d=new Kr(i/2-r,i/2,r,18).toNonIndexed();d.deleteAttribute("uv"),d.applyQuaternion(c);let f=o.p.clone().addScaledVector(o.n,s-r/2);return d.translate(f.x,f.y,f.z),Wn([h,d])}function Im(n,e,t,i,s,r,a,{bv:o=0,dMax:c=1.1,rd:l=!1}={}){let{rg:h}=n,u=[],d=[];for(let f of xd[e]){let g=f.map(t),b=g.length-1,m=Math.hypot(f[0][0]-f[b][0],f[0][1]-f[b][1])<1e-6;for(let p=0;p<b;p++)u.push([g[p],g[p+1]]),d.push(Rm(h,i,g[p],g[p+1],s,r,!m&&p===0,!m&&p===b-1,o,l).toNonIndexed());for(let p=m?0:1;p<b;p++)d.push(Pm(h,i,g[p],s,r,o,l))}if(n.letter.push(...d),a==="bag"){let f=ln((s-.6)/2,.35,.8);for(let[g,b]of u){let m=Math.hypot(b[0]-g[0],b[1]-g[1]),p=Math.max(1,Math.floor((m+s*.5)/(4*f+.1))),_=Math.min(f,((m+s*.5)/p-.1)/4),T=Tn(h,i(b[0]),b[1]).p.sub(Tn(h,i(g[0]),g[1]).p).normalize();for(let x=0;x<p;x++){let v=(x+.5)/p,M=Tn(h,i(g[0]+(b[0]-g[0])*v),g[1]+(b[1]-g[1])*v);cn(n,"bag2","side",_,M.p.addScaledVector(M.n,r-.02),ma(M.n,T),_*4)}}}else if(a){let f=Math.min(c,s-.42-2*o),g=[];for(let[b,m]of u){let p=Math.hypot(m[0]-b[0],m[1]-b[1]),_=Math.max(1,Math.round(p/(f+.12)));for(let T=0;T<=_;T++){let x=[b[0]+(m[0]-b[0])*T/_,b[1]+(m[1]-b[1])*T/_];g.some(v=>Math.hypot(v[0]-x[0],v[1]-x[1])<f*.9)||(g.push(x),is(n,i(x[0]),x[1],f,"accent",r+.03))}}}return u}var Td=(n,e,t)=>{let i=1/0;for(let[s,r]of n){let a=r[0]-s[0],o=r[1]-s[1],c=ln(((e-s[0])*a+(t-s[1])*o)/(a*a+o*o||1),0,1);i=Math.min(i,Math.hypot(e-s[0]-a*c,t-s[1]-o*c))}return i};function eM(n,e,t,i,{dT:s=1.3}={}){let{rg:r,o:a}=n,o=Math.sign(t-e)||1,c=(e+t)/2,l=Xn(r,c),h=Math.abs(t-e)*l,u=y=>e+o*y/l,d=(sn(n,c)+sn(n,t))/2,f=Math.min(h-1.2,10),g=Math.min(2*d-1,f*.75);if(!xd[i]||f<4||g<2.6){Is(n,e,t,{dT:s});return}let b=ln(f*.19,1.15,1.6),m=.65,p=-o,T=Im(n,i,([y,E])=>[h/2+(3-E)/6*(f-b),p*((y-2)/4)*(g-b)],u,b,a.letterStone!=="off"?m:.8,a.letterStone==="bag"?"bag":a.letterStone==="on",{rd:a.letterStone==="off"}),x=(y,E)=>Td(T,y,E),v=Math.min(s,1.3),M=v+.1,A=new Set;for(let y=M/2+.1;y+v/2<=h;y+=M){let E=sn(n,u(y)),L=Math.max(1,Math.floor(2*E/M)),O=2*E/L;for(let U=0;U<L;U++){let F=(U-(L-1)/2)*O;if(!(x(y,F)<b/2+v/2+.12)){is(n,u(y),F,Math.min(v,O-.1));for(let[D,k]of[[-1,-1],[-1,1],[1,-1],[1,1]]){let V=y+D*M/2,N=F+k*O/2,K=`${Math.round(V*4)},${Math.round(N*4)}`;A.has(K)||x(V,N)<b/2+.25||V<.1||V>h||Math.abs(N)>E+.2||(A.add(K),ni(n,u(V),N,v*.16))}}}}}function tM(n,e,t){let{rg:i}=n,s=Math.sign(t-e)||1,r=(e+t)/2,a=Xn(i,r),o=Math.abs(t-e)*a,c=_=>e+s*_/a,l=_=>sn(n,c(_))+.1,h=1.25,u=Math.min(2.6,l(o/2)*.62),d=1.5,f=14,g=5;n.chev.push(In(f,g,(_,T)=>{let x=o*_/(f-1),v=l(x)*(-1+2*T/(g-1)),M=Tn(i,c(x),v);return M.p.addScaledVector(M.n,.06).toArray()},!1,!1).toNonIndexed());for(let _=d+u+h/2;_<=o-h*.3;_+=h+.12){let T=l(_-u/2);for(let x of[-1,1])n.chev.push(Rm(i,c,[_,0],[_-u,x*T],h,.55,!1,!1,h*.42).toNonIndexed());n.chev.push(Pm(i,c,[_,0],h,.55,h*.42))}let b=l(d/2)-.3,m=1,p=Math.max(1,Math.floor(2*b/(m+.12)));for(let _=0;_<p;_++)is(n,c(d/2),(_-(p-1)/2)*(m+.12),m)}function wd(n,e,t,i,s=!1,r=1){let a=Ld[n.o.paveD];if(e==="pave")Is(n,t,i,{dT:a,full:s});else if(e==="honey")Is(n,t,i,{dT:Math.min(a,1.5),honey:!0,full:s});else if(e==="grid")xm(n,t,i,{dT:a+.1,full:s});else if(e==="ladder"||e==="carre")Ol(n,t,i,{full:s,dT:Math.min(a,1.5),carre:e==="carre"});else if(e==="ladderRd")Ol(n,t,i,{full:s,side:"rd"});else if(e==="ladderBig")Ol(n,t,i,{full:s,big:!0});else if(e==="ladderT")Ol(n,t,i,{full:s,dT:Math.min(a,1.5),side:"tiers",every:n.o.tierRows});else if(e==="ladder2"||e==="ladder2s"||e==="ladder3"||e==="ladder3s")Yy(n,t,i,e,{full:s,dT:Math.min(a,1.5)});else if(e==="rows")xm(n,t,i,{dT:a+.1,full:s,cross:!1});else if(e==="tiersBag")Jy(n,t,i,{full:s});else if(e==="chevronPlain")tM(n,t,i);else if(e==="bagLong")Zy(n,t,i,{full:s});else if(e==="tiers")Is(n,t,i,{dT:a,full:s,cross:!0,every:n.o.tierRows});else if(e==="chevron")Qy(n,t,i,{dT:a});else if(e==="letter")eM(n,t,i,r>0?n.o.letter:n.o.letter2||n.o.letter,{dT:Math.min(a,1.3)});else if(e==="paveBig"){let o=sn(n,t),c=ln(o*.8,1.4,2.4),l=Math.min(1.4,o-c/2-.2);if(Bl(n,t,i,{zOf:()=>0,d:c,full:s}),l>=.85)for(let h of[-1,1])Bl(n,t,i,{zOf:()=>h*(c/2+.12+l/2),d:l,full:s})}So(n,t,i,s)}var Lm=(n,e,t,i=.2)=>{let s=new qa(t,i,8,32);return s.deleteAttribute("uv"),s.applyQuaternion(new Xt().setFromUnitVectors(kl,e)),s.translate(n.x,n.y,n.z),s};function nM(n){let{rg:e,o:t}=n,i={full:Math.PI,half:Math.PI/2,third:Math.PI/3}[t.cover],s=t.cover==="full",r=t.bandStones;if(r==="stations"||r==="flush"){let a=2*i*e.ro(0,0),o=r==="flush"?Math.max(3,Math.round(a/9.5)):Math.max(1,Math.round(a/12.5)),c=h=>s?h/o*nn:-i+(h+.5)/o*2*i,l=ln(2*sn(n,0)-(r==="flush"?2.2:.7),1.6,3);for(let h=0;h<o;h++){let u=c(h),{p:d,n:f}=Tn(e,u,0),g=d.addScaledVector(f,r==="flush"?.02:.22);cn(n,"round",r==="flush"?"accent":"side",l/2,g,gi(f),l),n.rims.push(Lm(g,f,l/2+(r==="flush"?.07:.2),r==="flush"?.09:.3))}if(r==="stations"){let h=(l/2+.75)/e.ro(0,0),u=Math.min(Ld[t.paveD],1.5),d=s?Array.from({length:o},(f,g)=>[c(g)+h,c(g)+nn/o-h]):[[-i,c(0)-h],...Array.from({length:o-1},(f,g)=>[c(g)+h,c(g+1)-h]),[c(o-1)+h,i]];for(let[f,g]of d)(g-f)*e.ro(0,0)>2.4&&Is(n,f,g,{dT:u,honey:t.bandW>=7})}So(n,-i,i,s);return}if(r==="plain"){So(n,-i,i,s);return}wd(n,r,-i,i,s)}function iM(n,e,t){let i=!1,s=1/0,r=n.length;for(let a=0,o=r-1;a<r;o=a++){let c=n[a],l=n[o];c[1]>t!=l[1]>t&&e<(l[0]-c[0])*(t-c[1])/(l[1]-c[1])+c[0]&&(i=!i);let h=l[0]-c[0],u=l[1]-c[1],d=ln(((e-c[0])*h+(t-c[1])*u)/(h*h+u*u||1),0,1);s=Math.min(s,Math.hypot(e-c[0]-h*d,t-c[1]-u*d))}return i?-s:s}function vm(n){let e=n.length,t=[0];for(let s=0;s<e;s++){let r=n[s],a=n[(s+1)%e];t.push(t[s]+Math.hypot(a[0]-r[0],a[1]-r[1]))}let i=t[e];return{L:i,at(s){let r=(s%i+i)%i,a=0;for(;a<e-1&&t[a+1]<r;)a++;let o=n[a],c=n[(a+1)%e],l=(r-t[a])/(t[a+1]-t[a]||1),h=c[0]-o[0],u=c[1]-o[1],d=Math.hypot(h,u)||1;return{p:[o[0]+h*l,o[1]+u*l],t:[h/d,u/d]}}}}function sM(n){let{rg:e,o:t,g:i}=n,s=["head","settings"].includes(t.twoTone)?":alt":"",r=xo(t.shape),a=t.centerD/2,o=-r.bottom*a,c=r.top*a,l=t.center==="letter",h=t.center==="stone",u=t.center==="plain",d=[],f=0,g=null,b=0,m=0,p=[],_=e.H,T=t.plinth==="on"&&(h||u)?ky:0,x=t.frame==="stepSq"&&ns(t)?1.1:0,v=e.cradle?_+Math.max(1,o+.6-e.tTop)+yd[t.headH]*.6:_+Math.max(T+x+(x?.95:1.45),o+.6-e.tTop)+yd[t.headH]*(t.setting==="bezel"?.5:1),M=(F,D)=>Tn(e,e.thOfX(F),D),A=(F,D)=>{let k=M(F,D);return k.p.addScaledVector(k.n,T),k};if(h||u){h&&cn(n,t.shape,"center",a,new I(0,v,0),null);let F=Nl(r.outline,144).map(({p:J,n:se})=>({p:[J[0]*a,J[1]*a],n:se})),D=F.map(J=>J.p),k=D.filter((J,se)=>se%2===0),V=J=>F.map(({p:se,n:ie})=>[se[0]+ie[0]*J,se[1]+ie[1]*J]),N=_+T-.35,K=Math.max(N,v-1.5);if(u)(ns(t)||T)&&Gt(i,In(k.length,4,(J,se)=>{let ie=[1,1,.82,0][se];return[k[J][0]*ie,_+T+[-.1,.4,.62,.7][se],k[J][1]*ie]},!0,!1),`metal:medal${t.faceField==="satin"?":satin":""}`);else if(t.setting==="bezel")Gt(i,_d(k,[[.14,K],[.14,v-.1],[-.22,v-.24],[-.7,K]]),`metal:seat${s}`),Gt(i,_d(k,[[.02,v+.03],[.1,v+.3],[.5,v+.24],[.62,N],[.14,N]]),`metal:bezel${s}`);else{let J=Fl(t.shape,t.setting==="prong6"?6:4),se=[],ie=ln(.055*t.centerD+.28,.55,.9)*(t.setting==="prong6"?.85:1);for(let pe of J){let q=pe.p[0]*a+pe.n[0]*ie*.72,R=pe.p[1]*a+pe.n[1]*ie*.72,W=v+c*.55+ie*.3,te=t.prongTip==="claw",ue=te?1.15:.62,le=[new I(q,M(q,R).p.y-(e.hole?.95:.4),R),new I(q,v-.2,R),new I(q-pe.n[0]*ie*.28,v+c*.3,R-pe.n[1]*ie*.28),new I(q-pe.n[0]*ie*ue,W,R-pe.n[1]*ie*ue)];se.push(te?Ul(le,fe=>ie*(fe<.66?1:1-.97*or((fe-.66)/.34)),12,28):on(le,ie,24))}Gt(i,Wn(se),`metal:prongs${s}`)}let P=ns(t);m=P;let H=yt-.05,X=(J,se,ie=!1)=>{let pe=vm(J),q=Math.max(4,Math.floor(pe.L/(se+.07))),R=pe.L/q;for(let W=0;W<q;W++){let{p:te,t:ue}=pe.at(W*R),le=A(te[0],te[1]);cn(n,"round","accent",se/2,le.p.clone().addScaledVector(le.n,.04),gi(le.n),se);let fe=pe.at((W+.5)*R);for(let me of[-1,1]){let Re=fe.p[0]-fe.t[1]*me*se*.47,Ie=fe.p[1]+fe.t[0]*me*se*.47,ze=A(Re,Ie);n.bead.push([...ze.p.addScaledVector(ze.n,se*.08).toArray(),se*.16])}}return ie},he=J=>{let se=[];for(let[pe,q,R,W]of[[J,-J,J,J],[J,J,-J,J],[-J,J,-J,-J],[-J,-J,J,-J]])for(let te=0;te<24;te++)se.push([pe+(R-pe)*te/24,q+(W-q)*te/24]);return se};if(t.frame==="halo"&&P)X(V(yt+P/2),P),H=yt+P+.1;else if(t.frame==="double"&&P)X(V(yt+P/2),P),X(V(yt+P*1.5+.1),P),H=yt+2*P+.2;else if(t.frame==="haloSq"&&P){let J=a+yt+P/2;X(he(J),P),H=J+P/2+.1-a,n.sqFrame=J+P/2+.1}else if(t.frame==="bagFrame"&&P){let J=Li(t)[0]/2+yt+P/2,se=a+yt+P/2,ie=Math.min(P+.15,1.9);for(let[R,W]of[[J,se],[-J,se],[-J,-se],[J,-se]]){let te=A(R,W);cn(n,"round","accent",ie/2,te.p.clone().addScaledVector(te.n,.04),gi(te.n),ie)}let pe=(R,W,te)=>{let ue=R-ie-.2,le=Math.max(1,Math.round(ue/(P*2+.08))),fe=ue/le-.08;for(let me=0;me<le;me++){let Re=-ue/2+(me+.5)*(ue/le),[Ie,ze]=W(Re),Qe=A(Ie,ze),tt=Math.min(P/2,fe/4);cn(n,"bag2","side",tt,Qe.p.clone().addScaledVector(Qe.n,0),ma(Qe.n,te),tt*4)}};pe(2*J,R=>[R,se],new I(1,0,0)),pe(2*J,R=>[R,-se],new I(1,0,0)),pe(2*se,R=>[J,R],kl),pe(2*se,R=>[-J,R],kl);let q=(R,W)=>{let te=[];for(let[le,fe,me,Re]of[[R,-W,R,W],[R,W,-R,W],[-R,W,-R,-W],[-R,-W,R,-W]])for(let Ie=0;Ie<16;Ie++){let ze=A(le+(me-le)*Ie/16,fe+(Re-fe)*Ie/16);te.push(ze.p.addScaledVector(ze.n,.1))}return te};for(let R of[-1,1])n.rims.push(vo(q(J+R*(P/2+.16),se+R*(P/2+.16)),.17,8));H=P+yt+.35,n.rectFrame=[J+P/2+.33,se+P/2+.33]}else if(t.frame==="bagRing"&&P){let J=a+yt,se=J+P/2,ie=P/3.2,pe=Math.max(8,Math.floor(nn*se/(1.62*ie+.07)));for(let R=0;R<pe;R++){let W=R/pe*nn,te=A(se*Math.cos(W),se*Math.sin(W));cn(n,"taperedBaguette","side",ie,te.p.clone(),ma(te.n,new I(-Math.cos(W),0,-Math.sin(W)),!0),P)}let q=R=>Array.from({length:64},(W,te)=>{let ue=te/64*nn,le=A(R*Math.cos(ue),R*Math.sin(ue));return le.p.addScaledVector(le.n,.1)});n.rims.push(vo(q(J-.1),.17,8),vo(q(J+P+.14),.17,8)),H=yt+P+.35,n.ringFrame=J+P+.3}else if(t.frame==="stepSq"&&P){let J=a+yt+P,se=a+yt+P*.42,ie=e.hole,pe=12,q=fe=>{let me=[];for(let[Re,Ie,ze,Qe]of[[fe,-fe,fe,fe],[fe,fe,-fe,fe],[-fe,fe,-fe,-fe],[-fe,-fe,fe,-fe]])for(let tt=0;tt<pe;tt++)me.push([Re+(ze-Re)*tt/pe,Ie+(Qe-Ie)*tt/pe]);return me},R=q(J),W=q(se),te=q(J+.35),ue=fe=>{if(!ie)return[fe[0]*.3,fe[1]*.3];let me=Math.min(ie.hx/Math.max(Math.abs(fe[0]),1e-6),ie.hz/Math.max(Math.abs(fe[1]),1e-6));return[fe[0]*me,fe[1]*me]},le=[[te,-.3],[R,.55],[R,.55],[W,.55],[W,.55],[W,1.1],[W,1.1],[W.map(ue),1.1],[W.map(ue),1.1],[W.map(ue),ie?-.2:1.1]];Gt(i,In(R.length,le.length,(fe,me)=>{let[Re,Ie]=le[me],ze=M(Re[fe][0],Re[fe][1]);return ze.p.addScaledVector(ze.n,T+Ie).toArray()},!0,!1),`metal:stepsq${s}`),H=P+yt+.4,n.sqFrame=J+.4}else if(t.frame==="star"&&P){let J=Fl(t.shape,t.setting==="prong6"?6:4),se=J.length,ie=Math.atan2(J[0].p[1],J[0].p[0]),pe=a+yt+P,q=a+.55,R=e.hole,W=5,te=[];for(let me=0;me<se;me++){let Re=ie+me*nn/se,Ie=Re+Math.PI/se,ze=Re+nn/se,Qe=[q*Math.cos(Re),q*Math.sin(Re)],tt=[pe*Math.cos(Ie),pe*Math.sin(Ie)],Pt=[q*Math.cos(ze),q*Math.sin(ze)];for(let ct=0;ct<W;ct++)te.push([Qe[0]+(tt[0]-Qe[0])*ct/W,Qe[1]+(tt[1]-Qe[1])*ct/W]);for(let ct=0;ct<W;ct++)te.push([tt[0]+(Pt[0]-tt[0])*ct/W,tt[1]+(Pt[1]-tt[1])*ct/W])}let ue=me=>{let Re=Math.hypot(me[0],me[1])||1,Ie=R?Math.min(R.hx,R.hz)*.98:.2;return[me[0]/Re*Ie,me[1]/Re*Ie]},le=(me,Re)=>[me[0]*Re,me[1]*Re],fe=[[te,-.3,1],[te,.5,1],[te,.5,1],[te,.75,.9],[te,.75,.9],[te.map(ue),.75,1],[te.map(ue),.75,1],[te.map(ue),R?-.2:.75,1]];Gt(i,In(te.length,fe.length,(me,Re)=>{let[Ie,ze,Qe]=fe[Re],tt=le(Ie[me],Qe),Pt=M(tt[0],tt[1]);return Pt.p.addScaledVector(Pt.n,T+ze).toArray()},!0,!1),`metal:star${s}:shade`),H=P+yt+.2,n.starPoly=te.map(me=>le(me,1.06))}if(T){let J=([R,W])=>{let te=e.La-.18,ue=ln(R,-te,te),le=Ii(t)?e.W/2-Cs+.3:e.hw(Math.abs(e.thOfX(ue)))-.22;return[ue,ln(W,-le,le)]},se=(R,W)=>{let te=[];for(let[le,fe,me,Re]of[[R,-W,R,W],[R,W,-R,W],[-R,W,-R,-W],[-R,-W,R,-W]])for(let Ie=0;Ie<18;Ie++)te.push([le+(me-le)*Ie/18,fe+(Re-fe)*Ie/18]);return te},ie=n.rectFrame?se(n.rectFrame[0]+.12,n.rectFrame[1]+.12):n.sqFrame?se(n.sqFrame+.2,n.sqFrame+.2):n.ringFrame?Array.from({length:72},(R,W)=>[(n.ringFrame+.05)*Math.cos(W/72*nn),(n.ringFrame+.05)*Math.sin(W/72*nn)]):n.starPoly?Array.from({length:72},(R,W)=>[(a+yt+P+.25)*Math.cos(W/72*nn),(a+yt+P+.25)*Math.sin(W/72*nn)]):V(t.frame==="none"?yt+.75:H+.22).filter((R,W)=>W%2===0),pe=R=>{let W=Math.hypot(R[0],R[1])||1;return[R[0]*(1+.5/W),R[1]*(1+.5/W)]},q=e.hole;if(q){let R=fe=>{let me=Math.min(q.hx/Math.max(Math.abs(fe[0]),1e-6),q.hz/Math.max(Math.abs(fe[1]),1e-6));return[fe[0]*me,fe[1]*me]};Gt(i,In(ie.length,4,(fe,me)=>{let Re=me===0?J(pe(ie[fe])):me<=2?J(ie[fe]):R(ie[fe]),Ie=M(Re[0],Re[1]);return Ie.p.addScaledVector(Ie.n,me===0?-.3:T).toArray()},!0,!1),"metal:plinth");let W=In(ie.length,2,(fe,me)=>{let Re=R(ie[fe]),Ie=M(Re[0],Re[1]);return Ie.p.addScaledVector(Ie.n,me===0?T:0).toArray()},!0,!1),te=W.attributes.normal,ue=W.attributes.position,le=0;for(let fe=0;fe<te.count;fe++)le+=te.getX(fe)*ue.getX(fe)+te.getZ(fe)*ue.getZ(fe);if(le>0){let fe=Array.from(W.index.array);for(let me=0;me<fe.length;me+=3){let Re=fe[me+1];fe[me+1]=fe[me+2],fe[me+2]=Re}W.setIndex(fe),W.computeVertexNormals()}Gt(i,W,"metal:plinthwall:satin:shade")}else Gt(i,In(ie.length,5,(R,W)=>{let te=W===3?.5:W===4?0:1,ue=J(W===0?pe(ie[R]):ie[R]),le=M(ue[0]*te,ue[1]*te);return le.p.addScaledVector(le.n,W===0?-.3:T).toArray()},!0,!1),"metal:plinth");H+=.75,n.rectFrame&&(n.rectFrame=n.rectFrame.map(R=>R+.65)),n.sqFrame&&(n.sqFrame+=.7),n.ringFrame&&(n.ringFrame+=.6),n.starPoly&&(n.ringFrame=a+yt+P+.9,n.starPoly=null)}d=D,f=H}else if(l){let F=t.top==="round"?.74:t.top==="octagon"?.9:Gl(t),D=Mm(t),k=(t.faceLen==="tight"?e.La:e.La*F)-.95,V=t.letterTurn==="on",N=Sm(t),K=N?2*k:V?Math.min(2*k,2*D/.84):2*D,P=N?2*D+1:Math.min(V?2*D:2*k,K*.84);b=ln((N?P:K)*.23,1.7,2.3);let H=t.letterStone!=="off",X=V?([he,J])=>[(J-3)/6*(K-b),(he-2)/4*(P-b)]:([he,J])=>[(he-2)/4*(P-b),-((J-3)/6)*(K-b)];if(g=Im(n,t.faceLetter,X,e.thOfX,b,H?1:1.15,t.letterStone==="bag"?"bag":H,{bv:H?.12:0,dMax:1.5,rd:!H}),t.faceField==="satin"&&t.facePave!=="on"){let he=e.La-.5,J=pe=>Ii(t)?e.W/2-Cs-.1:Math.max(e.faceHw(pe),e.Ws/2)-e.c-.5,se=49,ie=9;Gt(i,In(se,ie,(pe,q)=>{let R=-he+2*he*pe/(se-1),W=J(R)*(-1+2*q/(ie-1)),te=M(R,W);return te.p.addScaledVector(te.n,.07).toArray()},!1,!1),"metal:field:satin")}}if(Ii(t)){let F=2*e.La-.2,D=.56,k=F-.5,V=Math.max(1,Math.floor(k/(5.2*D+.1))),N=k/V,K=Math.min(D,(N-.1)/5.2),P=_+.35,H=[];for(let X of[-1,1]){let he=X*(e.W/2-Cs/2),J=new Xi(F,.9,Cs-.1);J.deleteAttribute("uv"),J.translate(0,P-.45,he);let se=J.toNonIndexed();se.computeVertexNormals(),H.push(se);for(let ie=0;ie<V;ie++)cn(n,"baguette","side",K,new I(-k/2+(ie+.5)*N,P+.02,he),null,5.2*K);for(let ie of[-1,1]){let pe=he+ie*(K+.2);n.rims.push(on([new I(-F/2+.2,P+.05,pe),new I(0,P+.05,pe),new I(F/2-.2,P+.05,pe)],.17,16))}for(let ie of[-1,1]){let pe=ie*(F/2-.2);n.rims.push(on([new I(pe,P+.05,he-K-.2),new I(pe,P+.05,he),new I(pe,P+.05,he+K+.2)],.17,8))}}Gt(i,Wn(H),"metal:facebar")}if(t.corners!=="off"&&e.flat&&t.top==="square"){let F=Ii(t)?e.W/2-Cs-.1:e.W/2-e.c-.25,D=e.La-.3,k=(V,N,K)=>{let P=K/2+.3;if(l)return Td(g,V,N)>b/2+P;if(u&&!m&&!T)return!0;if(n.starPoly)return Math.hypot(V,N)>Math.hypot(n.starPoly[0][0],n.starPoly[0][1])+m+P;if(n.ringFrame)return Math.hypot(V,N)>n.ringFrame+P;if(n.rectFrame)return V>n.rectFrame[0]+P||N>n.rectFrame[1]+P;if(n.sqFrame)return Math.max(V,N)>n.sqFrame+P;let H=1/0;for(let X of d)H=Math.min(H,Math.hypot(V-X[0],N-X[1]));return H>Math.max(f,T?yt+.8:0)+P-.2};if(t.corners==="row"){let V=n.rectFrame?n.rectFrame[0]:n.sqFrame||n.ringFrame||Li(t)[0]/2+Math.max(f,T?yt+.8:.3);for(let N of[2.3,2.1,1.9,1.7,1.5]){let K=D-N/2+.05,P=N+.15;if(!(K-N/2<V+.08||P+N/2>F-.9)){for(let H of[-1,1]){for(let X of[-1,0,1]){let he=M(H*K,X*P);cn(n,"round","accent",N/2,he.p.clone().addScaledVector(he.n,.04),gi(he.n),N),p.push([H*K,X*P,N+.15])}for(let X of[-1.5,-.5,.5,1.5])for(let he of[-1,1]){let J=M(H*K+he*N*.47,X*P);n.bead.push([...J.p.addScaledVector(J.n,.1).toArray(),N*.13])}}break}}}else for(let V of[2,1.6,1.3]){let N=D-V/2-.3,K=F-V/2-.3;if(!(N<1||K<1||!k(N,K,V))){for(let[P,H]of[[1,1],[-1,1],[-1,-1],[1,-1]]){let X=M(P*N,H*K),he=X.p.clone().addScaledVector(X.n,.18);cn(n,"round","side",V/2,he,gi(X.n),V),n.rims.push(Lm(he,X.n,V/2+.16,.24)),p.push([P*N,H*K,V+.5])}break}}}if(t.facePave==="on"){let V=e.c+.3+.575,N=(se,ie)=>{if(p.some(R=>Math.hypot(se-R[0],ie-R[1])<R[2]/2+1.15/2+.25))return!1;if(l)return Td(g,se,ie)>b/2+1.15/2+.4;if(u&&!m&&!T)return!0;if(n.starPoly)return iM(n.starPoly,se,ie)>1.15/2+.05;if(n.ringFrame)return Math.hypot(se,ie)>n.ringFrame+1.15/2;if(n.rectFrame)return Math.abs(se)>n.rectFrame[0]+1.15/2||Math.abs(ie)>n.rectFrame[1]+1.15/2;if(n.sqFrame)return Math.max(Math.abs(se),Math.abs(ie))>n.sqFrame+1.15/2;let pe=1/0;for(let R of d){let W=Math.hypot(se-R[0],ie-R[1]);W<pe&&(pe=W)}return!(Math.hypot(se/(Li(t)[0]/2),ie/a)<1)&&pe>Math.max(f,t.frame==="none"&&T?yt+.8:0)+1.15/2+.05},K=new Set,P=(se,ie)=>`${se},${ie}`,H=Math.ceil(e.La/1.25)+1,X=Math.ceil(e.W/2/1.1)+1,he=(se,ie)=>[(se+(ie%2?.5:0))*1.25,ie*1.1],J=(se,ie)=>!(Ii(t)&&Math.abs(ie)>e.W/2-Cs-1.15/2-.1)&&Math.abs(se)<=e.La-.35-1.15/2&&Math.abs(ie)<=e.hw(Math.abs(e.thOfX(se)))-V+.05&&N(se,ie);for(let se=-H;se<=H;se++)for(let ie=-X;ie<=X;ie++){let[pe,q]=he(se,ie);if(!J(pe,q))continue;K.add(P(se,ie));let R=M(pe,q);cn(n,"round","accent",1.15/2,R.p.clone().addScaledVector(R.n,.04),gi(R.n),1.15)}for(let se of K){let[ie,pe]=se.split(",").map(Number),[q,R]=he(ie,pe);for(let W of[-1,1]){let te=q+.625,ue=R+W*1.1/3;if(Math.abs(te)<e.La-.3){let le=M(te,ue);n.bead.push([...le.p.addScaledVector(le.n,.1).toArray(),.16])}}}}if(t.rim!=="none"&&Vl(t)){let F=[],k=N=>Math.max(e.faceHw(N),e.Ws/2)-e.c-.22,V=e.La-.3;for(let N=0;N<=40;N++){let K=-V+2*V*N/40;F.push([K,k(K)])}for(let N=1;N<8;N++)F.push([V,k(V)*(1-2*N/8)]);for(let N=0;N<=40;N++){let K=V-2*V*N/40;F.push([K,-k(K)])}for(let N=1;N<8;N++)F.push([-V,-k(V)*(1-2*N/8)]);if(t.rim==="rail")n.rims.push(vo(F.map(([N,K])=>{let P=M(N,K);return P.p.addScaledVector(P.n,.08)}),.22,8));else{let N=vm(F),K=Math.round(N.L/.36);for(let P=0;P<K;P++){let{p:H}=N.at(P*N.L/K),X=M(H[0],H[1]);n.bead.push([...X.p.addScaledVector(X.n,.05).toArray(),.15])}}}let y={short:.42,mid:.68,long:1}[t.shoulderLen],E=e.step?e.aStep-.03:e.aS+6*ts,L=.45/e.ro(e.aF,0),O=e.aF+(e.flat?L:L*.4),U=O+(E-O)*y;if(t.center==="run")wd(n,t.shoulder,-U,U,!1,1);else if(t.shoulder!=="plain")for(let F of[1,-1])wd(n,t.shoulder,F*O,F*U,!1,F);else if(t.corners==="row"&&["pave","rail","band","milgrain"].includes(t.edge))So(n,-U,U);else for(let F of[1,-1])So(n,F*O,F*U);if(t.shankDeco==="flutes"){let F=U+.03,D=nn-U-.03,k=64;for(let V of[-.74,-.37,.37,.74]){let N=[];for(let K=0;K<=k;K++){let P=F+(D-F)*K/k;P>Math.PI&&(P-=nn),N.push([P,V*(e.hw(Math.abs(P))-Ps(e,P))])}n.flutes.push(on(Ln(e,N,.02),.14,90))}}if(t.shankDeco==="pave")for(let F of[1,-1]){let D=U+.06,k=162*ts,V=P=>Math.min(1.6-.6*ln((P-D)/(k-D),0,1),2*(e.hw(P)-Ps(e,P))-1),N=D,K=[[],[]];for(let P=0;P<80;P++){let H=V(N);if(H<.85)break;let X=(H+.1)/Xn(e,N);if(N+X>k)break;is(n,F*(N+X/2),0,H);for(let he of[-1,1])ni(n,F*(N+X),he*H*.45,H*.16),N===D&&ni(n,F*N,he*H*.45,H*.16);N+=X}if(N>D){for(let H=0;H<=28;H++){let X=D-.02+(N-D+.04)*H/28,he=V(X)/2+.3;K[0].push([F*X,he]),K[1].push([F*X,-he])}for(let H of K)n.rims.push(on(Ln(e,H,.05),.15,40))}}if(t.shankDeco==="milgrain"){let F=U+.03,D=nn-U-.03,k=Math.round((D-F)*e.R/.34);for(let V of[-.55,.55])for(let N=0;N<=k;N++){let K=F+(D-F)*N/k;K>Math.PI&&(K-=nn),ni(n,K,V*(e.hw(Math.abs(K))-Ps(e,K)),.14,.35)}}if(t.flank!=="plain"){let F={pave3:3,pave2:2,pave1:1}[t.flank]||0,D=1.3,k=.12,V=P=>e.ro(P,e.hw(P))-Ps(e,P)-e.ri(P),N=(P,H,X)=>{let he=Math.abs(P),J=e.ri(he)+V(he)-X;return new I(Math.sin(P)*J,Math.cos(P)*J,H*e.hw(he))},K=(P,H)=>{let X=V(P)-.3,he=.15;for(let J=0;J<=H;J++){let se=Math.min(D,X);if(se<.85)return null;if(J===H)return{d:se,off:he+se/2};he+=se+k,X-=se+k}return null};for(let P of[-1,1])for(let H=0;H<F;H++){let X=-U,he=null;for(let J=0;J<400&&X<=U;J++){let se=Math.abs(X),ie=K(se,H);if(!ie){he=null,X+=.5/e.R;continue}let{d:pe,off:q}=ie,R=N(X,P,q),W=N(X+.001,P,q).distanceTo(N(X-.001,P,q))/.002,te=N(X+.001,P,q).sub(N(X-.001,P,q)).normalize(),ue=new I(Math.sin(X),Math.cos(X),0),le=te.clone().cross(ue).normalize();if(le.z*P<0&&le.negate(),cn(n,"round","accent",pe/2,R.clone().addScaledVector(le,.04),gi(le),pe),he!=null){let fe=(X+he.a)/2,me=Math.min(pe,he.d),Re=N(fe,P,q),Ie=new I(Math.sin(fe),Math.cos(fe),0);for(let ze of[-1,1])n.bead.push([...Re.clone().addScaledVector(Ie,ze*me*.47).addScaledVector(le,.08).toArray(),me*.15])}he={a:X,d:pe},X+=(pe+.1)/W}}for(let P of[-1,1])for(let H=-U;H<=U;H+=.36/e.R){let X=V(Math.abs(H));if(!F){if(X>=.9){let pe=N(H,P,.32);n.bead.push([pe.x,pe.y,pe.z+P*.04,.13])}if(X<1.5)continue;let ie=N(H,P,X-.42);n.bead.push([ie.x,ie.y,ie.z+P*.04,.13]);continue}let he=.15,J=0;for(let ie=0;ie<F;ie++){let pe=K(Math.abs(H),ie);if(!pe)break;he=pe.off+pe.d/2,J++}if(!J||X-he<.6)continue;let se=N(H,P,X-.42);n.bead.push([se.x,se.y,se.z+P*.04,.13])}}}function rM(n){let{rg:e,o:t,g:i}=n;if(e.band||!e.cav)return;let s=e.R,r=.25,a=(e.cav.aH-.03)*s,o=g=>e.hw(Math.abs(g/s))-e.wt+.14,c=(g,b)=>Math.abs(g)<=a&&Math.abs(b)<=o(g),l=(g,b)=>{let m=g/s,p=e.ri(Math.abs(m))+r;return new I(Math.sin(m)*p,Math.cos(m)*p,b)},h=[],u=g=>{g.length>=2&&h.push(Ul(g.map(([b,m])=>l(b,m)),()=>r,6,Math.max(2,g.length)))},d=(g,b)=>{let m=Math.hypot(b[0]-g[0],b[1]-g[1]),p=Math.max(1,Math.ceil(m/.5)),_=[];for(let T=0;T<=p;T++){let x=[g[0]+(b[0]-g[0])*T/p,g[1]+(b[1]-g[1])*T/p];c(x[0],x[1])?_.push(x):(u(_),_=[])}u(_)},f=e.W/2+1;if(t.lattice==="ong"){let b=Math.sqrt(3)*1.3,m=new Set,p=_=>`${Math.round(_[0]*20)},${Math.round(_[1]*20)}`;for(let _=-Math.ceil(f/(1.5*1.3));_<=Math.ceil(f/(1.5*1.3));_++)for(let T=-Math.ceil(a/b)-1;T<=Math.ceil(a/b)+1;T++){let x=(T+(_%2?.5:0))*b,v=_*1.5*1.3,M=Array.from({length:6},(A,y)=>[x+1.3*Math.sin(y*Math.PI/3),v+1.3*Math.cos(y*Math.PI/3)]);for(let A=0;A<6;A++){let y=M[A],E=M[(A+1)%6],L=[p(y),p(E)].sort().join("|");m.has(L)||(m.add(L),d(y,E))}}}else{let g=(t.lattice==="x"?3.3:2.5)*Math.SQRT2,b=Math.ceil((a+f)/g)+1;for(let m=-b;m<=b;m++)for(let p of[-1,1])d([-a,p*(-a-m*g)],[a,p*(a-m*g)]);if(t.lattice==="x")for(let m=-Math.ceil(f/(g/2));m<=Math.ceil(f/(g/2));m++)d([-a,m*g/2],[a,m*g/2])}h.length&&Gt(i,Wn(h),"metal:lattice")}var aM=new zt,ym={serif:'600 112px "Cormorant Garamond", Georgia, serif',script:'120px "Pinyon Script", cursive'};function oM(n,e){let t=document.createElement("canvas"),i=t.getContext("2d"),s=120,r=ym[e]||ym.serif;i.font=r;let a=Math.ceil(i.measureText(n).width+s*.6);t.width=Math.min(4096,a),t.height=Math.round(s*1.35),i.font=r,i.fillStyle="#fff",i.strokeStyle="#fff",i.lineJoin="round",i.lineWidth=s*.03,i.textBaseline="middle",i.textAlign="center",i.fillText(n,t.width/2,t.height*.55),i.strokeText(n,t.width/2,t.height*.55);let o=new gs(t);return o.anisotropy=8,{tex:o,aspect:t.width/t.height}}function cM(n,e,t){let i=String(t.engrave||"").trim();if(!i||typeof document>"u")return;let{tex:s,aspect:r}=oM(i,t.engraveFont),a=e.ri(Math.PI),o=ln(.62*e.hw(Math.PI),1.3,2.8),c=o*r/a,l=140*ts;c>l&&(o*=l/c,c=l);let h=96,u=6,d=new Float32Array(h*u*3),f=new Float32Array(h*u*2),g=0,b=0;for(let T=0;T<h;T++)for(let x=0;x<u;x++){let v=T/(h-1),M=x/(u-1),A=Math.PI+c/2-v*c,y=a-.006;d[g++]=Math.sin(A)*y,d[g++]=Math.cos(A)*y,d[g++]=o/2-M*o,f[b++]=v,f[b++]=M}let m=[];for(let T=0;T<h-1;T++)for(let x=0;x<u-1;x++){let v=T*u+x,M=(T+1)*u+x;m.push(v,M,M+1,v,M+1,v+1)}let p=new dt;p.setAttribute("position",new gt(d,3)),p.setAttribute("uv",new gt(f,2)),p.setIndex(m),p.computeVertexNormals();let _=new St(p,aM);_.name="metal:engrave:m",_.userData.ownGeo=!0,_.userData.alphaMap=s,n.add(_)}function Hl(n){let e=ur(n),t=new pn,i=Wy(e),s=Ky(t,i,e),r=e.finish==="nham"?":satin":e.finish==="chai"?":brush":"",a=jy(i);Gt(t,a,`metal:band${r}`),a.userData.walls&&Gt(t,a.userData.walls,"metal:holewall:satin:shade"),i.band?nM(s):(sM(s),rM(s)),cM(t,i,e);let o=e.twoTone==="settings"?":alt":"";s.bead.length&&Gt(t,bm(s.bead,.16,7),`metal:beads${o}`),s.rims.length&&Gt(t,Wn(s.rims.map(l=>(l.deleteAttribute?.("uv"),l))),`metal:rims${o}`),s.bars.length&&Gt(t,Wn(s.bars),`metal:bars${o}`),s.flutes.length&&Gt(t,Wn(s.flutes),"metal:flutes"),s.notch.length&&Gt(t,Wn(s.notch),"metal:notch"),s.chev.length&&Gt(t,Wn(s.chev),`metal:chevron${e.twoTone==="shoulder"?":alt":""}`),s.letter.length&&Gt(t,Wn(s.letter),`metal:letter${e.twoTone==="letter"?":alt":""}`);let c={};for(let[l,h,u]of s.list){let d=`${l}|${h}|${u}`;c[d]=(c[d]||0)+1}return t.userData.stats={accent:s.cnt.accent,side:s.cnt.side,sizes:c},t}var Dm=n=>{let e=Hl(n),t=e.userData.stats;return e.traverse(i=>{i.isMesh&&i.userData.ownGeo&&i.geometry.dispose()}),t};var Nm={"nhan-nam-h-tg01":{app:"nhan-nam",ten:"Nh\u1EABn Nam H TG01",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"flat",face:"plate",faceLen:"full",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"mid",plinth:"on",frame:"haloSq",faceBars:"off",facePave:"on",corners:"off",rim:"none",flank:"plain",edge:"none",shank:"taper",bottomW:8,shankDeco:"none",lattice:"x",twoTone:"letter",paveD:"small",tierRows:1,height:"high",shoulderLen:"long",finish:"bong",metal:"vang-trang",metal2:"vang-hong",faceW:13.5,centerD:6.5,shoulder:"letter",letter:"H",letterStone:"on"}},"nhan-nam-t-tg02":{app:"nhan-nam",ten:"Nh\u1EABn Nam T TG02",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"flat",face:"plate",faceLen:"full",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"mid",plinth:"on",frame:"haloSq",faceBars:"off",facePave:"on",corners:"off",rim:"none",flank:"plain",edge:"none",shank:"taper",bottomW:8,shankDeco:"none",lattice:"x",twoTone:"letter",paveD:"small",tierRows:1,height:"high",shoulderLen:"long",finish:"bong",metal:"vang-trang",metal2:"vang-hong",faceW:13.5,centerD:6.5,shoulder:"letter",letter:"T",letterStone:"on"}},"nhan-nam-tg03":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG03",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"flat",face:"cradle",faceLen:"full",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"mid",plinth:"off",frame:"none",faceBars:"off",facePave:"off",corners:"off",rim:"none",flank:"plain",edge:"none",shank:"taper",bottomW:10,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"small",tierRows:1,height:"high",shoulderLen:"mid",finish:"bong",metal:"vang-trang",metal2:"vang-hong",faceW:10,centerD:10,shoulder:"ladder"}},"nhan-nam-vertu-tg04":{app:"nhan-nam",ten:"Nh\u1EABn Nam Vertu TG04",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"flat",face:"plate",faceLen:"full",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"low",plinth:"off",frame:"stepSq",faceBars:"off",facePave:"off",corners:"off",rim:"none",flank:"plain",edge:"notch",shank:"taper",bottomW:8,shankDeco:"none",lattice:"x",twoTone:"shoulder",paveD:"mid",tierRows:1,height:"mid",shoulderLen:"mid",finish:"bong",metal:"vang-trang",metal2:"vang-hong",faceW:12,centerD:6.5,shoulder:"chevronPlain"}},"nhan-nam-tg05":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG05",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"flat",face:"plate",faceLen:"full",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"mid",plinth:"off",frame:"bagFrame",faceBars:"off",facePave:"on",corners:"off",rim:"none",flank:"plain",edge:"none",shank:"taper",bottomW:10,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"small",tierRows:2,height:"high",shoulderLen:"mid",finish:"bong",metal:"vang-trang",metal2:"vang-hong",faceW:13.5,centerD:6.5,shoulder:"ladderT"}},"nhan-nam-tg06":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG06",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"flat",face:"plate",faceLen:"full",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"mid",plinth:"on",frame:"haloSq",faceBars:"off",facePave:"on",corners:"off",rim:"none",flank:"plain",edge:"bevel",shank:"taper",bottomW:8,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"big",tierRows:1,height:"high",shoulderLen:"long",finish:"bong",metal:"vang-trang",metal2:"vang-hong",faceW:13.5,centerD:6.5,shoulder:"rows"}},"nhan-nam-tg07":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG07",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"flat",face:"plate",faceLen:"full",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"high",plinth:"on",frame:"haloSq",faceBars:"on",facePave:"off",corners:"off",rim:"none",flank:"pave2",edge:"none",shank:"taper",bottomW:8,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"mid",tierRows:1,height:"high",shoulderLen:"long",finish:"bong",metal:"vang-trang",metal2:"vang-hong",faceW:13.5,centerD:6.5,shoulder:"ladder"}},"nhan-nam-tg08":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG08",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"flat",face:"plate",faceLen:"full",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"high",plinth:"on",frame:"haloSq",faceBars:"on",facePave:"off",corners:"off",rim:"none",flank:"pave2",edge:"bevel",shank:"taper",bottomW:8,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"big",tierRows:1,height:"high",shoulderLen:"long",finish:"bong",metal:"vang-trang",metal2:"vang-hong",faceW:13.5,centerD:7.2,shoulder:"ladder"}},"nhan-nam-tg09":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG09",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"flat",face:"plate",faceLen:"full",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"low",plinth:"off",frame:"stepSq",faceBars:"off",facePave:"off",corners:"row",rim:"none",flank:"plain",edge:"pave",shank:"taper",bottomW:10,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"mid",tierRows:1,height:"high",shoulderLen:"long",finish:"bong",metal:"vang-hong",metal2:"vang-trang",faceW:12,centerD:6,shoulder:"plain"}},"nhan-nam-tg10":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG10",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"flat",face:"plate",faceLen:"full",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"mid",plinth:"on",frame:"haloSq",faceBars:"off",facePave:"on",corners:"off",rim:"none",flank:"plain",edge:"none",shank:"taper",bottomW:8,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"small",tierRows:1,height:"high",shoulderLen:"long",finish:"bong",metal:"vang-hong",metal2:"vang-trang",faceW:13.5,centerD:6.5,shoulder:"chevron"}},"nhan-nam-tg11":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG11",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"octagon",dome:"flat",face:"plate",faceLen:"tight",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"mid",plinth:"on",frame:"halo",faceBars:"off",facePave:"off",corners:"off",rim:"none",flank:"plain",edge:"band",shank:"taper",bottomW:8,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"mid",tierRows:1,height:"high",shoulderLen:"mid",finish:"bong",metal:"vang",metal2:"vang-trang",faceW:13.5,centerD:7.2,shoulder:"ladder"}},"nhan-nam-tg13":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG13",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"flat",face:"cradle",faceLen:"full",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"mid",plinth:"off",frame:"none",faceBars:"off",facePave:"off",corners:"off",rim:"none",flank:"plain",edge:"band",shank:"taper",bottomW:8,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"mid",tierRows:1,height:"high",shoulderLen:"mid",finish:"bong",metal:"vang-hong",metal2:"vang-trang",faceW:10,centerD:9,shoulder:"ladderBig"}},"nhan-nam-tg14":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG14",cfg:{type:"band",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"flat",face:"plate",faceLen:"full",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"mid",plinth:"off",frame:"none",faceBars:"off",facePave:"off",corners:"off",rim:"none",flank:"plain",edge:"none",shank:"taper",bottomW:6,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"small",tierRows:1,height:"high",shoulderLen:"long",finish:"bong",metal:"vang-trang",metal2:"vang-hong",bandW:6,bandProfile:"flat",bandStones:"stations",cover:"full"}},"nhan-nam-tg15":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG15",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"bombe",face:"plate",faceLen:"full",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"mid",plinth:"on",frame:"haloSq",faceBars:"off",facePave:"on",corners:"off",rim:"none",flank:"plain",edge:"none",shank:"taper",bottomW:8,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"mid",tierRows:2,height:"high",shoulderLen:"long",finish:"bong",metal:"vang-trang",metal2:"vang-hong",faceW:15,centerD:7.2,shoulder:"ladderT"}},"nhan-nam-tg16":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG16",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"flat",face:"plate",faceLen:"full",center:"run",shape:"round",setting:"prong4",prongTip:"round",headH:"mid",plinth:"off",frame:"none",faceBars:"off",facePave:"off",corners:"off",rim:"none",flank:"plain",edge:"none",shank:"taper",bottomW:12,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"mid",tierRows:1,height:"mid",shoulderLen:"long",finish:"bong",metal:"vang-trang",metal2:"vang-hong",faceW:13.5,shoulder:"ladder3s"}},"nhan-nam-t-tg17":{app:"nhan-nam",ten:"Nh\u1EABn Nam T TG17",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"flat",face:"plate",faceLen:"tight",center:"letter",shape:"round",setting:"prong4",prongTip:"round",headH:"mid",plinth:"off",frame:"none",faceBars:"off",facePave:"off",corners:"off",rim:"none",flank:"plain",edge:"none",shank:"taper",bottomW:10,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"mid",tierRows:1,height:"low",shoulderLen:"long",finish:"bong",metal:"vang-trang",metal2:"vang-hong",faceLetter:"T",letterTurn:"on",letterStone:"bag",faceField:"bong",faceW:10,shoulder:"ladderRd"}},"nhan-nam-tg18":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG18",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"flat",face:"plate",faceLen:"full",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"low",plinth:"off",frame:"stepSq",faceBars:"off",facePave:"off",corners:"row",rim:"none",flank:"plain",edge:"pave",shank:"taper",bottomW:10,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"mid",tierRows:1,height:"high",shoulderLen:"long",finish:"bong",metal:"vang",metal2:"vang-trang",faceW:12,centerD:6,shoulder:"plain"}},"nhan-nam-tg19":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG19",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"flat",face:"cradle",faceLen:"full",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"mid",plinth:"off",frame:"none",faceBars:"off",facePave:"off",corners:"off",rim:"none",flank:"plain",edge:"none",shank:"taper",bottomW:8,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"mid",tierRows:1,height:"high",shoulderLen:"mid",finish:"bong",metal:"vang-trang",metal2:"vang-hong",faceW:10,centerD:10,shoulder:"ladder3"}},"nhan-nam-tg20":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG20",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"flat",face:"cradle",faceLen:"full",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"mid",plinth:"off",frame:"none",faceBars:"off",facePave:"off",corners:"off",rim:"none",flank:"pave3",edge:"none",shank:"taper",bottomW:8,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"mid",tierRows:1,height:"high",shoulderLen:"mid",finish:"bong",metal:"vang-hong",metal2:"vang-trang",faceW:10,centerD:10,shoulder:"ladder3"}},"nhan-nam-tg21":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG21",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"flat",face:"plate",faceLen:"full",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"mid",plinth:"off",frame:"stepSq",faceBars:"off",facePave:"off",corners:"off",rim:"none",flank:"plain",edge:"band",shank:"taper",bottomW:8,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"mid",tierRows:1,height:"high",shoulderLen:"mid",finish:"bong",metal:"vang-trang",metal2:"vang-hong",faceW:13.5,centerD:7.2,shoulder:"ladderRd"}},"nhan-nam-tg22":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG22",cfg:{type:"signet",karat:"10K",gem:"moissanite-vang",accentGem:"moissanite",sideGem:"moissanite",top:"octagon",dome:"flat",face:"plate",faceLen:"tight",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"mid",plinth:"on",frame:"halo",faceBars:"off",facePave:"off",corners:"off",rim:"none",flank:"pave2",edge:"band",shank:"taper",bottomW:8,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"mid",tierRows:1,height:"high",shoulderLen:"mid",finish:"bong",metal:"vang",metal2:"vang-trang",faceW:13.5,centerD:7.2,shoulder:"ladder"}},"nhan-nam-tg23":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG23",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"flat",face:"plate",faceLen:"full",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"mid",plinth:"on",frame:"haloSq",faceBars:"off",facePave:"on",corners:"off",rim:"none",flank:"plain",edge:"none",shank:"taper",bottomW:8,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"small",tierRows:1,height:"high",shoulderLen:"mid",finish:"bong",metal:"vang-trang",metal2:"vang-hong",faceW:13.5,centerD:6.5,shoulder:"pave"}},"nhan-nam-tg24":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG24",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"flat",face:"plate",faceLen:"full",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"high",plinth:"on",frame:"haloSq",faceBars:"on",facePave:"off",corners:"on",rim:"none",flank:"pave2",edge:"bevel",shank:"taper",bottomW:8,shankDeco:"flutes",lattice:"x",twoTone:"none",paveD:"mid",tierRows:1,height:"high",shoulderLen:"long",finish:"bong",metal:"vang",metal2:"vang-trang",faceW:13.5,centerD:7.2,shoulder:"ladderRd"}},"nhan-nam-tg25":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG25",cfg:{type:"signet",karat:"10K",gem:"moissanite-xanh",accentGem:"moissanite",sideGem:"moissanite-xanh",top:"square",dome:"flat",face:"cradle",faceLen:"full",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"mid",plinth:"off",frame:"none",faceBars:"off",facePave:"off",corners:"off",rim:"none",flank:"pave3",edge:"none",shank:"taper",bottomW:8,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"small",tierRows:1,height:"high",shoulderLen:"long",finish:"bong",metal:"vang-trang",metal2:"vang-hong",faceW:10,centerD:9,shoulder:"ladder"}},"nhan-nam-tg26":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG26",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"dome",face:"plate",faceLen:"full",center:"stone",shape:"round",setting:"prong6",prongTip:"round",headH:"low",plinth:"off",frame:"star",faceBars:"off",facePave:"on",corners:"off",rim:"none",flank:"plain",edge:"none",shank:"taper",bottomW:8,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"small",tierRows:2,height:"high",shoulderLen:"long",finish:"bong",metal:"vang-trang",metal2:"vang-hong",faceW:15,centerD:9,shoulder:"tiers"}},"nhan-nam-tg27":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG27",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"bombe",face:"plate",faceLen:"full",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"mid",plinth:"off",frame:"none",faceBars:"off",facePave:"on",corners:"off",rim:"none",flank:"plain",edge:"pave",shank:"taper",bottomW:8,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"mid",tierRows:1,height:"high",shoulderLen:"long",finish:"bong",metal:"vang",metal2:"vang-trang",faceW:13.5,centerD:7.2,shoulder:"tiersBag"}},"nhan-nam-tg28":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG28",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"round",dome:"dome",face:"plate",faceLen:"full",center:"plain",shape:"round",setting:"prong4",prongTip:"round",headH:"mid",plinth:"off",frame:"bagRing",faceBars:"off",facePave:"off",corners:"off",rim:"none",flank:"plain",edge:"none",shank:"taper",bottomW:6,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"mid",tierRows:1,height:"high",shoulderLen:"long",finish:"bong",metal:"vang-hong",metal2:"vang-trang",faceW:15,centerD:7.2,shoulder:"plain"}},"nhan-nam-tg29":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG29",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"flat",face:"plate",faceLen:"tight",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"high",plinth:"off",frame:"stepSq",faceBars:"off",facePave:"off",corners:"off",rim:"none",flank:"plain",edge:"band",shank:"taper",bottomW:8,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"big",tierRows:1,height:"high",shoulderLen:"mid",finish:"bong",metal:"vang-hong",metal2:"vang-trang",faceW:12,centerD:8,shoulder:"pave"}},"nhan-nam-tg30":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG30",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"flat",face:"plate",faceLen:"tight",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"mid",plinth:"on",frame:"halo",faceBars:"off",facePave:"on",corners:"off",rim:"none",flank:"plain",edge:"bevel",shank:"taper",bottomW:8,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"mid",tierRows:1,height:"high",shoulderLen:"mid",finish:"bong",metal:"vang-trang",metal2:"vang-hong",faceW:13.5,centerD:6.5,shoulder:"ladderRd"}},"nhan-nam-tg31":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG31",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"octagon",dome:"flat",face:"plate",faceLen:"tight",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"mid",plinth:"on",frame:"halo",faceBars:"off",facePave:"off",corners:"off",rim:"none",flank:"plain",edge:"band",shank:"taper",bottomW:8,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"mid",tierRows:1,height:"high",shoulderLen:"mid",finish:"bong",metal:"vang-hong",metal2:"vang-trang",faceW:13.5,centerD:7.2,shoulder:"ladder"}},"nhan-nam-tg32":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG32",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"dome",face:"plate",faceLen:"tight",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"mid",plinth:"on",frame:"haloSq",faceBars:"off",facePave:"off",corners:"off",rim:"none",flank:"pave1",edge:"bevel",shank:"taper",bottomW:8,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"mid",tierRows:1,height:"high",shoulderLen:"mid",finish:"bong",metal:"vang-trang",metal2:"vang-hong",faceW:13.5,centerD:6.5,shoulder:"ladderRd"}},"nhan-nam-tg33":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG33",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"bombe",face:"plate",faceLen:"full",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"mid",plinth:"on",frame:"haloSq",faceBars:"off",facePave:"on",corners:"off",rim:"none",flank:"plain",edge:"none",shank:"taper",bottomW:8,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"mid",tierRows:2,height:"high",shoulderLen:"long",finish:"bong",metal:"vang-hong",metal2:"vang-trang",faceW:15,centerD:7.2,shoulder:"ladderT"}},"nhan-nam-tg34":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG34",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"flat",face:"plate",faceLen:"tight",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"high",plinth:"on",frame:"bagFrame",faceBars:"off",facePave:"off",corners:"off",rim:"none",flank:"pave3",edge:"bevel",shank:"taper",bottomW:8,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"mid",tierRows:1,height:"high",shoulderLen:"long",finish:"bong",metal:"vang-trang",metal2:"vang-hong",faceW:15,centerD:7.2,shoulder:"ladder2"}},"bong-halo-tron-rose-gold":{app:"bong-tai",ten:"B\xF4ng Halo Tr\xF2n Rose Gold",cfg:{shape:"round",setting:"prong4",prongTip:"round",haloD:"big",back:"butterfly",view:"pair",metal:"vang-hong",gem:"moissanite",accentGem:"moissanite",karat:"10K",halo:"follow",stoneD:5}},"bong-halo-tron-white-gold":{app:"bong-tai",ten:"B\xF4ng Halo Tr\xF2n White Gold",cfg:{shape:"round",setting:"prong4",prongTip:"round",haloD:"big",back:"butterfly",view:"pair",metal:"vang-trang",gem:"moissanite",accentGem:"moissanite",karat:"10K",halo:"follow",stoneD:5}},"bong-halo-vuong-l":{app:"bong-tai",ten:"B\xF4ng Halo Vu\xF4ng L",cfg:{shape:"round",setting:"prong4",prongTip:"round",haloD:"big",back:"butterfly",view:"pair",metal:"vang-trang",gem:"moissanite",accentGem:"moissanite",karat:"10K",halo:"square",stoneD:6.5}},"bong-halo-vuong-m":{app:"bong-tai",ten:"B\xF4ng Halo Vu\xF4ng M",cfg:{shape:"round",setting:"prong4",prongTip:"round",haloD:"big",back:"butterfly",view:"pair",metal:"vang-trang",gem:"moissanite",accentGem:"moissanite",karat:"10K",halo:"square",stoneD:5}},"bong-nu":{app:"bong-tai",ten:"B\xF4ng N\u1EE5",cfg:{shape:"round",setting:"prong4",prongTip:"round",haloD:"big",back:"butterfly",view:"pair",metal:"vang-trang",gem:"moissanite",accentGem:"moissanite",karat:"10K",halo:"none",stoneD:6.5}},"bong-nu-princess":{app:"bong-tai",ten:"B\xF4ng N\u1EE5 Princess",cfg:{shape:"princess",setting:"prong4",prongTip:"claw",haloD:"big",back:"butterfly",view:"pair",metal:"vang-trang",gem:"moissanite",accentGem:"moissanite",karat:"10K",halo:"none",stoneD:6}}};var mr={moissanite:["Moissanite"],"lab-diamond":["Lab Diamond"],"natural-diamond":["Kim c\u01B0\u01A1ng thi\xEAn nhi\xEAn"],sapphire:["Sapphire xanh","#2F4FA6"],ruby:["Ruby","#B3203F"],emerald:["Emerald","#1C8A55"],"yellow-sapphire":["Sapphire v\xE0ng","#E8C530"],"moissanite-vang":["Moissanite v\xE0ng","#E3BE3A"],"moissanite-xanh":["Moissanite xanh l\u1EE5c","#1F5E52"]},ri={vang:["V\xE0ng","#D9B35E"],"vang-trang":["V\xE0ng tr\u1EAFng","#E4E2DC"],"vang-hong":["V\xE0ng h\u1ED3ng","#D9A08A"]},hn=n=>String(Math.round(n*100)/100).replace(".",","),Ze=n=>`<svg viewBox="0 0 48 48" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">${n}</svg>`,ba=(n,e,t=0,i=1.5,s=24,r=24)=>Array.from({length:n},(a,o)=>{let c=t+o/n*Math.PI*2;return`<circle cx="${(s+Math.cos(c)*e).toFixed(1)}" cy="${(r+Math.sin(c)*e).toFixed(1)}" r="${i}"/>`}).join(""),hM=(n,e,t=1.4)=>{let i="";for(let s=0;s<e;s++){let r=-n+2*n*s/e;i+=`<circle cx="${24+r}" cy="${24-n}" r="${t}"/><circle cx="${24+n}" cy="${24+r}" r="${t}"/><circle cx="${24-r}" cy="${24+n}" r="${t}"/><circle cx="${24-n}" cy="${24-r}" r="${t}"/>`}return i},kt='<path d="M5 15h38M5 33h38" opacity=".55"/>',fr={square:'<rect x="12" y="12" width="24" height="24" rx="1"/>',octagon:'<path d="M18 12h12l6 6v12l-6 6H18l-6-6V18z"/>',cushion:'<rect x="12" y="12" width="24" height="24" rx="8"/>',round:'<circle cx="24" cy="24" r="12.5"/>'},Nd='<path d="M12 16H4M12 32H4M36 16h8M36 32h8" opacity=".55"/>';function uM(n){let e=qn[n].outline(),t=e.map(o=>o[0]),i=e.map(o=>o[1]),s=17/Math.max(Math.max(...t)-Math.min(...t),Math.max(...i)-Math.min(...i))*2,r=(o,c=1)=>`${(24+o[0]*s*c).toFixed(1)},${(24-o[1]*s*c).toFixed(1)}`,a=Math.max(1,Math.floor(e.length/64));return Ze(`<polygon points="${e.filter((o,c)=>c%a===0).map(o=>r(o)).join(" ")}"/><polygon points="${e.filter((o,c)=>c%Math.max(1,Math.floor(e.length/8))===0).map(o=>r(o,.55)).join(" ")}" opacity=".6"/>`)}var jn=(n,e,t)=>n.flatMap((i,s)=>e.map(r=>`<circle cx="${r+(s%2,0)}" cy="${i}" r="${t}"/>`)).join(""),Fd=[9,16.5,24,31.5,39],Kn={signet:Ze(`${fr.square}<circle cx="24" cy="24" r="7"/>${Nd}<path d="M7 20v8M41 20v8" opacity=".55"/>`),band:Ze(`<rect x="4" y="15" width="40" height="18" rx="2"/>${jn([21,27],Fd,1.6)}`),...Object.fromEntries(zl.map(n=>[`top_${n}`,Ze(`${fr[n]}<circle cx="24" cy="24" r="5.5" opacity=".6"/>${Nd}`)])),prong4:Ze(`<circle cx="24" cy="24" r="9"/>${ba(4,10.6,Math.PI/4,2.4)}`),prong6:Ze(`<circle cx="24" cy="24" r="9"/>${ba(6,10.6,Math.PI/6,2.1)}`),bezel:Ze('<circle cx="24" cy="24" r="8.5"/><circle cx="24" cy="24" r="12" stroke-width="2.6"/>'),none:Ze('<circle cx="24" cy="24" r="9"/><rect x="8" y="8" width="32" height="32" rx="1" opacity=".5"/>'),halo:Ze(`<circle cx="24" cy="24" r="7"/>${ba(14,11.4,0,1.6)}`),haloSq:Ze(`<circle cx="24" cy="24" r="7"/>${hM(11.5,5,1.6)}`),bagFrame:Ze('<circle cx="24" cy="24" r="7"/><path d="M14.5 10.5h8v4h-8zM25.5 10.5h8v4h-8zM14.5 33.5h8v4h-8zM25.5 33.5h8v4h-8zM10.5 14.5h4v8h-4zM10.5 25.5h4v8h-4zM33.5 14.5h4v8h-4zM33.5 25.5h4v8h-4z"/>'),double:Ze(`<circle cx="24" cy="24" r="5.5"/>${ba(11,9,0,1.3)}${ba(17,13.2,.2,1.3)}`),bagRing:Ze(`<circle cx="24" cy="24" r="6"/><circle cx="24" cy="24" r="14.5"/>${Array.from({length:16},(n,e)=>{let t=e/16*Math.PI*2;return`<path d="M${(24+Math.cos(t)*7.5).toFixed(1)} ${(24+Math.sin(t)*7.5).toFixed(1)}L${(24+Math.cos(t)*13).toFixed(1)} ${(24+Math.sin(t)*13).toFixed(1)}"/>`}).join("")}`),plain:Ze(kt),pave:Ze(`${kt}${jn([20,24,28],Fd,1.5)}`),honey:Ze(`${kt}${[20,28].flatMap(n=>Fd.map(e=>`<circle cx="${e}" cy="${n}" r="1.6"/>`)).join("")}${[12.7,20.2,27.7,35.2].map(n=>`<circle cx="${n}" cy="24" r="1.6"/>`).join("")}`),paveBig:Ze(`${kt}${[10,19.3,28.7,38].map(n=>`<circle cx="${n}" cy="24" r="3"/>`).join("")}${jn([18,30],[8,14.4,20.8,27.2,33.6,40],.9)}`),ladder:Ze(`${kt}${[8,14.5,21,27.5,34].map(n=>`<rect x="${n}" y="19" width="5" height="10" rx=".5"/>`).join("")}`),grid:Ze(`${kt}<path d="M6 18h36M6 24h36M6 30h36M13 18v12M20.3 18v12M27.7 18v12M35 18v12" opacity=".7"/>${jn([21,27],[9.5,16.6,24,31.3,38.5],1.3)}`),tiers:Ze(`${kt}${[11,19.6,28.3,37].map(n=>`<path d="M${n} 17v14"/>`).join("")}${jn([20,24,28],[6.7,15.3,24,32.6,41.3],1.2)}`),chevron:Ze(`${kt}${[8,18,28].map(n=>`<path d="M${n} 18l7 6-7 6"/>`).join("")}${[13,23,33].flatMap(n=>[`<circle cx="${n}" cy="20" r="1.1"/>`,`<circle cx="${n+3.6}" cy="24" r="1.1"/>`,`<circle cx="${n}" cy="28" r="1.1"/>`]).join("")}`),letter:Ze(`${kt}<path d="M17 19h14M24 19v10" stroke-width="2.6"/>${jn([18.5,29.5],[8,12,36,40],1)}`),carre:Ze(`${kt}${[7,15.3,23.6,31.9].map(n=>`<rect x="${n}" y="20" width="7.5" height="7.5" rx=".6"/>`).join("")}`),bagLong:Ze(`${kt}${[18.5,25.5].flatMap(n=>[6,18.5,31].map(e=>`<rect x="${e}" y="${n}" width="11" height="4.5" rx=".5"/>`)).join("")}`),faceStone:Ze(`${fr.square}<circle cx="24" cy="24" r="7"/>${ba(4,8.4,Math.PI/4,1.6)}`),faceLetter:Ze(`${fr.square}<path d="M17 17h14M24 17v15" stroke-width="3"/>`),rows:Ze(`${kt}<path d="M6 21h36M6 27h36" opacity=".7"/>${jn([18,24,30],[9,16.5,24,31.5,39],1.9)}`),ladderRd:Ze(`${kt}${[8,14.5,21,27.5,34].map(n=>`<rect x="${n}" y="20.500" width="5" height="7" rx=".5"/>`).join("")}${jn([17.5,30.5],[10.5,17,23.5,30,36.5],1.7)}`),ladderT:Ze(`${kt}${[8,14.5,21,27.5,34].map(n=>`<rect x="${n}" y="20.500" width="5" height="7" rx=".5"/>`).join("")}${[13.5,26.5,39.5].map(n=>`<path d="M${n} 16.500v3M${n} 28.500v3"/>`).join("")}${jn([18,30],[8.5,20,33],1)}`),ladder2:Ze(`${kt}${[19,24.5].flatMap(n=>[8,14.5,21,27.5,34].map(e=>`<rect x="${e}" y="${n}" width="5" height="4.500" rx=".4"/>`)).join("")}`),ladder2s:Ze(`${kt}${[19.5,25.5].flatMap(n=>[8,14.5,21,27.5,34].map(e=>`<rect x="${e}" y="${n}" width="5" height="3" rx=".4"/>`)).join("")}${jn([17.5,24,30.5],[10.5,17,23.5,30,36.5],.9)}`),ladderBig:Ze(`${kt}${[7.5,19,30.5].map(n=>`<rect x="${n}" y="18" width="10" height="12" rx=".6"/>`).join("")}`),ladder3s:Ze(`${kt}${[18.3,22.85,27.4].flatMap(n=>[8,14.5,21,27.5,34].map(e=>`<rect x="${e}" y="${n}" width="5" height="2.3" rx=".3"/>`)).join("")}${jn([17,21.7,26.3,31],[10.5,17,23.5,30,36.5],.75)}`),ladder3:Ze(`${kt}${[17.5,22,26.5].flatMap(n=>[8,14.5,21,27.5,34].map(e=>`<rect x="${e}" y="${n}" width="5" height="4" rx=".4"/>`)).join("")}`),tiersBag:Ze(`${kt}${[8,19,30].flatMap(n=>[18,21.2,24.4,27.6].map(e=>`<rect x="${n}" y="${e}" width="9" height="2.400" rx=".4"/>`)).join("")}<path d="M18 17v14M29 17v14"/>`),chevronPlain:Ze(`${kt}${[9,15,21,27,33].map(n=>`<path d="M${n} 18l6 6-6 6" stroke-width="2.200"/>`).join("")}`),stepSq:Ze('<circle cx="24" cy="24" r="6.500"/><rect x="14.500" y="14.500" width="19" height="19" rx=".8"/><rect x="10" y="10" width="28" height="28" rx=".8" opacity=".6"/>'),star:Ze(`<circle cx="24" cy="24" r="6.500"/><path d="M${Array.from({length:12},(n,e)=>{let t=e/12*Math.PI*2,i=e%2?9:15.5;return`${(24+Math.cos(t)*i).toFixed(1)} ${(24+Math.sin(t)*i).toFixed(1)}`}).join("L")}z"/>`),facePlain:Ze(`${fr.square}<circle cx="24" cy="24" r="6.500" opacity=".6"/>`),faceRun:Ze(`${fr.square}<path d="M4 20h40M4 28h40" opacity=".55"/>${jn([24],[7,13,19,24.5,30,36,41.5],1.6)}`),plate:Ze(`${fr.square}<circle cx="24" cy="24" r="6"/>${Nd}`),cradle:Ze('<circle cx="24" cy="24" r="9.500"/><path d="M4 17h11M4 31h11M33 17h11M33 31h11" opacity=".55"/><path d="M15 17v14M33 17v14"/>'),stations:Ze(`${kt}<circle cx="10" cy="24" r="3.4"/><circle cx="24" cy="24" r="3.4"/><circle cx="38" cy="24" r="3.4"/>${jn([21.5,26.5],[15.5,18.5,29.5,32.5],1)}`),flush:Ze(`${kt}<circle cx="11" cy="24" r="2.6"/><circle cx="24" cy="24" r="2.6"/><circle cx="37" cy="24" r="2.6"/>`)},Hm={square:"Vu\xF4ng",octagon:"Vu\xF4ng v\xE1t g\xF3c",cushion:"Vu\xF4ng bo tr\xF2n",round:"Tr\xF2n"},Bd={prong4:"4 ch\u1EA5u tr\u1EE5",prong6:"6 ch\u1EA5u tr\u1EE5",bezel:"B\u1ECDc vi\u1EC1n"},Wm={none:"Kh\xF4ng khung",halo:"Vi\u1EC1n \u0111\xE1 tr\xF2n",haloSq:"Vi\u1EC1n \u0111\xE1 vu\xF4ng",bagFrame:"Khung baguette",bagRing:"V\xF2ng baguette to\u1EA3 tr\xF2n",double:"Hai l\u1EDBp vi\u1EC1n",stepSq:"B\u1EC7 vu\xF4ng tr\u01A1n hai b\u1EADc",star:"Khung sao"},qm={plain:"Tr\u01A1n",pave:"Pav\xE9 th\u1EB3ng h\xE0ng",honey:"Pav\xE9 t\u1ED5 ong",paveBig:"H\xE0ng l\u1EDBn \u1EDF gi\u1EEFa",rows:"H\xE0ng \u0111\xE1 gi\u1EEFa g\u1EDD d\u1ECDc",ladder:"K\xEAnh baguette",ladderBig:"K\xEAnh baguette l\u1EDBn",ladderRd:"K\xEAnh baguette + h\xE0ng \u0111\xE1 l\u1EDBn",ladderT:"K\xEAnh baguette + b\u1EADc pav\xE9",ladder2:"Hai k\xEAnh baguette",ladder2s:"Hai k\xEAnh xen h\xE0ng \u0111\xE1",ladder3:"Ba k\xEAnh baguette",ladder3s:"Ba k\xEAnh xen h\xE0ng \u0111\xE1",carre:"K\xEAnh \u0111\xE1 vu\xF4ng",bagLong:"Baguette d\u1ECDc",tiersBag:"B\u1EADc thang baguette",grid:"L\u01B0\u1EDBi \xF4 vu\xF4ng",tiers:"B\u1EADc thang pav\xE9",chevron:"Ch\u1EEF V \u0111\xEDnh \u0111\xE1",chevronPlain:"Ch\u1EEF V v\xE0ng tr\u01A1n",letter:"Ch\u1EEF c\xE1i",stations:"\xD4 \u0111\xE1 \u0111i\u1EC3m",flush:"\u0110\xE1 ch\xECm r\u1EA3i \u0111\u1EC1u"},zd=Object.fromEntries(Pd.map(n=>[n,qm[n]])),Gd={x:"L\u01B0\u1EDBi m\u1EAFt c\xE1o",tram:"L\u01B0\u1EDBi m\u1EAFt tr\xE1m",ong:"L\u01B0\u1EDBi t\u1ED5 ong",dac:"\u0110\xFAc \u0111\u1EB7c, kh\xF4ng l\xF3t l\u01B0\u1EDBi"},Vd=Object.fromEntries(Id.map(n=>[n,qm[n]])),Ct=n=>n.type==="signet",To=n=>n.type==="band",ss=n=>Ct(n)&&n.face==="cradle",Xl=n=>Ct(n)&&n.center==="run",jl=n=>Ct(n)&&n.center==="plain",pr=n=>Ct(n)&&!ss(n)&&!Xl(n),Kl=n=>pr(n)&&n.dome==="flat"&&n.top==="square",Fm="",Um=null,Xm=n=>{let e=JSON.stringify(n);return e!==Fm&&(Fm=e,Um=Dm(n)),Um},jm=n=>Xm(n).side>0,_a=n=>Ct(n)&&n.shoulder==="letter",ii=n=>Ct(n)&&n.center==="letter",Di=n=>Ct(n)&&n.center!=="letter",Hd=n=>pr(n)&&n.dome==="flat"&&n.top==="square",Om=n=>Di(n)||jl(n)&&(n.frame!=="none"||n.plinth==="on"),dM=["pave","honey","rows","ladder","ladderT","ladder2","ladder2s","ladder3","carre","grid","tiers","chevron","letter","paveBig","stations"],fM=n=>dM.includes(Ct(n)?n.shoulder:n.bandStones),Km=n=>Xm(n).accent>0,$l=n=>{let[e,t]=Li(n);return e>t+.05?`${hn(e)} \xD7 ${hn(t)} mm`:`${hn(t)} mm`},Ud=Object.keys(mr).map(n=>[n,mr[n][0],mr[n][1]]),Ke=(n,e,t,i=()=>!0,s=null,r=!1)=>({k:n,label:e,opts:t,show:i,hint:s,sel:r}),Wd=(n,e)=>typeof n.opts=="function"?n.opts(e):n.opts,pM=[{id:"form",title:"Ki\u1EC3u d\xE1ng",tab:"Ki\u1EC3u d\xE1ng",groups:[Ke("type","Ki\u1EC3u nh\u1EABn",[["signet","Nh\u1EABn m\u1EB7t \u0111\xE1",Kn.signet],["band","Nh\u1EABn b\u1EA3n",Kn.band]],()=>!0,n=>Ct(n)?"M\u1EB7t nh\u1EABn mang vi\xEAn ch\u1EE7, hai vai ch\u1EA1y \u0111\xE1, \u0111ai thu\xF4n d\u1EA7n xu\u1ED1ng d\u01B0\u1EDBi.":"\u0110ai \u0111\u1EC1u b\u1EA3n, c\xE1c h\xE0ng \u0111\xE1 ch\u1EA1y quanh nh\u1EABn."),Ke("face","Ki\u1EC3u m\u1EB7t nh\u1EABn",[["plate","C\xF3 m\u1EB7t nh\u1EABn",Kn.plate],["cradle","\xD4m vi\xEAn ch\u1EE7, kh\xF4ng m\u1EB7t",Kn.cradle]],n=>Ct(n)&&n.center==="stone",n=>ss(n)?"Hai vai d\xE2ng cao \xF4m s\xE1t vi\xEAn ch\u1EE7, vi\xEAn n\u1EB1m trong r\xE3nh ch\u1EEF V gi\u1EEFa hai vai \u2014 ki\u1EC3u c\u1EE7a c\xE1c m\u1EABu nh\u1EABn vi\xEAn l\u1EDBn.":""),Ke("top","D\xE1ng m\u1EB7t nh\u1EABn",zl.map(n=>[n,Hm[n],Kn[`top_${n}`]]),n=>Ct(n)&&!ss(n)),Ke("dome","M\u1EB7t nh\u1EABn",[["flat","Ph\u1EB3ng, kh\u1ED1i vu\xF4ng v\u1EE9c"],["dome","V\xF2m, \xF4m tr\xF2n"],["bombe","V\xF2m cao, tr\xF2n nh\u01B0 g\u1ED1i"]],n=>Ct(n)&&!ss(n)),Ke("faceW",n=>ss(n)?"B\u1EA3n vai s\xE1t vi\xEAn ch\u1EE7":"B\u1EA3n m\u1EB7t nh\u1EABn",Ed.map(n=>[n,`${hn(n)} mm`]),Ct,n=>ss(n)?"Vi\xEAn ch\u1EE7 c\xF3 th\u1EC3 r\u1ED9ng b\u1EB1ng b\u1EA3n vai.":"B\u1EA3n m\u1EB7t r\u1ED9ng h\u01A1n th\xEC \u0111\u1EB7t \u0111\u01B0\u1EE3c vi\xEAn ch\u1EE7 l\u1EDBn h\u01A1n v\xE0 nhi\u1EC1u l\u1EDBp khung \u0111\xE1 h\u01A1n."),Ke("faceLen","Chi\u1EC1u d\xE0i m\u1EB7t nh\u1EABn",[["full","Vu\xF4ng theo b\u1EA3n"],["tight","\xD4m s\xE1t ph\u1EA7n gi\u1EEFa"]],n=>pr(n)&&!(Kl(n)&&n.faceBars==="on"),n=>n.faceLen==="tight"?"M\u1EB7t nh\u1EABn ch\u1EC9 d\xE0i v\u1EEBa vi\xEAn ch\u1EE7 v\xE0 khung; h\xE0ng \u0111\xE1 tr\xEAn vai ch\u1EA1y l\xEAn s\xE1t ph\u1EA7n gi\u1EEFa.":""),Ke("height","\u0110\u1ED9 d\xE0y m\u1EB7t nh\u1EABn",[["low","Th\u1EA5p, \xF4m tay"],["mid","V\u1EEBa"],["high","Cao, b\u1EC1 th\u1EBF"]],Ct),Ke("bandW","B\u1EA3n nh\u1EABn",Rd.map(n=>[n,`${hn(n)} mm`]),To),Ke("bandProfile","Ti\u1EBFt di\u1EC7n b\u1EA3n nh\u1EABn",[["flat","Ph\u1EB3ng"],["dome","Bo v\xF2m"],["bevel","V\xE1t c\u1EA1nh l\u1EDBn"]],To)]},{id:"center",title:n=>ii(n)?"M\u1EB7t nh\u1EABn ch\u1EEF c\xE1i":Di(n)?"M\u1EB7t nh\u1EABn & vi\xEAn ch\u1EE7":"M\u1EB7t nh\u1EABn",tab:"M\u1EB7t nh\u1EABn",show:Ct,groups:[Ke("center","Gi\u1EEFa m\u1EB7t nh\u1EABn",[["stone","Vi\xEAn ch\u1EE7",Kn.faceStone],["letter","Ch\u1EEF c\xE1i n\u1ED5i",Kn.faceLetter],["plain","M\u1EB7t tr\u01A1n",Kn.facePlain],["run","H\xE0ng \u0111\xE1 ch\u1EA1y li\u1EC1n",Kn.faceRun]],()=>!0,n=>ii(n)?"M\u1ED9t ch\u1EEF c\xE1i l\u1EDBn n\u1ED5i gi\u1EEFa m\u1EB7t nh\u1EABn, kh\xF4ng c\xF3 vi\xEAn ch\u1EE7. Mu\u1ED1n n\u1EC1n quanh ch\u1EEF l\u1EA5p l\xE1nh, b\u1EADt \u201CL\xE1t \u0111\xE1 k\xEDn ph\u1EA7n m\u1EB7t c\xF2n l\u1EA1i\u201D.":Xl(n)?"Kh\xF4ng c\xF3 vi\xEAn ch\u1EE7: h\xE0ng \u0111\xE1 tr\xEAn vai ch\u1EA1y li\u1EC1n m\u1ED9t m\u1EA1ch qua m\u1EB7t nh\u1EABn. Ch\u1ECDn ki\u1EC3u h\xE0ng \u0111\xE1 \u1EDF b\u01B0\u1EDBc sau.":jl(n)?"Kh\xF4ng c\xF3 vi\xEAn ch\u1EE7: m\u1EB7t nh\u1EABn v\xE0ng tr\u01A1n; c\xF3 th\u1EC3 th\xEAm khung \u0111\xE1 quanh m\u1ED9t \u0111\u0129a v\xE0ng \u1EDF gi\u1EEFa.":""),Ke("faceLetter","Ch\u1EEF tr\xEAn m\u1EB7t nh\u1EABn",hr.map(n=>[n,n]),ii,null,!0),Ke("letterStone","N\xE9t ch\u1EEF",[["on","\u0110\xEDnh \u0111\xE1 tr\xF2n"],["bag","\u0110\xEDnh baguette"],["off","V\xE0ng tr\u01A1n"]],ii),Ke("letterTurn","H\u01B0\u1EDBng ch\u1EEF",[["off","\u0110\u1EC9nh ch\u1EEF v\u1EC1 ph\xEDa \u0111\u1EA7u ng\xF3n"],["on","Xoay d\u1ECDc theo v\xF2ng nh\u1EABn"]],ii),Ke("faceField","N\u1EC1n quanh ch\u1EEF",[["satin","Nh\xE1m m\u1EDD"],["bong","B\xF3ng"]],n=>ii(n)&&n.facePave!=="on",()=>"N\u1EC1n nh\xE1m m\u1EDD gi\xFAp ch\u1EEF b\xF3ng n\u1ED5i r\xF5 h\u01A1n."),Ke("shape",n=>Di(n)?"D\xE1ng gi\xE1c c\u1EAFt":"D\xE1ng \u0111\u0129a gi\u1EEFa",Ad.map(n=>[n,qn[n].vi,uM(n)]),Om),Ke("centerD",n=>Di(n)?"C\u1EE1 vi\xEAn ch\u1EE7":"C\u1EE1 \u0111\u0129a gi\u1EEFa",n=>lr.filter(e=>ga(n,e)).map(e=>[e,$l({...n,centerD:e})]),Om,n=>lr.some(e=>!ga(n,e))?`B\u1EA3n ${ss(n)?"vai":"m\u1EB7t"} ${hn(n.faceW)} mm \u0111\u1EB7t \u0111\u01B0\u1EE3c vi\xEAn t\u1EDBi ${$l({...n,centerD:Math.max(...lr.filter(e=>ga(n,e)))})}. Mu\u1ED1n vi\xEAn l\u1EDBn h\u01A1n, ch\u1ECDn b\u1EA3n m\u1EB7t r\u1ED9ng h\u01A1n \u1EDF b\u01B0\u1EDBc Ki\u1EC3u d\xE1ng.`:""),Ke("gem","Lo\u1EA1i \u0111\xE1 qu\xFD",Ud,Di),Ke("setting","Ki\u1EC3u \xF4m \u0111\xE1",n=>Object.keys(Bd).filter(e=>Dd(n.shape,e)).map(e=>[e,Bd[e],Kn[e]]),Di),Ke("prongTip","\u0110\u1EA7u ch\u1EA5u",[["round","Tr\xF2n"],["claw","M\xF3ng vu\u1ED1t"]],n=>Di(n)&&["prong4","prong6"].includes(n.setting)),Ke("headH","\u0110\u1ED9 cao vi\xEAn ch\u1EE7 & ch\u1EA5u",[["low","\xD4m s\xE1t m\u1EB7t nh\u1EABn"],["mid","V\u1EEBa"],["high","Nh\xF4 cao"]],Di,n=>n.setting==="bezel"?"\u1ED4 b\u1ECDc vi\u1EC1n n\xE2ng cao theo vi\xEAn ch\u1EE7.":"Ch\u1EA5u v\xE0 vi\xEAn ch\u1EE7 c\xF9ng nh\xF4 l\xEAn; nh\xF4 cao th\xEC vi\xEAn ch\u1EE7 n\u1ED5i b\u1EADt h\u01A1n, c\xF3 th\xEAm v\xE0nh gi\u1EB1ng gi\u1EEFa c\xE1c ch\u1EA5u."),Ke("plinth","B\u1EC7 n\xE2ng ph\u1EA7n gi\u1EEFa & khung \u0111\xE1",[["on","C\xF3 b\u1EC7"],["off","Kh\xF4ng b\u1EC7"]],n=>pr(n)&&!ii(n)),Ke("frame","Khung quanh ph\u1EA7n gi\u1EEFa",n=>yo.filter(e=>Mo(n,e)).map(e=>[e,Wm[e],Kn[e]]),n=>pr(n)&&!ii(n),n=>n.frame==="stepSq"?"B\u1EC7 vu\xF4ng hai b\u1EADc b\u1EB1ng v\xE0ng b\xF3ng, kh\xF4ng \u0111\xEDnh \u0111\xE1.":n.frame==="star"?"T\u1EA5m sao s\u1EABm m\xE0u n\u1ED5i d\u01B0\u1EDBi vi\xEAn ch\u1EE7, c\xE1nh sao n\u1EB1m gi\u1EEFa c\xE1c ch\u1EA5u.":n.frame!=="none"?`\u0110\xE1 khung ${n.frame==="bagFrame"?"baguette, b\u1EC1 ngang":"tr\xF2n"} ${hn(ns(n))} mm \u2014 t\u1EF1 ch\u1ECDn c\u1EE1 v\u1EEBa kho\u1EA3ng tr\u1ED1ng quanh vi\xEAn ch\u1EE7.`:yo.some(e=>!Mo(n,e))?"Vi\xEAn ch\u1EE7 \u0111ang g\u1EA7n k\xEDn m\u1EB7t nh\u1EABn; gi\u1EA3m c\u1EE1 vi\xEAn ho\u1EB7c t\u0103ng b\u1EA3n m\u1EB7t \u0111\u1EC3 th\xEAm khung \u0111\xE1.":""),Ke("faceBars","Thanh baguette hai m\xE9p m\u1EB7t nh\u1EABn",[["on","C\xF3"],["off","Kh\xF4ng"]],Kl,n=>n.faceBars==="on"?"M\u1EB7t nh\u1EABn r\u1ED9ng h\u01A1n vai; hai m\xE9p m\u1EB7t l\xE0 hai thanh baguette n\u1EB1m ngang, vai ch\u1EA1y \u0111\xE1 s\xE1t t\u1EDBi khung vi\xEAn ch\u1EE7.":""),Ke("facePave","L\xE1t \u0111\xE1 k\xEDn ph\u1EA7n m\u1EB7t c\xF2n l\u1EA1i",[["off","Kh\xF4ng"],["on","C\xF3"]],pr),Ke("corners","\u0110\xE1 g\xF3c m\u1EB7t nh\u1EABn",[["off","Kh\xF4ng"],["on","B\u1ED1n vi\xEAn g\xF3c"],["row","H\xE0ng ba vi\xEAn hai \u0111\u1EA7u"]],Hd,n=>n.corners==="on"?"B\u1ED1n vi\xEAn b\u1ECDc vi\u1EC1n \u1EDF b\u1ED1n g\xF3c m\u1EB7t, m\xE0u theo \u201C\u0111\xE1 baguette & \u0111\xE1 \u0111i\u1EC3m\u201D. Ch\u1EC9 hi\u1EC7n khi g\xF3c m\u1EB7t c\xF2n \u0111\u1EE7 ch\u1ED7 \u2014 t\u0103ng b\u1EA3n m\u1EB7t ho\u1EB7c gi\u1EA3m khung n\u1EBFu ch\u01B0a th\u1EA5y.":n.corners==="row"?"Ba vi\xEAn l\u1EDBn x\u1EBFp ngang \u1EDF m\u1ED7i \u0111\u1EA7u m\u1EB7t nh\u1EABn, s\xE1t vai. Ch\u1EC9 hi\u1EC7n khi m\u1EB7t c\xF2n \u0111\u1EE7 ch\u1ED7 \u2014 t\u0103ng b\u1EA3n m\u1EB7t ho\u1EB7c gi\u1EA3m c\u1EE1 vi\xEAn ch\u1EE7 n\u1EBFu ch\u01B0a th\u1EA5y.":""),Ke("rim","Vi\u1EC1n m\u1EB7t nh\u1EABn",[["none","Tr\u01A1n"],["rail","G\u1EDD n\u1ED5i"],["milgrain","Vi\u1EC1n h\u1EA1t"]],Vl)]},{id:"stones",title:n=>Ct(n)?"Vai & h\xE0ng \u0111\xE1":"H\xE0ng \u0111\xE1",tab:"H\xE0ng \u0111\xE1",groups:[Ke("shoulder","\u0110\xE1 tr\xEAn hai vai",Object.keys(zd).map(n=>[n,zd[n],Kn[n]]),Ct,n=>({ladder:"Baguette n\u1EB1m ngang b\u1EA3n, x\u1EBFp s\xE1t nhau gi\u1EEFa hai g\u1EDD k\xEAnh; ph\u1EA7n b\u1EA3n c\xF2n d\u01B0 hai b\xEAn t\u1EF1 l\xE1t pav\xE9.",ladderBig:"M\u1ED9t k\xEAnh baguette c\u1EE1 l\u1EDBn ch\u1EA1y gi\u1EEFa vai, hai b\xEAn \u0111\u1EC3 v\xE0ng tr\u01A1n.",tiers:"T\u1EEBng h\xE0ng \u0111\xE1 ng\u0103n nhau b\u1EB1ng m\u1ED9t g\u1EDD ngang, x\u1EBFp nh\u01B0 b\u1EADc thang xu\u1ED1ng vai.",chevron:"C\xE1c h\xE0ng \u0111\xE1 x\u1EBFp h\xECnh ch\u1EEF V, m\u0169i h\u01B0\u1EDBng xu\u1ED1ng \u0111ai, gi\u1EEFa c\xE1c h\xE0ng l\xE0 g\u1EDD n\u1ED5i."})[n.shoulder]||""),Ke("letter","Ch\u1EEF tr\xEAn vai ph\u1EA3i",hr.map(n=>[n,n]),_a,null,!0),Ke("letter2","Ch\u1EEF tr\xEAn vai tr\xE1i",[["","Gi\u1ED1ng vai ph\u1EA3i"],...hr.map(n=>[n,n])],_a,()=>"Ch\u1EEF n\u1ED5i tr\xEAn vai nh\u1EABn, n\u1EC1n quanh ch\u1EEF l\xE1t pav\xE9. C\xF3 th\u1EC3 ch\u1ECDn hai ch\u1EEF kh\xE1c nhau, v\xED d\u1EE5 t\xEAn vi\u1EBFt t\u1EAFt c\u1EE7a b\u1EA1n.",!0),Ke("letterStone","N\xE9t ch\u1EEF",[["on","\u0110\xEDnh \u0111\xE1 tr\xF2n"],["bag","\u0110\xEDnh baguette"],["off","V\xE0ng tr\u01A1n"]],_a),Ke("tierRows","S\u1ED1 h\xE0ng \u0111\xE1 m\u1ED7i b\u1EADc",[[1,"M\u1ED9t h\xE0ng"],[2,"Hai h\xE0ng"]],n=>Ct(n)&&["tiers","ladderT"].includes(n.shoulder)),Ke("shoulderLen","H\xE0ng \u0111\xE1 tr\xEAn vai d\xE0i t\u1EDBi",n=>[["short","G\u1EA7n m\u1EB7t nh\u1EABn"],["mid","Gi\u1EEFa vai"],["long","H\u1EBFt vai"]].filter(([e])=>!(_a(n)&&e==="short")),n=>Ct(n)&&(n.shoulder!=="plain"||n.edge!=="none")),Ke("bandStones","\u0110\xE1 tr\xEAn b\u1EA3n nh\u1EABn",Object.keys(Vd).map(n=>[n,Vd[n],Kn[n]]),To,n=>({ladder:"Baguette n\u1EB1m ngang b\u1EA3n gi\u1EEFa hai g\u1EDD k\xEAnh; b\u1EA3n r\u1ED9ng th\xEC hai b\xEAn t\u1EF1 l\xE1t th\xEAm pav\xE9.",stations:"C\xE1c vi\xEAn b\u1ECDc vi\u1EC1n c\xE1ch \u0111\u1EC1u, gi\u1EEFa c\xE1c vi\xEAn l\xE1t pav\xE9. Ch\u1ECDn m\xE0u \u0111\xE1 \u0111i\u1EC3m \u1EDF b\xEAn d\u01B0\u1EDBi."})[n.bandStones]||""),Ke("cover","\u0110\u1ED9 ph\u1EE7 \u0111\xE1",[["third","1/3 v\xF2ng"],["half","N\u1EEDa v\xF2ng"],["full","C\u1EA3 v\xF2ng"]],n=>To(n)&&(n.bandStones!=="plain"||n.edge!=="none")),Ke("paveD","C\u1EE1 \u0111\xE1 t\u1EA5m",[["small","Nh\u1ECF \xB7 kho\u1EA3ng 1,2 mm"],["mid","V\u1EEBa \xB7 kho\u1EA3ng 1,5 mm"],["big","To \xB7 kho\u1EA3ng 1,9 mm"]],fM,()=>"S\u1ED1 h\xE0ng \u0111\xE1 t\u1EF1 t\xEDnh theo b\u1EA3n nh\u1EABn: \u0111\xE1 nh\u1ECF th\xEC nhi\u1EC1u h\xE0ng h\u01A1n."),Ke("edge","Vi\u1EC1n hai m\xE9p",[["none","Tr\u01A1n"],["rail","G\u1EDD n\u1ED5i"],["milgrain","Vi\u1EC1n h\u1EA1t"],["band","Vi\u1EC1n tr\u01A1n b\u1EA3n r\u1ED9ng"],["pave","H\xE0ng pav\xE9"],["bevel","M\xE9p v\xE1t \u0111\xEDnh pav\xE9"],["notch","Kh\xEDa r\u0103ng"]],()=>!0,n=>({band:"Hai m\xE9p \u0111\u1EC3 v\xE0ng b\xF3ng b\u1EA3n r\u1ED9ng, h\xE0ng \u0111\xE1 n\u1EB1m l\u1ECDt gi\u1EEFa.",bevel:"Hai m\xE9p v\xE1t nghi\xEAng, m\u1ED7i m\xE9p m\u1ED9t h\xE0ng pav\xE9 n\u1EB1m tr\xEAn m\u1EB7t v\xE1t.",notch:"C\xE1c kh\u1ED1i nh\u1ECF c\xE1ch \u0111\u1EC1u d\u1ECDc hai m\xE9p, nh\u01B0 vi\u1EC1n b\xE1nh r\u0103ng."})[n.edge]||""),Ke("flank","H\xF4ng nh\u1EABn (hai b\xEAn m\u1EB7t)",[["plain","Tr\u01A1n"],["milgrain","Vi\u1EC1n h\u1EA1t"],["pave1","M\u1ED9t h\xE0ng \u0111\xE1"],["pave2","Hai h\xE0ng \u0111\xE1"],["pave3","Ba h\xE0ng \u0111\xE1"]],Ct),Ke("accentGem","Lo\u1EA1i \u0111\xE1 t\u1EA5m",Ud,Km),Ke("sideGem","Lo\u1EA1i \u0111\xE1 baguette & \u0111\xE1 \u0111i\u1EC3m",Ud,jm)]},{id:"finish",title:"\u0110ai & ho\xE0n thi\u1EC7n",tab:"Ho\xE0n thi\u1EC7n",groups:[Ke("lattice","L\xF2ng nh\u1EABn ph\xEDa tr\xEAn",Object.keys(Gd).map(n=>[n,Gd[n]]),Ct,n=>n.lattice==="dac"?"\u0110\xFAc \u0111\u1EB7c n\u1EB7ng tay v\xE0 t\u1ED1n v\xE0ng h\u01A1n nhi\u1EC1u so v\u1EDBi l\xF3t l\u01B0\u1EDBi.":"Ph\u1EA7n tr\xEAn c\u1EE7a nh\u1EABn \u0111\u1EC3 r\u1ED7ng, l\xF2ng trong l\xF3t l\u01B0\u1EDBi: nh\u1EB9 tay, ti\u1EBFt ki\u1EC7m v\xE0ng \u2014 c\xE1ch x\u01B0\u1EDFng T Gold ho\xE0n thi\u1EC7n h\u1EA7u h\u1EBFt nh\u1EABn nam."),Ke("shank","Ki\u1EC3u \u0111ai",[["taper","Thu\xF4n d\u1EA7n t\u1EEB m\u1EB7t nh\u1EABn"],["step","Gi\u1EEF b\u1EA3n r\u1ED9ng t\u1EDBi h\xF4ng r\u1ED3i th\u1EAFt l\u1EA1i"]],Ct),Ke("bottomW","B\u1EA3n \u0111ai ph\xEDa d\u01B0\u1EDBi",Cd.map(n=>[n,`${n} mm`]),Ct),Ke("shankDeco","Trang tr\xED \u0111ai",[["none","Tr\u01A1n"],["flutes","G\xE2n d\u1ECDc n\u1ED1i ti\u1EBFp h\xE0ng \u0111\xE1"],["pave","M\u1ED9t h\xE0ng \u0111\xE1 ch\u1EA1y xu\u1ED1ng \u0111ai"],["milgrain","Hai \u0111\u01B0\u1EDDng vi\u1EC1n h\u1EA1t"]],Ct),Ke("metal","M\xE0u v\xE0ng",Object.keys(ri).map(n=>[n,ri[n][0],ri[n][1]])),Ke("twoTone","Hai m\xE0u v\xE0ng",n=>[["none","M\u1ED9t m\xE0u"],..._a(n)||ii(n)?[["letter","Ch\u1EEF c\xE1i m\xE0u th\u1EE9 hai"]]:[],...Di(n)?[["head","\u1ED4 vi\xEAn ch\u1EE7 m\xE0u th\u1EE9 hai"]]:[],...Ct(n)&&n.shoulder==="chevronPlain"?[["shoulder","G\xE2n ch\u1EEF V m\xE0u th\u1EE9 hai"]]:[],["settings","To\xE0n b\u1ED9 \u1ED5 \u0111\xE1 m\xE0u th\u1EE9 hai"]],()=>!0,n=>n.twoTone==="shoulder"?"G\xE2n ch\u1EEF V tr\xEAn vai kh\xE1c m\xE0u th\xE2n nh\u1EABn.":n.twoTone==="letter"?"Ch\u1EEF c\xE1i kh\xE1c m\xE0u th\xE2n nh\u1EABn n\xEAn n\u1ED5i r\xF5, nh\u01B0 m\u1EABu ch\u1EEF v\xE0ng h\u1ED3ng tr\xEAn nh\u1EABn v\xE0ng tr\u1EAFng.":n.twoTone!=="none"?"\u1ED4 \u0111\xE1 m\xE0u v\xE0ng tr\u1EAFng tr\xEAn th\xE2n v\xE0ng gi\xFAp \u0111\xE1 qu\xFD tr\xF4ng tr\u1EAFng v\xE0 s\xE1ng h\u01A1n.":""),Ke("metal2","M\xE0u v\xE0ng th\u1EE9 hai",n=>Object.keys(ri).filter(e=>e!==n.metal).map(e=>[e,ri[e][0],ri[e][1]]),n=>n.twoTone!=="none"),Ke("karat","Tu\u1ED5i v\xE0ng",[["10K","10K"],["14K","14K"],["18K","18K"]]),Ke("finish","B\u1EC1 m\u1EB7t th\xE2n nh\u1EABn",[["bong","B\xF3ng g\u01B0\u01A1ng"],["nham","Nh\xE1m m\u1EDD"],["chai","V\xE2n ch\u1EA3i"]])]}],Ao=()=>pM.filter(n=>!n.show||n.show(Z)),km=n=>typeof n.title=="function"?n.title(Z):n.title,mM=["",...Array.from({length:22},(n,e)=>String(e+9))],$m=Object.keys(Ls),Zl=Object.fromEntries(Object.entries(Nm).filter(([,n])=>n.app==="nhan-nam")),xi="",Xd=()=>({...Ls,...Zl[xi]?.cfg||{}});function gM(){let n=new URLSearchParams(location.hash.slice(1));xi=Zl[n.get("mau")]?n.get("mau"):"";let e=Xd();for(let i of $m){if(!n.has(i))continue;let s=n.get(i),r=Ls[i];e[i]=typeof r=="number"?Number(s)||r:s.slice(0,40)}let t=ur(e);for(let i of["gem","accentGem","sideGem"])mr[t[i]]||(t[i]=Ls[i]);for(let i of["metal","metal2"])ri[t[i]]||(t[i]=Ls[i]);return t}function va(n){let e=new URLSearchParams,t=xi?ur(Xd()):Ls;xi&&e.set("mau",xi);for(let i of $m)n[i]!==t[i]&&e.set(i,n[i]);history.replaceState(null,"",`${location.pathname}${location.search}${e.toString()?`#${e}`:""}`)}var xa=(n,e=document)=>e.querySelector(n),bi=n=>String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Wl=typeof window<"u"&&window.TG3D_APP&&window.TG3D_APP.contact?window.TG3D_APP:null,bM=n=>Wl?`<a class="btn-next send" href="${bi(`${Wl.contact}${Wl.contact.includes("?")?"&":"?"}piece=${encodeURIComponent(Wl.piece||"T\u1EF1 thi\u1EBFt k\u1EBF nh\u1EABn nam (3D)")}&config=${encodeURIComponent(`${n.map(([e,t])=>`${e}: ${t}`).join(" \xB7 ")} \u2014 M\u1EDF l\u1EA1i thi\u1EBFt k\u1EBF: ${location.origin}${location.pathname}${location.hash}`.slice(0,900))}#dat-lich`)}">G\u1EEDi thi\u1EBFt k\u1EBF cho T Gold <span aria-hidden="true">\u2192</span></a>`:"",wo=n=>(n.metal2===n.metal&&(n.metal2=n.metal==="vang-trang"?"vang":"vang-trang"),n),Z=wo(gM());if(xi){let n=document.querySelector(".pane-head .kick");n&&(n.textContent=`Tinh ch\u1EC9nh thi\u1EBFt k\u1EBF ri\xEAng \xB7 ${Zl[xi].ten}`)}var si=xa("#cfg"),_i=xa("#steps"),Dn=0,Yl=Hl(Z),_M=n=>{let e=typeof n.label=="function"?n.label(Z):n.label;if(n.sel){let a=Wd(n,Z),o=n.hint?n.hint(Z):"";return`<div class="grp"><label class="fld"><span>${e}</span><select data-k="${n.k}">${a.map(([c,l])=>`<option value="${bi(c)}"${c===Z[n.k]?" selected":""}>${bi(l)}</option>`).join("")}</select></label>${o?`<p class="hint">${bi(o)}</p>`:""}</div>`}let t=Wd(n,Z),i=t.find(a=>a[0]===Z[n.k]),s=t.some(a=>String(a[2]||"").startsWith("<svg")),r=n.hint?n.hint(Z):"";return`<fieldset class="grp"><legend><span>${e}</span><b>${bi(i?i[1]:"")}</b></legend>
    <div class="${s?"cards":"chips"}" data-g="${n.k}" role="radiogroup" aria-label="${e}">${t.map(([a,o,c])=>`<button type="button" role="radio" aria-checked="${a===Z[n.k]}" data-k="${n.k}" data-v="${bi(JSON.stringify(a))}">${c?String(c).startsWith("<svg")?c:`<i style="background:${c}"></i>`:""}<span>${bi(o)}</span></button>`).join("")}</div>${r?`<p class="hint">${bi(r)}</p>`:""}</fieldset>`};function Fs(n=!1){let e=Ao(),t=e.length;Dn=Math.min(Dn,t);let i=[...e.map(a=>a.tab),"T\xF3m t\u1EAFt"],s={top:si.scrollTop,strips:{}};si.querySelectorAll(".cards[data-g]").forEach(a=>{s.strips[a.dataset.g]=a.scrollLeft}),_i.innerHTML=i.map((a,o)=>`<button type="button" role="tab" id="tab-${o}" aria-selected="${o===Dn}" aria-controls="cfg" tabindex="${o===Dn?0:-1}" data-step="${o}">${o<t?`<span>${String(o+1).padStart(2,"0")}</span>`:""}${a}</button>`).join(""),si.setAttribute("aria-labelledby",`tab-${Dn}`),jd();let r=n?" fade":"";if(Dn<t){let a=e[Dn];si.innerHTML=`<section class="sec${r}"><h2 class="sec-h"><span>${String(Dn+1).padStart(2,"0")}</span>${km(a)}</h2>
      ${a.groups.filter(o=>o.show(Z)).map(_M).join("")}
      ${a.id==="finish"?`<div class="row2"><label class="fld"><span>Size tay</span><select data-k="size">${mM.map(o=>`<option value="${o}"${o===Z.size?" selected":""}>${o?`Size ${o}`:"Ch\u01B0a bi\u1EBFt \xB7 T Gold \u0111o gi\xFAp"}</option>`).join("")}</select></label>
        <label class="fld"><span>Kh\u1EAFc ch\u1EEF l\xF2ng nh\u1EABn</span><input data-k="engrave" maxlength="20" placeholder="T\u1ED1i \u0111a 20 k\xFD t\u1EF1" value="${bi(Z.engrave)}"></label></div>
        <fieldset class="grp"><legend><span>Ki\u1EC3u ch\u1EEF kh\u1EAFc</span><b>${Z.engraveFont==="script"?"Ch\u1EEF vi\u1EBFt tay":"Ch\u1EEF in"}</b></legend><div class="chips" data-g="engraveFont" role="radiogroup" aria-label="Ki\u1EC3u ch\u1EEF kh\u1EAFc">${[["serif","Ch\u1EEF in"],["script","Ch\u1EEF vi\u1EBFt tay"]].map(([o,c])=>`<button type="button" role="radio" aria-checked="${o===Z.engraveFont}" data-k="engraveFont" data-v="${bi(JSON.stringify(o))}"><span>${c}</span></button>`).join("")}</div>
        <div class="see" style="margin-top:12px"><button type="button" class="btn-l" data-see-engrave${Z.engrave?"":" disabled"}>Xem ch\u1EEF kh\u1EAFc</button></div><p class="hint">Ch\u1EEF kh\u1EAFc hi\u1EC7n \u1EDF \u0111\xE1y l\xF2ng nh\u1EABn tr\xEAn h\xECnh 3D. B\u1EA5m \u201CXem ch\u1EEF kh\u1EAFc\u201D \u0111\u1EC3 nh\xECn v\xE0o l\xF2ng nh\u1EABn.</p></fieldset>`:""}
      <div class="next"><button type="button" class="btn-next" data-step="${Dn+1}">${Dn+1<t?`Ti\u1EBFp: ${km(e[Dn+1])}`:"Xem thi\u1EBFt k\u1EBF c\u1EE7a b\u1EA1n"} <span aria-hidden="true">\u2192</span></button></div></section>`}else si.innerHTML=`<section class="sec sum${r}" aria-live="polite"><h2 class="sec-h"><span>\u2726</span>Thi\u1EBFt k\u1EBF c\u1EE7a b\u1EA1n</h2><ul>${Gm().map(([a,o])=>`<li><span>${a}</span><b>${bi(o)}</b></li>`).join("")}</ul>
      <p class="note"><b>H\xECnh 3D m\xF4 ph\u1ECFng.</b> ${xi?"B\u1EA3n 3D n\xE0y d\u1EF1ng theo \u1EA3nh s\u1EA3n ph\u1EA9m n\xEAn k\xEDch th\u01B0\u1EDBc ch\u1EC9 l\xE0 t\u01B0\u01A1ng \u0111\u1ED1i. ":""}S\u1ED1 vi\xEAn v\xE0 c\u1EE1 \u0111\xE1 qu\xFD l\xE0 theo h\xECnh 3D; khi ch\u1EBF t\xE1c, x\u01B0\u1EDFng T Gold c\xE2n ch\u1EC9nh l\u1EA1i theo size tay c\u1EE7a b\u1EA1n. M\xE0u v\xE0ng v\xE0 \u0111\u1ED9 l\u1EA5p l\xE1nh c\u1EE7a \u0111\xE1 qu\xFD c\xF3 th\u1EC3 kh\xE1c ch\xFAt \xEDt so v\u1EDBi s\u1EA3n ph\u1EA9m th\u1EADt. Size tay v\xE0 tu\u1ED5i v\xE0ng \u0111\u01B0\u1EE3c ghi nh\u1EADn \u0111\u1EC3 T Gold t\u01B0 v\u1EA5n, kh\xF4ng l\xE0m thay \u0111\u1ED5i h\xECnh 3D.</p>
      ${bM(Gm())}
      <button type="button" class="btn-l" data-reset>${xi?"V\u1EC1 m\u1EABu g\u1ED1c":"V\u1EC1 thi\u1EBFt k\u1EBF m\u1EB7c \u0111\u1ECBnh"}</button></section>`;n?si.scrollTop=0:(si.scrollTop=s.top,si.querySelectorAll(".cards[data-g]").forEach(a=>{s.strips[a.dataset.g]!=null&&(a.scrollLeft=s.strips[a.dataset.g])})),xM()}function jd(){_i.classList.toggle("end",_i.scrollLeft+_i.clientWidth>=_i.scrollWidth-4)}_i.addEventListener("scroll",jd,{passive:!0});addEventListener("resize",jd);function Jl(n,e=!1){Dn=Math.max(0,Math.min(Ao().length,n)),Fs(!0);let t=_i.querySelector('[aria-selected="true"]');_i.scrollTo({left:t.offsetLeft-(_i.clientWidth-t.offsetWidth)/2,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"}),e&&t.focus({preventScroll:!0})}var Od="";function xM(){let n=xa("#stamp");n.textContent=Z.karat,xa("#spec-metal").textContent=Z.twoTone!=="none"?`${ri[Z.metal][0]} + ${ri[Z.metal2][0]}`:ri[Z.metal][0],xa("#spec-stone").textContent=ii(Z)?`M\u1EB7t ch\u1EEF \u201C${Z.faceLetter}\u201D \xB7 b\u1EA3n ${hn(Z.faceW)} mm`:Di(Z)?`Vi\xEAn ch\u1EE7 ${qn[Z.shape].vi.toLowerCase()} ${$l(Z)}`:Ct(Z)?`Nh\u1EABn m\u1EB7t \u0111\xE1 \xB7 b\u1EA3n ${hn(Z.faceW)} mm`:`Nh\u1EABn b\u1EA3n ${hn(Z.bandW)} mm`;let e=`${Z.karat}|${Z.metal}|${Z.twoTone}|${Z.metal2}`;Od&&e!==Od&&(n.classList.remove("press"),n.offsetWidth,n.classList.add("press")),Od=e}function Ds(n){for(let e of Ao())for(let t of e.groups)if(t.k===n&&t.show(Z)){let i=Wd(t,Z).find(s=>s[0]===Z[n]);return i?i[1]:""}return""}var Ns=n=>n&&n.charAt(0).toLowerCase()+n.slice(1),Bm={rail:"m\xE9p g\u1EDD n\u1ED5i",band:"m\xE9p vi\u1EC1n tr\u01A1n b\u1EA3n r\u1ED9ng",milgrain:"m\xE9p vi\u1EC1n h\u1EA1t",pave:"m\xE9p ch\u1EA1y h\xE0ng pav\xE9",bevel:"m\xE9p v\xE1t \u0111\xEDnh pav\xE9",notch:"m\xE9p kh\xEDa r\u0103ng"},vM={milgrain:"h\xF4ng vi\u1EC1n h\u1EA1t",pave1:"h\xF4ng m\u1ED9t h\xE0ng \u0111\xE1",pave2:"h\xF4ng hai h\xE0ng \u0111\xE1",pave3:"h\xF4ng ba h\xE0ng \u0111\xE1"},zm={flutes:"g\xE2n d\u1ECDc",pave:"m\u1ED9t h\xE0ng \u0111\xE1 ch\u1EA1y xu\u1ED1ng \u0111ai",milgrain:"hai \u0111\u01B0\u1EDDng vi\u1EC1n h\u1EA1t"};function ql(n){var s;let e=Yl.userData.stats,t=Object.entries(e.sizes).filter(([r])=>r.startsWith(`${n}|`)).map(([r,a])=>{let[,o,c]=r.split("|");return{shape:o,d:Number(c),n:a}});if(!t.length)return"";let i={};for(let r of t)(i[s=r.shape]||(i[s]=[])).push(r);return Object.entries(i).map(([r,a])=>{let o=a.reduce((u,d)=>u+d.n,0),c=a.map(u=>u.d),l=Math.min(...c),h=Math.max(...c);return`${o} vi\xEAn ${{bag2:"baguette, d\xE0i",baguette:"baguette, d\xE0i",taperedBaguette:"baguette thon, d\xE0i",carre:"vu\xF4ng, c\u1EA1nh"}[r]||"tr\xF2n"} ${l===h?hn(l):`${hn(l)}\u2013${hn(h)}`} mm`}).join(" + ")}function Gm(){let n=Z.twoTone!=="none",e={on:", \u0111\xEDnh \u0111\xE1 tr\xF2n tr\xEAn n\xE9t ch\u1EEF",bag:", \u0111\xEDnh baguette tr\xEAn n\xE9t ch\u1EEF",off:", ch\u1EEF v\xE0ng tr\u01A1n"},t=Ct(Z)?[["Ki\u1EC3u nh\u1EABn",ss(Z)?`Nh\u1EABn m\u1EB7t \u0111\xE1 \xB7 \xF4m vi\xEAn ch\u1EE7, kh\xF4ng m\u1EB7t \xB7 b\u1EA3n vai ${hn(Z.faceW)} mm`:`Nh\u1EABn m\u1EB7t \u0111\xE1 \xB7 m\u1EB7t ${Ns(Hm[Z.top])}, ${{flat:"ph\u1EB3ng",dome:"v\xF2m",bombe:"v\xF2m cao"}[Z.dome]} \xB7 b\u1EA3n m\u1EB7t ${hn(Z.faceW)} mm \xB7 ${Ns(Ds("height").split(",")[0])}`],ii(Z)?["Gi\u1EEFa m\u1EB7t nh\u1EABn",`Ch\u1EEF c\xE1i n\u1ED5i \u201C${Z.faceLetter}\u201D${e[Z.letterStone]}${Z.letterTurn==="on"?" \xB7 xoay d\u1ECDc theo v\xF2ng nh\u1EABn":""}${Z.facePave!=="on"?Z.faceField==="satin"?" \xB7 n\u1EC1n nh\xE1m m\u1EDD":" \xB7 n\u1EC1n b\xF3ng":""}`]:Xl(Z)?["Gi\u1EEFa m\u1EB7t nh\u1EABn","Kh\xF4ng vi\xEAn ch\u1EE7 \xB7 h\xE0ng \u0111\xE1 ch\u1EA1y li\u1EC1n qua m\u1EB7t"]:jl(Z)?["Gi\u1EEFa m\u1EB7t nh\u1EABn","Kh\xF4ng vi\xEAn ch\u1EE7 \xB7 m\u1EB7t tr\u01A1n"]:["Vi\xEAn ch\u1EE7",[`${qn[Z.shape].vi} ${$l(Z)}`,mr[Z.gem][0],Ns(Bd[Z.setting]),["prong4","prong6"].includes(Z.setting)&&Z.prongTip==="claw"&&"\u0111\u1EA7u ch\u1EA5u m\xF3ng vu\u1ED1t",{low:ss(Z)?"":"\xF4m s\xE1t m\u1EB7t nh\u1EABn",high:"nh\xF4 cao"}[Z.headH],Z.plinth==="on"?"c\xF3 b\u1EC7 n\xE2ng":""].filter(Boolean).join(" \xB7 ")],["M\u1EB7t nh\u1EABn",pr(Z)&&[!ii(Z)&&Z.frame!=="none"&&Wm[Z.frame],jl(Z)&&Z.plinth==="on"&&"c\xF3 b\u1EC7 n\xE2ng",Hd(Z)&&Z.corners==="on"&&"\u0111\xE1 g\xF3c",Hd(Z)&&Z.corners==="row"&&"h\xE0ng ba vi\xEAn hai \u0111\u1EA7u m\u1EB7t",Kl(Z)&&Z.faceBars==="on"&&"thanh baguette hai m\xE9p",Z.facePave==="on"&&"l\xE1t \u0111\xE1 k\xEDn m\u1EB7t",Z.faceLen==="tight"&&!(Kl(Z)&&Z.faceBars==="on")&&"m\u1EB7t \xF4m s\xE1t ph\u1EA7n gi\u1EEFa",Z.rim!=="none"&&Vl(Z)&&(Z.rim==="rail"?"vi\u1EC1n g\u1EDD n\u1ED5i":"vi\u1EC1n h\u1EA1t")].filter(Boolean).join(" \xB7 ")],[Xl(Z)?"H\xE0ng \u0111\xE1":"Hai vai",[_a(Z)?`Ch\u1EEF c\xE1i \u201C${Z.letter}\u201D${Z.letter2&&Z.letter2!==Z.letter?` (vai ph\u1EA3i) v\xE0 \u201C${Z.letter2}\u201D (vai tr\xE1i)`:""}${e[Z.letterStone]}`:zd[Z.shoulder],["tiers","ladderT"].includes(Z.shoulder)&&Z.tierRows===2&&"hai h\xE0ng \u0111\xE1 m\u1ED7i b\u1EADc",Ds("shoulderLen")&&`d\xE0i t\u1EDBi ${Ns(Ds("shoulderLen"))}`,Z.edge!=="none"&&Bm[Z.edge],vM[Z.flank]].filter(Boolean).join(" \xB7 ")],["\u0110ai",`${Ds("shank")} \xB7 b\u1EA3n d\u01B0\u1EDBi ${hn(Z.bottomW)} mm${zm[Z.shankDeco]?` \xB7 ${zm[Z.shankDeco]}`:""}`],["L\xF2ng nh\u1EABn",Gd[Z.lattice]]]:[["Ki\u1EC3u nh\u1EABn",`Nh\u1EABn b\u1EA3n ${hn(Z.bandW)} mm \xB7 ${Ns(Ds("bandProfile"))}`],["H\xE0ng \u0111\xE1",[Vd[Z.bandStones],Ds("cover")&&Ns(Ds("cover")),Z.edge!=="none"&&Bm[Z.edge]].filter(Boolean).join(" \xB7 ")]];return xi&&t.unshift(["M\u1EABu g\u1ED1c",Zl[xi].ten]),t.push(["\u0110\xE1 t\u1EA5m",Km(Z)&&ql("accent")&&`${mr[Z.accentGem][0]} \xB7 ${ql("accent")}`],[To(Z)&&Z.bandStones==="stations"?"\u0110\xE1 \u0111i\u1EC3m":"\u0110\xE1 baguette & \u0111\xE1 \u0111i\u1EC3m",jm(Z)&&ql("side")&&`${mr[Z.sideGem][0]} \xB7 ${ql("side")}`],["V\xE0ng",`${ri[Z.metal][0]} ${Z.karat}${n?` \xB7 ${{head:"\u1ED5 vi\xEAn ch\u1EE7",letter:"ch\u1EEF c\xE1i",settings:"to\xE0n b\u1ED9 \u1ED5 \u0111\xE1",shoulder:"g\xE2n ch\u1EEF V"}[Z.twoTone]} ${Ns(ri[Z.metal2][0])}`:""} \xB7 ${Ns(Ds("finish"))}`],["Size tay",Z.size?`Size ${Z.size}`:"Ch\u01B0a bi\u1EBFt"],["Kh\u1EAFc ch\u1EEF",Z.engrave?`\u201C${Z.engrave}\u201D \xB7 ${Z.engraveFont==="script"?"ch\u1EEF vi\u1EBFt tay":"ch\u1EEF in"}`:"\u2014"]),t.filter(([,i])=>i)}var Ym=xa("#viewer"),yM=matchMedia("(pointer: coarse)").matches,MM={gemStudio:{spots:28},bloom:{strength:.1,radius:0,threshold:4},bloomKernel:3,gemStudioRest:{spots:28},sideGlint:{strength:.048,kernel:2,thrK:1},paveGlint:{maxD:2,thrK:1.5,kernel:2,strength:.028}},wn=lm(Ym,{look:{envSoft:.004,...MM},object:Yl,metal:Z.metal,metal2:Z.metal2,gem:Z.gem,accentGem:Z.accentGem,sideGem:Z.sideGem,view:[.55,.72,1],start:1.18,touchAll:!0,holdPan:!0,labels:{hint:yM?"Vu\u1ED1t \u0111\u1EC3 xoay \xB7 ch\u1EE5m \u0111\u1EC3 ph\xF3ng to \xB7 gi\u1EEF y\xEAn 3 gi\xE2y \u0111\u1EC3 d\u1ECBch khung":"K\xE9o \u0111\u1EC3 xoay \xB7 cu\u1ED9n \u0111\u1EC3 ph\xF3ng to \xB7 gi\u1EEF y\xEAn 3 gi\xE2y \u0111\u1EC3 d\u1ECBch khung",pan:"K\xE9o \u0111\u1EC3 d\u1ECBch khung"}});window.tg3d=wn;var SM=["metal","metal2","gem","accentGem","sideGem","karat","size"],kd=!1,Ql=()=>{Yl=Hl(Z),wn.setObject(Yl)};function qd(n){SM.includes(n)||kd||(kd=!0,requestAnimationFrame(()=>{kd=!1,Ql(),Dn>=Ao().length&&Fs()})),n==="metal"&&wn.setMetal(Z.metal),n==="metal2"&&wn.setMetal2(Z.metal2),n==="gem"&&wn.setGem(Z.gem,"center"),n==="accentGem"&&wn.setGem(Z.accentGem,"accent"),n==="sideGem"&&wn.setGem(Z.sideGem,"side")}si.addEventListener("click",n=>{let e=n.target.closest("button[data-k]");if(e){let i=e.dataset.k;Z[i]=JSON.parse(e.dataset.v);let s=Z.metal2;Z=wo(ur(Z)),va(Z),qd(i),Z.metal2!==s&&qd("metal2"),Fs();return}if(n.target.closest("[data-see-engrave]")){TM();return}let t=n.target.closest("[data-step]");if(t){Jl(Number(t.dataset.step));return}n.target.closest("[data-reset]")&&(Z=wo(ur(Xd())),va(Z),Ql(),wn.setMetal(Z.metal),wn.setMetal2(Z.metal2),wn.setGem(Z.gem,"center"),wn.setGem(Z.accentGem,"accent"),wn.setGem(Z.sideGem,"side"),Fs())});_i.addEventListener("click",n=>{let e=n.target.closest("[data-step]");e&&Jl(Number(e.dataset.step))});_i.addEventListener("keydown",n=>{let e=Ao().length+1,t={ArrowRight:1,ArrowLeft:-1}[n.key];t&&(n.preventDefault(),Jl((Dn+t+e)%e,!0)),(n.key==="Home"||n.key==="End")&&(n.preventDefault(),Jl(n.key==="Home"?0:e-1,!0))});si.addEventListener("change",n=>{let e=n.target,t=e.dataset.k;t==="size"?(Z.size=e.value,va(Z),Fs()):e.tagName==="SELECT"&&t in Z&&(Z[t]=e.value,Z=wo(ur(Z)),va(Z),qd(t),Fs())});var Vm=0;si.addEventListener("input",n=>{let e=n.target;if(e.dataset.k==="engrave"){Z.engrave=e.value.slice(0,20),va(Z);let t=si.querySelector("[data-see-engrave]");t&&(t.disabled=!Z.engrave),clearTimeout(Vm),Vm=setTimeout(Ql,280)}});var TM=()=>{wn.setPlay(!1),wn.lookAt([0,-8.6,0],.62,[0,.62,1])};for(let n of['600 112px "Cormorant Garamond"','120px "Pinyon Script"'])document.fonts?.load(n).then(()=>{Z.engrave&&Ql()}).catch(()=>{});Ym.addEventListener("tg3d:metal",n=>{Z.metal=n.detail;let e=Z.metal2;wo(Z),Z.metal2!==e&&wn.setMetal2(Z.metal2),va(Z),Fs()});Fs();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
