(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27c46ddd"],{"15d4":function(t,e,a){t.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000",mobileMaxWidth:"499px",mobileMinWidth:"320px",mobileheaderHeight:"52px",desktopMinWidth:"500px"}},1612:function(t,e,a){"use strict";a("67ee")},"3cf4":function(t,e,a){"use strict";var s=a("7a23");function c(t,e,a,c,i,n){var r=Object(s["H"])("Icon");return Object(s["z"])(),Object(s["h"])("section",{class:"tabs",style:{"--inactive-opacity":a.inactiveOpacity}},[(Object(s["z"])(!0),Object(s["h"])(s["a"],null,Object(s["F"])(a.data,(function(e){return Object(s["z"])(),Object(s["h"])("div",{key:e.key,class:[{tabs__item_active:a.modelValue.key===e.key},"tabs__item"],onClick:function(a){return t.$emit("update:modelValue",e)}},[Object(s["l"])(r,{name:e.icon,class:"tabs__icon"},null,8,["name"]),Object(s["G"])(t.$slots,"default",{item:e})],10,["onClick"])})),128))],4)}a("a9e3");var i=a("cbc2"),n={components:{Icon:i["a"]},emits:["update:modelValue"],props:{data:{type:Array,require:!0},inactiveOpacity:{type:[String,Number],default:"1"},modelValue:{type:Object,default:function(){return{}}}}};a("e97c");n.render=c;e["a"]=n},"624d":function(t,e,a){t.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000",mobileMaxWidth:"499px",mobileMinWidth:"320px",mobileheaderHeight:"52px",desktopMinWidth:"500px"}},"67ee":function(t,e,a){t.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000",mobileMaxWidth:"499px",mobileMinWidth:"320px",mobileheaderHeight:"52px",desktopMinWidth:"500px"}},"71fa":function(t,e,a){"use strict";var s=a("7a23");function c(t,e,a,c,i,n){return Object(s["z"])(),Object(s["h"])("h1",{class:"admin-heading",onClick:e[1]||(e[1]=function(){return c.goTo&&c.goTo.apply(c,arguments)})},[Object(s["G"])(t.$slots,"default")])}var i=a("2756"),n={name:"Heading",props:{to:{type:[Object,String]}},setup:function(t){var e=Object(i["c"])(),a=function(){t.to&&e.push(t.to)};return{goTo:a}}};a("1612");n.render=c;e["a"]=n},"7db0":function(t,e,a){"use strict";var s=a("23e7"),c=a("b727").find,i=a("44d2"),n="find",r=!0;n in[]&&Array(1)[n]((function(){r=!1})),s({target:"Array",proto:!0,forced:r},{find:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}}),i(n)},a007:function(t,e,a){"use strict";a.d(e,"c",(function(){return r})),a.d(e,"b",(function(){return d})),a.d(e,"a",(function(){return o}));var s="blacklists.",c="".concat(s,"addressesTable."),i="".concat(c,"filter."),n="".concat(c,"columns."),r=[{key:"all",title:"".concat(i,"all")},{key:"active",title:"".concat(i,"active")},{key:"disabled",title:"".concat(i,"disabled")}],d=[{id:"id",name:"id",title:"".concat(n,"id"),isShow:!1},{id:"address",name:"address",title:"".concat(n,"address"),isShow:!0},{id:"crypto",name:"crypto",title:"".concat(n,"crypto"),isShow:!0},{id:"reason",name:"reason",title:"".concat(n,"reason"),isShow:!0},{id:"date",name:"date",type:"date",title:"".concat(n,"date"),isShow:!0},{id:"status",name:"status",type:"status",title:"".concat(n,"status"),isShow:!0}],o=[{id:0,address:"1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX",crypto:"btc",reason:"Stolen funds, high risk address.",date:"20 May 2020, 9:54",status:"active"},{id:1,address:"1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX",crypto:"btc",reason:"Stolen funds, high risk address.",date:"20 May 2020, 9:54",status:"active"},{id:2,address:"1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX",crypto:"btc",reason:"Stolen funds, high risk address.",date:"20 May 2020, 9:54",status:"active"},{id:3,address:"1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX",crypto:"btc",reason:"Stolen funds, high risk address.",date:"20 May 2020, 9:54",status:"disabled"},{id:4,address:"1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX",crypto:"btc",reason:"Stolen funds, high risk address.",date:"20 May 2020, 9:54",status:"disabled"},{id:5,address:"1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX",crypto:"btc",reason:"Stolen funds, high risk address.",date:"20 May 2020, 9:54",status:"active"},{id:6,address:"1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX",crypto:"btc",reason:"Stolen funds, high risk address.",date:"20 May 2020, 9:54",status:"disabled"},{id:7,address:"1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX",crypto:"btc",reason:"Stolen funds, high risk address.",date:"20 May 2020, 9:54",status:"active"},{id:8,address:"1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX",crypto:"btc",reason:"Stolen funds, high risk address.",date:"20 May 2020, 9:54",status:"active"},{id:9,address:"1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX",crypto:"btc",reason:"Stolen funds, high risk address.",date:"20 May 2020, 9:54",status:"active"}]},cc4d:function(t,e,a){"use strict";a("15d4")},e97c:function(t,e,a){"use strict";a("624d")},e9ef:function(t,e,a){"use strict";a.r(e);var s=a("7a23"),c={class:"blacklists"},i={class:"blacklists__header"},n={class:"blacklists__container"};function r(t,e,a,r,d,o){var l=Object(s["H"])("Heading"),u=Object(s["H"])("Tabs");return Object(s["z"])(),Object(s["h"])("section",c,[Object(s["l"])("header",i,[Object(s["l"])(l,null,{default:Object(s["T"])((function(){return[Object(s["k"])(Object(s["L"])(r.t("blacklists.title")),1)]})),_:1})]),Object(s["l"])("main",n,[Object(s["l"])(u,{modelValue:r.activeTab,"onUpdate:modelValue":[e[1]||(e[1]=function(t){return r.activeTab=t}),r.changeTab],class:"blacklists__container__tabs",data:r.tabs,"inactive-opacity":.7},{default:Object(s["T"])((function(t){var e=t.item;return[Object(s["k"])(Object(s["L"])(e.title),1)]})),_:1},8,["modelValue","data","inactive-opacity","onUpdate:modelValue"]),(Object(s["z"])(),Object(s["h"])(s["b"],null,[(Object(s["z"])(),Object(s["h"])(Object(s["J"])(r.activeTab.component)))],1024))])])}var d=a("5530"),o=(a("d3b7"),a("3ca3"),a("ddb0"),a("7db0"),a("5319"),a("ac1f"),a("383b")),l=a("6c02"),u=a("4b2d"),f=a("0070"),b=(a("4de4"),a("4b92")),p=a("a007"),h=Object(u["a"])([Object(b["a"])({tableName:"addressesBlacklist",totalCount:123})],{namespaced:!0,mutations:{ADD_ADDRESSES_BLACKLIST_ITEM:function(t,e){t.addressesBlacklist.data.push(e)}},actions:{addAddressItem:function(t,e){var a=t.commit;a("ADD_ADDRESSES_BLACKLIST_ITEM",e)},setMockAddressesBlacklistData:function(t){var e=t.commit;e("SET_ADDRESSES_BLACKLIST_DATA",p["a"]),e("SET_ADDRESSES_BLACKLIST_COLUMNS",p["b"])}},getters:{getVisibleAddressesBlacklistColumns:function(t){var e,a;return(null===(e=t.addressesBlacklist)||void 0===e||null===(a=e.columns)||void 0===a?void 0:a.filter((function(t){return t.isShow})))||[]}}}),y=a("71fa"),m=a("3cf4"),k={name:"Blacklists",components:{Tabs:m["a"],Heading:y["a"],IPsList:Object(s["m"])((function(){return a.e("chunk-2d0b96a2").then(a.bind(null,"339e"))})),AddressesList:Object(s["m"])((function(){return Promise.all([a.e("chunk-6bf136d8"),a.e("chunk-21c013d8"),a.e("chunk-07270c40")]).then(a.bind(null,"19f2"))}))},setup:function(){var t=Object(l["e"])(),e=Object(l["d"])(),a=Object(o["a"])(),c=a.t;Object(u["d"])(f["a"].BLACKLISTS,h);var i=Object(s["f"])((function(){return[{title:c("blacklists.tabs.ipList"),key:"ip",icon:"ban",component:"IPsList"},{title:c("blacklists.tabs.addressesList"),key:"addresses",icon:"ban",component:"AddressesList"}]})),n=Object(s["E"])(i.value.find((function(t){return t.key===e.query.t}))||i.value[1]),r=function(a){n.value=a,t.replace(Object(d["a"])(Object(d["a"])({},e),{},{query:{t:a.key}}))};return{t:c,tabs:i,activeTab:n,changeTab:r}}};a("cc4d");k.render=r;e["default"]=k}}]);
//# sourceMappingURL=chunk-27c46ddd.a1632c98.js.map