(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/negro-fill.59b7f4a4.svg"},20:function(e,t,a){e.exports=a.p+"static/media/fill-1.9f706432.svg"},21:function(e,t,a){e.exports=a.p+"static/media/gray.99ca4403.svg"},22:function(e,t,a){e.exports=a.p+"static/media/logo.a6729c90.svg"},23:function(e,t,a){e.exports=a.p+"static/media/fill-2.f30a5183.svg"},24:function(e,t,a){e.exports=a(43)},29:function(e,t,a){},31:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),c=a.n(r),i=a(7),s=a(1),o=a(6),m=(a(29),a(11)),u=a.n(m),g=a(17),d=function(e){var t=Object(n.useState)(null),a=Object(o.a)(t,2),l=a[0],r=a[1];return Object(n.useEffect)((function(){var t=!0;function a(){return(a=Object(g.a)(u.a.mark((function e(t){var a,n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t&&(a=t||""),e.next=4,fetch("https://challenge.agenciaego.tech/models/".concat(a||""));case 4:return n=e.sent,e.next=7,n.json();case 7:c=e.sent,null!==l&&void 0!==l||r(c);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return!l&&t&&function(e){a.apply(this,arguments)}(e),function(){return t=!1}}),[l,e]),l},E=function(e){var t=e.children;return l.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat( 4 , 268px )",gridColumGap:"70px",gridRowGap:"70px"}},t)},f=a(18),p=a.n(f),v=(a(31),function(e){var t=e.data,a=e.filter,r=Object(n.useState)(t),c=Object(o.a)(r,2),s=c[0],m=c[1];return Object(n.useEffect)((function(){if("Todos"!==a){var e=t.filter((function(e){return e.segment===a}));m(e)}else m(t)}),[a]),l.a.createElement(l.a.Fragment,null,s.map((function(e){return l.a.createElement("article",{className:"Card-Container",key:e.id},l.a.createElement("p",{className:"Text-Style-Title-Card"},e.name),l.a.createElement("p",{className:"Text-Style-Price",style:{marginTop:"-20px"}},e.year," | $",e.price),l.a.createElement("img",{src:"https://challenge.agenciaego.tech".concat(e.photo),style:{height:"auto",width:"90%"},alt:"".concat(e.name)}),l.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"15px"}},l.a.createElement(i.b,{to:"/".concat(e.id),style:{textDecoration:"none"}},l.a.createElement("img",{className:"card-model-button",src:p.a,alt:"model-button"}))))})))}),h=a(20),x=a.n(h),y=(a(37),function(){return l.a.createElement("div",{className:"toggle-list-container"},l.a.createElement("ul",null,l.a.createElement("li",{className:"order-text"},"Nada"),l.a.createElement("li",{className:"order-text"},"De menor a mayor precio"),l.a.createElement("li",{className:"order-text"},"De mayor a menor precio"),l.a.createElement("li",{className:"order-text"},"M\xe1s nuevos primero "),l.a.createElement("li",{className:"order-text"},"M\xe1s viejos primero ")))}),N=(a(38),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h6",{className:"filter-text-title",onClick:function(){var e=document.getElementById("order-toggle");"toggle-off"===e.classList[0]&&e.classList.toggle("toggle-on")}},"Ordenar por",l.a.createElement("img",{src:x.a,alt:"toggle-image"})),l.a.createElement("div",{id:"order-toggle",className:"toggle-off"},l.a.createElement(y,null)))}),b=function(e){var t=e.setFilter,a=function(e){var a=e.target.innerHTML;if(t(a),"filter-active"!==e.target.classList[1])for(var n=e.target.innerHTML,l=document.getElementsByClassName("filter-text"),r=0;r<l.length;r++)l[r].classList.remove("filter-active"),n===l[r].innerHTML&&l[r].classList.add("filter-active")};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"filter-container"},l.a.createElement("div",{className:"filter-toggle-fil"},l.a.createElement("h6",{className:"filter-text-title"},"Filtrar por "),l.a.createElement(l.a.Fragment,null,l.a.createElement("ul",null,l.a.createElement("li",{onClick:function(e){return a(e)},className:"filter-text filter-active"},"Todos"),l.a.createElement("li",{onClick:function(e){return a(e)},className:"filter-text"},"Autos"),l.a.createElement("li",{onClick:function(e){return a(e)},className:"filter-text"},"Pickups y Comerciales"),l.a.createElement("li",{onClick:function(e){return a(e)},className:"filter-text"},"SUVs y Crossovers")))),l.a.createElement("div",{className:"filter-toggle-ord"},l.a.createElement(N,null))),l.a.createElement("hr",{style:{marginTop:"-20px",marginLeft:"15%",marginRight:"15%"}}))};function T(){var e=d(),t=Object(n.useState)("Todos"),a=Object(o.a)(t,2),r=a[0],c=a[1];return l.a.createElement("div",{className:"App"},l.a.createElement("h1",{className:"Text-Style-6",style:{marginLeft:"15%",marginTop:"90px",marginBottom:"50px"}},"Descubr\xed todos los modelos"),l.a.createElement(b,{setFilter:c}),e?l.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},l.a.createElement(E,null,l.a.createElement(v,{data:e,filter:r}))):l.a.createElement("h2",null,"Cargando"))}a(39);var C=function(e){var t=e.image,a=e.name;return l.a.createElement("section",{className:"description-image-container"},l.a.createElement("img",{src:"https://challenge.agenciaego.tech".concat(t),alt:a}))},j=function(e){var t=e.description,a=e.title,n=e.name;return l.a.createElement("section",{className:"description-text-container"},l.a.createElement("h6",{className:"description-txt-name"},n),l.a.createElement("p",{className:"description-txt-title"},a),l.a.createElement("p",{className:"description-txt"},t))},L=function(e){var t=e.image,a=e.description,n=e.title,r=e.name,c=e.upsideDown;return l.a.createElement("section",{className:"description-container"},c?l.a.createElement(l.a.Fragment,null,l.a.createElement(j,{description:a,title:n,name:r}),l.a.createElement(C,{image:t,name:r})):l.a.createElement(l.a.Fragment,null,l.a.createElement(C,{image:t,name:r}),l.a.createElement(j,{description:a,title:n,name:r})))},k=(a(40),function(e){var t=e.features;return l.a.createElement("div",{className:"slide-container"},t&&t.map((function(e,t){return l.a.createElement("figure",{key:t},l.a.createElement("img",{src:"https://challenge.agenciaego.tech".concat(e.photo),alt:e.name,style:{borderRadius:"5px"}}),l.a.createElement("h6",{className:"slide-card-title"},e.name),l.a.createElement("p",{className:"slide-card-text"},e.description))})))}),O=function(){var e=Object(s.f)().location.pathname.slice(1),t=d(e);return l.a.createElement(l.a.Fragment,null,t?l.a.createElement(l.a.Fragment,null,l.a.createElement(L,{image:t.photo,title:t.title,description:t.description,name:t.name}),l.a.createElement(k,{features:t.model_features}),l.a.createElement(L,{upsideDown:!0,image:t.model_highlights[1].image,title:t.model_highlights[1].title,description:t.model_highlights[1].content}),l.a.createElement(L,{image:t.model_highlights[0].image,title:t.model_highlights[0].title,description:t.model_highlights[0].content})):l.a.createElement("h5",null,"Cargando"))},F=function(){return l.a.createElement("footer",{style:{height:"50px",backgroundColor:"#000000",marginTop:"10%"}})},S=(a(41),a(21)),M=a.n(S),w=a(22),D=a.n(w),R=(a(42),a(23)),_=a.n(R),I=function(e){var t=e.isTogle,a=e.isToggleMenu;return l.a.createElement("div",{className:t[1]},l.a.createElement("nav",{style:{display:t[0]}},l.a.createElement("ul",{style:{listStyle:"none"},className:"nav-ul"},l.a.createElement("li",{className:"nav-close",style:{marginRight:"-20px"}},"Cerrar ",l.a.createElement("img",{onClick:a,src:_.a,alt:"close-button"})),l.a.createElement("li",{className:"nav-text"},"Modelos"),l.a.createElement("li",{className:"nav-text"},"Servicios y accesorios"),l.a.createElement("li",{className:"nav-text"},"Financiacion"),l.a.createElement("li",{className:"nav-text"},"Reviews y Comunidad"),l.a.createElement("hr",{style:{marginLeft:"25%"}}),l.a.createElement("li",{className:"nav-text"},"Toyota Mobility Service"),l.a.createElement("li",{className:"nav-text"},"Toyota Gazoo Racing"),l.a.createElement("li",{className:"nav-text"},"Toyota Hibridos"),l.a.createElement("hr",{style:{marginLeft:"25%"}}),l.a.createElement("li",{className:"nav-text"},"Concecionarios"),l.a.createElement("li",{className:"nav-text"},"Test Drive"),l.a.createElement("li",{className:"nav-text"},"Contacto"),l.a.createElement("li",{className:"nav-text"},"Actividades"),l.a.createElement("hr",{style:{marginLeft:"25%"}}),l.a.createElement("li",{className:"nav-text"},"Servicios al Cliente"),l.a.createElement("li",{className:"nav-text"},"Ventas Especiales"),l.a.createElement("li",{className:"nav-text"},"Innovacion"),l.a.createElement("li",{className:"nav-text"},"Prensa"),l.a.createElement("li",{className:"nav-text"},"Acerca de ..."))))},B=Object(s.g)((function(){var e=Object(s.f)().location.pathname,t=Object(n.useState)(["none",null]),a=Object(o.a)(t,2),r=a[0],c=a[1],m="#eb0a1e",u="#191919";Object(n.useEffect)((function(){return function(){!1}}),[e]);var g=function(){if(console.log(r),"none"===r[0])return document.body.classList.add("nav-selected-body"),c(["block","dark"]);document.body.classList.remove("nav-selected-body"),c(["none",null])};return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",null,l.a.createElement("div",{className:"header-logo-container"},l.a.createElement("img",{src:D.a,alt:"LogoImage"}),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(i.b,{to:"/",className:"header-text",style:{color:"".concat("/"===e?m:u)}},"Modelos")),l.a.createElement("li",{className:"header-text",style:{marginLeft:"70px",color:"".concat("/"!==e?m:u)}},"Ficha de modelo"))),l.a.createElement("div",{style:{display:"flex",alignItems:"center"}},l.a.createElement("h6",{style:{marginRight:"10px"},className:"Text-Style-5"},"Men\xfa ",l.a.createElement("img",{onClick:g,src:M.a,alt:"Button menu"})))),l.a.createElement(I,{isTogle:r,isToggleMenu:g}))})),A=function(e){var t=e.children;return l.a.createElement(l.a.Fragment,null,l.a.createElement(B,null),l.a.createElement("hr",{style:{marginTop:"-5px"}}),t,l.a.createElement(F,null))},H=function(){return l.a.createElement(i.a,null,l.a.createElement(A,null,l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/",component:T}),l.a.createElement(s.a,{exact:!0,path:"/:id",component:O}))))},G=document.getElementById("root");c.a.render(l.a.createElement(H,null),G)}},[[24,1,2]]]);
//# sourceMappingURL=main.d0a5aad7.chunk.js.map