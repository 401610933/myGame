(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-combox-combox"],{"15af":function(e,t,n){"use strict";var i=n("3b18"),a=n.n(i);a.a},"3b18":function(e,t,n){var i=n("ffdf");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("ec32becc",i,!0,{sourceMap:!1,shadowMode:!1})},"3e82":function(e,t,n){var i=n("24fb"),a=n("1de5"),o=n("549e");t=i(!1);var l=a(o);t.push([e.i,"\n@font-face{font-family:uniicons;src:url("+l+') format("truetype")}\n.uni-icons[data-v-3623ae51]{font-family:uniicons;text-decoration:none;text-align:center}',""]),e.exports=t},"46a8":function(e,t,n){"use strict";n.r(t);var i=n("8b46"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},"549e":function(e,t,n){e.exports=n.p+"static/fonts/uni.75745d34.ttf"},"583a":function(e,t,n){"use strict";var i=n("6998"),a=n.n(i);a.a},"679c":function(e,t,n){"use strict";n("4de4"),n("c975"),n("a9e3"),n("d3b7"),n("25f0"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"uniCombox",emits:["input","update:modelValue"],props:{label:{type:String,default:""},labelWidth:{type:String,default:"auto"},placeholder:{type:String,default:""},candidates:{type:Array,default:function(){return[]}},emptyTips:{type:String,default:"无匹配项"},value:{type:[String,Number],default:""}},data:function(){return{showSelector:!1,inputVal:""}},computed:{labelStyle:function(){return"auto"===this.labelWidth?{}:{width:this.labelWidth}},filterCandidates:function(){var e=this;return this.candidates.filter((function(t){return t.toString().indexOf(e.inputVal)>-1}))},filterCandidatesLength:function(){return this.filterCandidates.length}},watch:{value:{handler:function(e){this.inputVal=e},immediate:!0}},methods:{toggleSelector:function(){this.showSelector=!this.showSelector},onFocus:function(){this.showSelector=!0},onBlur:function(){var e=this;setTimeout((function(){e.showSelector=!1}),153)},onSelectorClick:function(e){this.inputVal=this.filterCandidates[e],this.showSelector=!1,this.$emit("input",this.inputVal),this.$emit("update:modelValue",this.inputVal)},onInput:function(){var e=this;setTimeout((function(){e.$emit("input",e.inputVal),e.$emit("update:modelValue",e.inputVal)}))}}};t.default=i},6998:function(e,t,n){var i=n("3e82");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("77e6ccd3",i,!0,{sourceMap:!1,shadowMode:!1})},"72d9":function(e,t,n){"use strict";n.r(t);var i=n("e4df"),a=n("dec4");for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("d466");var l,r=n("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"0543a176",null,!1,i["a"],l);t["default"]=c.exports},"75e1":function(e,t,n){"use strict";n.r(t);var i=n("f3f6"),a=n("8236");for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("583a");var l,r=n("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"3623ae51",null,!1,i["a"],l);t["default"]=c.exports},8236:function(e,t,n){"use strict";n.r(t);var i=n("9801"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},"8a0c":function(e,t,n){"use strict";n.r(t);var i=n("9dca"),a=n("46a8");for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("15af");var l,r=n("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"76375ba1",null,!1,i["a"],l);t["default"]=c.exports},"8b46":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"UniSection",emits:["click"],props:{type:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""}},data:function(){return{}},watch:{title:function(e){uni.report&&""!==e&&uni.report("title",e)}},methods:{onClick:function(){this.$emit("click")}}};t.default=i},"973e":function(e,t,n){"use strict";n.r(t);var i=n("e753"),a=n("a14c");for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("e70c");var l,r=n("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"edb2294e",null,!1,i["a"],l);t["default"]=c.exports},9801:function(e,t,n){"use strict";var i=n("4ea4");n("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("eb61")),o={name:"UniIcons",emits:["click"],props:{type:{type:String,default:""},color:{type:String,default:"#333333"},size:{type:[Number,String],default:16},customIcons:{type:String,default:""}},data:function(){return{icons:a.default}},methods:{_onClick:function(){this.$emit("click")}}};t.default=o},"9dca":function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-section",attrs:{nvue:!0}},[e.type?n("v-uni-view",{staticClass:"uni-section__head"},[n("v-uni-view",{staticClass:"uni-section__head-tag",class:e.type})],1):e._e(),n("v-uni-view",{staticClass:"uni-section__content"},[n("v-uni-text",{staticClass:"uni-section__content-title",class:{distraction:!e.subTitle}},[e._v(e._s(e.title))]),e.subTitle?n("v-uni-text",{staticClass:"uni-section__content-sub"},[e._v(e._s(e.subTitle))]):e._e()],1),e._t("default")],2)},o=[]},a14c:function(e,t,n){"use strict";n.r(t);var i=n("679c"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},adf3:function(e,t,n){var i=n("fa53");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("2e4ca6da",i,!0,{sourceMap:!1,shadowMode:!1})},b77a:function(e,t,n){var i=n("c779");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("094a904d",i,!0,{sourceMap:!1,shadowMode:!1})},c779:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 头条小程序组件内不能引入字体 */\nuni-page-body[data-v-0543a176]{display:flex;flex-direction:column;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}uni-view[data-v-0543a176]{font-size:14px;line-height:inherit}.example[data-v-0543a176]{padding:0 15px 15px}.example-info[data-v-0543a176]{padding:15px;color:#3b4144;background:#fff}.example-body[data-v-0543a176]{\ndisplay:flex;\nflex-direction:row;flex-wrap:wrap;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n.example[data-v-0543a176]{padding:0 15px}.example-info[data-v-0543a176]{\ndisplay:block;\npadding:15px;color:#3b4144;background-color:#fff;font-size:14px;line-height:20px}.example-info-text[data-v-0543a176]{font-size:14px;line-height:20px;color:#3b4144}.example-body[data-v-0543a176]{flex-direction:column;padding:15px;background-color:#fff}.word-btn-white[data-v-0543a176]{font-size:18px;color:#fff}.word-btn[data-v-0543a176]{\ndisplay:flex;\nflex-direction:row;align-items:center;justify-content:center;border-radius:6px;height:48px;margin:15px;background-color:#007aff}.word-btn--hover[data-v-0543a176]{background-color:#4ca2ff}.example-body[data-v-0543a176]{padding:0 12px;background-color:#fff}.result-box[data-v-0543a176]{text-align:center;padding:20px 0;font-size:16px}body.?%PAGE?%[data-v-0543a176]{background-color:#efeff4}",""]),e.exports=t},d466:function(e,t,n){"use strict";var i=n("b77a"),a=n.n(i);a.a},dec4:function(e,t,n){"use strict";n.r(t);var i=n("f46d"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},e4df:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var i={uniSection:n("8a0c").default,uniCombox:n("973e").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"page"},[n("v-uni-text",{staticClass:"example-info"},[e._v("组合框一般用于可以选择也可以输入的表单项")]),n("uni-section",{attrs:{title:"基本用法",type:"line"}}),n("v-uni-view",{staticClass:"example-body"},[n("uni-combox",{attrs:{label:"所在城市",candidates:e.candidates,placeholder:"请选择所在城市"},model:{value:e.city,callback:function(t){e.city=t},expression:"city"}}),n("v-uni-view",{staticClass:"result-box"},[n("v-uni-text",[e._v("所选城市为："+e._s(e.city))])],1)],1),n("uni-section",{attrs:{title:"设置label宽度",type:"line"}}),n("v-uni-view",{staticClass:"example-body"},[n("uni-combox",{attrs:{label:"所在城市",labelWidth:"150px",candidates:e.candidates,placeholder:"请选择所在城市"}})],1),n("uni-section",{attrs:{title:"设置无匹配项时的提示语",type:"line"}}),n("v-uni-view",{staticClass:"example-body"},[n("uni-combox",{attrs:{label:"所在城市",emptyTips:"这里啥都没有",placeholder:"请选择所在城市"}})],1)],1)},o=[]},e70c:function(e,t,n){"use strict";var i=n("adf3"),a=n.n(i);a.a},e753:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var i={uniIcons:n("75e1").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-combox"},[e.label?n("v-uni-view",{staticClass:"uni-combox__label",style:e.labelStyle},[n("v-uni-text",[e._v(e._s(e.label))])],1):e._e(),n("v-uni-view",{staticClass:"uni-combox__input-box"},[n("v-uni-input",{staticClass:"uni-combox__input",attrs:{type:"text",placeholder:e.placeholder},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.onInput.apply(void 0,arguments)},focus:function(t){arguments[0]=t=e.$handleEvent(t),e.onFocus.apply(void 0,arguments)},blur:function(t){arguments[0]=t=e.$handleEvent(t),e.onBlur.apply(void 0,arguments)}},model:{value:e.inputVal,callback:function(t){e.inputVal=t},expression:"inputVal"}}),n("uni-icons",{staticClass:"uni-combox__input-arrow",attrs:{type:"arrowdown",size:"14"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toggleSelector.apply(void 0,arguments)}}}),e.showSelector?n("v-uni-view",{staticClass:"uni-combox__selector"},[n("v-uni-scroll-view",{staticClass:"uni-combox__selector-scroll",attrs:{"scroll-y":"true"}},[0===e.filterCandidatesLength?n("v-uni-view",{staticClass:"uni-combox__selector-empty"},[n("v-uni-text",[e._v(e._s(e.emptyTips))])],1):e._e(),e._l(e.filterCandidates,(function(t,i){return n("v-uni-view",{key:i,staticClass:"uni-combox__selector-item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onSelectorClick(i)}}},[n("v-uni-text",[e._v(e._s(t))])],1)}))],2)],1):e._e()],1)],1)},o=[]},eb61:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={pulldown:"",refreshempty:"",back:"",forward:"",more:"","more-filled":"",scan:"",qq:"",weibo:"",weixin:"",pengyouquan:"",loop:"",refresh:"","refresh-filled":"",arrowthindown:"",arrowthinleft:"",arrowthinright:"",arrowthinup:"","undo-filled":"",undo:"",redo:"","redo-filled":"",bars:"",chatboxes:"",camera:"","chatboxes-filled":"","camera-filled":"","cart-filled":"",cart:"","checkbox-filled":"",checkbox:"",arrowleft:"",arrowdown:"",arrowright:"","smallcircle-filled":"",arrowup:"",circle:"","eye-filled":"","eye-slash-filled":"","eye-slash":"",eye:"","flag-filled":"",flag:"","gear-filled":"",reload:"",gear:"","hand-thumbsdown-filled":"","hand-thumbsdown":"","hand-thumbsup-filled":"","heart-filled":"","hand-thumbsup":"",heart:"",home:"",info:"","home-filled":"","info-filled":"","circle-filled":"","chat-filled":"",chat:"","mail-open-filled":"","email-filled":"","mail-open":"",email:"",checkmarkempty:"",list:"","locked-filled":"",locked:"","map-filled":"","map-pin":"","map-pin-ellipse":"",map:"","minus-filled":"","mic-filled":"",minus:"",micoff:"",mic:"",clear:"",smallcircle:"",close:"",closeempty:"",paperclip:"",paperplane:"","paperplane-filled":"","person-filled":"","contact-filled":"",person:"",contact:"","images-filled":"",phone:"",images:"",image:"","image-filled":"","location-filled":"",location:"","plus-filled":"",plus:"",plusempty:"","help-filled":"",help:"","navigate-filled":"",navigate:"","mic-slash-filled":"",search:"",settings:"",sound:"","sound-filled":"","spinner-cycle":"","download-filled":"","personadd-filled":"","videocam-filled":"",personadd:"",upload:"","upload-filled":"",starhalf:"","star-filled":"",star:"",trash:"","phone-filled":"",compose:"",videocam:"","trash-filled":"",download:"","chatbubble-filled":"",chatbubble:"","cloud-download":"","cloud-upload-filled":"","cloud-upload":"","cloud-download-filled":"",headphones:"",shop:""};t.default=i},f3f6:function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-text",{staticClass:"uni-icons",class:[e.customIcons,e.customIcons?e.type:""],style:{color:e.color,"font-size":e.size+"px"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e._onClick.apply(void 0,arguments)}}},[e._v(e._s(e.icons[e.type]))])},o=[]},f46d:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={components:{},data:function(){return{candidates:["北京","南京","东京","武汉","天津","上海","海口"],city:""}},methods:{}};t.default=i},fa53:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'.uni-combox[data-v-edb2294e]{\ndisplay:flex;\nheight:40px;flex-direction:row;align-items:center}.uni-combox__label[data-v-edb2294e]{font-size:16px;line-height:22px;padding-right:10px;color:#999}.uni-combox__input-box[data-v-edb2294e]{position:relative;\ndisplay:flex;\nflex:1;flex-direction:row;align-items:center}.uni-combox__input[data-v-edb2294e]{flex:1;font-size:16px;height:22px;line-height:22px}.uni-combox__input-arrow[data-v-edb2294e]{padding:10px}.uni-combox__selector[data-v-edb2294e]{\nbox-sizing:border-box;\nposition:absolute;top:42px;left:0;width:100%;background-color:#fff;border-radius:6px;box-shadow:#ddd 4px 4px 8px,#ddd -4px -4px 8px;z-index:2}.uni-combox__selector-scroll[data-v-edb2294e]{\nmax-height:200px;box-sizing:border-box\n}.uni-combox__selector[data-v-edb2294e]::before{\ncontent:"";\nposition:absolute;width:0;height:0;border-bottom:solid 6px #fff;border-right:solid 6px transparent;border-left:solid 6px transparent;left:50%;top:-6px;margin-left:-6px}.uni-combox__selector-empty[data-v-edb2294e],\n.uni-combox__selector-item[data-v-edb2294e]{\ndisplay:flex;cursor:pointer;\nline-height:36px;font-size:14px;text-align:center;border-bottom:solid 1px #ddd;margin:0 10px}.uni-combox__selector-empty[data-v-edb2294e]:last-child,\n.uni-combox__selector-item[data-v-edb2294e]:last-child{\nborder-bottom:none\n}',""]),e.exports=t},ffdf:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,".uni-section[data-v-76375ba1]{position:relative;\ndisplay:flex;\nmargin-top:10px;flex-direction:row;align-items:center;padding:0 10px;height:50px;background-color:#f8f8f8;\n\nfont-weight:400}\n.uni-section__head[data-v-76375ba1]{flex-direction:row;justify-content:center;align-items:center;margin-right:10px}.line[data-v-76375ba1]{height:15px;background-color:silver;border-radius:5px;width:3px}.circle[data-v-76375ba1]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:silver}.uni-section__content[data-v-76375ba1]{\ndisplay:flex;\nflex-direction:column;flex:1;color:#333}.uni-section__content-title[data-v-76375ba1]{font-size:14px;color:#333}.distraction[data-v-76375ba1]{flex-direction:row;align-items:center}.uni-section__content-sub[data-v-76375ba1]{font-size:12px;color:#999}",""]),e.exports=t}}]);