(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04156245"],{"057f":function(t,e,i){var n=i("fc6a"),r=i("241c").f,o={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],f=function(t){try{return r(t)}catch(e){return c.slice()}};t.exports.f=function(t){return c&&"[object Window]"==o.call(t)?f(t):r(n(t))}},"36c1":function(t,e,i){"use strict";i("d7f8")},"5ef5":function(t,e,i){t.exports={primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",grey:"#E8EBED",darkGrey:"#3A4751"}},"746f":function(t,e,i){var n=i("428f"),r=i("5135"),o=i("e538"),c=i("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});r(e,t)||c(e,t,{value:o.f(t)})}},"8cc6":function(t,e,i){"use strict";i.r(e);i("a4d3"),i("e01a");var n=i("7a23"),r={class:"notifications"},o={class:"notifications__icon-count"},c={key:0,class:"notifications__body"};function f(t,e){var i=Object(n["z"])("Icon"),f=Object(n["z"])("NotificationItem"),a=Object(n["A"])("click-outside");return Object(n["I"])((Object(n["t"])(),Object(n["e"])("section",r,[Object(n["h"])("div",{class:"notifications__icon",onClick:e[1]||(e[1]=function(e){return t.showNotifications=!t.showNotifications})},[Object(n["h"])(i,{name:"bell"}),Object(n["h"])("div",o,Object(n["D"])(t.count),1)]),t.showNotifications?(Object(n["t"])(),Object(n["e"])("div",c,[(Object(n["t"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(t.notifications,(function(t){return Object(n["t"])(),Object(n["e"])(f,{key:t.title,title:t.title,description:t.description,active:t.active},null,8,["title","description","active"])})),128))])):Object(n["f"])("",!0)],512)),[[a,t.handleClickOutside]])}var a=i("00a1"),s=i("1a6c"),u={class:"notification__title"},l={class:"notification__description"};function d(t,e){return Object(n["t"])(),Object(n["e"])("div",{class:["notification",{"notification-active":t.active}]},[Object(n["h"])("h3",u,Object(n["D"])(t.title),1),Object(n["h"])("p",l,Object(n["D"])(t.description),1)],2)}var b={name:"NotificationItem",props:{title:{type:String,default:""},description:{type:String,default:""},active:{type:Boolean,default:!0}}};i("bef5");b.render=d;var p=b,y={name:"Notifications",components:{Icon:a["a"],NotificationItem:p},directives:{clickOutside:s["a"]},setup:function(){var t=Object(n["w"])(!1),e=Object(n["w"])(1),i=Object(n["w"])([{id:1,title:"Merry Christmas!",description:"Fees reduced to 1% till the 30th of December",active:!0},{id:2,title:"Merry Christmas!",description:"Fees reduced to 1% till the 30th of December",active:!1},{id:3,title:"Merry Christmas!",description:"Fees reduced to 1% till the 30th of December",active:!1}]),r=function(){t.value=!1};return{showNotifications:t,count:e,notifications:i,handleClickOutside:r}}};i("36c1");y.render=f;e["default"]=y},a4d3:function(t,e,i){"use strict";var n=i("23e7"),r=i("da84"),o=i("d066"),c=i("c430"),f=i("83ab"),a=i("4930"),s=i("fdbf"),u=i("d039"),l=i("5135"),d=i("e8b5"),b=i("861d"),p=i("825a"),y=i("7b0b"),v=i("fc6a"),h=i("c04e"),O=i("5c6c"),m=i("7c73"),g=i("df75"),j=i("241c"),w=i("057f"),S=i("7418"),k=i("06cf"),F=i("9bf2"),N=i("d1e7"),E=i("9112"),D=i("6eeb"),_=i("5692"),P=i("f772"),C=i("d012"),I=i("90e3"),x=i("b622"),J=i("e538"),A=i("746f"),B=i("d44e"),M=i("69f3"),z=i("b727").forEach,G=P("hidden"),T="Symbol",$="prototype",Q=x("toPrimitive"),W=M.set,q=M.getterFor(T),H=Object[$],K=r.Symbol,L=o("JSON","stringify"),R=k.f,U=F.f,V=w.f,X=N.f,Y=_("symbols"),Z=_("op-symbols"),tt=_("string-to-symbol-registry"),et=_("symbol-to-string-registry"),it=_("wks"),nt=r.QObject,rt=!nt||!nt[$]||!nt[$].findChild,ot=f&&u((function(){return 7!=m(U({},"a",{get:function(){return U(this,"a",{value:7}).a}})).a}))?function(t,e,i){var n=R(H,e);n&&delete H[e],U(t,e,i),n&&t!==H&&U(H,e,n)}:U,ct=function(t,e){var i=Y[t]=m(K[$]);return W(i,{type:T,tag:t,description:e}),f||(i.description=e),i},ft=s?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof K},at=function(t,e,i){t===H&&at(Z,e,i),p(t);var n=h(e,!0);return p(i),l(Y,n)?(i.enumerable?(l(t,G)&&t[G][n]&&(t[G][n]=!1),i=m(i,{enumerable:O(0,!1)})):(l(t,G)||U(t,G,O(1,{})),t[G][n]=!0),ot(t,n,i)):U(t,n,i)},st=function(t,e){p(t);var i=v(e),n=g(i).concat(pt(i));return z(n,(function(e){f&&!lt.call(i,e)||at(t,e,i[e])})),t},ut=function(t,e){return void 0===e?m(t):st(m(t),e)},lt=function(t){var e=h(t,!0),i=X.call(this,e);return!(this===H&&l(Y,e)&&!l(Z,e))&&(!(i||!l(this,e)||!l(Y,e)||l(this,G)&&this[G][e])||i)},dt=function(t,e){var i=v(t),n=h(e,!0);if(i!==H||!l(Y,n)||l(Z,n)){var r=R(i,n);return!r||!l(Y,n)||l(i,G)&&i[G][n]||(r.enumerable=!0),r}},bt=function(t){var e=V(v(t)),i=[];return z(e,(function(t){l(Y,t)||l(C,t)||i.push(t)})),i},pt=function(t){var e=t===H,i=V(e?Z:v(t)),n=[];return z(i,(function(t){!l(Y,t)||e&&!l(H,t)||n.push(Y[t])})),n};if(a||(K=function(){if(this instanceof K)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=I(t),i=function(t){this===H&&i.call(Z,t),l(this,G)&&l(this[G],e)&&(this[G][e]=!1),ot(this,e,O(1,t))};return f&&rt&&ot(H,e,{configurable:!0,set:i}),ct(e,t)},D(K[$],"toString",(function(){return q(this).tag})),D(K,"withoutSetter",(function(t){return ct(I(t),t)})),N.f=lt,F.f=at,k.f=dt,j.f=w.f=bt,S.f=pt,J.f=function(t){return ct(x(t),t)},f&&(U(K[$],"description",{configurable:!0,get:function(){return q(this).description}}),c||D(H,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!a,sham:!a},{Symbol:K}),z(g(it),(function(t){A(t)})),n({target:T,stat:!0,forced:!a},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var i=K(e);return tt[e]=i,et[i]=e,i},keyFor:function(t){if(!ft(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){rt=!0},useSimple:function(){rt=!1}}),n({target:"Object",stat:!0,forced:!a,sham:!f},{create:ut,defineProperty:at,defineProperties:st,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!a},{getOwnPropertyNames:bt,getOwnPropertySymbols:pt}),n({target:"Object",stat:!0,forced:u((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(y(t))}}),L){var yt=!a||u((function(){var t=K();return"[null]"!=L([t])||"{}"!=L({a:t})||"{}"!=L(Object(t))}));n({target:"JSON",stat:!0,forced:yt},{stringify:function(t,e,i){var n,r=[t],o=1;while(arguments.length>o)r.push(arguments[o++]);if(n=e,(b(e)||void 0!==t)&&!ft(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!ft(e))return e}),r[1]=e,L.apply(null,r)}})}K[$][Q]||E(K[$],Q,K[$].valueOf),B(K,T),C[G]=!0},bef5:function(t,e,i){"use strict";i("5ef5")},d7f8:function(t,e,i){t.exports={primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",grey:"#E8EBED",darkGrey:"#3A4751"}},e01a:function(t,e,i){"use strict";var n=i("23e7"),r=i("83ab"),o=i("da84"),c=i("5135"),f=i("861d"),a=i("9bf2").f,s=i("e893"),u=o.Symbol;if(r&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new u(t):void 0===t?u():u(t);return""===t&&(l[e]=!0),e};s(d,u);var b=d.prototype=u.prototype;b.constructor=d;var p=b.toString,y="Symbol(test)"==String(u("test")),v=/^Symbol\((.*)\)[^)]+$/;a(b,"description",{configurable:!0,get:function(){var t=f(this)?this.valueOf():this,e=p.call(t);if(c(l,t))return"";var i=y?e.slice(7,-1):e.replace(v,"$1");return""===i?void 0:i}}),n({global:!0,forced:!0},{Symbol:d})}},e538:function(t,e,i){var n=i("b622");e.f=n}}]);
//# sourceMappingURL=chunk-04156245.d548dbf0.js.map