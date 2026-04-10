function mv(e,t){for(var n=0;n<t.length;n++){const a=t[n];if(typeof a!="string"&&!Array.isArray(a)){for(const o in a)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(a,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>a[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();var fv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function pg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var mg={exports:{}},Wl={},fg={exports:{}},Pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ro=Symbol.for("react.element"),gv=Symbol.for("react.portal"),xv=Symbol.for("react.fragment"),yv=Symbol.for("react.strict_mode"),vv=Symbol.for("react.profiler"),bv=Symbol.for("react.provider"),_v=Symbol.for("react.context"),wv=Symbol.for("react.forward_ref"),jv=Symbol.for("react.suspense"),kv=Symbol.for("react.memo"),Sv=Symbol.for("react.lazy"),rm=Symbol.iterator;function Nv(e){return e===null||typeof e!="object"?null:(e=rm&&e[rm]||e["@@iterator"],typeof e=="function"?e:null)}var gg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xg=Object.assign,yg={};function ua(e,t,n){this.props=e,this.context=t,this.refs=yg,this.updater=n||gg}ua.prototype.isReactComponent={};ua.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ua.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function vg(){}vg.prototype=ua.prototype;function th(e,t,n){this.props=e,this.context=t,this.refs=yg,this.updater=n||gg}var nh=th.prototype=new vg;nh.constructor=th;xg(nh,ua.prototype);nh.isPureReactComponent=!0;var im=Array.isArray,bg=Object.prototype.hasOwnProperty,rh={current:null},_g={key:!0,ref:!0,__self:!0,__source:!0};function wg(e,t,n){var a,o={},l=null,d=null;if(t!=null)for(a in t.ref!==void 0&&(d=t.ref),t.key!==void 0&&(l=""+t.key),t)bg.call(t,a)&&!_g.hasOwnProperty(a)&&(o[a]=t[a]);var h=arguments.length-2;if(h===1)o.children=n;else if(1<h){for(var u=Array(h),f=0;f<h;f++)u[f]=arguments[f+2];o.children=u}if(e&&e.defaultProps)for(a in h=e.defaultProps,h)o[a]===void 0&&(o[a]=h[a]);return{$$typeof:Ro,type:e,key:l,ref:d,props:o,_owner:rh.current}}function Cv(e,t){return{$$typeof:Ro,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ih(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ro}function zv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var am=/\/+/g;function Jc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?zv(""+e.key):t.toString(36)}function Vs(e,t,n,a,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var d=!1;if(e===null)d=!0;else switch(l){case"string":case"number":d=!0;break;case"object":switch(e.$$typeof){case Ro:case gv:d=!0}}if(d)return d=e,o=o(d),e=a===""?"."+Jc(d,0):a,im(o)?(n="",e!=null&&(n=e.replace(am,"$&/")+"/"),Vs(o,t,n,"",function(f){return f})):o!=null&&(ih(o)&&(o=Cv(o,n+(!o.key||d&&d.key===o.key?"":(""+o.key).replace(am,"$&/")+"/")+e)),t.push(o)),1;if(d=0,a=a===""?".":a+":",im(e))for(var h=0;h<e.length;h++){l=e[h];var u=a+Jc(l,h);d+=Vs(l,t,n,u,o)}else if(u=Nv(e),typeof u=="function")for(e=u.call(e),h=0;!(l=e.next()).done;)l=l.value,u=a+Jc(l,h++),d+=Vs(l,t,n,u,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return d}function Ns(e,t,n){if(e==null)return e;var a=[],o=0;return Vs(e,a,"","",function(l){return t.call(n,l,o++)}),a}function Pv(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Lt={current:null},Gs={transition:null},Lv={ReactCurrentDispatcher:Lt,ReactCurrentBatchConfig:Gs,ReactCurrentOwner:rh};function jg(){throw Error("act(...) is not supported in production builds of React.")}Pe.Children={map:Ns,forEach:function(e,t,n){Ns(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ns(e,function(){t++}),t},toArray:function(e){return Ns(e,function(t){return t})||[]},only:function(e){if(!ih(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Pe.Component=ua;Pe.Fragment=xv;Pe.Profiler=vv;Pe.PureComponent=th;Pe.StrictMode=yv;Pe.Suspense=jv;Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lv;Pe.act=jg;Pe.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=xg({},e.props),o=e.key,l=e.ref,d=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,d=rh.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var h=e.type.defaultProps;for(u in t)bg.call(t,u)&&!_g.hasOwnProperty(u)&&(a[u]=t[u]===void 0&&h!==void 0?h[u]:t[u])}var u=arguments.length-2;if(u===1)a.children=n;else if(1<u){h=Array(u);for(var f=0;f<u;f++)h[f]=arguments[f+2];a.children=h}return{$$typeof:Ro,type:e.type,key:o,ref:l,props:a,_owner:d}};Pe.createContext=function(e){return e={$$typeof:_v,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:bv,_context:e},e.Consumer=e};Pe.createElement=wg;Pe.createFactory=function(e){var t=wg.bind(null,e);return t.type=e,t};Pe.createRef=function(){return{current:null}};Pe.forwardRef=function(e){return{$$typeof:wv,render:e}};Pe.isValidElement=ih;Pe.lazy=function(e){return{$$typeof:Sv,_payload:{_status:-1,_result:e},_init:Pv}};Pe.memo=function(e,t){return{$$typeof:kv,type:e,compare:t===void 0?null:t}};Pe.startTransition=function(e){var t=Gs.transition;Gs.transition={};try{e()}finally{Gs.transition=t}};Pe.unstable_act=jg;Pe.useCallback=function(e,t){return Lt.current.useCallback(e,t)};Pe.useContext=function(e){return Lt.current.useContext(e)};Pe.useDebugValue=function(){};Pe.useDeferredValue=function(e){return Lt.current.useDeferredValue(e)};Pe.useEffect=function(e,t){return Lt.current.useEffect(e,t)};Pe.useId=function(){return Lt.current.useId()};Pe.useImperativeHandle=function(e,t,n){return Lt.current.useImperativeHandle(e,t,n)};Pe.useInsertionEffect=function(e,t){return Lt.current.useInsertionEffect(e,t)};Pe.useLayoutEffect=function(e,t){return Lt.current.useLayoutEffect(e,t)};Pe.useMemo=function(e,t){return Lt.current.useMemo(e,t)};Pe.useReducer=function(e,t,n){return Lt.current.useReducer(e,t,n)};Pe.useRef=function(e){return Lt.current.useRef(e)};Pe.useState=function(e){return Lt.current.useState(e)};Pe.useSyncExternalStore=function(e,t,n){return Lt.current.useSyncExternalStore(e,t,n)};Pe.useTransition=function(){return Lt.current.useTransition()};Pe.version="18.3.1";fg.exports=Pe;var m=fg.exports;const Jr=pg(m),Ev=mv({__proto__:null,default:Jr},[m]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mv=m,Tv=Symbol.for("react.element"),Av=Symbol.for("react.fragment"),Iv=Object.prototype.hasOwnProperty,Rv=Mv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ov={key:!0,ref:!0,__self:!0,__source:!0};function kg(e,t,n){var a,o={},l=null,d=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(d=t.ref);for(a in t)Iv.call(t,a)&&!Ov.hasOwnProperty(a)&&(o[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps,t)o[a]===void 0&&(o[a]=t[a]);return{$$typeof:Tv,type:e,key:l,ref:d,props:o,_owner:Rv.current}}Wl.Fragment=Av;Wl.jsx=kg;Wl.jsxs=kg;mg.exports=Wl;var i=mg.exports,Wd={},Sg={exports:{}},Vt={},Ng={exports:{}},Cg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,te){var G=R.length;R.push(te);e:for(;0<G;){var X=G-1>>>1,H=R[X];if(0<o(H,te))R[X]=te,R[G]=H,G=X;else break e}}function n(R){return R.length===0?null:R[0]}function a(R){if(R.length===0)return null;var te=R[0],G=R.pop();if(G!==te){R[0]=G;e:for(var X=0,H=R.length,ue=H>>>1;X<ue;){var T=2*(X+1)-1,Z=R[T],ee=T+1,ye=R[ee];if(0>o(Z,G))ee<H&&0>o(ye,Z)?(R[X]=ye,R[ee]=G,X=ee):(R[X]=Z,R[T]=G,X=T);else if(ee<H&&0>o(ye,G))R[X]=ye,R[ee]=G,X=ee;else break e}}return te}function o(R,te){var G=R.sortIndex-te.sortIndex;return G!==0?G:R.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var d=Date,h=d.now();e.unstable_now=function(){return d.now()-h}}var u=[],f=[],y=1,x=null,v=3,_=!1,b=!1,z=!1,C=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(R){for(var te=n(f);te!==null;){if(te.callback===null)a(f);else if(te.startTime<=R)a(f),te.sortIndex=te.expirationTime,t(u,te);else break;te=n(f)}}function j(R){if(z=!1,S(R),!b)if(n(u)!==null)b=!0,J(E);else{var te=n(f);te!==null&&W(j,te.startTime-R)}}function E(R,te){b=!1,z&&(z=!1,N(O),O=-1),_=!0;var G=v;try{for(S(te),x=n(u);x!==null&&(!(x.expirationTime>te)||R&&!V());){var X=x.callback;if(typeof X=="function"){x.callback=null,v=x.priorityLevel;var H=X(x.expirationTime<=te);te=e.unstable_now(),typeof H=="function"?x.callback=H:x===n(u)&&a(u),S(te)}else a(u);x=n(u)}if(x!==null)var ue=!0;else{var T=n(f);T!==null&&W(j,T.startTime-te),ue=!1}return ue}finally{x=null,v=G,_=!1}}var M=!1,P=null,O=-1,I=5,F=-1;function V(){return!(e.unstable_now()-F<I)}function D(){if(P!==null){var R=e.unstable_now();F=R;var te=!0;try{te=P(!0,R)}finally{te?ae():(M=!1,P=null)}}else M=!1}var ae;if(typeof w=="function")ae=function(){w(D)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,Q=oe.port2;oe.port1.onmessage=D,ae=function(){Q.postMessage(null)}}else ae=function(){C(D,0)};function J(R){P=R,M||(M=!0,ae())}function W(R,te){O=C(function(){R(e.unstable_now())},te)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){b||_||(b=!0,J(E))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(R){switch(v){case 1:case 2:case 3:var te=3;break;default:te=v}var G=v;v=te;try{return R()}finally{v=G}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,te){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var G=v;v=R;try{return te()}finally{v=G}},e.unstable_scheduleCallback=function(R,te,G){var X=e.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?X+G:X):G=X,R){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=G+H,R={id:y++,callback:te,priorityLevel:R,startTime:G,expirationTime:H,sortIndex:-1},G>X?(R.sortIndex=G,t(f,R),n(u)===null&&R===n(f)&&(z?(N(O),O=-1):z=!0,W(j,G-X))):(R.sortIndex=H,t(u,R),b||_||(b=!0,J(E))),R},e.unstable_shouldYield=V,e.unstable_wrapCallback=function(R){var te=v;return function(){var G=v;v=te;try{return R.apply(this,arguments)}finally{v=G}}}})(Cg);Ng.exports=Cg;var Bv=Ng.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fv=m,qt=Bv;function ie(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zg=new Set,ho={};function ci(e,t){Xi(e,t),Xi(e+"Capture",t)}function Xi(e,t){for(ho[e]=t,e=0;e<t.length;e++)zg.add(t[e])}var Gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ud=Object.prototype.hasOwnProperty,Dv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,om={},sm={};function Wv(e){return Ud.call(sm,e)?!0:Ud.call(om,e)?!1:Dv.test(e)?sm[e]=!0:(om[e]=!0,!1)}function Uv(e,t,n,a){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Hv(e,t,n,a){if(t===null||typeof t>"u"||Uv(e,t,n,a))return!0;if(a)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Et(e,t,n,a,o,l,d){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=d}var xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){xt[e]=new Et(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];xt[t]=new Et(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){xt[e]=new Et(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){xt[e]=new Et(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){xt[e]=new Et(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){xt[e]=new Et(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){xt[e]=new Et(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){xt[e]=new Et(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){xt[e]=new Et(e,5,!1,e.toLowerCase(),null,!1,!1)});var ah=/[\-:]([a-z])/g;function oh(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ah,oh);xt[t]=new Et(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ah,oh);xt[t]=new Et(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ah,oh);xt[t]=new Et(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){xt[e]=new Et(e,1,!1,e.toLowerCase(),null,!1,!1)});xt.xlinkHref=new Et("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){xt[e]=new Et(e,1,!1,e.toLowerCase(),null,!0,!0)});function sh(e,t,n,a){var o=xt.hasOwnProperty(t)?xt[t]:null;(o!==null?o.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Hv(t,n,o,a)&&(n=null),a||o===null?Wv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,a=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,a?e.setAttributeNS(a,t,n):e.setAttribute(t,n))))}var Xn=Fv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Cs=Symbol.for("react.element"),Mi=Symbol.for("react.portal"),Ti=Symbol.for("react.fragment"),lh=Symbol.for("react.strict_mode"),Hd=Symbol.for("react.profiler"),Pg=Symbol.for("react.provider"),Lg=Symbol.for("react.context"),ch=Symbol.for("react.forward_ref"),Zd=Symbol.for("react.suspense"),$d=Symbol.for("react.suspense_list"),dh=Symbol.for("react.memo"),ar=Symbol.for("react.lazy"),Eg=Symbol.for("react.offscreen"),lm=Symbol.iterator;function Ia(e){return e===null||typeof e!="object"?null:(e=lm&&e[lm]||e["@@iterator"],typeof e=="function"?e:null)}var Qe=Object.assign,Xc;function Ka(e){if(Xc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Xc=t&&t[1]||""}return`
`+Xc+e}var ed=!1;function td(e,t){if(!e||ed)return"";ed=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var a=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){a=f}e.call(t.prototype)}else{try{throw Error()}catch(f){a=f}e()}}catch(f){if(f&&a&&typeof f.stack=="string"){for(var o=f.stack.split(`
`),l=a.stack.split(`
`),d=o.length-1,h=l.length-1;1<=d&&0<=h&&o[d]!==l[h];)h--;for(;1<=d&&0<=h;d--,h--)if(o[d]!==l[h]){if(d!==1||h!==1)do if(d--,h--,0>h||o[d]!==l[h]){var u=`
`+o[d].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=d&&0<=h);break}}}finally{ed=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ka(e):""}function Zv(e){switch(e.tag){case 5:return Ka(e.type);case 16:return Ka("Lazy");case 13:return Ka("Suspense");case 19:return Ka("SuspenseList");case 0:case 2:case 15:return e=td(e.type,!1),e;case 11:return e=td(e.type.render,!1),e;case 1:return e=td(e.type,!0),e;default:return""}}function qd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ti:return"Fragment";case Mi:return"Portal";case Hd:return"Profiler";case lh:return"StrictMode";case Zd:return"Suspense";case $d:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Lg:return(e.displayName||"Context")+".Consumer";case Pg:return(e._context.displayName||"Context")+".Provider";case ch:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case dh:return t=e.displayName||null,t!==null?t:qd(e.type)||"Memo";case ar:t=e._payload,e=e._init;try{return qd(e(t))}catch{}}return null}function $v(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qd(t);case 8:return t===lh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function wr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Mg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function qv(e){var t=Mg(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(d){a=""+d,l.call(this,d)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(d){a=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zs(e){e._valueTracker||(e._valueTracker=qv(e))}function Tg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Mg(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function ll(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Vd(e,t){var n=t.checked;return Qe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function cm(e,t){var n=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;n=wr(t.value!=null?t.value:n),e._wrapperState={initialChecked:a,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ag(e,t){t=t.checked,t!=null&&sh(e,"checked",t,!1)}function Gd(e,t){Ag(e,t);var n=wr(t.value),a=t.type;if(n!=null)a==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Kd(e,t.type,n):t.hasOwnProperty("defaultValue")&&Kd(e,t.type,wr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function dm(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Kd(e,t,n){(t!=="number"||ll(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Qa=Array.isArray;function $i(e,t,n,a){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&a&&(e[n].defaultSelected=!0)}else{for(n=""+wr(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,a&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Qd(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(ie(91));return Qe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function um(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(ie(92));if(Qa(n)){if(1<n.length)throw Error(ie(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:wr(n)}}function Ig(e,t){var n=wr(t.value),a=wr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),a!=null&&(e.defaultValue=""+a)}function hm(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Rg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yd(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Rg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ps,Og=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,a,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,a,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ps=Ps||document.createElement("div"),Ps.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ps.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function po(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var eo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vv=["Webkit","ms","Moz","O"];Object.keys(eo).forEach(function(e){Vv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),eo[t]=eo[e]})});function Bg(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||eo.hasOwnProperty(e)&&eo[e]?(""+t).trim():t+"px"}function Fg(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var a=n.indexOf("--")===0,o=Bg(n,t[n],a);n==="float"&&(n="cssFloat"),a?e.setProperty(n,o):e[n]=o}}var Gv=Qe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Jd(e,t){if(t){if(Gv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(ie(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(ie(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(ie(61))}if(t.style!=null&&typeof t.style!="object")throw Error(ie(62))}}function Xd(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var eu=null;function uh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var tu=null,qi=null,Vi=null;function pm(e){if(e=Fo(e)){if(typeof tu!="function")throw Error(ie(280));var t=e.stateNode;t&&(t=ql(t),tu(e.stateNode,e.type,t))}}function Dg(e){qi?Vi?Vi.push(e):Vi=[e]:qi=e}function Wg(){if(qi){var e=qi,t=Vi;if(Vi=qi=null,pm(e),t)for(e=0;e<t.length;e++)pm(t[e])}}function Ug(e,t){return e(t)}function Hg(){}var nd=!1;function Zg(e,t,n){if(nd)return e(t,n);nd=!0;try{return Ug(e,t,n)}finally{nd=!1,(qi!==null||Vi!==null)&&(Hg(),Wg())}}function mo(e,t){var n=e.stateNode;if(n===null)return null;var a=ql(n);if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(ie(231,t,typeof n));return n}var nu=!1;if(Gn)try{var Ra={};Object.defineProperty(Ra,"passive",{get:function(){nu=!0}}),window.addEventListener("test",Ra,Ra),window.removeEventListener("test",Ra,Ra)}catch{nu=!1}function Kv(e,t,n,a,o,l,d,h,u){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(y){this.onError(y)}}var to=!1,cl=null,dl=!1,ru=null,Qv={onError:function(e){to=!0,cl=e}};function Yv(e,t,n,a,o,l,d,h,u){to=!1,cl=null,Kv.apply(Qv,arguments)}function Jv(e,t,n,a,o,l,d,h,u){if(Yv.apply(this,arguments),to){if(to){var f=cl;to=!1,cl=null}else throw Error(ie(198));dl||(dl=!0,ru=f)}}function di(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function $g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function mm(e){if(di(e)!==e)throw Error(ie(188))}function Xv(e){var t=e.alternate;if(!t){if(t=di(e),t===null)throw Error(ie(188));return t!==e?null:e}for(var n=e,a=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(a=o.return,a!==null){n=a;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return mm(o),e;if(l===a)return mm(o),t;l=l.sibling}throw Error(ie(188))}if(n.return!==a.return)n=o,a=l;else{for(var d=!1,h=o.child;h;){if(h===n){d=!0,n=o,a=l;break}if(h===a){d=!0,a=o,n=l;break}h=h.sibling}if(!d){for(h=l.child;h;){if(h===n){d=!0,n=l,a=o;break}if(h===a){d=!0,a=l,n=o;break}h=h.sibling}if(!d)throw Error(ie(189))}}if(n.alternate!==a)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?e:t}function qg(e){return e=Xv(e),e!==null?Vg(e):null}function Vg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Vg(e);if(t!==null)return t;e=e.sibling}return null}var Gg=qt.unstable_scheduleCallback,fm=qt.unstable_cancelCallback,e2=qt.unstable_shouldYield,t2=qt.unstable_requestPaint,et=qt.unstable_now,n2=qt.unstable_getCurrentPriorityLevel,hh=qt.unstable_ImmediatePriority,Kg=qt.unstable_UserBlockingPriority,ul=qt.unstable_NormalPriority,r2=qt.unstable_LowPriority,Qg=qt.unstable_IdlePriority,Ul=null,zn=null;function i2(e){if(zn&&typeof zn.onCommitFiberRoot=="function")try{zn.onCommitFiberRoot(Ul,e,void 0,(e.current.flags&128)===128)}catch{}}var gn=Math.clz32?Math.clz32:s2,a2=Math.log,o2=Math.LN2;function s2(e){return e>>>=0,e===0?32:31-(a2(e)/o2|0)|0}var Ls=64,Es=4194304;function Ya(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function hl(e,t){var n=e.pendingLanes;if(n===0)return 0;var a=0,o=e.suspendedLanes,l=e.pingedLanes,d=n&268435455;if(d!==0){var h=d&~o;h!==0?a=Ya(h):(l&=d,l!==0&&(a=Ya(l)))}else d=n&~o,d!==0?a=Ya(d):l!==0&&(a=Ya(l));if(a===0)return 0;if(t!==0&&t!==a&&!(t&o)&&(o=a&-a,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(a&4&&(a|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)n=31-gn(t),o=1<<n,a|=e[n],t&=~o;return a}function l2(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function c2(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var d=31-gn(l),h=1<<d,u=o[d];u===-1?(!(h&n)||h&a)&&(o[d]=l2(h,t)):u<=t&&(e.expiredLanes|=h),l&=~h}}function iu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Yg(){var e=Ls;return Ls<<=1,!(Ls&4194240)&&(Ls=64),e}function rd(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Oo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-gn(t),e[t]=n}function d2(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-gn(n),l=1<<o;t[o]=0,a[o]=-1,e[o]=-1,n&=~l}}function ph(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-gn(n),o=1<<a;o&t|e[a]&t&&(e[a]|=t),n&=~o}}var Re=0;function Jg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Xg,mh,e0,t0,n0,au=!1,Ms=[],hr=null,pr=null,mr=null,fo=new Map,go=new Map,sr=[],u2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gm(e,t){switch(e){case"focusin":case"focusout":hr=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":mr=null;break;case"pointerover":case"pointerout":fo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":go.delete(t.pointerId)}}function Oa(e,t,n,a,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:l,targetContainers:[o]},t!==null&&(t=Fo(t),t!==null&&mh(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function h2(e,t,n,a,o){switch(t){case"focusin":return hr=Oa(hr,e,t,n,a,o),!0;case"dragenter":return pr=Oa(pr,e,t,n,a,o),!0;case"mouseover":return mr=Oa(mr,e,t,n,a,o),!0;case"pointerover":var l=o.pointerId;return fo.set(l,Oa(fo.get(l)||null,e,t,n,a,o)),!0;case"gotpointercapture":return l=o.pointerId,go.set(l,Oa(go.get(l)||null,e,t,n,a,o)),!0}return!1}function r0(e){var t=Zr(e.target);if(t!==null){var n=di(t);if(n!==null){if(t=n.tag,t===13){if(t=$g(n),t!==null){e.blockedOn=t,n0(e.priority,function(){e0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ks(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ou(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);eu=a,n.target.dispatchEvent(a),eu=null}else return t=Fo(n),t!==null&&mh(t),e.blockedOn=n,!1;t.shift()}return!0}function xm(e,t,n){Ks(e)&&n.delete(t)}function p2(){au=!1,hr!==null&&Ks(hr)&&(hr=null),pr!==null&&Ks(pr)&&(pr=null),mr!==null&&Ks(mr)&&(mr=null),fo.forEach(xm),go.forEach(xm)}function Ba(e,t){e.blockedOn===t&&(e.blockedOn=null,au||(au=!0,qt.unstable_scheduleCallback(qt.unstable_NormalPriority,p2)))}function xo(e){function t(o){return Ba(o,e)}if(0<Ms.length){Ba(Ms[0],e);for(var n=1;n<Ms.length;n++){var a=Ms[n];a.blockedOn===e&&(a.blockedOn=null)}}for(hr!==null&&Ba(hr,e),pr!==null&&Ba(pr,e),mr!==null&&Ba(mr,e),fo.forEach(t),go.forEach(t),n=0;n<sr.length;n++)a=sr[n],a.blockedOn===e&&(a.blockedOn=null);for(;0<sr.length&&(n=sr[0],n.blockedOn===null);)r0(n),n.blockedOn===null&&sr.shift()}var Gi=Xn.ReactCurrentBatchConfig,pl=!0;function m2(e,t,n,a){var o=Re,l=Gi.transition;Gi.transition=null;try{Re=1,fh(e,t,n,a)}finally{Re=o,Gi.transition=l}}function f2(e,t,n,a){var o=Re,l=Gi.transition;Gi.transition=null;try{Re=4,fh(e,t,n,a)}finally{Re=o,Gi.transition=l}}function fh(e,t,n,a){if(pl){var o=ou(e,t,n,a);if(o===null)pd(e,t,a,ml,n),gm(e,a);else if(h2(o,e,t,n,a))a.stopPropagation();else if(gm(e,a),t&4&&-1<u2.indexOf(e)){for(;o!==null;){var l=Fo(o);if(l!==null&&Xg(l),l=ou(e,t,n,a),l===null&&pd(e,t,a,ml,n),l===o)break;o=l}o!==null&&a.stopPropagation()}else pd(e,t,a,null,n)}}var ml=null;function ou(e,t,n,a){if(ml=null,e=uh(a),e=Zr(e),e!==null)if(t=di(e),t===null)e=null;else if(n=t.tag,n===13){if(e=$g(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ml=e,null}function i0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(n2()){case hh:return 1;case Kg:return 4;case ul:case r2:return 16;case Qg:return 536870912;default:return 16}default:return 16}}var cr=null,gh=null,Qs=null;function a0(){if(Qs)return Qs;var e,t=gh,n=t.length,a,o="value"in cr?cr.value:cr.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var d=n-e;for(a=1;a<=d&&t[n-a]===o[l-a];a++);return Qs=o.slice(e,1<a?1-a:void 0)}function Ys(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ts(){return!0}function ym(){return!1}function Gt(e){function t(n,a,o,l,d){this._reactName=n,this._targetInst=o,this.type=a,this.nativeEvent=l,this.target=d,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(n=e[h],this[h]=n?n(l):l[h]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Ts:ym,this.isPropagationStopped=ym,this}return Qe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ts)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ts)},persist:function(){},isPersistent:Ts}),t}var ha={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xh=Gt(ha),Bo=Qe({},ha,{view:0,detail:0}),g2=Gt(Bo),id,ad,Fa,Hl=Qe({},Bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fa&&(Fa&&e.type==="mousemove"?(id=e.screenX-Fa.screenX,ad=e.screenY-Fa.screenY):ad=id=0,Fa=e),id)},movementY:function(e){return"movementY"in e?e.movementY:ad}}),vm=Gt(Hl),x2=Qe({},Hl,{dataTransfer:0}),y2=Gt(x2),v2=Qe({},Bo,{relatedTarget:0}),od=Gt(v2),b2=Qe({},ha,{animationName:0,elapsedTime:0,pseudoElement:0}),_2=Gt(b2),w2=Qe({},ha,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),j2=Gt(w2),k2=Qe({},ha,{data:0}),bm=Gt(k2),S2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},N2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},C2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function z2(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=C2[e])?!!t[e]:!1}function yh(){return z2}var P2=Qe({},Bo,{key:function(e){if(e.key){var t=S2[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ys(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?N2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yh,charCode:function(e){return e.type==="keypress"?Ys(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ys(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),L2=Gt(P2),E2=Qe({},Hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_m=Gt(E2),M2=Qe({},Bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yh}),T2=Gt(M2),A2=Qe({},ha,{propertyName:0,elapsedTime:0,pseudoElement:0}),I2=Gt(A2),R2=Qe({},Hl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),O2=Gt(R2),B2=[9,13,27,32],vh=Gn&&"CompositionEvent"in window,no=null;Gn&&"documentMode"in document&&(no=document.documentMode);var F2=Gn&&"TextEvent"in window&&!no,o0=Gn&&(!vh||no&&8<no&&11>=no),wm=" ",jm=!1;function s0(e,t){switch(e){case"keyup":return B2.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function l0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ai=!1;function D2(e,t){switch(e){case"compositionend":return l0(t);case"keypress":return t.which!==32?null:(jm=!0,wm);case"textInput":return e=t.data,e===wm&&jm?null:e;default:return null}}function W2(e,t){if(Ai)return e==="compositionend"||!vh&&s0(e,t)?(e=a0(),Qs=gh=cr=null,Ai=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return o0&&t.locale!=="ko"?null:t.data;default:return null}}var U2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function km(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!U2[e.type]:t==="textarea"}function c0(e,t,n,a){Dg(a),t=fl(t,"onChange"),0<t.length&&(n=new xh("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var ro=null,yo=null;function H2(e){b0(e,0)}function Zl(e){var t=Oi(e);if(Tg(t))return e}function Z2(e,t){if(e==="change")return t}var d0=!1;if(Gn){var sd;if(Gn){var ld="oninput"in document;if(!ld){var Sm=document.createElement("div");Sm.setAttribute("oninput","return;"),ld=typeof Sm.oninput=="function"}sd=ld}else sd=!1;d0=sd&&(!document.documentMode||9<document.documentMode)}function Nm(){ro&&(ro.detachEvent("onpropertychange",u0),yo=ro=null)}function u0(e){if(e.propertyName==="value"&&Zl(yo)){var t=[];c0(t,yo,e,uh(e)),Zg(H2,t)}}function $2(e,t,n){e==="focusin"?(Nm(),ro=t,yo=n,ro.attachEvent("onpropertychange",u0)):e==="focusout"&&Nm()}function q2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zl(yo)}function V2(e,t){if(e==="click")return Zl(t)}function G2(e,t){if(e==="input"||e==="change")return Zl(t)}function K2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vn=typeof Object.is=="function"?Object.is:K2;function vo(e,t){if(vn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var o=n[a];if(!Ud.call(t,o)||!vn(e[o],t[o]))return!1}return!0}function Cm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zm(e,t){var n=Cm(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cm(n)}}function h0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?h0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function p0(){for(var e=window,t=ll();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ll(e.document)}return t}function bh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Q2(e){var t=p0(),n=e.focusedElem,a=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&h0(n.ownerDocument.documentElement,n)){if(a!==null&&bh(n)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(a.start,o);a=a.end===void 0?l:Math.min(a.end,o),!e.extend&&l>a&&(o=a,a=l,l=o),o=zm(n,l);var d=zm(n,a);o&&d&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>a?(e.addRange(t),e.extend(d.node,d.offset)):(t.setEnd(d.node,d.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Y2=Gn&&"documentMode"in document&&11>=document.documentMode,Ii=null,su=null,io=null,lu=!1;function Pm(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;lu||Ii==null||Ii!==ll(a)||(a=Ii,"selectionStart"in a&&bh(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),io&&vo(io,a)||(io=a,a=fl(su,"onSelect"),0<a.length&&(t=new xh("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Ii)))}function As(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ri={animationend:As("Animation","AnimationEnd"),animationiteration:As("Animation","AnimationIteration"),animationstart:As("Animation","AnimationStart"),transitionend:As("Transition","TransitionEnd")},cd={},m0={};Gn&&(m0=document.createElement("div").style,"AnimationEvent"in window||(delete Ri.animationend.animation,delete Ri.animationiteration.animation,delete Ri.animationstart.animation),"TransitionEvent"in window||delete Ri.transitionend.transition);function $l(e){if(cd[e])return cd[e];if(!Ri[e])return e;var t=Ri[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in m0)return cd[e]=t[n];return e}var f0=$l("animationend"),g0=$l("animationiteration"),x0=$l("animationstart"),y0=$l("transitionend"),v0=new Map,Lm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sr(e,t){v0.set(e,t),ci(t,[e])}for(var dd=0;dd<Lm.length;dd++){var ud=Lm[dd],J2=ud.toLowerCase(),X2=ud[0].toUpperCase()+ud.slice(1);Sr(J2,"on"+X2)}Sr(f0,"onAnimationEnd");Sr(g0,"onAnimationIteration");Sr(x0,"onAnimationStart");Sr("dblclick","onDoubleClick");Sr("focusin","onFocus");Sr("focusout","onBlur");Sr(y0,"onTransitionEnd");Xi("onMouseEnter",["mouseout","mouseover"]);Xi("onMouseLeave",["mouseout","mouseover"]);Xi("onPointerEnter",["pointerout","pointerover"]);Xi("onPointerLeave",["pointerout","pointerover"]);ci("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ci("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ci("onBeforeInput",["compositionend","keypress","textInput","paste"]);ci("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ci("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ci("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ja="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),eb=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ja));function Em(e,t,n){var a=e.type||"unknown-event";e.currentTarget=n,Jv(a,t,void 0,e),e.currentTarget=null}function b0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],o=a.event;a=a.listeners;e:{var l=void 0;if(t)for(var d=a.length-1;0<=d;d--){var h=a[d],u=h.instance,f=h.currentTarget;if(h=h.listener,u!==l&&o.isPropagationStopped())break e;Em(o,h,f),l=u}else for(d=0;d<a.length;d++){if(h=a[d],u=h.instance,f=h.currentTarget,h=h.listener,u!==l&&o.isPropagationStopped())break e;Em(o,h,f),l=u}}}if(dl)throw e=ru,dl=!1,ru=null,e}function Ze(e,t){var n=t[pu];n===void 0&&(n=t[pu]=new Set);var a=e+"__bubble";n.has(a)||(_0(t,e,2,!1),n.add(a))}function hd(e,t,n){var a=0;t&&(a|=4),_0(n,e,a,t)}var Is="_reactListening"+Math.random().toString(36).slice(2);function bo(e){if(!e[Is]){e[Is]=!0,zg.forEach(function(n){n!=="selectionchange"&&(eb.has(n)||hd(n,!1,e),hd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Is]||(t[Is]=!0,hd("selectionchange",!1,t))}}function _0(e,t,n,a){switch(i0(t)){case 1:var o=m2;break;case 4:o=f2;break;default:o=fh}n=o.bind(null,t,n,e),o=void 0,!nu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),a?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function pd(e,t,n,a,o){var l=a;if(!(t&1)&&!(t&2)&&a!==null)e:for(;;){if(a===null)return;var d=a.tag;if(d===3||d===4){var h=a.stateNode.containerInfo;if(h===o||h.nodeType===8&&h.parentNode===o)break;if(d===4)for(d=a.return;d!==null;){var u=d.tag;if((u===3||u===4)&&(u=d.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;d=d.return}for(;h!==null;){if(d=Zr(h),d===null)return;if(u=d.tag,u===5||u===6){a=l=d;continue e}h=h.parentNode}}a=a.return}Zg(function(){var f=l,y=uh(n),x=[];e:{var v=v0.get(e);if(v!==void 0){var _=xh,b=e;switch(e){case"keypress":if(Ys(n)===0)break e;case"keydown":case"keyup":_=L2;break;case"focusin":b="focus",_=od;break;case"focusout":b="blur",_=od;break;case"beforeblur":case"afterblur":_=od;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=vm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=y2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=T2;break;case f0:case g0:case x0:_=_2;break;case y0:_=I2;break;case"scroll":_=g2;break;case"wheel":_=O2;break;case"copy":case"cut":case"paste":_=j2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=_m}var z=(t&4)!==0,C=!z&&e==="scroll",N=z?v!==null?v+"Capture":null:v;z=[];for(var w=f,S;w!==null;){S=w;var j=S.stateNode;if(S.tag===5&&j!==null&&(S=j,N!==null&&(j=mo(w,N),j!=null&&z.push(_o(w,j,S)))),C)break;w=w.return}0<z.length&&(v=new _(v,b,null,n,y),x.push({event:v,listeners:z}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",_=e==="mouseout"||e==="pointerout",v&&n!==eu&&(b=n.relatedTarget||n.fromElement)&&(Zr(b)||b[Kn]))break e;if((_||v)&&(v=y.window===y?y:(v=y.ownerDocument)?v.defaultView||v.parentWindow:window,_?(b=n.relatedTarget||n.toElement,_=f,b=b?Zr(b):null,b!==null&&(C=di(b),b!==C||b.tag!==5&&b.tag!==6)&&(b=null)):(_=null,b=f),_!==b)){if(z=vm,j="onMouseLeave",N="onMouseEnter",w="mouse",(e==="pointerout"||e==="pointerover")&&(z=_m,j="onPointerLeave",N="onPointerEnter",w="pointer"),C=_==null?v:Oi(_),S=b==null?v:Oi(b),v=new z(j,w+"leave",_,n,y),v.target=C,v.relatedTarget=S,j=null,Zr(y)===f&&(z=new z(N,w+"enter",b,n,y),z.target=S,z.relatedTarget=C,j=z),C=j,_&&b)t:{for(z=_,N=b,w=0,S=z;S;S=Pi(S))w++;for(S=0,j=N;j;j=Pi(j))S++;for(;0<w-S;)z=Pi(z),w--;for(;0<S-w;)N=Pi(N),S--;for(;w--;){if(z===N||N!==null&&z===N.alternate)break t;z=Pi(z),N=Pi(N)}z=null}else z=null;_!==null&&Mm(x,v,_,z,!1),b!==null&&C!==null&&Mm(x,C,b,z,!0)}}e:{if(v=f?Oi(f):window,_=v.nodeName&&v.nodeName.toLowerCase(),_==="select"||_==="input"&&v.type==="file")var E=Z2;else if(km(v))if(d0)E=G2;else{E=q2;var M=$2}else(_=v.nodeName)&&_.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(E=V2);if(E&&(E=E(e,f))){c0(x,E,n,y);break e}M&&M(e,v,f),e==="focusout"&&(M=v._wrapperState)&&M.controlled&&v.type==="number"&&Kd(v,"number",v.value)}switch(M=f?Oi(f):window,e){case"focusin":(km(M)||M.contentEditable==="true")&&(Ii=M,su=f,io=null);break;case"focusout":io=su=Ii=null;break;case"mousedown":lu=!0;break;case"contextmenu":case"mouseup":case"dragend":lu=!1,Pm(x,n,y);break;case"selectionchange":if(Y2)break;case"keydown":case"keyup":Pm(x,n,y)}var P;if(vh)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Ai?s0(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(o0&&n.locale!=="ko"&&(Ai||O!=="onCompositionStart"?O==="onCompositionEnd"&&Ai&&(P=a0()):(cr=y,gh="value"in cr?cr.value:cr.textContent,Ai=!0)),M=fl(f,O),0<M.length&&(O=new bm(O,e,null,n,y),x.push({event:O,listeners:M}),P?O.data=P:(P=l0(n),P!==null&&(O.data=P)))),(P=F2?D2(e,n):W2(e,n))&&(f=fl(f,"onBeforeInput"),0<f.length&&(y=new bm("onBeforeInput","beforeinput",null,n,y),x.push({event:y,listeners:f}),y.data=P))}b0(x,t)})}function _o(e,t,n){return{instance:e,listener:t,currentTarget:n}}function fl(e,t){for(var n=t+"Capture",a=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=mo(e,n),l!=null&&a.unshift(_o(e,l,o)),l=mo(e,t),l!=null&&a.push(_o(e,l,o))),e=e.return}return a}function Pi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Mm(e,t,n,a,o){for(var l=t._reactName,d=[];n!==null&&n!==a;){var h=n,u=h.alternate,f=h.stateNode;if(u!==null&&u===a)break;h.tag===5&&f!==null&&(h=f,o?(u=mo(n,l),u!=null&&d.unshift(_o(n,u,h))):o||(u=mo(n,l),u!=null&&d.push(_o(n,u,h)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var tb=/\r\n?/g,nb=/\u0000|\uFFFD/g;function Tm(e){return(typeof e=="string"?e:""+e).replace(tb,`
`).replace(nb,"")}function Rs(e,t,n){if(t=Tm(t),Tm(e)!==t&&n)throw Error(ie(425))}function gl(){}var cu=null,du=null;function uu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var hu=typeof setTimeout=="function"?setTimeout:void 0,rb=typeof clearTimeout=="function"?clearTimeout:void 0,Am=typeof Promise=="function"?Promise:void 0,ib=typeof queueMicrotask=="function"?queueMicrotask:typeof Am<"u"?function(e){return Am.resolve(null).then(e).catch(ab)}:hu;function ab(e){setTimeout(function(){throw e})}function md(e,t){var n=t,a=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(a===0){e.removeChild(o),xo(t);return}a--}else n!=="$"&&n!=="$?"&&n!=="$!"||a++;n=o}while(n);xo(t)}function fr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Im(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var pa=Math.random().toString(36).slice(2),Cn="__reactFiber$"+pa,wo="__reactProps$"+pa,Kn="__reactContainer$"+pa,pu="__reactEvents$"+pa,ob="__reactListeners$"+pa,sb="__reactHandles$"+pa;function Zr(e){var t=e[Cn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Kn]||n[Cn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Im(e);e!==null;){if(n=e[Cn])return n;e=Im(e)}return t}e=n,n=e.parentNode}return null}function Fo(e){return e=e[Cn]||e[Kn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Oi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(ie(33))}function ql(e){return e[wo]||null}var mu=[],Bi=-1;function Nr(e){return{current:e}}function $e(e){0>Bi||(e.current=mu[Bi],mu[Bi]=null,Bi--)}function We(e,t){Bi++,mu[Bi]=e.current,e.current=t}var jr={},kt=Nr(jr),It=Nr(!1),Xr=jr;function ea(e,t){var n=e.type.contextTypes;if(!n)return jr;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Rt(e){return e=e.childContextTypes,e!=null}function xl(){$e(It),$e(kt)}function Rm(e,t,n){if(kt.current!==jr)throw Error(ie(168));We(kt,t),We(It,n)}function w0(e,t,n){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return n;a=a.getChildContext();for(var o in a)if(!(o in t))throw Error(ie(108,$v(e)||"Unknown",o));return Qe({},n,a)}function yl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||jr,Xr=kt.current,We(kt,e),We(It,It.current),!0}function Om(e,t,n){var a=e.stateNode;if(!a)throw Error(ie(169));n?(e=w0(e,t,Xr),a.__reactInternalMemoizedMergedChildContext=e,$e(It),$e(kt),We(kt,e)):$e(It),We(It,n)}var Wn=null,Vl=!1,fd=!1;function j0(e){Wn===null?Wn=[e]:Wn.push(e)}function lb(e){Vl=!0,j0(e)}function Cr(){if(!fd&&Wn!==null){fd=!0;var e=0,t=Re;try{var n=Wn;for(Re=1;e<n.length;e++){var a=n[e];do a=a(!0);while(a!==null)}Wn=null,Vl=!1}catch(o){throw Wn!==null&&(Wn=Wn.slice(e+1)),Gg(hh,Cr),o}finally{Re=t,fd=!1}}return null}var Fi=[],Di=0,vl=null,bl=0,nn=[],rn=0,ei=null,Un=1,Hn="";function Ur(e,t){Fi[Di++]=bl,Fi[Di++]=vl,vl=e,bl=t}function k0(e,t,n){nn[rn++]=Un,nn[rn++]=Hn,nn[rn++]=ei,ei=e;var a=Un;e=Hn;var o=32-gn(a)-1;a&=~(1<<o),n+=1;var l=32-gn(t)+o;if(30<l){var d=o-o%5;l=(a&(1<<d)-1).toString(32),a>>=d,o-=d,Un=1<<32-gn(t)+o|n<<o|a,Hn=l+e}else Un=1<<l|n<<o|a,Hn=e}function _h(e){e.return!==null&&(Ur(e,1),k0(e,1,0))}function wh(e){for(;e===vl;)vl=Fi[--Di],Fi[Di]=null,bl=Fi[--Di],Fi[Di]=null;for(;e===ei;)ei=nn[--rn],nn[rn]=null,Hn=nn[--rn],nn[rn]=null,Un=nn[--rn],nn[rn]=null}var Zt=null,Ht=null,qe=!1,fn=null;function S0(e,t){var n=an(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Bm(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Zt=e,Ht=fr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Zt=e,Ht=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ei!==null?{id:Un,overflow:Hn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=an(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Zt=e,Ht=null,!0):!1;default:return!1}}function fu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function gu(e){if(qe){var t=Ht;if(t){var n=t;if(!Bm(e,t)){if(fu(e))throw Error(ie(418));t=fr(n.nextSibling);var a=Zt;t&&Bm(e,t)?S0(a,n):(e.flags=e.flags&-4097|2,qe=!1,Zt=e)}}else{if(fu(e))throw Error(ie(418));e.flags=e.flags&-4097|2,qe=!1,Zt=e}}}function Fm(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Zt=e}function Os(e){if(e!==Zt)return!1;if(!qe)return Fm(e),qe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!uu(e.type,e.memoizedProps)),t&&(t=Ht)){if(fu(e))throw N0(),Error(ie(418));for(;t;)S0(e,t),t=fr(t.nextSibling)}if(Fm(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(ie(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ht=fr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ht=null}}else Ht=Zt?fr(e.stateNode.nextSibling):null;return!0}function N0(){for(var e=Ht;e;)e=fr(e.nextSibling)}function ta(){Ht=Zt=null,qe=!1}function jh(e){fn===null?fn=[e]:fn.push(e)}var cb=Xn.ReactCurrentBatchConfig;function Da(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var a=n.stateNode}if(!a)throw Error(ie(147,e));var o=a,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(d){var h=o.refs;d===null?delete h[l]:h[l]=d},t._stringRef=l,t)}if(typeof e!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,e))}return e}function Bs(e,t){throw e=Object.prototype.toString.call(t),Error(ie(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Dm(e){var t=e._init;return t(e._payload)}function C0(e){function t(N,w){if(e){var S=N.deletions;S===null?(N.deletions=[w],N.flags|=16):S.push(w)}}function n(N,w){if(!e)return null;for(;w!==null;)t(N,w),w=w.sibling;return null}function a(N,w){for(N=new Map;w!==null;)w.key!==null?N.set(w.key,w):N.set(w.index,w),w=w.sibling;return N}function o(N,w){return N=vr(N,w),N.index=0,N.sibling=null,N}function l(N,w,S){return N.index=S,e?(S=N.alternate,S!==null?(S=S.index,S<w?(N.flags|=2,w):S):(N.flags|=2,w)):(N.flags|=1048576,w)}function d(N){return e&&N.alternate===null&&(N.flags|=2),N}function h(N,w,S,j){return w===null||w.tag!==6?(w=wd(S,N.mode,j),w.return=N,w):(w=o(w,S),w.return=N,w)}function u(N,w,S,j){var E=S.type;return E===Ti?y(N,w,S.props.children,j,S.key):w!==null&&(w.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ar&&Dm(E)===w.type)?(j=o(w,S.props),j.ref=Da(N,w,S),j.return=N,j):(j=il(S.type,S.key,S.props,null,N.mode,j),j.ref=Da(N,w,S),j.return=N,j)}function f(N,w,S,j){return w===null||w.tag!==4||w.stateNode.containerInfo!==S.containerInfo||w.stateNode.implementation!==S.implementation?(w=jd(S,N.mode,j),w.return=N,w):(w=o(w,S.children||[]),w.return=N,w)}function y(N,w,S,j,E){return w===null||w.tag!==7?(w=Kr(S,N.mode,j,E),w.return=N,w):(w=o(w,S),w.return=N,w)}function x(N,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return w=wd(""+w,N.mode,S),w.return=N,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Cs:return S=il(w.type,w.key,w.props,null,N.mode,S),S.ref=Da(N,null,w),S.return=N,S;case Mi:return w=jd(w,N.mode,S),w.return=N,w;case ar:var j=w._init;return x(N,j(w._payload),S)}if(Qa(w)||Ia(w))return w=Kr(w,N.mode,S,null),w.return=N,w;Bs(N,w)}return null}function v(N,w,S,j){var E=w!==null?w.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return E!==null?null:h(N,w,""+S,j);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Cs:return S.key===E?u(N,w,S,j):null;case Mi:return S.key===E?f(N,w,S,j):null;case ar:return E=S._init,v(N,w,E(S._payload),j)}if(Qa(S)||Ia(S))return E!==null?null:y(N,w,S,j,null);Bs(N,S)}return null}function _(N,w,S,j,E){if(typeof j=="string"&&j!==""||typeof j=="number")return N=N.get(S)||null,h(w,N,""+j,E);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Cs:return N=N.get(j.key===null?S:j.key)||null,u(w,N,j,E);case Mi:return N=N.get(j.key===null?S:j.key)||null,f(w,N,j,E);case ar:var M=j._init;return _(N,w,S,M(j._payload),E)}if(Qa(j)||Ia(j))return N=N.get(S)||null,y(w,N,j,E,null);Bs(w,j)}return null}function b(N,w,S,j){for(var E=null,M=null,P=w,O=w=0,I=null;P!==null&&O<S.length;O++){P.index>O?(I=P,P=null):I=P.sibling;var F=v(N,P,S[O],j);if(F===null){P===null&&(P=I);break}e&&P&&F.alternate===null&&t(N,P),w=l(F,w,O),M===null?E=F:M.sibling=F,M=F,P=I}if(O===S.length)return n(N,P),qe&&Ur(N,O),E;if(P===null){for(;O<S.length;O++)P=x(N,S[O],j),P!==null&&(w=l(P,w,O),M===null?E=P:M.sibling=P,M=P);return qe&&Ur(N,O),E}for(P=a(N,P);O<S.length;O++)I=_(P,N,O,S[O],j),I!==null&&(e&&I.alternate!==null&&P.delete(I.key===null?O:I.key),w=l(I,w,O),M===null?E=I:M.sibling=I,M=I);return e&&P.forEach(function(V){return t(N,V)}),qe&&Ur(N,O),E}function z(N,w,S,j){var E=Ia(S);if(typeof E!="function")throw Error(ie(150));if(S=E.call(S),S==null)throw Error(ie(151));for(var M=E=null,P=w,O=w=0,I=null,F=S.next();P!==null&&!F.done;O++,F=S.next()){P.index>O?(I=P,P=null):I=P.sibling;var V=v(N,P,F.value,j);if(V===null){P===null&&(P=I);break}e&&P&&V.alternate===null&&t(N,P),w=l(V,w,O),M===null?E=V:M.sibling=V,M=V,P=I}if(F.done)return n(N,P),qe&&Ur(N,O),E;if(P===null){for(;!F.done;O++,F=S.next())F=x(N,F.value,j),F!==null&&(w=l(F,w,O),M===null?E=F:M.sibling=F,M=F);return qe&&Ur(N,O),E}for(P=a(N,P);!F.done;O++,F=S.next())F=_(P,N,O,F.value,j),F!==null&&(e&&F.alternate!==null&&P.delete(F.key===null?O:F.key),w=l(F,w,O),M===null?E=F:M.sibling=F,M=F);return e&&P.forEach(function(D){return t(N,D)}),qe&&Ur(N,O),E}function C(N,w,S,j){if(typeof S=="object"&&S!==null&&S.type===Ti&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Cs:e:{for(var E=S.key,M=w;M!==null;){if(M.key===E){if(E=S.type,E===Ti){if(M.tag===7){n(N,M.sibling),w=o(M,S.props.children),w.return=N,N=w;break e}}else if(M.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ar&&Dm(E)===M.type){n(N,M.sibling),w=o(M,S.props),w.ref=Da(N,M,S),w.return=N,N=w;break e}n(N,M);break}else t(N,M);M=M.sibling}S.type===Ti?(w=Kr(S.props.children,N.mode,j,S.key),w.return=N,N=w):(j=il(S.type,S.key,S.props,null,N.mode,j),j.ref=Da(N,w,S),j.return=N,N=j)}return d(N);case Mi:e:{for(M=S.key;w!==null;){if(w.key===M)if(w.tag===4&&w.stateNode.containerInfo===S.containerInfo&&w.stateNode.implementation===S.implementation){n(N,w.sibling),w=o(w,S.children||[]),w.return=N,N=w;break e}else{n(N,w);break}else t(N,w);w=w.sibling}w=jd(S,N.mode,j),w.return=N,N=w}return d(N);case ar:return M=S._init,C(N,w,M(S._payload),j)}if(Qa(S))return b(N,w,S,j);if(Ia(S))return z(N,w,S,j);Bs(N,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,w!==null&&w.tag===6?(n(N,w.sibling),w=o(w,S),w.return=N,N=w):(n(N,w),w=wd(S,N.mode,j),w.return=N,N=w),d(N)):n(N,w)}return C}var na=C0(!0),z0=C0(!1),_l=Nr(null),wl=null,Wi=null,kh=null;function Sh(){kh=Wi=wl=null}function Nh(e){var t=_l.current;$e(_l),e._currentValue=t}function xu(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Ki(e,t){wl=e,kh=Wi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(At=!0),e.firstContext=null)}function sn(e){var t=e._currentValue;if(kh!==e)if(e={context:e,memoizedValue:t,next:null},Wi===null){if(wl===null)throw Error(ie(308));Wi=e,wl.dependencies={lanes:0,firstContext:e}}else Wi=Wi.next=e;return t}var $r=null;function Ch(e){$r===null?$r=[e]:$r.push(e)}function P0(e,t,n,a){var o=t.interleaved;return o===null?(n.next=n,Ch(t)):(n.next=o.next,o.next=n),t.interleaved=n,Qn(e,a)}function Qn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var or=!1;function zh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function L0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Zn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gr(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,Me&2){var o=a.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),a.pending=t,Qn(e,n)}return o=a.interleaved,o===null?(t.next=t,Ch(a)):(t.next=o.next,o.next=t),a.interleaved=t,Qn(e,n)}function Js(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,ph(e,n)}}function Wm(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var d={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=d:l=l.next=d,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:a.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:a.shared,effects:a.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function jl(e,t,n,a){var o=e.updateQueue;or=!1;var l=o.firstBaseUpdate,d=o.lastBaseUpdate,h=o.shared.pending;if(h!==null){o.shared.pending=null;var u=h,f=u.next;u.next=null,d===null?l=f:d.next=f,d=u;var y=e.alternate;y!==null&&(y=y.updateQueue,h=y.lastBaseUpdate,h!==d&&(h===null?y.firstBaseUpdate=f:h.next=f,y.lastBaseUpdate=u))}if(l!==null){var x=o.baseState;d=0,y=f=u=null,h=l;do{var v=h.lane,_=h.eventTime;if((a&v)===v){y!==null&&(y=y.next={eventTime:_,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,next:null});e:{var b=e,z=h;switch(v=t,_=n,z.tag){case 1:if(b=z.payload,typeof b=="function"){x=b.call(_,x,v);break e}x=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=z.payload,v=typeof b=="function"?b.call(_,x,v):b,v==null)break e;x=Qe({},x,v);break e;case 2:or=!0}}h.callback!==null&&h.lane!==0&&(e.flags|=64,v=o.effects,v===null?o.effects=[h]:v.push(h))}else _={eventTime:_,lane:v,tag:h.tag,payload:h.payload,callback:h.callback,next:null},y===null?(f=y=_,u=x):y=y.next=_,d|=v;if(h=h.next,h===null){if(h=o.shared.pending,h===null)break;v=h,h=v.next,v.next=null,o.lastBaseUpdate=v,o.shared.pending=null}}while(!0);if(y===null&&(u=x),o.baseState=u,o.firstBaseUpdate=f,o.lastBaseUpdate=y,t=o.shared.interleaved,t!==null){o=t;do d|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);ni|=d,e.lanes=d,e.memoizedState=x}}function Um(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],o=a.callback;if(o!==null){if(a.callback=null,a=n,typeof o!="function")throw Error(ie(191,o));o.call(a)}}}var Do={},Pn=Nr(Do),jo=Nr(Do),ko=Nr(Do);function qr(e){if(e===Do)throw Error(ie(174));return e}function Ph(e,t){switch(We(ko,t),We(jo,e),We(Pn,Do),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Yd(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Yd(t,e)}$e(Pn),We(Pn,t)}function ra(){$e(Pn),$e(jo),$e(ko)}function E0(e){qr(ko.current);var t=qr(Pn.current),n=Yd(t,e.type);t!==n&&(We(jo,e),We(Pn,n))}function Lh(e){jo.current===e&&($e(Pn),$e(jo))}var Ge=Nr(0);function kl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var gd=[];function Eh(){for(var e=0;e<gd.length;e++)gd[e]._workInProgressVersionPrimary=null;gd.length=0}var Xs=Xn.ReactCurrentDispatcher,xd=Xn.ReactCurrentBatchConfig,ti=0,Ke=null,st=null,ht=null,Sl=!1,ao=!1,So=0,db=0;function yt(){throw Error(ie(321))}function Mh(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!vn(e[n],t[n]))return!1;return!0}function Th(e,t,n,a,o,l){if(ti=l,Ke=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Xs.current=e===null||e.memoizedState===null?mb:fb,e=n(a,o),ao){l=0;do{if(ao=!1,So=0,25<=l)throw Error(ie(301));l+=1,ht=st=null,t.updateQueue=null,Xs.current=gb,e=n(a,o)}while(ao)}if(Xs.current=Nl,t=st!==null&&st.next!==null,ti=0,ht=st=Ke=null,Sl=!1,t)throw Error(ie(300));return e}function Ah(){var e=So!==0;return So=0,e}function Nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ht===null?Ke.memoizedState=ht=e:ht=ht.next=e,ht}function ln(){if(st===null){var e=Ke.alternate;e=e!==null?e.memoizedState:null}else e=st.next;var t=ht===null?Ke.memoizedState:ht.next;if(t!==null)ht=t,st=e;else{if(e===null)throw Error(ie(310));st=e,e={memoizedState:st.memoizedState,baseState:st.baseState,baseQueue:st.baseQueue,queue:st.queue,next:null},ht===null?Ke.memoizedState=ht=e:ht=ht.next=e}return ht}function No(e,t){return typeof t=="function"?t(e):t}function yd(e){var t=ln(),n=t.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=e;var a=st,o=a.baseQueue,l=n.pending;if(l!==null){if(o!==null){var d=o.next;o.next=l.next,l.next=d}a.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,a=a.baseState;var h=d=null,u=null,f=l;do{var y=f.lane;if((ti&y)===y)u!==null&&(u=u.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),a=f.hasEagerState?f.eagerState:e(a,f.action);else{var x={lane:y,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};u===null?(h=u=x,d=a):u=u.next=x,Ke.lanes|=y,ni|=y}f=f.next}while(f!==null&&f!==l);u===null?d=a:u.next=h,vn(a,t.memoizedState)||(At=!0),t.memoizedState=a,t.baseState=d,t.baseQueue=u,n.lastRenderedState=a}if(e=n.interleaved,e!==null){o=e;do l=o.lane,Ke.lanes|=l,ni|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function vd(e){var t=ln(),n=t.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=e;var a=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var d=o=o.next;do l=e(l,d.action),d=d.next;while(d!==o);vn(l,t.memoizedState)||(At=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,a]}function M0(){}function T0(e,t){var n=Ke,a=ln(),o=t(),l=!vn(a.memoizedState,o);if(l&&(a.memoizedState=o,At=!0),a=a.queue,Ih(R0.bind(null,n,a,e),[e]),a.getSnapshot!==t||l||ht!==null&&ht.memoizedState.tag&1){if(n.flags|=2048,Co(9,I0.bind(null,n,a,o,t),void 0,null),pt===null)throw Error(ie(349));ti&30||A0(n,t,o)}return o}function A0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ke.updateQueue,t===null?(t={lastEffect:null,stores:null},Ke.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function I0(e,t,n,a){t.value=n,t.getSnapshot=a,O0(t)&&B0(e)}function R0(e,t,n){return n(function(){O0(t)&&B0(e)})}function O0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!vn(e,n)}catch{return!0}}function B0(e){var t=Qn(e,1);t!==null&&xn(t,e,1,-1)}function Hm(e){var t=Nn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:e},t.queue=e,e=e.dispatch=pb.bind(null,Ke,e),[t.memoizedState,e]}function Co(e,t,n,a){return e={tag:e,create:t,destroy:n,deps:a,next:null},t=Ke.updateQueue,t===null?(t={lastEffect:null,stores:null},Ke.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e)),e}function F0(){return ln().memoizedState}function el(e,t,n,a){var o=Nn();Ke.flags|=e,o.memoizedState=Co(1|t,n,void 0,a===void 0?null:a)}function Gl(e,t,n,a){var o=ln();a=a===void 0?null:a;var l=void 0;if(st!==null){var d=st.memoizedState;if(l=d.destroy,a!==null&&Mh(a,d.deps)){o.memoizedState=Co(t,n,l,a);return}}Ke.flags|=e,o.memoizedState=Co(1|t,n,l,a)}function Zm(e,t){return el(8390656,8,e,t)}function Ih(e,t){return Gl(2048,8,e,t)}function D0(e,t){return Gl(4,2,e,t)}function W0(e,t){return Gl(4,4,e,t)}function U0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function H0(e,t,n){return n=n!=null?n.concat([e]):null,Gl(4,4,U0.bind(null,t,e),n)}function Rh(){}function Z0(e,t){var n=ln();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&Mh(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function $0(e,t){var n=ln();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&Mh(t,a[1])?a[0]:(e=e(),n.memoizedState=[e,t],e)}function q0(e,t,n){return ti&21?(vn(n,t)||(n=Yg(),Ke.lanes|=n,ni|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,At=!0),e.memoizedState=n)}function ub(e,t){var n=Re;Re=n!==0&&4>n?n:4,e(!0);var a=xd.transition;xd.transition={};try{e(!1),t()}finally{Re=n,xd.transition=a}}function V0(){return ln().memoizedState}function hb(e,t,n){var a=yr(e);if(n={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null},G0(e))K0(t,n);else if(n=P0(e,t,n,a),n!==null){var o=Pt();xn(n,e,a,o),Q0(n,t,a)}}function pb(e,t,n){var a=yr(e),o={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null};if(G0(e))K0(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var d=t.lastRenderedState,h=l(d,n);if(o.hasEagerState=!0,o.eagerState=h,vn(h,d)){var u=t.interleaved;u===null?(o.next=o,Ch(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=P0(e,t,o,a),n!==null&&(o=Pt(),xn(n,e,a,o),Q0(n,t,a))}}function G0(e){var t=e.alternate;return e===Ke||t!==null&&t===Ke}function K0(e,t){ao=Sl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Q0(e,t,n){if(n&4194240){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,ph(e,n)}}var Nl={readContext:sn,useCallback:yt,useContext:yt,useEffect:yt,useImperativeHandle:yt,useInsertionEffect:yt,useLayoutEffect:yt,useMemo:yt,useReducer:yt,useRef:yt,useState:yt,useDebugValue:yt,useDeferredValue:yt,useTransition:yt,useMutableSource:yt,useSyncExternalStore:yt,useId:yt,unstable_isNewReconciler:!1},mb={readContext:sn,useCallback:function(e,t){return Nn().memoizedState=[e,t===void 0?null:t],e},useContext:sn,useEffect:Zm,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,el(4194308,4,U0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return el(4194308,4,e,t)},useInsertionEffect:function(e,t){return el(4,2,e,t)},useMemo:function(e,t){var n=Nn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var a=Nn();return t=n!==void 0?n(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=hb.bind(null,Ke,e),[a.memoizedState,e]},useRef:function(e){var t=Nn();return e={current:e},t.memoizedState=e},useState:Hm,useDebugValue:Rh,useDeferredValue:function(e){return Nn().memoizedState=e},useTransition:function(){var e=Hm(!1),t=e[0];return e=ub.bind(null,e[1]),Nn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var a=Ke,o=Nn();if(qe){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=t(),pt===null)throw Error(ie(349));ti&30||A0(a,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,Zm(R0.bind(null,a,l,e),[e]),a.flags|=2048,Co(9,I0.bind(null,a,l,n,t),void 0,null),n},useId:function(){var e=Nn(),t=pt.identifierPrefix;if(qe){var n=Hn,a=Un;n=(a&~(1<<32-gn(a)-1)).toString(32)+n,t=":"+t+"R"+n,n=So++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=db++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},fb={readContext:sn,useCallback:Z0,useContext:sn,useEffect:Ih,useImperativeHandle:H0,useInsertionEffect:D0,useLayoutEffect:W0,useMemo:$0,useReducer:yd,useRef:F0,useState:function(){return yd(No)},useDebugValue:Rh,useDeferredValue:function(e){var t=ln();return q0(t,st.memoizedState,e)},useTransition:function(){var e=yd(No)[0],t=ln().memoizedState;return[e,t]},useMutableSource:M0,useSyncExternalStore:T0,useId:V0,unstable_isNewReconciler:!1},gb={readContext:sn,useCallback:Z0,useContext:sn,useEffect:Ih,useImperativeHandle:H0,useInsertionEffect:D0,useLayoutEffect:W0,useMemo:$0,useReducer:vd,useRef:F0,useState:function(){return vd(No)},useDebugValue:Rh,useDeferredValue:function(e){var t=ln();return st===null?t.memoizedState=e:q0(t,st.memoizedState,e)},useTransition:function(){var e=vd(No)[0],t=ln().memoizedState;return[e,t]},useMutableSource:M0,useSyncExternalStore:T0,useId:V0,unstable_isNewReconciler:!1};function pn(e,t){if(e&&e.defaultProps){t=Qe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function yu(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:Qe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Kl={isMounted:function(e){return(e=e._reactInternals)?di(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Pt(),o=yr(e),l=Zn(a,o);l.payload=t,n!=null&&(l.callback=n),t=gr(e,l,o),t!==null&&(xn(t,e,o,a),Js(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Pt(),o=yr(e),l=Zn(a,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=gr(e,l,o),t!==null&&(xn(t,e,o,a),Js(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Pt(),a=yr(e),o=Zn(n,a);o.tag=2,t!=null&&(o.callback=t),t=gr(e,o,a),t!==null&&(xn(t,e,a,n),Js(t,e,a))}};function $m(e,t,n,a,o,l,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,l,d):t.prototype&&t.prototype.isPureReactComponent?!vo(n,a)||!vo(o,l):!0}function Y0(e,t,n){var a=!1,o=jr,l=t.contextType;return typeof l=="object"&&l!==null?l=sn(l):(o=Rt(t)?Xr:kt.current,a=t.contextTypes,l=(a=a!=null)?ea(e,o):jr),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Kl,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function qm(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Kl.enqueueReplaceState(t,t.state,null)}function vu(e,t,n,a){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},zh(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=sn(l):(l=Rt(t)?Xr:kt.current,o.context=ea(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(yu(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Kl.enqueueReplaceState(o,o.state,null),jl(e,n,o,a),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function ia(e,t){try{var n="",a=t;do n+=Zv(a),a=a.return;while(a);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function bd(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function bu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var xb=typeof WeakMap=="function"?WeakMap:Map;function J0(e,t,n){n=Zn(-1,n),n.tag=3,n.payload={element:null};var a=t.value;return n.callback=function(){zl||(zl=!0,Lu=a),bu(e,t)},n}function X0(e,t,n){n=Zn(-1,n),n.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var o=t.value;n.payload=function(){return a(o)},n.callback=function(){bu(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){bu(e,t),typeof a!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var d=t.stack;this.componentDidCatch(t.value,{componentStack:d!==null?d:""})}),n}function Vm(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new xb;var o=new Set;a.set(t,o)}else o=a.get(t),o===void 0&&(o=new Set,a.set(t,o));o.has(n)||(o.add(n),e=Eb.bind(null,e,t,n),t.then(e,e))}function Gm(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Km(e,t,n,a,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Zn(-1,1),t.tag=2,gr(n,t,1))),n.lanes|=1),e)}var yb=Xn.ReactCurrentOwner,At=!1;function Ct(e,t,n,a){t.child=e===null?z0(t,null,n,a):na(t,e.child,n,a)}function Qm(e,t,n,a,o){n=n.render;var l=t.ref;return Ki(t,o),a=Th(e,t,n,a,l,o),n=Ah(),e!==null&&!At?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Yn(e,t,o)):(qe&&n&&_h(t),t.flags|=1,Ct(e,t,a,o),t.child)}function Ym(e,t,n,a,o){if(e===null){var l=n.type;return typeof l=="function"&&!Zh(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,ex(e,t,l,a,o)):(e=il(n.type,null,a,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var d=l.memoizedProps;if(n=n.compare,n=n!==null?n:vo,n(d,a)&&e.ref===t.ref)return Yn(e,t,o)}return t.flags|=1,e=vr(l,a),e.ref=t.ref,e.return=t,t.child=e}function ex(e,t,n,a,o){if(e!==null){var l=e.memoizedProps;if(vo(l,a)&&e.ref===t.ref)if(At=!1,t.pendingProps=a=l,(e.lanes&o)!==0)e.flags&131072&&(At=!0);else return t.lanes=e.lanes,Yn(e,t,o)}return _u(e,t,n,a,o)}function tx(e,t,n){var a=t.pendingProps,o=a.children,l=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(Hi,Ut),Ut|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,We(Hi,Ut),Ut|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=l!==null?l.baseLanes:n,We(Hi,Ut),Ut|=a}else l!==null?(a=l.baseLanes|n,t.memoizedState=null):a=n,We(Hi,Ut),Ut|=a;return Ct(e,t,o,n),t.child}function nx(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function _u(e,t,n,a,o){var l=Rt(n)?Xr:kt.current;return l=ea(t,l),Ki(t,o),n=Th(e,t,n,a,l,o),a=Ah(),e!==null&&!At?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Yn(e,t,o)):(qe&&a&&_h(t),t.flags|=1,Ct(e,t,n,o),t.child)}function Jm(e,t,n,a,o){if(Rt(n)){var l=!0;yl(t)}else l=!1;if(Ki(t,o),t.stateNode===null)tl(e,t),Y0(t,n,a),vu(t,n,a,o),a=!0;else if(e===null){var d=t.stateNode,h=t.memoizedProps;d.props=h;var u=d.context,f=n.contextType;typeof f=="object"&&f!==null?f=sn(f):(f=Rt(n)?Xr:kt.current,f=ea(t,f));var y=n.getDerivedStateFromProps,x=typeof y=="function"||typeof d.getSnapshotBeforeUpdate=="function";x||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(h!==a||u!==f)&&qm(t,d,a,f),or=!1;var v=t.memoizedState;d.state=v,jl(t,a,d,o),u=t.memoizedState,h!==a||v!==u||It.current||or?(typeof y=="function"&&(yu(t,n,y,a),u=t.memoizedState),(h=or||$m(t,n,h,a,v,u,f))?(x||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4194308)):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=u),d.props=a,d.state=u,d.context=f,a=h):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{d=t.stateNode,L0(e,t),h=t.memoizedProps,f=t.type===t.elementType?h:pn(t.type,h),d.props=f,x=t.pendingProps,v=d.context,u=n.contextType,typeof u=="object"&&u!==null?u=sn(u):(u=Rt(n)?Xr:kt.current,u=ea(t,u));var _=n.getDerivedStateFromProps;(y=typeof _=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(h!==x||v!==u)&&qm(t,d,a,u),or=!1,v=t.memoizedState,d.state=v,jl(t,a,d,o);var b=t.memoizedState;h!==x||v!==b||It.current||or?(typeof _=="function"&&(yu(t,n,_,a),b=t.memoizedState),(f=or||$m(t,n,f,a,v,b,u)||!1)?(y||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(a,b,u),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(a,b,u)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof d.componentDidUpdate!="function"||h===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=b),d.props=a,d.state=b,d.context=u,a=f):(typeof d.componentDidUpdate!="function"||h===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),a=!1)}return wu(e,t,n,a,l,o)}function wu(e,t,n,a,o,l){nx(e,t);var d=(t.flags&128)!==0;if(!a&&!d)return o&&Om(t,n,!1),Yn(e,t,l);a=t.stateNode,yb.current=t;var h=d&&typeof n.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&d?(t.child=na(t,e.child,null,l),t.child=na(t,null,h,l)):Ct(e,t,h,l),t.memoizedState=a.state,o&&Om(t,n,!0),t.child}function rx(e){var t=e.stateNode;t.pendingContext?Rm(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Rm(e,t.context,!1),Ph(e,t.containerInfo)}function Xm(e,t,n,a,o){return ta(),jh(o),t.flags|=256,Ct(e,t,n,a),t.child}var ju={dehydrated:null,treeContext:null,retryLane:0};function ku(e){return{baseLanes:e,cachePool:null,transitions:null}}function ix(e,t,n){var a=t.pendingProps,o=Ge.current,l=!1,d=(t.flags&128)!==0,h;if((h=d)||(h=e!==null&&e.memoizedState===null?!1:(o&2)!==0),h?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),We(Ge,o&1),e===null)return gu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(d=a.children,e=a.fallback,l?(a=t.mode,l=t.child,d={mode:"hidden",children:d},!(a&1)&&l!==null?(l.childLanes=0,l.pendingProps=d):l=Jl(d,a,0,null),e=Kr(e,a,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=ku(n),t.memoizedState=ju,e):Oh(t,d));if(o=e.memoizedState,o!==null&&(h=o.dehydrated,h!==null))return vb(e,t,d,a,h,o,n);if(l){l=a.fallback,d=t.mode,o=e.child,h=o.sibling;var u={mode:"hidden",children:a.children};return!(d&1)&&t.child!==o?(a=t.child,a.childLanes=0,a.pendingProps=u,t.deletions=null):(a=vr(o,u),a.subtreeFlags=o.subtreeFlags&14680064),h!==null?l=vr(h,l):(l=Kr(l,d,n,null),l.flags|=2),l.return=t,a.return=t,a.sibling=l,t.child=a,a=l,l=t.child,d=e.child.memoizedState,d=d===null?ku(n):{baseLanes:d.baseLanes|n,cachePool:null,transitions:d.transitions},l.memoizedState=d,l.childLanes=e.childLanes&~n,t.memoizedState=ju,a}return l=e.child,e=l.sibling,a=vr(l,{mode:"visible",children:a.children}),!(t.mode&1)&&(a.lanes=n),a.return=t,a.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function Oh(e,t){return t=Jl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Fs(e,t,n,a){return a!==null&&jh(a),na(t,e.child,null,n),e=Oh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function vb(e,t,n,a,o,l,d){if(n)return t.flags&256?(t.flags&=-257,a=bd(Error(ie(422))),Fs(e,t,d,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=a.fallback,o=t.mode,a=Jl({mode:"visible",children:a.children},o,0,null),l=Kr(l,o,d,null),l.flags|=2,a.return=t,l.return=t,a.sibling=l,t.child=a,t.mode&1&&na(t,e.child,null,d),t.child.memoizedState=ku(d),t.memoizedState=ju,l);if(!(t.mode&1))return Fs(e,t,d,null);if(o.data==="$!"){if(a=o.nextSibling&&o.nextSibling.dataset,a)var h=a.dgst;return a=h,l=Error(ie(419)),a=bd(l,a,void 0),Fs(e,t,d,a)}if(h=(d&e.childLanes)!==0,At||h){if(a=pt,a!==null){switch(d&-d){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(a.suspendedLanes|d)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,Qn(e,o),xn(a,e,o,-1))}return Hh(),a=bd(Error(ie(421))),Fs(e,t,d,a)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Mb.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,Ht=fr(o.nextSibling),Zt=t,qe=!0,fn=null,e!==null&&(nn[rn++]=Un,nn[rn++]=Hn,nn[rn++]=ei,Un=e.id,Hn=e.overflow,ei=t),t=Oh(t,a.children),t.flags|=4096,t)}function ef(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),xu(e.return,t,n)}function _d(e,t,n,a,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=a,l.tail=n,l.tailMode=o)}function ax(e,t,n){var a=t.pendingProps,o=a.revealOrder,l=a.tail;if(Ct(e,t,a.children,n),a=Ge.current,a&2)a=a&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ef(e,n,t);else if(e.tag===19)ef(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(We(Ge,a),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&kl(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),_d(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&kl(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}_d(t,!0,n,null,l);break;case"together":_d(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function tl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Yn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ni|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(ie(153));if(t.child!==null){for(e=t.child,n=vr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function bb(e,t,n){switch(t.tag){case 3:rx(t),ta();break;case 5:E0(t);break;case 1:Rt(t.type)&&yl(t);break;case 4:Ph(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,o=t.memoizedProps.value;We(_l,a._currentValue),a._currentValue=o;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(We(Ge,Ge.current&1),t.flags|=128,null):n&t.child.childLanes?ix(e,t,n):(We(Ge,Ge.current&1),e=Yn(e,t,n),e!==null?e.sibling:null);We(Ge,Ge.current&1);break;case 19:if(a=(n&t.childLanes)!==0,e.flags&128){if(a)return ax(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),We(Ge,Ge.current),a)break;return null;case 22:case 23:return t.lanes=0,tx(e,t,n)}return Yn(e,t,n)}var ox,Su,sx,lx;ox=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Su=function(){};sx=function(e,t,n,a){var o=e.memoizedProps;if(o!==a){e=t.stateNode,qr(Pn.current);var l=null;switch(n){case"input":o=Vd(e,o),a=Vd(e,a),l=[];break;case"select":o=Qe({},o,{value:void 0}),a=Qe({},a,{value:void 0}),l=[];break;case"textarea":o=Qd(e,o),a=Qd(e,a),l=[];break;default:typeof o.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=gl)}Jd(n,a);var d;n=null;for(f in o)if(!a.hasOwnProperty(f)&&o.hasOwnProperty(f)&&o[f]!=null)if(f==="style"){var h=o[f];for(d in h)h.hasOwnProperty(d)&&(n||(n={}),n[d]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(ho.hasOwnProperty(f)?l||(l=[]):(l=l||[]).push(f,null));for(f in a){var u=a[f];if(h=o!=null?o[f]:void 0,a.hasOwnProperty(f)&&u!==h&&(u!=null||h!=null))if(f==="style")if(h){for(d in h)!h.hasOwnProperty(d)||u&&u.hasOwnProperty(d)||(n||(n={}),n[d]="");for(d in u)u.hasOwnProperty(d)&&h[d]!==u[d]&&(n||(n={}),n[d]=u[d])}else n||(l||(l=[]),l.push(f,n)),n=u;else f==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,h=h?h.__html:void 0,u!=null&&h!==u&&(l=l||[]).push(f,u)):f==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(f,""+u):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(ho.hasOwnProperty(f)?(u!=null&&f==="onScroll"&&Ze("scroll",e),l||h===u||(l=[])):(l=l||[]).push(f,u))}n&&(l=l||[]).push("style",n);var f=l;(t.updateQueue=f)&&(t.flags|=4)}};lx=function(e,t,n,a){n!==a&&(t.flags|=4)};function Wa(e,t){if(!qe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function vt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,a|=o.subtreeFlags&14680064,a|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,a|=o.subtreeFlags,a|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function _b(e,t,n){var a=t.pendingProps;switch(wh(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vt(t),null;case 1:return Rt(t.type)&&xl(),vt(t),null;case 3:return a=t.stateNode,ra(),$e(It),$e(kt),Eh(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Os(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,fn!==null&&(Tu(fn),fn=null))),Su(e,t),vt(t),null;case 5:Lh(t);var o=qr(ko.current);if(n=t.type,e!==null&&t.stateNode!=null)sx(e,t,n,a,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(ie(166));return vt(t),null}if(e=qr(Pn.current),Os(t)){a=t.stateNode,n=t.type;var l=t.memoizedProps;switch(a[Cn]=t,a[wo]=l,e=(t.mode&1)!==0,n){case"dialog":Ze("cancel",a),Ze("close",a);break;case"iframe":case"object":case"embed":Ze("load",a);break;case"video":case"audio":for(o=0;o<Ja.length;o++)Ze(Ja[o],a);break;case"source":Ze("error",a);break;case"img":case"image":case"link":Ze("error",a),Ze("load",a);break;case"details":Ze("toggle",a);break;case"input":cm(a,l),Ze("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!l.multiple},Ze("invalid",a);break;case"textarea":um(a,l),Ze("invalid",a)}Jd(n,l),o=null;for(var d in l)if(l.hasOwnProperty(d)){var h=l[d];d==="children"?typeof h=="string"?a.textContent!==h&&(l.suppressHydrationWarning!==!0&&Rs(a.textContent,h,e),o=["children",h]):typeof h=="number"&&a.textContent!==""+h&&(l.suppressHydrationWarning!==!0&&Rs(a.textContent,h,e),o=["children",""+h]):ho.hasOwnProperty(d)&&h!=null&&d==="onScroll"&&Ze("scroll",a)}switch(n){case"input":zs(a),dm(a,l,!0);break;case"textarea":zs(a),hm(a);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(a.onclick=gl)}a=o,t.updateQueue=a,a!==null&&(t.flags|=4)}else{d=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Rg(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=d.createElement(n,{is:a.is}):(e=d.createElement(n),n==="select"&&(d=e,a.multiple?d.multiple=!0:a.size&&(d.size=a.size))):e=d.createElementNS(e,n),e[Cn]=t,e[wo]=a,ox(e,t,!1,!1),t.stateNode=e;e:{switch(d=Xd(n,a),n){case"dialog":Ze("cancel",e),Ze("close",e),o=a;break;case"iframe":case"object":case"embed":Ze("load",e),o=a;break;case"video":case"audio":for(o=0;o<Ja.length;o++)Ze(Ja[o],e);o=a;break;case"source":Ze("error",e),o=a;break;case"img":case"image":case"link":Ze("error",e),Ze("load",e),o=a;break;case"details":Ze("toggle",e),o=a;break;case"input":cm(e,a),o=Vd(e,a),Ze("invalid",e);break;case"option":o=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},o=Qe({},a,{value:void 0}),Ze("invalid",e);break;case"textarea":um(e,a),o=Qd(e,a),Ze("invalid",e);break;default:o=a}Jd(n,o),h=o;for(l in h)if(h.hasOwnProperty(l)){var u=h[l];l==="style"?Fg(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Og(e,u)):l==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&po(e,u):typeof u=="number"&&po(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(ho.hasOwnProperty(l)?u!=null&&l==="onScroll"&&Ze("scroll",e):u!=null&&sh(e,l,u,d))}switch(n){case"input":zs(e),dm(e,a,!1);break;case"textarea":zs(e),hm(e);break;case"option":a.value!=null&&e.setAttribute("value",""+wr(a.value));break;case"select":e.multiple=!!a.multiple,l=a.value,l!=null?$i(e,!!a.multiple,l,!1):a.defaultValue!=null&&$i(e,!!a.multiple,a.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=gl)}switch(n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return vt(t),null;case 6:if(e&&t.stateNode!=null)lx(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(ie(166));if(n=qr(ko.current),qr(Pn.current),Os(t)){if(a=t.stateNode,n=t.memoizedProps,a[Cn]=t,(l=a.nodeValue!==n)&&(e=Zt,e!==null))switch(e.tag){case 3:Rs(a.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Rs(a.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else a=(n.nodeType===9?n:n.ownerDocument).createTextNode(a),a[Cn]=t,t.stateNode=a}return vt(t),null;case 13:if($e(Ge),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(qe&&Ht!==null&&t.mode&1&&!(t.flags&128))N0(),ta(),t.flags|=98560,l=!1;else if(l=Os(t),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(ie(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(ie(317));l[Cn]=t}else ta(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;vt(t),l=!1}else fn!==null&&(Tu(fn),fn=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,t.mode&1&&(e===null||Ge.current&1?lt===0&&(lt=3):Hh())),t.updateQueue!==null&&(t.flags|=4),vt(t),null);case 4:return ra(),Su(e,t),e===null&&bo(t.stateNode.containerInfo),vt(t),null;case 10:return Nh(t.type._context),vt(t),null;case 17:return Rt(t.type)&&xl(),vt(t),null;case 19:if($e(Ge),l=t.memoizedState,l===null)return vt(t),null;if(a=(t.flags&128)!==0,d=l.rendering,d===null)if(a)Wa(l,!1);else{if(lt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(d=kl(e),d!==null){for(t.flags|=128,Wa(l,!1),a=d.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=n,n=t.child;n!==null;)l=n,e=a,l.flags&=14680066,d=l.alternate,d===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=d.childLanes,l.lanes=d.lanes,l.child=d.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=d.memoizedProps,l.memoizedState=d.memoizedState,l.updateQueue=d.updateQueue,l.type=d.type,e=d.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return We(Ge,Ge.current&1|2),t.child}e=e.sibling}l.tail!==null&&et()>aa&&(t.flags|=128,a=!0,Wa(l,!1),t.lanes=4194304)}else{if(!a)if(e=kl(d),e!==null){if(t.flags|=128,a=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Wa(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!qe)return vt(t),null}else 2*et()-l.renderingStartTime>aa&&n!==1073741824&&(t.flags|=128,a=!0,Wa(l,!1),t.lanes=4194304);l.isBackwards?(d.sibling=t.child,t.child=d):(n=l.last,n!==null?n.sibling=d:t.child=d,l.last=d)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=et(),t.sibling=null,n=Ge.current,We(Ge,a?n&1|2:n&1),t):(vt(t),null);case 22:case 23:return Uh(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&t.mode&1?Ut&1073741824&&(vt(t),t.subtreeFlags&6&&(t.flags|=8192)):vt(t),null;case 24:return null;case 25:return null}throw Error(ie(156,t.tag))}function wb(e,t){switch(wh(t),t.tag){case 1:return Rt(t.type)&&xl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ra(),$e(It),$e(kt),Eh(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Lh(t),null;case 13:if($e(Ge),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(ie(340));ta()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $e(Ge),null;case 4:return ra(),null;case 10:return Nh(t.type._context),null;case 22:case 23:return Uh(),null;case 24:return null;default:return null}}var Ds=!1,bt=!1,jb=typeof WeakSet=="function"?WeakSet:Set,he=null;function Ui(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(a){Ye(e,t,a)}else n.current=null}function Nu(e,t,n){try{n()}catch(a){Ye(e,t,a)}}var tf=!1;function kb(e,t){if(cu=pl,e=p0(),bh(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var o=a.anchorOffset,l=a.focusNode;a=a.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var d=0,h=-1,u=-1,f=0,y=0,x=e,v=null;t:for(;;){for(var _;x!==n||o!==0&&x.nodeType!==3||(h=d+o),x!==l||a!==0&&x.nodeType!==3||(u=d+a),x.nodeType===3&&(d+=x.nodeValue.length),(_=x.firstChild)!==null;)v=x,x=_;for(;;){if(x===e)break t;if(v===n&&++f===o&&(h=d),v===l&&++y===a&&(u=d),(_=x.nextSibling)!==null)break;x=v,v=x.parentNode}x=_}n=h===-1||u===-1?null:{start:h,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(du={focusedElem:e,selectionRange:n},pl=!1,he=t;he!==null;)if(t=he,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,he=e;else for(;he!==null;){t=he;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var z=b.memoizedProps,C=b.memoizedState,N=t.stateNode,w=N.getSnapshotBeforeUpdate(t.elementType===t.type?z:pn(t.type,z),C);N.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var S=t.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(j){Ye(t,t.return,j)}if(e=t.sibling,e!==null){e.return=t.return,he=e;break}he=t.return}return b=tf,tf=!1,b}function oo(e,t,n){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var o=a=a.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&Nu(t,n,l)}o=o.next}while(o!==a)}}function Ql(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var a=n.create;n.destroy=a()}n=n.next}while(n!==t)}}function Cu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function cx(e){var t=e.alternate;t!==null&&(e.alternate=null,cx(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Cn],delete t[wo],delete t[pu],delete t[ob],delete t[sb])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function dx(e){return e.tag===5||e.tag===3||e.tag===4}function nf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||dx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zu(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=gl));else if(a!==4&&(e=e.child,e!==null))for(zu(e,t,n),e=e.sibling;e!==null;)zu(e,t,n),e=e.sibling}function Pu(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(Pu(e,t,n),e=e.sibling;e!==null;)Pu(e,t,n),e=e.sibling}var ft=null,mn=!1;function ir(e,t,n){for(n=n.child;n!==null;)ux(e,t,n),n=n.sibling}function ux(e,t,n){if(zn&&typeof zn.onCommitFiberUnmount=="function")try{zn.onCommitFiberUnmount(Ul,n)}catch{}switch(n.tag){case 5:bt||Ui(n,t);case 6:var a=ft,o=mn;ft=null,ir(e,t,n),ft=a,mn=o,ft!==null&&(mn?(e=ft,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ft.removeChild(n.stateNode));break;case 18:ft!==null&&(mn?(e=ft,n=n.stateNode,e.nodeType===8?md(e.parentNode,n):e.nodeType===1&&md(e,n),xo(e)):md(ft,n.stateNode));break;case 4:a=ft,o=mn,ft=n.stateNode.containerInfo,mn=!0,ir(e,t,n),ft=a,mn=o;break;case 0:case 11:case 14:case 15:if(!bt&&(a=n.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){o=a=a.next;do{var l=o,d=l.destroy;l=l.tag,d!==void 0&&(l&2||l&4)&&Nu(n,t,d),o=o.next}while(o!==a)}ir(e,t,n);break;case 1:if(!bt&&(Ui(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=n.memoizedProps,a.state=n.memoizedState,a.componentWillUnmount()}catch(h){Ye(n,t,h)}ir(e,t,n);break;case 21:ir(e,t,n);break;case 22:n.mode&1?(bt=(a=bt)||n.memoizedState!==null,ir(e,t,n),bt=a):ir(e,t,n);break;default:ir(e,t,n)}}function rf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new jb),t.forEach(function(a){var o=Tb.bind(null,e,a);n.has(a)||(n.add(a),a.then(o,o))})}}function un(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];try{var l=e,d=t,h=d;e:for(;h!==null;){switch(h.tag){case 5:ft=h.stateNode,mn=!1;break e;case 3:ft=h.stateNode.containerInfo,mn=!0;break e;case 4:ft=h.stateNode.containerInfo,mn=!0;break e}h=h.return}if(ft===null)throw Error(ie(160));ux(l,d,o),ft=null,mn=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(f){Ye(o,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)hx(t,e),t=t.sibling}function hx(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(un(t,e),Sn(e),a&4){try{oo(3,e,e.return),Ql(3,e)}catch(z){Ye(e,e.return,z)}try{oo(5,e,e.return)}catch(z){Ye(e,e.return,z)}}break;case 1:un(t,e),Sn(e),a&512&&n!==null&&Ui(n,n.return);break;case 5:if(un(t,e),Sn(e),a&512&&n!==null&&Ui(n,n.return),e.flags&32){var o=e.stateNode;try{po(o,"")}catch(z){Ye(e,e.return,z)}}if(a&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,d=n!==null?n.memoizedProps:l,h=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{h==="input"&&l.type==="radio"&&l.name!=null&&Ag(o,l),Xd(h,d);var f=Xd(h,l);for(d=0;d<u.length;d+=2){var y=u[d],x=u[d+1];y==="style"?Fg(o,x):y==="dangerouslySetInnerHTML"?Og(o,x):y==="children"?po(o,x):sh(o,y,x,f)}switch(h){case"input":Gd(o,l);break;case"textarea":Ig(o,l);break;case"select":var v=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var _=l.value;_!=null?$i(o,!!l.multiple,_,!1):v!==!!l.multiple&&(l.defaultValue!=null?$i(o,!!l.multiple,l.defaultValue,!0):$i(o,!!l.multiple,l.multiple?[]:"",!1))}o[wo]=l}catch(z){Ye(e,e.return,z)}}break;case 6:if(un(t,e),Sn(e),a&4){if(e.stateNode===null)throw Error(ie(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(z){Ye(e,e.return,z)}}break;case 3:if(un(t,e),Sn(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{xo(t.containerInfo)}catch(z){Ye(e,e.return,z)}break;case 4:un(t,e),Sn(e);break;case 13:un(t,e),Sn(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(Dh=et())),a&4&&rf(e);break;case 22:if(y=n!==null&&n.memoizedState!==null,e.mode&1?(bt=(f=bt)||y,un(t,e),bt=f):un(t,e),Sn(e),a&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!y&&e.mode&1)for(he=e,y=e.child;y!==null;){for(x=he=y;he!==null;){switch(v=he,_=v.child,v.tag){case 0:case 11:case 14:case 15:oo(4,v,v.return);break;case 1:Ui(v,v.return);var b=v.stateNode;if(typeof b.componentWillUnmount=="function"){a=v,n=v.return;try{t=a,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(z){Ye(a,n,z)}}break;case 5:Ui(v,v.return);break;case 22:if(v.memoizedState!==null){of(x);continue}}_!==null?(_.return=v,he=_):of(x)}y=y.sibling}e:for(y=null,x=e;;){if(x.tag===5){if(y===null){y=x;try{o=x.stateNode,f?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(h=x.stateNode,u=x.memoizedProps.style,d=u!=null&&u.hasOwnProperty("display")?u.display:null,h.style.display=Bg("display",d))}catch(z){Ye(e,e.return,z)}}}else if(x.tag===6){if(y===null)try{x.stateNode.nodeValue=f?"":x.memoizedProps}catch(z){Ye(e,e.return,z)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===e)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===e)break e;for(;x.sibling===null;){if(x.return===null||x.return===e)break e;y===x&&(y=null),x=x.return}y===x&&(y=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:un(t,e),Sn(e),a&4&&rf(e);break;case 21:break;default:un(t,e),Sn(e)}}function Sn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(dx(n)){var a=n;break e}n=n.return}throw Error(ie(160))}switch(a.tag){case 5:var o=a.stateNode;a.flags&32&&(po(o,""),a.flags&=-33);var l=nf(e);Pu(e,l,o);break;case 3:case 4:var d=a.stateNode.containerInfo,h=nf(e);zu(e,h,d);break;default:throw Error(ie(161))}}catch(u){Ye(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sb(e,t,n){he=e,px(e)}function px(e,t,n){for(var a=(e.mode&1)!==0;he!==null;){var o=he,l=o.child;if(o.tag===22&&a){var d=o.memoizedState!==null||Ds;if(!d){var h=o.alternate,u=h!==null&&h.memoizedState!==null||bt;h=Ds;var f=bt;if(Ds=d,(bt=u)&&!f)for(he=o;he!==null;)d=he,u=d.child,d.tag===22&&d.memoizedState!==null?sf(o):u!==null?(u.return=d,he=u):sf(o);for(;l!==null;)he=l,px(l),l=l.sibling;he=o,Ds=h,bt=f}af(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,he=l):af(e)}}function af(e){for(;he!==null;){var t=he;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:bt||Ql(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!bt)if(n===null)a.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:pn(t.type,n.memoizedProps);a.componentDidUpdate(o,n.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Um(t,l,a);break;case 3:var d=t.updateQueue;if(d!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Um(t,d,n)}break;case 5:var h=t.stateNode;if(n===null&&t.flags&4){n=h;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var y=f.memoizedState;if(y!==null){var x=y.dehydrated;x!==null&&xo(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}bt||t.flags&512&&Cu(t)}catch(v){Ye(t,t.return,v)}}if(t===e){he=null;break}if(n=t.sibling,n!==null){n.return=t.return,he=n;break}he=t.return}}function of(e){for(;he!==null;){var t=he;if(t===e){he=null;break}var n=t.sibling;if(n!==null){n.return=t.return,he=n;break}he=t.return}}function sf(e){for(;he!==null;){var t=he;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ql(4,t)}catch(u){Ye(t,n,u)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var o=t.return;try{a.componentDidMount()}catch(u){Ye(t,o,u)}}var l=t.return;try{Cu(t)}catch(u){Ye(t,l,u)}break;case 5:var d=t.return;try{Cu(t)}catch(u){Ye(t,d,u)}}}catch(u){Ye(t,t.return,u)}if(t===e){he=null;break}var h=t.sibling;if(h!==null){h.return=t.return,he=h;break}he=t.return}}var Nb=Math.ceil,Cl=Xn.ReactCurrentDispatcher,Bh=Xn.ReactCurrentOwner,on=Xn.ReactCurrentBatchConfig,Me=0,pt=null,at=null,gt=0,Ut=0,Hi=Nr(0),lt=0,zo=null,ni=0,Yl=0,Fh=0,so=null,Tt=null,Dh=0,aa=1/0,Dn=null,zl=!1,Lu=null,xr=null,Ws=!1,dr=null,Pl=0,lo=0,Eu=null,nl=-1,rl=0;function Pt(){return Me&6?et():nl!==-1?nl:nl=et()}function yr(e){return e.mode&1?Me&2&&gt!==0?gt&-gt:cb.transition!==null?(rl===0&&(rl=Yg()),rl):(e=Re,e!==0||(e=window.event,e=e===void 0?16:i0(e.type)),e):1}function xn(e,t,n,a){if(50<lo)throw lo=0,Eu=null,Error(ie(185));Oo(e,n,a),(!(Me&2)||e!==pt)&&(e===pt&&(!(Me&2)&&(Yl|=n),lt===4&&lr(e,gt)),Ot(e,a),n===1&&Me===0&&!(t.mode&1)&&(aa=et()+500,Vl&&Cr()))}function Ot(e,t){var n=e.callbackNode;c2(e,t);var a=hl(e,e===pt?gt:0);if(a===0)n!==null&&fm(n),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(n!=null&&fm(n),t===1)e.tag===0?lb(lf.bind(null,e)):j0(lf.bind(null,e)),ib(function(){!(Me&6)&&Cr()}),n=null;else{switch(Jg(a)){case 1:n=hh;break;case 4:n=Kg;break;case 16:n=ul;break;case 536870912:n=Qg;break;default:n=ul}n=_x(n,mx.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function mx(e,t){if(nl=-1,rl=0,Me&6)throw Error(ie(327));var n=e.callbackNode;if(Qi()&&e.callbackNode!==n)return null;var a=hl(e,e===pt?gt:0);if(a===0)return null;if(a&30||a&e.expiredLanes||t)t=Ll(e,a);else{t=a;var o=Me;Me|=2;var l=gx();(pt!==e||gt!==t)&&(Dn=null,aa=et()+500,Gr(e,t));do try{Pb();break}catch(h){fx(e,h)}while(!0);Sh(),Cl.current=l,Me=o,at!==null?t=0:(pt=null,gt=0,t=lt)}if(t!==0){if(t===2&&(o=iu(e),o!==0&&(a=o,t=Mu(e,o))),t===1)throw n=zo,Gr(e,0),lr(e,a),Ot(e,et()),n;if(t===6)lr(e,a);else{if(o=e.current.alternate,!(a&30)&&!Cb(o)&&(t=Ll(e,a),t===2&&(l=iu(e),l!==0&&(a=l,t=Mu(e,l))),t===1))throw n=zo,Gr(e,0),lr(e,a),Ot(e,et()),n;switch(e.finishedWork=o,e.finishedLanes=a,t){case 0:case 1:throw Error(ie(345));case 2:Hr(e,Tt,Dn);break;case 3:if(lr(e,a),(a&130023424)===a&&(t=Dh+500-et(),10<t)){if(hl(e,0)!==0)break;if(o=e.suspendedLanes,(o&a)!==a){Pt(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=hu(Hr.bind(null,e,Tt,Dn),t);break}Hr(e,Tt,Dn);break;case 4:if(lr(e,a),(a&4194240)===a)break;for(t=e.eventTimes,o=-1;0<a;){var d=31-gn(a);l=1<<d,d=t[d],d>o&&(o=d),a&=~l}if(a=o,a=et()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Nb(a/1960))-a,10<a){e.timeoutHandle=hu(Hr.bind(null,e,Tt,Dn),a);break}Hr(e,Tt,Dn);break;case 5:Hr(e,Tt,Dn);break;default:throw Error(ie(329))}}}return Ot(e,et()),e.callbackNode===n?mx.bind(null,e):null}function Mu(e,t){var n=so;return e.current.memoizedState.isDehydrated&&(Gr(e,t).flags|=256),e=Ll(e,t),e!==2&&(t=Tt,Tt=n,t!==null&&Tu(t)),e}function Tu(e){Tt===null?Tt=e:Tt.push.apply(Tt,e)}function Cb(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var a=0;a<n.length;a++){var o=n[a],l=o.getSnapshot;o=o.value;try{if(!vn(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function lr(e,t){for(t&=~Fh,t&=~Yl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-gn(t),a=1<<n;e[n]=-1,t&=~a}}function lf(e){if(Me&6)throw Error(ie(327));Qi();var t=hl(e,0);if(!(t&1))return Ot(e,et()),null;var n=Ll(e,t);if(e.tag!==0&&n===2){var a=iu(e);a!==0&&(t=a,n=Mu(e,a))}if(n===1)throw n=zo,Gr(e,0),lr(e,t),Ot(e,et()),n;if(n===6)throw Error(ie(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Hr(e,Tt,Dn),Ot(e,et()),null}function Wh(e,t){var n=Me;Me|=1;try{return e(t)}finally{Me=n,Me===0&&(aa=et()+500,Vl&&Cr())}}function ri(e){dr!==null&&dr.tag===0&&!(Me&6)&&Qi();var t=Me;Me|=1;var n=on.transition,a=Re;try{if(on.transition=null,Re=1,e)return e()}finally{Re=a,on.transition=n,Me=t,!(Me&6)&&Cr()}}function Uh(){Ut=Hi.current,$e(Hi)}function Gr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,rb(n)),at!==null)for(n=at.return;n!==null;){var a=n;switch(wh(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&xl();break;case 3:ra(),$e(It),$e(kt),Eh();break;case 5:Lh(a);break;case 4:ra();break;case 13:$e(Ge);break;case 19:$e(Ge);break;case 10:Nh(a.type._context);break;case 22:case 23:Uh()}n=n.return}if(pt=e,at=e=vr(e.current,null),gt=Ut=t,lt=0,zo=null,Fh=Yl=ni=0,Tt=so=null,$r!==null){for(t=0;t<$r.length;t++)if(n=$r[t],a=n.interleaved,a!==null){n.interleaved=null;var o=a.next,l=n.pending;if(l!==null){var d=l.next;l.next=o,a.next=d}n.pending=a}$r=null}return e}function fx(e,t){do{var n=at;try{if(Sh(),Xs.current=Nl,Sl){for(var a=Ke.memoizedState;a!==null;){var o=a.queue;o!==null&&(o.pending=null),a=a.next}Sl=!1}if(ti=0,ht=st=Ke=null,ao=!1,So=0,Bh.current=null,n===null||n.return===null){lt=1,zo=t,at=null;break}e:{var l=e,d=n.return,h=n,u=t;if(t=gt,h.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var f=u,y=h,x=y.tag;if(!(y.mode&1)&&(x===0||x===11||x===15)){var v=y.alternate;v?(y.updateQueue=v.updateQueue,y.memoizedState=v.memoizedState,y.lanes=v.lanes):(y.updateQueue=null,y.memoizedState=null)}var _=Gm(d);if(_!==null){_.flags&=-257,Km(_,d,h,l,t),_.mode&1&&Vm(l,f,t),t=_,u=f;var b=t.updateQueue;if(b===null){var z=new Set;z.add(u),t.updateQueue=z}else b.add(u);break e}else{if(!(t&1)){Vm(l,f,t),Hh();break e}u=Error(ie(426))}}else if(qe&&h.mode&1){var C=Gm(d);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Km(C,d,h,l,t),jh(ia(u,h));break e}}l=u=ia(u,h),lt!==4&&(lt=2),so===null?so=[l]:so.push(l),l=d;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var N=J0(l,u,t);Wm(l,N);break e;case 1:h=u;var w=l.type,S=l.stateNode;if(!(l.flags&128)&&(typeof w.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(xr===null||!xr.has(S)))){l.flags|=65536,t&=-t,l.lanes|=t;var j=X0(l,h,t);Wm(l,j);break e}}l=l.return}while(l!==null)}yx(n)}catch(E){t=E,at===n&&n!==null&&(at=n=n.return);continue}break}while(!0)}function gx(){var e=Cl.current;return Cl.current=Nl,e===null?Nl:e}function Hh(){(lt===0||lt===3||lt===2)&&(lt=4),pt===null||!(ni&268435455)&&!(Yl&268435455)||lr(pt,gt)}function Ll(e,t){var n=Me;Me|=2;var a=gx();(pt!==e||gt!==t)&&(Dn=null,Gr(e,t));do try{zb();break}catch(o){fx(e,o)}while(!0);if(Sh(),Me=n,Cl.current=a,at!==null)throw Error(ie(261));return pt=null,gt=0,lt}function zb(){for(;at!==null;)xx(at)}function Pb(){for(;at!==null&&!e2();)xx(at)}function xx(e){var t=bx(e.alternate,e,Ut);e.memoizedProps=e.pendingProps,t===null?yx(e):at=t,Bh.current=null}function yx(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=wb(n,t),n!==null){n.flags&=32767,at=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{lt=6,at=null;return}}else if(n=_b(n,t,Ut),n!==null){at=n;return}if(t=t.sibling,t!==null){at=t;return}at=t=e}while(t!==null);lt===0&&(lt=5)}function Hr(e,t,n){var a=Re,o=on.transition;try{on.transition=null,Re=1,Lb(e,t,n,a)}finally{on.transition=o,Re=a}return null}function Lb(e,t,n,a){do Qi();while(dr!==null);if(Me&6)throw Error(ie(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(ie(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(d2(e,l),e===pt&&(at=pt=null,gt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ws||(Ws=!0,_x(ul,function(){return Qi(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=on.transition,on.transition=null;var d=Re;Re=1;var h=Me;Me|=4,Bh.current=null,kb(e,n),hx(n,e),Q2(du),pl=!!cu,du=cu=null,e.current=n,Sb(n),t2(),Me=h,Re=d,on.transition=l}else e.current=n;if(Ws&&(Ws=!1,dr=e,Pl=o),l=e.pendingLanes,l===0&&(xr=null),i2(n.stateNode),Ot(e,et()),t!==null)for(a=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],a(o.value,{componentStack:o.stack,digest:o.digest});if(zl)throw zl=!1,e=Lu,Lu=null,e;return Pl&1&&e.tag!==0&&Qi(),l=e.pendingLanes,l&1?e===Eu?lo++:(lo=0,Eu=e):lo=0,Cr(),null}function Qi(){if(dr!==null){var e=Jg(Pl),t=on.transition,n=Re;try{if(on.transition=null,Re=16>e?16:e,dr===null)var a=!1;else{if(e=dr,dr=null,Pl=0,Me&6)throw Error(ie(331));var o=Me;for(Me|=4,he=e.current;he!==null;){var l=he,d=l.child;if(he.flags&16){var h=l.deletions;if(h!==null){for(var u=0;u<h.length;u++){var f=h[u];for(he=f;he!==null;){var y=he;switch(y.tag){case 0:case 11:case 15:oo(8,y,l)}var x=y.child;if(x!==null)x.return=y,he=x;else for(;he!==null;){y=he;var v=y.sibling,_=y.return;if(cx(y),y===f){he=null;break}if(v!==null){v.return=_,he=v;break}he=_}}}var b=l.alternate;if(b!==null){var z=b.child;if(z!==null){b.child=null;do{var C=z.sibling;z.sibling=null,z=C}while(z!==null)}}he=l}}if(l.subtreeFlags&2064&&d!==null)d.return=l,he=d;else e:for(;he!==null;){if(l=he,l.flags&2048)switch(l.tag){case 0:case 11:case 15:oo(9,l,l.return)}var N=l.sibling;if(N!==null){N.return=l.return,he=N;break e}he=l.return}}var w=e.current;for(he=w;he!==null;){d=he;var S=d.child;if(d.subtreeFlags&2064&&S!==null)S.return=d,he=S;else e:for(d=w;he!==null;){if(h=he,h.flags&2048)try{switch(h.tag){case 0:case 11:case 15:Ql(9,h)}}catch(E){Ye(h,h.return,E)}if(h===d){he=null;break e}var j=h.sibling;if(j!==null){j.return=h.return,he=j;break e}he=h.return}}if(Me=o,Cr(),zn&&typeof zn.onPostCommitFiberRoot=="function")try{zn.onPostCommitFiberRoot(Ul,e)}catch{}a=!0}return a}finally{Re=n,on.transition=t}}return!1}function cf(e,t,n){t=ia(n,t),t=J0(e,t,1),e=gr(e,t,1),t=Pt(),e!==null&&(Oo(e,1,t),Ot(e,t))}function Ye(e,t,n){if(e.tag===3)cf(e,e,n);else for(;t!==null;){if(t.tag===3){cf(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(xr===null||!xr.has(a))){e=ia(n,e),e=X0(t,e,1),t=gr(t,e,1),e=Pt(),t!==null&&(Oo(t,1,e),Ot(t,e));break}}t=t.return}}function Eb(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),t=Pt(),e.pingedLanes|=e.suspendedLanes&n,pt===e&&(gt&n)===n&&(lt===4||lt===3&&(gt&130023424)===gt&&500>et()-Dh?Gr(e,0):Fh|=n),Ot(e,t)}function vx(e,t){t===0&&(e.mode&1?(t=Es,Es<<=1,!(Es&130023424)&&(Es=4194304)):t=1);var n=Pt();e=Qn(e,t),e!==null&&(Oo(e,t,n),Ot(e,n))}function Mb(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),vx(e,n)}function Tb(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(ie(314))}a!==null&&a.delete(t),vx(e,n)}var bx;bx=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||It.current)At=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return At=!1,bb(e,t,n);At=!!(e.flags&131072)}else At=!1,qe&&t.flags&1048576&&k0(t,bl,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;tl(e,t),e=t.pendingProps;var o=ea(t,kt.current);Ki(t,n),o=Th(null,t,a,e,o,n);var l=Ah();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Rt(a)?(l=!0,yl(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,zh(t),o.updater=Kl,t.stateNode=o,o._reactInternals=t,vu(t,a,e,n),t=wu(null,t,a,!0,l,n)):(t.tag=0,qe&&l&&_h(t),Ct(null,t,o,n),t=t.child),t;case 16:a=t.elementType;e:{switch(tl(e,t),e=t.pendingProps,o=a._init,a=o(a._payload),t.type=a,o=t.tag=Ib(a),e=pn(a,e),o){case 0:t=_u(null,t,a,e,n);break e;case 1:t=Jm(null,t,a,e,n);break e;case 11:t=Qm(null,t,a,e,n);break e;case 14:t=Ym(null,t,a,pn(a.type,e),n);break e}throw Error(ie(306,a,""))}return t;case 0:return a=t.type,o=t.pendingProps,o=t.elementType===a?o:pn(a,o),_u(e,t,a,o,n);case 1:return a=t.type,o=t.pendingProps,o=t.elementType===a?o:pn(a,o),Jm(e,t,a,o,n);case 3:e:{if(rx(t),e===null)throw Error(ie(387));a=t.pendingProps,l=t.memoizedState,o=l.element,L0(e,t),jl(t,a,null,n);var d=t.memoizedState;if(a=d.element,l.isDehydrated)if(l={element:a,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=ia(Error(ie(423)),t),t=Xm(e,t,a,n,o);break e}else if(a!==o){o=ia(Error(ie(424)),t),t=Xm(e,t,a,n,o);break e}else for(Ht=fr(t.stateNode.containerInfo.firstChild),Zt=t,qe=!0,fn=null,n=z0(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ta(),a===o){t=Yn(e,t,n);break e}Ct(e,t,a,n)}t=t.child}return t;case 5:return E0(t),e===null&&gu(t),a=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,d=o.children,uu(a,o)?d=null:l!==null&&uu(a,l)&&(t.flags|=32),nx(e,t),Ct(e,t,d,n),t.child;case 6:return e===null&&gu(t),null;case 13:return ix(e,t,n);case 4:return Ph(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=na(t,null,a,n):Ct(e,t,a,n),t.child;case 11:return a=t.type,o=t.pendingProps,o=t.elementType===a?o:pn(a,o),Qm(e,t,a,o,n);case 7:return Ct(e,t,t.pendingProps,n),t.child;case 8:return Ct(e,t,t.pendingProps.children,n),t.child;case 12:return Ct(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(a=t.type._context,o=t.pendingProps,l=t.memoizedProps,d=o.value,We(_l,a._currentValue),a._currentValue=d,l!==null)if(vn(l.value,d)){if(l.children===o.children&&!It.current){t=Yn(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var h=l.dependencies;if(h!==null){d=l.child;for(var u=h.firstContext;u!==null;){if(u.context===a){if(l.tag===1){u=Zn(-1,n&-n),u.tag=2;var f=l.updateQueue;if(f!==null){f=f.shared;var y=f.pending;y===null?u.next=u:(u.next=y.next,y.next=u),f.pending=u}}l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),xu(l.return,n,t),h.lanes|=n;break}u=u.next}}else if(l.tag===10)d=l.type===t.type?null:l.child;else if(l.tag===18){if(d=l.return,d===null)throw Error(ie(341));d.lanes|=n,h=d.alternate,h!==null&&(h.lanes|=n),xu(d,n,t),d=l.sibling}else d=l.child;if(d!==null)d.return=l;else for(d=l;d!==null;){if(d===t){d=null;break}if(l=d.sibling,l!==null){l.return=d.return,d=l;break}d=d.return}l=d}Ct(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,a=t.pendingProps.children,Ki(t,n),o=sn(o),a=a(o),t.flags|=1,Ct(e,t,a,n),t.child;case 14:return a=t.type,o=pn(a,t.pendingProps),o=pn(a.type,o),Ym(e,t,a,o,n);case 15:return ex(e,t,t.type,t.pendingProps,n);case 17:return a=t.type,o=t.pendingProps,o=t.elementType===a?o:pn(a,o),tl(e,t),t.tag=1,Rt(a)?(e=!0,yl(t)):e=!1,Ki(t,n),Y0(t,a,o),vu(t,a,o,n),wu(null,t,a,!0,e,n);case 19:return ax(e,t,n);case 22:return tx(e,t,n)}throw Error(ie(156,t.tag))};function _x(e,t){return Gg(e,t)}function Ab(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function an(e,t,n,a){return new Ab(e,t,n,a)}function Zh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ib(e){if(typeof e=="function")return Zh(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ch)return 11;if(e===dh)return 14}return 2}function vr(e,t){var n=e.alternate;return n===null?(n=an(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function il(e,t,n,a,o,l){var d=2;if(a=e,typeof e=="function")Zh(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case Ti:return Kr(n.children,o,l,t);case lh:d=8,o|=8;break;case Hd:return e=an(12,n,t,o|2),e.elementType=Hd,e.lanes=l,e;case Zd:return e=an(13,n,t,o),e.elementType=Zd,e.lanes=l,e;case $d:return e=an(19,n,t,o),e.elementType=$d,e.lanes=l,e;case Eg:return Jl(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Pg:d=10;break e;case Lg:d=9;break e;case ch:d=11;break e;case dh:d=14;break e;case ar:d=16,a=null;break e}throw Error(ie(130,e==null?e:typeof e,""))}return t=an(d,n,t,o),t.elementType=e,t.type=a,t.lanes=l,t}function Kr(e,t,n,a){return e=an(7,e,a,t),e.lanes=n,e}function Jl(e,t,n,a){return e=an(22,e,a,t),e.elementType=Eg,e.lanes=n,e.stateNode={isHidden:!1},e}function wd(e,t,n){return e=an(6,e,null,t),e.lanes=n,e}function jd(e,t,n){return t=an(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Rb(e,t,n,a,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rd(0),this.expirationTimes=rd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rd(0),this.identifierPrefix=a,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function $h(e,t,n,a,o,l,d,h,u){return e=new Rb(e,t,n,h,u),t===1?(t=1,l===!0&&(t|=8)):t=0,l=an(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:a,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zh(l),e}function Ob(e,t,n){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mi,key:a==null?null:""+a,children:e,containerInfo:t,implementation:n}}function wx(e){if(!e)return jr;e=e._reactInternals;e:{if(di(e)!==e||e.tag!==1)throw Error(ie(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Rt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(ie(171))}if(e.tag===1){var n=e.type;if(Rt(n))return w0(e,n,t)}return t}function jx(e,t,n,a,o,l,d,h,u){return e=$h(n,a,!0,e,o,l,d,h,u),e.context=wx(null),n=e.current,a=Pt(),o=yr(n),l=Zn(a,o),l.callback=t??null,gr(n,l,o),e.current.lanes=o,Oo(e,o,a),Ot(e,a),e}function Xl(e,t,n,a){var o=t.current,l=Pt(),d=yr(o);return n=wx(n),t.context===null?t.context=n:t.pendingContext=n,t=Zn(l,d),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=gr(o,t,d),e!==null&&(xn(e,o,d,l),Js(e,o,d)),d}function El(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function df(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function qh(e,t){df(e,t),(e=e.alternate)&&df(e,t)}function Bb(){return null}var kx=typeof reportError=="function"?reportError:function(e){console.error(e)};function Vh(e){this._internalRoot=e}ec.prototype.render=Vh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(ie(409));Xl(e,t,null,null)};ec.prototype.unmount=Vh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ri(function(){Xl(null,e,null,null)}),t[Kn]=null}};function ec(e){this._internalRoot=e}ec.prototype.unstable_scheduleHydration=function(e){if(e){var t=t0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<sr.length&&t!==0&&t<sr[n].priority;n++);sr.splice(n,0,e),n===0&&r0(e)}};function Gh(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function tc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function uf(){}function Fb(e,t,n,a,o){if(o){if(typeof a=="function"){var l=a;a=function(){var f=El(d);l.call(f)}}var d=jx(t,a,e,0,null,!1,!1,"",uf);return e._reactRootContainer=d,e[Kn]=d.current,bo(e.nodeType===8?e.parentNode:e),ri(),d}for(;o=e.lastChild;)e.removeChild(o);if(typeof a=="function"){var h=a;a=function(){var f=El(u);h.call(f)}}var u=$h(e,0,!1,null,null,!1,!1,"",uf);return e._reactRootContainer=u,e[Kn]=u.current,bo(e.nodeType===8?e.parentNode:e),ri(function(){Xl(t,u,n,a)}),u}function nc(e,t,n,a,o){var l=n._reactRootContainer;if(l){var d=l;if(typeof o=="function"){var h=o;o=function(){var u=El(d);h.call(u)}}Xl(t,d,e,o)}else d=Fb(n,t,e,o,a);return El(d)}Xg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ya(t.pendingLanes);n!==0&&(ph(t,n|1),Ot(t,et()),!(Me&6)&&(aa=et()+500,Cr()))}break;case 13:ri(function(){var a=Qn(e,1);if(a!==null){var o=Pt();xn(a,e,1,o)}}),qh(e,1)}};mh=function(e){if(e.tag===13){var t=Qn(e,134217728);if(t!==null){var n=Pt();xn(t,e,134217728,n)}qh(e,134217728)}};e0=function(e){if(e.tag===13){var t=yr(e),n=Qn(e,t);if(n!==null){var a=Pt();xn(n,e,t,a)}qh(e,t)}};t0=function(){return Re};n0=function(e,t){var n=Re;try{return Re=e,t()}finally{Re=n}};tu=function(e,t,n){switch(t){case"input":if(Gd(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var o=ql(a);if(!o)throw Error(ie(90));Tg(a),Gd(a,o)}}}break;case"textarea":Ig(e,n);break;case"select":t=n.value,t!=null&&$i(e,!!n.multiple,t,!1)}};Ug=Wh;Hg=ri;var Db={usingClientEntryPoint:!1,Events:[Fo,Oi,ql,Dg,Wg,Wh]},Ua={findFiberByHostInstance:Zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Wb={bundleType:Ua.bundleType,version:Ua.version,rendererPackageName:Ua.rendererPackageName,rendererConfig:Ua.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=qg(e),e===null?null:e.stateNode},findFiberByHostInstance:Ua.findFiberByHostInstance||Bb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Us=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Us.isDisabled&&Us.supportsFiber)try{Ul=Us.inject(Wb),zn=Us}catch{}}Vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Db;Vt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gh(t))throw Error(ie(200));return Ob(e,t,null,n)};Vt.createRoot=function(e,t){if(!Gh(e))throw Error(ie(299));var n=!1,a="",o=kx;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=$h(e,1,!1,null,null,n,!1,a,o),e[Kn]=t.current,bo(e.nodeType===8?e.parentNode:e),new Vh(t)};Vt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(ie(188)):(e=Object.keys(e).join(","),Error(ie(268,e)));return e=qg(t),e=e===null?null:e.stateNode,e};Vt.flushSync=function(e){return ri(e)};Vt.hydrate=function(e,t,n){if(!tc(t))throw Error(ie(200));return nc(null,e,t,!0,n)};Vt.hydrateRoot=function(e,t,n){if(!Gh(e))throw Error(ie(405));var a=n!=null&&n.hydratedSources||null,o=!1,l="",d=kx;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),t=jx(t,null,e,1,n??null,o,!1,l,d),e[Kn]=t.current,bo(e),a)for(e=0;e<a.length;e++)n=a[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new ec(t)};Vt.render=function(e,t,n){if(!tc(t))throw Error(ie(200));return nc(null,e,t,!1,n)};Vt.unmountComponentAtNode=function(e){if(!tc(e))throw Error(ie(40));return e._reactRootContainer?(ri(function(){nc(null,null,e,!1,function(){e._reactRootContainer=null,e[Kn]=null})}),!0):!1};Vt.unstable_batchedUpdates=Wh;Vt.unstable_renderSubtreeIntoContainer=function(e,t,n,a){if(!tc(n))throw Error(ie(200));if(e==null||e._reactInternals===void 0)throw Error(ie(38));return nc(e,t,n,!1,a)};Vt.version="18.3.1-next-f1338f8080-20240426";function Sx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sx)}catch(e){console.error(e)}}Sx(),Sg.exports=Vt;var Nx=Sg.exports,hf=Nx;Wd.createRoot=hf.createRoot,Wd.hydrateRoot=hf.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Po(){return Po=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Po.apply(this,arguments)}var ur;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ur||(ur={}));const pf="popstate";function Ub(e){e===void 0&&(e={});function t(a,o){let{pathname:l,search:d,hash:h}=a.location;return Au("",{pathname:l,search:d,hash:h},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(a,o){return typeof o=="string"?o:Ml(o)}return Zb(t,n,null,e)}function tt(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Kh(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Hb(){return Math.random().toString(36).substr(2,8)}function mf(e,t){return{usr:e.state,key:e.key,idx:t}}function Au(e,t,n,a){return n===void 0&&(n=null),Po({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ma(t):t,{state:n,key:t&&t.key||a||Hb()})}function Ml(e){let{pathname:t="/",search:n="",hash:a=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),a&&a!=="#"&&(t+=a.charAt(0)==="#"?a:"#"+a),t}function ma(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let a=e.indexOf("?");a>=0&&(t.search=e.substr(a),e=e.substr(0,a)),e&&(t.pathname=e)}return t}function Zb(e,t,n,a){a===void 0&&(a={});let{window:o=document.defaultView,v5Compat:l=!1}=a,d=o.history,h=ur.Pop,u=null,f=y();f==null&&(f=0,d.replaceState(Po({},d.state,{idx:f}),""));function y(){return(d.state||{idx:null}).idx}function x(){h=ur.Pop;let C=y(),N=C==null?null:C-f;f=C,u&&u({action:h,location:z.location,delta:N})}function v(C,N){h=ur.Push;let w=Au(z.location,C,N);f=y()+1;let S=mf(w,f),j=z.createHref(w);try{d.pushState(S,"",j)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;o.location.assign(j)}l&&u&&u({action:h,location:z.location,delta:1})}function _(C,N){h=ur.Replace;let w=Au(z.location,C,N);f=y();let S=mf(w,f),j=z.createHref(w);d.replaceState(S,"",j),l&&u&&u({action:h,location:z.location,delta:0})}function b(C){let N=o.location.origin!=="null"?o.location.origin:o.location.href,w=typeof C=="string"?C:Ml(C);return w=w.replace(/ $/,"%20"),tt(N,"No window.location.(origin|href) available to create URL for href: "+w),new URL(w,N)}let z={get action(){return h},get location(){return e(o,d)},listen(C){if(u)throw new Error("A history only accepts one active listener");return o.addEventListener(pf,x),u=C,()=>{o.removeEventListener(pf,x),u=null}},createHref(C){return t(o,C)},createURL:b,encodeLocation(C){let N=b(C);return{pathname:N.pathname,search:N.search,hash:N.hash}},push:v,replace:_,go(C){return d.go(C)}};return z}var ff;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ff||(ff={}));function $b(e,t,n){return n===void 0&&(n="/"),qb(e,t,n)}function qb(e,t,n,a){let o=typeof t=="string"?ma(t):t,l=Qh(o.pathname||"/",n);if(l==null)return null;let d=Cx(e);Vb(d);let h=null;for(let u=0;h==null&&u<d.length;++u){let f=a_(l);h=n_(d[u],f)}return h}function Cx(e,t,n,a){t===void 0&&(t=[]),n===void 0&&(n=[]),a===void 0&&(a="");let o=(l,d,h)=>{let u={relativePath:h===void 0?l.path||"":h,caseSensitive:l.caseSensitive===!0,childrenIndex:d,route:l};u.relativePath.startsWith("/")&&(tt(u.relativePath.startsWith(a),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(a.length));let f=br([a,u.relativePath]),y=n.concat(u);l.children&&l.children.length>0&&(tt(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+f+'".')),Cx(l.children,t,y,f)),!(l.path==null&&!l.index)&&t.push({path:f,score:e_(f,l.index),routesMeta:y})};return e.forEach((l,d)=>{var h;if(l.path===""||!((h=l.path)!=null&&h.includes("?")))o(l,d);else for(let u of zx(l.path))o(l,d,u)}),t}function zx(e){let t=e.split("/");if(t.length===0)return[];let[n,...a]=t,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(a.length===0)return o?[l,""]:[l];let d=zx(a.join("/")),h=[];return h.push(...d.map(u=>u===""?l:[l,u].join("/"))),o&&h.push(...d),h.map(u=>e.startsWith("/")&&u===""?"/":u)}function Vb(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:t_(t.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}const Gb=/^:[\w-]+$/,Kb=3,Qb=2,Yb=1,Jb=10,Xb=-2,gf=e=>e==="*";function e_(e,t){let n=e.split("/"),a=n.length;return n.some(gf)&&(a+=Xb),t&&(a+=Qb),n.filter(o=>!gf(o)).reduce((o,l)=>o+(Gb.test(l)?Kb:l===""?Yb:Jb),a)}function t_(e,t){return e.length===t.length&&e.slice(0,-1).every((a,o)=>a===t[o])?e[e.length-1]-t[t.length-1]:0}function n_(e,t,n){let{routesMeta:a}=e,o={},l="/",d=[];for(let h=0;h<a.length;++h){let u=a[h],f=h===a.length-1,y=l==="/"?t:t.slice(l.length)||"/",x=r_({path:u.relativePath,caseSensitive:u.caseSensitive,end:f},y),v=u.route;if(!x)return null;Object.assign(o,x.params),d.push({params:o,pathname:br([l,x.pathname]),pathnameBase:d_(br([l,x.pathnameBase])),route:v}),x.pathnameBase!=="/"&&(l=br([l,x.pathnameBase]))}return d}function r_(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=i_(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let l=o[0],d=l.replace(/(.)\/+$/,"$1"),h=o.slice(1);return{params:a.reduce((f,y,x)=>{let{paramName:v,isOptional:_}=y;if(v==="*"){let z=h[x]||"";d=l.slice(0,l.length-z.length).replace(/(.)\/+$/,"$1")}const b=h[x];return _&&!b?f[v]=void 0:f[v]=(b||"").replace(/%2F/g,"/"),f},{}),pathname:l,pathnameBase:d,pattern:e}}function i_(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Kh(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let a=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,h,u)=>(a.push({paramName:h,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),a]}function a_(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Kh(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Qh(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=e.charAt(n);return a&&a!=="/"?null:e.slice(n)||"/"}const o_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,s_=e=>o_.test(e);function l_(e,t){t===void 0&&(t="/");let{pathname:n,search:a="",hash:o=""}=typeof e=="string"?ma(e):e,l;if(n)if(s_(n))l=n;else{if(n.includes("//")){let d=n;n=n.replace(/\/\/+/g,"/"),Kh(!1,"Pathnames cannot have embedded double slashes - normalizing "+(d+" -> "+n))}n.startsWith("/")?l=xf(n.substring(1),"/"):l=xf(n,t)}else l=t;return{pathname:l,search:u_(a),hash:h_(o)}}function xf(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function kd(e,t,n,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function c_(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Yh(e,t){let n=c_(e);return t?n.map((a,o)=>o===n.length-1?a.pathname:a.pathnameBase):n.map(a=>a.pathnameBase)}function Jh(e,t,n,a){a===void 0&&(a=!1);let o;typeof e=="string"?o=ma(e):(o=Po({},e),tt(!o.pathname||!o.pathname.includes("?"),kd("?","pathname","search",o)),tt(!o.pathname||!o.pathname.includes("#"),kd("#","pathname","hash",o)),tt(!o.search||!o.search.includes("#"),kd("#","search","hash",o)));let l=e===""||o.pathname==="",d=l?"/":o.pathname,h;if(d==null)h=n;else{let x=t.length-1;if(!a&&d.startsWith("..")){let v=d.split("/");for(;v[0]==="..";)v.shift(),x-=1;o.pathname=v.join("/")}h=x>=0?t[x]:"/"}let u=l_(o,h),f=d&&d!=="/"&&d.endsWith("/"),y=(l||d===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(f||y)&&(u.pathname+="/"),u}const br=e=>e.join("/").replace(/\/\/+/g,"/"),d_=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),u_=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,h_=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function p_(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Px=["post","put","patch","delete"];new Set(Px);const m_=["get",...Px];new Set(m_);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Lo(){return Lo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Lo.apply(this,arguments)}const Xh=m.createContext(null),f_=m.createContext(null),zr=m.createContext(null),rc=m.createContext(null),er=m.createContext({outlet:null,matches:[],isDataRoute:!1}),Lx=m.createContext(null);function g_(e,t){let{relative:n}=t===void 0?{}:t;fa()||tt(!1);let{basename:a,navigator:o}=m.useContext(zr),{hash:l,pathname:d,search:h}=Mx(e,{relative:n}),u=d;return a!=="/"&&(u=d==="/"?a:br([a,d])),o.createHref({pathname:u,search:h,hash:l})}function fa(){return m.useContext(rc)!=null}function Kt(){return fa()||tt(!1),m.useContext(rc).location}function Ex(e){m.useContext(zr).static||m.useLayoutEffect(e)}function ct(){let{isDataRoute:e}=m.useContext(er);return e?P_():x_()}function x_(){fa()||tt(!1);let e=m.useContext(Xh),{basename:t,future:n,navigator:a}=m.useContext(zr),{matches:o}=m.useContext(er),{pathname:l}=Kt(),d=JSON.stringify(Yh(o,n.v7_relativeSplatPath)),h=m.useRef(!1);return Ex(()=>{h.current=!0}),m.useCallback(function(f,y){if(y===void 0&&(y={}),!h.current)return;if(typeof f=="number"){a.go(f);return}let x=Jh(f,JSON.parse(d),l,y.relative==="path");e==null&&t!=="/"&&(x.pathname=x.pathname==="/"?t:br([t,x.pathname])),(y.replace?a.replace:a.push)(x,y.state,y)},[t,a,d,l,e])}function ga(){let{matches:e}=m.useContext(er),t=e[e.length-1];return t?t.params:{}}function Mx(e,t){let{relative:n}=t===void 0?{}:t,{future:a}=m.useContext(zr),{matches:o}=m.useContext(er),{pathname:l}=Kt(),d=JSON.stringify(Yh(o,a.v7_relativeSplatPath));return m.useMemo(()=>Jh(e,JSON.parse(d),l,n==="path"),[e,d,l,n])}function y_(e,t){return v_(e,t)}function v_(e,t,n,a){fa()||tt(!1);let{navigator:o}=m.useContext(zr),{matches:l}=m.useContext(er),d=l[l.length-1],h=d?d.params:{};d&&d.pathname;let u=d?d.pathnameBase:"/";d&&d.route;let f=Kt(),y;if(t){var x;let C=typeof t=="string"?ma(t):t;u==="/"||(x=C.pathname)!=null&&x.startsWith(u)||tt(!1),y=C}else y=f;let v=y.pathname||"/",_=v;if(u!=="/"){let C=u.replace(/^\//,"").split("/");_="/"+v.replace(/^\//,"").split("/").slice(C.length).join("/")}let b=$b(e,{pathname:_}),z=k_(b&&b.map(C=>Object.assign({},C,{params:Object.assign({},h,C.params),pathname:br([u,o.encodeLocation?o.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?u:br([u,o.encodeLocation?o.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),l,n,a);return t&&z?m.createElement(rc.Provider,{value:{location:Lo({pathname:"/",search:"",hash:"",state:null,key:"default"},y),navigationType:ur.Pop}},z):z}function b_(){let e=z_(),t=p_(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return m.createElement(m.Fragment,null,m.createElement("h2",null,"Unexpected Application Error!"),m.createElement("h3",{style:{fontStyle:"italic"}},t),n?m.createElement("pre",{style:o},n):null,null)}const __=m.createElement(b_,null);class w_ extends m.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?m.createElement(er.Provider,{value:this.props.routeContext},m.createElement(Lx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function j_(e){let{routeContext:t,match:n,children:a}=e,o=m.useContext(Xh);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),m.createElement(er.Provider,{value:t},a)}function k_(e,t,n,a){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),a===void 0&&(a=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=a)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let d=e,h=(o=n)==null?void 0:o.errors;if(h!=null){let y=d.findIndex(x=>x.route.id&&(h==null?void 0:h[x.route.id])!==void 0);y>=0||tt(!1),d=d.slice(0,Math.min(d.length,y+1))}let u=!1,f=-1;if(n&&a&&a.v7_partialHydration)for(let y=0;y<d.length;y++){let x=d[y];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(f=y),x.route.id){let{loaderData:v,errors:_}=n,b=x.route.loader&&v[x.route.id]===void 0&&(!_||_[x.route.id]===void 0);if(x.route.lazy||b){u=!0,f>=0?d=d.slice(0,f+1):d=[d[0]];break}}}return d.reduceRight((y,x,v)=>{let _,b=!1,z=null,C=null;n&&(_=h&&x.route.id?h[x.route.id]:void 0,z=x.route.errorElement||__,u&&(f<0&&v===0?(L_("route-fallback"),b=!0,C=null):f===v&&(b=!0,C=x.route.hydrateFallbackElement||null)));let N=t.concat(d.slice(0,v+1)),w=()=>{let S;return _?S=z:b?S=C:x.route.Component?S=m.createElement(x.route.Component,null):x.route.element?S=x.route.element:S=y,m.createElement(j_,{match:x,routeContext:{outlet:y,matches:N,isDataRoute:n!=null},children:S})};return n&&(x.route.ErrorBoundary||x.route.errorElement||v===0)?m.createElement(w_,{location:n.location,revalidation:n.revalidation,component:z,error:_,children:w(),routeContext:{outlet:null,matches:N,isDataRoute:!0}}):w()},null)}var Tx=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Tx||{}),Ax=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ax||{});function S_(e){let t=m.useContext(Xh);return t||tt(!1),t}function N_(e){let t=m.useContext(f_);return t||tt(!1),t}function C_(e){let t=m.useContext(er);return t||tt(!1),t}function Ix(e){let t=C_(),n=t.matches[t.matches.length-1];return n.route.id||tt(!1),n.route.id}function z_(){var e;let t=m.useContext(Lx),n=N_(),a=Ix();return t!==void 0?t:(e=n.errors)==null?void 0:e[a]}function P_(){let{router:e}=S_(Tx.UseNavigateStable),t=Ix(Ax.UseNavigateStable),n=m.useRef(!1);return Ex(()=>{n.current=!0}),m.useCallback(function(o,l){l===void 0&&(l={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Lo({fromRouteId:t},l)))},[e,t])}const yf={};function L_(e,t,n){yf[e]||(yf[e]=!0)}function E_(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function oa(e){let{to:t,replace:n,state:a,relative:o}=e;fa()||tt(!1);let{future:l,static:d}=m.useContext(zr),{matches:h}=m.useContext(er),{pathname:u}=Kt(),f=ct(),y=Jh(t,Yh(h,l.v7_relativeSplatPath),u,o==="path"),x=JSON.stringify(y);return m.useEffect(()=>f(JSON.parse(x),{replace:n,state:a,relative:o}),[f,x,o,n,a]),null}function je(e){tt(!1)}function M_(e){let{basename:t="/",children:n=null,location:a,navigationType:o=ur.Pop,navigator:l,static:d=!1,future:h}=e;fa()&&tt(!1);let u=t.replace(/^\/*/,"/"),f=m.useMemo(()=>({basename:u,navigator:l,static:d,future:Lo({v7_relativeSplatPath:!1},h)}),[u,h,l,d]);typeof a=="string"&&(a=ma(a));let{pathname:y="/",search:x="",hash:v="",state:_=null,key:b="default"}=a,z=m.useMemo(()=>{let C=Qh(y,u);return C==null?null:{location:{pathname:C,search:x,hash:v,state:_,key:b},navigationType:o}},[u,y,x,v,_,b,o]);return z==null?null:m.createElement(zr.Provider,{value:f},m.createElement(rc.Provider,{children:n,value:z}))}function T_(e){let{children:t,location:n}=e;return y_(Iu(t),n)}new Promise(()=>{});function Iu(e,t){t===void 0&&(t=[]);let n=[];return m.Children.forEach(e,(a,o)=>{if(!m.isValidElement(a))return;let l=[...t,o];if(a.type===m.Fragment){n.push.apply(n,Iu(a.props.children,l));return}a.type!==je&&tt(!1),!a.props.index||!a.props.children||tt(!1);let d={id:a.props.id||l.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(d.children=Iu(a.props.children,l)),n.push(d)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ru(){return Ru=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Ru.apply(this,arguments)}function A_(e,t){if(e==null)return{};var n={},a=Object.keys(e),o,l;for(l=0;l<a.length;l++)o=a[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function I_(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function R_(e,t){return e.button===0&&(!t||t==="_self")&&!I_(e)}function Ou(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let a=e[n];return t.concat(Array.isArray(a)?a.map(o=>[n,o]):[[n,a]])},[]))}function O_(e,t){let n=Ou(e);return t&&t.forEach((a,o)=>{n.has(o)||t.getAll(o).forEach(l=>{n.append(o,l)})}),n}const B_=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],F_="6";try{window.__reactRouterVersion=F_}catch{}const D_="startTransition",vf=Ev[D_];function W_(e){let{basename:t,children:n,future:a,window:o}=e,l=m.useRef();l.current==null&&(l.current=Ub({window:o,v5Compat:!0}));let d=l.current,[h,u]=m.useState({action:d.action,location:d.location}),{v7_startTransition:f}=a||{},y=m.useCallback(x=>{f&&vf?vf(()=>u(x)):u(x)},[u,f]);return m.useLayoutEffect(()=>d.listen(y),[d,y]),m.useEffect(()=>E_(a),[a]),m.createElement(M_,{basename:t,children:n,location:h.location,navigationType:h.action,navigator:d,future:a})}const U_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",H_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,me=m.forwardRef(function(t,n){let{onClick:a,relative:o,reloadDocument:l,replace:d,state:h,target:u,to:f,preventScrollReset:y,viewTransition:x}=t,v=A_(t,B_),{basename:_}=m.useContext(zr),b,z=!1;if(typeof f=="string"&&H_.test(f)&&(b=f,U_))try{let S=new URL(window.location.href),j=f.startsWith("//")?new URL(S.protocol+f):new URL(f),E=Qh(j.pathname,_);j.origin===S.origin&&E!=null?f=E+j.search+j.hash:z=!0}catch{}let C=g_(f,{relative:o}),N=Z_(f,{replace:d,state:h,target:u,preventScrollReset:y,relative:o,viewTransition:x});function w(S){a&&a(S),S.defaultPrevented||N(S)}return m.createElement("a",Ru({},v,{href:b||C,onClick:z||l?a:w,ref:n,target:u}))});var bf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(bf||(bf={}));var _f;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(_f||(_f={}));function Z_(e,t){let{target:n,replace:a,state:o,preventScrollReset:l,relative:d,viewTransition:h}=t===void 0?{}:t,u=ct(),f=Kt(),y=Mx(e,{relative:d});return m.useCallback(x=>{if(R_(x,n)){x.preventDefault();let v=a!==void 0?a:Ml(f)===Ml(y);u(e,{replace:v,state:o,preventScrollReset:l,relative:d,viewTransition:h})}},[f,u,y,a,o,n,e,l,d,h])}function ic(e){let t=m.useRef(Ou(e)),n=m.useRef(!1),a=Kt(),o=m.useMemo(()=>O_(a.search,n.current?null:t.current),[a.search]),l=ct(),d=m.useCallback((h,u)=>{const f=Ou(typeof h=="function"?h(o):h);n.current=!0,l("?"+f,u)},[l,o]);return[o,d]}var $_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const q_=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Y=(e,t)=>{const n=m.forwardRef(({color:a="currentColor",size:o=24,strokeWidth:l=2,absoluteStrokeWidth:d,children:h,...u},f)=>m.createElement("svg",{ref:f,...$_,width:o,height:o,stroke:a,strokeWidth:d?Number(l)*24/Number(o):l,className:`lucide lucide-${q_(e)}`,...u},[...t.map(([y,x])=>m.createElement(y,x)),...(Array.isArray(h)?h:[h])||[]]));return n.displayName=`${e}`,n},V_=Y("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]),G_=Y("Archive",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]]),K_=Y("Armchair",[["path",{d:"M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3",key:"irtipd"}],["path",{d:"M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z",key:"1e01m0"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]]),Rx=Y("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]),Q_=Y("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),Y_=Y("Baby",[["path",{d:"M9 12h.01",key:"157uk2"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"5yv0yz"}]]),Tl=Y("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]),Ox=Y("Beef",[["circle",{cx:"12.5",cy:"8.5",r:"2.5",key:"9738u8"}],["path",{d:"M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z",key:"o0f6za"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5",key:"k7p6i0"}]]),J_=Y("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]),X_=Y("Bike",[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]),Bx=Y("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]),ew=Y("Briefcase",[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2",key:"eto64e"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"zwj3tp"}]]),tw=Y("Brush",[["path",{d:"m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08",key:"1styjt"}],["path",{d:"M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z",key:"z0l1mu"}]]),nw=Y("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]),rw=Y("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]),iw=Y("Candy",[["path",{d:"m9.5 7.5-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Z",key:"ue6khb"}],["path",{d:"M14 6.5v10",key:"5xnk7c"}],["path",{d:"M10 7.5v10",key:"1uew51"}],["path",{d:"m16 7 1-5 1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1",key:"b9cp6k"}],["path",{d:"m8 17-1 5-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1",key:"5lney8"}]]),Bu=Y("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]),aw=Y("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]),Fx=Y("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),ep=Y("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),Fu=Y("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),Dx=Y("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]),ow=Y("Church",[["path",{d:"m18 7 4 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9l4-2",key:"gy5gyo"}],["path",{d:"M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4",key:"cpkuc4"}],["path",{d:"M18 22V5l-6-3-6 3v17",key:"1hsnhq"}],["path",{d:"M12 7v5",key:"ma6bk"}],["path",{d:"M10 9h4",key:"u4k05v"}]]),sw=Y("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]),Yi=Y("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]),Wx=Y("Coffee",[["path",{d:"M17 8h1a4 4 0 1 1 0 8h-1",key:"jx4kbh"}],["path",{d:"M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z",key:"1bxrl0"}],["line",{x1:"6",x2:"6",y1:"2",y2:"4",key:"1cr9l3"}],["line",{x1:"10",x2:"10",y1:"2",y2:"4",key:"170wym"}],["line",{x1:"14",x2:"14",y1:"2",y2:"4",key:"1c5f70"}]]),lw=Y("Cookie",[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",key:"laymnq"}],["path",{d:"M8.5 8.5v.01",key:"ue8clq"}],["path",{d:"M16 15.5v.01",key:"14dtrp"}],["path",{d:"M12 12v.01",key:"u5ubse"}],["path",{d:"M11 17v.01",key:"1hyl5a"}],["path",{d:"M7 14v.01",key:"uct60s"}]]),Sd=Y("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]),cw=Y("Croissant",[["path",{d:"m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z",key:"1ozxlb"}],["path",{d:"m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83",key:"ffuyb5"}],["path",{d:"M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4",key:"osnpzi"}],["path",{d:"m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2",key:"1vubaw"}],["path",{d:"M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5",key:"wxr772"}]]),Ux=Y("Cross",[["path",{d:"M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z",key:"1t5g7j"}]]),dw=Y("CupSoda",[["path",{d:"m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8",key:"8166m8"}],["path",{d:"M5 8h14",key:"pcz4l3"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0",key:"yjz344"}],["path",{d:"m12 8 1-6h2",key:"3ybfa4"}]]),uw=Y("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]),Hx=Y("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]),hw=Y("Drumstick",[["path",{d:"M15.45 15.4c-2.13.65-4.3.32-5.7-1.1-2.29-2.27-1.76-6.5 1.17-9.42 2.93-2.93 7.15-3.46 9.43-1.18 1.41 1.41 1.74 3.57 1.1 5.71-1.4-.51-3.26-.02-4.64 1.36-1.38 1.38-1.87 3.23-1.36 4.63z",key:"1o96s0"}],["path",{d:"m11.25 15.6-2.16 2.16a2.5 2.5 0 1 1-4.56 1.73 2.49 2.49 0 0 1-1.41-4.24 2.5 2.5 0 0 1 3.14-.32l2.16-2.16",key:"14vv5h"}]]),Zx=Y("Dumbbell",[["path",{d:"m6.5 6.5 11 11",key:"f7oqzb"}],["path",{d:"m21 21-1-1",key:"cpc6if"}],["path",{d:"m3 3 1 1",key:"d3rpuf"}],["path",{d:"m18 22 4-4",key:"1e32o6"}],["path",{d:"m2 6 4-4",key:"189tqz"}],["path",{d:"m3 10 7-7",key:"1bxui2"}],["path",{d:"m14 21 7-7",key:"16x78n"}]]),$x=Y("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]),qx=Y("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),Vx=Y("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]),Gx=Y("Fish",[["path",{d:"M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z",key:"15baut"}],["path",{d:"M18 12v.5",key:"18hhni"}],["path",{d:"M16 17.93a9.77 9.77 0 0 1 0-11.86",key:"16dt7o"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33",key:"l9di03"}],["path",{d:"M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4",key:"1kjonw"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98",key:"1zlm23"}]]),Kx=Y("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]),Qx=Y("Flower2",[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",key:"3pnvol"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M12 10v12",key:"6ubwww"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z",key:"9hd38g"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z",key:"ufn41s"}]]),pw=Y("Footprints",[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",key:"1dudjm"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",key:"l2t8xc"}],["path",{d:"M16 17h4",key:"1dejxt"}],["path",{d:"M4 13h4",key:"1bwh8b"}]]),mw=Y("Fuel",[["line",{x1:"3",x2:"15",y1:"22",y2:"22",key:"xegly4"}],["line",{x1:"4",x2:"14",y1:"9",y2:"9",key:"xcnuvu"}],["path",{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18",key:"16j0yd"}],["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",key:"8ur5zv"}]]),Yx=Y("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]),Jx=Y("Gem",[["path",{d:"M6 3h12l4 6-10 13L2 9Z",key:"1pcd5k"}],["path",{d:"M11 3 8 9l4 13 4-13-3-6",key:"1fcu3u"}],["path",{d:"M2 9h20",key:"16fsjt"}]]),Xx=Y("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]),fw=Y("Glasses",[["circle",{cx:"6",cy:"15",r:"4",key:"vux9w4"}],["circle",{cx:"18",cy:"15",r:"4",key:"18o8ve"}],["path",{d:"M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2",key:"1ag4bs"}],["path",{d:"M2.5 13 5 7c.7-1.3 1.4-2 3-2",key:"1hm1gs"}],["path",{d:"M21.5 13 19 7c-.7-1.3-1.5-2-3-2",key:"1r31ai"}]]),ey=Y("GraduationCap",[["path",{d:"M22 10v6M2 10l10-5 10 5-10 5z",key:"1ef52a"}],["path",{d:"M6 12v5c3 3 9 3 12 0v-5",key:"1f75yj"}]]),ty=Y("Hammer",[["path",{d:"m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9",key:"1afvon"}],["path",{d:"M17.64 15 22 10.64",key:"zsji6s"}],["path",{d:"m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91",key:"lehyy1"}]]),gw=Y("HardHat",[["path",{d:"M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z",key:"1dej2m"}],["path",{d:"M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5",key:"1p9q5i"}],["path",{d:"M4 15v-3a6 6 0 0 1 6-6h0",key:"1uc279"}],["path",{d:"M14 6h0a6 6 0 0 1 6 6v3",key:"1j9mnm"}]]),xw=Y("HeartHandshake",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"12sd6o"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]]),yw=Y("HeartPulse",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"1uw2ng"}]]),_r=Y("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]),sa=Y("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]),vw=Y("Hotel",[["path",{d:"M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z",key:"p9z69c"}],["path",{d:"m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16",key:"1bvcvh"}],["path",{d:"M8 7h.01",key:"1vti4s"}],["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M12 7h.01",key:"1ivr5q"}],["path",{d:"M12 11h.01",key:"z322tv"}],["path",{d:"M16 11h.01",key:"xkw8gn"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M10 22v-6.5m4 0V22",key:"16gs4s"}]]),bw=Y("IceCream",[["path",{d:"m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11",key:"1v6356"}],["path",{d:"M17 7A5 5 0 0 0 7 7",key:"151p3v"}],["path",{d:"M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4",key:"1sdaij"}]]),Bt=Y("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]),_w=Y("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]),ww=Y("KeyRound",[["path",{d:"M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z",key:"167ctg"}],["circle",{cx:"16.5",cy:"7.5",r:".5",key:"1kog09"}]]),Du=Y("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]),ny=Y("Laptop",[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]]),Al=Y("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]),Eo=Y("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]),ry=Y("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),iy=Y("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]),ac=Y("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]),ay=Y("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]),jw=Y("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),$t=Y("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),Wu=Y("Map",[["polygon",{points:"3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21",key:"ok2ie8"}],["line",{x1:"9",x2:"9",y1:"3",y2:"18",key:"w34qz5"}],["line",{x1:"15",x2:"15",y1:"6",y2:"21",key:"volv9a"}]]),kw=Y("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]),$n=Y("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]),Xa=Y("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),Il=Y("MessageCircle",[["path",{d:"m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z",key:"v2veuj"}]]),oy=Y("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]),sy=Y("Milk",[["path",{d:"M8 2h8",key:"1ssgc1"}],["path",{d:"M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2",key:"qtp12x"}],["path",{d:"M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0",key:"ygeh44"}]]),Sw=Y("MoonStar",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}],["path",{d:"M19 3v4",key:"vgv24u"}],["path",{d:"M21 5h-4",key:"1wcg1f"}]]),Nw=Y("Nut",[["path",{d:"M12 4V2",key:"1k5q1u"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4",key:"1tgyif"}],["path",{d:"M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z",key:"tnsqj"}]]),kr=Y("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]),Cw=Y("Paintbrush",[["path",{d:"M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z",key:"m6k5sh"}],["path",{d:"M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7",key:"arzq70"}],["path",{d:"M14.5 17.5 4.5 15",key:"s7fvrz"}]]),Uu=Y("PawPrint",[["circle",{cx:"11",cy:"4",r:"2",key:"vol9p0"}],["circle",{cx:"18",cy:"8",r:"2",key:"17gozi"}],["circle",{cx:"20",cy:"16",r:"2",key:"1v9bxh"}],["path",{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z",key:"1ydw1z"}]]),tp=Y("Pencil",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]),zw=Y("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]),Pw=Y("Plane",[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]]),Lw=Y("PlugZap",[["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m18 3-4 4h6l-4 4",key:"16psg9"}]]),ly=Y("PlusCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]),oc=Y("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),Ew=Y("Printer",[["polyline",{points:"6 9 6 2 18 2 18 9",key:"1306q4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["rect",{width:"12",height:"8",x:"6",y:"14",key:"5ipwut"}]]),Mw=Y("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]),Tw=Y("Ribbon",[["path",{d:"M17.75 9.01c-.52 2.08-1.83 3.64-3.18 5.49l-2.6 3.54-2.97 4-3.5-2.54 3.85-4.97c-1.86-2.61-2.8-3.77-3.16-5.44",key:"1njedg"}],["path",{d:"M17.75 9.01A7 7 0 0 0 6.2 9.1C6.06 8.5 6 7.82 6 7c0-3.5 2.83-5 5.98-5C15.24 2 18 3.5 18 7c0 .73-.09 1.4-.25 2.01Z",key:"10len7"}],["path",{d:"m9.35 14.53 2.64-3.31",key:"1wfi09"}],["path",{d:"m11.97 18.04 2.99 4 3.54-2.54-3.93-5",key:"1ezyge"}],["path",{d:"M14 8c0 1-1 2-2.01 3.22C11 10 10 9 10 8a2 2 0 1 1 4 0",key:"aw0zq5"}]]),Aw=Y("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]),Iw=Y("School",[["path",{d:"m4 6 8-4 8 4",key:"1q0ilc"}],["path",{d:"m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2",key:"1vwozw"}],["path",{d:"M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4",key:"cpkuc4"}],["path",{d:"M18 5v17",key:"1sw6gf"}],["path",{d:"M6 5v17",key:"1xfsm0"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}]]),Mo=Y("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]),wf=Y("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),cy=Y("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]),Rw=Y("ShieldAlert",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]),Hu=Y("Shirt",[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]),Zu=Y("ShoppingBasket",[["path",{d:"m5 11 4-7",key:"116ra9"}],["path",{d:"m19 11-4-7",key:"cnml18"}],["path",{d:"M2 11h20",key:"3eubbj"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4",key:"1x2lvw"}],["path",{d:"m9 11 1 9",key:"1ojof7"}],["path",{d:"M4.5 15.5h15",key:"13mye1"}],["path",{d:"m15 11-1 9",key:"5wnq3a"}]]),Jn=Y("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]),Rl=Y("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]),jf=Y("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]),Ow=Y("Smile",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]),Bw=Y("Soup",[["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z",key:"4rw317"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M19.5 12 22 6",key:"shfsr5"}],["path",{d:"M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62",key:"rpc6vp"}],["path",{d:"M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62",key:"1lf63m"}],["path",{d:"M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62",key:"97tijn"}]]),yn=Y("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]),$u=Y("Sprout",[["path",{d:"M7 20h10",key:"e6iznv"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10",key:"161w41"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",key:"9gtqwd"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",key:"bkxnd2"}]]),qu=Y("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]),dy=Y("Stethoscope",[["path",{d:"M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3",key:"1jd90r"}],["path",{d:"M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4",key:"126ukv"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]]),zt=Y("Store",[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7",key:"jon5kx"}]]),uy=Y("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),Ol=Y("Tag",[["path",{d:"M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z",key:"14b2ls"}],["path",{d:"M7 7h.01",key:"7u93v4"}]]),kf=Y("Tags",[["path",{d:"M9 5H2v7l6.29 6.29c.94.94 2.48.94 3.42 0l3.58-3.58c.94-.94.94-2.48 0-3.42L9 5Z",key:"gt587u"}],["path",{d:"M6 9.01V9",key:"1flxpt"}],["path",{d:"m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19",key:"1cbfv1"}]]),Qr=Y("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]),Fw=Y("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]),Dw=Y("Truck",[["path",{d:"M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11",key:"hs4xqm"}],["path",{d:"M14 9h4l4 4v4c0 .6-.4 1-1 1h-2",key:"11fp61"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}]]),hy=Y("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]),Ww=Y("UserCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]]),Uw=Y("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]),Bl=Y("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),co=Y("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),py=Y("UtensilsCrossed",[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",key:"n7qcjb"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",key:"d0u48b"}],["path",{d:"m2.1 21.8 6.4-6.3",key:"yn04lh"}],["path",{d:"m19 5-7 7",key:"194lzd"}]]),Hw=Y("Warehouse",[["path",{d:"M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z",key:"gksnxg"}],["path",{d:"M6 18h12",key:"9pbo8z"}],["path",{d:"M6 14h12",key:"4cwo0f"}],["rect",{width:"12",height:"12",x:"6",y:"10",key:"apd30q"}]]),Zw=Y("Wheat",[["path",{d:"M2 22 16 8",key:"60hf96"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1rdhi6"}],["path",{d:"M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1sdzmb"}],["path",{d:"M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"eoatbi"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z",key:"19rau1"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"tc8ph9"}],["path",{d:"M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"2m8kc5"}],["path",{d:"M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"vex3ng"}]]),$w=Y("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]),qw=Y("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function my(e,t){return function(){return e.apply(t,arguments)}}const{toString:Vw}=Object.prototype,{getPrototypeOf:np}=Object,{iterator:sc,toStringTag:fy}=Symbol,lc=(e=>t=>{const n=Vw.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),bn=e=>(e=e.toLowerCase(),t=>lc(t)===e),cc=e=>t=>typeof t===e,{isArray:xa}=Array,la=cc("undefined");function Wo(e){return e!==null&&!la(e)&&e.constructor!==null&&!la(e.constructor)&&Ft(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const gy=bn("ArrayBuffer");function Gw(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&gy(e.buffer),t}const Kw=cc("string"),Ft=cc("function"),xy=cc("number"),Uo=e=>e!==null&&typeof e=="object",Qw=e=>e===!0||e===!1,al=e=>{if(lc(e)!=="object")return!1;const t=np(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(fy in e)&&!(sc in e)},Yw=e=>{if(!Uo(e)||Wo(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},Jw=bn("Date"),Xw=bn("File"),e5=e=>!!(e&&typeof e.uri<"u"),t5=e=>e&&typeof e.getParts<"u",n5=bn("Blob"),r5=bn("FileList"),i5=e=>Uo(e)&&Ft(e.pipe);function a5(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Sf=a5(),Nf=typeof Sf.FormData<"u"?Sf.FormData:void 0,o5=e=>{let t;return e&&(Nf&&e instanceof Nf||Ft(e.append)&&((t=lc(e))==="formdata"||t==="object"&&Ft(e.toString)&&e.toString()==="[object FormData]"))},s5=bn("URLSearchParams"),[l5,c5,d5,u5]=["ReadableStream","Request","Response","Headers"].map(bn),h5=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ho(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let a,o;if(typeof e!="object"&&(e=[e]),xa(e))for(a=0,o=e.length;a<o;a++)t.call(null,e[a],a,e);else{if(Wo(e))return;const l=n?Object.getOwnPropertyNames(e):Object.keys(e),d=l.length;let h;for(a=0;a<d;a++)h=l[a],t.call(null,e[h],h,e)}}function yy(e,t){if(Wo(e))return null;t=t.toLowerCase();const n=Object.keys(e);let a=n.length,o;for(;a-- >0;)if(o=n[a],t===o.toLowerCase())return o;return null}const Vr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,vy=e=>!la(e)&&e!==Vr;function Vu(){const{caseless:e,skipUndefined:t}=vy(this)&&this||{},n={},a=(o,l)=>{if(l==="__proto__"||l==="constructor"||l==="prototype")return;const d=e&&yy(n,l)||l;al(n[d])&&al(o)?n[d]=Vu(n[d],o):al(o)?n[d]=Vu({},o):xa(o)?n[d]=o.slice():(!t||!la(o))&&(n[d]=o)};for(let o=0,l=arguments.length;o<l;o++)arguments[o]&&Ho(arguments[o],a);return n}const p5=(e,t,n,{allOwnKeys:a}={})=>(Ho(t,(o,l)=>{n&&Ft(o)?Object.defineProperty(e,l,{value:my(o,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,l,{value:o,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:a}),e),m5=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),f5=(e,t,n,a)=>{e.prototype=Object.create(t.prototype,a),Object.defineProperty(e.prototype,"constructor",{value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},g5=(e,t,n,a)=>{let o,l,d;const h={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),l=o.length;l-- >0;)d=o[l],(!a||a(d,e,t))&&!h[d]&&(t[d]=e[d],h[d]=!0);e=n!==!1&&np(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},x5=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const a=e.indexOf(t,n);return a!==-1&&a===n},y5=e=>{if(!e)return null;if(xa(e))return e;let t=e.length;if(!xy(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},v5=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&np(Uint8Array)),b5=(e,t)=>{const a=(e&&e[sc]).call(e);let o;for(;(o=a.next())&&!o.done;){const l=o.value;t.call(e,l[0],l[1])}},_5=(e,t)=>{let n;const a=[];for(;(n=e.exec(t))!==null;)a.push(n);return a},w5=bn("HTMLFormElement"),j5=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,a,o){return a.toUpperCase()+o}),Cf=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),k5=bn("RegExp"),by=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),a={};Ho(n,(o,l)=>{let d;(d=t(o,l,e))!==!1&&(a[l]=d||o)}),Object.defineProperties(e,a)},S5=e=>{by(e,(t,n)=>{if(Ft(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const a=e[n];if(Ft(a)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},N5=(e,t)=>{const n={},a=o=>{o.forEach(l=>{n[l]=!0})};return xa(e)?a(e):a(String(e).split(t)),n},C5=()=>{},z5=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function P5(e){return!!(e&&Ft(e.append)&&e[fy]==="FormData"&&e[sc])}const L5=e=>{const t=new Array(10),n=(a,o)=>{if(Uo(a)){if(t.indexOf(a)>=0)return;if(Wo(a))return a;if(!("toJSON"in a)){t[o]=a;const l=xa(a)?[]:{};return Ho(a,(d,h)=>{const u=n(d,o+1);!la(u)&&(l[h]=u)}),t[o]=void 0,l}}return a};return n(e,0)},E5=bn("AsyncFunction"),M5=e=>e&&(Uo(e)||Ft(e))&&Ft(e.then)&&Ft(e.catch),_y=((e,t)=>e?setImmediate:t?((n,a)=>(Vr.addEventListener("message",({source:o,data:l})=>{o===Vr&&l===n&&a.length&&a.shift()()},!1),o=>{a.push(o),Vr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Ft(Vr.postMessage)),T5=typeof queueMicrotask<"u"?queueMicrotask.bind(Vr):typeof process<"u"&&process.nextTick||_y,A5=e=>e!=null&&Ft(e[sc]),q={isArray:xa,isArrayBuffer:gy,isBuffer:Wo,isFormData:o5,isArrayBufferView:Gw,isString:Kw,isNumber:xy,isBoolean:Qw,isObject:Uo,isPlainObject:al,isEmptyObject:Yw,isReadableStream:l5,isRequest:c5,isResponse:d5,isHeaders:u5,isUndefined:la,isDate:Jw,isFile:Xw,isReactNativeBlob:e5,isReactNative:t5,isBlob:n5,isRegExp:k5,isFunction:Ft,isStream:i5,isURLSearchParams:s5,isTypedArray:v5,isFileList:r5,forEach:Ho,merge:Vu,extend:p5,trim:h5,stripBOM:m5,inherits:f5,toFlatObject:g5,kindOf:lc,kindOfTest:bn,endsWith:x5,toArray:y5,forEachEntry:b5,matchAll:_5,isHTMLForm:w5,hasOwnProperty:Cf,hasOwnProp:Cf,reduceDescriptors:by,freezeMethods:S5,toObjectSet:N5,toCamelCase:j5,noop:C5,toFiniteNumber:z5,findKey:yy,global:Vr,isContextDefined:vy,isSpecCompliantForm:P5,toJSONObject:L5,isAsyncFn:E5,isThenable:M5,setImmediate:_y,asap:T5,isIterable:A5};let be=class wy extends Error{static from(t,n,a,o,l,d){const h=new wy(t.message,n||t.code,a,o,l);return h.cause=t,h.name=t.name,t.status!=null&&h.status==null&&(h.status=t.status),d&&Object.assign(h,d),h}constructor(t,n,a,o,l){super(t),Object.defineProperty(this,"message",{value:t,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),a&&(this.config=a),o&&(this.request=o),l&&(this.response=l,this.status=l.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:q.toJSONObject(this.config),code:this.code,status:this.status}}};be.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";be.ERR_BAD_OPTION="ERR_BAD_OPTION";be.ECONNABORTED="ECONNABORTED";be.ETIMEDOUT="ETIMEDOUT";be.ERR_NETWORK="ERR_NETWORK";be.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";be.ERR_DEPRECATED="ERR_DEPRECATED";be.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";be.ERR_BAD_REQUEST="ERR_BAD_REQUEST";be.ERR_CANCELED="ERR_CANCELED";be.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";be.ERR_INVALID_URL="ERR_INVALID_URL";const I5=null;function Gu(e){return q.isPlainObject(e)||q.isArray(e)}function jy(e){return q.endsWith(e,"[]")?e.slice(0,-2):e}function Nd(e,t,n){return e?e.concat(t).map(function(o,l){return o=jy(o),!n&&l?"["+o+"]":o}).join(n?".":""):t}function R5(e){return q.isArray(e)&&!e.some(Gu)}const O5=q.toFlatObject(q,{},null,function(t){return/^is[A-Z]/.test(t)});function dc(e,t,n){if(!q.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=q.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(z,C){return!q.isUndefined(C[z])});const a=n.metaTokens,o=n.visitor||y,l=n.dots,d=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&q.isSpecCompliantForm(t);if(!q.isFunction(o))throw new TypeError("visitor must be a function");function f(b){if(b===null)return"";if(q.isDate(b))return b.toISOString();if(q.isBoolean(b))return b.toString();if(!u&&q.isBlob(b))throw new be("Blob is not supported. Use a Buffer instead.");return q.isArrayBuffer(b)||q.isTypedArray(b)?u&&typeof Blob=="function"?new Blob([b]):Buffer.from(b):b}function y(b,z,C){let N=b;if(q.isReactNative(t)&&q.isReactNativeBlob(b))return t.append(Nd(C,z,l),f(b)),!1;if(b&&!C&&typeof b=="object"){if(q.endsWith(z,"{}"))z=a?z:z.slice(0,-2),b=JSON.stringify(b);else if(q.isArray(b)&&R5(b)||(q.isFileList(b)||q.endsWith(z,"[]"))&&(N=q.toArray(b)))return z=jy(z),N.forEach(function(S,j){!(q.isUndefined(S)||S===null)&&t.append(d===!0?Nd([z],j,l):d===null?z:z+"[]",f(S))}),!1}return Gu(b)?!0:(t.append(Nd(C,z,l),f(b)),!1)}const x=[],v=Object.assign(O5,{defaultVisitor:y,convertValue:f,isVisitable:Gu});function _(b,z){if(!q.isUndefined(b)){if(x.indexOf(b)!==-1)throw Error("Circular reference detected in "+z.join("."));x.push(b),q.forEach(b,function(N,w){(!(q.isUndefined(N)||N===null)&&o.call(t,N,q.isString(w)?w.trim():w,z,v))===!0&&_(N,z?z.concat(w):[w])}),x.pop()}}if(!q.isObject(e))throw new TypeError("data must be an object");return _(e),t}function zf(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(a){return t[a]})}function rp(e,t){this._pairs=[],e&&dc(e,this,t)}const ky=rp.prototype;ky.append=function(t,n){this._pairs.push([t,n])};ky.toString=function(t){const n=t?function(a){return t.call(this,a,zf)}:zf;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function B5(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Sy(e,t,n){if(!t)return e;const a=n&&n.encode||B5,o=q.isFunction(n)?{serialize:n}:n,l=o&&o.serialize;let d;if(l?d=l(t,o):d=q.isURLSearchParams(t)?t.toString():new rp(t,o).toString(a),d){const h=e.indexOf("#");h!==-1&&(e=e.slice(0,h)),e+=(e.indexOf("?")===-1?"?":"&")+d}return e}class Pf{constructor(){this.handlers=[]}use(t,n,a){return this.handlers.push({fulfilled:t,rejected:n,synchronous:a?a.synchronous:!1,runWhen:a?a.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){q.forEach(this.handlers,function(a){a!==null&&t(a)})}}const ip={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},F5=typeof URLSearchParams<"u"?URLSearchParams:rp,D5=typeof FormData<"u"?FormData:null,W5=typeof Blob<"u"?Blob:null,U5={isBrowser:!0,classes:{URLSearchParams:F5,FormData:D5,Blob:W5},protocols:["http","https","file","blob","url","data"]},ap=typeof window<"u"&&typeof document<"u",Ku=typeof navigator=="object"&&navigator||void 0,H5=ap&&(!Ku||["ReactNative","NativeScript","NS"].indexOf(Ku.product)<0),Z5=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",$5=ap&&window.location.href||"http://localhost",q5=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ap,hasStandardBrowserEnv:H5,hasStandardBrowserWebWorkerEnv:Z5,navigator:Ku,origin:$5},Symbol.toStringTag,{value:"Module"})),_t={...q5,...U5};function V5(e,t){return dc(e,new _t.classes.URLSearchParams,{visitor:function(n,a,o,l){return _t.isNode&&q.isBuffer(n)?(this.append(a,n.toString("base64")),!1):l.defaultVisitor.apply(this,arguments)},...t})}function G5(e){return q.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function K5(e){const t={},n=Object.keys(e);let a;const o=n.length;let l;for(a=0;a<o;a++)l=n[a],t[l]=e[l];return t}function Ny(e){function t(n,a,o,l){let d=n[l++];if(d==="__proto__")return!0;const h=Number.isFinite(+d),u=l>=n.length;return d=!d&&q.isArray(o)?o.length:d,u?(q.hasOwnProp(o,d)?o[d]=[o[d],a]:o[d]=a,!h):((!o[d]||!q.isObject(o[d]))&&(o[d]=[]),t(n,a,o[d],l)&&q.isArray(o[d])&&(o[d]=K5(o[d])),!h)}if(q.isFormData(e)&&q.isFunction(e.entries)){const n={};return q.forEachEntry(e,(a,o)=>{t(G5(a),o,n,0)}),n}return null}function Q5(e,t,n){if(q.isString(e))try{return(t||JSON.parse)(e),q.trim(e)}catch(a){if(a.name!=="SyntaxError")throw a}return(n||JSON.stringify)(e)}const Zo={transitional:ip,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const a=n.getContentType()||"",o=a.indexOf("application/json")>-1,l=q.isObject(t);if(l&&q.isHTMLForm(t)&&(t=new FormData(t)),q.isFormData(t))return o?JSON.stringify(Ny(t)):t;if(q.isArrayBuffer(t)||q.isBuffer(t)||q.isStream(t)||q.isFile(t)||q.isBlob(t)||q.isReadableStream(t))return t;if(q.isArrayBufferView(t))return t.buffer;if(q.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let h;if(l){if(a.indexOf("application/x-www-form-urlencoded")>-1)return V5(t,this.formSerializer).toString();if((h=q.isFileList(t))||a.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return dc(h?{"files[]":t}:t,u&&new u,this.formSerializer)}}return l||o?(n.setContentType("application/json",!1),Q5(t)):t}],transformResponse:[function(t){const n=this.transitional||Zo.transitional,a=n&&n.forcedJSONParsing,o=this.responseType==="json";if(q.isResponse(t)||q.isReadableStream(t))return t;if(t&&q.isString(t)&&(a&&!this.responseType||o)){const d=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t,this.parseReviver)}catch(h){if(d)throw h.name==="SyntaxError"?be.from(h,be.ERR_BAD_RESPONSE,this,null,this.response):h}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:_t.classes.FormData,Blob:_t.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};q.forEach(["delete","get","head","post","put","patch"],e=>{Zo.headers[e]={}});const Y5=q.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),J5=e=>{const t={};let n,a,o;return e&&e.split(`
`).forEach(function(d){o=d.indexOf(":"),n=d.substring(0,o).trim().toLowerCase(),a=d.substring(o+1).trim(),!(!n||t[n]&&Y5[n])&&(n==="set-cookie"?t[n]?t[n].push(a):t[n]=[a]:t[n]=t[n]?t[n]+", "+a:a)}),t},Lf=Symbol("internals");function Ha(e){return e&&String(e).trim().toLowerCase()}function ol(e){return e===!1||e==null?e:q.isArray(e)?e.map(ol):String(e).replace(/[\r\n]+$/,"")}function X5(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let a;for(;a=n.exec(e);)t[a[1]]=a[2];return t}const ej=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Cd(e,t,n,a,o){if(q.isFunction(a))return a.call(this,t,n);if(o&&(t=n),!!q.isString(t)){if(q.isString(a))return t.indexOf(a)!==-1;if(q.isRegExp(a))return a.test(t)}}function tj(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,a)=>n.toUpperCase()+a)}function nj(e,t){const n=q.toCamelCase(" "+t);["get","set","has"].forEach(a=>{Object.defineProperty(e,a+n,{value:function(o,l,d){return this[a].call(this,t,o,l,d)},configurable:!0})})}let Dt=class{constructor(t){t&&this.set(t)}set(t,n,a){const o=this;function l(h,u,f){const y=Ha(u);if(!y)throw new Error("header name must be a non-empty string");const x=q.findKey(o,y);(!x||o[x]===void 0||f===!0||f===void 0&&o[x]!==!1)&&(o[x||u]=ol(h))}const d=(h,u)=>q.forEach(h,(f,y)=>l(f,y,u));if(q.isPlainObject(t)||t instanceof this.constructor)d(t,n);else if(q.isString(t)&&(t=t.trim())&&!ej(t))d(J5(t),n);else if(q.isObject(t)&&q.isIterable(t)){let h={},u,f;for(const y of t){if(!q.isArray(y))throw TypeError("Object iterator must return a key-value pair");h[f=y[0]]=(u=h[f])?q.isArray(u)?[...u,y[1]]:[u,y[1]]:y[1]}d(h,n)}else t!=null&&l(n,t,a);return this}get(t,n){if(t=Ha(t),t){const a=q.findKey(this,t);if(a){const o=this[a];if(!n)return o;if(n===!0)return X5(o);if(q.isFunction(n))return n.call(this,o,a);if(q.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Ha(t),t){const a=q.findKey(this,t);return!!(a&&this[a]!==void 0&&(!n||Cd(this,this[a],a,n)))}return!1}delete(t,n){const a=this;let o=!1;function l(d){if(d=Ha(d),d){const h=q.findKey(a,d);h&&(!n||Cd(a,a[h],h,n))&&(delete a[h],o=!0)}}return q.isArray(t)?t.forEach(l):l(t),o}clear(t){const n=Object.keys(this);let a=n.length,o=!1;for(;a--;){const l=n[a];(!t||Cd(this,this[l],l,t,!0))&&(delete this[l],o=!0)}return o}normalize(t){const n=this,a={};return q.forEach(this,(o,l)=>{const d=q.findKey(a,l);if(d){n[d]=ol(o),delete n[l];return}const h=t?tj(l):String(l).trim();h!==l&&delete n[l],n[h]=ol(o),a[h]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return q.forEach(this,(a,o)=>{a!=null&&a!==!1&&(n[o]=t&&q.isArray(a)?a.join(", "):a)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const a=new this(t);return n.forEach(o=>a.set(o)),a}static accessor(t){const a=(this[Lf]=this[Lf]={accessors:{}}).accessors,o=this.prototype;function l(d){const h=Ha(d);a[h]||(nj(o,d),a[h]=!0)}return q.isArray(t)?t.forEach(l):l(t),this}};Dt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);q.reduceDescriptors(Dt.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(a){this[n]=a}}});q.freezeMethods(Dt);function zd(e,t){const n=this||Zo,a=t||n,o=Dt.from(a.headers);let l=a.data;return q.forEach(e,function(h){l=h.call(n,l,o.normalize(),t?t.status:void 0)}),o.normalize(),l}function Cy(e){return!!(e&&e.__CANCEL__)}let $o=class extends be{constructor(t,n,a){super(t??"canceled",be.ERR_CANCELED,n,a),this.name="CanceledError",this.__CANCEL__=!0}};function zy(e,t,n){const a=n.config.validateStatus;!n.status||!a||a(n.status)?e(n):t(new be("Request failed with status code "+n.status,[be.ERR_BAD_REQUEST,be.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function rj(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function ij(e,t){e=e||10;const n=new Array(e),a=new Array(e);let o=0,l=0,d;return t=t!==void 0?t:1e3,function(u){const f=Date.now(),y=a[l];d||(d=f),n[o]=u,a[o]=f;let x=l,v=0;for(;x!==o;)v+=n[x++],x=x%e;if(o=(o+1)%e,o===l&&(l=(l+1)%e),f-d<t)return;const _=y&&f-y;return _?Math.round(v*1e3/_):void 0}}function aj(e,t){let n=0,a=1e3/t,o,l;const d=(f,y=Date.now())=>{n=y,o=null,l&&(clearTimeout(l),l=null),e(...f)};return[(...f)=>{const y=Date.now(),x=y-n;x>=a?d(f,y):(o=f,l||(l=setTimeout(()=>{l=null,d(o)},a-x)))},()=>o&&d(o)]}const Fl=(e,t,n=3)=>{let a=0;const o=ij(50,250);return aj(l=>{const d=l.loaded,h=l.lengthComputable?l.total:void 0,u=d-a,f=o(u),y=d<=h;a=d;const x={loaded:d,total:h,progress:h?d/h:void 0,bytes:u,rate:f||void 0,estimated:f&&h&&y?(h-d)/f:void 0,event:l,lengthComputable:h!=null,[t?"download":"upload"]:!0};e(x)},n)},Ef=(e,t)=>{const n=e!=null;return[a=>t[0]({lengthComputable:n,total:e,loaded:a}),t[1]]},Mf=e=>(...t)=>q.asap(()=>e(...t)),oj=_t.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,_t.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(_t.origin),_t.navigator&&/(msie|trident)/i.test(_t.navigator.userAgent)):()=>!0,sj=_t.hasStandardBrowserEnv?{write(e,t,n,a,o,l,d){if(typeof document>"u")return;const h=[`${e}=${encodeURIComponent(t)}`];q.isNumber(n)&&h.push(`expires=${new Date(n).toUTCString()}`),q.isString(a)&&h.push(`path=${a}`),q.isString(o)&&h.push(`domain=${o}`),l===!0&&h.push("secure"),q.isString(d)&&h.push(`SameSite=${d}`),document.cookie=h.join("; ")},read(e){if(typeof document>"u")return null;const t=document.cookie.match(new RegExp("(?:^|; )"+e+"=([^;]*)"));return t?decodeURIComponent(t[1]):null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function lj(e){return typeof e!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function cj(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Py(e,t,n){let a=!lj(t);return e&&(a||n==!1)?cj(e,t):t}const Tf=e=>e instanceof Dt?{...e}:e;function ii(e,t){t=t||{};const n={};function a(f,y,x,v){return q.isPlainObject(f)&&q.isPlainObject(y)?q.merge.call({caseless:v},f,y):q.isPlainObject(y)?q.merge({},y):q.isArray(y)?y.slice():y}function o(f,y,x,v){if(q.isUndefined(y)){if(!q.isUndefined(f))return a(void 0,f,x,v)}else return a(f,y,x,v)}function l(f,y){if(!q.isUndefined(y))return a(void 0,y)}function d(f,y){if(q.isUndefined(y)){if(!q.isUndefined(f))return a(void 0,f)}else return a(void 0,y)}function h(f,y,x){if(x in t)return a(f,y);if(x in e)return a(void 0,f)}const u={url:l,method:l,data:l,baseURL:d,transformRequest:d,transformResponse:d,paramsSerializer:d,timeout:d,timeoutMessage:d,withCredentials:d,withXSRFToken:d,adapter:d,responseType:d,xsrfCookieName:d,xsrfHeaderName:d,onUploadProgress:d,onDownloadProgress:d,decompress:d,maxContentLength:d,maxBodyLength:d,beforeRedirect:d,transport:d,httpAgent:d,httpsAgent:d,cancelToken:d,socketPath:d,responseEncoding:d,validateStatus:h,headers:(f,y,x)=>o(Tf(f),Tf(y),x,!0)};return q.forEach(Object.keys({...e,...t}),function(y){if(y==="__proto__"||y==="constructor"||y==="prototype")return;const x=q.hasOwnProp(u,y)?u[y]:o,v=x(e[y],t[y],y);q.isUndefined(v)&&x!==h||(n[y]=v)}),n}const Ly=e=>{const t=ii({},e);let{data:n,withXSRFToken:a,xsrfHeaderName:o,xsrfCookieName:l,headers:d,auth:h}=t;if(t.headers=d=Dt.from(d),t.url=Sy(Py(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),h&&d.set("Authorization","Basic "+btoa((h.username||"")+":"+(h.password?unescape(encodeURIComponent(h.password)):""))),q.isFormData(n)){if(_t.hasStandardBrowserEnv||_t.hasStandardBrowserWebWorkerEnv)d.setContentType(void 0);else if(q.isFunction(n.getHeaders)){const u=n.getHeaders(),f=["content-type","content-length"];Object.entries(u).forEach(([y,x])=>{f.includes(y.toLowerCase())&&d.set(y,x)})}}if(_t.hasStandardBrowserEnv&&(a&&q.isFunction(a)&&(a=a(t)),a||a!==!1&&oj(t.url))){const u=o&&l&&sj.read(l);u&&d.set(o,u)}return t},dj=typeof XMLHttpRequest<"u",uj=dj&&function(e){return new Promise(function(n,a){const o=Ly(e);let l=o.data;const d=Dt.from(o.headers).normalize();let{responseType:h,onUploadProgress:u,onDownloadProgress:f}=o,y,x,v,_,b;function z(){_&&_(),b&&b(),o.cancelToken&&o.cancelToken.unsubscribe(y),o.signal&&o.signal.removeEventListener("abort",y)}let C=new XMLHttpRequest;C.open(o.method.toUpperCase(),o.url,!0),C.timeout=o.timeout;function N(){if(!C)return;const S=Dt.from("getAllResponseHeaders"in C&&C.getAllResponseHeaders()),E={data:!h||h==="text"||h==="json"?C.responseText:C.response,status:C.status,statusText:C.statusText,headers:S,config:e,request:C};zy(function(P){n(P),z()},function(P){a(P),z()},E),C=null}"onloadend"in C?C.onloadend=N:C.onreadystatechange=function(){!C||C.readyState!==4||C.status===0&&!(C.responseURL&&C.responseURL.indexOf("file:")===0)||setTimeout(N)},C.onabort=function(){C&&(a(new be("Request aborted",be.ECONNABORTED,e,C)),C=null)},C.onerror=function(j){const E=j&&j.message?j.message:"Network Error",M=new be(E,be.ERR_NETWORK,e,C);M.event=j||null,a(M),C=null},C.ontimeout=function(){let j=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const E=o.transitional||ip;o.timeoutErrorMessage&&(j=o.timeoutErrorMessage),a(new be(j,E.clarifyTimeoutError?be.ETIMEDOUT:be.ECONNABORTED,e,C)),C=null},l===void 0&&d.setContentType(null),"setRequestHeader"in C&&q.forEach(d.toJSON(),function(j,E){C.setRequestHeader(E,j)}),q.isUndefined(o.withCredentials)||(C.withCredentials=!!o.withCredentials),h&&h!=="json"&&(C.responseType=o.responseType),f&&([v,b]=Fl(f,!0),C.addEventListener("progress",v)),u&&C.upload&&([x,_]=Fl(u),C.upload.addEventListener("progress",x),C.upload.addEventListener("loadend",_)),(o.cancelToken||o.signal)&&(y=S=>{C&&(a(!S||S.type?new $o(null,e,C):S),C.abort(),C=null)},o.cancelToken&&o.cancelToken.subscribe(y),o.signal&&(o.signal.aborted?y():o.signal.addEventListener("abort",y)));const w=rj(o.url);if(w&&_t.protocols.indexOf(w)===-1){a(new be("Unsupported protocol "+w+":",be.ERR_BAD_REQUEST,e));return}C.send(l||null)})},hj=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let a=new AbortController,o;const l=function(f){if(!o){o=!0,h();const y=f instanceof Error?f:this.reason;a.abort(y instanceof be?y:new $o(y instanceof Error?y.message:y))}};let d=t&&setTimeout(()=>{d=null,l(new be(`timeout of ${t}ms exceeded`,be.ETIMEDOUT))},t);const h=()=>{e&&(d&&clearTimeout(d),d=null,e.forEach(f=>{f.unsubscribe?f.unsubscribe(l):f.removeEventListener("abort",l)}),e=null)};e.forEach(f=>f.addEventListener("abort",l));const{signal:u}=a;return u.unsubscribe=()=>q.asap(h),u}},pj=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let a=0,o;for(;a<n;)o=a+t,yield e.slice(a,o),a=o},mj=async function*(e,t){for await(const n of fj(e))yield*pj(n,t)},fj=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:a}=await t.read();if(n)break;yield a}}finally{await t.cancel()}},Af=(e,t,n,a)=>{const o=mj(e,t);let l=0,d,h=u=>{d||(d=!0,a&&a(u))};return new ReadableStream({async pull(u){try{const{done:f,value:y}=await o.next();if(f){h(),u.close();return}let x=y.byteLength;if(n){let v=l+=x;n(v)}u.enqueue(new Uint8Array(y))}catch(f){throw h(f),f}},cancel(u){return h(u),o.return()}},{highWaterMark:2})},If=64*1024,{isFunction:Hs}=q,gj=(({Request:e,Response:t})=>({Request:e,Response:t}))(q.global),{ReadableStream:Rf,TextEncoder:Of}=q.global,Bf=(e,...t)=>{try{return!!e(...t)}catch{return!1}},xj=e=>{e=q.merge.call({skipUndefined:!0},gj,e);const{fetch:t,Request:n,Response:a}=e,o=t?Hs(t):typeof fetch=="function",l=Hs(n),d=Hs(a);if(!o)return!1;const h=o&&Hs(Rf),u=o&&(typeof Of=="function"?(b=>z=>b.encode(z))(new Of):async b=>new Uint8Array(await new n(b).arrayBuffer())),f=l&&h&&Bf(()=>{let b=!1;const z=new Rf,C=new n(_t.origin,{body:z,method:"POST",get duplex(){return b=!0,"half"}}).headers.has("Content-Type");return z.cancel(),b&&!C}),y=d&&h&&Bf(()=>q.isReadableStream(new a("").body)),x={stream:y&&(b=>b.body)};o&&["text","arrayBuffer","blob","formData","stream"].forEach(b=>{!x[b]&&(x[b]=(z,C)=>{let N=z&&z[b];if(N)return N.call(z);throw new be(`Response type '${b}' is not supported`,be.ERR_NOT_SUPPORT,C)})});const v=async b=>{if(b==null)return 0;if(q.isBlob(b))return b.size;if(q.isSpecCompliantForm(b))return(await new n(_t.origin,{method:"POST",body:b}).arrayBuffer()).byteLength;if(q.isArrayBufferView(b)||q.isArrayBuffer(b))return b.byteLength;if(q.isURLSearchParams(b)&&(b=b+""),q.isString(b))return(await u(b)).byteLength},_=async(b,z)=>{const C=q.toFiniteNumber(b.getContentLength());return C??v(z)};return async b=>{let{url:z,method:C,data:N,signal:w,cancelToken:S,timeout:j,onDownloadProgress:E,onUploadProgress:M,responseType:P,headers:O,withCredentials:I="same-origin",fetchOptions:F}=Ly(b),V=t||fetch;P=P?(P+"").toLowerCase():"text";let D=hj([w,S&&S.toAbortSignal()],j),ae=null;const oe=D&&D.unsubscribe&&(()=>{D.unsubscribe()});let Q;try{if(M&&f&&C!=="get"&&C!=="head"&&(Q=await _(O,N))!==0){let X=new n(z,{method:"POST",body:N,duplex:"half"}),H;if(q.isFormData(N)&&(H=X.headers.get("content-type"))&&O.setContentType(H),X.body){const[ue,T]=Ef(Q,Fl(Mf(M)));N=Af(X.body,If,ue,T)}}q.isString(I)||(I=I?"include":"omit");const J=l&&"credentials"in n.prototype,W={...F,signal:D,method:C.toUpperCase(),headers:O.normalize().toJSON(),body:N,duplex:"half",credentials:J?I:void 0};ae=l&&new n(z,W);let R=await(l?V(ae,F):V(z,W));const te=y&&(P==="stream"||P==="response");if(y&&(E||te&&oe)){const X={};["status","statusText","headers"].forEach(Z=>{X[Z]=R[Z]});const H=q.toFiniteNumber(R.headers.get("content-length")),[ue,T]=E&&Ef(H,Fl(Mf(E),!0))||[];R=new a(Af(R.body,If,ue,()=>{T&&T(),oe&&oe()}),X)}P=P||"text";let G=await x[q.findKey(x,P)||"text"](R,b);return!te&&oe&&oe(),await new Promise((X,H)=>{zy(X,H,{data:G,headers:Dt.from(R.headers),status:R.status,statusText:R.statusText,config:b,request:ae})})}catch(J){throw oe&&oe(),J&&J.name==="TypeError"&&/Load failed|fetch/i.test(J.message)?Object.assign(new be("Network Error",be.ERR_NETWORK,b,ae,J&&J.response),{cause:J.cause||J}):be.from(J,J&&J.code,b,ae,J&&J.response)}}},yj=new Map,Ey=e=>{let t=e&&e.env||{};const{fetch:n,Request:a,Response:o}=t,l=[a,o,n];let d=l.length,h=d,u,f,y=yj;for(;h--;)u=l[h],f=y.get(u),f===void 0&&y.set(u,f=h?new Map:xj(t)),y=f;return f};Ey();const op={http:I5,xhr:uj,fetch:{get:Ey}};q.forEach(op,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Ff=e=>`- ${e}`,vj=e=>q.isFunction(e)||e===null||e===!1;function bj(e,t){e=q.isArray(e)?e:[e];const{length:n}=e;let a,o;const l={};for(let d=0;d<n;d++){a=e[d];let h;if(o=a,!vj(a)&&(o=op[(h=String(a)).toLowerCase()],o===void 0))throw new be(`Unknown adapter '${h}'`);if(o&&(q.isFunction(o)||(o=o.get(t))))break;l[h||"#"+d]=o}if(!o){const d=Object.entries(l).map(([u,f])=>`adapter ${u} `+(f===!1?"is not supported by the environment":"is not available in the build"));let h=n?d.length>1?`since :
`+d.map(Ff).join(`
`):" "+Ff(d[0]):"as no adapter specified";throw new be("There is no suitable adapter to dispatch the request "+h,"ERR_NOT_SUPPORT")}return o}const My={getAdapter:bj,adapters:op};function Pd(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new $o(null,e)}function Df(e){return Pd(e),e.headers=Dt.from(e.headers),e.data=zd.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),My.getAdapter(e.adapter||Zo.adapter,e)(e).then(function(a){return Pd(e),a.data=zd.call(e,e.transformResponse,a),a.headers=Dt.from(a.headers),a},function(a){return Cy(a)||(Pd(e),a&&a.response&&(a.response.data=zd.call(e,e.transformResponse,a.response),a.response.headers=Dt.from(a.response.headers))),Promise.reject(a)})}const Ty="1.14.0",uc={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{uc[e]=function(a){return typeof a===e||"a"+(t<1?"n ":" ")+e}});const Wf={};uc.transitional=function(t,n,a){function o(l,d){return"[Axios v"+Ty+"] Transitional option '"+l+"'"+d+(a?". "+a:"")}return(l,d,h)=>{if(t===!1)throw new be(o(d," has been removed"+(n?" in "+n:"")),be.ERR_DEPRECATED);return n&&!Wf[d]&&(Wf[d]=!0,console.warn(o(d," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(l,d,h):!0}};uc.spelling=function(t){return(n,a)=>(console.warn(`${a} is likely a misspelling of ${t}`),!0)};function _j(e,t,n){if(typeof e!="object")throw new be("options must be an object",be.ERR_BAD_OPTION_VALUE);const a=Object.keys(e);let o=a.length;for(;o-- >0;){const l=a[o],d=t[l];if(d){const h=e[l],u=h===void 0||d(h,l,e);if(u!==!0)throw new be("option "+l+" must be "+u,be.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new be("Unknown option "+l,be.ERR_BAD_OPTION)}}const sl={assertOptions:_j,validators:uc},tn=sl.validators;let Yr=class{constructor(t){this.defaults=t||{},this.interceptors={request:new Pf,response:new Pf}}async request(t,n){try{return await this._request(t,n)}catch(a){if(a instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const l=o.stack?o.stack.replace(/^.+\n/,""):"";try{a.stack?l&&!String(a.stack).endsWith(l.replace(/^.+\n.+\n/,""))&&(a.stack+=`
`+l):a.stack=l}catch{}}throw a}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=ii(this.defaults,n);const{transitional:a,paramsSerializer:o,headers:l}=n;a!==void 0&&sl.assertOptions(a,{silentJSONParsing:tn.transitional(tn.boolean),forcedJSONParsing:tn.transitional(tn.boolean),clarifyTimeoutError:tn.transitional(tn.boolean),legacyInterceptorReqResOrdering:tn.transitional(tn.boolean)},!1),o!=null&&(q.isFunction(o)?n.paramsSerializer={serialize:o}:sl.assertOptions(o,{encode:tn.function,serialize:tn.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),sl.assertOptions(n,{baseUrl:tn.spelling("baseURL"),withXsrfToken:tn.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let d=l&&q.merge(l.common,l[n.method]);l&&q.forEach(["delete","get","head","post","put","patch","common"],b=>{delete l[b]}),n.headers=Dt.concat(d,l);const h=[];let u=!0;this.interceptors.request.forEach(function(z){if(typeof z.runWhen=="function"&&z.runWhen(n)===!1)return;u=u&&z.synchronous;const C=n.transitional||ip;C&&C.legacyInterceptorReqResOrdering?h.unshift(z.fulfilled,z.rejected):h.push(z.fulfilled,z.rejected)});const f=[];this.interceptors.response.forEach(function(z){f.push(z.fulfilled,z.rejected)});let y,x=0,v;if(!u){const b=[Df.bind(this),void 0];for(b.unshift(...h),b.push(...f),v=b.length,y=Promise.resolve(n);x<v;)y=y.then(b[x++],b[x++]);return y}v=h.length;let _=n;for(;x<v;){const b=h[x++],z=h[x++];try{_=b(_)}catch(C){z.call(this,C);break}}try{y=Df.call(this,_)}catch(b){return Promise.reject(b)}for(x=0,v=f.length;x<v;)y=y.then(f[x++],f[x++]);return y}getUri(t){t=ii(this.defaults,t);const n=Py(t.baseURL,t.url,t.allowAbsoluteUrls);return Sy(n,t.params,t.paramsSerializer)}};q.forEach(["delete","get","head","options"],function(t){Yr.prototype[t]=function(n,a){return this.request(ii(a||{},{method:t,url:n,data:(a||{}).data}))}});q.forEach(["post","put","patch"],function(t){function n(a){return function(l,d,h){return this.request(ii(h||{},{method:t,headers:a?{"Content-Type":"multipart/form-data"}:{},url:l,data:d}))}}Yr.prototype[t]=n(),Yr.prototype[t+"Form"]=n(!0)});let wj=class Ay{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(l){n=l});const a=this;this.promise.then(o=>{if(!a._listeners)return;let l=a._listeners.length;for(;l-- >0;)a._listeners[l](o);a._listeners=null}),this.promise.then=o=>{let l;const d=new Promise(h=>{a.subscribe(h),l=h}).then(o);return d.cancel=function(){a.unsubscribe(l)},d},t(function(l,d,h){a.reason||(a.reason=new $o(l,d,h),n(a.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=a=>{t.abort(a)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new Ay(function(o){t=o}),cancel:t}}};function jj(e){return function(n){return e.apply(null,n)}}function kj(e){return q.isObject(e)&&e.isAxiosError===!0}const Qu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Qu).forEach(([e,t])=>{Qu[t]=e});function Iy(e){const t=new Yr(e),n=my(Yr.prototype.request,t);return q.extend(n,Yr.prototype,t,{allOwnKeys:!0}),q.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return Iy(ii(e,o))},n}const nt=Iy(Zo);nt.Axios=Yr;nt.CanceledError=$o;nt.CancelToken=wj;nt.isCancel=Cy;nt.VERSION=Ty;nt.toFormData=dc;nt.AxiosError=be;nt.Cancel=nt.CanceledError;nt.all=function(t){return Promise.all(t)};nt.spread=jj;nt.isAxiosError=kj;nt.mergeConfig=ii;nt.AxiosHeaders=Dt;nt.formToJSON=e=>Ny(q.isHTMLForm(e)?new FormData(e):e);nt.getAdapter=My.getAdapter;nt.HttpStatusCode=Qu;nt.default=nt;const{Axios:VS,AxiosError:GS,CanceledError:KS,isCancel:QS,CancelToken:YS,VERSION:JS,all:XS,Cancel:e8,isAxiosError:t8,spread:n8,toFormData:r8,AxiosHeaders:i8,HttpStatusCode:a8,formToJSON:o8,getAdapter:s8,mergeConfig:l8}=nt;function Sj(){return"/api/"}const se=nt.create({baseURL:Sj()});se.interceptors.request.use(e=>{const t=localStorage.getItem("token");return t&&(e.headers.Authorization=`Bearer ${t}`),e});se.interceptors.response.use(e=>e,e=>(e.response&&e.response.status===401&&(window.location.pathname==="/login"||(localStorage.removeItem("token"),localStorage.removeItem("refresh"),localStorage.removeItem("is_primary_admin"),window.location.href="/login")),Promise.reject(e)));const Ry=async(e,t)=>{var a,o,l,d;const n=await se.post("users/login/",{username:e,password:t});return n.data.access&&(localStorage.setItem("token",n.data.access),localStorage.setItem("refresh",n.data.refresh),localStorage.setItem("is_verified",((a=n.data.user)==null?void 0:a.is_whatsapp_verified)??"true"),localStorage.setItem("user_type",((o=n.data.user)==null?void 0:o.user_type)||"shopper"),localStorage.setItem("user_name",((l=n.data.user)==null?void 0:l.username)||e||""),localStorage.setItem("is_primary_admin",(d=n.data.user)!=null&&d.is_primary_admin?"true":"false"),localStorage.removeItem("isGuest")),n.data},Nj=async e=>(await se.post("users/register/",e)).data,Oy=()=>{localStorage.removeItem("token"),localStorage.removeItem("refresh"),localStorage.removeItem("user_type"),localStorage.removeItem("user_name"),localStorage.removeItem("is_verified"),localStorage.removeItem("is_primary_admin"),localStorage.removeItem("isGuest")},Cj=({isOpen:e,onClose:t,title:n,message:a,type:o="info",onConfirm:l,inputValue:d,setInputValue:h,placeholder:u="أدخل القيمة هنا...",options:f,primaryActionLabel:y,onPrimaryAction:x})=>{if(!e)return null;const v=typeof window<"u"&&o==="select"&&window.matchMedia&&window.matchMedia("(max-width: 520px)").matches,_=()=>{o==="prompt"?l&&l(d):o==="select"?l&&l(null):l?l(!0):t()},b=Array.isArray(f)?f:[];return i.jsx("div",{className:"modal-overlay flex-center",children:i.jsxs("div",{className:"modal-content card animate-float",children:[i.jsxs("div",{className:"modal-header flex-center",children:[i.jsxs("div",{className:`modal-icon flex-center ${o}`,children:[o==="info"&&i.jsx(_w,{size:24}),o==="confirm"&&i.jsx(V_,{size:24}),o==="prompt"&&i.jsx(aw,{size:24}),o==="select"&&i.jsx(Jn,{size:24})]}),i.jsx("h3",{children:n}),i.jsx("button",{className:"close-btn",onClick:t,children:i.jsx(qw,{size:20})})]}),i.jsxs("div",{className:"modal-body",children:[i.jsx("p",{children:a}),o==="prompt"&&i.jsx("div",{className:"input-group",style:{marginTop:"15px"},children:i.jsx("input",{type:"text",value:d,onChange:z=>h(z.target.value),placeholder:u,autoFocus:!0})}),o==="select"&&i.jsx("div",{className:"modal-select-list",style:{marginTop:14},children:b.length===0?i.jsx("div",{style:{padding:"12px 14px",borderRadius:12,background:"var(--surface, #fdfdf9)",border:"1px solid var(--border, #e8e8e8)",color:"var(--text-secondary, #666)",lineHeight:1.6,fontWeight:700},children:"لا يوجد لديك أي سلال."}):b.map(z=>i.jsxs("button",{type:"button",className:"btn-secondary",onClick:()=>l&&l(z.value),style:{width:"100%",justifyContent:"space-between",display:"flex",alignItems:"center",gap:12,padding:"12px 14px",borderRadius:12,fontWeight:900},children:[i.jsx("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:z.label}),z.badge!=null?i.jsx("span",{style:{fontWeight:800,color:"var(--text-secondary)"},children:z.badge}):null]},z.id))})]}),i.jsxs("div",{className:"modal-footer flex-center",children:[(o==="confirm"||o==="prompt")&&i.jsx("button",{className:"btn-secondary",onClick:t,children:"إلغاء"}),o==="select"&&!v&&(y||x)?i.jsxs("button",{className:"btn-primary",type:"button",onClick:x||_,style:{display:"inline-flex",gap:8,alignItems:"center",justifyContent:"center"},children:[i.jsx(oc,{size:18}),y||"سلة جديدة"]}):o==="select"?null:i.jsx("button",{className:"btn-primary",onClick:_,children:o==="confirm"||o==="prompt"?"تأكيد":"حسناً"})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .modal-overlay.flex-center {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.4);
            backdrop-filter: blur(5px);
            z-index: 2000;
            padding: max(12px, env(safe-area-inset-top, 0px)) 16px max(12px, env(safe-area-inset-bottom, 0px));
            align-items: flex-end;
          }
          @media (min-height: 520px) {
            .modal-overlay.flex-center { align-items: center; }
          }
          .modal-content {
            width: 100%;
            max-width: min(450px, calc(100vw - 24px));
            max-height: min(90vh, calc(100dvh - 32px));
            overflow-y: auto;
            padding: 1.25rem;
            position: relative;
          }
          @media (min-width: 480px) {
            .modal-content { padding: 1.5rem; }
          }
          .modal-header {
            justify-content: space-between;
            margin-bottom: 20px;
            gap: 15px;
          }
          .modal-icon {
            width: 48px;
            height: 48px;
            border-radius: 16px;
            background: var(--surface);
            border: 1px solid var(--border);
          }
          .modal-icon.info { background: #E3F2FD; color: #1E88E5; }
          .modal-icon.confirm { background: rgba(255, 214, 10, 0.22); color: var(--secondary); border: 1px solid rgba(255, 214, 10, 0.45); }
          .modal-icon.prompt { background: #E8F5E9; color: #43A047; }
          .modal-icon.select { background: rgba(245, 192, 0, 0.18); color: var(--secondary); border: 1px solid rgba(245, 192, 0, 0.35); }
          
          .modal-header h3 { flex: 1; text-align: right; margin: 0; }
          .close-btn { background: none; border: none; cursor: pointer; color: #999; }
          
          .modal-body p { line-height: 1.6; color: #555; }

          .modal-select-list {
            display: grid;
            gap: 10px;
            max-height: min(52vh, 420px);
            overflow: auto;
            padding-right: 2px;
          }
          .modal-select-list::-webkit-scrollbar { width: 0; height: 0; }
          .modal-select-list { scrollbar-width: none; }
          
          .modal-footer {
            margin-top: 25px;
            gap: 10px;
            justify-content: flex-end;
            flex-wrap: wrap;
          }
          .modal-footer button { width: auto; min-width: min(100px, 40vw); flex: 1 1 auto; }
          @media (min-width: 400px) {
            .modal-footer button { flex: 0 1 auto; }
          }
          
          .animate-float {
            animation: modalIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          }
          @keyframes modalIn {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
        `}})]})})},zj=async()=>{},Pj=async()=>!1,Lj=async()=>null,Ej=async()=>null,By=m.createContext({showAlert:zj,showConfirm:Pj,showPrompt:Lj,showSelect:Ej}),Ue=()=>m.useContext(By),Mj=({children:e})=>{const[t,n]=m.useState({isOpen:!1,title:"",message:"",type:"info",onConfirm:null,inputValue:"",placeholder:"",options:[],primaryActionLabel:"",onPrimaryAction:null}),a=(u,f="تنبيه")=>new Promise(y=>{n({isOpen:!0,title:f,message:u,type:"info",onConfirm:()=>{y(!0),h()},onClose:()=>{y(!1),h()},inputValue:"",placeholder:""})}),o=(u,f="تأكيد")=>new Promise(y=>{n({isOpen:!0,title:f,message:u,type:"confirm",onConfirm:()=>{y(!0),h()},onClose:()=>{y(!1),h()},inputValue:"",placeholder:""})}),l=(u,f="",y="إدخال بيانات",x="")=>new Promise(v=>{n({isOpen:!0,title:y,message:u,type:"prompt",onConfirm:_=>{v(_),h()},onClose:()=>{v(null),h()},inputValue:x!=null?String(x):"",placeholder:f,options:[],primaryActionLabel:"",onPrimaryAction:null})}),d=(u,f="اختر",y=[],{primaryActionLabel:x="",primaryValue:v="__primary__"}={})=>new Promise(_=>{n({isOpen:!0,title:f,message:u,type:"select",options:y,primaryActionLabel:x,onPrimaryAction:()=>{_(v),h()},onConfirm:b=>{_(b),h()},onClose:()=>{_(null),h()},inputValue:"",placeholder:""})}),h=()=>{n(u=>({...u,isOpen:!1}))};return i.jsxs(By.Provider,{value:{showAlert:a,showConfirm:o,showPrompt:l,showSelect:d},children:[e,i.jsx(Cj,{...t,onClose:t.onClose||h,setInputValue:u=>n(f=>({...f,inputValue:u}))})]})},ui=async()=>(await se.get("stores/categories/")).data,ya=async()=>(await se.get("stores/community/categories/")).data,hc=async(e=null)=>{const t=e!=null&&String(e).trim()!==""?`?category=${encodeURIComponent(e)}`:"";return(await se.get(`stores/community/points/${t}`)).data},Tj=async e=>(await se.post("stores/community/points/submit/",e,{headers:{"Content-Type":"application/json"}})).data,Aj=async e=>{const t=e===""||e==null?"":`?status=${encodeURIComponent(e)}`;return(await se.get(`stores/admin/community-points/${t}`)).data},Fy=async e=>(await se.post("stores/admin/community-points/",e,{headers:{"Content-Type":"application/json"}})).data,Ij=async(e,t,n="")=>{const a={action:t};return n&&(a.rejection_reason=n),(await se.patch(`stores/admin/community-points/${e}/moderate/`,a,{headers:{"Content-Type":"application/json"}})).data},pc=async(e,t,n=null)=>{let a=`stores/stores/?lat=${e}&lng=${t}`;return n&&(a+=`&category=${n}`),(await se.get(a)).data},Rj=async e=>(await se.get(`stores/stores/${e}/`)).data,Oj=async(e,t)=>{const n=Number(e),a=Number(t);return(await se.post(`stores/stores/${n}/rate/`,{stars:a},{headers:{"Content-Type":"application/json"}})).data},Dy=async()=>(await se.get("orders/merchant-stats/")).data,sp=async()=>(await se.get("products/merchant/products/")).data,Bj=async e=>(await se.get(`products/merchant/products/${e}/`)).data,Fj=async e=>(await se.post("products/merchant/products/",e)).data,Wy=async(e,t)=>(await se.patch(`products/merchant/products/${e}/`,t)).data,Dj=async e=>(await se.delete(`products/merchant/products/${e}/`)).data,Wj=async()=>(await se.get("products/merchant/ads/")).data,Uj=async e=>(await se.post("products/merchant/ads/",e)).data,Hj=async(e,t)=>(await se.patch(`products/merchant/ads/${e}/`,t)).data,Zj=async e=>(await se.delete(`products/merchant/ads/${e}/`)).data,Uy=async()=>(await se.get("products/merchant/subscription/")).data,$j=async()=>(await se.get("products/merchant/subscription/renew/")).data,qj=async e=>(await se.post("products/merchant/subscription/renew/",e)).data,Vj=async()=>(await se.get("products/admin/pending-counts/")).data,Gj=async e=>{const t=e===""||e==null?"":`?status=${encodeURIComponent(e)}`;return(await se.get(`products/admin/ads/${t}`)).data},Kj=async e=>(await se.get(`products/admin/ads/${e}/`)).data,Hy=async(e,t)=>(await se.post(`products/admin/ads/${e}/set-status/`,{status:t})).data,Qj=async e=>{const t=e===""||e==null?"":`?status=${encodeURIComponent(e)}`;return(await se.get(`products/admin/subscription/renew/${t}`)).data},Yj=async e=>(await se.post(`products/admin/subscription/renew/${e}/approve/`)).data,Jj=async e=>(await se.post(`products/admin/subscription/renew/${e}/reject/`)).data,Xj=async()=>(await se.get("users/admin/accounts/")).data,ek=async e=>(await se.post("users/admin/accounts/",e)).data,tk=async(e,t)=>(await se.patch(`users/admin/accounts/${e}/`,{is_active:t})).data,nk=async()=>(await se.get("users/admin/metrics/")).data,rk=async()=>(await se.get("users/public/announcements/")).data,ik=async(e=null)=>{const t={};return e!=null&&String(e).trim()!==""&&(t.since_id=String(e)),(await se.get("users/admin/notifications/",{params:t})).data},ak=async()=>(await se.get("users/admin/announcements/")).data,ok=async e=>(await se.post("users/admin/announcements/",{message:e})).data,sk=async e=>(await se.delete(`users/admin/announcements/${e}/`)).data,lk=async({q:e="",from:t="",to:n="",method:a="",kind:o=""}={})=>{const l={};return e&&String(e).trim()!==""&&(l.q=String(e).trim()),t&&String(t).trim()!==""&&(l.from=String(t).trim()),n&&String(n).trim()!==""&&(l.to=String(n).trim()),a&&String(a).trim()!==""&&(l.method=String(a).trim()),o&&String(o).trim()!==""&&(l.kind=String(o).trim()),(await se.get("products/admin/finance/transfers/",{params:l})).data},ck=async(e="",t="")=>{const n={};return e!=null&&String(e).trim()!==""&&(n.q=String(e).trim()),t!=null&&String(t).trim()!==""&&(n.user_type=String(t).trim()),(await se.get("users/admin/users/",{params:n})).data},dk=async(e,t)=>(await se.patch(`users/admin/users/${e}/`,{is_active:t})).data,uk=async(e,t)=>{const n={};if(e!=null&&String(e).trim()!==""&&(n.q=String(e).trim()),t!=null&&String(t).trim()!==""){const o=Number(t);Number.isFinite(o)&&o>0&&(n.category=String(o))}return(await se.get("stores/admin/stores/",{params:n})).data},hk=async(e,t)=>(await se.patch(`stores/admin/stores/${e}/suspend/`,{is_suspended_by_admin:t})).data,pk=async()=>(await se.get("stores/admin/categories/")).data,mk=async({name:e,imageFile:t}={})=>{const n=new FormData;return n.append("name",e||""),t&&n.append("image",t),(await se.post("stores/admin/categories/",n)).data},fk=async e=>(await se.delete(`stores/admin/categories/${e}/`)).data,gk=async()=>(await se.get("stores/admin/community/categories/")).data,xk=async({name:e,slug:t="",description_hint:n="",sort_order:a=0,imageFile:o}={})=>{const l=new FormData;return l.append("name",e||""),t&&l.append("slug",t),n&&l.append("description_hint",n),a!=null&&l.append("sort_order",String(a)),o&&l.append("image",o),(await se.post("stores/admin/community/categories/",l)).data},yk=async e=>(await se.delete(`stores/admin/community/categories/${e}/`)).data,Zy=async()=>(await se.get("stores/merchant/profile/")).data,vk=async e=>{const t=e instanceof FormData?{}:void 0;return(await se.patch("stores/merchant/profile/",e,t)).data},Ji=async()=>(await se.get("orders/carts/")).data,$y=async e=>(await se.get(`orders/carts/${e}/`)).data,bk=async e=>{await se.delete(`orders/carts/${e}/`)},_k=async e=>{const t=`/api/orders/carts/share/${e}/`,n=localStorage.getItem("token");let o=await fetch(t,n?(l=>({headers:{Authorization:`Bearer ${n}`}}))():{});if(o.status===401&&n&&(o=await fetch(t)),!o.ok)throw new Error("shared cart fetch failed");return o.json()},mc=async e=>(await se.post("orders/carts/",{name:e})).data,wk=async(e,t)=>(await se.patch(`orders/carts/${e}/`,t)).data,jk=async e=>(await se.post("users/verify-whatsapp/",{code:e})).data,kk=async()=>(await se.post("users/resend-otp/")).data,Sk=async()=>{const e=await fetch("/api/users/app-open/",{method:"POST"});return e.ok?e.json():null},ca=async(e,t,n=1,a=null)=>{const o={cart:e,quantity:n};return t!=null&&t!==""&&(o.product=t),a!=null&&a!==""&&(o.sponsored_ad=a),(await se.post("orders/cart-items/",o)).data},Uf=async(e,t)=>(await se.patch(`orders/cart-items/${e}/`,t)).data,Nk=async e=>{await se.delete(`orders/cart-items/${e}/`)},qy=async(e=null)=>{const t=new URLSearchParams;if(e!=null&&e!==""){const o=Number(e);Number.isFinite(o)&&o>0&&t.set("category",String(o))}const n=t.toString()?`?${t.toString()}`:"";return(await se.get(`products/public/ads/${n}`)).data},To=async()=>(await se.get("products/user/favorites/")).data,uo=async(e,t=null)=>{const n={};return e!=null&&e!==""&&(n.product=e),t!=null&&t!==""&&(n.sponsored_ad=t),(await se.post("products/user/favorites/",n)).data},Vy=async()=>(await se.get("users/me/notices/")).data,Ck=async e=>(await se.patch("users/me/username/",{username:e})).data,zk=async({current_password:e,new_password:t})=>(await se.post("users/me/password/",{current_password:e,new_password:t})).data,Dl=async e=>(await se.delete(`products/user/favorites/${e}/`)).data,Gy=async()=>(await se.get("products/user/store-favorites/")).data,Pk=async e=>(await se.post("products/user/store-favorites/",{store:e})).data,Ky=async e=>(await se.delete(`products/user/store-favorites/${e}/`)).data,Qy=m.createContext({pendingAds:0,pendingRenewals:0,pendingCommunityPoints:0,pendingTotal:0,refresh:async()=>{},loading:!1});function va(){return m.useContext(Qy)}function Lk({children:e}){const{pathname:t}=Kt(),[n,a]=m.useState(0),[o,l]=m.useState(0),[d,h]=m.useState(0),[u,f]=m.useState(!1),y=m.useCallback(async()=>{if(localStorage.getItem("user_type")!=="admin"||!localStorage.getItem("token")){a(0),l(0),h(0);return}f(!0);try{const v=await Vj();a(Number(v==null?void 0:v.pending_ads)||0),l(Number(v==null?void 0:v.pending_renewals)||0),h(Number(v==null?void 0:v.pending_community_points)||0)}catch{a(0),l(0),h(0)}finally{f(!1)}},[]);m.useEffect(()=>{if(localStorage.getItem("user_type")!=="admin"||!localStorage.getItem("token")){a(0),l(0),h(0);return}y()},[t,y]),m.useEffect(()=>{const v=()=>{document.visibilityState==="visible"&&localStorage.getItem("user_type")==="admin"&&localStorage.getItem("token")&&y()};return document.addEventListener("visibilitychange",v),()=>document.removeEventListener("visibilitychange",v)},[y]);const x=m.useMemo(()=>({pendingAds:n,pendingRenewals:o,pendingCommunityPoints:d,pendingTotal:n+o+d,refresh:y,loading:u}),[n,o,d,y,u]);return i.jsx(Qy.Provider,{value:x,children:e})}function Ek(e,t){return t?t==="/"?e==="/":e===t||e.startsWith(`${t}/`):!1}const Mk=({isOpen:e,toggleSidebar:t,variant:n="shopper"})=>{const a=ct(),{pathname:o}=Kt(),{showAlert:l}=Ue(),{pendingAds:d,pendingRenewals:h,pendingCommunityPoints:u}=va(),f=localStorage.getItem("isGuest")==="true",y=!!localStorage.getItem("token"),x=localStorage.getItem("user_type")||"shopper",v=[{icon:i.jsx(sa,{size:20}),label:"الرئيسية",path:"/"},{icon:i.jsx(Ol,{size:20}),label:"عروض حصرية",path:"/offers"},{icon:i.jsx(_r,{size:20}),label:"المفضلة",path:"/favorites",protected:!0},{icon:i.jsx(Zu,{size:20}),label:"السلال",path:"/carts",protected:!0},{icon:i.jsx(Eo,{size:20}),label:"الأقسام",path:"/categories"},{icon:i.jsx(yn,{size:20}),label:"الخدمات المجتمعية",path:"/services"},{icon:i.jsx(zw,{size:20}),label:"اتصل بنا",path:"/contact"},{kind:"section",label:"الإعدادات"},{icon:i.jsx(wf,{size:20}),label:"إعدادات الحساب",path:"/settings",protected:!0}],_=[{kind:"section",label:"إدارة النظام"},{icon:i.jsx(Al,{size:20}),label:"لوحة الإدارة",path:"/admin"},{icon:i.jsx(co,{size:20}),label:"المستخدمون",path:"/admin/users"},{icon:i.jsx(co,{size:20}),label:"إدارة المدراء",path:"/admin/accounts"},{icon:i.jsx(zt,{size:20}),label:"المتاجر المشتركة",path:"/admin/stores"},{icon:i.jsx(Tl,{size:20}),label:"الأرباح والتحويلات",path:"/admin/finance"},{icon:i.jsx(Eo,{size:20}),label:"إدارة الأقسام",path:"/admin/categories"},{icon:i.jsx($n,{size:20}),label:"إدارة الإعلانات الممولة",path:"/admin/ads"},{icon:i.jsx(Sd,{size:20}),label:"إدارة الاشتراكات",path:"/admin/subscriptions"},{icon:i.jsx(yn,{size:20}),label:"مراجعة الخدمات المجتمعية",path:"/admin/community"},{kind:"section",label:"إعدادات عامة"},{icon:i.jsx($n,{size:20}),label:"إعلان عام",path:"/admin/announcements"}],b=[{kind:"section",label:"إدارة النظام"},{icon:i.jsx(Al,{size:20}),label:"لوحة الإدارة",path:"/admin"},{icon:i.jsx(co,{size:20}),label:"المستخدمون",path:"/admin/users"},{icon:i.jsx($n,{size:20}),label:"إدارة الإعلانات الممولة",path:"/admin/ads"},{icon:i.jsx(Sd,{size:20}),label:"إدارة الاشتراكات",path:"/admin/subscriptions"},{icon:i.jsx(yn,{size:20}),label:"مراجعة الخدمات المجتمعية",path:"/admin/community"}],z=[{kind:"section",label:"إدارة المتجر"},{icon:i.jsx(Tl,{size:20}),label:"إحصائيات المتجر",path:"/merchant/dashboard",protected:!0},{icon:i.jsx(kr,{size:20}),label:"منتجاتي",path:"/merchant/products",protected:!0},{icon:i.jsx(sw,{size:20}),label:"إعلاناتي الممولة",path:"/merchant/my-ads",protected:!0},{icon:i.jsx(ly,{size:20}),label:"طلب إعلان ممول",path:"/merchant/ads",protected:!0},{icon:i.jsx(Sd,{size:20}),label:"الاشتراك",path:"/merchant/subscription",protected:!0},{icon:i.jsx(Ww,{size:20}),label:"بروفايل المتجر",path:"/merchant/profile",protected:!0},{icon:i.jsx(wf,{size:20}),label:"إعدادات المتجر",path:"/merchant/settings",protected:!0}],C=f||!y?"shopper":x==="admin"?"admin":x==="merchant"?"merchant":"shopper",N=localStorage.getItem("is_primary_admin")==="true",w=C==="admin"?[...v,...N?_:b]:C==="merchant"?[...v,...z]:v,S=()=>{localStorage.removeItem("isGuest"),Oy(),a("/login"),t()},j=M=>M==="/admin/ads"&&d>0?d:M==="/admin/subscriptions"&&h>0?h:M==="/admin/community"&&u>0?u:null,E=(M,P)=>{P.protected&&(f||!y)&&(M.preventDefault(),l("عذراً، يجب تسجيل الدخول والتحقق من حسابك لاستخدام هذه الميزة.","الوصول محدود"),a("/login")),t()};return i.jsxs(i.Fragment,{children:[e&&i.jsx("div",{className:"sidebar-overlay",onClick:t}),i.jsxs("div",{className:`sidebar ${e?"open":""}`,children:[i.jsx("div",{className:"sidebar-header",children:i.jsxs("div",{className:"sidebar-brand",children:[i.jsx("img",{src:"/logo.png",alt:"رادار",className:"sidebar-brand-img"}),i.jsx("span",{className:"sidebar-brand-caption",children:"لوحة التنقّل"})]})}),i.jsxs("div",{className:"sidebar-menu",children:[C==="merchant"&&i.jsx("div",{className:"sidebar-role-pill sidebar-role-pill--merchant",children:"تاجر"}),C==="admin"&&i.jsx("div",{className:`sidebar-role-pill sidebar-role-pill--admin${N?" sidebar-role-pill--primary":""}`,children:localStorage.getItem("is_primary_admin")==="true"?"مدير أساسي":"مدير فرعي"}),w.map((M,P)=>{if(M.kind==="section")return i.jsx("div",{className:"sidebar-section-title",children:M.label},`sec-${P}`);const O=C==="admin"?j(M.path):null,I=Ek(o,M.path);return i.jsxs(me,{to:M.path,className:`menu-item${I?" menu-item--active":""}`,onClick:F=>E(F,M),children:[i.jsx("span",{className:"menu-icon-wrap",children:M.icon}),i.jsxs("span",{className:"menu-label-row",children:[i.jsx("span",{className:"menu-label",children:M.label}),O!=null?i.jsx("span",{className:"sidebar-pending-badge",title:"طلبات قيد المراجعة",children:O>99?"99+":O}):null]})]},P)}),i.jsx("div",{className:"sidebar-footer",children:i.jsxs("button",{type:"button",className:"menu-item menu-item--logout",onClick:S,children:[i.jsx("span",{className:"menu-icon-wrap menu-icon-wrap--muted",children:f?i.jsx(ac,{size:20}):i.jsx(ay,{size:20})}),i.jsx("span",{className:`menu-label menu-label--logout${f?"":" menu-label--danger"}`,children:f?"تسجيل الدخول":"تسجيل الخروج"})]})})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .sidebar {
            position: fixed;
            top: 0;
            width: min(300px, calc(100vw - 16px));
            right: calc(-1 * min(300px, 100vw - 16px));
            height: 100vh;
            height: 100dvh;
            background: linear-gradient(
              200deg,
              rgba(255, 255, 255, 0.92) 0%,
              rgba(255, 249, 230, 0.55) 55%,
              rgba(255, 255, 255, 0.92) 100%
            );
            box-shadow: -18px 0 60px rgba(30, 30, 46, 0.12);
            transition: right 0.32s cubic-bezier(0.4, 0, 0.2, 1);
            z-index: 1200;
            padding: 0;
            overflow-y: auto;
            border-inline-start: 1px solid rgba(224, 223, 213, 0.9);
            border-radius: 24px 0 0 24px;
            -webkit-backdrop-filter: blur(14px);
            backdrop-filter: blur(14px);
          }

          .sidebar.open {
            right: 0;
          }

          .sidebar::-webkit-scrollbar { width: 0; }
          .sidebar { scrollbar-width: none; }

          .sidebar-overlay {
            position: fixed;
            inset: 0;
            background: rgba(22, 22, 32, 0.4);
            backdrop-filter: blur(6px);
            z-index: 1190;
          }

          .sidebar-header {
            position: sticky;
            top: 0;
            z-index: 2;
            padding: 20px 18px 16px;
            background: linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.96) 0%,
              rgba(255, 255, 255, 0.86) 70%,
              rgba(255, 255, 255, 0) 100%
            );
            border-bottom: 1px solid rgba(224, 223, 213, 0.75);
          }

          .sidebar-brand {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
            text-align: center;
          }

          .sidebar-brand-img {
            height: 68px;
            width: auto;
            max-width: 220px;
            object-fit: contain;
          }

          .sidebar-brand-caption {
            font-size: 0.72rem;
            font-weight: 800;
            color: var(--text-secondary);
            letter-spacing: 0.02em;
          }

          .sidebar-menu {
            padding: 14px 14px calc(28px + 84px + env(safe-area-inset-bottom, 0px));
          }

          .sidebar-role-pill {
            text-align: center;
            padding: 10px 14px;
            border-radius: 12px;
            font-weight: 900;
            font-size: 0.82rem;
            margin-bottom: 16px;
            border: 1px solid rgba(245, 192, 0, 0.4);
            background: rgba(255, 244, 204, 0.45);
            color: var(--secondary);
          }

          .sidebar-role-pill--admin {
            background: rgba(52, 152, 219, 0.08);
            border-color: rgba(52, 152, 219, 0.35);
          }

          .sidebar-role-pill--primary {
            background: linear-gradient(135deg, rgba(52, 152, 219, 0.15) 0%, rgba(255, 244, 204, 0.35) 100%);
          }

          .sidebar-section-title {
            font-size: 0.7rem;
            font-weight: 900;
            color: var(--text-light);
            letter-spacing: 0.06em;
            margin: 20px 12px 10px;
            padding-top: 14px;
            border-top: 1px solid rgba(224, 223, 213, 0.85);
          }

          .menu-item {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px 12px;
            margin-bottom: 4px;
            border-radius: 18px;
            cursor: pointer;
            transition: background 0.18s ease, box-shadow 0.18s ease, color 0.18s ease;
            color: var(--text-primary);
            text-decoration: none;
            border: 1px solid rgba(232, 230, 224, 0.72);
            background: rgba(255, 255, 255, 0.7);
            box-shadow: 0 1px 0 rgba(255, 255, 255, 0.75) inset, 0 10px 26px rgba(26, 29, 38, 0.045);
          }

          .menu-item:hover {
            background: rgba(255, 244, 204, 0.55);
            border-color: rgba(245, 192, 0, 0.35);
            color: var(--secondary);
          }

          .menu-item--active {
            background: linear-gradient(135deg, rgba(245, 192, 0, 0.28) 0%, rgba(255, 255, 255, 0.9) 100%);
            border-color: rgba(245, 192, 0, 0.45);
            box-shadow: 0 2px 12px rgba(245, 192, 0, 0.15);
            font-weight: 800;
          }

          .menu-item--active .menu-icon-wrap {
            background: var(--white);
            border-color: rgba(245, 192, 0, 0.5);
            color: var(--secondary);
          }

          .menu-icon-wrap {
            flex-shrink: 0;
            width: 42px;
            height: 42px;
            border-radius: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(255, 255, 255, 0.92);
            border: 1px solid rgba(224, 223, 213, 0.92);
            color: var(--secondary);
          }

          @media (min-width: 721px) {
            .sidebar {
              width: 340px;
              right: -340px;
              border-radius: 26px 0 0 26px;
            }
          }

          @media (max-width: 420px) {
            .sidebar-brand-img {
              height: 60px;
              max-width: 200px;
            }
          }

          .menu-icon-wrap--muted {
            color: var(--text-secondary);
          }

          .menu-label-row {
            display: flex;
            align-items: center;
            gap: 10px;
            flex: 1;
            min-width: 0;
          }

          .menu-label {
            font-size: 0.95rem;
            font-weight: 600;
            flex: 1;
            min-width: 0;
            line-height: 1.35;
          }

          .menu-item--active .menu-label {
            font-weight: 800;
          }

          .menu-label--logout {
            font-weight: 800;
            color: var(--primary-hover);
          }

          .menu-label--danger {
            color: #c0392b !important;
          }

          .sidebar-footer {
            margin-top: 20px;
            padding-top: 16px;
            border-top: 1px solid rgba(224, 223, 213, 0.85);
          }

          .menu-item--logout {
            width: 100%;
            border: none;
            font-family: inherit;
            text-align: right;
            background: rgba(255, 255, 255, 0.6);
            cursor: pointer;
          }

          .menu-item--logout:hover {
            background: rgba(255, 244, 204, 0.55);
          }

          .sidebar-pending-badge {
            flex-shrink: 0;
            min-width: 22px;
            height: 22px;
            padding: 0 7px;
            border-radius: 999px;
            background: #e74c3c;
            color: #fff;
            font-size: 0.72rem;
            font-weight: 800;
            line-height: 22px;
            text-align: center;
          }
        `}})]})]})};function qo({maxWaitMs:e=2e4,goodEnoughM:t=95}={}){return new Promise((n,a)=>{if(!navigator.geolocation){a(new Error("unsupported"));return}let o=null,l=!1,d=null;const h=f=>{if(!l){if(l=!0,d!=null&&navigator.geolocation.clearWatch(d),clearTimeout(u),o){n(o);return}a(f||new Error("no fix"))}};d=navigator.geolocation.watchPosition(f=>{const y=f.coords.accuracy,x=Number.isFinite(y)?y:999999,v={latitude:f.coords.latitude,longitude:f.coords.longitude,accuracy:x};(!o||x<o.accuracy)&&(o=v),x<=t&&h(null)},f=>{f&&f.code===1&&h(f)},{enableHighAccuracy:!0,maximumAge:0});const u=setTimeout(()=>h(null),e)})}const Yy=m.createContext(null);function Tk({children:e}){const[t,n]=m.useState(null),[a,o]=m.useState(!1),[l,d]=m.useState(""),[h,u]=m.useState(0),f=m.useCallback(()=>new Promise(v=>{if(!navigator.geolocation){v(null);return}o(!0),qo({maxWaitMs:22e3,goodEnoughM:110}).then(_=>{const b=[_.latitude,_.longitude];n(b),u(z=>z+1),o(!1),v({lat:_.latitude,lng:_.longitude,accuracyM:_.accuracy})}).catch(()=>{o(!1),v(null)})}),[]),y=m.useCallback((v,_)=>{const b=Number(v),z=Number(_);!Number.isFinite(b)||!Number.isFinite(z)||(n([b,z]),u(C=>C+1))},[]),x=m.useMemo(()=>({userMapLocation:t,setUserMapLocation:n,setManualMapLocation:y,requestUserLocation:f,locating:a,searchQuery:l,setSearchQuery:d,locationFocusNonce:h}),[t,f,y,a,l,h]);return i.jsx(Yy.Provider,{value:x,children:e})}function Vo(){const e=m.useContext(Yy);if(!e)throw new Error("useMapExplore must be used within MapExploreProvider");return e}const Jy=m.createContext(null);function Hf(){return localStorage.getItem("user_type")==="admin"&&!!localStorage.getItem("token")}const Zf="admin_notifications_last_seen_id";function Ak({children:e}){const{refresh:t}=va(),[n,a]=m.useState([]),[o,l]=m.useState(0),[d,h]=m.useState(!1),u=m.useRef(Number(localStorage.getItem(Zf)||0)),f=m.useMemo(()=>{const _=u.current||0;return n.filter(b=>Number(b.id)>_).length},[n]),y=m.useCallback(()=>{u.current=o||u.current||0,localStorage.setItem(Zf,String(u.current||0)),a(_=>[..._])},[o]),x=m.useCallback(async()=>{if(Hf()){h(!0);try{const b=await ik(o||null),z=Array.isArray(b==null?void 0:b.results)?b.results:[],C=Number((b==null?void 0:b.latest_id)||0)||o||0;z.length&&(a(N=>[...N,...z].slice(-120)),t==null||t()),l(C)}catch{}finally{h(!1)}}},[o,t]);m.useEffect(()=>{if(!Hf())return;let _=!0;x();const b=window.setInterval(()=>{_&&x()},8e3);return()=>{_=!1,window.clearInterval(b)}},[x]);const v=m.useMemo(()=>({items:n,unreadCount:f,latestId:o,polling:d,markAllRead:y,pollOnce:x,lastSeenId:u.current}),[n,f,o,d,y,x]);return i.jsx(Jy.Provider,{value:v,children:e})}function Ik(){return m.useContext(Jy)}function Rk(){if(typeof window>"u")return!1;const e=window.navigator.userAgent||"";return/iPad|iPhone|iPod/.test(e)||e.includes("Mac")&&"ontouchend"in document}function Ok(){if(typeof window>"u")return!1;const e=window.navigator.standalone===!0,t=window.matchMedia&&window.matchMedia("(display-mode: standalone)").matches;return e||t}function Bk({className:e=""}){const[t,n]=m.useState(null),[a,o]=m.useState(!1),[l,d]=m.useState(!1);m.useEffect(()=>{o(Ok());const f=()=>o(!0);return window.addEventListener("appinstalled",f),()=>window.removeEventListener("appinstalled",f)},[]),m.useEffect(()=>{const f=y=>{y.preventDefault(),n(y)};return window.addEventListener("beforeinstallprompt",f),()=>window.removeEventListener("beforeinstallprompt",f)},[]);const h=m.useMemo(()=>a?"installed":t?"prompt":Rk()?"ios":"none",[a,t]);if(h==="none"||h==="installed")return null;const u=async()=>{var f;if(h==="ios"){d(y=>!y);return}try{(f=t==null?void 0:t.prompt)==null||f.call(t);const y=await(t==null?void 0:t.userChoice);n(null),(y==null?void 0:y.outcome)==="accepted"&&o(!0)}catch{}};return i.jsxs("div",{className:`pwa-install ${e}`.trim(),children:[i.jsxs("button",{type:"button",className:"pwa-install__btn",onClick:u,children:[i.jsx("span",{className:"pwa-install__btn-ico","aria-hidden":!0,children:h==="ios"?i.jsx(cy,{size:18,strokeWidth:2}):i.jsx(uw,{size:18,strokeWidth:2})}),i.jsx("span",{children:"تثبيت التطبيق"})]}),h==="ios"&&l?i.jsxs("div",{className:"pwa-install__help",children:["على iPhone/iPad: افتح الموقع في Safari ثم اضغط زر المشاركة (Share) واختر",i.jsx("strong",{children:" “Add to Home Screen”"}),"."]}):null]})}const Ce=({children:e})=>{const{pathname:t}=Kt(),n=ct(),[a]=ic(),[o,l]=m.useState(!1),{requestUserLocation:d,locating:h,searchQuery:u,setSearchQuery:f}=Vo(),{showAlert:y}=Ue(),[x,v]=m.useState([]),_=Ik();m.useEffect(()=>{t==="/search"&&f(a.get("q")??"")},[t,a,f]),m.useEffect(()=>{let X=!1;return rk().then(H=>{const ue=Array.isArray(H==null?void 0:H.results)?H.results:[];X||v(ue)}).catch(()=>{X||v([])}),()=>{X=!0}},[]);const b=()=>l(!o);m.useEffect(()=>{const X=window.setTimeout(()=>{window.dispatchEvent(new CustomEvent("radar-map-invalidate"))},320);return()=>window.clearTimeout(X)},[o]);const z=localStorage.getItem("isGuest")==="true",N=!!localStorage.getItem("token")&&!z,w=z,S=localStorage.getItem("user_name")||"",j=localStorage.getItem("user_type")||"shopper",E=N&&j==="admin",M=localStorage.getItem("is_primary_admin")==="true",{pendingTotal:P}=va(),O=j==="admin"?S||(M?"مدير أساسي":"مدير فرعي"):S||(N?"حسابي":""),I=N&&j==="merchant"?"merchant":N&&j==="admin"?"admin":"shopper",F=N&&j==="admin"&&t.startsWith("/admin"),V=t==="/map",D=t==="/register"||t==="/login",ae=t==="/stores",oe=t==="/admin",Q=t==="/admin/stores",J=t==="/admin/ads",W=t==="/admin/users",R=t!=="/",te=!F,G=m.useCallback(()=>{if(typeof window<"u"&&window.history.length>1){n(-1);return}if(t.startsWith("/admin")){n("/admin");return}if(t.startsWith("/merchant")){n("/merchant/dashboard");return}n("/")},[n,t]);return i.jsxs("div",{className:`layout-container${o?" sidebar-open":""}${t==="/map"?" layout-container--map":""}`,dir:"rtl",lang:"ar",children:[D?null:i.jsxs("header",{className:`main-header main-header--market${te?" main-header--shopper-market":""}`,children:[i.jsxs("div",{className:"main-header__primary",children:[i.jsxs("div",{className:"header-right",children:[R&&!D?i.jsx("button",{type:"button",className:"header-back-btn",onClick:G,"aria-label":"رجوع للخلف",title:"رجوع",children:i.jsx(Fu,{size:22,strokeWidth:2.25,"aria-hidden":!0})}):null,i.jsx(me,{to:"/",className:"brand-block brand-block--toolbar",title:"رادار — الرئيسية",children:i.jsx("img",{className:"brand-block-logo brand-block-logo--toolbar",src:"/logo.png",alt:"رادار"})}),i.jsxs("div",{className:"header-user-pill",title:N?O:"زائر","aria-label":"حالة المستخدم",children:[i.jsx(Bl,{size:18,strokeWidth:1.85,"aria-hidden":!0}),i.jsx("span",{className:"header-user-pill__name",children:N?O:"زائر"})]})]}),i.jsx("div",{className:"header-center",children:i.jsx(Bk,{})}),i.jsxs("div",{className:"header-left",children:[E&&_?i.jsxs("div",{className:"admin-notifs",children:[i.jsxs("button",{type:"button",className:"admin-notifs-btn","aria-label":"إشعارات الإدارة",title:"إشعارات الإدارة",onClick:()=>{var H;document.body.classList.toggle("admin-notifs-open")&&((H=_.markAllRead)==null||H.call(_))},children:[i.jsx(J_,{size:20,strokeWidth:2,"aria-hidden":!0}),_.unreadCount>0?i.jsx("span",{className:"admin-notifs-badge",children:_.unreadCount>99?"99+":_.unreadCount}):null]}),i.jsxs("div",{className:"admin-notifs-pop",children:[i.jsxs("div",{className:"admin-notifs-pop__head",children:[i.jsx("strong",{children:"الإشعارات"}),i.jsx("button",{type:"button",className:"btn-toggle",onClick:()=>{var X;return(X=_.pollOnce)==null?void 0:X.call(_)},children:"تحديث"})]}),i.jsxs("div",{className:"admin-notifs-list",children:[(_.items||[]).slice().reverse().slice(0,12).map(X=>i.jsxs("div",{className:"admin-notifs-item",children:[i.jsx("div",{className:"admin-notifs-item__title",children:X.title}),X.body?i.jsx("div",{className:"admin-notifs-item__body",children:X.body}):null,i.jsxs("div",{className:"admin-notifs-item__meta",children:[i.jsx("span",{children:X.event_type_label||X.event_type}),i.jsx("span",{className:"muted small",children:new Date(X.created_at).toLocaleString("ar")})]})]},X.id)),!_.items||_.items.length===0?i.jsx("div",{className:"muted small",style:{padding:10},children:"لا إشعارات بعد."}):null]})]})]}):null,N||w?i.jsxs("button",{type:"button",className:"header-logout-btn","aria-label":"تسجيل الخروج",title:"تسجيل الخروج",onClick:()=>{Oy(),n("/login")},children:[i.jsx(ay,{size:20,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{className:"header-logout-btn__txt",children:"خروج"})]}):i.jsxs(me,{to:"/login",className:"header-logout-btn header-logout-btn--login","aria-label":"تسجيل الدخول",title:"تسجيل الدخول",children:[i.jsx(ac,{size:20,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{className:"header-logout-btn__txt",children:"دخول"})]})]})]}),!F&&t!=="/map"?i.jsxs("div",{className:"header-mobile-search","aria-label":"بحث سريع",children:[i.jsx(me,{to:"/categories",className:"header-mobile-search__filter","aria-label":"فلترة",children:i.jsx(Rl,{size:18,strokeWidth:2,"aria-hidden":!0})}),i.jsxs(me,{to:u!=null&&u.trim()?`/search?q=${encodeURIComponent(u.trim())}`:"/search",className:"header-mobile-search__bar","aria-label":"فتح البحث",title:"بحث",children:[i.jsx("span",{className:"header-mobile-search__placeholder",children:"ابحث عن متجر، منتج، أو قسم…"}),i.jsx("span",{className:"header-mobile-search__ico","aria-hidden":!0,children:i.jsx(Mo,{size:18,strokeWidth:2})})]})]}):null,F?i.jsxs("nav",{className:"header-nav header-nav--admin","aria-label":"تنقل لوحة الإدارة",children:[i.jsxs(me,{to:"/admin",className:`header-nav-item${oe?" header-nav-item--active":""}`,children:[i.jsx(Al,{size:20,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{children:"لوحة"})]}),i.jsxs(me,{to:"/admin/stores",className:`header-nav-item${Q?" header-nav-item--active":""}`,children:[i.jsx(zt,{size:20,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{children:"متاجر"})]}),i.jsxs(me,{to:"/admin/ads",className:`header-nav-item${J?" header-nav-item--active":""}`,children:[i.jsx(kf,{size:20,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{children:"إعلانات"})]}),i.jsxs(me,{to:"/admin/users",className:`header-nav-item${W?" header-nav-item--active":""}`,children:[i.jsx(co,{size:20,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{children:"مستخدمون"})]}),i.jsxs("button",{type:"button",className:"header-nav-item",onClick:b,"aria-label":"القائمة",children:[i.jsx(Xa,{size:20,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{children:"القائمة"})]})]}):i.jsxs("nav",{className:"header-nav","aria-label":"التنقل",children:[i.jsxs(me,{to:"/",className:`header-nav-item${t==="/"?" header-nav-item--active":""}`,children:[i.jsx(sa,{size:20,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{children:"الرئيسية"})]}),i.jsxs(me,{to:"/map",className:`header-nav-item${t==="/map"?" header-nav-item--active":""}`,children:[i.jsx(Wu,{size:20,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{children:"الخريطة"})]}),i.jsxs(me,{to:"/stores",className:`header-nav-item${ae?" header-nav-item--active":""}`,children:[i.jsx(zt,{size:20,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{children:"المتاجر"})]}),i.jsxs("button",{type:"button",className:"header-nav-item",onClick:b,"aria-label":"القائمة",children:[i.jsx(Xa,{size:20,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{children:"القائمة"})]})]})]}),!D&&t!=="/map"&&x.length>0?i.jsx("div",{className:"site-announcements",role:"region","aria-label":"إعلانات عامة",children:x.map(X=>i.jsxs("div",{className:"site-announcement",children:[i.jsx($n,{size:18,strokeWidth:2,"aria-hidden":!0}),i.jsx("div",{className:"site-announcement__msg",children:X.message})]},X.id))}):null,i.jsx(Mk,{isOpen:o,toggleSidebar:b,variant:I}),i.jsxs("main",{className:`content${t==="/"?" content--home":""}${t==="/map"?" content--map":""}`,children:[R&&V?i.jsx("div",{className:"layout-back-floating",children:i.jsx("button",{type:"button",className:"header-back-btn header-back-btn--floating",onClick:G,"aria-label":"رجوع للخلف",title:"رجوع",children:i.jsx(Fu,{size:22,strokeWidth:2.25,"aria-hidden":!0})})}):null,e]}),F?i.jsxs("nav",{className:"bottom-nav","aria-label":"شريط الأدمن السفلي",children:[i.jsxs(me,{to:"/admin",className:`bottom-nav-item${oe?" bottom-nav-item--active":""}`,children:[i.jsx(Al,{size:22,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{children:"لوحة"})]}),i.jsxs(me,{to:"/admin/stores",className:`bottom-nav-item${Q?" bottom-nav-item--active":""}`,children:[i.jsx(zt,{size:22,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{children:"متاجر"})]}),i.jsxs(me,{to:"/admin/ads",className:`bottom-nav-item${J?" bottom-nav-item--active":""}`,children:[i.jsx(kf,{size:22,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{children:"إعلانات"})]}),i.jsxs(me,{to:"/admin/users",className:`bottom-nav-item${W?" bottom-nav-item--active":""}`,children:[i.jsx(co,{size:22,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{children:"مستخدمون"})]}),i.jsxs("button",{type:"button",className:"bottom-nav-item",onClick:b,"aria-label":"القائمة",children:[i.jsx(Xa,{size:22,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{children:"القائمة"})]})]}):i.jsxs("nav",{className:"bottom-nav","aria-label":"شريط التنقل السفلي",children:[i.jsxs(me,{to:"/",className:`bottom-nav-item${t==="/"?" bottom-nav-item--active":""}`,children:[i.jsx(sa,{size:22,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{children:"الرئيسية"})]}),i.jsxs(me,{to:"/map",className:`bottom-nav-item${t==="/map"?" bottom-nav-item--active":""}`,children:[i.jsx(Wu,{size:22,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{children:"الخريطة"})]}),i.jsxs(me,{to:"/stores",className:`bottom-nav-item${ae?" bottom-nav-item--active":""}`,children:[i.jsx(zt,{size:22,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{children:"المتاجر"})]}),i.jsxs("button",{type:"button",className:"bottom-nav-item",onClick:b,"aria-label":"القائمة",children:[i.jsx(Xa,{size:22,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{children:"القائمة"})]})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .layout-container {
          min-height: 100vh;
          min-height: 100dvh;
          display: flex;
          flex-direction: column;
          overflow-x: clip;
        }

        .layout-container--map {
          min-height: 100dvh;
        }

        /* صفحة الخريطة: أخفِ الهيدر على كل أحجام الشاشات (مثل الموبايل) */
        .layout-container--map .main-header {
          display: none !important;
        }

        .main-header {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          padding: 6px 10px 8px;
          gap: 0;
          margin-inline: 0;
          margin-top: 2px;
          background: linear-gradient(180deg, #ffffff 0%, #fffef8 100%);
          box-shadow: 0 3px 18px rgba(26, 29, 38, 0.06);
          border: 1px solid rgba(232, 230, 224, 0.92);
          border-radius: 0 0 22px 22px;
          position: sticky;
          top: 0;
          z-index: 1100;
          isolation: isolate;
        }

        .site-announcements{
          max-width: 1240px;
          margin: 10px auto 0;
          padding-inline: clamp(8px, 2.2vw, 22px);
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .site-announcement{
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 10px 12px;
          border-radius: 16px;
          border: 1px solid rgba(2, 119, 189, 0.22);
          background: linear-gradient(135deg, rgba(230, 239, 232, 0.92) 0%, rgba(255,255,255,0.95) 100%);
          box-shadow: 0 8px 24px rgba(26, 29, 38, 0.06);
          color: var(--secondary);
        }
        .site-announcement__msg{
          font-weight: 800;
          color: var(--text-secondary);
          line-height: 1.5;
          white-space: pre-wrap;
        }

        .pwa-install{
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: center;
        }
        .pwa-install__btn{
          width: 100%;
          max-width: 360px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 10px 14px;
          border-radius: 14px;
          border: 1px solid rgba(245, 192, 0, 0.55);
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
          color: var(--secondary);
          font-weight: 950;
          cursor: pointer;
          font-family: inherit;
          box-shadow: var(--shadow-gold);
          transition: transform 0.12s ease, filter 0.15s ease, box-shadow 0.15s ease;
        }
        .pwa-install__btn:hover{
          filter: brightness(1.02);
          box-shadow: 0 18px 42px rgba(245, 192, 0, 0.22);
        }
        .pwa-install__btn:active{
          transform: scale(0.98);
        }
        .pwa-install__btn-ico{
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 12px;
          background: rgba(255,255,255,0.28);
          border: 1px solid rgba(255,255,255,0.35);
          box-shadow: 0 1px 0 rgba(255,255,255,0.35) inset;
          flex-shrink: 0;
        }
        .pwa-install__help{
          width: 100%;
          max-width: 680px;
          padding: 10px 12px;
          border-radius: 14px;
          border: 1px solid rgba(232, 230, 224, 0.95);
          background: rgba(255,255,255,0.92);
          color: var(--text-secondary);
          font-weight: 800;
          line-height: 1.6;
          text-align: center;
        }

        /* نفس عرض/محاذاة الصفحة لكل محتوى الهيدر */
        .main-header__primary,
        .header-nav {
          max-width: 1240px;
          margin-inline: auto;
          padding-inline: clamp(8px, 2.2vw, 22px);
          box-sizing: border-box;
        }
        /* شريط بحث الموبايل لازم يلمس حواف الناف بار */
        .header-mobile-search {
          max-width: 1240px;
          margin-inline: auto;
          padding-inline: 0;
          box-sizing: border-box;
        }

        /* على الشاشات الكبيرة: خلي الناف بار بنفس عرض الأقسام تحته */
        @media (min-width: 721px) {
          .main-header {
            /* طابق عرض منطقة المحتوى (content padding) + حد أقصى مثل الأقسام */
            width: min(1240px, calc(100vw - (2 * clamp(12px, 2.8vw, 20px))));
            margin-inline: auto;
            border-radius: 22px;
            margin-top: 10px;
          }
          /* مع تقييد الهيدر نفسه، لا نحتاج توسيط/حشو إضافي داخله */
          .main-header__primary,
          .header-mobile-search,
          .header-nav {
            max-width: none;
            margin-inline: 0;
            padding-inline: 0;
          }
        }

        .main-header__primary {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 10px;
          width: 100%;
          min-width: 0;
        }

        .header-right{
          display: inline-flex;
          align-items: center;
          gap: 10px;
          /* الصفحة RTL: start = أقصى اليمين */
          justify-self: start;
          min-width: 0;
          flex-wrap: nowrap;
        }

        .header-center{
          justify-self: center;
          min-width: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .header-left{
          display: inline-flex;
          align-items: center;
          gap: 8px;
          /* الصفحة RTL: end = أقصى اليسار */
          justify-self: end;
          min-width: 0;
          /* زيح أزرار اليسار للداخل قليلاً */
          padding-inline-end: 6px;
          flex-wrap: nowrap;
        }

        .header-user-pill{
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: 999px;
          border: 1px solid var(--border);
          background: rgba(255, 255, 255, 0.92);
          box-shadow: var(--shadow-sm);
          color: var(--secondary);
          max-width: 320px;
          min-width: 0;
        }
        .header-user-pill__name{
          font-weight: 950;
          color: var(--text-secondary);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          min-width: 0;
        }

        /* تخطيط الهيدر: يمين/وسط/يسار */

        @media (max-width: 720px){
          .header-user-pill{
            max-width: 100%;
          }
          img.brand-block-logo.brand-block-logo--toolbar{
            max-width: min(320px, 72vw);
          }
        }

        /* الموبايل: يظل صف واحد، نقلل الأحجام بدل ما ننزل لسطر ثاني */
        @media (max-width: 720px){
          .main-header__primary{
            gap: 8px;
          }
          .header-right{
            gap: 6px;
          }
          .header-left{
            gap: 6px;
          }
          .header-user-pill{
            padding: 6px 10px;
            max-width: 44vw;
          }
          .header-user-pill__name{
            max-width: 22vw;
          }
          img.brand-block-logo.brand-block-logo--toolbar{
            height: 64px;
            max-width: min(240px, 52vw);
          }
          .pwa-install__btn{
            max-width: 220px;
            padding: 9px 10px;
            border-radius: 12px;
            font-size: 0.9rem;
          }
          .header-logout-btn{
            padding: 0 10px;
          }
          .header-logout-btn__txt{
            display: none;
          }
        }

        /* أصغر الشاشات جداً: امنع التداخل بإخفاء اسم المستخدم وتقليل اللوغو والزر */
        @media (max-width: 360px){
          img.brand-block-logo.brand-block-logo--toolbar{
            height: 56px;
            max-width: min(190px, 46vw);
          }
          .header-user-pill{
            padding: 6px 8px;
            max-width: 36vw;
          }
          .header-user-pill__name{
            display: none;
          }
          .pwa-install__btn{
            max-width: 180px;
            padding: 8px 8px;
            font-size: 0.86rem;
          }
        }

        .search-submit-btn {
          flex-shrink: 0;
          border: none;
          font-family: inherit;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          padding: 0;
          border-radius: 50%;
          cursor: pointer;
          background: linear-gradient(145deg, var(--primary) 0%, var(--primary-hover) 100%);
          color: var(--secondary);
          box-shadow: var(--shadow-gold);
          transition: filter 0.15s ease, transform 0.12s ease;
        }

        .search-submit-btn:hover {
          filter: brightness(1.05);
        }

        .search-submit-btn:active {
          transform: scale(0.96);
        }

        .search-filter-btn {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          color: var(--secondary);
          background: var(--surface);
          border: 1.5px solid var(--border);
          text-decoration: none;
          transition: background 0.18s ease, border-color 0.18s ease, color 0.18s ease;
        }

        .search-filter-btn:hover {
          background: rgba(255, 204, 0, 0.16);
          border-color: rgba(255, 204, 0, 0.5);
          color: var(--secondary);
        }

        .header-logout-btn{
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          height: 44px;
          padding: 0 12px;
          border-radius: 999px;
          border: 1px solid rgba(232, 230, 224, 0.95);
          background: rgba(255,255,255,0.92);
          cursor: pointer;
          font-family: inherit;
          color: var(--secondary);
          text-decoration: none;
          box-shadow: var(--shadow-sm);
          font-weight: 900;
        }
        .header-logout-btn:hover{
          border-color: rgba(245, 192, 0, 0.45);
          box-shadow: var(--shadow-gold);
        }
        .header-logout-btn__txt{
          font-size: 0.84rem;
          color: var(--text-secondary);
          font-weight: 900;
          line-height: 1;
        }

        .admin-notifs{
          position: relative;
          display: inline-flex;
          align-items: center;
          margin-inline-start: 0;
        }
        .admin-notifs-btn{
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 999px;
          border: 1px solid rgba(232, 230, 224, 0.95);
          background: rgba(255,255,255,0.92);
          cursor: pointer;
          position: relative;
          box-shadow: var(--shadow-sm);
          color: var(--secondary);
        }
        .admin-notifs-badge{
          position: absolute;
          top: -6px;
          inset-inline-start: -6px;
          min-width: 20px;
          height: 20px;
          padding: 0 6px;
          border-radius: 999px;
          background: #e74c3c;
          color: #fff;
          font-weight: 900;
          font-size: 0.72rem;
          line-height: 20px;
          text-align: center;
          border: 2px solid #fff;
        }
        .admin-notifs-pop{
          display: none;
          position: absolute;
          top: calc(100% + 8px);
          inset-inline-end: 0;
          width: min(420px, calc(100vw - 24px));
          background: rgba(255,255,255,0.96);
          border: 1px solid rgba(232, 230, 224, 0.95);
          border-radius: 18px;
          box-shadow: 0 18px 46px rgba(26, 29, 38, 0.14);
          overflow: hidden;
          z-index: 1300;
        }
        body.admin-notifs-open .admin-notifs-pop{
          display: block;
        }
        .admin-notifs-pop__head{
          display:flex;
          align-items:center;
          justify-content: space-between;
          gap: 10px;
          padding: 10px 12px;
          background: var(--surface);
          border-bottom: 1px solid rgba(232, 230, 224, 0.95);
        }
        .admin-notifs-list{
          max-height: 360px;
          overflow: auto;
        }
        .admin-notifs-item{
          padding: 10px 12px;
          border-bottom: 1px solid rgba(232, 230, 224, 0.85);
        }
        .admin-notifs-item:last-child{ border-bottom: none; }
        .admin-notifs-item__title{
          font-weight: 950;
          color: var(--secondary);
          margin-bottom: 4px;
        }
        .admin-notifs-item__body{
          color: var(--text-secondary);
          font-weight: 800;
          line-height: 1.55;
          margin-bottom: 6px;
        }
        .admin-notifs-item__meta{
          display:flex;
          align-items:center;
          justify-content: space-between;
          gap: 10px;
          color: var(--text-secondary);
          font-weight: 800;
          font-size: 0.82rem;
        }

        .header-user-status {
          display: none;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: 999px;
          border: 1px solid var(--border);
          background: rgba(255, 255, 255, 0.92);
          box-shadow: var(--shadow-sm);
          color: var(--secondary);
          max-width: 240px;
          min-width: 0;
        }
        .header-user-status__text {
          font-weight: 900;
          color: var(--text-secondary);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          min-width: 0;
        }

        /* واجهة السوق: نبقي شريط بحث الموبايل فقط */
        .header-mobile-search {
          display: none;
        }
        .main-header--shopper-market .header-mobile-search {
          display: flex;
          align-items: center;
          gap: 0;
          margin-top: 8px;
          margin-inline: calc(-1 * clamp(8px, 2.2vw, 22px));
          padding-inline: clamp(8px, 2.2vw, 22px);
        }
        @media (min-width: 721px) {
          .main-header--shopper-market .header-mobile-search {
            display: none !important;
          }
        }
        .main-header--shopper-market .header-mobile-search__filter {
          display: none;
        }
        .main-header--shopper-market .header-mobile-search__bar {
          flex: 1;
          min-width: 0;
          height: 50px;
          border-radius: 999px;
          border: 1px solid rgba(232, 230, 224, 0.95);
          background: rgba(255, 255, 255, 0.92);
          box-shadow: 0 2px 14px rgba(26, 29, 38, 0.06);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 0 14px;
          text-decoration: none;
          color: var(--text-secondary);
          flex-direction: row-reverse;
          width: 100%;
          box-sizing: border-box;
        }
        .main-header--shopper-market .header-mobile-search__placeholder {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-weight: 800;
          font-size: 0.9rem;
          color: rgba(26, 29, 38, 0.55);
          text-align: right;
          flex: 1;
          min-width: 0;
        }
        .main-header--shopper-market .header-mobile-search__ico {
          color: rgba(26, 29, 38, 0.5);
          flex-shrink: 0;
        }
        @media (min-width: 901px) {
          .main-header--shopper-market .header-right {
            justify-content: flex-end;
          }
        }

        .header-login-ghost {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          min-height: 40px;
          padding: 9px 14px;
          border-radius: 999px;
          font-size: 0.82rem;
          font-weight: 900;
          text-decoration: none;
          color: var(--secondary);
          background: transparent;
          border: 2px solid rgba(232, 230, 224, 0.98);
          white-space: nowrap;
          box-sizing: border-box;
          line-height: 1;
          transition: background 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease;
        }

        .header-login-ghost:hover {
          background: var(--white);
          border-color: rgba(255, 204, 0, 0.55);
          box-shadow: var(--shadow-sm);
        }

        .content--map {
          display: flex;
          flex-direction: column;
          flex: 1 1 auto;
          min-height: 0;
        }

        .main-header--market {
          border-radius: 22px;
        }

        .brand-block {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6px 14px;
          min-height: 52px;
          border-radius: 16px;
          background: linear-gradient(180deg, #fff 0%, var(--surface) 100%);
          border: 1px solid var(--border);
          box-shadow: 0 2px 12px rgba(30, 30, 46, 0.06);
          text-decoration: none;
          flex-shrink: 0;
          transition: box-shadow 0.2s ease, border-color 0.2s ease;
        }

        .brand-block:hover {
          border-color: rgba(245, 192, 0, 0.55);
          box-shadow: var(--shadow-gold);
        }

        .brand-block-logo {
          height: 42px;
          width: auto;
          max-width: min(140px, 28vw);
          object-fit: contain;
          object-position: center;
          display: block;
        }

        .menu-btn {
          background: var(--surface);
          border: 1px solid var(--border);
          cursor: pointer;
          color: var(--secondary);
          display: flex;
          padding: 8px;
          border-radius: 12px;
          transition: background 0.2s ease, box-shadow 0.2s ease;
          position: relative;
        }

        .menu-btn-badged {
          overflow: visible;
        }

        .header-menu-pending-total {
          position: absolute;
          top: 2px;
          inset-inline-start: 2px;
          min-width: 18px;
          height: 18px;
          padding: 0 5px;
          border-radius: 999px;
          background: #e74c3c;
          color: #fff;
          font-size: 10px;
          font-weight: 800;
          line-height: 18px;
          text-align: center;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
          pointer-events: none;
        }

        .menu-btn:hover {
          background: var(--primary-light);
          box-shadow: var(--shadow-sm);
        }

        /* يجب أن تكون بعد .brand-block و .brand-block-logo حتى لا تُلغى */
        .brand-block.brand-block--toolbar {
          padding: 0;
          min-height: 0;
          border-radius: 0;
          background: transparent;
          border: none;
          box-shadow: none;
          flex-shrink: 0;
        }

        .brand-block.brand-block--toolbar:hover {
          border: none;
          box-shadow: none;
          opacity: 0.9;
        }

        img.brand-block-logo.brand-block-logo--toolbar {
          height: 98px;
          width: auto;
          max-width: min(460px, 78vw);
          object-fit: contain;
          object-position: center;
          display: block;
          margin-left: 8px;
          border: none;
          outline: none;
          box-shadow: none;
          vertical-align: middle;
        }

        .menu-btn.menu-btn--toolbar {
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          padding: 0;
          border-radius: 16px;
          border: none;
          background: linear-gradient(180deg, #ffffff 0%, #f3f4f6 100%);
          box-shadow:
            0 1px 0 rgba(255, 255, 255, 0.9) inset,
            0 4px 14px rgba(26, 29, 38, 0.1);
          color: var(--secondary);
        }

        .menu-btn.menu-btn--toolbar:hover {
          background: linear-gradient(180deg, var(--primary-light) 0%, #fffef6 100%);
          box-shadow:
            0 1px 0 rgba(255, 255, 255, 0.95) inset,
            0 6px 20px rgba(255, 204, 0, 0.22);
        }

        .header-auth-inline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }
        .header-auth-inline__login,
        .header-auth-inline__register {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          min-height: 44px;
          padding: 10px 14px;
          border-radius: 999px;
          font-size: 0.84rem;
          font-weight: 900;
          text-decoration: none;
          line-height: 1;
          white-space: nowrap;
        }
        .header-auth-inline__login {
          color: var(--secondary);
          background: var(--white);
          border: 2px solid rgba(232, 230, 224, 0.98);
          box-shadow: 0 2px 12px rgba(26, 29, 38, 0.06);
        }
        .header-auth-inline__login:hover {
          border-color: rgba(255, 204, 0, 0.55);
          box-shadow: var(--shadow-sm);
        }
        .header-auth-inline__register {
          color: var(--secondary);
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
          border: 2px solid transparent;
          box-shadow: var(--shadow-gold);
        }
        .header-auth-inline__register:hover {
          filter: brightness(1.05);
        }

        .search-bar {
          position: relative;
          max-width: min(560px, 100%);
          width: 100%;
        }

        .search-bar--pill {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 2px 4px 2px 12px;
          border-radius: 999px;
          border: 1.5px solid rgba(232, 230, 224, 0.95);
          background: var(--white);
          box-shadow: 0 2px 14px rgba(26, 29, 38, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.9);
        }

        .search-bar--pill .search-icon {
          position: static;
          transform: none;
          flex-shrink: 0;
          color: var(--text-light);
        }

        .search-bar--pill input {
          flex: 1;
          min-width: 0;
          border: none !important;
          background: transparent !important;
          box-shadow: none !important;
          padding: 0.5rem 0.15rem !important;
          font-size: 0.9rem;
        }

        .search-icon {
          position: absolute;
          inset-inline-start: 15px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-light);
        }

        .header-register-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          min-height: 40px;
          padding: 9px 14px;
          border-radius: 999px;
          font-size: 0.82rem;
          font-weight: 900;
          text-decoration: none;
          color: var(--secondary);
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
          border: 2px solid transparent;
          box-shadow: var(--shadow-gold);
          white-space: nowrap;
          box-sizing: border-box;
          line-height: 1;
          transition: filter 0.15s ease, transform 0.12s ease;
        }

        .header-register-btn:hover {
          filter: brightness(1.05);
        }

        .header-register-btn:active {
          transform: scale(0.98);
        }

        .location-badge {
          display: flex;
          align-items: center;
          gap: 4px;
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
          color: var(--secondary);
          padding: 8px 12px;
          border-radius: 999px;
          font-size: 0.84rem;
          font-weight: bold;
          cursor: pointer;
          box-shadow: var(--shadow-gold);
          border: none;
          font-family: inherit;
        }

        .location-badge:disabled {
          opacity: 0.75;
          cursor: wait;
        }

        .user-badge--filled {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 10px;
          border-radius: 999px;
          border: 1px solid var(--border);
          background: var(--white);
          box-shadow: var(--shadow-sm);
          color: var(--secondary);
          max-width: 200px;
        }

        .user-name {
          font-weight: 800;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .header-back-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          padding: 0;
          border-radius: 50%;
          border: none;
          background: linear-gradient(160deg, var(--primary-light) 0%, rgba(255, 249, 230, 0.92) 55%, #fff 100%);
          color: var(--secondary);
          cursor: pointer;
          box-shadow:
            0 1px 2px rgba(26, 29, 38, 0.06),
            0 6px 20px rgba(245, 192, 0, 0.18);
          flex-shrink: 0;
          font-family: inherit;
          transition: background 0.2s ease, box-shadow 0.2s ease, transform 0.14s ease, color 0.15s ease;
        }
        .header-back-btn:hover {
          background: linear-gradient(160deg, rgba(255, 230, 150, 0.45) 0%, var(--primary-light) 40%, #fffef8 100%);
          box-shadow:
            0 2px 4px rgba(26, 29, 38, 0.07),
            0 10px 28px rgba(245, 192, 0, 0.28);
          color: #141820;
        }
        .header-back-btn:active {
          transform: scale(0.96);
          box-shadow:
            0 1px 3px rgba(26, 29, 38, 0.08),
            0 4px 14px rgba(245, 192, 0, 0.2);
        }
        .header-back-btn:focus-visible {
          outline: none;
          box-shadow:
            0 0 0 3px rgba(255, 255, 255, 0.95),
            0 0 0 6px rgba(245, 192, 0, 0.45),
            0 6px 20px rgba(245, 192, 0, 0.2);
        }
        .layout-back-floating {
          position: fixed;
          top: calc(10px + env(safe-area-inset-top, 0px));
          inset-inline-start: clamp(8px, 2.2vw, 16px);
          z-index: 1001;
          pointer-events: none;
        }
        .layout-back-floating .header-back-btn {
          pointer-events: auto;
        }
        .header-back-btn--floating {
          -webkit-backdrop-filter: blur(10px);
          backdrop-filter: blur(10px);
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.72) 0%, rgba(255, 252, 238, 0.82) 100%);
          box-shadow:
            0 1px 1px rgba(255, 255, 255, 0.8) inset,
            0 8px 24px rgba(26, 29, 38, 0.12);
        }
        .header-back-btn--floating:hover {
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 245, 210, 0.88) 100%);
        }

        .content {
          flex: 1;
          padding: clamp(12px, 2.8vw, 20px);
          padding-bottom: calc(72px + env(safe-area-inset-bottom, 0px));
          background: var(--background);
          min-width: 0;
        }

        .content.content--home {
          padding: clamp(6px, 1.2vw, 12px);
          padding-bottom: calc(72px + env(safe-area-inset-bottom, 0px));
        }

        .header-nav {
          display: none;
          margin-top: 6px;
          padding: 6px 6px 4px;
          border-top: 1px solid rgba(232, 230, 224, 0.75);
          gap: 8px;
        }
        .header-nav-item {
          appearance: none;
          border: 1px solid rgba(232, 230, 224, 0.95);
          background: rgba(255, 255, 255, 0.92);
          color: var(--text-secondary);
          text-decoration: none;
          font-family: inherit;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px 12px;
          border-radius: 999px;
          font-weight: 900;
          font-size: 0.86rem;
          box-shadow: 0 2px 12px rgba(26, 29, 38, 0.06);
          transition: background 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease, transform 0.12s ease;
          flex: 1;
          min-width: 0;
          white-space: nowrap;
        }
        .header-nav-item:hover {
          border-color: rgba(245, 192, 0, 0.45);
          box-shadow: 0 8px 20px rgba(245, 192, 0, 0.14);
        }
        .header-nav-item--active {
          color: var(--secondary);
          background: linear-gradient(135deg, rgba(255, 204, 0, 0.22) 0%, rgba(255, 204, 0, 0.10) 100%);
          border-color: rgba(245, 192, 0, 0.55);
          box-shadow: var(--shadow-gold);
        }
        .header-nav-item:active { transform: scale(0.99); }

        .bottom-nav {
          display: flex;
          position: fixed;
          bottom: 0;
          inset-inline: 0;
          z-index: 1200;
          height: 64px;
          padding: 8px 10px calc(8px + env(safe-area-inset-bottom, 0px));
          background: rgba(255, 255, 255, 0.88);
          border-top: 1px solid rgba(232, 230, 224, 0.95);
          -webkit-backdrop-filter: blur(12px);
          backdrop-filter: blur(12px);
          box-shadow: 0 -14px 34px rgba(26, 29, 38, 0.08);
          justify-content: space-around;
          gap: 8px;
        }

        /* الموبايل: التنقل في الشريط السفلي — الديسكتوب: في الناف بار فقط (بدون شريط سفلي) */
        @media (min-width: 721px) {
          .header-nav {
            display: flex;
          }
          .bottom-nav {
            display: none;
          }
          .header-user-status {
            display: inline-flex;
          }
          .content {
            padding-bottom: clamp(12px, 2.8vw, 20px);
          }
          .content.content--home {
            padding-bottom: clamp(12px, 2.8vw, 20px);
          }
        }

        @media (max-width: 720px) {
          .bottom-nav-item {
            appearance: none;
            background: rgba(255, 255, 255, 0.92);
            border: 1px solid rgba(232, 230, 224, 0.95);
            cursor: pointer;
            min-width: 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 3px;
            text-decoration: none;
            color: var(--text-secondary);
            font-family: inherit;
            padding: 6px 4px;
            border-radius: 16px;
            box-shadow: 0 2px 10px rgba(26, 29, 38, 0.06);
            transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease, transform 0.12s ease, box-shadow 0.15s ease;
          }
          .bottom-nav-item:hover {
            border-color: rgba(245, 192, 0, 0.45);
            box-shadow: 0 6px 18px rgba(245, 192, 0, 0.14);
          }
          .bottom-nav-item span {
            font-size: 0.7rem;
            font-weight: 800;
            line-height: 1;
          }
          .bottom-nav-item--active {
            color: var(--secondary);
            background: linear-gradient(135deg, rgba(255, 204, 0, 0.22) 0%, rgba(255, 204, 0, 0.10) 100%);
            border-color: rgba(245, 192, 0, 0.55);
            box-shadow: var(--shadow-gold);
          }
          .bottom-nav-item:active { transform: scale(0.98); }
        }

        @media (max-width: 900px) {
          .main-header {
            padding: 6px 8px 8px;
          }
          .main-header__primary {
            gap: 8px;
          }
          img.brand-block-logo.brand-block-logo--toolbar {
            height: 84px;
            max-width: min(400px, 76vw);
          }
          .menu-btn.menu-btn--toolbar {
            width: 48px;
            height: 48px;
            border-radius: 15px;
          }
          .header-actions {
            gap: 6px;
          }
        }

        /* على الشاشات الكبيرة: أزرار الدخول/التسجيل لأقصى اليسار (لوحة الأدمن فقط؛ السوق يستخدم main-header--shopper-market) */
        @media (min-width: 901px) {
          .main-header:not(.main-header--shopper-market) .header-right {
            justify-content: flex-end;
          }
        }

        /* تمت إعادة بناء الهيدر ب Grid (يمين/وسط/يسار) */

        /* ضبيطات مقاس فقط للسوق على الشاشات الضيقة (المنطق موحّد أعلاه) */
        @media (max-width: 520px) {
          .main-header--shopper-market {
            padding: 5px 6px 7px;
          }
          .main-header--shopper-market img.brand-block-logo.brand-block-logo--toolbar {
            height: 58px;
            max-width: min(280px, 72vw);
          }
        }

        .layout-container.sidebar-open .leaflet-control-attribution,
        .layout-container.sidebar-open .leaflet-control-layers {
          visibility: hidden !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }
      `}})]})},wt=({icon:e,type:t="text",placeholder:n,value:a,onChange:o,required:l=!1,error:d,...h})=>i.jsxs("div",{className:"input-group-container",style:{marginBottom:"12px"},children:[i.jsxs("div",{className:`input-group ${d?"input-group--error":""}`,children:[e&&i.jsx("div",{className:"input-icon",children:e}),i.jsx("input",{type:t,placeholder:n,value:a,onChange:o,required:l,...h})]}),d&&i.jsx("p",{className:"input-error-msg",children:d}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .input-group-container { display: flex; flex-direction: column; width: 100%; }
        .input-group--error input {
          border-color: #e53935 !important;
          background: #fff8f8 !important;
        }
        .input-error-msg {
          color: #c62828;
          font-size: 0.78rem;
          text-align: right;
          margin-top: 6px;
          margin-inline-end: 4px;
          font-weight: 700;
        }
      `}})]}),St=({children:e,onClick:t,type:n="button",variant:a="primary",loading:o=!1,disabled:l=!1,icon:d,style:h={},...u})=>i.jsxs("button",{type:n,onClick:t,className:`btn-${a} ${o?"loading":""}`,disabled:l||o,style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"10px",...h},...u,children:[o?i.jsx("span",{className:"spinner"}):i.jsxs(i.Fragment,{children:[d&&i.jsx("span",{className:"btn-icon",children:d}),e]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .spinner {
          width: 22px;
          height: 22px;
          border: 2px solid rgba(26, 29, 38, 0.2);
          border-top-color: var(--secondary);
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .btn-primary.loading {
          background: linear-gradient(180deg, var(--primary-muted) 0%, var(--primary) 100%);
          opacity: 0.92;
        }
        .btn-danger { background: #FF5252; color: #fff; border: none; border-radius: var(--radius-pill); }
        .btn-danger:hover { background: #e53935; }
      `}})]});function Je(e,t="حدث خطأ غير متوقع."){var o,l,d;const n=(o=e==null?void 0:e.response)==null?void 0:o.status,a=(l=e==null?void 0:e.response)==null?void 0:l.data;if(!a)return(e==null?void 0:e.message)==="Network Error"?"تعذر الاتصال بالخدمة حالياً. حاول مرة أخرى.":t;if(n>=500)return"حدث خطأ في الخادم. حاول مرة أخرى لاحقاً.";if(n===404)return"العنصر غير موجود أو لم يعد متاحاً.";if(n===403)return"لا تملك صلاحية تنفيذ هذا الإجراء.";if(n===401)return"يرجى تسجيل الدخول للمتابعة.";if(typeof a.error=="string"&&a.error.trim())return a.error.trim();if(typeof a.detail=="string"&&a.detail.trim())return a.detail.trim();if(Array.isArray(a.detail))return a.detail.map(String).join(" — ");if((d=a.non_field_errors)!=null&&d.length)return String(a.non_field_errors[0]);try{const h=Object.values(a).flat().filter(u=>u!=null&&String(u).trim()).map(String);if(h.length)return h.join(" — ")}catch{}return t}const Fk=()=>{const[e,t]=m.useState(!1),[n,a]=m.useState(""),[o,l]=m.useState(""),[d,h]=m.useState(""),[u,f]=m.useState(!1),y=ct(),{showAlert:x}=Ue(),v=()=>{localStorage.removeItem("token"),localStorage.removeItem("refresh"),localStorage.removeItem("user_type"),localStorage.removeItem("user_name"),localStorage.removeItem("is_verified"),localStorage.setItem("isGuest","true"),y("/")},_=async b=>{var z;b.preventDefault(),f(!0),h("");try{await Ry(n.trim(),o),y("/")}catch(C){h("اسم المستخدم أو كلمة المرور غير صحيحة."),x("بيانات الدخول غير صحيحة، يرجى التحقق من اسم المستخدم وكلمة المرور."),console.error("Login error:",C),(((z=C==null?void 0:C.response)==null?void 0:z.status)>=500||(C==null?void 0:C.message)==="Network Error")&&x(Je(C,"تعذر تسجيل الدخول حالياً. حاول لاحقاً."),"خطأ")}finally{f(!1)}};return i.jsx(Ce,{children:i.jsxs("div",{className:"auth-page",children:[i.jsxs("div",{className:"auth-card",style:{maxWidth:420},children:[i.jsxs("div",{className:"auth-chip",children:[i.jsx($t,{size:18,strokeWidth:2.25,"aria-hidden":!0}),"رادار — محلاتك القريبة على الخريطة"]}),i.jsx("img",{className:"auth-logo",src:"/logo.png",alt:"رادار"}),i.jsx("h1",{className:"auth-title",children:"مرحباً بعودتك"}),i.jsx("p",{className:"auth-sub",children:"سجّل الدخول لمزامنة سلتك والعروض والمفضلة."}),d&&i.jsx("p",{style:{color:"#c62828",fontSize:"0.85rem",marginBottom:"12px",fontWeight:700},children:d}),i.jsxs("form",{onSubmit:_,children:[i.jsx(wt,{icon:i.jsx(Bl,{size:18,strokeWidth:2}),placeholder:"اسم المستخدم",value:n,onChange:b=>a(b.target.value),required:!0}),i.jsxs("div",{className:"auth-password-field",children:[i.jsx(wt,{icon:i.jsx(iy,{size:18,strokeWidth:2}),type:e?"text":"password",placeholder:"كلمة المرور",value:o,onChange:b=>l(b.target.value),required:!0}),i.jsx("button",{type:"button",className:"auth-password-eye-btn",onClick:()=>t(!e),"aria-label":e?"إخفاء كلمة المرور":"إظهار كلمة المرور",title:e?"إخفاء":"إظهار",children:e?i.jsx($x,{size:18,strokeWidth:2,"aria-hidden":!0}):i.jsx(qx,{size:18,strokeWidth:2,"aria-hidden":!0})})]}),i.jsx(St,{type:"submit",loading:u,style:{width:"100%",marginTop:"8px"},children:"تسجيل الدخول"})]}),i.jsxs("p",{className:"auth-footer-link",children:["لا تملك حساباً؟ ",i.jsx(me,{to:"/register",children:"إنشاء حساب"})]}),i.jsx("button",{type:"button",className:"btn-ghost auth-guest-btn",onClick:v,children:"التصفّح كزائر"})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .auth-guest-btn {
            width: 100%;
            margin-top: 14px;
            font-family: inherit;
            font-size: 0.92rem;
          }
        `}})]})})};function Xy(e,t){const n=m.useRef(t);m.useEffect(function(){t!==n.current&&e.attributionControl!=null&&(n.current!=null&&e.attributionControl.removeAttribution(n.current),t!=null&&e.attributionControl.addAttribution(t)),n.current=t},[e,t])}const Dk=1;function Wk(e){return Object.freeze({__version:Dk,map:e})}function lp(e,t){return Object.freeze({...e,...t})}const e1=m.createContext(null),cp=e1.Provider;function Go(){const e=m.useContext(e1);if(e==null)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return e}function t1(e){function t(n,a){const{instance:o,context:l}=e(n).current;return m.useImperativeHandle(a,()=>o),n.children==null?null:Jr.createElement(cp,{value:l},n.children)}return m.forwardRef(t)}function Uk(e){function t(n,a){const[o,l]=m.useState(!1),{instance:d}=e(n,l).current;m.useImperativeHandle(a,()=>d),m.useEffect(function(){o&&d.update()},[d,o,n.children]);const h=d._contentNode;return h?Nx.createPortal(n.children,h):null}return m.forwardRef(t)}function Hk(e){function t(n,a){const{instance:o}=e(n).current;return m.useImperativeHandle(a,()=>o),null}return m.forwardRef(t)}function Zk(e){return function(n){const a=Go(),o=e(n,a),{instance:l}=o.current,d=m.useRef(n.position),{position:h}=n;return m.useEffect(function(){return l.addTo(a.map),function(){l.remove()}},[a.map,l]),m.useEffect(function(){h!=null&&h!==d.current&&(l.setPosition(h),d.current=h)},[l,h]),o}}function n1(e,t){const n=m.useRef();m.useEffect(function(){return t!=null&&e.instance.on(t),n.current=t,function(){n.current!=null&&e.instance.off(n.current),n.current=null}},[e,t])}function dp(e,t){const n=e.pane??t.pane;return n?{...e,pane:n}:e}function $k(e,t){return function(a,o){const l=Go(),d=e(dp(a,l),l);return Xy(l.map,a.attribution),n1(d.current,a.eventHandlers),t(d.current,l,a,o),d}}var Yu={exports:{}};/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */(function(e,t){(function(n,a){a(t)})(fv,function(n){var a="1.9.4";function o(r){var s,c,p,g;for(c=1,p=arguments.length;c<p;c++){g=arguments[c];for(s in g)r[s]=g[s]}return r}var l=Object.create||function(){function r(){}return function(s){return r.prototype=s,new r}}();function d(r,s){var c=Array.prototype.slice;if(r.bind)return r.bind.apply(r,c.call(arguments,1));var p=c.call(arguments,2);return function(){return r.apply(s,p.length?p.concat(c.call(arguments)):arguments)}}var h=0;function u(r){return"_leaflet_id"in r||(r._leaflet_id=++h),r._leaflet_id}function f(r,s,c){var p,g,k,A;return A=function(){p=!1,g&&(k.apply(c,g),g=!1)},k=function(){p?g=arguments:(r.apply(c,arguments),setTimeout(A,s),p=!0)},k}function y(r,s,c){var p=s[1],g=s[0],k=p-g;return r===p&&c?r:((r-g)%k+k)%k+g}function x(){return!1}function v(r,s){if(s===!1)return r;var c=Math.pow(10,s===void 0?6:s);return Math.round(r*c)/c}function _(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function b(r){return _(r).split(/\s+/)}function z(r,s){Object.prototype.hasOwnProperty.call(r,"options")||(r.options=r.options?l(r.options):{});for(var c in s)r.options[c]=s[c];return r.options}function C(r,s,c){var p=[];for(var g in r)p.push(encodeURIComponent(c?g.toUpperCase():g)+"="+encodeURIComponent(r[g]));return(!s||s.indexOf("?")===-1?"?":"&")+p.join("&")}var N=/\{ *([\w_ -]+) *\}/g;function w(r,s){return r.replace(N,function(c,p){var g=s[p];if(g===void 0)throw new Error("No value provided for variable "+c);return typeof g=="function"&&(g=g(s)),g})}var S=Array.isArray||function(r){return Object.prototype.toString.call(r)==="[object Array]"};function j(r,s){for(var c=0;c<r.length;c++)if(r[c]===s)return c;return-1}var E="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function M(r){return window["webkit"+r]||window["moz"+r]||window["ms"+r]}var P=0;function O(r){var s=+new Date,c=Math.max(0,16-(s-P));return P=s+c,window.setTimeout(r,c)}var I=window.requestAnimationFrame||M("RequestAnimationFrame")||O,F=window.cancelAnimationFrame||M("CancelAnimationFrame")||M("CancelRequestAnimationFrame")||function(r){window.clearTimeout(r)};function V(r,s,c){if(c&&I===O)r.call(s);else return I.call(window,d(r,s))}function D(r){r&&F.call(window,r)}var ae={__proto__:null,extend:o,create:l,bind:d,get lastId(){return h},stamp:u,throttle:f,wrapNum:y,falseFn:x,formatNum:v,trim:_,splitWords:b,setOptions:z,getParamString:C,template:w,isArray:S,indexOf:j,emptyImageUrl:E,requestFn:I,cancelFn:F,requestAnimFrame:V,cancelAnimFrame:D};function oe(){}oe.extend=function(r){var s=function(){z(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},c=s.__super__=this.prototype,p=l(c);p.constructor=s,s.prototype=p;for(var g in this)Object.prototype.hasOwnProperty.call(this,g)&&g!=="prototype"&&g!=="__super__"&&(s[g]=this[g]);return r.statics&&o(s,r.statics),r.includes&&(Q(r.includes),o.apply(null,[p].concat(r.includes))),o(p,r),delete p.statics,delete p.includes,p.options&&(p.options=c.options?l(c.options):{},o(p.options,r.options)),p._initHooks=[],p.callInitHooks=function(){if(!this._initHooksCalled){c.callInitHooks&&c.callInitHooks.call(this),this._initHooksCalled=!0;for(var k=0,A=p._initHooks.length;k<A;k++)p._initHooks[k].call(this)}},s},oe.include=function(r){var s=this.prototype.options;return o(this.prototype,r),r.options&&(this.prototype.options=s,this.mergeOptions(r.options)),this},oe.mergeOptions=function(r){return o(this.prototype.options,r),this},oe.addInitHook=function(r){var s=Array.prototype.slice.call(arguments,1),c=typeof r=="function"?r:function(){this[r].apply(this,s)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(c),this};function Q(r){if(!(typeof L>"u"||!L||!L.Mixin)){r=S(r)?r:[r];for(var s=0;s<r.length;s++)r[s]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var J={on:function(r,s,c){if(typeof r=="object")for(var p in r)this._on(p,r[p],s);else{r=b(r);for(var g=0,k=r.length;g<k;g++)this._on(r[g],s,c)}return this},off:function(r,s,c){if(!arguments.length)delete this._events;else if(typeof r=="object")for(var p in r)this._off(p,r[p],s);else{r=b(r);for(var g=arguments.length===1,k=0,A=r.length;k<A;k++)g?this._off(r[k]):this._off(r[k],s,c)}return this},_on:function(r,s,c,p){if(typeof s!="function"){console.warn("wrong listener type: "+typeof s);return}if(this._listens(r,s,c)===!1){c===this&&(c=void 0);var g={fn:s,ctx:c};p&&(g.once=!0),this._events=this._events||{},this._events[r]=this._events[r]||[],this._events[r].push(g)}},_off:function(r,s,c){var p,g,k;if(this._events&&(p=this._events[r],!!p)){if(arguments.length===1){if(this._firingCount)for(g=0,k=p.length;g<k;g++)p[g].fn=x;delete this._events[r];return}if(typeof s!="function"){console.warn("wrong listener type: "+typeof s);return}var A=this._listens(r,s,c);if(A!==!1){var U=p[A];this._firingCount&&(U.fn=x,this._events[r]=p=p.slice()),p.splice(A,1)}}},fire:function(r,s,c){if(!this.listens(r,c))return this;var p=o({},s,{type:r,target:this,sourceTarget:s&&s.sourceTarget||this});if(this._events){var g=this._events[r];if(g){this._firingCount=this._firingCount+1||1;for(var k=0,A=g.length;k<A;k++){var U=g[k],$=U.fn;U.once&&this.off(r,$,U.ctx),$.call(U.ctx||this,p)}this._firingCount--}}return c&&this._propagateEvent(p),this},listens:function(r,s,c,p){typeof r!="string"&&console.warn('"string" type argument expected');var g=s;typeof s!="function"&&(p=!!s,g=void 0,c=void 0);var k=this._events&&this._events[r];if(k&&k.length&&this._listens(r,g,c)!==!1)return!0;if(p){for(var A in this._eventParents)if(this._eventParents[A].listens(r,s,c,p))return!0}return!1},_listens:function(r,s,c){if(!this._events)return!1;var p=this._events[r]||[];if(!s)return!!p.length;c===this&&(c=void 0);for(var g=0,k=p.length;g<k;g++)if(p[g].fn===s&&p[g].ctx===c)return g;return!1},once:function(r,s,c){if(typeof r=="object")for(var p in r)this._on(p,r[p],s,!0);else{r=b(r);for(var g=0,k=r.length;g<k;g++)this._on(r[g],s,c,!0)}return this},addEventParent:function(r){return this._eventParents=this._eventParents||{},this._eventParents[u(r)]=r,this},removeEventParent:function(r){return this._eventParents&&delete this._eventParents[u(r)],this},_propagateEvent:function(r){for(var s in this._eventParents)this._eventParents[s].fire(r.type,o({layer:r.target,propagatedFrom:r.target},r),!0)}};J.addEventListener=J.on,J.removeEventListener=J.clearAllEventListeners=J.off,J.addOneTimeEventListener=J.once,J.fireEvent=J.fire,J.hasEventListeners=J.listens;var W=oe.extend(J);function R(r,s,c){this.x=c?Math.round(r):r,this.y=c?Math.round(s):s}var te=Math.trunc||function(r){return r>0?Math.floor(r):Math.ceil(r)};R.prototype={clone:function(){return new R(this.x,this.y)},add:function(r){return this.clone()._add(G(r))},_add:function(r){return this.x+=r.x,this.y+=r.y,this},subtract:function(r){return this.clone()._subtract(G(r))},_subtract:function(r){return this.x-=r.x,this.y-=r.y,this},divideBy:function(r){return this.clone()._divideBy(r)},_divideBy:function(r){return this.x/=r,this.y/=r,this},multiplyBy:function(r){return this.clone()._multiplyBy(r)},_multiplyBy:function(r){return this.x*=r,this.y*=r,this},scaleBy:function(r){return new R(this.x*r.x,this.y*r.y)},unscaleBy:function(r){return new R(this.x/r.x,this.y/r.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=te(this.x),this.y=te(this.y),this},distanceTo:function(r){r=G(r);var s=r.x-this.x,c=r.y-this.y;return Math.sqrt(s*s+c*c)},equals:function(r){return r=G(r),r.x===this.x&&r.y===this.y},contains:function(r){return r=G(r),Math.abs(r.x)<=Math.abs(this.x)&&Math.abs(r.y)<=Math.abs(this.y)},toString:function(){return"Point("+v(this.x)+", "+v(this.y)+")"}};function G(r,s,c){return r instanceof R?r:S(r)?new R(r[0],r[1]):r==null?r:typeof r=="object"&&"x"in r&&"y"in r?new R(r.x,r.y):new R(r,s,c)}function X(r,s){if(r)for(var c=s?[r,s]:r,p=0,g=c.length;p<g;p++)this.extend(c[p])}X.prototype={extend:function(r){var s,c;if(!r)return this;if(r instanceof R||typeof r[0]=="number"||"x"in r)s=c=G(r);else if(r=H(r),s=r.min,c=r.max,!s||!c)return this;return!this.min&&!this.max?(this.min=s.clone(),this.max=c.clone()):(this.min.x=Math.min(s.x,this.min.x),this.max.x=Math.max(c.x,this.max.x),this.min.y=Math.min(s.y,this.min.y),this.max.y=Math.max(c.y,this.max.y)),this},getCenter:function(r){return G((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,r)},getBottomLeft:function(){return G(this.min.x,this.max.y)},getTopRight:function(){return G(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(r){var s,c;return typeof r[0]=="number"||r instanceof R?r=G(r):r=H(r),r instanceof X?(s=r.min,c=r.max):s=c=r,s.x>=this.min.x&&c.x<=this.max.x&&s.y>=this.min.y&&c.y<=this.max.y},intersects:function(r){r=H(r);var s=this.min,c=this.max,p=r.min,g=r.max,k=g.x>=s.x&&p.x<=c.x,A=g.y>=s.y&&p.y<=c.y;return k&&A},overlaps:function(r){r=H(r);var s=this.min,c=this.max,p=r.min,g=r.max,k=g.x>s.x&&p.x<c.x,A=g.y>s.y&&p.y<c.y;return k&&A},isValid:function(){return!!(this.min&&this.max)},pad:function(r){var s=this.min,c=this.max,p=Math.abs(s.x-c.x)*r,g=Math.abs(s.y-c.y)*r;return H(G(s.x-p,s.y-g),G(c.x+p,c.y+g))},equals:function(r){return r?(r=H(r),this.min.equals(r.getTopLeft())&&this.max.equals(r.getBottomRight())):!1}};function H(r,s){return!r||r instanceof X?r:new X(r,s)}function ue(r,s){if(r)for(var c=s?[r,s]:r,p=0,g=c.length;p<g;p++)this.extend(c[p])}ue.prototype={extend:function(r){var s=this._southWest,c=this._northEast,p,g;if(r instanceof Z)p=r,g=r;else if(r instanceof ue){if(p=r._southWest,g=r._northEast,!p||!g)return this}else return r?this.extend(ee(r)||T(r)):this;return!s&&!c?(this._southWest=new Z(p.lat,p.lng),this._northEast=new Z(g.lat,g.lng)):(s.lat=Math.min(p.lat,s.lat),s.lng=Math.min(p.lng,s.lng),c.lat=Math.max(g.lat,c.lat),c.lng=Math.max(g.lng,c.lng)),this},pad:function(r){var s=this._southWest,c=this._northEast,p=Math.abs(s.lat-c.lat)*r,g=Math.abs(s.lng-c.lng)*r;return new ue(new Z(s.lat-p,s.lng-g),new Z(c.lat+p,c.lng+g))},getCenter:function(){return new Z((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new Z(this.getNorth(),this.getWest())},getSouthEast:function(){return new Z(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(r){typeof r[0]=="number"||r instanceof Z||"lat"in r?r=ee(r):r=T(r);var s=this._southWest,c=this._northEast,p,g;return r instanceof ue?(p=r.getSouthWest(),g=r.getNorthEast()):p=g=r,p.lat>=s.lat&&g.lat<=c.lat&&p.lng>=s.lng&&g.lng<=c.lng},intersects:function(r){r=T(r);var s=this._southWest,c=this._northEast,p=r.getSouthWest(),g=r.getNorthEast(),k=g.lat>=s.lat&&p.lat<=c.lat,A=g.lng>=s.lng&&p.lng<=c.lng;return k&&A},overlaps:function(r){r=T(r);var s=this._southWest,c=this._northEast,p=r.getSouthWest(),g=r.getNorthEast(),k=g.lat>s.lat&&p.lat<c.lat,A=g.lng>s.lng&&p.lng<c.lng;return k&&A},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(r,s){return r?(r=T(r),this._southWest.equals(r.getSouthWest(),s)&&this._northEast.equals(r.getNorthEast(),s)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function T(r,s){return r instanceof ue?r:new ue(r,s)}function Z(r,s,c){if(isNaN(r)||isNaN(s))throw new Error("Invalid LatLng object: ("+r+", "+s+")");this.lat=+r,this.lng=+s,c!==void 0&&(this.alt=+c)}Z.prototype={equals:function(r,s){if(!r)return!1;r=ee(r);var c=Math.max(Math.abs(this.lat-r.lat),Math.abs(this.lng-r.lng));return c<=(s===void 0?1e-9:s)},toString:function(r){return"LatLng("+v(this.lat,r)+", "+v(this.lng,r)+")"},distanceTo:function(r){return _e.distance(this,ee(r))},wrap:function(){return _e.wrapLatLng(this)},toBounds:function(r){var s=180*r/40075017,c=s/Math.cos(Math.PI/180*this.lat);return T([this.lat-s,this.lng-c],[this.lat+s,this.lng+c])},clone:function(){return new Z(this.lat,this.lng,this.alt)}};function ee(r,s,c){return r instanceof Z?r:S(r)&&typeof r[0]!="object"?r.length===3?new Z(r[0],r[1],r[2]):r.length===2?new Z(r[0],r[1]):null:r==null?r:typeof r=="object"&&"lat"in r?new Z(r.lat,"lng"in r?r.lng:r.lon,r.alt):s===void 0?null:new Z(r,s,c)}var ye={latLngToPoint:function(r,s){var c=this.projection.project(r),p=this.scale(s);return this.transformation._transform(c,p)},pointToLatLng:function(r,s){var c=this.scale(s),p=this.transformation.untransform(r,c);return this.projection.unproject(p)},project:function(r){return this.projection.project(r)},unproject:function(r){return this.projection.unproject(r)},scale:function(r){return 256*Math.pow(2,r)},zoom:function(r){return Math.log(r/256)/Math.LN2},getProjectedBounds:function(r){if(this.infinite)return null;var s=this.projection.bounds,c=this.scale(r),p=this.transformation.transform(s.min,c),g=this.transformation.transform(s.max,c);return new X(p,g)},infinite:!1,wrapLatLng:function(r){var s=this.wrapLng?y(r.lng,this.wrapLng,!0):r.lng,c=this.wrapLat?y(r.lat,this.wrapLat,!0):r.lat,p=r.alt;return new Z(c,s,p)},wrapLatLngBounds:function(r){var s=r.getCenter(),c=this.wrapLatLng(s),p=s.lat-c.lat,g=s.lng-c.lng;if(p===0&&g===0)return r;var k=r.getSouthWest(),A=r.getNorthEast(),U=new Z(k.lat-p,k.lng-g),$=new Z(A.lat-p,A.lng-g);return new ue(U,$)}},_e=o({},ye,{wrapLng:[-180,180],R:6371e3,distance:function(r,s){var c=Math.PI/180,p=r.lat*c,g=s.lat*c,k=Math.sin((s.lat-r.lat)*c/2),A=Math.sin((s.lng-r.lng)*c/2),U=k*k+Math.cos(p)*Math.cos(g)*A*A,$=2*Math.atan2(Math.sqrt(U),Math.sqrt(1-U));return this.R*$}}),Be=6378137,xe={R:Be,MAX_LATITUDE:85.0511287798,project:function(r){var s=Math.PI/180,c=this.MAX_LATITUDE,p=Math.max(Math.min(c,r.lat),-c),g=Math.sin(p*s);return new R(this.R*r.lng*s,this.R*Math.log((1+g)/(1-g))/2)},unproject:function(r){var s=180/Math.PI;return new Z((2*Math.atan(Math.exp(r.y/this.R))-Math.PI/2)*s,r.x*s/this.R)},bounds:function(){var r=Be*Math.PI;return new X([-r,-r],[r,r])}()};function dt(r,s,c,p){if(S(r)){this._a=r[0],this._b=r[1],this._c=r[2],this._d=r[3];return}this._a=r,this._b=s,this._c=c,this._d=p}dt.prototype={transform:function(r,s){return this._transform(r.clone(),s)},_transform:function(r,s){return s=s||1,r.x=s*(this._a*r.x+this._b),r.y=s*(this._c*r.y+this._d),r},untransform:function(r,s){return s=s||1,new R((r.x/s-this._b)/this._a,(r.y/s-this._d)/this._c)}};function He(r,s,c,p){return new dt(r,s,c,p)}var _n=o({},_e,{code:"EPSG:3857",projection:xe,transformation:function(){var r=.5/(Math.PI*xe.R);return He(r,.5,-r,.5)}()}),pi=o({},_n,{code:"EPSG:900913"});function tr(r){return document.createElementNS("http://www.w3.org/2000/svg",r)}function K(r,s){var c="",p,g,k,A,U,$;for(p=0,k=r.length;p<k;p++){for(U=r[p],g=0,A=U.length;g<A;g++)$=U[g],c+=(g?"L":"M")+$.x+" "+$.y;c+=s?fe.svg?"z":"x":""}return c||"M0 0"}var pe=document.documentElement.style,de="ActiveXObject"in window,ke=de&&!document.addEventListener,Ae="msLaunchUri"in navigator&&!("documentMode"in document),Oe=Wt("webkit"),Fe=Wt("android"),En=Wt("android 2")||Wt("android 3"),Lr=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),bc=Fe&&Wt("Google")&&Lr<537&&!("AudioNode"in window),mi=!!window.opera,Yo=!Ae&&Wt("chrome"),ba=Wt("gecko")&&!Oe&&!mi&&!de,_c=!Yo&&Wt("safari"),_a=Wt("phantom"),Jo="OTransition"in pe,fi=navigator.platform.indexOf("Win")===0,Xo=de&&"transition"in pe,gi="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!En,wa="MozPerspective"in pe,Er=!window.L_DISABLE_3D&&(Xo||gi||wa)&&!Jo&&!_a,Mr=typeof orientation<"u"||Wt("mobile"),wc=Mr&&Oe,es=Mr&&gi,xi=!window.PointerEvent&&window.MSPointerEvent,Tr=!!(window.PointerEvent||xi),Ar="ontouchstart"in window||!!window.TouchEvent,ts=!window.L_NO_TOUCH&&(Ar||Tr),yi=Mr&&mi,Qt=Mr&&ba,Mn=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,jc=function(){var r=!1;try{var s=Object.defineProperty({},"passive",{get:function(){r=!0}});window.addEventListener("testPassiveEventSupport",x,s),window.removeEventListener("testPassiveEventSupport",x,s)}catch{}return r}(),ns=function(){return!!document.createElement("canvas").getContext}(),Tn=!!(document.createElementNS&&tr("svg").createSVGRect),rs=!!Tn&&function(){var r=document.createElement("div");return r.innerHTML="<svg/>",(r.firstChild&&r.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"}(),kc=!Tn&&function(){try{var r=document.createElement("div");r.innerHTML='<v:shape adj="1"/>';var s=r.firstChild;return s.style.behavior="url(#default#VML)",s&&typeof s.adj=="object"}catch{return!1}}(),Sc=navigator.platform.indexOf("Mac")===0,is=navigator.platform.indexOf("Linux")===0;function Wt(r){return navigator.userAgent.toLowerCase().indexOf(r)>=0}var fe={ie:de,ielt9:ke,edge:Ae,webkit:Oe,android:Fe,android23:En,androidStock:bc,opera:mi,chrome:Yo,gecko:ba,safari:_c,phantom:_a,opera12:Jo,win:fi,ie3d:Xo,webkit3d:gi,gecko3d:wa,any3d:Er,mobile:Mr,mobileWebkit:wc,mobileWebkit3d:es,msPointer:xi,pointer:Tr,touch:ts,touchNative:Ar,mobileOpera:yi,mobileGecko:Qt,retina:Mn,passiveEvents:jc,canvas:ns,svg:Tn,vml:kc,inlineSvg:rs,mac:Sc,linux:is},B=fe.msPointer?"MSPointerDown":"pointerdown",re=fe.msPointer?"MSPointerMove":"pointermove",le=fe.msPointer?"MSPointerUp":"pointerup",ge=fe.msPointer?"MSPointerCancel":"pointercancel",Se={touchstart:B,touchmove:re,touchend:le,touchcancel:ge},Yt={touchstart:ls,touchmove:bi,touchend:bi,touchcancel:bi},ot={},Ir=!1;function vi(r,s,c){return s==="touchstart"&&ss(),Yt[s]?(c=Yt[s].bind(this,c),r.addEventListener(Se[s],c,!1),c):(console.warn("wrong event specified:",s),x)}function Nc(r,s,c){if(!Se[s]){console.warn("wrong event specified:",s);return}r.removeEventListener(Se[s],c,!1)}function as(r){ot[r.pointerId]=r}function os(r){ot[r.pointerId]&&(ot[r.pointerId]=r)}function Rr(r){delete ot[r.pointerId]}function ss(){Ir||(document.addEventListener(B,as,!0),document.addEventListener(re,os,!0),document.addEventListener(le,Rr,!0),document.addEventListener(ge,Rr,!0),Ir=!0)}function bi(r,s){if(s.pointerType!==(s.MSPOINTER_TYPE_MOUSE||"mouse")){s.touches=[];for(var c in ot)s.touches.push(ot[c]);s.changedTouches=[s],r(s)}}function ls(r,s){s.MSPOINTER_TYPE_TOUCH&&s.pointerType===s.MSPOINTER_TYPE_TOUCH&&mt(s),bi(r,s)}function f1(r){var s={},c,p;for(p in r)c=r[p],s[p]=c&&c.bind?c.bind(r):c;return r=s,s.type="dblclick",s.detail=2,s.isTrusted=!1,s._simulated=!0,s}var g1=200;function x1(r,s){r.addEventListener("dblclick",s);var c=0,p;function g(k){if(k.detail!==1){p=k.detail;return}if(!(k.pointerType==="mouse"||k.sourceCapabilities&&!k.sourceCapabilities.firesTouchEvents)){var A=vp(k);if(!(A.some(function($){return $ instanceof HTMLLabelElement&&$.attributes.for})&&!A.some(function($){return $ instanceof HTMLInputElement||$ instanceof HTMLSelectElement}))){var U=Date.now();U-c<=g1?(p++,p===2&&s(f1(k))):p=1,c=U}}}return r.addEventListener("click",g),{dblclick:s,simDblclick:g}}function y1(r,s){r.removeEventListener("dblclick",s.dblclick),r.removeEventListener("click",s.simDblclick)}var Cc=us(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),ja=us(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),fp=ja==="webkitTransition"||ja==="OTransition"?ja+"End":"transitionend";function gp(r){return typeof r=="string"?document.getElementById(r):r}function ka(r,s){var c=r.style[s]||r.currentStyle&&r.currentStyle[s];if((!c||c==="auto")&&document.defaultView){var p=document.defaultView.getComputedStyle(r,null);c=p?p[s]:null}return c==="auto"?null:c}function Te(r,s,c){var p=document.createElement(r);return p.className=s||"",c&&c.appendChild(p),p}function Ve(r){var s=r.parentNode;s&&s.removeChild(r)}function cs(r){for(;r.firstChild;)r.removeChild(r.firstChild)}function _i(r){var s=r.parentNode;s&&s.lastChild!==r&&s.appendChild(r)}function wi(r){var s=r.parentNode;s&&s.firstChild!==r&&s.insertBefore(r,s.firstChild)}function zc(r,s){if(r.classList!==void 0)return r.classList.contains(s);var c=ds(r);return c.length>0&&new RegExp("(^|\\s)"+s+"(\\s|$)").test(c)}function Ne(r,s){if(r.classList!==void 0)for(var c=b(s),p=0,g=c.length;p<g;p++)r.classList.add(c[p]);else if(!zc(r,s)){var k=ds(r);Pc(r,(k?k+" ":"")+s)}}function Xe(r,s){r.classList!==void 0?r.classList.remove(s):Pc(r,_((" "+ds(r)+" ").replace(" "+s+" "," ")))}function Pc(r,s){r.className.baseVal===void 0?r.className=s:r.className.baseVal=s}function ds(r){return r.correspondingElement&&(r=r.correspondingElement),r.className.baseVal===void 0?r.className:r.className.baseVal}function Jt(r,s){"opacity"in r.style?r.style.opacity=s:"filter"in r.style&&v1(r,s)}function v1(r,s){var c=!1,p="DXImageTransform.Microsoft.Alpha";try{c=r.filters.item(p)}catch{if(s===1)return}s=Math.round(s*100),c?(c.Enabled=s!==100,c.Opacity=s):r.style.filter+=" progid:"+p+"(opacity="+s+")"}function us(r){for(var s=document.documentElement.style,c=0;c<r.length;c++)if(r[c]in s)return r[c];return!1}function Or(r,s,c){var p=s||new R(0,0);r.style[Cc]=(fe.ie3d?"translate("+p.x+"px,"+p.y+"px)":"translate3d("+p.x+"px,"+p.y+"px,0)")+(c?" scale("+c+")":"")}function rt(r,s){r._leaflet_pos=s,fe.any3d?Or(r,s):(r.style.left=s.x+"px",r.style.top=s.y+"px")}function Br(r){return r._leaflet_pos||new R(0,0)}var Sa,Na,Lc;if("onselectstart"in document)Sa=function(){we(window,"selectstart",mt)},Na=function(){De(window,"selectstart",mt)};else{var Ca=us(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);Sa=function(){if(Ca){var r=document.documentElement.style;Lc=r[Ca],r[Ca]="none"}},Na=function(){Ca&&(document.documentElement.style[Ca]=Lc,Lc=void 0)}}function Ec(){we(window,"dragstart",mt)}function Mc(){De(window,"dragstart",mt)}var hs,Tc;function Ac(r){for(;r.tabIndex===-1;)r=r.parentNode;r.style&&(ps(),hs=r,Tc=r.style.outlineStyle,r.style.outlineStyle="none",we(window,"keydown",ps))}function ps(){hs&&(hs.style.outlineStyle=Tc,hs=void 0,Tc=void 0,De(window,"keydown",ps))}function xp(r){do r=r.parentNode;while((!r.offsetWidth||!r.offsetHeight)&&r!==document.body);return r}function Ic(r){var s=r.getBoundingClientRect();return{x:s.width/r.offsetWidth||1,y:s.height/r.offsetHeight||1,boundingClientRect:s}}var b1={__proto__:null,TRANSFORM:Cc,TRANSITION:ja,TRANSITION_END:fp,get:gp,getStyle:ka,create:Te,remove:Ve,empty:cs,toFront:_i,toBack:wi,hasClass:zc,addClass:Ne,removeClass:Xe,setClass:Pc,getClass:ds,setOpacity:Jt,testProp:us,setTransform:Or,setPosition:rt,getPosition:Br,get disableTextSelection(){return Sa},get enableTextSelection(){return Na},disableImageDrag:Ec,enableImageDrag:Mc,preventOutline:Ac,restoreOutline:ps,getSizedParentNode:xp,getScale:Ic};function we(r,s,c,p){if(s&&typeof s=="object")for(var g in s)Oc(r,g,s[g],c);else{s=b(s);for(var k=0,A=s.length;k<A;k++)Oc(r,s[k],c,p)}return this}var wn="_leaflet_events";function De(r,s,c,p){if(arguments.length===1)yp(r),delete r[wn];else if(s&&typeof s=="object")for(var g in s)Bc(r,g,s[g],c);else if(s=b(s),arguments.length===2)yp(r,function(U){return j(s,U)!==-1});else for(var k=0,A=s.length;k<A;k++)Bc(r,s[k],c,p);return this}function yp(r,s){for(var c in r[wn]){var p=c.split(/\d/)[0];(!s||s(p))&&Bc(r,p,null,null,c)}}var Rc={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function Oc(r,s,c,p){var g=s+u(c)+(p?"_"+u(p):"");if(r[wn]&&r[wn][g])return this;var k=function(U){return c.call(p||r,U||window.event)},A=k;!fe.touchNative&&fe.pointer&&s.indexOf("touch")===0?k=vi(r,s,k):fe.touch&&s==="dblclick"?k=x1(r,k):"addEventListener"in r?s==="touchstart"||s==="touchmove"||s==="wheel"||s==="mousewheel"?r.addEventListener(Rc[s]||s,k,fe.passiveEvents?{passive:!1}:!1):s==="mouseenter"||s==="mouseleave"?(k=function(U){U=U||window.event,Dc(r,U)&&A(U)},r.addEventListener(Rc[s],k,!1)):r.addEventListener(s,A,!1):r.attachEvent("on"+s,k),r[wn]=r[wn]||{},r[wn][g]=k}function Bc(r,s,c,p,g){g=g||s+u(c)+(p?"_"+u(p):"");var k=r[wn]&&r[wn][g];if(!k)return this;!fe.touchNative&&fe.pointer&&s.indexOf("touch")===0?Nc(r,s,k):fe.touch&&s==="dblclick"?y1(r,k):"removeEventListener"in r?r.removeEventListener(Rc[s]||s,k,!1):r.detachEvent("on"+s,k),r[wn][g]=null}function Fr(r){return r.stopPropagation?r.stopPropagation():r.originalEvent?r.originalEvent._stopped=!0:r.cancelBubble=!0,this}function Fc(r){return Oc(r,"wheel",Fr),this}function za(r){return we(r,"mousedown touchstart dblclick contextmenu",Fr),r._leaflet_disable_click=!0,this}function mt(r){return r.preventDefault?r.preventDefault():r.returnValue=!1,this}function Dr(r){return mt(r),Fr(r),this}function vp(r){if(r.composedPath)return r.composedPath();for(var s=[],c=r.target;c;)s.push(c),c=c.parentNode;return s}function bp(r,s){if(!s)return new R(r.clientX,r.clientY);var c=Ic(s),p=c.boundingClientRect;return new R((r.clientX-p.left)/c.x-s.clientLeft,(r.clientY-p.top)/c.y-s.clientTop)}var _1=fe.linux&&fe.chrome?window.devicePixelRatio:fe.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function _p(r){return fe.edge?r.wheelDeltaY/2:r.deltaY&&r.deltaMode===0?-r.deltaY/_1:r.deltaY&&r.deltaMode===1?-r.deltaY*20:r.deltaY&&r.deltaMode===2?-r.deltaY*60:r.deltaX||r.deltaZ?0:r.wheelDelta?(r.wheelDeltaY||r.wheelDelta)/2:r.detail&&Math.abs(r.detail)<32765?-r.detail*20:r.detail?r.detail/-32765*60:0}function Dc(r,s){var c=s.relatedTarget;if(!c)return!0;try{for(;c&&c!==r;)c=c.parentNode}catch{return!1}return c!==r}var w1={__proto__:null,on:we,off:De,stopPropagation:Fr,disableScrollPropagation:Fc,disableClickPropagation:za,preventDefault:mt,stop:Dr,getPropagationPath:vp,getMousePosition:bp,getWheelDelta:_p,isExternalTarget:Dc,addListener:we,removeListener:De},wp=W.extend({run:function(r,s,c,p){this.stop(),this._el=r,this._inProgress=!0,this._duration=c||.25,this._easeOutPower=1/Math.max(p||.5,.2),this._startPos=Br(r),this._offset=s.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=V(this._animate,this),this._step()},_step:function(r){var s=+new Date-this._startTime,c=this._duration*1e3;s<c?this._runFrame(this._easeOut(s/c),r):(this._runFrame(1),this._complete())},_runFrame:function(r,s){var c=this._startPos.add(this._offset.multiplyBy(r));s&&c._round(),rt(this._el,c),this.fire("step")},_complete:function(){D(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(r){return 1-Math.pow(1-r,this._easeOutPower)}}),Ee=W.extend({options:{crs:_n,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(r,s){s=z(this,s),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(r),this._initLayout(),this._onResize=d(this._onResize,this),this._initEvents(),s.maxBounds&&this.setMaxBounds(s.maxBounds),s.zoom!==void 0&&(this._zoom=this._limitZoom(s.zoom)),s.center&&s.zoom!==void 0&&this.setView(ee(s.center),s.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=ja&&fe.any3d&&!fe.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),we(this._proxy,fp,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(r,s,c){if(s=s===void 0?this._zoom:this._limitZoom(s),r=this._limitCenter(ee(r),s,this.options.maxBounds),c=c||{},this._stop(),this._loaded&&!c.reset&&c!==!0){c.animate!==void 0&&(c.zoom=o({animate:c.animate},c.zoom),c.pan=o({animate:c.animate,duration:c.duration},c.pan));var p=this._zoom!==s?this._tryAnimatedZoom&&this._tryAnimatedZoom(r,s,c.zoom):this._tryAnimatedPan(r,c.pan);if(p)return clearTimeout(this._sizeTimer),this}return this._resetView(r,s,c.pan&&c.pan.noMoveStart),this},setZoom:function(r,s){return this._loaded?this.setView(this.getCenter(),r,{zoom:s}):(this._zoom=r,this)},zoomIn:function(r,s){return r=r||(fe.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+r,s)},zoomOut:function(r,s){return r=r||(fe.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-r,s)},setZoomAround:function(r,s,c){var p=this.getZoomScale(s),g=this.getSize().divideBy(2),k=r instanceof R?r:this.latLngToContainerPoint(r),A=k.subtract(g).multiplyBy(1-1/p),U=this.containerPointToLatLng(g.add(A));return this.setView(U,s,{zoom:c})},_getBoundsCenterZoom:function(r,s){s=s||{},r=r.getBounds?r.getBounds():T(r);var c=G(s.paddingTopLeft||s.padding||[0,0]),p=G(s.paddingBottomRight||s.padding||[0,0]),g=this.getBoundsZoom(r,!1,c.add(p));if(g=typeof s.maxZoom=="number"?Math.min(s.maxZoom,g):g,g===1/0)return{center:r.getCenter(),zoom:g};var k=p.subtract(c).divideBy(2),A=this.project(r.getSouthWest(),g),U=this.project(r.getNorthEast(),g),$=this.unproject(A.add(U).divideBy(2).add(k),g);return{center:$,zoom:g}},fitBounds:function(r,s){if(r=T(r),!r.isValid())throw new Error("Bounds are not valid.");var c=this._getBoundsCenterZoom(r,s);return this.setView(c.center,c.zoom,s)},fitWorld:function(r){return this.fitBounds([[-90,-180],[90,180]],r)},panTo:function(r,s){return this.setView(r,this._zoom,{pan:s})},panBy:function(r,s){if(r=G(r).round(),s=s||{},!r.x&&!r.y)return this.fire("moveend");if(s.animate!==!0&&!this.getSize().contains(r))return this._resetView(this.unproject(this.project(this.getCenter()).add(r)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new wp,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),s.noMoveStart||this.fire("movestart"),s.animate!==!1){Ne(this._mapPane,"leaflet-pan-anim");var c=this._getMapPanePos().subtract(r).round();this._panAnim.run(this._mapPane,c,s.duration||.25,s.easeLinearity)}else this._rawPanBy(r),this.fire("move").fire("moveend");return this},flyTo:function(r,s,c){if(c=c||{},c.animate===!1||!fe.any3d)return this.setView(r,s,c);this._stop();var p=this.project(this.getCenter()),g=this.project(r),k=this.getSize(),A=this._zoom;r=ee(r),s=s===void 0?A:s;var U=Math.max(k.x,k.y),$=U*this.getZoomScale(A,s),ne=g.distanceTo(p)||1,ce=1.42,ve=ce*ce;function ze(it){var Ss=it?-1:1,dv=it?$:U,uv=$*$-U*U+Ss*ve*ve*ne*ne,hv=2*dv*ve*ne,Yc=uv/hv,nm=Math.sqrt(Yc*Yc+1)-Yc,pv=nm<1e-9?-18:Math.log(nm);return pv}function Nt(it){return(Math.exp(it)-Math.exp(-it))/2}function ut(it){return(Math.exp(it)+Math.exp(-it))/2}function en(it){return Nt(it)/ut(it)}var Mt=ze(0);function zi(it){return U*(ut(Mt)/ut(Mt+ce*it))}function ov(it){return U*(ut(Mt)*en(Mt+ce*it)-Nt(Mt))/ve}function sv(it){return 1-Math.pow(1-it,1.5)}var lv=Date.now(),em=(ze(1)-Mt)/ce,cv=c.duration?1e3*c.duration:1e3*em*.8;function tm(){var it=(Date.now()-lv)/cv,Ss=sv(it)*em;it<=1?(this._flyToFrame=V(tm,this),this._move(this.unproject(p.add(g.subtract(p).multiplyBy(ov(Ss)/ne)),A),this.getScaleZoom(U/zi(Ss),A),{flyTo:!0})):this._move(r,s)._moveEnd(!0)}return this._moveStart(!0,c.noMoveStart),tm.call(this),this},flyToBounds:function(r,s){var c=this._getBoundsCenterZoom(r,s);return this.flyTo(c.center,c.zoom,s)},setMaxBounds:function(r){return r=T(r),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),r.isValid()?(this.options.maxBounds=r,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(r){var s=this.options.minZoom;return this.options.minZoom=r,this._loaded&&s!==r&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(r):this},setMaxZoom:function(r){var s=this.options.maxZoom;return this.options.maxZoom=r,this._loaded&&s!==r&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(r):this},panInsideBounds:function(r,s){this._enforcingBounds=!0;var c=this.getCenter(),p=this._limitCenter(c,this._zoom,T(r));return c.equals(p)||this.panTo(p,s),this._enforcingBounds=!1,this},panInside:function(r,s){s=s||{};var c=G(s.paddingTopLeft||s.padding||[0,0]),p=G(s.paddingBottomRight||s.padding||[0,0]),g=this.project(this.getCenter()),k=this.project(r),A=this.getPixelBounds(),U=H([A.min.add(c),A.max.subtract(p)]),$=U.getSize();if(!U.contains(k)){this._enforcingBounds=!0;var ne=k.subtract(U.getCenter()),ce=U.extend(k).getSize().subtract($);g.x+=ne.x<0?-ce.x:ce.x,g.y+=ne.y<0?-ce.y:ce.y,this.panTo(this.unproject(g),s),this._enforcingBounds=!1}return this},invalidateSize:function(r){if(!this._loaded)return this;r=o({animate:!1,pan:!0},r===!0?{animate:!0}:r);var s=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var c=this.getSize(),p=s.divideBy(2).round(),g=c.divideBy(2).round(),k=p.subtract(g);return!k.x&&!k.y?this:(r.animate&&r.pan?this.panBy(k):(r.pan&&this._rawPanBy(k),this.fire("move"),r.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(d(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:s,newSize:c}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(r){if(r=this._locateOptions=o({timeout:1e4,watch:!1},r),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var s=d(this._handleGeolocationResponse,this),c=d(this._handleGeolocationError,this);return r.watch?this._locationWatchId=navigator.geolocation.watchPosition(s,c,r):navigator.geolocation.getCurrentPosition(s,c,r),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(r){if(this._container._leaflet_id){var s=r.code,c=r.message||(s===1?"permission denied":s===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:s,message:"Geolocation error: "+c+"."})}},_handleGeolocationResponse:function(r){if(this._container._leaflet_id){var s=r.coords.latitude,c=r.coords.longitude,p=new Z(s,c),g=p.toBounds(r.coords.accuracy*2),k=this._locateOptions;if(k.setView){var A=this.getBoundsZoom(g);this.setView(p,k.maxZoom?Math.min(A,k.maxZoom):A)}var U={latlng:p,bounds:g,timestamp:r.timestamp};for(var $ in r.coords)typeof r.coords[$]=="number"&&(U[$]=r.coords[$]);this.fire("locationfound",U)}},addHandler:function(r,s){if(!s)return this;var c=this[r]=new s(this);return this._handlers.push(c),this.options[r]&&c.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),Ve(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(D(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var r;for(r in this._layers)this._layers[r].remove();for(r in this._panes)Ve(this._panes[r]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(r,s){var c="leaflet-pane"+(r?" leaflet-"+r.replace("Pane","")+"-pane":""),p=Te("div",c,s||this._mapPane);return r&&(this._panes[r]=p),p},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var r=this.getPixelBounds(),s=this.unproject(r.getBottomLeft()),c=this.unproject(r.getTopRight());return new ue(s,c)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(r,s,c){r=T(r),c=G(c||[0,0]);var p=this.getZoom()||0,g=this.getMinZoom(),k=this.getMaxZoom(),A=r.getNorthWest(),U=r.getSouthEast(),$=this.getSize().subtract(c),ne=H(this.project(U,p),this.project(A,p)).getSize(),ce=fe.any3d?this.options.zoomSnap:1,ve=$.x/ne.x,ze=$.y/ne.y,Nt=s?Math.max(ve,ze):Math.min(ve,ze);return p=this.getScaleZoom(Nt,p),ce&&(p=Math.round(p/(ce/100))*(ce/100),p=s?Math.ceil(p/ce)*ce:Math.floor(p/ce)*ce),Math.max(g,Math.min(k,p))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new R(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(r,s){var c=this._getTopLeftPoint(r,s);return new X(c,c.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(r){return this.options.crs.getProjectedBounds(r===void 0?this.getZoom():r)},getPane:function(r){return typeof r=="string"?this._panes[r]:r},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(r,s){var c=this.options.crs;return s=s===void 0?this._zoom:s,c.scale(r)/c.scale(s)},getScaleZoom:function(r,s){var c=this.options.crs;s=s===void 0?this._zoom:s;var p=c.zoom(r*c.scale(s));return isNaN(p)?1/0:p},project:function(r,s){return s=s===void 0?this._zoom:s,this.options.crs.latLngToPoint(ee(r),s)},unproject:function(r,s){return s=s===void 0?this._zoom:s,this.options.crs.pointToLatLng(G(r),s)},layerPointToLatLng:function(r){var s=G(r).add(this.getPixelOrigin());return this.unproject(s)},latLngToLayerPoint:function(r){var s=this.project(ee(r))._round();return s._subtract(this.getPixelOrigin())},wrapLatLng:function(r){return this.options.crs.wrapLatLng(ee(r))},wrapLatLngBounds:function(r){return this.options.crs.wrapLatLngBounds(T(r))},distance:function(r,s){return this.options.crs.distance(ee(r),ee(s))},containerPointToLayerPoint:function(r){return G(r).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(r){return G(r).add(this._getMapPanePos())},containerPointToLatLng:function(r){var s=this.containerPointToLayerPoint(G(r));return this.layerPointToLatLng(s)},latLngToContainerPoint:function(r){return this.layerPointToContainerPoint(this.latLngToLayerPoint(ee(r)))},mouseEventToContainerPoint:function(r){return bp(r,this._container)},mouseEventToLayerPoint:function(r){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(r))},mouseEventToLatLng:function(r){return this.layerPointToLatLng(this.mouseEventToLayerPoint(r))},_initContainer:function(r){var s=this._container=gp(r);if(s){if(s._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");we(s,"scroll",this._onScroll,this),this._containerId=u(s)},_initLayout:function(){var r=this._container;this._fadeAnimated=this.options.fadeAnimation&&fe.any3d,Ne(r,"leaflet-container"+(fe.touch?" leaflet-touch":"")+(fe.retina?" leaflet-retina":"")+(fe.ielt9?" leaflet-oldie":"")+(fe.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var s=ka(r,"position");s!=="absolute"&&s!=="relative"&&s!=="fixed"&&s!=="sticky"&&(r.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var r=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),rt(this._mapPane,new R(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(Ne(r.markerPane,"leaflet-zoom-hide"),Ne(r.shadowPane,"leaflet-zoom-hide"))},_resetView:function(r,s,c){rt(this._mapPane,new R(0,0));var p=!this._loaded;this._loaded=!0,s=this._limitZoom(s),this.fire("viewprereset");var g=this._zoom!==s;this._moveStart(g,c)._move(r,s)._moveEnd(g),this.fire("viewreset"),p&&this.fire("load")},_moveStart:function(r,s){return r&&this.fire("zoomstart"),s||this.fire("movestart"),this},_move:function(r,s,c,p){s===void 0&&(s=this._zoom);var g=this._zoom!==s;return this._zoom=s,this._lastCenter=r,this._pixelOrigin=this._getNewPixelOrigin(r),p?c&&c.pinch&&this.fire("zoom",c):((g||c&&c.pinch)&&this.fire("zoom",c),this.fire("move",c)),this},_moveEnd:function(r){return r&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return D(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(r){rt(this._mapPane,this._getMapPanePos().subtract(r))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(r){this._targets={},this._targets[u(this._container)]=this;var s=r?De:we;s(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&s(window,"resize",this._onResize,this),fe.any3d&&this.options.transform3DLimit&&(r?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){D(this._resizeRequest),this._resizeRequest=V(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var r=this._getMapPanePos();Math.max(Math.abs(r.x),Math.abs(r.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(r,s){for(var c=[],p,g=s==="mouseout"||s==="mouseover",k=r.target||r.srcElement,A=!1;k;){if(p=this._targets[u(k)],p&&(s==="click"||s==="preclick")&&this._draggableMoved(p)){A=!0;break}if(p&&p.listens(s,!0)&&(g&&!Dc(k,r)||(c.push(p),g))||k===this._container)break;k=k.parentNode}return!c.length&&!A&&!g&&this.listens(s,!0)&&(c=[this]),c},_isClickDisabled:function(r){for(;r&&r!==this._container;){if(r._leaflet_disable_click)return!0;r=r.parentNode}},_handleDOMEvent:function(r){var s=r.target||r.srcElement;if(!(!this._loaded||s._leaflet_disable_events||r.type==="click"&&this._isClickDisabled(s))){var c=r.type;c==="mousedown"&&Ac(s),this._fireDOMEvent(r,c)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(r,s,c){if(r.type==="click"){var p=o({},r);p.type="preclick",this._fireDOMEvent(p,p.type,c)}var g=this._findEventTargets(r,s);if(c){for(var k=[],A=0;A<c.length;A++)c[A].listens(s,!0)&&k.push(c[A]);g=k.concat(g)}if(g.length){s==="contextmenu"&&mt(r);var U=g[0],$={originalEvent:r};if(r.type!=="keypress"&&r.type!=="keydown"&&r.type!=="keyup"){var ne=U.getLatLng&&(!U._radius||U._radius<=10);$.containerPoint=ne?this.latLngToContainerPoint(U.getLatLng()):this.mouseEventToContainerPoint(r),$.layerPoint=this.containerPointToLayerPoint($.containerPoint),$.latlng=ne?U.getLatLng():this.layerPointToLatLng($.layerPoint)}for(A=0;A<g.length;A++)if(g[A].fire(s,$,!0),$.originalEvent._stopped||g[A].options.bubblingMouseEvents===!1&&j(this._mouseEvents,s)!==-1)return}},_draggableMoved:function(r){return r=r.dragging&&r.dragging.enabled()?r:this,r.dragging&&r.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var r=0,s=this._handlers.length;r<s;r++)this._handlers[r].disable()},whenReady:function(r,s){return this._loaded?r.call(s||this,{target:this}):this.on("load",r,s),this},_getMapPanePos:function(){return Br(this._mapPane)||new R(0,0)},_moved:function(){var r=this._getMapPanePos();return r&&!r.equals([0,0])},_getTopLeftPoint:function(r,s){var c=r&&s!==void 0?this._getNewPixelOrigin(r,s):this.getPixelOrigin();return c.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(r,s){var c=this.getSize()._divideBy(2);return this.project(r,s)._subtract(c)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(r,s,c){var p=this._getNewPixelOrigin(c,s);return this.project(r,s)._subtract(p)},_latLngBoundsToNewLayerBounds:function(r,s,c){var p=this._getNewPixelOrigin(c,s);return H([this.project(r.getSouthWest(),s)._subtract(p),this.project(r.getNorthWest(),s)._subtract(p),this.project(r.getSouthEast(),s)._subtract(p),this.project(r.getNorthEast(),s)._subtract(p)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(r){return this.latLngToLayerPoint(r).subtract(this._getCenterLayerPoint())},_limitCenter:function(r,s,c){if(!c)return r;var p=this.project(r,s),g=this.getSize().divideBy(2),k=new X(p.subtract(g),p.add(g)),A=this._getBoundsOffset(k,c,s);return Math.abs(A.x)<=1&&Math.abs(A.y)<=1?r:this.unproject(p.add(A),s)},_limitOffset:function(r,s){if(!s)return r;var c=this.getPixelBounds(),p=new X(c.min.add(r),c.max.add(r));return r.add(this._getBoundsOffset(p,s))},_getBoundsOffset:function(r,s,c){var p=H(this.project(s.getNorthEast(),c),this.project(s.getSouthWest(),c)),g=p.min.subtract(r.min),k=p.max.subtract(r.max),A=this._rebound(g.x,-k.x),U=this._rebound(g.y,-k.y);return new R(A,U)},_rebound:function(r,s){return r+s>0?Math.round(r-s)/2:Math.max(0,Math.ceil(r))-Math.max(0,Math.floor(s))},_limitZoom:function(r){var s=this.getMinZoom(),c=this.getMaxZoom(),p=fe.any3d?this.options.zoomSnap:1;return p&&(r=Math.round(r/p)*p),Math.max(s,Math.min(c,r))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){Xe(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(r,s){var c=this._getCenterOffset(r)._trunc();return(s&&s.animate)!==!0&&!this.getSize().contains(c)?!1:(this.panBy(c,s),!0)},_createAnimProxy:function(){var r=this._proxy=Te("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(r),this.on("zoomanim",function(s){var c=Cc,p=this._proxy.style[c];Or(this._proxy,this.project(s.center,s.zoom),this.getZoomScale(s.zoom,1)),p===this._proxy.style[c]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){Ve(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var r=this.getCenter(),s=this.getZoom();Or(this._proxy,this.project(r,s),this.getZoomScale(s,1))},_catchTransitionEnd:function(r){this._animatingZoom&&r.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(r,s,c){if(this._animatingZoom)return!0;if(c=c||{},!this._zoomAnimated||c.animate===!1||this._nothingToAnimate()||Math.abs(s-this._zoom)>this.options.zoomAnimationThreshold)return!1;var p=this.getZoomScale(s),g=this._getCenterOffset(r)._divideBy(1-1/p);return c.animate!==!0&&!this.getSize().contains(g)?!1:(V(function(){this._moveStart(!0,c.noMoveStart||!1)._animateZoom(r,s,!0)},this),!0)},_animateZoom:function(r,s,c,p){this._mapPane&&(c&&(this._animatingZoom=!0,this._animateToCenter=r,this._animateToZoom=s,Ne(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:r,zoom:s,noUpdate:p}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(d(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&Xe(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function j1(r,s){return new Ee(r,s)}var cn=oe.extend({options:{position:"topright"},initialize:function(r){z(this,r)},getPosition:function(){return this.options.position},setPosition:function(r){var s=this._map;return s&&s.removeControl(this),this.options.position=r,s&&s.addControl(this),this},getContainer:function(){return this._container},addTo:function(r){this.remove(),this._map=r;var s=this._container=this.onAdd(r),c=this.getPosition(),p=r._controlCorners[c];return Ne(s,"leaflet-control"),c.indexOf("bottom")!==-1?p.insertBefore(s,p.firstChild):p.appendChild(s),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(Ve(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(r){this._map&&r&&r.screenX>0&&r.screenY>0&&this._map.getContainer().focus()}}),Pa=function(r){return new cn(r)};Ee.include({addControl:function(r){return r.addTo(this),this},removeControl:function(r){return r.remove(),this},_initControlPos:function(){var r=this._controlCorners={},s="leaflet-",c=this._controlContainer=Te("div",s+"control-container",this._container);function p(g,k){var A=s+g+" "+s+k;r[g+k]=Te("div",A,c)}p("top","left"),p("top","right"),p("bottom","left"),p("bottom","right")},_clearControlPos:function(){for(var r in this._controlCorners)Ve(this._controlCorners[r]);Ve(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var jp=cn.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(r,s,c,p){return c<p?-1:p<c?1:0}},initialize:function(r,s,c){z(this,c),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var p in r)this._addLayer(r[p],p);for(p in s)this._addLayer(s[p],p,!0)},onAdd:function(r){this._initLayout(),this._update(),this._map=r,r.on("zoomend",this._checkDisabledLayers,this);for(var s=0;s<this._layers.length;s++)this._layers[s].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(r){return cn.prototype.addTo.call(this,r),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var r=0;r<this._layers.length;r++)this._layers[r].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(r,s){return this._addLayer(r,s),this._map?this._update():this},addOverlay:function(r,s){return this._addLayer(r,s,!0),this._map?this._update():this},removeLayer:function(r){r.off("add remove",this._onLayerChange,this);var s=this._getLayer(u(r));return s&&this._layers.splice(this._layers.indexOf(s),1),this._map?this._update():this},expand:function(){Ne(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var r=this._map.getSize().y-(this._container.offsetTop+50);return r<this._section.clientHeight?(Ne(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=r+"px"):Xe(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return Xe(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var r="leaflet-control-layers",s=this._container=Te("div",r),c=this.options.collapsed;s.setAttribute("aria-haspopup",!0),za(s),Fc(s);var p=this._section=Te("section",r+"-list");c&&(this._map.on("click",this.collapse,this),we(s,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var g=this._layersLink=Te("a",r+"-toggle",s);g.href="#",g.title="Layers",g.setAttribute("role","button"),we(g,{keydown:function(k){k.keyCode===13&&this._expandSafely()},click:function(k){mt(k),this._expandSafely()}},this),c||this.expand(),this._baseLayersList=Te("div",r+"-base",p),this._separator=Te("div",r+"-separator",p),this._overlaysList=Te("div",r+"-overlays",p),s.appendChild(p)},_getLayer:function(r){for(var s=0;s<this._layers.length;s++)if(this._layers[s]&&u(this._layers[s].layer)===r)return this._layers[s]},_addLayer:function(r,s,c){this._map&&r.on("add remove",this._onLayerChange,this),this._layers.push({layer:r,name:s,overlay:c}),this.options.sortLayers&&this._layers.sort(d(function(p,g){return this.options.sortFunction(p.layer,g.layer,p.name,g.name)},this)),this.options.autoZIndex&&r.setZIndex&&(this._lastZIndex++,r.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;cs(this._baseLayersList),cs(this._overlaysList),this._layerControlInputs=[];var r,s,c,p,g=0;for(c=0;c<this._layers.length;c++)p=this._layers[c],this._addItem(p),s=s||p.overlay,r=r||!p.overlay,g+=p.overlay?0:1;return this.options.hideSingleBase&&(r=r&&g>1,this._baseLayersList.style.display=r?"":"none"),this._separator.style.display=s&&r?"":"none",this},_onLayerChange:function(r){this._handlingClick||this._update();var s=this._getLayer(u(r.target)),c=s.overlay?r.type==="add"?"overlayadd":"overlayremove":r.type==="add"?"baselayerchange":null;c&&this._map.fire(c,s)},_createRadioElement:function(r,s){var c='<input type="radio" class="leaflet-control-layers-selector" name="'+r+'"'+(s?' checked="checked"':"")+"/>",p=document.createElement("div");return p.innerHTML=c,p.firstChild},_addItem:function(r){var s=document.createElement("label"),c=this._map.hasLayer(r.layer),p;r.overlay?(p=document.createElement("input"),p.type="checkbox",p.className="leaflet-control-layers-selector",p.defaultChecked=c):p=this._createRadioElement("leaflet-base-layers_"+u(this),c),this._layerControlInputs.push(p),p.layerId=u(r.layer),we(p,"click",this._onInputClick,this);var g=document.createElement("span");g.innerHTML=" "+r.name;var k=document.createElement("span");s.appendChild(k),k.appendChild(p),k.appendChild(g);var A=r.overlay?this._overlaysList:this._baseLayersList;return A.appendChild(s),this._checkDisabledLayers(),s},_onInputClick:function(){if(!this._preventClick){var r=this._layerControlInputs,s,c,p=[],g=[];this._handlingClick=!0;for(var k=r.length-1;k>=0;k--)s=r[k],c=this._getLayer(s.layerId).layer,s.checked?p.push(c):s.checked||g.push(c);for(k=0;k<g.length;k++)this._map.hasLayer(g[k])&&this._map.removeLayer(g[k]);for(k=0;k<p.length;k++)this._map.hasLayer(p[k])||this._map.addLayer(p[k]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var r=this._layerControlInputs,s,c,p=this._map.getZoom(),g=r.length-1;g>=0;g--)s=r[g],c=this._getLayer(s.layerId).layer,s.disabled=c.options.minZoom!==void 0&&p<c.options.minZoom||c.options.maxZoom!==void 0&&p>c.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var r=this._section;this._preventClick=!0,we(r,"click",mt),this.expand();var s=this;setTimeout(function(){De(r,"click",mt),s._preventClick=!1})}}),k1=function(r,s,c){return new jp(r,s,c)},Wc=cn.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(r){var s="leaflet-control-zoom",c=Te("div",s+" leaflet-bar"),p=this.options;return this._zoomInButton=this._createButton(p.zoomInText,p.zoomInTitle,s+"-in",c,this._zoomIn),this._zoomOutButton=this._createButton(p.zoomOutText,p.zoomOutTitle,s+"-out",c,this._zoomOut),this._updateDisabled(),r.on("zoomend zoomlevelschange",this._updateDisabled,this),c},onRemove:function(r){r.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(r){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(r.shiftKey?3:1))},_zoomOut:function(r){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(r.shiftKey?3:1))},_createButton:function(r,s,c,p,g){var k=Te("a",c,p);return k.innerHTML=r,k.href="#",k.title=s,k.setAttribute("role","button"),k.setAttribute("aria-label",s),za(k),we(k,"click",Dr),we(k,"click",g,this),we(k,"click",this._refocusOnMap,this),k},_updateDisabled:function(){var r=this._map,s="leaflet-disabled";Xe(this._zoomInButton,s),Xe(this._zoomOutButton,s),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||r._zoom===r.getMinZoom())&&(Ne(this._zoomOutButton,s),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||r._zoom===r.getMaxZoom())&&(Ne(this._zoomInButton,s),this._zoomInButton.setAttribute("aria-disabled","true"))}});Ee.mergeOptions({zoomControl:!0}),Ee.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new Wc,this.addControl(this.zoomControl))});var S1=function(r){return new Wc(r)},kp=cn.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(r){var s="leaflet-control-scale",c=Te("div",s),p=this.options;return this._addScales(p,s+"-line",c),r.on(p.updateWhenIdle?"moveend":"move",this._update,this),r.whenReady(this._update,this),c},onRemove:function(r){r.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(r,s,c){r.metric&&(this._mScale=Te("div",s,c)),r.imperial&&(this._iScale=Te("div",s,c))},_update:function(){var r=this._map,s=r.getSize().y/2,c=r.distance(r.containerPointToLatLng([0,s]),r.containerPointToLatLng([this.options.maxWidth,s]));this._updateScales(c)},_updateScales:function(r){this.options.metric&&r&&this._updateMetric(r),this.options.imperial&&r&&this._updateImperial(r)},_updateMetric:function(r){var s=this._getRoundNum(r),c=s<1e3?s+" m":s/1e3+" km";this._updateScale(this._mScale,c,s/r)},_updateImperial:function(r){var s=r*3.2808399,c,p,g;s>5280?(c=s/5280,p=this._getRoundNum(c),this._updateScale(this._iScale,p+" mi",p/c)):(g=this._getRoundNum(s),this._updateScale(this._iScale,g+" ft",g/s))},_updateScale:function(r,s,c){r.style.width=Math.round(this.options.maxWidth*c)+"px",r.innerHTML=s},_getRoundNum:function(r){var s=Math.pow(10,(Math.floor(r)+"").length-1),c=r/s;return c=c>=10?10:c>=5?5:c>=3?3:c>=2?2:1,s*c}}),N1=function(r){return new kp(r)},C1='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',Uc=cn.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(fe.inlineSvg?C1+" ":"")+"Leaflet</a>"},initialize:function(r){z(this,r),this._attributions={}},onAdd:function(r){r.attributionControl=this,this._container=Te("div","leaflet-control-attribution"),za(this._container);for(var s in r._layers)r._layers[s].getAttribution&&this.addAttribution(r._layers[s].getAttribution());return this._update(),r.on("layeradd",this._addAttribution,this),this._container},onRemove:function(r){r.off("layeradd",this._addAttribution,this)},_addAttribution:function(r){r.layer.getAttribution&&(this.addAttribution(r.layer.getAttribution()),r.layer.once("remove",function(){this.removeAttribution(r.layer.getAttribution())},this))},setPrefix:function(r){return this.options.prefix=r,this._update(),this},addAttribution:function(r){return r?(this._attributions[r]||(this._attributions[r]=0),this._attributions[r]++,this._update(),this):this},removeAttribution:function(r){return r?(this._attributions[r]&&(this._attributions[r]--,this._update()),this):this},_update:function(){if(this._map){var r=[];for(var s in this._attributions)this._attributions[s]&&r.push(s);var c=[];this.options.prefix&&c.push(this.options.prefix),r.length&&c.push(r.join(", ")),this._container.innerHTML=c.join(' <span aria-hidden="true">|</span> ')}}});Ee.mergeOptions({attributionControl:!0}),Ee.addInitHook(function(){this.options.attributionControl&&new Uc().addTo(this)});var z1=function(r){return new Uc(r)};cn.Layers=jp,cn.Zoom=Wc,cn.Scale=kp,cn.Attribution=Uc,Pa.layers=k1,Pa.zoom=S1,Pa.scale=N1,Pa.attribution=z1;var jn=oe.extend({initialize:function(r){this._map=r},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});jn.addTo=function(r,s){return r.addHandler(s,this),this};var P1={Events:J},Sp=fe.touch?"touchstart mousedown":"mousedown",nr=W.extend({options:{clickTolerance:3},initialize:function(r,s,c,p){z(this,p),this._element=r,this._dragStartTarget=s||r,this._preventOutline=c},enable:function(){this._enabled||(we(this._dragStartTarget,Sp,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(nr._dragging===this&&this.finishDrag(!0),De(this._dragStartTarget,Sp,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(r){if(this._enabled&&(this._moved=!1,!zc(this._element,"leaflet-zoom-anim"))){if(r.touches&&r.touches.length!==1){nr._dragging===this&&this.finishDrag();return}if(!(nr._dragging||r.shiftKey||r.which!==1&&r.button!==1&&!r.touches)&&(nr._dragging=this,this._preventOutline&&Ac(this._element),Ec(),Sa(),!this._moving)){this.fire("down");var s=r.touches?r.touches[0]:r,c=xp(this._element);this._startPoint=new R(s.clientX,s.clientY),this._startPos=Br(this._element),this._parentScale=Ic(c);var p=r.type==="mousedown";we(document,p?"mousemove":"touchmove",this._onMove,this),we(document,p?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(r){if(this._enabled){if(r.touches&&r.touches.length>1){this._moved=!0;return}var s=r.touches&&r.touches.length===1?r.touches[0]:r,c=new R(s.clientX,s.clientY)._subtract(this._startPoint);!c.x&&!c.y||Math.abs(c.x)+Math.abs(c.y)<this.options.clickTolerance||(c.x/=this._parentScale.x,c.y/=this._parentScale.y,mt(r),this._moved||(this.fire("dragstart"),this._moved=!0,Ne(document.body,"leaflet-dragging"),this._lastTarget=r.target||r.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),Ne(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(c),this._moving=!0,this._lastEvent=r,this._updatePosition())}},_updatePosition:function(){var r={originalEvent:this._lastEvent};this.fire("predrag",r),rt(this._element,this._newPos),this.fire("drag",r)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(r){Xe(document.body,"leaflet-dragging"),this._lastTarget&&(Xe(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),De(document,"mousemove touchmove",this._onMove,this),De(document,"mouseup touchend touchcancel",this._onUp,this),Mc(),Na();var s=this._moved&&this._moving;this._moving=!1,nr._dragging=!1,s&&this.fire("dragend",{noInertia:r,distance:this._newPos.distanceTo(this._startPos)})}});function Np(r,s,c){var p,g=[1,4,2,8],k,A,U,$,ne,ce,ve,ze;for(k=0,ce=r.length;k<ce;k++)r[k]._code=Wr(r[k],s);for(U=0;U<4;U++){for(ve=g[U],p=[],k=0,ce=r.length,A=ce-1;k<ce;A=k++)$=r[k],ne=r[A],$._code&ve?ne._code&ve||(ze=ms(ne,$,ve,s,c),ze._code=Wr(ze,s),p.push(ze)):(ne._code&ve&&(ze=ms(ne,$,ve,s,c),ze._code=Wr(ze,s),p.push(ze)),p.push($));r=p}return r}function Cp(r,s){var c,p,g,k,A,U,$,ne,ce;if(!r||r.length===0)throw new Error("latlngs not passed");Xt(r)||(console.warn("latlngs are not flat! Only the first ring will be used"),r=r[0]);var ve=ee([0,0]),ze=T(r),Nt=ze.getNorthWest().distanceTo(ze.getSouthWest())*ze.getNorthEast().distanceTo(ze.getNorthWest());Nt<1700&&(ve=Hc(r));var ut=r.length,en=[];for(c=0;c<ut;c++){var Mt=ee(r[c]);en.push(s.project(ee([Mt.lat-ve.lat,Mt.lng-ve.lng])))}for(U=$=ne=0,c=0,p=ut-1;c<ut;p=c++)g=en[c],k=en[p],A=g.y*k.x-k.y*g.x,$+=(g.x+k.x)*A,ne+=(g.y+k.y)*A,U+=A*3;U===0?ce=en[0]:ce=[$/U,ne/U];var zi=s.unproject(G(ce));return ee([zi.lat+ve.lat,zi.lng+ve.lng])}function Hc(r){for(var s=0,c=0,p=0,g=0;g<r.length;g++){var k=ee(r[g]);s+=k.lat,c+=k.lng,p++}return ee([s/p,c/p])}var L1={__proto__:null,clipPolygon:Np,polygonCenter:Cp,centroid:Hc};function zp(r,s){if(!s||!r.length)return r.slice();var c=s*s;return r=T1(r,c),r=M1(r,c),r}function Pp(r,s,c){return Math.sqrt(La(r,s,c,!0))}function E1(r,s,c){return La(r,s,c)}function M1(r,s){var c=r.length,p=typeof Uint8Array<"u"?Uint8Array:Array,g=new p(c);g[0]=g[c-1]=1,Zc(r,g,s,0,c-1);var k,A=[];for(k=0;k<c;k++)g[k]&&A.push(r[k]);return A}function Zc(r,s,c,p,g){var k=0,A,U,$;for(U=p+1;U<=g-1;U++)$=La(r[U],r[p],r[g],!0),$>k&&(A=U,k=$);k>c&&(s[A]=1,Zc(r,s,c,p,A),Zc(r,s,c,A,g))}function T1(r,s){for(var c=[r[0]],p=1,g=0,k=r.length;p<k;p++)A1(r[p],r[g])>s&&(c.push(r[p]),g=p);return g<k-1&&c.push(r[k-1]),c}var Lp;function Ep(r,s,c,p,g){var k=p?Lp:Wr(r,c),A=Wr(s,c),U,$,ne;for(Lp=A;;){if(!(k|A))return[r,s];if(k&A)return!1;U=k||A,$=ms(r,s,U,c,g),ne=Wr($,c),U===k?(r=$,k=ne):(s=$,A=ne)}}function ms(r,s,c,p,g){var k=s.x-r.x,A=s.y-r.y,U=p.min,$=p.max,ne,ce;return c&8?(ne=r.x+k*($.y-r.y)/A,ce=$.y):c&4?(ne=r.x+k*(U.y-r.y)/A,ce=U.y):c&2?(ne=$.x,ce=r.y+A*($.x-r.x)/k):c&1&&(ne=U.x,ce=r.y+A*(U.x-r.x)/k),new R(ne,ce,g)}function Wr(r,s){var c=0;return r.x<s.min.x?c|=1:r.x>s.max.x&&(c|=2),r.y<s.min.y?c|=4:r.y>s.max.y&&(c|=8),c}function A1(r,s){var c=s.x-r.x,p=s.y-r.y;return c*c+p*p}function La(r,s,c,p){var g=s.x,k=s.y,A=c.x-g,U=c.y-k,$=A*A+U*U,ne;return $>0&&(ne=((r.x-g)*A+(r.y-k)*U)/$,ne>1?(g=c.x,k=c.y):ne>0&&(g+=A*ne,k+=U*ne)),A=r.x-g,U=r.y-k,p?A*A+U*U:new R(g,k)}function Xt(r){return!S(r[0])||typeof r[0][0]!="object"&&typeof r[0][0]<"u"}function Mp(r){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),Xt(r)}function Tp(r,s){var c,p,g,k,A,U,$,ne;if(!r||r.length===0)throw new Error("latlngs not passed");Xt(r)||(console.warn("latlngs are not flat! Only the first ring will be used"),r=r[0]);var ce=ee([0,0]),ve=T(r),ze=ve.getNorthWest().distanceTo(ve.getSouthWest())*ve.getNorthEast().distanceTo(ve.getNorthWest());ze<1700&&(ce=Hc(r));var Nt=r.length,ut=[];for(c=0;c<Nt;c++){var en=ee(r[c]);ut.push(s.project(ee([en.lat-ce.lat,en.lng-ce.lng])))}for(c=0,p=0;c<Nt-1;c++)p+=ut[c].distanceTo(ut[c+1])/2;if(p===0)ne=ut[0];else for(c=0,k=0;c<Nt-1;c++)if(A=ut[c],U=ut[c+1],g=A.distanceTo(U),k+=g,k>p){$=(k-p)/g,ne=[U.x-$*(U.x-A.x),U.y-$*(U.y-A.y)];break}var Mt=s.unproject(G(ne));return ee([Mt.lat+ce.lat,Mt.lng+ce.lng])}var I1={__proto__:null,simplify:zp,pointToSegmentDistance:Pp,closestPointOnSegment:E1,clipSegment:Ep,_getEdgeIntersection:ms,_getBitCode:Wr,_sqClosestPointOnSegment:La,isFlat:Xt,_flat:Mp,polylineCenter:Tp},$c={project:function(r){return new R(r.lng,r.lat)},unproject:function(r){return new Z(r.y,r.x)},bounds:new X([-180,-90],[180,90])},qc={R:6378137,R_MINOR:6356752314245179e-9,bounds:new X([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(r){var s=Math.PI/180,c=this.R,p=r.lat*s,g=this.R_MINOR/c,k=Math.sqrt(1-g*g),A=k*Math.sin(p),U=Math.tan(Math.PI/4-p/2)/Math.pow((1-A)/(1+A),k/2);return p=-c*Math.log(Math.max(U,1e-10)),new R(r.lng*s*c,p)},unproject:function(r){for(var s=180/Math.PI,c=this.R,p=this.R_MINOR/c,g=Math.sqrt(1-p*p),k=Math.exp(-r.y/c),A=Math.PI/2-2*Math.atan(k),U=0,$=.1,ne;U<15&&Math.abs($)>1e-7;U++)ne=g*Math.sin(A),ne=Math.pow((1-ne)/(1+ne),g/2),$=Math.PI/2-2*Math.atan(k*ne)-A,A+=$;return new Z(A*s,r.x*s/c)}},R1={__proto__:null,LonLat:$c,Mercator:qc,SphericalMercator:xe},O1=o({},_e,{code:"EPSG:3395",projection:qc,transformation:function(){var r=.5/(Math.PI*qc.R);return He(r,.5,-r,.5)}()}),Ap=o({},_e,{code:"EPSG:4326",projection:$c,transformation:He(1/180,1,-1/180,.5)}),B1=o({},ye,{projection:$c,transformation:He(1,0,-1,0),scale:function(r){return Math.pow(2,r)},zoom:function(r){return Math.log(r)/Math.LN2},distance:function(r,s){var c=s.lng-r.lng,p=s.lat-r.lat;return Math.sqrt(c*c+p*p)},infinite:!0});ye.Earth=_e,ye.EPSG3395=O1,ye.EPSG3857=_n,ye.EPSG900913=pi,ye.EPSG4326=Ap,ye.Simple=B1;var dn=W.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(r){return r.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(r){return r&&r.removeLayer(this),this},getPane:function(r){return this._map.getPane(r?this.options[r]||r:this.options.pane)},addInteractiveTarget:function(r){return this._map._targets[u(r)]=this,this},removeInteractiveTarget:function(r){return delete this._map._targets[u(r)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(r){var s=r.target;if(s.hasLayer(this)){if(this._map=s,this._zoomAnimated=s._zoomAnimated,this.getEvents){var c=this.getEvents();s.on(c,this),this.once("remove",function(){s.off(c,this)},this)}this.onAdd(s),this.fire("add"),s.fire("layeradd",{layer:this})}}});Ee.include({addLayer:function(r){if(!r._layerAdd)throw new Error("The provided object is not a Layer.");var s=u(r);return this._layers[s]?this:(this._layers[s]=r,r._mapToAdd=this,r.beforeAdd&&r.beforeAdd(this),this.whenReady(r._layerAdd,r),this)},removeLayer:function(r){var s=u(r);return this._layers[s]?(this._loaded&&r.onRemove(this),delete this._layers[s],this._loaded&&(this.fire("layerremove",{layer:r}),r.fire("remove")),r._map=r._mapToAdd=null,this):this},hasLayer:function(r){return u(r)in this._layers},eachLayer:function(r,s){for(var c in this._layers)r.call(s,this._layers[c]);return this},_addLayers:function(r){r=r?S(r)?r:[r]:[];for(var s=0,c=r.length;s<c;s++)this.addLayer(r[s])},_addZoomLimit:function(r){(!isNaN(r.options.maxZoom)||!isNaN(r.options.minZoom))&&(this._zoomBoundLayers[u(r)]=r,this._updateZoomLevels())},_removeZoomLimit:function(r){var s=u(r);this._zoomBoundLayers[s]&&(delete this._zoomBoundLayers[s],this._updateZoomLevels())},_updateZoomLevels:function(){var r=1/0,s=-1/0,c=this._getZoomSpan();for(var p in this._zoomBoundLayers){var g=this._zoomBoundLayers[p].options;r=g.minZoom===void 0?r:Math.min(r,g.minZoom),s=g.maxZoom===void 0?s:Math.max(s,g.maxZoom)}this._layersMaxZoom=s===-1/0?void 0:s,this._layersMinZoom=r===1/0?void 0:r,c!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var ji=dn.extend({initialize:function(r,s){z(this,s),this._layers={};var c,p;if(r)for(c=0,p=r.length;c<p;c++)this.addLayer(r[c])},addLayer:function(r){var s=this.getLayerId(r);return this._layers[s]=r,this._map&&this._map.addLayer(r),this},removeLayer:function(r){var s=r in this._layers?r:this.getLayerId(r);return this._map&&this._layers[s]&&this._map.removeLayer(this._layers[s]),delete this._layers[s],this},hasLayer:function(r){var s=typeof r=="number"?r:this.getLayerId(r);return s in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(r){var s=Array.prototype.slice.call(arguments,1),c,p;for(c in this._layers)p=this._layers[c],p[r]&&p[r].apply(p,s);return this},onAdd:function(r){this.eachLayer(r.addLayer,r)},onRemove:function(r){this.eachLayer(r.removeLayer,r)},eachLayer:function(r,s){for(var c in this._layers)r.call(s,this._layers[c]);return this},getLayer:function(r){return this._layers[r]},getLayers:function(){var r=[];return this.eachLayer(r.push,r),r},setZIndex:function(r){return this.invoke("setZIndex",r)},getLayerId:function(r){return u(r)}}),F1=function(r,s){return new ji(r,s)},An=ji.extend({addLayer:function(r){return this.hasLayer(r)?this:(r.addEventParent(this),ji.prototype.addLayer.call(this,r),this.fire("layeradd",{layer:r}))},removeLayer:function(r){return this.hasLayer(r)?(r in this._layers&&(r=this._layers[r]),r.removeEventParent(this),ji.prototype.removeLayer.call(this,r),this.fire("layerremove",{layer:r})):this},setStyle:function(r){return this.invoke("setStyle",r)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var r=new ue;for(var s in this._layers){var c=this._layers[s];r.extend(c.getBounds?c.getBounds():c.getLatLng())}return r}}),D1=function(r,s){return new An(r,s)},ki=oe.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(r){z(this,r)},createIcon:function(r){return this._createIcon("icon",r)},createShadow:function(r){return this._createIcon("shadow",r)},_createIcon:function(r,s){var c=this._getIconUrl(r);if(!c){if(r==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var p=this._createImg(c,s&&s.tagName==="IMG"?s:null);return this._setIconStyles(p,r),(this.options.crossOrigin||this.options.crossOrigin==="")&&(p.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),p},_setIconStyles:function(r,s){var c=this.options,p=c[s+"Size"];typeof p=="number"&&(p=[p,p]);var g=G(p),k=G(s==="shadow"&&c.shadowAnchor||c.iconAnchor||g&&g.divideBy(2,!0));r.className="leaflet-marker-"+s+" "+(c.className||""),k&&(r.style.marginLeft=-k.x+"px",r.style.marginTop=-k.y+"px"),g&&(r.style.width=g.x+"px",r.style.height=g.y+"px")},_createImg:function(r,s){return s=s||document.createElement("img"),s.src=r,s},_getIconUrl:function(r){return fe.retina&&this.options[r+"RetinaUrl"]||this.options[r+"Url"]}});function W1(r){return new ki(r)}var Ea=ki.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(r){return typeof Ea.imagePath!="string"&&(Ea.imagePath=this._detectIconPath()),(this.options.imagePath||Ea.imagePath)+ki.prototype._getIconUrl.call(this,r)},_stripUrl:function(r){var s=function(c,p,g){var k=p.exec(c);return k&&k[g]};return r=s(r,/^url\((['"])?(.+)\1\)$/,2),r&&s(r,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var r=Te("div","leaflet-default-icon-path",document.body),s=ka(r,"background-image")||ka(r,"backgroundImage");if(document.body.removeChild(r),s=this._stripUrl(s),s)return s;var c=document.querySelector('link[href$="leaflet.css"]');return c?c.href.substring(0,c.href.length-11-1):""}}),Ip=jn.extend({initialize:function(r){this._marker=r},addHooks:function(){var r=this._marker._icon;this._draggable||(this._draggable=new nr(r,r,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),Ne(r,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&Xe(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(r){var s=this._marker,c=s._map,p=this._marker.options.autoPanSpeed,g=this._marker.options.autoPanPadding,k=Br(s._icon),A=c.getPixelBounds(),U=c.getPixelOrigin(),$=H(A.min._subtract(U).add(g),A.max._subtract(U).subtract(g));if(!$.contains(k)){var ne=G((Math.max($.max.x,k.x)-$.max.x)/(A.max.x-$.max.x)-(Math.min($.min.x,k.x)-$.min.x)/(A.min.x-$.min.x),(Math.max($.max.y,k.y)-$.max.y)/(A.max.y-$.max.y)-(Math.min($.min.y,k.y)-$.min.y)/(A.min.y-$.min.y)).multiplyBy(p);c.panBy(ne,{animate:!1}),this._draggable._newPos._add(ne),this._draggable._startPos._add(ne),rt(s._icon,this._draggable._newPos),this._onDrag(r),this._panRequest=V(this._adjustPan.bind(this,r))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(r){this._marker.options.autoPan&&(D(this._panRequest),this._panRequest=V(this._adjustPan.bind(this,r)))},_onDrag:function(r){var s=this._marker,c=s._shadow,p=Br(s._icon),g=s._map.layerPointToLatLng(p);c&&rt(c,p),s._latlng=g,r.latlng=g,r.oldLatLng=this._oldLatLng,s.fire("move",r).fire("drag",r)},_onDragEnd:function(r){D(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",r)}}),fs=dn.extend({options:{icon:new Ea,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(r,s){z(this,s),this._latlng=ee(r)},onAdd:function(r){this._zoomAnimated=this._zoomAnimated&&r.options.markerZoomAnimation,this._zoomAnimated&&r.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(r){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&r.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(r){var s=this._latlng;return this._latlng=ee(r),this.update(),this.fire("move",{oldLatLng:s,latlng:this._latlng})},setZIndexOffset:function(r){return this.options.zIndexOffset=r,this.update()},getIcon:function(){return this.options.icon},setIcon:function(r){return this.options.icon=r,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var r=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(r)}return this},_initIcon:function(){var r=this.options,s="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),c=r.icon.createIcon(this._icon),p=!1;c!==this._icon&&(this._icon&&this._removeIcon(),p=!0,r.title&&(c.title=r.title),c.tagName==="IMG"&&(c.alt=r.alt||"")),Ne(c,s),r.keyboard&&(c.tabIndex="0",c.setAttribute("role","button")),this._icon=c,r.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&we(c,"focus",this._panOnFocus,this);var g=r.icon.createShadow(this._shadow),k=!1;g!==this._shadow&&(this._removeShadow(),k=!0),g&&(Ne(g,s),g.alt=""),this._shadow=g,r.opacity<1&&this._updateOpacity(),p&&this.getPane().appendChild(this._icon),this._initInteraction(),g&&k&&this.getPane(r.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&De(this._icon,"focus",this._panOnFocus,this),Ve(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&Ve(this._shadow),this._shadow=null},_setPos:function(r){this._icon&&rt(this._icon,r),this._shadow&&rt(this._shadow,r),this._zIndex=r.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(r){this._icon&&(this._icon.style.zIndex=this._zIndex+r)},_animateZoom:function(r){var s=this._map._latLngToNewLayerPoint(this._latlng,r.zoom,r.center).round();this._setPos(s)},_initInteraction:function(){if(this.options.interactive&&(Ne(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Ip)){var r=this.options.draggable;this.dragging&&(r=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Ip(this),r&&this.dragging.enable()}},setOpacity:function(r){return this.options.opacity=r,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var r=this.options.opacity;this._icon&&Jt(this._icon,r),this._shadow&&Jt(this._shadow,r)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var r=this._map;if(r){var s=this.options.icon.options,c=s.iconSize?G(s.iconSize):G(0,0),p=s.iconAnchor?G(s.iconAnchor):G(0,0);r.panInside(this._latlng,{paddingTopLeft:p,paddingBottomRight:c.subtract(p)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function U1(r,s){return new fs(r,s)}var rr=dn.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(r){this._renderer=r.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(r){return z(this,r),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&r&&Object.prototype.hasOwnProperty.call(r,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),gs=rr.extend({options:{fill:!0,radius:10},initialize:function(r,s){z(this,s),this._latlng=ee(r),this._radius=this.options.radius},setLatLng:function(r){var s=this._latlng;return this._latlng=ee(r),this.redraw(),this.fire("move",{oldLatLng:s,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(r){return this.options.radius=this._radius=r,this.redraw()},getRadius:function(){return this._radius},setStyle:function(r){var s=r&&r.radius||this._radius;return rr.prototype.setStyle.call(this,r),this.setRadius(s),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var r=this._radius,s=this._radiusY||r,c=this._clickTolerance(),p=[r+c,s+c];this._pxBounds=new X(this._point.subtract(p),this._point.add(p))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(r){return r.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function H1(r,s){return new gs(r,s)}var Vc=gs.extend({initialize:function(r,s,c){if(typeof s=="number"&&(s=o({},c,{radius:s})),z(this,s),this._latlng=ee(r),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(r){return this._mRadius=r,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var r=[this._radius,this._radiusY||this._radius];return new ue(this._map.layerPointToLatLng(this._point.subtract(r)),this._map.layerPointToLatLng(this._point.add(r)))},setStyle:rr.prototype.setStyle,_project:function(){var r=this._latlng.lng,s=this._latlng.lat,c=this._map,p=c.options.crs;if(p.distance===_e.distance){var g=Math.PI/180,k=this._mRadius/_e.R/g,A=c.project([s+k,r]),U=c.project([s-k,r]),$=A.add(U).divideBy(2),ne=c.unproject($).lat,ce=Math.acos((Math.cos(k*g)-Math.sin(s*g)*Math.sin(ne*g))/(Math.cos(s*g)*Math.cos(ne*g)))/g;(isNaN(ce)||ce===0)&&(ce=k/Math.cos(Math.PI/180*s)),this._point=$.subtract(c.getPixelOrigin()),this._radius=isNaN(ce)?0:$.x-c.project([ne,r-ce]).x,this._radiusY=$.y-A.y}else{var ve=p.unproject(p.project(this._latlng).subtract([this._mRadius,0]));this._point=c.latLngToLayerPoint(this._latlng),this._radius=this._point.x-c.latLngToLayerPoint(ve).x}this._updateBounds()}});function Z1(r,s,c){return new Vc(r,s,c)}var In=rr.extend({options:{smoothFactor:1,noClip:!1},initialize:function(r,s){z(this,s),this._setLatLngs(r)},getLatLngs:function(){return this._latlngs},setLatLngs:function(r){return this._setLatLngs(r),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(r){for(var s=1/0,c=null,p=La,g,k,A=0,U=this._parts.length;A<U;A++)for(var $=this._parts[A],ne=1,ce=$.length;ne<ce;ne++){g=$[ne-1],k=$[ne];var ve=p(r,g,k,!0);ve<s&&(s=ve,c=p(r,g,k))}return c&&(c.distance=Math.sqrt(s)),c},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Tp(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(r,s){return s=s||this._defaultShape(),r=ee(r),s.push(r),this._bounds.extend(r),this.redraw()},_setLatLngs:function(r){this._bounds=new ue,this._latlngs=this._convertLatLngs(r)},_defaultShape:function(){return Xt(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(r){for(var s=[],c=Xt(r),p=0,g=r.length;p<g;p++)c?(s[p]=ee(r[p]),this._bounds.extend(s[p])):s[p]=this._convertLatLngs(r[p]);return s},_project:function(){var r=new X;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,r),this._bounds.isValid()&&r.isValid()&&(this._rawPxBounds=r,this._updateBounds())},_updateBounds:function(){var r=this._clickTolerance(),s=new R(r,r);this._rawPxBounds&&(this._pxBounds=new X([this._rawPxBounds.min.subtract(s),this._rawPxBounds.max.add(s)]))},_projectLatlngs:function(r,s,c){var p=r[0]instanceof Z,g=r.length,k,A;if(p){for(A=[],k=0;k<g;k++)A[k]=this._map.latLngToLayerPoint(r[k]),c.extend(A[k]);s.push(A)}else for(k=0;k<g;k++)this._projectLatlngs(r[k],s,c)},_clipPoints:function(){var r=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(r))){if(this.options.noClip){this._parts=this._rings;return}var s=this._parts,c,p,g,k,A,U,$;for(c=0,g=0,k=this._rings.length;c<k;c++)for($=this._rings[c],p=0,A=$.length;p<A-1;p++)U=Ep($[p],$[p+1],r,p,!0),U&&(s[g]=s[g]||[],s[g].push(U[0]),(U[1]!==$[p+1]||p===A-2)&&(s[g].push(U[1]),g++))}},_simplifyPoints:function(){for(var r=this._parts,s=this.options.smoothFactor,c=0,p=r.length;c<p;c++)r[c]=zp(r[c],s)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(r,s){var c,p,g,k,A,U,$=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(r))return!1;for(c=0,k=this._parts.length;c<k;c++)for(U=this._parts[c],p=0,A=U.length,g=A-1;p<A;g=p++)if(!(!s&&p===0)&&Pp(r,U[g],U[p])<=$)return!0;return!1}});function $1(r,s){return new In(r,s)}In._flat=Mp;var Si=In.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Cp(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(r){var s=In.prototype._convertLatLngs.call(this,r),c=s.length;return c>=2&&s[0]instanceof Z&&s[0].equals(s[c-1])&&s.pop(),s},_setLatLngs:function(r){In.prototype._setLatLngs.call(this,r),Xt(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return Xt(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var r=this._renderer._bounds,s=this.options.weight,c=new R(s,s);if(r=new X(r.min.subtract(c),r.max.add(c)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(r))){if(this.options.noClip){this._parts=this._rings;return}for(var p=0,g=this._rings.length,k;p<g;p++)k=Np(this._rings[p],r,!0),k.length&&this._parts.push(k)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(r){var s=!1,c,p,g,k,A,U,$,ne;if(!this._pxBounds||!this._pxBounds.contains(r))return!1;for(k=0,$=this._parts.length;k<$;k++)for(c=this._parts[k],A=0,ne=c.length,U=ne-1;A<ne;U=A++)p=c[A],g=c[U],p.y>r.y!=g.y>r.y&&r.x<(g.x-p.x)*(r.y-p.y)/(g.y-p.y)+p.x&&(s=!s);return s||In.prototype._containsPoint.call(this,r,!0)}});function q1(r,s){return new Si(r,s)}var Rn=An.extend({initialize:function(r,s){z(this,s),this._layers={},r&&this.addData(r)},addData:function(r){var s=S(r)?r:r.features,c,p,g;if(s){for(c=0,p=s.length;c<p;c++)g=s[c],(g.geometries||g.geometry||g.features||g.coordinates)&&this.addData(g);return this}var k=this.options;if(k.filter&&!k.filter(r))return this;var A=xs(r,k);return A?(A.feature=bs(r),A.defaultOptions=A.options,this.resetStyle(A),k.onEachFeature&&k.onEachFeature(r,A),this.addLayer(A)):this},resetStyle:function(r){return r===void 0?this.eachLayer(this.resetStyle,this):(r.options=o({},r.defaultOptions),this._setLayerStyle(r,this.options.style),this)},setStyle:function(r){return this.eachLayer(function(s){this._setLayerStyle(s,r)},this)},_setLayerStyle:function(r,s){r.setStyle&&(typeof s=="function"&&(s=s(r.feature)),r.setStyle(s))}});function xs(r,s){var c=r.type==="Feature"?r.geometry:r,p=c?c.coordinates:null,g=[],k=s&&s.pointToLayer,A=s&&s.coordsToLatLng||Gc,U,$,ne,ce;if(!p&&!c)return null;switch(c.type){case"Point":return U=A(p),Rp(k,r,U,s);case"MultiPoint":for(ne=0,ce=p.length;ne<ce;ne++)U=A(p[ne]),g.push(Rp(k,r,U,s));return new An(g);case"LineString":case"MultiLineString":return $=ys(p,c.type==="LineString"?0:1,A),new In($,s);case"Polygon":case"MultiPolygon":return $=ys(p,c.type==="Polygon"?1:2,A),new Si($,s);case"GeometryCollection":for(ne=0,ce=c.geometries.length;ne<ce;ne++){var ve=xs({geometry:c.geometries[ne],type:"Feature",properties:r.properties},s);ve&&g.push(ve)}return new An(g);case"FeatureCollection":for(ne=0,ce=c.features.length;ne<ce;ne++){var ze=xs(c.features[ne],s);ze&&g.push(ze)}return new An(g);default:throw new Error("Invalid GeoJSON object.")}}function Rp(r,s,c,p){return r?r(s,c):new fs(c,p&&p.markersInheritOptions&&p)}function Gc(r){return new Z(r[1],r[0],r[2])}function ys(r,s,c){for(var p=[],g=0,k=r.length,A;g<k;g++)A=s?ys(r[g],s-1,c):(c||Gc)(r[g]),p.push(A);return p}function Kc(r,s){return r=ee(r),r.alt!==void 0?[v(r.lng,s),v(r.lat,s),v(r.alt,s)]:[v(r.lng,s),v(r.lat,s)]}function vs(r,s,c,p){for(var g=[],k=0,A=r.length;k<A;k++)g.push(s?vs(r[k],Xt(r[k])?0:s-1,c,p):Kc(r[k],p));return!s&&c&&g.length>0&&g.push(g[0].slice()),g}function Ni(r,s){return r.feature?o({},r.feature,{geometry:s}):bs(s)}function bs(r){return r.type==="Feature"||r.type==="FeatureCollection"?r:{type:"Feature",properties:{},geometry:r}}var Qc={toGeoJSON:function(r){return Ni(this,{type:"Point",coordinates:Kc(this.getLatLng(),r)})}};fs.include(Qc),Vc.include(Qc),gs.include(Qc),In.include({toGeoJSON:function(r){var s=!Xt(this._latlngs),c=vs(this._latlngs,s?1:0,!1,r);return Ni(this,{type:(s?"Multi":"")+"LineString",coordinates:c})}}),Si.include({toGeoJSON:function(r){var s=!Xt(this._latlngs),c=s&&!Xt(this._latlngs[0]),p=vs(this._latlngs,c?2:s?1:0,!0,r);return s||(p=[p]),Ni(this,{type:(c?"Multi":"")+"Polygon",coordinates:p})}}),ji.include({toMultiPoint:function(r){var s=[];return this.eachLayer(function(c){s.push(c.toGeoJSON(r).geometry.coordinates)}),Ni(this,{type:"MultiPoint",coordinates:s})},toGeoJSON:function(r){var s=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(s==="MultiPoint")return this.toMultiPoint(r);var c=s==="GeometryCollection",p=[];return this.eachLayer(function(g){if(g.toGeoJSON){var k=g.toGeoJSON(r);if(c)p.push(k.geometry);else{var A=bs(k);A.type==="FeatureCollection"?p.push.apply(p,A.features):p.push(A)}}}),c?Ni(this,{geometries:p,type:"GeometryCollection"}):{type:"FeatureCollection",features:p}}});function Op(r,s){return new Rn(r,s)}var V1=Op,_s=dn.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(r,s,c){this._url=r,this._bounds=T(s),z(this,c)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(Ne(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){Ve(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(r){return this.options.opacity=r,this._image&&this._updateOpacity(),this},setStyle:function(r){return r.opacity&&this.setOpacity(r.opacity),this},bringToFront:function(){return this._map&&_i(this._image),this},bringToBack:function(){return this._map&&wi(this._image),this},setUrl:function(r){return this._url=r,this._image&&(this._image.src=r),this},setBounds:function(r){return this._bounds=T(r),this._map&&this._reset(),this},getEvents:function(){var r={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(r.zoomanim=this._animateZoom),r},setZIndex:function(r){return this.options.zIndex=r,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var r=this._url.tagName==="IMG",s=this._image=r?this._url:Te("img");if(Ne(s,"leaflet-image-layer"),this._zoomAnimated&&Ne(s,"leaflet-zoom-animated"),this.options.className&&Ne(s,this.options.className),s.onselectstart=x,s.onmousemove=x,s.onload=d(this.fire,this,"load"),s.onerror=d(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(s.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),r){this._url=s.src;return}s.src=this._url,s.alt=this.options.alt},_animateZoom:function(r){var s=this._map.getZoomScale(r.zoom),c=this._map._latLngBoundsToNewLayerBounds(this._bounds,r.zoom,r.center).min;Or(this._image,c,s)},_reset:function(){var r=this._image,s=new X(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),c=s.getSize();rt(r,s.min),r.style.width=c.x+"px",r.style.height=c.y+"px"},_updateOpacity:function(){Jt(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var r=this.options.errorOverlayUrl;r&&this._url!==r&&(this._url=r,this._image.src=r)},getCenter:function(){return this._bounds.getCenter()}}),G1=function(r,s,c){return new _s(r,s,c)},Bp=_s.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var r=this._url.tagName==="VIDEO",s=this._image=r?this._url:Te("video");if(Ne(s,"leaflet-image-layer"),this._zoomAnimated&&Ne(s,"leaflet-zoom-animated"),this.options.className&&Ne(s,this.options.className),s.onselectstart=x,s.onmousemove=x,s.onloadeddata=d(this.fire,this,"load"),r){for(var c=s.getElementsByTagName("source"),p=[],g=0;g<c.length;g++)p.push(c[g].src);this._url=c.length>0?p:[s.src];return}S(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(s.style,"objectFit")&&(s.style.objectFit="fill"),s.autoplay=!!this.options.autoplay,s.loop=!!this.options.loop,s.muted=!!this.options.muted,s.playsInline=!!this.options.playsInline;for(var k=0;k<this._url.length;k++){var A=Te("source");A.src=this._url[k],s.appendChild(A)}}});function K1(r,s,c){return new Bp(r,s,c)}var Fp=_s.extend({_initImage:function(){var r=this._image=this._url;Ne(r,"leaflet-image-layer"),this._zoomAnimated&&Ne(r,"leaflet-zoom-animated"),this.options.className&&Ne(r,this.options.className),r.onselectstart=x,r.onmousemove=x}});function Q1(r,s,c){return new Fp(r,s,c)}var kn=dn.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(r,s){r&&(r instanceof Z||S(r))?(this._latlng=ee(r),z(this,s)):(z(this,r),this._source=s),this.options.content&&(this._content=this.options.content)},openOn:function(r){return r=arguments.length?r:this._source._map,r.hasLayer(this)||r.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(r){return this._map?this.close():(arguments.length?this._source=r:r=this._source,this._prepareOpen(),this.openOn(r._map)),this},onAdd:function(r){this._zoomAnimated=r._zoomAnimated,this._container||this._initLayout(),r._fadeAnimated&&Jt(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),r._fadeAnimated&&Jt(this._container,1),this.bringToFront(),this.options.interactive&&(Ne(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(r){r._fadeAnimated?(Jt(this._container,0),this._removeTimeout=setTimeout(d(Ve,void 0,this._container),200)):Ve(this._container),this.options.interactive&&(Xe(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(r){return this._latlng=ee(r),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(r){return this._content=r,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var r={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(r.zoomanim=this._animateZoom),r},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&_i(this._container),this},bringToBack:function(){return this._map&&wi(this._container),this},_prepareOpen:function(r){var s=this._source;if(!s._map)return!1;if(s instanceof An){s=null;var c=this._source._layers;for(var p in c)if(c[p]._map){s=c[p];break}if(!s)return!1;this._source=s}if(!r)if(s.getCenter)r=s.getCenter();else if(s.getLatLng)r=s.getLatLng();else if(s.getBounds)r=s.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(r),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var r=this._contentNode,s=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof s=="string")r.innerHTML=s;else{for(;r.hasChildNodes();)r.removeChild(r.firstChild);r.appendChild(s)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var r=this._map.latLngToLayerPoint(this._latlng),s=G(this.options.offset),c=this._getAnchor();this._zoomAnimated?rt(this._container,r.add(c)):s=s.add(r).add(c);var p=this._containerBottom=-s.y,g=this._containerLeft=-Math.round(this._containerWidth/2)+s.x;this._container.style.bottom=p+"px",this._container.style.left=g+"px"}},_getAnchor:function(){return[0,0]}});Ee.include({_initOverlay:function(r,s,c,p){var g=s;return g instanceof r||(g=new r(p).setContent(s)),c&&g.setLatLng(c),g}}),dn.include({_initOverlay:function(r,s,c,p){var g=c;return g instanceof r?(z(g,p),g._source=this):(g=s&&!p?s:new r(p,this),g.setContent(c)),g}});var ws=kn.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(r){return r=arguments.length?r:this._source._map,!r.hasLayer(this)&&r._popup&&r._popup.options.autoClose&&r.removeLayer(r._popup),r._popup=this,kn.prototype.openOn.call(this,r)},onAdd:function(r){kn.prototype.onAdd.call(this,r),r.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof rr||this._source.on("preclick",Fr))},onRemove:function(r){kn.prototype.onRemove.call(this,r),r.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof rr||this._source.off("preclick",Fr))},getEvents:function(){var r=kn.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(r.preclick=this.close),this.options.keepInView&&(r.moveend=this._adjustPan),r},_initLayout:function(){var r="leaflet-popup",s=this._container=Te("div",r+" "+(this.options.className||"")+" leaflet-zoom-animated"),c=this._wrapper=Te("div",r+"-content-wrapper",s);if(this._contentNode=Te("div",r+"-content",c),za(s),Fc(this._contentNode),we(s,"contextmenu",Fr),this._tipContainer=Te("div",r+"-tip-container",s),this._tip=Te("div",r+"-tip",this._tipContainer),this.options.closeButton){var p=this._closeButton=Te("a",r+"-close-button",s);p.setAttribute("role","button"),p.setAttribute("aria-label","Close popup"),p.href="#close",p.innerHTML='<span aria-hidden="true">&#215;</span>',we(p,"click",function(g){mt(g),this.close()},this)}},_updateLayout:function(){var r=this._contentNode,s=r.style;s.width="",s.whiteSpace="nowrap";var c=r.offsetWidth;c=Math.min(c,this.options.maxWidth),c=Math.max(c,this.options.minWidth),s.width=c+1+"px",s.whiteSpace="",s.height="";var p=r.offsetHeight,g=this.options.maxHeight,k="leaflet-popup-scrolled";g&&p>g?(s.height=g+"px",Ne(r,k)):Xe(r,k),this._containerWidth=this._container.offsetWidth},_animateZoom:function(r){var s=this._map._latLngToNewLayerPoint(this._latlng,r.zoom,r.center),c=this._getAnchor();rt(this._container,s.add(c))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var r=this._map,s=parseInt(ka(this._container,"marginBottom"),10)||0,c=this._container.offsetHeight+s,p=this._containerWidth,g=new R(this._containerLeft,-c-this._containerBottom);g._add(Br(this._container));var k=r.layerPointToContainerPoint(g),A=G(this.options.autoPanPadding),U=G(this.options.autoPanPaddingTopLeft||A),$=G(this.options.autoPanPaddingBottomRight||A),ne=r.getSize(),ce=0,ve=0;k.x+p+$.x>ne.x&&(ce=k.x+p-ne.x+$.x),k.x-ce-U.x<0&&(ce=k.x-U.x),k.y+c+$.y>ne.y&&(ve=k.y+c-ne.y+$.y),k.y-ve-U.y<0&&(ve=k.y-U.y),(ce||ve)&&(this.options.keepInView&&(this._autopanning=!0),r.fire("autopanstart").panBy([ce,ve]))}},_getAnchor:function(){return G(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),Y1=function(r,s){return new ws(r,s)};Ee.mergeOptions({closePopupOnClick:!0}),Ee.include({openPopup:function(r,s,c){return this._initOverlay(ws,r,s,c).openOn(this),this},closePopup:function(r){return r=arguments.length?r:this._popup,r&&r.close(),this}}),dn.include({bindPopup:function(r,s){return this._popup=this._initOverlay(ws,this._popup,r,s),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(r){return this._popup&&(this instanceof An||(this._popup._source=this),this._popup._prepareOpen(r||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(r){return this._popup&&this._popup.setContent(r),this},getPopup:function(){return this._popup},_openPopup:function(r){if(!(!this._popup||!this._map)){Dr(r);var s=r.layer||r.target;if(this._popup._source===s&&!(s instanceof rr)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(r.latlng);return}this._popup._source=s,this.openPopup(r.latlng)}},_movePopup:function(r){this._popup.setLatLng(r.latlng)},_onKeyPress:function(r){r.originalEvent.keyCode===13&&this._openPopup(r)}});var js=kn.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(r){kn.prototype.onAdd.call(this,r),this.setOpacity(this.options.opacity),r.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(r){kn.prototype.onRemove.call(this,r),r.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var r=kn.prototype.getEvents.call(this);return this.options.permanent||(r.preclick=this.close),r},_initLayout:function(){var r="leaflet-tooltip",s=r+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=Te("div",s),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+u(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(r){var s,c,p=this._map,g=this._container,k=p.latLngToContainerPoint(p.getCenter()),A=p.layerPointToContainerPoint(r),U=this.options.direction,$=g.offsetWidth,ne=g.offsetHeight,ce=G(this.options.offset),ve=this._getAnchor();U==="top"?(s=$/2,c=ne):U==="bottom"?(s=$/2,c=0):U==="center"?(s=$/2,c=ne/2):U==="right"?(s=0,c=ne/2):U==="left"?(s=$,c=ne/2):A.x<k.x?(U="right",s=0,c=ne/2):(U="left",s=$+(ce.x+ve.x)*2,c=ne/2),r=r.subtract(G(s,c,!0)).add(ce).add(ve),Xe(g,"leaflet-tooltip-right"),Xe(g,"leaflet-tooltip-left"),Xe(g,"leaflet-tooltip-top"),Xe(g,"leaflet-tooltip-bottom"),Ne(g,"leaflet-tooltip-"+U),rt(g,r)},_updatePosition:function(){var r=this._map.latLngToLayerPoint(this._latlng);this._setPosition(r)},setOpacity:function(r){this.options.opacity=r,this._container&&Jt(this._container,r)},_animateZoom:function(r){var s=this._map._latLngToNewLayerPoint(this._latlng,r.zoom,r.center);this._setPosition(s)},_getAnchor:function(){return G(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),J1=function(r,s){return new js(r,s)};Ee.include({openTooltip:function(r,s,c){return this._initOverlay(js,r,s,c).openOn(this),this},closeTooltip:function(r){return r.close(),this}}),dn.include({bindTooltip:function(r,s){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(js,this._tooltip,r,s),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(r){if(!(!r&&this._tooltipHandlersAdded)){var s=r?"off":"on",c={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?c.add=this._openTooltip:(c.mouseover=this._openTooltip,c.mouseout=this.closeTooltip,c.click=this._openTooltip,this._map?this._addFocusListeners():c.add=this._addFocusListeners),this._tooltip.options.sticky&&(c.mousemove=this._moveTooltip),this[s](c),this._tooltipHandlersAdded=!r}},openTooltip:function(r){return this._tooltip&&(this instanceof An||(this._tooltip._source=this),this._tooltip._prepareOpen(r)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(r){return this._tooltip&&this._tooltip.setContent(r),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(r){var s=typeof r.getElement=="function"&&r.getElement();s&&(we(s,"focus",function(){this._tooltip._source=r,this.openTooltip()},this),we(s,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(r){var s=typeof r.getElement=="function"&&r.getElement();s&&s.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(r){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var s=this;this._map.once("moveend",function(){s._openOnceFlag=!1,s._openTooltip(r)});return}this._tooltip._source=r.layer||r.target,this.openTooltip(this._tooltip.options.sticky?r.latlng:void 0)}},_moveTooltip:function(r){var s=r.latlng,c,p;this._tooltip.options.sticky&&r.originalEvent&&(c=this._map.mouseEventToContainerPoint(r.originalEvent),p=this._map.containerPointToLayerPoint(c),s=this._map.layerPointToLatLng(p)),this._tooltip.setLatLng(s)}});var Dp=ki.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(r){var s=r&&r.tagName==="DIV"?r:document.createElement("div"),c=this.options;if(c.html instanceof Element?(cs(s),s.appendChild(c.html)):s.innerHTML=c.html!==!1?c.html:"",c.bgPos){var p=G(c.bgPos);s.style.backgroundPosition=-p.x+"px "+-p.y+"px"}return this._setIconStyles(s,"icon"),s},createShadow:function(){return null}});function X1(r){return new Dp(r)}ki.Default=Ea;var Ma=dn.extend({options:{tileSize:256,opacity:1,updateWhenIdle:fe.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(r){z(this,r)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(r){r._addZoomLimit(this)},onRemove:function(r){this._removeAllTiles(),Ve(this._container),r._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(_i(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(wi(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(r){return this.options.opacity=r,this._updateOpacity(),this},setZIndex:function(r){return this.options.zIndex=r,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var r=this._clampZoom(this._map.getZoom());r!==this._tileZoom&&(this._tileZoom=r,this._updateLevels()),this._update()}return this},getEvents:function(){var r={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=f(this._onMoveEnd,this.options.updateInterval,this)),r.move=this._onMove),this._zoomAnimated&&(r.zoomanim=this._animateZoom),r},createTile:function(){return document.createElement("div")},getTileSize:function(){var r=this.options.tileSize;return r instanceof R?r:new R(r,r)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(r){for(var s=this.getPane().children,c=-r(-1/0,1/0),p=0,g=s.length,k;p<g;p++)k=s[p].style.zIndex,s[p]!==this._container&&k&&(c=r(c,+k));isFinite(c)&&(this.options.zIndex=c+r(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!fe.ielt9){Jt(this._container,this.options.opacity);var r=+new Date,s=!1,c=!1;for(var p in this._tiles){var g=this._tiles[p];if(!(!g.current||!g.loaded)){var k=Math.min(1,(r-g.loaded)/200);Jt(g.el,k),k<1?s=!0:(g.active?c=!0:this._onOpaqueTile(g),g.active=!0)}}c&&!this._noPrune&&this._pruneTiles(),s&&(D(this._fadeFrame),this._fadeFrame=V(this._updateOpacity,this))}},_onOpaqueTile:x,_initContainer:function(){this._container||(this._container=Te("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var r=this._tileZoom,s=this.options.maxZoom;if(r!==void 0){for(var c in this._levels)c=Number(c),this._levels[c].el.children.length||c===r?(this._levels[c].el.style.zIndex=s-Math.abs(r-c),this._onUpdateLevel(c)):(Ve(this._levels[c].el),this._removeTilesAtZoom(c),this._onRemoveLevel(c),delete this._levels[c]);var p=this._levels[r],g=this._map;return p||(p=this._levels[r]={},p.el=Te("div","leaflet-tile-container leaflet-zoom-animated",this._container),p.el.style.zIndex=s,p.origin=g.project(g.unproject(g.getPixelOrigin()),r).round(),p.zoom=r,this._setZoomTransform(p,g.getCenter(),g.getZoom()),x(p.el.offsetWidth),this._onCreateLevel(p)),this._level=p,p}},_onUpdateLevel:x,_onRemoveLevel:x,_onCreateLevel:x,_pruneTiles:function(){if(this._map){var r,s,c=this._map.getZoom();if(c>this.options.maxZoom||c<this.options.minZoom){this._removeAllTiles();return}for(r in this._tiles)s=this._tiles[r],s.retain=s.current;for(r in this._tiles)if(s=this._tiles[r],s.current&&!s.active){var p=s.coords;this._retainParent(p.x,p.y,p.z,p.z-5)||this._retainChildren(p.x,p.y,p.z,p.z+2)}for(r in this._tiles)this._tiles[r].retain||this._removeTile(r)}},_removeTilesAtZoom:function(r){for(var s in this._tiles)this._tiles[s].coords.z===r&&this._removeTile(s)},_removeAllTiles:function(){for(var r in this._tiles)this._removeTile(r)},_invalidateAll:function(){for(var r in this._levels)Ve(this._levels[r].el),this._onRemoveLevel(Number(r)),delete this._levels[r];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(r,s,c,p){var g=Math.floor(r/2),k=Math.floor(s/2),A=c-1,U=new R(+g,+k);U.z=+A;var $=this._tileCoordsToKey(U),ne=this._tiles[$];return ne&&ne.active?(ne.retain=!0,!0):(ne&&ne.loaded&&(ne.retain=!0),A>p?this._retainParent(g,k,A,p):!1)},_retainChildren:function(r,s,c,p){for(var g=2*r;g<2*r+2;g++)for(var k=2*s;k<2*s+2;k++){var A=new R(g,k);A.z=c+1;var U=this._tileCoordsToKey(A),$=this._tiles[U];if($&&$.active){$.retain=!0;continue}else $&&$.loaded&&($.retain=!0);c+1<p&&this._retainChildren(g,k,c+1,p)}},_resetView:function(r){var s=r&&(r.pinch||r.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),s,s)},_animateZoom:function(r){this._setView(r.center,r.zoom,!0,r.noUpdate)},_clampZoom:function(r){var s=this.options;return s.minNativeZoom!==void 0&&r<s.minNativeZoom?s.minNativeZoom:s.maxNativeZoom!==void 0&&s.maxNativeZoom<r?s.maxNativeZoom:r},_setView:function(r,s,c,p){var g=Math.round(s);this.options.maxZoom!==void 0&&g>this.options.maxZoom||this.options.minZoom!==void 0&&g<this.options.minZoom?g=void 0:g=this._clampZoom(g);var k=this.options.updateWhenZooming&&g!==this._tileZoom;(!p||k)&&(this._tileZoom=g,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),g!==void 0&&this._update(r),c||this._pruneTiles(),this._noPrune=!!c),this._setZoomTransforms(r,s)},_setZoomTransforms:function(r,s){for(var c in this._levels)this._setZoomTransform(this._levels[c],r,s)},_setZoomTransform:function(r,s,c){var p=this._map.getZoomScale(c,r.zoom),g=r.origin.multiplyBy(p).subtract(this._map._getNewPixelOrigin(s,c)).round();fe.any3d?Or(r.el,g,p):rt(r.el,g)},_resetGrid:function(){var r=this._map,s=r.options.crs,c=this._tileSize=this.getTileSize(),p=this._tileZoom,g=this._map.getPixelWorldBounds(this._tileZoom);g&&(this._globalTileRange=this._pxBoundsToTileRange(g)),this._wrapX=s.wrapLng&&!this.options.noWrap&&[Math.floor(r.project([0,s.wrapLng[0]],p).x/c.x),Math.ceil(r.project([0,s.wrapLng[1]],p).x/c.y)],this._wrapY=s.wrapLat&&!this.options.noWrap&&[Math.floor(r.project([s.wrapLat[0],0],p).y/c.x),Math.ceil(r.project([s.wrapLat[1],0],p).y/c.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(r){var s=this._map,c=s._animatingZoom?Math.max(s._animateToZoom,s.getZoom()):s.getZoom(),p=s.getZoomScale(c,this._tileZoom),g=s.project(r,this._tileZoom).floor(),k=s.getSize().divideBy(p*2);return new X(g.subtract(k),g.add(k))},_update:function(r){var s=this._map;if(s){var c=this._clampZoom(s.getZoom());if(r===void 0&&(r=s.getCenter()),this._tileZoom!==void 0){var p=this._getTiledPixelBounds(r),g=this._pxBoundsToTileRange(p),k=g.getCenter(),A=[],U=this.options.keepBuffer,$=new X(g.getBottomLeft().subtract([U,-U]),g.getTopRight().add([U,-U]));if(!(isFinite(g.min.x)&&isFinite(g.min.y)&&isFinite(g.max.x)&&isFinite(g.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var ne in this._tiles){var ce=this._tiles[ne].coords;(ce.z!==this._tileZoom||!$.contains(new R(ce.x,ce.y)))&&(this._tiles[ne].current=!1)}if(Math.abs(c-this._tileZoom)>1){this._setView(r,c);return}for(var ve=g.min.y;ve<=g.max.y;ve++)for(var ze=g.min.x;ze<=g.max.x;ze++){var Nt=new R(ze,ve);if(Nt.z=this._tileZoom,!!this._isValidTile(Nt)){var ut=this._tiles[this._tileCoordsToKey(Nt)];ut?ut.current=!0:A.push(Nt)}}if(A.sort(function(Mt,zi){return Mt.distanceTo(k)-zi.distanceTo(k)}),A.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var en=document.createDocumentFragment();for(ze=0;ze<A.length;ze++)this._addTile(A[ze],en);this._level.el.appendChild(en)}}}},_isValidTile:function(r){var s=this._map.options.crs;if(!s.infinite){var c=this._globalTileRange;if(!s.wrapLng&&(r.x<c.min.x||r.x>c.max.x)||!s.wrapLat&&(r.y<c.min.y||r.y>c.max.y))return!1}if(!this.options.bounds)return!0;var p=this._tileCoordsToBounds(r);return T(this.options.bounds).overlaps(p)},_keyToBounds:function(r){return this._tileCoordsToBounds(this._keyToTileCoords(r))},_tileCoordsToNwSe:function(r){var s=this._map,c=this.getTileSize(),p=r.scaleBy(c),g=p.add(c),k=s.unproject(p,r.z),A=s.unproject(g,r.z);return[k,A]},_tileCoordsToBounds:function(r){var s=this._tileCoordsToNwSe(r),c=new ue(s[0],s[1]);return this.options.noWrap||(c=this._map.wrapLatLngBounds(c)),c},_tileCoordsToKey:function(r){return r.x+":"+r.y+":"+r.z},_keyToTileCoords:function(r){var s=r.split(":"),c=new R(+s[0],+s[1]);return c.z=+s[2],c},_removeTile:function(r){var s=this._tiles[r];s&&(Ve(s.el),delete this._tiles[r],this.fire("tileunload",{tile:s.el,coords:this._keyToTileCoords(r)}))},_initTile:function(r){Ne(r,"leaflet-tile");var s=this.getTileSize();r.style.width=s.x+"px",r.style.height=s.y+"px",r.onselectstart=x,r.onmousemove=x,fe.ielt9&&this.options.opacity<1&&Jt(r,this.options.opacity)},_addTile:function(r,s){var c=this._getTilePos(r),p=this._tileCoordsToKey(r),g=this.createTile(this._wrapCoords(r),d(this._tileReady,this,r));this._initTile(g),this.createTile.length<2&&V(d(this._tileReady,this,r,null,g)),rt(g,c),this._tiles[p]={el:g,coords:r,current:!0},s.appendChild(g),this.fire("tileloadstart",{tile:g,coords:r})},_tileReady:function(r,s,c){s&&this.fire("tileerror",{error:s,tile:c,coords:r});var p=this._tileCoordsToKey(r);c=this._tiles[p],c&&(c.loaded=+new Date,this._map._fadeAnimated?(Jt(c.el,0),D(this._fadeFrame),this._fadeFrame=V(this._updateOpacity,this)):(c.active=!0,this._pruneTiles()),s||(Ne(c.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:c.el,coords:r})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),fe.ielt9||!this._map._fadeAnimated?V(this._pruneTiles,this):setTimeout(d(this._pruneTiles,this),250)))},_getTilePos:function(r){return r.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(r){var s=new R(this._wrapX?y(r.x,this._wrapX):r.x,this._wrapY?y(r.y,this._wrapY):r.y);return s.z=r.z,s},_pxBoundsToTileRange:function(r){var s=this.getTileSize();return new X(r.min.unscaleBy(s).floor(),r.max.unscaleBy(s).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var r in this._tiles)if(!this._tiles[r].loaded)return!1;return!0}});function ev(r){return new Ma(r)}var Ci=Ma.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(r,s){this._url=r,s=z(this,s),s.detectRetina&&fe.retina&&s.maxZoom>0?(s.tileSize=Math.floor(s.tileSize/2),s.zoomReverse?(s.zoomOffset--,s.minZoom=Math.min(s.maxZoom,s.minZoom+1)):(s.zoomOffset++,s.maxZoom=Math.max(s.minZoom,s.maxZoom-1)),s.minZoom=Math.max(0,s.minZoom)):s.zoomReverse?s.minZoom=Math.min(s.maxZoom,s.minZoom):s.maxZoom=Math.max(s.minZoom,s.maxZoom),typeof s.subdomains=="string"&&(s.subdomains=s.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(r,s){return this._url===r&&s===void 0&&(s=!0),this._url=r,s||this.redraw(),this},createTile:function(r,s){var c=document.createElement("img");return we(c,"load",d(this._tileOnLoad,this,s,c)),we(c,"error",d(this._tileOnError,this,s,c)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(c.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(c.referrerPolicy=this.options.referrerPolicy),c.alt="",c.src=this.getTileUrl(r),c},getTileUrl:function(r){var s={r:fe.retina?"@2x":"",s:this._getSubdomain(r),x:r.x,y:r.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var c=this._globalTileRange.max.y-r.y;this.options.tms&&(s.y=c),s["-y"]=c}return w(this._url,o(s,this.options))},_tileOnLoad:function(r,s){fe.ielt9?setTimeout(d(r,this,null,s),0):r(null,s)},_tileOnError:function(r,s,c){var p=this.options.errorTileUrl;p&&s.getAttribute("src")!==p&&(s.src=p),r(c,s)},_onTileRemove:function(r){r.tile.onload=null},_getZoomForUrl:function(){var r=this._tileZoom,s=this.options.maxZoom,c=this.options.zoomReverse,p=this.options.zoomOffset;return c&&(r=s-r),r+p},_getSubdomain:function(r){var s=Math.abs(r.x+r.y)%this.options.subdomains.length;return this.options.subdomains[s]},_abortLoading:function(){var r,s;for(r in this._tiles)if(this._tiles[r].coords.z!==this._tileZoom&&(s=this._tiles[r].el,s.onload=x,s.onerror=x,!s.complete)){s.src=E;var c=this._tiles[r].coords;Ve(s),delete this._tiles[r],this.fire("tileabort",{tile:s,coords:c})}},_removeTile:function(r){var s=this._tiles[r];if(s)return s.el.setAttribute("src",E),Ma.prototype._removeTile.call(this,r)},_tileReady:function(r,s,c){if(!(!this._map||c&&c.getAttribute("src")===E))return Ma.prototype._tileReady.call(this,r,s,c)}});function Wp(r,s){return new Ci(r,s)}var Up=Ci.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(r,s){this._url=r;var c=o({},this.defaultWmsParams);for(var p in s)p in this.options||(c[p]=s[p]);s=z(this,s);var g=s.detectRetina&&fe.retina?2:1,k=this.getTileSize();c.width=k.x*g,c.height=k.y*g,this.wmsParams=c},onAdd:function(r){this._crs=this.options.crs||r.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var s=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[s]=this._crs.code,Ci.prototype.onAdd.call(this,r)},getTileUrl:function(r){var s=this._tileCoordsToNwSe(r),c=this._crs,p=H(c.project(s[0]),c.project(s[1])),g=p.min,k=p.max,A=(this._wmsVersion>=1.3&&this._crs===Ap?[g.y,g.x,k.y,k.x]:[g.x,g.y,k.x,k.y]).join(","),U=Ci.prototype.getTileUrl.call(this,r);return U+C(this.wmsParams,U,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+A},setParams:function(r,s){return o(this.wmsParams,r),s||this.redraw(),this}});function tv(r,s){return new Up(r,s)}Ci.WMS=Up,Wp.wms=tv;var On=dn.extend({options:{padding:.1},initialize:function(r){z(this,r),u(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),Ne(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var r={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(r.zoomanim=this._onAnimZoom),r},_onAnimZoom:function(r){this._updateTransform(r.center,r.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(r,s){var c=this._map.getZoomScale(s,this._zoom),p=this._map.getSize().multiplyBy(.5+this.options.padding),g=this._map.project(this._center,s),k=p.multiplyBy(-c).add(g).subtract(this._map._getNewPixelOrigin(r,s));fe.any3d?Or(this._container,k,c):rt(this._container,k)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var r in this._layers)this._layers[r]._reset()},_onZoomEnd:function(){for(var r in this._layers)this._layers[r]._project()},_updatePaths:function(){for(var r in this._layers)this._layers[r]._update()},_update:function(){var r=this.options.padding,s=this._map.getSize(),c=this._map.containerPointToLayerPoint(s.multiplyBy(-r)).round();this._bounds=new X(c,c.add(s.multiplyBy(1+r*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Hp=On.extend({options:{tolerance:0},getEvents:function(){var r=On.prototype.getEvents.call(this);return r.viewprereset=this._onViewPreReset,r},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){On.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var r=this._container=document.createElement("canvas");we(r,"mousemove",this._onMouseMove,this),we(r,"click dblclick mousedown mouseup contextmenu",this._onClick,this),we(r,"mouseout",this._handleMouseOut,this),r._leaflet_disable_events=!0,this._ctx=r.getContext("2d")},_destroyContainer:function(){D(this._redrawRequest),delete this._ctx,Ve(this._container),De(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var r;this._redrawBounds=null;for(var s in this._layers)r=this._layers[s],r._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){On.prototype._update.call(this);var r=this._bounds,s=this._container,c=r.getSize(),p=fe.retina?2:1;rt(s,r.min),s.width=p*c.x,s.height=p*c.y,s.style.width=c.x+"px",s.style.height=c.y+"px",fe.retina&&this._ctx.scale(2,2),this._ctx.translate(-r.min.x,-r.min.y),this.fire("update")}},_reset:function(){On.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(r){this._updateDashArray(r),this._layers[u(r)]=r;var s=r._order={layer:r,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=s),this._drawLast=s,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(r){this._requestRedraw(r)},_removePath:function(r){var s=r._order,c=s.next,p=s.prev;c?c.prev=p:this._drawLast=p,p?p.next=c:this._drawFirst=c,delete r._order,delete this._layers[u(r)],this._requestRedraw(r)},_updatePath:function(r){this._extendRedrawBounds(r),r._project(),r._update(),this._requestRedraw(r)},_updateStyle:function(r){this._updateDashArray(r),this._requestRedraw(r)},_updateDashArray:function(r){if(typeof r.options.dashArray=="string"){var s=r.options.dashArray.split(/[, ]+/),c=[],p,g;for(g=0;g<s.length;g++){if(p=Number(s[g]),isNaN(p))return;c.push(p)}r.options._dashArray=c}else r.options._dashArray=r.options.dashArray},_requestRedraw:function(r){this._map&&(this._extendRedrawBounds(r),this._redrawRequest=this._redrawRequest||V(this._redraw,this))},_extendRedrawBounds:function(r){if(r._pxBounds){var s=(r.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new X,this._redrawBounds.extend(r._pxBounds.min.subtract([s,s])),this._redrawBounds.extend(r._pxBounds.max.add([s,s]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var r=this._redrawBounds;if(r){var s=r.getSize();this._ctx.clearRect(r.min.x,r.min.y,s.x,s.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var r,s=this._redrawBounds;if(this._ctx.save(),s){var c=s.getSize();this._ctx.beginPath(),this._ctx.rect(s.min.x,s.min.y,c.x,c.y),this._ctx.clip()}this._drawing=!0;for(var p=this._drawFirst;p;p=p.next)r=p.layer,(!s||r._pxBounds&&r._pxBounds.intersects(s))&&r._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(r,s){if(this._drawing){var c,p,g,k,A=r._parts,U=A.length,$=this._ctx;if(U){for($.beginPath(),c=0;c<U;c++){for(p=0,g=A[c].length;p<g;p++)k=A[c][p],$[p?"lineTo":"moveTo"](k.x,k.y);s&&$.closePath()}this._fillStroke($,r)}}},_updateCircle:function(r){if(!(!this._drawing||r._empty())){var s=r._point,c=this._ctx,p=Math.max(Math.round(r._radius),1),g=(Math.max(Math.round(r._radiusY),1)||p)/p;g!==1&&(c.save(),c.scale(1,g)),c.beginPath(),c.arc(s.x,s.y/g,p,0,Math.PI*2,!1),g!==1&&c.restore(),this._fillStroke(c,r)}},_fillStroke:function(r,s){var c=s.options;c.fill&&(r.globalAlpha=c.fillOpacity,r.fillStyle=c.fillColor||c.color,r.fill(c.fillRule||"evenodd")),c.stroke&&c.weight!==0&&(r.setLineDash&&r.setLineDash(s.options&&s.options._dashArray||[]),r.globalAlpha=c.opacity,r.lineWidth=c.weight,r.strokeStyle=c.color,r.lineCap=c.lineCap,r.lineJoin=c.lineJoin,r.stroke())},_onClick:function(r){for(var s=this._map.mouseEventToLayerPoint(r),c,p,g=this._drawFirst;g;g=g.next)c=g.layer,c.options.interactive&&c._containsPoint(s)&&(!(r.type==="click"||r.type==="preclick")||!this._map._draggableMoved(c))&&(p=c);this._fireEvent(p?[p]:!1,r)},_onMouseMove:function(r){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var s=this._map.mouseEventToLayerPoint(r);this._handleMouseHover(r,s)}},_handleMouseOut:function(r){var s=this._hoveredLayer;s&&(Xe(this._container,"leaflet-interactive"),this._fireEvent([s],r,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(r,s){if(!this._mouseHoverThrottled){for(var c,p,g=this._drawFirst;g;g=g.next)c=g.layer,c.options.interactive&&c._containsPoint(s)&&(p=c);p!==this._hoveredLayer&&(this._handleMouseOut(r),p&&(Ne(this._container,"leaflet-interactive"),this._fireEvent([p],r,"mouseover"),this._hoveredLayer=p)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,r),this._mouseHoverThrottled=!0,setTimeout(d(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(r,s,c){this._map._fireDOMEvent(s,c||s.type,r)},_bringToFront:function(r){var s=r._order;if(s){var c=s.next,p=s.prev;if(c)c.prev=p;else return;p?p.next=c:c&&(this._drawFirst=c),s.prev=this._drawLast,this._drawLast.next=s,s.next=null,this._drawLast=s,this._requestRedraw(r)}},_bringToBack:function(r){var s=r._order;if(s){var c=s.next,p=s.prev;if(p)p.next=c;else return;c?c.prev=p:p&&(this._drawLast=p),s.prev=null,s.next=this._drawFirst,this._drawFirst.prev=s,this._drawFirst=s,this._requestRedraw(r)}}});function Zp(r){return fe.canvas?new Hp(r):null}var Ta=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(r){return document.createElement("<lvml:"+r+' class="lvml">')}}catch{}return function(r){return document.createElement("<"+r+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),nv={_initContainer:function(){this._container=Te("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(On.prototype._update.call(this),this.fire("update"))},_initPath:function(r){var s=r._container=Ta("shape");Ne(s,"leaflet-vml-shape "+(this.options.className||"")),s.coordsize="1 1",r._path=Ta("path"),s.appendChild(r._path),this._updateStyle(r),this._layers[u(r)]=r},_addPath:function(r){var s=r._container;this._container.appendChild(s),r.options.interactive&&r.addInteractiveTarget(s)},_removePath:function(r){var s=r._container;Ve(s),r.removeInteractiveTarget(s),delete this._layers[u(r)]},_updateStyle:function(r){var s=r._stroke,c=r._fill,p=r.options,g=r._container;g.stroked=!!p.stroke,g.filled=!!p.fill,p.stroke?(s||(s=r._stroke=Ta("stroke")),g.appendChild(s),s.weight=p.weight+"px",s.color=p.color,s.opacity=p.opacity,p.dashArray?s.dashStyle=S(p.dashArray)?p.dashArray.join(" "):p.dashArray.replace(/( *, *)/g," "):s.dashStyle="",s.endcap=p.lineCap.replace("butt","flat"),s.joinstyle=p.lineJoin):s&&(g.removeChild(s),r._stroke=null),p.fill?(c||(c=r._fill=Ta("fill")),g.appendChild(c),c.color=p.fillColor||p.color,c.opacity=p.fillOpacity):c&&(g.removeChild(c),r._fill=null)},_updateCircle:function(r){var s=r._point.round(),c=Math.round(r._radius),p=Math.round(r._radiusY||c);this._setPath(r,r._empty()?"M0 0":"AL "+s.x+","+s.y+" "+c+","+p+" 0,"+65535*360)},_setPath:function(r,s){r._path.v=s},_bringToFront:function(r){_i(r._container)},_bringToBack:function(r){wi(r._container)}},ks=fe.vml?Ta:tr,Aa=On.extend({_initContainer:function(){this._container=ks("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=ks("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){Ve(this._container),De(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){On.prototype._update.call(this);var r=this._bounds,s=r.getSize(),c=this._container;(!this._svgSize||!this._svgSize.equals(s))&&(this._svgSize=s,c.setAttribute("width",s.x),c.setAttribute("height",s.y)),rt(c,r.min),c.setAttribute("viewBox",[r.min.x,r.min.y,s.x,s.y].join(" ")),this.fire("update")}},_initPath:function(r){var s=r._path=ks("path");r.options.className&&Ne(s,r.options.className),r.options.interactive&&Ne(s,"leaflet-interactive"),this._updateStyle(r),this._layers[u(r)]=r},_addPath:function(r){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(r._path),r.addInteractiveTarget(r._path)},_removePath:function(r){Ve(r._path),r.removeInteractiveTarget(r._path),delete this._layers[u(r)]},_updatePath:function(r){r._project(),r._update()},_updateStyle:function(r){var s=r._path,c=r.options;s&&(c.stroke?(s.setAttribute("stroke",c.color),s.setAttribute("stroke-opacity",c.opacity),s.setAttribute("stroke-width",c.weight),s.setAttribute("stroke-linecap",c.lineCap),s.setAttribute("stroke-linejoin",c.lineJoin),c.dashArray?s.setAttribute("stroke-dasharray",c.dashArray):s.removeAttribute("stroke-dasharray"),c.dashOffset?s.setAttribute("stroke-dashoffset",c.dashOffset):s.removeAttribute("stroke-dashoffset")):s.setAttribute("stroke","none"),c.fill?(s.setAttribute("fill",c.fillColor||c.color),s.setAttribute("fill-opacity",c.fillOpacity),s.setAttribute("fill-rule",c.fillRule||"evenodd")):s.setAttribute("fill","none"))},_updatePoly:function(r,s){this._setPath(r,K(r._parts,s))},_updateCircle:function(r){var s=r._point,c=Math.max(Math.round(r._radius),1),p=Math.max(Math.round(r._radiusY),1)||c,g="a"+c+","+p+" 0 1,0 ",k=r._empty()?"M0 0":"M"+(s.x-c)+","+s.y+g+c*2+",0 "+g+-c*2+",0 ";this._setPath(r,k)},_setPath:function(r,s){r._path.setAttribute("d",s)},_bringToFront:function(r){_i(r._path)},_bringToBack:function(r){wi(r._path)}});fe.vml&&Aa.include(nv);function $p(r){return fe.svg||fe.vml?new Aa(r):null}Ee.include({getRenderer:function(r){var s=r.options.renderer||this._getPaneRenderer(r.options.pane)||this.options.renderer||this._renderer;return s||(s=this._renderer=this._createRenderer()),this.hasLayer(s)||this.addLayer(s),s},_getPaneRenderer:function(r){if(r==="overlayPane"||r===void 0)return!1;var s=this._paneRenderers[r];return s===void 0&&(s=this._createRenderer({pane:r}),this._paneRenderers[r]=s),s},_createRenderer:function(r){return this.options.preferCanvas&&Zp(r)||$p(r)}});var qp=Si.extend({initialize:function(r,s){Si.prototype.initialize.call(this,this._boundsToLatLngs(r),s)},setBounds:function(r){return this.setLatLngs(this._boundsToLatLngs(r))},_boundsToLatLngs:function(r){return r=T(r),[r.getSouthWest(),r.getNorthWest(),r.getNorthEast(),r.getSouthEast()]}});function rv(r,s){return new qp(r,s)}Aa.create=ks,Aa.pointsToPath=K,Rn.geometryToLayer=xs,Rn.coordsToLatLng=Gc,Rn.coordsToLatLngs=ys,Rn.latLngToCoords=Kc,Rn.latLngsToCoords=vs,Rn.getFeature=Ni,Rn.asFeature=bs,Ee.mergeOptions({boxZoom:!0});var Vp=jn.extend({initialize:function(r){this._map=r,this._container=r._container,this._pane=r._panes.overlayPane,this._resetStateTimeout=0,r.on("unload",this._destroy,this)},addHooks:function(){we(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){De(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){Ve(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(r){if(!r.shiftKey||r.which!==1&&r.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),Sa(),Ec(),this._startPoint=this._map.mouseEventToContainerPoint(r),we(document,{contextmenu:Dr,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(r){this._moved||(this._moved=!0,this._box=Te("div","leaflet-zoom-box",this._container),Ne(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(r);var s=new X(this._point,this._startPoint),c=s.getSize();rt(this._box,s.min),this._box.style.width=c.x+"px",this._box.style.height=c.y+"px"},_finish:function(){this._moved&&(Ve(this._box),Xe(this._container,"leaflet-crosshair")),Na(),Mc(),De(document,{contextmenu:Dr,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(r){if(!(r.which!==1&&r.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(d(this._resetState,this),0);var s=new ue(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(s).fire("boxzoomend",{boxZoomBounds:s})}},_onKeyDown:function(r){r.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});Ee.addInitHook("addHandler","boxZoom",Vp),Ee.mergeOptions({doubleClickZoom:!0});var Gp=jn.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(r){var s=this._map,c=s.getZoom(),p=s.options.zoomDelta,g=r.originalEvent.shiftKey?c-p:c+p;s.options.doubleClickZoom==="center"?s.setZoom(g):s.setZoomAround(r.containerPoint,g)}});Ee.addInitHook("addHandler","doubleClickZoom",Gp),Ee.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var Kp=jn.extend({addHooks:function(){if(!this._draggable){var r=this._map;this._draggable=new nr(r._mapPane,r._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),r.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),r.on("zoomend",this._onZoomEnd,this),r.whenReady(this._onZoomEnd,this))}Ne(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){Xe(this._map._container,"leaflet-grab"),Xe(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var r=this._map;if(r._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var s=T(this._map.options.maxBounds);this._offsetLimit=H(this._map.latLngToContainerPoint(s.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(s.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;r.fire("movestart").fire("dragstart"),r.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(r){if(this._map.options.inertia){var s=this._lastTime=+new Date,c=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(c),this._times.push(s),this._prunePositions(s)}this._map.fire("move",r).fire("drag",r)},_prunePositions:function(r){for(;this._positions.length>1&&r-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var r=this._map.getSize().divideBy(2),s=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=s.subtract(r).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(r,s){return r-(r-s)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var r=this._draggable._newPos.subtract(this._draggable._startPos),s=this._offsetLimit;r.x<s.min.x&&(r.x=this._viscousLimit(r.x,s.min.x)),r.y<s.min.y&&(r.y=this._viscousLimit(r.y,s.min.y)),r.x>s.max.x&&(r.x=this._viscousLimit(r.x,s.max.x)),r.y>s.max.y&&(r.y=this._viscousLimit(r.y,s.max.y)),this._draggable._newPos=this._draggable._startPos.add(r)}},_onPreDragWrap:function(){var r=this._worldWidth,s=Math.round(r/2),c=this._initialWorldOffset,p=this._draggable._newPos.x,g=(p-s+c)%r+s-c,k=(p+s+c)%r-s-c,A=Math.abs(g+c)<Math.abs(k+c)?g:k;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=A},_onDragEnd:function(r){var s=this._map,c=s.options,p=!c.inertia||r.noInertia||this._times.length<2;if(s.fire("dragend",r),p)s.fire("moveend");else{this._prunePositions(+new Date);var g=this._lastPos.subtract(this._positions[0]),k=(this._lastTime-this._times[0])/1e3,A=c.easeLinearity,U=g.multiplyBy(A/k),$=U.distanceTo([0,0]),ne=Math.min(c.inertiaMaxSpeed,$),ce=U.multiplyBy(ne/$),ve=ne/(c.inertiaDeceleration*A),ze=ce.multiplyBy(-ve/2).round();!ze.x&&!ze.y?s.fire("moveend"):(ze=s._limitOffset(ze,s.options.maxBounds),V(function(){s.panBy(ze,{duration:ve,easeLinearity:A,noMoveStart:!0,animate:!0})}))}}});Ee.addInitHook("addHandler","dragging",Kp),Ee.mergeOptions({keyboard:!0,keyboardPanDelta:80});var Qp=jn.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(r){this._map=r,this._setPanDelta(r.options.keyboardPanDelta),this._setZoomDelta(r.options.zoomDelta)},addHooks:function(){var r=this._map._container;r.tabIndex<=0&&(r.tabIndex="0"),we(r,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),De(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var r=document.body,s=document.documentElement,c=r.scrollTop||s.scrollTop,p=r.scrollLeft||s.scrollLeft;this._map._container.focus(),window.scrollTo(p,c)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(r){var s=this._panKeys={},c=this.keyCodes,p,g;for(p=0,g=c.left.length;p<g;p++)s[c.left[p]]=[-1*r,0];for(p=0,g=c.right.length;p<g;p++)s[c.right[p]]=[r,0];for(p=0,g=c.down.length;p<g;p++)s[c.down[p]]=[0,r];for(p=0,g=c.up.length;p<g;p++)s[c.up[p]]=[0,-1*r]},_setZoomDelta:function(r){var s=this._zoomKeys={},c=this.keyCodes,p,g;for(p=0,g=c.zoomIn.length;p<g;p++)s[c.zoomIn[p]]=r;for(p=0,g=c.zoomOut.length;p<g;p++)s[c.zoomOut[p]]=-r},_addHooks:function(){we(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){De(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(r){if(!(r.altKey||r.ctrlKey||r.metaKey)){var s=r.keyCode,c=this._map,p;if(s in this._panKeys){if(!c._panAnim||!c._panAnim._inProgress)if(p=this._panKeys[s],r.shiftKey&&(p=G(p).multiplyBy(3)),c.options.maxBounds&&(p=c._limitOffset(G(p),c.options.maxBounds)),c.options.worldCopyJump){var g=c.wrapLatLng(c.unproject(c.project(c.getCenter()).add(p)));c.panTo(g)}else c.panBy(p)}else if(s in this._zoomKeys)c.setZoom(c.getZoom()+(r.shiftKey?3:1)*this._zoomKeys[s]);else if(s===27&&c._popup&&c._popup.options.closeOnEscapeKey)c.closePopup();else return;Dr(r)}}});Ee.addInitHook("addHandler","keyboard",Qp),Ee.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var Yp=jn.extend({addHooks:function(){we(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){De(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(r){var s=_p(r),c=this._map.options.wheelDebounceTime;this._delta+=s,this._lastMousePos=this._map.mouseEventToContainerPoint(r),this._startTime||(this._startTime=+new Date);var p=Math.max(c-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(d(this._performZoom,this),p),Dr(r)},_performZoom:function(){var r=this._map,s=r.getZoom(),c=this._map.options.zoomSnap||0;r._stop();var p=this._delta/(this._map.options.wheelPxPerZoomLevel*4),g=4*Math.log(2/(1+Math.exp(-Math.abs(p))))/Math.LN2,k=c?Math.ceil(g/c)*c:g,A=r._limitZoom(s+(this._delta>0?k:-k))-s;this._delta=0,this._startTime=null,A&&(r.options.scrollWheelZoom==="center"?r.setZoom(s+A):r.setZoomAround(this._lastMousePos,s+A))}});Ee.addInitHook("addHandler","scrollWheelZoom",Yp);var iv=600;Ee.mergeOptions({tapHold:fe.touchNative&&fe.safari&&fe.mobile,tapTolerance:15});var Jp=jn.extend({addHooks:function(){we(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){De(this._map._container,"touchstart",this._onDown,this)},_onDown:function(r){if(clearTimeout(this._holdTimeout),r.touches.length===1){var s=r.touches[0];this._startPos=this._newPos=new R(s.clientX,s.clientY),this._holdTimeout=setTimeout(d(function(){this._cancel(),this._isTapValid()&&(we(document,"touchend",mt),we(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",s))},this),iv),we(document,"touchend touchcancel contextmenu",this._cancel,this),we(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function r(){De(document,"touchend",mt),De(document,"touchend touchcancel",r)},_cancel:function(){clearTimeout(this._holdTimeout),De(document,"touchend touchcancel contextmenu",this._cancel,this),De(document,"touchmove",this._onMove,this)},_onMove:function(r){var s=r.touches[0];this._newPos=new R(s.clientX,s.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(r,s){var c=new MouseEvent(r,{bubbles:!0,cancelable:!0,view:window,screenX:s.screenX,screenY:s.screenY,clientX:s.clientX,clientY:s.clientY});c._simulated=!0,s.target.dispatchEvent(c)}});Ee.addInitHook("addHandler","tapHold",Jp),Ee.mergeOptions({touchZoom:fe.touch,bounceAtZoomLimits:!0});var Xp=jn.extend({addHooks:function(){Ne(this._map._container,"leaflet-touch-zoom"),we(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){Xe(this._map._container,"leaflet-touch-zoom"),De(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(r){var s=this._map;if(!(!r.touches||r.touches.length!==2||s._animatingZoom||this._zooming)){var c=s.mouseEventToContainerPoint(r.touches[0]),p=s.mouseEventToContainerPoint(r.touches[1]);this._centerPoint=s.getSize()._divideBy(2),this._startLatLng=s.containerPointToLatLng(this._centerPoint),s.options.touchZoom!=="center"&&(this._pinchStartLatLng=s.containerPointToLatLng(c.add(p)._divideBy(2))),this._startDist=c.distanceTo(p),this._startZoom=s.getZoom(),this._moved=!1,this._zooming=!0,s._stop(),we(document,"touchmove",this._onTouchMove,this),we(document,"touchend touchcancel",this._onTouchEnd,this),mt(r)}},_onTouchMove:function(r){if(!(!r.touches||r.touches.length!==2||!this._zooming)){var s=this._map,c=s.mouseEventToContainerPoint(r.touches[0]),p=s.mouseEventToContainerPoint(r.touches[1]),g=c.distanceTo(p)/this._startDist;if(this._zoom=s.getScaleZoom(g,this._startZoom),!s.options.bounceAtZoomLimits&&(this._zoom<s.getMinZoom()&&g<1||this._zoom>s.getMaxZoom()&&g>1)&&(this._zoom=s._limitZoom(this._zoom)),s.options.touchZoom==="center"){if(this._center=this._startLatLng,g===1)return}else{var k=c._add(p)._divideBy(2)._subtract(this._centerPoint);if(g===1&&k.x===0&&k.y===0)return;this._center=s.unproject(s.project(this._pinchStartLatLng,this._zoom).subtract(k),this._zoom)}this._moved||(s._moveStart(!0,!1),this._moved=!0),D(this._animRequest);var A=d(s._move,s,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=V(A,this,!0),mt(r)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,D(this._animRequest),De(document,"touchmove",this._onTouchMove,this),De(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});Ee.addInitHook("addHandler","touchZoom",Xp),Ee.BoxZoom=Vp,Ee.DoubleClickZoom=Gp,Ee.Drag=Kp,Ee.Keyboard=Qp,Ee.ScrollWheelZoom=Yp,Ee.TapHold=Jp,Ee.TouchZoom=Xp,n.Bounds=X,n.Browser=fe,n.CRS=ye,n.Canvas=Hp,n.Circle=Vc,n.CircleMarker=gs,n.Class=oe,n.Control=cn,n.DivIcon=Dp,n.DivOverlay=kn,n.DomEvent=w1,n.DomUtil=b1,n.Draggable=nr,n.Evented=W,n.FeatureGroup=An,n.GeoJSON=Rn,n.GridLayer=Ma,n.Handler=jn,n.Icon=ki,n.ImageOverlay=_s,n.LatLng=Z,n.LatLngBounds=ue,n.Layer=dn,n.LayerGroup=ji,n.LineUtil=I1,n.Map=Ee,n.Marker=fs,n.Mixin=P1,n.Path=rr,n.Point=R,n.PolyUtil=L1,n.Polygon=Si,n.Polyline=In,n.Popup=ws,n.PosAnimation=wp,n.Projection=R1,n.Rectangle=qp,n.Renderer=On,n.SVG=Aa,n.SVGOverlay=Fp,n.TileLayer=Ci,n.Tooltip=js,n.Transformation=dt,n.Util=ae,n.VideoOverlay=Bp,n.bind=d,n.bounds=H,n.canvas=Zp,n.circle=Z1,n.circleMarker=H1,n.control=Pa,n.divIcon=X1,n.extend=o,n.featureGroup=D1,n.geoJSON=Op,n.geoJson=V1,n.gridLayer=ev,n.icon=W1,n.imageOverlay=G1,n.latLng=ee,n.latLngBounds=T,n.layerGroup=F1,n.map=j1,n.marker=U1,n.point=G,n.polygon=q1,n.polyline=$1,n.popup=Y1,n.rectangle=rv,n.setOptions=z,n.stamp=u,n.svg=$p,n.svgOverlay=Q1,n.tileLayer=Wp,n.tooltip=J1,n.transformation=He,n.version=a,n.videoOverlay=K1;var av=window.L;n.noConflict=function(){return window.L=av,this},window.L=n})})(Yu,Yu.exports);var hi=Yu.exports;const ai=pg(hi);function Ko(e,t,n){return Object.freeze({instance:e,context:t,container:n})}function fc(e,t){return t==null?function(a,o){const l=m.useRef();return l.current||(l.current=e(a,o)),l}:function(a,o){const l=m.useRef();l.current||(l.current=e(a,o));const d=m.useRef(a),{instance:h}=l.current;return m.useEffect(function(){d.current!==a&&(t(h,a,d.current),d.current=a)},[h,a,o]),l}}function qk(e,t){m.useEffect(function(){return(t.layerContainer??t.map).addLayer(e.instance),function(){var l;(l=t.layerContainer)==null||l.removeLayer(e.instance),t.map.removeLayer(e.instance)}},[t,e])}function r1(e){return function(n){const a=Go(),o=e(dp(n,a),a);return Xy(a.map,n.attribution),n1(o.current,n.eventHandlers),qk(o.current,a),o}}function Vk(e,t){const n=fc(e,t),a=r1(n);return t1(a)}function i1(e,t){const n=fc(e),a=$k(n,t);return Uk(a)}function Gk(e,t){const n=fc(e,t),a=r1(n);return Hk(a)}function Kk(e,t,n){const{opacity:a,zIndex:o}=t;a!=null&&a!==n.opacity&&e.setOpacity(a),o!=null&&o!==n.zIndex&&e.setZIndex(o)}function Pr(){return Go().map}function a1(e){const t=Pr();return m.useEffect(function(){return t.on(e),function(){t.off(e)}},[t,e]),t}const Qk=fc(function({children:t,...n},a){const o=new hi.Control.Layers(void 0,void 0,n);return Ko(o,lp(a,{layersControl:o}))},function(t,n,a){n.collapsed!==a.collapsed&&(n.collapsed===!0?t.collapse():t.expand())}),Yk=Zk(Qk),Zi=t1(Yk);function o1(e){return function(n){const a=Go(),o=m.useRef(n),[l,d]=m.useState(null),{layersControl:h,map:u}=a,f=m.useCallback(v=>{h!=null&&(o.current.checked&&u.addLayer(v),e(h,v,o.current.name),d(v))},[h,u]),y=m.useCallback(v=>{h==null||h.removeLayer(v),d(null)},[h]),x=m.useMemo(()=>lp(a,{layerContainer:{addLayer:f,removeLayer:y}}),[a,f,y]);return m.useEffect(()=>{l!==null&&o.current!==n&&(n.checked===!0&&(o.current.checked==null||o.current.checked===!1)?u.addLayer(l):o.current.checked===!0&&(n.checked==null||n.checked===!1)&&u.removeLayer(l),o.current=n)}),n.children?Jr.createElement(cp,{value:x},n.children):null}}Zi.BaseLayer=o1(function(t,n,a){t.addBaseLayer(n,a)});Zi.Overlay=o1(function(t,n,a){t.addOverlay(n,a)});function Ju(){return Ju=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Ju.apply(this,arguments)}function Jk({bounds:e,boundsOptions:t,center:n,children:a,className:o,id:l,placeholder:d,style:h,whenReady:u,zoom:f,...y},x){const[v]=m.useState({className:o,id:l,style:h}),[_,b]=m.useState(null);m.useImperativeHandle(x,()=>(_==null?void 0:_.map)??null,[_]);const z=m.useCallback(N=>{if(N!==null&&_===null){const w=new hi.Map(N,y);n!=null&&f!=null?w.setView(n,f):e!=null&&w.fitBounds(e,t),u!=null&&w.whenReady(u),b(Wk(w))}},[]);m.useEffect(()=>()=>{_==null||_.map.remove()},[_]);const C=_?Jr.createElement(cp,{value:_},a):d??null;return Jr.createElement("div",Ju({},v,{ref:z}),C)}const oi=m.forwardRef(Jk),qn=Vk(function({position:t,...n},a){const o=new hi.Marker(t,n);return Ko(o,lp(a,{overlayContainer:o}))},function(t,n,a){n.position!==a.position&&t.setLatLng(n.position),n.icon!=null&&n.icon!==a.icon&&t.setIcon(n.icon),n.zIndexOffset!=null&&n.zIndexOffset!==a.zIndexOffset&&t.setZIndexOffset(n.zIndexOffset),n.opacity!=null&&n.opacity!==a.opacity&&t.setOpacity(n.opacity),t.dragging!=null&&n.draggable!==a.draggable&&(n.draggable===!0?t.dragging.enable():t.dragging.disable())}),Vn=i1(function(t,n){const a=new hi.Popup(t,n.overlayContainer);return Ko(a,n)},function(t,n,{position:a},o){m.useEffect(function(){const{instance:d}=t;function h(f){f.popup===d&&(d.update(),o(!0))}function u(f){f.popup===d&&o(!1)}return n.map.on({popupopen:h,popupclose:u}),n.overlayContainer==null?(a!=null&&d.setLatLng(a),d.openOn(n.map)):n.overlayContainer.bindPopup(d),function(){var y;n.map.off({popupopen:h,popupclose:u}),(y=n.overlayContainer)==null||y.unbindPopup(),n.map.removeLayer(d)}},[t,n,o,a])}),Ld=Gk(function({url:t,...n},a){const o=new hi.TileLayer(t,dp(n,a));return Ko(o,a)},function(t,n,a){Kk(t,n,a);const{url:o}=n;o!=null&&o!==a.url&&t.setUrl(o)}),Xk=i1(function(t,n){const a=new hi.Tooltip(t,n.overlayContainer);return Ko(a,n)},function(t,n,{position:a},o){m.useEffect(function(){const d=n.overlayContainer;if(d==null)return;const{instance:h}=t,u=y=>{y.tooltip===h&&(a!=null&&h.setLatLng(a),h.update(),o(!0))},f=y=>{y.tooltip===h&&o(!1)};return d.on({tooltipopen:u,tooltipclose:f}),d.bindTooltip(h),function(){d.off({tooltipopen:u,tooltipclose:f}),d._map!=null&&d.unbindTooltip()}},[t,n,o,a])});function si(){return i.jsxs(Zi,{position:"topright",children:[i.jsx(Zi.BaseLayer,{checked:!0,name:"شوارع وتفاصيل (OSM)",children:i.jsx(Ld,{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",maxZoom:19,maxNativeZoom:19})}),i.jsx(Zi.BaseLayer,{name:"طرق أوضح (Carto Voyager)",children:i.jsx(Ld,{attribution:'© <a href="https://www.openstreetmap.org/copyright">OSM</a> © <a href="https://carto.com/attributions">CARTO</a>',url:"https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",subdomains:"abcd",maxZoom:20})}),i.jsx(Zi.BaseLayer,{name:"معالم وشبكة طرق (Esri)",children:i.jsx(Ld,{attribution:"Tiles © Esri — Source: Esri, Maxar, Earthstar Geographics",url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",maxZoom:19})})]})}function li(){const e=Pr();return m.useEffect(()=>{const t=()=>{e.invalidateSize({animate:!1})};return window.addEventListener("resize",t),window.addEventListener("radar-map-invalidate",t),()=>{window.removeEventListener("resize",t),window.removeEventListener("radar-map-invalidate",t)}},[e]),null}const e4="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABSCAMAAAAhFXfZAAAC91BMVEVMaXEzeak2f7I4g7g3g7cua5gzeKg8hJo3grY4g7c3grU0gLI2frE0daAubJc2gbQwd6QzeKk2gLMtd5sxdKIua5g1frA2f7IydaM0e6w2fq41fK01eqo3grgubJgta5cxdKI1f7AydaQydaMxc6EubJgvbJkwcZ4ubZkwcJwubZgubJcydqUydKIxapgubJctbJcubZcubJcvbJYubJcvbZkubJctbJctbZcubJg2f7AubJcrbZcubJcubJcua5g3grY0fq8ubJcubJdEkdEwhsw6i88vhswuhcsuhMtBjMgthMsrg8srgss6is8qgcs8i9A9iMYtg8spgcoogMo7hcMngMonf8olfso4gr8kfck5iM8jfMk4iM8he8k1fro7itAgesk2hs8eecgzfLcofssdeMg0hc4cd8g2hcsxeLQbdsgZdcgxeLImfcszhM0vda4xgckzhM4xg84wf8Yxgs4udKsvfcQucqhUndROmdM1fK0wcZ8vb5w0eqpQm9MzeKhXoNVcpdYydKNWn9VZotVKltJFjsIwcJ1Rms9OlslLmtH///8+kc9epdYzd6dbo9VHkMM2f7FHmNBClM8ydqVcpNY9hro3gLM9hLczealQmcw3fa46f7A8gLMxc6I3eagyc6FIldJMl9JSnNRSntNNl9JPnNJFi75UnM9ZodVKksg8kM45jc09e6ZHltFBk883gbRBh7pDk9EwcaBzn784g7dKkcY2i81Om9M7j85Llc81is09g7Q4grY/j9A0eqxKmdFFltBEjcXf6fFImdBCiLxJl9FGlNFBi78yiMxVndEvbpo6js74+vx+psPP3+o/ks5HkcpGmNCjwdZCkNDM3ehYoNJEls+lxNkxh8xHks0+jdC1zd5Lg6r+/v/H2ufz9/o3jM3t8/edvdM/k89Th61OiLBSjbZklbaTt9BfptdjmL1AicBHj8hGk9FAgK1dkLNTjLRekrdClc/k7fM0icy0y9tgp9c4jc2NtM9Dlc8zicxeXZn3AAAAQ3RSTlMAHDdTb4yPA+LtnEQmC4L2EmHqB7XA0d0sr478x4/Yd5i1zOfyPkf1sLVq4Nh3FvjxopQ2/STNuFzUwFIwxKaejILpIBEV9wAABhVJREFUeF6s1NdyFEcYBeBeoQIhRAkLlRDGrhIgY3BJL8CVeKzuyXFzzjkn5ZxzzuScg3PO8cKzu70JkO0LfxdTU//pM9vTu7Xgf6KqOVTb9X7toRrVEfBf1HTVjZccrT/2by1VV928Yty9ZbVuucdz90frG8DBjl9pVApbOstvmMuvVgaNXSfAAd6pGxpy6yxf5ph43pS/4f3uoaGm2rdu72S9xzOvMymkZFq/ptDrk90mhW7e4zl7HLzhxGWPR20xmSxJ/VqldG5m9XhaVOA1DadsNh3Pu5L2N6QtPO/32JpqQBVVk20oy/Pi2s23WEvyfHbe1thadVQttvm7Llf65gGmXK67XtupyoM7HQhmXdLS8oGWJNeOJ3C5fG5XCEJnkez3/oFdsvgJ4l2ANZwhrJKk/7OSXa+3Vw2WJMlKnGkobouYk6T0TyX30klOUnTD9HJ5qpckL3EW/w4XF3Xd0FGywXUrstrclVsqz5Pd/sXFYyDnPdrLcQODmGOK47IZb4CmibmMn+MYRzFZ5jg33ZL/EJrWcszHmANy3ARBK/IXtciJy8VsitPSdE3uuHxzougojcUdr8/32atnz/ev3f/K5wtpxUTpcaI45zusVDpYtZi+jg0oU9b3x74h7+n9ABvYEZeKaVq0sh0AtLKsFtqNBdeT0MrSzwwlq9+x6xAO4tgOtSzbCjrNQQiNvQUbUEubvzBUeGw26yDCsRHCoLkTHDa7IdOLIThs/gHvChszh2CimE8peRs47cxANI0lYNB5y1DljpOF0IhzBDPOZnDOqYYbeGKECbPzWnXludPphw5c2YBq5zlwXphIbO4VDCZ0gnPfUO1TwZoYwAs2ExPCedAu9DAjfQUjzITQb3jNj0KG2Sgt6BHaQUdYzWz+XmBktOHwanXjaSTcwwziBcuMOtwBmqPrTOxFQR/DRKKPqyur0aiW6cULYsx6tBm0jXpR/AUWR6HRq9WVW6MRhIq5jLyjbaCTDCijyYJNpCajdyobP/eTw0iexBAKkJ3gA5KcQb2zBXsIBckn+xVv8jkZSaEFHE+jFEleAEfayRU0MouNoBmB/L50Ai/HSLIHxcrpCvnhSQAuakKp2C/YbCylJjXRVy/z3+Kv/RrNcCo+WUzlVEhzKffnTQnxeN9fWF88fiNCUdSTsaufaChKWInHeysygfpIqagoakW+vV20J8uyl6TyNKEZWV4oRSPyCkWpgOLSbkCObT8o2r6tlG58HQquf6O0v50tB7JM7F4EORd2dx/K0w/KHsVkLPaoYrwgP/y7krr3SSMA4zj+OBgmjYkxcdIJQyQRKgg2viX9Hddi9UBb29LrKR7CVVEEEXWojUkXNyfTNDE14W9gbHJNuhjDettN3ZvbOvdOqCD3Jp/9l+/wJE+9PkYGjx/fqkys3S2rMozM/o2106rfMUINo6hVqz+eu/hd1c4xTg0TAfy5kV+4UG6+IthHTU9woWmxuKNbTfuCSfovBCxq7EtHqvYL4Sm6F8GVxsSXHMQ07TOi1DKtZxjWaaIyi4CXWjxPccUw8WVbMYY5wxC1mzEyXMJWkllpRloi+Kkoq69sxBTlElF6aAxYUbjXNlhlDZilDnM4U5SlN5biRsRHnbx3mbeWjEh4mEyiuJDl5XcWVmX5GvNkFgLWZM5qwsop4/AWfLhU1cR7k1VVvcYCWRkOI6Xy5gmnphCYIkvzuNYzHzosq2oNk2RtSs8khfUOfHIDgR6ysYBaMpl4uEgk2U/oJTs9AaTSwma7dT69geAE2ZpEjUsn2ieJNHeKfrI3EcAGJ2ZaNgVuC8EBctCLc57P5u5led6IOBkIYkuQMrmmjChs4VkfOerHqSBkPzZlhe06RslZ3zMjk2sscqKwY0RcjKK+LWbzd7KiHhkncs/siFJ+V5eXxD34B8nVuJEpGJNmxN2gH3vSvp7J70tF+D1Ej8qUJD1TkErAND2GZwTFg/LubvmgiBG3SOvdlsqFQrkEzJCL1rstlnVFROixZoDDSuXQFHESwVGlcuQcMb/b42NgjLowh5MTDFE3vNB5qStRIErdCQEh6pLPR92anSUb/wAIhldAaDMpGgAAAABJRU5ErkJggg==",t4="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=",n4="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAQAAAACach9AAACMUlEQVR4Ae3ShY7jQBAE0Aoz/f9/HTMzhg1zrdKUrJbdx+Kd2nD8VNudfsL/Th///dyQN2TH6f3y/BGpC379rV+S+qqetBOxImNQXL8JCAr2V4iMQXHGNJxeCfZXhSRBcQMfvkOWUdtfzlLgAENmZDcmo2TVmt8OSM2eXxBp3DjHSMFutqS7SbmemzBiR+xpKCNUIRkdkkYxhAkyGoBvyQFEJEefwSmmvBfJuJ6aKqKWnAkvGZOaZXTUgFqYULWNSHUckZuR1HIIimUExutRxwzOLROIG4vKmCKQt364mIlhSyzAf1m9lHZHJZrlAOMMztRRiKimp/rpdJDc9Awry5xTZCte7FHtuS8wJgeYGrex28xNTd086Dik7vUMscQOa8y4DoGtCCSkAKlNwpgNtphjrC6MIHUkR6YWxxs6Sc5xqn222mmCRFzIt8lEdKx+ikCtg91qS2WpwVfBelJCiQJwvzixfI9cxZQWgiSJelKnwBElKYtDOb2MFbhmUigbReQBV0Cg4+qMXSxXSyGUn4UbF8l+7qdSGnTC0XLCmahIgUHLhLOhpVCtw4CzYXvLQWQbJNmxoCsOKAxSgBJno75avolkRw8iIAFcsdc02e9iyCd8tHwmeSSoKTowIgvscSGZUOA7PuCN5b2BX9mQM7S0wYhMNU74zgsPBj3HU7wguAfnxxjFQGBE6pwN+GjME9zHY7zGp8wVxMShYX9NXvEWD3HbwJf4giO4CFIQxXScH1/TM+04kkBiAAAAAElFTkSuQmCC";delete ai.Icon.Default.prototype._getIconUrl;ai.Icon.Default.mergeOptions({iconRetinaUrl:e4,iconUrl:t4,shadowUrl:n4});const r4={"ميني مول":"mini_mall","سوبر ماركت":"supermarket","خضار و فواكه":"greengrocer",ملحمة:"butcher",حلويات:"sweets",مطعم:"restaurant",كافيه:"cafe","مساحات عمل":"coworking",صيدلية:"pharmacy","أدوات منزلية":"household","أدوات كهربائية":"electric_tools","المولدات و الطاقة الشمسية":"solar_generators","المولدات والطاقة الشمسية":"solar_generators",إلكترونيات:"electronics",الكترونيات:"electronics","أدوات بناء":"hardware","ملابس نسائي":"clothing_women","ملابس رجالي":"clothing_men","ملابس أطفال":"clothing_kids",أحذية:"shoes",كوزماتكس:"cosmetics"};function up(e){return(e||"").trim().replace(/[\u0640\u200c-\u200f]/g,"").replace(/[أإآٱ]/g,"ا").replace(/ى/g,"ي").replace(/ة/g,"ه").replace(/\s+/g," ")}const $f=(()=>{const e=new Map;for(const[t,n]of Object.entries(r4))e.set(t.trim(),n),e.set(up(t),n);return e})();function qf(e){const t=(e||"").trim();return t&&($f.get(t)||$f.get(up(t)))||null}const Vf=[["greengrocer",/(خضار|خضروات|خضرة|فاكهه|فاكهة|فواكه|بلح|موز|برتقال|طماطم|بندوره|خضار\s*و\s*فواكه|فواكه\s*و\s*خضار)/i],["clothing_women",/(ملابس\s*نسائي|ملابس\s*نسائيه|ملابس\s*نساء|عبايه\s*نسائي|محل\s*نسائي)/i],["clothing_men",/(ملابس\s*رجالي|ملابس\s*رجاليه|ملابس\s*رجال|بدله\s*رجالي|بدلة\s*رجالي)/i],["clothing_kids",/(ملابس\s*أطفال|ملابس\s*اطفال|ملابس\s*ولادي|ملابس\s*البيبي)/i],["clothing",/(ملابس|ملبسات|أزياء|عبايه|عباية|تيشيرت|جينز|فستان|بناطيل|محل\s*ملابس|براند)/i],["shoes",/(احذيه|أحذية|شوز|كوتشي|كوتش|صندل|نعل|احذيه\s*رياضيه)/i],["solar_generators",/(طاقه\s*شمسيه|طاقة\s*شمسية|الطاقة\s*الشمسية|مولدات\s*و|مولدات.*شمس|شمس.*مولد|بانل\s*شمس|بانوهات\s*شمس|انفرتر|اينفرتر|نظام\s*شمسي|solar|photovoltaic|pv\s*panel)/i],["electric_tools",/(ادوات\s*كهربائيه|أدوات\s*كهربائية|معدات\s*كهربائيه|أدوات\s*الكهرباء)/i],["electronics",/(الكترونيات|إلكترونيات|الكترون|إلكترون|موبايل|جوال|هاتف|كمبيوتر|لابتوب|كميرا|كاميرا|شاحن|سماعات|كهربائ)/i],["furniture",/(اثاث|أثاث|مفروشات|كنب|سرير|خزائن|مكاتب)/i],["hardware",/(عدد|عدّات|ادوات\s*يدويه|أدوات\s*يدوية|ادوات\s*بناء|أدوات\s*بناء|مواد\s*بناء|سباكه|كهربائي|نجار|حداد|قرميد|اسمنت|إسمنت|دهان|طلاء|بويه)/i],["cosmetics",/(مكياج|عطور|صيدلانيه\s*تجميل|تجميل|عنايه|عناية|كريمات|مستحضرات|كوزماتكس|كوسمتيك|كوسماتكس)/i],["pharmacy",/(صيدليه|صيدلية|دواء|ادويه|أدوية|روشته|روشتة)/i],["butcher",/(ملحمه|ملحمة|جزار|جزاره|لحوم|لحمه|لحمة|دواجن|مجمدات\s*لحوم)/i],["fish",/(سمك|بحري|بحريات|جمبري|شريده|شريدة|سوشي)/i],["bakery",/(مخبز|مخبوزات|معجنات|فطاير|كيك|حلويات\s*شرقيه|كعك)/i],["dairy",/(البان|ألبان|الألبان|حليب|اجبان|أجبان|اجبنه|أجبان|زبادي|لبنه)/i],["cafe",/(قهوه|قهوة|كافيه|كافية|مقهى|نسكافيه|شاي|bubble)/i],["restaurant",/(مطعم|مطاعم|شورما|شاورما|فلافل|فلافيل|برغر|بيتزا|وجبات|مأكولات)/i],["sweets",/(حلويات|شوكولاته|شوكولاتة|بسكويت|سكريات|حلاوه|حلاوة)/i],["spices",/(بهارات|توابل|عطاره|عطارة|زعتر|زارة\s*بهارات)/i],["flowers",/(ورد|ازهار|نباتات|نبات|ياسمين|بائع\s*ورد|محل\s*ورد)/i],["books",/(كتب|قرطاسيه|قرطاسية|أدوات\s*مدرسيه|أدوات\s*مدرسية|مكتبه|مكتبة)/i],["toys",/(العاب|ألعاب|العاب\s*اطفال|ألعاب\s*أطفال|دمي|دمى)/i],["sports",/(رياضه|رياضية|رياضي|جم|جيم|معدات\s*رياضيه|معدات\s*رياضية|كرة)/i],["pets",/(حيوانات\s*اليفه|حيوانات\s*أليفة|قطط|كلاب|طيور|اسماك\s*زينه|أحواض)/i],["jewelry",/(ذهب|فضه|مجوهرات|اكسسوار|إكسسوار|ساعات\s*ذهب)/i],["auto",/(سيارات|سياره|بطاريات|زيوت|زيت\s*سيارات|قطع\s*غيار|ميكانيك)/i],["cleaning",/(منظفات|تنظيف|مكانس|مساحات|كلور|صابون\s*غسيل)/i],["gifts",/(هدايا|تحف|ديكورات|سفر\s*مائده|سفرة)/i],["household",/(ادوات\s*منزليه|أدوات\s*منزلية|بلاستيك|تخزين|اواني|أواني|طناجر)/i],["coworking",/(مساحات\s*عمل|كوركنج|coworking|مكتب\s*مشترك|شركه\s*ناشئه)/i],["mini_mall",/(ميني\s*مول|مول\s*صغير|mini\s*mall)/i],["supermarket",/(سوبر|سوبير|ماركت|بقال|بقالة|هايبر|سوق\s*مركزي|تموين|جمله|جملة)/i]],Xu={greengrocer:{emoji:"🥬",bg:"#43a047"},clothing:{emoji:"👕",bg:"#3949ab"},clothing_women:{emoji:"👗",bg:"#c2185b"},clothing_men:{emoji:"👔",bg:"#283593"},clothing_kids:{emoji:"🧒",bg:"#ef6c00"},shoes:{emoji:"👟",bg:"#6d4c41"},electronics:{emoji:"📱",bg:"#1e88e5"},furniture:{emoji:"🪑",bg:"#8d6e63"},hardware:{emoji:"🔨",bg:"#78909c"},cosmetics:{emoji:"💄",bg:"#ec407a"},pharmacy:{emoji:"💊",bg:"#1565c0"},butcher:{emoji:"🥩",bg:"#c62828"},fish:{emoji:"🐟",bg:"#0277bd"},bakery:{emoji:"🥐",bg:"#ef6c00"},dairy:{emoji:"🥛",bg:"#5c6bc0"},cafe:{emoji:"☕",bg:"#4e342e"},restaurant:{emoji:"🍴",bg:"#d84315"},sweets:{emoji:"🍰",bg:"#ad1457"},spices:{emoji:"🌶",bg:"#e65100"},flowers:{emoji:"💐",bg:"#2e7d32"},books:{emoji:"📚",bg:"#5e35b1"},toys:{emoji:"🧸",bg:"#f9a825"},sports:{emoji:"⚽",bg:"#00897b"},pets:{emoji:"🐾",bg:"#6a1b9a"},jewelry:{emoji:"💍",bg:"#ffd54f"},auto:{emoji:"🚗",bg:"#37474f"},cleaning:{emoji:"🧹",bg:"#26a69a"},gifts:{emoji:"🎁",bg:"#c2185b"},household:{emoji:"🏠",bg:"#7e57c2"},supermarket:{emoji:"🛒",bg:"#2e7d32"},mini_mall:{emoji:"🏬",bg:"#6a1b9a"},coworking:{emoji:"💼",bg:"#455a64"},solar_generators:{emoji:"☀️",bg:"#f57c00"},electric_tools:{emoji:"🔌",bg:"#607d8b"},generic:{emoji:"🏪",bg:"#fbc02d"}};function s1(e){const t=(e||"").trim();if(!t)return null;const n=qf(t);if(n)return n;for(const[o,l]of Vf)if(l.test(t))return o;const a=up(t);if(a&&a!==t){const o=qf(a);if(o)return o;for(const[l,d]of Vf)if(d.test(a))return l}return null}function i4(e,t){if(!(t!=null&&t.length)||(e==null?void 0:e.category)==null)return null;const n=Number(e.category);if(!Number.isFinite(n))return null;const a=t.find(o=>Number(o.id)===n);return(a==null?void 0:a.name)||null}function l1(e,t){const n=new Set,a=[],o=l=>{const d=l&&String(l).trim()||"";d&&!n.has(d)&&(n.add(d),a.push(d))};o(e==null?void 0:e.category_name),o(i4(e,t)),o(e==null?void 0:e.store_name),o(e==null?void 0:e.description);for(const l of a){const d=s1(l);if(d)return d}return"generic"}function gc(e,t){const n=e==null?void 0:e.logo,a=e==null?void 0:e.category_image;if(n)return{type:"image",url:n};if(a)return{type:"image",url:a};const o=l1(e,t);return{type:"emoji",...Xu[o]}}function a4(e){const t=l1({category_name:e,category:null,store_name:"",description:""},null);return Xu[t]||Xu.generic}function Qo(e){var l,d;const t=(e==null?void 0:e.latitude)??(e==null?void 0:e.lat)??(e==null?void 0:e.location_lat)??((l=e==null?void 0:e.location)==null?void 0:l.lat),n=(e==null?void 0:e.longitude)??(e==null?void 0:e.lng)??(e==null?void 0:e.location_lng)??((d=e==null?void 0:e.location)==null?void 0:d.lng),a=Number(t),o=Number(n);return!Number.isFinite(a)||!Number.isFinite(o)||Math.abs(a)<.25&&Math.abs(o)<.25?null:[a,o]}function o4(e){return Qo(e)!=null}function s4(e){return e.type==="image"?ai.icon({iconUrl:e.url,iconSize:[46,46],iconAnchor:[23,46],popupAnchor:[0,-42],className:"store-map-pin-img"}):ai.divIcon({className:"store-map-pin-divicon",html:`<div class="store-map-pin-emoji-inner" style="background:${e.bg}">${e.emoji}</div>`,iconSize:[46,46],iconAnchor:[23,46],popupAnchor:[0,-40]})}const l4=[31.5,34.4],c4=13;function d4({store:e}){const t=(e==null?void 0:e.rating_average)!=null?Number(e.rating_average):null,n=(e==null?void 0:e.rating_count)!=null?Number(e.rating_count):0,a=t!=null&&Number.isFinite(t)?t:null;if(!n||a==null)return i.jsx("div",{style:{fontSize:"0.82rem",color:"#666",marginBottom:8,lineHeight:1.4},children:"لا يوجد تقييم بعد"});const o=Math.min(5,Math.max(0,Math.round(a)));return i.jsxs("div",{dir:"ltr",style:{display:"flex",alignItems:"center",gap:8,marginBottom:8,flexWrap:"wrap"},children:[i.jsx("span",{style:{display:"inline-flex",gap:2,alignItems:"center"},"aria-hidden":!0,children:[1,2,3,4,5].map(l=>i.jsx(qu,{size:16,color:"#f5c000",fill:l<=o?"#f5c000":"none",strokeWidth:l<=o?0:1.5},l))}),i.jsxs("span",{style:{fontSize:"0.84rem",color:"#333",fontWeight:800},children:[a.toFixed(1),i.jsxs("span",{style:{fontWeight:600,color:"#666"},children:[" · ",n," تقييم"]})]})]})}function u4(e,t,n,a,o,l){const d=(e==null?void 0:e.length)===2?`${Number(e[0]).toFixed(5)},${Number(e[1]).toFixed(5)}`:"none",h=(t||[]).map(y=>{const x=Number(y.latitude),v=Number(y.longitude);return!Number.isFinite(x)||!Number.isFinite(v)?null:`s:${y.id}:${x.toFixed(5)}:${v.toFixed(5)}`}).filter(Boolean),u=(n||[]).map(y=>{const x=Qo(y);return x?`c:${y.id}:${x[0].toFixed(5)}:${x[1].toFixed(5)}`:null}).filter(Boolean),f=l==="community"?u:l==="both"?[...h,...u]:h;return`${d}#${f.sort().join("|")}#${a}#${o?"R":"U"}#${l||"stores"}`}function h4({userLocation:e,stores:t,communityPoints:n,locationFocusNonce:a,focusOnResults:o,focusKind:l}){const d=Pr(),h=m.useRef("");return m.useEffect(()=>{const u=u4(e,t,n,a,o,l);if(u===h.current)return;h.current=u;const f=(t||[]).map(v=>{const _=Number(v.latitude),b=Number(v.longitude);return!Number.isFinite(_)||!Number.isFinite(b)?null:[_,b]}).filter(Boolean),y=(n||[]).map(v=>Qo(v)).filter(Boolean),x=l==="community"?y:l==="both"?[...f,...y]:f;if(o){if(x.length===0){if((e==null?void 0:e.length)===2){const v=Number(e[0]),_=Number(e[1]);Number.isFinite(v)&&Number.isFinite(_)&&d.flyTo([v,_],17,{duration:.55,animate:!0})}return}if(x.length===1){d.setView(x[0],17,{animate:!0});return}d.fitBounds(ai.latLngBounds(x),{padding:[40,40],maxZoom:17,animate:!0});return}if((e==null?void 0:e.length)===2){const v=Number(e[0]),_=Number(e[1]);if(!Number.isFinite(v)||!Number.isFinite(_))return;const b=a>0,z=b?18:17,C=b?.9:.55;d.flyTo([v,_],z,{duration:C,animate:!0});return}if(f.length!==0){if(f.length===1){d.setView(f[0],15,{animate:!0});return}d.fitBounds(ai.latLngBounds(f),{padding:[40,40],maxZoom:17,animate:!0})}},[d,e,t,n,a,o,l]),null}function da({onPick:e}){return a1({click(t){typeof e=="function"&&e(t.latlng.lat,t.latlng.lng)}}),null}function p4({active:e}){const t=Pr();return m.useEffect(()=>{const n=t.getContainer(),a="leaflet-pick-cursor";return e?n.classList.add(a):n.classList.remove(a),()=>n.classList.remove(a)},[t,e]),null}const m4={medical:"🏥",education:"📚",food:"🍲",water:"💧",institution:"🤝"};function f4(e){const t=m4[e]||"📍";return ai.divIcon({className:"community-map-pin-wrap",html:`<div class="community-map-pin-inner community-map-pin-inner--pin"><span class="community-pin-emoji">${t}</span></div>`,iconSize:[38,38],iconAnchor:[19,38],popupAnchor:[0,-34]})}const g4=({stores:e,communityPoints:t=[],userLocation:n,locationFocusNonce:a=0,onManualLocationPick:o,categories:l,showGpsOnMap:d=!1,gpsLocating:h=!1,onGpsClick:u,mapHeight:f="clamp(260px, 52dvh, 420px)",gpsLabel:y="موقعي الحالي",gpsLocatingLabel:x="جاري الموقع… (حتى ~20ث)",wrapperClassName:v="",gpsFabAlignStart:_=!1,gpsInline:b=!1,topControls:z=null,focusOnResults:C=!1,focusKind:N="stores",focusStoreId:w=null,focusCommunityPointId:S=null,onExpandClick:j,isFullscreen:E=!1})=>{const M=m.useMemo(()=>{if((n==null?void 0:n.length)===2)return n;const Q=(e||[]).find(J=>Number.isFinite(Number(J.latitude))&&Number.isFinite(Number(J.longitude)));return Q?[Number(Q.latitude),Number(Q.longitude)]:l4},[e,n]),P=m.useMemo(()=>{const Q=new Map;for(const J of e||[]){const W=J==null?void 0:J.id;if(W==null)continue;const R=gc(J,l);Q.set(String(W),s4(R))}return Q},[e,l]),[O,I]=m.useState(!1),F=typeof o=="function",V=m.useRef({}),D=m.useRef({}),ae=E||typeof f=="string"&&(f.includes("100dvh")||f.includes("100vh")||f==="100%"),oe=(Q,J)=>{typeof o=="function"&&o(Q,J),I(!1)};return i.jsxs("div",{className:`radar-map card radar-map--manual-wrap radar-map--market${O?" radar-map--pick-active":""}${ae?" radar-map--fill":""}${E?" radar-map--fullscreen":""}${v?` ${v}`:""}`,style:{padding:0,overflow:"hidden",position:E?"absolute":"relative",...E?{inset:0,width:"100%",height:"100%",display:"flex",flexDirection:"column"}:ae?{flex:1,minHeight:0,display:"flex",flexDirection:"column"}:{}},children:[F?i.jsx("div",{className:"shopper-map-manual-bar",role:"region","aria-label":"تحديد الموقع يدوياً",children:O?i.jsxs(i.Fragment,{children:[i.jsx("span",{className:"shopper-map-manual-hint",children:"انقر على الخريطة لتثبيت موقعك"}),i.jsx("button",{type:"button",className:"shopper-map-manual-btn shopper-map-manual-btn-cancel",onClick:()=>I(!1),children:"إلغاء"})]}):i.jsxs(i.Fragment,{children:[i.jsx("button",{type:"button",className:"shopper-map-manual-btn shopper-map-manual-btn-primary",onClick:()=>I(!0),children:"تحديد موقعي يدوياً على الخريطة"}),b&&d&&typeof u=="function"?i.jsxs("button",{type:"button",className:"shopper-map-gps-inline",onClick:u,disabled:h,title:"تحديد موقعي الحالي على الخريطة","aria-label":h?"جاري تحديد الموقع":"موقعي الحالي",children:[i.jsx($t,{size:18,strokeWidth:2.25,"aria-hidden":!0}),i.jsx("span",{children:h?x:y})]}):null]})}):null,z?i.jsx("div",{className:"shopper-map-topbar",role:"region","aria-label":"بحث وفلاتر الخريطة",children:z}):null,typeof j=="function"?i.jsx("button",{type:"button",className:"shopper-map-expand-btn",onClick:j,title:"تكبير الخريطة","aria-label":"تكبير الخريطة",children:i.jsx(kw,{size:20,strokeWidth:2.25,"aria-hidden":!0})}):null,i.jsxs(oi,{center:M,zoom:c4,minZoom:10,maxZoom:19,scrollWheelZoom:!0,style:ae?{flex:1,minHeight:E?0:220,width:"100%"}:{height:f,width:"100%"},children:[i.jsx(si,{}),i.jsx(li,{}),i.jsx(p4,{active:O}),i.jsx(h4,{userLocation:n,stores:e,communityPoints:t,locationFocusNonce:a,focusOnResults:C,focusKind:N}),w!=null?i.jsx(x4,{storeId:w,markerRefs:V}):null,S!=null?i.jsx(y4,{pointId:S,markerRefs:D}):null,F&&O?i.jsx(da,{onPick:oe}):null,(n==null?void 0:n.length)===2&&i.jsx(qn,{position:n,children:i.jsx(Vn,{children:i.jsxs("div",{style:{maxWidth:220},children:[i.jsx("div",{style:{fontWeight:800,marginBottom:6},children:"موقعك للمقارنة بالمتاجر"}),i.jsx("div",{style:{fontSize:"0.88rem",lineHeight:1.45,color:"#444"},children:"استخدم «تحديد موقعي يدوياً على الخريطة» ثم انقر المكان، أو زر «موقعي الحالي» على حافة الخريطة للـ GPS."})]})})}),(t||[]).map(Q=>{const J=Qo(Q);if(!J)return null;const W=Q.category_slug||"",R=f4(W),te=W==="water"&&Q.water_is_potable!=null?Q.water_is_potable?"مياه صالحة للشرب":"مياه غير صالحة للشرب":null;return i.jsxs(qn,{position:J,icon:R,ref:G=>{const X=(Q==null?void 0:Q.id)!=null?String(Q.id):"";X&&G&&(D.current[X]=G)},children:[i.jsx(Xk,{direction:"top",offset:[0,-34],opacity:.95,sticky:!0,children:i.jsxs("div",{style:{maxWidth:260},children:[i.jsx("div",{style:{fontWeight:900,marginBottom:4},children:Q.title}),Q.detail_description?i.jsxs("div",{style:{fontSize:"0.85rem",lineHeight:1.45,color:"#333"},children:[String(Q.detail_description).slice(0,180),String(Q.detail_description).length>180?"…":""]}):null]})}),i.jsx(Vn,{children:i.jsxs("div",{style:{minWidth:200,maxWidth:280},children:[i.jsx("div",{style:{fontWeight:900,marginBottom:6},children:Q.title}),i.jsx("div",{style:{fontSize:"0.82rem",color:"#555",marginBottom:6},children:Q.category_name||"خدمة مجتمعية"}),te?i.jsx("div",{style:{fontSize:"0.8rem",fontWeight:700,marginBottom:6},children:te}):null,Q.institution_scope_label&&Q.institution_scope?i.jsxs("div",{style:{fontSize:"0.8rem",marginBottom:6},children:["النطاق: ",Q.institution_scope_label]}):null,i.jsx("div",{style:{fontSize:"0.85rem",lineHeight:1.45,marginBottom:8},children:Q.detail_description}),i.jsx("div",{style:{fontSize:"0.8rem",color:"#666"},children:Q.address_text})]})})]},`c-${Q.id}`)}),(e||[]).map(Q=>{const J=Number(Q.latitude),W=Number(Q.longitude);if(!Number.isFinite(J)||!Number.isFinite(W))return null;const R=Q.id!=null?String(Q.id):"",te=R?P.get(R):void 0;return i.jsx(qn,{position:[J,W],icon:te,ref:G=>{R&&G&&(V.current[R]=G)},children:i.jsx(Vn,{children:i.jsxs("div",{style:{minWidth:180},children:[i.jsx("div",{style:{fontWeight:900,marginBottom:4},children:Q.store_name}),i.jsx(d4,{store:Q}),i.jsx("div",{style:{color:"var(--text-secondary)",marginBottom:8},children:Q.category_name||"متجر"}),i.jsx("div",{style:{color:"var(--text-secondary)",marginBottom:10},children:Q.description||"لا يوجد وصف"}),i.jsx(me,{to:`/stores/${Q.id}`,style:{display:"inline-block",fontWeight:800,color:"var(--secondary)",background:"var(--primary)",padding:"8px 12px",borderRadius:10,textDecoration:"none",fontSize:"0.9rem"},children:"عرض المتجر"})]})})},Q.id)})]}),!b&&d&&typeof u=="function"?i.jsxs("button",{type:"button",className:`shopper-map-gps-fab${_?" shopper-map-gps-fab--start":""}`,onClick:u,disabled:h,title:"تحديد موقعي الحالي على الخريطة","aria-label":h?"جاري تحديد الموقع":"موقعي الحالي",children:[i.jsx($t,{size:20,strokeWidth:2.25,"aria-hidden":!0}),i.jsx("span",{children:h?x:y})]}):null]})};function x4({storeId:e,markerRefs:t}){const n=Pr();return m.useEffect(()=>{const a=e!=null?String(e):"";if(!a)return;let o=!1,l=0;const d=()=>{var u,f;if(o)return;const h=(u=t==null?void 0:t.current)==null?void 0:u[a];if(h){try{h.openPopup();const y=(f=h.getLatLng)==null?void 0:f.call(h);y&&n.panTo(y,{animate:!0})}catch{}return}l+=1,l<14&&window.setTimeout(d,100)};return window.setTimeout(d,60),()=>{o=!0}},[e,t,n]),null}function y4({pointId:e,markerRefs:t}){const n=Pr();return m.useEffect(()=>{const a=e!=null?String(e):"";if(!a)return;let o=!1,l=0;const d=()=>{var u,f;if(o)return;const h=(u=t==null?void 0:t.current)==null?void 0:u[a];if(h){try{h.openPopup();const y=(f=h.getLatLng)==null?void 0:f.call(h);y&&n.panTo(y,{animate:!0})}catch{}return}l+=1,l<14&&window.setTimeout(d,100)};return window.setTimeout(d,60),()=>{o=!0}},[e,t,n]),null}function Ao({position:e,zoom:t=17}){const n=Pr(),a=m.useRef("");return m.useEffect(()=>{if(!e||e.length!==2)return;const o=Number(e[0]),l=Number(e[1]);if(!Number.isFinite(o)||!Number.isFinite(l))return;const d=`${o.toFixed(7)},${l.toFixed(7)}`;d!==a.current&&(a.current=d,n.flyTo([o,l],t,{duration:.55,animate:!0}))},[n,e,t]),null}const v4=[31.5,34.4],b4=["ميني مول","سوبر ماركت","خضار و فواكه","ملحمة","حلويات","مطعم","كافيه","مساحات عمل","صيدلية","أدوات منزلية","أدوات كهربائية","إلكترونيات","أدوات بناء","__CLOTHES__","أحذية","كوزماتكس"],_4=[{value:"نسائي",label:"ملابس نسائي"},{value:"رجالي",label:"ملابس رجالي"},{value:"أطفال",label:"ملابس أطفال"}];function w4(e,t,n){const a=o=>{var l;return((l=e.find(d=>d.name===o))==null?void 0:l.id)??null};if(t==="__CLOTHES__"){const l={نسائي:"ملابس نسائي",رجالي:"ملابس رجالي",أطفال:"ملابس أطفال"}[n];return l?a(l):null}return t?a(t):null}const j4=()=>{const[e,t]=m.useState("shopper"),[n,a]=m.useState(!1),[o,l]=m.useState(""),[d,h]=m.useState(""),[u,f]=m.useState(""),[y,x]=m.useState(""),[v,_]=m.useState("نسائي"),[b,z]=m.useState(""),[C,N]=m.useState(null),[w,S]=m.useState(!1),[j,E]=m.useState(!1),[M,P]=m.useState([]),[O,I]=m.useState(!1),[F,V]=m.useState(""),[D,ae]=m.useState(!1),oe=ct(),{showAlert:Q}=Ue(),J=m.useMemo(()=>C&&C.length===2?C:v4,[C]);m.useEffect(()=>{let T=!1;return(async()=>{I(!0);try{const Z=await ui();T||P(Array.isArray(Z)?Z:[])}catch{T||P([])}finally{T||I(!1)}})(),()=>{T=!0}},[]);const W=m.useMemo(()=>w4(M,y,v),[M,y,v]),R=T=>{t(T),T==="shopper"&&(f(""),x(""),_("نسائي"),z(""),N(null),S(!1))},te=async()=>{if(!navigator.geolocation){await Q("المتصفح لا يدعم تحديد الموقع.","تنبيه");return}E(!0);try{const T=await qo({maxWaitMs:18e3,goodEnoughM:150});N([T.latitude,T.longitude])}catch{await Q("تعذر تحديد موقعك الحالي. جرّب النقر على الخريطة يدوياً.","الموقع")}finally{E(!1)}},G={width:"100%",padding:"0.85rem 1rem",borderRadius:"var(--radius-md)",border:"1.5px solid var(--border)",background:"var(--surface)",fontSize:"0.95rem",textAlign:"right",marginBottom:"1.2rem"},X=async T=>{if(T.preventDefault(),ae(!0),V(""),e==="merchant"){if(!u.trim()){V("أدخل اسم المتجر."),ae(!1);return}if(!y){V("اختر نوع المتجر (القسم)."),ae(!1);return}if(!W){V(O||M.length===0?"تعذر تحميل الأقسام. تأكد من تشغيل الخادم وتشغيل الترحيلات (migrate).":"القسم المحدد غير متوفر في النظام. حدّث الصفحة أو راجع الأدمن."),ae(!1);return}if(!b.trim()){V("أدخل عنوان المتجر أو وصف الموقع نصاً (يظهر لاحقاً في صفحة المتجر)."),ae(!1);return}}try{const Z={username:o.trim(),user_type:e,password:d};e==="merchant"&&(Z.store_name=u.trim(),Z.category=W,Z.location_address=b.trim(),C&&C.length===2&&(Z.store_latitude=C[0],Z.store_longitude=C[1]));const ee=await Nj(Z);e==="merchant"&&(ee!=null&&ee.merchant_subscription_notice)&&await Q(ee.merchant_subscription_notice,"ملاحظة الاشتراك"),await Ry(o.trim(),d),Q("تم تسجيل الحساب بنجاح!","نجاح"),oe("/")}catch(Z){if(Z.response&&Z.response.data){const ee=Object.values(Z.response.data).flat().join(" ");V(ee||"تعذر إنشاء الحساب، يرجى المحاولة مرة أخرى."),Q(ee||"تعذر إنشاء الحساب، يرجى المحاولة مرة أخرى.")}else V("تعذر الاتصال بالخادم، يرجى التأكد من تشغيل الـ Backend."),Q("تعذر الاتصال بالخادم، يرجى التأكد من تشغيل الـ Backend.");console.error(Z)}finally{ae(!1)}},H=()=>{localStorage.removeItem("token"),localStorage.removeItem("refresh"),localStorage.removeItem("user_type"),localStorage.removeItem("user_name"),localStorage.removeItem("is_verified"),localStorage.removeItem("is_primary_admin"),localStorage.setItem("isGuest","true"),oe("/")},ue=e==="merchant"?480:420;return i.jsx(Ce,{children:i.jsxs("div",{className:"auth-page",children:[i.jsxs("div",{className:"auth-card",style:{maxWidth:ue},children:[i.jsx("img",{className:"auth-logo",src:"/logo.png",alt:"رادار"}),i.jsx("h1",{className:"auth-title",style:{marginBottom:"6px"},children:"إنشاء حساب"}),i.jsx("p",{className:"auth-sub",style:{marginBottom:"1rem"},children:"انضم كمتسوق أو افتح متجرك على رادار."}),i.jsxs("div",{className:"type-toggle",role:"tablist","aria-label":"نوع الحساب",children:[i.jsxs("button",{type:"button",role:"tab","aria-selected":e==="shopper",className:`type-item ${e==="shopper"?"active":""}`,onClick:()=>R("shopper"),children:[i.jsx("span",{className:"type-item__icon","aria-hidden":!0,children:i.jsx(Bl,{size:22,strokeWidth:2})}),i.jsx("span",{className:"type-item__label",children:"متسوق"})]}),i.jsxs("button",{type:"button",role:"tab","aria-selected":e==="merchant",className:`type-item ${e==="merchant"?"active":""}`,onClick:()=>R("merchant"),children:[i.jsx("span",{className:"type-item__icon","aria-hidden":!0,children:i.jsx(zt,{size:22,strokeWidth:2})}),i.jsx("span",{className:"type-item__label",children:"تاجر"})]})]}),F&&i.jsx("p",{style:{color:"#c62828",fontSize:"0.85rem",marginBottom:"12px",fontWeight:700},children:F}),i.jsxs("form",{onSubmit:X,children:[i.jsx(wt,{icon:i.jsx(Bl,{size:18}),placeholder:"اسم المستخدم",value:o,onChange:T=>l(T.target.value),required:!0}),i.jsxs("div",{className:"auth-password-field",children:[i.jsx(wt,{icon:i.jsx(iy,{size:18,strokeWidth:2}),type:n?"text":"password",placeholder:"كلمة المرور",value:d,onChange:T=>h(T.target.value),required:!0}),i.jsx("button",{type:"button",className:"auth-password-eye-btn",onClick:()=>a(!n),"aria-label":n?"إخفاء كلمة المرور":"إظهار كلمة المرور",title:n?"إخفاء":"إظهار",children:n?i.jsx($x,{size:18,strokeWidth:2,"aria-hidden":!0}):i.jsx(qx,{size:18,strokeWidth:2,"aria-hidden":!0})})]}),e==="merchant"&&i.jsxs(i.Fragment,{children:[i.jsx(wt,{icon:i.jsx(zt,{size:18}),placeholder:"اسم المتجر",value:u,onChange:T=>f(T.target.value),required:!0}),i.jsxs("div",{style:{marginBottom:10,textAlign:"right",display:"flex",alignItems:"center",gap:8,fontWeight:800,fontSize:"0.9rem",justifyContent:"flex-end"},children:[i.jsx($t,{size:18,"aria-hidden":!0}),"عنوان / موقع المتجر (نص تفصيلي)"]}),i.jsx("textarea",{value:b,onChange:T=>z(T.target.value),placeholder:"مثال: غزة — الرمال، بجوار… / شارع… (يُعرض للمتسوّقين بجانب وصف المتجر؛ منفصل عن النقطة على الخريطة)",required:!0,rows:3,style:{width:"100%",padding:"0.85rem 1rem",borderRadius:"var(--radius-md)",border:"1.5px solid var(--border)",background:"var(--surface)",marginBottom:"1.2rem",fontFamily:"inherit",fontSize:"0.95rem",resize:"vertical"}}),i.jsxs("div",{className:"register-merchant-map",children:[i.jsxs("div",{className:"register-merchant-map__head",children:[i.jsx($t,{size:18,"aria-hidden":!0}),i.jsx("span",{className:"register-merchant-map__title",children:"موقع المتجر على الخريطة"}),i.jsx("span",{className:"register-merchant-map__optional",children:"اختياري"})]}),i.jsx("p",{className:"register-merchant-map__hint",children:"انقر على الخريطة لوضع دبوس المتجر، أو استخدم «موقعي الحالي»، أو تجاوز الخطوة وحدّث الموقع لاحقاً من إعدادات المتجر."}),i.jsxs("div",{className:"register-merchant-map__toolbar",children:[i.jsx("button",{type:"button",className:"register-merchant-map__mini-btn",disabled:j,onClick:te,children:j?"جاري الموقع…":"موقعي الحالي"}),C?i.jsx("button",{type:"button",className:"register-merchant-map__mini-btn register-merchant-map__mini-btn--ghost",onClick:()=>N(null),children:"إزالة النقطة"}):null,C?i.jsxs("span",{className:"register-merchant-map__coords",dir:"ltr",children:[C[0].toFixed(5)," ، ",C[1].toFixed(5)]}):null]}),i.jsxs("div",{className:"register-merchant-map__frame",children:[i.jsx("button",{type:"button",className:"register-merchant-map__expand-fab",onClick:()=>S(!0),"aria-label":"توسيع الخريطة",title:"توسيع الخريطة",children:"توسيع"}),i.jsxs(oi,{center:J,zoom:14,minZoom:10,maxZoom:19,scrollWheelZoom:!0,style:{height:"clamp(220px, 48dvh, 360px)",width:"100%"},children:[i.jsx(si,{}),i.jsx(li,{}),i.jsx(Ao,{position:C}),i.jsx(da,{onPick:(T,Z)=>N([T,Z])}),C?i.jsx(qn,{position:C,children:i.jsx(Vn,{children:"موقع المتجر المقترح"})}):null]})]})]}),i.jsx("div",{style:{marginBottom:4,textAlign:"right",fontWeight:700,fontSize:"0.9rem"},children:"نوع المتجر (القسم)"}),i.jsxs("select",{"aria-label":"نوع المتجر",value:y,onChange:T=>x(T.target.value),style:G,required:!0,disabled:O,children:[i.jsx("option",{value:"",children:"— اختر القسم —"}),b4.map(T=>i.jsx("option",{value:T,children:T==="__CLOTHES__"?"ملابس":T},T))]}),y==="__CLOTHES__"&&i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{marginBottom:4,textAlign:"right",fontWeight:700,fontSize:"0.9rem"},children:"نوع الملابس"}),i.jsx("select",{"aria-label":"نوع الملابس",value:v,onChange:T=>_(T.target.value),style:G,children:_4.map(T=>i.jsx("option",{value:T.value,children:T.label},T.value))})]}),O?i.jsx("p",{style:{fontSize:"0.85rem",color:"var(--text-secondary)",textAlign:"right"},children:"جاري تحميل الأقسام..."}):null]}),i.jsx(St,{type:"submit",loading:D,style:{width:"100%",marginTop:"10px"},children:"سجل الآن"}),i.jsxs("div",{className:"flex-center",style:{margin:"15px 0"},children:[i.jsx("div",{style:{flex:1,height:"1px",background:"#eee"}}),i.jsx("span",{style:{padding:"0 10px",color:"#999",fontSize:"0.8rem"},children:"أو"}),i.jsx("div",{style:{flex:1,height:"1px",background:"#eee"}})]}),i.jsx(St,{variant:"secondary",type:"button",onClick:H,style:{width:"100%"},children:"تصفح كزائر"})]}),i.jsxs("p",{className:"auth-footer-link",children:["لديك حساب بالفعل؟ ",i.jsx(me,{to:"/login",children:"تسجيل الدخول"})]})]}),w?i.jsx("div",{role:"dialog","aria-modal":"true","aria-label":"تحديد موقع المتجر على الخريطة",className:"register-map-modal-backdrop",onClick:()=>S(!1),children:i.jsxs("div",{className:"register-map-modal",onClick:T=>T.stopPropagation(),children:[i.jsxs("div",{className:"register-map-modal__bar",children:[i.jsx("button",{type:"button",className:"register-map-modal__btn register-map-modal__btn--primary",onClick:()=>S(!1),children:"تم"}),i.jsx("button",{type:"button",className:"register-map-modal__btn register-map-modal__btn--ghost",disabled:j,onClick:te,children:j?"…":"موقعي"}),i.jsx("button",{type:"button",className:"register-map-modal__btn register-map-modal__btn--close",onClick:()=>S(!1),"aria-label":"إغلاق",children:"×"})]}),i.jsx("div",{className:"register-map-modal__map",children:i.jsxs(oi,{center:J,zoom:15,minZoom:10,maxZoom:19,scrollWheelZoom:!0,style:{height:"100%",width:"100%"},children:[i.jsx(si,{}),i.jsx(li,{}),i.jsx(Ao,{position:C,zoom:16}),i.jsx(da,{onPick:(T,Z)=>N([T,Z])}),C?i.jsx(qn,{position:C,children:i.jsx(Vn,{children:"موقع المتجر"})}):null]})})]})}):null,i.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .register-merchant-map {
            margin-bottom: 1.25rem;
            padding: 12px 12px 14px;
            border-radius: 16px;
            border: 1.5px solid rgba(232, 230, 224, 0.95);
            background: linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(255,252,238,0.35) 100%);
            box-shadow: 0 6px 20px rgba(26, 29, 38, 0.05);
          }
          .register-merchant-map__head {
            display: flex;
            align-items: center;
            gap: 8px;
            flex-wrap: wrap;
            margin-bottom: 8px;
            font-weight: 900;
            color: var(--secondary);
            font-size: 0.92rem;
          }
          .register-merchant-map__title { flex: 1; min-width: 0; text-align: right; }
          .register-merchant-map__optional {
            font-size: 0.78rem;
            font-weight: 800;
            padding: 3px 10px;
            border-radius: 999px;
            background: rgba(245, 192, 0, 0.22);
            color: var(--secondary);
            border: 1px solid rgba(245, 192, 0, 0.4);
          }
          .register-merchant-map__hint {
            margin: 0 0 10px;
            font-size: 0.84rem;
            line-height: 1.55;
            color: var(--text-secondary);
            text-align: right;
          }
          .register-merchant-map__toolbar {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 8px;
            margin-bottom: 10px;
          }
          .register-merchant-map__mini-btn {
            appearance: none;
            border: 1.5px solid rgba(232, 230, 224, 0.95);
            background: var(--white);
            color: var(--secondary);
            font-family: inherit;
            font-weight: 800;
            font-size: 0.82rem;
            padding: 8px 12px;
            border-radius: 999px;
            cursor: pointer;
            transition: border-color 0.15s ease, box-shadow 0.15s ease;
          }
          .register-merchant-map__mini-btn:hover:not(:disabled) {
            border-color: rgba(245, 192, 0, 0.55);
            box-shadow: var(--shadow-sm);
          }
          .register-merchant-map__mini-btn:disabled { opacity: 0.65; cursor: wait; }
          .register-merchant-map__mini-btn--ghost {
            background: transparent;
            border-style: dashed;
          }
          .register-merchant-map__coords {
            font-size: 0.8rem;
            font-weight: 800;
            color: var(--text-secondary);
            margin-inline-start: auto;
          }
          .register-merchant-map__frame {
            position: relative;
            border-radius: 14px;
            overflow: hidden;
            border: 1px solid rgba(232, 230, 224, 0.9);
          }
          .register-merchant-map__expand-fab {
            position: absolute;
            top: 10px;
            inset-inline-start: 10px;
            z-index: 500;
            pointer-events: auto;
            appearance: none;
            border: 1px solid rgba(245, 192, 0, 0.5);
            background: linear-gradient(145deg, var(--primary) 0%, var(--primary-hover) 100%);
            color: var(--secondary);
            font-family: inherit;
            font-weight: 900;
            font-size: 0.78rem;
            padding: 7px 12px;
            border-radius: 999px;
            cursor: pointer;
            box-shadow: var(--shadow-gold);
          }
          .register-merchant-map__expand-fab:hover {
            filter: brightness(1.03);
          }
          .register-map-modal-backdrop {
            position: fixed;
            inset: 0;
            z-index: 6000;
            background: rgba(14, 16, 20, 0.58);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 12px;
          }
          .register-map-modal {
            position: relative;
            width: min(560px, 100%);
            height: min(88dvh, calc(100dvh - 48px));
            background: var(--white);
            border-radius: 22px;
            overflow: hidden;
            border: 1px solid rgba(232, 230, 224, 0.95);
            box-shadow: 0 24px 60px rgba(26, 29, 38, 0.2);
            display: flex;
            flex-direction: column;
          }
          .register-map-modal__bar {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 10px 12px;
            border-bottom: 1px solid rgba(232, 230, 224, 0.9);
            background: linear-gradient(180deg, #fff 0%, #fffef8 100%);
            flex-shrink: 0;
          }
          .register-map-modal__btn {
            appearance: none;
            font-family: inherit;
            font-weight: 900;
            font-size: 0.86rem;
            padding: 9px 14px;
            border-radius: 999px;
            cursor: pointer;
            border: 1.5px solid transparent;
          }
          .register-map-modal__btn--primary {
            border-color: rgba(245, 192, 0, 0.55);
            background: linear-gradient(145deg, var(--primary) 0%, var(--primary-hover) 100%);
            color: var(--secondary);
            box-shadow: var(--shadow-gold);
          }
          .register-map-modal__btn--ghost {
            border-color: var(--border);
            background: var(--white);
            color: var(--secondary);
          }
          .register-map-modal__btn--close {
            margin-inline-start: auto;
            width: 40px;
            height: 40px;
            padding: 0;
            border-radius: 12px;
            border: 1px solid var(--border);
            background: var(--surface);
            font-size: 1.35rem;
            line-height: 1;
            color: var(--secondary);
          }
          .register-map-modal__map {
            flex: 1;
            min-height: 0;
            position: relative;
          }
        `}})]})})};function jt({images:e=[],alt:t="",className:n="",height:a=200,borderRadius:o=12,fill:l=!1}){const d=(Array.isArray(e)?e:[]).filter(Boolean),[h,u]=m.useState(0),f=d.length;m.useEffect(()=>{u(b=>f===0?0:Math.min(b,f-1))},[f]);const y=m.useCallback(b=>{f<=1||u(z=>(z+b+f)%f)},[f]);if(f===0)return null;const x={position:"relative",width:l?"100%":void 0,height:l?"100%":a,minHeight:l?0:void 0,borderRadius:o,overflow:"hidden",background:"var(--grey-light, #eee)"},v={width:"100%",height:"100%",objectFit:"cover",display:"block"},_={position:"absolute",top:"50%",transform:"translateY(-50%)",zIndex:2,border:"none",borderRadius:"50%",width:36,height:36,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",background:"rgba(255,255,255,0.92)",color:"var(--secondary)",boxShadow:"0 2px 8px rgba(0,0,0,0.12)"};return i.jsxs("div",{className:`radar-image-carousel ${n||""}`.trim(),style:x,children:[i.jsx("img",{src:d[h],alt:t,style:v}),f>1?i.jsxs(i.Fragment,{children:[i.jsx("button",{type:"button",style:{..._,insetInlineEnd:8},onClick:()=>y(1),"aria-label":"الصورة التالية",children:i.jsx(ep,{size:22,strokeWidth:2.4})}),i.jsx("button",{type:"button",style:{..._,insetInlineStart:8},onClick:()=>y(-1),"aria-label":"الصورة السابقة",children:i.jsx(Fu,{size:22,strokeWidth:2.4})}),i.jsx("div",{style:{position:"absolute",bottom:8,left:0,right:0,display:"flex",justifyContent:"center",gap:6,zIndex:2},children:d.map((b,z)=>i.jsx("button",{type:"button","aria-label":`صورة ${z+1} من ${f}`,onClick:()=>u(z),style:{width:z===h?22:8,height:8,borderRadius:4,border:"none",padding:0,cursor:"pointer",background:z===h?"var(--primary)":"rgba(255,255,255,0.75)",transition:"width 0.15s ease"}},z))})]}):null]})}function Ie(e){return e?Array.isArray(e.images)&&e.images.length>0?e.images.filter(Boolean):e.image?[e.image]:[]:[]}function Gf(e){return e?Array.isArray(e.line_images)&&e.line_images.length>0?e.line_images.filter(Boolean):Ie(e.product_details):[]}function Io(e){if(!e||typeof e!="object")return!1;for(let t=0;t<7;t++){const n=e[String(t)]??e[t];if(Array.isArray(n))for(const a of n){if(!a||typeof a!="object")continue;const o=String(a.start??"").trim(),l=String(a.end??"").trim();if(o&&l)return!0}}return!1}function xc(){if(!localStorage.getItem("token")||localStorage.getItem("isGuest")==="true")return!1;const e=localStorage.getItem("user_type")||"shopper";return e==="shopper"||e==="merchant"||e==="admin"}function Ed(e,t){const a=f=>f*Math.PI/180,o=a(t[0]-e[0]),l=a(t[1]-e[1]),d=a(e[0]),h=a(t[0]),u=Math.sin(o/2)**2+Math.cos(d)*Math.cos(h)*Math.sin(l/2)**2;return 2*6371*Math.asin(Math.sqrt(u))}function Zs(e){const t=Number(e.latitude),n=Number(e.longitude);return!(!Number.isFinite(t)||!Number.isFinite(n)||Math.abs(t)<.25&&Math.abs(n)<.25)}function k4(e){try{const t=new URLSearchParams(e).get("category");if(t==null||t==="")return null;const n=Number(t);return Number.isFinite(n)?n:null}catch{return null}}function Kf(e){try{return new URLSearchParams(e).get("filter")==="community"?"community":"stores"}catch{return"stores"}}function S4(e){try{const t=new URLSearchParams(e).get("cc");if(t==null||t==="")return null;const n=Number(t);return Number.isFinite(n)?n:null}catch{return null}}function N4(e){return(e||"").trim().toLowerCase().replace(/[أإآٱ]/g,"ا").replace(/ى/g,"ي").replace(/ة/g,"ه").replace(/ؤ/g,"و").replace(/ئ/g,"ي").replace(/\s+/g," ")}const C4=[{re:/مسجد|جامع|مصلى|mosque|islamic center/i,Icon:Sw,tone:"#1b5e20"},{re:/كنيس|كنيسة|church|christian/i,Icon:ow,tone:"#3949ab"},{re:/جمعيه خيريه|جمعية خيرية|خيريه|خيرية|تطوع|ngo|charity|تكافل|أيتام/i,Icon:xw,tone:"#c2185b"},{re:/مدرسه|مدرسة|روضه|روضة|حضانه|حضانة|ابتدائ|اعداد|إعداد|ثانوي|school|kindergarten/i,Icon:Iw,tone:"#283593"},{re:/جامعه|جامعة|university|كليه|كلية/i,Icon:ey,tone:"#4527a0"},{re:/محام|قانون|legal|شرعي|عدل|نوتر|محكمه|محكمة|lawyer/i,Icon:Aw,tone:"#37474f"},{re:/بلديه|بلدية|حكوم|وزاره|وزارة|دائرة|مركز خدمات|بلدي|municipal/i,Icon:Du,tone:"#455a64"},{re:/بنك|مصرف|صراف|مالي|bank|atm|تحويلات ماليه|تحويلات مالية/i,Icon:Du,tone:"#1565c0"},{re:/فندق|نزل|hotel|hostel|ضيافه|ضيافة/i,Icon:vw,tone:"#6a1b9a"},{re:/عقار|عقارات|وساطه|وساطة|real\s*estate|أراضي|املاك|أملاك/i,Icon:nw,tone:"#5d4037"},{re:/اسنان|أسنان|تقويم|مخدر|تجميل اسنان|dentist|dental|orthodont/i,Icon:Ow,tone:"#00897b"},{re:/بيطر|بيطريه|بيطرية|عياده بيط|عيادة بيط|حيوانات اهليه|حيوانات أهلية|veterinar/i,Icon:Uu,tone:"#795548"},{re:/صيدل|دواء|pharm|روشته|روشتة|dispensary|صيدليات/i,Icon:Ux,tone:"#c62828"},{re:/عياده|عيادة|طبيب|دكتور|مستشفى|مستوصف|تحاليل طب|مختبر طب|طوارئ طب|clinic|emergency|ممرض/i,Icon:yw,tone:"#c62828"},{re:/اسعاف|إسعاف|هيئه اسعاف|هيئة إسعاف|paramedic/i,Icon:dy,tone:"#ad1457"},{re:/خضار|فواكه|فاكهه|فاكهة|خضروات|greengrocer|produce|فواكه وخضار/i,Icon:$u,tone:"#2e7d32"},{re:/سمك|اسماك|أسماك|بحري|ماكولات بحر|مأكولات بحر|seafood|fish shop|fish store/i,Icon:Gx,tone:"#0277bd"},{re:/لحوم|جزاره|جزارة|جزار|لحم|butcher|لحام|لحوم حمراء/i,Icon:Ox,tone:"#6d4c41"},{re:/دواجن|دجاج|فراخ|ديك رومي|poultry|دواجن طازجه|دواجن طازجة/i,Icon:hw,tone:"#e65100"},{re:/البان|ألبان|اجبان|أجبان|حليب|جبن|dairy|cheese|البان واجبان|ألبان وأجبان/i,Icon:sy,tone:"#5d4037"},{re:/مكسرات|مكسره|مكسرة|فستق|لوز|سكب|كاجو|nuts/i,Icon:Nw,tone:"#795548"},{re:/قمح|حبوب|اعلاف|أعلاف|علف|wheat|grain|مطحنه|مطحنة/i,Icon:Zw,tone:"#f9a825"},{re:/وقود|بنزين|ديزل|محطه وقود|محطة وقود|fuel|petrol|بترول|غاز سيارات/i,Icon:mw,tone:"#263238"},{re:/طاقه\s*شمسيه|طاقة\s*شمسية|الطاقة\s*الشمسية|مولدات\s*و|مولدات.*شمس|شمس.*مولد|بانل\s*شمس|انفرتر|solar|photovoltaic|pv\s*panel/i,Icon:uy,tone:"#f57c00"},{re:/اطارات|إطارات|بنشري|بنشر|اطار|إطار|tyre|tire|patch/i,Icon:Bu,tone:"#37474f"},{re:/غسيل|مغسله|مغسلة|كوي|تنظيف جاف|laundry|dry\s*clean|مكوايه|مكواية/i,Icon:Hx,tone:"#0277bd"},{re:/طباعه|طباعة|مطبعه|مطبعة|نسخ|print|copy\s*center/i,Icon:Ew,tone:"#424242"},{re:/ارجيله|أرجيلة|معسل|شيشه|شيشة|hookah|narghile/i,Icon:Kx,tone:"#bf360c"},{re:/عصير|عصائر|مشروبات غاز|برتقال طرش|soft\s*drinks|مشروبات بارده|مشروبات باردة/i,Icon:dw,tone:"#ef6c00"},{re:/ايس كريم|آيس كريم|بوظه|بوظة|ايس|آيس|ice\s*cream|جلاطي|gelato/i,Icon:bw,tone:"#ec407a"},{re:/مفاتيح|اقفال|أقفال|اقفل|أقفل|locksmith|key\s*mak/i,Icon:ww,tone:"#5d4037"},{re:/مطعم|مأكول|اكل|أكل|restaurant|مشويات|سفره|سفرة|وجبات|فاست فود|fast\s*food|برجر|بيتزا|شاورما|فلافل|كنفه|ارز|أرز بال|بوفيه مفتوح|مندي|كبسه|كبسة|مطاعم/i,Icon:py,tone:"#e65100"},{re:/كافيه|كافي|قهوه|قهوة|cafe|coffee|مقهى|قهوجي/i,Icon:Wx,tone:"#5d4037"},{re:/مخبز|حلو|حلويات|معجن|ساندوتش|سندوتش|كيك|كعك|معكروت|مخبوزات|pastry|donut|دونات/i,Icon:lw,tone:"#f9a825"},{re:/سوبر|هايبر|ماركت|بقاله|بقالة|تموين|اقتصادي|grocery|minimarket|ماركت صغير/i,Icon:Jn,tone:"#2e7d32"},{re:/اقمشه|أقمشة|قماش|مزاين|خياط|خياطه|خياطة|تفصيل|زي موحد/i,Icon:Hu,tone:"#ad1457"},{re:/ملابس|أزياء|موضه|موضة|نسائي|رجالي|احذيه|أحذيه|أحذية|حقائب|جلديات|عبايه|عباية|فاشن|fashion|boutique/i,Icon:Hu,tone:"#ad1457"},{re:/لابتوب|كمبيوتر مكتبي|كمبيوتر|حاسوب|كمبيتور|لاب توب|pc|gaming\s*pc|كمبيوترات/i,Icon:ny,tone:"#00695c"},{re:/موبايل|موبيل|هاتف|اتصالات|اتصال|جوال|mobile|phone|smartphone|شاحن|كابلات/i,Icon:jf,tone:"#00695c"},{re:/واي فاي|wifi|انترنت|إنترنت|net|راوتر/i,Icon:jf,tone:"#0277bd"},{re:/كتب|قرطاس|مكتبه|مكتبة|ادوات كتابيه|أدوات كتابية|دفتر|أقلام|stationery/i,Icon:Bx,tone:"#3949ab"},{re:/عطور|تجميل|مكياج|اظافر|أظافر|صالون|حلاق|حلاقه|حلاقة|barber|كوافير|cosmetic|beauty/i,Icon:yn,tone:"#d81b60"},{re:/ذهب|مجوهر|مجوهرات|فضه|فضة|ساعه يد|ساعة يد|watch\s*shop/i,Icon:Jx,tone:"#fbc02d"},{re:/زهور|ورود|نبات|حديقه|حديقة|مزهريه|مزهرية|flower|ورده|وردة/i,Icon:Qx,tone:"#2e7d32"},{re:/رياضه|رياضة|sport|لياقه|لياقة|جيم|صاله رياضيه|صالة رياضية|protein|مكملات غذائيه|مكملات غذائية/i,Icon:Zx,tone:"#ef6c00"},{re:/العاب|ألعاب|toys|playstation|دمى|دميه|دمية|games/i,Icon:Yx,tone:"#7b1fa2"},{re:/حيوان|اليف|أليف|pet|قطه|قطة|كلب|بيطر|veterinar|عياده بيطريه|عيادة بيطرية/i,Icon:Uu,tone:"#795548"},{re:/اثاث|أثاث|مفروشات|سجاد|كنب|ديكور|اناره|إنارة|مفروش|furniture|lamps|اضاءه|إضاءة/i,Icon:sa,tone:"#5d4037"},{re:/دهان|طلاء|بويه|بوية|دهانات|paint\s*shop|الوان|ألوان/i,Icon:Cw,tone:"#8e24aa"},{re:/بناء|مقاول|انشاءات|إنشاءات|مقاولين|خرسان|هندسه|هندسة معمار|هندسة معماري/i,Icon:gw,tone:"#5d4037"},{re:/نجار|نجاره|نجارة|الخشب|الومنيوم زجاج|ألمنيوم|حداد|حداده|حدادة|حدادين|خشبيات/i,Icon:ty,tone:"#6d4c41"},{re:/كهرباء|سباك|سباكه|سباكة|تكييف|صيانه|صيانة|لحام|صيانة عامه|صيانة عامة|أدوات صناعيه|أدوات صناعية|عده|عدة/i,Icon:$w,tone:"#607d8b"},{re:/سفريات|سياحه|سياحة|travel|طيران محلي|wings tour/i,Icon:Pw,tone:"#0277bd"},{re:/شحن|توصيل|نقل بضائع|delivery|لوجست|logistics|ديلفري/i,Icon:Dw,tone:"#33691e"},{re:/هديا|هدايا|ورود و هدايا|gift/i,Icon:Xx,tone:"#d84315"},{re:/تصوير|فوتو|استوديو|photo|كاميرا/i,Icon:rw,tone:"#ad1457"},{re:/نظارات|بصريات|optical|عدسات لاصقه|عدسات لاصقة/i,Icon:fw,tone:"#3f51b5"},{re:/دراجه|دراجة|سيكل|bike|bicycle/i,Icon:X_,tone:"#006064"},{re:/سيارات|ورشه|ورشة|ميكانيك|كراج|غسيل سيارات|car\s*wash|ورشه سيارات|ورشة سيارات/i,Icon:Bu,tone:"#37474f"},{re:/مشتل|مشاتل|زراعه|زراعة|تربه|تربة|مزارع|agricultur|مبيدات زراعيه|مبيدات زراعية/i,Icon:$u,tone:"#558b2f"}],Qf={medical:{Icon:dy,tone:"#c62828"},education:{Icon:ey,tone:"#4527a0"},food:{Icon:Bw,tone:"#e65100"},water:{Icon:Hx,tone:"#0277bd"},institution:{Icon:Du,tone:"#5d4037"}},Yf={mini_mall:{Icon:Hw,tone:"#6a1b9a"},supermarket:{Icon:Jn,tone:"#2e7d32"},greengrocer:{Icon:$u,tone:"#43a047"},butcher:{Icon:Ox,tone:"#c62828"},fish:{Icon:Gx,tone:"#0277bd"},dairy:{Icon:sy,tone:"#5c6bc0"},bakery:{Icon:cw,tone:"#ef6c00"},sweets:{Icon:iw,tone:"#ad1457"},spices:{Icon:Kx,tone:"#e65100"},restaurant:{Icon:py,tone:"#d84315"},cafe:{Icon:Wx,tone:"#4e342e"},coworking:{Icon:ew,tone:"#455a64"},solar_generators:{Icon:uy,tone:"#f57c00"},pharmacy:{Icon:Ux,tone:"#1565c0"},cosmetics:{Icon:yn,tone:"#ec407a"},shoes:{Icon:pw,tone:"#6d4c41"},clothing:{Icon:Ol,tone:"#3949ab"},clothing_women:{Icon:Tw,tone:"#c2185b"},clothing_men:{Icon:Hu,tone:"#283593"},clothing_kids:{Icon:Y_,tone:"#ef6c00"},electronics:{Icon:ny,tone:"#1e88e5"},electric_tools:{Icon:Lw,tone:"#607d8b"},household:{Icon:sa,tone:"#7e57c2"},furniture:{Icon:K_,tone:"#8d6e63"},hardware:{Icon:ty,tone:"#78909c"},books:{Icon:Bx,tone:"#5e35b1"},toys:{Icon:Yx,tone:"#f9a825"},sports:{Icon:Zx,tone:"#00897b"},pets:{Icon:Uu,tone:"#6a1b9a"},jewelry:{Icon:Jx,tone:"#ffd54f"},auto:{Icon:Bu,tone:"#37474f"},cleaning:{Icon:tw,tone:"#26a69a"},gifts:{Icon:Xx,tone:"#c2185b"},flowers:{Icon:Qx,tone:"#2e7d32"},generic:{Icon:zt,tone:"#fbc02d"}};function Jf(e,t=null){if(t&&Qf[t])return Qf[t];const n=s1(e);if(n&&Yf[n])return Yf[n];const a=N4(e);if(!a)return{Icon:zt,tone:"var(--secondary)"};for(const o of C4)if(o.re.test(a))return{Icon:o.Icon,tone:o.tone};return{Icon:zt,tone:"var(--secondary)"}}function $s(e){const t=String(e||"");if(!t||t.startsWith("var("))return{background:"rgba(26, 29, 38, 0.06)",borderColor:"rgba(26, 29, 38, 0.12)"};const n=t.replace("#","");if(n.length!==6||!/^[0-9a-fA-F]+$/.test(n))return{background:"var(--primary-light)",borderColor:"rgba(255, 204, 0, 0.35)"};const a=parseInt(n.slice(0,2),16),o=parseInt(n.slice(2,4),16),l=parseInt(n.slice(4,6),16);return{background:`rgba(${a}, ${o}, ${l}, 0.15)`,borderColor:`rgba(${a}, ${o}, ${l}, 0.28)`}}const Md=6,z4=12,P4=8,Li=5*60*1e3,c1=()=>{var is,Wt,fe;const[e,t]=ic(),n=ct(),a=Kt(),{showAlert:o,showPrompt:l,showSelect:d}=Ue(),h=m.useRef(null),u=m.useRef(null),f=m.useRef(null),y=m.useRef(null),{userMapLocation:x,locationFocusNonce:v,setManualMapLocation:_,requestUserLocation:b,locating:z,searchQuery:C,setSearchQuery:N}=Vo(),[w,S]=m.useState(1),[j,E]=m.useState(1),[M,P]=m.useState(()=>typeof window<"u"?window.matchMedia("(max-width: 640px)").matches:!1),[O,I]=m.useState([]),[F,V]=m.useState([]),[D,ae]=m.useState(!0),[oe,Q]=m.useState(!0),[J,W]=m.useState(""),[R,te]=m.useState(null),[G,X]=m.useState(!0),[H,ue]=m.useState(()=>typeof window<"u"?Kf(window.location.search):"stores"),[T,Z]=m.useState(()=>typeof window<"u"?k4(window.location.search):null),[ee,ye]=m.useState(()=>typeof window<"u"?S4(window.location.search):null),[_e,Be]=m.useState([]),[xe,dt]=m.useState(!0),[He,_n]=m.useState({}),[pi,tr]=m.useState([]),[K,pe]=m.useState(!1),[de,ke]=m.useState([]),[Ae,Oe]=m.useState(!0),[Fe,En]=m.useState(null);m.useEffect(()=>{if(typeof window>"u")return;const B=window.matchMedia("(max-width: 640px)"),re=()=>P(B.matches);return re(),typeof B.addEventListener=="function"?B.addEventListener("change",re):B.addListener(re),()=>{typeof B.removeEventListener=="function"?B.removeEventListener("change",re):B.removeListener(re)}},[]);const[Lr,bc]=m.useState(0),[mi,Yo]=m.useState(0),[ba,_c]=m.useState(0),[_a,Jo]=m.useState(0),fi=m.useCallback((B,re,le,ge)=>{if(!B)return()=>{};let Se=0;const Yt=()=>Array.from(B.querySelectorAll(re)),ot=()=>{const vi=Yt();if(le(vi.length),vi.length===0){ge(0);return}const Nc=B.scrollLeft+B.clientWidth/2;let as=0,os=1/0;for(let Rr=0;Rr<vi.length;Rr+=1){const ss=vi[Rr],bi=ss.offsetLeft+ss.offsetWidth/2,ls=Math.abs(bi-Nc);ls<os&&(os=ls,as=Rr)}ge(as)},Ir=()=>{Se||(Se=window.requestAnimationFrame(()=>{Se=0,ot()}))};return ot(),B.addEventListener("scroll",Ir,{passive:!0}),window.addEventListener("resize",ot),()=>{Se&&window.cancelAnimationFrame(Se),B.removeEventListener("scroll",Ir),window.removeEventListener("resize",ot)}},[]);m.useEffect(()=>fi(f.current,".home-exclusive-card",bc,Yo),[fi,H,xe,_e.length]),m.useEffect(()=>fi(y.current,".home-browse-item",_c,Jo),[fi,H,oe,Ae,F.length,de.length]);const Xo=m.useCallback(B=>{B&&typeof B.preventDefault=="function"&&B.preventDefault();const re=C.trim();n(re?`/search?q=${encodeURIComponent(re)}`:"/search")},[n,C]);m.useEffect(()=>{ue(Kf(`?${e.toString()}`));const B=e.get("category");if(B==null||B==="")Z(null);else{const le=Number(B);Z(Number.isFinite(le)?le:null)}const re=e.get("cc");if(re==null||re==="")ye(null);else{const le=Number(re);ye(Number.isFinite(le)?le:null)}},[e]),m.useEffect(()=>{var ge;const B=(ge=a.state)==null?void 0:ge.mapFocus;if(!B)return;const re=Number(B.lat),le=Number(B.lng);!Number.isFinite(re)||!Number.isFinite(le)||(_(re,le),n({pathname:a.pathname,search:a.search},{replace:!0,state:{}}))},[a.state,a.pathname,a.search,n,_]),m.useEffect(()=>{if(H!=="stores"||T==null)return;const B=window.setTimeout(()=>{var re;(re=h.current)==null||re.scrollIntoView({behavior:"smooth",block:"start"})},180);return()=>window.clearTimeout(B)},[H,T]);const[gi,wa]=m.useState(()=>Math.floor(Date.now()/Li));m.useEffect(()=>{let B=0,re=0;return(()=>{const ge=Date.now(),Se=(Math.floor(ge/Li)+1)*Li,Yt=Math.max(250,Se-ge+50);B=window.setTimeout(()=>{wa(Math.floor(Date.now()/Li)),re=window.setInterval(()=>{wa(Math.floor(Date.now()/Li))},Li)},Yt)})(),()=>{B&&window.clearTimeout(B),re&&window.clearInterval(re)}},[]);const Er=m.useMemo(()=>{const B=Array.isArray(_e)?_e:[],re=B.length;if(re<=1)return B;const le=(gi%re+re)%re;return le===0?B:[...B.slice(le),...B.slice(0,le)]},[_e,gi]);m.useEffect(()=>{S(1)},[H,T]),m.useEffect(()=>{E(1)},[H,T,G]);const Mr=m.useCallback(async()=>{if(H!=="stores"||oe)return;const B=[{id:"__all__",label:"الكل",value:null},...F.map(ge=>({id:String(ge.id),label:ge.name,value:ge.id}))],re=await d("اختر القسم:","تصفية المتاجر",B);if(re==null)return;const le=new URLSearchParams(e);le.delete("filter"),le.delete("cc"),re==="__all__"?le.delete("category"):le.set("category",String(re)),t(le,{replace:!0})},[H,oe,F,d,e,t]),wc=m.useCallback(async()=>{if(H!=="community"||Ae)return;const B=[{id:"__all__",label:"الكل",value:null},...de.map(ge=>({id:String(ge.id),label:ge.name,value:ge.id}))],re=await d("اختر القسم:","تصفية الخدمات",B);if(re==null)return;const le=new URLSearchParams(e);le.set("filter","community"),le.delete("category"),re==="__all__"?le.delete("cc"):le.set("cc",String(re)),t(le,{replace:!0})},[H,Ae,de,d,e,t]);m.useEffect(()=>{let B=!1;return(async()=>{try{const re=await ya();B||ke(Array.isArray(re)?re:[])}catch(re){console.error(re),B||ke([])}finally{B||Oe(!1)}})(),()=>{B=!0}},[]),m.useEffect(()=>{let B=!1;return(async()=>{try{const re=await ui();B||V(Array.isArray(re)?re:[])}catch(re){console.error(re),B||V([])}finally{B||Q(!1)}})(),()=>{B=!0}},[]),m.useEffect(()=>{let B=!1;return(async()=>{try{B||dt(!0);const le=await qy(H==="stores"?T:null);B||Be(Array.isArray(le)?le:[])}catch(re){console.error(re),B||Be([])}finally{B||dt(!1)}})(),()=>{B=!0}},[H,T]),m.useEffect(()=>{let B=!1;const re=H==="community";return(async()=>{re&&(B||pe(!0));try{const le=re&&ee!=null?ee:null,ge=await hc(le);B||tr(Array.isArray(ge)?ge:[])}catch(le){console.error(le),B||tr([])}finally{!B&&re&&pe(!1)}})(),()=>{B=!0,pe(!1)}},[H,ee]),m.useEffect(()=>{let B=!1;return(async()=>{var le;try{ae(!0),W("");let ge,Se,Yt=null;(x==null?void 0:x.length)===2?(ge=x[0],Se=x[1],Yt=[ge,Se],B||te(Yt)):(ge=31.5,Se=34.4,Yt=null,B||te(null));const ot=await pc(ge,Se),Ir=Array.isArray(ot)?ot:(ot==null?void 0:ot.results)||[];B||I(Ir)}catch(ge){if(console.error("Error fetching stores:",ge),!B){const Se=(le=ge.response)==null?void 0:le.status;ge.response?Se>=500?W("الخادم أرجع خطأ أثناء تحميل المتاجر. راجع نافذة تشغيل Django أو أعد تشغيل السيرفر."):W(`تعذر تحميل المتاجر (رمز ${Se}). جرّب مرة أخرى.`):W("تعذر الاتصال بالخادم. من مجلد backend شغّل: python manage.py runserver ثم حدّث الصفحة (الواجهة على المنفذ 3000).")}}finally{B||ae(!1)}})(),()=>{B=!0}},[x]);const es=m.useMemo(()=>H!=="stores"?[]:(O||[]).filter(B=>!(T!=null&&(B.category==null||Number(B.category)!==Number(T)))),[O,H,T]),xi=m.useMemo(()=>es.filter(B=>{const re=Zs(B);return G?re:!0}),[es,G]),Tr=m.useMemo(()=>{if(!R)return xi;const B=R;return[...xi].sort((re,le)=>{const ge=[Number(re.latitude),Number(re.longitude)],Se=[Number(le.latitude),Number(le.longitude)];if(!Zs(re))return 1;if(!Zs(le))return-1;const Yt=Ed(B,ge),ot=Ed(B,Se);return Yt-ot})},[xi,R]),Ar=Math.max(1,Math.ceil(Er.length/Md)),ts=Math.min(w,Ar);m.useMemo(()=>{const B=(ts-1)*Md;return Er.slice(B,B+Md)},[Er,ts]),m.useEffect(()=>{w>Ar&&S(Ar)},[w,Ar]);const yi=M?P4:z4,Qt=Math.max(1,Math.ceil(Tr.length/yi)),Mn=Math.min(j,Qt),jc=m.useMemo(()=>{const B=(Mn-1)*yi;return Tr.slice(B,B+yi)},[Tr,Mn,yi]);m.useEffect(()=>{j>Qt&&E(Qt)},[j,Qt]);const ns=localStorage.getItem("isGuest")==="true",Tn=!!localStorage.getItem("token")&&!ns&&localStorage.getItem("user_type")==="merchant",rs=!!localStorage.getItem("token")&&!ns&&localStorage.getItem("user_type")==="shopper";m.useEffect(()=>{if(H!=="community"||Tn)return;const B=window.setTimeout(()=>{var re;(re=u.current)==null||re.scrollIntoView({behavior:"smooth",block:"nearest"})},200);return()=>window.clearTimeout(B)},[H,ee,Tn]),m.useEffect(()=>{if(!rs){_n({});return}let B=!1;return(async()=>{try{const re=await To();if(B)return;const le={};for(const ge of re||[])(ge.product==null||ge.product==="")&&ge.sponsored_ad!=null&&(le[ge.sponsored_ad]=ge.id);_n(le)}catch{B||_n({})}})(),()=>{B=!0}},[rs]);const kc=()=>{const B=new URLSearchParams(e);B.delete("filter"),B.delete("cc"),t(B,{replace:!0})},Sc=()=>{const B=new URLSearchParams(e);B.set("filter","community"),B.delete("category"),t(B,{replace:!0})};return i.jsx(Ce,{children:i.jsxs("div",{className:"home-container",children:[Tn?i.jsxs("div",{className:"card",role:"status",style:{marginBottom:18,padding:"14px 16px",display:"flex",alignItems:"flex-start",gap:14,background:"linear-gradient(135deg, rgba(245, 192, 0, 0.15) 0%, var(--surface) 55%)",border:"1.5px solid rgba(245, 192, 0, 0.45)",borderRadius:14},children:[i.jsx("div",{className:"flex-center",style:{flexShrink:0,width:44,height:44,borderRadius:12,background:"var(--primary-light)",color:"var(--secondary)"},children:i.jsx(Xa,{size:24,strokeWidth:2.25})}),i.jsxs("div",{style:{lineHeight:1.65,fontSize:"0.95rem",color:"var(--text-primary)"},children:[i.jsx("strong",{style:{display:"block",marginBottom:6,fontSize:"1rem"},children:"أنت في وضع التاجر على الصفحة الرئيسية"}),"لإدارة متجرك — مثل ",i.jsx("strong",{children:"منتجاتي"}),"، ",i.jsx("strong",{children:"الإعلانات"}),"، ",i.jsx("strong",{children:"الاشتراك"}),"، و",i.jsx("strong",{children:"إعدادات المتجر"}),"— افتح ",i.jsx("strong",{children:"القائمة الجانبية"})," من زر القائمة"," ",i.jsx("span",{style:{whiteSpace:"nowrap"},children:"(☰ أسفل الصفحة)"}),"؛ من هناك تتحكم بكل خيارات المتجر، وليس من روابط المتسوقين في هذه الصفحة."]})]}):null,Tn?null:i.jsxs("section",{className:"home-hero","aria-label":"ترحيب",children:[i.jsx("div",{className:"home-hero-backdrop","aria-hidden":!0}),i.jsxs("div",{className:"home-hero-inner",children:[i.jsxs("div",{className:"home-hero-copy",children:[i.jsx("h1",{className:"home-hero-title",children:"ماذا تبحث عنه اليوم؟"}),i.jsx("p",{className:"home-hero-sub",children:"تصفّح الأقسام، العروض، والمتاجر القريبة — ابحث من مربع البحث أدناه، ثم استخدم الخريطة لمطابقة المواقع."})]}),i.jsx("form",{className:"home-hero-search",onSubmit:Xo,children:i.jsxs("div",{className:"home-hero-search-bar",children:[i.jsx(Mo,{size:20,strokeWidth:1.85,className:"home-hero-search-ico","aria-hidden":!0}),i.jsx("input",{type:"search",className:"home-hero-search-input",placeholder:"ابحث عن متجر أو قسم…",value:C,onChange:B=>N(B.target.value),"aria-label":"بحث في رادار",enterKeyHint:"search"}),i.jsx(me,{to:"/categories",className:"home-hero-filter-btn",title:"الأقسام والتصفية","aria-label":"الأقسام والتصفية",onClick:B=>B.stopPropagation(),children:i.jsx(Rl,{size:20,strokeWidth:1.85,"aria-hidden":!0})}),i.jsx("button",{type:"submit",className:"home-hero-submit-btn","aria-label":"تنفيذ البحث",children:i.jsx(Mo,{size:20,strokeWidth:1.85,"aria-hidden":!0})})]})})]})]}),i.jsx("div",{className:"home-top-grid",children:H==="stores"?i.jsxs("section",{className:"home-top-grid__exclusive home-exclusive","aria-label":"عروض حصرية",children:[i.jsxs("div",{className:"home-exclusive-head",children:[i.jsxs("div",{className:"home-exclusive-head-text",children:[i.jsx("h2",{className:"home-exclusive-title",children:"عروض مميزة من المتاجر"}),i.jsx("p",{className:"home-exclusive-sub",children:"إعلانات ممولة — اضغط البطاقة لفتح المتجر"})]}),i.jsxs(me,{to:"/offers",className:"home-exclusive-more",children:["عرض المزيد",i.jsx(ep,{size:18,"aria-hidden":!0})]})]}),i.jsx("div",{className:"home-exclusive-rail",role:"list",ref:f,children:xe?i.jsx(i.Fragment,{children:Array.from({length:4}).map((B,re)=>i.jsx("div",{className:"home-exclusive-skel","aria-hidden":!0},re))}):Er.length===0?i.jsx("div",{className:"home-exclusive-empty",children:"لا توجد عروض ممولة حالياً."}):Er.slice(0,10).map(B=>{const re=Ie(B)[0]||null;return i.jsxs(me,{to:`/stores/${B.store}`,className:"home-exclusive-card",role:"listitem","aria-label":`${B.title} — ${B.store_name}`,children:[i.jsx("div",{className:"home-exclusive-cover",style:re?{backgroundImage:`url(${re})`}:void 0,"aria-hidden":!0}),i.jsx("span",{className:"home-exclusive-badge",children:"إعلان ممول"}),i.jsxs("div",{className:"home-exclusive-meta",children:[i.jsx("div",{className:"home-exclusive-ad-title",children:B.title}),i.jsx("div",{className:"home-exclusive-store",children:B.store_name})]})]},B.id)})}),Lr>1?i.jsx("div",{className:"scroll-dots","aria-label":"التنقل بين العروض",role:"tablist",children:Array.from({length:Lr}).slice(0,12).map((B,re)=>i.jsx("button",{type:"button",className:`scroll-dot${re===mi?" scroll-dot--active":""}`,"aria-label":`عرض ${re+1}`,"aria-selected":re===mi,onClick:()=>{const le=f.current;if(!le)return;const Se=Array.from(le.querySelectorAll(".home-exclusive-card"))[re];Se&&le.scrollTo({left:Math.max(0,Se.offsetLeft-12),behavior:"smooth"})}},re))}):null]}):null}),i.jsx("div",{className:"home-mode-strip",role:"presentation",children:i.jsxs("div",{className:"home-mode-switch",role:"tablist","aria-label":"تصفح المتاجر أو الخدمات المجتمعية",children:[i.jsxs("button",{type:"button",role:"tab","aria-selected":H==="stores",title:"المتاجر والعروض التجارية",className:`home-mode-btn${H==="stores"?" home-mode-btn--on":""}`,onClick:kc,children:[i.jsx(zt,{size:15,strokeWidth:2.25,"aria-hidden":!0}),i.jsx("span",{children:"متاجر"})]}),i.jsxs("button",{type:"button",role:"tab","aria-selected":H==="community",title:"خدمات مجتمعية على الخريطة",className:`home-mode-btn${H==="community"?" home-mode-btn--on":""}`,onClick:Sc,children:[i.jsx(yn,{size:15,strokeWidth:2.25,"aria-hidden":!0}),i.jsx("span",{children:"مجتمعي"})]})]})}),Tn?null:i.jsxs("section",{className:"home-browse-block","aria-label":"تصفح حسب الفئات",children:[M?i.jsxs("div",{className:"home-browse-head",children:[i.jsx("h2",{className:"home-browse-title",children:"تصفية سريعة"}),i.jsxs("button",{type:"button",className:"home-browse-filterbtn",onClick:H==="stores"?Mr:wc,disabled:H==="stores"?oe:Ae,"aria-label":H==="stores"?"تصفية المتاجر حسب القسم":"تصفية الخدمات حسب القسم",children:[i.jsx(Rl,{size:18,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{className:"home-browse-filterbtn-text",children:H==="stores"?T==null?"كل الأقسام":((is=F.find(B=>Number(B.id)===Number(T)))==null?void 0:is.name)||"القسم":ee==null?"كل الخدمات":((Wt=de.find(B=>Number(B.id)===Number(ee)))==null?void 0:Wt.name)||"الخدمة"})]})]}):i.jsx("h2",{className:"home-browse-title",children:H==="stores"?"تصفح حسب الفئات":"أقسام الخدمات المجتمعية"}),i.jsx("div",{className:"home-browse-scroll",ref:y,children:H==="stores"?i.jsxs(i.Fragment,{children:[i.jsxs("button",{type:"button",className:`home-browse-item home-browse-item--all${T==null?" home-browse-item--active":""}`,onClick:()=>{const B=new URLSearchParams(e);B.delete("category"),B.delete("filter"),B.delete("cc"),t(B,{replace:!0})},children:[i.jsx("span",{className:"home-browse-tile",style:{color:"var(--secondary)",...$s("var(--secondary)")},children:i.jsx(Eo,{size:22,strokeWidth:1.85,"aria-hidden":!0})}),i.jsx("span",{className:"home-browse-label",children:"الكل"})]}),oe?null:F.map(B=>{const{Icon:re,tone:le}=Jf(B.name),ge=$s(le);return i.jsxs("button",{type:"button",className:`home-browse-item${T===B.id?" home-browse-item--active":""}`,onClick:()=>{const Se=new URLSearchParams(e);Se.delete("filter"),Se.delete("cc"),Se.set("category",String(B.id)),t(Se,{replace:!0})},children:[i.jsx("span",{className:"home-browse-tile",style:{color:le,background:ge.background,borderColor:ge.borderColor},children:i.jsx(re,{size:22,strokeWidth:1.85,"aria-hidden":!0})}),i.jsx("span",{className:"home-browse-label",children:B.name})]},B.id)})]}):i.jsxs(i.Fragment,{children:[i.jsxs("button",{type:"button",className:`home-browse-item home-browse-item--all${ee==null?" home-browse-item--active":""}`,onClick:()=>{const B=new URLSearchParams(e);B.set("filter","community"),B.delete("cc"),B.delete("category"),t(B,{replace:!0})},children:[i.jsx("span",{className:"home-browse-tile",style:{color:"var(--secondary)",...$s("var(--secondary)")},children:i.jsx(Eo,{size:22,strokeWidth:1.85,"aria-hidden":!0})}),i.jsx("span",{className:"home-browse-label",children:"الكل"})]}),Ae?null:de.map(B=>{const{Icon:re,tone:le}=Jf(B.name,B.slug),ge=$s(le);return i.jsxs("button",{type:"button",className:`home-browse-item${ee===B.id?" home-browse-item--active":""}`,onClick:()=>{const Se=new URLSearchParams(e);Se.set("filter","community"),Se.set("cc",String(B.id)),Se.delete("category"),t(Se,{replace:!0})},children:[i.jsx("span",{className:"home-browse-tile",style:{color:le,background:ge.background,borderColor:ge.borderColor},children:i.jsx(re,{size:22,strokeWidth:1.85,"aria-hidden":!0})}),i.jsx("span",{className:"home-browse-label",children:B.name})]},B.id)})]})}),ba>1?i.jsx("div",{className:"scroll-dots scroll-dots--browse","aria-label":"التنقل بين الفئات",role:"tablist",children:Array.from({length:ba}).slice(0,14).map((B,re)=>i.jsx("button",{type:"button",className:`scroll-dot${re===_a?" scroll-dot--active":""}`,"aria-label":`فئة ${re+1}`,"aria-selected":re===_a,onClick:()=>{const le=y.current;if(!le)return;const Se=Array.from(le.querySelectorAll(".home-browse-item"))[re];Se&&le.scrollTo({left:Math.max(0,Se.offsetLeft-12),behavior:"smooth"})}},re))}):null,H==="community"?i.jsxs("div",{className:"home-community-below",ref:u,"aria-label":"نقاط الخدمة في القسم المحدد",children:[i.jsx("h3",{className:"home-community-below-title",children:ee!=null?"النقاط في هذا القسم":"كل النقاط المعتمدة"}),K?i.jsx("p",{className:"home-community-below-loading",role:"status",children:"جاري تحميل النقاط…"}):pi.length===0?i.jsx("p",{className:"home-community-below-empty",children:ee!=null?"لا توجد نقاط معتمدة في هذا القسم بعد.":"لا توجد نقاط خدمات مجتمعية معتمدة حالياً."}):i.jsx("ul",{className:"home-community-below-list",children:pi.map(B=>{const re=o4(B),le=(B.detail_description||"").trim(),ge=le.length>160?`${le.slice(0,160).trimEnd()}…`:le;return i.jsxs("li",{className:"home-community-point",children:[i.jsxs("div",{className:"home-community-point-body",children:[i.jsx("span",{className:"home-community-point-cat",children:B.category_name}),i.jsx("div",{className:"home-community-point-title",children:B.title}),B.category_slug==="water"&&B.water_is_potable!=null?i.jsx("span",{className:`home-community-point-chip${B.water_is_potable?" home-community-point-chip--ok":""}`,children:B.water_is_potable?"مياه صالحة للشرب":"مياه غير صالحة للشرب"}):null,B.institution_scope?i.jsx("span",{className:"home-community-point-chip home-community-point-chip--muted",children:B.institution_scope_label||B.institution_scope}):null,ge?i.jsx("p",{className:"home-community-point-desc",children:ge}):null,B.address_text?i.jsx("p",{className:"home-community-point-address",children:B.address_text}):null]}),re?i.jsxs("button",{type:"button",className:"home-community-point-mapbtn",onClick:()=>{const Se=Qo(B);Se&&n("/map",{state:{mapFocus:{lat:Se[0],lng:Se[1],communityPointId:B.id},mapPreset:{mode:"community",cc:B.category??null,q:B.title??""}}})},children:[i.jsx($t,{size:16,strokeWidth:2,"aria-hidden":!0}),"على الخريطة"]}):null]},B.id)})})]}):null]}),i.jsx("div",{className:`ads-section${H==="stores"?" ads-section--panel":""}`,ref:h,children:H==="community"?i.jsx("div",{className:"home-community-ads-footnote card",children:i.jsxs("p",{className:"home-community-ads-footnote-text",children:["لتفاصيل أكثر أو اقتراح نقطة جديدة:"," ",i.jsx(me,{to:"/services",className:"home-community-ads-footnote-link",children:"صفحة الخدمات المجتمعية"})]})}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"nearby-head flex-between",children:[i.jsx("h3",{className:"nearby-title",children:T!=null?`المتاجر القريبة — ${((fe=F.find(B=>Number(B.id)===Number(T)))==null?void 0:fe.name)||"القسم المختار"}`:"المتاجر القريبة"}),i.jsx("div",{className:"nearby-filter-option",children:i.jsxs("label",{className:"nearby-map-toggle",children:[i.jsx("input",{type:"checkbox",className:"nearby-map-toggle-input",checked:G,onChange:B=>X(B.target.checked)}),i.jsx("span",{className:"nearby-map-toggle-track","aria-hidden":!0}),i.jsxs("span",{className:"nearby-map-toggle-copy",children:[i.jsx("span",{className:"nearby-map-toggle-title",children:"المتاجر على الخريطة فقط"}),i.jsx("span",{className:"nearby-map-toggle-hint",children:"مفعّل: تُخفى المحلات بدون نقطة على الخريطة. معطّل: تظهر كل النتائج."})]})]})})]}),D?i.jsx("p",{className:"nearby-loading",children:"جاري تحميل المتاجر..."}):Tr.length>0?i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"nearby-rail",children:jc.map(B=>{const re=gc(B,F),le=R&&Zs(B)?Ed(R,[Number(B.latitude),Number(B.longitude)]):null,ge=Io(B.business_hours_weekly)&&B.is_open_now===!0?"مفتوح":Io(B.business_hours_weekly)&&B.is_open_now===!1?"مغلق":null;return i.jsxs(me,{to:`/stores/${B.id}`,className:"nearby-card",children:[i.jsxs("div",{className:"nearby-card-main",children:[i.jsxs("div",{className:"nearby-card-text",children:[i.jsx("span",{className:"nearby-card-name",children:B.store_name}),B.category_name?i.jsx("span",{className:"nearby-card-cat",children:B.category_name}):null,i.jsx("span",{className:"nearby-card-dist",children:le!=null?i.jsxs(i.Fragment,{children:["📍 ",le.toFixed(1)," كم"]}):i.jsx(i.Fragment,{children:"بدون مسافة"})})]}),ge?i.jsx("span",{className:"nearby-card-status",children:ge}):null]}),i.jsx("div",{className:"nearby-card-thumb",children:re.type==="image"?i.jsx("img",{className:"nearby-card-thumb-img",src:re.url,alt:""}):i.jsx("span",{className:"nearby-card-thumb-emoji",style:{background:re.bg},children:re.emoji})})]},B.id)})}),Qt>1?i.jsxs("div",{className:"home-pagination",role:"navigation","aria-label":"صفحات المتاجر",children:[i.jsx("button",{type:"button",className:"home-pagination-btn",disabled:Mn<=1,onClick:()=>E(B=>Math.max(1,B-1)),children:"السابق"}),i.jsxs("span",{className:"home-pagination-meta",children:[Mn," / ",Qt]}),i.jsx("button",{type:"button",className:"home-pagination-btn",disabled:Mn>=Qt,onClick:()=>E(B=>Math.min(Qt,B+1)),children:"التالي"})]}):null,Qt>1?i.jsx("div",{className:"scroll-dots scroll-dots--pages","aria-label":"صفحات المتاجر",role:"tablist",children:Array.from({length:Qt}).slice(0,12).map((B,re)=>{const le=re+1;return i.jsx("button",{type:"button",className:`scroll-dot${le===Mn?" scroll-dot--active":""}`,"aria-label":`صفحة ${le}`,"aria-selected":le===Mn,onClick:()=>E(le)},le)})}):null]}):i.jsx("p",{className:"nearby-empty",children:"لا توجد متاجر ضمن الفلتر. جرّب «الكل» أو ألغِ «على الخريطة فقط» لرؤية متاجر بدون موقع. للبحث بالاسم استخدم مربع البحث في أعلى الصفحة (قسم الترحيب)."})]})}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .home-container {
            padding-inline: clamp(8px, 2.2vw, 22px);
            box-sizing: border-box;
            max-width: 1240px;
            margin-inline: auto;
            padding-bottom: 22px;
          }
          .home-hero {
            position: relative;
            margin-bottom: 14px;
            margin-top: 2px;
            border-radius: var(--radius-xl);
            border: 1px solid var(--section-warm-edge);
            box-shadow: 0 6px 28px rgba(26, 29, 38, 0.07);
            overflow: hidden;
            background: var(--section-warm);
          }

          .home-exclusive {
            margin: 10px 0 14px;
            border-radius: 22px;
            border: 1px solid rgba(232, 230, 224, 0.95);
            background: rgba(255, 255, 255, 0.92);
            box-shadow: 0 6px 22px rgba(26, 29, 38, 0.06);
            padding: 12px 12px 10px;
          }
          .home-exclusive-head {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 10px;
          }
          .home-exclusive-title {
            margin: 0;
            font-size: 1.05rem;
            font-weight: 900;
            color: var(--secondary);
            letter-spacing: -0.02em;
          }
          .home-exclusive-sub {
            margin: 4px 0 0;
            font-size: 0.76rem;
            font-weight: 600;
            color: var(--text-secondary);
            line-height: 1.4;
          }
          .home-exclusive-more {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 0.8rem;
            font-weight: 900;
            color: var(--secondary);
            text-decoration: none;
            padding: 8px 12px;
            border-radius: 999px;
            background: var(--primary-light);
            border: 1px solid rgba(245, 192, 0, 0.45);
            flex-shrink: 0;
          }
          .home-exclusive-more:hover { filter: brightness(1.03); }
          .home-exclusive-rail {
            display: flex;
            gap: 12px;
            overflow-x: auto;
            padding-bottom: 8px;
            scroll-snap-type: x proximity;
            -webkit-overflow-scrolling: touch;
            /* مثل التصميم بالصورة: سكرول مخفي */
            scrollbar-width: none;
          }
          .home-exclusive-rail::-webkit-scrollbar { height: 0; }

          .scroll-dots {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            margin-top: 10px;
            margin-bottom: 2px;
          }
          .scroll-dots--browse {
            margin-top: 8px;
          }
          .scroll-dots--pages {
            margin-top: 10px;
            margin-bottom: 0;
          }
          .scroll-dot {
            width: 7px;
            height: 7px;
            border-radius: 999px;
            border: 1px solid rgba(245, 192, 0, 0.45);
            background: rgba(245, 192, 0, 0.18);
            padding: 0;
            cursor: pointer;
            transition: transform 0.12s ease, background 0.15s ease, border-color 0.15s ease;
          }
          .scroll-dot:hover {
            border-color: rgba(245, 192, 0, 0.68);
            background: rgba(245, 192, 0, 0.28);
          }
          .scroll-dot--active {
            width: 18px;
            background: linear-gradient(90deg, var(--primary-hover), var(--primary));
            border-color: rgba(245, 192, 0, 0.8);
            box-shadow: 0 4px 12px rgba(245, 192, 0, 0.28);
          }
          .scroll-dot:focus-visible {
            outline: 3px solid rgba(245, 192, 0, 0.45);
            outline-offset: 3px;
          }

          .home-exclusive-card {
            position: relative;
            flex: 0 0 auto;
            width: 250px;
            height: 120px;
            border-radius: 18px;
            overflow: hidden;
            text-decoration: none;
            color: inherit;
            scroll-snap-align: start;
            border: 1px solid rgba(232, 230, 224, 0.95);
            box-shadow: 0 6px 20px rgba(26, 29, 38, 0.08);
            background: #fff;
          }
          .home-exclusive-card:hover {
            border-color: rgba(245, 192, 0, 0.5);
            box-shadow: 0 10px 28px rgba(245, 192, 0, 0.16);
            transform: translateY(-1px);
          }
          .home-exclusive-cover {
            position: absolute;
            inset: 0;
            background-size: cover;
            background-position: center;
            background-image: linear-gradient(135deg, rgba(26, 29, 38, 0.06), rgba(26, 29, 38, 0.02));
            filter: saturate(1.05);
          }
          .home-exclusive-cover::after {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(90deg, rgba(0, 0, 0, 0.58) 0%, rgba(0, 0, 0, 0.1) 55%, rgba(0, 0, 0, 0) 100%);
          }
          .home-exclusive-badge {
            position: absolute;
            top: 10px;
            inset-inline-end: 10px;
            padding: 4px 10px;
            border-radius: 999px;
            font-size: 0.72rem;
            font-weight: 900;
            color: #111;
            background: rgba(255, 204, 0, 0.92);
            border: 1px solid rgba(255, 255, 255, 0.35);
          }
          .home-exclusive-meta {
            position: absolute;
            inset-inline-start: 12px;
            bottom: 12px;
            z-index: 1;
            max-width: 80%;
          }
          .home-exclusive-ad-title {
            font-weight: 900;
            font-size: 0.92rem;
            color: #fff;
            line-height: 1.25;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .home-exclusive-store {
            margin-top: 4px;
            font-size: 0.75rem;
            font-weight: 700;
            color: rgba(255, 255, 255, 0.86);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .home-exclusive-skel {
            flex: 0 0 auto;
            width: 250px;
            height: 120px;
            border-radius: 18px;
            background: linear-gradient(90deg, rgba(232, 230, 224, 0.65), rgba(245, 243, 238, 0.8), rgba(232, 230, 224, 0.65));
            background-size: 220% 100%;
            animation: homeExclusiveShimmer 1.25s ease-in-out infinite;
            border: 1px solid rgba(232, 230, 224, 0.95);
          }
          .home-exclusive-empty {
            padding: 12px 14px;
            border-radius: 14px;
            border: 1px dashed rgba(232, 230, 224, 0.95);
            background: rgba(255, 255, 255, 0.72);
            color: var(--text-secondary);
            font-weight: 700;
            font-size: 0.86rem;
          }
          @keyframes homeExclusiveShimmer {
            0% { background-position: 0% 0; }
            100% { background-position: 100% 0; }
          }
          @media (max-width: 520px) {
            .home-exclusive-card,
            .home-exclusive-skel {
              width: 220px;
              height: 110px;
              border-radius: 16px;
            }
            .home-exclusive-badge {
              font-size: 0.68rem;
              padding: 3px 9px;
            }
          }
          .home-hero-backdrop {
            position: absolute;
            inset: 0;
            pointer-events: none;
            background:
              radial-gradient(ellipse 85% 65% at 18% 22%, rgba(255, 204, 0, 0.22) 0%, transparent 58%),
              radial-gradient(ellipse 70% 55% at 92% 78%, rgba(93, 64, 55, 0.08) 0%, transparent 52%),
              radial-gradient(ellipse 50% 40% at 72% 12%, rgba(2, 119, 189, 0.07) 0%, transparent 45%),
              linear-gradient(165deg, rgba(255, 255, 255, 0.55) 0%, rgba(255, 249, 230, 0.95) 45%, rgba(255, 252, 240, 1) 100%);
            filter: saturate(1.05);
          }
          .home-hero-inner {
            position: relative;
            z-index: 1;
            padding: clamp(16px, 3.6vw, 26px) clamp(14px, 3vw, 24px) clamp(18px, 3.8vw, 28px);
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: clamp(14px, 3vw, 20px);
            max-width: min(640px, 100%);
            margin-inline: auto;
            text-align: center;
          }
          .home-hero-copy {
            text-align: center;
          }
          .home-hero-title {
            margin: 0 0 8px;
            font-size: clamp(1.38rem, 4.2vw, 1.78rem);
            font-weight: 900;
            color: var(--secondary);
            letter-spacing: -0.03em;
            line-height: 1.22;
          }
          .home-hero-sub {
            margin: 0 auto;
            font-size: 0.9rem;
            color: var(--text-secondary);
            line-height: 1.65;
            max-width: 34em;
            font-weight: 600;
          }
          .home-hero-search {
            margin: 0;
            width: 100%;
          }
          .home-hero-search-bar {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 4px 6px 4px 14px;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.92);
            border: 1.5px solid rgba(255, 255, 255, 0.85);
            box-shadow:
              0 4px 24px rgba(26, 29, 38, 0.08),
              0 1px 0 rgba(255, 255, 255, 0.9) inset;
            -webkit-backdrop-filter: blur(10px);
            backdrop-filter: blur(10px);
          }
          .home-hero-search-ico {
            flex-shrink: 0;
            color: var(--text-light);
            opacity: 0.9;
          }
          .home-hero-search-input {
            flex: 1;
            min-width: 0;
            border: none !important;
            background: transparent !important;
            box-shadow: none !important;
            padding: 0.65rem 0.2rem !important;
            font-size: 0.95rem;
            font-weight: 600;
            font-family: inherit;
            color: var(--text-primary);
          }
          .home-hero-search-input::placeholder {
            color: var(--text-light);
            font-weight: 500;
          }

          /* موبايل: صغّر الهيرو، وخلي الـ placeholder أوضح وأقصر */
          @media (max-width: 520px) {
            /* على الشاشات الصغيرة: مربع "ماذا تبحث" غير لازم لأن البحث بالناف بار */
            .home-hero {
              display: none;
            }
            .home-hero-inner {
              padding: 12px 12px 14px;
              gap: 10px;
              max-width: 100%;
            }
            .home-hero-title {
              font-size: 1.18rem;
              margin-bottom: 6px;
              line-height: 1.2;
            }
            .home-hero-sub {
              font-size: 0.82rem;
              line-height: 1.55;
              max-width: 30em;
            }
            .home-hero-search-bar {
              padding: 3px 5px 3px 12px;
            }
            .home-hero-search-input {
              padding: 0.55rem 0.15rem !important;
              font-size: 0.9rem;
            }
            .home-hero-search-input::placeholder {
              font-size: 0.86rem;
            }
            /* شيل البحث القديم على الشاشات الصغيرة (الآن البحث في الهيدر) */
            .home-hero-search {
              display: none;
            }
          }

          /* على الشاشات الكبيرة: زر "الكل" في شريط الفئات غير لازم */
          @media (min-width: 900px) {
            .home-browse-item--all {
              display: none;
            }
          }
          .home-hero-filter-btn {
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 46px;
            height: 46px;
            border-radius: 50%;
            color: var(--secondary);
            background: var(--surface);
            border: 1.5px solid var(--border);
            text-decoration: none;
            transition: background 0.18s ease, border-color 0.18s ease, transform 0.15s ease;
          }
          .home-hero-filter-btn:hover {
            background: rgba(255, 204, 0, 0.14);
            border-color: rgba(255, 204, 0, 0.45);
          }
          .home-hero-submit-btn {
            flex-shrink: 0;
            width: 46px;
            height: 46px;
            border: none;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            background: linear-gradient(145deg, var(--primary) 0%, var(--primary-hover) 100%);
            color: var(--secondary);
            box-shadow: var(--shadow-gold);
            transition: filter 0.15s ease, transform 0.12s ease;
          }
          .home-hero-submit-btn:hover {
            filter: brightness(1.05);
          }
          .home-hero-submit-btn:active {
            transform: scale(0.96);
          }

          .home-mode-strip {
            display: flex;
            justify-content: center;
            margin-bottom: 12px;
            margin-top: 0;
          }
          .home-mode-switch {
            display: inline-flex;
            align-items: stretch;
            padding: 3px;
            gap: 2px;
            border-radius: var(--radius-pill);
            background: var(--white);
            border: 1px solid rgba(232, 230, 224, 0.95);
            box-shadow: 0 2px 14px rgba(26, 29, 38, 0.06);
          }
          .home-mode-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
            padding: 5px 12px;
            min-height: 32px;
            border: none;
            border-radius: var(--radius-pill);
            font-family: inherit;
            font-size: 0.74rem;
            font-weight: 900;
            letter-spacing: 0.02em;
            cursor: pointer;
            color: var(--text-secondary);
            background: transparent;
            transition: color 0.15s ease, background 0.18s ease, box-shadow 0.18s ease;
          }
          .home-mode-btn:hover {
            color: var(--secondary);
            background: var(--primary-light);
          }
          .home-mode-btn:focus-visible {
            outline: 2px solid var(--primary);
            outline-offset: 2px;
          }
          .home-mode-btn--on {
            color: var(--secondary);
            background: linear-gradient(180deg, var(--primary) 0%, var(--primary-hover) 100%);
            box-shadow: var(--shadow-gold);
          }
          .home-mode-btn--on:hover {
            filter: brightness(1.02);
          }

          .map-section {
            margin-bottom: 12px;
            margin-top: 2px;
            padding: clamp(8px, 1.6vw, 11px);
            border-radius: 16px;
            background: linear-gradient(160deg, #f8fbf9 0%, rgba(255, 253, 244, 0.88) 100%);
            border: 1px solid rgba(190, 202, 196, 0.5);
            box-shadow: 0 3px 16px rgba(26, 29, 38, 0.045);
            max-width: min(460px, 100%);
            margin-inline: auto;
          }
          .map-section-head--compact {
            margin-bottom: 4px;
            align-items: center;
          }
          .map-section-title--with-icon {
            display: inline-flex;
            align-items: center;
            gap: 7px;
            font-size: 1rem;
          }
          .map-section-title-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 30px;
            height: 30px;
            border-radius: 10px;
            background: linear-gradient(150deg, rgba(255, 204, 0, 0.2) 0%, rgba(255, 255, 255, 0.92) 100%);
            border: 1px solid rgba(255, 204, 0, 0.32);
            color: var(--secondary);
            box-shadow: 0 1px 8px rgba(26, 29, 38, 0.05);
          }
          .map-section--compact .map-section-badge {
            font-size: 0.64rem;
            padding: 2px 8px;
            font-weight: 800;
            letter-spacing: 0.02em;
          }
          .map-section-hint-muted--short {
            margin: 0 0 6px;
            font-size: 0.7rem;
            line-height: 1.4;
            color: var(--text-secondary);
            font-weight: 600;
          }
          .map-hint-line--compact {
            margin: 0 0 6px;
            font-size: 0.68rem;
            padding: 5px 9px;
            border-radius: 9px;
          }
          .map-section-footnote {
            margin: 8px 0 0;
            font-size: 0.76rem;
            color: var(--text-secondary);
            line-height: 1.5;
            font-weight: 600;
          }
          .map-section-footnote-link {
            font-weight: 800;
            color: var(--secondary);
            text-decoration: none;
            border-bottom: 1px solid rgba(26, 29, 38, 0.12);
          }
          .map-section-footnote-link:hover {
            border-bottom-color: var(--primary-hover);
          }
          .map-section-error {
            margin: 8px 0 0;
            color: #c0392b;
            font-weight: 800;
            font-size: 0.82rem;
          }

          .home-top-grid {
            display: block;
            margin: 10px 0 14px;
          }
          .home-top-grid__exclusive {
            min-width: 0;
          }

          .home-offers-section--split {
            margin-bottom: 0;
            flex: 1;
            min-height: 0;
            padding: clamp(9px, 1.8vw, 13px) clamp(10px, 2vw, 14px) clamp(11px, 2vw, 15px);
            display: flex;
            flex-direction: column;
            border-radius: 16px;
            border: 1px solid rgba(232, 210, 120, 0.42);
            color: var(--text-primary);
            background: linear-gradient(
              165deg,
              rgba(255, 253, 244, 0.98) 0%,
              rgba(255, 250, 230, 0.88) 38%,
              rgba(255, 255, 255, 0.97) 100%
            );
            box-shadow:
              0 1px 0 rgba(255, 255, 255, 0.85) inset,
              0 4px 20px rgba(26, 29, 38, 0.06);
          }
          .home-offers-section--split .home-offers-head {
            margin-bottom: 12px;
            padding-bottom: 10px;
            border-bottom: 1px solid rgba(245, 192, 0, 0.22);
            align-items: flex-start;
          }
          .home-offers-section--split .home-offers-kicker {
            font-size: 0.95rem;
            font-weight: 900;
            color: var(--secondary);
            letter-spacing: -0.02em;
            line-height: 1.25;
          }
          .home-offers-section--split .home-offers-sub {
            font-size: 0.72rem;
            color: var(--text-secondary);
            margin-top: 4px;
            line-height: 1.4;
          }
          .home-offers-section--split .home-offers-more {
            flex-shrink: 0;
            padding: 7px 13px;
            font-size: 0.76rem;
          }
          .home-offers-section--split .home-offer-card {
            border-radius: 13px;
            border: 1px solid rgba(232, 230, 224, 0.95);
            background: #fff;
            box-shadow: 0 4px 14px rgba(26, 29, 38, 0.06);
            isolation: isolate;
          }
          .home-offers-section--split .home-offer-card-visual {
            display: grid;
            grid-template-rows: 88px 1fr;
          }
          .home-offers-section--split .home-offer-img {
            border-bottom: 1px solid rgba(232, 230, 224, 0.75);
          }
          .home-offers-section--split .home-offer-card:hover {
            border-color: rgba(245, 192, 0, 0.45);
            box-shadow: 0 12px 26px rgba(245, 192, 0, 0.14);
          }
          .home-offers-section--split .home-offer-title {
            font-size: 0.82rem;
            color: var(--secondary);
          }
          .home-offers-section--split .home-offer-store {
            color: var(--text-secondary);
          }
          .home-offers-section--split .home-offer-price {
            color: var(--secondary);
          }
          /* تثبيت ظهور النص داخل لوحة العروض (حماية من أي تعارضات) */
          .home-offers-section--split .home-offer-card-visual,
          .home-offers-section--split .home-offer-body,
          .home-offers-section--split .home-offer-topline,
          .home-offers-section--split .home-offer-title,
          .home-offers-section--split .home-offer-desc,
          .home-offers-section--split .home-offer-store,
          .home-offers-section--split .home-offer-badge,
          .home-offers-section--split .home-offer-price,
          .home-offers-section--split .home-offer-cta {
            opacity: 1 !important;
            visibility: visible !important;
            color: inherit;
          }
          .home-offers-section--split .home-offer-body { color: var(--text-primary); }
          .home-offers-section--split .home-offer-title,
          .home-offers-section--split .home-offer-price,
          .home-offers-section--split .home-offer-cta { color: var(--secondary); }
          .home-offers-section--split .home-offer-store,
          .home-offers-section--split .home-offer-desc { color: var(--text-secondary); }
          .home-offers-section--split .home-offer-badge {
            max-width: 70%;
          }
          .home-offers-section--split .home-offer-body {
            padding: 10px 12px 11px;
            gap: 5px;
            min-height: 102px;
            position: relative;
            z-index: 1;
            background: transparent;
          }
          .home-offers-section--split .home-offer-cta {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            border-radius: 9px;
            border-color: rgba(245, 192, 0, 0.42);
            background: var(--primary-light);
            color: var(--secondary);
          }
          .home-offers-panel-loading {
            flex: 1;
            min-height: 200px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.84rem;
            font-weight: 700;
            color: var(--text-secondary);
            border: 1px dashed rgba(245, 192, 0, 0.38);
            border-radius: 13px;
            background: rgba(255, 255, 255, 0.72);
          }
          .home-offers-panel-empty {
            flex: 1;
            min-height: 200px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 16px;
            text-align: center;
            border-radius: 12px;
            border: 1px dashed rgba(232, 230, 224, 0.95);
            background: rgba(255, 255, 255, 0.72);
          }
          .home-offers-panel-empty-text {
            margin: 0;
            font-size: 0.82rem;
            font-weight: 700;
            color: var(--text-secondary);
            line-height: 1.5;
          }
          .home-offers-panel-empty-link {
            font-size: 0.8rem;
            font-weight: 900;
            color: var(--secondary);
            text-decoration: none;
            padding: 8px 14px;
            border-radius: 999px;
            border: 1px solid rgba(245, 192, 0, 0.5);
            background: var(--primary-light);
          }
          .home-offers-panel-empty-link:hover {
            filter: brightness(1.03);
          }
          .home-offers-grid--split {
            /* ثابت داخل اللوحة الجانبية: لا يتغير عدد الأعمدة مع كبر الشاشة */
            display: flex;
            flex-direction: column;
            gap: 11px;
            flex: 1;
            overflow-y: auto;
            max-height: min(360px, 50vh);
            padding: 2px 2px 2px 0;
            padding-inline-end: 6px;
            /* مثل التصميم بالصورة: سكرول مخفي */
            scrollbar-width: none;
          }
          /* تأكيد أعلى خصوصية ضد ميديا .home-offers-grid العامة */
          .home-offers-grid.home-offers-grid--split {
            display: flex !important;
            grid-template-columns: none !important;
          }
          .home-offers-grid--split::-webkit-scrollbar { width: 0; }
          .home-pagination--split {
            margin-top: 12px;
            padding-top: 10px;
            gap: 10px;
            border-top: 1px solid rgba(245, 192, 0, 0.22);
          }

          @media (max-width: 520px) {
            .home-top-grid { gap: 12px; }
          }

          .ads-section { margin-bottom: 22px; }
          .ads-section--panel {
            padding: clamp(16px, 3vw, 22px) clamp(14px, 2.5vw, 20px);
            border-radius: var(--radius-xl);
            background: linear-gradient(165deg, rgba(255, 255, 255, 1) 0%, rgba(255, 249, 230, 0.55) 100%);
            border: 1px solid rgba(232, 230, 224, 0.9);
            box-shadow: 0 4px 22px rgba(26, 29, 38, 0.06);
          }

          .home-pagination {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 14px;
            margin-top: 16px;
            flex-wrap: wrap;
          }

          .home-pagination-btn {
            font-family: inherit;
            font-weight: 800;
            font-size: 0.86rem;
            padding: 9px 16px;
            border-radius: 12px;
            border: 1px solid var(--border);
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
            color: var(--secondary);
            cursor: pointer;
            box-shadow: var(--shadow-sm);
          }

          .home-pagination-btn:disabled {
            opacity: 0.45;
            cursor: not-allowed;
          }

          .home-pagination-meta {
            font-weight: 800;
            font-size: 0.86rem;
            color: var(--text-secondary);
          }

          .home-browse-block {
            margin-bottom: 16px;
            padding: 14px 14px 12px;
            border-radius: 18px;
            background: rgba(255, 255, 255, 0.92);
            border: 1px solid rgba(232, 230, 224, 0.95);
            box-shadow: 0 4px 18px rgba(26, 29, 38, 0.06);
          }
          .home-browse-head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            margin-bottom: 10px;
          }
          .home-browse-title {
            font-size: 1.1rem;
            font-weight: 900;
            color: var(--secondary);
            margin: 0 0 10px;
            letter-spacing: -0.02em;
          }
          .home-browse-head .home-browse-title {
            margin: 0;
          }
          .home-browse-filterbtn {
            appearance: none;
            border: 1px solid rgba(232, 230, 224, 0.95);
            background: rgba(255, 255, 255, 0.92);
            box-shadow: 0 2px 12px rgba(26, 29, 38, 0.06);
            color: var(--secondary);
            border-radius: 999px;
            padding: 9px 12px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-family: inherit;
            cursor: pointer;
            font-weight: 900;
            min-width: 0;
          }
          .home-browse-filterbtn:disabled {
            opacity: 0.6;
            cursor: wait;
          }
          .home-browse-filterbtn-text {
            font-size: 0.86rem;
            font-weight: 900;
            color: var(--text-secondary);
            max-width: 160px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .home-browse-scroll {
            display: flex;
            gap: 10px;
            overflow-x: auto;
            padding-bottom: 6px;
            scroll-snap-type: x proximity;
            -webkit-overflow-scrolling: touch;
            /* مثل التصميم بالصورة: سكرول مخفي */
            scrollbar-width: none;
          }
          .home-browse-scroll::-webkit-scrollbar { height: 0; }
          .home-browse-item {
            flex: 0 0 auto;
            scroll-snap-align: start;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
            width: 70px;
            border: none;
            background: none;
            cursor: pointer;
            font-family: inherit;
            padding: 4px 2px;
            color: var(--text-primary);
            transition: transform 0.18s ease;
          }

          /* موبايل: اخفِ شريط الأيقونات وخلي الفلتر الصغير هو الأساس */
          @media (max-width: 520px) {
            .home-browse-scroll,
            .scroll-dots--browse {
              display: none;
            }
            .home-browse-block {
              padding: 12px;
            }
            .home-browse-filterbtn-text {
              max-width: 190px;
            }
          }
          .home-browse-item:hover {
            transform: translateY(-2px);
          }
          .home-browse-tile {
            width: 54px;
            height: 54px;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1.5px solid transparent;
            box-shadow: 0 3px 12px rgba(26, 29, 38, 0.06);
            transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease, filter 0.2s ease;
          }
          .home-browse-item:hover .home-browse-tile {
            box-shadow: 0 8px 26px rgba(26, 29, 38, 0.11);
            filter: brightness(1.03);
          }
          .home-browse-item--active .home-browse-tile {
            border-color: var(--primary) !important;
            box-shadow: 0 6px 22px rgba(255, 204, 0, 0.35);
            transform: translateY(-1px);
          }
          .home-browse-label {
            font-size: 0.68rem;
            font-weight: 700;
            text-align: center;
            line-height: 1.25;
            color: var(--text-secondary);
            max-width: 82px;
          }
          .home-browse-item--active .home-browse-label {
            color: var(--secondary);
          }

          .home-community-below {
            margin-top: 18px;
            padding-top: 16px;
            border-top: 1px solid rgba(232, 230, 224, 0.95);
          }
          .home-community-below-title {
            margin: 0 0 12px;
            font-size: 1.02rem;
            font-weight: 900;
            color: var(--secondary);
            letter-spacing: -0.02em;
          }
          .home-community-below-loading,
          .home-community-below-empty {
            margin: 0;
            font-size: 0.86rem;
            font-weight: 600;
            color: var(--text-secondary);
            line-height: 1.55;
          }
          .home-community-below-list {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          .home-community-point {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            justify-content: space-between;
            gap: 10px 14px;
            padding: 12px 14px;
            border-radius: 14px;
            background: var(--white);
            border: 1px solid rgba(232, 230, 224, 0.95);
            box-shadow: 0 2px 12px rgba(26, 29, 38, 0.05);
          }
          .home-community-point-body {
            flex: 1;
            min-width: min(100%, 220px);
          }
          .home-community-point-cat {
            display: inline-block;
            font-size: 0.66rem;
            font-weight: 800;
            text-transform: none;
            color: var(--secondary);
            background: var(--primary-light);
            padding: 3px 8px;
            border-radius: 8px;
            margin-bottom: 6px;
          }
          .home-community-point-title {
            font-size: 0.92rem;
            font-weight: 900;
            color: var(--secondary);
            line-height: 1.35;
            margin: 0 0 6px;
          }
          .home-community-point-chip {
            display: inline-block;
            font-size: 0.65rem;
            font-weight: 800;
            padding: 2px 8px;
            border-radius: 7px;
            margin-inline-end: 6px;
            margin-bottom: 4px;
            background: rgba(2, 119, 189, 0.12);
            color: #0277bd;
          }
          .home-community-point-chip--ok {
            background: rgba(46, 125, 50, 0.14);
            color: #2e7d32;
          }
          .home-community-point-chip--muted {
            background: rgba(26, 29, 38, 0.06);
            color: var(--text-secondary);
          }
          .home-community-point-desc {
            margin: 6px 0 0;
            font-size: 0.78rem;
            font-weight: 600;
            color: var(--text-secondary);
            line-height: 1.5;
          }
          .home-community-point-address {
            margin: 6px 0 0;
            font-size: 0.74rem;
            font-weight: 700;
            color: var(--text-primary);
            line-height: 1.45;
          }
          .home-community-point-mapbtn {
            flex-shrink: 0;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 8px 12px;
            border-radius: 11px;
            border: 1.5px solid rgba(245, 192, 0, 0.55);
            background: linear-gradient(180deg, var(--primary) 0%, var(--primary-hover) 100%);
            color: var(--secondary);
            font-family: inherit;
            font-size: 0.74rem;
            font-weight: 900;
            cursor: pointer;
            box-shadow: var(--shadow-sm);
            transition: filter 0.15s ease, transform 0.12s ease;
          }
          .home-community-point-mapbtn:hover {
            filter: brightness(1.04);
          }
          .home-community-point-mapbtn:active {
            transform: scale(0.98);
          }

          .home-community-ads-footnote {
            padding: 12px 16px;
            margin-bottom: 12px;
            border-radius: 14px;
            border: 1px dashed rgba(232, 230, 224, 0.95);
            background: rgba(255, 255, 255, 0.72);
          }
          .home-community-ads-footnote-text {
            margin: 0;
            font-size: 0.82rem;
            font-weight: 600;
            color: var(--text-secondary);
            line-height: 1.55;
            text-align: center;
          }
          .home-community-ads-footnote-link {
            font-weight: 900;
            color: var(--secondary);
            text-decoration: none;
            border-bottom: 1px solid rgba(26, 29, 38, 0.15);
          }
          .home-community-ads-footnote-link:hover {
            border-bottom-color: var(--primary-hover);
          }

          .home-offers-loading {
            margin-bottom: 16px;
            padding: 12px 16px;
            font-size: 0.9rem;
            color: var(--text-secondary);
            border: 1px dashed var(--border);
            border-radius: 16px;
          }

          .home-offers-section {
            margin-bottom: 20px;
            padding: 14px 14px 16px;
            border-radius: 20px;
            border: 1px solid rgba(245, 192, 0, 0.38);
            background: linear-gradient(152deg, rgba(255, 250, 232, 0.95) 0%, rgba(255, 255, 255, 1) 45%, var(--surface) 100%);
            box-shadow: 0 10px 36px rgba(30, 30, 46, 0.07);
          }
          .home-offers-head {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 14px;
          }
          .home-offers-head-text {
            min-width: 0;
          }
          .home-offers-kicker {
            font-weight: 900;
            font-size: 0.98rem;
            color: var(--secondary);
            letter-spacing: -0.02em;
          }
          .home-offers-sub {
            font-size: 0.76rem;
            font-weight: 600;
            color: var(--text-secondary);
            margin-top: 3px;
            line-height: 1.35;
          }
          .home-offers-more {
            display: inline-flex;
            align-items: center;
            gap: 5px;
            font-weight: 900;
            font-size: 0.78rem;
            color: var(--secondary);
            text-decoration: none;
            padding: 8px 14px;
            border-radius: 999px;
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
            box-shadow: var(--shadow-gold);
            border: 1px solid rgba(245, 192, 0, 0.45);
          }
          .home-offers-more:hover { filter: brightness(1.05); }
          .home-offers-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 11px;
            overflow: visible;
          }
          @media (min-width: 640px) {
            .home-offers-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 12px;
            }
          }
          @media (min-width: 900px) {
            .home-offers-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }
          @media (min-width: 1100px) {
            .home-offers-grid {
              grid-template-columns: repeat(4, 1fr);
              gap: 12px;
            }
          }
          .home-offer-card {
            width: 100%;
            min-width: 0;
            border-radius: 14px;
            border: 1px solid rgba(224, 223, 213, 0.95);
            background: var(--white);
            overflow: hidden;
            box-shadow: 0 4px 16px rgba(30, 30, 46, 0.06);
            transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
          }
          .home-offer-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 28px rgba(245, 192, 0, 0.16);
            border-color: rgba(245, 192, 0, 0.45);
          }
          .home-offer-card-visual {
            text-decoration: none;
            color: inherit;
            display: block;
          }
          .home-offer-img {
            height: 88px;
            background: linear-gradient(180deg, var(--grey-light) 0%, #f3f2ec 100%);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-offer-img.home-offer-img--empty {
            background:
              radial-gradient(ellipse 110% 75% at 65% 30%, rgba(255, 204, 0, 0.14) 0%, transparent 55%),
              radial-gradient(ellipse 90% 70% at 22% 80%, rgba(2, 119, 189, 0.08) 0%, transparent 52%),
              linear-gradient(180deg, rgba(245, 243, 238, 0.9) 0%, rgba(238, 241, 240, 0.9) 100%);
          }
          .home-offer-img img { width: 100%; height: 100%; object-fit: cover; display: block; }
          .home-offer-body {
            padding: 9px 11px 10px;
            display: flex;
            flex-direction: column;
            gap: 4px;
          }
          .home-offer-topline {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 10px;
          }
          .home-offer-badge {
            font-size: 0.66rem;
            font-weight: 900;
            color: var(--secondary);
            background: var(--primary-light);
            padding: 3px 7px;
            border-radius: 6px;
            line-height: 1.3;
            max-width: 62%;
          }
          .home-offer-price {
            font-size: 0.78rem;
            font-weight: 900;
            color: var(--secondary);
            white-space: nowrap;
          }
          .home-offer-price-old {
            text-decoration: line-through;
            font-weight: 600;
            font-size: 0.65rem;
            color: var(--text-secondary);
            margin-inline-end: 6px;
          }
          .home-offer-title {
            font-size: 0.84rem;
            font-weight: 800;
            color: var(--secondary);
            margin: 0;
            line-height: 1.35;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .home-offer-desc {
            margin: 0;
            font-size: 0.74rem;
            font-weight: 600;
            color: var(--text-secondary);
            line-height: 1.45;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .home-offer-store {
            font-size: 0.7rem;
            font-weight: 700;
            color: var(--text-secondary);
          }
          .home-offer-cta {
            margin-top: 2px;
            display: inline-block;
            align-self: flex-start;
            font-size: 0.72rem;
            font-weight: 800;
            padding: 5px 10px;
            border-radius: 8px;
            border: 1.5px solid var(--border);
            background: var(--surface);
            color: var(--secondary);
          }
          .home-offer-actions {
            display: flex;
            gap: 6px;
            padding: 7px 10px;
            border-top: 1px solid var(--border);
            background: var(--surface);
          }
          .home-offer-iconbtn {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 6px;
            border-radius: 8px;
            border: 1px solid var(--border);
            background: var(--white);
            cursor: pointer;
            color: var(--secondary);
          }
          .home-offer-iconbtn:hover { background: var(--primary-light); }

          .map-section-head { margin-bottom: 10px; align-items: flex-end; }
          .map-section-title { font-size: 1.35rem; font-weight: 900; color: var(--secondary); margin: 0; }
          .map-section--compact .map-section-title.map-section-title--with-icon {
            font-size: 0.88rem;
            font-weight: 900;
            margin: 0;
            letter-spacing: -0.02em;
          }
          .map-section-badge { font-size: 0.72rem; }
          .map-section-hint-muted {
            margin: 0 0 14px;
            font-size: 0.86rem;
            color: var(--text-secondary);
            line-height: 1.55;
          }

          .map-hint-line {
            margin: 0 0 10px;
            font-size: 0.78rem;
            color: var(--text-secondary);
            line-height: 1.45;
            font-weight: 600;
          }
          .map-hint-line--above-map {
            padding: 8px 12px;
            border-radius: 12px;
            background: var(--surface);
            border: 1px solid var(--border);
          }

          .nearby-head {
            margin-bottom: 18px;
            margin-top: 4px;
            align-items: stretch;
            gap: 14px;
            flex-direction: column;
          }
          .nearby-title {
            font-size: clamp(1.15rem, 3.2vw, 1.42rem);
            font-weight: 900;
            color: var(--secondary);
            margin: 0;
            letter-spacing: -0.03em;
            line-height: 1.25;
          }
          .nearby-filter-option {
            width: 100%;
            max-width: 100%;
          }
          .nearby-map-toggle {
            display: flex;
            align-items: flex-start;
            gap: 14px;
            cursor: pointer;
            margin: 0;
            padding: 14px 16px;
            border-radius: 18px;
            border: 1px solid var(--border);
            background: linear-gradient(145deg, #ffffff 0%, var(--surface) 100%);
            box-shadow: 0 4px 20px rgba(30, 30, 46, 0.06);
            transition: box-shadow 0.2s ease, border-color 0.2s ease;
          }
          .nearby-map-toggle:hover {
            border-color: rgba(245, 192, 0, 0.45);
            box-shadow: 0 8px 28px rgba(245, 192, 0, 0.12);
          }
          .nearby-map-toggle-input {
            position: absolute;
            opacity: 0;
            width: 0;
            height: 0;
            pointer-events: none;
          }
          .nearby-map-toggle-track {
            flex-shrink: 0;
            width: 50px;
            height: 30px;
            border-radius: 999px;
            background: #e2e1da;
            position: relative;
            margin-top: 2px;
            transition: background 0.22s ease;
            box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.08);
          }
          .nearby-map-toggle-track::after {
            content: '';
            position: absolute;
            width: 24px;
            height: 24px;
            top: 3px;
            inset-inline-start: 3px;
            border-radius: 50%;
            background: #fff;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
            transition: inset-inline-start 0.22s ease, transform 0.22s ease;
          }
          .nearby-map-toggle-input:checked + .nearby-map-toggle-track {
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
          }
          .nearby-map-toggle-input:checked + .nearby-map-toggle-track::after {
            inset-inline-start: calc(100% - 24px - 3px);
          }
          .nearby-map-toggle-input:focus-visible + .nearby-map-toggle-track {
            outline: 2px solid var(--primary);
            outline-offset: 2px;
          }
          .nearby-map-toggle-copy {
            display: flex;
            flex-direction: column;
            gap: 5px;
            min-width: 0;
            text-align: right;
          }
          .nearby-map-toggle-title {
            font-weight: 900;
            font-size: 0.92rem;
            color: var(--secondary);
            line-height: 1.35;
          }
          .nearby-map-toggle-hint {
            font-size: 0.76rem;
            font-weight: 600;
            color: var(--text-secondary);
            line-height: 1.45;
          }
          .nearby-loading,
          .nearby-empty {
            color: var(--text-secondary);
            font-size: 0.95rem;
          }
          .nearby-rail {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-top: 6px;
            overflow: visible;
            padding-bottom: 0;
          }
          /* موبايل: عمودين + صورة فوق + تفاصيل تحت */
          @media (max-width: 640px) {
            .nearby-rail {
              display: grid;
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 12px;
            }
            .nearby-card {
              flex-direction: column;
              align-items: stretch;
              justify-content: flex-start;
              padding: 10px;
              border-radius: 18px;
            }
            .nearby-card-thumb {
              order: -1;
              width: 100%;
              height: 110px;
              border-radius: 16px;
            }
            .nearby-card-main {
              width: 100%;
            }
            .nearby-card-text {
              gap: 6px;
            }
          }
          @media (min-width: 720px) {
            .nearby-rail {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 16px;
            }
          }
          @media (min-width: 980px) {
            .nearby-rail {
              grid-template-columns: repeat(3, 1fr);
              gap: 18px;
            }
          }
          @media (min-width: 1200px) {
            .nearby-rail {
              grid-template-columns: repeat(4, 1fr);
              gap: 18px;
            }
          }
          .nearby-card {
            width: 100%;
            min-width: 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;
            padding: 14px 16px;
            border-radius: 20px;
            background: var(--white);
            border: 1px solid rgba(224, 223, 213, 0.9);
            box-shadow: 0 6px 24px rgba(30, 30, 46, 0.07);
            text-decoration: none;
            color: inherit;
            transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
          }
          .nearby-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 32px rgba(30, 30, 46, 0.1);
            border-color: rgba(245, 192, 0, 0.35);
          }
          .nearby-card-main {
            flex: 1;
            min-width: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 6px;
          }
          .nearby-card-text {
            display: flex;
            flex-direction: column;
            gap: 4px;
          }
          .nearby-card-name {
            font-weight: 900;
            font-size: 1rem;
            color: var(--secondary);
          }
          .nearby-card-cat {
            font-size: 0.78rem;
            font-weight: 700;
            color: var(--text-secondary);
          }
          .nearby-card-dist {
            font-size: 0.82rem;
            font-weight: 700;
            color: var(--text-secondary);
          }
          .nearby-card-status {
            align-self: flex-start;
            font-size: 0.68rem;
            font-weight: 900;
            padding: 3px 8px;
            border-radius: 999px;
            background: var(--primary-light);
            color: var(--secondary);
          }
          .nearby-card-thumb {
            width: 76px;
            height: 76px;
            flex-shrink: 0;
            border-radius: 16px;
            overflow: hidden;
            background: var(--grey-light);
            border: 1px solid rgba(224, 223, 213, 0.85);
            box-shadow: 0 2px 10px rgba(30, 30, 46, 0.06);
          }
          .nearby-card-thumb-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }
          .nearby-card-thumb-emoji {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.75rem;
            font-family: "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", sans-serif;
          }

          @media (max-width: 640px) {
            .map-section-head.flex-between {
              flex-wrap: wrap;
              gap: 10px;
            }
          }

          @media (min-width: 900px) {
            .nearby-head.flex-between {
              flex-direction: row;
              align-items: flex-start;
              justify-content: space-between;
            }
            .nearby-filter-option {
              max-width: 420px;
              flex-shrink: 0;
            }
          }
        `}})]})})},hp=({title:e,message:t})=>{const n=ct();return i.jsxs("div",{className:"guest-access-prompt card flex-center",style:{flexDirection:"column",padding:"60px 40px",textAlign:"center",maxWidth:"500px",margin:"40px auto"},children:[i.jsx("div",{className:"icon-badge flex-center",style:{width:"80px",height:"80px",background:"rgba(30,190,165,0.1)",borderRadius:"50%",marginBottom:"25px",color:"var(--primary)"},children:i.jsx(Rw,{size:40})}),i.jsx("h2",{style:{marginBottom:"12px",color:"var(--secondary)"},children:e||"عذراً، هذه الميزة للمشتركين فقط"}),i.jsx("p",{style:{color:"#666",marginBottom:"30px",lineHeight:"1.6"},children:t||"يجب عليك إنشاء حساب أو تسجيل الدخول لتتمكن من استخدام هذه الميزة والاستمتاع بكافة خدمات رادار."}),i.jsxs("div",{className:"flex-center",style:{gap:"15px",width:"100%"},children:[i.jsxs(St,{onClick:()=>n("/login"),style:{flex:1,height:"50px"},variant:"secondary",children:[i.jsx(ac,{size:18,style:{marginLeft:"8px"}})," تسجيل الدخول"]}),i.jsxs(St,{onClick:()=>n("/register"),style:{flex:1,height:"50px"},children:[i.jsx(Uw,{size:18,style:{marginLeft:"8px"}})," إنشاء حساب"]})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
                .guest-access-prompt { border: 1px solid #eee; border-radius: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
                .icon-badge { animation: pulse 2s infinite; }
                @keyframes pulse {
                    0% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.1); opacity: 0.8; }
                    100% { transform: scale(1); opacity: 1; }
                }
            `}})]})},L4=()=>{var x,v;const[e,t]=m.useState("products"),[n,a]=m.useState(null),[o,l]=m.useState([]),[d,h]=m.useState(!0),[u,f]=m.useState(localStorage.getItem("isGuest")==="true");m.useEffect(()=>{(async()=>{try{const[b,z]=await Promise.all([Dy(),sp()]);a(b),l(z)}catch(b){console.error("Error fetching dashboard data:",b)}finally{h(!1)}})()},[]);const y=[{label:"زوار الصفحة",value:(n==null?void 0:n.visitor_count)||"0",icon:i.jsx(Tl,{size:24,color:"#FFCC00"})},{label:"الأكثر إضافة للسلة",value:((v=(x=n==null?void 0:n.top_products)==null?void 0:x[0])==null?void 0:v.product__name)||"قريباً",icon:i.jsx(kr,{size:24,color:"#FFCC00"})},{label:"الاشتراك المتبقي",value:"30 يوم",icon:i.jsx(Yi,{size:24,color:"#FFCC00"})}];return i.jsx(Ce,{children:i.jsxs("div",{className:"dashboard-container",children:[u?i.jsx(hp,{title:"لوحة التحكم خاصة بالتجار فقط",message:"يجب عليك إنشاء حساب تاجر لتتمكن من إضافة المنتجات، متابعة الإحصائيات، وطلب الإعلانات الممولة لمكانك."}):i.jsxs(i.Fragment,{children:[i.jsx("h1",{children:"لوحة تحكم التاجر"}),i.jsx("div",{className:"stats-grid",children:y.map((_,b)=>i.jsxs("div",{className:"stat-card card flex-center",style:{justifyContent:"space-between"},children:[i.jsxs("div",{className:"stat-info",children:[i.jsx("p",{children:_.label}),i.jsx("h3",{children:_.value})]}),i.jsx("div",{className:"stat-icon-box",children:_.icon})]},b))}),i.jsxs("div",{className:"dashboard-content card",children:[i.jsxs("div",{className:"tabs flex-center",children:[i.jsx("button",{className:`tab-btn ${e==="products"?"active":""}`,onClick:()=>t("products"),children:"منتجاتي"}),i.jsx("button",{className:`tab-btn ${e==="ads"?"active":""}`,onClick:()=>t("ads"),children:"طلب إعلان ممول"}),i.jsx("button",{className:`tab-btn ${e==="settings"?"active":""}`,onClick:()=>t("settings"),children:"إعدادات المتجر"})]}),i.jsxs("div",{className:"tab-pane",children:[e==="products"&&i.jsxs("div",{className:"products-pane",children:[i.jsxs("button",{className:"btn-primary",style:{width:"auto",marginBottom:"20px"},children:[i.jsx(oc,{size:20})," إضافة منتج جديد"]}),i.jsx("div",{className:"products-table",children:d?i.jsx("p",{children:"جاري تحميل المنتجات..."}):o.length>0?i.jsx("div",{className:"products-grid",style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(min(200px, 100%), 1fr))",gap:"15px"},children:o.map(_=>i.jsxs("div",{className:"card product-item",style:{padding:"10px",textAlign:"center"},children:[i.jsx("h4",{children:_.name}),i.jsxs("p",{style:{color:"var(--secondary)",fontWeight:"bold"},children:[_.price," ₪"]})]},_.id))}):i.jsx("p",{children:"لا توجد منتجات حالياً. ابدأ بإضافة أول منتج لمتجرك!"})})]}),e==="ads"&&i.jsxs("div",{className:"ads-pane",children:[i.jsx("h3",{children:"اطلب إعلان ممول"}),i.jsx("p",{children:"اجعل متجرك يظهر في الواجهة الرئيسية بجانب المتاجر الكبرى."}),i.jsxs("form",{style:{marginTop:"20px"},onSubmit:_=>_.preventDefault(),children:[i.jsx("div",{className:"input-group",children:i.jsx("input",{type:"text",placeholder:"عنوان الإعلان"})}),i.jsx("div",{className:"input-group",children:i.jsx("textarea",{placeholder:"وصف الإعلان",style:{width:"100%",padding:"10px",borderRadius:"12px",border:"1px solid #eee"}})}),i.jsxs("button",{className:"btn-primary",type:"button",children:[i.jsx($n,{size:20})," طلب الإعلان الآن"]})]})]})]})]})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .dashboard-container h1 { margin-bottom: 25px; font-size: 1.8rem; }
          .dashboard-container {
            max-width: 1240px;
            margin-inline: auto;
            padding-inline: clamp(8px, 2.2vw, 22px);
            padding-bottom: 32px;
            box-sizing: border-box;
          }
          .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr)); gap: clamp(14px, 3vw, 20px); margin-bottom: 30px; }
          .stat-card { padding: 1.5rem; text-align: right; }
          .stat-info p { color: #666; font-size: 0.9rem; }
          .stat-info h3 { margin-top: 5px; font-size: 1.5rem; color: var(--secondary); }
          .stat-icon-box { background: #FFF9E6; padding: 12px; border-radius: 15px; }

          .tabs { border-bottom: 1px solid #eee; margin-bottom: 20px; gap: 12px 20px; justify-content: flex-start; flex-wrap: wrap; }
          .tab-btn { background: none; border: none; padding: 10px 5px; font-size: clamp(0.95rem, 2.8vw, 1.1rem); cursor: pointer; color: #777; border-bottom: 3px solid transparent; }
          .tab-btn.active { color: var(--secondary); border-color: var(--primary); font-weight: bold; }
          
          .product-item h4 { margin-bottom: 5px; }
        `}})]})})},E4=()=>{const[e,t]=m.useState(null),[n,a]=m.useState(null),[o,l]=m.useState(!0),d=localStorage.getItem("user_name")||"تاجرنا";m.useEffect(()=>{(async()=>{try{const[z,C]=await Promise.all([Dy(),Uy()]);t(z),a(C)}finally{l(!1)}})()},[]);const h=m.useMemo(()=>{if(!(n!=null&&n.end_date))return null;const b=new Date(n.end_date).getTime(),z=Date.now(),C=Math.ceil((b-z)/(1e3*60*60*24));return Number.isFinite(C)?C:null},[n]),u=(e==null?void 0:e.product_insights)??[],f=(e==null?void 0:e.summary)??{},{maxCart:y,maxFav:x}=m.useMemo(()=>u.length?{maxCart:Math.max(1,...u.map(b=>b.in_carts_quantity)),maxFav:Math.max(1,...u.map(b=>b.favorites_count))}:{maxCart:1,maxFav:1},[u]),v=[{label:"زيارات متجرك اليوم",value:o?"…":(e==null?void 0:e.visitor_count)??0,hint:"عدد فتحات صفحة المتجر",icon:i.jsx(Tl,{size:22,strokeWidth:2.2})},{label:"وحدات في سلال الزبائن",value:o?"…":f.total_units_in_carts??0,hint:"مجموع الكميات المضافة لسلال المشتريات",icon:i.jsx(Jn,{size:22,strokeWidth:2.2})},{label:"تسجيلات مفضلة على منتجاتك",value:o?"…":f.total_favorite_marks??0,hint:"عدد مرات أضيف فيها منتج للمفضلة",icon:i.jsx(_r,{size:22,strokeWidth:2.2})},{label:"منتجاتك النشطة",value:o?"…":f.active_products??0,hint:"غير مؤرشفة وظاهرة للزبائن",icon:i.jsx(kr,{size:22,strokeWidth:2.2})}],_=h==null?null:Math.max(h,0);return i.jsx(Ce,{children:i.jsxs("div",{className:"merchant-dashboard",children:[i.jsxs("header",{className:"mdash-hero card",children:[i.jsxs("div",{className:"mdash-hero-text",children:[i.jsxs("p",{className:"mdash-kicker",children:[i.jsx(yn,{size:16})," مرحباً ",d]}),i.jsx("h1",{children:"لوحة تحكم متجرك"}),i.jsxs("p",{className:"mdash-lead",children:["لمحة سريعة عن اهتمام الزبائن بمنتجاتك — ",i.jsx("strong",{children:"السلة"})," تعكس رغبة الشراء، و",i.jsx("strong",{children:"المفضلة"})," ","تعكس الاهتمام. راقب البسيط واتخذ قرارات أوضح."]})]}),i.jsxs("div",{className:"mdash-hero-stat",children:[i.jsx("div",{className:"mdash-mini-label",children:"الاشتراك"}),i.jsx("div",{className:"mdash-mini-value",children:o?"…":_==null?"—":`${_} يوم`}),i.jsx(Yi,{size:18,className:"mdash-hero-clock"})]})]}),i.jsx("section",{className:"mdash-kpis",children:v.map((b,z)=>i.jsxs("div",{className:"card mdash-kpi",children:[i.jsxs("div",{className:"mdash-kpi-top",children:[i.jsx("div",{className:"mdash-kpi-icon",children:b.icon}),i.jsx("div",{className:"mdash-kpi-label",children:b.label})]}),i.jsx("div",{className:"mdash-kpi-value",children:b.value}),i.jsx("p",{className:"mdash-kpi-hint",children:b.hint})]},z))}),i.jsxs("section",{className:"card mdash-insights",children:[i.jsxs("div",{className:"mdash-insights-head",children:[i.jsxs("div",{children:[i.jsxs("h2",{children:[i.jsx(Fw,{size:22,className:"inline-icon"})," تحليلات المنتجات"]}),i.jsx("p",{className:"mdash-insights-sub",children:"ترتيب حسب إجمالي الكمية في السلال ثم المفضلة — بيانات من نشاط المتسوقين الحقيقي."})]}),i.jsx(me,{to:"/merchant/products",className:"mdash-link-products",children:"إدارة المنتجات"})]}),o?i.jsx("p",{className:"mdash-muted",children:"جاري التحميل…"}):u.length===0?i.jsxs("div",{className:"mdash-empty",children:[i.jsx(kr,{size:40,strokeWidth:1.5}),i.jsx("p",{children:"لا توجد منتجات نشطة بعد، أو لم يُسجَّل نشاط على السلة والمفضلة."}),i.jsx(me,{to:"/merchant/products/new",className:"mdash-btn-outline",children:"إضافة منتج"})]}):i.jsx("div",{className:"mdash-table-wrap",children:i.jsxs("table",{className:"mdash-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"المنتج"}),i.jsx("th",{children:"في السلال (الكمية)"}),i.jsx("th",{children:"المفضلة"})]})}),i.jsx("tbody",{children:u.map(b=>i.jsxs("tr",{children:[i.jsx("td",{className:"mdash-td-name",children:b.name}),i.jsx("td",{children:i.jsxs("div",{className:"mdash-bar-cell",children:[i.jsx("div",{className:"mdash-bar-fill mdash-bar-cart",style:{width:`${Math.round(b.in_carts_quantity/y*100)}%`}}),i.jsx("span",{className:"mdash-bar-num",children:b.in_carts_quantity})]})}),i.jsx("td",{children:i.jsxs("div",{className:"mdash-bar-cell",children:[i.jsx("div",{className:"mdash-bar-fill mdash-bar-fav",style:{width:`${Math.round(b.favorites_count/x*100)}%`}}),i.jsx("span",{className:"mdash-bar-num",children:b.favorites_count})]})})]},b.id))})]})})]}),i.jsxs("section",{className:"card mdash-tip",children:[i.jsx("h3",{children:"ملاحظة سريعة"}),i.jsxs("p",{children:["من ",i.jsx("strong",{children:"القائمة الجانبية"})," تدير المنتجات، الإعلانات الممولة، والاشتراك. كلما زاد ظهور منتجاتك جودةً ووضوحاً، غالباً تتحسن أرقام السلة والمفضلة."]})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .merchant-dashboard {
            max-width: 1240px;
            margin-inline: auto;
            padding-bottom: 32px;
            padding-inline: clamp(8px, 2.2vw, 22px);
            box-sizing: border-box;
          }
          .mdash-hero {
            display: flex;
            flex-wrap: wrap;
            align-items: stretch;
            justify-content: space-between;
            gap: 20px;
            padding: 22px 24px;
            margin-bottom: 20px;
            background: linear-gradient(135deg, rgba(245, 192, 0, 0.14) 0%, var(--surface) 45%, var(--white) 100%);
            border: 1.5px solid rgba(245, 192, 0, 0.35);
            border-radius: 16px;
          }
          .mdash-hero-text { flex: 1; min-width: 240px; }
          .mdash-kicker {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            margin: 0 0 8px;
            font-size: 0.85rem;
            font-weight: 800;
            color: var(--secondary);
            opacity: 0.9;
          }
          .merchant-dashboard h1 {
            margin: 0 0 10px;
            font-size: clamp(1.35rem, 2.5vw, 1.85rem);
            color: var(--secondary);
          }
          .mdash-lead {
            margin: 0;
            color: var(--text-secondary);
            line-height: 1.75;
            font-size: 0.95rem;
            max-width: 640px;
          }
          .mdash-hero-stat {
            align-self: center;
            min-width: 140px;
            padding: 16px 20px;
            border-radius: 14px;
            background: var(--white);
            border: 1px solid var(--border);
            box-shadow: var(--shadow-sm);
            position: relative;
            text-align: center;
          }
          .mdash-mini-label { font-size: 0.78rem; font-weight: 700; color: var(--text-secondary); }
          .mdash-mini-value { font-size: 1.65rem; font-weight: 900; color: var(--secondary); margin-top: 4px; }
          .mdash-hero-clock {
            position: absolute;
            top: 12px;
            left: 12px;
            color: var(--primary-hover);
            opacity: 0.7;
          }

          .mdash-kpis {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(min(220px, 100%), 1fr));
            gap: 14px;
            margin-bottom: 20px;
          }
          .mdash-kpi {
            padding: 18px;
            border-radius: 14px;
            transition: box-shadow 0.15s ease, transform 0.15s ease;
          }
          .mdash-kpi:hover {
            box-shadow: var(--shadow-gold);
            transform: translateY(-2px);
          }
          .mdash-kpi-top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
          }
          .mdash-kpi-icon {
            background: linear-gradient(135deg, #FFF9E6 0%, #FFEFC2 100%);
            border-radius: 12px;
            padding: 10px;
            display: flex;
            color: var(--secondary);
          }
          .mdash-kpi-label {
            font-weight: 800;
            color: var(--secondary);
            font-size: 0.92rem;
            line-height: 1.35;
            text-align: end;
            flex: 1;
          }
          .mdash-kpi-value {
            margin-top: 12px;
            font-size: 1.75rem;
            font-weight: 900;
            color: var(--secondary);
            font-variant-numeric: tabular-nums;
          }
          .mdash-kpi-hint {
            margin: 8px 0 0;
            font-size: 0.78rem;
            color: var(--text-secondary);
            line-height: 1.45;
          }

          .mdash-insights { padding: 22px 24px; border-radius: 16px; }
          .mdash-insights-head {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            justify-content: space-between;
            gap: 16px;
            margin-bottom: 18px;
          }
          .mdash-insights-head h2 {
            margin: 0 0 6px;
            font-size: 1.2rem;
            color: var(--secondary);
            display: flex;
            align-items: center;
            gap: 10px;
          }
          .inline-icon { flex-shrink: 0; opacity: 0.9; }
          .mdash-insights-sub {
            margin: 0;
            font-size: 0.88rem;
            color: var(--text-secondary);
            line-height: 1.6;
            max-width: 560px;
          }
          .mdash-link-products {
            display: inline-flex;
            align-items: center;
            padding: 10px 16px;
            border-radius: 12px;
            font-weight: 800;
            font-size: 0.88rem;
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
            color: var(--secondary);
            text-decoration: none;
            white-space: nowrap;
            box-shadow: var(--shadow-sm);
          }
          .mdash-link-products:hover { opacity: 0.95; }

          .mdash-table-wrap {
            overflow-x: auto;
            max-height: 420px;
            overflow-y: auto;
            border: 1px solid var(--border);
            border-radius: 12px;
          }
          .mdash-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 0.9rem;
          }
          .mdash-table th {
            position: sticky;
            top: 0;
            background: var(--surface);
            text-align: right;
            padding: 12px 14px;
            font-weight: 800;
            color: var(--secondary);
            border-bottom: 2px solid var(--border);
            z-index: 1;
          }
          .mdash-table td {
            padding: 12px 14px;
            border-bottom: 1px solid var(--border);
            vertical-align: middle;
          }
          .mdash-td-name { font-weight: 700; color: var(--text-primary); max-width: 220px; }

          .mdash-bar-cell {
            position: relative;
            height: 28px;
            background: var(--grey-light);
            border-radius: 8px;
            overflow: hidden;
            min-width: 120px;
          }
          .mdash-bar-fill {
            position: absolute;
            inset: 0 auto 0 0;
            height: 100%;
            border-radius: 8px;
            min-width: 0;
            transition: width 0.35s ease;
          }
          .mdash-bar-cart {
            background: linear-gradient(90deg, rgba(245, 192, 0, 0.55) 0%, rgba(245, 192, 0, 0.9) 100%);
          }
          .mdash-bar-fav {
            background: linear-gradient(90deg, rgba(255, 82, 82, 0.35) 0%, rgba(255, 82, 82, 0.65) 100%);
          }
          .mdash-bar-num {
            position: relative;
            z-index: 1;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            height: 100%;
            padding: 0 10px;
            font-weight: 800;
            font-size: 0.82rem;
            color: var(--secondary);
            font-variant-numeric: tabular-nums;
          }

          .mdash-empty {
            text-align: center;
            padding: 36px 20px;
            color: var(--text-secondary);
          }
          .mdash-empty p { margin: 14px 0 18px; line-height: 1.65; }
          .mdash-btn-outline {
            display: inline-block;
            padding: 10px 18px;
            border-radius: 12px;
            border: 2px solid var(--primary);
            color: var(--secondary);
            font-weight: 800;
            text-decoration: none;
            font-size: 0.9rem;
          }

          .mdash-tip {
            margin-top: 18px;
            padding: 18px 20px;
            border-radius: 14px;
            background: linear-gradient(180deg, var(--surface) 0%, var(--white) 100%);
            border: 1px solid var(--border);
          }
          .mdash-tip h3 { margin: 0 0 8px; font-size: 1.05rem; color: var(--secondary); }
          .mdash-tip p {
            margin: 0;
            color: var(--text-secondary);
            line-height: 1.75;
            font-size: 0.92rem;
          }
          .mdash-muted { color: var(--text-secondary); }
        `}})]})})},M4=()=>{const[e,t]=m.useState([]),[n,a]=m.useState(!0),o=async()=>{a(!0);try{const h=await sp();t(h)}finally{a(!1)}};m.useEffect(()=>{o()},[]);const l=async h=>{await Wy(h.id,{is_archived:!h.is_archived}),await o()},d=async h=>{confirm("متأكد بدك تحذف المنتج نهائياً؟")&&(await Dj(h.id),await o())};return i.jsx(Ce,{children:i.jsxs("div",{className:"merchant-products",children:[i.jsxs("div",{className:"flex-between",style:{marginBottom:16},children:[i.jsx("h1",{style:{fontSize:"1.8rem"},children:"منتجاتي"}),i.jsxs(me,{to:"/merchant/products/new",className:"btn-primary",style:{width:"auto",display:"inline-flex",gap:10,alignItems:"center"},children:[i.jsx(oc,{size:18}),"إضافة منتج"]})]}),i.jsxs("div",{className:"card",style:{marginBottom:14,padding:"12px 16px",background:"var(--primary-light)",borderColor:"rgba(245,192,0,0.45)",fontSize:"0.92rem",lineHeight:1.55,color:"var(--text-primary)"},children:[i.jsx("strong",{children:"مهم:"})," المنتجات ذات الحالة «مؤرشف» لا تظهر في صفحة المتجر للمتسوّقين ولا على الخريطة كقائمة منتجات. اضغط أيقونة الأرشيف بجانب المنتج لإلغاء الأرشفة وجعله «نشطاً»."]}),i.jsx("div",{className:"card",style:{padding:0,overflow:"hidden"},children:n?i.jsx("div",{style:{padding:18},children:"جاري التحميل..."}):e.length===0?i.jsx("div",{style:{padding:18},children:"لا يوجد منتجات بعد."}):i.jsxs("div",{className:"table",children:[i.jsxs("div",{className:"row head",children:[i.jsx("div",{children:"المنتج"}),i.jsx("div",{children:"السعر"}),i.jsx("div",{children:"الحالة"}),i.jsx("div",{children:"إجراءات"})]}),e.map(h=>i.jsxs("div",{className:"row product-row",children:[i.jsxs("div",{className:"cell productCell",children:[i.jsx("div",{className:"product-thumb-wrap",children:Ie(h).length>0?i.jsx(jt,{images:Ie(h),alt:h.name,height:88,borderRadius:14}):i.jsx("div",{className:"thumb thumb-empty",children:i.jsx(Bt,{size:18})})}),i.jsxs("div",{className:"product-text",children:[i.jsx("div",{className:"product-name",children:h.name}),i.jsx("div",{className:"product-desc",children:h.description||"—"})]})]}),i.jsxs("div",{className:"product-row-meta",children:[i.jsx("div",{className:"cell cell-price","data-label":"السعر",children:i.jsxs("span",{className:"price-value",children:[h.price," ₪"]})}),i.jsxs("div",{className:"cell cell-status","data-label":"الحالة",children:[i.jsx("span",{className:"badge",style:{background:h.is_archived?"#eee":"var(--primary)",color:"var(--secondary)"},children:h.is_archived?"مؤرشف":"نشط"}),h.is_archived&&i.jsx("div",{className:"archived-hint",children:"مخفي عن صفحة المتجر"})]})]}),i.jsxs("div",{className:"cell actions","data-label":"إجراءات",children:[i.jsx(me,{to:`/merchant/products/${h.id}/edit`,className:"iconBtn",title:"تعديل",children:i.jsx(tp,{size:18})}),h.is_archived?null:i.jsx(me,{to:"/merchant/ads",state:{prefillFromProduct:{id:h.id,name:h.name||"",description:(h.description||"").trim(),price:h.price,image:h.image||null,images:Ie(h)}},className:"iconBtn",title:"إعلان ممول لهذا المنتج","aria-label":"إعلان ممول لهذا المنتج",children:i.jsx($n,{size:18})}),i.jsx("button",{type:"button",className:"iconBtn",onClick:()=>l(h),title:h.is_archived?"إلغاء الأرشفة":"أرشفة",children:i.jsx(G_,{size:18})}),i.jsx("button",{type:"button",className:"iconBtn danger",onClick:()=>d(h),title:"حذف",children:i.jsx(Qr,{size:18})})]})]},h.id))]})}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .merchant-products{
            max-width: 1240px;
            margin-inline: auto;
            padding-inline: clamp(8px, 2.2vw, 22px);
            padding-bottom: 32px;
            box-sizing: border-box;
          }
          .merchant-products .table { display: flex; flex-direction: column; }
          .merchant-products .product-row-meta { display: contents; }
          .merchant-products .row {
            display: grid;
            grid-template-columns: 1.6fr 0.6fr 0.6fr 0.8fr;
            gap: 12px;
            padding: 14px 16px;
            align-items: center;
            border-top: 1px solid var(--border);
          }
          .merchant-products .row.head { background: var(--surface); font-weight: 900; border-top: none; }
          .merchant-products .productCell { display: flex; gap: 12px; align-items: center; min-width: 0; }
          .merchant-products .product-text { min-width: 0; }
          .merchant-products .product-name { font-weight: 900; color: var(--text-primary); }
          .merchant-products .product-desc {
            color: var(--text-secondary);
            font-size: 0.9rem;
            line-height: 1.45;
            margin-top: 4px;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .merchant-products .product-thumb-wrap {
            flex-shrink: 0;
            width: 108px;
            max-width: 36vw;
          }
          .merchant-products .thumb-empty {
            height: 88px;
            border-radius: 14px;
            background: var(--primary-light);
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            border: 1px solid rgba(245,192,0,0.25);
          }
          .merchant-products .price-value { font-weight: 800; font-variant-numeric: tabular-nums; }
          .merchant-products .cell-status { display: flex; flex-direction: column; align-items: flex-start; gap: 2px; }
          .merchant-products .archived-hint { font-size: 0.78rem; color: #c0392b; margin-top: 4px; font-weight: 700; line-height: 1.35; }
          .merchant-products .actions { display: flex; gap: 10px; justify-content: flex-start; flex-wrap: wrap; }
          .merchant-products .iconBtn {
            border: 1px solid var(--border);
            background: var(--white);
            padding: 8px;
            border-radius: 12px;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: var(--secondary);
          }
          .merchant-products .iconBtn:hover { background: var(--primary-light); }
          .merchant-products .iconBtn.danger { color: #c0392b; }

          @media (max-width: 900px) {
            .merchant-products .row.head { display: none; }
            .merchant-products .table {
              background: var(--surface);
              padding: 10px 8px 14px;
              gap: 0;
              border-radius: 0 0 var(--radius-lg) var(--radius-lg);
            }
            .merchant-products .row.product-row {
              display: flex;
              flex-direction: column;
              align-items: stretch;
              gap: 14px;
              padding: 16px 14px;
              margin: 0 4px 12px;
              border: 1px solid var(--border);
              border-radius: 14px;
              background: var(--white);
              box-shadow: var(--shadow-sm);
              border-top: 1px solid var(--border);
            }
            .merchant-products .row.product-row:last-child { margin-bottom: 4px; }
            .merchant-products .product-row-meta {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 12px 14px;
              align-items: start;
              width: 100%;
            }
            .merchant-products .productCell { align-items: flex-start; }
            .merchant-products .product-thumb-wrap { width: 120px; max-width: 55vw; }
            .merchant-products .thumb-empty { height: 100px; border-radius: 16px; }
            .merchant-products .cell[data-label]::before {
              content: attr(data-label);
              display: block;
              font-size: 0.72rem;
              font-weight: 800;
              color: var(--text-secondary);
              margin-bottom: 6px;
              text-transform: none;
              letter-spacing: 0.02em;
            }
            .merchant-products .actions { justify-content: flex-end; padding-top: 4px; border-top: 1px dashed var(--border); }
            .merchant-products .iconBtn { min-width: 44px; min-height: 44px; padding: 10px; }
          }

          @media (max-width: 380px) {
            .merchant-products .product-row-meta { grid-template-columns: 1fr; }
          }
        `}})]})})};function d1({urls:e=[],max:t=5}){const n=(Array.isArray(e)?e:[]).filter(Boolean).slice(0,t);if(n.length===0)return null;const a=72;return i.jsxs("div",{style:{marginBottom:12},"aria-label":"معاينة الصور المحددة",children:[i.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:10,alignItems:"center"},children:n.map((o,l)=>i.jsxs("div",{style:{width:a,height:a,borderRadius:12,overflow:"hidden",border:"2px solid rgba(245, 192, 0, 0.55)",background:"var(--grey-light)",flexShrink:0,position:"relative",boxSizing:"border-box"},children:[i.jsx("img",{src:o,alt:"",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}),i.jsx("span",{style:{position:"absolute",top:4,insetInlineStart:4,minWidth:20,height:20,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:900,background:"rgba(30, 30, 46, 0.88)",color:"#fff",borderRadius:6,padding:"0 5px",lineHeight:1},children:l+1})]},`${l}-${o.slice(0,32)}`))}),i.jsxs("p",{style:{margin:"10px 0 0",fontSize:"0.82rem",fontWeight:800,color:"var(--text-secondary)"},children:[n.length," من ",t," صورة — الترتيب كما سيظهر في المتجر (الأولى غلاف)"]})]})}function Xf(e){return`${e.name}-${e.size}-${e.lastModified}`}function u1(e,t,n){const a=new Set(e.map(Xf)),o=[...e];let l=0;for(const d of t){if(o.length>=n){l+=1;continue}const h=Xf(d);a.has(h)||(a.add(h),o.push(d))}return{merged:o,skippedForCap:l}}const T4=()=>i.jsx("span",{title:"الشيكل الجديد (₪)","aria-hidden":!0,style:{fontWeight:900,fontSize:"1.05rem",lineHeight:1,color:"var(--secondary)"},children:"₪"}),eg=3,Za=5,$a=5,tg=()=>{const{id:e}=ga(),t=!!e,n=ct(),[a,o]=m.useState(""),[l,d]=m.useState(""),[h,u]=m.useState(""),[f,y]=m.useState([""]),[x,v]=m.useState([]),[_,b]=m.useState([]),[z,C]=m.useState(!1),N=m.useMemo(()=>_.map(P=>URL.createObjectURL(P)),[_]);m.useEffect(()=>()=>{N.forEach(P=>URL.revokeObjectURL(P))},[N]);const w=_.length>0?N:x;m.useEffect(()=>{(async()=>{if(!t)return;const O=await Bj(e);o(O.name||""),d(O.price??""),u(O.description||"");const I=Array.isArray(O.product_features)?O.product_features.filter(Boolean):[];y(I.length?I.slice(0,$a):[""]),v(Ie(O)),b([])})()},[e,t]);const S=P=>{if(!(P!=null&&P.length))return;const O=Array.from(P);if(O.find(F=>F.size/(1024*1024)>eg)){alert(`حجم إحدى الصور كبير. الحد الأقصى ${eg}MB لكل صورة`);return}b(F=>{const{merged:V,skippedForCap:D}=u1(F,O,Za);return D>0&&alert(`وصلت للحد الأقصى ${Za} صور. لم تُضف ${D} ملفاً من هذه الجولة — احذف بـ «إلغاء الصور» أو أرسل ثم عدّل لاحقاً.`),V})},j=async P=>{P.preventDefault(),C(!0);try{const O=f.map(F=>String(F||"").trim()).filter(Boolean).slice(0,$a),I=new FormData;if(I.append("name",a),I.append("price",l),I.append("description",h),I.append("product_features",JSON.stringify(O)),t){if(_.length>0)for(const F of _)I.append("images",F);await Wy(e,I)}else{for(const F of _)I.append("images",F);await Fj(I)}n("/merchant/products")}finally{C(!1)}},E=()=>{y(P=>P.length>=$a?P:[...P,""])},M=P=>{y(O=>{const I=O.filter((F,V)=>V!==P);return I.length?I:[""]})};return i.jsx(Ce,{children:i.jsxs("div",{className:"merchant-product-form",children:[i.jsx("h1",{style:{marginBottom:14,fontSize:"1.8rem"},children:t?"تعديل منتج":"إضافة منتج"}),i.jsx("div",{className:"card",style:{maxWidth:720,margin:"0 auto"},children:i.jsxs("form",{onSubmit:j,children:[i.jsx(wt,{icon:i.jsx(kr,{size:18}),placeholder:"اسم المنتج",value:a,onChange:P=>o(P.target.value),required:!0}),i.jsx(wt,{icon:i.jsx(T4,{}),placeholder:"السعر بالشيكل (₪)",value:l,onChange:P=>d(P.target.value),required:!0}),i.jsxs("div",{className:"input-group",children:[i.jsx("div",{className:"input-icon",children:i.jsx(Vx,{size:18})}),i.jsx("textarea",{placeholder:"وصف المنتج",value:h,onChange:P=>u(P.target.value),style:{width:"100%",padding:"0.85rem 1rem",borderRadius:"var(--radius-md)",border:"1.5px solid var(--border)",background:"var(--surface)",minHeight:110,resize:"vertical"}})]}),i.jsxs("div",{style:{marginTop:18,paddingTop:16,borderTop:"1px solid var(--border)"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:8,fontWeight:800},children:[i.jsx(yn,{size:18}),"تفاصيل المنتج (اختياري — حتى ",$a,")"]}),i.jsx("p",{style:{margin:"0 0 10px",fontSize:"0.88rem",color:"var(--text-secondary)",lineHeight:1.55},children:"اكتب تفاصيل قصيرة تظهر للمتسوّق (مثل: المقاس، اللون، الخامة…). كل سطر = تفصيل واحد."}),f.map((P,O)=>i.jsxs("div",{style:{display:"flex",gap:8,marginBottom:8,alignItems:"center"},children:[i.jsx("input",{type:"text",value:P,maxLength:80,placeholder:`تفصيل ${O+1}`,onChange:I=>{const F=I.target.value;y(V=>V.map((D,ae)=>ae===O?F:D))},style:{flex:1,padding:"0.75rem 0.9rem",borderRadius:"var(--radius-md)",border:"1.5px solid var(--border)",background:"var(--surface)"}}),f.length>1?i.jsx("button",{type:"button",onClick:()=>M(O),style:{padding:"8px 10px",borderRadius:10,border:"1px solid var(--border)",background:"var(--surface)",cursor:"pointer",fontWeight:700},children:"حذف"}):null]},O)),f.length<$a?i.jsx("button",{type:"button",onClick:E,style:{marginTop:4,padding:"8px 14px",borderRadius:10,border:"1px dashed var(--border)",background:"transparent",cursor:"pointer",fontWeight:700,color:"var(--secondary)"},children:"+ إضافة تفصيل"}):null]}),i.jsxs("div",{className:"card",style:{padding:14,marginBottom:14,background:"var(--surface)"},children:[i.jsx("div",{style:{fontWeight:900,marginBottom:6},children:"صور المنتج (معرض واحد)"}),i.jsxs("p",{style:{margin:"0 0 12px",fontSize:"0.9rem",color:"var(--text-secondary)",lineHeight:1.5},children:["يمكنك إضافة حتى ",i.jsxs("strong",{children:[Za," صور"]}),". اختر من المعرض عدة مرات — كل اختيار ",i.jsx("strong",{children:"يُضاف"})," ","للصور الحالية حتى يكتمل العدد، وليس استبدالاً لها. يمكنك اختيار عدة ملفات دفعة واحدة أيضاً (Ctrl أو ⌘)."," ",t?"عند الإرسال بصور جديدة تُستبدل صور المتجر السابقة كلها بهذه المجموعة.":null]}),w.length>0?i.jsxs("div",{style:{marginBottom:12},children:[i.jsx(d1,{urls:w,max:Za}),i.jsx(jt,{images:w,alt:"",height:220,borderRadius:14})]}):i.jsx("div",{className:"thumbLg",style:{marginBottom:12,width:"100%",maxWidth:280,height:160,borderRadius:20,marginInline:"auto"},children:i.jsx(Bt,{size:36})}),i.jsxs("label",{className:"iconBtn merchant-file-pick-label",style:{cursor:"pointer",display:"inline-flex",gap:8,position:"relative",overflow:"hidden",alignItems:"center"},children:[i.jsx(Bt,{size:18}),t?"اختر صوراً جديدة (تستبدل الحالي)":`اختر الصور (حتى ${Za})`,i.jsx("input",{type:"file",accept:"image/*,.jpg,.jpeg,.png,.webp,.heif,.heic",multiple:!0,style:{position:"absolute",inset:0,width:"100%",height:"100%",opacity:0,cursor:"pointer",fontSize:"inherit",zIndex:2},onChange:P=>{const O=P.target.files;O!=null&&O.length&&S(O),P.target.value=""}})]}),_.length>0?i.jsx("button",{type:"button",className:"iconBtn",style:{marginInlineStart:10,background:"transparent"},onClick:()=>b([]),children:"إلغاء الصور المختارة"}):null]}),i.jsx(St,{type:"submit",loading:z,style:{width:"100%"},children:t?"حفظ التعديل":"إضافة المنتج"})]})}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .merchant-product-form{
            max-width: 1240px;
            margin-inline: auto;
            padding-inline: clamp(8px, 2.2vw, 22px);
            padding-bottom: 32px;
            box-sizing: border-box;
          }
          .thumbLg { background: var(--primary-light); border: 1px solid rgba(245,192,0,0.25); display: flex; align-items: center; justify-content: center; overflow: hidden; }
          .iconBtn { border: 1px solid var(--border); background: var(--white); padding: 10px 14px; border-radius: 14px; font-weight: 900; color: var(--secondary); display: inline-flex; align-items: center; gap: 8px; }
          .iconBtn:hover { background: var(--primary-light); }
          .merchant-file-pick-label input[type=file]::-webkit-file-upload-button { cursor: pointer; }
        `}})]})})},Ei=3,Bn=5;function Td(e){return e?Ie(e).length>0:!1}function ng(e){return e==null||typeof e!="string"?"":e.trim().toLowerCase().replace(/\u0640/g,"").replace(/[\u064B-\u0652\u0670]/g,"").replace(/[أإآٱ]/g,"ا").replace(/ى/g,"ي").replace(/ة/g,"ه")}function A4(e,t){const n=ng(t);return!!(!n||[e==null?void 0:e.name,e==null?void 0:e.description,...(Array.isArray(e==null?void 0:e.product_features)?e.product_features:[]).map(o=>String(o??""))].some(o=>ng(o).includes(n))||String((e==null?void 0:e.price)??"").includes(t.trim())||String((e==null?void 0:e.id)??"")===t.trim())}const qa="balipay_wallet",Ad="bank_palestine";async function rg(e,t="product"){if(!e||typeof e!="string")return null;try{const n=await fetch(e,{mode:"cors",credentials:"include"});if(!n.ok)return null;const a=await n.blob();if(!a.size)return null;const o=a.type&&a.type.split("/")[1]||"jpg",l=String(t||"product").replace(/[^\w\u0600-\u06FF-]/g,"").slice(0,48)||"product";return new File([a],`${l}-ad.${o}`,{type:a.type||"image/jpeg"})}catch{return null}}const I4=()=>{const e=Kt(),t=ct(),n=m.useRef(null),[a,o]=m.useState(""),[l,d]=m.useState(""),[h,u]=m.useState(""),[f,y]=m.useState(qa),[x,v]=m.useState([]),[_,b]=m.useState(null),[z,C]=m.useState(!1),[N,w]=m.useState([]),[S,j]=m.useState(""),[E,M]=m.useState("");m.useEffect(()=>{var G;const W=(G=e.state)==null?void 0:G.prefillFromProduct;if(!W||W.id==null)return;j(String(W.id)),o(String(W.name||"").trim()),d(String(W.description||"").trim()),u(W.price!=null&&W.price!==""?String(W.price):""),M(""),v([]),t(e.pathname,{replace:!0,state:{}});const R=Array.isArray(W.images)&&W.images.length>0?W.images:W.image?[W.image]:[];R.length>0&&Promise.all(R.slice(0,Bn).map((X,H)=>rg(X,`${W.name||"ad"}-${H}`))).then(X=>{v(X.filter(Boolean))});const te=window.setTimeout(()=>{var X;(X=n.current)==null||X.scrollIntoView({behavior:"smooth",block:"start"})},150);return()=>window.clearTimeout(te)},[e.state,e.pathname,t]),m.useEffect(()=>{let W=!1;return(async()=>{try{const R=await sp(),te=Array.isArray(R)?R:(R==null?void 0:R.results)??[];W||w(te.filter(G=>!G.is_archived))}catch{W||w([])}})(),()=>{W=!0}},[]);const P=m.useMemo(()=>x.map(W=>URL.createObjectURL(W)),[x]);m.useEffect(()=>()=>{P.forEach(W=>URL.revokeObjectURL(W))},[P]);const O=m.useMemo(()=>_?URL.createObjectURL(_):"",[_]),I=m.useMemo(()=>S?N.find(W=>String(W.id)===String(S))??null:null,[N,S]),F=!S||Td(I),V=!S||(I?!Td(I):!0),D=m.useMemo(()=>{const W=E.trim();let R=N;W&&(R=N.filter(G=>A4(G,W)));const te=S?N.find(G=>String(G.id)===String(S)):null;return te&&!R.some(G=>G.id===te.id)&&(R=[te,...R]),R},[N,E,S]),ae=W=>{const R=W.target.value;if(j(R),!R){v([]);return}const te=N.find(X=>String(X.id)===R);if(!te)return;o(X=>X.trim()?X:te.name||""),d(X=>X.trim()?X:String(te.description||"").trim()),u(X=>X.trim()?X:String(te.price??""));const G=Ie(te);G.length>0?Promise.all(G.slice(0,Bn).map((X,H)=>rg(X,`${te.name||"ad"}-${H}`))).then(X=>{v(X.filter(Boolean))}):v([])},oe=W=>{if(!(W!=null&&W.length))return;const R=Array.from(W);if(R.find(G=>G.size/(1024*1024)>Ei)){alert(`حجم إحدى الصور كبير. الحد الأقصى ${Ei}MB لكل صورة`);return}v(G=>{const{merged:X,skippedForCap:H}=u1(G,R,Bn);return H>0&&alert(`وصلت للحد الأقصى ${Bn} صور للإعلان. لم تُضف ${H} ملفاً من هذه الجولة.`),X})},Q=W=>{if(!W)return;if(W.size/(1024*1024)>Ei){alert(`حجم الصورة كبير. الحد الأقصى ${Ei}MB`);return}b(W)},J=async W=>{if(W.preventDefault(),V&&x.length===0)return alert("اختر صوراً للإعلان، أو اربط الطلب بمنتج له صور في «منتجاتي» لنسخها تلقائياً على السيرفر.");if(F&&!l.trim())return alert("يرجى إدخال تفاصيل الإعلان.");if(!_)return alert("لازم ترفع إشعار دفع الإعلان");const R=parseFloat(String(h).replace(",","."));if(!Number.isFinite(R)||R<=0)return alert("أدخل سعر المنتج المعروض في الإعلان (رقم أكبر من صفر)");C(!0);try{const te=new FormData;te.append("title",a),te.append("description",l.trim()),S&&te.append("product",String(S)),te.append("product_price",String(R)),te.append("payment_method",f);for(const G of x)te.append("images",G);te.append("payment_receipt_image",_),await Uj(te),o(""),d(""),u(""),j(""),M(""),y(qa),v([]),b(null)}finally{C(!1)}};return i.jsx(Ce,{children:i.jsxs("div",{className:"merchant-ads",children:[i.jsxs("div",{className:"flex-between",style:{marginBottom:14,flexWrap:"wrap",gap:12},children:[i.jsx("h1",{style:{fontSize:"1.8rem",margin:0},children:"طلب إعلان ممول"}),i.jsx(me,{to:"/merchant/my-ads",className:"iconBtn",style:{textDecoration:"none"},children:"إعلاناتي الممولة"})]}),i.jsxs("div",{className:"card",style:{maxWidth:820,margin:"0 auto 18px auto"},children:[i.jsx("h3",{style:{marginBottom:10},children:"طلب إعلان ممول"}),i.jsxs("div",{className:"card",style:{padding:"14px 16px",marginBottom:16,background:"linear-gradient(135deg, #FFF9E6 0%, #fff 100%)",border:"1px solid rgba(245,192,0,0.35)",borderRadius:14,lineHeight:1.65,fontSize:"0.95rem"},children:[i.jsx("strong",{style:{color:"var(--secondary)"},children:"تنبيه مهم:"})," رسوم الإعلان الممول"," ",i.jsx("strong",{children:"5 شيكل"})," تُسدَّد عبر القناة التي تختارها أدناه، ومدة ظهور الإعلان بعد قبول الإدارة"," ",i.jsx("strong",{children:"24 ساعة"})," فقط. يمكنك إما ربط الإعلان بمنتج من صفحة «منتجاتي»، أو ترك الإعلان مستقلاً."]}),i.jsxs("div",{className:"card",style:{padding:"14px 16px",marginBottom:16,background:"linear-gradient(135deg, rgba(230, 239, 232, 0.9) 0%, #fff 100%)",border:"1px solid rgba(2, 119, 189, 0.22)",borderRadius:14,lineHeight:1.65,fontSize:"0.95rem"},children:[i.jsx("strong",{style:{color:"var(--secondary)"},children:"ملاحظة التحويل:"})," رقم التحويل الخاص بـ"," ",i.jsx("strong",{children:"رادار"})," هو ",i.jsx("strong",{dir:"ltr",children:"0592377078"})," باسم ",i.jsx("strong",{children:"اسماعيل عبدالعال"})," ","(بنك ومحفظة). سيتم الرد على طلبك خلال ",i.jsx("strong",{children:"24 ساعة"}),"."]}),i.jsxs("form",{ref:n,onSubmit:J,children:[i.jsx(wt,{icon:i.jsx($n,{size:18}),placeholder:"عنوان الإعلان",value:a,onChange:W=>o(W.target.value),required:!0}),i.jsxs("div",{style:{marginBottom:14},children:[i.jsx("div",{style:{fontWeight:900,marginBottom:8},children:"ربط اختياري بمنتج من «منتجاتي»"}),i.jsxs("p",{style:{margin:"0 0 8px",fontSize:"0.88rem",color:"var(--text-secondary)"},children:["اترك القائمة على «إعلان مستقل» أو اختر منتجاً (غير مؤرشف). عند الاختيار نملأ العنوان والوصف والسعر، ونحاول جلب حتى ",Bn," صور من معرض المنتج للمعاينة. منتج بلا صور: يمكنك رفع صور الإعلان وتفاصيل الإعلان اختيارية."]}),i.jsx(wt,{type:"search",autoComplete:"off",enterKeyHint:"search",icon:i.jsx(Mo,{size:18}),placeholder:"ابحث باسم المنتج، الوصف، السعر…",value:E,onChange:W=>M(W.target.value),onKeyDown:W=>{W.key==="Enter"&&W.preventDefault()}}),i.jsxs("select",{value:S,onChange:ae,style:{width:"100%",padding:"0.85rem 1rem",borderRadius:"var(--radius-md)",border:"1.5px solid var(--border)",background:"var(--surface)",fontSize:"0.95rem",fontFamily:"inherit",marginTop:8},children:[i.jsx("option",{value:"",children:"— إعلان مستقل (بدون منتج في الكتالوج) —"}),D.map(W=>i.jsxs("option",{value:W.id,children:[W.name," — ",W.price," ₪"]},W.id))]}),N.length>0&&D.length===0?i.jsxs("p",{style:{marginTop:8,fontSize:"0.85rem",color:"var(--text-secondary)"},children:["لا نتائج مطابقة لـ «",E.trim(),"». جرّب بحثاً أقصر أو امسح الحقل لعرض الكل."]}):null,N.length===0?i.jsx("p",{style:{marginTop:8,fontSize:"0.85rem",color:"var(--text-secondary)"},children:"لا توجد منتجات بعد — يمكنك هذا الطلب كإعلان مستقل، أو أضف منتجات من «منتجاتي» لاحقاً لربط إعلاناتك بها."}):null]}),i.jsx(wt,{type:"number",inputMode:"decimal",step:"0.01",min:"0.01",placeholder:"سعر المنتج المعروض في الإعلان (₪)",value:h,onChange:W=>u(W.target.value),required:!0}),i.jsxs("div",{className:"payment-method-block",style:{marginBottom:16},children:[i.jsx("div",{style:{fontWeight:900,marginBottom:8},children:"قناة دفع رسوم الإعلان"}),i.jsxs("div",{className:"payment-method-switch",role:"group","aria-label":"طريقة الدفع",style:{display:"grid",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",borderRadius:14,overflow:"hidden",border:"1.5px solid var(--border)",background:"var(--surface)"},children:[i.jsx("button",{type:"button",onClick:()=>y(qa),style:{padding:"12px 8px",border:"none",cursor:"pointer",fontWeight:800,fontFamily:"inherit",fontSize:"clamp(0.76rem, 2.8vw, 0.9rem)",lineHeight:1.25,textAlign:"center",background:f===qa?"var(--primary)":"transparent",color:f===qa?"var(--secondary)":"var(--text-secondary)"},children:"محفظة بال باي"}),i.jsx("button",{type:"button",onClick:()=>y(Ad),style:{padding:"12px 8px",border:"none",cursor:"pointer",fontWeight:800,fontFamily:"inherit",fontSize:"clamp(0.76rem, 2.8vw, 0.9rem)",lineHeight:1.25,textAlign:"center",borderInlineStart:"1.5px solid var(--border)",background:f===Ad?"var(--primary)":"transparent",color:f===Ad?"var(--secondary)":"var(--text-secondary)"},children:"بنك فلسطين"})]})]}),i.jsxs("div",{className:"input-group",children:[i.jsxs("div",{style:{fontWeight:800,marginBottom:8,color:"var(--secondary)"},children:["تفاصيل الإعلان",F?null:i.jsxs("span",{style:{fontWeight:600,color:"var(--text-secondary)",fontSize:"0.88rem"},children:[" ","(اختياري — منتج بلا صور)"]})]}),i.jsx("textarea",{placeholder:F?"تفاصيل الإعلان":"يمكنك تركه فارغاً عند ربط منتج بلا صور في الكتالوج",value:l,onChange:W=>d(W.target.value),style:{width:"100%",padding:"0.85rem 1rem",borderRadius:"var(--radius-md)",border:"1.5px solid var(--border)",background:"var(--surface)",minHeight:110,resize:"vertical"},required:F})]}),i.jsxs("div",{className:"card",style:{padding:14,marginBottom:14,background:"var(--surface)"},children:[i.jsxs("div",{style:{marginBottom:10,color:"var(--text-secondary)",fontSize:"0.88rem",lineHeight:1.55},children:["يمكن رفع حتى ",i.jsxs("strong",{children:[Bn," صور"]}),".                 كل مرة تضغط «اختر صوراً» تُضاف الصور الجديدة إلى التي اخترتها سابقاً حتى يكتمل العدد — دون استبدال ما أضفته قبلها. الصورة الأولى غلاف حيث يُعرض صورة واحدة فقط."]}),i.jsxs("div",{style:{display:"flex",gap:14,alignItems:"flex-start",justifyContent:"space-between",flexWrap:"wrap"},children:[i.jsx("div",{style:{flex:"1 1 220px",minWidth:0},children:P.length>0?i.jsxs(i.Fragment,{children:[i.jsx(d1,{urls:P,max:Bn}),i.jsx(jt,{images:P,height:160,borderRadius:16})]}):i.jsx("div",{className:"thumbLg",style:{width:"100%",maxWidth:280,height:120},children:i.jsx(Bt,{size:28})})}),i.jsxs("div",{style:{flex:"1 1 200px"},children:[i.jsxs("div",{style:{fontWeight:900},children:["صور الإعلان",V?i.jsxs("span",{style:{fontWeight:600,color:"var(--text-secondary)",fontSize:"0.85rem"},children:[" ","(مطلوب)"]}):i.jsxs("span",{style:{fontWeight:600,color:"var(--text-secondary)",fontSize:"0.85rem"},children:[" ","(اختياري — تُنسخ من معرض المنتج تلقائياً إن لم ترفع صوراً هنا)"]})]}),i.jsxs("div",{style:{color:"var(--text-secondary)",fontSize:"0.9rem",marginTop:6},children:["حتى ",Bn," صور — PNG/JPG حتى ",Ei,"MB لكل صورة",Td(I)&&x.length===0?i.jsxs("span",{children:[" ","— يُفضَّل رفع صوراً؛ وإلا تُنسخ من معرض المنتج عند الإرسال."]}):null]}),i.jsxs("label",{className:"iconBtn merchant-file-pick-label",style:{cursor:"pointer",marginTop:12,display:"inline-flex",alignItems:"center",position:"relative",overflow:"hidden"},children:[V?`اختر صوراً (حتى ${Bn})`:"تغيير صور الإعلان (اختياري)",i.jsx("input",{type:"file",accept:"image/*,.jpg,.jpeg,.png,.webp,.heif,.heic",multiple:!0,style:{position:"absolute",inset:0,width:"100%",height:"100%",opacity:0,cursor:"pointer",fontSize:"inherit",zIndex:2},onChange:W=>{const R=W.target.files;R!=null&&R.length&&oe(R),W.target.value=""}})]})]})]})]}),i.jsx("div",{className:"card",style:{padding:14,marginBottom:14,background:"var(--surface)"},children:i.jsxs("div",{style:{display:"flex",gap:14,alignItems:"center",justifyContent:"space-between",flexWrap:"wrap"},children:[i.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[i.jsx("div",{className:"thumbLg",children:O?i.jsx("img",{src:O,alt:"receipt"}):i.jsx(Bt,{size:22})}),i.jsxs("div",{children:[i.jsx("div",{style:{fontWeight:900},children:"إشعار الدفع"}),i.jsxs("div",{style:{color:"var(--text-secondary)",fontSize:"0.9rem"},children:["PNG/JPG حتى ",Ei,"MB"]})]})]}),i.jsxs("label",{className:"iconBtn merchant-file-pick-label",style:{cursor:"pointer",display:"inline-flex",gap:8,alignItems:"center",position:"relative",overflow:"hidden"},children:[i.jsx(hy,{size:18}),"رفع إشعار الدفع",i.jsx("input",{type:"file",accept:"image/*,.jpg,.jpeg,.png,.webp",style:{position:"absolute",inset:0,width:"100%",height:"100%",opacity:0,cursor:"pointer",fontSize:"inherit",zIndex:2},onChange:W=>{var te;const R=(te=W.target.files)==null?void 0:te[0];R&&Q(R),W.target.value=""}})]})]})}),i.jsx(St,{type:"submit",loading:z,style:{width:"100%"},children:"إرسال الطلب"})]})]}),i.jsxs("p",{style:{textAlign:"center",marginTop:18,color:"var(--text-secondary)"},children:["لمراجعة كل إعلاناتك (المنتهية والنشطة وغيرها) افتح"," ",i.jsx(me,{to:"/merchant/my-ads",style:{fontWeight:800,color:"var(--secondary)"},children:"إعلاناتي الممولة"}),"."]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .merchant-ads{
            max-width: 1240px;
            margin-inline: auto;
            padding-inline: clamp(8px, 2.2vw, 22px);
            padding-bottom: 32px;
            box-sizing: border-box;
          }
          .thumbLg { width: 72px; height: 72px; border-radius: 20px; background: var(--primary-light); border: 1px solid rgba(245,192,0,0.25); display: flex; align-items: center; justify-content: center; overflow: hidden; }
          .thumbLg img { width: 100%; height: 100%; object-fit: cover; }
          .iconBtn { border: 1px solid var(--border); background: var(--white); padding: 10px 14px; border-radius: 14px; font-weight: 900; color: var(--secondary); display: inline-flex; align-items: center; gap: 8px; }
          .iconBtn:hover { background: var(--primary-light); }
          .merchant-file-pick-label input[type=file]::-webkit-file-upload-button { cursor: pointer; }
        `}})]})})};function eh(e){if(!e)return"—";try{const t=new Date(e);return Number.isNaN(t.getTime())?String(e):t.toLocaleString("ar",{dateStyle:"medium",timeStyle:"short"})}catch{return String(e)}}function R4(e){if(e.status==="pending")return{label:"بانتظار موافقة الإدارة",className:"mb-pill mb-pill-pending"};if(e.status==="rejected")return{label:"مرفوض",className:"mb-pill mb-pill-rejected"};if(e.status==="expired")return{label:"منتهي الصلاحية",className:"mb-pill mb-pill-expired"};if(e.status==="active"&&e.approved_at){const t=new Date(e.approved_at),n=new Date(t.getTime()+24*60*60*1e3);return Date.now()<=n.getTime()?{label:`يعرض للمتسوّقين حتى ${eh(n.toISOString())}`,className:"mb-pill mb-pill-active"}:{label:"نافذة العرض منتهية (يُحدَّث السجل تلقائياً)",className:"mb-pill mb-pill-warn"}}return{label:e.status,className:"mb-pill"}}function O4(){const{showAlert:e,showConfirm:t,showPrompt:n}=Ue(),[a,o]=m.useState([]),[l,d]=m.useState(!0),h=m.useCallback(async()=>{d(!0);try{const y=await Wj();o(Array.isArray(y)?y:[])}catch(y){console.error(y),o([]),await e("تعذر تحميل إعلاناتك.","خطأ")}finally{d(!1)}},[e]);m.useEffect(()=>{h()},[h]);const u=async y=>{if(await t("حذف هذا الطلب؟ (مسموح فقط أثناء انتظار الموافقة)","تأكيد"))try{await Zj(y.id),await e("تم الحذف.","تم"),await h()}catch(v){console.error(v),await e("تعذر الحذف. قد لا يكون الطلب قيد الانتظار.","خطأ")}},f=async y=>{const x=await n("عدّل عنوان الإعلان","العنوان","تعديل الطلب",y.title||"");if(x==null)return;const v=await n("عدّل وصف الإعلان","الوصف","تعديل الطلب",y.description||"");if(v!=null)try{await Hj(y.id,{title:x,description:v}),await e("تم التعديل.","تم"),await h()}catch(_){console.error(_),await e("تعذر التعديل.","خطأ")}};return i.jsx(Ce,{children:i.jsxs("div",{className:"merchant-my-ads",children:[i.jsxs("div",{className:"flex-between",style:{marginBottom:14,flexWrap:"wrap",gap:12},children:[i.jsxs("div",{children:[i.jsx("h1",{style:{fontSize:"1.8rem",margin:"0 0 6px"},children:"إعلاناتي الممولة"}),i.jsx("p",{style:{margin:0,color:"var(--text-secondary)",lineHeight:1.65,maxWidth:640},children:"كل الطلبات التي أرسلتها: قيد المراجعة، المرفوضة، النشطة، أو المنتهية بعد 24 ساعة من الموافقة. التفاصيل كاملة لكل إعلان بما فيها المنتج المربوط (إن وُجد) وإشعار الدفع."})]}),i.jsx(me,{to:"/merchant/ads",className:"btn-request-ad",children:"طلب إعلان ممول جديد"})]}),l?i.jsx("p",{children:"جاري التحميل…"}):a.length===0?i.jsxs("div",{className:"card",style:{padding:24,textAlign:"center"},children:[i.jsx("p",{style:{margin:0,color:"var(--text-secondary)"},children:"لا توجد إعلانات بعد."}),i.jsx(me,{to:"/merchant/ads",style:{display:"inline-block",marginTop:14,fontWeight:800},children:"إرسال طلب إعلان ممول"})]}):i.jsx("div",{className:"my-ads-stack",children:a.map(y=>{var b;const x=R4(y),v=Ie(y),_=y.status==="pending";return i.jsx("article",{className:"card my-ad-card",children:i.jsxs("div",{className:"my-ad-top",children:[i.jsx("div",{className:"my-ad-media",children:v.length>0?i.jsx(jt,{images:v,height:200,borderRadius:16}):i.jsx("div",{className:"my-ad-media-empty",children:i.jsx(Bt,{size:32})})}),i.jsxs("div",{className:"my-ad-main",children:[i.jsxs("div",{className:"my-ad-title-row",children:[i.jsx("h2",{className:"my-ad-title",children:y.title}),i.jsx("span",{className:x.className,children:x.label})]}),i.jsxs("div",{className:"my-ad-meta",children:[i.jsxs("span",{children:[i.jsx("strong",{children:"سعر العرض في الإعلان:"})," ",Number(y.product_price)>0?`${Number(y.product_price).toFixed(2)} ₪`:"—"]}),i.jsxs("span",{children:[i.jsx("strong",{children:"قناة الدفع:"})," ",y.payment_method_label||"—"]}),i.jsxs("span",{children:[i.jsx("strong",{children:"أُنشئ:"})," ",eh(y.created_at)]}),y.approved_at?i.jsxs("span",{children:[i.jsx("strong",{children:"وافقت الإدارة:"})," ",eh(y.approved_at)]}):null]}),i.jsxs("div",{className:"my-ad-product-block",children:[i.jsx("strong",{children:"المنتج في الكتالوج:"})," ",y.product_details?i.jsxs(i.Fragment,{children:[i.jsx(me,{to:`/merchant/products/${y.product}/edit`,children:y.product_details.name}),i.jsxs("span",{className:"muted",children:[" ","— سعر الكتالوج: ",Number(y.product_details.price).toFixed(2)," ₪"]})]}):y.product?i.jsxs("span",{children:["مرتبط بمنتج #",y.product]}):i.jsx("span",{className:"muted",children:"إعلان مستقل (غير مربوط بمنتج في «منتجاتي»)"})]}),i.jsxs("div",{className:"my-ad-desc",children:[i.jsx("strong",{children:"تفاصيل الإعلان"}),i.jsx("p",{children:(b=y.description)!=null&&b.trim()?y.description:i.jsx("span",{className:"muted",children:"لا يوجد وصف"})})]}),y.payment_receipt_image?i.jsxs("div",{className:"my-ad-receipt",children:[i.jsx("strong",{children:"إشعار الدفع"}),i.jsx("a",{href:y.payment_receipt_image,target:"_blank",rel:"noreferrer",children:i.jsx("img",{src:y.payment_receipt_image,alt:"إشعار الدفع",className:"receipt-thumb"})})]}):null,_?i.jsxs("div",{className:"my-ad-actions",children:[i.jsxs("button",{type:"button",className:"iconBtn",onClick:()=>f(y),title:"تعديل سريع",children:[i.jsx(tp,{size:18}),"تعديل"]}),i.jsxs("button",{type:"button",className:"iconBtn danger",onClick:()=>u(y),title:"حذف",children:[i.jsx(Qr,{size:18}),"حذف"]})]}):null]})]})},y.id)})}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .merchant-my-ads{
            max-width: 1240px;
            margin-inline: auto;
            padding-inline: clamp(8px, 2.2vw, 22px);
            padding-bottom: 32px;
            box-sizing: border-box;
          }
          .merchant-my-ads .btn-request-ad {
            display: inline-flex; align-items: center; justify-content: center;
            padding: 12px 18px; border-radius: 14px; font-weight: 900; text-decoration: none;
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
            color: var(--secondary); box-shadow: var(--shadow-gold); white-space: nowrap;
          }
          .merchant-my-ads .btn-request-ad:hover { filter: brightness(1.03); }
          .my-ads-stack { display: flex; flex-direction: column; gap: 20px; }
          .my-ad-card { padding: 18px; overflow: hidden; }
          .my-ad-top { display: grid; grid-template-columns: minmax(0, 280px) 1fr; gap: 18px; }
          @media (max-width: 768px) {
            .my-ad-top { grid-template-columns: 1fr; }
          }
          .my-ad-media-empty {
            height: 200px; border-radius: 16px; background: var(--primary-light);
            display: flex; align-items: center; justify-content: center; color: var(--text-secondary);
            border: 1px dashed var(--border);
          }
          .my-ad-title-row { display: flex; flex-wrap: wrap; align-items: flex-start; gap: 10px; margin-bottom: 10px; }
          .my-ad-title { margin: 0; font-size: 1.25rem; color: var(--secondary); flex: 1; min-width: 0; }
          .mb-pill {
            padding: 6px 12px; border-radius: 999px; font-size: 0.78rem; font-weight: 800; white-space: nowrap;
          }
          .mb-pill-pending { background: #fff8e6; color: #856404; border: 1px solid #f5d77a; }
          .mb-pill-active { background: #e8f8f0; color: #1e6b48; border: 1px solid #9dceb5; }
          .mb-pill-rejected { background: #fdecea; color: #922b21; border: 1px solid #f5c6c2; }
          .mb-pill-expired { background: #eef1f4; color: #566573; border: 1px solid var(--border); }
          .mb-pill-warn { background: #fff4e5; color: #a65c00; border: 1px solid #ffc999; }
          .my-ad-meta {
            display: flex; flex-direction: column; gap: 6px; font-size: 0.88rem; line-height: 1.5;
            margin-bottom: 12px; color: var(--text-primary);
          }
          .my-ad-product-block { margin-bottom: 12px; font-size: 0.92rem; line-height: 1.55; }
          .my-ad-product-block a { font-weight: 800; color: var(--secondary); }
          .my-ad-desc { margin-bottom: 12px; }
          .my-ad-desc p { margin: 6px 0 0; line-height: 1.7; white-space: pre-wrap; }
          .my-ad-receipt { margin-top: 8px; }
          .my-ad-receipt .receipt-thumb {
            display: block; margin-top: 8px; max-width: 220px; max-height: 160px; object-fit: contain;
            border-radius: 10px; border: 1px solid var(--border);
          }
          .my-ad-actions { display: flex; gap: 10px; margin-top: 14px; flex-wrap: wrap; }
          .merchant-my-ads .iconBtn {
            border: 1px solid var(--border); background: var(--white); padding: 10px 14px; border-radius: 14px;
            font-weight: 800; color: var(--secondary); display: inline-flex; align-items: center; gap: 8px;
            cursor: pointer; font-family: inherit;
          }
          .merchant-my-ads .iconBtn:hover { background: var(--primary-light); }
          .merchant-my-ads .iconBtn.danger { color: #c0392b; }
        `}})]})})}const Id=3,B4=()=>{const[e,t]=m.useState(null),[n,a]=m.useState([]),[o,l]=m.useState(!0),[d,h]=m.useState(""),[u,f]=m.useState(null),[y,x]=m.useState(!1),[v,_]=m.useState("balipay_wallet"),b=j=>{const E=String(j||"").toLowerCase();return E==="approved"?"مقبول":E==="pending"?"قيد المراجعة":E==="rejected"?"مرفوض":j||"—"},z=m.useMemo(()=>u?URL.createObjectURL(u):"",[u]),C=m.useMemo(()=>{if(!(e!=null&&e.end_date))return null;const j=new Date(e.end_date).getTime(),E=Date.now(),M=Math.ceil((j-E)/(1e3*60*60*24));return Number.isFinite(M)?M:null},[e]),N=async()=>{l(!0);try{const[j,E]=await Promise.all([Uy(),$j()]);t(j),a(E)}finally{l(!1)}};m.useEffect(()=>{N()},[]);const w=j=>{if(!j)return;if(j.size/(1024*1024)>Id){alert(`حجم الصورة كبير. الحد الأقصى ${Id}MB`);return}f(j)},S=async j=>{if(j.preventDefault(),!u)return alert("لازم ترفع إشعار الدفع (صورة)");x(!0);try{const E=new FormData;E.append("receipt_image",u),d&&E.append("notes",d),v&&E.append("payment_method",v),await qj(E),h(""),f(null),_("balipay_wallet"),await N()}finally{x(!1)}};return i.jsx(Ce,{children:i.jsxs("div",{className:"merchant-subscription",children:[i.jsx("h1",{style:{marginBottom:14,fontSize:"1.8rem"},children:"الاشتراك"}),i.jsx("div",{className:"card",style:{marginBottom:16},children:i.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,flexWrap:"wrap"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[i.jsx("div",{style:{background:"#FFF9E6",padding:10,borderRadius:14,display:"flex"},children:i.jsx(Yi,{size:22,color:"#FFCC00"})}),i.jsxs("div",{children:[i.jsx("div",{style:{fontWeight:900},children:"المدة المتبقية"}),i.jsx("div",{style:{color:"var(--text-secondary)"},children:o?"...":C==null?"—":`${Math.max(C,0)} يوم`})]})]}),i.jsx("span",{className:"badge",children:e!=null&&e.is_active?"نشط":"غير نشط"})]})}),i.jsxs("div",{className:"card",style:{padding:"14px 16px",marginBottom:16,background:"linear-gradient(135deg, #FFF9E6 0%, #fff 100%)",border:"1px solid rgba(245,192,0,0.35)",borderRadius:14,lineHeight:1.65,fontSize:"0.95rem"},children:[i.jsx("strong",{style:{color:"var(--secondary)"},children:"ملاحظة:"})," رسوم تجديد الاشتراك ",i.jsx("strong",{children:"10 شيكل"}),". رقم التحويل الخاص بـ ",i.jsx("strong",{children:"رادار"})," هو ",i.jsx("strong",{dir:"ltr",children:"0592377078"})," باسم"," ",i.jsx("strong",{children:"اسماعيل عبدالعال"})," (بنك ومحفظة). سيتم الرد على طلبك خلال ",i.jsx("strong",{children:"24 ساعة"}),"."]}),i.jsxs("div",{className:"card",style:{marginBottom:16},children:[i.jsx("h3",{style:{marginBottom:10},children:"طلب تجديد (رفع إشعار دفع)"}),i.jsxs("form",{onSubmit:S,children:[i.jsxs("div",{className:"card",style:{padding:12,marginBottom:14,background:"var(--surface)"},children:[i.jsx("div",{style:{fontWeight:900,marginBottom:8},children:"طريقة التحويل"}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",borderRadius:14,overflow:"hidden",border:"1.5px solid var(--border)",background:"var(--white)"},role:"group","aria-label":"طريقة التحويل",children:[i.jsx("button",{type:"button",onClick:()=>_("balipay_wallet"),style:{padding:"12px 8px",border:"none",cursor:"pointer",fontWeight:800,fontFamily:"inherit",background:v==="balipay_wallet"?"var(--primary)":"transparent",color:v==="balipay_wallet"?"var(--secondary)":"var(--text-secondary)"},children:"محفظة بال باي"}),i.jsx("button",{type:"button",onClick:()=>_("bank_palestine"),style:{padding:"12px 8px",border:"none",cursor:"pointer",fontWeight:800,fontFamily:"inherit",borderInlineStart:"1.5px solid var(--border)",background:v==="bank_palestine"?"var(--primary)":"transparent",color:v==="bank_palestine"?"var(--secondary)":"var(--text-secondary)"},children:"بنك فلسطين"})]}),i.jsx("div",{className:"muted small",style:{marginTop:8,lineHeight:1.5},children:"اختر القناة التي ستحوّل عليها."})]}),i.jsx("div",{className:"input-group",children:i.jsx("textarea",{placeholder:"ملاحظات (اختياري)",value:d,onChange:j=>h(j.target.value),style:{width:"100%",padding:"0.85rem 1rem",borderRadius:"var(--radius-md)",border:"1.5px solid var(--border)",background:"var(--surface)",minHeight:90,resize:"vertical"}})}),i.jsx("div",{className:"card",style:{padding:14,marginBottom:14,background:"var(--surface)"},children:i.jsxs("div",{style:{display:"flex",gap:14,alignItems:"center",justifyContent:"space-between",flexWrap:"wrap"},children:[i.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[i.jsx("div",{className:"thumbLg",children:z?i.jsx("img",{src:z,alt:"receipt"}):i.jsx(Bt,{size:22})}),i.jsxs("div",{children:[i.jsx("div",{style:{fontWeight:900},children:"إشعار الدفع"}),i.jsxs("div",{style:{color:"var(--text-secondary)",fontSize:"0.9rem"},children:["PNG/JPG حتى ",Id,"MB"]})]})]}),i.jsxs("label",{className:"iconBtn",style:{cursor:"pointer"},children:[i.jsx(hy,{size:18}),"رفع صورة",i.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},onChange:j=>{var E;return w((E=j.target.files)==null?void 0:E[0])}})]})]})}),i.jsx(St,{type:"submit",loading:y,style:{width:"100%"},children:"إرسال طلب التجديد"})]})]}),i.jsxs("div",{className:"card",style:{padding:0,overflow:"hidden"},children:[i.jsx("div",{style:{padding:16,fontWeight:900,background:"var(--surface)",borderBottom:"1px solid var(--border)"},children:"طلبات التجديد"}),o?i.jsx("div",{style:{padding:16},children:"جاري التحميل..."}):n.length===0?i.jsx("div",{style:{padding:16},children:"لا يوجد طلبات بعد."}):n.map(j=>i.jsxs("div",{style:{padding:14,borderTop:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,flexWrap:"wrap"},children:[i.jsxs("div",{children:[i.jsxs("div",{style:{fontWeight:900},children:["طلب #",j.id]}),i.jsx("div",{style:{color:"var(--text-secondary)"},children:j.notes||"—"})]}),i.jsx("span",{className:"badge",children:b(j.status)})]},j.id))]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .merchant-subscription{
            max-width: 1240px;
            margin-inline: auto;
            padding-inline: clamp(8px, 2.2vw, 22px);
            padding-bottom: 32px;
            box-sizing: border-box;
          }
          .thumbLg { width: 72px; height: 72px; border-radius: 20px; background: var(--primary-light); border: 1px solid rgba(245,192,0,0.25); display: flex; align-items: center; justify-content: center; overflow: hidden; }
          .thumbLg img { width: 100%; height: 100%; object-fit: cover; }
          .iconBtn { border: 1px solid var(--border); background: var(--white); padding: 10px 14px; border-radius: 14px; font-weight: 900; color: var(--secondary); display: inline-flex; align-items: center; gap: 8px; }
          .iconBtn:hover { background: var(--primary-light); }
        `}})]})})},F4=[31.5,34.4];function D4({onPick:e}){return a1({click(t){e([t.latlng.lat,t.latlng.lng])}}),null}function W4({point:e}){const t=Pr(),n=m.useRef("");return m.useEffect(()=>{if(!e||e.length!==2)return;const a=Number(e[0]),o=Number(e[1]);if(!Number.isFinite(a)||!Number.isFinite(o))return;const l=`${a.toFixed(7)},${o.toFixed(7)}`;l!==n.current&&(n.current=l,t.flyTo([a,o],18,{duration:.55}))},[t,e]),null}const U4=({value:e,onChange:t})=>{const[n,a]=m.useState(!1),o=m.useMemo(()=>(e==null?void 0:e.length)===2?e:F4,[e]),l=async()=>{if(!navigator.geolocation)return alert("المتصفح لا يدعم تحديد الموقع");a(!0);try{const d=await qo({maxWaitMs:22e3,goodEnoughM:110});if(t([d.latitude,d.longitude]),d.accuracy!=null&&d.accuracy>1200){const h=Math.round(d.accuracy);alert(`تم أخذ الموقع بعد عدة قراءات. الدقة لا تزال تقريبية (~${h} م). على الكمبيوتر غالباً لا يوجد GPS؛ للدقة استخدم الهاتف أو انقر موقع المتجر يدوياً على الخريطة.`)}}catch{alert("لم نتمكن من تحديد موقعك. تأكد من صلاحيات الموقع والموقع الدقيق في إعدادات النظام.")}finally{a(!1)}};return i.jsxs("div",{className:"card",style:{padding:0,overflow:"hidden"},children:[i.jsxs("div",{style:{padding:12,display:"flex",justifyContent:"space-between",alignItems:"center",gap:12,flexWrap:"wrap"},children:[i.jsx("div",{style:{fontWeight:900},children:"حدد موقع المتجر"}),i.jsx(St,{variant:"secondary",onClick:l,loading:n,style:{width:"auto"},children:"موقعي الحالي"})]}),i.jsxs(oi,{center:o,zoom:14,minZoom:10,maxZoom:19,scrollWheelZoom:!0,style:{height:"clamp(260px, 50dvh, 380px)",width:"100%"},children:[i.jsx(si,{}),i.jsx(li,{}),i.jsx(W4,{point:e}),i.jsx(D4,{onPick:t}),(e==null?void 0:e.length)===2&&i.jsx(qn,{position:e,children:i.jsx(Vn,{children:"موقع المتجر"})})]}),i.jsx("div",{style:{padding:12,color:"var(--text-secondary)",fontSize:"0.9rem",lineHeight:1.5},children:"اضغط على الخريطة لتحديد الموقع، أو استخدم «موقعي الحالي» (يجب السماح بالموقع الدقيق). إن خزّن المتصفح موقعاً قديماً أو كانت الدقة ضعيفة قد تختلف النقطة — جرّب مرة أخرى بعد تفعيل الـ GPS أو صحّح بالنقر على الخريطة. يُحفظ الموقع عند الضغط على حفظ في أعلى النموذج."})]})},H4=["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],h1=()=>Array.from({length:7},()=>({start:"",end:""}));function Z4(e){const t=h1();if(!e||typeof e!="object")return t;for(let n=0;n<7;n++){const a=e[String(n)]??e[n];Array.isArray(a)&&a.length>0&&a[0]&&typeof a[0]=="object"&&(t[n].start=String(a[0].start||"").slice(0,5),t[n].end=String(a[0].end||"").slice(0,5))}return t}function $4(e){const t={};for(let n=0;n<7;n++){const a=(e[n].start||"").trim(),o=(e[n].end||"").trim();a&&o?t[String(n)]=[{start:a,end:o}]:t[String(n)]=[]}return t}const q4=()=>{const e=ct(),{showAlert:t}=Ue(),[n,a]=m.useState(!0),[o,l]=m.useState(!1),[d,h]=m.useState(""),[u,f]=m.useState(null),[y,x]=m.useState(""),[v,_]=m.useState(""),[b,z]=m.useState(""),[C,N]=m.useState(""),[w,S]=m.useState(""),[j,E]=m.useState(null),[M,P]=m.useState(null),[O,I]=m.useState(null),[F,V]=m.useState(""),[D,ae]=m.useState([""]),[oe,Q]=m.useState(""),[J,W]=m.useState(h1),[R,te]=m.useState("Asia/Gaza");m.useEffect(()=>{(async()=>{var Z,ee,ye,_e,Be;h(""),a(!0);try{const xe=await Zy();f(xe.id!=null?xe.id:null),x(xe.store_name||""),_(xe.description||""),z(xe.latitude??""),N(xe.longitude??""),S(xe.location_address||""),I(xe.logo||null),P(null),V(xe.contact_whatsapp||"");const dt=Array.isArray(xe.store_features)?xe.store_features.filter(Boolean):[];ae(dt.length?dt:[""]),Q(xe.business_hours_note||""),W(Z4(xe.business_hours_weekly)),te((xe.store_timezone||"Asia/Gaza").trim()||"Asia/Gaza"),Number.isFinite(Number(xe.latitude))&&Number.isFinite(Number(xe.longitude))&&E([Number(xe.latitude),Number(xe.longitude)])}catch(xe){const dt=(Z=xe==null?void 0:xe.response)==null?void 0:Z.status,He=((ye=(ee=xe==null?void 0:xe.response)==null?void 0:ee.data)==null?void 0:ye.detail)||((Be=(_e=xe==null?void 0:xe.response)==null?void 0:_e.data)==null?void 0:Be.error);h(dt===401?"الجلسة انتهت أو التوكن غير موجود. اعمل تسجيل خروج ثم تسجيل دخول كتاجر.":dt===403?"هذا الحساب ليس تاجر (أو لا يملك صلاحية). تأكد من نوع الحساب merchant.":`تعذر تحميل بيانات المتجر. ${He?`(${He})`:""}`.trim())}finally{a(!1)}})()},[]);const G=(T,Z)=>{const ee=D.map(ye=>String(ye||"").trim()).filter(Boolean).slice(0,10);return{store_name:y,description:v,location_address:w||"",latitude:T,longitude:Z,contact_whatsapp:F.trim(),store_features:ee,business_hours_note:oe.trim(),business_hours_weekly:$4(J),store_timezone:R.trim()||"Asia/Gaza"}},X=async T=>{var Z;T.preventDefault(),l(!0);try{const ee=(j==null?void 0:j[0])??(b===""?null:Number(b)),ye=(j==null?void 0:j[1])??(C===""?null:Number(C)),_e=G(ee,ye);let Be;if(M){const He=new FormData;He.append("store_name",_e.store_name),He.append("description",_e.description||""),He.append("location_address",_e.location_address),He.append("contact_whatsapp",_e.contact_whatsapp),He.append("business_hours_note",_e.business_hours_note),He.append("store_timezone",_e.store_timezone),He.append("store_features",JSON.stringify(_e.store_features)),He.append("business_hours_weekly",JSON.stringify(_e.business_hours_weekly)),ee!=null&&ee!==""&&He.append("latitude",String(ee)),ye!=null&&ye!==""&&He.append("longitude",String(ye)),He.append("logo",M),Be=He}else Be=_e;const xe=await vk(Be);(xe==null?void 0:xe.id)!=null&&f(xe.id),xe!=null&&xe.logo&&I(xe.logo),P(null),await t("تم حفظ المعلومات بنجاح","تم");const dt=(xe==null?void 0:xe.id)??u;dt!=null&&e(`/stores/${dt}`)}catch(ee){const ye=(Z=ee==null?void 0:ee.response)!=null&&Z.data&&typeof ee.response.data=="object"?Object.values(ee.response.data).flat().filter(Boolean).join(" "):(ee==null?void 0:ee.message)||"";await t(ye?String(ye):"تعذر حفظ البيانات. حاول مرة أخرى.","خطأ")}finally{l(!1)}},H=()=>{ae(T=>T.length>=10?T:[...T,""])},ue=T=>{ae(Z=>{const ee=Z.filter((ye,_e)=>_e!==T);return ee.length?ee:[""]})};return i.jsx(Ce,{children:i.jsxs("div",{className:"merchant-settings",style:{maxWidth:1240,marginInline:"auto",paddingInline:"clamp(8px, 2.2vw, 22px)",paddingBottom:32,boxSizing:"border-box"},children:[i.jsx("h1",{style:{marginBottom:14,fontSize:"1.8rem"},children:"إعدادات المتجر"}),i.jsx("div",{className:"card",children:n?i.jsx("div",{children:"جاري التحميل..."}):d?i.jsxs("div",{children:[i.jsx("p",{style:{color:"#c0392b",fontWeight:800,marginBottom:12},children:d}),i.jsx(St,{onClick:()=>window.location.reload(),style:{width:"100%"},children:"إعادة المحاولة"})]}):i.jsxs("form",{onSubmit:X,children:[i.jsx(wt,{icon:i.jsx(zt,{size:18}),placeholder:"اسم المتجر",value:y,onChange:T=>x(T.target.value),required:!0}),i.jsxs("div",{className:"input-group",children:[i.jsx("div",{className:"input-icon",children:i.jsx(Vx,{size:18})}),i.jsx("textarea",{placeholder:"وصف المتجر",value:v,onChange:T=>_(T.target.value),style:{width:"100%",padding:"0.85rem 1rem",borderRadius:"var(--radius-md)",border:"1.5px solid var(--border)",background:"var(--surface)",minHeight:110,resize:"vertical"}})]}),i.jsxs("div",{style:{marginTop:18,paddingTop:16,borderTop:"1px solid var(--border)"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:8,fontWeight:800},children:[i.jsx(Il,{size:18}),"التواصل مع المتجر (واتساب)"]}),i.jsx("p",{style:{margin:"0 0 10px",fontSize:"0.88rem",color:"var(--text-secondary)",lineHeight:1.55},children:"يمكنك إدخال الرقم بصيغة محلية (مثال: 0599123456) أو دولية بدون + (970599123456). يظهر زر «تواصل معنا» للمتسوّقين بعد الحفظ هنا فقط."}),i.jsx(wt,{icon:i.jsx(Il,{size:18}),placeholder:"رقم واتساب للاستفسارات",value:F,onChange:T=>V(T.target.value),type:"tel",autoComplete:"tel"})]}),i.jsxs("div",{style:{marginTop:18,paddingTop:16,borderTop:"1px solid var(--border)"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:8,fontWeight:800},children:[i.jsx(yn,{size:18}),"مميزات المتجر (حتى 10)"]}),i.jsx("p",{style:{margin:"0 0 10px",fontSize:"0.88rem",color:"var(--text-secondary)",lineHeight:1.55},children:"تظهر كوسوم صغيرة في البروفايل وقائمة المحال القريبة — للعرض فقط وليس للفلترة."}),D.map((T,Z)=>i.jsxs("div",{style:{display:"flex",gap:8,marginBottom:8,alignItems:"center"},children:[i.jsx("input",{type:"text",value:T,maxLength:80,placeholder:`ميزة ${Z+1}`,onChange:ee=>{const ye=ee.target.value;ae(_e=>_e.map((Be,xe)=>xe===Z?ye:Be))},style:{flex:1,padding:"0.75rem 0.9rem",borderRadius:"var(--radius-md)",border:"1.5px solid var(--border)",background:"var(--surface)"}}),D.length>1?i.jsx("button",{type:"button",onClick:()=>ue(Z),style:{padding:"8px 10px",borderRadius:10,border:"1px solid var(--border)",background:"var(--surface)",cursor:"pointer",fontWeight:700},children:"حذف"}):null]},Z)),D.length<10?i.jsx("button",{type:"button",onClick:H,style:{marginTop:4,padding:"8px 14px",borderRadius:10,border:"1px dashed var(--border)",background:"transparent",cursor:"pointer",fontWeight:700,color:"var(--secondary)"},children:"+ إضافة ميزة"}):null]}),i.jsxs("div",{style:{marginTop:18,paddingTop:16,borderTop:"1px solid var(--border)"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:8,fontWeight:800},children:[i.jsx(Yi,{size:18}),"مواعيد العمل"]}),i.jsx("p",{style:{margin:"0 0 10px",fontSize:"0.88rem",color:"var(--text-secondary)",lineHeight:1.55},children:"النص أدناه يظهر للمتسوّقين كما هو. الجدول يُستخدم لحساب «مفتوح / مغلق» حسب المنطقة الزمنية."}),i.jsxs("div",{className:"input-group",style:{marginBottom:12},children:[i.jsx("div",{className:"input-icon",children:i.jsx(Yi,{size:18})}),i.jsx("textarea",{placeholder:"مواعيد العمل (نص للمتسوّقين)، مثال: السبت–الخميس 9–5، الجمعة إجازة",value:oe,onChange:T=>Q(T.target.value),style:{width:"100%",padding:"0.85rem 1rem",borderRadius:"var(--radius-md)",border:"1.5px solid var(--border)",background:"var(--surface)",minHeight:88,resize:"vertical"}})]}),i.jsx(wt,{icon:i.jsx(Yi,{size:18}),placeholder:"المنطقة الزمنية (مثال: Asia/Gaza)",value:R,onChange:T=>te(T.target.value)}),i.jsx("p",{style:{margin:"10px 0 12px",fontSize:"0.82rem",color:"var(--text-secondary)"},children:"الأيام من الأحد (0) إلى السبت (6). اترك الفترة فارغة ليوم إجازة. فترة واحدة يومياً في هذا النموذج."}),i.jsx("div",{style:{display:"grid",gap:8,fontSize:"0.9rem"},children:H4.map((T,Z)=>i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"minmax(72px, 1fr) 1fr 1fr",gap:8,alignItems:"center"},children:[i.jsx("span",{style:{fontWeight:700},children:T}),i.jsx("input",{type:"time",value:J[Z].start,onChange:ee=>{const ye=ee.target.value;W(_e=>{const Be=[..._e];return Be[Z]={...Be[Z],start:ye},Be})},style:{padding:"8px 10px",borderRadius:10,border:"1.5px solid var(--border)",background:"var(--surface)"}}),i.jsx("input",{type:"time",value:J[Z].end,onChange:ee=>{const ye=ee.target.value;W(_e=>{const Be=[..._e];return Be[Z]={...Be[Z],end:ye},Be})},style:{padding:"8px 10px",borderRadius:10,border:"1.5px solid var(--border)",background:"var(--surface)"}})]},T))})]}),i.jsxs("div",{className:"input-group",children:[i.jsx("div",{className:"input-icon",children:i.jsx($t,{size:18})}),i.jsx("textarea",{placeholder:"عنوان / موقع المتجر نصاً (يظهر للمتسوّقين في البروفايل، منفصل عن الخريطة)",value:w,onChange:T=>S(T.target.value),style:{width:"100%",padding:"0.85rem 1rem",borderRadius:"var(--radius-md)",border:"1.5px solid var(--border)",background:"var(--surface)",minHeight:88,resize:"vertical"}})]}),i.jsxs("div",{style:{marginTop:6},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:8,fontWeight:700},children:[i.jsx(Bt,{size:18}),"صورة المتجر (اختياري)"]}),i.jsx("p",{style:{margin:"0 0 10px",fontSize:"0.88rem",color:"var(--text-secondary)",lineHeight:1.5},children:"تظهر على الخريطة كرمز للمتجر. إن لم ترفع صورة، يُستخدم رمز حسب نوع القسم أو صورة القسم إن وُجدت."}),O?i.jsx("img",{src:O,alt:"",style:{width:120,height:120,objectFit:"cover",borderRadius:16,marginBottom:10,border:"1.5px solid var(--border)"}}):null,i.jsx("input",{type:"file",accept:"image/*",style:{width:"100%",fontSize:"0.9rem"},onChange:T=>{var ee;const Z=(ee=T.target.files)==null?void 0:ee[0];Z&&(I(ye=>(ye&&String(ye).startsWith("blob:")&&URL.revokeObjectURL(ye),URL.createObjectURL(Z))),P(Z))}})]}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12},children:[i.jsx(wt,{icon:i.jsx($t,{size:18}),placeholder:"Latitude",value:b,onChange:T=>z(T.target.value)}),i.jsx(wt,{icon:i.jsx($t,{size:18}),placeholder:"Longitude",value:C,onChange:T=>N(T.target.value)})]}),i.jsx("div",{style:{marginTop:14},children:i.jsx(U4,{value:j,onChange:T=>{E(T),z(String(T[0])),N(String(T[1]))}})}),i.jsx("div",{style:{marginTop:14},children:i.jsx(St,{type:"submit",loading:o,style:{width:"100%"},children:"حفظ"})})]})})]})})},V4=()=>{const[e,t]=m.useState(!0),[n,a]=m.useState(null);m.useEffect(()=>{(async()=>{try{const h=await Zy();a(h)}finally{t(!1)}})()},[]);const o=(n==null?void 0:n.products)||[],l=(n==null?void 0:n.sponsored_ads)||[];return i.jsx(Ce,{children:i.jsxs("div",{className:"merchant-profile",children:[i.jsx("h1",{style:{marginBottom:14,fontSize:"1.8rem"},children:"بروفايل المتجر"}),i.jsx("div",{className:"card",style:{marginBottom:16},children:e?i.jsx("div",{children:"جاري التحميل..."}):i.jsxs("div",{style:{display:"flex",gap:16,alignItems:"flex-start",flexWrap:"wrap"},children:[i.jsx("div",{className:"logoBox",children:n!=null&&n.logo?i.jsx("img",{src:n.logo,alt:"logo"}):i.jsx(Bt,{size:22})}),i.jsxs("div",{style:{flex:1,minWidth:240},children:[i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:12,flexWrap:"wrap"},children:[i.jsx("div",{style:{fontWeight:900,fontSize:"1.25rem"},children:n==null?void 0:n.store_name}),n?i.jsxs(me,{to:"/merchant/settings",className:"btn-primary",style:{display:"inline-flex",alignItems:"center",gap:8,padding:"9px 14px",borderRadius:12,textDecoration:"none",fontWeight:800,fontSize:"0.88rem",whiteSpace:"nowrap"},children:[i.jsx(tp,{size:17,strokeWidth:2.1,"aria-hidden":!0}),"تعديل معلومات المتجر"]}):null]}),i.jsx("div",{style:{color:"var(--text-secondary)",marginTop:6},children:(n==null?void 0:n.description)||"—"}),i.jsxs("div",{style:{marginTop:10,display:"flex",gap:10,flexWrap:"wrap",alignItems:"center"},children:[i.jsxs("span",{className:"badge",children:["#",n==null?void 0:n.id]}),i.jsx("span",{className:"badge",children:(n==null?void 0:n.category_name)||"بدون قسم"}),i.jsxs("span",{className:"badge",style:{background:"#eee"},children:[i.jsx($t,{size:14,style:{marginLeft:6}}),(n==null?void 0:n.latitude)??"—",", ",(n==null?void 0:n.longitude)??"—"]})]})]})]})}),i.jsxs("div",{className:"card",style:{padding:0,overflow:"hidden",marginBottom:16},children:[i.jsxs("div",{style:{padding:16,fontWeight:900,background:"var(--surface)",borderBottom:"1px solid var(--border)",display:"flex",gap:10,alignItems:"center"},children:[i.jsx(kr,{size:18}),"منتجات المتجر"]}),e?i.jsx("div",{style:{padding:16},children:"..."}):o.length===0?i.jsx("div",{style:{padding:16},children:"لا يوجد منتجات."}):i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(min(220px, 100%), 1fr))",gap:12,padding:16},children:o.map(d=>i.jsxs("div",{className:"card",style:{padding:14},children:[i.jsx("div",{style:{borderRadius:16,overflow:"hidden",marginBottom:8},children:Ie(d).length>0?i.jsx(jt,{images:Ie(d),height:140,borderRadius:0}):i.jsx("div",{className:"thumbSm",style:{width:"100%",height:140,borderRadius:16},children:i.jsx(Bt,{size:18})})}),i.jsx("div",{style:{marginTop:10,fontWeight:900},children:d.name}),i.jsx("div",{style:{color:"var(--text-secondary)"},children:d.description||"—"}),i.jsxs("div",{style:{marginTop:8,fontWeight:900,color:"var(--secondary)"},children:[d.price," ₪"]})]},d.id))})]}),i.jsxs("div",{className:"card",style:{padding:0,overflow:"hidden"},children:[i.jsxs("div",{style:{padding:16,fontWeight:900,background:"var(--surface)",borderBottom:"1px solid var(--border)",display:"flex",gap:10,alignItems:"center"},children:[i.jsx($n,{size:18}),"الإعلانات الممولة"]}),e?i.jsx("div",{style:{padding:16},children:"..."}):l.length===0?i.jsx("div",{style:{padding:16},children:"لا يوجد إعلانات."}):l.map(d=>i.jsxs("div",{style:{padding:16,borderTop:"1px solid var(--border)",display:"flex",gap:12,alignItems:"center",justifyContent:"space-between",flexWrap:"wrap"},children:[i.jsxs("div",{style:{display:"flex",gap:12,alignItems:"flex-start"},children:[i.jsx("div",{style:{width:88,flexShrink:0},children:Ie(d).length>0?i.jsx(jt,{images:Ie(d),height:56,borderRadius:14}):i.jsx("div",{className:"thumbSm",children:i.jsx(Bt,{size:18})})}),i.jsxs("div",{children:[i.jsx("div",{style:{fontWeight:900},children:d.title}),i.jsx("div",{style:{color:"var(--text-secondary)"},children:d.description})]})]}),i.jsx("span",{className:"badge",children:d.status})]},d.id))]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .merchant-profile{
            max-width: 1240px;
            margin-inline: auto;
            padding-inline: clamp(8px, 2.2vw, 22px);
            padding-bottom: 32px;
            box-sizing: border-box;
          }
          .logoBox { width: 92px; height: 92px; border-radius: 26px; background: var(--primary-light); border: 1px solid rgba(245,192,0,0.25); display: flex; align-items: center; justify-content: center; overflow: hidden; }
          .logoBox img { width: 100%; height: 100%; object-fit: cover; }
          .thumbSm { width: 52px; height: 52px; border-radius: 16px; background: var(--primary-light); border: 1px solid rgba(245,192,0,0.25); display: flex; align-items: center; justify-content: center; overflow: hidden; }
          .thumbSm img { width: 100%; height: 100%; object-fit: cover; }
        `}})]})})},G4=()=>{const[e,t]=m.useState([]),[n,a]=m.useState(!0);return m.useEffect(()=>{(async()=>{try{const l=await ui();t(Array.isArray(l)?l:[])}catch(l){console.error("Error fetching categories:",l)}finally{a(!1)}})()},[]),i.jsx(Ce,{children:i.jsxs("div",{className:"categories-page",children:[i.jsxs("header",{className:"categories-hero",children:[i.jsx("div",{className:"categories-hero-icon","aria-hidden":!0,children:i.jsx(Eo,{size:28,strokeWidth:2})}),i.jsx("h1",{className:"categories-hero-title",children:"أقسام رادار"}),i.jsx("p",{className:"categories-hero-sub",children:"اختر قسماً للانتقال إلى المتاجر القريبة في هذا النوع."})]}),n?i.jsx("div",{className:"categories-loading card",children:"جاري تحميل الأقسام…"}):e.length>0?i.jsx("div",{className:"categories-grid",children:e.map(o=>{const l=a4(o.name);return i.jsxs(me,{to:`/?category=${o.id}`,className:"categories-card",children:[o.image?i.jsx("span",{className:"categories-card-photo-wrap",children:i.jsx("img",{className:"categories-card-photo",src:o.image,alt:"",loading:"lazy"})}):i.jsx("span",{className:"categories-card-emoji",style:{background:l.bg},children:l.emoji}),i.jsxs("div",{className:"categories-card-body",children:[i.jsx("h2",{className:"categories-card-name",children:o.name}),i.jsx("p",{className:"categories-card-desc",children:o.description||"عرض المحلات القريبة في هذا القسم"}),i.jsxs("span",{className:"categories-card-cta",children:["استكشف",i.jsx(ep,{size:16,"aria-hidden":!0})]})]})]},o.id)})}):i.jsx("p",{className:"categories-empty",children:"لا توجد أقسام مسجلة حالياً."}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .categories-page {
            max-width: 1240px;
            margin-inline: auto;
            padding-inline: clamp(8px, 2.2vw, 22px);
            box-sizing: border-box;
            padding-bottom: 28px;
          }
          .categories-hero {
            text-align: center;
            padding: clamp(22px, 4vw, 32px) clamp(16px, 3vw, 24px);
            margin-bottom: 22px;
            border-radius: var(--radius-xl);
            background: linear-gradient(160deg, var(--white) 0%, var(--primary-light) 100%);
            border: 1px solid rgba(255, 214, 10, 0.3);
            box-shadow: var(--shadow);
          }
          .categories-hero-icon {
            width: 56px;
            height: 56px;
            margin: 0 auto 12px;
            border-radius: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--white);
            border: 1px solid var(--border);
            color: var(--secondary);
            box-shadow: var(--shadow-sm);
          }
          .categories-hero-title {
            margin: 0 0 8px;
            font-size: clamp(1.35rem, 4vw, 1.75rem);
            font-weight: 900;
            color: var(--secondary);
            letter-spacing: -0.03em;
          }
          .categories-hero-sub {
            margin: 0;
            font-size: 0.92rem;
            color: var(--text-secondary);
            font-weight: 600;
            line-height: 1.55;
            max-width: 420px;
            margin-inline: auto;
          }
          .categories-loading {
            padding: 20px;
            text-align: center;
            font-weight: 700;
            color: var(--text-secondary);
          }
          .categories-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: clamp(14px, 2.5vw, 20px);
          }
          @media (min-width: 720px) {
            .categories-grid {
              grid-template-columns: repeat(3, minmax(0, 1fr));
            }
          }
          @media (min-width: 1024px) {
            .categories-grid {
              grid-template-columns: repeat(4, minmax(0, 1fr));
            }
          }
          .categories-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            text-decoration: none;
            color: inherit;
            padding: clamp(20px, 3vw, 26px) clamp(16px, 2.5vw, 20px);
            border-radius: var(--radius-xl);
            background: var(--white);
            border: 1px solid rgba(26, 29, 38, 0.07);
            box-shadow: var(--shadow-sm);
            transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
          }
          .categories-card:hover {
            transform: translateY(-4px);
            box-shadow: var(--shadow-lg);
            border-color: rgba(255, 214, 10, 0.45);
          }
          .categories-card-emoji {
            width: 72px;
            height: 72px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            margin-bottom: 14px;
            border: 3px solid var(--white);
            box-shadow: var(--shadow-sm);
            font-family: "Segoe UI Emoji", "Apple Color Emoji", sans-serif;
          }
          .categories-card-photo-wrap {
            width: 72px;
            height: 72px;
            border-radius: 50%;
            margin-bottom: 14px;
            border: 3px solid var(--white);
            box-shadow: var(--shadow-sm);
            overflow: hidden;
            flex-shrink: 0;
            background: var(--surface);
          }
          .categories-card-photo {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            display: block;
          }
          .categories-card-body {
            width: 100%;
          }
          .categories-card-name {
            margin: 0 0 8px;
            font-size: 1.15rem;
            font-weight: 900;
            color: var(--secondary);
          }
          .categories-card-desc {
            margin: 0 0 14px;
            font-size: 0.84rem;
            color: var(--text-secondary);
            line-height: 1.55;
            font-weight: 600;
          }
          .categories-card-cta {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            font-size: 0.82rem;
            font-weight: 900;
            color: var(--secondary);
            padding: 8px 14px;
            border-radius: var(--radius-pill);
            background: linear-gradient(180deg, var(--primary) 0%, var(--primary-hover) 100%);
            box-shadow: var(--shadow-gold);
          }
          .categories-empty {
            text-align: center;
            color: var(--text-secondary);
            font-weight: 700;
            padding: 32px 16px;
          }
        `}})]})})},K4={medical:"🏥",education:"📚",food:"🍲",water:"💧",institution:"🤝"},Q4={medical:"#c62828",education:"#4527a0",food:"#e65100",water:"#0277bd",institution:"#5d4037"};function p1(e){return K4[e]||"✨"}function m1(e){return Q4[e]||"#1ebea5"}const Y4=()=>{const[e,t]=m.useState([]),[n,a]=m.useState([]),[o,l]=m.useState(!0),d=localStorage.getItem("isGuest")==="true",h=!!localStorage.getItem("token")&&!d,u=localStorage.getItem("user_type")||"shopper",f=h&&(u==="shopper"||u==="merchant");m.useEffect(()=>{let x=!1;return(async()=>{try{const[v,_]=await Promise.all([ya(),hc()]);x||(t(Array.isArray(v)?v:[]),a(Array.isArray(_)?_:[]))}catch(v){console.error(v),x||(t([]),a([]))}finally{x||l(!1)}})(),()=>{x=!0}},[]);const y=m.useMemo(()=>{const x=new Map;for(const v of e)x.set(v.id,0);for(const v of n){const _=v.category;x.has(_)||x.set(_,0),x.set(_,x.get(_)+1)}return x},[e,n]);return i.jsx(Ce,{children:i.jsxs("div",{className:"services-page",children:[i.jsxs("header",{className:"services-hero",children:[i.jsx("div",{className:"services-hero-icon","aria-hidden":!0,children:i.jsx(yn,{size:26,strokeWidth:2})}),i.jsx("h1",{className:"services-hero-title",children:"الخدمات المجتمعية"}),i.jsx("p",{className:"services-hero-sub",children:"نقاط طبية وتعليمية وتوزيع طعام ومياه ومؤسسات مجتمعية — تظهر على الخريطة بعد موافقة الإدارة."}),f?i.jsxs(me,{to:"/services/suggest",className:"services-cta",children:[i.jsx(ly,{size:20,"aria-hidden":!0}),"اقترح نقطة خدمة"]}):i.jsx("p",{className:"services-guest-note",children:"لتقديم اقتراح: سجّل الدخول كمتسوّق أو كتاجر (وليس زائراً)."})]}),o?i.jsx("div",{className:"services-loading card",children:"جاري تحميل الأقسام…"}):e.length===0?i.jsx("p",{className:"services-empty",children:"لا توجد أقسام مفعّلة حالياً."}):i.jsx("div",{className:"services-grid",role:"list",children:e.map(x=>{const v=m1(x.slug),_=p1(x.slug),b=y.get(x.id)??0;return i.jsxs(me,{to:`/services/category/${encodeURIComponent(x.slug)}`,className:"services-grid-card card",role:"listitem",style:{"--svc-tone":v},children:[i.jsx("div",{className:"services-grid-card-visual","aria-hidden":!0,children:i.jsx("span",{className:"services-grid-card-emoji",children:_})}),i.jsxs("div",{className:"services-grid-card-body",children:[i.jsx("h2",{className:"services-grid-card-title",children:x.name}),x.description_hint?i.jsx("p",{className:"services-grid-card-hint",children:x.description_hint}):null,i.jsx("span",{className:"services-grid-card-count",children:b===0?"لا توجد نقاط بعد":`${b} ${b===1?"نقطة":"نقاط"} معتمدة`})]})]},x.id)})}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .services-page {
            max-width: 1240px;
            margin-inline: auto;
            padding-inline: clamp(8px, 2.2vw, 22px);
            box-sizing: border-box;
            padding-bottom: 28px;
          }
          .services-hero {
            text-align: center;
            padding: clamp(22px, 4vw, 34px) clamp(16px, 3vw, 24px);
            margin-bottom: 22px;
            border-radius: var(--radius-xl);
            background: linear-gradient(165deg, var(--white) 0%, rgba(30, 200, 160, 0.08) 100%);
            border: 1px solid rgba(30, 200, 160, 0.22);
            box-shadow: var(--shadow);
          }
          .services-hero-icon {
            width: 54px;
            height: 54px;
            margin: 0 auto 12px;
            border-radius: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--white);
            color: #1ebea5;
            border: 1px solid rgba(30, 200, 160, 0.35);
            box-shadow: var(--shadow-sm);
          }
          .services-hero-title {
            margin: 0 0 10px;
            font-size: clamp(1.35rem, 4vw, 1.7rem);
            font-weight: 900;
            color: var(--secondary);
            letter-spacing: -0.03em;
          }
          .services-hero-sub {
            margin: 0 auto 18px;
            max-width: 560px;
            font-size: 0.92rem;
            color: var(--text-secondary);
            line-height: 1.65;
            font-weight: 600;
          }
          .services-cta {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            padding: 12px 22px;
            border-radius: var(--radius-pill);
            font-weight: 900;
            font-size: 0.92rem;
            text-decoration: none;
            background: linear-gradient(180deg, var(--primary) 0%, var(--primary-hover) 100%);
            color: var(--secondary);
            box-shadow: var(--shadow-gold);
          }
          .services-cta:hover {
            filter: brightness(1.03);
          }
          .services-guest-note {
            margin: 0;
            font-size: 0.88rem;
            color: var(--text-secondary);
            font-weight: 600;
          }
          .services-loading {
            padding: 20px;
            text-align: center;
            font-weight: 700;
            color: var(--text-secondary);
          }
          .services-empty {
            text-align: center;
            color: var(--text-secondary);
            font-weight: 700;
            padding: 24px;
          }
          .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(min(100%, 260px), 1fr));
            gap: 16px;
          }
          .services-grid-card {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            text-decoration: none;
            color: inherit;
            padding: 0;
            overflow: hidden;
            border: 1px solid color-mix(in srgb, var(--svc-tone) 25%, var(--border));
            transition: transform 0.15s ease, box-shadow 0.15s ease;
            background: linear-gradient(
              180deg,
              color-mix(in srgb, var(--svc-tone) 10%, var(--white)) 0%,
              var(--surface) 48%
            );
          }
          .services-grid-card:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow);
          }
          .services-grid-card:focus-visible {
            outline: 2px solid var(--svc-tone);
            outline-offset: 2px;
          }
          .services-grid-card-visual {
            height: 120px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: color-mix(in srgb, var(--svc-tone) 16%, var(--white));
            border-bottom: 1px solid color-mix(in srgb, var(--svc-tone) 20%, transparent);
          }
          .services-grid-card-emoji {
            font-size: 3.25rem;
            line-height: 1;
          }
          .services-grid-card-body {
            padding: 14px 16px 16px;
            text-align: center;
          }
          .services-grid-card-title {
            margin: 0 0 8px;
            font-size: 1.1rem;
            font-weight: 900;
            color: var(--secondary);
          }
          .services-grid-card-hint {
            margin: 0 0 10px;
            font-size: 0.82rem;
            line-height: 1.5;
            color: var(--text-secondary);
            font-weight: 600;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .services-grid-card-count {
            font-size: 0.8rem;
            font-weight: 800;
            color: #0d9488;
          }
        `}})]})})},J4=()=>{const{categorySlug:e}=ga(),t=ct(),[n,a]=m.useState([]),[o,l]=m.useState([]),[d,h]=m.useState(!0);m.useEffect(()=>{let _=!1;return(async()=>{try{const[b,z]=await Promise.all([ya(),hc()]);_||(a(Array.isArray(b)?b:[]),l(Array.isArray(z)?z:[]))}catch(b){console.error(b),_||(a([]),l([]))}finally{_||h(!1)}})(),()=>{_=!0}},[]);const u=m.useMemo(()=>n.find(_=>String(_.slug)===String(e)),[n,e]),f=m.useMemo(()=>u?o.filter(_=>Number(_.category)===Number(u.id)):[],[u,o]);m.useEffect(()=>{d||!n.length||(!e||!u)&&t("/services",{replace:!0})},[d,n.length,e,u,t]);const y=u?m1(u.slug):"#1ebea5",x=u?p1(u.slug):"✨",v=_=>{const b=Number(_==null?void 0:_.latitude),z=Number(_==null?void 0:_.longitude);return Number.isFinite(b)&&Number.isFinite(z)};return i.jsx(Ce,{children:i.jsxs("div",{className:"services-page services-category-page",children:[i.jsxs("nav",{className:"services-breadcrumb",children:[i.jsx(me,{to:"/services",className:"services-breadcrumb-link",children:"الخدمات المجتمعية"}),i.jsx("span",{className:"services-breadcrumb-sep","aria-hidden":!0,children:"/"}),i.jsx("span",{className:"services-breadcrumb-current",children:(u==null?void 0:u.name)||"…"})]}),i.jsxs("header",{className:"services-category-hero card",style:{"--cat-tone":y},children:[i.jsx("div",{className:"services-category-hero-visual","aria-hidden":!0,children:i.jsx("span",{className:"services-category-hero-emoji",children:x})}),i.jsx("h1",{className:"services-category-hero-title",children:(u==null?void 0:u.name)||"القسم"}),u!=null&&u.description_hint?i.jsx("p",{className:"services-category-hero-hint",children:u.description_hint}):null]}),d?i.jsx("div",{className:"services-loading card",children:"جاري تحميل النقاط…"}):f.length===0?i.jsx("p",{className:"services-empty card",children:"لا توجد نقاط معتمدة في هذا القسم بعد."}):i.jsx("ul",{className:"services-points",children:f.map(_=>i.jsxs("li",{className:"services-point",children:[i.jsx("div",{className:"services-point-title",children:_.title}),_.category_slug==="water"&&_.water_is_potable!=null?i.jsx("div",{className:"services-point-badge",children:_.water_is_potable?"مياه صالحة للشرب":"مياه غير صالحة للشرب"}):null,_.institution_scope?i.jsxs("div",{className:"services-point-meta",children:["النطاق: ",_.institution_scope_label||_.institution_scope]}):null,i.jsx("p",{className:"services-point-desc",children:_.detail_description}),i.jsx("p",{className:"services-point-address",children:_.address_text}),i.jsx("div",{className:"services-point-actions",children:i.jsxs("button",{type:"button",className:"services-point-mapbtn",disabled:!v(_),onClick:()=>{v(_)&&t("/map",{state:{mapFocus:{lat:_.latitude,lng:_.longitude,communityPointId:_.id},mapPreset:{mode:"community",cc:(u==null?void 0:u.id)??null}}})},title:v(_)?"عرض على الخريطة":"لا يوجد إحداثيات لهذا العنصر",children:[i.jsx($t,{size:16,"aria-hidden":!0}),"عرض على الخريطة"]})})]},_.id))}),i.jsxs("p",{className:"services-category-back-wrap",children:[i.jsxs("button",{type:"button",className:"services-category-back",onClick:()=>t(-1),children:[i.jsx(Rx,{size:18,"aria-hidden":!0}),"رجوع"]}),i.jsxs(me,{to:"/services",className:"services-category-back-alt",children:[i.jsx(yn,{size:16,"aria-hidden":!0}),"كل الأقسام"]})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .services-category-page {
            max-width: 1240px;
            margin-inline: auto;
            padding-inline: clamp(8px, 2.2vw, 22px);
            box-sizing: border-box;
            padding-bottom: 28px;
          }
          .services-breadcrumb {
            display: flex;
            align-items: center;
            gap: 8px;
            flex-wrap: wrap;
            margin-bottom: 16px;
            font-size: 0.88rem;
            font-weight: 700;
          }
          .services-breadcrumb-link {
            color: #0d9488;
            text-decoration: none;
          }
          .services-breadcrumb-link:hover {
            text-decoration: underline;
          }
          .services-breadcrumb-sep {
            color: var(--text-light);
            user-select: none;
          }
          .services-breadcrumb-current {
            color: var(--text-secondary);
          }
          .services-category-hero {
            text-align: center;
            padding: clamp(20px, 3.5vw, 28px);
            margin-bottom: 20px;
            border: 1px solid color-mix(in srgb, var(--cat-tone) 28%, transparent);
            background: linear-gradient(
              165deg,
              var(--white) 0%,
              color-mix(in srgb, var(--cat-tone) 14%, transparent) 100%
            );
          }
          .services-category-hero-visual {
            width: 88px;
            height: 88px;
            margin: 0 auto 14px;
            border-radius: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: color-mix(in srgb, var(--cat-tone) 12%, var(--white));
            border: 1px solid color-mix(in srgb, var(--cat-tone) 22%, transparent);
            box-shadow: var(--shadow-sm);
          }
          .services-category-hero-emoji {
            font-size: 2.75rem;
            line-height: 1;
          }
          .services-category-hero-title {
            margin: 0 0 8px;
            font-size: clamp(1.25rem, 3.8vw, 1.55rem);
            font-weight: 900;
            color: var(--secondary);
          }
          .services-category-hero-hint {
            margin: 0 auto;
            max-width: 520px;
            font-size: 0.9rem;
            color: var(--text-secondary);
            line-height: 1.6;
            font-weight: 600;
          }
          .services-loading {
            padding: 20px;
            text-align: center;
            font-weight: 700;
            color: var(--text-secondary);
          }
          .services-empty {
            text-align: center;
            color: var(--text-secondary);
            font-weight: 700;
            padding: 24px;
          }
          .services-points {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 12px;
          }
          .services-point {
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            padding: 14px 16px;
            background: var(--surface);
          }
          .services-point-title {
            font-weight: 900;
            margin-bottom: 8px;
            color: var(--secondary);
          }
          .services-point-badge {
            font-size: 0.8rem;
            font-weight: 800;
            margin-bottom: 8px;
            color: #0d9488;
          }
          .services-point-meta {
            font-size: 0.82rem;
            margin-bottom: 8px;
            color: var(--text-secondary);
            font-weight: 600;
          }
          .services-point-desc {
            font-size: 0.9rem;
            line-height: 1.55;
            color: var(--text-primary);
            margin: 0 0 8px;
          }
          .services-point-address {
            font-size: 0.82rem;
            color: var(--text-secondary);
            margin: 0;
            font-weight: 600;
          }
          .services-point-actions{
            margin-top: 10px;
            display: flex;
            justify-content: flex-start;
          }
          .services-point-mapbtn{
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 9px 12px;
            border-radius: 999px;
            border: 1px solid rgba(245, 192, 0, 0.55);
            background: linear-gradient(135deg, rgba(245, 192, 0, 0.22) 0%, rgba(255,255,255,0.92) 100%);
            color: var(--secondary);
            font-weight: 900;
            font-family: inherit;
            cursor: pointer;
            box-shadow: 0 8px 20px rgba(245, 192, 0, 0.14);
          }
          .services-point-mapbtn:hover{
            box-shadow: 0 14px 30px rgba(245, 192, 0, 0.20);
          }
          .services-point-mapbtn:disabled{
            opacity: 0.65;
            cursor: not-allowed;
            box-shadow: none;
          }
          .services-category-back-wrap {
            margin-top: 22px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 14px;
          }
          .services-category-back {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 10px 18px;
            border-radius: var(--radius-pill);
            border: 1px solid var(--border);
            background: var(--surface);
            font-weight: 800;
            font-size: 0.88rem;
            cursor: pointer;
            color: var(--secondary);
          }
          .services-category-back:hover {
            background: rgba(30, 200, 160, 0.08);
          }
          .services-category-back-alt {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-weight: 800;
            font-size: 0.88rem;
            color: #0d9488;
            text-decoration: none;
          }
          .services-category-back-alt:hover {
            text-decoration: underline;
          }
        `}})]})})},X4=[31.5,34.4],eS=()=>{const e=ct(),{showAlert:t}=Ue(),a=(localStorage.getItem("user_type")||"shopper")==="admin",[o,l]=m.useState([]),[d,h]=m.useState(!0),[u,f]=m.useState(""),[y,x]=m.useState(""),[v,_]=m.useState(""),[b,z]=m.useState(""),[C,N]=m.useState(null),[w,S]=m.useState(""),[j,E]=m.useState(""),[M,P]=m.useState(!1),[O,I]=m.useState(!1),[F,V]=m.useState(!1);m.useEffect(()=>{let W=!1;return(async()=>{try{const R=await ya();W||l(Array.isArray(R)?R:[])}catch{W||l([])}finally{W||h(!1)}})(),()=>{W=!0}},[]);const D=m.useMemo(()=>o.find(W=>String(W.id)===String(u)),[o,u]),ae=(D==null?void 0:D.slug)||"",oe=async W=>{if(W.preventDefault(),!u){await t("اختر القسم.","تنبيه");return}if(!y.trim()||!v.trim()||!b.trim()){await t("عنوان الخدمة والوصف التفصيلي والعنوان النصي مطلوبة.","تنبيه");return}if(!C||C.length!==2){await t("انقر على الخريطة لتحديد موقع النقطة.","تنبيه");return}const R={category:Number(u),title:y.trim(),detail_description:v.trim(),latitude:C[0],longitude:C[1],address_text:b.trim()};if(ae==="water"){if(w!=="true"&&w!=="false"){await t("حدد هل المياه صالحة للشرب.","تنبيه");return}R.water_is_potable=w==="true"}else R.water_is_potable=null;if(ae==="institution"){if(!["local","international","charity"].includes(j)){await t("اختر نطاق المؤسسة (محلية / عالمية / خيرية).","تنبيه");return}R.institution_scope=j}else R.institution_scope="";P(!0);try{a?(await Fy(R),await t("تمت إضافة النقطة مباشرة (كمدير).","تم")):(await Tj(R),await t("تم إرسال الطلب. سيظهر على الخريطة بعد موافقة الإدارة.","تم")),e("/services")}catch(te){await t(Je(te,"تعذر إرسال الطلب."),"خطأ")}finally{P(!1)}},Q=C||X4,J=async()=>{if(!navigator.geolocation){await t("المتصفح لا يدعم تحديد الموقع.","تنبيه");return}I(!0);try{const W=await qo({maxWaitMs:22e3,goodEnoughM:110});N([W.latitude,W.longitude]);const R=W.accuracy;R!=null&&R>1200?await t(`تم وضع الدبوس على موقعك. الدقة تقريبية (~${Math.round(R)} م). على الكمبيوتر غالباً لا يوجد GPS؛ للدقة استخدم الهاتف أو انقر الموقع يدوياً على الخريطة.`,"موقع تقريبي"):await t("تم ضبط الدبوس على موقعك الحالي.","تم")}catch{await t("لم نتمكن من تحديد موقعك. تأكد من السماح بالوصول للموقع في المتصفح أو حاول لاحقاً.","الموقع")}finally{I(!1)}};return i.jsx(Ce,{children:i.jsxs("div",{className:"services-page",style:{maxWidth:1240,marginInline:"auto",paddingInline:"clamp(8px, 2.2vw, 22px)",paddingBottom:32,boxSizing:"border-box"},children:[i.jsx("p",{style:{marginBottom:16},children:i.jsx(me,{to:"/services",style:{fontWeight:700,color:"var(--secondary)"},children:"← الخدمات المجتمعية"})}),i.jsx("h1",{children:"اقتراح نقطة خدمة مجتمعية"}),i.jsxs("p",{style:{lineHeight:1.65,color:"#555"},children:["املأ التفاصيل وحدد الموقع على الخريطة.",a?" سيتم إضافة النقطة مباشرة.":" الطلب يُراجع من الإدارة قبل الظهور للجميع."]}),d?i.jsx("p",{children:"جاري تحميل الأقسام…"}):i.jsxs("form",{onSubmit:oe,className:"card",style:{padding:"clamp(16px, 4vw, 22px)",marginTop:20},children:[i.jsx("label",{style:{display:"block",fontWeight:800,marginBottom:8},children:"القسم"}),i.jsxs("select",{value:u,onChange:W=>{f(W.target.value),S(""),E("")},style:{width:"100%",padding:10,borderRadius:10,marginBottom:16},required:!0,children:[i.jsx("option",{value:"",children:"— اختر —"}),o.map(W=>i.jsx("option",{value:W.id,children:W.name},W.id))]}),D!=null&&D.description_hint?i.jsx("p",{style:{fontSize:"0.88rem",color:"#666",marginTop:-8,marginBottom:16},children:D.description_hint}):null,ae==="water"?i.jsxs("div",{style:{marginBottom:16},children:[i.jsx("div",{style:{fontWeight:800,marginBottom:8},children:"المياه"}),i.jsxs("label",{style:{display:"flex",gap:8,alignItems:"center",marginBottom:6},children:[i.jsx("input",{type:"radio",name:"wp",checked:w==="true",onChange:()=>S("true")}),"صالحة للشرب"]}),i.jsxs("label",{style:{display:"flex",gap:8,alignItems:"center"},children:[i.jsx("input",{type:"radio",name:"wp",checked:w==="false",onChange:()=>S("false")}),"غير صالحة للشرب"]})]}):null,ae==="institution"?i.jsxs("div",{style:{marginBottom:16},children:[i.jsx("label",{style:{display:"block",fontWeight:800,marginBottom:8},children:"نطاق المؤسسة"}),i.jsxs("select",{value:j,onChange:W=>E(W.target.value),style:{width:"100%",padding:10,borderRadius:10},required:ae==="institution",children:[i.jsx("option",{value:"",children:"— اختر —"}),i.jsx("option",{value:"local",children:"محلية"}),i.jsx("option",{value:"international",children:"عالمية"}),i.jsx("option",{value:"charity",children:"خيرية"})]})]}):null,i.jsx("label",{style:{display:"block",fontWeight:800,marginBottom:8},children:"عنوان / اسم النقطة"}),i.jsx("input",{value:y,onChange:W=>x(W.target.value),style:{width:"100%",padding:10,borderRadius:10,marginBottom:16},maxLength:220,required:!0}),i.jsx("label",{style:{display:"block",fontWeight:800,marginBottom:8},children:"وصف تفصيلي للخدمة"}),i.jsx("textarea",{value:v,onChange:W=>_(W.target.value),rows:5,style:{width:"100%",padding:10,borderRadius:10,marginBottom:16,resize:"vertical"},required:!0}),i.jsx("label",{style:{display:"block",fontWeight:800,marginBottom:8},children:"الموقع النصي التفصيلي"}),i.jsx("textarea",{value:b,onChange:W=>z(W.target.value),rows:3,style:{width:"100%",padding:10,borderRadius:10,marginBottom:16,resize:"vertical"},required:!0}),i.jsx("div",{style:{fontWeight:800,marginBottom:8},children:"الموقع على الخريطة"}),i.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:10,alignItems:"center",marginBottom:10},children:[i.jsx(St,{type:"button",variant:"secondary",loading:O,onClick:J,style:{width:"auto"},children:"موقعي الحالي"}),i.jsxs("span",{style:{fontSize:"0.88rem",color:"#666"},children:["أو انقر على الخريطة لوضع الدبوس يدوياً.",C?` الإحداثيات: ${C[0].toFixed(5)}, ${C[1].toFixed(5)}`:""]})]}),i.jsx("div",{className:"card",style:{padding:0,overflow:"hidden",marginBottom:20},children:i.jsx("button",{type:"button",onClick:()=>V(!0),"aria-label":"تكبير الخريطة لتحديد الموقع",title:"اضغط لتكبير الخريطة",style:{width:"100%",padding:0,border:"none",background:"transparent",cursor:"zoom-in",display:"block",textAlign:"inherit"},children:i.jsxs(oi,{center:Q,zoom:14,minZoom:10,maxZoom:19,scrollWheelZoom:!0,style:{height:"clamp(260px, 48dvh, 360px)",width:"100%"},children:[i.jsx(si,{}),i.jsx(li,{}),i.jsx(Ao,{position:C}),i.jsx(da,{onPick:(W,R)=>N([W,R])}),C?i.jsx(qn,{position:C,children:i.jsx(Vn,{children:"موقع النقطة المقترحة"})}):null]})})}),F?i.jsx("div",{role:"dialog","aria-modal":"true","aria-label":"خريطة تحديد الموقع",onClick:()=>V(!1),style:{position:"fixed",inset:0,zIndex:6e3,background:"rgba(14, 16, 20, 0.62)",backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)",display:"flex",alignItems:"center",justifyContent:"center",padding:14},children:i.jsxs("div",{className:"card",onClick:W=>W.stopPropagation(),style:{position:"relative",width:"min(520px, 96vw)",height:"min(86dvh, calc(100dvh - 48px))",padding:0,overflow:"hidden",borderRadius:26},children:[i.jsx("button",{type:"button",onClick:()=>{if(!C||C.length!==2){t("انقر على الخريطة لتحديد الموقع أولاً.","تنبيه");return}V(!1)},"aria-label":"تأكيد الموقع",title:"تأكيد الموقع",style:{position:"absolute",top:10,insetInlineStart:10,zIndex:2500,pointerEvents:"auto",height:44,padding:"0 14px",borderRadius:999,border:"1px solid rgba(245, 192, 0, 0.55)",background:"linear-gradient(145deg, var(--primary) 0%, var(--primary-hover) 100%)",boxShadow:"var(--shadow-gold)",color:"var(--secondary)",cursor:"pointer",display:"inline-flex",alignItems:"center",justifyContent:"center",fontWeight:950,fontSize:"0.92rem"},children:"تأكيد الموقع"}),i.jsx("button",{type:"button",onClick:()=>V(!1),"aria-label":"إغلاق",title:"إغلاق",style:{position:"absolute",top:10,left:"50%",transform:"translateX(-50%)",zIndex:2500,pointerEvents:"auto",width:44,height:44,borderRadius:999,border:"1px solid rgba(245, 192, 0, 0.55)",background:"linear-gradient(145deg, var(--primary) 0%, var(--primary-hover) 100%)",boxShadow:"var(--shadow-gold)",color:"var(--secondary)",cursor:"pointer",display:"inline-flex",alignItems:"center",justifyContent:"center",fontWeight:900},children:"×"}),i.jsxs(oi,{center:Q,zoom:15,minZoom:10,maxZoom:19,scrollWheelZoom:!0,style:{height:"100%",width:"100%"},children:[i.jsx(si,{}),i.jsx(li,{}),i.jsx(Ao,{position:C}),i.jsx(da,{onPick:(W,R)=>N([W,R])}),C?i.jsx(qn,{position:C,children:i.jsx(Vn,{children:"موقع النقطة المقترحة"})}):null]})]})}):null,i.jsx(St,{type:"submit",loading:M,style:{width:"100%"},children:a?"إضافة النقطة":"إرسال الطلب للمراجعة"})]})]})})},tS=e=>typeof window>"u"||!e?"":`${window.location.origin}/share/cart/${e}`,ig=e=>{const t=String(e||"").trim();return t?["Cart link:",`‭${t}‬`,t]:[]},nS=()=>{const[e,t]=m.useState([]),[n,a]=m.useState(!0),[o,l]=m.useState(null),[d,h]=m.useState(null),[u,f]=m.useState(localStorage.getItem("isGuest")==="true"),{showAlert:y,showPrompt:x,showConfirm:v}=Ue(),_=async()=>{try{const j=await Ji();t(j)}catch(j){console.error("Error fetching carts:",j)}finally{a(!1)}};m.useEffect(()=>{(async()=>{if(await _(),!!xc())try{const{notices:j}=await Vy(),E=Array.isArray(j)?j:[];for(const M of E){const P=typeof M=="string"?M:M==null?void 0:M.text;P&&await y(P,"تنبيه")}}catch{}})()},[]);const b=async()=>{const j=await x("أدخل اسم السلة الجديدة (مثل: أغراض المنزل):","اسم السلة...");if(j)try{await mc(j),_()}catch(E){y(Je(E,"تعذر إنشاء السلة."),"خطأ")}},z=j=>{var E;if(j.effective_unit_price!=null&&j.effective_unit_price!==""){const M=Number(j.effective_unit_price);if(Number.isFinite(M))return M}return Number(((E=j.product_details)==null?void 0:E.price)??0)},C=j=>{const E=j.catalog_unit_price;if(E==null||E==="")return null;const M=Number(E);return Number.isFinite(M)?M:null},N=j=>z(j)*Number(j.quantity??0),w=async j=>{let E=j.share_token!=null&&j.share_token!==""?String(j.share_token):"";if(!E)try{const J=await $y(j.id);E=(J==null?void 0:J.share_token)!=null&&J.share_token!==""?String(J.share_token):""}catch{E=""}if(!E){y("تعذر الحصول على رابط المشاركة. تحقق من الاتصال بالخادم ثم حدّث الصفحة.","مشاركة السلة");return}const M=tS(E),P=j.name||"سلة المشتريات",O=j.items||[],I=O.reduce((J,W)=>J+N(W),0),F=O.map((J,W)=>{const R=J.product_details||{},te=J.line_title||R.name||"منتج",G=z(J),X=C(J),H=Number(J.quantity??0),ue=N(J);let T=`${W+1}) ${te}
   ${H} × ${G.toFixed(2)} ₪ = ${ue.toFixed(2)} ₪`;J.is_promotional_line&&X!=null&&Math.abs(G-X)>1e-9?T+=`
   (سعر عرض ممول؛ السعر المعتاد في المتجر ${X.toFixed(2)} ₪)`:J.is_promotional_line&&J.is_standalone_ad_line&&(T+=`
   (عرض ممول مستقل — بسعر الإعلان)`);const Z=(J.note||"").trim();return Z&&(T+=`
   📌 ملاحظة: ${Z}`),T}),V=(j.notes||"").trim(),D=J=>J?[`رادار — ${P}`,`الإجمالي: ${I} ₪`,"التفاصيل الكاملة في الرابط أدناه.","","────────","رابط عرض السلة على موقع رادار:",...ig(M),"","تم إنشاء القائمة من تطبيق رادار."].join(`
`):[`رادار — ${P}`,...V?[`ملاحظة على السلة: ${V}`,"──────────────────"]:[],...F,"──────────────────",`الإجمالي: ${I} ₪`,"","────────","رابط عرض السلة على موقع رادار (اضغط للصفحة والصور):",...ig(M),"","تم إنشاء القائمة من تطبيق رادار."].join(`
`);let ae=D(!1),oe=`https://wa.me/?text=${encodeURIComponent(ae)}`;oe.length>6e3&&(ae=D(!0),oe=`https://wa.me/?text=${encodeURIComponent(ae)}`),window.open(oe,"_blank","noopener,noreferrer")||y("تعذر فتح واتساب. اسمح بالنوافذ المنبثقة ثم أعد المحاولة.","مشاركة السلة")},S=async j=>{if(await v(`حذف السلة «${j.name}» وجميع محتوياتها نهائياً؟ لا يمكن التراجع.`,"تأكيد حذف السلة"))try{await bk(j.id),await _()}catch(M){y(Je(M,"تعذر حذف السلة."),"خطأ")}};return i.jsx(Ce,{children:i.jsxs("div",{className:"carts-page",children:[u?i.jsx(hp,{title:"سلال المشتريات متوفرة للأعضاء فقط",message:"قم بإنشاء حساب مجاني لتتمكن من إنشاء سلال مشتريات متعددة ومشاركتها مع عائلتك وأصدقائك عبر الواتساب."}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"carts-head flex-between",children:[i.jsx("h1",{className:"carts-title",children:"سلال المشتريات"}),i.jsxs("button",{className:"btn-primary carts-new-btn",onClick:b,children:[i.jsx(oc,{size:20})," سلة جديدة"]})]}),n?i.jsx("p",{children:"جاري تحميل السلال..."}):e.length>0?i.jsx("div",{className:"carts-grid",children:e.map(j=>{const E=M=>M.includes("الإعلان الممول")&&(M.includes("انتهت")||M.includes("انتهاء")||M.includes("تمت إزالة")||M.includes("أُزيل")||M.includes("مستقل")||M.includes("غير مربوط")||M.includes("كتالوج")||M.includes("عُدِّ سعره")||M.includes("السعر الأصلي"));return String(j.notes||"").split(`
`).map(M=>M.trim()).filter(E),i.jsx("div",{className:"card shopping-cart-card",children:i.jsxs("div",{className:"cart-collapsed-row",children:[i.jsx(me,{to:`/carts/${j.id}`,className:"cart-collapsed-link","aria-label":`فتح سلة ${j.name}`,children:i.jsx("h3",{className:"cart-collapsed-title",children:j.name})}),i.jsxs("div",{className:"actions flex-center",style:{gap:"10px"},children:[i.jsx("button",{type:"button",className:"action-btn share",title:"مشاركة واتساب",onClick:()=>w(j),children:i.jsx(cy,{size:18})}),i.jsx("button",{type:"button",className:"action-btn delete",title:"حذف السلة",onClick:()=>S(j),children:i.jsx(Qr,{size:18})})]})]})},j.id)})}):i.jsxs("div",{className:"empty-state card flex-center",style:{flexDirection:"column",padding:"50px"},children:[i.jsx("p",{children:"ليس لديك أي سلال مشتريات بعد."}),i.jsx("button",{className:"btn-primary",onClick:b,style:{width:"auto",marginTop:"20px"},children:"ابدأ بإنشاء أول سلة"})]})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .carts-page{
            max-width: 1240px;
            margin-inline: auto;
            padding-inline: clamp(8px, 2.2vw, 22px);
            padding-bottom: 32px;
            box-sizing: border-box;
          }
          .carts-head{
            margin-bottom: 20px;
            flex-wrap: wrap;
            gap: 12px;
          }
          .carts-title{
            margin: 0;
            font-weight: 950;
            font-size: 1.65rem;
            color: var(--secondary);
            letter-spacing: -0.02em;
          }
          .carts-new-btn{
            width: auto;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 10px 16px;
          }
          .carts-grid{
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: clamp(12px, 3vw, 20px);
          }
          @media (min-width: 960px) {
            .carts-grid{
              grid-template-columns: repeat(3, minmax(0, 1fr));
            }
          }
          .shopping-cart-card { border-top: 5px solid var(--primary); }
          .cart-collapsed-row{
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
          }
          .cart-collapsed-link{
            flex: 1;
            min-width: 0;
            text-decoration: none;
            color: inherit;
            padding: 10px 4px 10px 0;
            margin: -6px 0;
            border-radius: 12px;
            cursor: pointer;
            transition: background 0.15s ease;
          }
          .cart-collapsed-link:hover{
            background: rgba(245, 192, 0, 0.12);
          }
          .cart-collapsed-link:focus-visible{
            outline: 2px solid rgba(245, 192, 0, 0.65);
            outline-offset: 2px;
          }
          .cart-collapsed-title{
            margin: 0;
            font-weight: 950;
            color: var(--secondary);
            min-width: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .action-btn { background: none; border: none; cursor: pointer; color: #777; padding: 5px; transition: color 0.2s; }
          .action-btn.share:hover { color: #25D366; }
          .action-btn.delete:hover { color: #FF5252; }
          .qty-mini {
            background: var(--white);
            border: 1px solid var(--border);
            border-radius: 8px;
            padding: 6px 8px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--secondary);
          }
          .qty-mini:disabled { opacity: 0.55; cursor: not-allowed; }
          .cart-notes-section {
            margin-bottom: 14px;
            padding-bottom: 14px;
            border-bottom: 1px solid var(--border, #e8e8e8);
          }
          .cart-note-label {
            display: block;
            font-size: 0.82rem;
            font-weight: 800;
            color: var(--text-secondary);
            margin-bottom: 6px;
          }
          .cart-note-input {
            width: 100%;
            padding: 10px 12px;
            border-radius: 12px;
            border: 1px solid var(--border);
            background: var(--surface, #fdfdf9);
            font-size: 0.92rem;
            resize: vertical;
            min-height: 44px;
            font-family: inherit;
            line-height: 1.45;
          }
          .cart-note-input:focus {
            outline: none;
            border-color: var(--primary, #f5c000);
            box-shadow: 0 0 0 2px rgba(245, 192, 0, 0.25);
          }
          .cart-note-input:disabled { opacity: 0.65; cursor: wait; }
          .cart-note-input-sm { min-height: 40px; font-size: 0.88rem; }
          .cart-line-block {
            border-bottom: 1px solid #f0f0f0;
            margin-bottom: 4px;
          }
          .cart-line-block:last-of-type { border-bottom: none; margin-bottom: 0; }
          .cart-item-note-wrap {
            padding: 0 0 12px 0;
            margin-inline-start: 0;
          }
          @media (min-width: 560px) {
            .cart-item-note-wrap { margin-inline-start: 68px; }
          }
          .cart-item-thumb {
            width: 56px;
            height: 56px;
            border-radius: 14px;
            overflow: hidden;
            flex-shrink: 0;
            background: var(--primary-light);
            border: 1px solid rgba(245,192,0,0.25);
          }
          .cart-item-thumb img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }
          .cart-item-thumb-placeholder {
            width: 100%;
            height: 100%;
            background: var(--grey-light, #f0f0f0);
          }
          @media (max-width: 420px) {
            .cart-item-row {
              grid-template-columns: 48px minmax(0, 1fr) !important;
            }
            .cart-item-actions {
              grid-column: 1 / -1;
              justify-content: flex-start !important;
              margin-top: 6px;
            }
            .cart-item-thumb { width: 48px; height: 48px; border-radius: 12px; }
          }
        `}})]})})},rS=()=>{const{cartId:e}=ga(),{showAlert:t,showConfirm:n}=Ue(),[a,o]=m.useState(null),[l,d]=m.useState(!0),[h,u]=m.useState(null),[f,y]=m.useState(null),x=m.useCallback(async()=>{if(e){d(!0);try{const j=await $y(e);o(j)}catch(j){o(null),t(Je(j,"تعذر تحميل السلة."),"خطأ")}finally{d(!1)}}},[e,t]);m.useEffect(()=>{x()},[x]);const v=j=>{var E;if(j.effective_unit_price!=null&&j.effective_unit_price!==""){const M=Number(j.effective_unit_price);if(Number.isFinite(M))return M}return Number(((E=j.product_details)==null?void 0:E.price)??0)},_=j=>{const E=j.catalog_unit_price;if(E==null||E==="")return null;const M=Number(E);return Number.isFinite(M)?M:null},b=j=>v(j)*Number(j.quantity??0),z=m.useMemo(()=>((a==null?void 0:a.items)||[]).reduce((E,M)=>E+b(M),0),[a]),C=async j=>{if(!a)return;const E=j??"";if((a.notes??"")!==E){y(a.id);try{await wk(a.id,{notes:E}),await x()}catch(M){t(Je(M,"تعذر حفظ الملاحظة.")),await x()}finally{y(null)}}},N=async j=>{var P;const E=j.line_title||((P=j.product_details)==null?void 0:P.name)||"هذا السطر";if(await n(`هل تريد إزالة «${E}» من السلة؟`,"تأكيد الحذف")){u(j.id);try{await Nk(j.id),await x()}catch(O){t(Je(O,"تعذر حذف المنتج."))}finally{u(null)}}},w=async(j,E)=>{const M=Number(j.quantity??0)+E;if(M<1){await N(j);return}u(j.id);try{await Uf(j.id,{quantity:M}),await x()}catch(P){t(Je(P,"تعذر تحديث الكمية."))}finally{u(null)}},S=async(j,E)=>{const M=parseInt(String(E),10);if(Number.isNaN(M)||M<1){t("الكمية يجب أن تكون رقماً صحيحاً ≥ ١"),await x();return}u(j.id);try{await Uf(j.id,{quantity:M}),await x()}catch(P){t(Je(P,"تعذر تحديث الكمية.")),await x()}finally{u(null)}};return i.jsx(Ce,{children:i.jsxs("div",{className:"cart-details-page",children:[i.jsx("div",{style:{marginBottom:12},children:i.jsx(me,{to:"/carts",className:"cart-details-back",children:"← رجوع للسلال"})}),l?i.jsx("div",{className:"card cart-details-loading",children:"جاري تحميل السلة…"}):a?i.jsxs("div",{className:"card cart-details-card",children:[i.jsxs("div",{className:"cart-details-head",children:[i.jsx("h1",{className:"cart-details-title",children:a.name}),i.jsxs("div",{className:"cart-details-total",children:["الإجمالي: ",i.jsxs("span",{className:"cart-details-total-num",children:[z.toFixed(2)," ₪"]})]})]}),i.jsxs("div",{className:"cart-notes-section",children:[i.jsx("label",{className:"cart-note-label",htmlFor:`cart-notes-${a.id}`,children:"ملاحظة على السلة"}),i.jsx("textarea",{id:`cart-notes-${a.id}`,className:"cart-note-input",rows:2,placeholder:"مثال: موعد التوصيل، طلبات عامة على الطلب…",defaultValue:a.notes||"",disabled:f===a.id,onBlur:j=>C(j.target.value)},`${a.id}-cart-notes-${a.notes??""}`)]}),i.jsx("div",{className:"cart-items",children:Array.isArray(a.items)&&a.items.length>0?a.items.map(j=>i.jsx("div",{className:"cart-line-block",children:i.jsxs("div",{className:"item-row cart-item-row",style:{display:"grid",gridTemplateColumns:"56px minmax(0, 1fr) auto",gap:12,alignItems:"center",padding:"10px 0 6px",borderRadius:j.is_promotional_line?12:0,marginInline:j.is_promotional_line?-4:0,paddingInline:j.is_promotional_line?10:0,marginTop:j.is_promotional_line?6:0,background:j.is_promotional_line?"linear-gradient(135deg, rgba(245,192,0,0.12) 0%, rgba(255,249,230,0.35) 100%)":void 0,border:j.is_promotional_line?"1px solid rgba(245,192,0,0.4)":void 0},children:[i.jsx("div",{className:"cart-item-thumb",children:Gf(j).length>0?i.jsx(jt,{images:Gf(j),height:56,borderRadius:12}):i.jsx("span",{className:"cart-item-thumb-placeholder flex-center",children:i.jsx(Bt,{size:20,color:"var(--text-light)"})})}),i.jsxs("div",{style:{minWidth:0},children:[(()=>{var O,I,F,V;const E=((O=j==null?void 0:j.product_details)==null?void 0:O.store)??((I=j==null?void 0:j.product_details)==null?void 0:I.store_id)??(j==null?void 0:j.store)??null,M=(j==null?void 0:j.product)??((F=j==null?void 0:j.product_details)==null?void 0:F.id)??null,P=j.line_title||((V=j.product_details)==null?void 0:V.name);return E&&M?i.jsx(me,{to:`/stores/${E}`,state:{scrollToProductId:M},style:{fontWeight:900,color:"var(--secondary)",textDecoration:"none"},title:"فتح المنتج داخل المتجر",children:P}):i.jsx("div",{style:{fontWeight:800},children:P})})(),j.is_promotional_line?i.jsxs("div",{style:{fontSize:"0.85rem",marginTop:6},children:[i.jsx("span",{style:{display:"inline-block",padding:"3px 10px",borderRadius:8,fontWeight:900,color:"var(--secondary)",background:"rgba(245,192,0,0.35)",border:"1px solid rgba(245,192,0,0.5)"},children:j.is_standalone_ad_line?`عرض ممول مستقل: ${v(j).toFixed(2)} ₪ للقطعة`:`عرض ممول: ${v(j).toFixed(2)} ₪ للقطعة`}),!j.is_standalone_ad_line&&_(j)!=null&&Math.abs(v(j)-_(j))>1e-9?i.jsxs("span",{style:{marginInlineStart:10,textDecoration:"line-through",color:"var(--text-secondary)"},children:["سعر المتجر ",_(j).toFixed(2)," ₪"]}):null,i.jsxs("span",{style:{color:"var(--text-light)",marginInlineStart:8},children:["· المجموع ",b(j).toFixed(2)," ₪"]})]}):i.jsxs("div",{style:{fontSize:"0.85rem",color:"var(--text-secondary)",marginTop:4},children:[(_(j)!=null?_(j):v(j)).toFixed(2)," ₪ للقطعة",i.jsxs("span",{style:{color:"var(--text-light)",marginInlineStart:8},children:["· المجموع ",b(j).toFixed(2)," ₪"]})]})]}),i.jsxs("div",{className:"flex-center cart-item-actions",children:[i.jsxs("div",{className:"cart-qty-stepper",dir:"ltr",children:[i.jsx("button",{type:"button",className:"cart-qty-stepper__btn cart-qty-stepper__btn--minus",disabled:h===j.id,onClick:()=>w(j,-1),"aria-label":"تقليل الكمية",children:i.jsx(Fx,{size:18,strokeWidth:2.5,"aria-hidden":!0})}),i.jsx("input",{type:"text",inputMode:"numeric",className:"cart-qty-stepper__input",disabled:h===j.id,defaultValue:j.quantity,onBlur:E=>S(j,E.target.value),"aria-label":"الكمية"},`${j.id}-${j.quantity}`),i.jsx("button",{type:"button",className:"cart-qty-stepper__btn cart-qty-stepper__btn--plus",disabled:h===j.id,onClick:()=>w(j,1),"aria-label":"زيادة الكمية",children:i.jsx(Dx,{size:18,strokeWidth:2.5,"aria-hidden":!0})})]}),i.jsx("button",{type:"button",className:"cart-item-remove",title:"حذف من السلة",disabled:h===j.id,onClick:()=>N(j),"aria-label":"حذف من السلة",children:i.jsx(Qr,{size:17,strokeWidth:2.25,"aria-hidden":!0})})]})]})},j.id)):i.jsx("p",{style:{color:"#999",fontSize:"0.9rem",margin:0},children:"السلة فارغة حالياً."})})]}):i.jsx("div",{className:"card cart-details-loading",children:"تعذر تحميل السلة."}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .cart-details-page{
            max-width: 1240px;
            margin-inline: auto;
            padding-inline: clamp(8px, 2.2vw, 22px);
            padding-bottom: 32px;
            box-sizing: border-box;
          }
          .cart-details-back{
            color: var(--text-secondary);
            text-decoration: none;
            font-weight: 800;
          }
          .cart-details-back:hover{ text-decoration: underline; }
          .cart-details-loading{
            padding: 22px;
            font-weight: 800;
            color: var(--text-secondary);
            text-align: center;
          }
          .cart-details-card{
            padding: 16px 16px 18px;
          }
          .cart-items{
            margin-top: 10px;
          }
          .cart-line-block{
            border-bottom: 1px solid rgba(232, 230, 224, 0.85);
            padding: 10px 0;
          }
          .cart-line-block:last-child{
            border-bottom: none;
          }
          .cart-item-row{
            border-radius: 18px !important;
            padding: 12px 12px !important;
            background: rgba(255,255,255,0.92);
            border: 1px solid rgba(232, 230, 224, 0.95);
            box-shadow: 0 8px 22px rgba(26, 29, 38, 0.06);
          }
          .cart-item-row:hover{
            border-color: rgba(245, 192, 0, 0.45);
            box-shadow: 0 14px 34px rgba(245, 192, 0, 0.12);
          }
          .cart-item-thumb{
            width: 56px;
            height: 56px;
            border-radius: 14px;
            overflow: hidden;
            background: var(--primary-light);
            border: 1px solid rgba(245,192,0,0.22);
          }
          @media (max-width: 420px){
            .cart-item-row{
              grid-template-columns: 48px minmax(0, 1fr) auto !important;
              padding: 10px 10px !important;
              border-radius: 16px !important;
            }
            .cart-item-thumb{ width: 48px; height: 48px; border-radius: 12px; }
          }
          .cart-details-head{
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 12px;
            flex-wrap: wrap;
            margin-bottom: 12px;
          }
          .cart-details-title{
            margin: 0;
            font-size: 1.25rem;
            font-weight: 950;
            color: var(--secondary);
          }
          .cart-details-total{
            font-weight: 900;
            color: var(--text-secondary);
          }
          .cart-details-total-num{
            color: #FFCC00;
            font-weight: 950;
          }
          .cart-item-actions{
            gap: 10px;
            flex-wrap: wrap;
            justify-content: flex-end;
            align-items: center;
          }
          .cart-qty-stepper{
            display: inline-flex;
            align-items: stretch;
            border-radius: 14px;
            overflow: hidden;
            border: 1.5px solid rgba(245, 192, 0, 0.38);
            background: linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(255, 252, 238, 0.92) 100%);
            box-shadow: 0 2px 10px rgba(26, 29, 38, 0.06), inset 0 1px 0 rgba(255,255,255,0.85);
          }
          .cart-qty-stepper__btn{
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-width: 40px;
            padding: 0 8px;
            border: none;
            cursor: pointer;
            color: var(--secondary);
            background: rgba(245, 192, 0, 0.12);
            transition: background 0.15s ease, color 0.15s ease, transform 0.12s ease;
          }
          .cart-qty-stepper__btn:hover:not(:disabled){
            background: rgba(245, 192, 0, 0.28);
            color: var(--secondary);
          }
          .cart-qty-stepper__btn:active:not(:disabled){
            transform: scale(0.96);
          }
          .cart-qty-stepper__btn:disabled{
            opacity: 0.45;
            cursor: not-allowed;
          }
          .cart-qty-stepper__btn--minus{
            border-inline-end: 1px solid rgba(245, 192, 0, 0.22);
          }
          .cart-qty-stepper__btn--plus{
            border-inline-start: 1px solid rgba(245, 192, 0, 0.22);
          }
          .cart-qty-stepper__input{
            width: 48px;
            min-width: 44px;
            border: none;
            text-align: center;
            font-weight: 900;
            font-size: 0.95rem;
            font-variant-numeric: tabular-nums;
            color: var(--secondary);
            background: transparent;
            padding: 8px 4px;
            outline: none;
          }
          .cart-qty-stepper__input:focus{
            background: rgba(255, 255, 255, 0.65);
          }
          .cart-qty-stepper__input:disabled{
            opacity: 0.5;
          }
          .cart-item-remove{
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 42px;
            height: 42px;
            border-radius: 12px;
            border: 1.5px solid rgba(229, 115, 115, 0.35);
            background: linear-gradient(180deg, rgba(255, 241, 241, 0.98) 0%, rgba(255, 250, 250, 0.88) 100%);
            color: #c62828;
            cursor: pointer;
            box-shadow: 0 2px 8px rgba(198, 40, 40, 0.08);
            transition: background 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease, transform 0.12s ease;
          }
          .cart-item-remove:hover:not(:disabled){
            background: rgba(255, 227, 227, 0.95);
            border-color: rgba(198, 40, 40, 0.45);
            box-shadow: 0 4px 14px rgba(198, 40, 40, 0.14);
          }
          .cart-item-remove:active:not(:disabled){
            transform: scale(0.96);
          }
          .cart-item-remove:disabled{
            opacity: 0.5;
            cursor: not-allowed;
          }
          @media (max-width: 420px){
            .cart-qty-stepper__btn{ min-width: 36px; }
            .cart-qty-stepper__input{ width: 42px; min-width: 38px; font-size: 0.9rem; }
            .cart-item-remove{ width: 40px; height: 40px; border-radius: 11px; }
          }
        `}})]})})},iS=()=>{const[e,t]=m.useState([]),[n,a]=m.useState(!0),{showAlert:o,showPrompt:l,showSelect:d}=Ue(),h=localStorage.getItem("isGuest")==="true",u=xc(),f=!!localStorage.getItem("token")&&!h&&localStorage.getItem("user_type")==="shopper",[y,x]=m.useState({}),[v,_]=m.useState(null);m.useEffect(()=>{if(!f){x({});return}let S=!1;return(async()=>{try{const j=await To();if(S)return;const E={};for(const M of j||[])(M.product==null||M.product==="")&&M.sponsored_ad!=null&&(E[M.sponsored_ad]=M.id);x(E)}catch{S||x({})}})(),()=>{S=!0}},[f]),m.useEffect(()=>{(async()=>{try{const j=await qy();t(j)}catch(j){console.error("Error fetching offers:",j)}finally{a(!1)}})()},[]);const b=async S=>{if(!u){await o("ميزة السلال للأعضاء المسجّلين فقط (متسوّق، تاجر، أو مدير) وليست لوضع الزائر. سجّل الدخول ثم أعد المحاولة.","تنبيه");return}_(S);const j=await Ji(),E=Array.isArray(j)?j:[],M=E.map(O=>({id:String(O.id),label:O.name||`سلة #${O.id}`,value:O.id,badge:Array.isArray(O.items)?O.items.length:0})),P=await d(E.length===0?"لا يوجد لديك أي سلال.":"اختر السلة التي تريد إضافة المنتج إليها:","إضافة إلى أي سلة؟",M,{primaryActionLabel:E.length===0?"إنشاء أول سلة":"سلة جديدة"});if(P!=null){if(P==="__primary__"){await z();return}await C({id:P})}},z=async()=>{const S=await l("اكتب اسم السلة الجديدة:","اسم السلة...");if(!S)return;const j=await mc(String(S)),E=v;E&&(await ca(j.id,E.productId??null,E.quantity??1,E.sponsoredAdId??null),await o("تمت إضافة المنتج إلى السلة.","تم"),_(null))},C=async S=>{const j=v;j&&(await ca(S.id,j.productId??null,j.quantity??1,j.sponsoredAdId??null),await o("تمت إضافة المنتج إلى السلة.","تم"),_(null))},N=async S=>{try{await b({productId:S.product??null,sponsoredAdId:S.id,quantity:1})}catch(j){await o(Je(j,"تعذرت الإضافة للسلة."),"خطأ")}},w=async S=>{if(!f){await o("سجّل دخول كمتسوق لإضافة المنتج للمفضلة.","تنبيه");return}try{if(!S.product){const j=y[S.id];if(j)await Dl(j),x(E=>{const M={...E};return delete M[S.id],M}),await o("أُزيل العرض المستقل من المفضلة.","تم");else{await uo(null,S.id);const M=(await To()||[]).find(P=>P.sponsored_ad===S.id&&(P.product==null||P.product===""));M&&x(P=>({...P,[S.id]:M.id})),await o("تمت إضافة عرض الإعلان — يُزال تلقائياً عند انتهاء الإعلان.","تم")}return}await uo(S.product,S.id),await o("تمت إضافة المنتج للمفضلة.","تم")}catch(j){await o(Je(j,"تعذرت الإضافة للمفضلة."),"خطأ")}};return i.jsx(Ce,{children:i.jsxs("div",{className:"offers-page-wrap",children:[i.jsxs("header",{className:"offers-hero",children:[i.jsx("div",{className:"offers-hero-icon","aria-hidden":!0,children:i.jsx(Ol,{size:26,strokeWidth:2.25})}),i.jsxs("div",{className:"offers-hero-text",children:[i.jsx("h1",{className:"offers-hero-title",children:"عروض حصرية"}),i.jsx("p",{className:"offers-hero-sub",children:"عروض مُختارة من المتاجر — بطاقات مرتبة لتصفّح مريح على كل الأجهزة"})]})]}),n?i.jsx("p",{className:"offers-loading",children:"جاري تحميل العروض..."}):e.length>0?i.jsx("div",{className:"offers-grid",children:e.map(S=>i.jsxs("article",{className:"offers-card",children:[i.jsxs("div",{className:"offers-card-media",children:[Ie(S).length>0?i.jsx(jt,{images:Ie(S),fill:!0,borderRadius:0}):i.jsx("div",{className:"offers-card-media-fallback",children:"عرض"}),i.jsxs("div",{className:"offers-card-media-overlay",children:[i.jsx("div",{className:"offers-card-media-title",children:S.title}),Number(S.product_price)>0?i.jsxs("div",{className:"offers-card-media-price",children:[Number(S.product_price).toFixed(2)," ₪"]}):null]}),u?i.jsx("button",{type:"button",className:"offers-card-media-cartbtn",onClick:()=>N(S),title:"إضافة إلى السلة","aria-label":"إضافة إلى السلة",children:i.jsx(Jn,{size:18})}):null]}),i.jsxs("div",{className:"offers-card-body",children:[i.jsx("span",{className:"offers-card-store",children:S.store_name}),i.jsx(me,{to:`/stores/${S.store}`,state:S.product?{scrollToProductId:S.product}:void 0,className:"offers-card-title-link",title:"فتح المنتج داخل المتجر",children:i.jsx("h2",{className:"offers-card-title",children:S.title})}),Number(S.product_price)>0?i.jsxs("div",{className:"offers-card-prices",children:[S.product_details&&Number(S.product_details.price)!==Number(S.product_price)?i.jsxs("span",{className:"offers-price-old",children:[Number(S.product_details.price).toFixed(2)," ₪"]}):null,i.jsxs("span",{className:"offers-price-now",children:[Number(S.product_price).toFixed(2)," ₪"]}),S.product_details&&Number(S.product_details.price)!==Number(S.product_price)?i.jsx("span",{className:"offers-price-badge",children:"عرض"}):null]}):null,S.description?i.jsx("p",{className:"offers-card-desc",children:S.description}):null,u||f?i.jsxs("div",{className:"offers-card-actions",children:[u?i.jsxs("button",{type:"button",className:"offers-btn offers-btn--primary",onClick:()=>N(S),children:[i.jsx(Jn,{size:18}),"إضافة للسلة"]}):null,f?i.jsxs("button",{type:"button",className:"offers-btn offers-btn--ghost",onClick:()=>w(S),title:S.product?"":"يُزال من المفضلة عند انتهاء الإعلان",children:[i.jsx(_r,{size:18,color:"#e91e63",fill:S.product?"none":y[S.id]?"#e91e63":"none"}),"مفضلة"]}):null]}):null,i.jsx(me,{to:`/stores/${S.store}`,className:"offers-btn offers-btn--block",children:"عرض المتجر"})]})]},S.id))}):i.jsxs("div",{className:"offers-empty card",children:[i.jsx(Ol,{size:44,color:"var(--text-light)","aria-hidden":!0}),i.jsx("p",{children:"لا توجد عروض حالياً. عد لاحقاً."})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .offers-page-wrap {
            max-width: 1240px;
            margin-inline: auto;
            padding-inline: clamp(8px, 2.2vw, 22px);
            padding-bottom: 32px;
            box-sizing: border-box;
          }
          .offers-hero {
            display: flex;
            align-items: flex-start;
            gap: 16px;
            margin-bottom: clamp(22px, 4vw, 32px);
            padding: 20px 22px;
            border-radius: 22px;
            background: linear-gradient(135deg, rgba(255, 250, 232, 0.95) 0%, var(--white) 55%, var(--surface) 100%);
            border: 1px solid rgba(245, 192, 0, 0.35);
            box-shadow: 0 10px 32px rgba(30, 30, 46, 0.07);
          }
          .offers-hero-icon {
            flex-shrink: 0;
            width: 52px;
            height: 52px;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
            color: var(--secondary);
            box-shadow: var(--shadow-gold);
          }
          .offers-hero-title {
            margin: 0;
            font-size: clamp(1.35rem, 4vw, 1.65rem);
            font-weight: 900;
            color: var(--secondary);
            letter-spacing: -0.02em;
          }
          .offers-hero-sub {
            margin: 8px 0 0;
            font-size: 0.88rem;
            font-weight: 600;
            color: var(--text-secondary);
            line-height: 1.5;
            max-width: 520px;
          }
          .offers-loading {
            color: var(--text-secondary);
            font-weight: 700;
          }
          .offers-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 20px;
            align-items: start;
          }
          @media (max-width: 720px) {
            .offers-grid {
              grid-template-columns: 1fr;
              gap: 22px;
              justify-items: center;
            }
            .offers-card {
              width: 100%;
              max-width: 360px;
            }
          }
          @media (min-width: 960px) {
            .offers-grid {
              grid-template-columns: repeat(3, 1fr);
              gap: 24px;
            }
          }
          .offers-card {
            border-radius: 22px;
            overflow: hidden;
            background: var(--white);
            border: 1px solid rgba(224, 223, 213, 0.95);
            box-shadow: 0 8px 28px rgba(30, 30, 46, 0.08);
            transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
            display: flex;
            flex-direction: column;
            min-height: 0;
          }
          .offers-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 14px 40px rgba(245, 192, 0, 0.16);
            border-color: rgba(245, 192, 0, 0.4);
          }
          .offers-card-media {
            flex: 0 0 auto;
            width: 100%;
            aspect-ratio: 4 / 3;
            min-height: 120px;
            max-height: 240px;
            background: linear-gradient(180deg, var(--grey-light), #f0efe8);
            position: relative;
            display: flex;
            flex-direction: column;
            min-width: 0;
          }
          .offers-card-media > .radar-image-carousel,
          .offers-card-media > .offers-card-media-fallback {
            flex: 1 1 auto;
            min-height: 0;
            width: 100%;
          }
          .offers-card-media img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .offers-card-media-cartbtn{
            position: absolute;
            top: 10px;
            inset-inline-end: 10px;
            z-index: 3;
            width: 40px;
            height: 40px;
            border-radius: 14px;
            border: 1px solid rgba(245,192,0,0.45);
            background: rgba(255, 255, 255, 0.92);
            box-shadow: 0 6px 18px rgba(26, 29, 38, 0.14);
            color: var(--secondary);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: transform 0.12s ease, filter 0.15s ease;
          }
          .offers-card-media-cartbtn:hover{
            transform: translateY(-1px);
            filter: brightness(1.02);
          }
          .offers-card-media-cartbtn:active{
            transform: translateY(0);
          }
          .offers-card-media-overlay{
            position: absolute;
            inset-inline: 0;
            bottom: 0;
            padding-block: 10px 9px;
            padding-inline: 10px;
            background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.58) 65%, rgba(0,0,0,0.72) 100%);
            color: #fff;
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 10px;
            pointer-events: none;
          }
          .offers-card-media:has(.offers-card-media-cartbtn) .offers-card-media-overlay {
            padding-inline-end: 52px;
          }
          .offers-card-media-title{
            font-weight: 950;
            font-size: 0.92rem;
            line-height: 1.2;
            min-width: 0;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-shadow: 0 2px 10px rgba(0,0,0,0.35);
          }
          .offers-card-media-price{
            flex: 0 0 auto;
            font-weight: 950;
            font-size: 0.9rem;
            padding: 6px 10px;
            border-radius: 999px;
            background: rgba(255,255,255,0.18);
            border: 1px solid rgba(255,255,255,0.22);
            backdrop-filter: blur(6px);
            text-shadow: 0 2px 10px rgba(0,0,0,0.35);
            white-space: nowrap;
          }
          .offers-card-media-fallback {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 900;
            color: var(--text-light);
            font-size: 1.1rem;
          }
          .offers-card-body {
            padding: 16px 18px 18px;
            flex: 1 1 auto;
            min-height: 0;
            display: flex;
            flex-direction: column;
            gap: 2px;
          }
          .offers-card-store {
            display: inline-block;
            font-size: 0.78rem;
            font-weight: 800;
            color: var(--secondary);
            background: var(--primary-light);
            padding: 5px 10px;
            border-radius: 8px;
            margin-bottom: 8px;
          }
          .offers-card-title {
            margin: 0 0 10px;
            font-size: 1.05rem;
            font-weight: 900;
            color: var(--secondary);
            line-height: 1.35;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .offers-card-title-link{
            text-decoration: none;
            color: inherit;
          }
          .offers-card-prices {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 8px;
            margin-bottom: 10px;
          }
          .offers-price-old {
            text-decoration: line-through;
            color: var(--text-secondary);
            font-size: 0.88rem;
            font-weight: 600;
          }
          .offers-price-now {
            font-weight: 900;
            font-size: 1.05rem;
            color: var(--secondary);
          }
          .offers-price-badge {
            font-size: 0.72rem;
            font-weight: 900;
            padding: 3px 8px;
            border-radius: 8px;
            background: rgba(245, 192, 0, 0.35);
            color: var(--secondary);
          }
          .offers-card-desc {
            margin: 0 0 14px;
            font-size: 0.88rem;
            color: var(--text-secondary);
            line-height: 1.55;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .offers-card-actions {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            margin-bottom: 10px;
            flex-shrink: 0;
          }
          .offers-btn {
            font-family: inherit;
            font-weight: 800;
            font-size: 0.86rem;
            border-radius: 14px;
            padding: 11px 14px;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            text-decoration: none;
            border: none;
            transition: filter 0.15s ease, transform 0.12s ease;
          }
          .offers-btn:active {
            transform: scale(0.98);
          }
          .offers-btn--primary {
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
            color: var(--secondary);
            box-shadow: var(--shadow-gold);
          }
          .offers-btn--primary:hover {
            filter: brightness(1.05);
          }
          .offers-btn--ghost {
            background: var(--surface);
            color: var(--secondary);
            border: 1.5px solid var(--border);
          }
          .offers-btn--ghost:hover {
            background: var(--primary-light);
            border-color: var(--primary);
          }
          .offers-btn--block {
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
            background: var(--white);
            border: 2px solid var(--primary);
            color: var(--secondary);
            margin-top: auto;
            flex-shrink: 0;
            min-height: 44px;
            line-height: 1.25;
            text-align: center;
            white-space: normal;
          }
          .offers-btn--block:hover {
            background: var(--primary-light);
          }
          .offers-empty {
            text-align: center;
            padding: 48px 24px;
            color: var(--text-secondary);
            font-weight: 700;
          }
          .offers-empty p {
            margin: 16px 0 0;
          }
        `}})]})})};function Rd(e,t){const a=f=>f*Math.PI/180,o=a(t[0]-e[0]),l=a(t[1]-e[1]),d=a(e[0]),h=a(t[0]),u=Math.sin(o/2)**2+Math.cos(d)*Math.cos(h)*Math.sin(l/2)**2;return 6371*(2*Math.atan2(Math.sqrt(u),Math.sqrt(1-u)))}function Od(e){const t=Number(e==null?void 0:e.latitude),n=Number(e==null?void 0:e.longitude);return Number.isFinite(t)&&Number.isFinite(n)}const Bd=12,aS=()=>{const[e]=ic(),t=e.get("q")||"",n=t.trim(),a=n.toLowerCase(),{userMapLocation:o,setSearchQuery:l}=Vo(),[d,h]=m.useState([]),[u,f]=m.useState([]),[y,x]=m.useState(!0),[v,_]=m.useState(""),[b,z]=m.useState(null),[C,N]=m.useState(1);m.useEffect(()=>{l(n)},[n,l]),m.useEffect(()=>{N(1)},[t]),m.useEffect(()=>{let P=!1;return(async()=>{try{const O=await ui();P||f(Array.isArray(O)?O:[])}catch(O){console.error(O),P||f([])}})(),()=>{P=!0}},[]),m.useEffect(()=>{let P=!1;return(async()=>{try{x(!0),_("");let O,I,F=null;(o==null?void 0:o.length)===2?(O=o[0],I=o[1],F=[O,I],P||z(F)):(O=31.5,I=34.4,F=null,P||z(null));const V=await pc(O,I),D=Array.isArray(V)?V:(V==null?void 0:V.results)||[];P||h(D)}catch(O){console.error(O),P||(_("تعذر تحميل المتاجر. تحقق من الاتصال بالخادم."),h([]))}finally{P||x(!1)}})(),()=>{P=!0}},[o]);const w=m.useMemo(()=>a?(d||[]).filter(P=>{const O=(P.store_name||"").toLowerCase(),I=(P.category_name||"").toLowerCase();return O.includes(a)||I.includes(a)}):d,[d,a]),S=m.useMemo(()=>{if(!b)return w;const P=b;return[...w].sort((O,I)=>{if(!Od(O))return 1;if(!Od(I))return-1;const F=Rd(P,[Number(O.latitude),Number(O.longitude)]),V=Rd(P,[Number(I.latitude),Number(I.longitude)]);return F-V})},[w,b]),j=Math.max(1,Math.ceil(S.length/Bd)),E=Math.min(C,j),M=m.useMemo(()=>{const P=(E-1)*Bd;return S.slice(P,P+Bd)},[S,E]);return m.useEffect(()=>{E!==C&&N(E)},[E,C]),i.jsx(Ce,{children:i.jsxs("div",{className:"search-page",children:[i.jsx("header",{className:"search-page-hero",children:i.jsxs("div",{className:"search-page-head",children:[i.jsx("h1",{className:"search-page-title",children:"نتائج البحث"}),n?i.jsxs("p",{className:"search-page-query",children:[i.jsx(Mo,{size:18,"aria-hidden":!0}),"«",n,"»"]}):i.jsx("p",{className:"search-page-hint",children:"اكتب في شريط البحث أعلاه واضغط Enter أو زر البحث لعرض المتاجر المطابقة."})]})}),v?i.jsx("p",{className:"search-page-error",children:v}):null,y?i.jsx("p",{className:"search-page-loading",children:"جاري تحميل المتاجر…"}):S.length===0?i.jsx("p",{className:"search-page-empty",children:n?"لا توجد متاجر تطابق بحثك. جرّب كلمات أخرى أو تصفح من الصفحة الرئيسية.":"لا توجد نتائج بعد."}):i.jsxs(i.Fragment,{children:[i.jsxs("p",{className:"search-page-count",children:[S.length," متجر"]}),i.jsx("div",{className:"search-page-grid",children:M.map(P=>{const O=gc(P,u),I=b&&Od(P)?Rd(b,[Number(P.latitude),Number(P.longitude)]):null,F=Io(P.business_hours_weekly)&&P.is_open_now===!0?"مفتوح":Io(P.business_hours_weekly)&&P.is_open_now===!1?"مغلق":null;return i.jsxs(me,{to:`/stores/${P.id}`,className:"search-page-card",children:[i.jsxs("div",{className:"search-page-card-main",children:[i.jsxs("div",{className:"search-page-card-text",children:[i.jsx("span",{className:"search-page-card-name",children:P.store_name}),P.category_name?i.jsx("span",{className:"search-page-card-cat",children:P.category_name}):null,i.jsx("span",{className:"search-page-card-dist",children:I!=null?`📍 ${I.toFixed(1)} كم`:"بدون مسافة"})]}),F?i.jsx("span",{className:"search-page-card-status",children:F}):null]}),i.jsx("div",{className:"search-page-card-thumb",children:O.type==="image"?i.jsx("img",{className:"search-page-card-thumb-img",src:O.url,alt:""}):i.jsx("span",{className:"search-page-card-thumb-emoji",style:{background:O.bg},children:O.emoji})})]},P.id)})}),j>1?i.jsxs("div",{className:"search-page-pager",role:"navigation","aria-label":"تصفح الصفحات",children:[i.jsx("button",{type:"button",className:"search-page-pager-btn",disabled:E<=1,onClick:()=>N(P=>Math.max(1,P-1)),children:"السابق"}),i.jsxs("span",{className:"search-page-pager-meta",children:[E," / ",j]}),i.jsx("button",{type:"button",className:"search-page-pager-btn",disabled:E>=j,onClick:()=>N(P=>Math.min(j,P+1)),children:"التالي"})]}):null]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .search-page {
            max-width: 1240px;
            margin-inline: auto;
            padding-inline: clamp(8px, 2.2vw, 22px);
            box-sizing: border-box;
            padding-bottom: 28px;
          }
          .search-page-hero {
            margin-bottom: 22px;
            padding: clamp(18px, 3vw, 24px) clamp(16px, 2.5vw, 22px);
            border-radius: var(--radius-xl);
            background: linear-gradient(160deg, var(--white) 0%, var(--primary-light) 100%);
            border: 1px solid rgba(255, 214, 10, 0.28);
            box-shadow: var(--shadow-sm);
          }
          .search-page-head {
            margin: 0;
          }
          .search-page-title {
            margin: 0 0 8px;
            font-size: 1.45rem;
            font-weight: 900;
            color: var(--secondary);
          }
          .search-page-query {
            margin: 0;
            display: flex;
            align-items: center;
            gap: 8px;
            font-weight: 700;
            color: var(--text-secondary);
            font-size: 0.95rem;
          }
          .search-page-hint {
            margin: 0;
            line-height: 1.6;
            color: var(--text-secondary);
            font-size: 0.92rem;
          }
          .search-page-error {
            color: #c0392b;
            font-weight: 800;
          }
          .search-page-loading,
          .search-page-empty {
            color: var(--text-secondary);
            line-height: 1.65;
          }
          .search-page-count {
            margin: 0 0 12px;
            font-size: 0.88rem;
            font-weight: 800;
            color: var(--text-secondary);
          }
          .search-page-grid {
            display: flex;
            flex-direction: column;
            gap: 12px;
          }
          .search-page-card {
            display: flex;
            align-items: stretch;
            gap: 12px;
            padding: 16px 18px;
            border-radius: var(--radius-xl);
            background: var(--white);
            border: 1px solid var(--border);
            box-shadow: 0 6px 20px rgba(30, 30, 46, 0.06);
            text-decoration: none;
            color: inherit;
            transition: box-shadow 0.2s ease, border-color 0.2s ease;
          }
          .search-page-card:hover {
            border-color: rgba(245, 192, 0, 0.45);
            box-shadow: var(--shadow-gold);
          }
          .search-page-card-main {
            flex: 1;
            min-width: 0;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 10px;
          }
          .search-page-card-text {
            display: flex;
            flex-direction: column;
            gap: 4px;
            min-width: 0;
          }
          .search-page-card-name {
            font-weight: 900;
            font-size: 1rem;
            color: var(--secondary);
          }
          .search-page-card-cat {
            font-size: 0.82rem;
            font-weight: 700;
            color: var(--text-secondary);
          }
          .search-page-card-dist {
            font-size: 0.8rem;
            color: var(--text-light);
          }
          .search-page-card-status {
            flex-shrink: 0;
            font-size: 0.72rem;
            font-weight: 800;
            padding: 4px 10px;
            border-radius: 999px;
            background: var(--primary-light);
            color: var(--secondary);
          }
          .search-page-card-thumb {
            flex-shrink: 0;
            width: 56px;
            height: 56px;
            border-radius: 14px;
            overflow: hidden;
            border: 1px solid var(--border);
          }
          .search-page-card-thumb-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }
          .search-page-card-thumb-emoji {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
          }
          .search-page-pager {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 16px;
            margin-top: 22px;
            flex-wrap: wrap;
          }
          .search-page-pager-btn {
            font-family: inherit;
            font-weight: 800;
            font-size: 0.88rem;
            padding: 10px 18px;
            border-radius: 12px;
            border: 1px solid var(--border);
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
            color: var(--secondary);
            cursor: pointer;
            box-shadow: var(--shadow-sm);
          }
          .search-page-pager-btn:disabled {
            opacity: 0.45;
            cursor: not-allowed;
          }
          .search-page-pager-meta {
            font-weight: 800;
            font-size: 0.88rem;
            color: var(--text-secondary);
          }
        `}})]})})},oS=()=>{const[e,t]=m.useState([]),[n,a]=m.useState([]),[o,l]=m.useState(!0),[d,h]=m.useState("products"),[u,f]=m.useState(localStorage.getItem("isGuest")==="true"),{showAlert:y,showConfirm:x,showPrompt:v,showSelect:_}=Ue(),[b,z]=m.useState(null),C=m.useCallback(async()=>{l(!0);try{const I=localStorage.getItem("token")&&localStorage.getItem("isGuest")!=="true"&&localStorage.getItem("user_type")==="shopper",[F,V,D]=await Promise.all([To(),Gy(),I?Vy().catch(()=>({notices:[]})):Promise.resolve({notices:[]})]);t(Array.isArray(F)?F:(F==null?void 0:F.results)||[]),a(Array.isArray(V)?V:(V==null?void 0:V.results)||[]);const ae=D==null?void 0:D.notices,oe=Array.isArray(ae)?ae:[];for(const Q of oe){const J=typeof Q=="string"?Q:Q==null?void 0:Q.text;J&&await y(J,"تنبيه")}}catch(I){console.error("Error fetching favorites:",I),t([]),a([])}finally{l(!1)}},[y]);m.useEffect(()=>{C()},[C]);const N=async(I,{allowCreate:F=!0}={})=>{if(!xc()){await y("ميزة السلال للأعضاء المسجّلين فقط (متسوّق، تاجر، أو مدير) وليست لوضع الزائر. سجّل الدخول ثم أعد المحاولة.");return}z(I);const V=await Ji(),D=Array.isArray(V)?V:[],ae=D.map(Q=>({id:String(Q.id),label:Q.name||`سلة #${Q.id}`,value:Q.id,badge:Array.isArray(Q.items)?Q.items.length:0})),oe=await _(D.length===0?"لا يوجد لديك أي سلال.":"اختر السلة التي تريد إضافة المنتج إليها:","إضافة إلى أي سلة؟",ae,F?{primaryActionLabel:D.length===0?"إنشاء أول سلة":"سلة جديدة"}:{});if(oe!=null){if(oe==="__primary__"){if(!F)return;await w();return}await S({id:oe})}},w=async()=>{const I=await v("اكتب اسم السلة الجديدة:","اسم السلة...");if(!I)return;const F=await mc(String(I)),V=b;V&&(await ca(F.id,V.productId??null,V.quantity??1,V.sponsoredAdId??null),await y(V.success||"تمت الإضافة للسلة.","تم"),z(null))},S=async I=>{const F=b;F&&(await ca(I.id,F.productId??null,F.quantity??1,F.sponsoredAdId??null),await y(F.success||"تمت الإضافة للسلة.","تم"),z(null))},j=async I=>{if(await x("إزالة هذا المنتج من المفضلة؟"))try{await Dl(I),t(V=>V.filter(D=>D.id!==I))}catch{y("حدث خطأ أثناء الإزالة.")}},E=async I=>{if(await x("إزالة هذا المحل من المفضلة؟"))try{await Ky(I),a(V=>V.filter(D=>D.id!==I))}catch{y("حدث خطأ أثناء الإزالة.")}},M=async I=>{if(I==null||I===""){await y("معرّف المنتج غير متوفر. افتح صفحة المتجر وأعد المحاولة.");return}try{await N({productId:I,sponsoredAdId:null,quantity:1,success:"تمت إضافة المنتج للسلة."},{allowCreate:!0})}catch{y("تعذرت الإضافة للسلة.")}},P=async I=>{try{await N({productId:null,sponsoredAdId:I,quantity:1,success:"تمت إضافة عرض الإعلان المستقل للسلة."})}catch{y("تعذرت الإضافة للسلة.")}},O=(I,F,V)=>i.jsxs("button",{type:"button",className:`fav-tab ${d===I?"fav-tab-active":""}`,onClick:()=>h(I),children:[F,V>0?i.jsx("span",{className:"fav-tab-count",children:V}):null]});return i.jsxs(Ce,{children:[i.jsx("div",{className:"favorites-page",children:u?i.jsx(hp,{title:"المفضلة متوفرة للأعضاء فقط",message:"سجل دخولك لتجميع المنتجات والمحلات المفضّلة لديك."}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"favorites-head flex-center",children:[i.jsx("div",{className:"favorites-head-icon",children:i.jsx(_r,{size:24})}),i.jsx("h1",{className:"favorites-head-title",children:"المفضلة"})]}),i.jsxs("div",{className:"fav-tabs-row",children:[O("products","المنتجات المفضّلة",e.length),O("stores","المحلات المفضّلة",n.length)]}),o?i.jsx("p",{children:"جاري التحميل..."}):d==="products"?e.length>0?i.jsx("div",{className:"favorites-grid",children:e.map(I=>{const F=(I.product==null||I.product==="")&&I.sponsored_ad!=null,V=I.standalone_ad_display;if(F){if(!V)return i.jsxs("div",{className:"card favorite-card favorite-card--expired",children:[i.jsx("p",{className:"favorite-card-title",children:"عرض ممول مستقل"}),i.jsx("p",{className:"favorite-card-sub",children:"هذا الإعلان انتهى أو لم يعد متاحاً. يمكنك إزالته من المفضلة."}),i.jsx("button",{type:"button",className:"btn-primary",style:{marginTop:14},onClick:()=>j(I.id),children:"إزالة من المفضلة"})]},I.id);const W=Ie(V);return i.jsxs("div",{className:"card favorite-card",children:[i.jsx("div",{className:"favorite-card-media",children:W.length>0?i.jsx(jt,{images:W,height:220,borderRadius:0}):i.jsx($n,{size:40,color:"var(--text-secondary)"})}),i.jsxs("div",{className:"favorite-card-body",children:[i.jsx("span",{className:"badge",style:{display:"inline-block",marginBottom:8,background:"#FFF9E6",color:"var(--secondary)",fontWeight:800,fontSize:"0.78rem"},children:"عرض ممول مستقل — يُزال تلقائياً عند انتهاء الإعلان"}),V.store_name?i.jsxs("p",{style:{margin:"0 0 8px",fontSize:"0.88rem",fontWeight:800,color:"var(--secondary)"},children:["المتجر: ",V.store_name]}):null,i.jsxs("div",{className:"flex-center",style:{justifyContent:"space-between",marginBottom:"12px"},children:[i.jsx("h3",{style:{fontSize:"1.2rem",margin:0},children:V.title}),i.jsx("button",{type:"button",className:"action-btn delete",onClick:()=>j(I.id),style:{background:"none",border:"none",cursor:"pointer",color:"#FF5252"},"aria-label":"إزالة من المفضلة",children:i.jsx(Qr,{size:20})})]}),i.jsxs("p",{style:{color:"var(--secondary)",fontWeight:"bold",fontSize:"1.1rem"},children:[Number(V.product_price).toFixed(2)," ₪"]}),i.jsx("p",{style:{color:"#666",fontSize:"0.85rem",marginTop:"5px"},children:V.description||"—"}),i.jsxs("div",{className:"actions",style:{marginTop:"20px",display:"flex",gap:8,flexWrap:"wrap"},children:[i.jsxs("button",{type:"button",className:"btn-primary",style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"10px"},onClick:()=>P(I.sponsored_ad),children:[i.jsx(Zu,{size:18})," إضافة للسلة"]}),V.store!=null?i.jsx(me,{to:`/stores/${V.store}`,style:{display:"inline-flex",alignItems:"center",padding:"10px 14px",borderRadius:10,border:"1.5px solid var(--border)",textDecoration:"none",color:"var(--secondary)",fontWeight:700,fontSize:"0.9rem"},children:"المتجر"}):null]})]})]},I.id)}const D=I.product_details||{},ae=D.id??I.product??null,oe=Number(D.price),Q=Number.isFinite(oe)?oe.toFixed(2):D.price??"",J=D.store??D.store_id??I.store??null;return i.jsxs("div",{className:"card favorite-card",children:[J?i.jsx(me,{to:`/stores/${J}`,state:{scrollToProductId:D.id},className:"favorite-card-media",title:"فتح المنتج داخل المتجر",children:Ie(D).length>0?i.jsx(jt,{images:Ie(D),height:220,borderRadius:0}):i.jsx(kr,{size:40,color:"var(--text-secondary)"})}):i.jsx("div",{className:"favorite-card-media",children:Ie(D).length>0?i.jsx(jt,{images:Ie(D),height:220,borderRadius:0}):i.jsx(kr,{size:40,color:"var(--text-secondary)"})}),i.jsxs("div",{className:"favorite-card-body",children:[D.store_name?i.jsxs("p",{style:{margin:"0 0 8px",fontSize:"0.88rem",fontWeight:800,color:"var(--secondary)"},children:["المتجر: ",D.store_name]}):null,i.jsxs("div",{className:"flex-center",style:{justifyContent:"space-between",marginBottom:"12px"},children:[i.jsx("h3",{style:{fontSize:"1.2rem",margin:0},children:D.name}),i.jsx("button",{type:"button",className:"action-btn delete",onClick:()=>j(I.id),style:{background:"none",border:"none",cursor:"pointer",color:"#FF5252"},"aria-label":"إزالة من المفضلة",children:i.jsx(Qr,{size:20})})]}),i.jsxs("div",{className:"favorite-card-price",children:[Q," ₪"]}),i.jsx("div",{className:"favorite-card-desc",children:D.description||"لا يوجد وصف"}),i.jsxs("div",{className:"actions",style:{marginTop:"20px",display:"flex",gap:8,flexWrap:"wrap"},children:[i.jsxs("button",{type:"button",className:"btn-primary",style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"10px"},disabled:ae==null||ae==="",title:ae==null||ae===""?"لا يمكن الإضافة — بيانات المنتج ناقصة":"إضافة المنتج إلى سلة تختارها",onClick:()=>M(ae),children:[i.jsx(Zu,{size:18})," إضافة للسلة"]}),D.store!=null?i.jsx(me,{to:`/stores/${D.store}`,className:"favorite-card-storebtn",style:{display:"inline-flex",alignItems:"center",padding:"10px 14px",borderRadius:10,border:"1.5px solid var(--border)",textDecoration:"none",color:"var(--secondary)",fontWeight:700,fontSize:"0.9rem"},children:"المتجر"}):null]})]})]},I.id)})}):i.jsxs("div",{className:"empty-state card flex-center",style:{flexDirection:"column",padding:"50px"},children:[i.jsx(_r,{size:48,color:"#ccc"}),i.jsx("p",{style:{marginTop:"15px",color:"#777"},children:"لا توجد منتجات مفضّلة بعد."}),i.jsx("p",{style:{color:"#999",fontSize:"0.9rem"},children:"افتح صفحة أي متجر واضغط القلب بجانب المنتج."})]}):n.length>0?i.jsx("div",{className:"favorites-grid",style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(min(280px, 100%), 1fr))",gap:"20px"},children:n.map(I=>{const F=I.store_details||{};return i.jsxs("div",{className:"card favorite-card favorite-card--store",children:[i.jsxs("div",{className:"flex-center",style:{justifyContent:"space-between",marginBottom:"12px"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[i.jsx("div",{style:{width:48,height:48,borderRadius:12,overflow:"hidden",background:"var(--grey-light)",display:"flex",alignItems:"center",justifyContent:"center"},children:F.logo?i.jsx("img",{src:F.logo,alt:"",style:{width:"100%",height:"100%",objectFit:"cover"}}):i.jsx(zt,{size:22,color:"var(--text-secondary)"})}),i.jsxs("div",{children:[i.jsx("h3",{style:{fontSize:"1.15rem",margin:0},children:F.store_name}),i.jsx("div",{style:{fontSize:"0.85rem",color:"var(--text-secondary)",marginTop:4},children:F.category_name||"متجر"})]})]}),i.jsx("button",{type:"button",onClick:()=>E(I.id),style:{background:"none",border:"none",cursor:"pointer",color:"#FF5252"},"aria-label":"إزالة من المفضلة",children:i.jsx(Qr,{size:20})})]}),F.description?i.jsxs("p",{style:{color:"#666",fontSize:"0.88rem",lineHeight:1.5,marginTop:8},children:[F.description.slice(0,140),F.description.length>140?"…":""]}):null,i.jsx(me,{to:`/stores/${F.id}`,className:"btn-primary",style:{display:"inline-flex",marginTop:16,padding:"10px 16px",borderRadius:10,textDecoration:"none",fontWeight:800},children:"عرض المتجر"})]},I.id)})}):i.jsxs("div",{className:"empty-state card flex-center",style:{flexDirection:"column",padding:"50px"},children:[i.jsx(zt,{size:48,color:"#ccc"}),i.jsx("p",{style:{marginTop:"15px",color:"#777"},children:"لا توجد محلات مفضّلة بعد."}),i.jsx("p",{style:{color:"#999",fontSize:"0.9rem"},children:"افتح صفحة المتجر واضغط القلب بجانب الاسم."})]})]})}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .favorites-page{
          max-width: 1240px;
          margin-inline: auto;
          padding-inline: clamp(8px, 2.2vw, 22px);
          padding-bottom: 32px;
          box-sizing: border-box;
        }
        .favorites-head{
          justify-content: flex-start;
          gap: 14px;
          margin-bottom: 18px;
          flex-wrap: wrap;
        }
        .favorites-head-icon{
          background: linear-gradient(135deg, #ff6b6b, #ff3b3b);
          padding: 10px;
          border-radius: 14px;
          color: #fff;
          box-shadow: 0 10px 26px rgba(255, 82, 82, 0.22);
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .favorites-head-title{
          margin: 0;
          font-weight: 950;
          font-size: 1.65rem;
          color: var(--secondary);
          letter-spacing: -0.02em;
        }
        .fav-tabs-row{
          display: flex;
          gap: 10px;
          margin-bottom: 22px;
          flex-wrap: wrap;
        }
        .favorites-grid{
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }
        @media (min-width: 960px) {
          .favorites-grid{
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
        .favorite-card{
          display: flex;
          flex-direction: column;
          overflow: hidden;
          padding: 0;
        }
        .favorite-card--store{
          aspect-ratio: auto;
          padding: 20px;
          gap: 0;
        }
        .favorite-card-media{
          flex: 0 0 auto;
          width: 100%;
          aspect-ratio: 1;
          max-height: 200px;
          min-height: 120px;
          background: var(--grey-light);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        a.favorite-card-media{
          text-decoration: none;
          color: inherit;
          cursor: pointer;
        }
        .favorite-card-body{
          flex: 1 1 auto;
          min-height: 0;
          display: flex;
          flex-direction: column;
          padding: 14px 14px 16px;
          overflow: hidden;
        }
        .favorite-card h3{
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .favorite-card-body p{
          margin-bottom: 8px;
        }
        .favorite-card-price{
          font-weight: 950;
          color: var(--secondary);
          font-size: 1.08rem;
          margin: 0 0 8px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          align-self: flex-start;
          padding: 7px 12px;
          border-radius: 999px;
          background: rgba(255, 204, 0, 0.22);
          border: 1px solid rgba(245, 192, 0, 0.45);
          box-shadow: 0 6px 18px rgba(245, 192, 0, 0.16);
        }
        .favorite-card-desc{
          color: var(--text-secondary);
          font-size: 0.86rem;
          line-height: 1.45;
          margin: 0 0 8px;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .favorite-card .actions{
          margin-top: auto !important;
        }
        .favorite-card .actions{
          display: grid !important;
          grid-template-columns: 1fr;
          gap: 8px !important;
          align-items: stretch;
          width: 100%;
        }
        .favorite-card .actions .btn-primary{
          width: 100%;
          padding: 10px 12px;
          font-size: 0.9rem;
          border-radius: 14px;
        }
        .favorite-card-storebtn{
          width: 100%;
          box-sizing: border-box;
          border-radius: 14px !important;
          font-weight: 900 !important;
          justify-content: center !important;
          background: var(--white) !important;
          border: 1.5px solid var(--border) !important;
        }
        .favorite-card--expired{
          padding: 20px;
        }
        .favorite-card-title{
          margin: 0;
          font-weight: 900;
          color: var(--secondary);
        }
        .favorite-card-sub{
          color: var(--text-secondary);
          font-size: 0.92rem;
          margin-top: 8px;
          line-height: 1.6;
        }
        .fav-tab {
          border: 1.5px solid var(--border);
          background: var(--white);
          color: var(--secondary);
          padding: 10px 18px;
          border-radius: 999px;
          font-weight: 800;
          font-size: 0.95rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: background 0.15s, border-color 0.15s;
        }
        .fav-tab:hover { background: var(--primary-light); border-color: var(--primary); }
        .fav-tab-active {
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
          color: var(--secondary);
          border-color: transparent;
          box-shadow: var(--shadow-gold);
        }
        .fav-tab-count {
          background: rgba(0,0,0,0.08);
          padding: 2px 8px;
          border-radius: 999px;
          font-size: 0.82rem;
        }
        .fav-tab-active .fav-tab-count { background: rgba(255,255,255,0.35); }
      `}})]})},sS=()=>{const e=[{icon:i.jsx(jw,{size:24}),title:"البريد الإلكتروني",detail:"ismailnaser67@gmail.com",color:"#0984e3",action:{label:"تواصل عبر Gmail",href:"mailto:ismailnaser67@gmail.com?subject=%D8%AA%D9%88%D8%A7%D8%B5%D9%84%20%D9%85%D8%B9%20%D8%B1%D8%A7%D8%AF%D8%A7%D8%B1"}},{icon:i.jsx(oy,{size:24}),title:"واتساب الدعم",detail:"+970592377078",color:"#25D366",action:{label:"تواصل عبر واتساب",href:"https://wa.me/970592377078",target:"_blank",rel:"noreferrer",variant:"wa"}}];return i.jsx(Ce,{children:i.jsxs("div",{className:"contact-page",children:[i.jsx("div",{className:"contact-hero card flex-center",children:i.jsxs("div",{children:[i.jsx("h1",{className:"contact-title",children:"اتصل بنا"}),i.jsx("p",{className:"contact-subtitle",children:"نعمل على مدار الساعة (24/7) للإجابة على استفساراتكم."})]})}),i.jsx("div",{className:"contact-grid",children:e.map((t,n)=>i.jsxs("div",{className:"card contact-info-card",children:[i.jsx("div",{className:"contact-icon",style:{background:`${t.color}15`,color:t.color},children:t.icon}),i.jsx("h3",{className:"contact-info-title",children:t.title}),i.jsx("p",{className:"contact-info-detail",children:t.detail}),t.action?i.jsx("a",{className:`contact-action-btn${t.action.variant==="wa"?" contact-action-btn--wa":""}`,href:t.action.href,target:t.action.target,rel:t.action.rel,"aria-label":t.action.label,title:t.action.label,children:t.action.label}):null]},n))}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .contact-page {
            max-width: 1240px;
            margin-inline: auto;
            padding-inline: clamp(8px, 2.2vw, 22px);
            box-sizing: border-box;
            padding-bottom: 28px;
          }
          .contact-hero {
            background: linear-gradient(150deg, var(--white) 0%, var(--primary-light) 55%, rgba(255, 214, 10, 0.18) 100%);
            color: var(--secondary);
            padding: clamp(28px, 5vw, 44px) 24px;
            margin-bottom: 22px;
            text-align: center;
            border-radius: var(--radius-xl);
            border: 1px solid rgba(255, 214, 10, 0.35);
            box-shadow: var(--shadow);
            overflow: hidden;
          }

          .contact-title {
            font-size: clamp(1.5rem, 4vw, 2rem);
            margin-bottom: 8px;
            letter-spacing: -0.03em;
            font-weight: 900;
          }

          .contact-subtitle {
            color: var(--text-secondary);
            font-weight: 600;
            font-size: 0.95rem;
            line-height: 1.55;
            max-width: 480px;
            margin-inline: auto;
          }

          .contact-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr));
            gap: 18px;
          }

          .contact-info-card {
            padding: 28px;
            text-align: center;
            transition: transform 0.25s ease, box-shadow 0.25s ease;
          }

          .contact-info-card:hover {
            transform: translateY(-6px);
            box-shadow: var(--shadow-lg);
          }

          .contact-icon {
            width: 64px;
            height: 64px;
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 18px;
            box-shadow: var(--shadow-sm);
          }

          .contact-info-title { margin-bottom: 8px; }
          .contact-info-detail { font-weight: 800; font-size: 1.05rem; color: var(--text-primary); }
          .contact-action-btn{
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 11px 16px;
            border-radius: 14px;
            font-weight: 900;
            text-decoration: none;
            border: 1.5px solid var(--border);
            background: rgba(255, 255, 255, 0.92);
            color: var(--secondary);
            transition: filter 0.15s ease, transform 0.12s ease, box-shadow 0.15s ease, border-color 0.15s ease;
            box-shadow: 0 8px 24px rgba(26, 29, 38, 0.06);
            width: 100%;
            margin-top: 12px;
          }
          .contact-action-btn:hover{
            border-color: rgba(245, 192, 0, 0.45);
            box-shadow: 0 14px 32px rgba(245, 192, 0, 0.14);
          }
          .contact-action-btn:active{ transform: scale(0.99); }
          .contact-action-btn--wa{
            border-color: rgba(37, 211, 102, 0.35);
            background: linear-gradient(135deg, rgba(37, 211, 102, 0.16) 0%, rgba(255, 255, 255, 0.92) 100%);
          }
        `}})]})})},lS=()=>{const[e,t]=m.useState(""),[n,a]=m.useState(!1),[o,l]=m.useState(!1),[d,h]=m.useState(60),u=ct(),{showAlert:f}=Ue();m.useEffect(()=>{let v;return d>0&&(v=setInterval(()=>h(_=>_-1),1e3)),()=>clearInterval(v)},[d]);const y=async v=>{if(v.preventDefault(),e.length<6)return f("يرجى إدخال رمز التحقق المكون من 6 أرقام");a(!0);try{await jk(e),f("تم التحقق من حسابك بنجاح! أهلاً بك في رادار.","نجاح التوثيق"),u("/")}catch(_){f(Je(_,"تعذر التحقق. تأكد من الرمز ثم أعد المحاولة."),"خطأ في التحقق")}finally{a(!1)}},x=async()=>{l(!0);try{await kk(),f("تم إعادة إرسال رمز جديد إلى واتساب الخاص بك.","تم الإرسال"),h(60)}catch(v){f(Je(v,"فشل في إعادة إرسال الرمز، يرجى المحاولة لاحقاً."))}finally{l(!1)}};return i.jsx(Ce,{children:i.jsxs("div",{className:"verify-container flex-center",children:[i.jsx("div",{className:"verify-overlay"}),i.jsxs("div",{className:"card verify-card",style:{padding:"2rem 2.5rem"},children:[i.jsx("div",{className:"verify-logo flex-center",style:{marginBottom:"10px"},children:i.jsx("img",{src:"/logo.png",alt:"رادار",style:{width:"220px",maxWidth:"100%",objectFit:"contain"}})}),i.jsx("div",{className:"verify-icon flex-center",children:i.jsx(oy,{size:40,color:"var(--primary)"})}),i.jsx("h2",{style:{marginBottom:"10px"},children:"تحقق من هويتك"}),i.jsx("p",{style:{color:"#666",marginBottom:"25px",fontSize:"0.95rem"},children:"لقد أرسلنا رمز التحقق المكون من 6 أرقام إلى حساب الواتساب الخاص بك. يرجى إدخاله للمتابعة."}),i.jsxs("form",{onSubmit:y,children:[i.jsx(wt,{placeholder:"0 0 0 0 0 0",value:e,onChange:v=>t(v.target.value.replace(/[^0-9]/g,"").slice(0,6)),style:{textAlign:"center",fontSize:"1.8rem",letterSpacing:"8px",fontWeight:"bold"},required:!0}),i.jsx(St,{type:"submit",loading:n,style:{width:"100%",marginTop:"10px",height:"55px",fontSize:"1.1rem"},children:"تأكيد الرمز"})]}),i.jsx("div",{className:"verify-footer",style:{marginTop:"25px"},children:d>0?i.jsxs("p",{style:{color:"#999",fontSize:"0.9rem"},children:["يمكنك إعادة إرسال الرمز خلال ",i.jsx("span",{style:{color:"var(--secondary)",fontWeight:"bold"},children:d})," ثانية"]}):i.jsxs("button",{className:"resend-btn flex-center",onClick:x,disabled:o,style:{margin:"0 auto",gap:"8px",background:"transparent",border:"none",color:"var(--secondary)",cursor:"pointer",fontWeight:"bold"},children:[i.jsx(Mw,{size:18,className:o?"spin":""}),"إعادة إرسال الرمز"]})}),i.jsx("button",{onClick:()=>u("/login"),style:{marginTop:"20px",background:"transparent",border:"none",color:"#888",cursor:"pointer",fontSize:"0.85rem",textDecoration:"underline"},children:"العودة لتسجيل الدخول"})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
                    .verify-container { min-height: 100vh; background: var(--background); position: relative; padding: 20px; }
                    .verify-overlay { position: absolute; inset: 0; background: radial-gradient(900px 420px at 80% 10%, var(--primary-light), transparent 60%); }
                    .verify-card { position: relative; z-index: 1; width: 100%; max-width: 440px; text-align: center; border-radius: 26px; box-shadow: var(--shadow-lg); }
                    .verify-icon { width: 82px; height: 82px; background: rgba(245, 192, 0, 0.14); border-radius: 24px; margin: 0 auto 18px; }
                    .spin { animation: spin 1s linear infinite; }
                    @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                `}})]})})};function cS(e){if(e==null||e==="")return"";const t="٠١٢٣٤٥٦٧٨٩",n="۰۱۲۳۴۵۶۷۸۹",a="0123456789";let o="";for(const l of String(e)){let d=t.indexOf(l);if(d>=0){o+=a[d];continue}if(d=n.indexOf(l),d>=0){o+=a[d];continue}o+=l}return o.replace(/\D/g,"")}function dS(e){let t=cS(e);return!t||(t.length===10&&t[0]==="0"&&t[1]==="5"?t=`970${t.slice(1)}`:t.length===9&&t[0]==="5"&&(t=`970${t}`),t.length<8)?null:`https://wa.me/${t}`}const ag=(e,t,n)=>{const a=parseInt(String(e),10);return Number.isNaN(a)?t:Math.min(n,Math.max(t,a))},og=e=>!!e&&Number.isFinite(Number(e.latitude))&&Number.isFinite(Number(e.longitude)),uS=()=>{const{storeId:e}=ga(),t=ct(),n=Kt(),{showAlert:a,showPrompt:o,showSelect:l}=Ue(),[d,h]=m.useState(!0),[u,f]=m.useState(null),[y,x]=m.useState(""),[v,_]=m.useState({}),[b,z]=m.useState({}),[C,N]=m.useState(null),[w,S]=m.useState(null),[j,E]=m.useState({}),[M,P]=m.useState({}),[O,I]=m.useState(!1),[F,V]=m.useState(!1),[D,ae]=m.useState(null),[oe,Q]=m.useState(null),J=localStorage.getItem("isGuest")==="true",W=!!localStorage.getItem("token")&&!J,R=xc(),te=W&&localStorage.getItem("user_type")==="shopper",G=async K=>{if(!te){await a("التقييم متاح لحساب المتسوّق فقط (وليس وضع الزائر أو التاجر).","تنبيه");return}const pe=e!=null?Number(e):u==null?void 0:u.id;if(pe){V(!0);try{const de=await Oj(pe,K);f(ke=>ke&&{...ke,rating_average:de.rating_average??ke.rating_average,rating_count:de.rating_count??ke.rating_count,my_rating:K}),await a("شكراً، تم حفظ تقييمك.","تم")}catch(de){await a(Je(de,"تعذر إرسال التقييم."),"خطأ")}finally{V(!1)}}},X=m.useCallback(async()=>{var K;if(!W){z({});return}try{const de=(await Ji())[0];if(!((K=de==null?void 0:de.items)!=null&&K.length)){z({});return}const ke={};for(const Ae of de.items)ke[Ae.product]=Ae.quantity;z(ke)}catch{z({})}},[W]);m.useEffect(()=>{let K=!1;return(async()=>{h(!0),x("");try{const pe=await Rj(e);if(!K){f(pe);const de={},ke=pe.products||[];for(const Ae of ke)de[Ae.id]=1;_(de)}}catch{K||(x("تعذر تحميل بيانات المتجر"),f(null))}finally{K||h(!1)}})(),()=>{K=!0}},[e]),m.useEffect(()=>{var de;const K=(de=n.state)==null?void 0:de.scrollToProductId;if(K==null||K==="")return;const pe=window.setTimeout(()=>{const ke=document.querySelector(`[data-store-product-id="${String(K)}"]`);ke&&typeof ke.scrollIntoView=="function"&&(ke.scrollIntoView({behavior:"smooth",block:"center"}),Q(String(K)),window.setTimeout(()=>Q(null),1600))},220);return()=>window.clearTimeout(pe)},[n.state,e]),m.useEffect(()=>{X()},[X,e]),m.useEffect(()=>{if(!W||!(u!=null&&u.id)){S(null),E({}),P({});return}let K=!1;return(async()=>{var pe;try{const[de,ke]=await Promise.all([To(),Gy()]);if(K)return;const Ae={},Oe={};for(const Fe of de||[]){const En=Fe.product??((pe=Fe.product_details)==null?void 0:pe.id);En!=null&&(Ae[En]=Fe.id),(Fe.product==null||Fe.product==="")&&Fe.sponsored_ad!=null&&(Oe[Fe.sponsored_ad]=Fe.id)}if(E(Ae),P(Oe),u.is_owner)S(null);else{const Fe=(ke||[]).find(En=>{var Lr;return Number(En.store)===Number(u.id)||Number((Lr=En.store_details)==null?void 0:Lr.id)===Number(u.id)});S((Fe==null?void 0:Fe.id)??null)}}catch{K||(E({}),P({}),S(null))}})(),()=>{K=!0}},[W,u==null?void 0:u.id,u==null?void 0:u.is_owner]);const H=()=>{const K=Number(u==null?void 0:u.latitude),pe=Number(u==null?void 0:u.longitude);if(!Number.isFinite(K)||!Number.isFinite(pe)){a("لا توجد إحداثيات خريطة محفوظة لهذا المتجر.");return}t("/map",{state:{mapFocus:{lat:K,lng:pe,storeId:u.id},mapPreset:{mode:"stores",category:(u==null?void 0:u.category)??null,q:(u==null?void 0:u.store_name)??""}}})},ue=K=>K.product?`p-${K.product}`:`ad-${K.id}`,T=async K=>{if(!R){a("ميزة السلال للأعضاء المسجّلين فقط (متسوّق، تاجر، أو مدير) وليست لوضع الزائر. سجّل الدخول ثم أعد المحاولة."),t("/login");return}N(ue(K));try{ae({productId:K.product??null,sponsoredAdId:K.id,quantity:1,success:"تمت إضافة العرض للسلة."});const pe=await Ji(),de=Array.isArray(pe)?pe:[],ke=de.map(Oe=>({id:String(Oe.id),label:Oe.name||`سلة #${Oe.id}`,value:Oe.id,badge:Array.isArray(Oe.items)?Oe.items.length:0})),Ae=await l(de.length===0?"لا يوجد لديك أي سلال.":"اختر السلة التي تريد إضافة المنتج إليها:","إضافة إلى أي سلة؟",ke,{primaryActionLabel:de.length===0?"إنشاء أول سلة":"سلة جديدة"});if(Ae==null)return;if(Ae==="__primary__"){await Z();return}await ee({id:Ae})}catch(pe){a(Je(pe,"تعذرت الإضافة للسلة."),"خطأ")}finally{N(null)}},Z=async()=>{const K=await o("اكتب اسم السلة الجديدة:","اسم السلة...");if(!K)return;const pe=await mc(String(K)),de=D;de&&(await ca(pe.id,de.productId??null,de.quantity??1,de.sponsoredAdId??null),await X(),await a(de.success||"تمت الإضافة للسلة.","تم"),ae(null))},ee=async K=>{const pe=D;pe&&(await ca(K.id,pe.productId??null,pe.quantity??1,pe.sponsoredAdId??null),await X(),await a(pe.success||"تمت الإضافة للسلة.","تم"),ae(null))},ye=async K=>{if(!te){a("سجّل دخولك كمتسوّق للمفضلة."),t("/login");return}if(!O){I(!0);try{if(!K.product){const de=M[K.id];if(de)await Dl(de),P(ke=>{const Ae={...ke};return delete Ae[K.id],Ae}),a("أُزيل العرض المستقل من المفضلة.");else{const ke=await uo(null,K.id);P(Ae=>({...Ae,[K.id]:ke.id})),a("أُضيف عرض الإعلان للمفضلة — يُزال تلقائياً عند انتهاء مدة الإعلان.")}return}const pe=await uo(K.product,K.id);E(de=>({...de,[K.product]:pe.id})),a("أُضيف المنتج للمفضلة.")}catch(pe){a(Je(pe,"تعذرت العملية."),"خطأ")}finally{I(!1)}}},_e=async()=>{var K,pe,de,ke,Ae;if(!W){a("سجّل دخولك كمتسوّق لاستخدام المفضلة"),t("/login");return}if(!u.is_owner&&!O){I(!0);try{if(w)await Ky(w),S(null),a("أُزيل المحل من المفضلة.");else{const Oe=await Pk(u.id);S(Oe.id),a("أُضيف المحل للمفضلة.")}}catch(Oe){const Fe=((de=(pe=(K=Oe==null?void 0:Oe.response)==null?void 0:K.data)==null?void 0:pe.store)==null?void 0:de[0])||((Ae=(ke=Oe==null?void 0:Oe.response)==null?void 0:ke.data)==null?void 0:Ae.detail);a(Fe?String(Fe):"تعذرت العملية.")}finally{I(!1)}}},Be=async K=>{if(!W){a("سجّل دخولك كمتسوّق لاستخدام المفضلة"),t("/login");return}if(u.is_owner)return;const pe=j[K.id];if(!O){I(!0);try{if(pe)await Dl(pe),E(de=>{const ke={...de};return delete ke[K.id],ke}),a("أُزيل المنتج من المفضلة.");else{const de=await uo(K.id);E(ke=>({...ke,[K.id]:de.id})),a("أُضيف المنتج للمفضلة.")}}catch{a("تعذرت العملية — ربما المنتج مضاف مسبقاً.")}finally{I(!1)}}},xe=((u==null?void 0:u.products)||[]).filter(K=>{const pe=K.is_archived;return pe!==!0&&pe!==1&&pe!=="true"&&pe!=="True"}),dt=(K,pe)=>{_(de=>({...de,[K]:ag(pe,1,9999)}))},He=(K,pe)=>{_(de=>({...de,[K]:ag((de[K]??1)+pe,1,9999)}))},_n=u!=null?u.contact_whatsapp_url||dS(u.contact_whatsapp):null,pi=u!=null?Io(u.business_hours_weekly):!1,tr=async K=>{if(u!=null&&u.is_owner)return;if(!R){a("ميزة السلال للأعضاء المسجّلين فقط (متسوّق، تاجر، أو مدير) وليست لوضع الزائر. سجّل الدخول ثم أعد المحاولة."),t("/login");return}const pe=v[K.id]??1;N(K.id);try{ae({productId:K.id,sponsoredAdId:null,quantity:pe,success:`تمت إضافة «${K.name}» للسلة.`});const de=await Ji(),ke=Array.isArray(de)?de:[],Ae=ke.map(Fe=>({id:String(Fe.id),label:Fe.name||`سلة #${Fe.id}`,value:Fe.id,badge:Array.isArray(Fe.items)?Fe.items.length:0})),Oe=await l(ke.length===0?"لا يوجد لديك أي سلال.":"اختر السلة التي تريد إضافة المنتج إليها:","إضافة إلى أي سلة؟",Ae,{primaryActionLabel:ke.length===0?"إنشاء أول سلة":"سلة جديدة"});if(Oe==null)return;if(Oe==="__primary__"){await Z();return}await ee({id:Oe})}catch(de){a(Je(de,"تعذر إضافة المنتج للسلة."),"خطأ")}finally{N(null)}};return i.jsxs(Ce,{children:[i.jsxs("div",{style:{maxWidth:1240,marginInline:"auto",paddingBottom:48,paddingInline:"clamp(8px, 2.2vw, 22px)",boxSizing:"border-box"},children:[i.jsxs(me,{to:"/map",className:"flex-center",style:{gap:8,marginBottom:16,color:"var(--text-secondary)",textDecoration:"none",fontWeight:700,width:"fit-content"},children:[i.jsx(Rx,{size:18}),"رجوع للخريطة"]}),d&&i.jsxs("div",{className:"card flex-center",style:{padding:48,gap:12},children:[i.jsx(ry,{className:"spin",size:28}),"جاري التحميل..."]}),!d&&y&&i.jsx("div",{className:"card",style:{color:"#c62828"},children:y}),!d&&u&&i.jsxs(i.Fragment,{children:[i.jsxs("header",{className:"card store-profile-hero",children:[i.jsx("div",{className:"store-profile-hero-banner"}),i.jsxs("div",{className:"store-profile-hero-body",children:[i.jsx("div",{className:"flex-between store-profile-hero-top",children:i.jsx("div",{className:"store-profile-hero-logo",children:u.logo?i.jsx("img",{src:u.logo,alt:"",className:"store-profile-hero-logo-img"}):i.jsx(zt,{size:40,color:"var(--text-secondary)"})})}),i.jsxs("div",{className:"flex-between store-profile-hero-row",children:[i.jsx("h1",{className:"store-profile-title",children:u.store_name}),og(u)||W&&!u.is_owner?i.jsxs("div",{className:"store-profile-hero-actions",children:[og(u)?i.jsx("button",{type:"button",onClick:H,title:"عرض موقع المتجر على الخريطة","aria-label":"عرض على الخريطة",className:"store-profile-icon-btn",children:i.jsx($t,{size:26,color:"var(--secondary)"})}):null,W&&!u.is_owner?i.jsx("button",{type:"button",onClick:_e,disabled:O,title:w?"إزالة من المفضلة":"إضافة للمفضلة","aria-label":"مفضلة المحل",className:`store-profile-icon-btn ${w?"store-profile-icon-btn--fav":""}`,style:{cursor:O?"wait":void 0},children:i.jsx(_r,{size:26,color:"#e91e63",fill:w?"#e91e63":"none"})}):null]}):null]}),i.jsx("div",{className:"store-profile-subtitle",children:u.category_name||"متجر"}),i.jsxs("div",{className:"store-profile-contact",children:[i.jsxs("div",{className:"store-profile-contact-head",children:[i.jsx(Il,{size:18,"aria-hidden":!0}),"تواصل معنا"]}),_n?i.jsxs("a",{href:_n,target:"_blank",rel:"noopener noreferrer",className:"store-profile-whatsapp-btn",children:[i.jsx(Il,{size:20}),"مراسلة عبر واتساب"]}):i.jsxs("div",{children:[i.jsx("p",{className:"store-profile-contact-note",children:"لم يُضف رقم واتساب للتواصل بعد — يظهر الزر تلقائياً عندما يضيفه صاحب المتجر من إعدادات المتجر."}),u.is_owner?i.jsx(me,{to:"/merchant/settings",className:"store-profile-settings-link",children:"فتح إعدادات المتجر لإضافة الرقم"}):null]})]}),Array.isArray(u.store_features)&&u.store_features.filter(Boolean).length>0?i.jsx("div",{className:"store-profile-features",children:u.store_features.filter(Boolean).map((K,pe)=>i.jsx("span",{className:"store-feature-chip",children:K},`${pe}-${K}`))}):null,i.jsxs("div",{className:"store-profile-box",children:[i.jsxs("div",{className:"store-profile-box-row",children:[i.jsx("span",{className:"store-profile-box-title",children:"مواعيد العمل"}),pi?u.is_open_now===!0?i.jsx("span",{className:"store-profile-pill store-profile-pill--open",children:"مفتوح الآن"}):u.is_open_now===!1?i.jsx("span",{className:"store-profile-pill store-profile-pill--closed",children:"مغلق الآن"}):i.jsx("span",{className:"store-profile-pill store-profile-pill--muted",children:"—"}):i.jsx("span",{className:"store-profile-pill store-profile-pill--muted",children:"لا يوجد مواعيد عمل محددة"})]}),(u.business_hours_note||"").trim()?i.jsx("div",{className:"store-profile-note",children:u.business_hours_note.trim()}):null]}),i.jsxs("div",{className:"store-profile-box store-profile-box--rating",children:[i.jsx("div",{className:"store-profile-box-title",children:"تقييم المتجر (من 5 نجوم)"}),u.rating_count>0&&u.rating_average!=null?i.jsxs("div",{dir:"ltr",className:"store-profile-rating-row",children:[i.jsx("span",{className:"store-profile-rating-avg",children:Number(u.rating_average).toFixed(1)}),i.jsx("span",{className:"star-row-readonly","aria-hidden":!0,children:[1,2,3,4,5].map(K=>i.jsx(qu,{size:22,color:"#f5c000",fill:K<=Math.round(Number(u.rating_average))?"#f5c000":"none",strokeWidth:K<=Math.round(Number(u.rating_average))?0:1.5},K))}),i.jsxs("span",{className:"store-profile-rating-count",children:["بناءً على ",u.rating_count," تقييم"]})]}):i.jsx("p",{className:"store-profile-muted",children:"لا يوجد تقييمات بعد."}),te&&!u.is_owner?i.jsxs("div",{children:[i.jsx("div",{className:"store-profile-rate-hint",children:u.my_rating?"تقييمك الحالي (اضغط نجمة لتغييره)":"قيّم هذا المحل"}),i.jsx("div",{dir:"ltr",className:"store-profile-rate-row",children:[1,2,3,4,5].map(K=>i.jsx("button",{type:"button",disabled:F,onClick:()=>G(K),"aria-label":`تقييم ${K} من 5`,className:"store-profile-star-btn",style:{cursor:F?"wait":void 0},children:i.jsx(qu,{size:30,color:"#f5c000",fill:K<=(u.my_rating||0)?"#f5c000":"none",strokeWidth:K<=(u.my_rating||0)?0:1.5})},K))})]}):u.is_owner?i.jsx("p",{className:"store-profile-muted store-profile-muted--tight",children:"يظهر تقييمك الإجمالي للزوار؛ التقييم من حسابات المتسوّقين فقط."}):W?null:i.jsxs("button",{type:"button",className:"store-profile-rating-login-cta",onClick:()=>t("/login"),children:[i.jsx("span",{className:"store-profile-rating-login-cta-icon","aria-hidden":!0,children:i.jsx(ac,{size:18,strokeWidth:2})}),i.jsx("span",{className:"store-profile-rating-login-cta-label",children:"سجّل دخول كمتسوّق لتتمكن من التقييم"})]})]}),u.description?i.jsx("p",{className:"store-profile-desc",children:u.description}):null,(u.location_address||"").trim()?i.jsxs("div",{className:"store-profile-box",children:[i.jsxs("div",{className:"store-profile-loc-head",children:[i.jsx($t,{size:18,"aria-hidden":!0}),"الموقع (نصاً)"]}),i.jsx("div",{className:"store-profile-loc-text",children:u.location_address.trim()})]}):null]})]}),Array.isArray(u.sponsored_ads)&&u.sponsored_ads.length>0&&i.jsxs("section",{className:"store-profile-sponsored",children:[i.jsx("h2",{className:"store-profile-section-title",children:"عروض وإعلانات"}),i.jsx("div",{className:"store-profile-sponsored-rail",children:u.sponsored_ads.map(K=>i.jsxs("div",{className:"card store-profile-sponsored-card",children:[Ie(K).length>0?i.jsx("div",{className:"store-profile-sponsored-media",children:i.jsx(jt,{images:Ie(K),height:120,borderRadius:12})}):null,i.jsx("div",{className:"store-profile-sponsored-title",children:K.title}),Number(K.product_price)>0?i.jsxs("div",{className:"store-profile-sponsored-price-row",children:[K.catalog_product_price!=null&&K.catalog_product_price!==""&&Math.abs(Number(K.catalog_product_price)-Number(K.product_price))>1e-9?i.jsxs(i.Fragment,{children:[i.jsxs("span",{className:"store-profile-sponsored-old",children:[Number(K.catalog_product_price).toFixed(2)," ₪"]}),i.jsx("span",{className:"store-profile-sponsored-badge",children:"سعر العرض"})]}):null,i.jsxs("span",{className:"store-profile-sponsored-now",children:[Number(K.product_price).toFixed(2)," ₪"]})]}):null,i.jsx("div",{className:"store-profile-sponsored-desc",children:K.description}),!u.is_owner&&(R||te)?i.jsxs("div",{className:"store-profile-sponsored-actions",children:[R?i.jsxs("button",{type:"button",className:"btn-primary",style:{flex:1,fontSize:"0.85rem",padding:"8px 10px",border:"none",cursor:C===ue(K)?"wait":"pointer",borderRadius:10,fontWeight:800,display:"inline-flex",alignItems:"center",justifyContent:"center",gap:6},disabled:C===ue(K),onClick:()=>T(K),children:[i.jsx(Jn,{size:16}),"سلة"]}):null,te?i.jsxs("button",{type:"button",className:"store-profile-sponsored-favbtn",style:{cursor:O?"wait":void 0,flex:1,fontSize:"0.85rem",padding:"8px 10px"},disabled:O,onClick:()=>ye(K),title:K.product?"مفضلة":"مفضلة — يُزال عند انتهاء الإعلان",children:[i.jsx(_r,{size:16,color:"#e91e63",fill:K.product?j[K.product]?"#e91e63":"none":M[K.id]?"#e91e63":"none"}),"مفضلة"]}):null]}):null]},K.id))})]}),i.jsxs("section",{children:[i.jsx("h2",{className:"store-profile-section-title store-profile-section-title--products",children:"المنتجات"}),xe.length===0?i.jsxs("div",{className:"card",style:{color:"var(--text-secondary)",lineHeight:1.65},children:[i.jsx("div",{children:"لا توجد منتجات متاحة للمتسوّقين حالياً."}),u.is_owner?i.jsx("div",{style:{marginTop:10,fontSize:"0.9rem"},children:"إن كنت صاحب/ة هذا المتجر: المنتجات «المؤرشفة» من صفحة «منتجاتي» لا تظهر هنا — عطّل الأرشفة ليظهر المنتج للجمهور."}):null]}):i.jsx("div",{className:"store-profile-products-grid",children:xe.map(K=>{const pe=b[K.id];return i.jsxs("article",{className:"card store-profile-product-card","data-store-product-id":K.id,"data-flash":oe!=null&&String(oe)===String(K.id)?"true":"false",children:[W&&!u.is_owner?i.jsx("button",{type:"button",onClick:()=>Be(K),disabled:O,title:j[K.id]?"إزالة من المفضلة":"إضافة للمفضلة","aria-label":"مفضلة المنتج",className:"store-profile-product-favbtn",style:{cursor:O?"wait":void 0},children:i.jsx(_r,{size:18,color:"#e91e63",fill:j[K.id]?"#e91e63":"none"})}):null,i.jsxs("div",{className:"store-profile-product-media",children:[Ie(K).length>0?i.jsx("div",{className:"store-profile-product-media-inner",children:i.jsx(jt,{images:Ie(K),fill:!0,borderRadius:0,className:"store-product-grid-carousel"})}):i.jsx(Bt,{size:32,color:"var(--text-light)"}),i.jsxs("div",{className:"store-profile-product-media-overlay",children:[i.jsx("div",{className:"store-profile-product-media-name",children:K.name}),i.jsxs("div",{className:"store-profile-product-media-price",children:[K.price," ₪"]})]}),R&&!u.is_owner?i.jsx("button",{type:"button",className:"store-profile-product-media-cartbtn",onClick:()=>tr(K),disabled:C===K.id,title:"إضافة إلى السلال","aria-label":"إضافة إلى السلال",style:{cursor:C===K.id?"wait":"pointer"},children:i.jsx(Jn,{size:18})}):null]}),i.jsxs("div",{className:"store-profile-product-body",children:[K.description?i.jsx("div",{className:"store-profile-product-desc",children:K.description}):null,Array.isArray(K.product_features)&&K.product_features.filter(Boolean).length>0?i.jsx("div",{className:"store-profile-product-feats",children:K.product_features.map(de=>String(de||"").trim()).filter(Boolean).slice(0,5).map((de,ke)=>i.jsx("span",{className:"store-profile-product-feat",title:de,children:de},ke))}):null,i.jsxs("div",{className:"store-profile-product-price",children:[K.price," ₪"]}),pe!=null&&pe>0&&i.jsxs("div",{className:"store-profile-in-cart",children:["في السلة: ",pe]}),i.jsxs("div",{className:"flex-between store-profile-qty-row",children:[i.jsx("button",{type:"button",onClick:()=>He(K.id,-1),className:"store-profile-qty-btn","aria-label":"نقص الكمية",children:i.jsx(Fx,{size:18})}),i.jsx("input",{type:"text",inputMode:"numeric",value:v[K.id]??1,onChange:de=>dt(K.id,de.target.value),onBlur:de=>dt(K.id,de.target.value||1),className:"store-profile-qty-input"}),i.jsx("button",{type:"button",onClick:()=>He(K.id,1),className:"store-profile-qty-btn","aria-label":"زيادة الكمية",children:i.jsx(Dx,{size:18})})]}),R&&!u.is_owner?i.jsx("button",{type:"button",className:"btn-primary store-profile-add-btn",disabled:C===K.id,onClick:()=>tr(K),children:C===K.id?"...":"أضف للسلة"}):null]})]},K.id)})})]})]})]}),i.jsx("style",{children:`
        @keyframes spin { to { transform: rotate(360deg); } }
        .spin { animation: spin 0.9s linear infinite; }

        .store-profile-hero{
          padding: 0;
          overflow: hidden;
          margin-bottom: 20px;
        }
        .store-profile-hero-banner{
          height: 120px;
          background: linear-gradient(135deg, var(--primary-light) 0%, var(--primary) 45%, var(--primary-hover) 100%);
        }
        .store-profile-hero-body{
          padding: 0 1.25rem 1.25rem;
          margin-top: -48px;
        }
        .store-profile-hero-top{ align-items: flex-end; }
        .store-profile-hero-logo{
          width: 96px;
          height: 96px;
          border-radius: 24px;
          border: 4px solid var(--white);
          background: var(--surface);
          overflow: hidden;
          box-shadow: var(--shadow);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .store-profile-hero-logo-img{
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .store-profile-hero-row{
          margin-top: 14px;
          align-items: flex-start;
          gap: 12px;
        }
        .store-profile-title{
          margin: 0;
          font-size: 1.75rem;
          font-weight: 900;
          flex: 1;
          min-width: 0;
        }
        .store-profile-hero-actions{
          display: flex;
          gap: 8px;
          flex-shrink: 0;
        }
        .store-profile-icon-btn{
          background: var(--surface);
          cursor: pointer;
          padding: 10px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1.5px solid var(--border);
          transition: background 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
        }
        .store-profile-icon-btn:hover{
          background: var(--primary-light);
          border-color: rgba(245, 192, 0, 0.4);
          box-shadow: var(--shadow-sm);
        }
        .store-profile-icon-btn:disabled{
          opacity: 0.6;
          cursor: wait;
        }
        .store-profile-icon-btn--fav{
          background: rgba(233, 30, 99, 0.10);
        }
        .store-profile-subtitle{
          color: var(--text-secondary);
          margin-top: 4px;
          font-weight: 700;
        }
        /* store-profile-mapcta removed */
        .store-profile-contact{
          margin-top: 14px;
          padding: 12px 14px;
          border-radius: 14px;
          background: var(--surface);
          border: 1px solid var(--border);
        }
        .store-profile-contact-head{
          font-weight: 900;
          margin-bottom: 10px;
          color: var(--secondary);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .store-profile-whatsapp-btn{
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 18px;
          border-radius: 12px;
          font-weight: 900;
          text-decoration: none;
          background: #25D366;
          color: #fff;
          border: none;
          box-shadow: 0 2px 8px rgba(37, 211, 102, 0.35);
        }
        .store-profile-whatsapp-btn:hover{ filter: brightness(1.02); }
        .store-profile-contact-note{
          margin: 0 0 10px;
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }
        .store-profile-settings-link{
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-weight: 900;
          color: var(--secondary);
          text-decoration: underline;
        }
        @media (max-width: 520px){
          .store-profile-title{ font-size: 1.45rem; }
          .store-profile-hero-body{ padding: 0 1rem 1.1rem; }
        }

        .store-profile-features{
          margin-top: 12px;
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .store-feature-chip{
          font-size: 0.72rem;
          font-weight: 800;
          padding: 4px 10px;
          border-radius: 999px;
          background: var(--surface);
          border: 1px solid var(--border);
          color: var(--text-secondary);
        }

        .store-profile-in-cart{
          font-size: 0.82rem;
          font-weight: 900;
          color: var(--secondary);
          background: var(--primary-light);
          padding: 6px 10px;
          border-radius: 10px;
          width: fit-content;
        }
        .store-profile-qty-row{
          gap: 8px;
          margin-top: 4px;
          direction: ltr;
        }
        .store-profile-qty-btn{
          border: 1px solid var(--border);
          background: var(--white);
          border-radius: 10px;
          padding: 8px 10px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--secondary);
        }
        .store-profile-qty-btn:hover{ background: var(--primary-light); }
        .store-profile-qty-input{
          flex: 1;
          text-align: center;
          font-weight: 900;
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 8px 6px;
          font-size: 1rem;
          background: var(--white);
          color: var(--secondary);
        }

        .store-profile-box{
          margin-top: 12px;
          padding: 12px 14px;
          border-radius: 12px;
          background: var(--surface);
          border: 1px solid var(--border);
        }
        .store-profile-box--rating{
          margin-top: 14px;
          padding: 14px 16px;
          border-radius: 14px;
        }
        .store-profile-box-row{
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 8px;
        }
        .store-profile-box-title{
          font-weight: 900;
          color: var(--secondary);
        }
        .store-profile-pill{
          font-size: 0.78rem;
          font-weight: 900;
          padding: 3px 10px;
          border-radius: 999px;
        }
        .store-profile-pill--open{ background: rgba(46, 125, 50, 0.12); color: #2e7d32; }
        .store-profile-pill--closed{ background: rgba(198, 40, 40, 0.10); color: #c62828; }
        .store-profile-pill--muted{ background: var(--grey-light); color: var(--text-secondary); }
        .store-profile-note{
          line-height: 1.65;
          white-space: pre-wrap;
          font-size: 0.95rem;
          color: var(--text-primary);
        }
        .store-profile-rating-row{
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 10px;
        }
        .store-profile-rating-avg{
          font-weight: 950;
          font-size: 1.2rem;
          color: var(--secondary);
        }
        .store-profile-rating-count{
          color: var(--text-secondary);
          font-size: 0.9rem;
        }
        .store-profile-muted{
          margin: 0 0 10px;
          color: var(--text-secondary);
          font-size: 0.92rem;
          line-height: 1.65;
        }
        .store-profile-muted--tight{
          margin: 0;
          font-size: 0.88rem;
        }
        .store-profile-rating-login-cta{
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          margin-top: 12px;
          padding: 12px 14px;
          border: none;
          border-radius: 14px;
          cursor: pointer;
          font-family: inherit;
          font-weight: 900;
          font-size: 0.9rem;
          line-height: 1.35;
          text-align: center;
          color: var(--secondary);
          background: linear-gradient(135deg, rgba(255, 236, 160, 0.45) 0%, rgba(255, 249, 230, 0.95) 45%, var(--white) 100%);
          box-shadow:
            0 1px 0 rgba(255, 255, 255, 0.9) inset,
            0 4px 16px rgba(245, 192, 0, 0.2);
          transition: transform 0.12s ease, box-shadow 0.2s ease, filter 0.15s ease;
        }
        .store-profile-rating-login-cta:hover{
          filter: brightness(1.02);
          box-shadow:
            0 1px 0 rgba(255, 255, 255, 0.95) inset,
            0 8px 22px rgba(245, 192, 0, 0.28);
        }
        .store-profile-rating-login-cta:active{
          transform: scale(0.99);
        }
        .store-profile-rating-login-cta:focus-visible{
          outline: none;
          box-shadow:
            0 0 0 3px rgba(255, 255, 255, 0.95),
            0 0 0 5px rgba(245, 192, 0, 0.55),
            0 4px 16px rgba(245, 192, 0, 0.22);
        }
        .store-profile-rating-login-cta-icon{
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 12px;
          background: linear-gradient(145deg, var(--primary) 0%, var(--primary-hover) 100%);
          color: var(--secondary);
          box-shadow: var(--shadow-gold);
        }
        .store-profile-rating-login-cta-label{
          flex: 1;
          min-width: 0;
        }
        .store-profile-rate-hint{
          font-weight: 900;
          margin-bottom: 8px;
          font-size: 0.9rem;
          color: var(--secondary);
        }
        .store-profile-rate-row{
          display: inline-flex;
          gap: 6px;
        }
        .store-profile-star-btn{
          padding: 6px;
          border: none;
          background: transparent;
          border-radius: 8px;
          line-height: 0;
          cursor: pointer;
        }
        .store-profile-star-btn:disabled{
          opacity: 0.6;
          cursor: wait;
        }
        .store-profile-desc{
          margin-top: 12px;
          color: var(--text-primary);
          line-height: 1.65;
        }
        .store-profile-loc-head{
          font-weight: 900;
          margin-bottom: 6px;
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--secondary);
        }
        .store-profile-loc-text{
          line-height: 1.65;
          white-space: pre-wrap;
          color: var(--text-primary);
        }
        .store-profile-linkbtn{
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          color: var(--secondary);
          font-weight: 900;
          text-decoration: underline;
          font: inherit;
        }

        .store-profile-section-title{
          font-size: 1.1rem;
          margin: 0 0 12px;
          font-weight: 950;
          color: var(--secondary);
        }
        .store-profile-section-title--products{
          font-size: 1.15rem;
          margin-bottom: 14px;
        }
        .store-profile-sponsored{ margin-bottom: 22px; }
        .store-profile-sponsored-rail{
          display: flex;
          gap: 12px;
          overflow-x: auto;
          padding-bottom: 6px;
          scrollbar-width: none;
        }
        .store-profile-sponsored-rail::-webkit-scrollbar{ height: 0; }
        .store-profile-sponsored-card{
          min-width: 220px;
          max-width: 260px;
          padding: 12px;
          flex-shrink: 0;
        }
        .store-profile-sponsored-media{ margin-bottom: 8px; }
        .store-profile-sponsored-title{ font-weight: 900; color: var(--secondary); }
        .store-profile-sponsored-price-row{
          margin-top: 6px;
          display: flex;
          flex-wrap: wrap;
          align-items: baseline;
          gap: 6px 10px;
          font-weight: 900;
        }
        .store-profile-sponsored-old{
          text-decoration: line-through;
          color: var(--text-secondary);
          font-weight: 700;
          font-size: 0.95rem;
        }
        .store-profile-sponsored-badge{
          display: inline-block;
          padding: 2px 8px;
          border-radius: 8px;
          font-size: 0.72rem;
          font-weight: 950;
          color: var(--secondary);
          background: rgba(245,192,0,0.35);
          border: 1px solid rgba(245,192,0,0.45);
        }
        .store-profile-sponsored-now{ color: var(--secondary); }
        .store-profile-sponsored-desc{
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-top: 4px;
          line-height: 1.55;
        }
        .store-profile-sponsored-actions{
          display: flex;
          gap: 8px;
          margin-top: 10px;
        }
        .store-profile-sponsored-favbtn{
          border: 1.5px solid var(--border);
          background: var(--white);
          border-radius: 10px;
          font-weight: 900;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }
        .store-profile-sponsored-favbtn:hover{ background: var(--primary-light); border-color: rgba(245,192,0,0.35); }

        .store-profile-products-grid{
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(160px, 100%), 1fr));
          gap: 14px;
        }
        .store-profile-product-card{
          padding: 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .store-profile-product-card[data-flash="true"]{
          outline: 3px solid rgba(255, 204, 0, 0.75);
          box-shadow: 0 16px 48px rgba(255, 204, 0, 0.18);
        }
        .store-profile-product-favbtn{
          position: absolute;
          top: 8px;
          inset-inline-start: 8px;
          z-index: 2;
          border: none;
          border-radius: 999px;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.92);
          box-shadow: 0 2px 8px rgba(0,0,0,0.12);
          cursor: pointer;
          transition: transform 0.12s ease, filter 0.15s ease;
        }
        .store-profile-product-favbtn:hover{ transform: translateY(-1px); filter: brightness(1.02); }
        .store-profile-product-favbtn:disabled{ opacity: 0.6; cursor: wait; }

        .store-profile-product-media{
          aspect-ratio: 1;
          background: var(--grey-light);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .store-profile-product-media-overlay{
          position: absolute;
          inset-inline: 0;
          bottom: 0;
          padding: 10px 10px 9px;
          background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.58) 65%, rgba(0,0,0,0.72) 100%);
          color: #fff;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 10px;
          pointer-events: none;
        }
        .store-profile-product-media-cartbtn{
          position: absolute;
          top: 10px;
          inset-inline-end: 10px;
          z-index: 3;
          width: 40px;
          height: 40px;
          border-radius: 14px;
          border: 1px solid rgba(245,192,0,0.45);
          background: rgba(255, 255, 255, 0.92);
          box-shadow: 0 6px 18px rgba(26, 29, 38, 0.14);
          color: var(--secondary);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.12s ease, filter 0.15s ease;
        }
        .store-profile-product-media-cartbtn:hover:not(:disabled){
          transform: translateY(-1px);
          filter: brightness(1.02);
        }
        .store-profile-product-media-cartbtn:active:not(:disabled){
          transform: translateY(0);
        }
        .store-profile-product-media-cartbtn:disabled{
          opacity: 0.65;
        }
        .store-profile-product-media-name{
          font-weight: 950;
          font-size: 0.92rem;
          line-height: 1.2;
          min-width: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-shadow: 0 2px 10px rgba(0,0,0,0.35);
        }
        .store-profile-product-media-price{
          flex: 0 0 auto;
          font-weight: 950;
          font-size: 0.9rem;
          padding: 6px 10px;
          border-radius: 999px;
          background: rgba(255,255,255,0.18);
          border: 1px solid rgba(255,255,255,0.22);
          backdrop-filter: blur(6px);
          text-shadow: 0 2px 10px rgba(0,0,0,0.35);
          white-space: nowrap;
        }
        .store-profile-product-media-inner{
          flex: 1;
          align-self: stretch;
          width: 100%;
          min-height: 0;
          display: flex;
          flex-direction: column;
        }
        .store-profile-product-body{
          padding: 12px;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 8px;
          min-height: 0;
        }
        .store-profile-product-desc{
          font-size: 0.8rem;
          color: var(--text-secondary);
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .store-profile-product-feats{
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .store-profile-product-feat{
          font-size: 0.78rem;
          font-weight: 900;
          padding: 4px 10px;
          border-radius: 999px;
          background: var(--surface);
          border: 1px solid var(--border);
          color: var(--secondary);
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .store-profile-product-price{
          font-weight: 950;
          color: var(--secondary);
          margin-top: auto;
        }

        .store-profile-add-btn{
          padding: 10px;
          font-size: 0.92rem;
          margin-top: 4px;
          width: 100%;
          border-radius: 14px;
        }
      `})]})},hS=()=>{const{shareToken:e}=ga(),[t,n]=m.useState(null),[a,o]=m.useState(!0),[l,d]=m.useState(""),h=!!localStorage.getItem("token"),u=localStorage.getItem("isGuest")==="true";m.useEffect(()=>{let x=!1;return(async()=>{o(!0),d("");try{const v=await _k(e);x||n(v)}catch{x||(d("تعذر تحميل السلة أو الرابط غير صالح."),n(null))}finally{x||o(!1)}})(),()=>{x=!0}},[e]);const f=(t==null?void 0:t.items)||[],y=(t==null?void 0:t.total)??"0";return i.jsxs(Ce,{children:[i.jsxs("div",{style:{maxWidth:1240,marginInline:"auto",paddingInline:"clamp(8px, 2.2vw, 22px)",paddingBottom:40,boxSizing:"border-box"},children:[i.jsxs("div",{className:"flex-center",style:{justifyContent:"space-between",flexWrap:"wrap",gap:12,marginBottom:18},children:[i.jsx("h1",{style:{fontSize:"1.6rem",fontWeight:900},children:"سلة مشتركة"}),i.jsxs(me,{to:"/",className:"flex-center",style:{gap:8,color:"var(--text-secondary)",textDecoration:"none",fontWeight:700,fontSize:"0.95rem"},children:[i.jsx(sa,{size:18}),"الرئيسية"]})]}),a&&i.jsxs("div",{className:"card flex-center",style:{padding:40,gap:12},children:[i.jsx(ry,{className:"spin",size:26}),"جاري التحميل..."]}),!a&&l&&i.jsx("div",{className:"card",style:{color:"#c62828"},children:l}),!a&&t&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"card",style:{marginBottom:16},children:[i.jsx("div",{style:{fontWeight:900,fontSize:"1.2rem",marginBottom:8},children:t.name}),t.notes?i.jsx("p",{style:{color:"var(--text-secondary)",lineHeight:1.6,marginTop:8},children:t.notes}):null,t.is_owner&&h&&!u&&i.jsxs(me,{to:"/carts",className:"flex-center",style:{marginTop:14,gap:8,padding:"10px 14px",background:"var(--primary-light)",borderRadius:"var(--radius-md)",textDecoration:"none",color:"var(--secondary)",fontWeight:800,width:"fit-content"},children:[i.jsx(Jn,{size:18}),"فتح سلتي وتعديلها"]})]}),f.length===0?i.jsx("div",{className:"card",style:{color:"var(--text-secondary)"},children:"السلة فارغة."}):i.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:f.map((x,v)=>{const _=!!x.is_promotional_line,b=!!x.is_standalone_ad_line,z=Number(x.price),C=x.catalog_price,N=C!=null&&String(C).trim()!==""&&!Number.isNaN(Number(C))?Number(C):null,w=_&&!b&&N!=null&&Math.abs(z-N)>1e-9;return i.jsxs("div",{className:"card",style:{display:"grid",gridTemplateColumns:"72px 1fr",gap:14,alignItems:"start",borderRadius:_?14:void 0,background:_?"linear-gradient(135deg, rgba(245,192,0,0.1) 0%, rgba(255,249,230,0.4) 100%)":void 0,border:_?"1px solid rgba(245,192,0,0.4)":void 0},children:[i.jsx("div",{style:{width:72,flexShrink:0,borderRadius:16,overflow:"hidden",background:"var(--primary-light)",border:"1px solid rgba(245,192,0,0.25)",display:"flex",alignItems:"center",justifyContent:"center"},children:Ie(x).length>0?i.jsx(jt,{images:Ie(x),height:72,borderRadius:0}):i.jsx("div",{style:{width:72,height:72,display:"flex",alignItems:"center",justifyContent:"center"},children:i.jsx(Bt,{size:22,color:"var(--text-light)"})})}),i.jsxs("div",{style:{minWidth:0},children:[i.jsx("div",{style:{fontWeight:900,fontSize:"1.05rem"},children:x.product_name}),x.description?i.jsx("div",{style:{fontSize:"0.88rem",color:"var(--text-secondary)",marginTop:4,lineHeight:1.45},children:x.description}):null,_?i.jsxs("div",{style:{marginTop:10,fontSize:"0.9rem",lineHeight:1.5},children:[i.jsx("span",{style:{display:"inline-block",padding:"3px 10px",borderRadius:8,fontWeight:900,color:"var(--secondary)",background:"rgba(245,192,0,0.35)",border:"1px solid rgba(245,192,0,0.5)"},children:b?`عرض ممول مستقل: ${Number.isFinite(z)?z.toFixed(2):x.price} ₪ للقطعة`:`عرض ممول: ${Number.isFinite(z)?z.toFixed(2):x.price} ₪ للقطعة`}),w?i.jsxs("span",{style:{marginInlineStart:10,textDecoration:"line-through",color:"var(--text-secondary)",fontWeight:700},children:["سعر المتجر ",N.toFixed(2)," ₪"]}):null,i.jsxs("div",{style:{marginTop:6,fontWeight:800,color:"var(--secondary)"},children:[Number.isFinite(z)?z.toFixed(2):x.price," ₪ × ",x.quantity," = ",x.line_total," ₪"]})]}):i.jsxs("div",{style:{marginTop:8,fontWeight:800,color:"var(--secondary)"},children:[x.price," ₪ × ",x.quantity," = ",x.line_total," ₪"]}),x.note?i.jsxs("div",{style:{marginTop:8,fontSize:"0.86rem",padding:"8px 10px",background:"var(--surface)",borderRadius:10,border:"1px solid var(--border)"},children:[i.jsx("span",{style:{fontWeight:800},children:"ملاحظة:"})," ",x.note]}):null]})]},v)})}),f.length>0&&i.jsxs("div",{className:"flex-center",style:{justifyContent:"space-between",marginTop:20,padding:"16px 20px",background:"var(--secondary)",color:"var(--primary)",borderRadius:"var(--radius-lg)",fontWeight:900,fontSize:"1.15rem"},children:[i.jsx("span",{children:"الإجمالي"}),i.jsxs("span",{children:[y," ₪"]})]}),i.jsx("p",{style:{textAlign:"center",marginTop:24,color:"var(--text-secondary)",fontSize:"0.95rem"},children:"تم إنشاء هذه القائمة من تطبيق رادار"})]})]}),i.jsx("style",{children:`
        @keyframes spin { to { transform: rotate(360deg); } }
        .spin { animation: spin 0.85s linear infinite; }
      `})]})},pS=[31.5,34.4];function mS(e){return String(e||"").trim().toLowerCase()}function sg(e){const t=Number(e);return Number.isFinite(t)?t:null}function fS(){const{userMapLocation:e,setManualMapLocation:t,requestUserLocation:n,locating:a,locationFocusNonce:o,searchQuery:l,setSearchQuery:d}=Vo(),h=Kt(),u=ct(),[f,y]=ic(),x=e||pS,[v,_]=m.useState([]),[b,z]=m.useState([]),[C,N]=m.useState([]),[w,S]=m.useState([]),[j,E]=m.useState(!0),[M,P]=m.useState(null),[O,I]=m.useState(null);m.useEffect(()=>{let H=!0;return E(!0),Promise.all([ui().catch(()=>[]),ya().catch(()=>[]),hc(null).catch(()=>[]),pc(x[0],x[1],null).catch(()=>[])]).then(([ue,T,Z,ee])=>{H&&(_(Array.isArray(ue)?ue:[]),z(Array.isArray(T)?T:[]),S(Array.isArray(Z)?Z:[]),N(Array.isArray(ee)?ee:[]))}).finally(()=>{H&&E(!1)}),()=>{H=!1}},[x[0],x[1]]),m.useEffect(()=>{var ee,ye;const H=(ee=h.state)==null?void 0:ee.mapFocus;if(!H)return;const ue=Number(H.lat),T=Number(H.lng);if(!Number.isFinite(ue)||!Number.isFinite(T))return;t(ue,T),P(H.storeId??null),I(H.communityPointId??null);const Z=(ye=h.state)==null?void 0:ye.mapPreset;if(Z){const _e=new URLSearchParams;Z.mode==="community"?_e.set("mode","community"):Z.mode==="stores"&&_e.set("mode","stores"),Z.category!=null&&String(Z.category).trim()!==""&&_e.set("category",String(Z.category)),Z.cc!=null&&String(Z.cc).trim()!==""&&_e.set("cc",String(Z.cc));const Be=Z.q!=null?String(Z.q).trim():"";Be!==""&&_e.set("q",Be),u({pathname:h.pathname,search:_e.toString()},{replace:!0,state:{}})}else u({pathname:h.pathname,search:h.search},{replace:!0,state:{}})},[h.state,h.pathname,h.search,u,t]),m.useEffect(()=>{const H=f.get("q")||"";H!==l&&d(H)},[f]);const F=m.useCallback((H,ue)=>{const T=new URLSearchParams(f);ue==null||String(ue)===""||String(ue)==="all"?T.delete(H):T.set(H,String(ue)),y(T,{replace:!0})},[f,y]),V=f.get("mode")==="community"?"community":"stores",D=sg(f.get("category")),ae=sg(f.get("cc")),oe=mS(l),Q=m.useMemo(()=>{const H=Array.isArray(C)?C:[],ue=D?H.filter(T=>Number(T.category)===Number(D)):H;return oe?ue.filter(T=>`${T.store_name||""} ${T.category_name||""} ${T.description||""}`.toLowerCase().includes(oe)):ue},[C,D,oe]),J=m.useMemo(()=>{const H=Array.isArray(w)?w:[],ue=ae?H.filter(T=>Number(T.category)===Number(ae)):H;return oe?ue.filter(T=>`${T.title||""} ${T.category_name||""} ${T.detail_description||""} ${T.address_text||""}`.toLowerCase().includes(oe)):ue},[w,ae,oe]),W=m.useMemo(()=>{const H=V==="stores"?Q:[];if(V!=="stores"||M==null)return H;const ue=Number(M);if(!Number.isFinite(ue)||H.some(Z=>Number(Z==null?void 0:Z.id)===ue))return H;const T=(C||[]).find(Z=>Number(Z==null?void 0:Z.id)===ue);return T?[...H,T]:H},[V,Q,C,M]),R=m.useMemo(()=>{const H=V==="community"?J:[];if(V!=="community"||O==null)return H;const ue=Number(O);if(!Number.isFinite(ue)||H.some(Z=>Number(Z==null?void 0:Z.id)===ue))return H;const T=(w||[]).find(Z=>Number(Z==null?void 0:Z.id)===ue);return T?[...H,T]:H},[V,J,w,O]),te=!!oe||(V==="stores"?D!=null:ae!=null),G=m.useCallback(async()=>{await n()},[n]),X=m.useMemo(()=>"calc(100dvh - 180px)",[]);return i.jsx(Ce,{children:i.jsxs("div",{className:"map-page",children:[i.jsx("div",{className:"map-page-stage","aria-busy":j?"true":"false",children:i.jsx(g4,{stores:W,communityPoints:R,categories:v,userLocation:e,locationFocusNonce:o,onManualLocationPick:t,showGpsOnMap:!0,gpsLocating:a,onGpsClick:G,mapHeight:X,isFullscreen:!0,gpsLabel:"موقعي",gpsLocatingLabel:"جاري الموقع…",gpsFabAlignStart:!0,gpsInline:!0,focusOnResults:te,focusKind:V==="community"?"community":"stores",focusStoreId:V==="stores"?M:null,focusCommunityPointId:V==="community"?O:null,topControls:i.jsxs("div",{className:"map-topbar",onClick:H=>H.stopPropagation(),children:[i.jsxs("div",{className:"map-topbar-row",children:[i.jsx("button",{type:"button",className:`map-topbar-chip ${V==="stores"?"map-topbar-chip--active":""}`,onClick:()=>F("mode","stores"),children:"المتاجر"}),i.jsx("button",{type:"button",className:`map-topbar-chip ${V==="community"?"map-topbar-chip--active":""}`,onClick:()=>F("mode","community"),children:"الخدمات"}),V==="stores"?i.jsxs("select",{className:"map-topbar-select",value:D??"all",onChange:H=>F("category",H.target.value),"aria-label":"فلتر الأقسام",children:[i.jsx("option",{value:"all",children:"كل الأقسام"}),v.map(H=>i.jsx("option",{value:H.id,children:H.name},H.id))]}):i.jsxs("select",{className:"map-topbar-select",value:ae??"all",onChange:H=>F("cc",H.target.value),"aria-label":"فلتر الخدمات",children:[i.jsx("option",{value:"all",children:"كل الخدمات"}),b.map(H=>i.jsx("option",{value:H.id,children:H.name},H.id))]})]}),i.jsx("div",{className:"map-topbar-search",children:i.jsx("input",{className:"map-topbar-search-input",value:l,onChange:H=>{const ue=H.target.value;d(ue),F("q",ue)},placeholder:V==="community"?"ابحث عن خدمة أو مؤسسة…":"ابحث عن متجر…"})})]})})}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .map-page {
            width: 100%;
            max-width: 1240px;
            margin-inline: auto;
            padding-inline: clamp(8px, 2.2vw, 22px);
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            flex: 1 1 auto;
            min-height: 0;
            gap: 12px;
          }
          .map-page-stage {
            border-radius: 22px;
            overflow: hidden;
            border: 1px solid rgba(232, 230, 224, 0.92);
            box-shadow: 0 10px 30px rgba(26, 29, 38, 0.08);
            background: #dfe8e3;
            position: relative;
            flex: 1 1 auto;
            min-height: min(100dvh - 200px, 520px);
          }

          .map-topbar{
            display: flex;
            flex-direction: column;
            gap: 10px;
            padding: 10px 12px;
            background: linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.86) 100%);
            border-bottom: 1px solid rgba(0,0,0,0.08);
            backdrop-filter: blur(10px);
            pointer-events: auto;
          }
          .map-topbar-row{
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
          }
          .map-topbar-chip{
            border: 1.5px solid var(--border);
            background: var(--white);
            color: var(--secondary);
            font-weight: 900;
            padding: 8px 12px;
            border-radius: 999px;
            cursor: pointer;
          }
          .map-topbar-chip--active{
            background: linear-gradient(180deg, var(--primary) 0%, var(--primary-hover) 100%);
            border-color: transparent;
            box-shadow: var(--shadow-gold);
          }
          .map-topbar-select{
            border: 1.5px solid var(--border);
            background: var(--white);
            color: var(--secondary);
            font-weight: 800;
            padding: 8px 10px;
            border-radius: 12px;
            min-width: min(220px, 100%);
          }
          .map-topbar-search{
            width: 100%;
          }
          .map-topbar-search-input{
            width: 100%;
            border: 1.5px solid rgba(232, 230, 224, 0.95);
            background: rgba(255, 255, 255, 0.92);
            border-radius: 999px;
            padding: 12px 14px;
            font-weight: 800;
            font-size: 0.95rem;
            outline: none;
          }
          .map-topbar-search-input:focus{
            border-color: rgba(245, 192, 0, 0.55);
            box-shadow: 0 0 0 2px rgba(245, 192, 0, 0.22);
          }

          @media (max-width: 720px) {
            .map-page {
              gap: 10px;
            }
            .map-page-stage {
              border-radius: 20px;
            }
          }
        `}})]})})}const gS=[31.5,34.4],Fd=12;function Va(e){const t=Number(e==null?void 0:e.latitude),n=Number(e==null?void 0:e.longitude);return Number.isFinite(t)&&Number.isFinite(n)}function Dd(e,t){const n=u=>u*Math.PI/180,o=n(t[0]-e[0]),l=n(t[1]-e[1]),d=Math.sin(o/2)**2,h=Math.cos(n(e[0]))*Math.cos(n(t[0]))*Math.sin(l/2)**2;return 2*6371*Math.asin(Math.sqrt(d+h))}function xS(){var oe;const{userMapLocation:e,setManualMapLocation:t,requestUserLocation:n,locating:a,locationFocusNonce:o}=Vo(),l=e||gS,{showSelect:d}=Ue(),h=ct(),[u,f]=m.useState([]),[y,x]=m.useState(!0),[v,_]=m.useState([]),[b,z]=m.useState(!0),[C,N]=m.useState(null),[w,S]=m.useState(!0),[j,E]=m.useState(1);m.useEffect(()=>{let Q=!0;return x(!0),ui().then(J=>{Q&&f(Array.isArray(J)?J:[])}).catch(()=>{Q&&f([])}).finally(()=>{Q&&x(!1)}),()=>{Q=!1}},[]),m.useEffect(()=>{let Q=!0;return z(!0),pc(l[0],l[1],C).then(J=>{Q&&_(Array.isArray(J)?J:[])}).catch(()=>{Q&&_([])}).finally(()=>{Q&&z(!1)}),()=>{Q=!1}},[l[0],l[1],C]),m.useEffect(()=>{E(1)},[C,w]);const M=m.useMemo(()=>(Array.isArray(v)?v:[]).filter(J=>w?Va(J):!0),[v,w]),P=m.useMemo(()=>{if(!l)return M;const Q=l;return[...M].sort((J,W)=>Va(J)?Va(W)?Dd(Q,[Number(J.latitude),Number(J.longitude)])-Dd(Q,[Number(W.latitude),Number(W.longitude)]):-1:1)},[M,l]),O=Math.max(1,Math.ceil(P.length/Fd)),I=Math.min(j,O),F=m.useMemo(()=>{const Q=(I-1)*Fd;return P.slice(Q,Q+Fd)},[P,I]),V=m.useCallback(async()=>{if(y)return;const Q=[{id:"__all__",label:"الكل",value:"__all__"},...u.map(W=>({id:String(W.id),label:W.name,value:W.id}))],J=await d("اختر القسم:","تصفية المتاجر",Q);J!=null&&N(J==="__all__"?null:Number(J))},[y,u,d]),D=m.useMemo(()=>P.filter(Q=>Va(Q)).length,[P]),ae=C==null?"كل الأقسام":((oe=u.find(Q=>Number(Q.id)===Number(C)))==null?void 0:oe.name)||"القسم";return i.jsx(Ce,{children:i.jsxs("div",{className:"stores-page",children:[i.jsxs("section",{className:"stores-hero","aria-label":"عنوان الصفحة وفتح الخريطة",children:[i.jsxs("div",{className:"stores-head",children:[i.jsxs("div",{className:"stores-head__titles",children:[i.jsx("h1",{className:"stores-title",children:"المتاجر"}),i.jsx("p",{className:"stores-sub",children:"فلترة سريعة + خريطة منبثقة عند الضغط."})]}),i.jsxs("div",{className:"stores-controls",children:[i.jsxs("button",{type:"button",className:"stores-filterbtn",onClick:V,disabled:y,title:"تصفية","aria-label":"تصفية المتاجر",children:[i.jsx(Rl,{size:18,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{children:ae})]}),i.jsxs("label",{className:"stores-onlymapped",children:[i.jsx("input",{type:"checkbox",checked:w,onChange:Q=>S(Q.target.checked)}),i.jsx("span",{children:"المتاجر الموجودة على الخريطة فقط"})]})]})]}),i.jsxs("button",{type:"button",className:"stores-mini-map",onClick:()=>h("/map"),"aria-label":"فتح الخريطة",children:[i.jsx("span",{className:"stores-mini-map__bg","aria-hidden":!0}),i.jsx("span",{className:"stores-mini-map__shine","aria-hidden":!0}),i.jsxs("span",{className:"stores-mini-map__badge",children:[i.jsx(Wu,{size:16,strokeWidth:2,"aria-hidden":!0}),"اضغط لفتح الخريطة"]}),i.jsxs("span",{className:"stores-mini-map__hint",children:[D," متجر على الخريطة"]})]})]}),b?i.jsx("div",{className:"stores-loading",children:"جاري تحميل المتاجر…"}):F.length===0?i.jsx("div",{className:"stores-empty",children:"لا توجد متاجر ضمن الفلاتر الحالية."}):i.jsx("div",{className:"stores-grid",role:"list",children:F.map(Q=>{const J=gc(Q,u),W=l&&Va(Q)?Dd(l,[Number(Q.latitude),Number(Q.longitude)]):null;return i.jsxs(me,{to:`/stores/${Q.id}`,className:"store-card",role:"listitem",children:[i.jsxs("div",{className:"store-card__text",children:[i.jsx("div",{className:"store-card__name",children:Q.store_name}),i.jsxs("div",{className:"store-card__meta",children:[i.jsx("span",{className:"store-card__cat",children:Q.category_name||"—"}),i.jsx("span",{className:"store-card__dot","aria-hidden":!0}),i.jsx("span",{className:"store-card__dist",children:W!=null?`${W.toFixed(1)} كم`:"بدون مسافة"})]})]}),i.jsx("div",{className:"store-card__thumb","aria-hidden":!0,children:J.type==="image"?i.jsx("img",{className:"store-card__thumb-img",src:J.url,alt:""}):i.jsx("span",{className:"store-card__thumb-emoji",style:{background:J.bg},children:J.emoji})})]},Q.id)})}),O>1?i.jsxs("div",{className:"stores-pager","aria-label":"تنقل الصفحات",children:[i.jsx("button",{type:"button",onClick:()=>E(Q=>Math.max(1,Q-1)),disabled:I<=1,children:"السابق"}),i.jsxs("span",{children:[I," / ",O]}),i.jsx("button",{type:"button",onClick:()=>E(Q=>Math.min(O,Q+1)),disabled:I>=O,children:"التالي"})]}):null,i.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .stores-page {
            max-width: 1240px;
            margin-inline: auto;
            padding-inline: clamp(8px, 2.2vw, 22px);
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            gap: 12px;
          }

          .stores-hero {
            display: contents;
          }

          .stores-head {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 12px;
            padding: 16px 16px;
            border-radius: 20px;
            background: linear-gradient(180deg, rgba(255, 255, 255, 0.96) 0%, rgba(255, 254, 248, 0.92) 100%);
            border: 1px solid rgba(232, 230, 224, 0.92);
            box-shadow: 0 10px 30px rgba(26, 29, 38, 0.07);
          }
          @media (max-width: 520px) {
            .stores-head{
              flex-direction: column;
              align-items: stretch;
              gap: 12px;
            }
            .stores-controls{
              justify-content: flex-start;
            }
          }
          .stores-title {
            margin: 0;
            font-size: 1.25rem;
            font-weight: 950;
            color: var(--secondary);
          }
          .stores-sub {
            margin: 6px 0 0;
            font-size: 0.88rem;
            color: var(--text-secondary);
            line-height: 1.55;
          }
          .stores-controls {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
            justify-content: flex-end;
          }
          .stores-filterbtn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border-radius: 999px;
            padding: 10px 12px;
            border: 1px solid rgba(232, 230, 224, 0.95);
            background: rgba(255, 255, 255, 0.92);
            box-shadow: 0 2px 12px rgba(26, 29, 38, 0.06);
            font-weight: 900;
            font-family: inherit;
            cursor: pointer;
            color: var(--secondary);
            max-width: 280px;
          }
          .stores-filterbtn:hover{
            border-color: rgba(245, 192, 0, 0.45);
            box-shadow: 0 8px 20px rgba(245, 192, 0, 0.12);
          }
          .stores-filterbtn span {
            color: var(--text-secondary);
            font-weight: 900;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .stores-onlymapped {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            font-weight: 800;
            color: var(--text-secondary);
            user-select: none;
            padding: 10px 14px;
            border-radius: 999px;
            border: 1px solid rgba(232, 230, 224, 0.95);
            background: rgba(255, 255, 255, 0.92);
            box-shadow: 0 2px 12px rgba(26, 29, 38, 0.06);
            cursor: pointer;
            line-height: 1;
            min-width: 0;
            flex: 0 1 auto;
            max-width: min(420px, 100%);
          }
          .stores-onlymapped:hover{
            border-color: rgba(245, 192, 0, 0.45);
            box-shadow: 0 8px 20px rgba(245, 192, 0, 0.12);
          }
          .stores-onlymapped input {
            width: 18px;
            height: 18px;
            accent-color: var(--primary, #f5c000);
            transform: none;
            margin: 0;
          }
          .stores-onlymapped span{
            font-weight: 900;
            min-width: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          @media (max-width: 420px){
            .stores-onlymapped{
              padding: 9px 12px;
            }
            .stores-onlymapped span{
              font-size: 0.86rem;
            }
          }

          .stores-mini-map {
            position: relative;
            border: 1px solid rgba(232, 230, 224, 0.95);
            border-radius: 22px;
            background: rgba(255, 255, 255, 0.94);
            box-shadow: 0 14px 36px rgba(26, 29, 38, 0.08);
            padding: 18px 18px 16px;
            cursor: pointer;
            overflow: hidden;
            min-height: 130px;
            text-align: right;
            font-family: inherit;
          }
          .stores-mini-map__shine {
            display: none;
          }
          .stores-mini-map:hover{
            border-color: rgba(245, 192, 0, 0.45);
            box-shadow: 0 18px 46px rgba(245, 192, 0, 0.14);
          }
          .stores-mini-map__bg {
            position: absolute;
            inset: 0;
            background:
              radial-gradient(ellipse 80% 60% at 15% 30%, rgba(255, 204, 0, 0.18) 0%, transparent 60%),
              radial-gradient(ellipse 70% 60% at 92% 70%, rgba(2, 119, 189, 0.06) 0%, transparent 55%),
              linear-gradient(180deg, rgba(230, 239, 232, 0.9) 0%, rgba(220, 232, 224, 0.92) 100%);
          }
          .stores-mini-map__badge {
            position: relative;
            z-index: 1;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 10px 12px;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.9);
            border: 1px solid rgba(255, 204, 0, 0.35);
            color: var(--secondary);
            font-weight: 950;
          }
          .stores-mini-map__hint {
            position: relative;
            z-index: 1;
            margin-top: 10px;
            color: rgba(26, 29, 38, 0.75);
            font-weight: 800;
          }

          .stores-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
          }
          @media (max-width: 420px) {
            .stores-grid { gap: 10px; }
          }
          .store-card {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            justify-content: space-between;
            gap: 10px;
            padding: 12px 12px 14px;
            border-radius: 20px;
            background: rgba(255, 255, 255, 0.92);
            border: 1px solid rgba(232, 230, 224, 0.95);
            text-decoration: none;
            color: inherit;
            box-shadow: 0 10px 26px rgba(26, 29, 38, 0.05);
            min-width: 0;
          }
          .store-card:hover{
            border-color: rgba(245, 192, 0, 0.45);
            box-shadow: 0 16px 40px rgba(245, 192, 0, 0.14);
          }
          .store-card__name {
            font-weight: 950;
            color: var(--secondary);
            margin-bottom: 6px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .store-card__meta {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: var(--text-secondary);
            font-weight: 800;
            font-size: 0.84rem;
          }
          .store-card__dot {
            width: 4px;
            height: 4px;
            border-radius: 999px;
            background: rgba(26, 29, 38, 0.25);
          }
          .store-card__thumb {
            order: -1;
            width: 100%;
            aspect-ratio: 1 / 1;
            height: auto;
            border-radius: 18px;
            overflow: hidden;
            border: 1px solid rgba(232, 230, 224, 0.95);
            background: rgba(255,255,255,0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }
          .store-card__thumb-img { width: 100%; height: 100%; object-fit: cover; }
          .store-card__thumb-emoji {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
          }

          .stores-pager {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            margin-top: 6px;
          }
          .stores-pager button {
            border-radius: 12px;
            border: 1px solid rgba(232, 230, 224, 0.95);
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
            color: var(--secondary);
            font-weight: 900;
            padding: 9px 14px;
            cursor: pointer;
          }
          .stores-pager button:disabled { opacity: 0.5; cursor: not-allowed; }
          .stores-pager span { font-weight: 900; color: var(--text-secondary); }

          .stores-loading, .stores-empty {
            padding: 14px;
            border-radius: 18px;
            border: 1px solid rgba(232, 230, 224, 0.95);
            background: rgba(255,255,255,0.92);
            color: var(--text-secondary);
            font-weight: 800;
            text-align: center;
          }

          @media (min-width: 721px) {
            .stores-hero {
              display: grid;
              grid-template-columns: minmax(0, 1fr) min(300px, 30vw);
              gap: 18px;
              align-items: stretch;
            }
            .stores-page {
              gap: 18px;
            }
            .stores-head {
              padding: 22px 26px;
              border-radius: 24px;
              align-self: stretch;
              border: 1px solid rgba(232, 230, 224, 0.85);
              background:
                linear-gradient(145deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 252, 240, 0.94) 55%, rgba(255, 250, 235, 0.9) 100%);
              box-shadow:
                0 1px 0 rgba(255, 255, 255, 0.9) inset,
                0 16px 40px rgba(26, 29, 38, 0.08),
                0 4px 12px rgba(245, 192, 0, 0.06);
            }
            .stores-title {
              font-size: 1.5rem;
              letter-spacing: -0.02em;
            }
            .stores-sub {
              max-width: 42ch;
              font-size: 0.92rem;
            }
            .stores-controls {
              flex-wrap: nowrap;
              gap: 12px;
            }
            .stores-filterbtn {
              max-width: none;
              padding: 11px 16px;
              border-radius: 14px;
            }
            .stores-onlymapped {
              padding: 11px 16px;
              border-radius: 14px;
              max-width: min(360px, 28vw);
            }
            .stores-onlymapped span{
              /* الديسكتوب: لو المساحة ضاقت، اعرض سطرين بدل ما يختفي النص */
              white-space: normal;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              overflow: hidden;
              text-overflow: ellipsis;
              line-height: 1.25;
            }
            .stores-mini-map {
              align-self: stretch;
              display: flex;
              flex-direction: column;
              justify-content: center;
              min-height: 0;
              padding: 22px 22px 20px;
              border-radius: 24px;
              border: 1px solid rgba(245, 192, 0, 0.28);
              background: rgba(255, 255, 255, 0.72);
              box-shadow:
                0 1px 0 rgba(255, 255, 255, 0.85) inset,
                0 18px 48px rgba(26, 29, 38, 0.1),
                0 0 0 1px rgba(255, 255, 255, 0.5) inset;
              transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.2s ease;
            }
            .stores-mini-map:hover {
              transform: translateY(-2px);
              border-color: rgba(245, 192, 0, 0.45);
              box-shadow:
                0 1px 0 rgba(255, 255, 255, 0.85) inset,
                0 22px 52px rgba(245, 192, 0, 0.18),
                0 0 0 1px rgba(255, 255, 255, 0.55) inset;
            }
            .stores-mini-map:focus-visible {
              outline: none;
              box-shadow:
                0 0 0 3px rgba(255, 255, 255, 0.95),
                0 0 0 6px rgba(245, 192, 0, 0.45),
                0 22px 50px rgba(26, 29, 38, 0.12);
            }
            .stores-mini-map__bg {
              z-index: 0;
              background:
                radial-gradient(ellipse 85% 70% at 88% 18%, rgba(255, 204, 0, 0.22) 0%, transparent 55%),
                radial-gradient(ellipse 60% 55% at 12% 78%, rgba(2, 119, 189, 0.09) 0%, transparent 50%),
                repeating-linear-gradient(
                  -12deg,
                  transparent,
                  transparent 11px,
                  rgba(255, 255, 255, 0.07) 11px,
                  rgba(255, 255, 255, 0.07) 12px
                ),
                linear-gradient(165deg, rgba(232, 242, 235, 0.95) 0%, rgba(210, 228, 218, 0.92) 48%, rgba(198, 220, 208, 0.9) 100%);
            }
            .stores-mini-map__shine {
              display: block;
              position: absolute;
              inset: 0;
              z-index: 1;
              border-radius: inherit;
              pointer-events: none;
              background: linear-gradient(
                125deg,
                transparent 40%,
                rgba(255, 255, 255, 0.35) 48%,
                rgba(255, 255, 255, 0.12) 52%,
                transparent 60%
              );
              opacity: 0.85;
            }
            .stores-mini-map__badge {
              z-index: 2;
              padding: 11px 16px;
              font-size: 0.95rem;
              border-radius: 14px;
              box-shadow: 0 4px 16px rgba(26, 29, 38, 0.08);
            }
            .stores-mini-map__hint {
              z-index: 2;
              margin-top: 12px;
              font-size: 0.9rem;
            }
            .stores-grid {
              grid-template-columns: repeat(4, minmax(0, 1fr));
            }
          }

          /* ديسكتوب متوسط: اسم القسم أحيانًا طويل—اسمح بلف الكنترولز */
          @media (min-width: 721px) and (max-width: 1099px) {
            .stores-controls {
              flex-wrap: wrap;
              justify-content: flex-end;
            }
            .stores-filterbtn,
            .stores-onlymapped {
              max-width: 100%;
            }
          }

        `}})]})})}const Ln=`
  .admin-dash { max-width: 1240px; margin-inline: auto; padding-inline: clamp(8px, 2.2vw, 22px); box-sizing: border-box; }
  .admin-dash h1 { font-size: 1.75rem; margin-bottom: 8px; color: var(--secondary); }
  .admin-intro { color: var(--text-secondary); line-height: 1.7; margin-bottom: 22px; }
  .admin-section { padding: 18px 20px; margin-bottom: 22px; }
  .admin-section-head {
    display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px;
    margin-bottom: 16px;
  }
  .admin-section h2 { margin: 0; font-size: 1.2rem; color: var(--secondary); }
  .admin-filter {
    padding: 8px 12px; border-radius: 10px; border: 1.5px solid var(--border);
    font-weight: 700; font-family: inherit; background: var(--surface);
  }
  .admin-empty { color: var(--text-secondary); margin: 0; }
  .admin-cards { display: flex; flex-direction: column; gap: 16px; }
  .admin-card {
    display: grid; grid-template-columns: 160px 1fr; gap: 16px;
    padding: 14px; border: 1px solid var(--border); border-radius: 14px; background: var(--surface);
  }
  @media (max-width: 640px) {
    .admin-card { grid-template-columns: 1fr; }
  }
  .admin-card-media img {
    width: 100%; max-height: 140px; object-fit: cover; border-radius: 10px; display: block;
  }
  .receipt-link { display: inline-block; margin-top: 8px; font-weight: 800; color: var(--secondary); }
  .admin-card-body h3 { margin: 0 0 8px; font-size: 1.05rem; }
  .store-line { font-weight: 800; color: var(--secondary); margin: 0 0 6px; font-size: 0.9rem; }
  .desc { margin: 0 0 8px; font-size: 0.92rem; line-height: 1.55; color: var(--text-primary); }
  .status-pill { margin: 0 0 10px; font-size: 0.9rem; }
  .muted { color: var(--text-secondary); font-size: 0.85rem; }
  .small { font-size: 0.8rem; }
  .admin-actions { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 8px; }
  .btn-ok, .btn-no {
    padding: 10px 16px; border-radius: 10px; font-weight: 800; cursor: pointer; font-family: inherit;
    border: none; font-size: 0.9rem;
  }
  .btn-ok { background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%); color: var(--secondary); }
  .btn-no { background: #fdecea; color: #c0392b; border: 1.5px solid #f5c6c2; }
  .btn-ok:disabled, .btn-no:disabled { opacity: 0.6; cursor: wait; }

  .admin-primary-only h2 { margin: 0 0 10px; font-size: 1.2rem; color: var(--secondary); }
  .admin-subhint { margin: 0 0 18px; font-size: 0.9rem; line-height: 1.65; color: var(--text-secondary); }
  .admin-account-form { margin-bottom: 20px; }
  .form-row-grid {
    display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 12px;
    margin-bottom: 14px;
  }
  .form-row-grid label { display: flex; flex-direction: column; gap: 6px; font-size: 0.85rem; font-weight: 700; color: var(--secondary); }
  .form-row-grid input, .form-row-grid select {
    padding: 10px 12px; border-radius: 10px; border: 1.5px solid var(--border);
    font-family: inherit; font-size: 0.95rem;
  }
  .admin-table-wrap { overflow-x: auto; }
  .admin-accounts-table { width: 100%; border-collapse: collapse; font-size: 0.92rem; }
  .admin-accounts-table th, .admin-accounts-table td { padding: 10px 8px; text-align: right; border-bottom: 1px solid var(--border); }
  .admin-accounts-table th { color: var(--secondary); font-weight: 800; }
  .tier-badge { padding: 4px 10px; border-radius: 999px; font-size: 0.8rem; font-weight: 800; }
  .tier-primary { background: #e8f4fc; color: #1a5a8a; }
  .tier-secondary { background: var(--primary-light); color: var(--secondary); }
  .you-badge { margin-inline-start: 8px; font-size: 0.72rem; font-weight: 800; color: #1a5a8a; }
  .btn-toggle {
    padding: 6px 12px; border-radius: 8px; border: 1.5px solid var(--border);
    background: var(--white); font-weight: 700; cursor: pointer; font-family: inherit; font-size: 0.82rem;
  }
  .btn-toggle:disabled { opacity: 0.5; cursor: not-allowed; }

  .admin-home-empty {
    text-align: center; padding: 48px 24px; color: var(--text-secondary);
    line-height: 1.8; font-size: 1rem;
  }
  .admin-home-empty strong { color: var(--secondary); }
`,pp={pending:"قيد الانتظار",active:"نشط",rejected:"مرفوض",expired:"منتهي الصلاحية",approved:"مقبول"};function yS(){var d,h,u,f,y,x;const[e,t]=m.useState(null),[n,a]=m.useState(!0);m.useEffect(()=>{let v=!1;return(async()=>{a(!0);try{const _=await nk();v||t(_)}catch{v||t(null)}finally{v||a(!1)}})(),()=>{v=!0}},[]);const o=e==null?void 0:e.users,l=e==null?void 0:e.app_opens;return i.jsx(Ce,{children:i.jsxs("div",{className:"admin-dash",children:[i.jsx("h1",{children:"لوحة الإدارة"}),i.jsxs("section",{className:"card admin-section",children:[i.jsx("div",{className:"admin-section-head",children:i.jsx("h2",{children:"ملخص سريع"})}),n?i.jsx("p",{children:"جاري التحميل…"}):e?i.jsxs("div",{className:"admin-cards",style:{marginTop:12},children:[i.jsx("article",{className:"admin-card",children:i.jsxs("div",{className:"admin-card-body",children:[i.jsx("h3",{children:"المستخدمون"}),i.jsxs("p",{className:"muted",children:["الإجمالي: ",(o==null?void 0:o.total)??0," · النشط: ",(o==null?void 0:o.active_total)??0]}),i.jsxs("p",{className:"muted",children:["متسوقين: ",((d=o==null?void 0:o.shopper)==null?void 0:d.total)??0," (نشط ",((h=o==null?void 0:o.shopper)==null?void 0:h.active)??0,")"]}),i.jsxs("p",{className:"muted",children:["تجار: ",((u=o==null?void 0:o.merchant)==null?void 0:u.total)??0," (نشط ",((f=o==null?void 0:o.merchant)==null?void 0:f.active)??0,")"]})]})}),i.jsx("article",{className:"admin-card",children:i.jsxs("div",{className:"admin-card-body",children:[i.jsx("h3",{children:"فتح التطبيق اليوم"}),i.jsx("p",{className:"muted",children:(l==null?void 0:l.today)??""}),i.jsx("p",{style:{fontWeight:900,fontSize:"1.2rem",marginTop:6},children:(l==null?void 0:l.opens_today)??0})]})}),i.jsx("article",{className:"admin-card",children:i.jsxs("div",{className:"admin-card-body",children:[i.jsx("h3",{children:"المتاجر"}),i.jsxs("p",{className:"muted",children:["الإجمالي: ",((y=e==null?void 0:e.stores)==null?void 0:y.total)??0]}),i.jsxs("p",{className:"muted",children:["معلقة: ",((x=e==null?void 0:e.stores)==null?void 0:x.suspended)??0]})]})})]}):i.jsx("p",{className:"admin-empty",children:"تعذر تحميل المؤشرات."})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:Ln}})]})})}function vS(){const{showAlert:e,showConfirm:t}=Ue(),n=(localStorage.getItem("user_name")||"").trim().toLowerCase(),[a,o]=m.useState([]),[l,d]=m.useState(!1),[h,u]=m.useState(!1),[f,y]=m.useState(""),[x,v]=m.useState(""),[_,b]=m.useState(""),[z,C]=m.useState("secondary"),[N,w]=m.useState(null),S=m.useCallback(async()=>{d(!0);try{const M=await Xj();o(Array.isArray(M)?M:[])}catch(M){console.error(M),o([]),await e("تعذر تحميل قائمة المدراء.","خطأ")}finally{d(!1)}},[e]);m.useEffect(()=>{S()},[S]);const j=async M=>{if(M.preventDefault(),!f.trim()||!x.trim()||_.length<6){await e("أكمل اسم المستخدم ورقم الهاتف وكلمة مرور لا تقل عن 6 أحرف.","تنبيه");return}u(!0);try{await ek({username:f.trim(),phone_number:x.trim(),password:_,tier:z}),await e(z==="primary"?"تم إنشاء مدير أساسي جديد.":"تم إنشاء مدير فرعي.","تم"),y(""),v(""),b(""),C("secondary"),S()}catch(P){console.error(P),await e(Je(P,"تعذر إنشاء الحساب."),"خطأ")}finally{u(!1)}},E=async M=>{if(M.is_primary_admin)return;const P=!M.is_active;if(await t(`${P?"تفعيل":"تعطيل"} دخول هذا المدير الفرعي؟`,"تأكيد")){w(M.id);try{await tk(M.id,P),await e(P?"تم التفعيل.":"تم التعطيل.","تم"),S()}catch(F){console.error(F),await e("تعذر تحديث الحساب.","خطأ")}finally{w(null)}}};return i.jsx(Ce,{children:i.jsxs("div",{className:"admin-dash",children:[i.jsx("h1",{children:"إدارة المدراء"}),i.jsxs("p",{className:"admin-intro",children:["إنشاء ",i.jsx("strong",{children:"مدير فرعي"})," أو ",i.jsx("strong",{children:"مدير أساسي"})," جديد، وتعطيل أو تفعيل دخول المدير الفرعي فقط."]}),i.jsxs("section",{className:"card admin-section admin-primary-only",children:[i.jsxs("form",{className:"admin-account-form",onSubmit:j,children:[i.jsxs("div",{className:"form-row-grid",children:[i.jsxs("label",{children:["اسم المستخدم",i.jsx("input",{type:"text",value:f,onChange:M=>y(M.target.value),autoComplete:"off"})]}),i.jsxs("label",{children:["رقم الهاتف",i.jsx("input",{type:"text",value:x,onChange:M=>v(M.target.value),autoComplete:"off"})]}),i.jsxs("label",{children:["كلمة المرور",i.jsx("input",{type:"password",value:_,onChange:M=>b(M.target.value),autoComplete:"new-password"})]}),i.jsxs("label",{children:["نوع الحساب",i.jsxs("select",{value:z,onChange:M=>C(M.target.value),children:[i.jsx("option",{value:"secondary",children:"مدير فرعي"}),i.jsx("option",{value:"primary",children:"مدير أساسي (مثلك)"})]})]})]}),i.jsx("button",{type:"submit",className:"btn-ok",disabled:h,children:h?"جاري الإنشاء…":"إنشاء حساب"})]}),l?i.jsx("p",{children:"جاري تحميل المدراء…"}):i.jsx("div",{className:"admin-table-wrap",children:i.jsxs("table",{className:"admin-accounts-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"المستخدم"}),i.jsx("th",{children:"الهاتف"}),i.jsx("th",{children:"النوع"}),i.jsx("th",{children:"الحالة"}),i.jsx("th",{})]})}),i.jsx("tbody",{children:a.map(M=>{const P=M.username.trim().toLowerCase()===n,O=!M.is_primary_admin;return i.jsxs("tr",{children:[i.jsxs("td",{children:[M.username,P?i.jsx("span",{className:"you-badge",children:"أنت"}):null]}),i.jsx("td",{children:M.phone_number}),i.jsx("td",{children:i.jsx("span",{className:M.is_primary_admin?"tier-badge tier-primary":"tier-badge tier-secondary",children:M.is_primary_admin?"أساسي":"فرعي"})}),i.jsx("td",{children:M.is_active?"نشط":"معطّل"}),i.jsx("td",{children:O?i.jsx("button",{type:"button",className:"btn-toggle",disabled:N===M.id||P,onClick:()=>E(M),title:P?"لا يمكنك تعطيل حسابك من هنا":"",children:M.is_active?"تعطيل الدخول":"تفعيل الدخول"}):i.jsx("span",{className:"muted small",children:"—"})})]},M.id)})})]})})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:Ln}})]})})}function bS(){const{showAlert:e,showConfirm:t}=Ue(),{refresh:n}=va(),[a,o]=m.useState("pending"),[l,d]=m.useState([]),[h,u]=m.useState(!0),[f,y]=m.useState(null),x=m.useCallback(async()=>{u(!0);try{const _=await Gj(a);d(Array.isArray(_)?_:[])}catch(_){console.error(_),d([]),await e("تعذر تحميل الإعلانات.","خطأ")}finally{u(!1)}},[a,e]);m.useEffect(()=>{x()},[x]);const v=async(_,b)=>{if(await t(`تأكيد ${b==="active"?"قبول":"رفض"} هذا الإعلان؟`,"تأكيد")){y(_);try{await Hy(_,b),await e(b==="active"?"تم تفعيل الإعلان.":"تم رفض الإعلان.","تم"),await n(),x()}catch(N){console.error(N),await e("تعذر تحديث حالة الإعلان.","خطأ")}finally{y(null)}}};return i.jsx(Ce,{children:i.jsxs("div",{className:"admin-dash",children:[i.jsx("h1",{children:"إدارة الإعلانات الممولة"}),i.jsx("p",{className:"admin-intro",children:"راجع إشعار الدفع ثم وافق على الإعلان أو ارفضه."}),i.jsxs("section",{className:"card admin-section",children:[i.jsxs("div",{className:"admin-section-head",children:[i.jsx("h2",{children:"قائمة الإعلانات"}),i.jsxs("select",{className:"admin-filter",value:a,onChange:_=>o(_.target.value),"aria-label":"تصفية حالة الإعلان",children:[i.jsx("option",{value:"pending",children:"بانتظار الموافقة"}),i.jsx("option",{value:"active",children:"نشط"}),i.jsx("option",{value:"rejected",children:"مرفوض"}),i.jsx("option",{value:"expired",children:"منتهي الصلاحية"}),i.jsx("option",{value:"",children:"الكل"})]})]}),h?i.jsx("p",{children:"جاري التحميل…"}):l.length===0?i.jsx("p",{className:"admin-empty",children:"لا توجد إعلانات في هذا الفلتر."}):i.jsx("div",{className:"admin-cards",children:l.map(_=>i.jsxs("article",{className:"admin-card",children:[i.jsxs("div",{className:"admin-card-media",children:[Ie(_).length>0?i.jsx(me,{to:`/admin/ads/${_.id}`,title:"مراجعة الطلب",style:{display:"block"},children:i.jsx(jt,{images:Ie(_),height:140,borderRadius:10})}):null,_.payment_receipt_image?i.jsx(me,{to:`/admin/ads/${_.id}`,className:"receipt-link",children:"مراجعة إشعار الدفع"}):i.jsx("span",{className:"muted",children:"لا يوجد إشعار دفع"})]}),i.jsxs("div",{className:"admin-card-body",children:[i.jsx("h3",{children:_.title}),i.jsxs("p",{className:"store-line",children:["المتجر: ",_.store_name||`#${_.store}`]}),i.jsxs("p",{className:"desc",children:["سعر المنتج: ",Number(_.product_price)>0?`${Number(_.product_price).toFixed(2)} ₪`:"—"," — الدفع:"," ",_.payment_method_label||_.payment_method||"—"]}),i.jsx("p",{className:"desc",children:_.description}),i.jsxs("p",{className:"status-pill",children:["الحالة: ",i.jsx("strong",{children:pp[_.status]||_.status})]}),_.status==="pending"?i.jsxs("div",{className:"admin-actions",children:[i.jsx("button",{type:"button",className:"btn-ok",disabled:f===_.id,onClick:()=>v(_.id,"active"),children:"قبول وتفعيل"}),i.jsx("button",{type:"button",className:"btn-no",disabled:f===_.id,onClick:()=>v(_.id,"rejected"),children:"رفض"})]}):null]})]},_.id))})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:Ln}})]})})}function _S(){var C;const{adId:e}=ga(),t=ct(),{showAlert:n,showConfirm:a}=Ue(),{refresh:o}=va(),[l,d]=m.useState(null),[h,u]=m.useState(!0),[f,y]=m.useState(!1),[x,v]=m.useState(!1),_=m.useCallback(async()=>{if(e){u(!0);try{const N=await Kj(e);d(N),v(!1)}catch(N){console.error(N),d(null),await n("تعذر تحميل بيانات الإعلان.","خطأ")}finally{u(!1)}}},[e,n]);m.useEffect(()=>{_()},[_]);const b=async N=>{if(!(!(l!=null&&l.id)||!await a(`تأكيد ${N==="active"?"قبول":"رفض"} هذا الإعلان؟`,"تأكيد"))){y(!0);try{await Hy(l.id,N),await n(N==="active"?"تم تفعيل الإعلان.":"تم رفض الإعلان.","تم"),await o(),t("/admin/ads")}catch(j){console.error(j),await n("تعذر تحديث حالة الإعلان.","خطأ")}finally{y(!1)}}},z=N=>{const w=Number(N);return Number.isFinite(w)?w.toFixed(2):"—"};return i.jsx(Ce,{children:i.jsxs("div",{className:"admin-dash admin-ad-review",children:[i.jsxs(me,{to:"/admin/ads",className:"admin-back-link",children:[i.jsx(Q_,{size:18,"aria-hidden":!0}),"العودة لقائمة الإعلانات"]}),i.jsx("h1",{children:"مراجعة طلب إعلان ممول"}),i.jsx("p",{className:"admin-intro",children:"تُعرض صور الإعلان وإشعار الدفع هنا داخل الموقع. بعد التحقق يمكنك القبول أو الرفض."}),h?i.jsx("p",{children:"جاري التحميل…"}):l?i.jsxs(i.Fragment,{children:[i.jsxs("section",{className:"card admin-section",children:[i.jsx("h2",{style:{marginTop:0},children:"إشعار الدفع"}),l.payment_receipt_image&&!x?i.jsx("div",{className:"admin-review-receipt-wrap",children:i.jsx("img",{src:l.payment_receipt_image,alt:"إشعار الدفع",className:"admin-review-receipt-img",onError:()=>v(!0),loading:"lazy",referrerPolicy:"no-referrer"})}):i.jsxs("div",{className:"admin-review-receipt-wrap",style:{padding:14},children:[i.jsx("p",{className:"muted",style:{margin:0,lineHeight:1.6},children:l.payment_receipt_image?"تعذر عرض صورة إشعار الدفع حالياً.":"لا يوجد صورة لإشعار الدفع."}),l.payment_receipt_image?i.jsx("a",{href:l.payment_receipt_image,target:"_blank",rel:"noreferrer noopener",style:{display:"inline-flex",marginTop:10,fontWeight:900,color:"var(--secondary)",textDecoration:"underline"},children:"فتح الصورة في تبويب جديد"}):null]})]}),i.jsxs("section",{className:"card admin-section",children:[i.jsx("h2",{style:{marginTop:0},children:"صور الإعلان"}),Ie(l).length>0?i.jsx("div",{className:"admin-review-receipt-wrap",children:i.jsx(jt,{images:Ie(l),height:320,borderRadius:12})}):i.jsx("p",{className:"muted",children:"لا توجد صور للإعلان."})]}),i.jsxs("section",{className:"card admin-section",children:[i.jsx("h2",{style:{marginTop:0},children:"التفاصيل"}),i.jsxs("p",{className:"desc",children:[i.jsx("strong",{children:"العنوان:"})," ",l.title]}),i.jsxs("p",{className:"desc",children:[i.jsx("strong",{children:"المتجر:"})," ",l.store_name||`#${l.store}`]}),i.jsxs("p",{className:"desc",children:[i.jsx("strong",{children:"الوصف:"})," ",l.description]}),i.jsxs("p",{className:"desc",children:[i.jsx("strong",{children:"المنتج المرتبط:"})," ",(C=l.product_details)!=null&&C.name?i.jsxs(i.Fragment,{children:[l.product_details.name," (معرّف ",l.product,")"]}):l.product?i.jsxs(i.Fragment,{children:["معرّف المنتج #",l.product]}):i.jsx(i.Fragment,{children:"لا يوجد"})]}),i.jsxs("p",{className:"desc",children:[i.jsx("strong",{children:"سعر المنتج في الإعلان:"})," ",z(l.product_price)," ₪"]}),i.jsxs("p",{className:"desc",children:[i.jsx("strong",{children:"قناة الدفع:"})," ",l.payment_method_label||l.payment_method||"—"]}),i.jsxs("p",{className:"status-pill",children:["الحالة: ",i.jsx("strong",{children:pp[l.status]||l.status})]}),l.status==="pending"?i.jsxs("div",{className:"admin-actions",children:[i.jsx("button",{type:"button",className:"btn-ok",disabled:f,onClick:()=>b("active"),children:"قبول وتفعيل"}),i.jsx("button",{type:"button",className:"btn-no",disabled:f,onClick:()=>b("rejected"),children:"رفض"})]}):null]})]}):i.jsx("p",{className:"admin-empty",children:"لم يُعثَر على الإعلان."}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`${Ln}
            .admin-ad-review .admin-back-link {
              display: inline-flex; align-items: center; gap: 8px; margin-bottom: 16px;
              font-weight: 800; color: var(--secondary); text-decoration: none;
            }
            .admin-ad-review .admin-back-link:hover { text-decoration: underline; }
            .admin-review-receipt-wrap {
              margin-top: 12px; border-radius: 12px; overflow: hidden;
              border: 1px solid var(--border); background: var(--surface);
            }
            .admin-review-receipt-img {
              display: block; width: 100%; max-height: min(70vh, 720px); object-fit: contain;
              background: #f5f5f5;
            }
          `}})]})})}function wS(){const{showAlert:e,showConfirm:t}=Ue(),{refresh:n}=va(),[a,o]=m.useState("pending"),[l,d]=m.useState([]),[h,u]=m.useState(!0),[f,y]=m.useState(null),x=m.useCallback(async()=>{u(!0);try{const b=await Qj(a);d(Array.isArray(b)?b:[])}catch(b){console.error(b),d([]),await e("تعذر تحميل طلبات التجديد.","خطأ")}finally{u(!1)}},[a,e]);m.useEffect(()=>{x()},[x]);const v=async b=>{if(await t("تأكيد قبول طلب التجديد وتمديد الاشتراك؟","تأكيد")){y(b);try{await Yj(b),await e("تم قبول الطلب وتمديد الاشتراك.","تم"),await n(),x()}catch(C){console.error(C),await e("تعذر قبول الطلب.","خطأ")}finally{y(null)}}},_=async b=>{if(await t("تأكيد رفض طلب التجديد؟","تأكيد")){y(b);try{await Jj(b),await e("تم رفض الطلب.","تم"),await n(),x()}catch(C){console.error(C),await e("تعذر رفض الطلب.","خطأ")}finally{y(null)}}};return i.jsx(Ce,{children:i.jsxs("div",{className:"admin-dash",children:[i.jsx("h1",{children:"إدارة الاشتراكات"}),i.jsxs("p",{className:"admin-intro",children:["مراجعة طلبات ",i.jsx("strong",{children:"تجديد الاشتراك"})," وإشعارات الدفع. قيمة التجديد المعتمدة في الأرباح: ",i.jsx("strong",{children:"10 شيكل"}),"."]}),i.jsxs("section",{className:"card admin-section",children:[i.jsxs("div",{className:"admin-section-head",children:[i.jsx("h2",{children:"طلبات التجديد"}),i.jsxs("select",{className:"admin-filter",value:a,onChange:b=>o(b.target.value),"aria-label":"تصفية حالة طلب التجديد",children:[i.jsx("option",{value:"pending",children:"بانتظار المراجعة"}),i.jsx("option",{value:"approved",children:"مقبول"}),i.jsx("option",{value:"rejected",children:"مرفوض"}),i.jsx("option",{value:"",children:"الكل"})]})]}),h?i.jsx("p",{children:"جاري التحميل…"}):l.length===0?i.jsx("p",{className:"admin-empty",children:"لا توجد طلبات في هذا الفلتر."}):i.jsx("div",{className:"admin-cards",children:l.map(b=>i.jsxs("article",{className:"admin-card renew-card",children:[i.jsx("div",{className:"admin-card-media",children:b.receipt_image?i.jsx("a",{href:b.receipt_image,target:"_blank",rel:"noopener noreferrer",children:i.jsx("img",{src:b.receipt_image,alt:"إشعار الدفع"})}):i.jsx("span",{className:"muted",children:"لا صورة"})}),i.jsxs("div",{className:"admin-card-body",children:[i.jsx("h3",{children:b.store_name||`متجر #${b.store}`}),b.notes?i.jsxs("p",{className:"desc",children:["ملاحظات التاجر: ",b.notes]}):null,i.jsxs("p",{className:"status-pill",children:["الحالة: ",i.jsx("strong",{children:pp[b.status]||b.status})]}),b.decided_at?i.jsxs("p",{className:"muted small",children:["قرار سابق: ",b.decided_by_username?`${b.decided_by_username} — `:"",b.decided_at]}):null,b.status==="pending"?i.jsxs("div",{className:"admin-actions",children:[i.jsx("button",{type:"button",className:"btn-ok",disabled:f===b.id,onClick:()=>v(b.id),children:"قبول وتمديد الاشتراك"}),i.jsx("button",{type:"button",className:"btn-no",disabled:f===b.id,onClick:()=>_(b.id),children:"رفض"})]}):null]})]},b.id))})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:Ln}})]})})}function jS(e){if(!e)return"—";try{const t=new Date(e);return Number.isNaN(t.getTime())?String(e):t.toLocaleString("ar",{dateStyle:"medium",timeStyle:"short"})}catch{return String(e)}}function lg(e){if(!e)return null;const t=new Date(e);if(Number.isNaN(t.getTime()))return null;const n=new Date,a=t.getTime()-n.getTime(),o=Math.ceil(a/(24*60*60*1e3));return o>0?`متبقي ${o} يوم`:o===0?"ينتهي اليوم":`منتهي منذ ${Math.abs(o)} يوم`}function kS(){var V;const{showAlert:e,showConfirm:t}=Ue(),[n,a]=m.useState(""),[o,l]=m.useState(""),[d,h]=m.useState(null),[u,f]=m.useState([]),[y,x]=m.useState(!0),[v,_]=m.useState([]),[b,z]=m.useState({total_all_stores:0,total_filtered:0}),[C,N]=m.useState(!1),[w,S]=m.useState(null);m.useEffect(()=>{let D=!1;return(async()=>{x(!0);try{const ae=await ui();D||f(Array.isArray(ae)?ae:[])}catch{D||f([])}finally{D||x(!1)}})(),()=>{D=!0}},[]);const j=m.useCallback(async()=>{var D,ae;N(!0);try{const oe=await uk(n,d);oe&&Array.isArray(oe.results)?(_(oe.results),z({total_all_stores:((D=oe.meta)==null?void 0:D.total_all_stores)??oe.results.length,total_filtered:((ae=oe.meta)==null?void 0:ae.total_filtered)??oe.results.length})):Array.isArray(oe)?(_(oe),z({total_all_stores:oe.length,total_filtered:oe.length})):(_([]),z({total_all_stores:0,total_filtered:0}))}catch(oe){console.error(oe),_([]),z({total_all_stores:0,total_filtered:0}),await e("تعذر تحميل قائمة المتاجر. تأكد أنك مدير أساسي.","خطأ")}finally{N(!1)}},[n,d,e]);m.useEffect(()=>{j()},[j]);const E=D=>{D.preventDefault(),a(o.trim())},M=async D=>{const ae=!D.is_suspended_by_admin;if(await t(`هل تريد تأكيد: ${ae?"تعليق المتجر على الخريطة والعامة":"إلغاء التعليق وإتاحة الظهور ضمن شروط الاشتراك"}؟`,"تأكيد الإجراء")){S(D.id);try{await hk(D.id,ae),await e(ae?"تم تعليق المتجر.":"تم إلغاء التعليق.","تم"),j()}catch(J){console.error(J),await e("تعذر تحديث حالة المتجر.","خطأ")}finally{S(null)}}},P=b.total_all_stores??0,O=b.total_filtered??v.length,I=!!n||d!=null,F=[n?`بحث «${n}»`:null,d!=null?`قسم: ${((V=u.find(D=>D.id===d))==null?void 0:V.name)||d}`:null].filter(Boolean).join(" — ");return i.jsx(Ce,{children:i.jsxs("div",{className:"admin-dash admin-stores-page",children:[i.jsxs("div",{className:"admin-stores-heading-row",children:[i.jsxs("div",{children:[i.jsx("h1",{style:{margin:"0 0 6px"},children:"المتاجر المشتركة"}),i.jsxs("p",{className:"admin-intro",style:{margin:0},children:["عمود ",i.jsx("strong",{children:"القسم"})," لكل متجر، والعدد المرفوع يطابق دائماً فلترة القسم والبحث معاً (ومع «الكل» بدون بحث يظهر إجمالي المتاجر المسجّلة)."]})]}),i.jsxs("div",{className:"admin-stores-total-pill",title:I?`${O} متجراً مطابقاً للفلترة${F?` (${F})`:""} — إجمالي النظام ${P}`:`إجمالي المتاجر المسجّلة: ${O}`,children:[i.jsx("span",{className:"admin-stores-total-num",children:O}),i.jsx("span",{className:"admin-stores-total-label",children:"متجر ضمن الفلتر"}),I&&P!==O?i.jsxs("span",{className:"admin-stores-total-sub",children:["من أصل ",P," في النظام"]}):null]})]}),i.jsx("p",{className:"admin-stores-filter-hint muted",style:{marginBottom:"1rem"},children:I?i.jsxs(i.Fragment,{children:["الفلتر النشط: ",F||"—"," — العداد أعلاه = ",i.jsx("strong",{children:O})," متجراً."]}):i.jsxs(i.Fragment,{children:["لا يوجد فلتر نشط — يُعرض كل المتاجر المسجّلة (",i.jsx("strong",{children:O}),")."]})}),i.jsxs("section",{className:"card admin-section",children:[i.jsxs("div",{className:"map-filters admin-store-filters",style:{marginBottom:"1rem",padding:"12px 14px"},children:[i.jsx("div",{style:{fontWeight:800,marginBottom:8,color:"var(--secondary)"},children:"فلترة حسب القسم"}),i.jsx("p",{style:{margin:"0 0 10px",fontSize:"0.88rem",color:"var(--text-secondary)"},children:"نفس منطق الخريطة: اختر قسماً أو «الكل»، ويُطبَّق مع حقل البحث معاً."}),y?i.jsx("p",{style:{margin:0,color:"var(--text-secondary)"},children:"جاري تحميل الأقسام…"}):i.jsxs("div",{className:"category-chips",children:[i.jsx("button",{type:"button",className:`chip ${d==null?"chip-active":""}`,onClick:()=>h(null),children:"الكل"}),u.map(D=>i.jsx("button",{type:"button",className:`chip ${d===D.id?"chip-active":""}`,onClick:()=>h(D.id),children:D.name},D.id))]})]}),i.jsx("form",{className:"admin-account-form",onSubmit:E,style:{marginBottom:"1rem"},children:i.jsxs("div",{className:"form-row-grid",style:{alignItems:"flex-end"},children:[i.jsxs("label",{style:{flex:1},children:["بحث (يُركَّب مع القسم)",i.jsx("input",{type:"search",value:o,onChange:D=>l(D.target.value),placeholder:"اسم المتجر، المستخدم، الجوال، العنوان التفصيلي…",autoComplete:"off"})]}),i.jsx("button",{type:"submit",className:"btn-ok",children:"تنفيذ البحث"}),i.jsx("button",{type:"button",className:"btn-toggle",onClick:()=>{l(""),a(""),h(null)},children:"مسح الكل"})]})}),C?i.jsx("p",{children:"جاري التحميل…"}):i.jsxs("div",{className:"admin-table-wrap",children:[i.jsxs("table",{className:"admin-accounts-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"المتجر"}),i.jsx("th",{children:"التقييم"}),i.jsx("th",{children:"القسم"}),i.jsx("th",{children:"العنوان التفصيلي"}),i.jsx("th",{children:"صاحب المتجر"}),i.jsx("th",{children:"الجوال"}),i.jsx("th",{children:"الإحداثيات والخريطة"}),i.jsx("th",{children:"ينتهي الاشتراك"}),i.jsx("th",{children:"للعامة"}),i.jsx("th",{})]})}),i.jsx("tbody",{children:v.map(D=>{var ae;return i.jsxs("tr",{children:[i.jsxs("td",{children:[i.jsx("strong",{children:D.store_name}),i.jsxs("span",{className:"muted small",style:{display:"block"},children:["#",D.id]})]}),i.jsx("td",{children:D.rating_count>0&&D.rating_average!=null?i.jsxs(i.Fragment,{children:[i.jsx("strong",{dir:"ltr",children:Number(D.rating_average).toFixed(1)}),i.jsxs("span",{className:"muted small",style:{display:"block"},children:[D.rating_count," تقييم"]})]}):i.jsx("span",{className:"muted small",children:"— بدون تقييم"})}),i.jsx("td",{children:D.category_name?i.jsx("span",{className:"admin-store-category-cell",children:D.category_name}):i.jsx("span",{className:"muted small",children:"— بدون قسم"})}),i.jsx("td",{style:{maxWidth:"280px",lineHeight:1.5},children:(ae=D.location_address)!=null&&ae.trim()?i.jsx("span",{children:D.location_address.trim()}):i.jsx("span",{className:"muted small",children:"— لم يُدخل عنوان نصي"})}),i.jsx("td",{children:D.merchant_username||"—"}),i.jsx("td",{dir:"ltr",style:{textAlign:"right"},children:D.merchant_phone||"—"}),i.jsx("td",{children:D.latitude!=null&&D.longitude!=null?i.jsxs(i.Fragment,{children:[i.jsxs("span",{className:"muted small",dir:"ltr",style:{display:"block"},children:[Number(D.latitude).toFixed(5),", ",Number(D.longitude).toFixed(5)]}),D.map_preview_url?i.jsx("a",{href:D.map_preview_url,target:"_blank",rel:"noreferrer",children:"فتح على الخريطة"}):null]}):i.jsx("span",{className:"muted small",children:"لم يُحدد"})}),i.jsxs("td",{children:[jS(D.subscription_end_date),lg(D.subscription_end_date)?i.jsx("span",{className:"muted small",style:{display:"block"},children:lg(D.subscription_end_date)}):null,i.jsx("span",{className:"muted small",style:{display:"block"},children:D.subscription_is_active?"علم نشط":"علم غير نشط"}),D.is_suspended_by_admin?i.jsx("span",{className:"tier-badge tier-secondary",style:{marginTop:"0.25rem"},children:"معلّق إدارياً"}):null]}),i.jsx("td",{children:D.is_publicly_visible?i.jsx("span",{className:"tier-badge tier-primary",children:"يظهر"}):i.jsx("span",{className:"tier-badge tier-secondary",children:"مخفي"})}),i.jsx("td",{children:i.jsx("button",{type:"button",className:"btn-toggle",disabled:w===D.id,onClick:()=>M(D),children:D.is_suspended_by_admin?"رفع التعليق":"تعليق المتجر"})})]},D.id)})})]}),!C&&v.length===0?i.jsx("p",{className:"muted",children:"لا توجد نتائج."}):null]})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:Ln}}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .admin-stores-heading-row {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            justify-content: space-between;
            gap: 16px;
            margin-bottom: 8px;
          }
          .admin-stores-total-pill {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-width: 100px;
            padding: 12px 18px;
            border-radius: 16px;
            background: linear-gradient(145deg, #fde8e8 0%, #fff5f5 100%);
            border: 2px solid #e74c3c;
            box-shadow: 0 4px 14px rgba(231, 76, 60, 0.15);
            text-align: center;
          }
          .admin-stores-total-num {
            font-size: 1.75rem;
            font-weight: 900;
            color: #c0392b;
            line-height: 1.1;
          }
          .admin-stores-total-label {
            font-size: 0.78rem;
            font-weight: 700;
            color: #922b21;
            margin-top: 4px;
          }
          .admin-stores-total-sub {
            font-size: 0.72rem;
            font-weight: 600;
            color: #7b241c;
            margin-top: 6px;
            opacity: 0.9;
          }
          .admin-store-category-cell {
            font-weight: 700;
            color: var(--secondary);
            line-height: 1.4;
          }
          .admin-store-filters .category-chips {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            max-height: 140px;
            overflow-y: auto;
          }
          .admin-store-filters .chip {
            border: 1.5px solid var(--border);
            background: var(--white);
            color: var(--secondary);
            padding: 6px 12px;
            border-radius: 999px;
            font-weight: 700;
            font-size: 0.85rem;
            cursor: pointer;
            transition: background 0.15s ease, border-color 0.15s ease;
            font-family: inherit;
          }
          .admin-store-filters .chip:hover {
            background: var(--primary-light);
            border-color: var(--primary);
          }
          .admin-store-filters .chip-active {
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
            color: var(--secondary);
            border-color: transparent;
            box-shadow: var(--shadow-gold);
          }
        `}})]})})}const SS=[31.5,34.4];function NS(){const{showAlert:e,showPrompt:t,showConfirm:n}=Ue(),[a,o]=m.useState("pending"),[l,d]=m.useState([]),[h,u]=m.useState(!0),[f,y]=m.useState(null),[x,v]=m.useState([]),[_,b]=m.useState(!0),[z,C]=m.useState(""),[N,w]=m.useState(""),[S,j]=m.useState(""),[E,M]=m.useState(""),[P,O]=m.useState(null),[I,F]=m.useState(""),[V,D]=m.useState(""),[ae,oe]=m.useState(!1),[Q,J]=m.useState(!1),W=m.useCallback(async()=>{u(!0);try{const T=await Aj(a);d(Array.isArray(T)?T:[])}catch(T){console.error(T),d([]),await e("تعذر تحميل الطلبات.","خطأ")}finally{u(!1)}},[a,e]);m.useEffect(()=>{W()},[W]),m.useEffect(()=>{let T=!1;return(async()=>{try{const Z=await ya();T||v(Array.isArray(Z)?Z:[])}catch{T||v([])}finally{T||b(!1)}})(),()=>{T=!0}},[]);const R=m.useMemo(()=>x.find(T=>String(T.id)===String(z)),[x,z]),te=(R==null?void 0:R.slug)||"",G=async(T,Z)=>{let ee="";if(Z==="reject"){if(ee=await t("أدخل سبب الرفض (مطلوب):","سبب الرفض…","رفض الطلب",""),ee==null)return;if(ee=String(ee).trim(),!ee){await e("سبب الرفض مطلوب.","تنبيه");return}}else if(Z==="approve"&&!await n("تأكيد اعتماد هذه النقطة وإظهارها على الخريطة؟","تأكيد"))return;y(T);try{await Ij(T,Z,ee),await e(Z==="approve"?"تم الاعتماد.":Z==="reject"?"تم الرفض.":Z==="hide"?"تم إخفاء النقطة عن العامة.":"تم إظهار النقطة للعامة.","تم"),await refreshPendingCounts(),W()}catch(ye){await e(Je(ye,"تعذر التحديث."),"خطأ")}finally{y(null)}},X=async T=>{if(T.preventDefault(),!z){await e("اختر القسم.","تنبيه");return}if(!N.trim()||!S.trim()||!E.trim()){await e("عنوان ووصف وعنوان نصي مطلوبة.","تنبيه");return}if(!P){await e("حدد الموقع على الخريطة.","تنبيه");return}const Z={category:Number(z),title:N.trim(),detail_description:S.trim(),address_text:E.trim(),latitude:P[0],longitude:P[1]};if(te==="water"){if(I!=="true"&&I!=="false"){await e("حدد صلاحية الشرب للمياه.","تنبيه");return}Z.water_is_potable=I==="true"}else Z.water_is_potable=null;if(te==="institution"){if(!["local","international","charity"].includes(V)){await e("اختر نطاق المؤسسة.","تنبيه");return}Z.institution_scope=V}else Z.institution_scope="";oe(!0);try{await Fy(Z),await e("تمت إضافة النقطة معتمدة مباشرة.","تم"),w(""),j(""),M(""),O(null),F(""),D(""),W()}catch(ee){await e(Je(ee,"تعذر الإضافة."),"خطأ")}finally{oe(!1)}},H=P||SS,ue=async()=>{if(!navigator.geolocation){await e("المتصفح لا يدعم تحديد الموقع.","تنبيه");return}J(!0);try{const T=await qo({maxWaitMs:22e3,goodEnoughM:110});O([T.latitude,T.longitude]);const Z=T.accuracy;Z!=null&&Z>1200?await e(`تم وضع الدبوس على موقعك. الدقة تقريبية (~${Math.round(Z)} م). على الكمبيوتر غالباً لا يوجد GPS؛ للدقة استخدم الهاتف أو انقر الموقع يدوياً.`,"موقع تقريبي"):await e("تم ضبط الدبوس على موقعك الحالي.","تم")}catch{await e("لم نتمكن من تحديد موقعك. تأكد من السماح بالوصول للموقع في المتصفح.","الموقع")}finally{J(!1)}};return i.jsx(Ce,{children:i.jsxs("div",{className:"admin-dash",children:[i.jsx("h1",{children:"الخدمات المجتمعية"}),i.jsx("p",{className:"admin-intro",children:"راجع طلبات المتسوّقين والتجار، أو أضف نقاطاً معتمدة مباشرة. المعتمد فقط يظهر على الخريطة وصفحة الخدمات."}),i.jsxs("section",{className:"card admin-section",children:[i.jsxs("div",{className:"admin-section-head",children:[i.jsx("h2",{children:"الطلبات والنقاط"}),i.jsxs("select",{className:"admin-filter",value:a,onChange:T=>o(T.target.value),"aria-label":"تصفية الحالة",children:[i.jsx("option",{value:"pending",children:"قيد المراجعة"}),i.jsx("option",{value:"approved",children:"معتمد"}),i.jsx("option",{value:"rejected",children:"مرفوض"}),i.jsx("option",{value:"",children:"الكل"})]})]}),h?i.jsx("p",{children:"جاري التحميل…"}):l.length===0?i.jsx("p",{className:"admin-empty",children:"لا توجد عناصر في هذا الفلتر."}):i.jsx("div",{className:"admin-cards",children:l.map(T=>i.jsx("article",{className:"admin-card",children:i.jsxs("div",{className:"admin-card-body",children:[i.jsx("h3",{children:T.title}),i.jsxs("p",{className:"muted",children:[T.category_name," · ",T.status==="pending"?"قيد المراجعة":T.status==="approved"?"معتمد":"مرفوض"]}),i.jsx("p",{style:{fontSize:"0.9rem",lineHeight:1.5},children:T.detail_description}),i.jsx("p",{style:{fontSize:"0.85rem",color:"#666"},children:T.address_text}),i.jsxs("p",{style:{fontSize:"0.82rem",color:"#888"},children:["من: ",T.submitted_by_username||T.submitted_by]}),T.status==="rejected"&&T.rejection_reason?i.jsxs("p",{style:{fontSize:"0.85rem",color:"#c0392b"},children:["سبب الرفض: ",T.rejection_reason]}):null,T.status==="pending"?i.jsxs("div",{className:"admin-actions",style:{marginTop:12},children:[i.jsx("button",{type:"button",className:"btn-ok",disabled:f===T.id,onClick:()=>G(T.id,"approve"),children:"اعتماد"}),i.jsx("button",{type:"button",className:"btn-no",disabled:f===T.id,onClick:()=>G(T.id,"reject"),children:"رفض"})]}):T.status==="approved"?i.jsx("div",{className:"admin-actions",style:{marginTop:12},children:i.jsx("button",{type:"button",className:T.is_hidden_by_admin?"btn-ok":"btn-no",disabled:f===T.id,onClick:()=>G(T.id,T.is_hidden_by_admin?"unhide":"hide"),children:T.is_hidden_by_admin?"إظهار للعامة":"إخفاء عن العامة"})}):null]})},T.id))})]}),i.jsxs("section",{className:"card admin-section",style:{marginTop:24},children:[i.jsx("h2",{children:"إضافة نقطة معتمدة مباشرة"}),_?i.jsx("p",{children:"جاري تحميل الأقسام…"}):i.jsxs("form",{onSubmit:X,children:[i.jsx("label",{style:{display:"block",fontWeight:800,margin:"12px 0 6px"},children:"القسم"}),i.jsxs("select",{value:z,onChange:T=>{C(T.target.value),F(""),D("")},style:{width:"100%",maxWidth:420,padding:10,borderRadius:10},required:!0,children:[i.jsx("option",{value:"",children:"— اختر —"}),x.map(T=>i.jsx("option",{value:T.id,children:T.name},T.id))]}),te==="water"?i.jsxs("div",{style:{marginTop:12},children:[i.jsx("div",{style:{fontWeight:800,marginBottom:6},children:"المياه"}),i.jsxs("label",{style:{marginRight:16},children:[i.jsx("input",{type:"radio",name:"aw",checked:I==="true",onChange:()=>F("true")})," ","صالحة للشرب"]}),i.jsxs("label",{children:[i.jsx("input",{type:"radio",name:"aw",checked:I==="false",onChange:()=>F("false")})," ","غير صالحة"]})]}):null,te==="institution"?i.jsxs("div",{style:{marginTop:12},children:[i.jsx("label",{style:{display:"block",fontWeight:800,marginBottom:6},children:"نطاق المؤسسة"}),i.jsxs("select",{value:V,onChange:T=>D(T.target.value),style:{width:"100%",maxWidth:420,padding:10,borderRadius:10},children:[i.jsx("option",{value:"",children:"— اختر —"}),i.jsx("option",{value:"local",children:"محلية"}),i.jsx("option",{value:"international",children:"عالمية"}),i.jsx("option",{value:"charity",children:"خيرية"})]})]}):null,i.jsx("label",{style:{display:"block",fontWeight:800,margin:"12px 0 6px"},children:"العنوان"}),i.jsx("input",{value:N,onChange:T=>w(T.target.value),style:{width:"100%",maxWidth:420,padding:10,borderRadius:10},required:!0}),i.jsx("label",{style:{display:"block",fontWeight:800,margin:"12px 0 6px"},children:"الوصف التفصيلي"}),i.jsx("textarea",{value:S,onChange:T=>j(T.target.value),rows:4,style:{width:"100%",maxWidth:520,padding:10,borderRadius:10},required:!0}),i.jsx("label",{style:{display:"block",fontWeight:800,margin:"12px 0 6px"},children:"العنوان النصي"}),i.jsx("textarea",{value:E,onChange:T=>M(T.target.value),rows:2,style:{width:"100%",maxWidth:520,padding:10,borderRadius:10},required:!0}),i.jsx("p",{style:{marginTop:12,fontWeight:800},children:"الخريطة"}),i.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:10,alignItems:"center",marginBottom:8},children:[i.jsx(St,{type:"button",variant:"secondary",loading:Q,onClick:ue,style:{width:"auto"},children:"موقعي الحالي"}),i.jsxs("span",{style:{fontSize:"0.88rem",color:"#666"},children:["أو انقر على الخريطة.",P?` ${P[0].toFixed(5)}, ${P[1].toFixed(5)}`:""]})]}),i.jsx("div",{style:{maxWidth:520,marginTop:8,borderRadius:12,overflow:"hidden"},children:i.jsxs(oi,{center:H,zoom:14,minZoom:10,maxZoom:19,scrollWheelZoom:!0,style:{height:"clamp(240px, 48dvh, 360px)",width:"100%"},children:[i.jsx(si,{}),i.jsx(li,{}),i.jsx(Ao,{position:P}),i.jsx(da,{onPick:(T,Z)=>O([T,Z])}),P?i.jsx(qn,{position:P,children:i.jsx(Vn,{children:"موقع النقطة"})}):null]})}),i.jsx("div",{style:{marginTop:16},children:i.jsx(St,{type:"submit",loading:ae,children:"حفظ كمعتمد"})})]})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:Ln}})]})})}function CS(){const{showAlert:e,showConfirm:t}=Ue(),[n,a]=m.useState(""),[o,l]=m.useState(""),[d,h]=m.useState(!0),[u,f]=m.useState(null),[y,x]=m.useState([]),v=m.useCallback(async()=>{h(!0);try{const C=await ck(n,o);x(Array.isArray(C==null?void 0:C.results)?C.results:[])}catch(C){x([]),await e(Je(C,"تعذر تحميل المستخدمين."),"خطأ")}finally{h(!1)}},[n,o,e]);m.useEffect(()=>{v()},[v]);const _=C=>C==="merchant"?"تاجر":C==="shopper"?"متسوق":C==="admin"?"مدير":C,b=async C=>{const N=!C.is_active;if(await t(N?`تفعيل المستخدم «${C.username}»؟`:`إيقاف المستخدم «${C.username}»؟ سيتم منعه من الدخول، وإن كان تاجرًا سيتم تعليق متجره.`,"تأكيد")){f(C.id);try{await dk(C.id,N),await e(N?"تم تفعيل الحساب.":"تم إيقاف الحساب.","تم"),await v()}catch(S){await e(Je(S,"تعذر تحديث الحساب."),"خطأ")}finally{f(null)}}},z=m.useMemo(()=>y.length,[y]);return i.jsx(Ce,{children:i.jsxs("div",{className:"admin-dash",children:[i.jsx("h1",{children:"المستخدمون"}),i.jsx("p",{className:"admin-intro",children:"بحث وتفعيل/إيقاف حسابات المتسوقين والتجار."}),i.jsxs("section",{className:"card admin-section",children:[i.jsxs("div",{className:"admin-section-head",style:{alignItems:"flex-end",gap:12,flexWrap:"wrap"},children:[i.jsxs("div",{style:{flex:"1 1 260px"},children:[i.jsx("label",{className:"admin-label",htmlFor:"u-q",children:"بحث"}),i.jsx("input",{id:"u-q",className:"admin-input",value:n,onChange:C=>a(C.target.value),placeholder:"اسم المستخدم أو رقم الهاتف…"})]}),i.jsxs("div",{style:{width:200},children:[i.jsx("label",{className:"admin-label",htmlFor:"u-type",children:"النوع"}),i.jsxs("select",{id:"u-type",className:"admin-filter",value:o,onChange:C=>l(C.target.value),children:[i.jsx("option",{value:"",children:"الكل"}),i.jsx("option",{value:"shopper",children:"متسوق"}),i.jsx("option",{value:"merchant",children:"تاجر"}),i.jsx("option",{value:"admin",children:"مدير"})]})]}),i.jsx("button",{type:"button",className:"btn-primary",onClick:v,style:{height:44},children:"تحديث"})]}),d?i.jsx("p",{children:"جاري التحميل…"}):y.length===0?i.jsx("p",{className:"admin-empty",children:"لا توجد نتائج."}):i.jsxs(i.Fragment,{children:[i.jsxs("p",{className:"muted",style:{marginTop:8},children:["عدد النتائج: ",z]}),i.jsx("div",{className:"admin-cards",style:{marginTop:12},children:y.map(C=>i.jsx("article",{className:"admin-card",children:i.jsxs("div",{className:"admin-card-body",children:[i.jsx("h3",{style:{marginBottom:6},children:C.username}),i.jsxs("p",{className:"muted",style:{marginTop:0},children:[_(C.user_type)," · ",C.phone_number]}),i.jsxs("p",{className:"muted",style:{marginTop:6},children:["الحالة: ",C.is_active?"نشط":"موقوف"," · التحقق: ",C.is_whatsapp_verified?"تم":"لا"]}),i.jsx("div",{className:"admin-actions",style:{marginTop:12},children:i.jsx("button",{type:"button",className:C.is_active?"btn-no":"btn-ok",disabled:u===C.id,onClick:()=>b(C),children:C.is_active?"إيقاف الحساب":"تفعيل الحساب"})})]})},C.id))})]})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:Ln}})]})})}function cg(e){if(!e)return"—";try{const t=new Date(e);return Number.isNaN(t.getTime())?String(e):t.toLocaleString("ar",{dateStyle:"medium",timeStyle:"short"})}catch{return String(e)}}function zS(){const{showAlert:e}=Ue(),[t,n]=m.useState(""),[a,o]=m.useState(""),[l,d]=m.useState(""),[h,u]=m.useState(""),[f,y]=m.useState(""),[x,v]=m.useState(!1),[_,b]=m.useState([]),[z,C]=m.useState({total_count:0,total_amount_ils:"0.00"}),N=m.useCallback(async()=>{v(!0);try{const w=await lk({q:t,from:l,to:h,method:f,kind:a});b(Array.isArray(w==null?void 0:w.results)?w.results:[]),C((w==null?void 0:w.meta)||{total_count:0,total_amount_ils:"0.00"})}catch(w){console.error(w),b([]),C({total_count:0,total_amount_ils:"0.00"}),await e("تعذر تحميل التحويلات/الأرباح.","خطأ")}finally{v(!1)}},[t,l,h,f,a,e]);return m.useEffect(()=>{N()},[N]),i.jsx(Ce,{children:i.jsxs("div",{className:"admin-dash admin-finance-page",children:[i.jsx("h1",{style:{marginTop:0},children:"الأرباح والتحويلات"}),i.jsx("p",{className:"admin-intro",children:"هذه الصفحة للمدير الأساسي: مراجعة التحويلات/الأرباح من الإعلانات الممولة وتجديد الاشتراكات المقبولة."}),i.jsxs("section",{className:"card admin-section",children:[i.jsx("div",{className:"admin-section-head",style:{alignItems:"flex-start"},children:i.jsxs("div",{children:[i.jsx("h2",{style:{margin:0},children:"الأرباح والتحويلات"}),i.jsxs("p",{className:"muted small",style:{margin:"6px 0 0"},children:["إجمالي التحويلات ضمن الفلتر: ",i.jsx("strong",{dir:"ltr",children:z.total_count??0})," — مجموع المبالغ:"," ",i.jsxs("strong",{dir:"ltr",children:[z.total_amount_ils??"0.00"," ₪"]})]})]})}),i.jsxs("div",{className:"admin-finance-filters",style:{marginBottom:12},children:[i.jsxs("label",{children:["بحث باسم المتجر/اليوزر/الجوال",i.jsx("input",{value:t,onChange:w=>n(w.target.value),placeholder:"مثال: اسم متجر أو 059...",autoComplete:"off"})]}),i.jsxs("label",{children:["مصدر الأرباح",i.jsxs("select",{value:a,onChange:w=>o(w.target.value),children:[i.jsx("option",{value:"",children:"الكل"}),i.jsx("option",{value:"sponsored_ad",children:"الإعلانات الممولة فقط"}),i.jsx("option",{value:"subscription_renewal",children:"الاشتراكات فقط"})]})]}),i.jsxs("label",{children:["من تاريخ",i.jsx("input",{type:"date",value:l,onChange:w=>d(w.target.value)})]}),i.jsxs("label",{children:["إلى تاريخ",i.jsx("input",{type:"date",value:h,onChange:w=>u(w.target.value)})]}),i.jsxs("label",{children:["طريقة التحويل",i.jsxs("select",{value:f,onChange:w=>y(w.target.value),children:[i.jsx("option",{value:"",children:"الكل"}),i.jsx("option",{value:"balipay_wallet",children:"محفظة بال باي"}),i.jsx("option",{value:"bank_palestine",children:"بنك فلسطين"}),i.jsx("option",{value:"other",children:"أخرى"})]})]}),i.jsx("button",{type:"button",className:"btn-ok",onClick:N,disabled:x,children:"تحديث"}),i.jsx("button",{type:"button",className:"btn-toggle",onClick:()=>{n(""),o(""),d(""),u(""),y("")},children:"مسح الفلاتر"})]}),x?i.jsx("p",{children:"جاري التحميل…"}):_.length===0?i.jsx("p",{className:"muted",children:"لا توجد تحويلات ضمن هذه الفلاتر."}):i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"admin-table-wrap admin-finance-table-wrap",children:i.jsxs("table",{className:"admin-accounts-table admin-finance-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"الإشعار"}),i.jsx("th",{children:"المتجر"}),i.jsx("th",{children:"صاحب المتجر"}),i.jsx("th",{children:"الجوال"}),i.jsx("th",{children:"النوع"}),i.jsx("th",{children:"طريقة التحويل"}),i.jsx("th",{children:"المبلغ"}),i.jsx("th",{children:"تاريخ/وقت التحويل"})]})}),i.jsx("tbody",{children:_.map(w=>i.jsxs("tr",{children:[i.jsx("td",{children:w.receipt_image?i.jsx("a",{href:w.receipt_image,target:"_blank",rel:"noreferrer",className:"fin-receipt",children:i.jsx("img",{src:w.receipt_image,alt:"إشعار التحويل",loading:"lazy"})}):i.jsx("span",{className:"muted small",children:"—"})}),i.jsxs("td",{children:[i.jsx("strong",{children:w.store_name}),i.jsxs("span",{className:"muted small",style:{display:"block"},children:["#",w.store_id]})]}),i.jsx("td",{children:w.merchant_username||"—"}),i.jsx("td",{dir:"ltr",style:{textAlign:"right"},children:w.merchant_phone||"—"}),i.jsx("td",{children:i.jsx("span",{className:"fin-pill fin-pill--kind",children:w.kind_label||w.kind})}),i.jsx("td",{children:i.jsx("span",{className:`fin-pill fin-pill--method fin-pill--${w.payment_method||"other"}`,children:w.payment_method_label||w.payment_method})}),i.jsxs("td",{className:"fin-amount",dir:"ltr",children:[w.amount_ils," ₪"]}),i.jsx("td",{className:"fin-dt",children:cg(w.created_at)})]},w.id))})]})}),i.jsx("div",{className:"fin-cards","aria-label":"قائمة التحويلات",children:_.map(w=>i.jsxs("article",{className:"fin-card",children:[i.jsxs("div",{className:"fin-card__top",children:[i.jsxs("div",{className:"fin-card__store",children:[i.jsx("div",{className:"fin-card__storeName",children:w.store_name}),i.jsxs("div",{className:"muted small",children:["#",w.store_id]})]}),i.jsxs("div",{className:"fin-card__amount",dir:"ltr",children:[w.amount_ils," ₪"]})]}),w.receipt_image?i.jsxs("a",{href:w.receipt_image,target:"_blank",rel:"noreferrer",className:"fin-card__receipt",children:[i.jsx("img",{src:w.receipt_image,alt:"إشعار التحويل",loading:"lazy"}),i.jsx("span",{children:"فتح إشعار التحويل"})]}):null,i.jsxs("div",{className:"fin-card__pills",children:[i.jsx("span",{className:"fin-pill fin-pill--kind",children:w.kind_label||w.kind}),i.jsx("span",{className:`fin-pill fin-pill--method fin-pill--${w.payment_method||"other"}`,children:w.payment_method_label||w.payment_method})]}),i.jsxs("div",{className:"fin-kv",children:[i.jsxs("div",{className:"fin-kv__row",children:[i.jsx("span",{className:"fin-kv__k",children:"صاحب المتجر"}),i.jsx("span",{className:"fin-kv__v",children:w.merchant_username||"—"})]}),i.jsxs("div",{className:"fin-kv__row",children:[i.jsx("span",{className:"fin-kv__k",children:"الجوال"}),i.jsx("span",{className:"fin-kv__v",dir:"ltr",children:w.merchant_phone||"—"})]}),i.jsxs("div",{className:"fin-kv__row",children:[i.jsx("span",{className:"fin-kv__k",children:"التاريخ"}),i.jsx("span",{className:"fin-kv__v",children:cg(w.created_at)})]})]})]},`m-${w.id}`))})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
              .admin-finance-filters{
                display: grid;
                grid-template-columns: repeat(6, minmax(0, 1fr));
                gap: 10px;
                align-items: end;
              }
              .admin-finance-filters label{
                display: flex;
                flex-direction: column;
                gap: 6px;
                font-weight: 800;
                color: var(--secondary);
                font-size: 0.9rem;
              }
              .admin-finance-filters input,
              .admin-finance-filters select{
                padding: 10px 12px;
                border-radius: 12px;
                border: 1.5px solid var(--border);
                background: var(--white);
                font-family: inherit;
              }
              @media (max-width: 900px){
                .admin-finance-filters{ grid-template-columns: 1fr 1fr; }
              }

              .admin-finance-table th{
                position: sticky;
                top: 0;
                background: var(--surface);
                z-index: 1;
              }
              .admin-finance-table-wrap{
                border-radius: 18px;
                border: 1px solid rgba(232, 230, 224, 0.95);
                background: rgba(255,255,255,0.92);
                box-shadow: 0 14px 34px rgba(26, 29, 38, 0.06);
                overflow: auto;
              }
              .admin-finance-table{
                width: 100%;
                min-width: 1120px;
                border-collapse: separate;
                border-spacing: 0;
              }
              .admin-finance-table th, .admin-finance-table td{
                padding: 14px 14px;
                border-bottom: 1px solid rgba(232, 230, 224, 0.95);
                vertical-align: middle;
              }
              .admin-finance-table thead th{
                background: linear-gradient(180deg, rgba(255, 249, 230, 0.75) 0%, rgba(255,255,255,0.96) 100%);
                font-weight: 950;
                white-space: nowrap;
              }
              .admin-finance-table tbody tr:nth-child(even){
                background: rgba(245, 246, 248, 0.55);
              }
              .admin-finance-table tbody tr:hover{
                background: rgba(255, 204, 0, 0.08);
              }
              .admin-finance-table tbody tr:last-child td{
                border-bottom: none;
              }
              .fin-amount{
                font-weight: 950;
                text-align: right;
                white-space: nowrap;
              }
              .fin-dt{
                white-space: nowrap;
              }
              .fin-receipt{
                display: inline-flex;
                width: 56px;
                height: 56px;
                border-radius: 14px;
                overflow: hidden;
                border: 1px solid rgba(232, 230, 224, 0.95);
                background: rgba(255,255,255,0.92);
                box-shadow: 0 10px 24px rgba(26, 29, 38, 0.06);
              }
              .fin-receipt img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                display: block;
              }

              /* Mobile cards */
              .fin-cards{ display: none; }
              @media (max-width: 820px){
                .admin-finance-table-wrap{ display: none; }
                .fin-cards{
                  display: grid;
                  grid-template-columns: 1fr;
                  gap: 12px;
                }
                .fin-card{
                  border-radius: 18px;
                  border: 1px solid rgba(232, 230, 224, 0.95);
                  background: rgba(255,255,255,0.92);
                  box-shadow: 0 14px 34px rgba(26, 29, 38, 0.06);
                  padding: 14px 14px;
                }
                .fin-card__top{
                  display: flex;
                  align-items: flex-start;
                  justify-content: space-between;
                  gap: 10px;
                  margin-bottom: 10px;
                }
                .fin-card__storeName{
                  font-weight: 950;
                  color: var(--secondary);
                  line-height: 1.35;
                }
                .fin-card__amount{
                  flex-shrink: 0;
                  font-weight: 950;
                  color: var(--secondary);
                  background: linear-gradient(135deg, rgba(245, 192, 0, 0.18) 0%, rgba(255,255,255,0.92) 100%);
                  border: 1px solid rgba(245, 192, 0, 0.35);
                  padding: 6px 10px;
                  border-radius: 999px;
                  white-space: nowrap;
                }
                .fin-card__receipt{
                  display: flex;
                  align-items: center;
                  gap: 10px;
                  padding: 10px 10px;
                  border-radius: 16px;
                  border: 1px solid rgba(232, 230, 224, 0.95);
                  background: rgba(255,255,255,0.92);
                  text-decoration: none;
                  color: var(--secondary);
                  box-shadow: 0 10px 24px rgba(26, 29, 38, 0.06);
                  margin-bottom: 12px;
                }
                .fin-card__receipt img{
                  width: 54px;
                  height: 54px;
                  border-radius: 14px;
                  object-fit: cover;
                  border: 1px solid rgba(232, 230, 224, 0.95);
                  flex-shrink: 0;
                }
                .fin-card__receipt span{
                  font-weight: 950;
                  color: var(--secondary);
                }
                .fin-card__pills{
                  display: flex;
                  flex-wrap: wrap;
                  gap: 8px;
                  margin-bottom: 12px;
                }
                .fin-kv{
                  display: grid;
                  gap: 8px;
                }
                .fin-kv__row{
                  display: flex;
                  align-items: baseline;
                  justify-content: space-between;
                  gap: 10px;
                  padding-top: 8px;
                  border-top: 1px dashed rgba(232, 230, 224, 0.95);
                }
                .fin-kv__row:first-child{
                  border-top: none;
                  padding-top: 0;
                }
                .fin-kv__k{
                  font-weight: 900;
                  color: var(--text-secondary);
                  font-size: 0.86rem;
                }
                .fin-kv__v{
                  font-weight: 900;
                  color: var(--secondary);
                  text-align: left;
                }
              }

              .fin-pill{
                display: inline-flex;
                align-items: center;
                justify-content: center;
                padding: 4px 10px;
                border-radius: 999px;
                font-weight: 900;
                font-size: 0.8rem;
                line-height: 1.2;
                border: 1px solid rgba(232, 230, 224, 0.95);
                background: rgba(255, 255, 255, 0.92);
                color: var(--secondary);
                white-space: nowrap;
              }
              .fin-pill--kind{
                background: linear-gradient(135deg, rgba(245, 192, 0, 0.18) 0%, rgba(255,255,255,0.92) 100%);
                border-color: rgba(245, 192, 0, 0.35);
              }
              .fin-pill--balipay_wallet{
                border-color: rgba(37, 211, 102, 0.35);
                background: linear-gradient(135deg, rgba(37, 211, 102, 0.14) 0%, rgba(255,255,255,0.92) 100%);
              }
              .fin-pill--bank_palestine{
                border-color: rgba(2, 119, 189, 0.28);
                background: linear-gradient(135deg, rgba(2, 119, 189, 0.12) 0%, rgba(255,255,255,0.92) 100%);
              }
              .fin-pill--other{
                border-color: rgba(99, 110, 114, 0.28);
              }
            `}})]})]})})}function PS(){const{showAlert:e,showConfirm:t}=Ue(),[n,a]=m.useState(""),[o,l]=m.useState([]),[d,h]=m.useState(!1),u=m.useCallback(async()=>{h(!0);try{const v=await ak();l(Array.isArray(v==null?void 0:v.results)?v.results:[])}catch(v){console.error(v),l([]),await e("تعذر تحميل الإعلانات.","خطأ")}finally{h(!1)}},[e]);m.useEffect(()=>{u()},[u]);const f=m.useMemo(()=>o.find(v=>v.is_active)||null,[o]),y=async()=>{const v=n.trim();if(!v)return e("اكتب نص الإعلان أولاً.","تنبيه");if(await t("نشر إعلان عام جديد؟ سيتم إيقاف الإعلان النشط السابق إن وُجد.","تأكيد"))try{await ok(v),a(""),await u(),await e("تم نشر الإعلان.","تم")}catch(b){console.error(b),await e("تعذر نشر الإعلان.","خطأ")}},x=async()=>{if(!(!f||!await t("حذف/إيقاف الإعلان النشط؟","تأكيد")))try{await sk(f.id),await u(),await e("تم حذف الإعلان.","تم")}catch(_){console.error(_),await e("تعذر حذف الإعلان.","خطأ")}};return i.jsx(Ce,{children:i.jsxs("div",{className:"admin-dash",children:[i.jsx("h1",{children:"إعلان عام"}),i.jsx("p",{className:"admin-intro",children:"نشر إعلان عام يظهر لكل المستخدمين تحت الهيدر. يوجد إعلان نشط واحد فقط في نفس الوقت."}),i.jsxs("section",{className:"card admin-section",children:[i.jsxs("div",{className:"admin-section-head",children:[i.jsx("h2",{children:"الإعلان الحالي"}),d?i.jsx("span",{className:"muted small",children:"جاري التحميل…"}):null]}),f?i.jsxs("div",{className:"card",style:{padding:14,background:"var(--surface)",marginBottom:14},children:[i.jsx("div",{style:{fontWeight:900,marginBottom:8},children:"نشط الآن"}),i.jsx("div",{style:{whiteSpace:"pre-wrap",lineHeight:1.7},children:f.message}),i.jsx("div",{className:"admin-actions",children:i.jsx("button",{type:"button",className:"btn-no",onClick:x,children:"حذف الإعلان"})})]}):i.jsx("p",{className:"muted",style:{marginTop:0},children:"لا يوجد إعلان نشط حالياً."}),i.jsx("h2",{style:{marginTop:0},children:"نشر إعلان جديد"}),i.jsxs("label",{style:{display:"block",fontWeight:800},children:["نص الإعلان",i.jsx("textarea",{value:n,onChange:v=>a(v.target.value),placeholder:"اكتب إعلاناً عاماً يظهر للجميع…",style:{width:"100%",marginTop:8,padding:"0.85rem 1rem",borderRadius:14,border:"1.5px solid var(--border)",background:"var(--white)",minHeight:110,resize:"vertical",fontFamily:"inherit"}})]}),i.jsx("div",{className:"admin-actions",children:i.jsx("button",{type:"button",className:"btn-ok",onClick:y,children:"نشر الإعلان"})})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:Ln}})]})})}function LS({src:e,alt:t}){return e?i.jsx("a",{className:"cat-thumb",href:e,target:"_blank",rel:"noreferrer",title:"فتح الصورة",children:i.jsx("img",{src:e,alt:t||"صورة",loading:"lazy"})}):i.jsx("span",{className:"muted small",children:"—"})}function ES(){const{showAlert:e,showConfirm:t}=Ue(),[n,a]=m.useState("stores"),[o,l]=m.useState(!1),[d,h]=m.useState([]),[u,f]=m.useState([]),[y,x]=m.useState(""),[v,_]=m.useState(""),[b,z]=m.useState(""),[C,N]=m.useState(0),[w,S]=m.useState(null),j=m.useMemo(()=>n==="stores"?d:u,[n,d,u]),E=m.useCallback(async()=>{l(!0);try{const[I,F]=await Promise.all([pk(),gk()]);h(Array.isArray(I==null?void 0:I.results)?I.results:Array.isArray(I)?I:[]),f(Array.isArray(F==null?void 0:F.results)?F.results:Array.isArray(F)?F:[])}catch(I){console.error(I),h([]),f([]),await e("تعذر تحميل الأقسام.","خطأ")}finally{l(!1)}},[e]);m.useEffect(()=>{E()},[E]);const M=()=>{x(""),_(""),z(""),N(0),S(null)},P=async()=>{const I=y.trim();if(!I)return e("اكتب اسم القسم.","تنبيه");l(!0);try{n==="stores"?await mk({name:I,imageFile:w}):await xk({name:I,slug:v.trim(),description_hint:b.trim(),sort_order:Number(C)||0,imageFile:w}),M(),await E(),await e("تمت الإضافة.","تم")}catch(F){console.error(F),await e("تعذر إضافة القسم.","خطأ")}finally{l(!1)}},O=async I=>{if(await t(`حذف القسم: ${I.name}؟`,"تأكيد")){l(!0);try{n==="stores"?await fk(I.id):await yk(I.id),await E(),await e("تم الحذف.","تم")}catch(V){console.error(V),await e("تعذر الحذف. إن كان القسم مرتبط بنقاط خدمات مجتمعية سيتم تعطيله بدل الحذف.","تنبيه"),await E()}finally{l(!1)}}};return i.jsx(Ce,{children:i.jsxs("div",{className:"admin-dash",children:[i.jsx("h1",{children:"إدارة الأقسام"}),i.jsx("p",{className:"admin-intro",children:"إضافة/حذف أقسام المتاجر وأقسام الخدمات المجتمعية، مع صورة افتراضية للقسم."}),i.jsxs("section",{className:"card admin-section",style:{marginBottom:16},children:[i.jsxs("div",{className:"admin-section-head",children:[i.jsx("h2",{style:{margin:0},children:"النوع"}),i.jsxs("div",{className:"cat-tabs",role:"tablist","aria-label":"نوع الأقسام",children:[i.jsx("button",{type:"button",className:`cat-tab${n==="stores"?" cat-tab--active":""}`,onClick:()=>a("stores"),children:"أقسام المتاجر"}),i.jsx("button",{type:"button",className:`cat-tab${n==="community"?" cat-tab--active":""}`,onClick:()=>a("community"),children:"أقسام الخدمات المجتمعية"})]})]}),i.jsxs("div",{className:"cat-form",children:[i.jsxs("label",{children:["اسم القسم",i.jsx("input",{value:y,onChange:I=>x(I.target.value),placeholder:"مثال: حلويات"})]}),n==="community"?i.jsxs(i.Fragment,{children:[i.jsxs("label",{children:["slug (اختياري)",i.jsx("input",{value:v,onChange:I=>_(I.target.value),placeholder:"يُنشأ تلقائياً إن تركته"})]}),i.jsxs("label",{style:{gridColumn:"1 / -1"},children:["تلميح/وصف (اختياري)",i.jsx("textarea",{value:b,onChange:I=>z(I.target.value),placeholder:"يظهر عند اقتراح نقطة خدمة"})]}),i.jsxs("label",{children:["ترتيب (اختياري)",i.jsx("input",{type:"number",value:C,onChange:I=>N(I.target.value)})]})]}):null,i.jsxs("label",{style:{gridColumn:"1 / -1"},children:["صورة افتراضية للقسم (اختياري)",i.jsx("input",{type:"file",accept:"image/*",onChange:I=>{var F;return S(((F=I.target.files)==null?void 0:F[0])||null)}}),i.jsx("span",{className:"muted small",children:"PNG/JPG"})]}),i.jsxs("div",{className:"admin-actions",style:{gridColumn:"1 / -1"},children:[i.jsx("button",{type:"button",className:"btn-ok",onClick:P,disabled:o,children:"إضافة قسم"}),i.jsx("button",{type:"button",className:"btn-toggle",onClick:M,disabled:o,children:"مسح الحقول"})]})]})]}),i.jsxs("section",{className:"card admin-section",children:[i.jsxs("div",{className:"admin-section-head",children:[i.jsx("h2",{style:{margin:0},children:"القائمة"}),o?i.jsx("span",{className:"muted small",children:"جاري…"}):i.jsxs("span",{className:"muted small",children:[j.length," قسم"]})]}),i.jsx("div",{className:"admin-table-wrap",children:i.jsxs("table",{className:"admin-accounts-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"الصورة"}),i.jsx("th",{children:"الاسم"}),n==="community"?i.jsx("th",{children:"slug"}):null,n==="community"?i.jsx("th",{children:"نشط"}):null,i.jsx("th",{})]})}),i.jsxs("tbody",{children:[j.map(I=>i.jsxs("tr",{children:[i.jsx("td",{children:i.jsx(LS,{src:I.image,alt:I.name})}),i.jsxs("td",{children:[i.jsx("strong",{children:I.name}),i.jsxs("span",{className:"muted small",style:{display:"block"},children:["#",I.id]})]}),n==="community"?i.jsx("td",{dir:"ltr",children:I.slug}):null,n==="community"?i.jsx("td",{children:I.is_active?"نعم":"لا"}):null,i.jsx("td",{children:i.jsx("button",{type:"button",className:"btn-no",onClick:()=>O(I),disabled:o,children:"حذف"})})]},I.id)),!o&&j.length===0?i.jsx("tr",{children:i.jsx("td",{colSpan:n==="community"?5:4,className:"muted",children:"لا يوجد أقسام."})}):null]})]})})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
            ${Ln}
            .cat-tabs{ display:flex; gap:10px; flex-wrap:wrap; }
            .cat-tab{
              border:1.5px solid var(--border);
              background: var(--white);
              padding: 9px 12px;
              border-radius: 999px;
              font-weight: 900;
              cursor:pointer;
              font-family: inherit;
              color: var(--secondary);
            }
            .cat-tab--active{
              background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
              border-color: transparent;
              box-shadow: var(--shadow-gold);
            }
            .cat-form{
              display:grid;
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 12px;
              margin-top: 12px;
            }
            .cat-form label{
              display:flex;
              flex-direction:column;
              gap: 6px;
              font-weight: 900;
              color: var(--secondary);
              font-size: 0.9rem;
            }
            .cat-form input, .cat-form textarea{
              padding: 10px 12px;
              border-radius: 12px;
              border: 1.5px solid var(--border);
              background: var(--white);
              font-family: inherit;
            }
            .cat-form textarea{ min-height: 90px; resize: vertical; }
            @media (max-width: 900px){
              .cat-form{ grid-template-columns: 1fr; }
            }
            .cat-thumb{
              display:inline-flex;
              width: 54px;
              height: 54px;
              border-radius: 14px;
              overflow:hidden;
              border: 1px solid rgba(232, 230, 224, 0.95);
              background: rgba(255,255,255,0.92);
              box-shadow: 0 10px 24px rgba(26, 29, 38, 0.06);
            }
            .cat-thumb img{ width:100%; height:100%; object-fit:cover; display:block; }
          `}})]})})}function MS(){const{showAlert:e}=Ue(),t=localStorage.getItem("isGuest")==="true",a=!!localStorage.getItem("token")&&!t,o=m.useMemo(()=>localStorage.getItem("user_name")||"",[]),[l,d]=m.useState(o),[h,u]=m.useState(!1),[f,y]=m.useState(""),[x,v]=m.useState(""),[_,b]=m.useState(!1);if(!a)return i.jsx(Ce,{children:i.jsxs("div",{dir:"rtl",style:{maxWidth:720,margin:"0 auto"},children:[i.jsxs("div",{className:"card",children:[i.jsx("h2",{style:{marginTop:0},children:"الإعدادات"}),i.jsx("div",{style:{color:"var(--text-secondary)",fontWeight:800,lineHeight:1.8},children:"هذه الصفحة متاحة للحسابات المسجّلة فقط."})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:dg}})]})});const z=async N=>{var S,j,E,M,P;N.preventDefault();const w=(l||"").trim();if(!w){e("أدخل اسم المستخدم.","تنبيه");return}u(!0);try{const O=await Ck(w),I=(O==null?void 0:O.username)||w;localStorage.setItem("user_name",I),d(I),e("تم تحديث اسم المستخدم.","تم")}catch(O){const I=((E=(j=(S=O==null?void 0:O.response)==null?void 0:S.data)==null?void 0:j.username)==null?void 0:E[0])||((P=(M=O==null?void 0:O.response)==null?void 0:M.data)==null?void 0:P.error)||"تعذر تحديث اسم المستخدم. حاول لاحقاً.";e(String(I),"خطأ")}finally{u(!1)}},C=async N=>{var w,S,j,E,M,P,O,I,F,V;if(N.preventDefault(),!f){e("أدخل كلمة المرور الحالية.","تنبيه");return}if(!x||x.length<6){e("كلمة المرور الجديدة يجب أن تكون 6 أحرف على الأقل.","تنبيه");return}b(!0);try{await zk({current_password:f,new_password:x}),y(""),v(""),e("تم تغيير كلمة المرور بنجاح.","تم")}catch(D){const ae=((j=(S=(w=D==null?void 0:D.response)==null?void 0:w.data)==null?void 0:S.current_password)==null?void 0:j[0])||((P=(M=(E=D==null?void 0:D.response)==null?void 0:E.data)==null?void 0:M.new_password)==null?void 0:P[0])||((I=(O=D==null?void 0:D.response)==null?void 0:O.data)==null?void 0:I.error)||((V=(F=D==null?void 0:D.response)==null?void 0:F.data)==null?void 0:V.detail)||"تعذر تغيير كلمة المرور. حاول لاحقاً.";e(String(ae),"خطأ")}finally{b(!1)}};return i.jsx(Ce,{children:i.jsxs("div",{dir:"rtl",style:{maxWidth:860,margin:"0 auto"},children:[i.jsxs("div",{className:"settings-wrap",children:[i.jsxs("div",{className:"card",children:[i.jsx("h2",{style:{marginTop:0},children:"الإعدادات"}),i.jsx("div",{className:"muted",children:"يمكنك هنا تحديث اسم المستخدم وكلمة المرور."})]}),i.jsxs("div",{className:"grid",children:[i.jsxs("div",{className:"card",children:[i.jsx("h3",{style:{marginTop:0},children:"تغيير اسم المستخدم"}),i.jsxs("form",{onSubmit:z,className:"form",children:[i.jsx("label",{className:"lbl",children:"اسم المستخدم"}),i.jsx("input",{className:"inp",value:l,onChange:N=>d(N.target.value),placeholder:"اسم المستخدم الجديد",autoComplete:"username"}),i.jsx("button",{className:"btn",type:"submit",disabled:h,children:h?"جاري الحفظ…":"حفظ"})]})]}),i.jsxs("div",{className:"card",children:[i.jsx("h3",{style:{marginTop:0},children:"تغيير كلمة المرور"}),i.jsxs("form",{onSubmit:C,className:"form",children:[i.jsx("label",{className:"lbl",children:"كلمة المرور الحالية"}),i.jsx("input",{className:"inp",type:"password",value:f,onChange:N=>y(N.target.value),autoComplete:"current-password"}),i.jsx("label",{className:"lbl",children:"كلمة المرور الجديدة"}),i.jsx("input",{className:"inp",type:"password",value:x,onChange:N=>v(N.target.value),autoComplete:"new-password"}),i.jsx("button",{className:"btn",type:"submit",disabled:_,children:_?"جاري الحفظ…":"تغيير كلمة المرور"})]})]})]})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:dg}})]})})}const dg=`
.settings-wrap{ display:flex; flex-direction:column; gap:12px; }
.grid{ display:grid; grid-template-columns: 1fr 1fr; gap:12px; }
@media (max-width: 900px){ .grid{ grid-template-columns: 1fr; } }

.card{
  background: rgba(255,255,255,0.92);
  border: 1px solid rgba(232, 230, 224, 0.95);
  border-radius: 18px;
  box-shadow: 0 10px 26px rgba(26, 29, 38, 0.06);
  padding: 14px;
}
.muted{ color: var(--text-secondary); font-weight: 800; opacity: 0.8; line-height: 1.7; }
.form{ display:flex; flex-direction:column; gap:10px; margin-top: 10px; }
.lbl{ font-weight: 900; color: var(--secondary); font-size: 0.9rem; }
.inp{
  height: 46px;
  border-radius: 14px;
  border: 1px solid rgba(232, 230, 224, 0.95);
  padding: 0 12px;
  font-family: inherit;
  outline: none;
  background: rgba(255,255,255,0.95);
}
.inp:focus{
  border-color: rgba(245, 192, 0, 0.55);
  box-shadow: 0 0 0 4px rgba(245, 192, 0, 0.16);
}
.btn{
  height: 46px;
  border-radius: 14px;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-weight: 950;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
  color: var(--secondary);
  box-shadow: var(--shadow-gold);
}
.btn:disabled{ opacity: 0.75; cursor: wait; }
`,yc=()=>!!localStorage.getItem("token"),vc=()=>localStorage.getItem("isGuest")==="true",TS=()=>localStorage.getItem("user_type")==="merchant",AS=()=>localStorage.getItem("user_type")==="admin",Le=({children:e})=>e,qs=({children:e})=>vc()||!yc()?i.jsx(oa,{to:"/login",replace:!0}):e,IS=()=>i.jsx(c1,{}),Fn=({children:e})=>vc()||!yc()||!TS()?i.jsx(oa,{to:"/",replace:!0}):e,hn=({children:e})=>vc()||!yc()||!AS()?i.jsx(oa,{to:"/login",replace:!0}):e,Ga=({children:e})=>localStorage.getItem("is_primary_admin")!=="true"?i.jsx(oa,{to:"/admin",replace:!0}):e,RS=({children:e})=>{if(vc()||!yc())return i.jsx(oa,{to:"/login",replace:!0});const t=localStorage.getItem("user_type");return t!=="shopper"&&t!=="merchant"?i.jsx(oa,{to:"/services",replace:!0}):e};function OS(){return m.useEffect(()=>{Sk().catch(()=>{})},[]),i.jsx(W_,{children:i.jsx(Tk,{children:i.jsx(Mj,{children:i.jsx(Lk,{children:i.jsx(Ak,{children:i.jsxs(T_,{children:[i.jsx(je,{path:"/login",element:i.jsx(Fk,{})}),i.jsx(je,{path:"/share/cart/:shareToken",element:i.jsx(hS,{})}),i.jsx(je,{path:"/register",element:i.jsx(j4,{})}),i.jsx(je,{path:"/verify-whatsapp",element:i.jsx(lS,{})}),i.jsx(je,{path:"/settings",element:i.jsx(Le,{children:i.jsx(qs,{children:i.jsx(MS,{})})})}),i.jsx(je,{path:"/admin",element:i.jsx(Le,{children:i.jsx(hn,{children:i.jsx(yS,{})})})}),i.jsx(je,{path:"/admin/accounts",element:i.jsx(Le,{children:i.jsx(hn,{children:i.jsx(Ga,{children:i.jsx(vS,{})})})})}),i.jsx(je,{path:"/admin/ads",element:i.jsx(Le,{children:i.jsx(hn,{children:i.jsx(bS,{})})})}),i.jsx(je,{path:"/admin/ads/:adId",element:i.jsx(Le,{children:i.jsx(hn,{children:i.jsx(_S,{})})})}),i.jsx(je,{path:"/admin/subscriptions",element:i.jsx(Le,{children:i.jsx(hn,{children:i.jsx(wS,{})})})}),i.jsx(je,{path:"/admin/stores",element:i.jsx(Le,{children:i.jsx(hn,{children:i.jsx(Ga,{children:i.jsx(kS,{})})})})}),i.jsx(je,{path:"/admin/finance",element:i.jsx(Le,{children:i.jsx(hn,{children:i.jsx(Ga,{children:i.jsx(zS,{})})})})}),i.jsx(je,{path:"/admin/announcements",element:i.jsx(Le,{children:i.jsx(hn,{children:i.jsx(Ga,{children:i.jsx(PS,{})})})})}),i.jsx(je,{path:"/admin/categories",element:i.jsx(Le,{children:i.jsx(hn,{children:i.jsx(Ga,{children:i.jsx(ES,{})})})})}),i.jsx(je,{path:"/admin/community",element:i.jsx(Le,{children:i.jsx(hn,{children:i.jsx(NS,{})})})}),i.jsx(je,{path:"/admin/users",element:i.jsx(Le,{children:i.jsx(hn,{children:i.jsx(CS,{})})})}),i.jsx(je,{path:"/dashboard",element:i.jsx(Le,{children:i.jsx(L4,{})})}),i.jsx(je,{path:"/merchant/dashboard",element:i.jsx(Le,{children:i.jsx(Fn,{children:i.jsx(E4,{})})})}),i.jsx(je,{path:"/merchant/products",element:i.jsx(Le,{children:i.jsx(Fn,{children:i.jsx(M4,{})})})}),i.jsx(je,{path:"/merchant/products/new",element:i.jsx(Le,{children:i.jsx(Fn,{children:i.jsx(tg,{})})})}),i.jsx(je,{path:"/merchant/products/:id/edit",element:i.jsx(Le,{children:i.jsx(Fn,{children:i.jsx(tg,{})})})}),i.jsx(je,{path:"/merchant/my-ads",element:i.jsx(Le,{children:i.jsx(Fn,{children:i.jsx(O4,{})})})}),i.jsx(je,{path:"/merchant/ads",element:i.jsx(Le,{children:i.jsx(Fn,{children:i.jsx(I4,{})})})}),i.jsx(je,{path:"/merchant/subscription",element:i.jsx(Le,{children:i.jsx(Fn,{children:i.jsx(B4,{})})})}),i.jsx(je,{path:"/merchant/settings",element:i.jsx(Le,{children:i.jsx(Fn,{children:i.jsx(q4,{})})})}),i.jsx(je,{path:"/merchant/profile",element:i.jsx(Le,{children:i.jsx(Fn,{children:i.jsx(V4,{})})})}),i.jsx(je,{path:"/categories",element:i.jsx(Le,{children:i.jsx(G4,{})})}),i.jsx(je,{path:"/services",element:i.jsx(Le,{children:i.jsx(Y4,{})})}),i.jsx(je,{path:"/services/category/:categorySlug",element:i.jsx(Le,{children:i.jsx(J4,{})})}),i.jsx(je,{path:"/services/suggest",element:i.jsx(Le,{children:i.jsx(RS,{children:i.jsx(eS,{})})})}),i.jsx(je,{path:"/offers",element:i.jsx(Le,{children:i.jsx(iS,{})})}),i.jsx(je,{path:"/map",element:i.jsx(Le,{children:i.jsx(fS,{})})}),i.jsx(je,{path:"/stores",element:i.jsx(Le,{children:i.jsx(xS,{})})}),i.jsx(je,{path:"/search",element:i.jsx(Le,{children:i.jsx(aS,{})})}),i.jsx(je,{path:"/carts",element:i.jsx(Le,{children:i.jsx(qs,{children:i.jsx(nS,{})})})}),i.jsx(je,{path:"/carts/:cartId",element:i.jsx(Le,{children:i.jsx(qs,{children:i.jsx(rS,{})})})}),i.jsx(je,{path:"/favorites",element:i.jsx(Le,{children:i.jsx(qs,{children:i.jsx(oS,{})})})}),i.jsx(je,{path:"/contact",element:i.jsx(Le,{children:i.jsx(sS,{})})}),i.jsx(je,{path:"/stores/:storeId",element:i.jsx(Le,{children:i.jsx(uS,{})})}),i.jsx(je,{path:"/",element:i.jsx(Le,{children:i.jsx(IS,{})})}),i.jsx(je,{path:"*",element:i.jsx(c1,{})})]})})})})})})}class BS extends Jr.Component{constructor(t){super(t),this.state={error:null}}static getDerivedStateFromError(t){return{error:t}}componentDidCatch(t,n){console.error("ErrorBoundary:",t,n==null?void 0:n.componentStack)}render(){return this.state.error?i.jsxs("div",{style:{minHeight:"100vh",padding:"24px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"#f8f8f6",color:"#1e1e2e",fontFamily:"system-ui, Tahoma, sans-serif",direction:"rtl",textAlign:"center",boxSizing:"border-box"},children:[i.jsx("h1",{style:{fontSize:"1.25rem",marginBottom:12},children:"تعذّر تحميل الشاشة"}),i.jsx("p",{style:{maxWidth:420,lineHeight:1.7,marginBottom:20,color:"#5a5a6e"},children:"حدث خطأ غير متوقع. جرّب تحديث الصفحة أو المحاولة لاحقاً."}),i.jsx("button",{type:"button",onClick:()=>window.location.reload(),style:{marginTop:20,padding:"12px 24px",borderRadius:12,border:"none",background:"#f5c000",color:"#1e1e2e",fontWeight:800,cursor:"pointer"},children:"تحديث الصفحة"})]}):this.props.children}}const FS="modulepreload",DS=function(e){return"/"+e},ug={},WS=function(t,n,a){let o=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),h=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));o=Promise.allSettled(n.map(u=>{if(u=DS(u),u in ug)return;ug[u]=!0;const f=u.endsWith(".css"),y=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${y}`))return;const x=document.createElement("link");if(x.rel=f?"stylesheet":FS,f||(x.as="script"),x.crossOrigin="",x.href=u,h&&x.setAttribute("nonce",h),document.head.appendChild(x),f)return new Promise((v,_)=>{x.addEventListener("load",v),x.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${u}`)))})}))}function l(d){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=d,window.dispatchEvent(h),!h.defaultPrevented)throw d}return o.then(d=>{for(const h of d||[])h.status==="rejected"&&l(h.reason);return t().catch(l)})};function US(e={}){const{immediate:t=!1,onNeedRefresh:n,onOfflineReady:a,onRegistered:o,onRegisteredSW:l,onRegisterError:d}=e;let h,u;const f=async(x=!0)=>{await u};async function y(){if("serviceWorker"in navigator){if(h=await WS(async()=>{const{Workbox:x}=await import("./workbox-window.prod.es5-vqzQaGvo.js");return{Workbox:x}},[]).then(({Workbox:x})=>new x("/sw.js",{scope:"/",type:"classic"})).catch(x=>{d==null||d(x)}),!h)return;h.addEventListener("activated",x=>{(x.isUpdate||x.isExternal)&&window.location.reload()}),h.addEventListener("installed",x=>{x.isUpdate||a==null||a()}),h.register({immediate:t}).then(x=>{l?l("/sw.js",x):o==null||o(x)}).catch(x=>{d==null||d(x)})}}return u=y(),f}function HS(){try{return window.navigator&&window.navigator.standalone?!0:window.matchMedia&&window.matchMedia("(display-mode: standalone)").matches}catch{return!1}}function mp(){document.title=HS()?"رادار":"رادار-دليلك للمحلات القريبة"}US({immediate:!0});mp();window.addEventListener("appinstalled",mp);try{window.matchMedia("(display-mode: standalone)").addEventListener("change",mp)}catch{}const hg=document.getElementById("root");hg?Wd.createRoot(hg).render(i.jsx(Jr.StrictMode,{children:i.jsx(BS,{children:i.jsx(OS,{})})})):document.body.innerHTML='<p style="font-family:sans-serif;padding:24px;direction:rtl;">عنصر #root غير موجود في الصفحة.</p>';
