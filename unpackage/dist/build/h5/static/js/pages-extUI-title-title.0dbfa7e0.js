(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-title-title"],{"15af":function(t,n,i){"use strict";var e=i("3b18"),a=i.n(e);a.a},1695:function(t,n,i){"use strict";i("d3b7"),i("25f0"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"UniTitle",props:{type:{type:String,default:""},title:{type:String,default:""},align:{type:String,default:"left"},color:{type:String,default:"#333333"},stat:{type:[Boolean,String],default:""}},data:function(){return{}},computed:{textAlign:function(){var t="center";switch(this.align){case"left":t="flex-start";break;case"center":t="center";break;case"right":t="flex-end";break}return t}},watch:{title:function(t){this.isOpenStat()&&uni.report&&uni.report("title",this.title)}},mounted:function(){this.isOpenStat()&&uni.report&&uni.report("title",this.title)},methods:{isOpenStat:function(){""===this.stat&&(this.isStat=!1);var t="boolean"===typeof this.stat&&this.stat||"string"===typeof this.stat&&""!==this.stat;return""===this.type&&(this.isStat=!0,"false"===this.stat.toString()&&(this.isStat=!1)),""!==this.type&&(this.isStat=!0,this.isStat=!!t),this.isStat}}};n.default=e},"1d76":function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={components:{},data:function(){return{title:"章节标题通常用于记录页面标题，例如商品标题、新闻标题等，当前组件会自动上报内容统计数据"}},onLoad:function(){},methods:{}};n.default=e},"1fbc":function(t,n,i){"use strict";i.r(n);var e=i("c4f7"),a=i("29db");for(var o in a)"default"!==o&&function(t){i.d(n,t,(function(){return a[t]}))}(o);i("ed71");var s,l=i("f0c5"),r=Object(l["a"])(a["default"],e["b"],e["c"],!1,null,"177bd032",null,!1,e["a"],s);n["default"]=r.exports},"29db":function(t,n,i){"use strict";i.r(n);var e=i("1d76"),a=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(n,t,(function(){return e[t]}))}(o);n["default"]=a.a},"3b18":function(t,n,i){var e=i("ffdf");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=i("4f06").default;a("ec32becc",e,!0,{sourceMap:!1,shadowMode:!1})},"46a8":function(t,n,i){"use strict";i.r(n);var e=i("8b46"),a=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(n,t,(function(){return e[t]}))}(o);n["default"]=a.a},"51dc":function(t,n,i){"use strict";i.r(n);var e=i("1695"),a=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(n,t,(function(){return e[t]}))}(o);n["default"]=a.a},"56af":function(t,n,i){var e=i("24fb");n=e(!1),n.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\t/* .uni-title {\n\n} */.uni-title__box[data-v-571fc506]{\ndisplay:flex;\nflex-direction:column;align-items:flex-start;justify-content:center;padding:8px 0;flex:1}.uni-title__base[data-v-571fc506]{font-size:15px;color:#333;font-weight:500}.uni-h1[data-v-571fc506]{font-size:20px;color:#333;font-weight:700}.uni-h2[data-v-571fc506]{font-size:18px;color:#333;font-weight:700}.uni-h3[data-v-571fc506]{font-size:16px;color:#333;font-weight:700\n\t\t/* font-weight: 400; */}.uni-h4[data-v-571fc506]{font-size:14px;color:#333;font-weight:700\n\t\t/* font-weight: 300; */}.uni-h5[data-v-571fc506]{font-size:12px;color:#333;font-weight:700\n\t\t/* font-weight: 200; */}",""]),t.exports=n},7475:function(t,n,i){var e=i("24fb");n=e(!1),n.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 头条小程序组件内不能引入字体 */\nuni-page-body[data-v-177bd032]{display:flex;flex-direction:column;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}uni-view[data-v-177bd032]{font-size:14px;line-height:inherit}.example[data-v-177bd032]{padding:0 15px 15px}.example-info[data-v-177bd032]{padding:15px;color:#3b4144;background:#fff}.example-body[data-v-177bd032]{\ndisplay:flex;\nflex-direction:row;flex-wrap:wrap;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n.example[data-v-177bd032]{padding:0 15px}.example-info[data-v-177bd032]{\ndisplay:block;\npadding:15px;color:#3b4144;background-color:#fff;font-size:14px;line-height:20px}.example-info-text[data-v-177bd032]{font-size:14px;line-height:20px;color:#3b4144}.example-body[data-v-177bd032]{flex-direction:column;padding:15px;background-color:#fff}.word-btn-white[data-v-177bd032]{font-size:18px;color:#fff}.word-btn[data-v-177bd032]{\ndisplay:flex;\nflex-direction:row;align-items:center;justify-content:center;border-radius:6px;height:48px;margin:15px;background-color:#007aff}.word-btn--hover[data-v-177bd032]{background-color:#4ca2ff}.example-body[data-v-177bd032]{\ndisplay:block\n}.uni-text[data-v-177bd032]{font-size:14px;line-height:22px;color:#333}body.?%PAGE?%[data-v-177bd032]{background-color:#efeff4}",""]),t.exports=n},"82a0":function(t,n,i){var e=i("7475");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=i("4f06").default;a("94ab1b64",e,!0,{sourceMap:!1,shadowMode:!1})},8731:function(t,n,i){"use strict";var e;i.d(n,"b",(function(){return a})),i.d(n,"c",(function(){return o})),i.d(n,"a",(function(){return e}));var a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"uni-title__box",style:{"align-items":t.textAlign}},[i("v-uni-text",{staticClass:"uni-title__base",class:["uni-"+t.type],style:{color:t.color}},[t._v(t._s(t.title))])],1)},o=[]},"8a0c":function(t,n,i){"use strict";i.r(n);var e=i("9dca"),a=i("46a8");for(var o in a)"default"!==o&&function(t){i.d(n,t,(function(){return a[t]}))}(o);i("15af");var s,l=i("f0c5"),r=Object(l["a"])(a["default"],e["b"],e["c"],!1,null,"76375ba1",null,!1,e["a"],s);n["default"]=r.exports},"8b46":function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"UniSection",emits:["click"],props:{type:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};n.default=e},"9dca":function(t,n,i){"use strict";var e;i.d(n,"b",(function(){return a})),i.d(n,"c",(function(){return o})),i.d(n,"a",(function(){return e}));var a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"uni-section",attrs:{nvue:!0}},[t.type?i("v-uni-view",{staticClass:"uni-section__head"},[i("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),i("v-uni-view",{staticClass:"uni-section__content"},[i("v-uni-text",{staticClass:"uni-section__content-title",class:{distraction:!t.subTitle}},[t._v(t._s(t.title))]),t.subTitle?i("v-uni-text",{staticClass:"uni-section__content-sub"},[t._v(t._s(t.subTitle))]):t._e()],1),t._t("default")],2)},o=[]},b457:function(t,n,i){var e=i("56af");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=i("4f06").default;a("33d6ed5c",e,!0,{sourceMap:!1,shadowMode:!1})},c4f7:function(t,n,i){"use strict";i.d(n,"b",(function(){return a})),i.d(n,"c",(function(){return o})),i.d(n,"a",(function(){return e}));var e={uniSection:i("8a0c").default,uniTitle:i("d077").default},a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"uni-content"},[i("v-uni-view",{staticClass:"example-info"},[i("v-uni-text",{staticClass:"example-info-text"},[t._v("章节标题，通常用于记录页面标题，使用当前组件在 uni-app 开启统计的情况下，将会自动统计页面标题")])],1),i("uni-section",{attrs:{title:"基础用法",type:"line"}}),i("v-uni-view",{staticClass:"example-body"},[i("uni-title",{attrs:{title:t.title}})],1),i("uni-section",{attrs:{title:"不同类型",type:"line"}}),i("v-uni-view",{staticClass:"example-body"},[i("uni-title",{attrs:{type:"h1",title:"h1 一级标题"}}),i("uni-title",{attrs:{type:"h2",title:"h2 二级标题"}}),i("uni-title",{attrs:{type:"h3",title:"h3 三级标题"}}),i("uni-title",{attrs:{type:"h4",title:"h4 四级标题"}}),i("uni-title",{attrs:{type:"h5",title:"h5 五级标题"}})],1),i("uni-section",{attrs:{title:"改变颜色",type:"line"}}),i("v-uni-view",{staticClass:"example-body"},[i("uni-title",{attrs:{type:"h1",title:"h1 一级标题",color:"#027fff"}}),i("uni-title",{attrs:{type:"h2",title:"h2 二级标题",color:"#2490ff"}}),i("uni-title",{attrs:{type:"h3",title:"h3 三级标题",color:"#439ffc"}}),i("uni-title",{attrs:{type:"h4",title:"h4 四级标题",color:"#60adfb"}}),i("uni-title",{attrs:{type:"h5",title:"h5 五级标题",color:"#7db9f7"}})],1),i("uni-section",{attrs:{title:"对齐方式",type:"line"}}),i("v-uni-view",{staticClass:"example-body"},[i("uni-title",{attrs:{type:"h1",title:"h1 左对齐",align:"left"}}),i("uni-title",{attrs:{type:"h2",title:"h2 居中",align:"center"}}),i("uni-title",{attrs:{type:"h3",title:"h3 右对齐",align:"right"}}),i("uni-title",{attrs:{type:"h4",title:"h4 居中",align:"center"}}),i("uni-title",{attrs:{type:"h5",title:"h5 左对齐",align:"left"}})],1),i("uni-section",{attrs:{title:"组合示例",type:"line"}}),i("v-uni-view",{staticClass:"example-body"},[i("v-uni-view",{staticClass:"uni-box-head"},[i("uni-title",{attrs:{type:"h1",align:"center",title:"uni-app介绍"}})],1),i("v-uni-view",{staticClass:"uni-box"},[i("uni-title",{staticClass:"h3",attrs:{type:"h3",title:"1 框架介绍"}})],1),i("v-uni-view",{staticClass:"uni-box"},[i("uni-title",{staticClass:"h4",attrs:{type:"h4",title:"1.1 什么是uni-app"}})],1),i("v-uni-view",[i("v-uni-text",{staticClass:"uni-text"},[t._v("uni-app是一个使用Vue.js开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、H5、以及各种小程序（微信/支付宝/百度/头条/QQ/钉钉）等多个平台。即使不跨端，uni-app同时也是更好的小程序开发框架。DCloud公司拥有370万开发者用户，旗下uni-app有5万+案例、900款插件、50+微信/qq群，并且被阿里小程序工具内置，开发者可以放心选择。")])],1),i("v-uni-view",{staticClass:"uni-box"},[i("uni-title",{staticClass:"h4",attrs:{type:"h4",title:"1.2 开发规范"}})],1),i("v-uni-view",{},[i("uni-title",{staticClass:"h5",attrs:{type:"h5",color:"#666",title:"- 页面文件遵循 Vue 单文件组件 (SFC) 规范"}}),i("uni-title",{staticClass:"h5",attrs:{type:"h5",color:"#666",title:"- 组件标签靠近小程序规范，详见uni-app 组件规范"}}),i("uni-title",{staticClass:"h5",attrs:{type:"h5",color:"#666",title:"- 接口能力（JS API）靠近微信小程序规范，但需将前缀 wx 替换为 uni，详见uni-app接口规范"}}),i("uni-title",{staticClass:"h5",attrs:{type:"h5",color:"#666",title:"- 数据绑定及事件处理同 Vue.js 规范，同时补充了App及页面的生命周期"}}),i("uni-title",{staticClass:"h5",attrs:{type:"h5",color:"#666",title:"- 为兼容多端运行，建议使用flex布局进行开发"}})],1)],1)],1)},o=[]},d077:function(t,n,i){"use strict";i.r(n);var e=i("8731"),a=i("51dc");for(var o in a)"default"!==o&&function(t){i.d(n,t,(function(){return a[t]}))}(o);i("f9a6");var s,l=i("f0c5"),r=Object(l["a"])(a["default"],e["b"],e["c"],!1,null,"571fc506",null,!1,e["a"],s);n["default"]=r.exports},ed71:function(t,n,i){"use strict";var e=i("82a0"),a=i.n(e);a.a},f9a6:function(t,n,i){"use strict";var e=i("b457"),a=i.n(e);a.a},ffdf:function(t,n,i){var e=i("24fb");n=e(!1),n.push([t.i,".uni-section[data-v-76375ba1]{position:relative;\ndisplay:flex;\nmargin-top:10px;flex-direction:row;align-items:center;padding:0 10px;height:50px;background-color:#f8f8f8;\n\nfont-weight:400}\n.uni-section__head[data-v-76375ba1]{flex-direction:row;justify-content:center;align-items:center;margin-right:10px}.line[data-v-76375ba1]{height:15px;background-color:silver;border-radius:5px;width:3px}.circle[data-v-76375ba1]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:silver}.uni-section__content[data-v-76375ba1]{\ndisplay:flex;\nflex-direction:column;flex:1;color:#333}.uni-section__content-title[data-v-76375ba1]{font-size:14px;color:#333}.distraction[data-v-76375ba1]{flex-direction:row;align-items:center}.uni-section__content-sub[data-v-76375ba1]{font-size:12px;color:#999}",""]),t.exports=n}}]);