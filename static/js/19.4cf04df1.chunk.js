(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[19],{1063:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var r=n(15),c=n(1),a=n(881),i=n(915),o=n(913),u=n(2),s=function(){var e=Object(a.e)(),t=Object(a.f)().state,n=t.item,s=t.trailer,l=Object(c.useMemo)((function(){return{title:n.title,description:"\u0422\u0440\u0435\u0439\u043b\u0435\u0440",poster:n.posters.wide||n.posters.big,sources:Object(o.b)([s])}}),[n,s]),d=Object(c.useCallback)((function(){e.goBack()}),[e]);return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(i.a,Object(r.a)(Object(r.a)({},l),{},{onEnded:d}))})}},885:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(15),c=n(54),a=n(48),i=n.n(a),o=n(2),u=["className"],s=function(e){var t=e.className,n=Object(c.a)(e,u);return Object(o.jsx)("p",Object(r.a)(Object(r.a)({},n),{},{className:i()("text-primary",t)}))}},892:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(15),c=n(54),a=n(1),i=n(48),o=n.n(i),u=n(236),s=n(233),l=n(2),d=["icon","iconOnly","children","autoFocus","className"],f=function(e){var t=e.icon,n=e.iconOnly,i=e.children,f=e.autoFocus,b=e.className,v=Object(c.a)(e,d),h=Object(a.useRef)(null);return Object(a.useEffect)((function(){var e;return f&&(e=requestAnimationFrame((function(){var e,t;null===(e=h.current)||void 0===e||null===(t=e.node)||void 0===t||t.focus()}))),function(){e&&cancelAnimationFrame(e)}}),[h,f]),Object(l.jsx)(s.a,Object(r.a)(Object(r.a)({},v),{},{ref:h,className:o()("text-primary whitespace-nowrap cursor-pointer rounded px-2 py-1",{"pr-3":!!t},b),role:"button",children:Object(l.jsxs)("div",{className:"flex items-center",children:[t&&Object(l.jsx)(u.a,{name:t}),!n&&i]})}))}},907:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n(15),c=n(54),a=n(1),i=n(912),o=n(48),u=n.n(o),s=n(237),l=n(2),d=["visible","onClose","className"],f=function e(t){var n=t.visible,i=t.onClose,o=t.className,f=Object(c.a)(t,d),b=Object(a.useCallback)((function(){i(!1)}),[i]),v=Object(a.useCallback)((function(){if(n)return b(),!1}),[n,b]);return Object(s.a)(v),e.handleClickOutside=b,n?Object(l.jsx)("div",Object(r.a)(Object(r.a)({},f),{},{className:u()("fixed z-999 bottom-0 left-0 right-0 p-4 bg-primary ring",o)})):null},b={handleClickOutside:function(){return f.handleClickOutside}},v=Object(i.a)(f,b)},908:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(15),c=n(54),a=n(1),i=n(48),o=n.n(i),u=n(233),s=n(2),l=["defaultChecked","checked","onChange","className","children"],d=function(e){var t=e.defaultChecked,n=e.checked,i=e.onChange,d=e.className,f=e.children,b=Object(c.a)(e,l),v=Object(a.useCallback)((function(e){null===i||void 0===i||i(e.target.checked,e)}),[i]);return Object(s.jsx)(u.a,{component:"label",className:o()("text-primary p-2",d),children:Object(s.jsxs)("div",{className:"inline-flex items-center cursor-pointer",children:[Object(s.jsx)("input",Object(r.a)(Object(r.a)({},b),{},{type:"radio",className:"inline-block w-4 h-4",defaultChecked:t,checked:n,onChange:v})),Object(s.jsx)("span",{className:"inline-block ml-2 whitespace-nowrap",children:f})]})})}},913:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return v}));var r=n(893),c=n.n(r),a=n(171),i=n.n(a),o=n(914),u=n.n(o),s=n(942),l=n.n(s),d=function(e){return e<10?"0".concat(e):e};function f(e){return i()(e,(function(e,t){var n,r,a,i,o,u,s;return{lang:e.lang,name:c()(["".concat(d(t+1),"."),(null===(n=e.type)||void 0===n?void 0:n.title)&&(null===(r=e.author)||void 0===r?void 0:r.title)?"".concat(null===(a=e.type)||void 0===a?void 0:a.title,"."):null===(i=e.type)||void 0===i?void 0:i.title,null===(o=e.author)||void 0===o?void 0:o.title,(null===(u=e.type)||void 0===u?void 0:u.title)||(null===(s=e.author)||void 0===s?void 0:s.title)?"(".concat(l()(e.lang),")"):l()(e.lang),"aac"!==e.codec&&l()(e.codec)]).join(" ")}}))}function b(e,t){return u()(i()(e,(function(e){return{src:"string"===typeof e.url?e.url:e.url[t]||e.url.http,name:e.quality}})),(function(e){var t=e.name;return parseInt(t)}),"desc")}function v(e){return i()(e,(function(e,t){return{src:e.url,lang:e.lang,name:"".concat(l()(e.lang)," #").concat(d(t+1))}}))}},915:function(e,t,n){"use strict";n.d(t,"a",(function(){return W}));var r=n(15),c=n(26),a=n.n(c),i=n(43),o=n(75),u=n(54),s=n(1),l=n(931),d=n.n(l),f=n(69),b=n(70),v=n(953),h=n(176),j=n(136),O=n(135),m=n(935),p=n.n(m),k=n(936),T=n.n(k),x=n(937),y=n.n(x),g=n(898),w=n.n(g),C=function(){function e(t){Object(f.a)(this,e),this.resource=void 0,this.objectURL=void 0,this.resource=t}return Object(b.a)(e,[{key:"blobToBuffer",value:function(){var e=this;return new Promise((function(t,n){var r=new FileReader;r.addEventListener("loadend",(function(e){var n,r=null===(n=e.target)||void 0===n?void 0:n.result;t(new Uint8Array(r))})),r.addEventListener("error",(function(){return n("Error while reading the Blob object")})),r.readAsArrayBuffer(e.resource)}))}},{key:"getURL",value:function(){var t=this;return new Promise((function(n,r){return t.resource instanceof Blob?FileReader?TextDecoder?e.blobToString(t.resource,(function(r){var c="WEBVTT FILE\r\n\r\n".concat(e.toVTT(r)),a=new Blob([c],{type:"text/vtt"});return t.objectURL=URL.createObjectURL(a),n(t.objectURL)}),(function(){t.blobToBuffer().then((function(r){var c=new TextDecoder("utf-8").decode(r),a="WEBVTT FILE\r\n\r\n".concat(e.toVTT(c)),i=new Blob([a],{type:"text/vtt"});return t.objectURL=URL.createObjectURL(i),n(t.objectURL)}))})):r("No TextDecoder constructor found"):r("No FileReader constructor found"):r("Expecting resource to be a Blob but something else found.")}))}},{key:"release",value:function(){URL.createObjectURL(this.objectURL)}}],[{key:"blobToString",value:function(e,t,n){var r=new FileReader;r.addEventListener("loadend",(function(e){var n,r=null===(n=e.target)||void 0===n?void 0:n.result;t(r)})),r.addEventListener("error",(function(){return n()})),r.readAsText(e)}},{key:"toVTT",value:function(e){return e.replace(/\{\\([ibu])\}/g,"</$1>").replace(/\{\\([ibu])1\}/g,"<$1>").replace(/\{([ibu])\}/g,"<$1>").replace(/\{\/([ibu])\}/g,"</$1>").replace(/(\d\d:\d\d:\d\d),(\d\d\d)/g,"$1.$2").concat("\r\n\r\n")}},{key:"toTypedArray",value:function(e){var t=[];return e.split("").forEach((function(e){t.push(parseInt("".concat(e.charCodeAt(0)),16))})),Uint8Array.from(t)}}]),e}();function N(){return(N=Object(i.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return e.next=4,e.sent.blob();case 4:return n=e.sent,r=new C(n),e.abrupt("return",r.getURL());case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E=function(e){Object(j.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(f.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).hls=void 0,e.media=void 0,e.state=void 0,e.props=void 0,e}return Object(b.a)(n,[{key:"load",value:function(e){var t,n=this.props.startTime;(null===(t=this.state)||void 0===t?void 0:t.src)&&this.state.src!==e&&(n=this.media.currentTime),this.destroy();var r=this.media;this.setState({src:e});var c=function(){n&&(r.currentTime=n),r.play()};if(e.includes(".m3u8")&&T.a.isSupported()){var a=this.hls=new T.a;return a.attachMedia(r),void a.on(T.a.Events.MEDIA_ATTACHED,(function(){a.loadSource(e),a.on(T.a.Events.MANIFEST_PARSED,c)}))}r.src=e,r.addEventListener("loadedmetadata",c)}},{key:"audioTracks",get:function(){var e;return this.hls?y()(this.hls.audioTracks.map((function(e){return e.name}))):null===(e=this.props.audioTracks)||void 0===e?void 0:e.map((function(e){return e.name}))}},{key:"audioTrack",get:function(){var e,t,n,r=this;if(this.hls)return null===(n=this.hls.audioTracks.find((function(e){var t;return e.id===(null===(t=r.hls)||void 0===t?void 0:t.audioTrack)})))||void 0===n?void 0:n.name;var c=Array.from(this.media.audioTracks||[]).findIndex((function(e){return e.enabled}));return null===(e=this.props.audioTracks)||void 0===e||null===(t=e[c])||void 0===t?void 0:t.name},set:function(e){if(this.hls){var t=this.hls.audioTracks.find((function(t){return t.name===e}));t&&(this.hls.audioTrack=t.id)}else{var n,r=Array.from(this.media.audioTracks||[]),c=null===(n=this.props.audioTracks)||void 0===n?void 0:n.findIndex((function(t){return t.name===e}));(!c||c>r.length-1)&&(c=0),r.forEach((function(e,t){e.enabled=t===c}))}}},{key:"sourceTracks",get:function(){return w()(this.props.sourceTracks,"src").map((function(e){return e.name}))}},{key:"sourceTrack",get:function(){var e,t=this;return null===(e=this.props.sourceTracks.find((function(e){return e.src===t.state.src})))||void 0===e?void 0:e.name},set:function(e){var t=this.props.sourceTracks.find((function(t){return t.name===e}));t&&this.load(t.src)}},{key:"subtitleTracks",get:function(){var e;return this.hls?this.hls.subtitleTracks.map((function(e){return e.name})):null===(e=this.props.subtitleTracks)||void 0===e?void 0:e.map((function(e){return e.name}))}},{key:"subtitleTrack",get:function(){var e,t,n=this;return this.hls?null===(t=this.hls.subtitleTracks.find((function(e){var t;return e.id===(null===(t=n.hls)||void 0===t?void 0:t.subtitleTrack)})))||void 0===t?void 0:t.name:null===(e=Array.from(this.media.textTracks||[]).find((function(e){return"showing"===e.mode})))||void 0===e?void 0:e.label},set:function(e){if(this.hls){var t,n;this.hls.subtitleTrack=null!==(t=null===(n=this.hls.subtitleTracks.find((function(t){return t.name===e})))||void 0===n?void 0:n.id)&&void 0!==t?t:-1}else{var r=Array.from(this.media.textTracks||[]);r.forEach((function(e){e.mode="disabled"}));var c=r.find((function(t){return t.label===e}));if(c)c.mode="showing";else{var a,i=null===(a=this.props.subtitleTracks)||void 0===a?void 0:a.find((function(t){return t.name===e}));if(i){var o=document.createElement("track");o.kind="captions",o.id=i.name,o.srclang=i.lang,o.label=i.name;var u=function(e){o.src=e,o.track.mode="showing"};i.src.endsWith(".srt")?function(e){return N.apply(this,arguments)}(i.src).then(u):u(i.src),this.media.appendChild(o)}}}}},{key:"destroy",value:function(){this.hls?this.hls.destroy():this.media.src=""}},{key:"componentDidMount",value:function(){var e;this.load(this.props.sourceTracks[0].src),null===(e=Object(v.a)(Object(h.a)(n.prototype),"componentDidMount",this))||void 0===e||e.call(this)}},{key:"componentDidUpdate",value:function(){}},{key:"componentWillUnmount",value:function(){var e;this.destroy(),null===(e=Object(v.a)(Object(h.a)(n.prototype),"componentWillUnmount",this))||void 0===e||e.call(this)}}]),n}(p.a),L=n(885),S=n(237),R=n(171),A=n.n(R),U=n(907),I=n(908),F=n(241),B=n(2),D="NONE",P=function(e){var t=e.player,n=Object(s.useState)(!1),r=Object(o.a)(n,2),c=r[0],a=r[1],i=Object(s.useState)([]),u=Object(o.a)(i,2),l=u[0],d=u[1],f=Object(s.useState)(null),b=Object(o.a)(f,2),v=b[0],h=b[1],j=Object(s.useState)([]),O=Object(o.a)(j,2),m=O[0],p=O[1],k=Object(s.useState)(null),T=Object(o.a)(k,2),x=T[0],y=T[1],g=Object(s.useState)([]),w=Object(o.a)(g,2),C=w[0],N=w[1],E=Object(s.useState)(null),S=Object(o.a)(E,2),R=S[0],P=S[1],V=Object(s.useCallback)((function(e,n){t.current&&(t.current.getVideoNode()[e]=n)}),[t]),M=Object(s.useCallback)((function(e){return function(){h(e),V("audioTrack",e)}}),[V]),$=Object(s.useCallback)((function(e){return function(){y(e),V("sourceTrack",e)}}),[V]),W=Object(s.useCallback)((function(e){return function(){P(e),V("subtitleTrack",e)}}),[V]),z=Object(s.useCallback)((function(){a(!1),t.current&&t.current.play()}),[t]);return Object(s.useEffect)((function(){var e=function(e){if(Object(F.a)(e)){if(t.current){var n=t.current.getVideoNode(),r=n.audioTracks,c=n.audioTrack,i=n.sourceTracks,o=n.sourceTrack,u=n.subtitleTracks,s=n.subtitleTrack;((null===r||void 0===r?void 0:r.length)>1||(null===i||void 0===i?void 0:i.length)>1||(null===u||void 0===u?void 0:u.length)>0)&&(d(r),h(c),p(i),y(o),N(u),P(s),t.current.pause(),a(!0))}}else Object(F.b)(e)&&a(!1)};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[c,t]),Object(B.jsx)(U.a,{visible:c,onClose:z,children:Object(B.jsxs)("div",{className:"flex flex-col",children:[(null===l||void 0===l?void 0:l.length)>1&&Object(B.jsxs)("div",{className:"flex flex-col py-4",children:[Object(B.jsx)(L.a,{children:"\u0417\u0432\u0443\u043a"}),Object(B.jsx)("div",{className:"flex flex-wrap mt-2",children:A()(l,(function(e){return Object(B.jsx)("div",{className:"w-1/2",children:Object(B.jsx)(I.a,{checked:e===v,onChange:M(e),children:e})},e)}))})]}),(null===m||void 0===m?void 0:m.length)>1&&Object(B.jsxs)("div",{className:"flex flex-col py-4",children:[Object(B.jsx)(L.a,{children:"\u041a\u0430\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(B.jsx)("div",{className:"flex flex-wrap mt-2",children:A()(m,(function(e){return Object(B.jsx)("div",{className:"w-1/6",children:Object(B.jsx)(I.a,{checked:e===x,onChange:$(e),children:e})},e)}))})]}),(null===C||void 0===C?void 0:C.length)>0&&Object(B.jsxs)("div",{className:"flex flex-col py-4",children:[Object(B.jsx)(L.a,{children:"\u0421\u0443\u0431\u0442\u0438\u0442\u0440\u044b"}),Object(B.jsxs)("div",{className:"flex flex-wrap mt-2",children:[Object(B.jsx)("div",{className:"w-1/6",children:Object(B.jsx)(I.a,{checked:!R||R===D,onChange:W(D),children:"\u041d\u0435\u0442"})}),A()(C,(function(e){return Object(B.jsx)("div",{className:"w-1/6",children:Object(B.jsx)(I.a,{checked:e===R,onChange:W(e),children:e})},e)}))]})]})]})})},V=n(892),M=function(e){var t=e.startTime,n=e.startInDelay,r=void 0===n?5:n,c=e.player,a=Object(s.useState)(!0),i=Object(o.a)(a,2),u=i[0],l=i[1],d=Object(s.useState)(r),f=Object(o.a)(d,2),b=f[0],v=f[1],h=Object(s.useMemo)((function(){return new Date(1e3*(t||0)).toISOString().substr(11,8).replace(/^00:/,"")}),[t]),j=Object(s.useCallback)((function(){c.current&&(l(!1),c.current.getVideoNode().currentTime=t)}),[t,c]),O=Object(s.useCallback)((function(){l(!1)}),[]);return Object(s.useEffect)((function(){var e;return u&&(e=setInterval((function(){v((function(e){var t=e-1;return t<=0&&j(),t}))}),1e3)),function(){clearInterval(e)}}),[u,j]),t&&u?Object(B.jsxs)("div",{className:"flex justify-center absolute w-full z-50 bottom-32",children:[Object(B.jsxs)(V.a,{onClick:j,children:["\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0441 ",h," \u0447\u0435\u0440\u0435\u0437 ",b]}),Object(B.jsx)(V.a,{autoFocus:!0,onClick:O,children:"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0441 \u043d\u0430\u0447\u0430\u043b\u0430"})]}):null},$=["title","description","poster","audios","sources","subtitles","startTime","timeSyncInterval","onPlay","onPause","onEnded","onTimeSync"],W=function(e){var t=e.title,n=e.description,c=e.poster,l=e.audios,f=e.sources,b=e.subtitles,v=e.startTime,h=e.timeSyncInterval,j=void 0===h?30:h,O=e.onPlay,m=e.onPause,p=e.onEnded,k=e.onTimeSync,T=Object(u.a)(e,$),x=Object(s.useRef)(),y=Object(s.useState)(!1),g=Object(o.a)(y,2),w=g[0],C=g[1],N=Object(s.useState)(!0),R=Object(o.a)(N,2),A=R[0],U=R[1],I=Object(s.useCallback)((function(){U(!1),null===O||void 0===O||O()}),[O]),F=Object(s.useCallback)((function(e){U(!0),null===m||void 0===m||m(e.currentTime)}),[m]),D=Object(s.useCallback)((function(e){null===p||void 0===p||p(e.target.currentTime)}),[p]),V=Object(s.useCallback)(Object(i.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!x.current||!k){e.next=5;break}return t=x.current.getVideoNode(),n=t.currentTime,e.next=5,k(n);case 5:case"end":return e.stop()}}),e)}))),[k,x]),W=Object(s.useCallback)((function(){C(!0)}),[]);return Object(s.useEffect)((function(){var e;return A&&(e=setTimeout((function(){U(!1)}),5e3)),function(){e&&clearTimeout(e)}}),[A]),Object(s.useEffect)((function(){var e;return k&&(e=setInterval(V,1e3*j)),function(){e&&clearInterval(e)}}),[j,k,V]),Object(S.a)(V),Object(B.jsxs)(B.Fragment,{children:[A&&Object(B.jsx)(L.a,{className:"p-4 absolute top-0 z-10",children:t}),Object(B.jsx)(P,{player:x}),w&&v>0&&Object(B.jsx)(M,{startTime:v,player:x}),Object(B.jsx)(d.a,Object(r.a)(Object(r.a)({},T),{},{ref:x,title:n,poster:c,jumpBy:10,onPlay:I,onPause:F,onEnded:D,onLoadedMetadata:W,audioTracks:l,sourceTracks:f,subtitleTracks:b,videoComponent:E}))]})}}}]);
//# sourceMappingURL=19.4cf04df1.chunk.js.map