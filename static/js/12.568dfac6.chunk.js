(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[12],{1053:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return W}));var c=n(32),i=n.n(c),l=n(53),o=n(73),r=n(2),a=n(31),s=n(193),u=n.n(s),d=n(252),b=n(895),j=n(896),v=n(910),f=n(890),O=n(956),m=n(891),h=n(8),x=n(3),p=function(e){var t=e.item,n=e.season,c=Object(a.g)(),i=Object(r.useCallback)((function(e){return function(){(null===e||void 0===e?void 0:e.id)&&c.push(Object(h.b)(h.a.Video,{videoId:e.id}),{item:t,video:e,season:n})}}),[t,n,c]);return Object(x.jsx)("div",{className:"flex flex-col",children:Object(x.jsx)(O.a,{title:"\u0421\u0435\u0437\u043e\u043d ".concat(n.number),children:Object(x.jsx)("div",{className:"flex flex-wrap",children:u()(n.episodes,(function(e){return Object(x.jsx)(m.a,{source:e.thumbnail,caption:"\u042d\u043f\u0438\u0437\u043e\u0434 ".concat(e.number),onClick:i(e),children:e.watched===d.b.Watched&&Object(x.jsx)("div",{className:"absolute flex justify-center items-center rounded-xl bg-black bg-opacity-60 top-0 bottom-0 left-0 right-0",children:"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u043e"})},e.id)}))})})})},g=n(253),k=function(e){var t=e.item,n=e.seasons;return(null===n||void 0===n?void 0:n.length)?Object(x.jsxs)("div",{className:"p-8",children:[Object(x.jsx)(g.a,{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0441\u0435\u0437\u043e\u043d\u043e\u0432"}),u()(n,(function(e){return Object(x.jsx)(p,{item:t,season:e},e.id)}))]}):null},N=n(888),w=n(898),C=n(892),y=n(196),T=function(e){var t=e.itemId,n=Object(C.a)("bookmarks").data,c=Object(C.a)("itemBookmarks",[t]),o=c.data,a=c.dataUpdatedAt,s=c.refetch,d=Object(y.a)("bookmarkToggleItem").bookmarkToggleItemAsync,b=Object(r.useMemo)((function(){return(null===o||void 0===o?void 0:o.folders.map((function(e){return e.id})))||[]}),[null===o||void 0===o?void 0:o.folders]),j=Object(r.useCallback)((function(e){return Object(l.a)(i.a.mark((function n(){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d([t,e.id]);case 2:s();case 3:case"end":return n.stop()}}),n)})))}),[t,d,s]);return Object(x.jsx)("div",{className:"flex flex-wrap",children:u()(null===n||void 0===n?void 0:n.items,(function(e){return Object(x.jsx)("div",{className:"w-1/5 p-1",children:Object(x.jsx)(w.a,{defaultChecked:b.includes(e.id),onChange:j(e),children:e.title})},e.updated)}))},a)},I=n(256),M=n(1050),E=n.n(M),R=n(270);var S=function(){var e=Object(C.a)("streamingTypes").data,t=Object(C.a)("deviceInfo").data,n=Object(R.a)("streaming_type"),c=Object(o.a)(n,2)[1],i=Object(r.useMemo)((function(){return E()(null===t||void 0===t?void 0:t.device.settings.streamingType.value,(function(e){return e.selected===d.a.True}))}),[null===t||void 0===t?void 0:t.device]),l=Object(r.useMemo)((function(){return E()(null===e||void 0===e?void 0:e.items,(function(e){return(null===e||void 0===e?void 0:e.id)===(null===i||void 0===i?void 0:i.id)}))}),[null===e||void 0===e?void 0:e.items,i]);Object(r.useEffect)((function(){(null===l||void 0===l?void 0:l.code)&&c(null===l||void 0===l?void 0:l.code)}),[c,null===l||void 0===l?void 0:l.code])},A=n(954),F=function(e){var t=e.itemId,n=Object(C.a)("itemSmiliar",[t]).data;return n&&n.items.length>0?Object(x.jsx)("div",{className:"p-8",children:Object(x.jsx)(j.a,{title:"\u041f\u043e\u0445\u043e\u0436\u0438\u0435",items:n.items,scrollable:!1})}):null},W=function(){var e,t,n,c,s,j,O=Object(a.g)(),m=Object(a.i)().itemId,p=Object(r.useState)(!1),w=Object(o.a)(p,2),M=w[0],E=w[1],R=Object(C.a)("itemMedia",[m],{staleTime:0}),W=R.data,V=R.refetch,_=Object(y.a)("watchingToggleWatchlist").watchingToggleWatchlistAsync,z=Object(r.useMemo)((function(){var e,t;return(null===W||void 0===W||null===(e=W.item.videos)||void 0===e?void 0:e.find((function(e){return e.watching.status!==d.b.Watched})))||(null===W||void 0===W||null===(t=W.item.videos)||void 0===t?void 0:t[0])}),[null===W||void 0===W?void 0:W.item]),B=Object(r.useMemo)((function(){var e,t;return(null===W||void 0===W||null===(e=W.item.seasons)||void 0===e?void 0:e.find((function(e){return e.watching.status!==d.b.Watched})))||(null===W||void 0===W||null===(t=W.item.seasons)||void 0===t?void 0:t[0])}),[null===W||void 0===W?void 0:W.item]),L=Object(r.useMemo)((function(){return(null===B||void 0===B?void 0:B.episodes.find((function(e){return e.watching.status!==d.b.Watched})))||(null===B||void 0===B?void 0:B.episodes[0])}),[B]),D=Object(r.useMemo)((function(){return null===W||void 0===W?void 0:W.item.trailer}),[null===W||void 0===W?void 0:W.item]),J=z||L,P=Object(r.useMemo)((function(){return Object(A.a)(null===W||void 0===W?void 0:W.item,J,B)}),[null===W||void 0===W?void 0:W.item,B,J]),U=Object(r.useCallback)((function(){(null===J||void 0===J?void 0:J.id)&&O.push(Object(h.b)(h.a.Video,{videoId:J.id}),{item:null===W||void 0===W?void 0:W.item,video:J,season:B})}),[O,null===W||void 0===W?void 0:W.item,B,J]),q=Object(r.useCallback)((function(){(null===D||void 0===D?void 0:D.id)&&O.push(Object(h.b)(h.a.Trailer,{trailerId:D.id}),{item:null===W||void 0===W?void 0:W.item,trailer:D})}),[O,null===W||void 0===W?void 0:W.item,D]),G=Object(r.useCallback)((function(){E(!0)}),[]),K=Object(r.useCallback)((function(){E(!1)}),[]),Y=Object(r.useCallback)((function(){!M&&G()}),[M,G]),H=Object(r.useCallback)(Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_([m]);case 2:V();case 3:case"end":return e.stop()}}),e)}))),[m,_,V]);return S(),Object(I.a)(["Play","Red"],U),Object(I.a)("Green",q),Object(I.a)("Yellow",H),Object(I.a)("Blue",Y),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(N.a,{title:"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 ".concat(P)}),Object(x.jsxs)(f.a,{children:[Object(x.jsxs)("div",{className:"relative w-screen h-screen",children:[Object(x.jsx)("img",{className:"absolute w-screen h-screen object-cover -z-1",src:(null===W||void 0===W||null===(e=W.item)||void 0===e?void 0:e.posters.wide)||(null===W||void 0===W||null===(t=W.item)||void 0===t?void 0:t.posters.big),alt:P}),Object(x.jsx)(g.a,{className:"p-4 absolute top-0",children:P}),Object(x.jsxs)("div",{className:"absolute flex bottom-8 left-4 right-4",children:[Object(x.jsxs)("div",{children:[Object(x.jsx)(b.a,{icon:"play_circle_outline",onClick:U,className:"mr-2",children:"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c"}),Object(x.jsx)(b.a,{icon:"bookmark",onClick:G,className:"mr-2",children:"\u0412 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"}),Object(x.jsx)(v.a,{visible:M,onClose:K,children:Object(x.jsx)(T,{itemId:m},"".concat(m,"-").concat(M))})]}),Object(x.jsxs)("div",{children:[D&&Object(x.jsx)(b.a,{icon:"videocam",onClick:q,children:"\u0422\u0440\u0435\u0439\u043b\u0435\u0440"}),"boolean"===typeof(null===W||void 0===W||null===(n=W.item)||void 0===n?void 0:n.subscribed)&&Object(x.jsx)(b.a,{icon:(null===W||void 0===W||null===(c=W.item)||void 0===c?void 0:c.subscribed)?"visibility_off":"visibility",onClick:H,children:(null===W||void 0===W?void 0:W.item.subscribed)?"\u041d\u0435 \u0431\u0443\u0434\u0443 \u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c":"\u0411\u0443\u0434\u0443 \u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c"})]})]})]}),Object(x.jsx)(k,{item:null===W||void 0===W?void 0:W.item,seasons:null===W||void 0===W||null===(s=W.item)||void 0===s?void 0:s.seasons}),Object(x.jsxs)("div",{className:"flex flex-col p-8 whitespace-pre-wrap",children:[Object(x.jsx)(g.a,{children:null===W||void 0===W?void 0:W.item.plot}),!!(null===W||void 0===W||null===(j=W.item.tracklist)||void 0===j?void 0:j.length)&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(g.a,{className:"my-4",children:"\u0422\u0440\u0435\u043a\u043b\u0438\u0441\u0442"}),Object(x.jsx)("div",{className:"flex flex-wrap flex-col h-96",children:u()(null===W||void 0===W?void 0:W.item.tracklist,(function(e,t){return Object(x.jsxs)(g.a,{children:[t+1,". ",e.title]},t)}))})]})]}),Object(x.jsx)(F,{itemId:m})]})]})}},888:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(11),i=n(893),l=n(3),o=function(e){return Object(l.jsx)(i.a,Object(c.a)({defaultTitle:"Unknown",titleTemplate:"%s | Kinopub WebOS"},e))}},890:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var c=n(11),i=n(57),l=n(2),o=n(52),r=n.n(o),a=n(73),s=n(106),u=function(e,t,n){var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{disconnectOnLeave:!1},i=t.onEnterViewport,o=t.onLeaveViewport,r=Object(l.useState)(),u=Object(a.a)(r,2),d=u[1],b=Object(l.useRef)(null),j=Object(l.useRef)(!1),v=Object(l.useRef)(!1),f=Object(l.useRef)(0),O=Object(l.useRef)(0),m=Object(l.useCallback)((function(){if(e.current&&b.current){var t=Object(s.findDOMNode)(e.current);t&&b.current.observe(t)}}),[e,b]),h=Object(l.useCallback)((function(){if(e.current&&b.current){var t=Object(s.findDOMNode)(e.current);t&&(b.current.unobserve(t),b.current.disconnect(),b.current=null)}}),[e,b]),x=Object(l.useCallback)((function(e){var t=e[0]||{},n=t.isIntersecting,l=t.intersectionRatio,r="undefined"!==typeof n?n:l>0;if(!v.current&&r)return v.current=!0,null===i||void 0===i||i(),f.current+=1,j.current=r,void d(r);v.current&&!r&&(v.current=!1,null===o||void 0===o||o(),c.disconnectOnLeave&&b.current&&b.current.disconnect(),O.current+=1,j.current=r,d(r))}),[b,c.disconnectOnLeave,i,o]),p=Object(l.useCallback)((function(){b.current||(b.current=new IntersectionObserver(x,n))}),[b,n,x]);return Object(l.useEffect)((function(){return p(),m(),function(){h()}}),[p,m,h]),{inViewport:j.current,enterCount:f.current,leaveCount:O.current}},d=n(3),b=["children","className","onScrollToEnd"],j=function(e){var t=e.children,n=e.className,o=e.onScrollToEnd,a=Object(i.a)(e,b),s=Object(l.useRef)(null);return u(s,{onEnterViewport:o}),Object(d.jsxs)("div",Object(c.a)(Object(c.a)({className:r()("overflow-y-auto h-full",n)},a),{},{children:[t,Object(d.jsx)("div",{className:"h-40",ref:s})]}))}},891:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var c=n(11),i=n(57),l=n(52),o=n.n(l),r=n(251),a=n(3),s=["className","wrapperClassName","source","caption","children"],u=function(e){var t=e.className,n=e.wrapperClassName,l=e.source,u=e.caption,d=e.children,b=Object(i.a)(e,s);return Object(a.jsx)(r.a,Object(c.a)(Object(c.a)({},b),{},{className:o()("rounded-xl w-1/5",n),children:Object(a.jsxs)("div",{className:o()("h-40 m-1 flex flex-col relative overflow-hidden cursor-pointer",t),children:[Object(a.jsx)("img",{loading:"lazy",className:"w-full h-full object-cover rounded-xl border-2 border-gray-300 bg-gray-300",src:l,alt:u}),Object(a.jsx)("div",{className:"px-2",children:Object(a.jsx)("p",{className:"text-gray-200 text-sm text-center overflow-hidden whitespace-nowrap",children:u})}),d]})}))}},892:function(e,t,n){"use strict";var c=n(105),i=n(2),l=n(902),o=n(252);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0,r=Object(i.useMemo)((function(){return new o.c}),[]),a=Object(l.a)([e].concat(Object(c.a)(t)),(function(){return r[e].apply(r,Object(c.a)(t))}),n);return a}},895:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var c=n(11),i=n(57),l=n(2),o=n(52),r=n.n(o),a=n(258),s=n(251),u=n(3),d=["icon","iconOnly","children","autoFocus","className"],b=function(e){var t=e.icon,n=e.iconOnly,o=e.children,b=e.autoFocus,j=e.className,v=Object(i.a)(e,d),f=Object(l.useRef)(null);return Object(l.useEffect)((function(){var e;return b&&(e=requestAnimationFrame((function(){var e,t;null===(e=f.current)||void 0===e||null===(t=e.node)||void 0===t||t.focus()}))),function(){e&&cancelAnimationFrame(e)}}),[f,b]),Object(u.jsx)(s.a,Object(c.a)(Object(c.a)({},v),{},{ref:f,className:r()("text-gray-200 whitespace-nowrap cursor-pointer rounded px-2 py-1",j),role:"button",children:Object(u.jsxs)("div",{className:"flex items-center",children:[t&&Object(u.jsx)(a.a,{className:r()({"mr-2":!n}),name:t}),!n&&o]})}))}},896:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var c=n(105),i=n(2),l=n(52),o=n.n(l),r=n(193),a=n.n(r),s=n(890),u=n(253),d=n(31),b=n(891),j=n(8),v=n(3),f=function(e){var t=e.item,n=e.className,c=Object(d.g)(),l=Object(i.useMemo)((function(){var e;return null===t||void 0===t||null===(e=t.title)||void 0===e?void 0:e.split("/")[0]}),[null===t||void 0===t?void 0:t.title]),r=Object(i.useCallback)((function(){(null===t||void 0===t?void 0:t.id)&&c.push(Object(j.b)(j.a.Item,{itemId:t.id}))}),[null===t||void 0===t?void 0:t.id,c]);return Object(v.jsx)(b.a,{onClick:r,source:null===t||void 0===t?void 0:t.posters.medium,caption:l,className:o()("h-72",n),children:(null===t||void 0===t?void 0:t.new)&&Object(v.jsx)("div",{className:"absolute bg-red-600 border-gray-300 border-t-2 border-r-2 text-gray-200 px-2 py-1 rounded-bl rounded-tr-xl top-0 right-0",children:null===t||void 0===t?void 0:t.new})})},O=function(e){var t=e.title,n=e.items,i=e.loading,l=e.onScrollToEnd,r=e.scrollable,d=void 0===r||r,b=e.className,j=Object(v.jsxs)("div",{children:[t&&Object(v.jsx)(u.a,{className:"m-1 mb-3",children:t}),Object(v.jsxs)("div",{className:o()("flex flex-wrap",b),children:[a()(n,(function(e){return Object(v.jsx)(f,{item:e},e.id)})),i&&a()(Object(c.a)(new Array(15)),(function(e,t){return Object(v.jsx)(f,{},t)}))]})]});return d?Object(v.jsx)(s.a,{onScrollToEnd:l,children:j}):j}},898:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var c=n(11),i=n(57),l=n(2),o=n(52),r=n.n(o),a=n(251),s=n(3),u=["defaultChecked","checked","onChange","className","children"],d=function(e){var t=e.defaultChecked,n=e.checked,o=e.onChange,d=e.className,b=e.children,j=Object(i.a)(e,u),v=Object(l.useRef)(null),f=Object(l.useCallback)((function(e){null===o||void 0===o||o(e.target.checked,e)}),[o]),O=Object(l.useCallback)((function(){var e;null===(e=v.current)||void 0===e||e.click()}),[]);return Object(s.jsx)(a.a,{component:"label",className:r()("text-gray-200 p-2",d),onClick:O,role:"button",children:Object(s.jsxs)("div",{className:"inline-flex items-center cursor-pointer",children:[Object(s.jsx)("input",Object(c.a)(Object(c.a)({type:"checkbox"},j),{},{ref:v,className:"inline-block w-4 h-4",defaultChecked:t,checked:n,onChange:f})),Object(s.jsx)("span",{className:"inline-block ml-2 whitespace-nowrap",children:b})]})})}},910:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var c=n(11),i=n(57),l=n(2),o=n(257),r=n.n(o),a=n(52),s=n.n(a),u=n(914),d=n.n(u),b=n(3),j=d()({enterTo:"default-element",defaultElement:".spottable",selector:".spottable",overflow:!0,preserveId:!0},(function(e){return Object(b.jsx)("div",Object(c.a)({},e))})),v=n(256),f=["visible","onClose","className"],O=function(e){var t=e.visible,n=e.onClose,o=e.className,a=Object(i.a)(e,f),u=Object(l.useMemo)((function(){return r.a.add({})}),[]),d=Object(l.useCallback)((function(){n(!1)}),[n]),O=Object(l.useCallback)((function(){if(t)return d(),!1}),[t,d]),m=Object(l.useCallback)((function(){if(!r.a.focus(u)){var e=r.a.getCurrent();e&&e.blur(),r.a.setActiveContainer(u),setTimeout((function(){r.a.setPointerMode(!1),r.a.focus(u)}),500)}}),[u]);return Object(v.a)("Back",O),Object(v.a)("Blue",O),Object(l.useEffect)((function(){t&&m()}),[t,m]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:s()("fixed z-999 top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50",{hidden:!t}),onClick:d}),Object(b.jsx)(j,Object(c.a)(Object(c.a)({},a),{},{spotlightId:u,spotlightRestrict:"self-only",spotlightDisabled:!t,className:s()("fixed z-999 bottom-0 left-0 right-0 p-4 bg-black ring",{hidden:!t},o)}))]})}},936:function(e,t,n){"use strict";var c=n(73),i=n(2);t.a=function(e){var t=Object(i.useState)(e),n=Object(c.a)(t,2),l=n[0],o=n[1];return Object(i.useEffect)((function(){o(e)}),[e]),[l,o]}},954:function(e,t,n){"use strict";function c(e,t,n){return n?"".concat(null===e||void 0===e?void 0:e.title," (s").concat(n.number,"e").concat((null===t||void 0===t?void 0:t.number)||1,")"):null===e||void 0===e?void 0:e.title}n.d(t,"a",(function(){return c}))},956:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var c=n(73),i=n(2),l=n(52),o=n.n(l),r=n(258),a=n(251),s=n(253),u=n(936),d=n(3),b=function(e){var t=e.open,n=e.onToggle,l=e.title,b=e.subtitle,j=e.className,v=e.children,f=Object(u.a)(t),O=Object(c.a)(f,2),m=O[0],h=O[1],x=Object(i.useCallback)((function(){h((function(e){var t=!e;return null===n||void 0===n||n(t),t}))}),[h,n]);return Object(d.jsxs)("div",{className:"flex flex-col w-full",children:[Object(d.jsx)(a.a,{onClick:x,className:o()("p-1 cursor-pointer",j),children:Object(d.jsxs)("div",{className:"flex flex-col",children:[Object(d.jsxs)("div",{className:"flex items-center",children:[Object(d.jsx)(s.a,{children:l}),Object(d.jsx)(r.a,{name:m?"expand_less":"expand_more"})]}),!m&&b&&Object(d.jsx)(s.a,{className:"mt-2",children:b})]})}),m&&v]})}}}]);
//# sourceMappingURL=12.568dfac6.chunk.js.map