"use strict";(this.webpackChunkqcloud_shell=this.webpackChunkqcloud_shell||[]).push([[5807],{70487:(l,e,n)=>{n.d(e,{Z:()=>d});var a=n(8375),t=n.n(a),i=n(7638),o=n.n(i),s=n(69345),u=o()(t());u.i(s.Z),u.push([l.id,"\n",""]);const d=u},1937:(l,e,n)=>{n.d(e,{Ax:()=>t,v5:()=>a});const a=Symbol.for("IRouter");function t(l){}},95807:(l,e,n)=>{n.d(e,{Z:()=>tl});var a=n(71093),t=n(66190),i=n(73843),o=n(46233),s=n(5627),u=n(1937),d=n(58817),r=n(83487),c=n(91886),v=n(85875),p=n(89001);const _=l=>((0,a.dD)("data-v-0448c41e"),l=l(),(0,a.Cn)(),l),m={class:"page-title"},b={class:"filter-area"},g={class:"search-in-table"},f=_((()=>(0,a._)("i",{class:"mdi mdi-magnify"},null,-1))),h={class:"quick-filters"},S=_((()=>(0,a._)("label",null,"Quick Filters: ",-1))),k={style:{"margin-left":"auto",display:"flex"}},y=[_((()=>(0,a._)("span",null,"Export Excel",-1)))],C={class:"table-container"},D={class:"items-table",id:"userListTable"},U=_((()=>(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",{class:"col-xl-1"},"Name"),(0,a._)("th",{class:"col-xl-1"},"Last Name"),(0,a._)("th",{class:"col-xl-1"},"E-mail"),(0,a._)("th",{class:"col-xl-1"},"Role"),(0,a._)("th",{class:"col-xl-1"},"Organizations"),(0,a._)("th",{class:"col-xl-1"},"Organization Gr"),(0,a._)("th",{class:"col-xl-1"},"Last Login"),(0,a._)("th",{class:"col-xl-1"},"Mobile"),(0,a._)("th",{class:"col-xl-1"},"SA"),(0,a._)("th",{class:"col-xl-2"},"SA Last Date"),(0,a._)("th",{class:"col-xl-1"},"Licensed"),(0,a._)("th",{class:"col-xl-1"})])],-1))),I={style:{padding:"18px 36px"}},w={key:0,class:"mdi mdi-cellphone",style:{"font-size":"26px"}},x={style:{padding:"18px 36px"}},A=["onClick"],T={key:1,class:"button-tooltip"},L=_((()=>(0,a._)("b",null,"Organization Group:",-1))),M=_((()=>(0,a._)("b",null,"App Name:",-1))),z=_((()=>(0,a._)("b",null,"Shell Info:",-1))),Z=_((()=>(0,a._)("b",null,"Reason:",-1))),q={style:{display:"flex"}},E=["onClick"],N=_((()=>(0,a._)("i",{class:"mdi mdi-dots-vertical user-edit-menu-button",id:"dropdownMemberEditMenuButton","data-bs-toggle":"dropdown","aria-expanded":"false"},null,-1))),O={style:{right:"0"},class:"dropdown-menu user-edit-menu","aria-labelledby":"dropdownMemberEditMenuButton"},F=["onClick"],G=_((()=>(0,a._)("i",{class:"mdi mdi-close delete-icon"},null,-1))),H=["onClick"],B=_((()=>(0,a._)("i",{class:"mdi mdi-account-minus-outline delete-icon"},null,-1))),P=(0,a.aZ)({__name:"userList",props:{users:null,orgGroupID:null,addButton:null},emits:["refreshTable"],setup(l,{emit:e}){const n=l,_=s.nC.resolve(r.y),P=s.nC.resolve(d.X),R=s.nC.resolve(c.r),j=s.nC.resolve(u.v5),W=(0,a.Fl)((()=>n.users)),V=(0,i.iH)(""),X=(0,i.iH)([]),Y=(0,i.iH)(["10","20","30","All"]),K=(0,i.iH)(["All","SA Users","Mobile"]),Q=(0,i.iH)("All"),$=(0,i.iH)(!1),J=(0,i.iH)(!1);function ll(){e("refreshTable")}function el(){let l=W.value.filter((l=>{var e,n,a,t,i,o;return(null===(e=l.name)||void 0===e?void 0:e.toUpperCase().includes(V.value.toUpperCase()))||(null===(n=l.lastName)||void 0===n?void 0:n.toUpperCase().includes(V.value.toUpperCase()))||(null===(a=l.email)||void 0===a?void 0:a.toUpperCase().includes(V.value.toUpperCase()))||(null===(t=l.organizationNames)||void 0===t?void 0:t.join(",").toUpperCase().includes(V.value.toUpperCase()))||(null===(i=l.role)||void 0===i?void 0:i.toUpperCase().includes(V.value.toUpperCase()))||(null===(o=l.licensed)||void 0===o?void 0:o.toUpperCase().includes(V.value.toUpperCase()))}));return"All"==Q.value||("SA Users"==Q.value?l=l.filter((l=>l.standAloneInfo)):"Mobile"==Q.value&&(l=l.filter((l=>l.mobileUsage)))),$.value?l=l.filter((l=>"LICENSED"==l.licensed)):J.value&&(l=l.filter((l=>"Free"==l.licensed))),l}function nl(l){switch(l){case"All":Q.value="All";break;case"SA Users":Q.value="SA Users";break;case"Mobile":Q.value="Mobile"}}function al(l){X.value=l}return(0,a.bv)((()=>{R.addSortingToColumns("userListTable")})),(e,s)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",m,[(0,a._)("span",null,"User List ("+(0,t.toDisplayString)((0,i.SU)(W).length)+")",1)]),(0,a._)("div",b,[(0,a._)("div",g,[f,(0,a.wy)((0,a._)("input",{class:"search-input",type:"text",placeholder:"Search",alt:"search","onUpdate:modelValue":s[0]||(s[0]=l=>V.value=l)},null,512),[[o.vModelText,V.value]])]),(0,a._)("div",null,[(0,a.Wm)(v.Z,{options:K.value,default:K.value[0],onInput:nl,class:"bo-table-filters","selected-class":"selected-filter"},null,8,["options","default"])]),(0,a._)("div",h,[S,(0,a._)("span",{class:(0,t.normalizeClass)({active:$.value}),onClick:s[1]||(s[1]=l=>($.value=!$.value,J.value=!1))},"Licensed",2),(0,a._)("span",{class:(0,t.normalizeClass)({active:J.value}),onClick:s[2]||(s[2]=l=>($.value=!1,J.value=!J.value))},"Free",2)]),(0,a._)("div",k,[l.addButton?((0,a.wg)(),(0,a.iD)("button",{key:0,class:(0,t.normalizeClass)(l.addButton.buttonClass)},[(0,a._)("span",{onClick:s[3]||(s[3]=(...e)=>l.addButton.buttonCb&&l.addButton.buttonCb(...e))},(0,t.toDisplayString)(l.addButton.buttonText),1)],2)):(0,a.kq)("v-if",!0),(0,a._)("button",{class:"btn_exportexcel",onClick:s[4]||(s[4]=l=>(0,i.SU)(P).downloadUserListXlsxFile(el()))},y)])]),(0,a._)("div",C,[(0,a._)("table",D,[U,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(X.value,(e=>{var o,s,u,d,r,c,v;return(0,a.wg)(),(0,a.iD)("tr",{key:e.id},[(0,a._)("td",null,(0,t.toDisplayString)(e.name),1),(0,a._)("td",null,(0,t.toDisplayString)(e.lastName),1),(0,a._)("td",null,(0,t.toDisplayString)(e.email),1),(0,a._)("td",null,(0,t.toDisplayString)(e.role),1),(0,a._)("td",null,(0,t.toDisplayString)(null===(o=e.organizationNames)||void 0===o?void 0:o.join(", ")),1),(0,a._)("td",null,(0,t.toDisplayString)(null===(s=e.organizationGroupNames)||void 0===s?void 0:s.join(", ")),1),(0,a._)("td",null,(0,t.toDisplayString)(e.lastSignIn?(0,i.SU)(R).formatDate(e.lastSignIn):"-"),1),(0,a._)("td",I,[e.mobileUsage&&(e.mobileUsage.isMobilePublished||e.mobileUsage.isMobileTemplateUsed)?((0,a.wg)(),(0,a.iD)("i",w)):(0,a.kq)("v-if",!0)]),(0,a._)("td",x,[e.standAloneInfo?((0,a.wg)(),(0,a.iD)("i",{key:0,onClick:l=>function(l){null==l.showStandAloneInfo&&(l.showStandAloneInfo=!1),X.value.filter((e=>e.id!=l.id)).forEach((l=>{l.showStandAloneInfo=!1})),l.showStandAloneInfo=!l.showStandAloneInfo}(e),class:"mdi mdi-palette-outline standalone-info"},null,8,A)):(0,a.kq)("v-if",!0),e.showStandAloneInfo?((0,a.wg)(),(0,a.iD)("div",T,[(0,a._)("div",null,[L,(0,a.Uk)(" "+(0,t.toDisplayString)(null===(u=e.standAloneInfo)||void 0===u?void 0:u.orgGroup),1)]),(0,a._)("div",null,[M,(0,a.Uk)(" "+(0,t.toDisplayString)(null===(d=e.standAloneInfo)||void 0===d?void 0:d.appName),1)]),(0,a._)("div",null,[z,(0,a.Uk)(" "+(0,t.toDisplayString)(null===(r=e.standAloneInfo)||void 0===r?void 0:r.shellInfo),1)]),(0,a._)("div",null,[Z,(0,a.Uk)(" "+(0,t.toDisplayString)(null===(c=e.standAloneInfo)||void 0===c?void 0:c.reason),1)])])):(0,a.kq)("v-if",!0)]),(0,a._)("td",null,(0,t.toDisplayString)((0,i.SU)(R).formatDate(null===(v=e.standAloneInfo)||void 0===v?void 0:v.lastOpenedDate)),1),(0,a._)("td",null,(0,t.toDisplayString)(e.licensed),1),(0,a._)("td",null,[(0,a._)("div",q,[(0,a._)("button",{class:"view-btn",onClick:l=>{return n=e.id,void j.push(`/backoffice/user/${n}`);var n}},"VIEW",8,E),N,(0,a._)("ul",O,[(0,a._)("li",{class:"dropdown-menu-action",onClick:l=>{return n=e.id,void _.execute((async()=>{await P.deleteUserStandAloneInfo(n),ll()}),{loading:!0});var n}},[G,(0,a.Uk)("Delete SA Info")],8,F),l.orgGroupID?((0,a.wg)(),(0,a.iD)("li",{key:0,class:"dropdown-menu-action",onClick:l=>{return a=e.id,void _.execute((async()=>{await P.updateOrganizationGroupOwners({ID:n.orgGroupID,action:"remove",removeOwnerId:a}),ll()}),{loading:!0});var a}},[B,(0,a.Uk)("Remove Group Owner")],8,H)):(0,a.kq)("v-if",!0)])])])])})),128))]),(0,a.Wm)(p.Z,{itemsPerPageOptions:Y.value,columnCount:12,onPaginateData:al,searchInTable:V.value,selectedFilter:Q.value,quickFilter:$.value||J.value,getTableData:el},null,8,["itemsPerPageOptions","searchInTable","selectedFilter","quickFilter"])])])],64))}});var R=n(17450),j=n.n(R),W=n(29530),V=n.n(W),X=n(16199),Y=n.n(X),K=n(40458),Q=n.n(K),$=n(62916),J=n.n($),ll=n(92165),el=n.n(ll),nl=n(70487),al={};al.styleTagTransform=el(),al.setAttributes=Q(),al.insert=Y().bind(null,"head"),al.domAPI=V(),al.insertStyleElement=J(),j()(nl.Z,al),nl.Z&&nl.Z.locals&&nl.Z.locals;const tl=(0,n(32525).Z)(P,[["__scopeId","data-v-0448c41e"]])}}]);