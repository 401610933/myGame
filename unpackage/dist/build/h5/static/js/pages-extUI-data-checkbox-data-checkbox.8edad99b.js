(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-data-checkbox-data-checkbox"],{"1fb6":function(t,a,e){"use strict";e("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={name:"uniGroup",emits:["click"],props:{title:{type:String,default:""},top:{type:[Number,String],default:10},mode:{type:String,default:"default"}},data:function(){return{margin:!1,border:!1}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},created:function(){this.form=this.getForm(),this.form&&(this.margin=!0,this.border=this.form.border)},methods:{getForm:function(){var t=this.$parent,a=t.$options.name;while("uniForms"!==a){if(t=t.$parent,!t)return!1;a=t.$options.name}return t},onClick:function(){this.$emit("click")}}};a.default=n},7500:function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return o})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){return n}));var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"uni-group",class:["uni-group--"+t.mode,t.margin?"group-margin":""],style:{marginTop:t.top+"px"}},[t._t("title",[t.title?e("v-uni-view",{staticClass:"uni-group__title",style:{"padding-left":t.border?"30px":"15px"}},[e("v-uni-text",{staticClass:"uni-group__title-text"},[t._v(t._s(t.title))])],1):t._e()]),e("v-uni-view",{staticClass:"uni-group__content",class:{"group-conent-padding":t.border}},[t._t("default")],2)],2)},i=[]},7815:function(t,a,e){var n=e("9546");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("8790d03e",n,!0,{sourceMap:!1,shadowMode:!1})},"89be":function(t,a,e){"use strict";e.r(a);var n=e("1fb6"),o=e.n(n);for(var i in n)"default"!==i&&function(t){e.d(a,t,(function(){return n[t]}))}(i);a["default"]=o.a},9546:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 头条小程序组件内不能引入字体 */\nuni-page-body[data-v-e09e6244]{display:flex;flex-direction:column;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}uni-view[data-v-e09e6244]{font-size:14px;line-height:inherit}.example[data-v-e09e6244]{padding:0 15px 15px}.example-info[data-v-e09e6244]{padding:15px;color:#3b4144;background:#fff}.example-body[data-v-e09e6244]{\ndisplay:flex;\nflex-direction:row;flex-wrap:wrap;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n.example[data-v-e09e6244]{padding:0 15px}.example-info[data-v-e09e6244]{\ndisplay:block;\npadding:15px;color:#3b4144;background-color:#fff;font-size:14px;line-height:20px}.example-info-text[data-v-e09e6244]{font-size:14px;line-height:20px;color:#3b4144}.example-body[data-v-e09e6244]{flex-direction:column;padding:15px;background-color:#fff}.word-btn-white[data-v-e09e6244]{font-size:18px;color:#fff}.word-btn[data-v-e09e6244]{\ndisplay:flex;\nflex-direction:row;align-items:center;justify-content:center;border-radius:6px;height:48px;margin:15px;background-color:#007aff}.word-btn--hover[data-v-e09e6244]{background-color:#4ca2ff}.example[data-v-e09e6244]{padding:10px;background-color:#fff}.text[data-v-e09e6244]{font-size:14px;color:#333;margin-bottom:10px}body.?%PAGE?%[data-v-e09e6244]{background-color:#efeff4}",""]),t.exports=a},a988:function(t,a,e){"use strict";e.r(a);var n=e("c3c4"),o=e.n(n);for(var i in n)"default"!==i&&function(t){e.d(a,t,(function(){return n[t]}))}(i);a["default"]=o.a},be05:function(t,a,e){"use strict";e.r(a);var n=e("7500"),o=e("89be");for(var i in o)"default"!==i&&function(t){e.d(a,t,(function(){return o[t]}))}(i);e("d96e");var r,l=e("f0c5"),u=Object(l["a"])(o["default"],n["b"],n["c"],!1,null,"03f6ff1d",null,!1,n["a"],r);a["default"]=u.exports},c3c4:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{formData:{value:1,hobby:[1]},sex:[{text:"男",value:0},{text:"女",value:1},{text:"未知",value:2}],sex1:[{text:"男",value:0},{text:"女",value:1,disable:!0},{text:"未知",value:2}],hobby:[{text:"足球",value:0},{text:"篮球",value:1},{text:"游泳",value:2}],hobby2:[{text:"足球",value:0,disable:!0},{text:"篮球",value:1,disable:!0},{text:"游泳",value:2}]}},onLoad:function(){},onReady:function(){},methods:{}};a.default=n},c995:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,".uni-group[data-v-03f6ff1d]{background:#fff;margin-top:10px}.uni-group__title[data-v-03f6ff1d]{\ndisplay:flex;\nflex-direction:row;align-items:center;padding-left:15px;height:40px;background-color:#f8f8f8;font-weight:400;color:#333}.uni-group__content[data-v-03f6ff1d]{padding:15px}.group-conent-padding[data-v-03f6ff1d]{padding:0 15px}.uni-group__title-text[data-v-03f6ff1d]{font-size:14px;color:#333}.distraction[data-v-03f6ff1d]{flex-direction:row;align-items:center}.uni-group--card[data-v-03f6ff1d]{margin:10px;border-radius:5px;overflow:hidden;box-shadow:0 0 5px 1px rgba(0,0,0,.08)}",""]),t.exports=a},cf2b:function(t,a,e){var n=e("c995");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("bf128ecc",n,!0,{sourceMap:!1,shadowMode:!1})},d1bc:function(t,a,e){"use strict";e.r(a);var n=e("ede0"),o=e("a988");for(var i in o)"default"!==i&&function(t){e.d(a,t,(function(){return o[t]}))}(i);e("e9ea");var r,l=e("f0c5"),u=Object(l["a"])(o["default"],n["b"],n["c"],!1,null,"e09e6244",null,!1,n["a"],r);a["default"]=u.exports},d96e:function(t,a,e){"use strict";var n=e("cf2b"),o=e.n(n);o.a},e9ea:function(t,a,e){"use strict";var n=e("7815"),o=e.n(n);o.a},ede0:function(t,a,e){"use strict";e.d(a,"b",(function(){return o})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){return n}));var n={uniSection:e("8a0c").default,uniGroup:e("be05").default,uniDataCheckbox:e("a4279").default},o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("v-uni-text",{staticClass:"example-info"},[t._v("通过数据驱动的单选框和复选框，可直接通过连接 uniCloud 获取数据，同时可以配合表单组件 uni-forms 使用")]),e("uni-section",{attrs:{title:"多选",type:"line"}}),e("uni-group",{attrs:{title:"基础用法"}},[e("v-uni-view",{staticClass:"text"},[t._v("选中："+t._s(JSON.stringify(t.formData.hobby)))]),e("uni-data-checkbox",{attrs:{multiple:!0,localdata:t.hobby},model:{value:t.formData.hobby,callback:function(a){t.$set(t.formData,"hobby",a)},expression:"formData.hobby"}})],1),e("uni-group",{attrs:{title:"更多样式-button"}},[e("v-uni-view",{staticClass:"text"},[t._v("选中："+t._s(JSON.stringify(t.formData.hobby)))]),e("uni-data-checkbox",{attrs:{mode:"button",multiple:!0,localdata:t.hobby},model:{value:t.formData.hobby,callback:function(a){t.$set(t.formData,"hobby",a)},expression:"formData.hobby"}})],1),e("uni-group",{attrs:{title:"更多样式-tag"}},[e("v-uni-view",{staticClass:"text"},[t._v("选中："+t._s(JSON.stringify(t.formData.hobby)))]),e("uni-data-checkbox",{attrs:{mode:"tag",multiple:!0,localdata:t.hobby},model:{value:t.formData.hobby,callback:function(a){t.$set(t.formData,"hobby",a)},expression:"formData.hobby"}})],1),e("uni-group",{attrs:{title:"更多样式-list"}},[e("v-uni-view",{staticClass:"text"},[t._v("选中："+t._s(JSON.stringify(t.formData.hobby)))]),e("uni-data-checkbox",{attrs:{mode:"list",multiple:!0,localdata:t.hobby},model:{value:t.formData.hobby,callback:function(a){t.$set(t.formData,"hobby",a)},expression:"formData.hobby"}})],1),e("uni-group",{attrs:{title:"禁用"}},[e("v-uni-view",{staticClass:"text"},[t._v("选中："+t._s(JSON.stringify(t.formData.hobby)))]),e("uni-data-checkbox",{attrs:{mode:"button",multiple:!0,localdata:t.hobby2},model:{value:t.formData.hobby,callback:function(a){t.$set(t.formData,"hobby",a)},expression:"formData.hobby"}})],1),e("uni-group",{attrs:{title:"最大最小值"}},[e("v-uni-view",{staticClass:"text"},[t._v("选中："+t._s(JSON.stringify(t.formData.hobby)))]),e("uni-data-checkbox",{attrs:{min:"1",max:"2",multiple:!0,localdata:t.hobby},model:{value:t.formData.hobby,callback:function(a){t.$set(t.formData,"hobby",a)},expression:"formData.hobby"}})],1),e("uni-group",{attrs:{title:"自定义高亮颜色"}},[e("v-uni-view",{staticClass:"text"},[t._v("选中："+t._s(JSON.stringify(t.formData.hobby)))]),e("uni-data-checkbox",{attrs:{selectedColor:"red",multiple:!0,localdata:t.hobby2},model:{value:t.formData.hobby,callback:function(a){t.$set(t.formData,"hobby",a)},expression:"formData.hobby"}})],1),e("uni-section",{attrs:{title:"单选",type:"line"}}),e("uni-group",{attrs:{title:"基础用法"}},[e("v-uni-view",{staticClass:"text"},[t._v("选中："+t._s(t.formData.value))]),e("uni-data-checkbox",{attrs:{localdata:t.sex},model:{value:t.formData.value,callback:function(a){t.$set(t.formData,"value",a)},expression:"formData.value"}})],1),e("uni-group",{attrs:{title:"更多样式-button"}},[e("v-uni-view",{staticClass:"text"},[t._v("选中："+t._s(t.formData.value))]),e("uni-data-checkbox",{attrs:{mode:"button",localdata:t.sex},model:{value:t.formData.value,callback:function(a){t.$set(t.formData,"value",a)},expression:"formData.value"}})],1),e("uni-group",{attrs:{title:"更多样式-tag"}},[e("v-uni-view",{staticClass:"text"},[t._v("选中："+t._s(t.formData.value))]),e("uni-data-checkbox",{attrs:{mode:"tag",localdata:t.sex},model:{value:t.formData.value,callback:function(a){t.$set(t.formData,"value",a)},expression:"formData.value"}})],1),e("uni-group",{attrs:{title:"更多样式-list"}},[e("v-uni-view",{staticClass:"text"},[t._v("选中："+t._s(t.formData.value))]),e("uni-data-checkbox",{attrs:{mode:"list",icon:"right",localdata:t.sex},model:{value:t.formData.value,callback:function(a){t.$set(t.formData,"value",a)},expression:"formData.value"}})],1),e("uni-group",{attrs:{title:"禁用"}},[e("v-uni-view",{staticClass:"text"},[t._v("选中："+t._s(t.formData.value))]),e("uni-data-checkbox",{attrs:{mode:"button",localdata:t.sex1},model:{value:t.formData.value,callback:function(a){t.$set(t.formData,"value",a)},expression:"formData.value"}})],1),e("uni-group",{attrs:{title:"自定义高亮颜色"}},[e("v-uni-view",{staticClass:"text"},[t._v("选中："+t._s(t.formData.value))]),e("uni-data-checkbox",{attrs:{selectedColor:"red",localdata:t.sex1},model:{value:t.formData.value,callback:function(a){t.$set(t.formData,"value",a)},expression:"formData.value"}})],1)],1)},i=[]}}]);