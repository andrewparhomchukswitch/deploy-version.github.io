(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bd8fdbdc"],{"1dff":function(t,e,a){"use strict";a("48f0")},"48f0":function(t,e,a){t.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},"4f01":function(t,e,a){"use strict";a.r(e);var s=a("7a23"),c={class:"blacklists"},n={class:"blacklists__header"},d={class:"blacklists__container"};function i(t,e,a,i,r,o){var l=Object(s["G"])("Heading"),b=Object(s["G"])("Tabs");return Object(s["y"])(),Object(s["h"])("section",c,[Object(s["k"])("header",n,[Object(s["k"])(l,null,{default:Object(s["S"])((function(){return[Object(s["j"])(Object(s["K"])(i.t("blacklists.title")),1)]})),_:1})]),Object(s["k"])("main",d,[Object(s["k"])(b,{modelValue:i.activeTab,"onUpdate:modelValue":[e[1]||(e[1]=function(t){return i.activeTab=t}),i.changeTab],class:"blacklists__container__tabs",data:i.tabs,"inactive-opacity":.7},{default:Object(s["S"])((function(t){var e=t.item;return[Object(s["j"])(Object(s["K"])(e.title),1)]})),_:1},8,["modelValue","data","inactive-opacity","onUpdate:modelValue"]),(Object(s["y"])(),Object(s["h"])(s["b"],null,[(Object(s["y"])(),Object(s["h"])(Object(s["I"])(i.activeTab.component)))],1024))])])}var r=a("5530"),o=(a("d3b7"),a("3ca3"),a("ddb0"),a("7db0"),a("5319"),a("ac1f"),a("47e2")),l=a("6c02"),b=a("f5b6"),u=a("38a9"),f=(a("4de4"),a("e924")),y=a("c9c1"),h=Object(b["a"])([Object(f["a"])({tableName:"addressesBlacklist",totalCount:123})],{namespaced:!0,mutations:{ADD_ADDRESSES_BLACKLIST_ITEM:function(t,e){t.addressesBlacklist.data.push(e)}},actions:{addAddressItem:function(t,e){var a=t.commit;a("ADD_ADDRESSES_BLACKLIST_ITEM",e)},setMockAddressesBlacklistData:function(t){var e=t.commit;e("SET_ADDRESSES_BLACKLIST_DATA",y["a"]),e("SET_ADDRESSES_BLACKLIST_COLUMNS",y["b"])}},getters:{getVisibleAddressesBlacklistColumns:function(t){var e,a;return(null===(e=t.addressesBlacklist)||void 0===e||null===(a=e.columns)||void 0===a?void 0:a.filter((function(t){return t.isShow})))||[]}}}),k=a("82f4"),p=a("571d"),S={name:"Blacklists",components:{Tabs:p["a"],Heading:k["a"],IPsList:Object(s["l"])((function(){return a.e("chunk-2d0cbe25").then(a.bind(null,"4c22"))})),AddressesList:Object(s["l"])((function(){return Promise.all([a.e("chunk-6bf136d8"),a.e("chunk-4ab64cd5"),a.e("chunk-fab1ca96")]).then(a.bind(null,"950f"))}))},setup:function(){var t=Object(l["d"])(),e=Object(l["c"])(),a=Object(o["b"])(),c=a.t;Object(b["d"])(u["a"].BLACKLISTS,h);var n=Object(s["f"])((function(){return[{title:c("blacklists.tabs.ipList"),key:"ip",icon:"ban",component:"IPsList"},{title:c("blacklists.tabs.addressesList"),key:"addresses",icon:"ban",component:"AddressesList"}]})),d=Object(s["D"])(n.value.find((function(t){return t.key===e.query.t}))||n.value[1]),i=function(a){d.value=a,t.replace(Object(r["a"])(Object(r["a"])({},e),{},{query:{t:a.key}}))};return{t:c,tabs:n,activeTab:d,changeTab:i}}};a("1dff");S.render=i;e["default"]=S},"7db0":function(t,e,a){"use strict";var s=a("23e7"),c=a("b727").find,n=a("44d2"),d="find",i=!0;d in[]&&Array(1)[d]((function(){i=!1})),s({target:"Array",proto:!0,forced:i},{find:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}}),n(d)},c9c1:function(t,e,a){"use strict";a.d(e,"c",(function(){return i})),a.d(e,"b",(function(){return r})),a.d(e,"a",(function(){return o}));var s="blacklists.",c="".concat(s,"addressesTable."),n="".concat(c,"filter."),d="".concat(c,"columns."),i=[{key:"all",title:"".concat(n,"all")},{key:"active",title:"".concat(n,"active")},{key:"disabled",title:"".concat(n,"disabled")}],r=[{id:"id",name:"id",title:"".concat(d,"id"),isShow:!1},{id:"address",name:"address",title:"".concat(d,"address"),isShow:!0},{id:"crypto",name:"crypto",title:"".concat(d,"crypto"),isShow:!0},{id:"reason",name:"reason",title:"".concat(d,"reason"),isShow:!0},{id:"date",name:"date",type:"date",title:"".concat(d,"date"),isShow:!0},{id:"status",name:"status",type:"status",title:"".concat(d,"status"),isShow:!0}],o=[{id:0,address:"1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX",crypto:"btc",reason:"Stolen funds, high risk address.",date:"20 May 2020, 9:54",status:"active"},{id:1,address:"1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX",crypto:"btc",reason:"Stolen funds, high risk address.",date:"20 May 2020, 9:54",status:"active"},{id:2,address:"1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX",crypto:"btc",reason:"Stolen funds, high risk address.",date:"20 May 2020, 9:54",status:"active"},{id:3,address:"1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX",crypto:"btc",reason:"Stolen funds, high risk address.",date:"20 May 2020, 9:54",status:"disabled"},{id:4,address:"1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX",crypto:"btc",reason:"Stolen funds, high risk address.",date:"20 May 2020, 9:54",status:"disabled"},{id:5,address:"1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX",crypto:"btc",reason:"Stolen funds, high risk address.",date:"20 May 2020, 9:54",status:"active"},{id:6,address:"1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX",crypto:"btc",reason:"Stolen funds, high risk address.",date:"20 May 2020, 9:54",status:"disabled"},{id:7,address:"1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX",crypto:"btc",reason:"Stolen funds, high risk address.",date:"20 May 2020, 9:54",status:"active"},{id:8,address:"1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX",crypto:"btc",reason:"Stolen funds, high risk address.",date:"20 May 2020, 9:54",status:"active"},{id:9,address:"1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX",crypto:"btc",reason:"Stolen funds, high risk address.",date:"20 May 2020, 9:54",status:"active"}]}}]);
//# sourceMappingURL=chunk-bd8fdbdc.fb1fc517.js.map