(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,a,t){},12:function(e,a,t){"use strict";t.r(a);var c=t(5),n=t.n(c),i=t(4),r=t(1);t(10);function l(e,a){for(var t=[],c=e;c<=a;c+=1)t.push(c);return t}var s=t(2),o=t.n(s),j=t(0),d=function(e){var a=e.total,t=e.perPage,c=e.currentPage,n=e.onPageChange,i=l(1,Math.ceil(a/t));return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("ul",{className:"pagination",children:[Object(j.jsx)("li",{className:o()("page-item",{disabled:1===c}),children:Object(j.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":1===c,onClick:function(){1!==c&&n(c-1)},children:"\xab"})}),i.map((function(e){return Object(j.jsx)("li",{className:o()("page-item",{active:e===c}),children:Object(j.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){return function(e){e!==c&&n(e)}(e)},children:e})},e)})),Object(j.jsx)("li",{className:o()("page-item",{disabled:c===i.length}),children:Object(j.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":c===i.length,onClick:function(){c!==i.length&&n(c+1)},children:"\xbb"})})]})})},u=l(1,42).map((function(e){return"Item ".concat(e)})),h=function(){var e=Object(r.useState)(5),a=Object(i.a)(e,2),t=a[0],c=a[1],n=Object(r.useState)(1),l=Object(i.a)(n,2),s=l[0],o=l[1],h=u.length,m=(s-1)*t,b=m+t,g=u.slice(m,b);return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Items with Pagination"}),Object(j.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(s," (items ").concat(m+1," - ").concat(h<b?h:b," of ").concat(h,")")}),Object(j.jsxs)("div",{className:"form-group row",children:[Object(j.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(j.jsx)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",defaultValue:t,onChange:function(e){e.preventDefault(),c(Number(e.target.value)),o(1)},children:[3,5,10,20].map((function(e){return Object(j.jsx)("option",{value:e,children:e},e)}))})}),Object(j.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(j.jsx)(d,{total:h,perPage:t,currentPage:s,onPageChange:o}),Object(j.jsx)("ul",{children:g.map((function(e){return Object(j.jsx)("li",{"data-cy":"item",children:e},e)}))})]})};n.a.render(Object(j.jsx)(h,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.0c13728d.chunk.js.map