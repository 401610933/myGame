(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-fav-fav"],{"09f0":function(e,t,n){"use strict";function a(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,c=!1,i=void 0;try{for(var r,o=e[Symbol.iterator]();!(a=(r=o.next()).done);a=!0)if(n.push(r.value),t&&n.length===t)break}catch(l){c=!0,i=l}finally{try{a||null==o["return"]||o["return"]()}finally{if(c)throw i}}return n}}n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=a},"0d21":function(e,t,n){"use strict";function a(e){if(Array.isArray(e))return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a},"1bc3":function(e,t,n){var a=n("6679");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var c=n("4f06").default;c("6e0e9f7b",a,!0,{sourceMap:!1,shadowMode:!1})},"2e65":function(e,t,n){var a=n("60d5");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var c=n("4f06").default;c("51e30660",a,!0,{sourceMap:!1,shadowMode:!1})},"37dc":function(e,t,n){"use strict";(function(e){var a=n("4ea4");n("99af"),n("7db0"),n("4160"),n("c975"),n("a434"),n("b64b"),n("d3b7"),n("e25e"),n("ac1f"),n("5319"),n("1276"),n("498a"),n("159b"),n("ddb0"),Object.defineProperty(t,"__esModule",{value:!0}),t.compileI18nJsonStr=z,t.hasI18nJson=$,t.initVueI18n=S,t.isI18nStr=I,t.normalizeLocale=_,t.parseI18nJson=M,t.resolveLocale=J,t.isString=t.LOCALE_ZH_HANT=t.LOCALE_ZH_HANS=t.LOCALE_FR=t.LOCALE_ES=t.LOCALE_EN=t.I18n=t.Formatter=void 0;var c=a(n("3835")),i=a(n("d4ec")),r=a(n("bee2")),o=Array.isArray,l=function(e){return null!==e&&"object"===typeof e},u=["{","}"],f=function(){function e(){(0,i.default)(this,e),this._caches=Object.create(null)}return(0,r.default)(e,[{key:"interpolate",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:u;if(!t)return[e];var a=this._caches[e];return a||(a=v(e,n),this._caches[e]=a),h(a,t)}}]),e}();t.Formatter=f;var s=/^(?:\d)+/,d=/^(?:\w)+/;function v(e,t){var n=(0,c.default)(t,2),a=n[0],i=n[1],r=[],o=0,l="";while(o<e.length){var u=e[o++];if(u===a){l&&r.push({type:"text",value:l}),l="";var f="";u=e[o++];while(void 0!==u&&u!==i)f+=u,u=e[o++];var v=u===i,h=s.test(f)?"list":v&&d.test(f)?"named":"unknown";r.push({value:f,type:h})}else l+=u}return l&&r.push({type:"text",value:l}),r}function h(e,t){var n=[],a=0,c=o(t)?"list":l(t)?"named":"unknown";if("unknown"===c)return n;while(a<e.length){var i=e[a];switch(i.type){case"text":n.push(i.value);break;case"list":n.push(t[parseInt(i.value,10)]);break;case"named":"named"===c&&n.push(t[i.value]);break;case"unknown":0;break}a++}return n}var p="zh-Hans";t.LOCALE_ZH_HANS=p;var b="zh-Hant";t.LOCALE_ZH_HANT=b;var g="en";t.LOCALE_EN=g;var y="fr";t.LOCALE_FR=y;var x="es";t.LOCALE_ES=x;var k=Object.prototype.hasOwnProperty,m=function(e,t){return k.call(e,t)},w=new f;function L(e,t){return!!t.find((function(t){return-1!==e.indexOf(t)}))}function C(e,t){return t.find((function(t){return 0===e.indexOf(t)}))}function _(e,t){if(e){if(e=e.trim().replace(/_/g,"-"),t&&t[e])return e;if(e=e.toLowerCase(),0===e.indexOf("zh"))return e.indexOf("-hans")>-1?p:e.indexOf("-hant")>-1||L(e,["-tw","-hk","-mo","-cht"])?b:p;var n=C(e,[g,y,x]);return n||void 0}}var O=function(){function e(t){var n=t.locale,a=t.fallbackLocale,c=t.messages,r=t.watcher,o=t.formater;(0,i.default)(this,e),this.locale=g,this.fallbackLocale=g,this.message={},this.messages={},this.watchers=[],a&&(this.fallbackLocale=a),this.formater=o||w,this.messages=c||{},this.setLocale(n||g),r&&this.watchLocale(r)}return(0,r.default)(e,[{key:"setLocale",value:function(e){var t=this,n=this.locale;this.locale=_(e,this.messages)||this.fallbackLocale,this.messages[this.locale]||(this.messages[this.locale]={}),this.message=this.messages[this.locale],n!==this.locale&&this.watchers.forEach((function(e){e(t.locale,n)}))}},{key:"getLocale",value:function(){return this.locale}},{key:"watchLocale",value:function(e){var t=this,n=this.watchers.push(e)-1;return function(){t.watchers.splice(n,1)}}},{key:"add",value:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=this.messages[e];a?n?Object.assign(a,t):Object.keys(t).forEach((function(e){m(a,e)||(a[e]=t[e])})):this.messages[e]=t}},{key:"f",value:function(e,t,n){return this.formater.interpolate(e,t,n).join("")}},{key:"t",value:function(e,t,n){var a=this.message;return"string"===typeof t?(t=_(t,this.messages),t&&(a=this.messages[t])):n=t,m(a,e)?this.formater.interpolate(a[e],n).join(""):(console.warn("Cannot translate the value of keypath ".concat(e,". Use the value of keypath as default.")),e)}}]),e}();function j(e,t){e.$watchLocale?e.$watchLocale((function(e){t.setLocale(e)})):e.$watch((function(){return e.$locale}),(function(e){t.setLocale(e)}))}function E(){return"undefined"!==typeof uni&&uni.getLocale?uni.getLocale():"undefined"!==typeof e&&e.getLocale?e.getLocale():g}function S(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0;if("string"!==typeof e){var c=[t,e];e=c[0],t=c[1]}"string"!==typeof e&&(e=E()),"string"!==typeof n&&(n="undefined"!==typeof __uniConfig&&__uniConfig.fallbackLocale||g);var i=new O({locale:e,fallbackLocale:n,messages:t,watcher:a}),r=function(e,t){if("function"!==typeof getApp)r=function(e,t){return i.t(e,t)};else{var n=!1;r=function(e,t){var a=getApp().$vm;return a&&(a.$locale,n||(n=!0,j(a,i))),i.t(e,t)}}return r(e,t)};return{i18n:i,f:function(e,t,n){return i.f(e,t,n)},t:function(e,t){return r(e,t)},add:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return i.add(e,t,n)},watch:function(e){return i.watchLocale(e)},getLocale:function(){return i.getLocale()},setLocale:function(e){return i.setLocale(e)}}}t.I18n=O;var F,A=function(e){return"string"===typeof e};function $(e,t){return F||(F=new f),B(e,(function(e,n){var a=e[n];return A(a)?!!I(a,t)||void 0:$(a,t)}))}function M(e,t,n){return F||(F=new f),B(e,(function(e,a){var c=e[a];A(c)?I(c,n)&&(e[a]=P(c,t,n)):M(c,t,n)})),e}function z(e,t){var n=t.locale,a=t.locales,c=t.delimiters;if(!I(e,c))return e;F||(F=new f);var i=[];Object.keys(a).forEach((function(e){e!==n&&i.push({locale:e,values:a[e]})})),i.unshift({locale:n,values:a[n]});try{return JSON.stringify(N(JSON.parse(e),i,c),null,2)}catch(r){}return e}function I(e,t){return e.indexOf(t[0])>-1}function P(e,t,n){return F.interpolate(e,t,n).join("")}function H(e,t,n,a){var c=e[t];if(A(c)){if(I(c,a)&&(e[t]=P(c,n[0].values,a),n.length>1)){var i=e[t+"Locales"]={};n.forEach((function(e){i[e.locale]=P(c,e.values,a)}))}}else N(c,n,a)}function N(e,t,n){return B(e,(function(e,a){H(e,a,t,n)})),e}function B(e,t){if(o(e)){for(var n=0;n<e.length;n++)if(t(e,n))return!0}else if(l(e))for(var a in e)if(t(e,a))return!0;return!1}function J(e){return function(t){return t?(t=_(t)||t,T(t).find((function(t){return e.indexOf(t)>-1}))):t}}function T(e){var t=[],n=e.split("-");while(n.length)t.push(n.join("-")),n.pop();return t}t.isString=A}).call(this,n("c8ba"))},3835:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;var a=o(n("0d21")),c=o(n("09f0")),i=o(n("06c5")),r=o(n("3d8c"));function o(e){return e&&e.__esModule?e:{default:e}}function l(e,t){return(0,a.default)(e)||(0,c.default)(e,t)||(0,i.default)(e,t)||(0,r.default)()}},"3b07":function(e,t,n){"use strict";n.r(t);var a=n("6b2c"),c=n("57b6");for(var i in c)"default"!==i&&function(e){n.d(t,e,(function(){return c[e]}))}(i);n("fcc3");var r,o=n("f0c5"),l=Object(o["a"])(c["default"],a["b"],a["c"],!1,null,"54d2c834",null,!1,a["a"],r);t["default"]=l.exports},"3b69":function(e,t,n){"use strict";var a=n("1bc3"),c=n.n(a);c.a},"3d8c":function(e,t,n){"use strict";function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a},"51a1":function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}));var a={uniIcons:n("75e1").default},c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-fav",class:[!0===e.circle||"true"===e.circle?"uni-fav--circle":""],style:[{backgroundColor:e.checked?e.bgColorChecked:e.bgColor}],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick.apply(void 0,arguments)}}},[e.checked||!0!==e.star&&"true"!==e.star?e._e():n("uni-icons",{staticClass:"uni-fav-star",style:{color:e.checked?e.fgColorChecked:e.fgColor},attrs:{color:e.fgColor,size:"14",type:"star-filled"}}),n("v-uni-text",{staticClass:"uni-fav-text",style:{color:e.checked?e.fgColorChecked:e.fgColor}},[e._v(e._s(e.checked?e.contentFav:e.contentDefault))])],1)},i=[]},"540b":function(e,t,n){"use strict";n.r(t);var a=n("51a1"),c=n("a38d");for(var i in c)"default"!==i&&function(e){n.d(t,e,(function(){return c[e]}))}(i);n("3b69");var r,o=n("f0c5"),l=Object(o["a"])(c["default"],a["b"],a["c"],!1,null,"43850a64",null,!1,a["a"],r);t["default"]=l.exports},"57b6":function(e,t,n){"use strict";n.r(t);var a=n("6752"),c=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=c.a},"60d5":function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 头条小程序组件内不能引入字体 */\nuni-page-body[data-v-54d2c834]{display:flex;flex-direction:column;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}uni-view[data-v-54d2c834]{font-size:14px;line-height:inherit}.example[data-v-54d2c834]{padding:0 15px 15px}.example-info[data-v-54d2c834]{padding:15px;color:#3b4144;background:#fff}.example-body[data-v-54d2c834]{\ndisplay:flex;\nflex-direction:row;flex-wrap:wrap;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n.example[data-v-54d2c834]{padding:0 15px}.example-info[data-v-54d2c834]{\ndisplay:block;\npadding:15px;color:#3b4144;background-color:#fff;font-size:14px;line-height:20px}.example-info-text[data-v-54d2c834]{font-size:14px;line-height:20px;color:#3b4144}.example-body[data-v-54d2c834]{flex-direction:column;padding:15px;background-color:#fff}.word-btn-white[data-v-54d2c834]{font-size:18px;color:#fff}.word-btn[data-v-54d2c834]{\ndisplay:flex;\nflex-direction:row;align-items:center;justify-content:center;border-radius:6px;height:48px;margin:15px;background-color:#007aff}.word-btn--hover[data-v-54d2c834]{background-color:#4ca2ff}\n.favBtn[data-v-54d2c834]{margin:0 %?20?% %?20?% 0}.example-body-fullWidth[data-v-54d2c834]{padding:%?32?% 0}.example-body-first[data-v-54d2c834]{\ndisplay:flex;\nflex-direction:row;justify-content:flex-start}body.?%PAGE?%[data-v-54d2c834]{background-color:#efeff4}",""]),e.exports=t},"649b":function(e){e.exports=JSON.parse('{"uni-fav.collect":"收藏","uni-fav.collected":"已收藏"}')},6651:function(e,t,n){"use strict";var a=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=a(n("a62d")),i=a(n("a901")),r=a(n("649b")),o={en:c.default,"zh-Hans":i.default,"zh-Hant":r.default};t.default=o},6679:function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,".uni-fav[data-v-43850a64]{\ndisplay:flex;\nflex-direction:row;align-items:center;justify-content:center;width:60px;height:25px;line-height:25px;text-align:center;border-radius:3px;\ncursor:pointer\n}.uni-fav--circle[data-v-43850a64]{border-radius:30px}.uni-fav-star[data-v-43850a64]{\ndisplay:flex;\nheight:25px;line-height:24px;margin-right:3px;align-items:center;justify-content:center}.uni-fav-text[data-v-43850a64]{\ndisplay:flex;\nheight:25px;line-height:25px;align-items:center;justify-content:center;font-size:14px}",""]),e.exports=t},6752:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={components:{},data:function(){return{checkList:[!1,!1,!1,!1,!1,!1],contentText:{contentDefault:"追番",contentFav:"已追番"}}},methods:{favClick:function(e){this.checkList[e]=!this.checkList[e],this.$forceUpdate()}}};t.default=a},"6b2c":function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}));var a={uniSection:n("8a0c").default,uniFav:n("540b").default,uniNavBar:n("4b09").default},c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"example-fav"},[n("uni-section",{attrs:{title:"基本用法",type:"line"}}),n("v-uni-view",{staticClass:"example-body example-body-first"},[n("uni-fav",{staticClass:"favBtn",attrs:{checked:e.checkList[0]},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.favClick(0)}}}),n("uni-fav",{staticClass:"favBtn",attrs:{checked:e.checkList[1],star:!1},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.favClick(1)}}}),n("uni-fav",{staticClass:"favBtn",attrs:{checked:e.checkList[2],circle:!0,"bg-color":"#dd524d","bg-color-checked":"#007aff","fg-color":"#ffffff","fg-color-checked":"#ffffff"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.favClick(2)}}}),n("uni-fav",{staticClass:"favBtn",attrs:{checked:e.checkList[3],"bg-color":"#f8f8f8","bg-color-checked":"#eeeeee","fg-color":"#333333","fg-color-checked":"#333333"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.favClick(3)}}})],1),n("uni-section",{attrs:{title:"自定义文字",type:"line"}}),n("v-uni-view",{staticClass:"example-body"},[n("uni-fav",{staticClass:"favBtn",attrs:{checked:e.checkList[4],"content-text":e.contentText},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.favClick(4)}}})],1),n("uni-section",{attrs:{title:"在自定义导航栏使用",type:"line"}}),n("v-uni-view",{staticClass:"example-body example-body-fullWidth"},[n("uni-nav-bar",{staticStyle:{width:"100%"},attrs:{fixed:!1,"left-icon":"arrowleft",title:"标题",color:"#333333","background-color":"#FFFFFF"},scopedSlots:e._u([{key:"right",fn:function(){return[n("uni-fav",{staticClass:"favBtn-nav",attrs:{checked:e.checkList[5],circle:!0},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.favClick(5)}}})]},proxy:!0}])})],1)],1)},i=[]},"6c5f":function(e,t,n){"use strict";var a=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n("37dc"),i=a(n("6651")),r=(0,c.initVueI18n)(i.default),o=r.t,l={name:"UniFav",emits:["click"],props:{star:{type:[Boolean,String],default:!0},bgColor:{type:String,default:"#eeeeee"},fgColor:{type:String,default:"#666666"},bgColorChecked:{type:String,default:"#007aff"},fgColorChecked:{type:String,default:"#FFFFFF"},circle:{type:[Boolean,String],default:!1},checked:{type:Boolean,default:!1},contentText:{type:Object,default:function(){return{contentDefault:"",contentFav:""}}}},computed:{contentDefault:function(){return this.contentText.contentDefault||o("uni-fav.collect")},contentFav:function(){return this.contentText.contentFav||o("uni-fav.collected")}},watch:{checked:function(){uni.report&&(this.checked?uni.report("收藏","收藏"):uni.report("取消收藏","取消收藏"))}},methods:{onClick:function(){this.$emit("click")}}};t.default=l},a38d:function(e,t,n){"use strict";n.r(t);var a=n("6c5f"),c=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=c.a},a62d:function(e){e.exports=JSON.parse('{"uni-fav.collect":"collect","uni-fav.collected":"collected"}')},a901:function(e){e.exports=JSON.parse('{"uni-fav.collect":"收藏","uni-fav.collected":"已收藏"}')},bee2:function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=c},d4ec:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a},fcc3:function(e,t,n){"use strict";var a=n("2e65"),c=n.n(a);c.a}}]);