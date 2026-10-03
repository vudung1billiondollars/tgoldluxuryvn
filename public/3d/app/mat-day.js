var gs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},bs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},sp=0,ru=1,rp=2;var co=1,ap=2,Kr=3,Un=0,sn=1,_n=2,Xn=0,Yr=1,lo=2,au=3,ou=4,qs=5;var jn=100,op=101,cp=102,lp=103,hp=104,Xs=200,xn=201,up=202,dp=203,cu=204,lu=205,fp=206,pp=207,mp=208,gp=209,bp=210,_p=211,xp=212,vp=213,yp=214,hc=0,uc=1,dc=2,wr=3,fc=4,pc=5,mc=6,gc=7,hu=0,Mp=1,Sp=2,On=0,uu=1,du=2,fu=3,pu=4,mu=5,gu=6,bu=7,Hh="attached",Tp="detached",_u=300,_s=301,js=302,zc=303,Gc=304,ho=306,hs=1e3,Wn=1001,Ar=1002,Gt=1003,Vc=1004;var Ks=1005;var Vt=1006,Jr=1007;var Mn=1008;var Sn=1009,xu=1010,vu=1011,$r=1012,Hc=1013,ri=1014,Bn=1015,Wt=1016,Wc=1017,qc=1018,Zr=1020,yu=35902,Mu=35899,Su=1021,Tu=1022,kn=1023,pi=1026,xs=1027,Xc=1028,jc=1029,vs=1030,Kc=1031;var Yc=1033,uo=33776,fo=33777,po=33778,mo=33779,Jc=35840,$c=35841,Zc=35842,Qc=35843,el=36196,tl=37492,nl=37496,il=37488,sl=37489,go=37490,rl=37491,al=37808,ol=37809,cl=37810,ll=37811,hl=37812,ul=37813,dl=37814,fl=37815,pl=37816,ml=37817,gl=37818,bl=37819,_l=37820,xl=37821,vl=36492,yl=36494,Ml=36495,Sl=36283,Tl=36284,bo=36285,wl=36286;var Us=2300,Os=2301,oc=2302,Wh=2303,qh=2400,Xh=2401,jh=2402,wp=2500;var wu=0,_o=1,Qr=2,Ap=3200;var Al=0,Ep=1,Xi="",zt="srgb",gn="srgb-linear",Ia="linear",vt="srgb";var cc=7680;var Rp=519,Cp=512,Pp=513,Ip=514,El=515,Lp=516,Dp=517,Rl=518,Np=519,Au=35044;var Eu="300 es",ii=2e3,Er=2001;function Mg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Sg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Rr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Fp(){let i=Rr("canvas");return i.style.display="block",i}var mf={},Cr=null;function La(...i){let e="THREE."+i.shift();Cr?Cr("log",e,...i):console.log(e,...i)}function Up(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Xe(...i){i=Up(i);let e="THREE."+i.shift();if(Cr)Cr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ze(...i){i=Up(i);let e="THREE."+i.shift();if(Cr)Cr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Fs(...i){let e=i.join(" ");e in mf||(mf[e]=!0,Xe(...i))}function Op(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Bp={[hc]:uc,[dc]:mc,[fc]:gc,[wr]:pc,[uc]:hc,[mc]:dc,[gc]:fc,[pc]:wr},si=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gf=1234567,Ea=Math.PI/180,Bs=180/Math.PI;function qn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function st(i,e,t){return Math.max(e,Math.min(t,i))}function Ru(i,e){return(i%e+e)%e}function Tg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function wg(i,e,t){return i!==e?(t-i)/(e-i):0}function Ra(i,e,t){return(1-t)*i+t*e}function Ag(i,e,t,n){return Ra(i,e,1-Math.exp(-t*n))}function Eg(i,e=1){return e-Math.abs(Ru(i,e*2)-e)}function Rg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Cg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Pg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ig(i,e){return i+Math.random()*(e-i)}function Lg(i){return i*(.5-Math.random())}function Dg(i){i!==void 0&&(gf=i);let e=gf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ng(i){return i*Ea}function Fg(i){return i*Bs}function Ug(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Og(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Bg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function kg(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),u=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*d,c*u,o*l);break;case"YZY":i.set(c*u,o*h,c*d,o*l);break;case"ZXZ":i.set(c*d,c*u,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*f,o*l);break;case"YXY":i.set(c*f,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*f,o*h,o*l);break;default:Xe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ni(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function yt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var xo={DEG2RAD:Ea,RAD2DEG:Bs,generateUUID:qn,clamp:st,euclideanModulo:Ru,mapLinear:Tg,inverseLerp:wg,lerp:Ra,damp:Ag,pingpong:Eg,smoothstep:Rg,smootherstep:Cg,randInt:Pg,randFloat:Ig,randFloatSpread:Lg,seededRandom:Dg,degToRad:Ng,radToDeg:Fg,isPowerOfTwo:Ug,ceilPowerOfTwo:Og,floorPowerOfTwo:Bg,setQuaternionFromProperEuler:kg,normalize:yt,denormalize:ni},Nu=class Nu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Nu.prototype.isVector2=!0;var oe=Nu,Ht=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],g=r[a+2],b=r[a+3];if(d!==b||c!==u||l!==f||h!==g){let m=c*u+l*f+h*g+d*b;m<0&&(u=-u,f=-f,g=-g,b=-b,m=-m);let p=1-o;if(m<.9995){let v=Math.acos(m),S=Math.sin(v);p=Math.sin(p*v)/S,o=Math.sin(o*v)/S,c=c*p+u*o,l=l*p+f*o,h=h*p+g*o,d=d*p+b*o}else{c=c*p+u*o,l=l*p+f*o,h=h*p+g*o,d=d*p+b*o;let v=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=v,l*=v,h*=v,d*=v}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*d+c*f-l*u,e[t+1]=c*g+h*u+l*d-o*f,e[t+2]=l*g+h*f+o*u-c*d,e[t+3]=h*g-o*d-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),d=o(r/2),u=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:Xe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Fu=class Fu{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return gh.copy(this).projectOnVector(e),this.sub(gh)}reflect(e){return this.sub(gh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Fu.prototype.isVector3=!0;var C=Fu,gh=new C,bf=new Ht,Uu=class Uu{constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],b=s[0],m=s[3],p=s[6],v=s[1],S=s[4],_=s[7],y=s[2],T=s[5],E=s[8];return r[0]=a*b+o*v+c*y,r[3]=a*m+o*S+c*T,r[6]=a*p+o*_+c*E,r[1]=l*b+h*v+d*y,r[4]=l*m+h*S+d*T,r[7]=l*p+h*_+d*E,r[2]=u*b+f*v+g*y,r[5]=u*m+f*S+g*T,r[8]=u*p+f*_+g*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,u=o*c-h*r,f=l*r-a*c,g=t*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/g;return e[0]=d*b,e[1]=(s*l-h*n)*b,e[2]=(o*n-s*a)*b,e[3]=u*b,e[4]=(h*t-s*c)*b,e[5]=(s*r-o*t)*b,e[6]=f*b,e[7]=(n*c-l*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Fs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(bh.makeScale(e,t)),this}rotate(e){return Fs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(bh.makeRotation(-e)),this}translate(e,t){return Fs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(bh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Uu.prototype.isMatrix3=!0;var nt=Uu,bh=new nt,_f=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xf=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zg(){let i={enabled:!0,workingColorSpace:gn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===vt&&(s.r=Ni(s.r),s.g=Ni(s.g),s.b=Ni(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===vt&&(s.r=Tr(s.r),s.g=Tr(s.g),s.b=Tr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Xi?Ia:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Fs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Fs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[gn]:{primaries:e,whitePoint:n,transfer:Ia,toXYZ:_f,fromXYZ:xf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:e,whitePoint:n,transfer:vt,toXYZ:_f,fromXYZ:xf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}}),i}var ot=zg();function Ni(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Tr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var hr,bc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{hr===void 0&&(hr=Rr("canvas")),hr.width=e.width,hr.height=e.height;let s=hr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=hr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Rr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ni(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ni(t[n]/255)*255):t[n]=Ni(t[n]);return{data:t,width:e.width,height:e.height}}else return Xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Gg=0,Pr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Gg++}),this.uuid=qn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(_h(s[a].image)):r.push(_h(s[a]))}else r=_h(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function _h(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?bc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Xe("Texture: Unable to serialize Texture."),{})}var Vg=0,xh=new C,Jt=class i extends si{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Wn,s=Wn,r=Vt,a=Mn,o=kn,c=Sn,l=i.DEFAULT_ANISOTROPY,h=Xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vg++}),this.uuid=qn(),this.name="",this.source=new Pr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(xh).x}get height(){return this.source.getSize(xh).y}get depth(){return this.source.getSize(xh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Xe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Xe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_u)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hs:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case Ar:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hs:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case Ar:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=_u;Jt.DEFAULT_ANISOTROPY=1;var Ou=class Ou{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],b=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+b)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(l+1)/2,_=(f+1)/2,y=(p+1)/2,T=(h+u)/4,E=(d+b)/4,x=(g+m)/4;return S>_&&S>y?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=T/n,r=E/n):_>y?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=T/s,r=x/s):y<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(y),n=E/r,s=x/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(d-b)*(d-b)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-b)/v,this.z=(u-h)/v,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ou.prototype.isVector4=!0;var _t=Ou,_c=class extends si{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Jt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Vt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Pr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bt=class extends _c{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Da=class extends Jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var xc=class extends Jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var kc=class kc{constructor(e,t,n,s,r,a,o,c,l,h,d,u,f,g,b,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,d,u,f,g,b,m)}set(e,t,n,s,r,a,o,c,l,h,d,u,f,g,b,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=b,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/ur.setFromMatrixColumn(e,0).length(),r=1/ur.setFromMatrixColumn(e,1).length(),a=1/ur.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,f=a*d,g=o*h,b=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=u-b*l,t[9]=-o*c,t[2]=b-u*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){let u=c*h,f=c*d,g=l*h,b=l*d;t[0]=u+b*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=b+u*o,t[10]=a*c}else if(e.order==="ZXY"){let u=c*h,f=c*d,g=l*h,b=l*d;t[0]=u-b*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=b-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let u=a*h,f=a*d,g=o*h,b=o*d;t[0]=c*h,t[4]=g*l-f,t[8]=u*l+b,t[1]=c*d,t[5]=b*l+u,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let u=a*c,f=a*l,g=o*c,b=o*l;t[0]=c*h,t[4]=b-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*d+g,t[10]=u-b*d}else if(e.order==="XZY"){let u=a*c,f=a*l,g=o*c,b=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+b,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=b*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hg,e,Wg)}lookAt(e,t,n){let s=this.elements;return Ln.subVectors(e,t),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),is.crossVectors(n,Ln),is.lengthSq()===0&&(Math.abs(n.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),is.crossVectors(n,Ln)),is.normalize(),No.crossVectors(Ln,is),s[0]=is.x,s[4]=No.x,s[8]=Ln.x,s[1]=is.y,s[5]=No.y,s[9]=Ln.y,s[2]=is.z,s[6]=No.z,s[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],b=n[6],m=n[10],p=n[14],v=n[3],S=n[7],_=n[11],y=n[15],T=s[0],E=s[4],x=s[8],A=s[12],P=s[1],I=s[5],N=s[9],U=s[13],L=s[2],B=s[6],Y=s[10],W=s[14],j=s[3],G=s[7],V=s[11],J=s[15];return r[0]=a*T+o*P+c*L+l*j,r[4]=a*E+o*I+c*B+l*G,r[8]=a*x+o*N+c*Y+l*V,r[12]=a*A+o*U+c*W+l*J,r[1]=h*T+d*P+u*L+f*j,r[5]=h*E+d*I+u*B+f*G,r[9]=h*x+d*N+u*Y+f*V,r[13]=h*A+d*U+u*W+f*J,r[2]=g*T+b*P+m*L+p*j,r[6]=g*E+b*I+m*B+p*G,r[10]=g*x+b*N+m*Y+p*V,r[14]=g*A+b*U+m*W+p*J,r[3]=v*T+S*P+_*L+y*j,r[7]=v*E+S*I+_*B+y*G,r[11]=v*x+S*N+_*Y+y*V,r[15]=v*A+S*U+_*W+y*J,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],b=e[7],m=e[11],p=e[15],v=c*f-l*u,S=o*f-l*d,_=o*u-c*d,y=a*f-l*h,T=a*u-c*h,E=a*d-o*h;return t*(b*v-m*S+p*_)-n*(g*v-m*y+p*T)+s*(g*S-b*y+p*E)-r*(g*_-b*T+m*E)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],b=e[13],m=e[14],p=e[15],v=t*o-n*a,S=t*c-s*a,_=t*l-r*a,y=n*c-s*o,T=n*l-r*o,E=s*l-r*c,x=h*b-d*g,A=h*m-u*g,P=h*p-f*g,I=d*m-u*b,N=d*p-f*b,U=u*p-f*m,L=v*U-S*N+_*I+y*P-T*A+E*x;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/L;return e[0]=(o*U-c*N+l*I)*B,e[1]=(s*N-n*U-r*I)*B,e[2]=(b*E-m*T+p*y)*B,e[3]=(u*T-d*E-f*y)*B,e[4]=(c*P-a*U-l*A)*B,e[5]=(t*U-s*P+r*A)*B,e[6]=(m*_-g*E-p*S)*B,e[7]=(h*E-u*_+f*S)*B,e[8]=(a*N-o*P+l*x)*B,e[9]=(n*P-t*N-r*x)*B,e[10]=(g*T-b*_+p*v)*B,e[11]=(d*_-h*T-f*v)*B,e[12]=(o*A-a*I-c*x)*B,e[13]=(t*I-n*A+s*x)*B,e[14]=(b*S-g*y-m*v)*B,e[15]=(h*y-d*S+u*v)*B,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,d=o+o,u=r*l,f=r*h,g=r*d,b=a*h,m=a*d,p=o*d,v=c*l,S=c*h,_=c*d,y=n.x,T=n.y,E=n.z;return s[0]=(1-(b+p))*y,s[1]=(f+_)*y,s[2]=(g-S)*y,s[3]=0,s[4]=(f-_)*T,s[5]=(1-(u+p))*T,s[6]=(m+v)*T,s[7]=0,s[8]=(g+S)*E,s[9]=(m-v)*E,s[10]=(1-(u+b))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=ur.set(s[0],s[1],s[2]).length(),o=ur.set(s[4],s[5],s[6]).length(),c=ur.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Qn.copy(this);let l=1/a,h=1/o,d=1/c;return Qn.elements[0]*=l,Qn.elements[1]*=l,Qn.elements[2]*=l,Qn.elements[4]*=h,Qn.elements[5]*=h,Qn.elements[6]*=h,Qn.elements[8]*=d,Qn.elements[9]*=d,Qn.elements[10]*=d,t.setFromRotationMatrix(Qn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=ii,c=!1){let l=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),g,b;if(c)g=r/(a-r),b=a*r/(a-r);else if(o===ii)g=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===Er)g=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=b,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=ii,c=!1){let l=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s),g,b;if(c)g=1/(a-r),b=a/(a-r);else if(o===ii)g=-2/(a-r),b=-(a+r)/(a-r);else if(o===Er)g=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=b,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};kc.prototype.isMatrix4=!0;var et=kc,ur=new C,Qn=new et,Hg=new C(0,0,0),Wg=new C(1,1,1),is=new C,No=new C,Ln=new C,vf=new et,yf=new Ht,Fi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-st(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(st(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-st(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(st(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return vf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yf.setFromEuler(this),this.setFromQuaternion(yf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Fi.DEFAULT_ORDER="XYZ";var Na=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},qg=0,Mf=new C,dr=new Ht,Ri=new et,Fo=new C,_a=new C,Xg=new C,jg=new Ht,Sf=new C(1,0,0),Tf=new C(0,1,0),wf=new C(0,0,1),Af={type:"added"},Kg={type:"removed"},fr={type:"childadded",child:null},vh={type:"childremoved",child:null},Ut=class i extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qg++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new C,t=new Fi,n=new Ht,s=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new et},normalMatrix:{value:new nt}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Na,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return dr.setFromAxisAngle(e,t),this.quaternion.multiply(dr),this}rotateOnWorldAxis(e,t){return dr.setFromAxisAngle(e,t),this.quaternion.premultiply(dr),this}rotateX(e){return this.rotateOnAxis(Sf,e)}rotateY(e){return this.rotateOnAxis(Tf,e)}rotateZ(e){return this.rotateOnAxis(wf,e)}translateOnAxis(e,t){return Mf.copy(e).applyQuaternion(this.quaternion),this.position.add(Mf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sf,e)}translateY(e){return this.translateOnAxis(Tf,e)}translateZ(e){return this.translateOnAxis(wf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fo.copy(e):Fo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),_a.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(_a,Fo,this.up):Ri.lookAt(Fo,_a,this.up),this.quaternion.setFromRotationMatrix(Ri),s&&(Ri.extractRotation(s.matrixWorld),dr.setFromRotationMatrix(Ri),this.quaternion.premultiply(dr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Af),fr.child=e,this.dispatchEvent(fr),fr.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kg),vh.child=e,this.dispatchEvent(vh),vh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Af),fr.child=e,this.dispatchEvent(fr),fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_a,e,Xg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_a,jg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ut.DEFAULT_UP=new C(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var hn=class extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}},Yg={type:"move"},Ir=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let b of e.hand.values()){let m=t.getJointPose(b,n),p=this._getHandJoint(l,b);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Yg)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new hn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},kp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ss={h:0,s:0,l:0},Uo={h:0,s:0,l:0};function yh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var We=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ot.workingColorSpace){if(e=Ru(e,1),t=st(t,0,1),n=st(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=yh(a,r,e+1/3),this.g=yh(a,r,e),this.b=yh(a,r,e-1/3)}return ot.colorSpaceToWorking(this,s),this}setStyle(e,t=zt){function n(r){r!==void 0&&parseFloat(r)<1&&Xe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Xe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Xe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){let n=kp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Xe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}copyLinearToSRGB(e){return this.r=Tr(e.r),this.g=Tr(e.g),this.b=Tr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return ot.workingToColorSpace(ln.copy(this),e),Math.round(st(ln.r*255,0,255))*65536+Math.round(st(ln.g*255,0,255))*256+Math.round(st(ln.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace(ln.copy(this),t);let n=ln.r,s=ln.g,r=ln.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=zt){ot.workingToColorSpace(ln.copy(this),e);let t=ln.r,n=ln.g,s=ln.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ss),this.setHSL(ss.h+e,ss.s+t,ss.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ss),e.getHSL(Uo);let n=Ra(ss.h,Uo.h,t),s=Ra(ss.s,Uo.s,t),r=Ra(ss.l,Uo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ln=new We;We.NAMES=kp;var Lr=class extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fi,this.environmentIntensity=1,this.environmentRotation=new Fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ei=new C,Ci=new C,Mh=new C,Pi=new C,pr=new C,mr=new C,Ef=new C,Sh=new C,Th=new C,wh=new C,Ah=new _t,Eh=new _t,Rh=new _t,ls=class i{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ei.subVectors(e,t),s.cross(ei);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ei.subVectors(s,t),Ci.subVectors(n,t),Mh.subVectors(e,t);let a=ei.dot(ei),o=ei.dot(Ci),c=ei.dot(Mh),l=Ci.dot(Ci),h=Ci.dot(Mh),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-o*h)*u,g=(a*h-o*c)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Pi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Pi.x),c.addScaledVector(a,Pi.y),c.addScaledVector(o,Pi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Ah.setScalar(0),Eh.setScalar(0),Rh.setScalar(0),Ah.fromBufferAttribute(e,t),Eh.fromBufferAttribute(e,n),Rh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ah,r.x),a.addScaledVector(Eh,r.y),a.addScaledVector(Rh,r.z),a}static isFrontFacing(e,t,n,s){return ei.subVectors(n,t),Ci.subVectors(e,t),ei.cross(Ci).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),ei.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;pr.subVectors(s,n),mr.subVectors(r,n),Sh.subVectors(e,n);let c=pr.dot(Sh),l=mr.dot(Sh);if(c<=0&&l<=0)return t.copy(n);Th.subVectors(e,s);let h=pr.dot(Th),d=mr.dot(Th);if(h>=0&&d<=h)return t.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(pr,a);wh.subVectors(e,r);let f=pr.dot(wh),g=mr.dot(wh);if(g>=0&&f<=g)return t.copy(r);let b=f*l-c*g;if(b<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(mr,o);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Ef.subVectors(r,s),o=(d-h)/(d-h+(f-g)),t.copy(s).addScaledVector(Ef,o);let p=1/(m+b+u);return a=b*p,o=u*p,t.copy(n).addScaledVector(pr,a).addScaledVector(mr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},bn=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ti):ti.fromBufferAttribute(r,a),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Oo.copy(n.boundingBox)),Oo.applyMatrix4(e.matrixWorld),this.union(Oo)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xa),Bo.subVectors(this.max,xa),gr.subVectors(e.a,xa),br.subVectors(e.b,xa),_r.subVectors(e.c,xa),rs.subVectors(br,gr),as.subVectors(_r,br),Ps.subVectors(gr,_r);let t=[0,-rs.z,rs.y,0,-as.z,as.y,0,-Ps.z,Ps.y,rs.z,0,-rs.x,as.z,0,-as.x,Ps.z,0,-Ps.x,-rs.y,rs.x,0,-as.y,as.x,0,-Ps.y,Ps.x,0];return!Ch(t,gr,br,_r,Bo)||(t=[1,0,0,0,1,0,0,0,1],!Ch(t,gr,br,_r,Bo))?!1:(ko.crossVectors(rs,as),t=[ko.x,ko.y,ko.z],Ch(t,gr,br,_r,Bo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ii=[new C,new C,new C,new C,new C,new C,new C,new C],ti=new C,Oo=new bn,gr=new C,br=new C,_r=new C,rs=new C,as=new C,Ps=new C,xa=new C,Bo=new C,ko=new C,Is=new C;function Ch(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Is.fromArray(i,r);let o=s.x*Math.abs(Is.x)+s.y*Math.abs(Is.y)+s.z*Math.abs(Is.z),c=e.dot(Is),l=t.dot(Is),h=n.dot(Is);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var jt=new C,zo=new oe,Jg=0,Ct=class extends si{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Au,this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)zo.fromBufferAttribute(this,t),zo.applyMatrix3(e),this.setXY(t,zo.x,zo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ni(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array),r=yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Fa=class extends Ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ua=class extends Ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Mt=class extends Ct{constructor(e,t,n){super(new Float32Array(e),t,n)}},$g=new bn,va=new C,Ph=new C,un=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):$g.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;va.subVectors(e,this.center);let t=va.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(va,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ph.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(va.copy(e.center).add(Ph)),this.expandByPoint(va.copy(e.center).sub(Ph))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Zg=0,Hn=new et,Ih=new Ut,xr=new C,Dn=new bn,ya=new bn,nn=new C,St=class i extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zg++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mg(e)?Ua:Fa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new nt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,t,n){return Hn.makeTranslation(e,t,n),this.applyMatrix4(Hn),this}scale(e,t,n){return Hn.makeScale(e,t,n),this.applyMatrix4(Hn),this}lookAt(e){return Ih.lookAt(e),Ih.updateMatrix(),this.applyMatrix4(Ih.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xr).negate(),this.translate(xr.x,xr.y,xr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Mt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Dn.setFromBufferAttribute(r),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let n=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ya.setFromBufferAttribute(o),this.morphTargetsRelative?(nn.addVectors(Dn.min,ya.min),Dn.expandByPoint(nn),nn.addVectors(Dn.max,ya.max),Dn.expandByPoint(nn)):(Dn.expandByPoint(ya.min),Dn.expandByPoint(ya.max))}Dn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)nn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(nn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)nn.fromBufferAttribute(o,l),c&&(xr.fromBufferAttribute(e,l),nn.add(xr)),s=Math.max(s,n.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ct(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let x=0;x<n.count;x++)o[x]=new C,c[x]=new C;let l=new C,h=new C,d=new C,u=new oe,f=new oe,g=new oe,b=new C,m=new C;function p(x,A,P){l.fromBufferAttribute(n,x),h.fromBufferAttribute(n,A),d.fromBufferAttribute(n,P),u.fromBufferAttribute(r,x),f.fromBufferAttribute(r,A),g.fromBufferAttribute(r,P),h.sub(l),d.sub(l),f.sub(u),g.sub(u);let I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(b.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(I),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),o[x].add(b),o[A].add(b),o[P].add(b),c[x].add(m),c[A].add(m),c[P].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let x=0,A=v.length;x<A;++x){let P=v[x],I=P.start,N=P.count;for(let U=I,L=I+N;U<L;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let S=new C,_=new C,y=new C,T=new C;function E(x){y.fromBufferAttribute(s,x),T.copy(y);let A=o[x];S.copy(A),S.sub(y.multiplyScalar(y.dot(A))).normalize(),_.crossVectors(T,A);let I=_.dot(c[x])<0?-1:1;a.setXYZW(x,S.x,S.y,S.z,I)}for(let x=0,A=v.length;x<A;++x){let P=v[x],I=P.start,N=P.count;for(let U=I,L=I+N;U<L;U+=3)E(e.getX(U+0)),E(e.getX(U+1)),E(e.getX(U+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ct(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new C,r=new C,a=new C,o=new C,c=new C,l=new C,h=new C,d=new C;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),b=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h),f=0,g=0;for(let b=0,m=c.length;b<m;b++){o.isInterleavedBufferAttribute?f=c[b]*o.data.stride+o.offset:f=c[b]*h;for(let p=0;p<h;p++)u[g++]=l[f++]}return new Ct(u,h,d)}if(this.index===null)return Xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=e(u,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Au,this.updateRanges=[],this.version=0,this.uuid=qn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},mn=new C,Nr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ni(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ni(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ni(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ni(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ni(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array),r=yt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){La("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ct(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){La("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Lh=new C,Qg=new C,e0=new nt,Nn=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Lh.subVectors(n,t).cross(Qg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Lh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||e0.getNormalMatrix(e),s=this.coplanarPoint(Lh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},t0=0,vn=class extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=qn(),this.name="",this.type="Material",this.blending=Yr,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cu,this.blendDst=lu,this.blendEquation=jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cc,this.stencilZFail=cc,this.stencilZPass=cc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Xe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Xe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new We().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Nn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new oe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new oe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Li=new C,Dh=new C,Go=new C,Vo=new C,Ui=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,t),Li.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Dh.copy(e).add(t).multiplyScalar(.5),Go.copy(t).sub(e).normalize(),Vo.copy(this.origin).sub(Dh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Go),o=Vo.dot(this.direction),c=-Vo.dot(Go),l=Vo.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*c-o,u=a*o-c,g=r*h,d>=0)if(u>=-g)if(u<=g){let b=1/h;d*=b,u*=b,f=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Dh).addScaledVector(Go,u),f}intersectSphere(e,t){if(e.radius<0)return null;Li.subVectors(e.center,this.origin);let n=Li.dot(this.direction),s=Li.dot(Li)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,f=e.z-a.z,g=t.x-a.x,b=t.y-a.y,m=t.z-a.z,p=n.x-a.x,v=n.y-a.y,S=n.z-a.z,_=Math.abs(c),y=Math.abs(l),T=Math.abs(h),E,x,A,P,I,N,U,L,B,Y,W,j;if(_>=y&&_>=T?(A=c,N=d,B=g,j=p,c>=0?(E=l,x=h,P=u,I=f,U=b,L=m,Y=v,W=S):(E=h,x=l,P=f,I=u,U=m,L=b,Y=S,W=v)):y>=T?(A=l,N=u,B=b,j=v,l>=0?(E=h,x=c,P=f,I=d,U=m,L=g,Y=S,W=p):(E=c,x=h,P=d,I=f,U=g,L=m,Y=p,W=S)):(A=h,N=f,B=m,j=S,h>=0?(E=c,x=l,P=d,I=u,U=g,L=b,Y=p,W=v):(E=l,x=c,P=u,I=d,U=b,L=g,Y=v,W=p)),A===0)return null;let G=E/A,V=x/A,J=1/A,pe=P-G*N,be=I-V*N,ke=U-G*B,ae=L-V*B,ve=Y-G*j,z=W-V*j,q=ve*ae-z*ke,ie=pe*z-be*ve,le=ke*be-ae*pe;if(s){if(q<0||ie<0||le<0)return null}else if((q<0||ie<0||le<0)&&(q>0||ie>0||le>0))return null;let me=q+ie+le;if(me===0)return null;let ue=J*(q*N+ie*B+le*j);return(me>0?ue<0:ue>0)?null:this.at(ue/me,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Yt=class extends vn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.combine=hu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Rf=new et,Ls=new Ui,Ho=new un,Cf=new C,Wo=new C,qo=new C,Xo=new C,Nh=new C,jo=new C,Pf=new C,Ko=new C,Pt=class extends Ut{constructor(e=new St,t=new Yt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){jo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],d=r[c];h!==0&&(Nh.fromBufferAttribute(d,e),a?jo.addScaledVector(Nh,h):jo.addScaledVector(Nh.sub(t),h))}t.add(jo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ho.copy(n.boundingSphere),Ho.applyMatrix4(r),Ls.copy(e.ray).recast(e.near),!(Ho.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(Ho,Cf)===null||Ls.origin.distanceToSquared(Cf)>(e.far-e.near)**2))&&(Rf.copy(r).invert(),Ls.copy(e.ray).applyMatrix4(Rf),!(n.boundingBox!==null&&Ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ls)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,b=u.length;g<b;g++){let m=u[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),S=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=v,y=S;_<y;_+=3){let T=o.getX(_),E=o.getX(_+1),x=o.getX(_+2);s=Yo(this,p,e,n,l,h,d,T,E,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){let v=o.getX(m),S=o.getX(m+1),_=o.getX(m+2);s=Yo(this,a,e,n,l,h,d,v,S,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,b=u.length;g<b;g++){let m=u[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),S=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=v,y=S;_<y;_+=3){let T=_,E=_+1,x=_+2;s=Yo(this,p,e,n,l,h,d,T,E,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),b=Math.min(c.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){let v=m,S=m+1,_=m+2;s=Yo(this,a,e,n,l,h,d,v,S,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function n0(i,e,t,n,s,r,a,o){let c;if(e.side===sn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Un,o),c===null)return null;Ko.copy(o),Ko.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Ko);return l<t.near||l>t.far?null:{distance:l,point:Ko.clone(),object:i}}function Yo(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Wo),i.getVertexPosition(c,qo),i.getVertexPosition(l,Xo);let h=n0(i,e,t,n,Wo,qo,Xo,Pf);if(h){let d=new C;ls.getBarycoord(Pf,Wo,qo,Xo,d),s&&(h.uv=ls.getInterpolatedAttribute(s,o,c,l,d,new oe)),r&&(h.uv1=ls.getInterpolatedAttribute(r,o,c,l,d,new oe)),a&&(h.normal=ls.getInterpolatedAttribute(a,o,c,l,d,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new C,materialIndex:0};ls.getNormal(Wo,qo,Xo,u.normal),h.face=u,h.barycoord=d}return h}var Ma=new _t,If=new _t,Lf=new _t,i0=new _t,Df=new et,Jo=new C,Fh=new un,Nf=new et,Uh=new Ui,Oa=class extends Pt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Hh,this.bindMatrix=new et,this.bindMatrixInverse=new et,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new bn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Jo),this.boundingBox.expandByPoint(Jo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new un),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Jo),this.boundingSphere.expandByPoint(Jo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fh.copy(this.boundingSphere),Fh.applyMatrix4(s),e.ray.intersectsSphere(Fh)!==!1&&(Nf.copy(s).invert(),Uh.copy(e.ray).applyMatrix4(Nf),!(this.boundingBox!==null&&Uh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Uh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new _t,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Hh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Tp?this.bindMatrixInverse.copy(this.bindMatrix).invert():Xe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;If.fromBufferAttribute(s.attributes.skinIndex,e),Lf.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Ma.copy(t),t.set(0,0,0,0)):(Ma.set(...t,1),t.set(0,0,0)),Ma.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Lf.getComponent(r);if(a!==0){let o=If.getComponent(r);Df.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(i0.copy(Ma).applyMatrix4(Df),a)}}return t.isVector4&&(t.w=Ma.w),t.applyMatrix4(this.bindMatrixInverse)}},Fr=class extends Ut{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ur=class extends Jt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Gt,h=Gt,d,u){super(null,a,o,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ff=new et,s0=new et,Ba=class i{constructor(e=[],t=[]){this.uuid=qn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Xe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new et)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new et;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:s0;Ff.multiplyMatrices(o,t[r]),Ff.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ur(t,e,e,kn,Bn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(Xe("Skeleton: No bone found with UUID:",r),a=new Fr),this.bones.push(a),this.boneInverses.push(new et().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},Oi=class extends Ct{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},vr=new et,Uf=new et,$o=[],Of=new bn,r0=new et,Sa=new Pt,Ta=new un,ks=class extends Pt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Oi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,r0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new bn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vr),Of.copy(e.boundingBox).applyMatrix4(vr),this.boundingBox.union(Of)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new un),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vr),Ta.copy(e.boundingSphere).applyMatrix4(vr),this.boundingSphere.union(Ta)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Sa.geometry=this.geometry,Sa.material=this.material,Sa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ta.copy(this.boundingSphere),Ta.applyMatrix4(n),e.ray.intersectsSphere(Ta)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,vr),Uf.multiplyMatrices(n,vr),Sa.matrixWorld=Uf,Sa.raycast(e,$o);for(let a=0,o=$o.length;a<o;a++){let c=$o[a];c.instanceId=r,c.object=this,t.push(c)}$o.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Oi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ur(new Float32Array(s*this.count),s,this.count,Xc,Bn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ds=new un,a0=new oe(.5,.5),Zo=new C,Or=class{constructor(e=new Nn,t=new Nn,n=new Nn,s=new Nn,r=new Nn,a=new Nn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ii,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],b=r[9],m=r[10],p=r[11],v=r[12],S=r[13],_=r[14],y=r[15];if(s[0].setComponents(l-a,f-h,p-g,y-v).normalize(),s[1].setComponents(l+a,f+h,p+g,y+v).normalize(),s[2].setComponents(l+o,f+d,p+b,y+S).normalize(),s[3].setComponents(l-o,f-d,p-b,y-S).normalize(),n)s[4].setComponents(c,u,m,_).normalize(),s[5].setComponents(l-c,f-u,p-m,y-_).normalize();else if(s[4].setComponents(l-c,f-u,p-m,y-_).normalize(),t===ii)s[5].setComponents(l+c,f+u,p+m,y+_).normalize();else if(t===Er)s[5].setComponents(c,u,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ds.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ds)}intersectsSprite(e){Ds.center.set(0,0,0);let t=a0.distanceTo(e.center);return Ds.radius=.7071067811865476+t,Ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ds)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Zo.x=s.normal.x>0?e.max.x:e.min.x,Zo.y=s.normal.y>0?e.max.y:e.min.y,Zo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Zo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Br=class extends vn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},vc=new C,yc=new C,Bf=new et,wa=new Ui,Qo=new un,Oh=new C,kf=new C,zs=class extends Ut{constructor(e=new St,t=new Br){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)vc.fromBufferAttribute(t,s-1),yc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=vc.distanceTo(yc);e.setAttribute("lineDistance",new Mt(n,1))}else Xe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qo.copy(n.boundingSphere),Qo.applyMatrix4(s),Qo.radius+=r,e.ray.intersectsSphere(Qo)===!1)return;Bf.copy(s).invert(),wa.copy(e.ray).applyMatrix4(Bf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let b=f,m=g-1;b<m;b+=l){let p=h.getX(b),v=h.getX(b+1),S=ec(this,e,wa,c,p,v,b);S&&t.push(S)}if(this.isLineLoop){let b=h.getX(g-1),m=h.getX(f),p=ec(this,e,wa,c,b,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let b=f,m=g-1;b<m;b+=l){let p=ec(this,e,wa,c,b,b+1,b);p&&t.push(p)}if(this.isLineLoop){let b=ec(this,e,wa,c,g-1,f,g-1);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ec(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(vc.fromBufferAttribute(o,s),yc.fromBufferAttribute(o,r),t.distanceSqToSegment(vc,yc,Oh,kf)>n)return;Oh.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Oh);if(!(l<e.near||l>e.far))return{distance:l,point:kf.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var zf=new C,Gf=new C,ka=class extends zs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)zf.fromBufferAttribute(t,s),Gf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+zf.distanceTo(Gf);e.setAttribute("lineDistance",new Mt(n,1))}else Xe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},za=class extends zs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},kr=class extends vn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Vf=new et,Kh=new Ui,tc=new un,nc=new C,Ga=class extends Ut{constructor(e=new St,t=new kr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),tc.copy(n.boundingSphere),tc.applyMatrix4(s),tc.radius+=r,e.ray.intersectsSphere(tc)===!1)return;Vf.copy(s).invert(),Kh.copy(e.ray).applyMatrix4(Vf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){let u=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=u,b=f;g<b;g++){let m=l.getX(g);nc.fromBufferAttribute(d,m),Hf(nc,m,c,s,e,t,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,b=f;g<b;g++)nc.fromBufferAttribute(d,g),Hf(nc,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Hf(i,e,t,n,s,r,a){let o=Kh.distanceSqToPoint(i);if(o<t){let c=new C;Kh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Va=class extends Jt{constructor(e=[],t=_s,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},zr=class extends Jt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var us=class extends Jt{constructor(e,t,n=ri,s,r,a,o=Gt,c=Gt,l,h=pi,d=1){if(h!==pi&&h!==xs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Pr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Mc=class extends us{constructor(e,t=ri,n=_s,s,r,a=Gt,o=Gt,c,l=pi){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ha=class extends Jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ds=class i extends St{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Mt(l,3)),this.setAttribute("normal",new Mt(h,3)),this.setAttribute("uv",new Mt(d,2));function g(b,m,p,v,S,_,y,T,E,x,A){let P=_/E,I=y/x,N=_/2,U=y/2,L=T/2,B=E+1,Y=x+1,W=0,j=0,G=new C;for(let V=0;V<Y;V++){let J=V*I-U;for(let pe=0;pe<B;pe++){let be=pe*P-N;G[b]=be*v,G[m]=J*S,G[p]=L,l.push(G.x,G.y,G.z),G[b]=0,G[m]=0,G[p]=T>0?1:-1,h.push(G.x,G.y,G.z),d.push(pe/E),d.push(1-V/x),W+=1}}for(let V=0;V<x;V++)for(let J=0;J<E;J++){let pe=u+J+B*V,be=u+J+B*(V+1),ke=u+(J+1)+B*(V+1),ae=u+(J+1)+B*V;c.push(pe,be,ae),c.push(be,ke,ae),j+=6}o.addGroup(f,j,A),f+=j,u+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Bi=class i extends St{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,b=[],m=n/2,p=0;v(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Mt(d,3)),this.setAttribute("normal",new Mt(u,3)),this.setAttribute("uv",new Mt(f,2));function v(){let _=new C,y=new C,T=0,E=(t-e)/n;for(let x=0;x<=r;x++){let A=[],P=x/r,I=P*(t-e)+e;for(let N=0;N<=s;N++){let U=N/s,L=U*c+o,B=Math.sin(L),Y=Math.cos(L);y.x=I*B,y.y=-P*n+m,y.z=I*Y,d.push(y.x,y.y,y.z),_.set(B,E,Y).normalize(),u.push(_.x,_.y,_.z),f.push(U,1-P),A.push(g++)}b.push(A)}for(let x=0;x<s;x++)for(let A=0;A<r;A++){let P=b[A][x],I=b[A+1][x],N=b[A+1][x+1],U=b[A][x+1];(e>0||A!==0)&&(h.push(P,I,U),T+=3),(t>0||A!==r-1)&&(h.push(I,N,U),T+=3)}l.addGroup(p,T,0),p+=T}function S(_){let y=g,T=new oe,E=new C,x=0,A=_===!0?e:t,P=_===!0?1:-1;for(let N=1;N<=s;N++)d.push(0,m*P,0),u.push(0,P,0),f.push(.5,.5),g++;let I=g;for(let N=0;N<=s;N++){let L=N/s*c+o,B=Math.cos(L),Y=Math.sin(L);E.x=A*Y,E.y=m*P,E.z=A*B,d.push(E.x,E.y,E.z),u.push(0,P,0),T.x=B*.5+.5,T.y=Y*.5*P+.5,f.push(T.x,T.y),g++}for(let N=0;N<s;N++){let U=y+N,L=I+N;_===!0?h.push(L,L+1,U):h.push(L+1,L,U),x+=3}l.addGroup(p,x,_===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Fn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Xe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new oe:new C);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new C,s=[],r=[],a=[],o=new C,c=new et;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(st(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(st(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Gr=class extends Fn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new oe){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Sc=class extends Gr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Cu(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,d){let u=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+d)+(c-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Wf=new C,qf=new C,Bh=new Cu,kh=new Cu,zh=new Cu,Vr=class extends Fn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new C){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(qf.subVectors(s[0],s[1]).add(s[0]),l=qf);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Wf.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Wf),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(d),f),b=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);b<1e-4&&(b=1),g<1e-4&&(g=b),m<1e-4&&(m=b),Bh.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,g,b,m),kh.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,g,b,m),zh.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,g,b,m)}else this.curveType==="catmullrom"&&(Bh.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),kh.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),zh.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(Bh.calc(c),kh.calc(c),zh.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Xf(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function o0(i,e){let t=1-i;return t*t*e}function c0(i,e){return 2*(1-i)*i*e}function l0(i,e){return i*i*e}function Ca(i,e,t,n){return o0(i,e)+c0(i,t)+l0(i,n)}function h0(i,e){let t=1-i;return t*t*t*e}function u0(i,e){let t=1-i;return 3*t*t*i*e}function d0(i,e){return 3*(1-i)*i*i*e}function f0(i,e){return i*i*i*e}function Pa(i,e,t,n,s){return h0(i,e)+u0(i,t)+d0(i,n)+f0(i,s)}var Wa=class extends Fn{constructor(e=new oe,t=new oe,n=new oe,s=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new oe){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Pa(e,s.x,r.x,a.x,o.x),Pa(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Tc=class extends Fn{constructor(e=new C,t=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new C){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Pa(e,s.x,r.x,a.x,o.x),Pa(e,s.y,r.y,a.y,o.y),Pa(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},qa=class extends Fn{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wc=class extends Fn{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xa=class extends Fn{constructor(e=new oe,t=new oe,n=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new oe){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ca(e,s.x,r.x,a.x),Ca(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ac=class extends Fn{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ca(e,s.x,r.x,a.x),Ca(e,s.y,r.y,a.y),Ca(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ja=class extends Fn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Xf(o,c.x,l.x,h.x,d.x),Xf(o,c.y,l.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new oe().fromArray(s))}return this}},Yh=Object.freeze({__proto__:null,ArcCurve:Sc,CatmullRomCurve3:Vr,CubicBezierCurve:Wa,CubicBezierCurve3:Tc,EllipseCurve:Gr,LineCurve:qa,LineCurve3:wc,QuadraticBezierCurve:Xa,QuadraticBezierCurve3:Ac,SplineCurve:ja}),Ec=class extends Fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Yh[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Yh[s.type]().fromJSON(s))}return this}},Ka=class extends Ec{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new qa(this.currentPoint.clone(),new oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Xa(this.currentPoint.clone(),new oe(e,t),new oe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Wa(this.currentPoint.clone(),new oe(e,t),new oe(n,s),new oe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ja(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){let l=new Gr(e,t,n,s,r,a,o,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Hr=class extends Ka{constructor(e){super(e),this.uuid=qn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Ka().fromJSON(s))}return this}};function p0(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=zp(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=x0(i,e,r,t)),i.length>80*t){o=i[0],c=i[1];let h=o,d=c;for(let u=t;u<s;u+=t){let f=i[u],g=i[u+1];f<o&&(o=f),g<c&&(c=g),f>h&&(h=f),g>d&&(d=g)}l=Math.max(h-o,d-c),l=l!==0?32767/l:0}return Ya(r,a,t,o,c,l,0),a}function zp(i,e,t,n,s){let r;if(s===P0(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=jf(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=jf(a/n|0,i[a],i[a+1],r);return r&&Wr(r,r.next)&&($a(r),r=r.next),r}function Gs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Wr(t,t.next)||Ft(t.prev,t,t.next)===0)){if($a(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ya(i,e,t,n,s,r,a){if(!i)return;!a&&r&&T0(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?g0(i,n,s,r):m0(i)){e.push(c.i,i.i,l.i),$a(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=b0(Gs(i),e),Ya(i,e,t,n,s,r,2)):a===2&&_0(i,e,t,n,s,r):Ya(Gs(i),e,t,n,s,r,1);break}}}function m0(i){let e=i.prev,t=i,n=i.next;if(Ft(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=Math.min(s,r,a),d=Math.min(o,c,l),u=Math.max(s,r,a),f=Math.max(o,c,l),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&Aa(s,o,r,c,a,l,g.x,g.y)&&Ft(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function g0(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Ft(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,c,l),g=Math.min(h,d,u),b=Math.max(o,c,l),m=Math.max(h,d,u),p=Jh(f,g,e,t,n),v=Jh(b,m,e,t,n),S=i.prevZ,_=i.nextZ;for(;S&&S.z>=p&&_&&_.z<=v;){if(S.x>=f&&S.x<=b&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&Aa(o,h,c,d,l,u,S.x,S.y)&&Ft(S.prev,S,S.next)>=0||(S=S.prevZ,_.x>=f&&_.x<=b&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&Aa(o,h,c,d,l,u,_.x,_.y)&&Ft(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;S&&S.z>=p;){if(S.x>=f&&S.x<=b&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&Aa(o,h,c,d,l,u,S.x,S.y)&&Ft(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;_&&_.z<=v;){if(_.x>=f&&_.x<=b&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&Aa(o,h,c,d,l,u,_.x,_.y)&&Ft(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function b0(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Wr(n,s)&&Vp(n,t,t.next,s)&&Ja(n,s)&&Ja(s,n)&&(e.push(n.i,t.i,s.i),$a(t),$a(t.next),t=i=s),t=t.next}while(t!==i);return Gs(t)}function _0(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&E0(a,o)){let c=Hp(a,o);a=Gs(a,a.next),c=Gs(c,c.next),Ya(a,e,t,n,s,r,0),Ya(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function x0(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,l=zp(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(A0(l))}s.sort(v0);for(let r=0;r<s.length;r++)t=y0(s[r],t);return t}function v0(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function y0(i,e){let t=M0(i,e);if(!t)return e;let n=Hp(t,i);return Gs(n,n.next),Gs(t,t.next)}function M0(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Wr(i,t))return t;do{if(Wr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,c=a.x,l=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Gp(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let d=Math.abs(s-t.y)/(n-t.x);Ja(t,i)&&(d<h||d===h&&(t.x>a.x||t.x===a.x&&S0(a,t)))&&(a=t,h=d)}t=t.next}while(t!==o);return a}function S0(i,e){return Ft(i.prev,i,e.prev)<0&&Ft(e.next,i,i.next)<0}function T0(i,e,t,n){let s=i;do s.z===0&&(s.z=Jh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,w0(s)}function w0(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Jh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function A0(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Gp(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Aa(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Gp(i,e,t,n,s,r,a,o)}function E0(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!R0(i,e)&&(Ja(i,e)&&Ja(e,i)&&C0(i,e)&&(Ft(i.prev,i,e.prev)||Ft(i,e.prev,e))||Wr(i,e)&&Ft(i.prev,i,i.next)>0&&Ft(e.prev,e,e.next)>0)}function Ft(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Wr(i,e){return i.x===e.x&&i.y===e.y}function Vp(i,e,t,n){let s=sc(Ft(i,e,t)),r=sc(Ft(i,e,n)),a=sc(Ft(t,n,i)),o=sc(Ft(t,n,e));return!!(s!==r&&a!==o||s===0&&ic(i,t,e)||r===0&&ic(i,n,e)||a===0&&ic(t,i,n)||o===0&&ic(t,e,n))}function ic(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function sc(i){return i>0?1:i<0?-1:0}function R0(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Vp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ja(i,e){return Ft(i.prev,i,i.next)<0?Ft(i,e,i.next)>=0&&Ft(i,i.prev,e)>=0:Ft(i,e,i.prev)<0||Ft(i,i.next,e)<0}function C0(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Hp(i,e){let t=$h(i.i,i.x,i.y),n=$h(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function jf(i,e,t,n){let s=$h(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function $a(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function $h(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function P0(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Zh=class{static triangulate(e,t,n=2){return p0(e,t,n)}},Ns=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Kf(e),Yf(n,e);let a=e.length;t.forEach(Kf);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,Yf(n,t[c]);let o=Zh.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Kf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Yf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Za=class i extends St{constructor(e=new Hr([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];a(l)}this.setAttribute("position",new Mt(s,3)),this.setAttribute("uv",new Mt(r,2)),this.computeVertexNormals();function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,b=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:I0,S,_=!1,y,T,E,x;if(p){S=p.getSpacedPoints(h),_=!0,u=!1;let Z=p.isCatmullRomCurve3?p.closed:!1;y=p.computeFrenetFrames(h,Z),T=new C,E=new C,x=new C}u||(m=0,f=0,g=0,b=0);let A=o.extractPoints(l),P=A.shape,I=A.holes;if(!Ns.isClockWise(P)){P=P.reverse();for(let Z=0,se=I.length;Z<se;Z++){let he=I[Z];Ns.isClockWise(he)&&(I[Z]=he.reverse())}}function U(Z){let he=10000000000000001e-36,fe=Z[0];for(let ge=1;ge<=Z.length;ge++){let Fe=ge%Z.length,Le=Z[Fe],Ne=Le.x-fe.x,je=Le.y-fe.y,D=Ne*Ne+je*je,tt=Math.max(Math.abs(Le.x),Math.abs(Le.y),Math.abs(fe.x),Math.abs(fe.y)),it=he*tt*tt;if(D<=it){Z.splice(Fe,1),ge--;continue}fe=Le}}U(P),I.forEach(U);let L=I.length,B=P;for(let Z=0;Z<L;Z++){let se=I[Z];P=P.concat(se)}function Y(Z,se,he){return se||Ze("ExtrudeGeometry: vec does not exist"),Z.clone().addScaledVector(se,he)}let W=P.length;function j(Z,se,he){let fe,ge,Fe,Le=Z.x-se.x,Ne=Z.y-se.y,je=he.x-Z.x,D=he.y-Z.y,tt=Le*Le+Ne*Ne,it=Le*D-Ne*je;if(Math.abs(it)>Number.EPSILON){let R=Math.sqrt(tt),M=Math.sqrt(je*je+D*D),k=se.x-Ne/R,K=se.y+Le/R,te=he.x-D/M,_e=he.y+je/M,xe=((te-k)*D-(_e-K)*je)/(Le*D-Ne*je);fe=k+Le*xe-Z.x,ge=K+Ne*xe-Z.y;let ee=fe*fe+ge*ge;if(ee<=2)return new oe(fe,ge);Fe=Math.sqrt(ee/2)}else{let R=!1;Le>Number.EPSILON?je>Number.EPSILON&&(R=!0):Le<-Number.EPSILON?je<-Number.EPSILON&&(R=!0):Math.sign(Ne)===Math.sign(D)&&(R=!0),R?(fe=-Ne,ge=Le,Fe=Math.sqrt(tt)):(fe=Le,ge=Ne,Fe=Math.sqrt(tt/2))}return new oe(fe/Fe,ge/Fe)}let G=[];for(let Z=0,se=B.length,he=se-1,fe=Z+1;Z<se;Z++,he++,fe++)he===se&&(he=0),fe===se&&(fe=0),G[Z]=j(B[Z],B[he],B[fe]);let V=[],J,pe=G.concat();for(let Z=0,se=L;Z<se;Z++){let he=I[Z];J=[];for(let fe=0,ge=he.length,Fe=ge-1,Le=fe+1;fe<ge;fe++,Fe++,Le++)Fe===ge&&(Fe=0),Le===ge&&(Le=0),J[fe]=j(he[fe],he[Fe],he[Le]);V.push(J),pe=pe.concat(J)}let be;if(m===0)be=Ns.triangulateShape(B,I);else{let Z=[],se=[];for(let he=0;he<m;he++){let fe=he/m,ge=f*Math.cos(fe*Math.PI/2),Fe=g*Math.sin(fe*Math.PI/2)+b;for(let Le=0,Ne=B.length;Le<Ne;Le++){let je=Y(B[Le],G[Le],Fe);ie(je.x,je.y,-ge),fe===0&&Z.push(je)}for(let Le=0,Ne=L;Le<Ne;Le++){let je=I[Le];J=V[Le];let D=[];for(let tt=0,it=je.length;tt<it;tt++){let R=Y(je[tt],J[tt],Fe);ie(R.x,R.y,-ge),fe===0&&D.push(R)}fe===0&&se.push(D)}}be=Ns.triangulateShape(Z,se)}let ke=be.length,ae=g+b;for(let Z=0;Z<W;Z++){let se=u?Y(P[Z],pe[Z],ae):P[Z];_?(E.copy(y.normals[0]).multiplyScalar(se.x),T.copy(y.binormals[0]).multiplyScalar(se.y),x.copy(S[0]).add(E).add(T),ie(x.x,x.y,x.z)):ie(se.x,se.y,0)}for(let Z=1;Z<=h;Z++)for(let se=0;se<W;se++){let he=u?Y(P[se],pe[se],ae):P[se];_?(E.copy(y.normals[Z]).multiplyScalar(he.x),T.copy(y.binormals[Z]).multiplyScalar(he.y),x.copy(S[Z]).add(E).add(T),ie(x.x,x.y,x.z)):ie(he.x,he.y,d/h*Z)}for(let Z=m-1;Z>=0;Z--){let se=Z/m,he=f*Math.cos(se*Math.PI/2),fe=g*Math.sin(se*Math.PI/2)+b;for(let ge=0,Fe=B.length;ge<Fe;ge++){let Le=Y(B[ge],G[ge],fe);ie(Le.x,Le.y,d+he)}for(let ge=0,Fe=I.length;ge<Fe;ge++){let Le=I[ge];J=V[ge];for(let Ne=0,je=Le.length;Ne<je;Ne++){let D=Y(Le[Ne],J[Ne],fe);_?ie(D.x,D.y+S[h-1].y,S[h-1].x+he):ie(D.x,D.y,d+he)}}}ve(),z();function ve(){let Z=s.length/3;if(u){let se=0,he=W*se;for(let fe=0;fe<ke;fe++){let ge=be[fe];le(ge[2]+he,ge[1]+he,ge[0]+he)}se=h+m*2,he=W*se;for(let fe=0;fe<ke;fe++){let ge=be[fe];le(ge[0]+he,ge[1]+he,ge[2]+he)}}else{for(let se=0;se<ke;se++){let he=be[se];le(he[2],he[1],he[0])}for(let se=0;se<ke;se++){let he=be[se];le(he[0]+W*h,he[1]+W*h,he[2]+W*h)}}n.addGroup(Z,s.length/3-Z,0)}function z(){let Z=s.length/3,se=0;q(B,se),se+=B.length;for(let he=0,fe=I.length;he<fe;he++){let ge=I[he];q(ge,se),se+=ge.length}n.addGroup(Z,s.length/3-Z,1)}function q(Z,se){let he=Z.length;for(;--he>=0;){let fe=he,ge=he-1;ge<0&&(ge=Z.length-1);for(let Fe=0,Le=h+m*2;Fe<Le;Fe++){let Ne=W*Fe,je=W*(Fe+1),D=se+fe+Ne,tt=se+ge+Ne,it=se+ge+je,R=se+fe+je;me(D,tt,it,R)}}}function ie(Z,se,he){c.push(Z),c.push(se),c.push(he)}function le(Z,se,he){ue(Z),ue(se),ue(he);let fe=s.length/3,ge=v.generateTopUV(n,s,fe-3,fe-2,fe-1);ze(ge[0]),ze(ge[1]),ze(ge[2])}function me(Z,se,he,fe){ue(Z),ue(se),ue(fe),ue(se),ue(he),ue(fe);let ge=s.length/3,Fe=v.generateSideWallUV(n,s,ge-6,ge-3,ge-2,ge-1);ze(Fe[0]),ze(Fe[1]),ze(Fe[3]),ze(Fe[1]),ze(Fe[2]),ze(Fe[3])}function ue(Z){s.push(c[Z*3+0]),s.push(c[Z*3+1]),s.push(c[Z*3+2])}function ze(Z){r.push(Z.x),r.push(Z.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return L0(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Yh[s.type]().fromJSON(s)),new i(n,e.options)}},I0={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new oe(r,a),new oe(o,c),new oe(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[s*3],f=e[s*3+1],g=e[s*3+2],b=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new oe(a,1-c),new oe(l,1-d),new oe(u,1-g),new oe(b,1-p)]:[new oe(o,1-c),new oe(h,1-d),new oe(f,1-g),new oe(m,1-p)]}};function L0(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var fs=class i extends St{constructor(e=[new oe(0,-.5),new oe(.5,0),new oe(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=st(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/t,d=new C,u=new oe,f=new C,g=new C,b=new C,m=0,p=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-m,f.z=p*0,b.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(b.x,b.y,b.z);break;default:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=b.x,f.y+=b.y,f.z+=b.z,f.normalize(),c.push(f.x,f.y,f.z),b.copy(g)}for(let v=0;v<=t;v++){let S=n+v*h*s,_=Math.sin(S),y=Math.cos(S);for(let T=0;T<=e.length-1;T++){d.x=e[T].x*_,d.y=e[T].y,d.z=e[T].x*y,a.push(d.x,d.y,d.z),u.x=v/t,u.y=T/(e.length-1),o.push(u.x,u.y);let E=c[3*T+0]*_,x=c[3*T+1],A=c[3*T+0]*y;l.push(E,x,A)}}for(let v=0;v<t;v++)for(let S=0;S<e.length-1;S++){let _=S+v*e.length,y=_,T=_+e.length,E=_+e.length+1,x=_+1;r.push(y,T,x),r.push(E,x,T)}this.setIndex(r),this.setAttribute("position",new Mt(a,3)),this.setAttribute("uv",new Mt(o,2)),this.setAttribute("normal",new Mt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var ki=class i extends St{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,d=e/o,u=t/c,f=[],g=[],b=[],m=[];for(let p=0;p<h;p++){let v=p*u-a;for(let S=0;S<l;S++){let _=S*d-r;g.push(_,-v,0),b.push(0,0,1),m.push(S/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<o;v++){let S=v+l*p,_=v+l*(p+1),y=v+1+l*(p+1),T=v+1+l*p;f.push(S,_,T),f.push(_,y,T)}this.setIndex(f),this.setAttribute("position",new Mt(g,3)),this.setAttribute("normal",new Mt(b,3)),this.setAttribute("uv",new Mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var zi=class i extends St{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],d=new C,u=new C,f=[],g=[],b=[],m=[];for(let p=0;p<=n;p++){let v=[],S=p/n,_=a+S*o,y=e*Math.cos(_),T=Math.sqrt(e*e-y*y),E=0;p===0&&a===0?E=.5/t:p===n&&c===Math.PI&&(E=-.5/t);for(let x=0;x<=t;x++){let A=x/t,P=s+A*r;d.x=-T*Math.cos(P),d.y=y,d.z=T*Math.sin(P),g.push(d.x,d.y,d.z),u.copy(d).normalize(),b.push(u.x,u.y,u.z),m.push(A+E,1-S),v.push(l++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){let S=h[p][v+1],_=h[p][v],y=h[p+1][v],T=h[p+1][v+1];(p!==0||a>0)&&f.push(S,_,T),(p!==n-1||c<Math.PI)&&f.push(_,y,T)}this.setIndex(f),this.setAttribute("position",new Mt(g,3)),this.setAttribute("normal",new Mt(b,3)),this.setAttribute("uv",new Mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Ys(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Jf(s))s.isRenderTargetTexture?(Xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Jf(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function fn(i){let e={};for(let t=0;t<i.length;t++){let n=Ys(i[t]);for(let s in n)e[s]=n[s]}return e}function Jf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function D0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Pu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}var Js={clone:Ys,merge:fn},N0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,F0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Nt=class extends vn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=N0,this.fragmentShader=F0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=D0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new We().setHex(s.value);break;case"v2":this.uniforms[n].value=new oe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new C().fromArray(s.value);break;case"v4":this.uniforms[n].value=new _t().fromArray(s.value);break;case"m3":this.uniforms[n].value=new nt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new et().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Rc=class extends Nt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Vs=class extends vn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Al,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},dn=class extends Vs{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return st(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new We(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new We(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new We(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Cc=class extends vn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ap,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Pc=class extends vn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function cs(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function lc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function U0(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function $f(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function O0(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var mi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ic=class extends mi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qh,endingEnd:qh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Xh:r=e,o=2*t-n;break;case jh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Xh:a=e,c=2*n-t;break;case jh:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),b=g*g,m=b*g,p=-u*m+2*u*b-u*g,v=(1+u)*m+(-1.5-2*u)*b+(-.5+u)*g+1,S=(-1-f)*m+(1.5+f)*b+.5*g,_=f*m-f*b;for(let y=0;y!==o;++y)r[y]=p*a[h+y]+v*a[l+y]+S*a[c+y]+_*a[d+y];return r}},Lc=class extends mi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*d+a[c+u]*h;return r}},Dc=class extends mi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Nc=class extends mi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-t)/(s-t),b=1-g;for(let m=0;m!==o;++m)r[m]=a[l+m]*b+a[c+m]*g;return r}let u=o*2,f=e-1;for(let g=0;g!==o;++g){let b=a[l+g],m=a[c+g],p=f*u+g*2,v=d[p],S=d[p+1],_=e*u+g*2,y=h[_],T=h[_+1],E=k0(n,t,v,y,s);r[g]=Wp(E,b,S,T,m)}return r}};function Wp(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function B0(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function k0(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Wp(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=B0(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var yn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=cs(t,this.TimeBufferType),this.values=cs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:cs(e.times,Array),values:cs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),lc(e.settings)&&(n.settings={inTangents:cs(e.settings.inTangents,Array),outTangents:cs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Dc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Lc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ic(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Nc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Us:t=this.InterpolantFactoryMethodDiscrete;break;case Os:t=this.InterpolantFactoryMethodLinear;break;case oc:t=this.InterpolantFactoryMethodSmooth;break;case Wh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Xe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Us;case this.InterpolantFactoryMethodLinear:return Os;case this.InterpolantFactoryMethodSmooth:return oc;case this.InterpolantFactoryMethodBezier:return Wh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;lc(this.settings)&&(Zf(this.settings.inTangents,e),Zf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ze("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ze("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Ze("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Ze("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Sg(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Ze("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===oc,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let b=t[d+g];if(b!==t[u+g]||b!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,lc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Zf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}yn.prototype.ValueTypeName="";yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=Os;var Gi=class extends yn{constructor(e,t,n){super(e,t,n)}};Gi.prototype.ValueTypeName="bool";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=Us;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Qa=class extends yn{constructor(e,t,n,s){super(e,t,n,s)}};Qa.prototype.ValueTypeName="color";var Vi=class extends yn{constructor(e,t,n,s){super(e,t,n,s)}};Vi.prototype.ValueTypeName="number";var Fc=class extends mi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)Ht.slerpFlat(r,0,a,l-o,a,l,c);return r}},Hi=class extends yn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Fc(this.times,this.values,this.getValueSize(),e)}};Hi.prototype.ValueTypeName="quaternion";Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Wi=class extends yn{constructor(e,t,n){super(e,t,n)}};Wi.prototype.ValueTypeName="string";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=Us;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var ps=class extends yn{constructor(e,t,n,s){super(e,t,n,s)}};ps.prototype.ValueTypeName="vector";var eo=class{constructor(e="",t=-1,n=[],s=wp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=qn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(G0(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(yn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=U0(c);c=$f(c,1,h),l=$f(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Vi(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let d=h[1],u=s[d];u||(s[d]=u=[]),u.push(l)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function z0(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Vi;case"vector":case"vector2":case"vector3":case"vector4":return ps;case"color":return Qa;case"quaternion":return Hi;case"bool":case"boolean":return Gi;case"string":return Wi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function G0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=z0(i.type);if(i.times===void 0){let n=[],s=[];O0(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),lc(i.settings)&&(t.settings={inTangents:cs(i.settings.inTangents,Float32Array),outTangents:cs(i.settings.outTangents,Float32Array)}),t}var fi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Qf(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Qf(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Qf(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Uc=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},qp=new Uc,gi=class{constructor(e){this.manager=e!==void 0?e:qp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};gi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Di={},Qh=class extends Error{constructor(e,t){super(e),this.response=t}},qr=class extends gi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=fi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Di[e]!==void 0){Di[e].push({onLoad:t,onProgress:n,onError:s});return}Di[e]=[],Di[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Xe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Di[e],d=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=u?parseInt(u):0,g=f!==0,b=0,m=new ReadableStream({start(p){v();function v(){d.read().then(({done:S,value:_})=>{if(S)p.close();else{b+=_.byteLength;let y=new ProgressEvent("progress",{lengthComputable:g,loaded:b,total:f});for(let T=0,E=h.length;T<E;T++){let x=h[T];x.onProgress&&x.onProgress(y)}p.enqueue(_),v()}},S=>{p.error(S)})}}});return new Response(m)}else throw new Qh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{fi.add(`file:${e}`,l);let h=Di[e];delete Di[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=Di[e];if(h===void 0)throw this.manager.itemError(e),l;delete Di[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var yr=new WeakMap,Oc=class extends gi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=fi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=yr.get(a);d===void 0&&(d=[],yr.set(a,d)),d.push({onLoad:t,onError:s})}return a}let o=Rr("img");function c(){h(),t&&t(this);let d=yr.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}yr.delete(this),r.manager.itemEnd(e)}function l(d){h(),s&&s(d),fi.remove(`image:${e}`);let u=yr.get(this)||[];for(let f=0;f<u.length;f++){let g=u[f];g.onError&&g.onError(d)}yr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),fi.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var to=class extends gi{constructor(e){super(e)}load(e,t,n,s){let r=new Jt,a=new Oc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Xr=class extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var Gh=new et,ep=new C,tp=new C,jr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.mapType=Sn,this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Or,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ep.setFromMatrixPosition(e.matrixWorld),t.position.copy(ep),tp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(tp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Gh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Gh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Er||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Gh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},rc=new C,ac=new Ht,di=new C,no=class extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(rc,ac,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(rc,ac,di.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(rc,ac,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(rc,ac,di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},os=new C,np=new oe,ip=new oe,Kt=class extends no{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Bs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ea*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bs*2*Math.atan(Math.tan(Ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){os.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(os.x,os.y).multiplyScalar(-e/os.z),os.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(os.x,os.y).multiplyScalar(-e/os.z)}getViewSize(e,t){return this.getViewBounds(e,np,ip),t.subVectors(ip,np)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ea*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},eu=class extends jr{constructor(){super(new Kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Bs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},io=class extends Xr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new eu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},tu=class extends jr{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0}},so=class extends Xr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new tu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},bi=class extends no{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},nu=class extends jr{constructor(){super(new bi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ro=class extends Xr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new nu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var qi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Vh=new WeakMap,ao=class extends gi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Xe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Xe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=fi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{Vh.has(a)===!0?(s&&s(Vh.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return fi.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Vh.set(c,l),fi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});fi.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Mr=-90,Sr=1,Hs=class extends Ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Kt(Mr,Sr,e,t);s.layers=this.layers,this.add(s);let r=new Kt(Mr,Sr,e,t);r.layers=this.layers,this.add(r);let a=new Kt(Mr,Sr,e,t);a.layers=this.layers,this.add(a);let o=new Kt(Mr,Sr,e,t);o.layers=this.layers,this.add(o);let c=new Kt(Mr,Sr,e,t);c.layers=this.layers,this.add(c);let l=new Kt(Mr,Sr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===ii)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Er)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Bc=class extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ws=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=V0.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function V0(){this._document.hidden===!1&&this.reset()}var Iu="\\[\\]\\.:\\/",H0=new RegExp("["+Iu+"]","g"),Lu="[^"+Iu+"]",W0="[^"+Iu.replace("\\.","")+"]",q0=/((?:WC+[\/:])*)/.source.replace("WC",Lu),X0=/(WCOD+)?/.source.replace("WCOD",W0),j0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Lu),K0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Lu),Y0=new RegExp("^"+q0+X0+j0+K0+"$"),J0=["material","materials","bones","map"],iu=class{constructor(e,t,n){let s=n||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Rt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(H0,"")}static parseTrackName(e){let t=Y0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);J0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Xe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;Ze("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Rt.Composite=iu;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var mS=new Float32Array(1);var ms=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=st(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(st(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Bu=class Bu{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Bu.prototype.isMatrix2=!0;var su=Bu;var oo=class extends si{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Du(i,e,t,n){let s=$0(n);switch(t){case Su:return i*e;case Xc:return i*e/s.components*s.byteLength;case jc:return i*e/s.components*s.byteLength;case vs:return i*e*2/s.components*s.byteLength;case Kc:return i*e*2/s.components*s.byteLength;case Tu:return i*e*3/s.components*s.byteLength;case kn:return i*e*4/s.components*s.byteLength;case Yc:return i*e*4/s.components*s.byteLength;case uo:case fo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case po:case mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $c:case Qc:return Math.max(i,16)*Math.max(e,8)/4;case Jc:case Zc:return Math.max(i,8)*Math.max(e,8)/2;case el:case tl:case il:case sl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case nl:case go:case rl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case al:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ol:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case cl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ll:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case hl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ul:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case dl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case fl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case pl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ml:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case gl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case bl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case _l:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case xl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case vl:case yl:case Ml:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Sl:case Tl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case bo:case wl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $0(i){switch(i){case Sn:case xu:return{byteLength:1,components:1};case $r:case vu:case Wt:return{byteLength:2,components:1};case Wc:case qc:return{byteLength:2,components:4};case ri:case Hc:case Bn:return{byteLength:4,components:1};case yu:case Mu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function fm(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Q0(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],b=d[f];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++u,d[u]=b)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let b=d[f];i.bufferSubData(l,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var eb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tb=`#ifdef USE_ALPHAHASH
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
#endif`,nb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ib=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ab=`#ifdef USE_AOMAP
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
#endif`,ob=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cb=`#ifdef USE_BATCHING
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
#endif`,lb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ub=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,db=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fb=`#ifdef USE_IRIDESCENCE
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
#endif`,pb=`#ifdef USE_BUMPMAP
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
#endif`,mb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_b=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,vb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,yb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Mb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Sb=`#define PI 3.141592653589793
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
} // validated`,Tb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wb=`vec3 transformedNormal = objectNormal;
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
#endif`,Ab=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Eb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ib=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lb=`#ifdef USE_ENVMAP
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
#endif`,Db=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Nb=`#ifdef USE_ENVMAP
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
#endif`,Fb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ub=`#ifdef USE_ENVMAP
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
#endif`,Ob=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gb=`#ifdef USE_GRADIENTMAP
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
}`,Vb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Xb=`#ifdef USE_ENVMAP
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
#endif`,jb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$b=`PhysicalMaterial material;
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
#endif`,Zb=`uniform sampler2D dfgLUT;
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
}`,Qb=`
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
#endif`,e_=`#if defined( RE_IndirectDiffuse )
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
#endif`,t_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,n_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,i_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,s_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,o_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,c_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,l_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,h_=`#if defined( USE_POINTS_UV )
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
#endif`,u_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,d_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,f_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,p_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,m_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,g_=`#ifdef USE_MORPHTARGETS
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
#endif`,b_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,__=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,x_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,v_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,S_=`#ifdef USE_NORMALMAP
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
#endif`,T_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,w_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,A_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,E_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,R_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,C_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,P_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,I_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,L_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,D_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,N_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,F_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,U_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,O_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,B_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,k_=`float getShadowMask() {
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
}`,z_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,G_=`#ifdef USE_SKINNING
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
#endif`,V_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,H_=`#ifdef USE_SKINNING
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
#endif`,W_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,q_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,X_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,j_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,K_=`#ifdef USE_TRANSMISSION
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
#endif`,Y_=`#ifdef USE_TRANSMISSION
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
#endif`,J_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ex=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tx=`uniform sampler2D t2D;
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
}`,nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ix=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ax=`#include <common>
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
}`,ox=`#if DEPTH_PACKING == 3200
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
}`,cx=`#define DISTANCE
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
}`,lx=`#define DISTANCE
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
}`,hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ux=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dx=`uniform float scale;
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
}`,fx=`uniform vec3 diffuse;
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
}`,px=`#include <common>
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
}`,mx=`uniform vec3 diffuse;
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
}`,gx=`#define LAMBERT
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
}`,bx=`#define LAMBERT
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
}`,_x=`#define MATCAP
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
}`,xx=`#define MATCAP
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
}`,vx=`#define NORMAL
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
}`,yx=`#define NORMAL
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
}`,Mx=`#define PHONG
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
}`,Sx=`#define PHONG
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
}`,Tx=`#define STANDARD
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
}`,wx=`#define STANDARD
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
}`,Ax=`#define TOON
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
}`,Ex=`#define TOON
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
}`,Rx=`uniform float size;
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
}`,Cx=`uniform vec3 diffuse;
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
}`,Px=`#include <common>
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
}`,Ix=`uniform vec3 color;
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
}`,Lx=`uniform float rotation;
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
}`,Dx=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:eb,alphahash_pars_fragment:tb,alphamap_fragment:nb,alphamap_pars_fragment:ib,alphatest_fragment:sb,alphatest_pars_fragment:rb,aomap_fragment:ab,aomap_pars_fragment:ob,batching_pars_vertex:cb,batching_vertex:lb,begin_vertex:hb,beginnormal_vertex:ub,bsdfs:db,iridescence_fragment:fb,bumpmap_pars_fragment:pb,clipping_planes_fragment:mb,clipping_planes_pars_fragment:gb,clipping_planes_pars_vertex:bb,clipping_planes_vertex:_b,color_fragment:xb,color_pars_fragment:vb,color_pars_vertex:yb,color_vertex:Mb,common:Sb,cube_uv_reflection_fragment:Tb,defaultnormal_vertex:wb,displacementmap_pars_vertex:Ab,displacementmap_vertex:Eb,emissivemap_fragment:Rb,emissivemap_pars_fragment:Cb,colorspace_fragment:Pb,colorspace_pars_fragment:Ib,envmap_fragment:Lb,envmap_common_pars_fragment:Db,envmap_pars_fragment:Nb,envmap_pars_vertex:Fb,envmap_physical_pars_fragment:Xb,envmap_vertex:Ub,fog_vertex:Ob,fog_pars_vertex:Bb,fog_fragment:kb,fog_pars_fragment:zb,gradientmap_pars_fragment:Gb,lightmap_pars_fragment:Vb,lights_lambert_fragment:Hb,lights_lambert_pars_fragment:Wb,lights_pars_begin:qb,lights_toon_fragment:jb,lights_toon_pars_fragment:Kb,lights_phong_fragment:Yb,lights_phong_pars_fragment:Jb,lights_physical_fragment:$b,lights_physical_pars_fragment:Zb,lights_fragment_begin:Qb,lights_fragment_maps:e_,lights_fragment_end:t_,lightprobes_pars_fragment:n_,logdepthbuf_fragment:i_,logdepthbuf_pars_fragment:s_,logdepthbuf_pars_vertex:r_,logdepthbuf_vertex:a_,map_fragment:o_,map_pars_fragment:c_,map_particle_fragment:l_,map_particle_pars_fragment:h_,metalnessmap_fragment:u_,metalnessmap_pars_fragment:d_,morphinstance_vertex:f_,morphcolor_vertex:p_,morphnormal_vertex:m_,morphtarget_pars_vertex:g_,morphtarget_vertex:b_,normal_fragment_begin:__,normal_fragment_maps:x_,normal_pars_fragment:v_,normal_pars_vertex:y_,normal_vertex:M_,normalmap_pars_fragment:S_,clearcoat_normal_fragment_begin:T_,clearcoat_normal_fragment_maps:w_,clearcoat_pars_fragment:A_,iridescence_pars_fragment:E_,opaque_fragment:R_,packing:C_,premultiplied_alpha_fragment:P_,project_vertex:I_,dithering_fragment:L_,dithering_pars_fragment:D_,roughnessmap_fragment:N_,roughnessmap_pars_fragment:F_,shadowmap_pars_fragment:U_,shadowmap_pars_vertex:O_,shadowmap_vertex:B_,shadowmask_pars_fragment:k_,skinbase_vertex:z_,skinning_pars_vertex:G_,skinning_vertex:V_,skinnormal_vertex:H_,specularmap_fragment:W_,specularmap_pars_fragment:q_,tonemapping_fragment:X_,tonemapping_pars_fragment:j_,transmission_fragment:K_,transmission_pars_fragment:Y_,uv_pars_fragment:J_,uv_pars_vertex:$_,uv_vertex:Z_,worldpos_vertex:Q_,background_vert:ex,background_frag:tx,backgroundCube_vert:nx,backgroundCube_frag:ix,cube_vert:sx,cube_frag:rx,depth_vert:ax,depth_frag:ox,distance_vert:cx,distance_frag:lx,equirect_vert:hx,equirect_frag:ux,linedashed_vert:dx,linedashed_frag:fx,meshbasic_vert:px,meshbasic_frag:mx,meshlambert_vert:gx,meshlambert_frag:bx,meshmatcap_vert:_x,meshmatcap_frag:xx,meshnormal_vert:vx,meshnormal_frag:yx,meshphong_vert:Mx,meshphong_frag:Sx,meshphysical_vert:Tx,meshphysical_frag:wx,meshtoon_vert:Ax,meshtoon_frag:Ex,points_vert:Rx,points_frag:Cx,shadow_vert:Px,shadow_frag:Ix,sprite_vert:Lx,sprite_frag:Dx},Pe={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},xi={basic:{uniforms:fn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:fn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new We(0)},envMapIntensity:{value:1}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:fn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:fn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:fn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new We(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:fn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:fn([Pe.points,Pe.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:fn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:fn([Pe.common,Pe.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:fn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:fn([Pe.sprite,Pe.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distance:{uniforms:fn([Pe.common,Pe.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distance_vert,fragmentShader:at.distance_frag},shadow:{uniforms:fn([Pe.lights,Pe.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};xi.physical={uniforms:fn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};var Cl={r:0,b:0,g:0},Nx=new et,pm=new nt;pm.set(-1,0,0,0,1,0,0,0,1);function Fx(i,e,t,n,s,r){let a=new We(0),o=s===!0?0:1,c,l,h=null,d=0,u=null;function f(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){let _=v.backgroundBlurriness>0;S=e.get(S,_)}return S}function g(v){let S=!1,_=f(v);_===null?m(a,o):_&&_.isColor&&(m(_,1),S=!0);let y=i.xr.getEnvironmentBlendMode();y==="additive"?t.buffers.color.setClear(0,0,0,1,r):y==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(v,S){let _=f(S);_&&(_.isCubeTexture||_.mapping===ho)?(l===void 0&&(l=new Pt(new ds(1,1,1),new Nt({name:"BackgroundCubeMaterial",uniforms:Ys(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(y,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Nx.makeRotationFromEuler(S.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(pm),l.material.toneMapped=ot.getTransfer(_.colorSpace)!==vt,(h!==_||d!==_.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,u=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Pt(new ki(2,2),new Nt({name:"BackgroundMaterial",uniforms:Ys(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=ot.getTransfer(_.colorSpace)!==vt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,u=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,S){v.getRGB(Cl,Pu(i)),t.buffers.color.setClear(Cl.r,Cl.g,Cl.b,S,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,S=1){a.set(v),o=S,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:g,addToRenderList:b,dispose:p}}function Ux(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(I,N,U,L,B){let Y=!1,W=d(I,L,U,N);r!==W&&(r=W,l(r.object)),Y=f(I,L,U,B),Y&&g(I,L,U,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,_(I,N,U,L),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return i.createVertexArray()}function l(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function d(I,N,U,L){let B=L.wireframe===!0,Y=n[N.id];Y===void 0&&(Y={},n[N.id]=Y);let W=I.isInstancedMesh===!0?I.id:0,j=Y[W];j===void 0&&(j={},Y[W]=j);let G=j[U.id];G===void 0&&(G={},j[U.id]=G);let V=G[B];return V===void 0&&(V=u(c()),G[B]=V),V}function u(I){let N=[],U=[],L=[];for(let B=0;B<t;B++)N[B]=0,U[B]=0,L[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:U,attributeDivisors:L,object:I,attributes:{},index:null}}function f(I,N,U,L){let B=r.attributes,Y=N.attributes,W=0,j=U.getAttributes();for(let G in j)if(j[G].location>=0){let J=B[G],pe=Y[G];if(pe===void 0&&(G==="instanceMatrix"&&I.instanceMatrix&&(pe=I.instanceMatrix),G==="instanceColor"&&I.instanceColor&&(pe=I.instanceColor)),J===void 0||J.attribute!==pe||pe&&J.data!==pe.data)return!0;W++}return r.attributesNum!==W||r.index!==L}function g(I,N,U,L){let B={},Y=N.attributes,W=0,j=U.getAttributes();for(let G in j)if(j[G].location>=0){let J=Y[G];J===void 0&&(G==="instanceMatrix"&&I.instanceMatrix&&(J=I.instanceMatrix),G==="instanceColor"&&I.instanceColor&&(J=I.instanceColor));let pe={};pe.attribute=J,J&&J.data&&(pe.data=J.data),B[G]=pe,W++}r.attributes=B,r.attributesNum=W,r.index=L}function b(){let I=r.newAttributes;for(let N=0,U=I.length;N<U;N++)I[N]=0}function m(I){p(I,0)}function p(I,N){let U=r.newAttributes,L=r.enabledAttributes,B=r.attributeDivisors;U[I]=1,L[I]===0&&(i.enableVertexAttribArray(I),L[I]=1),B[I]!==N&&(i.vertexAttribDivisor(I,N),B[I]=N)}function v(){let I=r.newAttributes,N=r.enabledAttributes;for(let U=0,L=N.length;U<L;U++)N[U]!==I[U]&&(i.disableVertexAttribArray(U),N[U]=0)}function S(I,N,U,L,B,Y,W){W===!0?i.vertexAttribIPointer(I,N,U,B,Y):i.vertexAttribPointer(I,N,U,L,B,Y)}function _(I,N,U,L){b();let B=L.attributes,Y=U.getAttributes(),W=N.defaultAttributeValues;for(let j in Y){let G=Y[j];if(G.location>=0){let V=B[j];if(V===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&(V=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&(V=I.instanceColor)),V!==void 0){let J=V.normalized,pe=V.itemSize,be=e.get(V);if(be===void 0)continue;let ke=be.buffer,ae=be.type,ve=be.bytesPerElement,z=ae===i.INT||ae===i.UNSIGNED_INT||V.gpuType===Hc;if(V.isInterleavedBufferAttribute){let q=V.data,ie=q.stride,le=V.offset;if(q.isInstancedInterleavedBuffer){for(let me=0;me<G.locationSize;me++)p(G.location+me,q.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let me=0;me<G.locationSize;me++)m(G.location+me);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let me=0;me<G.locationSize;me++)S(G.location+me,pe/G.locationSize,ae,J,ie*ve,(le+pe/G.locationSize*me)*ve,z)}else{if(V.isInstancedBufferAttribute){for(let q=0;q<G.locationSize;q++)p(G.location+q,V.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let q=0;q<G.locationSize;q++)m(G.location+q);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let q=0;q<G.locationSize;q++)S(G.location+q,pe/G.locationSize,ae,J,pe*ve,pe/G.locationSize*q*ve,z)}}else if(W!==void 0){let J=W[j];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(G.location,J);break;case 3:i.vertexAttrib3fv(G.location,J);break;case 4:i.vertexAttrib4fv(G.location,J);break;default:i.vertexAttrib1fv(G.location,J)}}}}v()}function y(){A();for(let I in n){let N=n[I];for(let U in N){let L=N[U];for(let B in L){let Y=L[B];for(let W in Y)h(Y[W].object),delete Y[W];delete L[B]}}delete n[I]}}function T(I){if(n[I.id]===void 0)return;let N=n[I.id];for(let U in N){let L=N[U];for(let B in L){let Y=L[B];for(let W in Y)h(Y[W].object),delete Y[W];delete L[B]}}delete n[I.id]}function E(I){for(let N in n){let U=n[N];for(let L in U){let B=U[L];if(B[I.id]===void 0)continue;let Y=B[I.id];for(let W in Y)h(Y[W].object),delete Y[W];delete B[I.id]}}}function x(I){for(let N in n){let U=n[N],L=I.isInstancedMesh===!0?I.id:0,B=U[L];if(B!==void 0){for(let Y in B){let W=B[Y];for(let j in W)h(W[j].object),delete W[j];delete B[Y]}delete U[L],Object.keys(U).length===0&&delete n[N]}}}function A(){P(),a=!0,r!==s&&(r=s,l(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:P,dispose:y,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:E,initAttributes:b,enableAttribute:m,disableUnusedAttributes:v}}function Ox(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Bx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==kn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let x=E===Wt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Sn&&E!==Bn&&!x&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Xe("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Xe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:_,maxSamples:y,samples:T}}function kx(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Nn,o=new nt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,b=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let v=r?0:n,S=v*4,_=p.clippingState||null;c.value=_,_=h(g,u,S,f);for(let y=0;y!==S;++y)_[y]=t[y];p.clippingState=_,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){let b=d!==null?d.length:0,m=null;if(b!==0){if(m=c.value,g!==!0||m===null){let p=f+b*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,_=f;S!==b;++S,_+=4)a.copy(d[S]).applyMatrix4(v,o),a.normal.toArray(m,_),m[_+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}var ta=4,zx=6,Gx=20,Vx=256,vo=new bi,Xp=new We,ku=null,zu=0,Gu=0,Vu=!1,Hx=new C,$s=new C,ia=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Hx}=r;ku=this._renderer.getRenderTarget(),zu=this._renderer.getActiveCubeFace(),Gu=this._renderer.getActiveMipmapLevel(),Vu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ku,zu,Gu),this._renderer.xr.enabled=Vu,e.scissorTest=!1,ea(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_s||e.mapping===js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ku=this._renderer.getRenderTarget(),zu=this._renderer.getActiveCubeFace(),Gu=this._renderer.getActiveMipmapLevel(),Vu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:Wt,format:kn,colorSpace:gn,depthBuffer:!1},s=jp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jp(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Wx(r)),this._blurMaterial=Xx(r,e,t),this._ggxMaterial=qx(r,e,t)}return s}_compileMaterial(e){let t=new Pt(new St,e);this._renderer.compile(t,vo)}_sceneToCubeUV(e,t,n,s,r){let c=new Kt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Xp),d.toneMapping=On,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pt(new ds,new Yt({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,m=b.material,p=!1,v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,p=!0):(m.color.copy(Xp),p=!0);for(let S=0;S<6;S++){let _=S%3;_===0?(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[S],r.y,r.z)):_===1?(c.up.set(0,0,l[S]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[S],r.z)):(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[S]));let y=this._cubeSize;ea(s,_*y,S>2?y:0,y,y),d.setRenderTarget(s),p&&d.render(b,c),d.render(e,c)}d.toneMapping=f,d.autoClear=u,e.background=v}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===_s||e.mapping===js;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kp());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;ea(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,vo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=l*1.25,f=d*u,{_lodMax:g}=this,b=this._sizeLods[n],m=3*b*(n>g-ta?n-g+ta:0),p=4*(this._cubeSize-b);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,ea(r,m,p,3*b,2*b),s.setRenderTarget(r),s.render(o,vo),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,ea(e,m,p,3*b,2*b),s.setRenderTarget(e),s.render(o,vo)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-ta?s-this._lodMax+ta:0),u=4*(this._cubeSize-h);ea(t,d,u,3*h,2*h),a.setRenderTarget(t),a.render(c,vo)}};function Wx(i){let e=[],t=[],n=i,s=i-ta+1+zx;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,u=6,f=3,g=new Float32Array(f*u*d),b=new Float32Array(f*u*d);for(let p=0;p<d;p++){let v=p%3*2/3-1,S=p>2?0:-1,_=[v,S,0,v+2/3,S,0,v+2/3,S+1,0,v,S,0,v+2/3,S+1,0,v,S+1,0];g.set(_,f*u*p);for(let y=0;y<u;y++){let T=h[y*2]*2-1,E=h[y*2+1]*2-1;p===0?$s.set(1,E,T):p===1?$s.set(-T,1,-E):p===2?$s.set(-T,E,1):p===3?$s.set(-1,E,-T):p===4?$s.set(-T,-1,E):$s.set(T,E,-1),$s.toArray(b,(p*u+y)*f)}}let m=new St;m.setAttribute("position",new Ct(g,f)),m.setAttribute("outputDirection",new Ct(b,f)),t.push(new Pt(m,null)),n>ta&&n--}return{lodMeshes:t,sizeLods:e}}function jp(i,e,t){let n=new Bt(i,e,t);return n.texture.mapping=ho,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ea(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function qx(i,e,t){return new Nt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Vx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ll(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Xx(i,e,t){return new Nt({name:"SphericalGaussianBlur",defines:{SAMPLES:Gx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ll(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Kp(){return new Nt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ll(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Yp(){return new Nt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Ll(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Zs=class extends Bt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Va(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ds(5,5,5),r=new Nt({name:"CubemapFromEquirect",uniforms:Ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:Xn});r.uniforms.tEquirect.value=t;let a=new Pt(s,r),o=t.minFilter;return t.minFilter===Mn&&(t.minFilter=Vt),new Hs(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function jx(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===zc||f===Gc)if(e.has(u)){let g=e.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let b=new Zs(g.height);return b.fromEquirectangularTexture(i,u),e.set(u,b),u.addEventListener("dispose",l),o(b.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,g=f===zc||f===Gc,b=f===_s||f===js;if(g||b){let m=t.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new ia(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let v=u.image;return g&&v&&v.height>0||b&&v&&c(v)?(n===null&&(n=new ia(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===zc?u.mapping=_s:f===Gc&&(u.mapping=js),u}function c(u){let f=0,g=6;for(let b=0;b<g;b++)u[b]!==void 0&&f++;return f===g}function l(u){let f=u.target;f.removeEventListener("dispose",l);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Kx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Fs("WebGLRenderer: "+n+" extension not supported."),s}}}function Yx(i,e,t,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function c(d){let u=d.attributes;for(let f in u)e.update(u[f],i.ARRAY_BUFFER)}function l(d){let u=[],f=d.index,g=d.attributes.position,b=0;if(g===void 0)return;if(f!==null){let v=f.array;b=f.version;for(let S=0,_=v.length;S<_;S+=3){let y=v[S+0],T=v[S+1],E=v[S+2];u.push(y,T,T,E,E,y)}}else{let v=g.array;b=g.version;for(let S=0,_=v.length/3-1;S<_;S+=3){let y=S+0,T=S+1,E=S+2;u.push(y,T,T,E,E,y)}}let m=new(g.count>=65535?Ua:Fa)(u,1);m.version=b;let p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function Jx(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,u){i.drawElements(n,u,r,d*a),t.update(u,n,1)}function l(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let b=0;for(let m=0;m<f;m++)b+=u[m];t.update(b,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function $x(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ze("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Zx(i,e,t){let n=new WeakMap,s=new _t;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let A=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],S=0;f===!0&&(S=1),g===!0&&(S=2),b===!0&&(S=3);let _=o.attributes.position.count*S,y=1;_>e.maxTextureSize&&(y=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let T=new Float32Array(_*y*4*d),E=new Da(T,_,y,d);E.type=Bn,E.needsUpdate=!0;let x=S*4;for(let P=0;P<d;P++){let I=m[P],N=p[P],U=v[P],L=_*y*4*P;for(let B=0;B<I.count;B++){let Y=B*x;f===!0&&(s.fromBufferAttribute(I,B),T[L+Y+0]=s.x,T[L+Y+1]=s.y,T[L+Y+2]=s.z,T[L+Y+3]=0),g===!0&&(s.fromBufferAttribute(N,B),T[L+Y+4]=s.x,T[L+Y+5]=s.y,T[L+Y+6]=s.z,T[L+Y+7]=0),b===!0&&(s.fromBufferAttribute(U,B),T[L+Y+8]=s.x,T[L+Y+9]=s.y,T[L+Y+10]=s.z,T[L+Y+11]=U.itemSize===4?s.w:1)}}u={count:d,texture:E,size:new oe(_,y)},n.set(o,u),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let b=0;b<l.length;b++)f+=l[b];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Qx(i,e,t,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,d=l.geometry,u=e.get(l,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var ev={[uu]:"LINEAR_TONE_MAPPING",[du]:"REINHARD_TONE_MAPPING",[fu]:"CINEON_TONE_MAPPING",[pu]:"ACES_FILMIC_TONE_MAPPING",[gu]:"AGX_TONE_MAPPING",[bu]:"NEUTRAL_TONE_MAPPING",[mu]:"CUSTOM_TONE_MAPPING"};function tv(i,e,t,n,s,r){let a=new Bt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new St;l.setAttribute("position",new Mt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Mt([0,2,0,0,2,0],2));let h=new Rc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Pt(l,h),u=new bi(-1,1,1,-1,0,1),f=null,g=null,b=!1,m,p=null,v=[],S=!1;this.setSize=function(_,y){a.setSize(_,y),o!==null&&o.setSize(_,y),c!==null&&c.setSize(_,y);for(let T=0;T<v.length;T++){let E=v[T];E.setSize&&E.setSize(_,y)}},this.setEffects=function(_){v=_,S=v.length>0&&v[0].isRenderPass===!0;let y=a.width,T=a.height;v.length>0&&o===null&&(o=new Bt(y,T,{type:Wt,depthBuffer:!1,stencilBuffer:!1}),c=new Bt(y,T,{type:Wt,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<v.length;E++){let x=v[E];x.setSize&&x.setSize(y,T)}},this.begin=function(_,y){if(b||_.toneMapping===On&&v.length===0)return!1;if(p=y,y!==null){let T=y.width,E=y.height;(a.width!==T||a.height!==E)&&this.setSize(T,E)}return S===!1&&_.setRenderTarget(a),m=_.toneMapping,_.toneMapping=On,!0},this.hasRenderPass=function(){return S},this.end=function(_,y){_.toneMapping=m,b=!0;let T=a,E=o;for(let x=0;x<v.length;x++){let A=v[x];A.enabled!==!1&&(A.render(_,E,T,y),A.needsSwap!==!1&&(T=E,E=E===o?c:o))}if(f!==_.outputColorSpace||g!==_.toneMapping){f=_.outputColorSpace,g=_.toneMapping,h.defines={},ot.getTransfer(f)===vt&&(h.defines.SRGB_TRANSFER="");let x=ev[g];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,_.setRenderTarget(p),_.render(d,u),p=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var mm=new Jt,qu=new us(1,1),gm=new Da,bm=new xc,_m=new Va,Jp=[],$p=[],Zp=new Float32Array(16),Qp=new Float32Array(9),em=new Float32Array(4);function sa(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Jp[s];if(r===void 0&&(r=new Float32Array(s),Jp[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function $t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Dl(i,e){let t=$p[e];t===void 0&&(t=new Int32Array(e),$p[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function nv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function iv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2fv(this.addr,e),Zt(t,e)}}function sv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;i.uniform3fv(this.addr,e),Zt(t,e)}}function rv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4fv(this.addr,e),Zt(t,e)}}function av(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if($t(t,n))return;em.set(n),i.uniformMatrix2fv(this.addr,!1,em),Zt(t,n)}}function ov(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if($t(t,n))return;Qp.set(n),i.uniformMatrix3fv(this.addr,!1,Qp),Zt(t,n)}}function cv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if($t(t,n))return;Zp.set(n),i.uniformMatrix4fv(this.addr,!1,Zp),Zt(t,n)}}function lv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function hv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2iv(this.addr,e),Zt(t,e)}}function uv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;i.uniform3iv(this.addr,e),Zt(t,e)}}function dv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4iv(this.addr,e),Zt(t,e)}}function fv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function pv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2uiv(this.addr,e),Zt(t,e)}}function mv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;i.uniform3uiv(this.addr,e),Zt(t,e)}}function gv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4uiv(this.addr,e),Zt(t,e)}}function bv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(qu.compareFunction=t.isReversedDepthBuffer()?Rl:El,r=qu):r=mm,t.setTexture2D(e||r,s)}function _v(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||bm,s)}function xv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||_m,s)}function vv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||gm,s)}function yv(i){switch(i){case 5126:return nv;case 35664:return iv;case 35665:return sv;case 35666:return rv;case 35674:return av;case 35675:return ov;case 35676:return cv;case 5124:case 35670:return lv;case 35667:case 35671:return hv;case 35668:case 35672:return uv;case 35669:case 35673:return dv;case 5125:return fv;case 36294:return pv;case 36295:return mv;case 36296:return gv;case 35678:case 36198:case 36298:case 36306:case 35682:return bv;case 35679:case 36299:case 36307:return _v;case 35680:case 36300:case 36308:case 36293:return xv;case 36289:case 36303:case 36311:case 36292:return vv}}function Mv(i,e){i.uniform1fv(this.addr,e)}function Sv(i,e){let t=sa(e,this.size,2);i.uniform2fv(this.addr,t)}function Tv(i,e){let t=sa(e,this.size,3);i.uniform3fv(this.addr,t)}function wv(i,e){let t=sa(e,this.size,4);i.uniform4fv(this.addr,t)}function Av(i,e){let t=sa(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ev(i,e){let t=sa(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Rv(i,e){let t=sa(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Cv(i,e){i.uniform1iv(this.addr,e)}function Pv(i,e){i.uniform2iv(this.addr,e)}function Iv(i,e){i.uniform3iv(this.addr,e)}function Lv(i,e){i.uniform4iv(this.addr,e)}function Dv(i,e){i.uniform1uiv(this.addr,e)}function Nv(i,e){i.uniform2uiv(this.addr,e)}function Fv(i,e){i.uniform3uiv(this.addr,e)}function Uv(i,e){i.uniform4uiv(this.addr,e)}function Ov(i,e,t){let n=this.cache,s=e.length,r=Dl(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Zt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=qu:a=mm;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Bv(i,e,t){let n=this.cache,s=e.length,r=Dl(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Zt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||bm,r[a])}function kv(i,e,t){let n=this.cache,s=e.length,r=Dl(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Zt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||_m,r[a])}function zv(i,e,t){let n=this.cache,s=e.length,r=Dl(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Zt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||gm,r[a])}function Gv(i){switch(i){case 5126:return Mv;case 35664:return Sv;case 35665:return Tv;case 35666:return wv;case 35674:return Av;case 35675:return Ev;case 35676:return Rv;case 5124:case 35670:return Cv;case 35667:case 35671:return Pv;case 35668:case 35672:return Iv;case 35669:case 35673:return Lv;case 5125:return Dv;case 36294:return Nv;case 36295:return Fv;case 36296:return Uv;case 35678:case 36198:case 36298:case 36306:case 35682:return Ov;case 35679:case 36299:case 36307:return Bv;case 35680:case 36300:case 36308:case 36293:return kv;case 36289:case 36303:case 36311:case 36292:return zv}}var Xu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=yv(t.type)}},ju=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Gv(t.type)}},Ku=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Hu=/(\w+)(\])?(\[|\.)?/g;function tm(i,e){i.seq.push(e),i.map[e.id]=e}function Vv(i,e,t){let n=i.name,s=n.length;for(Hu.lastIndex=0;;){let r=Hu.exec(n),a=Hu.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){tm(t,l===void 0?new Xu(o,i,e):new ju(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Ku(o),tm(t,d)),t=d}}}var na=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Vv(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function nm(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Hv=37297,Wv=0;function qv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var im=new nt;function Xv(i){ot._getMatrix(im,ot.workingColorSpace,i);let e=`mat3( ${im.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(i)){case Ia:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return Xe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function sm(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+qv(i.getShaderSource(e),o)}else return r}function jv(i,e){let t=Xv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Kv={[uu]:"Linear",[du]:"Reinhard",[fu]:"Cineon",[pu]:"ACESFilmic",[gu]:"AgX",[bu]:"Neutral",[mu]:"Custom"};function Yv(i,e){let t=Kv[e];return t===void 0?(Xe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Pl=new C;function Jv(){ot.getLuminanceCoefficients(Pl);let i=Pl.x.toFixed(4),e=Pl.y.toFixed(4),t=Pl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $v(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mo).join(`
`)}function Zv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Qv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Mo(i){return i!==""}function rm(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function am(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ey=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yu(i){return i.replace(ey,ny)}var ty=new Map;function ny(i,e){let t=at[e];if(t===void 0){let n=ty.get(e);if(n!==void 0)t=at[n],Xe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Yu(t)}var iy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function om(i){return i.replace(iy,sy)}function sy(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function cm(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var ry={[co]:"SHADOWMAP_TYPE_PCF",[Kr]:"SHADOWMAP_TYPE_VSM"};function ay(i){return ry[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var oy={[_s]:"ENVMAP_TYPE_CUBE",[js]:"ENVMAP_TYPE_CUBE",[ho]:"ENVMAP_TYPE_CUBE_UV"};function cy(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":oy[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var ly={[js]:"ENVMAP_MODE_REFRACTION"};function hy(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":ly[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var uy={[hu]:"ENVMAP_BLENDING_MULTIPLY",[Mp]:"ENVMAP_BLENDING_MIX",[Sp]:"ENVMAP_BLENDING_ADD"};function dy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":uy[i.combine]||"ENVMAP_BLENDING_NONE"}function fy(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function py(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=ay(t),l=cy(t),h=hy(t),d=dy(t),u=fy(t),f=$v(t),g=Zv(r),b=s.createProgram(),m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Mo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Mo).join(`
`),p.length>0&&(p+=`
`)):(m=[cm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mo).join(`
`),p=[cm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==On?"#define TONE_MAPPING":"",t.toneMapping!==On?at.tonemapping_pars_fragment:"",t.toneMapping!==On?Yv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,jv("linearToOutputTexel",t.outputColorSpace),Jv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Mo).join(`
`)),a=Yu(a),a=rm(a,t),a=am(a,t),o=Yu(o),o=rm(o,t),o=am(o,t),a=om(a),o=om(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Eu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Eu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=v+m+a,_=v+p+o,y=nm(s,s.VERTEX_SHADER,S),T=nm(s,s.FRAGMENT_SHADER,_);s.attachShader(b,y),s.attachShader(b,T),t.index0AttributeName!==void 0?s.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function E(I){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(b)||"",U=s.getShaderInfoLog(y)||"",L=s.getShaderInfoLog(T)||"",B=N.trim(),Y=U.trim(),W=L.trim(),j=!0,G=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,b,y,T);else{let V=sm(s,y,"vertex"),J=sm(s,T,"fragment");Ze("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+B+`
`+V+`
`+J)}else B!==""?Xe("WebGLProgram: Program Info Log:",B):(Y===""||W==="")&&(G=!1);G&&(I.diagnostics={runnable:j,programLog:B,vertexShader:{log:Y,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(y),s.deleteShader(T),x=new na(s,b),A=Qv(s,b)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let A;this.getAttributes=function(){return A===void 0&&E(this),A};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(b,Hv)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Wv++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=y,this.fragmentShader=T,this}var my=0,Ju=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new $u(e),t.set(e,n)),n}},$u=class{constructor(e){this.id=my++,this.code=e,this.usedTimes=0}};function gy(i){return i===vs||i===go||i===bo}function by(i,e,t,n,s,r){let a=new Na,o=new Ju,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function b(x,A,P,I,N,U){let L=I.fog,B=N.geometry,Y=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,j=e.get(x.envMap||Y,W),G=j&&j.mapping===ho?j.image.height:null,V=f[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&Xe("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let J=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,pe=J!==void 0?J.length:0,be=0;B.morphAttributes.position!==void 0&&(be=1),B.morphAttributes.normal!==void 0&&(be=2),B.morphAttributes.color!==void 0&&(be=3);let ke,ae,ve,z;if(V){let wt=xi[V];ke=wt.vertexShader,ae=wt.fragmentShader}else{ke=x.vertexShader,ae=x.fragmentShader;let wt=o.getVertexShaderStage(x),mt=o.getFragmentShaderStage(x);o.update(x,wt,mt),ve=wt.id,z=mt.id}let q=i.getRenderTarget(),ie=i.state.buffers.depth.getReversed(),le=N.isInstancedMesh===!0,me=N.isBatchedMesh===!0,ue=!!x.map,ze=!!x.matcap,Z=!!j,se=!!x.aoMap,he=!!x.lightMap,fe=!!x.bumpMap&&x.wireframe===!1,ge=!!x.normalMap,Fe=!!x.displacementMap,Le=!!x.emissiveMap,Ne=!!x.metalnessMap,je=!!x.roughnessMap,D=x.anisotropy>0,tt=x.clearcoat>0,it=x.dispersion>0,R=x.retroreflectivity>0,M=x.iridescence>0,k=x.sheen>0,K=x.transmission>0,te=D&&!!x.anisotropyMap,_e=tt&&!!x.clearcoatMap,xe=tt&&!!x.clearcoatNormalMap,ee=tt&&!!x.clearcoatRoughnessMap,ce=M&&!!x.iridescenceMap,Te=M&&!!x.iridescenceThicknessMap,He=k&&!!x.sheenColorMap,we=k&&!!x.sheenRoughnessMap,Me=!!x.specularMap,Ge=!!x.specularColorMap,Ke=!!x.specularIntensityMap,Qe=K&&!!x.transmissionMap,O=K&&!!x.thicknessMap,Ae=!!x.gradientMap,ne=!!x.alphaMap,Se=x.alphaTest>0,Ce=!!x.alphaHash,de=!!x.extensions,Ve=On;x.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Ve=i.toneMapping);let Oe={shaderID:V,shaderType:x.type,shaderName:x.name,vertexShader:ke,fragmentShader:ae,defines:x.defines,customVertexShaderID:ve,customFragmentShaderID:z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:me,batchingColor:me&&N._colorsTexture!==null,instancing:le,instancingColor:le&&N.instanceColor!==null,instancingMorph:le&&N.morphTexture!==null,outputColorSpace:q===null?i.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:ot.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ue,matcap:ze,envMap:Z,envMapMode:Z&&j.mapping,envMapCubeUVHeight:G,aoMap:se,lightMap:he,bumpMap:fe,normalMap:ge,displacementMap:Fe,emissiveMap:Le,normalMapObjectSpace:ge&&x.normalMapType===Ep,normalMapTangentSpace:ge&&x.normalMapType===Al,packedNormalMap:ge&&x.normalMapType===Al&&gy(x.normalMap.format),metalnessMap:Ne,roughnessMap:je,anisotropy:D,anisotropyMap:te,clearcoat:tt,clearcoatMap:_e,clearcoatNormalMap:xe,clearcoatRoughnessMap:ee,dispersion:it,retroreflection:R,iridescence:M,iridescenceMap:ce,iridescenceThicknessMap:Te,sheen:k,sheenColorMap:He,sheenRoughnessMap:we,specularMap:Me,specularColorMap:Ge,specularIntensityMap:Ke,transmission:K,transmissionMap:Qe,thicknessMap:O,gradientMap:Ae,opaque:x.transparent===!1&&x.blending===Yr&&x.alphaToCoverage===!1,alphaMap:ne,alphaTest:Se,alphaHash:Ce,combine:x.combine,mapUv:ue&&g(x.map.channel),aoMapUv:se&&g(x.aoMap.channel),lightMapUv:he&&g(x.lightMap.channel),bumpMapUv:fe&&g(x.bumpMap.channel),normalMapUv:ge&&g(x.normalMap.channel),displacementMapUv:Fe&&g(x.displacementMap.channel),emissiveMapUv:Le&&g(x.emissiveMap.channel),metalnessMapUv:Ne&&g(x.metalnessMap.channel),roughnessMapUv:je&&g(x.roughnessMap.channel),anisotropyMapUv:te&&g(x.anisotropyMap.channel),clearcoatMapUv:_e&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:xe&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:He&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:we&&g(x.sheenRoughnessMap.channel),specularMapUv:Me&&g(x.specularMap.channel),specularColorMapUv:Ge&&g(x.specularColorMap.channel),specularIntensityMapUv:Ke&&g(x.specularIntensityMap.channel),transmissionMapUv:Qe&&g(x.transmissionMap.channel),thicknessMapUv:O&&g(x.thicknessMap.channel),alphaMapUv:ne&&g(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ge||D),vertexNormals:!!B.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!B.attributes.uv&&(ue||ne),fog:!!L,useFog:x.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||B.attributes.normal===void 0&&ge===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ie,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:be,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ve,decodeVideoTexture:ue&&x.map.isVideoTexture===!0&&ot.getTransfer(x.map.colorSpace)===vt,decodeVideoTextureEmissive:Le&&x.emissiveMap.isVideoTexture===!0&&ot.getTransfer(x.emissiveMap.colorSpace)===vt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===_n,flipSided:x.side===sn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:de&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(de&&x.extensions.multiDraw===!0||me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Oe.vertexUv1s=c.has(1),Oe.vertexUv2s=c.has(2),Oe.vertexUv3s=c.has(3),c.clear(),Oe}function m(x){let A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)A.push(P),A.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(p(A,x),v(A,x),A.push(i.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function p(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numSunLights),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numSunLightShadows),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function v(x,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function S(x){let A=f[x.type],P;if(A){let I=xi[A];P=Js.clone(I.uniforms)}else P=x.uniforms;return P}function _(x,A){let P=h.get(A);return P!==void 0?++P.usedTimes:(P=new py(i,A,x,s),l.push(P),h.set(A,P)),P}function y(x){if(--x.usedTimes===0){let A=l.indexOf(x);l[A]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function E(){o.dispose()}return{getParameters:b,getProgramCacheKey:m,getUniforms:S,acquireProgram:_,releaseProgram:y,releaseShaderCache:T,programs:l,dispose:E}}function _y(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function xy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function lm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function hm(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,b,m,p){let v=i[e];return v===void 0?(v={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:b,renderOrder:u.renderOrder,z:m,group:p},i[e]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=g,v.materialVariant=a(u),v.groupOrder=b,v.renderOrder=u.renderOrder,v.z=m,v.group=p),e++,v}function c(u,f,g,b,m,p,v){v.reversedDepth===!0&&(m=-m);let S=o(u,f,g,b,m,p);g.transmission>0?n.push(S):g.transparent===!0?s.push(S):t.push(S)}function l(u,f,g,b,m,p){let v=o(u,f,g,b,m,p);g.transmission>0?n.unshift(v):g.transparent===!0?s.unshift(v):t.unshift(v)}function h(u,f){t.length>1&&t.sort(u||xy),n.length>1&&n.sort(f||lm),s.length>1&&s.sort(f||lm)}function d(){for(let u=e,f=i.length;u<f;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function vy(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new hm,i.set(n,[a])):s>=r.length?(a=new hm,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function yy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new C,color:new We};break;case"SpotLight":t={position:new C,direction:new C,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function My(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Sy=0;function Ty(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function wy(i){let e=new yy,t=My(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new C);let s=new C,r=new et,a=new et;function o(l){let h=0,d=0,u=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let f=0,g=0,b=0,m=0,p=0,v=0,S=0,_=0,y=0,T=0,E=0,x=0,A=0,P=0;l.sort(Ty);for(let N=0,U=l.length;N<U;N++){let L=l[N],B=L.color,Y=L.intensity,W=L.distance,j=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===vs?j=L.shadow.map.texture:j=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=B.r*Y,d+=B.g*Y,u+=B.b*Y;else if(L.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(L.sh.coefficients[G],Y);P++}else if(L.isSunLight){let G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let V=L.shadow,J=t.get(L);J.shadowIntensity=V.intensity,J.shadowBias=V.bias,J.shadowNormalBias=V.normalBias,J.shadowRadius=V.radius,J.shadowMapSize.copy(V.mapSize).multiply(V.getFrameExtents()),n.sunShadow[g]=J,n.sunShadowMap[g]=j;let pe=V.getViewportCount();for(let be=0;be<pe;be++)n.sunShadowMatrix[b+be]=V.getMatrix(be),n.sunShadowCascade[b+be]=V._cascadeData[be];b+=pe,g++}n.sun[f]=G,f++}else if(L.isDirectionalLight){let G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let V=L.shadow,J=t.get(L);J.shadowIntensity=V.intensity,J.shadowBias=V.bias,J.shadowNormalBias=V.normalBias,J.shadowRadius=V.radius,J.shadowMapSize=V.mapSize,n.directionalShadow[m]=J,n.directionalShadowMap[m]=j,n.directionalShadowMatrix[m]=L.shadow.matrix,y++}n.directional[m]=G,m++}else if(L.isSpotLight){let G=e.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(B).multiplyScalar(Y),G.distance=W,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,n.spot[v]=G;let V=L.shadow;if(L.map&&(n.spotLightMap[x]=L.map,x++,V.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[v]=V.matrix,L.castShadow){let J=t.get(L);J.shadowIntensity=V.intensity,J.shadowBias=V.bias,J.shadowNormalBias=V.normalBias,J.shadowRadius=V.radius,J.shadowMapSize=V.mapSize,n.spotShadow[v]=J,n.spotShadowMap[v]=j,E++}v++}else if(L.isRectAreaLight){let G=e.get(L);G.color.copy(B).multiplyScalar(Y),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),n.rectArea[S]=G,S++}else if(L.isPointLight){let G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),G.distance=L.distance,G.decay=L.decay,L.castShadow){let V=L.shadow,J=t.get(L);J.shadowIntensity=V.intensity,J.shadowBias=V.bias,J.shadowNormalBias=V.normalBias,J.shadowRadius=V.radius,J.shadowMapSize=V.mapSize,J.shadowCameraNear=V.camera.near,J.shadowCameraFar=V.camera.far,n.pointShadow[p]=J,n.pointShadowMap[p]=j,n.pointShadowMatrix[p]=L.shadow.matrix,T++}n.point[p]=G,p++}else if(L.isHemisphereLight){let G=e.get(L);G.skyColor.copy(L.color).multiplyScalar(Y),G.groundColor.copy(L.groundColor).multiplyScalar(Y),n.hemi[_]=G,_++}}S>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pe.LTC_FLOAT_1,n.rectAreaLTC2=Pe.LTC_FLOAT_2):(n.rectAreaLTC1=Pe.LTC_HALF_1,n.rectAreaLTC2=Pe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let I=n.hash;(I.sunLength!==f||I.directionalLength!==m||I.pointLength!==p||I.spotLength!==v||I.rectAreaLength!==S||I.hemiLength!==_||I.numSunShadows!==g||I.numDirectionalShadows!==y||I.numPointShadows!==T||I.numSpotShadows!==E||I.numSpotMaps!==x||I.numLightProbes!==P)&&(n.sun.length=f,n.directional.length=m,n.spot.length=v,n.rectArea.length=S,n.point.length=p,n.hemi.length=_,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+x-A,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=P,I.sunLength=f,I.directionalLength=m,I.pointLength=p,I.spotLength=v,I.rectAreaLength=S,I.hemiLength=_,I.numSunShadows=g,I.numDirectionalShadows=y,I.numPointShadows=T,I.numSpotShadows=E,I.numSpotMaps=x,I.numLightProbes=P,n.version=Sy++)}function c(l,h){let d=0,u=0,f=0,g=0,b=0,m=0,p=h.matrixWorldInverse;for(let v=0,S=l.length;v<S;v++){let _=l[v];if(_.isSunLight){let y=n.sun[d];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(p),d++}else if(_.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),u++}else if(_.isSpotLight){let y=n.spot[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),g++}else if(_.isRectAreaLight){let y=n.rectArea[b];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(p),a.identity(),r.copy(_.matrixWorld),r.premultiply(p),a.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),b++}else if(_.isPointLight){let y=n.point[f];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){let y=n.hemi[m];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:n}}function um(i){let e=new wy(i),t=[],n=[],s=[];function r(u){d.camera=u,t.length=0,n.length=0,s.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function c(u){s.push(u)}function l(){e.setup(t)}function h(u){e.setupView(t,u)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Ay(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new um(i),e.set(s,[o])):r>=a.length?(o=new um(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Ey=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ry=`uniform sampler2D shadow_pass;
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
}`,Cy=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],Py=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],dm=new et,yo=new C,Wu=new C;function Iy(i,e,t){let n=new Or,s=new oe,r=new oe,a=new _t,o=new Cc,c=new Pc,l={},h=t.maxTextureSize,d={[Un]:sn,[sn]:Un,[_n]:_n},u=new Nt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:Ey,fragmentShader:Ry}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new St;g.setAttribute("position",new Ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Pt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=co;let p=this.type;this.render=function(T,E,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===ap&&(Xe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=co);let A=i.getRenderTarget(),P=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Xn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let U=p!==this.type;U&&E.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(B=>B.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,B=T.length;L<B;L++){let Y=T[L],W=Y.shadow;if(W===void 0){Xe("WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let j=W.getFrameExtents();s.multiply(j),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,W.mapSize.y=r.y));let G=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=G,W.map===null||U===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Kr){if(Y.isPointLight){Xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Bt(s.x,s.y,{format:vs,type:Wt,minFilter:Vt,magFilter:Vt,generateMipmaps:!1}),W.map.texture.name=Y.name+".shadowMap",W.map.depthTexture=new us(s.x,s.y,Bn),W.map.depthTexture.name=Y.name+".shadowMapDepth",W.map.depthTexture.format=pi,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Gt,W.map.depthTexture.magFilter=Gt}else Y.isPointLight?(W.map=new Zs(s.x),W.map.depthTexture=new Mc(s.x,ri)):(W.map=new Bt(s.x,s.y),W.map.depthTexture=new us(s.x,s.y,ri)),W.map.depthTexture.name=Y.name+".shadowMap",W.map.depthTexture.format=pi,this.type===co?(W.map.depthTexture.compareFunction=G?Rl:El,W.map.depthTexture.minFilter=Vt,W.map.depthTexture.magFilter=Vt):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Gt,W.map.depthTexture.magFilter=Gt);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let V=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();Y.isPointLight!==!0&&W.updateMatrices(Y,x);for(let J=0;J<V;J++){let pe=W.getCamera(J);if(Y.isPointLight){let be=W.camera,ke=W.matrix,ae=Y.distance||be.far;ae!==be.far&&(be.far=ae,be.updateProjectionMatrix()),yo.setFromMatrixPosition(Y.matrixWorld),be.position.copy(yo),Wu.copy(be.position),Wu.add(Cy[J]),be.up.copy(Py[J]),be.lookAt(Wu),be.updateMatrixWorld(),ke.makeTranslation(-yo.x,-yo.y,-yo.z),dm.multiplyMatrices(be.projectionMatrix,be.matrixWorldInverse),W._frustum.setFromProjectionMatrix(dm,be.coordinateSystem,be.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,J),i.clear();else{J===0&&(i.setRenderTarget(W.map),i.clear());let be=W.getViewport(J);a.set(r.x*be.x,r.y*be.y,r.x*be.z,r.y*be.w),N.viewport(a)}n=W.getFrustum(J),_(E,x,pe,Y,this.type)}W.isPointLightShadow!==!0&&this.type===Kr&&v(W,x),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(A,P,I)};function v(T,E){let x=e.update(b);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new Bt(s.x,s.y,{format:vs,type:Wt}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(E,null,x,u,b,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(E,null,x,f,b,null)}function S(T,E,x,A){let P=null,I=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)P=I;else if(P=x.isPointLight===!0?c:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let N=P.uuid,U=E.uuid,L=l[N];L===void 0&&(L={},l[N]=L);let B=L[U];B===void 0&&(B=P.clone(),L[U]=B,E.addEventListener("dispose",y)),P=B}if(P.visible=E.visible,P.wireframe=E.wireframe,A===Kr?P.side=E.shadowSide!==null?E.shadowSide:E.side:P.side=E.shadowSide!==null?E.shadowSide:d[E.side],P.alphaMap=E.alphaMap,P.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,P.map=E.map,P.clipShadows=E.clipShadows,P.clippingPlanes=E.clippingPlanes,P.clipIntersection=E.clipIntersection,P.displacementMap=E.displacementMap,P.displacementScale=E.displacementScale,P.displacementBias=E.displacementBias,P.wireframeLinewidth=E.wireframeLinewidth,P.linewidth=E.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let N=i.properties.get(P);N.light=x}return P}function _(T,E,x,A,P){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===Kr)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);let U=e.update(T),L=T.material;if(Array.isArray(L)){let B=U.groups;for(let Y=0,W=B.length;Y<W;Y++){let j=B[Y],G=L[j.materialIndex];if(G&&G.visible){let V=S(T,G,A,P);T.onBeforeShadow(i,T,E,x,U,V,j),i.renderBufferDirect(x,null,U,V,T,j),T.onAfterShadow(i,T,E,x,U,V,j)}}}else if(L.visible){let B=S(T,L,A,P);T.onBeforeShadow(i,T,E,x,U,B,null),i.renderBufferDirect(x,null,U,B,T,null),T.onAfterShadow(i,T,E,x,U,B,null)}}let N=T.children;for(let U=0,L=N.length;U<L;U++)_(N[U],E,x,A,P)}function y(T){T.target.removeEventListener("dispose",y);for(let x in l){let A=l[x],P=T.target.uuid;P in A&&(A[P].dispose(),delete A[P])}}}function Ly(i,e){function t(){let O=!1,Ae=new _t,ne=null,Se=new _t(0,0,0,0);return{setMask:function(Ce){ne!==Ce&&!O&&(i.colorMask(Ce,Ce,Ce,Ce),ne=Ce)},setLocked:function(Ce){O=Ce},setClear:function(Ce,de,Ve,Oe,wt){wt===!0&&(Ce*=Oe,de*=Oe,Ve*=Oe),Ae.set(Ce,de,Ve,Oe),Se.equals(Ae)===!1&&(i.clearColor(Ce,de,Ve,Oe),Se.copy(Ae))},reset:function(){O=!1,ne=null,Se.set(-1,0,0,0)}}}function n(){let O=!1,Ae=!1,ne=null,Se=null,Ce=null;return{setReversed:function(de){if(Ae!==de){let Ve=e.get("EXT_clip_control");de?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),Ae=de;let Oe=Ce;Ce=null,this.setClear(Oe)}},getReversed:function(){return Ae},setTest:function(de){de?q(i.DEPTH_TEST):ie(i.DEPTH_TEST)},setMask:function(de){ne!==de&&!O&&(i.depthMask(de),ne=de)},setFunc:function(de){if(Ae&&(de=Bp[de]),Se!==de){switch(de){case hc:i.depthFunc(i.NEVER);break;case uc:i.depthFunc(i.ALWAYS);break;case dc:i.depthFunc(i.LESS);break;case wr:i.depthFunc(i.LEQUAL);break;case fc:i.depthFunc(i.EQUAL);break;case pc:i.depthFunc(i.GEQUAL);break;case mc:i.depthFunc(i.GREATER);break;case gc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Se=de}},setLocked:function(de){O=de},setClear:function(de){Ce!==de&&(Ce=de,Ae&&(de=1-de),i.clearDepth(de))},reset:function(){O=!1,ne=null,Se=null,Ce=null,Ae=!1}}}function s(){let O=!1,Ae=null,ne=null,Se=null,Ce=null,de=null,Ve=null,Oe=null,wt=null;return{setTest:function(mt){O||(mt?q(i.STENCIL_TEST):ie(i.STENCIL_TEST))},setMask:function(mt){Ae!==mt&&!O&&(i.stencilMask(mt),Ae=mt)},setFunc:function(mt,Cn,Gn){(ne!==mt||Se!==Cn||Ce!==Gn)&&(i.stencilFunc(mt,Cn,Gn),ne=mt,Se=Cn,Ce=Gn)},setOp:function(mt,Cn,Gn){(de!==mt||Ve!==Cn||Oe!==Gn)&&(i.stencilOp(mt,Cn,Gn),de=mt,Ve=Cn,Oe=Gn)},setLocked:function(mt){O=mt},setClear:function(mt){wt!==mt&&(i.clearStencil(mt),wt=mt)},reset:function(){O=!1,Ae=null,ne=null,Se=null,Ce=null,de=null,Ve=null,Oe=null,wt=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],b=null,m=!1,p=null,v=null,S=null,_=null,y=null,T=null,E=null,x=new We(0,0,0),A=0,P=!1,I=null,N=null,U=null,L=null,B=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,j=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(G)[1]),W=j>=1):G.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),W=j>=2);let V=null,J={},pe=i.getParameter(i.SCISSOR_BOX),be=i.getParameter(i.VIEWPORT),ke=new _t().fromArray(pe),ae=new _t().fromArray(be);function ve(O,Ae,ne,Se){let Ce=new Uint8Array(4),de=i.createTexture();i.bindTexture(O,de),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ve=0;Ve<ne;Ve++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(Ae,0,i.RGBA,1,1,Se,0,i.RGBA,i.UNSIGNED_BYTE,Ce):i.texImage2D(Ae+Ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ce);return de}let z={};z[i.TEXTURE_2D]=ve(i.TEXTURE_2D,i.TEXTURE_2D,1),z[i.TEXTURE_CUBE_MAP]=ve(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),z[i.TEXTURE_2D_ARRAY]=ve(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),z[i.TEXTURE_3D]=ve(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),q(i.DEPTH_TEST),a.setFunc(wr),fe(!1),ge(ru),q(i.CULL_FACE),se(Xn);function q(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function ie(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function le(O,Ae){return u[O]!==Ae?(i.bindFramebuffer(O,Ae),u[O]=Ae,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Ae),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Ae),!0):!1}function me(O,Ae){let ne=g,Se=!1;if(O){ne=f.get(Ae),ne===void 0&&(ne=[],f.set(Ae,ne));let Ce=O.textures;if(ne.length!==Ce.length||ne[0]!==i.COLOR_ATTACHMENT0){for(let de=0,Ve=Ce.length;de<Ve;de++)ne[de]=i.COLOR_ATTACHMENT0+de;ne.length=Ce.length,Se=!0}}else ne[0]!==i.BACK&&(ne[0]=i.BACK,Se=!0);Se&&i.drawBuffers(ne)}function ue(O){return b!==O?(i.useProgram(O),b=O,!0):!1}let ze={[jn]:i.FUNC_ADD,[op]:i.FUNC_SUBTRACT,[cp]:i.FUNC_REVERSE_SUBTRACT};ze[lp]=i.MIN,ze[hp]=i.MAX;let Z={[Xs]:i.ZERO,[xn]:i.ONE,[up]:i.SRC_COLOR,[cu]:i.SRC_ALPHA,[bp]:i.SRC_ALPHA_SATURATE,[mp]:i.DST_COLOR,[fp]:i.DST_ALPHA,[dp]:i.ONE_MINUS_SRC_COLOR,[lu]:i.ONE_MINUS_SRC_ALPHA,[gp]:i.ONE_MINUS_DST_COLOR,[pp]:i.ONE_MINUS_DST_ALPHA,[_p]:i.CONSTANT_COLOR,[xp]:i.ONE_MINUS_CONSTANT_COLOR,[vp]:i.CONSTANT_ALPHA,[yp]:i.ONE_MINUS_CONSTANT_ALPHA};function se(O,Ae,ne,Se,Ce,de,Ve,Oe,wt,mt){if(O===Xn){m===!0&&(ie(i.BLEND),m=!1);return}if(m===!1&&(q(i.BLEND),m=!0),O!==qs){if(O!==p||mt!==P){if((v!==jn||y!==jn)&&(i.blendEquation(i.FUNC_ADD),v=jn,y=jn),mt)switch(O){case Yr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lo:i.blendFunc(i.ONE,i.ONE);break;case au:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ou:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ze("WebGLState: Invalid blending: ",O);break}else switch(O){case Yr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case au:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ou:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",O);break}S=null,_=null,T=null,E=null,x.set(0,0,0),A=0,p=O,P=mt}return}Ce=Ce||Ae,de=de||ne,Ve=Ve||Se,(Ae!==v||Ce!==y)&&(i.blendEquationSeparate(ze[Ae],ze[Ce]),v=Ae,y=Ce),(ne!==S||Se!==_||de!==T||Ve!==E)&&(i.blendFuncSeparate(Z[ne],Z[Se],Z[de],Z[Ve]),S=ne,_=Se,T=de,E=Ve),(Oe.equals(x)===!1||wt!==A)&&(i.blendColor(Oe.r,Oe.g,Oe.b,wt),x.copy(Oe),A=wt),p=O,P=!1}function he(O,Ae){O.side===_n?ie(i.CULL_FACE):q(i.CULL_FACE);let ne=O.side===sn;Ae&&(ne=!ne),fe(ne),O.blending===Yr&&O.transparent===!1?se(Xn):se(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let Se=O.stencilWrite;o.setTest(Se),Se&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Le(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?q(i.SAMPLE_ALPHA_TO_COVERAGE):ie(i.SAMPLE_ALPHA_TO_COVERAGE)}function fe(O){I!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),I=O)}function ge(O){O!==sp?(q(i.CULL_FACE),O!==N&&(O===ru?i.cullFace(i.BACK):O===rp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ie(i.CULL_FACE),N=O}function Fe(O){O!==U&&(W&&i.lineWidth(O),U=O)}function Le(O,Ae,ne){O?(q(i.POLYGON_OFFSET_FILL),(L!==Ae||B!==ne)&&(L=Ae,B=ne,a.getReversed()&&(Ae=-Ae),i.polygonOffset(Ae,ne))):ie(i.POLYGON_OFFSET_FILL)}function Ne(O){O?q(i.SCISSOR_TEST):ie(i.SCISSOR_TEST)}function je(O){O===void 0&&(O=i.TEXTURE0+Y-1),V!==O&&(i.activeTexture(O),V=O)}function D(O,Ae,ne){ne===void 0&&(V===null?ne=i.TEXTURE0+Y-1:ne=V);let Se=J[ne];Se===void 0&&(Se={type:void 0,texture:void 0},J[ne]=Se),(Se.type!==O||Se.texture!==Ae)&&(V!==ne&&(i.activeTexture(ne),V=ne),i.bindTexture(O,Ae||z[O]),Se.type=O,Se.texture=Ae)}function tt(){let O=J[V];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function it(){try{i.compressedTexImage2D(...arguments)}catch(O){Ze("WebGLState:",O)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(O){Ze("WebGLState:",O)}}function M(){try{i.texSubImage2D(...arguments)}catch(O){Ze("WebGLState:",O)}}function k(){try{i.texSubImage3D(...arguments)}catch(O){Ze("WebGLState:",O)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(O){Ze("WebGLState:",O)}}function te(){try{i.compressedTexSubImage3D(...arguments)}catch(O){Ze("WebGLState:",O)}}function _e(){try{i.texStorage2D(...arguments)}catch(O){Ze("WebGLState:",O)}}function xe(){try{i.texStorage3D(...arguments)}catch(O){Ze("WebGLState:",O)}}function ee(){try{i.texImage2D(...arguments)}catch(O){Ze("WebGLState:",O)}}function ce(){try{i.texImage3D(...arguments)}catch(O){Ze("WebGLState:",O)}}function Te(O){return d[O]!==void 0?d[O]:i.getParameter(O)}function He(O,Ae){d[O]!==Ae&&(i.pixelStorei(O,Ae),d[O]=Ae)}function we(O){ke.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),ke.copy(O))}function Me(O){ae.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),ae.copy(O))}function Ge(O,Ae){let ne=l.get(Ae);ne===void 0&&(ne=new WeakMap,l.set(Ae,ne));let Se=ne.get(O);Se===void 0&&(Se=i.getUniformBlockIndex(Ae,O.name),ne.set(O,Se))}function Ke(O,Ae){let Se=l.get(Ae).get(O);c.get(Ae)!==Se&&(i.uniformBlockBinding(Ae,Se,O.__bindingPointIndex),c.set(Ae,Se))}function Qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},V=null,J={},u={},f=new WeakMap,g=[],b=null,m=!1,p=null,v=null,S=null,_=null,y=null,T=null,E=null,x=new We(0,0,0),A=0,P=!1,I=null,N=null,U=null,L=null,B=null,ke.set(0,0,i.canvas.width,i.canvas.height),ae.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:q,disable:ie,bindFramebuffer:le,drawBuffers:me,useProgram:ue,setBlending:se,setMaterial:he,setFlipSided:fe,setCullFace:ge,setLineWidth:Fe,setPolygonOffset:Le,setScissorTest:Ne,activeTexture:je,bindTexture:D,unbindTexture:tt,compressedTexImage2D:it,compressedTexImage3D:R,texImage2D:ee,texImage3D:ce,pixelStorei:He,getParameter:Te,updateUBOMapping:Ge,uniformBlockBinding:Ke,texStorage2D:_e,texStorage3D:xe,texSubImage2D:M,texSubImage3D:k,compressedTexSubImage2D:K,compressedTexSubImage3D:te,scissor:we,viewport:Me,reset:Qe}}function Dy(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new oe,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(R,M){return g?new OffscreenCanvas(R,M):Rr("canvas")}function m(R,M,k){let K=1,te=it(R);if((te.width>k||te.height>k)&&(K=k/Math.max(te.width,te.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let _e=Math.floor(K*te.width),xe=Math.floor(K*te.height);u===void 0&&(u=b(_e,xe));let ee=M?b(_e,xe):u;return ee.width=_e,ee.height=xe,ee.getContext("2d").drawImage(R,0,0,_e,xe),Xe("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+_e+"x"+xe+")."),ee}else return"data"in R&&Xe("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),R;return R}function p(R){return R.generateMipmaps}function v(R){i.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(R,M,k,K,te,_e=!1){if(R!==null){if(i[R]!==void 0)return i[R];Xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let xe;K&&(xe=e.get("EXT_texture_norm16"),xe||Xe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=M;if(M===i.RED&&(k===i.FLOAT&&(ee=i.R32F),k===i.HALF_FLOAT&&(ee=i.R16F),k===i.UNSIGNED_BYTE&&(ee=i.R8),k===i.UNSIGNED_SHORT&&xe&&(ee=xe.R16_EXT),k===i.SHORT&&xe&&(ee=xe.R16_SNORM_EXT)),M===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(ee=i.R8UI),k===i.UNSIGNED_SHORT&&(ee=i.R16UI),k===i.UNSIGNED_INT&&(ee=i.R32UI),k===i.BYTE&&(ee=i.R8I),k===i.SHORT&&(ee=i.R16I),k===i.INT&&(ee=i.R32I)),M===i.RG&&(k===i.FLOAT&&(ee=i.RG32F),k===i.HALF_FLOAT&&(ee=i.RG16F),k===i.UNSIGNED_BYTE&&(ee=i.RG8),k===i.UNSIGNED_SHORT&&xe&&(ee=xe.RG16_EXT),k===i.SHORT&&xe&&(ee=xe.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(ee=i.RG8UI),k===i.UNSIGNED_SHORT&&(ee=i.RG16UI),k===i.UNSIGNED_INT&&(ee=i.RG32UI),k===i.BYTE&&(ee=i.RG8I),k===i.SHORT&&(ee=i.RG16I),k===i.INT&&(ee=i.RG32I)),M===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),k===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),k===i.UNSIGNED_INT&&(ee=i.RGB32UI),k===i.BYTE&&(ee=i.RGB8I),k===i.SHORT&&(ee=i.RGB16I),k===i.INT&&(ee=i.RGB32I)),M===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),k===i.UNSIGNED_INT&&(ee=i.RGBA32UI),k===i.BYTE&&(ee=i.RGBA8I),k===i.SHORT&&(ee=i.RGBA16I),k===i.INT&&(ee=i.RGBA32I)),M===i.RGB&&(k===i.UNSIGNED_SHORT&&xe&&(ee=xe.RGB16_EXT),k===i.SHORT&&xe&&(ee=xe.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(ee=i.R11F_G11F_B10F)),M===i.RGBA){let ce=_e?Ia:ot.getTransfer(te);k===i.FLOAT&&(ee=i.RGBA32F),k===i.HALF_FLOAT&&(ee=i.RGBA16F),k===i.UNSIGNED_BYTE&&(ee=ce===vt?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&xe&&(ee=xe.RGBA16_EXT),k===i.SHORT&&xe&&(ee=xe.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function y(R,M){let k;return R?M===null||M===ri||M===Zr?k=i.DEPTH24_STENCIL8:M===Bn?k=i.DEPTH32F_STENCIL8:M===$r&&(k=i.DEPTH24_STENCIL8,Xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ri||M===Zr?k=i.DEPTH_COMPONENT24:M===Bn?k=i.DEPTH_COMPONENT32F:M===$r&&(k=i.DEPTH_COMPONENT16),k}function T(R,M){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Gt&&R.minFilter!==Vt?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function E(R){let M=R.target;M.removeEventListener("dispose",E),A(M),M.isVideoTexture&&h.delete(M),M.isHTMLTexture&&d.delete(M)}function x(R){let M=R.target;M.removeEventListener("dispose",x),I(M)}function A(R){let M=n.get(R);if(M.__webglInit===void 0)return;let k=R.source,K=f.get(k);if(K){let te=K[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&P(R),Object.keys(K).length===0&&f.delete(k)}n.remove(R)}function P(R){let M=n.get(R);i.deleteTexture(M.__webglTexture);let k=R.source,K=f.get(k);delete K[M.__cacheKey],a.memory.textures--}function I(R){let M=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(M.__webglFramebuffer[K]))for(let te=0;te<M.__webglFramebuffer[K].length;te++)i.deleteFramebuffer(M.__webglFramebuffer[K][te]);else i.deleteFramebuffer(M.__webglFramebuffer[K]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[K])}else{if(Array.isArray(M.__webglFramebuffer))for(let K=0;K<M.__webglFramebuffer.length;K++)i.deleteFramebuffer(M.__webglFramebuffer[K]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let K=0;K<M.__webglColorRenderbuffer.length;K++)M.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let k=R.textures;for(let K=0,te=k.length;K<te;K++){let _e=n.get(k[K]);_e.__webglTexture&&(i.deleteTexture(_e.__webglTexture),a.memory.textures--),n.remove(k[K])}n.remove(R)}let N=0;function U(){N=0}function L(){return N}function B(R){N=R}function Y(){let R=N;return R>=s.maxTextures&&Xe("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),N+=1,R}function W(R){let M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function j(R,M){let k=n.get(R);if(R.isVideoTexture&&D(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){let K=R.image;if(K===null)Xe("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Xe("WebGLRenderer: Texture marked for update but image is incomplete");else{ie(k,R,M);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+M)}function G(R,M){let k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){ie(k,R,M);return}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+M)}function V(R,M){let k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){ie(k,R,M);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+M)}function J(R,M){let k=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&k.__version!==R.version){le(k,R,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+M)}let pe={[hs]:i.REPEAT,[Wn]:i.CLAMP_TO_EDGE,[Ar]:i.MIRRORED_REPEAT},be={[Gt]:i.NEAREST,[Vc]:i.NEAREST_MIPMAP_NEAREST,[Ks]:i.NEAREST_MIPMAP_LINEAR,[Vt]:i.LINEAR,[Jr]:i.LINEAR_MIPMAP_NEAREST,[Mn]:i.LINEAR_MIPMAP_LINEAR},ke={[Cp]:i.NEVER,[Np]:i.ALWAYS,[Pp]:i.LESS,[El]:i.LEQUAL,[Ip]:i.EQUAL,[Rl]:i.GEQUAL,[Lp]:i.GREATER,[Dp]:i.NOTEQUAL};function ae(R,M){if(M.type===Bn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Vt||M.magFilter===Jr||M.magFilter===Ks||M.magFilter===Mn||M.minFilter===Vt||M.minFilter===Jr||M.minFilter===Ks||M.minFilter===Mn)&&Xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,pe[M.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,pe[M.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,pe[M.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,be[M.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,be[M.minFilter]),M.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,ke[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Gt||M.minFilter!==Ks&&M.minFilter!==Mn||M.type===Bn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ve(R,M){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",E));let K=M.source,te=f.get(K);te===void 0&&(te={},f.set(K,te));let _e=W(M);if(_e!==R.__cacheKey){te[_e]===void 0&&(te[_e]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),te[_e].usedTimes++;let xe=te[R.__cacheKey];xe!==void 0&&(te[R.__cacheKey].usedTimes--,xe.usedTimes===0&&P(M)),R.__cacheKey=_e,R.__webglTexture=te[_e].texture}return k}function z(R,M,k){return Math.floor(Math.floor(R/k)/M)}function q(R,M,k,K){let _e=R.updateRanges;if(_e.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,k,K,M.data);else{_e.sort((He,we)=>He.start-we.start);let xe=0;for(let He=1;He<_e.length;He++){let we=_e[xe],Me=_e[He],Ge=we.start+we.count,Ke=z(Me.start,M.width,4),Qe=z(we.start,M.width,4);Me.start<=Ge+1&&Ke===Qe&&z(Me.start+Me.count-1,M.width,4)===Ke?we.count=Math.max(we.count,Me.start+Me.count-we.start):(++xe,_e[xe]=Me)}_e.length=xe+1;let ee=t.getParameter(i.UNPACK_ROW_LENGTH),ce=t.getParameter(i.UNPACK_SKIP_PIXELS),Te=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let He=0,we=_e.length;He<we;He++){let Me=_e[He],Ge=Math.floor(Me.start/4),Ke=Math.ceil(Me.count/4),Qe=Ge%M.width,O=Math.floor(Ge/M.width),Ae=Ke,ne=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Qe),t.pixelStorei(i.UNPACK_SKIP_ROWS,O),t.texSubImage2D(i.TEXTURE_2D,0,Qe,O,Ae,ne,k,K,M.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ee),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ce),t.pixelStorei(i.UNPACK_SKIP_ROWS,Te)}}function ie(R,M,k){let K=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=i.TEXTURE_3D);let te=ve(R,M),_e=M.source;t.bindTexture(K,R.__webglTexture,i.TEXTURE0+k);let xe=n.get(_e);if(_e.version!==xe.__version||te===!0){if(t.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let ne=ot.getPrimaries(ot.workingColorSpace),Se=M.colorSpace===Xi?null:ot.getPrimaries(M.colorSpace),Ce=M.colorSpace===Xi||ne===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce)}t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let ce=m(M.image,!1,s.maxTextureSize);ce=tt(M,ce);let Te=r.convert(M.format,M.colorSpace),He=r.convert(M.type),we=_(M.internalFormat,Te,He,M.normalized,M.colorSpace,M.isVideoTexture);ae(K,M);let Me,Ge=M.mipmaps,Ke=M.isVideoTexture!==!0,Qe=xe.__version===void 0||te===!0,O=_e.dataReady,Ae=T(M,ce);if(M.isDepthTexture)we=y(M.format===xs,M.type),Qe&&(Ke?t.texStorage2D(i.TEXTURE_2D,1,we,ce.width,ce.height):t.texImage2D(i.TEXTURE_2D,0,we,ce.width,ce.height,0,Te,He,null));else if(M.isDataTexture)if(Ge.length>0){Ke&&Qe&&t.texStorage2D(i.TEXTURE_2D,Ae,we,Ge[0].width,Ge[0].height);for(let ne=0,Se=Ge.length;ne<Se;ne++)Me=Ge[ne],Ke?O&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,Me.width,Me.height,Te,He,Me.data):t.texImage2D(i.TEXTURE_2D,ne,we,Me.width,Me.height,0,Te,He,Me.data);M.generateMipmaps=!1}else Ke?(Qe&&t.texStorage2D(i.TEXTURE_2D,Ae,we,ce.width,ce.height),O&&q(M,ce,Te,He)):t.texImage2D(i.TEXTURE_2D,0,we,ce.width,ce.height,0,Te,He,ce.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ke&&Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,we,Ge[0].width,Ge[0].height,ce.depth);for(let ne=0,Se=Ge.length;ne<Se;ne++)if(Me=Ge[ne],M.format!==kn)if(Te!==null)if(Ke){if(O)if(M.layerUpdates.size>0){let Ce=Du(Me.width,Me.height,M.format,M.type);for(let de of M.layerUpdates){let Ve=Me.data.subarray(de*Ce/Me.data.BYTES_PER_ELEMENT,(de+1)*Ce/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,de,Me.width,Me.height,1,Te,Ve)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,Me.width,Me.height,ce.depth,Te,Me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,we,Me.width,Me.height,ce.depth,0,Me.data,0,0);else Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?O&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,Me.width,Me.height,ce.depth,Te,He,Me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,we,Me.width,Me.height,ce.depth,0,Te,He,Me.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{Ke&&Qe&&t.texStorage2D(i.TEXTURE_2D,Ae,we,Ge[0].width,Ge[0].height);for(let ne=0,Se=Ge.length;ne<Se;ne++)Me=Ge[ne],M.format!==kn?Te!==null?Ke?O&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,Me.width,Me.height,Te,Me.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,we,Me.width,Me.height,0,Me.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?O&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,Me.width,Me.height,Te,He,Me.data):t.texImage2D(i.TEXTURE_2D,ne,we,Me.width,Me.height,0,Te,He,Me.data)}else if(M.isDataArrayTexture)if(Ke){if(Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,we,ce.width,ce.height,ce.depth),O)if(M.layerUpdates.size>0){let ne=Du(ce.width,ce.height,M.format,M.type);for(let Se of M.layerUpdates){let Ce=ce.data.subarray(Se*ne/ce.data.BYTES_PER_ELEMENT,(Se+1)*ne/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Se,ce.width,ce.height,1,Te,He,Ce)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Te,He,ce.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,we,ce.width,ce.height,ce.depth,0,Te,He,ce.data);else if(M.isData3DTexture)Ke?(Qe&&t.texStorage3D(i.TEXTURE_3D,Ae,we,ce.width,ce.height,ce.depth),O&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Te,He,ce.data)):t.texImage3D(i.TEXTURE_3D,0,we,ce.width,ce.height,ce.depth,0,Te,He,ce.data);else if(M.isFramebufferTexture){if(Qe)if(Ke)t.texStorage2D(i.TEXTURE_2D,Ae,we,ce.width,ce.height);else{let ne=ce.width,Se=ce.height;for(let Ce=0;Ce<Ae;Ce++)t.texImage2D(i.TEXTURE_2D,Ce,we,ne,Se,0,Te,He,null),ne>>=1,Se>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){let ne=i.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),ce.parentNode!==ne){ne.appendChild(ce),d.add(M),ne.onpaint=Se=>{let Ce=Se.changedElements;for(let de of d)Ce.includes(de.image)&&(de.needsUpdate=!0)},ne.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ce);else{let Ce=i.RGBA,de=i.RGBA,Ve=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ce,de,Ve,ce)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ge.length>0){if(Ke&&Qe){let ne=it(Ge[0]);t.texStorage2D(i.TEXTURE_2D,Ae,we,ne.width,ne.height)}for(let ne=0,Se=Ge.length;ne<Se;ne++)Me=Ge[ne],Ke?O&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,Te,He,Me):t.texImage2D(i.TEXTURE_2D,ne,we,Te,He,Me);M.generateMipmaps=!1}else if(Ke){if(Qe){let ne=it(ce);t.texStorage2D(i.TEXTURE_2D,Ae,we,ne.width,ne.height)}O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Te,He,ce)}else t.texImage2D(i.TEXTURE_2D,0,we,Te,He,ce);p(M)&&v(K),xe.__version=_e.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function le(R,M,k){if(M.image.length!==6)return;let K=ve(R,M),te=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+k);let _e=n.get(te);if(te.version!==_e.__version||K===!0){t.activeTexture(i.TEXTURE0+k);let xe=ot.getPrimaries(ot.workingColorSpace),ee=M.colorSpace===Xi?null:ot.getPrimaries(M.colorSpace),ce=M.colorSpace===Xi||xe===ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);let Te=M.isCompressedTexture||M.image[0].isCompressedTexture,He=M.image[0]&&M.image[0].isDataTexture,we=[];for(let de=0;de<6;de++)!Te&&!He?we[de]=m(M.image[de],!0,s.maxCubemapSize):we[de]=He?M.image[de].image:M.image[de],we[de]=tt(M,we[de]);let Me=we[0],Ge=r.convert(M.format,M.colorSpace),Ke=r.convert(M.type),Qe=_(M.internalFormat,Ge,Ke,M.normalized,M.colorSpace),O=M.isVideoTexture!==!0,Ae=_e.__version===void 0||K===!0,ne=te.dataReady,Se=T(M,Me);ae(i.TEXTURE_CUBE_MAP,M);let Ce;if(Te){O&&Ae&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,Qe,Me.width,Me.height);for(let de=0;de<6;de++){Ce=we[de].mipmaps;for(let Ve=0;Ve<Ce.length;Ve++){let Oe=Ce[Ve];M.format!==kn?Ge!==null?O?ne&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ve,0,0,Oe.width,Oe.height,Ge,Oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ve,Qe,Oe.width,Oe.height,0,Oe.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ve,0,0,Oe.width,Oe.height,Ge,Ke,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ve,Qe,Oe.width,Oe.height,0,Ge,Ke,Oe.data)}}}else{if(Ce=M.mipmaps,O&&Ae){Ce.length>0&&Se++;let de=it(we[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,Qe,de.width,de.height)}for(let de=0;de<6;de++)if(He){O?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,we[de].width,we[de].height,Ge,Ke,we[de].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Qe,we[de].width,we[de].height,0,Ge,Ke,we[de].data);for(let Ve=0;Ve<Ce.length;Ve++){let wt=Ce[Ve].image[de].image;O?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ve+1,0,0,wt.width,wt.height,Ge,Ke,wt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ve+1,Qe,wt.width,wt.height,0,Ge,Ke,wt.data)}}else{O?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ge,Ke,we[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Qe,Ge,Ke,we[de]);for(let Ve=0;Ve<Ce.length;Ve++){let Oe=Ce[Ve];O?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ve+1,0,0,Ge,Ke,Oe.image[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ve+1,Qe,Ge,Ke,Oe.image[de])}}}p(M)&&v(i.TEXTURE_CUBE_MAP),_e.__version=te.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function me(R,M,k,K,te,_e){let xe=r.convert(k.format,k.colorSpace),ee=r.convert(k.type),ce=_(k.internalFormat,xe,ee,k.normalized,k.colorSpace),Te=n.get(M),He=n.get(k);if(He.__renderTarget=M,!Te.__hasExternalTextures){let we=Math.max(1,M.width>>_e),Me=Math.max(1,M.height>>_e);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,_e,ce,we,Me,M.depth,0,xe,ee,null):t.texImage2D(te,_e,ce,we,Me,0,xe,ee,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),je(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,te,He.__webglTexture,0,Ne(M)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,te,He.__webglTexture,_e),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ue(R,M,k){if(i.bindRenderbuffer(i.RENDERBUFFER,R),M.depthBuffer){let K=M.depthTexture,te=K&&K.isDepthTexture?K.type:null,_e=y(M.stencilBuffer,te),xe=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;je(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ne(M),_e,M.width,M.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne(M),_e,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,_e,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,R)}else{let K=M.textures;for(let te=0;te<K.length;te++){let _e=K[te],xe=r.convert(_e.format,_e.colorSpace),ee=r.convert(_e.type),ce=_(_e.internalFormat,xe,ee,_e.normalized,_e.colorSpace);je(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ne(M),ce,M.width,M.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne(M),ce,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ce,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ze(R,M,k){let K=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let te=n.get(M.depthTexture);if(te.__renderTarget=M,(!te.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),K){if(te.__webglInit===void 0&&(te.__webglInit=!0,M.depthTexture.addEventListener("dispose",E)),te.__webglTexture===void 0){te.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),ae(i.TEXTURE_CUBE_MAP,M.depthTexture);let Te=r.convert(M.depthTexture.format),He=r.convert(M.depthTexture.type),we;M.depthTexture.format===pi?we=i.DEPTH_COMPONENT24:M.depthTexture.format===xs&&(we=i.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,we,M.width,M.height,0,Te,He,null)}}else j(M.depthTexture,0);let _e=te.__webglTexture,xe=Ne(M),ee=K?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,ce=M.depthTexture.format===xs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===pi)je(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,ee,_e,0,xe):i.framebufferTexture2D(i.FRAMEBUFFER,ce,ee,_e,0);else if(M.depthTexture.format===xs)je(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,ee,_e,0,xe):i.framebufferTexture2D(i.FRAMEBUFFER,ce,ee,_e,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Z(R){let M=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){let K=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),K){let te=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,K.removeEventListener("dispose",te)};K.addEventListener("dispose",te),M.__depthDisposeCallback=te}M.__boundDepthTexture=K}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(k)for(let K=0;K<6;K++)ze(M.__webglFramebuffer[K],R,K);else{let K=R.texture.mipmaps;K&&K.length>0?ze(M.__webglFramebuffer[0],R,0):ze(M.__webglFramebuffer,R,0)}else if(k){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]===void 0)M.__webglDepthbuffer[K]=i.createRenderbuffer(),ue(M.__webglDepthbuffer[K],R,!1);else{let te=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=M.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,_e),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,_e)}}else{let K=R.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),ue(M.__webglDepthbuffer,R,!1);else{let te=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,_e),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,_e)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(R,M,k){let K=n.get(R);M!==void 0&&me(K.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Z(R)}function he(R){let M=R.texture,k=n.get(R),K=n.get(M);R.addEventListener("dispose",x);let te=R.textures,_e=R.isWebGLCubeRenderTarget===!0,xe=te.length>1;if(xe||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=M.version,a.memory.textures++),_e){k.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[ee]=[];for(let ce=0;ce<M.mipmaps.length;ce++)k.__webglFramebuffer[ee][ce]=i.createFramebuffer()}else k.__webglFramebuffer[ee]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let ee=0;ee<M.mipmaps.length;ee++)k.__webglFramebuffer[ee]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(xe)for(let ee=0,ce=te.length;ee<ce;ee++){let Te=n.get(te[ee]);Te.__webglTexture===void 0&&(Te.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&je(R)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ee=0;ee<te.length;ee++){let ce=te[ee];k.__webglColorRenderbuffer[ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[ee]);let Te=r.convert(ce.format,ce.colorSpace),He=r.convert(ce.type),we=_(ce.internalFormat,Te,He,ce.normalized,ce.colorSpace,R.isXRRenderTarget===!0),Me=Ne(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,we,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ee,i.RENDERBUFFER,k.__webglColorRenderbuffer[ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),ue(k.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(_e){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),ae(i.TEXTURE_CUBE_MAP,M);for(let ee=0;ee<6;ee++)if(M.mipmaps&&M.mipmaps.length>0)for(let ce=0;ce<M.mipmaps.length;ce++)me(k.__webglFramebuffer[ee][ce],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ce);else me(k.__webglFramebuffer[ee],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);p(M)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let ee=0,ce=te.length;ee<ce;ee++){let Te=te[ee],He=n.get(Te),we=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(we=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(we,He.__webglTexture),ae(we,Te),me(k.__webglFramebuffer,R,Te,i.COLOR_ATTACHMENT0+ee,we,0),p(Te)&&v(we)}t.unbindTexture()}else{let ee=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ee=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ee,K.__webglTexture),ae(ee,M),M.mipmaps&&M.mipmaps.length>0)for(let ce=0;ce<M.mipmaps.length;ce++)me(k.__webglFramebuffer[ce],R,M,i.COLOR_ATTACHMENT0,ee,ce);else me(k.__webglFramebuffer,R,M,i.COLOR_ATTACHMENT0,ee,0);p(M)&&v(ee),t.unbindTexture()}R.depthBuffer&&Z(R)}function fe(R){let M=R.textures;for(let k=0,K=M.length;k<K;k++){let te=M[k];if(p(te)){let _e=S(R),xe=n.get(te).__webglTexture;t.bindTexture(_e,xe),v(_e),t.unbindTexture()}}}let ge=[],Fe=[];function Le(R){if(R.samples>0){if(je(R)===!1){let M=R.textures,k=R.width,K=R.height,te=i.COLOR_BUFFER_BIT,_e=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=n.get(R),ee=M.length>1;if(ee)for(let Te=0;Te<M.length;Te++)t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);let ce=R.texture.mipmaps;ce&&ce.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Te=0;Te<M.length;Te++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),ee){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xe.__webglColorRenderbuffer[Te]);let He=n.get(M[Te]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,He,0)}i.blitFramebuffer(0,0,k,K,0,0,k,K,te,i.NEAREST),c===!0&&(ge.length=0,Fe.length=0,ge.push(i.COLOR_ATTACHMENT0+Te),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(ge.push(_e),Fe.push(_e),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Fe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ge))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ee)for(let Te=0;Te<M.length;Te++){t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,xe.__webglColorRenderbuffer[Te]);let He=n.get(M[Te]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,He,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&c){let M=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Ne(R){return Math.min(s.maxSamples,R.samples)}function je(R){let M=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function D(R){let M=a.render.frame;h.get(R)!==M&&(h.set(R,M),R.update())}function tt(R,M){let k=R.colorSpace,K=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==gn&&k!==Xi&&(ot.getTransfer(k)===vt?(K!==kn||te!==Sn)&&Xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",k)),M}function it(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=Y,this.resetTextureUnits=U,this.getTextureUnits=L,this.setTextureUnits=B,this.setTexture2D=j,this.setTexture2DArray=G,this.setTexture3D=V,this.setTextureCube=J,this.rebindTextures=se,this.setupRenderTarget=he,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=Z,this.setupFrameBufferTexture=me,this.useMultisampledRTT=je,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Ny(i,e){function t(n,s=Xi){let r,a=ot.getTransfer(s);if(n===Sn)return i.UNSIGNED_BYTE;if(n===Wc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===qc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===yu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Mu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===xu)return i.BYTE;if(n===vu)return i.SHORT;if(n===$r)return i.UNSIGNED_SHORT;if(n===Hc)return i.INT;if(n===ri)return i.UNSIGNED_INT;if(n===Bn)return i.FLOAT;if(n===Wt)return i.HALF_FLOAT;if(n===Su)return i.ALPHA;if(n===Tu)return i.RGB;if(n===kn)return i.RGBA;if(n===pi)return i.DEPTH_COMPONENT;if(n===xs)return i.DEPTH_STENCIL;if(n===Xc)return i.RED;if(n===jc)return i.RED_INTEGER;if(n===vs)return i.RG;if(n===Kc)return i.RG_INTEGER;if(n===Yc)return i.RGBA_INTEGER;if(n===uo||n===fo||n===po||n===mo)if(a===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===uo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===uo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===mo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Jc||n===$c||n===Zc||n===Qc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Jc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$c)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===el||n===tl||n===nl||n===il||n===sl||n===go||n===rl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===el||n===tl)return a===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===nl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===il)return r.COMPRESSED_R11_EAC;if(n===sl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===go)return r.COMPRESSED_RG11_EAC;if(n===rl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===al||n===ol||n===cl||n===ll||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===bl||n===_l||n===xl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===al)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ol)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===cl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ll)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===hl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ul)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===dl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===pl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ml)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===gl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===bl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_l)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vl||n===yl||n===Ml)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===vl)return a===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ml)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sl||n===Tl||n===bo||n===wl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Sl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Tl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===bo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Zr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Fy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Uy=`
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

}`,Zu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ha(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Nt({vertexShader:Fy,fragmentShader:Uy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pt(new ki(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Qu=class extends si{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null,b=typeof XRWebGLBinding<"u",m=new Zu,p={},v=t.getContextAttributes(),S=null,_=null,y=[],T=[],E=new oe,x=null,A=null,P=new Kt;P.viewport=new _t;let I=new Kt;I.viewport=new _t;let N=[P,I],U=new Bc,L=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let q=y[z];return q===void 0&&(q=new Ir,y[z]=q),q.getTargetRaySpace()},this.getControllerGrip=function(z){let q=y[z];return q===void 0&&(q=new Ir,y[z]=q),q.getGripSpace()},this.getHand=function(z){let q=y[z];return q===void 0&&(q=new Ir,y[z]=q),q.getHandSpace()};function Y(z){let q=T.indexOf(z.inputSource);if(q===-1)return;let ie=y[q];ie!==void 0&&(ie.update(z.inputSource,z.frame,l||a),ie.dispatchEvent({type:z.type,data:z.inputSource}))}function W(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",j);for(let z=0;z<y.length;z++){let q=T[z];q!==null&&(T[z]=null,y[z].disconnect(q))}L=null,B=null,m.reset();for(let z in p)delete p[z];if(e.setRenderTarget(S),f=null,u=null,d=null,s=null,_=null,ve.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(E.width,E.height,!1),A!==null){let z=A.camera;z.fov=A.fov,z.zoom=A.zoom,z.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,n.isPresenting===!0&&Xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,n.isPresenting===!0&&Xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&b&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",W),s.addEventListener("inputsourceschange",j),v.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(E),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,le=null,me=null;v.depth&&(me=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=v.stencil?xs:pi,le=v.stencil?Zr:ri);let ue={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(ue),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new Bt(u.textureWidth,u.textureHeight,{format:kn,type:Sn,depthTexture:new us(u.textureWidth,u.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ie={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Bt(f.framebufferWidth,f.framebufferHeight,{format:kn,type:Sn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),ve.setContext(s),ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function j(z){for(let q=0;q<z.removed.length;q++){let ie=z.removed[q],le=T.indexOf(ie);le>=0&&(T[le]=null,y[le].disconnect(ie))}for(let q=0;q<z.added.length;q++){let ie=z.added[q],le=T.indexOf(ie);if(le===-1){for(let ue=0;ue<y.length;ue++)if(ue>=T.length){T.push(ie),le=ue;break}else if(T[ue]===null){T[ue]=ie,le=ue;break}if(le===-1)break}let me=y[le];me&&me.connect(ie)}}let G=new C,V=new C;function J(z,q,ie){G.setFromMatrixPosition(q.matrixWorld),V.setFromMatrixPosition(ie.matrixWorld);let le=G.distanceTo(V),me=q.projectionMatrix.elements,ue=ie.projectionMatrix.elements,ze=me[14]/(me[10]-1),Z=me[14]/(me[10]+1),se=(me[9]+1)/me[5],he=(me[9]-1)/me[5],fe=(me[8]-1)/me[0],ge=(ue[8]+1)/ue[0],Fe=ze*fe,Le=ze*ge,Ne=le/(-fe+ge),je=Ne*-fe;if(q.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(je),z.translateZ(Ne),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),me[10]===-1)z.projectionMatrix.copy(q.projectionMatrix),z.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{let D=ze+Ne,tt=Z+Ne,it=Fe-je,R=Le+(le-je),M=se*Z/tt*D,k=he*Z/tt*D;z.projectionMatrix.makePerspective(it,R,M,k,D,tt),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function pe(z,q){q===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(q.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;let q=z.near,ie=z.far;m.texture!==null&&(m.depthNear>0&&(q=m.depthNear),m.depthFar>0&&(ie=m.depthFar)),U.near=I.near=P.near=q,U.far=I.far=P.far=ie,(L!==U.near||B!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),L=U.near,B=U.far),U.layers.mask=z.layers.mask|6,P.layers.mask=U.layers.mask&-5,I.layers.mask=U.layers.mask&-3;let le=z.parent,me=U.cameras;pe(U,le);for(let ue=0;ue<me.length;ue++)pe(me[ue],le);me.length===2?J(U,P,I):U.projectionMatrix.copy(P.projectionMatrix),A===null&&z.isPerspectiveCamera&&(A={camera:z,fov:z.fov,zoom:z.zoom}),be(z,U,le)};function be(z,q,ie){ie===null?z.matrix.copy(q.matrixWorld):(z.matrix.copy(ie.matrixWorld),z.matrix.invert(),z.matrix.multiply(q.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(q.projectionMatrix),z.projectionMatrixInverse.copy(q.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Bs*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(z){c=z,u!==null&&(u.fixedFoveation=z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(z){return p[z]};let ke=null;function ae(z,q){if(h=q.getViewerPose(l||a),g=q,h!==null){let ie=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let le=!1;ie.length!==U.cameras.length&&(U.cameras.length=0,le=!0);for(let Z=0;Z<ie.length;Z++){let se=ie[Z],he=null;if(f!==null)he=f.getViewport(se);else{let ge=d.getViewSubImage(u,se);he=ge.viewport,Z===0&&(e.setRenderTargetTextures(_,ge.colorTexture,ge.depthStencilTexture),e.setRenderTarget(_))}let fe=N[Z];fe===void 0&&(fe=new Kt,fe.layers.enable(Z),fe.viewport=new _t,N[Z]=fe),fe.matrix.fromArray(se.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(se.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(he.x,he.y,he.width,he.height),Z===0&&(U.matrix.copy(fe.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),le===!0&&U.cameras.push(fe)}let me=s.enabledFeatures;if(me&&me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){d=n.getBinding();let Z=d.getDepthInformation(ie[0]);Z&&Z.isValid&&Z.texture&&m.init(Z,s.renderState)}if(me&&me.includes("camera-access")&&b){e.state.unbindTexture(),d=n.getBinding();for(let Z=0;Z<ie.length;Z++){let se=ie[Z].camera;if(se){let he=p[se];he||(he=new Ha,p[se]=he);let fe=d.getCameraImage(se);he.sourceTexture=fe}}}}for(let ie=0;ie<y.length;ie++){let le=T[ie],me=y[ie];le!==null&&me!==void 0&&me.update(le,q,l||a)}ke&&ke(z,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),g=null}let ve=new fm;ve.setAnimationLoop(ae),this.setAnimationLoop=function(z){ke=z},this.dispose=function(){}}},Oy=new et,xm=new nt;xm.set(-1,0,0,0,1,0,0,0,1);function By(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Pu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,S,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),b(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,v,S):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===sn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===sn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=e.get(p),S=v.envMap,_=v.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(Oy.makeRotationFromEuler(_)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(xm),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===sn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function b(m,p){let v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ky(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,y){let T=y.program;n.uniformBlockBinding(_,T)}function l(_,y){let T=s[_.id];T===void 0&&(m(_),T=h(_),s[_.id]=T,_.addEventListener("dispose",v));let E=y.program;n.updateUBOMapping(_,E);let x=e.render.frame;r[_.id]!==x&&(u(_),r[_.id]=x)}function h(_){let y=d();_.__bindingPointIndex=y;let T=i.createBuffer(),E=_.__size,x=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,E,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,T),T}function d(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return Ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let y=s[_.id],T=_.uniforms,E=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let x=0,A=T.length;x<A;x++){let P=T[x];if(Array.isArray(P))for(let I=0,N=P.length;I<N;I++)f(P[I],x,I,E);else f(P,x,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,y,T,E){if(b(_,y,T,E)===!0){let x=_.__offset,A=_.value;if(Array.isArray(A)){let P=0;for(let I=0;I<A.length;I++){let N=A[I],U=p(N);g(N,_.__data,P),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(P+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,_.__data)}}function g(_,y,T){typeof _=="number"||typeof _=="boolean"?y[0]=_:_.isMatrix3?(y[0]=_.elements[0],y[1]=_.elements[1],y[2]=_.elements[2],y[3]=0,y[4]=_.elements[3],y[5]=_.elements[4],y[6]=_.elements[5],y[7]=0,y[8]=_.elements[6],y[9]=_.elements[7],y[10]=_.elements[8],y[11]=0):ArrayBuffer.isView(_)?y.set(new _.constructor(_.buffer,_.byteOffset,y.length)):_.toArray(y,T)}function b(_,y,T,E){let x=_.value,A=y+"_"+T;if(E[A]===void 0)return typeof x=="number"||typeof x=="boolean"?E[A]=x:ArrayBuffer.isView(x)?E[A]=x.slice():E[A]=x.clone(),!0;{let P=E[A];if(typeof x=="number"||typeof x=="boolean"){if(P!==x)return E[A]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(P.equals(x)===!1)return P.copy(x),!0}}return!1}function m(_){let y=_.uniforms,T=0,E=16;for(let A=0,P=y.length;A<P;A++){let I=Array.isArray(y[A])?y[A]:[y[A]];for(let N=0,U=I.length;N<U;N++){let L=I[N],B=Array.isArray(L.value)?L.value:[L.value];for(let Y=0,W=B.length;Y<W;Y++){let j=B[Y],G=p(j),V=T%E,J=V%G.boundary,pe=V+J;T+=J,pe!==0&&E-pe<G.storage&&(T+=E-pe),L.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=T,T+=G.storage}}}let x=T%E;return x>0&&(T+=E-x),_.__size=T,_.__cache={},this}function p(_){let y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?Xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(y.boundary=16,y.storage=_.byteLength):Xe("WebGLRenderer: Unsupported uniform value type.",_),y}function v(_){let y=_.target;y.removeEventListener("dispose",v);let T=a.indexOf(y.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function S(){for(let _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:c,update:l,dispose:S}}var zy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),_i=null;function Gy(){return _i===null&&(_i=new Ur(zy,16,16,vs,Wt),_i.name="DFG_LUT",_i.minFilter=Vt,_i.magFilter=Vt,_i.wrapS=Wn,_i.wrapT=Wn,_i.generateMipmaps=!1,_i.needsUpdate=!0),_i}var Il=class{constructor(e={}){let{canvas:t=Fp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Sn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let b=f,m=new Set([Yc,Kc,jc]),p=new Set([Sn,ri,$r,Zr,Wc,qc]),v=new Uint32Array(4),S=new Int32Array(4),_=new C,y=null,T=null,E=[],x=[],A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=On,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,I=!1,N=null,U=null,L=null,B=null;this._outputColorSpace=zt;let Y=0,W=0,j=null,G=-1,V=null,J=new _t,pe=new _t,be=null,ke=new We(0),ae=0,ve=t.width,z=t.height,q=1,ie=null,le=null,me=new _t(0,0,ve,z),ue=new _t(0,0,ve,z),ze=!1,Z=new Or,se=!1,he=!1,fe=new et,ge=new C,Fe=new _t,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ne=!1;function je(){return j===null?q:1}let D=n;function tt(w,F){return t.getContext(w,F)}let it,R,M,k,K,te,_e,xe,ee,ce,Te,He,we,Me,Ge,Ke,Qe,O,Ae,ne,Se,Ce,de;try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",wt,!1),t.addEventListener("webglcontextrestored",mt,!1),t.addEventListener("webglcontextcreationerror",Cn,!1),D===null){let F="webgl2";if(D=tt(F,w),D===null)throw tt(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ve()}catch(w){throw t.removeEventListener("webglcontextlost",wt,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",Cn,!1),Ze("WebGLRenderer: "+w.message),w}function Ve(){it=new Kx(D),it.init(),Se=new Ny(D,it),R=new Bx(D,it,e,Se),M=new Ly(D,it),R.reversedDepthBuffer&&u&&M.buffers.depth.setReversed(!0),U=D.createFramebuffer(),L=D.createFramebuffer(),B=D.createFramebuffer(),k=new $x(D),K=new _y,te=new Dy(D,it,M,K,R,Se,k),_e=new jx(P),xe=new Q0(D),Ce=new Ux(D,xe),ee=new Yx(D,xe,k,Ce),ce=new Qx(D,ee,xe,Ce,k),O=new Zx(D,R,te),Ge=new kx(K),Te=new by(P,_e,it,R,Ce,Ge),He=new By(P,K),we=new vy,Me=new Ay(it),Qe=new Fx(P,_e,M,ce,g,c),Ke=new Iy(P,ce,R),de=new ky(D,k,R,M),Ae=new Ox(D,it,k),ne=new Jx(D,it,k),k.programs=Te.programs,P.capabilities=R,P.extensions=it,P.properties=K,P.renderLists=we,P.shadowMap=Ke,P.state=M,P.info=k}b!==Sn&&(A=new tv(b,t.width,t.height,o,s,r));let Oe=new Qu(P,D);this.xr=Oe,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let w=it.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=it.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(ve,z,!1))},this.getSize=function(w){return w.set(ve,z)},this.setSize=function(w,F,$=!0){if(Oe.isPresenting){Xe("WebGLRenderer: Can't change size while VR device is presenting.");return}ve=w,z=F,t.width=Math.floor(w*q),t.height=Math.floor(F*q),$===!0&&(t.style.width=w+"px",t.style.height=F+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(ve*q,z*q).floor()},this.setDrawingBufferSize=function(w,F,$){ve=w,z=F,q=$,t.width=Math.floor(w*$),t.height=Math.floor(F*$),this.setViewport(0,0,w,F)},this.setEffects=function(w){if(b===Sn){Ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let F=0;F<w.length;F++)if(w[F].isOutputPass===!0){Xe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(J)},this.getViewport=function(w){return w.copy(me)},this.setViewport=function(w,F,$,X){w.isVector4?me.set(w.x,w.y,w.z,w.w):me.set(w,F,$,X),M.viewport(J.copy(me).multiplyScalar(q).round())},this.getScissor=function(w){return w.copy(ue)},this.setScissor=function(w,F,$,X){w.isVector4?ue.set(w.x,w.y,w.z,w.w):ue.set(w,F,$,X),M.scissor(pe.copy(ue).multiplyScalar(q).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(w){M.setScissorTest(ze=w)},this.setOpaqueSort=function(w){ie=w},this.setTransparentSort=function(w){le=w},this.getClearColor=function(w){return w.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(w=!0,F=!0,$=!0){let X=0;if(w){let H=!1;if(j!==null){let Re=j.texture.format;H=m.has(Re)}if(H){let Re=j.texture.type,Ie=p.has(Re),Ee=Qe.getClearColor(),Ue=Qe.getClearAlpha(),qe=Ee.r,rt=Ee.g,dt=Ee.b;Ie?(v[0]=qe,v[1]=rt,v[2]=dt,v[3]=Ue,D.clearBufferuiv(D.COLOR,0,v)):(S[0]=qe,S[1]=rt,S[2]=dt,S[3]=Ue,D.clearBufferiv(D.COLOR,0,S))}else X|=D.COLOR_BUFFER_BIT}F&&(X|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(X|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&D.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),N=w},this.dispose=function(){t.removeEventListener("webglcontextlost",wt,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",Cn,!1),Qe.dispose(),we.dispose(),Me.dispose(),K.dispose(),_e.dispose(),ce.dispose(),Ce.dispose(),de.dispose(),Te.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",gt),Oe.removeEventListener("sessionend",ct),Je.stop()};function wt(w){w.preventDefault(),La("WebGLRenderer: Context Lost."),I=!0}function mt(){La("WebGLRenderer: Context Restored."),I=!1;let w=k.autoReset,F=Ke.enabled,$=Ke.autoUpdate,X=Ke.needsUpdate,H=Ke.type;Ve(),k.autoReset=w,Ke.enabled=F,Ke.autoUpdate=$,Ke.needsUpdate=X,Ke.type=H}function Cn(w){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Gn(w){let F=w.target;F.removeEventListener("dispose",Gn),ph(F)}function ph(w){mh(w),K.remove(w)}function mh(w){let F=K.get(w).programs;F!==void 0&&(F.forEach(function($){Te.releaseProgram($)}),w.isShaderMaterial&&Te.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,$,X,H,Re){F===null&&(F=Le);let Ie=H.isMesh&&H.matrixWorld.determinantAffine()<0,Ee=Dt(w,F,$,X,H);M.setMaterial(X,Ie);let Ue=$.index,qe=1;if(X.wireframe===!0){if(Ue=ee.getWireframeAttribute($),Ue===void 0)return;qe=2}let rt=$.drawRange,dt=$.attributes.position,Be=rt.start*qe,xt=(rt.start+rt.count)*qe;Re!==null&&(Be=Math.max(Be,Re.start*qe),xt=Math.min(xt,(Re.start+Re.count)*qe)),Ue!==null?(Be=Math.max(Be,0),xt=Math.min(xt,Ue.count)):dt!=null&&(Be=Math.max(Be,0),xt=Math.min(xt,dt.count));let Xt=xt-Be;if(Xt<0||Xt===1/0)return;Ce.setup(H,X,Ee,$,Ue);let Lt,Et=Ae;if(Ue!==null&&(Lt=xe.get(Ue),Et=ne,Et.setIndex(Lt)),H.isMesh)X.wireframe===!0?(M.setLineWidth(X.wireframeLinewidth*je()),Et.setMode(D.LINES)):Et.setMode(D.TRIANGLES);else if(H.isLine){let on=X.linewidth;on===void 0&&(on=1),M.setLineWidth(on*je()),H.isLineSegments?Et.setMode(D.LINES):H.isLineLoop?Et.setMode(D.LINE_LOOP):Et.setMode(D.LINE_STRIP)}else H.isPoints?Et.setMode(D.POINTS):H.isSprite&&Et.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(it.get("WEBGL_multi_draw"))Et.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let on=H._multiDrawStarts,De=H._multiDrawCounts,pn=H._multiDrawCount,pt=Ue?xe.get(Ue).bytesPerElement:1,Vn=K.get(X).currentProgram.getUniforms();for(let ui=0;ui<pn;ui++)Vn.setValue(D,"_gl_DrawID",ui),Et.render(on[ui]/pt,De[ui])}else if(H.isInstancedMesh)Et.renderInstances(Be,Xt,H.count);else if($.isInstancedBufferGeometry){let on=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,De=Math.min($.instanceCount,on);Et.renderInstances(Be,Xt,De)}else Et.render(Be,Xt)};function re(w,F,$,X){N!==null&&w.isNodeMaterial&&N.setObject(X,w),se===!0&&Ge.setState(w,$,!1),w.transparent===!0&&w.side===_n&&w.forceSinglePass===!1?(w.side=sn,w.needsUpdate=!0,Zn(w,F,X),w.side=Un,w.needsUpdate=!0,Zn(w,F,X),w.side=_n):Zn(w,F,X)}this.compile=function(w,F,$=null){$===null&&($=w),N!==null&&N.renderStart(w,F,$),T=Me.get($),T.init(F),x.push(T),$.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),w!==$&&w.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),T.setupLights(),N!==null&&N.updateLights(T.state.lightsArray),he=this.localClippingEnabled,se=Ge.init(this.clippingPlanes,he),se===!0&&Ge.setGlobalState(this.clippingPlanes,F),N!==null&&Ke.render(T.state.shadowsArray,$,F);let X=new Set;return w.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let Re=H.material;if(Re)if(Array.isArray(Re))for(let Ie=0;Ie<Re.length;Ie++){let Ee=Re[Ie];re(Ee,$,F,H),X.add(Ee)}else re(Re,$,F,H),X.add(Re)}),T=x.pop(),N!==null&&N.renderEnd(),X},this.compileAsync=function(w,F,$=null){let X=this.compile(w,F,$);return new Promise(H=>{function Re(){if(X.forEach(function(Ie){let Ue=K.get(Ie).currentProgram;(Ue===void 0||Ue.isReady())&&X.delete(Ie)}),X.size===0){H(w);return}setTimeout(Re,10)}it.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let ye=null;function $e(w){ye&&ye(w)}function gt(){Je.stop()}function ct(){Je.start()}let Je=new fm;Je.setAnimationLoop($e),typeof self<"u"&&Je.setContext(self),this.setAnimationLoop=function(w){ye=w,Oe.setAnimationLoop(w),w===null?Je.stop():Je.start()},Oe.addEventListener("sessionstart",gt),Oe.addEventListener("sessionend",ct),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;N!==null&&N.renderStart(w,F);let $=Oe.enabled===!0&&Oe.isPresenting===!0,X=A!==null&&(j===null||$)&&A.begin(P,j);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(F),F=Oe.getCamera()),w.isScene===!0&&w.onBeforeRender(P,w,F,j),T=Me.get(w,x.length),T.init(F),T.state.textureUnits=te.getTextureUnits(),x.push(T),fe.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Z.setFromProjectionMatrix(fe,ii,F.reversedDepth),he=this.localClippingEnabled,se=Ge.init(this.clippingPlanes,he),y=we.get(w,E.length),y.init(),E.push(y),Oe.enabled===!0&&Oe.isPresenting===!0){let Ie=P.xr.getDepthSensingMesh();Ie!==null&&lt(Ie,F,-1/0,P.sortObjects)}lt(w,F,0,P.sortObjects),y.finish(),N!==null&&N.updateLights(T.state.lightsArray),P.sortObjects===!0&&y.sort(ie,le),Ne=Oe.enabled===!1||Oe.isPresenting===!1||Oe.hasDepthSensing()===!1,Ne&&Qe.addToRenderList(y,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),se===!0&&Ge.beginShadows();let H=T.state.shadowsArray;if(Ke.render(H,w,F),se===!0&&Ge.endShadows(),(X&&A.hasRenderPass())===!1){let Ie=y.opaque,Ee=y.transmissive;if(T.setupLights(),F.isArrayCamera){let Ue=F.cameras;if(Ee.length>0)for(let qe=0,rt=Ue.length;qe<rt;qe++){let dt=Ue[qe];Pn(Ie,Ee,w,dt)}Ne&&Qe.render(w);for(let qe=0,rt=Ue.length;qe<rt;qe++){let dt=Ue[qe];ft(y,w,dt,dt.viewport)}}else Ee.length>0&&Pn(Ie,Ee,w,F),Ne&&Qe.render(w),ft(y,w,F)}j!==null&&W===0&&(te.updateMultisampleRenderTarget(j),te.updateRenderTargetMipmap(j)),X&&A.end(P),w.isScene===!0&&w.onAfterRender(P,w,F),Ce.resetDefaultState(),G=-1,V=null,x.pop(),x.length>0?(T=x[x.length-1],te.setTextureUnits(T.state.textureUnits),se===!0&&Ge.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,E.pop(),E.length>0?y=E[E.length-1]:y=null,N!==null&&N.renderEnd()};function lt(w,F,$,X){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)$=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLightProbeGrid)T.pushLightProbeGrid(w);else if(w.isLight)T.pushLight(w),w.castShadow&&T.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(Z)){X&&Fe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(fe);let Ie=ce.update(w),Ee=w.material;Ee.visible&&y.push(w,Ie,Ee,$,Fe.z,null,F)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(Z))){let Ie=ce.update(w),Ee=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Fe.copy(w.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Fe.copy(Ie.boundingSphere.center)),Fe.applyMatrix4(w.matrixWorld).applyMatrix4(fe)),Array.isArray(Ee)){let Ue=Ie.groups;for(let qe=0,rt=Ue.length;qe<rt;qe++){let dt=Ue[qe],Be=Ee[dt.materialIndex];Be&&Be.visible&&y.push(w,Ie,Be,$,Fe.z,dt,F)}}else Ee.visible&&y.push(w,Ie,Ee,$,Fe.z,null,F)}}let Re=w.children;for(let Ie=0,Ee=Re.length;Ie<Ee;Ie++)lt(Re[Ie],F,$,X)}function ft(w,F,$,X){let{opaque:H,transmissive:Re,transparent:Ie}=w;T.setupLightsView($),se===!0&&Ge.setGlobalState(P.clippingPlanes,$),X&&M.viewport(J.copy(X)),H.length>0&&Ai(H,F,$),Re.length>0&&Ai(Re,F,$),Ie.length>0&&Ai(Ie,F,$),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Pn(w,F,$,X){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[X.id]===void 0){let Be=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[X.id]=new Bt(1,1,{generateMipmaps:!0,type:Be?Wt:Sn,minFilter:Mn,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ot.workingColorSpace})}let Re=T.state.transmissionRenderTarget[X.id],Ie=X.viewport||J;Re.setSize(Ie.z*P.transmissionResolutionScale,Ie.w*P.transmissionResolutionScale);let Ee=P.getRenderTarget(),Ue=P.getActiveCubeFace(),qe=P.getActiveMipmapLevel();P.setRenderTarget(Re),P.getClearColor(ke),ae=P.getClearAlpha(),ae<1&&P.setClearColor(16777215,.5),P.clear(),Ne&&Qe.render($);let rt=P.toneMapping;P.toneMapping=On;let dt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),T.setupLightsView(X),se===!0&&Ge.setGlobalState(P.clippingPlanes,X),Ai(w,$,X),te.updateMultisampleRenderTarget(Re),te.updateRenderTargetMipmap(Re),it.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let xt=0,Xt=F.length;xt<Xt;xt++){let Lt=F[xt],{object:Et,geometry:on,material:De,group:pn}=Lt;if(De.side===_n&&Et.layers.test(X.layers)){let pt=De.side;De.side=sn,De.needsUpdate=!0,In(Et,$,X,on,De,pn),De.side=pt,De.needsUpdate=!0,Be=!0}}Be===!0&&(te.updateMultisampleRenderTarget(Re),te.updateRenderTargetMipmap(Re))}P.setRenderTarget(Ee,Ue,qe),P.setClearColor(ke,ae),dt!==void 0&&(X.viewport=dt),P.toneMapping=rt}function Ai(w,F,$){let X=F.isScene===!0?F.overrideMaterial:null;for(let H=0,Re=w.length;H<Re;H++){let Ie=w[H],{object:Ee,geometry:Ue,group:qe}=Ie,rt=Ie.material;rt.allowOverride===!0&&X!==null&&(rt=X),Ee.layers.test($.layers)&&In(Ee,F,$,Ue,rt,qe)}}function In(w,F,$,X,H,Re){N!==null&&H.isNodeMaterial&&N.setObject(w,H),w.onBeforeRender(P,F,$,X,H,Re),w.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),H.onBeforeRender(P,F,$,X,w,Re),H.transparent===!0&&H.side===_n&&H.forceSinglePass===!1?(H.side=sn,H.needsUpdate=!0,P.renderBufferDirect($,F,X,H,w,Re),H.side=Un,H.needsUpdate=!0,P.renderBufferDirect($,F,X,H,w,Re),H.side=_n):P.renderBufferDirect($,F,X,H,w,Re),w.onAfterRender(P,F,$,X,H,Re)}function Zn(w,F,$){F.isScene!==!0&&(F=Le);let X=K.get(w),H=T.state.lights,Re=T.state.shadowsArray,Ie=H.state.version,Ee=Te.getParameters(w,H.state,Re,F,$,T.state.lightProbeGridArray),Ue=Te.getProgramCacheKey(Ee),qe=X.programs;X.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?F.environment:null,X.fog=F.fog;let rt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;X.envMap=_e.get(w.envMap||X.environment,rt),X.envMapRotation=X.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,qe===void 0&&(w.addEventListener("dispose",Gn),qe=new Map,X.programs=qe);let dt=qe.get(Ue);if(dt!==void 0){if(X.currentProgram===dt&&X.lightsStateVersion===Ie)return Cs(w,Ee),dt}else Ee.uniforms=Te.getUniforms(w),N!==null&&w.isNodeMaterial&&N.build(w,$,Ee),w.onBeforeCompile(Ee,P),dt=Te.acquireProgram(Ee,Ue),qe.set(Ue,dt),X.uniforms=Ee.uniforms;let Be=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Be.clippingPlanes=Ge.uniform),Cs(w,Ee),X.needsLights=hi(w),X.lightsStateVersion=Ie,X.needsLights&&(Be.ambientLightColor.value=H.state.ambient,Be.lightProbe.value=H.state.probe,Be.sunLights.value=H.state.sun,Be.sunLightShadows.value=H.state.sunShadow,Be.directionalLights.value=H.state.directional,Be.directionalLightShadows.value=H.state.directionalShadow,Be.spotLights.value=H.state.spot,Be.spotLightShadows.value=H.state.spotShadow,Be.rectAreaLights.value=H.state.rectArea,Be.ltc_1.value=H.state.rectAreaLTC1,Be.ltc_2.value=H.state.rectAreaLTC2,Be.pointLights.value=H.state.point,Be.pointLightShadows.value=H.state.pointShadow,Be.hemisphereLights.value=H.state.hemi,Be.sunShadowMatrix.value=H.state.sunShadowMatrix,Be.sunShadowCascade.value=H.state.sunShadowCascade,Be.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Be.spotLightMatrix.value=H.state.spotLightMatrix,Be.spotLightMap.value=H.state.spotLightMap,Be.pointShadowMatrix.value=H.state.pointShadowMatrix),X.lightProbeGrid=T.state.lightProbeGridArray.length>0,X.currentProgram=dt,X.uniformsList=null,dt}function Rs(w){if(w.uniformsList===null){let F=w.currentProgram.getUniforms();w.uniformsList=na.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function Cs(w,F){let $=K.get(w);$.outputColorSpace=F.outputColorSpace,$.batching=F.batching,$.batchingColor=F.batchingColor,$.instancing=F.instancing,$.instancingColor=F.instancingColor,$.instancingMorph=F.instancingMorph,$.skinning=F.skinning,$.morphTargets=F.morphTargets,$.morphNormals=F.morphNormals,$.morphColors=F.morphColors,$.morphTargetsCount=F.morphTargetsCount,$.numClippingPlanes=F.numClippingPlanes,$.numIntersection=F.numClipIntersection,$.vertexAlphas=F.vertexAlphas,$.vertexTangents=F.vertexTangents,$.toneMapping=F.toneMapping}function Ye(w,F){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;_.setFromMatrixPosition(F.matrixWorld);for(let $=0,X=w.length;$<X;$++){let H=w[$];if(H.texture!==null&&H.boundingBox.containsPoint(_))return H}return null}function Dt(w,F,$,X,H){F.isScene!==!0&&(F=Le),te.resetTextureUnits();let Re=F.fog,Ie=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?F.environment:null,Ee=j===null?P.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ot.workingColorSpace,Ue=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,qe=_e.get(X.envMap||Ie,Ue),rt=X.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,dt=!!$.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Be=!!$.morphAttributes.position,xt=!!$.morphAttributes.normal,Xt=!!$.morphAttributes.color,Lt=On;X.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Lt=P.toneMapping);let Et=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,on=Et!==void 0?Et.length:0,De=K.get(X),pn=T.state.lights;if(se===!0&&(he===!0||w!==V)){let It=w===V&&X.id===G;Ge.setState(X,w,It)}let pt=!1;X.version===De.__version?(De.needsLights&&De.lightsStateVersion!==pn.state.version||De.outputColorSpace!==Ee||H.isBatchedMesh&&De.batching===!1||!H.isBatchedMesh&&De.batching===!0||H.isBatchedMesh&&De.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&De.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&De.instancing===!1||!H.isInstancedMesh&&De.instancing===!0||H.isSkinnedMesh&&De.skinning===!1||!H.isSkinnedMesh&&De.skinning===!0||H.isInstancedMesh&&De.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&De.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&De.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&De.instancingMorph===!1&&H.morphTexture!==null||De.envMap!==qe||X.fog===!0&&De.fog!==Re||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==Ge.numPlanes||De.numIntersection!==Ge.numIntersection)||De.vertexAlphas!==rt||De.vertexTangents!==dt||De.morphTargets!==Be||De.morphNormals!==xt||De.morphColors!==Xt||De.toneMapping!==Lt||De.morphTargetsCount!==on||!!De.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(pt=!0):(pt=!0,De.__version=X.version);let Vn=De.currentProgram;pt===!0&&(Vn=Zn(X,F,H),N&&X.isNodeMaterial&&N.onUpdateProgram(X,Vn,De));let ui=!1,es=!1,cr=!1,At=Vn.getUniforms(),kt=De.uniforms;if(M.useProgram(Vn.program)&&(ui=!0,es=!0,cr=!0),X.id!==G&&(G=X.id,es=!0),De.needsLights){let It=Ye(T.state.lightProbeGridArray,H);De.lightProbeGrid!==It&&(De.lightProbeGrid=It,es=!0)}if(ui||V!==w){M.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),At.setValue(D,"projectionMatrix",w.projectionMatrix),At.setValue(D,"viewMatrix",w.matrixWorldInverse);let ns=At.map.cameraPosition;ns!==void 0&&ns.setValue(D,ge.setFromMatrixPosition(w.matrixWorld)),R.logarithmicDepthBuffer&&At.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&At.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),V!==w&&(V=w,es=!0,cr=!0)}if(De.needsLights&&(pn.state.sunShadowMap.length>0&&At.setValue(D,"sunShadowMap",pn.state.sunShadowMap,te),pn.state.directionalShadowMap.length>0&&At.setValue(D,"directionalShadowMap",pn.state.directionalShadowMap,te),pn.state.spotShadowMap.length>0&&At.setValue(D,"spotShadowMap",pn.state.spotShadowMap,te),pn.state.pointShadowMap.length>0&&At.setValue(D,"pointShadowMap",pn.state.pointShadowMap,te)),H.isSkinnedMesh){At.setOptional(D,H,"bindMatrix"),At.setOptional(D,H,"bindMatrixInverse");let It=H.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),At.setValue(D,"boneTexture",It.boneTexture,te))}H.isBatchedMesh&&(At.setOptional(D,H,"batchingTexture"),At.setValue(D,"batchingTexture",H._matricesTexture,te),At.setOptional(D,H,"batchingIdTexture"),At.setValue(D,"batchingIdTexture",H._indirectTexture,te),At.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&At.setValue(D,"batchingColorTexture",H._colorsTexture,te));let ts=$.morphAttributes;if((ts.position!==void 0||ts.normal!==void 0||ts.color!==void 0)&&O.update(H,$,Vn),(es||De.receiveShadow!==H.receiveShadow)&&(De.receiveShadow=H.receiveShadow,At.setValue(D,"receiveShadow",H.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&F.environment!==null&&(kt.envMapIntensity.value=F.environmentIntensity),kt.dfgLUT!==void 0&&(kt.dfgLUT.value=Gy()),es){if(At.setValue(D,"toneMappingExposure",P.toneMappingExposure),De.needsLights&&Ei(kt,cr),Re&&X.fog===!0&&He.refreshFogUniforms(kt,Re),He.refreshMaterialUniforms(kt,X,q,z,T.state.transmissionRenderTarget[w.id]),De.needsLights&&De.lightProbeGrid){let It=De.lightProbeGrid;kt.probesSH.value=It.texture,kt.probesMin.value.copy(It.boundingBox.min),kt.probesMax.value.copy(It.boundingBox.max),kt.probesResolution.value.copy(It.resolution)}na.upload(D,Rs(De),kt,te)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(na.upload(D,Rs(De),kt,te),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&At.setValue(D,"center",H.center),At.setValue(D,"modelViewMatrix",H.modelViewMatrix),At.setValue(D,"normalMatrix",H.normalMatrix),At.setValue(D,"modelMatrix",H.matrixWorld),X.uniformsGroups!==void 0){let It=X.uniformsGroups;for(let ns=0,lr=It.length;ns<lr;ns++){let pf=It[ns];de.update(pf,Vn),de.bind(pf,Vn)}}return Vn}function Ei(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.sunLights.needsUpdate=F,w.sunLightShadows.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function hi(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(w,F,$){let X=K.get(w);X.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),K.get(w.texture).__webglTexture=F,K.get(w.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:$,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,F){let $=K.get(w);$.__webglFramebuffer=F,$.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,$=0){j=w,Y=F,W=$;let X=null,H=!1,Re=!1;if(w){let Ee=K.get(w);if(Ee.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(D.FRAMEBUFFER,Ee.__webglFramebuffer),J.copy(w.viewport),pe.copy(w.scissor),be=w.scissorTest,M.viewport(J),M.scissor(pe),M.setScissorTest(be),G=-1;return}else if(Ee.__webglFramebuffer===void 0)te.setupRenderTarget(w);else if(Ee.__hasExternalTextures)te.rebindTextures(w,K.get(w.texture).__webglTexture,K.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let rt=w.depthTexture;if(Ee.__boundDepthTexture!==rt){if(rt!==null&&K.has(rt)&&(w.width!==rt.image.width||w.height!==rt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");te.setupDepthRenderbuffer(w)}}let Ue=w.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(Re=!0);let qe=K.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(qe[F])?X=qe[F][$]:X=qe[F],H=!0):w.samples>0&&te.useMultisampledRTT(w)===!1?X=K.get(w).__webglMultisampledFramebuffer:Array.isArray(qe)?X=qe[$]:X=qe,J.copy(w.viewport),pe.copy(w.scissor),be=w.scissorTest}else J.copy(me).multiplyScalar(q).floor(),pe.copy(ue).multiplyScalar(q).floor(),be=ze;if($!==0&&(X=U),M.bindFramebuffer(D.FRAMEBUFFER,X)&&M.drawBuffers(w,X),M.viewport(J),M.scissor(pe),M.setScissorTest(be),H){let Ee=K.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ee.__webglTexture,$)}else if(Re){let Ee=F;for(let Ue=0;Ue<w.textures.length;Ue++){let qe=K.get(w.textures[Ue]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ue,qe.__webglTexture,$,Ee)}}else if(w!==null&&$!==0){let Ee=K.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ee.__webglTexture,$)}G=-1};function Do(w){let F=K.get(w);return(F.__readFormat!==w.format||F.__readType!==w.type)&&(F.__readFormat=w.format,F.__readType=w.type,F.__formatReadable=R.textureFormatReadable(w.format),F.__typeReadable=R.textureTypeReadable(w.type)),F}this.readRenderTargetPixels=function(w,F,$,X,H,Re,Ie,Ee=0){if(!(w&&w.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=K.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ue=Ue[Ie]),Ue){M.bindFramebuffer(D.FRAMEBUFFER,Ue);try{let qe=w.textures[Ee],rt=qe.format,dt=qe.type;w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ee);let Be=Do(qe);if(Be.__formatReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Be.__typeReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-X&&$>=0&&$<=w.height-H&&D.readPixels(F,$,X,H,Se.convert(rt),Se.convert(dt),Re)}finally{let qe=j!==null?K.get(j).__webglFramebuffer:null;M.bindFramebuffer(D.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(w,F,$,X,H,Re,Ie,Ee=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=K.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ue=Ue[Ie]),Ue)if(F>=0&&F<=w.width-X&&$>=0&&$<=w.height-H){M.bindFramebuffer(D.FRAMEBUFFER,Ue);let qe=w.textures[Ee],rt=qe.format,dt=qe.type;w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ee);let Be=Do(qe);if(Be.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Be.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let xt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,xt),D.bufferData(D.PIXEL_PACK_BUFFER,Re.byteLength,D.STREAM_READ),D.readPixels(F,$,X,H,Se.convert(rt),Se.convert(dt),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let Xt=j!==null?K.get(j).__webglFramebuffer:null;M.bindFramebuffer(D.FRAMEBUFFER,Xt);let Lt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Op(D,Lt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,xt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Re),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(xt),D.deleteSync(Lt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,F=null,$=0){let X=Math.pow(2,-$),H=Math.floor(w.image.width*X),Re=Math.floor(w.image.height*X),Ie=F!==null?F.x:0,Ee=F!==null?F.y:0;te.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,$,0,0,Ie,Ee,H,Re),M.unbindTexture()},this.copyTextureToTexture=function(w,F,$=null,X=null,H=0,Re=0){let Ie,Ee,Ue,qe,rt,dt,Be,xt,Xt,Lt=w.isCompressedTexture?w.mipmaps[Re]:w.image;if($!==null)Ie=$.max.x-$.min.x,Ee=$.max.y-$.min.y,Ue=$.isBox3?$.max.z-$.min.z:1,qe=$.min.x,rt=$.min.y,dt=$.isBox3?$.min.z:0;else{let kt=Math.pow(2,-H);Ie=Math.floor(Lt.width*kt),Ee=Math.floor(Lt.height*kt),w.isDataArrayTexture?Ue=Lt.depth:w.isData3DTexture?Ue=Math.floor(Lt.depth*kt):Ue=1,qe=0,rt=0,dt=0}X!==null?(Be=X.x,xt=X.y,Xt=X.z):(Be=0,xt=0,Xt=0);let Et=Se.convert(F.format),on=Se.convert(F.type),De;F.isData3DTexture?(te.setTexture3D(F,0),De=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(te.setTexture2DArray(F,0),De=D.TEXTURE_2D_ARRAY):(te.setTexture2D(F,0),De=D.TEXTURE_2D),M.activeTexture(D.TEXTURE0),M.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),M.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),M.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);let pn=M.getParameter(D.UNPACK_ROW_LENGTH),pt=M.getParameter(D.UNPACK_IMAGE_HEIGHT),Vn=M.getParameter(D.UNPACK_SKIP_PIXELS),ui=M.getParameter(D.UNPACK_SKIP_ROWS),es=M.getParameter(D.UNPACK_SKIP_IMAGES);M.pixelStorei(D.UNPACK_ROW_LENGTH,Lt.width),M.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Lt.height),M.pixelStorei(D.UNPACK_SKIP_PIXELS,qe),M.pixelStorei(D.UNPACK_SKIP_ROWS,rt),M.pixelStorei(D.UNPACK_SKIP_IMAGES,dt);let cr=w.isDataArrayTexture||w.isData3DTexture,At=F.isDataArrayTexture||F.isData3DTexture;if(w.isDepthTexture){let kt=K.get(w),ts=K.get(F),It=K.get(kt.__renderTarget),ns=K.get(ts.__renderTarget);M.bindFramebuffer(D.READ_FRAMEBUFFER,It.__webglFramebuffer),M.bindFramebuffer(D.DRAW_FRAMEBUFFER,ns.__webglFramebuffer);for(let lr=0;lr<Ue;lr++)cr&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,K.get(w).__webglTexture,H,dt+lr),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,K.get(F).__webglTexture,Re,Xt+lr)),D.blitFramebuffer(qe,rt,Ie,Ee,Be,xt,Ie,Ee,D.DEPTH_BUFFER_BIT,D.NEAREST);M.bindFramebuffer(D.READ_FRAMEBUFFER,null),M.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(H!==0||w.isRenderTargetTexture||K.has(w)){let kt=K.get(w),ts=K.get(F);M.bindFramebuffer(D.READ_FRAMEBUFFER,L),M.bindFramebuffer(D.DRAW_FRAMEBUFFER,B);for(let It=0;It<Ue;It++)cr?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,kt.__webglTexture,H,dt+It):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,kt.__webglTexture,H),At?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ts.__webglTexture,Re,Xt+It):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ts.__webglTexture,Re),H!==0?D.blitFramebuffer(qe,rt,Ie,Ee,Be,xt,Ie,Ee,D.COLOR_BUFFER_BIT,D.NEAREST):At?D.copyTexSubImage3D(De,Re,Be,xt,Xt+It,qe,rt,Ie,Ee):D.copyTexSubImage2D(De,Re,Be,xt,qe,rt,Ie,Ee);M.bindFramebuffer(D.READ_FRAMEBUFFER,null),M.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else At?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(De,Re,Be,xt,Xt,Ie,Ee,Ue,Et,on,Lt.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(De,Re,Be,xt,Xt,Ie,Ee,Ue,Et,Lt.data):D.texSubImage3D(De,Re,Be,xt,Xt,Ie,Ee,Ue,Et,on,Lt):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Re,Be,xt,Ie,Ee,Et,on,Lt.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Re,Be,xt,Lt.width,Lt.height,Et,Lt.data):D.texSubImage2D(D.TEXTURE_2D,Re,Be,xt,Ie,Ee,Et,on,Lt);M.pixelStorei(D.UNPACK_ROW_LENGTH,pn),M.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pt),M.pixelStorei(D.UNPACK_SKIP_PIXELS,Vn),M.pixelStorei(D.UNPACK_SKIP_ROWS,ui),M.pixelStorei(D.UNPACK_SKIP_IMAGES,es),Re===0&&F.generateMipmaps&&D.generateMipmap(De),M.unbindTexture()},this.initRenderTarget=function(w){K.get(w).__webglFramebuffer===void 0&&te.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?te.setTextureCube(w,0):w.isData3DTexture?te.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?te.setTexture2DArray(w,0):te.setTexture2D(w,0),M.unbindTexture()},this.resetState=function(){Y=0,W=0,j=null,M.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}};var vm={type:"change"},td={type:"start"},Mm={type:"end"},Nl=new Ui,ym=new Nn,Vy=Math.cos(70*xo.DEG2RAD),Qt=new C,Tn=2*Math.PI,Tt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ed=1e-6,Fl=class extends oo{constructor(e,t=null){super(e,t),this.state=Tt.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:gs.ROTATE,MIDDLE:gs.DOLLY,RIGHT:gs.PAN},this.touches={ONE:bs.ROTATE,TWO:bs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new Ht,this._lastTargetPosition=new C,this._quat=new Ht().setFromUnitVectors(e.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ms,this._sphericalDelta=new ms,this._scale=1,this._panOffset=new C,this._rotateStart=new oe,this._rotateEnd=new oe,this._rotateDelta=new oe,this._panStart=new oe,this._panEnd=new oe,this._panDelta=new oe,this._dollyStart=new oe,this._dollyEnd=new oe,this._dollyDelta=new oe,this._dollyDirection=new C,this._mouse=new oe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Wy.bind(this),this._onPointerDown=Hy.bind(this),this._onPointerUp=qy.bind(this),this._onContextMenu=Zy.bind(this),this._onMouseWheel=Ky.bind(this),this._onKeyDown=Yy.bind(this),this._onTouchStart=Jy.bind(this),this._onTouchMove=$y.bind(this),this._onMouseDown=Xy.bind(this),this._onMouseMove=jy.bind(this),this._interceptControlDown=Qy.bind(this),this._interceptControlUp=eM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Tt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(vm),this.update(),this.state=Tt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Qt.copy(t).sub(this.target),Qt.applyQuaternion(this._quat),this._spherical.setFromVector3(Qt),this.autoRotate&&this.state===Tt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Tn:n>Math.PI&&(n-=Tn),s<-Math.PI?s+=Tn:s>Math.PI&&(s-=Tn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Qt.setFromSpherical(this._spherical),Qt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Qt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Qt.length();a=this._clampDistance(o*this._scale);let c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let o=new C(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new C(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=Qt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Nl.origin.copy(this.object.position),Nl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Nl.direction))<Vy?this.object.lookAt(this.target):(ym.setFromNormalAndCoplanarPoint(this.object.up,this.target),Nl.intersectPlane(ym,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ed||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ed||this._lastTargetPosition.distanceToSquared(this.target)>ed?(this.dispatchEvent(vm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Tn/60*this.autoRotateSpeed*e:Tn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Qt.setFromMatrixColumn(t,0),Qt.multiplyScalar(-e),this._panOffset.add(Qt)}_panUp(e,t){this.screenSpacePanning===!0?Qt.setFromMatrixColumn(t,1):(Qt.setFromMatrixColumn(t,0),Qt.crossVectors(this.object.up,Qt)),Qt.multiplyScalar(e),this._panOffset.add(Qt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Qt.copy(s).sub(this.target);let r=Qt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Tn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Tn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Tn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Tn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new oe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Hy(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Wy(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function qy(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Mm),this.state=Tt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Xy(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case gs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Tt.DOLLY;break;case gs.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Tt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Tt.ROTATE}break;case gs.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Tt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Tt.PAN}break;default:this.state=Tt.NONE}this.state!==Tt.NONE&&this.dispatchEvent(td)}function jy(i){switch(this.state){case Tt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Tt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Tt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Ky(i){this.enabled===!1||this.enableZoom===!1||this.state!==Tt.NONE||(i.preventDefault(),this.dispatchEvent(td),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Mm))}function Yy(i){this.enabled!==!1&&this._handleKeyDown(i)}function Jy(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case bs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Tt.TOUCH_ROTATE;break;case bs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Tt.TOUCH_PAN;break;default:this.state=Tt.NONE}break;case 2:switch(this.touches.TWO){case bs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Tt.TOUCH_DOLLY_PAN;break;case bs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Tt.TOUCH_DOLLY_ROTATE;break;default:this.state=Tt.NONE}break;default:this.state=Tt.NONE}this.state!==Tt.NONE&&this.dispatchEvent(td)}function $y(i){switch(this._trackPointer(i),this.state){case Tt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Tt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Tt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Tt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Tt.NONE}}function Zy(i){this.enabled!==!1&&i.preventDefault()}function Qy(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function eM(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ji(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new St,l=0;for(let h=0;h<i.length;++h){let d=i[h],u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=i[u].attributes.position.count}c.setIndex(d)}for(let h in r){let d=Sm(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let b=0;b<a[h].length;++b)f.push(a[h][b][u]);let g=Sm(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}}return c}function Sm(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new Ct(a,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let d=c/t;for(let u=0,f=h.count;u<f;u++)for(let g=0;g<t;g++){let b=h.getComponent(u,g);o.setComponent(u+d,g,b)}}else a.set(h.array,c);c+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function nd(i,e){if(e===wu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Qr||e===_o){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Qr)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function Tm(i){let e=new Map,t=new Map,n=i.clone();return wm(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function wm(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)wm(i.children[n],e.children[n],t)}var Ul=class extends gi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ld(t)}),this.register(function(t){return new hd(t)}),this.register(function(t){return new xd(t)}),this.register(function(t){return new vd(t)}),this.register(function(t){return new yd(t)}),this.register(function(t){return new dd(t)}),this.register(function(t){return new fd(t)}),this.register(function(t){return new pd(t)}),this.register(function(t){return new md(t)}),this.register(function(t){return new cd(t)}),this.register(function(t){return new gd(t)}),this.register(function(t){return new ud(t)}),this.register(function(t){return new _d(t)}),this.register(function(t){return new bd(t)}),this.register(function(t){return new ad(t)}),this.register(function(t){return new Ol(t,ht.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Ol(t,ht.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Md(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=qi.extractUrlBase(e);a=qi.resolveURL(l,this.path)}else a=qi.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new qr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Pm){try{a[ht.KHR_BINARY_GLTF]=new Sd(e)}catch(d){s&&s(d);return}r=JSON.parse(a[ht.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Pd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let d=this.pluginCallbacks[h](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let d=r.extensionsUsed[h],u=r.extensionsRequired||[];switch(d){case ht.KHR_MATERIALS_UNLIT:a[d]=new od;break;case ht.KHR_DRACO_MESH_COMPRESSION:a[d]=new Td(r,this.dracoLoader);break;case ht.KHR_TEXTURE_TRANSFORM:a[d]=new wd;break;case ht.KHR_MESH_QUANTIZATION:a[d]=new Ad;break;default:u.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function tM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function qt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var ht={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},ad=class{constructor(e){this.parser=e,this.name=ht.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new We(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],gn);let d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new ro(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new so(h),l.distance=d;break;case"spot":l=new io(h),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),vi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},od=class{constructor(){this.name=ht.KHR_MATERIALS_UNLIT}getMaterialType(){return Yt}extendParams(e,t,n){let s=[];e.color=new We(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],gn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,zt))}return Promise.all(s)}},cd=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=qt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},ld=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return qt(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new oe(r,r)}return Promise.all(s)}},hd=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_DISPERSION}getMaterialType(e){return qt(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=qt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},ud=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return qt(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},dd=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SHEEN}getMaterialType(e){return qt(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new We(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],gn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,zt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},fd=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return qt(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},pd=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_VOLUME}getMaterialType(e){return qt(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new We().setRGB(r[0],r[1],r[2],gn),Promise.all(s)}},md=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IOR}getMaterialType(e){return qt(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=qt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},gd=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SPECULAR}getMaterialType(e){return qt(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new We().setRGB(r[0],r[1],r[2],gn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,zt)),Promise.all(s)}},bd=class{constructor(e){this.parser=e,this.name=ht.EXT_MATERIALS_BUMP}getMaterialType(e){return qt(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},_d=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return qt(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},xd=class{constructor(e){this.parser=e,this.name=ht.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},vd=class{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},yd=class{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Ol=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,d=s.byteStride,u=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,d,u,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*d);return a.decodeGltfBuffer(new Uint8Array(f),h,d,u,s.mode,s.filter),f})})}else return null}},Md=class{constructor(e){this.name=ht.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==Kn.TRIANGLES&&l.mode!==Kn.TRIANGLE_STRIP&&l.mode!==Kn.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),d=h.isGroup?h.children:[h],u=l[0].count,f=[];for(let g of d){let b=new et,m=new C,p=new Ht,v=new C(1,1,1),S=new ks(g.geometry,g.material,u);for(let y=0;y<u;y++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,y),c.SCALE&&v.fromBufferAttribute(c.SCALE,y),S.setMatrixAt(y,b.compose(m,p,v));let _=null;for(let y in c)if(y==="_COLOR_0"){let T=c[y];S.instanceColor=new Oi(T.array,T.itemSize,T.normalized)}else if(y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"){if(_===null){let E=S.geometry;_=new St,_.name=E.name;for(let x in E.attributes)_.setAttribute(x,E.attributes[x]);for(let x in E.morphAttributes)_.morphAttributes[x]=E.morphAttributes[x];E.index!==null&&_.setIndex(E.index),_.morphTargetsRelative=E.morphTargetsRelative;for(let x of E.groups)_.addGroup(x.start,x.count,x.materialIndex);E.boundingBox!==null&&(_.boundingBox=E.boundingBox.clone()),E.boundingSphere!==null&&(_.boundingSphere=E.boundingSphere.clone()),_.drawRange.start=E.drawRange.start,_.drawRange.count=E.drawRange.count,_.userData=Object.assign({},E.userData),S.geometry=_}let T=c[y];_.setAttribute(y,new Oi(T.array,T.itemSize,T.normalized))}Ut.prototype.copy.call(S,g),this.parser.assignFinalMaterial(S),f.push(S)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Pm="glTF",So=12,Am={JSON:1313821514,BIN:5130562},Sd=class{constructor(e){this.name=ht.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,So),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Pm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-So,r=new DataView(e,So),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===Am.JSON){let l=new Uint8Array(e,So+a,o);this.content=n.decode(l)}else if(c===Am.BIN){let l=So+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Td=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ht.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let d=Rd[h]||h.toLowerCase();o[d]=a[h]}for(let h in e.attributes){let d=Rd[h]||h.toLowerCase();if(a[h]!==void 0){let u=n.accessors[e.attributes[h]],f=ra[u.componentType];l[d]=f.name,c[d]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,u){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let b=f.attributes[g],m=c[g];m!==void 0&&(b.normalized=m)}d(f)},o,l,gn,u)})})}},wd=class{constructor(){this.name=ht.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Ad=class{constructor(){this.name=ht.KHR_MESH_QUANTIZATION}},Bl=class extends mi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=s-t,d=(n-t)/h,u=d*d,f=u*d,g=e*l,b=g-l,m=-2*f+3*u,p=f-u,v=1-m,S=p-u+d;for(let _=0;_!==o;_++){let y=a[b+_+o],T=a[b+_+c]*h,E=a[g+_+o],x=a[g+_]*h;r[_]=v*y+S*T+m*E+p*x}return r}},nM=new Ht,Ed=class extends Bl{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return nM.fromArray(r).normalize().toArray(r),r}},Kn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ra={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Em={9728:Gt,9729:Vt,9984:Vc,9985:Jr,9986:Ks,9987:Mn},Rm={33071:Wn,33648:Ar,10497:hs},id={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Rd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ys={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},iM={CUBICSPLINE:void 0,LINEAR:Os,STEP:Us},sd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function sM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Vs({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Un})),i.DefaultMaterial}function Qs(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function vi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function rM(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let d=e[l];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(s=!0),d.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let d=e[l];if(n){let u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):i.attributes.position;a.push(u)}if(s){let u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):i.attributes.normal;o.push(u)}if(r){let u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):i.attributes.color;c.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],d=l[1],u=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=d),r&&(i.morphAttributes.color=u),i.morphTargetsRelative=!0,i})}function aM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function oM(i){let e,t=i.extensions&&i.extensions[ht.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+rd(t.attributes):e=i.indices+":"+rd(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+rd(i.targets[n]);return e}function rd(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Cd(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function cM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var lM=new et,Pd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new tM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new to(this.options.manager):this.textureLoader=new ao(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new qr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Qs(r,o,s),vi(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ht.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(qi.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=id[s.type],o=ra[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new Ct(l,a,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=id[s.type],l=ra[s.componentType],h=l.BYTES_PER_ELEMENT,d=h*c,u=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,b,m;if(f&&f!==d){let p=Math.floor(u/f),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,S=t.cache.get(v);S||(b=new l(o,p*f,s.count*f/h),S=new Dr(b,f/h),t.cache.add(v,S)),m=new Nr(S,c,u%f/h,g)}else o===null?b=new l(s.count*c):b=new l(o,u,s.count*c),m=new Ct(b,c,g);if(s.sparse!==void 0){let p=id.SCALAR,v=ra[s.sparse.indices.componentType],S=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,y=new v(a[1],S,s.sparse.count*p),T=new l(a[2],_,s.sparse.count*c);o!==null&&(m=new Ct(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let E=0,x=y.length;E<x;E++){let A=y[E];if(m.setX(A,T[E*c]),c>=2&&m.setY(A,T[E*c+1]),c>=3&&m.setZ(A,T[E*c+2]),c>=4&&m.setW(A,T[E*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let u=(r.samplers||{})[a.sampler]||{};return h.magFilter=Em[u.magFilter]||Vt,h.minFilter=Em[u.minFilter]||Mn,h.wrapS=Rm[u.wrapS]||hs,h.wrapT=Rm[u.wrapT]||hs,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Gt&&h.minFilter!==Vt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=s.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(d){l=!0;let u=new Blob([d],{type:a.mimeType});return c=o.createObjectURL(u),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(d){return new Promise(function(u,f){let g=u;t.isImageBitmapLoader===!0&&(g=function(b){let m=new Jt(b);m.needsUpdate=!0,u(m)}),t.load(qi.resolveURL(d,r.path),g,void 0,f)})}).then(function(d){return l===!0&&o.revokeObjectURL(c),vi(d,a),d.userData.mimeType=a.mimeType||cM(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[ht.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[ht.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[ht.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new kr,vn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Br,vn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Vs}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[ht.KHR_MATERIALS_UNLIT]){let d=s[ht.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),l.push(d.extendParams(o,r,t))}else{let d=r.pbrMetallicRoughness||{};if(o.color=new We(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){let u=d.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],gn),o.opacity=u[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",d.baseColorTexture,zt)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=_n);let h=r.alphaMode||sd.OPAQUE;if(h===sd.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===sd.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Yt&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new oe(1,1),r.normalTexture.scale!==void 0)){let d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&a!==Yt&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Yt){let d=r.emissiveFactor;o.emissive=new We().setRGB(d[0],d[1],d[2],gn)}return r.emissiveTexture!==void 0&&a!==Yt&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,zt)),Promise.all(l).then(function(){let d=new a(o);return r.name&&(d.name=r.name),vi(d,r),t.associations.set(d,{materials:e}),r.extensions&&Qs(s,d,r),d})}createUniqueName(e){let t=Rt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[ht.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Cm(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=oM(l),d=s[h];if(d)a.push(d.promise);else{let u;l.extensions&&l.extensions[ht.KHR_DRACO_MESH_COMPRESSION]?u=r(l):u=Cm(new St,l,t),l.mode===Kn.TRIANGLE_STRIP?u=u.then(f=>nd(f,_o)):l.mode===Kn.TRIANGLE_FAN&&(u=u.then(f=>nd(f,Qr))),s[h]={primitive:l,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?sM(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],d=[];for(let f=0,g=h.length;f<g;f++){let b=h[f],m=a[f],p,v=l[f];if(m.mode===Kn.TRIANGLES||m.mode===Kn.TRIANGLE_STRIP||m.mode===Kn.TRIANGLE_FAN||m.mode===void 0){let S=r.isSkinnedMesh===!0,_=b.hasAttribute("skinIndex")&&b.hasAttribute("skinWeight");S&&_===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=S&&_?new Oa(b,v):new Pt(b,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(m.mode===Kn.LINES)p=new ka(b,v);else if(m.mode===Kn.LINE_STRIP)p=new zs(b,v);else if(m.mode===Kn.LINE_LOOP)p=new za(b,v);else if(m.mode===Kn.POINTS)p=new Ga(b,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&aM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),vi(p,r),m.extensions&&Qs(s,p,m),t.assignFinalMaterial(p),d.push(p)}for(let f=0,g=d.length;f<g;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return r.extensions&&Qs(s,d[0],r),d[0];let u=new hn;r.extensions&&Qs(s,u,r),t.associations.set(u,{meshes:e});for(let f=0,g=d.length;f<g;f++)u.add(d[f]);return u})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Kt(xo.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new bi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),vi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let d=a[l];if(d){o.push(d);let u=new et;r!==null&&u.fromArray(r.array,l*16),c.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Ba(o,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let d=0,u=s.channels.length;d<u;d++){let f=s.channels[d],g=s.samplers[f.sampler],b=f.target,m=b.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,v=s.parameters!==void 0?s.parameters[g.output]:g.output;b.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",v)),l.push(g),h.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(d){let u=d[0],f=d[1],g=d[2],b=d[3],m=d[4],p=[];for(let S=0,_=u.length;S<_;S++){let y=u[S],T=f[S],E=g[S],x=b[S],A=m[S];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let P=n._createAnimationTracks(y,T,E,x,A);if(P)for(let I=0;I<P.length;I++)p.push(P[I])}let v=new eo(r,void 0,p);return vi(v,s),v})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],d=l[1],u=l[2];u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,lM)});for(let f=0,g=d.length;f<g;f++)h.add(d[f]);if(h.userData.pivot!==void 0&&d.length>0){let f=h.userData.pivot,g=d[0];h.pivot=new C().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new Fr:l.length>1?h=new hn:l.length===1?h=l[0]:h=new Ut,h!==l[0])for(let d=0,u=l.length;d<u;d++)h.add(l[d]);if(r.name&&(h.userData.name=r.name,h.name=a),vi(h,r),r.extensions&&Qs(n,h,r),r.matrix!==void 0){let d=new et;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let d=s.associations.get(h);s.associations.set(h,{...d})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new hn;n.name&&(r.name=s.createUniqueName(n.name)),vi(r,n),n.extensions&&Qs(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,d=c.length;h<d;h++){let u=c[h];u.parent!==null?r.add(Tm(u)):r.add(u)}let l=h=>{let d=new Map;for(let[u,f]of s.associations)(u instanceof vn||u instanceof Jt)&&d.set(u,f);return h.traverse(u=>{let f=s.associations.get(u);f!=null&&d.set(u,f)}),d};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}ys[r.path]===ys.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let h;switch(ys[r.path]){case ys.weights:h=Vi;break;case ys.rotation:h=Hi;break;case ys.translation:case ys.scale:h=ps;break;default:n.itemSize===1?h=Vi:h=ps;break}let d=s.interpolation!==void 0?iM[s.interpolation]:Os,u=this._getArrayFromAccessor(n);for(let f=0,g=c.length;f<g;f++){let b=new h(c[f]+"."+ys[r.path],t.array,u,d);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(b),a.push(b)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Cd(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Hi?Ed:Bl;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function hM(i,e,t){let n=e.attributes,s=new bn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new C(c[0],c[1],c[2]),new C(l[0],l[1],l[2])),o.normalized){let h=Cd(ra[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new C,c=new C;for(let l=0,h=r.length;l<h;l++){let d=r[l];if(d.POSITION!==void 0){let u=t.json.accessors[d.POSITION],f=u.min,g=u.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),u.normalized){let b=Cd(ra[u.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new un;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Cm(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=Rd[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return ot.workingColorSpace!==gn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ot.workingColorSpace}" not supported.`),vi(i,e),hM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?rM(i,e.targets,t):i})}var Im=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?o(e):o(i),r,a=WebAssembly.instantiate(s,{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var v=new Uint8Array(p.length),S=0;S<p.length;++S){var _=p.charCodeAt(S);v[S]=_>96?_-97:_>64?_-39:_+4}for(var y=0,S=0;S<p.length;++S)v[y++]=v[S]<60?n[v[S]]:(v[S]-60)*64+v[++S];return v.buffer.slice(0,y)}function c(p,v,S,_,y,T,E){var x=p.exports.sbrk,A=_+3&-4,P=x(A*y),I=x(T.length),N=new Uint8Array(p.exports.memory.buffer);N.set(T,I);var U=v(P,_,y,I,T.length);if(U==0&&E&&E(P,A,y),S.set(N.subarray(P,P+_*y)),x(P-x(0)),U!=0)throw new Error("Malformed buffer data: "+U)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},d=[],u=0;function f(p){var v={object:new Worker(p),pending:0,requests:{}};return v.object.onmessage=function(S){var _=S.data;v.pending-=_.count,v.requests[_.id][_.action](_.value),delete v.requests[_.id]},v}function g(p){for(var v="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(s)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+m.name+";"+c.toString()+m.toString(),S=new Blob([v],{type:"text/javascript"}),_=URL.createObjectURL(S),y=d.length;y<p;++y)d[y]=f(_);for(var y=p;y<d.length;++y)d[y].object.postMessage({});d.length=p,URL.revokeObjectURL(_)}function b(p,v,S,_,y){for(var T=d[0],E=1;E<d.length;++E)d[E].pending<T.pending&&(T=d[E]);return new Promise(function(x,A){var P=new Uint8Array(S),I=++u;T.pending+=p,T.requests[I]={resolve:x,reject:A},T.object.postMessage({id:I,count:p,size:v,source:P,mode:_,filter:y},[P.buffer])})}function m(p){var v=p.data;self.ready.then(function(S){if(!v.id)return self.close();try{var _=new Uint8Array(v.count*v.size);c(S,S.exports[v.mode],_,v.count,v.size,v.source,S.exports[v.filter]),self.postMessage({id:v.id,count:v.count,action:"resolve",value:_},[_.buffer])}catch(y){self.postMessage({id:v.id,count:v.count,action:"reject",value:y})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,v,S,_,y){c(r,r.exports.meshopt_decodeVertexBuffer,p,v,S,_,r.exports[l[y]])},decodeIndexBuffer:function(p,v,S,_){c(r,r.exports.meshopt_decodeIndexBuffer,p,v,S,_)},decodeIndexSequence:function(p,v,S,_){c(r,r.exports.meshopt_decodeIndexSequence,p,v,S,_)},decodeGltfBuffer:function(p,v,S,_,y,T){c(r,r.exports[h[y]],p,v,S,_,r.exports[l[T]])},decodeGltfBufferAsync:function(p,v,S,_,y){return d.length>0?b(p,v,S,h[_],l[y]):a.then(function(){var T=new Uint8Array(p*v);return c(r,r.exports[h[_]],T,p,v,S,r.exports[l[y]]),T})}}})();var aa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var ai=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},uM=new bi(-1,1,1,-1,0,1),Id=class extends St{constructor(){super(),this.setAttribute("position",new Mt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Mt([0,2,0,0,2,0],2))}},dM=new Id,oa=class{constructor(e){this._mesh=new Pt(dM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,uM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ca=class extends ai{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Nt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Js.clone(e.uniforms),this.material=new Nt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new oa(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var To=class extends ai{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},kl=class extends ai{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var zl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new oe);this._width=n.width,this._height=n.height,t=new Bt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Wt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ca(aa),this.copyPass.material.blending=Xn,this.timer=new Ws}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}To!==void 0&&(a instanceof To?n=!0:a instanceof kl&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new oe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Gl=class extends ai{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new We}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Lm={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new We(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Ki=class i extends ai{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new oe(e.x,e.y):new oe(256,256),this.clearColor=new We(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Bt(r,a,{type:Wt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Bt(r,a,{type:Wt,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new Bt(r,a,{type:Wt,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}let o=Lm;this.highPassUniforms=Js.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Nt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new oe(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Js.clone(aa.uniforms),this.blendMaterial=new Nt({uniforms:this.copyUniforms,vertexShader:aa.vertexShader,fragmentShader:aa.fragmentShader,premultipliedAlpha:!0,blending:lo,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new We,this._oldClearAlpha=1,this._basic=new Yt,this._fsQuad=new oa(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new oe(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],c=a+1<e?t[a+1]:0,l=o+c;s.push((a*o+(a+1)*c)/l),r.push(l)}return new Nt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new oe(.5,.5)},direction:{value:new oe(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Nt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};Ki.BlurDirectionX=new oe(1,0);Ki.BlurDirectionY=new oe(0,1);var Vl={light:{bg:"#E4DBD2",exposure:1.55,bloom:{strength:.2,radius:0,threshold:4},bloomFactors:[1,0,0,0,0],bloomKernel:4,gemExposure:.8,shadow:.35,roughness:.04,sky:[.35,.8,1],tint:[1,1,1],boxes:1,edge:.5,flags:2,flagSoft:.55,flagOpacity:.6,horizon:.4,horizonW:.07,spots:12,metalGlow:{strength:.4,threshold:3,radius:.5,factors:[1,.8,.5,.25,0]},paveGlint:{maxD:2,thrK:1.5,kernel:2,strength:.15},lights:[[50,50,2.8,[0,44,0]],[9,60,3.6,[-40,4,16]],[9,60,3.4,[40,4,4]],[70,8,3.2,[0,16,-40]],[28,32,3.2,[24,18,32]],[60,8,2.4,[0,-6,42]],[20,40,3,[-30,10,30]],[2.5,60,7,[-22,10,36]],[2.5,60,7,[30,8,-28]],[60,2.5,6,[0,-2,-44]],[2.5,50,6,[44,6,-6]]],metals:{vang:[1,.68,.27],"vang-trang":[.82,.82,.83],"vang-hong":[1,.62,.38]},metalDeep:{"vang-hong":2.6},metalDeepR:.4},dark:{bg:null,exposure:1,shadow:.8,roughness:.16,bloom:{strength:.27,radius:.05,threshold:30},sky:[.02,.22,.6],tint:[1,.95,.88],boxes:1,flags:1,spots:18,metals:{vang:[1,.71,.33],"vang-trang":[.86,.86,.85],"vang-hong":[.98,.64,.52]}}},Hw=Vl.light.metals,wo=[1,.97,.93],Dm={sky:[.2,.32,.55],tint:[1,.99,.97],boxes:1.1,flags:1,spots:35,spotSize:1.1,spotPh:[.15,2.1],spotK:[30,30],lights:[[46,46,1.8,[0,44,0],wo],[12,60,5,[-40,4,16],wo],[12,60,4.2,[40,4,4],wo],[70,10,3,[0,16,-40],wo],[26,30,3.4,[24,18,32],wo],[60,8,1.6,[0,-6,42],[1,.94,.86]],[20,20,0,[0,40,0]]],ring:{n:24,w:3,h:34,k:4},panels:70,panelSize:4,panelK:[2.5,3]},Ld={moissanite:{ior:2.65,disp:.052},"lab-diamond":{ior:2.417,disp:.0154},"natural-diamond":{ior:2.417,disp:.0154},sapphire:{ior:2.417,disp:.006,spark:1,reflK:.5,reflHi:1.5,absorb:[2.77,1.43,.215],gain:1.2},ruby:{ior:2.417,disp:.006,spark:1,reflK:.5,reflHi:1.5,absorb:[.044,5.8,2.07],gain:1},emerald:{ior:2.417,disp:.006,spark:1,reflK:.5,reflHi:1.5,absorb:[21.7,.96,1.77],gain:1.93},"yellow-sapphire":{ior:2.417,disp:.006,spark:.6,reflK:.5,reflHi:1.5,absorb:[.18,.46,26.2],gain:2.31}},fM={play:"T\u1EF1 xoay",pause:"D\u1EEBng xoay",reset:"V\u1EC1 g\xF3c nh\xECn ban \u0111\u1EA7u",zoomIn:"Ph\xF3ng to",zoomOut:"Thu nh\u1ECF",tilt:"Xoay ch\xE9o (th\u1EA5y c\u1EA3 m\u1EB7t tr\xEAn vi\xEAn \u0111\xE1)",tiltOff:"V\u1EC1 xoay ngang",full:"To\xE0n m\xE0n h\xECnh",exitFull:"Tho\xE1t to\xE0n m\xE0n h\xECnh",hint:"K\xE9o \u0111\u1EC3 xoay \xB7 Ch\u1EE5m ho\u1EB7c cu\u1ED9n \u0111\u1EC3 ph\xF3ng to",loading:"\u0110ang t\u1EA3i m\xF4 h\xECnh 3D",error:"Ch\u01B0a t\u1EA3i \u0111\u01B0\u1EE3c m\xF4 h\xECnh 3D. B\u1EA1n th\u1EED t\u1EA3i l\u1EA1i trang nh\xE9.",metal:"M\xE0u v\xE0ng",stage:"M\xF4 h\xECnh 3D \u2014 k\xE9o \u0111\u1EC3 xoay"},pM={play:'<path d="M8 5.5v13l10.5-6.5z"/>',pause:'<path d="M8.5 5.5v13M15.5 5.5v13"/>',reset:'<path d="M4.5 12a7.5 7.5 0 1 0 2.2-5.3"/><path d="M4.5 4.5v4h4"/>',plus:'<path d="M12 5.5v13M5.5 12h13"/>',minus:'<path d="M5.5 12h13"/>',full:'<path d="M4.5 9V4.5H9M15 4.5h4.5V9M19.5 15v4.5H15M9 19.5H4.5V15"/>',tilt:'<path d="M3.5 15.5c2-5.5 9.5-10 16.5-9.5"/><path d="M17.4 3.8l2.8 2.2-2.3 2.6"/><path d="M20.5 8.5c-2 5.5-9.5 10-16.5 9.5"/><path d="M6.6 20.2 3.8 18l2.3-2.6"/><path d="M10.4 12 12 10.2 13.6 12 12 13.8z"/>',exit:'<path d="M9 4.5V9H4.5M19.5 9H15V4.5M15 19.5V15h4.5M4.5 15H9v4.5"/>'},Ms=i=>`<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${pM[i]}</svg>`;function Nm(i=.35){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d"),n=t.createImageData(128,128);for(let s=0;s<128;s++)for(let r=0;r<128;r++){let a=Math.abs(r-63.5)/64,o=Math.abs(s-63.5)/64,c=Math.max(0,Math.min(1,(1-a)/i)*Math.min(1,(1-o)/i))**1.6,l=(s*128+r)*4;n.data[l]=n.data[l+1]=n.data[l+2]=255*c,n.data[l+3]=255}return t.putImageData(n,0,0),new zr(e)}function Dd(i){let e=new Lr,t=50,[n,s,r]=i.sky,a=i.tint,o=new zi(t,64,32),c=o.attributes.position,l=new Float32Array(c.count*3);for(let g=0;g<c.count;g++){let b=c.getY(g)/t,m=b<0?n+(s-n)*Math.pow(1+b,2.2):s+(r-s)*Math.pow(b,.7);i.horizon&&(m*=1-(1-i.horizon)*Math.exp(-(((b+.06)/(i.horizonW??.07))**2))),l.set([m*a[0],m*a[1],m*a[2]],g*3)}o.setAttribute("color",new Ct(l,3)),e.add(new Pt(o,new Yt({vertexColors:!0,side:sn})));let h=Nm(i.edge??.35),d=(g,b,m,[p,v,S],_=[1,.97,.93],y=!0)=>{let T=m*i.boxes,E=new Pt(new ki(g,b),new Yt({map:y?h:null,color:new We(_[0]*T,_[1]*T,_[2]*T),side:_n}));E.position.set(p,v,S),E.lookAt(0,0,0),e.add(E)};if(i.lights?i.lights.forEach(([g,b,m,p,v])=>d(g,b,m,p,v||[1,1,1],m>0)):(d(46,46,3.2,[0,44,0]),d(12,60,5,[-40,4,16]),d(12,60,4.2,[40,4,4]),d(70,10,3,[0,16,-40]),d(26,30,3.4,[24,18,32]),d(60,8,1.6,[0,-6,42],[1,.94,.86])),i.flags){let g=i.flagW||1,b=i.flagSoft?Nm(i.flagSoft):null,m=(p,v,[S,_,y])=>{if(!b)return d(p,v,0,[S,_,y],[0,0,0],!1);let T=new Pt(new ki(p,v),new Yt({color:0,alphaMap:b,transparent:!0,opacity:i.flagOpacity??1,depthWrite:!1,side:_n}));T.position.set(S,_,y),T.lookAt(0,0,0),T.renderOrder=2,e.add(T)};m(10*g,44,[-30,6,-32]),m(10*g,44,[33,6,-26]),m(14*g,40,[-6,4,44]),i.flags>1&&(m(8*g,50,[44,2,22]),m(8*g,50,[-44,2,-8]),m(60,7*g,[0,30,-30]))}let u=7,f=()=>(u=u*16807%2147483647)/2147483647;for(let g=0;g<i.spots;g++){let[b,m]=i.spotPh||[.2,1.35],p=f()*Math.PI*2,v=b+f()*(m-b);d(i.spotSize||1.6,i.spotSize||1.6,(i.spotK?.[0]??14)+f()*(i.spotK?.[1]??10),[Math.cos(p)*Math.sin(v)*36,Math.cos(v)*36,Math.sin(p)*Math.sin(v)*36])}if(i.ring){let{n:g,w:b,h:m,k:p,y:v=8,r:S=42}=i.ring;for(let _=0;_<g;_++){let y=(_+.5)/g*Math.PI*2;d(b,m,p,[Math.cos(y)*S,v,Math.sin(y)*S])}}for(let g=0;g<(i.panels||0);g++){let[b,m]=i.panelPh||[.1,1.9],p=f()*Math.PI*2,v=b+f()*(m-b),S=i.panelSize*(.6+f()*.8);d(S,S,i.panelK[0]+f()*i.panelK[1],[Math.cos(p)*Math.sin(v)*40,Math.cos(v)*40,Math.sin(p)*Math.sin(v)*40])}return e}var Fm=180;function mM(i){let e=i.attributes.position,t=e.count/3;i.computeBoundingSphere();let n=i.boundingSphere.radius,s=new C,r=new C,a=new C,o=new C,c=.99995,l;for(let h=0;h<6;h++,c=1-(1-c)*3){l=[];for(let d=0;d<t;d++){s.fromBufferAttribute(e,d*3),r.fromBufferAttribute(e,d*3+1),a.fromBufferAttribute(e,d*3+2),o.subVectors(r,s).cross(a.clone().sub(s));let u=o.length();if(u<1e-9*n*n)continue;o.divideScalar(u);let f=o.dot(s);l.some(g=>g.x*o.x+g.y*o.y+g.z*o.z>c&&Math.abs(g.w-f)<.002*n)||l.push(new _t(o.x,o.y,o.z,f))}if(l=l.filter(d=>{for(let u=0;u<e.count;u++)if(d.x*e.getX(u)+d.y*e.getY(u)+d.z*e.getZ(u)-d.w>.004*n)return!1;return!0}),l.length<=Fm)break}return l.slice(0,Fm)}function gM(i,e,t,n=Un,s=1){return new Nt({side:n,defines:{NPLANES:e.length,BOUNCES:t.bounces,CHROMA:t.chroma},uniforms:{envMap:{value:i},planes:{value:e},nPlanes:{value:e.length},nBounces:{value:t.bounces},ior:{value:2.417},disp:{value:.044},gain:{value:1.35},ex:{value:1},lod:{value:1.25},absorb:{value:new C},gsize:{value:s},spark:{value:0},reflK:{value:1},reflHi:{value:0},pave:{value:0}},vertexShader:`
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
      }`})}function bM(i){let e=i.attributes.position,t=i.index,n=t?t.count:e.count,s=new Float32Array(n*3),r=new C;for(let c=0;c<n;c++)r.fromBufferAttribute(e,t?t.getX(c):c),s.set([r.x,r.y,r.z],c*3);let a=0;for(let c=0;c<s.length;c+=9)a+=s[c]*(s[c+4]*s[c+8]-s[c+5]*s[c+7])-s[c+1]*(s[c+3]*s[c+8]-s[c+5]*s[c+6])+s[c+2]*(s[c+3]*s[c+7]-s[c+4]*s[c+6]);if(a<0)for(let c=0;c<s.length;c+=9)for(let l=0;l<3;l++){let h=s[c+3+l];s[c+3+l]=s[c+6+l],s[c+6+l]=h}let o=new St;return o.setAttribute("position",new Ct(s,3)),o.computeVertexNormals(),o}function _M(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(0,0,0,0.85)"),t.addColorStop(.45,"rgba(0,0,0,0.35)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),new zr(i)}function Um(i,e={}){let t={...fM,...e.labels||{}},n=e.metals||Object.keys(Vl.light.metals),s=e.swatches||{vang:"#D9B35E","vang-trang":"#E4E2DC","vang-hong":"#D9A08A"},r=e.metalNames||{vang:"V\xE0ng","vang-trang":"V\xE0ng tr\u1EAFng","vang-hong":"V\xE0ng h\u1ED3ng"},a=Vl[e.theme]?e.theme:"light",o={...Vl[a],...e.look||{}},c=Math.min(devicePixelRatio||1,2),l=Math.min(c,e.minPR??((devicePixelRatio||1)>=2?1.5:1)),h=c;i.classList.add("tg3d",`tg3d-${a}`),i.innerHTML=`
    <div class="tg3d-canvas" role="img" aria-label="${t.stage}"></div>
    <div class="tg3d-load" data-load><span>${t.loading}</span><i><b data-bar></b></i></div>
    <p class="tg3d-hint" data-hint>${t.hint}</p>
    <div class="tg3d-tools" role="toolbar" aria-label="3D">
      <button type="button" data-act="play" aria-pressed="true" title="${t.pause}" aria-label="${t.pause}">${Ms("pause")}</button>
      <button type="button" data-act="tilt" aria-pressed="false" title="${t.tilt}" aria-label="${t.tilt}">${Ms("tilt")}</button>
      <button type="button" data-act="reset" title="${t.reset}" aria-label="${t.reset}">${Ms("reset")}</button>
      <button type="button" data-act="in" title="${t.zoomIn}" aria-label="${t.zoomIn}">${Ms("plus")}</button>
      <button type="button" data-act="out" title="${t.zoomOut}" aria-label="${t.zoomOut}">${Ms("minus")}</button>
      <button type="button" data-act="full" title="${t.full}" aria-label="${t.full}">${Ms("full")}</button>
    </div>
    <div class="tg3d-sw" role="radiogroup" aria-label="${t.metal}">${n.map(re=>`<button type="button" role="radio" data-metal="${re}" aria-checked="false" title="${r[re]}" aria-label="${r[re]}"><i style="background:${s[re]}"></i></button>`).join("")}</div>`;let d=re=>i.querySelector(re),u=d(".tg3d-canvas"),f=new Il({antialias:!0,alpha:!0,powerPreference:"high-performance"});f.setPixelRatio(h),f.outputColorSpace=zt,f.toneMapping=On,u.appendChild(f.domElement);let g=new Lr,b=new Kt(28,1,.5,2e3),m=new zl(f,new Bt(1,1,{type:Wt,samples:4}));m.setPixelRatio(h),m.addPass(new Gl(g,b));let p=new Ki(new oe(256,256),.5,.35,4);Object.assign(p.blendMaterial,{blending:qs,blendEquation:jn,blendSrc:xn,blendDst:xn,blendSrcAlpha:Xs,blendDstAlpha:xn}),p.materialHighPassFilter.fragmentShader=`
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
    }`,p.materialHighPassFilter.uniforms.metalBloom={value:0},p.materialHighPassFilter.uniforms.metalThr={value:12},p.materialHighPassFilter.uniforms.paveOn={value:0},p.materialHighPassFilter.uniforms.sideOn={value:0},p.materialHighPassFilter.needsUpdate=!0,p.compositeMaterial.uniforms.bloomFactors.value=[1,.4,.12,.03,0],m.addPass(p);let v=new Ki(new oe(256,256),0,0,4);Object.assign(v.blendMaterial,{blending:qs,blendEquation:jn,blendSrc:xn,blendDst:xn,blendSrcAlpha:Xs,blendDstAlpha:xn}),v.materialHighPassFilter.fragmentShader=`
    uniform sampler2D tDiffuse; uniform float luminosityThreshold; uniform float smoothWidth; uniform float capT; varying vec2 vUv;
    void main() {
      vec4 t = texture2D(tDiffuse, vUv); vec3 c = t.rgb;
      float peak = max(c.r, max(c.g, c.b));
      float small = clamp(t.a - 1.0, 0.0, 1.0) * (1.0 - clamp(t.a - 2.0, 0.0, 1.0));
      float a = small * smoothstep(luminosityThreshold, luminosityThreshold + max(smoothWidth, luminosityThreshold * 0.5), peak);
      vec3 w = mix(c, vec3(peak), 0.8);
      gl_FragColor = vec4(min(w, vec3(capT)) * a, 1.0);
    }`,v.materialHighPassFilter.uniforms.capT={value:12},v.materialHighPassFilter.needsUpdate=!0,v.compositeMaterial.uniforms.bloomFactors.value=[1,0,0,0,0],v.nMips=1,v.enabled=!1,m.addPass(v);let S=new Ki(new oe(256,256),0,0,4);Object.assign(S.blendMaterial,{blending:qs,blendEquation:jn,blendSrc:xn,blendDst:xn,blendSrcAlpha:Xs,blendDstAlpha:xn}),S.materialHighPassFilter.fragmentShader=`
    uniform sampler2D tDiffuse; uniform float luminosityThreshold; uniform float smoothWidth; uniform float capT; varying vec2 vUv;
    void main() {
      vec4 t = texture2D(tDiffuse, vUv); vec3 c = t.rgb;
      float peak = max(c.r, max(c.g, c.b));
      float a = clamp(t.a - 2.0, 0.0, 1.0) * (1.0 - clamp(t.a - 3.0, 0.0, 1.0)) * smoothstep(luminosityThreshold, luminosityThreshold + max(smoothWidth, luminosityThreshold * 0.5), peak);
      vec3 w = mix(c, vec3(peak), 0.8);
      gl_FragColor = vec4(min(w, vec3(capT)) * a, 1.0);
    }`,S.materialHighPassFilter.uniforms.capT={value:12},S.materialHighPassFilter.needsUpdate=!0,S.compositeMaterial.uniforms.bloomFactors.value=[1,0,0,0,0],S.nMips=1,S.enabled=!1,m.addPass(S);let _=new Ki(new oe(256,256),0,.5,6);Object.assign(_.blendMaterial,{blending:qs,blendEquation:jn,blendSrc:xn,blendDst:xn,blendSrcAlpha:Xs,blendDstAlpha:xn}),_.materialHighPassFilter.fragmentShader=`
    uniform sampler2D tDiffuse; uniform float luminosityThreshold; uniform float smoothWidth; varying vec2 vUv;
    void main() {
      vec4 t = texture2D(tDiffuse, vUv); vec3 c = t.rgb;
      float peak = max(c.r, max(c.g, c.b));
      float isMetal = step(0.5, t.a) * (1.0 - clamp(t.a - 1.0, 0.0, 1.0));
      float a = isMetal * smoothstep(luminosityThreshold, luminosityThreshold * 1.8, peak);
      gl_FragColor = vec4(min(c, vec3(luminosityThreshold * 2.5)) * a, 1.0); // gi\u1EEF m\xE0u v\xE0ng trong qu\u1EA7ng
    }`,_.materialHighPassFilter.needsUpdate=!0,_.enabled=!1,_.blendMaterial.colorWrite=!1,m.addPass(_);let y=new ca(new Nt({uniforms:{tDiffuse:{value:null},exposure:{value:1},tGlow:{value:null},glowK:{value:0}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
      }`}));m.addPass(y),y.uniforms.tGlow.value=_.renderTargetsHorizontal[0].texture;let T=()=>m.render(),E=[],x=new dn({metalness:1,roughness:.16,envMapIntensity:1}),A={deep:{value:0},deepR:{value:.6}},P=0,I=re=>ye=>{Object.assign(ye.uniforms,re),ye.fragmentShader=ye.fragmentShader.replace("#include <common>",`#include <common>
uniform float deep; uniform float deepR;`).replace("#include <opaque_fragment>",`
      if (deep > 0.0) {
        float lum = dot(outgoingLight, vec3(0.2126, 0.7152, 0.0722));
        vec3 cn = diffuseColor.rgb / max(max(diffuseColor.r, diffuseColor.g), max(diffuseColor.b, 1e-4));
        outgoingLight *= pow(cn, vec3(deep * (1.0 - smoothstep(0.0, deepR, lum))));
      }
      #include <opaque_fragment>`)};x.onBeforeCompile=I(A);let N=new We,U={deep:{value:0},deepR:{value:.6}},L=new Map,B=re=>{let ye=re.userData.fin;re.roughness=Math.max(x.roughness,{satin:o.satinRough??.34,brush:o.brushRough??.2}[ye]??0),re.envMapIntensity={satin:o.satinEnv??1,brush:o.brushEnv??1}[ye]??1,re.clearcoat=x.clearcoat};function Y(re){let ye=/:satin/.test(re)?"satin":/:brush/.test(re)?"brush":"",$e=/:alt/.test(re),gt=/:shade/.test(re);if(!ye&&!$e&&!gt)return x;let ct=`${ye}|${$e}|${gt}`;if(!L.has(ct)){let Je=x.clone();Je.color=$e?N:x.color;let lt=$e?I(U):x.onBeforeCompile;Je.onBeforeCompile=lt,gt&&(Je.onBeforeCompile=ft=>{lt(ft),ft.fragmentShader=ft.fragmentShader.replace("#include <opaque_fragment>",`outgoingLight *= ${(o.shade??.22).toFixed(3)};
#include <opaque_fragment>`)},Je.customProgramCacheKey=()=>`shade|${$e}`),Je.userData.fin=ye,B(Je),L.set(ct,Je)}return L.get(ct)}let W=[],j=re=>{x.onBeforeCompile(re),re.fragmentShader=re.fragmentShader.replace("#include <opaque_fragment>",`outgoingLight *= 0.17;
#include <opaque_fragment>`)};function G(re){let ye=x.clone();return ye.color=x.color,ye.onBeforeCompile=j,ye.customProgramCacheKey=()=>"engrave",Object.assign(ye,{roughness:.85,alphaMap:re||null,bumpMap:re||null,bumpScale:-6,transparent:!0,alphaTest:.04,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),W.push(ye),ye}let V=new ia(f),J=new Zs(512,{type:Wt,generateMipmaps:!0,minFilter:Mn}),pe=null,be=re=>(pe&&re!=="center"?pe:J).texture,ke=null,ae=null,ve=re=>{re.uniforms.pave.value=re.userData.small&&o.paveGlint?.strength>0?1:o.sideGlint?.strength>0?re.userData.role!=="center"?2:3:0,re.uniforms.envMap.value=be(re.userData.role),re.uniforms.ex.value=(o.gemExposure??1)/o.exposure,re.uniforms.gain.value=(o.gemGain??1.35)*(Ld[ge[re.userData.role||"center"]]?.gain??1),re.uniforms.lod.value=o.gemLod??.7};function z(){let re=Dd(o);ke?.dispose(),ke=V.fromScene(re,o.envSoft??0),g.environment=ke.texture;let ye=Dd({...Dm,...o.gemStudio||{}});new Hs(.1,200,J).update(f,ye);let $e=null;o.gemStudioRest?(pe||(pe=new Zs(512,{type:Wt,generateMipmaps:!0,minFilter:Mn})),$e=Dd({...Dm,...o.gemStudio||{},...o.gemStudioRest}),new Hs(.1,200,pe).update(f,$e)):pe&&(pe.dispose(),pe=null);for(let lt of[re,ye,$e].filter(Boolean))lt.traverse(ft=>{ft.geometry?.dispose(),ft.material?.map?.dispose(),ft.material?.dispose()});y.uniforms.exposure.value=o.exposure,x.roughness=o.roughness??.16,x.clearcoat=o.clearcoat??0,x.clearcoatRoughness=o.clearcoatRoughness??.03;for(let lt of L.values())B(lt);ae&&(ae.opacity=o.shadow),Object.assign(p,{strength:o.bloom?.strength??0,radius:o.bloom?.radius??.1,threshold:o.bloom?.threshold??30});let gt=o.metalGlow;if(_.enabled=!!(gt&&gt.strength>0),y.uniforms.glowK.value=_.enabled?1:0,gt&&(Object.assign(_,{strength:gt.strength,radius:gt.radius??.5,threshold:gt.threshold??4}),gt.factors&&(_.compositeMaterial.uniforms.bloomFactors.value=gt.factors)),p.materialHighPassFilter.uniforms.metalBloom.value=o.metalBloom??0,p.materialHighPassFilter.uniforms.metalThr.value=o.metalThr??12,o.bloomFactors&&(p.compositeMaterial.uniforms.bloomFactors.value=o.bloomFactors),p.enabled=p.strength>0,p.nMips=p.compositeMaterial.uniforms.bloomFactors.value.slice(1).every(lt=>!lt)?1:5,o.bloomKernel&&p._k0!==o.bloomKernel){let lt=p.separableBlurMaterials[0],ft=p._getSeparableBlurMaterial(o.bloomKernel);ft.uniforms.invSize.value.copy(lt.uniforms.invSize.value),p.separableBlurMaterials[0]=ft,lt.dispose(),p._k0=o.bloomKernel}let ct=o.paveGlint;if(v.enabled=!!(ct&&ct.strength>0&&p.enabled),p.materialHighPassFilter.uniforms.paveOn.value=v.enabled?1:0,ct){Object.assign(v,{strength:ct.strength,radius:0,threshold:p.threshold*(ct.thrK??1)}),v.materialHighPassFilter.uniforms.capT.value=p.threshold*3;let lt=ct.kernel??o.bloomKernel??6;if(v._k0!==lt){let ft=v.separableBlurMaterials[0],Pn=v._getSeparableBlurMaterial(lt);Pn.uniforms.invSize.value.copy(ft.uniforms.invSize.value),v.separableBlurMaterials[0]=Pn,ft.dispose(),v._k0=lt}}let Je=o.sideGlint;if(S.enabled=!!(Je&&Je.strength>0&&p.enabled),p.materialHighPassFilter.uniforms.sideOn.value=S.enabled?1:0,Je){Object.assign(S,{strength:Je.strength,radius:0,threshold:p.threshold*(Je.thrK??1)}),S.materialHighPassFilter.uniforms.capT.value=p.threshold*3;let lt=Je.kernel??o.bloomKernel??6;if(S._k0!==lt){let ft=S.separableBlurMaterials[0],Pn=S._getSeparableBlurMaterial(lt);Pn.uniforms.invSize.value.copy(ft.uniforms.invSize.value),S.separableBlurMaterials[0]=Pn,ft.dispose(),S._k0=lt}}for(let lt of E)ve(lt)}z();let q=new We,ie=new hn;g.add(ie);let le=new Fl(b,f.domElement);Object.assign(le,{enableDamping:!0,dampingFactor:.08,enablePan:!1,rotateSpeed:.8,zoomSpeed:.8,autoRotate:!0,autoRotateSpeed:1.4});let me=()=>{f.domElement.style.touchAction=e.touchAll||i.classList.contains("is-full")||document.fullscreenElement===i?"none":"pan-y"};me();let ue=null,ze=!0,Z=0,se=!0,he=!1,fe=!1,ge={center:e.gem||"lab-diamond",accent:e.accentGem||e.gem||"lab-diamond",side:e.sideGem||e.accentGem||e.gem||"lab-diamond",inner:e.innerGem||"ruby"},Fe=new Ws,Le=null;function Ne(re,{keepView:ye=!1}={}){for(let Ye of[...ie.children])ie.remove(Ye),Ye.traverse?.(Dt=>{Dt.isInstancedMesh||Dt===Le?(Dt.geometry?.dispose(),Dt.material!==x&&Dt.material?.dispose?.()):Dt.isMesh&&Dt.userData.ownGeo&&Dt.geometry?.dispose()});E.length=0;for(let Ye of W.splice(0))Ye.alphaMap?.dispose(),Ye.dispose();re.traverse(Ye=>{Ye.name&&Ye.name.includes("~")&&(Ye.name=Ye.name.replace(/~/g,":"))}),re.updateMatrixWorld(!0);let $e=new Map;re.traverse(Ye=>{Ye.isMesh&&(/gem|diamond|stone/i.test(`${Ye.name} ${Ye.material?.name}`)?($e.has(Ye.geometry)||$e.set(Ye.geometry,[]),$e.get(Ye.geometry).push(Ye)):Ye.material=/engrave/.test(Ye.name)?G(Ye.userData.alphaMap):Y(Ye.name))});let gt=new bn().setFromObject(re);for(let[Ye,Dt]of $e){Dt.forEach($=>$.parent.remove($));let Ei=/gem:accent/i.test(Dt[0].name)?"accent":/gem:side/i.test(Dt[0].name)?"side":/gem:inner/i.test(Dt[0].name)?"inner":"center",hi=bM(Ye),Do=mM(hi),w=hi.boundingSphere.radius*2,F=$=>w*$.matrixWorld.getMaxScaleOnAxis()<=(o.paveGlint?.maxD??0);for(let $ of[!1,!0])for(let X of[!1,!0]){let H=Dt.filter(Ee=>Ee.matrixWorld.determinant()<0===$&&F(Ee)===X);if(!H.length)continue;let Re=gM(be(Ei),Do,{bounces:6,chroma:3},$?sn:Un,w);Re.userData.role=Ei,Re.userData.small=X;let Ie=new ks(hi,Re,H.length);H.forEach((Ee,Ue)=>Ie.setMatrixAt(Ue,Ee.matrixWorld)),Ie.renderOrder=1,Ie.computeBoundingSphere(),Ie.computeBoundingBox(),gt.union(Ie.boundingBox),ie.add(Ie),E.push(Re)}}ie.add(re);let ct=gt.getSize(new C),Je=gt.getCenter(new C);Le=new Pt(new ki(ct.x*1.5,Math.max(ct.z,ct.x*.5)*1.6),ae=new Yt({map:_M(),transparent:!0,depthWrite:!1,opacity:o.shadow})),Le.rotation.x=-Math.PI/2,Le.position.set(Je.x,gt.min.y-.02,Je.z),ie.add(Le);let lt=gt.getBoundingSphere(new un),ft=b.fov*Math.PI/360,Pn=i.clientWidth&&i.clientHeight?i.clientWidth/i.clientHeight:b.aspect,Ai=e.fitWidth?Math.min(ft,Math.atan(Math.tan(ft)*Pn)):ft,In=lt.radius/Math.sin(Ai)*(e.fit||1.08),Zn=new C(...e.view||[.62,.32,1]).normalize(),Rs=!ue,Cs=ue?.dist0;if(ue={target:lt.center.clone(),pos:lt.center.clone().addScaledVector(Zn,In*(e.start??1.33)),theta0:Math.atan2(Zn.x,Zn.z),dist0:Cs},Rs||!ye)le.target.copy(ue.target),b.position.copy(ue.pos);else{let Ye=b.position.clone().sub(le.target);e.rescale&&ue.dist0&&Ye.multiplyScalar(In/ue.dist0),le.target.copy(ue.target),b.position.copy(ue.target).add(Ye)}ue.dist0=In,le.minDistance=In*.3,le.maxDistance=In*2.2,b.near=In/50,b.far=In*20,b.updateProjectionMatrix(),Ve(Ce||e.metal||n[0],!0),Oe(),Rs&&(d("[data-load]").hidden=!0,i.classList.add("is-ready")),xe(),T()}e.object?requestAnimationFrame(()=>Ne(e.object)):new Ul().setMeshoptDecoder(Im).load(e.src,ye=>Ne(ye.scene),ye=>{ye.total&&(d("[data-bar]").style.width=`${Math.round(ye.loaded/ye.total*100)}%`)},()=>{d("[data-load]").innerHTML=`<span>${t.error}</span>`});let je=0,D=0,tt=c;function it(re){if(fe)return;Fe.update(re);let ye=Math.min(Fe.getDelta(),.1),$e=ze&&performance.now()>=Z;le.autoRotate=$e&&!R,$e&&R&&!ee&&te(ye);let gt=le.update(ye),ct=!x.color.equals(q)||A.deep.value!==P;if(ct){let ft=Math.min(1,ye*8);x.color.lerp(q,ft),A.deep.value+=(P-A.deep.value)*ft,Math.abs(x.color.r-q.r)+Math.abs(x.color.g-q.g)+Math.abs(x.color.b-q.b)<.002&&(x.color.copy(q),A.deep.value=P)}ce(ye);let Je=gt||$e||ct||ee;if(Je&&(h!==tt&&_e(tt),je+=ye,D++,D>=20)){let ft=je/D;je=D=0,ft>1/28&&tt>l?_e(tt=Math.max(l,tt-.25)):ft<1/50&&tt<c&&_e(tt=Math.min(c,tt+.25))}let lt=se&&!document.hidden&&(Je||performance.now()<Z);!lt&&h<c&&_e(c),T(),lt?requestAnimationFrame(it):he=!1}let R=!!e.tilt,M=new ms,k=new C,K={mid:37.5,amp:27.5,phase:125};function te(re){k.copy(b.position).sub(le.target),M.setFromVector3(k),M.theta-=2*Math.PI/60*le.autoRotateSpeed*re;let ye=K.mid+K.amp*Math.sin(M.theta-ue.theta0-K.phase*Math.PI/180);M.phi+=(Math.PI/2-ye*Math.PI/180-M.phi)*Math.min(1,re*.8),b.position.copy(le.target).add(k.setFromSpherical(M)),b.lookAt(le.target)}function _e(re){h=Math.max(l,Math.min(c,re)),f.setPixelRatio(h),m.setPixelRatio(h),je=D=0}function xe(){!he&&ue&&(he=!0,Fe.reset(),requestAnimationFrame(it))}let ee=null;function ce(re){if(!ee)return;ee.t=Math.min(1,ee.t+re/ee.d);let ye=1-Math.pow(1-ee.t,3);b.position.lerpVectors(ee.p0,ee.p1,ye),le.target.lerpVectors(ee.t0,ee.t1,ye),ee.t>=1&&(ee=null)}let Te=(re,ye,$e=.6)=>{ee={t:0,d:$e,p0:b.position.clone(),p1:re,t0:le.target.clone(),t1:ye},xe()},He=re=>{let ye=b.position.clone().sub(le.target),$e=Math.min(le.maxDistance,Math.max(le.minDistance,ye.length()*re));Te(le.target.clone().add(ye.setLength($e)),le.target.clone(),.35)};if(le.addEventListener("start",()=>{Z=1/0,ee=null,d("[data-hint]").classList.add("off"),xe()}),e.holdPan){let re=e.holdMs??3e3,ye=8,$e=f.domElement,gt=$e.ownerDocument,ct=document.createElement("div");ct.className="tg3d-hold",ct.style.setProperty("--hold",`${re-250}ms`),ct.innerHTML=`<svg viewBox="0 0 44 44" aria-hidden="true"><circle cx="22" cy="22" r="18"/><circle class="p" cx="22" cy="22" r="18"/><path class="mv" d="M22 13v18M13 22h18M22 13l-3 3M22 13l3 3M22 31l-3-3M22 31l3-3M13 22l3-3M13 22l3 3M31 22l-3-3M31 22l-3 3"/></svg><span>${t.pan||"K\xE9o \u0111\u1EC3 d\u1ECBch khung"}</span>`,i.appendChild(ct);let Je=null,lt=!1,ft=new Set,Pn=new C,Ai=new C,In=()=>{ct.classList.remove("show","fill","on"),i.classList.remove("is-pan")},Zn=()=>{Je&&(clearTimeout(Je.t0),clearTimeout(Je.t1),Je=null),lt||In()},Rs=(Ye,Dt)=>{let Ei=2*b.position.distanceTo(le.target)*Math.tan(b.fov*Math.PI/360)/$e.clientHeight;Pn.setFromMatrixColumn(b.matrix,0),Ai.setFromMatrixColumn(b.matrix,1);let hi=Pn.multiplyScalar(-Ye*Ei).addScaledVector(Ai,Dt*Ei);b.position.add(hi),le.target.add(hi),T()};$e.addEventListener("pointerdown",Ye=>{if(ft.add(Ye.pointerId),ft.size>1){Zn();return}let Dt=i.getBoundingClientRect(),Ei=Ye.clientX-Dt.left,hi=Ye.clientY-Dt.top;Je={id:Ye.pointerId,x:Ye.clientX,y:Ye.clientY,lx:Ye.clientX,ly:Ye.clientY},ct.style.left=`${Ei}px`,ct.style.top=`${hi}px`,Je.t0=setTimeout(()=>{ct.classList.add("show"),requestAnimationFrame(()=>ct.classList.add("fill"))},250),Je.t1=setTimeout(()=>{Je&&(lt=!0,le.enabled=!1,ct.classList.add("on"),i.classList.add("is-pan"),navigator.vibrate?.(15))},re)}),gt.addEventListener("pointermove",Ye=>{if(!(!Je||Ye.pointerId!==Je.id)){if(lt){Rs(Ye.clientX-Je.lx,Ye.clientY-Je.ly),Je.lx=Ye.clientX,Je.ly=Ye.clientY;let Dt=i.getBoundingClientRect();ct.style.left=`${Ye.clientX-Dt.left}px`,ct.style.top=`${Ye.clientY-Dt.top}px`;return}Math.hypot(Ye.clientX-Je.x,Ye.clientY-Je.y)>ye&&Zn()}});let Cs=Ye=>{ft.delete(Ye.pointerId),!(!Je||Ye.pointerId!==Je.id)&&(clearTimeout(Je.t0),clearTimeout(Je.t1),Je=null,lt&&(lt=!1,le.enabled=!0),In())};gt.addEventListener("pointerup",Cs),gt.addEventListener("pointercancel",Cs)}le.addEventListener("end",()=>{Z=performance.now()+2500,xe()}),le.addEventListener("change",xe);let we=d('[data-act="play"]'),Me=d('[data-act="tilt"]'),Ge=re=>{R=re,Me.setAttribute("aria-pressed",re),Me.title=re?t.tiltOff:t.tilt,Me.setAttribute("aria-label",Me.title),re&&!ze&&Ke(!0),xe()},Ke=re=>{ze=re,Z=0,we.setAttribute("aria-pressed",re),we.innerHTML=Ms(re?"pause":"play"),we.title=re?t.pause:t.play,we.setAttribute("aria-label",we.title),xe()};Ge(R),i.addEventListener("click",re=>{let ye=re.target.closest("button");if(!ye)return;let $e=ye.dataset.act;$e==="play"?Ke(!ze):$e==="tilt"?Ge(!R):$e==="reset"&&ue?Te(ue.pos.clone(),ue.target.clone(),.8):$e==="in"?He(.75):$e==="out"?He(1.33):$e==="full"?Ae():ye.dataset.metal&&(Ve(ye.dataset.metal),i.dispatchEvent(new CustomEvent("tg3d:metal",{detail:ye.dataset.metal,bubbles:!0})))});let Qe=!!(i.requestFullscreen&&document.fullscreenEnabled),O=()=>Qe?document.fullscreenElement===i:i.classList.contains("is-full");function Ae(){if(Qe){O()?document.exitFullscreen():i.requestFullscreen().catch(()=>{});return}i.classList.toggle("is-full"),document.documentElement.classList.toggle("tg3d-lock",O()),ne()}function ne(){me();let re=O(),ye=d('[data-act="full"]');ye.innerHTML=Ms(re?"exit":"full"),ye.title=re?t.exitFull:t.full,ye.setAttribute("aria-label",ye.title),setTimeout(Se,60)}document.addEventListener("fullscreenchange",ne),document.addEventListener("keydown",re=>{re.key==="Escape"&&!Qe&&O()&&Ae()});function Se(re=!0){let ye=u.clientWidth,$e=u.clientHeight;!ye||!$e||(f.setSize(ye,$e,!1),m.setSize(ye,$e),b.aspect=ye/$e,b.updateProjectionMatrix(),re&&ue&&T())}new ResizeObserver(()=>Se()).observe(u),Se(),new IntersectionObserver(([re])=>{se=re.isIntersecting,se&&xe()}).observe(i),document.addEventListener("visibilitychange",()=>{document.hidden||xe()});let Ce=null;function de(re){o.metals[re]&&(N.setRGB(...o.metals[re]),U.deep.value=o.metalDeep?.[re]??0,U.deepR.value=o.metalDeepR??.6,ue&&T())}e.metal2&&de(e.metal2);function Ve(re,ye){o.metals[re]&&(Ce=re,q.setRGB(...o.metals[re]),P=o.metalDeep?.[re]??0,A.deepR.value=o.metalDeepR??.6,ye&&(x.color.copy(q),A.deep.value=P),i.querySelectorAll("[data-metal]").forEach($e=>$e.setAttribute("aria-checked",$e.dataset.metal===re)),xe(),ye&&ue&&T())}function Oe(){for(let re of E){let ye=Ld[ge[re.userData.role||"center"]];ye&&(re.uniforms.ior.value=ye.ior,re.uniforms.disp.value=ye.disp,re.uniforms.absorb.value.fromArray(ye.absorb||[0,0,0]),re.uniforms.spark.value=ye.spark??0,re.uniforms.reflK.value=ye.reflK??1,re.uniforms.reflHi.value=ye.reflHi??0,ve(re))}}function wt(re,ye){Ld[re]&&(ye?ge[ye]=re:ge.center=ge.accent=re,Oe(),ue&&T())}function mt(re,ye=1,$e){if(!ue)return;let gt=ue.pos.distanceTo(ue.target)*ye,ct=$e?new C(...$e):ue.target.clone();b.position.copy(ct).addScaledVector(new C(...re).normalize(),gt),le.target.copy(ct),le.update(0),T()}function Cn(re){o={...o,...re,metals:{...o.metals,...re.metals||{}}},z(),Ce&&Ve(Ce,!0),re.bg&&(i.style.background=re.bg),T()}let Gn={renderer:f,composer:m,bloom:p,bloomP:v,bloomS:S,paint:T,scene:g,camera:b,gemMats:E,metalMat:x,metalU:A,resize:Se,setLook:Cn,get look(){return o},get pr(){return h}},ph=(re,ye={})=>Ne(re,{keepView:!0,...ye});function mh(re,ye=1,$e){if(!ue)return;let gt=re?new C(...re):ue.target.clone(),ct=$e?new C(...$e).normalize():b.position.clone().sub(le.target).normalize();Te(gt.clone().addScaledVector(ct,ue.pos.distanceTo(ue.target)*ye),gt,.7)}return{_debug:Gn,setMetal:Ve,setMetal2:de,setGem:wt,setObject:ph,setPlay:Ke,setTilt:Ge,setView:mt,lookAt:mh,destroy(){fe=!0,f.dispose(),i.innerHTML=""}}}var Ts=Math.PI/180,Ss=(i,e)=>i[0]*e[0]+i[1]*e[1]+i[2]*e[2];function xM(i,e=20){let t=e,n=[[[-t,-t,-t],[-t,-t,t],[-t,t,t],[-t,t,-t]],[[t,-t,-t],[t,t,-t],[t,t,t],[t,-t,t]],[[-t,-t,-t],[t,-t,-t],[t,-t,t],[-t,-t,t]],[[-t,t,-t],[-t,t,t],[t,t,t],[t,t,-t]],[[-t,-t,-t],[-t,t,-t],[t,t,-t],[t,-t,-t]],[[-t,-t,t],[t,-t,t],[t,t,t],[-t,t,t]]],s=1e-9;for(let{n:r,d:a}of i){let o=[],c=[];for(let l of n){let h=[];for(let d=0;d<l.length;d++){let u=l[d],f=l[(d+1)%l.length],g=Ss(r,u)-a,b=Ss(r,f)-a;if(g<=s&&h.push(u),g<-s&&b>s||g>s&&b<-s){let m=g/(g-b),p=[u[0]+(f[0]-u[0])*m,u[1]+(f[1]-u[1])*m,u[2]+(f[2]-u[2])*m];h.push(p),o.push(p)}else Math.abs(g)<=s&&o.push(u)}h.length>=3&&c.push(h)}if(n=c,o.length>=3){let l=o.reduce((b,m)=>[b[0]+m[0],b[1]+m[1],b[2]+m[2]],[0,0,0]).map(b=>b/o.length),h=Math.abs(r[0])<.9?[0,r[2],-r[1]]:[-r[2],0,r[0]],d=Math.hypot(...h),u=h.map(b=>b/d),f=[r[1]*u[2]-r[2]*u[1],r[2]*u[0]-r[0]*u[2],r[0]*u[1]-r[1]*u[0]],g=[];for(let b of o)g.some(m=>Math.hypot(b[0]-m[0],b[1]-m[1],b[2]-m[2])<1e-7)||g.push(b);g.sort((b,m)=>Math.atan2(Ss(f,[b[0]-l[0],b[1]-l[1],b[2]-l[2]]),Ss(u,[b[0]-l[0],b[1]-l[1],b[2]-l[2]]))-Math.atan2(Ss(f,[m[0]-l[0],m[1]-l[1],m[2]-l[2]]),Ss(u,[m[0]-l[0],m[1]-l[1],m[2]-l[2]]))),g.length>=3&&n.push(g)}}return n}function vM(i,e=[1,1,1]){let t=[];for(let s of i)for(let r=1;r<s.length-1;r++)for(let a of[s[0],s[r],s[r+1]])t.push(a[0]*e[0],a[1]*e[1],a[2]*e[2]);let n=new St;return n.setAttribute("position",new Ct(new Float32Array(t),3)),n.computeVertexNormals(),n}function Hl(i,e,t,n=128){let s=[];for(let r=0;r<n;r++){let a=r/n*Math.PI*2,o=Math.cos(a),c=Math.sin(a);s.push([i*Math.sign(o)*Math.abs(o)**(2/t),e*Math.sign(c)*Math.abs(c)**(2/t)])}return s}function Wl(i,e,t){return[[i,-e+t],[i,e-t],[i-t,e],[-i+t,e],[-i,e-t],[-i,-e+t],[-i+t,-e],[i-t,-e]]}function yM(i,e=128){let t=(i*i+1)/2,n=[],s=Math.asin(i/t);for(let r=0;r<e/2;r++){let a=-s+2*s*r/(e/2);n.push([t*Math.sin(a),t*Math.cos(a)-(t-1)])}for(let r=0;r<e/2;r++){let a=-s+2*s*r/(e/2);n.push([-t*Math.sin(a),-(t*Math.cos(a)-(t-1))])}return n}function MM(i,e=128){let t=[],n=-(i-1)/2,s=i+n,r=s-n,a=Math.acos(1/r),o=Math.round(e*.75);for(let d=0;d<=o;d++){let u=a+(2*Math.PI-2*a)*d/o;t.push([n+Math.cos(u),Math.sin(u)])}let c=d=>{let u=[n+Math.cos(d*a),Math.sin(d*a)],f=[s,0],g=10,b=[];for(let m=1;m<g;m++){let p=m/g,v=u[0]+(f[0]-u[0])*p,S=u[1]+(f[1]-u[1])*p,_=.08*Math.sin(Math.PI*p)*d;b.push([v+_*.3,S+_])}return b},l=c(-1);for(let d of l)t.push(d);t.push([s,0]);let h=c(1).reverse();for(let d of h)t.push(d);return t}function SM(i){let e=i.length,t=[0];for(let r=0;r<e;r++){let a=i[r],o=i[(r+1)%e];t.push(t[r]+Math.hypot(o[0]-a[0],o[1]-a[1]))}let n=t[e];return{at:r=>{let a=(r%1+1)%1*n,o=0;for(;o<e-1&&t[o+1]<a;)o++;let c=i[o],l=i[(o+1)%e],h=(a-t[o])/(t[o+1]-t[o]||1),d=[c[0]+(l[0]-c[0])*h,c[1]+(l[1]-c[1])*h],u=b=>{let m=i[(b+e)%e],p=i[(b+1)%e],v=p[0]-m[0],S=p[1]-m[1],_=Math.hypot(v,S)||1;return[S/_,-v/_]},f=u(o);if(h<.02){let b=u(o-1);f=[f[0]+b[0],f[1]+b[1]]}else if(h>.98){let b=u(o+1);f=[f[0]+b[0],f[1]+b[1]]}let g=Math.hypot(f[0],f[1]);return{p:d,n:[f[0]/g,f[1]/g]}},L:n,pts:i}}var Fd=i=>{let e=0;for(let t=0;t<i.length;t++){let n=i[t],s=i[(t+1)%i.length];e+=n[0]*s[1]-s[0]*n[1]}return e>0?i:i.slice().reverse()};function TM(i,e={}){let t=Fd(i),n=SM(t),s=e.girdle??.03,r=(e.crown??34.5)*Ts,a=(e.pavilion??40.75)*Ts,c=1-(e.table??.57),l=c*Math.tan(r),h=s/2+l,d=[],u=(m,p,v,S)=>{let _=Math.hypot(m,p,v),y=[m/_,p/_,v/_];d.push({n:y,d:Ss(y,S)})},f=e.girdleN??64;for(let m=0;m<f;m++){let{p,n:v}=n.at(m/f);u(v[0],0,v[1],[p[0],0,p[1]])}u(0,1,0,[0,h,0]);let g=e.offset??0,b=(m,p,v)=>[Math.sin(m)*p[0],v?Math.cos(m):-Math.cos(m),Math.sin(m)*p[1]];for(let m=0;m<8;m++){let{p,n:v}=n.at(g+m/8);u(...b(r,v,!0),[p[0],s/2,p[1]])}for(let m=0;m<8;m++){let{p,n:v}=n.at(g+(m+.5)/8);u(...b(r*.62,v,!0),[p[0]-v[0]*c,h,p[1]-v[1]*c])}for(let m=0;m<16;m++){let{p,n:v}=n.at(g+(m+.5)/16);u(...b(r+7.5*Ts,v,!0),[p[0],s/2,p[1]])}for(let m=0;m<8;m++){let{p,n:v}=n.at(g+m/8);u(...b(a,v,!1),[p[0],-s/2,p[1]])}for(let m=0;m<16;m++){let{p,n:v}=n.at(g+(m+.5)/16);u(...b(a+1.3*Ts,v,!1),[p[0],-s/2,p[1]])}return d}function wM(i,e={}){let t=Fd(i),n=e.girdle??.03,s=e.crown??[[.13,50],[.13,38],[.12,26]],r=e.pav??[[.2,62],[.22,52],[.25,43],[.4,36]],a=[],o=(l,h)=>{let d=Math.hypot(...l),u=l.map(f=>f/d);a.push({n:u,d:Ss(u,h)})},c=n/2;for(let l=0;l<t.length;l++){let h=t[l],d=t[(l+1)%t.length],u=d[0]-h[0],f=d[1]-h[1],g=Math.hypot(u,f),b=[f/g,-u/g],m=[(h[0]+d[0])/2,(h[1]+d[1])/2];o([b[0],0,b[1]],[m[0],0,m[1]]);let p=0,v=n/2;for(let[S,_]of s){let y=_*Ts;o([Math.sin(y)*b[0],Math.cos(y),Math.sin(y)*b[1]],[m[0]-b[0]*p,v,m[1]-b[1]*p]),p+=S,v+=S*Math.tan(y)}c=v,p=0,v=-n/2;for(let[S,_]of r){let y=_*Ts;o([Math.sin(y)*b[0],-Math.cos(y),Math.sin(y)*b[1]],[m[0]-b[0]*p,v,m[1]-b[1]*p]),p+=S,v-=S*Math.tan(y)}}return a.push({n:[0,1,0],d:c}),a}var Om=[[1.3,0],[.62,1],[-.62,1],[-1.3,0],[-.62,-1],[.62,-1]],Bm=[[1.6,-.62],[1.6,.62],[-1.6,1],[-1.6,-1]],Gm={round:{vi:"Tr\xF2n",en:"Round",ratio:1,mm1ct:[6.5,6.5],outline:()=>Hl(1,1,2),cut:"brilliant",kind:"curved"},oval:{vi:"Oval",en:"Oval",ratio:1.38,mm1ct:[7.7,5.6],outline:()=>Hl(1.38,1,2),cut:"brilliant",kind:"curved"},cushion:{vi:"Cushion",en:"Cushion",ratio:1.05,mm1ct:[5.8,5.5],outline:()=>Hl(1.05,1,3.4),cut:"brilliant",kind:"curved"},cushionLong:{vi:"Cushion d\xE0i",en:"Elongated cushion",ratio:1.25,mm1ct:[6.6,5.3],outline:()=>Hl(1.25,1,3.4),cut:"brilliant",kind:"curved"},princess:{vi:"Princess",en:"Princess",ratio:1,mm1ct:[5.5,5.5],outline:()=>Wl(1,1,.04),cut:"brilliant",offset:1/16,kind:"rect",rect:[1,1,.04]},radiant:{vi:"Radiant",en:"Radiant",ratio:1.25,mm1ct:[6.5,5.2],outline:()=>Wl(1.25,1,.22),cut:"brilliant",offset:1/16,kind:"rect",rect:[1.25,1,.22]},emerald:{vi:"Emerald",en:"Emerald",ratio:1.42,mm1ct:[7,5],outline:()=>Wl(1.42,1,.26),cut:"step",kind:"rect",rect:[1.42,1,.26]},asscher:{vi:"Asscher",en:"Asscher",ratio:1,mm1ct:[5.6,5.6],outline:()=>Wl(1,1,.32),cut:"step",kind:"rect",rect:[1,1,.32]},hexagon:{vi:"L\u1EE5c gi\xE1c",en:"Hexagon",ratio:1.3,mm1ct:[7,5.4],outline:()=>Om,cut:"step",kind:"poly",poly:Om},pear:{vi:"Gi\u1ECDt n\u01B0\u1EDBc",en:"Pear",ratio:1.55,mm1ct:[8.2,5.4],outline:()=>MM(3.1-1),cut:"brilliant",kind:"pear"},marquise:{vi:"Marquise",en:"Marquise",ratio:2,mm1ct:[10,5],outline:()=>yM(2),cut:"brilliant",kind:"marquise"}},AM={outline:()=>[[2.6,-1],[2.6,1],[-2.6,1],[-2.6,-1]],cut:"step",crown:[[.12,45],[.12,30]],pav:[[.3,55],[.4,42],[.5,35]]},km=[[2,-1],[2,1],[-2,1],[-2,-1]],zm=[[1,-1],[1,1],[-1,1],[-1,-1]],Vm={taperedBaguette:{outline:()=>Bm,cut:"step",kind:"poly",poly:Bm,crown:[[.12,45],[.12,30]],pav:[[.22,55],[.3,42],[.4,35]]},bag2:{outline:()=>km,cut:"step",kind:"poly",poly:km,crown:[[.12,45],[.12,30]],pav:[[.3,55],[.4,42],[.5,35]]},carre:{outline:()=>zm,cut:"step",kind:"poly",poly:zm,crown:[[.12,45],[.12,30]],pav:[[.3,55],[.35,42],[.35,35]]}},EM=i=>i==="baguette"?AM:Gm[i]||Vm[i];var Nd=new Map;function Hm(i){if(Nd.has(i))return Nd.get(i);let e=EM(i),t=Fd(e.outline()),n=e.cut==="step"?wM(t,e):TM(t,{offset:e.offset||0}),s=xM(n),r=vM(s);r.computeBoundingBox();let a=r.boundingBox,o;if(e.cut==="step"){let l=e.pav??[[.2,62],[.22,52],[.25,43],[.4,36]],h=[[0,0]];for(let[d,u]of l){let[f,g]=h[h.length-1];h.push([f+d*Math.tan(u*Ts),g+d])}o=d=>{for(let u=1;u<h.length;u++)if(d<=h[u][0]){let[f,g]=h[u-1],[b,m]=h[u];return g+(d-f)/(b-f)*(m-g)}return h[h.length-1][1]}}else o=l=>l/Math.tan(40.75*Ts);let c={geo:r,outline:t,top:a.max.y,bottom:a.min.y,planes:n.length,inset:o,crownAngle:e.cut==="step"?48:35};return Nd.set(i,c),c}var Qw=Math.PI/180,Wm=new Yt;function yi(i,e,t,n,s){let r=new Float32Array(i*e*3),a=0;for(let d=0;d<i;d++)for(let u=0;u<e;u++){let f=t(d,u);r[a++]=f[0],r[a++]=f[1],r[a++]=f[2]}let o=[],c=n?i:i-1,l=s?e:e-1;for(let d=0;d<c;d++)for(let u=0;u<l;u++){let f=d*e+u,g=(d+1)%i*e+u,b=(d+1)%i*e+(u+1)%e,m=d*e+(u+1)%e;o.push(f,g,b,f,b,m)}let h=new St;return h.setAttribute("position",new Ct(r,3)),h.setIndex(o),RM(h)}function RM(i){let e=i.attributes.position.array,t=i.index.array,n=0;for(let s=0;s<t.length;s+=3){let r=t[s]*3,a=t[s+1]*3,o=t[s+2]*3;n+=e[r]*(e[a+1]*e[o+2]-e[a+2]*e[o+1])-e[r+1]*(e[a]*e[o+2]-e[a+2]*e[o])+e[r+2]*(e[a]*e[o+1]-e[a+1]*e[o])}if(n<0){let s=Array.from(t);for(let r=0;r<s.length;r+=3){let a=s[r+1];s[r+1]=s[r+2],s[r+2]=a}i.setIndex(s)}return i.computeVertexNormals(),i}function Od(i,e,t=14,n=64){let r=new Vr(i,!1,"centripetal").getSpacedPoints(n-1),a=r.map((h,d)=>r[Math.min(d+1,r.length-1)].clone().sub(r[Math.max(d-1,0)]).normalize()),o=new C(0,1,0);Math.abs(o.dot(a[0]))>.9&&o.set(1,0,0),o.sub(a[0].clone().multiplyScalar(o.dot(a[0]))).normalize();let c=[],l=[];for(let h=0;h<r.length;h++)h&&o.sub(a[h].clone().multiplyScalar(o.dot(a[h]))).normalize(),c.push(o.clone()),l.push(a[h].clone().cross(o).normalize());return yi(r.length,t,(h,d)=>{let u=h/(r.length-1),f=d/t*Math.PI*2,g=e(u),b=r[h].clone().addScaledVector(c[h],Math.cos(f)*g).addScaledVector(l[h],Math.sin(f)*g);return[b.x,b.y,b.z]},!1,!0)}function Mi(i,e,t=28){let n=0;for(let r=1;r<i.length;r++)n+=i[r].distanceTo(i[r-1]);let s=Math.min(.3,e/n);return Od(i,r=>{let a=r<s?(s-r)/s:r>1-s?(r-(1-s))/s:0;return e*Math.sqrt(Math.max(0,1-a*a))},12,t)}function qm(i,e,t=8){if(!i.length)return null;let n=i.map(s=>{let r=new zi(s[3]??e,t,Math.max(4,t-2));return r.translate(s[0],s[1],s[2]),r});return ji(n)}function wn(i,e,t="metal"){if(!e)return;let n=new Pt(e,Wm);n.name=t,n.userData.ownGeo=!0,i.add(n)}var Ud=new Map;function Xm(i,e,t,n,s){let r=Hm(i).geo,a=`${e}:${i}`;e!=="center"&&(Ud.has(a)||Ud.set(a,r.clone()),r=Ud.get(a));let o=new Pt(r,Wm);return o.name=e==="center"?"gem:center":`gem:${e}:${i}`,o.scale.setScalar(t),o.position.copy(n),s&&o.quaternion.copy(s),o}var ql={A:[[[0,0],[2,6],[4,0]],[[.8,2.1],[3.2,2.1]]],B:[[[0,0],[0,6],[2.4,6],[3.6,5.3],[3.6,3.9],[2.4,3.2],[0,3.2]],[[2.4,3.2],[4,2.4],[4,.9],[2.7,0],[0,0]]],C:[[[4,4.8],[3,6],[1,6],[0,4.8],[0,1.2],[1,0],[3,0],[4,1.2]]],D:[[[0,0],[0,6],[2.2,6],[4,4.4],[4,1.6],[2.2,0],[0,0]]],\u0110:[[[.4,0],[.4,6],[2.4,6],[4,4.4],[4,1.6],[2.4,0],[.4,0]],[[-.5,3],[1.9,3]]],E:[[[4,6],[0,6],[0,0],[4,0]],[[0,3.1],[3,3.1]]],F:[[[4,6],[0,6],[0,0]],[[0,3.1],[3,3.1]]],G:[[[4,4.8],[3,6],[1,6],[0,4.8],[0,1.2],[1,0],[3,0],[4,1.2],[4,2.8],[2.3,2.8]]],H:[[[0,0],[0,6]],[[4,0],[4,6]],[[0,3],[4,3]]],I:[[[2,0],[2,6]],[[.7,6],[3.3,6]],[[.7,0],[3.3,0]]],J:[[[1.4,6],[3.6,6]],[[3.2,6],[3.2,1.3],[2.2,0],[1,0],[0,1.3]]],K:[[[0,0],[0,6]],[[4,6],[0,2.5]],[[1.5,3.8],[4,0]]],L:[[[0,6],[0,0],[4,0]]],M:[[[0,0],[0,6],[2,2.4],[4,6],[4,0]]],N:[[[0,0],[0,6],[4,0],[4,6]]],O:[[[1,0],[3,0],[4,1.2],[4,4.8],[3,6],[1,6],[0,4.8],[0,1.2],[1,0]]],P:[[[0,0],[0,6],[2.6,6],[3.9,5.2],[3.9,3.6],[2.6,2.8],[0,2.8]]],Q:[[[1,0],[3,0],[4,1.2],[4,4.8],[3,6],[1,6],[0,4.8],[0,1.2],[1,0]],[[2.4,1.7],[4.2,-.3]]],R:[[[0,0],[0,6],[2.6,6],[3.9,5.2],[3.9,3.6],[2.6,2.8],[0,2.8]],[[2,2.8],[4,0]]],S:[[[4,4.9],[3,6],[1,6],[0,4.9],[0,3.9],[1,3.1],[3,2.9],[4,2.1],[4,1.1],[3,0],[1,0],[0,1.1]]],T:[[[0,6],[4,6]],[[2,6],[2,0]]],U:[[[0,6],[0,1.2],[1,0],[3,0],[4,1.2],[4,6]]],V:[[[0,6],[2,0],[4,6]]],W:[[[0,6],[.9,0],[2,4.2],[3.1,0],[4,6]]],X:[[[0,0],[4,6]],[[0,6],[4,0]]],Y:[[[0,6],[2,3],[4,6]],[[2,3],[2,0]]],Z:[[[0,6],[4,6],[0,0],[4,0]]],0:[[[1,0],[3,0],[4,1.2],[4,4.8],[3,6],[1,6],[0,4.8],[0,1.2],[1,0]]],1:[[[.9,4.8],[2.3,6],[2.3,0]],[[.8,0],[3.8,0]]],2:[[[0,4.8],[1,6],[3,6],[4,4.8],[4,3.6],[0,0],[4,0]]],3:[[[0,4.9],[1,6],[3,6],[4,4.9],[4,3.9],[3,3.1],[1.6,3.1]],[[3,3.1],[4,2.3],[4,1.1],[3,0],[1,0],[0,1.1]]],4:[[[3.1,0],[3.1,6],[0,1.9],[4.2,1.9]]],5:[[[4,6],[.4,6],[.2,3.3],[2.6,3.6],[4,2.6],[4,1.1],[3,0],[1,0],[0,1.1]]],6:[[[3.8,5.2],[2.8,6],[1.2,6],[0,4.8],[0,1.2],[1,0],[3,0],[4,1.2],[4,2.4],[3,3.5],[1,3.5],[0,2.4]]],7:[[[0,6],[4,6],[1.4,0]]],8:[[[1,3.2],[.2,4],[.2,5.1],[1.1,6],[2.9,6],[3.8,5.1],[3.8,4],[3,3.2],[1,3.2],[0,2.3],[0,1.1],[1,0],[3,0],[4,1.1],[4,2.3],[3,3.2]]],9:[[[4,3.6],[3,2.5],[1,2.5],[0,3.6],[0,4.8],[1,6],[3,6],[4,4.8],[4,1.2],[2.8,0],[1.2,0],[.2,.8]]],"\u271D":[[[2,6.4],[2,-.4]],[[.2,4.3],[3.8,4.3]]],$:[[[4,4.6],[3,5.6],[1,5.6],[0,4.6],[0,3.8],[1,3.1],[3,2.9],[4,2.2],[4,1.4],[3,.4],[1,.4],[0,1.4]],[[2,6.9],[2,-.9]]],"\u2665":[[[2,.2],[.3,2.6],[0,3.9],[.4,5.1],[1.2,5.6],[1.8,5.2],[2,4.5],[2.2,5.2],[2.8,5.6],[3.6,5.1],[4,3.9],[3.7,2.6],[2,.2]]],"\u2605":[[[2,6.3],[2.75,4.05],[5.1,4.05],[3.2,2.6],[3.9,.3],[2,1.7],[.1,.3],[.8,2.6],[-1.1,4.05],[1.25,4.05],[2,6.3]]]};var Yn={type:"tag",outline:"rect",size:28,border:"pave2",frame2:"none",field:"nham",motif:"glyph",ch1:"T",ch2:"",motifStone:"on",crossStyle:"loe",crossSize:32,crossFill:"baguette",crossCenter:"stone",figure:"heart",figSize:26,figFill:"pave",figCenter:"none",petals:12,name:"TGOLD",nameStyle:"plate",nameSize:9,paveD:"mid",back:"x",bail:"pave",bailSize:"std",finish:"bong",twoTone:"none",metal:"vang",metal2:"vang-trang",gem:"lab-diamond",accentGem:"lab-diamond",sideGem:"lab-diamond",motifGem:"lab-diamond",karat:"18K"},Ql=["rect","oct","round","oval"],Wd=[24,28,32,36],eh=["pave1","pave2","baguette","bagRadial","plain"],th=["none","pave","baguette","rail"],CM=["nham","bong","pave"],PM=["loe","thang"],qd=[28,32,38],IM=["baguette","pave","plain"],LM=["x","tram","ong","dac"],DM=["pave","baguette","plain"],nh=[..."ABCD\u0110EFGHIJKLMNOPQRSTUVWXYZ"],ih=[..."0123456789"],Xd=["\u271D","$","\u2665","\u2605"],jm=[...nh,...ih,...Xd],NM=["tag","cross","shape","flower","bee","initial","name"],jd=["heart","star","moon","drop","crown","bolt","triangle"],jl={shape:[20,26,32],flower:[24,28,32],bee:[26,30,36],initial:[24,30,36]},FM=["pave","edge","plain"],Kd=[8,10,12],sh=i=>i.type==="shape"&&["heart","star","drop","triangle"].includes(i.figure),rh=8,Yd=[7,9,11],UM=[...nh,...ih,"$"],ah=i=>[...String(i??"").toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"")].filter(e=>UM.includes(e)).slice(0,rh).join(""),Ym=i=>i.type==="name"&&i.nameStyle!=="cut",ha={small:1.2,mid:1.5,big:1.8},OM={small:1.25,mid:1.5,big:2},bt=.85,tn=Math.PI*2,nr=Math.PI/180,en=(i,e,t)=>Math.min(t,Math.max(e,i)),la=new C(0,1,0),Ro=i=>new Ht().setFromUnitVectors(la,i);function Kl(i,e){let t=Ro(i),n=new C(1,0,0).applyQuaternion(t),s=e.clone().projectOnPlane(i).normalize();return n.dot(s)<0&&s.negate(),new Ht().setFromAxisAngle(i,Math.atan2(i.dot(n.clone().cross(s)),n.dot(s))).multiply(t)}function Jm(i){let e=ws(i),t=o=>Math.round(o*10)/10;if(e.type==="cross")return[t(e.crossSize*.68),e.crossSize];if(e.type==="tag")return[e.outline==="round"?e.size:t(e.size*.82),e.size];if(e.type==="name"){if(Ym(e)){let c=Qm(e);return[t(c.W),t(c.H)]}let o=ag(e);return[t(o.textW),t(o.hL)]}if(e.type==="flower")return[e.figSize,e.figSize];if(e.type==="bee")return[t(e.figSize/ng*YM),e.figSize];let n=e.type==="shape"?tg(e).poly:Vd(e).pts,s=n.map(o=>o[0]),r=n.map(o=>o[1]),a=e.type==="initial"?Vd(e).w:0;return[t(Math.max(...s)-Math.min(...s)+a),t(Math.max(...r)-Math.min(...r)+a)]}var Yi=.55,$m=.4;function Jd(i,e=i.frame2){let t=ha[i.paveD],n=OM[i.paveD],s={pave1:t+.9,pave2:2*t+1.05,baguette:n+1.15,bagRadial:2*n+.95,plain:2.3}[i.border],r=Math.min(t,1.4),a={none:0,pave:r+.55,baguette:1.25+.95,rail:.55}[e],o=Yi+s;return{dS:t,bw:n,wb:s,dS2:r,wf:a,dB:o,dC:o+$m+a}}var oh=(i,e)=>e==="none"||i.type==="name"||(i.outline==="round"?i.size:i.size*.82)/2-Jd({...i,paveD:ha[i.paveD]?i.paveD:"mid",border:eh.includes(i.border)?i.border:"pave2"},e).dC>=3.6;function ws(i){let e={...Yn,...i};NM.includes(e.type)||(e.type="tag"),Ql.includes(e.outline)||(e.outline="rect"),e.size=Number(e.size),Wd.includes(e.size)||(e.size=28),eh.includes(e.border)||(e.border="pave2"),th.includes(e.frame2)||(e.frame2="none"),CM.includes(e.field)||(e.field="nham"),["none","glyph"].includes(e.motif)||(e.motif="glyph"),e.ch1=String(e.ch1||""),jm.includes(e.ch1)||(e.ch1="T"),e.ch2=String(e.ch2||""),jm.includes(e.ch2)||(e.ch2=""),["on","off"].includes(e.motifStone)||(e.motifStone="on"),PM.includes(e.crossStyle)||(e.crossStyle="loe"),e.crossSize=Number(e.crossSize),qd.includes(e.crossSize)||(e.crossSize=32),IM.includes(e.crossFill)||(e.crossFill="baguette"),["stone","none"].includes(e.crossCenter)||(e.crossCenter="stone"),jd.includes(e.figure)||(e.figure="heart"),e.figSize=Number(e.figSize),e.petals=Number(e.petals),Kd.includes(e.petals)||(e.petals=12);{let t=jl[e.type]||jl.shape;t.includes(e.figSize)||(e.figSize=t.reduce((n,s)=>Math.abs(s-e.figSize)<Math.abs(n-e.figSize)?s:n,t[1]))}return FM.includes(e.figFill)||(e.figFill="pave"),e.figFill==="edge"&&e.type!=="shape"&&(e.figFill="pave"),(!["none","stone"].includes(e.figCenter)||!sh(e))&&(e.figCenter="none"),ha[e.paveD]||(e.paveD="mid"),oh(e,e.frame2)||(e.frame2="none"),LM.includes(e.back)||(e.back="x"),DM.includes(e.bail)||(e.bail="pave"),["std","big"].includes(e.bailSize)||(e.bailSize="std"),["bong","nham","chai"].includes(e.finish)||(e.finish="bong"),["none","motif","settings"].includes(e.twoTone)||(e.twoTone="none"),e.name=ah(e.name)||Yn.name,["plate","cut"].includes(e.nameStyle)||(e.nameStyle="plate"),e.nameSize=Number(e.nameSize),Yd.includes(e.nameSize)||(e.nameSize=9),e.type==="name"&&(e.motif="glyph",["rect","oct"].includes(e.outline)||(e.outline="rect")),e.twoTone==="motif"&&!(e.type==="tag"&&e.motif==="glyph"||Ym(e))&&(e.twoTone="none"),(e.type==="initial"||e.type==="name"&&e.nameStyle==="cut")&&e.back!=="dac"&&(e.back="x"),e}var BM=(i,e)=>({g:i,o:e,bead:[],rims:[],motif:[],plates:[],cnt:{accent:0,side:0,inner:0},list:[]});function rn(i,e,t,n,s,r,a){i.g.add(Xm(e,t,n,s,r)),i.cnt[t]!=null&&i.cnt[t]++,a&&i.list.push([t,e,Math.round(a*20)/20])}function tr(i){let e=i.length,t=[0];for(let a=0;a<e;a++){let o=i[a],c=i[(a+1)%e];t.push(t[a]+Math.hypot(c[0]-o[0],c[1]-o[1]))}let n=t[e],s=0;for(let a=0;a<e;a++){let o=i[a],c=i[(a+1)%e];s+=o[0]*c[1]-c[0]*o[1]}let r=s>0?1:-1;return{L:n,cum:t,at(a){let o=(a%n+n)%n,c=0,l=e-1;for(;c<l;){let p=c+l+1>>1;t[p]<=o?c=p:l=p-1}let h=c,d=i[h],u=i[(h+1)%e],f=t[h+1]-t[h];for(let p=0;p<e&&f<1e-9;p++)h=(h+1)%e,d=i[h],u=i[(h+1)%e],f=t[h+1]-t[h];let g=en((o-t[h])/(f||1),0,1),b=(u[0]-d[0])/(f||1),m=(u[1]-d[1])/(f||1);return{p:[d[0]+(u[0]-d[0])*g,d[1]+(u[1]-d[1])*g],t:[b,m],out:[m*r,-b*r]}}}}function kd(i,e,t=8){let n=i.length;return yi(n,t,(s,r)=>{let a=i[s],c=i[(s+1)%n].clone().sub(i[(s-1+n)%n]).normalize().clone().cross(la).normalize(),l=r/t*tn,h=a.clone().addScaledVector(la,Math.cos(l)*e).addScaledVector(c,Math.sin(l)*e);return[h.x,h.y,h.z]},!0,!0)}var Yl=14,Jl=10;function Zm(i){let e=i.name.length,t=i.nameSize,n=t*.74,s=t*.16;return{n:e,hL:t,wL:n,gap:s,textW:e*n+(e-1)*s}}function Qm(i){if(i.type==="name"){let n=Zm(i),{dC:s}=Jd(i),r=n.textW/2+n.hL*.26+s,a=n.hL*.72+s,o=Math.min(r,a)*2;return{W:2*r,H:2*a,a:r,b:a,r0:o*.2,c0:o*.19,shape:i.outline,ring:!1}}let[e,t]=[i.outline==="round"?i.size:Math.round(i.size*.82*10)/10,i.size];return{W:e,H:t,a:e/2,b:t/2,r0:e*.2,c0:e*.19,shape:i.outline,ring:i.outline==="round"||i.outline==="oval"}}function er(i,e,t=1){let n=i.a-e,s=i.b-e,r=[];if(i.ring){let u=4*(Yl+Jl)*t;for(let f=0;f<u;f++){let g=f/u*tn;r.push([n*Math.sin(g),-s*Math.cos(g)])}return r}let a=Yl*t,o=Jl*t,c=(u,f,g)=>{for(let b=0;b<g;b++){let m=b/g;r.push([u[0]+(f[0]-u[0])*m,u[1]+(f[1]-u[1])*m])}};if(i.shape==="oct"){let u=Math.max(0,i.c0-.586*e),f=[[-(n-u),-s],[n-u,-s],[n,-(s-u)],[n,s-u],[n-u,s],[-(n-u),s],[-n,s-u],[-n,-(s-u)]];for(let g=0;g<8;g++)c(f[g],f[(g+1)%8],g%2===0?a:o);return r}let l=Math.max(0,i.r0-e),h=[[n-l,-(s-l),-90],[n-l,s-l,0],[-(n-l),s-l,90],[-(n-l),-(s-l),180]],d=[[[-(n-l),-s],[n-l,-s]],[[n,-(s-l)],[n,s-l]],[[n-l,s],[-(n-l),s]],[[-n,s-l],[-n,-(s-l)]]];for(let u=0;u<4;u++){c(d[u][0],d[u][1],a);let[f,g,b]=h[u];for(let m=0;m<o;m++){let p=(b+90*m/o)*nr;r.push([f+l*Math.cos(p),g+l*Math.sin(p)])}}return r}function Bd(i,e,t,n){let s=i.a-e,r=i.b-e,a=Math.abs(t),o=Math.abs(n);if(i.ring)return(Math.hypot(a/s,o/r)-1)*Math.min(s,r);if(i.shape==="oct"){let d=Math.max(0,i.c0-.586*e);return Math.max(a-s,o-r,(a+o-(s+r-d))/Math.SQRT2)}let c=Math.max(0,i.r0-e),l=a-(s-c),h=o-(r-c);return Math.hypot(Math.max(l,0),Math.max(h,0))+Math.min(Math.max(l,h),0)-c}function kM(i,e,t){if(i.ring)return[[0,e.L,"ring"]];let n=[],s=Yl*t,r=Jl*t;for(let a=0;a<4;a++){let o=a*(s+r);n.push([e.cum[o],e.cum[o+s],"side"],[e.cum[o+s],e.cum[o+s+r],"corner"])}return n}function zM(i,e,t,n,s,r,a,o){let c=e[0]-i[0],l=e[1]-i[1],h=Math.hypot(c,l)||1e-6,d=c/h,u=l/h,f=t/2,g=r?[i[0]-d*f,i[1]-u*f]:i,b=a?[e[0]+d*f,e[1]+u*f]:e,m=-u*(t/2),p=d*(t/2),v=x=>{let A=(L,B)=>[x[0]+m*L,B,x[1]+p*L],P=n-.15,I=n+s;if(o){let L=n+s*.4,B=[A(-1,P),A(-1,P)];for(let Y=0;Y<=16;Y++){let W=Y/16*Math.PI;B.push(A(-Math.cos(W),L+(I-L)*Math.sin(W)))}return B.push(A(1,P),A(1,P)),B}let N=.14,U=1-N/(t/2);return[A(-1,P),A(-1,I-N),A(-1,I-N),A(-U,I),A(-U,I),A(U,I),A(U,I),A(1,I-N),A(1,I-N),A(1,P),A(1,P),A(-1,P)]},S=v(g),_=v(b),y=S.length,T=x=>Array(y).fill([x[0],n+s/2,x[1]]),E=[T(g),S,S,_,_,T(b)];return yi(E.length,y,(x,A)=>E[x][A],!1,!0).toNonIndexed()}function GM(i,e,t,n,s){if(s){let c=n*.4,l=[new oe(e/2,-.15)];for(let d=0;d<=8;d++){let u=d/8*(Math.PI/2);l.push(new oe(Math.max(.001,e/2*Math.cos(u)),c+(n-c)*Math.sin(u)))}let h=new fs(l,20).toNonIndexed();return h.deleteAttribute("uv"),h.translate(i[0],t,i[1]),h}let r=.14,a=new Bi(e/2,e/2,n-r+.15,20).toNonIndexed();a.deleteAttribute("uv"),a.translate(i[0],t+(n-r-.15)/2,i[1]);let o=new Bi(e/2-r,e/2,r,20).toNonIndexed();return o.deleteAttribute("uv"),o.translate(i[0],t+n-r/2,i[1]),ji([a,o])}var $l=(i,e,t)=>{let n=1/0;for(let[s,r]of i){let a=r[0]-s[0],o=r[1]-s[1],c=en(((e-s[0])*a+(t-s[1])*o)/(a*a+o*o||1),0,1);n=Math.min(n,Math.hypot(e-s[0]-a*c,t-s[1]-o*c))}return n};function Xl(i,e,t,n,s,r,a,o,c,l){let h=([f,g])=>[t+(f-2)/4*(s-a),n-(g-3)/6*(r-a)],d=[],u=!l;for(let f of ql[e]){let g=f.map(h),b=g.length-1,m=Math.hypot(f[0][0]-f[b][0],f[0][1]-f[b][1])<1e-6;for(let p=0;p<b;p++)d.push([g[p],g[p+1]]),i.motif.push(zM(g[p],g[p+1],a,o,c,!m&&p===0,!m&&p===b-1,u));for(let p=m?0:1;p<b;p++)i.motif.push(GM(g[p],a,o,c,u))}if(l){let f=Math.min(1.8,a-.7),g=[];for(let[b,m]of d){let p=Math.hypot(m[0]-b[0],m[1]-b[1]),v=Math.max(1,Math.round(p/(f+.12)));for(let S=0;S<=v;S++){let _=[b[0]+(m[0]-b[0])*S/v,b[1]+(m[1]-b[1])*S/v];g.some(y=>Math.hypot(y[0]-_[0],y[1]-_[1])<f*.9)||(g.push(_),rn(i,"round","inner",f/2,new C(_[0],o+c+.03,_[1]),null,f))}}}return d}function VM(i){let{g:e,o:t}=i,n=Qm(t),s=t.finish==="nham"?":satin":t.finish==="chai"?":brush":"",r=t.twoTone==="settings"?":alt":"",{dS:a,bw:o,wb:c,dS2:l,wf:h,dB:d,dC:u}=Jd(t),f=2.1,g=f+en(c*.28,.6,1.15),b=g-.9,m=ae=>f+(ae-Yi)/c*(g-f),p=Math.atan2(g-f,c),v=Math.cos(p),S=Math.sin(p),_=new Map,y=ae=>{let ve=ae.toFixed(3);return _.has(ve)||_.set(ve,er(n,ae)),_.get(ve)},T=y(0).length,E=(ae,ve)=>({d:ae,y:ve}),x=(ae,ve)=>({k:ae,y:ve}),A=[E(0,0),E(0,0),E(0,f-.25),E(0,f-.25),E(.25,f),E(.25,f),E(Yi,f),E(Yi,f),E(d,g),E(d,g),E(u,g),E(u,g),E(u,b),E(u,b),x(.5,b),x(0,b)],P=t.back==="dac"?[x(0,0),x(.5,0),E(0,0)]:[x(0,b-bt),E(u+.3,b-bt),E(Yi+.7,f-bt-.1),E(bt,f-bt-.35),E(bt,0),E(bt,0)],I=[...A,...P],N=y(u);wn(e,yi(T,I.length,(ae,ve)=>{let z=I[ve];if(z.k!=null)return[N[ae][0]*z.k,z.y,N[ae][1]*z.k];let q=y(z.d)[ae];return[q[0],z.y,q[1]]},!0,!0),`metal:body${s}`);let U=y(u+.04);wn(e,yi(T,3,(ae,ve)=>{let z=[1,.5,0][ve];return[U[ae][0]*z,b+.05,U[ae][1]*z]},!0,!1),`metal:field${t.field==="nham"?":satin":""}`);let L=(ae,ve,z=0)=>{let q=new C(ae.out[0]*S,v,ae.out[1]*S);return{pos:new C(ae.p[0],m(ve),ae.p[1]).addScaledVector(q,z),n:q,slope:new C(ae.out[0]*v,-S,ae.out[1]*v),tan:new C(ae.t[0],0,ae.t[1])}},B=4,Y=ae=>{let ve=er(n,ae,B),z=tr(ve);return{path:z,segs:kM(n,z,B)}},W=(ae,ve,z,{slope:q=!0,y:ie=0,only:le=null,cornerD:me=null}={})=>{let{path:ue,segs:ze}=Y(ae);for(let[Z,se,he]of ze){if(le&&he!==le&&he!=="ring")continue;let fe=he==="corner"&&me?me:ve,ge=he==="ring"?0:.28,Fe=se-Z-2*ge,Le=Math.floor((Fe+.1)/(fe+.1)),Ne=fe;if(Le<1){if(Fe<.95)continue;Le=1,Ne=Math.min(fe,Fe-.05)}let je=Fe/Le;for(let D=0;D<Le;D++){let tt=ue.at(Z+ge+(D+.5)*je),it=q?L(tt,ae,.04):{pos:new C(tt.p[0],ie+.04,tt.p[1]),n:la,slope:new C(tt.out[0],0,tt.out[1])};rn(i,"round",z,Ne/2,it.pos,q?Ro(it.n):null,Ne);for(let R of he==="ring"?[1]:D===0?[0,1]:[1]){let M=ue.at(Z+ge+(D+R)*je),k=q?L(M,ae,Ne*.08):{pos:new C(M.p[0],ie+Ne*.08,M.p[1]),slope:new C(M.out[0],0,M.out[1])};for(let K of[-1,1]){let te=k.pos.clone().addScaledVector(k.slope,K*Ne*.47);i.bead.push([te.x,te.y,te.z,Ne*.16])}}}}},j=(ae,{slope:ve=!0,y:z=0,only:q="side",r:ie=.17}={})=>{let{path:le,segs:me}=Y(ae),ue=ze=>{let Z=le.at(ze);return ve?L(Z,ae,.07).pos:new C(Z.p[0],z+.07,Z.p[1])};for(let[ze,Z,se]of me){if(se==="ring"){i.rims.push(kd(Array.from({length:120},(ge,Fe)=>ue(Fe/120*le.L)),ie));continue}if(q&&se!==q)continue;let he=Math.max(2,Math.round((Z-ze)/.6));i.rims.push(Mi(Array.from({length:he+1},(fe,ge)=>ue(ze+.12+(Z-ze-.24)*ge/he)),ie,Math.max(16,he*2)))}},G=(ae,ve,{slope:z=!0,y:q=0}={})=>{let{path:ie,segs:le}=Y(ae),me=2*ve;for(let[ue,ze,Z]of le){if(Z==="corner")continue;let se=Z==="ring"?0:.3,he=ze-ue-2*se,fe=Math.floor((he+.1)/(me+.1));if(fe<1)continue;let ge=he/fe,Fe=Math.min(ve/2,(ge-.1)/4);for(let Le=0;Le<fe;Le++){let Ne=ie.at(ue+se+(Le+.5)*ge),je=z?L(Ne,ae,-.02):{pos:new C(Ne.p[0],q-.02,Ne.p[1]),n:la,tan:new C(Ne.t[0],0,Ne.t[1])};rn(i,"bag2","side",Fe,je.pos,Kl(je.n,je.tan),Fe*4)}}},V=Yi+c/2;if(t.border==="pave1")W(V,a,"accent");else if(t.border==="pave2")W(Yi+.3+a/2,a,"accent"),W(d-.3-a/2,a,"accent");else if(t.border==="baguette")G(V,o),j(V-o/2-.2),j(V+o/2+.2),W(V,Math.min(o+.3,c-.5),"side",{only:"corner"});else if(t.border==="bagRadial"){let ae=tr(er(n,V+o,B)),ve=tr(er(n,V,B)),z=Math.floor(ae.L/(o+.14));for(let q=0;q<z;q++){let ie=ve.at((q+.5)/z*ve.L),le=L(ie,V,-.02);rn(i,"bag2","side",o/2,le.pos,Kl(le.n,le.slope),o*2)}for(let q of[V-o-.2,V+o+.2]){let ie=er(n,q,B),le=tr(ie),me=160;i.rims.push(kd(Array.from({length:me},(ue,ze)=>L(le.at(ze/me*le.L),q,.07).pos),.17))}}if(!n.ring&&t.border!=="bagRadial"){let ae=tr(er(n,Yi+.1,B)),ve=tr(er(n,d-.1,B)),z=Yl*B,q=Jl*B;for(let ie=0;ie<4;ie++)for(let le of[ie*(z+q),ie*(z+q)+z]){let me=L(ae.at(ae.cum[le]),Yi+.1,.05).pos,ue=L(ve.at(ve.cum[le]),d-.1,.05).pos;i.rims.push(Mi([me,me.clone().lerp(ue,.5),ue],.16,12))}}let J=d+$m+h/2-.1;t.frame2==="pave"?W(J,l,"accent",{slope:!1,y:g}):t.frame2==="baguette"?(G(J,1.25,{slope:!1,y:g}),W(J,1.35,"side",{slope:!1,y:g,only:"corner"})):t.frame2==="rail"&&j(J,{slope:!1,y:g-.02,only:null,r:.2});let pe=[],be=0,ke=g-b+.45;if(t.type==="name"){let ae=Zm(t),ve=[...t.name].some(q=>"BSG$8693052".includes(q));be=en(ae.hL*(ve?.16:.2),1.3,2.4);let z=t.motifStone==="on";[...t.name].forEach((q,ie)=>{pe.push(...Xl(i,q,-ae.textW/2+ae.wL/2+ie*(ae.wL+ae.gap),0,ae.wL,ae.hL,be,b,ke,z))})}else if(t.motif==="glyph"){let ae=n.a-u,ve=n.b-u,z=!!t.ch2,q=n.ring?.66:.8,ie=n.ring?z?.5:.66:.78,le=2*ve*ie,me=z?(2*ae*(n.ring?.8:.9)-1)/2:Math.min(2*ae*q,le*.82),ue=Math.min(le,z?me*1.55:le),ze=Math.min(me,ue*.82),Z=he=>"BSG$8693052\u2665\u2605".includes(he);be=en(ue*(Z(t.ch1)||z&&Z(t.ch2)?.15:.2),1.5,z?2.4:3.2);let se=t.motifStone==="on";z?pe=[...Xl(i,t.ch1,-(ze+1)/2,0,ze,ue,be,b,ke,se),...Xl(i,t.ch2,(ze+1)/2,0,ze,ue,be,b,ke,se)]:pe=Xl(i,t.ch1,0,0,ze,ue,be,b,ke,se)}if(t.field==="pave"){let ae=Math.min(a,1.4),ve=ae+.1,z=ve*.88,q=Math.ceil(n.a/ve)+1,ie=Math.ceil(n.b/z)+1,le=[];for(let me=-q;me<=q;me++)for(let ue=-ie;ue<=ie;ue++){let ze=(me+(ue%2?.5:0))*ve,Z=ue*z;Bd(n,u,ze,Z)>-(ae/2+.3)||pe.length&&$l(pe,ze,Z)<be/2+ae/2+.35||(le.push([ze,Z]),rn(i,"round","accent",ae/2,new C(ze,b+.09,Z),null,ae))}for(let[me,ue]of le)for(let ze of[-1,1]){let Z=me+ve/2,se=ue+ze*z/3;Bd(n,u,Z,se)<-.3&&!(pe.length&&$l(pe,Z,se)<be/2+.25)&&i.bead.push([Z,b+.14,se,.16])}}return{inside:(ae,ve)=>Bd(n,bt-.25,ae,ve)<0,ext:[n.a,n.b],zTop:-n.b,yMid:f/2+.25,fin:s,altS:r}}function HM(i){let e=i.crossSize,t=e*.66,n=e*.165,s=n/2,r=-e/2+t/2,a=[],o=(c,l,h)=>{let d=-l,u=c,f=(g,b,m=1)=>a.push([c*g+d*b,r+l*g+u*b,m]);if(i.crossStyle==="thang"){let g=Math.min(.7,s*.3);f(s,-s),f(h-g,-s),f(h,-s+g),f(h,s-g),f(h-g,s)}else{let g=s*1.85,b=h-g*.95,m=Math.max(s+.8,b-g*1.6),p=6;f(s,-s),f(m,-s,0);for(let v=1;v<p;v++){let S=v/p;f(m+(b-m)*S,-(s+(g-s)*S*S),0)}f(b,-g),f(h,0),f(b,g);for(let v=p-1;v>=1;v--){let S=v/p;f(m+(b-m)*S,s+(g-s)*S*S,0)}f(m,s,0)}};return o(0,-1,t/2),o(1,0,t/2),o(0,1,e-t/2),o(-1,0,t/2),{poly:a,H:e,W:t,wa:n,hw:s,z0:r,arms:[[0,-1,t/2],[1,0,t/2],[0,1,e-t/2],[-1,0,t/2]]}}function ir(i,e,t){let n=!1,s=1/0,r=i.length;for(let a=0,o=r-1;a<r;o=a++){let c=i[a],l=i[o];c[1]>t!=l[1]>t&&e<(l[0]-c[0])*(t-c[1])/(l[1]-c[1])+c[0]&&(n=!n);let h=l[0]-c[0],d=l[1]-c[1],u=en(((e-c[0])*h+(t-c[1])*d)/(h*h+d*d||1),0,1);s=Math.min(s,Math.hypot(e-c[0]-h*u,t-c[1]-d*u))}return n?-s:s}function Ao(i,e,t){let n=new Hr;i.forEach((r,a)=>a?n.lineTo(r[0],-r[1]):n.moveTo(r[0],-r[1])),n.closePath();let s=new Za(n,{depth:t-e,bevelEnabled:!1});return s.deleteAttribute("uv"),s.rotateX(-Math.PI/2),s.translate(0,e,0),s}function WM(i){let{g:e,o:t}=i,n=HM(t),{poly:s,hw:r,wa:a,z0:o}=n,c=t.finish==="nham"?":satin":t.finish==="chai"?":brush":"",l=t.twoTone==="settings"?":alt":"",h=2.3,d=ha[t.paveD],u=[[0,0],[0,h-.2],[0,h-.2],[-.2,h],[-.2,h],[-bt,h],[-bt,h],[-bt,0],[-bt,0],[0,0]];wn(e,Eo(s,u),`metal:body${c}`),wn(e,Ao(s,h-bt,h-.01),`metal:top${c}`),t.back==="dac"&&wn(e,Ao(s,0,.6),`metal:backplate${c}`),i.rims.push(Eo(s,[[-.04,h-.05],[-.04,h+.22],[-.04,h+.22],[-.36,h+.22],[-.36,h+.22],[-.36,h-.05],[-.36,h-.05],[-.04,h-.05]]));let f=(m,p)=>ir(s,m,p),g=(m,p,v)=>Math.hypot(m,p-o)<v,b=0;if(t.crossCenter==="stone"){let m=r*Math.SQRT2+.35,p=h+.5,v=en(m*.24,.8,1.1),S=m-1.07-v,_=[[m-bt,0],[m,0],[m,p-.16],[m-.16,p],[.001,p],[.001,p-bt],[m-bt,p-bt],[m-bt,0]].map(([x,A])=>new oe(x,A)),y=new fs(_,56).toNonIndexed();y.deleteAttribute("uv"),y.computeVertexNormals(),y.translate(0,0,o),i.plates.push(y),zd(i,0,o,2*S,p,"center",l);let T=m-.3-v/2,E=Math.floor(tn*T/(v+.08));for(let x=0;x<E;x++){let A=x/E*tn;rn(i,"round","accent",v/2,new C(T*Math.cos(A),p+.04,o+T*Math.sin(A)),null,v);let P=(x+.5)/E*tn;i.bead.push([(T+v*.45)*Math.cos(P),p+v*.09,o+(T+v*.45)*Math.sin(P),v*.15])}b=m+.15}if(t.crossFill!=="plain"){let m=[],p=d;if(t.crossFill==="baguette"){let P=en(a*.17,.7,1.05),I=r-.55-(P+.37),N=I>=.75?Math.min(1.1,I):0;N||(P=en(r-.95,.7,1.3));let U=P/2,L=2*U+.14,B=P+.37+N/2;p=N||.9;for(let[Y,W,j]of n.arms){let G=-W,V=Y,J=(ie,le,me)=>new C(Y*ie+G*le,me,o+W*ie+V*le),pe=[],be=P+.37+N;for(let ie=Math.max(r+.5,b+.25)+U;ie+U<j-.4&&[[-U,-be],[U,-be],[-U,be],[U,be]].every(([le,me])=>f(Y*(ie+le)+G*me,o+W*(ie+le)+V*me)<-.5);ie+=L)pe.push(ie),rn(i,"bag2","side",U,J(ie,0,h-.03),Kl(la,new C(G,0,V)),U*4);if(!pe.length)continue;let ke=pe[0]-U-.1,ae=pe[pe.length-1]+U+.1;for(let ie of[-1,1])i.rims.push(Mi([ke,(ke+ae)/2,ae].map(le=>J(le,ie*(P+.2),h+.06)),.16,20));if(N){let ie=Math.max(1,Math.floor((ae-ke+.1)/(N+.1))),le=(ae-ke)/ie;for(let me of[-1,1])for(let ue=0;ue<ie;ue++){rn(i,"round","accent",N/2,J(ke+(ue+.5)*le,me*B,h+.04),null,N);for(let ze of ue===0?[0,1]:[1])for(let Z of[-1,1]){let se=J(ke+(ue+ze)*le,me*B+Z*N*.47,h+N*.09);i.bead.push([se.x,se.y,se.z,N*.16])}}}let ve=(ke+ae)/2,z=(ae-ke)/2+.15,q=be+.1;m.push([Y*ve,o+W*ve,Math.abs(Y)*z+Math.abs(G)*q,Math.abs(W)*z+Math.abs(V)*q])}}let v=Math.max(1,Math.round((a-1.3)/(p+.1))),S=(a-1.3)/v,_=Math.min(p,S-.1),y=v%2?0:.5,T=Math.ceil(n.H/S)+2,E=new Set,x=(P,I)=>f(P,I)<-(_/2+.52)&&!(b&&g(P,I,b+_/2+.1))&&!m.some(([N,U,L,B])=>Math.abs(P-N)<L+_/2&&Math.abs(I-U)<B+_/2);for(let P=-T;P<=T;P++)for(let I=-T;I<=T;I++){let N=(P+y)*S,U=o+(I+y)*S;x(N,U)&&(E.add(`${P},${I}`),rn(i,"round","accent",_/2,new C(N,h+.04,U),null,_))}let A=new Set;for(let P of E){let[I,N]=P.split(",").map(Number);for(let[U,L]of[[0,0],[0,1],[1,0],[1,1]]){let B=`${I+U},${N+L}`;if(A.has(B))continue;A.add(B);let Y=(I+U-.5+y)*S,W=o+(N+L-.5+y)*S;f(Y,W)<-.42&&!(b&&g(Y,W,b+.05))&&i.bead.push([Y,h+_*.09,W,_*.16])}}}return{inside:(m,p)=>ir(s,m,p)<-(bt-.25),ext:[n.W/2,n.H/2],zTop:-n.H/2,yMid:1.15,fin:c,altS:l,bailK:.85}}function Eo(i,e){let t=i.length,n=0;for(let c=0;c<t;c++){let l=i[c],h=i[(c+1)%t];n+=l[0]*h[1]-h[0]*l[1]}let s=n>0?1:-1,r=(c,l)=>{let h=l[0]-c[0],d=l[1]-c[1],u=Math.hypot(h,d)||1;return[d/u*s,-h/u*s]},a=i.map((c,l)=>{let h=r(i[(l-1+t)%t],c),d=r(c,i[(l+1)%t]),u=1+h[0]*d[0]+h[1]*d[1],f=1/Math.max(u,.35);return[(h[0]+d[0])*f,(h[1]+d[1])*f]}),o=[];return i.forEach((c,l)=>{o.push(l),c[2]!==0&&o.push(l)}),yi(o.length,e.length,(c,l)=>{let h=o[c],[d,u]=e[l];return[i[h][0]+a[h][0]*d,u,i[h][1]+a[h][1]*d]},!0,!0)}function Zl(i,e,{HT:t=2.6,y0:n=0,rim:s=.3}={}){let r=n+t;return i.plates.push(Eo(e,[[0,n],[0,r-.2],[0,r-.2],[-.2,r],[-.2,r],[-bt,r],[-bt,r],[-bt,n],[-bt,n],[0,n]]),Ao(e,r-bt,r-.01)),i.o.back==="dac"&&i.plates.push(Ao(e,n,n+.6)),s&&i.rims.push(Eo(e,[[-.05,r-.05],[-.05,r+s],[-.05,r+s],[-.45,r+s],[-.45,r+s],[-.45,r-.05],[-.45,r-.05],[-.05,r-.05]])),r}function eg(i,e,[t,n],s,r,a="accent",o=0){let c=s+.1,l=c*.88,h=Math.ceil(t/c)+1,d=Math.ceil(n/l)+1,u=[];for(let f=-h;f<=h;f++)for(let g=-d;g<=d;g++){let b=(f+(g%2?.5:0))*c,m=o+g*l;e(b,m,s/2)&&(u.push([b,m]),rn(i,"round",a,s/2,new C(b,r+.04,m),null,s))}for(let[f,g]of u)for(let b of[-1,1]){let m=f+c/2,p=g+b*l/3;e(m,p,-.2)&&i.bead.push([m,r+s*.09,p,s*.16])}}function qM(i,e,t,n,s,r,a="accent"){let o=tr(e.map(h=>[h[0],h[1]])),c=Math.max(3,Math.floor(o.L/(s+.12))),l=[];for(let h=0;h<c;h++){let d=o.at((h+.5)/c*o.L),u=d.p[0]-d.out[0]*n,f=d.p[1]-d.out[1]*n;if(Math.abs(t(u,f)+n)>.28||l.some(b=>Math.hypot(b[0]-u,b[1]-f)<s+.04))continue;l.push([u,f]),rn(i,"round",a,s/2,new C(u,r+.04,f),null,s);let g=o.at((h+1)/c*o.L);for(let b of[-1,1]){let m=g.p[0]-g.out[0]*(n+b*s*.47),p=g.p[1]-g.out[1]*(n+b*s*.47);t(m,p)<-.4&&i.bead.push([m,r+s*.09,p,s*.16])}}}function zd(i,e,t,n,s,r,a){let o=n/2,c=s+.95;rn(i,"round",r,o,new C(e,c,t),null,r==="center"?0:n);let l=[[o-.55,s-.1],[o-.25,c-.2],[o+.02,c+.03],[o+.1,c+.3],[o+.5,c+.24],[o+.62,s-.1]].map(([d,u])=>new oe(d,u)),h=new fs([...l,l[0]],48).toNonIndexed();return h.deleteAttribute("uv"),h.translate(e,0,t),wn(i.g,h,`metal:bezel${a}`),o+.75}function Gd(i,e,t,n,s,r,a,o,c){let d=yi(56,13,(S,_)=>{let y=S/56*tn,T=_/12*(Math.PI/2);return[e+n*Math.sin(T)*Math.cos(y),a+r*Math.cos(T),t+s*Math.sin(T)*Math.sin(y)]},!0,!1).toNonIndexed(),u=d.attributes.normal,f=d.attributes.position,g=0;for(let S=0;S<u.count;S+=7)g+=u.getY(S)*(f.getY(S)-a)+u.getX(S)*(f.getX(S)-e)+u.getZ(S)*(f.getZ(S)-t);if(g<0){let S=f.array,_=u.array;for(let y=0;y<S.length;y+=9)for(let T=0;T<3;T++){let E=S[y+3+T];S[y+3+T]=S[y+6+T],S[y+6+T]=E;let x=_[y+3+T];_[y+3+T]=_[y+6+T],_[y+6+T]=x}for(let y=0;y<_.length;y++)_[y]=-_[y]}if(i.plates.push(d),!o)return;let b=o+.12,m=b*.88,p=Math.ceil(n/b)+1,v=Math.ceil(s/m)+1;for(let S=-p;S<=p;S++)for(let _=-v;_<=v;_++){let y=(S+(_%2?.5:0))*b,T=_*m,E=(y/n)**2+(T/s)**2;if(E>.72)continue;let x=r*Math.sqrt(1-E),A=new C(y/n**2,x/r**2,T/s**2).normalize();rn(i,"round",c(y,T),o/2,new C(e+y,a+x,t+T).addScaledVector(A,.03),Ro(A),o)}}function tg(i){let e=i.figSize,t=[],n=[0,-e/2],s=[0,0];if(i.figure==="heart"){let a=e/28.9;for(let o=0;o<132;o++){let c=o/132*tn,l=16*Math.sin(c)**3,h=13*Math.cos(c)-5*Math.cos(2*c)-2*Math.cos(3*c)-Math.cos(4*c);h<-8&&Math.abs(l*a)<.55||t.push([l*a,-(h+2.55)*a,o===0?1:0])}for(let o=0;o<t.length;o++){let c=t[o],l=t[(o+1)%t.length];c[1]>0&&l[1]>0&&c[0]*l[0]<0&&(c[2]=1,l[2]=1)}n=[0,-7.55*a],s=[0,-1.2*a]}else if(i.figure==="star"){let r=e/1.809,a=r*.44,o=(r-r*Math.cos(36*nr))/2;for(let c=0;c<10;c++){let l=c*36*nr,h=c%2?a:r;t.push([h*Math.sin(l),-h*Math.cos(l)+o,1])}n=[0,-r+o],s=[0,o]}else if(i.figure==="moon"){let r=e/2,a=.78*r,o=.38*r,c=(r*r-a*a+o*o)/(2*o),l=Math.sqrt(r*r-c*c),h=2.6,d=Math.atan2(l,c)+h/r,u=Math.atan2(l,c-o)+h/a,f=96,g=72;for(let b=0;b<=f;b++){let m=-d-b/f*(tn-2*d);t.push([r*Math.cos(m),r*Math.sin(m),b===0||b===f?1:0])}for(let b=0;b<=g;b++){let m=u+b/g*(tn-2*u);t.push([o+a*Math.cos(m),a*Math.sin(m),b===0||b===g?1:0])}n=[0,-r],s=[-(r+a-o)/2,0]}else if(i.figure==="drop"){let r=.36*e,a=e/2-r,o=Math.acos(r/(e-r)),c=96;t.push([0,-e/2,1]);for(let l=0;l<=c;l++){let h=o+l/c*(tn-2*o);t.push([r*Math.sin(h),a-r*Math.cos(h),0])}s=[0,a]}else if(i.figure==="crown"){let r=e*.4,a=e*.56;for(let[o,c]of[[-.82,1],[-1,-.55],[-.47,.05],[0,-1],[.47,.05],[1,-.55],[.82,1]])t.push([o*a,c*r,1]);n=[0,-r],s=[0,.45*r]}else if(i.figure==="triangle"){let r=e/Math.sqrt(3);t.push([0,-e/2,1],[r,e/2,1],[-r,e/2,1]),s=[0,e/6]}else{let r=e/2,a=e*.53;for(let[o,c]of[[.28,-1],[-.62,.12],[-.08,.12],[-.34,1],[.62,-.22],[.08,-.22],[.5,-1]])t.push([o*a,c*r,1]);n=[.39*a,-r],s=[0,-.05*r]}return{poly:t,top:n,mid:s}}function XM(i){let{g:e,o:t}=i,n=t.finish==="nham"?":satin":t.finish==="chai"?":brush":"",s=t.twoTone==="settings"?":alt":"",r=tg(t),a=r.poly,o=ha[t.paveD],c=Zl(i,a),l=(m,p)=>ir(a,m,p),h=a.map(m=>m[0]),d=a.map(m=>m[1]),u=[Math.max(...h.map(Math.abs)),Math.max(...d.map(Math.abs))],f=0,g=null;if(t.figCenter==="stone"&&t.figure==="triangle"){let m=t.figSize*.27,p=.75,v=[[0,r.mid[1]+m,1],[-m*Math.cos(30*nr),r.mid[1]-m/2,1],[m*Math.cos(30*nr),r.mid[1]-m/2,1]];i.plates.push(Ao(v,c-.05,c+p)),i.rims.push(Eo(v,[[.02,c+p-.02],[.02,c+p+.22],[.02,c+p+.22],[-.42,c+p+.22],[-.42,c+p+.22],[-.42,c+p-.02],[-.42,c+p-.02],[.02,c+p-.02]])),zd(i,r.mid[0],r.mid[1],en(2*(m/2-1.15),2.4,6.5),c+p,"center",s),g=(S,_,y)=>ir(v,S,_)<y+.3}else if(t.figCenter==="stone"){let m=-l(r.mid[0],r.mid[1]),p=en(2*(m-1.7),3,6.5);m>=3.2&&(f=zd(i,r.mid[0],r.mid[1],p,c,"center",s))}let b=(m,p,v)=>!(f&&Math.hypot(m-r.mid[0],p-r.mid[1])<f+v)&&!(g&&g(m,p,v))&&!(Math.abs(m-r.top[0])<1.9+v&&p<r.top[1]+1.5+v);if(t.figFill==="pave"?eg(i,(m,p,v)=>l(m,p)<-(v+(v>0?.62:.25))&&b(m,p,v+.1),u,o,c):t.figFill==="edge"&&qM(i,a,(m,p)=>b(m,p,o/2)?l(m,p):9,.62+o/2,o,c),t.figure==="crown")for(let m of a.filter((p,v)=>[1,3,5].includes(v)))i.bead.push([m[0]*.97,c*.5,m[1]*.97-.5,1.15]);return{inside:(m,p)=>l(m,p)<-(bt-.25),ext:u,zTop:r.top[1],xTop:r.top[0],yMid:1.3,fin:n,altS:s}}function jM(i){let e=i.figSize/2,t=i.petals,n=.46,s=14,r=[];for(let a=0;a<t*s;a++){let o=a/(t*s)*tn,c=e*(n+(1-n)*Math.abs(Math.cos(t*o/2))**.55);r.push([c*Math.sin(o),-c*Math.cos(o),a%s===s/2?1:0])}return{poly:r,R:e,rd:e*n*.9}}function KM(i){let{o:e}=i,t=e.finish==="nham"?":satin":e.finish==="chai"?":brush":"",n=e.twoTone==="settings"?":alt":"",s=jM(e),{poly:r,R:a,rd:o}=s,c=Zl(i,r,{HT:2.3}),l=(h,d)=>ir(r,h,d);if(e.figFill!=="plain")for(let h=0;h<e.petals;h++){let d=h/e.petals*tn,u=Math.sin(d),f=-Math.cos(d),g=-f,b=u,m=null;for(let p=o+.75;p<a-.7;){let v=u*p,S=f*p,_=-l(v,S),y,T;if(_>=2.3)y=Math.min(1.5,_-.8),T=[-(y/2+.05),y/2+.05];else if(_>=1.15)y=Math.min(1.7,2*(_-.55)),T=[0];else{p+=.4,m=null;continue}let E=p+y/2;if(E+y/2>a-.55)break;for(let x of T)rn(i,"round","accent",y/2,new C(u*E+g*x,c+.04,f*E+b*x),null,y);if(m!=null)for(let x of T.length>1?[-(y+.1),0,y+.1]:[-y*.5,y*.5]){let A=u*(p-.02)+g*x,P=f*(p-.02)+b*x;l(A,P)<-.45&&i.bead.push([A,c+y*.09,P,y*.15])}m=y,p+=y+.1}}return Gd(i,0,0,o,o,o*.5,c-.1,e.figFill==="plain"?0:1.25,()=>"inner"),i.rims.push(kd(Array.from({length:64},(h,d)=>new C(o*Math.cos(d/64*tn),c+.05,o*Math.sin(d/64*tn))),.22)),{inside:(h,d)=>l(h,d)<-(bt-.25),ext:[a,a],zTop:-a,xTop:0,yMid:1.2,fin:t,altS:n}}var ng=27.6,YM=31.4;function Km(i,e,t,n,s,r){let o=Math.cos(t),c=Math.sin(t),l=u=>s/2*Math.sin(Math.PI*u**1.4)**.55,h=[],d=(u,f,g)=>h.push([r*(i+n*u*o-f*c),e+n*u*c+f*o,g]);for(let u=0;u<=30;u++){let f=u/30;d(f,-l(f),u===0?1:0)}for(let u=29;u>0;u--){let f=u/30;d(f,l(f),0)}return h}function JM(i){let{o:e}=i,t=e.finish==="nham"?":satin":e.finish==="chai"?":brush":"",n=e.twoTone==="settings"?":alt":"",s=e.figSize/ng,r=(12.6-15)/2*s*-1,a=S=>S*s+r,o=e.figFill!=="plain",c=Math.min(ha[e.paveD],1.5),l=[];for(let S of[1,-1])l.push(Km(2.6*s,a(-5.6),10*nr,13*s,7.4*s,S),Km(2.4*s,a(-3),45*nr,9.8*s,5.4*s,S));let h=[];for(let S of l){let _=Zl(i,S,{HT:1.8,rim:.25}),y=(x,A)=>ir(S,x,A);h.push(y);let T=S.map(x=>Math.abs(x[0])),E=S.map(x=>Math.abs(x[1]));o&&eg(i,(x,A,P)=>y(x,A)<-(P+(P>0?.58:.25)),[Math.max(...T),Math.max(...E)],Math.min(c,1.2),_)}let d=(S,_,y)=>Array.from({length:64},(T,E)=>{let x=E/64*tn;return[_*Math.sin(x),S-y*Math.cos(x),0]}),u=[a(6.5),4.7*s,8.5*s],f=[a(-5.2),4.1*s,3.7*s];for(let[S,_,y]of[u,f]){let T=d(S,_,y);Zl(i,T,{HT:1.5,rim:0}),h.push((E,x)=>ir(T,E,x))}let g=2.6*s;if(Gd(i,0,u[0],u[1],u[2],3.5*s,1.4,o?c:0,(S,_)=>Math.floor((_+u[2])/g)%2?"inner":"accent"),Gd(i,0,f[0],f[1],f[2],3.3*s,1.4,o?c:0,()=>"accent"),o)for(let S=1;S*g<2*u[2]-1;S++){let _=-u[2]+S*g,y=1-(_/u[2])**2;if(y<.15)continue;let T=u[1]*Math.sqrt(y);i.rims.push(Mi(Array.from({length:13},(E,x)=>{let A=T*(-1+x/6)*.98;return new C(A,1.4+3.5*s*Math.sqrt(Math.max(0,y-(A/u[1])**2))+.05,u[0]+_)}),.2*s+.08,26))}let b=a(-10.3),m=2.35*s,p=new zi(m,28,18).toNonIndexed();p.deleteAttribute("uv"),p.translate(0,1.9*s+.3,b),i.plates.push(p);for(let S of[-1,1]){let _=new C(S*.62,.62,-.48).normalize();rn(i,"round","inner",.62*s,new C(0,1.9*s+.3,b).addScaledVector(_,m-.05),Ro(_),1.25*s),i.rims.push(Mi([[.8,2.6,-12.2],[2.2,2.3,-13.8],[3.9,1.6,-14.6]].map(([y,T,E])=>new C(S*y*s,T*s*.75+.3,a(E))),.32*s+.05,24));for(let y of[[[2.6,-7.4],[5.3,-10.2],[6.5,-12.2]],[[3.6,-2.4],[6.8,1.6],[6.4,4.8]],[[3.5,1.6],[6.9,7.4],[5.8,11.6]]])i.rims.push(Mi(y.map(([T,E],x)=>new C(S*T*s,1.1-x*.2,a(E))),.42*s+.05,24))}let v=a(-10.3)-m+.3;return{inside:(S,_)=>h.some(y=>y(S,_)<-(bt-.25)),ext:[16.5*s,15.5*s],zTop:v,xTop:0,yMid:1.3,fin:t,altS:n,bailK:.85}}function Vd(i){let e=i.figSize,t=en(e*.17,3.6,5.6),n=e,s=e*.66,r=([o,c])=>[(o-2)/4*(s-t),-((c-3)/6)*(n-t)],a=ql[i.ch1].map(o=>o.map(r));return{w:t,strokes:a,pts:a.flat()}}function $M(i,e,t,n,s,r){let a=e[0]-i[0],o=e[1]-i[1],c=Math.hypot(a,o)||1e-6,l=a/c,h=o/c,d=s?[i[0]-l*t/2,i[1]-h*t/2]:i,u=r?[e[0]+l*t/2,e[1]+h*t/2]:e,f=-h*(t/2),g=l*(t/2),b=.22,m=1-b/(t/2),p=1-bt/(t/2),v=x=>{let A=(P,I)=>[x[0]+f*P,I,x[1]+g*P];return[A(-1,0),A(-1,0),A(-1,n-b),A(-1,n-b),A(-m,n),A(-m,n),A(m,n),A(m,n),A(1,n-b),A(1,n-b),A(1,0),A(1,0),A(p,0),A(p,0),A(p,n-bt),A(p,n-bt),A(-p,n-bt),A(-p,n-bt),A(-p,0),A(-p,0)]},S=v(d),_=v(u),y=S.length,T=x=>Array(y).fill([x[0],n/2,x[1]]),E=[T(d),S,S,_,_,T(u)];return yi(E.length,y,(x,A)=>E[x][A],!1,!0).toNonIndexed()}function ig(i,e,t,n,s,r,a){let o=Math.min(t,s)-en((n-e)*.2,1.8,3.6),c=(l,h)=>new C((l+r)/2,a,(h+o)/2-.15);return i.plates.push(Mi([new C(e,a,t),c(e,t),new C(r,a,o),c(n,s),new C(n,a,s)],.65,40)),{x:r,z:o+.3}}function sg(i,e,t,n){let s=[];for(let r of e){let a=r.length-1,o=Math.hypot(r[0][0]-r[a][0],r[0][1]-r[a][1])<1e-6;for(let c=0;c<a;c++)s.push([r[c],r[c+1]]),i.plates.push($M(r[c],r[c+1],t,n,!o&&c===0,!o&&c===a-1));for(let c=o?0:1;c<a;c++){let l=new Bi(t/2,t/2,n-.22,24).toNonIndexed();l.deleteAttribute("uv"),l.translate(r[c][0],(n-.22)/2,r[c][1]);let h=new Bi(t/2-.22,t/2,.22,24).toNonIndexed();h.deleteAttribute("uv"),h.translate(r[c][0],n-.11,r[c][1]),i.plates.push(l,h)}}return s}function rg(i,e,t,n){let s=t>=4.4,r=s?Math.min(1.6,(t-1.3)/2-.05):Math.min(1.8,t-1.4),a=s?[-(r/2+.05),r/2+.05]:[0],o=[];for(let[l,h]of e){let d=Math.hypot(h[0]-l[0],h[1]-l[1]),u=(h[0]-l[0])/d,f=(h[1]-l[1])/d,g=Math.max(1,Math.round(d/(r+.12)));for(let b=0;b<=g;b++)for(let m of a){let p=[l[0]+u*(d*b)/g-f*m,l[1]+f*(d*b)/g+u*m];$l(e,p[0],p[1])>t/2-r/2-.45||o.some(v=>Math.hypot(v[0]-p[0],v[1]-p[1])<r+.03)||(o.push(p),rn(i,"round","accent",r/2,new C(p[0],n+.04,p[1]),null,r))}}let c=new Set;for(let l of o)for(let[h,d]of[[-1,-1],[-1,1],[1,-1],[1,1]]){let u=l[0]+h*(r+.1)/2,f=l[1]+d*(r+.1)/2,g=`${Math.round(u*4)},${Math.round(f*4)}`;c.has(g)||(c.add(g),!($l(e,u,f)>t/2-.4||o.some(b=>Math.hypot(b[0]-u,b[1]-f)<r/2+.08))&&i.bead.push([u,n+r*.09,f,r*.15]))}}function ZM(i){let{o:e}=i,t=e.finish==="nham"?":satin":e.finish==="chai"?":brush":"",n=e.twoTone==="settings"?":alt":"",{w:s,strokes:r,pts:a}=Vd(e),o=2.7,c=sg(i,r,s,o);e.figFill!=="plain"&&rg(i,c,s,o);let l=Math.min(...a.map(p=>p[1])),h=a.filter(p=>p[1]<l+.3).sort((p,v)=>Math.abs(p[0])-Math.abs(v[0])),d=a.map(p=>Math.abs(p[0])),u=a.map(p=>Math.abs(p[1])),f=h[0][0],g=l-s/2+.25,b=Math.min(...h.map(p=>p[0])),m=Math.max(...h.map(p=>p[0]));if(Math.abs(f)>1.2&&m-b>3){let p=l-s/2+.5,v=ig(i,b,p,m,p,(b+m)/2,1.35);f=v.x,g=v.z}return{inside:()=>!1,ext:[Math.max(...d)+s,Math.max(...u)+s],zTop:g,xTop:f,yMid:1.35,fin:t,altS:n}}function ag(i){let e=i.name.length,t=Math.round(i.nameSize*1.5*10)/10,n=en(t*.2,2.4,3.6),s=t*.7,r=Math.max(.5,n*.25),a=e*s+(e-1)*r,o=[...i.name].map((l,h)=>{let d=-a/2+s/2+h*(s+r);return{cx:d,strokes:ql[l].map(u=>u.map(([f,g])=>[d+(f-2)/4*(s-n),-((g-3)/6)*(t-n)]))}}),c=(t-n)/2;return{n:e,hL:t,w:n,wL:s,textW:a,letters:o,base:[[-a/2+n/2,c],[a/2-n/2,c]]}}function QM(i){let{o:e}=i,t=e.finish==="nham"?":satin":e.finish==="chai"?":brush":"",n=e.twoTone==="settings"?":alt":"",s=ag(e),{w:r,letters:a}=s,o=2.5,c=sg(i,[...a.flatMap(g=>g.strokes),s.base],r,o);e.figFill!=="plain"&&rg(i,c,r,o);let l=a.flatMap(g=>{let b=g.strokes.flat(),m=Math.min(...b.map(p=>p[1]));return b.filter(p=>p[1]<m+.3).map(p=>({x:p[0],z:m-r/2+.25}))}),h=l.filter(g=>Math.abs(g.x)<.9).sort((g,b)=>Math.abs(g.x)-Math.abs(b.x))[0],d=l.filter(g=>g.x<0).sort((g,b)=>b.x-g.x)[0],u=l.filter(g=>g.x>0).sort((g,b)=>g.x-b.x)[0],f=h||(d&&u?ig(i,d.x,d.z+.25,u.x,u.z+.25,0,1.25):d||u);return{inside:()=>!1,ext:[s.textW/2+r,s.hL/2+r],zTop:f.z,xTop:f.x,yMid:1.25,fin:t,altS:n}}function eS(i,e){let{g:t,o:n}=i;if(n.back==="dac")return;let s=.3,r=.32,[a,o]=e.ext,c=[],l=(h,d)=>{let u=Math.hypot(d[0]-h[0],d[1]-h[1]),f=Math.max(1,Math.ceil(u/.35)),g=null,b=null,m=()=>{g&&Math.hypot(b[0]-g[0],b[1]-g[1])>.9&&c.push(Od([new C(g[0],r,g[1]),new C((g[0]+b[0])/2,r,(g[1]+b[1])/2),new C(b[0],r,b[1])],()=>s,6,3)),g=null};for(let p=0;p<=f;p++){let v=[h[0]+(d[0]-h[0])*p/f,h[1]+(d[1]-h[1])*p/f];e.inside(v[0],v[1])?(g||(g=v),b=v):m()}m()};if(n.back==="ong"){let d=Math.sqrt(3)*2.3,u=new Set,f=g=>`${Math.round(g[0]*20)},${Math.round(g[1]*20)}`;for(let g=-Math.ceil(o/(1.5*2.3))-1;g<=Math.ceil(o/(1.5*2.3))+1;g++)for(let b=-Math.ceil(a/d)-1;b<=Math.ceil(a/d)+1;b++){let m=(b+(g%2?.5:0))*d,p=g*1.5*2.3,v=Array.from({length:6},(S,_)=>[m+2.3*Math.sin(_*Math.PI/3),p+2.3*Math.cos(_*Math.PI/3)]);for(let S=0;S<6;S++){let _=v[S],y=v[(S+1)%6],T=[f(_),f(y)].sort().join("|");u.has(T)||(u.add(T),l(_,y))}}}else{let h=(n.back==="x"?4.4:3.3)*Math.SQRT2,d=Math.ceil((a+o)/h)+1;for(let u=-d;u<=d;u++)for(let f of[-1,1])l([-a,f*(-a-u*h)],[a,f*(a-u*h)]);if(n.back==="x")for(let u=-Math.ceil(o/(h/2));u<=Math.ceil(o/(h/2));u++)l([-a,u*h/2],[a,u*h/2])}c.length&&wn(t,ji(c),"metal:lattice")}function tS(i,e){let{g:t,o:n}=i,[s,r]=e.ext,a=en(Math.min(Math.sqrt(4*s*r),2.5*r)/25.4,.72,1.2)*(e.bailK||1)*(n.bailSize==="big"?1.3:1),o=8.4*a,c=2.2*a,l=3.3*a,h=en(.78*a,.68,.95),d=.6*Math.sqrt(a),u=e.yMid,f=e.zTop-d-.2,g=e.xTop||0,b=j=>{let G=(j%tn+tn)%tn;return l*(.6+.4*(G<Math.PI?Math.sin(Math.PI*(G/Math.PI)**.75):0))},m=en(1.5*a,1.2,2.2),p=e.zTop+.5-f,v=new ds(m,1.05,p).toNonIndexed();v.deleteAttribute("uv"),v.translate(g,u,f+p/2),v.computeVertexNormals();let S=new Bi(d,d,b(0)+.5,20).toNonIndexed();S.deleteAttribute("uv"),S.rotateZ(Math.PI/2),S.translate(g,u,f),wn(t,ji([v,S]),`metal:hinge${e.fin}`);let _=j=>{let G=.48+.52*Math.sin(j/2)**2;return[u+c*Math.sin(j)*G,f-.12-o/2*(1-Math.cos(j))]},y=j=>{let V=_(j-.001),J=_(j+.001),pe=(J[0]-V[0])/(2*.001),be=(J[1]-V[1])/(2*.001),ke=Math.hypot(pe,be)||1,ae=be/ke,ve=-pe/ke,z=_(j),q=u,ie=f-.12-o/2;return ae*(z[0]-q)+ve*(z[1]-ie)<0&&(ae=-ae,ve=-ve),{c:z,n:[ae,ve]}},T=96,E=Math.min(.16,h*.24),x=j=>[[-j/2,-h/2+E],[-j/2,h/2-E],[-j/2,h/2-E],[-j/2+E,h/2],[-j/2+E,h/2],[j/2-E,h/2],[j/2-E,h/2],[j/2,h/2-E],[j/2,h/2-E],[j/2,-h/2+E],[j/2,-h/2+E],[j/2-E,-h/2],[j/2-E,-h/2],[-j/2+E,-h/2],[-j/2+E,-h/2],[-j/2,-h/2+E]],A=Array.from({length:T},(j,G)=>{let V=G/T*tn;return{...y(V),s:x(b(V))}});if(wn(t,yi(T,16,(j,G)=>{let V=A[j],[J,pe]=V.s[G];return[g+J,V.c[0]+V.n[0]*pe,V.c[1]+V.n[1]*pe]},!0,!0),`metal:bail${e.fin}`),n.bail==="plain")return;let P=.13*Math.PI,I=.93*Math.PI,N=240,U=[0];for(let j=1;j<=N;j++){let G=_(P+(I-P)*(j-1)/N),V=_(P+(I-P)*j/N);U.push(U[j-1]+Math.hypot(V[0]-G[0],V[1]-G[1]))}let L=U[N],B=j=>{let G=1;for(;G<N&&U[G]<j;)G++;let V=(j-U[G-1])/(U[G]-U[G-1]||1);return P+(I-P)*(G-1+en(V,0,1))/N},Y=(j,G,V)=>{let J=y(B(j));return{pos:new C(g+G,J.c[0]+J.n[0]*(h/2+V),J.c[1]+J.n[1]*(h/2+V)),n:new C(0,J.n[0],J.n[1])}},W=j=>b(B(j));if(n.bail==="baguette"){let j=[],G=[];for(let V=0;V<L;){let J=W(V)-1.05,pe=J/4,be=2*pe+.12;if(V+be>L+.05)break;let ke=Y(V+be/2,0,-.02);rn(i,"bag2","side",pe,ke.pos,Kl(ke.n,new C(1,0,0)),J),V+=be}for(let V=0;V<=28;V++){let J=V/28*L,pe=(W(J)-1.05)/2+.17;j.push(Y(J,-pe,.05).pos),G.push(Y(J,pe,.05).pos)}i.rims.push(Mi(j,.14,56),Mi(G,.14,56))}else{let j=l>=3.9?2:1,G=J=>en((W(J)-.75)/j-.08,.75,1.6),V=!0;for(let J=0;J<L;){let pe=G(J+.5),be=pe+.09;if(J+be>L+.05)break;for(let ke=0;ke<j;ke++){let ae=Y(J+be/2,(ke-(j-1)/2)*(pe+.09),.04);rn(i,"round","accent",pe/2,ae.pos,Ro(ae.n),pe)}for(let ke of V?[0,1]:[1])for(let ae=0;ae<=j;ae++){let ve=Y(J+ke*be,(ae-j/2)*(pe+.09),pe*.08);i.bead.push([ve.pos.x,ve.pos.y,ve.pos.z,pe*.15])}V=!1,J+=be}}}var Hd=new et().makeRotationX(Math.PI/2),nS=new Ht().setFromRotationMatrix(Hd);function iS(i){for(let e of i.children)e.userData.ownGeo?e.geometry.applyMatrix4(Hd):(e.position.applyMatrix4(Hd),e.quaternion.premultiply(nS))}function $d(i){let e=ws(i),t=new hn,n=BM(t,e),s=(e.type==="name"&&e.nameStyle==="cut"?QM:{cross:WM,shape:XM,flower:KM,bee:JM,initial:ZM}[e.type])?.(n)||VM(n);n.plates.length&&wn(t,ji(n.plates.map(a=>{let o=a.index?a.toNonIndexed():a;return o.deleteAttribute?.("uv"),o})),`metal:body${s.fin}`),eS(n,s),tS(n,s),n.bead.length&&wn(t,qm(n.bead,.16,7),`metal:beads${s.altS}`),n.rims.length&&wn(t,ji(n.rims.map(a=>{let o=a.index?a.toNonIndexed():a;return o.deleteAttribute?.("uv"),o})),`metal:rims${s.altS}`),n.motif.length&&wn(t,ji(n.motif),`metal:motif${e.twoTone==="motif"?":alt":""}`),iS(t);let r={};for(let[a,o,c]of n.list){let l=`${a}|${o}|${c}`;r[l]=(r[l]||0)+1}return t.userData.stats={accent:n.cnt.accent,side:n.cnt.side,inner:n.cnt.inner,sizes:r},t}var Ji={moissanite:["Moissanite"],"lab-diamond":["Lab Diamond"],"natural-diamond":["Kim c\u01B0\u01A1ng thi\xEAn nhi\xEAn"],sapphire:["Sapphire xanh","#2F4FA6"],ruby:["Ruby","#B3203F"],emerald:["Emerald","#1C8A55"],"yellow-sapphire":["Sapphire v\xE0ng","#E8C530"]},$n={vang:["V\xE0ng","#D9B35E"],"vang-trang":["V\xE0ng tr\u1EAFng","#E4E2DC"],"vang-hong":["V\xE0ng h\u1ED3ng","#D9A08A"]},As=i=>String(Math.round(i*100)/100).replace(".",","),Ot=i=>`<svg viewBox="0 0 48 48" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">${i}</svg>`,ch='<rect x="21.5" y="3" width="5" height="7" rx="2.2" opacity=".6"/>',og={rect:'<rect x="11" y="11" width="26" height="32" rx="6"/>',oct:'<path d="M16 11h16l5 5v22l-5 5H16l-5-5V16z"/>',round:'<circle cx="24" cy="27" r="15.5"/>',oval:'<ellipse cx="24" cy="27" rx="13" ry="16"/>'},cg={rect:'<rect x="16" y="16" width="16" height="22" rx="2.5" opacity=".55"/>',oct:'<path d="M18.5 16h11l2.5 2.5v17l-2.5 2.5h-11L16 35.500v-17z" opacity=".55"/>',round:'<circle cx="24" cy="27" r="10" opacity=".55"/>',oval:'<ellipse cx="24" cy="27" rx="8" ry="11" opacity=".55"/>'},Zd=i=>i?'<path d="M21.5 22V16l-2-2 4.500-3.500L28.500 14l-2 2v6h5l2-2 3.500 4.500L33.500 29l-2-2h-5v11l2 2-4.500 3.500L19.500 40l2-2V27h-5l-2 2L11 24.500 14.500 20l2 2z"/>':'<path d="M21 11h6v11h8v6h-8v15h-6V28h-8v-6h8z"/>',Qd=(i,e,t,n,s,r)=>{let a="";for(let c=0;c<i;c++){let l=c/i;a+=`<circle cx="${(e+n*l+n/(2*i)).toFixed(1)}" cy="${t}" r="${r}"/><circle cx="${(e+n*l+n/(2*i)).toFixed(1)}" cy="${t+s}" r="${r}"/>`}let o=Math.round(i*s/n);for(let c=1;c<o;c++){let l=(t+s*c/o).toFixed(1);a+=`<circle cx="${e}" cy="${l}" r="${r}"/><circle cx="${e+n}" cy="${l}" r="${r}"/>`}return a},An={tag:Ot(`${ch}${og.rect}${cg.rect}<path d="M20 22h8M24 22v11" stroke-width="2.2"/>`),cross:Ot(`${ch.replace('y="3"','y="1"')}${Zd(!0)}`),...Object.fromEntries(Ql.map(i=>[`out_${i}`,Ot(`${ch}${og[i]}${cg[i]}`)])),pave1:Ot(`<rect x="8" y="8" width="32" height="32" rx="6"/><rect x="15" y="15" width="18" height="18" rx="2" opacity=".55"/>${Qd(5,11.5,11.5,25,25,1.6)}`),pave2:Ot(`<rect x="6" y="6" width="36" height="36" rx="6"/><rect x="17" y="17" width="14" height="14" rx="2" opacity=".55"/>${Qd(6,9,9,30,30,1.3)}${Qd(4,13.2,13.2,21.6,21.6,1.3)}`),baguette:Ot('<rect x="8" y="8" width="32" height="32" rx="6"/><rect x="15" y="15" width="18" height="18" rx="2" opacity=".55"/><path d="M16 9.500h7v4h-7zM25 9.500h7v4h-7zM16 34.500h7v4h-7zM25 34.500h7v4h-7zM9.500 16h4v7h-4zM9.500 25h4v7h-4zM34.500 16h4v7h-4zM34.500 25h4v7h-4z"/>'),bagRadial:Ot(`<rect x="8" y="8" width="32" height="32" rx="6"/><rect x="15.500" y="15.500" width="17" height="17" rx="2" opacity=".55"/>${[17,21.7,26.3,31].map(i=>`<path d="M${i} 9.500v5M${i} 33.500v5"/>`).join("")}${[17,21.7,26.3,31].map(i=>`<path d="M9.500 ${i}h5M33.500 ${i}h5"/>`).join("")}`),plainB:Ot('<rect x="8" y="8" width="32" height="32" rx="6"/><rect x="15" y="15" width="18" height="18" rx="2" opacity=".55"/>'),cs_loe:Ot(Zd(!0)),cs_thang:Ot(Zd(!1)),fig_heart:Ot('<path d="M24 41C13 32 7 26 7 18.500 7 13 11 9.500 15.500 9.500c3.500 0 6.500 2 8.500 5.500 2-3.500 5-5.500 8.500-5.500C37 9.500 41 13 41 18.500 41 26 35 32 24 41z"/>'),fig_star:Ot('<path d="M24 6l5.300 11.700 12.700 1.300-9.500 8.600 2.700 12.500L24 33.700l-11.200 6.400 2.700-12.500L6 19l12.700-1.300z"/>'),fig_moon:Ot('<path d="M33 8.500a17 17 0 1 0 0 31 13.500 13.500 0 0 1 0-31z"/>'),fig_drop:Ot('<path d="M24 5c7 10 12 16.500 12 23.500a12 12 0 0 1-24 0C12 21.500 17 15 24 5z"/>'),fig_crown:Ot('<path d="M9 37l-3-21 10.500 9L24 10l7.500 15L42 16l-3 21z"/><circle cx="6" cy="14" r="1.6"/><circle cx="24" cy="8" r="1.6"/><circle cx="42" cy="14" r="1.6"/>'),fig_bolt:Ot('<path d="M27 5L12 27h9l-4 16 17-24h-9.500L30 5z"/>'),flower:Ot(`${Array.from({length:10},(i,e)=>`<ellipse cx="24" cy="11.500" rx="3.400" ry="8" transform="rotate(${e*36} 24 25)"/>`).join("")}<circle cx="24" cy="25" r="5.500" fill="currentColor" fill-opacity=".25"/>`),bee:Ot('<ellipse cx="24" cy="31" rx="5.500" ry="10"/><path d="M19 28h10M18.700 32.500h10.600M19.700 37h8.600"/><circle cx="24" cy="17.500" r="4"/><circle cx="24" cy="10.500" r="2.600"/><path d="M22.500 8.500L19 4M25.500 8.500L29 4"/><path d="M20 17C13 11 5 13 4.500 18c-.4 4 7 5 15.500 2.500zM28 17c7-6 15-4 15.500 1 .4 4-7 5-15.500 2.500z"/><path d="M19.500 22c-5 1-9 5-7.500 8 1.200 2.200 5-.5 8-5zM28.500 22c5 1 9 5 7.500 8-1.200 2.200-5-.5-8-5z" opacity=".7"/>'),initial:Ot(`${ch}<path d="M13 13h22v7h-7.500v23h-7V20H13z"/>`),fig_triangle:Ot('<path d="M24 7l17 30H7z"/><path d="M24 31l-6.500-11h13z" opacity=".6"/>'),name:Ot('<rect x="9" y="5" width="4" height="6" rx="1.800" opacity=".6"/><rect x="35" y="5" width="4" height="6" rx="1.800" opacity=".6"/><rect x="4" y="13" width="40" height="22" rx="5"/><path d="M11 19.500h6M14 19.500v9M21 28.500v-9l5 9v-9M31 19.500v9h5.500" stroke-width="1.600"/>'),ns_plate:Ot('<rect x="4" y="13" width="40" height="22" rx="5"/><rect x="8" y="17" width="32" height="14" rx="1.500" opacity=".5"/><path d="M13 20.500h5M15.500 20.500v7M22 27.500v-7l4.500 7v-7M30.500 20.500v7h4.500" stroke-width="1.500"/>'),ns_cut:Ot('<path d="M6 34h36" stroke-width="2.600"/><path d="M8 14h9M12.500 14v20M21 34V14l8 20V14M33 14v20h8" stroke-width="2.600"/>')},mg={rect:"Ch\u1EEF nh\u1EADt bo g\xF3c",oct:"Ch\u1EEF nh\u1EADt v\xE1t g\xF3c",round:"Tr\xF2n",oval:"Oval"},sf={pave1:"M\u1ED9t h\xE0ng pav\xE9",pave2:"Hai h\xE0ng pav\xE9",baguette:"K\xEAnh baguette",bagRadial:"Baguette to\u1EA3 quanh",plain:"V\xE0ng tr\u01A1n"},rf={none:"Kh\xF4ng",pave:"H\xE0ng pav\xE9",baguette:"H\xE0ng baguette",rail:"G\u1EDD n\u1ED5i"},hh={nham:"Nh\xE1m m\u1EDD",bong:"B\xF3ng g\u01B0\u01A1ng",pave:"L\xE1t k\xEDn \u0111\xE1"},lg={x:"L\u01B0\u1EDBi m\u1EAFt c\xE1o",tram:"L\u01B0\u1EDBi m\u1EAFt tr\xE1m",ong:"L\u01B0\u1EDBi t\u1ED5 ong",dac:"B\xEDt k\xEDn, kh\xF4ng l\xF3t l\u01B0\u1EDBi"},af={pave:"\u0110\xEDnh pav\xE9",baguette:"\u0110\xEDnh baguette",plain:"Tr\u01A1n"},of={baguette:"K\xEAnh baguette + pav\xE9",pave:"Pav\xE9 k\xEDn",plain:"V\xE0ng tr\u01A1n"},sS={tag:"M\u1EB7t th\u1EBB",cross:"Th\xE1nh gi\xE1",shape:"H\xECnh kh\u1ED1i",flower:"Hoa c\xFAc",bee:"Con ong",initial:"Ch\u1EEF \u0111\u1EE9ng ri\xEAng",name:"B\u1EA3ng t\xEAn"},df={heart:"Tr\xE1i tim",star:"Ng\xF4i sao",moon:"Tr\u0103ng khuy\u1EBFt",drop:"Gi\u1ECDt n\u01B0\u1EDBc",crown:"V\u01B0\u01A1ng mi\u1EC7n",bolt:"Tia s\xE9t",triangle:"Tam gi\xE1c"},hg={pave:"L\xE1t k\xEDn \u0111\xE1",edge:"M\u1ED9t h\xE0ng \u0111\xE1 quanh vi\u1EC1n",plain:"V\xE0ng tr\u01A1n"},cf={"\u271D":"Th\xE1nh gi\xE1",$:"K\xFD hi\u1EC7u $","\u2665":"Tr\xE1i tim","\u2605":"Ng\xF4i sao"},ef=[...nh,...ih,...Xd].map(i=>[i,cf[i]||i]),Co=i=>cf[i]?cf[i].toLowerCase():`\u201C${i}\u201D`,oi=i=>i.type==="tag",Zi=i=>i.type==="cross",Es=i=>i.type==="shape",ci=i=>i.type==="flower",wi=i=>i.type==="bee",ma=i=>i.type==="initial",or=i=>i.type==="name",Jn=i=>or(i)&&i.nameStyle!=="cut",rr=i=>or(i)&&i.nameStyle==="cut",ar=i=>oi(i)||Jn(i),ug=i=>Es(i)||ci(i)||wi(i)||ma(i),pa=i=>oi(i)&&i.motif==="glyph"||Jn(i),gg=i=>(ar(i)?["pave1","pave2"].includes(i.border)||i.frame2==="pave"||i.field==="pave":Zi(i)?i.crossFill!=="plain":i.figFill!=="plain")||i.bail==="pave",bg=i=>(ar(i)?["baguette","bagRadial"].includes(i.border)||i.frame2==="baguette":Zi(i)&&i.crossFill==="baguette")||i.bail==="baguette",rS=i=>pa(i)&&i.motifStone==="on"||(ci(i)||wi(i))&&i.figFill!=="plain",aS=i=>Zi(i)&&i.crossCenter==="stone"||Es(i)&&i.figCenter==="stone",oS=i=>ar(i)?i.border!=="plain"||i.field==="pave":Zi(i)?i.crossFill!=="plain":(Es(i)||wi(i))&&i.figFill!=="plain",Ti=i=>{let[e,t]=Jm(i);return`${As(e)} \xD7 ${As(t)} mm`},ua=Object.keys(Ji).map(i=>[i,Ji[i][0],Ji[i][1]]),ut=(i,e,t,n=()=>!0,s=null,r=!1)=>({k:i,label:e,opts:t,show:n,hint:s,sel:r}),lf=(i,e)=>typeof i.opts=="function"?i.opts(e):i.opts,cS=[{id:"form",title:"Ki\u1EC3u d\xE1ng",tab:"Ki\u1EC3u d\xE1ng",groups:[ut("type","Ki\u1EC3u m\u1EB7t d\xE2y",[["tag","M\u1EB7t th\u1EBB",An.tag],["cross","Th\xE1nh gi\xE1",An.cross],["shape","H\xECnh kh\u1ED1i",An.fig_heart],["flower","Hoa c\xFAc",An.flower],["bee","Con ong",An.bee],["initial","Ch\u1EEF \u0111\u1EE9ng ri\xEAng",An.initial],["name","B\u1EA3ng t\xEAn",An.name]],()=>!0,i=>({tag:"T\u1EA5m th\u1EBB c\xF3 v\xE0nh \u0111\xEDnh \u0111\xE1, gi\u1EEFa l\xE0 ch\u1EEF c\xE1i, con s\u1ED1 ho\u1EB7c k\xFD hi\u1EC7u c\u1EE7a ri\xEAng b\u1EA1n.",cross:"Th\xE1nh gi\xE1 b\u1ED1n nh\xE1nh, \u0111\xEDnh \u0111\xE1 d\u1ECDc t\u1EEBng nh\xE1nh, vi\xEAn ch\u1EE7 \u1EDF giao \u0111i\u1EC3m.",shape:"M\u1ED9t h\xECnh kh\u1ED1i ph\u1EB3ng l\xE1t \u0111\xE1: tr\xE1i tim, ng\xF4i sao, tr\u0103ng khuy\u1EBFt, gi\u1ECDt n\u01B0\u1EDBc, v\u01B0\u01A1ng mi\u1EC7n, tia s\xE9t.",flower:"B\xF4ng c\xFAc nhi\u1EC1u c\xE1nh, m\u1ED7i c\xE1nh m\u1ED9t d\u1EA3i \u0111\xE1, nhu\u1EF5 l\xE0 v\xF2m ph\u1EE7 \u0111\xE1 m\xE0u.",bee:"Con ong v\u1EDBi hai \u0111\xF4i c\xE1nh l\xE1t \u0111\xE1, th\xE2n k\u1EBB s\u1ECDc hai m\xE0u \u0111\xE1.",initial:"M\u1ED9t ch\u1EEF c\xE1i, con s\u1ED1 ho\u1EB7c k\xFD hi\u1EC7u l\u1EDBn l\xE0m ch\xEDnh m\u1EB7t d\xE2y.",name:"T\xEAn c\u1EE7a b\u1EA1n, t\u1ED1i \u0111a 8 k\xFD t\u1EF1, tr\xEAn m\u1ED9t b\u1EA3ng \u0111\xEDnh \u0111\xE1 ho\u1EB7c th\xE0nh h\xE0ng ch\u1EEF r\u1EDDi."})[i.type]),ut("figure","H\xECnh",jd.map(i=>[i,df[i],An[`fig_${i}`]]),Es),ut("nameStyle","Ki\u1EC3u b\u1EA3ng t\xEAn",[["plate","B\u1EA3ng n\u1EC1n li\u1EC1n",An.ns_plate],["cut","Ch\u1EEF r\u1EDDi tr\xEAn thanh \u0111\u1EBF",An.ns_cut]],or,i=>rr(i)?"T\u1EEBng ch\u1EEF \u0111\u1EE9ng ri\xEAng, n\u1ED1i v\u1EDBi nhau b\u1EB1ng m\u1ED9t thanh \u0111\u1EBF ch\u1EA1y su\u1ED1t ph\xEDa d\u01B0\u1EDBi; m\u1ED9t khoen \u1EDF gi\u1EEFa.":"T\xEAn n\u1ED5i tr\xEAn m\u1ED9t b\u1EA3ng c\xF3 v\xE0nh \u0111\xEDnh \u0111\xE1, m\u1EB7t sau l\xF3t l\u01B0\u1EDBi; m\u1ED9t khoen \u1EDF gi\u1EEFa c\u1EA1nh tr\xEAn."),{k:"name",label:"T\xEAn tr\xEAn m\u1EB7t d\xE2y",text:!0,show:or},ut("nameSize","C\u1EE1 ch\u1EEF",i=>Yd.map(e=>[e,`Ch\u1EEF cao ${As(rr(i)?e*1.5:e)} mm`]),or,i=>`C\u1EA3 m\u1EB7t d\xE2y: ${Ti(i)}, ch\u01B0a k\u1EC3 khoen. T\xEAn d\xE0i th\xEC m\u1EB7t d\xE2y r\u1ED9ng theo.`),ut("ch1","K\xFD t\u1EF1",ef,ma,()=>"Ch\u1EEF c\xF3 hai \u0111\u1EC9nh nh\u01B0 H, U, V \u0111\u01B0\u1EE3c n\u1ED1i b\u1EB1ng m\u1ED9t quai m\u1EA3nh \u0111\u1EC3 khoen n\u1EB1m gi\u1EEFa.",!0),ut("petals","S\u1ED1 c\xE1nh hoa",Kd.map(i=>[i,`${i} c\xE1nh`]),ci),ut("figSize",i=>ci(i)?"C\u1EE1 b\xF4ng hoa":wi(i)?"C\u1EE1 con ong":"C\u1EE1 m\u1EB7t d\xE2y",i=>jl[i.type].map(e=>[e,Ti({...i,figSize:e})]),ug,()=>"R\u1ED9ng \xD7 cao, ch\u01B0a k\u1EC3 khoen lu\u1ED3n d\xE2y."),ut("outline",i=>Jn(i)?"D\xE1ng b\u1EA3ng":"D\xE1ng th\u1EBB",i=>Ql.filter(e=>oi(i)||["rect","oct"].includes(e)).map(e=>[e,Jn(i)?{rect:"Bo g\xF3c",oct:"V\xE1t g\xF3c"}[e]:mg[e],An[`out_${e}`]]),ar),ut("size","C\u1EE1 m\u1EB7t d\xE2y",i=>Wd.map(e=>[e,Ti({...i,size:e})]),oi,()=>"R\u1ED9ng \xD7 cao, ch\u01B0a k\u1EC3 khoen lu\u1ED3n d\xE2y."),ut("crossStyle","D\xE1ng th\xE1nh gi\xE1",[["loe","\u0110\u1EA7u loe nh\u1ECDn",An.cs_loe],["thang","Th\u1EB3ng",An.cs_thang]],Zi),ut("crossSize","C\u1EE1 th\xE1nh gi\xE1",i=>qd.map(e=>[e,Ti({...i,crossSize:e})]),Zi,()=>"R\u1ED9ng \xD7 cao, ch\u01B0a k\u1EC3 khoen lu\u1ED3n d\xE2y.")]},{id:"front",title:"M\u1EB7t tr\u01B0\u1EDBc & \u0111\xE1",tab:"M\u1EB7t tr\u01B0\u1EDBc",groups:[ut("border","V\xE0nh ngo\xE0i",eh.map(i=>[i,sf[i],An[i==="plain"?"plainB":i]]),ar,i=>({baguette:"Baguette n\u1ED1i \u0111u\xF4i d\u1ECDc b\u1ED1n c\u1EA1nh gi\u1EEFa hai g\u1EDD k\xEAnh; b\u1ED1n g\xF3c l\xE0 \u0111\xE1 tr\xF2n.",bagRadial:"Baguette x\u1EBFp to\u1EA3 quanh vi\u1EC1n, tr\u1EE5c d\xE0i h\u01B0\u1EDBng ra ngo\xE0i.",plain:"V\xE0nh v\xE1t nghi\xEAng \u0111\u1EC3 v\xE0ng tr\u01A1n, kh\xF4ng \u0111\xEDnh \u0111\xE1."})[i.border]||"V\xE0nh v\xE1t nghi\xEAng quanh th\u1EBB, \u0111\xE1 ch\u1EA1y theo t\u1EEBng c\u1EA1nh v\xE0 t\u1EEBng g\xF3c."),ut("frame2","Khung trong",i=>th.filter(e=>oh(i,e)).map(e=>[e,rf[e]]),ar,i=>th.some(e=>!oh(i,e))?"Th\u1EBB \u0111ang g\u1EA7n k\xEDn ch\u1ED7; ch\u1ECDn c\u1EE1 th\u1EBB l\u1EDBn h\u01A1n ho\u1EB7c v\xE0nh h\u1EB9p h\u01A1n \u0111\u1EC3 th\xEAm khung trong.":i.frame2!=="none"?"M\u1ED9t l\u1EDBp khung n\u1EB1m ngay trong v\xE0nh, bao quanh n\u1EC1n gi\u1EEFa.":""),ut("field","N\u1EC1n gi\u1EEFa",Object.keys(hh).map(i=>[i,hh[i]]),ar,i=>i.field==="nham"?Jn(i)?"N\u1EC1n nh\xE1m m\u1EDD gi\xFAp ch\u1EEF b\xF3ng n\u1ED5i r\xF5 h\u01A1n.":"N\u1EC1n nh\xE1m m\u1EDD gi\xFAp ho\u1EA1 ti\u1EBFt b\xF3ng n\u1ED5i r\xF5 h\u01A1n.":i.field==="pave"?Jn(i)?"\u0110\xE1 l\xE1t k\xEDn n\u1EC1n quanh ch\u1EEF. Ch\u1EEF s\u1EBD d\u1EC5 \u0111\u1ECDc h\u01A1n n\u1EBFu ch\u1ECDn n\xE9t v\xE0ng tr\u01A1n ho\u1EB7c \u0111\xE1 ch\u1EEF kh\xE1c m\xE0u \u0111\xE1 n\u1EC1n.":"\u0110\xE1 l\xE1t k\xEDn n\u1EC1n, ch\u1EEBa m\u1ED9t vi\u1EC1n v\xE0ng quanh ho\u1EA1 ti\u1EBFt.":""),ut("motifStone","N\xE9t ch\u1EEF",[["on","\u0110\xEDnh \u0111\xE1 tr\xEAn n\xE9t"],["off","V\xE0ng tr\u01A1n, bo v\u1ED3ng"]],Jn),ut("motifGem","Lo\u1EA1i \u0111\xE1 tr\xEAn ch\u1EEF",ua,i=>Jn(i)&&i.motifStone==="on"),ut("crossFill","\u0110\xE1 tr\xEAn th\xE1nh gi\xE1",Object.keys(of).map(i=>[i,of[i]]),Zi,i=>i.crossFill==="baguette"?"Gi\u1EEFa m\u1ED7i nh\xE1nh l\xE0 k\xEAnh baguette x\u1EBFp b\u1EADc thang; th\xE1nh gi\xE1 c\u1EE1 v\u1EEBa v\xE0 l\u1EDBn c\xF3 th\xEAm m\u1ED7i b\xEAn m\u1ED9t h\xE0ng \u0111\xE1 tr\xF2n nh\u1ECF.":""),ut("crossCenter","Giao \u0111i\u1EC3m",[["stone","Vi\xEAn ch\u1EE7 + v\xF2ng \u0111\xE1 nh\u1ECF"],["none","Kh\xF4ng vi\xEAn ch\u1EE7"]],Zi,i=>i.crossCenter==="stone"?"M\u1ED9t \u1EE5 tr\xF2n n\u1ED5i \u1EDF giao \u0111i\u1EC3m: vi\xEAn ch\u1EE7 b\u1ECDc vi\u1EC1n \u1EDF gi\u1EEFa, quanh l\xE0 m\u1ED9t v\xF2ng \u0111\xE1 t\u1EA5m nh\u1ECF.":""),ut("figFill","\u0110\xE1 tr\xEAn m\u1EB7t d\xE2y",i=>Object.keys(hg).filter(e=>Es(i)||e!=="edge").map(e=>[e,Es(i)?hg[e]:e==="pave"?"\u0110\xEDnh \u0111\xE1":"V\xE0ng tr\u01A1n"]),i=>ug(i)||rr(i),i=>rr(i)?"\u0110\xE1 ch\u1EA1y d\u1ECDc theo t\u1EEBng n\xE9t ch\u1EEF v\xE0 thanh \u0111\u1EBF.":ci(i)?"M\u1ED7i c\xE1nh m\u1ED9t d\u1EA3i \u0111\xE1 ch\u1EA1y d\u1ECDc; nhu\u1EF5 hoa ph\u1EE7 \u0111\xE1 theo m\xE0u b\u1EA1n ch\u1ECDn b\xEAn d\u01B0\u1EDBi.":wi(i)?"C\xE1nh l\xE1t \u0111\xE1 t\u1EA5m; b\u1EE5ng ong k\u1EBB s\u1ECDc xen k\u1EBD \u0111\xE1 t\u1EA5m v\xE0 \u0111\xE1 s\u1ECDc; hai m\u1EAFt c\xF9ng m\xE0u \u0111\xE1 s\u1ECDc.":ma(i)?"\u0110\xE1 ch\u1EA1y d\u1ECDc theo t\u1EEBng n\xE9t ch\u1EEF.":""),ut("figCenter","Vi\xEAn ch\u1EE7 \u1EDF gi\u1EEFa",[["none","Kh\xF4ng"],["stone","Vi\xEAn ch\u1EE7 b\u1ECDc vi\u1EC1n"]],sh,i=>i.figure==="triangle"&&i.figCenter==="stone"?"Vi\xEAn ch\u1EE7 n\u1EB1m tr\xEAn m\u1ED9t tam gi\xE1c ng\u01B0\u1EE3c b\u1EB1ng v\xE0ng tr\u01A1n n\u1ED5i gi\u1EEFa n\u1EC1n \u0111\xE1.":""),ut("gem","Lo\u1EA1i \u0111\xE1 vi\xEAn ch\u1EE7",ua,aS),ut("motifGem",i=>ci(i)?"Lo\u1EA1i \u0111\xE1 nhu\u1EF5 hoa":"Lo\u1EA1i \u0111\xE1 s\u1ECDc th\xE2n & m\u1EAFt",ua,i=>(ci(i)||wi(i))&&i.figFill!=="plain"),ut("paveD","C\u1EE1 \u0111\xE1",[["small","Nh\u1ECF \xB7 kho\u1EA3ng 1,2 mm"],["mid","V\u1EEBa \xB7 kho\u1EA3ng 1,5 mm"],["big","To \xB7 kho\u1EA3ng 1,8 mm"]],oS,i=>oi(i)?"\u0110\xE1 to th\xEC v\xE0nh r\u1ED9ng h\u01A1n, s\u1ED1 vi\xEAn \xEDt h\u01A1n.":"\u0110\xE1 to th\xEC s\u1ED1 vi\xEAn \xEDt h\u01A1n."),ut("accentGem","Lo\u1EA1i \u0111\xE1 t\u1EA5m",ua,gg),ut("sideGem","Lo\u1EA1i \u0111\xE1 baguette & \u0111\xE1 g\xF3c",ua,bg)]},{id:"motif",title:"Ho\u1EA1 ti\u1EBFt gi\u1EEFa th\u1EBB",tab:"Ho\u1EA1 ti\u1EBFt",show:oi,groups:[ut("motif","Ho\u1EA1 ti\u1EBFt",[["glyph","Ch\u1EEF c\xE1i, s\u1ED1, k\xFD hi\u1EC7u"],["none","Kh\xF4ng ho\u1EA1 ti\u1EBFt"]],()=>!0,i=>i.motif==="none"?"N\u1EC1n gi\u1EEFa \u0111\u1EC3 tr\u1ED1ng. Ch\u1ECDn \u201CL\xE1t k\xEDn \u0111\xE1\u201D \u1EDF b\u01B0\u1EDBc M\u1EB7t tr\u01B0\u1EDBc n\u1EBFu mu\u1ED1n c\u1EA3 th\u1EBB ph\u1EE7 \u0111\xE1.":""),ut("ch1","K\xFD t\u1EF1 th\u1EE9 nh\u1EA5t",ef,i=>oi(i)&&pa(i),null,!0),ut("ch2","K\xFD t\u1EF1 th\u1EE9 hai",[["","Kh\xF4ng (ch\u1EC9 m\u1ED9t k\xFD t\u1EF1)"],...ef],i=>oi(i)&&pa(i),()=>"Ch\u1ECDn hai k\xFD t\u1EF1 \u0111\u1EC3 gh\xE9p t\xEAn vi\u1EBFt t\u1EAFt, v\xED d\u1EE5 T v\xE0 H.",!0),ut("motifStone","N\xE9t ho\u1EA1 ti\u1EBFt",[["on","\u0110\xEDnh \u0111\xE1 tr\xEAn n\xE9t"],["off","V\xE0ng tr\u01A1n, bo v\u1ED3ng"]],i=>oi(i)&&pa(i)),ut("motifGem","Lo\u1EA1i \u0111\xE1 tr\xEAn ho\u1EA1 ti\u1EBFt",ua,i=>oi(i)&&pa(i)&&i.motifStone==="on")]},{id:"finish",title:"M\u1EB7t sau & ho\xE0n thi\u1EC7n",tab:"Ho\xE0n thi\u1EC7n",groups:[ut("back","M\u1EB7t sau",i=>ma(i)||rr(i)?[["x","R\u1ED7ng l\xF2ng m\xE1ng"],["dac","B\xEDt k\xEDn"]]:Object.keys(lg).map(e=>[e,lg[e]]),()=>!0,i=>ma(i)||rr(i)?"N\xE9t ch\u1EEF h\u1EB9p n\xEAn kh\xF4ng l\xF3t l\u01B0\u1EDBi: m\u1ED7i n\xE9t l\xE0 m\u1ED9t l\xF2ng m\xE1ng r\u1ED7ng ph\xEDa sau cho nh\u1EB9.":i.back==="dac"?"B\xEDt k\xEDn n\u1EB7ng tay v\xE0 t\u1ED1n v\xE0ng h\u01A1n so v\u1EDBi l\xF3t l\u01B0\u1EDBi.":"M\u1EB7t d\xE2y ch\u1EC9 c\xF3 m\u1ED9t m\u1EB7t trang tr\xED. Th\xE2n \u0111\u1EC3 r\u1ED7ng, m\u1EB7t sau l\xF3t l\u01B0\u1EDBi: nh\u1EB9, ti\u1EBFt ki\u1EC7m v\xE0ng \u2014 nh\u01B0 c\xE1ch x\u01B0\u1EDFng T Gold ho\xE0n thi\u1EC7n l\xF2ng nh\u1EABn nam."),ut("bail","Khoen lu\u1ED3n d\xE2y",Object.keys(af).map(i=>[i,af[i]])),ut("bailSize","C\u1EE1 khoen",[["std","V\u1EEBa"],["big","L\u1EDBn, cho d\xE2y b\u1EA3n to"]],()=>!0,()=>"Khoen t\u1EF1 c\xE2n theo c\u1EE1 m\u1EB7t d\xE2y: m\u1EB7t d\xE2y nh\u1ECF th\xEC khoen nh\u1ECF theo."),ut("metal","M\xE0u v\xE0ng",Object.keys($n).map(i=>[i,$n[i][0],$n[i][1]])),ut("twoTone","Hai m\xE0u v\xE0ng",i=>[["none","M\u1ED9t m\xE0u"],...pa(i)?[["motif",Jn(i)?"Ch\u1EEF m\xE0u th\u1EE9 hai":"Ho\u1EA1 ti\u1EBFt m\xE0u th\u1EE9 hai"]]:[],["settings","To\xE0n b\u1ED9 \u1ED5 \u0111\xE1 m\xE0u th\u1EE9 hai"]],()=>!0,i=>i.twoTone==="motif"?Jn(i)?"Ch\u1EEF kh\xE1c m\xE0u b\u1EA3ng n\xEAn n\u1ED5i r\xF5, nh\u01B0 ch\u1EEF v\xE0ng tr\xEAn b\u1EA3ng v\xE0ng tr\u1EAFng.":"Ho\u1EA1 ti\u1EBFt kh\xE1c m\xE0u th\xE2n n\xEAn n\u1ED5i r\xF5, nh\u01B0 ch\u1EEF v\xE0ng tr\xEAn th\u1EBB v\xE0ng tr\u1EAFng.":i.twoTone==="settings"?"\u1ED4 \u0111\xE1 m\xE0u v\xE0ng tr\u1EAFng tr\xEAn th\xE2n v\xE0ng gi\xFAp \u0111\xE1 qu\xFD tr\xF4ng tr\u1EAFng v\xE0 s\xE1ng h\u01A1n.":""),ut("metal2","M\xE0u v\xE0ng th\u1EE9 hai",i=>Object.keys($n).filter(e=>e!==i.metal).map(e=>[e,$n[e][0],$n[e][1]]),i=>i.twoTone!=="none"),ut("karat","Tu\u1ED5i v\xE0ng",[["10K","10K"],["14K","14K"],["18K","18K"]]),ut("finish","B\u1EC1 m\u1EB7t th\xE2n",[["bong","B\xF3ng g\u01B0\u01A1ng"],["nham","Nh\xE1m m\u1EDD"],["chai","V\xE2n ch\u1EA3i"]])]}],Lo=()=>cS.filter(i=>!i.show||i.show(Q)),dg=i=>typeof i.title=="function"?i.title(Q):i.title,_g=Object.keys(Yn),xg=["gem","accentGem","sideGem","motifGem"];function lS(){let i={...Yn},e=new URLSearchParams(location.hash.slice(1));for(let n of _g){if(!e.has(n))continue;let s=e.get(n),r=Yn[n];i[n]=typeof r=="number"?Number(s)||r:s.slice(0,40)}let t=ws(i);for(let n of xg)Ji[t[n]]||(t[n]=Yn[n]);for(let n of["metal","metal2"])$n[t[n]]||(t[n]=Yn[n]);return["10K","14K","18K"].includes(t.karat)||(t.karat=Yn.karat),t}function Io(i){let e=new URLSearchParams;for(let t of _g)i[t]!==Yn[t]&&e.set(t,i[t]);history.replaceState(null,"",`${location.pathname}${location.search}${e.toString()?`#${e}`:""}`)}var ga=(i,e=document)=>e.querySelector(i),Si=i=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),lh=typeof window<"u"&&window.TG3D_APP&&window.TG3D_APP.contact?window.TG3D_APP:null,hS=i=>lh?`<a class="btn-next send" href="${Si(`${lh.contact}${lh.contact.includes("?")?"&":"?"}piece=${encodeURIComponent(lh.piece||"T\u1EF1 thi\u1EBFt k\u1EBF m\u1EB7t d\xE2y chuy\u1EC1n (3D)")}&config=${encodeURIComponent(`${i.map(([e,t])=>`${e}: ${t}`).join(" \xB7 ")} \u2014 M\u1EDF l\u1EA1i thi\u1EBFt k\u1EBF: ${location.origin}${location.pathname}${location.hash}`.slice(0,900))}#dat-lich`)}">G\u1EEDi thi\u1EBFt k\u1EBF cho T Gold <span aria-hidden="true">\u2192</span></a>`:"",ba=i=>(i.metal2===i.metal&&(i.metal2=i.metal==="vang-trang"?"vang":"vang-trang"),i),Q=ba(lS()),zn=ga("#cfg"),li=ga("#steps"),Rn=0,uh=$d(Q),da=null,$i=null,uS=i=>{let e=typeof i.label=="function"?i.label(Q):i.label;if(i.text)return`<div class="grp"><label class="fld"><span>${e}</span><input data-k="${i.k}" maxlength="${rh}" autocomplete="off" autocapitalize="characters" spellcheck="false" placeholder="V\xED d\u1EE5: MINH" value="${Si($i??Q.name)}"></label><p class="hint">Ch\u1EEF in hoa kh\xF4ng d\u1EA5u (A\u2013Z, \u0110), s\u1ED1 v\xE0 k\xFD hi\u1EC7u $, t\u1ED1i \u0111a ${rh} k\xFD t\u1EF1. T\xEAn c\xF3 d\u1EA5u s\u1EBD \u0111\u01B0\u1EE3c b\u1ECF d\u1EA5u.</p></div>`;if(i.sel){let a=lf(i,Q),o=i.hint?i.hint(Q):"";return`<div class="grp"><label class="fld"><span>${e}</span><select data-k="${i.k}">${a.map(([c,l])=>`<option value="${Si(c)}"${c===Q[i.k]?" selected":""}>${Si(l)}</option>`).join("")}</select></label>${o?`<p class="hint">${Si(o)}</p>`:""}</div>`}let t=lf(i,Q),n=t.find(a=>a[0]===Q[i.k]),s=t.some(a=>String(a[2]||"").startsWith("<svg")),r=i.hint?i.hint(Q):"";return`<fieldset class="grp"><legend><span>${e}</span><b>${Si(n?n[1]:"")}</b></legend>
    <div class="${s?"cards":"chips"}" data-g="${i.k}" role="radiogroup" aria-label="${e}">${t.map(([a,o,c])=>`<button type="button" role="radio" aria-checked="${a===Q[i.k]}" data-k="${i.k}" data-v="${Si(JSON.stringify(a))}">${c?String(c).startsWith("<svg")?c:`<i style="background:${c}"></i>`:""}<span>${Si(o)}</span></button>`).join("")}</div>${r?`<p class="hint">${Si(r)}</p>`:""}</fieldset>`};function Qi(i=!1){let e=Lo(),t=e.length;Rn=Math.min(Rn,t);let n=[...e.map(a=>a.tab),"T\xF3m t\u1EAFt"],s={top:zn.scrollTop,strips:{}};zn.querySelectorAll(".cards[data-g]").forEach(a=>{s.strips[a.dataset.g]=a.scrollLeft}),li.innerHTML=n.map((a,o)=>`<button type="button" role="tab" id="tab-${o}" aria-selected="${o===Rn}" aria-controls="cfg" tabindex="${o===Rn?0:-1}" data-step="${o}">${o<t?`<span>${String(o+1).padStart(2,"0")}</span>`:""}${a}</button>`).join(""),zn.setAttribute("aria-labelledby",`tab-${Rn}`),ff();let r=i?" fade":"";if(Rn<t){let a=e[Rn];zn.innerHTML=`<section class="sec${r}"><h2 class="sec-h"><span>${String(Rn+1).padStart(2,"0")}</span>${dg(a)}</h2>
      ${a.groups.filter(o=>o.show(Q)).map(uS).join("")}
      ${a.id==="finish"?'<div class="see" style="margin-top:4px"><button type="button" class="btn-l" data-see="back">Xem m\u1EB7t sau</button><button type="button" class="btn-l" data-see="front">Xem m\u1EB7t tr\u01B0\u1EDBc</button></div>':""}
      <div class="next"><button type="button" class="btn-next" data-step="${Rn+1}">${Rn+1<t?`Ti\u1EBFp: ${dg(e[Rn+1])}`:"Xem thi\u1EBFt k\u1EBF c\u1EE7a b\u1EA1n"} <span aria-hidden="true">\u2192</span></button></div></section>`}else zn.innerHTML=`<section class="sec sum${r}" aria-live="polite"><h2 class="sec-h"><span>\u2726</span>Thi\u1EBFt k\u1EBF c\u1EE7a b\u1EA1n</h2><ul>${fg().map(([a,o])=>`<li><span>${a}</span><b>${Si(o)}</b></li>`).join("")}</ul>
      <p class="note"><b>H\xECnh 3D m\xF4 ph\u1ECFng.</b> K\xEDch th\u01B0\u1EDBc, s\u1ED1 vi\xEAn v\xE0 c\u1EE1 \u0111\xE1 qu\xFD l\xE0 theo h\xECnh 3D; khi ch\u1EBF t\xE1c, x\u01B0\u1EDFng T Gold c\xE2n ch\u1EC9nh l\u1EA1i cho b\u1EA1n. M\xE0u v\xE0ng v\xE0 \u0111\u1ED9 l\u1EA5p l\xE1nh c\u1EE7a \u0111\xE1 qu\xFD c\xF3 th\u1EC3 kh\xE1c ch\xFAt \xEDt so v\u1EDBi s\u1EA3n ph\u1EA9m th\u1EADt. Tu\u1ED5i v\xE0ng \u0111\u01B0\u1EE3c ghi nh\u1EADn \u0111\u1EC3 T Gold t\u01B0 v\u1EA5n, kh\xF4ng l\xE0m thay \u0111\u1ED5i h\xECnh 3D. H\xECnh 3D ch\u01B0a g\u1ED3m d\xE2y chuy\u1EC1n.</p>
      ${hS(fg())}
      <button type="button" class="btn-l" data-reset>V\u1EC1 thi\u1EBFt k\u1EBF m\u1EB7c \u0111\u1ECBnh</button></section>`;i?zn.scrollTop=0:(zn.scrollTop=s.top,zn.querySelectorAll(".cards[data-g]").forEach(a=>{s.strips[a.dataset.g]!=null&&(a.scrollLeft=s.strips[a.dataset.g])})),dS()}function ff(){li.classList.toggle("end",li.scrollLeft+li.clientWidth>=li.scrollWidth-4)}li.addEventListener("scroll",ff,{passive:!0});addEventListener("resize",ff);function dh(i,e=!1){Rn=Math.max(0,Math.min(Lo().length,i)),Qi(!0);let t=li.querySelector('[aria-selected="true"]');li.scrollTo({left:t.offsetLeft-(li.clientWidth-t.offsetWidth)/2,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"}),e&&t.focus({preventScroll:!0})}var tf="";function dS(){let i=ga("#stamp");i.textContent=Q.karat,ga("#spec-metal").textContent=Q.twoTone!=="none"?`${$n[Q.metal][0]} + ${$n[Q.metal2][0]}`:$n[Q.metal][0],ga("#spec-stone").textContent=`${Es(Q)?df[Q.figure]:ma(Q)?`Ch\u1EEF ${Co(Q.ch1)}`:or(Q)?`B\u1EA3ng t\xEAn \u201C${Q.name}\u201D`:sS[Q.type]} ${Ti(Q)}`;let e=`${Q.karat}|${Q.metal}|${Q.twoTone}|${Q.metal2}`;tf&&e!==tf&&(i.classList.remove("press"),i.offsetWidth,i.classList.add("press")),tf=e}function sr(i){for(let e of Lo())for(let t of e.groups)if(t.k===i&&t.show(Q)){let n=lf(t,Q).find(s=>s[0]===Q[i]);return n?n[1]:""}return""}var En=i=>i&&i.charAt(0).toLowerCase()+i.slice(1);function fa(i){var s;let e=uh.userData.stats,t=Object.entries(e.sizes).filter(([r])=>r.startsWith(`${i}|`)).map(([r,a])=>{let[,o,c]=r.split("|");return{shape:o,d:Number(c),n:a}});if(!t.length)return"";let n={};for(let r of t)(n[s=r.shape]||(n[s]=[])).push(r);return Object.entries(n).map(([r,a])=>{let o=a.reduce((d,u)=>d+u.n,0),c=a.map(d=>d.d),l=Math.min(...c),h=Math.max(...c);return`${o} vi\xEAn ${{bag2:"baguette, d\xE0i"}[r]||"tr\xF2n"} ${l===h?As(l):`${As(l)}\u2013${As(h)}`} mm`}).join(" + ")}function fg(){let i=Q.twoTone!=="none",e=Jn(Q)?[["Ki\u1EC3u m\u1EB7t d\xE2y",`B\u1EA3ng t\xEAn \u201C${Q.name}\u201D \xB7 b\u1EA3ng n\u1EC1n li\u1EC1n, ${En(sr("outline"))} \xB7 ${Ti(Q)}`],["M\u1EB7t tr\u01B0\u1EDBc",[`v\xE0nh ${En(sf[Q.border])}`,Q.frame2!=="none"&&`khung trong ${En(rf[Q.frame2])}`,`n\u1EC1n ${En(hh[Q.field])}`,`ch\u1EEF cao ${As(Q.nameSize)} mm, ${Q.motifStone==="on"?"\u0111\xEDnh \u0111\xE1 tr\xEAn n\xE9t":"v\xE0ng tr\u01A1n, bo v\u1ED3ng"}`].filter(Boolean).join(" \xB7 ")]]:rr(Q)?[["Ki\u1EC3u m\u1EB7t d\xE2y",`B\u1EA3ng t\xEAn \u201C${Q.name}\u201D \xB7 ch\u1EEF r\u1EDDi tr\xEAn thanh \u0111\u1EBF \xB7 ${Ti(Q)}`],["M\u1EB7t tr\u01B0\u1EDBc",`Ch\u1EEF cao ${As(Q.nameSize*1.5)} mm \xB7 ${En(sr("figFill"))}`]]:oi(Q)?[["Ki\u1EC3u m\u1EB7t d\xE2y",`M\u1EB7t th\u1EBB \xB7 ${En(mg[Q.outline])} \xB7 ${Ti(Q)}`],["M\u1EB7t tr\u01B0\u1EDBc",[`v\xE0nh ${En(sf[Q.border])}`,Q.frame2!=="none"&&`khung trong ${En(rf[Q.frame2])}`,`n\u1EC1n ${En(hh[Q.field])}`].filter(Boolean).join(" \xB7 ")],["Ho\u1EA1 ti\u1EBFt",Q.motif==="none"?"Kh\xF4ng":`${Q.ch2?`${Co(Q.ch1)} v\xE0 ${Co(Q.ch2)}`:Co(Q.ch1)} \xB7 ${Q.motifStone==="on"?"\u0111\xEDnh \u0111\xE1 tr\xEAn n\xE9t":"v\xE0ng tr\u01A1n, bo v\u1ED3ng"}`.replace(/^./,t=>t.toUpperCase())]]:Zi(Q)?[["Ki\u1EC3u m\u1EB7t d\xE2y",`Th\xE1nh gi\xE1 \xB7 ${En(sr("crossStyle"))} \xB7 ${Ti(Q)}`],["M\u1EB7t tr\u01B0\u1EDBc",[of[Q.crossFill],Q.crossCenter==="stone"&&`vi\xEAn ch\u1EE7 ${Ji[Q.gem][0]} b\u1ECDc vi\u1EC1n + v\xF2ng \u0111\xE1 nh\u1ECF`].filter(Boolean).join(" \xB7 ")]]:[["Ki\u1EC3u m\u1EB7t d\xE2y",`${Es(Q)?`H\xECnh kh\u1ED1i \xB7 ${En(df[Q.figure])}`:ci(Q)?`Hoa c\xFAc \xB7 ${Q.petals} c\xE1nh`:wi(Q)?"Con ong":`Ch\u1EEF \u0111\u1EE9ng ri\xEAng \xB7 ${Co(Q.ch1)}`} \xB7 ${Ti(Q)}`],["M\u1EB7t tr\u01B0\u1EDBc",[sr("figFill"),Q.figCenter==="stone"&&sh(Q)&&`vi\xEAn ch\u1EE7 ${Ji[Q.gem][0]} b\u1ECDc vi\u1EC1n`].filter(Boolean).join(" \xB7 ")]];return e.push(["M\u1EB7t sau",sr("back")],["Khoen",`${af[Q.bail]} \xB7 ${En(sr("bailSize"))}`],["\u0110\xE1 t\u1EA5m",gg(Q)&&fa("accent")&&`${Ji[Q.accentGem][0]} \xB7 ${fa("accent")}`],["\u0110\xE1 baguette",bg(Q)&&fa("side")&&`${Ji[Q.sideGem][0]} \xB7 ${fa("side")}`],[ci(Q)?"\u0110\xE1 nhu\u1EF5 hoa":wi(Q)?"\u0110\xE1 s\u1ECDc th\xE2n & m\u1EAFt":Jn(Q)?"\u0110\xE1 tr\xEAn ch\u1EEF":"\u0110\xE1 ho\u1EA1 ti\u1EBFt",rS(Q)&&fa("inner")&&`${Ji[Q.motifGem][0]} \xB7 ${fa("inner")}`],["V\xE0ng",`${$n[Q.metal][0]} ${Q.karat}${i?` \xB7 ${{motif:"ho\u1EA1 ti\u1EBFt",settings:"to\xE0n b\u1ED9 \u1ED5 \u0111\xE1"}[Q.twoTone]} ${En($n[Q.metal2][0])}`:""} \xB7 ${En(sr("finish"))}`]),e.filter(([,t])=>t)}var vg=ga("#viewer"),pg=matchMedia("(pointer: coarse)").matches,yg=[.42,.16,1],an=Um(vg,{look:{envSoft:.004},object:uh,metal:Q.metal,metal2:Q.metal2,gem:Q.gem,accentGem:Q.accentGem,sideGem:Q.sideGem,innerGem:Q.motifGem,view:yg,start:pg?1.42:1.3,fitWidth:!0,rescale:!0,touchAll:!0,holdPan:!0,labels:{hint:pg?"Vu\u1ED1t \u0111\u1EC3 xoay \xB7 ch\u1EE5m \u0111\u1EC3 ph\xF3ng to \xB7 gi\u1EEF y\xEAn 3 gi\xE2y \u0111\u1EC3 d\u1ECBch khung":"K\xE9o \u0111\u1EC3 xoay \xB7 cu\u1ED9n \u0111\u1EC3 ph\xF3ng to \xB7 gi\u1EEF y\xEAn 3 gi\xE2y \u0111\u1EC3 d\u1ECBch khung",pan:"K\xE9o \u0111\u1EC3 d\u1ECBch khung"}});window.tg3d=an;var fS=["metal","metal2",...xg,"karat"],nf=!1,fh=()=>{uh=$d(Q),an.setObject(uh)};function Po(i){fS.includes(i)||nf||(nf=!0,requestAnimationFrame(()=>{nf=!1,fh(),Rn>=Lo().length&&Qi()})),i==="metal"&&an.setMetal(Q.metal),i==="metal2"&&an.setMetal2(Q.metal2),i==="gem"&&an.setGem(Q.gem,"center"),i==="accentGem"&&an.setGem(Q.accentGem,"accent"),i==="sideGem"&&an.setGem(Q.sideGem,"side"),i==="motifGem"&&an.setGem(Q.motifGem,"inner")}var pS=()=>{an.setMetal(Q.metal),an.setMetal2(Q.metal2),an.setGem(Q.gem,"center"),an.setGem(Q.accentGem,"accent"),an.setGem(Q.sideGem,"side"),an.setGem(Q.motifGem,"inner")};zn.addEventListener("click",i=>{let e=i.target.closest("button[data-k]");if(e){let s=e.dataset.k;Q[s]=JSON.parse(e.dataset.v);let r=Q.metal2;if(Q=ba(ws(Q)),s==="motifGem"&&(da=null),s==="type"&&or(Q)&&Q.border==="pave2"&&(Q.border="pave1",Q=ba(ws(Q))),s==="type"&&($i=null),s==="type"&&!(ci(Q)||wi(Q))&&da&&Q.motifGem===da.to&&(Q.motifGem=da.from,da=null,Po("motifGem")),s==="type"&&(ci(Q)||wi(Q))&&Q.motifGem===Q.accentGem){let a=Q.accentGem==="yellow-sapphire"?"lab-diamond":"yellow-sapphire";da={from:Q.motifGem,to:a},Q.motifGem=a,Po("motifGem")}Io(Q),Po(s),Q.metal2!==r&&Po("metal2"),Qi();return}let t=i.target.closest("[data-see]");if(t){an.setPlay(!1),an.setView(t.dataset.see==="back"?[-.42,.16,-1]:yg,1);return}let n=i.target.closest("[data-step]");if(n){dh(Number(n.dataset.step));return}i.target.closest("[data-reset]")&&($i=null,Q={...Yn},Io(Q),fh(),pS(),Qi())});li.addEventListener("click",i=>{let e=i.target.closest("[data-step]");e&&dh(Number(e.dataset.step))});li.addEventListener("keydown",i=>{let e=Lo().length+1,t={ArrowRight:1,ArrowLeft:-1}[i.key];t&&(i.preventDefault(),dh((Rn+t+e)%e,!0)),(i.key==="Home"||i.key==="End")&&(i.preventDefault(),dh(i.key==="Home"?0:e-1,!0))});zn.addEventListener("change",i=>{let e=i.target,t=e.dataset.k;e.tagName==="SELECT"&&t in Q&&(Q[t]=e.value,Q=ba(ws(Q)),Io(Q),Po(t),Qi())});var hf=0,uf=!1;zn.addEventListener("input",i=>{let e=i.target;e.dataset.k==="name"&&($i=e.value,Q.name=ah(e.value)||Yn.name,Q=ba(ws(Q)),Io(Q),clearTimeout(hf),hf=setTimeout(()=>{fh();let t=e.selectionStart,n=document.activeElement===e;uf=!0,Qi(),uf=!1;let s=zn.querySelector('input[data-k="name"]');if(s&&n){s.focus({preventScroll:!0});try{s.setSelectionRange(t,t)}catch{}}},320))});zn.addEventListener("focusout",i=>{!uf&&i.target.dataset?.k==="name"&&$i!=null&&(!$i||ah($i)!==$i)&&($i=null,clearTimeout(hf),fh(),Qi())});vg.addEventListener("tg3d:metal",i=>{Q.metal=i.detail;let e=Q.metal2;ba(Q),Q.metal2!==e&&an.setMetal2(Q.metal2),Io(Q),Qi()});Qi();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
