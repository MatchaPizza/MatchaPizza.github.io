/*! For license information please see 868.6f6a4f60.chunk.js.LICENSE.txt */
(self.webpackChunkmatchapizza=self.webpackChunkmatchapizza||[]).push([[868],{6528:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var r=n(184),o=function(t){var e=t.children,n=t.styles;return(0,r.jsx)("div",{className:"card",style:n,children:e})}},8892:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var r=n(184),o=function(t){var e=t.icon,n=t.onClick,o=t.styles;return(0,r.jsx)("div",{className:"icon-button",onClick:n,style:o,children:(0,r.jsx)("img",{className:"icon-button-icon",src:e,alt:"icon-button-icon"})})}},8929:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var r=n(8683),o=n(184),i=function(t){var e=t.height,n=t.width,i=t.styles;return(0,o.jsx)("div",{className:"skeleton",style:(0,r.Z)((0,r.Z)({},i),{},{height:e,width:n})})}},8565:function(t,e,n){"use strict";var r=n(9439),o=n(2791);function i(){return window.innerWidth}e.Z=function(){var t=(0,o.useState)(i()),e=(0,r.Z)(t,2),n=e[0],a=e[1];return(0,o.useEffect)((function(){function t(){a(i())}return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),n<=768}},1419:function(t,e,n){"use strict";var r=n(9439),o=n(2791);function i(){return window.innerWidth}e.Z=function(){var t=(0,o.useState)(i()),e=(0,r.Z)(t,2),n=e[0],a=e[1];return(0,o.useEffect)((function(){function t(){a(i())}return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),n}},1868:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return m}});var r=n(4165),o=n(5861),i=n(8683),a=n(9439),c=n(6528),u=n(8565),s=n(1419),l=n(2791),f=n(9284),h={id:0,loaded:!1},d=n(1618),p=n(8892),v=n(8929),y=n(184),m=function(){var t=(0,u.Z)(),e=(0,s.Z)(),m=(0,l.useState)(f.map((function(t){return(0,i.Z)((0,i.Z)({},h),{},{id:t.id})}))),g=(0,a.Z)(m,2),w=g[0],x=g[1];(0,l.useEffect)((function(){f.forEach(function(){var t=(0,o.Z)((0,r.Z)().mark((function t(e){var o;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n(8040)("./".concat(e.path));case 2:o=t.sent,x((function(t){return t.map((function(t){return t.id!==o.id||t.loaded?t:(0,i.Z)((0,i.Z)({},o),{},{loaded:!0})}))}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[]);var b={main:{container:{flex:1,margin:"".concat(t?16:64,"px ").concat(t?16:128,"px")},titleText:{fontSize:t?32:48}},content:{card:{padding:16,marginTop:8,marginBottom:8},text:{textAlign:"center"}},game:{container:{margin:8,display:"grid",gridTemplateColumns:e<=1400?"100%":"50% 50%"},card:{margin:8,padding:16},cardTitle:{fontSize:24,fontWeight:"bold",marginBottom:8},buttonContainer:{marginTop:8,display:"flex",justifyContent:"flex-end",gap:8},iconButton:{height:32,width:32}}};return(0,y.jsxs)("div",{style:b.main.container,children:[(0,y.jsx)("h1",{style:b.main.titleText,children:"Games"}),(0,y.jsx)(c.Z,{styles:b.content.card,children:(0,y.jsx)("p",{style:b.content.text,children:"I game even I don't play a lot of titles. Here are the games I mostly play"})}),(0,y.jsx)("div",{style:b.game.container,children:w.map((function(t,e){return(0,y.jsx)(c.Z,{styles:b.game.card,children:t.loaded?(0,y.jsxs)(l.Fragment,{children:[(0,y.jsx)("h2",{style:b.game.cardTitle,children:t.title}),(0,y.jsx)("p",{children:t.description}),(0,y.jsxs)("div",{style:b.game.buttonContainer,children:[t.personalSite&&(0,y.jsx)(d.Z,{message:"Personal Game Page",children:(0,y.jsx)(p.Z,{styles:b.game.iconButton,icon:"/images/icons/game.png",onClick:function(){return window.open(t.personalSite)}})}),t.website&&(0,y.jsx)(d.Z,{message:"Game Site",children:(0,y.jsx)(p.Z,{styles:b.game.iconButton,icon:"/images/icons/link.png",onClick:function(){return window.open(t.website)}})})]})]}):(0,y.jsxs)(l.Fragment,{children:[(0,y.jsx)(v.Z,{width:"100%",height:28}),(0,y.jsx)(v.Z,{width:"100%",height:19,styles:{margin:"8px 0px"}}),(0,y.jsxs)("div",{style:b.game.buttonContainer,children:[(0,y.jsx)(v.Z,{width:32,height:32,styles:{borderRadius:"100%"}}),(0,y.jsx)(v.Z,{width:32,height:32,styles:{borderRadius:"100%"}})]})]})},"game-card-".concat(e))}))}),(0,y.jsx)(c.Z,{styles:b.content.card,children:(0,y.jsx)("p",{style:b.content.text,children:"I downloaded many games on steam or other platforms, but never have the mood to start or finish them. However, I do watch people streaming games on Twitch so I guess that counts"})})]})}},8040:function(t,e,n){var r={"./":[9284],"./index":[9284],"./index.json":[9284],"./modded_minecraft":[9027,27],"./modded_minecraft.json":[9027,27],"./osu":[6500,500],"./osu.json":[6500,500]};function o(t){if(!n.o(r,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=r[t],o=e[0];return Promise.all(e.slice(1).map(n.e)).then((function(){return n.t(o,19)}))}o.keys=function(){return Object.keys(r)},o.id=8040,t.exports=o},5861:function(t,e,n){"use strict";function r(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)}))}}n.d(e,{Z:function(){return o}})},8683:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var r=n(9142);function o(t,e,n){return(e=(0,r.Z)(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},4165:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var r=n(1002);function o(){o=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(S){l=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof p?e:p,a=Object.create(o.prototype),c=new k(r||[]);return i(a,"_invoke",{value:O(t,n,c)}),a}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(S){return{type:"throw",arg:S}}}t.wrap=f;var d={};function p(){}function v(){}function y(){}var m={};l(m,c,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(P([])));w&&w!==e&&n.call(w,c)&&(m=w);var x=y.prototype=p.prototype=Object.create(m);function b(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function o(i,a,c,u){var s=h(t[i],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==(0,r.Z)(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return o("throw",t,c,u)}))}u(s.arg)}var a;i(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){o(t,n,e,r)}))}return a=a?a.then(r,r):r()}})}function O(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return _()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=Z(a,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=h(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function Z(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,Z(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var o=h(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function P(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return v.prototype=y,i(x,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:v,configurable:!0}),v.displayName=l(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},b(j.prototype),l(j.prototype,u,(function(){return this})),t.AsyncIterator=j,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new j(f(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(x),l(x,s,"Generator"),l(x,c,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=P,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;L(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},t}},9284:function(t){"use strict";t.exports=JSON.parse('[{"id":1,"path":"osu.json"},{"id":2,"path":"modded_minecraft.json"}]')}}]);
//# sourceMappingURL=868.6f6a4f60.chunk.js.map