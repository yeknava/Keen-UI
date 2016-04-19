/*!
 * Keen UI v0.8.4 (https://github.com/JosephusPaye/keen-ui)
 * (c) 2016 Josephus Paye II
 * Released under the MIT License.
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.UiCollapsible=t():(e.Keen=e.Keen||{},e.Keen.UiCollapsible=t())}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}({0:function(e,t,n){e.exports=n(171)},1:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},2:function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=p[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(u(r.parts[o],t))}else{for(var a=[],o=0;o<r.parts.length;o++)a.push(u(r.parts[o],t));p[r.id]={id:r.id,refs:1,parts:a}}}}function i(e){for(var t=[],n={},r=0;r<e.length;r++){var i=e[r],o=i[0],a=i[1],s=i[2],u=i[3],l={css:a,media:s,sourceMap:u};n[o]?n[o].parts.push(l):t.push(n[o]={id:o,parts:[l]})}return t}function o(e,t){var n=h(),r=b[b.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),b.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=b.indexOf(e);t>=0&&b.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",o(e,t),t}function u(e,t){var n,r,i;if(t.singleton){var o=m++;n=v||(v=s(t)),r=l.bind(null,n,o,!1),i=l.bind(null,n,o,!0)}else n=s(t),r=c.bind(null,n),i=function(){a(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}function l(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function c(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var p={},f=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},d=f(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=f(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,m=0,b=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=d()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=i(e);return r(n,t),function(e){for(var o=[],a=0;a<n.length;a++){var s=n[a],u=p[s.id];u.refs--,o.push(u)}if(e){var l=i(e);r(l,t)}for(var a=0;a<o.length;a++){var u=o[a];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete p[u.id]}}}};var y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},3:function(e,t,n){"use strict";var r=n(25),i=r.Array();e.exports=i},4:function(e,t){"use strict";function n(e){return a?e instanceof HTMLElement:r(e)}function r(e){return e&&"object"==typeof e&&"string"==typeof e.nodeName&&1===e.nodeType}function i(e){return"[object Array]"===Object.prototype.toString.call(e)}function o(e){return"checked"in e&&"radio"===e.type||"checkbox"===e.type}var a="object"==typeof HTMLElement;e.exports={isElement:n,isArray:i,isCheckable:o}},5:function(e,t,n){var r,i;n(16),r=n(12),i=n(15),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)},6:function(e,t,n){"use strict";function r(e){return a.apply(this,e)}function i(e){return new r(e)}function o(e){var t=s[e];s[e]=function(){return i(t.apply(this,arguments))}}var a=n(3),s=a.prototype;r.prototype=s,["map","filter","concat","slice"].forEach(o),e.exports=i},7:function(e,t,n){(function(t){"use strict";function r(e){return e===t?new a(e):e instanceof a?e:e?i.isElement(e)?new a(e):i.isArray(e)?o(e).filter(function(e){return i.isElement(e)}):new a:new a}var i=n(4),o=n(6),a=n(3);e.exports=r}).call(t,function(){return this}())},8:function(e,t){"use strict";function n(e,t,n){function o(t){return r(e,t)}i[e]={event:t,filter:n,wrap:o}}function r(e,t){if(!t)return t;var n="__dce_"+e;return t[n]?t[n]:(t[n]=function(n){var r=i[e].filter(n);return r?t.apply(this,arguments):void 0},t[n])}var i={};n("left-click","click",function(e){return 1===e.which&&!e.metaKey&&!e.ctrlKey}),e.exports={register:n,wrapper:r,handlers:i}},9:function(e,t,n){(function(t){"use strict";function r(e){return"string"==typeof e?g.qs(null,e):y.isElement(e)?e:e instanceof h?e[0]:null}function i(e){return function(t,n){var r=t[e];return!r||n&&!g.matches(r,n)?new h:v(r)}}function o(e,t){return t?t instanceof h?-1!==t.indexOf(e):y.isElement(t)?e===t:g.matches(e,t):!0}function a(e,t,n){function r(r){for(var i=r.target;i&&i!==e;){if(g.matches(i,t))return void n.apply(this,arguments);i=i.parentElement}}return x[n._dd]?x[n._dd]:(n._dd=Date.now(),x[n._dd]=r,r)}function s(e,t,n,r,i){null===r?d[e](t,n,i):d[e](t,n,a(t,r,i))}function u(e,t,n,r){function i(){return g.off.apply(g,o),r.apply(this,arguments)}var o=[e,t,n,i];g.on.apply(g,o)}function l(e,t,n){function r(e,r){o?t.forEach(function(t,i){n(e,c(t,r&&0===i))}):n(e,c(t,r))}function i(e,t){r(e,0===t)}var o=t instanceof h,a=e instanceof h;return a?e.forEach(i):o&&r(e,!0),!e||!t||a||o}function c(e,t){return t?e:g.clone(e)}function p(e){var t=e.split(/[A-Z]/)[0];g[e]=function(e,n){g[t](n,e)}}var f=n(27),d=n(19),h=n(3),v=n(7),m=n(6),b=n(24),y=n(4),g=e.exports={},x={};g.qsa=function(e,t){var n=new h;return f(t,r(e),n)},g.qs=function(e,t){return g.qsa(e,t)[0]},g.matches=function(e,t){return y.isElement(e)&&f.matchesSelector(e,t)},g.prev=i("previousElementSibling"),g.next=i("nextElementSibling"),g.parent=i("parentElement"),g.parents=function(e,t){for(var n=[],r=e;r.parentElement;)o(r.parentElement,t)&&n.push(r.parentElement),r=r.parentElement;return m(n)},g.children=function(e,t){var n,r,i=[],a=e.children;for(r=0;a&&r<a.length;r++)n=a[r],o(n,t)&&i.push(n);return m(i)},g.once=u,g.on=s.bind(null,"add"),g.off=s.bind(null,"remove"),g.emit=s.bind(null,"fabricate"),g.html=function(e,t){var n=arguments.length<2;return n?e.innerHTML:void(e.innerHTML=t)},g.text=function(e,t){var n=y.isCheckable(e),r=arguments.length<2;return r?n?e.value:e.innerText||e.textContent:void(n?e.value=t:e.innerText=e.textContent=t)},g.value=function(e,t){var n=y.isCheckable(e),r=arguments.length<2;return r?n?e.checked:e.value:void(n?e.checked=t:e.value=t)},g.attr=function(e,t,n){if(y.isElement(e)){if(null===n||void 0===n)return void e.removeAttribute(t);var r=b.hyphenToCamel(t);r in e?e[r]=n:e.setAttribute(t,n)}},g.getAttr=function(e,t){var n=b.hyphenToCamel(t);return n in e?e[n]:e.getAttribute?e.getAttribute(t):null},g.manyAttr=function(e,t){Object.keys(t).forEach(function(n){g.attr(e,n,t[n])})},g.make=function(e){return new h(document.createElement(e))},g.clone=function(e){return e.cloneNode?e.cloneNode(!0):e},g.remove=function(e){e.parentElement&&e.parentElement.removeChild(e)},g.append=function(e,t){l(e,t,g.append)||e.appendChild&&e.appendChild(t)},g.prepend=function(e,t){l(e,t,g.prepend)||e.insertBefore&&e.insertBefore(t,e.firstChild)},g.before=function(e,t){l(e,t,g.before)||e.parentElement&&e.parentElement.insertBefore(t,e)},g.after=function(e,t){l(e,t,g.after)||e.parentElement&&e.parentElement.insertBefore(t,e.nextSibling)},["appendTo","prependTo","beforeOf","afterOf"].forEach(p);var E={"column-count":!0,"fill-opacity":!0,"flex-grow":!0,"flex-shrink":!0,"font-weight":!0,"line-height":!0,opacity:!0,order:!0,orphans:!0,widows:!0,"z-index":!0,zoom:!0},w=/^\d+$/;"float"in document.body.style;g.getCss=function(e,n){if(!y.isElement(e))return null;var r=b.hyphenate(n),i=t.getComputedStyle(e)[r];return"opacity"===n&&""===i?1:"px"===i.substr(-2)||w.test(i)?parseFloat(i,10):i},g.setCss=function(e){function t(t){var n=e[t];return null!==n&&n===n}function n(t){var n=b.hyphenate(t),r=e[t];return"number"!=typeof r||E[n]||(r+="px"),{name:n,value:r}}var r=Object.keys(e).filter(t).map(n);return function(e){y.isElement(e)&&r.forEach(function(t){e.style[t.name]=t.value})}}}).call(t,function(){return this}())},10:function(e,t,n){"use strict";function r(e,t){var n="string"!=typeof e;if(n&&arguments.length<2)return o(e);if(n)return new s;var a=e.match(u);return a?i.make(a[1]):r.find(e,t)}var i=n(9),o=n(7),a=n(8),s=n(3),u=/^\s*<([a-z]+(?:-[a-z]+)?)\s*\/?>\s*$/i;r.find=function(e,t){return i.qsa(t,e)},r.findOne=function(e,t){return i.qs(t,e)},r.custom=a.register,e.exports=r},11:function(e,t,n){"use strict";e.exports=n(21)},12:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={name:"ui-icon",props:{icon:{type:String,required:!0},removeText:{type:Boolean,"default":!1}}}},13:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e){this.el.disabled=Boolean(e)}},14:function(e,t,n){t=e.exports=n(1)(),t.push([e.id,".ui-icon{font-size:24px;width:1em;height:1em;display:inline-block;cursor:inherit}",""])},15:function(e,t){e.exports='<i class="ui-icon material-icons" :class=[icon] v-text="removeText ? null : icon" aria-hidden=true></i>'},16:function(e,t,n){var r=n(14);"string"==typeof r&&(r=[[e.id,r,""]]);n(2)(r,{});r.locals&&(e.exports=r.locals)},17:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(31),o=r(i);t["default"]={props:{hideRippleInk:{type:Boolean,"default":!1}},components:{UiRippleInk:o["default"]}}},18:function(e,t){(function(t){function n(){try{var e=new r("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(t){}return!1}var r=t.CustomEvent;e.exports=n()?r:"function"==typeof document.createEvent?function(e,t){var n=document.createEvent("CustomEvent");return t?n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail):n.initCustomEvent(e,!1,!1,void 0),n}:function(e,t){var n=document.createEventObject();return n.type=e,t?(n.bubbles=Boolean(t.bubbles),n.cancelable=Boolean(t.cancelable),n.detail=t.detail):(n.bubbles=!1,n.cancelable=!1,n.detail=void 0),n}}).call(t,function(){return this}())},19:function(e,t,n){(function(t){"use strict";function r(e,t,n,r){return e.addEventListener(t,n,r)}function i(e,t,n){return e.attachEvent("on"+t,l(e,t,n))}function o(e,t,n,r){return e.removeEventListener(t,n,r)}function a(e,t,n){var r=c(e,t,n);return r?e.detachEvent("on"+t,r):void 0}function s(e,t,n){function r(){var e;return h.createEvent?(e=h.createEvent("Event"),e.initEvent(t,!0,!0)):h.createEventObject&&(e=h.createEventObject()),e}function i(){return new f(t,{detail:n})}var o=-1===d.indexOf(t)?i():r();e.dispatchEvent?e.dispatchEvent(o):e.fireEvent("on"+t,o)}function u(e,n,r){return function(n){var i=n||t.event;i.target=i.target||i.srcElement,i.preventDefault=i.preventDefault||function(){i.returnValue=!1},i.stopPropagation=i.stopPropagation||function(){i.cancelBubble=!0},i.which=i.which||i.keyCode,r.call(e,i)}}function l(e,t,n){var r=c(e,t,n)||u(e,t,n);return b.push({wrapper:r,element:e,type:t,fn:n}),r}function c(e,t,n){var r=p(e,t,n);if(r){var i=b[r].wrapper;return b.splice(r,1),i}}function p(e,t,n){var r,i;for(r=0;r<b.length;r++)if(i=b[r],i.element===e&&i.type===t&&i.fn===n)return r}var f=n(18),d=n(20),h=t.document,v=r,m=o,b=[];t.addEventListener||(v=i,m=a),e.exports={add:v,remove:m,fabricate:s}}).call(t,function(){return this}())},20:function(e,t){(function(t){"use strict";var n=[],r="",i=/^on/;for(r in t)i.test(r)&&n.push(r.slice(2));e.exports=n}).call(t,function(){return this}())},21:function(e,t,n){"use strict";function r(e){return function(t){return d.matches(t,e)}}function i(e,t){return function(n){var r=this.map(function(t){return d[e](t,n)}),i=f(r);return t?i[0]:i}}function o(e){return function(){return p.apply(null,arguments).forEach(e,this),this}}function a(e){return function(t,n,r){var i=t.split(" ");return"function"!=typeof r&&(r=n,n=null),this.forEach(function(t){i.forEach(function(i){var o=h.handlers[i];o?d[e](t,o.event,n,o.wrap(r)):d[e](t,i,n,r)})}),this}}function s(e){m.prototype[e[0]]=function(t){return this.forEach(function(n){e[1](n,t)}),this}}function u(e){m.prototype[e]=function(t){return d[e](this,t),this}}function l(e,t){var n=arguments.length<2;return n?this.length?d[e](this[0]):"":(this.forEach(function(n){d[e](n,t)}),this)}function c(e){m.prototype[e]=function(t){var n=arguments.length<1;return n?l.call(this,e):l.call(this,e,t)}}var p=n(10),f=n(23),d=n(9),h=n(8),v=n(22),m=n(3);m.prototype.prev=i("prev"),m.prototype.next=i("next"),m.prototype.parent=i("parent"),m.prototype.parents=i("parents"),m.prototype.children=i("children"),m.prototype.find=i("qsa"),m.prototype.findOne=i("qs",!0),m.prototype.where=function(e){return this.filter(r(e))},m.prototype.is=function(e){return this.some(r(e))},m.prototype.i=function(e){return this[e]?new m(this[e]):new m},m.prototype.and=o(function(e){return-1===this.indexOf(e)&&this.push(e),this}),m.prototype.but=o(function(e){var t=this.indexOf(e);return-1!==t&&this.splice(t,1),this}),m.prototype.css=function(e,t){var n,r=e&&"object"==typeof e,i=!r&&!t;return i?this.length?d.getCss(this[0],e):null:(r?n=e:(n={},n[e]=t),this.forEach(d.setCss(n)),this)},m.prototype.once=a("once"),m.prototype.on=a("on"),m.prototype.off=a("off"),m.prototype.emit=a("emit"),[["addClass",v.add],["removeClass",v.remove],["setClass",v.set],["removeClass",v.remove],["remove",d.remove]].forEach(s),["append","appendTo","prepend","prependTo","before","beforeOf","after","afterOf"].forEach(u),m.prototype.hasClass=function(e){return this.some(function(t){return v.contains(t,e)})},m.prototype.attr=function(e,t){function n(t){d.manyAttr(t,e)}function r(n){d.attr(n,e,t)}var i=e&&"object"==typeof e,o=i?n:r,a=i||arguments.length>1;return a?(this.forEach(o),this):this.length?d.getAttr(this[0],e):null},["html","text","value"].forEach(c),m.prototype.clone=function(){return this.map(function(e){return d.clone(e)})},m.prototype.focus=function(){return this.length&&this[0].focus(),this},e.exports=n(10)},22:function(e,t,n){"use strict";function r(e){return"string"==typeof e?e.replace(l,"").split(c):e}function i(e){return p.isElement(e)?e.className.replace(l,"").split(c):[]}function o(e,t){p.isElement(e)&&(e.className=r(t).join(" "))}function a(e,t){var n=s(e,t),i=r(t);return n.push.apply(n,i),o(e,n),n}function s(e,t){var n=i(e),a=r(t);return a.forEach(function(e){var t=n.indexOf(e);-1!==t&&n.splice(t,1)}),o(e,n),n}function u(e,t){var n=i(e),o=r(t);return o.every(function(e){return-1!==n.indexOf(e)})}var l=/^\s+|\s+$/g,c=/\s+/g,p=n(4);e.exports={add:a,remove:s,contains:u,set:o,get:i}},23:function(e,t,n){"use strict";function r(e,t){return e.reduce(function(e,t){return i.isArray(t)?r(t,e):-1===e.indexOf(t)?e.concat(t):e},t||new i)}var i=n(3);e.exports=r},24:function(e,t){"use strict";function n(e){var t=/-([a-z])/g;return e.replace(t,function(e,t){return t.toUpperCase()})}function r(e){var t=/([a-z])([A-Z])/g;return e.replace(t,"$1-$2").toLowerCase()}e.exports={hyphenToCamel:n,hyphenate:r}},25:function(e,t,n){function r(e){i[e]=function(){return i(e)}}var i=n(26);e.exports=i,["Array","Function","Object","Date","String"].forEach(r)},26:function(e,t){(function(t){"use strict";function n(e){var t=i.createElement("iframe");return t.style.display="none",i.body.appendChild(t),r(e,t.contentWindow)}function r(e,t){var n,r=window[e].prototype,i=t[e];for(n in r)i.prototype[n]=r[n];return i}var i=t.document;e.exports=n}).call(t,function(){return this}())},27:function(e,t){(function(t){"use strict";function n(e,t){var n,r,i,o,a,c=t!==l;c&&(n=t.getAttribute("id"),r=n||s,i="#"+r+" ",o=i+e.replace(/,/g,","+i),a=u.test(e)&&t.parentNode,n||t.setAttribute("id",r));try{return(a||t).querySelectorAll(o||e)}catch(p){return[]}finally{null===n&&t.removeAttribute("id")}}function r(e,t,r,i){var a,s=t||l,u=r||[],c=0;if("string"!=typeof e)return u;if(1!==s.nodeType&&9!==s.nodeType)return[];if(i)for(;a=i[c++];)o(a,e)&&u.push(a);else u.push.apply(u,n(e,s));return u}function i(e,t){return r(e,null,null,t)}function o(e,t){return p.call(e,t)}function a(){return!1}var s="sektor-"+Date.now(),u=/[+~]/,l=t.document,c=l.documentElement||{},p=c.matches||c.webkitMatchesSelector||c.mozMatchesSelector||c.oMatchesSelector||c.msMatchesSelector||a;e.exports=r,r.matches=i,r.matchesSelector=o}).call(t,function(){return this}())},28:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(11),o=r(i),a=function(e,t){var n=t.currentTarget;if((0,o["default"])(n).hasClass("ui-ripple-ink")||(n=(0,o["default"])(n).findOne(".ui-ripple-ink"))){var r=n.getAttribute("data-ui-event");if(!r||r===e){n.setAttribute("data-ui-event",e);var i,a=n.getBoundingClientRect(),s=t.offsetX;void 0!==s?i=t.offsetY:(s=t.clientX-a.left,i=t.clientY-a.top);var u,l=document.createElement("div");u=a.width===a.height?1.412*a.width:Math.sqrt(a.width*a.width+a.height*a.height);var c=2*u+"px";l.style.width=c,l.style.height=c,l.style.marginLeft=-u+s+"px",l.style.marginTop=-u+i+"px",l.className="ripple",n.appendChild(l),setTimeout(function(){(0,o["default"])(l).addClass("held")},0);var p="mousedown"===e?"mouseup":"touchend",f=function d(){document.removeEventListener(p,d),(0,o["default"])(l).addClass("done"),setTimeout(function(){n.removeChild(l),n.children.length||(0,o["default"])(n).removeClass("active").attr("data-ui-event",null)},450)};document.addEventListener(p,f)}}},s=function(e){0===e.button&&a(e.type,e)},u=function(e){if(e.changedTouches)for(var t=0;t<e.changedTouches.length;++t)a(e.type,e.changedTouches[t])};t["default"]={name:"ui-ripple-ink",props:{trigger:{type:Element,required:!0}},watch:{trigger:function(){this.initialize()}},ready:function(){this.initialize()},beforeDestory:function(){this.trigger&&(this.trigger.removeEventListener("mousedown",s),this.trigger.removeEventListener("touchstart",u))},methods:{initialize:function(){this.trigger&&(this.trigger.addEventListener("touchstart",u),this.trigger.addEventListener("mousedown",s))}}}},29:function(e,t,n){t=e.exports=n(1)(),t.push([e.id,".ui-ripple-ink{display:block;overflow:hidden;border-radius:inherit;position:absolute;top:0;left:0;right:0;bottom:0;-webkit-mask-image:-webkit-radial-gradient(circle,#fff,#000)}.ui-ripple-ink .ripple{position:absolute;width:0;height:0;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:50%;background-color:currentColor;background-clip:padding-box;opacity:.2;-webkit-transform:scale(0);transform:scale(0);transition:opacity .4s ease-out,-webkit-transform .4s ease-out;transition:transform .4s ease-out,opacity .4s ease-out;transition:transform .4s ease-out,opacity .4s ease-out,-webkit-transform .4s ease-out}.ui-ripple-ink .ripple.held{opacity:.4;-webkit-transform:scale(1);transform:scale(1)}.ui-ripple-ink .ripple.done{opacity:0!important}",""])},30:function(e,t){e.exports="<div class=ui-ripple-ink></div>"},31:function(e,t,n){var r,i;n(32),r=n(28),i=n(30),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)},32:function(e,t,n){var r=n(29);"string"==typeof r&&(r=[[e.id,r,""]]);n(2)(r,{});r.locals&&(e.exports=r.locals)},57:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{id:String},methods:{eventTargetsComponent:function(e){return void 0===e||this.id===e}}}},76:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});for(var n=[],r=0;256>r;r++)n[r]=(16>r?"0":"")+r.toString(16);var i=function(){var e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,r=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return n[255&e]+n[e>>8&255]+n[e>>16&255]+n[e>>24&255]+"-"+n[255&t]+n[t>>8&255]+"-"+n[t>>16&15|64]+n[t>>24&255]+"-"+n[63&r|128]+n[r>>8&255]+"-"+n[r>>16&255]+n[r>>24&255]+n[255&i]+n[i>>8&255]+n[i>>16&255]+n[i>>24&255]},o=function(e){e=e||"";var t=i();return e+t.split("-")[0]};t["default"]={generate:i,"short":o}},102:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(5),o=r(i),a=n(76),s=r(a),u=n(13),l=r(u),c=n(17),p=r(c),f=n(57),d=r(f);t["default"]={name:"ui-collapsible",props:{id:String,open:{type:Boolean,"default":!1},header:String,transition:{type:String,"default":"ui-collapsible-toggle"},hideIcon:{type:Boolean,"default":!1},disabled:{type:Boolean,"default":!1}},data:function(){return{height:0,isReady:!1}},computed:{icon:function(){return this.open?"keyboard_arrow_up":"keyboard_arrow_down"},calculatedHeight:function(){return 0===this.height?"initial":this.height+"px"}},created:function(){this.id=this.id||s["default"]["short"]("ui-collapsible-")},ready:function(){this.isReady=!0,this.setHeight()},events:{"ui-collapsible::refresh-height":function(e){this.eventTargetsComponent(e)&&this.setHeight()}},methods:{toggleMenu:function(){this.disabled||(this.open=!this.open)},setHeight:function(){var e=this.$els.body;e.style.display="block",this.height=e.offsetHeight,this.open||(e.style.display="none")}},components:{UiIcon:o["default"]},directives:{disabled:l["default"]},mixins:[p["default"],d["default"]],transitions:{"ui-collapsible-toggle":{afterEnter:function(){this.$dispatch("opened"),this.setHeight()},afterLeave:function(){this.$dispatch("closed")}}}}},122:function(e,t,n){t=e.exports=n(1)(),t.push([e.id,".ui-collapsible-header{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ui-collapsible{margin-bottom:8px}.ui-collapsible,.ui-collapsible-header{font-family:Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;width:100%}.ui-collapsible-header{position:relative;margin:0;border:none;line-height:1;text-align:left;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:48px;padding:8px 16px;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;font-size:16px;background-color:#eee}.ui-collapsible-header:hover:not(.disabled),body[modality=keyboard] .ui-collapsible-header:focus{background-color:#e0e0e0}.ui-collapsible-header.disabled{opacity:.6;cursor:default}.ui-collapsible-header.disabled .ui-icon{cursor:default}.ui-collapsible-header .ui-icon{cursor:pointer}.ui-collapsible-header .ui-ripple-ink .ripple.held{opacity:.01}.ui-collapsible-header-content{-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}.ui-collapsible-header-icon{margin-left:auto;margin-right:-4px;color:rgba(0,0,0,.54)}.ui-collapsible-body-wrapper{overflow:hidden;height:initial}.ui-collapsible-body{width:100%;padding:16px;display:block;border:1px solid #eee;border-top:0}.ui-collapsible-toggle-transition{transition:height .2s ease}.ui-collapsible-toggle-enter,.ui-collapsible-toggle-leave{height:0!important}",""])},154:function(e,t){e.exports="<div class=ui-collapsible> <button class=ui-collapsible-header :class=\"{ 'disabled': disabled }\" :aria-controls=id :aria-expanded=\"open ? 'true' : 'false'\" @click=toggleMenu v-disabled=disabled v-el:button> <div class=ui-collapsible-header-content> <slot name=header> <div v-text=header></div> </slot> </div> <ui-icon class=ui-collapsible-header-icon :icon=icon v-if=!hideIcon></ui-icon> <ui-ripple-ink v-if=\"!hideRippleInk && !disabled && isReady\" :trigger=$els.button></ui-ripple-ink> </button> <div class=ui-collapsible-body-wrapper :transition=transition :style=\"{ 'height': calculatedHeight }\" v-show=open v-el:body> <div class=ui-collapsible-body :id=id :aria-hidden=\"open ? null : 'true'\"> <slot></slot> </div> </div> </div>"},171:function(e,t,n){var r,i;n(188),r=n(102),i=n(154),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)},188:function(e,t,n){var r=n(122);"string"==typeof r&&(r=[[e.id,r,""]]);n(2)(r,{});r.locals&&(e.exports=r.locals)}})});