"use strict";(this.webpackChunkqcloud_shell=this.webpackChunkqcloud_shell||[]).push([[298],{99453:(n,e,t)=>{t.d(e,{Z:()=>s});var a=t(8375),r=t.n(a),o=t(7638),i=t.n(o)()(r());i.push([n.id,"\n.wrapper-container[data-v-6e57a69b] {\n    display: flex;\n    align-items: center;\n    padding: 42px 150px 42px 150px;\n    gap: 10%;\n}\n.start-btn[data-v-6e57a69b] {\n    width: 221px;\n    height: 56px;\n    border-radius: 4px;\n    font-size: 18px;\n    font-weight: 600;\n    line-height: 24px;\n    text-decoration: none;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 65px;\n    gap: 16px;\n    color: #151233;\n    border: 1px solid #151233;\n    background-color: transparent;\n    transition: 0.2s ease;\n}\n.start-btn[data-v-6e57a69b]:hover {\n    border: 1px solid #6785D2;\n    color: #6785D2;\n    transition: 0.2s ease;\n}\n.arrow-icon[data-v-6e57a69b] {\n    font-size: 24px;\n}\n.right-section[data-v-6e57a69b] {\n    width: 626px;\n    height: 589px;\n}\n.left-section-container[data-v-6e57a69b] {\n    margin: 61px 27px 61px 0;\n    width: 650px;\n}\n.low-code[data-v-6e57a69b] {\n    width: 216px;\n    height: 39px;\n    padding: 8px 16px 8px 16px;\n    border-radius: 4px;\n    border: 1px solid #ffffff;\n    margin-bottom: 20px;\n    color: #ffffff;\n    font-weight: 500;\n}\n.big-title[data-v-6e57a69b] {\n    color: #171717;\n    font-weight: 900;\n    font-size: 62px;\n    font-family: Roboto;\n}\n.app-dev[data-v-6e57a69b] {\n    background: linear-gradient(123.04deg, #F295B3 17.11%, #C1A5D5 53.96%, #6785D2 95.33%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    /* animation: gradientAnimation 10s infinite ease-in; */\n}\n.long-text[data-v-6e57a69b] {\n    font-weight: 300;\n    font-size: 20px;\n    font-family: Roboto;\n    line-height: 30px;\n    color: #8B8B8B;\n}\n.big-title-container[data-v-6e57a69b] {\n    margin: 20px 0;\n}\n\n",""]);const s=i},7638:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,r,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(a)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);a&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},8375:n=>{n.exports=function(n){return n[1]}},17450:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var o={},i=[],s=0;s<n.length;s++){var c=n[s],d=a.base?c[0]+a.base:c[0],l=o[d]||0,p="".concat(d," ").concat(l);o[d]=l+1;var u=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var v=r(f,a);a.byIndex=s,e.splice(s,0,{identifier:p,updater:v,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var o=a(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var s=t(o[i]);e[s].references--}for(var c=a(n,r),d=0;d<o.length;d++){var l=t(o[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=c}}},16199:n=>{var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},62916:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},40458:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},29530:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},92165:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},32525:(n,e)=>{e.Z=(n,e)=>{const t=n.__vccOpts||n;for(const[n,a]of e)t[n]=a;return t}},40298:(n,e,t)=>{t.r(e),t.d(e,{default:()=>T});var a=t(71093);const r=t.p+"eafee49b328a4649fa71ea317e957ac9.svg";var o=t(73843);const i={class:"wrapper-container"},s=[(0,a.uE)('<div class="left-section" data-v-6e57a69b><div class="left-section-container" data-v-6e57a69b><div class="low-code" data-v-6e57a69b> Low Code Platform </div><div class="big-title-container" data-v-6e57a69b><div class="big-title app-dev" data-v-6e57a69b>Create</div><div class="big-title" data-v-6e57a69b>Stunning UI Pages</div></div><div class="long-text" data-v-6e57a69b> Design appealing layouts, interactive elements, and seamless user experiences on any device with our powerful UI development tools. </div><div class="buttons-container" data-v-6e57a69b><button class="start-btn" data-v-6e57a69b>GET STARTED <i class="mdi mdi-arrow-right arrow-icon" data-v-6e57a69b></i></button></div></div></div><div class="right-section" data-v-6e57a69b><img class="get-started-img" src="'+r+'" alt="Get Started Image" data-v-6e57a69b></div>',2)],c=(0,a.aZ)({__name:"createPages",setup:n=>((0,o.iH)(null),(n,e)=>((0,a.wg)(),(0,a.iD)("div",i,s)))});var d=t(17450),l=t.n(d),p=t(29530),u=t.n(p),f=t(16199),v=t.n(f),b=t(40458),g=t.n(b),h=t(62916),m=t.n(h),x=t(92165),y=t.n(x),w=t(99453),C={};C.styleTagTransform=y(),C.setAttributes=g(),C.insert=v().bind(null,"head"),C.domAPI=u(),C.insertStyleElement=m(),l()(w.Z,C),w.Z&&w.Z.locals&&w.Z.locals;const T=(0,t(32525).Z)(c,[["__scopeId","data-v-6e57a69b"]])}}]);