"use strict";(this.webpackChunk_stechquick_websdk=this.webpackChunk_stechquick_websdk||[]).push([[342],{92954:(t,e,a)=>{a.d(e,{Z:()=>r});var i=a(55402),n=a.n(i),o=a(60352),l=a.n(o)()(n());l.push([t.id,'\n.groupbox-container-toggle[data-v-58022792] {\n  flex: 1 0 100%;\n  max-width: 100%;\n  outline: none;\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  background-color: #fff;\n  color: rgba(0, 0, 0, 0.87);\n  border-top: 1px solid #ebeef5;\n}\n.toggle-body[data-v-58022792] {\n  height: inherit;\n  width: inherit;\n  padding: 14px;\n}\n.toggle-header[data-v-58022792] {\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  position: relative;\n  padding: 12px 24px;\n  min-height: 48px;\n  border-bottom: 1px solid #ebeef5;\n}\n.header[data-v-58022792] {\n  /* display: flex; */\n  cursor: default;\n  align-items: center;\n  position: relative;\n  padding: 12px 12px;\n  min-height: 48px;\n}\n.toggle-header .toggle-header-icon .v-icon[data-v-58022792] {\n  color: rgba(0, 0, 0, 0.54);\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n  transform: rotate(-90deg);\n}\n.header .toggle-header-icon .v-icon[data-v-58022792] {\n  color: rgba(0, 0, 0, 0.54);\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n  transform: rotate(-90deg);\n}\n.header-text[data-v-58022792] {\n  /* display: flex; */\n  font-size: 14pt;\n  min-width: 200px;\n  color: #555;\n  display: inline-block;\n  white-space: normal;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 500;\n}\n.subheader-text[data-v-58022792] {\n  min-width: 200px;\n  color: #555;\n  display: inline-block;\n  white-space: normal;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 200;\n}\n.groupBoxActive .toggle-header-icon .v-icon[data-v-58022792] {\n  transform: rotateZ(0);\n}\n.toggle-header > *[data-v-58022792]:not(.toggle-header-icon) {\n  flex: 1 1 auto;\n}\n.groupBoxActive.toggle-header[data-v-58022792]:before {\n  content: "";\n  position: absolute;\n  height: 2px;\n  width: 95%;\n  top: 100%;\n}\n.fade-enter-active[data-v-58022792],\n.fade-leave-active[data-v-58022792] {\n  transition: opacity 0.5s;\n}\n.fade-enter[data-v-58022792], .fade-leave-to[data-v-58022792] /* .fade-leave-active below version 2.1.8 */ {\n  opacity: 0;\n}\n.defaultDiv[data-v-58022792] {\n  padding: 3px 3px;\n}\n.renderMode[data-v-58022792] {\n  background-color: white;\n  margin: 20px 20px 0;\n  padding: 20px 30px;\n  border-radius: 8px;\n}\n',""]);const r=l},22342:(t,e,a)=>{a.r(e),a.d(e,{default:()=>x});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.formName?a("form",{ref:t.formName,attrs:{"data-vv-name":t.formName,"data-vv-scope":t.formName}},[t.validateAll?a("div",{attrs:{id:t.id}},[t.toggleContent?[a("div",{staticClass:"groupbox-container-toggle",style:"background-color: "+t.backGroundColor+" !important;"},[a("div",{class:t.headerClass||{groupBoxActive:t.toggleContentData},on:{click:t.switchContent}},[a("div",{staticClass:"header-text"},[t._v(t._s(t.toggleTitle))]),t._v(" "),t.showToggleArrow?a("div",{staticClass:"toggle-header-icon"},[a("i",{ref:"toggle-arrow-down",staticClass:"v-icon material-icons theme--light",attrs:{"aria-hidden":"true"}},[t._v("keyboard_arrow_down")])]):t._e()]),t._v(" "),a("div",{staticStyle:{display:"table",width:"100%"}},[a("div",{staticClass:"subheader-text",staticStyle:{width:"50%",padding:"12px 24px"},style:"font-size:"+t.leftSubHeaderFontSize+"; color:"+t.leftSubHeaderFontColor+";"},[t._v(t._s(t.leftSubtitle))]),t._v(" "),a("div",{staticClass:"subheader-text",staticStyle:{width:"50%",padding:"12px 24px","text-align":"right"},style:"font-size:"+t.rightSubHeaderFontSize+"; color:"+t.rightSubHeaderFontColor+";"},[t._v(t._s(t.rigthSubtitle))])]),t._v(" "),a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.toggleContentData,expression:"toggleContentData"}],ref:"holder",staticClass:"toggle-body",style:{display:t.displayData}})])],1)]:[a("div",{ref:"holder",class:[{defaultDiv:t.defaultDiv},{renderMode:t.defaultDiv&&!t._renderingProps.isEditMode}],style:"background-color: "+t.backGroundColor+" !important;  display:"+t.displayData+" !important; "+t.customStyle},[t.showHeader?[a("div",{class:t.headerClass},[a("div",[a("div",{staticClass:"header-text",staticStyle:{width:"50%",float:"left"}},[t._v(t._s(t.toggleTitle))]),t._v(" "),a("div",{staticClass:"header-text",staticStyle:{width:"50%","text-align":"right"}},[t._v(t._s(t.toggleRightTitle))])])]),t._v(" "),a("div",{staticStyle:{display:"table",width:"100%"}},[a("div",{staticClass:"subheader-text",staticStyle:{width:"50%",padding:"12px 24px"},style:"font-size:"+t.leftSubHeaderFontSize+"; color:"+t.leftSubHeaderFontColor+";"},[t._v(t._s(t.leftSubtitle))]),t._v(" "),a("div",{staticClass:"subheader-text",staticStyle:{width:"50%",padding:"12px 24px","text-align":"right"},style:"font-size:"+t.rightSubHeaderFontSize+"; color:"+t.rightSubHeaderFontColor+";"},[t._v(t._s(t.rigthSubtitle))])])]:t._e()],2)]],2):t._e()]):null!=t.formName||t.isTableCell?t.isTableCell?a("td",{ref:"holder",attrs:{colspan:t.colspan}}):t._e():a("div",[t.validateAll?a("div",{attrs:{id:t.id}},[t.toggleContent?[a("div",{staticClass:"groupbox-container-toggle",style:"background-color: "+t.backGroundColor+" !important;"},[a("div",{class:t.headerClass||{groupBoxActive:t.toggleContentData},on:{click:t.switchContent}},[a("div",{staticClass:"header-text"},[t._v(t._s(t.toggleTitle))]),t._v(" "),t.showToggleArrow?a("div",{staticClass:"toggle-header-icon"},[a("i",{ref:"toggle-arrow-down",staticClass:"v-icon material-icons theme--light",attrs:{"aria-hidden":"true"}},[t._v("keyboard_arrow_down")])]):t._e()]),t._v(" "),a("div",{staticStyle:{display:"table",width:"100%"}},[a("div",{staticClass:"subheader-text",staticStyle:{width:"50%",padding:"12px 24px"},style:"font-size:"+t.leftSubHeaderFontSize+"; color:"+t.leftSubHeaderFontColor+";"},[t._v(t._s(t.leftSubtitle))]),t._v(" "),a("div",{staticClass:"subheader-text",staticStyle:{width:"50%",padding:"12px 24px","text-align":"right"},style:"font-size:"+t.rightSubHeaderFontSize+"; color:"+t.rightSubHeaderFontColor+";"},[t._v(t._s(t.rigthSubtitle))])]),t._v(" "),a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.toggleContentData,expression:"toggleContentData"}],ref:"holder",staticClass:"toggle-body",style:{display:t.displayData}})])],1)]:[a("div",{ref:"holder",class:[{defaultDiv:t.defaultDiv},{renderMode:t.defaultDiv&&!t._renderingProps.isEditMode}],style:"background-color: "+t.backGroundColor+" !important;  display:"+t.displayData+" !important; "+t.customStyle},[t.showHeader?[a("div",{class:t.headerClass},[a("div",[a("div",{staticClass:"header-text",staticStyle:{width:"50%",float:"left"}},[t._v(t._s(t.toggleTitle))]),t._v(" "),a("div",{staticClass:"header-text",staticStyle:{width:"50%","text-align":"right"}},[t._v(t._s(t.toggleRightTitle))])])]),t._v(" "),a("div",{staticStyle:{display:"table",width:"100%"}},[a("div",{staticClass:"subheader-text",staticStyle:{width:"50%",padding:"12px 24px"},style:"font-size:"+t.leftSubHeaderFontSize+"; color:"+t.leftSubHeaderFontColor+";"},[t._v(t._s(t.leftSubtitle))]),t._v(" "),a("div",{staticClass:"subheader-text",staticStyle:{width:"50%",padding:"12px 24px","text-align":"right"},style:"font-size:"+t.rightSubHeaderFontSize+"; color:"+t.rightSubHeaderFontColor+";"},[t._v(t._s(t.rigthSubtitle))])])]:t._e()],2)]],2):t._e()])};i._withStripped=!0;const n=a(89146).default.extend({name:"groupBox",props:{formName:{type:String,default:null},__domElements:{type:Object,default:null},toggleContent:{type:Boolean,default:!1},showToggleArrow:{type:Boolean,default:!1},disableToggle:{type:Boolean,default:!1},header:{type:String,default:""},rightHeader:{type:String,default:""},leftSubHeader:{type:String,default:""},leftSubHeaderFontSize:{type:String,default:"10pt"},leftSubHeaderFontColor:{type:String,default:"#555;"},rightSubHeader:{type:String,default:""},rightSubHeaderFontSize:{type:String,default:"10pt"},rightSubHeaderFontColor:{type:String,default:"#555;"},backGroundColor:{type:String,default:"white"},displayData:{type:String,default:"block"},showHeader:{type:Boolean,default:!1},defaultDiv:{type:Boolean,default:!0},customStyle:{type:String,default:""},_renderingProps:{type:Object,default:null},isTableCell:{type:Boolean,default:!1},colspan:{type:[String,Number],default:null}},mounted:function(){var t,e;if(!1!==this.isRendered){var a=this.$refs.holder;try{for(var i=function(t){var e="function"==typeof Symbol&&Symbol.iterator,a=e&&t[e],i=0;if(a)return a.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}(this.__domElements.default),n=i.next();!n.done;n=i.next()){var o=n.value;a.appendChild(o)}}catch(e){t={error:e}}finally{try{n&&!n.done&&(e=i.return)&&e.call(i)}finally{if(t)throw t.error}}}},data:function(){return{toggleContentData:this.toggleContent,toggleTitle:this.header,toggleRightTitle:this.rightHeader,bGColor:this.backGroundColor,rigthSubtitle:this.rightSubHeader,leftSubtitle:this.leftSubHeader}},created:function(){},methods:{switchContent:function(){this.disableToggle||(this.toggleContentData=!this.toggleContentData,this.$refs["toggle-arrow-down"])},getHeaderClass:function(){return"toggle-header"},resetForm:function(){var t=this._renderingProps.context().contextItems.Dory.GetComponentCollectionByID(this._renderingProps.props().ID);this.arrangeChildElements(t,"reset"),this.$validator.reset()},disableForm:function(t){var e=this._renderingProps.context().contextItems.Dory.GetComponentCollectionByID(this._renderingProps.props().ID);this.arrangeChildElements(e,"disable",t)},arrangeChildElements:function(t,e,a){var i=this;if(t.children)for(var n=function(n){var o=t.children.default[n];i.$nextTick((function(){"disable"==e&&(o.component.disabled=!!a),"reset"==e&&(o.component.dataValue?o.component.dataValue=null:o.component.radioGroupValue?o.component.radioGroupValue=null:o.component.valueData&&(o.component.valueData=null))})),i.arrangeChildElements(o,e,a)},o=0;o<t.children.default.length;o++)n(o)}},computed:{headerClass:function(){return this.getHeaderClass()},validateAll:function(){return!1!==this.isRendered&&!1!==this.isDisabled}}});var o=a(75701),l=a.n(o),r=a(8236),d=a.n(r),s=a(6080),g=a.n(s),c=a(46075),h=a.n(c),u=a(87182),p=a.n(u),v=a(39213),f=a.n(v),b=a(92954),y={attributes:{class:"plateauStudioClass"}};y.styleTagTransform=f(),y.setAttributes=h(),y.insert=g().bind(null,"head"),y.domAPI=d(),y.insertStyleElement=p(),l()(b.Z,y),b.Z&&b.Z.locals&&b.Z.locals;const x=(0,a(62264).Z)(n,i,[],!1,null,"58022792",null).exports}}]);