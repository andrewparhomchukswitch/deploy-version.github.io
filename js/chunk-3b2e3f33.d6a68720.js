(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b2e3f33"],{1831:function(e,t,r){"use strict";var n=r("7a23"),a={class:"text-header"};function c(e,t){return Object(n["y"])(),Object(n["h"])("header",a,[Object(n["F"])(e.$slots,"default")])}r("ac6b");const o={};o.render=c;t["a"]=o},"185a":function(e,t,r){"use strict";var n=r("7a23");function a(e,t,r,a,c,o){return Object(n["y"])(),Object(n["h"])(Object(n["I"])(r.variant),{class:[{container__boxShadow:r.boxShadow,container__muted:r.muted,container__border:r.bordered,container__active:r.active},"container"],style:{"--border-radius":r.radius,"--bg":r.backgroundColor}},{default:Object(n["S"])((function(){return[Object(n["F"])(e.$slots,"default")]})),_:3},8,["class","style"])}var c={name:"Container",props:{variant:{type:String,default:"div"},boxShadow:{type:Boolean,default:!1},muted:{type:Boolean,default:!1},active:{type:Boolean,default:!1},bordered:{type:Boolean,default:!1},radius:{type:String,default:"6px"},backgroundColor:{type:String,default:"transparent"}}};r("6886");c.render=a;t["a"]=c},"210c":function(e,t,r){"use strict";r("6e53")},"334b":function(e,t,r){"use strict";var n=r("7a23"),a={key:0,class:"input__prepend"},c={class:"input__body"},o={class:"input__body-label"},i={class:"input__body__field"},l={key:1,class:"input__append"},f={key:2,class:"input__error-text"};function s(e,t,r,s,u,d){var p=Object(n["G"])("Container");return Object(n["y"])(),Object(n["h"])(p,{bordered:"","box-shadow":"",variant:"label",class:["input",{input__error:r.error,"input__read-only":r.readOnly,"input__hide-shadow":r.hideShadow||r.readOnly}],style:{"--opacity":r.fullOpacity}},{default:Object(n["S"])((function(){return[e.$slots.prepend?(Object(n["y"])(),Object(n["h"])("div",a,[Object(n["F"])(e.$slots,"prepend")])):Object(n["i"])("",!0),Object(n["k"])("div",c,[Object(n["k"])("span",o,Object(n["K"])(r.label),1),Object(n["k"])("div",i,[s.showPlaceholder?(Object(n["y"])(),Object(n["h"])("span",{key:0,class:"input__body__field-placeholder",style:r.placeholderStyles},Object(n["K"])(r.placeholder),5)):Object(n["i"])("",!0),Object(n["T"])(Object(n["k"])("input",{class:["input__body__field-input",{"input__body-field__opacity":r.opacity}],readonly:r.readOnly,disabled:r.disabled,type:r.type,"onUpdate:modelValue":t[1]||(t[1]=function(e){return s.inputValue=e}),onBlur:t[2]||(t[2]=function(t){return e.$emit("blur")})},null,42,["readonly","disabled","type"]),[[n["N"],s.inputValue]])])]),e.$slots.append?(Object(n["y"])(),Object(n["h"])("div",l,[Object(n["F"])(e.$slots,"append")])):Object(n["i"])("",!0),r.errorText&&r.error?(Object(n["y"])(),Object(n["h"])("div",f,Object(n["K"])(r.errorText),1)):Object(n["i"])("",!0)]})),_:1},8,["class","style"])}r("a9e3");var u=r("185a"),d={name:"Input",components:{Container:u["a"]},emits:["update:modelValue","blur"],inheritAttrs:!0,props:{type:{type:String,default:"text"},label:{type:String,default:""},modelValue:{type:[String,Number],default:""},placeholder:{type:String,default:""},placeholderStyles:{type:Object,default:function(){return{}}},errorText:{type:String,default:""},error:{type:Boolean,default:!1},readOnly:{type:Boolean,default:!1},opacity:{type:Boolean,default:!1},fullOpacity:{type:[Number,String],default:1},hideShadow:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},setup:function(e,t){var r=t.emit,a=Object(n["f"])({get:function(){return e.modelValue},set:function(e){r("update:modelValue",e)}}),c=Object(n["f"])((function(){return!a.value}));return{showPlaceholder:c,inputValue:a}}};r("bb4a");d.render=s;t["a"]=d},3932:function(e,t,r){"use strict";var n=r("7a23"),a={class:"button__label"};function c(e,t,r,c,o,i){return Object(n["y"])(),Object(n["h"])("button",{class:["button",{"button__default-padding":r.defaultPadding}],style:{"--background-color":c.StyleVariables[r.type],"--color":c.StyleVariables["t".concat(r.type)],"--font-size":r.fontSize}},[Object(n["k"])("span",a,[Object(n["F"])(e.$slots,"default")])],6)}var o=r("c07e"),i={name:"Button",props:{type:{type:String,default:"default"},defaultPadding:{type:Boolean,default:!1},fontSize:{type:String,default:"16px"}},setup:function(){return{StyleVariables:o["a"]}}};r("ec23");i.render=c;t["a"]=i},5376:function(e,t,r){"use strict";r.r(t);var n=r("7a23"),a={class:"deposit-page"};function c(e,t,r,c,o,i){var l=Object(n["G"])("Tools"),f=Object(n["G"])("TextHeader"),s=Object(n["G"])("Wizard");return Object(n["y"])(),Object(n["h"])("section",a,[Object(n["k"])(l,{tools:c.tools},null,8,["tools"]),Object(n["k"])(f,null,{default:Object(n["S"])((function(){return[Object(n["j"])(Object(n["K"])(c.wizardSteps[c.currentStep].title)+" ("+Object(n["K"])(c.currentStep+1)+"/"+Object(n["K"])(c.wizardSteps.length)+") ",1)]})),_:1}),Object(n["k"])(s,{modelValue:c.currentStep,"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.currentStep=e}),steps:c.wizardSteps},null,8,["modelValue","steps"]),(Object(n["y"])(),Object(n["h"])(Object(n["I"])("Step"+(c.currentStep+1)),{onNext:c.setCurrentStep},null,8,["onNext"]))])}r("d3b7"),r("3ca3"),r("ddb0");var o=r("47e2"),i=r("1831"),l={class:"wizard"},f={class:"wizard__bar"},s={class:"wizard__bar__inner"},u={ref:"wizardBar",class:"wizard__bar__inner_selected"},d={class:"wizard__slot-wrap"},p=Object(n["k"])("div",{class:"wizard__slot__circle__inner"},null,-1),b={class:"wizard__slot__text"};function y(e,t,r,a,c,o){return Object(n["y"])(),Object(n["h"])("div",l,[Object(n["k"])("div",f,[Object(n["k"])("div",s,[Object(n["k"])("div",u,null,512)])]),Object(n["k"])("div",d,[(Object(n["y"])(!0),Object(n["h"])(n["a"],null,Object(n["E"])(r.steps,(function(e,t){return Object(n["y"])(),Object(n["h"])("div",{key:e.id,class:["wizard__slot",{wizard__slot_active:r.modelValue>=t}],style:{"--color":e.color},onClick:function(r){return a.setCurrentStep(e,t)}},[Object(n["k"])("div",{ref:function(e){a.wizardCircle[t]=e},class:"wizard__slot__circle"},[p],512),Object(n["k"])("span",b,Object(n["K"])(e.title),1)],14,["onClick"])})),128))])])}r("a9e3");var O={name:"Wizard",props:{steps:{type:Array,require:!0},modelValue:{type:Number,default:0}},setup:function(e,t){var r=t.emit,a=Object(n["D"])(null),c=Object(n["D"])([]),o=function(e,t){r("update:modelValue",t)},i=function(){var t=[85,50,0];a.value.style["clip-path"]="inset(0 "+t[e.modelValue]+"% 0 0)"};return Object(n["Q"])((function(){return e.modelValue}),i),Object(n["w"])(i),{wizardBar:a,wizardCircle:c,setCurrentStep:o}}};r("aee8");O.render=y;var h=O,j=r("3932"),m=r("334b"),_=r("9430"),g=r("00a1"),E={name:"DepositPage",components:{Step1:Object(n["l"])((function(){return Promise.all([r.e("chunk-06863dae"),r.e("chunk-a5958562")]).then(r.bind(null,"817f"))})),Step2:Object(n["l"])((function(){return Promise.all([r.e("chunk-06863dae"),r.e("chunk-fa6ccb0c")]).then(r.bind(null,"a20f"))})),Step3:Object(n["l"])((function(){return r.e("chunk-2d0c0e06").then(r.bind(null,"443c"))})),Icon:g["a"],Button:j["a"],Input:m["a"],Wizard:h,TextHeader:i["a"],Tools:_["a"]},setup:function(){var e=Object(o["b"])(),t=e.t,r=Object(n["D"])(0),a=Object(n["D"])(""),c=Object(n["D"])("notifyme@myemail.com"),i=Object(n["f"])((function(){return[{title:t("depositPage.awaitingDeposit"),id:1,color:"246, 226, 102"},{title:t("depositPage.processing"),id:2,color:"212, 131, 67"},{title:t("depositPage.sending"),id:3,color:"68, 190, 73"}]})),l=[{icon:"copy",copyUrl:!0}],f=function(e){r.value=e};return{t:t,wizardSteps:i,currentStep:r,email:a,emailPlaceholder:c,tools:l,setCurrentStep:f}}};r("210c");E.render=c;t["default"]=E},"587e":function(e,t,r){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,r){var n=r("1d80"),a=r("5899"),c="["+a+"]",o=RegExp("^"+c+c+"*"),i=RegExp(c+c+"*$"),l=function(e){return function(t){var r=String(n(t));return 1&e&&(r=r.replace(o,"")),2&e&&(r=r.replace(i,"")),r}};e.exports={start:l(1),end:l(2),trim:l(3)}},6886:function(e,t,r){"use strict";r("ba74")},"6c97":function(e,t,r){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},"6e53":function(e,t,r){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},"8a15":function(e,t,r){"use strict";r("fce0")},9430:function(e,t,r){"use strict";var n=r("7a23"),a={class:"tools"};function c(e,t,r,c,o,i){return Object(n["y"])(),Object(n["h"])("section",a,[(Object(n["y"])(!0),Object(n["h"])(n["a"],null,Object(n["E"])(r.tools,(function(e,t){return Object(n["y"])(),Object(n["h"])("div",{key:t,class:["tools__tool",{"tools__tool-hover":!e.component}],onClick:function(t){return c.handleClick(e)}},[(Object(n["y"])(),Object(n["h"])(Object(n["I"])(e.component||"Icon"),{name:e.icon},null,8,["name"]))],10,["onClick"])})),128))])}r("d3b7"),r("3ca3"),r("ddb0");var o=r("6c02"),i=r("00a1"),l=r("3756"),f=[{icon:"bell",title:"Notifications",component:"notifications"},{icon:"per-cent",title:"Per cents",to:l["c"].FEE_SCHEDULE}],s={name:"Tools",components:{Icon:i["a"],Notifications:Object(n["l"])((function(){return r.e("chunk-601da48f").then(r.bind(null,"8cc6"))}))},props:{tools:{type:Array,default:function(){return f}}},setup:function(){var e=Object(o["d"])(),t=function(t){if(t.to)e.push({name:t.to});else if(t.copyUrl){var r=document.createElement("input"),n=window.location.href;document.body.appendChild(r),r.value=n,r.select(),document.execCommand("copy"),document.body.removeChild(r)}};return{handleClick:t}}};r("8a15");s.render=c;t["a"]=s},ac6b:function(e,t,r){"use strict";r("ca73")},aee8:function(e,t,r){"use strict";r("587e")},b65e:function(e,t,r){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},ba74:function(e,t,r){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},bb4a:function(e,t,r){"use strict";r("b65e")},c07e:function(e,t,r){"use strict";var n=r("6c97"),a=r.n(n);t["a"]=a.a},ca73:function(e,t,r){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},e9d5:function(e,t,r){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},ec23:function(e,t,r){"use strict";r("e9d5")},fce0:function(e,t,r){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}}}]);
//# sourceMappingURL=chunk-3b2e3f33.d6a68720.js.map