(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66193488"],{"1ad9":function(e,t,a){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},"3dbe":function(e,t,a){"use strict";a("1ad9")},"440f":function(e,t,a){"use strict";a.r(t);var n=a("7a23"),r={class:"news"},c={class:"news__header"},s={class:"news__item__header"},o={class:"news__item__title"},i={class:"news__item__date"},f={class:"news__item__text"};function u(e,t,a,u,l,b){var d=Object(n["G"])("BackBtn");return Object(n["y"])(),Object(n["h"])("section",r,[Object(n["k"])(d,{class:"news__backBtn"}),Object(n["k"])("h1",c,Object(n["K"])(u.t("news.title")),1),(Object(n["y"])(!0),Object(n["h"])(n["a"],null,Object(n["E"])(u.newsData,(function(e,t){return Object(n["y"])(),Object(n["h"])("div",{key:t,class:"news__item"},[Object(n["k"])("div",s,[Object(n["k"])("h2",o,Object(n["K"])(e.title),1),Object(n["k"])("h3",i,Object(n["K"])(e.date),1)]),Object(n["k"])("p",f,Object(n["K"])(e.text),1)])})),128)),Object(n["k"])("h2",{onClick:t[1]||(t[1]=function(){return u.loadMoreNews&&u.loadMoreNews.apply(u,arguments)}),class:"news__more-news"},Object(n["K"])(u.t("news.moreNews")),1)])}var l=a("2909"),b=a("1da1"),d=(a("96cf"),a("159b"),a("99af"),a("d3b7"),a("47e2")),w=a("676a"),h=a("c1df"),p=a.n(h),m=a("f5b6"),y=a("2a74"),O={name:"News",components:{BackBtn:w["a"]},setup:function(){var e=Object(d["b"])(),t=e.t,a=e.locale,r=Object(n["D"])([]),c=Object(m["b"])(y["a"].LOADING),s=c.setIsLoading;Object(n["Q"])(a,(function(){o()}));var o=function(){r.value.forEach((function(e){e.date=p()(e.globalDate).format("DD MMM YYYY")}))};Object(n["w"])(Object(b["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,s(!0),e.next=4,f();case 4:t=e.sent,r.value=t.data,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0);case 11:return e.prev=11,s(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])}))));var i=function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,s(!0),e.next=4,f();case 4:t=e.sent,r.value=[].concat(Object(l["a"])(r.value),Object(l["a"])(t.data)),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0);case 11:return e.prev=11,s(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}(),f=function(){return new Promise((function(e){setTimeout((function(){var t={data:[{title:"Merry Christmas!",globalDate:new Date(Date.now()-864e5),date:p()(new Date(Date.now()-864e5)).format("DD MMM YYYY"),text:"Fees reduced to 1% till the 30th of December."},{title:"Reimagine the products",globalDate:new Date,date:p()(new Date).format("DD MMM YYYY"),text:"With the help of the Play Library, you can use Play early in your design process to build out fully functional pages with just a few taps."},{title:"Merry Christmas!",globalDate:new Date,date:p()(new Date).format("DD MMM YYYY"),text:"Fees reduced to 1% till the 30th of December."}]};e(t)}),1e3)}))};return{t:t,newsData:r,loadMoreNews:i}}};a("3dbe");O.render=u;t["default"]=O},"5e38":function(e,t,a){"use strict";a("c332")},"676a":function(e,t,a){"use strict";var n=a("7a23");function r(e,t,a,r,c,s){var o=Object(n["G"])("Icon");return Object(n["y"])(),Object(n["h"])(o,{name:"arrow-left",class:"back-btn",onClick:r.goBack},null,8,["onClick"])}var c=a("6c02"),s=a("00a1"),o=a("d046"),i={name:"BackBtn",components:{Icon:s["a"]},setup:function(){var e=Object(c["d"])(),t=function(){return window.history.length>2},a=function(){t()?e.go(-1):e.push({name:o["c"].HOME})};return{goBack:a}}};a("5e38");i.render=r;t["a"]=i},c332:function(e,t,a){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}}}]);
//# sourceMappingURL=chunk-66193488.d48ed4a0.js.map