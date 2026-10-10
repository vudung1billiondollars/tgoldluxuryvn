var Ms={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ss={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zf=0,Xh=1,Gf=2;var so=1,Vf=2,ia=3,Vn=0,ln=1,Tn=2,ei=0,sa=1,ro=2,jh=3,Kh=4,er=5;var ti=100,Hf=101,Wf=102,qf=103,Xf=104,tr=200,wn=201,jf=202,Kf=203,$h=204,Yh=205,$f=206,Yf=207,Jf=208,Zf=209,Qf=210,ep=211,tp=212,np=213,ip=214,cc=0,lc=1,hc=2,Or=3,uc=4,dc=5,fc=6,pc=7,Jh=0,sp=1,rp=2,Hn=0,Zh=1,Qh=2,eu=3,tu=4,nu=5,iu=6,su=7,Nh="attached",ap="detached",ru=300,Ts=301,nr=302,Nc=303,Fc=304,ao=306,bs=1e3,Qn=1001,kr=1002,Xt=1003,Uc=1004;var ir=1005;var jt=1006,ra=1007;var Pn=1008;var In=1009,au=1010,ou=1011,aa=1012,Oc=1013,gi=1014,Wn=1015,$t=1016,kc=1017,Bc=1018,oa=1020,cu=35902,lu=35899,hu=1021,uu=1022,qn=1023,Ri=1026,ws=1027,zc=1028,Gc=1029,As=1030,Vc=1031;var Hc=1033,oo=33776,co=33777,lo=33778,ho=33779,Wc=35840,qc=35841,Xc=35842,jc=35843,Kc=36196,$c=37492,Yc=37496,Jc=37488,Zc=37489,uo=37490,Qc=37491,el=37808,tl=37809,nl=37810,il=37811,sl=37812,rl=37813,al=37814,ol=37815,cl=37816,ll=37817,hl=37818,ul=37819,dl=37820,fl=37821,pl=36492,ml=36494,gl=36495,bl=36283,_l=36284,fo=36285,xl=36286;var qs=2300,Xs=2301,rc=2302,Fh=2303,Uh=2400,Oh=2401,kh=2402,op=2500;var du=0,po=1,ca=2,cp=3200;var vl=0,lp=1,is="",qt="srgb",Mn="srgb-linear",Na="linear",St="srgb";var ac=7680;var hp=519,up=512,dp=513,fp=514,yl=515,pp=516,mp=517,Ml=518,gp=519,fu=35044;var pu="300 es",fi=2e3,Br=2001;function tg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ng(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function zr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function bp(){let n=zr("canvas");return n.style.display="block",n}var ef={},Gr=null;function Fa(...n){let e="THREE."+n.shift();Gr?Gr("log",e,...n):console.log(e,...n)}function _p(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ke(...n){n=_p(n);let e="THREE."+n.shift();if(Gr)Gr("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function tt(...n){n=_p(n);let e="THREE."+n.shift();if(Gr)Gr("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ws(...n){let e=n.join(" ");e in ef||(ef[e]=!0,Ke(...n))}function xp(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var vp={[cc]:lc,[hc]:fc,[uc]:pc,[Or]:dc,[lc]:cc,[fc]:hc,[pc]:uc,[dc]:Or},mi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tf=1234567,La=Math.PI/180,js=180/Math.PI;function pi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]).toLowerCase()}function rt(n,e,t){return Math.max(e,Math.min(t,n))}function mu(n,e){return(n%e+e)%e}function ig(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function sg(n,e,t){return n!==e?(t-n)/(e-n):0}function Da(n,e,t){return(1-t)*n+t*e}function rg(n,e,t,i){return Da(n,e,1-Math.exp(-t*i))}function ag(n,e=1){return e-Math.abs(mu(n,e*2)-e)}function og(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function cg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function lg(n,e){return n+Math.floor(Math.random()*(e-n+1))}function hg(n,e){return n+Math.random()*(e-n)}function ug(n){return n*(.5-Math.random())}function dg(n){n!==void 0&&(tf=n);let e=tf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function fg(n){return n*La}function pg(n){return n*js}function mg(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function gg(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function bg(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function _g(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+i)/2),h=a((e+i)/2),u=r((e-i)/2),d=a((e-i)/2),f=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*h,c*u,c*d,o*l);break;case"YZY":n.set(c*d,o*h,c*u,o*l);break;case"ZXZ":n.set(c*u,c*d,o*h,o*l);break;case"XZX":n.set(o*h,c*g,c*f,o*l);break;case"YXY":n.set(c*f,o*h,c*g,o*l);break;case"ZYZ":n.set(c*g,c*f,o*h,o*l);break;default:Ke("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function di(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function wt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var mo={DEG2RAD:La,RAD2DEG:js,generateUUID:pi,clamp:rt,euclideanModulo:mu,mapLinear:ig,inverseLerp:sg,lerp:Da,damp:rg,pingpong:ag,smoothstep:og,smootherstep:cg,randInt:lg,randFloat:hg,randFloatSpread:ug,seededRandom:dg,degToRad:fg,radToDeg:pg,isPowerOfTwo:mg,ceilPowerOfTwo:gg,floorPowerOfTwo:bg,setQuaternionFromProperEuler:_g,normalize:wt,denormalize:di},yu=class yu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};yu.prototype.isVector2=!0;var Le=yu,Kt=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],d=r[a+0],f=r[a+1],g=r[a+2],b=r[a+3];if(u!==b||c!==d||l!==f||h!==g){let m=c*d+l*f+h*g+u*b;m<0&&(d=-d,f=-f,g=-g,b=-b,m=-m);let p=1-o;if(m<.9995){let _=Math.acos(m),M=Math.sin(_);p=Math.sin(p*_)/M,o=Math.sin(o*_)/M,c=c*p+d*o,l=l*p+f*o,h=h*p+g*o,u=u*p+b*o}else{c=c*p+d*o,l=l*p+f*o,h=h*p+g*o,u=u*p+b*o;let _=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=_,l*=_,h*=_,u*=_}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-o*f,e[t+2]=l*g+h*f+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),u=o(r/2),d=c(i/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:Ke("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-s*o,this._w=a*h-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Mu=class Mu{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+c*l+a*u-o*h,this.y=i+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return oh.copy(this).projectOnVector(e),this.sub(oh)}reflect(e){return this.sub(oh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Mu.prototype.isVector3=!0;var P=Mu,oh=new P,nf=new Kt,Su=class Su{constructor(e,t,i,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l)}set(e,t,i,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],b=s[0],m=s[3],p=s[6],_=s[1],M=s[4],x=s[7],v=s[2],S=s[5],E=s[8];return r[0]=a*b+o*_+c*v,r[3]=a*m+o*M+c*S,r[6]=a*p+o*x+c*E,r[1]=l*b+h*_+u*v,r[4]=l*m+h*M+u*S,r[7]=l*p+h*x+u*E,r[2]=d*b+f*_+g*v,r[5]=d*m+f*M+g*S,r[8]=d*p+f*x+g*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*r*h+i*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,g=t*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/g;return e[0]=u*b,e[1]=(s*l-h*i)*b,e[2]=(o*i-s*a)*b,e[3]=d*b,e[4]=(h*t-s*c)*b,e[5]=(s*r-o*t)*b,e[6]=f*b,e[7]=(i*c-l*t)*b,e[8]=(a*t-i*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Ws("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ch.makeScale(e,t)),this}rotate(e){return Ws("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ch.makeRotation(-e)),this}translate(e,t){return Ws("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ch.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Su.prototype.isMatrix3=!0;var st=Su,ch=new st,sf=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rf=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xg(){let n={enabled:!0,workingColorSpace:Mn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===St&&(s.r=Xi(s.r),s.g=Xi(s.g),s.b=Xi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===St&&(s.r=Ur(s.r),s.g=Ur(s.g),s.b=Ur(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===is?Na:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ws("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ws("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Mn]:{primaries:e,whitePoint:i,transfer:Na,toXYZ:sf,fromXYZ:rf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:e,whitePoint:i,transfer:St,toXYZ:sf,fromXYZ:rf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}}),n}var lt=xg();function Xi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ur(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Mr,mc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Mr===void 0&&(Mr=zr("canvas")),Mr.width=e.width,Mr.height=e.height;let s=Mr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Mr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=zr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Xi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Xi(t[i]/255)*255):t[i]=Xi(t[i]);return{data:t,width:e.width,height:e.height}}else return Ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},vg=0,Vr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:vg++}),this.uuid=pi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(lh(s[a].image)):r.push(lh(s[a]))}else r=lh(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function lh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?mc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ke("Texture: Unable to serialize Texture."),{})}var yg=0,hh=new P,tn=class n extends mi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Qn,s=Qn,r=jt,a=Pn,o=qn,c=In,l=n.DEFAULT_ANISOTROPY,h=is){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yg++}),this.uuid=pi(),this.name="",this.source=new Vr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(hh).x}get height(){return this.source.getSize(hh).y}get depth(){return this.source.getSize(hh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ke(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ru)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bs:e.x=e.x-Math.floor(e.x);break;case Qn:e.x=e.x<0?0:1;break;case kr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bs:e.y=e.y-Math.floor(e.y);break;case Qn:e.y=e.y<0?0:1;break;case kr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=ru;tn.DEFAULT_ANISOTROPY=1;var Tu=class Tu{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],b=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+b)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(l+1)/2,x=(f+1)/2,v=(p+1)/2,S=(h+d)/4,E=(u+b)/4,y=(g+m)/4;return M>x&&M>v?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=S/i,r=E/i):x>v?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=S/s,r=y/s):v<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),i=E/r,s=y/r),this.set(i,s,r,t),this}let _=Math.sqrt((m-g)*(m-g)+(u-b)*(u-b)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-b)/_,this.z=(d-h)/_,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Tu.prototype.isVector4=!0;var yt=Tu,gc=class extends mi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new tn(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Vr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gt=class extends gc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ua=class extends tn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var bc=class extends tn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Dc=class Dc{constructor(e,t,i,s,r,a,o,c,l,h,u,d,f,g,b,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l,h,u,d,f,g,b,m)}set(e,t,i,s,r,a,o,c,l,h,u,d,f,g,b,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=b,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dc().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Sr.setFromMatrixColumn(e,0).length(),r=1/Sr.setFromMatrixColumn(e,1).length(),a=1/Sr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,b=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-b*l,t[9]=-o*c,t[2]=b-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,g=l*h,b=l*u;t[0]=d+b*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=b+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,g=l*h,b=l*u;t[0]=d-b*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=b-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,b=o*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+b,t[1]=c*u,t[5]=b*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,g=o*c,b=o*l;t[0]=c*h,t[4]=b-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-b*u}else if(e.order==="XZY"){let d=a*c,f=a*l,g=o*c,b=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+b,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=b*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mg,e,Sg)}lookAt(e,t,i){let s=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),hs.crossVectors(i,Bn),hs.lengthSq()===0&&(Math.abs(i.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),hs.crossVectors(i,Bn)),hs.normalize(),No.crossVectors(Bn,hs),s[0]=hs.x,s[4]=No.x,s[8]=Bn.x,s[1]=hs.y,s[5]=No.y,s[9]=Bn.y,s[2]=hs.z,s[6]=No.z,s[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],b=i[6],m=i[10],p=i[14],_=i[3],M=i[7],x=i[11],v=i[15],S=s[0],E=s[4],y=s[8],w=s[12],C=s[1],D=s[5],B=s[9],X=s[13],k=s[2],$=s[6],Q=s[10],z=s[14],J=s[3],G=s[7],q=s[11],F=s[15];return r[0]=a*S+o*C+c*k+l*J,r[4]=a*E+o*D+c*$+l*G,r[8]=a*y+o*B+c*Q+l*q,r[12]=a*w+o*X+c*z+l*F,r[1]=h*S+u*C+d*k+f*J,r[5]=h*E+u*D+d*$+f*G,r[9]=h*y+u*B+d*Q+f*q,r[13]=h*w+u*X+d*z+f*F,r[2]=g*S+b*C+m*k+p*J,r[6]=g*E+b*D+m*$+p*G,r[10]=g*y+b*B+m*Q+p*q,r[14]=g*w+b*X+m*z+p*F,r[3]=_*S+M*C+x*k+v*J,r[7]=_*E+M*D+x*$+v*G,r[11]=_*y+M*B+x*Q+v*q,r[15]=_*w+M*X+x*z+v*F,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],b=e[7],m=e[11],p=e[15],_=c*f-l*d,M=o*f-l*u,x=o*d-c*u,v=a*f-l*h,S=a*d-c*h,E=a*u-o*h;return t*(b*_-m*M+p*x)-i*(g*_-m*v+p*S)+s*(g*M-b*v+p*E)-r*(g*x-b*S+m*E)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-i*(r*h-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],b=e[13],m=e[14],p=e[15],_=t*o-i*a,M=t*c-s*a,x=t*l-r*a,v=i*c-s*o,S=i*l-r*o,E=s*l-r*c,y=h*b-u*g,w=h*m-d*g,C=h*p-f*g,D=u*m-d*b,B=u*p-f*b,X=d*p-f*m,k=_*X-M*B+x*D+v*C-S*w+E*y;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let $=1/k;return e[0]=(o*X-c*B+l*D)*$,e[1]=(s*B-i*X-r*D)*$,e[2]=(b*E-m*S+p*v)*$,e[3]=(d*S-u*E-f*v)*$,e[4]=(c*C-a*X-l*w)*$,e[5]=(t*X-s*C+r*w)*$,e[6]=(m*x-g*E-p*M)*$,e[7]=(h*E-d*x+f*M)*$,e[8]=(a*B-o*C+l*y)*$,e[9]=(i*C-t*B-r*y)*$,e[10]=(g*S-b*x+p*_)*$,e[11]=(u*x-h*S-f*_)*$,e[12]=(o*w-a*D-c*y)*$,e[13]=(t*D-i*w+s*y)*$,e[14]=(b*M-g*v-m*_)*$,e[15]=(h*v-u*M+d*_)*$,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,g=r*u,b=a*h,m=a*u,p=o*u,_=c*l,M=c*h,x=c*u,v=i.x,S=i.y,E=i.z;return s[0]=(1-(b+p))*v,s[1]=(f+x)*v,s[2]=(g-M)*v,s[3]=0,s[4]=(f-x)*S,s[5]=(1-(d+p))*S,s[6]=(m+_)*S,s[7]=0,s[8]=(g+M)*E,s[9]=(m-_)*E,s[10]=(1-(d+b))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Sr.set(s[0],s[1],s[2]).length(),o=Sr.set(s[4],s[5],s[6]).length(),c=Sr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),li.copy(this);let l=1/a,h=1/o,u=1/c;return li.elements[0]*=l,li.elements[1]*=l,li.elements[2]*=l,li.elements[4]*=h,li.elements[5]*=h,li.elements[6]*=h,li.elements[8]*=u,li.elements[9]*=u,li.elements[10]*=u,t.setFromRotationMatrix(li),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,s,r,a,o=fi,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s),g,b;if(c)g=r/(a-r),b=a*r/(a-r);else if(o===fi)g=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===Br)g=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=b,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=fi,c=!1){let l=this.elements,h=2/(t-e),u=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s),g,b;if(c)g=1/(a-r),b=a/(a-r);else if(o===fi)g=-2/(a-r),b=-(a+r)/(a-r);else if(o===Br)g=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=b,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Dc.prototype.isMatrix4=!0;var it=Dc,Sr=new P,li=new it,Mg=new P(0,0,0),Sg=new P(1,1,1),hs=new P,No=new P,Bn=new P,af=new it,of=new Kt,ji=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return af.makeRotationFromQuaternion(e),this.setFromRotationMatrix(af,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return of.setFromEuler(this),this.setFromQuaternion(of,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ji.DEFAULT_ORDER="XYZ";var Oa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Tg=0,cf=new P,Tr=new Kt,zi=new it,Fo=new P,Ta=new P,wg=new P,Ag=new Kt,lf=new P(1,0,0),hf=new P(0,1,0),uf=new P(0,0,1),df={type:"added"},Eg={type:"removed"},wr={type:"childadded",child:null},uh={type:"childremoved",child:null},Bt=class n extends mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new P,t=new ji,i=new Kt,s=new P(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new it},normalMatrix:{value:new st}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Tr.setFromAxisAngle(e,t),this.quaternion.multiply(Tr),this}rotateOnWorldAxis(e,t){return Tr.setFromAxisAngle(e,t),this.quaternion.premultiply(Tr),this}rotateX(e){return this.rotateOnAxis(lf,e)}rotateY(e){return this.rotateOnAxis(hf,e)}rotateZ(e){return this.rotateOnAxis(uf,e)}translateOnAxis(e,t){return cf.copy(e).applyQuaternion(this.quaternion),this.position.add(cf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lf,e)}translateY(e){return this.translateOnAxis(hf,e)}translateZ(e){return this.translateOnAxis(uf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Fo.copy(e):Fo.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(Ta,Fo,this.up):zi.lookAt(Fo,Ta,this.up),this.quaternion.setFromRotationMatrix(zi),s&&(zi.extractRotation(s.matrixWorld),Tr.setFromRotationMatrix(zi),this.quaternion.premultiply(Tr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(df),wr.child=e,this.dispatchEvent(wr),wr.child=null):tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Eg),uh.child=e,this.dispatchEvent(uh),uh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(df),wr.child=e,this.dispatchEvent(wr),wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ta,e,wg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ta,Ag,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Bt.DEFAULT_UP=new P(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var pn=class extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Rg={type:"move"},Hr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let b of e.hand.values()){let m=t.getJointPose(b,i),p=this._getHandJoint(l,b);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Rg)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new pn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},yp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},us={h:0,s:0,l:0},Uo={h:0,s:0,l:0};function dh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Xe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,lt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=lt.workingColorSpace){if(e=mu(e,1),t=rt(t,0,1),i=rt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=dh(a,r,e+1/3),this.g=dh(a,r,e),this.b=dh(a,r,e-1/3)}return lt.colorSpaceToWorking(this,s),this}setStyle(e,t=qt){function i(r){r!==void 0&&parseFloat(r)<1&&Ke("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ke("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){let i=yp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=Ur(e.r),this.g=Ur(e.g),this.b=Ur(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return lt.workingToColorSpace(fn.copy(this),e),Math.round(rt(fn.r*255,0,255))*65536+Math.round(rt(fn.g*255,0,255))*256+Math.round(rt(fn.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(fn.copy(this),t);let i=fn.r,s=fn.g,r=fn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(fn.copy(this),t),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=qt){lt.workingToColorSpace(fn.copy(this),e);let t=fn.r,i=fn.g,s=fn.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(us),this.setHSL(us.h+e,us.s+t,us.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(us),e.getHSL(Uo);let i=Da(us.h,Uo.h,t),s=Da(us.s,Uo.s,t),r=Da(us.l,Uo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fn=new Xe;Xe.NAMES=yp;var Wr=class extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ji,this.environmentIntensity=1,this.environmentRotation=new ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},hi=new P,Gi=new P,fh=new P,Vi=new P,Ar=new P,Er=new P,ff=new P,ph=new P,mh=new P,gh=new P,bh=new yt,_h=new yt,xh=new yt,gs=class n{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),hi.subVectors(e,t),s.cross(hi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){hi.subVectors(s,t),Gi.subVectors(i,t),fh.subVectors(e,t);let a=hi.dot(hi),o=hi.dot(Gi),c=hi.dot(fh),l=Gi.dot(Gi),h=Gi.dot(fh),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(e,t,i,s,r,a,o,c){return this.getBarycoord(e,t,i,s,Vi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Vi.x),c.addScaledVector(a,Vi.y),c.addScaledVector(o,Vi.z),c)}static getInterpolatedAttribute(e,t,i,s,r,a){return bh.setScalar(0),_h.setScalar(0),xh.setScalar(0),bh.fromBufferAttribute(e,t),_h.fromBufferAttribute(e,i),xh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(bh,r.x),a.addScaledVector(_h,r.y),a.addScaledVector(xh,r.z),a}static isFrontFacing(e,t,i,s){return hi.subVectors(i,t),Gi.subVectors(e,t),hi.cross(Gi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),Gi.subVectors(this.a,this.b),hi.cross(Gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Ar.subVectors(s,i),Er.subVectors(r,i),ph.subVectors(e,i);let c=Ar.dot(ph),l=Er.dot(ph);if(c<=0&&l<=0)return t.copy(i);mh.subVectors(e,s);let h=Ar.dot(mh),u=Er.dot(mh);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(Ar,a);gh.subVectors(e,r);let f=Ar.dot(gh),g=Er.dot(gh);if(g>=0&&f<=g)return t.copy(r);let b=f*l-c*g;if(b<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(Er,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return ff.subVectors(r,s),o=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(ff,o);let p=1/(m+b+d);return a=b*p,o=d*p,t.copy(i).addScaledVector(Ar,a).addScaledVector(Er,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Sn=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ui):ui.fromBufferAttribute(r,a),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Oo.copy(i.boundingBox)),Oo.applyMatrix4(e.matrixWorld),this.union(Oo)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wa),ko.subVectors(this.max,wa),Rr.subVectors(e.a,wa),Cr.subVectors(e.b,wa),Pr.subVectors(e.c,wa),ds.subVectors(Cr,Rr),fs.subVectors(Pr,Cr),zs.subVectors(Rr,Pr);let t=[0,-ds.z,ds.y,0,-fs.z,fs.y,0,-zs.z,zs.y,ds.z,0,-ds.x,fs.z,0,-fs.x,zs.z,0,-zs.x,-ds.y,ds.x,0,-fs.y,fs.x,0,-zs.y,zs.x,0];return!vh(t,Rr,Cr,Pr,ko)||(t=[1,0,0,0,1,0,0,0,1],!vh(t,Rr,Cr,Pr,ko))?!1:(Bo.crossVectors(ds,fs),t=[Bo.x,Bo.y,Bo.z],vh(t,Rr,Cr,Pr,ko))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Hi=[new P,new P,new P,new P,new P,new P,new P,new P],ui=new P,Oo=new Sn,Rr=new P,Cr=new P,Pr=new P,ds=new P,fs=new P,zs=new P,wa=new P,ko=new P,Bo=new P,Gs=new P;function vh(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Gs.fromArray(n,r);let o=s.x*Math.abs(Gs.x)+s.y*Math.abs(Gs.y)+s.z*Math.abs(Gs.z),c=e.dot(Gs),l=t.dot(Gs),h=i.dot(Gs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Qt=new P,zo=new Le,Cg=0,vt=class extends mi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=fu,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)zo.fromBufferAttribute(this,t),zo.applyMatrix3(e),this.setXY(t,zo.x,zo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=di(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=di(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=di(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=di(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=di(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),s=wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),s=wt(s,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var ka=class extends vt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ba=class extends vt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Tt=class extends vt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Pg=new Sn,Aa=new P,yh=new P,mn=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Pg.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Aa.subVectors(e,this.center);let t=Aa.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Aa,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Aa.copy(e.center).add(yh)),this.expandByPoint(Aa.copy(e.center).sub(yh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ig=0,Zn=new it,Mh=new Bt,Ir=new P,zn=new Sn,Ea=new Sn,cn=new P,bt=class n extends mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ig++}),this.uuid=pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tg(e)?Ba:ka)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new st().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,t,i){return Zn.makeTranslation(e,t,i),this.applyMatrix4(Zn),this}scale(e,t,i){return Zn.makeScale(e,t,i),this.applyMatrix4(Zn),this}lookAt(e){return Mh.lookAt(e),Mh.updateMatrix(),this.applyMatrix4(Mh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Tt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];zn.setFromBufferAttribute(r),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let i=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ea.setFromBufferAttribute(o),this.morphTargetsRelative?(cn.addVectors(zn.min,Ea.min),zn.expandByPoint(cn),cn.addVectors(zn.max,Ea.max),zn.expandByPoint(cn)):(zn.expandByPoint(Ea.min),zn.expandByPoint(Ea.max))}zn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)cn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(cn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)cn.fromBufferAttribute(o,l),c&&(Ir.fromBufferAttribute(e,l),cn.add(Ir)),s=Math.max(s,i.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new vt(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let y=0;y<i.count;y++)o[y]=new P,c[y]=new P;let l=new P,h=new P,u=new P,d=new Le,f=new Le,g=new Le,b=new P,m=new P;function p(y,w,C){l.fromBufferAttribute(i,y),h.fromBufferAttribute(i,w),u.fromBufferAttribute(i,C),d.fromBufferAttribute(r,y),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,C),h.sub(l),u.sub(l),f.sub(d),g.sub(d);let D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(b.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(D),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),o[y].add(b),o[w].add(b),o[C].add(b),c[y].add(m),c[w].add(m),c[C].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let y=0,w=_.length;y<w;++y){let C=_[y],D=C.start,B=C.count;for(let X=D,k=D+B;X<k;X+=3)p(e.getX(X+0),e.getX(X+1),e.getX(X+2))}let M=new P,x=new P,v=new P,S=new P;function E(y){v.fromBufferAttribute(s,y),S.copy(v);let w=o[y];M.copy(w),M.sub(v.multiplyScalar(v.dot(w))).normalize(),x.crossVectors(S,w);let D=x.dot(c[y])<0?-1:1;a.setXYZW(y,M.x,M.y,M.z,D)}for(let y=0,w=_.length;y<w;++y){let C=_[y],D=C.start,B=C.count;for(let X=D,k=D+B;X<k;X+=3)E(e.getX(X+0)),E(e.getX(X+1)),E(e.getX(X+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new vt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new P,r=new P,a=new P,o=new P,c=new P,l=new P,h=new P,u=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),b=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,b),l.fromBufferAttribute(i,m),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(b,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let b=0,m=c.length;b<m;b++){o.isInterleavedBufferAttribute?f=c[b]*o.data.stride+o.offset:f=c[b]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new vt(d,h,u)}if(this.index===null)return Ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,i);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,i);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},qr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=fu,this.updateRanges=[],this.version=0,this.uuid=pi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},yn=new P,Xr=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix4(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.applyNormalMatrix(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.transformDirection(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=di(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=di(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=di(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=di(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=di(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),s=wt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),s=wt(s,this.array),r=wt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Fa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new vt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Fa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Sh=new P,Lg=new P,Dg=new st,Gn=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Sh.subVectors(i,t).cross(Lg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Sh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Dg.getNormalMatrix(e),s=this.coplanarPoint(Sh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Ng=0,Rn=class extends mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ng++}),this.uuid=pi(),this.name="",this.type="Material",this.blending=sa,this.side=Vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$h,this.blendDst=Yh,this.blendEquation=ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ac,this.stencilZFail=ac,this.stencilZPass=ac,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ke(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Xe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Gn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Le().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Le().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Wi=new P,Th=new P,Go=new P,Vo=new P,Ki=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wi.copy(this.origin).addScaledVector(this.direction,t),Wi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Th.copy(e).add(t).multiplyScalar(.5),Go.copy(t).sub(e).normalize(),Vo.copy(this.origin).sub(Th);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Go),o=Vo.dot(this.direction),c=-Vo.dot(Go),l=Vo.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let b=1/h;u*=b,d*=b,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Th).addScaledVector(Go,d),f}intersectSphere(e,t){if(e.radius<0)return null;Wi.subVectors(e.center,this.origin);let i=Wi.dot(this.direction),s=Wi.dot(Wi)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Wi)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,g=t.x-a.x,b=t.y-a.y,m=t.z-a.z,p=i.x-a.x,_=i.y-a.y,M=i.z-a.z,x=Math.abs(c),v=Math.abs(l),S=Math.abs(h),E,y,w,C,D,B,X,k,$,Q,z,J;if(x>=v&&x>=S?(w=c,B=u,$=g,J=p,c>=0?(E=l,y=h,C=d,D=f,X=b,k=m,Q=_,z=M):(E=h,y=l,C=f,D=d,X=m,k=b,Q=M,z=_)):v>=S?(w=l,B=d,$=b,J=_,l>=0?(E=h,y=c,C=f,D=u,X=m,k=g,Q=M,z=p):(E=c,y=h,C=u,D=f,X=g,k=m,Q=p,z=M)):(w=h,B=f,$=m,J=M,h>=0?(E=c,y=l,C=u,D=d,X=g,k=b,Q=p,z=_):(E=l,y=c,C=d,D=u,X=b,k=g,Q=_,z=p)),w===0)return null;let G=E/w,q=y/w,F=1/w,ce=C-G*B,U=D-q*B,he=X-G*$,oe=k-q*$,xe=Q-G*J,I=z-q*J,N=xe*oe-I*he,L=ce*I-U*xe,V=he*U-oe*ce;if(s){if(N<0||L<0||V<0)return null}else if((N<0||L<0||V<0)&&(N>0||L>0||V>0))return null;let ie=N+L+V;if(ie===0)return null;let K=F*(N*B+L*$+V*J);return(ie>0?K<0:K>0)?null:this.at(K/ie,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Vt=class extends Rn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.combine=Jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},pf=new it,Vs=new Ki,Ho=new mn,mf=new P,Wo=new P,qo=new P,Xo=new P,wh=new P,jo=new P,gf=new P,Ko=new P,At=class extends Bt{constructor(e=new bt,t=new Vt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){jo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(wh.fromBufferAttribute(u,e),a?jo.addScaledVector(wh,h):jo.addScaledVector(wh.sub(t),h))}t.add(jo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ho.copy(i.boundingSphere),Ho.applyMatrix4(r),Vs.copy(e.ray).recast(e.near),!(Ho.containsPoint(Vs.origin)===!1&&(Vs.intersectSphere(Ho,mf)===null||Vs.origin.distanceToSquared(mf)>(e.far-e.near)**2))&&(pf.copy(r).invert(),Vs.copy(e.ray).applyMatrix4(pf),!(i.boundingBox!==null&&Vs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Vs)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){let m=d[g],p=a[m.materialIndex],_=Math.max(m.start,f.start),M=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,v=M;x<v;x+=3){let S=o.getX(x),E=o.getX(x+1),y=o.getX(x+2);s=$o(this,p,e,i,l,h,u,S,E,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){let _=o.getX(m),M=o.getX(m+1),x=o.getX(m+2);s=$o(this,a,e,i,l,h,u,_,M,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){let m=d[g],p=a[m.materialIndex],_=Math.max(m.start,f.start),M=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,v=M;x<v;x+=3){let S=x,E=x+1,y=x+2;s=$o(this,p,e,i,l,h,u,S,E,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),b=Math.min(c.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){let _=m,M=m+1,x=m+2;s=$o(this,a,e,i,l,h,u,_,M,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Fg(n,e,t,i,s,r,a,o){let c;if(e.side===ln?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,e.side===Vn,o),c===null)return null;Ko.copy(o),Ko.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Ko);return l<t.near||l>t.far?null:{distance:l,point:Ko.clone(),object:n}}function $o(n,e,t,i,s,r,a,o,c,l){n.getVertexPosition(o,Wo),n.getVertexPosition(c,qo),n.getVertexPosition(l,Xo);let h=Fg(n,e,t,i,Wo,qo,Xo,gf);if(h){let u=new P;gs.getBarycoord(gf,Wo,qo,Xo,u),s&&(h.uv=gs.getInterpolatedAttribute(s,o,c,l,u,new Le)),r&&(h.uv1=gs.getInterpolatedAttribute(r,o,c,l,u,new Le)),a&&(h.normal=gs.getInterpolatedAttribute(a,o,c,l,u,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new P,materialIndex:0};gs.getNormal(Wo,qo,Xo,d.normal),h.face=d,h.barycoord=u}return h}var Ra=new yt,bf=new yt,_f=new yt,Ug=new yt,xf=new it,Yo=new P,Ah=new mn,vf=new it,Eh=new Ki,za=class extends At{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Nh,this.bindMatrix=new it,this.bindMatrixInverse=new it,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Sn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Yo),this.boundingBox.expandByPoint(Yo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new mn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Yo),this.boundingSphere.expandByPoint(Yo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ah.copy(this.boundingSphere),Ah.applyMatrix4(s),e.ray.intersectsSphere(Ah)!==!1&&(vf.copy(s).invert(),Eh.copy(e.ray).applyMatrix4(vf),!(this.boundingBox!==null&&Eh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Eh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new yt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Nh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ap?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ke("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;bf.fromBufferAttribute(s.attributes.skinIndex,e),_f.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Ra.copy(t),t.set(0,0,0,0)):(Ra.set(...t,1),t.set(0,0,0)),Ra.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=_f.getComponent(r);if(a!==0){let o=bf.getComponent(r);xf.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(Ug.copy(Ra).applyMatrix4(xf),a)}}return t.isVector4&&(t.w=Ra.w),t.applyMatrix4(this.bindMatrixInverse)}},jr=class extends Bt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Kr=class extends tn{constructor(e=null,t=1,i=1,s,r,a,o,c,l=Xt,h=Xt,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},yf=new it,Og=new it,Ga=class n{constructor(e=[],t=[]){this.uuid=pi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ke("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new it)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new it;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Og;yf.multiplyMatrices(o,t[r]),yf.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Kr(t,e,e,qn,Wn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],a=t[r];a===void 0&&(Ke("Skeleton: No bone found with UUID:",r),a=new jr),this.bones.push(a),this.boneInverses.push(new it().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=i[s];e.boneInverses.push(o.toArray())}return e}},$i=class extends vt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Lr=new it,Mf=new it,Jo=[],Sf=new Sn,kg=new it,Ca=new At,Pa=new mn,Ks=class extends At{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new $i(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,kg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Sn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Lr),Sf.copy(e.boundingBox).applyMatrix4(Lr),this.boundingBox.union(Sf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new mn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Lr),Pa.copy(e.boundingSphere).applyMatrix4(Lr),this.boundingSphere.union(Pa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Ca.geometry=this.geometry,Ca.material=this.material,Ca.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pa.copy(this.boundingSphere),Pa.applyMatrix4(i),e.ray.intersectsSphere(Pa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Lr),Mf.multiplyMatrices(i,Lr),Ca.matrixWorld=Mf,Ca.raycast(e,Jo);for(let a=0,o=Jo.length;a<o;a++){let c=Jo[a];c.instanceId=r,c.object=this,t.push(c)}Jo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new $i(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Kr(new Float32Array(s*this.count),s,this.count,zc,Wn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<i.length;l++)a+=i[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Hs=new mn,Bg=new Le(.5,.5),Zo=new P,$r=class{constructor(e=new Gn,t=new Gn,i=new Gn,s=new Gn,r=new Gn,a=new Gn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=fi,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],b=r[9],m=r[10],p=r[11],_=r[12],M=r[13],x=r[14],v=r[15];if(s[0].setComponents(l-a,f-h,p-g,v-_).normalize(),s[1].setComponents(l+a,f+h,p+g,v+_).normalize(),s[2].setComponents(l+o,f+u,p+b,v+M).normalize(),s[3].setComponents(l-o,f-u,p-b,v-M).normalize(),i)s[4].setComponents(c,d,m,x).normalize(),s[5].setComponents(l-c,f-d,p-m,v-x).normalize();else if(s[4].setComponents(l-c,f-d,p-m,v-x).normalize(),t===fi)s[5].setComponents(l+c,f+d,p+m,v+x).normalize();else if(t===Br)s[5].setComponents(c,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hs)}intersectsSprite(e){Hs.center.set(0,0,0);let t=Bg.distanceTo(e.center);return Hs.radius=.7071067811865476+t,Hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Zo.x=s.normal.x>0?e.max.x:e.min.x,Zo.y=s.normal.y>0?e.max.y:e.min.y,Zo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Zo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Yr=class extends Rn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},_c=new P,xc=new P,Tf=new it,Ia=new Ki,Qo=new mn,Rh=new P,wf=new P,$s=class extends Bt{constructor(e=new bt,t=new Yr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)_c.fromBufferAttribute(t,s-1),xc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=_c.distanceTo(xc);e.setAttribute("lineDistance",new Tt(i,1))}else Ke("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qo.copy(i.boundingSphere),Qo.applyMatrix4(s),Qo.radius+=r,e.ray.intersectsSphere(Qo)===!1)return;Tf.copy(s).invert(),Ia.copy(e.ray).applyMatrix4(Tf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let b=f,m=g-1;b<m;b+=l){let p=h.getX(b),_=h.getX(b+1),M=ec(this,e,Ia,c,p,_,b);M&&t.push(M)}if(this.isLineLoop){let b=h.getX(g-1),m=h.getX(f),p=ec(this,e,Ia,c,b,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let b=f,m=g-1;b<m;b+=l){let p=ec(this,e,Ia,c,b,b+1,b);p&&t.push(p)}if(this.isLineLoop){let b=ec(this,e,Ia,c,g-1,f,g-1);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ec(n,e,t,i,s,r,a){let o=n.geometry.attributes.position;if(_c.fromBufferAttribute(o,s),xc.fromBufferAttribute(o,r),t.distanceSqToSegment(_c,xc,Rh,wf)>i)return;Rh.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Rh);if(!(l<e.near||l>e.far))return{distance:l,point:wf.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var Af=new P,Ef=new P,Va=class extends $s{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Af.fromBufferAttribute(t,s),Ef.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Af.distanceTo(Ef);e.setAttribute("lineDistance",new Tt(i,1))}else Ke("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ha=class extends $s{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Jr=class extends Rn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Rf=new it,Bh=new Ki,tc=new mn,nc=new P,Wa=class extends Bt{constructor(e=new bt,t=new Jr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),tc.copy(i.boundingSphere),tc.applyMatrix4(s),tc.radius+=r,e.ray.intersectsSphere(tc)===!1)return;Rf.copy(s).invert(),Bh.copy(e.ray).applyMatrix4(Rf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,u=i.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,b=f;g<b;g++){let m=l.getX(g);nc.fromBufferAttribute(u,m),Cf(nc,m,c,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,b=f;g<b;g++)nc.fromBufferAttribute(u,g),Cf(nc,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Cf(n,e,t,i,s,r,a){let o=Bh.distanceSqToPoint(n);if(o<t){let c=new P;Bh.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var qa=class extends tn{constructor(e=[],t=Ts,i,s,r,a,o,c,l,h){super(e,t,i,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},_s=class extends tn{constructor(e,t,i,s,r,a,o,c,l){super(e,t,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var xs=class extends tn{constructor(e,t,i=gi,s,r,a,o=Xt,c=Xt,l,h=Ri,u=1){if(h!==Ri&&h!==ws)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},vc=class extends xs{constructor(e,t=gi,i=Ts,s,r,a=Xt,o=Xt,c,l=Ri){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,s,r,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Xa=class extends tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Yi=class n extends bt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Tt(l,3)),this.setAttribute("normal",new Tt(h,3)),this.setAttribute("uv",new Tt(u,2));function g(b,m,p,_,M,x,v,S,E,y,w){let C=x/E,D=v/y,B=x/2,X=v/2,k=S/2,$=E+1,Q=y+1,z=0,J=0,G=new P;for(let q=0;q<Q;q++){let F=q*D-X;for(let ce=0;ce<$;ce++){let U=ce*C-B;G[b]=U*_,G[m]=F*M,G[p]=k,l.push(G.x,G.y,G.z),G[b]=0,G[m]=0,G[p]=S>0?1:-1,h.push(G.x,G.y,G.z),u.push(ce/E),u.push(1-q/y),z+=1}}for(let q=0;q<y;q++)for(let F=0;F<E;F++){let ce=d+F+$*q,U=d+F+$*(q+1),he=d+(F+1)+$*(q+1),oe=d+(F+1)+$*q;c.push(ce,U,oe),c.push(U,he,oe),J+=6}o.addGroup(f,J,w),f+=J,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Zr=class n extends bt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,b=[],m=i/2,p=0;_(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Tt(u,3)),this.setAttribute("normal",new Tt(d,3)),this.setAttribute("uv",new Tt(f,2));function _(){let x=new P,v=new P,S=0,E=(t-e)/i;for(let y=0;y<=r;y++){let w=[],C=y/r,D=C*(t-e)+e;for(let B=0;B<=s;B++){let X=B/s,k=X*c+o,$=Math.sin(k),Q=Math.cos(k);v.x=D*$,v.y=-C*i+m,v.z=D*Q,u.push(v.x,v.y,v.z),x.set($,E,Q).normalize(),d.push(x.x,x.y,x.z),f.push(X,1-C),w.push(g++)}b.push(w)}for(let y=0;y<s;y++)for(let w=0;w<r;w++){let C=b[w][y],D=b[w+1][y],B=b[w+1][y+1],X=b[w][y+1];(e>0||w!==0)&&(h.push(C,D,X),S+=3),(t>0||w!==r-1)&&(h.push(D,B,X),S+=3)}l.addGroup(p,S,0),p+=S}function M(x){let v=g,S=new Le,E=new P,y=0,w=x===!0?e:t,C=x===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,m*C,0),d.push(0,C,0),f.push(.5,.5),g++;let D=g;for(let B=0;B<=s;B++){let k=B/s*c+o,$=Math.cos(k),Q=Math.sin(k);E.x=w*Q,E.y=m*C,E.z=w*$,u.push(E.x,E.y,E.z),d.push(0,C,0),S.x=$*.5+.5,S.y=Q*.5*C+.5,f.push(S.x,S.y),g++}for(let B=0;B<s;B++){let X=v+B,k=D+B;x===!0?h.push(k,k+1,X):h.push(k+1,k,X),y+=3}l.addGroup(p,y,x===!0?1:2),p+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var yc=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ke("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=i[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===a)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new Le:new P);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new P,s=[],r=[],a=[],o=new P,c=new it;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),d<=l&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(rt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(rt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};function gu(){let n=0,e=0,t=0,i=0;function s(r,a,o,c){n=r,e=o,t=-3*r+3*a-2*o-c,i=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}var Pf=new P,If=new P,Ch=new gu,Ph=new gu,Ih=new gu,ja=class extends yc{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new P){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(If.subVectors(s[0],s[1]).add(s[0]),l=If);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Pf.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Pf),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),f),b=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);b<1e-4&&(b=1),g<1e-4&&(g=b),m<1e-4&&(m=b),Ch.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,b,m),Ph.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,b,m),Ih.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,b,m)}else this.curveType==="catmullrom"&&(Ch.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Ph.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Ih.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return i.set(Ch.calc(c),Ph.calc(c),Ih.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};var Qr=class n extends bt{constructor(e=[new Le(0,-.5),new Le(.5,0),new Le(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=rt(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/t,u=new P,d=new Le,f=new P,g=new P,b=new P,m=0,p=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,f.x=p*1,f.y=-m,f.z=p*0,b.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(b.x,b.y,b.z);break;default:m=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=b.x,f.y+=b.y,f.z+=b.z,f.normalize(),c.push(f.x,f.y,f.z),b.copy(g)}for(let _=0;_<=t;_++){let M=i+_*h*s,x=Math.sin(M),v=Math.cos(M);for(let S=0;S<=e.length-1;S++){u.x=e[S].x*x,u.y=e[S].y,u.z=e[S].x*v,a.push(u.x,u.y,u.z),d.x=_/t,d.y=S/(e.length-1),o.push(d.x,d.y);let E=c[3*S+0]*x,y=c[3*S+1],w=c[3*S+0]*v;l.push(E,y,w)}}for(let _=0;_<t;_++)for(let M=0;M<e.length-1;M++){let x=M+_*e.length,v=x,S=x+e.length,E=x+e.length+1,y=x+1;r.push(v,S,y),r.push(E,y,S)}this.setIndex(r),this.setAttribute("position",new Tt(a,3)),this.setAttribute("uv",new Tt(o,2)),this.setAttribute("normal",new Tt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var Ji=class n extends bt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=t/c,f=[],g=[],b=[],m=[];for(let p=0;p<h;p++){let _=p*d-a;for(let M=0;M<l;M++){let x=M*u-r;g.push(x,-_,0),b.push(0,0,1),m.push(M/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<o;_++){let M=_+l*p,x=_+l*(p+1),v=_+1+l*(p+1),S=_+1+l*p;f.push(M,x,S),f.push(x,v,S)}this.setIndex(f),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(b,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ys=class n extends bt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new P,d=new P,f=[],g=[],b=[],m=[];for(let p=0;p<=i;p++){let _=[],M=p/i,x=a+M*o,v=e*Math.cos(x),S=Math.sqrt(e*e-v*v),E=0;p===0&&a===0?E=.5/t:p===i&&c===Math.PI&&(E=-.5/t);for(let y=0;y<=t;y++){let w=y/t,C=s+w*r;u.x=-S*Math.cos(C),u.y=v,u.z=S*Math.sin(C),g.push(u.x,u.y,u.z),d.copy(u).normalize(),b.push(d.x,d.y,d.z),m.push(w+E,1-M),_.push(l++)}h.push(_)}for(let p=0;p<i;p++)for(let _=0;_<t;_++){let M=h[p][_+1],x=h[p][_],v=h[p+1][_],S=h[p+1][_+1];(p!==0||a>0)&&f.push(M,x,S),(p!==i-1||c<Math.PI)&&f.push(x,v,S)}this.setIndex(f),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(b,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ka=class n extends bt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let c=[],l=[],h=[],u=[],d=new P,f=new P,g=new P;for(let b=0;b<=i;b++){let m=a+b/i*o;for(let p=0;p<=s;p++){let _=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(_),f.y=(e+t*Math.cos(m))*Math.sin(_),f.z=t*Math.sin(m),l.push(f.x,f.y,f.z),d.x=e*Math.cos(_),d.y=e*Math.sin(_),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(p/s),u.push(b/i)}}for(let b=1;b<=i;b++)for(let m=1;m<=s;m++){let p=(s+1)*b+m-1,_=(s+1)*(b-1)+m-1,M=(s+1)*(b-1)+m,x=(s+1)*b+m;c.push(p,_,x),c.push(_,M,x)}this.setIndex(c),this.setAttribute("position",new Tt(l,3)),this.setAttribute("normal",new Tt(h,3)),this.setAttribute("uv",new Tt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function sr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Lf(s))s.isRenderTargetTexture?(Ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Lf(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function bn(n){let e={};for(let t=0;t<n.length;t++){let i=sr(n[t]);for(let s in i)e[s]=i[s]}return e}function Lf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function zg(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function bu(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}var rr={clone:sr,merge:bn},Gg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ot=class extends Rn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gg,this.fragmentShader=Vg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sr(e.uniforms),this.uniformsGroups=zg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Xe().setHex(s.value);break;case"v2":this.uniforms[i].value=new Le().fromArray(s.value);break;case"v3":this.uniforms[i].value=new P().fromArray(s.value);break;case"v4":this.uniforms[i].value=new yt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new st().fromArray(s.value);break;case"m4":this.uniforms[i].value=new it().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Mc=class extends Ot{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Js=class extends Rn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vl,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},gn=class extends Js{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Sc=class extends Rn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Tc=class extends Rn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ms(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function oc(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}function Hg(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Df(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,a=0;a!==i;++r){let o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=n[o+c]}return s}function Wg(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push(...a)),r=n[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=n[s++];while(r!==void 0)}var Ci=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},wc=class extends Ci{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Uh,endingEnd:Uh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Oh:r=e,o=2*t-i;break;case kh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Oh:a=e,c=2*i-t;break;case kh:a=1,c=i+s[1]-s[0];break;default:a=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),b=g*g,m=b*g,p=-d*m+2*d*b-d*g,_=(1+d)*m+(-1.5-2*d)*b+(-.5+d)*g+1,M=(-1-f)*m+(1.5+f)*b+.5*g,x=f*m-f*b;for(let v=0;v!==o;++v)r[v]=p*a[h+v]+_*a[l+v]+M*a[c+v]+x*a[u+v];return r}},Ac=class extends Ci{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},Ec=class extends Ci{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Rc=class extends Ci{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(i-t)/(s-t),b=1-g;for(let m=0;m!==o;++m)r[m]=a[l+m]*b+a[c+m]*g;return r}let d=o*2,f=e-1;for(let g=0;g!==o;++g){let b=a[l+g],m=a[c+g],p=f*d+g*2,_=u[p],M=u[p+1],x=e*d+g*2,v=h[x],S=h[x+1],E=Xg(i,t,_,v,s);r[g]=Mp(E,b,M,S,m)}return r}};function Mp(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function qg(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function Xg(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=Mp(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let c=qg(r,e,t,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var Cn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ms(t,this.TimeBufferType),this.values=ms(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ms(e.times,Array),values:ms(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),oc(e.settings)&&(i.settings={inTangents:ms(e.settings.inTangents,Array),outTangents:ms(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ec(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ac(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Rc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case qs:t=this.InterpolantFactoryMethodDiscrete;break;case Xs:t=this.InterpolantFactoryMethodLinear;break;case rc:t=this.InterpolantFactoryMethodSmooth;break;case Fh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ke("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qs;case this.InterpolantFactoryMethodLinear:return Xs;case this.InterpolantFactoryMethodSmooth:return rc;case this.InterpolantFactoryMethodBezier:return Fh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;oc(this.settings)&&(Nf(this.settings.inTangents,e),Nf(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(tt("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(tt("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){tt("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){tt("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&ng(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){tt("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===rc,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let b=t[u+g];if(b!==t[d+g]||b!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,oc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Nf(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Cn.prototype.ValueTypeName="";Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=Xs;var Zi=class extends Cn{constructor(e,t,i){super(e,t,i)}};Zi.prototype.ValueTypeName="bool";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=qs;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var $a=class extends Cn{constructor(e,t,i,s){super(e,t,i,s)}};$a.prototype.ValueTypeName="color";var Qi=class extends Cn{constructor(e,t,i,s){super(e,t,i,s)}};Qi.prototype.ValueTypeName="number";var Cc=class extends Ci{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)Kt.slerpFlat(r,0,a,l-o,a,l,c);return r}},es=class extends Cn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Cc(this.times,this.values,this.getValueSize(),e)}};es.prototype.ValueTypeName="quaternion";es.prototype.InterpolantFactoryMethodSmooth=void 0;var ts=class extends Cn{constructor(e,t,i){super(e,t,i)}};ts.prototype.ValueTypeName="string";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=qs;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var vs=class extends Cn{constructor(e,t,i,s){super(e,t,i,s)}};vs.prototype.ValueTypeName="vector";var Ya=class{constructor(e="",t=-1,i=[],s=op){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=pi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(Kg(i[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=i.length;r!==a;++r)t.push(Cn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=Hg(c);c=Df(c,1,h),l=Df(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Qi(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,i));return a}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function jg(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Qi;case"vector":case"vector2":case"vector3":case"vector4":return vs;case"color":return $a;case"quaternion":return es;case"bool":case"boolean":return Zi;case"string":return ts}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function Kg(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=jg(n.type);if(n.times===void 0){let i=[],s=[];Wg(n.keys,i,s,"value"),n.times=i,n.values=s}let t;return e.parse!==void 0?t=e.parse(n):t=new e(n.name,n.times,n.values,n.interpolation),oc(n.settings)&&(t.settings={inTangents:ms(n.settings.inTangents,Float32Array),outTangents:ms(n.settings.outTangents,Float32Array)}),t}var Ei={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Ff(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Ff(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Ff(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Pc=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Sp=new Pc,Pi=class{constructor(e){this.manager=e!==void 0?e:Sp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Pi.DEFAULT_MATERIAL_NAME="__DEFAULT";var qi={},zh=class extends Error{constructor(e,t){super(e),this.response=t}},ea=class extends Pi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ei.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(qi[e]!==void 0){qi[e].push({onLoad:t,onProgress:i,onError:s});return}qi[e]=[],qi[e].push({onLoad:t,onProgress:i,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ke("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=qi[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,b=0,m=new ReadableStream({start(p){_();function _(){u.read().then(({done:M,value:x})=>{if(M)p.close();else{b+=x.byteLength;let v=new ProgressEvent("progress",{lengthComputable:g,loaded:b,total:f});for(let S=0,E=h.length;S<E;S++){let y=h[S];y.onProgress&&y.onProgress(v)}p.enqueue(x),_()}},M=>{p.error(M)})}}});return new Response(m)}else throw new zh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Ei.add(`file:${e}`,l);let h=qi[e];delete qi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=qi[e];if(h===void 0)throw this.manager.itemError(e),l;delete qi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Dr=new WeakMap,Ic=class extends Pi{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ei.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Dr.get(a);u===void 0&&(u=[],Dr.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=zr("img");function c(){h(),t&&t(this);let u=Dr.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Dr.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),Ei.remove(`image:${e}`);let d=Dr.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(u)}Dr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ei.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var Ja=class extends Pi{constructor(e){super(e)}load(e,t,i,s){let r=new tn,a=new Ic(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},ta=class extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var Lh=new it,Uf=new P,Of=new P,na=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $r,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Uf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Uf),Of.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Of),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Lh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Lh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Br||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Lh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ic=new P,sc=new Kt,Ai=new P,Za=class extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ic,sc,Ai),Ai.x===1&&Ai.y===1&&Ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ic,sc,Ai.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(ic,sc,Ai),Ai.x===1&&Ai.y===1&&Ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ic,sc,Ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ps=new P,kf=new Le,Bf=new Le,en=class extends Za{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(La*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return js*2*Math.atan(Math.tan(La*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ps.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ps.x,ps.y).multiplyScalar(-e/ps.z),ps.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ps.x,ps.y).multiplyScalar(-e/ps.z)}getViewSize(e,t){return this.getViewBounds(e,kf,Bf),t.subVectors(Bf,kf)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(La*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Gh=class extends na{constructor(){super(new en(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=js*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Qa=class extends ta{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Gh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Vh=class extends na{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0}},eo=class extends ta{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Vh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ii=class extends Za{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Hh=class extends na{constructor(){super(new Ii(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},to=class extends ta{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new Hh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ns=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Dh=new WeakMap,no=class extends Pi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ke("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ke("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ei.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{Dh.has(a)===!0?(s&&s(Dh.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Ei.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Dh.set(c,l),Ei.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ei.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Nr=-90,Fr=1,Zs=class extends Bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new en(Nr,Fr,e,t);s.layers=this.layers,this.add(s);let r=new en(Nr,Fr,e,t);r.layers=this.layers,this.add(r);let a=new en(Nr,Fr,e,t);a.layers=this.layers,this.add(a);let o=new en(Nr,Fr,e,t);o.layers=this.layers,this.add(o);let c=new en(Nr,Fr,e,t);c.layers=this.layers,this.add(c);let l=new en(Nr,Fr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===fi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Br)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Lc=class extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Qs=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=$g.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function $g(){this._document.hidden===!1&&this.reset()}var _u="\\[\\]\\.:\\/",Yg=new RegExp("["+_u+"]","g"),xu="[^"+_u+"]",Jg="[^"+_u.replace("\\.","")+"]",Zg=/((?:WC+[\/:])*)/.source.replace("WC",xu),Qg=/(WCOD+)?/.source.replace("WCOD",Jg),e0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xu),t0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xu),n0=new RegExp("^"+Zg+Qg+e0+t0+"$"),i0=["material","materials","bones","map"],Wh=class{constructor(e,t,i){let s=i||Lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Lt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Yg,"")}static parseTrackName(e){let t=n0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);i0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){tt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){tt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){tt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){tt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){tt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){tt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){tt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;tt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){tt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){tt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Lt.Composite=Wh;Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var EM=new Float32Array(1);var ys=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=rt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(rt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var wu=class wu{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};wu.prototype.isMatrix2=!0;var qh=wu;var io=class extends mi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function vu(n,e,t,i){let s=s0(i);switch(t){case hu:return n*e;case zc:return n*e/s.components*s.byteLength;case Gc:return n*e/s.components*s.byteLength;case As:return n*e*2/s.components*s.byteLength;case Vc:return n*e*2/s.components*s.byteLength;case uu:return n*e*3/s.components*s.byteLength;case qn:return n*e*4/s.components*s.byteLength;case Hc:return n*e*4/s.components*s.byteLength;case oo:case co:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case lo:case ho:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qc:case jc:return Math.max(n,16)*Math.max(e,8)/4;case Wc:case Xc:return Math.max(n,8)*Math.max(e,8)/2;case Kc:case $c:case Jc:case Zc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Yc:case uo:case Qc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case el:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case tl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case nl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case il:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case sl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case rl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case al:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ol:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case cl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ll:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case hl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ul:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case dl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case fl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case pl:case ml:case gl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case bl:case _l:return Math.ceil(n/4)*Math.ceil(e/4)*8;case fo:case xl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function s0(n){switch(n){case In:case au:return{byteLength:1,components:1};case aa:case ou:case $t:return{byteLength:2,components:1};case kc:case Bc:return{byteLength:2,components:4};case gi:case Oc:case Wn:return{byteLength:4,components:1};case cu:case lu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function qp(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function a0(n){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,c,l){let h=c.array,u=c.updateRanges;if(n.bindBuffer(l,o),u.length===0)n.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],b=u[f];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++d,u[d]=b)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let b=u[f];n.bufferSubData(l,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var o0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,c0=`#ifdef USE_ALPHAHASH
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
#endif`,l0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,h0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,u0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,d0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,f0=`#ifdef USE_AOMAP
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
#endif`,p0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,m0=`#ifdef USE_BATCHING
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
#endif`,g0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,b0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,x0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,v0=`#ifdef USE_IRIDESCENCE
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
#endif`,y0=`#ifdef USE_BUMPMAP
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
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,S0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,A0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,E0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,R0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,C0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,P0=`#define PI 3.141592653589793
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
} // validated`,I0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,L0=`vec3 transformedNormal = objectNormal;
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
#endif`,D0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,N0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,F0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,U0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,O0="gl_FragColor = linearToOutputTexel( gl_FragColor );",k0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,B0=`#ifdef USE_ENVMAP
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
#endif`,z0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,G0=`#ifdef USE_ENVMAP
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
#endif`,V0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,H0=`#ifdef USE_ENVMAP
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
#endif`,W0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,q0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,X0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,j0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,K0=`#ifdef USE_GRADIENTMAP
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
}`,$0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Y0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,J0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Z0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Q0=`#ifdef USE_ENVMAP
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
#endif`,eb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ib=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sb=`PhysicalMaterial material;
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
#endif`,rb=`uniform sampler2D dfgLUT;
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
}`,ab=`
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
#endif`,ob=`#if defined( RE_IndirectDiffuse )
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
#endif`,cb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lb=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,hb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ub=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,db=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bb=`#if defined( USE_POINTS_UV )
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
#endif`,_b=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sb=`#ifdef USE_MORPHTARGETS
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
#endif`,Tb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ab=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Eb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Pb=`#ifdef USE_NORMALMAP
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
#endif`,Ib=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Db=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ub=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ob=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xb=`float getShadowMask() {
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
}`,jb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kb=`#ifdef USE_SKINNING
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
#endif`,$b=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yb=`#ifdef USE_SKINNING
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
#endif`,Jb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,e_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,t_=`#ifdef USE_TRANSMISSION
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
#endif`,n_=`#ifdef USE_TRANSMISSION
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
#endif`,i_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,o_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,c_=`uniform sampler2D t2D;
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
}`,l_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,u_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f_=`#include <common>
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
}`,p_=`#if DEPTH_PACKING == 3200
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
}`,m_=`#define DISTANCE
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
}`,g_=`#define DISTANCE
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
}`,b_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,__=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x_=`uniform float scale;
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
}`,v_=`uniform vec3 diffuse;
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
}`,y_=`#include <common>
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
}`,M_=`uniform vec3 diffuse;
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
}`,S_=`#define LAMBERT
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
}`,T_=`#define LAMBERT
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
}`,w_=`#define MATCAP
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
}`,A_=`#define MATCAP
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
}`,E_=`#define NORMAL
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
}`,R_=`#define NORMAL
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
}`,C_=`#define PHONG
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
}`,P_=`#define PHONG
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
}`,I_=`#define STANDARD
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
}`,L_=`#define STANDARD
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
}`,D_=`#define TOON
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
}`,N_=`#define TOON
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
}`,F_=`uniform float size;
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
}`,U_=`uniform vec3 diffuse;
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
}`,O_=`#include <common>
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
}`,k_=`uniform vec3 color;
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
}`,B_=`uniform float rotation;
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
}`,z_=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:o0,alphahash_pars_fragment:c0,alphamap_fragment:l0,alphamap_pars_fragment:h0,alphatest_fragment:u0,alphatest_pars_fragment:d0,aomap_fragment:f0,aomap_pars_fragment:p0,batching_pars_vertex:m0,batching_vertex:g0,begin_vertex:b0,beginnormal_vertex:_0,bsdfs:x0,iridescence_fragment:v0,bumpmap_pars_fragment:y0,clipping_planes_fragment:M0,clipping_planes_pars_fragment:S0,clipping_planes_pars_vertex:T0,clipping_planes_vertex:w0,color_fragment:A0,color_pars_fragment:E0,color_pars_vertex:R0,color_vertex:C0,common:P0,cube_uv_reflection_fragment:I0,defaultnormal_vertex:L0,displacementmap_pars_vertex:D0,displacementmap_vertex:N0,emissivemap_fragment:F0,emissivemap_pars_fragment:U0,colorspace_fragment:O0,colorspace_pars_fragment:k0,envmap_fragment:B0,envmap_common_pars_fragment:z0,envmap_pars_fragment:G0,envmap_pars_vertex:V0,envmap_physical_pars_fragment:Q0,envmap_vertex:H0,fog_vertex:W0,fog_pars_vertex:q0,fog_fragment:X0,fog_pars_fragment:j0,gradientmap_pars_fragment:K0,lightmap_pars_fragment:$0,lights_lambert_fragment:Y0,lights_lambert_pars_fragment:J0,lights_pars_begin:Z0,lights_toon_fragment:eb,lights_toon_pars_fragment:tb,lights_phong_fragment:nb,lights_phong_pars_fragment:ib,lights_physical_fragment:sb,lights_physical_pars_fragment:rb,lights_fragment_begin:ab,lights_fragment_maps:ob,lights_fragment_end:cb,lightprobes_pars_fragment:lb,logdepthbuf_fragment:hb,logdepthbuf_pars_fragment:ub,logdepthbuf_pars_vertex:db,logdepthbuf_vertex:fb,map_fragment:pb,map_pars_fragment:mb,map_particle_fragment:gb,map_particle_pars_fragment:bb,metalnessmap_fragment:_b,metalnessmap_pars_fragment:xb,morphinstance_vertex:vb,morphcolor_vertex:yb,morphnormal_vertex:Mb,morphtarget_pars_vertex:Sb,morphtarget_vertex:Tb,normal_fragment_begin:wb,normal_fragment_maps:Ab,normal_pars_fragment:Eb,normal_pars_vertex:Rb,normal_vertex:Cb,normalmap_pars_fragment:Pb,clearcoat_normal_fragment_begin:Ib,clearcoat_normal_fragment_maps:Lb,clearcoat_pars_fragment:Db,iridescence_pars_fragment:Nb,opaque_fragment:Fb,packing:Ub,premultiplied_alpha_fragment:Ob,project_vertex:kb,dithering_fragment:Bb,dithering_pars_fragment:zb,roughnessmap_fragment:Gb,roughnessmap_pars_fragment:Vb,shadowmap_pars_fragment:Hb,shadowmap_pars_vertex:Wb,shadowmap_vertex:qb,shadowmask_pars_fragment:Xb,skinbase_vertex:jb,skinning_pars_vertex:Kb,skinning_vertex:$b,skinnormal_vertex:Yb,specularmap_fragment:Jb,specularmap_pars_fragment:Zb,tonemapping_fragment:Qb,tonemapping_pars_fragment:e_,transmission_fragment:t_,transmission_pars_fragment:n_,uv_pars_fragment:i_,uv_pars_vertex:s_,uv_vertex:r_,worldpos_vertex:a_,background_vert:o_,background_frag:c_,backgroundCube_vert:l_,backgroundCube_frag:h_,cube_vert:u_,cube_frag:d_,depth_vert:f_,depth_frag:p_,distance_vert:m_,distance_frag:g_,equirect_vert:b_,equirect_frag:__,linedashed_vert:x_,linedashed_frag:v_,meshbasic_vert:y_,meshbasic_frag:M_,meshlambert_vert:S_,meshlambert_frag:T_,meshmatcap_vert:w_,meshmatcap_frag:A_,meshnormal_vert:E_,meshnormal_frag:R_,meshphong_vert:C_,meshphong_frag:P_,meshphysical_vert:I_,meshphysical_frag:L_,meshtoon_vert:D_,meshtoon_frag:N_,points_vert:F_,points_frag:U_,shadow_vert:O_,shadow_frag:k_,sprite_vert:B_,sprite_frag:z_},Ne={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Di={basic:{uniforms:bn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:bn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Xe(0)},envMapIntensity:{value:1}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:bn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:bn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:bn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new Xe(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:bn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:bn([Ne.points,Ne.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:bn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:bn([Ne.common,Ne.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:bn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:bn([Ne.sprite,Ne.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distance:{uniforms:bn([Ne.common,Ne.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distance_vert,fragmentShader:ot.distance_frag},shadow:{uniforms:bn([Ne.lights,Ne.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};Di.physical={uniforms:bn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};var Sl={r:0,b:0,g:0},G_=new it,Xp=new st;Xp.set(-1,0,0,0,1,0,0,0,1);function V_(n,e,t,i,s,r){let a=new Xe(0),o=s===!0?0:1,c,l,h=null,u=0,d=null;function f(_){let M=_.isScene===!0?_.background:null;if(M&&M.isTexture){let x=_.backgroundBlurriness>0;M=e.get(M,x)}return M}function g(_){let M=!1,x=f(_);x===null?m(a,o):x&&x.isColor&&(m(x,1),M=!0);let v=n.xr.getEnvironmentBlendMode();v==="additive"?t.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function b(_,M){let x=f(M);x&&(x.isCubeTexture||x.mapping===ao)?(l===void 0&&(l=new At(new Yi(1,1,1),new Ot({name:"BackgroundCubeMaterial",uniforms:sr(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(v,S,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(G_.makeRotationFromEuler(M.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Xp),l.material.toneMapped=lt.getTransfer(x.colorSpace)!==St,(h!==x||u!==x.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=x,u=x.version,d=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new At(new Ji(2,2),new Ot({name:"BackgroundMaterial",uniforms:sr(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=lt.getTransfer(x.colorSpace)!==St,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||u!==x.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=x,u=x.version,d=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function m(_,M){_.getRGB(Sl,bu(n)),t.buffers.color.setClear(Sl.r,Sl.g,Sl.b,M,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,M=1){a.set(_),o=M,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,m(a,o)},render:g,addToRenderList:b,dispose:p}}function H_(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,a=!1;function o(D,B,X,k,$){let Q=!1,z=u(D,k,X,B);r!==z&&(r=z,l(r.object)),Q=f(D,k,X,$),Q&&g(D,k,X,$),$!==null&&e.update($,n.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,x(D,B,X,k),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function c(){return n.createVertexArray()}function l(D){return n.bindVertexArray(D)}function h(D){return n.deleteVertexArray(D)}function u(D,B,X,k){let $=k.wireframe===!0,Q=i[B.id];Q===void 0&&(Q={},i[B.id]=Q);let z=D.isInstancedMesh===!0?D.id:0,J=Q[z];J===void 0&&(J={},Q[z]=J);let G=J[X.id];G===void 0&&(G={},J[X.id]=G);let q=G[$];return q===void 0&&(q=d(c()),G[$]=q),q}function d(D){let B=[],X=[],k=[];for(let $=0;$<t;$++)B[$]=0,X[$]=0,k[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:X,attributeDivisors:k,object:D,attributes:{},index:null}}function f(D,B,X,k){let $=r.attributes,Q=B.attributes,z=0,J=X.getAttributes();for(let G in J)if(J[G].location>=0){let F=$[G],ce=Q[G];if(ce===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(ce=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(ce=D.instanceColor)),F===void 0||F.attribute!==ce||ce&&F.data!==ce.data)return!0;z++}return r.attributesNum!==z||r.index!==k}function g(D,B,X,k){let $={},Q=B.attributes,z=0,J=X.getAttributes();for(let G in J)if(J[G].location>=0){let F=Q[G];F===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(F=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(F=D.instanceColor));let ce={};ce.attribute=F,F&&F.data&&(ce.data=F.data),$[G]=ce,z++}r.attributes=$,r.attributesNum=z,r.index=k}function b(){let D=r.newAttributes;for(let B=0,X=D.length;B<X;B++)D[B]=0}function m(D){p(D,0)}function p(D,B){let X=r.newAttributes,k=r.enabledAttributes,$=r.attributeDivisors;X[D]=1,k[D]===0&&(n.enableVertexAttribArray(D),k[D]=1),$[D]!==B&&(n.vertexAttribDivisor(D,B),$[D]=B)}function _(){let D=r.newAttributes,B=r.enabledAttributes;for(let X=0,k=B.length;X<k;X++)B[X]!==D[X]&&(n.disableVertexAttribArray(X),B[X]=0)}function M(D,B,X,k,$,Q,z){z===!0?n.vertexAttribIPointer(D,B,X,$,Q):n.vertexAttribPointer(D,B,X,k,$,Q)}function x(D,B,X,k){b();let $=k.attributes,Q=X.getAttributes(),z=B.defaultAttributeValues;for(let J in Q){let G=Q[J];if(G.location>=0){let q=$[J];if(q===void 0&&(J==="instanceMatrix"&&D.instanceMatrix&&(q=D.instanceMatrix),J==="instanceColor"&&D.instanceColor&&(q=D.instanceColor)),q!==void 0){let F=q.normalized,ce=q.itemSize,U=e.get(q);if(U===void 0)continue;let he=U.buffer,oe=U.type,xe=U.bytesPerElement,I=oe===n.INT||oe===n.UNSIGNED_INT||q.gpuType===Oc;if(q.isInterleavedBufferAttribute){let N=q.data,L=N.stride,V=q.offset;if(N.isInstancedInterleavedBuffer){for(let ie=0;ie<G.locationSize;ie++)p(G.location+ie,N.meshPerAttribute);D.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let ie=0;ie<G.locationSize;ie++)m(G.location+ie);n.bindBuffer(n.ARRAY_BUFFER,he);for(let ie=0;ie<G.locationSize;ie++)M(G.location+ie,ce/G.locationSize,oe,F,L*xe,(V+ce/G.locationSize*ie)*xe,I)}else{if(q.isInstancedBufferAttribute){for(let N=0;N<G.locationSize;N++)p(G.location+N,q.meshPerAttribute);D.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let N=0;N<G.locationSize;N++)m(G.location+N);n.bindBuffer(n.ARRAY_BUFFER,he);for(let N=0;N<G.locationSize;N++)M(G.location+N,ce/G.locationSize,oe,F,ce*xe,ce/G.locationSize*N*xe,I)}}else if(z!==void 0){let F=z[J];if(F!==void 0)switch(F.length){case 2:n.vertexAttrib2fv(G.location,F);break;case 3:n.vertexAttrib3fv(G.location,F);break;case 4:n.vertexAttrib4fv(G.location,F);break;default:n.vertexAttrib1fv(G.location,F)}}}}_()}function v(){w();for(let D in i){let B=i[D];for(let X in B){let k=B[X];for(let $ in k){let Q=k[$];for(let z in Q)h(Q[z].object),delete Q[z];delete k[$]}}delete i[D]}}function S(D){if(i[D.id]===void 0)return;let B=i[D.id];for(let X in B){let k=B[X];for(let $ in k){let Q=k[$];for(let z in Q)h(Q[z].object),delete Q[z];delete k[$]}}delete i[D.id]}function E(D){for(let B in i){let X=i[B];for(let k in X){let $=X[k];if($[D.id]===void 0)continue;let Q=$[D.id];for(let z in Q)h(Q[z].object),delete Q[z];delete $[D.id]}}}function y(D){for(let B in i){let X=i[B],k=D.isInstancedMesh===!0?D.id:0,$=X[k];if($!==void 0){for(let Q in $){let z=$[Q];for(let J in z)h(z[J].object),delete z[J];delete $[Q]}delete X[k],Object.keys(X).length===0&&delete i[B]}}}function w(){C(),a=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:C,dispose:v,releaseStatesOfGeometry:S,releaseStatesOfObject:y,releaseStatesOfProgram:E,initAttributes:b,enableAttribute:m,disableUnusedAttributes:_}}function W_(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function a(c,l,h){h!==0&&(n.drawArraysInstanced(i,c,l,h),t.update(l,i,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];t.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function q_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==qn&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let y=E===$t&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==In&&E!==Wn&&!y&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Ke("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=n.getParameter(n.MAX_SAMPLES),S=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:x,maxSamples:v,samples:S}}function X_(n){let e=this,t=null,i=0,s=!1,r=!1,a=new Gn,o=new st,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,b=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let _=r?0:i,M=_*4,x=p.clippingState||null;c.value=x,x=h(g,d,M,f);for(let v=0;v!==M;++v)x[v]=t[v];p.clippingState=x,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){let b=u!==null?u.length:0,m=null;if(b!==0){if(m=c.value,g!==!0||m===null){let p=f+b*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,x=f;M!==b;++M,x+=4)a.copy(u[M]).applyMatrix4(_,o),a.normal.toArray(m,x),m[x+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}var ha=4,j_=6,K_=20,$_=256,go=new Ii,Tp=new Xe,Au=null,Eu=0,Ru=0,Cu=!1,Y_=new P,ar=new P,da=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=Y_}=r;Au=this._renderer.getRenderTarget(),Eu=this._renderer.getActiveCubeFace(),Ru=this._renderer.getActiveMipmapLevel(),Cu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ep(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ap(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Au,Eu,Ru),this._renderer.xr.enabled=Cu,e.scissorTest=!1,la(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ts||e.mapping===nr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Au=this._renderer.getRenderTarget(),Eu=this._renderer.getActiveCubeFace(),Ru=this._renderer.getActiveMipmapLevel(),Cu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:$t,format:qn,colorSpace:Mn,depthBuffer:!1},s=wp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wp(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=J_(r)),this._blurMaterial=Q_(r,e,t),this._ggxMaterial=Z_(r,e,t)}return s}_compileMaterial(e){let t=new At(new bt,e);this._renderer.compile(t,go)}_sceneToCubeUV(e,t,i,s,r){let c=new en(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Tp),u.toneMapping=Hn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new At(new Yi,new Vt({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,m=b.material,p=!1,_=e.background;_?_.isColor&&(m.color.copy(_),e.background=null,p=!0):(m.color.copy(Tp),p=!0);for(let M=0;M<6;M++){let x=M%3;x===0?(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[M],r.y,r.z)):x===1?(c.up.set(0,0,l[M]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[M],r.z)):(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[M]));let v=this._cubeSize;la(s,x*v,M>2?v:0,v,v),u.setRenderTarget(s),p&&u.render(b,c),u.render(e,c)}u.toneMapping=f,u.autoClear=d,e.background=_}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Ts||e.mapping===nr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ep()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ap());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;la(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,go)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let c=a.uniforms,l=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=l*1.25,f=u*d,{_lodMax:g}=this,b=this._sizeLods[i],m=3*b*(i>g-ha?i-g+ha:0),p=4*(this._cubeSize-b);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,la(r,m,p,3*b,2*b),s.setRenderTarget(r),s.render(o,go),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-i,la(e,m,p,3*b,2*b),s.setRenderTarget(e),s.render(o,go)}_blur(e,t,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-ha?s-this._lodMax+ha:0),d=4*(this._cubeSize-h);la(t,u,d,3*h,2*h),a.setRenderTarget(t),a.render(c,go)}};function J_(n){let e=[],t=[],i=n,s=n-ha+1+j_;for(let r=0;r<s;r++){let a=Math.pow(2,i);e.push(a);let o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,d=6,f=3,g=new Float32Array(f*d*u),b=new Float32Array(f*d*u);for(let p=0;p<u;p++){let _=p%3*2/3-1,M=p>2?0:-1,x=[_,M,0,_+2/3,M,0,_+2/3,M+1,0,_,M,0,_+2/3,M+1,0,_,M+1,0];g.set(x,f*d*p);for(let v=0;v<d;v++){let S=h[v*2]*2-1,E=h[v*2+1]*2-1;p===0?ar.set(1,E,S):p===1?ar.set(-S,1,-E):p===2?ar.set(-S,E,1):p===3?ar.set(-1,E,-S):p===4?ar.set(-S,-1,E):ar.set(S,E,-1),ar.toArray(b,(p*d+v)*f)}}let m=new bt;m.setAttribute("position",new vt(g,f)),m.setAttribute("outputDirection",new vt(b,f)),t.push(new At(m,null)),i>ha&&i--}return{lodMeshes:t,sizeLods:e}}function wp(n,e,t){let i=new Gt(n,e,t);return i.texture.mapping=ao,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function la(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Z_(n,e,t){return new Ot({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Al(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Q_(n,e,t){return new Ot({name:"SphericalGaussianBlur",defines:{SAMPLES:K_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Al(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Ap(){return new Ot({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Al(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Ep(){return new Ot({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Al(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var or=class extends Gt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new qa(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Yi(5,5,5),r=new Ot({name:"CubemapFromEquirect",uniforms:sr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:ei});r.uniforms.tEquirect.value=t;let a=new At(s,r),o=t.minFilter;return t.minFilter===Pn&&(t.minFilter=jt),new Zs(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}};function ex(n){let e=new WeakMap,t=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Nc||f===Fc)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let b=new or(g.height);return b.fromEquirectangularTexture(n,d),e.set(d,b),d.addEventListener("dispose",l),o(b.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,g=f===Nc||f===Fc,b=f===Ts||f===nr;if(g||b){let m=t.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new da(n)),m=g?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let _=d.image;return g&&_&&_.height>0||b&&_&&c(_)?(i===null&&(i=new da(n)),m=g?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===Nc?d.mapping=Ts:f===Fc&&(d.mapping=nr),d}function c(d){let f=0,g=6;for(let b=0;b<g;b++)d[b]!==void 0&&f++;return f===g}function l(d){let f=d.target;f.removeEventListener("dispose",l);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function tx(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Ws("WebGLRenderer: "+i+" extension not supported."),s}}}function nx(n,e,t,i){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let f in d)e.update(d[f],n.ARRAY_BUFFER)}function l(u){let d=[],f=u.index,g=u.attributes.position,b=0;if(g===void 0)return;if(f!==null){let _=f.array;b=f.version;for(let M=0,x=_.length;M<x;M+=3){let v=_[M+0],S=_[M+1],E=_[M+2];d.push(v,S,S,E,E,v)}}else{let _=g.array;b=g.version;for(let M=0,x=_.length/3-1;M<x;M+=3){let v=M+0,S=M+1,E=M+2;d.push(v,S,S,E,E,v)}}let m=new(g.count>=65535?Ba:ka)(d,1);m.version=b;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function ix(n,e,t){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,d){n.drawElements(i,d,r,u*a),t.update(d,i,1)}function l(u,d,f){f!==0&&(n.drawElementsInstanced(i,d,r,u*a,f),t.update(d,i,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,f);let b=0;for(let m=0;m<f;m++)b+=d[m];t.update(b,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function sx(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:tt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function rx(n,e,t){let i=new WeakMap,s=new yt;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let w=function(){E.dispose(),i.delete(o),o.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],M=0;f===!0&&(M=1),g===!0&&(M=2),b===!0&&(M=3);let x=o.attributes.position.count*M,v=1;x>e.maxTextureSize&&(v=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let S=new Float32Array(x*v*4*u),E=new Ua(S,x,v,u);E.type=Wn,E.needsUpdate=!0;let y=M*4;for(let C=0;C<u;C++){let D=m[C],B=p[C],X=_[C],k=x*v*4*C;for(let $=0;$<D.count;$++){let Q=$*y;f===!0&&(s.fromBufferAttribute(D,$),S[k+Q+0]=s.x,S[k+Q+1]=s.y,S[k+Q+2]=s.z,S[k+Q+3]=0),g===!0&&(s.fromBufferAttribute(B,$),S[k+Q+4]=s.x,S[k+Q+5]=s.y,S[k+Q+6]=s.z,S[k+Q+7]=0),b===!0&&(s.fromBufferAttribute(X,$),S[k+Q+8]=s.x,S[k+Q+9]=s.y,S[k+Q+10]=s.z,S[k+Q+11]=X.itemSize===4?s.w:1)}}d={count:u,texture:E,size:new Le(x,v)},i.set(o,d),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let b=0;b<l.length;b++)f+=l[b];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function ax(n,e,t,i,s){let r=new WeakMap;function a(l){let h=s.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var ox={[Zh]:"LINEAR_TONE_MAPPING",[Qh]:"REINHARD_TONE_MAPPING",[eu]:"CINEON_TONE_MAPPING",[tu]:"ACES_FILMIC_TONE_MAPPING",[iu]:"AGX_TONE_MAPPING",[su]:"NEUTRAL_TONE_MAPPING",[nu]:"CUSTOM_TONE_MAPPING"};function cx(n,e,t,i,s,r){let a=new Gt(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new bt;l.setAttribute("position",new Tt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Tt([0,2,0,0,2,0],2));let h=new Mc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new At(l,h),d=new Ii(-1,1,1,-1,0,1),f=null,g=null,b=!1,m,p=null,_=[],M=!1;this.setSize=function(x,v){a.setSize(x,v),o!==null&&o.setSize(x,v),c!==null&&c.setSize(x,v);for(let S=0;S<_.length;S++){let E=_[S];E.setSize&&E.setSize(x,v)}},this.setEffects=function(x){_=x,M=_.length>0&&_[0].isRenderPass===!0;let v=a.width,S=a.height;_.length>0&&o===null&&(o=new Gt(v,S,{type:$t,depthBuffer:!1,stencilBuffer:!1}),c=new Gt(v,S,{type:$t,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<_.length;E++){let y=_[E];y.setSize&&y.setSize(v,S)}},this.begin=function(x,v){if(b||x.toneMapping===Hn&&_.length===0)return!1;if(p=v,v!==null){let S=v.width,E=v.height;(a.width!==S||a.height!==E)&&this.setSize(S,E)}return M===!1&&x.setRenderTarget(a),m=x.toneMapping,x.toneMapping=Hn,!0},this.hasRenderPass=function(){return M},this.end=function(x,v){x.toneMapping=m,b=!0;let S=a,E=o;for(let y=0;y<_.length;y++){let w=_[y];w.enabled!==!1&&(w.render(x,E,S,v),w.needsSwap!==!1&&(S=E,E=E===o?c:o))}if(f!==x.outputColorSpace||g!==x.toneMapping){f=x.outputColorSpace,g=x.toneMapping,h.defines={},lt.getTransfer(f)===St&&(h.defines.SRGB_TRANSFER="");let y=ox[g];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,x.setRenderTarget(p),x.render(u,d),p=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var jp=new tn,Lu=new xs(1,1),Kp=new Ua,$p=new bc,Yp=new qa,Rp=[],Cp=[],Pp=new Float32Array(16),Ip=new Float32Array(9),Lp=new Float32Array(4);function fa(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Rp[s];if(r===void 0&&(r=new Float32Array(s),Rp[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function nn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function sn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function El(n,e){let t=Cp[e];t===void 0&&(t=new Int32Array(e),Cp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function lx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function hx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;n.uniform2fv(this.addr,e),sn(t,e)}}function ux(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;n.uniform3fv(this.addr,e),sn(t,e)}}function dx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;n.uniform4fv(this.addr,e),sn(t,e)}}function fx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,i))return;Lp.set(i),n.uniformMatrix2fv(this.addr,!1,Lp),sn(t,i)}}function px(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,i))return;Ip.set(i),n.uniformMatrix3fv(this.addr,!1,Ip),sn(t,i)}}function mx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,i))return;Pp.set(i),n.uniformMatrix4fv(this.addr,!1,Pp),sn(t,i)}}function gx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function bx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;n.uniform2iv(this.addr,e),sn(t,e)}}function _x(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;n.uniform3iv(this.addr,e),sn(t,e)}}function xx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;n.uniform4iv(this.addr,e),sn(t,e)}}function vx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function yx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;n.uniform2uiv(this.addr,e),sn(t,e)}}function Mx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;n.uniform3uiv(this.addr,e),sn(t,e)}}function Sx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;n.uniform4uiv(this.addr,e),sn(t,e)}}function Tx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Lu.compareFunction=t.isReversedDepthBuffer()?Ml:yl,r=Lu):r=jp,t.setTexture2D(e||r,s)}function wx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||$p,s)}function Ax(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Yp,s)}function Ex(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Kp,s)}function Rx(n){switch(n){case 5126:return lx;case 35664:return hx;case 35665:return ux;case 35666:return dx;case 35674:return fx;case 35675:return px;case 35676:return mx;case 5124:case 35670:return gx;case 35667:case 35671:return bx;case 35668:case 35672:return _x;case 35669:case 35673:return xx;case 5125:return vx;case 36294:return yx;case 36295:return Mx;case 36296:return Sx;case 35678:case 36198:case 36298:case 36306:case 35682:return Tx;case 35679:case 36299:case 36307:return wx;case 35680:case 36300:case 36308:case 36293:return Ax;case 36289:case 36303:case 36311:case 36292:return Ex}}function Cx(n,e){n.uniform1fv(this.addr,e)}function Px(n,e){let t=fa(e,this.size,2);n.uniform2fv(this.addr,t)}function Ix(n,e){let t=fa(e,this.size,3);n.uniform3fv(this.addr,t)}function Lx(n,e){let t=fa(e,this.size,4);n.uniform4fv(this.addr,t)}function Dx(n,e){let t=fa(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Nx(n,e){let t=fa(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Fx(n,e){let t=fa(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Ux(n,e){n.uniform1iv(this.addr,e)}function Ox(n,e){n.uniform2iv(this.addr,e)}function kx(n,e){n.uniform3iv(this.addr,e)}function Bx(n,e){n.uniform4iv(this.addr,e)}function zx(n,e){n.uniform1uiv(this.addr,e)}function Gx(n,e){n.uniform2uiv(this.addr,e)}function Vx(n,e){n.uniform3uiv(this.addr,e)}function Hx(n,e){n.uniform4uiv(this.addr,e)}function Wx(n,e,t){let i=this.cache,s=e.length,r=El(t,s);nn(i,r)||(n.uniform1iv(this.addr,r),sn(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Lu:a=jp;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function qx(n,e,t){let i=this.cache,s=e.length,r=El(t,s);nn(i,r)||(n.uniform1iv(this.addr,r),sn(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||$p,r[a])}function Xx(n,e,t){let i=this.cache,s=e.length,r=El(t,s);nn(i,r)||(n.uniform1iv(this.addr,r),sn(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Yp,r[a])}function jx(n,e,t){let i=this.cache,s=e.length,r=El(t,s);nn(i,r)||(n.uniform1iv(this.addr,r),sn(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Kp,r[a])}function Kx(n){switch(n){case 5126:return Cx;case 35664:return Px;case 35665:return Ix;case 35666:return Lx;case 35674:return Dx;case 35675:return Nx;case 35676:return Fx;case 5124:case 35670:return Ux;case 35667:case 35671:return Ox;case 35668:case 35672:return kx;case 35669:case 35673:return Bx;case 5125:return zx;case 36294:return Gx;case 36295:return Vx;case 36296:return Hx;case 35678:case 36198:case 36298:case 36306:case 35682:return Wx;case 35679:case 36299:case 36307:return qx;case 35680:case 36300:case 36308:case 36293:return Xx;case 36289:case 36303:case 36311:case 36292:return jx}}var Du=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Rx(t.type)}},Nu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Kx(t.type)}},Fu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},Pu=/(\w+)(\])?(\[|\.)?/g;function Dp(n,e){n.seq.push(e),n.map[e.id]=e}function $x(n,e,t){let i=n.name,s=i.length;for(Pu.lastIndex=0;;){let r=Pu.exec(i),a=Pu.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Dp(t,l===void 0?new Du(o,n,e):new Nu(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new Fu(o),Dp(t,u)),t=u}}}var ua=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);$x(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function Np(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Yx=37297,Jx=0;function Zx(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var Fp=new st;function Qx(n){lt._getMatrix(Fp,lt.workingColorSpace,n);let e=`mat3( ${Fp.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(n)){case Na:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return Ke("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Up(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Zx(n.getShaderSource(e),o)}else return r}function ev(n,e){let t=Qx(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var tv={[Zh]:"Linear",[Qh]:"Reinhard",[eu]:"Cineon",[tu]:"ACESFilmic",[iu]:"AgX",[su]:"Neutral",[nu]:"Custom"};function nv(n,e){let t=tv[e];return t===void 0?(Ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Tl=new P;function iv(){lt.getLuminanceCoefficients(Tl);let n=Tl.x.toFixed(4),e=Tl.y.toFixed(4),t=Tl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_o).join(`
`)}function rv(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function av(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function _o(n){return n!==""}function Op(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ov=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uu(n){return n.replace(ov,lv)}var cv=new Map;function lv(n,e){let t=ot[e];if(t===void 0){let i=cv.get(e);if(i!==void 0)t=ot[i],Ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Uu(t)}var hv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bp(n){return n.replace(hv,uv)}function uv(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zp(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var dv={[so]:"SHADOWMAP_TYPE_PCF",[ia]:"SHADOWMAP_TYPE_VSM"};function fv(n){return dv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var pv={[Ts]:"ENVMAP_TYPE_CUBE",[nr]:"ENVMAP_TYPE_CUBE",[ao]:"ENVMAP_TYPE_CUBE_UV"};function mv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":pv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var gv={[nr]:"ENVMAP_MODE_REFRACTION"};function bv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":gv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var _v={[Jh]:"ENVMAP_BLENDING_MULTIPLY",[sp]:"ENVMAP_BLENDING_MIX",[rp]:"ENVMAP_BLENDING_ADD"};function xv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":_v[n.combine]||"ENVMAP_BLENDING_NONE"}function vv(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function yv(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=fv(t),l=mv(t),h=bv(t),u=xv(t),d=vv(t),f=sv(t),g=rv(r),b=s.createProgram(),m,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(_o).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(_o).join(`
`),p.length>0&&(p+=`
`)):(m=[zp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_o).join(`
`),p=[zp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hn?"#define TONE_MAPPING":"",t.toneMapping!==Hn?ot.tonemapping_pars_fragment:"",t.toneMapping!==Hn?nv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,ev("linearToOutputTexel",t.outputColorSpace),iv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_o).join(`
`)),a=Uu(a),a=Op(a,t),a=kp(a,t),o=Uu(o),o=Op(o,t),o=kp(o,t),a=Bp(a),o=Bp(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===pu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=_+m+a,x=_+p+o,v=Np(s,s.VERTEX_SHADER,M),S=Np(s,s.FRAGMENT_SHADER,x);s.attachShader(b,v),s.attachShader(b,S),t.index0AttributeName!==void 0?s.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function E(D){if(n.debug.checkShaderErrors){let B=s.getProgramInfoLog(b)||"",X=s.getShaderInfoLog(v)||"",k=s.getShaderInfoLog(S)||"",$=B.trim(),Q=X.trim(),z=k.trim(),J=!0,G=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,b,v,S);else{let q=Up(s,v,"vertex"),F=Up(s,S,"fragment");tt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+$+`
`+q+`
`+F)}else $!==""?Ke("WebGLProgram: Program Info Log:",$):(Q===""||z==="")&&(G=!1);G&&(D.diagnostics={runnable:J,programLog:$,vertexShader:{log:Q,prefix:m},fragmentShader:{log:z,prefix:p}})}s.deleteShader(v),s.deleteShader(S),y=new ua(s,b),w=av(s,b)}let y;this.getUniforms=function(){return y===void 0&&E(this),y};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(b,Yx)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Jx++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=v,this.fragmentShader=S,this}var Mv=0,Ou=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new ku(e),t.set(e,i)),i}},ku=class{constructor(e){this.id=Mv++,this.code=e,this.usedTimes=0}};function Sv(n){return n===As||n===uo||n===fo}function Tv(n,e,t,i,s,r){let a=new Oa,o=new Ou,c=new Set,l=[],h=new Map,u=i.logarithmicDepthBuffer,d=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function b(y,w,C,D,B,X){let k=D.fog,$=B.geometry,Q=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?D.environment:null,z=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,J=e.get(y.envMap||Q,z),G=J&&J.mapping===ao?J.image.height:null,q=f[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&Ke("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let F=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ce=F!==void 0?F.length:0,U=0;$.morphAttributes.position!==void 0&&(U=1),$.morphAttributes.normal!==void 0&&(U=2),$.morphAttributes.color!==void 0&&(U=3);let he,oe,xe,I;if(q){let Ct=Di[q];he=Ct.vertexShader,oe=Ct.fragmentShader}else{he=y.vertexShader,oe=y.fragmentShader;let Ct=o.getVertexShaderStage(y),_t=o.getFragmentShaderStage(y);o.update(y,Ct,_t),xe=Ct.id,I=_t.id}let N=n.getRenderTarget(),L=n.state.buffers.depth.getReversed(),V=B.isInstancedMesh===!0,ie=B.isBatchedMesh===!0,K=!!y.map,se=!!y.matcap,ee=!!J,_e=!!y.aoMap,Me=!!y.lightMap,de=!!y.bumpMap&&y.wireframe===!1,me=!!y.normalMap,Re=!!y.displacementMap,ze=!!y.emissiveMap,be=!!y.metalnessMap,Ue=!!y.roughnessMap,O=y.anisotropy>0,ct=y.clearcoat>0,Ye=y.dispersion>0,R=y.retroreflectivity>0,T=y.iridescence>0,j=y.sheen>0,te=y.transmission>0,le=O&&!!y.anisotropyMap,ye=ct&&!!y.clearcoatMap,ve=ct&&!!y.clearcoatNormalMap,ae=ct&&!!y.clearcoatRoughnessMap,fe=T&&!!y.iridescenceMap,we=T&&!!y.iridescenceThicknessMap,Ge=j&&!!y.sheenColorMap,Se=j&&!!y.sheenRoughnessMap,Ae=!!y.specularMap,Oe=!!y.specularColorMap,We=!!y.specularIntensityMap,et=te&&!!y.transmissionMap,H=te&&!!y.thicknessMap,Ce=!!y.gradientMap,ue=!!y.alphaMap,Ee=y.alphaTest>0,De=!!y.alphaHash,ge=!!y.extensions,qe=Hn;y.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(qe=n.toneMapping);let Ve={shaderID:q,shaderType:y.type,shaderName:y.name,vertexShader:he,fragmentShader:oe,defines:y.defines,customVertexShaderID:xe,customFragmentShaderID:I,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:ie,batchingColor:ie&&B._colorsTexture!==null,instancing:V,instancingColor:V&&B.instanceColor!==null,instancingMorph:V&&B.morphTexture!==null,outputColorSpace:N===null?n.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:lt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:K,matcap:se,envMap:ee,envMapMode:ee&&J.mapping,envMapCubeUVHeight:G,aoMap:_e,lightMap:Me,bumpMap:de,normalMap:me,displacementMap:Re,emissiveMap:ze,normalMapObjectSpace:me&&y.normalMapType===lp,normalMapTangentSpace:me&&y.normalMapType===vl,packedNormalMap:me&&y.normalMapType===vl&&Sv(y.normalMap.format),metalnessMap:be,roughnessMap:Ue,anisotropy:O,anisotropyMap:le,clearcoat:ct,clearcoatMap:ye,clearcoatNormalMap:ve,clearcoatRoughnessMap:ae,dispersion:Ye,retroreflection:R,iridescence:T,iridescenceMap:fe,iridescenceThicknessMap:we,sheen:j,sheenColorMap:Ge,sheenRoughnessMap:Se,specularMap:Ae,specularColorMap:Oe,specularIntensityMap:We,transmission:te,transmissionMap:et,thicknessMap:H,gradientMap:Ce,opaque:y.transparent===!1&&y.blending===sa&&y.alphaToCoverage===!1,alphaMap:ue,alphaTest:Ee,alphaHash:De,combine:y.combine,mapUv:K&&g(y.map.channel),aoMapUv:_e&&g(y.aoMap.channel),lightMapUv:Me&&g(y.lightMap.channel),bumpMapUv:de&&g(y.bumpMap.channel),normalMapUv:me&&g(y.normalMap.channel),displacementMapUv:Re&&g(y.displacementMap.channel),emissiveMapUv:ze&&g(y.emissiveMap.channel),metalnessMapUv:be&&g(y.metalnessMap.channel),roughnessMapUv:Ue&&g(y.roughnessMap.channel),anisotropyMapUv:le&&g(y.anisotropyMap.channel),clearcoatMapUv:ye&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:ve&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:we&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Se&&g(y.sheenRoughnessMap.channel),specularMapUv:Ae&&g(y.specularMap.channel),specularColorMapUv:Oe&&g(y.specularColorMap.channel),specularIntensityMapUv:We&&g(y.specularIntensityMap.channel),transmissionMapUv:et&&g(y.transmissionMap.channel),thicknessMapUv:H&&g(y.thicknessMap.channel),alphaMapUv:ue&&g(y.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(me||O),vertexNormals:!!$.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!$.attributes.uv&&(K||ue),fog:!!k,useFog:y.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||$.attributes.normal===void 0&&me===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:L,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:$.attributes.position!==void 0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:U,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:qe,decodeVideoTexture:K&&y.map.isVideoTexture===!0&&lt.getTransfer(y.map.colorSpace)===St,decodeVideoTextureEmissive:ze&&y.emissiveMap.isVideoTexture===!0&&lt.getTransfer(y.emissiveMap.colorSpace)===St,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Tn,flipSided:y.side===ln,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ge&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&y.extensions.multiDraw===!0||ie)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ve.vertexUv1s=c.has(1),Ve.vertexUv2s=c.has(2),Ve.vertexUv3s=c.has(3),c.clear(),Ve}function m(y){let w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(let C in y.defines)w.push(C),w.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(p(w,y),_(w,y),w.push(n.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function p(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numSunLights),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numSunLightShadows),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function _(y,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function M(y){let w=f[y.type],C;if(w){let D=Di[w];C=rr.clone(D.uniforms)}else C=y.uniforms;return C}function x(y,w){let C=h.get(w);return C!==void 0?++C.usedTimes:(C=new yv(n,w,y,s),l.push(C),h.set(w,C)),C}function v(y){if(--y.usedTimes===0){let w=l.indexOf(y);l[w]=l[l.length-1],l.pop(),h.delete(y.cacheKey),y.destroy()}}function S(y){o.remove(y)}function E(){o.dispose()}return{getParameters:b,getProgramCacheKey:m,getUniforms:M,acquireProgram:x,releaseProgram:v,releaseShaderCache:S,programs:l,dispose:E}}function wv(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Av(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Gp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Vp(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,b,m,p){let _=n[e];return _===void 0?(_={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:b,renderOrder:d.renderOrder,z:m,group:p},n[e]=_):(_.id=d.id,_.object=d,_.geometry=f,_.material=g,_.materialVariant=a(d),_.groupOrder=b,_.renderOrder=d.renderOrder,_.z=m,_.group=p),e++,_}function c(d,f,g,b,m,p,_){_.reversedDepth===!0&&(m=-m);let M=o(d,f,g,b,m,p);g.transmission>0?i.push(M):g.transparent===!0?s.push(M):t.push(M)}function l(d,f,g,b,m,p){let _=o(d,f,g,b,m,p);g.transmission>0?i.unshift(_):g.transparent===!0?s.unshift(_):t.unshift(_)}function h(d,f){t.length>1&&t.sort(d||Av),i.length>1&&i.sort(f||Gp),s.length>1&&s.sort(f||Gp)}function u(){for(let d=e,f=n.length;d<f;d++){let g=n[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function Ev(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new Vp,n.set(i,[a])):s>=r.length?(a=new Vp,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Rv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new Xe};break;case"SpotLight":t={position:new P,direction:new P,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function Cv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Pv=0;function Iv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Lv(n){let e=new Rv,t=Cv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new P);let s=new P,r=new it,a=new it;function o(l){let h=0,u=0,d=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let f=0,g=0,b=0,m=0,p=0,_=0,M=0,x=0,v=0,S=0,E=0,y=0,w=0,C=0;l.sort(Iv);for(let B=0,X=l.length;B<X;B++){let k=l[B],$=k.color,Q=k.intensity,z=k.distance,J=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===As?J=k.shadow.map.texture:J=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)h+=$.r*Q,u+=$.g*Q,d+=$.b*Q;else if(k.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(k.sh.coefficients[G],Q);C++}else if(k.isSunLight){let G=e.get(k);if(G.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let q=k.shadow,F=t.get(k);F.shadowIntensity=q.intensity,F.shadowBias=q.bias,F.shadowNormalBias=q.normalBias,F.shadowRadius=q.radius,F.shadowMapSize.copy(q.mapSize).multiply(q.getFrameExtents()),i.sunShadow[g]=F,i.sunShadowMap[g]=J;let ce=q.getViewportCount();for(let U=0;U<ce;U++)i.sunShadowMatrix[b+U]=q.getMatrix(U),i.sunShadowCascade[b+U]=q._cascadeData[U];b+=ce,g++}i.sun[f]=G,f++}else if(k.isDirectionalLight){let G=e.get(k);if(G.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let q=k.shadow,F=t.get(k);F.shadowIntensity=q.intensity,F.shadowBias=q.bias,F.shadowNormalBias=q.normalBias,F.shadowRadius=q.radius,F.shadowMapSize=q.mapSize,i.directionalShadow[m]=F,i.directionalShadowMap[m]=J,i.directionalShadowMatrix[m]=k.shadow.matrix,v++}i.directional[m]=G,m++}else if(k.isSpotLight){let G=e.get(k);G.position.setFromMatrixPosition(k.matrixWorld),G.color.copy($).multiplyScalar(Q),G.distance=z,G.coneCos=Math.cos(k.angle),G.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),G.decay=k.decay,i.spot[_]=G;let q=k.shadow;if(k.map&&(i.spotLightMap[y]=k.map,y++,q.updateMatrices(k),k.castShadow&&w++),i.spotLightMatrix[_]=q.matrix,k.castShadow){let F=t.get(k);F.shadowIntensity=q.intensity,F.shadowBias=q.bias,F.shadowNormalBias=q.normalBias,F.shadowRadius=q.radius,F.shadowMapSize=q.mapSize,i.spotShadow[_]=F,i.spotShadowMap[_]=J,E++}_++}else if(k.isRectAreaLight){let G=e.get(k);G.color.copy($).multiplyScalar(Q),G.halfWidth.set(k.width*.5,0,0),G.halfHeight.set(0,k.height*.5,0),i.rectArea[M]=G,M++}else if(k.isPointLight){let G=e.get(k);if(G.color.copy(k.color).multiplyScalar(k.intensity),G.distance=k.distance,G.decay=k.decay,k.castShadow){let q=k.shadow,F=t.get(k);F.shadowIntensity=q.intensity,F.shadowBias=q.bias,F.shadowNormalBias=q.normalBias,F.shadowRadius=q.radius,F.shadowMapSize=q.mapSize,F.shadowCameraNear=q.camera.near,F.shadowCameraFar=q.camera.far,i.pointShadow[p]=F,i.pointShadowMap[p]=J,i.pointShadowMatrix[p]=k.shadow.matrix,S++}i.point[p]=G,p++}else if(k.isHemisphereLight){let G=e.get(k);G.skyColor.copy(k.color).multiplyScalar(Q),G.groundColor.copy(k.groundColor).multiplyScalar(Q),i.hemi[x]=G,x++}}M>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ne.LTC_FLOAT_1,i.rectAreaLTC2=Ne.LTC_FLOAT_2):(i.rectAreaLTC1=Ne.LTC_HALF_1,i.rectAreaLTC2=Ne.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let D=i.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==p||D.spotLength!==_||D.rectAreaLength!==M||D.hemiLength!==x||D.numSunShadows!==g||D.numDirectionalShadows!==v||D.numPointShadows!==S||D.numSpotShadows!==E||D.numSpotMaps!==y||D.numLightProbes!==C)&&(i.sun.length=f,i.directional.length=m,i.spot.length=_,i.rectArea.length=M,i.point.length=p,i.hemi.length=x,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=b,i.sunShadowCascade.length=b,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.directionalShadowMatrix.length=v,i.pointShadow.length=S,i.pointShadowMap.length=S,i.pointShadowMatrix.length=S,i.spotShadow.length=E,i.spotShadowMap.length=E,i.spotLightMatrix.length=E+y-w,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=C,D.sunLength=f,D.directionalLength=m,D.pointLength=p,D.spotLength=_,D.rectAreaLength=M,D.hemiLength=x,D.numSunShadows=g,D.numDirectionalShadows=v,D.numPointShadows=S,D.numSpotShadows=E,D.numSpotMaps=y,D.numLightProbes=C,i.version=Pv++)}function c(l,h){let u=0,d=0,f=0,g=0,b=0,m=0,p=h.matrixWorldInverse;for(let _=0,M=l.length;_<M;_++){let x=l[_];if(x.isSunLight){let v=i.sun[u];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(p),u++}else if(x.isDirectionalLight){let v=i.directional[d];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),d++}else if(x.isSpotLight){let v=i.spot[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),g++}else if(x.isRectAreaLight){let v=i.rectArea[b];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(p),a.identity(),r.copy(x.matrixWorld),r.premultiply(p),a.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),b++}else if(x.isPointLight){let v=i.point[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){let v=i.hemi[m];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:i}}function Hp(n){let e=new Lv(n),t=[],i=[],s=[];function r(d){u.camera=d,t.length=0,i.length=0,s.length=0}function a(d){t.push(d)}function o(d){i.push(d)}function c(d){s.push(d)}function l(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Dv(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Hp(n),e.set(s,[o])):r>=a.length?(o=new Hp(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var Nv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fv=`uniform sampler2D shadow_pass;
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
}`,Uv=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],Ov=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Wp=new it,bo=new P,Iu=new P;function kv(n,e,t){let i=new $r,s=new Le,r=new Le,a=new yt,o=new Sc,c=new Tc,l={},h=t.maxTextureSize,u={[Vn]:ln,[ln]:Vn,[Tn]:Tn},d=new Ot({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:Nv,fragmentShader:Fv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new bt;g.setAttribute("position",new vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new At(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=so;let p=this.type;this.render=function(S,E,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===Vf&&(Ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=so);let w=n.getRenderTarget(),C=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),B=n.state;B.setBlending(ei),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let X=p!==this.type;X&&E.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach($=>$.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,$=S.length;k<$;k++){let Q=S[k],z=Q.shadow;if(z===void 0){Ke("WebGLShadowMap:",Q,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let J=z.getFrameExtents();s.multiply(J),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/J.x),s.x=r.x*J.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/J.y),s.y=r.y*J.y,z.mapSize.y=r.y));let G=n.state.buffers.depth.getReversed();if(z.camera._reversedDepth=G,z.map===null||X===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===ia){if(Q.isPointLight){Ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Gt(s.x,s.y,{format:As,type:$t,minFilter:jt,magFilter:jt,generateMipmaps:!1}),z.map.texture.name=Q.name+".shadowMap",z.map.depthTexture=new xs(s.x,s.y,Wn),z.map.depthTexture.name=Q.name+".shadowMapDepth",z.map.depthTexture.format=Ri,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Xt,z.map.depthTexture.magFilter=Xt}else Q.isPointLight?(z.map=new or(s.x),z.map.depthTexture=new vc(s.x,gi)):(z.map=new Gt(s.x,s.y),z.map.depthTexture=new xs(s.x,s.y,gi)),z.map.depthTexture.name=Q.name+".shadowMap",z.map.depthTexture.format=Ri,this.type===so?(z.map.depthTexture.compareFunction=G?Ml:yl,z.map.depthTexture.minFilter=jt,z.map.depthTexture.magFilter=jt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Xt,z.map.depthTexture.magFilter=Xt);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);let q=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();Q.isPointLight!==!0&&z.updateMatrices(Q,y);for(let F=0;F<q;F++){let ce=z.getCamera(F);if(Q.isPointLight){let U=z.camera,he=z.matrix,oe=Q.distance||U.far;oe!==U.far&&(U.far=oe,U.updateProjectionMatrix()),bo.setFromMatrixPosition(Q.matrixWorld),U.position.copy(bo),Iu.copy(U.position),Iu.add(Uv[F]),U.up.copy(Ov[F]),U.lookAt(Iu),U.updateMatrixWorld(),he.makeTranslation(-bo.x,-bo.y,-bo.z),Wp.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Wp,U.coordinateSystem,U.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)n.setRenderTarget(z.map,F),n.clear();else{F===0&&(n.setRenderTarget(z.map),n.clear());let U=z.getViewport(F);a.set(r.x*U.x,r.y*U.y,r.x*U.z,r.y*U.w),B.viewport(a)}i=z.getFrustum(F),x(E,y,ce,Q,this.type)}z.isPointLightShadow!==!0&&this.type===ia&&_(z,y),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(w,C,D)};function _(S,E){let y=e.update(b);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new Gt(s.x,s.y,{format:As,type:$t}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),d.uniforms.shadow_pass.value=S.map.depthTexture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(E,null,y,d,b,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(E,null,y,f,b,null)}function M(S,E,y,w){let C=null,D=y.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(D!==void 0)C=D;else if(C=y.isPointLight===!0?c:o,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let B=C.uuid,X=E.uuid,k=l[B];k===void 0&&(k={},l[B]=k);let $=k[X];$===void 0&&($=C.clone(),k[X]=$,E.addEventListener("dispose",v)),C=$}if(C.visible=E.visible,C.wireframe=E.wireframe,w===ia?C.side=E.shadowSide!==null?E.shadowSide:E.side:C.side=E.shadowSide!==null?E.shadowSide:u[E.side],C.alphaMap=E.alphaMap,C.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,C.map=E.map,C.clipShadows=E.clipShadows,C.clippingPlanes=E.clippingPlanes,C.clipIntersection=E.clipIntersection,C.displacementMap=E.displacementMap,C.displacementScale=E.displacementScale,C.displacementBias=E.displacementBias,C.wireframeLinewidth=E.wireframeLinewidth,C.linewidth=E.linewidth,y.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let B=n.properties.get(C);B.light=y}return C}function x(S,E,y,w,C){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&C===ia)&&(!S.frustumCulled||S.intersectsFrustum(i))){S.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,S.matrixWorld);let X=e.update(S),k=S.material;if(Array.isArray(k)){let $=X.groups;for(let Q=0,z=$.length;Q<z;Q++){let J=$[Q],G=k[J.materialIndex];if(G&&G.visible){let q=M(S,G,w,C);S.onBeforeShadow(n,S,E,y,X,q,J),n.renderBufferDirect(y,null,X,q,S,J),S.onAfterShadow(n,S,E,y,X,q,J)}}}else if(k.visible){let $=M(S,k,w,C);S.onBeforeShadow(n,S,E,y,X,$,null),n.renderBufferDirect(y,null,X,$,S,null),S.onAfterShadow(n,S,E,y,X,$,null)}}let B=S.children;for(let X=0,k=B.length;X<k;X++)x(B[X],E,y,w,C)}function v(S){S.target.removeEventListener("dispose",v);for(let y in l){let w=l[y],C=S.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}function Bv(n,e){function t(){let H=!1,Ce=new yt,ue=null,Ee=new yt(0,0,0,0);return{setMask:function(De){ue!==De&&!H&&(n.colorMask(De,De,De,De),ue=De)},setLocked:function(De){H=De},setClear:function(De,ge,qe,Ve,Ct){Ct===!0&&(De*=Ve,ge*=Ve,qe*=Ve),Ce.set(De,ge,qe,Ve),Ee.equals(Ce)===!1&&(n.clearColor(De,ge,qe,Ve),Ee.copy(Ce))},reset:function(){H=!1,ue=null,Ee.set(-1,0,0,0)}}}function i(){let H=!1,Ce=!1,ue=null,Ee=null,De=null;return{setReversed:function(ge){if(Ce!==ge){let qe=e.get("EXT_clip_control");ge?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),Ce=ge;let Ve=De;De=null,this.setClear(Ve)}},getReversed:function(){return Ce},setTest:function(ge){ge?N(n.DEPTH_TEST):L(n.DEPTH_TEST)},setMask:function(ge){ue!==ge&&!H&&(n.depthMask(ge),ue=ge)},setFunc:function(ge){if(Ce&&(ge=vp[ge]),Ee!==ge){switch(ge){case cc:n.depthFunc(n.NEVER);break;case lc:n.depthFunc(n.ALWAYS);break;case hc:n.depthFunc(n.LESS);break;case Or:n.depthFunc(n.LEQUAL);break;case uc:n.depthFunc(n.EQUAL);break;case dc:n.depthFunc(n.GEQUAL);break;case fc:n.depthFunc(n.GREATER);break;case pc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ee=ge}},setLocked:function(ge){H=ge},setClear:function(ge){De!==ge&&(De=ge,Ce&&(ge=1-ge),n.clearDepth(ge))},reset:function(){H=!1,ue=null,Ee=null,De=null,Ce=!1}}}function s(){let H=!1,Ce=null,ue=null,Ee=null,De=null,ge=null,qe=null,Ve=null,Ct=null;return{setTest:function(_t){H||(_t?N(n.STENCIL_TEST):L(n.STENCIL_TEST))},setMask:function(_t){Ce!==_t&&!H&&(n.stencilMask(_t),Ce=_t)},setFunc:function(_t,Un,Yn){(ue!==_t||Ee!==Un||De!==Yn)&&(n.stencilFunc(_t,Un,Yn),ue=_t,Ee=Un,De=Yn)},setOp:function(_t,Un,Yn){(ge!==_t||qe!==Un||Ve!==Yn)&&(n.stencilOp(_t,Un,Yn),ge=_t,qe=Un,Ve=Yn)},setLocked:function(_t){H=_t},setClear:function(_t){Ct!==_t&&(n.clearStencil(_t),Ct=_t)},reset:function(){H=!1,Ce=null,ue=null,Ee=null,De=null,ge=null,qe=null,Ve=null,Ct=null}}}let r=new t,a=new i,o=new s,c=new WeakMap,l=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],b=null,m=!1,p=null,_=null,M=null,x=null,v=null,S=null,E=null,y=new Xe(0,0,0),w=0,C=!1,D=null,B=null,X=null,k=null,$=null,Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,J=0,G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(G)[1]),z=J>=1):G.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),z=J>=2);let q=null,F={},ce=n.getParameter(n.SCISSOR_BOX),U=n.getParameter(n.VIEWPORT),he=new yt().fromArray(ce),oe=new yt().fromArray(U);function xe(H,Ce,ue,Ee){let De=new Uint8Array(4),ge=n.createTexture();n.bindTexture(H,ge),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qe=0;qe<ue;qe++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(Ce,0,n.RGBA,1,1,Ee,0,n.RGBA,n.UNSIGNED_BYTE,De):n.texImage2D(Ce+qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,De);return ge}let I={};I[n.TEXTURE_2D]=xe(n.TEXTURE_2D,n.TEXTURE_2D,1),I[n.TEXTURE_CUBE_MAP]=xe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),I[n.TEXTURE_2D_ARRAY]=xe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),I[n.TEXTURE_3D]=xe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),N(n.DEPTH_TEST),a.setFunc(Or),de(!1),me(Xh),N(n.CULL_FACE),_e(ei);function N(H){h[H]!==!0&&(n.enable(H),h[H]=!0)}function L(H){h[H]!==!1&&(n.disable(H),h[H]=!1)}function V(H,Ce){return d[H]!==Ce?(n.bindFramebuffer(H,Ce),d[H]=Ce,H===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Ce),H===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Ce),!0):!1}function ie(H,Ce){let ue=g,Ee=!1;if(H){ue=f.get(Ce),ue===void 0&&(ue=[],f.set(Ce,ue));let De=H.textures;if(ue.length!==De.length||ue[0]!==n.COLOR_ATTACHMENT0){for(let ge=0,qe=De.length;ge<qe;ge++)ue[ge]=n.COLOR_ATTACHMENT0+ge;ue.length=De.length,Ee=!0}}else ue[0]!==n.BACK&&(ue[0]=n.BACK,Ee=!0);Ee&&n.drawBuffers(ue)}function K(H){return b!==H?(n.useProgram(H),b=H,!0):!1}let se={[ti]:n.FUNC_ADD,[Hf]:n.FUNC_SUBTRACT,[Wf]:n.FUNC_REVERSE_SUBTRACT};se[qf]=n.MIN,se[Xf]=n.MAX;let ee={[tr]:n.ZERO,[wn]:n.ONE,[jf]:n.SRC_COLOR,[$h]:n.SRC_ALPHA,[Qf]:n.SRC_ALPHA_SATURATE,[Jf]:n.DST_COLOR,[$f]:n.DST_ALPHA,[Kf]:n.ONE_MINUS_SRC_COLOR,[Yh]:n.ONE_MINUS_SRC_ALPHA,[Zf]:n.ONE_MINUS_DST_COLOR,[Yf]:n.ONE_MINUS_DST_ALPHA,[ep]:n.CONSTANT_COLOR,[tp]:n.ONE_MINUS_CONSTANT_COLOR,[np]:n.CONSTANT_ALPHA,[ip]:n.ONE_MINUS_CONSTANT_ALPHA};function _e(H,Ce,ue,Ee,De,ge,qe,Ve,Ct,_t){if(H===ei){m===!0&&(L(n.BLEND),m=!1);return}if(m===!1&&(N(n.BLEND),m=!0),H!==er){if(H!==p||_t!==C){if((_!==ti||v!==ti)&&(n.blendEquation(n.FUNC_ADD),_=ti,v=ti),_t)switch(H){case sa:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ro:n.blendFunc(n.ONE,n.ONE);break;case jh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Kh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:tt("WebGLState: Invalid blending: ",H);break}else switch(H){case sa:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ro:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case jh:tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kh:tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tt("WebGLState: Invalid blending: ",H);break}M=null,x=null,S=null,E=null,y.set(0,0,0),w=0,p=H,C=_t}return}De=De||Ce,ge=ge||ue,qe=qe||Ee,(Ce!==_||De!==v)&&(n.blendEquationSeparate(se[Ce],se[De]),_=Ce,v=De),(ue!==M||Ee!==x||ge!==S||qe!==E)&&(n.blendFuncSeparate(ee[ue],ee[Ee],ee[ge],ee[qe]),M=ue,x=Ee,S=ge,E=qe),(Ve.equals(y)===!1||Ct!==w)&&(n.blendColor(Ve.r,Ve.g,Ve.b,Ct),y.copy(Ve),w=Ct),p=H,C=!1}function Me(H,Ce){H.side===Tn?L(n.CULL_FACE):N(n.CULL_FACE);let ue=H.side===ln;Ce&&(ue=!ue),de(ue),H.blending===sa&&H.transparent===!1?_e(ei):_e(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),r.setMask(H.colorWrite);let Ee=H.stencilWrite;o.setTest(Ee),Ee&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),ze(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?N(n.SAMPLE_ALPHA_TO_COVERAGE):L(n.SAMPLE_ALPHA_TO_COVERAGE)}function de(H){D!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),D=H)}function me(H){H!==zf?(N(n.CULL_FACE),H!==B&&(H===Xh?n.cullFace(n.BACK):H===Gf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):L(n.CULL_FACE),B=H}function Re(H){H!==X&&(z&&n.lineWidth(H),X=H)}function ze(H,Ce,ue){H?(N(n.POLYGON_OFFSET_FILL),(k!==Ce||$!==ue)&&(k=Ce,$=ue,a.getReversed()&&(Ce=-Ce),n.polygonOffset(Ce,ue))):L(n.POLYGON_OFFSET_FILL)}function be(H){H?N(n.SCISSOR_TEST):L(n.SCISSOR_TEST)}function Ue(H){H===void 0&&(H=n.TEXTURE0+Q-1),q!==H&&(n.activeTexture(H),q=H)}function O(H,Ce,ue){ue===void 0&&(q===null?ue=n.TEXTURE0+Q-1:ue=q);let Ee=F[ue];Ee===void 0&&(Ee={type:void 0,texture:void 0},F[ue]=Ee),(Ee.type!==H||Ee.texture!==Ce)&&(q!==ue&&(n.activeTexture(ue),q=ue),n.bindTexture(H,Ce||I[H]),Ee.type=H,Ee.texture=Ce)}function ct(){let H=F[q];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Ye(){try{n.compressedTexImage2D(...arguments)}catch(H){tt("WebGLState:",H)}}function R(){try{n.compressedTexImage3D(...arguments)}catch(H){tt("WebGLState:",H)}}function T(){try{n.texSubImage2D(...arguments)}catch(H){tt("WebGLState:",H)}}function j(){try{n.texSubImage3D(...arguments)}catch(H){tt("WebGLState:",H)}}function te(){try{n.compressedTexSubImage2D(...arguments)}catch(H){tt("WebGLState:",H)}}function le(){try{n.compressedTexSubImage3D(...arguments)}catch(H){tt("WebGLState:",H)}}function ye(){try{n.texStorage2D(...arguments)}catch(H){tt("WebGLState:",H)}}function ve(){try{n.texStorage3D(...arguments)}catch(H){tt("WebGLState:",H)}}function ae(){try{n.texImage2D(...arguments)}catch(H){tt("WebGLState:",H)}}function fe(){try{n.texImage3D(...arguments)}catch(H){tt("WebGLState:",H)}}function we(H){return u[H]!==void 0?u[H]:n.getParameter(H)}function Ge(H,Ce){u[H]!==Ce&&(n.pixelStorei(H,Ce),u[H]=Ce)}function Se(H){he.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),he.copy(H))}function Ae(H){oe.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),oe.copy(H))}function Oe(H,Ce){let ue=l.get(Ce);ue===void 0&&(ue=new WeakMap,l.set(Ce,ue));let Ee=ue.get(H);Ee===void 0&&(Ee=n.getUniformBlockIndex(Ce,H.name),ue.set(H,Ee))}function We(H,Ce){let Ee=l.get(Ce).get(H);c.get(Ce)!==Ee&&(n.uniformBlockBinding(Ce,Ee,H.__bindingPointIndex),c.set(Ce,Ee))}function et(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},u={},q=null,F={},d={},f=new WeakMap,g=[],b=null,m=!1,p=null,_=null,M=null,x=null,v=null,S=null,E=null,y=new Xe(0,0,0),w=0,C=!1,D=null,B=null,X=null,k=null,$=null,he.set(0,0,n.canvas.width,n.canvas.height),oe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:N,disable:L,bindFramebuffer:V,drawBuffers:ie,useProgram:K,setBlending:_e,setMaterial:Me,setFlipSided:de,setCullFace:me,setLineWidth:Re,setPolygonOffset:ze,setScissorTest:be,activeTexture:Ue,bindTexture:O,unbindTexture:ct,compressedTexImage2D:Ye,compressedTexImage3D:R,texImage2D:ae,texImage3D:fe,pixelStorei:Ge,getParameter:we,updateUBOMapping:Oe,uniformBlockBinding:We,texStorage2D:ye,texStorage3D:ve,texSubImage2D:T,texSubImage3D:j,compressedTexSubImage2D:te,compressedTexSubImage3D:le,scissor:Se,viewport:Ae,reset:et}}function zv(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Le,h=new WeakMap,u=new Set,d,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(R,T){return g?new OffscreenCanvas(R,T):zr("canvas")}function m(R,T,j){let te=1,le=Ye(R);if((le.width>j||le.height>j)&&(te=j/Math.max(le.width,le.height)),te<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ye=Math.floor(te*le.width),ve=Math.floor(te*le.height);d===void 0&&(d=b(ye,ve));let ae=T?b(ye,ve):d;return ae.width=ye,ae.height=ve,ae.getContext("2d").drawImage(R,0,0,ye,ve),Ke("WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+ye+"x"+ve+")."),ae}else return"data"in R&&Ke("WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),R;return R}function p(R){return R.generateMipmaps}function _(R){n.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(R,T,j,te,le,ye=!1){if(R!==null){if(n[R]!==void 0)return n[R];Ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ve;te&&(ve=e.get("EXT_texture_norm16"),ve||Ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ae=T;if(T===n.RED&&(j===n.FLOAT&&(ae=n.R32F),j===n.HALF_FLOAT&&(ae=n.R16F),j===n.UNSIGNED_BYTE&&(ae=n.R8),j===n.UNSIGNED_SHORT&&ve&&(ae=ve.R16_EXT),j===n.SHORT&&ve&&(ae=ve.R16_SNORM_EXT)),T===n.RED_INTEGER&&(j===n.UNSIGNED_BYTE&&(ae=n.R8UI),j===n.UNSIGNED_SHORT&&(ae=n.R16UI),j===n.UNSIGNED_INT&&(ae=n.R32UI),j===n.BYTE&&(ae=n.R8I),j===n.SHORT&&(ae=n.R16I),j===n.INT&&(ae=n.R32I)),T===n.RG&&(j===n.FLOAT&&(ae=n.RG32F),j===n.HALF_FLOAT&&(ae=n.RG16F),j===n.UNSIGNED_BYTE&&(ae=n.RG8),j===n.UNSIGNED_SHORT&&ve&&(ae=ve.RG16_EXT),j===n.SHORT&&ve&&(ae=ve.RG16_SNORM_EXT)),T===n.RG_INTEGER&&(j===n.UNSIGNED_BYTE&&(ae=n.RG8UI),j===n.UNSIGNED_SHORT&&(ae=n.RG16UI),j===n.UNSIGNED_INT&&(ae=n.RG32UI),j===n.BYTE&&(ae=n.RG8I),j===n.SHORT&&(ae=n.RG16I),j===n.INT&&(ae=n.RG32I)),T===n.RGB_INTEGER&&(j===n.UNSIGNED_BYTE&&(ae=n.RGB8UI),j===n.UNSIGNED_SHORT&&(ae=n.RGB16UI),j===n.UNSIGNED_INT&&(ae=n.RGB32UI),j===n.BYTE&&(ae=n.RGB8I),j===n.SHORT&&(ae=n.RGB16I),j===n.INT&&(ae=n.RGB32I)),T===n.RGBA_INTEGER&&(j===n.UNSIGNED_BYTE&&(ae=n.RGBA8UI),j===n.UNSIGNED_SHORT&&(ae=n.RGBA16UI),j===n.UNSIGNED_INT&&(ae=n.RGBA32UI),j===n.BYTE&&(ae=n.RGBA8I),j===n.SHORT&&(ae=n.RGBA16I),j===n.INT&&(ae=n.RGBA32I)),T===n.RGB&&(j===n.UNSIGNED_SHORT&&ve&&(ae=ve.RGB16_EXT),j===n.SHORT&&ve&&(ae=ve.RGB16_SNORM_EXT),j===n.UNSIGNED_INT_5_9_9_9_REV&&(ae=n.RGB9_E5),j===n.UNSIGNED_INT_10F_11F_11F_REV&&(ae=n.R11F_G11F_B10F)),T===n.RGBA){let fe=ye?Na:lt.getTransfer(le);j===n.FLOAT&&(ae=n.RGBA32F),j===n.HALF_FLOAT&&(ae=n.RGBA16F),j===n.UNSIGNED_BYTE&&(ae=fe===St?n.SRGB8_ALPHA8:n.RGBA8),j===n.UNSIGNED_SHORT&&ve&&(ae=ve.RGBA16_EXT),j===n.SHORT&&ve&&(ae=ve.RGBA16_SNORM_EXT),j===n.UNSIGNED_SHORT_4_4_4_4&&(ae=n.RGBA4),j===n.UNSIGNED_SHORT_5_5_5_1&&(ae=n.RGB5_A1)}return(ae===n.R16F||ae===n.R32F||ae===n.RG16F||ae===n.RG32F||ae===n.RGBA16F||ae===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function v(R,T){let j;return R?T===null||T===gi||T===oa?j=n.DEPTH24_STENCIL8:T===Wn?j=n.DEPTH32F_STENCIL8:T===aa&&(j=n.DEPTH24_STENCIL8,Ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===gi||T===oa?j=n.DEPTH_COMPONENT24:T===Wn?j=n.DEPTH_COMPONENT32F:T===aa&&(j=n.DEPTH_COMPONENT16),j}function S(R,T){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Xt&&R.minFilter!==jt?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function E(R){let T=R.target;T.removeEventListener("dispose",E),w(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&u.delete(T)}function y(R){let T=R.target;T.removeEventListener("dispose",y),D(T)}function w(R){let T=i.get(R);if(T.__webglInit===void 0)return;let j=R.source,te=f.get(j);if(te){let le=te[T.__cacheKey];le.usedTimes--,le.usedTimes===0&&C(R),Object.keys(te).length===0&&f.delete(j)}i.remove(R)}function C(R){let T=i.get(R);n.deleteTexture(T.__webglTexture);let j=R.source,te=f.get(j);delete te[T.__cacheKey],a.memory.textures--}function D(R){let T=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(T.__webglFramebuffer[te]))for(let le=0;le<T.__webglFramebuffer[te].length;le++)n.deleteFramebuffer(T.__webglFramebuffer[te][le]);else n.deleteFramebuffer(T.__webglFramebuffer[te]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[te])}else{if(Array.isArray(T.__webglFramebuffer))for(let te=0;te<T.__webglFramebuffer.length;te++)n.deleteFramebuffer(T.__webglFramebuffer[te]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let te=0;te<T.__webglColorRenderbuffer.length;te++)T.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[te]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let j=R.textures;for(let te=0,le=j.length;te<le;te++){let ye=i.get(j[te]);ye.__webglTexture&&(n.deleteTexture(ye.__webglTexture),a.memory.textures--),i.remove(j[te])}i.remove(R)}let B=0;function X(){B=0}function k(){return B}function $(R){B=R}function Q(){let R=B;return R>=s.maxTextures&&Ke("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),B+=1,R}function z(R){let T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function J(R,T){let j=i.get(R);if(R.isVideoTexture&&O(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&j.__version!==R.version){let te=R.image;if(te===null)Ke("WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)Ke("WebGLRenderer: Texture marked for update but image is incomplete");else{L(j,R,T);return}}else R.isExternalTexture&&(j.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,j.__webglTexture,n.TEXTURE0+T)}function G(R,T){let j=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&j.__version!==R.version){L(j,R,T);return}else R.isExternalTexture&&(j.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,j.__webglTexture,n.TEXTURE0+T)}function q(R,T){let j=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&j.__version!==R.version){L(j,R,T);return}t.bindTexture(n.TEXTURE_3D,j.__webglTexture,n.TEXTURE0+T)}function F(R,T){let j=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&j.__version!==R.version){V(j,R,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture,n.TEXTURE0+T)}let ce={[bs]:n.REPEAT,[Qn]:n.CLAMP_TO_EDGE,[kr]:n.MIRRORED_REPEAT},U={[Xt]:n.NEAREST,[Uc]:n.NEAREST_MIPMAP_NEAREST,[ir]:n.NEAREST_MIPMAP_LINEAR,[jt]:n.LINEAR,[ra]:n.LINEAR_MIPMAP_NEAREST,[Pn]:n.LINEAR_MIPMAP_LINEAR},he={[up]:n.NEVER,[gp]:n.ALWAYS,[dp]:n.LESS,[yl]:n.LEQUAL,[fp]:n.EQUAL,[Ml]:n.GEQUAL,[pp]:n.GREATER,[mp]:n.NOTEQUAL};function oe(R,T){if(T.type===Wn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===jt||T.magFilter===ra||T.magFilter===ir||T.magFilter===Pn||T.minFilter===jt||T.minFilter===ra||T.minFilter===ir||T.minFilter===Pn)&&Ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,ce[T.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,ce[T.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,ce[T.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,U[T.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,U[T.minFilter]),T.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,he[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Xt||T.minFilter!==ir&&T.minFilter!==Pn||T.type===Wn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){let j=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function xe(R,T){let j=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",E));let te=T.source,le=f.get(te);le===void 0&&(le={},f.set(te,le));let ye=z(T);if(ye!==R.__cacheKey){le[ye]===void 0&&(le[ye]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,j=!0),le[ye].usedTimes++;let ve=le[R.__cacheKey];ve!==void 0&&(le[R.__cacheKey].usedTimes--,ve.usedTimes===0&&C(T)),R.__cacheKey=ye,R.__webglTexture=le[ye].texture}return j}function I(R,T,j){return Math.floor(Math.floor(R/j)/T)}function N(R,T,j,te){let ye=R.updateRanges;if(ye.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,T.width,T.height,j,te,T.data);else{ye.sort((Ge,Se)=>Ge.start-Se.start);let ve=0;for(let Ge=1;Ge<ye.length;Ge++){let Se=ye[ve],Ae=ye[Ge],Oe=Se.start+Se.count,We=I(Ae.start,T.width,4),et=I(Se.start,T.width,4);Ae.start<=Oe+1&&We===et&&I(Ae.start+Ae.count-1,T.width,4)===We?Se.count=Math.max(Se.count,Ae.start+Ae.count-Se.start):(++ve,ye[ve]=Ae)}ye.length=ve+1;let ae=t.getParameter(n.UNPACK_ROW_LENGTH),fe=t.getParameter(n.UNPACK_SKIP_PIXELS),we=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,T.width);for(let Ge=0,Se=ye.length;Ge<Se;Ge++){let Ae=ye[Ge],Oe=Math.floor(Ae.start/4),We=Math.ceil(Ae.count/4),et=Oe%T.width,H=Math.floor(Oe/T.width),Ce=We,ue=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,et),t.pixelStorei(n.UNPACK_SKIP_ROWS,H),t.texSubImage2D(n.TEXTURE_2D,0,et,H,Ce,ue,j,te,T.data)}R.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ae),t.pixelStorei(n.UNPACK_SKIP_PIXELS,fe),t.pixelStorei(n.UNPACK_SKIP_ROWS,we)}}function L(R,T,j){let te=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(te=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(te=n.TEXTURE_3D);let le=xe(R,T),ye=T.source;t.bindTexture(te,R.__webglTexture,n.TEXTURE0+j);let ve=i.get(ye);if(ye.version!==ve.__version||le===!0){if(t.activeTexture(n.TEXTURE0+j),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let ue=lt.getPrimaries(lt.workingColorSpace),Ee=T.colorSpace===is?null:lt.getPrimaries(T.colorSpace),De=T.colorSpace===is||ue===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De)}t.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment);let fe=m(T.image,!1,s.maxTextureSize);fe=ct(T,fe);let we=r.convert(T.format,T.colorSpace),Ge=r.convert(T.type),Se=x(T.internalFormat,we,Ge,T.normalized,T.colorSpace,T.isVideoTexture);oe(te,T);let Ae,Oe=T.mipmaps,We=T.isVideoTexture!==!0,et=ve.__version===void 0||le===!0,H=ye.dataReady,Ce=S(T,fe);if(T.isDepthTexture)Se=v(T.format===ws,T.type),et&&(We?t.texStorage2D(n.TEXTURE_2D,1,Se,fe.width,fe.height):t.texImage2D(n.TEXTURE_2D,0,Se,fe.width,fe.height,0,we,Ge,null));else if(T.isDataTexture)if(Oe.length>0){We&&et&&t.texStorage2D(n.TEXTURE_2D,Ce,Se,Oe[0].width,Oe[0].height);for(let ue=0,Ee=Oe.length;ue<Ee;ue++)Ae=Oe[ue],We?H&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,Ae.width,Ae.height,we,Ge,Ae.data):t.texImage2D(n.TEXTURE_2D,ue,Se,Ae.width,Ae.height,0,we,Ge,Ae.data);T.generateMipmaps=!1}else We?(et&&t.texStorage2D(n.TEXTURE_2D,Ce,Se,fe.width,fe.height),H&&N(T,fe,we,Ge)):t.texImage2D(n.TEXTURE_2D,0,Se,fe.width,fe.height,0,we,Ge,fe.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){We&&et&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,Se,Oe[0].width,Oe[0].height,fe.depth);for(let ue=0,Ee=Oe.length;ue<Ee;ue++)if(Ae=Oe[ue],T.format!==qn)if(we!==null)if(We){if(H)if(T.layerUpdates.size>0){let De=vu(Ae.width,Ae.height,T.format,T.type);for(let ge of T.layerUpdates){let qe=Ae.data.subarray(ge*De/Ae.data.BYTES_PER_ELEMENT,(ge+1)*De/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,ge,Ae.width,Ae.height,1,we,qe)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,Ae.width,Ae.height,fe.depth,we,Ae.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ue,Se,Ae.width,Ae.height,fe.depth,0,Ae.data,0,0);else Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?H&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,Ae.width,Ae.height,fe.depth,we,Ge,Ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ue,Se,Ae.width,Ae.height,fe.depth,0,we,Ge,Ae.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{We&&et&&t.texStorage2D(n.TEXTURE_2D,Ce,Se,Oe[0].width,Oe[0].height);for(let ue=0,Ee=Oe.length;ue<Ee;ue++)Ae=Oe[ue],T.format!==qn?we!==null?We?H&&t.compressedTexSubImage2D(n.TEXTURE_2D,ue,0,0,Ae.width,Ae.height,we,Ae.data):t.compressedTexImage2D(n.TEXTURE_2D,ue,Se,Ae.width,Ae.height,0,Ae.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?H&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,Ae.width,Ae.height,we,Ge,Ae.data):t.texImage2D(n.TEXTURE_2D,ue,Se,Ae.width,Ae.height,0,we,Ge,Ae.data)}else if(T.isDataArrayTexture)if(We){if(et&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,Se,fe.width,fe.height,fe.depth),H)if(T.layerUpdates.size>0){let ue=vu(fe.width,fe.height,T.format,T.type);for(let Ee of T.layerUpdates){let De=fe.data.subarray(Ee*ue/fe.data.BYTES_PER_ELEMENT,(Ee+1)*ue/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ee,fe.width,fe.height,1,we,Ge,De)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,we,Ge,fe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Se,fe.width,fe.height,fe.depth,0,we,Ge,fe.data);else if(T.isData3DTexture)We?(et&&t.texStorage3D(n.TEXTURE_3D,Ce,Se,fe.width,fe.height,fe.depth),H&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,we,Ge,fe.data)):t.texImage3D(n.TEXTURE_3D,0,Se,fe.width,fe.height,fe.depth,0,we,Ge,fe.data);else if(T.isFramebufferTexture){if(et)if(We)t.texStorage2D(n.TEXTURE_2D,Ce,Se,fe.width,fe.height);else{let ue=fe.width,Ee=fe.height;for(let De=0;De<Ce;De++)t.texImage2D(n.TEXTURE_2D,De,Se,ue,Ee,0,we,Ge,null),ue>>=1,Ee>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in n){let ue=n.canvas;if(ue.hasAttribute("layoutsubtree")||ue.setAttribute("layoutsubtree","true"),fe.parentNode!==ue){ue.appendChild(fe),u.add(T),ue.onpaint=Ee=>{let De=Ee.changedElements;for(let ge of u)De.includes(ge.image)&&(ge.needsUpdate=!0)},ue.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,fe);else{let De=n.RGBA,ge=n.RGBA,qe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,De,ge,qe,fe)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Oe.length>0){if(We&&et){let ue=Ye(Oe[0]);t.texStorage2D(n.TEXTURE_2D,Ce,Se,ue.width,ue.height)}for(let ue=0,Ee=Oe.length;ue<Ee;ue++)Ae=Oe[ue],We?H&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,we,Ge,Ae):t.texImage2D(n.TEXTURE_2D,ue,Se,we,Ge,Ae);T.generateMipmaps=!1}else if(We){if(et){let ue=Ye(fe);t.texStorage2D(n.TEXTURE_2D,Ce,Se,ue.width,ue.height)}H&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,we,Ge,fe)}else t.texImage2D(n.TEXTURE_2D,0,Se,we,Ge,fe);p(T)&&_(te),ve.__version=ye.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function V(R,T,j){if(T.image.length!==6)return;let te=xe(R,T),le=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+j);let ye=i.get(le);if(le.version!==ye.__version||te===!0){t.activeTexture(n.TEXTURE0+j);let ve=lt.getPrimaries(lt.workingColorSpace),ae=T.colorSpace===is?null:lt.getPrimaries(T.colorSpace),fe=T.colorSpace===is||ve===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let we=T.isCompressedTexture||T.image[0].isCompressedTexture,Ge=T.image[0]&&T.image[0].isDataTexture,Se=[];for(let ge=0;ge<6;ge++)!we&&!Ge?Se[ge]=m(T.image[ge],!0,s.maxCubemapSize):Se[ge]=Ge?T.image[ge].image:T.image[ge],Se[ge]=ct(T,Se[ge]);let Ae=Se[0],Oe=r.convert(T.format,T.colorSpace),We=r.convert(T.type),et=x(T.internalFormat,Oe,We,T.normalized,T.colorSpace),H=T.isVideoTexture!==!0,Ce=ye.__version===void 0||te===!0,ue=le.dataReady,Ee=S(T,Ae);oe(n.TEXTURE_CUBE_MAP,T);let De;if(we){H&&Ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,et,Ae.width,Ae.height);for(let ge=0;ge<6;ge++){De=Se[ge].mipmaps;for(let qe=0;qe<De.length;qe++){let Ve=De[qe];T.format!==qn?Oe!==null?H?ue&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,qe,0,0,Ve.width,Ve.height,Oe,Ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,qe,et,Ve.width,Ve.height,0,Ve.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,qe,0,0,Ve.width,Ve.height,Oe,We,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,qe,et,Ve.width,Ve.height,0,Oe,We,Ve.data)}}}else{if(De=T.mipmaps,H&&Ce){De.length>0&&Ee++;let ge=Ye(Se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,et,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Ge){H?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Se[ge].width,Se[ge].height,Oe,We,Se[ge].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,et,Se[ge].width,Se[ge].height,0,Oe,We,Se[ge].data);for(let qe=0;qe<De.length;qe++){let Ct=De[qe].image[ge].image;H?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,qe+1,0,0,Ct.width,Ct.height,Oe,We,Ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,qe+1,et,Ct.width,Ct.height,0,Oe,We,Ct.data)}}else{H?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Oe,We,Se[ge]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,et,Oe,We,Se[ge]);for(let qe=0;qe<De.length;qe++){let Ve=De[qe];H?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,qe+1,0,0,Oe,We,Ve.image[ge]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,qe+1,et,Oe,We,Ve.image[ge])}}}p(T)&&_(n.TEXTURE_CUBE_MAP),ye.__version=le.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function ie(R,T,j,te,le,ye){let ve=r.convert(j.format,j.colorSpace),ae=r.convert(j.type),fe=x(j.internalFormat,ve,ae,j.normalized,j.colorSpace),we=i.get(T),Ge=i.get(j);if(Ge.__renderTarget=T,!we.__hasExternalTextures){let Se=Math.max(1,T.width>>ye),Ae=Math.max(1,T.height>>ye);le===n.TEXTURE_3D||le===n.TEXTURE_2D_ARRAY?t.texImage3D(le,ye,fe,Se,Ae,T.depth,0,ve,ae,null):t.texImage2D(le,ye,fe,Se,Ae,0,ve,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),Ue(T)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,le,Ge.__webglTexture,0,be(T)):(le===n.TEXTURE_2D||le>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,te,le,Ge.__webglTexture,ye),t.bindFramebuffer(n.FRAMEBUFFER,null)}function K(R,T,j){if(n.bindRenderbuffer(n.RENDERBUFFER,R),T.depthBuffer){let te=T.depthTexture,le=te&&te.isDepthTexture?te.type:null,ye=v(T.stencilBuffer,le),ve=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ue(T)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,be(T),ye,T.width,T.height):j?n.renderbufferStorageMultisample(n.RENDERBUFFER,be(T),ye,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,ye,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,R)}else{let te=T.textures;for(let le=0;le<te.length;le++){let ye=te[le],ve=r.convert(ye.format,ye.colorSpace),ae=r.convert(ye.type),fe=x(ye.internalFormat,ve,ae,ye.normalized,ye.colorSpace);Ue(T)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,be(T),fe,T.width,T.height):j?n.renderbufferStorageMultisample(n.RENDERBUFFER,be(T),fe,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,fe,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function se(R,T,j){let te=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let le=i.get(T.depthTexture);if(le.__renderTarget=T,(!le.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),te){if(le.__webglInit===void 0&&(le.__webglInit=!0,T.depthTexture.addEventListener("dispose",E)),le.__webglTexture===void 0){le.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,le.__webglTexture),oe(n.TEXTURE_CUBE_MAP,T.depthTexture);let we=r.convert(T.depthTexture.format),Ge=r.convert(T.depthTexture.type),Se;T.depthTexture.format===Ri?Se=n.DEPTH_COMPONENT24:T.depthTexture.format===ws&&(Se=n.DEPTH24_STENCIL8);for(let Ae=0;Ae<6;Ae++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,Se,T.width,T.height,0,we,Ge,null)}}else J(T.depthTexture,0);let ye=le.__webglTexture,ve=be(T),ae=te?n.TEXTURE_CUBE_MAP_POSITIVE_X+j:n.TEXTURE_2D,fe=T.depthTexture.format===ws?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(T.depthTexture.format===Ri)Ue(T)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,fe,ae,ye,0,ve):n.framebufferTexture2D(n.FRAMEBUFFER,fe,ae,ye,0);else if(T.depthTexture.format===ws)Ue(T)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,fe,ae,ye,0,ve):n.framebufferTexture2D(n.FRAMEBUFFER,fe,ae,ye,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ee(R){let T=i.get(R),j=R.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==R.depthTexture){let te=R.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),te){let le=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,te.removeEventListener("dispose",le)};te.addEventListener("dispose",le),T.__depthDisposeCallback=le}T.__boundDepthTexture=te}if(R.depthTexture&&!T.__autoAllocateDepthBuffer)if(j)for(let te=0;te<6;te++)se(T.__webglFramebuffer[te],R,te);else{let te=R.texture.mipmaps;te&&te.length>0?se(T.__webglFramebuffer[0],R,0):se(T.__webglFramebuffer,R,0)}else if(j){T.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[te]),T.__webglDepthbuffer[te]===void 0)T.__webglDepthbuffer[te]=n.createRenderbuffer(),K(T.__webglDepthbuffer[te],R,!1);else{let le=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=T.__webglDepthbuffer[te];n.bindRenderbuffer(n.RENDERBUFFER,ye),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,ye)}}else{let te=R.texture.mipmaps;if(te&&te.length>0?t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),K(T.__webglDepthbuffer,R,!1);else{let le=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ye),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,ye)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function _e(R,T,j){let te=i.get(R);T!==void 0&&ie(te.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),j!==void 0&&ee(R)}function Me(R){let T=R.texture,j=i.get(R),te=i.get(T);R.addEventListener("dispose",y);let le=R.textures,ye=R.isWebGLCubeRenderTarget===!0,ve=le.length>1;if(ve||(te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture()),te.__version=T.version,a.memory.textures++),ye){j.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer[ae]=[];for(let fe=0;fe<T.mipmaps.length;fe++)j.__webglFramebuffer[ae][fe]=n.createFramebuffer()}else j.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer=[];for(let ae=0;ae<T.mipmaps.length;ae++)j.__webglFramebuffer[ae]=n.createFramebuffer()}else j.__webglFramebuffer=n.createFramebuffer();if(ve)for(let ae=0,fe=le.length;ae<fe;ae++){let we=i.get(le[ae]);we.__webglTexture===void 0&&(we.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&Ue(R)===!1){j.__webglMultisampledFramebuffer=n.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let ae=0;ae<le.length;ae++){let fe=le[ae];j.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,j.__webglColorRenderbuffer[ae]);let we=r.convert(fe.format,fe.colorSpace),Ge=r.convert(fe.type),Se=x(fe.internalFormat,we,Ge,fe.normalized,fe.colorSpace,R.isXRRenderTarget===!0),Ae=be(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,Se,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,j.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(j.__webglDepthRenderbuffer=n.createRenderbuffer(),K(j.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ye){t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),oe(n.TEXTURE_CUBE_MAP,T);for(let ae=0;ae<6;ae++)if(T.mipmaps&&T.mipmaps.length>0)for(let fe=0;fe<T.mipmaps.length;fe++)ie(j.__webglFramebuffer[ae][fe],R,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,fe);else ie(j.__webglFramebuffer[ae],R,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);p(T)&&_(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let ae=0,fe=le.length;ae<fe;ae++){let we=le[ae],Ge=i.get(we),Se=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Se=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Se,Ge.__webglTexture),oe(Se,we),ie(j.__webglFramebuffer,R,we,n.COLOR_ATTACHMENT0+ae,Se,0),p(we)&&_(Se)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ae=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,te.__webglTexture),oe(ae,T),T.mipmaps&&T.mipmaps.length>0)for(let fe=0;fe<T.mipmaps.length;fe++)ie(j.__webglFramebuffer[fe],R,T,n.COLOR_ATTACHMENT0,ae,fe);else ie(j.__webglFramebuffer,R,T,n.COLOR_ATTACHMENT0,ae,0);p(T)&&_(ae),t.unbindTexture()}R.depthBuffer&&ee(R)}function de(R){let T=R.textures;for(let j=0,te=T.length;j<te;j++){let le=T[j];if(p(le)){let ye=M(R),ve=i.get(le).__webglTexture;t.bindTexture(ye,ve),_(ye),t.unbindTexture()}}}let me=[],Re=[];function ze(R){if(R.samples>0){if(Ue(R)===!1){let T=R.textures,j=R.width,te=R.height,le=n.COLOR_BUFFER_BIT,ye=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=i.get(R),ae=T.length>1;if(ae)for(let we=0;we<T.length;we++)t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);let fe=R.texture.mipmaps;fe&&fe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let we=0;we<T.length;we++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(le|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(le|=n.STENCIL_BUFFER_BIT)),ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ve.__webglColorRenderbuffer[we]);let Ge=i.get(T[we]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ge,0)}n.blitFramebuffer(0,0,j,te,0,0,j,te,le,n.NEAREST),c===!0&&(me.length=0,Re.length=0,me.push(n.COLOR_ATTACHMENT0+we),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(me.push(ye),Re.push(ye),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Re)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,me))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let we=0;we<T.length;we++){t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,ve.__webglColorRenderbuffer[we]);let Ge=i.get(T[we]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,Ge,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&c){let T=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function be(R){return Math.min(s.maxSamples,R.samples)}function Ue(R){let T=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function O(R){let T=a.render.frame;h.get(R)!==T&&(h.set(R,T),R.update())}function ct(R,T){let j=R.colorSpace,te=R.format,le=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||j!==Mn&&j!==is&&(lt.getTransfer(j)===St?(te!==qn||le!==In)&&Ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tt("WebGLTextures: Unsupported texture color space:",j)),T}function Ye(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=Q,this.resetTextureUnits=X,this.getTextureUnits=k,this.setTextureUnits=$,this.setTexture2D=J,this.setTexture2DArray=G,this.setTexture3D=q,this.setTextureCube=F,this.rebindTextures=_e,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=Ue,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Gv(n,e){function t(i,s=is){let r,a=lt.getTransfer(s);if(i===In)return n.UNSIGNED_BYTE;if(i===kc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Bc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===cu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===lu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===au)return n.BYTE;if(i===ou)return n.SHORT;if(i===aa)return n.UNSIGNED_SHORT;if(i===Oc)return n.INT;if(i===gi)return n.UNSIGNED_INT;if(i===Wn)return n.FLOAT;if(i===$t)return n.HALF_FLOAT;if(i===hu)return n.ALPHA;if(i===uu)return n.RGB;if(i===qn)return n.RGBA;if(i===Ri)return n.DEPTH_COMPONENT;if(i===ws)return n.DEPTH_STENCIL;if(i===zc)return n.RED;if(i===Gc)return n.RED_INTEGER;if(i===As)return n.RG;if(i===Vc)return n.RG_INTEGER;if(i===Hc)return n.RGBA_INTEGER;if(i===oo||i===co||i===lo||i===ho)if(a===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===oo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===oo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===co)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===lo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ho)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Wc||i===qc||i===Xc||i===jc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Wc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===qc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Xc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===jc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Kc||i===$c||i===Yc||i===Jc||i===Zc||i===uo||i===Qc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Kc||i===$c)return a===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Yc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Jc)return r.COMPRESSED_R11_EAC;if(i===Zc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===uo)return r.COMPRESSED_RG11_EAC;if(i===Qc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===el||i===tl||i===nl||i===il||i===sl||i===rl||i===al||i===ol||i===cl||i===ll||i===hl||i===ul||i===dl||i===fl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===el)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===tl)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===nl)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===il)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===sl)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===rl)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===al)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ol)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===cl)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ll)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===hl)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ul)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===dl)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===fl)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===pl||i===ml||i===gl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===pl)return a===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ml)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===gl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===bl||i===_l||i===fo||i===xl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===bl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===_l)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===fo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===xl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===oa?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Vv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hv=`
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

}`,Bu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Xa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Ot({vertexShader:Vv,fragmentShader:Hv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new At(new Ji(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},zu=class extends mi{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,b=typeof XRWebGLBinding<"u",m=new Bu,p={},_=t.getContextAttributes(),M=null,x=null,v=[],S=[],E=new Le,y=null,w=null,C=new en;C.viewport=new yt;let D=new en;D.viewport=new yt;let B=[C,D],X=new Lc,k=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let N=v[I];return N===void 0&&(N=new Hr,v[I]=N),N.getTargetRaySpace()},this.getControllerGrip=function(I){let N=v[I];return N===void 0&&(N=new Hr,v[I]=N),N.getGripSpace()},this.getHand=function(I){let N=v[I];return N===void 0&&(N=new Hr,v[I]=N),N.getHandSpace()};function Q(I){let N=S.indexOf(I.inputSource);if(N===-1)return;let L=v[N];L!==void 0&&(L.update(I.inputSource,I.frame,l||a),L.dispatchEvent({type:I.type,data:I.inputSource}))}function z(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",J);for(let I=0;I<v.length;I++){let N=S[I];N!==null&&(S[I]=null,v[I].disconnect(N))}k=null,$=null,m.reset();for(let I in p)delete p[I];if(e.setRenderTarget(M),f=null,d=null,u=null,s=null,x=null,xe.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(E.width,E.height,!1),w!==null){let I=w.camera;I.fov=w.fov,I.zoom=w.zoom,I.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){r=I,i.isPresenting===!0&&Ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){o=I,i.isPresenting===!0&&Ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(I){l=I},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&b&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(I){if(s=I,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",z),s.addEventListener("inputsourceschange",J),_.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(E),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let L=null,V=null,ie=null;_.depth&&(ie=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,L=_.stencil?ws:Ri,V=_.stencil?oa:gi);let K={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(K),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Gt(d.textureWidth,d.textureHeight,{format:qn,type:In,depthTexture:new xs(d.textureWidth,d.textureHeight,V,void 0,void 0,void 0,void 0,void 0,void 0,L),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let L={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,L),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Gt(f.framebufferWidth,f.framebufferHeight,{format:qn,type:In,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),xe.setContext(s),xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(I){for(let N=0;N<I.removed.length;N++){let L=I.removed[N],V=S.indexOf(L);V>=0&&(S[V]=null,v[V].disconnect(L))}for(let N=0;N<I.added.length;N++){let L=I.added[N],V=S.indexOf(L);if(V===-1){for(let K=0;K<v.length;K++)if(K>=S.length){S.push(L),V=K;break}else if(S[K]===null){S[K]=L,V=K;break}if(V===-1)break}let ie=v[V];ie&&ie.connect(L)}}let G=new P,q=new P;function F(I,N,L){G.setFromMatrixPosition(N.matrixWorld),q.setFromMatrixPosition(L.matrixWorld);let V=G.distanceTo(q),ie=N.projectionMatrix.elements,K=L.projectionMatrix.elements,se=ie[14]/(ie[10]-1),ee=ie[14]/(ie[10]+1),_e=(ie[9]+1)/ie[5],Me=(ie[9]-1)/ie[5],de=(ie[8]-1)/ie[0],me=(K[8]+1)/K[0],Re=se*de,ze=se*me,be=V/(-de+me),Ue=be*-de;if(N.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(Ue),I.translateZ(be),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert(),ie[10]===-1)I.projectionMatrix.copy(N.projectionMatrix),I.projectionMatrixInverse.copy(N.projectionMatrixInverse);else{let O=se+be,ct=ee+be,Ye=Re-Ue,R=ze+(V-Ue),T=_e*ee/ct*O,j=Me*ee/ct*O;I.projectionMatrix.makePerspective(Ye,R,T,j,O,ct),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}}function ce(I,N){N===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(N.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(s===null)return;let N=I.near,L=I.far;m.texture!==null&&(m.depthNear>0&&(N=m.depthNear),m.depthFar>0&&(L=m.depthFar)),X.near=D.near=C.near=N,X.far=D.far=C.far=L,(k!==X.near||$!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),k=X.near,$=X.far),X.layers.mask=I.layers.mask|6,C.layers.mask=X.layers.mask&-5,D.layers.mask=X.layers.mask&-3;let V=I.parent,ie=X.cameras;ce(X,V);for(let K=0;K<ie.length;K++)ce(ie[K],V);ie.length===2?F(X,C,D):X.projectionMatrix.copy(C.projectionMatrix),w===null&&I.isPerspectiveCamera&&(w={camera:I,fov:I.fov,zoom:I.zoom}),U(I,X,V)};function U(I,N,L){L===null?I.matrix.copy(N.matrixWorld):(I.matrix.copy(L.matrixWorld),I.matrix.invert(),I.matrix.multiply(N.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0),I.projectionMatrix.copy(N.projectionMatrix),I.projectionMatrixInverse.copy(N.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=js*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(I){c=I,d!==null&&(d.fixedFoveation=I),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=I)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(X)},this.getCameraTexture=function(I){return p[I]};let he=null;function oe(I,N){if(h=N.getViewerPose(l||a),g=N,h!==null){let L=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let V=!1;L.length!==X.cameras.length&&(X.cameras.length=0,V=!0);for(let ee=0;ee<L.length;ee++){let _e=L[ee],Me=null;if(f!==null)Me=f.getViewport(_e);else{let me=u.getViewSubImage(d,_e);Me=me.viewport,ee===0&&(e.setRenderTargetTextures(x,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(x))}let de=B[ee];de===void 0&&(de=new en,de.layers.enable(ee),de.viewport=new yt,B[ee]=de),de.matrix.fromArray(_e.transform.matrix),de.matrix.decompose(de.position,de.quaternion,de.scale),de.projectionMatrix.fromArray(_e.projectionMatrix),de.projectionMatrixInverse.copy(de.projectionMatrix).invert(),de.viewport.set(Me.x,Me.y,Me.width,Me.height),ee===0&&(X.matrix.copy(de.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),V===!0&&X.cameras.push(de)}let ie=s.enabledFeatures;if(ie&&ie.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){u=i.getBinding();let ee=u.getDepthInformation(L[0]);ee&&ee.isValid&&ee.texture&&m.init(ee,s.renderState)}if(ie&&ie.includes("camera-access")&&b){e.state.unbindTexture(),u=i.getBinding();for(let ee=0;ee<L.length;ee++){let _e=L[ee].camera;if(_e){let Me=p[_e];Me||(Me=new Xa,p[_e]=Me);let de=u.getCameraImage(_e);Me.sourceTexture=de}}}}for(let L=0;L<v.length;L++){let V=S[L],ie=v[L];V!==null&&ie!==void 0&&ie.update(V,N,l||a)}he&&he(I,N),N.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:N}),g=null}let xe=new qp;xe.setAnimationLoop(oe),this.setAnimationLoop=function(I){he=I},this.dispose=function(){}}},Wv=new it,Jp=new st;Jp.set(-1,0,0,0,1,0,0,0,1);function qv(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,bu(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,M,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),b(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,_,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ln&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ln&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=e.get(p),M=_.envMap,x=_.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(Wv.makeRotationFromEuler(x)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Jp),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,_,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ln&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function b(m,p){let _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Xv(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,v){let S=v.program;i.uniformBlockBinding(x,S)}function l(x,v){let S=s[x.id];S===void 0&&(m(x),S=h(x),s[x.id]=S,x.addEventListener("dispose",_));let E=v.program;i.updateUBOMapping(x,E);let y=e.render.frame;r[x.id]!==y&&(d(x),r[x.id]=y)}function h(x){let v=u();x.__bindingPointIndex=v;let S=n.createBuffer(),E=x.__size,y=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,E,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,S),S}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let v=s[x.id],S=x.uniforms,E=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let y=0,w=S.length;y<w;y++){let C=S[y];if(Array.isArray(C))for(let D=0,B=C.length;D<B;D++)f(C[D],y,D,E);else f(C,y,0,E)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(x,v,S,E){if(b(x,v,S,E)===!0){let y=x.__offset,w=x.value;if(Array.isArray(w)){let C=0;for(let D=0;D<w.length;D++){let B=w[D],X=p(B);g(B,x.__data,C),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(C+=X.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,x.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,y,x.__data)}}function g(x,v,S){typeof x=="number"||typeof x=="boolean"?v[0]=x:x.isMatrix3?(v[0]=x.elements[0],v[1]=x.elements[1],v[2]=x.elements[2],v[3]=0,v[4]=x.elements[3],v[5]=x.elements[4],v[6]=x.elements[5],v[7]=0,v[8]=x.elements[6],v[9]=x.elements[7],v[10]=x.elements[8],v[11]=0):ArrayBuffer.isView(x)?v.set(new x.constructor(x.buffer,x.byteOffset,v.length)):x.toArray(v,S)}function b(x,v,S,E){let y=x.value,w=v+"_"+S;if(E[w]===void 0)return typeof y=="number"||typeof y=="boolean"?E[w]=y:ArrayBuffer.isView(y)?E[w]=y.slice():E[w]=y.clone(),!0;{let C=E[w];if(typeof y=="number"||typeof y=="boolean"){if(C!==y)return E[w]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(C.equals(y)===!1)return C.copy(y),!0}}return!1}function m(x){let v=x.uniforms,S=0,E=16;for(let w=0,C=v.length;w<C;w++){let D=Array.isArray(v[w])?v[w]:[v[w]];for(let B=0,X=D.length;B<X;B++){let k=D[B],$=Array.isArray(k.value)?k.value:[k.value];for(let Q=0,z=$.length;Q<z;Q++){let J=$[Q],G=p(J),q=S%E,F=q%G.boundary,ce=q+F;S+=F,ce!==0&&E-ce<G.storage&&(S+=E-ce),k.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=S,S+=G.storage}}}let y=S%E;return y>0&&(S+=E-y),x.__size=S,x.__cache={},this}function p(x){let v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?Ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(v.boundary=16,v.storage=x.byteLength):Ke("WebGLRenderer: Unsupported uniform value type.",x),v}function _(x){let v=x.target;v.removeEventListener("dispose",_);let S=a.indexOf(v.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function M(){for(let x in s)n.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:c,update:l,dispose:M}}var jv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Li=null;function Kv(){return Li===null&&(Li=new Kr(jv,16,16,As,$t),Li.name="DFG_LUT",Li.minFilter=jt,Li.magFilter=jt,Li.wrapS=Qn,Li.wrapT=Qn,Li.generateMipmaps=!1,Li.needsUpdate=!0),Li}var wl=class{constructor(e={}){let{canvas:t=bp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=In}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let b=f,m=new Set([Hc,Vc,Gc]),p=new Set([In,gi,aa,oa,kc,Bc]),_=new Uint32Array(4),M=new Int32Array(4),x=new P,v=null,S=null,E=[],y=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,D=!1,B=null,X=null,k=null,$=null;this._outputColorSpace=qt;let Q=0,z=0,J=null,G=-1,q=null,F=new yt,ce=new yt,U=null,he=new Xe(0),oe=0,xe=t.width,I=t.height,N=1,L=null,V=null,ie=new yt(0,0,xe,I),K=new yt(0,0,xe,I),se=!1,ee=new $r,_e=!1,Me=!1,de=new it,me=new P,Re=new yt,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},be=!1;function Ue(){return J===null?N:1}let O=i;function ct(A,W){return t.getContext(A,W)}let Ye,R,T,j,te,le,ye,ve,ae,fe,we,Ge,Se,Ae,Oe,We,et,H,Ce,ue,Ee,De,ge;try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Ct,!1),t.addEventListener("webglcontextrestored",_t,!1),t.addEventListener("webglcontextcreationerror",Un,!1),O===null){let W="webgl2";if(O=ct(W,A),O===null)throw ct(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}qe()}catch(A){throw t.removeEventListener("webglcontextlost",Ct,!1),t.removeEventListener("webglcontextrestored",_t,!1),t.removeEventListener("webglcontextcreationerror",Un,!1),tt("WebGLRenderer: "+A.message),A}function qe(){Ye=new tx(O),Ye.init(),Ee=new Gv(O,Ye),R=new q_(O,Ye,e,Ee),T=new Bv(O,Ye),R.reversedDepthBuffer&&d&&T.buffers.depth.setReversed(!0),X=O.createFramebuffer(),k=O.createFramebuffer(),$=O.createFramebuffer(),j=new sx(O),te=new wv,le=new zv(O,Ye,T,te,R,Ee,j),ye=new ex(C),ve=new a0(O),De=new H_(O,ve),ae=new nx(O,ve,j,De),fe=new ax(O,ae,ve,De,j),H=new rx(O,R,le),Oe=new X_(te),we=new Tv(C,ye,Ye,R,De,Oe),Ge=new qv(C,te),Se=new Ev,Ae=new Dv(Ye),et=new V_(C,ye,T,fe,g,c),We=new kv(C,fe,R),ge=new Xv(O,j,R,T),Ce=new W_(O,Ye,j),ue=new ix(O,Ye,j),j.programs=we.programs,C.capabilities=R,C.extensions=Ye,C.properties=te,C.renderLists=Se,C.shadowMap=We,C.state=T,C.info=j}b!==In&&(w=new cx(b,t.width,t.height,o,s,r));let Ve=new zu(C,O);this.xr=Ve,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let A=Ye.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Ye.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(A){A!==void 0&&(N=A,this.setSize(xe,I,!1))},this.getSize=function(A){return A.set(xe,I)},this.setSize=function(A,W,re=!0){if(Ve.isPresenting){Ke("WebGLRenderer: Can't change size while VR device is presenting.");return}xe=A,I=W,t.width=Math.floor(A*N),t.height=Math.floor(W*N),re===!0&&(t.style.width=A+"px",t.style.height=W+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(xe*N,I*N).floor()},this.setDrawingBufferSize=function(A,W,re){xe=A,I=W,N=re,t.width=Math.floor(A*re),t.height=Math.floor(W*re),this.setViewport(0,0,A,W)},this.setEffects=function(A){if(b===In){tt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let W=0;W<A.length;W++)if(A[W].isOutputPass===!0){Ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(F)},this.getViewport=function(A){return A.copy(ie)},this.setViewport=function(A,W,re,Z){A.isVector4?ie.set(A.x,A.y,A.z,A.w):ie.set(A,W,re,Z),T.viewport(F.copy(ie).multiplyScalar(N).round())},this.getScissor=function(A){return A.copy(K)},this.setScissor=function(A,W,re,Z){A.isVector4?K.set(A.x,A.y,A.z,A.w):K.set(A,W,re,Z),T.scissor(ce.copy(K).multiplyScalar(N).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(A){T.setScissorTest(se=A)},this.setOpaqueSort=function(A){L=A},this.setTransparentSort=function(A){V=A},this.getClearColor=function(A){return A.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,re=!0){let Z=0;if(A){let Y=!1;if(J!==null){let Ie=J.texture.format;Y=m.has(Ie)}if(Y){let Ie=J.texture.type,Fe=p.has(Ie),Pe=et.getClearColor(),Be=et.getClearAlpha(),je=Pe.r,at=Pe.g,ft=Pe.b;Fe?(_[0]=je,_[1]=at,_[2]=ft,_[3]=Be,O.clearBufferuiv(O.COLOR,0,_)):(M[0]=je,M[1]=at,M[2]=ft,M[3]=Be,O.clearBufferiv(O.COLOR,0,M))}else Z|=O.COLOR_BUFFER_BIT}W&&(Z|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),re&&(Z|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&O.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),B=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Ct,!1),t.removeEventListener("webglcontextrestored",_t,!1),t.removeEventListener("webglcontextcreationerror",Un,!1),et.dispose(),Se.dispose(),Ae.dispose(),te.dispose(),ye.dispose(),fe.dispose(),De.dispose(),ge.dispose(),we.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",xt),Ve.removeEventListener("sessionend",ht),Je.stop()};function Ct(A){A.preventDefault(),Fa("WebGLRenderer: Context Lost."),D=!0}function _t(){Fa("WebGLRenderer: Context Restored."),D=!1;let A=j.autoReset,W=We.enabled,re=We.autoUpdate,Z=We.needsUpdate,Y=We.type;qe(),j.autoReset=A,We.enabled=W,We.autoUpdate=re,We.needsUpdate=Z,We.type=Y}function Un(A){tt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Yn(A){let W=A.target;W.removeEventListener("dispose",Yn),rh(W)}function rh(A){ah(A),te.remove(A)}function ah(A){let W=te.get(A).programs;W!==void 0&&(W.forEach(function(re){we.releaseProgram(re)}),A.isShaderMaterial&&we.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,re,Z,Y,Ie){W===null&&(W=ze);let Fe=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,Pe=Ut(A,W,re,Z,Y);T.setMaterial(Z,Fe);let Be=re.index,je=1;if(Z.wireframe===!0){if(Be=ae.getWireframeAttribute(re),Be===void 0)return;je=2}let at=re.drawRange,ft=re.attributes.position,He=at.start*je,Mt=(at.start+at.count)*je;Ie!==null&&(He=Math.max(He,Ie.start*je),Mt=Math.min(Mt,(Ie.start+Ie.count)*je)),Be!==null?(He=Math.max(He,0),Mt=Math.min(Mt,Be.count)):ft!=null&&(He=Math.max(He,0),Mt=Math.min(Mt,ft.count));let Zt=Mt-He;if(Zt<0||Zt===1/0)return;De.setup(Y,Z,Pe,re,Be);let Ft,It=Ce;if(Be!==null&&(Ft=ve.get(Be),It=ue,It.setIndex(Ft)),Y.isMesh)Z.wireframe===!0?(T.setLineWidth(Z.wireframeLinewidth*Ue()),It.setMode(O.LINES)):It.setMode(O.TRIANGLES);else if(Y.isLine){let un=Z.linewidth;un===void 0&&(un=1),T.setLineWidth(un*Ue()),Y.isLineSegments?It.setMode(O.LINES):Y.isLineLoop?It.setMode(O.LINE_LOOP):It.setMode(O.LINE_STRIP)}else Y.isPoints?It.setMode(O.POINTS):Y.isSprite&&It.setMode(O.TRIANGLES);if(Y.isBatchedMesh)if(Ye.get("WEBGL_multi_draw"))It.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let un=Y._multiDrawStarts,ke=Y._multiDrawCounts,vn=Y._multiDrawCount,gt=Be?ve.get(Be).bytesPerElement:1,Jn=te.get(Z).currentProgram.getUniforms();for(let wi=0;wi<vn;wi++)Jn.setValue(O,"_gl_DrawID",wi),It.render(un[wi]/gt,ke[wi])}else if(Y.isInstancedMesh)It.renderInstances(He,Zt,Y.count);else if(re.isInstancedBufferGeometry){let un=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,ke=Math.min(re.instanceCount,un);It.renderInstances(He,Zt,ke)}else It.render(He,Zt)};function pe(A,W,re,Z){B!==null&&A.isNodeMaterial&&B.setObject(Z,A),_e===!0&&Oe.setState(A,re,!1),A.transparent===!0&&A.side===Tn&&A.forceSinglePass===!1?(A.side=ln,A.needsUpdate=!0,ci(A,W,Z),A.side=Vn,A.needsUpdate=!0,ci(A,W,Z),A.side=Tn):ci(A,W,Z)}this.compile=function(A,W,re=null){re===null&&(re=A),B!==null&&B.renderStart(A,W,re),S=Ae.get(re),S.init(W),y.push(S),re.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(S.pushLight(Y),Y.castShadow&&S.pushShadow(Y))}),A!==re&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(S.pushLight(Y),Y.castShadow&&S.pushShadow(Y))}),S.setupLights(),B!==null&&B.updateLights(S.state.lightsArray),Me=this.localClippingEnabled,_e=Oe.init(this.clippingPlanes,Me),_e===!0&&Oe.setGlobalState(this.clippingPlanes,W),B!==null&&We.render(S.state.shadowsArray,re,W);let Z=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let Ie=Y.material;if(Ie)if(Array.isArray(Ie))for(let Fe=0;Fe<Ie.length;Fe++){let Pe=Ie[Fe];pe(Pe,re,W,Y),Z.add(Pe)}else pe(Ie,re,W,Y),Z.add(Ie)}),S=y.pop(),B!==null&&B.renderEnd(),Z},this.compileAsync=function(A,W,re=null){let Z=this.compile(A,W,re);return new Promise(Y=>{function Ie(){if(Z.forEach(function(Fe){let Be=te.get(Fe).currentProgram;(Be===void 0||Be.isReady())&&Z.delete(Fe)}),Z.size===0){Y(A);return}setTimeout(Ie,10)}Ye.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let Te=null;function Ze(A){Te&&Te(A)}function xt(){Je.stop()}function ht(){Je.start()}let Je=new qp;Je.setAnimationLoop(Ze),typeof self<"u"&&Je.setContext(self),this.setAnimationLoop=function(A){Te=A,Ve.setAnimationLoop(A),A===null?Je.stop():Je.start()},Ve.addEventListener("sessionstart",xt),Ve.addEventListener("sessionend",ht),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;B!==null&&B.renderStart(A,W);let re=Ve.enabled===!0&&Ve.isPresenting===!0,Z=w!==null&&(J===null||re)&&w.begin(C,J);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(W),W=Ve.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,W,J),S=Ae.get(A,y.length),S.init(W),S.state.textureUnits=le.getTextureUnits(),y.push(S),de.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),ee.setFromProjectionMatrix(de,fi,W.reversedDepth),Me=this.localClippingEnabled,_e=Oe.init(this.clippingPlanes,Me),v=Se.get(A,E.length),v.init(),E.push(v),Ve.enabled===!0&&Ve.isPresenting===!0){let Fe=C.xr.getDepthSensingMesh();Fe!==null&&ut(Fe,W,-1/0,C.sortObjects)}ut(A,W,0,C.sortObjects),v.finish(),B!==null&&B.updateLights(S.state.lightsArray),C.sortObjects===!0&&v.sort(L,V),be=Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1,be&&et.addToRenderList(v,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),_e===!0&&Oe.beginShadows();let Y=S.state.shadowsArray;if(We.render(Y,A,W),_e===!0&&Oe.endShadows(),(Z&&w.hasRenderPass())===!1){let Fe=v.opaque,Pe=v.transmissive;if(S.setupLights(),W.isArrayCamera){let Be=W.cameras;if(Pe.length>0)for(let je=0,at=Be.length;je<at;je++){let ft=Be[je];On(Fe,Pe,A,ft)}be&&et.render(A);for(let je=0,at=Be.length;je<at;je++){let ft=Be[je];mt(v,A,ft,ft.viewport)}}else Pe.length>0&&On(Fe,Pe,A,W),be&&et.render(A),mt(v,A,W)}J!==null&&z===0&&(le.updateMultisampleRenderTarget(J),le.updateRenderTargetMipmap(J)),Z&&w.end(C),A.isScene===!0&&A.onAfterRender(C,A,W),De.resetDefaultState(),G=-1,q=null,y.pop(),y.length>0?(S=y[y.length-1],le.setTextureUnits(S.state.textureUnits),_e===!0&&Oe.setGlobalState(C.clippingPlanes,S.state.camera)):S=null,E.pop(),E.length>0?v=E[E.length-1]:v=null,B!==null&&B.renderEnd()};function ut(A,W,re,Z){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)re=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLightProbeGrid)S.pushLightProbeGrid(A);else if(A.isLight)S.pushLight(A),A.castShadow&&S.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(ee)){Z&&Re.setFromMatrixPosition(A.matrixWorld).applyMatrix4(de);let Fe=fe.update(A),Pe=A.material;Pe.visible&&v.push(A,Fe,Pe,re,Re.z,null,W)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(ee))){let Fe=fe.update(A),Pe=A.material;if(Z&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Re.copy(A.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),Re.copy(Fe.boundingSphere.center)),Re.applyMatrix4(A.matrixWorld).applyMatrix4(de)),Array.isArray(Pe)){let Be=Fe.groups;for(let je=0,at=Be.length;je<at;je++){let ft=Be[je],He=Pe[ft.materialIndex];He&&He.visible&&v.push(A,Fe,He,re,Re.z,ft,W)}}else Pe.visible&&v.push(A,Fe,Pe,re,Re.z,null,W)}}let Ie=A.children;for(let Fe=0,Pe=Ie.length;Fe<Pe;Fe++)ut(Ie[Fe],W,re,Z)}function mt(A,W,re,Z){let{opaque:Y,transmissive:Ie,transparent:Fe}=A;S.setupLightsView(re),_e===!0&&Oe.setGlobalState(C.clippingPlanes,re),Z&&T.viewport(F.copy(Z)),Y.length>0&&ki(Y,W,re),Ie.length>0&&ki(Ie,W,re),Fe.length>0&&ki(Fe,W,re),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function On(A,W,re,Z){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[Z.id]===void 0){let He=Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[Z.id]=new Gt(1,1,{generateMipmaps:!0,type:He?$t:In,minFilter:Pn,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:lt.workingColorSpace})}let Ie=S.state.transmissionRenderTarget[Z.id],Fe=Z.viewport||F;Ie.setSize(Fe.z*C.transmissionResolutionScale,Fe.w*C.transmissionResolutionScale);let Pe=C.getRenderTarget(),Be=C.getActiveCubeFace(),je=C.getActiveMipmapLevel();C.setRenderTarget(Ie),C.getClearColor(he),oe=C.getClearAlpha(),oe<1&&C.setClearColor(16777215,.5),C.clear(),be&&et.render(re);let at=C.toneMapping;C.toneMapping=Hn;let ft=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),S.setupLightsView(Z),_e===!0&&Oe.setGlobalState(C.clippingPlanes,Z),ki(A,re,Z),le.updateMultisampleRenderTarget(Ie),le.updateRenderTargetMipmap(Ie),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Mt=0,Zt=W.length;Mt<Zt;Mt++){let Ft=W[Mt],{object:It,geometry:un,material:ke,group:vn}=Ft;if(ke.side===Tn&&It.layers.test(Z.layers)){let gt=ke.side;ke.side=ln,ke.needsUpdate=!0,kn(It,re,Z,un,ke,vn),ke.side=gt,ke.needsUpdate=!0,He=!0}}He===!0&&(le.updateMultisampleRenderTarget(Ie),le.updateRenderTargetMipmap(Ie))}C.setRenderTarget(Pe,Be,je),C.setClearColor(he,oe),ft!==void 0&&(Z.viewport=ft),C.toneMapping=at}function ki(A,W,re){let Z=W.isScene===!0?W.overrideMaterial:null;for(let Y=0,Ie=A.length;Y<Ie;Y++){let Fe=A[Y],{object:Pe,geometry:Be,group:je}=Fe,at=Fe.material;at.allowOverride===!0&&Z!==null&&(at=Z),Pe.layers.test(re.layers)&&kn(Pe,W,re,Be,at,je)}}function kn(A,W,re,Z,Y,Ie){B!==null&&Y.isNodeMaterial&&B.setObject(A,Y),A.onBeforeRender(C,W,re,Z,Y,Ie),A.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(C,W,re,Z,A,Ie),Y.transparent===!0&&Y.side===Tn&&Y.forceSinglePass===!1?(Y.side=ln,Y.needsUpdate=!0,C.renderBufferDirect(re,W,Z,Y,A,Ie),Y.side=Vn,Y.needsUpdate=!0,C.renderBufferDirect(re,W,Z,Y,A,Ie),Y.side=Tn):C.renderBufferDirect(re,W,Z,Y,A,Ie),A.onAfterRender(C,W,re,Z,Y,Ie)}function ci(A,W,re){W.isScene!==!0&&(W=ze);let Z=te.get(A),Y=S.state.lights,Ie=S.state.shadowsArray,Fe=Y.state.version,Pe=we.getParameters(A,Y.state,Ie,W,re,S.state.lightProbeGridArray),Be=we.getProgramCacheKey(Pe),je=Z.programs;Z.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?W.environment:null,Z.fog=W.fog;let at=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;Z.envMap=ye.get(A.envMap||Z.environment,at),Z.envMapRotation=Z.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,je===void 0&&(A.addEventListener("dispose",Yn),je=new Map,Z.programs=je);let ft=je.get(Be);if(ft!==void 0){if(Z.currentProgram===ft&&Z.lightsStateVersion===Fe)return Bs(A,Pe),ft}else Pe.uniforms=we.getUniforms(A),B!==null&&A.isNodeMaterial&&B.build(A,re,Pe),A.onBeforeCompile(Pe,C),ft=we.acquireProgram(Pe,Be),je.set(Be,ft),Z.uniforms=Pe.uniforms;let He=Z.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(He.clippingPlanes=Oe.uniform),Bs(A,Pe),Z.needsLights=Ti(A),Z.lightsStateVersion=Fe,Z.needsLights&&(He.ambientLightColor.value=Y.state.ambient,He.lightProbe.value=Y.state.probe,He.sunLights.value=Y.state.sun,He.sunLightShadows.value=Y.state.sunShadow,He.directionalLights.value=Y.state.directional,He.directionalLightShadows.value=Y.state.directionalShadow,He.spotLights.value=Y.state.spot,He.spotLightShadows.value=Y.state.spotShadow,He.rectAreaLights.value=Y.state.rectArea,He.ltc_1.value=Y.state.rectAreaLTC1,He.ltc_2.value=Y.state.rectAreaLTC2,He.pointLights.value=Y.state.point,He.pointLightShadows.value=Y.state.pointShadow,He.hemisphereLights.value=Y.state.hemi,He.sunShadowMatrix.value=Y.state.sunShadowMatrix,He.sunShadowCascade.value=Y.state.sunShadowCascade,He.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,He.spotLightMatrix.value=Y.state.spotLightMatrix,He.spotLightMap.value=Y.state.spotLightMap,He.pointShadowMatrix.value=Y.state.pointShadowMatrix),Z.lightProbeGrid=S.state.lightProbeGridArray.length>0,Z.currentProgram=ft,Z.uniformsList=null,ft}function ks(A){if(A.uniformsList===null){let W=A.currentProgram.getUniforms();A.uniformsList=ua.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function Bs(A,W){let re=te.get(A);re.outputColorSpace=W.outputColorSpace,re.batching=W.batching,re.batchingColor=W.batchingColor,re.instancing=W.instancing,re.instancingColor=W.instancingColor,re.instancingMorph=W.instancingMorph,re.skinning=W.skinning,re.morphTargets=W.morphTargets,re.morphNormals=W.morphNormals,re.morphColors=W.morphColors,re.morphTargetsCount=W.morphTargetsCount,re.numClippingPlanes=W.numClippingPlanes,re.numIntersection=W.numClipIntersection,re.vertexAlphas=W.vertexAlphas,re.vertexTangents=W.vertexTangents,re.toneMapping=W.toneMapping}function $e(A,W){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;x.setFromMatrixPosition(W.matrixWorld);for(let re=0,Z=A.length;re<Z;re++){let Y=A[re];if(Y.texture!==null&&Y.boundingBox.containsPoint(x))return Y}return null}function Ut(A,W,re,Z,Y){W.isScene!==!0&&(W=ze),le.resetTextureUnits();let Ie=W.fog,Fe=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?W.environment:null,Pe=J===null?C.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:lt.workingColorSpace,Be=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,je=ye.get(Z.envMap||Fe,Be),at=Z.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,ft=!!re.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),He=!!re.morphAttributes.position,Mt=!!re.morphAttributes.normal,Zt=!!re.morphAttributes.color,Ft=Hn;Z.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ft=C.toneMapping);let It=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,un=It!==void 0?It.length:0,ke=te.get(Z),vn=S.state.lights;if(_e===!0&&(Me===!0||A!==q)){let Dt=A===q&&Z.id===G;Oe.setState(Z,A,Dt)}let gt=!1;Z.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==vn.state.version||ke.outputColorSpace!==Pe||Y.isBatchedMesh&&ke.batching===!1||!Y.isBatchedMesh&&ke.batching===!0||Y.isBatchedMesh&&ke.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&ke.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&ke.instancing===!1||!Y.isInstancedMesh&&ke.instancing===!0||Y.isSkinnedMesh&&ke.skinning===!1||!Y.isSkinnedMesh&&ke.skinning===!0||Y.isInstancedMesh&&ke.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&ke.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&ke.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&ke.instancingMorph===!1&&Y.morphTexture!==null||ke.envMap!==je||Z.fog===!0&&ke.fog!==Ie||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Oe.numPlanes||ke.numIntersection!==Oe.numIntersection)||ke.vertexAlphas!==at||ke.vertexTangents!==ft||ke.morphTargets!==He||ke.morphNormals!==Mt||ke.morphColors!==Zt||ke.toneMapping!==Ft||ke.morphTargetsCount!==un||!!ke.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(gt=!0):(gt=!0,ke.__version=Z.version);let Jn=ke.currentProgram;gt===!0&&(Jn=ci(Z,W,Y),B&&Z.isNodeMaterial&&B.onUpdateProgram(Z,Jn,ke));let wi=!1,os=!1,vr=!1,Pt=Jn.getUniforms(),Wt=ke.uniforms;if(T.useProgram(Jn.program)&&(wi=!0,os=!0,vr=!0),Z.id!==G&&(G=Z.id,os=!0),ke.needsLights){let Dt=$e(S.state.lightProbeGridArray,Y);ke.lightProbeGrid!==Dt&&(ke.lightProbeGrid=Dt,os=!0)}if(wi||q!==A){T.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Pt.setValue(O,"projectionMatrix",A.projectionMatrix),Pt.setValue(O,"viewMatrix",A.matrixWorldInverse);let ls=Pt.map.cameraPosition;ls!==void 0&&ls.setValue(O,me.setFromMatrixPosition(A.matrixWorld)),R.logarithmicDepthBuffer&&Pt.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Pt.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),q!==A&&(q=A,os=!0,vr=!0)}if(ke.needsLights&&(vn.state.sunShadowMap.length>0&&Pt.setValue(O,"sunShadowMap",vn.state.sunShadowMap,le),vn.state.directionalShadowMap.length>0&&Pt.setValue(O,"directionalShadowMap",vn.state.directionalShadowMap,le),vn.state.spotShadowMap.length>0&&Pt.setValue(O,"spotShadowMap",vn.state.spotShadowMap,le),vn.state.pointShadowMap.length>0&&Pt.setValue(O,"pointShadowMap",vn.state.pointShadowMap,le)),Y.isSkinnedMesh){Pt.setOptional(O,Y,"bindMatrix"),Pt.setOptional(O,Y,"bindMatrixInverse");let Dt=Y.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),Pt.setValue(O,"boneTexture",Dt.boneTexture,le))}Y.isBatchedMesh&&(Pt.setOptional(O,Y,"batchingTexture"),Pt.setValue(O,"batchingTexture",Y._matricesTexture,le),Pt.setOptional(O,Y,"batchingIdTexture"),Pt.setValue(O,"batchingIdTexture",Y._indirectTexture,le),Pt.setOptional(O,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Pt.setValue(O,"batchingColorTexture",Y._colorsTexture,le));let cs=re.morphAttributes;if((cs.position!==void 0||cs.normal!==void 0||cs.color!==void 0)&&H.update(Y,re,Jn),(os||ke.receiveShadow!==Y.receiveShadow)&&(ke.receiveShadow=Y.receiveShadow,Pt.setValue(O,"receiveShadow",Y.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&W.environment!==null&&(Wt.envMapIntensity.value=W.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=Kv()),os){if(Pt.setValue(O,"toneMappingExposure",C.toneMappingExposure),ke.needsLights&&Bi(Wt,vr),Ie&&Z.fog===!0&&Ge.refreshFogUniforms(Wt,Ie),Ge.refreshMaterialUniforms(Wt,Z,N,I,S.state.transmissionRenderTarget[A.id]),ke.needsLights&&ke.lightProbeGrid){let Dt=ke.lightProbeGrid;Wt.probesSH.value=Dt.texture,Wt.probesMin.value.copy(Dt.boundingBox.min),Wt.probesMax.value.copy(Dt.boundingBox.max),Wt.probesResolution.value.copy(Dt.resolution)}ua.upload(O,ks(ke),Wt,le)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(ua.upload(O,ks(ke),Wt,le),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Pt.setValue(O,"center",Y.center),Pt.setValue(O,"modelViewMatrix",Y.modelViewMatrix),Pt.setValue(O,"normalMatrix",Y.normalMatrix),Pt.setValue(O,"modelMatrix",Y.matrixWorld),Z.uniformsGroups!==void 0){let Dt=Z.uniformsGroups;for(let ls=0,yr=Dt.length;ls<yr;ls++){let Qd=Dt[ls];ge.update(Qd,Jn),ge.bind(Qd,Jn)}}return Jn}function Bi(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.sunLights.needsUpdate=W,A.sunLightShadows.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function Ti(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(A,W,re){let Z=te.get(A);Z.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),te.get(A.texture).__webglTexture=W,te.get(A.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:re,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){let re=te.get(A);re.__webglFramebuffer=W,re.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,re=0){J=A,Q=W,z=re;let Z=null,Y=!1,Ie=!1;if(A){let Pe=te.get(A);if(Pe.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(O.FRAMEBUFFER,Pe.__webglFramebuffer),F.copy(A.viewport),ce.copy(A.scissor),U=A.scissorTest,T.viewport(F),T.scissor(ce),T.setScissorTest(U),G=-1;return}else if(Pe.__webglFramebuffer===void 0)le.setupRenderTarget(A);else if(Pe.__hasExternalTextures)le.rebindTextures(A,te.get(A.texture).__webglTexture,te.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let at=A.depthTexture;if(Pe.__boundDepthTexture!==at){if(at!==null&&te.has(at)&&(A.width!==at.image.width||A.height!==at.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");le.setupDepthRenderbuffer(A)}}let Be=A.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Ie=!0);let je=te.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(je[W])?Z=je[W][re]:Z=je[W],Y=!0):A.samples>0&&le.useMultisampledRTT(A)===!1?Z=te.get(A).__webglMultisampledFramebuffer:Array.isArray(je)?Z=je[re]:Z=je,F.copy(A.viewport),ce.copy(A.scissor),U=A.scissorTest}else F.copy(ie).multiplyScalar(N).floor(),ce.copy(K).multiplyScalar(N).floor(),U=se;if(re!==0&&(Z=X),T.bindFramebuffer(O.FRAMEBUFFER,Z)&&T.drawBuffers(A,Z),T.viewport(F),T.scissor(ce),T.setScissorTest(U),Y){let Pe=te.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+W,Pe.__webglTexture,re)}else if(Ie){let Pe=W;for(let Be=0;Be<A.textures.length;Be++){let je=te.get(A.textures[Be]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Be,je.__webglTexture,re,Pe)}}else if(A!==null&&re!==0){let Pe=te.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Pe.__webglTexture,re)}G=-1};function Do(A){let W=te.get(A);return(W.__readFormat!==A.format||W.__readType!==A.type)&&(W.__readFormat=A.format,W.__readType=A.type,W.__formatReadable=R.textureFormatReadable(A.format),W.__typeReadable=R.textureTypeReadable(A.type)),W}this.readRenderTargetPixels=function(A,W,re,Z,Y,Ie,Fe,Pe=0){if(!(A&&A.isWebGLRenderTarget)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=te.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Fe!==void 0&&(Be=Be[Fe]),Be){T.bindFramebuffer(O.FRAMEBUFFER,Be);try{let je=A.textures[Pe],at=je.format,ft=je.type;A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Pe);let He=Do(je);if(He.__formatReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(He.__typeReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-Z&&re>=0&&re<=A.height-Y&&O.readPixels(W,re,Z,Y,Ee.convert(at),Ee.convert(ft),Ie)}finally{let je=J!==null?te.get(J).__webglFramebuffer:null;T.bindFramebuffer(O.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(A,W,re,Z,Y,Ie,Fe,Pe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=te.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Fe!==void 0&&(Be=Be[Fe]),Be)if(W>=0&&W<=A.width-Z&&re>=0&&re<=A.height-Y){T.bindFramebuffer(O.FRAMEBUFFER,Be);let je=A.textures[Pe],at=je.format,ft=je.type;A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Pe);let He=Do(je);if(He.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(He.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Mt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Mt),O.bufferData(O.PIXEL_PACK_BUFFER,Ie.byteLength,O.STREAM_READ),O.readPixels(W,re,Z,Y,Ee.convert(at),Ee.convert(ft),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Zt=J!==null?te.get(J).__webglFramebuffer:null;T.bindFramebuffer(O.FRAMEBUFFER,Zt);let Ft=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await xp(O,Ft,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Mt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Ie),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(Mt),O.deleteSync(Ft),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,re=0){let Z=Math.pow(2,-re),Y=Math.floor(A.image.width*Z),Ie=Math.floor(A.image.height*Z),Fe=W!==null?W.x:0,Pe=W!==null?W.y:0;le.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,re,0,0,Fe,Pe,Y,Ie),T.unbindTexture()},this.copyTextureToTexture=function(A,W,re=null,Z=null,Y=0,Ie=0){let Fe,Pe,Be,je,at,ft,He,Mt,Zt,Ft=A.isCompressedTexture?A.mipmaps[Ie]:A.image;if(re!==null)Fe=re.max.x-re.min.x,Pe=re.max.y-re.min.y,Be=re.isBox3?re.max.z-re.min.z:1,je=re.min.x,at=re.min.y,ft=re.isBox3?re.min.z:0;else{let Wt=Math.pow(2,-Y);Fe=Math.floor(Ft.width*Wt),Pe=Math.floor(Ft.height*Wt),A.isDataArrayTexture?Be=Ft.depth:A.isData3DTexture?Be=Math.floor(Ft.depth*Wt):Be=1,je=0,at=0,ft=0}Z!==null?(He=Z.x,Mt=Z.y,Zt=Z.z):(He=0,Mt=0,Zt=0);let It=Ee.convert(W.format),un=Ee.convert(W.type),ke;W.isData3DTexture?(le.setTexture3D(W,0),ke=O.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(le.setTexture2DArray(W,0),ke=O.TEXTURE_2D_ARRAY):(le.setTexture2D(W,0),ke=O.TEXTURE_2D),T.activeTexture(O.TEXTURE0),T.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),T.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),T.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment);let vn=T.getParameter(O.UNPACK_ROW_LENGTH),gt=T.getParameter(O.UNPACK_IMAGE_HEIGHT),Jn=T.getParameter(O.UNPACK_SKIP_PIXELS),wi=T.getParameter(O.UNPACK_SKIP_ROWS),os=T.getParameter(O.UNPACK_SKIP_IMAGES);T.pixelStorei(O.UNPACK_ROW_LENGTH,Ft.width),T.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ft.height),T.pixelStorei(O.UNPACK_SKIP_PIXELS,je),T.pixelStorei(O.UNPACK_SKIP_ROWS,at),T.pixelStorei(O.UNPACK_SKIP_IMAGES,ft);let vr=A.isDataArrayTexture||A.isData3DTexture,Pt=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){let Wt=te.get(A),cs=te.get(W),Dt=te.get(Wt.__renderTarget),ls=te.get(cs.__renderTarget);T.bindFramebuffer(O.READ_FRAMEBUFFER,Dt.__webglFramebuffer),T.bindFramebuffer(O.DRAW_FRAMEBUFFER,ls.__webglFramebuffer);for(let yr=0;yr<Be;yr++)vr&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,te.get(A).__webglTexture,Y,ft+yr),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,te.get(W).__webglTexture,Ie,Zt+yr)),O.blitFramebuffer(je,at,Fe,Pe,He,Mt,Fe,Pe,O.DEPTH_BUFFER_BIT,O.NEAREST);T.bindFramebuffer(O.READ_FRAMEBUFFER,null),T.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(Y!==0||A.isRenderTargetTexture||te.has(A)){let Wt=te.get(A),cs=te.get(W);T.bindFramebuffer(O.READ_FRAMEBUFFER,k),T.bindFramebuffer(O.DRAW_FRAMEBUFFER,$);for(let Dt=0;Dt<Be;Dt++)vr?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Wt.__webglTexture,Y,ft+Dt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Wt.__webglTexture,Y),Pt?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,cs.__webglTexture,Ie,Zt+Dt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,cs.__webglTexture,Ie),Y!==0?O.blitFramebuffer(je,at,Fe,Pe,He,Mt,Fe,Pe,O.COLOR_BUFFER_BIT,O.NEAREST):Pt?O.copyTexSubImage3D(ke,Ie,He,Mt,Zt+Dt,je,at,Fe,Pe):O.copyTexSubImage2D(ke,Ie,He,Mt,je,at,Fe,Pe);T.bindFramebuffer(O.READ_FRAMEBUFFER,null),T.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Pt?A.isDataTexture||A.isData3DTexture?O.texSubImage3D(ke,Ie,He,Mt,Zt,Fe,Pe,Be,It,un,Ft.data):W.isCompressedArrayTexture?O.compressedTexSubImage3D(ke,Ie,He,Mt,Zt,Fe,Pe,Be,It,Ft.data):O.texSubImage3D(ke,Ie,He,Mt,Zt,Fe,Pe,Be,It,un,Ft):A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Ie,He,Mt,Fe,Pe,It,un,Ft.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Ie,He,Mt,Ft.width,Ft.height,It,Ft.data):O.texSubImage2D(O.TEXTURE_2D,Ie,He,Mt,Fe,Pe,It,un,Ft);T.pixelStorei(O.UNPACK_ROW_LENGTH,vn),T.pixelStorei(O.UNPACK_IMAGE_HEIGHT,gt),T.pixelStorei(O.UNPACK_SKIP_PIXELS,Jn),T.pixelStorei(O.UNPACK_SKIP_ROWS,wi),T.pixelStorei(O.UNPACK_SKIP_IMAGES,os),Ie===0&&W.generateMipmaps&&O.generateMipmap(ke),T.unbindTexture()},this.initRenderTarget=function(A){te.get(A).__webglFramebuffer===void 0&&le.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?le.setTextureCube(A,0):A.isData3DTexture?le.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?le.setTexture2DArray(A,0):le.setTexture2D(A,0),T.unbindTexture()},this.resetState=function(){Q=0,z=0,J=null,T.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}};var Zp={type:"change"},Vu={type:"start"},em={type:"end"},Rl=new Ki,Qp=new Gn,$v=Math.cos(70*mo.DEG2RAD),rn=new P,Ln=2*Math.PI,Et={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Gu=1e-6,Cl=class extends io{constructor(e,t=null){super(e,t),this.state=Et.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ms.ROTATE,MIDDLE:Ms.DOLLY,RIGHT:Ms.PAN},this.touches={ONE:Ss.ROTATE,TWO:Ss.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new Kt,this._lastTargetPosition=new P,this._quat=new Kt().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ys,this._sphericalDelta=new ys,this._scale=1,this._panOffset=new P,this._rotateStart=new Le,this._rotateEnd=new Le,this._rotateDelta=new Le,this._panStart=new Le,this._panEnd=new Le,this._panDelta=new Le,this._dollyStart=new Le,this._dollyEnd=new Le,this._dollyDelta=new Le,this._dollyDirection=new P,this._mouse=new Le,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Jv.bind(this),this._onPointerDown=Yv.bind(this),this._onPointerUp=Zv.bind(this),this._onContextMenu=ry.bind(this),this._onMouseWheel=ty.bind(this),this._onKeyDown=ny.bind(this),this._onTouchStart=iy.bind(this),this._onTouchMove=sy.bind(this),this._onMouseDown=Qv.bind(this),this._onMouseMove=ey.bind(this),this._interceptControlDown=ay.bind(this),this._interceptControlUp=oy.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Et.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Zp),this.update(),this.state=Et.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;rn.copy(t).sub(this.target),rn.applyQuaternion(this._quat),this._spherical.setFromVector3(rn),this.autoRotate&&this.state===Et.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Ln:i>Math.PI&&(i-=Ln),s<-Math.PI?s+=Ln:s>Math.PI&&(s-=Ln),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(rn.setFromSpherical(this._spherical),rn.applyQuaternion(this._quatInverse),t.copy(this.target).add(rn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=rn.length();a=this._clampDistance(o*this._scale);let c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let o=new P(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new P(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=rn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Rl.origin.copy(this.object.position),Rl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Rl.direction))<$v?this.object.lookAt(this.target):(Qp.setFromNormalAndCoplanarPoint(this.object.up,this.target),Rl.intersectPlane(Qp,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Gu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Gu||this._lastTargetPosition.distanceToSquared(this.target)>Gu?(this.dispatchEvent(Zp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ln/60*this.autoRotateSpeed*e:Ln/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){rn.setFromMatrixColumn(t,0),rn.multiplyScalar(-e),this._panOffset.add(rn)}_panUp(e,t){this.screenSpacePanning===!0?rn.setFromMatrixColumn(t,1):(rn.setFromMatrixColumn(t,0),rn.crossVectors(this.object.up,rn)),rn.multiplyScalar(e),this._panOffset.add(rn)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;rn.copy(s).sub(this.target);let r=rn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Ln*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ln*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Ln*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ln*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Le,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function Yv(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Jv(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Zv(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(em),this.state=Et.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Qv(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ms.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Et.DOLLY;break;case Ms.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Et.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Et.ROTATE}break;case Ms.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Et.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Et.PAN}break;default:this.state=Et.NONE}this.state!==Et.NONE&&this.dispatchEvent(Vu)}function ey(n){switch(this.state){case Et.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Et.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Et.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function ty(n){this.enabled===!1||this.enableZoom===!1||this.state!==Et.NONE||(n.preventDefault(),this.dispatchEvent(Vu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(em))}function ny(n){this.enabled!==!1&&this._handleKeyDown(n)}function iy(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ss.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Et.TOUCH_ROTATE;break;case Ss.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Et.TOUCH_PAN;break;default:this.state=Et.NONE}break;case 2:switch(this.touches.TWO){case Ss.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Et.TOUCH_DOLLY_PAN;break;case Ss.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Et.TOUCH_DOLLY_ROTATE;break;default:this.state=Et.NONE}break;default:this.state=Et.NONE}this.state!==Et.NONE&&this.dispatchEvent(Vu)}function sy(n){switch(this._trackPointer(n),this.state){case Et.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Et.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Et.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Et.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Et.NONE}}function ry(n){this.enabled!==!1&&n.preventDefault()}function ay(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function oy(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Xn(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,c=new bt,l=0;for(let h=0;h<n.length;++h){let u=n[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0,u=[];for(let d=0;d<n.length;++d){let f=n[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=n[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=tm(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let b=0;b<a[h].length;++b)f.push(a[h][b][d]);let g=tm(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}}return c}function tm(n){let e,t,i,s=-1,r=0;for(let l=0;l<n.length;++l){let h=n[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new vt(a,t,i),c=0;for(let l=0;l<n.length;++l){let h=n[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){let b=h.getComponent(d,g);o.setComponent(d+u,g,b)}}else a.set(h.array,c);c+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function Hu(n,e){if(e===du)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===ca||e===po){let t=n.getIndex();if(t===null){let r=[],a=n.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);n.setIndex(r),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,s=[];if(e===ca)for(let r=1;r<=i;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<i;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),n.setIndex(s),n.clearGroups(),n}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}function nm(n){let e=new Map,t=new Map,i=n.clone();return im(n,i,function(s,r){e.set(r,s),t.set(s,r)}),i.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),i}function im(n,e,t){t(n,e);for(let i=0;i<n.children.length;i++)im(n.children[i],e.children[i],t)}var Pl=class extends Pi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Yu(t)}),this.register(function(t){return new Ju(t)}),this.register(function(t){return new ad(t)}),this.register(function(t){return new od(t)}),this.register(function(t){return new cd(t)}),this.register(function(t){return new Qu(t)}),this.register(function(t){return new ed(t)}),this.register(function(t){return new td(t)}),this.register(function(t){return new nd(t)}),this.register(function(t){return new $u(t)}),this.register(function(t){return new id(t)}),this.register(function(t){return new Zu(t)}),this.register(function(t){return new rd(t)}),this.register(function(t){return new sd(t)}),this.register(function(t){return new ju(t)}),this.register(function(t){return new Il(t,dt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Il(t,dt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new ld(t)})}load(e,t,i,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=ns.extractUrlBase(e);a=ns.resolveURL(l,this.path)}else a=ns.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new ea(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===cm){try{a[dt.KHR_BINARY_GLTF]=new hd(e)}catch(u){s&&s(u);return}r=JSON.parse(a[dt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new bd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case dt.KHR_MATERIALS_UNLIT:a[u]=new Ku;break;case dt.KHR_DRACO_MESH_COMPRESSION:a[u]=new ud(r,this.dracoLoader);break;case dt.KHR_TEXTURE_TRANSFORM:a[u]=new dd;break;case dt.KHR_MESH_QUANTIZATION:a[u]=new fd;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(i,s)}parseAsync(e,t){let i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}};function cy(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}function Yt(n,e,t){let i=n.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}var dt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},ju=class{constructor(e){this.parser=e,this.name=dt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,s=t.cache.get(i);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Xe(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Mn);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new to(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new eo(h),l.distance=u;break;case"spot":l=new Qa(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Ni(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return i._getNodeRef(t.cache,o,c)})}},Ku=class{constructor(){this.name=dt.KHR_MATERIALS_UNLIT}getMaterialType(){return Vt}extendParams(e,t,i){let s=[];e.color=new Xe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Mn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,qt))}return Promise.all(s)}},$u=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=Yt(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}},Yu=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let i=Yt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){let r=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Le(r,r)}return Promise.all(s)}},Ju=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let i=Yt(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}},Zu=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let i=Yt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(s)}},Qu=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let i=Yt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(t.sheenColor=new Xe(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){let r=i.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Mn)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,qt)),i.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(s)}},ed=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let i=Yt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(s)}},td=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let i=Yt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;let r=i.attenuationColor||[1,1,1];return t.attenuationColor=new Xe().setRGB(r[0],r[1],r[2],Mn),Promise.all(s)}},nd=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_IOR}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let i=Yt(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},id=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let i=Yt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));let r=i.specularColorFactor||[1,1,1];return t.specularColor=new Xe().setRGB(r[0],r[1],r[2],Mn),i.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,qt)),Promise.all(s)}},sd=class{constructor(e){this.parser=e,this.name=dt.EXT_MATERIALS_BUMP}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let i=Yt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(s)}},rd=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let i=Yt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(s)}},ad=class{constructor(e){this.parser=e,this.name=dt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},od=class{constructor(e){this.parser=e,this.name=dt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=i.textureLoader;if(o.uri){let l=i.options.manager.getHandler(o.uri);l!==null&&(c=l)}return i.loadTextureImage(e,a.source,c)}},cd=class{constructor(e){this.parser=e,this.name=dt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=i.textureLoader;if(o.uri){let l=i.options.manager.getHandler(o.uri);l!==null&&(c=l)}return i.loadTextureImage(e,a.source,c)}},Il=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},ld=class{constructor(e){this.name=dt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=t.meshes[i.mesh];for(let l of s.primitives)if(l.mode!==ni.TRIANGLES&&l.mode!==ni.TRIANGLE_STRIP&&l.mode!==ni.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=i.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let g of u){let b=new it,m=new P,p=new Kt,_=new P(1,1,1),M=new Ks(g.geometry,g.material,d);for(let v=0;v<d;v++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,v),c.SCALE&&_.fromBufferAttribute(c.SCALE,v),M.setMatrixAt(v,b.compose(m,p,_));let x=null;for(let v in c)if(v==="_COLOR_0"){let S=c[v];M.instanceColor=new $i(S.array,S.itemSize,S.normalized)}else if(v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"){if(x===null){let E=M.geometry;x=new bt,x.name=E.name;for(let y in E.attributes)x.setAttribute(y,E.attributes[y]);for(let y in E.morphAttributes)x.morphAttributes[y]=E.morphAttributes[y];E.index!==null&&x.setIndex(E.index),x.morphTargetsRelative=E.morphTargetsRelative;for(let y of E.groups)x.addGroup(y.start,y.count,y.materialIndex);E.boundingBox!==null&&(x.boundingBox=E.boundingBox.clone()),E.boundingSphere!==null&&(x.boundingSphere=E.boundingSphere.clone()),x.drawRange.start=E.drawRange.start,x.drawRange.count=E.drawRange.count,x.userData=Object.assign({},E.userData),M.geometry=x}let S=c[v];x.setAttribute(v,new $i(S.array,S.itemSize,S.normalized))}Bt.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),f.push(M)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},cm="glTF",xo=12,sm={JSON:1313821514,BIN:5130562},hd=class{constructor(e){this.name=dt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,xo),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==cm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-xo,r=new DataView(e,xo),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===sm.JSON){let l=new Uint8Array(e,xo+a,o);this.content=i.decode(l)}else if(c===sm.BIN){let l=xo+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},ud=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=dt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=md[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=md[h]||h.toLowerCase();if(a[h]!==void 0){let d=i.accessors[e.attributes[h]],f=pa[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let b=f.attributes[g],m=c[g];m!==void 0&&(b.normalized=m)}u(f)},o,l,Mn,d)})})}},dd=class{constructor(){this.name=dt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let i=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*i,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*i,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},fd=class{constructor(){this.name=dt.KHR_MESH_QUANTIZATION}},Ll=class extends Ci{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=i[r+a];return t}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=s-t,u=(i-t)/h,d=u*u,f=d*u,g=e*l,b=g-l,m=-2*f+3*d,p=f-d,_=1-m,M=p-d+u;for(let x=0;x!==o;x++){let v=a[b+x+o],S=a[b+x+c]*h,E=a[g+x+o],y=a[g+x]*h;r[x]=_*v+M*S+m*E+p*y}return r}},ly=new Kt,pd=class extends Ll{interpolate_(e,t,i,s){let r=super.interpolate_(e,t,i,s);return ly.fromArray(r).normalize().toArray(r),r}},ni={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},pa={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},rm={9728:Xt,9729:jt,9984:Uc,9985:ra,9986:ir,9987:Pn},am={33071:Qn,33648:kr,10497:bs},Wu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},md={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Es={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},hy={CUBICSPLINE:void 0,LINEAR:Xs,STEP:qs},qu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function uy(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Js({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Vn})),n.DefaultMaterial}function cr(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Ni(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function dy(n,e,t){let i=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(i){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):n.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):n.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):n.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return i&&(n.morphAttributes.position=h),s&&(n.morphAttributes.normal=u),r&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function fy(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function py(n){let e,t=n.extensions&&n.extensions[dt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Xu(t.attributes):e=n.indices+":"+Xu(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+Xu(n.targets[i]);return e}function Xu(n){let e="",t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function gd(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function my(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var gy=new it,bd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new cy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);s=i&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&a<98?this.textureLoader=new Ja(this.options.manager):this.textureLoader=new no(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ea(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:i,userData:{}};return cr(r,o,s),Ni(o,s),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let s=i.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let s=e(t[i]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[dt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){i.load(ns.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){let t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=Wu[s.type],o=pa[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new vt(l,a,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=Wu[s.type],l=pa[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,b,m;if(f&&f!==u){let p=Math.floor(d/f),_="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,M=t.cache.get(_);M||(b=new l(o,p*f,s.count*f/h),M=new qr(b,f/h),t.cache.add(_,M)),m=new Xr(M,c,d%f/h,g)}else o===null?b=new l(s.count*c):b=new l(o,d,s.count*c),m=new vt(b,c,g);if(s.sparse!==void 0){let p=Wu.SCALAR,_=pa[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,v=new _(a[1],M,s.sparse.count*p),S=new l(a[2],x,s.sparse.count*c);o!==null&&(m=new vt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let E=0,y=v.length;E<y;E++){let w=v[E];if(m.setX(w,S[E*c]),c>=2&&m.setY(w,S[E*c+1]),c>=3&&m.setZ(w,S[E*c+2]),c>=4&&m.setW(w,S[E*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=i.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,i){let s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=rm[d.magFilter]||jt,h.minFilter=rm[d.minFilter]||Pn,h.wrapS=am[d.wrapS]||bs,h.wrapT=am[d.wrapT]||bs,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Xt&&h.minFilter!==jt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=i.getDependency("bufferView",a.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(b){let m=new tn(b);m.needsUpdate=!0,d(m)}),t.load(ns.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),Ni(u,a),u.userData.mimeType=a.mimeType||my(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,s){let r=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),r.extensions[dt.KHR_TEXTURE_TRANSFORM]){let o=i.extensions!==void 0?i.extensions[dt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[dt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,i=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+i.uuid,c=this.cache.get(o);c||(c=new Jr,Rn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(o,c)),i=c}else if(e.isLine){let o="LineBasicMaterial:"+i.uuid,c=this.cache.get(o);c||(c=new Yr,Rn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(o,c)),i=c}if(s||r||a){let o="ClonedMaterial:"+i.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=i.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return Js}loadMaterial(e){let t=this,i=this.json,s=this.extensions,r=i.materials[e],a,o={},c=r.extensions||{},l=[];if(c[dt.KHR_MATERIALS_UNLIT]){let u=s[dt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Xe(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Mn),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,qt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Tn);let h=r.alphaMode||qu.OPAQUE;if(h===qu.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===qu.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Vt&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Le(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Vt&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Vt){let u=r.emissiveFactor;o.emissive=new Xe().setRGB(u[0],u[1],u[2],Mn)}return r.emissiveTexture!==void 0&&a!==Vt&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,qt)),Promise.all(l).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Ni(u,r),t.associations.set(u,{materials:e}),r.extensions&&cr(s,u,r),u})}createUniqueName(e){let t=Lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,s=this.primitiveCache;function r(o){return i[dt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return om(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=py(l),u=s[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[dt.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=om(new bt,l,t),l.mode===ni.TRIANGLE_STRIP?d=d.then(f=>Hu(f,po)):l.mode===ni.TRIANGLE_FAN&&(d=d.then(f=>Hu(f,ca))),s[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,i=this.json,s=this.extensions,r=i.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?uy(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let b=h[f],m=a[f],p,_=l[f];if(m.mode===ni.TRIANGLES||m.mode===ni.TRIANGLE_STRIP||m.mode===ni.TRIANGLE_FAN||m.mode===void 0){let M=r.isSkinnedMesh===!0,x=b.hasAttribute("skinIndex")&&b.hasAttribute("skinWeight");M&&x===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=M&&x?new za(b,_):new At(b,_),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(m.mode===ni.LINES)p=new Va(b,_);else if(m.mode===ni.LINE_STRIP)p=new $s(b,_);else if(m.mode===ni.LINE_LOOP)p=new Ha(b,_);else if(m.mode===ni.POINTS)p=new Wa(b,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&fy(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Ni(p,r),m.extensions&&cr(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&cr(s,u[0],r),u[0];let d=new pn;r.extensions&&cr(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new en(mo.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Ii(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Ni(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){let r=s.pop(),a=s,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let d=new it;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Ga(o,c)})}loadAnimation(e){let t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],g=s.samplers[f.sampler],b=f.target,m=b.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,_=s.parameters!==void 0?s.parameters[g.output]:g.output;b.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",_)),l.push(g),h.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],b=u[3],m=u[4],p=[];for(let M=0,x=d.length;M<x;M++){let v=d[M],S=f[M],E=g[M],y=b[M],w=m[M];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();let C=i._createAnimationTracks(v,S,E,y,w);if(C)for(let D=0;D<C.length;D++)p.push(C[D])}let _=new Ya(r,void 0,p);return Ni(_,s),_})}createNodeMesh(e){let t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){let a=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){let t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,h=o.length;l<h;l++)a.push(i.getDependency("node",o[l]));let c=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,gy)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,g=u[0];h.pivot=new P().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new jr:l.length>1?h=new pn:l.length===1?h=l[0]:h=new Bt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Ni(h,r),r.extensions&&cr(i,h,r),r.matrix!==void 0){let u=new it;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],s=this,r=new pn;i.name&&(r.name=s.createUniqueName(i.name)),Ni(r,i),i.extensions&&cr(t,r,i);let a=i.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++){let d=c[h];d.parent!==null?r.add(nm(d)):r.add(d)}let l=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof Rn||d instanceof tn)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,i,s,r){let a=[],o=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}Es[r.path]===Es.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let h;switch(Es[r.path]){case Es.weights:h=Qi;break;case Es.rotation:h=es;break;case Es.translation:case Es.scale:h=vs;break;default:i.itemSize===1?h=Qi:h=vs;break}let u=s.interpolation!==void 0?hy[s.interpolation]:Xs,d=this._getArrayFromAccessor(i);for(let f=0,g=c.length;f<g;f++){let b=new h(c[f]+"."+Es[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(b),a.push(b)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=gd(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let s=this instanceof es?pd:Ll;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function by(n,e,t){let i=e.attributes,s=new Sn;if(i.POSITION!==void 0){let o=t.json.accessors[i.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new P(c[0],c[1],c[2]),new P(l[0],l[1],l[2])),o.normalized){let h=gd(pa[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new P,c=new P;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let b=gd(pa[d.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}n.boundingBox=s;let a=new mn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=a}function om(n,e,t){let i=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){n.setAttribute(o,c)})}for(let a in i){let o=md[a]||a.toLowerCase();o in n.attributes||s.push(r(i[a],o))}if(e.indices!==void 0&&!n.index){let a=t.getDependency("accessor",e.indices).then(function(o){n.setIndex(o)});s.push(a)}return lt.workingColorSpace!==Mn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${lt.workingColorSpace}" not supported.`),Ni(n,e),by(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?dy(n,e.targets,t):n})}var lm=(function(){var n="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),i=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?o(e):o(n),r,a=WebAssembly.instantiate(s,{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var _=new Uint8Array(p.length),M=0;M<p.length;++M){var x=p.charCodeAt(M);_[M]=x>96?x-97:x>64?x-39:x+4}for(var v=0,M=0;M<p.length;++M)_[v++]=_[M]<60?i[_[M]]:(_[M]-60)*64+_[++M];return _.buffer.slice(0,v)}function c(p,_,M,x,v,S,E){var y=p.exports.sbrk,w=x+3&-4,C=y(w*v),D=y(S.length),B=new Uint8Array(p.exports.memory.buffer);B.set(S,D);var X=_(C,x,v,D,S.length);if(X==0&&E&&E(C,w,v),M.set(B.subarray(C,C+x*v)),y(C-y(0)),X!=0)throw new Error("Malformed buffer data: "+X)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(p){var _={object:new Worker(p),pending:0,requests:{}};return _.object.onmessage=function(M){var x=M.data;_.pending-=x.count,_.requests[x.id][x.action](x.value),delete _.requests[x.id]},_}function g(p){for(var _="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(s)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+m.name+";"+c.toString()+m.toString(),M=new Blob([_],{type:"text/javascript"}),x=URL.createObjectURL(M),v=u.length;v<p;++v)u[v]=f(x);for(var v=p;v<u.length;++v)u[v].object.postMessage({});u.length=p,URL.revokeObjectURL(x)}function b(p,_,M,x,v){for(var S=u[0],E=1;E<u.length;++E)u[E].pending<S.pending&&(S=u[E]);return new Promise(function(y,w){var C=new Uint8Array(M),D=++d;S.pending+=p,S.requests[D]={resolve:y,reject:w},S.object.postMessage({id:D,count:p,size:_,source:C,mode:x,filter:v},[C.buffer])})}function m(p){var _=p.data;self.ready.then(function(M){if(!_.id)return self.close();try{var x=new Uint8Array(_.count*_.size);c(M,M.exports[_.mode],x,_.count,_.size,_.source,M.exports[_.filter]),self.postMessage({id:_.id,count:_.count,action:"resolve",value:x},[x.buffer])}catch(v){self.postMessage({id:_.id,count:_.count,action:"reject",value:v})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,_,M,x,v){c(r,r.exports.meshopt_decodeVertexBuffer,p,_,M,x,r.exports[l[v]])},decodeIndexBuffer:function(p,_,M,x){c(r,r.exports.meshopt_decodeIndexBuffer,p,_,M,x)},decodeIndexSequence:function(p,_,M,x){c(r,r.exports.meshopt_decodeIndexSequence,p,_,M,x)},decodeGltfBuffer:function(p,_,M,x,v,S){c(r,r.exports[h[v]],p,_,M,x,r.exports[l[S]])},decodeGltfBufferAsync:function(p,_,M,x,v){return u.length>0?b(p,_,M,h[x],l[v]):a.then(function(){var S=new Uint8Array(p*_);return c(r,r.exports[h[x]],S,p,_,M,r.exports[l[v]]),S})}}})();var ma={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var bi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},_y=new Ii(-1,1,1,-1,0,1),_d=class extends bt{constructor(){super(),this.setAttribute("position",new Tt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Tt([0,2,0,0,2,0],2))}},xy=new _d,ga=class{constructor(e){this._mesh=new At(xy,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,_y)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ba=class extends bi{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ot?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=rr.clone(e.uniforms),this.material=new Ot({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ga(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var vo=class extends bi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Dl=class extends bi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Nl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new Le);this._width=i.width,this._height=i.height,t=new Gt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:$t}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ba(ma),this.copyPass.material.blending=ei,this.timer=new Qs}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}vo!==void 0&&(a instanceof vo?i=!0:a instanceof Dl&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Fl=class extends bi{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Xe}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var hm={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Xe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ss=class n extends bi{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new Le(e.x,e.y):new Le(256,256),this.clearColor=new Xe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Gt(r,a,{type:$t,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Gt(r,a,{type:$t,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new Gt(r,a,{type:$t,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=hm;this.highPassUniforms=rr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ot({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Le(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=rr.clone(ma.uniforms),this.blendMaterial=new Ot({uniforms:this.copyUniforms,vertexShader:ma.vertexShader,fragmentShader:ma.fragmentShader,premultipliedAlpha:!0,blending:ro,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Xe,this._oldClearAlpha=1,this._basic=new Vt,this._fsQuad=new ga(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Le(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(i*i))/i);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],c=a+1<e?t[a+1]:0,l=o+c;s.push((a*o+(a+1)*c)/l),r.push(l)}return new Ot({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Le(.5,.5)},direction:{value:new Le(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Ot({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};ss.BlurDirectionX=new Le(1,0);ss.BlurDirectionY=new Le(0,1);var Ul={light:{bg:"#E4DBD2",exposure:1.55,bloom:{strength:.2,radius:0,threshold:4},bloomFactors:[1,0,0,0,0],bloomKernel:4,gemExposure:.8,shadow:.35,roughness:.04,sky:[.35,.8,1],tint:[1,1,1],boxes:1,edge:.5,flags:2,flagSoft:.55,flagOpacity:.6,horizon:.4,horizonW:.07,spots:12,metalGlow:{strength:.4,threshold:3,radius:.5,factors:[1,.8,.5,.25,0]},paveGlint:{maxD:2,thrK:1.5,kernel:2,strength:.15},lights:[[50,50,2.8,[0,44,0]],[9,60,3.6,[-40,4,16]],[9,60,3.4,[40,4,4]],[70,8,3.2,[0,16,-40]],[28,32,3.2,[24,18,32]],[60,8,2.4,[0,-6,42]],[20,40,3,[-30,10,30]],[2.5,60,7,[-22,10,36]],[2.5,60,7,[30,8,-28]],[60,2.5,6,[0,-2,-44]],[2.5,50,6,[44,6,-6]]],metals:{vang:[1,.68,.27],"vang-trang":[.82,.82,.83],"vang-hong":[1,.62,.38]},metalDeep:{"vang-hong":2.6},metalDeepR:.4},dark:{bg:null,exposure:1,shadow:.8,roughness:.16,bloom:{strength:.27,radius:.05,threshold:30},sky:[.02,.22,.6],tint:[1,.95,.88],boxes:1,flags:1,spots:18,metals:{vang:[1,.71,.33],"vang-trang":[.86,.86,.85],"vang-hong":[.98,.64,.52]}}},pw=Ul.light.metals,yo=[1,.97,.93],um={sky:[.2,.32,.55],tint:[1,.99,.97],boxes:1.1,flags:1,spots:35,spotSize:1.1,spotPh:[.15,2.1],spotK:[30,30],lights:[[46,46,1.8,[0,44,0],yo],[12,60,5,[-40,4,16],yo],[12,60,4.2,[40,4,4],yo],[70,10,3,[0,16,-40],yo],[26,30,3.4,[24,18,32],yo],[60,8,1.6,[0,-6,42],[1,.94,.86]],[20,20,0,[0,40,0]]],ring:{n:24,w:3,h:34,k:4},panels:70,panelSize:4,panelK:[2.5,3]},xd={moissanite:{ior:2.65,disp:.052},"lab-diamond":{ior:2.417,disp:.0154},"natural-diamond":{ior:2.417,disp:.0154},sapphire:{ior:2.417,disp:.006,spark:1,reflK:.5,reflHi:1.5,absorb:[2.77,1.43,.215],gain:1.2},ruby:{ior:2.417,disp:.006,spark:1,reflK:.5,reflHi:1.5,absorb:[.044,5.8,2.07],gain:1},emerald:{ior:2.417,disp:.006,spark:1,reflK:.5,reflHi:1.5,absorb:[21.7,.96,1.77],gain:1.93},"yellow-sapphire":{ior:2.417,disp:.006,spark:.6,reflK:.5,reflHi:1.5,absorb:[.18,.46,26.2],gain:2.31},"moissanite-vang":{ior:2.417,disp:.006,spark:.6,reflK:.5,reflHi:1.5,absorb:[.18,.62,24],gain:2.3},"moissanite-xanh":{ior:2.417,disp:.006,spark:1,reflK:.5,reflHi:1.5,absorb:[24,3.3,4.4],gain:1.5}},vy={play:"T\u1EF1 xoay",pause:"D\u1EEBng xoay",reset:"V\u1EC1 g\xF3c nh\xECn ban \u0111\u1EA7u",zoomIn:"Ph\xF3ng to",zoomOut:"Thu nh\u1ECF",tilt:"Xoay ch\xE9o (th\u1EA5y c\u1EA3 m\u1EB7t tr\xEAn vi\xEAn \u0111\xE1)",tiltOff:"V\u1EC1 xoay ngang",full:"To\xE0n m\xE0n h\xECnh",exitFull:"Tho\xE1t to\xE0n m\xE0n h\xECnh",hint:"K\xE9o \u0111\u1EC3 xoay \xB7 Ch\u1EE5m ho\u1EB7c cu\u1ED9n \u0111\u1EC3 ph\xF3ng to",loading:"\u0110ang t\u1EA3i m\xF4 h\xECnh 3D",error:"Ch\u01B0a t\u1EA3i \u0111\u01B0\u1EE3c m\xF4 h\xECnh 3D. B\u1EA1n th\u1EED t\u1EA3i l\u1EA1i trang nh\xE9.",metal:"M\xE0u v\xE0ng",stage:"M\xF4 h\xECnh 3D \u2014 k\xE9o \u0111\u1EC3 xoay"},yy={play:'<path d="M8 5.5v13l10.5-6.5z"/>',pause:'<path d="M8.5 5.5v13M15.5 5.5v13"/>',reset:'<path d="M4.5 12a7.5 7.5 0 1 0 2.2-5.3"/><path d="M4.5 4.5v4h4"/>',plus:'<path d="M12 5.5v13M5.5 12h13"/>',minus:'<path d="M5.5 12h13"/>',full:'<path d="M4.5 9V4.5H9M15 4.5h4.5V9M19.5 15v4.5H15M9 19.5H4.5V15"/>',tilt:'<path d="M3.5 15.5c2-5.5 9.5-10 16.5-9.5"/><path d="M17.4 3.8l2.8 2.2-2.3 2.6"/><path d="M20.5 8.5c-2 5.5-9.5 10-16.5 9.5"/><path d="M6.6 20.2 3.8 18l2.3-2.6"/><path d="M10.4 12 12 10.2 13.6 12 12 13.8z"/>',exit:'<path d="M9 4.5V9H4.5M19.5 9H15V4.5M15 19.5V15h4.5M4.5 15H9v4.5"/>'},Rs=n=>`<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${yy[n]}</svg>`;function dm(n=.35){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d"),i=t.createImageData(128,128);for(let s=0;s<128;s++)for(let r=0;r<128;r++){let a=Math.abs(r-63.5)/64,o=Math.abs(s-63.5)/64,c=Math.max(0,Math.min(1,(1-a)/n)*Math.min(1,(1-o)/n))**1.6,l=(s*128+r)*4;i.data[l]=i.data[l+1]=i.data[l+2]=255*c,i.data[l+3]=255}return t.putImageData(i,0,0),new _s(e)}function vd(n){let e=new Wr,t=50,[i,s,r]=n.sky,a=n.tint,o=new Ys(t,64,32),c=o.attributes.position,l=new Float32Array(c.count*3);for(let g=0;g<c.count;g++){let b=c.getY(g)/t,m=b<0?i+(s-i)*Math.pow(1+b,2.2):s+(r-s)*Math.pow(b,.7);n.horizon&&(m*=1-(1-n.horizon)*Math.exp(-(((b+.06)/(n.horizonW??.07))**2))),l.set([m*a[0],m*a[1],m*a[2]],g*3)}o.setAttribute("color",new vt(l,3)),e.add(new At(o,new Vt({vertexColors:!0,side:ln})));let h=dm(n.edge??.35),u=(g,b,m,[p,_,M],x=[1,.97,.93],v=!0)=>{let S=m*n.boxes,E=new At(new Ji(g,b),new Vt({map:v?h:null,color:new Xe(x[0]*S,x[1]*S,x[2]*S),side:Tn}));E.position.set(p,_,M),E.lookAt(0,0,0),e.add(E)};if(n.lights?n.lights.forEach(([g,b,m,p,_])=>u(g,b,m,p,_||[1,1,1],m>0)):(u(46,46,3.2,[0,44,0]),u(12,60,5,[-40,4,16]),u(12,60,4.2,[40,4,4]),u(70,10,3,[0,16,-40]),u(26,30,3.4,[24,18,32]),u(60,8,1.6,[0,-6,42],[1,.94,.86])),n.flags){let g=n.flagW||1,b=n.flagSoft?dm(n.flagSoft):null,m=(p,_,[M,x,v])=>{if(!b)return u(p,_,0,[M,x,v],[0,0,0],!1);let S=new At(new Ji(p,_),new Vt({color:0,alphaMap:b,transparent:!0,opacity:n.flagOpacity??1,depthWrite:!1,side:Tn}));S.position.set(M,x,v),S.lookAt(0,0,0),S.renderOrder=2,e.add(S)};m(10*g,44,[-30,6,-32]),m(10*g,44,[33,6,-26]),m(14*g,40,[-6,4,44]),n.flags>1&&(m(8*g,50,[44,2,22]),m(8*g,50,[-44,2,-8]),m(60,7*g,[0,30,-30]))}let d=7,f=()=>(d=d*16807%2147483647)/2147483647;for(let g=0;g<n.spots;g++){let[b,m]=n.spotPh||[.2,1.35],p=f()*Math.PI*2,_=b+f()*(m-b);u(n.spotSize||1.6,n.spotSize||1.6,(n.spotK?.[0]??14)+f()*(n.spotK?.[1]??10),[Math.cos(p)*Math.sin(_)*36,Math.cos(_)*36,Math.sin(p)*Math.sin(_)*36])}if(n.ring){let{n:g,w:b,h:m,k:p,y:_=8,r:M=42}=n.ring;for(let x=0;x<g;x++){let v=(x+.5)/g*Math.PI*2;u(b,m,p,[Math.cos(v)*M,_,Math.sin(v)*M])}}for(let g=0;g<(n.panels||0);g++){let[b,m]=n.panelPh||[.1,1.9],p=f()*Math.PI*2,_=b+f()*(m-b),M=n.panelSize*(.6+f()*.8);u(M,M,n.panelK[0]+f()*n.panelK[1],[Math.cos(p)*Math.sin(_)*40,Math.cos(_)*40,Math.sin(p)*Math.sin(_)*40])}return e}var fm=180;function My(n){let e=n.attributes.position,t=e.count/3;n.computeBoundingSphere();let i=n.boundingSphere.radius,s=new P,r=new P,a=new P,o=new P,c=.99995,l;for(let h=0;h<6;h++,c=1-(1-c)*3){l=[];for(let u=0;u<t;u++){s.fromBufferAttribute(e,u*3),r.fromBufferAttribute(e,u*3+1),a.fromBufferAttribute(e,u*3+2),o.subVectors(r,s).cross(a.clone().sub(s));let d=o.length();if(d<1e-9*i*i)continue;o.divideScalar(d);let f=o.dot(s);l.some(g=>g.x*o.x+g.y*o.y+g.z*o.z>c&&Math.abs(g.w-f)<.002*i)||l.push(new yt(o.x,o.y,o.z,f))}if(l=l.filter(u=>{for(let d=0;d<e.count;d++)if(u.x*e.getX(d)+u.y*e.getY(d)+u.z*e.getZ(d)-u.w>.004*i)return!1;return!0}),l.length<=fm)break}return l.slice(0,fm)}function Sy(n,e,t,i=Vn,s=1){return new Ot({side:i,defines:{NPLANES:e.length,BOUNCES:t.bounces,CHROMA:t.chroma},uniforms:{envMap:{value:n},planes:{value:e},nPlanes:{value:e.length},nBounces:{value:t.bounces},ior:{value:2.417},disp:{value:.044},gain:{value:1.35},ex:{value:1},lod:{value:1.25},absorb:{value:new P},gsize:{value:s},spark:{value:0},reflK:{value:1},reflHi:{value:0},pave:{value:0}},vertexShader:`
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
      }`})}function Ty(n){let e=n.attributes.position,t=n.index,i=t?t.count:e.count,s=new Float32Array(i*3),r=new P;for(let c=0;c<i;c++)r.fromBufferAttribute(e,t?t.getX(c):c),s.set([r.x,r.y,r.z],c*3);let a=0;for(let c=0;c<s.length;c+=9)a+=s[c]*(s[c+4]*s[c+8]-s[c+5]*s[c+7])-s[c+1]*(s[c+3]*s[c+8]-s[c+5]*s[c+6])+s[c+2]*(s[c+3]*s[c+7]-s[c+4]*s[c+6]);if(a<0)for(let c=0;c<s.length;c+=9)for(let l=0;l<3;l++){let h=s[c+3+l];s[c+3+l]=s[c+6+l],s[c+6+l]=h}let o=new bt;return o.setAttribute("position",new vt(s,3)),o.computeVertexNormals(),o}function wy(){let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(0,0,0,0.85)"),t.addColorStop(.45,"rgba(0,0,0,0.35)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),new _s(n)}function pm(n,e={}){let t={...vy,...e.labels||{}},i=e.metals||Object.keys(Ul.light.metals),s=e.swatches||{vang:"#D9B35E","vang-trang":"#E4E2DC","vang-hong":"#D9A08A"},r=e.metalNames||{vang:"V\xE0ng","vang-trang":"V\xE0ng tr\u1EAFng","vang-hong":"V\xE0ng h\u1ED3ng"},a=Ul[e.theme]?e.theme:"light",o={...Ul[a],...e.look||{}},c=Math.min(devicePixelRatio||1,2),l=Math.min(c,e.minPR??((devicePixelRatio||1)>=2?1.5:1)),h=c;n.classList.add("tg3d",`tg3d-${a}`),n.innerHTML=`
    <div class="tg3d-canvas" role="img" aria-label="${t.stage}"></div>
    <div class="tg3d-load" data-load><span>${t.loading}</span><i><b data-bar></b></i></div>
    <p class="tg3d-hint" data-hint>${t.hint}</p>
    <div class="tg3d-tools" role="toolbar" aria-label="3D">
      <button type="button" data-act="play" aria-pressed="true" title="${t.pause}" aria-label="${t.pause}">${Rs("pause")}</button>
      <button type="button" data-act="tilt" aria-pressed="false" title="${t.tilt}" aria-label="${t.tilt}">${Rs("tilt")}</button>
      <button type="button" data-act="reset" title="${t.reset}" aria-label="${t.reset}">${Rs("reset")}</button>
      <button type="button" data-act="in" title="${t.zoomIn}" aria-label="${t.zoomIn}">${Rs("plus")}</button>
      <button type="button" data-act="out" title="${t.zoomOut}" aria-label="${t.zoomOut}">${Rs("minus")}</button>
      <button type="button" data-act="full" title="${t.full}" aria-label="${t.full}">${Rs("full")}</button>
    </div>
    <div class="tg3d-sw" role="radiogroup" aria-label="${t.metal}">${i.map(pe=>`<button type="button" role="radio" data-metal="${pe}" aria-checked="false" title="${r[pe]}" aria-label="${r[pe]}"><i style="background:${s[pe]}"></i></button>`).join("")}</div>`;let u=pe=>n.querySelector(pe),d=u(".tg3d-canvas"),f=new wl({antialias:!0,alpha:!0,powerPreference:"high-performance"});f.setPixelRatio(h),f.outputColorSpace=qt,f.toneMapping=Hn,d.appendChild(f.domElement);let g=new Wr,b=new en(28,1,.5,2e3),m=new Nl(f,new Gt(1,1,{type:$t,samples:4}));m.setPixelRatio(h),m.addPass(new Fl(g,b));let p=new ss(new Le(256,256),.5,.35,4);Object.assign(p.blendMaterial,{blending:er,blendEquation:ti,blendSrc:wn,blendDst:wn,blendSrcAlpha:tr,blendDstAlpha:wn}),p.materialHighPassFilter.fragmentShader=`
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
    }`,p.materialHighPassFilter.uniforms.metalBloom={value:0},p.materialHighPassFilter.uniforms.metalThr={value:12},p.materialHighPassFilter.uniforms.paveOn={value:0},p.materialHighPassFilter.uniforms.sideOn={value:0},p.materialHighPassFilter.needsUpdate=!0,p.compositeMaterial.uniforms.bloomFactors.value=[1,.4,.12,.03,0],m.addPass(p);let _=new ss(new Le(256,256),0,0,4);Object.assign(_.blendMaterial,{blending:er,blendEquation:ti,blendSrc:wn,blendDst:wn,blendSrcAlpha:tr,blendDstAlpha:wn}),_.materialHighPassFilter.fragmentShader=`
    uniform sampler2D tDiffuse; uniform float luminosityThreshold; uniform float smoothWidth; uniform float capT; varying vec2 vUv;
    void main() {
      vec4 t = texture2D(tDiffuse, vUv); vec3 c = t.rgb;
      float peak = max(c.r, max(c.g, c.b));
      float small = clamp(t.a - 1.0, 0.0, 1.0) * (1.0 - clamp(t.a - 2.0, 0.0, 1.0));
      float a = small * smoothstep(luminosityThreshold, luminosityThreshold + max(smoothWidth, luminosityThreshold * 0.5), peak);
      vec3 w = mix(c, vec3(peak), 0.8);
      gl_FragColor = vec4(min(w, vec3(capT)) * a, 1.0);
    }`,_.materialHighPassFilter.uniforms.capT={value:12},_.materialHighPassFilter.needsUpdate=!0,_.compositeMaterial.uniforms.bloomFactors.value=[1,0,0,0,0],_.nMips=1,_.enabled=!1,m.addPass(_);let M=new ss(new Le(256,256),0,0,4);Object.assign(M.blendMaterial,{blending:er,blendEquation:ti,blendSrc:wn,blendDst:wn,blendSrcAlpha:tr,blendDstAlpha:wn}),M.materialHighPassFilter.fragmentShader=`
    uniform sampler2D tDiffuse; uniform float luminosityThreshold; uniform float smoothWidth; uniform float capT; varying vec2 vUv;
    void main() {
      vec4 t = texture2D(tDiffuse, vUv); vec3 c = t.rgb;
      float peak = max(c.r, max(c.g, c.b));
      float a = clamp(t.a - 2.0, 0.0, 1.0) * (1.0 - clamp(t.a - 3.0, 0.0, 1.0)) * smoothstep(luminosityThreshold, luminosityThreshold + max(smoothWidth, luminosityThreshold * 0.5), peak);
      vec3 w = mix(c, vec3(peak), 0.8);
      gl_FragColor = vec4(min(w, vec3(capT)) * a, 1.0);
    }`,M.materialHighPassFilter.uniforms.capT={value:12},M.materialHighPassFilter.needsUpdate=!0,M.compositeMaterial.uniforms.bloomFactors.value=[1,0,0,0,0],M.nMips=1,M.enabled=!1,m.addPass(M);let x=new ss(new Le(256,256),0,.5,6);Object.assign(x.blendMaterial,{blending:er,blendEquation:ti,blendSrc:wn,blendDst:wn,blendSrcAlpha:tr,blendDstAlpha:wn}),x.materialHighPassFilter.fragmentShader=`
    uniform sampler2D tDiffuse; uniform float luminosityThreshold; uniform float smoothWidth; varying vec2 vUv;
    void main() {
      vec4 t = texture2D(tDiffuse, vUv); vec3 c = t.rgb;
      float peak = max(c.r, max(c.g, c.b));
      float isMetal = step(0.5, t.a) * (1.0 - clamp(t.a - 1.0, 0.0, 1.0));
      float a = isMetal * smoothstep(luminosityThreshold, luminosityThreshold * 1.8, peak);
      gl_FragColor = vec4(min(c, vec3(luminosityThreshold * 2.5)) * a, 1.0); // gi\u1EEF m\xE0u v\xE0ng trong qu\u1EA7ng
    }`,x.materialHighPassFilter.needsUpdate=!0,x.enabled=!1,x.blendMaterial.colorWrite=!1,m.addPass(x);let v=new ba(new Ot({uniforms:{tDiffuse:{value:null},exposure:{value:1},tGlow:{value:null},glowK:{value:0}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
      }`}));m.addPass(v),v.uniforms.tGlow.value=x.renderTargetsHorizontal[0].texture;let S=()=>m.render(),E=[],y=new gn({metalness:1,roughness:.16,envMapIntensity:1}),w={deep:{value:0},deepR:{value:.6}},C=0,D=pe=>Te=>{Object.assign(Te.uniforms,pe),Te.fragmentShader=Te.fragmentShader.replace("#include <common>",`#include <common>
uniform float deep; uniform float deepR;`).replace("#include <opaque_fragment>",`
      if (deep > 0.0) {
        float lum = dot(outgoingLight, vec3(0.2126, 0.7152, 0.0722));
        vec3 cn = diffuseColor.rgb / max(max(diffuseColor.r, diffuseColor.g), max(diffuseColor.b, 1e-4));
        outgoingLight *= pow(cn, vec3(deep * (1.0 - smoothstep(0.0, deepR, lum))));
      }
      #include <opaque_fragment>`)};y.onBeforeCompile=D(w);let B=new Xe,X={deep:{value:0},deepR:{value:.6}},k=new Map,$=pe=>{let Te=pe.userData.fin;pe.roughness=Math.max(y.roughness,{satin:o.satinRough??.34,brush:o.brushRough??.2}[Te]??0),pe.envMapIntensity={satin:o.satinEnv??1,brush:o.brushEnv??1}[Te]??1,pe.clearcoat=y.clearcoat};function Q(pe){let Te=/:satin/.test(pe)?"satin":/:brush/.test(pe)?"brush":"",Ze=/:alt/.test(pe),xt=/:shade/.test(pe);if(!Te&&!Ze&&!xt)return y;let ht=`${Te}|${Ze}|${xt}`;if(!k.has(ht)){let Je=y.clone();Je.color=Ze?B:y.color;let ut=Ze?D(X):y.onBeforeCompile;Je.onBeforeCompile=ut,xt&&(Je.onBeforeCompile=mt=>{ut(mt),mt.fragmentShader=mt.fragmentShader.replace("#include <opaque_fragment>",`outgoingLight *= ${(o.shade??.22).toFixed(3)};
#include <opaque_fragment>`)},Je.customProgramCacheKey=()=>`shade|${Ze}`),Je.userData.fin=Te,$(Je),k.set(ht,Je)}return k.get(ht)}let z=[],J=pe=>{y.onBeforeCompile(pe),pe.fragmentShader=pe.fragmentShader.replace("#include <opaque_fragment>",`outgoingLight *= 0.17;
#include <opaque_fragment>`)};function G(pe){let Te=y.clone();return Te.color=y.color,Te.onBeforeCompile=J,Te.customProgramCacheKey=()=>"engrave",Object.assign(Te,{roughness:.85,alphaMap:pe||null,bumpMap:pe||null,bumpScale:-6,transparent:!0,alphaTest:.04,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),z.push(Te),Te}let q=new da(f),F=new or(512,{type:$t,generateMipmaps:!0,minFilter:Pn}),ce=null,U=pe=>(ce&&pe!=="center"?ce:F).texture,he=null,oe=null,xe=pe=>{pe.uniforms.pave.value=pe.userData.small&&o.paveGlint?.strength>0?1:o.sideGlint?.strength>0?pe.userData.role!=="center"?2:3:0,pe.uniforms.envMap.value=U(pe.userData.role),pe.uniforms.ex.value=(o.gemExposure??1)/o.exposure,pe.uniforms.gain.value=(o.gemGain??1.35)*(xd[me[pe.userData.role||"center"]]?.gain??1),pe.uniforms.lod.value=o.gemLod??.7};function I(){let pe=vd(o);he?.dispose(),he=q.fromScene(pe,o.envSoft??0),g.environment=he.texture;let Te=vd({...um,...o.gemStudio||{}});new Zs(.1,200,F).update(f,Te);let Ze=null;o.gemStudioRest?(ce||(ce=new or(512,{type:$t,generateMipmaps:!0,minFilter:Pn})),Ze=vd({...um,...o.gemStudio||{},...o.gemStudioRest}),new Zs(.1,200,ce).update(f,Ze)):ce&&(ce.dispose(),ce=null);for(let ut of[pe,Te,Ze].filter(Boolean))ut.traverse(mt=>{mt.geometry?.dispose(),mt.material?.map?.dispose(),mt.material?.dispose()});v.uniforms.exposure.value=o.exposure,y.roughness=o.roughness??.16,y.clearcoat=o.clearcoat??0,y.clearcoatRoughness=o.clearcoatRoughness??.03;for(let ut of k.values())$(ut);oe&&(oe.opacity=o.shadow),Object.assign(p,{strength:o.bloom?.strength??0,radius:o.bloom?.radius??.1,threshold:o.bloom?.threshold??30});let xt=o.metalGlow;if(x.enabled=!!(xt&&xt.strength>0),v.uniforms.glowK.value=x.enabled?1:0,xt&&(Object.assign(x,{strength:xt.strength,radius:xt.radius??.5,threshold:xt.threshold??4}),xt.factors&&(x.compositeMaterial.uniforms.bloomFactors.value=xt.factors)),p.materialHighPassFilter.uniforms.metalBloom.value=o.metalBloom??0,p.materialHighPassFilter.uniforms.metalThr.value=o.metalThr??12,o.bloomFactors&&(p.compositeMaterial.uniforms.bloomFactors.value=o.bloomFactors),p.enabled=p.strength>0,p.nMips=p.compositeMaterial.uniforms.bloomFactors.value.slice(1).every(ut=>!ut)?1:5,o.bloomKernel&&p._k0!==o.bloomKernel){let ut=p.separableBlurMaterials[0],mt=p._getSeparableBlurMaterial(o.bloomKernel);mt.uniforms.invSize.value.copy(ut.uniforms.invSize.value),p.separableBlurMaterials[0]=mt,ut.dispose(),p._k0=o.bloomKernel}let ht=o.paveGlint;if(_.enabled=!!(ht&&ht.strength>0&&p.enabled),p.materialHighPassFilter.uniforms.paveOn.value=_.enabled?1:0,ht){Object.assign(_,{strength:ht.strength,radius:0,threshold:p.threshold*(ht.thrK??1)}),_.materialHighPassFilter.uniforms.capT.value=p.threshold*3;let ut=ht.kernel??o.bloomKernel??6;if(_._k0!==ut){let mt=_.separableBlurMaterials[0],On=_._getSeparableBlurMaterial(ut);On.uniforms.invSize.value.copy(mt.uniforms.invSize.value),_.separableBlurMaterials[0]=On,mt.dispose(),_._k0=ut}}let Je=o.sideGlint;if(M.enabled=!!(Je&&Je.strength>0&&p.enabled),p.materialHighPassFilter.uniforms.sideOn.value=M.enabled?1:0,Je){Object.assign(M,{strength:Je.strength,radius:0,threshold:p.threshold*(Je.thrK??1)}),M.materialHighPassFilter.uniforms.capT.value=p.threshold*3;let ut=Je.kernel??o.bloomKernel??6;if(M._k0!==ut){let mt=M.separableBlurMaterials[0],On=M._getSeparableBlurMaterial(ut);On.uniforms.invSize.value.copy(mt.uniforms.invSize.value),M.separableBlurMaterials[0]=On,mt.dispose(),M._k0=ut}}for(let ut of E)xe(ut)}I();let N=new Xe,L=new pn;g.add(L);let V=new Cl(b,f.domElement);Object.assign(V,{enableDamping:!0,dampingFactor:.08,enablePan:!1,rotateSpeed:.8,zoomSpeed:.8,autoRotate:!0,autoRotateSpeed:1.4});let ie=()=>{f.domElement.style.touchAction=e.touchAll||n.classList.contains("is-full")||document.fullscreenElement===n?"none":"pan-y"};ie();let K=null,se=!0,ee=0,_e=!0,Me=!1,de=!1,me={center:e.gem||"lab-diamond",accent:e.accentGem||e.gem||"lab-diamond",side:e.sideGem||e.accentGem||e.gem||"lab-diamond",inner:e.innerGem||"ruby"},Re=new Qs,ze=null;function be(pe,{keepView:Te=!1}={}){for(let $e of[...L.children])L.remove($e),$e.traverse?.(Ut=>{Ut.isInstancedMesh||Ut===ze?(Ut.geometry?.dispose(),Ut.material!==y&&Ut.material?.dispose?.()):Ut.isMesh&&Ut.userData.ownGeo&&Ut.geometry?.dispose()});E.length=0;for(let $e of z.splice(0))$e.alphaMap?.dispose(),$e.dispose();pe.traverse($e=>{$e.name&&$e.name.includes("~")&&($e.name=$e.name.replace(/~/g,":"))}),pe.updateMatrixWorld(!0);let Ze=new Map;pe.traverse($e=>{$e.isMesh&&(/gem|diamond|stone/i.test(`${$e.name} ${$e.material?.name}`)?(Ze.has($e.geometry)||Ze.set($e.geometry,[]),Ze.get($e.geometry).push($e)):$e.material=/engrave/.test($e.name)?G($e.userData.alphaMap):Q($e.name))});let xt=new Sn().setFromObject(pe);for(let[$e,Ut]of Ze){Ut.forEach(re=>re.parent.remove(re));let Bi=/gem:accent/i.test(Ut[0].name)?"accent":/gem:side/i.test(Ut[0].name)?"side":/gem:inner/i.test(Ut[0].name)?"inner":"center",Ti=Ty($e),Do=My(Ti),A=Ti.boundingSphere.radius*2,W=re=>A*re.matrixWorld.getMaxScaleOnAxis()<=(o.paveGlint?.maxD??0);for(let re of[!1,!0])for(let Z of[!1,!0]){let Y=Ut.filter(Pe=>Pe.matrixWorld.determinant()<0===re&&W(Pe)===Z);if(!Y.length)continue;let Ie=Sy(U(Bi),Do,{bounces:6,chroma:3},re?ln:Vn,A);Ie.userData.role=Bi,Ie.userData.small=Z;let Fe=new Ks(Ti,Ie,Y.length);Y.forEach((Pe,Be)=>Fe.setMatrixAt(Be,Pe.matrixWorld)),Fe.renderOrder=1,Fe.computeBoundingSphere(),Fe.computeBoundingBox(),xt.union(Fe.boundingBox),L.add(Fe),E.push(Ie)}}L.add(pe);let ht=xt.getSize(new P),Je=xt.getCenter(new P);ze=new At(new Ji(ht.x*1.5,Math.max(ht.z,ht.x*.5)*1.6),oe=new Vt({map:wy(),transparent:!0,depthWrite:!1,opacity:o.shadow})),ze.rotation.x=-Math.PI/2,ze.position.set(Je.x,xt.min.y-.02,Je.z),L.add(ze);let ut=xt.getBoundingSphere(new mn),mt=b.fov*Math.PI/360,On=n.clientWidth&&n.clientHeight?n.clientWidth/n.clientHeight:b.aspect,ki=e.fitWidth?Math.min(mt,Math.atan(Math.tan(mt)*On)):mt,kn=ut.radius/Math.sin(ki)*(e.fit||1.08),ci=new P(...e.view||[.62,.32,1]).normalize(),ks=!K,Bs=K?.dist0;if(K={target:ut.center.clone(),pos:ut.center.clone().addScaledVector(ci,kn*(e.start??1.33)),theta0:Math.atan2(ci.x,ci.z),dist0:Bs},ks||!Te)V.target.copy(K.target),b.position.copy(K.pos);else{let $e=b.position.clone().sub(V.target);e.rescale&&K.dist0&&$e.multiplyScalar(kn/K.dist0),V.target.copy(K.target),b.position.copy(K.target).add($e)}K.dist0=kn,V.minDistance=kn*.3,V.maxDistance=kn*2.2,b.near=kn/50,b.far=kn*20,b.updateProjectionMatrix(),qe(De||e.metal||i[0],!0),Ve(),ks&&(u("[data-load]").hidden=!0,n.classList.add("is-ready")),ve(),S()}e.object?requestAnimationFrame(()=>be(e.object)):new Pl().setMeshoptDecoder(lm).load(e.src,Te=>be(Te.scene),Te=>{Te.total&&(u("[data-bar]").style.width=`${Math.round(Te.loaded/Te.total*100)}%`)},()=>{u("[data-load]").innerHTML=`<span>${t.error}</span>`});let Ue=0,O=0,ct=c;function Ye(pe){if(de)return;Re.update(pe);let Te=Math.min(Re.getDelta(),.1),Ze=se&&performance.now()>=ee;V.autoRotate=Ze&&!R,Ze&&R&&!ae&&le(Te);let xt=V.update(Te),ht=!y.color.equals(N)||w.deep.value!==C;if(ht){let mt=Math.min(1,Te*8);y.color.lerp(N,mt),w.deep.value+=(C-w.deep.value)*mt,Math.abs(y.color.r-N.r)+Math.abs(y.color.g-N.g)+Math.abs(y.color.b-N.b)<.002&&(y.color.copy(N),w.deep.value=C)}fe(Te);let Je=xt||Ze||ht||ae;if(Je&&(h!==ct&&ye(ct),Ue+=Te,O++,O>=20)){let mt=Ue/O;Ue=O=0,mt>1/28&&ct>l?ye(ct=Math.max(l,ct-.25)):mt<1/50&&ct<c&&ye(ct=Math.min(c,ct+.25))}let ut=_e&&!document.hidden&&(Je||performance.now()<ee);!ut&&h<c&&ye(c),S(),ut?requestAnimationFrame(Ye):Me=!1}let R=!!e.tilt,T=new ys,j=new P,te={mid:37.5,amp:27.5,phase:125};function le(pe){j.copy(b.position).sub(V.target),T.setFromVector3(j),T.theta-=2*Math.PI/60*V.autoRotateSpeed*pe;let Te=te.mid+te.amp*Math.sin(T.theta-K.theta0-te.phase*Math.PI/180);T.phi+=(Math.PI/2-Te*Math.PI/180-T.phi)*Math.min(1,pe*.8),b.position.copy(V.target).add(j.setFromSpherical(T)),b.lookAt(V.target)}function ye(pe){h=Math.max(l,Math.min(c,pe)),f.setPixelRatio(h),m.setPixelRatio(h),Ue=O=0}function ve(){!Me&&K&&(Me=!0,Re.reset(),requestAnimationFrame(Ye))}let ae=null;function fe(pe){if(!ae)return;ae.t=Math.min(1,ae.t+pe/ae.d);let Te=1-Math.pow(1-ae.t,3);b.position.lerpVectors(ae.p0,ae.p1,Te),V.target.lerpVectors(ae.t0,ae.t1,Te),ae.t>=1&&(ae=null)}let we=(pe,Te,Ze=.6)=>{ae={t:0,d:Ze,p0:b.position.clone(),p1:pe,t0:V.target.clone(),t1:Te},ve()},Ge=pe=>{let Te=b.position.clone().sub(V.target),Ze=Math.min(V.maxDistance,Math.max(V.minDistance,Te.length()*pe));we(V.target.clone().add(Te.setLength(Ze)),V.target.clone(),.35)};if(V.addEventListener("start",()=>{ee=1/0,ae=null,u("[data-hint]").classList.add("off"),ve()}),e.holdPan){let pe=e.holdMs??3e3,Te=8,Ze=f.domElement,xt=Ze.ownerDocument,ht=document.createElement("div");ht.className="tg3d-hold",ht.style.setProperty("--hold",`${pe-250}ms`),ht.innerHTML=`<svg viewBox="0 0 44 44" aria-hidden="true"><circle cx="22" cy="22" r="18"/><circle class="p" cx="22" cy="22" r="18"/><path class="mv" d="M22 13v18M13 22h18M22 13l-3 3M22 13l3 3M22 31l-3-3M22 31l3-3M13 22l3-3M13 22l3 3M31 22l-3-3M31 22l-3 3"/></svg><span>${t.pan||"K\xE9o \u0111\u1EC3 d\u1ECBch khung"}</span>`,n.appendChild(ht);let Je=null,ut=!1,mt=new Set,On=new P,ki=new P,kn=()=>{ht.classList.remove("show","fill","on"),n.classList.remove("is-pan")},ci=()=>{Je&&(clearTimeout(Je.t0),clearTimeout(Je.t1),Je=null),ut||kn()},ks=($e,Ut)=>{let Bi=2*b.position.distanceTo(V.target)*Math.tan(b.fov*Math.PI/360)/Ze.clientHeight;On.setFromMatrixColumn(b.matrix,0),ki.setFromMatrixColumn(b.matrix,1);let Ti=On.multiplyScalar(-$e*Bi).addScaledVector(ki,Ut*Bi);b.position.add(Ti),V.target.add(Ti),S()};Ze.addEventListener("pointerdown",$e=>{if(mt.add($e.pointerId),mt.size>1){ci();return}let Ut=n.getBoundingClientRect(),Bi=$e.clientX-Ut.left,Ti=$e.clientY-Ut.top;Je={id:$e.pointerId,x:$e.clientX,y:$e.clientY,lx:$e.clientX,ly:$e.clientY},ht.style.left=`${Bi}px`,ht.style.top=`${Ti}px`,Je.t0=setTimeout(()=>{ht.classList.add("show"),requestAnimationFrame(()=>ht.classList.add("fill"))},250),Je.t1=setTimeout(()=>{Je&&(ut=!0,V.enabled=!1,ht.classList.add("on"),n.classList.add("is-pan"),navigator.vibrate?.(15))},pe)}),xt.addEventListener("pointermove",$e=>{if(!(!Je||$e.pointerId!==Je.id)){if(ut){ks($e.clientX-Je.lx,$e.clientY-Je.ly),Je.lx=$e.clientX,Je.ly=$e.clientY;let Ut=n.getBoundingClientRect();ht.style.left=`${$e.clientX-Ut.left}px`,ht.style.top=`${$e.clientY-Ut.top}px`;return}Math.hypot($e.clientX-Je.x,$e.clientY-Je.y)>Te&&ci()}});let Bs=$e=>{mt.delete($e.pointerId),!(!Je||$e.pointerId!==Je.id)&&(clearTimeout(Je.t0),clearTimeout(Je.t1),Je=null,ut&&(ut=!1,V.enabled=!0),kn())};xt.addEventListener("pointerup",Bs),xt.addEventListener("pointercancel",Bs)}V.addEventListener("end",()=>{ee=performance.now()+2500,ve()}),V.addEventListener("change",ve);let Se=u('[data-act="play"]'),Ae=u('[data-act="tilt"]'),Oe=pe=>{R=pe,Ae.setAttribute("aria-pressed",pe),Ae.title=pe?t.tiltOff:t.tilt,Ae.setAttribute("aria-label",Ae.title),pe&&!se&&We(!0),ve()},We=pe=>{se=pe,ee=0,Se.setAttribute("aria-pressed",pe),Se.innerHTML=Rs(pe?"pause":"play"),Se.title=pe?t.pause:t.play,Se.setAttribute("aria-label",Se.title),ve()};Oe(R),n.addEventListener("click",pe=>{let Te=pe.target.closest("button");if(!Te)return;let Ze=Te.dataset.act;Ze==="play"?We(!se):Ze==="tilt"?Oe(!R):Ze==="reset"&&K?we(K.pos.clone(),K.target.clone(),.8):Ze==="in"?Ge(.75):Ze==="out"?Ge(1.33):Ze==="full"?Ce():Te.dataset.metal&&(qe(Te.dataset.metal),n.dispatchEvent(new CustomEvent("tg3d:metal",{detail:Te.dataset.metal,bubbles:!0})))});let et=!!(n.requestFullscreen&&document.fullscreenEnabled),H=()=>et?document.fullscreenElement===n:n.classList.contains("is-full");function Ce(){if(et){H()?document.exitFullscreen():n.requestFullscreen().catch(()=>{});return}n.classList.toggle("is-full"),document.documentElement.classList.toggle("tg3d-lock",H()),ue()}function ue(){ie();let pe=H(),Te=u('[data-act="full"]');Te.innerHTML=Rs(pe?"exit":"full"),Te.title=pe?t.exitFull:t.full,Te.setAttribute("aria-label",Te.title),setTimeout(Ee,60)}document.addEventListener("fullscreenchange",ue),document.addEventListener("keydown",pe=>{pe.key==="Escape"&&!et&&H()&&Ce()});function Ee(pe=!0){let Te=d.clientWidth,Ze=d.clientHeight;!Te||!Ze||(f.setSize(Te,Ze,!1),m.setSize(Te,Ze),b.aspect=Te/Ze,b.updateProjectionMatrix(),pe&&K&&S())}new ResizeObserver(()=>Ee()).observe(d),Ee(),new IntersectionObserver(([pe])=>{_e=pe.isIntersecting,_e&&ve()}).observe(n),document.addEventListener("visibilitychange",()=>{document.hidden||ve()});let De=null;function ge(pe){o.metals[pe]&&(B.setRGB(...o.metals[pe]),X.deep.value=o.metalDeep?.[pe]??0,X.deepR.value=o.metalDeepR??.6,K&&S())}e.metal2&&ge(e.metal2);function qe(pe,Te){o.metals[pe]&&(De=pe,N.setRGB(...o.metals[pe]),C=o.metalDeep?.[pe]??0,w.deepR.value=o.metalDeepR??.6,Te&&(y.color.copy(N),w.deep.value=C),n.querySelectorAll("[data-metal]").forEach(Ze=>Ze.setAttribute("aria-checked",Ze.dataset.metal===pe)),ve(),Te&&K&&S())}function Ve(){for(let pe of E){let Te=xd[me[pe.userData.role||"center"]];Te&&(pe.uniforms.ior.value=Te.ior,pe.uniforms.disp.value=Te.disp,pe.uniforms.absorb.value.fromArray(Te.absorb||[0,0,0]),pe.uniforms.spark.value=Te.spark??0,pe.uniforms.reflK.value=Te.reflK??1,pe.uniforms.reflHi.value=Te.reflHi??0,xe(pe))}}function Ct(pe,Te){xd[pe]&&(Te?me[Te]=pe:me.center=me.accent=pe,Ve(),K&&S())}function _t(pe,Te=1,Ze){if(!K)return;let xt=K.pos.distanceTo(K.target)*Te,ht=Ze?new P(...Ze):K.target.clone();b.position.copy(ht).addScaledVector(new P(...pe).normalize(),xt),V.target.copy(ht),V.update(0),S()}function Un(pe){o={...o,...pe,metals:{...o.metals,...pe.metals||{}}},I(),De&&qe(De,!0),pe.bg&&(n.style.background=pe.bg),S()}let Yn={renderer:f,composer:m,bloom:p,bloomP:_,bloomS:M,paint:S,scene:g,camera:b,gemMats:E,metalMat:y,metalU:w,resize:Ee,setLook:Un,get look(){return o},get pr(){return h}},rh=(pe,Te={})=>be(pe,{keepView:!0,...Te});function ah(pe,Te=1,Ze){if(!K)return;let xt=pe?new P(...pe):K.target.clone(),ht=Ze?new P(...Ze).normalize():b.position.clone().sub(V.target).normalize();we(xt.clone().addScaledVector(ht,K.pos.distanceTo(K.target)*Te),xt,.7)}return{_debug:Yn,setMetal:qe,setMetal2:ge,setGem:Ct,setObject:rh,setPlay:We,setTilt:Oe,setView:_t,lookAt:ah,destroy(){de=!0,f.dispose(),n.innerHTML=""}}}var Ps=Math.PI/180,Cs=(n,e)=>n[0]*e[0]+n[1]*e[1]+n[2]*e[2];function Ay(n,e=20){let t=e,i=[[[-t,-t,-t],[-t,-t,t],[-t,t,t],[-t,t,-t]],[[t,-t,-t],[t,t,-t],[t,t,t],[t,-t,t]],[[-t,-t,-t],[t,-t,-t],[t,-t,t],[-t,-t,t]],[[-t,t,-t],[-t,t,t],[t,t,t],[t,t,-t]],[[-t,-t,-t],[-t,t,-t],[t,t,-t],[t,-t,-t]],[[-t,-t,t],[t,-t,t],[t,t,t],[-t,t,t]]],s=1e-9;for(let{n:r,d:a}of n){let o=[],c=[];for(let l of i){let h=[];for(let u=0;u<l.length;u++){let d=l[u],f=l[(u+1)%l.length],g=Cs(r,d)-a,b=Cs(r,f)-a;if(g<=s&&h.push(d),g<-s&&b>s||g>s&&b<-s){let m=g/(g-b),p=[d[0]+(f[0]-d[0])*m,d[1]+(f[1]-d[1])*m,d[2]+(f[2]-d[2])*m];h.push(p),o.push(p)}else Math.abs(g)<=s&&o.push(d)}h.length>=3&&c.push(h)}if(i=c,o.length>=3){let l=o.reduce((b,m)=>[b[0]+m[0],b[1]+m[1],b[2]+m[2]],[0,0,0]).map(b=>b/o.length),h=Math.abs(r[0])<.9?[0,r[2],-r[1]]:[-r[2],0,r[0]],u=Math.hypot(...h),d=h.map(b=>b/u),f=[r[1]*d[2]-r[2]*d[1],r[2]*d[0]-r[0]*d[2],r[0]*d[1]-r[1]*d[0]],g=[];for(let b of o)g.some(m=>Math.hypot(b[0]-m[0],b[1]-m[1],b[2]-m[2])<1e-7)||g.push(b);g.sort((b,m)=>Math.atan2(Cs(f,[b[0]-l[0],b[1]-l[1],b[2]-l[2]]),Cs(d,[b[0]-l[0],b[1]-l[1],b[2]-l[2]]))-Math.atan2(Cs(f,[m[0]-l[0],m[1]-l[1],m[2]-l[2]]),Cs(d,[m[0]-l[0],m[1]-l[1],m[2]-l[2]]))),g.length>=3&&i.push(g)}}return i}function Ey(n,e=[1,1,1]){let t=[];for(let s of n)for(let r=1;r<s.length-1;r++)for(let a of[s[0],s[r],s[r+1]])t.push(a[0]*e[0],a[1]*e[1],a[2]*e[2]);let i=new bt;return i.setAttribute("position",new vt(new Float32Array(t),3)),i.computeVertexNormals(),i}function Ol(n,e,t,i=128){let s=[];for(let r=0;r<i;r++){let a=r/i*Math.PI*2,o=Math.cos(a),c=Math.sin(a);s.push([n*Math.sign(o)*Math.abs(o)**(2/t),e*Math.sign(c)*Math.abs(c)**(2/t)])}return s}function kl(n,e,t){return[[n,-e+t],[n,e-t],[n-t,e],[-n+t,e],[-n,e-t],[-n,-e+t],[-n+t,-e],[n-t,-e]]}function Ry(n,e=128){let t=(n*n+1)/2,i=[],s=Math.asin(n/t);for(let r=0;r<e/2;r++){let a=-s+2*s*r/(e/2);i.push([t*Math.sin(a),t*Math.cos(a)-(t-1)])}for(let r=0;r<e/2;r++){let a=-s+2*s*r/(e/2);i.push([-t*Math.sin(a),-(t*Math.cos(a)-(t-1))])}return i}function Cy(n,e=128){let t=[],i=-(n-1)/2,s=n+i,r=s-i,a=Math.acos(1/r),o=Math.round(e*.75);for(let u=0;u<=o;u++){let d=a+(2*Math.PI-2*a)*u/o;t.push([i+Math.cos(d),Math.sin(d)])}let c=u=>{let d=[i+Math.cos(u*a),Math.sin(u*a)],f=[s,0],g=10,b=[];for(let m=1;m<g;m++){let p=m/g,_=d[0]+(f[0]-d[0])*p,M=d[1]+(f[1]-d[1])*p,x=.08*Math.sin(Math.PI*p)*u;b.push([_+x*.3,M+x])}return b},l=c(-1);for(let u of l)t.push(u);t.push([s,0]);let h=c(1).reverse();for(let u of h)t.push(u);return t}function Py(n){let e=n.length,t=[0];for(let r=0;r<e;r++){let a=n[r],o=n[(r+1)%e];t.push(t[r]+Math.hypot(o[0]-a[0],o[1]-a[1]))}let i=t[e];return{at:r=>{let a=(r%1+1)%1*i,o=0;for(;o<e-1&&t[o+1]<a;)o++;let c=n[o],l=n[(o+1)%e],h=(a-t[o])/(t[o+1]-t[o]||1),u=[c[0]+(l[0]-c[0])*h,c[1]+(l[1]-c[1])*h],d=b=>{let m=n[(b+e)%e],p=n[(b+1)%e],_=p[0]-m[0],M=p[1]-m[1],x=Math.hypot(_,M)||1;return[M/x,-_/x]},f=d(o);if(h<.02){let b=d(o-1);f=[f[0]+b[0],f[1]+b[1]]}else if(h>.98){let b=d(o+1);f=[f[0]+b[0],f[1]+b[1]]}let g=Math.hypot(f[0],f[1]);return{p:u,n:[f[0]/g,f[1]/g]}},L:i,pts:n}}var Bl=n=>{let e=0;for(let t=0;t<n.length;t++){let i=n[t],s=n[(t+1)%n.length];e+=i[0]*s[1]-s[0]*i[1]}return e>0?n:n.slice().reverse()};function Iy(n,e={}){let t=Bl(n),i=Py(t),s=e.girdle??.03,r=(e.crown??34.5)*Ps,a=(e.pavilion??40.75)*Ps,c=1-(e.table??.57),l=c*Math.tan(r),h=s/2+l,u=[],d=(m,p,_,M)=>{let x=Math.hypot(m,p,_),v=[m/x,p/x,_/x];u.push({n:v,d:Cs(v,M)})},f=e.girdleN??64;for(let m=0;m<f;m++){let{p,n:_}=i.at(m/f);d(_[0],0,_[1],[p[0],0,p[1]])}d(0,1,0,[0,h,0]);let g=e.offset??0,b=(m,p,_)=>[Math.sin(m)*p[0],_?Math.cos(m):-Math.cos(m),Math.sin(m)*p[1]];for(let m=0;m<8;m++){let{p,n:_}=i.at(g+m/8);d(...b(r,_,!0),[p[0],s/2,p[1]])}for(let m=0;m<8;m++){let{p,n:_}=i.at(g+(m+.5)/8);d(...b(r*.62,_,!0),[p[0]-_[0]*c,h,p[1]-_[1]*c])}for(let m=0;m<16;m++){let{p,n:_}=i.at(g+(m+.5)/16);d(...b(r+7.5*Ps,_,!0),[p[0],s/2,p[1]])}for(let m=0;m<8;m++){let{p,n:_}=i.at(g+m/8);d(...b(a,_,!1),[p[0],-s/2,p[1]])}for(let m=0;m<16;m++){let{p,n:_}=i.at(g+(m+.5)/16);d(...b(a+1.3*Ps,_,!1),[p[0],-s/2,p[1]])}return u}function Ly(n,e={}){let t=Bl(n),i=e.girdle??.03,s=e.crown??[[.13,50],[.13,38],[.12,26]],r=e.pav??[[.2,62],[.22,52],[.25,43],[.4,36]],a=[],o=(l,h)=>{let u=Math.hypot(...l),d=l.map(f=>f/u);a.push({n:d,d:Cs(d,h)})},c=i/2;for(let l=0;l<t.length;l++){let h=t[l],u=t[(l+1)%t.length],d=u[0]-h[0],f=u[1]-h[1],g=Math.hypot(d,f),b=[f/g,-d/g],m=[(h[0]+u[0])/2,(h[1]+u[1])/2];o([b[0],0,b[1]],[m[0],0,m[1]]);let p=0,_=i/2;for(let[M,x]of s){let v=x*Ps;o([Math.sin(v)*b[0],Math.cos(v),Math.sin(v)*b[1]],[m[0]-b[0]*p,_,m[1]-b[1]*p]),p+=M,_+=M*Math.tan(v)}c=_,p=0,_=-i/2;for(let[M,x]of r){let v=x*Ps;o([Math.sin(v)*b[0],-Math.cos(v),Math.sin(v)*b[1]],[m[0]-b[0]*p,_,m[1]-b[1]*p]),p+=M,_-=M*Math.tan(v)}}return a.push({n:[0,1,0],d:c}),a}var mm=[[1.3,0],[.62,1],[-.62,1],[-1.3,0],[-.62,-1],[.62,-1]],gm=[[1.6,-.62],[1.6,.62],[-1.6,1],[-1.6,-1]],jn={round:{vi:"Tr\xF2n",en:"Round",ratio:1,mm1ct:[6.5,6.5],outline:()=>Ol(1,1,2),cut:"brilliant",kind:"curved"},oval:{vi:"Oval",en:"Oval",ratio:1.38,mm1ct:[7.7,5.6],outline:()=>Ol(1.38,1,2),cut:"brilliant",kind:"curved"},cushion:{vi:"Cushion",en:"Cushion",ratio:1.05,mm1ct:[5.8,5.5],outline:()=>Ol(1.05,1,3.4),cut:"brilliant",kind:"curved"},cushionLong:{vi:"Cushion d\xE0i",en:"Elongated cushion",ratio:1.25,mm1ct:[6.6,5.3],outline:()=>Ol(1.25,1,3.4),cut:"brilliant",kind:"curved"},princess:{vi:"Princess",en:"Princess",ratio:1,mm1ct:[5.5,5.5],outline:()=>kl(1,1,.04),cut:"brilliant",offset:1/16,kind:"rect",rect:[1,1,.04]},radiant:{vi:"Radiant",en:"Radiant",ratio:1.25,mm1ct:[6.5,5.2],outline:()=>kl(1.25,1,.22),cut:"brilliant",offset:1/16,kind:"rect",rect:[1.25,1,.22]},emerald:{vi:"Emerald",en:"Emerald",ratio:1.42,mm1ct:[7,5],outline:()=>kl(1.42,1,.26),cut:"step",kind:"rect",rect:[1.42,1,.26]},asscher:{vi:"Asscher",en:"Asscher",ratio:1,mm1ct:[5.6,5.6],outline:()=>kl(1,1,.32),cut:"step",kind:"rect",rect:[1,1,.32]},hexagon:{vi:"L\u1EE5c gi\xE1c",en:"Hexagon",ratio:1.3,mm1ct:[7,5.4],outline:()=>mm,cut:"step",kind:"poly",poly:mm},pear:{vi:"Gi\u1ECDt n\u01B0\u1EDBc",en:"Pear",ratio:1.55,mm1ct:[8.2,5.4],outline:()=>Cy(3.1-1),cut:"brilliant",kind:"pear"},marquise:{vi:"Marquise",en:"Marquise",ratio:2,mm1ct:[10,5],outline:()=>Ry(2),cut:"brilliant",kind:"marquise"}},Dy={outline:()=>[[2.6,-1],[2.6,1],[-2.6,1],[-2.6,-1]],cut:"step",crown:[[.12,45],[.12,30]],pav:[[.3,55],[.4,42],[.5,35]]},bm=[[2,-1],[2,1],[-2,1],[-2,-1]],_m=[[1,-1],[1,1],[-1,1],[-1,-1]],xm={taperedBaguette:{outline:()=>gm,cut:"step",kind:"poly",poly:gm,crown:[[.12,45],[.12,30]],pav:[[.22,55],[.3,42],[.4,35]]},bag2:{outline:()=>bm,cut:"step",kind:"poly",poly:bm,crown:[[.12,45],[.12,30]],pav:[[.3,55],[.4,42],[.5,35]]},carre:{outline:()=>_m,cut:"step",kind:"poly",poly:_m,crown:[[.12,45],[.12,30]],pav:[[.3,55],[.35,42],[.35,35]]}},vm=n=>n==="baguette"?Dy:jn[n]||xm[n];function zl(n,e=144){let t=Bl(n),i=t.length,s=[0];for(let h=0;h<i;h++){let u=t[h],d=t[(h+1)%i];s.push(s[h]+Math.hypot(d[0]-u[0],d[1]-u[1]))}let r=s[i],a=0;for(let h=0;h<i;h++){let u=t[h],d=t[(h+1)%i];if(u[1]<0&&d[1]>=0){let f=-u[1]/(d[1]-u[1]);if(u[0]+(d[0]-u[0])*f>0){a=s[h]+f*(s[h+1]-s[h]);break}}}let o=h=>{let u=((a+h*r)%r+r)%r,d=0;for(;d<i-1&&s[d+1]<u;)d++;let f=t[d],g=t[(d+1)%i],b=(u-s[d])/(s[d+1]-s[d]||1);return[f[0]+(g[0]-f[0])*b,f[1]+(g[1]-f[1])*b]},c=h=>{let d=o(h-.004),f=o(h+.004),g=f[0]-d[0],b=f[1]-d[1],m=Math.hypot(g,b)||1;return{p:o(h),n:[b/m,-g/m]}},l=Array.from({length:e},(h,u)=>c(u/e));return l.at=c,l}var _a=(n,e)=>{let t=Math.hypot(n,e)||1;return[n/t,e/t]};function Gl(n,e){let t=vm(n),i=[],s=(r,a,o=!1,c=null)=>i.push({p:r,n:a,v:o,e:c});if(t.kind==="curved"){let r=zl(t.outline(),64),a=e==="compass"?[0,.25,.5,.75]:Array.from({length:e},(o,c)=>(2*c+1)/(2*e));for(let o of a){let{p:c,n:l}=r.at(o);s(c,l)}}else if(t.kind==="rect"){let[r,a,o]=t.rect;if(e==="compass"&&t.ratio>1.02)s([r,0],[1,0]),s([-r,0],[-1,0]),s([0,a],[0,1]),s([0,-a],[0,-1]);else{for(let[c,l]of[[1,1],[-1,1],[-1,-1],[1,-1]])s([c*(r-o/2),l*(a-o/2)],_a(c,l),"opt",[[-c,0],[0,-l]]);e===6&&(s([0,a],[0,1]),s([0,-a],[0,-1]))}}else if(t.kind==="poly"){let r=t.poly,a=r.length,o=r.map((c,l)=>{let h=r[(l-1+a)%a],u=r[(l+1)%a],d=_a(h[0]-c[0],h[1]-c[1]),f=_a(u[0]-c[0],u[1]-c[1]);return{p:c,n:_a(-(d[0]+f[0]),-(d[1]+f[1])),e:[d,f]}});a===6&&e===4&&(o=o.filter(c=>Math.abs(c.p[1])>.5)),a===6&&e==="compass"&&(o=[...o.filter(c=>Math.abs(c.p[1])<.5),{p:[0,1],n:[0,1]},{p:[0,-1],n:[0,-1]}]);for(let c of o)s(c.p,c.n,c.e?"opt":!1,c.e)}else if(t.kind==="pear"){let c=Math.acos(.47619047619047616);s([1.55,0],[1,0],"auto",[_a(-.55+Math.cos(c)-1.55,Math.sin(c)),_a(-.55+Math.cos(c)-1.55,-Math.sin(c))]);let l=e===6?[78,-78,130,-130,180]:[95,-95,180];for(let h of l){let u=h*Math.PI/180;s([-.55+Math.cos(u),Math.sin(u)],[Math.cos(u),Math.sin(u)])}}else if(t.kind==="marquise"){for(let r of[1,-1])s([2*r,0],[r,0],"auto",[[-.6*r,.8],[-.6*r,-.8]]);if(e===6){let a=Math.sqrt(.8704000000000001);for(let o of[1,-1])for(let c of[1,-1])s([.9*o,c*(2.5*a-1.5)],[.36*o,a*c])}else s([0,1],[0,1]),s([0,-1],[0,-1])}return i}var yd=new Map;function Mo(n){if(yd.has(n))return yd.get(n);let e=vm(n),t=Bl(e.outline()),i=e.cut==="step"?Ly(t,e):Iy(t,{offset:e.offset||0}),s=Ay(i),r=Ey(s);r.computeBoundingBox();let a=r.boundingBox,o;if(e.cut==="step"){let l=e.pav??[[.2,62],[.22,52],[.25,43],[.4,36]],h=[[0,0]];for(let[u,d]of l){let[f,g]=h[h.length-1];h.push([f+u*Math.tan(d*Ps),g+u])}o=u=>{for(let d=1;d<h.length;d++)if(u<=h[d][0]){let[f,g]=h[d-1],[b,m]=h[d];return g+(u-f)/(b-f)*(m-g)}return h[h.length-1][1]}}else o=l=>l/Math.tan(40.75*Ps);let c={geo:r,outline:t,top:a.max.y,bottom:a.min.y,planes:i.length,inset:o,crownAngle:e.cut==="step"?48:35};return yd.set(n,c),c}var Mw=Math.PI/180,ym=new Vt;function An(n,e,t,i,s){let r=new Float32Array(n*e*3),a=0;for(let u=0;u<n;u++)for(let d=0;d<e;d++){let f=t(u,d);r[a++]=f[0],r[a++]=f[1],r[a++]=f[2]}let o=[],c=i?n:n-1,l=s?e:e-1;for(let u=0;u<c;u++)for(let d=0;d<l;d++){let f=u*e+d,g=(u+1)%n*e+d,b=(u+1)%n*e+(d+1)%e,m=u*e+(d+1)%e;o.push(f,g,b,f,b,m)}let h=new bt;return h.setAttribute("position",new vt(r,3)),h.setIndex(o),Ny(h)}function Ny(n){let e=n.attributes.position.array,t=n.index.array,i=0;for(let s=0;s<t.length;s+=3){let r=t[s]*3,a=t[s+1]*3,o=t[s+2]*3;i+=e[r]*(e[a+1]*e[o+2]-e[a+2]*e[o+1])-e[r+1]*(e[a]*e[o+2]-e[a+2]*e[o])+e[r+2]*(e[a]*e[o+1]-e[a+1]*e[o])}if(i<0){let s=Array.from(t);for(let r=0;r<s.length;r+=3){let a=s[r+1];s[r+1]=s[r+2],s[r+2]=a}n.setIndex(s)}return n.computeVertexNormals(),n}function Vl(n,e,t=14,i=64){let r=new ja(n,!1,"centripetal").getSpacedPoints(i-1),a=r.map((h,u)=>r[Math.min(u+1,r.length-1)].clone().sub(r[Math.max(u-1,0)]).normalize()),o=new P(0,1,0);Math.abs(o.dot(a[0]))>.9&&o.set(1,0,0),o.sub(a[0].clone().multiplyScalar(o.dot(a[0]))).normalize();let c=[],l=[];for(let h=0;h<r.length;h++)h&&o.sub(a[h].clone().multiplyScalar(o.dot(a[h]))).normalize(),c.push(o.clone()),l.push(a[h].clone().cross(o).normalize());return An(r.length,t,(h,u)=>{let d=h/(r.length-1),f=u/t*Math.PI*2,g=e(d),b=r[h].clone().addScaledVector(c[h],Math.cos(f)*g).addScaledVector(l[h],Math.sin(f)*g);return[b.x,b.y,b.z]},!1,!0)}function lr(n,e,t=10){let i=n.length;return An(i,t,(s,r)=>{let a=n[s],o=n[(s+1)%i].clone().sub(n[(s-1+i)%i]).normalize(),c=new P(a.x,a.y,0).normalize();c.sub(o.clone().multiplyScalar(c.dot(o))).normalize();let l=o.clone().cross(c),h=r/t*Math.PI*2,u=a.clone().addScaledVector(c,Math.cos(h)*e).addScaledVector(l,Math.sin(h)*e);return[u.x,u.y,u.z]},!0,!0)}function an(n,e,t=28){let i=0;for(let r=1;r<n.length;r++)i+=n[r].distanceTo(n[r-1]);let s=Math.min(.3,e/i);return Vl(n,r=>{let a=r<s?(s-r)/s:r>1-s?(r-(1-s))/s:0;return e*Math.sqrt(Math.max(0,1-a*a))},12,t)}function Sd(n,e){let t=n.length,i=n.map((a,o)=>{let c=n[(o-1+t)%t],l=n[(o+1)%t],h=l[0]-c[0],u=l[1]-c[1],d=Math.hypot(h,u)||1;return[u/d,-h/d]}),s=n.reduce((a,o)=>[a[0]+o[0]/t,a[1]+o[1]/t],[0,0]),r=Math.sign((n[0][0]-s[0])*i[0][0]+(n[0][1]-s[1])*i[0][1])||1;return An(t,e.length,(a,o)=>{let[c,l]=e[o];return[n[a][0]+i[a][0]*c*r,l,n[a][1]+i[a][1]*c*r]},!0,!0)}function Mm(n,e,t=8){if(!n.length)return null;let i=n.map(s=>{let r=new Ys(s[3]??e,t,Math.max(4,t-2));return r.translate(s[0],s[1],s[2]),r});return Xn(i)}function zt(n,e,t="metal"){if(!e)return;let i=new At(e,ym);i.name=t,i.userData.ownGeo=!0,n.add(i)}var Md=new Map;function Sm(n,e,t,i,s){let r=Mo(n).geo,a=`${e}:${n}`;e!=="center"&&(Md.has(a)||Md.set(a,r.clone()),r=Md.get(a));let o=new At(r,ym);return o.name=e==="center"?"gem:center":`gem:${e}:${n}`,o.scale.setScalar(t),o.position.copy(i),s&&o.quaternion.copy(s),o}var Hl={A:[[[0,0],[2,6],[4,0]],[[.8,2.1],[3.2,2.1]]],B:[[[0,0],[0,6],[2.4,6],[3.6,5.3],[3.6,3.9],[2.4,3.2],[0,3.2]],[[2.4,3.2],[4,2.4],[4,.9],[2.7,0],[0,0]]],C:[[[4,4.8],[3,6],[1,6],[0,4.8],[0,1.2],[1,0],[3,0],[4,1.2]]],D:[[[0,0],[0,6],[2.2,6],[4,4.4],[4,1.6],[2.2,0],[0,0]]],\u0110:[[[.4,0],[.4,6],[2.4,6],[4,4.4],[4,1.6],[2.4,0],[.4,0]],[[-.5,3],[1.9,3]]],E:[[[4,6],[0,6],[0,0],[4,0]],[[0,3.1],[3,3.1]]],F:[[[4,6],[0,6],[0,0]],[[0,3.1],[3,3.1]]],G:[[[4,4.8],[3,6],[1,6],[0,4.8],[0,1.2],[1,0],[3,0],[4,1.2],[4,2.8],[2.3,2.8]]],H:[[[0,0],[0,6]],[[4,0],[4,6]],[[0,3],[4,3]]],I:[[[2,0],[2,6]],[[.7,6],[3.3,6]],[[.7,0],[3.3,0]]],J:[[[1.4,6],[3.6,6]],[[3.2,6],[3.2,1.3],[2.2,0],[1,0],[0,1.3]]],K:[[[0,0],[0,6]],[[4,6],[0,2.5]],[[1.5,3.8],[4,0]]],L:[[[0,6],[0,0],[4,0]]],M:[[[0,0],[0,6],[2,2.4],[4,6],[4,0]]],N:[[[0,0],[0,6],[4,0],[4,6]]],O:[[[1,0],[3,0],[4,1.2],[4,4.8],[3,6],[1,6],[0,4.8],[0,1.2],[1,0]]],P:[[[0,0],[0,6],[2.6,6],[3.9,5.2],[3.9,3.6],[2.6,2.8],[0,2.8]]],Q:[[[1,0],[3,0],[4,1.2],[4,4.8],[3,6],[1,6],[0,4.8],[0,1.2],[1,0]],[[2.4,1.7],[4.2,-.3]]],R:[[[0,0],[0,6],[2.6,6],[3.9,5.2],[3.9,3.6],[2.6,2.8],[0,2.8]],[[2,2.8],[4,0]]],S:[[[4,4.9],[3,6],[1,6],[0,4.9],[0,3.9],[1,3.1],[3,2.9],[4,2.1],[4,1.1],[3,0],[1,0],[0,1.1]]],T:[[[0,6],[4,6]],[[2,6],[2,0]]],U:[[[0,6],[0,1.2],[1,0],[3,0],[4,1.2],[4,6]]],V:[[[0,6],[2,0],[4,6]]],W:[[[0,6],[.9,0],[2,4.2],[3.1,0],[4,6]]],X:[[[0,0],[4,6]],[[0,6],[4,0]]],Y:[[[0,6],[2,3],[4,6]],[[2,3],[2,0]]],Z:[[[0,6],[4,6],[0,0],[4,0]]],0:[[[1,0],[3,0],[4,1.2],[4,4.8],[3,6],[1,6],[0,4.8],[0,1.2],[1,0]]],1:[[[.9,4.8],[2.3,6],[2.3,0]],[[.8,0],[3.8,0]]],2:[[[0,4.8],[1,6],[3,6],[4,4.8],[4,3.6],[0,0],[4,0]]],3:[[[0,4.9],[1,6],[3,6],[4,4.9],[4,3.9],[3,3.1],[1.6,3.1]],[[3,3.1],[4,2.3],[4,1.1],[3,0],[1,0],[0,1.1]]],4:[[[3.1,0],[3.1,6],[0,1.9],[4.2,1.9]]],5:[[[4,6],[.4,6],[.2,3.3],[2.6,3.6],[4,2.6],[4,1.1],[3,0],[1,0],[0,1.1]]],6:[[[3.8,5.2],[2.8,6],[1.2,6],[0,4.8],[0,1.2],[1,0],[3,0],[4,1.2],[4,2.4],[3,3.5],[1,3.5],[0,2.4]]],7:[[[0,6],[4,6],[1.4,0]]],8:[[[1,3.2],[.2,4],[.2,5.1],[1.1,6],[2.9,6],[3.8,5.1],[3.8,4],[3,3.2],[1,3.2],[0,2.3],[0,1.1],[1,0],[3,0],[4,1.1],[4,2.3],[3,3.2]]],9:[[[4,3.6],[3,2.5],[1,2.5],[0,3.6],[0,4.8],[1,6],[3,6],[4,4.8],[4,1.2],[2.8,0],[1.2,0],[.2,.8]]],"\u271D":[[[2,6.4],[2,-.4]],[[.2,4.3],[3.8,4.3]]],$:[[[4,4.6],[3,5.6],[1,5.6],[0,4.6],[0,3.8],[1,3.1],[3,2.9],[4,2.2],[4,1.4],[3,.4],[1,.4],[0,1.4]],[[2,6.9],[2,-.9]]],"\u2665":[[[2,.2],[.3,2.6],[0,3.9],[.4,5.1],[1.2,5.6],[1.8,5.2],[2,4.5],[2.2,5.2],[2.8,5.6],[3.6,5.1],[4,3.9],[3.7,2.6],[2,.2]]],"\u2605":[[[2,6.3],[2.75,4.05],[5.1,4.05],[3.2,2.6],[3.9,.3],[2,1.7],[.1,.3],[.8,2.6],[-1.1,4.05],[1.25,4.05],[2,6.3]]]};var Ds={type:"signet",top:"square",dome:"flat",faceW:13.5,height:"high",face:"plate",faceLen:"full",center:"stone",faceLetter:"T",faceField:"satin",shape:"round",centerD:7.2,setting:"prong4",prongTip:"round",headH:"high",plinth:"on",frame:"haloSq",faceBars:"on",facePave:"off",corners:"off",rim:"none",shoulder:"ladder",shoulderLen:"long",flank:"pave2",shank:"taper",bottomW:8,shankDeco:"flutes",lattice:"x",letter:"T",letter2:"",letterStone:"on",letterTurn:"off",tierRows:1,bandW:7,bandProfile:"flat",bandStones:"pave",cover:"full",paveD:"big",edge:"bevel",finish:"bong",twoTone:"none",engraveFont:"serif",metal:"vang-hong",metal2:"vang-trang",gem:"emerald",accentGem:"lab-diamond",sideGem:"emerald",karat:"18K",size:"",engrave:""},jl=["square","octagon","cushion","round"],Cd=["round","cushion","princess","asscher","radiant","emerald","oval","hexagon"],Pd=[9,10,12,13.5,15],Fy=["stone","letter","plain","run"],ur=[6,6.5,7.2,8,9,10],Id=[5,6,7,8,9,10,12],Ld=[4,5,6,8,10,12],Uy=["prong4","prong6","bezel"],To=["none","halo","haloSq","haloOct","bagFrame","bagRing","double","stepSq","roof","star"],Dd=["plain","pave","honey","rows","ladder","ladderS","ladderBig","ladderRd","ladderT","ladder2","ladder2s","ladder3","ladder3s","carre","bagLong","bagLong2","tiersBag","tiersBagP","grid","tiers","chevron","chevronPlain","letter"],dr=[..."ABCD\u0110EFGHIJKLMNOPQRSTUVWXYZ"],Oy=["tram","x","ong","dac"],Nd=["plain","pave","honey","paveBig","rows","ladder","ladderRd","ladder2s","carre","bagLong","grid","stations","flush"],ky=["none","rail","band","milgrain","pave","bevel","notch"],By=["plain","milgrain","pave1","pave2","pave3"],zy=["none","flutes","pave","milgrain"],Gy=1.25,Fd={small:1.2,mid:1.5,big:1.9},wd={low:2.6,mid:3.1,high:3.7},Ad={low:0,mid:.7,high:1.7},Vy=1.2,Hy={square:1,octagon:.88,cushion:.84,round:.76},Wy=10,on=Math.PI*2,rs=Math.PI/180,kt=(n,e,t)=>Math.min(t,Math.max(e,n)),_i=n=>{let e=kt(n,0,1);return e*e*(3-2*e)},qy=new P(0,1,0),wo=new P(0,0,1),Dn=n=>new Kt().setFromUnitVectors(qy,n);function fr(n,e,t=!1){let i=Dn(n),s=new P(1,0,0).applyQuaternion(i),r=e.clone().projectOnPlane(n).normalize();return!t&&s.dot(r)<0&&r.negate(),new Kt().setFromAxisAngle(n,Math.atan2(n.dot(s.clone().cross(r)),s.dot(r))).multiply(i)}var Wl=n=>jn[n].ratio>1.1,vi=n=>[n.centerD*jn[n.shape].ratio,n.centerD],Is=1.7,Xy=.8,ii=n=>n.faceBars==="on"&&n.type!=="band"&&n.dome!=="dome"&&n.top==="square",jy=n=>ii(n)||n.faceLen==="tight",Rm=n=>{let e=n.top==="round"?.74:n.top==="octagon"?.9:Ro(n);return(ii(n)?n.faceW/2-Is:n.faceW/2*e-.35)-.75},Ud=n=>n.center==="letter"&&n.faceLen==="tight"&&n.letterTurn==="on"&&n.letterStone==="bag",Od=n=>Ud(n)&&!["plain","letter","chevron","chevronPlain"].includes(n.shoulder);function kd(n){if(n.center==="letter"){if(n.faceLen!=="tight")return n.faceW/2;let i=Rm(n);return Od(n)?kt(n.faceW*.46,4.2,5.6):Ud(n)?(2*i+1)*.31+.95:(n.letterTurn==="on"?i/.84:i*.84)+.95}if(n.face==="cradle")return vi(n)[0]/2+1.05;if(n.center==="run")return n.faceW/2;if(!jy(n))return n.faceW/2*(Wl(n.shape)?1.2:n.corners==="row"?1.18:1);let e=xi(n),t={none:n.plinth==="on"?.75:.5,halo:e+.1,haloSq:e+.1,haloOct:e+.1,double:2*e+.2,bagFrame:e+.33,bagRing:e+.3,stepSq:e+.1,roof:e+.1,star:e+.1}[e?n.frame:"none"];return kt(vi(n)[0]/2+pt+t+(n.plinth==="on"?.5:.3),4.6,n.faceW/2*1.2)}var pt=.4,Ro=n=>n.top==="round"?.86:n.top==="cushion"?.93:1;function Cm(n){let[e,t]=vi(n),i=Ro(n);return ii(n)?n.faceW/2-Is-t/2-pt-.05:n.faceLen==="tight"?n.faceW/2*i-t/2-pt-.3-(n.plinth==="on"?.3:0):Math.min(kd(n)*i-e/2,n.faceW/2*i-t/2)-pt-.3-(n.plinth==="on"?.3:0)}function xi(n,e=n.frame){if(n.center==="letter"||n.center==="run"||n.face==="cradle")return 0;let t=Cm(n);if(e==="none")return 0;if(e==="stepSq")return t>=.75?Math.min(n.corners==="row"?.55:1.7,Math.round(t*20)/20):0;if(e==="roof")return t>=1.35?Math.min(4.5,Math.round(t*20)/20):0;if(e==="star")return t>=1.3?Math.min(2.6,Math.round(t*20)/20):0;if(e==="bagRing"){let r=Math.min(2.6,Math.round((t-.05)*20)/20);return r>=1.5?r:0}let i=e==="double"?(t-.1)/2:t,s=e==="bagFrame"?1.7:1.8;return i>=(e==="bagFrame"?1.1:.95)?Math.min(s,Math.round(i*20)/20):0}var Ao=(n,e)=>e==="none"||xi(n,e)>0&&!(["haloSq","haloOct"].includes(e)&&!["round","cushion"].includes(n.shape))&&!(e==="bagFrame"&&Wl(n.shape))&&!(e==="bagRing"&&n.shape!=="round")&&!(e==="star"&&n.shape!=="round")&&!(e==="stepSq"&&Wl(n.shape))&&!(e==="roof"&&(Wl(n.shape)||n.top!=="square"||n.dome!=="flat"||ii(n))),xa=(n,e)=>n.face==="cradle"?e<=n.faceW+.6:Cm({...n,centerD:e,plinth:"off"})+pt+.3>=1.15;function pr(n){if(ii(n)||n.face==="cradle"||n.center!=="stone")return 0;let e=xi(n),t=n.centerD/2,i=n.plinth==="on"?.22:0,s=Ro(n),r=t+pt+{none:i?.75:.3,halo:e+.1+i,haloSq:e+.1+i,haloOct:e+.1+i,double:2*e+.2+i,bagFrame:e+.33+i,bagRing:e+.3+i,stepSq:e+.35,roof:e+.5,star:e+.1+i}[e?n.frame:"none"]+(i?.55:.1),a=Math.min(n.faceW/2*s-.35-r,kd(n)*s-.3-(r-t+vi(n)[0]/2));return a>=1?Math.min(1.5,Math.round((a-.1)*20)/20):0}function Co(n){if(n.rim==="pave")return pr(n)>0;if(ii(n)||n.face==="cradle"||n.center==="run")return!1;if(n.center==="letter")return!0;let e=xi(n),t=n.centerD/2,i=n.plinth==="on"?.22:0;return(t+pt+{none:i?.75:.3,halo:e+.1+i,haloSq:e+.1+i,haloOct:e+.1+i,double:2*e+.2+i,bagFrame:e+.33+i,bagRing:e+.3+i,stepSq:e+.1+i,roof:e+.5,star:e+.1+i}[e?n.frame:"none"])*(jn[n.shape].ratio>1.1,1)<=n.faceW/2*Ro(n)-.35-.22-.3}var Bd=(n,e)=>Uy.includes(e)&&!(e==="prong6"&&jn[n].kind!=="curved");function mr(n){let e={...Ds,...n};["signet","band"].includes(e.type)||(e.type="signet"),Fy.includes(e.center)||(e.center="stone"),Dd.includes(e.shoulder)||(e.shoulder="ladder"),e.center==="run"&&["plain","letter","chevron","chevronPlain"].includes(e.shoulder)&&(e.center="plain"),(!["plate","cradle"].includes(e.face)||e.center!=="stone")&&(e.face="plate");let t=e.face==="cradle",i=e.center==="run",s=t||i;return(!jl.includes(e.top)||t)&&(e.top="square"),(!["flat","dome","bombe"].includes(e.dome)||t)&&(e.dome="flat"),e.faceW=Number(e.faceW),Pd.includes(e.faceW)||(e.faceW=12),wd[e.height]||(e.height="mid"),["full","tight"].includes(e.faceLen)||(e.faceLen="full"),(!["on","off"].includes(e.faceBars)||e.dome!=="flat"||e.top!=="square"||s)&&(e.faceBars="off"),e.faceLetter=String(e.faceLetter||"").toUpperCase(),dr.includes(e.faceLetter)||(e.faceLetter="T"),["on","off"].includes(e.letterTurn)||(e.letterTurn="off"),["satin","bong"].includes(e.faceField)||(e.faceField="satin"),["round","claw"].includes(e.prongTip)||(e.prongTip="round"),(!["on","off","row"].includes(e.corners)||s)&&(e.corners="off"),e.corners==="row"&&(e.top!=="square"||e.dome!=="flat"||e.faceBars==="on"||e.center==="letter")&&(e.corners="off"),["serif","script"].includes(e.engraveFont)||(e.engraveFont="serif"),Cd.includes(e.shape)||(e.shape="round"),e.centerD=Number(e.centerD),ur.includes(e.centerD)||(e.centerD=7.2),xa(e,e.centerD)||(e.centerD=[...ur].reverse().find(r=>xa(e,r))??ur[0]),Bd(e.shape,e.setting)||(e.setting="prong4"),Ad[e.headH]==null&&(e.headH="low"),(!["on","off"].includes(e.plinth)||s)&&(e.plinth=s?"off":"on"),s?e.frame="none":(!To.includes(e.frame)||!Ao(e,e.frame))&&(e.frame=Ao(e,"halo")&&To.includes(e.frame)&&e.frame!=="none"?"halo":"none"),e.frame==="roof"&&(e.plinth="off",e.facePave="off",e.corners="off"),(!["off","on"].includes(e.facePave)||s)&&(e.facePave="off"),["none","rail","milgrain","pave"].includes(e.rim)||(e.rim="rail"),s&&(e.rim="none"),e.rim==="pave"&&!(pr(e)>0)&&(e.rim="none"),["short","mid","long"].includes(e.shoulderLen)||(e.shoulderLen="mid"),By.includes(e.flank)||(e.flank="plain"),["taper","step"].includes(e.shank)||(e.shank="taper"),e.bottomW=Number(e.bottomW),Ld.includes(e.bottomW)||(e.bottomW=5),zy.includes(e.shankDeco)||(e.shankDeco="none"),Oy.includes(e.lattice)||(e.lattice="tram"),e.letter=String(e.letter||"").toUpperCase(),dr.includes(e.letter)||(e.letter="T"),e.letter2=String(e.letter2||"").toUpperCase(),dr.includes(e.letter2)||(e.letter2=""),["on","on2","off","bag"].includes(e.letterStone)||(e.letterStone="on"),e.shoulder==="letter"&&e.shoulderLen==="short"&&(e.shoulderLen="mid"),e.tierRows=Number(e.tierRows)===2?2:1,e.bandW=Number(e.bandW),Id.includes(e.bandW)||(e.bandW=7),["flat","dome","bevel"].includes(e.bandProfile)||(e.bandProfile="flat"),Nd.includes(e.bandStones)||(e.bandStones="pave"),["full","half","third"].includes(e.cover)||(e.cover="full"),Fd[e.paveD]||(e.paveD="mid"),ky.includes(e.edge)||(e.edge="none"),["bong","nham","chai"].includes(e.finish)||(e.finish="bong"),["none","head","settings","letter","shoulder"].includes(e.twoTone)||(e.twoTone="none"),e.type==="band"&&e.twoTone==="head"&&(e.twoTone="settings"),e.twoTone==="letter"&&!(e.type==="signet"&&(e.shoulder==="letter"||e.center==="letter"))&&(e.twoTone="none"),e.twoTone==="shoulder"&&!(e.type==="signet"&&e.shoulder==="chevronPlain")&&(e.twoTone="none"),e.twoTone==="head"&&e.center!=="stone"&&(e.twoTone="none"),e}function Ky(n){let e=Wy;if(n.type==="band"){let L=n.bandW,V=L>=8?1.9:1.75,ie=n.bandProfile==="dome"?Math.min(.75,L*.09):0;return{band:!0,R:e,ri:()=>e,bevel:n.edge==="bevel"?()=>1:null,W:L,t:V,c:n.bandProfile==="bevel"?.7:.3,hw:()=>L/2,ro:(K,se)=>e+V-ie*(se/(L/2))**2,nTop:ie?12:2,aF:0,flat:!1}}let t=n.dome==="flat",i=n.dome==="bombe",s=n.faceW,r=kd(n),a=n.face==="cradle"?{s:vi(n)[0]/2,pd:-Mo(n.shape).bottom*(n.centerD/2)}:null,o=.6,c=65*rs,l=L=>L<c?e-o*Math.cos(Math.PI/2*(L/c))**2:e,h=a?kt(a.pd-.4,wd[n.height],6.2):wd[n.height]+(t?0:i?.8:.3),u=l(0)+h,d=98*rs,f=t?Math.atan(r/u):r/u,g=t?L=>u*Math.tan(L):L=>L*u,b=t?L=>Math.atan(L/u):L=>L/u,m=1.3,p=kt(Math.hypot(r,u)-e-.12,1.9,3.1),_=L=>m+(p-m)*Math.sin((Math.PI-L)/2)**2,M=f,x=-1/0;if(t)for(let L=f+.01;L<2.7;L+=.003){let V=e+_(L),ie=Math.atan2(V*Math.sin(L)-r,u-V*Math.cos(L));ie>x&&(x=ie,M=L)}let v=e+_(M),S=v*Math.sin(M)-r,E=v*Math.cos(M)-u,y=L=>{let V=(u*Math.sin(L)-r*Math.cos(L))/(S*Math.cos(L)-E*Math.sin(L));return Math.hypot(r+V*S,u+V*E)-e},w=2.2,C=L=>{if(!t)return L<=d?w+(u-e-w)*Math.cos(L/d*Math.PI/2)**2:m+(w-m)*(1-_i((L-d)/(Math.PI-d)));if(L<=f&&a){let V=u,ie=Math.tan(L);for(let K=0;K<4;K++)V=D(V*ie);return V/Math.cos(L)-e}return L<=f?u/Math.cos(L)-e:L<=M?y(L):_(L)},D=a?L=>kt(u+.55-.92*a.pd*(1-Math.abs(L)/a.s),l(0)+1,u):null,B=ii(n)?s-2*Xy:s*Hy[n.top],X=Math.min(n.bottomW,B),k=s*.15,$=L=>{let V=Math.min(1,Math.abs(L)/r);return n.top==="octagon"?s/2-Math.max(0,Math.abs(L)-(r-k)):n.top==="cushion"?s/2*(1-V**4)**.25:n.top==="round"?s/2*Math.sqrt(1-V*V):s/2},Q=160*rs,z=96*rs,J=n.shank==="step",G=L=>J?L<z?B/2:X/2+(B/2-X/2)*(1-_i((L-z)/.5)):X/2+(B/2-X/2)*(1-_i((L-f)/(Q-f))),q=L=>L<f?Math.max($(g(L)),B/2):G(L),F=t?0:i?2.3:.95,ce=L=>F*(1-_i(L/d)),U=a?(L,V)=>{let ie=Math.abs(g(Math.min(L,f))),K=a.s,se=1-_i((L-f)/.2);if(se<=0)return 0;let ee=_i((Math.abs(V)/q(L)-.3)/.5);return se*(1.15*_i((ie-.42*K)/(.32*K))*ee-.55*_i((ie-.72*K)/(.28*K))*(1-ee))}:null,he=(L,V)=>e+C(L)-(F?ce(L)*(V/q(L))**2:0)+(U?U(L,V):0),oe=n.lattice==="dac"?null:{aH:106*rs,ramp:14*rs,ts:.85},xe=.95,I=oe?(L,V)=>{let ie=1-_i((L-(oe.aH-oe.ramp))/oe.ramp),K=l(L),se=he(L,V)-oe.ts-K;return K+Math.max(0,se)*ie}:null,N=(()=>{if(n.center!=="stone")return null;let[L,V]=vi(n),ie=L/2,K=V/2,se=jn[n.shape],ee,_e,Me=["haloSq","bagFrame","stepSq","roof"].includes(n.frame)&&xi(n)>0;if(se.kind==="rect"){let de=Math.max(.55,se.rect[2]*K*.5+.35);ee=ie-de,_e=K-de}else{let de=a?.6:se.kind==="curved"?Me?.92:.72:.6;ee=ie*de,_e=K*de}return ee=Math.min(ee,r-1.2),_e=Math.min(_e,.7*(B/2-.95)),ee>=1&&_e>=1?{hx:ee,hz:_e,aH:b(ee),nA:t?1:3,nM:t?2:6}:null})();return{band:!1,R:e,ri:l,bevel:n.edge==="bevel"?n.center==="run"||Od(n)?()=>1:L=>_i((L-f)/.05):null,cradle:a,bombe:i,W:s,H:u,La:r,ch:k,flat:t,aF:f,aS:d,aTan:M,aStep:z,step:J,tTop:h,c:.35,hw:q,ro:he,faceHw:$,xOf:g,thOfX:b,nTop:t&&!a?2:12,oct:n.top==="octagon",Ws:B,cav:oe,rc:I,wt:xe,hole:N}}var Ls=(n,e)=>{let t=Math.abs(e),i=n.ro(t,n.hw(t))-n.ri(t),s=n.bevel?n.bevel(t):0;return s>0?Math.min(n.c+(Gy-n.c)*s,i*.52):Math.min(n.c,i*.3)},hr=(n,e,t)=>{let i=n.ro(Math.abs(e),t);return new P(Math.sin(e)*i,Math.cos(e)*i,t)};function _n(n,e,t){let s=hr(n,e,t),r=n.hw(Math.abs(e)),a=hr(n,e+.002,t).sub(hr(n,e-.002,t)).normalize(),o=hr(n,e,Math.min(t+.002,r)).sub(hr(n,e,Math.max(t-.002,-r))).normalize();return{p:s,n:o.clone().cross(a).normalize(),t:a,b:o}}var Kn=(n,e,t=0)=>hr(n,e+.001,t).distanceTo(hr(n,e-.001,t))/.002;function $y(n,e){let t=Math.abs(e),i=n.hw(t),s=n.ri(t),r=Math.min(.45,i*.3),a=n.ro(t,i),o=Ls(n,t),c=i-o,l=i-Math.min(n.wt??.95,i*.45),h=g=>n.rc?n.rc(t,g):s,u=Math.PI/2,d=[];d.push([s,-l],[s,-l],[s,-(i-r)]);for(let g=1;g<=3;g++){let b=g/3*u;d.push([s+r*(1-Math.cos(b)),-(i-r*(1-Math.sin(b)))])}d.push([s+r,-i],[a-o,-i],[a-o,-i],[n.ro(t,c),-c],[n.ro(t,c),-c]);let f=n.hole;if(f){let g=Math.min(f.hz,c*.72);for(let b=1;b<=f.nA;b++){let m=-c+(c-g)*b/f.nA;d.push([n.ro(t,m),m])}f.jT0=d.length-1;for(let b=1;b<=f.nM;b++){let m=-g+2*g*b/f.nM;d.push([n.ro(t,m),m])}f.jT1=d.length-1;for(let b=1;b<f.nA;b++){let m=g+(c-g)*b/f.nA;d.push([n.ro(t,m),m])}}else for(let g=1;g<n.nTop;g++){let b=-c+2*c*g/n.nTop;d.push([n.ro(t,b),b])}d.push([n.ro(t,c),c],[n.ro(t,c),c],[a-o,i],[a-o,i],[s+r,i],[s+r,i]);for(let g=1;g<=3;g++){let b=g/3*u;d.push([s+r*(1-Math.sin(b)),i-r*(1-Math.cos(b))])}if(d.push([s,l],[s,l],[h(l),l],[h(l),l]),f){let g=Math.min(f.hz,l*.72),b=2;for(let m=1;m<=b;m++){let p=l-(l-g)*m/b;d.push([h(p),p])}f.jC0=d.length-1;for(let m=1;m<=f.nM;m++){let p=g-2*g*m/f.nM;d.push([h(p),p])}f.jC1=d.length-1;for(let m=1;m<b;m++){let p=-g-(l-g)*m/b;d.push([h(p),p])}}else for(let b=1;b<8;b++){let m=l-2*l*b/8;d.push([h(m),m])}return d.push([h(l),-l],[h(l),-l]),d}function Yy(n){let t=Array.from({length:240},(s,r)=>-Math.PI+r/240*on),i=[];if(!n.band){n.flat&&i.push(n.aF-.0012,n.aF+.0012);let s=n.cradle?30:14;for(let r=1;r<s;r++)i.push(n.aF*r/s);n.oct&&i.push(n.thOfX(n.La-n.ch)),n.step&&i.push(n.aStep),n.cav&&i.push(n.cav.aH,n.cav.aH-n.cav.ramp,n.cav.aH-n.cav.ramp/2),n.flat&&i.push(n.aTan),n.hole&&i.push(n.hole.aH,n.hole.aH*.5)}for(let s of i)t.push(s,-s);return[...new Set(t.map(s=>+s.toFixed(5)))].sort((s,r)=>s-r)}function Jy(n){let e=Yy(n),t=e.map(v=>$y(n,v)),i=e.length,s=t[0].length,r=n.hole,a=(v,S)=>{let[E,y]=t[v][S];return[Math.sin(e[v])*E,Math.cos(e[v])*E,y]};if(!r)return An(i,s,a,!0,!0);let o=v=>v+1<i&&e[v]>=-r.aH-1e-4&&e[v+1]<=r.aH+1e-4,c=new Float32Array(i*s*3),l=0;for(let v=0;v<i;v++)for(let S=0;S<s;S++){let E=a(v,S);c[l++]=E[0],c[l++]=E[1],c[l++]=E[2]}let h=[];for(let v=0;v<i;v++)for(let S=0;S<s;S++){if(o(v)&&(S>=r.jT0&&S<r.jT1||S>=r.jC0&&S<r.jC1))continue;let E=v*s+S,y=(v+1)%i*s+S,w=(v+1)%i*s+(S+1)%s,C=v*s+(S+1)%s;h.push(E,y,w,E,w,C)}let u=0;for(let v=0;v<h.length;v+=3){let S=h[v]*3,E=h[v+1]*3,y=h[v+2]*3;u+=c[S]*(c[E+1]*c[y+2]-c[E+2]*c[y+1])-c[S+1]*(c[E]*c[y+2]-c[E+2]*c[y])+c[S+2]*(c[E]*c[y+1]-c[E+1]*c[y])}if(u<0)for(let v=0;v<h.length;v+=3){let S=h[v+1];h[v+1]=h[v+2],h[v+2]=S}let d=new bt;d.setAttribute("position",new vt(c,3)),d.setIndex(h),d.computeVertexNormals();let f=[];for(let v=0;v<i;v++)o(v)&&f.push(v);let g=f[0],b=f[f.length-1]+1,m=[],p=(t[g][r.jT0][0]+t[g][r.jC0][0])/2,_=(v,S,E)=>{let y=S[0]-v[0],w=S[1]-v[1],C=S[2]-v[2],D=E[0]-v[0],B=E[1]-v[1],X=E[2]-v[2],k=w*X-C*B,$=C*D-y*X,Q=y*B-w*D,z=-(v[0]+S[0]+E[0])/3,J=p-(v[1]+S[1]+E[1])/3,G=-(v[2]+S[2]+E[2])/3;k*z+$*J+Q*G<0?m.push(...v,...E,...S):m.push(...v,...S,...E)},M=(v,S,E,y)=>{_(v,S,E),_(v,E,y)};for(let v of f)M(a(v,r.jT0),a(v+1,r.jT0),a(v+1,r.jC1),a(v,r.jC1)),M(a(v,r.jT1),a(v+1,r.jT1),a(v+1,r.jC0),a(v,r.jC0));for(let v of[g,b])for(let S=0;S<r.nM;S++)M(a(v,r.jT0+S),a(v,r.jT0+S+1),a(v,r.jC1-S-1),a(v,r.jC1-S));let x=new bt;return x.setAttribute("position",new vt(new Float32Array(m),3)),x.computeVertexNormals(),d.userData.walls=x,d}var Zy=(n,e,t)=>({g:n,rg:e,o:t,bead:[],rims:[],bars:[],letter:[],flutes:[],notch:[],chev:[],cnt:{accent:0,side:0},list:[]});function Jt(n,e,t,i,s,r,a){i>.2&&(n.skip&&n.skip(s,i)||(n.g.add(Sm(e,t,i,s,r)),n.cnt[t]!=null&&n.cnt[t]++,a&&n.list.push([t,e,Math.round(a*20)/20])))}var Ui=(n,e,t,i,s="accent",r=.04)=>{let{p:a,n:o}=_n(n.rg,e,t);Jt(n,"round",s,i/2,a.addScaledVector(o,r),Dn(o),i)},si=(n,e,t,i,s=.5)=>{let{p:r,n:a}=_n(n.rg,e,t);n.bead.push([...r.addScaledVector(a,i*s).toArray(),i])},Nn=(n,e,t=.05)=>e.map(([i,s])=>{let{p:r,n:a}=_n(n,i,s);return r.addScaledVector(a,t)}),Ed=1.1,Qy=n=>({none:.2,rail:.7,band:1.5,milgrain:.55,pave:Ed+.15,bevel:.15,notch:1.15})[n.edge],Ht=(n,e)=>n.rg.hw(Math.abs(e))-Ls(n.rg,e)-Qy(n.o);function gr(n,e,t,i,{z:s=0,full:r=!1}={}){let{rg:a}=n,o=[];if(r){let u=i(0);if(!(u>0))return o.step=0,o;let d=Math.max(6,Math.round(on*a.ro(0,s)/u));for(let f=0;f<d;f++)o.push(-Math.PI+(f+.5)/d*on);return o.step=on/d,o}let c=Math.sign(t-e)||1,l=e,h=!0;for(let u=0;u<400;u++){let d=i(l);if(!(d>0))break;let f=d/Kn(a,l,s)*c,g=l+f*(h?.5:1);if((g+f*.5-t)*c>1e-4)break;o.push(g),l=g,h=!1}return o}function Fi(n,e,t,{dT:i=1.5,honey:s=!1,full:r=!1,uOf:a=d=>Ht(n,d),zOf:o=()=>0,role:c="accent",dCap:l=2.4,cross:h=!1,every:u=1}={}){let d=s?.88:1,f=a(r?0:e);if(f<.5)return;let g=Math.max(1,Math.round((2*f-(s?.12*i:0))/((i+.1)*d))),b=M=>{let x=a(M),v=g,S;for(;S=Math.min(l,s?2*x/(1+(v-1)*d)-.1:2*x/v-.1),!(S>=.9||v<=1);)v--;return{u:x,r:v,d:S,pz:(S+.1)*d}},m=gr(n,e,t,M=>{let x=b(M);return x.d>=.9?x.d+.1:0},{full:r}),p=r?1:Math.sign(t-e)||1,_=m.length-1;m.forEach((M,x)=>{let v=b(M);g=v.r;let S=o(M),E=r?m.step/2:(v.d+.1)/Kn(n.rg,M)/2*p;for(let w=0;w<v.r;w++){let C=S+(w-(v.r-1)/2)*v.pz,D=s&&w%2?E:0;if(!(s&&w%2&&!r&&x===_)&&(Ui(n,M+D,C,v.d,c),s))for(let B of[-1,1])si(n,M+D+E,C+B*v.pz/3,v.d*.15)}let y=h&&((x+1)%u===0||x===_&&!r);if(h){let w=C=>n.bars.push(an(Nn(n.rg,[-1,-.5,0,.5,1].map(D=>[C,S+D*(v.u+.1)]),.1),.2,12));y&&w(M+E),x===0&&!r&&w(M-E)}if(h?!y:!s)for(let w=0;w<=v.r;w++){let C=S+(w-v.r/2)*v.pz;si(n,M+E,C,v.d*.17),x===0&&!r&&si(n,M-E,C,v.d*.17)}})}function Xl(n,e,t,{zOf:i,d:s,full:r=!1,role:a="accent"}){let o=gr(n,e,t,()=>s+.1,{full:r}),c=r?1:Math.sign(t-e)||1;o.forEach((l,h)=>{let u=i(l);Ui(n,l,u,s,a);let d=r?o.step/2:(s+.1)/Kn(n.rg,l,u)/2*c;for(let f of[-1,1])si(n,l+d,i(l+d)+f*s*.46,s*.17),h===0&&!r&&si(n,l-d,i(l-d)+f*s*.46,s*.17)})}function Tm(n,e,t,{dT:i=1.6,full:s=!1,cross:r=!0,dCap:a=2.4}={}){let{rg:o}=n,c=Ht(n,s?0:e);if(c<.8)return;let l=Math.max(1,Math.round(2*c/(i+.55))),h=_=>{let M=Ht(n,_),x=2*M/l;return{u:M,pz:x,d:Math.min(a,x-.5)}},u=gr(n,e,t,_=>{let M=h(_);return M.d>=.85?r?M.pz:M.d+.08:0},{full:s});if(!u.length)return;let d=s?1:Math.sign(t-e)||1,f=_=>s?u.step/2:(r?h(_).pz:h(_).d+.08)/Kn(o,_)/2*d;for(let _ of u){let M=h(_);for(let x=0;x<l;x++)Ui(n,_,(x-(l-1)/2)*M.pz,M.d,"accent",-.02)}let g=u[0]-f(u[0]),b=u[u.length-1]+f(u[u.length-1]),m=Math.max(16,Math.round(Math.abs(b-g)*o.ro(0,0)/.4));for(let _=0;_<=l;_++){let M=[];for(let x=0;x<=m;x++){let v=g+(b-g)*x/m;M.push([v,(_-l/2)*h(v).pz])}n.bars.push(an(Nn(o,M,.06),.15,Math.max(40,m)))}let p=_=>{let M=h(_);n.bars.push(an(Nn(o,[-1,-.5,0,.5,1].map(x=>[_,x*M.u]),.06),.14,12))};if(r)u.forEach((_,M)=>{p(_+f(_)),M===0&&!s&&p(_-f(_))});else if(!s)for(let _ of[g,b])p(_)}function Pm(n,e,t,{zOf:i=()=>0,hlOf:s,full:r=!1,carre:a=!1,rails:o=[1,1],caps:c=!0}){let{rg:l}=n,h=p=>(a?2*p:p)+.07,u=gr(n,e,t,p=>{let _=s(p);return _>=.6?h(_):0},{full:r});if(!u.length)return null;let d=r?1:Math.sign(t-e)||1;for(let p of u){let _=s(p),{p:M,n:x}=_n(l,p,i(p));Jt(n,a?"carre":"bag2","side",a?_:_/2,M.addScaledVector(x,-.03),fr(x,wo),_*2)}let f=p=>r?u.step/2:h(s(p))/Kn(l,p)/2*d,g=r?-Math.PI:u[0]-f(u[0]),b=r?Math.PI:u[u.length-1]+f(u[u.length-1]),m=Math.max(16,Math.round(Math.abs(b-g)*l.ro(0,0)/.4));for(let p of[-1,1])if(o[(p+1)/2]){let _=[];for(let M=0;M<=m;M++){let x=g+(b-g)*M/m;_.push([x,i(x)+p*(s(x)+.2)])}n.rims.push(an(Nn(l,_,.07),.2,Math.max(40,m)))}if(!r&&c)for(let p of[g,b])n.rims.push(an(Nn(l,[-1,0,1].map(_=>[p,i(p)+_*(s(p)+.2)]),.07),.18,10));return{A0:g,A1:b}}function Im(n,e,t,{zOf:i,dOf:s,full:r=!1,role:a="accent"}){let{rg:o}=n;if(r){let u=s(0);u>=.85&&Xl(n,e,t,{zOf:i,d:u,full:r,role:a});return}let c=Math.sign(t-e)||1,l=e,h=!0;for(let u=0;u<300;u++){let d=s(l);if(!(d>=.85))break;let f=(d+.1)/Kn(o,l,i(l))*c;if((l+f-t)*c>1e-4)break;let g=l+f/2;Ui(n,g,i(g),d,a);for(let b of[-1,1])si(n,l+f,i(l+f)+b*d*.46,d*.17),h&&si(n,l,i(l)+b*d*.46,d*.17);h=!1,l+=f}}function So(n,e,t,{full:i=!1,dT:s=1.5,carre:r=!1,side:a="pave",every:o=1,big:c=!1,slim:l=!1}={}){let h=a==="rd",u=c?2.9:l?1.2:r?1.45:h?n.o.paveD==="small"?2.3:1.6:n.o.paveD==="small"&&a==="pave"?1.75:2.05,d=b=>{let m=Ht(n,b);return Math.min(u,h?m*(u>2?.5:.42):m-.2)},f=b=>Ht(n,b)-d(b)-.45;if(!Pm(n,e,t,{hlOf:d,full:i,carre:r})||c)return;let g=(b,m)=>m*(d(b)+.45+f(b)/2);if(h)for(let b of[-1,1])Im(n,e,t,{zOf:m=>g(m,b),dOf:m=>Math.min(2.4,f(m)-.2),full:i});else if(f(i?0:e)>=1)for(let b of[-1,1])Fi(n,e,t,{dT:s,full:i,cross:a==="tiers",every:o,uOf:m=>f(m)/2,zOf:m=>g(m,b)})}function eM(n,e,t,i,{full:s=!1,dT:r=1.5}={}){let a=i==="ladder3"||i==="ladder3s"?3:2,o=i==="ladder2s"||i==="ladder3s",c=1.2,l=Ht(n,s?0:e),h=i==="ladder2"&&l-2*Math.min(1.7,l*.33)-.4>=1,u=d=>{let f=Ht(n,d);if(i==="ladder3"){let b=f/3-.2;return{hl:b,zc:[-(2*b+.4),0,2*b+.4],side:0}}if(o&&a===3){let b=(f-c/2-.05)*2/3;return{hl:(b-c-.65)/2,zc:[-b,0,b],rows:[-1.5*b,-.5*b,.5*b,1.5*b]}}if(o){let b=(2*f-3*(c+.25)-.8)/4,m=c/2+.325+b;return{hl:b,zc:[-m,m],rows:[-(f-c/2-.05),0,f-c/2-.05]}}if(!h){let b=f/2-.2;return{hl:b,zc:[-(b+.2),b+.2],side:0}}let g=Math.min(1.7,f*.33);return{hl:g,zc:[-(g+.2),g+.2],side:f-2*g-.4}};if(u(s?0:e).hl<.6){Fi(n,e,t,{dT:r,full:s});return}for(let d=0;d<a;d++)Pm(n,e,t,{zOf:f=>u(f).zc[d],hlOf:f=>u(f).hl,full:s,rails:i==="ladder3"?d===1?[0,0]:[1,1]:o||d===0?[1,1]:[0,1]});if(o)for(let d=0;d<=a;d++)Im(n,e,t,{zOf:f=>u(f).rows[d],dOf:()=>c,full:s});else if(h)for(let d of[-1,1])Fi(n,e,t,{dT:r,full:s,uOf:f=>u(f).side/2,zOf:f=>d*(2*u(f).hl+.45+u(f).side/2)})}function wm(n,e,t,{full:i=!1,sides:s=!1,dT:r=1.5}={}){let{rg:a}=n,o=p=>{let _=Ht(n,p);return s?Math.max(_*.56,_-2*(r+.1)-.35):_},c=p=>{let _=o(p),M=Math.max(1,Math.round(2*_/1.3)),x=2*_/M;return{u:_,n:M,w:x,sc:Math.min(.62,(x-.08)/2)}};if(c(i?0:e).u<1)return;let l=p=>4*c(p).sc+.42,h=gr(n,e,t,p=>c(p).sc>=.38?l(p):0,{full:i});if(!h.length)return;let u=i?1:Math.sign(t-e)||1,d=p=>i?h.step/2:l(p)/Kn(a,p)/2*u,f=p=>n.bars.push(an(Nn(a,[-1,-.5,0,.5,1].map(_=>[p,_*(o(p)+.1)]),.1),.2,12));h.forEach((p,_)=>{let M=c(p);for(let x=0;x<M.n;x++){let v=_n(a,p,(x-(M.n-1)/2)*M.w);Jt(n,"bag2","side",M.sc,v.p.addScaledVector(v.n,-.03),fr(v.n,v.t),M.sc*4)}f(p+d(p)),_===0&&!i&&f(p-d(p))});let g=i?-Math.PI:h[0]-d(h[0]),b=i?Math.PI:h[h.length-1]+d(h[h.length-1]),m=Math.max(16,Math.round(Math.abs(b-g)*a.ro(0,0)/.4));for(let p of[-1,1]){let _=[];for(let M=0;M<=m;M++){let x=g+(b-g)*M/m;_.push([x,p*(o(x)+.12)])}n.rims.push(an(Nn(a,_,.07),.19,Math.max(40,m)))}if(s)for(let p of[-1,1])Fi(n,e,t,{dT:r,full:i,uOf:_=>(Ht(n,_)-o(_)-.35)/2,zOf:_=>p*(o(_)+.35+(Ht(n,_)-o(_)-.35)/2)})}function Am(n,e,t,{full:i=!1,two:s=!1,dT:r=1.5}={}){let{rg:a}=n,o=p=>{let _=Ht(n,p);return s?Math.min(2.75,Math.max(_*.5,_-2*(r+.1)-.35)):_},c=o(i?0:e);if(c<1)return;let l=s?2:Math.max(1,Math.round(2*c/2.5)),h=p=>{let _=o(p),M=2*_/l;return{u:_,pz:M,sc:Math.min(s?1.1:.8,(M-.5)/2)}},u=gr(n,e,t,p=>{let _=h(p);return _.sc>=.45?4*_.sc+.1:0},{full:i});if(!u.length)return;let d=i?1:Math.sign(t-e)||1;for(let p of u){let _=h(p);for(let M=0;M<l;M++){let x=_n(a,p,(M-(l-1)/2)*_.pz);Jt(n,"bag2","side",_.sc,x.p.addScaledVector(x.n,-.03),fr(x.n,x.t),_.sc*4)}}let f=p=>i?u.step/2:(4*h(p).sc+.1)/Kn(a,p)/2*d,g=i?-Math.PI:u[0]-f(u[0]),b=i?Math.PI:u[u.length-1]+f(u[u.length-1]),m=Math.max(16,Math.round(Math.abs(b-g)*a.ro(0,0)/.4));for(let p=0;p<=l;p++){let _=[];for(let M=0;M<=m;M++){let x=g+(b-g)*M/m;_.push([x,(p-l/2)*h(x).pz])}n.rims.push(an(Nn(a,_,.07),.19,Math.max(40,m)))}if(!i)for(let p of[g,b])n.rims.push(an(Nn(a,[-1,0,1].map(_=>[p,_*h(p).u]),.07),.18,10));if(s&&Ht(n,i?0:e)-c-.35>=1)for(let p of[-1,1])Fi(n,e,t,{dT:r,full:i,uOf:_=>(Ht(n,_)-o(_)-.35)/2,zOf:_=>p*(o(_)+.35+(Ht(n,_)-o(_)-.35)/2)})}function Eo(n,e,t,i=!1){let{rg:s,o:r}=n;if(r.edge==="none")return;let a=(h,u)=>s.hw(Math.abs(h))-Ls(s,h)-u;if(r.edge==="pave"){for(let h of[-1,1])Xl(n,e,t,{zOf:u=>h*a(u,Ed/2+.05),d:Ed,full:i});return}if(r.edge==="bevel"){for(let h of[-1,1]){let u=b=>{let m=Math.abs(b),p=s.hw(m),_=Ls(s,b),M=(s.ro(m,p)-_+s.ro(m,p-_))/2,x=new P(Math.sin(b),Math.cos(b),0);return{c:_,p:new P(x.x*M,x.y*M,h*(p-_/2)),n:x.clone().multiplyScalar(Math.SQRT1_2).add(new P(0,0,h*Math.SQRT1_2)),up:x.clone().multiplyScalar(-Math.SQRT1_2).add(new P(0,0,h*Math.SQRT1_2))}},d=b=>Math.min(1.25,u(b).c*Math.SQRT2-.45),f=gr(n,e,t,b=>d(b)>=.85?d(b)+.1:0,{full:i}),g=i?1:Math.sign(t-e)||1;f.forEach((b,m)=>{let p=u(b),_=d(b);Jt(n,"round","accent",_/2,p.p.clone().addScaledVector(p.n,.04),Dn(p.n),_);let M=i?f.step/2:(_+.1)/Kn(s,b)/2*g,x=v=>{let S=u(v);for(let E of[-1,1])n.bead.push([...S.p.clone().addScaledVector(S.up,E*_*.46).addScaledVector(S.n,_*.08).toArray(),_*.16])};x(b+M),m===0&&!i&&x(b-M)})}return}if(r.edge==="notch"){let h=i?-Math.PI:e,u=i?Math.PI:t,d=Math.abs(u-h)*s.ro(0,0),f=Math.max(3,Math.round(d/1.85));for(let g of[-1,1])for(let b=0;b<f+(i?0:1);b++){let m=h+(u-h)*b/f,p=_n(s,m,g*a(m,.5)),_=new Yi(1.2,.95,1.15);_.deleteAttribute("uv"),_.applyMatrix4(new it().makeBasis(p.t,p.n,p.b).setPosition(p.p.clone().addScaledVector(p.n,.12)));let M=_.toNonIndexed();M.computeVertexNormals(),n.notch.push(M)}return}let o=i?-Math.PI:e,c=i?Math.PI:t,l=Math.abs(c-o)*s.ro(0,0);for(let h of[-1,1])if(r.edge==="rail"||r.edge==="band"){let u=r.edge==="band",d=Math.max(16,Math.round(l/.4)),f=[];for(let g=0;g<=d;g++){let b=o+(c-o)*g/d;f.push([b,h*a(b,u?1.3:.28)])}n.rims.push(an(Nn(s,f,u?.06:.1),u?.17:.24,Math.max(40,d)))}else{let u=Math.max(8,Math.round(l/.36));for(let d=0;d<u+(i?0:1);d++){let f=o+(c-o)*d/u;si(n,f,h*a(f,.22),.15,.35)}}}function tM(n,e,t,{dT:i=1.4}={}){let{rg:s}=n,r=Math.sign(t-e)||1,a=(e+t)/2,o=Kn(s,a),c=Math.abs(t-e)*o,l=Math.min(i,1.4),h=n.o.tierRows===2?2:1,u=h*(l+.08)-.08,d=h===2?.36:.19,f=_=>e+r*_/o,g=_=>Ht(n,f(_)),b=Math.min(2.6,g(c/2)*.55),m=u+(h===2?1.15:.8),p=_=>{let M=g(_)+.1,x=[];for(let v=-8;v<=8;v++){let S=M*v/8,E=_-b*(Math.abs(S)/M);E>.05&&E<c&&x.push([f(E),S])}return x};for(let _=b+u/2+.25;_+u/2<=c+.05;_+=m){let M=g(_)-l/2;if(M<.2)break;let x=Math.atan(b/(M+l/2)),v=(l+.1)*Math.cos(x),S=Math.floor(M/v);for(let y=0;y<h;y++){let w=_+(y-(h-1)/2)*(l+.08);for(let C=-S;C<=S;C++){let D=C*v,B=w-b*(Math.abs(D)/(M+l/2));(h===1||B>l/2&&B<c-l/2+.05)&&Ui(n,f(B),D,l)}}let E=p(_-m/2);if(E.length>3&&n.bars.push(an(Nn(s,E,.1),d,24)),_+m+u/2>c+.05){let y=p(_+m/2);y.length>3&&n.bars.push(an(Nn(s,y,.1),d,24))}}}function Lm(n,e,t,i,s,r,a=!0,o=!0,c=0,l=!1){let h=i[0]-t[0],u=i[1]-t[1],d=Math.hypot(h,u)||1e-6,f=s/2/d,g=a?[t[0]-h*f,t[1]-u*f]:t,b=o?[i[0]+h*f,i[1]+u*f]:i,m=Math.max(2,Math.ceil((d+s)/.9)),p=[];for(let S=0;S<=m;S++){let E=S/m;p.push(_n(n,e(g[0]+(b[0]-g[0])*E),g[1]+(b[1]-g[1])*E))}let _=p.map((S,E)=>{let y=p[Math.min(m,E+1)].p.clone().sub(p[Math.max(0,E-1)].p).normalize(),w=S.n.clone().cross(y).normalize().multiplyScalar(s/2),C=S.p.clone().addScaledVector(S.n,-.15),D=S.p.clone().addScaledVector(S.n,r),B=C.clone().sub(w),X=C.clone().add(w),k=D.clone().sub(w),$=D.clone().add(w);if(l){let ce=r*Dm,U=[B,B];for(let he=0;he<=16;he++){let oe=he/16*Math.PI;U.push(S.p.clone().addScaledVector(S.n,ce+(r-ce)*Math.sin(oe)).addScaledVector(w,-Math.cos(oe)))}return U.push(X,X),U}if(!c)return[B,k,k,$,$,X,X,B];let Q=1-c/(s/2),z=S.n.clone().multiplyScalar(-c),J=k.clone().add(z),G=$.clone().add(z),q=D.clone().addScaledVector(w,-Q),F=D.clone().addScaledVector(w,Q);return[B,J,J,q,q,F,F,G,G,X,X,B]}),M=_[0].length,x=S=>Array(M).fill(S.p.clone().addScaledVector(S.n,r/2)),v=[x(p[0]),_[0],..._,_[m],x(p[m])];return An(v.length,M,(S,E)=>v[S][E].toArray(),!1,!0)}var Dm=.4;function Nm(n,e,t,i,s,r=0,a=!1){let o=_n(n,e(t[0]),t[1]),c=Dn(o.n);if(a){let g=s*Dm,b=[new Le(i/2,-.15)];for(let p=0;p<=8;p++){let _=p/8*(Math.PI/2);b.push(new Le(Math.max(.001,i/2*Math.cos(_)),g+(s-g)*Math.sin(_)))}let m=new Qr(b,20).toNonIndexed();return m.deleteAttribute("uv"),m.applyQuaternion(c),m.translate(o.p.x,o.p.y,o.p.z),m}let l=s-r+.15,h=new Zr(i/2,i/2,l,18).toNonIndexed();h.deleteAttribute("uv"),h.applyQuaternion(c);let u=o.p.clone().addScaledVector(o.n,l/2-.15);if(h.translate(u.x,u.y,u.z),!r)return h;let d=new Zr(i/2-r,i/2,r,18).toNonIndexed();d.deleteAttribute("uv"),d.applyQuaternion(c);let f=o.p.clone().addScaledVector(o.n,s-r/2);return d.translate(f.x,f.y,f.z),Xn([h,d])}function Fm(n,e,t,i,s,r,a,{bv:o=0,dMax:c=1.1,rd:l=!1,wOf:h=null,across:u=!1}={}){let{rg:d}=n,f=[],g=[],b=Hl[e].map(M=>M.map(t)),m=b.flatMap(M=>M.slice(1).map((x,v)=>[M[v],x])),p=(M,[x,v])=>{let S=v[0]-x[0],E=v[1]-x[1],y=kt(((M[0]-x[0])*S+(M[1]-x[1])*E)/(S*S+E*E||1),0,1);return Math.hypot(M[0]-x[0]-S*y,M[1]-x[1]-E*y)},_=(M,x,v)=>!!h&&m.some(S=>!(S[0]===x&&S[1]===v)&&p(M,S)<.001);if(Hl[e].forEach((M,x)=>{let v=b[x],S=v.length-1,E=Math.hypot(M[0][0]-M[S][0],M[0][1]-M[S][1])<1e-6;for(let y=0;y<S;y++){let w=h?h(v[y],v[y+1]):s,C=!E&&y===0&&!_(v[y],v[y],v[y+1]),D=!E&&y===S-1&&!_(v[y+1],v[y],v[y+1]);f.push(Object.assign([v[y],v[y+1]],{w,eA:C,eB:D})),g.push(Lm(d,i,v[y],v[y+1],w,r,C,D,o,l).toNonIndexed())}for(let y=E?0:1;y<S;y++)g.push(Nm(d,i,v[y],s,r,o,l))}),n.letter.push(...g),a==="bag")for(let M of f){let[x,v]=M,S=M.w,E=Math.hypot(v[0]-x[0],v[1]-x[1]);if(u&&Math.abs(v[0]-x[0])>=Math.abs(v[1]-x[1])){let X=(S-.5)/2,k=X+.07,$=E+(M.eA?S*.3:0)+(M.eB?S*.3:0),Q=Math.max(1,Math.floor($/k)),z=($-Q*k)/2-(M.eA?S*.3:0);for(let J=0;J<Q;J++){let G=(z+(J+.5)*k)/E,q=_n(d,i(x[0]+(v[0]-x[0])*G),x[1]+(v[1]-x[1])*G);Jt(n,"bag2","side",X/2,q.p.addScaledVector(q.n,r-.02),fr(q.n,wo),X*2)}continue}let y=kt((S-.6)/2,.35,.8),w=(E+S*.5)/(4*y+.1),C=Math.max(1,u?Math.round(w):Math.floor(w)),D=Math.min(y,((E+S*.5)/C-.1)/4),B=_n(d,i(v[0]),v[1]).p.sub(_n(d,i(x[0]),x[1]).p).normalize();for(let X=0;X<C;X++){let k=(X+.5)/C,$=_n(d,i(x[0]+(v[0]-x[0])*k),x[1]+(v[1]-x[1])*k);Jt(n,"bag2","side",D,$.p.addScaledVector($.n,r-.02),fr($.n,B),D*4)}}else if(a==="two"){let M=Math.min(1.15,(s-.5)/2),x=M/2+.05,v=[];for(let S of f){let[E,y]=S,w=Math.hypot(y[0]-E[0],y[1]-E[1]),C=(y[0]-E[0])/w,D=(y[1]-E[1])/w,B=S.eA?x:-x,X=S.eB?x:-x,k=w+B+X,$=Math.max(1,Math.round(k/(M+.1)));for(let Q=0;Q<=$;Q++)for(let z of[-1,1]){let J=-B+k*Q/$,G=[E[0]+C*J-D*z*x,E[1]+D*J+C*z*x];v.some(q=>Math.hypot(q[0]-G[0],q[1]-G[1])<M*.92)||(v.push(G),Ui(n,i(G[0]),G[1],M,"accent",r+.03))}}}else if(a){let M=Math.min(c,s-.42-2*o),x=[];for(let[v,S]of f){let E=Math.hypot(S[0]-v[0],S[1]-v[1]),y=Math.max(1,Math.round(E/(M+.12)));for(let w=0;w<=y;w++){let C=[v[0]+(S[0]-v[0])*w/y,v[1]+(S[1]-v[1])*w/y];x.some(D=>Math.hypot(D[0]-C[0],D[1]-C[1])<M*.9)||(x.push(C),Ui(n,i(C[0]),C[1],M,"accent",r+.03))}}}return f}var Rd=(n,e,t)=>{let i=1/0;for(let[s,r]of n){let a=r[0]-s[0],o=r[1]-s[1],c=kt(((e-s[0])*a+(t-s[1])*o)/(a*a+o*o||1),0,1);i=Math.min(i,Math.hypot(e-s[0]-a*c,t-s[1]-o*c))}return i};function nM(n,e,t,i,{dT:s=1.3}={}){let{rg:r,o:a}=n,o=Math.sign(t-e)||1,c=(e+t)/2,l=Kn(r,c),h=Math.abs(t-e)*l,u=w=>e+o*w/l,d=(Ht(n,c)+Ht(n,t))/2,f=Math.min(h-1.2,10),g=Math.min(2*d-1,f*.75);if(!Hl[i]||f<4||g<2.6){Fi(n,e,t,{dT:s});return}let b=a.letterStone==="on2",m=b?kt(f*.27,2.1,2.6):kt(f*.19,1.15,1.6),p=.65,_=-o,x=Fm(n,i,([w,C])=>[h/2+(3-C)/6*(f-m),_*((w-2)/4)*(g-m)],u,m,a.letterStone!=="off"?p:.8,a.letterStone==="bag"?"bag":b?"two":a.letterStone==="on",{rd:a.letterStone==="off"}),v=(w,C)=>Rd(x,w,C),S=Math.min(s,1.3),E=S+.1,y=new Set;for(let w=E/2+.1;w+S/2<=h;w+=E){let C=Ht(n,u(w)),D=Math.max(1,Math.floor(2*C/E)),B=2*C/D;for(let X=0;X<D;X++){let k=(X-(D-1)/2)*B;if(!(v(w,k)<m/2+S/2+.12)){Ui(n,u(w),k,Math.min(S,B-.1));for(let[$,Q]of[[-1,-1],[-1,1],[1,-1],[1,1]]){let z=w+$*E/2,J=k+Q*B/2,G=`${Math.round(z*4)},${Math.round(J*4)}`;y.has(G)||v(z,J)<m/2+.25||z<.1||z>h||Math.abs(J)>C+.2||(y.add(G),si(n,u(z),J,S*.16))}}}}}function iM(n,e,t){let{rg:i}=n,s=Math.sign(t-e)||1,r=(e+t)/2,a=Kn(i,r),o=Math.abs(t-e)*a,c=_=>e+s*_/a,l=_=>Ht(n,c(_))+.1,h=1.25,u=Math.min(2.6,l(o/2)*.62),d=1.5,f=14,g=5;n.chev.push(An(f,g,(_,M)=>{let x=o*_/(f-1),v=l(x)*(-1+2*M/(g-1)),S=_n(i,c(x),v);return S.p.addScaledVector(S.n,.06).toArray()},!1,!1).toNonIndexed());for(let _=d+u+h/2;_<=o-h*.3;_+=h+.12){let M=l(_-u/2);for(let x of[-1,1])n.chev.push(Lm(i,c,[_,0],[_-u,x*M],h,.55,!1,!1,h*.42).toNonIndexed());n.chev.push(Nm(i,c,[_,0],h,.55,h*.42))}let b=l(d/2)-.3,m=1,p=Math.max(1,Math.floor(2*b/(m+.12)));for(let _=0;_<p;_++)Ui(n,c(d/2),(_-(p-1)/2)*(m+.12),m)}function ql(n,e,t,i,s=!1,r=1){let a=Fd[n.o.paveD];if(e==="pave")Fi(n,t,i,{dT:a,full:s});else if(e==="honey")Fi(n,t,i,{dT:Math.min(a,1.5),honey:!0,full:s});else if(e==="grid")Tm(n,t,i,{dT:a+.1,full:s});else if(e==="ladder"||e==="carre")So(n,t,i,{full:s,dT:Math.min(a,1.5),carre:e==="carre"});else if(e==="ladderRd")So(n,t,i,{full:s,side:"rd"});else if(e==="ladderS")So(n,t,i,{full:s,dT:Math.min(a,1.7),slim:!0});else if(e==="bagLong2")Am(n,t,i,{full:s,two:!0,dT:Math.min(a,1.5)});else if(e==="tiersBagP")wm(n,t,i,{full:s,sides:!0,dT:Math.min(a,1.5)});else if(e==="ladderBig")So(n,t,i,{full:s,big:!0});else if(e==="ladderT")So(n,t,i,{full:s,dT:Math.min(a,1.5),side:"tiers",every:n.o.tierRows});else if(e==="ladder2"||e==="ladder2s"||e==="ladder3"||e==="ladder3s")eM(n,t,i,e,{full:s,dT:Math.min(a,1.5)});else if(e==="rows")Tm(n,t,i,{dT:n.o.paveD==="big"?2.7:a+.1,full:s,cross:!1,dCap:n.o.paveD==="big"?2.9:2.4});else if(e==="tiersBag")wm(n,t,i,{full:s});else if(e==="chevronPlain")iM(n,t,i);else if(e==="bagLong")Am(n,t,i,{full:s});else if(e==="tiers")Fi(n,t,i,{dT:a,full:s,cross:!0,every:n.o.tierRows});else if(e==="chevron")tM(n,t,i,{dT:a});else if(e==="letter")nM(n,t,i,r>0?n.o.letter:n.o.letter2||n.o.letter,{dT:Math.min(a,1.3)});else if(e==="paveBig"){let o=Ht(n,t),c=kt(o*.8,1.4,2.4),l=Math.min(1.4,o-c/2-.2);if(Xl(n,t,i,{zOf:()=>0,d:c,full:s}),l>=.85)for(let h of[-1,1])Xl(n,t,i,{zOf:()=>h*(c/2+.12+l/2),d:l,full:s})}Eo(n,t,i,s)}var Um=(n,e,t,i=.2)=>{let s=new Ka(t,i,8,32);return s.deleteAttribute("uv"),s.applyQuaternion(new Kt().setFromUnitVectors(wo,e)),s.translate(n.x,n.y,n.z),s};function sM(n){let{rg:e,o:t}=n,i={full:Math.PI,half:Math.PI/2,third:Math.PI/3}[t.cover],s=t.cover==="full",r=t.bandStones;if(r==="stations"||r==="flush"){let a=2*i*e.ro(0,0),o=r==="flush"?Math.max(3,Math.round(a/9.5)):Math.max(1,Math.round(a/12.5)),c=h=>s?h/o*on:-i+(h+.5)/o*2*i,l=kt(2*Ht(n,0)-(r==="flush"?2.2:.7),1.6,3);for(let h=0;h<o;h++){let u=c(h),{p:d,n:f}=_n(e,u,0),g=d.addScaledVector(f,r==="flush"?.02:.22);Jt(n,"round",r==="flush"?"accent":"side",l/2,g,Dn(f),l),n.rims.push(Um(g,f,l/2+(r==="flush"?.07:.2),r==="flush"?.09:.3))}if(r==="stations"){let h=(l/2+.75)/e.ro(0,0),u=Math.min(Fd[t.paveD],1.5),d=s?Array.from({length:o},(f,g)=>[c(g)+h,c(g)+on/o-h]):[[-i,c(0)-h],...Array.from({length:o-1},(f,g)=>[c(g)+h,c(g+1)-h]),[c(o-1)+h,i]];for(let[f,g]of d)(g-f)*e.ro(0,0)>2.4&&Fi(n,f,g,{dT:u,honey:t.bandW>=7})}Eo(n,-i,i,s);return}if(r==="plain"){Eo(n,-i,i,s);return}ql(n,r,-i,i,s)}function rM(n,e,t){let i=!1,s=1/0,r=n.length;for(let a=0,o=r-1;a<r;o=a++){let c=n[a],l=n[o];c[1]>t!=l[1]>t&&e<(l[0]-c[0])*(t-c[1])/(l[1]-c[1])+c[0]&&(i=!i);let h=l[0]-c[0],u=l[1]-c[1],d=kt(((e-c[0])*h+(t-c[1])*u)/(h*h+u*u||1),0,1);s=Math.min(s,Math.hypot(e-c[0]-h*d,t-c[1]-u*d))}return i?-s:s}function Td(n){let e=n.length,t=[0];for(let s=0;s<e;s++){let r=n[s],a=n[(s+1)%e];t.push(t[s]+Math.hypot(a[0]-r[0],a[1]-r[1]))}let i=t[e];return{L:i,at(s){let r=(s%i+i)%i,a=0;for(;a<e-1&&t[a+1]<r;)a++;let o=n[a],c=n[(a+1)%e],l=(r-t[a])/(t[a+1]-t[a]||1),h=c[0]-o[0],u=c[1]-o[1],d=Math.hypot(h,u)||1;return{p:[o[0]+h*l,o[1]+u*l],t:[h/d,u/d]}}}}function aM(n){let{rg:e,o:t,g:i}=n,s=["head","settings"].includes(t.twoTone)?":alt":"",r=Mo(t.shape),a=t.centerD/2,o=-r.bottom*a,c=r.top*a,l=t.center==="letter",h=t.center==="stone",u=t.center==="plain",d=[],f=0,g=null,b=0,m=0,p=[],_=e.H,M=t.plinth==="on"&&(h||u)?Vy:0,x=a+pt+.3,v=[e.La-.12,e.W/2-e.c-.12],S=t.frame==="roof"&&xi(t)?kt(.48*(Math.min(v[0],v[1])-x),.7,1.8):0,E=t.frame==="stepSq"&&xi(t)?1.1:S,y=e.cradle?_+Math.max(1,o+.6-e.tTop)+Ad[t.headH]*.6:_+Math.max(M+E+(E?.95:1.45),o+.6-e.tTop)+Ad[t.headH]*(t.setting==="bezel"?.5:1),w=(z,J)=>_n(e,e.thOfX(z),J),C=(z,J)=>{let G=w(z,J);return G.p.addScaledVector(G.n,M),G};if(h||u){h&&Jt(n,t.shape,"center",a,new P(0,y,0),null);let z=zl(r.outline,144).map(({p:I,n:N})=>({p:[I[0]*a,I[1]*a],n:N})),J=z.map(I=>I.p),G=J.filter((I,N)=>N%2===0),q=I=>z.map(({p:N,n:L})=>[N[0]+L[0]*I,N[1]+L[1]*I]),F=_+M-.35,ce=Math.max(F,y-1.5);if(u)(xi(t)||M)&&zt(i,An(G.length,4,(I,N)=>{let L=[1,1,.82,0][N];return[G[I][0]*L,_+M+[-.1,.4,.62,.7][N],G[I][1]*L]},!0,!1),`metal:medal${t.faceField==="satin"?":satin":""}`);else if(t.setting==="bezel")zt(i,Sd(G,[[.14,ce],[.14,y-.1],[-.22,y-.24],[-.7,ce]]),`metal:seat${s}`),zt(i,Sd(G,[[.02,y+.03],[.1,y+.3],[.5,y+.24],[.62,F],[.14,F]]),`metal:bezel${s}`);else{let I=Gl(t.shape,t.setting==="prong6"?6:4),N=[],L=kt(.055*t.centerD+.28,.55,.9)*(t.setting==="prong6"?.85:1);for(let V of I){let ie=V.p[0]*a+V.n[0]*L*.72,K=V.p[1]*a+V.n[1]*L*.72,se=y+c*.55+L*.3,ee=t.prongTip==="claw",_e=ee?1.15:.62,Me=[new P(ie,w(ie,K).p.y-(e.hole?.95:.4),K),new P(ie,y-.2,K),new P(ie-V.n[0]*L*.28,y+c*.3,K-V.n[1]*L*.28),new P(ie-V.n[0]*L*_e,se,K-V.n[1]*L*_e)];N.push(ee?Vl(Me,de=>L*(de<.66?1:1-.97*_i((de-.66)/.34)),12,28):an(Me,L,24))}zt(i,Xn(N),`metal:prongs${s}`)}let U=xi(t);m=U;let he=pt-.05,oe=(I,N,L=!1)=>{let V=Td(I),ie=Math.max(4,Math.floor(V.L/(N+.07))),K=V.L/ie;for(let se=0;se<ie;se++){let{p:ee,t:_e}=V.at(se*K),Me=C(ee[0],ee[1]);Jt(n,"round","accent",N/2,Me.p.clone().addScaledVector(Me.n,.04),Dn(Me.n),N);let de=V.at((se+.5)*K);for(let me of[-1,1]){let Re=de.p[0]-de.t[1]*me*N*.47,ze=de.p[1]+de.t[0]*me*N*.47,be=C(Re,ze);n.bead.push([...be.p.addScaledVector(be.n,N*.08).toArray(),N*.16])}}return L},xe=I=>{let N=[];for(let[V,ie,K,se]of[[I,-I,I,I],[I,I,-I,I],[-I,I,-I,-I],[-I,-I,I,-I]])for(let ee=0;ee<24;ee++)N.push([V+(K-V)*ee/24,ie+(se-ie)*ee/24]);return N};if(t.frame==="halo"&&U)oe(q(pt+U/2),U),he=pt+U+.1;else if(t.frame==="double"&&U)oe(q(pt+U/2),U),oe(q(pt+U*1.5+.1),U),he=pt+2*U+.2;else if(t.frame==="haloSq"&&U){let I=a+pt+U/2;oe(xe(I),U),he=I+U/2+.1-a,n.sqFrame=I+U/2+.1}else if(t.frame==="haloOct"&&U){let I=a+pt+U/2,N=Math.tan(Math.PI/8),L=[[I,-I*N],[I,I*N],[I*N,I],[-I*N,I],[-I,I*N],[-I,-I*N],[-I*N,-I],[I*N,-I]],V=[];for(let K=0;K<8;K++){let se=L[K],ee=L[(K+1)%8],_e=Math.hypot(ee[0]-se[0],ee[1]-se[1]),Me=Math.max(0,Math.floor(_e/(U*.92+.06))-1);V.push(se);for(let de=1;de<=Me;de++)V.push([se[0]+(ee[0]-se[0])*de/(Me+1),se[1]+(ee[1]-se[1])*de/(Me+1)])}let ie=Math.min(U,2*I*N/(Math.max(0,Math.floor(2*I*N/(U*.92+.06))-1)+1)-.06);V.forEach((K,se)=>{let ee=C(K[0],K[1]);Jt(n,"round","accent",ie/2,ee.p.clone().addScaledVector(ee.n,.04),Dn(ee.n),ie);let _e=V[(se+1)%V.length],Me=(K[0]+_e[0])/2,de=(K[1]+_e[1])/2,me=_e[0]-K[0],Re=_e[1]-K[1],ze=Math.hypot(me,Re)||1;for(let be of[-1,1]){let Ue=C(Me-Re/ze*be*ie*.47,de+me/ze*be*ie*.47);n.bead.push([...Ue.p.addScaledVector(Ue.n,ie*.08).toArray(),ie*.16])}}),he=I+U/2+.1-a,n.octFrame=I+U/2+.1,n.ringFrame=(I+U/2+.1)/Math.cos(Math.PI/8)}else if(t.frame==="bagFrame"&&U){let I=vi(t)[0]/2+pt+U/2,N=a+pt+U/2,L=Math.min(U+.15,1.9);for(let[K,se]of[[I,N],[-I,N],[-I,-N],[I,-N]]){let ee=C(K,se);Jt(n,"round","accent",L/2,ee.p.clone().addScaledVector(ee.n,.04),Dn(ee.n),L)}let V=(K,se,ee)=>{let _e=K-L-.2,Me=Math.max(1,Math.round(_e/(U*2+.08))),de=_e/Me-.08;for(let me=0;me<Me;me++){let Re=-_e/2+(me+.5)*(_e/Me),[ze,be]=se(Re),Ue=C(ze,be),O=Math.min(U/2,de/4);Jt(n,"bag2","side",O,Ue.p.clone().addScaledVector(Ue.n,0),fr(Ue.n,ee),O*4)}};V(2*I,K=>[K,N],new P(1,0,0)),V(2*I,K=>[K,-N],new P(1,0,0)),V(2*N,K=>[I,K],wo),V(2*N,K=>[-I,K],wo);let ie=(K,se)=>{let ee=[];for(let[Me,de,me,Re]of[[K,-se,K,se],[K,se,-K,se],[-K,se,-K,-se],[-K,-se,K,-se]])for(let ze=0;ze<16;ze++){let be=C(Me+(me-Me)*ze/16,de+(Re-de)*ze/16);ee.push(be.p.addScaledVector(be.n,.1))}return ee};for(let K of[-1,1])n.rims.push(lr(ie(I+K*(U/2+.16),N+K*(U/2+.16)),.17,8));he=U+pt+.35,n.rectFrame=[I+U/2+.33,N+U/2+.33]}else if(t.frame==="bagRing"&&U){let I=a+pt,N=I+U/2,L=U/3.2,V=Math.max(8,Math.floor(on*N/(1.62*L+.07)));for(let K=0;K<V;K++){let se=K/V*on,ee=C(N*Math.cos(se),N*Math.sin(se));Jt(n,"taperedBaguette","side",L,ee.p.clone(),fr(ee.n,new P(-Math.cos(se),0,-Math.sin(se)),!0),U)}let ie=K=>Array.from({length:64},(se,ee)=>{let _e=ee/64*on,Me=C(K*Math.cos(_e),K*Math.sin(_e));return Me.p.addScaledVector(Me.n,.1)});n.rims.push(lr(ie(I-.1),.17,8),lr(ie(I+U+.14),.17,8)),he=pt+U+.35,n.ringFrame=I+U+.3}else if(t.frame==="roof"&&U){let[I,N]=v,L=x,V=S,ie=e.hole,K=10,se=.1,ee=(be,Ue)=>{let O=[];for(let[ct,Ye,R,T]of[[be,-Ue,be,Ue],[be,Ue,-be,Ue],[-be,Ue,-be,-Ue],[-be,-Ue,be,-Ue]])for(let j=0;j<K;j++)O.push([ct+(R-ct)*j/K,Ye+(T-Ye)*j/K]);return O},_e=be=>{if(!ie)return[be[0]*.3,be[1]*.3];let Ue=Math.min(ie.hx/Math.max(Math.abs(be[0]),1e-6),ie.hz/Math.max(Math.abs(be[1]),1e-6));return[be[0]*Ue,be[1]*Ue]},Me=ee(I,N),de=ee(L,L),me=de.map(_e),Re=[[ee(I+.1,N+.1),-.3],[Me,se],[Me,se],[de,V],[de,V],[me,V],[me,V],[me,ie?-.2:V]];zt(i,An(Me.length,Re.length,(be,Ue)=>{let[O,ct]=Re[Ue];return[O[be][0],_+ct,O[be][1]]},!0,!1),`metal:roof${s}`);let ze=t.paveD==="big"?1.8:1.1;for(let[be,Ue]of[[0,1],[0,-1],[1,1],[1,-1]]){let O=be?I:N,ct=be?N:I,Ye=O-L,R=Math.hypot(Ye,V-se),T=Math.max(1,Math.floor((R-.2)/(ze+.07))),j=Math.min(ze*1.15,(R-.2)/T-.07);if(j<.85)continue;let te=be?new P(Ue*(V-se),Ye,0).normalize():new P(0,Ye,Ue*(V-se)).normalize(),le=Dn(te),ye=be?new P(-Ue*Ye,V-se,0).normalize():new P(0,V-se,-Ue*Ye).normalize();for(let ve=0;ve<T;ve++){let ae=(.1+(ve+.5)*((R-.2)/T))/R,fe=O+(L-O)*ae,we=ct+(L-ct)*ae-j*.62,Ge=_+se+(V-se)*ae,Se=Math.max(1,Math.floor(2*we/(j+.07))+1),Ae=Oe=>{let We=Se===1?0:-we+2*we*Oe/(Se-1);return be?new P(Ue*fe,Ge,We):new P(We,Ge,Ue*fe)};for(let Oe=0;Oe<Se;Oe++){let We=Ae(Oe);if(Jt(n,"round","accent",j/2,We.clone().addScaledVector(te,.04),le,j),Oe<Se-1){let et=We.clone().add(Ae(Oe+1)).multiplyScalar(.5);for(let H of[-1,1])n.bead.push([...et.clone().addScaledVector(ye,H*j*.47).addScaledVector(te,j*.08).toArray(),j*.15])}}}}for(let[be,Ue]of[[1,1],[-1,1],[-1,-1],[1,-1]])n.rims.push(an([new P(be*I,_+se+.04,Ue*N),new P(be*(I+L)/2,_+(se+V)/2+.04,Ue*(N+L)/2),new P(be*L,_+V+.04,Ue*L)],.15,12));n.rims.push(lr(ee(L-.02,L-.02).map(([be,Ue])=>new P(be,_+V+.03,Ue)),.16,8),lr(ee(I-.02,N-.02).map(([be,Ue])=>new P(be,_+se+.02,Ue)),.13,8)),he=U+pt+.4,n.rectFrame=[I+.3,N+.3]}else if(t.frame==="stepSq"&&U){let I=a+pt+U,N=a+pt+U*.42,L=e.hole,V=12,ie=de=>{let me=[];for(let[Re,ze,be,Ue]of[[de,-de,de,de],[de,de,-de,de],[-de,de,-de,-de],[-de,-de,de,-de]])for(let O=0;O<V;O++)me.push([Re+(be-Re)*O/V,ze+(Ue-ze)*O/V]);return me},K=ie(I),se=ie(N),ee=ie(I+.35),_e=de=>{if(!L)return[de[0]*.3,de[1]*.3];let me=Math.min(L.hx/Math.max(Math.abs(de[0]),1e-6),L.hz/Math.max(Math.abs(de[1]),1e-6));return[de[0]*me,de[1]*me]},Me=[[ee,-.3],[K,.55],[K,.55],[se,.55],[se,.55],[se,1.1],[se,1.1],[se.map(_e),1.1],[se.map(_e),1.1],[se.map(_e),L?-.2:1.1]];zt(i,An(K.length,Me.length,(de,me)=>{let[Re,ze]=Me[me],be=w(Re[de][0],Re[de][1]);return be.p.addScaledVector(be.n,M+ze).toArray()},!0,!1),`metal:stepsq${s}`),he=U+pt+.4,n.sqFrame=I+.4}else if(t.frame==="star"&&U){let I=Gl(t.shape,t.setting==="prong6"?6:4),N=I.length,L=Math.atan2(I[0].p[1],I[0].p[0]),V=a+pt+U,ie=a+.55,K=e.hole,se=5,ee=[];for(let me=0;me<N;me++){let Re=L+me*on/N,ze=Re+Math.PI/N,be=Re+on/N,Ue=[ie*Math.cos(Re),ie*Math.sin(Re)],O=[V*Math.cos(ze),V*Math.sin(ze)],ct=[ie*Math.cos(be),ie*Math.sin(be)];for(let Ye=0;Ye<se;Ye++)ee.push([Ue[0]+(O[0]-Ue[0])*Ye/se,Ue[1]+(O[1]-Ue[1])*Ye/se]);for(let Ye=0;Ye<se;Ye++)ee.push([O[0]+(ct[0]-O[0])*Ye/se,O[1]+(ct[1]-O[1])*Ye/se])}let _e=me=>{let Re=Math.hypot(me[0],me[1])||1,ze=K?Math.min(K.hx,K.hz)*.98:.2;return[me[0]/Re*ze,me[1]/Re*ze]},Me=(me,Re)=>[me[0]*Re,me[1]*Re],de=[[ee,-.3,1],[ee,.5,1],[ee,.5,1],[ee,.75,.9],[ee,.75,.9],[ee.map(_e),.75,1],[ee.map(_e),.75,1],[ee.map(_e),K?-.2:.75,1]];zt(i,An(ee.length,de.length,(me,Re)=>{let[ze,be,Ue]=de[Re],O=Me(ze[me],Ue),ct=w(O[0],O[1]);return ct.p.addScaledVector(ct.n,M+be).toArray()},!0,!1),`metal:star${s}:shade`),he=U+pt+.2,n.starPoly=ee.map(me=>Me(me,1.06))}if(M){let I=([se,ee])=>{let _e=e.La-.18,Me=kt(se,-_e,_e),de=ii(t)?e.W/2-Is+.3:e.hw(Math.abs(e.thOfX(Me)))-.22;return[Me,kt(ee,-de,de)]},N=(se,ee)=>{let _e=[];for(let[de,me,Re,ze]of[[se,-ee,se,ee],[se,ee,-se,ee],[-se,ee,-se,-ee],[-se,-ee,se,-ee]])for(let be=0;be<18;be++)_e.push([de+(Re-de)*be/18,me+(ze-me)*be/18]);return _e},L=se=>{let ee=Math.tan(Math.PI/8),_e=[[se,-se*ee],[se,se*ee],[se*ee,se],[-se*ee,se],[-se,se*ee],[-se,-se*ee],[-se*ee,-se],[se*ee,-se]],Me=[],de=9;for(let me=0;me<8;me++){let Re=_e[me],ze=_e[(me+1)%8];for(let be=0;be<de;be++)Me.push([Re[0]+(ze[0]-Re[0])*be/de,Re[1]+(ze[1]-Re[1])*be/de])}return Me},V=n.octFrame?L(n.octFrame+.2):n.rectFrame?N(n.rectFrame[0]+.12,n.rectFrame[1]+.12):n.sqFrame?N(n.sqFrame+.2,n.sqFrame+.2):n.ringFrame?Array.from({length:72},(se,ee)=>[(n.ringFrame+.05)*Math.cos(ee/72*on),(n.ringFrame+.05)*Math.sin(ee/72*on)]):n.starPoly?Array.from({length:72},(se,ee)=>[(a+pt+U+.25)*Math.cos(ee/72*on),(a+pt+U+.25)*Math.sin(ee/72*on)]):q(t.frame==="none"?pt+.75:he+.22).filter((se,ee)=>ee%2===0),ie=se=>{let ee=Math.hypot(se[0],se[1])||1;return[se[0]*(1+.5/ee),se[1]*(1+.5/ee)]},K=e.hole;if(K){let se=me=>{let Re=Math.min(K.hx/Math.max(Math.abs(me[0]),1e-6),K.hz/Math.max(Math.abs(me[1]),1e-6));return[me[0]*Re,me[1]*Re]};zt(i,An(V.length,4,(me,Re)=>{let ze=Re===0?I(ie(V[me])):Re<=2?I(V[me]):se(V[me]),be=w(ze[0],ze[1]);return be.p.addScaledVector(be.n,Re===0?-.3:M).toArray()},!0,!1),"metal:plinth");let ee=An(V.length,2,(me,Re)=>{let ze=se(V[me]),be=w(ze[0],ze[1]);return be.p.addScaledVector(be.n,Re===0?M:0).toArray()},!0,!1),_e=ee.attributes.normal,Me=ee.attributes.position,de=0;for(let me=0;me<_e.count;me++)de+=_e.getX(me)*Me.getX(me)+_e.getZ(me)*Me.getZ(me);if(de>0){let me=Array.from(ee.index.array);for(let Re=0;Re<me.length;Re+=3){let ze=me[Re+1];me[Re+1]=me[Re+2],me[Re+2]=ze}ee.setIndex(me),ee.computeVertexNormals()}zt(i,ee,"metal:plinthwall:satin:shade")}else zt(i,An(V.length,5,(se,ee)=>{let _e=ee===3?.5:ee===4?0:1,Me=I(ee===0?ie(V[se]):V[se]),de=w(Me[0]*_e,Me[1]*_e);return de.p.addScaledVector(de.n,ee===0?-.3:M).toArray()},!0,!1),"metal:plinth");he+=.75,n.rectFrame&&(n.rectFrame=n.rectFrame.map(se=>se+.65)),n.sqFrame&&(n.sqFrame+=.7),n.ringFrame&&(n.ringFrame+=.6),n.starPoly&&(n.ringFrame=a+pt+U+.9,n.starPoly=null)}d=J,f=he}else if(l){let z=t.top==="round"?.74:t.top==="octagon"?.9:Ro(t),J=Rm(t),G=(t.faceLen==="tight"?e.La:e.La*z)-.95,q=t.letterTurn==="on",F=Ud(t),ce=F?2*G:q?Math.min(2*G,2*J/.84):2*J,U=F?2*J+1:Math.min(q?2*J:2*G,ce*.84);b=kt((F?U:ce)*.23,1.7,2.3);let he=t.letterStone!=="off",oe=Od(t),xe=b,I=b;if(oe){let ie=Ht(n,0),K=t.paveD==="small";xe=t.shoulder==="ladderRd"?2*Math.min(K?2.3:1.6,ie*(K?.5:.42))+.5:kt(e.W*.34,2.6,3.7),I=kt(U*.24,1.9,2.3),b=xe}let N=ce/2-I/2,L=-ce/2+xe/2,V=oe?([ie,K])=>[L+K/6*(N-L),(ie-2)/4*(U-I)]:q?([ie,K])=>[(K-3)/6*(ce-b),(ie-2)/4*(U-b)]:([ie,K])=>[(ie-2)/4*(U-b),-((K-3)/6)*(ce-b)];if(g=Fm(n,t.faceLetter,V,e.thOfX,b,he?1:1.15,t.letterStone==="bag"?"bag":he,{bv:he?.12:0,dMax:1.5,rd:!he,wOf:oe?(ie,K)=>Math.abs(K[0]-ie[0])>=Math.abs(K[1]-ie[1])?xe:I:null,across:oe}),oe&&(n.thru=!0),t.faceField==="satin"&&t.facePave!=="on"&&!oe){let ie=e.La-.5,K=_e=>ii(t)?e.W/2-Is-.1:Math.max(e.faceHw(_e),e.Ws/2)-e.c-.5,se=49,ee=9;zt(i,An(se,ee,(_e,Me)=>{let de=-ie+2*ie*_e/(se-1),me=K(de)*(-1+2*Me/(ee-1)),Re=w(de,me);return Re.p.addScaledVector(Re.n,.07).toArray()},!1,!1),"metal:field:satin")}}if(ii(t)){let z=2*e.La-.2,J=.56,G=z-.5,q=Math.max(1,Math.floor(G/(5.2*J+.1))),F=G/q,ce=Math.min(J,(F-.1)/5.2),U=_+.35,he=[];for(let oe of[-1,1]){let xe=oe*(e.W/2-Is/2),I=new Yi(z,.9,Is-.1);I.deleteAttribute("uv"),I.translate(0,U-.45,xe);let N=I.toNonIndexed();N.computeVertexNormals(),he.push(N);for(let L=0;L<q;L++)Jt(n,"baguette","side",ce,new P(-G/2+(L+.5)*F,U+.02,xe),null,5.2*ce);for(let L of[-1,1]){let V=xe+L*(ce+.2);n.rims.push(an([new P(-z/2+.2,U+.05,V),new P(0,U+.05,V),new P(z/2-.2,U+.05,V)],.17,16))}for(let L of[-1,1]){let V=L*(z/2-.2);n.rims.push(an([new P(V,U+.05,xe-ce-.2),new P(V,U+.05,xe),new P(V,U+.05,xe+ce+.2)],.17,8))}}zt(i,Xn(he),"metal:facebar")}let D=t.rim==="pave"?pr(t):0;if(t.corners!=="off"&&e.flat&&t.top==="square"){let z=(ii(t)?e.W/2-Is-.1:e.W/2-e.c-.25)-(D?D+.1:0),J=e.La-.3-(D?D+.1:0),G=(q,F,ce)=>{let U=ce/2+.3;if(l)return Rd(g,q,F)>b/2+U;if(u&&!m&&!M)return!0;if(n.starPoly)return Math.hypot(q,F)>Math.hypot(n.starPoly[0][0],n.starPoly[0][1])+m+U;if(n.ringFrame)return Math.hypot(q,F)>n.ringFrame+U;if(n.rectFrame)return q>n.rectFrame[0]+U||F>n.rectFrame[1]+U;if(n.sqFrame)return Math.max(q,F)>n.sqFrame+U;let he=1/0;for(let oe of d)he=Math.min(he,Math.hypot(q-oe[0],F-oe[1]));return he>Math.max(f,M?pt+.8:0)+U-.2};if(t.corners==="row"){let q=n.rectFrame?n.rectFrame[0]:n.sqFrame||n.ringFrame||vi(t)[0]/2+Math.max(f,M?pt+.8:.3);for(let F of[2.3,2.1,1.9,1.7,1.5]){let ce=J-F/2+.05,U=F+.15;if(!(ce-F/2<q+.08||U+F/2>z-.9)){for(let he of[-1,1]){for(let oe of[-1,0,1]){let xe=w(he*ce,oe*U);Jt(n,"round","accent",F/2,xe.p.clone().addScaledVector(xe.n,.04),Dn(xe.n),F),p.push([he*ce,oe*U,F+.15])}for(let oe of[-1.5,-.5,.5,1.5])for(let xe of[-1,1]){let I=w(he*ce+xe*F*.47,oe*U);n.bead.push([...I.p.addScaledVector(I.n,.1).toArray(),F*.13])}}break}}}else for(let q of[2,1.6,1.3]){let F=J-q/2-.3,ce=z-q/2-.3;if(!(F<1||ce<1||!G(F,ce,q))){for(let[U,he]of[[1,1],[-1,1],[-1,-1],[1,-1]]){let oe=w(U*F,he*ce),xe=oe.p.clone().addScaledVector(oe.n,.18);Jt(n,"round","side",q/2,xe,Dn(oe.n),q),n.rims.push(Um(xe,oe.n,q/2+.16,.24)),p.push([U*F,he*ce,q+.5])}break}}}if(t.facePave==="on"){let q=e.c+.3+.575+(D?D+.1:0),F=(N,L)=>{if(p.some(K=>Math.hypot(N-K[0],L-K[1])<K[2]/2+1.15/2+.25))return!1;if(l)return Rd(g,N,L)>b/2+1.15/2+.4;if(u&&!m&&!M)return!0;if(n.starPoly)return rM(n.starPoly,N,L)>1.15/2+.05;if(n.ringFrame)return Math.hypot(N,L)>n.ringFrame+1.15/2;if(n.rectFrame)return Math.abs(N)>n.rectFrame[0]+1.15/2||Math.abs(L)>n.rectFrame[1]+1.15/2;if(n.sqFrame)return Math.max(Math.abs(N),Math.abs(L))>n.sqFrame+1.15/2;let V=1/0;for(let K of d){let se=Math.hypot(N-K[0],L-K[1]);se<V&&(V=se)}return!(Math.hypot(N/(vi(t)[0]/2),L/a)<1)&&V>Math.max(f,t.frame==="none"&&M?pt+.8:0)+1.15/2+.05},ce=new Set,U=(N,L)=>`${N},${L}`,he=Math.ceil(e.La/1.25)+1,oe=Math.ceil(e.W/2/1.1)+1,xe=(N,L)=>[(N+(L%2?.5:0))*1.25,L*1.1],I=(N,L)=>!(ii(t)&&Math.abs(L)>e.W/2-Is-1.15/2-.1)&&Math.abs(N)<=e.La-.35-1.15/2-(D?D+.1:0)&&Math.abs(L)<=e.hw(Math.abs(e.thOfX(N)))-q+.05&&F(N,L);for(let N=-he;N<=he;N++)for(let L=-oe;L<=oe;L++){let[V,ie]=xe(N,L);if(!I(V,ie))continue;ce.add(U(N,L));let K=w(V,ie);Jt(n,"round","accent",1.15/2,K.p.clone().addScaledVector(K.n,.04),Dn(K.n),1.15)}for(let N of ce){let[L,V]=N.split(",").map(Number),[ie,K]=xe(L,V);for(let se of[-1,1]){let ee=ie+.625,_e=K+se*1.1/3;if(Math.abs(ee)<e.La-.3){let Me=w(ee,_e);n.bead.push([...Me.p.addScaledVector(Me.n,.1).toArray(),.16])}}}}if(D){let z=.16+D/2,J=F=>Math.max(e.faceHw(F),e.Ws/2)-e.c-z,G=e.La-.08-z,q=[];if(["square","octagon"].includes(t.top)){let F=Math.max(1,Math.round(2*G/(D+.08)));for(let he of[-1,1])for(let oe=0;oe<=F;oe++){let xe=-G+2*G*oe/F;q.push([xe,he*J(xe)])}let ce=J(G),U=Math.max(1,Math.round(2*ce/(D+.08)));for(let he of[-1,1])for(let oe=1;oe<U;oe++)q.push([he*G,-ce+2*ce*oe/U])}else{let F=[];for(let oe=0;oe<=48;oe++){let xe=-G+2*G*oe/48;F.push([xe,J(xe)])}for(let oe=48;oe>=0;oe--){let xe=-G+2*G*oe/48;F.push([xe,-J(xe)])}let U=Td(F),he=Math.max(6,Math.floor(U.L/(D+.08)));for(let oe=0;oe<he;oe++)q.push(U.at(oe*U.L/he).p)}for(let[F,ce]of q){let U=w(F,ce);Jt(n,"round","accent",D/2,U.p.clone().addScaledVector(U.n,.04),Dn(U.n),D)}q.forEach((F,ce)=>{let U=null,he=1/0;if(q.forEach((L,V)=>{if(V===ce)return;let ie=Math.hypot(L[0]-F[0],L[1]-F[1]);ie<he&&(L[0]>F[0]+1e-6||Math.abs(L[0]-F[0])<1e-6&&L[1]>F[1])&&(he=ie,U=L)}),!U||he>D*1.6)return;let oe=(F[0]+U[0])/2,xe=(F[1]+U[1])/2,I=(U[0]-F[0])/he,N=(U[1]-F[1])/he;for(let L of[-1,1]){let V=w(oe-N*L*D*.47,xe+I*L*D*.47);n.bead.push([...V.p.addScaledVector(V.n,D*.08).toArray(),D*.15])}})}else if(t.rim!=="none"&&Co(t)){let z=[],G=F=>Math.max(e.faceHw(F),e.Ws/2)-e.c-.22,q=e.La-.3;for(let F=0;F<=40;F++){let ce=-q+2*q*F/40;z.push([ce,G(ce)])}for(let F=1;F<8;F++)z.push([q,G(q)*(1-2*F/8)]);for(let F=0;F<=40;F++){let ce=q-2*q*F/40;z.push([ce,-G(ce)])}for(let F=1;F<8;F++)z.push([-q,-G(q)*(1-2*F/8)]);if(t.rim==="rail")n.rims.push(lr(z.map(([F,ce])=>{let U=w(F,ce);return U.p.addScaledVector(U.n,.08)}),.22,8));else{let F=Td(z),ce=Math.round(F.L/.36);for(let U=0;U<ce;U++){let{p:he}=F.at(U*F.L/ce),oe=w(he[0],he[1]);n.bead.push([...oe.p.addScaledVector(oe.n,.05).toArray(),.15])}}}let B={short:.42,mid:.68,long:1}[t.shoulderLen],X=e.step?e.aStep-.03:e.aS+6*rs,k=.45/e.ro(e.aF,0),$=e.aF+(e.flat?k:k*.4),Q=$+(X-$)*B;if(n.thru)n.skip=(z,J)=>{if(Math.abs(z.x)>e.La+1)return!1;let G=1/0;for(let q of g){let[F,ce]=q,U=ce[0]-F[0],he=ce[1]-F[1],oe=kt(((z.x-F[0])*U+(z.z-F[1])*he)/(U*U+he*he||1),q.eA?-.5*q.w/Math.hypot(U,he):0,q.eB?1+.5*q.w/Math.hypot(U,he):1);G=Math.min(G,Math.hypot(z.x-F[0]-U*oe,z.z-F[1]-he*oe)-q.w/2)}return G<J*.55+.1},ql(n,t.shoulder,-Q,Q,!1,1),n.skip=null;else if(t.center==="run")ql(n,t.shoulder,-Q,Q,!1,1);else if(t.shoulder!=="plain")for(let z of[1,-1])ql(n,t.shoulder,z*$,z*Q,!1,z);else if(t.corners==="row"&&["pave","rail","band","milgrain"].includes(t.edge))Eo(n,-Q,Q);else for(let z of[1,-1])Eo(n,z*$,z*Q);if(t.shankDeco==="flutes"){let z=Q+.03,J=on-Q-.03,G=64;for(let q of[-.74,-.37,.37,.74]){let F=[];for(let ce=0;ce<=G;ce++){let U=z+(J-z)*ce/G;U>Math.PI&&(U-=on),F.push([U,q*(e.hw(Math.abs(U))-Ls(e,U))])}n.flutes.push(an(Nn(e,F,.02),.14,90))}}if(t.shankDeco==="pave")for(let z of[1,-1]){let J=Q+.06,G=162*rs,q=U=>Math.min(1.6-.6*kt((U-J)/(G-J),0,1),2*(e.hw(U)-Ls(e,U))-1),F=J,ce=[[],[]];for(let U=0;U<80;U++){let he=q(F);if(he<.85)break;let oe=(he+.1)/Kn(e,F);if(F+oe>G)break;Ui(n,z*(F+oe/2),0,he);for(let xe of[-1,1])si(n,z*(F+oe),xe*he*.45,he*.16),F===J&&si(n,z*F,xe*he*.45,he*.16);F+=oe}if(F>J){for(let he=0;he<=28;he++){let oe=J-.02+(F-J+.04)*he/28,xe=q(oe)/2+.3;ce[0].push([z*oe,xe]),ce[1].push([z*oe,-xe])}for(let he of ce)n.rims.push(an(Nn(e,he,.05),.15,40))}}if(t.shankDeco==="milgrain"){let z=Q+.03,J=on-Q-.03,G=Math.round((J-z)*e.R/.34);for(let q of[-.55,.55])for(let F=0;F<=G;F++){let ce=z+(J-z)*F/G;ce>Math.PI&&(ce-=on),si(n,ce,q*(e.hw(Math.abs(ce))-Ls(e,ce)),.14,.35)}}if(t.flank!=="plain"){let z={pave3:3,pave2:2,pave1:1}[t.flank]||0,J=1.3,G=.12,q=U=>e.ro(U,e.hw(U))-Ls(e,U)-e.ri(U),F=(U,he,oe)=>{let xe=Math.abs(U),I=e.ri(xe)+q(xe)-oe;return new P(Math.sin(U)*I,Math.cos(U)*I,he*e.hw(xe))},ce=(U,he)=>{let oe=q(U)-.3,xe=.15;for(let I=0;I<=he;I++){let N=Math.min(J,oe);if(N<.85)return null;if(I===he)return{d:N,off:xe+N/2};xe+=N+G,oe-=N+G}return null};for(let U of[-1,1])for(let he=0;he<z;he++){let oe=-Q,xe=null;for(let I=0;I<400&&oe<=Q;I++){let N=Math.abs(oe),L=ce(N,he);if(!L){xe=null,oe+=.5/e.R;continue}let{d:V,off:ie}=L,K=F(oe,U,ie),se=F(oe+.001,U,ie).distanceTo(F(oe-.001,U,ie))/.002,ee=F(oe+.001,U,ie).sub(F(oe-.001,U,ie)).normalize(),_e=new P(Math.sin(oe),Math.cos(oe),0),Me=ee.clone().cross(_e).normalize();if(Me.z*U<0&&Me.negate(),Jt(n,"round","accent",V/2,K.clone().addScaledVector(Me,.04),Dn(Me),V),xe!=null){let de=(oe+xe.a)/2,me=Math.min(V,xe.d),Re=F(de,U,ie),ze=new P(Math.sin(de),Math.cos(de),0);for(let be of[-1,1])n.bead.push([...Re.clone().addScaledVector(ze,be*me*.47).addScaledVector(Me,.08).toArray(),me*.15])}xe={a:oe,d:V},oe+=(V+.1)/se}}for(let U of[-1,1])for(let he=-Q;he<=Q;he+=.36/e.R){let oe=q(Math.abs(he));if(!z){if(oe>=.9){let V=F(he,U,.32);n.bead.push([V.x,V.y,V.z+U*.04,.13])}if(oe<1.5)continue;let L=F(he,U,oe-.42);n.bead.push([L.x,L.y,L.z+U*.04,.13]);continue}let xe=.15,I=0;for(let L=0;L<z;L++){let V=ce(Math.abs(he),L);if(!V)break;xe=V.off+V.d/2,I++}if(!I||oe-xe<.6)continue;let N=F(he,U,oe-.42);n.bead.push([N.x,N.y,N.z+U*.04,.13])}}}function oM(n){let{rg:e,o:t,g:i}=n;if(e.band||!e.cav)return;let s=e.R,r=.25,a=(e.cav.aH-.03)*s,o=g=>e.hw(Math.abs(g/s))-e.wt+.14,c=(g,b)=>Math.abs(g)<=a&&Math.abs(b)<=o(g),l=(g,b)=>{let m=g/s,p=e.ri(Math.abs(m))+r;return new P(Math.sin(m)*p,Math.cos(m)*p,b)},h=[],u=g=>{g.length>=2&&h.push(Vl(g.map(([b,m])=>l(b,m)),()=>r,6,Math.max(2,g.length)))},d=(g,b)=>{let m=Math.hypot(b[0]-g[0],b[1]-g[1]),p=Math.max(1,Math.ceil(m/.5)),_=[];for(let M=0;M<=p;M++){let x=[g[0]+(b[0]-g[0])*M/p,g[1]+(b[1]-g[1])*M/p];c(x[0],x[1])?_.push(x):(u(_),_=[])}u(_)},f=e.W/2+1;if(t.lattice==="ong"){let b=Math.sqrt(3)*1.3,m=new Set,p=_=>`${Math.round(_[0]*20)},${Math.round(_[1]*20)}`;for(let _=-Math.ceil(f/(1.5*1.3));_<=Math.ceil(f/(1.5*1.3));_++)for(let M=-Math.ceil(a/b)-1;M<=Math.ceil(a/b)+1;M++){let x=(M+(_%2?.5:0))*b,v=_*1.5*1.3,S=Array.from({length:6},(E,y)=>[x+1.3*Math.sin(y*Math.PI/3),v+1.3*Math.cos(y*Math.PI/3)]);for(let E=0;E<6;E++){let y=S[E],w=S[(E+1)%6],C=[p(y),p(w)].sort().join("|");m.has(C)||(m.add(C),d(y,w))}}}else{let g=(t.lattice==="x"?3.3:2.5)*Math.SQRT2,b=Math.ceil((a+f)/g)+1;for(let m=-b;m<=b;m++)for(let p of[-1,1])d([-a,p*(-a-m*g)],[a,p*(a-m*g)]);if(t.lattice==="x")for(let m=-Math.ceil(f/(g/2));m<=Math.ceil(f/(g/2));m++)d([-a,m*g/2],[a,m*g/2])}h.length&&zt(i,Xn(h),"metal:lattice")}var cM=new Vt,Em={serif:'600 112px "Cormorant Garamond", Georgia, serif',script:'120px "Pinyon Script", cursive'};function lM(n,e){let t=document.createElement("canvas"),i=t.getContext("2d"),s=120,r=Em[e]||Em.serif;i.font=r;let a=Math.ceil(i.measureText(n).width+s*.6);t.width=Math.min(4096,a),t.height=Math.round(s*1.35),i.font=r,i.fillStyle="#fff",i.strokeStyle="#fff",i.lineJoin="round",i.lineWidth=s*.03,i.textBaseline="middle",i.textAlign="center",i.fillText(n,t.width/2,t.height*.55),i.strokeText(n,t.width/2,t.height*.55);let o=new _s(t);return o.anisotropy=8,{tex:o,aspect:t.width/t.height}}function hM(n,e,t){let i=String(t.engrave||"").trim();if(!i||typeof document>"u")return;let{tex:s,aspect:r}=lM(i,t.engraveFont),a=e.ri(Math.PI),o=kt(.62*e.hw(Math.PI),1.3,2.8),c=o*r/a,l=140*rs;c>l&&(o*=l/c,c=l);let h=96,u=6,d=new Float32Array(h*u*3),f=new Float32Array(h*u*2),g=0,b=0;for(let M=0;M<h;M++)for(let x=0;x<u;x++){let v=M/(h-1),S=x/(u-1),E=Math.PI+c/2-v*c,y=a-.006;d[g++]=Math.sin(E)*y,d[g++]=Math.cos(E)*y,d[g++]=o/2-S*o,f[b++]=v,f[b++]=S}let m=[];for(let M=0;M<h-1;M++)for(let x=0;x<u-1;x++){let v=M*u+x,S=(M+1)*u+x;m.push(v,S,S+1,v,S+1,v+1)}let p=new bt;p.setAttribute("position",new vt(d,3)),p.setAttribute("uv",new vt(f,2)),p.setIndex(m),p.computeVertexNormals();let _=new At(p,cM);_.name="metal:engrave:m",_.userData.ownGeo=!0,_.userData.alphaMap=s,n.add(_)}function Kl(n){let e=mr(n),t=new pn,i=Ky(e),s=Zy(t,i,e),r=e.finish==="nham"?":satin":e.finish==="chai"?":brush":"",a=Jy(i);zt(t,a,`metal:band${r}`),a.userData.walls&&zt(t,a.userData.walls,"metal:holewall:satin:shade"),i.band?sM(s):(aM(s),oM(s)),hM(t,i,e);let o=e.twoTone==="settings"?":alt":"";s.bead.length&&zt(t,Mm(s.bead,.16,7),`metal:beads${o}`),s.rims.length&&zt(t,Xn(s.rims.map(l=>(l.deleteAttribute?.("uv"),l))),`metal:rims${o}`),s.bars.length&&zt(t,Xn(s.bars),`metal:bars${o}`),s.flutes.length&&zt(t,Xn(s.flutes),"metal:flutes"),s.notch.length&&zt(t,Xn(s.notch),"metal:notch"),s.chev.length&&zt(t,Xn(s.chev),`metal:chevron${e.twoTone==="shoulder"?":alt":""}`),s.letter.length&&zt(t,Xn(s.letter),`metal:letter${e.twoTone==="letter"?":alt":""}`);let c={};for(let[l,h,u]of s.list){let d=`${l}|${h}|${u}`;c[d]=(c[d]||0)+1}return t.userData.stats={accent:s.cnt.accent,side:s.cnt.side,sizes:c},t}var Om=n=>{let e=Kl(n),t=e.userData.stats;return e.traverse(i=>{i.isMesh&&i.userData.ownGeo&&i.geometry.dispose()}),t};var km={"nhan-nam-h-tg01":{app:"nhan-nam",ten:"Nh\u1EABn Nam H TG01",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"flat",face:"plate",faceLen:"full",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"mid",plinth:"off",frame:"roof",faceBars:"off",facePave:"off",corners:"off",rim:"none",flank:"pave1",edge:"none",shank:"taper",bottomW:12,shankDeco:"none",lattice:"x",twoTone:"letter",paveD:"small",tierRows:1,height:"high",shoulderLen:"long",finish:"bong",metal:"vang-trang",metal2:"vang-hong",faceW:15,centerD:6.5,shoulder:"letter",letter:"H",letterStone:"on2"}},"nhan-nam-t-tg02":{app:"nhan-nam",ten:"Nh\u1EABn Nam T TG02",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"flat",face:"plate",faceLen:"full",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"mid",plinth:"off",frame:"roof",faceBars:"off",facePave:"off",corners:"off",rim:"none",flank:"pave1",edge:"none",shank:"taper",bottomW:12,shankDeco:"none",lattice:"x",twoTone:"letter",paveD:"small",tierRows:1,height:"high",shoulderLen:"long",finish:"bong",metal:"vang-trang",metal2:"vang-hong",faceW:15,centerD:6.5,shoulder:"letter",letter:"T",letterStone:"on2"}},"nhan-nam-tg03":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG03",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"flat",face:"cradle",faceLen:"full",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"mid",plinth:"off",frame:"none",faceBars:"off",facePave:"off",corners:"off",rim:"none",flank:"plain",edge:"none",shank:"taper",bottomW:10,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"small",tierRows:1,height:"high",shoulderLen:"mid",finish:"bong",metal:"vang-trang",metal2:"vang-hong",faceW:10,centerD:10,shoulder:"ladder"}},"nhan-nam-vertu-tg04":{app:"nhan-nam",ten:"Nh\u1EABn Nam Vertu TG04",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"flat",face:"plate",faceLen:"full",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"mid",plinth:"off",frame:"stepSq",faceBars:"off",facePave:"off",corners:"off",rim:"none",flank:"plain",edge:"notch",shank:"taper",bottomW:10,shankDeco:"none",lattice:"x",twoTone:"shoulder",paveD:"mid",tierRows:1,height:"mid",shoulderLen:"mid",finish:"bong",metal:"vang-trang",metal2:"vang-hong",faceW:12,centerD:6.5,shoulder:"chevronPlain"}},"nhan-nam-tg05":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG05",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"flat",face:"plate",faceLen:"full",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"mid",plinth:"off",frame:"bagFrame",faceBars:"off",facePave:"off",corners:"off",rim:"pave",flank:"plain",edge:"none",shank:"taper",bottomW:10,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"small",tierRows:2,height:"high",shoulderLen:"mid",finish:"bong",metal:"vang-trang",metal2:"vang-hong",faceW:15,centerD:6.5,shoulder:"ladderT"}},"nhan-nam-tg06":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG06",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"flat",face:"plate",faceLen:"full",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"mid",plinth:"off",frame:"roof",faceBars:"off",facePave:"off",corners:"off",rim:"none",flank:"plain",edge:"bevel",shank:"taper",bottomW:10,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"big",tierRows:1,height:"high",shoulderLen:"long",finish:"bong",metal:"vang-trang",metal2:"vang-hong",faceW:13.5,centerD:6.5,shoulder:"rows"}},"nhan-nam-tg07":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG07",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"flat",face:"plate",faceLen:"full",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"high",plinth:"on",frame:"haloSq",faceBars:"on",facePave:"off",corners:"off",rim:"none",flank:"pave2",edge:"bevel",shank:"taper",bottomW:8,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"big",tierRows:1,height:"high",shoulderLen:"long",finish:"bong",metal:"vang-trang",metal2:"vang-hong",faceW:13.5,centerD:6.5,shoulder:"ladderRd"}},"nhan-nam-tg08":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG08",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"flat",face:"plate",faceLen:"full",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"high",plinth:"on",frame:"haloSq",faceBars:"on",facePave:"off",corners:"off",rim:"none",flank:"pave2",edge:"bevel",shank:"taper",bottomW:8,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"big",tierRows:1,height:"high",shoulderLen:"long",finish:"bong",metal:"vang-trang",metal2:"vang-hong",faceW:13.5,centerD:7.2,shoulder:"ladder"}},"nhan-nam-tg09":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG09",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"flat",face:"plate",faceLen:"full",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"low",plinth:"off",frame:"stepSq",faceBars:"off",facePave:"off",corners:"row",rim:"none",flank:"plain",edge:"pave",shank:"taper",bottomW:10,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"mid",tierRows:1,height:"high",shoulderLen:"long",finish:"bong",metal:"vang-hong",metal2:"vang-trang",faceW:12,centerD:6,shoulder:"plain"}},"nhan-nam-tg10":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG10",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"flat",face:"plate",faceLen:"full",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"mid",plinth:"off",frame:"roof",faceBars:"off",facePave:"off",corners:"off",rim:"none",flank:"plain",edge:"none",shank:"taper",bottomW:10,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"mid",tierRows:2,height:"high",shoulderLen:"long",finish:"bong",metal:"vang-hong",metal2:"vang-trang",faceW:15,centerD:6.5,shoulder:"chevron"}},"nhan-nam-tg11":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG11",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"octagon",dome:"flat",face:"plate",faceLen:"tight",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"mid",plinth:"on",frame:"haloOct",faceBars:"off",facePave:"off",corners:"off",rim:"none",flank:"plain",edge:"band",shank:"taper",bottomW:8,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"mid",tierRows:1,height:"high",shoulderLen:"mid",finish:"bong",metal:"vang",metal2:"vang-trang",faceW:13.5,centerD:8,shoulder:"ladder"}},"nhan-nam-tg13":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG13",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"flat",face:"cradle",faceLen:"full",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"mid",plinth:"off",frame:"none",faceBars:"off",facePave:"off",corners:"off",rim:"none",flank:"plain",edge:"band",shank:"taper",bottomW:8,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"mid",tierRows:1,height:"high",shoulderLen:"mid",finish:"bong",metal:"vang-hong",metal2:"vang-trang",faceW:10,centerD:9,shoulder:"ladderBig"}},"nhan-nam-tg14":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG14",cfg:{type:"band",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"flat",face:"plate",faceLen:"full",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"mid",plinth:"off",frame:"none",faceBars:"off",facePave:"off",corners:"off",rim:"none",flank:"plain",edge:"none",shank:"taper",bottomW:6,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"small",tierRows:1,height:"high",shoulderLen:"long",finish:"bong",metal:"vang-trang",metal2:"vang-hong",bandW:7,bandProfile:"flat",bandStones:"stations",cover:"full"}},"nhan-nam-tg15":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG15",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"bombe",face:"plate",faceLen:"full",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"mid",plinth:"on",frame:"haloSq",faceBars:"off",facePave:"on",corners:"off",rim:"none",flank:"plain",edge:"none",shank:"taper",bottomW:8,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"big",tierRows:1,height:"high",shoulderLen:"long",finish:"bong",metal:"vang-trang",metal2:"vang-hong",faceW:15,centerD:7.2,shoulder:"ladderT"}},"nhan-nam-tg16":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG16",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"flat",face:"plate",faceLen:"full",center:"run",shape:"round",setting:"prong4",prongTip:"round",headH:"mid",plinth:"off",frame:"none",faceBars:"off",facePave:"off",corners:"off",rim:"none",flank:"plain",edge:"none",shank:"taper",bottomW:12,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"mid",tierRows:1,height:"mid",shoulderLen:"long",finish:"bong",metal:"vang-trang",metal2:"vang-hong",faceW:13.5,shoulder:"ladder3s"}},"nhan-nam-t-tg17":{app:"nhan-nam",ten:"Nh\u1EABn Nam T TG17",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"flat",face:"plate",faceLen:"tight",center:"letter",shape:"round",setting:"prong4",prongTip:"round",headH:"mid",plinth:"off",frame:"none",faceBars:"off",facePave:"off",corners:"off",rim:"none",flank:"plain",edge:"none",shank:"taper",bottomW:10,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"mid",tierRows:1,height:"low",shoulderLen:"long",finish:"bong",metal:"vang-trang",metal2:"vang-hong",faceLetter:"T",letterTurn:"on",letterStone:"bag",faceField:"bong",faceW:10,shoulder:"ladderRd"}},"nhan-nam-tg18":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG18",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"flat",face:"plate",faceLen:"full",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"low",plinth:"off",frame:"stepSq",faceBars:"off",facePave:"off",corners:"row",rim:"none",flank:"plain",edge:"pave",shank:"taper",bottomW:10,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"mid",tierRows:1,height:"high",shoulderLen:"long",finish:"bong",metal:"vang",metal2:"vang-trang",faceW:12,centerD:6,shoulder:"plain"}},"nhan-nam-tg19":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG19",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"flat",face:"cradle",faceLen:"full",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"mid",plinth:"off",frame:"none",faceBars:"off",facePave:"off",corners:"off",rim:"none",flank:"plain",edge:"none",shank:"taper",bottomW:8,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"mid",tierRows:1,height:"high",shoulderLen:"mid",finish:"bong",metal:"vang-trang",metal2:"vang-hong",faceW:10,centerD:10,shoulder:"ladder3"}},"nhan-nam-tg20":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG20",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"flat",face:"cradle",faceLen:"full",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"mid",plinth:"off",frame:"none",faceBars:"off",facePave:"off",corners:"off",rim:"none",flank:"pave3",edge:"none",shank:"taper",bottomW:8,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"mid",tierRows:1,height:"high",shoulderLen:"mid",finish:"bong",metal:"vang-hong",metal2:"vang-trang",faceW:10,centerD:10,shoulder:"ladder3"}},"nhan-nam-tg21":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG21",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"flat",face:"plate",faceLen:"full",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"mid",plinth:"off",frame:"stepSq",faceBars:"off",facePave:"off",corners:"off",rim:"none",flank:"plain",edge:"band",shank:"taper",bottomW:8,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"mid",tierRows:1,height:"high",shoulderLen:"mid",finish:"bong",metal:"vang-trang",metal2:"vang-hong",faceW:13.5,centerD:8,shoulder:"ladderRd"}},"nhan-nam-tg22":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG22",cfg:{type:"signet",karat:"10K",gem:"moissanite-vang",accentGem:"moissanite",sideGem:"moissanite",top:"octagon",dome:"flat",face:"plate",faceLen:"tight",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"mid",plinth:"on",frame:"haloOct",faceBars:"off",facePave:"off",corners:"off",rim:"none",flank:"pave2",edge:"band",shank:"taper",bottomW:8,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"mid",tierRows:1,height:"high",shoulderLen:"mid",finish:"bong",metal:"vang",metal2:"vang-trang",faceW:13.5,centerD:8,shoulder:"ladder"}},"nhan-nam-tg23":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG23",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"flat",face:"plate",faceLen:"full",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"mid",plinth:"off",frame:"roof",faceBars:"off",facePave:"off",corners:"off",rim:"none",flank:"pave1",edge:"none",shank:"taper",bottomW:12,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"mid",tierRows:1,height:"high",shoulderLen:"mid",finish:"bong",metal:"vang-trang",metal2:"vang-hong",faceW:15,centerD:6.5,shoulder:"pave"}},"nhan-nam-tg24":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG24",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"flat",face:"plate",faceLen:"full",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"high",plinth:"on",frame:"haloSq",faceBars:"on",facePave:"off",corners:"on",rim:"none",flank:"pave2",edge:"bevel",shank:"taper",bottomW:8,shankDeco:"flutes",lattice:"x",twoTone:"none",paveD:"mid",tierRows:1,height:"high",shoulderLen:"long",finish:"bong",metal:"vang",metal2:"vang-trang",faceW:13.5,centerD:7.2,shoulder:"ladderRd"}},"nhan-nam-tg25":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG25",cfg:{type:"signet",karat:"10K",gem:"moissanite-xanh",accentGem:"moissanite",sideGem:"moissanite-xanh",top:"square",dome:"flat",face:"cradle",faceLen:"full",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"mid",plinth:"off",frame:"none",faceBars:"off",facePave:"off",corners:"off",rim:"none",flank:"pave3",edge:"none",shank:"taper",bottomW:8,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"mid",tierRows:1,height:"high",shoulderLen:"long",finish:"bong",metal:"vang-trang",metal2:"vang-hong",faceW:10,centerD:9,shoulder:"ladderS"}},"nhan-nam-tg26":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG26",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"dome",face:"plate",faceLen:"full",center:"stone",shape:"round",setting:"prong6",prongTip:"round",headH:"low",plinth:"off",frame:"star",faceBars:"off",facePave:"on",corners:"off",rim:"none",flank:"plain",edge:"none",shank:"taper",bottomW:8,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"mid",tierRows:2,height:"high",shoulderLen:"long",finish:"bong",metal:"vang-trang",metal2:"vang-hong",faceW:15,centerD:8,shoulder:"tiers"}},"nhan-nam-tg27":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG27",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"bombe",face:"plate",faceLen:"full",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"mid",plinth:"off",frame:"none",faceBars:"off",facePave:"on",corners:"off",rim:"none",flank:"plain",edge:"none",shank:"taper",bottomW:10,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"mid",tierRows:1,height:"high",shoulderLen:"long",finish:"bong",metal:"vang",metal2:"vang-trang",faceW:13.5,centerD:7.2,shoulder:"tiersBagP"}},"nhan-nam-tg28":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG28",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"round",dome:"flat",face:"plate",faceLen:"full",center:"plain",shape:"round",setting:"prong4",prongTip:"round",headH:"mid",plinth:"off",frame:"bagRing",faceBars:"off",facePave:"off",corners:"off",rim:"none",flank:"plain",edge:"none",shank:"taper",bottomW:8,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"mid",tierRows:1,height:"high",shoulderLen:"long",finish:"bong",metal:"vang-hong",metal2:"vang-trang",faceW:15,centerD:7.2,shoulder:"plain"}},"nhan-nam-tg29":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG29",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"flat",face:"plate",faceLen:"tight",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"high",plinth:"off",frame:"stepSq",faceBars:"off",facePave:"off",corners:"off",rim:"none",flank:"plain",edge:"band",shank:"taper",bottomW:10,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"big",tierRows:1,height:"high",shoulderLen:"mid",finish:"bong",metal:"vang-hong",metal2:"vang-trang",faceW:12,centerD:9,shoulder:"pave"}},"nhan-nam-tg30":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG30",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"flat",face:"plate",faceLen:"tight",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"mid",plinth:"on",frame:"halo",faceBars:"off",facePave:"on",corners:"off",rim:"none",flank:"plain",edge:"bevel",shank:"taper",bottomW:8,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"mid",tierRows:1,height:"high",shoulderLen:"mid",finish:"bong",metal:"vang-trang",metal2:"vang-hong",faceW:13.5,centerD:6.5,shoulder:"ladderRd"}},"nhan-nam-tg31":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG31",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"octagon",dome:"flat",face:"plate",faceLen:"tight",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"mid",plinth:"on",frame:"haloOct",faceBars:"off",facePave:"off",corners:"off",rim:"none",flank:"plain",edge:"band",shank:"taper",bottomW:8,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"mid",tierRows:1,height:"high",shoulderLen:"mid",finish:"bong",metal:"vang-hong",metal2:"vang-trang",faceW:13.5,centerD:8,shoulder:"ladder"}},"nhan-nam-tg32":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG32",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"dome",face:"plate",faceLen:"tight",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"mid",plinth:"on",frame:"haloSq",faceBars:"off",facePave:"off",corners:"off",rim:"none",flank:"pave1",edge:"bevel",shank:"taper",bottomW:10,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"small",tierRows:1,height:"high",shoulderLen:"long",finish:"bong",metal:"vang-trang",metal2:"vang-hong",faceW:13.5,centerD:6.5,shoulder:"ladderRd"}},"nhan-nam-tg33":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG33",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"bombe",face:"plate",faceLen:"full",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"mid",plinth:"on",frame:"haloSq",faceBars:"off",facePave:"on",corners:"off",rim:"none",flank:"plain",edge:"none",shank:"taper",bottomW:8,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"big",tierRows:1,height:"high",shoulderLen:"long",finish:"bong",metal:"vang-hong",metal2:"vang-trang",faceW:15,centerD:7.2,shoulder:"ladderT"}},"nhan-nam-tg34":{app:"nhan-nam",ten:"Nh\u1EABn Nam TG34",cfg:{type:"signet",karat:"10K",gem:"moissanite",accentGem:"moissanite",sideGem:"moissanite",top:"square",dome:"flat",face:"plate",faceLen:"tight",center:"stone",shape:"round",setting:"prong4",prongTip:"round",headH:"high",plinth:"on",frame:"bagFrame",faceBars:"off",facePave:"off",corners:"off",rim:"none",flank:"pave3",edge:"bevel",shank:"taper",bottomW:10,shankDeco:"none",lattice:"x",twoTone:"none",paveD:"mid",tierRows:1,height:"high",shoulderLen:"long",finish:"bong",metal:"vang-trang",metal2:"vang-hong",faceW:15,centerD:7.2,shoulder:"bagLong2"}},"bong-halo-tron-rose-gold":{app:"bong-tai",ten:"B\xF4ng Halo Tr\xF2n Rose Gold",cfg:{shape:"round",setting:"prong4",prongTip:"round",haloD:"mid",back:"butterfly",view:"pair",metal:"vang-hong",gem:"moissanite",accentGem:"moissanite",karat:"10K",halo:"follow",stoneD:5}},"bong-halo-tron-white-gold":{app:"bong-tai",ten:"B\xF4ng Halo Tr\xF2n White Gold",cfg:{shape:"round",setting:"prong4",prongTip:"round",haloD:"mid",back:"butterfly",view:"pair",metal:"vang-trang",gem:"moissanite",accentGem:"moissanite",karat:"10K",halo:"follow",stoneD:5}},"bong-halo-vuong-l":{app:"bong-tai",ten:"B\xF4ng Halo Vu\xF4ng L",cfg:{shape:"round",setting:"prong4",prongTip:"round",haloD:"mid",back:"butterfly",view:"pair",metal:"vang-trang",gem:"moissanite",accentGem:"moissanite",karat:"10K",halo:"square",stoneD:6.5}},"bong-halo-vuong-m":{app:"bong-tai",ten:"B\xF4ng Halo Vu\xF4ng M",cfg:{shape:"round",setting:"prong4",prongTip:"round",haloD:"small",back:"butterfly",view:"pair",metal:"vang-trang",gem:"moissanite",accentGem:"moissanite",karat:"10K",halo:"square",stoneD:5}},"bong-nu":{app:"bong-tai",ten:"B\xF4ng N\u1EE5",cfg:{shape:"round",setting:"prong4",prongTip:"round",haloD:"big",back:"butterfly",view:"pair",metal:"vang-trang",gem:"moissanite",accentGem:"moissanite",karat:"10K",halo:"none",stoneD:6.5}},"bong-nu-princess":{app:"bong-tai",ten:"B\xF4ng N\u1EE5 Princess",cfg:{shape:"princess",setting:"prong4",prongTip:"claw",haloD:"big",back:"butterfly",view:"pair",metal:"vang-trang",gem:"moissanite",accentGem:"moissanite",karat:"10K",halo:"none",stoneD:6}}};var xr={moissanite:["Moissanite"],"lab-diamond":["Lab Diamond"],"natural-diamond":["Kim c\u01B0\u01A1ng thi\xEAn nhi\xEAn"],sapphire:["Sapphire xanh","#2F4FA6"],ruby:["Ruby","#B3203F"],emerald:["Emerald","#1C8A55"],"yellow-sapphire":["Sapphire v\xE0ng","#E8C530"],"moissanite-vang":["Moissanite v\xE0ng","#E3BE3A"],"moissanite-xanh":["Moissanite xanh l\u1EE5c","#1F5E52"]},oi={vang:["V\xE0ng","#D9B35E"],"vang-trang":["V\xE0ng tr\u1EAFng","#E4E2DC"],"vang-hong":["V\xE0ng h\u1ED3ng","#D9A08A"]},hn=n=>String(Math.round(n*100)/100).replace(".",","),Qe=n=>`<svg viewBox="0 0 48 48" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">${n}</svg>`,br=(n,e,t=0,i=1.5,s=24,r=24)=>Array.from({length:n},(a,o)=>{let c=t+o/n*Math.PI*2;return`<circle cx="${(s+Math.cos(c)*e).toFixed(1)}" cy="${(r+Math.sin(c)*e).toFixed(1)}" r="${i}"/>`}).join(""),dM=(n,e,t=1.4)=>{let i="";for(let s=0;s<e;s++){let r=-n+2*n*s/e;i+=`<circle cx="${24+r}" cy="${24-n}" r="${t}"/><circle cx="${24+n}" cy="${24+r}" r="${t}"/><circle cx="${24-r}" cy="${24+n}" r="${t}"/><circle cx="${24-n}" cy="${24-r}" r="${t}"/>`}return i},Nt='<path d="M5 15h38M5 33h38" opacity=".55"/>',_r={square:'<rect x="12" y="12" width="24" height="24" rx="1"/>',octagon:'<path d="M18 12h12l6 6v12l-6 6H18l-6-6V18z"/>',cushion:'<rect x="12" y="12" width="24" height="24" rx="8"/>',round:'<circle cx="24" cy="24" r="12.5"/>'},zd='<path d="M12 16H4M12 32H4M36 16h8M36 32h8" opacity=".55"/>';function fM(n){let e=jn[n].outline(),t=e.map(o=>o[0]),i=e.map(o=>o[1]),s=17/Math.max(Math.max(...t)-Math.min(...t),Math.max(...i)-Math.min(...i))*2,r=(o,c=1)=>`${(24+o[0]*s*c).toFixed(1)},${(24-o[1]*s*c).toFixed(1)}`,a=Math.max(1,Math.floor(e.length/64));return Qe(`<polygon points="${e.filter((o,c)=>c%a===0).map(o=>r(o)).join(" ")}"/><polygon points="${e.filter((o,c)=>c%Math.max(1,Math.floor(e.length/8))===0).map(o=>r(o,.55)).join(" ")}" opacity=".6"/>`)}var xn=(n,e,t)=>n.flatMap((i,s)=>e.map(r=>`<circle cx="${r+(s%2,0)}" cy="${i}" r="${t}"/>`)).join(""),va=[9,16.5,24,31.5,39],$n={signet:Qe(`${_r.square}<circle cx="24" cy="24" r="7"/>${zd}<path d="M7 20v8M41 20v8" opacity=".55"/>`),band:Qe(`<rect x="4" y="15" width="40" height="18" rx="2"/>${xn([21,27],va,1.6)}`),...Object.fromEntries(jl.map(n=>[`top_${n}`,Qe(`${_r[n]}<circle cx="24" cy="24" r="5.5" opacity=".6"/>${zd}`)])),prong4:Qe(`<circle cx="24" cy="24" r="9"/>${br(4,10.6,Math.PI/4,2.4)}`),prong6:Qe(`<circle cx="24" cy="24" r="9"/>${br(6,10.6,Math.PI/6,2.1)}`),bezel:Qe('<circle cx="24" cy="24" r="8.5"/><circle cx="24" cy="24" r="12" stroke-width="2.6"/>'),none:Qe('<circle cx="24" cy="24" r="9"/><rect x="8" y="8" width="32" height="32" rx="1" opacity=".5"/>'),halo:Qe(`<circle cx="24" cy="24" r="7"/>${br(14,11.4,0,1.6)}`),haloOct:Qe(`<circle cx="24" cy="24" r="7"/><path d="M18.6 11h10.8l7.600 7.600v10.800l-7.600 7.600H18.600l-7.600-7.600V18.600z" opacity=".5"/>${br(16,12.4,Math.PI/16,1.5)}`),ladderS:Qe(`${Nt}${[8,14.5,21,27.5,34].map(n=>`<rect x="${n}" y="21.500" width="5" height="5" rx=".5"/>`).join("")}${xn([17,19.8,28.2,31],va,.9)}`),bagLong2:Qe(`${Nt}${[20.3,24.3].flatMap(n=>[6,18.5,31].map(e=>`<rect x="${e}" y="${n}" width="11" height="3.400" rx=".4"/>`)).join("")}${xn([17.3,30.7],va,1)}`),tiersBagP:Qe(`${Nt}${[8,19,30].flatMap(n=>[20.3,22.9,25.5].map(e=>`<rect x="${n}" y="${e}" width="9" height="2" rx=".3"/>`)).join("")}<path d="M18 19.500v9M29 19.500v9"/>${xn([17.3,30.7],va,1)}`),haloSq:Qe(`<circle cx="24" cy="24" r="7"/>${dM(11.5,5,1.6)}`),bagFrame:Qe('<circle cx="24" cy="24" r="7"/><path d="M14.5 10.5h8v4h-8zM25.5 10.5h8v4h-8zM14.5 33.5h8v4h-8zM25.5 33.5h8v4h-8zM10.5 14.5h4v8h-4zM10.5 25.5h4v8h-4zM33.5 14.5h4v8h-4zM33.5 25.5h4v8h-4z"/>'),double:Qe(`<circle cx="24" cy="24" r="5.5"/>${br(11,9,0,1.3)}${br(17,13.2,.2,1.3)}`),bagRing:Qe(`<circle cx="24" cy="24" r="6"/><circle cx="24" cy="24" r="14.5"/>${Array.from({length:16},(n,e)=>{let t=e/16*Math.PI*2;return`<path d="M${(24+Math.cos(t)*7.5).toFixed(1)} ${(24+Math.sin(t)*7.5).toFixed(1)}L${(24+Math.cos(t)*13).toFixed(1)} ${(24+Math.sin(t)*13).toFixed(1)}"/>`}).join("")}`),plain:Qe(Nt),pave:Qe(`${Nt}${xn([20,24,28],va,1.5)}`),honey:Qe(`${Nt}${[20,28].flatMap(n=>va.map(e=>`<circle cx="${e}" cy="${n}" r="1.6"/>`)).join("")}${[12.7,20.2,27.7,35.2].map(n=>`<circle cx="${n}" cy="24" r="1.6"/>`).join("")}`),paveBig:Qe(`${Nt}${[10,19.3,28.7,38].map(n=>`<circle cx="${n}" cy="24" r="3"/>`).join("")}${xn([18,30],[8,14.4,20.8,27.2,33.6,40],.9)}`),ladder:Qe(`${Nt}${[8,14.5,21,27.5,34].map(n=>`<rect x="${n}" y="19" width="5" height="10" rx=".5"/>`).join("")}`),grid:Qe(`${Nt}<path d="M6 18h36M6 24h36M6 30h36M13 18v12M20.3 18v12M27.7 18v12M35 18v12" opacity=".7"/>${xn([21,27],[9.5,16.6,24,31.3,38.5],1.3)}`),tiers:Qe(`${Nt}${[11,19.6,28.3,37].map(n=>`<path d="M${n} 17v14"/>`).join("")}${xn([20,24,28],[6.7,15.3,24,32.6,41.3],1.2)}`),chevron:Qe(`${Nt}${[8,18,28].map(n=>`<path d="M${n} 18l7 6-7 6"/>`).join("")}${[13,23,33].flatMap(n=>[`<circle cx="${n}" cy="20" r="1.1"/>`,`<circle cx="${n+3.6}" cy="24" r="1.1"/>`,`<circle cx="${n}" cy="28" r="1.1"/>`]).join("")}`),letter:Qe(`${Nt}<path d="M17 19h14M24 19v10" stroke-width="2.6"/>${xn([18.5,29.5],[8,12,36,40],1)}`),carre:Qe(`${Nt}${[7,15.3,23.6,31.9].map(n=>`<rect x="${n}" y="20" width="7.5" height="7.5" rx=".6"/>`).join("")}`),bagLong:Qe(`${Nt}${[18.5,25.5].flatMap(n=>[6,18.5,31].map(e=>`<rect x="${e}" y="${n}" width="11" height="4.5" rx=".5"/>`)).join("")}`),faceStone:Qe(`${_r.square}<circle cx="24" cy="24" r="7"/>${br(4,8.4,Math.PI/4,1.6)}`),faceLetter:Qe(`${_r.square}<path d="M17 17h14M24 17v15" stroke-width="3"/>`),rows:Qe(`${Nt}<path d="M6 21h36M6 27h36" opacity=".7"/>${xn([18,24,30],[9,16.5,24,31.5,39],1.9)}`),ladderRd:Qe(`${Nt}${[8,14.5,21,27.5,34].map(n=>`<rect x="${n}" y="20.500" width="5" height="7" rx=".5"/>`).join("")}${xn([17.5,30.5],[10.5,17,23.5,30,36.5],1.7)}`),ladderT:Qe(`${Nt}${[8,14.5,21,27.5,34].map(n=>`<rect x="${n}" y="20.500" width="5" height="7" rx=".5"/>`).join("")}${[13.5,26.5,39.5].map(n=>`<path d="M${n} 16.500v3M${n} 28.500v3"/>`).join("")}${xn([18,30],[8.5,20,33],1)}`),ladder2:Qe(`${Nt}${[19,24.5].flatMap(n=>[8,14.5,21,27.5,34].map(e=>`<rect x="${e}" y="${n}" width="5" height="4.500" rx=".4"/>`)).join("")}`),ladder2s:Qe(`${Nt}${[19.5,25.5].flatMap(n=>[8,14.5,21,27.5,34].map(e=>`<rect x="${e}" y="${n}" width="5" height="3" rx=".4"/>`)).join("")}${xn([17.5,24,30.5],[10.5,17,23.5,30,36.5],.9)}`),ladderBig:Qe(`${Nt}${[7.5,19,30.5].map(n=>`<rect x="${n}" y="18" width="10" height="12" rx=".6"/>`).join("")}`),ladder3s:Qe(`${Nt}${[18.3,22.85,27.4].flatMap(n=>[8,14.5,21,27.5,34].map(e=>`<rect x="${e}" y="${n}" width="5" height="2.3" rx=".3"/>`)).join("")}${xn([17,21.7,26.3,31],[10.5,17,23.5,30,36.5],.75)}`),ladder3:Qe(`${Nt}${[17.5,22,26.5].flatMap(n=>[8,14.5,21,27.5,34].map(e=>`<rect x="${e}" y="${n}" width="5" height="4" rx=".4"/>`)).join("")}`),tiersBag:Qe(`${Nt}${[8,19,30].flatMap(n=>[18,21.2,24.4,27.6].map(e=>`<rect x="${n}" y="${e}" width="9" height="2.400" rx=".4"/>`)).join("")}<path d="M18 17v14M29 17v14"/>`),chevronPlain:Qe(`${Nt}${[9,15,21,27,33].map(n=>`<path d="M${n} 18l6 6-6 6" stroke-width="2.200"/>`).join("")}`),roof:Qe('<circle cx="24" cy="24" r="6"/><rect x="15.500" y="15.500" width="17" height="17" rx=".6"/><rect x="6" y="6" width="36" height="36" rx=".8"/><path d="M6 6l9.500 9.500M42 6l-9.500 9.500M6 42l9.500-9.500M42 42l-9.500-9.500"/>'+[10.7,37.3].map(n=>[13,18.5,24,29.5,35].map(e=>`<circle cx="${e}" cy="${n}" r="1.2"/>`).join("")).join("")+[10.7,37.3].map(n=>[18.5,24,29.5].map(e=>`<circle cx="${n}" cy="${e}" r="1.2"/>`).join("")).join("")),stepSq:Qe('<circle cx="24" cy="24" r="6.500"/><rect x="14.500" y="14.500" width="19" height="19" rx=".8"/><rect x="10" y="10" width="28" height="28" rx=".8" opacity=".6"/>'),star:Qe(`<circle cx="24" cy="24" r="6.500"/><path d="M${Array.from({length:12},(n,e)=>{let t=e/12*Math.PI*2,i=e%2?9:15.5;return`${(24+Math.cos(t)*i).toFixed(1)} ${(24+Math.sin(t)*i).toFixed(1)}`}).join("L")}z"/>`),facePlain:Qe(`${_r.square}<circle cx="24" cy="24" r="6.500" opacity=".6"/>`),faceRun:Qe(`${_r.square}<path d="M4 20h40M4 28h40" opacity=".55"/>${xn([24],[7,13,19,24.5,30,36,41.5],1.6)}`),plate:Qe(`${_r.square}<circle cx="24" cy="24" r="6"/>${zd}`),cradle:Qe('<circle cx="24" cy="24" r="9.500"/><path d="M4 17h11M4 31h11M33 17h11M33 31h11" opacity=".55"/><path d="M15 17v14M33 17v14"/>'),stations:Qe(`${Nt}<circle cx="10" cy="24" r="3.4"/><circle cx="24" cy="24" r="3.4"/><circle cx="38" cy="24" r="3.4"/>${xn([21.5,26.5],[15.5,18.5,29.5,32.5],1)}`),flush:Qe(`${Nt}<circle cx="11" cy="24" r="2.6"/><circle cx="24" cy="24" r="2.6"/><circle cx="37" cy="24" r="2.6"/>`)},jm={square:"Vu\xF4ng",octagon:"Vu\xF4ng v\xE1t g\xF3c",cushion:"Vu\xF4ng bo tr\xF2n",round:"Tr\xF2n"},Wd={prong4:"4 ch\u1EA5u tr\u1EE5",prong6:"6 ch\u1EA5u tr\u1EE5",bezel:"B\u1ECDc vi\u1EC1n"},Km={none:"Kh\xF4ng khung",halo:"Vi\u1EC1n \u0111\xE1 tr\xF2n",haloSq:"Vi\u1EC1n \u0111\xE1 vu\xF4ng",haloOct:"Vi\u1EC1n \u0111\xE1 b\xE1t gi\xE1c",bagFrame:"Khung baguette",bagRing:"V\xF2ng baguette to\u1EA3 tr\xF2n",double:"Hai l\u1EDBp vi\u1EC1n",stepSq:"B\u1EC7 vu\xF4ng tr\u01A1n hai b\u1EADc",roof:"M\xE1i d\u1ED1c \u0111\xEDnh pav\xE9",star:"Khung sao"},$m={plain:"Tr\u01A1n",pave:"Pav\xE9 th\u1EB3ng h\xE0ng",honey:"Pav\xE9 t\u1ED5 ong",paveBig:"H\xE0ng l\u1EDBn \u1EDF gi\u1EEFa",rows:"H\xE0ng \u0111\xE1 gi\u1EEFa g\u1EDD d\u1ECDc",ladder:"K\xEAnh baguette",ladderS:"K\xEAnh baguette h\u1EB9p + pav\xE9",ladderBig:"K\xEAnh baguette l\u1EDBn",ladderRd:"K\xEAnh baguette + h\xE0ng \u0111\xE1 l\u1EDBn",ladderT:"K\xEAnh baguette + b\u1EADc pav\xE9",ladder2:"Hai k\xEAnh baguette",ladder2s:"Hai k\xEAnh xen h\xE0ng \u0111\xE1",ladder3:"Ba k\xEAnh baguette",ladder3s:"Ba k\xEAnh xen h\xE0ng \u0111\xE1",carre:"K\xEAnh \u0111\xE1 vu\xF4ng",bagLong:"Baguette d\u1ECDc",bagLong2:"Hai h\xE0ng baguette d\u1ECDc + pav\xE9",tiersBag:"B\u1EADc thang baguette",tiersBagP:"B\u1EADc thang baguette + pav\xE9",grid:"L\u01B0\u1EDBi \xF4 vu\xF4ng",tiers:"B\u1EADc thang pav\xE9",chevron:"Ch\u1EEF V \u0111\xEDnh \u0111\xE1",chevronPlain:"Ch\u1EEF V v\xE0ng tr\u01A1n",letter:"Ch\u1EEF c\xE1i",stations:"\xD4 \u0111\xE1 \u0111i\u1EC3m",flush:"\u0110\xE1 ch\xECm r\u1EA3i \u0111\u1EC1u"},qd=Object.fromEntries(Dd.map(n=>[n,$m[n]])),Xd={x:"L\u01B0\u1EDBi m\u1EAFt c\xE1o",tram:"L\u01B0\u1EDBi m\u1EAFt tr\xE1m",ong:"L\u01B0\u1EDBi t\u1ED5 ong",dac:"\u0110\xFAc \u0111\u1EB7c, kh\xF4ng l\xF3t l\u01B0\u1EDBi"},jd=Object.fromEntries(Nd.map(n=>[n,$m[n]])),Rt=n=>n.type==="signet",Po=n=>n.type==="band",as=n=>Rt(n)&&n.face==="cradle",Jl=n=>Rt(n)&&n.center==="run",Zl=n=>Rt(n)&&n.center==="plain",Us=n=>Rt(n)&&!as(n)&&!Jl(n),Ql=n=>Us(n)&&n.dome==="flat"&&n.top==="square",Bm="",zm=null,Ym=n=>{let e=JSON.stringify(n);return e!==Bm&&(Bm=e,zm=Om(n)),zm},Jm=n=>Ym(n).side>0,ya=n=>Rt(n)&&n.shoulder==="letter",ri=n=>Rt(n)&&n.center==="letter",Oi=n=>Rt(n)&&n.center!=="letter",Kd=n=>Us(n)&&n.dome==="flat"&&n.top==="square",Gm=n=>Oi(n)||Zl(n)&&(n.frame!=="none"||n.plinth==="on"),pM=["pave","honey","rows","ladder","ladderS","ladderRd","bagLong2","tiersBagP","ladderT","ladder2","ladder2s","ladder3","carre","grid","tiers","chevron","letter","paveBig","stations"],mM=n=>pM.includes(Rt(n)?n.shoulder:n.bandStones),Zm=n=>Ym(n).accent>0,eh=n=>{let[e,t]=vi(n);return e>t+.05?`${hn(e)} \xD7 ${hn(t)} mm`:`${hn(t)} mm`},Gd=Object.keys(xr).map(n=>[n,xr[n][0],xr[n][1]]),nt=(n,e,t,i=()=>!0,s=null,r=!1)=>({k:n,label:e,opts:t,show:i,hint:s,sel:r}),$d=(n,e)=>typeof n.opts=="function"?n.opts(e):n.opts,gM=[{id:"form",title:"Ki\u1EC3u d\xE1ng",tab:"Ki\u1EC3u d\xE1ng",groups:[nt("type","Ki\u1EC3u nh\u1EABn",[["signet","Nh\u1EABn m\u1EB7t \u0111\xE1",$n.signet],["band","Nh\u1EABn b\u1EA3n",$n.band]],()=>!0,n=>Rt(n)?"M\u1EB7t nh\u1EABn mang vi\xEAn ch\u1EE7, hai vai ch\u1EA1y \u0111\xE1, \u0111ai thu\xF4n d\u1EA7n xu\u1ED1ng d\u01B0\u1EDBi.":"\u0110ai \u0111\u1EC1u b\u1EA3n, c\xE1c h\xE0ng \u0111\xE1 ch\u1EA1y quanh nh\u1EABn."),nt("face","Ki\u1EC3u m\u1EB7t nh\u1EABn",[["plate","C\xF3 m\u1EB7t nh\u1EABn",$n.plate],["cradle","\xD4m vi\xEAn ch\u1EE7, kh\xF4ng m\u1EB7t",$n.cradle]],n=>Rt(n)&&n.center==="stone",n=>as(n)?"Hai vai d\xE2ng cao \xF4m s\xE1t vi\xEAn ch\u1EE7, vi\xEAn n\u1EB1m trong r\xE3nh ch\u1EEF V gi\u1EEFa hai vai \u2014 ki\u1EC3u c\u1EE7a c\xE1c m\u1EABu nh\u1EABn vi\xEAn l\u1EDBn.":""),nt("top","D\xE1ng m\u1EB7t nh\u1EABn",jl.map(n=>[n,jm[n],$n[`top_${n}`]]),n=>Rt(n)&&!as(n)),nt("dome","M\u1EB7t nh\u1EABn",[["flat","Ph\u1EB3ng, kh\u1ED1i vu\xF4ng v\u1EE9c"],["dome","V\xF2m, \xF4m tr\xF2n"],["bombe","V\xF2m cao, tr\xF2n nh\u01B0 g\u1ED1i"]],n=>Rt(n)&&!as(n)),nt("faceW",n=>as(n)?"B\u1EA3n vai s\xE1t vi\xEAn ch\u1EE7":"B\u1EA3n m\u1EB7t nh\u1EABn",Pd.map(n=>[n,`${hn(n)} mm`]),Rt,n=>as(n)?"Vi\xEAn ch\u1EE7 c\xF3 th\u1EC3 r\u1ED9ng b\u1EB1ng b\u1EA3n vai.":"B\u1EA3n m\u1EB7t r\u1ED9ng h\u01A1n th\xEC \u0111\u1EB7t \u0111\u01B0\u1EE3c vi\xEAn ch\u1EE7 l\u1EDBn h\u01A1n v\xE0 nhi\u1EC1u l\u1EDBp khung \u0111\xE1 h\u01A1n."),nt("faceLen","Chi\u1EC1u d\xE0i m\u1EB7t nh\u1EABn",[["full","Vu\xF4ng theo b\u1EA3n"],["tight","\xD4m s\xE1t ph\u1EA7n gi\u1EEFa"]],n=>Us(n)&&!(Ql(n)&&n.faceBars==="on"),n=>n.faceLen==="tight"?"M\u1EB7t nh\u1EABn ch\u1EC9 d\xE0i v\u1EEBa vi\xEAn ch\u1EE7 v\xE0 khung; h\xE0ng \u0111\xE1 tr\xEAn vai ch\u1EA1y l\xEAn s\xE1t ph\u1EA7n gi\u1EEFa.":""),nt("height","\u0110\u1ED9 d\xE0y m\u1EB7t nh\u1EABn",[["low","Th\u1EA5p, \xF4m tay"],["mid","V\u1EEBa"],["high","Cao, b\u1EC1 th\u1EBF"]],Rt),nt("bandW","B\u1EA3n nh\u1EABn",Id.map(n=>[n,`${hn(n)} mm`]),Po),nt("bandProfile","Ti\u1EBFt di\u1EC7n b\u1EA3n nh\u1EABn",[["flat","Ph\u1EB3ng"],["dome","Bo v\xF2m"],["bevel","V\xE1t c\u1EA1nh l\u1EDBn"]],Po)]},{id:"center",title:n=>ri(n)?"M\u1EB7t nh\u1EABn ch\u1EEF c\xE1i":Oi(n)?"M\u1EB7t nh\u1EABn & vi\xEAn ch\u1EE7":"M\u1EB7t nh\u1EABn",tab:"M\u1EB7t nh\u1EABn",show:Rt,groups:[nt("center","Gi\u1EEFa m\u1EB7t nh\u1EABn",[["stone","Vi\xEAn ch\u1EE7",$n.faceStone],["letter","Ch\u1EEF c\xE1i n\u1ED5i",$n.faceLetter],["plain","M\u1EB7t tr\u01A1n",$n.facePlain],["run","H\xE0ng \u0111\xE1 ch\u1EA1y li\u1EC1n",$n.faceRun]],()=>!0,n=>ri(n)?"M\u1ED9t ch\u1EEF c\xE1i l\u1EDBn n\u1ED5i gi\u1EEFa m\u1EB7t nh\u1EABn, kh\xF4ng c\xF3 vi\xEAn ch\u1EE7. Mu\u1ED1n n\u1EC1n quanh ch\u1EEF l\u1EA5p l\xE1nh, b\u1EADt \u201CL\xE1t \u0111\xE1 k\xEDn ph\u1EA7n m\u1EB7t c\xF2n l\u1EA1i\u201D.":Jl(n)?"Kh\xF4ng c\xF3 vi\xEAn ch\u1EE7: h\xE0ng \u0111\xE1 tr\xEAn vai ch\u1EA1y li\u1EC1n m\u1ED9t m\u1EA1ch qua m\u1EB7t nh\u1EABn. Ch\u1ECDn ki\u1EC3u h\xE0ng \u0111\xE1 \u1EDF b\u01B0\u1EDBc sau.":Zl(n)?"Kh\xF4ng c\xF3 vi\xEAn ch\u1EE7: m\u1EB7t nh\u1EABn v\xE0ng tr\u01A1n; c\xF3 th\u1EC3 th\xEAm khung \u0111\xE1 quanh m\u1ED9t \u0111\u0129a v\xE0ng \u1EDF gi\u1EEFa.":""),nt("faceLetter","Ch\u1EEF tr\xEAn m\u1EB7t nh\u1EABn",dr.map(n=>[n,n]),ri,null,!0),nt("letterStone","N\xE9t ch\u1EEF",[["on","\u0110\xEDnh \u0111\xE1 tr\xF2n"],["bag","\u0110\xEDnh baguette"],["off","V\xE0ng tr\u01A1n"]],ri),nt("letterTurn","H\u01B0\u1EDBng ch\u1EEF",[["off","\u0110\u1EC9nh ch\u1EEF v\u1EC1 ph\xEDa \u0111\u1EA7u ng\xF3n"],["on","Xoay d\u1ECDc theo v\xF2ng nh\u1EABn"]],ri),nt("faceField","N\u1EC1n quanh ch\u1EEF",[["satin","Nh\xE1m m\u1EDD"],["bong","B\xF3ng"]],n=>ri(n)&&n.facePave!=="on",()=>"N\u1EC1n nh\xE1m m\u1EDD gi\xFAp ch\u1EEF b\xF3ng n\u1ED5i r\xF5 h\u01A1n."),nt("shape",n=>Oi(n)?"D\xE1ng gi\xE1c c\u1EAFt":"D\xE1ng \u0111\u0129a gi\u1EEFa",Cd.map(n=>[n,jn[n].vi,fM(n)]),Gm),nt("centerD",n=>Oi(n)?"C\u1EE1 vi\xEAn ch\u1EE7":"C\u1EE1 \u0111\u0129a gi\u1EEFa",n=>ur.filter(e=>xa(n,e)).map(e=>[e,eh({...n,centerD:e})]),Gm,n=>ur.some(e=>!xa(n,e))?`B\u1EA3n ${as(n)?"vai":"m\u1EB7t"} ${hn(n.faceW)} mm \u0111\u1EB7t \u0111\u01B0\u1EE3c vi\xEAn t\u1EDBi ${eh({...n,centerD:Math.max(...ur.filter(e=>xa(n,e)))})}. Mu\u1ED1n vi\xEAn l\u1EDBn h\u01A1n, ch\u1ECDn b\u1EA3n m\u1EB7t r\u1ED9ng h\u01A1n \u1EDF b\u01B0\u1EDBc Ki\u1EC3u d\xE1ng.`:""),nt("gem","Lo\u1EA1i \u0111\xE1 qu\xFD",Gd,Oi),nt("setting","Ki\u1EC3u \xF4m \u0111\xE1",n=>Object.keys(Wd).filter(e=>Bd(n.shape,e)).map(e=>[e,Wd[e],$n[e]]),Oi),nt("prongTip","\u0110\u1EA7u ch\u1EA5u",[["round","Tr\xF2n"],["claw","M\xF3ng vu\u1ED1t"]],n=>Oi(n)&&["prong4","prong6"].includes(n.setting)),nt("headH","\u0110\u1ED9 cao vi\xEAn ch\u1EE7 & ch\u1EA5u",[["low","\xD4m s\xE1t m\u1EB7t nh\u1EABn"],["mid","V\u1EEBa"],["high","Nh\xF4 cao"]],Oi,n=>n.setting==="bezel"?"\u1ED4 b\u1ECDc vi\u1EC1n n\xE2ng cao theo vi\xEAn ch\u1EE7.":"Ch\u1EA5u v\xE0 vi\xEAn ch\u1EE7 c\xF9ng nh\xF4 l\xEAn; nh\xF4 cao th\xEC vi\xEAn ch\u1EE7 n\u1ED5i b\u1EADt h\u01A1n, c\xF3 th\xEAm v\xE0nh gi\u1EB1ng gi\u1EEFa c\xE1c ch\u1EA5u."),nt("plinth","B\u1EC7 n\xE2ng ph\u1EA7n gi\u1EEFa & khung \u0111\xE1",[["on","C\xF3 b\u1EC7"],["off","Kh\xF4ng b\u1EC7"]],n=>Us(n)&&!ri(n)),nt("frame","Khung quanh ph\u1EA7n gi\u1EEFa",n=>To.filter(e=>Ao(n,e)).map(e=>[e,Km[e],$n[e]]),n=>Us(n)&&!ri(n),n=>n.frame==="stepSq"?"B\u1EC7 vu\xF4ng hai b\u1EADc b\u1EB1ng v\xE0ng b\xF3ng, kh\xF4ng \u0111\xEDnh \u0111\xE1.":n.frame==="roof"?"M\u1EB7t nh\u1EABn d\xE2ng th\xE0nh b\u1ED1n m\xE1i d\u1ED1c l\xE1t pav\xE9, vi\xEAn ch\u1EE7 ng\u1ED3i trong \xF4 vu\xF4ng tr\xEAn \u0111\u1EC9nh. Ch\u1ECDn c\u1EE1 \u0111\xE1 t\u1EA5m \u201CTo\u201D \u0111\u1EC3 m\xE1i l\xE1t vi\xEAn l\u1EDBn.":n.frame==="star"?"T\u1EA5m sao s\u1EABm m\xE0u n\u1ED5i d\u01B0\u1EDBi vi\xEAn ch\u1EE7, c\xE1nh sao n\u1EB1m gi\u1EEFa c\xE1c ch\u1EA5u.":n.frame!=="none"?`\u0110\xE1 khung ${n.frame==="bagFrame"?"baguette, b\u1EC1 ngang":"tr\xF2n"} ${hn(xi(n))} mm \u2014 t\u1EF1 ch\u1ECDn c\u1EE1 v\u1EEBa kho\u1EA3ng tr\u1ED1ng quanh vi\xEAn ch\u1EE7.`:To.some(e=>!Ao(n,e))?"Vi\xEAn ch\u1EE7 \u0111ang g\u1EA7n k\xEDn m\u1EB7t nh\u1EABn; gi\u1EA3m c\u1EE1 vi\xEAn ho\u1EB7c t\u0103ng b\u1EA3n m\u1EB7t \u0111\u1EC3 th\xEAm khung \u0111\xE1.":""),nt("faceBars","Thanh baguette hai m\xE9p m\u1EB7t nh\u1EABn",[["on","C\xF3"],["off","Kh\xF4ng"]],Ql,n=>n.faceBars==="on"?"M\u1EB7t nh\u1EABn r\u1ED9ng h\u01A1n vai; hai m\xE9p m\u1EB7t l\xE0 hai thanh baguette n\u1EB1m ngang, vai ch\u1EA1y \u0111\xE1 s\xE1t t\u1EDBi khung vi\xEAn ch\u1EE7.":""),nt("facePave","L\xE1t \u0111\xE1 k\xEDn ph\u1EA7n m\u1EB7t c\xF2n l\u1EA1i",[["off","Kh\xF4ng"],["on","C\xF3"]],Us),nt("corners","\u0110\xE1 g\xF3c m\u1EB7t nh\u1EABn",[["off","Kh\xF4ng"],["on","B\u1ED1n vi\xEAn g\xF3c"],["row","H\xE0ng ba vi\xEAn hai \u0111\u1EA7u"]],Kd,n=>n.corners==="on"?"B\u1ED1n vi\xEAn b\u1ECDc vi\u1EC1n \u1EDF b\u1ED1n g\xF3c m\u1EB7t, m\xE0u theo \u201C\u0111\xE1 baguette & \u0111\xE1 \u0111i\u1EC3m\u201D. Ch\u1EC9 hi\u1EC7n khi g\xF3c m\u1EB7t c\xF2n \u0111\u1EE7 ch\u1ED7 \u2014 t\u0103ng b\u1EA3n m\u1EB7t ho\u1EB7c gi\u1EA3m khung n\u1EBFu ch\u01B0a th\u1EA5y.":n.corners==="row"?"Ba vi\xEAn l\u1EDBn x\u1EBFp ngang \u1EDF m\u1ED7i \u0111\u1EA7u m\u1EB7t nh\u1EABn, s\xE1t vai. Ch\u1EC9 hi\u1EC7n khi m\u1EB7t c\xF2n \u0111\u1EE7 ch\u1ED7 \u2014 t\u0103ng b\u1EA3n m\u1EB7t ho\u1EB7c gi\u1EA3m c\u1EE1 vi\xEAn ch\u1EE7 n\u1EBFu ch\u01B0a th\u1EA5y.":""),nt("rim","Vi\u1EC1n m\u1EB7t nh\u1EABn",n=>[["none","Tr\u01A1n"],...Co({...n,rim:"rail"})?[["rail","G\u1EDD n\u1ED5i"],["milgrain","Vi\u1EC1n h\u1EA1t"]]:[],...pr(n)>0?[["pave","H\xE0ng \u0111\xE1 pav\xE9"]]:[]],n=>Us(n)&&(Co({...n,rim:"rail"})||pr(n)>0),n=>n.rim==="pave"?`M\u1ED9t h\xE0ng \u0111\xE1 tr\xF2n ${hn(pr(n))} mm ch\u1EA1y quanh vi\u1EC1n m\u1EB7t nh\u1EABn. Ch\u1EC9 c\xF3 khi m\u1EB7t c\xF2n \u0111\u1EE7 ch\u1ED7 \u2014 t\u0103ng b\u1EA3n m\u1EB7t ho\u1EB7c gi\u1EA3m khung n\u1EBFu ch\u01B0a th\u1EA5y.`:"")]},{id:"stones",title:n=>Rt(n)?"Vai & h\xE0ng \u0111\xE1":"H\xE0ng \u0111\xE1",tab:"H\xE0ng \u0111\xE1",groups:[nt("shoulder","\u0110\xE1 tr\xEAn hai vai",Object.keys(qd).map(n=>[n,qd[n],$n[n]]),Rt,n=>({ladder:"Baguette n\u1EB1m ngang b\u1EA3n, x\u1EBFp s\xE1t nhau gi\u1EEFa hai g\u1EDD k\xEAnh; ph\u1EA7n b\u1EA3n c\xF2n d\u01B0 hai b\xEAn t\u1EF1 l\xE1t pav\xE9.",ladderBig:"M\u1ED9t k\xEAnh baguette c\u1EE1 l\u1EDBn ch\u1EA1y gi\u1EEFa vai, hai b\xEAn \u0111\u1EC3 v\xE0ng tr\u01A1n.",tiers:"T\u1EEBng h\xE0ng \u0111\xE1 ng\u0103n nhau b\u1EB1ng m\u1ED9t g\u1EDD ngang, x\u1EBFp nh\u01B0 b\u1EADc thang xu\u1ED1ng vai.",chevron:"C\xE1c h\xE0ng \u0111\xE1 x\u1EBFp h\xECnh ch\u1EEF V, m\u0169i h\u01B0\u1EDBng xu\u1ED1ng \u0111ai, gi\u1EEFa c\xE1c h\xE0ng l\xE0 g\u1EDD n\u1ED5i."})[n.shoulder]||""),nt("letter","Ch\u1EEF tr\xEAn vai ph\u1EA3i",dr.map(n=>[n,n]),ya,null,!0),nt("letter2","Ch\u1EEF tr\xEAn vai tr\xE1i",[["","Gi\u1ED1ng vai ph\u1EA3i"],...dr.map(n=>[n,n])],ya,()=>"Ch\u1EEF n\u1ED5i tr\xEAn vai nh\u1EABn, n\u1EC1n quanh ch\u1EEF l\xE1t pav\xE9. C\xF3 th\u1EC3 ch\u1ECDn hai ch\u1EEF kh\xE1c nhau, v\xED d\u1EE5 t\xEAn vi\u1EBFt t\u1EAFt c\u1EE7a b\u1EA1n.",!0),nt("letterStone","N\xE9t ch\u1EEF",[["on","\u0110\xEDnh \u0111\xE1 tr\xF2n"],["on2","N\xE9t d\xE0y, hai h\xE0ng \u0111\xE1"],["bag","\u0110\xEDnh baguette"],["off","V\xE0ng tr\u01A1n"]],ya),nt("tierRows","S\u1ED1 h\xE0ng \u0111\xE1 m\u1ED7i b\u1EADc",[[1,"M\u1ED9t h\xE0ng"],[2,"Hai h\xE0ng"]],n=>Rt(n)&&["tiers","ladderT","chevron"].includes(n.shoulder)),nt("shoulderLen","H\xE0ng \u0111\xE1 tr\xEAn vai d\xE0i t\u1EDBi",n=>[["short","G\u1EA7n m\u1EB7t nh\u1EABn"],["mid","Gi\u1EEFa vai"],["long","H\u1EBFt vai"]].filter(([e])=>!(ya(n)&&e==="short")),n=>Rt(n)&&(n.shoulder!=="plain"||n.edge!=="none")),nt("bandStones","\u0110\xE1 tr\xEAn b\u1EA3n nh\u1EABn",Object.keys(jd).map(n=>[n,jd[n],$n[n]]),Po,n=>({ladder:"Baguette n\u1EB1m ngang b\u1EA3n gi\u1EEFa hai g\u1EDD k\xEAnh; b\u1EA3n r\u1ED9ng th\xEC hai b\xEAn t\u1EF1 l\xE1t th\xEAm pav\xE9.",stations:"C\xE1c vi\xEAn b\u1ECDc vi\u1EC1n c\xE1ch \u0111\u1EC1u, gi\u1EEFa c\xE1c vi\xEAn l\xE1t pav\xE9. Ch\u1ECDn m\xE0u \u0111\xE1 \u0111i\u1EC3m \u1EDF b\xEAn d\u01B0\u1EDBi."})[n.bandStones]||""),nt("cover","\u0110\u1ED9 ph\u1EE7 \u0111\xE1",[["third","1/3 v\xF2ng"],["half","N\u1EEDa v\xF2ng"],["full","C\u1EA3 v\xF2ng"]],n=>Po(n)&&(n.bandStones!=="plain"||n.edge!=="none")),nt("paveD","C\u1EE1 \u0111\xE1 t\u1EA5m",[["small","Nh\u1ECF \xB7 kho\u1EA3ng 1,2 mm"],["mid","V\u1EEBa \xB7 kho\u1EA3ng 1,5 mm"],["big","To \xB7 kho\u1EA3ng 1,9 mm"]],mM,n=>Rt(n)&&n.shoulder==="ladderRd"?"V\u1EDBi ki\u1EC3u n\xE0y: ch\u1ECDn \u201CNh\u1ECF\u201D th\xEC k\xEAnh baguette r\u1ED9ng h\u01A1n, hai h\xE0ng \u0111\xE1 tr\xF2n nh\u1ECF l\u1EA1i.":Rt(n)&&n.shoulder==="rows"?"Ch\u1ECDn \u201CTo\u201D \u0111\u1EC3 c\xF3 ba h\xE0ng vi\xEAn l\u1EDBn gi\u1EEFa c\xE1c g\u1EDD d\u1ECDc.":"S\u1ED1 h\xE0ng \u0111\xE1 t\u1EF1 t\xEDnh theo b\u1EA3n nh\u1EABn: \u0111\xE1 nh\u1ECF th\xEC nhi\u1EC1u h\xE0ng h\u01A1n."),nt("edge","Vi\u1EC1n hai m\xE9p",[["none","Tr\u01A1n"],["rail","G\u1EDD n\u1ED5i"],["milgrain","Vi\u1EC1n h\u1EA1t"],["band","Vi\u1EC1n tr\u01A1n b\u1EA3n r\u1ED9ng"],["pave","H\xE0ng pav\xE9"],["bevel","M\xE9p v\xE1t \u0111\xEDnh pav\xE9"],["notch","Kh\xEDa r\u0103ng"]],()=>!0,n=>({band:"Hai m\xE9p \u0111\u1EC3 v\xE0ng b\xF3ng b\u1EA3n r\u1ED9ng, h\xE0ng \u0111\xE1 n\u1EB1m l\u1ECDt gi\u1EEFa.",bevel:"Hai m\xE9p v\xE1t nghi\xEAng, m\u1ED7i m\xE9p m\u1ED9t h\xE0ng pav\xE9 n\u1EB1m tr\xEAn m\u1EB7t v\xE1t.",notch:"C\xE1c kh\u1ED1i nh\u1ECF c\xE1ch \u0111\u1EC1u d\u1ECDc hai m\xE9p, nh\u01B0 vi\u1EC1n b\xE1nh r\u0103ng."})[n.edge]||""),nt("flank","H\xF4ng nh\u1EABn (hai b\xEAn m\u1EB7t)",[["plain","Tr\u01A1n"],["milgrain","Vi\u1EC1n h\u1EA1t"],["pave1","M\u1ED9t h\xE0ng \u0111\xE1"],["pave2","Hai h\xE0ng \u0111\xE1"],["pave3","Ba h\xE0ng \u0111\xE1"]],Rt),nt("accentGem","Lo\u1EA1i \u0111\xE1 t\u1EA5m",Gd,Zm),nt("sideGem","Lo\u1EA1i \u0111\xE1 baguette & \u0111\xE1 \u0111i\u1EC3m",Gd,Jm)]},{id:"finish",title:"\u0110ai & ho\xE0n thi\u1EC7n",tab:"Ho\xE0n thi\u1EC7n",groups:[nt("lattice","L\xF2ng nh\u1EABn ph\xEDa tr\xEAn",Object.keys(Xd).map(n=>[n,Xd[n]]),Rt,n=>n.lattice==="dac"?"\u0110\xFAc \u0111\u1EB7c n\u1EB7ng tay v\xE0 t\u1ED1n v\xE0ng h\u01A1n nhi\u1EC1u so v\u1EDBi l\xF3t l\u01B0\u1EDBi.":"Ph\u1EA7n tr\xEAn c\u1EE7a nh\u1EABn \u0111\u1EC3 r\u1ED7ng, l\xF2ng trong l\xF3t l\u01B0\u1EDBi: nh\u1EB9 tay, ti\u1EBFt ki\u1EC7m v\xE0ng \u2014 c\xE1ch x\u01B0\u1EDFng T Gold ho\xE0n thi\u1EC7n h\u1EA7u h\u1EBFt nh\u1EABn nam."),nt("shank","Ki\u1EC3u \u0111ai",[["taper","Thu\xF4n d\u1EA7n t\u1EEB m\u1EB7t nh\u1EABn"],["step","Gi\u1EEF b\u1EA3n r\u1ED9ng t\u1EDBi h\xF4ng r\u1ED3i th\u1EAFt l\u1EA1i"]],Rt),nt("bottomW","B\u1EA3n \u0111ai ph\xEDa d\u01B0\u1EDBi",Ld.map(n=>[n,`${n} mm`]),Rt),nt("shankDeco","Trang tr\xED \u0111ai",[["none","Tr\u01A1n"],["flutes","G\xE2n d\u1ECDc n\u1ED1i ti\u1EBFp h\xE0ng \u0111\xE1"],["pave","M\u1ED9t h\xE0ng \u0111\xE1 ch\u1EA1y xu\u1ED1ng \u0111ai"],["milgrain","Hai \u0111\u01B0\u1EDDng vi\u1EC1n h\u1EA1t"]],Rt),nt("metal","M\xE0u v\xE0ng",Object.keys(oi).map(n=>[n,oi[n][0],oi[n][1]])),nt("twoTone","Hai m\xE0u v\xE0ng",n=>[["none","M\u1ED9t m\xE0u"],...ya(n)||ri(n)?[["letter","Ch\u1EEF c\xE1i m\xE0u th\u1EE9 hai"]]:[],...Oi(n)?[["head","\u1ED4 vi\xEAn ch\u1EE7 m\xE0u th\u1EE9 hai"]]:[],...Rt(n)&&n.shoulder==="chevronPlain"?[["shoulder","G\xE2n ch\u1EEF V m\xE0u th\u1EE9 hai"]]:[],["settings","To\xE0n b\u1ED9 \u1ED5 \u0111\xE1 m\xE0u th\u1EE9 hai"]],()=>!0,n=>n.twoTone==="shoulder"?"G\xE2n ch\u1EEF V tr\xEAn vai kh\xE1c m\xE0u th\xE2n nh\u1EABn.":n.twoTone==="letter"?"Ch\u1EEF c\xE1i kh\xE1c m\xE0u th\xE2n nh\u1EABn n\xEAn n\u1ED5i r\xF5, nh\u01B0 m\u1EABu ch\u1EEF v\xE0ng h\u1ED3ng tr\xEAn nh\u1EABn v\xE0ng tr\u1EAFng.":n.twoTone!=="none"?"\u1ED4 \u0111\xE1 m\xE0u v\xE0ng tr\u1EAFng tr\xEAn th\xE2n v\xE0ng gi\xFAp \u0111\xE1 qu\xFD tr\xF4ng tr\u1EAFng v\xE0 s\xE1ng h\u01A1n.":""),nt("metal2","M\xE0u v\xE0ng th\u1EE9 hai",n=>Object.keys(oi).filter(e=>e!==n.metal).map(e=>[e,oi[e][0],oi[e][1]]),n=>n.twoTone!=="none"),nt("karat","Tu\u1ED5i v\xE0ng",[["10K","10K"],["14K","14K"],["18K","18K"]]),nt("finish","B\u1EC1 m\u1EB7t th\xE2n nh\u1EABn",[["bong","B\xF3ng g\u01B0\u01A1ng"],["nham","Nh\xE1m m\u1EDD"],["chai","V\xE2n ch\u1EA3i"]])]}],Lo=()=>gM.filter(n=>!n.show||n.show(ne)),Vm=n=>typeof n.title=="function"?n.title(ne):n.title,bM=["",...Array.from({length:22},(n,e)=>String(e+9))],Qm=Object.keys(Ds),ih=Object.fromEntries(Object.entries(km).filter(([,n])=>n.app==="nhan-nam")),Si="",Jd=()=>({...Ds,...ih[Si]?.cfg||{}});function _M(){let n=new URLSearchParams(location.hash.slice(1));Si=ih[n.get("mau")]?n.get("mau"):"";let e=Jd();for(let i of Qm){if(!n.has(i))continue;let s=n.get(i),r=Ds[i];e[i]=typeof r=="number"?Number(s)||r:s.slice(0,40)}let t=mr(e);for(let i of["gem","accentGem","sideGem"])xr[t[i]]||(t[i]=Ds[i]);for(let i of["metal","metal2"])oi[t[i]]||(t[i]=Ds[i]);return t}function Sa(n){let e=new URLSearchParams,t=Si?mr(Jd()):Ds;Si&&e.set("mau",Si);for(let i of Qm)n[i]!==t[i]&&e.set(i,n[i]);history.replaceState(null,"",`${location.pathname}${location.search}${e.toString()?`#${e}`:""}`)}var Ma=(n,e=document)=>e.querySelector(n),yi=n=>String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),$l=typeof window<"u"&&window.TG3D_APP&&window.TG3D_APP.contact?window.TG3D_APP:null,xM=n=>$l?`<a class="btn-next send" href="${yi(`${$l.contact}${$l.contact.includes("?")?"&":"?"}piece=${encodeURIComponent($l.piece||"T\u1EF1 thi\u1EBFt k\u1EBF nh\u1EABn nam (3D)")}&config=${encodeURIComponent(`${n.map(([e,t])=>`${e}: ${t}`).join(" \xB7 ")} \u2014 M\u1EDF l\u1EA1i thi\u1EBFt k\u1EBF: ${location.origin}${location.pathname}${location.hash}`.slice(0,900))}#dat-lich`)}">G\u1EEDi thi\u1EBFt k\u1EBF cho T Gold <span aria-hidden="true">\u2192</span></a>`:"",Io=n=>(n.metal2===n.metal&&(n.metal2=n.metal==="vang-trang"?"vang":"vang-trang"),n),ne=Io(_M());if(Si){let n=document.querySelector(".pane-head .kick");n&&(n.textContent=`Tinh ch\u1EC9nh thi\u1EBFt k\u1EBF ri\xEAng \xB7 ${ih[Si].ten}`)}var ai=Ma("#cfg"),Mi=Ma("#steps"),Fn=0,th=Kl(ne),vM=n=>{let e=typeof n.label=="function"?n.label(ne):n.label;if(n.sel){let a=$d(n,ne),o=n.hint?n.hint(ne):"";return`<div class="grp"><label class="fld"><span>${e}</span><select data-k="${n.k}">${a.map(([c,l])=>`<option value="${yi(c)}"${c===ne[n.k]?" selected":""}>${yi(l)}</option>`).join("")}</select></label>${o?`<p class="hint">${yi(o)}</p>`:""}</div>`}let t=$d(n,ne),i=t.find(a=>a[0]===ne[n.k]),s=t.some(a=>String(a[2]||"").startsWith("<svg")),r=n.hint?n.hint(ne):"";return`<fieldset class="grp"><legend><span>${e}</span><b>${yi(i?i[1]:"")}</b></legend>
    <div class="${s?"cards":"chips"}" data-g="${n.k}" role="radiogroup" aria-label="${e}">${t.map(([a,o,c])=>`<button type="button" role="radio" aria-checked="${a===ne[n.k]}" data-k="${n.k}" data-v="${yi(JSON.stringify(a))}">${c?String(c).startsWith("<svg")?c:`<i style="background:${c}"></i>`:""}<span>${yi(o)}</span></button>`).join("")}</div>${r?`<p class="hint">${yi(r)}</p>`:""}</fieldset>`};function Os(n=!1){let e=Lo(),t=e.length;Fn=Math.min(Fn,t);let i=[...e.map(a=>a.tab),"T\xF3m t\u1EAFt"],s={top:ai.scrollTop,strips:{}};ai.querySelectorAll(".cards[data-g]").forEach(a=>{s.strips[a.dataset.g]=a.scrollLeft}),Mi.innerHTML=i.map((a,o)=>`<button type="button" role="tab" id="tab-${o}" aria-selected="${o===Fn}" aria-controls="cfg" tabindex="${o===Fn?0:-1}" data-step="${o}">${o<t?`<span>${String(o+1).padStart(2,"0")}</span>`:""}${a}</button>`).join(""),ai.setAttribute("aria-labelledby",`tab-${Fn}`),Zd();let r=n?" fade":"";if(Fn<t){let a=e[Fn];ai.innerHTML=`<section class="sec${r}"><h2 class="sec-h"><span>${String(Fn+1).padStart(2,"0")}</span>${Vm(a)}</h2>
      ${a.groups.filter(o=>o.show(ne)).map(vM).join("")}
      ${a.id==="finish"?`<div class="row2"><label class="fld"><span>Size tay</span><select data-k="size">${bM.map(o=>`<option value="${o}"${o===ne.size?" selected":""}>${o?`Size ${o}`:"Ch\u01B0a bi\u1EBFt \xB7 T Gold \u0111o gi\xFAp"}</option>`).join("")}</select></label>
        <label class="fld"><span>Kh\u1EAFc ch\u1EEF l\xF2ng nh\u1EABn</span><input data-k="engrave" maxlength="20" placeholder="T\u1ED1i \u0111a 20 k\xFD t\u1EF1" value="${yi(ne.engrave)}"></label></div>
        <fieldset class="grp"><legend><span>Ki\u1EC3u ch\u1EEF kh\u1EAFc</span><b>${ne.engraveFont==="script"?"Ch\u1EEF vi\u1EBFt tay":"Ch\u1EEF in"}</b></legend><div class="chips" data-g="engraveFont" role="radiogroup" aria-label="Ki\u1EC3u ch\u1EEF kh\u1EAFc">${[["serif","Ch\u1EEF in"],["script","Ch\u1EEF vi\u1EBFt tay"]].map(([o,c])=>`<button type="button" role="radio" aria-checked="${o===ne.engraveFont}" data-k="engraveFont" data-v="${yi(JSON.stringify(o))}"><span>${c}</span></button>`).join("")}</div>
        <div class="see" style="margin-top:12px"><button type="button" class="btn-l" data-see-engrave${ne.engrave?"":" disabled"}>Xem ch\u1EEF kh\u1EAFc</button></div><p class="hint">Ch\u1EEF kh\u1EAFc hi\u1EC7n \u1EDF \u0111\xE1y l\xF2ng nh\u1EABn tr\xEAn h\xECnh 3D. B\u1EA5m \u201CXem ch\u1EEF kh\u1EAFc\u201D \u0111\u1EC3 nh\xECn v\xE0o l\xF2ng nh\u1EABn.</p></fieldset>`:""}
      <div class="next"><button type="button" class="btn-next" data-step="${Fn+1}">${Fn+1<t?`Ti\u1EBFp: ${Vm(e[Fn+1])}`:"Xem thi\u1EBFt k\u1EBF c\u1EE7a b\u1EA1n"} <span aria-hidden="true">\u2192</span></button></div></section>`}else ai.innerHTML=`<section class="sec sum${r}" aria-live="polite"><h2 class="sec-h"><span>\u2726</span>Thi\u1EBFt k\u1EBF c\u1EE7a b\u1EA1n</h2><ul>${qm().map(([a,o])=>`<li><span>${a}</span><b>${yi(o)}</b></li>`).join("")}</ul>
      <p class="note"><b>H\xECnh 3D m\xF4 ph\u1ECFng.</b> ${Si?"B\u1EA3n 3D n\xE0y d\u1EF1ng theo \u1EA3nh s\u1EA3n ph\u1EA9m n\xEAn k\xEDch th\u01B0\u1EDBc ch\u1EC9 l\xE0 t\u01B0\u01A1ng \u0111\u1ED1i. ":""}S\u1ED1 vi\xEAn v\xE0 c\u1EE1 \u0111\xE1 qu\xFD l\xE0 theo h\xECnh 3D; khi ch\u1EBF t\xE1c, x\u01B0\u1EDFng T Gold c\xE2n ch\u1EC9nh l\u1EA1i theo size tay c\u1EE7a b\u1EA1n. M\xE0u v\xE0ng v\xE0 \u0111\u1ED9 l\u1EA5p l\xE1nh c\u1EE7a \u0111\xE1 qu\xFD c\xF3 th\u1EC3 kh\xE1c ch\xFAt \xEDt so v\u1EDBi s\u1EA3n ph\u1EA9m th\u1EADt. Size tay v\xE0 tu\u1ED5i v\xE0ng \u0111\u01B0\u1EE3c ghi nh\u1EADn \u0111\u1EC3 T Gold t\u01B0 v\u1EA5n, kh\xF4ng l\xE0m thay \u0111\u1ED5i h\xECnh 3D.</p>
      ${xM(qm())}
      <button type="button" class="btn-l" data-reset>${Si?"V\u1EC1 m\u1EABu g\u1ED1c":"V\u1EC1 thi\u1EBFt k\u1EBF m\u1EB7c \u0111\u1ECBnh"}</button></section>`;n?ai.scrollTop=0:(ai.scrollTop=s.top,ai.querySelectorAll(".cards[data-g]").forEach(a=>{s.strips[a.dataset.g]!=null&&(a.scrollLeft=s.strips[a.dataset.g])})),yM()}function Zd(){Mi.classList.toggle("end",Mi.scrollLeft+Mi.clientWidth>=Mi.scrollWidth-4)}Mi.addEventListener("scroll",Zd,{passive:!0});addEventListener("resize",Zd);function nh(n,e=!1){Fn=Math.max(0,Math.min(Lo().length,n)),Os(!0);let t=Mi.querySelector('[aria-selected="true"]');Mi.scrollTo({left:t.offsetLeft-(Mi.clientWidth-t.offsetWidth)/2,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"}),e&&t.focus({preventScroll:!0})}var Vd="";function yM(){let n=Ma("#stamp");n.textContent=ne.karat,Ma("#spec-metal").textContent=ne.twoTone!=="none"?`${oi[ne.metal][0]} + ${oi[ne.metal2][0]}`:oi[ne.metal][0],Ma("#spec-stone").textContent=ri(ne)?`M\u1EB7t ch\u1EEF \u201C${ne.faceLetter}\u201D \xB7 b\u1EA3n ${hn(ne.faceW)} mm`:Oi(ne)?`Vi\xEAn ch\u1EE7 ${jn[ne.shape].vi.toLowerCase()} ${eh(ne)}`:Rt(ne)?`Nh\u1EABn m\u1EB7t \u0111\xE1 \xB7 b\u1EA3n ${hn(ne.faceW)} mm`:`Nh\u1EABn b\u1EA3n ${hn(ne.bandW)} mm`;let e=`${ne.karat}|${ne.metal}|${ne.twoTone}|${ne.metal2}`;Vd&&e!==Vd&&(n.classList.remove("press"),n.offsetWidth,n.classList.add("press")),Vd=e}function Ns(n){for(let e of Lo())for(let t of e.groups)if(t.k===n&&t.show(ne)){let i=$d(t,ne).find(s=>s[0]===ne[n]);return i?i[1]:""}return""}var Fs=n=>n&&n.charAt(0).toLowerCase()+n.slice(1),Hm={rail:"m\xE9p g\u1EDD n\u1ED5i",band:"m\xE9p vi\u1EC1n tr\u01A1n b\u1EA3n r\u1ED9ng",milgrain:"m\xE9p vi\u1EC1n h\u1EA1t",pave:"m\xE9p ch\u1EA1y h\xE0ng pav\xE9",bevel:"m\xE9p v\xE1t \u0111\xEDnh pav\xE9",notch:"m\xE9p kh\xEDa r\u0103ng"},MM={milgrain:"h\xF4ng vi\u1EC1n h\u1EA1t",pave1:"h\xF4ng m\u1ED9t h\xE0ng \u0111\xE1",pave2:"h\xF4ng hai h\xE0ng \u0111\xE1",pave3:"h\xF4ng ba h\xE0ng \u0111\xE1"},Wm={flutes:"g\xE2n d\u1ECDc",pave:"m\u1ED9t h\xE0ng \u0111\xE1 ch\u1EA1y xu\u1ED1ng \u0111ai",milgrain:"hai \u0111\u01B0\u1EDDng vi\u1EC1n h\u1EA1t"};function Yl(n){var s;let e=th.userData.stats,t=Object.entries(e.sizes).filter(([r])=>r.startsWith(`${n}|`)).map(([r,a])=>{let[,o,c]=r.split("|");return{shape:o,d:Number(c),n:a}});if(!t.length)return"";let i={};for(let r of t)(i[s=r.shape]||(i[s]=[])).push(r);return Object.entries(i).map(([r,a])=>{let o=a.reduce((u,d)=>u+d.n,0),c=a.map(u=>u.d),l=Math.min(...c),h=Math.max(...c);return`${o} vi\xEAn ${{bag2:"baguette, d\xE0i",baguette:"baguette, d\xE0i",taperedBaguette:"baguette thon, d\xE0i",carre:"vu\xF4ng, c\u1EA1nh"}[r]||"tr\xF2n"} ${l===h?hn(l):`${hn(l)}\u2013${hn(h)}`} mm`}).join(" + ")}function qm(){let n=ne.twoTone!=="none",e={on:", \u0111\xEDnh \u0111\xE1 tr\xF2n tr\xEAn n\xE9t ch\u1EEF",on2:", n\xE9t d\xE0y \u0111\xEDnh hai h\xE0ng \u0111\xE1",bag:", \u0111\xEDnh baguette tr\xEAn n\xE9t ch\u1EEF",off:", ch\u1EEF v\xE0ng tr\u01A1n"},t=Rt(ne)?[["Ki\u1EC3u nh\u1EABn",as(ne)?`Nh\u1EABn m\u1EB7t \u0111\xE1 \xB7 \xF4m vi\xEAn ch\u1EE7, kh\xF4ng m\u1EB7t \xB7 b\u1EA3n vai ${hn(ne.faceW)} mm`:`Nh\u1EABn m\u1EB7t \u0111\xE1 \xB7 m\u1EB7t ${Fs(jm[ne.top])}, ${{flat:"ph\u1EB3ng",dome:"v\xF2m",bombe:"v\xF2m cao"}[ne.dome]} \xB7 b\u1EA3n m\u1EB7t ${hn(ne.faceW)} mm \xB7 ${Fs(Ns("height").split(",")[0])}`],ri(ne)?["Gi\u1EEFa m\u1EB7t nh\u1EABn",`Ch\u1EEF c\xE1i n\u1ED5i \u201C${ne.faceLetter}\u201D${e[ne.letterStone]}${ne.letterTurn==="on"?" \xB7 xoay d\u1ECDc theo v\xF2ng nh\u1EABn":""}${ne.facePave!=="on"?ne.faceField==="satin"?" \xB7 n\u1EC1n nh\xE1m m\u1EDD":" \xB7 n\u1EC1n b\xF3ng":""}`]:Jl(ne)?["Gi\u1EEFa m\u1EB7t nh\u1EABn","Kh\xF4ng vi\xEAn ch\u1EE7 \xB7 h\xE0ng \u0111\xE1 ch\u1EA1y li\u1EC1n qua m\u1EB7t"]:Zl(ne)?["Gi\u1EEFa m\u1EB7t nh\u1EABn","Kh\xF4ng vi\xEAn ch\u1EE7 \xB7 m\u1EB7t tr\u01A1n"]:["Vi\xEAn ch\u1EE7",[`${jn[ne.shape].vi} ${eh(ne)}`,xr[ne.gem][0],Fs(Wd[ne.setting]),["prong4","prong6"].includes(ne.setting)&&ne.prongTip==="claw"&&"\u0111\u1EA7u ch\u1EA5u m\xF3ng vu\u1ED1t",{low:as(ne)?"":"\xF4m s\xE1t m\u1EB7t nh\u1EABn",high:"nh\xF4 cao"}[ne.headH],ne.plinth==="on"?"c\xF3 b\u1EC7 n\xE2ng":""].filter(Boolean).join(" \xB7 ")],["M\u1EB7t nh\u1EABn",Us(ne)&&[!ri(ne)&&ne.frame!=="none"&&Km[ne.frame],Zl(ne)&&ne.plinth==="on"&&"c\xF3 b\u1EC7 n\xE2ng",Kd(ne)&&ne.corners==="on"&&"\u0111\xE1 g\xF3c",Kd(ne)&&ne.corners==="row"&&"h\xE0ng ba vi\xEAn hai \u0111\u1EA7u m\u1EB7t",Ql(ne)&&ne.faceBars==="on"&&"thanh baguette hai m\xE9p",ne.facePave==="on"&&"l\xE1t \u0111\xE1 k\xEDn m\u1EB7t",ne.faceLen==="tight"&&!(Ql(ne)&&ne.faceBars==="on")&&"m\u1EB7t \xF4m s\xE1t ph\u1EA7n gi\u1EEFa",ne.rim!=="none"&&Co(ne)&&(ne.rim==="rail"?"vi\u1EC1n g\u1EDD n\u1ED5i":"vi\u1EC1n h\u1EA1t")].filter(Boolean).join(" \xB7 ")],[Jl(ne)?"H\xE0ng \u0111\xE1":"Hai vai",[ya(ne)?`Ch\u1EEF c\xE1i \u201C${ne.letter}\u201D${ne.letter2&&ne.letter2!==ne.letter?` (vai ph\u1EA3i) v\xE0 \u201C${ne.letter2}\u201D (vai tr\xE1i)`:""}${e[ne.letterStone]}`:qd[ne.shoulder],["tiers","ladderT","chevron"].includes(ne.shoulder)&&ne.tierRows===2&&"hai h\xE0ng \u0111\xE1 m\u1ED7i b\u1EADc",Ns("shoulderLen")&&`d\xE0i t\u1EDBi ${Fs(Ns("shoulderLen"))}`,ne.edge!=="none"&&Hm[ne.edge],MM[ne.flank]].filter(Boolean).join(" \xB7 ")],["\u0110ai",`${Ns("shank")} \xB7 b\u1EA3n d\u01B0\u1EDBi ${hn(ne.bottomW)} mm${Wm[ne.shankDeco]?` \xB7 ${Wm[ne.shankDeco]}`:""}`],["L\xF2ng nh\u1EABn",Xd[ne.lattice]]]:[["Ki\u1EC3u nh\u1EABn",`Nh\u1EABn b\u1EA3n ${hn(ne.bandW)} mm \xB7 ${Fs(Ns("bandProfile"))}`],["H\xE0ng \u0111\xE1",[jd[ne.bandStones],Ns("cover")&&Fs(Ns("cover")),ne.edge!=="none"&&Hm[ne.edge]].filter(Boolean).join(" \xB7 ")]];return Si&&t.unshift(["M\u1EABu g\u1ED1c",ih[Si].ten]),t.push(["\u0110\xE1 t\u1EA5m",Zm(ne)&&Yl("accent")&&`${xr[ne.accentGem][0]} \xB7 ${Yl("accent")}`],[Po(ne)&&ne.bandStones==="stations"?"\u0110\xE1 \u0111i\u1EC3m":"\u0110\xE1 baguette & \u0111\xE1 \u0111i\u1EC3m",Jm(ne)&&Yl("side")&&`${xr[ne.sideGem][0]} \xB7 ${Yl("side")}`],["V\xE0ng",`${oi[ne.metal][0]} ${ne.karat}${n?` \xB7 ${{head:"\u1ED5 vi\xEAn ch\u1EE7",letter:"ch\u1EEF c\xE1i",settings:"to\xE0n b\u1ED9 \u1ED5 \u0111\xE1",shoulder:"g\xE2n ch\u1EEF V"}[ne.twoTone]} ${Fs(oi[ne.metal2][0])}`:""} \xB7 ${Fs(Ns("finish"))}`],["Size tay",ne.size?`Size ${ne.size}`:"Ch\u01B0a bi\u1EBFt"],["Kh\u1EAFc ch\u1EEF",ne.engrave?`\u201C${ne.engrave}\u201D \xB7 ${ne.engraveFont==="script"?"ch\u1EEF vi\u1EBFt tay":"ch\u1EEF in"}`:"\u2014"]),t.filter(([,i])=>i)}var eg=Ma("#viewer"),SM=matchMedia("(pointer: coarse)").matches,TM={gemStudio:{spots:28},bloom:{strength:.1,radius:0,threshold:4},bloomKernel:3,gemStudioRest:{spots:28},sideGlint:{strength:.048,kernel:2,thrK:1},paveGlint:{maxD:2,thrK:1.5,kernel:2,strength:.028}},En=pm(eg,{look:{envSoft:.004,...TM},object:th,metal:ne.metal,metal2:ne.metal2,gem:ne.gem,accentGem:ne.accentGem,sideGem:ne.sideGem,view:[.55,.72,1],start:1.18,touchAll:!0,holdPan:!0,labels:{hint:SM?"Vu\u1ED1t \u0111\u1EC3 xoay \xB7 ch\u1EE5m \u0111\u1EC3 ph\xF3ng to \xB7 gi\u1EEF y\xEAn 3 gi\xE2y \u0111\u1EC3 d\u1ECBch khung":"K\xE9o \u0111\u1EC3 xoay \xB7 cu\u1ED9n \u0111\u1EC3 ph\xF3ng to \xB7 gi\u1EEF y\xEAn 3 gi\xE2y \u0111\u1EC3 d\u1ECBch khung",pan:"K\xE9o \u0111\u1EC3 d\u1ECBch khung"}});window.tg3d=En;var wM=["metal","metal2","gem","accentGem","sideGem","karat","size"],Hd=!1,sh=()=>{th=Kl(ne),En.setObject(th)};function Yd(n){wM.includes(n)||Hd||(Hd=!0,requestAnimationFrame(()=>{Hd=!1,sh(),Fn>=Lo().length&&Os()})),n==="metal"&&En.setMetal(ne.metal),n==="metal2"&&En.setMetal2(ne.metal2),n==="gem"&&En.setGem(ne.gem,"center"),n==="accentGem"&&En.setGem(ne.accentGem,"accent"),n==="sideGem"&&En.setGem(ne.sideGem,"side")}ai.addEventListener("click",n=>{let e=n.target.closest("button[data-k]");if(e){let i=e.dataset.k;ne[i]=JSON.parse(e.dataset.v);let s=ne.metal2;ne=Io(mr(ne)),Sa(ne),Yd(i),ne.metal2!==s&&Yd("metal2"),Os();return}if(n.target.closest("[data-see-engrave]")){AM();return}let t=n.target.closest("[data-step]");if(t){nh(Number(t.dataset.step));return}n.target.closest("[data-reset]")&&(ne=Io(mr(Jd())),Sa(ne),sh(),En.setMetal(ne.metal),En.setMetal2(ne.metal2),En.setGem(ne.gem,"center"),En.setGem(ne.accentGem,"accent"),En.setGem(ne.sideGem,"side"),Os())});Mi.addEventListener("click",n=>{let e=n.target.closest("[data-step]");e&&nh(Number(e.dataset.step))});Mi.addEventListener("keydown",n=>{let e=Lo().length+1,t={ArrowRight:1,ArrowLeft:-1}[n.key];t&&(n.preventDefault(),nh((Fn+t+e)%e,!0)),(n.key==="Home"||n.key==="End")&&(n.preventDefault(),nh(n.key==="Home"?0:e-1,!0))});ai.addEventListener("change",n=>{let e=n.target,t=e.dataset.k;t==="size"?(ne.size=e.value,Sa(ne),Os()):e.tagName==="SELECT"&&t in ne&&(ne[t]=e.value,ne=Io(mr(ne)),Sa(ne),Yd(t),Os())});var Xm=0;ai.addEventListener("input",n=>{let e=n.target;if(e.dataset.k==="engrave"){ne.engrave=e.value.slice(0,20),Sa(ne);let t=ai.querySelector("[data-see-engrave]");t&&(t.disabled=!ne.engrave),clearTimeout(Xm),Xm=setTimeout(sh,280)}});var AM=()=>{En.setPlay(!1),En.lookAt([0,-8.6,0],.62,[0,.62,1])};for(let n of['600 112px "Cormorant Garamond"','120px "Pinyon Script"'])document.fonts?.load(n).then(()=>{ne.engrave&&sh()}).catch(()=>{});eg.addEventListener("tg3d:metal",n=>{ne.metal=n.detail;let e=ne.metal2;Io(ne),ne.metal2!==e&&En.setMetal2(ne.metal2),Sa(ne),Os()});Os();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
