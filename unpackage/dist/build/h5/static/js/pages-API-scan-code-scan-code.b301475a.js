(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-scan-code-scan-code"],{"3a0d":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}));var i={pageHead:n("60de").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("page-head",{attrs:{title:t.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[n("v-uni-view",{staticClass:"uni-title"},[t._v("扫码结果：")]),t.result?n("v-uni-view",{staticClass:"uni-list"},[n("v-uni-view",{staticClass:"uni-cell"},[n("v-uni-view",{staticClass:"scan-result"},[t._v(t._s(t.result))])],1)],1):t._e(),n("v-uni-view",{staticClass:"uni-btn-v"},[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.scan.apply(void 0,arguments)}}},[t._v("扫一扫")])],1)],1)],1)},s=[]},"3f16":function(t,e,n){"use strict";var i=n("5758"),o=n.n(i);o.a},5758:function(t,e,n){var i=n("7142");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("90d1a8ec",i,!0,{sourceMap:!1,shadowMode:!1})},7142:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".scan-result[data-v-693a4964]{min-height:%?50?%;line-height:%?50?%}",""]),t.exports=e},8857:function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var o=i(n("1da1")),s=(i(n("f4b0")),{data:function(){return{title:"scanCode",result:""}},methods:{scan:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:uni.scanCode({success:function(e){t.result=e.result},fail:function(t){}});case 1:case"end":return e.stop()}}),e)})))()}}});e.default=s},c056:function(t,e,n){"use strict";n.r(e);var i=n("8857"),o=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=o.a},d97a:function(t,e,n){"use strict";n.r(e);var i=n("3a0d"),o=n("c056");for(var s in o)"default"!==s&&function(t){n.d(e,t,(function(){return o[t]}))}(s);n("3f16");var r,a=n("f0c5"),u=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,"693a4964",null,!1,i["a"],r);e["default"]=u.exports},f4b0:function(t,e,n){"use strict";(function(t){var i;function o(){var t=0,e=plus.ios.import("PHPhotoLibrary"),n=e.authorizationStatus();return t=0===n?null:3==n?1:0,plus.ios.deleteObject(e),t}function s(){var t=0,e=plus.ios.import("AVCaptureDevice"),n=e.authorizationStatusForMediaType("vide");return t=0===n?null:3==n?1:0,plus.ios.deleteObject(e),t}function r(){var t=0,e=plus.ios.import("CLLocationManager"),n=e.locationServicesEnabled(),i=e.authorizationStatus();return t=n?0===i?null:3===i||4===i?1:0:2,plus.ios.deleteObject(e),t}function a(){var e=0,n=plus.ios.import("UIApplication"),i=n.sharedApplication(),o=0;if(i.currentUserNotificationSettings){var s=i.currentUserNotificationSettings();o=s.plusGetAttribute("types"),0==o?(e=0,t("log","推送权限没有开启"," at common/permission.js:63")):(e=1,t("log","已经开启推送功能!"," at common/permission.js:66")),plus.ios.deleteObject(s)}else o=i.enabledRemoteNotificationTypes(),0==o?(e=3,t("log","推送权限没有开启!"," at common/permission.js:73")):(e=4,t("log","已经开启推送功能!"," at common/permission.js:76"));return plus.ios.deleteObject(i),plus.ios.deleteObject(n),e}function u(){var t=0,e=plus.ios.import("CNContactStore"),n=e.authorizationStatusForEntityType(0);return t=0===n?null:3==n?1:0,plus.ios.deleteObject(e),t}function c(){var e=null,n=plus.ios.import("AVAudioSession"),i=n.sharedInstance(),o=i.recordPermission();return t("log","permissionStatus:"+o," at common/permission.js:104"),e=1970168948===o?null:1735552628===o?1:0,plus.ios.deleteObject(n),e}function l(){var e=null,n=plus.ios.import("EKEventStore"),i=n.authorizationStatusForEntityType(0);return 3==i?(e=1,t("log","日历权限已经开启"," at common/permission.js:122")):t("log","日历权限没有开启"," at common/permission.js:124"),plus.ios.deleteObject(n),e}function p(){var e=null,n=plus.ios.import("EKEventStore"),i=n.authorizationStatusForEntityType(1);return 3==i?(e=1,t("log","备忘录权限已经开启"," at common/permission.js:136")):t("log","备忘录权限没有开启"," at common/permission.js:138"),plus.ios.deleteObject(n),e}function d(t){return new Promise((function(e,n){switch(t){case"push":e(a());break;case"location":e(r());break;case"record":e(c());break;case"camera":e(s());break;case"album":e(o());break;case"contact":e(u());break;case"calendar":e(l());break;case"memo":e(p());break;default:e(0);break}}))}function m(e){return new Promise((function(n,i){plus.android.requestPermissions([e],(function(e){for(var i=0,o=0;o<e.granted.length;o++){var s=e.granted[o];t("log","已获取的权限："+s," at common/permission.js:187"),i=1}for(o=0;o<e.deniedPresent.length;o++){var r=e.deniedPresent[o];t("log","拒绝本次申请的权限："+r," at common/permission.js:192"),i=0}for(o=0;o<e.deniedAlways.length;o++){var a=e.deniedAlways[o];t("log","永久拒绝申请的权限："+a," at common/permission.js:197"),i=-1}n(i)}),(function(e){t("log","result error: "+e.message," at common/permission.js:203"),n({code:e.code,message:e.message})}))}))}function f(){if(v.isIOS){var t=plus.ios.import("UIApplication"),e=t.sharedApplication(),n=plus.ios.import("NSURL"),i=n.URLWithString("app-settings:");e.openURL(i),plus.ios.deleteObject(i),plus.ios.deleteObject(n),plus.ios.deleteObject(e)}else{var o=plus.android.importClass("android.content.Intent"),s=plus.android.importClass("android.provider.Settings"),r=plus.android.importClass("android.net.Uri"),a=plus.android.runtimeMainActivity(),u=new o;u.setAction(s.ACTION_APPLICATION_DETAILS_SETTINGS);var c=r.fromParts("package",a.getPackageName(),null);u.setData(c),a.startActivity(u)}}n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var v={get isIOS(){return"boolean"===typeof i?i:i="ios"===uni.getSystemInfoSync().platform},requestIOS:d,requestAndroid:m,gotoAppSetting:f},g=v;e.default=g}).call(this,n("0de9")["log"])}}]);