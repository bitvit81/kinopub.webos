(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[13],{517:function(e,t,n){"use strict";n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return h}));var o=n(6),i=n(32),r=n(20),c=n(0),a=n(526),u=n.n(a),l=n(21),s=n(46),d=n(38),p=function(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{disconnectOnLeave:!1},i=t.onEnterViewport,r=t.onLeaveViewport,a=Object(c.useState)(),u=Object(s.a)(a,2),l=u[1],p=Object(c.useRef)(null),f=Object(c.useRef)(!1),b=Object(c.useRef)(!1),v=Object(c.useRef)(0),j=Object(c.useRef)(0),O=Object(c.useCallback)((function(){if(e.current&&p.current){var t=Object(d.findDOMNode)(e.current);t&&p.current.observe(t)}}),[e,p]),h=Object(c.useCallback)((function(){if(e.current&&p.current){var t=Object(d.findDOMNode)(e.current);t&&(p.current.unobserve(t),p.current.disconnect(),p.current=null)}}),[e,p]),m=Object(c.useCallback)((function(e){var t=e[0]||{},n=t.isIntersecting,c=t.intersectionRatio,a="undefined"!==typeof n?n:c>0;if(!b.current&&a)return b.current=!0,null===i||void 0===i||i(),v.current+=1,f.current=a,void l(a);b.current&&!a&&(b.current=!1,null===r||void 0===r||r(),o.disconnectOnLeave&&p.current&&p.current.disconnect(),j.current+=1,f.current=a,l(a))}),[p,o.disconnectOnLeave,i,r]),g=Object(c.useCallback)((function(){p.current||(p.current=new IntersectionObserver(m,n))}),[p,n,m]);return Object(c.useEffect)((function(){return g(),O(),function(){h()}}),[g,O,h]),{inViewport:f.current,enterCount:v.current,leaveCount:j.current}},f=n(724);var b,v=function(e){var t=Object(f.a)();return Object(c.useMemo)((function(){return"".concat(e,"-").concat(t)}),[e,t])},j=n(1),O=l.b.div(b||(b=Object(r.a)(["\n  height: 5rem;\n"]))),h=Object(c.createContext)({}),m=function(e){var t=e.children,n=e.onScrollToEnd,r=Object(i.a)(e,["children","onScrollToEnd"]),a=Object(c.useRef)(null),l=v("scrollable"),s=Object(c.useMemo)((function(){return{id:l}}),[l]);return p(a,{onEnterViewport:n}),Object(j.jsxs)(u.a,Object(o.a)(Object(o.a)({id:l,direction:"vertical",verticalScrollbar:"hidden",horizontalScrollbar:"hidden"},r),{},{children:[Object(j.jsx)(h.Provider,{value:s,children:t}),Object(j.jsx)(O,{ref:a})]}))}},518:function(e,t,n){"use strict";var o=n(76),i=n(0),r=n(538),c=n(142);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0,a=Object(i.useMemo)((function(){return new c.c}),[]),u=Object(r.a)([e].concat(Object(o.a)(t)),(function(){return a[e].apply(a,Object(o.a)(t))}),n);return u}},519:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var o,i=n(20),r=n(522),c=n.n(r),a=n(21),u=Object(a.b)(c.a)(o||(o=Object(i.a)([""])))},520:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(6),i=n(0),r=n(527),c=n.n(r),a=n(517),u=n(1),l=function(e){var t=Object(i.useContext)(a.a).id;return Object(u.jsx)(c.a,Object(o.a)({once:!0,offset:100,scrollContainer:t&&"#".concat(t)},e))};var s=l},523:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var o,i,r,c=n(76),a=n(0),u=n(102),l=n.n(u),s=n(517),d=n(20),p=n(514),f=n(525),b=n.n(f),v=n(21),j=n(520),O=n(5),h=n(1),m=Object(v.b)(j.a)(o||(o=Object(d.a)(["\n  display: inline-flex;\n  position: relative;\n  height: 20rem !important;\n  width: 20%;\n"]))),g=Object(v.b)(b.a)(i||(i=Object(d.a)(["\n  width: 100%;\n"]))),y=v.b.div(r||(r=Object(d.a)(["\n  position: absolute;\n  background: var(--main-color);\n  right: 0;\n  z-index: 1;\n  padding: 0 0.5em;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n  margin-right: 0.25rem;\n"]))),w=function(e){var t=e.item,n=Object(p.e)(),o=Object(a.useCallback)((function(){(null===t||void 0===t?void 0:t.id)&&n.push(Object(O.b)(O.a.Item,{itemId:t.id}))}),[null===t||void 0===t?void 0:t.id,n]);return Object(h.jsxs)(m,{height:"20rem",children:[Object(h.jsx)(y,{children:null===t||void 0===t?void 0:t.new}),Object(h.jsx)(g,{source:null===t||void 0===t?void 0:t.posters.medium,caption:null===t||void 0===t?void 0:t.title,onClick:o})]})},x=function(e){var t=e.items,n=e.loading,o=e.onScrollToEnd,i=e.scrollable,r=void 0===i||i,a=Object(h.jsxs)(h.Fragment,{children:[l()(t,(function(e){return Object(h.jsx)(w,{item:e},e.id)})),n&&l()(Object(c.a)(new Array(15)),(function(e,t){return Object(h.jsx)(w,{},t)}))]});return r?Object(h.jsx)(s.b,{onScrollToEnd:o,children:a}):a}},548:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(6),i=n(32),r=n(0),c=n(559),a=n.n(c),u=n(146),l=n(1),s=function(e){var t=e.visible,n=e.onVisibilityChange,c=Object(i.a)(e,["visible","onVisibilityChange"]),s=Object(r.useCallback)((function(){n(!0)}),[n]),d=Object(r.useCallback)((function(){n(!1)}),[n]);return Object(r.useEffect)((function(){var e=function(e){Object(u.b)(e)&&t&&(e.stopPropagation(),n(!1))};return window.addEventListener("keydown",e,!0),function(){window.removeEventListener("keydown",e,!0)}}),[t,n]),Object(l.jsx)(a.a,Object(o.a)(Object(o.a)({},c),{},{open:t,onShow:s,onClose:d}))}},559:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PopupBase=t.Popup=t.default=void 0;var o=n(47),i=n(49),r=n(238),c=y(n(107)),a=y(n(10)),u=n(0),l=y(n(3)),s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=g();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var r=o?Object.getOwnPropertyDescriptor(e,i):null;r&&(r.get||r.set)?Object.defineProperty(n,i,r):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n(39)),d=y(n(106)),p=y(n(143)),f=y(n(578)),b=n(14),v=(y(n(63)),y(n(103))),j=y(n(232)),O=y(n(24)),h=y(n(579)),m=n(1);function g(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return g=function(){return e},e}function y(e){return e&&e.__esModule?e:{default:e}}function w(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=P(e);if(t){var i=P(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return k(this,n)}}function k(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){S(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var I=(0,o.is)("up"),T=(0,p.default)({enterTo:"default-element",preserveId:!0},f.default),D=function(e){return document.querySelector("[data-spotlight-id='".concat(e,"']"))},R=(0,b.forward)("onHide"),M=(0,b.forward)("onShow"),L=(0,a.default)({name:"PopupBase",propTypes:{children:l.default.node.isRequired,closeButtonAriaLabel:l.default.string,css:l.default.object,noAnimation:l.default.bool,onCloseButtonClick:l.default.func,onHide:l.default.func,onShow:l.default.func,open:l.default.bool,showCloseButton:l.default.bool,shrinkBody:l.default.bool,spotlightId:l.default.string,spotlightRestrict:l.default.oneOf(["none","self-first","self-only"])},defaultProps:{noAnimation:!1,open:!1,showCloseButton:!1,shrinkBody:!1,spotlightRestrict:"self-only"},styles:{css:h.default,className:"popup",publicClassNames:["popup","body","closeContainer","reserveClose"]},computed:{className:function(e){var t=e.showCloseButton;return e.styler.append({reserveClose:t})},closeButton:function(e){var t=e.closeButtonAriaLabel,n=e.css,o=e.onCloseButtonClick;if(e.showCloseButton){var i=null==t?(0,v.default)("Close"):t;return(0,m.jsx)(r.Cell,{shrink:!0,className:n.closeContainer,children:(0,m.jsx)(j.default,{className:n.closeButton,backgroundOpacity:"transparent",size:"small",onTap:o,"aria-label":i,children:"closex"})})}}},render:function(e){var t=e.children,n=e.closeButton,o=e.css,i=e.noAnimation,c=e.onHide,a=e.onShow,u=e.open,l=e.shrinkBody,s=e.spotlightId,d=e.spotlightRestrict,p=A(e,["children","closeButton","css","noAnimation","onHide","onShow","open","shrinkBody","spotlightId","spotlightRestrict"]);return delete p.closeButtonAriaLabel,delete p.onCloseButtonClick,delete p.showCloseButton,(0,m.jsx)(T,{className:o.popupTransitionContainer,direction:"down",duration:"short",noAnimation:i,onHide:c,onShow:a,spotlightDisabled:!u,spotlightId:s,spotlightRestrict:d,type:"slide",visible:u,children:(0,m.jsxs)(r.Row,B(B({"aria-live":"off",role:"alert"},p),{},{children:[(0,m.jsx)(r.Cell,{className:o.body,shrink:l,children:t}),n]}))})}});t.PopupBase=L;var E=(0,O.default)({defaultSkin:"light"},L),H=function(e){"none"===e.scrimType&&e.spotlightRestrict},N=0,V=1,W=2,z=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(a,e);var t,n,o,r=C(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=r.call(this,e)).handleFloatingLayerOpen=function(){t.props.noAnimation||t.state.popupOpen===W?t.state.popupOpen===W&&t.props.open&&t.spotPopupContent():t.setState({popupOpen:V})},t.handleKeyDown=function(e){var n,o=t.props,i=o.onClose,r=o.spotlightRestrict,c=e.keyCode,a=(0,s.getDirection)(c),u=s.default.getSpottableDescendants(t.state.containerId).length;a&&i&&(u&&s.default.getCurrent()&&"self-only"!==r&&(n=s.default.move(a))&&e.stopPropagation(),(!u||!1===n&&I(c))&&(e.preventDefault(),e.stopPropagation(),s.default.setPointerMode(!1),i(e)))},t.handlePopupHide=function(e){R(e,t.props),t.setState({floatLayerOpen:!1,activator:null}),e.currentTarget.getAttribute("data-spotlight-id")===t.state.containerId&&(t.paused.resume(),t.props.open||t.spotActivator(t.state.activator))},t.handlePopupShow=function(e){M(e,t.props),t.setState({popupOpen:W}),e.currentTarget.getAttribute("data-spotlight-id")===t.state.containerId&&(t.paused.resume(),t.props.open&&t.spotPopupContent())},t.spotActivator=function(e){var n=s.default.getCurrent(),o=D(t.state.containerId);(0,i.off)("keydown",t.handleKeyDown),(!n||o&&o.contains(n))&&(s.default.focus(e)||s.default.focus())},t.spotPopupContent=function(){var e=t.state.containerId;if((0,i.on)("keydown",t.handleKeyDown),!s.default.focus(e)){var n=s.default.getCurrent();n&&n.blur(),s.default.setActiveContainer(e)}},t.paused=new d.default("Popup"),t.state={floatLayerOpen:t.props.open,popupOpen:t.props.open?W:N,prevOpen:t.props.open,containerId:s.default.add(),activator:null},H(t.props),t}return t=a,o=[{key:"getDerivedStateFromProps",value:function(e,t){return e.open!==t.prevOpen?e.open?{popupOpen:e.noAnimation||t.floatLayerOpen?W:N,floatLayerOpen:!0,activator:s.default.getCurrent(),prevOpen:e.open}:{popupOpen:N,floatLayerOpen:t.popupOpen!==N&&!e.noAnimation,activator:e.noAnimation?null:t.activator,prevOpen:e.open}:null}}],(n=[{key:"componentDidMount",value:function(){this.props.open&&D(this.state.containerId)&&this.spotPopupContent()}},{key:"componentDidUpdate",value:function(e,t){this.props.open!==e.open&&(this.props.noAnimation?this.props.open?(M({},this.props),this.spotPopupContent()):e.open&&(R({},this.props),this.spotActivator(t.activator)):this.paused.pause()),H(this.props)}},{key:"componentWillUnmount",value:function(){this.props.open&&(0,i.off)("keydown",this.handleKeyDown),s.default.remove(this.state.containerId)}},{key:"render",value:function(){var e=this.props,t=e.noAutoDismiss,n=e.onClose,o=e.scrimType,i=A(e,["noAutoDismiss","onClose","scrimType"]);return delete i.spotlightRestrict,(0,m.jsx)(c.default,{noAutoDismiss:t,open:this.state.floatLayerOpen,onOpen:this.handleFloatingLayerOpen,onDismiss:n,scrimType:o,children:(0,m.jsx)(E,B(B({},i),{},{"data-webos-voice-exclusive":!0,onCloseButtonClick:n,onHide:this.handlePopupHide,onShow:this.handlePopupShow,open:this.state.popupOpen>=V,spotlightId:this.state.containerId,spotlightRestrict:"self-only"}))})}}])&&w(t.prototype,n),o&&w(t,o),a}(u.Component);t.Popup=z,z.propTypes={closeButtonAriaLabel:l.default.string,noAnimation:l.default.bool,noAutoDismiss:l.default.bool,onClose:l.default.func,onHide:l.default.func,onKeyDown:l.default.func,onShow:l.default.func,open:l.default.bool,scrimType:l.default.oneOf(["transparent","translucent","none"]),showCloseButton:l.default.bool,spotlightRestrict:l.default.oneOf(["self-first","self-only"])},z.defaultProps={noAnimation:!1,noAutoDismiss:!1,open:!1,scrimType:"translucent",showCloseButton:!1,spotlightRestrict:"self-only"};var F=z;t.default=F},563:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var o,i,r=n(6),c=n(32),a=n(20),u=n(236),l=n.n(u),s=n(21),d=n(121),p=n(1),f=Object(s.b)(l.a)(o||(o=Object(a.a)(["\n  color: inherit;\n  text-decoration: none;\n"]))),b=s.b.div(i||(i=Object(a.a)(["\n  display: flex;\n  align-items: center;\n  color: inherit;\n  text-decoration: none;\n\n  "," {\n    margin-right: ",";\n  }\n"])),d.a,(function(e){return!e.iconOnly&&"0.5rem"})),v=function(e){var t=e.icon,n=e.iconOnly,o=e.children,i=Object(c.a)(e,["icon","iconOnly","children"]);return Object(p.jsx)(f,Object(r.a)(Object(r.a)({},i),{},{children:Object(p.jsxs)(b,{iconOnly:n,children:[t&&Object(p.jsx)(d.a,{name:t}),!n&&o]})}))}},579:function(e,t,n){e.exports={popup:"Popup_popup__2HsFP",body:"Popup_body__3BCU3",closeContainer:"Popup_closeContainer__3sD4a",closeButton:"Popup_closeButton__1fhLb",reserveClose:"Popup_reserveClose__22HYl",popupTransitionContainer:"Popup_popupTransitionContainer__3gLdv"}},582:function(e,t,n){"use strict";function o(e,t,n){return n?"".concat(null===e||void 0===e?void 0:e.title," (s").concat(n.number,"e").concat((null===t||void 0===t?void 0:t.number)||1,")"):null===e||void 0===e?void 0:e.title}n.d(t,"a",(function(){return o}))},698:function(e,t,n){var o=n(699)(n(603));e.exports=o},699:function(e,t,n){var o=n(227),i=n(120),r=n(119);e.exports=function(e){return function(t,n,c){var a=Object(t);if(!i(t)){var u=o(n,3);t=r(t),n=function(e){return u(a[e],e,a)}}var l=e(t,n,c);return l>-1?a[u?t[l]:l]:void 0}}},719:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return se}));var o,i,r,c,a,u,l=n(15),s=n.n(l),d=n(30),p=n(46),f=n(20),b=n(0),v=n(514),j=n(102),O=n.n(j),h=n(21),m=n(142),g=n(563),y=n(523),w=n(520),x=n(548),C=n(517),k=n(602),P=n.n(k),_=n(525),B=n.n(_),S=n(5),A=n(1),I=h.b.div(o||(o=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),T=Object(h.b)(B.a)(i||(i=Object(f.a)(["\n  width: 9rem;\n  height: 15rem !important;\n\n  [role='img'] {\n    position: relative;\n    ","\n  }\n"])),(function(e){return e.watched&&Object(h.a)(r||(r=Object(f.a)(["\n        :before {\n          content: '\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u043e';\n          position: absolute;\n          top: 0;\n          bottom: 0;\n          left: 0;\n          right: 0;\n          padding-left: 1rem;\n          padding-top: 5rem;\n          background: rgba(0, 0, 0, 0.5);\n        }\n      "])))})),D=function(e){var t=e.item,n=e.season,o=Object(v.e)(),i=Object(b.useCallback)((function(e){return function(){(null===e||void 0===e?void 0:e.id)&&o.push(Object(S.b)(S.a.Video,{videoId:e.id}),{item:t,video:e,season:n})}}),[t,n,o]);return Object(A.jsx)(I,{children:Object(A.jsx)(P.a,{title:"\u0421\u0435\u0437\u043e\u043d ".concat(n.number),children:O()(n.episodes,(function(e){return Object(A.jsx)(T,{source:e.thumbnail,caption:"\u042d\u043f\u0438\u0437\u043e\u0434 ".concat(e.number),onClick:i(e),watched:e.watched===m.b.Watched},e.id)}))})})},R=n(519),M=h.b.div(c||(c=Object(f.a)(["\n  padding: 2rem;\n"]))),L=function(e){var t=e.item,n=e.seasons;return(null===n||void 0===n?void 0:n.length)?Object(A.jsxs)(M,{children:[Object(A.jsx)(R.a,{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0441\u0435\u0437\u043e\u043d\u043e\u0432"}),O()(n,(function(e){return Object(A.jsx)(D,{item:t,season:e},e.id)}))]}):null},E=n(550),H=n.n(E),N=n(518),V=n(112),W=h.b.div(a||(a=Object(f.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]))),z=h.b.div(u||(u=Object(f.a)(["\n  flex-basis: 20%;\n  padding: 1rem;\n"]))),F=function(e){var t=e.itemId,n=Object(N.a)("bookmarks").data,o=Object(N.a)("itemBookmarks",[t]),i=o.data,r=o.dataUpdatedAt,c=o.refetch,a=Object(V.a)("bookmarkToggleItem").bookmarkToggleItemAsync,u=Object(b.useMemo)((function(){return(null===i||void 0===i?void 0:i.folders.map((function(e){return e.id})))||[]}),[null===i||void 0===i?void 0:i.folders]),l=Object(b.useCallback)((function(e){return Object(d.a)(s.a.mark((function n(){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a([t,e.id]);case 2:c();case 3:case"end":return n.stop()}}),n)})))}),[t,a,c]);return Object(A.jsx)(W,{children:O()(null===n||void 0===n?void 0:n.items,(function(e){return Object(A.jsx)(z,{children:Object(A.jsx)(H.a,{defaultSelected:u.includes(e.id),onToggle:l(e),children:e.title})},e.updated)}))},r)},K=n(698),U=n.n(K),q=n(162);var J,Y,G,Q,X,Z,$,ee=function(){var e=Object(N.a)("streamingTypes").data,t=Object(N.a)("deviceInfo").data,n=Object(q.a)("streaming_type"),o=Object(p.a)(n,2)[1],i=Object(b.useMemo)((function(){return U()(null===t||void 0===t?void 0:t.device.settings.streamingType.value,(function(e){return e.selected===m.a.True}))}),[null===t||void 0===t?void 0:t.device]),r=Object(b.useMemo)((function(){return U()(null===e||void 0===e?void 0:e.items,(function(e){return(null===e||void 0===e?void 0:e.id)===(null===i||void 0===i?void 0:i.id)}))}),[null===e||void 0===e?void 0:e.items,i]);Object(b.useEffect)((function(){(null===r||void 0===r?void 0:r.code)&&o(null===r||void 0===r?void 0:r.code)}),[o,null===r||void 0===r?void 0:r.code])},te=n(582),ne=h.b.div(J||(J=Object(f.a)(["\n  position: relative;\n"]))),oe=h.b.div(Y||(Y=Object(f.a)(["\n  width: 100vw;\n  min-height: 100vh;\n  background: url(",");\n  background-size: cover;\n"])),(function(e){return e.src})),ie=Object(h.b)(R.a)(G||(G=Object(f.a)(["\n  position: absolute;\n  padding: 0 1rem;\n  top: 0;\n"]))),re=h.b.div(Q||(Q=Object(f.a)(["\n  display: flex;\n  justify-content: space-between;\n  position: absolute;\n  left: 1rem;\n  right: 1rem;\n  bottom: 5rem;\n"]))),ce=h.b.div(X||(X=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 2rem;\n  white-space: pre-wrap;\n"]))),ae=h.b.div(Z||(Z=Object(f.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  height: 35rem;\n\n  p {\n    margin: 0.1rem;\n    font-size: 0.8rem;\n  }\n"]))),ue=h.b.div($||($=Object(f.a)(["\n  padding: 2rem;\n"]))),le=function(e){var t=e.itemId,n=Object(N.a)("itemSmiliar",[t]).data;return n&&n.items.length>0?Object(A.jsxs)(ue,{children:[Object(A.jsx)(R.a,{children:"\u041f\u043e\u0445\u043e\u0436\u0438\u0435"}),Object(A.jsx)(y.a,{items:n.items,scrollable:!1})]}):null},se=function(){var e,t,n,o,i=Object(v.e)(),r=Object(v.g)().itemId,c=Object(b.useState)(!1),a=Object(p.a)(c,2),u=a[0],l=a[1],f=Object(N.a)("itemMedia",[r],{staleTime:0}),j=f.data,h=f.refetch,y=Object(V.a)("watchingToggleWatchlist").watchingToggleWatchlistAsync,k=Object(b.useMemo)((function(){var e,t;return(null===j||void 0===j||null===(e=j.item.videos)||void 0===e?void 0:e.find((function(e){return e.watching.status!==m.b.Watched})))||(null===j||void 0===j||null===(t=j.item.videos)||void 0===t?void 0:t[0])}),[null===j||void 0===j?void 0:j.item]),P=Object(b.useMemo)((function(){var e,t;return(null===j||void 0===j||null===(e=j.item.seasons)||void 0===e?void 0:e.find((function(e){return e.watching.status!==m.b.Watched})))||(null===j||void 0===j||null===(t=j.item.seasons)||void 0===t?void 0:t[0])}),[null===j||void 0===j?void 0:j.item]),_=Object(b.useMemo)((function(){return(null===P||void 0===P?void 0:P.episodes.find((function(e){return e.watching.status!==m.b.Watched})))||(null===P||void 0===P?void 0:P.episodes[0])}),[P]),B=Object(b.useMemo)((function(){return null===j||void 0===j?void 0:j.item.trailer}),[null===j||void 0===j?void 0:j.item]),I=k||_,T=Object(b.useMemo)((function(){return Object(te.a)(null===j||void 0===j?void 0:j.item,I,P)}),[null===j||void 0===j?void 0:j.item,P,I]),D=Object(b.useCallback)((function(){(null===I||void 0===I?void 0:I.id)&&i.push(Object(S.b)(S.a.Video,{videoId:I.id}),{item:null===j||void 0===j?void 0:j.item,video:I,season:P})}),[i,null===j||void 0===j?void 0:j.item,P,I]),M=Object(b.useCallback)((function(){(null===B||void 0===B?void 0:B.id)&&i.push(Object(S.b)(S.a.Trailer,{trailerId:B.id}),{item:null===j||void 0===j?void 0:j.item,trailer:B})}),[i,null===j||void 0===j?void 0:j.item,B]),E=Object(b.useCallback)((function(){l(!0)}),[]),H=Object(b.useCallback)(Object(d.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y([r]);case 2:h();case 3:case"end":return e.stop()}}),e)}))),[r,y,h]);return ee(),Object(A.jsxs)(C.b,{children:[Object(A.jsxs)(ne,{children:[Object(A.jsx)(oe,{src:(null===j||void 0===j||null===(e=j.item)||void 0===e?void 0:e.posters.wide)||(null===j||void 0===j||null===(t=j.item)||void 0===t?void 0:t.posters.big)}),Object(A.jsx)(ie,{children:T}),Object(A.jsxs)(re,{children:[Object(A.jsxs)("div",{children:[Object(A.jsx)(g.a,{icon:"play_circle_outline",onClick:D,children:"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c"}),Object(A.jsx)(g.a,{icon:"bookmark",onClick:E,children:"\u0412 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"}),Object(A.jsx)(x.a,{visible:u,onVisibilityChange:l,children:Object(A.jsx)(F,{itemId:r},"".concat(r,"-").concat(u))}),"boolean"===typeof(null===j||void 0===j?void 0:j.item.subscribed)&&Object(A.jsx)(g.a,{icon:(null===j||void 0===j?void 0:j.item.subscribed)?"visibility_off":"visibility",onClick:H,children:(null===j||void 0===j?void 0:j.item.subscribed)?"\u041d\u0435 \u0431\u0443\u0434\u0443 \u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c":"\u0411\u0443\u0434\u0443 \u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c"})]}),Object(A.jsx)("div",{children:B&&Object(A.jsx)(g.a,{icon:"videocam",onClick:M,children:"\u0422\u0440\u0435\u0439\u043b\u0435\u0440"})})]})]}),Object(A.jsx)(L,{item:null===j||void 0===j?void 0:j.item,seasons:null===j||void 0===j||null===(n=j.item)||void 0===n?void 0:n.seasons}),Object(A.jsxs)(ce,{children:[Object(A.jsx)(R.a,{children:null===j||void 0===j?void 0:j.item.plot}),!!(null===j||void 0===j||null===(o=j.item.tracklist)||void 0===o?void 0:o.length)&&Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(R.a,{children:"\u0422\u0440\u0435\u043a\u043b\u0438\u0441\u0442"}),Object(A.jsx)(ae,{children:O()(null===j||void 0===j?void 0:j.item.tracklist,(function(e,t){return Object(A.jsxs)(R.a,{children:[t+1,". ",e.title]},t)}))})]})]}),Object(A.jsx)(w.a,{height:"50rem",children:Object(A.jsx)(le,{itemId:r})})]})}}}]);
//# sourceMappingURL=13.f958cabc.chunk.js.map