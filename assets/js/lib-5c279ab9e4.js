!function(){function i(t,e){return(/string|function/.test(typeof e)?function(e,n){if("string"==typeof n){var t=n;n=function(){return new o(t)}}var i=r[e]=function(t){try{return new n(t,e)+""}catch(t){return f(t)()}};return i.prototype=n.prototype=c,i.toString=function(){return n+""},i}:l)(t,e)}var r=i.cache={},o=this.String;function n(t,e){return"string"!=typeof t&&("number"===(e=typeof t)?t+="":t="function"===e?n(t.call(t)):""),t}var e={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"};function a(t){return e[t]}var s=Array.isArray||function(t){return"[object Array]"==={}.toString.call(t)};var c=i.utils={$helpers:{},$include:function(t,e,n){return l(t=function(t,e){var n=/(\/)[^/]+\1\.\.\1/,i=("./"+t).replace(/[^/]+$/,"")+e;for(i=i.replace(/\/\.\//g,"/");i.match(n);)i=i.replace(n,"/");return i}(n,t),e)},$string:n,$escape:function(t){return n(t).replace(/&(?![\w#]+;)|[<>"']/g,a)},$each:function(t,e){if(s(t))for(var n=0,i=t.length;n<i;n++)e.call(t,t[n],n,t);else for(n in t)e.call(t,t[n],n)}},u=i.helpers=c.$helpers;function l(t,e){var n=i.get(t)||f({filename:t,name:"Render Error",message:"Template not found"});return e?n(e):n}function f(t){var e="{Template Error}",n=t.stack||"";if(n)n=n.split("\n").slice(0,2).join("\n");else for(var i in t)n+="<"+i+">\n"+t[i]+"\n\n";return function(){return"object"==typeof console&&console.error(e+"\n\n"+n),e}}i.get=function(t){return r[t.replace(/^\.\//,"")]},i.helper=function(t,e){u[t]=e},"function"==typeof define?define(function(){return i}):"undefined"!=typeof exports?module.exports=i:this.template=i}(),template("footer.tpl",function(t,e){"use strict";this.$helpers;var n="";return n+='\x3c!--<footer class="footer" id="footer">--\x3e\n    <div class="container">\n        ',t.has_contact&&(n+='\n        <div class="row contact">\n            <div class="col-md-8 col-md-offset-2">\n                <h3>现在竞争激烈，一位伪设计师，得懂自动化测试，还得是半个程序猿，你怎么看？</h3>\n                <h2>\n                    <a href="mailto:x.ong@icloud.com"\n                       class="btn-contact">TOUCH ME</a>\n                </h2>\n            </div>\n        </div>\n        '),n+='\n\n        <div class="row">\n            <div class="col-md-12">\n                <div class="architecture">\n                    <a href="https://adobe.com/"\n                       target="_blank">Inspired by Adobe Portfolio</a>\n\n                    <a href="https://github.com/c-ong/xfly"\n                       target="_blank">Based on Xfly develop</a>\n\n                    <a href="https://github.com"\n                       target="_blank">Hosted on Github</a>\n                </div>\n            </div>\n        </div>\n        <div class="row">\n            <div class="col-md-12">\n                <p class="copyright">© 2018</p>\n            </div>\n        </div>\n    </div>\n\x3c!--</footer>--\x3e',new String(n)}),function(t,e){"function"==typeof define&&define.amd?define(function(){return e(t)}):e(t)}(this,function(ea){var Wk,fa=function(){function c(t){return null==t?String(t):W[_.call(t)]||"object"}function a(t){return"function"==c(t)}function o(t){return null!=t&&t==t.window}function s(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function r(t){return"object"==c(t)}function u(t){return r(t)&&!o(t)&&Object.getPrototypeOf(t)==Object.prototype}function l(t){var e=!!t&&"length"in t&&t.length,n=x.type(t);return"function"!=n&&!o(t)&&("array"==n||0===e||"number"==typeof e&&0<e&&e-1 in t)}function f(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function n(t){return t in e?e[t]:e[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function p(t,e){return"number"!=typeof e||O[f(t)]?e:e+"px"}function i(t){return"children"in t?S.call(t.children):x.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function h(t,e){var n,i=t?t.length:0;for(n=0;n<i;n++)this[n]=t[n];this.length=i,this.selector=e||""}function d(t,e){return null==e?x(t):x(t).filter(e)}function m(t,e,n,i){return a(e)?e.call(t,n,i):e}function v(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function y(t,e){var n=t.className||"",i=n&&n.baseVal!==g;return e===g?i?n.baseVal:n:void(i?n.baseVal=e:t.className=e)}function k(e){try{return e?"true"==e||"false"!=e&&("null"==e?null:+e+""==e?+e:/^[\[\{]/.test(e)?x.parseJSON(e):e):e}catch(t){return e}}var g,b,x,j,E,D,N=[],w=N.concat,T=N.filter,S=N.slice,C=ea.document,P={},e={},O={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},A=/^\s*<(\w+|!)[^>]*>/,$=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,F=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,L=/^(?:body|html)$/i,R=/([A-Z])/g,q=["val","css","html","text","data","width","height","offset"],t=C.createElement("table"),M=C.createElement("tr"),Z={tr:C.createElement("tbody"),tbody:t,thead:t,tfoot:t,td:M,th:M,"*":C.createElement("div")},z=/complete|loaded|interactive/,U=/^[\w-]*$/,W={},_=W.toString,I={},H=C.createElement("div"),K={tabindex:"tabIndex",readonly:"readOnly",for:"htmlFor",class:"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},V=Array.isArray||function(t){return t instanceof Array};return I.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=H).appendChild(t),i=~I.qsa(r,e).indexOf(t),o&&H.removeChild(t),i},E=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},D=function(n){return T.call(n,function(t,e){return n.indexOf(t)==e})},I.fragment=function(t,e,n){var i,r,o;return $.test(t)&&(i=x(C.createElement(RegExp.$1))),i||(t.replace&&(t=t.replace(F,"<$1></$2>")),e===g&&(e=A.test(t)&&RegExp.$1),e in Z||(e="*"),(o=Z[e]).innerHTML=""+t,i=x.each(S.call(o.childNodes),function(){o.removeChild(this)})),u(n)&&(r=x(i),x.each(n,function(t,e){-1<q.indexOf(t)?r[t](e):r.attr(t,e)})),i},I.Z=function(t,e){return new h(t,e)},I.isZ=function(t){return t instanceof I.Z},I.init=function(t,e){var n,i;if(!t)return I.Z();if("string"==typeof t)if("<"==(t=t.trim())[0]&&A.test(t))n=I.fragment(t,RegExp.$1,e),t=null;else{if(e!==g)return x(e).find(t);n=I.qsa(C,t)}else{if(a(t))return x(C).ready(t);if(I.isZ(t))return t;if(V(t))i=t,n=T.call(i,function(t){return null!=t});else if(r(t))n=[t],t=null;else if(A.test(t))n=I.fragment(t.trim(),RegExp.$1,e),t=null;else{if(e!==g)return x(e).find(t);n=I.qsa(C,t)}}return I.Z(n,t)},(x=function(t,e){return I.init(t,e)}).extend=function(e){var n,t=S.call(arguments,1);return"boolean"==typeof e&&(n=e,e=t.shift()),t.forEach(function(t){!function t(e,n,i){for(b in n)i&&(u(n[b])||V(n[b]))?(u(n[b])&&!u(e[b])&&(e[b]={}),V(n[b])&&!V(e[b])&&(e[b]=[]),t(e[b],n[b],i)):n[b]!==g&&(e[b]=n[b])}(e,t,n)}),e},I.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],o=i||r?e.slice(1):e,a=U.test(o);return t.getElementById&&a&&i?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:S.call(a&&!i&&t.getElementsByClassName?r?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},x.contains=C.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},x.type=c,x.isFunction=a,x.isWindow=o,x.isArray=V,x.isPlainObject=u,x.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},x.isNumeric=function(t){var e=Number(t),n=typeof t;return null!=t&&"boolean"!=n&&("string"!=n||t.length)&&!isNaN(e)&&isFinite(e)||!1},x.inArray=function(t,e,n){return N.indexOf.call(e,t,n)},x.camelCase=E,x.trim=function(t){return null==t?"":String.prototype.trim.call(t)},x.uuid=0,x.support={},x.expr={},x.noop=function(){},x.map=function(t,e){var n,i,r,o,a=[];if(l(t))for(i=0;i<t.length;i++)null!=(n=e(t[i],i))&&a.push(n);else for(r in t)null!=(n=e(t[r],r))&&a.push(n);return 0<(o=a).length?x.fn.concat.apply([],o):o},x.each=function(t,e){var n,i;if(l(t)){for(n=0;n<t.length;n++)if(!1===e.call(t[n],n,t[n]))return t}else for(i in t)if(!1===e.call(t[i],i,t[i]))return t;return t},x.grep=function(t,e){return T.call(t,e)},ea.JSON&&(x.parseJSON=JSON.parse),x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){W["[object "+e+"]"]=e.toLowerCase()}),x.fn={constructor:I.Z,length:0,forEach:N.forEach,reduce:N.reduce,push:N.push,sort:N.sort,splice:N.splice,indexOf:N.indexOf,concat:function(){var t,e,n=[];for(t=0;t<arguments.length;t++)e=arguments[t],n[t]=I.isZ(e)?e.toArray():e;return w.apply(I.isZ(this)?this.toArray():this,n)},map:function(n){return x(x.map(this,function(t,e){return n.call(t,e,t)}))},slice:function(){return x(S.apply(this,arguments))},ready:function(t){return z.test(C.readyState)&&C.body?t(x):C.addEventListener("DOMContentLoaded",function(){t(x)},!1),this},get:function(t){return t===g?S.call(this):this[0<=t?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(n){return N.every.call(this,function(t,e){return!1!==n.call(t,e,t)}),this},filter:function(e){return a(e)?this.not(this.not(e)):x(T.call(this,function(t){return I.matches(t,e)}))},add:function(t,e){return x(D(this.concat(x(t,e))))},is:function(t){return 0<this.length&&I.matches(this[0],t)},not:function(e){var n=[];if(a(e)&&e.call!==g)this.each(function(t){e.call(this,t)||n.push(this)});else{var i="string"==typeof e?this.filter(e):l(e)&&a(e.item)?S.call(e):x(e);this.forEach(function(t){i.indexOf(t)<0&&n.push(t)})}return x(n)},has:function(t){return this.filter(function(){return r(t)?x.contains(this,t):x(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!r(t)?t:x(t)},last:function(){var t=this[this.length-1];return t&&!r(t)?t:x(t)},find:function(t){var n=this;return t?"object"==typeof t?x(t).filter(function(){var e=this;return N.some.call(n,function(t){return x.contains(t,e)})}):1==this.length?x(I.qsa(this[0],t)):this.map(function(){return I.qsa(this,t)}):x()},closest:function(n,i){var r=[],o="object"==typeof n&&x(n);return this.each(function(t,e){for(;e&&!(o?0<=o.indexOf(e):I.matches(e,n));)e=e!==i&&!s(e)&&e.parentNode;e&&r.indexOf(e)<0&&r.push(e)}),x(r)},parents:function(t){for(var e=[],n=this;0<n.length;)n=x.map(n,function(t){return(t=t.parentNode)&&!s(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return d(e,t)},parent:function(t){return d(D(this.pluck("parentNode")),t)},children:function(t){return d(this.map(function(){return i(this)}),t)},contents:function(){return this.map(function(){return this.contentDocument||S.call(this.childNodes)})},siblings:function(t){return d(this.map(function(t,e){return T.call(i(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(e){return x.map(this,function(t){return t[e]})},show:function(){return this.each(function(){var t,e,n;"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=(t=this.nodeName,P[t]||(e=C.createElement(t),C.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),P[t]=n),P[t]))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(e){var n=a(e);if(this[0]&&!n)var i=x(e).get(0),r=i.parentNode||1<this.length;return this.each(function(t){x(this).wrapAll(n?e.call(this,t):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){x(this[0]).before(t=x(t));for(var e;(e=t.children()).length;)t=e.first();x(t).append(this)}return this},wrapInner:function(r){var o=a(r);return this.each(function(t){var e=x(this),n=e.contents(),i=o?r.call(this,t):r;n.length?n.wrapAll(i):e.append(i)})},unwrap:function(){return this.parent().each(function(){x(this).replaceWith(x(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var t=x(this);(e===g?"none"==t.css("display"):e)?t.show():t.hide()})},prev:function(t){return x(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return x(this.pluck("nextElementSibling")).filter(t||"*")},html:function(n){return 0 in arguments?this.each(function(t){var e=this.innerHTML;x(this).empty().append(m(this,n,t,e))}):0 in this?this[0].innerHTML:null},text:function(n){return 0 in arguments?this.each(function(t){var e=m(this,n,t,this.textContent);this.textContent=null==e?"":""+e}):0 in this?this.pluck("textContent").join(""):null},attr:function(e,n){var t;return"string"!=typeof e||1 in arguments?this.each(function(t){if(1===this.nodeType)if(r(e))for(b in e)v(this,b,e[b]);else v(this,e,m(this,n,t,this.getAttribute(e)))}):0 in this&&1==this[0].nodeType&&null!=(t=this[0].getAttribute(e))?t:g},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){v(this,t)},this)})},prop:function(e,n){return e=K[e]||e,1 in arguments?this.each(function(t){this[e]=m(this,n,t,this[e])}):this[0]&&this[0][e]},removeProp:function(t){return t=K[t]||t,this.each(function(){delete this[t]})},data:function(t,e){var n="data-"+t.replace(R,"-$1").toLowerCase(),i=1 in arguments?this.attr(n,e):this.attr(n);return null!==i?k(i):g},val:function(e){return 0 in arguments?(null==e&&(e=""),this.each(function(t){this.value=m(this,e,t,this.value)})):this[0]&&(this[0].multiple?x(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(o){if(o)return this.each(function(t){var e=x(this),n=m(this,o,t,e.offset()),i=e.offsetParent().offset(),r={top:n.top-i.top,left:n.left-i.left};"static"==e.css("position")&&(r.position="relative"),e.css(r)});if(!this.length)return null;if(C.documentElement!==this[0]&&!x.contains(C.documentElement,this[0]))return{top:0,left:0};var t=this[0].getBoundingClientRect();return{left:t.left+ea.pageXOffset,top:t.top+ea.pageYOffset,width:Math.round(t.width),height:Math.round(t.height)}},css:function(t,e){if(arguments.length<2){var n=this[0];if("string"==typeof t){if(!n)return;return n.style[E(t)]||getComputedStyle(n,"").getPropertyValue(t)}if(V(t)){if(!n)return;var i={},r=getComputedStyle(n,"");return x.each(t,function(t,e){i[e]=n.style[E(e)]||r.getPropertyValue(e)}),i}}var o="";if("string"==c(t))e||0===e?o=f(t)+":"+p(t,e):this.each(function(){this.style.removeProperty(f(t))});else for(b in t)t[b]||0===t[b]?o+=f(b)+":"+p(b,t[b])+";":this.each(function(){this.style.removeProperty(f(b))});return this.each(function(){this.style.cssText+=";"+o})},index:function(t){return t?this.indexOf(x(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return!!t&&N.some.call(this,function(t){return this.test(y(t))},n(t))},addClass:function(n){return n?this.each(function(t){if("className"in this){j=[];var e=y(this);m(this,n,t,e).split(/\s+/g).forEach(function(t){x(this).hasClass(t)||j.push(t)},this),j.length&&y(this,e+(e?" ":"")+j.join(" "))}}):this},removeClass:function(e){return this.each(function(t){if("className"in this){if(e===g)return y(this,"");j=y(this),m(this,e,t,j).split(/\s+/g).forEach(function(t){j=j.replace(n(t)," ")}),y(this,j.trim())}})},toggleClass:function(n,i){return n?this.each(function(t){var e=x(this);m(this,n,t,y(this)).split(/\s+/g).forEach(function(t){(i===g?!e.hasClass(t):i)?e.addClass(t):e.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===g?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===g?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=L.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(x(t).css("margin-top"))||0,n.left-=parseFloat(x(t).css("margin-left"))||0,i.top+=parseFloat(x(e[0]).css("border-top-width"))||0,i.left+=parseFloat(x(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||C.body;t&&!L.test(t.nodeName)&&"static"==x(t).css("position");)t=t.offsetParent;return t})}},x.fn.detach=x.fn.remove,["width","height"].forEach(function(i){var r=i.replace(/./,function(t){return t[0].toUpperCase()});x.fn[i]=function(e){var t,n=this[0];return e===g?o(n)?n["inner"+r]:s(n)?n.documentElement["scroll"+r]:(t=this.offset())&&t[i]:this.each(function(t){(n=x(this)).css(i,m(this,e,t,n[i]()))})}}),["after","prepend","before","append"].forEach(function(e,a){var s=a%2;x.fn[e]=function(){var n,i,r=x.map(arguments,function(t){var e=[];return"array"==(n=c(t))?(t.forEach(function(t){return t.nodeType!==g?e.push(t):x.zepto.isZ(t)?e=e.concat(t.get()):void(e=e.concat(I.fragment(t)))}),e):"object"==n||null==t?t:I.fragment(t)}),o=1<this.length;return r.length<1?this:this.each(function(t,e){i=s?e:e.parentNode,e=0==a?e.nextSibling:1==a?e.firstChild:2==a?e:null;var n=x.contains(C.documentElement,i);r.forEach(function(t){if(o)t=t.cloneNode(!0);else if(!i)return x(t).remove();i.insertBefore(t,e),n&&function t(e,n){n(e);for(var i=0,r=e.childNodes.length;i<r;i++)t(e.childNodes[i],n)}(t,function(t){if(!(null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src)){var e=t.ownerDocument?t.ownerDocument.defaultView:ea;e.eval.call(e,t.innerHTML)}})})})},x.fn[s?e+"To":"insert"+(a?"Before":"After")]=function(t){return x(t)[e](this),this}}),I.Z.prototype=h.prototype=x.fn,I.uniq=D,I.deserializeValue=k,x.zepto=I,x}();return ea.Zepto=fa,void 0===ea.$&&(ea.$=fa),function(l){function f(t){return t._zid||(t._zid=e++)}function a(t,e,n,i){if((e=p(e)).ns)var r=(o=e.ns,new RegExp("(?:^| )"+o.replace(" "," .* ?")+"(?: |$)"));var o;return(j[f(t)]||[]).filter(function(t){return t&&(!e.e||t.e==e.e)&&(!e.ns||r.test(t.ns))&&(!n||f(t.fn)===f(n))&&(!i||t.sel==i)})}function p(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function h(t,e){return t.del&&!n&&t.e in i||!!e}function d(t){return E[t]||n&&i[t]||t}function u(r,t,e,o,a,s,c){var n=f(r),u=j[n]||(j[n]=[]);t.split(/\s/).forEach(function(t){if("ready"==t)return l(document).ready(e);var n=p(t);n.fn=e,n.sel=a,n.e in E&&(e=function(t){var e=t.relatedTarget;return!e||e!==this&&!l.contains(this,e)?n.fn.apply(this,arguments):void 0});var i=(n.del=s)||e;n.proxy=function(t){if(!(t=v(t)).isImmediatePropagationStopped()){t.data=o;var e=i.apply(r,t._args==k?[t]:[t].concat(t._args));return!1===e&&(t.preventDefault(),t.stopPropagation()),e}},n.i=u.length,u.push(n),"addEventListener"in r&&r.addEventListener(d(n.e),n.proxy,h(n,c))})}function m(e,t,n,i,r){var o=f(e);(t||"").split(/\s/).forEach(function(t){a(e,t,n,i).forEach(function(t){delete j[o][t.i],"removeEventListener"in e&&e.removeEventListener(d(t.e),t.proxy,h(t,r))})})}function v(i,r){return(r||!i.isDefaultPrevented)&&(r||(r=i),l.each(t,function(t,e){var n=r[t];i[t]=function(){return this[e]=s,n&&n.apply(r,arguments)},i[e]=D}),i.timeStamp||(i.timeStamp=Date.now()),(r.defaultPrevented!==k?r.defaultPrevented:"returnValue"in r?!1===r.returnValue:r.getPreventDefault&&r.getPreventDefault())&&(i.isDefaultPrevented=s)),i}function y(t){var e,n={originalEvent:t};for(e in t)r.test(e)||t[e]===k||(n[e]=t[e]);return v(n,t)}var k,e=1,g=Array.prototype.slice,b=l.isFunction,x=function(t){return"string"==typeof t},j={},o={},n="onfocusin"in ea,i={focus:"focusin",blur:"focusout"},E={mouseenter:"mouseover",mouseleave:"mouseout"};o.click=o.mousedown=o.mouseup=o.mousemove="MouseEvents",l.event={add:u,remove:m},l.proxy=function(t,e){var n=2 in arguments&&g.call(arguments,2);if(b(t)){var i=function(){return t.apply(e,n?n.concat(g.call(arguments)):arguments)};return i._zid=f(t),i}if(x(e))return n?(n.unshift(t[e],t),l.proxy.apply(null,n)):l.proxy(t[e],t);throw new TypeError("expected function")},l.fn.bind=function(t,e,n){return this.on(t,e,n)},l.fn.unbind=function(t,e){return this.off(t,e)},l.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var s=function(){return!0},D=function(){return!1},r=/^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,t={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};l.fn.delegate=function(t,e,n){return this.on(e,t,n)},l.fn.undelegate=function(t,e,n){return this.off(e,t,n)},l.fn.live=function(t,e){return l(document.body).delegate(this.selector,t,e),this},l.fn.die=function(t,e){return l(document.body).undelegate(this.selector,t,e),this},l.fn.on=function(e,r,n,o,a){var s,c,i=this;return e&&!x(e)?(l.each(e,function(t,e){i.on(t,r,n,e,a)}),i):(x(r)||b(o)||!1===o||(o=n,n=r,r=k),(o===k||!1===n)&&(o=n,n=k),!1===o&&(o=D),i.each(function(t,i){a&&(s=function(t){return m(i,t.type,o),o.apply(this,arguments)}),r&&(c=function(t){var e,n=l(t.target).closest(r,i).get(0);return n&&n!==i?(e=l.extend(y(t),{currentTarget:n,liveFired:i}),(s||o).apply(n,[e].concat(g.call(arguments,1)))):void 0}),u(i,e,o,n,r,c||s)}))},l.fn.off=function(t,n,e){var i=this;return t&&!x(t)?(l.each(t,function(t,e){i.off(t,n,e)}),i):(x(n)||b(e)||!1===e||(e=n,n=k),!1===e&&(e=D),i.each(function(){m(this,t,e,n)}))},l.fn.trigger=function(t,e){return(t=x(t)||l.isPlainObject(t)?l.Event(t):v(t))._args=e,this.each(function(){t.type in i&&"function"==typeof this[t.type]?this[t.type]():"dispatchEvent"in this?this.dispatchEvent(t):l(this).triggerHandler(t,e)})},l.fn.triggerHandler=function(n,i){var r,o;return this.each(function(t,e){(r=y(x(n)?l.Event(n):n))._args=i,r.target=e,l.each(a(e,n.type||n),function(t,e){return o=e.proxy(r),!r.isImmediatePropagationStopped()&&void 0})}),o},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){l.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),l.Event=function(t,e){x(t)||(t=(e=t).type);var n=document.createEvent(o[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),v(n)}}(fa),function(Di){function Fi(t,e,n,i){return t.global?(r=e||Wi,o=n,a=i,s=Di.Event(o),Di(r).trigger(s,a),!s.isDefaultPrevented()):void 0;var r,o,a,s}function Ii(t,e){var n=e.context;return!1!==e.beforeSend.call(n,t,e)&&!1!==Fi(e,n,"ajaxBeforeSend",[t,e])&&void Fi(e,n,"ajaxSend",[t,e])}function Ji(t,e,n,i){var r=n.context,o="success";n.success.call(r,t,o,e),i&&i.resolveWith(r,[t,o,e]),Fi(n,r,"ajaxSuccess",[e,n,t]),Li(o,e,n)}function Ki(t,e,n,i,r){var o=i.context;i.error.call(o,n,e,t),r&&r.rejectWith(o,[n,e,t]),Fi(i,o,"ajaxError",[n,i,t||e]),Li(e,n,i)}function Li(t,e,n){var i,r=n.context;n.complete.call(r,e,t),Fi(n,r,"ajaxComplete",[e,n]),(i=n).global&&!--Di.active&&Fi(i,null,"ajaxStop")}function Ni(){}function Pi(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function Ri(t,e,n,i){return Di.isFunction(e)&&(i=n,n=e,e=void 0),Di.isFunction(n)||(i=n,n=void 0),{url:t,data:e,success:n,dataType:i}}var Ti,Ui,Vi=+new Date,Wi=ea.document,Xi=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,Yi=/^(?:text|application)\/javascript/i,Zi=/^(?:text|application)\/xml/i,$i="application/json",_i="text/html",aj=/^\s*$/,bj=Wi.createElement("a");bj.href=ea.location.href,Di.active=0,Di.ajaxJSONP=function(n,i){if(!("type"in n))return Di.ajax(n);var r,o,t=n.jsonpCallback,a=(Di.isFunction(t)?t():t)||"Zepto"+Vi++,s=Wi.createElement("script"),c=ea[a],e=function(t){Di(s).triggerHandler("error",t||"abort")},u={abort:e};return i&&i.promise(u),Di(s).on("load error",function(t,e){clearTimeout(o),Di(s).off().remove(),"error"!=t.type&&r?Ji(r[0],u,n,i):Ki(null,e||"error",u,n,i),ea[a]=c,r&&Di.isFunction(c)&&c(r[0]),c=r=void 0}),!1===Ii(u,n)?e("abort"):(ea[a]=function(){r=arguments},s.src=n.url.replace(/\?(.+)=\?/,"?$1="+a),Wi.head.appendChild(s),0<n.timeout&&(o=setTimeout(function(){e("timeout")},n.timeout))),u},Di.ajaxSettings={type:"GET",beforeSend:Ni,success:Ni,error:Ni,complete:Ni,context:null,global:!0,xhr:function(){return new ea.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:$i,xml:"application/xml, text/xml",html:_i,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0,dataFilter:Ni},Di.ajax=function(mk){var nk,ok,Nj,lj,pk=Di.extend({},mk||{}),qk=Di.Deferred&&Di.Deferred();for(Ti in Di.ajaxSettings)void 0===pk[Ti]&&(pk[Ti]=Di.ajaxSettings[Ti]);(lj=pk).global&&0==Di.active++&&Fi(lj,null,"ajaxStart"),pk.crossDomain||((nk=Wi.createElement("a")).href=pk.url,nk.href=nk.href,pk.crossDomain=bj.protocol+"//"+bj.host!=nk.protocol+"//"+nk.host),pk.url||(pk.url=ea.location.toString()),-1<(ok=pk.url.indexOf("#"))&&(pk.url=pk.url.slice(0,ok)),(Nj=pk).processData&&Nj.data&&"string"!=Di.type(Nj.data)&&(Nj.data=Di.param(Nj.data,Nj.traditional)),!Nj.data||Nj.type&&"GET"!=Nj.type.toUpperCase()&&"jsonp"!=Nj.dataType||(Nj.url=Pi(Nj.url,Nj.data),Nj.data=void 0);var rk=pk.dataType,sk=/\?.+=\?/.test(pk.url);if(sk&&(rk="jsonp"),!1!==pk.cache&&(mk&&!0===mk.cache||"script"!=rk&&"jsonp"!=rk)||(pk.url=Pi(pk.url,"_="+Date.now())),"jsonp"==rk)return sk||(pk.url=Pi(pk.url,pk.jsonp?pk.jsonp+"=?":!1===pk.jsonp?"":"callback=?")),Di.ajaxJSONP(pk,qk);var tk,uk=pk.accepts[rk],vk={},wk=function(t,e){vk[t.toLowerCase()]=[t,e]},xk=/^([\w-]+:)\/\//.test(pk.url)?RegExp.$1:ea.location.protocol,yk=pk.xhr(),zk=yk.setRequestHeader;if(qk&&qk.promise(yk),pk.crossDomain||wk("X-Requested-With","XMLHttpRequest"),wk("Accept",uk||"*/*"),(uk=pk.mimeType||uk)&&(-1<uk.indexOf(",")&&(uk=uk.split(",",2)[0]),yk.overrideMimeType&&yk.overrideMimeType(uk)),(pk.contentType||!1!==pk.contentType&&pk.data&&"GET"!=pk.type.toUpperCase())&&wk("Content-Type",pk.contentType||"application/x-www-form-urlencoded"),pk.headers)for(Ui in pk.headers)wk(Ui,pk.headers[Ui]);if(yk.setRequestHeader=wk,!(yk.onreadystatechange=function(){if(4==yk.readyState){yk.onreadystatechange=Ni,clearTimeout(tk);var Dk,Ek=!1;if(200<=yk.status&&yk.status<300||304==yk.status||0==yk.status&&"file:"==xk){if(rk=rk||((Kj=pk.mimeType||yk.getResponseHeader("content-type"))&&(Kj=Kj.split(";",2)[0]),Kj&&(Kj==_i?"html":Kj==$i?"json":Yi.test(Kj)?"script":Zi.test(Kj)&&"xml")||"text"),"arraybuffer"==yk.responseType||"blob"==yk.responseType)Dk=yk.response;else{Dk=yk.responseText;try{Dk=function(t,e,n){if(n.dataFilter==Ni)return t;var i=n.context;return n.dataFilter.call(i,t,e)}(Dk,rk,pk),"script"==rk?eval(Dk):"xml"==rk?Dk=yk.responseXML:"json"==rk&&(Dk=aj.test(Dk)?null:Di.parseJSON(Dk))}catch(t){Ek=t}if(Ek)return Ki(Ek,"parsererror",yk,pk,qk)}Ji(Dk,yk,pk,qk)}else Ki(yk.statusText||null,yk.status?"error":"abort",yk,pk,qk)}var Kj})===Ii(yk,pk))return yk.abort(),Ki(null,"abort",yk,pk,qk),yk;var Ak=!("async"in pk)||pk.async;if(yk.open(pk.type,pk.url,Ak,pk.username,pk.password),pk.xhrFields)for(Ui in pk.xhrFields)yk[Ui]=pk.xhrFields[Ui];for(Ui in vk)zk.apply(yk,vk[Ui]);return 0<pk.timeout&&(tk=setTimeout(function(){yk.onreadystatechange=Ni,yk.abort(),Ki(null,"timeout",yk,pk,qk)},pk.timeout)),yk.send(pk.data?pk.data:null),yk},Di.get=function(){return Di.ajax(Ri.apply(null,arguments))},Di.post=function(){var t=Ri.apply(null,arguments);return t.type="POST",Di.ajax(t)},Di.getJSON=function(){var t=Ri.apply(null,arguments);return t.dataType="json",Di.ajax(t)},Di.fn.load=function(t,e,n){if(!this.length)return this;var i,r=this,o=t.split(/\s/),a=Ri(t,e,n),s=a.success;return 1<o.length&&(a.url=o[0],i=o[1]),a.success=function(t){r.html(i?Di("<div>").html(t.replace(Xi,"")).find(i):t),s&&s.apply(r,arguments)},Di.ajax(a),this};var cj=encodeURIComponent;Di.param=function(t,e){var n=[];return n.add=function(t,e){Di.isFunction(e)&&(e=e()),null==e&&(e=""),this.push(cj(t)+"="+cj(e))},function n(i,t,r,o){var a,s=Di.isArray(t),c=Di.isPlainObject(t);Di.each(t,function(t,e){a=Di.type(e),o&&(t=r?o:o+"["+(c||"object"==a||"array"==a?t:"")+"]"),!o&&s?i.add(e.name,e.value):"array"==a||!r&&"object"==a?n(i,e,r,t):i.add(t,e)})}(n,t,e),n.join("&").replace(/%20/g,"+")}}(fa),(Wk=fa).fn.serializeArray=function(){var n,i,e=[],r=function(t){return t.forEach?t.forEach(r):void e.push({name:n,value:t})};return this[0]&&Wk.each(this[0].elements,function(t,e){i=e.type,(n=e.name)&&"fieldset"!=e.nodeName.toLowerCase()&&!e.disabled&&"submit"!=i&&"reset"!=i&&"button"!=i&&"file"!=i&&("radio"!=i&&"checkbox"!=i||e.checked)&&r(Wk(e).val())}),e},Wk.fn.serialize=function(){var e=[];return this.serializeArray().forEach(function(t){e.push(encodeURIComponent(t.name)+"="+encodeURIComponent(t.value))}),e.join("&")},Wk.fn.submit=function(t){if(0 in arguments)this.bind("submit",t);else if(this.length){var e=Wk.Event("submit");this.eq(0).trigger(e),e.isDefaultPrevented()||this.get(0).submit()}return this},function(){try{getComputedStyle(void 0)}catch(t){var n=getComputedStyle;ea.getComputedStyle=function(t,e){try{return n(t,e)}catch(t){return null}}}}(),fa});