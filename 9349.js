"use strict";(this.webpackChunkqcloud_shell=this.webpackChunkqcloud_shell||[]).push([[9349,9240],{26149:(n,e,t)=>{t.d(e,{Z:()=>l});var o=t(8375),a=t.n(o),i=t(7638),r=t.n(i)()(a());r.push([n.id,'\n.infoText[data-v-32ae2707] {\n    color: #151233;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 14px;\n    font-family: "ROBOTO";\n    letter-spacing: 0px;\n    opacity: 1;\n}\n.textAreaClass[data-v-32ae2707] {\n    width: 100%;\n    outline: none;\n    height: 120px;\n    border: 1px solid #A1A1A1;\n    border-radius: 4px;\n    opacity: 1;\n    resize: none;\n    margin-top: 3px;\n    padding-left: 7px;\n}\n.inputClass[data-v-32ae2707] {\n    width: 100%;\n    outline: none;\n    height: 40px;\n    border: 1px solid #A1A1A1;\n    border-radius: 4px;\n    opacity: 1;\n    margin-top: 3px;\n    padding-left: 7px;\n}\n.inputClass[data-v-32ae2707]:disabled,\n.textAreaClass[data-v-32ae2707]:disabled {\n    opacity: 0.4;\n}\n.errorMessage[data-v-32ae2707] {\n    color: #212121;\n    font-style: normal;\n    font-weight: 400;\n    font-family: \'ROBOTO\';\n    font-size: 12px;\n    letter-spacing: 0px;\n    opacity: 1;\n}\n.validationErrorIcon[data-v-32ae2707] {\n    color: red;\n    font-size: 13px;\n}\n[data-v-32ae2707]::placeholder {\n    color: #A1A1A1;\n    font-style: normal;\n    font-family: "ROBOTO";\n    letter-spacing: 0px;\n    font-size: 14px;\n    opacity: 1px;\n}\n.requiredIcon[data-v-32ae2707] {\n    color: #757575;\n    font-size: 15px;\n}\n.title[data-v-32ae2707] {\n    background-color: red;\n}\n.dropdown-menu[data-v-32ae2707] {\n    display: list-item;\n    position: absolute;\n    inset: 0px auto auto 0px;\n    margin: 0px;\n    background-color: #FFFFFF;\n    border: 0.5px solid var(--grey);\n    box-shadow: 2px 2px 4px #00000029;\n    border-radius: 2px;\n    padding: .5rem 0;\n}\n.deneme[data-v-32ae2707] {\n    background-color: red;\n}\na[data-v-32ae2707] {\n    text-decoration: none;\n}\n.popover__title[data-v-32ae2707] {\n    font-size: 24px;\n    line-height: 36px;\n    text-decoration: none;\n    color: rgb(228, 68, 68);\n    text-align: center;\n    padding: 15px 0;\n}\n.popover__content[data-v-32ae2707] {\n    opacity: 0;\n    visibility: hidden;\n    position: absolute;\n    left: 120px;\n    transform: translate(0, 10px);\n    background-color: white;\n    width: auto;\n    padding-left: 0px;\n    padding-right: 10px;\n    z-index: 10;\n    opacity: 1;\n    visibility: visible;\n    transform: translate(0, -20px);\n    transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);\n    border: 0.5px solid grey;\n    background: #FFFFFF 0% 0% no-repeat padding-box;\n    box-shadow: 2px 2px 4px #00000029;\n    opacity: 1;\n    border-radius: 4px;\n}\n.popover__content_textArea[data-v-32ae2707] {\n    margin-top: 17px\n}\n.popover__content_input[data-v-32ae2707] {\n    margin-top: 24px\n}\n.popover__content[data-v-32ae2707]:before {\n    position: absolute;\n    z-index: -1;\n    content: "";\n    right: calc(50% - 10px);\n    top: -8px;\n    border-style: solid;\n    background-color: white;\n    border-width: 0 10px 10px 10px;\n    border-color: transparent transparent transparent transparent;\n    transition-duration: 0.3s;\n    transition-property: transform;\n    border-left: 0.5px solid grey;\n    border-top: 0.5px solid grey;\n    transform: rotate(45deg);\n    margin-top: 2.5px;\n    /* border: 0.5px solid grey; */\n}\n.popoverText[data-v-32ae2707] {\n    font-style: normal;\n    font-weight: 500;\n    font-size: 12px;\n    color: #212121;\n    letter-spacing: 0px;\n    opacity: 1;\n    margin-left: 5px;\n    padding-top: 3px;\n}\n.popoverIcon[data-v-32ae2707] {\n    font-style: normal;\n    font-size: 16px;\n    letter-spacing: 0.29px;\n    color: #29C660;\n    opacity: 1;\n}\n.errorContent[data-v-32ae2707] {\n\n    display: flex;\n}\n.closeIcon[data-v-32ae2707] {\n    color: red;\n}\n.errorDiv[data-v-32ae2707] {\n    margin-top: 10px;\n    margin-left: 10px;\n    margin-bottom: 12px;\n}\n.hover-info:hover .button-tooltip[data-v-32ae2707] {\n    visibility: visible;\n    transition: opacity 0.3s ease-out 1s;\n    opacity: 1;\n}\n.hover-info[data-v-32ae2707] {\n    color: #757575;\n    font-size: 20px;\n    margin-left: 10px;\n}\n.button-tooltip[data-v-32ae2707] {\n    visibility: hidden;\n    position: absolute;\n    background: #757575;\n    color: #FFFFFF;\n    font-size: 13px;\n    font-family: \'Roboto\';\n    text-align: center;\n    border-radius: 4px;\n    letter-spacing: 0.2px;\n    padding: 6px 8px 6px 8px;\n    margin-top: 15px;\n    opacity: 0;\n    z-index: 1; \n    width: 300px;\n}\ninput[data-v-32ae2707]:disabled,\ntextarea[data-v-32ae2707]:disabled {\n    opacity: 0.7;\n    cursor: not-allowed;\n    background: #E3E3E3;\n}\ninput[data-v-32ae2707]:disabled::placeholder,\ntextarea[data-v-32ae2707]:disabled::placeholder {\n    color: #BCBCBC;\n}\n',""]);const l=r},63267:(n,e,t)=>{t.d(e,{Z:()=>l});var o=t(8375),a=t.n(o),i=t(7638),r=t.n(i)()(a());r.push([n.id,'\n.createButtonDiv[data-v-5378fa42] {\n    height: 72px;\n    top: calc(100% - 72px);\n    width: 100%;\n    position: absolute\n}\n.createButton[data-v-5378fa42] {\n    background-color: #151233;\n    color: white;\n    border-radius: 4px;\n    border: none;\n    width: 97px;\n    height: 40px;\n    font-weight: 500;\n    font-size: 15px;\n    font-family: "ROBOTO";\n    left: calc(100% - 117px);\n    top: 16px;\n    position: absolute;\n}\n.cancelButton[data-v-5378fa42] {\n    background-color: transparent;\n    color: #757575;\n    border-radius: 4px;\n    border: none;\n    width: 90px;\n    height: 40px;\n    font-weight: 500;\n    font-size: 15px;\n    font-family: "ROBOTO";\n    left: calc(100% - 211px);\n    top: 16px;\n    position: absolute;\n}\n',""]);const l=r},97175:(n,e,t)=>{t.d(e,{Z:()=>d});var o=t(8375),a=t.n(o),i=t(7638),r=t.n(i),l=t(79240),p=r()(a());p.i(l.Z),p.push([n.id,"\n",""]);const d=p},79240:(n,e,t)=>{t.d(e,{Z:()=>l});var o=t(8375),a=t.n(o),i=t(7638),r=t.n(i)()(a());r.push([n.id,'* {\n    font-family: \'Roboto\'\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    background-color: #EEEEEE !important;\n}\n\n.nav-container {\n    background-color: #eceff1;\n    height: 72px;\n    border-bottom: 1px solid #bcbcbc;\n    display: flex;\n}\n\n.navbar {\n    margin: 0 !important;\n    padding: 0 !important;\n}\n\n.vertical-nav {\n    width: 56px;\n    height: 100vh;\n    position: fixed;\n    top: 0;\n    left: 0;\n    background-color: #151233;\n    z-index: 1;\n}\n\n.nav-icons {\n    display: flex;\n}\n\n#inside-logo {\n    margin-left: 38px;\n    margin-top: 8px;\n}\n\n/* .page-content {     //applicationList menu gap\n    margin-left: 3.5rem;\n} */\n\n.bottom-icons {\n    margin-right: 8px;\n    margin-bottom: 10px;\n    width: 100%;\n}\n\n.home-icon {\n    font-size: 30px;\n    margin-left: -3px;\n    color: #ffffff;\n}\n\n.vertical-icons {\n    color: #ffffff;\n}\n\n.vertical-icons-text {\n    margin-top: 8px;\n    margin-left: 5px;\n    color: #fff;\n    font-size: 16px;\n    font-weight: 400;\n}\n\n.vertical-icons-containers {\n    display: flex;\n    height: 40px;\n    width: 40px;\n    margin-left: 2px;\n    align-items: center;\n    justify-content: center;\n    border-radius: 4px;\n}\n\n.wrapper {\n    display: flex;\n    width: 100%;\n    border-radius: 4px;\n    margin: 8px 8px 0 5px;\n}\n\n.vertical-icons-containers:hover,\n.wrapper:hover {\n    background-color: #3e3c56;\n}\n\n.grid-icon {\n    padding-top: 10px;\n    padding-bottom: 44px;\n}\n\n.navbar-icons {\n    float: right;\n    padding-right: 55px;\n    text-align: -webkit-right;\n}\n\n/* .logo {\n    margin-top: 18px;\n    margin-left: 14px;\n} */\n\n.bell,\n.forum {\n    font-size: 32px;\n}\n\n.user {\n    font-size: 38px;\n    color: red;\n}\n\n.separator {\n    margin: 3rem 0;\n    border-bottom: 1px dashed #fff;\n}\n\n.applications {\n    font-size: 26px;\n    color: #151233;\n    font-weight: bold;\n}\n\n.applications-container {\n    margin-left: 88px;\n    margin-top: 22px;\n    margin-right: 23px;\n}\n\n.app-text {\n    font-size: 18px;\n    color: #212121;\n    font-weight: bold;\n}\n\n.app-text2 {\n    font-size: 15px;\n    color: #616161;\n}\n\n.createAppCursor {\n    cursor: pointer;\n}\n\n.sideNavCursor {\n    cursor: pointer;\n}\n\n.collapse-card {\n    background-color: #dee1e2 !important;\n    border: none !important;\n}\n\n.collapse-card-dec {\n    border: 1px solid #d0d1e9;\n    border-radius: 6px !important;\n}\n\n.etkilesimlivideo-text {\n    margin-left: 23px;\n}\n\n.collapse-title {\n    color: #000;\n    font-size: 14px;\n    font-weight: bold;\n}\n\n.collapse-text {\n    color: #757575;\n    font-size: 12px;\n}\n\n.collapse-plus-icon {\n    color: #d5d5d5;\n}\n\n.plus-icon-container {\n    margin-left: 2px;\n    margin-top: 25px !important;\n}\n\n.plus-icon {\n    font-size: 34px;\n    color: #151233;\n}\n\n.plus-btn {\n    margin-bottom: 15px;\n    margin-right: 7px;\n    margin-left: -5px;\n}\n\n.text-container {\n    display: flex;\n    margin-left: 15px;\n    margin-top: 14px;\n    align-items: center;\n}\n\ninput[type="search"] {\n    border: none;\n    border-radius: 4px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    width: 350px;\n    font-size: 18px;\n    padding-left: 40px;\n    margin-right: 25px;\n}\n\ninput[type="search"]::placeholder {\n    color: #909090;\n}\n\n.search-icon {\n    position: absolute;\n    margin-left: 10px;\n    margin-top: 6px;\n    font-size: 24px;\n    color: #909090;\n}\n\n.dashboard-icon,\n.bulleted-icon {\n    font-size: 30px;\n    margin: 10px;\n}\n\n.filter-icons-container {\n    display: flex;\n    align-items: center;\n    border-radius: 4px;\n    background-color: #fff;\n    height: 46px;\n    color: #909090;\n}\n\n.logout-icon {\n    cursor: pointer;\n}\n\n.profile-icon {\n    font-size: 38px;\n    cursor: pointer;\n}\n\n.openApp-link {\n    cursor: pointer;\n}\n\n.last-opened {\n    display: flex;\n    align-items: center;\n}\n\n.last-opened-text {\n    color: #616161;\n    font-size: 14px;\n    font-weight: 680;\n    margin-left: 20px;\n    margin-top: 15px;\n}\n\n.last-open-icon {\n    color: #616161;\n    font-size: 20px;\n    margin-left: 5px;\n}\n\n.each-card {\n    height: 330px;\n    width: 280px;\n    margin-bottom: 26px;\n    border-radius: 10px;\n    box-shadow: 1px 1px 2px #21212129;\n}\n\n\n.card-logo {\n    border-radius: 9px 9px 0px 0px;\n}\n\n.name-input-div {\n    padding-left: 20px;\n    padding-right: 20px;\n    padding-top: 18px;\n}\n\n.input-label {\n    color: #000000;\n    font-weight: 500;\n    font-family: \'Roboto\';\n    font-size: 14px;\n    margin-left: 6px;\n}\n\n.label-value {\n    color: #151233;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 14px;\n    font-family: "ROBOTO";\n}\n\n.card-title {\n    white-space: nowrap;\n    overflow: hidden !important;\n    text-overflow: ellipsis;\n    color: #00559f;\n    font-size: 18px;\n    font-weight: bold;\n}\n\n.card-description {\n    white-space: nowrap;\n    overflow: hidden !important;\n    text-overflow: ellipsis;\n    color: #757575;\n    font-size: 14px;\n    margin-bottom: 5px;\n}\n\n.card-info {\n    color: #616161;\n    font-size: 14px;\n    font-weight: 700;\n    margin-bottom: 20px;\n}\n\n.vertical-dot-icon {\n    font-size: 24px;\n}\n\n.dot-icon {\n    margin-top: -3px !important;\n    color: #909090;\n    text-align: end;\n}\n\n.card-mpt {\n    font-size: 14px;\n    color: #757575;\n    font-weight: 600;\n}\n\n.card-numbers {\n    color: #00559f;\n    font-size: 16px;\n    font-weight: bold;\n}\n\n.open-in-studio {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    color: #212121;\n    font-weight: 500;\n    font-size: 16px;\n    padding-top: 21px;\n    letter-spacing: 0.02px;\n    margin-left: 23px;\n    font-family: \'Roboto\';\n}\n\n.dashes {\n    border-left: 2px solid #dee1e2;\n    border-right: 2px solid #dee1e2;\n    height: 35px;\n}\n\n.table-logo {\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    padding-right: 2px;\n}\n\n.vue-table .VueTables__search-field label {\n    display: none\n}\n\n.vue-table .form-control {\n    border: 1px solid #BCBCBC;\n    color: #212121\n}\n\n.vue-table .form-control:focus {\n    box-shadow: none;\n    border-color: #BCBCBC;\n}\n\n.vue-table table {\n    border: 1px solid #E3E3E3;\n    margin-top: 12px;\n    margin-bottom: 20px;\n    /* border-radius: 10px; */\n    vertical-align: middle;\n    width: 100%;\n}\n\n.vue-table table tbody {\n    border-top: none !important;\n}\n\n.vue-table .td-border {\n    border-left: 4px solid #00559f !important;\n    display: flex;\n    align-items: center;\n}\n\n.vue-table th {\n    color: #616161;\n    font-size: 14px;\n    font-weight: 500;\n    border: none;\n    background: #F5F5F5 !important;\n    padding: 8px 0 8px 20px;\n}\n\n.vue-table td {\n    color: #212121 !important;\n    font-size: 14px;\n    border: none;\n    background: #FFFFFF;\n    padding: 8px 0 8px 20px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    max-width: 209px;\n    white-space: nowrap;\n}\n\n.vue-table .table-container {\n    border: 1px solid #e0e0e0;\n    background-color: #fff;\n    border-radius: 4px;\n    box-shadow: 1px 1px 2px #00000029;\n}\n\n.vue-table tbody>tr:hover td {\n    background-color: #eeeeee;\n}\n\n.vue-table .VuePagination {\n    margin: 0;\n}\n\n.vue-table .VuePagination nav {\n    display: flex;\n    padding: 0;\n}\n\n.vue-table .VuePagination nav ul {\n    margin: 0;\n    margin-left: auto;\n    align-items: center;\n\n}\n\n.vue-table .VuePagination nav p {\n    display: none\n}\n\n.vue-table .VuePagination .page-link {\n    border: none;\n    color: #616161;\n    font-size: 14px;\n}\n\n.vue-table .VuePagination .page-link:hover {\n    background-color: #EEEEEE;\n}\n\n.vue-table .VuePagination .page-link.active {\n    background-color: #151233;\n    color: #FFFFFF;\n    border-radius: 4px;\n}\n\n.vue-table .VuePagination .page-link:focus {\n    box-shadow: none;\n}\n\n.vue-table .VuePagination .VuePagination__pagination-item-prev-page .page-link,\n.vue-table .VuePagination .VuePagination__pagination-item-next-page .page-link {\n    color: #151233;\n    background: none;\n    font-size: 18px;\n}\n\n.vue-table .VuePagination .VuePagination__pagination-item-prev-page .page-link:hover,\n.vue-table .VuePagination .VuePagination__pagination-item-next-page .page-link:hover {\n    background: none;\n}\n\n.vue-table .VuePagination .VuePagination__pagination-item-prev-page.disabled .page-link,\n.vue-table .VuePagination .VuePagination__pagination-item-next-page.disabled .page-link {\n    color: #BCBCBC;\n}\n\n.vue-table .VuePagination .VuePagination__pagination-item-prev-chunk,\n.vue-table .VuePagination .VuePagination__pagination-item-next-chunk {\n    display: none;\n}\n\n.VueTables__child-row-toggler {\n    width: 16px;\n    height: 16px;\n    line-height: 16px;\n    display: block;\n    margin: auto;\n    text-align: center;\n}\n\n.VueTables__child-row-toggler--closed::before {\n    font-family: "Material Design Icons";\n    content: "\\F0143";\n}\n\n.VueTables__child-row-toggler--open::before {\n    font-family: "Material Design Icons";\n    content: "\\F0140";\n}\n\n.node-text {\n    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-16) / var(--unnamed-line-spacing-21) var(--unnamed-font-family-roboto);\n    letter-spacing: var(--unnamed-character-spacing-0);\n    color: var(--grey-darken-4);\n    text-align: left;\n    font: normal normal normal 16px/21px Roboto;\n    letter-spacing: 0px;\n    color: #212121;\n    opacity: 1;\n}\n\n.deploy-screen-disabled-node .node-text {\n    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-16) / var(--unnamed-line-spacing-21) var(--unnamed-font-family-roboto);\n    letter-spacing: var(--unnamed-character-spacing-0);\n    color: var(--grey-darken-4);\n    text-align: left;\n    font: normal normal normal 16px/21px Roboto;\n    letter-spacing: 0px;\n    color: gray;\n    opacity: 1;\n}\n\n.deploy-screen-disabled-icon {\n    color: gray !important;\n}\n\n::-webkit-scrollbar-thumb {\n    background: #BDBDBD;\n    border-radius: 8px;\n    border: 4px solid transparent;\n    background-clip: padding-box;\n}\n\n::-webkit-scrollbar-track {\n    background: transparent;\n}\n\n::-webkit-scrollbar {\n    background: transparent;\n}\n\ndiv[class="node-wrapper deploy-screen-disabled-node"] .checkbox-wrapper {\n    background: #eeede7 0% 0% no-repeat padding-box !important;\n}\n\ndiv[class="node-wrapper focused deploy-screen-disabled-node"] .checkbox-wrapper {\n    background: #eeede7 0% 0% no-repeat padding-box !important;\n}\n\ndiv[class="checkbox-wrapper checked"] {\n    background: #151233 0% 0% no-repeat padding-box !important;\n}\n\ndiv[class="checkbox-wrapper indeterminate"] {\n    background: #151233 0% 0% no-repeat padding-box !important;\n}\n\n.user-menu-border {\n    border-bottom: 1px solid #eee;\n    margin: 8px;\n}',""]);const l=r},38223:(n,e,t)=>{t.d(e,{Z:()=>I});var o=t(71093),a=t(66190),i=t(46233),r=t(73843),l=t(5627),p=t(38695);const d={key:0,class:"infoText"},s={key:1,class:"hover-info"},c=(n=>((0,o.dD)("data-v-32ae2707"),n=n(),(0,o.Cn)(),n))((()=>(0,o._)("i",{class:"mdi mdi-information",style:{"font-size":"20px"}},null,-1))),u={class:"button-tooltip"},x={class:"popover__wrapper"},g=["placeholder","id","disabled"],b=["id","placeholder","type","disabled"],f={style:{height:"100%"},class:"errorDiv"},m={class:"errorContent"},v={class:"popoverText"},h=(0,o.aZ)({__name:"IDEInput",props:{elementId:null,isRequired:{type:Boolean},infoText:null,placeholder:null,type:null,textAreaHeight:null,value:null,validations:null,disableRequiredIcon:{type:Boolean},infoHover:null,isDisabled:{type:Boolean}},emits:["validateStatus","getValue"],setup(n,{emit:e}){const t=n,h=l.nC.resolve(p.T),y=(0,r.iH)([]),w=(0,r.iH)(!1),k=(0,r.iH)(t.value||""),_=(0,r.iH)(!t.isRequired),z=(0,r.iH)(!1);function B(){A()}function C(){w.value=!1}function F(){e("getValue",k.value),z.value=!0,A()}function A(){return t.isRequired&&0==k.value.length?(y.value=[],void V(!1)):!t.isRequired&&0==k.value.length||!t.validations?(y.value=[],void V(!0)):(y.value=h.validate(k.value,t.validations),void V(!(0!=y.value.filter((n=>0==n.isValid)).length&&k.value.length>0)))}function V(n){e("validateStatus",n),w.value=!n,_.value=n}return A(),(0,o.YP)((()=>t.value),(n=>{k.value=null!=n?n:""})),(e,r)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[n.infoText?((0,o.wg)(),(0,o.iD)("span",d,(0,a.toDisplayString)(n.infoText),1)):(0,o.kq)("v-if",!0),n.infoHover?((0,o.wg)(),(0,o.iD)("span",s,[c,(0,o._)("span",u,(0,a.toDisplayString)(n.infoHover),1)])):(0,o.kq)("v-if",!0),(0,o._)("div",null,[(0,o._)("div",x,["textarea"==t.type?(0,o.wy)(((0,o.wg)(),(0,o.iD)("textarea",{key:0,class:"textAreaClass",style:(0,a.normalizeStyle)((z.value?"border: 1px solid "+(_.value?"#A1A1A1;":"red;"):"")+(t.textAreaHeight?" height:"+t.textAreaHeight:"")),placeholder:t.placeholder,"onUpdate:modelValue":r[0]||(r[0]=n=>k.value=n),onInput:r[1]||(r[1]=n=>F()),id:t.elementId,onFocus:r[2]||(r[2]=n=>B()),onBlur:r[3]||(r[3]=n=>C()),disabled:n.isDisabled},null,44,g)),[[i.vModelText,k.value]]):(0,o.wy)(((0,o.wg)(),(0,o.iD)("input",{key:1,id:t.elementId,class:"inputClass",placeholder:t.placeholder,type:t.type,"onUpdate:modelValue":r[4]||(r[4]=n=>k.value=n),style:(0,a.normalizeStyle)(z.value?"border: 1px solid "+(_.value?"#A1A1A1;":"red;"):""),onInput:r[5]||(r[5]=n=>F()),onFocus:r[6]||(r[6]=n=>B()),onBlur:r[7]||(r[7]=n=>C()),disabled:n.isDisabled},null,44,b)),[[i.vModelDynamic,k.value]]),w.value&&y.value.length>0?((0,o.wg)(),(0,o.iD)("div",{key:2,class:(0,a.normalizeClass)("textarea"==t.type?"popover__content popover__content_textArea":"popover__content popover__content_input")},[(0,o._)("div",f,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(y.value,(n=>((0,o.wg)(),(0,o.iD)("div",m,[(0,o._)("i",{class:(0,a.normalizeClass)(n.isValid?"popoverIcon mdi mdi-check-circle":"popoverIcon mdi mdi-close-circle closeIcon")},null,2),(0,o._)("a",v,(0,a.toDisplayString)(n.message),1)])))),256))])],2)):(0,o.kq)("v-if",!0)])])],64))}});var y=t(17450),w=t.n(y),k=t(29530),_=t.n(k),z=t(16199),B=t.n(z),C=t(40458),F=t.n(C),A=t(62916),V=t.n(A),D=t(92165),T=t.n(D),E=t(26149),Z={};Z.styleTagTransform=T(),Z.setAttributes=F(),Z.insert=B().bind(null,"head"),Z.domAPI=_(),Z.insertStyleElement=V(),w()(E.Z,Z),E.Z&&E.Z.locals&&E.Z.locals;const I=(0,t(32525).Z)(h,[["__scopeId","data-v-32ae2707"]])},54439:(n,e,t)=>{t.d(e,{Z:()=>k});var o=t(71093),a=t(66190);const i={class:"createButtonDiv"},r=["disabled"],l=(0,o.aZ)({__name:"createDialogFooter",props:{createButtonText:null,cancelButtonText:null,createButtonEnabled:{type:Boolean},createButtonCb:{type:Function},cancelButtonCb:{type:Function}},setup(n){const e=n;return(t,l)=>((0,o.wg)(),(0,o.iD)("div",i,[(0,o._)("button",{class:"cancelButton",onClick:l[0]||(l[0]=(...n)=>e.cancelButtonCb&&e.cancelButtonCb(...n))},(0,a.toDisplayString)(n.cancelButtonText||"Cancel"),1),(0,o._)("button",{style:(0,a.normalizeStyle)({opacity:e.createButtonEnabled?"":"0.5"}),class:"createButton",onClick:l[1]||(l[1]=(...n)=>e.createButtonCb&&e.createButtonCb(...n)),disabled:!e.createButtonEnabled},(0,a.toDisplayString)(n.createButtonText||"CREATE"),13,r)]))}});var p=t(17450),d=t.n(p),s=t(29530),c=t.n(s),u=t(16199),x=t.n(u),g=t(40458),b=t.n(g),f=t(62916),m=t.n(f),v=t(92165),h=t.n(v),y=t(63267),w={};w.styleTagTransform=h(),w.setAttributes=b(),w.insert=x().bind(null,"head"),w.domAPI=c(),w.insertStyleElement=m(),d()(y.Z,w),y.Z&&y.Z.locals&&y.Z.locals;const k=(0,t(32525).Z)(l,[["__scopeId","data-v-5378fa42"]])},69349:(n,e,t)=>{t.r(e),t.d(e,{default:()=>A});var o=t(71093),a=t(73843),i=t(5627),r=t(83487),l=t(38223),p=t(54439),d=t(69292),s=t(6488);const c={class:"name-input-div",style:{"padding-top":"32px"}},u=(n=>((0,o.dD)("data-v-6adf8e9d"),n=n(),(0,o.Cn)(),n))((()=>(0,o._)("div",{class:"input-label"},"Name",-1))),x=(0,o.aZ)({__name:"createNewCss",props:{param:null},emits:["close"],setup(n,{emit:e}){const t=n.param,x=i.nC.resolve(r.y),g=i.nC.resolve(s.c),b=(0,a.iH)(!1),f=(0,a.iH)({name:{minAndMaxLength:{min:2,max:60},nonSpaceCharacter:!0,customRegex:{regex:/^([a-zA-Z0-9-_]+)$/,message:"Available characters: A-Z, a-z, 1-9, '-' and '_'"}}}),m=(0,a.iH)("");function v(){x.execute((async()=>{const n={name:m.value+".css",ownerId:t.ownerId,modelBody:[{key:"css",model:""}],modelType:"css",key:"style",modelAdditionals:{},path:t.path},o=await x.executeUseCase(d.E,n);await async function(n){await g.checkout(n),g.openItem(n)}(o),e("close")}),{loading:!0})}function h(n){m.value=n}function y(n){b.value=n}return(n,t)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",c,[u,(0,o.Wm)(l.Z,{isRequired:!0,elementId:"nameInput","disable-required-icon":!0,onGetValue:h,onValidateStatus:y,placeholder:"",type:"text","info-text":"",validations:f.value.name},null,8,["validations"])]),(0,o.Wm)(p.Z,{"cancel-button-cb":()=>e("close"),"create-button-cb":v,"create-button-enabled":b.value},null,8,["cancel-button-cb","create-button-enabled"])],64))}});var g=t(17450),b=t.n(g),f=t(29530),m=t.n(f),v=t(16199),h=t.n(v),y=t(40458),w=t.n(y),k=t(62916),_=t.n(k),z=t(92165),B=t.n(z),C=t(97175),F={};F.styleTagTransform=B(),F.setAttributes=w(),F.insert=h().bind(null,"head"),F.domAPI=m(),F.insertStyleElement=_(),b()(C.Z,F),C.Z&&C.Z.locals&&C.Z.locals;const A=(0,t(32525).Z)(x,[["__scopeId","data-v-6adf8e9d"]])}}]);