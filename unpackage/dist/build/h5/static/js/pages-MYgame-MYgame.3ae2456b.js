(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-MYgame-MYgame"],{"0622":function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=function(){var e=[{id:1e3},{id:1001}];return e},n={allSkill:s};i.default=n},"2deb":function(e,i,t){"use strict";t.r(i);var s=t("98e9"),n=t.n(s);for(var a in s)"default"!==a&&function(e){t.d(i,e,(function(){return s[e]}))}(a);i["default"]=n.a},"98e9":function(e,i,t){"use strict";var s=t("4ea4");t("e25e"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=s(t("0622")),a={data:function(){return{myConfig:{life:1e3,att:10,baoji:50,dodge:0,speed:500,def:0,poison:0,immune:0,baojiAtt:150,mystopId:""},otherConfig:{life:800,att:10,baoji:0,dodge:0,speed:100,def:0,poison:0,immune:0,baojiAtt:150},NowTime:0,skill:"",StopId:"",MYlifeP:100,otherlifeP:100,mylifeResidue:1e3,otherlifeResidue:800}},methods:{TimeStart:function(){var e=this;this.StopId=setInterval((function(){e.NowTime+=1,10==e.NowTime&&clearInterval()}),1e3),this.MyToOther()},TimeStop:function(){clearInterval(this.StopId)},MyToOther:function(){var e=this;this.mystopId=setInterval((function(){var i=e.myConfig.att;i=e.baoji(e.myConfig.baoji,e.myConfig.att,e.myConfig.baojiAtt),e.otherlifeResidue-=i,e.otherlifeP=e.otherlifeResidue/e.otherConfig.life*100}),1e3-this.myConfig.speed)},baoji:function(e,i,t){var s=parseInt(101*Math.random()+0,10);return s<=e?50:i}},created:function(){this.skill=n.default.allSkill()},computed:{},watch:{otherlifeResidue:function(){this.otherlifeResidue<=0&&(alert("您赢了"),clearInterval(this.StopId),clearInterval(this.mystopId))}}};i.default=a},aff1:function(e,i,t){"use strict";t.r(i);var s=t("bd12"),n=t("2deb");for(var a in n)"default"!==a&&function(e){t.d(i,e,(function(){return n[e]}))}(a);var l,o=t("f0c5"),r=Object(o["a"])(n["default"],s["b"],s["c"],!1,null,"74f43bd9",null,!1,s["a"],l);i["default"]=r.exports},bd12:function(e,i,t){"use strict";var s;t.d(i,"b",(function(){return n})),t.d(i,"c",(function(){return a})),t.d(i,"a",(function(){return s}));var n=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("v-uni-view",[t("v-uni-view",{staticClass:"flex margin-xs"},[t("v-uni-view",{staticClass:"flex-treble"},[t("v-uni-view",{staticClass:"cu-progress striped active"},[t("v-uni-view",{staticClass:"bg-red",style:[{width:e.MYlifeP+"%"}]},[e._v(e._s(e.MYlifeP)+"%")])],1),e._v(e._s(e.mylifeResidue)+"/"+e._s(e.myConfig.life))],1),t("v-uni-view",{staticClass:"flex-sub margin-xs"},[e._v(e._s(e.NowTime))]),t("v-uni-view",{staticClass:"flex-treble"},[t("v-uni-view",{staticClass:"cu-progress striped active"},[t("v-uni-view",{staticClass:"bg-red",style:[{width:e.otherlifeP+"%"}]},[e._v(e._s(e.otherlifeP)+"%")])],1),e._v(e._s(e.otherlifeResidue)+"/"+e._s(e.otherConfig.life))],1)],1),t("v-uni-view",[t("v-uni-view",{staticClass:"flex"},[t("v-uni-view",{staticClass:"flex-treble padding-lr-xs"},[e._v("攻击:"+e._s(e.myConfig.att))]),t("v-uni-view",{staticClass:"flex-treble"},[e._v("防御:"+e._s(e.myConfig.def))]),t("v-uni-view",{staticClass:"flex-sub padding-lr-xs"}),t("v-uni-view",{staticClass:"flex-treble padding-lr-xs"},[e._v("攻击:"+e._s(e.otherConfig.att))]),t("v-uni-view",{staticClass:"flex-treble "},[e._v("防御:"+e._s(e.otherConfig.def))])],1),t("v-uni-view",{staticClass:"flex"},[t("v-uni-view",{staticClass:"flex-treble padding-lr-xs"},[e._v("暴击:"+e._s(e.myConfig.baoji)+"%")]),t("v-uni-view",{staticClass:"flex-treble"},[e._v("毒:"+e._s(e.myConfig.poison))]),t("v-uni-view",{staticClass:"flex-sub padding-lr-xs"}),t("v-uni-view",{staticClass:"flex-treble padding-lr-xs"},[e._v("暴击:"+e._s(e.otherConfig.baoji)+"%")]),t("v-uni-view",{staticClass:"flex-treble"},[e._v("毒:"+e._s(e.otherConfig.poison))])],1),t("v-uni-view",{staticClass:"flex"},[t("v-uni-view",{staticClass:"flex-treble padding-lr-xs"},[e._v("闪避:"+e._s(e.myConfig.dodge)+"%")]),t("v-uni-view",{staticClass:"flex-treble"},[e._v("免疫:"+e._s(e.myConfig.immune))]),t("v-uni-view",{staticClass:"flex-sub padding-lr-xs"}),t("v-uni-view",{staticClass:"flex-treble padding-lr-xs"},[e._v("闪避:"+e._s(e.otherConfig.dodge)+"%")]),t("v-uni-view",{staticClass:"flex-treble"},[e._v("免疫:"+e._s(e.otherConfig.immune))])],1),t("v-uni-view",{staticClass:"flex"},[t("v-uni-view",{staticClass:"flex-treble padding-lr-xs"},[e._v("攻速:"+e._s(e.myConfig.speed))]),t("v-uni-view",{staticClass:"flex-treble"},[e._v("爆伤:"+e._s(e.myConfig.baojiAtt)+"%")]),t("v-uni-view",{staticClass:"flex-sub padding-lr-xs"}),t("v-uni-view",{staticClass:"flex-treble padding-lr-xs"},[e._v("攻速:"+e._s(e.otherConfig.speed))]),t("v-uni-view",{staticClass:"flex-treble"},[e._v("爆伤:"+e._s(e.otherConfig.baojiAtt)+"%")])],1)],1),t("v-uni-view",{staticClass:"padding flex flex-direction"},[t("v-uni-button",{staticClass:"cu-btn bg-red margin-tb-sm lg",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.TimeStart()}}},[e._v("Start")]),t("v-uni-button",{staticClass:"cu-btn bg-red margin-tb-sm lg",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.TimeStop()}}},[e._v("Stop")])],1),t("v-uni-view",[e._v("暂时没有技能全靠基础属性攻击"),t("br"),e._v("调用JS并输出技能:"+e._s(e.skill))])],1)},a=[]}}]);