(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7893b3dd","chunk-022932cc"],{"0ab4":function(e,t,n){"use strict";n.r(t);n("b0c0");var a=n("7a23"),c={class:"deposits-history"},r={class:"deposits-history__filters"},o={class:"deposits-history__filters-main"},i={class:"deposits-history__filters-secondary"};function l(e,t,n,l,s,u){var f=Object(a["G"])("Icon"),d=Object(a["G"])("Input"),b=Object(a["G"])("SelectInput"),p=Object(a["G"])("RadioButtons"),y=Object(a["G"])("SelectColumns"),O=Object(a["G"])("Badge"),j=Object(a["G"])("Date"),m=Object(a["G"])("Table"),h=Object(a["G"])("Pagination");return Object(a["y"])(),Object(a["h"])("section",c,[Object(a["k"])("div",r,[Object(a["k"])("div",o,[Object(a["k"])(d,{class:"deposits-history__filters-main__search","hide-shadow":"",placeholder:l.t("common.search")},{prepend:Object(a["S"])((function(){return[Object(a["k"])(f,{name:"search"})]})),_:1},8,["placeholder"]),Object(a["k"])(b,{muted:"",placeholder:l.t("common.crypto"),icon:"chevron-down",class:"deposits-history__filters-main__crypto"},null,8,["placeholder"]),Object(a["k"])(b,{muted:"",placeholder:l.t("common.to"),icon:"chevron-down",class:"deposits-history__filters-main__to"},null,8,["placeholder"]),Object(a["k"])(b,{muted:"",placeholder:l.t("common.from"),icon:"chevron-down",class:"deposits-history__filters-main__from"},null,8,["placeholder"])]),Object(a["k"])("div",i,[Object(a["k"])(p,{modelValue:l.depositsStatus,"onUpdate:modelValue":t[1]||(t[1]=function(e){return l.depositsStatus=e}),data:l.radioFilter},{default:Object(a["S"])((function(e){var t=e.item;return[Object(a["j"])(Object(a["K"])(l.t(t.title)),1)]})),_:1},8,["modelValue","data"]),Object(a["k"])(y,{columns:l.columns},null,8,["columns"])])]),Object(a["k"])(m,{columns:l.columns,data:l.data},{column:Object(a["S"])((function(e){var t=e.column;return[Object(a["j"])(Object(a["K"])(l.t(t.title)),1)]})),cell:Object(a["S"])((function(e){var t=e.item,n=e.column;return["status"===n.name?(Object(a["y"])(),Object(a["h"])(O,{key:0,type:l.COLORS[t]},{default:Object(a["S"])((function(){return[Object(a["j"])(Object(a["K"])(l.t(l.STATUS[t])),1)]})),_:2},1032,["type"])):"date"===n.type?(Object(a["y"])(),Object(a["h"])(j,{key:1,date:t,format:"DD MMM YYYY HH:mm"},null,8,["date"])):(Object(a["y"])(),Object(a["h"])(a["a"],{key:2},[Object(a["j"])(Object(a["K"])(t),1)],64))]})),_:1},8,["columns","data"]),Object(a["k"])(h,{class:"deposits-history__pagination",modelValue:l.page,"onUpdate:modelValue":t[2]||(t[2]=function(e){return l.page=e}),"per-page":l.perPage,"total-count":l.totalCount},null,8,["modelValue","per-page","total-count"])])}var s=n("47e2"),u=n("f5b6"),f=n("334b"),d=n("00a1"),b=n("6204"),p=n("3123"),y=n("eb69"),O=n("e91f"),j=n("4cb3"),m=n("b010"),h=n("b08e"),g=n("2a74"),v=n("ee86"),_=n("446f"),k={name:"DepositsHistoryTab",components:{Date:_["a"],Pagination:v["a"],Table:O["a"],SelectColumns:y["a"],SelectInput:b["a"],Input:f["a"],Icon:d["a"],RadioButtons:p["a"],Badge:j["default"]},setup:function(){var e=Object(s["b"])(),t=e.t,n=Object(a["D"])({}),c=Object(u["c"])(g["a"].DEPOSITS),r=c.getHistoryColumns,o=c.getHistoryData,i=c.getHistoryPage,l=c.getHistoryPerPage,f=c.getHistoryTotalCount,d=Object(u["e"])(g["a"].DEPOSITS),b=d.SET_HISTORY_PAGE,p=Object(u["b"])(g["a"].DEPOSITS),y=p.setMockHistoryData,O=Object(a["f"])({get:function(){return i.value},set:b});return y(),{t:t,depositsStatus:n,page:O,perPage:l,totalCount:f,radioFilter:h["c"],columns:r,data:o,COLORS:m["a"],STATUS:m["b"]}}};n("2007");k.render=l;t["default"]=k},"0f35":function(e,t,n){"use strict";var a=n("ade3"),c=n("5530"),r=n("7a23");function o(e,t,n,o,i,l){return Object(r["y"])(),Object(r["h"])(Object(r["I"])(n.variant),{class:["text",Object(c["a"])(Object(a["a"])({},"text__"+n.type,n.type),o.classes)],style:{"--size":n.size,"--weight":n.weight,"--line-height":n.lineHeight,"--color":o.colorTheme,"--mt":n.mt,"--mr":n.mr,"--mb":n.mb,"--ml":n.ml}},{default:Object(r["S"])((function(){return[Object(r["F"])(e.$slots,"default")]})),_:3},8,["class","style"])}n("13d5"),n("b64b");var i=n("c07e"),l={name:"Text",inheritAttrs:!0,props:{variant:{type:String,default:"span"},type:{type:String,default:""},size:{type:String,default:"inherit"},weight:{type:String,default:"normal"},lineHeight:{type:String,default:"inherit"},mt:{type:String,default:"0"},mr:{type:String,default:"0"},mb:{type:String,default:"0"},ml:{type:String,default:"0"},color:{type:String,default:"black"},theme:{type:String,default:""}},setup:function(e,t){var n=t.attrs,o=Object(r["f"])((function(){return Object.keys(n).reduce((function(e,t){return Object(c["a"])(Object(c["a"])({},e),{},Object(a["a"])({},"text__"+t,!0))}),{})})),l=Object(r["f"])((function(){return i["a"][e.theme]||e.color}));return{classes:o,colorTheme:l}}};n("d649");l.render=o;t["a"]=l},"16e1":function(e,t,n){"use strict";n("5e35")},1857:function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},"19e1":function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},2007:function(e,t,n){"use strict";n("1857")},3080:function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},3123:function(e,t,n){"use strict";var a=n("7a23"),c={class:"radio-buttons"};function r(e,t,n,r,o,i){return Object(a["y"])(),Object(a["h"])("div",c,[(Object(a["y"])(!0),Object(a["h"])(a["a"],null,Object(a["E"])(n.data,(function(t){var n;return Object(a["y"])(),Object(a["h"])("div",{key:t.key,class:["radio-buttons__item",{"radio-buttons__item_selected":(null===(n=r.value)||void 0===n?void 0:n.key)===t.key}],onClick:function(e){return r.selectItem(t)}},[Object(a["F"])(e.$slots,"default",{item:t})],10,["onClick"])})),128))])}var o=n("08e8"),i={name:"RadioButtons",emits:["update:modelValue"],props:{data:{type:Array,require:!0},modelValue:{type:[Object,null],default:null,validate:function(e){return!e||!!e.key}}},setup:function(e,t){var n=t.emit,a=Object(o["a"])(e,n),c=a.value,r=function(e){c.value=e};return{value:c,selectItem:r}}};n("16e1");i.render=r;t["a"]=i},3797:function(e,t,n){"use strict";n("3080")},3932:function(e,t,n){"use strict";var a=n("7a23"),c={class:"button__label"};function r(e,t,n,r,o,i){return Object(a["y"])(),Object(a["h"])("button",{class:["button",{"button__default-padding":n.defaultPadding}],style:{"--background-color":r.StyleVariables[n.type],"--color":r.StyleVariables["t".concat(n.type)]}},[Object(a["k"])("span",c,[Object(a["F"])(e.$slots,"default")])],6)}var o=n("c07e"),i={name:"Button",props:{type:{type:String,default:"default"},defaultPadding:{type:Boolean,default:!1}},setup:function(){return{StyleVariables:o["a"]}}};n("b1ae");i.render=r;t["a"]=i},"446f":function(e,t,n){"use strict";var a=n("7a23");function c(e,t,n,c,r,o){var i=Object(a["G"])("Text");return Object(a["y"])(),Object(a["h"])(i,Object(a["r"])(e.$attrs,{class:"date"}),{default:Object(a["S"])((function(){return[Object(a["j"])(Object(a["K"])(c.formattedDate),1)]})),_:1},16)}var r=n("c1df"),o=n.n(r),i=n("0f35"),l={name:"Date",inheritAttrs:!0,components:{Text:i["a"]},props:{date:{type:[Date,String],default:""},format:{type:String,default:""}},setup:function(e){var t=Object(a["f"])((function(){return o()(e.date).format(e.format)}));return{formattedDate:t}}};l.render=c;t["a"]=l},"45a0":function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},"4b04":function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},"4cb3":function(e,t,n){"use strict";n.r(t);var a=n("7a23");function c(e,t,n,c,r,o){return Object(a["y"])(),Object(a["h"])(Object(a["I"])(n.variant),{class:"badge",style:{"--background-color":c.StyleVariables[n.type],"--color":c.StyleVariables["t".concat(n.type)]}},{default:Object(a["S"])((function(){return[Object(a["F"])(e.$slots,"default")]})),_:3},8,["style"])}var r=n("c07e"),o={name:"Badge",props:{variant:{type:String,default:"div"},type:{type:String,default:"default"}},setup:function(){return{StyleVariables:r["a"]}}};n("abd0");o.render=c;t["default"]=o},"55a5":function(e,t,n){"use strict";var a=n("7a23");function c(e,t,n,c,r,o){var i=Object(a["H"])("click-outside");return Object(a["T"])((Object(a["y"])(),Object(a["h"])("div",{class:"dropdown",style:{"--dropdown-body-width":n.bodyWidth},onClick:t[3]||(t[3]=function(){return c.showDropdown&&c.showDropdown.apply(c,arguments)})},[Object(a["k"])("div",{class:"dropdown__label",onClick:t[1]||(t[1]=Object(a["V"])((function(){return c.toggleDropdown&&c.toggleDropdown.apply(c,arguments)}),["stop"]))},[Object(a["F"])(e.$slots,"label")]),Object(a["T"])(Object(a["k"])("div",{ref:"body",class:"dropdown__body",style:c.position,onClick:t[2]||(t[2]=Object(a["V"])((function(e){return n.hideOnClick&&c.hideDropdown()}),["stop"]))},[Object(a["F"])(e.$slots,"body")],4),[[a["P"],c.isShowDropdown]])],4)),[[i,c.hideDropdown]])}var r=n("1a6c"),o=function(e){var t=e.getBoundingClientRect();return{left:t.left>=0,top:t.top>=0,bottom:t.bottom<=(window.innerHeight||document.documentElement.clientHeight),right:t.right<=(window.innerWidth||document.documentElement.clientWidth)}},i={name:"Dropdown",directives:{clickOutside:r["a"]},emits:["update:modelValue"],props:{bodyWidth:{type:String,default:"unset"},modelValue:{type:[Boolean,null],default:null},hideOnClick:{type:Boolean,default:!1}},setup:function(e,t){var n=t.emit,c=Object(a["D"])(!1),r=Object(a["D"])(),i=Object(a["D"])({}),l=Object(a["f"])({get:function(){return null===e.modelValue?c.value:e.modelValue},set:function(e){c.value=!!e,n("update:modelValue",!!e)}}),s=Object(a["f"])((function(){var e={};return e})),u=function(){l.value=!c.value},f=function(){l.value=!1},d=function(){l.value=!0};return Object(a["w"])((function(){i.value=o(r.value)})),{isShowDropdown:l,body:r,position:s,view:i,showDropdown:d,hideDropdown:f,toggleDropdown:u}}};n("e518");i.render=c;t["a"]=i},"5e35":function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},6204:function(e,t,n){"use strict";var a=n("7a23"),c={class:"d-flex align-items-center"},r={class:"select-input__body__prepend"},o={key:1,class:"select-input__placeholder"},i={class:"select-input__body__append"};function l(e,t,n,l,s,u){var f=Object(a["G"])("Icon"),d=Object(a["G"])("Container"),b=Object(a["G"])("Dropdown");return Object(a["y"])(),Object(a["h"])(b,{"hide-on-click":"","body-width":"100%",class:"select-input"},{label:Object(a["S"])((function(){return[Object(a["k"])(d,Object(a["r"])({muted:n.muted,bordered:n.bordered},e.$attrs,{class:"select-input__body"}),{default:Object(a["S"])((function(){return[Object(a["k"])("div",c,[Object(a["k"])("div",r,[Object(a["F"])(e.$slots,"prepend")]),l.getModalValue[n.valueLabel]?Object(a["F"])(e.$slots,"selected",{key:0,item:l.getModalValue}):(Object(a["y"])(),Object(a["h"])("span",o,Object(a["K"])(n.placeholder),1))]),Object(a["k"])("div",i,[Object(a["F"])(e.$slots,"append")]),n.icon&&!e.$slots.append?(Object(a["y"])(),Object(a["h"])(f,{key:0,name:n.icon,class:"select-input__body__append"},null,8,["name"])):Object(a["i"])("",!0)]})),_:3},16,["muted","bordered"])]})),body:Object(a["S"])((function(){return[Object(a["k"])(d,{"box-shadow":"",bordered:"","background-color":"white",class:"select-input__options"},{default:Object(a["S"])((function(){return[(Object(a["y"])(!0),Object(a["h"])(a["a"],null,Object(a["E"])(l.filteredOptions,(function(t){return Object(a["y"])(),Object(a["h"])("div",{key:t.value,class:"select-input__options__item",onClick:function(e){return l.handleChange(t)}},[Object(a["F"])(e.$slots,"option",{option:t})],8,["onClick"])})),128))]})),_:1})]})),_:1})}n("4de4");var s=n("08e8"),u=n("1a6c"),f=n("185a"),d=n("00a1"),b=n("55a5"),p={name:"SelectInput",inheritAttrs:!0,directives:{clickOutside:u["a"]},components:{Dropdown:b["a"],Container:f["a"],Icon:d["a"]},emits:["update:modelValue"],props:{placeholder:{type:String,default:""},modelValue:{type:[Object,null],default:function(){return{}}},options:{type:Array,default:function(){return[]}},icon:{type:String,default:""},valueLabel:{type:String,default:"value"},muted:{type:Boolean,default:!1},bordered:{type:Boolean,default:!1}},setup:function(e,t){var n=t.emit,c=Object(s["a"])(e,n),r=c.value,o=Object(a["f"])((function(){return e.modelValue||{}})),i=Object(a["f"])((function(){return e.options.filter((function(t){return t[e.valueLabel]!==(e.modelValue||{})[e.valueLabel]}))||[]})),l=function(e){r.value=e};return{filteredOptions:i,getModalValue:o,handleChange:l}}};n("7c4c");p.render=l;t["a"]=p},"78c1":function(e,t,n){"use strict";n("a34d")},"7c4c":function(e,t,n){"use strict";n("a123")},"9d56":function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},a123:function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},a34d:function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},a351:function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},abd0:function(e,t,n){"use strict";n("45a0")},b010:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return r}));n("dca8"),n("d81d"),n("b64b");var a="status.",c=Object.freeze({unconfirmed:"".concat(a,"unconfirmed"),new:"".concat(a,"new"),expired:"".concat(a,"expired"),complete:"".concat(a,"complete"),confirmed:"".concat(a,"confirmed"),progress:"".concat(a,"progress")}),r=Object.freeze({unconfirmed:"primary-light",new:"info",expired:"secondary-light",complete:"success",confirmed:"success",progress:"success"});Object.keys(c).map((function(e){return{id:e,key:e,title:c[e],color:r[e]}}))},b1ae:function(e,t,n){"use strict";n("9d56")},d649:function(e,t,n){"use strict";n("4b04")},dca8:function(e,t,n){var a=n("23e7"),c=n("bb2f"),r=n("d039"),o=n("861d"),i=n("f183").onFreeze,l=Object.freeze,s=r((function(){l(1)}));a({target:"Object",stat:!0,forced:s,sham:!c},{freeze:function(e){return l&&o(e)?l(i(e)):e}})},e518:function(e,t,n){"use strict";n("19e1")},eb69:function(e,t,n){"use strict";var a=n("7a23"),c={class:"select-columns__label"};function r(e,t,n,r,o,i){var l=Object(a["G"])("Icon"),s=Object(a["G"])("Checkbox"),u=Object(a["G"])("Container"),f=Object(a["G"])("Dropdown");return Object(a["y"])(),Object(a["h"])(f,{class:"select-columns"},{label:Object(a["S"])((function(){return[Object(a["k"])("span",c,[Object(a["k"])(l,{name:"settings",class:"select-columns__label-icon"}),Object(a["j"])(" "+Object(a["K"])(r.t("table.column",3)),1)])]})),body:Object(a["S"])((function(){return[Object(a["k"])(u,{bordered:"","box-shadow":"","background-color":"white",class:"select-columns__body"},{default:Object(a["S"])((function(){return[(Object(a["y"])(!0),Object(a["h"])(a["a"],null,Object(a["E"])(n.columns,(function(e){return Object(a["y"])(),Object(a["h"])("div",{key:e.id,class:"select-columns__item"},[Object(a["k"])(s,{modelValue:e.isShow,"onUpdate:modelValue":function(t){return e.isShow=t},label:r.t(e.title)},null,8,["modelValue","onUpdate:modelValue","label"])])})),128))]})),_:1})]})),_:1})}var o=n("55a5"),i=n("185a"),l=n("edfa"),s=n("00a1"),u=n("47e2"),f={name:"SelectColumns",components:{Dropdown:o["a"],Container:i["a"],Checkbox:l["a"],Icon:s["a"]},props:{columns:{type:Array,required:!0}},setup:function(){var e=Object(u["b"])(),t=e.t;return{t:t}}};n("3797");f.render=r;t["a"]=f},edfa:function(e,t,n){"use strict";var a=n("7a23"),c={class:"checkbox"};function r(e,t,n,r,o,i){var l=Object(a["G"])("Icon");return Object(a["y"])(),Object(a["h"])("label",c,[Object(a["T"])(Object(a["k"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.value=e}),class:"checkbox__field",type:"checkbox"},null,512),[[a["M"],r.value]]),Object(a["k"])(l,{class:"checkbox__icon",name:r.value?"checked":"unchecked"},null,8,["name"]),Object(a["k"])("span",{class:"checkbox__label",innerHTML:n.label},null,8,["innerHTML"])])}var o=n("00a1"),i=n("08e8"),l={name:"Checkbox",components:{Icon:o["a"]},emits:["update:modelValue"],props:{label:{type:String,require:!0},modelValue:{type:Boolean,default:!1}},setup:function(e,t){var n=t.emit,a=Object(i["a"])(e,n),c=a.value;return{value:c}}};n("78c1");l.render=r;t["a"]=l},ee86:function(e,t,n){"use strict";var a=n("7a23"),c={class:"pagination"},r={class:"pagination__right justify-content-between"},o={class:"d-flex justify-end"},i={class:"pagination__pages"},l=Object(a["k"])("div",{class:"pagination__pages-item pagination__page-divider"}," ... ",-1),s={class:"pagination__pages-item pagination__page-last"},u={class:"d-flex justify-end"},f={class:"pagination__goto"};function d(e,t,n,d,b,p){var y=Object(a["G"])("Icon"),O=Object(a["G"])("Button"),j=Object(a["G"])("Text"),m=Object(a["G"])("Input");return Object(a["y"])(),Object(a["h"])("div",c,[Object(a["k"])(O,{class:"pagination__page-next"},{default:Object(a["S"])((function(){return[Object(a["j"])(Object(a["K"])(d.t("pagination.nextPage"))+" ",1),Object(a["k"])(y,{name:"arrow-right-full"})]})),_:1}),Object(a["k"])("div",r,[Object(a["k"])("div",o,[Object(a["k"])("div",i,[(Object(a["y"])(!0),Object(a["h"])(a["a"],null,Object(a["E"])(d.pageSlots,(function(e){return Object(a["y"])(),Object(a["h"])("div",{key:e,class:"pagination__pages-item"},Object(a["K"])(e),1)})),128)),l,Object(a["k"])("div",s,Object(a["K"])(d.pagesCount),1)])]),Object(a["k"])("div",u,[Object(a["k"])("div",f,[Object(a["k"])(j,{variant:"p",type:"muted",mr:"10px"},{default:Object(a["S"])((function(){return[Object(a["j"])(Object(a["K"])(d.t("pagination.goTo")),1)]})),_:1}),Object(a["k"])(m,{placeholder:d.t("pagination.page"),type:"number","hide-shadow":""},null,8,["placeholder"])])])])])}n("a9e3");var b=n("00a1"),p=n("3932"),y=n("0f35"),O=n("334b"),j=n("47e2"),m={name:"Pagination",components:{Input:O["a"],Button:p["a"],Icon:b["a"],Text:y["a"]},emits:["update:modelValue"],props:{modelValue:{type:Number,default:1},perPage:{type:Number,default:100},totalCount:{type:Number,default:100},slotsCount:{type:Number,default:6}},setup:function(e){var t=Object(j["b"])(),n=t.t,c=Object(a["f"])((function(){return Math.ceil(e.totalCount/e.perPage)})),r=Object(a["f"])((function(){for(var t=[],n=0;n<e.slotsCount;n++)t.push(e.modelValue+n);return t}));return{t:n,pagesCount:c,pageSlots:r}}};n("fe12");m.render=d;t["a"]=m},fe12:function(e,t,n){"use strict";n("a351")}}]);
//# sourceMappingURL=chunk-7893b3dd.ea7f1f74.js.map