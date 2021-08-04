(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[17],{1052:function(e,n,c){"use strict";c.r(n),c.d(n,"default",(function(){return S}));var t=c(26),a=c.n(t),i=c(88),l=c(43),s=c(15),r=c(75),u=c(1),o=c(893),d=c.n(o),j=c(943),b=c.n(j),f=c(171),O=c.n(f),v=c(234),h=c(892),x=c(951),m=c(952),p=c(908),k=c(923),N=c(2),g=function(e){var n=e.label,c=e.options,t=e.defaultValue,a=e.value,i=e.onChange,l=e.closeOnChange,s=Object(u.useState)(!1),o=Object(r.a)(s,2),d=o[0],j=o[1],b=Object(k.a)(a||t),f=Object(r.a)(b,2),v=f[0],h=f[1],x=Object(u.useMemo)((function(){return Array.isArray(c)?c.map((function(e,n){return"string"===typeof e?{title:e,value:n}:e})):[]}),[c]),g=Object(u.useMemo)((function(){return x.find((function(e){return e.value===v}))}),[x,v]),C=Object(u.useCallback)((function(e){h(e),null===i||void 0===i||i(e),l&&j(!1)}),[h,i,l]),w=Object(u.useCallback)((function(e){return function(n){n&&C(e.value)}}),[C]);return Object(N.jsx)(m.a,{open:d,onToggle:j,title:n,subtitle:null===g||void 0===g?void 0:g.title,children:Object(N.jsx)("div",{className:"flex flex-col",children:O()(x,(function(e){return Object(N.jsx)(p.a,{checked:e.value===v,onChange:w(e),children:e.title},e.value)}))})})},C=c(885),w=c(889),y=c(175),M=c(353),A=function(e){var n=e.setting,c=e.onChange;return Object(N.jsx)(x.a,{className:"w-full",defaultChecked:n.value===v.a.True,onChange:c,children:n.label})},F=function(e){var n=e.setting,c=e.onChange,t=Object(u.useMemo)((function(){return O()(n.value,(function(e){return"".concat(e.label," ").concat(e.description?"(".concat(e.description,")"):"")}))}),[n.value]);return Object(N.jsx)(g,{defaultValue:b()(n.value,(function(e){return e.selected===v.a.True})),label:n.label,onChange:c,options:t,closeOnChange:!0})},S=function(){var e,n,c=Object(w.a)("user").data,t=Object(w.a)("deviceInfo").data,o=Object(y.a)("saveDeviceSettings").saveDeviceSettingsAsync,j=Object(y.a)("deactivate").deactivate,b=Object(u.useState)({}),f=Object(r.a)(b,2),v=f[0],x=f[1],m=Object(M.a)(),p=m.software,k=m.hardware,g=Object(u.useMemo)((function(){var e;return d()(O()(null===t||void 0===t||null===(e=t.device)||void 0===e?void 0:e.settings,(function(e,n){return Object(s.a)(Object(s.a)({},e),{},{key:n})})),(function(e){return"undefined"===typeof e.type}))}),[null===t||void 0===t||null===(e=t.device)||void 0===e?void 0:e.settings]),S=Object(u.useMemo)((function(){var e;return d()(O()(null===t||void 0===t||null===(e=t.device)||void 0===e?void 0:e.settings,(function(e,n){return Object(s.a)(Object(s.a)({},e),{},{key:n})})),(function(e){return"list"===e.type}))}),[null===t||void 0===t||null===(n=t.device)||void 0===n?void 0:n.settings]),T=Object(u.useCallback)((function(e){return function(){var n=Object(l.a)(a.a.mark((function n(c){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:x(Object(s.a)(Object(s.a)({},v),{},Object(i.a)({},e.key,c)));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}),[v]),D=Object(u.useCallback)((function(e){return function(n){x(Object(s.a)(Object(s.a)({},v),{},Object(i.a)({},e.key,e.value[n].id)))}}),[v]),E=Object(u.useCallback)(Object(l.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o([null===t||void 0===t?void 0:t.device.id,v]);case 2:window.location.reload();case 3:case"end":return e.stop()}}),e)}))),[v,null===t||void 0===t?void 0:t.device,o]),J=Object(u.useCallback)((function(){j([])}),[j]);return Object(N.jsxs)("div",{className:"h-screen relative",children:[Object(N.jsx)(C.a,{className:"m-1 mb-3",children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430"}),Object(N.jsx)("div",{className:"flex flex-col",children:(null===t||void 0===t?void 0:t.device)&&Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("div",{className:"flex flex-wrap pb-4",children:O()(g,(function(e){return Object(N.jsx)("div",{className:"flex w-1/2 pr-4",children:Object(N.jsx)(A,{setting:e,onChange:T(e)})},e.key)}))},"bool-".concat(null===t||void 0===t?void 0:t.device.updated)),Object(N.jsx)("div",{className:"flex flex-wrap pb-4",children:O()(S,(function(e){return Object(N.jsx)("div",{className:"flex w-1/2 pr-4",children:Object(N.jsx)(F,{setting:e,onChange:D(e)})},e.key)}))},"list-".concat(null===t||void 0===t?void 0:t.device.updated))]}),Object(N.jsx)("div",{className:"flex my-8",children:Object(N.jsx)(h.a,{icon:"done",onClick:E,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]})}),Object(N.jsxs)("div",{className:"flex justify-between absolute bottom-0 left-0 right-0 py-2",children:[Object(N.jsxs)("div",{children:[Object(N.jsx)(C.a,{children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"}),Object(N.jsxs)("div",{className:"flex items-center",children:[(null===c||void 0===c?void 0:c.user)&&Object(N.jsxs)(C.a,{className:"mr-4",children:[c.user.profile.name||c.user.username," (",Math.floor(c.user.subscription.days)," \u0434\u043d.)"]}),Object(N.jsx)(h.a,{icon:"logout",onClick:J,children:"\u0412\u044b\u0445\u043e\u0434"})]})]}),Object(N.jsxs)("div",{className:"flex flex-col items-end pr-4",children:[Object(N.jsx)(C.a,{children:k}),Object(N.jsx)(C.a,{children:p})]})]})]})}},885:function(e,n,c){"use strict";c.d(n,"a",(function(){return u}));var t=c(15),a=c(54),i=c(48),l=c.n(i),s=c(2),r=["className"],u=function(e){var n=e.className,c=Object(a.a)(e,r);return Object(s.jsx)("p",Object(t.a)(Object(t.a)({},c),{},{className:l()("text-primary",n)}))}},889:function(e,n,c){"use strict";var t=c(90),a=c(1),i=c(899),l=c(234);n.a=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],c=arguments.length>2?arguments[2]:void 0,s=Object(a.useMemo)((function(){return new l.c}),[]),r=Object(i.a)([e].concat(Object(t.a)(n)),(function(){return s[e].apply(s,Object(t.a)(n))}),c);return r}},892:function(e,n,c){"use strict";c.d(n,"a",(function(){return j}));var t=c(15),a=c(54),i=c(1),l=c(48),s=c.n(l),r=c(236),u=c(233),o=c(2),d=["icon","iconOnly","children","autoFocus","className"],j=function(e){var n=e.icon,c=e.iconOnly,l=e.children,j=e.autoFocus,b=e.className,f=Object(a.a)(e,d),O=Object(i.useRef)(null);return Object(i.useEffect)((function(){var e;return j&&(e=requestAnimationFrame((function(){var e,n;null===(e=O.current)||void 0===e||null===(n=e.node)||void 0===n||n.focus()}))),function(){e&&cancelAnimationFrame(e)}}),[O,j]),Object(o.jsx)(u.a,Object(t.a)(Object(t.a)({},f),{},{ref:O,className:s()("text-primary whitespace-nowrap cursor-pointer rounded px-2 py-1",{"pr-3":!!n},b),role:"button",children:Object(o.jsxs)("div",{className:"flex items-center",children:[n&&Object(o.jsx)(r.a,{name:n}),!c&&l]})}))}},908:function(e,n,c){"use strict";c.d(n,"a",(function(){return d}));var t=c(15),a=c(54),i=c(1),l=c(48),s=c.n(l),r=c(233),u=c(2),o=["defaultChecked","checked","onChange","className","children"],d=function(e){var n=e.defaultChecked,c=e.checked,l=e.onChange,d=e.className,j=e.children,b=Object(a.a)(e,o),f=Object(i.useCallback)((function(e){null===l||void 0===l||l(e.target.checked,e)}),[l]);return Object(u.jsx)(r.a,{component:"label",className:s()("text-primary p-2",d),children:Object(u.jsxs)("div",{className:"inline-flex items-center cursor-pointer",children:[Object(u.jsx)("input",Object(t.a)(Object(t.a)({},b),{},{type:"radio",className:"inline-block w-4 h-4",defaultChecked:n,checked:c,onChange:f})),Object(u.jsx)("span",{className:"inline-block ml-2 whitespace-nowrap",children:j})]})})}},923:function(e,n,c){"use strict";var t=c(75),a=c(1);n.a=function(e){var n=Object(a.useState)(e),c=Object(t.a)(n,2),i=c[0],l=c[1];return Object(a.useEffect)((function(){l(e)}),[e]),[i,l]}},951:function(e,n,c){"use strict";c.d(n,"a",(function(){return d}));var t=c(15),a=c(54),i=c(1),l=c(48),s=c.n(l),r=c(233),u=c(2),o=["defaultChecked","checked","onChange","className","children"],d=function(e){var n=e.defaultChecked,c=e.checked,l=e.onChange,d=e.className,j=e.children,b=Object(a.a)(e,o),f=Object(i.useCallback)((function(e){null===l||void 0===l||l(e.target.checked,e)}),[l]);return Object(u.jsx)(r.a,{component:"label",className:s()("text-primary p-2",d),children:Object(u.jsxs)("div",{className:"inline-flex items-center cursor-pointer",children:[Object(u.jsx)("input",Object(t.a)(Object(t.a)({},b),{},{type:"checkbox",className:"inline-block w-4 h-4",defaultChecked:n,checked:c,onChange:f})),Object(u.jsx)("span",{className:"inline-block ml-2 whitespace-nowrap",children:j})]})})}},952:function(e,n,c){"use strict";c.d(n,"a",(function(){return j}));var t=c(75),a=c(1),i=c(48),l=c.n(i),s=c(236),r=c(233),u=c(885),o=c(923),d=c(2),j=function(e){var n=e.open,c=e.onToggle,i=e.title,j=e.subtitle,b=e.className,f=e.children,O=Object(o.a)(n),v=Object(t.a)(O,2),h=v[0],x=v[1],m=Object(a.useCallback)((function(){x((function(e){var n=!e;return null===c||void 0===c||c(n),n}))}),[x,c]);return Object(d.jsxs)("div",{className:"flex flex-col w-full",children:[Object(d.jsx)(r.a,{onClick:m,className:l()("p-1 cursor-pointer",b),children:Object(d.jsxs)("div",{className:"flex flex-col",children:[Object(d.jsxs)("div",{className:"flex items-center",children:[Object(d.jsx)(u.a,{children:i}),Object(d.jsx)(s.a,{name:h?"expand_less":"expand_more"})]}),!h&&j&&Object(d.jsx)(u.a,{className:"mt-2",children:j})]})}),h&&f]})}}}]);
//# sourceMappingURL=17.4cc32163.chunk.js.map