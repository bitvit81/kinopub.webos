(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[10,8,9],{889:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(2),i=r.n(n),s=r(22);function o(){var t=!1;return{clearReset:function(){t=!1},reset:function(){t=!0},isReset:function(){return t}}}var u=i.a.createContext(o()),a=r(254);function c(t,e){var r=i.a.useRef(!1),n=i.a.useState(0)[1],o=Object(a.b)(),c=i.a.useContext(u),l=o.defaultQueryObserverOptions(t);l.optimisticResults=!0,l.onError&&(l.onError=s.a.batchCalls(l.onError)),l.onSuccess&&(l.onSuccess=s.a.batchCalls(l.onSuccess)),l.onSettled&&(l.onSettled=s.a.batchCalls(l.onSettled)),l.suspense&&"number"!==typeof l.staleTime&&(l.staleTime=1e3),(l.suspense||l.useErrorBoundary)&&(c.isReset()||(l.retryOnMount=!1));var h=i.a.useState((function(){return new e(o,l)}))[0],f=h.getOptimisticResult(l);if(i.a.useEffect((function(){r.current=!0,c.clearReset();var t=h.subscribe(s.a.batchCalls((function(){r.current&&n((function(t){return t+1}))})));return h.updateResult(),function(){r.current=!1,t()}}),[c,h]),i.a.useEffect((function(){h.setOptions(l,{listeners:!1})}),[l,h]),l.suspense&&f.isLoading)throw h.fetchOptimistic(l).then((function(t){var e=t.data;null==l.onSuccess||l.onSuccess(e),null==l.onSettled||l.onSettled(e,null)})).catch((function(t){c.clearReset(),null==l.onError||l.onError(t),null==l.onSettled||l.onSettled(void 0,t)}));if((l.suspense||l.useErrorBoundary)&&f.isError&&!f.isFetching)throw f.error;return"tracked"===l.notifyOnChangeProps&&(f=h.trackResult(f)),f}},895:function(t,e,r){"use strict";r.d(e,"a",(function(){return h}));var n=r(6),i=r(30),s=r(5),o=r(22),u=r(107),a=r(67),c=r(152),l=r(68),h=function(t){function e(e,r){var n;return(n=t.call(this)||this).client=e,n.options=r,n.trackedProps=[],n.previousSelectError=null,n.bindMethods(),n.setOptions(r),n}Object(i.a)(e,t);var r=e.prototype;return r.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},r.onSubscribe=function(){1===this.listeners.length&&(this.currentQuery.addObserver(this),f(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},r.onUnsubscribe=function(){this.listeners.length||this.destroy()},r.shouldFetchOnReconnect=function(){return t=this.currentQuery,!1!==(e=this.options).enabled&&("always"===e.refetchOnReconnect||!1!==e.refetchOnReconnect&&p(t,e));var t,e},r.shouldFetchOnWindowFocus=function(){return t=this.currentQuery,!1!==(e=this.options).enabled&&("always"===e.refetchOnWindowFocus||!1!==e.refetchOnWindowFocus&&p(t,e));var t,e},r.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},r.setOptions=function(t,e){var r=this.options,n=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(t),"undefined"!==typeof this.options.enabled&&"boolean"!==typeof this.options.enabled)throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),this.updateQuery();var i=this.hasListeners();i&&d(this.currentQuery,n,this.options,r)&&this.executeFetch(),this.updateResult(e),!i||this.currentQuery===n&&this.options.enabled===r.enabled&&this.options.staleTime===r.staleTime||this.updateStaleTimeout(),!i||this.currentQuery===n&&this.options.enabled===r.enabled&&this.options.refetchInterval===r.refetchInterval||this.updateRefetchInterval()},r.getOptimisticResult=function(t){var e=this.client.defaultQueryObserverOptions(t),r=this.client.getQueryCache().build(this.client,e);return this.createResult(r,e)},r.getCurrentResult=function(){return this.currentResult},r.trackResult=function(t){var e=this,r={};return Object.keys(t).forEach((function(n){Object.defineProperty(r,n,{configurable:!1,enumerable:!0,get:function(){var r=n;return e.trackedProps.includes(r)||e.trackedProps.push(r),t[r]}})})),r},r.getNextResult=function(t){var e=this;return new Promise((function(r,n){var i=e.subscribe((function(e){e.isFetching||(i(),e.isError&&(null==t?void 0:t.throwOnError)?n(e.error):r(e))}))}))},r.getCurrentQuery=function(){return this.currentQuery},r.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},r.refetch=function(t){return this.fetch(t)},r.fetchOptimistic=function(t){var e=this,r=this.client.defaultQueryObserverOptions(t),n=this.client.getQueryCache().build(this.client,r);return n.fetch().then((function(){return e.createResult(n,r)}))},r.fetch=function(t){var e=this;return this.executeFetch(t).then((function(){return e.updateResult(),e.currentResult}))},r.executeFetch=function(t){this.updateQuery();var e=this.currentQuery.fetch(this.options,t);return(null==t?void 0:t.throwOnError)||(e=e.catch(s.i)),e},r.updateStaleTimeout=function(){var t=this;if(this.clearStaleTimeout(),!s.e&&!this.currentResult.isStale&&Object(s.f)(this.options.staleTime)){var e=Object(s.r)(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout((function(){t.currentResult.isStale||t.updateResult()}),e)}},r.updateRefetchInterval=function(){var t=this;this.clearRefetchInterval(),!s.e&&!1!==this.options.enabled&&Object(s.f)(this.options.refetchInterval)&&(this.refetchIntervalId=setInterval((function(){(t.options.refetchIntervalInBackground||u.a.isFocused())&&t.executeFetch()}),this.options.refetchInterval))},r.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval()},r.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},r.clearStaleTimeout=function(){clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0},r.clearRefetchInterval=function(){clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0},r.createResult=function(t,e){var r,n=this.currentQuery,i=this.options,o=this.currentResult,u=this.currentResultState,a=this.currentResultOptions,l=t!==n,h=l?t.state:this.currentQueryInitialState,v=l?this.currentResult:this.previousQueryResult,b=t.state,y=b.dataUpdatedAt,O=b.error,g=b.errorUpdatedAt,R=b.isFetching,m=b.status,S=!1,P=!1;if(e.optimisticResults){var Q=this.hasListeners(),E=!Q&&f(t,e),x=Q&&d(t,n,e,i);(E||x)&&(R=!0,y||(m="loading"))}if(e.keepPreviousData&&!b.dataUpdateCount&&(null==v?void 0:v.isSuccess)&&"error"!==m)r=v.data,y=v.dataUpdatedAt,m=v.status,S=!0;else if(e.select&&"undefined"!==typeof b.data)if(o&&b.data===(null==u?void 0:u.data)&&e.select===(null==a?void 0:a.select)&&!this.previousSelectError)r=o.data;else try{r=e.select(b.data),!1!==e.structuralSharing&&(r=Object(s.n)(null==o?void 0:o.data,r)),this.previousSelectError=null}catch(C){Object(c.a)().error(C),O=C,this.previousSelectError=C,g=Date.now(),m="error"}else r=b.data;if("undefined"!==typeof e.placeholderData&&"undefined"===typeof r&&"loading"===m){var w;if((null==o?void 0:o.isPlaceholderData)&&e.placeholderData===(null==a?void 0:a.placeholderData))w=o.data;else if(w="function"===typeof e.placeholderData?e.placeholderData():e.placeholderData,e.select&&"undefined"!==typeof w)try{w=e.select(w),!1!==e.structuralSharing&&(w=Object(s.n)(null==o?void 0:o.data,w)),this.previousSelectError=null}catch(C){Object(c.a)().error(C),O=C,this.previousSelectError=C,g=Date.now(),m="error"}"undefined"!==typeof w&&(m="success",r=w,P=!0)}return{status:m,isLoading:"loading"===m,isSuccess:"success"===m,isError:"error"===m,isIdle:"idle"===m,data:r,dataUpdatedAt:y,error:O,errorUpdatedAt:g,failureCount:b.fetchFailureCount,isFetched:b.dataUpdateCount>0||b.errorUpdateCount>0,isFetchedAfterMount:b.dataUpdateCount>h.dataUpdateCount||b.errorUpdateCount>h.errorUpdateCount,isFetching:R,isLoadingError:"error"===m&&0===b.dataUpdatedAt,isPlaceholderData:P,isPreviousData:S,isRefetchError:"error"===m&&0!==b.dataUpdatedAt,isStale:p(t,e),refetch:this.refetch,remove:this.remove}},r.shouldNotifyListeners=function(t,e){if(!e)return!0;if(t===e)return!1;var r=this.options,n=r.notifyOnChangeProps,i=r.notifyOnChangePropsExclusions;if(!n&&!i)return!0;if("tracked"===n&&!this.trackedProps.length)return!0;var s="tracked"===n?this.trackedProps:n;return Object.keys(t).some((function(r){var n=r,o=t[n]!==e[n],u=null==s?void 0:s.some((function(t){return t===r})),a=null==i?void 0:i.some((function(t){return t===r}));return o&&!a&&(!s||u)}))},r.updateResult=function(t){var e=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!Object(s.p)(this.currentResult,e)){var r={cache:!0};!1!==(null==t?void 0:t.listeners)&&this.shouldNotifyListeners(this.currentResult,e)&&(r.listeners=!0),this.notify(Object(n.a)({},r,t))}},r.updateQuery=function(){var t=this.client.getQueryCache().build(this.client,this.options);if(t!==this.currentQuery){var e=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(null==e||e.removeObserver(this),t.addObserver(this))}},r.onQueryUpdate=function(t){var e={};"success"===t.type?e.onSuccess=!0:"error"!==t.type||Object(l.c)(t.error)||(e.onError=!0),this.updateResult(e),this.hasListeners()&&this.updateTimers()},r.notify=function(t){var e=this;o.a.batch((function(){t.onSuccess?(null==e.options.onSuccess||e.options.onSuccess(e.currentResult.data),null==e.options.onSettled||e.options.onSettled(e.currentResult.data,null)):t.onError&&(null==e.options.onError||e.options.onError(e.currentResult.error),null==e.options.onSettled||e.options.onSettled(void 0,e.currentResult.error)),t.listeners&&e.listeners.forEach((function(t){t(e.currentResult)})),t.cache&&e.client.getQueryCache().notify({query:e.currentQuery,type:"observerResultsUpdated"})}))},e}(a.a);function f(t,e){return function(t,e){return!1!==e.enabled&&!t.state.dataUpdatedAt&&!("error"===t.state.status&&!1===e.retryOnMount)}(t,e)||function(t,e){return!1!==e.enabled&&t.state.dataUpdatedAt>0&&("always"===e.refetchOnMount||!1!==e.refetchOnMount&&p(t,e))}(t,e)}function d(t,e,r,n){return!1!==r.enabled&&(t!==e||!1===n.enabled)&&p(t,r)}function p(t,e){return t.isStaleByTime(e.staleTime)}},898:function(t,e,r){var n=r(385),i=r(903),s=r(375),o=r(58);t.exports=function(t,e){return(o(t)?n:i)(t,s(e,3))}},899:function(t,e,r){var n=r(375),i=r(913);t.exports=function(t,e){return t&&t.length?i(t,n(e,2)):[]}},900:function(t,e){t.exports=function(t,e,r,n){for(var i=t.length,s=r+(n?1:-1);n?s--:++s<i;)if(e(t[s],s,t))return s;return-1}},903:function(t,e,r){var n=r(383);t.exports=function(t,e){var r=[];return n(t,(function(t,n,i){e(t,n,i)&&r.push(t)})),r}},906:function(t,e,r){var n=r(911),i=r(193);t.exports=function(t,e){return n(i(t,e),1)}},911:function(t,e,r){var n=r(390),i=r(912);t.exports=function t(e,r,s,o,u){var a=-1,c=e.length;for(s||(s=i),u||(u=[]);++a<c;){var l=e[a];r>0&&s(l)?r>1?t(l,r-1,s,o,u):n(u,l):o||(u[u.length]=l)}return u}},912:function(t,e,r){var n=r(154),i=r(259),s=r(58),o=n?n.isConcatSpreadable:void 0;t.exports=function(t){return s(t)||i(t)||!!(o&&t&&t[o])}},913:function(t,e,r){var n=r(388),i=r(914),s=r(918),o=r(389),u=r(919),a=r(380);t.exports=function(t,e,r){var c=-1,l=i,h=t.length,f=!0,d=[],p=d;if(r)f=!1,l=s;else if(h>=200){var v=e?null:u(t);if(v)return a(v);f=!1,l=o,p=new n}else p=e?[]:d;t:for(;++c<h;){var b=t[c],y=e?e(b):b;if(b=r||0!==b?b:0,f&&y===y){for(var O=p.length;O--;)if(p[O]===y)continue t;e&&p.push(y),d.push(b)}else l(p,y,r)||(p!==d&&p.push(y),d.push(b))}return d}},914:function(t,e,r){var n=r(915);t.exports=function(t,e){return!!(null==t?0:t.length)&&n(t,e,0)>-1}},915:function(t,e,r){var n=r(900),i=r(916),s=r(917);t.exports=function(t,e,r){return e===e?s(t,e,r):n(t,i,r)}},916:function(t,e){t.exports=function(t){return t!==t}},917:function(t,e){t.exports=function(t,e,r){for(var n=r-1,i=t.length;++n<i;)if(t[n]===e)return n;return-1}},918:function(t,e){t.exports=function(t,e,r){for(var n=-1,i=null==t?0:t.length;++n<i;)if(r(e,t[n]))return!0;return!1}},919:function(t,e,r){var n=r(391),i=r(920),s=r(380),o=n&&1/s(new n([,-0]))[1]==1/0?function(t){return new n(t)}:i;t.exports=o},920:function(t,e){t.exports=function(){}},955:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var n=r(6),i=r(30),s=r(895),o=r(261),u=function(t){function e(e,r){return t.call(this,e,r)||this}Object(i.a)(e,t);var r=e.prototype;return r.bindMethods=function(){t.prototype.bindMethods.call(this),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)},r.setOptions=function(e){t.prototype.setOptions.call(this,Object(n.a)({},e,{behavior:Object(o.c)()}))},r.getOptimisticResult=function(e){return e.behavior=Object(o.c)(),t.prototype.getOptimisticResult.call(this,e)},r.fetchNextPage=function(t){return this.fetch({cancelRefetch:!0,throwOnError:null==t?void 0:t.throwOnError,meta:{fetchMore:{direction:"forward",pageParam:null==t?void 0:t.pageParam}}})},r.fetchPreviousPage=function(t){return this.fetch({cancelRefetch:!0,throwOnError:null==t?void 0:t.throwOnError,meta:{fetchMore:{direction:"backward",pageParam:null==t?void 0:t.pageParam}}})},r.createResult=function(e,r){var i,s,u,a,c,l,h=e.state,f=t.prototype.createResult.call(this,e,r);return Object(n.a)({},f,{fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:Object(o.a)(r,null==(i=h.data)?void 0:i.pages),hasPreviousPage:Object(o.b)(r,null==(s=h.data)?void 0:s.pages),isFetchingNextPage:h.isFetching&&"forward"===(null==(u=h.fetchMeta)||null==(a=u.fetchMore)?void 0:a.direction),isFetchingPreviousPage:h.isFetching&&"backward"===(null==(c=h.fetchMeta)||null==(l=c.fetchMore)?void 0:l.direction)})},e}(s.a),a=r(5),c=r(889);function l(t,e,r){var n=Object(a.l)(t,e,r);return Object(c.a)(n,u)}}}]);
//# sourceMappingURL=10.158f403a.chunk.js.map