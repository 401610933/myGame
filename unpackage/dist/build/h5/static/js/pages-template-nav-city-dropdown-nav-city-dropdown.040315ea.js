(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-nav-city-dropdown-nav-city-dropdown"],{"315d":function(e,i,t){var a=t("dff2");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=t("4f06").default;r("7775f2f9",a,!0,{sourceMap:!1,shadowMode:!1})},"3d83":function(e,i,t){"use strict";t.r(i);var a=t("b6a4"),r=t.n(a);for(var l in a)"default"!==l&&function(e){t.d(i,e,(function(){return a[e]}))}(l);i["default"]=r.a},"40cb":function(e,i,t){"use strict";t.d(i,"b",(function(){return r})),t.d(i,"c",(function(){return l})),t.d(i,"a",(function(){return a}));var a={pageHead:t("60de").default},r=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("v-uni-view",{staticClass:"mpvue-picker"},[t("page-head",{attrs:{title:e.title}}),t("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[t("v-uni-view",{staticClass:"uni-title"},[e._v("说明 :")]),t("v-uni-view",{staticClass:"uni-helllo-text"},[t("v-uni-view",[e._v("在App端可在pages.json里配置buttons，暂不支持动态改变buttons的样式，使用onNavigationBarButtonTap可监听城市选择按钮的点击事件。")])],1)],1),t("mpvue-picker",{ref:"mpvuePicker",attrs:{themeColor:e.themeColor,mode:e.mode,deepLength:e.deepLength,pickerValueDefault:e.pickerValueDefault,pickerValueArray:e.pickerValueArray},on:{onConfirm:function(i){arguments[0]=i=e.$handleEvent(i),e.onConfirm.apply(void 0,arguments)},onCancel:function(i){arguments[0]=i=e.$handleEvent(i),e.onCancel.apply(void 0,arguments)}}})],1)},l=[]},"4eaa":function(e,i,t){"use strict";var a;t.d(i,"b",(function(){return r})),t.d(i,"c",(function(){return l})),t.d(i,"a",(function(){return a}));var r=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("v-uni-view",{staticClass:"mpvue-picker"},[t("v-uni-view",{class:{pickerMask:e.showPicker},attrs:{catchtouchmove:"true"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.maskClick.apply(void 0,arguments)}}}),t("v-uni-view",{staticClass:"mpvue-picker-content ",class:{"mpvue-picker-view-show":e.showPicker}},[t("v-uni-view",{staticClass:"mpvue-picker__hd",attrs:{catchtouchmove:"true"}},[t("v-uni-view",{staticClass:"mpvue-picker__action",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.pickerCancel.apply(void 0,arguments)}}},[e._v("取消")]),t("v-uni-view",{staticClass:"mpvue-picker__action",style:{color:e.themeColor},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.pickerConfirm.apply(void 0,arguments)}}},[e._v("确定")])],1),"selector"===e.mode&&e.pickerValueSingleArray.length>0?t("v-uni-picker-view",{staticClass:"mpvue-picker-view",attrs:{"indicator-style":"height: 40px;",value:e.pickerValue},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.pickerChange.apply(void 0,arguments)}}},[t("v-uni-picker-view-column",e._l(e.pickerValueSingleArray,(function(i,a){return t("v-uni-view",{key:a,staticClass:"picker-item"},[e._v(e._s(i.label))])})),1)],1):e._e(),"timeSelector"===e.mode?t("v-uni-picker-view",{staticClass:"mpvue-picker-view",attrs:{"indicator-style":"height: 40px;",value:e.pickerValue},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.pickerChange.apply(void 0,arguments)}}},[t("v-uni-picker-view-column",e._l(e.pickerValueHour,(function(i,a){return t("v-uni-view",{key:a,staticClass:"picker-item"},[e._v(e._s(i.label))])})),1),t("v-uni-picker-view-column",e._l(e.pickerValueMinute,(function(i,a){return t("v-uni-view",{key:a,staticClass:"picker-item"},[e._v(e._s(i.label))])})),1)],1):e._e(),"multiSelector"===e.mode?t("v-uni-picker-view",{staticClass:"mpvue-picker-view",attrs:{"indicator-style":"height: 40px;",value:e.pickerValue},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.pickerChange.apply(void 0,arguments)}}},[e._l(e.pickerValueMulArray.length,(function(i,a){return[t("v-uni-picker-view-column",e._l(e.pickerValueMulArray[i],(function(i,a){return t("v-uni-view",{key:a,staticClass:"picker-item"},[e._v(e._s(i.label))])})),1)]}))],2):e._e(),"multiLinkageSelector"===e.mode&&2===e.deepLength?t("v-uni-picker-view",{staticClass:"mpvue-picker-view",attrs:{"indicator-style":"height: 40px;",value:e.pickerValue},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.pickerChangeMul.apply(void 0,arguments)}}},[t("v-uni-picker-view-column",e._l(e.pickerValueMulTwoOne,(function(i,a){return t("v-uni-view",{key:a,staticClass:"picker-item"},[e._v(e._s(i.label))])})),1),t("v-uni-picker-view-column",e._l(e.pickerValueMulTwoTwo,(function(i,a){return t("v-uni-view",{key:a,staticClass:"picker-item"},[e._v(e._s(i.label))])})),1)],1):e._e(),"multiLinkageSelector"===e.mode&&3===e.deepLength?t("v-uni-picker-view",{staticClass:"mpvue-picker-view",attrs:{"indicator-style":"height: 40px;",value:e.pickerValue},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.pickerChangeMul.apply(void 0,arguments)}}},[t("v-uni-picker-view-column",e._l(e.pickerValueMulThreeOne,(function(i,a){return t("v-uni-view",{key:a,staticClass:"picker-item"},[e._v(e._s(i.label))])})),1),t("v-uni-picker-view-column",e._l(e.pickerValueMulThreeTwo,(function(i,a){return t("v-uni-view",{key:a,staticClass:"picker-item"},[e._v(e._s(i.label))])})),1),t("v-uni-picker-view-column",e._l(e.pickerValueMulThreeThree,(function(i,a){return t("v-uni-view",{key:a,staticClass:"picker-item"},[e._v(e._s(i.label))])})),1)],1):e._e()],1)],1)},l=[]},7531:function(e,i,t){"use strict";var a=t("315d"),r=t.n(a);r.a},"91e8":function(e,i,t){"use strict";t.r(i);var a=t("4eaa"),r=t("f48b");for(var l in r)"default"!==l&&function(e){t.d(i,e,(function(){return r[e]}))}(l);t("7531");var n,c=t("f0c5"),u=Object(c["a"])(r["default"],a["b"],a["c"],!1,null,"ba553cb4",null,!1,a["a"],n);i["default"]=u.exports},"9f95":function(e,i,t){"use strict";t.r(i);var a=t("40cb"),r=t("3d83");for(var l in r)"default"!==l&&function(e){t.d(i,e,(function(){return r[e]}))}(l);var n,c=t("f0c5"),u=Object(c["a"])(r["default"],a["b"],a["c"],!1,null,"329fd2a8",null,!1,a["a"],n);i["default"]=u.exports},b6a4:function(e,i,t){"use strict";(function(e){var a=t("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=a(t("91e8")),l={components:{mpvuePicker:r.default},data:function(){return{title:"nav-city-dropdown",pickerValueArray:[{label:"北京市",value:11e4},{label:"天津市",value:12e4},{label:"广州市",value:440100},{label:"深圳市",value:440300}],themeColor:"#007AFF",mode:"",deepLength:1,pickerValueDefault:[0],index:0}},onReady:function(){this.setStyle(0,"北京市")},methods:{onCancel:function(i){e("log",i," at pages/template/nav-city-dropdown/nav-city-dropdown.vue:76")},showSinglePicker:function(){this.mode="selector",this.deepLength=1,this.pickerValueDefault=[0],this.$refs.mpvuePicker.show()},onConfirm:function(i){e("log",i.label," at pages/template/nav-city-dropdown/nav-city-dropdown.vue:86"),this.setStyle(0,i.label)},setStyle:function(e,i){var t=getCurrentPages();t[t.length-1];i.length>3&&(i=i.substr(0,3)+"..."),document.getElementsByClassName("uni-btn-icon")[1].innerText=i}},onBackPress:function(){if(this.$refs.mpvuePicker.showPicker)return this.$refs.mpvuePicker.pickerCancel(),!0},onUnload:function(){this.$refs.mpvuePicker.showPicker&&this.$refs.mpvuePicker.pickerCancel()},onNavigationBarButtonTap:function(e){0===e.index&&this.showSinglePicker()}};i.default=l}).call(this,t("0de9")["log"])},cecc:function(e,i,t){"use strict";var a=t("4ea4");t("99af"),t("ace4"),t("a9e3"),t("d3b7"),t("fd87"),t("9a8c"),t("a975"),t("735e"),t("c1ac"),t("d139"),t("3a7b"),t("d5d6"),t("82f8"),t("e91f"),t("60bd"),t("5f96"),t("3280"),t("3fcc"),t("ca91"),t("25a1"),t("cd26"),t("2954"),t("649e"),t("219c"),t("b39a"),t("72f7"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=a(t("ade3")),l={data:function(){return{pickerChangeValue:[],pickerValue:[],pickerValueArrayChange:!0,modeChange:!1,pickerValueSingleArray:[],pickerValueHour:[],pickerValueMinute:[],pickerValueMulArray:[],pickerValueMulTwoOne:[],pickerValueMulTwoTwo:[],pickerValueMulThreeOne:[],pickerValueMulThreeTwo:[],pickerValueMulThreeThree:[],showPicker:!1}},props:{mode:{type:String,default:"selector"},pickerValueArray:{type:Array,default:function(){return[]}},pickerValueDefault:{type:Array,default:function(){return[]}},deepLength:{type:Number,default:2},themeColor:String},watch:(0,r.default)({pickerValueArray:function(e,i){this.pickerValueArrayChange=!0},mode:function(e,i){this.modeChange=!0}},"pickerValueArray",(function(e){this.initPicker(e)})),methods:{initPicker:function(e){var i=e;if(this.pickerValue=this.pickerValueDefault,"selector"===this.mode)this.pickerValueSingleArray=e;else if("timeSelector"===this.mode){this.modeChange=!1;for(var t=[],a=[],r=0;r<24;r++)t.push({value:r,label:r>9?"".concat(r," 时"):"0".concat(r," 时")});for(var l=0;l<60;l++)a.push({value:l,label:l>9?"".concat(l," 分"):"0".concat(l," 分")});this.pickerValueHour=t,this.pickerValueMinute=a}else if("multiSelector"===this.mode)this.pickerValueMulArray=e;else if("multiLinkageSelector"===this.mode&&2===this.deepLength){for(var n=[],c=[],u=0,o=i.length;u<o;u++)n.push(i[u]);if(2===this.pickerValueDefault.length)for(var s=this.pickerValueDefault[0],h=0,p=i[s].children.length;h<p;h++)c.push(i[s].children[h]);else for(var k=0,v=i[0].children.length;k<v;k++)c.push(i[0].children[k]);this.pickerValueMulTwoOne=n,this.pickerValueMulTwoTwo=c}else if("multiLinkageSelector"===this.mode&&3===this.deepLength){for(var d=[],f=[],m=[],V=0,g=i.length;V<g;V++)d.push(i[V]);if(this.pickerValueDefault=3===this.pickerValueDefault.length?this.pickerValueDefault:[0,0,0],3===this.pickerValueDefault.length){for(var b=this.pickerValueDefault[0],w=0,y=i[b].children.length;w<y;w++)f.push(i[b].children[w]);for(var _=this.pickerValueDefault[1],C=0,T=i[b].children[_].children.length;C<T;C++)m.push(i[b].children[_].children[C])}this.pickerValueMulThreeOne=d,this.pickerValueMulThreeTwo=f,this.pickerValueMulThreeThree=m}},show:function(){var e=this;setTimeout((function(){e.pickerValueArrayChange||e.modeChange?(e.initPicker(e.pickerValueArray),e.showPicker=!0,e.pickerValueArrayChange=!1,e.modeChange=!1):e.showPicker=!0}),0)},maskClick:function(){this.pickerCancel()},pickerCancel:function(){this.showPicker=!1,this._initPickerVale();var e={index:this.pickerValue,value:this._getPickerLabelAndValue(this.pickerValue,this.mode).value,label:this._getPickerLabelAndValue(this.pickerValue,this.mode).label};this.$emit("onCancel",e)},pickerConfirm:function(e){this.showPicker=!1,this._initPickerVale();var i={index:this.pickerValue,value:this._getPickerLabelAndValue(this.pickerValue,this.mode).value,label:this._getPickerLabelAndValue(this.pickerValue,this.mode).label};this.$emit("onConfirm",i)},showPickerView:function(){this.showPicker=!0},pickerChange:function(e){this.pickerValue=e.mp.detail.value;var i={index:this.pickerValue,value:this._getPickerLabelAndValue(this.pickerValue,this.mode).value,label:this._getPickerLabelAndValue(this.pickerValue,this.mode).label};this.$emit("onChange",i)},pickerChangeMul:function(e){if(2===this.deepLength){var i=this.pickerValueArray,t=e.mp.detail.value;if(t[0]!==this.pickerValue[0]){for(var a=[],r=0,l=i[t[0]].children.length;r<l;r++)a.push(i[t[0]].children[r]);this.pickerValueMulTwoTwo=a,t[1]=0}this.pickerValue=t}else if(3===this.deepLength){var n=this.pickerValueArray,c=e.mp.detail.value,u=[],o=[];if(c[0]!==this.pickerValue[0]){this.pickerValueMulThreeTwo=[];for(var s=0,h=n[c[0]].children.length;s<h;s++)u.push(n[c[0]].children[s]);for(var p=0,k=n[c[0]].children[0].children.length;p<k;p++)o.push(n[c[0]].children[0].children[p]);c[1]=0,c[2]=0,this.pickerValueMulThreeTwo=u,this.pickerValueMulThreeThree=o}else if(c[1]!==this.pickerValue[1]){this.pickerValueMulThreeThree=[],u=this.pickerValueMulThreeTwo;for(var v=0,d=n[c[0]].children[c[1]].children.length;v<d;v++)o.push(n[c[0]].children[c[1]].children[v]);c[2]=0,this.pickerValueMulThreeThree=o}this.pickerValue=c}var f={index:this.pickerValue,value:this._getPickerLabelAndValue(this.pickerValue,this.mode).value,label:this._getPickerLabelAndValue(this.pickerValue,this.mode).label};this.$emit("onChange",f)},_getPickerLabelAndValue:function(e,i){var t,a=[];if("selector"===i)t=this.pickerValueSingleArray[e].label,a.push(this.pickerValueSingleArray[e].value);else if("timeSelector"===i)t="".concat(this.pickerValueHour[e[0]].label,"-").concat(this.pickerValueMinute[e[1]].label),a.push(this.pickerValueHour[e[0]].value),a.push(this.pickerValueHour[e[1]].value);else if("multiSelector"===i)for(var r=0;r<e.length;r++)r>0?t+=this.pickerValueMulArray[r][e[r]].label+(r===e.length-1?"":"-"):t=this.pickerValueMulArray[r][e[r]].label+"-",a.push(this.pickerValueMulArray[r][e[r]].value);else"multiLinkageSelector"===i&&(t=2===this.deepLength?"".concat(this.pickerValueMulTwoOne[e[0]].label,"-").concat(this.pickerValueMulTwoTwo[e[1]].label):"".concat(this.pickerValueMulThreeOne[e[0]].label,"-").concat(this.pickerValueMulThreeTwo[e[1]].label,"-").concat(this.pickerValueMulThreeThree[e[2]].label),2===this.deepLength?(a.push(this.pickerValueMulTwoOne[e[0]].value),a.push(this.pickerValueMulTwoTwo[e[1]].value)):(a.push(this.pickerValueMulThreeOne[e[0]].value),a.push(this.pickerValueMulThreeTwo[e[1]].value),a.push(this.pickerValueMulThreeThree[e[2]].value)));return{label:t,value:a}},_initPickerVale:function(){0===this.pickerValue.length&&("selector"===this.mode?this.pickerValue=[0]:"multiSelector"===this.mode?this.pickerValue=new Int8Array(this.pickerValueArray.length):"multiLinkageSelector"===this.mode&&2===this.deepLength?this.pickerValue=[0,0]:"multiLinkageSelector"===this.mode&&3===this.deepLength&&(this.pickerValue=[0,0,0]))}}};i.default=l},dff2:function(e,i,t){var a=t("24fb");i=a(!1),i.push([e.i,'.pickerMask[data-v-ba553cb4]{position:fixed;z-index:1000;top:0;right:0;left:0;bottom:0;background:rgba(0,0,0,.6)}.mpvue-picker-content[data-v-ba553cb4]{position:fixed;bottom:0;left:0;width:100%;transition:all .3s ease;-webkit-transform:translateY(100%);transform:translateY(100%);z-index:3000}.mpvue-picker-view-show[data-v-ba553cb4]{-webkit-transform:translateY(0);transform:translateY(0)}.mpvue-picker__hd[data-v-ba553cb4]{display:flex;padding:9px 15px;background-color:#fff;position:relative;text-align:center;font-size:17px}.mpvue-picker__hd[data-v-ba553cb4]:after{content:" ";position:absolute;left:0;bottom:0;right:0;height:1px;border-bottom:1px solid #e5e5e5;color:#e5e5e5;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.mpvue-picker__action[data-v-ba553cb4]{display:block;flex:1;color:#1aad19}.mpvue-picker__action[data-v-ba553cb4]:first-child{text-align:left;color:#888}.mpvue-picker__action[data-v-ba553cb4]:last-child{text-align:right}.picker-item[data-v-ba553cb4]{text-align:center;line-height:40px;font-size:16px}.mpvue-picker-view[data-v-ba553cb4]{position:relative;bottom:0;left:0;width:100%;height:238px;background-color:#fff}',""]),e.exports=i},f48b:function(e,i,t){"use strict";t.r(i);var a=t("cecc"),r=t.n(a);for(var l in a)"default"!==l&&function(e){t.d(i,e,(function(){return a[e]}))}(l);i["default"]=r.a},fd87:function(e,i,t){var a=t("74e8");a("Int8",(function(e){return function(i,t,a){return e(this,i,t,a)}}))}}]);