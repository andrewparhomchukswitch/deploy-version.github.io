(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-816a299a"],{"08e8":function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var n=a("7a23"),r=function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(t){return t},r=Object(n["e"])({get:function(){return t.modelValue},set:function(t){e("update:modelValue",a(t))}});return{value:r}}},"334b":function(t,e,a){"use strict";var n=a("7a23"),r={key:0,class:"input__prepend"},o={class:"input__body"},i={class:"input__body-label"},c={key:1,class:"input__append"},s={key:2,class:"input__error-text"};function l(t,e,a,l,u,f){var d=Object(n["F"])("Container");return Object(n["x"])(),Object(n["g"])(d,{variant:"label",class:["input",{input__error:a.error,"input__read-only":a.readOnly,"input__hide-shadow":a.hideShadow||a.readOnly}]},{default:Object(n["Q"])((function(){return[t.$slots.prepend?(Object(n["x"])(),Object(n["g"])("div",r,[Object(n["E"])(t.$slots,"prepend")])):Object(n["h"])("",!0),Object(n["j"])("div",o,[Object(n["j"])("span",i,Object(n["J"])(a.label),1),Object(n["R"])(Object(n["j"])("input",{class:["input__body-field",{"input__body-field__opacity":a.opacity}],readonly:a.readOnly,disabled:a.disabled,type:a.type,"onUpdate:modelValue":e[1]||(e[1]=function(t){return l.inputValue=t}),placeholder:a.placeholder,onBlur:e[2]||(e[2]=function(e){return t.$emit("blur")})},null,42,["readonly","disabled","type","placeholder"]),[[n["M"],l.inputValue]])]),t.$slots.append?(Object(n["x"])(),Object(n["g"])("div",c,[Object(n["E"])(t.$slots,"append")])):Object(n["h"])("",!0),a.errorText&&a.error?(Object(n["x"])(),Object(n["g"])("div",s,Object(n["J"])(a.errorText),1)):Object(n["h"])("",!0)]})),_:1},8,["class"])}a("a9e3");var u=a("185a"),f=a("08e8"),d={name:"Input",components:{Container:u["a"]},emits:["update:modelValue","blur"],inheritAttrs:!0,props:{type:{type:String,default:"text"},label:{type:String,default:""},modelValue:{type:[String,Number],default:""},placeholder:{type:String,default:""},errorText:{type:String,default:""},error:{type:Boolean,default:!1},readOnly:{type:Boolean,default:!1},opacity:{type:Boolean,default:!1},hideShadow:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},setup:function(t,e){var a=e.emit,n=Object(f["a"])(t,a),r=n.value;return{inputValue:r}}};a("5c41");d.render=l;e["a"]=d},"5c41":function(t,e,a){"use strict";a("dded")},6627:function(t,e,a){t.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},6773:function(t,e,a){t.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},"6b1b":function(t,e,a){t.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},"804e":function(t,e,a){"use strict";a("6773")},"957b":function(t,e,a){"use strict";a.r(e);var n=a("7a23"),r={class:"faq-aml"},o={class:"faq-aml__header"};function i(t,e,a,i,c,s){return Object(n["x"])(),Object(n["g"])("section",r,[Object(n["j"])("div",o,[Object(n["j"])("h1",{onClick:e[1]||(e[1]=function(t){return i.changeActiveComponent("faq")}),class:[{active:"faq"===i.activeTabComponent},"faq-aml__header__title"]},Object(n["J"])(i.t("faqAml.faq")),3),Object(n["j"])("h1",{onClick:e[2]||(e[2]=function(t){return i.changeActiveComponent("aml")}),class:[{active:"aml"===i.activeTabComponent},"faq-aml__header__title"]},Object(n["J"])(i.t("faqAml.aml")),3)]),(Object(n["x"])(),Object(n["g"])(n["b"],null,[(Object(n["x"])(),Object(n["g"])(Object(n["H"])(i.activeTabComponent)))],1024))])}var c=a("47e2"),s={class:"faq"},l={class:"faq__item"},u={class:"faq__show__groupe"},f={class:"faq__show__title"},d={class:"faq__show__text"};function p(t,e,a,r,o,i){var c=Object(n["F"])("Icon"),p=Object(n["F"])("Input"),y=Object(n["F"])("Container");return Object(n["x"])(),Object(n["g"])("section",s,[Object(n["j"])(p,{placeholder:r.t("faq.placeholder"),opacity:!0},{prepend:Object(n["Q"])((function(){return[Object(n["j"])(c,{class:"deposit-page__email-notify-bell",name:"search"})]})),_:1},8,["placeholder"]),(Object(n["x"])(!0),Object(n["g"])(n["a"],null,Object(n["D"])(r.faqData,(function(t){return Object(n["x"])(),Object(n["g"])("div",{key:t.title,class:["faq__list",{"faq__list__off-shadow":t.isShow}]},[Object(n["R"])(Object(n["j"])("div",l,[Object(n["j"])("h2",null,Object(n["J"])(t.title),1),Object(n["j"])(c,{class:"faq__item__plus",name:"plus",onClick:function(e){return t.isShow=!0}},null,8,["onClick"])],512),[[n["O"],!t.isShow]]),Object(n["R"])(Object(n["j"])(y,{class:"faq__show"},{default:Object(n["Q"])((function(){return[Object(n["j"])("div",u,[Object(n["j"])("h2",f,Object(n["J"])(t.title),1),Object(n["j"])(c,{class:"faq__show__close",name:"close",onClick:function(e){return t.isShow=!1}},null,8,["onClick"])]),Object(n["j"])("p",d,Object(n["J"])(t.text),1)]})),_:2},1536),[[n["O"],t.isShow]])],2)})),128))])}var y=a("334b"),b=a("00a1"),h=a("185a"),j={name:"Faq",components:{Container:h["a"],Input:y["a"],Icon:b["a"]},setup:function(){var t=Object(c["b"])(),e=t.t,a=Object(n["C"])([{title:"About forwarding limits",text:"When you want to sign into your account, you are prompted to authenticate with a username and a password – that’s the first verification layer.\n          Two-factor authentication works as an extra step in the process, a second security layer, that will reconfirm your identity.",isShow:!1},{title:"Using two-step verification",text:"When you want to sign into your account, you are prompted to authenticate with a username and a password – that’s the first verification layer.\n          Two-factor authentication works as an extra step in the process, a second security layer, that will reconfirm your identity.",isShow:!1},{title:"Usage of your phone number and address book",text:"When you want to sign into your account, you are prompted to authenticate with a username and a password – that’s the first verification layer.\n          Two-factor authentication works as an extra step in the process, a second security layer, that will reconfirm your identity.",isShow:!1},{title:"Use strong password",text:"When you want to sign into your account, you are prompted to authenticate with a username and a password – that’s the first verification layer.\n          Two-factor authentication works as an extra step in the process, a second security layer, that will reconfirm your identity.",isShow:!1},{title:"End-to-end encryption for business messages",text:"When you want to sign into your account, you are prompted to authenticate with a username and a password – that’s the first verification layer.\n          Two-factor authentication works as an extra step in the process, a second security layer, that will reconfirm your identity.",isShow:!1},{title:"How to link and use the security key",text:"When you want to sign into your account, you are prompted to authenticate with a username and a password – that’s the first verification layer.\n          Two-factor authentication works as an extra step in the process, a second security layer, that will reconfirm your identity.",isShow:!1}]);return{t:e,faqData:a}}};a("a7cf");j.render=p;var m=j,O={class:"aml"},_={class:"aml__description-item"},w={class:"aml__description-item"};function g(t,e,a,r,o,i){return Object(n["x"])(),Object(n["g"])("section",O,[Object(n["j"])("p",_,Object(n["J"])(r.t("aml.descriptionFirstItem")),1),Object(n["j"])("p",w,Object(n["J"])(r.t("aml.descriptionSecondItem")),1)])}var v={name:"Aml",setup:function(){var t=Object(c["b"])(),e=t.t;return{t:e}}};a("9814");v.render=g;var x=v,E={name:"FaqAndAml",components:{faq:m,Aml:x},setup:function(){var t=Object(c["b"])(),e=t.t,a=Object(n["C"])("faq"),r=function(t){a.value=t};return{t:e,activeTabComponent:a,changeActiveComponent:r}}};a("804e");E.render=i;e["default"]=E},9814:function(t,e,a){"use strict";a("6b1b")},a7cf:function(t,e,a){"use strict";a("6627")},dded:function(t,e,a){t.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}}}]);
//# sourceMappingURL=chunk-816a299a.69527ad6.js.map