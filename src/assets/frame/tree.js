/**
 * tree.js
 * @version 0.2.3
 * @license MIT
 * @author  mocheer
 */
"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(t,n,i,r,o,a,u,s,c,f,l,d,p,h,v,m){var g=void 0,b=void 0,x=void 0,y=t.addEventListener,E=f.prototype,S=E.hasOwnProperty,k=E.toString,M=Math.PI,w=Math.max,q=Math.min,C=Math.floor,O=Math.ceil,j=Math.random,R=console,A=R.log,D=l.isArray,F=h.now,_=f.assign,L="GET",U="POST",N="YYYY-MM-DD hh:mm:ss",P="init",z="load",I="suspend",B="resume",Y=function(){},$=function(e,t){return S.call(e,t)},Q=function(e){return e instanceof HTMLElement},H=function(e){return null===e||void 0===e},W=function(t){return"object"===(void 0===t?"undefined":e(t))};!function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};t.m=e,t.c=n,t.p="",t(0)}([function(e,n,i){i(1),i(2),i(3),i(4),i(5),i(6),i(7),i(8),i(9),i(11),i(12),i(13),i(14),i(15),i(16),i(17),i(18),i(10),i(19),i(20),g.config=function(e){g.plant(e.mount).store(e.data),e.req&&x.config(e.req),g.Ajax.config(e.ajax),g.assets(g.assets+e.skin),g.router(e.router),g.do("init")},g.plant=function(e){return e&&e.appendChild(g.mount()),g},g.mount=function(e){var t=g,n=t.root,i=t.isString;if(!n){n=g.root=g.div("T "+(g.isMobile()?"MOBILE":"PC"),e);var r=n.style;g.set({width:{set:function(e){r.width=i(e)?e:e+"px"},get:function(){return n.clientWidth}},height:{set:function(e){r.height=i(e)?e:e+"px"},get:function(){return n.clientHeight}}})}return n},g.resize=y.bind(t,"resize");var r=g.assets=function(e){"/"!==e.charAt(e.length-1)&&(e+="/"),r.baseURL=e},o=g.baseURL=g.jsURL();r.baseURL=o+"assets/",r.valueOf=function(){return r.baseURL},g.valueOf=function(){return o},g.helper={fmt:g.fmt,toDate:g.toDate,filter:g.filter,sortOn:g.sortOn}},function(e,t){_||(_=f.assign=function(e){for(var t=arguments.length,n=l(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];for(var r=void 0,o=f(e),a=0,u=n.length;a<u;a++){r=f(n[a]);for(var s in r)$(r,s)&&(o[s]=r[s])}return o})},function(e,t){var n=l.prototype;n.find||(n.find=function(e,t){for(var n=this,i=n.length,r=t||n,o=0,a=void 0;o<i;)if(a=n[o],e.call(r,a,o++,n))return a}),n.includes||(n.includes=function(e,t){return this.indexOf(e,t)>-1})},function(e,t){var n=d.prototype;n.trimLeft||(n.trimLeft=function(){return this.replace(/^\s*/g,"")}),n.trimRight||(n.trimRight=function(){return this.replace(/\s*$/,"")}),n.repeat||(n.repeat=function(e){var t=d(this),n=e?p(e):0,i="";if(n>0&&n!=1/0)for(;n;)n%2==1&&(i+=t),n>1&&(t+=t),n>>=1;return i}),n.includes||(n.includes=function(e,t){return this.indexOf(e,t)>-1})},function(e,t){var n={},i={},r={},o=void 0;g=function(e){function t(t,n,i){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e,t,i){var r=Q(e)?e:n[e];if(W(t)&&(i=t,t="div"),!r&&t){var o=e.lastIndexOf("."),a=o>0?g(e.slice(0,o),"div"):g.mount();r=g.create(t,"",a),n[e]=r}return i&&(g.isString(i)?r.className=i:i.style?g.props(r,i):g.setStyle(r,i)),r}),g.branchs=n,g.leaves=i,g.as=function(e,t){n[e]=t},g.set=function(e){for(var t in e)f.defineProperty(g,t,e[t])},g.remove=function(e){var t=Q(e)?e:n[e];t&&(delete n[e],t.parentNode.removeChild(t))},g.leaf=function(e,t){if(!t)return i[e];i[e]&&A("warn:replace leaf",e),i[e]=t,g.do("lc_"+e,t)},g.data=function(e,t){return W(e)?void 0===t?e._tree_data:void(e._tree_data=t):o(e,t)},g.store=o=function(e,t){if(!e)return r;if(W(e))return _(r,e);var n=r[e];if(void 0===t)return n;r[e]=t,g.do("dc_"+e,{old:n,new:t})}},function(e,t){["FormData","Arguments","Function","String","Number","Date","RegExp","Error","Symbol","Map","WeakMap","Set","WeakSet"].forEach(function(e){g["is"+e]=function(t){return k.call(t)==="[object "+e+"]"}}),b=g.isDate,g.isArray=D,g.isDom=Q},function(e,t){var i=0;g.stamp=function(e){return e._tree_id=e._tree_id||++i},g.toString=g.stamp.toString=function(){return++i+""},g.assign=_,g.include=function(e,t){_(e.prototype,t)},g.extends=function(e){return _(g,e.prototype)},g.random=function(e,t){return e+C(j()*(t-e+1))},g.range=function(e,t,n){null==t&&(t=e||0,e=0),n||(n=t<e?-1:1);for(var i=w(O((t-e)/n),0),r=[],o=0;o<i;o++,e+=n)r[o]=e;return r},g.result=function(e,t,n){t.forEach(function(t){g.isFunction(e[t])&&(e[t]=e[t].apply(null,n))})},g.pick=function(e,t){var n={},i=g.isFunction(t)?t:function(e){return t.includes(e)};return g.each(e,function(e,t){i(t)&&(n[t]=e)}),n},g.each=function(e,t){if(D(e))e.forEach(t);else if(W(e))for(var n=f.keys(e),i=0,r=n.length;i<r;i++)t(e[n[i]],n[i],e);else t(e,0,e)},g.create=function(e,t,i){var r=n.createElement(e);return t&&(r.className=t),i&&i.appendChild(r),r},g.div=g.create.bind(g,"div"),g.addClass=function(e,t){g.splitWords(t).forEach(function(t){e.classList.add(t)})},g.setStyle=function(e,t){var n=e.style;if(g.isString(t))n.cssText+=t;else for(var i in t)n[i]=t[i]},g.getStyle=function(e,t){return getComputedStyle(e,null).getPropertyValue(t)},g.props=function(e,t){var n=void 0;for(n in t)"style"===n?setStyle(e,t[n]):e[n]=t[n]},g.attr=function(e,t){var n=void 0,i=void 0;for(n in t)$(t,n)&&(i=t[n],null!==i?e.setAttribute(n,i+""):e.removeAttribute(n))}},function(e,u){g.isIE=function(){if("ActiveXObject"in t)return/MSIE (\d+)/.test(r.userAgent)?v.$1:11},g.isMobile=function(){return/Android|iPhone|iPad|iPod|Opera Mini/i.test(r.userAgent)},g.cookie=function(e,t,i){if(i=_({expires:1},i),void 0===t){var r=n,u=r.cookie,s=u.indexOf(e+"=");if(-1!=s){s=s+e.length+1;var c=u.indexOf(";",s);return-1==c&&(c=u.length),a(u.substring(s,c))}return""}var f=i,l=f.expires,d=f.path,p=f.domain,v=f.secure,m=e+"="+o(t);l&&(b(l)||(l=new h(F()+864e5*l)),m+=";expires="+l.toUTCString()),d&&(m+="; path="+d),p&&(m+="; domain="+p),v&&(m+="; secure="+v),n.cookie=m},g.delCookie=function(e){cookie(e,"",{expires:-1})},g.searchURL=function(e){var t=g.toUrlVars(i.search);return e?t[e]:t},g.jsURL=function(e){e=e||"tree.";for(var t=n,i=t.scripts,r=0,o=i.length;r<o;r++){var a=i[r].src;if(a.includes(e))return a.substr(0,a.lastIndexOf("/")+1)}},g.fullscreen=function(e){var i=g.root,r=t,o=r.screen,a=i.scrollHeight==o.height&&i.scrollWidth==o.width;void 0===e&&(e=!a),e?i.requestFullscreen?i.requestFullscreen():i.mozRequestFullScreen?i.mozRequestFullScreen():i.webkitRequestFullscreen?i.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):i.msRequestFullscreen&&i.msRequestFullscreen():n.exitFullscreen?n.exitFullscreen():n.mozCancelFullScreen?n.mozCancelFullScreen():n.webkitCancelFullScreen?n.webkitCancelFullScreen():n.msExitFullscreen&&n.msExitFullscreen()}},function(e,t){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(){n(this,e)}return e.config=function(t){_(e.conf,t)},e.dataFilter=function(e,t){var n=e.responseText;switch(t){case"json":try{n=c.parse(n)}catch(e){A(e)}return n;case"jso":n="return "+n;case"jsonp":case"js":return new Function(n)();case"xml":return e.responseXML;case"ini":return g.ini(n)}return n},e.prototype.load=function(t,n,i){g.isString(t)&&(t={url:t,data:n,success:i}),t=_({},e.conf,this.conf,t),t.inject&&t.inject.call(this,t),e.load(t)},e.load=function(e){var t=e.url,n=e.success,r=e.err,a=e.f,u=e.method,s=e.data,f=e.async,l=e.cache,d=e.ctx,p=e.contentType,h=e.dataFilter,v=e.timeout,m=e.beforeSend,b=void 0,x=void 0,y=void 0,E="GET"===u;if(s){if(W(s)&&!g.isFormData(s)){x=[];for(var S in s){var k=s[S];g.isString(k)||(k=c.stringify(k)),x.push(o(S)+"="+o(k))}s=x.join("&")}x=s,E&&(t+=(t.indexOf("?")>0?"&":"?")+x,x=null)}y=0===t.indexOf("http"),y||"/"===t[0]||(t=e.baseUrl+t),y&&g.isIE()<10&&!t.includes(i.host)&&"undefined"!=typeof XDomainRequest?(b=new XDomainRequest,b.onload=function(){n.call(d,h(b,a))},b.onerror=function(){r.call(d,b)},b.open(u,t),m(b,e),b.send(x)):(b=new XMLHttpRequest,b.onreadystatechange=function(){4===b.readyState&&(200===b.status?n.call(d,h(b,a)):(r.call(d,b),A("error:ajax in"+t)))},b.open(u,t,f),E&&!l&&b.setRequestHeader("If-Modified-Since","0"),x&&p&&b.setRequestHeader("Content-Type",p),v&&(b.timeout=v),m(b,e),b.send(x))},e}();r.conf={baseUrl:"",method:"GET",async:!0,cache:!0,dataFilter:r.dataFilter,success:Y,err:Y,beforeSend:Y,contentType:"application/x-www-form-urlencoded"};var a=new r;g.Ajax=r,g.ajax=function(e){a.load(e)},g.get=function(e){e.method="GET",a.load(e)},g.post=function(e){e.method="POST",a.load(e)},g.getJSON=function(e,t,n,i){a.load({url:e,data:t,success:n||Y,err:i||Y,f:"json"})}},function(e,n,r){r(10);var o=g.router=g.one(function(e){var n=o.ways=[],r=o.path="/",a=i,u=a.hash,s=function(){var e=i.hash.slice(1)||i.search.slice(1)||r,t=e.split("?"),a=o.path,u=t[0],s=o.data={};t[1]&&t[1].split("&").forEach(function(e){e=e.split("="),s[e[0]]=e[1]}),o.path=u,n.forEach(function(e){var t=e.path;if("/"===t||0===u.indexOf(t)&&(t.length==u.length||"/"==u.charAt(t.length))){var n=e.last,i=e.options,r=i.once,o=i.on,s=i.deps,c=i.leaf,f=function(t){var n=arguments;[r,o].forEach(function(e){e&&(g.isFunction(e)?e.apply(i,n):t&&t[e]&&t[e]())});var a=e.branch=e.branch||g.add(c);a&&a.resume(),i.once=null,e.init=!0,e.do("init")},l=function(){g.isString(s)&&(s=[s]),s&&x(s,f)||f()};n&&!n.init?n.on("init",l):l()}else if(0===a.indexOf(t)){var d=e.exit,p=e.branch;d&&d(),p&&p.suspend()}})};return o.map=function(e){if(e){!function e(t,i){var r=t.path,o=t.children,a=new g.Action;a.path=r,a.last=i,a.options=t,n.push(a),o&&o.forEach(function(t){"/"!==r&&(t.path=r+t.path),e(t,a)})}(e),g.sortOn(n,["path"])}return o},e&&(o.map({path:"/leaf",on:function(){e.branch&&e.branch.suspend(),e.branch=T.add(o.path.slice(1))}}).map(e.route),!u&&e.go&&(i.hash=e.go)),s(),y.call(t,"hashchange",s),o})},function(e,t){var n=void 0;g.defer=function(e){var t=F(),i=w(0,16-(t-(n||t)));return n=t+i,u(e,i)},g.before=function(e,t){var n=void 0;return function(){return--e>0?n=t.apply(this,arguments):t=null,n}},g.after=function(e,t){return function(){return--e<1&&t.apply(this,arguments)}},g.one=g.before.bind(g,2),g.throttle=function(e,t){var n=void 0,i=void 0,r=void 0,o=void 0,a=0;t||(t={});var c=t,f=c.wait,l=c.leading,d=c.trailing;f=void 0===f?1e3:f;var p=function(){a=!1===l?0:F(),n=null,o=e.apply(i,r),n||(i=r=null)},h=function(){var t=F();a||!1!==l||(a=t);var c=f-(t-a);return i=this,r=arguments,c<=0||c>f?(n&&(s(n),n=null),a=t,o=e.apply(i,r),n||(i=r=null)):!n&&d&&(n=u(p,c)),o};return h.cancel=function(){s(n),a=0,n=i=r=null},h}},function(e,t){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(){n(this,e)}return e.prototype.on=function(e,t){var n=this;return g.isString(e)&&t?g.splitWords(e).forEach(function(e){n._on(e,t)}):g.each(e,function(e,t){n._on(t,e)}),n},e.prototype.once=function(e,t){var n=this;return this.on(e,t).on(e,function(){n.off(e,t)})},e.prototype._on=function(e,t){var n=this,i=n.listeners=n.listeners||{};n.hook&&n.hook(e,t),i=i[e]=i[e]||[],t&&!i.includes(t)&&i.push(t)},e.prototype.do=function(e,t){var n=this.listeners;n&&(n=n[e])&&n.forEach(function(e){e(t)})},e.prototype.off=function(e,t){var n=this;if(!e)return void delete n.listeners;if(g.isString(e)){e=g.splitWords(e);for(var i=0,r=e.length;i<r;i++)n._off(e[i],t)}else for(var o in e)n._off(o,e[o])},e.prototype._off=function(e,t){var n=this,i=n.listeners;if(!t)return void delete i[e];if(i=i[e])for(var r=0,o=i.length;r<o;r++)if(i[r]===t)return void i.splice(r,1)},e}();g.extends(i).Action=i},function(e,t){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=g.toDate=function(e){if(e){if("string"!=typeof e)return new h(e);var t=e.indexOf("T")>0?"T":" ",n=e.split(t),i=n[0].split("-"),r=n[1]&&n[1].split(":")||[0,0,0];return new h(i[0],i[1]-1,i[2],r[0],r[1],r[2]&&r[2].slice(0,2)||0)}},r=function(e,t){if(e){t=t||"YYYY-MM-DD hh:mm:ss";var n={"M+":e.getMonth()+1,"D+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),S:e.getMilliseconds()};/(Y+)/.test(t)&&(t=t.replace(v.$1,(e.getFullYear()+"").substr(4-v.$1.length)));for(var i in n)$(n,i)&&new v("("+i+")").test(t)&&(t=t.replace(v.$1,1==v.$1.length?n[i]:("00"+n[i]).substr((""+n[i]).length)))}return t},o=function e(t){n(this,e),a.call(this),this.date=i(t||F())};o.parse=i,o.fmt=r,o.getYears=function(e,t){return g.range(e,t||(new h).getFullYear()+1)},o.getMonths=function(){return g.range(0,12)},o.sub=function(e,t){return+i(e)-+i(t)};var a=function(){var e=this;this.add=function(t){return new h(+e.date+t)},this.addHour=function(t){return e.add(36e5*t)},this.addDay=function(t){return e.addHour(24*t)},this.fmt=function(t){return r(e.date,t)},this.toString=function(){return e.fmt()}};g.Clock=o,g.clock=function(e){return new o(e||g.data("now"))},g.now=F},function(e,t){var i=void 0,r=function(){var e=g.create("style","",n.head);return e.type="text/css",e},o=g.style=function(e,t){if(!g.isString(e)){var o=[];g.each(e,function(e,t){o.push(t+" {"),g.each(e,function(e,t){o.push(t+": "+e+";")}),o.push("}")}),e=o.join("")}return(t||(i=i||r())).appendChild(n.createTextNode(e))};o.sheet=function(e){return function(t,n){return o(t,e=e||r())}}},function(e,t){g.ini=function(e){var t={},n=void 0;return e.split(/\r|\n/).filter(function(e){return e&&!/^[;|#]/gi.test(e)}).forEach(function(e){if(/^\[.*\]$/.test(e))n=e.replace(/\[|\]/g,"");else{var i=e.split("=");(t[n]||(t[n]={}))[d(i[0]).trim()]=d(i[1]).trim()}}),t}},function(e,i,o){(function(e){var i=g,o=i.isFunction,a=t,s=a.require,c=a.define,f=a.requirejs;!function(){function i(e,t){return t||""}function a(e,t){if(e){var n;for(n=0;n<e.length&&(!e[n]||!t(e[n],n,e));n+=1);}}function l(e,t){if(e){var n;for(n=e.length-1;n>-1&&(!e[n]||!t(e[n],n,e));n-=1);}}function d(e,t){return $(e,t)&&e[t]}function p(e,t){var n;for(n in e)if($(e,n)&&t(e[n],n))break}function m(e,t,n,i){return t&&p(t,function(t,r){!n&&$(e,r)||(!(i&&W(t)&&t)||D(t)||o(t)||t instanceof v?e[r]=t:(e[r]||(e[r]={}),m(e[r],t,n,i)))}),e}function g(e,t){return function(){return t.apply(e,arguments)}}function b(){return n.getElementsByTagName("script")}function x(e){throw e}function y(e){var n=t;return e?(a(e.split("."),function(e){n=n[e]}),n):e}function E(e,t,n,i){var r=new Error(t+"\nhttp://requirejs.org/docs/errors.html#"+e);return r.requireType=e,r.requireModules=i,n&&(r.originalError=n),r}function S(t){function n(e){var t,n;for(t=0;t<e.length;t++)if("."===(n=e[t]))e.splice(t,1),t-=1;else if(".."===n){if(0===t||1===t&&".."===e[2]||".."===e[t-1])continue;t>0&&(e.splice(t-1,2),t-=2)}}function i(e,t,i){var r,o,a,u,s,c,f,l,p,h,v,m=t&&t.split("/"),g=W.map,b=g&&g["*"];if(e&&(e=e.split("/"),c=e.length-1,W.nodeIdCompat&&N.test(e[c])&&(e[c]=e[c].replace(N,"")),"."===e[0].charAt(0)&&m&&(v=m.slice(0,m.length-1),e=v.concat(e)),n(e),e=e.join("/")),i&&g&&(m||b)){o=e.split("/");e:for(a=o.length;a>0;a-=1){if(s=o.slice(0,a).join("/"),m)for(u=m.length;u>0;u-=1)if((r=d(g,m.slice(0,u).join("/")))&&(r=d(r,s))){f=r,l=a;break e}!p&&b&&d(b,s)&&(p=d(b,s),h=a)}!f&&p&&(f=p,l=h),f&&(o.splice(0,l,f),e=o.join("/"))}return d(W.pkgs,e)||e}function r(e){z&&a(b(),function(t){if(t.getAttribute("data-requiremodule")===e&&t.getAttribute("data-requirecontext")===U.contextName)return t.parentNode.removeChild(t),!0})}function s(e){var t=d(W.paths,e);if(t&&D(t)&&t.length>1)return t.shift(),U.require.undef(e),U.makeRequire(null,{skipMap:!0})([e]),!0}function c(e){var t,n=e?e.indexOf("!"):-1;return n>-1&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function f(e,t,n,r){var o,a,u,s,f=null,l=t?t.name:null,p=e,h=!0,v="";return e||(h=!1,e="_@r"+(ie+=1)),s=c(e),f=s[0],e=s[1],f&&(f=i(f,l,r),a=d(ee,f)),e&&(f?v=n?e:a&&a.normalize?a.normalize(e,function(e){return i(e,l,r)}):-1===e.indexOf("!")?i(e,l,r):e:(v=i(e,l,r),s=c(v),f=s[0],v=s[1],n=!0,o=U.nameToUrl(v))),u=!f||a||n?"":"_unnormalized"+(re+=1),{prefix:f,name:v,parentMap:t,unnormalized:!!u,url:o,originalName:p,isDefine:h,id:(f?f+"!"+v:v)+u}}function v(e){var t=e.id,n=d(X,t);return n||(n=X[t]=new U.Module(e)),n}function S(e,t,n){var i=e.id,r=d(X,i);!$(ee,i)||r&&!r.defineEmitComplete?(r=v(e),r.error&&"error"===t?n(r.error):r.on(t,n)):"defined"===t&&n(ee[i])}function k(e,t){var n=e.requireModules,i=!1;t?t(e):(a(n,function(t){var n=d(X,t);n&&(n.error=e,n.events.error&&(i=!0,n.emit("error",e)))}),i||M.onError(e))}function w(){G.length&&(a(G,function(e){var t=e[0];"string"==typeof t&&(U.defQueueMap[t]=!0),Z.push(e)}),G=[])}function q(e){delete X[e],delete V[e]}function T(e,t,n){var i=e.map.id;e.error?e.emit("error",e.error):(t[i]=!0,a(e.depMaps,function(i,r){var o=i.id,a=d(X,o);!a||e.depMatched[r]||n[o]||(d(t,o)?(e.defineDep(r,ee[o]),e.check()):T(a,t,n))}),n[i]=!0)}function C(){var e,t,n=1e3*W.waitSeconds,i=n&&U.startTime+n<(new h).getTime(),o=[],c=[],f=!1,l=!0;if(!_){if(_=!0,p(V,function(e){var n=e.map,a=n.id;if(e.enabled&&(n.isDefine||c.push(e),!e.error))if(!e.inited&&i)s(a)?(t=!0,f=!0):(o.push(a),r(a));else if(!e.inited&&e.fetched&&n.isDefine&&(f=!0,!n.prefix))return l=!1}),i&&o.length)return e=E("timeout","Load timeout for modules: "+o,null,o),e.contextName=U.contextName,k(e);l&&a(c,function(e){T(e,{},{})}),i&&!t||!f||!z&&!I||H||(H=u(function(){H=0,C()},50)),_=!1}}function O(e){$(ee,e[0])||v(f(e[0],null,!0)).init(e[1],e[2])}function R(e,t,n,i){e.detachEvent&&!Q?i&&e.detachEvent(i,t):e.removeEventListener(n,t,!1)}function A(e){var t=e.currentTarget||e.srcElement;return R(t,U.onScriptLoad,"load","onreadystatechange"),R(t,U.onScriptError,"error"),{node:t,id:t&&t.getAttribute("data-requiremodule")}}function F(){var e;for(w();Z.length;){if(e=Z.shift(),null===e[0])return;O(e)}U.defQueueMap={}}var _,L,U,Y,H,W={waitSeconds:7,baseUrl:"./",paths:{},bundles:{},pkgs:{},shim:{},config:{}},X={},V={},K={},Z=[],ee={},te={},ne={},ie=1,re=1;return Y={require:function(e){return e.require?e.require:e.require=U.makeRequire(e.map)},exports:function(e){if(e.usingExports=!0,e.map.isDefine)return e.exports?ee[e.map.id]=e.exports:e.exports=ee[e.map.id]={}},module:function(e){return e.module?e.module:e.module={id:e.map.id,uri:e.map.url,config:function(){return d(W.config,e.map.id)||{}},exports:e.exports||(e.exports={})}}},L=function(e){this.events=d(K,e.id)||{},this.map=e,this.shim=d(W.shim,e.id),this.depExports=[],this.depMaps=[],this.depMatched=[],this.pluginMaps={},this.depCount=0},L.prototype={init:function(e,t,n,i){i=i||{},this.inited||(this.factory=t,n?this.on("error",n):this.events.error&&(n=g(this,function(e){this.emit("error",e)})),this.depMaps=e&&e.slice(0),this.errback=n,this.inited=!0,this.ignore=i.ignore,i.enabled||this.enabled?this.enable():this.check())},defineDep:function(e,t){this.depMatched[e]||(this.depMatched[e]=!0,this.depCount-=1,this.depExports[e]=t)},fetch:function(){if(!this.fetched){this.fetched=!0,U.startTime=(new h).getTime();var e=this.map;if(!this.shim)return e.prefix?this.callPlugin():this.load();U.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],g(this,function(){return e.prefix?this.callPlugin():this.load()}))}},load:function(){var e=this.map.url;te[e]||(te[e]=!0,U.load(this.map.id,e))},check:function(){if(this.enabled&&!this.enabling){var e,t,n=this.map.id,i=this.depExports,r=this.exports,u=this.factory;if(this.inited){if(this.error)this.emit("error",this.error);else if(!this.defining){if(this.defining=!0,this.depCount<1&&!this.defined){if(o(u)){if(this.events.error&&this.map.isDefine||M.onError!==x)try{r=U.execCb(n,u,i,r)}catch(t){e=t}else r=U.execCb(n,u,i,r);if(this.map.isDefine&&void 0===r&&(t=this.module,t?r=t.exports:this.usingExports&&(r=this.exports)),e)return e.requireMap=this.map,e.requireModules=this.map.isDefine?[this.map.id]:null,e.requireType=this.map.isDefine?"define":"require",k(this.error=e)}else r=u;if(this.exports=r,this.map.isDefine&&!this.ignore&&(ee[n]=r,M.onResourceLoad)){var s=[];a(this.depMaps,function(e){s.push(e.normalizedMap||e)}),M.onResourceLoad(U,this.map,s)}q(n),this.defined=!0}this.defining=!1,this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}}else $(U.defQueueMap,n)||this.fetch()}},callPlugin:function(){var e=this.map,t=e.id,n=f(e.prefix);this.depMaps.push(n),S(n,"defined",g(this,function(n){var r,o,a,u=d(ne,this.map.id),s=this.map.name,c=this.map.parentMap?this.map.parentMap.name:null,l=U.makeRequire(e.parentMap,{enableBuildCallback:!0});return this.map.unnormalized?(n.normalize&&(s=n.normalize(s,function(e){return i(e,c,!0)})||""),o=f(e.prefix+"!"+s,this.map.parentMap,!0),S(o,"defined",g(this,function(e){this.map.normalizedMap=o,this.init([],function(){return e},null,{enabled:!0,ignore:!0})})),void((a=d(X,o.id))&&(this.depMaps.push(o),this.events.error&&a.on("error",g(this,function(e){this.emit("error",e)})),a.enable()))):u?(this.map.url=U.nameToUrl(u),void this.load()):(r=g(this,function(e){this.init([],function(){return e},null,{enabled:!0})}),r.error=g(this,function(e){this.inited=!0,this.error=e,e.requireModules=[t],p(X,function(e){0===e.map.id.indexOf(t+"_unnormalized")&&q(e.map.id)}),k(e)}),r.fromText=g(this,function(n,i){var o=e.name,a=f(o),u=J;i&&(n=i),u&&(J=!1),v(a),$(W.config,t)&&(W.config[o]=W.config[t]);try{M.exec(n)}catch(e){return k(E("fromtexteval","fromText eval for "+t+" failed: "+e,e,[t]))}u&&(J=!0),this.depMaps.push(a),U.completeLoad(o),l([o],r)}),void n.load(e.name,l,r,W))})),U.enable(n,this),this.pluginMaps[n.id]=n},enable:function(){V[this.map.id]=this,this.enabled=!0,this.enabling=!0,a(this.depMaps,g(this,function(e,t){var n,i,r;if("string"==typeof e){if(e=f(e,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap),this.depMaps[t]=e,r=d(Y,e.id))return void(this.depExports[t]=r(this));this.depCount+=1,S(e,"defined",g(this,function(e){this.undefed||(this.defineDep(t,e),this.check())})),this.errback?S(e,"error",g(this,this.errback)):this.events.error&&S(e,"error",g(this,function(e){this.emit("error",e)}))}n=e.id,i=X[n],$(Y,n)||!i||i.enabled||U.enable(e,this)})),p(this.pluginMaps,g(this,function(e){var t=d(X,e.id);t&&!t.enabled&&U.enable(e,this)})),this.enabling=!1,this.check()},on:function(e,t){var n=this.events[e];n||(n=this.events[e]=[]),n.push(t)},emit:function(e,t){a(this.events[e],function(e){e(t)}),"error"===e&&delete this.events[e]}},U={config:W,contextName:t,registry:X,defined:ee,urlFetched:te,defQueue:Z,defQueueMap:{},Module:L,makeModuleMap:f,nextTick:M.nextTick,onError:k,configure:function(e){if(e.baseUrl&&"/"!==e.baseUrl.charAt(e.baseUrl.length-1)&&(e.baseUrl+="/"),"string"==typeof e.urlArgs){var t=e.urlArgs;e.urlArgs=function(e,n){return(-1===n.indexOf("?")?"?":"&")+t}}var n=W.shim,i={paths:!0,bundles:!0,config:!0,map:!0};p(e,function(e,t){i[t]?(W[t]||(W[t]={}),m(W[t],e,!0,!0)):W[t]=e}),e.bundles&&p(e.bundles,function(e,t){a(e,function(e){e!==t&&(ne[e]=t)})}),e.shim&&(p(e.shim,function(e,t){D(e)&&(e={deps:e}),!e.exports&&!e.init||e.exportsFn||(e.exportsFn=U.makeShimExports(e)),n[t]=e}),W.shim=n),e.packages&&a(e.packages,function(e){var t,n;e="string"==typeof e?{name:e}:e,n=e.name,t=e.location,t&&(W.paths[n]=e.location),W.pkgs[n]=e.name+"/"+(e.main||"main").replace(P,"").replace(N,"")}),p(X,function(e,t){e.inited||e.map.unnormalized||(e.map=f(t,null,!0))}),(e.deps||e.callback)&&U.require(e.deps||[],e.callback)},makeShimExports:function(t){function n(){var n;return t.init&&(n=t.init.apply(e,arguments)),n||t.exports&&y(t.exports)}return n},makeRequire:function(e,n){function a(i,r,u){var s,c,l;return n.enableBuildCallback&&r&&o(r)&&(r.__requireJsBuild=!0),"string"==typeof i?o(r)?k(E("requireargs","Invalid require call"),u):e&&$(Y,i)?Y[i](X[e.id]):M.get?M.get(U,i,e,a):(c=f(i,e,!1,!0),s=c.id,$(ee,s)?ee[s]:k(E("notloaded",'Module name "'+s+'" has not been loaded yet for context: '+t+(e?"":". Use require([])")))):(F(),U.nextTick(function(){F(),l=v(f(null,e)),l.skipMap=n.skipMap,l.init(i,r,u,{enabled:!0}),C()}),a)}return n=n||{},m(a,{isBrowser:z,toUrl:function(t){var n,r=t.lastIndexOf("."),o=t.split("/")[0],a="."===o||".."===o;return-1!==r&&(!a||r>1)&&(n=t.substring(r,t.length),t=t.substring(0,r)),U.nameToUrl(i(t,e&&e.id,!0),n,!0)},defined:function(t){return $(ee,f(t,e,!1,!0).id)},specified:function(t){return t=f(t,e,!1,!0).id,$(ee,t)||$(X,t)}}),e||(a.undef=function(t){w();var n=f(t,e,!0),i=d(X,t);i.undefed=!0,r(t),delete ee[t],delete te[n.url],delete K[t],l(Z,function(e,n){e[0]===t&&Z.splice(n,1)}),delete U.defQueueMap[t],i&&(i.events.defined&&(K[t]=i.events),q(t))}),a},enable:function(e){d(X,e.id)&&v(e).enable()},completeLoad:function(e){var t,n,i,r=d(W.shim,e)||{},o=r.exports;for(w();Z.length;){if(n=Z.shift(),null===n[0]){if(n[0]=e,t)break;t=!0}else n[0]===e&&(t=!0);O(n)}if(U.defQueueMap={},i=d(X,e),!t&&!$(ee,e)&&i&&!i.inited){if(!(!W.enforceDefine||o&&y(o)))return s(e)?void 0:k(E("nodefine","No define call for "+e,null,[e]));O([e,r.deps||[],r.exportsFn])}C()},nameToUrl:function(e,t,n){var i,r,o,a,u,s,c,f=d(W.pkgs,e);if(f&&(e=f),c=d(ne,e))return U.nameToUrl(c,t,n);if(M.jsExtRegExp.test(e))u=e+(t||"");else{for(i=W.paths,r=e.split("/"),o=r.length;o>0;o-=1)if(a=r.slice(0,o).join("/"),s=d(i,a)){D(s)&&(s=s[0]),r.splice(0,o,s);break}u=r.join("/"),u+=t||(/^data\:|^blob\:|\?/.test(u)||n?"":".js"),u=("/"===u.charAt(0)||u.match(/^[\w\+\.\-]+:/)?"":W.baseUrl)+u}return W.urlArgs&&!/^blob\:/.test(u)?u+W.urlArgs(e,u):u},load:function(e,t){M.load(U,e,t)},execCb:function(e,t,n,i){return t.apply(i,n)},onScriptLoad:function(e){if("load"===e.type||B.test((e.currentTarget||e.srcElement).readyState)){j=null;var t=A(e);U.completeLoad(t.id)}},onScriptError:function(e){var t=A(e);if(!s(t.id)){var n=[];return p(X,function(e,i){0!==i.indexOf("_@r")&&a(e.depMaps,function(e){if(e.id===t.id)return n.push(i),!0})}),k(E("scripterror",'Script error for "'+t.id+(n.length?'", needed by: '+n.join(", "):'"'),e,[t.id]))}}},U.require=U.makeRequire(),U}function k(){return j&&"interactive"===j.readyState?j:(l(b(),function(e){if("interactive"===e.readyState)return j=e}),j)}var M=void 0,w=void 0,q=void 0,T=void 0,C=void 0,O=void 0,j=void 0,R=void 0,A=void 0,F=void 0,_="2.3.3",L=/\/\*[\s\S]*?\*\/|([^:"'=]|^)\/\/.*$/gm,U=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,N=/\.js$/,P=/^\.\//,z=!(void 0===t||void 0===r||!t.document),I=!z&&"undefined"!=typeof importScripts,B=z&&"PLAYSTATION 3"===r.platform?/^complete$/:/^(complete|loaded)$/,Y="_",Q="undefined"!=typeof opera&&"[object Opera]"===opera.toString(),H={},X={},G=[],J=!1;if(void 0===c){if(void 0!==f){if(o(f))return;X=f,f=void 0}void 0===s||o(s)||(X=s,s=void 0),M=f=function(e,t,n,i){var r,o,a="_";return D(e)||"string"==typeof e||(o=e,D(t)?(e=t,t=n,n=i):e=[]),o&&o.context&&(a=o.context),r=d(H,a),r||(r=H[a]=M.s.newContext(a)),o&&r.configure(o),r.require(e,t,n)},M.config=function(e){return M(e)},M.nextTick=void 0!==u?function(e){u(e,4)}:function(e){e()},s||(s=M),M.version="2.3.3",M.jsExtRegExp=/^\/|:|\?|\.js$/,M.isBrowser=z,w=M.s={contexts:H,newContext:S},M({}),a(["toUrl","undef","defined","specified"],function(e){M[e]=function(){var t=H._;return t.require[e].apply(t,arguments)}}),z&&(q=w.head=n.head,(T=n.getElementsByTagName("base")[0])&&(q=w.head=T.parentNode)),M.onError=x,M.createNode=function(e,t,i){var r=e.xhtml?n.createElementNS("http://www.w3.org/1999/xhtml","html:script"):n.createElement("script");return r.type=e.scriptType||"text/javascript",r.charset="utf-8",r.async=!0,r},M.load=function(e,t,n){var i,r=e&&e.config||{};if(z)return i=M.createNode(r,t,n),i.setAttribute("data-requirecontext",e.contextName),i.setAttribute("data-requiremodule",t),!i.attachEvent||i.attachEvent.toString&&i.attachEvent.toString().indexOf("[native code")<0||Q?(i.addEventListener("load",e.onScriptLoad,!1),i.addEventListener("error",e.onScriptError,!1)):(J=!0,i.attachEvent("onreadystatechange",e.onScriptLoad)),i.src=n,r.onNodeCreated&&r.onNodeCreated(i,r,t,n),R=i,T?q.insertBefore(i,T):q.appendChild(i),R=null,i;if(I)try{u(function(){},0),importScripts(n),e.completeLoad(t)}catch(i){e.onError(E("importscripts","importScripts failed for "+t+" at "+n,i,[t]))}},z&&!X.skipDataMain&&l(b(),function(e){if(q||(q=e.parentNode),C=e.getAttribute("data-main"))return A=C,X.baseUrl||-1!==A.indexOf("!")||(O=A.split("/"),A=O.pop(),F=O.length?O.join("/")+"/":"./",X.baseUrl=F),A=A.replace(N,""),M.jsExtRegExp.test(A)&&(A=C),X.deps=X.deps?X.deps.concat(A):[A],!0}),c=function(e,t,n){var r,a;"string"!=typeof e&&(n=t,t=e,e=null),D(t)||(n=t,t=null),!t&&o(n)&&(t=[],n.length&&(n.toString().replace(/\/\*[\s\S]*?\*\/|([^:"'=]|^)\/\/.*$/gm,i).replace(/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,function(e,n){t.push(n)}),t=(1===n.length?["require"]:["require","exports","module"]).concat(t))),J&&(r=R||k())&&(e||(e=r.getAttribute("data-requiremodule")),a=H[r.getAttribute("data-requirecontext")]),a?(a.defQueue.push([e,t,n]),a.defQueueMap[e]=!0):G.push([e,t,n])},c.amd={jQuery:!0},M.exec=function(e){return eval(e)},M(X)}}(),g.require=t.require=x=f,g.define=t.define=c}).call(i,function(){return this}())},function(e,t){var n=function(e){return e.filter(function(e){return e||0===e})};g.find=function(e,t){return e.find(function(e){for(var n in t)if(t[n]!==e[n])return!1;return!0})},g.toTree=function(e,t){return function e(t,n){var i=n.shift(),r=void 0,o=void 0,a=void 0,u=t.length,s=[],c=void 0,f=void 0;for(r=0;r<u;r++)o=t[r],a=o[i],c=find(t,a),c||(c={children:[]},s.push(c)),f=c.children,f.push(o);if(n.length>0)for(u=s.length,r=0;r<u;r++)c=s[r],c.children=e(c.children,n.contact());return s}(e,t)},g.filter=function(e,t){var n=t.col,i=t.rel,r=t.val,o=void 0;switch(i){case"=":o=function(e){return e[n]==r};break;case"!":o=function(e){return e[n]!=r};break;case"inner":o=function(e){return e[n]&&-1!=e[n].indexOf(r)};break;case"in":o=function(e){return-1!=r.indexOf(e[r])};break;case">":o=function(e){return e[r]&&e[r]>r};break;case">=":o=function(e){return e[r]&&e[r]>=r};break;case"<":o=function(e){return e[r]&&e[r]<r};break;case"<=":o=function(e){return e[r]&&e[r]<=r}}return e.filter(o)},g.sortOn=function(e,t){"string"==typeof t&&(t=[t]),D(t)&&(t={fields:t});var n=t.desc||1,i=t,r=i.fields,o=void 0,a=r.length,u=function e(t,i,u){u=u||0,o=r[u];var s=t[o],c=i[o];return H(s)?1:H(c)?-1:s<c?-1*n:s>c?n:++u<a?e(t,i,u):0};return e.sort(u)},g.max=function(e){return w.apply(Math,n(e))},g.min=function(e){return q.apply(Math,n(e))}},function(e,t){g.toPercent=function(e,t){return(100*e).toFixed(t)+"%"},g.toRadians=function(e){return e*M/180},g.toDegrees=function(e){return 180*e/M}},function(e,t){g.fmtDate=function(e,t){return e.replace(/\{([^}]+)\}/g,function(e,n){return g.Clock.fmt(t,n)})},g.fmtObj=function(e,t){return e.replace(/\{([^}]+)\}/g,function(e,n){return 0===(n=t[n])?"0":n||""})},g.fmt=function(e,t){return e?b(e)?g.Clock.fmt(e,t):e.replace(/\{([^}]+)\}/g,function(e,n){var i=t;if(n in i)i=i[n];else for(var r=n.split(".");r.length>0;)if((n=r.shift())in i)i=i[n];else{var o=n.split(":"),a=i[o[0]];if(!a)return"";i=a.apply(i,o[1].split(","))}return""+i}):""},g.toUrlVars=function(e){var t={},n=void 0;if(e=e.replace("?","")){n=e.split("&");for(var i,r=0,o=n.length;r<o;r++)i=n[r].split("="),t[a(i[0])]=a(i[1])}return t},g.splitWords=function(e){return e.trim().split(/\s+/)},g.toCamelCase=function(e){return e.replace(/-+(.)?/g,function(e,t){return t?t.toUpperCase():""})},g.toSnakeCase=function(e){return e.replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase()})}},function(e,n){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=f.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(f.setPrototypeOf?f.setPrototypeOf(e,t):e.__proto__=t)}var a=void 0,u=void 0;g.Branch=function(e){function n(t){i(this,n);var o=r(this,e.call(this));return o.config(t),o}return o(n,e),n.prototype.config=function(e){if(e){var t=g,n=t.isString,i=g.data("leaf"),r=i&&i.paths||{}
;e=this.options=function e(t){if(D(t))return{fork:t.map(e)};var i=t;return n(t)&&((i=r[t])?(n(i)&&(i=[i]),D(i)&&(i={mount:t,deps:i})):i={deps:[t]}),i.fork=i.fork&&i.fork.map(e),i}(e),this.on("load",e.callback)}},n.prototype.suspend=function(){var e=this.leaf,t=this.fork;e&&e.suspend&&e.suspend(),t&&t.forEach(function(e){e.suspend()}),this.suspended=!0,this.do("suspend")},n.prototype.resume=function(){if(this.suspended){var e=this.leaf,t=this.fork;e&&e.resume(),t&&t.forEach(function(e){e.resume()}),this.suspended=!1,this.do("resume")}},n.prototype.loadDeps=function(){var e=this;if(a&&u)return!0;var n=g.data("leaf");n&&x(n.deps,function(n,i){a=t.React=t.react=n,u=t.ReactDOM=t["react-dom"]=i,e.load()})},n.prototype.load=function(){var e=this;if(this.loadDeps()){var t=this.options;if(!t)return;var n=t.deps,i=t.fork,r=function(){if(!e.fork&&i){var t=i.length;e.fork=i.map(function(n){return new g.Branch(n).load().on("load",function(){0==--t&&e.do("load")})})}else e.do("load")};n?x(n,function(n,i){if(n){var o=t.children,u=function(t){var r=t.mount,o=t.props,u=t.layout,s=n[t.module]||n;s.__esModule&&(s=s.default),s.prototype.isReactComponent&&(r=e.mount=r||d(g),o=_({T:g,branch:e,conf:i},o),s=e._leaf=a.createElement(s,o),e.suspended?e.on("resume",function(){g.render(r,s,u)}):e.leaf=g.render(r,s,u))};g.each(o||[t],u)}r()}):r()}return this},n}(g.Action),g.setState=function(e,t){e=g.leaves[e]&&e.isReactComponent&&e.setState(t)},g.render=function(e,t,n){var i=g,r=(i.isArray,void 0),o=void 0;return t||n||(t=e,e=d(g)),g.isString(e)?r=g(e,"div",n):(r=e,e=g.stamp(e)),o=u.render(t,r),g.leaf(e,o),o}},function(e,t){g.add=function(e,t){return new g.Branch(e).on("load",t).load()},g.audio=function(e){x([g+"widgets/audio.js"],function(){g.do("audio-start",e)})}}]),t.T=g}(self,document,location,navigator,encodeURIComponent,decodeURIComponent,setTimeout,clearTimeout,JSON,Object,Array,String,Number,Date,RegExp,isNaN);