(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-request-payment-request-payment"],{"0365":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}));var a={pageHead:n("60de").default},r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("page-head",{attrs:{title:e.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap"},[n("v-uni-view",{staticStyle:{background:"#FFF",padding:"50rpx 0"}},[n("v-uni-view",{staticClass:"uni-hello-text uni-center"},[n("v-uni-text",[e._v("支付金额")])],1),n("v-uni-view",{staticClass:"uni-h1 uni-center uni-common-mt"},[n("v-uni-text",{staticClass:"rmbLogo"},[e._v("￥")]),n("v-uni-input",{staticClass:"price",attrs:{type:"digit",value:e.price,maxlength:"4"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.priceChange.apply(void 0,arguments)}}})],1)],1),n("v-uni-view",{staticClass:"uni-btn-v uni-common-mt"})],1)],1)},i=[]},"2a1a":function(e,t,n){"use strict";(function(e){var a=n("4ea4");n("a9e3"),n("d3b7"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("5530"));n("96cf");var i=a(n("1da1")),o={data:function(){return{title:"request-payment",loading:!1,price:1,providerList:[]}},onLoad:function(){},methods:{loginMpWeixin:function(){return new Promise((function(e,t){uni.login({provider:"weixin",success:function(n){uni.request({url:"https://97fca9f2-41f6-449f-a35e-3f135d4c3875.bspapp.com/http/user-center",method:"POST",data:{action:"loginByWeixin",params:{code:n.code,platform:"mp-weixin"}},success:function(n){0===n.data.code?(uni.setStorageSync("openid",n.data.openid),e(n.data.openid)):t(new Error("获取openid失败：",n.result.msg))},fail:function(e){t(new Error("获取openid失败："+e))}})},fail:function(e){t(e)}})}))},weixinPay:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function n(){var a,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(a=uni.getStorageSync("openid"),e("log","发起支付"," at pages/API/request-payment/request-payment.vue:107"),t.loading=!0,a){n.next=17;break}return n.prev=4,n.next=7,t.loginMpWeixin();case 7:a=n.sent,n.next=13;break;case 10:n.prev=10,n.t0=n["catch"](4),e("error",n.t0," at pages/API/request-payment/request-payment.vue:113");case 13:if(a){n.next=17;break}return uni.showModal({content:"获取openid失败",showCancel:!1}),t.loading=!1,n.abrupt("return");case 17:return t.openid=a,n.next=20,t.getOrderInfo("wxpay");case 20:if(i=n.sent,i){n.next=24;break}return uni.showModal({content:"获取支付信息失败",showCancel:!1}),n.abrupt("return");case 24:uni.requestPayment((0,r.default)((0,r.default)({},i),{},{success:function(e){uni.showToast({title:"感谢您的赞助!"})},fail:function(e){uni.showModal({content:"支付失败,原因为: "+e.errMsg,showCancel:!1})},complete:function(){t.loading=!1}}));case 25:case"end":return n.stop()}}),n,null,[[4,10]])})))()},requestPayment:function(t,n){var a=this;return(0,i.default)(regeneratorRuntime.mark((function r(){var i,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a.providerList[n].loading=!0,i=t.id,r.next=4,a.getOrderInfo(i);case 4:if(o=r.sent,o){r.next=8;break}return uni.showModal({content:"获取支付信息失败",showCancel:!1}),r.abrupt("return");case 8:e("log","--------orderInfo--------"," at pages/API/request-payment/request-payment.vue:164"),e("log",o," at pages/API/request-payment/request-payment.vue:165"),uni.requestPayment({provider:i,orderInfo:o,success:function(t){e("log","success",t," at pages/API/request-payment/request-payment.vue:170"),uni.showToast({title:"感谢您的赞助!"})},fail:function(t){e("log","fail",t," at pages/API/request-payment/request-payment.vue:176"),uni.showModal({content:"支付失败,原因为: "+t.errMsg,showCancel:!1})},complete:function(){a.providerList[n].loading=!1}});case 11:case"end":return r.stop()}}),r)})))()},getOrderInfo:function(e){var t=this;return new Promise((function(n,a){t.price||a(new Error("请输入金额")),uni.request({method:"POST",url:"https://97fca9f2-41f6-449f-a35e-3f135d4c3875.bspapp.com/http/pay",data:{provider:e,openid:t.openid,totalFee:100*Number(t.price)},success:function(e){0===e.data.code?n(e.data.orderInfo):a(new Error("获取支付信息失败"+e.data.msg))},fail:function(e){a(new Error("请求支付接口失败"+e))}})}))},priceChange:function(t){e("log",t.detail.value," at pages/API/request-payment/request-payment.vue:220"),this.price=t.detail.value}}};t.default=o}).call(this,n("0de9")["log"])},"48c7":function(e,t,n){var a=n("4bcc");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=n("4f06").default;r("6be755be",a,!0,{sourceMap:!1,shadowMode:!1})},"4bcc":function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,".rmbLogo[data-v-216cd9cc]{font-size:%?40?%}uni-button[data-v-216cd9cc]{background-color:#007aff;color:#fff}.uni-h1.uni-center[data-v-216cd9cc]{display:flex;flex-direction:row;justify-content:center;align-items:flex-end}.price[data-v-216cd9cc]{border-bottom:1px solid #eee;width:%?200?%;height:%?80?%;padding-bottom:%?4?%}.ipaPayBtn[data-v-216cd9cc]{margin-top:%?30?%}",""]),e.exports=t},"7fb5":function(e,t,n){"use strict";var a=n("48c7"),r=n.n(a);r.a},"9ef9":function(e,t,n){"use strict";n.r(t);var a=n("2a1a"),r=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=r.a},dc09:function(e,t,n){"use strict";n.r(t);var a=n("0365"),r=n("9ef9");for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);n("7fb5");var o,u=n("f0c5"),c=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,"216cd9cc",null,!1,a["a"],o);t["default"]=c.exports}}]);