(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-canvas-canvas"],{"04cb":function(t,a,i){"use strict";i.r(a);var n=i("b4c9"),s=i("47a7");for(var e in s)"default"!==e&&function(t){i.d(a,t,(function(){return s[t]}))}(e);var c=i("b699");for(var e in c)"default"!==e&&function(t){i.d(a,t,(function(){return c[t]}))}(e);i("c14b");var r=i("f0c5");s["default"].__module="animate";var u=Object(r["a"])(c["default"],n["b"],n["c"],!1,null,"0141d872",null,!1,n["a"],s["default"]);a["default"]=u.exports},"0a6a":function(t,a,i){"use strict";i("ac1f"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{title:"canvas",canvasWidth:0,startStatus:!1,ballList:[]}},onReady:function(){var t=this;this.$nextTick((function(){uni.createSelectorQuery().select(".canvas").boundingClientRect((function(a){t.canvasWidth=a.width,t.startStatus=!0})).exec()}))}};a.default=n},"47a7":function(t,a,i){"use strict";i.r(a);var n=i("b40c"),s=i.n(n);for(var e in n)"default"!==e&&function(t){i.d(a,t,(function(){return n[t]}))}(e);a["default"]=s.a},"47e5":function(t,a,i){var n=i("24fb");a=n(!1),a.push([t.i,".page-body-wrapper[data-v-0141d872]{text-align:center}.canvas[data-v-0141d872]{width:%?610?%;height:%?610?%;margin:auto;background-color:#fff}",""]),t.exports=a},8550:function(t,a,i){var n=i("47e5");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=i("4f06").default;s("454cbca9",n,!0,{sourceMap:!1,shadowMode:!1})},b40c:function(t,a,i){"use strict";function n(t){var a=t.x,i=t.y,n=t.vx,s=t.vy,e=t.canvasWidth,c=t.canvasHeight,r=t.ctx;this.canvasWidth=e,this.canvasHeight=c,this.ctx=r,this.x=a,this.y=i,this.vx=n,this.vy=s,this.radius=5}function s(t,a){return Math.pow(Math.pow(t,2)+Math.pow(a,2),.5)}i("cb29"),i("4160"),i("159b"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,n.prototype.draw=function(){this.ctx.beginPath(),this.ctx.fillStyle="#007AFF",this.ctx.arc(this.x,this.y,this.radius,0,2*Math.PI),this.ctx.closePath(),this.ctx.fill()},n.prototype.move=function(){this.x+=this.vx,this.y+=this.vy,this.x<this.radius?this.vx=Math.abs(this.vx):(this.x>this.canvasWidth-this.radius&&(this.vx=-Math.abs(this.vx)),this.y<this.radius?this.vy=Math.abs(this.vy):this.y>this.canvasWidth-this.radius&&(this.vy=-Math.abs(this.vy)))};var e={methods:{start:function(t,a,i,e){for(var c=e.getDataset().width,r=e.getDataset().height,u=document.querySelectorAll(".canvas>canvas")[0],o=u.getContext("2d"),h=3,d=[],v=3,f=20,l=0;l<v;l++)for(var p=s(c/2,r/2)/v*l,b=0;b<f;b++){var x=2*b*Math.PI/f,y=Math.sin(x),g=Math.cos(x),w=p*g+c/2,M=p*y+r/2,m=h*g,W=h*y;d.push(new n({x:w,y:M,vx:m,vy:W,canvasWidth:c,canvasHeight:r,ctx:o,radius:5}))}function _(t){o.clearRect(0,0,u.width,u.height),t.forEach((function(t){t.move(),t.draw()})),requestAnimationFrame((function(){_(t)}))}_(d)}}};a.default=e},b4c9:function(t,a,i){"use strict";i.d(a,"b",(function(){return s})),i.d(a,"c",(function(){return e})),i.d(a,"a",(function(){return n}));var n={pageHead:i("60de").default},s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[i("page-head",{attrs:{title:t.title}}),i("v-uni-view",{staticClass:"page-body"},[i("v-uni-view",{staticClass:"page-body-wrapper"},[i("v-uni-canvas",{wxsProps:{"change:start":"startStatus"},staticClass:"canvas",attrs:{"canvas-id":"canvas",start:t.startStatus,"change:start":t.animate.start,"data-width":t.canvasWidth,"data-height":t.canvasWidth}})],1)],1)],1)},e=[]},b699:function(t,a,i){"use strict";i.r(a);var n=i("0a6a"),s=i.n(n);for(var e in n)"default"!==e&&function(t){i.d(a,t,(function(){return n[t]}))}(e);a["default"]=s.a},c14b:function(t,a,i){"use strict";var n=i("8550"),s=i.n(n);s.a},cb29:function(t,a,i){var n=i("23e7"),s=i("81d5"),e=i("44d2");n({target:"Array",proto:!0},{fill:s}),e("fill")}}]);