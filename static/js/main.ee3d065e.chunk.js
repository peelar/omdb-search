(this["webpackJsonpomdb-search"]=this["webpackJsonpomdb-search"]||[]).push([[0],{105:function(e,t,n){"use strict";n.r(t);var c=n(62),r=n(146),a=n(0),i=n.n(a),s=n(10),o=n.n(s),j=n(143),l=n(144),u=n(145),d=n(30),h=function(e,t){var n=Object(a.useState)(e),c=Object(d.a)(n,2),r=c[0],i=c[1];return Object(a.useEffect)((function(){""===e&&i(e);var n=setTimeout((function(){i(e)}),t);return function(){clearTimeout(n)}}),[e,t]),r},b=n(63),x=n(56),O=n.n(x).a.create({baseURL:"https://www.omdbapi.com",params:{apikey:"4e2b7bf"}}),m=function(e,t){return O.get("",{params:{s:e,page:t}}).then((function(e){return e.data}))},f=function(e,t){var n=t.toString(),c=Object(b.a)((function(){return"search/phrase=".concat(e,"/page=").concat(t)}),(function(){return m(e,n)})),r=c.data,a=c.error;return{results:r,isLoading:!a&&!r,error:a}},p=n(65),g=n(149),v=n(136),y=n(137),w=n(138),C=n(139),S=n(69),I=n(132),L=n(135),T=n(5),D=function(e){var t=e.media,n=e.content;return Object(T.jsx)(I.a,{raised:!0,children:Object(T.jsx)(L.a,{children:Object(T.jsxs)(v.a,{container:!0,spacing:2,children:[Object(T.jsx)(v.a,{item:!0,xs:12,md:4,children:t}),Object(T.jsx)(v.a,{item:!0,xs:12,md:8,children:n})]})})})},F=function(e){return Object(T.jsx)(y.a,{href:"https://www.imdb.com/title/".concat(e.imdbID),color:"inherit",children:Object(T.jsx)(D,{media:Object(T.jsx)(w.a,{component:"img",height:"200px",src:e.Poster,title:e.Title}),content:Object(T.jsx)(C.a,{children:Object(T.jsx)(g.a,{display:"flex",justifyContent:"space-around",flexDirection:"column",children:Object(T.jsx)(S.a,{variant:"h5",children:"".concat(e.Title," [").concat(e.Year,"]")})})})})})},P=n(140),k=function(){return Object(T.jsx)(D,{media:Object(T.jsx)(P.a,{variant:"rect",height:"200px"}),content:Object(T.jsx)(C.a,{children:Object(T.jsx)(P.a,{height:"40px"})})})},E=function(e){var t=e.results,n=e.isLoading;return Object(T.jsx)(g.a,{my:2,width:"100%",children:Object(T.jsxs)(v.a,{container:!0,spacing:1,children:[t&&t.map((function(e,t){return Object(T.jsx)(v.a,{item:!0,xs:12,children:Object(T.jsx)(F,Object(p.a)({},e))},"result-".concat(t))})),n&&Array(5).fill(0).map((function(e,t){return Object(T.jsx)(v.a,{item:!0,xs:12,children:Object(T.jsx)(k,{})},"result-".concat(t))}))]})})},R=n(150),B=function(e){var t=e.total,n=e.page,c=e.setPage,r=Math.round(+t/10);return Object(T.jsx)("nav",{children:Object(T.jsx)(R.a,{page:n,count:r,onChange:function(e,t){return function(e){window.scrollTo(0,0),c(e)}(t)}})})},M=n(147),H=n(142),J=n(151),W=n(141),A=function(e){var t=e.error;return Object(T.jsx)(g.a,{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",minHeight:"40vh",children:Object(T.jsxs)(J.a,{severity:"error",style:{width:"30%"},children:[Object(T.jsx)(W.a,{children:"Error"}),t.message]})})},N=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],c=t[1],r=h(n,1e3),i=Object(a.useState)(1),s=Object(d.a)(i,2),o=s[0],j=s[1],l=f(r,o),u=l.results,b=l.error,x=l.isLoading,O=""!==r&&"False"===(null===u||void 0===u?void 0:u.Response);return Object(T.jsxs)(g.a,{component:"section",my:2,children:[Object(T.jsx)("form",{onSubmit:function(e){return e.preventDefault()},children:Object(T.jsxs)(v.a,{container:!0,spacing:2,children:[Object(T.jsx)(v.a,{item:!0,xs:12,md:10,children:Object(T.jsx)(M.a,{type:"text",onChange:function(e){return c(e.target.value)},value:n,placeholder:"Enter text",fullWidth:!0})}),Object(T.jsx)(v.a,{item:!0,xs:4,md:2,children:Object(T.jsx)(H.a,{variant:"contained",color:"primary",type:"button",onClick:function(){c(""),j(1)},children:"Clear [X]"})})]})}),b&&Object(T.jsx)(A,{error:b}),Object(T.jsxs)(g.a,{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"40vh",children:[O&&Object(T.jsx)("h2",{children:"No data :("}),Object(T.jsxs)(g.a,{display:"flex",alignItems:"center",justifyContent:"space-around",flexDirection:"column",width:"100%",my:2,children:[(null===u||void 0===u?void 0:u.Search)&&Object(T.jsx)(B,{page:o,setPage:j,total:parseInt(u.totalResults)}),Object(T.jsx)(E,{results:null===u||void 0===u?void 0:u.Search,isLoading:x}),(null===u||void 0===u?void 0:u.Search)&&Object(T.jsx)(B,{page:o,setPage:j,total:parseInt(u.totalResults)})]})]})]})},U=function(){return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(j.a,{position:"static",children:Object(T.jsx)(l.a,{children:"OMDB Search"})}),Object(T.jsx)(u.a,{maxWidth:"xl",component:"main",children:Object(T.jsx)(N,{})})]})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,153)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))},Y=Object(c.a)({palette:{primary:{main:"#f26a5f"}}});o.a.render(Object(T.jsx)(i.a.StrictMode,{children:Object(T.jsx)(r.a,{theme:Y,children:Object(T.jsx)(U,{})})}),document.getElementById("root")),X()}},[[105,1,2]]]);
//# sourceMappingURL=main.ee3d065e.chunk.js.map