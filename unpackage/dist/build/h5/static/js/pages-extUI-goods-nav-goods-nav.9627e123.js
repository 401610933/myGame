(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-goods-nav-goods-nav"],{"09f0":function(t,e,n){"use strict";function o(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],o=!0,a=!1,i=void 0;try{for(var r,c=t[Symbol.iterator]();!(o=(r=c.next()).done);o=!0)if(n.push(r.value),e&&n.length===e)break}catch(l){a=!0,i=l}finally{try{o||null==c["return"]||c["return"]()}finally{if(a)throw i}}return n}}n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=o},"0d21":function(t,e,n){"use strict";function o(t){if(Array.isArray(t))return t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o},"15af":function(t,e,n){"use strict";var o=n("3b18"),a=n.n(o);a.a},"1ab5":function(t,e,n){"use strict";var o=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("feda")),i=o(n("e2ad")),r=o(n("d41d")),c={en:a.default,"zh-Hans":i.default,"zh-Hant":r.default};e.default=c},"37dc":function(t,e,n){"use strict";(function(t){var o=n("4ea4");n("99af"),n("7db0"),n("4160"),n("c975"),n("a434"),n("b64b"),n("d3b7"),n("e25e"),n("ac1f"),n("5319"),n("1276"),n("498a"),n("159b"),n("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.compileI18nJsonStr=I,e.hasI18nJson=M,e.initVueI18n=S,e.isI18nStr=N,e.normalizeLocale=L,e.parseI18nJson=$,e.resolveLocale=J,e.isString=e.LOCALE_ZH_HANT=e.LOCALE_ZH_HANS=e.LOCALE_FR=e.LOCALE_ES=e.LOCALE_EN=e.I18n=e.Formatter=void 0;var a=o(n("3835")),i=o(n("d4ec")),r=o(n("bee2")),c=Array.isArray,l=function(t){return null!==t&&"object"===typeof t},u=["{","}"],s=function(){function t(){(0,i.default)(this,t),this._caches=Object.create(null)}return(0,r.default)(t,[{key:"interpolate",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:u;if(!e)return[t];var o=this._caches[t];return o||(o=p(t,n),this._caches[t]=o),v(o,e)}}]),t}();e.Formatter=s;var f=/^(?:\d)+/,d=/^(?:\w)+/;function p(t,e){var n=(0,a.default)(e,2),o=n[0],i=n[1],r=[],c=0,l="";while(c<t.length){var u=t[c++];if(u===o){l&&r.push({type:"text",value:l}),l="";var s="";u=t[c++];while(void 0!==u&&u!==i)s+=u,u=t[c++];var p=u===i,v=f.test(s)?"list":p&&d.test(s)?"named":"unknown";r.push({value:s,type:v})}else l+=u}return l&&r.push({type:"text",value:l}),r}function v(t,e){var n=[],o=0,a=c(e)?"list":l(e)?"named":"unknown";if("unknown"===a)return n;while(o<t.length){var i=t[o];switch(i.type){case"text":n.push(i.value);break;case"list":n.push(e[parseInt(i.value,10)]);break;case"named":"named"===a&&n.push(e[i.value]);break;case"unknown":0;break}o++}return n}var b="zh-Hans";e.LOCALE_ZH_HANS=b;var h="zh-Hant";e.LOCALE_ZH_HANT=h;var g="en";e.LOCALE_EN=g;var x="fr";e.LOCALE_FR=x;var _="es";e.LOCALE_ES=_;var y=Object.prototype.hasOwnProperty,m=function(t,e){return y.call(t,e)},w=new s;function k(t,e){return!!e.find((function(e){return-1!==t.indexOf(e)}))}function C(t,e){return e.find((function(e){return 0===t.indexOf(e)}))}function L(t,e){if(t){if(t=t.trim().replace(/_/g,"-"),e&&e[t])return t;if(t=t.toLowerCase(),0===t.indexOf("zh"))return t.indexOf("-hans")>-1?b:t.indexOf("-hant")>-1||k(t,["-tw","-hk","-mo","-cht"])?h:b;var n=C(t,[g,x,_]);return n||void 0}}var O=function(){function t(e){var n=e.locale,o=e.fallbackLocale,a=e.messages,r=e.watcher,c=e.formater;(0,i.default)(this,t),this.locale=g,this.fallbackLocale=g,this.message={},this.messages={},this.watchers=[],o&&(this.fallbackLocale=o),this.formater=c||w,this.messages=a||{},this.setLocale(n||g),r&&this.watchLocale(r)}return(0,r.default)(t,[{key:"setLocale",value:function(t){var e=this,n=this.locale;this.locale=L(t,this.messages)||this.fallbackLocale,this.messages[this.locale]||(this.messages[this.locale]={}),this.message=this.messages[this.locale],n!==this.locale&&this.watchers.forEach((function(t){t(e.locale,n)}))}},{key:"getLocale",value:function(){return this.locale}},{key:"watchLocale",value:function(t){var e=this,n=this.watchers.push(t)-1;return function(){e.watchers.splice(n,1)}}},{key:"add",value:function(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=this.messages[t];o?n?Object.assign(o,e):Object.keys(e).forEach((function(t){m(o,t)||(o[t]=e[t])})):this.messages[t]=e}},{key:"f",value:function(t,e,n){return this.formater.interpolate(t,e,n).join("")}},{key:"t",value:function(t,e,n){var o=this.message;return"string"===typeof e?(e=L(e,this.messages),e&&(o=this.messages[e])):n=e,m(o,t)?this.formater.interpolate(o[t],n).join(""):(console.warn("Cannot translate the value of keypath ".concat(t,". Use the value of keypath as default.")),t)}}]),t}();function j(t,e){t.$watchLocale?t.$watchLocale((function(t){e.setLocale(t)})):t.$watch((function(){return t.$locale}),(function(t){e.setLocale(t)}))}function E(){return"undefined"!==typeof uni&&uni.getLocale?uni.getLocale():"undefined"!==typeof t&&t.getLocale?t.getLocale():g}function S(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0;if("string"!==typeof t){var a=[e,t];t=a[0],e=a[1]}"string"!==typeof t&&(t=E()),"string"!==typeof n&&(n="undefined"!==typeof __uniConfig&&__uniConfig.fallbackLocale||g);var i=new O({locale:t,fallbackLocale:n,messages:e,watcher:o}),r=function(t,e){if("function"!==typeof getApp)r=function(t,e){return i.t(t,e)};else{var n=!1;r=function(t,e){var o=getApp().$vm;return o&&(o.$locale,n||(n=!0,j(o,i))),i.t(t,e)}}return r(t,e)};return{i18n:i,f:function(t,e,n){return i.f(t,e,n)},t:function(t,e){return r(t,e)},add:function(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return i.add(t,e,n)},watch:function(t){return i.watchLocale(t)},getLocale:function(){return i.getLocale()},setLocale:function(t){return i.setLocale(t)}}}e.I18n=O;var A,z=function(t){return"string"===typeof t};function M(t,e){return A||(A=new s),H(t,(function(t,n){var o=t[n];return z(o)?!!N(o,e)||void 0:M(o,e)}))}function $(t,e,n){return A||(A=new s),H(t,(function(t,o){var a=t[o];z(a)?N(a,n)&&(t[o]=G(a,e,n)):$(a,e,n)})),t}function I(t,e){var n=e.locale,o=e.locales,a=e.delimiters;if(!N(t,a))return t;A||(A=new s);var i=[];Object.keys(o).forEach((function(t){t!==n&&i.push({locale:t,values:o[t]})})),i.unshift({locale:n,values:o[n]});try{return JSON.stringify(T(JSON.parse(t),i,a),null,2)}catch(r){}return t}function N(t,e){return t.indexOf(e[0])>-1}function G(t,e,n){return A.interpolate(t,e,n).join("")}function P(t,e,n,o){var a=t[e];if(z(a)){if(N(a,o)&&(t[e]=G(a,n[0].values,o),n.length>1)){var i=t[e+"Locales"]={};n.forEach((function(t){i[t.locale]=G(a,t.values,o)}))}}else T(a,n,o)}function T(t,e,n){return H(t,(function(t,o){P(t,o,e,n)})),t}function H(t,e){if(c(t)){for(var n=0;n<t.length;n++)if(e(t,n))return!0}else if(l(t))for(var o in t)if(e(t,o))return!0;return!1}function J(t){return function(e){return e?(e=L(e)||e,U(e).find((function(e){return t.indexOf(e)>-1}))):e}}function U(t){var e=[],n=t.split("-");while(n.length)e.push(n.join("-")),n.pop();return e}e.isString=z}).call(this,n("c8ba"))},3835:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=l;var o=c(n("0d21")),a=c(n("09f0")),i=c(n("06c5")),r=c(n("3d8c"));function c(t){return t&&t.__esModule?t:{default:t}}function l(t,e){return(0,o.default)(t)||(0,a.default)(t,e)||(0,i.default)(t,e)||(0,r.default)()}},"3ad1":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={components:{},data:function(){return{options:[{icon:"headphones",text:"客服"},{icon:"shop",text:"店铺",info:2,infoBackgroundColor:"#007aff",infoColor:"#f5f5f5"},{icon:"cart",text:"购物车",info:2}],buttonGroup:[{text:"加入购物车",backgroundColor:"#ffa200",color:"#fff"},{text:"立即购买",backgroundColor:"#ff0000",color:"#fff"}]}},onLoad:function(){},methods:{onClick:function(t){uni.showToast({title:"点击".concat(t.content.text),icon:"none"})},buttonClick:function(e){t("log",e," at pages/extUI/goods-nav/goods-nav.vue:61"),this.options[2].info++}}};e.default=n}).call(this,n("0de9")["log"])},"3b18":function(t,e,n){var o=n("ffdf");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=n("4f06").default;a("ec32becc",o,!0,{sourceMap:!1,shadowMode:!1})},"3d8c":function(t,e,n){"use strict";function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o},"3e82":function(t,e,n){var o=n("24fb"),a=n("1de5"),i=n("549e");e=o(!1);var r=a(i);e.push([t.i,"\n@font-face{font-family:uniicons;src:url("+r+') format("truetype")}\n.uni-icons[data-v-3623ae51]{font-family:uniicons;text-decoration:none;text-align:center}',""]),t.exports=e},"46a8":function(t,e,n){"use strict";n.r(e);var o=n("8b46"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},"4a4a":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var o={uniIcons:n("75e1").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-goods-nav"},[n("v-uni-view",{staticClass:"uni-tab__seat"}),n("v-uni-view",{staticClass:"uni-tab__cart-box flex"},[n("v-uni-view",{staticClass:"flex uni-tab__cart-sub-left"},t._l(t.options,(function(e,o){return n("v-uni-view",{key:o,staticClass:"flex uni-tab__cart-button-left uni-tab__shop-cart",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onClick(o,e)}}},[n("v-uni-view",{staticClass:"uni-tab__icon"},[n("uni-icons",{attrs:{type:e.icon,size:"20",color:"#646566"}})],1),n("v-uni-text",{staticClass:"uni-tab__text"},[t._v(t._s(e.text))]),n("v-uni-view",{staticClass:"flex uni-tab__dot-box"},[e.info?n("v-uni-text",{staticClass:"uni-tab__dot ",class:{"uni-tab__dots":e.info>9},style:{backgroundColor:e.infoBackgroundColor?e.infoBackgroundColor:"#ff0000",color:e.infoColor?e.infoColor:"#fff"}},[t._v(t._s(e.info))]):t._e()],1)],1)})),1),n("v-uni-view",{staticClass:"flex uni-tab__cart-sub-right ",class:{"uni-tab__right":t.fill}},t._l(t.buttonGroup,(function(e,o){return n("v-uni-view",{key:o,staticClass:"flex uni-tab__cart-button-right",style:{backgroundColor:e.backgroundColor,color:e.color},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.buttonClick(o,e)}}},[n("v-uni-text",{staticClass:"uni-tab__cart-button-right-text",style:{color:e.color}},[t._v(t._s(e.text))])],1)})),1)],1)],1)},i=[]},"549e":function(t,e,n){t.exports=n.p+"static/fonts/uni.75745d34.ttf"},"583a":function(t,e,n){"use strict";var o=n("6998"),a=n.n(o);a.a},"682b":function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,".flex[data-v-61b83c5b]{\ndisplay:flex;\nflex-direction:row}.uni-goods-nav[data-v-61b83c5b]{\ndisplay:flex;\nflex:1;flex-direction:row}.uni-tab__cart-box[data-v-61b83c5b]{flex:1;height:50px;background-color:#fff;z-index:900}.uni-tab__cart-sub-left[data-v-61b83c5b]{padding:0 5px}.uni-tab__cart-sub-right[data-v-61b83c5b]{flex:1}.uni-tab__right[data-v-61b83c5b]{margin:5px 0;margin-right:10px;border-radius:100px;overflow:hidden}.uni-tab__cart-button-left[data-v-61b83c5b]{\ndisplay:flex;\nposition:relative;justify-content:center;align-items:center;flex-direction:column;margin:0 10px;\ncursor:pointer\n}.uni-tab__icon[data-v-61b83c5b]{width:18px;height:18px}.image[data-v-61b83c5b]{width:18px;height:18px}.uni-tab__text[data-v-61b83c5b]{margin-top:3px;font-size:12px;color:#646566}.uni-tab__cart-button-right[data-v-61b83c5b]{\ndisplay:flex;flex-direction:column;\nflex:1;justify-content:center;align-items:center;\ncursor:pointer\n}.uni-tab__cart-button-right-text[data-v-61b83c5b]{font-size:14px;color:#fff}.uni-tab__cart-button-right[data-v-61b83c5b]:active{opacity:.7}.uni-tab__dot-box[data-v-61b83c5b]{\ndisplay:flex;flex-direction:column;\nposition:absolute;right:-2px;top:2px;justify-content:center;align-items:center}.uni-tab__dot[data-v-61b83c5b]{padding:0 4px;line-height:15px;color:#fff;text-align:center;font-size:12px;background-color:red;border-radius:15px}.uni-tab__dots[data-v-61b83c5b]{padding:0 4px;border-radius:15px}.uni-tab__color-y[data-v-61b83c5b]{background-color:#ffa200}.uni-tab__color-r[data-v-61b83c5b]{background-color:red}",""]),t.exports=e},6998:function(t,e,n){var o=n("3e82");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=n("4f06").default;a("77e6ccd3",o,!0,{sourceMap:!1,shadowMode:!1})},"6b65":function(t,e,n){"use strict";var o=n("af94"),a=n.n(o);a.a},"6caf":function(t,e,n){"use strict";var o=n("e5a1"),a=n.n(o);a.a},"70c8":function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 头条小程序组件内不能引入字体 */\nuni-page-body[data-v-1e0e1042]{display:flex;flex-direction:column;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}uni-view[data-v-1e0e1042]{font-size:14px;line-height:inherit}.example[data-v-1e0e1042]{padding:0 15px 15px}.example-info[data-v-1e0e1042]{padding:15px;color:#3b4144;background:#fff}.example-body[data-v-1e0e1042]{\ndisplay:flex;\nflex-direction:row;flex-wrap:wrap;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n.example[data-v-1e0e1042]{padding:0 15px}.example-info[data-v-1e0e1042]{\ndisplay:block;\npadding:15px;color:#3b4144;background-color:#fff;font-size:14px;line-height:20px}.example-info-text[data-v-1e0e1042]{font-size:14px;line-height:20px;color:#3b4144}.example-body[data-v-1e0e1042]{flex-direction:column;padding:15px;background-color:#fff}.word-btn-white[data-v-1e0e1042]{font-size:18px;color:#fff}.word-btn[data-v-1e0e1042]{\ndisplay:flex;\nflex-direction:row;align-items:center;justify-content:center;border-radius:6px;height:48px;margin:15px;background-color:#007aff}.word-btn--hover[data-v-1e0e1042]{background-color:#4ca2ff}.example-body[data-v-1e0e1042]{padding:0;\ndisplay:block\n}.goods-carts[data-v-1e0e1042]{\ndisplay:flex;\nflex-direction:column;position:fixed;left:0;right:0;\nleft:var(--window-left);right:var(--window-right);\nbottom:0}body.?%PAGE?%[data-v-1e0e1042]{background-color:#efeff4}",""]),t.exports=e},"75e1":function(t,e,n){"use strict";n.r(e);var o=n("f3f6"),a=n("8236");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("583a");var r,c=n("f0c5"),l=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,"3623ae51",null,!1,o["a"],r);e["default"]=l.exports},8236:function(t,e,n){"use strict";n.r(e);var o=n("9801"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},"8a0c":function(t,e,n){"use strict";n.r(e);var o=n("9dca"),a=n("46a8");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("15af");var r,c=n("f0c5"),l=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,"76375ba1",null,!1,o["a"],r);e["default"]=l.exports},"8b46":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"UniSection",emits:["click"],props:{type:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=o},9801:function(t,e,n){"use strict";var o=n("4ea4");n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("eb61")),i={name:"UniIcons",emits:["click"],props:{type:{type:String,default:""},color:{type:String,default:"#333333"},size:{type:[Number,String],default:16},customIcons:{type:String,default:""}},data:function(){return{icons:a.default}},methods:{_onClick:function(){this.$emit("click")}}};e.default=i},"9dca":function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-section",attrs:{nvue:!0}},[t.type?n("v-uni-view",{staticClass:"uni-section__head"},[n("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),n("v-uni-view",{staticClass:"uni-section__content"},[n("v-uni-text",{staticClass:"uni-section__content-title",class:{distraction:!t.subTitle}},[t._v(t._s(t.title))]),t.subTitle?n("v-uni-text",{staticClass:"uni-section__content-sub"},[t._v(t._s(t.subTitle))]):t._e()],1),t._t("default")],2)},i=[]},a9b2:function(t,e,n){"use strict";n.r(e);var o=n("ee2d"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},af94:function(t,e,n){var o=n("70c8");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=n("4f06").default;a("ddbfe800",o,!0,{sourceMap:!1,shadowMode:!1})},b3c9:function(t,e,n){"use strict";n.r(e);var o=n("3ad1"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},bee2:function(t,e,n){"use strict";function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function a(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=a},d41d:function(t){t.exports=JSON.parse('{"uni-goods-nav.options.shop":"店鋪","uni-goods-nav.options.cart":"購物車","uni-goods-nav.buttonGroup.addToCart":"加入購物車","uni-goods-nav.buttonGroup.buyNow":"立即購買"}')},d4ec:function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o},e2ad:function(t){t.exports=JSON.parse('{"uni-goods-nav.options.shop":"店铺","uni-goods-nav.options.cart":"购物车","uni-goods-nav.buttonGroup.addToCart":"加入购物车","uni-goods-nav.buttonGroup.buyNow":"立即购买"}')},e569:function(t,e,n){"use strict";n.r(e);var o=n("ee8b"),a=n("b3c9");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("6b65");var r,c=n("f0c5"),l=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,"1e0e1042",null,!1,o["a"],r);e["default"]=l.exports},e5a1:function(t,e,n){var o=n("682b");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=n("4f06").default;a("36f1ad22",o,!0,{sourceMap:!1,shadowMode:!1})},eb61:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={pulldown:"",refreshempty:"",back:"",forward:"",more:"","more-filled":"",scan:"",qq:"",weibo:"",weixin:"",pengyouquan:"",loop:"",refresh:"","refresh-filled":"",arrowthindown:"",arrowthinleft:"",arrowthinright:"",arrowthinup:"","undo-filled":"",undo:"",redo:"","redo-filled":"",bars:"",chatboxes:"",camera:"","chatboxes-filled":"","camera-filled":"","cart-filled":"",cart:"","checkbox-filled":"",checkbox:"",arrowleft:"",arrowdown:"",arrowright:"","smallcircle-filled":"",arrowup:"",circle:"","eye-filled":"","eye-slash-filled":"","eye-slash":"",eye:"","flag-filled":"",flag:"","gear-filled":"",reload:"",gear:"","hand-thumbsdown-filled":"","hand-thumbsdown":"","hand-thumbsup-filled":"","heart-filled":"","hand-thumbsup":"",heart:"",home:"",info:"","home-filled":"","info-filled":"","circle-filled":"","chat-filled":"",chat:"","mail-open-filled":"","email-filled":"","mail-open":"",email:"",checkmarkempty:"",list:"","locked-filled":"",locked:"","map-filled":"","map-pin":"","map-pin-ellipse":"",map:"","minus-filled":"","mic-filled":"",minus:"",micoff:"",mic:"",clear:"",smallcircle:"",close:"",closeempty:"",paperclip:"",paperplane:"","paperplane-filled":"","person-filled":"","contact-filled":"",person:"",contact:"","images-filled":"",phone:"",images:"",image:"","image-filled":"","location-filled":"",location:"","plus-filled":"",plus:"",plusempty:"","help-filled":"",help:"","navigate-filled":"",navigate:"","mic-slash-filled":"",search:"",settings:"",sound:"","sound-filled":"","spinner-cycle":"","download-filled":"","personadd-filled":"","videocam-filled":"",personadd:"",upload:"","upload-filled":"",starhalf:"","star-filled":"",star:"",trash:"","phone-filled":"",compose:"",videocam:"","trash-filled":"",download:"","chatbubble-filled":"",chatbubble:"","cloud-download":"","cloud-upload-filled":"","cloud-upload":"","cloud-download-filled":"",headphones:"",shop:""};e.default=o},ee2d:function(t,e,n){"use strict";var o=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("37dc"),i=o(n("1ab5")),r=(0,a.initVueI18n)(i.default),c=r.t,l={name:"UniGoodsNav",emits:["click","buttonClick"],props:{options:{type:Array,default:function(){return[{icon:"shop",text:c("uni-goods-nav.options.shop")},{icon:"cart",text:c("uni-goods-nav.options.cart")}]}},buttonGroup:{type:Array,default:function(){return[{text:c("uni-goods-nav.buttonGroup.addToCart"),backgroundColor:"#ffa200",color:"#fff"},{text:c("uni-goods-nav.buttonGroup.buyNow"),backgroundColor:"#ff0000",color:"#fff"}]}},fill:{type:Boolean,default:!1}},methods:{onClick:function(t,e){this.$emit("click",{index:t,content:e})},buttonClick:function(t,e){uni.report&&uni.report(e.text,e.text),this.$emit("buttonClick",{index:t,content:e})}}};e.default=l},ee8b:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var o={uniSection:n("8a0c").default,uniGoodsNav:n("f891").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-text",{staticClass:"example-info"},[t._v("uni-goods-nav 组件主要用于电商类应用底部导航，可自定义加入购物车，购买等操作")]),n("uni-section",{attrs:{title:"基础用法",type:"line"}}),n("v-uni-view",{staticClass:"example-body"},[n("uni-goods-nav",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}})],1),n("uni-section",{attrs:{title:"自定义用法",type:"line"}}),n("v-uni-view",{staticClass:"example-body"},[n("uni-goods-nav",{attrs:{fill:!0,options:t.options,"button-group":t.buttonGroup},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)},buttonClick:function(e){arguments[0]=e=t.$handleEvent(e),t.buttonClick.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"goods-carts"},[n("uni-goods-nav",{attrs:{options:t.options,fill:!0,"button-group":t.buttonGroup},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)},buttonClick:function(e){arguments[0]=e=t.$handleEvent(e),t.buttonClick.apply(void 0,arguments)}}})],1)],1)},i=[]},f3f6:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-text",{staticClass:"uni-icons",class:[t.customIcons,t.customIcons?t.type:""],style:{color:t.color,"font-size":t.size+"px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._onClick.apply(void 0,arguments)}}},[t._v(t._s(t.icons[t.type]))])},i=[]},f891:function(t,e,n){"use strict";n.r(e);var o=n("4a4a"),a=n("a9b2");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("6caf");var r,c=n("f0c5"),l=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,"61b83c5b",null,!1,o["a"],r);e["default"]=l.exports},feda:function(t){t.exports=JSON.parse('{"uni-goods-nav.options.shop":"shop","uni-goods-nav.options.cart":"cart","uni-goods-nav.buttonGroup.addToCart":"add to cart","uni-goods-nav.buttonGroup.buyNow":"buy now"}')},ffdf:function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,".uni-section[data-v-76375ba1]{position:relative;\ndisplay:flex;\nmargin-top:10px;flex-direction:row;align-items:center;padding:0 10px;height:50px;background-color:#f8f8f8;\n\nfont-weight:400}\n.uni-section__head[data-v-76375ba1]{flex-direction:row;justify-content:center;align-items:center;margin-right:10px}.line[data-v-76375ba1]{height:15px;background-color:silver;border-radius:5px;width:3px}.circle[data-v-76375ba1]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:silver}.uni-section__content[data-v-76375ba1]{\ndisplay:flex;\nflex-direction:column;flex:1;color:#333}.uni-section__content-title[data-v-76375ba1]{font-size:14px;color:#333}.distraction[data-v-76375ba1]{flex-direction:row;align-items:center}.uni-section__content-sub[data-v-76375ba1]{font-size:12px;color:#999}",""]),t.exports=e}}]);