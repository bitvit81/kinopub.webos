(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[21],{1059:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));n(2);var r=n(31),c=n(888),i=n(930),u=n(908),o=n(3),a=function(){var e,t,n,a,l=Object(r.i)().bookmarkId,s=Object(u.a)("bookmarkItems",[l]);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(c.a,{title:"\u0417\u0430\u043a\u043b\u0430\u0434\u043a\u0430"}),Object(o.jsx)(i.a,{title:null===s||void 0===s||null===(e=s.data)||void 0===e||null===(t=e.pages)||void 0===t||null===(n=t[0])||void 0===n||null===(a=n.folder)||void 0===a?void 0:a.title,queryResult:s})]})}},888:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(11),c=n(893),i=n(3),u=function(e){return Object(i.jsx)(c.a,Object(r.a)({defaultTitle:"Unknown",titleTemplate:"%s | Kinopub WebOS"},e))}},890:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var r=n(11),c=n(57),i=n(2),u=n(52),o=n.n(u),a=n(73),l=n(106),s=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{disconnectOnLeave:!1},c=t.onEnterViewport,u=t.onLeaveViewport,o=Object(i.useState)(),s=Object(a.a)(o,2),d=s[1],b=Object(i.useRef)(null),j=Object(i.useRef)(!1),v=Object(i.useRef)(!1),f=Object(i.useRef)(0),O=Object(i.useRef)(0),m=Object(i.useCallback)((function(){if(e.current&&b.current){var t=Object(l.findDOMNode)(e.current);t&&b.current.observe(t)}}),[e,b]),p=Object(i.useCallback)((function(){if(e.current&&b.current){var t=Object(l.findDOMNode)(e.current);t&&(b.current.unobserve(t),b.current.disconnect(),b.current=null)}}),[e,b]),x=Object(i.useCallback)((function(e){var t=e[0]||{},n=t.isIntersecting,i=t.intersectionRatio,o="undefined"!==typeof n?n:i>0;if(!v.current&&o)return v.current=!0,null===c||void 0===c||c(),f.current+=1,j.current=o,void d(o);v.current&&!o&&(v.current=!1,null===u||void 0===u||u(),r.disconnectOnLeave&&b.current&&b.current.disconnect(),O.current+=1,j.current=o,d(o))}),[b,r.disconnectOnLeave,c,u]),h=Object(i.useCallback)((function(){b.current||(b.current=new IntersectionObserver(x,n))}),[b,n,x]);return Object(i.useEffect)((function(){return h(),m(),function(){p()}}),[h,m,p]),{inViewport:j.current,enterCount:f.current,leaveCount:O.current}},d=n(3),b=["children","className","onScrollToEnd"],j=function(e){var t=e.children,n=e.className,u=e.onScrollToEnd,a=Object(c.a)(e,b),l=Object(i.useRef)(null);return s(l,{onEnterViewport:u}),Object(d.jsxs)("div",Object(r.a)(Object(r.a)({className:o()("overflow-y-auto h-full",n)},a),{},{children:[t,Object(d.jsx)("div",{className:"h-40",ref:l})]}))}},891:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(11),c=n(57),i=n(52),u=n.n(i),o=n(251),a=n(3),l=["className","wrapperClassName","source","caption","children"],s=function(e){var t=e.className,n=e.wrapperClassName,i=e.source,s=e.caption,d=e.children,b=Object(c.a)(e,l);return Object(a.jsx)(o.a,Object(r.a)(Object(r.a)({},b),{},{className:u()("rounded-xl w-1/5",n),children:Object(a.jsxs)("div",{className:u()("h-40 m-1 flex flex-col relative overflow-hidden cursor-pointer",t),children:[Object(a.jsx)("img",{loading:"lazy",className:"w-full h-full object-cover rounded-xl border-2 border-gray-300 bg-gray-300",src:i,alt:s}),Object(a.jsx)("div",{className:"px-2",children:Object(a.jsx)("p",{className:"text-gray-200 text-sm text-center overflow-hidden whitespace-nowrap",children:s})}),d]})}))}},896:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var r=n(105),c=n(2),i=n(52),u=n.n(i),o=n(193),a=n.n(o),l=n(890),s=n(253),d=n(31),b=n(891),j=n(8),v=n(3),f=function(e){var t=e.item,n=e.className,r=Object(d.g)(),i=Object(c.useMemo)((function(){var e;return null===t||void 0===t||null===(e=t.title)||void 0===e?void 0:e.split("/")[0]}),[null===t||void 0===t?void 0:t.title]),o=Object(c.useCallback)((function(){(null===t||void 0===t?void 0:t.id)&&r.push(Object(j.b)(j.a.Item,{itemId:t.id}))}),[null===t||void 0===t?void 0:t.id,r]);return Object(v.jsx)(b.a,{onClick:o,source:null===t||void 0===t?void 0:t.posters.medium,caption:i,className:u()("h-72",n),children:(null===t||void 0===t?void 0:t.new)&&Object(v.jsx)("div",{className:"absolute bg-red-600 border-gray-300 border-t-2 border-r-2 text-gray-200 px-2 py-1 rounded-bl rounded-tr-xl top-0 right-0",children:null===t||void 0===t?void 0:t.new})})},O=function(e){var t=e.title,n=e.items,c=e.loading,i=e.onScrollToEnd,o=e.scrollable,d=void 0===o||o,b=e.className,j=Object(v.jsxs)("div",{children:[t&&Object(v.jsx)(s.a,{className:"m-1 mb-3",children:t}),Object(v.jsxs)("div",{className:u()("flex flex-wrap",b),children:[a()(n,(function(e){return Object(v.jsx)(f,{item:e},e.id)})),c&&a()(Object(r.a)(new Array(15)),(function(e,t){return Object(v.jsx)(f,{},t)}))]})]});return d?Object(v.jsx)(l.a,{onScrollToEnd:i,children:j}):j}},906:function(e,t,n){"use strict";var r=n(73),c=n(2),i=n(897),u=n.n(i),o=n(912),a=n.n(o),l=n(899),s=n.n(l);t.a=function(e,t){var n=e.data,i=e.isLoading,o=e.isFetchingNextPage,l=e.fetchNextPage,d=Object(c.useState)(!1),b=Object(r.a)(d,2),j=b[0],v=b[1],f=Object(c.useMemo)((function(){return s()(u()(a()(null===n||void 0===n?void 0:n.pages,(function(e){return e.items}))),"id")}),[null===n||void 0===n?void 0:n.pages]),O=Object(c.useMemo)((function(){return t?t(f):f}),[f,t]),m=Object(c.useCallback)((function(){j&&(l(),v(!1))}),[j,l]);return Object(c.useEffect)((function(){v(!0)}),[f.length]),[O,i||o,m]}},908:function(e,t,n){"use strict";var r=n(11),c=n(105),i=n(2),u=n(976),o=n(252);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0,a=Object(i.useMemo)((function(){return new o.c}),[]),l=Object(u.a)([e].concat(Object(c.a)(t)),(function(n){var r=n.pageParam;return a[e].apply(a,Object(c.a)(t).concat([r]))}),Object(r.a)({getNextPageParam:function(e){var t;return(null===e||void 0===e||null===(t=e.pagination)||void 0===t?void 0:t.current)+1||1}},n));return l}},930:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(73),c=n(896),i=n(906),u=n(3),o=function(e){var t=e.title,n=e.queryResult,o=e.processItems,a=Object(i.a)(n,o),l=Object(r.a)(a,3),s=l[0],d=l[1],b=l[2];return Object(u.jsx)(c.a,{title:t,items:s,loading:d,onScrollToEnd:b})}}}]);
//# sourceMappingURL=21.6768d95b.chunk.js.map