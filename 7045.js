"use strict";(this.webpackChunkqcloud_shell=this.webpackChunkqcloud_shell||[]).push([[7045,531],{72113:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(8375),o=n.n(a),r=n(7638),s=n.n(r),i=n(79240),l=s()(o());l.i(i.Z),l.push([e.id,"\n.container[data-v-2018fc9e] {\n    padding: 32px 20px 20px;\n}\n.avatarLogo[data-v-2018fc9e] {\n    vertical-align: middle;\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n}\n.ExportBtn[data-v-2018fc9e] {\n    border: unset;\n    background: unset;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 16px;\n    letter-spacing: 0.02px;\n    padding: 1px 6px 1px 0;\n}\n.VueTables__sort-icon[data-v-2018fc9e]{\n    float: right;\n    font-size: 15px;\n    font-weight: 600;\n}\n",""]);const c=l},70985:(e,t,n)=>{n.d(t,{w:()=>a});const a=Symbol.for("ILocalization")},57348:(e,t,n)=>{n.d(t,{u:()=>a});const a=Symbol.for("IListModelVersions")},10531:(e,t,n)=>{n.r(t),n.d(t,{default:()=>B});var a=n(71093),o=n(66190),r=n(73843),s=n(53266),i=n(57348),l=n(83487),c=n(70985);const d={class:"container"},u={key:0,class:"vue-table"},p=["onClick"],v=(0,a.aZ)({__name:"modelVersionDialog",props:{clickedNode:null,versions:null,cb:{type:Function}},setup(e){const t=e,n=(0,r.iH)([]),v=(0,r.iH)(t.clickedNode);let m=[];const g=(0,r.iH)(["name","createDate","createdBy","updateDate","updatedBy","shortComment","version","actions"]),h=s.nC.resolve(c.w),y=s.nC.resolve(l.y);let f={month:"2-digit",day:"2-digit",year:"numeric",hour:"numeric",minute:"numeric",second:"numeric"};const x=(0,r.iH)({filterable:!1,perPage:10,perPageValues:[],headings:{name:h.get("exportName"),createDate:h.get("exportcreateDate"),createdBy:h.get("exportcreatedBy"),updateDate:h.get("exportupdateDate"),updatedBy:h.get("exportupdatedBy"),shortComment:h.get("exportshortComment"),version:h.get("exportversion")},skin:"version-table",dateColumns:["createDate","updateDate"],texts:{count:"",noResults:"Saved version could not be found in the system, the last saved model of the file will be released."}});function w(){return"System latest"!=v.value.version?v.value.version:Math.max(...m)}function D(e){v.value.version=e,t.cb&&t.cb(e)}return t.versions?n.value=t.versions.reverse():y.execute((async()=>{n.value=(await y.executeUseCase(i.u,{modelID:v.value.id,versionType:"major"})).reverse(),m=n.value.map((e=>parseInt(e.version)))}),{loading:!0}),(e,t)=>{const s=(0,a.up)("v-client-table");return(0,a.wg)(),(0,a.iD)("div",d,[n.value?((0,a.wg)(),(0,a.iD)("div",u,[(0,a.Wm)(s,{data:n.value,columns:g.value,options:x.value},{createDate:(0,a.w5)((e=>[(0,a._)("span",null,(0,o.toDisplayString)(new Intl.DateTimeFormat("tr-TR",(0,r.SU)(f)).format(new Date(e.row.createDate))),1)])),updateDate:(0,a.w5)((e=>[(0,a._)("span",null,(0,o.toDisplayString)(new Intl.DateTimeFormat("tr-TR",(0,r.SU)(f)).format(new Date(e.row.updateDate))),1)])),actions:(0,a.w5)((e=>[(0,a._)("button",{class:"ExportBtn",style:(0,o.normalizeStyle)({color:parseInt(e.row.version)==w()?"#A1A1A1":"#151233"}),onClick:t=>D(e.row.version)},(0,o.toDisplayString)(parseInt(e.row.version)==w()?"Selected":"Select"),13,p)])),_:1},8,["data","columns","options"])])):(0,a.kq)("v-if",!0)])}}});var m=n(17450),g=n.n(m),h=n(29530),y=n.n(h),f=n(16199),x=n.n(f),w=n(40458),D=n.n(w),b=n(62916),S=n.n(b),k=n(92165),_=n.n(k),C=n(72113),I={};I.styleTagTransform=_(),I.setAttributes=D(),I.insert=x().bind(null,"head"),I.domAPI=y(),I.insertStyleElement=S(),g()(C.Z,I),C.Z&&C.Z.locals&&C.Z.locals;const B=(0,n(32525).Z)(v,[["__scopeId","data-v-2018fc9e"]])}}]);