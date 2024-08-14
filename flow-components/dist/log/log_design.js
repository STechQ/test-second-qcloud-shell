/*! For license information please see log_design.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.flowcomponent=t(require("react")):e.flowcomponent=t(e.react)}(this,(e=>(()=>{"use strict";var t={6094:(e,t,r)=>{var o=r(8156),s=Symbol.for("react.element"),l=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,r){var o,l={},p=null,c=null;for(o in void 0!==r&&(p=""+r),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(c=t.ref),t)n.call(t,o)&&!i.hasOwnProperty(o)&&(l[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===l[o]&&(l[o]=t[o]);return{$$typeof:s,type:e,key:p,ref:c,props:l,_owner:a.current}}t.Fragment=l,t.jsx=p,t.jsxs=p},4512:(e,t,r)=>{e.exports=r(6094)},8156:t=>{t.exports=e}},r={};function o(e){var s=r[e];if(void 0!==s)return s.exports;var l=r[e]={exports:{}};return t[e](l,l.exports,o),l.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="";var s={};return(()=>{o.r(s),o.d(s,{default:()=>i});var e=o(4512),t=o(8156),r=o.n(t);o.p;const l=({label:r,className:o,placeholder:s,value:l,disabled:n,isDigit:a=!1,onChange:i,onBlur:p})=>{const[c,u]=(0,t.useState)(l);return(0,t.useEffect)((()=>{u(l)}),[l]),(0,e.jsxs)("div",{className:`input-flow ${o||""}`,children:[r&&(0,e.jsx)("label",{className:"d-block p-0",children:r}),(0,e.jsx)("input",{className:"w-100",placeholder:s,value:c,onChange:e=>{const t=e.target.value;a&&!new RegExp(/^\d+$/).test(t)||(null==i||i(t),u(t))},onBlur:p,disabled:n})]})},n=(o.p,({label:r,isKeepOpen:o=!1,onAddButton:s,children:l})=>{const[n,a]=(0,t.useState)(!0);return(0,e.jsxs)("div",{className:"variables ",children:[(0,e.jsxs)("div",{className:"d-flex justify-content-between p-3 pb-0",children:[(0,e.jsxs)("div",{className:"d-flex cursor-pointer",onClick:()=>a(!n),children:[!o&&(0,e.jsx)("i",{className:"mdi "+(n?"mdi-chevron-down":"mdi-chevron-right")}),(0,e.jsx)("p",{children:r})]}),s&&(0,e.jsx)("i",{className:"mdi mdi-plus cursor-pointer",onClick:e=>{e.preventDefault(),e.stopPropagation(),s()}})]}),(o||n)&&(0,e.jsx)("ul",{className:"variable-list",children:l})]})}),a=r=>{const[o,s]=(0,t.useState)(r.label.value||"");return(0,t.useEffect)((()=>{s(r.label.value||"")}),[r.label]),(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(n,{label:r.collapsibleLabel||"NAME",children:(0,e.jsx)(l,{disabled:r.disabled,className:"w-100",value:o,onChange:e=>{s(e),r.onChangeLabel({type:"string",value:e})}})})})},i={name:"log",panelLabel:"Log",version:"0.8",inputs:[{name:"_"}],outputs:["_"],color:"#E9724C",icon:"mdi-file-document-multiple-outline",defaultProps:()=>({label:{type:"string",value:"Log"},description:"Log",expression:{type:"context",value:"Log"}}),editSection:t=>()=>{const{NameDiv:o,DescDiv:s}=t.react.prop,{ExpressionComp:l}=t.react,[n,i]=r().useState(t.propValues.expression);return(0,e.jsxs)("div",{className:"px-3",children:[(0,e.jsx)(a,{label:t.propValues.label,description:t.propValues.description,onChangeLabel:e=>t.callbacks.setProp("label",e),onChangeDescription:e=>t.callbacks.setProp("description",e)}),(0,e.jsx)(o,{children:"expression"}),(0,e.jsx)(s,{children:"expression to log."}),(0,e.jsx)(l,{inputOptions:{width:"110px"},types:["boolean","input","context","output","number","string"],expression:n,onChange:e=>{i(e),t.callbacks.setProp("expression",e)}})]})}}})(),s})()));