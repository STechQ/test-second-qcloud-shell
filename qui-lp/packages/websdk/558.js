"use strict";(this.webpackChunk_stechquick_websdk=this.webpackChunk_stechquick_websdk||[]).push([[558],{41558:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});var i=function(){var e=this,t=e.$createElement;return(e._self._c||t)("video",{ref:"videoRef",attrs:{src:e.src,width:e.width,height:e.height,autoplay:e.autoPlay,controls:e.controls,loop:e.loop,controlslist:e.controlsList,poster:e.poster,preload:e.preload},domProps:{muted:e.muted},on:{ended:e.ended,play:e.onPlay,pause:e.onPause,durationchange:e.durationChange,playing:e.onPlaying,progress:e.progress,ratechange:e.rateChange,emptied:e.emptied,stalled:e.stalled,suspend:e.suspend,timeupdate:e.timeUpdate,volumechange:e.volumeChange,canplay:e.canPlay,canplaythrough:e.canPlayThrough,waiting:e.waiting,error:e.error}},[e._v("\n        Your browser does not support HTML5 video.\n")])};i._withStripped=!0;const o=n(89146).default.extend({name:"QVideo",props:{src:{type:String},controls:{type:Boolean,default:!0},width:{type:String},height:{type:String},autoPlay:{type:Boolean,default:!1},muted:{type:Boolean,default:!1},loop:{type:Boolean,default:!1},controlsList:{type:String},poster:{type:String},preload:{type:String}},methods:{play:function(){this.$refs.videoRef.play()},pause:function(){this.$refs.videoRef.pause()},load:function(){this.$refs.videoRef.load()},currentTime:function(e){if(!e)return this.$refs.videoRef.currentTime;this.$refs.videoRef.currentTime=e},duration:function(){return this.$refs.videoRef.duration},currentSrc:function(){return this.$refs.videoRef.currentSrc},volume:function(e){if(!e)return this.$refs.videoRef.volume;this.$refs.videoRef.volume=e},ended:function(){this.$emit("ended")},durationChange:function(){this.$emit("durationChange")},onPlay:function(){this.$emit("play")},onPause:function(){this.$emit("pause")},onPlaying:function(){this.$emit("playing")},progress:function(){this.$emit("progress")},volumeChange:function(){this.$emit("volumeChange")},rateChange:function(){this.$emit("rateChange")},emptied:function(){this.$emit("emptied")},stalled:function(){this.$emit("stalled")},suspend:function(){this.$emit("suspend")},timeUpdate:function(){this.$emit("timeUpdate")},canPlay:function(){this.$emit("canPlay")},canPlayThrough:function(){this.$emit("canPlayThrough")},waiting:function(){this.$emit("waiting")},error:function(){this.$emit("error")}},destroyed:function(){var e;null===(e=this.$el)||void 0===e||e.remove()}}),r=(0,n(62264).Z)(o,i,[],!1,null,null,null).exports}}]);