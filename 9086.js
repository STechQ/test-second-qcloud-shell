"use strict";(this.webpackChunkqcloud_shell=this.webpackChunkqcloud_shell||[]).push([[9086,8695,4576],{26149:(n,e,a)=>{a.d(e,{Z:()=>r});var t=a(8375),o=a.n(t),i=a(7638),l=a.n(i)()(o());l.push([n.id,'\n.infoText[data-v-32ae2707] {\n    color: #151233;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 14px;\n    font-family: "ROBOTO";\n    letter-spacing: 0px;\n    opacity: 1;\n}\n.textAreaClass[data-v-32ae2707] {\n    width: 100%;\n    outline: none;\n    height: 120px;\n    border: 1px solid #A1A1A1;\n    border-radius: 4px;\n    opacity: 1;\n    resize: none;\n    margin-top: 3px;\n    padding-left: 7px;\n}\n.inputClass[data-v-32ae2707] {\n    width: 100%;\n    outline: none;\n    height: 40px;\n    border: 1px solid #A1A1A1;\n    border-radius: 4px;\n    opacity: 1;\n    margin-top: 3px;\n    padding-left: 7px;\n}\n.inputClass[data-v-32ae2707]:disabled,\n.textAreaClass[data-v-32ae2707]:disabled {\n    opacity: 0.4;\n}\n.errorMessage[data-v-32ae2707] {\n    color: #212121;\n    font-style: normal;\n    font-weight: 400;\n    font-family: \'ROBOTO\';\n    font-size: 12px;\n    letter-spacing: 0px;\n    opacity: 1;\n}\n.validationErrorIcon[data-v-32ae2707] {\n    color: red;\n    font-size: 13px;\n}\n[data-v-32ae2707]::placeholder {\n    color: #A1A1A1;\n    font-style: normal;\n    font-family: "ROBOTO";\n    letter-spacing: 0px;\n    font-size: 14px;\n    opacity: 1px;\n}\n.requiredIcon[data-v-32ae2707] {\n    color: #757575;\n    font-size: 15px;\n}\n.title[data-v-32ae2707] {\n    background-color: red;\n}\n.dropdown-menu[data-v-32ae2707] {\n    display: list-item;\n    position: absolute;\n    inset: 0px auto auto 0px;\n    margin: 0px;\n    background-color: #FFFFFF;\n    border: 0.5px solid var(--grey);\n    box-shadow: 2px 2px 4px #00000029;\n    border-radius: 2px;\n    padding: .5rem 0;\n}\n.deneme[data-v-32ae2707] {\n    background-color: red;\n}\na[data-v-32ae2707] {\n    text-decoration: none;\n}\n.popover__title[data-v-32ae2707] {\n    font-size: 24px;\n    line-height: 36px;\n    text-decoration: none;\n    color: rgb(228, 68, 68);\n    text-align: center;\n    padding: 15px 0;\n}\n.popover__content[data-v-32ae2707] {\n    opacity: 0;\n    visibility: hidden;\n    position: absolute;\n    left: 120px;\n    transform: translate(0, 10px);\n    background-color: white;\n    width: auto;\n    padding-left: 0px;\n    padding-right: 10px;\n    z-index: 10;\n    opacity: 1;\n    visibility: visible;\n    transform: translate(0, -20px);\n    transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);\n    border: 0.5px solid grey;\n    background: #FFFFFF 0% 0% no-repeat padding-box;\n    box-shadow: 2px 2px 4px #00000029;\n    opacity: 1;\n    border-radius: 4px;\n}\n.popover__content_textArea[data-v-32ae2707] {\n    margin-top: 17px\n}\n.popover__content_input[data-v-32ae2707] {\n    margin-top: 24px\n}\n.popover__content[data-v-32ae2707]:before {\n    position: absolute;\n    z-index: -1;\n    content: "";\n    right: calc(50% - 10px);\n    top: -8px;\n    border-style: solid;\n    background-color: white;\n    border-width: 0 10px 10px 10px;\n    border-color: transparent transparent transparent transparent;\n    transition-duration: 0.3s;\n    transition-property: transform;\n    border-left: 0.5px solid grey;\n    border-top: 0.5px solid grey;\n    transform: rotate(45deg);\n    margin-top: 2.5px;\n    /* border: 0.5px solid grey; */\n}\n.popoverText[data-v-32ae2707] {\n    font-style: normal;\n    font-weight: 500;\n    font-size: 12px;\n    color: #212121;\n    letter-spacing: 0px;\n    opacity: 1;\n    margin-left: 5px;\n    padding-top: 3px;\n}\n.popoverIcon[data-v-32ae2707] {\n    font-style: normal;\n    font-size: 16px;\n    letter-spacing: 0.29px;\n    color: #29C660;\n    opacity: 1;\n}\n.errorContent[data-v-32ae2707] {\n\n    display: flex;\n}\n.closeIcon[data-v-32ae2707] {\n    color: red;\n}\n.errorDiv[data-v-32ae2707] {\n    margin-top: 10px;\n    margin-left: 10px;\n    margin-bottom: 12px;\n}\n.hover-info:hover .button-tooltip[data-v-32ae2707] {\n    visibility: visible;\n    transition: opacity 0.3s ease-out 1s;\n    opacity: 1;\n}\n.hover-info[data-v-32ae2707] {\n    color: #757575;\n    font-size: 20px;\n    margin-left: 10px;\n}\n.button-tooltip[data-v-32ae2707] {\n    visibility: hidden;\n    position: absolute;\n    background: #757575;\n    color: #FFFFFF;\n    font-size: 13px;\n    font-family: \'Roboto\';\n    text-align: center;\n    border-radius: 4px;\n    letter-spacing: 0.2px;\n    padding: 6px 8px 6px 8px;\n    margin-top: 15px;\n    opacity: 0;\n    z-index: 1; \n    width: 300px;\n}\ninput[data-v-32ae2707]:disabled,\ntextarea[data-v-32ae2707]:disabled {\n    opacity: 0.7;\n    cursor: not-allowed;\n    background: #E3E3E3;\n}\ninput[data-v-32ae2707]:disabled::placeholder,\ntextarea[data-v-32ae2707]:disabled::placeholder {\n    color: #BCBCBC;\n}\n',""]);const r=l},52233:(n,e,a)=>{a.d(e,{Z:()=>r});var t=a(8375),o=a.n(t),i=a(7638),l=a.n(i)()(o());l.push([n.id,'\n*[data-v-e4f0416a] {\n    font-family: "Roboto";\n}\n.container[data-v-e4f0416a] {\n    padding: 32px 20px 20px\n}\n.updateOrCreateTextAreaDiv[data-v-e4f0416a] {\n    height: 77px;\n}\n.appInfo[data-v-e4f0416a] {\n    color: #151233;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 14px;\n    font-family: "ROBOTO";\n    letter-spacing: 0px;\n    opacity: 1;\n}\n.updateOrCreateTextarea[data-v-e4f0416a] {\n    width: 100%;\n    outline: none;\n    height: 120px;\n    border: 1px solid #A1A1A1;\n    border-radius: 4px;\n    opacity: 1;\n    resize: none;\n    margin-top: 3px;\n}\n.updateOrCreateInputDiv[data-v-e4f0416a] {\n    height: 173px;\n}\n.updateOrCreateInput[data-v-e4f0416a] {\n    width: 100%;\n    outline: none;\n    height: 40px;\n    border: 1px solid #A1A1A1;\n    border-radius: 4px;\n    opacity: 1;\n    margin-top: 3px;\n}\n.updateOrCreateRow[data-v-e4f0416a] {\n    display: flex;\n    text-align: end;\n}\n.updateOrCreateBtn[data-v-e4f0416a] {\n    background-color: #151233;\n    color: #fff;\n    border-radius: 4px;\n    /* width: 72px; */\n    height: 40px;\n    font-weight: 500;\n    font-size: 16px;\n    padding: 8px 15px;\n}\n.cancel-button[data-v-e4f0416a] {\n    font-weight: 500;\n    font-size: 16px;\n    text-align: center;\n    color: #757575;\n    padding: 8px 16px;\n    border-radius: 4px;\n    margin-right: 4px;\n    border: none;\n    background: transparent;\n}\n[data-v-e4f0416a]::placeholder {\n    padding-left: 10px;\n    padding-top: 5px;\n    color: #A1A1A1;\n    font-style: normal;\n    font-family: "ROBOTO";\n    letter-spacing: 0px;\n    font-size: 14px;\n    opacity: 1px;\n}\n',""]);const r=l},38695:(n,e,a)=>{a.d(e,{T:()=>t});const t=Symbol.for("IFormValidator")},19508:(n,e,a)=>{a.d(e,{h:()=>t});const t=Symbol.for("IApplicationUseCase")},38223:(n,e,a)=>{a.d(e,{Z:()=>R});var t=a(71093),o=a(66190),i=a(46233),l=a(73843),r=a(5627),p=a(38695);const d={key:0,class:"infoText"},s={key:1,class:"hover-info"},u=(n=>((0,t.dD)("data-v-32ae2707"),n=n(),(0,t.Cn)(),n))((()=>(0,t._)("i",{class:"mdi mdi-information",style:{"font-size":"20px"}},null,-1))),c={class:"button-tooltip"},v={class:"popover__wrapper"},x=["placeholder","id","disabled"],g=["id","placeholder","type","disabled"],f={style:{height:"100%"},class:"errorDiv"},m={class:"errorContent"},b={class:"popoverText"},h=(0,t.aZ)({__name:"IDEInput",props:{elementId:null,isRequired:{type:Boolean},infoText:null,placeholder:null,type:null,textAreaHeight:null,value:null,validations:null,disableRequiredIcon:{type:Boolean},infoHover:null,isDisabled:{type:Boolean}},emits:["validateStatus","getValue"],setup(n,{emit:e}){const a=n,h=r.nC.resolve(p.T),y=(0,l.iH)([]),A=(0,l.iH)(!1),_=(0,l.iH)(a.value||""),C=(0,l.iH)(!a.isRequired),w=(0,l.iH)(!1);function I(){F()}function z(){A.value=!1}function D(){e("getValue",_.value),w.value=!0,F()}function F(){return a.isRequired&&0==_.value.length?(y.value=[],void O(!1)):!a.isRequired&&0==_.value.length||!a.validations?(y.value=[],void O(!0)):(y.value=h.validate(_.value,a.validations),void O(!(0!=y.value.filter((n=>0==n.isValid)).length&&_.value.length>0)))}function O(n){e("validateStatus",n),A.value=!n,C.value=n}return F(),(0,t.YP)((()=>a.value),(n=>{_.value=null!=n?n:""})),(e,l)=>((0,t.wg)(),(0,t.iD)(t.HY,null,[n.infoText?((0,t.wg)(),(0,t.iD)("span",d,(0,o.toDisplayString)(n.infoText),1)):(0,t.kq)("v-if",!0),n.infoHover?((0,t.wg)(),(0,t.iD)("span",s,[u,(0,t._)("span",c,(0,o.toDisplayString)(n.infoHover),1)])):(0,t.kq)("v-if",!0),(0,t._)("div",null,[(0,t._)("div",v,["textarea"==a.type?(0,t.wy)(((0,t.wg)(),(0,t.iD)("textarea",{key:0,class:"textAreaClass",style:(0,o.normalizeStyle)((w.value?"border: 1px solid "+(C.value?"#A1A1A1;":"red;"):"")+(a.textAreaHeight?" height:"+a.textAreaHeight:"")),placeholder:a.placeholder,"onUpdate:modelValue":l[0]||(l[0]=n=>_.value=n),onInput:l[1]||(l[1]=n=>D()),id:a.elementId,onFocus:l[2]||(l[2]=n=>I()),onBlur:l[3]||(l[3]=n=>z()),disabled:n.isDisabled},null,44,x)),[[i.vModelText,_.value]]):(0,t.wy)(((0,t.wg)(),(0,t.iD)("input",{key:1,id:a.elementId,class:"inputClass",placeholder:a.placeholder,type:a.type,"onUpdate:modelValue":l[4]||(l[4]=n=>_.value=n),style:(0,o.normalizeStyle)(w.value?"border: 1px solid "+(C.value?"#A1A1A1;":"red;"):""),onInput:l[5]||(l[5]=n=>D()),onFocus:l[6]||(l[6]=n=>I()),onBlur:l[7]||(l[7]=n=>z()),disabled:n.isDisabled},null,44,g)),[[i.vModelDynamic,_.value]]),A.value&&y.value.length>0?((0,t.wg)(),(0,t.iD)("div",{key:2,class:(0,o.normalizeClass)("textarea"==a.type?"popover__content popover__content_textArea":"popover__content popover__content_input")},[(0,t._)("div",f,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(y.value,(n=>((0,t.wg)(),(0,t.iD)("div",m,[(0,t._)("i",{class:(0,o.normalizeClass)(n.isValid?"popoverIcon mdi mdi-check-circle":"popoverIcon mdi mdi-close-circle closeIcon")},null,2),(0,t._)("a",b,(0,o.toDisplayString)(n.message),1)])))),256))])],2)):(0,t.kq)("v-if",!0)])])],64))}});var y=a(17450),A=a.n(y),_=a(29530),C=a.n(_),w=a(16199),I=a.n(w),z=a(40458),D=a.n(z),F=a(62916),O=a.n(F),k=a(92165),T=a.n(k),S=a(26149),H={};H.styleTagTransform=T(),H.setAttributes=D(),H.insert=I().bind(null,"head"),H.domAPI=C(),H.insertStyleElement=O(),A()(S.Z,H),S.Z&&S.Z.locals&&S.Z.locals;const R=(0,a(32525).Z)(h,[["__scopeId","data-v-32ae2707"]])},34576:(n,e,a)=>{a.r(e),a.d(e,{default:()=>S});var t=a(71093),o=a(66190),i=a(73843),l=a(5627),r=a(19508),p=a(83487),d=a(88613),s=a(38223);const u={class:"container"},c={class:"updateOrCreateTextAreaDiv"},v={class:"updateOrCreateInputDiv"},x={class:"updateOrCreateRow"},g={class:"col"},f=["disabled"],m=(0,t.aZ)({__name:"addOrUpdateApp",props:{app:null,templateName:null,organizationGroupId:null},emits:["close"],setup(n,{emit:e}){var a,m,b,h;const y=n,A=l.nC.resolve(p.y),_=l.nC.resolve(r.h),C=l.nC.resolve(d.J),w=(0,i.iH)(null===(a=y.app)||void 0===a?void 0:a.name),I=(0,i.iH)(!1),z=(0,i.iH)(!0),D=(0,i.iH)(null===(m=y.app)||void 0===m?void 0:m.description),F=(0,i.iH)(null===(h=null===(b=C.user)||void 0===b?void 0:b.selectedOrganizationGroup)||void 0===h?void 0:h.organizationGroup),O=(0,i.iH)({name:{minAndMaxLength:{min:3,max:25},availableCharacters:!0,nonSpaceCharacter:!0},description:{minAndMaxLength:{min:3,max:100},availableCharacters:!1,nonSpaceCharacter:!1}});function k(n){I.value=n}function T(n){z.value=n}function S(n){w.value=n}function H(n){D.value=n}const R=(0,i.Fl)((()=>!I.value||!z.value||!(!y.app||y.app.name!=w.value||y.app.description!=D.value)));return(a,l)=>{var r,p;return(0,t.wg)(),(0,t.iD)("div",u,[(0,t._)("div",c,[(0,t.Wm)(s.Z,{isRequired:!0,elementId:"nameInput",onGetValue:S,onValidateStatus:k,placeholder:"",type:"text",value:null===(r=y.app)||void 0===r?void 0:r.name,"info-text":"Application Name",validations:O.value.name},null,8,["value","validations"])]),(0,t._)("div",v,[(0,t.Wm)(s.Z,{isRequired:!1,elementId:"descriptionInput",onValidateStatus:T,placeholder:"",type:"textarea",value:null===(p=y.app)||void 0===p?void 0:p.description,"info-text":"Description",validations:O.value.description,onGetValue:H},null,8,["value","validations"])]),(0,t._)("div",x,[(0,t._)("div",g,[(0,t._)("button",{class:"cancel-button",onClick:l[0]||(l[0]=n=>{e("close")})},"Cancel"),(0,t._)("button",{style:(0,o.normalizeStyle)({color:(0,i.SU)(R)?"#757575":"#FFFFFF"}),class:"updateOrCreateBtn",onClick:l[1]||(l[1]=n=>function(){var n;A.execute((async()=>{e("close"),y.app?await _.updateApplication({ID:y.app.ID,name:w.value,description:D.value,updateReason:"userUpdate"}):await _.createApplication({name:w.value,description:D.value,templateName:y.templateName,organizationGroupId:y.organizationGroupId}),w.value=D.value=""}),{loading:!(null===(n=F.value)||void 0===n?void 0:n.mainOrganizationId),noContinueInBgBtn:!0})}()),disabled:(0,i.SU)(R)},(0,o.toDisplayString)(n.app?"SAVE":"CREATE"),13,f)])])])}}});var b=a(17450),h=a.n(b),y=a(29530),A=a.n(y),_=a(16199),C=a.n(_),w=a(40458),I=a.n(w),z=a(62916),D=a.n(z),F=a(92165),O=a.n(F),k=a(52233),T={};T.styleTagTransform=O(),T.setAttributes=I(),T.insert=C().bind(null,"head"),T.domAPI=A(),T.insertStyleElement=D(),h()(k.Z,T),k.Z&&k.Z.locals&&k.Z.locals;const S=(0,a(32525).Z)(m,[["__scopeId","data-v-e4f0416a"]])}}]);