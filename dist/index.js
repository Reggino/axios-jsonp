!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.axiosJsonpAdapter=n():e.axiosJsonpAdapter=n()}(this,function(){return function(e){function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var t={};return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=0)}([function(e,n){function t(e){var n=[];for(var t in e)n.push(encodeURIComponent(t)+"="+encodeURIComponent(e[t]));return n.join("&")}var o=1;e.exports=function(e){return new Promise(function(n,r){var a=document.createElement("script"),c=e.url;if(e.params){var i=t(e.params);i&&(c+=(c.indexOf("?")>=0?"&":"?")+i)}a.async=!0;var u="axiosJsonpCallback"+o++,d=window[u],p=!1;window[u]=function(e){if(window[u]=d,!p){n({data:e,status:200})}},c+=(c.indexOf("?")>=0?"&":"?")+t({callback:u,_:(new Date).getTime()}),a.onload=a.onreadystatechange=function(){a.readyState&&!/loaded|complete/.test(a.readyState)||(a.onload=a.onreadystatechange=null,a.parentNode&&a.parentNode.removeChild(a),a=null)},e.cancelToken&&e.cancelToken.promise.then(function(e){a&&(p=!0,r(e))}),a.src=c,document.head.appendChild(a)})}}])});