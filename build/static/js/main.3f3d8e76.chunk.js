(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/fill-1-copy-2.0fe6f7b7.svg"},,,,,,function(e,t,a){e.exports=a.p+"static/media/negro-fill.59b7f4a4.svg"},,function(e,t,a){e.exports=a.p+"static/media/fill-1.9f706432.svg"},function(e,t,a){e.exports=a.p+"static/media/gray.99ca4403.svg"},function(e,t,a){e.exports=a.p+"static/media/logo.a6729c90.svg"},function(e,t,a){e.exports=a.p+"static/media/fill-2.f30a5183.svg"},function(e,t,a){e.exports=a(50)},,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),c=a.n(l),i=a(7),s=a(1),o=a(3),m=(a(33),a(34),a(13)),u=a.n(m),d=a(21),E=function(e){var t=Object(n.useState)(null),a=Object(o.a)(t,2),r=a[0],l=a[1];return Object(n.useEffect)((function(){var t=!0;function a(){return(a=Object(d.a)(u.a.mark((function e(t){var a,n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t&&(a=t||""),e.next=4,fetch("https://challenge.agenciaego.tech/models/".concat(a||""));case 4:return n=e.sent,e.next=7,n.json();case 7:c=e.sent,null!==r&&void 0!==r||l(c);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return!r&&t&&function(e){a.apply(this,arguments)}(e),function(){return t=!1}}),[r,e]),r},f=(a(36),function(e){var t=e.children;return r.a.createElement("div",{className:"grid-container"},t)}),g=a(22),p=a.n(g),v=(a(37),function(e){var t=e.data,a=e.filter,l=e.order,c=Object(n.useState)(t),s=Object(o.a)(c,2),m=s[0],u=s[1];Object(n.useEffect)((function(){if("Todos"!==a){var e=t.filter((function(e){return e.segment===a}));return u(e)}return u(t)}),[a,l]);return r.a.createElement(r.a.Fragment,null,function(e,t){switch(e){case"nada":return t.sort((function(e,t){return e.id-t.id}));case"mayor":return t.sort((function(e,t){return t.price-e.price}));case"menor":return t.sort((function(e,t){return e.price-t.price}));case"nuevos":return t.sort((function(e,t){return t.year-e.year}));case"viejos":return t.sort((function(e,t){return e.year-t.year}))}}(l,m).map((function(e){return r.a.createElement("article",{className:"Card-Container",key:e.id},r.a.createElement("p",{className:"Text-Style-Title-Card"},e.name),r.a.createElement("p",{className:"Text-Style-Price",style:{marginTop:"-20px"}},e.year," | $",e.price),r.a.createElement("img",{src:"https://challenge.agenciaego.tech".concat(e.photo),style:{height:"auto",width:"90%"},alt:"".concat(e.name)}),r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"15px"}},r.a.createElement(i.b,{to:"/".concat(e.id),style:{textDecoration:"none"}},r.a.createElement("img",{className:"card-model-button",src:p.a,alt:"model-button"}))))})))}),h=(a(43),function(e){var t=e.setOrder,a=function(e){var a=e.target.innerHTML;if("Nada"===a)return t("nada");t(a)};return r.a.createElement("div",{className:"order-list-container"},r.a.createElement("div",{className:"order-center"},r.a.createElement("ul",null,r.a.createElement("li",{onClick:function(e){return a(e)},className:"order-text"},"Nada"),r.a.createElement("li",{className:"order-text"},"De ",r.a.createElement("strong",{onClick:function(e){return a(e)}},"menor")," a ",r.a.createElement("strong",null,"mayor"),"  precio"),r.a.createElement("li",{className:"order-text"},"De ",r.a.createElement("strong",{onClick:function(e){return a(e)}},"mayor")," a ",r.a.createElement("strong",null," menor ")," precio"),r.a.createElement("li",{className:"order-text"},"M\xe1s ",r.a.createElement("strong",{onClick:function(e){return a(e)}},"nuevos")," primero"),r.a.createElement("li",{className:"order-text"},"M\xe1s ",r.a.createElement("strong",{onClick:function(e){return a(e)}},"viejos")," primero "))))}),x=a(24),y=a.n(x),N=(a(44),function(e){var t=e.children,a=e.name,l=e.right,c=e.left,i=Object(n.useState)(!0),s=Object(o.a)(i,2),m=s[0],u=s[1];return r.a.createElement("div",{style:{alignItems:"center",padding:"10px"}},r.a.createElement("h2",{onClick:function(e){return u(!m)},className:"filter-text-title"},a,r.a.createElement("img",{src:y.a,alt:"filter-image",style:{transform:"".concat(m?"rotate(-180deg)":"rotate(0deg)"),marginLeft:"10px"}})),r.a.createElement("div",{hidden:m,style:{position:"absolute",left:c,right:l}},t))}),b=function(e){var t=e.setFilter,a=e.setOrder,l=Object(n.useState)(0),c=Object(o.a)(l,2),i=c[0],s=c[1];Object(n.useEffect)((function(){var e=function(){var e=document.body.clientWidth;s(e)};e(),window.addEventListener("resize",e)}),[]);var m=function(e){var a=e.target.innerHTML;if(t(a),"filter-active"!==e.target.classList[1])for(var n=e.target.innerHTML,r=document.getElementsByClassName("filter-text"),l=0;l<r.length;l++)r[l].classList.remove("filter-active"),n===r[l].innerHTML&&r[l].classList.add("filter-active")};return r.a.createElement("div",{className:"filter-container"},i>600?r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},r.a.createElement("h2",{className:"filter-text-title"},"Filtrar por"),r.a.createElement("ul",{className:"filter-list-desk"},r.a.createElement("li",{onClick:function(e){return m(e)},className:"filter-text filter-active"},"Todos"),r.a.createElement("li",{onClick:function(e){return m(e)},className:"filter-text"},"Autos"),r.a.createElement("li",{onClick:function(e){return m(e)},className:"filter-text"},"Pickups y Comerciales"),r.a.createElement("li",{onClick:function(e){return m(e)},className:"filter-text"},"SUVs y Crossovers"))):r.a.createElement(N,{name:"Filtrar por",left:"10px"},r.a.createElement("div",{className:"first-container"},r.a.createElement("ul",{style:{listStyle:"none"}},r.a.createElement("li",{onClick:function(e){return m(e)},className:"order-text"},"Todos"),r.a.createElement("li",{onClick:function(e){return m(e)},className:"order-text"},"Autos"),r.a.createElement("li",{onClick:function(e){return m(e)},className:"order-text"},"Pickups y Comerciales"),r.a.createElement("li",{onClick:function(e){return m(e)},className:"order-text"},"SUVs y Crossovers")))),r.a.createElement(N,{name:"Ordenar por",right:i>650?"17%":"10px"},r.a.createElement(h,{setOrder:a})))};function C(){var e=E(),t=Object(n.useState)("Todos"),a=Object(o.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)("nada"),s=Object(o.a)(i,2),m=s[0],u=s[1];return r.a.createElement("div",{id:"home-container",style:{width:"100%",padding:"3px"}},r.a.createElement("h1",{className:"home-title"},"Descubr\xed todos los modelos"),r.a.createElement("div",null,r.a.createElement(b,{setOrder:u,setFilter:c}),r.a.createElement("hr",{style:{marginTop:"-7px",marginLeft:"10%",marginRight:"10%"}}),e?r.a.createElement("div",{className:"home-grid-container"},r.a.createElement(f,null,r.a.createElement(v,{data:e,filter:l,order:m}))):r.a.createElement("h2",null,"Cargando")))}a(45);var k=function(e){var t=e.image,a=e.name;return r.a.createElement("section",{className:"description-image-container"},r.a.createElement("img",{src:"https://challenge.agenciaego.tech".concat(t),alt:a}))},O=function(e){var t=e.description,a=e.title,n=e.name;return r.a.createElement("section",{className:"description-text-container"},r.a.createElement("h6",{className:"description-txt-name"},n),r.a.createElement("p",{className:"description-txt-title"},a),r.a.createElement("p",{className:"description-txt"},t))},j=function(e){var t=e.image,a=e.description,n=e.title,l=e.name,c=e.upsideDown;return r.a.createElement("section",{className:"description-container"},c?r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{description:a,title:n,name:l}),r.a.createElement(k,{image:t,name:l})):r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{image:t,name:l}),r.a.createElement(O,{description:a,title:n,name:l})))},T=a(17),S=(a(46),a(16)),L=a.n(S),F=function(e){var t=e.features,a=Object(n.useState)(t),l=Object(o.a)(a,2),c=l[0],i=l[1],s=function(e){return"next"===e.target.name?function(){var e=c[0];c.shift();var t=[].concat(Object(T.a)(c),[e]);i(t)}():function(){var e=c[c.length-1];c.pop();var t=[e].concat(Object(T.a)(c));i(t)}()};return r.a.createElement("div",{className:"slide-container"},r.a.createElement("div",{className:"slide-container-buttons-r",onClick:function(e){return s(e)},name:"back"},r.a.createElement("img",{className:"slide-buttons",src:L.a,alt:"slide-buttom-back"})),c&&c.map((function(e,t){return r.a.createElement("figure",{key:t},r.a.createElement("img",{src:"https://challenge.agenciaego.tech".concat(e.photo),alt:e.name,style:{borderRadius:"5px"}}),r.a.createElement("h6",{className:"slide-card-title"},e.name),r.a.createElement("p",{className:"slide-card-text"},e.description))})),r.a.createElement(r.a.Fragment,null,r.a.createElement("button",null,"O")),r.a.createElement("div",{className:"slide-container-buttons-l",onClick:function(e){return s(e)},name:"next"},r.a.createElement("img",{className:"slide-buttons",style:{transform:"rotate(-180deg)"},src:L.a,alt:""})))},w=(a(47),function(){var e=Object(s.f)().location.pathname.slice(1),t=E(e);return r.a.createElement("div",{id:"detail-container"},t?r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{image:t.photo,title:t.title,description:t.description,name:t.name}),r.a.createElement(F,{features:t.model_features}),r.a.createElement(j,{upsideDown:!0,image:t.model_highlights[1].image,title:t.model_highlights[1].title,description:t.model_highlights[1].content}),r.a.createElement(j,{image:t.model_highlights[0].image,title:t.model_highlights[0].title,description:t.model_highlights[0].content})):r.a.createElement("h5",null,"Cargando"))}),M=function(){return r.a.createElement("footer",{style:{height:"50px",backgroundColor:"#000000",marginTop:"10%"}})},I=(a(48),a(25)),B=a.n(I),D=a(26),R=a.n(D),_=(a(49),a(27)),H=a.n(_),A=function(e){var t=e.children;return r.a.createElement("div",{style:{marginTop:"10px"}},t)},P=function(e){var t=e.isTogle,a=e.isToggleMenu;return r.a.createElement("div",{className:t[1]},r.a.createElement("nav",{style:{display:t[0]}},r.a.createElement("ul",{className:"nav-ul-close"},r.a.createElement("li",{className:"nav-close"},"Cerrar"),r.a.createElement("li",null,r.a.createElement("img",{onClick:a,src:H.a,alt:"close-button"}))),r.a.createElement(A,null,r.a.createElement("ul",{className:"nav-ul"},r.a.createElement("li",{className:"nav-text"},"Modelos"),r.a.createElement("li",{className:"nav-text"},"Servicios y accesorios"),r.a.createElement("li",{className:"nav-text"},"Financiacion"),r.a.createElement("li",{className:"nav-text"},"Reviews y Comunidad"))),r.a.createElement("hr",{style:{marginLeft:"30px",marginRight:"30px"}}),r.a.createElement(A,null,r.a.createElement("ul",{className:"nav-ul"},r.a.createElement("li",{className:"nav-text"},"Toyota Mobility Service"),r.a.createElement("li",{className:"nav-text"},"Toyota Gazoo Racing"),r.a.createElement("li",{className:"nav-text"},"Toyota Hibridos"))),r.a.createElement("hr",{style:{marginLeft:"30px",marginRight:"30px"}}),r.a.createElement(A,null,r.a.createElement("ul",{className:"nav-ul"},r.a.createElement("li",{className:"nav-text"},"Concecionarios"),r.a.createElement("li",{className:"nav-text"},"Test Drive"),r.a.createElement("li",{className:"nav-text"},"Contacto"))),r.a.createElement(A,null,r.a.createElement("ul",{className:"nav-ul",style:{backgroundColor:"#efeeef"}},r.a.createElement("li",{className:"nav-text"},"Actividades"),r.a.createElement("li",{className:"nav-text"},"Servicios al Cliente"),r.a.createElement("li",{className:"nav-text"},"Ventas Especiales"),r.a.createElement("li",{className:"nav-text"},"Innovacion"),r.a.createElement("li",{className:"nav-text"},"Prensa"),r.a.createElement("li",{className:"nav-text"},"Acerca de ...")))))},V=Object(s.g)((function(){var e=Object(s.f)().location.pathname,t=Object(n.useState)(["none",null]),a=Object(o.a)(t,2),l=a[0],c=a[1],m="#eb0a1e",u="#191919";Object(n.useEffect)((function(){return function(){!1}}),[e]);var d=function(){return"none"===l[0]?("/"===e?document.getElementById("home-container").style.display="none":document.getElementById("detail-container").style.display="none",c(["block","dark"])):("/"===e?document.getElementById("home-container").style.display="block":document.getElementById("detail-container").style.display="block",c(["none",null]))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("div",{className:"header-logo-container"},r.a.createElement(i.b,{to:"/"},r.a.createElement("img",{src:R.a,alt:"LogoImage",style:{marginLeft:"10px"}})),r.a.createElement("div",null,r.a.createElement("div",{style:{borderBottom:"".concat("/"===e?" solid 4px #eb0a1e":""),padding:"20px"}},r.a.createElement(i.b,{to:"/",className:"header-text",style:{color:"".concat("/"===e?m:u)}},"Modelos")),r.a.createElement("div",{style:{borderBottom:"".concat("/"===e?"":"solid 4px #eb0a1e"),padding:"20px"}},r.a.createElement(i.b,{className:"header-text",style:{color:"".concat("/"!==e?m:u)}},"Ficha de modelo")))),r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},r.a.createElement("h6",{style:{marginRight:"10px"},className:"header-text-menu"},"Men\xfa"),r.a.createElement("img",{onClick:d,src:B.a,alt:"Button menu"}))),r.a.createElement(P,{isTogle:l,isToggleMenu:d}))})),z=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(V,null),r.a.createElement("hr",{style:{marginTop:"-5px"}}),t,r.a.createElement(M,null))},J=function(){return r.a.createElement(i.a,null,r.a.createElement(z,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:C}),r.a.createElement(s.a,{exact:!0,path:"/:id",component:w}))))},U=document.getElementById("root");c.a.render(r.a.createElement(J,null),U)}],[[28,1,2]]]);
//# sourceMappingURL=main.3f3d8e76.chunk.js.map