try{!function(t,o,r,i){"use strict";function e(){}function a(e,n,t){var r=e[n];e[n]=function(){var e=r.apply(this,arguments);return t.apply(this,arguments),e}}function n(){t.obApi.dispatch.apply(t.obApi,arguments)}var c="//tr.outbrain.com",s="PAGE_VIEW",u="product";n.version=t.obApi.version,n.loaded=t.obApi.loaded,n.marketerId=t.obApi.marketerId,n.queue=t.obApi.queue;var d=t.obApi=n;d.obtpVersion="1.3.1";var p,m,f,l,v,h,w,b,g,y,_,A,I,E={get:function(e){if(!document.cookie)return"";var n="";try{n=decodeURIComponent(document.cookie)}catch(e){}var t=n.indexOf(e+"=");if(t<0)return"";var r=t+(e+"=").length,o=n.indexOf(";",r),i=0<o?o:document.cookie.length;return n.substring(r,i)},set:function(e,n,t,r){var o=new Date;o.setTime(o.getTime()+24*t*60*60*1e3);var i="expires="+o.toUTCString(),a=encodeURIComponent(e)+"="+encodeURIComponent(n)+"; "+i+"; path=/;";r&&(a+="domain="+r+";"),document.cookie=a}},R=(l=f=!(m=[]),v=function(e,n){var t=e.name===s;e.contentType===u&&n&&y(e),h(100)?w.apply(null,arguments):(b(e,n),t&&n&&g(e))},h=function(e){return Math.floor(100*Math.random())+1<=e},w=function(e,n){var t=I(e);delete t.content,delete t.contentType,t.optOut=n?"false":"true";var r=n?C():"";r&&(t.ob_click_id=r),(new o).src=c+"/unifiedPixel?"+_(t)+"&bust="+O()},b=function(e,n){var t=I(e);delete t.content,delete t.contentType,t.optOut=n?"false":"true";var r=n?C():"";r&&(t.ob_click_id=r),(new o).src=c+"/pixel?"+_(t)+"&bust="+O()},g=function(e){(new o).src="//amplifypixel.outbrain.com/pixel?mid="+e.marketerId+"&"+_({dl:e.dl||""})+"&bust="+O()},y=function(e){var n=e.content&&e.content.id||"";(new o).src="//dr.outbrain.com/pixel?mid="+e.marketerId+"&pid="+n+"&bust="+O()},_=function(e){var n=[];for(var t in e)e.hasOwnProperty(t)&&n.push(t+"="+encodeURIComponent(e[t]));return n.join("&")},A=function(e){for(var n=[],t={},r=0;r<e.length;r++)t[e[r]]||n.push(e[r]),t[e[r]]=!0;return n},I=function(e){var n={};for(var t in e)n[t]=e[t];return n},function(){var e,n=arguments;if(!n[1])throw new Error("can't dispatch pixel, event name is missing");var t,r=n[0],o=n[2]&&"object"==typeof n[2]?n[2]:{};0==(t=d.marketerId,"[object Array]"===Object.prototype.toString.call(t))&&(d.marketerId=[d.marketerId]);var i=A(d.marketerId);for(e=0;e<i.length;e++){var a={};for(var c in o)a[c]=o[c];switch(a.marketerId=i[e].trim(),a.obApiVersion=d.version,a.obtpVersion=d.obtpVersion,a.name=n[1].replace(/ /g,"-"),a.dl=N(),r){case"track":D(a,r),k(a);break;default:T(T.LOG_TYPES.ERROR,"Command type "+r+" is not recognized",a.name)}}});function k(e){if(l)return v(e,p);m.push(e),f||(f=!0,P.checkHasConsent(function(e){for(l=!0,p=!!e;0<m.length;)v(m.shift(),p)}))}function O(){return Math.random().toString().replace(".","")}function N(){var n="";try{n=window.top.location.href||document.location.href}catch(e){n=document.location.href}return n||""}function C(){var e=L("ob_cvr_pixel_domain"),n=L("dicbo");return n?(E.set("outbrain_click_id",n,1,e),n):E.get("outbrain_click_id")}function L(e){var n,t,r,o=(N().split("?")[1]||"").split(/&/);for(n=0;n<o.length;n++)if(t=o[n],r=e,0===t.indexOf(r+"="))return o[n].split("=")[1].split("#")[0];return""}obApi.dispatch=R;var S,G,P=(S=0,{checkHasConsent:function(e){function t(){clearTimeout(S),window.removeEventListener?window.removeEventListener("message",n,!1):window.detachEvent&&window.detachEvent("message",n,!1),e.apply(e,arguments)}var r,n=function(e){var n;try{n=e&&"string"==typeof e.data?JSON.parse(e.data):e.data}catch(e){t(!0)}n&&n.__cmpReturn&&o(t,n.__cmpReturn.returnValue,n.__cmpReturn.success)},o=function(e,n,t){if((!t||!n||!n.vendorConsents||void 0===n.vendorConsents[164]||!0===n.vendorConsents[164])&&function(e){if(!e)return 1;var n=!0;for(var t in e)if(e.hasOwnProperty(t)&&(n=!1,e[t]))return 1;return n}(n.purposeConsents))return e(!0);e(!1)};try{if(S=setTimeout(function(){t.call(e,!0)},500),window.__cmp)r=t,"function"==typeof window.__cmp?window.__cmp("getVendorConsents",[164],function(e,n){o(r,e,n)}):r(!0);else{var i,a=window;try{for(;!i&&(a.frames.__cmpLocator&&(i=a),a!==window.top);)a=a.parent}catch(e){i=window.top}if(window.addEventListener?window.addEventListener("message",n,!1):window.attachEvent&&window.attachEvent("message",n,!1),!i)return void t({msg:"CMP not found"},!1);i.postMessage({__cmpCall:{command:"getVendorConsents",parameter:[164],callId:"obamplify"}},"*")}}catch(e){throw t(!0),e}}}),T=(function(){var e;if(r.pushState&&r.replaceState&&t.addEventListener){var n=function(){i.href!==e&&(e=i.href,obApi("track",s))};a(r,"pushState",n),a(r,"replaceState",n),t.addEventListener("popstate",n,!1)}}(),G=t.postMessage||e,x.LOG_TYPES={LOG:"log",WARNING:"warning",INFO:"info",ERROR:"error"},x);function x(e,n,t){G({action:"log",type:e,message:n,name:t?t.replace(/ /g,"-"):""},"*")}var V,U,Y,D=(V={USD:1,CAD:1,EUR:1,GBP:1,ILS:1,AUD:1,MXN:1,BRL:1,SEK:1,SGD:1,RUB:1,NZD:1,INR:1,JPY:1,PHP:1,CHF:1},U=new RegExp("^[A-Za-z0-9]+[A-Za-z0-9-]*$"),Y=new RegExp("^[0-9]+[.0-9]*$"),function(e,n){var t=e.contentType===u,r=e.content&&e.content.id;return!t||r&&("number"==typeof r||"string"==typeof r)?e.orderValue&&!e.currency?(T(T.LOG_TYPES.WARNING,"Order value reported but no currency is declared",e.name),!1):e.currency&&!V.hasOwnProperty(e.currency)?(T(T.LOG_TYPES.WARNING,"Currency not recognized",e.name),!1):e.orderValue&&!Y.test(e.orderValue)?(T(T.LOG_TYPES.WARNING,"Order value can only be a positive number",e.name),!1):e.name===s||U.test(e.name)?!(e.name!==s&&100<e.name.length&&(T(T.LOG_TYPES.WARNING,"Event name length cannot exceed 100 characters",e.name),1)):(T(T.LOG_TYPES.WARNING,"Event Name invalid",e.name),!1):(T(T.LOG_TYPES.WARNING,"content id is not string or number",e.name),!1)});!function(){for(var e=!1;d.queue.length;){var n=d.queue.shift();if(n[1]===s&&!n[2]){if(e)continue;e=!0}d.dispatch.apply(d,n)}}()}(window,(document,Image),history,location)}catch(e){(new Image).src="//tr.outbrain.com/log?obApiVersion="+obApi.version+"&obtpVersion="+obApi.obtpVersion+"&msg="+encodeURIComponent('{"error":"LOAD", "obApiVersion": '+obApi.version+', "marketerID": '+obApi.marketerId+', "referrer": '+document.referrer+', "extra": {"name":"'+e.name+'","line":"'+(e.lineNumber||e.line)+'","script":"'+(e.fileName||e.sourceURL||e.script)+'","stack":"'+(e.stackTrace||e.stack)+'","message":"'+e.message+'"}}')}