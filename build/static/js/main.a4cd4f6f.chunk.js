(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{14:function(e,t,a){},19:function(e,t,a){e.exports=a.p+"static/media/gray.99ca4403.svg"},20:function(e,t,a){e.exports=a.p+"static/media/logo.a6729c90.svg"},22:function(e,t,a){e.exports=a(33)},33:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),c=a.n(r),i=a(6),m=a(1),o=(a(14),a(10)),s=a.n(o),u=a(17),p=a(21),d=function(e){var t=Object(n.useState)(null),a=Object(p.a)(t,2),l=a[0],r=a[1];return Object(n.useEffect)((function(){var t=!0;function a(){return(a=Object(u.a)(s.a.mark((function e(t){var a,n,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t&&(a=t||""),e.next=4,fetch("https://challenge.agenciaego.tech/models/".concat(a||""));case 4:return n=e.sent,e.next=7,n.json();case 7:c=e.sent,null!==l&&void 0!==l||r(c);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return!l&&t&&function(e){a.apply(this,arguments)}(e),function(){return t=!1}}),[l,e]),l},g=function(e){var t=e.children;return l.a.createElement("div",{style:{display:"inline-grid",gridTemplateColumns:"repeat( 4 , 268px )",gridColumGap:"50px",gridRowGap:"50px"}},t)},E=function(e){var t=e.data;return l.a.createElement(l.a.Fragment,null,t.map((function(e){return l.a.createElement(i.b,{to:"/".concat(e.id),key:e.id},l.a.createElement("div",{style:{textAlign:"center",padding:"3px"}},l.a.createElement("h6",{style:{fontFamily:"Montserrat Bold, arial"}},e.name),l.a.createElement("p",null,e.year,"|$",e.price),l.a.createElement("img",{src:"https://challenge.agenciaego.tech".concat(e.photo),style:{height:"auto",width:"100%"},alt:"".concat(e.name)})))})))},h=function(){return l.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-around"}},l.a.createElement("div",{style:{display:"flex",alignItems:"center"}},"Filtrar por",l.a.createElement(l.a.Fragment,null,l.a.createElement("ul",{style:{display:"flex",listStyle:"none"}},l.a.createElement("li",null,"Todos"),l.a.createElement("li",{style:{marginLeft:"17px"}},"Autos"),l.a.createElement("li",{style:{marginLeft:"17px"}},"Pickups y Comerciales"),l.a.createElement("li",{style:{marginLeft:"17px"}},"SUVs y Crossovers")))),l.a.createElement("div",null,"Ordenar por"))};function f(){var e=d();return l.a.createElement("div",{className:"App"},l.a.createElement("h1",{className:"Text-Style-6"}," Descubr\xed todos los modelos"),l.a.createElement(h,null),e?l.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},l.a.createElement(g,null,l.a.createElement(E,{data:e}))):l.a.createElement("h2",null,"Cargando"))}var y=function(e){var t=e.image;return l.a.createElement("section",null,l.a.createElement("img",{src:"https://challenge.agenciaego.tech".concat(t),alt:""}))},x=function(e){var t=e.description,a=e.title,n=e.name;return l.a.createElement("section",null,l.a.createElement("p",null,n),l.a.createElement("p",null,a),l.a.createElement("p",null,t))},v=function(e){var t=e.image,a=e.description,n=e.title,r=e.name,c=e.upsideDown;return l.a.createElement("section",{style:{display:"flex"}},c?l.a.createElement(l.a.Fragment,null,l.a.createElement(x,{description:a,title:n,name:r}),l.a.createElement(y,{image:t})):l.a.createElement(l.a.Fragment,null,l.a.createElement(y,{image:t}),l.a.createElement(x,{description:a,title:n,name:r})))},b=function(e){var t=e.features;return l.a.createElement("div",{style:{display:"flex"}},t&&t.map((function(e,t){return l.a.createElement("section",{key:t},l.a.createElement("img",{src:"https://challenge.agenciaego.tech".concat(e.photo),alt:e.name}),l.a.createElement("h6",null,e.name),l.a.createElement("p",null,e.description))})))},F=function(){var e=Object(m.f)().location.pathname.slice(1),t=d(e);return l.a.createElement(l.a.Fragment,null,t?l.a.createElement(l.a.Fragment,null,l.a.createElement(v,{image:t.photo,title:t.title,description:t.description,name:t.name}),l.a.createElement(b,{features:t.model_features}),l.a.createElement(v,{upsideDown:!0,image:t.model_highlights[1].image,title:t.model_highlights[1].title,description:t.model_highlights[1].content}),l.a.createElement(v,{image:t.model_highlights[0].image,title:t.model_highlights[0].title,description:t.model_highlights[0].content})):l.a.createElement("h5",null,"Cargando"))},j=a(19),w=a.n(j),C=a(20),_=a.n(C),k=function(){return l.a.createElement("nav",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"}},l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("img",{src:_.a,alt:"LogoImage"}),l.a.createElement("ul",{style:{padding:"2px",listStyle:"none",display:"flex"}},l.a.createElement("li",{style:{marginLeft:"7px"}},l.a.createElement(i.b,{to:"/"},"Modelos")),l.a.createElement("li",{style:{marginLeft:"7px"}},"Ficha de modelo"))),l.a.createElement("div",{style:{display:"flex",alignItems:"center"}},l.a.createElement("h6",{style:{marginRight:"10px"}}," Men\xfa"),l.a.createElement("img",{src:w.a,alt:"Button menu"})))},I=function(e){var t=e.children;return l.a.createElement(l.a.Fragment,null,l.a.createElement(k,null),l.a.createElement("hr",null),t)},L=function(){return l.a.createElement(i.a,null,l.a.createElement(I,null,l.a.createElement(m.c,null,l.a.createElement(m.a,{exact:!0,path:"/",component:f}),l.a.createElement(m.a,{exact:!0,path:"/:id",component:F}))))},O=document.getElementById("root");c.a.render(l.a.createElement(L,null),O)}},[[22,1,2]]]);
//# sourceMappingURL=main.a4cd4f6f.chunk.js.map