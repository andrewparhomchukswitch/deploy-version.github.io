(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b65c5ce2"],{"0d96":function(e,t,r){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},"0f35":function(e,t,r){"use strict";var n=r("ade3"),c=r("5530"),a=r("7a23");function i(e,t,r,i,l,f){return Object(a["y"])(),Object(a["h"])(Object(a["I"])(r.variant),{class:["text",Object(c["a"])(Object(n["a"])({},"text__"+r.type,r.type),i.classes)],style:{"--size":r.size,"--weight":r.weight,"--line-height":r.lineHeight,"--color":i.colorTheme,"--mt":r.mt,"--mr":r.mr,"--mb":r.mb,"--ml":r.ml}},{default:Object(a["S"])((function(){return[Object(a["F"])(e.$slots,"default")]})),_:3},8,["class","style"])}r("13d5"),r("b64b");var l=r("c07e"),f={name:"Text",inheritAttrs:!0,props:{variant:{type:String,default:"span"},type:{type:String,default:""},size:{type:String,default:"inherit"},weight:{type:String,default:"normal"},lineHeight:{type:String,default:"inherit"},mt:{type:String,default:"0"},mr:{type:String,default:"0"},mb:{type:String,default:"0"},ml:{type:String,default:"0"},color:{type:String,default:"black"},theme:{type:String,default:""}},setup:function(e,t){var r=t.attrs,i=Object(a["f"])((function(){return Object.keys(r).reduce((function(e,t){return Object(c["a"])(Object(c["a"])({},e),{},Object(n["a"])({},"text__"+t,!0))}),{})})),f=Object(a["f"])((function(){return l["a"][e.theme]||e.color}));return{classes:i,colorTheme:f}}};r("d649");f.render=i;t["a"]=f},"11d2":function(e,t,r){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},"334b":function(e,t,r){"use strict";var n=r("7a23"),c={key:0,class:"input__prepend"},a={class:"input__body"},i={class:"input__body-label"},l={key:1,class:"input__append"},f={key:2,class:"input__error-text"};function o(e,t,r,o,d,p){var u=Object(n["G"])("Container");return Object(n["y"])(),Object(n["h"])(u,{bordered:"","box-shadow":"",variant:"label",class:["input",{input__error:r.error,"input__read-only":r.readOnly,"input__hide-shadow":r.hideShadow||r.readOnly}],style:{"--opacity":r.fullOpacity}},{default:Object(n["S"])((function(){return[e.$slots.prepend?(Object(n["y"])(),Object(n["h"])("div",c,[Object(n["F"])(e.$slots,"prepend")])):Object(n["i"])("",!0),Object(n["k"])("div",a,[Object(n["k"])("span",i,Object(n["K"])(r.label),1),o.showPlaceholder?(Object(n["y"])(),Object(n["h"])("span",{key:0,class:"input__placeholder",style:r.placeholderStyles},Object(n["K"])(r.placeholder),5)):Object(n["i"])("",!0),Object(n["T"])(Object(n["k"])("input",{class:["input__body-field",{"input__body-field__opacity":r.opacity}],readonly:r.readOnly,disabled:r.disabled,type:r.type,"onUpdate:modelValue":t[1]||(t[1]=function(e){return o.inputValue=e}),onBlur:t[2]||(t[2]=function(t){return e.$emit("blur")})},null,42,["readonly","disabled","type"]),[[n["N"],o.inputValue]])]),e.$slots.append?(Object(n["y"])(),Object(n["h"])("div",l,[Object(n["F"])(e.$slots,"append")])):Object(n["i"])("",!0),r.errorText&&r.error?(Object(n["y"])(),Object(n["h"])("div",f,Object(n["K"])(r.errorText),1)):Object(n["i"])("",!0)]})),_:1},8,["class","style"])}r("a9e3");var d=r("185a"),p={name:"Input",components:{Container:d["a"]},emits:["update:modelValue","blur"],inheritAttrs:!0,props:{type:{type:String,default:"text"},label:{type:String,default:""},modelValue:{type:[String,Number],default:""},placeholder:{type:String,default:""},placeholderStyles:{type:Object,default:function(){return{}}},errorText:{type:String,default:""},error:{type:Boolean,default:!1},readOnly:{type:Boolean,default:!1},opacity:{type:Boolean,default:!1},fullOpacity:{type:[Number,String],default:1},hideShadow:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},setup:function(e,t){var r=t.emit,c=Object(n["D"])(e.modelValue),a=Object(n["f"])({get:function(){return e.modelValue||c.value},set:function(e){c.value=e,r("update:modelValue",e)}}),i=Object(n["f"])((function(){return!c.value}));return{showPlaceholder:i,inputValue:a}}};r("bca4");p.render=o;t["a"]=p},"4b04":function(e,t,r){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},5804:function(e,t,r){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},"6c97":function(e,t,r){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},b6dc:function(e,t,r){"use strict";r("0d96")},bca4:function(e,t,r){"use strict";r("5804")},c07e:function(e,t,r){"use strict";var n=r("6c97"),c=r.n(n);t["a"]=c.a},c9ad:function(e,t,r){"use strict";r("11d2")},d33c:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=function(e){var t=document.createElement("textarea");t.setAttribute("readonly",""),t.innerText=e,t.style.position="absolute",t.style.left="-999999px",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}},d649:function(e,t,r){"use strict";r("4b04")},ec23:function(e,t,r){"use strict";r.r(t);var n=r("7a23"),c={class:"deposits-tab"},a={class:"deposits-tab__main"},i={class:"deposits-tab__select"},l=Object(n["k"])("div",null,[Object(n["k"])("svg",{width:"204",height:"201",viewBox:"0 0 204 201",fill:"none",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},[Object(n["k"])("rect",{width:"204",height:"201",fill:"url(#qr-pattern0)"}),Object(n["k"])("defs",null,[Object(n["k"])("pattern",{id:"qr-pattern0",patternContentUnits:"objectBoundingBox",width:"1",height:"1"},[Object(n["k"])("use",{"xlink:href":"#qr-image0",transform:"translate(-0.125 -0.133803) scale(0.00563063)"})]),Object(n["k"])("image",{id:"qr-image0",width:"222",height:"222","xlink:href":"data:image/png;base64,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"})])])],-1),f={class:"deposits-tab__crd__divider"},o=Object(n["k"])("div",{class:"deposits-tab__crd__divider-line"},null,-1),d=Object(n["k"])("div",{class:"deposits-tab__crd__divider-line"},null,-1);function p(e,t,r,p,u,s){var b=Object(n["G"])("Text"),y=Object(n["G"])("CryptoBlock"),g=Object(n["G"])("Icon"),O=Object(n["G"])("Input"),v=Object(n["G"])("Container");return Object(n["y"])(),Object(n["h"])("section",c,[Object(n["k"])(b,{variant:"p",size:"12",weight:"700",mb:"12px",uppercase:""},{default:Object(n["S"])((function(){return[Object(n["j"])(Object(n["K"])(p.t("deposits.selectCrypto")),1)]})),_:1}),Object(n["k"])("div",a,[Object(n["k"])("div",i,[(Object(n["y"])(!0),Object(n["h"])(n["a"],null,Object(n["E"])(p.cryptoList,(function(e){var t;return Object(n["y"])(),Object(n["h"])(y,{key:e.key,active:(null===(t=p.selectedCrypto)||void 0===t?void 0:t.key)===e.key,crypto:e.key,class:"deposits-tab__select-item",onClick:function(t){return p.selectCrypto(e)}},null,8,["active","crypto","onClick"])})),128))]),Object(n["k"])(v,{"background-color":"#FAFAFA",class:"deposits-tab__crd"},{default:Object(n["S"])((function(){return[Object(n["k"])(b,{variant:"p",theme:"primary",size:"12px",mb:"20px"},{default:Object(n["S"])((function(){return[Object(n["j"])(Object(n["K"])(p.t("depositPage.scan")),1)]})),_:1}),l,Object(n["k"])("div",f,[o,Object(n["k"])(b,{variant:"p",uppercase:"",class:["deposits-tab__crd__divider-text ",{"deposits-tab__crd__divider-text-ru":"ru"===p.locale}]},{default:Object(n["S"])((function(){return[Object(n["j"])(Object(n["K"])(p.t("common.or")),1)]})),_:1},8,["class"]),d]),Object(n["k"])(b,{variant:"p",theme:"primary",size:"12px",mb:"12px"},{default:Object(n["S"])((function(){return[Object(n["j"])(Object(n["K"])(p.t("depositPage.send")),1)]})),_:1}),Object(n["k"])(O,{modelValue:p.legacy,"onUpdate:modelValue":t[2]||(t[2]=function(e){return p.legacy=e}),"hide-shadow":"",label:p.t("deposits.legacy"),class:"deposits-tab__crd-legacy"},{append:Object(n["S"])((function(){return[Object(n["k"])(g,{name:"copy",onClick:t[1]||(t[1]=function(e){return p.copy(p.legacy)})})]})),_:1},8,["modelValue","label"])]})),_:1})])])}var u=r("47e2");function s(e,t,r,c,a,i){var l=Object(n["G"])("Icon"),f=Object(n["G"])("Text"),o=Object(n["G"])("Container");return Object(n["y"])(),Object(n["h"])(o,{bordered:"",active:r.active,class:"crypto-block"},{default:Object(n["S"])((function(){var e;return[Object(n["k"])(l,{name:(null===(e=c.coin)||void 0===e?void 0:e.icon)+"-circle",width:"48px",height:"48px"},null,8,["name"]),Object(n["k"])("div",null,[Object(n["k"])(f,{variant:"p",size:"18px",weight:"500",mb:"9px"},{default:Object(n["S"])((function(){var e;return[Object(n["j"])(Object(n["K"])(null===(e=c.coin)||void 0===e?void 0:e.title),1)]})),_:1}),Object(n["k"])(f,{variant:"p",size:"16px",uppercase:""},{default:Object(n["S"])((function(){var e;return[Object(n["j"])(Object(n["K"])(null===(e=c.coin)||void 0===e?void 0:e.rate),1)]})),_:1})])]})),_:1},8,["active"])}r("7db0");var b=r("185a"),y=r("00a1"),g=r("0f35"),O=r("7f58"),v={name:"CryptoBlock",components:{Icon:y["a"],Container:b["a"],Text:g["a"]},props:{crypto:{type:String,required:!0},active:{type:Boolean,default:!1}},setup:function(e){var t=Object(n["f"])((function(){return O["a"].find((function(t){return t.key===e.crypto}))}));return{coin:t}}};r("b6dc");v.render=s;var A=v,j=r("334b"),m=r("d33c"),h={name:"DepositTab",components:{Icon:y["a"],Input:j["a"],Container:b["a"],Text:g["a"],CryptoBlock:A},setup:function(){var e=Object(u["b"])(),t=e.t,r=e.locale,c=Object(n["C"])([{key:"btc"},{key:"ltc"},{key:"xmr"},{key:"eth"},{key:"usdt"},{key:"pm"}]),a=Object(n["D"])(null),i=Object(n["D"])("MQi2aB3HbFoNkntUyMQi2aBMQi2aB3HbFoN"),l=function(e){a.value=e};return{t:t,locale:r,legacy:i,cryptoList:c,selectedCrypto:a,selectCrypto:l,copy:m["a"]}}};r("c9ad");h.render=p;t["default"]=h}}]);
//# sourceMappingURL=chunk-b65c5ce2.c3ddb8c1.js.map