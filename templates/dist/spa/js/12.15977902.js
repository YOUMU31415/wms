(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"5a35":function(t,e){},"5eef":function(t,e,a){"use strict";var s=a("5a35"),o=a.n(s);e["default"]=o.a},dd1b:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("div",[e("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn"}},[e("q-table",{staticClass:"shadow-24",attrs:{data:t.table_list,"row-key":"id",separator:t.separator,loading:t.loading,columns:t.columns,"hide-bottom":"",pagination:t.pagination,"no-data-label":"No data","no-results-label":"No data you want","table-style":{height:t.height},flat:"",bordered:""},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"top",fn:function(){return[e("div",{staticClass:"flex items-center"},[e("div",{staticClass:"q-mr-md"},[t._v(t._s(t.$t("download_center.createTime")))]),e("q-input",{attrs:{readonly:"",outlined:"",dense:"",placeholder:t.interval},scopedSlots:t._u([{key:"append",fn:function(){return[e("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[e("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[e("q-date",{attrs:{range:""},model:{value:t.createDate1,callback:function(e){t.createDate1=e},expression:"createDate1"}})],1)],1)]},proxy:!0}]),model:{value:t.createDate2,callback:function(e){t.createDate2=e},expression:"createDate2"}}),e("q-btn-group",{staticClass:"q-ml-md",attrs:{push:""}},[e("q-btn",{attrs:{label:t.$t("download_center.reset"),icon:"img:statics/downloadcenter/reset.svg"},on:{click:function(e){return t.reset()}}}),e("q-btn",{attrs:{label:t.$t("downloadasnlist"),icon:"cloud_download"},on:{click:function(e){return t.downloadlistData()}}})],1)],1)]},proxy:!0},{key:"body",fn:function(a){return[e("q-tr",{attrs:{props:a}},[e("q-td",{key:"goods_code",attrs:{props:a}},[t._v(t._s(a.row.goods_code))]),e("q-td",{key:"goods_desc",attrs:{props:a}},[t._v(t._s(a.row.goods_desc))]),e("q-td",{key:"goods_qty",attrs:{props:a}},[t._v(t._s(a.row.goods_qty))]),e("q-td",{key:"onhand_stock",attrs:{props:a}},[t._v(t._s(a.row.onhand_stock))]),e("q-td",{key:"can_order_stock",attrs:{props:a}},[t._v(t._s(a.row.can_order_stock))]),e("q-td",{key:"ordered_stock",attrs:{props:a}},[t._v(t._s(a.row.ordered_stock))]),e("q-td",{key:"inspect_stock",attrs:{props:a}},[t._v(t._s(a.row.inspect_stock))]),e("q-td",{key:"hold_stock",attrs:{props:a}},[t._v(t._s(a.row.hold_stock))]),e("q-td",{key:"damage_stock",attrs:{props:a}},[t._v(t._s(a.row.damage_stock))]),e("q-td",{key:"asn_stock",attrs:{props:a}},[t._v(t._s(a.row.asn_stock))]),e("q-td",{key:"dn_stock",attrs:{props:a}},[t._v(t._s(a.row.dn_stock))]),e("q-td",{key:"pre_load_stock",attrs:{props:a}},[t._v(t._s(a.row.pre_load_stock))]),e("q-td",{key:"pre_sort_stock",attrs:{props:a}},[t._v(t._s(a.row.pre_sort_stock))]),e("q-td",{key:"sorted_stock",attrs:{props:a}},[t._v(t._s(a.row.sorted_stock))]),e("q-td",{key:"pick_stock",attrs:{props:a}},[t._v(t._s(a.row.pick_stock))]),e("q-td",{key:"picked_stock",attrs:{props:a}},[t._v(t._s(a.row.picked_stock))]),e("q-td",{key:"back_order_stock",attrs:{props:a}},[t._v(t._s(a.row.back_order_stock))]),e("q-td",{key:"create_time",attrs:{props:a}},[t._v(t._s(a.row.create_time))]),e("q-td",{key:"update_time",attrs:{props:a}},[t._v(t._s(a.row.update_time))])],1)]}}])})],1),[e("div",{directives:[{name:"show",rawName:"v-show",value:0!==t.max,expression:"max !== 0"}],staticClass:"q-pa-lg flex flex-center"},[e("div",[t._v(t._s(t.total)+" ")]),e("q-pagination",{attrs:{color:"black",max:t.max,"max-pages":6,"boundary-links":""},on:{click:function(e){return t.getList()}},model:{value:t.current,callback:function(e){t.current=e},expression:"current"}}),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.paginationIpt,expression:"paginationIpt"}],staticStyle:{width:"60px","text-align":"center"},domProps:{value:t.paginationIpt},on:{blur:t.changePageEnter,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.changePageEnter.apply(null,arguments)},input:function(e){e.target.composing||(t.paginationIpt=e.target.value)}}})])],1),e("div",{directives:[{name:"show",rawName:"v-show",value:0===t.max,expression:"max === 0"}],staticClass:"q-pa-lg flex flex-center"},[e("q-btn",{attrs:{flat:"",push:"",color:"dark",label:t.$t("no_data")}})],1)]],2)},o=[],i=a("3004"),n=a("bd4c"),r=a("a357"),c=a("18d6"),l={name:"Pagestockdownload",data(){return{login_name:"",authin:"0",pathname:"stock/",pathname_previous:"",pathname_next:"",separator:"cell",loading:!1,height:"",table_list:[],columns:[{name:"goods_code",required:!0,label:this.$t("stock.view_stocklist.goods_code"),align:"left",field:"goods_code"},{name:"goods_desc",label:this.$t("stock.view_stocklist.goods_desc"),field:"goods_desc",align:"center"},{name:"goods_qty",label:this.$t("stock.view_stocklist.goods_qty"),field:"goods_qty",align:"center"},{name:"onhand_stock",label:this.$t("stock.view_stocklist.onhand_stock"),field:"onhand_stock",align:"center"},{name:"can_order_stock",label:this.$t("stock.view_stocklist.can_order_stock"),field:"can_order_stock",align:"center"},{name:"ordered_stock",label:this.$t("stock.view_stocklist.ordered_stock"),field:"ordered_stock",align:"center"},{name:"inspect_stock",label:this.$t("stock.view_stocklist.inspect_stock"),field:"inspect_stock",align:"center"},{name:"hold_stock",label:this.$t("stock.view_stocklist.hold_stock"),field:"hold_stock",align:"center"},{name:"damage_stock",label:this.$t("stock.view_stocklist.damage_stock"),field:"damage_stock",align:"center"},{name:"asn_stock",label:this.$t("stock.view_stocklist.asn_stock"),field:"asn_stock",align:"center"},{name:"dn_stock",label:this.$t("stock.view_stocklist.dn_stock"),field:"dn_stock",align:"center"},{name:"pre_load_stock",label:this.$t("stock.view_stocklist.pre_load_stock"),field:"pre_load_stock",align:"center"},{name:"pre_sort_stock",label:this.$t("stock.view_stocklist.pre_sort_stock"),field:"pre_sort_stock",align:"center"},{name:"sorted_stock",label:this.$t("stock.view_stocklist.sorted_stock"),field:"sorted_stock",align:"center"},{name:"pick_stock",label:this.$t("stock.view_stocklist.pick_stock"),field:"pick_stock",align:"center"},{name:"picked_stock",label:this.$t("stock.view_stocklist.picked_stock"),field:"picked_stock",align:"center"},{name:"back_order_stock",label:this.$t("stock.view_stocklist.back_order_stock"),field:"back_order_stock",align:"center"},{name:"create_time",label:this.$t("createtime"),field:"create_time",align:"center"},{name:"update_time",label:this.$t("updatetime"),field:"update_time",align:"center"}],pagination:{page:1,rowsPerPage:"30"},createDate1:"",createDate2:"",date_range:"",searchUrl:"",downloadUrl:"stock/filelist/",current:1,max:0,total:0,paginationIpt:1}},computed:{interval(){return this.$t("download_center.start")+" - "+this.$t("download_center.end")}},watch:{createDate1(t){t&&(t.to?(this.createDate2=`${t.from} - ${t.to}`,this.date_range=`${t.from},${t.to} 23:59:59`,this.searchUrl=this.pathname+"list/?create_time__range="+this.date_range,this.downloadUrl=this.pathname+"filelist/?create_time__range="+this.date_range):(this.createDate2=`${t}`,this.dateArray=t.split("/"),this.searchUrl=this.pathname+"list/?create_time__year="+this.dateArray[0]+"&create_time__month="+this.dateArray[1]+"&create_time__day="+this.dateArray[2],this.downloadUrl=this.pathname+"filelist/?create_time__year="+this.dateArray[0]+"&create_time__month="+this.dateArray[1]+"&create_time__day="+this.dateArray[2]),this.date_range=this.date_range.replace(/\//g,"-"),this.getSearchList(),this.$refs.qDateProxy.hide())}},methods:{getList(){var t=this;Object(i["f"])(t.pathname+"list/?ordering=-update_time&page="+t.current,{}).then((e=>{t.table_list=e.results,t.total=e.count,0===e.count||1===Math.ceil(e.count/30)?t.max=0:t.max=Math.ceil(e.count/30),t.pathname_previous=e.previous,t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},changePageEnter(t){Number(this.paginationIpt)<1?(this.current=1,this.paginationIpt=1):Number(this.paginationIpt)>this.max?(this.current=this.max,this.paginationIpt=this.max):this.current=Number(this.paginationIpt),this.getList()},getSearchList(){var t=this;Object(i["f"])(t.searchUrl+"&page="+t.current).then((e=>{t.table_list=e.results,t.total=e.count,0===e.count||1===Math.ceil(e.count/30)?t.max=0:t.max=Math.ceil(e.count/30),t.pathname_previous=e.previous,t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},getListPrevious(){var t=this;Object(i["f"])(t.pathname_previous,{}).then((e=>{t.table_list=e.results,t.pathname_previous=e.previous,t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},getListNext(){var t=this;Object(i["f"])(t.pathname_next,{}).then((e=>{t.table_list=e.results,t.pathname_previous=e.previous,t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},downloadlistData(){var t=this;Object(i["g"])(t.downloadUrl).then((e=>{var a=Date.now(),s=n["b"].formatDate(a,"YYYYMMDDHHmmssSSS");const o=Object(r["a"])(t.pathname+"list"+s+".csv","\ufeff"+e.data,"text/csv");!0!==o&&t.$q.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})}))},reset(){this.getList(),this.downloadUrl="stock/filelist/",this.createDate2=""}},created(){var t=this;c["a"].has("openid")?t.openid=c["a"].getItem("openid"):(t.openid="",c["a"].set("openid","")),c["a"].has("login_name")?t.login_name=c["a"].getItem("login_name"):(t.login_name="",c["a"].set("login_name","")),c["a"].has("auth")?(t.authin="1",t.getList()):t.authin="0"},mounted(){var t=this;t.$q.platform.is.electron?t.height=String(t.$q.screen.height-290)+"px":t.height=t.$q.screen.height-290+"px"},updated(){},destroyed(){}},d=l,_=a("2877"),p=a("5eef"),k=a("eaac"),h=a("27f9"),m=a("0016"),g=a("7cbe"),u=a("52ee"),v=a("e7a9"),f=a("9c40"),w=a("bd08"),b=a("db86"),y=a("3b16"),q=a("eebe"),x=a.n(q),$=Object(_["a"])(d,s,o,!1,null,null,null);"function"===typeof p["default"]&&Object(p["default"])($);e["default"]=$.exports;x()($,"components",{QTable:k["a"],QInput:h["a"],QIcon:m["a"],QPopupProxy:g["a"],QDate:u["a"],QBtnGroup:v["a"],QBtn:f["a"],QTr:w["a"],QTd:b["a"],QPagination:y["a"]})}}]);