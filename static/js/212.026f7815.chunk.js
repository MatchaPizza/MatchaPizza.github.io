/*! For license information please see 212.026f7815.chunk.js.LICENSE.txt */
(self.webpackChunkmatchapizza=self.webpackChunkmatchapizza||[]).push([[212],{6528:function(t,e,r){"use strict";r.d(e,{Z:function(){return o}});var n=r(184),o=function(t){var e=t.className,r=t.children;return(0,n.jsx)("div",{className:"card".concat(e?" "+e:""),children:r})}},8892:function(t,e,r){"use strict";r.d(e,{Z:function(){return i}});var n=r(8683),o=r(184),i=function(t){var e=t.icon,r=t.onClick,i=t.title,a=t.styles,c=t.disabled;return(0,o.jsx)("div",(0,n.Z)((0,n.Z)({className:"icon-button".concat(c?" disabled":""),style:a,title:i},!c&&{onClick:r}),{},{children:e&&(0,o.jsx)("img",{className:"icon-button-icon",src:e,alt:"icon-button-icon"})}))}},3661:function(t,e,r){"use strict";r.d(e,{Z:function(){return u}});var n=r(2791),o=r(3433),i=r(3144),a=r(5671),c=(0,i.Z)((function t(){(0,a.Z)(this,t)}));c.digitCharacters=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","#","$","%","*","+",",","-",".",":",";","=","?","@","[","]","^","_","{","|","}","~"],c.bytesPerPixel=4,c._decode83=function(t){for(var e=0,r=0;r<t.length;r++){var n=t[r];e=83*e+c.digitCharacters.indexOf(n)}return e},c._encode83=function(t,e){for(var r="",n=1;n<=e;n++){var o=Math.floor(t)/Math.pow(83,e-n)%83;r+=c.digitCharacters[Math.floor(o)]}return r},c._encodeDC=function(t){return(c._linearTosRGB(t[0])<<16)+(c._linearTosRGB(t[1])<<8)+c._linearTosRGB(t[2])},c._encodeAC=function(t,e){return 19*Math.floor(Math.max(0,Math.min(18,Math.floor(9*c._signPow(t[0]/e,.5)+9.5))))*19+19*Math.floor(Math.max(0,Math.min(18,Math.floor(9*c._signPow(t[1]/e,.5)+9.5))))+Math.floor(Math.max(0,Math.min(18,Math.floor(9*c._signPow(t[2]/e,.5)+9.5))))},c._decodeDC=function(t){var e=t>>16,r=t>>8&255,n=255&t;return[c._sRGBToLinear(e),c._sRGBToLinear(r),c._sRGBToLinear(n)]},c._decodeAC=function(t,e){var r=Math.floor(t/361),n=Math.floor(t/19)%19,o=t%19;return[c._signPow((r-9)/9,2)*e,c._signPow((n-9)/9,2)*e,c._signPow((o-9)/9,2)*e]},c._sRGBToLinear=function(t){var e=t/255;return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)},c._linearTosRGB=function(t){var e=Math.max(0,Math.min(1,t));return e<=.0031308?Math.round(12.92*e*255+.5):Math.round(255*(1.055*Math.pow(e,1/2.4)-.055)+.5)},c._sign=function(t){return t<0?-1:1},c._signPow=function(t,e){return c._sign(t)*Math.pow(Math.abs(t),e)},c._multiplyBasisFunction=function(t,e,r,n){for(var o=0,i=0,a=0,s=e*c.bytesPerPixel,u=0;u<e;u++)for(var h=0;h<r;h++){var l=n(u,h);o+=l*c._sRGBToLinear(t[c.bytesPerPixel*u+0+h*s]),i+=l*c._sRGBToLinear(t[c.bytesPerPixel*u+1+h*s]),a+=l*c._sRGBToLinear(t[c.bytesPerPixel*u+2+h*s])}var f=1/(e*r);return[o*f,i*f,a*f]},c._validateBlurhash=function(t){if(!t||t.length<6)throw new Error("The blurhash string must be at least 6 characters");var e=c._decode83(t[0]),r=Math.floor(e/9)+1,n=e%9+1;if(t.length!==4+2*n*r)throw new Error("blurhash length mismatch: length is ".concat(t.length," but it should be ").concat(4+2*n*r))},c.encode=function(t,e,r,n,i){return new Promise((function(a,s){(n<1||n>9||i<1||i>9)&&s(new Error("BlurHash must have between 1 and 9 components")),e*r*4!==t.length&&s(new Error("Width and height must match the pixels array"));for(var u=[],h=function(o){for(var i=function(n){var i=0===n&&0===o?1:2,a=c._multiplyBasisFunction(t,e,r,(function(t,a){return i*Math.cos(Math.PI*n*t/e)*Math.cos(Math.PI*o*a/r)}));u.push(a)},a=0;a<n;a++)i(a)},l=0;l<i;l++)h(l);var f,d=u[0],v=u.slice(1),p="",g=n-1+9*(i-1);if(p+=c._encode83(g,1),v.length>0){var m=Math.max.apply(Math,(0,o.Z)(v.map((function(t){return Math.max.apply(Math,(0,o.Z)(t))})))),y=Math.floor(Math.max(0,Math.min(82,Math.floor(166*m-.5))));f=(y+1)/166,p+=c._encode83(y,1)}else f=1,p+=c._encode83(0,1);p+=c._encode83(c._encodeDC(d),4),v.forEach((function(t){p+=c._encode83(c._encodeAC(t,f),2)})),a(p)}))},c.decode=function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;return new Promise((function(o,i){c._validateBlurhash(t),n|=1;for(var a=c._decode83(t[0]),s=Math.floor(a/9)+1,u=a%9+1,h=(c._decode83(t[1])+1)/166,l=new Array(u*s),f=0;f<l.length;f++)if(0===f){var d=c._decode83(t.substring(2,6));l[f]=c._decodeDC(d)}else{var v=c._decode83(t.substring(4+2*f,6+2*f));l[f]=c._decodeAC(v,h*n)}for(var p=4*e,g=new Uint8ClampedArray(p*r),m=0;m<r;m++)for(var y=0;y<e;y++){for(var w=0,x=0,b=0,_=0;_<s;_++)for(var j=0;j<u;j++){var P=Math.cos(Math.PI*y*j/e)*Math.cos(Math.PI*m*_/r),M=l[j+_*u];w+=M[0]*P,x+=M[1]*P,b+=M[2]*P}var A=c._linearTosRGB(w),L=c._linearTosRGB(x),E=c._linearTosRGB(b);g[4*y+0+m*p]=A,g[4*y+1+m*p]=L,g[4*y+2+m*p]=E,g[4*y+3+m*p]=255}o(g)}))};var s=r(184),u=function(t){var e,r,o=t.src,i=t.hash,a=t.originalWidth,u=t.originalHeight,h=t.alt,l=t.width,f=t.height,d=(0,n.useRef)(null);return a=null!==(e=a)&&void 0!==e?e:400,u=null!==(r=u)&&void 0!==r?r:300,(0,n.useEffect)((function(){if(d.current){var t=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&!d.current.dataset.lazyLoaded&&(c.decode(d.current.dataset.hash,a,u).then((function(t){var e=document.createElement("canvas"),r=e.getContext("2d"),n=r.createImageData(a,u);n.data.set(t),r.putImageData(n,0,0);var o=e.toDataURL();d.current.dataset.lazyLoaded||(d.current.src=o)})).catch((function(t){console.error("fail to load blurhash:",t)})),t.unobserve(e.target))}))}));t.observe(d.current)}}),[a,u]),(0,n.useEffect)((function(){if(d.current){var t=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&(d.current.src=d.current.dataset.image,d.current.dataset.lazyLoaded="true",t.unobserve(e.target))}))}));t.observe(d.current)}}),[]),(0,s.jsx)("img",{className:"lazy-image","data-image":o,"data-hash":i,"data-original-width":a,"data-original-height":u,ref:d,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdjOHPmzH8ACDADZKt3GNsAAAAASUVORK5CYII=",alt:h,style:{width:l,height:f}})}},4649:function(t,e,r){"use strict";r.d(e,{Z:function(){return o}});var n=r(184),o=function(t){var e=t.children,r=t.href,o=t.title;return(0,n.jsxs)("div",{className:"link-card",children:[(0,n.jsx)("a",{className:"overlay",href:r,title:o,children:r}),e]})}},8929:function(t,e,r){"use strict";r.d(e,{Z:function(){return i}});var n=r(8683),o=r(184),i=function(t){var e=t.height,r=t.width,i=t.styles;return(0,o.jsx)("div",{className:"skeleton",style:(0,n.Z)((0,n.Z)({},i),{},{height:e,width:r})})}},212:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return m}});var n=r(4165),o=r(5861),i=r(8683),a=r(9439),c=r(6528),s=r(4649),u=r(2791),h={id:0,loaded:!1},l=r(8532),f=r(8892),d=r(8929),v=r(3661),p=r(5354),g=r(184),m=function(){var t=(0,u.useState)(l.map((function(t){return(0,i.Z)((0,i.Z)({},h),{},{id:t.id})}))),e=(0,a.Z)(t,2),m=e[0],y=e[1];return(0,u.useEffect)((function(){l.forEach(function(){var t=(0,o.Z)((0,n.Z)().mark((function t(e){var o;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r(2202)("./".concat(e.path));case 3:o=t.sent,y((function(t){return t.map((function(t){return t.id!==o.id||t.loaded?t:(0,i.Z)((0,i.Z)({},o),{},{loaded:!0})}))})),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("failed to load from ".concat(e.path));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}())}),[]),(0,g.jsxs)("div",{className:"coding-container",children:[(0,g.jsx)("h1",{className:"title",children:"Coding"}),(0,g.jsx)(c.Z,{className:"text-card",children:(0,g.jsx)("p",{children:"I love coding. Since this is my hobby account, I have project related to games as well."})}),(0,g.jsx)("div",{className:"project-container",children:m.map((function(t,e){return(0,g.jsx)(c.Z,{children:t.loaded?(0,g.jsxs)(u.Fragment,{children:[(0,g.jsx)("h2",{children:t.title}),t.image&&(0,g.jsx)(v.Z,{src:"/projects/images/".concat(t.image.path),hash:t.image.hash,originalWidth:t.image.originalWidth,originalHeight:t.image.originalHeight,alt:"".concat(t.title),width:"100%",height:300}),(0,g.jsx)("p",{children:t.description}),(0,g.jsxs)("div",{className:"button-container",children:[t.website&&(0,g.jsx)(f.Z,{icon:"/images/icons/link.png",title:"Link",onClick:function(){return window.open(t.website)}}),t.github&&(0,g.jsx)(f.Z,{icon:"/images/icons/github-mark.png",title:"Github Repository",onClick:function(){return window.open(t.github)}})]})]}):(0,g.jsxs)(u.Fragment,{children:[(0,g.jsx)(d.Z,{width:"100%",height:28}),(0,g.jsx)(d.Z,{width:"100%",height:300,styles:{margin:"8px 0px"}}),(0,g.jsx)(d.Z,{width:"100%",height:19}),(0,g.jsxs)("div",{className:"button-container",children:[(0,g.jsx)(d.Z,{width:32,height:32,styles:{borderRadius:"100%"}}),(0,g.jsx)(d.Z,{width:32,height:32,styles:{borderRadius:"100%"}})]})]})},"project-card-".concat(e))}))}),(0,g.jsx)(c.Z,{className:"text-card",children:(0,g.jsx)("p",{children:"I also love AI and NLP. you can check out my git repositories to learn more!"})}),(0,g.jsxs)("div",{className:"avatar-container",children:[(0,g.jsxs)(s.Z,{href:p.H9,title:"Joak",children:[(0,g.jsx)(v.Z,{height:200,width:200,src:p.Ll,hash:"UDC72MgN00IC0cbb}hxGEGoL,xR%}8RP5uoz",originalWidth:460,originalHeight:460,alt:"joak-icon"}),(0,g.jsx)("p",{children:"Joak"})]}),(0,g.jsxs)(s.Z,{href:p.XH,title:"MatchaPizza",children:[(0,g.jsx)(v.Z,{height:200,width:200,src:p.kQ,hash:"UCAU%CuS8xEm7Bv;h~eb4TN4-rt0{Nk8C6o?",originalWidth:460,originalHeight:460,alt:"matchapizza-icon"}),(0,g.jsx)("p",{children:"MatchaPizza"})]})]})]})}},2202:function(t,e,r){var n={"./":[8532,3],"./images/osu.png":[6899,1,899],"./index":[8532,3],"./index.json":[8532,3],"./osu_mirror_download_extension":[2886,3,886],"./osu_mirror_download_extension.json":[2886,3,886]};function o(t){if(!r.o(n,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=n[t],o=e[0];return Promise.all(e.slice(2).map(r.e)).then((function(){return r.t(o,16|e[1])}))}o.keys=function(){return Object.keys(n)},o.id=2202,t.exports=o},5861:function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,s,"next",t)}function s(t){n(a,o,i,c,s,"throw",t)}c(void 0)}))}}r.d(e,{Z:function(){return o}})},8683:function(t,e,r){"use strict";r.d(e,{Z:function(){return a}});var n=r(9142);function o(t,e,r){return(e=(0,n.Z)(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},4165:function(t,e,r){"use strict";r.d(e,{Z:function(){return o}});var n=r(1002);function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function h(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(Z){h=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),c=new L(n||[]);return i(a,"_invoke",{value:j(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(Z){return{type:"throw",arg:Z}}}t.wrap=l;var d={};function v(){}function p(){}function g(){}var m={};h(m,c,(function(){return this}));var y=Object.getPrototypeOf,w=y&&y(y(E([])));w&&w!==e&&r.call(w,c)&&(m=w);var x=g.prototype=v.prototype=Object.create(m);function b(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function o(i,a,c,s){var u=f(t[i],t,a);if("throw"!==u.type){var h=u.arg,l=h.value;return l&&"object"==(0,n.Z)(l)&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){o("next",t,c,s)}),(function(t){o("throw",t,c,s)})):e.resolve(l).then((function(t){h.value=t,c(h)}),(function(t){return o("throw",t,c,s)}))}s(u.arg)}var a;i(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function j(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return O()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=P(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=f(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function P(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,P(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function M(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(M,this),this.reset(!0)}function E(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return p.prototype=g,i(x,"constructor",{value:g,configurable:!0}),i(g,"constructor",{value:p,configurable:!0}),p.displayName=h(g,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,h(t,u,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},b(_.prototype),h(_.prototype,s,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new _(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(x),h(x,u,"Generator"),h(x,c,(function(){return this})),h(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=E,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(A),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),A(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;A(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:E(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}},8532:function(t){"use strict";t.exports=JSON.parse('[{"id":1,"path":"osu_mirror_download_extension.json"}]')}}]);
//# sourceMappingURL=212.026f7815.chunk.js.map