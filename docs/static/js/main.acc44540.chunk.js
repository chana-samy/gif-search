(this["webpackJsonpintro-js"]=this["webpackJsonpintro-js"]||[]).push([[0],{15:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),r=n(7),i=n.n(r),s=(n(15),n(2)),u=n(9),o=n(0),j=function(t){var e=t.setCategories,n=Object(c.useState)(""),a=Object(s.a)(n,2),r=a[0],i=a[1];return Object(o.jsx)("form",{onSubmit:function(t){t.preventDefault(),r.length>2&&(e((function(t){return[r].concat(Object(u.a)(t))})),i(""))},children:Object(o.jsx)("input",{type:"text",value:r,onChange:function(t){i(t.target.value)}})})},d=n(10),l=n(6),b=n.n(l),O=n(8),f=function(){var t=Object(O.a)(b.a.mark((function t(e){var n,c,a,r,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=7&api_key=P7N9xQBQbHCJY5utE4HJF5gkH75KPGC4"),t.next=3,fetch(n);case 3:return c=t.sent,t.next=6,c.json();case 6:return a=t.sent,r=a.data,i=r.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(t){t.id;var e=t.title,n=t.url;return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("img",{src:n,alt:e}),Object(o.jsxs)("p",{children:[" ",e," "]})]})},p=function(t){var e=t.category,n=function(t){var e=Object(c.useState)({data:[],loading:!0}),n=Object(s.a)(e,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){f(t).then((function(t){setTimeout((function(){r({data:t,loading:!1})}),3e3)}))}),[t]),a}(e),a=n.data,r=n.loading;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("h3",{class:"animate__animated animate__bounce",children:[" ",e]}),r&&Object(o.jsx)("p",{children:"Loading.."}),Object(o.jsx)("div",{className:"cardGrid",children:Object(o.jsx)("ol",{children:a.map((function(t){return Object(o.jsx)(h,Object(d.a)({},t),t.id)}))})})]})},m=function(){var t=Object(c.useState)(["One Piece"]),e=Object(s.a)(t,2),n=e[0],a=e[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{class:"animate__animated animate__swing",children:"GiftSearchApp"}),Object(o.jsx)("hr",{}),Object(o.jsx)(j,{setCategories:a}),Object(o.jsx)("ol",{children:n.map((function(t){return Object(o.jsx)(p,{category:t},t)}))})]})};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.acc44540.chunk.js.map