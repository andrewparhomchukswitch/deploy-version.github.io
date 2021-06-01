(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04fdc9d7"],{"2d29":function(t,e,i){t.exports={mobileMaxWidth:"768px",mobileMinWidth:"320px",mobileHeaderHeight:"52px",mobileMainWidth:"100%",desktopMinWidth:"1680px",desktopHeaderHeight:"80px",desktopMainWidth:"1680px",tabletMinWidth:"769px",tabletMaxWidth:"1680px",tabletHeaderHeight:"61px",tabletMainWidth:"1280px",primary:"#F7CE50",tprimary:"#000",default:"#fff",tdefault:"#000",bdefault:"rgba(0,0,0,0.1)",white:"#fff",twhite:"#000"}},3770:function(t,e,i){t.exports={mobileMaxWidth:"768px",mobileMinWidth:"320px",mobileHeaderHeight:"52px",mobileMainWidth:"100%",desktopMinWidth:"1680px",desktopHeaderHeight:"80px",desktopMainWidth:"1680px",tabletMinWidth:"769px",tabletMaxWidth:"1680px",tabletHeaderHeight:"61px",tabletMainWidth:"1280px",primary:"#F7CE50",tprimary:"#000",default:"#fff",tdefault:"#000",bdefault:"rgba(0,0,0,0.1)",white:"#fff",twhite:"#000"}},3932:function(t,e,i){"use strict";var a=i("7a23");function n(t,e,i,n,o,c){return Object(a["u"])(),Object(a["e"])("button",Object(a["n"])(t.$attrs,{class:"button",style:{"--button-background-color":n.StyleVariables[i.type],"--button-color":n.StyleVariables["t".concat(i.type)],"--button-border-color":n.StyleVariables["b".concat(i.type)],"--font-size":i.fontSize}}),[Object(a["z"])(t.$slots,"default")],16)}var o=i("cf1e"),c=i.n(o),r={name:"Button",inheritAttrs:!0,props:{buttonType:{type:String},type:{type:String,default:"default"},defaultPadding:{type:Boolean,default:!1},fontSize:{type:String,default:"16px"}},setup:function(){return{StyleVariables:c.a}}};i("b572");r.render=n;e["a"]=r},"3aa3":function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));i("b0c0");var a=i("6c02"),n=i("cdbc"),o=i("7a23"),c=i("3756"),r=function(){var t=Object(a["c"])(),e=Object(a["d"])(),i=Object(n["a"])(),r=i.breakpoints,l=Object(o["x"])("hello@feral.ae"),u=Object(o["x"])(!1),b=Object(o["w"])([{name:c["a"].ABOUT,title:"About"},{name:c["a"].PORTFOLIO,title:"Portfolio"}]),d=Object(o["c"])((function(){return t.name})),s=function(t){t.name&&e.push({name:t.name})},p=function(t){u.value=t},h=function(){window.location.href="mailto:mail@example.org"};return{routes:b,breakpoints:r,isShowEmail:u,activeRoute:d,contactEmail:l,linkClick:s,toggleShowEmail:p,onContactSupport:h}}},5353:function(t,e,i){"use strict";var a=i("7a23"),n={class:"footer"},o=Object(a["g"])(" Feral Technologies "),c={class:"footer__location"},r=Object(a["g"])("United Arab Emirates"),l=Object(a["h"])("div",{class:"footer__hr"},null,-1),u={class:"footer__social"};function b(t,e,i,b,d,s){var p=Object(a["A"])("Text"),h=Object(a["A"])("Icon");return Object(a["u"])(),Object(a["e"])("footer",n,[Object(a["h"])(p,{class:"footer__title"},{default:Object(a["H"])((function(){return[o]})),_:1}),Object(a["h"])("div",c,[Object(a["h"])(h,{name:"uae"}),Object(a["h"])(p,null,{default:Object(a["H"])((function(){return[r]})),_:1})]),l,Object(a["h"])("div",u,[(Object(a["u"])(!0),Object(a["e"])(a["a"],null,Object(a["y"])(b.socialList,(function(t){return Object(a["u"])(),Object(a["e"])(h,{key:t.key,name:t.icon,height:b.isTablet?null:"18px",width:b.isTablet?null:"18px",onClick:function(e){return b.onSocialClick(t)}},null,8,["name","height","width","onClick"])})),128))])])}var d=i("b7b4"),s=i("d86a"),p=i("cdbc"),h={name:"Footer",components:{Icon:s["a"],Text:d["a"]},setup:function(){var t=Object(p["a"])(),e=t.isTablet,i=[{key:"twitter",href:"https://twitter.com",icon:"twitter"},{key:"instagram",href:"https://www.instagram.com",icon:"instagram"},{key:"linkedin",href:"https://www.linkedin.com",icon:"linkedin"}],a=function(t){window.location.href=t.href};return{isTablet:e,socialList:i,onSocialClick:a}}};i("55cd");h.render=b;e["a"]=h},"55cd":function(t,e,i){"use strict";i("2d29")},6351:function(t,e,i){"use strict";i.r(e);var a=i("7a23"),n={class:"desktop-layout"},o={class:"desktop-layout__wrap"};function c(t,e,i,c,r,l){var u=Object(a["A"])("Header"),b=Object(a["A"])("Footer");return Object(a["u"])(),Object(a["e"])("div",n,[Object(a["h"])("div",o,[Object(a["h"])(u),Object(a["z"])(t.$slots,"default")]),Object(a["h"])(b)])}var r=i("bd61"),l=i("5353"),u={name:"DesktopLayout",components:{Footer:l["a"],Header:r["a"]}};i("c1c4");u.render=c;e["default"]=u},7949:function(t,e,i){t.exports={mobileMaxWidth:"768px",mobileMinWidth:"320px",mobileHeaderHeight:"52px",mobileMainWidth:"100%",desktopMinWidth:"1680px",desktopHeaderHeight:"80px",desktopMainWidth:"1680px",tabletMinWidth:"769px",tabletMaxWidth:"1680px",tabletHeaderHeight:"61px",tabletMainWidth:"1280px",primary:"#F7CE50",tprimary:"#000",default:"#fff",tdefault:"#000",bdefault:"rgba(0,0,0,0.1)",white:"#fff",twhite:"#000"}},b572:function(t,e,i){"use strict";i("dad2")},bd61:function(t,e,i){"use strict";i("b0c0");var a=i("7a23"),n={class:"header"},o={class:"header__logo"},c={class:"header__menu"},r=Object(a["h"])("div",{class:"header__menu__divider"},null,-1);function l(t,e,i,l,u,b){var d=Object(a["A"])("Icon"),s=Object(a["A"])("Text"),p=Object(a["A"])("Button");return Object(a["u"])(),Object(a["e"])("header",n,[Object(a["h"])("div",o,[Object(a["h"])(d,{name:"logo",width:"41px",height:"40px"}),Object(a["h"])(d,{name:"logo-title",width:"83px",height:"14px"})]),Object(a["h"])("div",c,[(Object(a["u"])(!0),Object(a["e"])(a["a"],null,Object(a["y"])(l.routes,(function(t){return Object(a["u"])(),Object(a["e"])(p,{key:t.name,type:l.activeRoute===t.name?"primary":"white",class:"header__menu__link",onClick:function(e){return l.linkClick(t)}},{default:Object(a["H"])((function(){return[Object(a["h"])(s,{weight:"700"},{default:Object(a["H"])((function(){return[Object(a["g"])(Object(a["D"])(t.title),1)]})),_:2},1024)]})),_:2},1032,["type","onClick"])})),128)),r,Object(a["h"])(p,{class:"header__menu__contact",onClick:l.onContactSupport,onMouseover:e[1]||(e[1]=function(t){return l.toggleShowEmail(!0)}),onMouseleave:e[2]||(e[2]=function(t){return l.toggleShowEmail(!1)})},{default:Object(a["H"])((function(){return[Object(a["I"])(Object(a["h"])(d,{name:"mail"},null,512),[[a["F"],!l.isShowEmail]]),Object(a["h"])(s,{weight:"700",ml:"12px"},{default:Object(a["H"])((function(){return[Object(a["g"])(Object(a["D"])(l.isShowEmail?l.contactEmail:"Contact"),1)]})),_:1})]})),_:1},8,["onClick"])])])}var u=i("d86a"),b=i("3932"),d=i("b7b4"),s=i("3aa3"),p=i("cdbc"),h={name:"Header",components:{Text:d["a"],Button:b["a"],Icon:u["a"]},setup:function(){var t=Object(s["a"])(),e=t.routes,i=t.breakpoints,a=t.isShowEmail,n=t.activeRoute,o=t.contactEmail,c=t.linkClick,r=t.toggleShowEmail,l=t.onContactSupport,u=Object(p["a"])(),b=u.isDesktop,d=u.isTablet;return{routes:e,isTablet:d,isDesktop:b,breakpoints:i,isShowEmail:a,activeRoute:n,contactEmail:o,linkClick:c,toggleShowEmail:r,onContactSupport:l}}};i("e9f8");h.render=l;e["a"]=h},c1c4:function(t,e,i){"use strict";i("3770")},dad2:function(t,e,i){t.exports={mobileMaxWidth:"768px",mobileMinWidth:"320px",mobileHeaderHeight:"52px",mobileMainWidth:"100%",desktopMinWidth:"1680px",desktopHeaderHeight:"80px",desktopMainWidth:"1680px",tabletMinWidth:"769px",tabletMaxWidth:"1680px",tabletHeaderHeight:"61px",tabletMainWidth:"1280px",primary:"#F7CE50",tprimary:"#000",default:"#fff",tdefault:"#000",bdefault:"rgba(0,0,0,0.1)",white:"#fff",twhite:"#000"}},e9f8:function(t,e,i){"use strict";i("7949")}}]);
//# sourceMappingURL=chunk-04fdc9d7.bf4c5459.js.map