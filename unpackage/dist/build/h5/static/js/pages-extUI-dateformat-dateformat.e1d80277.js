(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-dateformat-dateformat"],{"0d23":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var a={uniSection:n("8a0c").default,uniDateformat:n("4ed1").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-text",{staticClass:"example-info"},[t._v("日期格式化组件，通常用于需要展示友好的日期格式的场景")]),n("uni-section",{attrs:{title:"基础用法",type:"line"}}),n("v-uni-view",{staticClass:"example-body"},[n("uni-dateformat",{attrs:{date:t.now-72e5}}),n("uni-dateformat",{attrs:{date:"2020/12/12"}})],1),n("uni-section",{attrs:{title:"设置阈值",type:"line"}}),n("v-uni-text",{staticClass:"example-info"},[t._v("阈值用于控制什么时候显示刚刚|马上，什么时候显示xx分钟前|xx分钟后")]),n("v-uni-view",{staticClass:"example-body"},[n("uni-dateformat",{attrs:{date:t.now-3e4,threshold:[0,36e5]}}),n("uni-dateformat",{attrs:{date:t.now-3e4,threshold:[0,0]}})],1),n("uni-section",{attrs:{title:"使用英文",type:"line"}}),n("v-uni-view",{staticClass:"example-body"},[n("uni-dateformat",{attrs:{date:t.now-12e5,threshold:[6e4,36e5],locale:"en"}}),n("uni-dateformat",{attrs:{date:t.now-3e4,threshold:[6e4,36e5],locale:"en"}}),n("uni-dateformat",{attrs:{date:t.now-8e4,threshold:[6e4,36e5],locale:"en"}})],1)],1)},i=[]},"15af":function(t,e,n){"use strict";var a=n("3b18"),r=n.n(a);r.a},"169e":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-text",[t._v(t._s(t.dateShow))])},i=[]},3333:function(t,e,n){"use strict";var a=n("8067"),r=n.n(a);r.a},"3b18":function(t,e,n){var a=n("ffdf");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("ec32becc",a,!0,{sourceMap:!1,shadowMode:!1})},"3cbb":function(t,e,n){"use strict";n.r(e);var a=n("5474"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},"3fc7":function(t,e,n){"use strict";n.r(e);var a=n("0d23"),r=n("3cbb");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("3333");var o,u=n("f0c5"),f=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,"10ee8f7f",null,!1,a["a"],o);e["default"]=f.exports},"46a8":function(t,e,n){"use strict";n.r(e);var a=n("8b46"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},"4ed1":function(t,e,n){"use strict";n.r(e);var a=n("169e"),r=n("6556");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);var o,u=n("f0c5"),f=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,"4270d529",null,!1,a["a"],o);e["default"]=f.exports},5474:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{now:Date.now()}},methods:{}};e.default=a},6556:function(t,e,n){"use strict";n.r(e);var a=n("bc23"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},8067:function(t,e,n){var a=n("af35b");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("18008a5f",a,!0,{sourceMap:!1,shadowMode:!1})},"8a0c":function(t,e,n){"use strict";n.r(e);var a=n("9dca"),r=n("46a8");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("15af");var o,u=n("f0c5"),f=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,"76375ba1",null,!1,a["a"],o);e["default"]=f.exports},"8b46":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"UniSection",emits:["click"],props:{type:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=a},"8cdb":function(t,e,n){"use strict";function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;t+="";while(t.length<e)t="0"+t;return t.slice(-e)}n("c975"),n("fb6a"),n("ac1f"),n("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.formatDate=o,e.friendlyDate=u;var r={yyyy:function(t){return a(t.year,4)},yy:function(t){return a(t.year)},MM:function(t){return a(t.month)},M:function(t){return t.month},dd:function(t){return a(t.day)},d:function(t){return t.day},hh:function(t){return a(t.hour)},h:function(t){return t.hour},mm:function(t){return a(t.minute)},m:function(t){return t.minute},ss:function(t){return a(t.second)},s:function(t){return t.second},SSS:function(t){return a(t.millisecond,3)},S:function(t){return t.millisecond}};function i(t){if(t instanceof Date)return t;switch(typeof t){case"string":return t.indexOf("T")>-1?new Date(t):new Date(t.replace(/-/g,"/"));default:return new Date(t)}}function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy/MM/dd hh:mm:ss";if(!t&&0!==t)return"";t=i(t);var n={year:t.getFullYear(),month:t.getMonth()+1,day:t.getDate(),hour:t.getHours(),minute:t.getMinutes(),second:t.getSeconds(),millisecond:t.getMilliseconds()},a=/yyyy|yy|MM|M|dd|d|hh|h|mm|m|ss|s|SSS|SS|S/,o=!0,u=e;while(o)o=!1,u=u.replace(a,(function(t){return o=!0,r[t](n)}));return u}function u(t,e){var n=e.locale,a=void 0===n?"zh":n,r=e.threshold,u=void 0===r?[6e4,36e5]:r,f=e.format,c=void 0===f?"yyyy/MM/dd hh:mm:ss":f;if("-"===t)return t;if(!t&&0!==t)return"";var s,d,l={zh:{year:"年",month:"月",day:"天",hour:"小时",minute:"分钟",second:"秒",ago:"前",later:"后",justNow:"刚刚",soon:"马上",template:"{num}{unit}{suffix}"},en:{year:"year",month:"month",day:"day",hour:"hour",minute:"minute",second:"second",ago:"ago",later:"later",justNow:"just now",soon:"soon",template:"{num} {unit} {suffix}"}},h=l[a]||l.zh,p=i(t),v=p.getTime()-Date.now(),b=Math.abs(v);if(b<u[0])return v<0?h.justNow:h.soon;if(b>=u[1])return o(p,c);var m=h.later;v<0&&(m=h.ago,v=-v);var x=Math.floor(v/1e3),y=Math.floor(x/60),g=Math.floor(y/60),w=Math.floor(g/24),_=Math.floor(w/30),M=Math.floor(_/12);switch(!0){case M>0:s=M,d=h.year;break;case _>0:s=_,d=h.month;break;case w>0:s=w,d=h.day;break;case g>0:s=g,d=h.hour;break;case y>0:s=y,d=h.minute;break;default:s=x,d=h.second;break}return"en"===a&&(1===s?s="a":d+="s"),h.template.replace(/{\s*num\s*}/g,s+"").replace(/{\s*unit\s*}/g,d).replace(/{\s*suffix\s*}/g,m)}},"9dca":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-section",attrs:{nvue:!0}},[t.type?n("v-uni-view",{staticClass:"uni-section__head"},[n("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),n("v-uni-view",{staticClass:"uni-section__content"},[n("v-uni-text",{staticClass:"uni-section__content-title",class:{distraction:!t.subTitle}},[t._v(t._s(t.title))]),t.subTitle?n("v-uni-text",{staticClass:"uni-section__content-sub"},[t._v(t._s(t.subTitle))]):t._e()],1),t._t("default")],2)},i=[]},af35b:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 头条小程序组件内不能引入字体 */\nuni-page-body[data-v-10ee8f7f]{display:flex;flex-direction:column;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}uni-view[data-v-10ee8f7f]{font-size:14px;line-height:inherit}.example[data-v-10ee8f7f]{padding:0 15px 15px}.example-info[data-v-10ee8f7f]{padding:15px;color:#3b4144;background:#fff}.example-body[data-v-10ee8f7f]{\ndisplay:flex;\nflex-direction:row;flex-wrap:wrap;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n.example[data-v-10ee8f7f]{padding:0 15px}.example-info[data-v-10ee8f7f]{\ndisplay:block;\npadding:15px;color:#3b4144;background-color:#fff;font-size:14px;line-height:20px}.example-info-text[data-v-10ee8f7f]{font-size:14px;line-height:20px;color:#3b4144}.example-body[data-v-10ee8f7f]{flex-direction:column;padding:15px;background-color:#fff}.word-btn-white[data-v-10ee8f7f]{font-size:18px;color:#fff}.word-btn[data-v-10ee8f7f]{\ndisplay:flex;\nflex-direction:row;align-items:center;justify-content:center;border-radius:6px;height:48px;margin:15px;background-color:#007aff}.word-btn--hover[data-v-10ee8f7f]{background-color:#4ca2ff}.example-body[data-v-10ee8f7f]{line-height:1.5em}body.?%PAGE?%[data-v-10ee8f7f]{background-color:#efeff4}",""]),t.exports=e},bc23:function(t,e,n){"use strict";n("a9e3"),n("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("8cdb"),r={name:"uniDateformat",props:{date:{type:[Object,String,Number],default:function(){return"-"}},locale:{type:String,default:"zh"},threshold:{type:Array,default:function(){return[0,0]}},format:{type:String,default:"yyyy/MM/dd hh:mm:ss"},refreshRate:{type:[Number,String],default:0}},data:function(){return{refreshMark:0}},computed:{dateShow:function(){return this.refreshMark,(0,a.friendlyDate)(this.date,{locale:this.locale,threshold:this.threshold,format:this.format})}},watch:{refreshRate:{handler:function(){this.setAutoRefresh()},immediate:!0}},methods:{refresh:function(){this.refreshMark++},setAutoRefresh:function(){var t=this;clearInterval(this.refreshInterval),this.refreshRate&&(this.refreshInterval=setInterval((function(){t.refresh()}),parseInt(this.refreshRate)))}}};e.default=r},ffdf:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".uni-section[data-v-76375ba1]{position:relative;\ndisplay:flex;\nmargin-top:10px;flex-direction:row;align-items:center;padding:0 10px;height:50px;background-color:#f8f8f8;\n\nfont-weight:400}\n.uni-section__head[data-v-76375ba1]{flex-direction:row;justify-content:center;align-items:center;margin-right:10px}.line[data-v-76375ba1]{height:15px;background-color:silver;border-radius:5px;width:3px}.circle[data-v-76375ba1]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:silver}.uni-section__content[data-v-76375ba1]{\ndisplay:flex;\nflex-direction:column;flex:1;color:#333}.uni-section__content-title[data-v-76375ba1]{font-size:14px;color:#333}.distraction[data-v-76375ba1]{flex-direction:row;align-items:center}.uni-section__content-sub[data-v-76375ba1]{font-size:12px;color:#999}",""]),t.exports=e}}]);