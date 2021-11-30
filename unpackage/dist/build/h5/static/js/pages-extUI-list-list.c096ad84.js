(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-list-list"],{"3dba":function(t,n,i){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={components:{},data:function(){return{extraIcon:{color:"#4cd964",size:"22",type:"gear-filled"}}},methods:{onClick:function(n){t("log","执行click事件",n.data," at pages/extUI/list/list.vue:103"),uni.showToast({title:"点击反馈"})},switchChange:function(t){uni.showToast({title:"change:"+t.value,icon:"none"})}}};n.default=i}).call(this,i("0de9")["log"])},"3dfa":function(t,n,i){"use strict";i.d(n,"b",(function(){return a})),i.d(n,"c",(function(){return o})),i.d(n,"a",(function(){return e}));var e={uniSection:i("8a0c").default,uniList:i("602f").default,uniListItem:i("88af").default,uniBadge:i("9c49").default},a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",[i("v-uni-text",{staticClass:"example-info"},[t._v("列表组件可以在其中使用图标、略缩图或放置任何你想放的元素，使用场景如：导航菜单、列表、设置中心排版等")]),i("uni-section",{attrs:{title:"基础用法",type:"line"}}),i("uni-list",[i("uni-list-item",{attrs:{title:"列表文字",rightText:"右侧文字"}}),i("uni-list-item",{attrs:{title:"列表文字",note:"列表描述信息",rightText:"右侧文字"}})],1),i("uni-section",{attrs:{title:"禁用列表",type:"line"}}),i("uni-list",[i("uni-list-item",{attrs:{disabled:!0,title:"列表禁用状态",rightText:"右侧文字"}})],1),i("uni-section",{attrs:{title:"展示箭头",type:"line"}}),i("uni-list",[i("uni-list-item",{attrs:{showArrow:!0,title:"列表文字"}}),i("uni-list-item",{attrs:{showArrow:!0,title:"列表文字",rightText:"右侧文字"}})],1),i("uni-section",{attrs:{title:"点击反馈",type:"line"}}),i("uni-list",[i("uni-list-item",{attrs:{title:"弹窗提示",clickable:!0},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onClick.apply(void 0,arguments)}}}),i("uni-list-item",{attrs:{title:"页面跳转",to:"./chat"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onClick.apply(void 0,arguments)}}}),i("uni-list-item",{attrs:{title:"关闭当前页面打开新页面",link:"redirectTo",to:"./chat"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onClick.apply(void 0,arguments)}}}),i("uni-list-item",{attrs:{title:"打开错误页面(查看控制台)",link:"redirectTo",to:"./chats"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onClick.apply(void 0,arguments)}}})],1),i("uni-section",{attrs:{title:"不显示分割线",type:"line"}}),i("uni-list",{attrs:{border:!1}},[i("uni-list-item",{attrs:{title:"列表文字"}}),i("uni-list-item",{attrs:{border:!1,title:"列表文字",note:"列表描述信息",rightText:"右侧文字"}}),i("uni-list-item",{attrs:{border:!0,title:"列表文字",note:"列表描述信息",rightText:"右侧文字"}})],1),i("uni-section",{attrs:{title:"文字溢出隐藏",type:"line"}}),i("uni-list",[i("uni-list-item",{attrs:{ellipsis:1,title:"列表 title 超长文字显示一行,以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字",showArrow:!0,rightText:"右侧文字"}}),i("uni-list-item",{attrs:{ellipsis:2,title:"列表 title 超长文字显示二行,以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字",showArrow:!0,rightText:"右侧文字"}}),i("uni-list-item",{attrs:{title:"列表 title 全部显示,以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字",showArrow:!0,rightText:"右侧文字"}})],1),i("uni-section",{attrs:{title:"显示图标或图片",type:"line"}}),i("uni-list",[i("uni-list-item",{attrs:{title:"列表左侧带略缩图",note:"列表描述信息",showArrow:!0,thumb:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png","thumb-size":"sm",rightText:"小图"}}),i("uni-list-item",{attrs:{title:"列表左侧带略缩图",note:"列表描述信息",showArrow:!0,thumb:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png","thumb-size":"base",rightText:"默认"}}),i("uni-list-item",{attrs:{title:"列表左侧带略缩图",note:"列表描述信息",showArrow:!0,thumb:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png","thumb-size":"lg",rightText:"大图"}}),i("uni-list-item",{attrs:{"show-extra-icon":!0,showArrow:!0,"extra-icon":t.extraIcon,title:"列表左侧带扩展图标"}})],1),i("uni-section",{attrs:{title:"右侧显示 switch/badge",type:"line"}}),i("uni-list",[i("uni-list-item",{attrs:{"show-extra-icon":!0,"extra-icon":t.extraIcon,"show-badge":!0,"badge-text":"99",showArrow:!0,title:"禁用状态"},on:{switchChange:function(n){arguments[0]=n=t.$handleEvent(n),t.switchChange.apply(void 0,arguments)}}}),i("uni-list-item",{attrs:{"show-extra-icon":!0,"extra-icon":t.extraIcon,"show-switch":!0,title:"列表右侧带 switch"},on:{switchChange:function(n){arguments[0]=n=t.$handleEvent(n),t.switchChange.apply(void 0,arguments)}}}),i("uni-list-item",{attrs:{disabled:!0,"show-extra-icon":!0,"extra-icon":t.extraIcon,"show-switch":!0,"switch-checked":!0,title:"禁用状态"},on:{switchChange:function(n){arguments[0]=n=t.$handleEvent(n),t.switchChange.apply(void 0,arguments)}}})],1),i("uni-section",{attrs:{title:"使用插槽",type:"line"}}),i("uni-list",[i("uni-list-item",{scopedSlots:t._u([{key:"body",fn:function(){return[i("v-uni-view",{staticClass:"slot-box"},[i("v-uni-text",{staticClass:"slot-text"},[t._v("默认插槽")]),i("uni-badge",{attrs:{text:"2",type:"primary"}})],1)]},proxy:!0}])}),i("uni-list-item",{attrs:{title:"自定义右侧插槽",note:"列表描述信息",link:!0},scopedSlots:t._u([{key:"header",fn:function(){return[i("v-uni-image",{staticClass:"slot-image",attrs:{src:"/static/logo.png",mode:"widthFix"}})]},proxy:!0}])}),i("uni-list-item",{scopedSlots:t._u([{key:"header",fn:function(){return[i("v-uni-view",{staticClass:"slot-box"},[i("v-uni-image",{staticClass:"slot-image",attrs:{src:"/static/logo.png",mode:"widthFix"}})],1)]},proxy:!0},{key:"body",fn:function(){return[i("v-uni-text",{staticClass:"slot-box slot-text"},[t._v("自定义左侧插槽")])]},proxy:!0},{key:"footer",fn:function(){return[i("v-uni-image",{staticClass:"slot-image",attrs:{src:"/static/logo.png",mode:"widthFix"}})]},proxy:!0}])})],1),i("uni-section",{attrs:{title:"列表扩展",type:"line"}}),i("uni-list",[i("uni-list-item",{attrs:{title:"聊天列表",link:!0,to:"./chat"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onClick(n,1)}}})],1)],1)},o=[]},4435:function(t,n,i){"use strict";i.r(n);var e=i("3dfa"),a=i("de10");for(var o in a)"default"!==o&&function(t){i.d(n,t,(function(){return a[t]}))}(o);i("b876");var s,l=i("f0c5"),r=Object(l["a"])(a["default"],e["b"],e["c"],!1,null,"4a916b82",null,!1,e["a"],s);n["default"]=r.exports},"53ba":function(t,n,i){var e=i("62b3");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=i("4f06").default;a("6e4e7e2e",e,!0,{sourceMap:!1,shadowMode:!1})},"62b3":function(t,n,i){var e=i("24fb");n=e(!1),n.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 头条小程序组件内不能引入字体 */\nuni-page-body[data-v-4a916b82]{display:flex;flex-direction:column;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}uni-view[data-v-4a916b82]{font-size:14px;line-height:inherit}.example[data-v-4a916b82]{padding:0 15px 15px}.example-info[data-v-4a916b82]{padding:15px;color:#3b4144;background:#fff}.example-body[data-v-4a916b82]{\ndisplay:flex;\nflex-direction:row;flex-wrap:wrap;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n.example[data-v-4a916b82]{padding:0 15px}.example-info[data-v-4a916b82]{\ndisplay:block;\npadding:15px;color:#3b4144;background-color:#fff;font-size:14px;line-height:20px}.example-info-text[data-v-4a916b82]{font-size:14px;line-height:20px;color:#3b4144}.example-body[data-v-4a916b82]{flex-direction:column;padding:15px;background-color:#fff}.word-btn-white[data-v-4a916b82]{font-size:18px;color:#fff}.word-btn[data-v-4a916b82]{\ndisplay:flex;\nflex-direction:row;align-items:center;justify-content:center;border-radius:6px;height:48px;margin:15px;background-color:#007aff}.word-btn--hover[data-v-4a916b82]{background-color:#4ca2ff}.slot-box[data-v-4a916b82]{\ndisplay:flex;\nflex-direction:row;align-items:center}.slot-image[data-v-4a916b82]{\ndisplay:block;\nmargin-right:10px;width:30px;height:30px}.slot-text[data-v-4a916b82]{flex:1;font-size:14px;color:#4cd964;margin-right:10px}body.?%PAGE?%[data-v-4a916b82]{background-color:#efeff4}",""]),t.exports=n},b876:function(t,n,i){"use strict";var e=i("53ba"),a=i.n(e);a.a},de10:function(t,n,i){"use strict";i.r(n);var e=i("3dba"),a=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(n,t,(function(){return e[t]}))}(o);n["default"]=a.a}}]);