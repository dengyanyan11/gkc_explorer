webpackJsonp([12],{"1bkd":function(t,a){},kBi2:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=s("TXDt"),e=s("F9nR"),l=s("0rWx"),o=s("wuJz"),n=s.n(o),c=s("MJLE"),r=s.n(c),_={components:{Header:i.a,Footer:e.a,pageSize:l.a},data:function(){return{transData:[],blockData:[],height:"",hash:"",previous:"",next:"",blockinfo:!1,maxHeight:""}},created:function(){this.height=this.$route.query.height,this.hash=this.$route.query.hash},watch:{$route:function(){this.height=this.$route.query.height,this.hash=this.$route.query.hash,this.hash?this.getBlockInfoByHash(this.hash):this.getBlockInfoByHeight(this.height)}},computed:{},mounted:function(){this.getMaxHeight(),""===this.previous&&(this.previous=0),""===this.next&&(this.next=this.maxHeight),""===this.maxHeight&&(this.maxHeight=0),this.hash?this.getBlockInfoByHash(this.hash):this.getBlockInfoByHeight(this.height)},methods:{getBlockInfoByHeight:function(t){var a=this;t=parseInt(t),this.getMaxHeight(),this.$http.post("api/block/info",{height:t}).then(function(t){200===t.data.code?(a.blockData=t.data.data.block,a.previous=a.max(parseInt(t.data.data.block.height)-1,0),a.next=a.min(parseInt(t.data.data.block.height)+1,parseInt(a.maxHeight)),a.transData=t.data.data.list,setTimeout(function(){$(".qrdata").html("")},500)):(a.previous=0,a.next=a.maxHeight)})},getBlockInfoByHash:function(t){var a=this;this.$http.post("api/block/hash",{hash:t}).then(function(t){200===t.data.code&&(a.blockData=t.data.data.block,a.previous=a.max(parseInt(t.data.data.block.height)-1,0),a.next=a.min(parseInt(t.data.data.block.height)+1,parseInt(a.maxHeight)),a.transData=t.data.data.list)})},getMaxHeight:function(){var t=this;this.$http.get("api/block/height").then(function(a){200===a.data.code&&(t.maxHeight=a.data.data.height)})},handelReload:function(t){this.$router.push({path:"/mblock",query:{height:t}}),this.height=t,this.getBlockInfoByHeight(this.height)},max:function(t,a){return t>a?t:a},min:function(t,a){return t<a?t:a},handleHidden:function(){this.blockinfo?this.blockinfo=!1:this.blockinfo=!0},qrcode:function(t,a,s,i){new r.a(s,{text:i,width:t,height:a,colorDark:"#333333",colorLight:"#ffffff",correctLevel:r.a.CorrectLevel.L})},filterDate:function(t,a){if(!t)return"";t>0&&(t*=1e3);var s=a||"YYYY-MM-DD HH:mm:ss Z";return n.a.format(t,s)},isGoto:function(t){return 0===t.indexOf("G")&&34===t.length}}},v={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"mobile-container"},[i("Header"),t._v(" "),i("div",{staticClass:"m-content"},[i("div",{staticClass:"m-pos-bg"},[i("img",{staticClass:"bg-img",attrs:{src:s("f35k"),alt:""}}),t._v(" "),i("div",{staticClass:"m-pos-con"},[i("div",{staticClass:"pos-con-img"},[i("img",{attrs:{src:s("ytV7"),alt:""}}),t._v(t._s(t.$t("lang.block_title_block"))+" "+t._s(t.blockData.height)+" ")]),t._v(" "),i("div",{staticClass:"m-nodeid"},[t._v(t._s(t.blockData.hash))])])]),t._v(" "),i("div",{staticClass:"m-btn-wrap"},[i("div",{staticClass:"prev-btn m-btn",on:{click:function(a){return t.handelReload(t.previous)}}},[t._v("<<"+t._s(t.$t("lang.block_page_pre")))]),t._v(" "),i("div",{staticClass:"next-btn m-btn",on:{click:function(a){return t.handelReload(t.next)}}},[t._v(t._s(t.$t("lang.block_page_next"))+">>")])]),t._v(" "),i("div",{staticClass:"m-con"},[i("div",{staticClass:"m-head"},[i("div",{staticClass:"m-item"},[i("div",{staticClass:"item-lebel"},[t._v(t._s(t.filterDate(t.blockData.timestamp)))]),t._v(" "),i("p",[t._v(t._s(t.$t("lang.block_detail1")))])]),t._v(" "),i("div",{staticClass:"m-item"},[i("div",{staticClass:"item-lebel"},[t._v(" "+t._s(t.blockData.value_out)+" GKC")]),t._v(" "),i("p",[t._v(t._s(t.$t("lang.block_detail2")))])]),t._v(" "),i("div",{staticClass:"m-item"},[i("div",{staticClass:"item-lebel"},[t._v(" "+t._s(t.blockData.fees)+" GKC")]),t._v(" "),i("p",[t._v(t._s(t.$t("lang.block_detail3")))])])]),t._v(" "),i("div",{staticClass:"head-btn"},[i("div",{staticClass:"to-details",on:{click:t.handleHidden}},[t._v(t._s(t.$t("lang.block_detail_button")))])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.blockinfo,expression:"blockinfo"}],staticClass:"block-con"},[i("div",{staticClass:"block-item"},[i("label",{attrs:{for:""}},[t._v(t._s(t.$t("lang.block_detail4"))+"：")]),t._v(" "),i("p",[t._v(t._s(t.blockData.size))])]),t._v(" "),i("div",{staticClass:"block-item"},[i("label",{attrs:{for:""}},[t._v(t._s(t.$t("lang.block_detail5"))+"：")]),t._v(" "),i("p",[t._v(t._s(t.blockData.tx_num))])]),t._v(" "),i("div",{staticClass:"block-item"},[i("label",{attrs:{for:""}},[t._v(t._s(t.$t("lang.block_detail6"))+"：")]),t._v(" "),i("p",[t._v(t._s(t.blockData.generated))])]),t._v(" "),i("div",{staticClass:"block-item"},[i("label",{attrs:{for:""}},[t._v(t._s(t.$t("lang.block_detail7"))+"：")]),t._v(" "),i("p",[t._v(t._s(t.blockData.difficulty))])]),t._v(" "),i("div",{staticClass:"block-item"},[i("label",{attrs:{for:""}},[t._v(t._s(t.$t("lang.block_detail8"))+"：")]),t._v(" "),i("p",[t._v(t._s(t.blockData.bits))])]),t._v(" "),i("div",{staticClass:"block-item"},[i("label",{attrs:{for:""}},[t._v(t._s(t.$t("lang.block_detail9"))+"：")]),t._v(" "),i("p",[t._v(t._s(t.blockData.nonce))])]),t._v(" "),i("div",{staticClass:"block-item"},[i("label",{attrs:{for:""}},[t._v(t._s(t.$t("lang.block_detail10"))+"：")]),t._v(" "),i("p",[t._v(t._s(t.blockData.version))])]),t._v(" "),i("div",{staticClass:"block-item"},[i("label",{attrs:{for:""}},[t._v(t._s(t.$t("lang.block_detail11"))+"：")]),t._v(" "),i("p",[t._v(t._s(t.blockData.merkle_root))])])])]),t._v(" "),i("div",{staticClass:"m-tips"},[t._v(t._s(t.$t("lang.block_trans_title")))]),t._v(" "),t.transData.length>0?i("div",{staticClass:"m-con m-bg"},t._l(t.transData,function(a,e){return i("div",{key:e,staticClass:"m-con-log",attrs:{prop:a.prop}},["Entrust"===a.type?i("div",{staticClass:"m-entrust"},[i("img",{attrs:{src:s("nJ+d"),alt:""}}),t._v("Pos Entrust")]):t._e(),t._v(" "),"Deprive"===a.type?i("div",{staticClass:"m-entrust"},[i("img",{attrs:{src:s("nJ+d"),alt:""}}),t._v("PoS Deprive")]):t._e(),t._v(" "),"CreateAgent"===a.type?i("div",{staticClass:"m-entrust"},[i("img",{attrs:{src:s("nJ+d"),alt:""}}),t._v("PoS Create Agent")]):t._e(),t._v(" "),"ResignAgent"===a.type?i("div",{staticClass:"m-entrust"},[i("img",{attrs:{src:s("nJ+d"),alt:""}}),t._v("PoS Resign Agent")]):t._e(),t._v(" "),"Create"===a.type?i("div",{staticClass:"m-entrust"},[i("img",{attrs:{src:s("NiPj"),alt:""}}),t._v("Contract")]):t._e(),t._v(" "),"Call"===a.type?i("div",{staticClass:"m-entrust"},[i("img",{attrs:{src:s("NiPj"),alt:""}}),t._v("Contract")]):t._e(),t._v(" "),i("div",{staticClass:"log-title"},[i("img",{attrs:{src:s("B3/w"),alt:""}}),t._v(" "),i("div",{staticClass:"log-link"},[i("router-link",{attrs:{tag:"a",to:{path:"/mtx",query:{txid:a.txid}}}},[t._v(t._s(a.txid))])],1)]),t._v(" "),i("div",{staticClass:"log-con"},[i("div",{staticClass:"log-con-title"},[t._v(t._s(t.$t("lang.block_trans1")))]),t._v(" "),i("div",{staticClass:"log-con-info"},[t._l(a.from_array,function(a,e){return i("div",{key:e,staticClass:"info-item"},t._l(a,function(a,e){return i("div",{key:e,staticClass:"item-child"},[i("div",{staticClass:"item-form"},[i("span",[t._v(t._s(a)+" GKC")]),t._v(" from")]),t._v(" "),i("div",{staticClass:"item-details"},[i("img",{attrs:{src:s("cNSs"),alt:""}}),t._v(" "),t.isGoto(e)?i("router-link",{attrs:{tag:"a",to:{path:"/maddress",query:{address:e}}}},[t._v(t._s(e))]):i("a",{attrs:{href:"javascript:void(0)"}},[t._v(t._s(e))])],1)])}),0)}),t._v(" "),t._m(0,!0),t._v(" "),t._l(a.to_array,function(a,l){return i("div",{key:l,staticClass:"info-item"},t._l(a,function(a,l){return i("div",{key:l,staticClass:"item-child"},[i("div",{staticClass:"item-form"},"unknown"===l?[i("span",[t._v("Empty")])]:"Non-standard script"===l?[i("span",[t._v("Cointract")])]:[i("span",[t._v(t._s(a)+" GKC")]),t._v(" To")]),t._v(" "),"unknown"===l?i("div",{staticClass:"item-details"},[i("img",{attrs:{src:s("jDct"),alt:""}}),t._v(" "),i("p",{staticStyle:{display:"inline-block"}},0===e?[t._v("Coinbase")]:[t._v("Coinstake")])]):"Non-standard script"===l?i("div",{staticClass:"item-details"},[i("img",{attrs:{src:s("jDct"),alt:""}}),t._v(" "),i("p",{staticStyle:{display:"inline-block"}},[t._v(t._s(l))])]):i("div",{staticClass:"item-details"},[i("img",{attrs:{src:s("cNSs"),alt:""}}),t._v(" "),t.isGoto(l)?i("router-link",{attrs:{tag:"a",to:{path:"/maddress",query:{address:l}}}},[t._v(t._s(l))]):i("a",{attrs:{href:"javascript:void(0)"}},[t._v(t._s(l))])],1)])}),0)})],2)]),t._v(" "),""!==a.total_out?i("div",{staticClass:"log-total"},[t._v("\n              "+t._s(t.$t("lang.block_trans3"))+" ："),i("span",[t._v(t._s(a.total_out)+" GKC")])]):t._e()])}),0):t._e()]),t._v(" "),i("Footer")],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"log-con-img"},[a("img",{attrs:{src:s("wq74"),alt:""}})])}]};var d=s("VU/8")(_,v,!1,function(t){s("1bkd")},"data-v-2e2f0cb8",null);a.default=d.exports}});
//# sourceMappingURL=12.660a1c8d5ed4f9356b75.js.map