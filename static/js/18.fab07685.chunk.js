(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[18],{1057:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return A}));var c=t(32),a=t.n(c),i=t(101),l=t(53),r=t(11),s=t(73),u=t(2),o=t(897),d=t.n(o),j=t(948),b=t.n(j),f=t(193),O=t.n(f),v=t(252),h=t(895),x=t(898),m=t(956),p=t(911),k=t(936),g=t(3),N=function(e){var n=e.label,t=e.options,c=e.defaultValue,a=e.value,i=e.onChange,l=e.closeOnChange,r=Object(u.useState)(!1),o=Object(s.a)(r,2),d=o[0],j=o[1],b=Object(k.a)(a||c),f=Object(s.a)(b,2),v=f[0],h=f[1],x=Object(u.useMemo)((function(){return Array.isArray(t)?t.map((function(e,n){return"string"===typeof e?{title:e,value:n}:e})):[]}),[t]),N=Object(u.useMemo)((function(){return x.find((function(e){return e.value===v}))}),[x,v]),C=Object(u.useCallback)((function(e){h(e),null===i||void 0===i||i(e),l&&j(!1)}),[h,i,l]),w=Object(u.useCallback)((function(e){return function(n){n&&C(e.value)}}),[C]);return Object(g.jsx)(m.a,{open:d,onToggle:j,title:n,subtitle:null===N||void 0===N?void 0:N.title,children:Object(g.jsx)("div",{className:"flex flex-col",children:O()(x,(function(e){return Object(g.jsx)(p.a,{checked:e.value===v,onChange:w(e),children:e.title},e.value)}))})})},C=t(888),w=t(253),y=t(892),M=t(196),F=t(361),S=function(e){var n=e.setting,t=e.onChange;return Object(g.jsx)(x.a,{className:"w-full",defaultChecked:n.value===v.a.True,onChange:t,children:n.label})},T=function(e){var n=e.setting,t=e.onChange,c=Object(u.useMemo)((function(){return O()(n.value,(function(e){return"".concat(e.label," ").concat(e.description?"(".concat(e.description,")"):"")}))}),[n.value]);return Object(g.jsx)(N,{defaultValue:b()(n.value,(function(e){return e.selected===v.a.True})),label:n.label,onChange:t,options:c,closeOnChange:!0})},A=function(){var e,n,t=Object(y.a)("user").data,c=Object(y.a)("deviceInfo").data,o=Object(M.a)("saveDeviceSettings").saveDeviceSettingsAsync,j=Object(M.a)("deactivate").deactivate,b=Object(u.useState)({}),f=Object(s.a)(b,2),v=f[0],x=f[1],m=Object(F.a)(),p=m.software,k=m.hardware,N=Object(u.useMemo)((function(){var e;return d()(O()(null===c||void 0===c||null===(e=c.device)||void 0===e?void 0:e.settings,(function(e,n){return Object(r.a)(Object(r.a)({},e),{},{key:n})})),(function(e){return"undefined"===typeof e.type}))}),[null===c||void 0===c||null===(e=c.device)||void 0===e?void 0:e.settings]),A=Object(u.useMemo)((function(){var e;return d()(O()(null===c||void 0===c||null===(e=c.device)||void 0===e?void 0:e.settings,(function(e,n){return Object(r.a)(Object(r.a)({},e),{},{key:n})})),(function(e){return"list"===e.type}))}),[null===c||void 0===c||null===(n=c.device)||void 0===n?void 0:n.settings]),D=Object(u.useCallback)((function(e){return function(){var n=Object(l.a)(a.a.mark((function n(t){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:x(Object(r.a)(Object(r.a)({},v),{},Object(i.a)({},e.key,t)));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}),[v]),E=Object(u.useCallback)((function(e){return function(n){x(Object(r.a)(Object(r.a)({},v),{},Object(i.a)({},e.key,e.value[n].id)))}}),[v]),J=Object(u.useCallback)(Object(l.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o([null===c||void 0===c?void 0:c.device.id,v]);case 2:window.location.reload();case 3:case"end":return e.stop()}}),e)}))),[v,null===c||void 0===c?void 0:c.device,o]),R=Object(u.useCallback)((function(){j([])}),[j]);return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(C.a,{title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430"}),Object(g.jsxs)("div",{className:"h-screen relative",children:[Object(g.jsx)(w.a,{className:"m-1 mb-3",children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430"}),Object(g.jsx)("div",{className:"flex flex-col",children:(null===c||void 0===c?void 0:c.device)&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{className:"flex flex-wrap pb-4",children:O()(N,(function(e){return Object(g.jsx)("div",{className:"flex w-1/2 pr-4",children:Object(g.jsx)(S,{setting:e,onChange:D(e)})},e.key)}))},"bool-".concat(null===c||void 0===c?void 0:c.device.updated)),Object(g.jsx)("div",{className:"flex flex-wrap pb-4",children:O()(A,(function(e){return Object(g.jsx)("div",{className:"flex w-1/2 pr-4",children:Object(g.jsx)(T,{setting:e,onChange:E(e)})},e.key)}))},"list-".concat(null===c||void 0===c?void 0:c.device.updated))]}),Object(g.jsx)("div",{className:"flex my-8",children:Object(g.jsx)(h.a,{icon:"done",onClick:J,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]})}),Object(g.jsxs)("div",{className:"flex justify-between absolute bottom-0 left-0 right-0 py-2",children:[Object(g.jsxs)("div",{children:[Object(g.jsx)(w.a,{children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"}),Object(g.jsxs)("div",{className:"flex items-center",children:[(null===t||void 0===t?void 0:t.user)&&Object(g.jsxs)(w.a,{className:"mr-4",children:[t.user.profile.name||t.user.username," (",Math.floor(t.user.subscription.days)," \u0434\u043d.)"]}),Object(g.jsx)(h.a,{icon:"logout",onClick:R,children:"\u0412\u044b\u0445\u043e\u0434"})]})]}),Object(g.jsxs)("div",{className:"flex flex-col items-end pr-4",children:[Object(g.jsx)(w.a,{children:k}),Object(g.jsx)(w.a,{children:p})]})]})]})]})}},888:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var c=t(11),a=t(893),i=t(3),l=function(e){return Object(i.jsx)(a.a,Object(c.a)({defaultTitle:"Unknown",titleTemplate:"%s | Kinopub WebOS"},e))}},892:function(e,n,t){"use strict";var c=t(105),a=t(2),i=t(902),l=t(252);n.a=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=arguments.length>2?arguments[2]:void 0,r=Object(a.useMemo)((function(){return new l.c}),[]),s=Object(i.a)([e].concat(Object(c.a)(n)),(function(){return r[e].apply(r,Object(c.a)(n))}),t);return s}},895:function(e,n,t){"use strict";t.d(n,"a",(function(){return j}));var c=t(11),a=t(57),i=t(2),l=t(52),r=t.n(l),s=t(258),u=t(251),o=t(3),d=["icon","iconOnly","children","autoFocus","className"],j=function(e){var n=e.icon,t=e.iconOnly,l=e.children,j=e.autoFocus,b=e.className,f=Object(a.a)(e,d),O=Object(i.useRef)(null);return Object(i.useEffect)((function(){var e;return j&&(e=requestAnimationFrame((function(){var e,n;null===(e=O.current)||void 0===e||null===(n=e.node)||void 0===n||n.focus()}))),function(){e&&cancelAnimationFrame(e)}}),[O,j]),Object(o.jsx)(u.a,Object(c.a)(Object(c.a)({},f),{},{ref:O,className:r()("text-gray-200 whitespace-nowrap cursor-pointer rounded px-2 py-1",b),role:"button",children:Object(o.jsxs)("div",{className:"flex items-center",children:[n&&Object(o.jsx)(s.a,{className:r()({"mr-2":!t}),name:n}),!t&&l]})}))}},898:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var c=t(11),a=t(57),i=t(2),l=t(52),r=t.n(l),s=t(251),u=t(3),o=["defaultChecked","checked","onChange","className","children"],d=function(e){var n=e.defaultChecked,t=e.checked,l=e.onChange,d=e.className,j=e.children,b=Object(a.a)(e,o),f=Object(i.useRef)(null),O=Object(i.useCallback)((function(e){null===l||void 0===l||l(e.target.checked,e)}),[l]),v=Object(i.useCallback)((function(){var e;null===(e=f.current)||void 0===e||e.click()}),[]);return Object(u.jsx)(s.a,{component:"label",className:r()("text-gray-200 p-2",d),onClick:v,role:"button",children:Object(u.jsxs)("div",{className:"inline-flex items-center cursor-pointer",children:[Object(u.jsx)("input",Object(c.a)(Object(c.a)({type:"checkbox"},b),{},{ref:f,className:"inline-block w-4 h-4",defaultChecked:n,checked:t,onChange:O})),Object(u.jsx)("span",{className:"inline-block ml-2 whitespace-nowrap",children:j})]})})}},911:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var c=t(11),a=(t(2),t(898)),i=t(3),l=function(e){return Object(i.jsx)(a.a,Object(c.a)(Object(c.a)({},e),{},{type:"radio"}))}},936:function(e,n,t){"use strict";var c=t(73),a=t(2);n.a=function(e){var n=Object(a.useState)(e),t=Object(c.a)(n,2),i=t[0],l=t[1];return Object(a.useEffect)((function(){l(e)}),[e]),[i,l]}},956:function(e,n,t){"use strict";t.d(n,"a",(function(){return j}));var c=t(73),a=t(2),i=t(52),l=t.n(i),r=t(258),s=t(251),u=t(253),o=t(936),d=t(3),j=function(e){var n=e.open,t=e.onToggle,i=e.title,j=e.subtitle,b=e.className,f=e.children,O=Object(o.a)(n),v=Object(c.a)(O,2),h=v[0],x=v[1],m=Object(a.useCallback)((function(){x((function(e){var n=!e;return null===t||void 0===t||t(n),n}))}),[x,t]);return Object(d.jsxs)("div",{className:"flex flex-col w-full",children:[Object(d.jsx)(s.a,{onClick:m,className:l()("p-1 cursor-pointer",b),children:Object(d.jsxs)("div",{className:"flex flex-col",children:[Object(d.jsxs)("div",{className:"flex items-center",children:[Object(d.jsx)(u.a,{children:i}),Object(d.jsx)(r.a,{name:h?"expand_less":"expand_more"})]}),!h&&j&&Object(d.jsx)(u.a,{className:"mt-2",children:j})]})}),h&&f]})}}}]);
//# sourceMappingURL=18.fab07685.chunk.js.map