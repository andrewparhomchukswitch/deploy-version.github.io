(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79123e46"],{"2d29":function(t,e,i){t.exports={mobileMaxWidth:"768px",mobileMinWidth:"320px",mobileHeaderHeight:"52px",mobileMainWidth:"100%",desktopMinWidth:"1680px",desktopHeaderHeight:"80px",desktopMainWidth:"1680px",tabletMinWidth:"769px",tabletMaxWidth:"1680px",tabletHeaderHeight:"61px",tabletMainWidth:"1280px",primary:"#F7CE50",tprimary:"#000",default:"#fff",tdefault:"#000",bdefault:"rgba(0,0,0,0.1)",white:"#fff",twhite:"#000"}},3932:function(t,e,i){"use strict";var a=i("7a23");function n(t,e,i,n,o,c){return Object(a["u"])(),Object(a["e"])("button",Object(a["n"])(t.$attrs,{class:"button",style:{"--button-background-color":n.StyleVariables[i.type],"--button-color":n.StyleVariables["t".concat(i.type)],"--button-border-color":n.StyleVariables["b".concat(i.type)],"--font-size":i.fontSize}}),[Object(a["z"])(t.$slots,"default")],16)}var o=i("cf1e"),c=i.n(o),r={name:"Button",inheritAttrs:!0,props:{buttonType:{type:String},type:{type:String,default:"default"},defaultPadding:{type:Boolean,default:!1},fontSize:{type:String,default:"16px"}},setup:function(){return{StyleVariables:c.a}}};i("b572");r.render=n;e["a"]=r},"3aa3":function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));i("b0c0");var a=i("6c02"),n=i("cdbc"),o=i("7a23"),c=i("3756"),r=function(){var t=Object(a["c"])(),e=Object(a["d"])(),i=Object(n["a"])(),r=i.breakpoints,l=Object(o["x"])("hello@feral.ae"),b=Object(o["x"])(!1),u=Object(o["w"])([{name:c["a"].ABOUT,title:"About"},{name:c["a"].PORTFOLIO,title:"Portfolio"}]),d=Object(o["c"])((function(){return t.name})),s=function(t){t.name&&e.push({name:t.name})},h=function(t){b.value=t},p=function(){window.location.href="mailto:mail@example.org"};return{routes:u,breakpoints:r,isShowEmail:b,activeRoute:d,contactEmail:l,linkClick:s,toggleShowEmail:h,onContactSupport:p}}},"44aa":function(t,e,i){t.exports={mobileMaxWidth:"768px",mobileMinWidth:"320px",mobileHeaderHeight:"52px",mobileMainWidth:"100%",desktopMinWidth:"1680px",desktopHeaderHeight:"80px",desktopMainWidth:"1680px",tabletMinWidth:"769px",tabletMaxWidth:"1680px",tabletHeaderHeight:"61px",tabletMainWidth:"1280px",primary:"#F7CE50",tprimary:"#000",default:"#fff",tdefault:"#000",bdefault:"rgba(0,0,0,0.1)",white:"#fff",twhite:"#000"}},5353:function(t,e,i){"use strict";var a=i("7a23"),n={class:"footer"},o=Object(a["g"])(" Feral Technologies "),c={class:"footer__location"},r=Object(a["g"])("United Arab Emirates"),l=Object(a["h"])("div",{class:"footer__hr"},null,-1),b={class:"footer__social"};function u(t,e,i,u,d,s){var h=Object(a["A"])("Text"),p=Object(a["A"])("Icon");return Object(a["u"])(),Object(a["e"])("footer",n,[Object(a["h"])(h,{class:"footer__title"},{default:Object(a["H"])((function(){return[o]})),_:1}),Object(a["h"])("div",c,[Object(a["h"])(p,{name:"uae"}),Object(a["h"])(h,null,{default:Object(a["H"])((function(){return[r]})),_:1})]),l,Object(a["h"])("div",b,[(Object(a["u"])(!0),Object(a["e"])(a["a"],null,Object(a["y"])(u.socialList,(function(t){return Object(a["u"])(),Object(a["e"])(p,{key:t.key,name:t.icon,height:u.isTablet?null:"18px",width:u.isTablet?null:"18px",onClick:function(e){return u.onSocialClick(t)}},null,8,["name","height","width","onClick"])})),128))])])}var d=i("b7b4"),s=i("d86a"),h=i("cdbc"),p={name:"Footer",components:{Icon:s["a"],Text:d["a"]},setup:function(){var t=Object(h["a"])(),e=t.isTablet,i=[{key:"twitter",href:"https://twitter.com",icon:"twitter"},{key:"instagram",href:"https://www.instagram.com",icon:"instagram"},{key:"linkedin",href:"https://www.linkedin.com",icon:"linkedin"}],a=function(t){window.location.href=t.href};return{isTablet:e,socialList:i,onSocialClick:a}}};i("55cd");p.render=u;e["a"]=p},"55cd":function(t,e,i){"use strict";i("2d29")},7949:function(t,e,i){t.exports={mobileMaxWidth:"768px",mobileMinWidth:"320px",mobileHeaderHeight:"52px",mobileMainWidth:"100%",desktopMinWidth:"1680px",desktopHeaderHeight:"80px",desktopMainWidth:"1680px",tabletMinWidth:"769px",tabletMaxWidth:"1680px",tabletHeaderHeight:"61px",tabletMainWidth:"1280px",primary:"#F7CE50",tprimary:"#000",default:"#fff",tdefault:"#000",bdefault:"rgba(0,0,0,0.1)",white:"#fff",twhite:"#000"}},b572:function(t,e,i){"use strict";i("dad2")},bb55:function(t,e,i){"use strict";i("44aa")},bd61:function(t,e,i){"use strict";i("b0c0");var a=i("7a23"),n={class:"header"},o={class:"header__logo"},c={class:"header__menu"},r=Object(a["h"])("div",{class:"header__menu__divider"},null,-1);function l(t,e,i,l,b,u){var d=Object(a["A"])("Icon"),s=Object(a["A"])("Text"),h=Object(a["A"])("Button");return Object(a["u"])(),Object(a["e"])("header",n,[Object(a["h"])("div",o,[Object(a["h"])(d,{name:"logo",width:"41px",height:"40px"}),Object(a["h"])(d,{name:"logo-title",width:"83px",height:"14px"})]),Object(a["h"])("div",c,[(Object(a["u"])(!0),Object(a["e"])(a["a"],null,Object(a["y"])(l.routes,(function(t){return Object(a["u"])(),Object(a["e"])(h,{key:t.name,type:l.activeRoute===t.name?"primary":"white",class:"header__menu__link",onClick:function(e){return l.linkClick(t)}},{default:Object(a["H"])((function(){return[Object(a["h"])(s,{weight:"700"},{default:Object(a["H"])((function(){return[Object(a["g"])(Object(a["D"])(t.title),1)]})),_:2},1024)]})),_:2},1032,["type","onClick"])})),128)),r,Object(a["h"])(h,{class:"header__menu__contact",onClick:l.onContactSupport,onMouseover:e[1]||(e[1]=function(t){return l.toggleShowEmail(!0)}),onMouseleave:e[2]||(e[2]=function(t){return l.toggleShowEmail(!1)})},{default:Object(a["H"])((function(){return[Object(a["I"])(Object(a["h"])(d,{name:"mail"},null,512),[[a["F"],!l.isShowEmail]]),Object(a["h"])(s,{weight:"700",ml:"12px"},{default:Object(a["H"])((function(){return[Object(a["g"])(Object(a["D"])(l.isShowEmail?l.contactEmail:"Contact"),1)]})),_:1})]})),_:1},8,["onClick"])])])}var b=i("d86a"),u=i("3932"),d=i("b7b4"),s=i("3aa3"),h=i("cdbc"),p={name:"Header",components:{Text:d["a"],Button:u["a"],Icon:b["a"]},setup:function(){var t=Object(s["a"])(),e=t.routes,i=t.breakpoints,a=t.isShowEmail,n=t.activeRoute,o=t.contactEmail,c=t.linkClick,r=t.toggleShowEmail,l=t.onContactSupport,b=Object(h["a"])(),u=b.isDesktop,d=b.isTablet;return{routes:e,isTablet:d,isDesktop:u,breakpoints:i,isShowEmail:a,activeRoute:n,contactEmail:o,linkClick:c,toggleShowEmail:r,onContactSupport:l}}};i("e9f8");p.render=l;e["a"]=p},dad2:function(t,e,i){t.exports={mobileMaxWidth:"768px",mobileMinWidth:"320px",mobileHeaderHeight:"52px",mobileMainWidth:"100%",desktopMinWidth:"1680px",desktopHeaderHeight:"80px",desktopMainWidth:"1680px",tabletMinWidth:"769px",tabletMaxWidth:"1680px",tabletHeaderHeight:"61px",tabletMainWidth:"1280px",primary:"#F7CE50",tprimary:"#000",default:"#fff",tdefault:"#000",bdefault:"rgba(0,0,0,0.1)",white:"#fff",twhite:"#000"}},e9f8:function(t,e,i){"use strict";i("7949")},ffe3:function(t,e,i){"use strict";i.r(e);var a=i("7a23"),n={class:"tablet-layout"},o={class:"tablet-layout__wrap"};function c(t,e,i,c,r,l){var b=Object(a["A"])("Header"),u=Object(a["A"])("Footer");return Object(a["u"])(),Object(a["e"])("div",n,[Object(a["h"])("div",o,[Object(a["h"])(b),Object(a["z"])(t.$slots,"default")]),Object(a["h"])(u)])}var r=i("bd61"),l=i("5353"),b={name:"TabletLayout",components:{Footer:l["a"],Header:r["a"]}};i("bb55");b.render=c;e["default"]=b}}]);
//# sourceMappingURL=chunk-79123e46.93057485.js.map