(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-37fc5b71"],{"0444":function(t,e,a){t.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},"0fe1":function(t,e,a){"use strict";a("9281")},"185a":function(t,e,a){"use strict";var r=a("7a23");function n(t,e,a,n,o,i){return Object(r["y"])(),Object(r["h"])(Object(r["I"])(a.variant),{class:[{container__boxShadow:a.boxShadow,container__muted:a.muted,container__border:a.bordered,container__active:a.active},"container"],style:{"--border-radius":a.radius,"--bg":a.backgroundColor}},{default:Object(r["S"])((function(){return[Object(r["F"])(t.$slots,"default")]})),_:3},8,["class","style"])}var o={name:"Container",props:{variant:{type:String,default:"div"},boxShadow:{type:Boolean,default:!1},muted:{type:Boolean,default:!1},active:{type:Boolean,default:!1},bordered:{type:Boolean,default:!1},radius:{type:String,default:"6px"},backgroundColor:{type:String,default:"transparent"}}};a("6886");o.render=n;e["a"]=o},"334b":function(t,e,a){"use strict";var r=a("7a23"),n={key:0,class:"input__prepend"},o={class:"input__body"},i={class:"input__body-label"},c={class:"input__body__field"},s={key:1,class:"input__append"},f={key:2,class:"input__error-text"};function l(t,e,a,l,u,d){var p=Object(r["G"])("Container");return Object(r["y"])(),Object(r["h"])(p,{bordered:"","box-shadow":"",variant:"label",class:["input",{input__error:a.error,"input__read-only":a.readOnly,"input__hide-shadow":a.hideShadow||a.readOnly}],style:{"--opacity":a.fullOpacity}},{default:Object(r["S"])((function(){return[t.$slots.prepend?(Object(r["y"])(),Object(r["h"])("div",n,[Object(r["F"])(t.$slots,"prepend")])):Object(r["i"])("",!0),Object(r["k"])("div",o,[Object(r["k"])("span",i,Object(r["K"])(a.label),1),Object(r["k"])("div",c,[l.showPlaceholder?(Object(r["y"])(),Object(r["h"])("span",{key:0,class:"input__body__field-placeholder",style:a.placeholderStyles},Object(r["K"])(a.placeholder),5)):Object(r["i"])("",!0),Object(r["T"])(Object(r["k"])("input",{class:["input__body__field-input",{"input__body-field__opacity":a.opacity}],readonly:a.readOnly,disabled:a.disabled,type:a.type,"onUpdate:modelValue":e[1]||(e[1]=function(t){return l.inputValue=t}),onBlur:e[2]||(e[2]=function(e){return t.$emit("blur")})},null,42,["readonly","disabled","type"]),[[r["N"],l.inputValue]])])]),t.$slots.append?(Object(r["y"])(),Object(r["h"])("div",s,[Object(r["F"])(t.$slots,"append")])):Object(r["i"])("",!0),a.errorText&&a.error?(Object(r["y"])(),Object(r["h"])("div",f,Object(r["K"])(a.errorText),1)):Object(r["i"])("",!0)]})),_:1},8,["class","style"])}a("a9e3");var u=a("185a"),d={name:"Input",components:{Container:u["a"]},emits:["update:modelValue","blur"],inheritAttrs:!0,props:{type:{type:String,default:"text"},label:{type:String,default:""},modelValue:{type:[String,Number],default:""},placeholder:{type:String,default:""},placeholderStyles:{type:Object,default:function(){return{}}},errorText:{type:String,default:""},error:{type:Boolean,default:!1},readOnly:{type:Boolean,default:!1},opacity:{type:Boolean,default:!1},fullOpacity:{type:[Number,String],default:1},hideShadow:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},setup:function(t,e){var a=e.emit,n=Object(r["f"])({get:function(){return t.modelValue},set:function(t){a("update:modelValue",t)}}),o=Object(r["f"])((function(){return!n.value}));return{showPlaceholder:o,inputValue:n}}};a("bb4a");d.render=l;e["a"]=d},"3a90":function(t,e,a){"use strict";a("0444")},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var r=a("1d80"),n=a("5899"),o="["+n+"]",i=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),s=function(t){return function(e){var a=String(r(e));return 1&t&&(a=a.replace(i,"")),2&t&&(a=a.replace(c,"")),a}};t.exports={start:s(1),end:s(2),trim:s(3)}},6886:function(t,e,a){"use strict";a("ba74")},"6b1b":function(t,e,a){t.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},9281:function(t,e,a){t.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},"957b":function(t,e,a){"use strict";a.r(e);var r=a("7a23"),n={class:"faq-aml"},o={class:"faq-aml__header"};function i(t,e,a,i,c,s){return Object(r["y"])(),Object(r["h"])("section",n,[Object(r["k"])("div",o,[Object(r["k"])("h1",{onClick:e[1]||(e[1]=function(t){return i.changeActiveComponent("faq")}),class:[{active:"faq"===i.activeTabComponent},"faq-aml__header__title"]},Object(r["K"])(i.t("faqAml.faq")),3),Object(r["k"])("h1",{onClick:e[2]||(e[2]=function(t){return i.changeActiveComponent("aml")}),class:[{active:"aml"===i.activeTabComponent},"faq-aml__header__title"]},Object(r["K"])(i.t("faqAml.aml")),3)]),(Object(r["y"])(),Object(r["h"])(r["b"],null,[(Object(r["y"])(),Object(r["h"])(Object(r["I"])(i.activeTabComponent)))],1024))])}var c=a("47e2"),s={class:"faq"},f={class:"faq__item"},l={class:"faq__show__group"},u={class:"faq__show__title"},d={class:"faq__show__text"};function p(t,e,a,n,o,i){var c=Object(r["G"])("Icon"),p=Object(r["G"])("Input"),y=Object(r["G"])("Container");return Object(r["y"])(),Object(r["h"])("section",s,[Object(r["k"])(p,{placeholder:n.t("faq.placeholder"),opacity:!0,class:"faq__search"},{prepend:Object(r["S"])((function(){return[Object(r["k"])(c,{class:"deposit-page__email-notify-bell",name:"search"})]})),_:1},8,["placeholder"]),(Object(r["y"])(!0),Object(r["h"])(r["a"],null,Object(r["E"])(n.faqData,(function(t){return Object(r["y"])(),Object(r["h"])("div",{key:t.title,class:["faq__list",{"faq__list__off-shadow":t.isShow}]},[Object(r["T"])(Object(r["k"])("div",f,[Object(r["k"])("h2",null,Object(r["K"])(t.title),1),Object(r["k"])(c,{class:"faq__item__plus",name:"plus",onClick:function(e){return t.isShow=!0}},null,8,["onClick"])],512),[[r["P"],!t.isShow]]),Object(r["T"])(Object(r["k"])(y,{muted:"",radius:"0",class:"faq__show"},{default:Object(r["S"])((function(){return[Object(r["k"])("div",l,[Object(r["k"])("h2",u,Object(r["K"])(t.title),1),Object(r["k"])(c,{class:"faq__show__close",name:"close",onClick:function(e){return t.isShow=!1}},null,8,["onClick"])]),Object(r["k"])("p",d,Object(r["K"])(t.text),1)]})),_:2},1536),[[r["P"],t.isShow]])],2)})),128))])}var y=a("334b"),b=a("00a1"),h=a("185a"),m={name:"Faq",components:{Container:h["a"],Input:y["a"],Icon:b["a"]},setup:function(){var t=Object(c["b"])(),e=t.t,a=Object(r["D"])([{title:"About forwarding limits",text:"When you want to sign into your account, you are prompted to authenticate with a username and a password – that’s the first verification layer.\n          Two-factor authentication works as an extra step in the process, a second security layer, that will reconfirm your identity.",isShow:!1},{title:"Using two-step verification",text:"When you want to sign into your account, you are prompted to authenticate with a username and a password – that’s the first verification layer.\n          Two-factor authentication works as an extra step in the process, a second security layer, that will reconfirm your identity.",isShow:!1},{title:"Usage of your phone number and address book",text:"When you want to sign into your account, you are prompted to authenticate with a username and a password – that’s the first verification layer.\n          Two-factor authentication works as an extra step in the process, a second security layer, that will reconfirm your identity.",isShow:!1},{title:"Use strong password",text:"When you want to sign into your account, you are prompted to authenticate with a username and a password – that’s the first verification layer.\n          Two-factor authentication works as an extra step in the process, a second security layer, that will reconfirm your identity.",isShow:!1},{title:"End-to-end encryption for business messages",text:"When you want to sign into your account, you are prompted to authenticate with a username and a password – that’s the first verification layer.\n          Two-factor authentication works as an extra step in the process, a second security layer, that will reconfirm your identity.",isShow:!1},{title:"How to link and use the security key",text:"When you want to sign into your account, you are prompted to authenticate with a username and a password – that’s the first verification layer.\n          Two-factor authentication works as an extra step in the process, a second security layer, that will reconfirm your identity.",isShow:!1}]);return{t:e,faqData:a}}};a("3a90");m.render=p;var _=m,O={class:"aml"},j={class:"aml__description-item"},w={class:"aml__description-item"};function g(t,e,a,n,o,i){return Object(r["y"])(),Object(r["h"])("section",O,[Object(r["k"])("p",j,Object(r["K"])(n.t("aml.descriptionFirstItem")),1),Object(r["k"])("p",w,Object(r["K"])(n.t("aml.descriptionSecondItem")),1)])}var k={name:"Aml",setup:function(){var t=Object(c["b"])(),e=t.t;return{t:e}}};a("9814");k.render=g;var v=k,E={name:"FaqAndAml",components:{faq:_,Aml:v},setup:function(){var t=Object(c["b"])(),e=t.t,a=Object(r["D"])("faq"),n=function(t){a.value=t};return{t:e,activeTabComponent:a,changeActiveComponent:n}}};a("0fe1");E.render=i;e["default"]=E},9814:function(t,e,a){"use strict";a("6b1b")},b65e:function(t,e,a){t.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},ba74:function(t,e,a){t.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},bb4a:function(t,e,a){"use strict";a("b65e")}}]);
//# sourceMappingURL=chunk-37fc5b71.73ccfc9f.js.map