webpackJsonp([7],{"6HrR":function(t,a){},Mv65:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("el-page-header",{attrs:{content:"查看详情"},on:{back:t.goBack}}),t._v(" "),e("el-divider"),t._v(" "),e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:24}},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[t._v(t._s(t.data_name))])]),t._v(" "),e("div",{staticClass:"text item"},[e("el-row",{attrs:{gutter:20}},[e("el-col",{staticClass:"text-right",attrs:{span:6}},[t._v("描述：")]),t._v(" "),e("el-col",{attrs:{span:18}},[t._v(t._s(t.detail_json.data_description))])],1)],1),t._v(" "),e("div",{staticClass:"text item"},[e("el-row",{attrs:{gutter:20}},[e("el-col",{staticClass:"text-right",attrs:{span:6}},[t._v("存放目录：")]),t._v(" "),e("el-col",{attrs:{span:18}},[t._v(t._s(t.detail_json.data_path||"--"))])],1)],1),t._v(" "),e("div",{staticClass:"text item"},[e("el-row",{attrs:{gutter:20}},[e("el-col",{staticClass:"text-right",attrs:{span:6}},[t._v("生成算子：")]),t._v(" "),e("el-col",{attrs:{span:18}},[t._v(t._s(t.detail_json.generating_operator))])],1)],1),t._v(" "),e("div",{staticClass:"text item"},[e("el-row",{attrs:{gutter:20}},[e("el-col",{staticClass:"text-right",attrs:{span:6}},[t._v("生成算子配置项：")]),t._v(" "),e("el-col",{attrs:{span:18}},t._l(t.detail_json.generating_parameters,function(a,s){return e("el-row",{key:s,staticClass:"sub-item",attrs:{gutter:20}},[e("el-col",{staticClass:"text-right",attrs:{span:6}},[t._v(t._s(s)+"：")]),t._v(" "),e("el-col",{attrs:{span:18}},[t._v(t._s(a))])],1)}),1)],1)],1)])],1)],1)],1)},staticRenderFns:[]};var i=e("VU/8")({name:"detail",data:function(){return{data_name:"",detail_json:{}}},watch:{data_name:{deep:!0,handler:function(t,a){}}},methods:{getDataDetail:function(){var t=this;this.$http.post(this.URL.base_data_url+"/get_simulation_detail",{data_name:this.data_name},{emulateJSON:!0}).then(function(a){t.detail_json=a.body},function(t){this.detail_json={}})},goBack:function(){this.$router.go(-1)}},created:function(){this.data_name=this.$route.params.name},activated:function(){this.data_name=this.$route.params.name,this.getDataDetail()},deactivated:function(){this.data_name="",this.detail_json={}}},s,!1,function(t){e("6HrR")},"data-v-5f7783cd",null);a.default=i.exports}});