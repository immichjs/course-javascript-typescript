(()=>{"use strict";var r={122:(r,n,e)=>{e.d(n,{Z:()=>c});var t=e(537),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([r.id,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap);"]),i.push([r.id,":root {\r\n  --primary-color: rgb(17, 86, 102);\r\n  --primary-color-darker: rgb(9, 48, 56);\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  outline: 0;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  background: var(--primary-color);\r\n  font-family: 'Open sans', sans-serif;\r\n  font-size: 1.3em;\r\n  line-height: 1.5em;\r\n}\r\n\r\n.container {\r\n  max-width: 640px;\r\n  margin: 50px auto;\r\n  background: #fff;\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n}\r\n\r\nform input, form label, form button {\r\n  display: block;\r\n  width: 100%;\r\n  margin-bottom: 10px;\r\n}\r\n\r\nform input {\r\n  font-size: 24px;\r\n  height: 50px;\r\n  padding: 0 20px;\r\n}\r\n\r\nform input:focus {\r\n  outline: 1px solid var(--primary-color);\r\n}\r\n\r\nform button {\r\n  border: none;\r\n  background: var(--primary-color);\r\n  color: #fff;\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n  height: 50px;\r\n  cursor: pointer;\r\n  margin-top: 30px;\r\n}\r\n\r\nform button:hover {\r\n  background: var(--primary-color-darker);\r\n}\r\n\r\n.container h1 {\r\n  text-align:center;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.generated-cpf {\r\n  font-size: 2rem;\r\n  color: var(--primary-color);\r\n  text-align: center;\r\n  font-weight: bold;\r\n  margin-bottom: 40px;\r\n  letter-spacing: 5px;\r\n}","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AACA;EACE,iCAAiC;EACjC,sCAAsC;AACxC;;AAEA;EACE,sBAAsB;EACtB,UAAU;AACZ;;AAEA;EACE,SAAS;EACT,UAAU;EACV,gCAAgC;EAChC,oCAAoC;EACpC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,gBAAgB;EAChB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,YAAY;EACZ,gCAAgC;EAChC,WAAW;EACX,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,2BAA2B;EAC3B,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,mBAAmB;AACrB",sourcesContent:["@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');\r\n:root {\r\n  --primary-color: rgb(17, 86, 102);\r\n  --primary-color-darker: rgb(9, 48, 56);\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  outline: 0;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  background: var(--primary-color);\r\n  font-family: 'Open sans', sans-serif;\r\n  font-size: 1.3em;\r\n  line-height: 1.5em;\r\n}\r\n\r\n.container {\r\n  max-width: 640px;\r\n  margin: 50px auto;\r\n  background: #fff;\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n}\r\n\r\nform input, form label, form button {\r\n  display: block;\r\n  width: 100%;\r\n  margin-bottom: 10px;\r\n}\r\n\r\nform input {\r\n  font-size: 24px;\r\n  height: 50px;\r\n  padding: 0 20px;\r\n}\r\n\r\nform input:focus {\r\n  outline: 1px solid var(--primary-color);\r\n}\r\n\r\nform button {\r\n  border: none;\r\n  background: var(--primary-color);\r\n  color: #fff;\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n  height: 50px;\r\n  cursor: pointer;\r\n  margin-top: 30px;\r\n}\r\n\r\nform button:hover {\r\n  background: var(--primary-color-darker);\r\n}\r\n\r\n.container h1 {\r\n  text-align:center;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.generated-cpf {\r\n  font-size: 2rem;\r\n  color: var(--primary-color);\r\n  text-align: center;\r\n  font-weight: bold;\r\n  margin-bottom: 40px;\r\n  letter-spacing: 5px;\r\n}"],sourceRoot:""}]);const c=i},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",t=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),t&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),t&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,t,o,a){"string"==typeof r&&(r=[[null,r,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var A=0;A<r.length;A++){var p=[].concat(r[A]);t&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),e&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=e):p[2]=e),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),n.push(p))}},n}},537:r=>{r.exports=function(r){var n=r[1],e=r[3];if(!e)return n;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),a="/*# ".concat(o," */"),i=e.sources.map((function(r){return"/*# sourceURL=".concat(e.sourceRoot||"").concat(r," */")}));return[n].concat(i).concat([a]).join("\n")}return[n].join("\n")}},379:r=>{var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var a={},i=[],c=0;c<r.length;c++){var s=r[c],A=t.base?s[0]+t.base:s[0],p=a[A]||0,u="".concat(A," ").concat(p);a[A]=p+1;var l=e(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)n[l].references++,n[l].updater(f);else{var d=o(f,t);t.byIndex=c,n.splice(c,0,{identifier:u,updater:d,references:1})}i.push(u)}return i}function o(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,o){var a=t(r=r||[],o=o||{});return function(r){r=r||[];for(var i=0;i<a.length;i++){var c=e(a[i]);n[c].references--}for(var s=t(r,o),A=0;A<a.length;A++){var p=e(a[A]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}a=s}}},569:r=>{var n={};r.exports=function(r,e){var t=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}},n={};function e(t){var o=n[t];if(void 0!==o)return o.exports;var a=n[t]={id:t,exports:{}};return r[t](a,a.exports,e),a.exports}e.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},e.d=(r,n)=>{for(var t in n)e.o(n,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:n[t]})},e.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),e.nc=void 0,(()=>{var r=e(379),n=e.n(r),t=e(795),o=e.n(t),a=e(569),i=e.n(a),c=e(565),s=e.n(c),A=e(216),p=e.n(A),u=e(589),l=e.n(u),f=e(122),d={};d.styleTagTransform=l(),d.setAttributes=s(),d.insert=i().bind(null,"head"),d.domAPI=o(),d.insertStyleElement=p(),n()(f.Z,d),f.Z&&f.Z.locals&&f.Z.locals;class m{constructor(r){Object.defineProperty(this,"clearCPF",{enumerable:!0,get:function(){return r.replace(/[^\d]+/g,"")}})}validate(){if(void 0===this.clearCPF)return!1;if(11!==this.clearCPF.length)return!1;if(this.isSequece())return!1;const r=this.clearCPF.slice(0,-2),n=m.createDigit(r);return r+n+m.createDigit(r+n)===this.clearCPF}static createDigit(r){const n=Array.from(r);let e=n.length+1;const t=11-n.reduce(((r,n)=>(r+=e*Number(n),e--,r)),0)%11;return t>9?"0":String(t)}isSequece(){return this.clearCPF.charAt(0).repeat(11)===this.clearCPF}}class g{randomize(r=1e8,n=999999999){return String(Math.floor(Math.random()*(n-r))+r)}format(r){return r.slice(0,3)+"."+r.slice(3,6)+"."+r.slice(6,9)+"-"+r.slice(9,11)}generateNewCPF(){const r=this.randomize(),n=m.createDigit(r),e=r+n+m.createDigit(r+n);return this.format(e)}}!function(){const r=document.querySelector(".generated-cpf"),n=new g;r.innerHTML=n.generateNewCPF()}()})()})();
//# sourceMappingURL=bundle.js.map