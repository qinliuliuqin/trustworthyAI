webpackJsonp([11],{"+vK+":function(t,e,n){t.exports=n.p+"static/img/main.f9aa413.png"},0:function(t,e){},"6z1m":function(t,e){},Ebrf:function(t,e){},"Iwa+":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),o=n("8+8L"),i=n("zL8q"),r=n.n(i),l=(n("tvR6"),{name:"MainNav",data:function(){return{activeIndex:""}},methods:{handleSelect:function(t,e){console.log(this.$route),console.log(this.$route.path.split(/^\//)),console.log(t),console.log(e),console.log(this.activeIndex)}},watch:{$route:{handler:function(t,e){this.activeIndex=this.$route.path.split(/^\//)[1]},deep:!0}},created:function(){this.activeIndex=this.$route.path.split(/^\//)[1]}}),c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,mode:"horizontal","active-text-color":"#1989fa",router:!0},on:{select:t.handleSelect}},[n("el-menu-item",{attrs:{index:"home",route:"/home"}},[t._v("首页")]),t._v(" "),n("el-menu-item",{attrs:{index:"dataset",route:"/dataset"}},[t._v("数据")]),t._v(" "),n("el-menu-item",{attrs:{index:"algorithmlist",route:"/algorithmlist"}},[t._v("算法")]),t._v(" "),n("el-menu-item",{attrs:{index:"3",route:"/3"}},[t._v("任务")])],1)},staticRenderFns:[]};var u={name:"App",data:function(){return{msg:"PCastle"}},created:function(){},components:{MainNav:n("VU/8")(l,c,!1,function(t){n("Ebrf")},"data-v-b938ea68",null).exports},watch:{$route:function(t,e){}}},s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("el-container",[e("el-header",[e("MainNav")],1),this._v(" "),e("el-main",[e("keep-alive",[e("router-view")],1)],1)],1)],1)},staticRenderFns:[]};var m=n("VU/8")(u,s,!1,function(t){n("6z1m"),n("mQr+")},"data-v-69a8a409",null).exports,p=n("/ocq"),d={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main-bg"},[e("div",{staticClass:"banner-text"},[e("h1",[this._v("PCASTLE")]),this._v(" "),e("p",[this._v("An open source Pipeline for Causal Structure Learning")])]),this._v(" "),e("div",[e("img",{attrs:{src:n("+vK+"),alt:""}})])])}]};var h,f=n("VU/8")({name:"PCastle",data:function(){return{}},created:function(){},activated:function(){}},d,!1,function(t){n("Iwa+")},"data-v-f5532a2a",null).exports;a.default.use(p.a);var v=function(){h=a.default.prototype.$loading({fullscreen:!0})},_=function(t){return function(e){h.close(),t(e)}},b=function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"nI0X"))},g=function(){return n.e(7).then(n.bind(null,"Mv65"))},x=p.a.prototype.push;p.a.prototype.push=function(t,e,n){return x.call(this,t).catch(function(t){return t})};var P=new p.a({routes:[{path:"/home",name:"PCastle",component:f},{path:"",redirect:"/home"},{path:"/dataset",name:"数据",component:b,meta:{}},{path:"/dataset/realWorldData/:name",name:"真实数据",component:function(){return n.e(3).then(n.bind(null,"mRzr"))},meta:{pathText:["数据","真实数据"],parentPath:"/dataset"}},{path:"/dataset/analogData/:name",name:"模拟数据",component:g,meta:{pathText:["数据","模拟数据"],parentPath:"/dataset"}},{path:"/datasetlist",name:"数据",component:b},{path:"/datasetdetail/:name",name:"数据详情",component:g},{path:"/algorithmlist",name:"算法",component:function(){return n.e(6).then(n.bind(null,"wbxi"))}},{path:"/readme/:name",name:"Readme",component:function(){return n.e(4).then(n.bind(null,"yMxd"))}},{path:"/3",name:"任务",component:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"byV4"))}},{path:"/detail",name:"任务详情",component:function(t){v(),n.e(1).then(function(){var e=[n("ZXXG")];_(t).apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/detail2",name:"任务详情",component:function(t){v(),Promise.all([n.e(0),n.e(2)]).then(function(){var e=[n("JNPR")];_(t).apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/rating",name:"评价",component:function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"YEa3"))}},{path:"*",name:"coming soon...",component:{template:"<div><h2>coming soon...</h2></div>"}}]}),$={baseurl:"/task",base_data_url:"/data"};a.default.use(o.a),a.default.use(r.a),a.default.prototype.URL=$,a.default.config.productionTip=!1,new a.default({el:"#app",router:P,components:{App:m},template:"<App/>"})},"mQr+":function(t,e){},tvR6:function(t,e){}},["NHnr"]);