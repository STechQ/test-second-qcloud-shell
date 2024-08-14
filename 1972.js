"use strict";(this.webpackChunkqcloud_shell=this.webpackChunkqcloud_shell||[]).push([[1972,8613],{24172:(l,e,a)=>{a.d(e,{Z:()=>u});var t=a(8375),n=a.n(t),i=a(7638),o=a.n(i),s=a(69345),r=o()(n());r.i(s.Z),r.push([l.id,"\n",""]);const u=r},88613:(l,e,a)=>{a.d(e,{J:()=>t});const t=Symbol.for("IViewModel")},91896:(l,e,a)=>{a.d(e,{Z:()=>M});var t=a(71093),n=a(66190),i=a(73843),o=a(46233),s=a(5627),r=a(58817),u=a(91886),c=a(83487),d=a(85875),v=a(89001);const g=l=>((0,t.dD)("data-v-e5ee2f88"),l=l(),(0,t.Cn)(),l),p={class:"page-title"},_={class:"filter-area"},D={class:"search-in-table"},m=g((()=>(0,t._)("i",{class:"mdi mdi-magnify"},null,-1))),f=[g((()=>(0,t._)("span",null,"Export Excel",-1)))],C={class:"table-container"},y={class:"items-table",id:"organizationListTable"},b=g((()=>(0,t._)("thead",null,[(0,t._)("tr",null,[(0,t._)("th",{class:"col-xl-1"},"Name"),(0,t._)("th",{class:"col-xl-1"},"Organization Group"),(0,t._)("th",{class:"col-xl-1"},"App Count"),(0,t._)("th",{class:"col-xl-1"},"User Count"),(0,t._)("th",{class:"col-xl-1"},"UI Page Count"),(0,t._)("th",{class:"col-xl-1"},"UI Page Size"),(0,t._)("th",{class:"col-xl-1"},"CalcDate"),(0,t._)("th",{class:"col-xl-1"},"Date Created"),(0,t._)("th",{class:"col-xl-1"},"Created By"),(0,t._)("th",{class:"col-xl-1"},"Date Modified"),(0,t._)("th",{class:"col-xl-1"},"Tags"),(0,t._)("th",{class:"col-xl-1"},"License"),(0,t.kq)(' <th class="col-xl-1">Activity</th> '),(0,t._)("th",{class:"col-xl-1"})])],-1))),h={style:{display:"flex"}},I={style:{display:"flex"}},S=["onClick"],k=["onClick"],x=["onClick"],z=(0,t.aZ)({__name:"organizationList",props:{organizations:null,userID:null,tagID:null},emits:["refreshTable"],setup(l,{emit:e}){const a=l,g=s.nC.resolve(c.y),z=s.nC.resolve(r.X),w=s.nC.resolve(u.r),U=(0,t.Fl)((()=>a.organizations)),E=(0,i.iH)(""),O=(0,i.iH)([]),F=(0,i.iH)(["10","20","30","All"]),T=(0,i.iH)(["All","LICENSED","Free","Demo Org"]),Z=(0,i.iH)("All");function L(){e("refreshTable")}function P(){const l=U.value.filter((l=>{var e,a,t,n,i;return((null===(e=l.name)||void 0===e?void 0:e.toUpperCase().includes(E.value.toUpperCase()))||(null===(a=l.id)||void 0===a?void 0:a.toUpperCase().includes(E.value.toUpperCase()))||(null===(t=l.createdBy)||void 0===t?void 0:t.toUpperCase().includes(E.value.toUpperCase()))||(null===(n=l.organizationGroupName)||void 0===n?void 0:n.toUpperCase().includes(E.value.toUpperCase()))||(null===(i=l.tagNames)||void 0===i?void 0:i.map((l=>l.toUpperCase())).includes(E.value.toUpperCase())))&&"deleting"!=l.status}));return"All"==Z.value?l:"LICENSED"==Z.value?l.filter((l=>"LICENSED"==l.licensed)):"Free"==Z.value?l.filter((l=>"Free"==l.licensed)):"Demo Org"==Z.value?l.filter((l=>"Demo Org"==l.licensed)):l}function A(l){switch(l){case"All":Z.value="All";break;case"LICENSED":Z.value="LICENSED";break;case"Free":Z.value="Free";break;case"Demo Org":Z.value="Demo Org"}}function N(l){O.value=l}return(0,t.bv)((()=>{w.addSortingToColumns("organizationListTable")})),(l,e)=>((0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("div",p,[(0,t._)("span",null,"Organization List ("+(0,n.toDisplayString)((0,i.SU)(U).length)+")",1)]),(0,t._)("div",_,[(0,t._)("div",D,[m,(0,t.wy)((0,t._)("input",{class:"search-input",type:"text",placeholder:"Search",alt:"search","onUpdate:modelValue":e[0]||(e[0]=l=>E.value=l)},null,512),[[o.vModelText,E.value]])]),(0,t._)("div",null,[(0,t.Wm)(d.Z,{options:T.value,default:T.value[0],onInput:A,class:"bo-table-filters","selected-class":"selected-filter "},null,8,["options","default"])]),(0,t._)("button",{class:"btn_exportexcel",onClick:e[1]||(e[1]=l=>(0,i.SU)(z).downloadOrganizationListXlsxFile(P()))},f)]),(0,t._)("div",C,[(0,t._)("table",y,[b,(0,t._)("tbody",null,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(O.value,(l=>{var e,o,s,r,u,c,d;return(0,t.wg)(),(0,t.iD)("tr",{key:l.id},[(0,t._)("td",null,(0,n.toDisplayString)(l.name),1),(0,t._)("td",null,(0,n.toDisplayString)(l.organizationGroupName),1),(0,t._)("td",null,(0,n.toDisplayString)(null===(e=l.calculatedInfo)||void 0===e?void 0:e.appCount),1),(0,t._)("td",null,(0,n.toDisplayString)(null===(o=l.calculatedInfo)||void 0===o?void 0:o.userCount),1),(0,t._)("td",null,(0,n.toDisplayString)(null===(s=l.calculatedInfo)||void 0===s?void 0:s.uiPageCount),1),(0,t._)("td",null,(0,n.toDisplayString)((null===(r=l.calculatedInfo)||void 0===r?void 0:r.uiPageSize)?Math.ceil((null===(u=l.calculatedInfo)||void 0===u?void 0:u.uiPageSize)/1024)+"KB":""),1),(0,t._)("td",null,(0,n.toDisplayString)((null===(c=l.calculatedInfo)||void 0===c?void 0:c.calcDate)?(0,i.SU)(w).formatDate(null===(d=l.calculatedInfo)||void 0===d?void 0:d.calcDate):"-"),1),(0,t._)("td",null,(0,n.toDisplayString)((0,i.SU)(w).formatDate(l.createDate)),1),(0,t._)("td",null,(0,n.toDisplayString)(l.createdBy),1),(0,t._)("td",null,(0,n.toDisplayString)(l.modifyDate?(0,i.SU)(w).formatDate(l.modifyDate):"-"),1),(0,t._)("td",null,[(0,t._)("div",h,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(l.tagNames,(l=>((0,t.wg)(),(0,t.iD)("span",{key:l,class:"tag-name"},(0,n.toDisplayString)(l),1)))),128))])]),(0,t._)("td",null,(0,n.toDisplayString)(l.licensed),1),(0,t.kq)(' <td>  <span style="background: #FF6B6B; border-radius: 50%;padding: 6px 10px;">0</span> </td> '),(0,t._)("td",null,[(0,t._)("div",I,[a.userID?((0,t.wg)(),(0,t.iD)("button",{key:0,class:"remove-btn",onClick:e=>{return t=a.userID,n=l.id,void g.execute((async()=>{await z.removeUserFromOrganization({userId:t,organizationId:n}),L()}),{loading:!0});var t,n}},"REMOVE",8,S)):(0,t.kq)("v-if",!0),a.tagID?((0,t.wg)(),(0,t.iD)("button",{key:1,class:"remove-btn",onClick:e=>{return t=a.tagID,n=l.id,void g.execute((async()=>{await z.removeTagFromOrganization({organizationId:n,tagId:t}),L()}),{loading:!0});var t,n}},"REMOVE",8,k)):(0,t.kq)("v-if",!0),(0,t._)("button",{class:"view-btn",onClick:e=>{return a=l.id,void window.open(`/backoffice/organization/${a}`,"_blank");var a}},"VIEW",8,x)])])])})),128))]),(0,t.Wm)(v.Z,{itemsPerPageOptions:F.value,columnCount:13,onPaginateData:N,searchInTable:E.value,selectedFilter:Z.value,getTableData:P},null,8,["itemsPerPageOptions","searchInTable","selectedFilter"])])])],64))}});var w=a(17450),U=a.n(w),E=a(29530),O=a.n(E),F=a(16199),T=a.n(F),Z=a(40458),L=a.n(Z),P=a(62916),A=a.n(P),N=a(92165),H=a.n(N),q=a(24172),B={};B.styleTagTransform=H(),B.setAttributes=L(),B.insert=T().bind(null,"head"),B.domAPI=O(),B.insertStyleElement=A(),U()(q.Z,B),q.Z&&q.Z.locals&&q.Z.locals;const M=(0,a(32525).Z)(z,[["__scopeId","data-v-e5ee2f88"]])},71972:(l,e,a)=>{a.r(e),a.d(e,{default:()=>v});var t=a(71093),n=a(73843),i=a(5627),o=a(58817),s=a(83487),r=a(88613),u=a(91896);const c={key:0},d=(0,t.aZ)({__name:"organizations",setup(l){const e=i.nC.resolve(s.y),a=i.nC.resolve(o.X),d=i.nC.resolve(r.J);a.setBreadcrumb(["Organizations"]);const v=(0,n.iH)(!1);function g(){e.execute((async()=>{await a.listOrganizations(),v.value=!0}),{loading:!0})}g();const p=(0,t.Fl)((()=>{var l;return null===(l=d.backoffice)||void 0===l?void 0:l.organizations}));return(l,e)=>((0,t.wg)(),(0,t.iD)("section",null,[v.value?((0,t.wg)(),(0,t.iD)("div",c,[(0,t.Wm)(u.Z,{organizations:(0,n.SU)(p),onRefreshTable:g},null,8,["organizations"])])):(0,t.kq)("v-if",!0)]))}}),v=d}}]);