"use strict";(this.webpackChunkqcloud_shell=this.webpackChunkqcloud_shell||[]).push([[7983,8613],{2926:(n,e,t)=>{t.d(e,{Z:()=>s});var a=t(8375),i=t.n(a),l=t(7638),o=t.n(l)()(i());o.push([n.id,'\n*[data-v-5838145a] {\n    font-family: "Roboto";\n}\n.container[data-v-5838145a] {\n        padding: 32px 20px 20px;\n}\n.org-limit[data-v-5838145a] {\n    display: flex;\n    align-items: center;\n}\n.org-limit span[data-v-5838145a] {\n    font-size: 14px;\n    line-height: 16px;\n    color: #212121;\n}\n.org-limit input[data-v-5838145a] {\n    border: 1px solid #BCBCBC;\n    border-radius: 4px;\n    padding: 8px 8px 8px 12px;\n    width: 70px;\n    height: 40px;\n    margin-left: 111px;\n    outline: none;\n    margin-left: auto;\n}\n.buttons-div[data-v-5838145a] {\n    display: flex;\n    justify-content: end;\n    margin-top: 52px;\n}\n.cancel-button[data-v-5838145a] {\n    font-weight: 500;\n    font-size: 16px;\n    text-align: center;\n    color: #757575;\n    display: flex;\n    align-items: center;\n    padding: 8px 16px;\n    border-radius: 4px;\n    margin-right: 4px;\n    border: none;\n    background: transparent;\n}\n.save-button[data-v-5838145a] {\n    font-weight: 500;\n    font-size: 16px;\n    text-align: center;\n    color: #FFFFFF;\n    background: #151233;\n    display: flex;\n    align-items: center;\n    padding: 8px 16px;\n    border-radius: 4px;\n    border: none;\n}\n\n',""]);const s=o},88613:(n,e,t)=>{t.d(e,{J:()=>a});const a=Symbol.for("IViewModel")},27983:(n,e,t)=>{t.r(e),t.d(e,{default:()=>A});var a=t(71093),i=t(46233),l=t(73843),o=t(5627),s=t(58817),r=t(83487),d=t(88613);const u={class:"container"},c={class:"org-limit"},p=(n=>((0,a.dD)("data-v-5838145a"),n=n(),(0,a.Cn)(),n))((()=>(0,a._)("span",null,"Number of organizations that can be created",-1))),v={class:"buttons-div"},g=(0,a.aZ)({__name:"manageUser",props:{user:null},emits:["close"],setup(n,{emit:e}){var t;const g=n,x=o.nC.resolve(r.y),m=o.nC.resolve(s.X),b=(o.nC.resolve(d.J),(0,l.iH)(g.user)),f=(0,l.iH)(null===(t=b.value.limits)||void 0===t?void 0:t.createOrg);function h(){e("close")}return(n,e)=>((0,a.wg)(),(0,a.iD)("div",u,[(0,a._)("div",c,[p,(0,a.wy)((0,a._)("input",{type:"number","onUpdate:modelValue":e[0]||(e[0]=n=>f.value=n)},null,512),[[i.vModelText,f.value]])]),(0,a._)("div",v,[(0,a._)("button",{class:"cancel-button",onClick:e[1]||(e[1]=n=>h())},"Cancel"),(0,a._)("button",{class:"save-button",onClick:e[2]||(e[2]=n=>(x.execute((async()=>{const n=await m.updateUserInfo(b.value.id,{createOrgLimit:f.value});b.value.limits.createOrg=f.value,b.value=n}),{loading:!0}),void h()))},"SAVE")])]))}});var x=t(17450),m=t.n(x),b=t(29530),f=t.n(b),h=t(16199),y=t.n(h),C=t(40458),_=t.n(C),w=t(62916),k=t.n(w),Z=t(92165),F=t.n(Z),z=t(2926),I={};I.styleTagTransform=F(),I.setAttributes=_(),I.insert=y().bind(null,"head"),I.domAPI=f(),I.insertStyleElement=k(),m()(z.Z,I),z.Z&&z.Z.locals&&z.Z.locals;const A=(0,t(32525).Z)(g,[["__scopeId","data-v-5838145a"]])}}]);