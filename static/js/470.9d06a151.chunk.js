/*! For license information please see 470.9d06a151.chunk.js.LICENSE.txt */
(self.webpackChunkmatchapizza=self.webpackChunkmatchapizza||[]).push([[470],{882:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var r=n(184),o=function(t){var e=t.children,n=t.styles,o=t.onClick;return(0,r.jsx)("div",{className:"clickable-card",style:n,onClick:o,children:e})}},892:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var r=n(184),o=function(t){var e=t.icon,n=t.onClick,o=t.styles;return(0,r.jsx)("div",{className:"icon-button",onClick:n,style:o,children:(0,r.jsx)("img",{className:"icon-button-icon",src:e,alt:"icon-button-icon"})})}},565:function(t,e,n){"use strict";var r=n(439),o=n(791);function i(){return window.innerWidth}e.Z=function(){var t=(0,o.useState)(i()),e=(0,r.Z)(t,2),n=e[0],a=e[1];return(0,o.useEffect)((function(){function t(){a(i())}return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),n<=768}},419:function(t,e,n){"use strict";var r=n(439),o=n(791);function i(){return window.innerWidth}e.Z=function(){var t=(0,o.useState)(i()),e=(0,r.Z)(t,2),n=e[0],a=e[1];return(0,o.useEffect)((function(){function t(){a(i())}return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),n}},470:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return g}});var r=n(2);function o(){o=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(Z){l=function(t,e,n){return t[e]=n}}function h(t,e,n,r){var o=e&&e.prototype instanceof p?e:p,a=Object.create(o.prototype),c=new z(r||[]);return i(a,"_invoke",{value:L(t,n,c)}),a}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(Z){return{type:"throw",arg:Z}}}t.wrap=h;var d={};function p(){}function v(){}function y(){}var g={};l(g,c,(function(){return this}));var m=Object.getPrototypeOf,w=m&&m(m(O([])));w&&w!==e&&n.call(w,c)&&(g=w);var x=y.prototype=p.prototype=Object.create(g);function j(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function o(i,a,c,s){var u=f(t[i],t,a);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==(0,r.Z)(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,c,s)}),(function(t){o("throw",t,c,s)})):e.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return o("throw",t,c,s)}))}s(u.arg)}var a;i(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){o(t,n,e,r)}))}return a=a?a.then(r,r):r()}})}function L(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return C()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=k(a,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=f(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}function k(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var o=f(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function z(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:C}}function C(){return{value:void 0,done:!0}}return v.prototype=y,i(x,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:v,configurable:!0}),v.displayName=l(y,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,u,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},j(b.prototype),l(b.prototype,s,(function(){return this})),t.AsyncIterator=b,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new b(h(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(x),l(x,u,"Generator"),l(x,c,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=O,z.prototype={constructor:z,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),_(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;_(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:O(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},t}var i=n(433);function a(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(u){return void n(u)}c.done?e(s):Promise.resolve(s).then(r,o)}var c=n(439),s=n(184),u=function(t){var e=t.children,n=t.styles;return(0,s.jsx)("div",{className:"card",style:n,children:e})},l=n(882),h=n(565),f=n(419),d=n(791),p=n(532),v=n(892),y=n(618),g=function(){var t=(0,h.Z)(),e=(0,f.Z)(),r=(0,d.useState)([]),g=(0,c.Z)(r,2),m=g[0],w=g[1];(0,d.useEffect)((function(){p.forEach(function(){var t,e=(t=o().mark((function t(e){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n(202)("./".concat(e.path));case 2:r=t.sent,w([].concat((0,i.Z)(m),[r]));case 4:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function c(t){a(i,r,o,c,s,"next",t)}function s(t){a(i,r,o,c,s,"throw",t)}c(void 0)}))});return function(t){return e.apply(this,arguments)}}())}),[p]);var x={main:{container:{flex:1,margin:"".concat(t?16:64,"px ").concat(t?16:128,"px")},titleText:{fontSize:t?32:48}},content:{card:{padding:16,marginTop:8}},card:{content:{textAlign:"center"}},avatar:{container:{margin:8,display:"grid",gridTemplateColumns:e<=1400?"100%":"50% 50%"},card:{margin:8,padding:16,display:"flex",flexDirection:"column",alignItems:"center"},icon:{height:200,width:200,borderRadius:"100%",backgroundColor:"gray"},text:{marginTop:8,fontSize:32,fontWeight:"bold"}},project:{container:{margin:8,display:"grid",gridTemplateColumns:e<=1400?"100%":"50% 50%"},card:{padding:16,margin:8},cardTitle:{fontSize:24,fontWeight:"bold"},cardImage:{width:"100%",height:300,objectFit:"cover",backgroundColor:"gray"},buttonContainer:{display:"flex",justifyContent:"flex-end"},iconButton:{height:32,width:32}}};return(0,s.jsxs)("div",{style:x.main.container,children:[(0,s.jsx)("h1",{style:x.main.titleText,children:"Coding"}),(0,s.jsx)(u,{styles:x.content.card,children:(0,s.jsx)("p",{style:x.card.content,children:"I love coding. Since this is my hobby account, I have project related games as well."})}),(0,s.jsx)("div",{style:x.project.container,children:m.map((function(t,e){return(0,s.jsxs)(u,{styles:x.project.card,children:[(0,s.jsx)("h2",{style:x.project.cardTitle,children:t.title}),t.imagePath&&(0,s.jsx)("img",{style:x.project.cardImage,src:"/projects/images/".concat(t.imagePath),alt:"".concat(t.title),loading:"lazy"}),(0,s.jsx)("p",{children:t.description}),(0,s.jsxs)("div",{style:x.project.buttonContainer,children:[t.website&&(0,s.jsx)(y.Z,{message:"Link",children:(0,s.jsx)(v.Z,{styles:x.project.iconButton,icon:"/images/icons/link.png",onClick:function(){return window.open(t.website)}})}),t.github&&(0,s.jsx)(y.Z,{message:"Github repository",children:(0,s.jsx)(v.Z,{styles:x.project.iconButton,icon:"/images/icons/github-mark.png",onClick:function(){return window.open(t.github)}})})]})]},"clickable-card-".concat(e))}))}),(0,s.jsx)(u,{styles:x.content.card,children:(0,s.jsx)("p",{style:x.card.content,children:"I also love AI and NLP. you can check out my git repositories to learn more!"})}),(0,s.jsxs)("div",{style:x.avatar.container,children:[(0,s.jsxs)(l.Z,{styles:x.avatar.card,onClick:function(){window.open("https://github.com/joakqq")},children:[(0,s.jsx)("img",{style:x.avatar.icon,src:"https://avatars.githubusercontent.com/u/47177060",alt:"joak-icon",loading:"lazy"}),(0,s.jsx)("p",{style:x.avatar.text,children:"Joak"})]}),(0,s.jsxs)(l.Z,{styles:x.avatar.card,onClick:function(){window.open("https://github.com/matchapizza")},children:[(0,s.jsx)("img",{style:x.avatar.icon,src:"https://avatars.githubusercontent.com/u/124992812",alt:"matchapizza-icon",loading:"lazy"}),(0,s.jsx)("p",{style:x.avatar.text,children:"MatchaPizza"})]})]})]})}},202:function(t,e,n){var r={"./":[532,3],"./images/osu.png":[899,1,899],"./index":[532,3],"./index.json":[532,3],"./osu_mirror_download_extension":[886,3,886],"./osu_mirror_download_extension.json":[886,3,886]};function o(t){if(!n.o(r,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=r[t],o=e[0];return Promise.all(e.slice(2).map(n.e)).then((function(){return n.t(o,16|e[1])}))}o.keys=function(){return Object.keys(r)},o.id=202,t.exports=o},532:function(t){"use strict";t.exports=JSON.parse('[{"name":"Osu Mirror Download Extension","path":"osu_mirror_download_extension.json"}]')}}]);
//# sourceMappingURL=470.9d06a151.chunk.js.map