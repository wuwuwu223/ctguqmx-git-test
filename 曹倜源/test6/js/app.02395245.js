(function(t){function e(e){for(var n,l,u=e[0],r=e[1],d=e[2],c=0,m=[];c<u.length;c++)l=u[c],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&m.push(i[l][0]),i[l]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);o&&o(e);while(m.length)m.shift()();return s.push.apply(s,d||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,u=1;u<a.length;u++){var r=a[u];0!==i[r]&&(n=!1)}n&&(s.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},i={app:0},s=[];function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],r=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var o=r;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("el-container",{staticStyle:{display:"block"}},[a("div",{staticClass:"header",staticStyle:{"background-color":"#005A99"}},[a("div",{staticClass:"header-top"},[a("div",{staticClass:"logo"},[a("img",{attrs:{src:"http://it.ctgu.edu.cn/static/this/images/logo.jpg"}})]),a("div",{staticClass:"search-div"},[a("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入内容"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],1)],1)])]),a("el-main",[a("el-menu",{staticClass:"el-menu-demo",staticStyle:{"text-align":"center"},attrs:{mode:"horizontal","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"}},[a("el-submenu",{attrs:{index:"11"}},[a("template",{slot:"title"},[t._v("我的工作台")]),a("el-menu-item",{attrs:{index:"11-1"}},[t._v("选项1")]),a("el-menu-item",{attrs:{index:"12-2"}},[t._v("选项2")]),a("el-menu-item",{attrs:{index:"13-3"}},[t._v("选项3")])],2),a("el-submenu",{attrs:{index:"1"}},[a("template",{slot:"title"},[t._v("我的工作台")]),a("el-menu-item",{attrs:{index:"1-1"}},[t._v("选项1")]),a("el-menu-item",{attrs:{index:"1-2"}},[t._v("选项2")]),a("el-menu-item",{attrs:{index:"1-3"}},[t._v("选项3")])],2),a("el-submenu",{attrs:{index:"2"}},[a("template",{slot:"title"},[t._v("我的工作台")]),a("el-menu-item",{attrs:{index:"2-1"}},[t._v("选项1")]),a("el-menu-item",{attrs:{index:"2-2"}},[t._v("选项2")]),a("el-menu-item",{attrs:{index:"2-3"}},[t._v("选项3")])],2),a("el-submenu",{attrs:{index:"3"}},[a("template",{slot:"title"},[t._v("我的工作台")]),a("el-menu-item",{attrs:{index:"3-1"}},[t._v("选项1")]),a("el-menu-item",{attrs:{index:"3-2"}},[t._v("选项2")]),a("el-menu-item",{attrs:{index:"3-3"}},[t._v("选项3")])],2),a("el-submenu",{attrs:{index:"4"}},[a("template",{slot:"title"},[t._v("我的工作台")]),a("el-menu-item",{attrs:{index:"4-1"}},[t._v("选项1")]),a("el-menu-item",{attrs:{index:"4-2"}},[t._v("选项2")]),a("el-menu-item",{attrs:{index:"4-3"}},[t._v("选项3")])],2),a("el-submenu",{attrs:{index:"5"}},[a("template",{slot:"title"},[t._v("我的工作台")]),a("el-menu-item",{attrs:{index:"5-1"}},[t._v("选项1")]),a("el-menu-item",{attrs:{index:"5-2"}},[t._v("选项2")]),a("el-menu-item",{attrs:{index:"5-3"}},[t._v("选项3")])],2),a("el-submenu",{attrs:{index:"6"}},[a("template",{slot:"title"},[t._v("我的工作台")]),a("el-menu-item",{attrs:{index:"6-1"}},[t._v("选项1")]),a("el-menu-item",{attrs:{index:"6-2"}},[t._v("选项2")]),a("el-menu-item",{attrs:{index:"6-3"}},[t._v("选项3")])],2),a("el-submenu",{attrs:{index:"7"}},[a("template",{slot:"title"},[t._v("我的工作台")]),a("el-menu-item",{attrs:{index:"7-1"}},[t._v("选项1")]),a("el-menu-item",{attrs:{index:"7-2"}},[t._v("选项2")]),a("el-menu-item",{attrs:{index:"7-3"}},[t._v("选项3")])],2),a("el-submenu",{attrs:{index:"8"}},[a("template",{slot:"title"},[t._v("我的工作台")]),a("el-menu-item",{attrs:{index:"8-1"}},[t._v("选项1")]),a("el-menu-item",{attrs:{index:"8-2"}},[t._v("选项2")]),a("el-menu-item",{attrs:{index:"8-3"}},[t._v("选项3")])],2),a("el-submenu",{attrs:{index:"9"}},[a("template",{slot:"title"},[t._v("我的工作台")]),a("el-menu-item",{attrs:{index:"9-1"}},[t._v("选项1")]),a("el-menu-item",{attrs:{index:"9-2"}},[t._v("选项2")]),a("el-menu-item",{attrs:{index:"9-3"}},[t._v("选项3")])],2),a("el-submenu",{attrs:{index:"10"}},[a("template",{slot:"title"},[t._v("我的工作台")]),a("el-menu-item",{attrs:{index:"10-1"}},[t._v("选项1")]),a("el-menu-item",{attrs:{index:"10-2"}},[t._v("选项2")]),a("el-menu-item",{attrs:{index:"10-3"}},[t._v("选项3")])],2)],1),a("div",{staticClass:"container"},[a("div",{staticClass:"carousel slide",attrs:{id:"slidershow","data-ride":"carousel","data-interval":"2000"}},[a("ol",{staticClass:"carousel-indicators"},[a("li",{staticClass:"active",attrs:{"data-target":"#slidershow","data-slide-to":"0"}}),a("li",{attrs:{"data-target":"#slidershow","data-slide-to":"1"}}),a("li",{attrs:{"data-target":"#slidershow","data-slide-to":"2"}})]),a("div",{staticClass:"carousel-inner"},[a("div",{staticClass:"item active"},[a("img",{attrs:{src:"http://it.ctgu.edu.cn/static/this/images/ban1.png"}}),a("div",{staticClass:"carousel-caption"})]),a("div",{staticClass:"item"},[a("img",{attrs:{src:"http://it.ctgu.edu.cn/static/this/images/ban2.png"}}),a("div",{staticClass:"carousel-caption"})]),a("div",{staticClass:"item"},[a("img",{attrs:{src:"http://it.ctgu.edu.cn/static/this/images/ban3.png"}}),a("div",{staticClass:"carousel-caption"})])])])])],1),a("el-footer",[t._v("Footer")])],1)],1)},s=[],l={name:"app",components:{},data:function(){return{input:"",items:[{id:1,src:a("b525")},{id:2,src:a("bcf5")},{id:3,src:a("76a4")}]}}},u=l,r=(a("034f"),a("2877")),d=Object(r["a"])(u,i,s,!1,null,null,null),o=d.exports,c=a("5c96");n["default"].use(c["Button"]),n["default"].use(c["Form"]),n["default"].use(c["FormItem"]),n["default"].use(c["Input"]),n["default"].use(c["Container"]),n["default"].use(c["Header"]),n["default"].use(c["Aside"]),n["default"].use(c["Menu"]),n["default"].use(c["Submenu"]),n["default"].use(c["MenuItem"]),n["default"].use(c["Main"]),n["default"].use(c["Breadcrumb"]),n["default"].use(c["BreadcrumbItem"]),n["default"].use(c["Card"]),n["default"].use(c["Row"]),n["default"].use(c["Col"]),n["default"].use(c["Table"]),n["default"].use(c["TableColumn"]),n["default"].use(c["Switch"]),n["default"].use(c["Tooltip"]),n["default"].use(c["Pagination"]),n["default"].use(c["CarouselItem"]),n["default"].use(c["Calendar"]),n["default"].use(c["Footer"]),new n["default"]({render:function(t){return t(o)}}).$mount("#app")},"76a4":function(t,e,a){t.exports=a.p+"img/ban3.1e70e45a.png"},"85ec":function(t,e,a){},b525:function(t,e,a){t.exports=a.p+"img/ban1.35a4d51b.png"},bcf5:function(t,e,a){t.exports=a.p+"img/ban2.f5aafc6c.png"}});
//# sourceMappingURL=app.02395245.js.map