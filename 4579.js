"use strict";(this.webpackChunkqcloud_shell=this.webpackChunkqcloud_shell||[]).push([[4579],{44579:(s,e,n)=>{n.r(e),n.d(e,{default:()=>d});var t=n(71093),l=n(11193),a=n.n(l);const o=(0,t._)("link",{rel:"stylesheet",href:"../../vendor/bpmn-js/assets/diagram-js.css"},null,-1),i=(0,t._)("link",{rel:"stylesheet",href:"../../vendor/bpmn-js/assets/bpmn-font/css/bpmn-embedded.css"},null,-1),r=(0,t._)("link",{rel:"stylesheet",href:"../../vendor/bpmn-js-properties-panel/assets/bpmn-js-properties-panel.css"},null,-1),c=(0,t.uE)('<link rel="stylesheet" href="../../vendor/bpmn-js-token-simulation/assets/css/bpmn-js-token-simulation.css"><link rel="stylesheet" href="https://unpkg.com/@bpmn-io/form-js@0.5.1/dist/assets/form-js.css"><div class="content with-diagram"><div class="canvas" style="width:100%;height:500px;" id="processEditorCanvas"></div><div style="border:1px solid #aaa;height:500px;overflow-x:hidden;overflow-y:auto;" class="properties-panel-parent" id="js-properties-panel"></div></div>',3),d=(0,t.aZ)({__name:"processDesignEditor",props:{functions:null,callbacks:null},setup(s){const e=s;let n;return e.functions.getModel=async()=>({model:{bpmn:await n.getDiagramXML()},state:"stateValue"}),e.functions.setModel=async(s,t)=>{console.log("incomming model",s),n.importDiagramXML(s.bpmn),n.on("commandStack.changed",(()=>{e.callbacks.modified({state:!1,model:!0})}))},(0,t.bv)((()=>{n=new(a())({lang:"tr",container:"#processEditorCanvas"})})),(s,e)=>((0,t.wg)(),(0,t.iD)(t.HY,null,[o,i,r,(0,t.kq)('  link rel="stylesheet" href="../vendor/bpmn-js-token-simulation/assets/css/normalize.css" / '),c],64))}})}}]);