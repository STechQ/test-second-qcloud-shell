/*! For license information please see restServiceCall_design.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","react-dom"],t):"object"==typeof exports?exports.flowcomponent=t(require("react"),require("react-dom")):e.flowcomponent=t(e.react,e["react-dom"])}(this,((e,t)=>(()=>{var n={4645:(e,t,n)=>{"use strict";var l=n(7111);l.createRoot,l.hydrateRoot},6094:(e,t,n)=>{"use strict";var l=n(8156),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var l,a={},d=null,c=null;for(l in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,l)&&!r.hasOwnProperty(l)&&(a[l]=t[l]);if(e&&e.defaultProps)for(l in t=e.defaultProps)void 0===a[l]&&(a[l]=t[l]);return{$$typeof:s,type:e,key:d,ref:c,props:a,_owner:o.current}}t.Fragment=a,t.jsx=d,t.jsxs=d},4512:(e,t,n)=>{"use strict";e.exports=n(6094)},8156:t=>{"use strict";t.exports=e},7111:e=>{"use strict";e.exports=t},5685:(e,t)=>{var n;!function(){"use strict";var l={}.hasOwnProperty;function s(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=i(e,a(n)))}return e}function a(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return s.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)l.call(e,n)&&e[n]&&(t=i(t,n));return t}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(s.default=s,e.exports=s):void 0===(n=function(){return s}.apply(t,[]))||(e.exports=n)}()}},l={};function s(e){var t=l[e];if(void 0!==t)return t.exports;var a=l[e]={exports:{}};return n[e](a,a.exports,s),a.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.p="";var a={};return(()=>{"use strict";s.r(a),s.d(a,{default:()=>E});var e,t=s(4512),n=s(8156);let l;e={boolean:!0,datetime:!0,enum:!0,number:!0,dataType:!0,string:!0,constant:!0},Object.keys(e);const i=l={quick:{modelKeys:{self:"qjson"}},flow:{modelKeys:{design:"flow-design",runtime:"flow-runtime"}},workflow:{modelKeys:{design:"workflow-design",runtime:"workflow-runtime"}},dataTypeEditor:{modelKeys:{single:"dataType"}},serviceEditor:{modelKeys:{single:"restService"}},soapEditor:{modelKeys:{single:"soapService"}},enum:{modelKeys:{single:"enum"}},constantEditor:{modelKeys:{single:"constant"}}};new Error("unimplemented for namedComponent"),new Error("unimplemented for json");const o=()=>d;let r;const d=r={inParamMapping:[],outParamMapping:[],props:{httpMethod:"GET"}},c=(s.p,s.p,({label:e,isKeepOpen:l=!1,onAddButton:s,children:a})=>{const[i,o]=(0,n.useState)(!0);return(0,t.jsxs)("div",{className:"variables ",children:[(0,t.jsxs)("div",{className:"d-flex justify-content-between p-3 pb-0",children:[(0,t.jsxs)("div",{className:"d-flex cursor-pointer",onClick:()=>o(!i),children:[!l&&(0,t.jsx)("i",{className:"mdi "+(i?"mdi-chevron-down":"mdi-chevron-right")}),(0,t.jsx)("p",{children:e})]}),s&&(0,t.jsx)("i",{className:"mdi mdi-plus cursor-pointer",onClick:e=>{e.preventDefault(),e.stopPropagation(),s()}})]}),(l||i)&&(0,t.jsx)("ul",{className:"variable-list",children:a})]})});var p=s(5685),u=s.n(p);s.p;const m=({isOpen:e,onClose:l,children:s,footer:a=[],title:i,type:o="dialog",position:r})=>{if(!e)return null;const[d,c]=(0,n.useState)({top:0}),p=(0,n.useRef)(null);return(0,n.useEffect)((()=>{var e,t;if(r){const n=window.innerHeight>r.top+((null===(e=p.current)||void 0===e?void 0:e.clientHeight)||0)?r.top:window.innerHeight-((null===(t=p.current)||void 0===t?void 0:t.clientHeight)||0)-10;c({top:n})}}),[r]),(0,t.jsx)("div",{className:u()({overlay:"modal"===o}),children:(0,t.jsxs)("div",{ref:p,className:u()("dialog",{"dialog-monaco":"modal"==o}),style:d,children:["dialog"===o?(0,t.jsxs)("div",{className:"dots",style:{cursor:"grab"},onMouseDown:e=>(e=>{e.preventDefault();const t=p.current;if(!t)return;const n=t.getBoundingClientRect(),l=e.clientX-n.left,s=e=>{c({top:e.clientY-10,left:e.clientX-l})},a=()=>{document.removeEventListener("mousemove",s),document.removeEventListener("mouseup",a)};document.addEventListener("mousemove",s),document.addEventListener("mouseup",a)})(e),children:[(0,t.jsx)("span",{}),(0,t.jsx)("span",{}),(0,t.jsx)("span",{})]}):(0,t.jsx)("div",{}),(0,t.jsxs)("div",{className:"dialog-header",children:[(0,t.jsx)("h5",{className:"dialog-title m-0",children:i}),(0,t.jsx)("div",{className:"cursor-pointer",onClick:l,children:(0,t.jsx)("i",{className:"mdi mdi-window-close"})})]}),(0,t.jsx)("div",{className:"dialog-body",children:s}),a.length>0&&(0,t.jsx)("div",{className:"dialog-footer",children:a.map((e=>e))})]})})};function v(e,t){(0,n.useEffect)((()=>{const n=n=>{const l=null==e?void 0:e.current;l&&!l.contains((null==n?void 0:n.target)||null)&&t(n)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),()=>{document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}}),[e,t])}s.p;const g=e=>{var l;const[s,a]=(0,n.useState)(!1),i=(0,n.useRef)(null);return v(i,(()=>a(!1))),(0,t.jsxs)("div",{className:"dropdown-flow",ref:i,children:[(0,t.jsx)("button",{className:"cursor-pointer",onClick:e=>{e.stopPropagation(),a(!s)},children:e.iconClass&&(0,t.jsx)("i",{className:e.iconClass})}),(0,t.jsx)("ul",{className:"py-3",style:{display:s?"block":"none"},children:null===(l=e.options)||void 0===l?void 0:l.map((e=>(0,t.jsx)("li",{className:"px-3 py-1 cursor-pointer ellipsis-text",onClick:t=>{a(!1),e.onClick(t)},children:e.name},e.name)))})]})},f=({collapsibleLabel:e,fields:l,disabledFields:s=[],fieldLabel:a,dialogElements:i,emptyValues:o,isAddible:r=!0,isDeletable:d=!0,isCollabsible:p=!0,createItemLabel:u,dialogTitle:v,maxItemLen:f,disabled:h,onChange:b,validate:y,getFieldLabel:x})=>{const[j,S]=(0,n.useState)([]),[N,C]=(0,n.useState)(!1),[w,k]=(0,n.useState)(0),[E,P]=(0,n.useState)({top:0}),[O,M]=(0,n.useState)(!1),[L,A]=(0,n.useState)("");(0,n.useEffect)((()=>{const e=new Set(s.map((e=>JSON.stringify(e)))),t=l.filter((t=>!e.has(JSON.stringify(t))));S(t)}),[l]);const R=(e,t,n=!1)=>{P({top:e.pageY}),M(n),k(t),y&&A(y(j[t])),C(!0)},_=(e,t,n=a)=>{if(!e)return;if(n.includes(".")){const l=n.split(".").reduce(((e,t)=>e[t]),e);return Array.isArray(l)||"object"!=typeof l?l:l.value?`${l.type}.${l.value}`:`Variable ${t+1}`}const l=e?e[n]:e;return Array.isArray(l)||"object"!=typeof l?l:l.value?`${l.type}.${l.value}`:`Variable ${t+1}`},$=e=>{S(e),b(JSON.parse(JSON.stringify([...s,...e])))};function T(e,t){const n=[...j];((e,t,n)=>{const l=t.split("."),s=l.pop();l.reduce(((e,t)=>e[t]),e)[s]=n})(n[w],e,t),$(n),y&&A(y(n[w]))}const I=()=>{if(h)return;if(void 0!==f&&j.length>=f)return;const e=[...j];e.push(JSON.parse(JSON.stringify(o))),$(e)},V=(e,t)=>{var n;const l={true:s,false:j};h&&(l[O.toString()]={...s,...j});const a=null===(n=l[O.toString()])||void 0===n?void 0:n[w];return{Expression:{expression:(null==a?void 0:a[t])||{type:"string",value:""},onBlur:e=>{T(t,e)}},Checkbox:{checked:_(a,0,t)||!1,onChange:e=>{T(t,e)}},Select:{value:_(a,0,t)||"",onChange:e=>{T(t,e)}},Input:{value:_(a,0,t)||"",onChange:e=>{T(t,e)}},MultiSelect:{values:_(a,0,t)||[],onChange:e=>{T(t,e)}}}[e]||{value:(null==a?void 0:a[t])||"",onChange:e=>{T(t,e)}}};return(0,t.jsx)(t.Fragment,{children:0==(null==j?void 0:j.length)&&0==s.length&&r?(0,t.jsxs)("div",{className:"dynamic-field-create vertical-line cursor-pointer",onClick:I,children:[(0,t.jsx)("p",{children:u}),void 0===f||void 0!==f&&j.length<f?(0,t.jsx)("i",{className:"mdi mdi-plus"}):(0,t.jsx)(t.Fragment,{})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(c,{label:e,isKeepOpen:!p,...(()=>{if(r&&!(void 0!==f&&j.length>=f))return{onAddButton:I}})(),children:[null==s?void 0:s.map(((e,n)=>(0,t.jsx)("li",{className:`d-flex justify-content-between align-items-center px-1 py-2 cursor-pointer ${j.length-1!==n&&"vertical-line"}`,onClick:e=>R(e,n,!0),children:(0,t.jsx)("p",{className:"m-0 ellipsis-text",children:(null==x?void 0:x(e))||_(e,n)||`Variable ${n+1}`})},`item${n}`))),null==j?void 0:j.map(((e,n)=>(0,t.jsxs)("li",{className:`d-flex justify-content-between align-items-center px-1 py-2 cursor-pointer ${j.length-1!==n&&"vertical-line"}`,onClick:e=>R(e,n,h),children:[(0,t.jsx)("p",{className:"m-0 ellipsis-text",children:(null==x?void 0:x(e))||_(e,n)||`Variable ${n+1}`}),d&&(0,t.jsx)(g,{iconClass:"mdi mdi-dots-horizontal",options:[{name:"Delete",onClick:e=>{((e,t)=>{e.preventDefault(),e.stopPropagation(),$([...j].filter(((e,n)=>n!=t)))})(e,n)}}]})]},`item${n}`)))]}),(0,t.jsxs)(m,{isOpen:N,title:v,onClose:()=>(C(!1),void A("")),position:E,children:[(0,t.jsxs)("p",{style:{color:"red",display:""===L?"none":""},children:["$",L]}),i.map(((e,n)=>{var l,a;if((O||!e.isRendered||(null===(l=null==e?void 0:e.isRendered)||void 0===l?void 0:l.call(e,j[w])))&&(!O||!e.isRendered||(null===(a=null==e?void 0:e.isRendered)||void 0===a?void 0:a.call(e,s[w]))))return(0,t.jsx)(e.component,{...V(e.componentName,e.key),disabled:O,...e.props,children:e.children},e.key)}))]})]})})};function h(e){return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}function b(e){const t=(0,n.useSyncExternalStore)(h,(()=>function(e){var t,n,l,s,a;const i=null===(t=e.current)||void 0===t?void 0:t.getBoundingClientRect();return JSON.stringify({width:null!==(n=null==i?void 0:i.width)&&void 0!==n?n:0,height:null!==(l=null==i?void 0:i.height)&&void 0!==l?l:0,top:null!==(s=null==i?void 0:i.top)&&void 0!==s?s:0,left:null!==(a=null==i?void 0:i.left)&&void 0!==a?a:0})}(e)));return(0,n.useMemo)((()=>JSON.parse(t)),[t])}s.p,s.p;const y=({label:e,options:l=[],className:s,placeholder:a,value:i,disabled:o,onChange:r})=>{const[d,c]=(0,n.useState)(!1),[p,u]=(0,n.useState)(i),[m,g]=(0,n.useState)([]),f=(0,n.useRef)(null),h=(0,n.useRef)(null),y=(0,n.useRef)(null),{width:x,top:j,left:S,height:N}=b(h),{height:C}=b(y);return v(f,(()=>c(!1))),(0,n.useEffect)((()=>{const e=m.find((e=>e.value===i));e?u(e.name):i||u("")}),[i,m]),(0,n.useEffect)((()=>{g(l)}),[l]),(0,t.jsxs)("div",{className:`select-flow position-relative ${s||""}`,children:[e&&(0,t.jsx)("label",{className:"d-block ellipsis-text p-0",children:e}),(0,t.jsxs)("div",{ref:f,children:[(0,t.jsxs)("div",{className:"input",ref:h,onClick:()=>{o||c(!d)},style:{cursor:o?"not-allowed":"default",opacity:o?"0.6":"1"},children:[(0,t.jsx)("input",{className:"w-100 ellipsis-text",placeholder:a,value:p,onChange:()=>{}}),(0,t.jsx)("i",{className:"mdi mdi-chevron-down"})]}),(0,t.jsx)("div",{className:"options",ref:y,style:{display:d?"block":"none",pointerEvents:o?"none":"all",...(()=>{const e=window.innerHeight;return j+N+5+C>e?{top:j-C-5,left:S,width:x}:{top:j+N+5,left:S,width:x}})()},children:(0,t.jsx)("ul",{children:l.map((e=>(0,t.jsx)("li",{className:"cursor-pointer ellipsis-text",onClick:()=>e.value!=p?(e=>{r(e.value),c(!1)})(e):c(!1),children:e.name},e.value)))})})]})]})},x=(s.p,({label:e,className:l,placeholder:s,value:a,disabled:i,isDigit:o=!1,onChange:r,onBlur:d})=>{const[c,p]=(0,n.useState)(a);return(0,n.useEffect)((()=>{p(a)}),[a]),(0,t.jsxs)("div",{className:`input-flow ${l||""}`,children:[e&&(0,t.jsx)("label",{className:"d-block p-0",children:e}),(0,t.jsx)("input",{className:"w-100",placeholder:s,value:c,onChange:e=>{const t=e.target.value;o&&!new RegExp(/^\d+$/).test(t)||(null==r||r(t),p(t))},onBlur:d,disabled:i})]})});s(4645),s.p;const j=({children:e,className:n,color:l="primary",disabled:s,onClick:a})=>(0,t.jsx)("button",{className:u()("button-flow",n,l),disabled:s,onClick:a,children:e});s.p;const S=({node:e,level:l=0,onSelect:s,selected:a})=>{const[i,o]=(0,n.useState)([]);return(0,n.useEffect)((()=>{const e=a.split(".");e.length>0&&o(i.concat(e))}),[a]),(0,t.jsx)("div",{className:"tree-node",children:Object.keys(e).map((n=>{const r=Array.isArray(e[n])?e[n].length>0:"object"==typeof e[n]&&null!==e[n],d=a===n,c=a.split(".").length>1?a.split(".").filter(((e,t)=>0!==t)).join("."):a;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:u()("tree-row",{selected:d}),onClick:()=>(e=>{s(e)})(n),children:(0,t.jsxs)("div",{className:"tree-text",style:{paddingLeft:r?20*l:20*l+10},onClick:()=>(e=>{i.includes(e)?o(i.filter((t=>t!==e))):o([...i,e])})(n),children:[r&&(0,t.jsx)("i",{className:"mdi mdi-menu-"+(i.includes(n)?"down":"right")}),(0,t.jsx)("span",{children:n})]})},n),r&&i.includes(n)&&(0,t.jsx)(S,{node:e[n],level:l+1,onSelect:e=>s(`${n}.${e}`),selected:c})]})}))})},N=({className:e,isOpen:l,selected:s,position:a,items:i,onSelected:o,onClose:r})=>{const[d,c]=(0,n.useState)(""),[p,v]=(0,n.useState)(""),[g,f]=(0,n.useState)(i),[h,b]=(0,n.useState)({top:200});return(0,n.useEffect)((()=>{const e=t=>Object.keys(t).reduce(((n,l)=>{if("object"==typeof t[l]){if(!l)return n;if(0===Object.keys(t[l]).length)return n[l]="",n;t[l].type?n[l]=t[l].type:n[l]=e(t[l])}else n[l]=t[l];return n}),{});if(!i)return;const t=e(i);f(JSON.parse(JSON.stringify(t))),c("")}),[i]),(0,n.useEffect)((()=>{s&&c(s)}),[s]),(0,n.useEffect)((()=>{a&&b(a)}),[a]),(0,t.jsx)("div",{className:u()("picker",e),children:(0,t.jsx)(m,{title:"Picker",position:h,isOpen:l,onClose:()=>r(),children:(0,t.jsxs)("div",{children:[(0,t.jsx)(x,{className:"mb-3",placeholder:"Search",value:p,onChange:e=>v(e)}),(0,t.jsx)("div",{className:"tree",children:(0,t.jsx)(S,{node:(e=>{const t=n=>Object.keys(n).reduce(((l,s)=>{if(s.toLowerCase().includes(e.toLowerCase())&&(l[s]=n[s]),Array.isArray(n[s])){const t=n[s].filter((t=>"string"==typeof t&&t.toLowerCase().includes(e.toLowerCase())));t.length>0&&(l[s]=t)}if("object"==typeof n[s]&&null!==n[s]){const e=t(n[s]);Object.keys(e).length>0&&(l[s]=e)}return l}),{});return g?t(g):{}})(p),selected:d,onSelect:e=>{c(e)}})}),(0,t.jsxs)("div",{className:"d-flex justify-content-end mt-3",children:[(0,t.jsx)(j,{color:"secondary",className:"px-2",onClick:()=>r(),children:"Cancel"}),(0,t.jsx)(j,{className:"ms-3 px-2",disabled:!d,onClick:()=>{o(d),r()},children:"SELECT"})]})]})})})},C=({label:e,className:l,types:s,expression:a,disabled:i,constantsOptions:o,store:r,onChange:d,onBlur:c})=>{const[p,u]=(0,n.useState)([]),[m,v]=(0,n.useState)(s[0]),[g,f]=(0,n.useState)(""),[h,b]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{v(a.type),f(a.value)}),[a]),(0,n.useEffect)((()=>{u(s.map((e=>({name:e,value:e}))))}),[s]),(0,t.jsxs)("div",{className:`expression-flow ${l||""}`,children:[(0,t.jsx)(y,{label:e,options:p,disabled:i||h,value:m,onChange:e=>{null==d||d({value:"",type:e}),null==c||c({value:"",type:e})}}),(0,t.jsxs)("div",{className:"d-flex align-items-center mt-2",children:["constant"===m?(0,t.jsx)(y,{className:"w-100",options:o||[],value:g,disabled:i||h,onChange:e=>{null==d||d({type:m,value:e}),null==c||c({type:m,value:e}),f(e)}}):(0,t.jsx)(x,{className:"w-100",value:g,onChange:e=>{null==d||d({type:m,value:e}),f(e)},disabled:i||h,onBlur:e=>null==c?void 0:c({type:m,value:e.target.value})}),["context","input","output"].includes(m)&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"ms-2",onClick:e=>{i||b(!0)},children:(0,t.jsx)("i",{className:"mdi mdi-database"})}),(0,t.jsx)(N,{isOpen:h,items:r[m],onClose:()=>b(!1),selected:g,onSelected:e=>{null==d||d({type:m,value:e}),null==c||c({type:m,value:e}),f(e)}})]})]})]})},w=({mapping:e,mappingSchema:l,outerStore:s,readOnly:a,onChangeInParamMapping:i,onChangeOutParamMapping:o})=>{const[r,d]=(0,n.useState)((null==e?void 0:e.inParamMapping)||[]),[c,p]=(0,n.useState)((null==e?void 0:e.outParamMapping)||[]);(0,n.useEffect)((()=>{d((null==e?void 0:e.inParamMapping)||[])}),[null==e?void 0:e.inParamMapping]),(0,n.useEffect)((()=>{p((null==e?void 0:e.outParamMapping)||[])}),[null==e?void 0:e.outParamMapping]);const u=[{component:C,componentName:"Expression",key:"mapping",props:{label:"Assignment",types:["input","context","string"],store:s}}],m=[{component:C,componentName:"Expression",key:"mapping",props:{label:"Assignment",types:["context","output"],store:s}}];function v(e){return e&&e.mapping&&e.mapping.value&&("string"===e.mapping.type||""!==e.mapping.value)?"":"Mapping Not Assigned"}return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(f,{disabled:a,emptyValues:{variable:{type:"input",value:""},mapping:{type:"string",value:""}},dialogTitle:"Assign To",getFieldLabel:e=>e.variable.value,fields:r,disabledFields:l.inParamMapping,fieldLabel:"variable",collapsibleLabel:"IN VARIABLES MAPPING",isAddible:!1,dialogElements:u,onChange:e=>{d(e),i(e)},validate:v}),(0,t.jsx)(f,{disabled:a,emptyValues:{variable:{type:"output",value:""},mapping:{type:"context",value:""}},dialogTitle:"Assign To",fields:c,disabledFields:l.outParamMapping,fieldLabel:"variable",getFieldLabel:e=>e.variable.value,collapsibleLabel:"OUT VARIABLES MAPPING",isAddible:!1,dialogElements:m,onChange:e=>{p(e),o(e)},validate:v})]})},k=e=>{const[l,s]=(0,n.useState)(e.label.value||"");return(0,n.useEffect)((()=>{s(e.label.value||"")}),[e.label]),(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(c,{label:e.collapsibleLabel||"NAME",children:(0,t.jsx)(x,{disabled:e.disabled,className:"w-100",value:l,onChange:t=>{s(t),e.onChangeLabel({type:"string",value:t})}})})})},E={name:"restServiceCall",panelLabel:"Rest Service",version:"0.8",color:"#CDDC39",icon:"mdi-api",inputs:[{name:"_"}],outputs:["_"],defaultProps:()=>({label:{type:"string",value:"Rest Service"},description:"Rest Service",type:"referenced",id:"",mapping:structuredClone(o())}),editSection:e=>()=>{var l,s,a,r,d,p,u,m,v,g;const[f,h]=(0,n.useState)([]),[b,x]=(0,n.useState)((null===(s=null===(l=e.propValues.mapping)||void 0===l?void 0:l.props)||void 0===s?void 0:s.httpMethod)||"GET"),[j,S]=(0,n.useState)(e.propValues.id||""),[N,C]=(0,n.useState)([]),[E,P]=(0,n.useState)((null===(a=e.propValues.mapping)||void 0===a?void 0:a.inParamMapping)||[]),[O,M]=(0,n.useState)((null===(r=e.propValues.mapping)||void 0===r?void 0:r.outParamMapping)||[]),[L,A]=(0,n.useState)((null===(p=null===(d=e.propValues.mapping)||void 0===d?void 0:d.props)||void 0===p?void 0:p.httpMethod)?[{name:null===(m=null===(u=e.propValues.mapping)||void 0===u?void 0:u.props)||void 0===m?void 0:m.httpMethod,value:null===(g=null===(v=e.propValues.mapping)||void 0===v?void 0:v.props)||void 0===g?void 0:g.httpMethod}]:[]);return(0,n.useEffect)((()=>{(async()=>{var t,n;const l=await(null===(n=null===(t=e.callbacks.ui)||void 0===t?void 0:t.getModels)||void 0===n?void 0:n.call(t,"restService"));l&&C(l)})()}),[]),(0,n.useEffect)((()=>{if(N){const e=N.map((e=>({name:e.name,value:e.ID})));h(e)}}),[N]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(k,{disabled:e.callbacks.readOnly,label:e.propValues.label,description:e.propValues.description,onChangeLabel:t=>e.callbacks.setProp("label",t),onChangeDescription:t=>e.callbacks.setProp("description",t)}),(0,t.jsxs)(c,{label:"PROPERTIES",children:[(0,t.jsx)(y,{disabled:e.callbacks.readOnly,label:"RestService",options:f,value:j,onChange:t=>(t=>{var n,l;S(t);const s=N.find((e=>e.ID==t));s&&(e.callbacks.setProp("id",s.ID),null===(l=null===(n=e.callbacks.ui)||void 0===n?void 0:n.getModelBody)||void 0===l||l.call(n,s.ID,i.serviceEditor.modelKeys.single).then((t=>{var n;if(t){const l=(null===(n=t.httpMethod)||void 0===n?void 0:n.map((e=>({name:e,value:e}))))||[];A(l),x(l.length>0?l[0].name:"GET");const s=Object.values(t.store.input).map((e=>({variable:{type:"input",value:e._name},mapping:{type:"string",value:""}}))),a=Object.values(t.store.output).map((e=>({variable:{type:"output",value:e._name},mapping:{type:"output",value:""}})));P(s),M(a),e.callbacks.setProp("mapping",{inParamMapping:s,outParamMapping:a,props:{httpMethod:b}})}})))})(t)}),(0,t.jsx)(y,{disabled:e.callbacks.readOnly,label:"Methods",options:L,value:b,onChange:t=>(t=>{x(t),e.callbacks.setProp("mapping",{inParamMapping:E,outParamMapping:O,props:{httpMethod:t}})})(t)})]}),(0,t.jsx)(w,{readOnly:e.callbacks.readOnly,mapping:{inParamMapping:E,outParamMapping:O},mappingSchema:structuredClone(o()),outerStore:e.callbacks.nestedStore,onChangeInParamMapping:t=>{P(t),e.callbacks.setProp("mapping",{inParamMapping:t,outParamMapping:O,props:{httpMethod:b}})},onChangeOutParamMapping:t=>{M(t),e.callbacks.setProp("mapping",{inParamMapping:E,outParamMapping:t,props:{httpMethod:b}})}})]})}}})(),a})()));