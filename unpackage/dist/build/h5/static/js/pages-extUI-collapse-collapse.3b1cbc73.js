(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-collapse-collapse"],{"03f0":function(t,e,n){"use strict";n.r(e);var i=n("0ddd"),a=n("1def");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("7c86");var s,l=n("f0c5"),c=Object(l["a"])(a["default"],i["b"],i["c"],!1,null,"036d065c",null,!1,i["a"],s);e["default"]=c.exports},"054a":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".uni-collapse[data-v-036d065c]{\nwidth:100%;display:flex;\n\n\nflex-direction:column;background-color:#fff}",""]),t.exports=e},"0ddd":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-collapse"},[t._t("default")],2)},o=[]},"1def":function(t,e,n){"use strict";n.r(e);var i=n("231e"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"231e":function(t,e,n){"use strict";(function(t){n("4160"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"uniCollapse",emits:["change","activeItem","input","update:modelValue"],props:{value:{type:[String,Array],default:""},modelValue:{type:[String,Array],default:""},accordion:{type:[Boolean,String],default:!1}},data:function(){return{}},computed:{dataValue:function(){var t="string"===typeof this.value&&""===this.value||Array.isArray(this.value)&&0===this.value.length;"string"===typeof this.modelValue&&""===this.modelValue||Array.isArray(this.modelValue)&&this.modelValue.length;return t?this.modelValue:this.value}},watch:{dataValue:function(t){this.setOpen(t)}},created:function(){this.childrens=[],this.names=[]},mounted:function(){this.setOpen(this.dataValue)},methods:{setOpen:function(e){var n=this,i="string"===typeof e,a=Array.isArray(e);this.childrens.forEach((function(o,s){if(i&&e===o.nameSync){if(!n.accordion)return void t("warn","accordion 属性为 false ,v-model 类型应该为 array"," at components/uni-collapse/uni-collapse.vue:74");o.isOpen=!0}a&&e.forEach((function(e){if(e===o.nameSync){if(n.accordion)return void t("warn","accordion 属性为 true ,v-model 类型应该为 string"," at components/uni-collapse/uni-collapse.vue:84");o.isOpen=!0}}))})),this.emit(e)},setAccordion:function(t){this.accordion&&this.childrens.forEach((function(e,n){t!==e&&(e.isOpen=!1)}))},resize:function(){this.childrens.forEach((function(t,e){t.getCollapseHeight()}))},onChange:function(t,e){var n=[];this.accordion?n=t?e.nameSync:"":this.childrens.forEach((function(t,e){t.isOpen&&n.push(t.nameSync)})),this.$emit("change",n),this.emit(n)},emit:function(t){this.$emit("input",t),this.$emit("update:modelValue",t)}}};e.default=i}).call(this,n("0de9")["log"])},"2a93":function(t,e,n){"use strict";n.r(e);var i=n("4061"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"304e":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uniSection:n("8a0c").default,uniCollapse:n("03f0").default,uniCollapseItem:n("58dd").default,uniList:n("602f").default,uniListItem:n("88af").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-text",{staticClass:"example-info"},[t._v("折叠面板用来折叠/显示过长的内容或者是列表。通常是在多内容分类项使用，折叠不重要的内容，显示重要内容。点击可以展开折叠部分。")]),n("uni-section",{attrs:{title:"基础用法",type:"line"}}),n("uni-collapse",{ref:"collapse",on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[n("uni-collapse-item",{attrs:{title:"默认开启"}},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"text"},[t._v(t._s(t.content))])],1)],1),n("uni-collapse-item",{attrs:{title:"折叠内容"}},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"text"},[t._v("折叠内容主体，这是一段比较长内容。默认折叠主要内容，只显示当前项标题。点击标题展开，才能看到这段文字。再次点击标题，折叠内容。")])],1)],1),n("uni-collapse-item",{attrs:{title:"禁用状态",disabled:!0}},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"text"},[t._v("禁用状态内容主体，页面上是看不到这段话的。")])],1)],1)],1),n("v-uni-button",{staticClass:"button",attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.add.apply(void 0,arguments)}}},[t._v("动态修改内容")]),n("uni-section",{attrs:{title:"使用动画效果",type:"line"}}),n("uni-collapse",[n("uni-collapse-item",{attrs:{title:"使用动画"}},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"text"},[t._v("默认开启组件动画，使用动画效果折叠内容会有一个从上到下的动画。")])],1)],1),n("uni-collapse-item",{attrs:{title:"不使用动画","show-animation":!1}},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"text"},[t._v('设置 show-animation="false",关闭当前组件动画效果。')])],1)],1)],1),n("uni-section",{attrs:{title:"手风琴效果（只会保留一个的打开状态）",type:"line"}}),n("uni-collapse",{attrs:{accordion:!0},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}},model:{value:t.accordionVal,callback:function(e){t.accordionVal=e},expression:"accordionVal"}},[n("uni-collapse-item",{attrs:{title:"手风琴效果"}},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"text"},[t._v("手风琴效果同时只会保留一个组件的打开状态，其余组件会自动关闭。")])],1)],1),n("uni-collapse-item",{attrs:{title:"手风琴效果"}},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"text"},[t._v("手风琴效果同时只会保留一个组件的打开状态，其余组件会自动关闭。")])],1)],1),n("uni-collapse-item",{attrs:{title:"手风琴效果"}},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"text"},[t._v("手风琴效果同时只会保留一个组件的打开状态，其余组件会自动关闭。")])],1)],1)],1),n("uni-section",{attrs:{title:"配置图片",type:"line"}}),n("uni-collapse",[n("uni-collapse-item",{attrs:{title:"标题文字",thumb:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"}},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"text"},[t._v("折叠内容主体，可自定义内容及样式")])],1)],1),n("uni-collapse-item",{attrs:{title:"标题文字",thumb:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"}},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"text"},[t._v("折叠内容主体，可自定义内容及样式")])],1)],1)],1),n("uni-section",{attrs:{title:"使用插槽",type:"line"}}),n("uni-collapse",[n("uni-collapse-item",{attrs:{titleBorder:"none"},scopedSlots:t._u([{key:"title",fn:function(){return[n("uni-list",[n("uni-list-item",{attrs:{title:"标题使用自定义标题插槽","show-extra-icon":!0,"extra-icon":t.extraIcon}})],1)]},proxy:!0}])},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"text"},[t._v("折叠内容主体，可自定义内容及样式")])],1)],1),n("uni-collapse-item",{attrs:{title:"折叠内容使用 uni-list 组件"}},[n("uni-list",[n("uni-list-item",{attrs:{title:"列表文字"}}),n("uni-list-item",{attrs:{disabled:!0,title:"列表文字",note:"列表禁用状态"}}),n("uni-list-item",{attrs:{title:"列表右侧显示 switch","show-switch":!0}}),n("uni-list-item",{attrs:{"show-extra-icon":!0,"extra-icon":t.extraIcon,title:"列表左侧带扩展图标"}}),n("uni-list-item",{attrs:{title:"列表左侧带略缩图",note:"列表描述信息",thumb:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png","thumb-size":"lg",rightText:"右侧文字",showArrow:!0}}),n("uni-list-item",{attrs:{title:"开启点击反馈",clickable:!0,showArrow:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}})],1)],1)],1)],1)},o=[]},"3d2b":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={components:{},data:function(){return{value:["0"],accordionVal:"1",content:"折叠内容主体，可自定义内容及样式，点击按钮修改内容使高度发生变化。"}},methods:{add:function(){this.content.length>35?this.content="折叠内容主体，可自定义内容及样式，点击按钮修改内容使高度发生变化。":this.content="折叠内容主体，这是一段比较长内容。通过点击按钮修改后内容后，使组件高度发生变化，在次点击按钮恢复之前的内容和高度。"},onClick:function(t){uni.showToast({title:"列表被点击"})},change:function(e){t("log",e," at pages/extUI/collapse/collapse.vue:128")}}};e.default=n}).call(this,n("0de9")["log"])},"3f94":function(t,e,n){"use strict";var i=n("d5fd"),a=n.n(i);a.a},4061:function(t,e,n){"use strict";(function(t){n("4160"),n("c975"),n("a434"),n("a9e3"),n("d3b7"),n("ac1f"),n("25f0"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"uniCollapseItem",props:{title:{type:String,default:""},name:{type:[Number,String],default:""},disabled:{type:Boolean,default:!1},showAnimation:{type:Boolean,default:!0},open:{type:Boolean,default:!1},thumb:{type:String,default:""},titleBorder:{type:String,default:"auto"},border:{type:Boolean,default:!0},showArrow:{type:Boolean,default:!0}},data:function(){var t="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{isOpen:!1,isheight:null,height:0,elId:t,nameSync:0}},watch:{open:function(t){this.isOpen=t,this.onClick(t,"init")}},updated:function(t){var e=this;this.$nextTick((function(){e.init(!0)}))},created:function(){this.collapse=this.getCollapse(),this.oldHeight=0},destroyed:function(){this.__isUnmounted||this.uninstall()},mounted:function(){this.collapse&&(""!==this.name?this.nameSync=this.name:this.nameSync=this.collapse.childrens.length+"",-1===this.collapse.names.indexOf(this.nameSync)?this.collapse.names.push(this.nameSync):t("warn","name 值 ".concat(this.nameSync," 重复")," at components/uni-collapse-item/uni-collapse-item.vue:148"),-1===this.collapse.childrens.indexOf(this)&&this.collapse.childrens.push(this),this.init())},methods:{init:function(t){this.getCollapseHeight(t)},uninstall:function(){var t=this;this.collapse&&(this.collapse.childrens.forEach((function(e,n){e===t&&t.collapse.childrens.splice(n,1)})),this.collapse.names.forEach((function(e,n){e===t.nameSync&&t.collapse.names.splice(n,1)})))},onClick:function(t,e){this.disabled||(this.isOpen=t,this.isOpen&&this.collapse&&this.collapse.setAccordion(this),"init"!==e&&this.collapse.onChange(t,this))},getCollapseHeight:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=uni.createSelectorQuery().in(this);i.select("#".concat(this.elId)).fields({size:!0},(function(i){if(!(n>=10)){if(!i)return n++,void e.getCollapseHeight(!1,n);e.height=i.height,e.isheight=!0,t||e.onClick(e.open,"init")}})).exec()},getNvueHwight:function(t){var e=this;dom.getComponentRect(this.$refs["collapse--hook"],(function(n){if(n&&n.result&&n.size){if(e.height=n.size.height,e.isheight=!0,t)return;e.onClick(e.open,"init")}}))},getCollapse:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"uniCollapse",e=this.$parent,n=e.$options.name;while(n!==t){if(e=e.$parent,!e)return!1;n=e.$options.name}return e}}};e.default=i}).call(this,n("0de9")["log"])},"58dd":function(t,e,n){"use strict";n.r(e);var i=n("9e5c"),a=n("2a93");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("3f94");var s,l=n("f0c5"),c=Object(l["a"])(a["default"],i["b"],i["c"],!1,null,"adcd0afe",null,!1,i["a"],s);e["default"]=c.exports},"7c86":function(t,e,n){"use strict";var i=n("ea71"),a=n.n(i);a.a},"9e5c":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uniIcons:n("75e1").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-collapse-item"},[n("v-uni-view",{staticClass:"uni-collapse-item__title",class:{"is-open":t.isOpen&&"auto"===t.titleBorder,"uni-collapse-item-border":"none"!==t.titleBorder},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick(!t.isOpen)}}},[n("v-uni-view",{staticClass:"uni-collapse-item__title-wrap"},[t._t("title",[n("v-uni-view",{staticClass:"uni-collapse-item__title-box",class:{"is-disabled":t.disabled}},[t.thumb?n("v-uni-image",{staticClass:"uni-collapse-item__title-img",attrs:{src:t.thumb}}):t._e(),n("v-uni-text",{staticClass:"uni-collapse-item__title-text"},[t._v(t._s(t.title))])],1)])],2),t.showArrow?n("v-uni-view",{staticClass:"uni-collapse-item__title-arrow",class:{"uni-collapse-item__title-arrow-active":t.isOpen,"uni-collapse-item--animation":!0===t.showAnimation}},[n("uni-icons",{attrs:{color:t.disabled?"#ddd":"#bbb",size:"14",type:"arrowdown"}})],1):t._e()],1),n("v-uni-view",{staticClass:"uni-collapse-item__wrap",class:{"is--transition":t.showAnimation},style:{height:(t.isOpen?t.height:0)+"px"}},[n("v-uni-view",{ref:"collapse--hook",staticClass:"uni-collapse-item__wrap-content",class:{open:t.isheight,"uni-collapse-item--border":t.border&&t.isOpen},attrs:{id:t.elId}},[t._t("default")],2)],1)],1)},o=[]},c0c2:function(t,e,n){var i=n("ec4e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("33d33f23",i,!0,{sourceMap:!1,shadowMode:!1})},c776:function(t,e,n){"use strict";n.r(e);var i=n("304e"),a=n("d6f7");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("eb7a");var s,l=n("f0c5"),c=Object(l["a"])(a["default"],i["b"],i["c"],!1,null,"6e6008d3",null,!1,i["a"],s);e["default"]=c.exports},d2a4:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".uni-collapse-item[data-v-adcd0afe]{\nbox-sizing:border-box\n}.uni-collapse-item__title[data-v-adcd0afe]{\ndisplay:flex;width:100%;box-sizing:border-box;\nflex-direction:row;align-items:center;transition:border-bottom-color .3s}.uni-collapse-item__title-wrap[data-v-adcd0afe]{width:100%;flex:1}.uni-collapse-item__title-box[data-v-adcd0afe]{padding:0 15px;\ndisplay:flex;width:100%;box-sizing:border-box;\nflex-direction:row;justify-content:space-between;align-items:center;height:48px;line-height:48px;background-color:#fff;color:#303133;font-size:13px;font-weight:500;\ncursor:pointer;outline:none\n}.uni-collapse-item__title-box.is-disabled .uni-collapse-item__title-text[data-v-adcd0afe]{color:silver}.uni-collapse-item__title.uni-collapse-item-border[data-v-adcd0afe]{border-bottom:1px solid #ebeef5}.uni-collapse-item__title.is-open[data-v-adcd0afe]{border-bottom-color:transparent}.uni-collapse-item__title-img[data-v-adcd0afe]{height:26px;width:26px;margin-right:10px}.uni-collapse-item__title-text[data-v-adcd0afe]{flex:1;font-size:14px;\nwhite-space:nowrap;color:inherit;\n\n\noverflow:hidden;text-overflow:ellipsis}.uni-collapse-item__title-arrow[data-v-adcd0afe]{\ndisplay:flex;box-sizing:border-box;\nalign-items:center;justify-content:center;width:20px;height:20px;margin-right:10px;-webkit-transform:rotate(0deg);transform:rotate(0deg)}.uni-collapse-item__title-arrow-active[data-v-adcd0afe]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.uni-collapse-item__wrap[data-v-adcd0afe]{\nwill-change:height;box-sizing:border-box;\nbackground-color:#fff;overflow:hidden;position:relative;height:0}.uni-collapse-item__wrap.is--transition[data-v-adcd0afe]{transition-property:height,border-bottom-width;transition-duration:.3s;\nwill-change:height\n}.uni-collapse-item__wrap-content[data-v-adcd0afe]{position:absolute;font-size:13px;color:#303133;border-bottom-color:transparent;border-bottom-style:solid;border-bottom-width:0}.uni-collapse-item__wrap-content.uni-collapse-item--border[data-v-adcd0afe]{border-bottom-width:1px;border-bottom-color:red;border-bottom-color:#ebeef5}.uni-collapse-item__wrap-content.open[data-v-adcd0afe]{position:relative}.uni-collapse-item--animation[data-v-adcd0afe]{transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;transition-duration:.3s;transition-timing-function:ease}",""]),t.exports=e},d5fd:function(t,e,n){var i=n("d2a4");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("f5f42e48",i,!0,{sourceMap:!1,shadowMode:!1})},d6f7:function(t,e,n){"use strict";n.r(e);var i=n("3d2b"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},ea71:function(t,e,n){var i=n("054a");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("4cb6b716",i,!0,{sourceMap:!1,shadowMode:!1})},eb7a:function(t,e,n){"use strict";var i=n("c0c2"),a=n.n(i);a.a},ec4e:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 头条小程序组件内不能引入字体 */\nuni-page-body[data-v-6e6008d3]{display:flex;flex-direction:column;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}uni-view[data-v-6e6008d3]{font-size:14px;line-height:inherit}.example[data-v-6e6008d3]{padding:0 15px 15px}.example-info[data-v-6e6008d3]{padding:15px;color:#3b4144;background:#fff}.example-body[data-v-6e6008d3]{\ndisplay:flex;\nflex-direction:row;flex-wrap:wrap;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n.example[data-v-6e6008d3]{padding:0 15px}.example-info[data-v-6e6008d3]{\ndisplay:block;\npadding:15px;color:#3b4144;background-color:#fff;font-size:14px;line-height:20px}.example-info-text[data-v-6e6008d3]{font-size:14px;line-height:20px;color:#3b4144}.example-body[data-v-6e6008d3]{flex-direction:column;padding:15px;background-color:#fff}.word-btn-white[data-v-6e6008d3]{font-size:18px;color:#fff}.word-btn[data-v-6e6008d3]{\ndisplay:flex;\nflex-direction:row;align-items:center;justify-content:center;border-radius:6px;height:48px;margin:15px;background-color:#007aff}.word-btn--hover[data-v-6e6008d3]{background-color:#4ca2ff}.example-body[data-v-6e6008d3]{flex-direction:column;flex:1}.content[data-v-6e6008d3]{padding:15px}.text[data-v-6e6008d3]{font-size:14px;color:#666;line-height:20px}.button[data-v-6e6008d3]{margin:10px;margin-bottom:0}body.?%PAGE?%[data-v-6e6008d3]{background-color:#efeff4}",""]),t.exports=e}}]);