function f0(e,t){for(var n=0;n<t.length;n++){const a=t[n];if(typeof a!="string"&&!Array.isArray(a)){for(const o in a)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(a,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>a[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();var w2=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Uh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var m0={exports:{}},Cc={},g0={exports:{}},Ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ts=Symbol.for("react.element"),_2=Symbol.for("react.portal"),j2=Symbol.for("react.fragment"),k2=Symbol.for("react.strict_mode"),S2=Symbol.for("react.profiler"),N2=Symbol.for("react.provider"),C2=Symbol.for("react.context"),P2=Symbol.for("react.forward_ref"),z2=Symbol.for("react.suspense"),E2=Symbol.for("react.memo"),L2=Symbol.for("react.lazy"),Hf=Symbol.iterator;function M2(e){return e===null||typeof e!="object"?null:(e=Hf&&e[Hf]||e["@@iterator"],typeof e=="function"?e:null)}var x0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y0=Object.assign,v0={};function so(e,t,n){this.props=e,this.context=t,this.refs=v0,this.updater=n||x0}so.prototype.isReactComponent={};so.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};so.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function b0(){}b0.prototype=so.prototype;function Wh(e,t,n){this.props=e,this.context=t,this.refs=v0,this.updater=n||x0}var Hh=Wh.prototype=new b0;Hh.constructor=Wh;y0(Hh,so.prototype);Hh.isPureReactComponent=!0;var Zf=Array.isArray,w0=Object.prototype.hasOwnProperty,Zh={current:null},_0={key:!0,ref:!0,__self:!0,__source:!0};function j0(e,t,n){var a,o={},l=null,c=null;if(t!=null)for(a in t.ref!==void 0&&(c=t.ref),t.key!==void 0&&(l=""+t.key),t)w0.call(t,a)&&!_0.hasOwnProperty(a)&&(o[a]=t[a]);var h=arguments.length-2;if(h===1)o.children=n;else if(1<h){for(var u=Array(h),m=0;m<h;m++)u[m]=arguments[m+2];o.children=u}if(e&&e.defaultProps)for(a in h=e.defaultProps,h)o[a]===void 0&&(o[a]=h[a]);return{$$typeof:Ts,type:e,key:l,ref:c,props:o,_owner:Zh.current}}function T2(e,t){return{$$typeof:Ts,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function $h(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ts}function A2(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var $f=/\/+/g;function Ed(e,t){return typeof e=="object"&&e!==null&&e.key!=null?A2(""+e.key):t.toString(36)}function Ml(e,t,n,a,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var c=!1;if(e===null)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case Ts:case _2:c=!0}}if(c)return c=e,o=o(c),e=a===""?"."+Ed(c,0):a,Zf(o)?(n="",e!=null&&(n=e.replace($f,"$&/")+"/"),Ml(o,t,n,"",function(m){return m})):o!=null&&($h(o)&&(o=T2(o,n+(!o.key||c&&c.key===o.key?"":(""+o.key).replace($f,"$&/")+"/")+e)),t.push(o)),1;if(c=0,a=a===""?".":a+":",Zf(e))for(var h=0;h<e.length;h++){l=e[h];var u=a+Ed(l,h);c+=Ml(l,t,n,u,o)}else if(u=M2(e),typeof u=="function")for(e=u.call(e),h=0;!(l=e.next()).done;)l=l.value,u=a+Ed(l,h++),c+=Ml(l,t,n,u,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function dl(e,t,n){if(e==null)return e;var a=[],o=0;return Ml(e,a,"","",function(l){return t.call(n,l,o++)}),a}function I2(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Yt={current:null},Tl={transition:null},R2={ReactCurrentDispatcher:Yt,ReactCurrentBatchConfig:Tl,ReactCurrentOwner:Zh};function k0(){throw Error("act(...) is not supported in production builds of React.")}Ue.Children={map:dl,forEach:function(e,t,n){dl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return dl(e,function(){t++}),t},toArray:function(e){return dl(e,function(t){return t})||[]},only:function(e){if(!$h(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Ue.Component=so;Ue.Fragment=j2;Ue.Profiler=S2;Ue.PureComponent=Wh;Ue.StrictMode=k2;Ue.Suspense=z2;Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R2;Ue.act=k0;Ue.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=y0({},e.props),o=e.key,l=e.ref,c=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,c=Zh.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var h=e.type.defaultProps;for(u in t)w0.call(t,u)&&!_0.hasOwnProperty(u)&&(a[u]=t[u]===void 0&&h!==void 0?h[u]:t[u])}var u=arguments.length-2;if(u===1)a.children=n;else if(1<u){h=Array(u);for(var m=0;m<u;m++)h[m]=arguments[m+2];a.children=h}return{$$typeof:Ts,type:e.type,key:o,ref:l,props:a,_owner:c}};Ue.createContext=function(e){return e={$$typeof:C2,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:N2,_context:e},e.Consumer=e};Ue.createElement=j0;Ue.createFactory=function(e){var t=j0.bind(null,e);return t.type=e,t};Ue.createRef=function(){return{current:null}};Ue.forwardRef=function(e){return{$$typeof:P2,render:e}};Ue.isValidElement=$h;Ue.lazy=function(e){return{$$typeof:L2,_payload:{_status:-1,_result:e},_init:I2}};Ue.memo=function(e,t){return{$$typeof:E2,type:e,compare:t===void 0?null:t}};Ue.startTransition=function(e){var t=Tl.transition;Tl.transition={};try{e()}finally{Tl.transition=t}};Ue.unstable_act=k0;Ue.useCallback=function(e,t){return Yt.current.useCallback(e,t)};Ue.useContext=function(e){return Yt.current.useContext(e)};Ue.useDebugValue=function(){};Ue.useDeferredValue=function(e){return Yt.current.useDeferredValue(e)};Ue.useEffect=function(e,t){return Yt.current.useEffect(e,t)};Ue.useId=function(){return Yt.current.useId()};Ue.useImperativeHandle=function(e,t,n){return Yt.current.useImperativeHandle(e,t,n)};Ue.useInsertionEffect=function(e,t){return Yt.current.useInsertionEffect(e,t)};Ue.useLayoutEffect=function(e,t){return Yt.current.useLayoutEffect(e,t)};Ue.useMemo=function(e,t){return Yt.current.useMemo(e,t)};Ue.useReducer=function(e,t,n){return Yt.current.useReducer(e,t,n)};Ue.useRef=function(e){return Yt.current.useRef(e)};Ue.useState=function(e){return Yt.current.useState(e)};Ue.useSyncExternalStore=function(e,t,n){return Yt.current.useSyncExternalStore(e,t,n)};Ue.useTransition=function(){return Yt.current.useTransition()};Ue.version="18.3.1";g0.exports=Ue;var f=g0.exports;const Vi=Uh(f),O2=f0({__proto__:null,default:Vi},[f]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B2=f,F2=Symbol.for("react.element"),D2=Symbol.for("react.fragment"),U2=Object.prototype.hasOwnProperty,W2=B2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,H2={key:!0,ref:!0,__self:!0,__source:!0};function S0(e,t,n){var a,o={},l=null,c=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(c=t.ref);for(a in t)U2.call(t,a)&&!H2.hasOwnProperty(a)&&(o[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps,t)o[a]===void 0&&(o[a]=t[a]);return{$$typeof:F2,type:e,key:l,ref:c,props:o,_owner:W2.current}}Cc.Fragment=D2;Cc.jsx=S0;Cc.jsxs=S0;m0.exports=Cc;var i=m0.exports,_u={},N0={exports:{}},vn={},C0={exports:{}},P0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,ie){var q=A.length;A.push(ie);e:for(;0<q;){var ce=q-1>>>1,ne=A[ce];if(0<o(ne,ie))A[ce]=ie,A[q]=ne,q=ce;else break e}}function n(A){return A.length===0?null:A[0]}function a(A){if(A.length===0)return null;var ie=A[0],q=A.pop();if(q!==ie){A[0]=q;e:for(var ce=0,ne=A.length,ue=ne>>>1;ce<ue;){var $=2*(ce+1)-1,G=A[$],F=$+1,ge=A[F];if(0>o(G,q))F<ne&&0>o(ge,G)?(A[ce]=ge,A[F]=q,ce=F):(A[ce]=G,A[$]=q,ce=$);else if(F<ne&&0>o(ge,q))A[ce]=ge,A[F]=q,ce=F;else break e}}return ie}function o(A,ie){var q=A.sortIndex-ie.sortIndex;return q!==0?q:A.id-ie.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var c=Date,h=c.now();e.unstable_now=function(){return c.now()-h}}var u=[],m=[],g=1,x=null,v=3,b=!1,_=!1,j=!1,P=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function z(A){for(var ie=n(m);ie!==null;){if(ie.callback===null)a(m);else if(ie.startTime<=A)a(m),ie.sortIndex=ie.expirationTime,t(u,ie);else break;ie=n(m)}}function C(A){if(j=!1,z(A),!_)if(n(u)!==null)_=!0,le(I);else{var ie=n(m);ie!==null&&V(C,ie.startTime-A)}}function I(A,ie){_=!1,j&&(j=!1,N(B),B=-1),b=!0;var q=v;try{for(z(ie),x=n(u);x!==null&&(!(x.expirationTime>ie)||A&&!W());){var ce=x.callback;if(typeof ce=="function"){x.callback=null,v=x.priorityLevel;var ne=ce(x.expirationTime<=ie);ie=e.unstable_now(),typeof ne=="function"?x.callback=ne:x===n(u)&&a(u),z(ie)}else a(u);x=n(u)}if(x!==null)var ue=!0;else{var $=n(m);$!==null&&V(C,$.startTime-ie),ue=!1}return ue}finally{x=null,v=q,b=!1}}var E=!1,k=null,B=-1,M=5,T=-1;function W(){return!(e.unstable_now()-T<M)}function U(){if(k!==null){var A=e.unstable_now();T=A;var ie=!0;try{ie=k(!0,A)}finally{ie?se():(E=!1,k=null)}}else E=!1}var se;if(typeof w=="function")se=function(){w(U)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,he=de.port2;de.port1.onmessage=U,se=function(){he.postMessage(null)}}else se=function(){P(U,0)};function le(A){k=A,E||(E=!0,se())}function V(A,ie){B=P(function(){A(e.unstable_now())},ie)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){_||b||(_=!0,le(I))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(A){switch(v){case 1:case 2:case 3:var ie=3;break;default:ie=v}var q=v;v=ie;try{return A()}finally{v=q}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,ie){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var q=v;v=A;try{return ie()}finally{v=q}},e.unstable_scheduleCallback=function(A,ie,q){var ce=e.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ce+q:ce):q=ce,A){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=q+ne,A={id:g++,callback:ie,priorityLevel:A,startTime:q,expirationTime:ne,sortIndex:-1},q>ce?(A.sortIndex=q,t(m,A),n(u)===null&&A===n(m)&&(j?(N(B),B=-1):j=!0,V(C,q-ce))):(A.sortIndex=ne,t(u,A),_||b||(_=!0,le(I))),A},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(A){var ie=v;return function(){var q=v;v=ie;try{return A.apply(this,arguments)}finally{v=q}}}})(P0);C0.exports=P0;var Z2=C0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $2=f,yn=Z2;function me(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var z0=new Set,ss={};function oa(e,t){Ga(e,t),Ga(e+"Capture",t)}function Ga(e,t){for(ss[e]=t,e=0;e<t.length;e++)z0.add(t[e])}var Fr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ju=Object.prototype.hasOwnProperty,q2=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qf={},Vf={};function V2(e){return ju.call(Vf,e)?!0:ju.call(qf,e)?!1:q2.test(e)?Vf[e]=!0:(qf[e]=!0,!1)}function G2(e,t,n,a){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function K2(e,t,n,a){if(t===null||typeof t>"u"||G2(e,t,n,a))return!0;if(a)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Qt(e,t,n,a,o,l,c){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=c}var At={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){At[e]=new Qt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];At[t]=new Qt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){At[e]=new Qt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){At[e]=new Qt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){At[e]=new Qt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){At[e]=new Qt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){At[e]=new Qt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){At[e]=new Qt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){At[e]=new Qt(e,5,!1,e.toLowerCase(),null,!1,!1)});var qh=/[\-:]([a-z])/g;function Vh(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(qh,Vh);At[t]=new Qt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(qh,Vh);At[t]=new Qt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(qh,Vh);At[t]=new Qt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){At[e]=new Qt(e,1,!1,e.toLowerCase(),null,!1,!1)});At.xlinkHref=new Qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){At[e]=new Qt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Gh(e,t,n,a){var o=At.hasOwnProperty(t)?At[t]:null;(o!==null?o.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(K2(t,n,o,a)&&(n=null),a||o===null?V2(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,a=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,a?e.setAttributeNS(a,t,n):e.setAttribute(t,n))))}var Hr=$2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ul=Symbol.for("react.element"),Na=Symbol.for("react.portal"),Ca=Symbol.for("react.fragment"),Kh=Symbol.for("react.strict_mode"),ku=Symbol.for("react.profiler"),E0=Symbol.for("react.provider"),L0=Symbol.for("react.context"),Yh=Symbol.for("react.forward_ref"),Su=Symbol.for("react.suspense"),Nu=Symbol.for("react.suspense_list"),Qh=Symbol.for("react.memo"),ti=Symbol.for("react.lazy"),M0=Symbol.for("react.offscreen"),Gf=Symbol.iterator;function Po(e){return e===null||typeof e!="object"?null:(e=Gf&&e[Gf]||e["@@iterator"],typeof e=="function"?e:null)}var ft=Object.assign,Ld;function Zo(e){if(Ld===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ld=t&&t[1]||""}return`
`+Ld+e}var Md=!1;function Td(e,t){if(!e||Md)return"";Md=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(m){var a=m}Reflect.construct(e,[],t)}else{try{t.call()}catch(m){a=m}e.call(t.prototype)}else{try{throw Error()}catch(m){a=m}e()}}catch(m){if(m&&a&&typeof m.stack=="string"){for(var o=m.stack.split(`
`),l=a.stack.split(`
`),c=o.length-1,h=l.length-1;1<=c&&0<=h&&o[c]!==l[h];)h--;for(;1<=c&&0<=h;c--,h--)if(o[c]!==l[h]){if(c!==1||h!==1)do if(c--,h--,0>h||o[c]!==l[h]){var u=`
`+o[c].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=c&&0<=h);break}}}finally{Md=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Zo(e):""}function Y2(e){switch(e.tag){case 5:return Zo(e.type);case 16:return Zo("Lazy");case 13:return Zo("Suspense");case 19:return Zo("SuspenseList");case 0:case 2:case 15:return e=Td(e.type,!1),e;case 11:return e=Td(e.type.render,!1),e;case 1:return e=Td(e.type,!0),e;default:return""}}function Cu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ca:return"Fragment";case Na:return"Portal";case ku:return"Profiler";case Kh:return"StrictMode";case Su:return"Suspense";case Nu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case L0:return(e.displayName||"Context")+".Consumer";case E0:return(e._context.displayName||"Context")+".Provider";case Yh:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Qh:return t=e.displayName||null,t!==null?t:Cu(e.type)||"Memo";case ti:t=e._payload,e=e._init;try{return Cu(e(t))}catch{}}return null}function Q2(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Cu(t);case 8:return t===Kh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function xi(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function T0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function J2(e){var t=T0(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(c){a=""+c,l.call(this,c)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(c){a=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function hl(e){e._valueTracker||(e._valueTracker=J2(e))}function A0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=T0(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Gl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Pu(e,t){var n=t.checked;return ft({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Kf(e,t){var n=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;n=xi(t.value!=null?t.value:n),e._wrapperState={initialChecked:a,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function I0(e,t){t=t.checked,t!=null&&Gh(e,"checked",t,!1)}function zu(e,t){I0(e,t);var n=xi(t.value),a=t.type;if(n!=null)a==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Eu(e,t.type,n):t.hasOwnProperty("defaultValue")&&Eu(e,t.type,xi(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Yf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Eu(e,t,n){(t!=="number"||Gl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var $o=Array.isArray;function Fa(e,t,n,a){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&a&&(e[n].defaultSelected=!0)}else{for(n=""+xi(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,a&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Lu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(me(91));return ft({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Qf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(me(92));if($o(n)){if(1<n.length)throw Error(me(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:xi(n)}}function R0(e,t){var n=xi(t.value),a=xi(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),a!=null&&(e.defaultValue=""+a)}function Jf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function O0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Mu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?O0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var pl,B0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,a,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,a,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(pl=pl||document.createElement("div"),pl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=pl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ls(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Yo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},X2=["Webkit","ms","Moz","O"];Object.keys(Yo).forEach(function(e){X2.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Yo[t]=Yo[e]})});function F0(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Yo.hasOwnProperty(e)&&Yo[e]?(""+t).trim():t+"px"}function D0(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var a=n.indexOf("--")===0,o=F0(n,t[n],a);n==="float"&&(n="cssFloat"),a?e.setProperty(n,o):e[n]=o}}var eb=ft({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Tu(e,t){if(t){if(eb[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(me(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(me(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(me(61))}if(t.style!=null&&typeof t.style!="object")throw Error(me(62))}}function Au(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Iu=null;function Jh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ru=null,Da=null,Ua=null;function Xf(e){if(e=Rs(e)){if(typeof Ru!="function")throw Error(me(280));var t=e.stateNode;t&&(t=Mc(t),Ru(e.stateNode,e.type,t))}}function U0(e){Da?Ua?Ua.push(e):Ua=[e]:Da=e}function W0(){if(Da){var e=Da,t=Ua;if(Ua=Da=null,Xf(e),t)for(e=0;e<t.length;e++)Xf(t[e])}}function H0(e,t){return e(t)}function Z0(){}var Ad=!1;function $0(e,t,n){if(Ad)return e(t,n);Ad=!0;try{return H0(e,t,n)}finally{Ad=!1,(Da!==null||Ua!==null)&&(Z0(),W0())}}function cs(e,t){var n=e.stateNode;if(n===null)return null;var a=Mc(n);if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(me(231,t,typeof n));return n}var Ou=!1;if(Fr)try{var zo={};Object.defineProperty(zo,"passive",{get:function(){Ou=!0}}),window.addEventListener("test",zo,zo),window.removeEventListener("test",zo,zo)}catch{Ou=!1}function tb(e,t,n,a,o,l,c,h,u){var m=Array.prototype.slice.call(arguments,3);try{t.apply(n,m)}catch(g){this.onError(g)}}var Qo=!1,Kl=null,Yl=!1,Bu=null,nb={onError:function(e){Qo=!0,Kl=e}};function rb(e,t,n,a,o,l,c,h,u){Qo=!1,Kl=null,tb.apply(nb,arguments)}function ib(e,t,n,a,o,l,c,h,u){if(rb.apply(this,arguments),Qo){if(Qo){var m=Kl;Qo=!1,Kl=null}else throw Error(me(198));Yl||(Yl=!0,Bu=m)}}function sa(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function q0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function em(e){if(sa(e)!==e)throw Error(me(188))}function ab(e){var t=e.alternate;if(!t){if(t=sa(e),t===null)throw Error(me(188));return t!==e?null:e}for(var n=e,a=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(a=o.return,a!==null){n=a;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return em(o),e;if(l===a)return em(o),t;l=l.sibling}throw Error(me(188))}if(n.return!==a.return)n=o,a=l;else{for(var c=!1,h=o.child;h;){if(h===n){c=!0,n=o,a=l;break}if(h===a){c=!0,a=o,n=l;break}h=h.sibling}if(!c){for(h=l.child;h;){if(h===n){c=!0,n=l,a=o;break}if(h===a){c=!0,a=l,n=o;break}h=h.sibling}if(!c)throw Error(me(189))}}if(n.alternate!==a)throw Error(me(190))}if(n.tag!==3)throw Error(me(188));return n.stateNode.current===n?e:t}function V0(e){return e=ab(e),e!==null?G0(e):null}function G0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=G0(e);if(t!==null)return t;e=e.sibling}return null}var K0=yn.unstable_scheduleCallback,tm=yn.unstable_cancelCallback,ob=yn.unstable_shouldYield,sb=yn.unstable_requestPaint,xt=yn.unstable_now,lb=yn.unstable_getCurrentPriorityLevel,Xh=yn.unstable_ImmediatePriority,Y0=yn.unstable_UserBlockingPriority,Ql=yn.unstable_NormalPriority,cb=yn.unstable_LowPriority,Q0=yn.unstable_IdlePriority,Pc=null,or=null;function db(e){if(or&&typeof or.onCommitFiberRoot=="function")try{or.onCommitFiberRoot(Pc,e,void 0,(e.current.flags&128)===128)}catch{}}var qn=Math.clz32?Math.clz32:pb,ub=Math.log,hb=Math.LN2;function pb(e){return e>>>=0,e===0?32:31-(ub(e)/hb|0)|0}var fl=64,ml=4194304;function qo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Jl(e,t){var n=e.pendingLanes;if(n===0)return 0;var a=0,o=e.suspendedLanes,l=e.pingedLanes,c=n&268435455;if(c!==0){var h=c&~o;h!==0?a=qo(h):(l&=c,l!==0&&(a=qo(l)))}else c=n&~o,c!==0?a=qo(c):l!==0&&(a=qo(l));if(a===0)return 0;if(t!==0&&t!==a&&!(t&o)&&(o=a&-a,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(a&4&&(a|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)n=31-qn(t),o=1<<n,a|=e[n],t&=~o;return a}function fb(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mb(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var c=31-qn(l),h=1<<c,u=o[c];u===-1?(!(h&n)||h&a)&&(o[c]=fb(h,t)):u<=t&&(e.expiredLanes|=h),l&=~h}}function Fu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function J0(){var e=fl;return fl<<=1,!(fl&4194240)&&(fl=64),e}function Id(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function As(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-qn(t),e[t]=n}function gb(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-qn(n),l=1<<o;t[o]=0,a[o]=-1,e[o]=-1,n&=~l}}function ep(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-qn(n),o=1<<a;o&t|e[a]&t&&(e[a]|=t),n&=~o}}var tt=0;function X0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ex,tp,tx,nx,rx,Du=!1,gl=[],li=null,ci=null,di=null,ds=new Map,us=new Map,ri=[],xb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function nm(e,t){switch(e){case"focusin":case"focusout":li=null;break;case"dragenter":case"dragleave":ci=null;break;case"mouseover":case"mouseout":di=null;break;case"pointerover":case"pointerout":ds.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":us.delete(t.pointerId)}}function Eo(e,t,n,a,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:l,targetContainers:[o]},t!==null&&(t=Rs(t),t!==null&&tp(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function yb(e,t,n,a,o){switch(t){case"focusin":return li=Eo(li,e,t,n,a,o),!0;case"dragenter":return ci=Eo(ci,e,t,n,a,o),!0;case"mouseover":return di=Eo(di,e,t,n,a,o),!0;case"pointerover":var l=o.pointerId;return ds.set(l,Eo(ds.get(l)||null,e,t,n,a,o)),!0;case"gotpointercapture":return l=o.pointerId,us.set(l,Eo(us.get(l)||null,e,t,n,a,o)),!0}return!1}function ix(e){var t=Bi(e.target);if(t!==null){var n=sa(t);if(n!==null){if(t=n.tag,t===13){if(t=q0(n),t!==null){e.blockedOn=t,rx(e.priority,function(){tx(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Al(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Uu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Iu=a,n.target.dispatchEvent(a),Iu=null}else return t=Rs(n),t!==null&&tp(t),e.blockedOn=n,!1;t.shift()}return!0}function rm(e,t,n){Al(e)&&n.delete(t)}function vb(){Du=!1,li!==null&&Al(li)&&(li=null),ci!==null&&Al(ci)&&(ci=null),di!==null&&Al(di)&&(di=null),ds.forEach(rm),us.forEach(rm)}function Lo(e,t){e.blockedOn===t&&(e.blockedOn=null,Du||(Du=!0,yn.unstable_scheduleCallback(yn.unstable_NormalPriority,vb)))}function hs(e){function t(o){return Lo(o,e)}if(0<gl.length){Lo(gl[0],e);for(var n=1;n<gl.length;n++){var a=gl[n];a.blockedOn===e&&(a.blockedOn=null)}}for(li!==null&&Lo(li,e),ci!==null&&Lo(ci,e),di!==null&&Lo(di,e),ds.forEach(t),us.forEach(t),n=0;n<ri.length;n++)a=ri[n],a.blockedOn===e&&(a.blockedOn=null);for(;0<ri.length&&(n=ri[0],n.blockedOn===null);)ix(n),n.blockedOn===null&&ri.shift()}var Wa=Hr.ReactCurrentBatchConfig,Xl=!0;function bb(e,t,n,a){var o=tt,l=Wa.transition;Wa.transition=null;try{tt=1,np(e,t,n,a)}finally{tt=o,Wa.transition=l}}function wb(e,t,n,a){var o=tt,l=Wa.transition;Wa.transition=null;try{tt=4,np(e,t,n,a)}finally{tt=o,Wa.transition=l}}function np(e,t,n,a){if(Xl){var o=Uu(e,t,n,a);if(o===null)$d(e,t,a,ec,n),nm(e,a);else if(yb(o,e,t,n,a))a.stopPropagation();else if(nm(e,a),t&4&&-1<xb.indexOf(e)){for(;o!==null;){var l=Rs(o);if(l!==null&&ex(l),l=Uu(e,t,n,a),l===null&&$d(e,t,a,ec,n),l===o)break;o=l}o!==null&&a.stopPropagation()}else $d(e,t,a,null,n)}}var ec=null;function Uu(e,t,n,a){if(ec=null,e=Jh(a),e=Bi(e),e!==null)if(t=sa(e),t===null)e=null;else if(n=t.tag,n===13){if(e=q0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ec=e,null}function ax(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lb()){case Xh:return 1;case Y0:return 4;case Ql:case cb:return 16;case Q0:return 536870912;default:return 16}default:return 16}}var ai=null,rp=null,Il=null;function ox(){if(Il)return Il;var e,t=rp,n=t.length,a,o="value"in ai?ai.value:ai.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var c=n-e;for(a=1;a<=c&&t[n-a]===o[l-a];a++);return Il=o.slice(e,1<a?1-a:void 0)}function Rl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xl(){return!0}function im(){return!1}function bn(e){function t(n,a,o,l,c){this._reactName=n,this._targetInst=o,this.type=a,this.nativeEvent=l,this.target=c,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(n=e[h],this[h]=n?n(l):l[h]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?xl:im,this.isPropagationStopped=im,this}return ft(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xl)},persist:function(){},isPersistent:xl}),t}var lo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ip=bn(lo),Is=ft({},lo,{view:0,detail:0}),_b=bn(Is),Rd,Od,Mo,zc=ft({},Is,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ap,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Mo&&(Mo&&e.type==="mousemove"?(Rd=e.screenX-Mo.screenX,Od=e.screenY-Mo.screenY):Od=Rd=0,Mo=e),Rd)},movementY:function(e){return"movementY"in e?e.movementY:Od}}),am=bn(zc),jb=ft({},zc,{dataTransfer:0}),kb=bn(jb),Sb=ft({},Is,{relatedTarget:0}),Bd=bn(Sb),Nb=ft({},lo,{animationName:0,elapsedTime:0,pseudoElement:0}),Cb=bn(Nb),Pb=ft({},lo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zb=bn(Pb),Eb=ft({},lo,{data:0}),om=bn(Eb),Lb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ab(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Tb[e])?!!t[e]:!1}function ap(){return Ab}var Ib=ft({},Is,{key:function(e){if(e.key){var t=Lb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Rl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Mb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ap,charCode:function(e){return e.type==="keypress"?Rl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Rl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Rb=bn(Ib),Ob=ft({},zc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sm=bn(Ob),Bb=ft({},Is,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ap}),Fb=bn(Bb),Db=ft({},lo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ub=bn(Db),Wb=ft({},zc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hb=bn(Wb),Zb=[9,13,27,32],op=Fr&&"CompositionEvent"in window,Jo=null;Fr&&"documentMode"in document&&(Jo=document.documentMode);var $b=Fr&&"TextEvent"in window&&!Jo,sx=Fr&&(!op||Jo&&8<Jo&&11>=Jo),lm=" ",cm=!1;function lx(e,t){switch(e){case"keyup":return Zb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cx(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pa=!1;function qb(e,t){switch(e){case"compositionend":return cx(t);case"keypress":return t.which!==32?null:(cm=!0,lm);case"textInput":return e=t.data,e===lm&&cm?null:e;default:return null}}function Vb(e,t){if(Pa)return e==="compositionend"||!op&&lx(e,t)?(e=ox(),Il=rp=ai=null,Pa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return sx&&t.locale!=="ko"?null:t.data;default:return null}}var Gb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Gb[e.type]:t==="textarea"}function dx(e,t,n,a){U0(a),t=tc(t,"onChange"),0<t.length&&(n=new ip("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Xo=null,ps=null;function Kb(e){wx(e,0)}function Ec(e){var t=La(e);if(A0(t))return e}function Yb(e,t){if(e==="change")return t}var ux=!1;if(Fr){var Fd;if(Fr){var Dd="oninput"in document;if(!Dd){var um=document.createElement("div");um.setAttribute("oninput","return;"),Dd=typeof um.oninput=="function"}Fd=Dd}else Fd=!1;ux=Fd&&(!document.documentMode||9<document.documentMode)}function hm(){Xo&&(Xo.detachEvent("onpropertychange",hx),ps=Xo=null)}function hx(e){if(e.propertyName==="value"&&Ec(ps)){var t=[];dx(t,ps,e,Jh(e)),$0(Kb,t)}}function Qb(e,t,n){e==="focusin"?(hm(),Xo=t,ps=n,Xo.attachEvent("onpropertychange",hx)):e==="focusout"&&hm()}function Jb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ec(ps)}function Xb(e,t){if(e==="click")return Ec(t)}function ew(e,t){if(e==="input"||e==="change")return Ec(t)}function tw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Kn=typeof Object.is=="function"?Object.is:tw;function fs(e,t){if(Kn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var o=n[a];if(!ju.call(t,o)||!Kn(e[o],t[o]))return!1}return!0}function pm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fm(e,t){var n=pm(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=pm(n)}}function px(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?px(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function fx(){for(var e=window,t=Gl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gl(e.document)}return t}function sp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function nw(e){var t=fx(),n=e.focusedElem,a=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&px(n.ownerDocument.documentElement,n)){if(a!==null&&sp(n)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(a.start,o);a=a.end===void 0?l:Math.min(a.end,o),!e.extend&&l>a&&(o=a,a=l,l=o),o=fm(n,l);var c=fm(n,a);o&&c&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==c.node||e.focusOffset!==c.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>a?(e.addRange(t),e.extend(c.node,c.offset)):(t.setEnd(c.node,c.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var rw=Fr&&"documentMode"in document&&11>=document.documentMode,za=null,Wu=null,es=null,Hu=!1;function mm(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hu||za==null||za!==Gl(a)||(a=za,"selectionStart"in a&&sp(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),es&&fs(es,a)||(es=a,a=tc(Wu,"onSelect"),0<a.length&&(t=new ip("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=za)))}function yl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ea={animationend:yl("Animation","AnimationEnd"),animationiteration:yl("Animation","AnimationIteration"),animationstart:yl("Animation","AnimationStart"),transitionend:yl("Transition","TransitionEnd")},Ud={},mx={};Fr&&(mx=document.createElement("div").style,"AnimationEvent"in window||(delete Ea.animationend.animation,delete Ea.animationiteration.animation,delete Ea.animationstart.animation),"TransitionEvent"in window||delete Ea.transitionend.transition);function Lc(e){if(Ud[e])return Ud[e];if(!Ea[e])return e;var t=Ea[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in mx)return Ud[e]=t[n];return e}var gx=Lc("animationend"),xx=Lc("animationiteration"),yx=Lc("animationstart"),vx=Lc("transitionend"),bx=new Map,gm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _i(e,t){bx.set(e,t),oa(t,[e])}for(var Wd=0;Wd<gm.length;Wd++){var Hd=gm[Wd],iw=Hd.toLowerCase(),aw=Hd[0].toUpperCase()+Hd.slice(1);_i(iw,"on"+aw)}_i(gx,"onAnimationEnd");_i(xx,"onAnimationIteration");_i(yx,"onAnimationStart");_i("dblclick","onDoubleClick");_i("focusin","onFocus");_i("focusout","onBlur");_i(vx,"onTransitionEnd");Ga("onMouseEnter",["mouseout","mouseover"]);Ga("onMouseLeave",["mouseout","mouseover"]);Ga("onPointerEnter",["pointerout","pointerover"]);Ga("onPointerLeave",["pointerout","pointerover"]);oa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));oa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));oa("onBeforeInput",["compositionend","keypress","textInput","paste"]);oa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));oa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));oa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ow=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vo));function xm(e,t,n){var a=e.type||"unknown-event";e.currentTarget=n,ib(a,t,void 0,e),e.currentTarget=null}function wx(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],o=a.event;a=a.listeners;e:{var l=void 0;if(t)for(var c=a.length-1;0<=c;c--){var h=a[c],u=h.instance,m=h.currentTarget;if(h=h.listener,u!==l&&o.isPropagationStopped())break e;xm(o,h,m),l=u}else for(c=0;c<a.length;c++){if(h=a[c],u=h.instance,m=h.currentTarget,h=h.listener,u!==l&&o.isPropagationStopped())break e;xm(o,h,m),l=u}}}if(Yl)throw e=Bu,Yl=!1,Bu=null,e}function st(e,t){var n=t[Gu];n===void 0&&(n=t[Gu]=new Set);var a=e+"__bubble";n.has(a)||(_x(t,e,2,!1),n.add(a))}function Zd(e,t,n){var a=0;t&&(a|=4),_x(n,e,a,t)}var vl="_reactListening"+Math.random().toString(36).slice(2);function ms(e){if(!e[vl]){e[vl]=!0,z0.forEach(function(n){n!=="selectionchange"&&(ow.has(n)||Zd(n,!1,e),Zd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[vl]||(t[vl]=!0,Zd("selectionchange",!1,t))}}function _x(e,t,n,a){switch(ax(t)){case 1:var o=bb;break;case 4:o=wb;break;default:o=np}n=o.bind(null,t,n,e),o=void 0,!Ou||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),a?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function $d(e,t,n,a,o){var l=a;if(!(t&1)&&!(t&2)&&a!==null)e:for(;;){if(a===null)return;var c=a.tag;if(c===3||c===4){var h=a.stateNode.containerInfo;if(h===o||h.nodeType===8&&h.parentNode===o)break;if(c===4)for(c=a.return;c!==null;){var u=c.tag;if((u===3||u===4)&&(u=c.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;c=c.return}for(;h!==null;){if(c=Bi(h),c===null)return;if(u=c.tag,u===5||u===6){a=l=c;continue e}h=h.parentNode}}a=a.return}$0(function(){var m=l,g=Jh(n),x=[];e:{var v=bx.get(e);if(v!==void 0){var b=ip,_=e;switch(e){case"keypress":if(Rl(n)===0)break e;case"keydown":case"keyup":b=Rb;break;case"focusin":_="focus",b=Bd;break;case"focusout":_="blur",b=Bd;break;case"beforeblur":case"afterblur":b=Bd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=am;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=kb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=Fb;break;case gx:case xx:case yx:b=Cb;break;case vx:b=Ub;break;case"scroll":b=_b;break;case"wheel":b=Hb;break;case"copy":case"cut":case"paste":b=zb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=sm}var j=(t&4)!==0,P=!j&&e==="scroll",N=j?v!==null?v+"Capture":null:v;j=[];for(var w=m,z;w!==null;){z=w;var C=z.stateNode;if(z.tag===5&&C!==null&&(z=C,N!==null&&(C=cs(w,N),C!=null&&j.push(gs(w,C,z)))),P)break;w=w.return}0<j.length&&(v=new b(v,_,null,n,g),x.push({event:v,listeners:j}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",v&&n!==Iu&&(_=n.relatedTarget||n.fromElement)&&(Bi(_)||_[Dr]))break e;if((b||v)&&(v=g.window===g?g:(v=g.ownerDocument)?v.defaultView||v.parentWindow:window,b?(_=n.relatedTarget||n.toElement,b=m,_=_?Bi(_):null,_!==null&&(P=sa(_),_!==P||_.tag!==5&&_.tag!==6)&&(_=null)):(b=null,_=m),b!==_)){if(j=am,C="onMouseLeave",N="onMouseEnter",w="mouse",(e==="pointerout"||e==="pointerover")&&(j=sm,C="onPointerLeave",N="onPointerEnter",w="pointer"),P=b==null?v:La(b),z=_==null?v:La(_),v=new j(C,w+"leave",b,n,g),v.target=P,v.relatedTarget=z,C=null,Bi(g)===m&&(j=new j(N,w+"enter",_,n,g),j.target=z,j.relatedTarget=P,C=j),P=C,b&&_)t:{for(j=b,N=_,w=0,z=j;z;z=wa(z))w++;for(z=0,C=N;C;C=wa(C))z++;for(;0<w-z;)j=wa(j),w--;for(;0<z-w;)N=wa(N),z--;for(;w--;){if(j===N||N!==null&&j===N.alternate)break t;j=wa(j),N=wa(N)}j=null}else j=null;b!==null&&ym(x,v,b,j,!1),_!==null&&P!==null&&ym(x,P,_,j,!0)}}e:{if(v=m?La(m):window,b=v.nodeName&&v.nodeName.toLowerCase(),b==="select"||b==="input"&&v.type==="file")var I=Yb;else if(dm(v))if(ux)I=ew;else{I=Jb;var E=Qb}else(b=v.nodeName)&&b.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(I=Xb);if(I&&(I=I(e,m))){dx(x,I,n,g);break e}E&&E(e,v,m),e==="focusout"&&(E=v._wrapperState)&&E.controlled&&v.type==="number"&&Eu(v,"number",v.value)}switch(E=m?La(m):window,e){case"focusin":(dm(E)||E.contentEditable==="true")&&(za=E,Wu=m,es=null);break;case"focusout":es=Wu=za=null;break;case"mousedown":Hu=!0;break;case"contextmenu":case"mouseup":case"dragend":Hu=!1,mm(x,n,g);break;case"selectionchange":if(rw)break;case"keydown":case"keyup":mm(x,n,g)}var k;if(op)e:{switch(e){case"compositionstart":var B="onCompositionStart";break e;case"compositionend":B="onCompositionEnd";break e;case"compositionupdate":B="onCompositionUpdate";break e}B=void 0}else Pa?lx(e,n)&&(B="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(B="onCompositionStart");B&&(sx&&n.locale!=="ko"&&(Pa||B!=="onCompositionStart"?B==="onCompositionEnd"&&Pa&&(k=ox()):(ai=g,rp="value"in ai?ai.value:ai.textContent,Pa=!0)),E=tc(m,B),0<E.length&&(B=new om(B,e,null,n,g),x.push({event:B,listeners:E}),k?B.data=k:(k=cx(n),k!==null&&(B.data=k)))),(k=$b?qb(e,n):Vb(e,n))&&(m=tc(m,"onBeforeInput"),0<m.length&&(g=new om("onBeforeInput","beforeinput",null,n,g),x.push({event:g,listeners:m}),g.data=k))}wx(x,t)})}function gs(e,t,n){return{instance:e,listener:t,currentTarget:n}}function tc(e,t){for(var n=t+"Capture",a=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=cs(e,n),l!=null&&a.unshift(gs(e,l,o)),l=cs(e,t),l!=null&&a.push(gs(e,l,o))),e=e.return}return a}function wa(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ym(e,t,n,a,o){for(var l=t._reactName,c=[];n!==null&&n!==a;){var h=n,u=h.alternate,m=h.stateNode;if(u!==null&&u===a)break;h.tag===5&&m!==null&&(h=m,o?(u=cs(n,l),u!=null&&c.unshift(gs(n,u,h))):o||(u=cs(n,l),u!=null&&c.push(gs(n,u,h)))),n=n.return}c.length!==0&&e.push({event:t,listeners:c})}var sw=/\r\n?/g,lw=/\u0000|\uFFFD/g;function vm(e){return(typeof e=="string"?e:""+e).replace(sw,`
`).replace(lw,"")}function bl(e,t,n){if(t=vm(t),vm(e)!==t&&n)throw Error(me(425))}function nc(){}var Zu=null,$u=null;function qu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Vu=typeof setTimeout=="function"?setTimeout:void 0,cw=typeof clearTimeout=="function"?clearTimeout:void 0,bm=typeof Promise=="function"?Promise:void 0,dw=typeof queueMicrotask=="function"?queueMicrotask:typeof bm<"u"?function(e){return bm.resolve(null).then(e).catch(uw)}:Vu;function uw(e){setTimeout(function(){throw e})}function qd(e,t){var n=t,a=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(a===0){e.removeChild(o),hs(t);return}a--}else n!=="$"&&n!=="$?"&&n!=="$!"||a++;n=o}while(n);hs(t)}function ui(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function wm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var co=Math.random().toString(36).slice(2),ar="__reactFiber$"+co,xs="__reactProps$"+co,Dr="__reactContainer$"+co,Gu="__reactEvents$"+co,hw="__reactListeners$"+co,pw="__reactHandles$"+co;function Bi(e){var t=e[ar];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Dr]||n[ar]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=wm(e);e!==null;){if(n=e[ar])return n;e=wm(e)}return t}e=n,n=e.parentNode}return null}function Rs(e){return e=e[ar]||e[Dr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function La(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(me(33))}function Mc(e){return e[xs]||null}var Ku=[],Ma=-1;function ji(e){return{current:e}}function lt(e){0>Ma||(e.current=Ku[Ma],Ku[Ma]=null,Ma--)}function it(e,t){Ma++,Ku[Ma]=e.current,e.current=t}var yi={},Wt=ji(yi),on=ji(!1),Gi=yi;function Ka(e,t){var n=e.type.contextTypes;if(!n)return yi;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function sn(e){return e=e.childContextTypes,e!=null}function rc(){lt(on),lt(Wt)}function _m(e,t,n){if(Wt.current!==yi)throw Error(me(168));it(Wt,t),it(on,n)}function jx(e,t,n){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return n;a=a.getChildContext();for(var o in a)if(!(o in t))throw Error(me(108,Q2(e)||"Unknown",o));return ft({},n,a)}function ic(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yi,Gi=Wt.current,it(Wt,e),it(on,on.current),!0}function jm(e,t,n){var a=e.stateNode;if(!a)throw Error(me(169));n?(e=jx(e,t,Gi),a.__reactInternalMemoizedMergedChildContext=e,lt(on),lt(Wt),it(Wt,e)):lt(on),it(on,n)}var Lr=null,Tc=!1,Vd=!1;function kx(e){Lr===null?Lr=[e]:Lr.push(e)}function fw(e){Tc=!0,kx(e)}function ki(){if(!Vd&&Lr!==null){Vd=!0;var e=0,t=tt;try{var n=Lr;for(tt=1;e<n.length;e++){var a=n[e];do a=a(!0);while(a!==null)}Lr=null,Tc=!1}catch(o){throw Lr!==null&&(Lr=Lr.slice(e+1)),K0(Xh,ki),o}finally{tt=t,Vd=!1}}return null}var Ta=[],Aa=0,ac=null,oc=0,Cn=[],Pn=0,Ki=null,Mr=1,Tr="";function Ai(e,t){Ta[Aa++]=oc,Ta[Aa++]=ac,ac=e,oc=t}function Sx(e,t,n){Cn[Pn++]=Mr,Cn[Pn++]=Tr,Cn[Pn++]=Ki,Ki=e;var a=Mr;e=Tr;var o=32-qn(a)-1;a&=~(1<<o),n+=1;var l=32-qn(t)+o;if(30<l){var c=o-o%5;l=(a&(1<<c)-1).toString(32),a>>=c,o-=c,Mr=1<<32-qn(t)+o|n<<o|a,Tr=l+e}else Mr=1<<l|n<<o|a,Tr=e}function lp(e){e.return!==null&&(Ai(e,1),Sx(e,1,0))}function cp(e){for(;e===ac;)ac=Ta[--Aa],Ta[Aa]=null,oc=Ta[--Aa],Ta[Aa]=null;for(;e===Ki;)Ki=Cn[--Pn],Cn[Pn]=null,Tr=Cn[--Pn],Cn[Pn]=null,Mr=Cn[--Pn],Cn[Pn]=null}var xn=null,gn=null,ut=!1,$n=null;function Nx(e,t){var n=zn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function km(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,xn=e,gn=ui(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,xn=e,gn=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ki!==null?{id:Mr,overflow:Tr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=zn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,xn=e,gn=null,!0):!1;default:return!1}}function Yu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Qu(e){if(ut){var t=gn;if(t){var n=t;if(!km(e,t)){if(Yu(e))throw Error(me(418));t=ui(n.nextSibling);var a=xn;t&&km(e,t)?Nx(a,n):(e.flags=e.flags&-4097|2,ut=!1,xn=e)}}else{if(Yu(e))throw Error(me(418));e.flags=e.flags&-4097|2,ut=!1,xn=e}}}function Sm(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xn=e}function wl(e){if(e!==xn)return!1;if(!ut)return Sm(e),ut=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!qu(e.type,e.memoizedProps)),t&&(t=gn)){if(Yu(e))throw Cx(),Error(me(418));for(;t;)Nx(e,t),t=ui(t.nextSibling)}if(Sm(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(me(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){gn=ui(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}gn=null}}else gn=xn?ui(e.stateNode.nextSibling):null;return!0}function Cx(){for(var e=gn;e;)e=ui(e.nextSibling)}function Ya(){gn=xn=null,ut=!1}function dp(e){$n===null?$n=[e]:$n.push(e)}var mw=Hr.ReactCurrentBatchConfig;function To(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(me(309));var a=n.stateNode}if(!a)throw Error(me(147,e));var o=a,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(c){var h=o.refs;c===null?delete h[l]:h[l]=c},t._stringRef=l,t)}if(typeof e!="string")throw Error(me(284));if(!n._owner)throw Error(me(290,e))}return e}function _l(e,t){throw e=Object.prototype.toString.call(t),Error(me(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Nm(e){var t=e._init;return t(e._payload)}function Px(e){function t(N,w){if(e){var z=N.deletions;z===null?(N.deletions=[w],N.flags|=16):z.push(w)}}function n(N,w){if(!e)return null;for(;w!==null;)t(N,w),w=w.sibling;return null}function a(N,w){for(N=new Map;w!==null;)w.key!==null?N.set(w.key,w):N.set(w.index,w),w=w.sibling;return N}function o(N,w){return N=mi(N,w),N.index=0,N.sibling=null,N}function l(N,w,z){return N.index=z,e?(z=N.alternate,z!==null?(z=z.index,z<w?(N.flags|=2,w):z):(N.flags|=2,w)):(N.flags|=1048576,w)}function c(N){return e&&N.alternate===null&&(N.flags|=2),N}function h(N,w,z,C){return w===null||w.tag!==6?(w=eu(z,N.mode,C),w.return=N,w):(w=o(w,z),w.return=N,w)}function u(N,w,z,C){var I=z.type;return I===Ca?g(N,w,z.props.children,C,z.key):w!==null&&(w.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===ti&&Nm(I)===w.type)?(C=o(w,z.props),C.ref=To(N,w,z),C.return=N,C):(C=Hl(z.type,z.key,z.props,null,N.mode,C),C.ref=To(N,w,z),C.return=N,C)}function m(N,w,z,C){return w===null||w.tag!==4||w.stateNode.containerInfo!==z.containerInfo||w.stateNode.implementation!==z.implementation?(w=tu(z,N.mode,C),w.return=N,w):(w=o(w,z.children||[]),w.return=N,w)}function g(N,w,z,C,I){return w===null||w.tag!==7?(w=Zi(z,N.mode,C,I),w.return=N,w):(w=o(w,z),w.return=N,w)}function x(N,w,z){if(typeof w=="string"&&w!==""||typeof w=="number")return w=eu(""+w,N.mode,z),w.return=N,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ul:return z=Hl(w.type,w.key,w.props,null,N.mode,z),z.ref=To(N,null,w),z.return=N,z;case Na:return w=tu(w,N.mode,z),w.return=N,w;case ti:var C=w._init;return x(N,C(w._payload),z)}if($o(w)||Po(w))return w=Zi(w,N.mode,z,null),w.return=N,w;_l(N,w)}return null}function v(N,w,z,C){var I=w!==null?w.key:null;if(typeof z=="string"&&z!==""||typeof z=="number")return I!==null?null:h(N,w,""+z,C);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case ul:return z.key===I?u(N,w,z,C):null;case Na:return z.key===I?m(N,w,z,C):null;case ti:return I=z._init,v(N,w,I(z._payload),C)}if($o(z)||Po(z))return I!==null?null:g(N,w,z,C,null);_l(N,z)}return null}function b(N,w,z,C,I){if(typeof C=="string"&&C!==""||typeof C=="number")return N=N.get(z)||null,h(w,N,""+C,I);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case ul:return N=N.get(C.key===null?z:C.key)||null,u(w,N,C,I);case Na:return N=N.get(C.key===null?z:C.key)||null,m(w,N,C,I);case ti:var E=C._init;return b(N,w,z,E(C._payload),I)}if($o(C)||Po(C))return N=N.get(z)||null,g(w,N,C,I,null);_l(w,C)}return null}function _(N,w,z,C){for(var I=null,E=null,k=w,B=w=0,M=null;k!==null&&B<z.length;B++){k.index>B?(M=k,k=null):M=k.sibling;var T=v(N,k,z[B],C);if(T===null){k===null&&(k=M);break}e&&k&&T.alternate===null&&t(N,k),w=l(T,w,B),E===null?I=T:E.sibling=T,E=T,k=M}if(B===z.length)return n(N,k),ut&&Ai(N,B),I;if(k===null){for(;B<z.length;B++)k=x(N,z[B],C),k!==null&&(w=l(k,w,B),E===null?I=k:E.sibling=k,E=k);return ut&&Ai(N,B),I}for(k=a(N,k);B<z.length;B++)M=b(k,N,B,z[B],C),M!==null&&(e&&M.alternate!==null&&k.delete(M.key===null?B:M.key),w=l(M,w,B),E===null?I=M:E.sibling=M,E=M);return e&&k.forEach(function(W){return t(N,W)}),ut&&Ai(N,B),I}function j(N,w,z,C){var I=Po(z);if(typeof I!="function")throw Error(me(150));if(z=I.call(z),z==null)throw Error(me(151));for(var E=I=null,k=w,B=w=0,M=null,T=z.next();k!==null&&!T.done;B++,T=z.next()){k.index>B?(M=k,k=null):M=k.sibling;var W=v(N,k,T.value,C);if(W===null){k===null&&(k=M);break}e&&k&&W.alternate===null&&t(N,k),w=l(W,w,B),E===null?I=W:E.sibling=W,E=W,k=M}if(T.done)return n(N,k),ut&&Ai(N,B),I;if(k===null){for(;!T.done;B++,T=z.next())T=x(N,T.value,C),T!==null&&(w=l(T,w,B),E===null?I=T:E.sibling=T,E=T);return ut&&Ai(N,B),I}for(k=a(N,k);!T.done;B++,T=z.next())T=b(k,N,B,T.value,C),T!==null&&(e&&T.alternate!==null&&k.delete(T.key===null?B:T.key),w=l(T,w,B),E===null?I=T:E.sibling=T,E=T);return e&&k.forEach(function(U){return t(N,U)}),ut&&Ai(N,B),I}function P(N,w,z,C){if(typeof z=="object"&&z!==null&&z.type===Ca&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case ul:e:{for(var I=z.key,E=w;E!==null;){if(E.key===I){if(I=z.type,I===Ca){if(E.tag===7){n(N,E.sibling),w=o(E,z.props.children),w.return=N,N=w;break e}}else if(E.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===ti&&Nm(I)===E.type){n(N,E.sibling),w=o(E,z.props),w.ref=To(N,E,z),w.return=N,N=w;break e}n(N,E);break}else t(N,E);E=E.sibling}z.type===Ca?(w=Zi(z.props.children,N.mode,C,z.key),w.return=N,N=w):(C=Hl(z.type,z.key,z.props,null,N.mode,C),C.ref=To(N,w,z),C.return=N,N=C)}return c(N);case Na:e:{for(E=z.key;w!==null;){if(w.key===E)if(w.tag===4&&w.stateNode.containerInfo===z.containerInfo&&w.stateNode.implementation===z.implementation){n(N,w.sibling),w=o(w,z.children||[]),w.return=N,N=w;break e}else{n(N,w);break}else t(N,w);w=w.sibling}w=tu(z,N.mode,C),w.return=N,N=w}return c(N);case ti:return E=z._init,P(N,w,E(z._payload),C)}if($o(z))return _(N,w,z,C);if(Po(z))return j(N,w,z,C);_l(N,z)}return typeof z=="string"&&z!==""||typeof z=="number"?(z=""+z,w!==null&&w.tag===6?(n(N,w.sibling),w=o(w,z),w.return=N,N=w):(n(N,w),w=eu(z,N.mode,C),w.return=N,N=w),c(N)):n(N,w)}return P}var Qa=Px(!0),zx=Px(!1),sc=ji(null),lc=null,Ia=null,up=null;function hp(){up=Ia=lc=null}function pp(e){var t=sc.current;lt(sc),e._currentValue=t}function Ju(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Ha(e,t){lc=e,up=Ia=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(an=!0),e.firstContext=null)}function Mn(e){var t=e._currentValue;if(up!==e)if(e={context:e,memoizedValue:t,next:null},Ia===null){if(lc===null)throw Error(me(308));Ia=e,lc.dependencies={lanes:0,firstContext:e}}else Ia=Ia.next=e;return t}var Fi=null;function fp(e){Fi===null?Fi=[e]:Fi.push(e)}function Ex(e,t,n,a){var o=t.interleaved;return o===null?(n.next=n,fp(t)):(n.next=o.next,o.next=n),t.interleaved=n,Ur(e,a)}function Ur(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ni=!1;function mp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lx(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ar(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function hi(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,Ke&2){var o=a.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),a.pending=t,Ur(e,n)}return o=a.interleaved,o===null?(t.next=t,fp(a)):(t.next=o.next,o.next=t),a.interleaved=t,Ur(e,n)}function Ol(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,ep(e,n)}}function Cm(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var c={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=c:l=l.next=c,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:a.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:a.shared,effects:a.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function cc(e,t,n,a){var o=e.updateQueue;ni=!1;var l=o.firstBaseUpdate,c=o.lastBaseUpdate,h=o.shared.pending;if(h!==null){o.shared.pending=null;var u=h,m=u.next;u.next=null,c===null?l=m:c.next=m,c=u;var g=e.alternate;g!==null&&(g=g.updateQueue,h=g.lastBaseUpdate,h!==c&&(h===null?g.firstBaseUpdate=m:h.next=m,g.lastBaseUpdate=u))}if(l!==null){var x=o.baseState;c=0,g=m=u=null,h=l;do{var v=h.lane,b=h.eventTime;if((a&v)===v){g!==null&&(g=g.next={eventTime:b,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,next:null});e:{var _=e,j=h;switch(v=t,b=n,j.tag){case 1:if(_=j.payload,typeof _=="function"){x=_.call(b,x,v);break e}x=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=j.payload,v=typeof _=="function"?_.call(b,x,v):_,v==null)break e;x=ft({},x,v);break e;case 2:ni=!0}}h.callback!==null&&h.lane!==0&&(e.flags|=64,v=o.effects,v===null?o.effects=[h]:v.push(h))}else b={eventTime:b,lane:v,tag:h.tag,payload:h.payload,callback:h.callback,next:null},g===null?(m=g=b,u=x):g=g.next=b,c|=v;if(h=h.next,h===null){if(h=o.shared.pending,h===null)break;v=h,h=v.next,v.next=null,o.lastBaseUpdate=v,o.shared.pending=null}}while(!0);if(g===null&&(u=x),o.baseState=u,o.firstBaseUpdate=m,o.lastBaseUpdate=g,t=o.shared.interleaved,t!==null){o=t;do c|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);Qi|=c,e.lanes=c,e.memoizedState=x}}function Pm(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],o=a.callback;if(o!==null){if(a.callback=null,a=n,typeof o!="function")throw Error(me(191,o));o.call(a)}}}var Os={},sr=ji(Os),ys=ji(Os),vs=ji(Os);function Di(e){if(e===Os)throw Error(me(174));return e}function gp(e,t){switch(it(vs,t),it(ys,e),it(sr,Os),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Mu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Mu(t,e)}lt(sr),it(sr,t)}function Ja(){lt(sr),lt(ys),lt(vs)}function Mx(e){Di(vs.current);var t=Di(sr.current),n=Mu(t,e.type);t!==n&&(it(ys,e),it(sr,n))}function xp(e){ys.current===e&&(lt(sr),lt(ys))}var ht=ji(0);function dc(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Gd=[];function yp(){for(var e=0;e<Gd.length;e++)Gd[e]._workInProgressVersionPrimary=null;Gd.length=0}var Bl=Hr.ReactCurrentDispatcher,Kd=Hr.ReactCurrentBatchConfig,Yi=0,pt=null,kt=null,zt=null,uc=!1,ts=!1,bs=0,gw=0;function Rt(){throw Error(me(321))}function vp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Kn(e[n],t[n]))return!1;return!0}function bp(e,t,n,a,o,l){if(Yi=l,pt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Bl.current=e===null||e.memoizedState===null?bw:ww,e=n(a,o),ts){l=0;do{if(ts=!1,bs=0,25<=l)throw Error(me(301));l+=1,zt=kt=null,t.updateQueue=null,Bl.current=_w,e=n(a,o)}while(ts)}if(Bl.current=hc,t=kt!==null&&kt.next!==null,Yi=0,zt=kt=pt=null,uc=!1,t)throw Error(me(300));return e}function wp(){var e=bs!==0;return bs=0,e}function ir(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zt===null?pt.memoizedState=zt=e:zt=zt.next=e,zt}function Tn(){if(kt===null){var e=pt.alternate;e=e!==null?e.memoizedState:null}else e=kt.next;var t=zt===null?pt.memoizedState:zt.next;if(t!==null)zt=t,kt=e;else{if(e===null)throw Error(me(310));kt=e,e={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},zt===null?pt.memoizedState=zt=e:zt=zt.next=e}return zt}function ws(e,t){return typeof t=="function"?t(e):t}function Yd(e){var t=Tn(),n=t.queue;if(n===null)throw Error(me(311));n.lastRenderedReducer=e;var a=kt,o=a.baseQueue,l=n.pending;if(l!==null){if(o!==null){var c=o.next;o.next=l.next,l.next=c}a.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,a=a.baseState;var h=c=null,u=null,m=l;do{var g=m.lane;if((Yi&g)===g)u!==null&&(u=u.next={lane:0,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),a=m.hasEagerState?m.eagerState:e(a,m.action);else{var x={lane:g,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null};u===null?(h=u=x,c=a):u=u.next=x,pt.lanes|=g,Qi|=g}m=m.next}while(m!==null&&m!==l);u===null?c=a:u.next=h,Kn(a,t.memoizedState)||(an=!0),t.memoizedState=a,t.baseState=c,t.baseQueue=u,n.lastRenderedState=a}if(e=n.interleaved,e!==null){o=e;do l=o.lane,pt.lanes|=l,Qi|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Qd(e){var t=Tn(),n=t.queue;if(n===null)throw Error(me(311));n.lastRenderedReducer=e;var a=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var c=o=o.next;do l=e(l,c.action),c=c.next;while(c!==o);Kn(l,t.memoizedState)||(an=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,a]}function Tx(){}function Ax(e,t){var n=pt,a=Tn(),o=t(),l=!Kn(a.memoizedState,o);if(l&&(a.memoizedState=o,an=!0),a=a.queue,_p(Ox.bind(null,n,a,e),[e]),a.getSnapshot!==t||l||zt!==null&&zt.memoizedState.tag&1){if(n.flags|=2048,_s(9,Rx.bind(null,n,a,o,t),void 0,null),Et===null)throw Error(me(349));Yi&30||Ix(n,t,o)}return o}function Ix(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=pt.updateQueue,t===null?(t={lastEffect:null,stores:null},pt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Rx(e,t,n,a){t.value=n,t.getSnapshot=a,Bx(t)&&Fx(e)}function Ox(e,t,n){return n(function(){Bx(t)&&Fx(e)})}function Bx(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Kn(e,n)}catch{return!0}}function Fx(e){var t=Ur(e,1);t!==null&&Vn(t,e,1,-1)}function zm(e){var t=ir();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ws,lastRenderedState:e},t.queue=e,e=e.dispatch=vw.bind(null,pt,e),[t.memoizedState,e]}function _s(e,t,n,a){return e={tag:e,create:t,destroy:n,deps:a,next:null},t=pt.updateQueue,t===null?(t={lastEffect:null,stores:null},pt.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e)),e}function Dx(){return Tn().memoizedState}function Fl(e,t,n,a){var o=ir();pt.flags|=e,o.memoizedState=_s(1|t,n,void 0,a===void 0?null:a)}function Ac(e,t,n,a){var o=Tn();a=a===void 0?null:a;var l=void 0;if(kt!==null){var c=kt.memoizedState;if(l=c.destroy,a!==null&&vp(a,c.deps)){o.memoizedState=_s(t,n,l,a);return}}pt.flags|=e,o.memoizedState=_s(1|t,n,l,a)}function Em(e,t){return Fl(8390656,8,e,t)}function _p(e,t){return Ac(2048,8,e,t)}function Ux(e,t){return Ac(4,2,e,t)}function Wx(e,t){return Ac(4,4,e,t)}function Hx(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Zx(e,t,n){return n=n!=null?n.concat([e]):null,Ac(4,4,Hx.bind(null,t,e),n)}function jp(){}function $x(e,t){var n=Tn();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&vp(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function qx(e,t){var n=Tn();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&vp(t,a[1])?a[0]:(e=e(),n.memoizedState=[e,t],e)}function Vx(e,t,n){return Yi&21?(Kn(n,t)||(n=J0(),pt.lanes|=n,Qi|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,an=!0),e.memoizedState=n)}function xw(e,t){var n=tt;tt=n!==0&&4>n?n:4,e(!0);var a=Kd.transition;Kd.transition={};try{e(!1),t()}finally{tt=n,Kd.transition=a}}function Gx(){return Tn().memoizedState}function yw(e,t,n){var a=fi(e);if(n={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null},Kx(e))Yx(t,n);else if(n=Ex(e,t,n,a),n!==null){var o=Kt();Vn(n,e,a,o),Qx(n,t,a)}}function vw(e,t,n){var a=fi(e),o={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null};if(Kx(e))Yx(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var c=t.lastRenderedState,h=l(c,n);if(o.hasEagerState=!0,o.eagerState=h,Kn(h,c)){var u=t.interleaved;u===null?(o.next=o,fp(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=Ex(e,t,o,a),n!==null&&(o=Kt(),Vn(n,e,a,o),Qx(n,t,a))}}function Kx(e){var t=e.alternate;return e===pt||t!==null&&t===pt}function Yx(e,t){ts=uc=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Qx(e,t,n){if(n&4194240){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,ep(e,n)}}var hc={readContext:Mn,useCallback:Rt,useContext:Rt,useEffect:Rt,useImperativeHandle:Rt,useInsertionEffect:Rt,useLayoutEffect:Rt,useMemo:Rt,useReducer:Rt,useRef:Rt,useState:Rt,useDebugValue:Rt,useDeferredValue:Rt,useTransition:Rt,useMutableSource:Rt,useSyncExternalStore:Rt,useId:Rt,unstable_isNewReconciler:!1},bw={readContext:Mn,useCallback:function(e,t){return ir().memoizedState=[e,t===void 0?null:t],e},useContext:Mn,useEffect:Em,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Fl(4194308,4,Hx.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Fl(4194308,4,e,t)},useInsertionEffect:function(e,t){return Fl(4,2,e,t)},useMemo:function(e,t){var n=ir();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var a=ir();return t=n!==void 0?n(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=yw.bind(null,pt,e),[a.memoizedState,e]},useRef:function(e){var t=ir();return e={current:e},t.memoizedState=e},useState:zm,useDebugValue:jp,useDeferredValue:function(e){return ir().memoizedState=e},useTransition:function(){var e=zm(!1),t=e[0];return e=xw.bind(null,e[1]),ir().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var a=pt,o=ir();if(ut){if(n===void 0)throw Error(me(407));n=n()}else{if(n=t(),Et===null)throw Error(me(349));Yi&30||Ix(a,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,Em(Ox.bind(null,a,l,e),[e]),a.flags|=2048,_s(9,Rx.bind(null,a,l,n,t),void 0,null),n},useId:function(){var e=ir(),t=Et.identifierPrefix;if(ut){var n=Tr,a=Mr;n=(a&~(1<<32-qn(a)-1)).toString(32)+n,t=":"+t+"R"+n,n=bs++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=gw++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ww={readContext:Mn,useCallback:$x,useContext:Mn,useEffect:_p,useImperativeHandle:Zx,useInsertionEffect:Ux,useLayoutEffect:Wx,useMemo:qx,useReducer:Yd,useRef:Dx,useState:function(){return Yd(ws)},useDebugValue:jp,useDeferredValue:function(e){var t=Tn();return Vx(t,kt.memoizedState,e)},useTransition:function(){var e=Yd(ws)[0],t=Tn().memoizedState;return[e,t]},useMutableSource:Tx,useSyncExternalStore:Ax,useId:Gx,unstable_isNewReconciler:!1},_w={readContext:Mn,useCallback:$x,useContext:Mn,useEffect:_p,useImperativeHandle:Zx,useInsertionEffect:Ux,useLayoutEffect:Wx,useMemo:qx,useReducer:Qd,useRef:Dx,useState:function(){return Qd(ws)},useDebugValue:jp,useDeferredValue:function(e){var t=Tn();return kt===null?t.memoizedState=e:Vx(t,kt.memoizedState,e)},useTransition:function(){var e=Qd(ws)[0],t=Tn().memoizedState;return[e,t]},useMutableSource:Tx,useSyncExternalStore:Ax,useId:Gx,unstable_isNewReconciler:!1};function Wn(e,t){if(e&&e.defaultProps){t=ft({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Xu(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:ft({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ic={isMounted:function(e){return(e=e._reactInternals)?sa(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Kt(),o=fi(e),l=Ar(a,o);l.payload=t,n!=null&&(l.callback=n),t=hi(e,l,o),t!==null&&(Vn(t,e,o,a),Ol(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Kt(),o=fi(e),l=Ar(a,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=hi(e,l,o),t!==null&&(Vn(t,e,o,a),Ol(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Kt(),a=fi(e),o=Ar(n,a);o.tag=2,t!=null&&(o.callback=t),t=hi(e,o,a),t!==null&&(Vn(t,e,a,n),Ol(t,e,a))}};function Lm(e,t,n,a,o,l,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,l,c):t.prototype&&t.prototype.isPureReactComponent?!fs(n,a)||!fs(o,l):!0}function Jx(e,t,n){var a=!1,o=yi,l=t.contextType;return typeof l=="object"&&l!==null?l=Mn(l):(o=sn(t)?Gi:Wt.current,a=t.contextTypes,l=(a=a!=null)?Ka(e,o):yi),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ic,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function Mm(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Ic.enqueueReplaceState(t,t.state,null)}function eh(e,t,n,a){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},mp(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=Mn(l):(l=sn(t)?Gi:Wt.current,o.context=Ka(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Xu(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ic.enqueueReplaceState(o,o.state,null),cc(e,n,o,a),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Xa(e,t){try{var n="",a=t;do n+=Y2(a),a=a.return;while(a);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function Jd(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function th(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var jw=typeof WeakMap=="function"?WeakMap:Map;function Xx(e,t,n){n=Ar(-1,n),n.tag=3,n.payload={element:null};var a=t.value;return n.callback=function(){fc||(fc=!0,uh=a),th(e,t)},n}function ey(e,t,n){n=Ar(-1,n),n.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var o=t.value;n.payload=function(){return a(o)},n.callback=function(){th(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){th(e,t),typeof a!="function"&&(pi===null?pi=new Set([this]):pi.add(this));var c=t.stack;this.componentDidCatch(t.value,{componentStack:c!==null?c:""})}),n}function Tm(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new jw;var o=new Set;a.set(t,o)}else o=a.get(t),o===void 0&&(o=new Set,a.set(t,o));o.has(n)||(o.add(n),e=Ow.bind(null,e,t,n),t.then(e,e))}function Am(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Im(e,t,n,a,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ar(-1,1),t.tag=2,hi(n,t,1))),n.lanes|=1),e)}var kw=Hr.ReactCurrentOwner,an=!1;function Vt(e,t,n,a){t.child=e===null?zx(t,null,n,a):Qa(t,e.child,n,a)}function Rm(e,t,n,a,o){n=n.render;var l=t.ref;return Ha(t,o),a=bp(e,t,n,a,l,o),n=wp(),e!==null&&!an?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Wr(e,t,o)):(ut&&n&&lp(t),t.flags|=1,Vt(e,t,a,o),t.child)}function Om(e,t,n,a,o){if(e===null){var l=n.type;return typeof l=="function"&&!Lp(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,ty(e,t,l,a,o)):(e=Hl(n.type,null,a,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var c=l.memoizedProps;if(n=n.compare,n=n!==null?n:fs,n(c,a)&&e.ref===t.ref)return Wr(e,t,o)}return t.flags|=1,e=mi(l,a),e.ref=t.ref,e.return=t,t.child=e}function ty(e,t,n,a,o){if(e!==null){var l=e.memoizedProps;if(fs(l,a)&&e.ref===t.ref)if(an=!1,t.pendingProps=a=l,(e.lanes&o)!==0)e.flags&131072&&(an=!0);else return t.lanes=e.lanes,Wr(e,t,o)}return nh(e,t,n,a,o)}function ny(e,t,n){var a=t.pendingProps,o=a.children,l=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},it(Oa,fn),fn|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,it(Oa,fn),fn|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=l!==null?l.baseLanes:n,it(Oa,fn),fn|=a}else l!==null?(a=l.baseLanes|n,t.memoizedState=null):a=n,it(Oa,fn),fn|=a;return Vt(e,t,o,n),t.child}function ry(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function nh(e,t,n,a,o){var l=sn(n)?Gi:Wt.current;return l=Ka(t,l),Ha(t,o),n=bp(e,t,n,a,l,o),a=wp(),e!==null&&!an?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Wr(e,t,o)):(ut&&a&&lp(t),t.flags|=1,Vt(e,t,n,o),t.child)}function Bm(e,t,n,a,o){if(sn(n)){var l=!0;ic(t)}else l=!1;if(Ha(t,o),t.stateNode===null)Dl(e,t),Jx(t,n,a),eh(t,n,a,o),a=!0;else if(e===null){var c=t.stateNode,h=t.memoizedProps;c.props=h;var u=c.context,m=n.contextType;typeof m=="object"&&m!==null?m=Mn(m):(m=sn(n)?Gi:Wt.current,m=Ka(t,m));var g=n.getDerivedStateFromProps,x=typeof g=="function"||typeof c.getSnapshotBeforeUpdate=="function";x||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(h!==a||u!==m)&&Mm(t,c,a,m),ni=!1;var v=t.memoizedState;c.state=v,cc(t,a,c,o),u=t.memoizedState,h!==a||v!==u||on.current||ni?(typeof g=="function"&&(Xu(t,n,g,a),u=t.memoizedState),(h=ni||Lm(t,n,h,a,v,u,m))?(x||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=u),c.props=a,c.state=u,c.context=m,a=h):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{c=t.stateNode,Lx(e,t),h=t.memoizedProps,m=t.type===t.elementType?h:Wn(t.type,h),c.props=m,x=t.pendingProps,v=c.context,u=n.contextType,typeof u=="object"&&u!==null?u=Mn(u):(u=sn(n)?Gi:Wt.current,u=Ka(t,u));var b=n.getDerivedStateFromProps;(g=typeof b=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(h!==x||v!==u)&&Mm(t,c,a,u),ni=!1,v=t.memoizedState,c.state=v,cc(t,a,c,o);var _=t.memoizedState;h!==x||v!==_||on.current||ni?(typeof b=="function"&&(Xu(t,n,b,a),_=t.memoizedState),(m=ni||Lm(t,n,m,a,v,_,u)||!1)?(g||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(a,_,u),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(a,_,u)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||h===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=_),c.props=a,c.state=_,c.context=u,a=m):(typeof c.componentDidUpdate!="function"||h===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),a=!1)}return rh(e,t,n,a,l,o)}function rh(e,t,n,a,o,l){ry(e,t);var c=(t.flags&128)!==0;if(!a&&!c)return o&&jm(t,n,!1),Wr(e,t,l);a=t.stateNode,kw.current=t;var h=c&&typeof n.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&c?(t.child=Qa(t,e.child,null,l),t.child=Qa(t,null,h,l)):Vt(e,t,h,l),t.memoizedState=a.state,o&&jm(t,n,!0),t.child}function iy(e){var t=e.stateNode;t.pendingContext?_m(e,t.pendingContext,t.pendingContext!==t.context):t.context&&_m(e,t.context,!1),gp(e,t.containerInfo)}function Fm(e,t,n,a,o){return Ya(),dp(o),t.flags|=256,Vt(e,t,n,a),t.child}var ih={dehydrated:null,treeContext:null,retryLane:0};function ah(e){return{baseLanes:e,cachePool:null,transitions:null}}function ay(e,t,n){var a=t.pendingProps,o=ht.current,l=!1,c=(t.flags&128)!==0,h;if((h=c)||(h=e!==null&&e.memoizedState===null?!1:(o&2)!==0),h?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),it(ht,o&1),e===null)return Qu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(c=a.children,e=a.fallback,l?(a=t.mode,l=t.child,c={mode:"hidden",children:c},!(a&1)&&l!==null?(l.childLanes=0,l.pendingProps=c):l=Bc(c,a,0,null),e=Zi(e,a,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=ah(n),t.memoizedState=ih,e):kp(t,c));if(o=e.memoizedState,o!==null&&(h=o.dehydrated,h!==null))return Sw(e,t,c,a,h,o,n);if(l){l=a.fallback,c=t.mode,o=e.child,h=o.sibling;var u={mode:"hidden",children:a.children};return!(c&1)&&t.child!==o?(a=t.child,a.childLanes=0,a.pendingProps=u,t.deletions=null):(a=mi(o,u),a.subtreeFlags=o.subtreeFlags&14680064),h!==null?l=mi(h,l):(l=Zi(l,c,n,null),l.flags|=2),l.return=t,a.return=t,a.sibling=l,t.child=a,a=l,l=t.child,c=e.child.memoizedState,c=c===null?ah(n):{baseLanes:c.baseLanes|n,cachePool:null,transitions:c.transitions},l.memoizedState=c,l.childLanes=e.childLanes&~n,t.memoizedState=ih,a}return l=e.child,e=l.sibling,a=mi(l,{mode:"visible",children:a.children}),!(t.mode&1)&&(a.lanes=n),a.return=t,a.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function kp(e,t){return t=Bc({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function jl(e,t,n,a){return a!==null&&dp(a),Qa(t,e.child,null,n),e=kp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Sw(e,t,n,a,o,l,c){if(n)return t.flags&256?(t.flags&=-257,a=Jd(Error(me(422))),jl(e,t,c,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=a.fallback,o=t.mode,a=Bc({mode:"visible",children:a.children},o,0,null),l=Zi(l,o,c,null),l.flags|=2,a.return=t,l.return=t,a.sibling=l,t.child=a,t.mode&1&&Qa(t,e.child,null,c),t.child.memoizedState=ah(c),t.memoizedState=ih,l);if(!(t.mode&1))return jl(e,t,c,null);if(o.data==="$!"){if(a=o.nextSibling&&o.nextSibling.dataset,a)var h=a.dgst;return a=h,l=Error(me(419)),a=Jd(l,a,void 0),jl(e,t,c,a)}if(h=(c&e.childLanes)!==0,an||h){if(a=Et,a!==null){switch(c&-c){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(a.suspendedLanes|c)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,Ur(e,o),Vn(a,e,o,-1))}return Ep(),a=Jd(Error(me(421))),jl(e,t,c,a)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Bw.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,gn=ui(o.nextSibling),xn=t,ut=!0,$n=null,e!==null&&(Cn[Pn++]=Mr,Cn[Pn++]=Tr,Cn[Pn++]=Ki,Mr=e.id,Tr=e.overflow,Ki=t),t=kp(t,a.children),t.flags|=4096,t)}function Dm(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Ju(e.return,t,n)}function Xd(e,t,n,a,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=a,l.tail=n,l.tailMode=o)}function oy(e,t,n){var a=t.pendingProps,o=a.revealOrder,l=a.tail;if(Vt(e,t,a.children,n),a=ht.current,a&2)a=a&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dm(e,n,t);else if(e.tag===19)Dm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(it(ht,a),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&dc(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Xd(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&dc(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Xd(t,!0,n,null,l);break;case"together":Xd(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Dl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Qi|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(me(153));if(t.child!==null){for(e=t.child,n=mi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Nw(e,t,n){switch(t.tag){case 3:iy(t),Ya();break;case 5:Mx(t);break;case 1:sn(t.type)&&ic(t);break;case 4:gp(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,o=t.memoizedProps.value;it(sc,a._currentValue),a._currentValue=o;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(it(ht,ht.current&1),t.flags|=128,null):n&t.child.childLanes?ay(e,t,n):(it(ht,ht.current&1),e=Wr(e,t,n),e!==null?e.sibling:null);it(ht,ht.current&1);break;case 19:if(a=(n&t.childLanes)!==0,e.flags&128){if(a)return oy(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),it(ht,ht.current),a)break;return null;case 22:case 23:return t.lanes=0,ny(e,t,n)}return Wr(e,t,n)}var sy,oh,ly,cy;sy=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};oh=function(){};ly=function(e,t,n,a){var o=e.memoizedProps;if(o!==a){e=t.stateNode,Di(sr.current);var l=null;switch(n){case"input":o=Pu(e,o),a=Pu(e,a),l=[];break;case"select":o=ft({},o,{value:void 0}),a=ft({},a,{value:void 0}),l=[];break;case"textarea":o=Lu(e,o),a=Lu(e,a),l=[];break;default:typeof o.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=nc)}Tu(n,a);var c;n=null;for(m in o)if(!a.hasOwnProperty(m)&&o.hasOwnProperty(m)&&o[m]!=null)if(m==="style"){var h=o[m];for(c in h)h.hasOwnProperty(c)&&(n||(n={}),n[c]="")}else m!=="dangerouslySetInnerHTML"&&m!=="children"&&m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(ss.hasOwnProperty(m)?l||(l=[]):(l=l||[]).push(m,null));for(m in a){var u=a[m];if(h=o!=null?o[m]:void 0,a.hasOwnProperty(m)&&u!==h&&(u!=null||h!=null))if(m==="style")if(h){for(c in h)!h.hasOwnProperty(c)||u&&u.hasOwnProperty(c)||(n||(n={}),n[c]="");for(c in u)u.hasOwnProperty(c)&&h[c]!==u[c]&&(n||(n={}),n[c]=u[c])}else n||(l||(l=[]),l.push(m,n)),n=u;else m==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,h=h?h.__html:void 0,u!=null&&h!==u&&(l=l||[]).push(m,u)):m==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(m,""+u):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&(ss.hasOwnProperty(m)?(u!=null&&m==="onScroll"&&st("scroll",e),l||h===u||(l=[])):(l=l||[]).push(m,u))}n&&(l=l||[]).push("style",n);var m=l;(t.updateQueue=m)&&(t.flags|=4)}};cy=function(e,t,n,a){n!==a&&(t.flags|=4)};function Ao(e,t){if(!ut)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ot(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,a|=o.subtreeFlags&14680064,a|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,a|=o.subtreeFlags,a|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function Cw(e,t,n){var a=t.pendingProps;switch(cp(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(t),null;case 1:return sn(t.type)&&rc(),Ot(t),null;case 3:return a=t.stateNode,Ja(),lt(on),lt(Wt),yp(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(wl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,$n!==null&&(fh($n),$n=null))),oh(e,t),Ot(t),null;case 5:xp(t);var o=Di(vs.current);if(n=t.type,e!==null&&t.stateNode!=null)ly(e,t,n,a,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(me(166));return Ot(t),null}if(e=Di(sr.current),wl(t)){a=t.stateNode,n=t.type;var l=t.memoizedProps;switch(a[ar]=t,a[xs]=l,e=(t.mode&1)!==0,n){case"dialog":st("cancel",a),st("close",a);break;case"iframe":case"object":case"embed":st("load",a);break;case"video":case"audio":for(o=0;o<Vo.length;o++)st(Vo[o],a);break;case"source":st("error",a);break;case"img":case"image":case"link":st("error",a),st("load",a);break;case"details":st("toggle",a);break;case"input":Kf(a,l),st("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!l.multiple},st("invalid",a);break;case"textarea":Qf(a,l),st("invalid",a)}Tu(n,l),o=null;for(var c in l)if(l.hasOwnProperty(c)){var h=l[c];c==="children"?typeof h=="string"?a.textContent!==h&&(l.suppressHydrationWarning!==!0&&bl(a.textContent,h,e),o=["children",h]):typeof h=="number"&&a.textContent!==""+h&&(l.suppressHydrationWarning!==!0&&bl(a.textContent,h,e),o=["children",""+h]):ss.hasOwnProperty(c)&&h!=null&&c==="onScroll"&&st("scroll",a)}switch(n){case"input":hl(a),Yf(a,l,!0);break;case"textarea":hl(a),Jf(a);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(a.onclick=nc)}a=o,t.updateQueue=a,a!==null&&(t.flags|=4)}else{c=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=O0(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=c.createElement(n,{is:a.is}):(e=c.createElement(n),n==="select"&&(c=e,a.multiple?c.multiple=!0:a.size&&(c.size=a.size))):e=c.createElementNS(e,n),e[ar]=t,e[xs]=a,sy(e,t,!1,!1),t.stateNode=e;e:{switch(c=Au(n,a),n){case"dialog":st("cancel",e),st("close",e),o=a;break;case"iframe":case"object":case"embed":st("load",e),o=a;break;case"video":case"audio":for(o=0;o<Vo.length;o++)st(Vo[o],e);o=a;break;case"source":st("error",e),o=a;break;case"img":case"image":case"link":st("error",e),st("load",e),o=a;break;case"details":st("toggle",e),o=a;break;case"input":Kf(e,a),o=Pu(e,a),st("invalid",e);break;case"option":o=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},o=ft({},a,{value:void 0}),st("invalid",e);break;case"textarea":Qf(e,a),o=Lu(e,a),st("invalid",e);break;default:o=a}Tu(n,o),h=o;for(l in h)if(h.hasOwnProperty(l)){var u=h[l];l==="style"?D0(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&B0(e,u)):l==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ls(e,u):typeof u=="number"&&ls(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(ss.hasOwnProperty(l)?u!=null&&l==="onScroll"&&st("scroll",e):u!=null&&Gh(e,l,u,c))}switch(n){case"input":hl(e),Yf(e,a,!1);break;case"textarea":hl(e),Jf(e);break;case"option":a.value!=null&&e.setAttribute("value",""+xi(a.value));break;case"select":e.multiple=!!a.multiple,l=a.value,l!=null?Fa(e,!!a.multiple,l,!1):a.defaultValue!=null&&Fa(e,!!a.multiple,a.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=nc)}switch(n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ot(t),null;case 6:if(e&&t.stateNode!=null)cy(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(me(166));if(n=Di(vs.current),Di(sr.current),wl(t)){if(a=t.stateNode,n=t.memoizedProps,a[ar]=t,(l=a.nodeValue!==n)&&(e=xn,e!==null))switch(e.tag){case 3:bl(a.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&bl(a.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else a=(n.nodeType===9?n:n.ownerDocument).createTextNode(a),a[ar]=t,t.stateNode=a}return Ot(t),null;case 13:if(lt(ht),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ut&&gn!==null&&t.mode&1&&!(t.flags&128))Cx(),Ya(),t.flags|=98560,l=!1;else if(l=wl(t),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(me(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(me(317));l[ar]=t}else Ya(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ot(t),l=!1}else $n!==null&&(fh($n),$n=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,t.mode&1&&(e===null||ht.current&1?St===0&&(St=3):Ep())),t.updateQueue!==null&&(t.flags|=4),Ot(t),null);case 4:return Ja(),oh(e,t),e===null&&ms(t.stateNode.containerInfo),Ot(t),null;case 10:return pp(t.type._context),Ot(t),null;case 17:return sn(t.type)&&rc(),Ot(t),null;case 19:if(lt(ht),l=t.memoizedState,l===null)return Ot(t),null;if(a=(t.flags&128)!==0,c=l.rendering,c===null)if(a)Ao(l,!1);else{if(St!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(c=dc(e),c!==null){for(t.flags|=128,Ao(l,!1),a=c.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=n,n=t.child;n!==null;)l=n,e=a,l.flags&=14680066,c=l.alternate,c===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=c.childLanes,l.lanes=c.lanes,l.child=c.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=c.memoizedProps,l.memoizedState=c.memoizedState,l.updateQueue=c.updateQueue,l.type=c.type,e=c.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return it(ht,ht.current&1|2),t.child}e=e.sibling}l.tail!==null&&xt()>eo&&(t.flags|=128,a=!0,Ao(l,!1),t.lanes=4194304)}else{if(!a)if(e=dc(c),e!==null){if(t.flags|=128,a=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ao(l,!0),l.tail===null&&l.tailMode==="hidden"&&!c.alternate&&!ut)return Ot(t),null}else 2*xt()-l.renderingStartTime>eo&&n!==1073741824&&(t.flags|=128,a=!0,Ao(l,!1),t.lanes=4194304);l.isBackwards?(c.sibling=t.child,t.child=c):(n=l.last,n!==null?n.sibling=c:t.child=c,l.last=c)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=xt(),t.sibling=null,n=ht.current,it(ht,a?n&1|2:n&1),t):(Ot(t),null);case 22:case 23:return zp(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&t.mode&1?fn&1073741824&&(Ot(t),t.subtreeFlags&6&&(t.flags|=8192)):Ot(t),null;case 24:return null;case 25:return null}throw Error(me(156,t.tag))}function Pw(e,t){switch(cp(t),t.tag){case 1:return sn(t.type)&&rc(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ja(),lt(on),lt(Wt),yp(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return xp(t),null;case 13:if(lt(ht),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(me(340));Ya()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return lt(ht),null;case 4:return Ja(),null;case 10:return pp(t.type._context),null;case 22:case 23:return zp(),null;case 24:return null;default:return null}}var kl=!1,Bt=!1,zw=typeof WeakSet=="function"?WeakSet:Set,je=null;function Ra(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(a){mt(e,t,a)}else n.current=null}function sh(e,t,n){try{n()}catch(a){mt(e,t,a)}}var Um=!1;function Ew(e,t){if(Zu=Xl,e=fx(),sp(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var o=a.anchorOffset,l=a.focusNode;a=a.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var c=0,h=-1,u=-1,m=0,g=0,x=e,v=null;t:for(;;){for(var b;x!==n||o!==0&&x.nodeType!==3||(h=c+o),x!==l||a!==0&&x.nodeType!==3||(u=c+a),x.nodeType===3&&(c+=x.nodeValue.length),(b=x.firstChild)!==null;)v=x,x=b;for(;;){if(x===e)break t;if(v===n&&++m===o&&(h=c),v===l&&++g===a&&(u=c),(b=x.nextSibling)!==null)break;x=v,v=x.parentNode}x=b}n=h===-1||u===-1?null:{start:h,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for($u={focusedElem:e,selectionRange:n},Xl=!1,je=t;je!==null;)if(t=je,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,je=e;else for(;je!==null;){t=je;try{var _=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var j=_.memoizedProps,P=_.memoizedState,N=t.stateNode,w=N.getSnapshotBeforeUpdate(t.elementType===t.type?j:Wn(t.type,j),P);N.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var z=t.stateNode.containerInfo;z.nodeType===1?z.textContent="":z.nodeType===9&&z.documentElement&&z.removeChild(z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(me(163))}}catch(C){mt(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,je=e;break}je=t.return}return _=Um,Um=!1,_}function ns(e,t,n){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var o=a=a.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&sh(t,n,l)}o=o.next}while(o!==a)}}function Rc(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var a=n.create;n.destroy=a()}n=n.next}while(n!==t)}}function lh(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function dy(e){var t=e.alternate;t!==null&&(e.alternate=null,dy(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ar],delete t[xs],delete t[Gu],delete t[hw],delete t[pw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function uy(e){return e.tag===5||e.tag===3||e.tag===4}function Wm(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||uy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ch(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=nc));else if(a!==4&&(e=e.child,e!==null))for(ch(e,t,n),e=e.sibling;e!==null;)ch(e,t,n),e=e.sibling}function dh(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(dh(e,t,n),e=e.sibling;e!==null;)dh(e,t,n),e=e.sibling}var Mt=null,Hn=!1;function Xr(e,t,n){for(n=n.child;n!==null;)hy(e,t,n),n=n.sibling}function hy(e,t,n){if(or&&typeof or.onCommitFiberUnmount=="function")try{or.onCommitFiberUnmount(Pc,n)}catch{}switch(n.tag){case 5:Bt||Ra(n,t);case 6:var a=Mt,o=Hn;Mt=null,Xr(e,t,n),Mt=a,Hn=o,Mt!==null&&(Hn?(e=Mt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Mt.removeChild(n.stateNode));break;case 18:Mt!==null&&(Hn?(e=Mt,n=n.stateNode,e.nodeType===8?qd(e.parentNode,n):e.nodeType===1&&qd(e,n),hs(e)):qd(Mt,n.stateNode));break;case 4:a=Mt,o=Hn,Mt=n.stateNode.containerInfo,Hn=!0,Xr(e,t,n),Mt=a,Hn=o;break;case 0:case 11:case 14:case 15:if(!Bt&&(a=n.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){o=a=a.next;do{var l=o,c=l.destroy;l=l.tag,c!==void 0&&(l&2||l&4)&&sh(n,t,c),o=o.next}while(o!==a)}Xr(e,t,n);break;case 1:if(!Bt&&(Ra(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=n.memoizedProps,a.state=n.memoizedState,a.componentWillUnmount()}catch(h){mt(n,t,h)}Xr(e,t,n);break;case 21:Xr(e,t,n);break;case 22:n.mode&1?(Bt=(a=Bt)||n.memoizedState!==null,Xr(e,t,n),Bt=a):Xr(e,t,n);break;default:Xr(e,t,n)}}function Hm(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new zw),t.forEach(function(a){var o=Fw.bind(null,e,a);n.has(a)||(n.add(a),a.then(o,o))})}}function Dn(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];try{var l=e,c=t,h=c;e:for(;h!==null;){switch(h.tag){case 5:Mt=h.stateNode,Hn=!1;break e;case 3:Mt=h.stateNode.containerInfo,Hn=!0;break e;case 4:Mt=h.stateNode.containerInfo,Hn=!0;break e}h=h.return}if(Mt===null)throw Error(me(160));hy(l,c,o),Mt=null,Hn=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(m){mt(o,t,m)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)py(t,e),t=t.sibling}function py(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Dn(t,e),nr(e),a&4){try{ns(3,e,e.return),Rc(3,e)}catch(j){mt(e,e.return,j)}try{ns(5,e,e.return)}catch(j){mt(e,e.return,j)}}break;case 1:Dn(t,e),nr(e),a&512&&n!==null&&Ra(n,n.return);break;case 5:if(Dn(t,e),nr(e),a&512&&n!==null&&Ra(n,n.return),e.flags&32){var o=e.stateNode;try{ls(o,"")}catch(j){mt(e,e.return,j)}}if(a&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,c=n!==null?n.memoizedProps:l,h=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{h==="input"&&l.type==="radio"&&l.name!=null&&I0(o,l),Au(h,c);var m=Au(h,l);for(c=0;c<u.length;c+=2){var g=u[c],x=u[c+1];g==="style"?D0(o,x):g==="dangerouslySetInnerHTML"?B0(o,x):g==="children"?ls(o,x):Gh(o,g,x,m)}switch(h){case"input":zu(o,l);break;case"textarea":R0(o,l);break;case"select":var v=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var b=l.value;b!=null?Fa(o,!!l.multiple,b,!1):v!==!!l.multiple&&(l.defaultValue!=null?Fa(o,!!l.multiple,l.defaultValue,!0):Fa(o,!!l.multiple,l.multiple?[]:"",!1))}o[xs]=l}catch(j){mt(e,e.return,j)}}break;case 6:if(Dn(t,e),nr(e),a&4){if(e.stateNode===null)throw Error(me(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(j){mt(e,e.return,j)}}break;case 3:if(Dn(t,e),nr(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{hs(t.containerInfo)}catch(j){mt(e,e.return,j)}break;case 4:Dn(t,e),nr(e);break;case 13:Dn(t,e),nr(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(Cp=xt())),a&4&&Hm(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(Bt=(m=Bt)||g,Dn(t,e),Bt=m):Dn(t,e),nr(e),a&8192){if(m=e.memoizedState!==null,(e.stateNode.isHidden=m)&&!g&&e.mode&1)for(je=e,g=e.child;g!==null;){for(x=je=g;je!==null;){switch(v=je,b=v.child,v.tag){case 0:case 11:case 14:case 15:ns(4,v,v.return);break;case 1:Ra(v,v.return);var _=v.stateNode;if(typeof _.componentWillUnmount=="function"){a=v,n=v.return;try{t=a,_.props=t.memoizedProps,_.state=t.memoizedState,_.componentWillUnmount()}catch(j){mt(a,n,j)}}break;case 5:Ra(v,v.return);break;case 22:if(v.memoizedState!==null){$m(x);continue}}b!==null?(b.return=v,je=b):$m(x)}g=g.sibling}e:for(g=null,x=e;;){if(x.tag===5){if(g===null){g=x;try{o=x.stateNode,m?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(h=x.stateNode,u=x.memoizedProps.style,c=u!=null&&u.hasOwnProperty("display")?u.display:null,h.style.display=F0("display",c))}catch(j){mt(e,e.return,j)}}}else if(x.tag===6){if(g===null)try{x.stateNode.nodeValue=m?"":x.memoizedProps}catch(j){mt(e,e.return,j)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===e)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===e)break e;for(;x.sibling===null;){if(x.return===null||x.return===e)break e;g===x&&(g=null),x=x.return}g===x&&(g=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:Dn(t,e),nr(e),a&4&&Hm(e);break;case 21:break;default:Dn(t,e),nr(e)}}function nr(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(uy(n)){var a=n;break e}n=n.return}throw Error(me(160))}switch(a.tag){case 5:var o=a.stateNode;a.flags&32&&(ls(o,""),a.flags&=-33);var l=Wm(e);dh(e,l,o);break;case 3:case 4:var c=a.stateNode.containerInfo,h=Wm(e);ch(e,h,c);break;default:throw Error(me(161))}}catch(u){mt(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Lw(e,t,n){je=e,fy(e)}function fy(e,t,n){for(var a=(e.mode&1)!==0;je!==null;){var o=je,l=o.child;if(o.tag===22&&a){var c=o.memoizedState!==null||kl;if(!c){var h=o.alternate,u=h!==null&&h.memoizedState!==null||Bt;h=kl;var m=Bt;if(kl=c,(Bt=u)&&!m)for(je=o;je!==null;)c=je,u=c.child,c.tag===22&&c.memoizedState!==null?qm(o):u!==null?(u.return=c,je=u):qm(o);for(;l!==null;)je=l,fy(l),l=l.sibling;je=o,kl=h,Bt=m}Zm(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,je=l):Zm(e)}}function Zm(e){for(;je!==null;){var t=je;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Bt||Rc(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!Bt)if(n===null)a.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Wn(t.type,n.memoizedProps);a.componentDidUpdate(o,n.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Pm(t,l,a);break;case 3:var c=t.updateQueue;if(c!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Pm(t,c,n)}break;case 5:var h=t.stateNode;if(n===null&&t.flags&4){n=h;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var m=t.alternate;if(m!==null){var g=m.memoizedState;if(g!==null){var x=g.dehydrated;x!==null&&hs(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(me(163))}Bt||t.flags&512&&lh(t)}catch(v){mt(t,t.return,v)}}if(t===e){je=null;break}if(n=t.sibling,n!==null){n.return=t.return,je=n;break}je=t.return}}function $m(e){for(;je!==null;){var t=je;if(t===e){je=null;break}var n=t.sibling;if(n!==null){n.return=t.return,je=n;break}je=t.return}}function qm(e){for(;je!==null;){var t=je;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Rc(4,t)}catch(u){mt(t,n,u)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var o=t.return;try{a.componentDidMount()}catch(u){mt(t,o,u)}}var l=t.return;try{lh(t)}catch(u){mt(t,l,u)}break;case 5:var c=t.return;try{lh(t)}catch(u){mt(t,c,u)}}}catch(u){mt(t,t.return,u)}if(t===e){je=null;break}var h=t.sibling;if(h!==null){h.return=t.return,je=h;break}je=t.return}}var Mw=Math.ceil,pc=Hr.ReactCurrentDispatcher,Sp=Hr.ReactCurrentOwner,En=Hr.ReactCurrentBatchConfig,Ke=0,Et=null,jt=null,Tt=0,fn=0,Oa=ji(0),St=0,js=null,Qi=0,Oc=0,Np=0,rs=null,rn=null,Cp=0,eo=1/0,Er=null,fc=!1,uh=null,pi=null,Sl=!1,oi=null,mc=0,is=0,hh=null,Ul=-1,Wl=0;function Kt(){return Ke&6?xt():Ul!==-1?Ul:Ul=xt()}function fi(e){return e.mode&1?Ke&2&&Tt!==0?Tt&-Tt:mw.transition!==null?(Wl===0&&(Wl=J0()),Wl):(e=tt,e!==0||(e=window.event,e=e===void 0?16:ax(e.type)),e):1}function Vn(e,t,n,a){if(50<is)throw is=0,hh=null,Error(me(185));As(e,n,a),(!(Ke&2)||e!==Et)&&(e===Et&&(!(Ke&2)&&(Oc|=n),St===4&&ii(e,Tt)),ln(e,a),n===1&&Ke===0&&!(t.mode&1)&&(eo=xt()+500,Tc&&ki()))}function ln(e,t){var n=e.callbackNode;mb(e,t);var a=Jl(e,e===Et?Tt:0);if(a===0)n!==null&&tm(n),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(n!=null&&tm(n),t===1)e.tag===0?fw(Vm.bind(null,e)):kx(Vm.bind(null,e)),dw(function(){!(Ke&6)&&ki()}),n=null;else{switch(X0(a)){case 1:n=Xh;break;case 4:n=Y0;break;case 16:n=Ql;break;case 536870912:n=Q0;break;default:n=Ql}n=_y(n,my.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function my(e,t){if(Ul=-1,Wl=0,Ke&6)throw Error(me(327));var n=e.callbackNode;if(Za()&&e.callbackNode!==n)return null;var a=Jl(e,e===Et?Tt:0);if(a===0)return null;if(a&30||a&e.expiredLanes||t)t=gc(e,a);else{t=a;var o=Ke;Ke|=2;var l=xy();(Et!==e||Tt!==t)&&(Er=null,eo=xt()+500,Hi(e,t));do try{Iw();break}catch(h){gy(e,h)}while(!0);hp(),pc.current=l,Ke=o,jt!==null?t=0:(Et=null,Tt=0,t=St)}if(t!==0){if(t===2&&(o=Fu(e),o!==0&&(a=o,t=ph(e,o))),t===1)throw n=js,Hi(e,0),ii(e,a),ln(e,xt()),n;if(t===6)ii(e,a);else{if(o=e.current.alternate,!(a&30)&&!Tw(o)&&(t=gc(e,a),t===2&&(l=Fu(e),l!==0&&(a=l,t=ph(e,l))),t===1))throw n=js,Hi(e,0),ii(e,a),ln(e,xt()),n;switch(e.finishedWork=o,e.finishedLanes=a,t){case 0:case 1:throw Error(me(345));case 2:Ii(e,rn,Er);break;case 3:if(ii(e,a),(a&130023424)===a&&(t=Cp+500-xt(),10<t)){if(Jl(e,0)!==0)break;if(o=e.suspendedLanes,(o&a)!==a){Kt(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Vu(Ii.bind(null,e,rn,Er),t);break}Ii(e,rn,Er);break;case 4:if(ii(e,a),(a&4194240)===a)break;for(t=e.eventTimes,o=-1;0<a;){var c=31-qn(a);l=1<<c,c=t[c],c>o&&(o=c),a&=~l}if(a=o,a=xt()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Mw(a/1960))-a,10<a){e.timeoutHandle=Vu(Ii.bind(null,e,rn,Er),a);break}Ii(e,rn,Er);break;case 5:Ii(e,rn,Er);break;default:throw Error(me(329))}}}return ln(e,xt()),e.callbackNode===n?my.bind(null,e):null}function ph(e,t){var n=rs;return e.current.memoizedState.isDehydrated&&(Hi(e,t).flags|=256),e=gc(e,t),e!==2&&(t=rn,rn=n,t!==null&&fh(t)),e}function fh(e){rn===null?rn=e:rn.push.apply(rn,e)}function Tw(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var a=0;a<n.length;a++){var o=n[a],l=o.getSnapshot;o=o.value;try{if(!Kn(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ii(e,t){for(t&=~Np,t&=~Oc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-qn(t),a=1<<n;e[n]=-1,t&=~a}}function Vm(e){if(Ke&6)throw Error(me(327));Za();var t=Jl(e,0);if(!(t&1))return ln(e,xt()),null;var n=gc(e,t);if(e.tag!==0&&n===2){var a=Fu(e);a!==0&&(t=a,n=ph(e,a))}if(n===1)throw n=js,Hi(e,0),ii(e,t),ln(e,xt()),n;if(n===6)throw Error(me(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ii(e,rn,Er),ln(e,xt()),null}function Pp(e,t){var n=Ke;Ke|=1;try{return e(t)}finally{Ke=n,Ke===0&&(eo=xt()+500,Tc&&ki())}}function Ji(e){oi!==null&&oi.tag===0&&!(Ke&6)&&Za();var t=Ke;Ke|=1;var n=En.transition,a=tt;try{if(En.transition=null,tt=1,e)return e()}finally{tt=a,En.transition=n,Ke=t,!(Ke&6)&&ki()}}function zp(){fn=Oa.current,lt(Oa)}function Hi(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,cw(n)),jt!==null)for(n=jt.return;n!==null;){var a=n;switch(cp(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&rc();break;case 3:Ja(),lt(on),lt(Wt),yp();break;case 5:xp(a);break;case 4:Ja();break;case 13:lt(ht);break;case 19:lt(ht);break;case 10:pp(a.type._context);break;case 22:case 23:zp()}n=n.return}if(Et=e,jt=e=mi(e.current,null),Tt=fn=t,St=0,js=null,Np=Oc=Qi=0,rn=rs=null,Fi!==null){for(t=0;t<Fi.length;t++)if(n=Fi[t],a=n.interleaved,a!==null){n.interleaved=null;var o=a.next,l=n.pending;if(l!==null){var c=l.next;l.next=o,a.next=c}n.pending=a}Fi=null}return e}function gy(e,t){do{var n=jt;try{if(hp(),Bl.current=hc,uc){for(var a=pt.memoizedState;a!==null;){var o=a.queue;o!==null&&(o.pending=null),a=a.next}uc=!1}if(Yi=0,zt=kt=pt=null,ts=!1,bs=0,Sp.current=null,n===null||n.return===null){St=1,js=t,jt=null;break}e:{var l=e,c=n.return,h=n,u=t;if(t=Tt,h.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var m=u,g=h,x=g.tag;if(!(g.mode&1)&&(x===0||x===11||x===15)){var v=g.alternate;v?(g.updateQueue=v.updateQueue,g.memoizedState=v.memoizedState,g.lanes=v.lanes):(g.updateQueue=null,g.memoizedState=null)}var b=Am(c);if(b!==null){b.flags&=-257,Im(b,c,h,l,t),b.mode&1&&Tm(l,m,t),t=b,u=m;var _=t.updateQueue;if(_===null){var j=new Set;j.add(u),t.updateQueue=j}else _.add(u);break e}else{if(!(t&1)){Tm(l,m,t),Ep();break e}u=Error(me(426))}}else if(ut&&h.mode&1){var P=Am(c);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Im(P,c,h,l,t),dp(Xa(u,h));break e}}l=u=Xa(u,h),St!==4&&(St=2),rs===null?rs=[l]:rs.push(l),l=c;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var N=Xx(l,u,t);Cm(l,N);break e;case 1:h=u;var w=l.type,z=l.stateNode;if(!(l.flags&128)&&(typeof w.getDerivedStateFromError=="function"||z!==null&&typeof z.componentDidCatch=="function"&&(pi===null||!pi.has(z)))){l.flags|=65536,t&=-t,l.lanes|=t;var C=ey(l,h,t);Cm(l,C);break e}}l=l.return}while(l!==null)}vy(n)}catch(I){t=I,jt===n&&n!==null&&(jt=n=n.return);continue}break}while(!0)}function xy(){var e=pc.current;return pc.current=hc,e===null?hc:e}function Ep(){(St===0||St===3||St===2)&&(St=4),Et===null||!(Qi&268435455)&&!(Oc&268435455)||ii(Et,Tt)}function gc(e,t){var n=Ke;Ke|=2;var a=xy();(Et!==e||Tt!==t)&&(Er=null,Hi(e,t));do try{Aw();break}catch(o){gy(e,o)}while(!0);if(hp(),Ke=n,pc.current=a,jt!==null)throw Error(me(261));return Et=null,Tt=0,St}function Aw(){for(;jt!==null;)yy(jt)}function Iw(){for(;jt!==null&&!ob();)yy(jt)}function yy(e){var t=wy(e.alternate,e,fn);e.memoizedProps=e.pendingProps,t===null?vy(e):jt=t,Sp.current=null}function vy(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Pw(n,t),n!==null){n.flags&=32767,jt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{St=6,jt=null;return}}else if(n=Cw(n,t,fn),n!==null){jt=n;return}if(t=t.sibling,t!==null){jt=t;return}jt=t=e}while(t!==null);St===0&&(St=5)}function Ii(e,t,n){var a=tt,o=En.transition;try{En.transition=null,tt=1,Rw(e,t,n,a)}finally{En.transition=o,tt=a}return null}function Rw(e,t,n,a){do Za();while(oi!==null);if(Ke&6)throw Error(me(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(me(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(gb(e,l),e===Et&&(jt=Et=null,Tt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Sl||(Sl=!0,_y(Ql,function(){return Za(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=En.transition,En.transition=null;var c=tt;tt=1;var h=Ke;Ke|=4,Sp.current=null,Ew(e,n),py(n,e),nw($u),Xl=!!Zu,$u=Zu=null,e.current=n,Lw(n),sb(),Ke=h,tt=c,En.transition=l}else e.current=n;if(Sl&&(Sl=!1,oi=e,mc=o),l=e.pendingLanes,l===0&&(pi=null),db(n.stateNode),ln(e,xt()),t!==null)for(a=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],a(o.value,{componentStack:o.stack,digest:o.digest});if(fc)throw fc=!1,e=uh,uh=null,e;return mc&1&&e.tag!==0&&Za(),l=e.pendingLanes,l&1?e===hh?is++:(is=0,hh=e):is=0,ki(),null}function Za(){if(oi!==null){var e=X0(mc),t=En.transition,n=tt;try{if(En.transition=null,tt=16>e?16:e,oi===null)var a=!1;else{if(e=oi,oi=null,mc=0,Ke&6)throw Error(me(331));var o=Ke;for(Ke|=4,je=e.current;je!==null;){var l=je,c=l.child;if(je.flags&16){var h=l.deletions;if(h!==null){for(var u=0;u<h.length;u++){var m=h[u];for(je=m;je!==null;){var g=je;switch(g.tag){case 0:case 11:case 15:ns(8,g,l)}var x=g.child;if(x!==null)x.return=g,je=x;else for(;je!==null;){g=je;var v=g.sibling,b=g.return;if(dy(g),g===m){je=null;break}if(v!==null){v.return=b,je=v;break}je=b}}}var _=l.alternate;if(_!==null){var j=_.child;if(j!==null){_.child=null;do{var P=j.sibling;j.sibling=null,j=P}while(j!==null)}}je=l}}if(l.subtreeFlags&2064&&c!==null)c.return=l,je=c;else e:for(;je!==null;){if(l=je,l.flags&2048)switch(l.tag){case 0:case 11:case 15:ns(9,l,l.return)}var N=l.sibling;if(N!==null){N.return=l.return,je=N;break e}je=l.return}}var w=e.current;for(je=w;je!==null;){c=je;var z=c.child;if(c.subtreeFlags&2064&&z!==null)z.return=c,je=z;else e:for(c=w;je!==null;){if(h=je,h.flags&2048)try{switch(h.tag){case 0:case 11:case 15:Rc(9,h)}}catch(I){mt(h,h.return,I)}if(h===c){je=null;break e}var C=h.sibling;if(C!==null){C.return=h.return,je=C;break e}je=h.return}}if(Ke=o,ki(),or&&typeof or.onPostCommitFiberRoot=="function")try{or.onPostCommitFiberRoot(Pc,e)}catch{}a=!0}return a}finally{tt=n,En.transition=t}}return!1}function Gm(e,t,n){t=Xa(n,t),t=Xx(e,t,1),e=hi(e,t,1),t=Kt(),e!==null&&(As(e,1,t),ln(e,t))}function mt(e,t,n){if(e.tag===3)Gm(e,e,n);else for(;t!==null;){if(t.tag===3){Gm(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(pi===null||!pi.has(a))){e=Xa(n,e),e=ey(t,e,1),t=hi(t,e,1),e=Kt(),t!==null&&(As(t,1,e),ln(t,e));break}}t=t.return}}function Ow(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),t=Kt(),e.pingedLanes|=e.suspendedLanes&n,Et===e&&(Tt&n)===n&&(St===4||St===3&&(Tt&130023424)===Tt&&500>xt()-Cp?Hi(e,0):Np|=n),ln(e,t)}function by(e,t){t===0&&(e.mode&1?(t=ml,ml<<=1,!(ml&130023424)&&(ml=4194304)):t=1);var n=Kt();e=Ur(e,t),e!==null&&(As(e,t,n),ln(e,n))}function Bw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),by(e,n)}function Fw(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(me(314))}a!==null&&a.delete(t),by(e,n)}var wy;wy=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||on.current)an=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return an=!1,Nw(e,t,n);an=!!(e.flags&131072)}else an=!1,ut&&t.flags&1048576&&Sx(t,oc,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;Dl(e,t),e=t.pendingProps;var o=Ka(t,Wt.current);Ha(t,n),o=bp(null,t,a,e,o,n);var l=wp();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,sn(a)?(l=!0,ic(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,mp(t),o.updater=Ic,t.stateNode=o,o._reactInternals=t,eh(t,a,e,n),t=rh(null,t,a,!0,l,n)):(t.tag=0,ut&&l&&lp(t),Vt(null,t,o,n),t=t.child),t;case 16:a=t.elementType;e:{switch(Dl(e,t),e=t.pendingProps,o=a._init,a=o(a._payload),t.type=a,o=t.tag=Uw(a),e=Wn(a,e),o){case 0:t=nh(null,t,a,e,n);break e;case 1:t=Bm(null,t,a,e,n);break e;case 11:t=Rm(null,t,a,e,n);break e;case 14:t=Om(null,t,a,Wn(a.type,e),n);break e}throw Error(me(306,a,""))}return t;case 0:return a=t.type,o=t.pendingProps,o=t.elementType===a?o:Wn(a,o),nh(e,t,a,o,n);case 1:return a=t.type,o=t.pendingProps,o=t.elementType===a?o:Wn(a,o),Bm(e,t,a,o,n);case 3:e:{if(iy(t),e===null)throw Error(me(387));a=t.pendingProps,l=t.memoizedState,o=l.element,Lx(e,t),cc(t,a,null,n);var c=t.memoizedState;if(a=c.element,l.isDehydrated)if(l={element:a,isDehydrated:!1,cache:c.cache,pendingSuspenseBoundaries:c.pendingSuspenseBoundaries,transitions:c.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=Xa(Error(me(423)),t),t=Fm(e,t,a,n,o);break e}else if(a!==o){o=Xa(Error(me(424)),t),t=Fm(e,t,a,n,o);break e}else for(gn=ui(t.stateNode.containerInfo.firstChild),xn=t,ut=!0,$n=null,n=zx(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ya(),a===o){t=Wr(e,t,n);break e}Vt(e,t,a,n)}t=t.child}return t;case 5:return Mx(t),e===null&&Qu(t),a=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,c=o.children,qu(a,o)?c=null:l!==null&&qu(a,l)&&(t.flags|=32),ry(e,t),Vt(e,t,c,n),t.child;case 6:return e===null&&Qu(t),null;case 13:return ay(e,t,n);case 4:return gp(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Qa(t,null,a,n):Vt(e,t,a,n),t.child;case 11:return a=t.type,o=t.pendingProps,o=t.elementType===a?o:Wn(a,o),Rm(e,t,a,o,n);case 7:return Vt(e,t,t.pendingProps,n),t.child;case 8:return Vt(e,t,t.pendingProps.children,n),t.child;case 12:return Vt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(a=t.type._context,o=t.pendingProps,l=t.memoizedProps,c=o.value,it(sc,a._currentValue),a._currentValue=c,l!==null)if(Kn(l.value,c)){if(l.children===o.children&&!on.current){t=Wr(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var h=l.dependencies;if(h!==null){c=l.child;for(var u=h.firstContext;u!==null;){if(u.context===a){if(l.tag===1){u=Ar(-1,n&-n),u.tag=2;var m=l.updateQueue;if(m!==null){m=m.shared;var g=m.pending;g===null?u.next=u:(u.next=g.next,g.next=u),m.pending=u}}l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),Ju(l.return,n,t),h.lanes|=n;break}u=u.next}}else if(l.tag===10)c=l.type===t.type?null:l.child;else if(l.tag===18){if(c=l.return,c===null)throw Error(me(341));c.lanes|=n,h=c.alternate,h!==null&&(h.lanes|=n),Ju(c,n,t),c=l.sibling}else c=l.child;if(c!==null)c.return=l;else for(c=l;c!==null;){if(c===t){c=null;break}if(l=c.sibling,l!==null){l.return=c.return,c=l;break}c=c.return}l=c}Vt(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,a=t.pendingProps.children,Ha(t,n),o=Mn(o),a=a(o),t.flags|=1,Vt(e,t,a,n),t.child;case 14:return a=t.type,o=Wn(a,t.pendingProps),o=Wn(a.type,o),Om(e,t,a,o,n);case 15:return ty(e,t,t.type,t.pendingProps,n);case 17:return a=t.type,o=t.pendingProps,o=t.elementType===a?o:Wn(a,o),Dl(e,t),t.tag=1,sn(a)?(e=!0,ic(t)):e=!1,Ha(t,n),Jx(t,a,o),eh(t,a,o,n),rh(null,t,a,!0,e,n);case 19:return oy(e,t,n);case 22:return ny(e,t,n)}throw Error(me(156,t.tag))};function _y(e,t){return K0(e,t)}function Dw(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zn(e,t,n,a){return new Dw(e,t,n,a)}function Lp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Uw(e){if(typeof e=="function")return Lp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Yh)return 11;if(e===Qh)return 14}return 2}function mi(e,t){var n=e.alternate;return n===null?(n=zn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Hl(e,t,n,a,o,l){var c=2;if(a=e,typeof e=="function")Lp(e)&&(c=1);else if(typeof e=="string")c=5;else e:switch(e){case Ca:return Zi(n.children,o,l,t);case Kh:c=8,o|=8;break;case ku:return e=zn(12,n,t,o|2),e.elementType=ku,e.lanes=l,e;case Su:return e=zn(13,n,t,o),e.elementType=Su,e.lanes=l,e;case Nu:return e=zn(19,n,t,o),e.elementType=Nu,e.lanes=l,e;case M0:return Bc(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case E0:c=10;break e;case L0:c=9;break e;case Yh:c=11;break e;case Qh:c=14;break e;case ti:c=16,a=null;break e}throw Error(me(130,e==null?e:typeof e,""))}return t=zn(c,n,t,o),t.elementType=e,t.type=a,t.lanes=l,t}function Zi(e,t,n,a){return e=zn(7,e,a,t),e.lanes=n,e}function Bc(e,t,n,a){return e=zn(22,e,a,t),e.elementType=M0,e.lanes=n,e.stateNode={isHidden:!1},e}function eu(e,t,n){return e=zn(6,e,null,t),e.lanes=n,e}function tu(e,t,n){return t=zn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ww(e,t,n,a,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Id(0),this.expirationTimes=Id(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Id(0),this.identifierPrefix=a,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Mp(e,t,n,a,o,l,c,h,u){return e=new Ww(e,t,n,h,u),t===1?(t=1,l===!0&&(t|=8)):t=0,l=zn(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:a,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mp(l),e}function Hw(e,t,n){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Na,key:a==null?null:""+a,children:e,containerInfo:t,implementation:n}}function jy(e){if(!e)return yi;e=e._reactInternals;e:{if(sa(e)!==e||e.tag!==1)throw Error(me(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(sn(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(me(171))}if(e.tag===1){var n=e.type;if(sn(n))return jx(e,n,t)}return t}function ky(e,t,n,a,o,l,c,h,u){return e=Mp(n,a,!0,e,o,l,c,h,u),e.context=jy(null),n=e.current,a=Kt(),o=fi(n),l=Ar(a,o),l.callback=t??null,hi(n,l,o),e.current.lanes=o,As(e,o,a),ln(e,a),e}function Fc(e,t,n,a){var o=t.current,l=Kt(),c=fi(o);return n=jy(n),t.context===null?t.context=n:t.pendingContext=n,t=Ar(l,c),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=hi(o,t,c),e!==null&&(Vn(e,o,c,l),Ol(e,o,c)),c}function xc(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Km(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Tp(e,t){Km(e,t),(e=e.alternate)&&Km(e,t)}function Zw(){return null}var Sy=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ap(e){this._internalRoot=e}Dc.prototype.render=Ap.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(me(409));Fc(e,t,null,null)};Dc.prototype.unmount=Ap.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ji(function(){Fc(null,e,null,null)}),t[Dr]=null}};function Dc(e){this._internalRoot=e}Dc.prototype.unstable_scheduleHydration=function(e){if(e){var t=nx();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ri.length&&t!==0&&t<ri[n].priority;n++);ri.splice(n,0,e),n===0&&ix(e)}};function Ip(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Uc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ym(){}function $w(e,t,n,a,o){if(o){if(typeof a=="function"){var l=a;a=function(){var m=xc(c);l.call(m)}}var c=ky(t,a,e,0,null,!1,!1,"",Ym);return e._reactRootContainer=c,e[Dr]=c.current,ms(e.nodeType===8?e.parentNode:e),Ji(),c}for(;o=e.lastChild;)e.removeChild(o);if(typeof a=="function"){var h=a;a=function(){var m=xc(u);h.call(m)}}var u=Mp(e,0,!1,null,null,!1,!1,"",Ym);return e._reactRootContainer=u,e[Dr]=u.current,ms(e.nodeType===8?e.parentNode:e),Ji(function(){Fc(t,u,n,a)}),u}function Wc(e,t,n,a,o){var l=n._reactRootContainer;if(l){var c=l;if(typeof o=="function"){var h=o;o=function(){var u=xc(c);h.call(u)}}Fc(t,c,e,o)}else c=$w(n,t,e,o,a);return xc(c)}ex=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=qo(t.pendingLanes);n!==0&&(ep(t,n|1),ln(t,xt()),!(Ke&6)&&(eo=xt()+500,ki()))}break;case 13:Ji(function(){var a=Ur(e,1);if(a!==null){var o=Kt();Vn(a,e,1,o)}}),Tp(e,1)}};tp=function(e){if(e.tag===13){var t=Ur(e,134217728);if(t!==null){var n=Kt();Vn(t,e,134217728,n)}Tp(e,134217728)}};tx=function(e){if(e.tag===13){var t=fi(e),n=Ur(e,t);if(n!==null){var a=Kt();Vn(n,e,t,a)}Tp(e,t)}};nx=function(){return tt};rx=function(e,t){var n=tt;try{return tt=e,t()}finally{tt=n}};Ru=function(e,t,n){switch(t){case"input":if(zu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var o=Mc(a);if(!o)throw Error(me(90));A0(a),zu(a,o)}}}break;case"textarea":R0(e,n);break;case"select":t=n.value,t!=null&&Fa(e,!!n.multiple,t,!1)}};H0=Pp;Z0=Ji;var qw={usingClientEntryPoint:!1,Events:[Rs,La,Mc,U0,W0,Pp]},Io={findFiberByHostInstance:Bi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Vw={bundleType:Io.bundleType,version:Io.version,rendererPackageName:Io.rendererPackageName,rendererConfig:Io.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Hr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=V0(e),e===null?null:e.stateNode},findFiberByHostInstance:Io.findFiberByHostInstance||Zw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nl.isDisabled&&Nl.supportsFiber)try{Pc=Nl.inject(Vw),or=Nl}catch{}}vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qw;vn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ip(t))throw Error(me(200));return Hw(e,t,null,n)};vn.createRoot=function(e,t){if(!Ip(e))throw Error(me(299));var n=!1,a="",o=Sy;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Mp(e,1,!1,null,null,n,!1,a,o),e[Dr]=t.current,ms(e.nodeType===8?e.parentNode:e),new Ap(t)};vn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(me(188)):(e=Object.keys(e).join(","),Error(me(268,e)));return e=V0(t),e=e===null?null:e.stateNode,e};vn.flushSync=function(e){return Ji(e)};vn.hydrate=function(e,t,n){if(!Uc(t))throw Error(me(200));return Wc(null,e,t,!0,n)};vn.hydrateRoot=function(e,t,n){if(!Ip(e))throw Error(me(405));var a=n!=null&&n.hydratedSources||null,o=!1,l="",c=Sy;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(c=n.onRecoverableError)),t=ky(t,null,e,1,n??null,o,!1,l,c),e[Dr]=t.current,ms(e),a)for(e=0;e<a.length;e++)n=a[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Dc(t)};vn.render=function(e,t,n){if(!Uc(t))throw Error(me(200));return Wc(null,e,t,!1,n)};vn.unmountComponentAtNode=function(e){if(!Uc(e))throw Error(me(40));return e._reactRootContainer?(Ji(function(){Wc(null,null,e,!1,function(){e._reactRootContainer=null,e[Dr]=null})}),!0):!1};vn.unstable_batchedUpdates=Pp;vn.unstable_renderSubtreeIntoContainer=function(e,t,n,a){if(!Uc(n))throw Error(me(200));if(e==null||e._reactInternals===void 0)throw Error(me(38));return Wc(e,t,n,!1,a)};vn.version="18.3.1-next-f1338f8080-20240426";function Ny(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ny)}catch(e){console.error(e)}}Ny(),N0.exports=vn;var uo=N0.exports;const Gw=Uh(uo),Kw=f0({__proto__:null,default:Gw},[uo]);var Qm=uo;_u.createRoot=Qm.createRoot,_u.hydrateRoot=Qm.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function dt(){return dt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},dt.apply(this,arguments)}var _t;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(_t||(_t={}));const Jm="popstate";function Yw(e){e===void 0&&(e={});function t(a,o){let{pathname:l,search:c,hash:h}=a.location;return ks("",{pathname:l,search:c,hash:h},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(a,o){return typeof o=="string"?o:ea(o)}return Jw(t,n,null,e)}function Oe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Xi(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Qw(){return Math.random().toString(36).substr(2,8)}function Xm(e,t){return{usr:e.state,key:e.key,idx:t}}function ks(e,t,n,a){return n===void 0&&(n=null),dt({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Si(t):t,{state:n,key:t&&t.key||a||Qw()})}function ea(e){let{pathname:t="/",search:n="",hash:a=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),a&&a!=="#"&&(t+=a.charAt(0)==="#"?a:"#"+a),t}function Si(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let a=e.indexOf("?");a>=0&&(t.search=e.substr(a),e=e.substr(0,a)),e&&(t.pathname=e)}return t}function Jw(e,t,n,a){a===void 0&&(a={});let{window:o=document.defaultView,v5Compat:l=!1}=a,c=o.history,h=_t.Pop,u=null,m=g();m==null&&(m=0,c.replaceState(dt({},c.state,{idx:m}),""));function g(){return(c.state||{idx:null}).idx}function x(){h=_t.Pop;let P=g(),N=P==null?null:P-m;m=P,u&&u({action:h,location:j.location,delta:N})}function v(P,N){h=_t.Push;let w=ks(j.location,P,N);m=g()+1;let z=Xm(w,m),C=j.createHref(w);try{c.pushState(z,"",C)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;o.location.assign(C)}l&&u&&u({action:h,location:j.location,delta:1})}function b(P,N){h=_t.Replace;let w=ks(j.location,P,N);m=g();let z=Xm(w,m),C=j.createHref(w);c.replaceState(z,"",C),l&&u&&u({action:h,location:j.location,delta:0})}function _(P){let N=o.location.origin!=="null"?o.location.origin:o.location.href,w=typeof P=="string"?P:ea(P);return w=w.replace(/ $/,"%20"),Oe(N,"No window.location.(origin|href) available to create URL for href: "+w),new URL(w,N)}let j={get action(){return h},get location(){return e(o,c)},listen(P){if(u)throw new Error("A history only accepts one active listener");return o.addEventListener(Jm,x),u=P,()=>{o.removeEventListener(Jm,x),u=null}},createHref(P){return t(o,P)},createURL:_,encodeLocation(P){let N=_(P);return{pathname:N.pathname,search:N.search,hash:N.hash}},push:v,replace:b,go(P){return c.go(P)}};return j}var et;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(et||(et={}));const Xw=new Set(["lazy","caseSensitive","path","id","index","children"]);function e_(e){return e.index===!0}function yc(e,t,n,a){return n===void 0&&(n=[]),a===void 0&&(a={}),e.map((o,l)=>{let c=[...n,String(l)],h=typeof o.id=="string"?o.id:c.join("-");if(Oe(o.index!==!0||!o.children,"Cannot specify children on an index route"),Oe(!a[h],'Found a route id collision on id "'+h+`".  Route id's must be globally unique within Data Router usages`),e_(o)){let u=dt({},o,t(o),{id:h});return a[h]=u,u}else{let u=dt({},o,t(o),{id:h,children:void 0});return a[h]=u,o.children&&(u.children=yc(o.children,t,c,a)),u}})}function Ri(e,t,n){return n===void 0&&(n="/"),Zl(e,t,n,!1)}function Zl(e,t,n,a){let o=typeof t=="string"?Si(t):t,l=vi(o.pathname||"/",n);if(l==null)return null;let c=Cy(e);n_(c);let h=null;for(let u=0;h==null&&u<c.length;++u){let m=p_(l);h=u_(c[u],m,a)}return h}function t_(e,t){let{route:n,pathname:a,params:o}=e;return{id:n.id,pathname:a,params:o,data:t[n.id],handle:n.handle}}function Cy(e,t,n,a){t===void 0&&(t=[]),n===void 0&&(n=[]),a===void 0&&(a="");let o=(l,c,h)=>{let u={relativePath:h===void 0?l.path||"":h,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};u.relativePath.startsWith("/")&&(Oe(u.relativePath.startsWith(a),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(a.length));let m=Ir([a,u.relativePath]),g=n.concat(u);l.children&&l.children.length>0&&(Oe(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+m+'".')),Cy(l.children,t,g,m)),!(l.path==null&&!l.index)&&t.push({path:m,score:c_(m,l.index),routesMeta:g})};return e.forEach((l,c)=>{var h;if(l.path===""||!((h=l.path)!=null&&h.includes("?")))o(l,c);else for(let u of Py(l.path))o(l,c,u)}),t}function Py(e){let t=e.split("/");if(t.length===0)return[];let[n,...a]=t,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(a.length===0)return o?[l,""]:[l];let c=Py(a.join("/")),h=[];return h.push(...c.map(u=>u===""?l:[l,u].join("/"))),o&&h.push(...c),h.map(u=>e.startsWith("/")&&u===""?"/":u)}function n_(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:d_(t.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}const r_=/^:[\w-]+$/,i_=3,a_=2,o_=1,s_=10,l_=-2,eg=e=>e==="*";function c_(e,t){let n=e.split("/"),a=n.length;return n.some(eg)&&(a+=l_),t&&(a+=a_),n.filter(o=>!eg(o)).reduce((o,l)=>o+(r_.test(l)?i_:l===""?o_:s_),a)}function d_(e,t){return e.length===t.length&&e.slice(0,-1).every((a,o)=>a===t[o])?e[e.length-1]-t[t.length-1]:0}function u_(e,t,n){n===void 0&&(n=!1);let{routesMeta:a}=e,o={},l="/",c=[];for(let h=0;h<a.length;++h){let u=a[h],m=h===a.length-1,g=l==="/"?t:t.slice(l.length)||"/",x=tg({path:u.relativePath,caseSensitive:u.caseSensitive,end:m},g),v=u.route;if(!x&&m&&n&&!a[a.length-1].route.index&&(x=tg({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},g)),!x)return null;Object.assign(o,x.params),c.push({params:o,pathname:Ir([l,x.pathname]),pathnameBase:x_(Ir([l,x.pathnameBase])),route:v}),x.pathnameBase!=="/"&&(l=Ir([l,x.pathnameBase]))}return c}function tg(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=h_(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let l=o[0],c=l.replace(/(.)\/+$/,"$1"),h=o.slice(1);return{params:a.reduce((m,g,x)=>{let{paramName:v,isOptional:b}=g;if(v==="*"){let j=h[x]||"";c=l.slice(0,l.length-j.length).replace(/(.)\/+$/,"$1")}const _=h[x];return b&&!_?m[v]=void 0:m[v]=(_||"").replace(/%2F/g,"/"),m},{}),pathname:l,pathnameBase:c,pattern:e}}function h_(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Xi(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let a=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,h,u)=>(a.push({paramName:h,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),a]}function p_(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Xi(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function vi(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=e.charAt(n);return a&&a!=="/"?null:e.slice(n)||"/"}const f_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,m_=e=>f_.test(e);function g_(e,t){t===void 0&&(t="/");let{pathname:n,search:a="",hash:o=""}=typeof e=="string"?Si(e):e,l;if(n)if(m_(n))l=n;else{if(n.includes("//")){let c=n;n=n.replace(/\/\/+/g,"/"),Xi(!1,"Pathnames cannot have embedded double slashes - normalizing "+(c+" -> "+n))}n.startsWith("/")?l=ng(n.substring(1),"/"):l=ng(n,t)}else l=t;return{pathname:l,search:y_(a),hash:v_(o)}}function ng(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function nu(e,t,n,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function zy(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Hc(e,t){let n=zy(e);return t?n.map((a,o)=>o===n.length-1?a.pathname:a.pathnameBase):n.map(a=>a.pathnameBase)}function Zc(e,t,n,a){a===void 0&&(a=!1);let o;typeof e=="string"?o=Si(e):(o=dt({},e),Oe(!o.pathname||!o.pathname.includes("?"),nu("?","pathname","search",o)),Oe(!o.pathname||!o.pathname.includes("#"),nu("#","pathname","hash",o)),Oe(!o.search||!o.search.includes("#"),nu("#","search","hash",o)));let l=e===""||o.pathname==="",c=l?"/":o.pathname,h;if(c==null)h=n;else{let x=t.length-1;if(!a&&c.startsWith("..")){let v=c.split("/");for(;v[0]==="..";)v.shift(),x-=1;o.pathname=v.join("/")}h=x>=0?t[x]:"/"}let u=g_(o,h),m=c&&c!=="/"&&c.endsWith("/"),g=(l||c===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(m||g)&&(u.pathname+="/"),u}const Ir=e=>e.join("/").replace(/\/\/+/g,"/"),x_=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),y_=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,v_=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class vc{constructor(t,n,a,o){o===void 0&&(o=!1),this.status=t,this.statusText=n||"",this.internal=o,a instanceof Error?(this.data=a.toString(),this.error=a):this.data=a}}function Ss(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Ey=["post","put","patch","delete"],b_=new Set(Ey),w_=["get",...Ey],__=new Set(w_),j_=new Set([301,302,303,307,308]),k_=new Set([307,308]),ru={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},S_={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Sa={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Rp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,N_=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),Ly="remix-router-transitions";function C_(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",a=!n;Oe(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let o;if(e.mapRouteProperties)o=e.mapRouteProperties;else if(e.detectErrorBoundary){let D=e.detectErrorBoundary;o=H=>({hasErrorBoundary:D(H)})}else o=N_;let l={},c=yc(e.routes,o,void 0,l),h,u=e.basename||"/",m=e.dataStrategy||L_,g=e.patchRoutesOnNavigation,x=dt({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},e.future),v=null,b=new Set,_=null,j=null,P=null,N=e.hydrationData!=null,w=Ri(c,e.history.location,u),z=!1,C=null;if(w==null&&!g){let D=nn(404,{pathname:e.history.location.pathname}),{matches:H,route:Y}=pg(c);w=H,C={[Y.id]:D}}w&&!e.hydrationData&&Gr(w,c,e.history.location.pathname).active&&(w=null);let I;if(w)if(w.some(D=>D.route.lazy))I=!1;else if(!w.some(D=>D.route.loader))I=!0;else if(x.v7_partialHydration){let D=e.hydrationData?e.hydrationData.loaderData:null,H=e.hydrationData?e.hydrationData.errors:null;if(H){let Y=w.findIndex(oe=>H[oe.route.id]!==void 0);I=w.slice(0,Y+1).every(oe=>!gh(oe.route,D,H))}else I=w.every(Y=>!gh(Y.route,D,H))}else I=e.hydrationData!=null;else if(I=!1,w=[],x.v7_partialHydration){let D=Gr(null,c,e.history.location.pathname);D.active&&D.matches&&(z=!0,w=D.matches)}let E,k={historyAction:e.history.action,location:e.history.location,matches:w,initialized:I,navigation:ru,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||C,fetchers:new Map,blockers:new Map},B=_t.Pop,M=!1,T,W=!1,U=new Map,se=null,de=!1,he=!1,le=[],V=new Set,A=new Map,ie=0,q=-1,ce=new Map,ne=new Set,ue=new Map,$=new Map,G=new Set,F=new Map,ge=new Map,_e;function Ve(){if(v=e.history.listen(D=>{let{action:H,location:Y,delta:oe}=D;if(_e){_e(),_e=void 0;return}Xi(ge.size===0||oe!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let te=vr({currentLocation:k.location,nextLocation:Y,historyAction:H});if(te&&oe!=null){let R=new Promise(K=>{_e=K});e.history.go(oe*-1),yr(te,{state:"blocked",location:Y,proceed(){yr(te,{state:"proceeding",proceed:void 0,reset:void 0,location:Y}),R.then(()=>e.history.go(oe))},reset(){let K=new Map(k.blockers);K.set(te,Sa),Le({blockers:K})}});return}return X(H,Y)}),n){$_(t,U);let D=()=>q_(t,U);t.addEventListener("pagehide",D),se=()=>t.removeEventListener("pagehide",D)}return k.initialized||X(_t.Pop,k.location,{initialHydration:!0}),E}function Ie(){v&&v(),se&&se(),b.clear(),T&&T.abort(),k.fetchers.forEach((D,H)=>mr(H)),k.blockers.forEach((D,H)=>da(H))}function Ee(D){return b.add(D),()=>b.delete(D)}function Le(D,H){H===void 0&&(H={}),k=dt({},k,D);let Y=[],oe=[];x.v7_fetcherPersist&&k.fetchers.forEach((te,R)=>{te.state==="idle"&&(G.has(R)?oe.push(R):Y.push(R))}),G.forEach(te=>{!k.fetchers.has(te)&&!A.has(te)&&oe.push(te)}),[...b].forEach(te=>te(k,{deletedFetchers:oe,viewTransitionOpts:H.viewTransitionOpts,flushSync:H.flushSync===!0})),x.v7_fetcherPersist?(Y.forEach(te=>k.fetchers.delete(te)),oe.forEach(te=>mr(te))):oe.forEach(te=>G.delete(te))}function vt(D,H,Y){var oe,te;let{flushSync:R}=Y===void 0?{}:Y,K=k.actionData!=null&&k.navigation.formMethod!=null&&Zn(k.navigation.formMethod)&&k.navigation.state==="loading"&&((oe=D.state)==null?void 0:oe._isRedirect)!==!0,ee;H.actionData?Object.keys(H.actionData).length>0?ee=H.actionData:ee=null:K?ee=k.actionData:ee=null;let ae=H.loaderData?ug(k.loaderData,H.loaderData,H.matches||[],H.errors):k.loaderData,pe=k.blockers;pe.size>0&&(pe=new Map(pe),pe.forEach((Te,ct)=>pe.set(ct,Sa)));let be=M===!0||k.navigation.formMethod!=null&&Zn(k.navigation.formMethod)&&((te=D.state)==null?void 0:te._isRedirect)!==!0;h&&(c=h,h=void 0),de||B===_t.Pop||(B===_t.Push?e.history.push(D,D.state):B===_t.Replace&&e.history.replace(D,D.state));let Se;if(B===_t.Pop){let Te=U.get(k.location.pathname);Te&&Te.has(D.pathname)?Se={currentLocation:k.location,nextLocation:D}:U.has(D.pathname)&&(Se={currentLocation:D,nextLocation:k.location})}else if(W){let Te=U.get(k.location.pathname);Te?Te.add(D.pathname):(Te=new Set([D.pathname]),U.set(k.location.pathname,Te)),Se={currentLocation:k.location,nextLocation:D}}Le(dt({},H,{actionData:ee,loaderData:ae,historyAction:B,location:D,initialized:!0,navigation:ru,revalidation:"idle",restoreScrollPosition:_n(D,H.matches||k.matches),preventScrollReset:be,blockers:pe}),{viewTransitionOpts:Se,flushSync:R===!0}),B=_t.Pop,M=!1,W=!1,de=!1,he=!1,le=[]}async function ur(D,H){if(typeof D=="number"){e.history.go(D);return}let Y=mh(k.location,k.matches,u,x.v7_prependBasename,D,x.v7_relativeSplatPath,H==null?void 0:H.fromRouteId,H==null?void 0:H.relative),{path:oe,submission:te,error:R}=rg(x.v7_normalizeFormMethod,!1,Y,H),K=k.location,ee=ks(k.location,oe,H&&H.state);ee=dt({},ee,e.history.encodeLocation(ee));let ae=H&&H.replace!=null?H.replace:void 0,pe=_t.Push;ae===!0?pe=_t.Replace:ae===!1||te!=null&&Zn(te.formMethod)&&te.formAction===k.location.pathname+k.location.search&&(pe=_t.Replace);let be=H&&"preventScrollReset"in H?H.preventScrollReset===!0:void 0,Se=(H&&H.flushSync)===!0,Te=vr({currentLocation:K,nextLocation:ee,historyAction:pe});if(Te){yr(Te,{state:"blocked",location:ee,proceed(){yr(Te,{state:"proceeding",proceed:void 0,reset:void 0,location:ee}),ur(D,H)},reset(){let ct=new Map(k.blockers);ct.set(Te,Sa),Le({blockers:ct})}});return}return await X(pe,ee,{submission:te,pendingError:R,preventScrollReset:be,replace:H&&H.replace,enableViewTransition:H&&H.viewTransition,flushSync:Se})}function hr(){if(Zr(),Le({revalidation:"loading"}),k.navigation.state!=="submitting"){if(k.navigation.state==="idle"){X(k.historyAction,k.location,{startUninterruptedRevalidation:!0});return}X(B||k.historyAction,k.navigation.location,{overrideNavigation:k.navigation,enableViewTransition:W===!0})}}async function X(D,H,Y){T&&T.abort(),T=null,B=D,de=(Y&&Y.startUninterruptedRevalidation)===!0,Xt(k.location,k.matches),M=(Y&&Y.preventScrollReset)===!0,W=(Y&&Y.enableViewTransition)===!0;let oe=h||c,te=Y&&Y.overrideNavigation,R=Y!=null&&Y.initialHydration&&k.matches&&k.matches.length>0&&!z?k.matches:Ri(oe,H,u),K=(Y&&Y.flushSync)===!0;if(R&&k.initialized&&!he&&O_(k.location,H)&&!(Y&&Y.submission&&Zn(Y.submission.formMethod))){vt(H,{matches:R},{flushSync:K});return}let ee=Gr(R,oe,H.pathname);if(ee.active&&ee.matches&&(R=ee.matches),!R){let{error:Qe,notFoundMatches:We,route:nt}=An(H.pathname);vt(H,{matches:We,loaderData:{},errors:{[nt.id]:Qe}},{flushSync:K});return}T=new AbortController;let ae=_a(e.history,H,T.signal,Y&&Y.submission),pe;if(Y&&Y.pendingError)pe=[Oi(R).route.id,{type:et.error,error:Y.pendingError}];else if(Y&&Y.submission&&Zn(Y.submission.formMethod)){let Qe=await ye(ae,H,Y.submission,R,ee.active,{replace:Y.replace,flushSync:K});if(Qe.shortCircuited)return;if(Qe.pendingActionResult){let[We,nt]=Qe.pendingActionResult;if(mn(nt)&&Ss(nt.error)&&nt.error.status===404){T=null,vt(H,{matches:Qe.matches,loaderData:{},errors:{[We]:nt.error}});return}}R=Qe.matches||R,pe=Qe.pendingActionResult,te=iu(H,Y.submission),K=!1,ee.active=!1,ae=_a(e.history,ae.url,ae.signal)}let{shortCircuited:be,matches:Se,loaderData:Te,errors:ct}=await ve(ae,H,R,ee.active,te,Y&&Y.submission,Y&&Y.fetcherSubmission,Y&&Y.replace,Y&&Y.initialHydration===!0,K,pe);be||(T=null,vt(H,dt({matches:Se||R},hg(pe),{loaderData:Te,errors:ct})))}async function ye(D,H,Y,oe,te,R){R===void 0&&(R={}),Zr();let K=H_(H,Y);if(Le({navigation:K},{flushSync:R.flushSync===!0}),te){let pe=await wr(oe,H.pathname,D.signal);if(pe.type==="aborted")return{shortCircuited:!0};if(pe.type==="error"){let be=Oi(pe.partialMatches).route.id;return{matches:pe.partialMatches,pendingActionResult:[be,{type:et.error,error:pe.error}]}}else if(pe.matches)oe=pe.matches;else{let{notFoundMatches:be,error:Se,route:Te}=An(H.pathname);return{matches:be,pendingActionResult:[Te.id,{type:et.error,error:Se}]}}}let ee,ae=Go(oe,H);if(!ae.route.action&&!ae.route.lazy)ee={type:et.error,error:nn(405,{method:D.method,pathname:H.pathname,routeId:ae.route.id})};else if(ee=(await pr("action",k,D,[ae],oe,null))[ae.route.id],D.signal.aborted)return{shortCircuited:!0};if(Ui(ee)){let pe;return R&&R.replace!=null?pe=R.replace:pe=lg(ee.response.headers.get("Location"),new URL(D.url),u,e.history)===k.location.pathname+k.location.search,await Zt(D,ee,!0,{submission:Y,replace:pe}),{shortCircuited:!0}}if(si(ee))throw nn(400,{type:"defer-action"});if(mn(ee)){let pe=Oi(oe,ae.route.id);return(R&&R.replace)!==!0&&(B=_t.Push),{matches:oe,pendingActionResult:[pe.route.id,ee]}}return{matches:oe,pendingActionResult:[ae.route.id,ee]}}async function ve(D,H,Y,oe,te,R,K,ee,ae,pe,be){let Se=te||iu(H,R),Te=R||K||mg(Se),ct=!de&&(!x.v7_partialHydration||!ae);if(oe){if(ct){let ot=Pe(be);Le(dt({navigation:Se},ot!==void 0?{actionData:ot}:{}),{flushSync:pe})}let Fe=await wr(Y,H.pathname,D.signal);if(Fe.type==="aborted")return{shortCircuited:!0};if(Fe.type==="error"){let ot=Oi(Fe.partialMatches).route.id;return{matches:Fe.partialMatches,loaderData:{},errors:{[ot]:Fe.error}}}else if(Fe.matches)Y=Fe.matches;else{let{error:ot,notFoundMatches:jr,route:On}=An(H.pathname);return{matches:jr,loaderData:{},errors:{[On.id]:ot}}}}let Qe=h||c,[We,nt]=ag(e.history,k,Y,Te,H,x.v7_partialHydration&&ae===!0,x.v7_skipActionErrorRevalidation,he,le,V,G,ue,ne,Qe,u,be);if(In(Fe=>!(Y&&Y.some(ot=>ot.route.id===Fe))||We&&We.some(ot=>ot.route.id===Fe)),q=++ie,We.length===0&&nt.length===0){let Fe=Vr();return vt(H,dt({matches:Y,loaderData:{},errors:be&&mn(be[1])?{[be[0]]:be[1].error}:null},hg(be),Fe?{fetchers:new Map(k.fetchers)}:{}),{flushSync:pe}),{shortCircuited:!0}}if(ct){let Fe={};if(!oe){Fe.navigation=Se;let ot=Pe(be);ot!==void 0&&(Fe.actionData=ot)}nt.length>0&&(Fe.fetchers=Ge(nt)),Le(Fe,{flushSync:pe})}nt.forEach(Fe=>{pn(Fe.key),Fe.controller&&A.set(Fe.key,Fe.controller)});let en=()=>nt.forEach(Fe=>pn(Fe.key));T&&T.signal.addEventListener("abort",en);let{loaderResults:Jn,fetcherResults:It}=await fr(k,Y,We,nt,D);if(D.signal.aborted)return{shortCircuited:!0};T&&T.signal.removeEventListener("abort",en),nt.forEach(Fe=>A.delete(Fe.key));let $t=Cl(Jn);if($t)return await Zt(D,$t.result,!0,{replace:ee}),{shortCircuited:!0};if($t=Cl(It),$t)return ne.add($t.key),await Zt(D,$t.result,!0,{replace:ee}),{shortCircuited:!0};let{loaderData:xo,errors:Ci}=dg(k,Y,Jn,be,nt,It,F);F.forEach((Fe,ot)=>{Fe.subscribe(jr=>{(jr||Fe.done)&&F.delete(ot)})}),x.v7_partialHydration&&ae&&k.errors&&(Ci=dt({},k.errors,Ci));let _r=Vr(),pa=Qn(q),Kr=_r||pa||nt.length>0;return dt({matches:Y,loaderData:xo,errors:Ci},Kr?{fetchers:new Map(k.fetchers)}:{})}function Pe(D){if(D&&!mn(D[1]))return{[D[0]]:D[1].data};if(k.actionData)return Object.keys(k.actionData).length===0?null:k.actionData}function Ge(D){return D.forEach(H=>{let Y=k.fetchers.get(H.key),oe=Ro(void 0,Y?Y.data:void 0);k.fetchers.set(H.key,oe)}),new Map(k.fetchers)}function at(D,H,Y,oe){if(a)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");pn(D);let te=(oe&&oe.flushSync)===!0,R=h||c,K=mh(k.location,k.matches,u,x.v7_prependBasename,Y,x.v7_relativeSplatPath,H,oe==null?void 0:oe.relative),ee=Ri(R,K,u),ae=Gr(ee,R,K);if(ae.active&&ae.matches&&(ee=ae.matches),!ee){hn(D,H,nn(404,{pathname:K}),{flushSync:te});return}let{path:pe,submission:be,error:Se}=rg(x.v7_normalizeFormMethod,!0,K,oe);if(Se){hn(D,H,Se,{flushSync:te});return}let Te=Go(ee,pe),ct=(oe&&oe.preventScrollReset)===!0;if(be&&Zn(be.formMethod)){Ye(D,H,pe,Te,ee,ae.active,te,ct,be);return}ue.set(D,{routeId:H,path:pe}),Ct(D,H,pe,Te,ee,ae.active,te,ct,be)}async function Ye(D,H,Y,oe,te,R,K,ee,ae){Zr(),ue.delete(D);function pe(Ne){if(!Ne.route.action&&!Ne.route.lazy){let Je=nn(405,{method:ae.formMethod,pathname:Y,routeId:H});return hn(D,H,Je,{flushSync:K}),!0}return!1}if(!R&&pe(oe))return;let be=k.fetchers.get(D);Jt(D,Z_(ae,be),{flushSync:K});let Se=new AbortController,Te=_a(e.history,Y,Se.signal,ae);if(R){let Ne=await wr(te,new URL(Te.url).pathname,Te.signal,D);if(Ne.type==="aborted")return;if(Ne.type==="error"){hn(D,H,Ne.error,{flushSync:K});return}else if(Ne.matches){if(te=Ne.matches,oe=Go(te,Y),pe(oe))return}else{hn(D,H,nn(404,{pathname:Y}),{flushSync:K});return}}A.set(D,Se);let ct=ie,We=(await pr("action",k,Te,[oe],te,D))[oe.route.id];if(Te.signal.aborted){A.get(D)===Se&&A.delete(D);return}if(x.v7_fetcherPersist&&G.has(D)){if(Ui(We)||mn(We)){Jt(D,ei(void 0));return}}else{if(Ui(We))if(A.delete(D),q>ct){Jt(D,ei(void 0));return}else return ne.add(D),Jt(D,Ro(ae)),Zt(Te,We,!1,{fetcherSubmission:ae,preventScrollReset:ee});if(mn(We)){hn(D,H,We.error);return}}if(si(We))throw nn(400,{type:"defer-action"});let nt=k.navigation.location||k.location,en=_a(e.history,nt,Se.signal),Jn=h||c,It=k.navigation.state!=="idle"?Ri(Jn,k.navigation.location,u):k.matches;Oe(It,"Didn't find any matches after fetcher action");let $t=++ie;ce.set(D,$t);let xo=Ro(ae,We.data);k.fetchers.set(D,xo);let[Ci,_r]=ag(e.history,k,It,ae,nt,!1,x.v7_skipActionErrorRevalidation,he,le,V,G,ue,ne,Jn,u,[oe.route.id,We]);_r.filter(Ne=>Ne.key!==D).forEach(Ne=>{let Je=Ne.key,Pi=k.fetchers.get(Je),Yr=Ro(void 0,Pi?Pi.data:void 0);k.fetchers.set(Je,Yr),pn(Je),Ne.controller&&A.set(Je,Ne.controller)}),Le({fetchers:new Map(k.fetchers)});let pa=()=>_r.forEach(Ne=>pn(Ne.key));Se.signal.addEventListener("abort",pa);let{loaderResults:Kr,fetcherResults:Fe}=await fr(k,It,Ci,_r,en);if(Se.signal.aborted)return;Se.signal.removeEventListener("abort",pa),ce.delete(D),A.delete(D),_r.forEach(Ne=>A.delete(Ne.key));let ot=Cl(Kr);if(ot)return Zt(en,ot.result,!1,{preventScrollReset:ee});if(ot=Cl(Fe),ot)return ne.add(ot.key),Zt(en,ot.result,!1,{preventScrollReset:ee});let{loaderData:jr,errors:On}=dg(k,It,Kr,void 0,_r,Fe,F);if(k.fetchers.has(D)){let Ne=ei(We.data);k.fetchers.set(D,Ne)}Qn($t),k.navigation.state==="loading"&&$t>q?(Oe(B,"Expected pending action"),T&&T.abort(),vt(k.navigation.location,{matches:It,loaderData:jr,errors:On,fetchers:new Map(k.fetchers)})):(Le({errors:On,loaderData:ug(k.loaderData,jr,It,On),fetchers:new Map(k.fetchers)}),he=!1)}async function Ct(D,H,Y,oe,te,R,K,ee,ae){let pe=k.fetchers.get(D);Jt(D,Ro(ae,pe?pe.data:void 0),{flushSync:K});let be=new AbortController,Se=_a(e.history,Y,be.signal);if(R){let We=await wr(te,new URL(Se.url).pathname,Se.signal,D);if(We.type==="aborted")return;if(We.type==="error"){hn(D,H,We.error,{flushSync:K});return}else if(We.matches)te=We.matches,oe=Go(te,Y);else{hn(D,H,nn(404,{pathname:Y}),{flushSync:K});return}}A.set(D,be);let Te=ie,Qe=(await pr("loader",k,Se,[oe],te,D))[oe.route.id];if(si(Qe)&&(Qe=await Op(Qe,Se.signal,!0)||Qe),A.get(D)===be&&A.delete(D),!Se.signal.aborted){if(G.has(D)){Jt(D,ei(void 0));return}if(Ui(Qe))if(q>Te){Jt(D,ei(void 0));return}else{ne.add(D),await Zt(Se,Qe,!1,{preventScrollReset:ee});return}if(mn(Qe)){hn(D,H,Qe.error);return}Oe(!si(Qe),"Unhandled fetcher deferred data"),Jt(D,ei(Qe.data))}}async function Zt(D,H,Y,oe){let{submission:te,fetcherSubmission:R,preventScrollReset:K,replace:ee}=oe===void 0?{}:oe;H.response.headers.has("X-Remix-Revalidate")&&(he=!0);let ae=H.response.headers.get("Location");Oe(ae,"Expected a Location header on the redirect Response"),ae=lg(ae,new URL(D.url),u,e.history);let pe=ks(k.location,ae,{_isRedirect:!0});if(n){let We=!1;if(H.response.headers.has("X-Remix-Reload-Document"))We=!0;else if(Rp.test(ae)){const nt=e.history.createURL(ae);We=nt.origin!==t.location.origin||vi(nt.pathname,u)==null}if(We){ee?t.location.replace(ae):t.location.assign(ae);return}}T=null;let be=ee===!0||H.response.headers.has("X-Remix-Replace")?_t.Replace:_t.Push,{formMethod:Se,formAction:Te,formEncType:ct}=k.navigation;!te&&!R&&Se&&Te&&ct&&(te=mg(k.navigation));let Qe=te||R;if(k_.has(H.response.status)&&Qe&&Zn(Qe.formMethod))await X(be,pe,{submission:dt({},Qe,{formAction:ae}),preventScrollReset:K||M,enableViewTransition:Y?W:void 0});else{let We=iu(pe,te);await X(be,pe,{overrideNavigation:We,fetcherSubmission:R,preventScrollReset:K||M,enableViewTransition:Y?W:void 0})}}async function pr(D,H,Y,oe,te,R){let K,ee={};try{K=await M_(m,D,H,Y,oe,te,R,l,o)}catch(ae){return oe.forEach(pe=>{ee[pe.route.id]={type:et.error,error:ae}}),ee}for(let[ae,pe]of Object.entries(K))if(B_(pe)){let be=pe.result;ee[ae]={type:et.redirect,response:I_(be,Y,ae,te,u,x.v7_relativeSplatPath)}}else ee[ae]=await A_(pe);return ee}async function fr(D,H,Y,oe,te){let R=D.matches,K=pr("loader",D,te,Y,H,null),ee=Promise.all(oe.map(async be=>{if(be.matches&&be.match&&be.controller){let Te=(await pr("loader",D,_a(e.history,be.path,be.controller.signal),[be.match],be.matches,be.key))[be.match.route.id];return{[be.key]:Te}}else return Promise.resolve({[be.key]:{type:et.error,error:nn(404,{pathname:be.path})}})})),ae=await K,pe=(await ee).reduce((be,Se)=>Object.assign(be,Se),{});return await Promise.all([U_(H,ae,te.signal,R,D.loaderData),W_(H,pe,oe)]),{loaderResults:ae,fetcherResults:pe}}function Zr(){he=!0,le.push(...In()),ue.forEach((D,H)=>{A.has(H)&&V.add(H),pn(H)})}function Jt(D,H,Y){Y===void 0&&(Y={}),k.fetchers.set(D,H),Le({fetchers:new Map(k.fetchers)},{flushSync:(Y&&Y.flushSync)===!0})}function hn(D,H,Y,oe){oe===void 0&&(oe={});let te=Oi(k.matches,H);mr(D),Le({errors:{[te.route.id]:Y},fetchers:new Map(k.fetchers)},{flushSync:(oe&&oe.flushSync)===!0})}function $r(D){return $.set(D,($.get(D)||0)+1),G.has(D)&&G.delete(D),k.fetchers.get(D)||S_}function mr(D){let H=k.fetchers.get(D);A.has(D)&&!(H&&H.state==="loading"&&ce.has(D))&&pn(D),ue.delete(D),ce.delete(D),ne.delete(D),x.v7_fetcherPersist&&G.delete(D),V.delete(D),k.fetchers.delete(D)}function qr(D){let H=($.get(D)||0)-1;H<=0?($.delete(D),G.add(D),x.v7_fetcherPersist||mr(D)):$.set(D,H),Le({fetchers:new Map(k.fetchers)})}function pn(D){let H=A.get(D);H&&(H.abort(),A.delete(D))}function gr(D){for(let H of D){let Y=$r(H),oe=ei(Y.data);k.fetchers.set(H,oe)}}function Vr(){let D=[],H=!1;for(let Y of ne){let oe=k.fetchers.get(Y);Oe(oe,"Expected fetcher: "+Y),oe.state==="loading"&&(ne.delete(Y),D.push(Y),H=!0)}return gr(D),H}function Qn(D){let H=[];for(let[Y,oe]of ce)if(oe<D){let te=k.fetchers.get(Y);Oe(te,"Expected fetcher: "+Y),te.state==="loading"&&(pn(Y),ce.delete(Y),H.push(Y))}return gr(H),H.length>0}function xr(D,H){let Y=k.blockers.get(D)||Sa;return ge.get(D)!==H&&ge.set(D,H),Y}function da(D){k.blockers.delete(D),ge.delete(D)}function yr(D,H){let Y=k.blockers.get(D)||Sa;Oe(Y.state==="unblocked"&&H.state==="blocked"||Y.state==="blocked"&&H.state==="blocked"||Y.state==="blocked"&&H.state==="proceeding"||Y.state==="blocked"&&H.state==="unblocked"||Y.state==="proceeding"&&H.state==="unblocked","Invalid blocker state transition: "+Y.state+" -> "+H.state);let oe=new Map(k.blockers);oe.set(D,H),Le({blockers:oe})}function vr(D){let{currentLocation:H,nextLocation:Y,historyAction:oe}=D;if(ge.size===0)return;ge.size>1&&Xi(!1,"A router only supports one blocker at a time");let te=Array.from(ge.entries()),[R,K]=te[te.length-1],ee=k.blockers.get(R);if(!(ee&&ee.state==="proceeding")&&K({currentLocation:H,nextLocation:Y,historyAction:oe}))return R}function An(D){let H=nn(404,{pathname:D}),Y=h||c,{matches:oe,route:te}=pg(Y);return In(),{notFoundMatches:oe,route:te,error:H}}function In(D){let H=[];return F.forEach((Y,oe)=>{(!D||D(oe))&&(Y.cancel(),H.push(oe),F.delete(oe))}),H}function ua(D,H,Y){if(_=D,P=H,j=Y||null,!N&&k.navigation===ru){N=!0;let oe=_n(k.location,k.matches);oe!=null&&Le({restoreScrollPosition:oe})}return()=>{_=null,P=null,j=null}}function br(D,H){return j&&j(D,H.map(oe=>t_(oe,k.loaderData)))||D.key}function Xt(D,H){if(_&&P){let Y=br(D,H);_[Y]=P()}}function _n(D,H){if(_){let Y=br(D,H),oe=_[Y];if(typeof oe=="number")return oe}return null}function Gr(D,H,Y){if(g)if(D){if(Object.keys(D[0].params).length>0)return{active:!0,matches:Zl(H,Y,u,!0)}}else return{active:!0,matches:Zl(H,Y,u,!0)||[]};return{active:!1,matches:null}}async function wr(D,H,Y,oe){if(!g)return{type:"success",matches:D};let te=D;for(;;){let R=h==null,K=h||c,ee=l;try{await g({signal:Y,path:H,matches:te,fetcherKey:oe,patch:(be,Se)=>{Y.aborted||sg(be,Se,K,ee,o)}})}catch(be){return{type:"error",error:be,partialMatches:te}}finally{R&&!Y.aborted&&(c=[...c])}if(Y.aborted)return{type:"aborted"};let ae=Ri(K,H,u);if(ae)return{type:"success",matches:ae};let pe=Zl(K,H,u,!0);if(!pe||te.length===pe.length&&te.every((be,Se)=>be.route.id===pe[Se].route.id))return{type:"success",matches:null};te=pe}}function Rn(D){l={},h=yc(D,o,void 0,l)}function ha(D,H){let Y=h==null;sg(D,H,h||c,l,o),Y&&(c=[...c],Le({}))}return E={get basename(){return u},get future(){return x},get state(){return k},get routes(){return c},get window(){return t},initialize:Ve,subscribe:Ee,enableScrollRestoration:ua,navigate:ur,fetch:at,revalidate:hr,createHref:D=>e.history.createHref(D),encodeLocation:D=>e.history.encodeLocation(D),getFetcher:$r,deleteFetcher:qr,dispose:Ie,getBlocker:xr,deleteBlocker:da,patchRoutes:ha,_internalFetchControllers:A,_internalActiveDeferreds:F,_internalSetRoutes:Rn},E}function P_(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function mh(e,t,n,a,o,l,c,h){let u,m;if(c){u=[];for(let x of t)if(u.push(x),x.route.id===c){m=x;break}}else u=t,m=t[t.length-1];let g=Zc(o||".",Hc(u,l),vi(e.pathname,n)||e.pathname,h==="path");if(o==null&&(g.search=e.search,g.hash=e.hash),(o==null||o===""||o===".")&&m){let x=Bp(g.search);if(m.route.index&&!x)g.search=g.search?g.search.replace(/^\?/,"?index&"):"?index";else if(!m.route.index&&x){let v=new URLSearchParams(g.search),b=v.getAll("index");v.delete("index"),b.filter(j=>j).forEach(j=>v.append("index",j));let _=v.toString();g.search=_?"?"+_:""}}return a&&n!=="/"&&(g.pathname=g.pathname==="/"?n:Ir([n,g.pathname])),ea(g)}function rg(e,t,n,a){if(!a||!P_(a))return{path:n};if(a.formMethod&&!D_(a.formMethod))return{path:n,error:nn(405,{method:a.formMethod})};let o=()=>({path:n,error:nn(400,{type:"invalid-body"})}),l=a.formMethod||"get",c=e?l.toUpperCase():l.toLowerCase(),h=Ay(n);if(a.body!==void 0){if(a.formEncType==="text/plain"){if(!Zn(c))return o();let v=typeof a.body=="string"?a.body:a.body instanceof FormData||a.body instanceof URLSearchParams?Array.from(a.body.entries()).reduce((b,_)=>{let[j,P]=_;return""+b+j+"="+P+`
`},""):String(a.body);return{path:n,submission:{formMethod:c,formAction:h,formEncType:a.formEncType,formData:void 0,json:void 0,text:v}}}else if(a.formEncType==="application/json"){if(!Zn(c))return o();try{let v=typeof a.body=="string"?JSON.parse(a.body):a.body;return{path:n,submission:{formMethod:c,formAction:h,formEncType:a.formEncType,formData:void 0,json:v,text:void 0}}}catch{return o()}}}Oe(typeof FormData=="function","FormData is not available in this environment");let u,m;if(a.formData)u=xh(a.formData),m=a.formData;else if(a.body instanceof FormData)u=xh(a.body),m=a.body;else if(a.body instanceof URLSearchParams)u=a.body,m=cg(u);else if(a.body==null)u=new URLSearchParams,m=new FormData;else try{u=new URLSearchParams(a.body),m=cg(u)}catch{return o()}let g={formMethod:c,formAction:h,formEncType:a&&a.formEncType||"application/x-www-form-urlencoded",formData:m,json:void 0,text:void 0};if(Zn(g.formMethod))return{path:n,submission:g};let x=Si(n);return t&&x.search&&Bp(x.search)&&u.append("index",""),x.search="?"+u,{path:ea(x),submission:g}}function ig(e,t,n){n===void 0&&(n=!1);let a=e.findIndex(o=>o.route.id===t);return a>=0?e.slice(0,n?a+1:a):e}function ag(e,t,n,a,o,l,c,h,u,m,g,x,v,b,_,j){let P=j?mn(j[1])?j[1].error:j[1].data:void 0,N=e.createURL(t.location),w=e.createURL(o),z=n;l&&t.errors?z=ig(n,Object.keys(t.errors)[0],!0):j&&mn(j[1])&&(z=ig(n,j[0]));let C=j?j[1].statusCode:void 0,I=c&&C&&C>=400,E=z.filter((B,M)=>{let{route:T}=B;if(T.lazy)return!0;if(T.loader==null)return!1;if(l)return gh(T,t.loaderData,t.errors);if(z_(t.loaderData,t.matches[M],B)||u.some(se=>se===B.route.id))return!0;let W=t.matches[M],U=B;return og(B,dt({currentUrl:N,currentParams:W.params,nextUrl:w,nextParams:U.params},a,{actionResult:P,actionStatus:C,defaultShouldRevalidate:I?!1:h||N.pathname+N.search===w.pathname+w.search||N.search!==w.search||My(W,U)}))}),k=[];return x.forEach((B,M)=>{if(l||!n.some(de=>de.route.id===B.routeId)||g.has(M))return;let T=Ri(b,B.path,_);if(!T){k.push({key:M,routeId:B.routeId,path:B.path,matches:null,match:null,controller:null});return}let W=t.fetchers.get(M),U=Go(T,B.path),se=!1;v.has(M)?se=!1:m.has(M)?(m.delete(M),se=!0):W&&W.state!=="idle"&&W.data===void 0?se=h:se=og(U,dt({currentUrl:N,currentParams:t.matches[t.matches.length-1].params,nextUrl:w,nextParams:n[n.length-1].params},a,{actionResult:P,actionStatus:C,defaultShouldRevalidate:I?!1:h})),se&&k.push({key:M,routeId:B.routeId,path:B.path,matches:T,match:U,controller:new AbortController})}),[E,k]}function gh(e,t,n){if(e.lazy)return!0;if(!e.loader)return!1;let a=t!=null&&t[e.id]!==void 0,o=n!=null&&n[e.id]!==void 0;return!a&&o?!1:typeof e.loader=="function"&&e.loader.hydrate===!0?!0:!a&&!o}function z_(e,t,n){let a=!t||n.route.id!==t.route.id,o=e[n.route.id]===void 0;return a||o}function My(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function og(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}function sg(e,t,n,a,o){var l;let c;if(e){let m=a[e];Oe(m,"No route found to patch children into: routeId = "+e),m.children||(m.children=[]),c=m.children}else c=n;let h=t.filter(m=>!c.some(g=>Ty(m,g))),u=yc(h,o,[e||"_","patch",String(((l=c)==null?void 0:l.length)||"0")],a);c.push(...u)}function Ty(e,t){return"id"in e&&"id"in t&&e.id===t.id?!0:e.index===t.index&&e.path===t.path&&e.caseSensitive===t.caseSensitive?(!e.children||e.children.length===0)&&(!t.children||t.children.length===0)?!0:e.children.every((n,a)=>{var o;return(o=t.children)==null?void 0:o.some(l=>Ty(n,l))}):!1}async function E_(e,t,n){if(!e.lazy)return;let a=await e.lazy();if(!e.lazy)return;let o=n[e.id];Oe(o,"No route found in manifest");let l={};for(let c in a){let u=o[c]!==void 0&&c!=="hasErrorBoundary";Xi(!u,'Route "'+o.id+'" has a static property "'+c+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+c+'" will be ignored.')),!u&&!Xw.has(c)&&(l[c]=a[c])}Object.assign(o,l),Object.assign(o,dt({},t(o),{lazy:void 0}))}async function L_(e){let{matches:t}=e,n=t.filter(o=>o.shouldLoad);return(await Promise.all(n.map(o=>o.resolve()))).reduce((o,l,c)=>Object.assign(o,{[n[c].route.id]:l}),{})}async function M_(e,t,n,a,o,l,c,h,u,m){let g=l.map(b=>b.route.lazy?E_(b.route,u,h):void 0),x=l.map((b,_)=>{let j=g[_],P=o.some(w=>w.route.id===b.route.id);return dt({},b,{shouldLoad:P,resolve:async w=>(w&&a.method==="GET"&&(b.route.lazy||b.route.loader)&&(P=!0),P?T_(t,a,b,j,w,m):Promise.resolve({type:et.data,result:void 0}))})}),v=await e({matches:x,request:a,params:l[0].params,fetcherKey:c,context:m});try{await Promise.all(g)}catch{}return v}async function T_(e,t,n,a,o,l){let c,h,u=m=>{let g,x=new Promise((_,j)=>g=j);h=()=>g(),t.signal.addEventListener("abort",h);let v=_=>typeof m!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+e+'" [routeId: '+n.route.id+"]"))):m({request:t,params:n.params,context:l},..._!==void 0?[_]:[]),b=(async()=>{try{return{type:"data",result:await(o?o(j=>v(j)):v())}}catch(_){return{type:"error",result:_}}})();return Promise.race([b,x])};try{let m=n.route[e];if(a)if(m){let g,[x]=await Promise.all([u(m).catch(v=>{g=v}),a]);if(g!==void 0)throw g;c=x}else if(await a,m=n.route[e],m)c=await u(m);else if(e==="action"){let g=new URL(t.url),x=g.pathname+g.search;throw nn(405,{method:t.method,pathname:x,routeId:n.route.id})}else return{type:et.data,result:void 0};else if(m)c=await u(m);else{let g=new URL(t.url),x=g.pathname+g.search;throw nn(404,{pathname:x})}Oe(c.result!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(m){return{type:et.error,result:m}}finally{h&&t.signal.removeEventListener("abort",h)}return c}async function A_(e){let{result:t,type:n}=e;if(Iy(t)){let x;try{let v=t.headers.get("Content-Type");v&&/\bapplication\/json\b/.test(v)?t.body==null?x=null:x=await t.json():x=await t.text()}catch(v){return{type:et.error,error:v}}return n===et.error?{type:et.error,error:new vc(t.status,t.statusText,x),statusCode:t.status,headers:t.headers}:{type:et.data,data:x,statusCode:t.status,headers:t.headers}}if(n===et.error){if(fg(t)){var a,o;if(t.data instanceof Error){var l,c;return{type:et.error,error:t.data,statusCode:(l=t.init)==null?void 0:l.status,headers:(c=t.init)!=null&&c.headers?new Headers(t.init.headers):void 0}}return{type:et.error,error:new vc(((a=t.init)==null?void 0:a.status)||500,void 0,t.data),statusCode:Ss(t)?t.status:void 0,headers:(o=t.init)!=null&&o.headers?new Headers(t.init.headers):void 0}}return{type:et.error,error:t,statusCode:Ss(t)?t.status:void 0}}if(F_(t)){var h,u;return{type:et.deferred,deferredData:t,statusCode:(h=t.init)==null?void 0:h.status,headers:((u=t.init)==null?void 0:u.headers)&&new Headers(t.init.headers)}}if(fg(t)){var m,g;return{type:et.data,data:t.data,statusCode:(m=t.init)==null?void 0:m.status,headers:(g=t.init)!=null&&g.headers?new Headers(t.init.headers):void 0}}return{type:et.data,data:t}}function I_(e,t,n,a,o,l){let c=e.headers.get("Location");if(Oe(c,"Redirects returned/thrown from loaders/actions must have a Location header"),!Rp.test(c)){let h=a.slice(0,a.findIndex(u=>u.route.id===n)+1);c=mh(new URL(t.url),h,o,!0,c,l),e.headers.set("Location",c)}return e}function lg(e,t,n,a){let o=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];if(Rp.test(e)){let l=e,c=l.startsWith("//")?new URL(t.protocol+l):new URL(l);if(o.includes(c.protocol))throw new Error("Invalid redirect location");let h=vi(c.pathname,n)!=null;if(c.origin===t.origin&&h)return c.pathname+c.search+c.hash}try{let l=a.createURL(e);if(o.includes(l.protocol))throw new Error("Invalid redirect location")}catch{}return e}function _a(e,t,n,a){let o=e.createURL(Ay(t)).toString(),l={signal:n};if(a&&Zn(a.formMethod)){let{formMethod:c,formEncType:h}=a;l.method=c.toUpperCase(),h==="application/json"?(l.headers=new Headers({"Content-Type":h}),l.body=JSON.stringify(a.json)):h==="text/plain"?l.body=a.text:h==="application/x-www-form-urlencoded"&&a.formData?l.body=xh(a.formData):l.body=a.formData}return new Request(o,l)}function xh(e){let t=new URLSearchParams;for(let[n,a]of e.entries())t.append(n,typeof a=="string"?a:a.name);return t}function cg(e){let t=new FormData;for(let[n,a]of e.entries())t.append(n,a);return t}function R_(e,t,n,a,o){let l={},c=null,h,u=!1,m={},g=n&&mn(n[1])?n[1].error:void 0;return e.forEach(x=>{if(!(x.route.id in t))return;let v=x.route.id,b=t[v];if(Oe(!Ui(b),"Cannot handle redirect results in processLoaderData"),mn(b)){let _=b.error;g!==void 0&&(_=g,g=void 0),c=c||{};{let j=Oi(e,v);c[j.route.id]==null&&(c[j.route.id]=_)}l[v]=void 0,u||(u=!0,h=Ss(b.error)?b.error.status:500),b.headers&&(m[v]=b.headers)}else si(b)?(a.set(v,b.deferredData),l[v]=b.deferredData.data,b.statusCode!=null&&b.statusCode!==200&&!u&&(h=b.statusCode),b.headers&&(m[v]=b.headers)):(l[v]=b.data,b.statusCode&&b.statusCode!==200&&!u&&(h=b.statusCode),b.headers&&(m[v]=b.headers))}),g!==void 0&&n&&(c={[n[0]]:g},l[n[0]]=void 0),{loaderData:l,errors:c,statusCode:h||200,loaderHeaders:m}}function dg(e,t,n,a,o,l,c){let{loaderData:h,errors:u}=R_(t,n,a,c);return o.forEach(m=>{let{key:g,match:x,controller:v}=m,b=l[g];if(Oe(b,"Did not find corresponding fetcher result"),!(v&&v.signal.aborted))if(mn(b)){let _=Oi(e.matches,x==null?void 0:x.route.id);u&&u[_.route.id]||(u=dt({},u,{[_.route.id]:b.error})),e.fetchers.delete(g)}else if(Ui(b))Oe(!1,"Unhandled fetcher revalidation redirect");else if(si(b))Oe(!1,"Unhandled fetcher deferred data");else{let _=ei(b.data);e.fetchers.set(g,_)}}),{loaderData:h,errors:u}}function ug(e,t,n,a){let o=dt({},t);for(let l of n){let c=l.route.id;if(t.hasOwnProperty(c)?t[c]!==void 0&&(o[c]=t[c]):e[c]!==void 0&&l.route.loader&&(o[c]=e[c]),a&&a.hasOwnProperty(c))break}return o}function hg(e){return e?mn(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function Oi(e,t){return(t?e.slice(0,e.findIndex(a=>a.route.id===t)+1):[...e]).reverse().find(a=>a.route.hasErrorBoundary===!0)||e[0]}function pg(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function nn(e,t){let{pathname:n,routeId:a,method:o,type:l,message:c}=t===void 0?{}:t,h="Unknown Server Error",u="Unknown @remix-run/router error";return e===400?(h="Bad Request",o&&n&&a?u="You made a "+o+' request to "'+n+'" but '+('did not provide a `loader` for route "'+a+'", ')+"so there is no way to handle the request.":l==="defer-action"?u="defer() is not supported in actions":l==="invalid-body"&&(u="Unable to encode submission body")):e===403?(h="Forbidden",u='Route "'+a+'" does not match URL "'+n+'"'):e===404?(h="Not Found",u='No route matches URL "'+n+'"'):e===405&&(h="Method Not Allowed",o&&n&&a?u="You made a "+o.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+a+'", ')+"so there is no way to handle the request.":o&&(u='Invalid request method "'+o.toUpperCase()+'"')),new vc(e||500,h,new Error(u),!0)}function Cl(e){let t=Object.entries(e);for(let n=t.length-1;n>=0;n--){let[a,o]=t[n];if(Ui(o))return{key:a,result:o}}}function Ay(e){let t=typeof e=="string"?Si(e):e;return ea(dt({},t,{hash:""}))}function O_(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function B_(e){return Iy(e.result)&&j_.has(e.result.status)}function si(e){return e.type===et.deferred}function mn(e){return e.type===et.error}function Ui(e){return(e&&e.type)===et.redirect}function fg(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function F_(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function Iy(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function D_(e){return __.has(e.toLowerCase())}function Zn(e){return b_.has(e.toLowerCase())}async function U_(e,t,n,a,o){let l=Object.entries(t);for(let c=0;c<l.length;c++){let[h,u]=l[c],m=e.find(v=>(v==null?void 0:v.route.id)===h);if(!m)continue;let g=a.find(v=>v.route.id===m.route.id),x=g!=null&&!My(g,m)&&(o&&o[m.route.id])!==void 0;si(u)&&x&&await Op(u,n,!1).then(v=>{v&&(t[h]=v)})}}async function W_(e,t,n){for(let a=0;a<n.length;a++){let{key:o,routeId:l,controller:c}=n[a],h=t[o];e.find(m=>(m==null?void 0:m.route.id)===l)&&si(h)&&(Oe(c,"Expected an AbortController for revalidating fetcher deferred result"),await Op(h,c.signal,!0).then(m=>{m&&(t[o]=m)}))}}async function Op(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:et.data,data:e.deferredData.unwrappedData}}catch(o){return{type:et.error,error:o}}return{type:et.data,data:e.deferredData.data}}}function Bp(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Go(e,t){let n=typeof t=="string"?Si(t).search:t.search;if(e[e.length-1].route.index&&Bp(n||""))return e[e.length-1];let a=zy(e);return a[a.length-1]}function mg(e){let{formMethod:t,formAction:n,formEncType:a,text:o,formData:l,json:c}=e;if(!(!t||!n||!a)){if(o!=null)return{formMethod:t,formAction:n,formEncType:a,formData:void 0,json:void 0,text:o};if(l!=null)return{formMethod:t,formAction:n,formEncType:a,formData:l,json:void 0,text:void 0};if(c!==void 0)return{formMethod:t,formAction:n,formEncType:a,formData:void 0,json:c,text:void 0}}}function iu(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function H_(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function Ro(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function Z_(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function ei(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function $_(e,t){try{let n=e.sessionStorage.getItem(Ly);if(n){let a=JSON.parse(n);for(let[o,l]of Object.entries(a||{}))l&&Array.isArray(l)&&t.set(o,new Set(l||[]))}}catch{}}function q_(e,t){if(t.size>0){let n={};for(let[a,o]of t)n[a]=[...o];try{e.sessionStorage.setItem(Ly,JSON.stringify(n))}catch(a){Xi(!1,"Failed to save applied view transitions in sessionStorage ("+a+").")}}}/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function to(){return to=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},to.apply(this,arguments)}const $c=f.createContext(null),Ry=f.createContext(null),Ni=f.createContext(null),Fp=f.createContext(null),lr=f.createContext({outlet:null,matches:[],isDataRoute:!1}),Oy=f.createContext(null);function V_(e,t){let{relative:n}=t===void 0?{}:t;ho()||Oe(!1);let{basename:a,navigator:o}=f.useContext(Ni),{hash:l,pathname:c,search:h}=Fy(e,{relative:n}),u=c;return a!=="/"&&(u=c==="/"?a:Ir([a,c])),o.createHref({pathname:u,search:h,hash:l})}function ho(){return f.useContext(Fp)!=null}function wn(){return ho()||Oe(!1),f.useContext(Fp).location}function By(e){f.useContext(Ni).static||f.useLayoutEffect(e)}function Nt(){let{isDataRoute:e}=f.useContext(lr);return e?s5():G_()}function G_(){ho()||Oe(!1);let e=f.useContext($c),{basename:t,future:n,navigator:a}=f.useContext(Ni),{matches:o}=f.useContext(lr),{pathname:l}=wn(),c=JSON.stringify(Hc(o,n.v7_relativeSplatPath)),h=f.useRef(!1);return By(()=>{h.current=!0}),f.useCallback(function(m,g){if(g===void 0&&(g={}),!h.current)return;if(typeof m=="number"){a.go(m);return}let x=Zc(m,JSON.parse(c),l,g.relative==="path");e==null&&t!=="/"&&(x.pathname=x.pathname==="/"?t:Ir([t,x.pathname])),(g.replace?a.replace:a.push)(x,g.state,g)},[t,a,c,l,e])}const K_=f.createContext(null);function Y_(e){let t=f.useContext(lr).outlet;return t&&f.createElement(K_.Provider,{value:e},t)}function po(){let{matches:e}=f.useContext(lr),t=e[e.length-1];return t?t.params:{}}function Fy(e,t){let{relative:n}=t===void 0?{}:t,{future:a}=f.useContext(Ni),{matches:o}=f.useContext(lr),{pathname:l}=wn(),c=JSON.stringify(Hc(o,a.v7_relativeSplatPath));return f.useMemo(()=>Zc(e,JSON.parse(c),l,n==="path"),[e,c,l,n])}function Q_(e,t,n,a){ho()||Oe(!1);let{navigator:o}=f.useContext(Ni),{matches:l}=f.useContext(lr),c=l[l.length-1],h=c?c.params:{};c&&c.pathname;let u=c?c.pathnameBase:"/";c&&c.route;let m=wn(),g;g=m;let x=g.pathname||"/",v=x;if(u!=="/"){let j=u.replace(/^\//,"").split("/");v="/"+x.replace(/^\//,"").split("/").slice(j.length).join("/")}let b=Ri(e,{pathname:v});return n5(b&&b.map(j=>Object.assign({},j,{params:Object.assign({},h,j.params),pathname:Ir([u,o.encodeLocation?o.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?u:Ir([u,o.encodeLocation?o.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),l,n,a)}function J_(){let e=i5(),t=Ss(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return f.createElement(f.Fragment,null,f.createElement("h2",null,"Unexpected Application Error!"),f.createElement("h3",{style:{fontStyle:"italic"}},t),n?f.createElement("pre",{style:o},n):null,null)}const X_=f.createElement(J_,null);class e5 extends f.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?f.createElement(lr.Provider,{value:this.props.routeContext},f.createElement(Oy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function t5(e){let{routeContext:t,match:n,children:a}=e,o=f.useContext($c);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),f.createElement(lr.Provider,{value:t},a)}function n5(e,t,n,a){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),a===void 0&&(a=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=a)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let c=e,h=(o=n)==null?void 0:o.errors;if(h!=null){let g=c.findIndex(x=>x.route.id&&(h==null?void 0:h[x.route.id])!==void 0);g>=0||Oe(!1),c=c.slice(0,Math.min(c.length,g+1))}let u=!1,m=-1;if(n&&a&&a.v7_partialHydration)for(let g=0;g<c.length;g++){let x=c[g];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(m=g),x.route.id){let{loaderData:v,errors:b}=n,_=x.route.loader&&v[x.route.id]===void 0&&(!b||b[x.route.id]===void 0);if(x.route.lazy||_){u=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}return c.reduceRight((g,x,v)=>{let b,_=!1,j=null,P=null;n&&(b=h&&x.route.id?h[x.route.id]:void 0,j=x.route.errorElement||X_,u&&(m<0&&v===0?(l5("route-fallback"),_=!0,P=null):m===v&&(_=!0,P=x.route.hydrateFallbackElement||null)));let N=t.concat(c.slice(0,v+1)),w=()=>{let z;return b?z=j:_?z=P:x.route.Component?z=f.createElement(x.route.Component,null):x.route.element?z=x.route.element:z=g,f.createElement(t5,{match:x,routeContext:{outlet:g,matches:N,isDataRoute:n!=null},children:z})};return n&&(x.route.ErrorBoundary||x.route.errorElement||v===0)?f.createElement(e5,{location:n.location,revalidation:n.revalidation,component:j,error:b,children:w(),routeContext:{outlet:null,matches:N,isDataRoute:!0}}):w()},null)}var Dy=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Dy||{}),Uy=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Uy||{});function Wy(e){let t=f.useContext($c);return t||Oe(!1),t}function Hy(e){let t=f.useContext(Ry);return t||Oe(!1),t}function r5(e){let t=f.useContext(lr);return t||Oe(!1),t}function Zy(e){let t=r5(),n=t.matches[t.matches.length-1];return n.route.id||Oe(!1),n.route.id}function i5(){var e;let t=f.useContext(Oy),n=Hy(),a=Zy();return t!==void 0?t:(e=n.errors)==null?void 0:e[a]}let a5=0;function o5(e){let{router:t,basename:n}=Wy(),a=Hy(),[o,l]=f.useState(""),c=f.useCallback(h=>{if(typeof e!="function")return!!e;if(n==="/")return e(h);let{currentLocation:u,nextLocation:m,historyAction:g}=h;return e({currentLocation:to({},u,{pathname:vi(u.pathname,n)||u.pathname}),nextLocation:to({},m,{pathname:vi(m.pathname,n)||m.pathname}),historyAction:g})},[n,e]);return f.useEffect(()=>{let h=String(++a5);return l(h),()=>t.deleteBlocker(h)},[t]),f.useEffect(()=>{o!==""&&t.getBlocker(o,c)},[t,o,c]),o&&a.blockers.has(o)?a.blockers.get(o):Sa}function s5(){let{router:e}=Wy(Dy.UseNavigateStable),t=Zy(Uy.UseNavigateStable),n=f.useRef(!1);return By(()=>{n.current=!0}),f.useCallback(function(o,l){l===void 0&&(l={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,to({fromRouteId:t},l)))},[e,t])}const gg={};function l5(e,t,n){gg[e]||(gg[e]=!0)}function c5(e,t){e==null||e.v7_startTransition,(e==null?void 0:e.v7_relativeSplatPath)===void 0&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}function no(e){let{to:t,replace:n,state:a,relative:o}=e;ho()||Oe(!1);let{future:l,static:c}=f.useContext(Ni),{matches:h}=f.useContext(lr),{pathname:u}=wn(),m=Nt(),g=Zc(t,Hc(h,l.v7_relativeSplatPath),u,o==="path"),x=JSON.stringify(g);return f.useEffect(()=>m(JSON.parse(x),{replace:n,state:a,relative:o}),[m,x,o,n,a]),null}function d5(e){return Y_(e.context)}function Me(e){Oe(!1)}function u5(e){let{basename:t="/",children:n=null,location:a,navigationType:o=_t.Pop,navigator:l,static:c=!1,future:h}=e;ho()&&Oe(!1);let u=t.replace(/^\/*/,"/"),m=f.useMemo(()=>({basename:u,navigator:l,static:c,future:to({v7_relativeSplatPath:!1},h)}),[u,h,l,c]);typeof a=="string"&&(a=Si(a));let{pathname:g="/",search:x="",hash:v="",state:b=null,key:_="default"}=a,j=f.useMemo(()=>{let P=vi(g,u);return P==null?null:{location:{pathname:P,search:x,hash:v,state:b,key:_},navigationType:o}},[u,g,x,v,b,_,o]);return j==null?null:f.createElement(Ni.Provider,{value:m},f.createElement(Fp.Provider,{children:n,value:j}))}new Promise(()=>{});function yh(e,t){t===void 0&&(t=[]);let n=[];return f.Children.forEach(e,(a,o)=>{if(!f.isValidElement(a))return;let l=[...t,o];if(a.type===f.Fragment){n.push.apply(n,yh(a.props.children,l));return}a.type!==Me&&Oe(!1),!a.props.index||!a.props.children||Oe(!1);let c={id:a.props.id||l.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(c.children=yh(a.props.children,l)),n.push(c)}),n}function h5(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:f.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:f.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:f.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ns(){return Ns=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Ns.apply(this,arguments)}function p5(e,t){if(e==null)return{};var n={},a=Object.keys(e),o,l;for(l=0;l<a.length;l++)o=a[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function f5(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function m5(e,t){return e.button===0&&(!t||t==="_self")&&!f5(e)}function vh(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let a=e[n];return t.concat(Array.isArray(a)?a.map(o=>[n,o]):[[n,a]])},[]))}function g5(e,t){let n=vh(e);return t&&t.forEach((a,o)=>{n.has(o)||t.getAll(o).forEach(l=>{n.append(o,l)})}),n}const x5=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],y5="6";try{window.__reactRouterVersion=y5}catch{}function v5(e,t){return C_({basename:void 0,future:Ns({},void 0,{v7_prependBasename:!0}),history:Yw({window:void 0}),hydrationData:b5(),routes:e,mapRouteProperties:h5,dataStrategy:void 0,patchRoutesOnNavigation:void 0,window:void 0}).initialize()}function b5(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Ns({},t,{errors:w5(t.errors)})),t}function w5(e){if(!e)return null;let t=Object.entries(e),n={};for(let[a,o]of t)if(o&&o.__type==="RouteErrorResponse")n[a]=new vc(o.status,o.statusText,o.data,o.internal===!0);else if(o&&o.__type==="Error"){if(o.__subType){let l=window[o.__subType];if(typeof l=="function")try{let c=new l(o.message);c.stack="",n[a]=c}catch{}}if(n[a]==null){let l=new Error(o.message);l.stack="",n[a]=l}}else n[a]=o;return n}const _5=f.createContext({isTransitioning:!1}),j5=f.createContext(new Map),k5="startTransition",xg=O2[k5],S5="flushSync",yg=Kw[S5];function N5(e){xg?xg(e):e()}function Oo(e){yg?yg(e):e()}class C5{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=a=>{this.status==="pending"&&(this.status="resolved",t(a))},this.reject=a=>{this.status==="pending"&&(this.status="rejected",n(a))}})}}function P5(e){let{fallbackElement:t,router:n,future:a}=e,[o,l]=f.useState(n.state),[c,h]=f.useState(),[u,m]=f.useState({isTransitioning:!1}),[g,x]=f.useState(),[v,b]=f.useState(),[_,j]=f.useState(),P=f.useRef(new Map),{v7_startTransition:N}=a||{},w=f.useCallback(B=>{N?N5(B):B()},[N]),z=f.useCallback((B,M)=>{let{deletedFetchers:T,flushSync:W,viewTransitionOpts:U}=M;B.fetchers.forEach((de,he)=>{de.data!==void 0&&P.current.set(he,de.data)}),T.forEach(de=>P.current.delete(de));let se=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!U||se){W?Oo(()=>l(B)):w(()=>l(B));return}if(W){Oo(()=>{v&&(g&&g.resolve(),v.skipTransition()),m({isTransitioning:!0,flushSync:!0,currentLocation:U.currentLocation,nextLocation:U.nextLocation})});let de=n.window.document.startViewTransition(()=>{Oo(()=>l(B))});de.finished.finally(()=>{Oo(()=>{x(void 0),b(void 0),h(void 0),m({isTransitioning:!1})})}),Oo(()=>b(de));return}v?(g&&g.resolve(),v.skipTransition(),j({state:B,currentLocation:U.currentLocation,nextLocation:U.nextLocation})):(h(B),m({isTransitioning:!0,flushSync:!1,currentLocation:U.currentLocation,nextLocation:U.nextLocation}))},[n.window,v,g,P,w]);f.useLayoutEffect(()=>n.subscribe(z),[n,z]),f.useEffect(()=>{u.isTransitioning&&!u.flushSync&&x(new C5)},[u]),f.useEffect(()=>{if(g&&c&&n.window){let B=c,M=g.promise,T=n.window.document.startViewTransition(async()=>{w(()=>l(B)),await M});T.finished.finally(()=>{x(void 0),b(void 0),h(void 0),m({isTransitioning:!1})}),b(T)}},[w,c,g,n.window]),f.useEffect(()=>{g&&c&&o.location.key===c.location.key&&g.resolve()},[g,v,o.location,c]),f.useEffect(()=>{!u.isTransitioning&&_&&(h(_.state),m({isTransitioning:!0,flushSync:!1,currentLocation:_.currentLocation,nextLocation:_.nextLocation}),j(void 0))},[u.isTransitioning,_]),f.useEffect(()=>{},[]);let C=f.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:B=>n.navigate(B),push:(B,M,T)=>n.navigate(B,{state:M,preventScrollReset:T==null?void 0:T.preventScrollReset}),replace:(B,M,T)=>n.navigate(B,{replace:!0,state:M,preventScrollReset:T==null?void 0:T.preventScrollReset})}),[n]),I=n.basename||"/",E=f.useMemo(()=>({router:n,navigator:C,static:!1,basename:I}),[n,C,I]),k=f.useMemo(()=>({v7_relativeSplatPath:n.future.v7_relativeSplatPath}),[n.future.v7_relativeSplatPath]);return f.useEffect(()=>c5(a,n.future),[a,n.future]),f.createElement(f.Fragment,null,f.createElement($c.Provider,{value:E},f.createElement(Ry.Provider,{value:o},f.createElement(j5.Provider,{value:P.current},f.createElement(_5.Provider,{value:u},f.createElement(u5,{basename:I,location:o.location,navigationType:o.historyAction,navigator:C,future:k},o.initialized||n.future.v7_partialHydration?f.createElement(z5,{routes:n.routes,future:n.future,state:o}):t))))),null)}const z5=f.memo(E5);function E5(e){let{routes:t,future:n,state:a}=e;return Q_(t,void 0,a,n)}const L5=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",M5=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ke=f.forwardRef(function(t,n){let{onClick:a,relative:o,reloadDocument:l,replace:c,state:h,target:u,to:m,preventScrollReset:g,viewTransition:x}=t,v=p5(t,x5),{basename:b}=f.useContext(Ni),_,j=!1;if(typeof m=="string"&&M5.test(m)&&(_=m,L5))try{let z=new URL(window.location.href),C=m.startsWith("//")?new URL(z.protocol+m):new URL(m),I=vi(C.pathname,b);C.origin===z.origin&&I!=null?m=I+C.search+C.hash:j=!0}catch{}let P=V_(m,{relative:o}),N=T5(m,{replace:c,state:h,target:u,preventScrollReset:g,relative:o,viewTransition:x});function w(z){a&&a(z),z.defaultPrevented||N(z)}return f.createElement("a",Ns({},v,{href:_||P,onClick:j||l?a:w,ref:n,target:u}))});var vg;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(vg||(vg={}));var bg;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(bg||(bg={}));function T5(e,t){let{target:n,replace:a,state:o,preventScrollReset:l,relative:c,viewTransition:h}=t===void 0?{}:t,u=Nt(),m=wn(),g=Fy(e,{relative:c});return f.useCallback(x=>{if(m5(x,n)){x.preventDefault();let v=a!==void 0?a:ea(m)===ea(g);u(e,{replace:v,state:o,preventScrollReset:l,relative:c,viewTransition:h})}},[m,u,g,a,o,n,e,l,c,h])}function qc(e){let t=f.useRef(vh(e)),n=f.useRef(!1),a=wn(),o=f.useMemo(()=>g5(a.search,n.current?null:t.current),[a.search]),l=Nt(),c=f.useCallback((h,u)=>{const m=vh(typeof h=="function"?h(o):h);n.current=!0,l("?"+m,u)},[l,o]);return[o,c]}var A5={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const I5=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),re=(e,t)=>{const n=f.forwardRef(({color:a="currentColor",size:o=24,strokeWidth:l=2,absoluteStrokeWidth:c,children:h,...u},m)=>f.createElement("svg",{ref:m,...A5,width:o,height:o,stroke:a,strokeWidth:c?Number(l)*24/Number(o):l,className:`lucide lucide-${I5(e)}`,...u},[...t.map(([g,x])=>f.createElement(g,x)),...(Array.isArray(h)?h:[h])||[]]));return n.displayName=`${e}`,n},R5=re("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]),O5=re("Archive",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]]),B5=re("Armchair",[["path",{d:"M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3",key:"irtipd"}],["path",{d:"M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z",key:"1e01m0"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]]),$y=re("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]),F5=re("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),D5=re("Baby",[["path",{d:"M9 12h.01",key:"157uk2"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"5yv0yz"}]]),bc=re("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]),qy=re("Beef",[["circle",{cx:"12.5",cy:"8.5",r:"2.5",key:"9738u8"}],["path",{d:"M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z",key:"o0f6za"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5",key:"k7p6i0"}]]),U5=re("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]),W5=re("Bike",[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]),Vy=re("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]),H5=re("Briefcase",[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2",key:"eto64e"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"zwj3tp"}]]),Z5=re("Brush",[["path",{d:"m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08",key:"1styjt"}],["path",{d:"M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z",key:"z0l1mu"}]]),$5=re("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]),q5=re("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]),V5=re("Candy",[["path",{d:"m9.5 7.5-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Z",key:"ue6khb"}],["path",{d:"M14 6.5v10",key:"5xnk7c"}],["path",{d:"M10 7.5v10",key:"1uew51"}],["path",{d:"m16 7 1-5 1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1",key:"b9cp6k"}],["path",{d:"m8 17-1 5-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1",key:"5lney8"}]]),bh=re("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]),G5=re("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]),Gy=re("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),Dp=re("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),wh=re("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),Ky=re("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]),K5=re("Church",[["path",{d:"m18 7 4 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9l4-2",key:"gy5gyo"}],["path",{d:"M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4",key:"cpkuc4"}],["path",{d:"M18 22V5l-6-3-6 3v17",key:"1hsnhq"}],["path",{d:"M12 7v5",key:"ma6bk"}],["path",{d:"M10 9h4",key:"u4k05v"}]]),Y5=re("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]),$a=re("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]),Yy=re("Coffee",[["path",{d:"M17 8h1a4 4 0 1 1 0 8h-1",key:"jx4kbh"}],["path",{d:"M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z",key:"1bxrl0"}],["line",{x1:"6",x2:"6",y1:"2",y2:"4",key:"1cr9l3"}],["line",{x1:"10",x2:"10",y1:"2",y2:"4",key:"170wym"}],["line",{x1:"14",x2:"14",y1:"2",y2:"4",key:"1c5f70"}]]),Q5=re("Cookie",[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",key:"laymnq"}],["path",{d:"M8.5 8.5v.01",key:"ue8clq"}],["path",{d:"M16 15.5v.01",key:"14dtrp"}],["path",{d:"M12 12v.01",key:"u5ubse"}],["path",{d:"M11 17v.01",key:"1hyl5a"}],["path",{d:"M7 14v.01",key:"uct60s"}]]),au=re("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]),J5=re("Croissant",[["path",{d:"m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z",key:"1ozxlb"}],["path",{d:"m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83",key:"ffuyb5"}],["path",{d:"M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4",key:"osnpzi"}],["path",{d:"m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2",key:"1vubaw"}],["path",{d:"M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5",key:"wxr772"}]]),Qy=re("Cross",[["path",{d:"M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z",key:"1t5g7j"}]]),X5=re("CupSoda",[["path",{d:"m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8",key:"8166m8"}],["path",{d:"M5 8h14",key:"pcz4l3"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0",key:"yjz344"}],["path",{d:"m12 8 1-6h2",key:"3ybfa4"}]]),ej=re("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]),Jy=re("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]),tj=re("Drumstick",[["path",{d:"M15.45 15.4c-2.13.65-4.3.32-5.7-1.1-2.29-2.27-1.76-6.5 1.17-9.42 2.93-2.93 7.15-3.46 9.43-1.18 1.41 1.41 1.74 3.57 1.1 5.71-1.4-.51-3.26-.02-4.64 1.36-1.38 1.38-1.87 3.23-1.36 4.63z",key:"1o96s0"}],["path",{d:"m11.25 15.6-2.16 2.16a2.5 2.5 0 1 1-4.56 1.73 2.49 2.49 0 0 1-1.41-4.24 2.5 2.5 0 0 1 3.14-.32l2.16-2.16",key:"14vv5h"}]]),Xy=re("Dumbbell",[["path",{d:"m6.5 6.5 11 11",key:"f7oqzb"}],["path",{d:"m21 21-1-1",key:"cpc6if"}],["path",{d:"m3 3 1 1",key:"d3rpuf"}],["path",{d:"m18 22 4-4",key:"1e32o6"}],["path",{d:"m2 6 4-4",key:"189tqz"}],["path",{d:"m3 10 7-7",key:"1bxui2"}],["path",{d:"m14 21 7-7",key:"16x78n"}]]),ev=re("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]),tv=re("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),nv=re("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]),rv=re("Fish",[["path",{d:"M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z",key:"15baut"}],["path",{d:"M18 12v.5",key:"18hhni"}],["path",{d:"M16 17.93a9.77 9.77 0 0 1 0-11.86",key:"16dt7o"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33",key:"l9di03"}],["path",{d:"M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4",key:"1kjonw"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98",key:"1zlm23"}]]),iv=re("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]),av=re("Flower2",[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",key:"3pnvol"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M12 10v12",key:"6ubwww"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z",key:"9hd38g"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z",key:"ufn41s"}]]),nj=re("Footprints",[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",key:"1dudjm"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",key:"l2t8xc"}],["path",{d:"M16 17h4",key:"1dejxt"}],["path",{d:"M4 13h4",key:"1bwh8b"}]]),rj=re("Fuel",[["line",{x1:"3",x2:"15",y1:"22",y2:"22",key:"xegly4"}],["line",{x1:"4",x2:"14",y1:"9",y2:"9",key:"xcnuvu"}],["path",{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18",key:"16j0yd"}],["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",key:"8ur5zv"}]]),ov=re("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]),sv=re("Gem",[["path",{d:"M6 3h12l4 6-10 13L2 9Z",key:"1pcd5k"}],["path",{d:"M11 3 8 9l4 13 4-13-3-6",key:"1fcu3u"}],["path",{d:"M2 9h20",key:"16fsjt"}]]),lv=re("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]),ij=re("Glasses",[["circle",{cx:"6",cy:"15",r:"4",key:"vux9w4"}],["circle",{cx:"18",cy:"15",r:"4",key:"18o8ve"}],["path",{d:"M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2",key:"1ag4bs"}],["path",{d:"M2.5 13 5 7c.7-1.3 1.4-2 3-2",key:"1hm1gs"}],["path",{d:"M21.5 13 19 7c-.7-1.3-1.5-2-3-2",key:"1r31ai"}]]),cv=re("GraduationCap",[["path",{d:"M22 10v6M2 10l10-5 10 5-10 5z",key:"1ef52a"}],["path",{d:"M6 12v5c3 3 9 3 12 0v-5",key:"1f75yj"}]]),dv=re("Hammer",[["path",{d:"m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9",key:"1afvon"}],["path",{d:"M17.64 15 22 10.64",key:"zsji6s"}],["path",{d:"m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91",key:"lehyy1"}]]),aj=re("HardHat",[["path",{d:"M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z",key:"1dej2m"}],["path",{d:"M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5",key:"1p9q5i"}],["path",{d:"M4 15v-3a6 6 0 0 1 6-6h0",key:"1uc279"}],["path",{d:"M14 6h0a6 6 0 0 1 6 6v3",key:"1j9mnm"}]]),oj=re("HeartHandshake",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"12sd6o"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]]),sj=re("HeartPulse",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"1uw2ng"}]]),gi=re("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]),ro=re("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]),lj=re("Hotel",[["path",{d:"M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z",key:"p9z69c"}],["path",{d:"m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16",key:"1bvcvh"}],["path",{d:"M8 7h.01",key:"1vti4s"}],["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M12 7h.01",key:"1ivr5q"}],["path",{d:"M12 11h.01",key:"z322tv"}],["path",{d:"M16 11h.01",key:"xkw8gn"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M10 22v-6.5m4 0V22",key:"16gs4s"}]]),cj=re("IceCream",[["path",{d:"m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11",key:"1v6356"}],["path",{d:"M17 7A5 5 0 0 0 7 7",key:"151p3v"}],["path",{d:"M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4",key:"1sdaij"}]]),cn=re("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]),dj=re("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]),uj=re("KeyRound",[["path",{d:"M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z",key:"167ctg"}],["circle",{cx:"16.5",cy:"7.5",r:".5",key:"1kog09"}]]),_h=re("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]),uv=re("Laptop",[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]]),wc=re("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]),Cs=re("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]),hv=re("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),pv=re("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]),Up=re("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]),hj=re("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]),pj=re("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),Ln=re("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),jh=re("Map",[["polygon",{points:"3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21",key:"ok2ie8"}],["line",{x1:"9",x2:"9",y1:"3",y2:"18",key:"w34qz5"}],["line",{x1:"15",x2:"15",y1:"6",y2:"21",key:"volv9a"}]]),fj=re("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]),Rr=re("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]),Ko=re("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),_c=re("MessageCircle",[["path",{d:"m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z",key:"v2veuj"}]]),fv=re("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]),mv=re("Milk",[["path",{d:"M8 2h8",key:"1ssgc1"}],["path",{d:"M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2",key:"qtp12x"}],["path",{d:"M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0",key:"ygeh44"}]]),mj=re("MoonStar",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}],["path",{d:"M19 3v4",key:"vgv24u"}],["path",{d:"M21 5h-4",key:"1wcg1f"}]]),gj=re("Nut",[["path",{d:"M12 4V2",key:"1k5q1u"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4",key:"1tgyif"}],["path",{d:"M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z",key:"tnsqj"}]]),bi=re("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]),xj=re("Paintbrush",[["path",{d:"M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z",key:"m6k5sh"}],["path",{d:"M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7",key:"arzq70"}],["path",{d:"M14.5 17.5 4.5 15",key:"s7fvrz"}]]),kh=re("PawPrint",[["circle",{cx:"11",cy:"4",r:"2",key:"vol9p0"}],["circle",{cx:"18",cy:"8",r:"2",key:"17gozi"}],["circle",{cx:"20",cy:"16",r:"2",key:"1v9bxh"}],["path",{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z",key:"1ydw1z"}]]),Wp=re("Pencil",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]),yj=re("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]),vj=re("Plane",[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]]),bj=re("PlugZap",[["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m18 3-4 4h6l-4 4",key:"16psg9"}]]),gv=re("PlusCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]),Vc=re("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),wj=re("Printer",[["polyline",{points:"6 9 6 2 18 2 18 9",key:"1306q4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["rect",{width:"12",height:"8",x:"6",y:"14",key:"5ipwut"}]]),_j=re("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]),jj=re("Ribbon",[["path",{d:"M17.75 9.01c-.52 2.08-1.83 3.64-3.18 5.49l-2.6 3.54-2.97 4-3.5-2.54 3.85-4.97c-1.86-2.61-2.8-3.77-3.16-5.44",key:"1njedg"}],["path",{d:"M17.75 9.01A7 7 0 0 0 6.2 9.1C6.06 8.5 6 7.82 6 7c0-3.5 2.83-5 5.98-5C15.24 2 18 3.5 18 7c0 .73-.09 1.4-.25 2.01Z",key:"10len7"}],["path",{d:"m9.35 14.53 2.64-3.31",key:"1wfi09"}],["path",{d:"m11.97 18.04 2.99 4 3.54-2.54-3.93-5",key:"1ezyge"}],["path",{d:"M14 8c0 1-1 2-2.01 3.22C11 10 10 9 10 8a2 2 0 1 1 4 0",key:"aw0zq5"}]]),kj=re("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]),Sj=re("School",[["path",{d:"m4 6 8-4 8 4",key:"1q0ilc"}],["path",{d:"m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2",key:"1vwozw"}],["path",{d:"M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4",key:"cpkuc4"}],["path",{d:"M18 5v17",key:"1sw6gf"}],["path",{d:"M6 5v17",key:"1xfsm0"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}]]),Ps=re("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]),wg=re("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),xv=re("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]),Nj=re("ShieldAlert",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]),Sh=re("Shirt",[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]),Nh=re("ShoppingBasket",[["path",{d:"m5 11 4-7",key:"116ra9"}],["path",{d:"m19 11-4-7",key:"cnml18"}],["path",{d:"M2 11h20",key:"3eubbj"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4",key:"1x2lvw"}],["path",{d:"m9 11 1 9",key:"1ojof7"}],["path",{d:"M4.5 15.5h15",key:"13mye1"}],["path",{d:"m15 11-1 9",key:"5wnq3a"}]]),wi=re("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]),jc=re("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]),_g=re("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]),Cj=re("Smile",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]),Pj=re("Soup",[["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z",key:"4rw317"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M19.5 12 22 6",key:"shfsr5"}],["path",{d:"M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62",key:"rpc6vp"}],["path",{d:"M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62",key:"1lf63m"}],["path",{d:"M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62",key:"97tijn"}]]),Gn=re("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]),Ch=re("Sprout",[["path",{d:"M7 20h10",key:"e6iznv"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10",key:"161w41"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",key:"9gtqwd"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",key:"bkxnd2"}]]),Ph=re("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]),yv=re("Stethoscope",[["path",{d:"M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3",key:"1jd90r"}],["path",{d:"M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4",key:"126ukv"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]]),Gt=re("Store",[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7",key:"jon5kx"}]]),vv=re("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),kc=re("Tag",[["path",{d:"M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z",key:"14b2ls"}],["path",{d:"M7 7h.01",key:"7u93v4"}]]),jg=re("Tags",[["path",{d:"M9 5H2v7l6.29 6.29c.94.94 2.48.94 3.42 0l3.58-3.58c.94-.94.94-2.48 0-3.42L9 5Z",key:"gt587u"}],["path",{d:"M6 9.01V9",key:"1flxpt"}],["path",{d:"m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19",key:"1cbfv1"}]]),$i=re("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]),zj=re("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]),Ej=re("Truck",[["path",{d:"M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11",key:"hs4xqm"}],["path",{d:"M14 9h4l4 4v4c0 .6-.4 1-1 1h-2",key:"11fp61"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}]]),bv=re("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]),Lj=re("UserCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]]),wv=re("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]),Mj=re("UserX",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13",key:"3nzzx3"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13",key:"1swrse"}]]),Sc=re("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),as=re("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),_v=re("UtensilsCrossed",[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",key:"n7qcjb"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",key:"d0u48b"}],["path",{d:"m2.1 21.8 6.4-6.3",key:"yn04lh"}],["path",{d:"m19 5-7 7",key:"194lzd"}]]),Tj=re("Warehouse",[["path",{d:"M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z",key:"gksnxg"}],["path",{d:"M6 18h12",key:"9pbo8z"}],["path",{d:"M6 14h12",key:"4cwo0f"}],["rect",{width:"12",height:"12",x:"6",y:"10",key:"apd30q"}]]),Aj=re("Wheat",[["path",{d:"M2 22 16 8",key:"60hf96"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1rdhi6"}],["path",{d:"M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1sdzmb"}],["path",{d:"M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"eoatbi"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z",key:"19rau1"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"tc8ph9"}],["path",{d:"M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"2m8kc5"}],["path",{d:"M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"vex3ng"}]]),Ij=re("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]),Rj=re("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function jv(e,t){return function(){return e.apply(t,arguments)}}const{toString:Oj}=Object.prototype,{getPrototypeOf:Hp}=Object,{iterator:Gc,toStringTag:kv}=Symbol,Kc=(e=>t=>{const n=Oj.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Yn=e=>(e=e.toLowerCase(),t=>Kc(t)===e),Yc=e=>t=>typeof t===e,{isArray:fo}=Array,io=Yc("undefined");function Bs(e){return e!==null&&!io(e)&&e.constructor!==null&&!io(e.constructor)&&dn(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Sv=Yn("ArrayBuffer");function Bj(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Sv(e.buffer),t}const Fj=Yc("string"),dn=Yc("function"),Nv=Yc("number"),Fs=e=>e!==null&&typeof e=="object",Dj=e=>e===!0||e===!1,$l=e=>{if(Kc(e)!=="object")return!1;const t=Hp(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(kv in e)&&!(Gc in e)},Uj=e=>{if(!Fs(e)||Bs(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},Wj=Yn("Date"),Hj=Yn("File"),Zj=e=>!!(e&&typeof e.uri<"u"),$j=e=>e&&typeof e.getParts<"u",qj=Yn("Blob"),Vj=Yn("FileList"),Gj=e=>Fs(e)&&dn(e.pipe);function Kj(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const kg=Kj(),Sg=typeof kg.FormData<"u"?kg.FormData:void 0,Yj=e=>{let t;return e&&(Sg&&e instanceof Sg||dn(e.append)&&((t=Kc(e))==="formdata"||t==="object"&&dn(e.toString)&&e.toString()==="[object FormData]"))},Qj=Yn("URLSearchParams"),[Jj,Xj,ek,tk]=["ReadableStream","Request","Response","Headers"].map(Yn),nk=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ds(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let a,o;if(typeof e!="object"&&(e=[e]),fo(e))for(a=0,o=e.length;a<o;a++)t.call(null,e[a],a,e);else{if(Bs(e))return;const l=n?Object.getOwnPropertyNames(e):Object.keys(e),c=l.length;let h;for(a=0;a<c;a++)h=l[a],t.call(null,e[h],h,e)}}function Cv(e,t){if(Bs(e))return null;t=t.toLowerCase();const n=Object.keys(e);let a=n.length,o;for(;a-- >0;)if(o=n[a],t===o.toLowerCase())return o;return null}const Wi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Pv=e=>!io(e)&&e!==Wi;function zh(){const{caseless:e,skipUndefined:t}=Pv(this)&&this||{},n={},a=(o,l)=>{if(l==="__proto__"||l==="constructor"||l==="prototype")return;const c=e&&Cv(n,l)||l;$l(n[c])&&$l(o)?n[c]=zh(n[c],o):$l(o)?n[c]=zh({},o):fo(o)?n[c]=o.slice():(!t||!io(o))&&(n[c]=o)};for(let o=0,l=arguments.length;o<l;o++)arguments[o]&&Ds(arguments[o],a);return n}const rk=(e,t,n,{allOwnKeys:a}={})=>(Ds(t,(o,l)=>{n&&dn(o)?Object.defineProperty(e,l,{value:jv(o,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,l,{value:o,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:a}),e),ik=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),ak=(e,t,n,a)=>{e.prototype=Object.create(t.prototype,a),Object.defineProperty(e.prototype,"constructor",{value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},ok=(e,t,n,a)=>{let o,l,c;const h={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),l=o.length;l-- >0;)c=o[l],(!a||a(c,e,t))&&!h[c]&&(t[c]=e[c],h[c]=!0);e=n!==!1&&Hp(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},sk=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const a=e.indexOf(t,n);return a!==-1&&a===n},lk=e=>{if(!e)return null;if(fo(e))return e;let t=e.length;if(!Nv(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},ck=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Hp(Uint8Array)),dk=(e,t)=>{const a=(e&&e[Gc]).call(e);let o;for(;(o=a.next())&&!o.done;){const l=o.value;t.call(e,l[0],l[1])}},uk=(e,t)=>{let n;const a=[];for(;(n=e.exec(t))!==null;)a.push(n);return a},hk=Yn("HTMLFormElement"),pk=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,a,o){return a.toUpperCase()+o}),Ng=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),fk=Yn("RegExp"),zv=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),a={};Ds(n,(o,l)=>{let c;(c=t(o,l,e))!==!1&&(a[l]=c||o)}),Object.defineProperties(e,a)},mk=e=>{zv(e,(t,n)=>{if(dn(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const a=e[n];if(dn(a)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},gk=(e,t)=>{const n={},a=o=>{o.forEach(l=>{n[l]=!0})};return fo(e)?a(e):a(String(e).split(t)),n},xk=()=>{},yk=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function vk(e){return!!(e&&dn(e.append)&&e[kv]==="FormData"&&e[Gc])}const bk=e=>{const t=new Array(10),n=(a,o)=>{if(Fs(a)){if(t.indexOf(a)>=0)return;if(Bs(a))return a;if(!("toJSON"in a)){t[o]=a;const l=fo(a)?[]:{};return Ds(a,(c,h)=>{const u=n(c,o+1);!io(u)&&(l[h]=u)}),t[o]=void 0,l}}return a};return n(e,0)},wk=Yn("AsyncFunction"),_k=e=>e&&(Fs(e)||dn(e))&&dn(e.then)&&dn(e.catch),Ev=((e,t)=>e?setImmediate:t?((n,a)=>(Wi.addEventListener("message",({source:o,data:l})=>{o===Wi&&l===n&&a.length&&a.shift()()},!1),o=>{a.push(o),Wi.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",dn(Wi.postMessage)),jk=typeof queueMicrotask<"u"?queueMicrotask.bind(Wi):typeof process<"u"&&process.nextTick||Ev,kk=e=>e!=null&&dn(e[Gc]),J={isArray:fo,isArrayBuffer:Sv,isBuffer:Bs,isFormData:Yj,isArrayBufferView:Bj,isString:Fj,isNumber:Nv,isBoolean:Dj,isObject:Fs,isPlainObject:$l,isEmptyObject:Uj,isReadableStream:Jj,isRequest:Xj,isResponse:ek,isHeaders:tk,isUndefined:io,isDate:Wj,isFile:Hj,isReactNativeBlob:Zj,isReactNative:$j,isBlob:qj,isRegExp:fk,isFunction:dn,isStream:Gj,isURLSearchParams:Qj,isTypedArray:ck,isFileList:Vj,forEach:Ds,merge:zh,extend:rk,trim:nk,stripBOM:ik,inherits:ak,toFlatObject:ok,kindOf:Kc,kindOfTest:Yn,endsWith:sk,toArray:lk,forEachEntry:dk,matchAll:uk,isHTMLForm:hk,hasOwnProperty:Ng,hasOwnProp:Ng,reduceDescriptors:zv,freezeMethods:mk,toObjectSet:gk,toCamelCase:pk,noop:xk,toFiniteNumber:yk,findKey:Cv,global:Wi,isContextDefined:Pv,isSpecCompliantForm:vk,toJSONObject:bk,isAsyncFn:wk,isThenable:_k,setImmediate:Ev,asap:jk,isIterable:kk};let ze=class Lv extends Error{static from(t,n,a,o,l,c){const h=new Lv(t.message,n||t.code,a,o,l);return h.cause=t,h.name=t.name,t.status!=null&&h.status==null&&(h.status=t.status),c&&Object.assign(h,c),h}constructor(t,n,a,o,l){super(t),Object.defineProperty(this,"message",{value:t,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),a&&(this.config=a),o&&(this.request=o),l&&(this.response=l,this.status=l.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:J.toJSONObject(this.config),code:this.code,status:this.status}}};ze.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";ze.ERR_BAD_OPTION="ERR_BAD_OPTION";ze.ECONNABORTED="ECONNABORTED";ze.ETIMEDOUT="ETIMEDOUT";ze.ERR_NETWORK="ERR_NETWORK";ze.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";ze.ERR_DEPRECATED="ERR_DEPRECATED";ze.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";ze.ERR_BAD_REQUEST="ERR_BAD_REQUEST";ze.ERR_CANCELED="ERR_CANCELED";ze.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";ze.ERR_INVALID_URL="ERR_INVALID_URL";const Sk=null;function Eh(e){return J.isPlainObject(e)||J.isArray(e)}function Mv(e){return J.endsWith(e,"[]")?e.slice(0,-2):e}function ou(e,t,n){return e?e.concat(t).map(function(o,l){return o=Mv(o),!n&&l?"["+o+"]":o}).join(n?".":""):t}function Nk(e){return J.isArray(e)&&!e.some(Eh)}const Ck=J.toFlatObject(J,{},null,function(t){return/^is[A-Z]/.test(t)});function Qc(e,t,n){if(!J.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=J.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(j,P){return!J.isUndefined(P[j])});const a=n.metaTokens,o=n.visitor||g,l=n.dots,c=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&J.isSpecCompliantForm(t);if(!J.isFunction(o))throw new TypeError("visitor must be a function");function m(_){if(_===null)return"";if(J.isDate(_))return _.toISOString();if(J.isBoolean(_))return _.toString();if(!u&&J.isBlob(_))throw new ze("Blob is not supported. Use a Buffer instead.");return J.isArrayBuffer(_)||J.isTypedArray(_)?u&&typeof Blob=="function"?new Blob([_]):Buffer.from(_):_}function g(_,j,P){let N=_;if(J.isReactNative(t)&&J.isReactNativeBlob(_))return t.append(ou(P,j,l),m(_)),!1;if(_&&!P&&typeof _=="object"){if(J.endsWith(j,"{}"))j=a?j:j.slice(0,-2),_=JSON.stringify(_);else if(J.isArray(_)&&Nk(_)||(J.isFileList(_)||J.endsWith(j,"[]"))&&(N=J.toArray(_)))return j=Mv(j),N.forEach(function(z,C){!(J.isUndefined(z)||z===null)&&t.append(c===!0?ou([j],C,l):c===null?j:j+"[]",m(z))}),!1}return Eh(_)?!0:(t.append(ou(P,j,l),m(_)),!1)}const x=[],v=Object.assign(Ck,{defaultVisitor:g,convertValue:m,isVisitable:Eh});function b(_,j){if(!J.isUndefined(_)){if(x.indexOf(_)!==-1)throw Error("Circular reference detected in "+j.join("."));x.push(_),J.forEach(_,function(N,w){(!(J.isUndefined(N)||N===null)&&o.call(t,N,J.isString(w)?w.trim():w,j,v))===!0&&b(N,j?j.concat(w):[w])}),x.pop()}}if(!J.isObject(e))throw new TypeError("data must be an object");return b(e),t}function Cg(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(a){return t[a]})}function Zp(e,t){this._pairs=[],e&&Qc(e,this,t)}const Tv=Zp.prototype;Tv.append=function(t,n){this._pairs.push([t,n])};Tv.toString=function(t){const n=t?function(a){return t.call(this,a,Cg)}:Cg;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function Pk(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Av(e,t,n){if(!t)return e;const a=n&&n.encode||Pk,o=J.isFunction(n)?{serialize:n}:n,l=o&&o.serialize;let c;if(l?c=l(t,o):c=J.isURLSearchParams(t)?t.toString():new Zp(t,o).toString(a),c){const h=e.indexOf("#");h!==-1&&(e=e.slice(0,h)),e+=(e.indexOf("?")===-1?"?":"&")+c}return e}class Pg{constructor(){this.handlers=[]}use(t,n,a){return this.handlers.push({fulfilled:t,rejected:n,synchronous:a?a.synchronous:!1,runWhen:a?a.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){J.forEach(this.handlers,function(a){a!==null&&t(a)})}}const $p={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},zk=typeof URLSearchParams<"u"?URLSearchParams:Zp,Ek=typeof FormData<"u"?FormData:null,Lk=typeof Blob<"u"?Blob:null,Mk={isBrowser:!0,classes:{URLSearchParams:zk,FormData:Ek,Blob:Lk},protocols:["http","https","file","blob","url","data"]},qp=typeof window<"u"&&typeof document<"u",Lh=typeof navigator=="object"&&navigator||void 0,Tk=qp&&(!Lh||["ReactNative","NativeScript","NS"].indexOf(Lh.product)<0),Ak=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Ik=qp&&window.location.href||"http://localhost",Rk=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:qp,hasStandardBrowserEnv:Tk,hasStandardBrowserWebWorkerEnv:Ak,navigator:Lh,origin:Ik},Symbol.toStringTag,{value:"Module"})),Ft={...Rk,...Mk};function Ok(e,t){return Qc(e,new Ft.classes.URLSearchParams,{visitor:function(n,a,o,l){return Ft.isNode&&J.isBuffer(n)?(this.append(a,n.toString("base64")),!1):l.defaultVisitor.apply(this,arguments)},...t})}function Bk(e){return J.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Fk(e){const t={},n=Object.keys(e);let a;const o=n.length;let l;for(a=0;a<o;a++)l=n[a],t[l]=e[l];return t}function Iv(e){function t(n,a,o,l){let c=n[l++];if(c==="__proto__")return!0;const h=Number.isFinite(+c),u=l>=n.length;return c=!c&&J.isArray(o)?o.length:c,u?(J.hasOwnProp(o,c)?o[c]=[o[c],a]:o[c]=a,!h):((!o[c]||!J.isObject(o[c]))&&(o[c]=[]),t(n,a,o[c],l)&&J.isArray(o[c])&&(o[c]=Fk(o[c])),!h)}if(J.isFormData(e)&&J.isFunction(e.entries)){const n={};return J.forEachEntry(e,(a,o)=>{t(Bk(a),o,n,0)}),n}return null}function Dk(e,t,n){if(J.isString(e))try{return(t||JSON.parse)(e),J.trim(e)}catch(a){if(a.name!=="SyntaxError")throw a}return(n||JSON.stringify)(e)}const Us={transitional:$p,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const a=n.getContentType()||"",o=a.indexOf("application/json")>-1,l=J.isObject(t);if(l&&J.isHTMLForm(t)&&(t=new FormData(t)),J.isFormData(t))return o?JSON.stringify(Iv(t)):t;if(J.isArrayBuffer(t)||J.isBuffer(t)||J.isStream(t)||J.isFile(t)||J.isBlob(t)||J.isReadableStream(t))return t;if(J.isArrayBufferView(t))return t.buffer;if(J.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let h;if(l){if(a.indexOf("application/x-www-form-urlencoded")>-1)return Ok(t,this.formSerializer).toString();if((h=J.isFileList(t))||a.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return Qc(h?{"files[]":t}:t,u&&new u,this.formSerializer)}}return l||o?(n.setContentType("application/json",!1),Dk(t)):t}],transformResponse:[function(t){const n=this.transitional||Us.transitional,a=n&&n.forcedJSONParsing,o=this.responseType==="json";if(J.isResponse(t)||J.isReadableStream(t))return t;if(t&&J.isString(t)&&(a&&!this.responseType||o)){const c=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t,this.parseReviver)}catch(h){if(c)throw h.name==="SyntaxError"?ze.from(h,ze.ERR_BAD_RESPONSE,this,null,this.response):h}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ft.classes.FormData,Blob:Ft.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};J.forEach(["delete","get","head","post","put","patch"],e=>{Us.headers[e]={}});const Uk=J.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Wk=e=>{const t={};let n,a,o;return e&&e.split(`
`).forEach(function(c){o=c.indexOf(":"),n=c.substring(0,o).trim().toLowerCase(),a=c.substring(o+1).trim(),!(!n||t[n]&&Uk[n])&&(n==="set-cookie"?t[n]?t[n].push(a):t[n]=[a]:t[n]=t[n]?t[n]+", "+a:a)}),t},zg=Symbol("internals");function Bo(e){return e&&String(e).trim().toLowerCase()}function ql(e){return e===!1||e==null?e:J.isArray(e)?e.map(ql):String(e).replace(/[\r\n]+$/,"")}function Hk(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let a;for(;a=n.exec(e);)t[a[1]]=a[2];return t}const Zk=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function su(e,t,n,a,o){if(J.isFunction(a))return a.call(this,t,n);if(o&&(t=n),!!J.isString(t)){if(J.isString(a))return t.indexOf(a)!==-1;if(J.isRegExp(a))return a.test(t)}}function $k(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,a)=>n.toUpperCase()+a)}function qk(e,t){const n=J.toCamelCase(" "+t);["get","set","has"].forEach(a=>{Object.defineProperty(e,a+n,{value:function(o,l,c){return this[a].call(this,t,o,l,c)},configurable:!0})})}let un=class{constructor(t){t&&this.set(t)}set(t,n,a){const o=this;function l(h,u,m){const g=Bo(u);if(!g)throw new Error("header name must be a non-empty string");const x=J.findKey(o,g);(!x||o[x]===void 0||m===!0||m===void 0&&o[x]!==!1)&&(o[x||u]=ql(h))}const c=(h,u)=>J.forEach(h,(m,g)=>l(m,g,u));if(J.isPlainObject(t)||t instanceof this.constructor)c(t,n);else if(J.isString(t)&&(t=t.trim())&&!Zk(t))c(Wk(t),n);else if(J.isObject(t)&&J.isIterable(t)){let h={},u,m;for(const g of t){if(!J.isArray(g))throw TypeError("Object iterator must return a key-value pair");h[m=g[0]]=(u=h[m])?J.isArray(u)?[...u,g[1]]:[u,g[1]]:g[1]}c(h,n)}else t!=null&&l(n,t,a);return this}get(t,n){if(t=Bo(t),t){const a=J.findKey(this,t);if(a){const o=this[a];if(!n)return o;if(n===!0)return Hk(o);if(J.isFunction(n))return n.call(this,o,a);if(J.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Bo(t),t){const a=J.findKey(this,t);return!!(a&&this[a]!==void 0&&(!n||su(this,this[a],a,n)))}return!1}delete(t,n){const a=this;let o=!1;function l(c){if(c=Bo(c),c){const h=J.findKey(a,c);h&&(!n||su(a,a[h],h,n))&&(delete a[h],o=!0)}}return J.isArray(t)?t.forEach(l):l(t),o}clear(t){const n=Object.keys(this);let a=n.length,o=!1;for(;a--;){const l=n[a];(!t||su(this,this[l],l,t,!0))&&(delete this[l],o=!0)}return o}normalize(t){const n=this,a={};return J.forEach(this,(o,l)=>{const c=J.findKey(a,l);if(c){n[c]=ql(o),delete n[l];return}const h=t?$k(l):String(l).trim();h!==l&&delete n[l],n[h]=ql(o),a[h]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return J.forEach(this,(a,o)=>{a!=null&&a!==!1&&(n[o]=t&&J.isArray(a)?a.join(", "):a)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const a=new this(t);return n.forEach(o=>a.set(o)),a}static accessor(t){const a=(this[zg]=this[zg]={accessors:{}}).accessors,o=this.prototype;function l(c){const h=Bo(c);a[h]||(qk(o,c),a[h]=!0)}return J.isArray(t)?t.forEach(l):l(t),this}};un.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);J.reduceDescriptors(un.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(a){this[n]=a}}});J.freezeMethods(un);function lu(e,t){const n=this||Us,a=t||n,o=un.from(a.headers);let l=a.data;return J.forEach(e,function(h){l=h.call(n,l,o.normalize(),t?t.status:void 0)}),o.normalize(),l}function Rv(e){return!!(e&&e.__CANCEL__)}let Ws=class extends ze{constructor(t,n,a){super(t??"canceled",ze.ERR_CANCELED,n,a),this.name="CanceledError",this.__CANCEL__=!0}};function Ov(e,t,n){const a=n.config.validateStatus;!n.status||!a||a(n.status)?e(n):t(new ze("Request failed with status code "+n.status,[ze.ERR_BAD_REQUEST,ze.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Vk(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Gk(e,t){e=e||10;const n=new Array(e),a=new Array(e);let o=0,l=0,c;return t=t!==void 0?t:1e3,function(u){const m=Date.now(),g=a[l];c||(c=m),n[o]=u,a[o]=m;let x=l,v=0;for(;x!==o;)v+=n[x++],x=x%e;if(o=(o+1)%e,o===l&&(l=(l+1)%e),m-c<t)return;const b=g&&m-g;return b?Math.round(v*1e3/b):void 0}}function Kk(e,t){let n=0,a=1e3/t,o,l;const c=(m,g=Date.now())=>{n=g,o=null,l&&(clearTimeout(l),l=null),e(...m)};return[(...m)=>{const g=Date.now(),x=g-n;x>=a?c(m,g):(o=m,l||(l=setTimeout(()=>{l=null,c(o)},a-x)))},()=>o&&c(o)]}const Nc=(e,t,n=3)=>{let a=0;const o=Gk(50,250);return Kk(l=>{const c=l.loaded,h=l.lengthComputable?l.total:void 0,u=c-a,m=o(u),g=c<=h;a=c;const x={loaded:c,total:h,progress:h?c/h:void 0,bytes:u,rate:m||void 0,estimated:m&&h&&g?(h-c)/m:void 0,event:l,lengthComputable:h!=null,[t?"download":"upload"]:!0};e(x)},n)},Eg=(e,t)=>{const n=e!=null;return[a=>t[0]({lengthComputable:n,total:e,loaded:a}),t[1]]},Lg=e=>(...t)=>J.asap(()=>e(...t)),Yk=Ft.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,Ft.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(Ft.origin),Ft.navigator&&/(msie|trident)/i.test(Ft.navigator.userAgent)):()=>!0,Qk=Ft.hasStandardBrowserEnv?{write(e,t,n,a,o,l,c){if(typeof document>"u")return;const h=[`${e}=${encodeURIComponent(t)}`];J.isNumber(n)&&h.push(`expires=${new Date(n).toUTCString()}`),J.isString(a)&&h.push(`path=${a}`),J.isString(o)&&h.push(`domain=${o}`),l===!0&&h.push("secure"),J.isString(c)&&h.push(`SameSite=${c}`),document.cookie=h.join("; ")},read(e){if(typeof document>"u")return null;const t=document.cookie.match(new RegExp("(?:^|; )"+e+"=([^;]*)"));return t?decodeURIComponent(t[1]):null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function Jk(e){return typeof e!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Xk(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Bv(e,t,n){let a=!Jk(t);return e&&(a||n==!1)?Xk(e,t):t}const Mg=e=>e instanceof un?{...e}:e;function ta(e,t){t=t||{};const n={};function a(m,g,x,v){return J.isPlainObject(m)&&J.isPlainObject(g)?J.merge.call({caseless:v},m,g):J.isPlainObject(g)?J.merge({},g):J.isArray(g)?g.slice():g}function o(m,g,x,v){if(J.isUndefined(g)){if(!J.isUndefined(m))return a(void 0,m,x,v)}else return a(m,g,x,v)}function l(m,g){if(!J.isUndefined(g))return a(void 0,g)}function c(m,g){if(J.isUndefined(g)){if(!J.isUndefined(m))return a(void 0,m)}else return a(void 0,g)}function h(m,g,x){if(x in t)return a(m,g);if(x in e)return a(void 0,m)}const u={url:l,method:l,data:l,baseURL:c,transformRequest:c,transformResponse:c,paramsSerializer:c,timeout:c,timeoutMessage:c,withCredentials:c,withXSRFToken:c,adapter:c,responseType:c,xsrfCookieName:c,xsrfHeaderName:c,onUploadProgress:c,onDownloadProgress:c,decompress:c,maxContentLength:c,maxBodyLength:c,beforeRedirect:c,transport:c,httpAgent:c,httpsAgent:c,cancelToken:c,socketPath:c,responseEncoding:c,validateStatus:h,headers:(m,g,x)=>o(Mg(m),Mg(g),x,!0)};return J.forEach(Object.keys({...e,...t}),function(g){if(g==="__proto__"||g==="constructor"||g==="prototype")return;const x=J.hasOwnProp(u,g)?u[g]:o,v=x(e[g],t[g],g);J.isUndefined(v)&&x!==h||(n[g]=v)}),n}const Fv=e=>{const t=ta({},e);let{data:n,withXSRFToken:a,xsrfHeaderName:o,xsrfCookieName:l,headers:c,auth:h}=t;if(t.headers=c=un.from(c),t.url=Av(Bv(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),h&&c.set("Authorization","Basic "+btoa((h.username||"")+":"+(h.password?unescape(encodeURIComponent(h.password)):""))),J.isFormData(n)){if(Ft.hasStandardBrowserEnv||Ft.hasStandardBrowserWebWorkerEnv)c.setContentType(void 0);else if(J.isFunction(n.getHeaders)){const u=n.getHeaders(),m=["content-type","content-length"];Object.entries(u).forEach(([g,x])=>{m.includes(g.toLowerCase())&&c.set(g,x)})}}if(Ft.hasStandardBrowserEnv&&(a&&J.isFunction(a)&&(a=a(t)),a||a!==!1&&Yk(t.url))){const u=o&&l&&Qk.read(l);u&&c.set(o,u)}return t},e4=typeof XMLHttpRequest<"u",t4=e4&&function(e){return new Promise(function(n,a){const o=Fv(e);let l=o.data;const c=un.from(o.headers).normalize();let{responseType:h,onUploadProgress:u,onDownloadProgress:m}=o,g,x,v,b,_;function j(){b&&b(),_&&_(),o.cancelToken&&o.cancelToken.unsubscribe(g),o.signal&&o.signal.removeEventListener("abort",g)}let P=new XMLHttpRequest;P.open(o.method.toUpperCase(),o.url,!0),P.timeout=o.timeout;function N(){if(!P)return;const z=un.from("getAllResponseHeaders"in P&&P.getAllResponseHeaders()),I={data:!h||h==="text"||h==="json"?P.responseText:P.response,status:P.status,statusText:P.statusText,headers:z,config:e,request:P};Ov(function(k){n(k),j()},function(k){a(k),j()},I),P=null}"onloadend"in P?P.onloadend=N:P.onreadystatechange=function(){!P||P.readyState!==4||P.status===0&&!(P.responseURL&&P.responseURL.indexOf("file:")===0)||setTimeout(N)},P.onabort=function(){P&&(a(new ze("Request aborted",ze.ECONNABORTED,e,P)),P=null)},P.onerror=function(C){const I=C&&C.message?C.message:"Network Error",E=new ze(I,ze.ERR_NETWORK,e,P);E.event=C||null,a(E),P=null},P.ontimeout=function(){let C=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const I=o.transitional||$p;o.timeoutErrorMessage&&(C=o.timeoutErrorMessage),a(new ze(C,I.clarifyTimeoutError?ze.ETIMEDOUT:ze.ECONNABORTED,e,P)),P=null},l===void 0&&c.setContentType(null),"setRequestHeader"in P&&J.forEach(c.toJSON(),function(C,I){P.setRequestHeader(I,C)}),J.isUndefined(o.withCredentials)||(P.withCredentials=!!o.withCredentials),h&&h!=="json"&&(P.responseType=o.responseType),m&&([v,_]=Nc(m,!0),P.addEventListener("progress",v)),u&&P.upload&&([x,b]=Nc(u),P.upload.addEventListener("progress",x),P.upload.addEventListener("loadend",b)),(o.cancelToken||o.signal)&&(g=z=>{P&&(a(!z||z.type?new Ws(null,e,P):z),P.abort(),P=null)},o.cancelToken&&o.cancelToken.subscribe(g),o.signal&&(o.signal.aborted?g():o.signal.addEventListener("abort",g)));const w=Vk(o.url);if(w&&Ft.protocols.indexOf(w)===-1){a(new ze("Unsupported protocol "+w+":",ze.ERR_BAD_REQUEST,e));return}P.send(l||null)})},n4=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let a=new AbortController,o;const l=function(m){if(!o){o=!0,h();const g=m instanceof Error?m:this.reason;a.abort(g instanceof ze?g:new Ws(g instanceof Error?g.message:g))}};let c=t&&setTimeout(()=>{c=null,l(new ze(`timeout of ${t}ms exceeded`,ze.ETIMEDOUT))},t);const h=()=>{e&&(c&&clearTimeout(c),c=null,e.forEach(m=>{m.unsubscribe?m.unsubscribe(l):m.removeEventListener("abort",l)}),e=null)};e.forEach(m=>m.addEventListener("abort",l));const{signal:u}=a;return u.unsubscribe=()=>J.asap(h),u}},r4=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let a=0,o;for(;a<n;)o=a+t,yield e.slice(a,o),a=o},i4=async function*(e,t){for await(const n of a4(e))yield*r4(n,t)},a4=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:a}=await t.read();if(n)break;yield a}}finally{await t.cancel()}},Tg=(e,t,n,a)=>{const o=i4(e,t);let l=0,c,h=u=>{c||(c=!0,a&&a(u))};return new ReadableStream({async pull(u){try{const{done:m,value:g}=await o.next();if(m){h(),u.close();return}let x=g.byteLength;if(n){let v=l+=x;n(v)}u.enqueue(new Uint8Array(g))}catch(m){throw h(m),m}},cancel(u){return h(u),o.return()}},{highWaterMark:2})},Ag=64*1024,{isFunction:Pl}=J,o4=(({Request:e,Response:t})=>({Request:e,Response:t}))(J.global),{ReadableStream:Ig,TextEncoder:Rg}=J.global,Og=(e,...t)=>{try{return!!e(...t)}catch{return!1}},s4=e=>{e=J.merge.call({skipUndefined:!0},o4,e);const{fetch:t,Request:n,Response:a}=e,o=t?Pl(t):typeof fetch=="function",l=Pl(n),c=Pl(a);if(!o)return!1;const h=o&&Pl(Ig),u=o&&(typeof Rg=="function"?(_=>j=>_.encode(j))(new Rg):async _=>new Uint8Array(await new n(_).arrayBuffer())),m=l&&h&&Og(()=>{let _=!1;const j=new Ig,P=new n(Ft.origin,{body:j,method:"POST",get duplex(){return _=!0,"half"}}).headers.has("Content-Type");return j.cancel(),_&&!P}),g=c&&h&&Og(()=>J.isReadableStream(new a("").body)),x={stream:g&&(_=>_.body)};o&&["text","arrayBuffer","blob","formData","stream"].forEach(_=>{!x[_]&&(x[_]=(j,P)=>{let N=j&&j[_];if(N)return N.call(j);throw new ze(`Response type '${_}' is not supported`,ze.ERR_NOT_SUPPORT,P)})});const v=async _=>{if(_==null)return 0;if(J.isBlob(_))return _.size;if(J.isSpecCompliantForm(_))return(await new n(Ft.origin,{method:"POST",body:_}).arrayBuffer()).byteLength;if(J.isArrayBufferView(_)||J.isArrayBuffer(_))return _.byteLength;if(J.isURLSearchParams(_)&&(_=_+""),J.isString(_))return(await u(_)).byteLength},b=async(_,j)=>{const P=J.toFiniteNumber(_.getContentLength());return P??v(j)};return async _=>{let{url:j,method:P,data:N,signal:w,cancelToken:z,timeout:C,onDownloadProgress:I,onUploadProgress:E,responseType:k,headers:B,withCredentials:M="same-origin",fetchOptions:T}=Fv(_),W=t||fetch;k=k?(k+"").toLowerCase():"text";let U=n4([w,z&&z.toAbortSignal()],C),se=null;const de=U&&U.unsubscribe&&(()=>{U.unsubscribe()});let he;try{if(E&&m&&P!=="get"&&P!=="head"&&(he=await b(B,N))!==0){let ce=new n(j,{method:"POST",body:N,duplex:"half"}),ne;if(J.isFormData(N)&&(ne=ce.headers.get("content-type"))&&B.setContentType(ne),ce.body){const[ue,$]=Eg(he,Nc(Lg(E)));N=Tg(ce.body,Ag,ue,$)}}J.isString(M)||(M=M?"include":"omit");const le=l&&"credentials"in n.prototype,V={...T,signal:U,method:P.toUpperCase(),headers:B.normalize().toJSON(),body:N,duplex:"half",credentials:le?M:void 0};se=l&&new n(j,V);let A=await(l?W(se,T):W(j,V));const ie=g&&(k==="stream"||k==="response");if(g&&(I||ie&&de)){const ce={};["status","statusText","headers"].forEach(G=>{ce[G]=A[G]});const ne=J.toFiniteNumber(A.headers.get("content-length")),[ue,$]=I&&Eg(ne,Nc(Lg(I),!0))||[];A=new a(Tg(A.body,Ag,ue,()=>{$&&$(),de&&de()}),ce)}k=k||"text";let q=await x[J.findKey(x,k)||"text"](A,_);return!ie&&de&&de(),await new Promise((ce,ne)=>{Ov(ce,ne,{data:q,headers:un.from(A.headers),status:A.status,statusText:A.statusText,config:_,request:se})})}catch(le){throw de&&de(),le&&le.name==="TypeError"&&/Load failed|fetch/i.test(le.message)?Object.assign(new ze("Network Error",ze.ERR_NETWORK,_,se,le&&le.response),{cause:le.cause||le}):ze.from(le,le&&le.code,_,se,le&&le.response)}}},l4=new Map,Dv=e=>{let t=e&&e.env||{};const{fetch:n,Request:a,Response:o}=t,l=[a,o,n];let c=l.length,h=c,u,m,g=l4;for(;h--;)u=l[h],m=g.get(u),m===void 0&&g.set(u,m=h?new Map:s4(t)),g=m;return m};Dv();const Vp={http:Sk,xhr:t4,fetch:{get:Dv}};J.forEach(Vp,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Bg=e=>`- ${e}`,c4=e=>J.isFunction(e)||e===null||e===!1;function d4(e,t){e=J.isArray(e)?e:[e];const{length:n}=e;let a,o;const l={};for(let c=0;c<n;c++){a=e[c];let h;if(o=a,!c4(a)&&(o=Vp[(h=String(a)).toLowerCase()],o===void 0))throw new ze(`Unknown adapter '${h}'`);if(o&&(J.isFunction(o)||(o=o.get(t))))break;l[h||"#"+c]=o}if(!o){const c=Object.entries(l).map(([u,m])=>`adapter ${u} `+(m===!1?"is not supported by the environment":"is not available in the build"));let h=n?c.length>1?`since :
`+c.map(Bg).join(`
`):" "+Bg(c[0]):"as no adapter specified";throw new ze("There is no suitable adapter to dispatch the request "+h,"ERR_NOT_SUPPORT")}return o}const Uv={getAdapter:d4,adapters:Vp};function cu(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ws(null,e)}function Fg(e){return cu(e),e.headers=un.from(e.headers),e.data=lu.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Uv.getAdapter(e.adapter||Us.adapter,e)(e).then(function(a){return cu(e),a.data=lu.call(e,e.transformResponse,a),a.headers=un.from(a.headers),a},function(a){return Rv(a)||(cu(e),a&&a.response&&(a.response.data=lu.call(e,e.transformResponse,a.response),a.response.headers=un.from(a.response.headers))),Promise.reject(a)})}const Wv="1.14.0",Jc={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Jc[e]=function(a){return typeof a===e||"a"+(t<1?"n ":" ")+e}});const Dg={};Jc.transitional=function(t,n,a){function o(l,c){return"[Axios v"+Wv+"] Transitional option '"+l+"'"+c+(a?". "+a:"")}return(l,c,h)=>{if(t===!1)throw new ze(o(c," has been removed"+(n?" in "+n:"")),ze.ERR_DEPRECATED);return n&&!Dg[c]&&(Dg[c]=!0,console.warn(o(c," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(l,c,h):!0}};Jc.spelling=function(t){return(n,a)=>(console.warn(`${a} is likely a misspelling of ${t}`),!0)};function u4(e,t,n){if(typeof e!="object")throw new ze("options must be an object",ze.ERR_BAD_OPTION_VALUE);const a=Object.keys(e);let o=a.length;for(;o-- >0;){const l=a[o],c=t[l];if(c){const h=e[l],u=h===void 0||c(h,l,e);if(u!==!0)throw new ze("option "+l+" must be "+u,ze.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ze("Unknown option "+l,ze.ERR_BAD_OPTION)}}const Vl={assertOptions:u4,validators:Jc},Nn=Vl.validators;let qi=class{constructor(t){this.defaults=t||{},this.interceptors={request:new Pg,response:new Pg}}async request(t,n){try{return await this._request(t,n)}catch(a){if(a instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const l=o.stack?o.stack.replace(/^.+\n/,""):"";try{a.stack?l&&!String(a.stack).endsWith(l.replace(/^.+\n.+\n/,""))&&(a.stack+=`
`+l):a.stack=l}catch{}}throw a}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=ta(this.defaults,n);const{transitional:a,paramsSerializer:o,headers:l}=n;a!==void 0&&Vl.assertOptions(a,{silentJSONParsing:Nn.transitional(Nn.boolean),forcedJSONParsing:Nn.transitional(Nn.boolean),clarifyTimeoutError:Nn.transitional(Nn.boolean),legacyInterceptorReqResOrdering:Nn.transitional(Nn.boolean)},!1),o!=null&&(J.isFunction(o)?n.paramsSerializer={serialize:o}:Vl.assertOptions(o,{encode:Nn.function,serialize:Nn.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Vl.assertOptions(n,{baseUrl:Nn.spelling("baseURL"),withXsrfToken:Nn.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let c=l&&J.merge(l.common,l[n.method]);l&&J.forEach(["delete","get","head","post","put","patch","common"],_=>{delete l[_]}),n.headers=un.concat(c,l);const h=[];let u=!0;this.interceptors.request.forEach(function(j){if(typeof j.runWhen=="function"&&j.runWhen(n)===!1)return;u=u&&j.synchronous;const P=n.transitional||$p;P&&P.legacyInterceptorReqResOrdering?h.unshift(j.fulfilled,j.rejected):h.push(j.fulfilled,j.rejected)});const m=[];this.interceptors.response.forEach(function(j){m.push(j.fulfilled,j.rejected)});let g,x=0,v;if(!u){const _=[Fg.bind(this),void 0];for(_.unshift(...h),_.push(...m),v=_.length,g=Promise.resolve(n);x<v;)g=g.then(_[x++],_[x++]);return g}v=h.length;let b=n;for(;x<v;){const _=h[x++],j=h[x++];try{b=_(b)}catch(P){j.call(this,P);break}}try{g=Fg.call(this,b)}catch(_){return Promise.reject(_)}for(x=0,v=m.length;x<v;)g=g.then(m[x++],m[x++]);return g}getUri(t){t=ta(this.defaults,t);const n=Bv(t.baseURL,t.url,t.allowAbsoluteUrls);return Av(n,t.params,t.paramsSerializer)}};J.forEach(["delete","get","head","options"],function(t){qi.prototype[t]=function(n,a){return this.request(ta(a||{},{method:t,url:n,data:(a||{}).data}))}});J.forEach(["post","put","patch"],function(t){function n(a){return function(l,c,h){return this.request(ta(h||{},{method:t,headers:a?{"Content-Type":"multipart/form-data"}:{},url:l,data:c}))}}qi.prototype[t]=n(),qi.prototype[t+"Form"]=n(!0)});let h4=class Hv{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(l){n=l});const a=this;this.promise.then(o=>{if(!a._listeners)return;let l=a._listeners.length;for(;l-- >0;)a._listeners[l](o);a._listeners=null}),this.promise.then=o=>{let l;const c=new Promise(h=>{a.subscribe(h),l=h}).then(o);return c.cancel=function(){a.unsubscribe(l)},c},t(function(l,c,h){a.reason||(a.reason=new Ws(l,c,h),n(a.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=a=>{t.abort(a)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new Hv(function(o){t=o}),cancel:t}}};function p4(e){return function(n){return e.apply(null,n)}}function f4(e){return J.isObject(e)&&e.isAxiosError===!0}const Mh={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Mh).forEach(([e,t])=>{Mh[t]=e});function Zv(e){const t=new qi(e),n=jv(qi.prototype.request,t);return J.extend(n,qi.prototype,t,{allOwnKeys:!0}),J.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return Zv(ta(e,o))},n}const yt=Zv(Us);yt.Axios=qi;yt.CanceledError=Ws;yt.CancelToken=h4;yt.isCancel=Rv;yt.VERSION=Wv;yt.toFormData=Qc;yt.AxiosError=ze;yt.Cancel=yt.CanceledError;yt.all=function(t){return Promise.all(t)};yt.spread=p4;yt.isAxiosError=f4;yt.mergeConfig=ta;yt.AxiosHeaders=un;yt.formToJSON=e=>Iv(J.isHTMLForm(e)?new FormData(e):e);yt.getAdapter=Uv.getAdapter;yt.HttpStatusCode=Mh;yt.default=yt;const{Axios:YN,AxiosError:QN,CanceledError:JN,isCancel:XN,CancelToken:e3,VERSION:t3,all:n3,Cancel:r3,isAxiosError:i3,spread:a3,toFormData:o3,AxiosHeaders:s3,HttpStatusCode:l3,formToJSON:c3,getAdapter:d3,mergeConfig:u3}=yt;function m4(){return"/api/"}const xe=yt.create({baseURL:m4()});let Th=null,du=!1;function Ug(e){Th=typeof e=="function"?e:null}xe.interceptors.request.use(e=>{const t=localStorage.getItem("token");return t&&(e.headers.Authorization=`Bearer ${t}`),e});xe.interceptors.response.use(e=>e,async e=>{var t;if(e.response&&e.response.status===401){const n=window.location.pathname,a=String(((t=e.config)==null?void 0:t.url)||"");if(n==="/login"||n==="/register"||a.includes("/users/login/")||a.includes("/users/register/")||du)return Promise.reject(e);du=!0;try{let o=!0;Th?o=await Th():o=window.confirm("تم قطع الجلسة أو انتهت صلاحية الدخول. الانتقال إلى صفحة تسجيل الدخول؟"),o&&(localStorage.removeItem("token"),localStorage.removeItem("refresh"),localStorage.removeItem("is_primary_admin"),window.location.href="/login")}finally{du=!1}}return Promise.reject(e)});const $v=async(e,t)=>{var a,o,l,c;const n=await xe.post("users/login/",{username:e,password:t});return n.data.access&&(localStorage.setItem("token",n.data.access),localStorage.setItem("refresh",n.data.refresh),localStorage.setItem("is_verified",((a=n.data.user)==null?void 0:a.is_whatsapp_verified)??"true"),localStorage.setItem("user_type",((o=n.data.user)==null?void 0:o.user_type)||"shopper"),localStorage.setItem("user_name",((l=n.data.user)==null?void 0:l.username)||e||""),localStorage.setItem("is_primary_admin",(c=n.data.user)!=null&&c.is_primary_admin?"true":"false"),localStorage.removeItem("isGuest")),n.data},g4=async e=>(await xe.post("users/register/",e)).data,qv=()=>{localStorage.removeItem("token"),localStorage.removeItem("refresh"),localStorage.removeItem("user_type"),localStorage.removeItem("user_name"),localStorage.removeItem("is_verified"),localStorage.removeItem("is_primary_admin"),localStorage.removeItem("isGuest")},x4=({isOpen:e,onClose:t,title:n,message:a,type:o="info",onConfirm:l,inputValue:c,setInputValue:h,placeholder:u="أدخل القيمة هنا...",options:m,primaryActionLabel:g,onPrimaryAction:x})=>{if(!e)return null;const v=Array.isArray(m)?m:[],b=typeof window<"u"&&o==="select"&&window.matchMedia&&window.matchMedia("(max-width: 520px)").matches&&v.length>0,_=()=>{o==="prompt"?l&&l(c):o==="select"?l&&l(null):l?l(!0):t()};return i.jsx("div",{className:"modal-overlay flex-center",children:i.jsxs("div",{className:"modal-content card animate-float",children:[i.jsxs("div",{className:"modal-header flex-center",children:[i.jsxs("div",{className:`modal-icon flex-center ${o}`,children:[o==="info"&&i.jsx(dj,{size:24}),o==="confirm"&&i.jsx(R5,{size:24}),o==="prompt"&&i.jsx(G5,{size:24}),o==="select"&&i.jsx(wi,{size:24})]}),i.jsx("h3",{children:n}),i.jsx("button",{className:"close-btn",onClick:t,children:i.jsx(Rj,{size:20})})]}),i.jsxs("div",{className:"modal-body",children:[i.jsx("p",{children:a}),o==="prompt"&&i.jsx("div",{className:"input-group",style:{marginTop:"15px"},children:i.jsx("input",{type:"text",value:c,onChange:j=>h(j.target.value),placeholder:u,autoFocus:!0})}),o==="select"&&i.jsx("div",{className:"modal-select-list",style:{marginTop:14},children:v.length===0?i.jsx("div",{style:{padding:"12px 14px",borderRadius:12,background:"var(--surface, #fdfdf9)",border:"1px solid var(--border, #e8e8e8)",color:"var(--text-secondary, #666)",lineHeight:1.6,fontWeight:700},children:"لا يوجد لديك أي سلال."}):v.map(j=>i.jsxs("button",{type:"button",className:"btn-secondary",onClick:()=>l&&l(j.value),style:{width:"100%",justifyContent:"space-between",display:"flex",alignItems:"center",gap:12,padding:"12px 14px",borderRadius:12,fontWeight:900},children:[i.jsx("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:j.label}),j.badge!=null?i.jsx("span",{style:{fontWeight:800,color:"var(--text-secondary)"},children:j.badge}):null]},j.id))})]}),i.jsxs("div",{className:"modal-footer flex-center",children:[(o==="confirm"||o==="prompt")&&i.jsx("button",{className:"btn-secondary",onClick:t,children:"إلغاء"}),o==="select"&&!b&&(g||x)?i.jsxs("button",{className:"btn-primary",type:"button",onClick:x||_,style:{display:"inline-flex",gap:8,alignItems:"center",justifyContent:"center"},children:[i.jsx(Vc,{size:18}),g||"سلة جديدة"]}):o==="select"?null:i.jsx("button",{className:"btn-primary",onClick:_,children:o==="confirm"||o==="prompt"?"تأكيد":"حسناً"})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        `}})]})})},y4=async()=>{},v4=async()=>!1,b4=async()=>null,w4=async()=>null,Vv=f.createContext({showAlert:y4,showConfirm:v4,showPrompt:b4,showSelect:w4}),qe=()=>f.useContext(Vv),_4=({children:e})=>{const[t,n]=f.useState({isOpen:!1,title:"",message:"",type:"info",onConfirm:null,inputValue:"",placeholder:"",options:[],primaryActionLabel:"",onPrimaryAction:null}),a=(u,m="تنبيه")=>new Promise(g=>{n({isOpen:!0,title:m,message:u,type:"info",onConfirm:()=>{g(!0),h()},onClose:()=>{g(!1),h()},inputValue:"",placeholder:""})}),o=(u,m="تأكيد")=>new Promise(g=>{n({isOpen:!0,title:m,message:u,type:"confirm",onConfirm:()=>{g(!0),h()},onClose:()=>{g(!1),h()},inputValue:"",placeholder:""})}),l=(u,m="",g="إدخال بيانات",x="")=>new Promise(v=>{n({isOpen:!0,title:g,message:u,type:"prompt",onConfirm:b=>{v(b),h()},onClose:()=>{v(null),h()},inputValue:x!=null?String(x):"",placeholder:m,options:[],primaryActionLabel:"",onPrimaryAction:null})}),c=(u,m="اختر",g=[],{primaryActionLabel:x="",primaryValue:v="__primary__"}={})=>new Promise(b=>{n({isOpen:!0,title:m,message:u,type:"select",options:g,primaryActionLabel:x,onPrimaryAction:()=>{b(v),h()},onConfirm:_=>{b(_),h()},onClose:()=>{b(null),h()},inputValue:"",placeholder:""})}),h=()=>{n(u=>({...u,isOpen:!1}))};return i.jsxs(Vv.Provider,{value:{showAlert:a,showConfirm:o,showPrompt:l,showSelect:c},children:[e,i.jsx(x4,{...t,onClose:t.onClose||h,setInputValue:u=>n(m=>({...m,inputValue:u}))})]})},la=async()=>(await xe.get("stores/categories/")).data,mo=async()=>(await xe.get("stores/community/categories/")).data,Xc=async(e=null)=>{const t=e!=null&&String(e).trim()!==""?`?category=${encodeURIComponent(e)}`:"";return(await xe.get(`stores/community/points/${t}`)).data},j4=async e=>(await xe.post("stores/community/points/submit/",e,{headers:{"Content-Type":"application/json"}})).data,k4=async e=>{const t=e===""||e==null?"":`?status=${encodeURIComponent(e)}`;return(await xe.get(`stores/admin/community-points/${t}`)).data},Gv=async e=>(await xe.post("stores/admin/community-points/",e,{headers:{"Content-Type":"application/json"}})).data,S4=async(e,t,n="")=>{const a={action:t};return n&&(a.rejection_reason=n),(await xe.patch(`stores/admin/community-points/${e}/moderate/`,a,{headers:{"Content-Type":"application/json"}})).data},ed=async(e,t,n=null)=>{let a=`stores/stores/?lat=${e}&lng=${t}`;return n&&(a+=`&category=${n}`),(await xe.get(a)).data},N4=async e=>(await xe.get(`stores/stores/${e}/`)).data,C4=async(e,t)=>{const n=Number(e),a=Number(t);return(await xe.post(`stores/stores/${n}/rate/`,{stars:a},{headers:{"Content-Type":"application/json"}})).data},Kv=async()=>(await xe.get("orders/merchant-stats/")).data,Gp=async()=>(await xe.get("products/merchant/products/")).data,P4=async e=>(await xe.get(`products/merchant/products/${e}/`)).data,z4=async e=>(await xe.post("products/merchant/products/",e)).data,Yv=async(e,t)=>(await xe.patch(`products/merchant/products/${e}/`,t)).data,E4=async e=>(await xe.delete(`products/merchant/products/${e}/`)).data,L4=async()=>(await xe.get("products/merchant/ads/")).data,M4=async e=>(await xe.post("products/merchant/ads/",e)).data,T4=async(e,t)=>(await xe.patch(`products/merchant/ads/${e}/`,t)).data,A4=async e=>(await xe.delete(`products/merchant/ads/${e}/`)).data,Qv=async()=>(await xe.get("products/merchant/subscription/")).data,I4=async()=>(await xe.get("products/merchant/subscription/renew/")).data,R4=async e=>(await xe.post("products/merchant/subscription/renew/",e)).data,O4=async()=>(await xe.get("products/admin/pending-counts/")).data,B4=async e=>{const t=e===""||e==null?"":`?status=${encodeURIComponent(e)}`;return(await xe.get(`products/admin/ads/${t}`)).data},F4=async e=>(await xe.get(`products/admin/ads/${e}/`)).data,Jv=async(e,t)=>(await xe.post(`products/admin/ads/${e}/set-status/`,{status:t})).data,D4=async e=>{const t=e===""||e==null?"":`?status=${encodeURIComponent(e)}`;return(await xe.get(`products/admin/subscription/renew/${t}`)).data},U4=async e=>(await xe.post(`products/admin/subscription/renew/${e}/approve/`)).data,W4=async e=>(await xe.post(`products/admin/subscription/renew/${e}/reject/`)).data,H4=async()=>(await xe.get("users/admin/accounts/")).data,Z4=async e=>(await xe.post("users/admin/accounts/",e)).data,$4=async(e,t)=>(await xe.patch(`users/admin/accounts/${e}/`,{is_active:t})).data,q4=async()=>(await xe.get("users/admin/metrics/")).data,V4=async()=>(await xe.get("users/public/announcements/")).data,G4=async(e=null)=>{const t={};return e!=null&&String(e).trim()!==""&&(t.since_id=String(e)),(await xe.get("users/admin/notifications/",{params:t})).data},K4=async()=>(await xe.get("users/admin/announcements/")).data,Y4=async e=>(await xe.post("users/admin/announcements/",{message:e})).data,Q4=async e=>(await xe.delete(`users/admin/announcements/${e}/`)).data,J4=async({q:e="",from:t="",to:n="",method:a="",kind:o=""}={})=>{const l={};return e&&String(e).trim()!==""&&(l.q=String(e).trim()),t&&String(t).trim()!==""&&(l.from=String(t).trim()),n&&String(n).trim()!==""&&(l.to=String(n).trim()),a&&String(a).trim()!==""&&(l.method=String(a).trim()),o&&String(o).trim()!==""&&(l.kind=String(o).trim()),(await xe.get("products/admin/finance/transfers/",{params:l})).data},X4=async(e="",t="")=>{const n={};return e!=null&&String(e).trim()!==""&&(n.q=String(e).trim()),t!=null&&String(t).trim()!==""&&(n.user_type=String(t).trim()),(await xe.get("users/admin/users/",{params:n})).data},eS=async(e,t)=>(await xe.patch(`users/admin/users/${e}/`,{is_active:t})).data,tS=async(e,t)=>{const n={};if(e!=null&&String(e).trim()!==""&&(n.q=String(e).trim()),t!=null&&String(t).trim()!==""){const o=Number(t);Number.isFinite(o)&&o>0&&(n.category=String(o))}return(await xe.get("stores/admin/stores/",{params:n})).data},nS=async(e,t)=>(await xe.patch(`stores/admin/stores/${e}/suspend/`,{is_suspended_by_admin:t})).data,rS=async()=>(await xe.get("stores/admin/categories/")).data,iS=async({name:e,imageFile:t}={})=>{const n=new FormData;return n.append("name",e||""),t&&n.append("image",t),(await xe.post("stores/admin/categories/",n)).data},aS=async e=>(await xe.delete(`stores/admin/categories/${e}/`)).data,oS=async()=>(await xe.get("stores/admin/community/categories/")).data,sS=async({name:e,slug:t="",description_hint:n="",sort_order:a=0,imageFile:o}={})=>{const l=new FormData;return l.append("name",e||""),t&&l.append("slug",t),n&&l.append("description_hint",n),a!=null&&l.append("sort_order",String(a)),o&&l.append("image",o),(await xe.post("stores/admin/community/categories/",l)).data},lS=async e=>(await xe.delete(`stores/admin/community/categories/${e}/`)).data,Xv=async()=>(await xe.get("stores/merchant/profile/")).data,cS=async e=>{const t=e instanceof FormData?{}:void 0;return(await xe.patch("stores/merchant/profile/",e,t)).data},qa=async()=>(await xe.get("orders/carts/")).data,e1=async e=>(await xe.get(`orders/carts/${e}/`)).data,dS=async e=>{await xe.delete(`orders/carts/${e}/`)},uS=async e=>{const t=`/api/orders/carts/share/${e}/`,n=localStorage.getItem("token");let o=await fetch(t,n?(l=>({headers:{Authorization:`Bearer ${n}`}}))():{});if(o.status===401&&n&&(o=await fetch(t)),!o.ok)throw new Error("shared cart fetch failed");return o.json()},td=async e=>(await xe.post("orders/carts/",{name:e})).data,hS=async(e,t)=>(await xe.patch(`orders/carts/${e}/`,t)).data,pS=async e=>(await xe.post("users/verify-whatsapp/",{code:e})).data,fS=async()=>(await xe.post("users/resend-otp/")).data,mS=async()=>{const e=await fetch("/api/users/app-open/",{method:"POST"});return e.ok?e.json():null},ao=async(e,t,n=1,a=null)=>{const o={cart:e,quantity:n};return t!=null&&t!==""&&(o.product=t),a!=null&&a!==""&&(o.sponsored_ad=a),(await xe.post("orders/cart-items/",o)).data},Wg=async(e,t)=>(await xe.patch(`orders/cart-items/${e}/`,t)).data,gS=async e=>{await xe.delete(`orders/cart-items/${e}/`)},t1=async(e=null)=>{const t=new URLSearchParams;if(e!=null&&e!==""){const o=Number(e);Number.isFinite(o)&&o>0&&t.set("category",String(o))}const n=t.toString()?`?${t.toString()}`:"";return(await xe.get(`products/public/ads/${n}`)).data},Va=async()=>(await xe.get("products/user/favorites/")).data,os=async(e,t=null)=>{const n={};return e!=null&&e!==""&&(n.product=e),t!=null&&t!==""&&(n.sponsored_ad=t),(await xe.post("products/user/favorites/",n)).data},n1=async()=>(await xe.get("users/me/notices/")).data,xS=async e=>(await xe.patch("users/me/username/",{username:e})).data,yS=async({current_password:e,new_password:t})=>(await xe.post("users/me/password/",{current_password:e,new_password:t})).data,zs=async e=>(await xe.delete(`products/user/favorites/${e}/`)).data,r1=async()=>(await xe.get("products/user/store-favorites/")).data,vS=async e=>(await xe.post("products/user/store-favorites/",{store:e})).data,i1=async e=>(await xe.delete(`products/user/store-favorites/${e}/`)).data,a1=f.createContext({pendingAds:0,pendingRenewals:0,pendingCommunityPoints:0,pendingTotal:0,refresh:async()=>{},loading:!1});function go(){return f.useContext(a1)}function bS({children:e}){const{pathname:t}=wn(),[n,a]=f.useState(0),[o,l]=f.useState(0),[c,h]=f.useState(0),[u,m]=f.useState(!1),g=f.useCallback(async()=>{if(localStorage.getItem("user_type")!=="admin"||!localStorage.getItem("token")){a(0),l(0),h(0);return}m(!0);try{const v=await O4();a(Number(v==null?void 0:v.pending_ads)||0),l(Number(v==null?void 0:v.pending_renewals)||0),h(Number(v==null?void 0:v.pending_community_points)||0)}catch{a(0),l(0),h(0)}finally{m(!1)}},[]);f.useEffect(()=>{if(localStorage.getItem("user_type")!=="admin"||!localStorage.getItem("token")){a(0),l(0),h(0);return}g()},[t,g]),f.useEffect(()=>{const v=()=>{document.visibilityState==="visible"&&localStorage.getItem("user_type")==="admin"&&localStorage.getItem("token")&&g()};return document.addEventListener("visibilitychange",v),()=>document.removeEventListener("visibilitychange",v)},[g]);const x=f.useMemo(()=>({pendingAds:n,pendingRenewals:o,pendingCommunityPoints:c,pendingTotal:n+o+c,refresh:g,loading:u}),[n,o,c,g,u]);return i.jsx(a1.Provider,{value:x,children:e})}function wS(e,t){return t?t==="/"?e==="/":e===t||e.startsWith(`${t}/`):!1}const _S=({isOpen:e,toggleSidebar:t,variant:n="shopper"})=>{const a=Nt(),{pathname:o}=wn(),{showAlert:l,showConfirm:c}=qe(),{pendingAds:h,pendingRenewals:u,pendingCommunityPoints:m,pendingTotal:g}=go(),x=localStorage.getItem("isGuest")==="true",b=!!localStorage.getItem("token")&&!x,_=localStorage.getItem("user_type")||"shopper",j=[{icon:i.jsx(ro,{size:20}),label:"الرئيسية",path:"/"},{icon:i.jsx(kc,{size:20}),label:"عروض حصرية",path:"/offers"},{icon:i.jsx(gi,{size:20}),label:"المفضلة",path:"/favorites",protected:!0},{icon:i.jsx(Nh,{size:20}),label:"السلال",path:"/carts",protected:!0},{icon:i.jsx(Cs,{size:20}),label:"الأقسام",path:"/categories"},{icon:i.jsx(Gn,{size:20}),label:"الخدمات المجتمعية",path:"/services"},{icon:i.jsx(yj,{size:20}),label:"اتصل بنا",path:"/contact"},{kind:"section",label:"الإعدادات"},{icon:i.jsx(wg,{size:20}),label:"إعدادات الحساب",path:"/settings",protected:!0}],P=[{kind:"section",label:"إدارة النظام"},{icon:i.jsx(wc,{size:20}),label:"لوحة الإدارة",path:"/admin"},{icon:i.jsx(as,{size:20}),label:"المستخدمون",path:"/admin/users"},{icon:i.jsx(as,{size:20}),label:"إدارة المدراء",path:"/admin/accounts"},{icon:i.jsx(Gt,{size:20}),label:"المتاجر المشتركة",path:"/admin/stores"},{icon:i.jsx(bc,{size:20}),label:"الأرباح والتحويلات",path:"/admin/finance"},{icon:i.jsx(Cs,{size:20}),label:"إدارة الأقسام",path:"/admin/categories"},{icon:i.jsx(Rr,{size:20}),label:"إدارة الإعلانات الممولة",path:"/admin/ads"},{icon:i.jsx(au,{size:20}),label:"إدارة الاشتراكات",path:"/admin/subscriptions"},{icon:i.jsx(Gn,{size:20}),label:"مراجعة الخدمات المجتمعية",path:"/admin/community"},{kind:"section",label:"إعدادات عامة"},{icon:i.jsx(Rr,{size:20}),label:"إعلان عام",path:"/admin/announcements"}],N=[{kind:"section",label:"إدارة النظام"},{icon:i.jsx(wc,{size:20}),label:"لوحة الإدارة",path:"/admin"},{icon:i.jsx(as,{size:20}),label:"المستخدمون",path:"/admin/users"},{icon:i.jsx(Rr,{size:20}),label:"إدارة الإعلانات الممولة",path:"/admin/ads"},{icon:i.jsx(au,{size:20}),label:"إدارة الاشتراكات",path:"/admin/subscriptions"},{icon:i.jsx(Gn,{size:20}),label:"مراجعة الخدمات المجتمعية",path:"/admin/community"}],w=[{kind:"section",label:"إدارة المتجر"},{icon:i.jsx(bc,{size:20}),label:"إحصائيات المتجر",path:"/merchant/dashboard",protected:!0},{icon:i.jsx(bi,{size:20}),label:"منتجاتي",path:"/merchant/products",protected:!0},{icon:i.jsx(Y5,{size:20}),label:"إعلاناتي الممولة",path:"/merchant/my-ads",protected:!0},{icon:i.jsx(gv,{size:20}),label:"طلب إعلان ممول",path:"/merchant/ads",protected:!0},{icon:i.jsx(au,{size:20}),label:"الاشتراك",path:"/merchant/subscription",protected:!0},{icon:i.jsx(Lj,{size:20}),label:"بروفايل المتجر",path:"/merchant/profile",protected:!0},{icon:i.jsx(wg,{size:20}),label:"إعدادات المتجر",path:"/merchant/settings",protected:!0}],z=b?_==="admin"?"admin":_==="merchant"?"merchant":"shopper":"shopper",C=localStorage.getItem("is_primary_admin")==="true",I=z==="admin"?[...j,...C?P:N]:z==="merchant"?[...j,...w]:j,E=async()=>{if(!b){a("/login"),t();return}await c("تأكيد تسجيل الخروج من الحساب؟","تسجيل الخروج")&&(localStorage.removeItem("isGuest"),qv(),a("/login"),t(),await l("تم تسجيل الخروج بنجاح.","تم"))},k=M=>M==="/admin/ads"&&h>0?h:M==="/admin/subscriptions"&&u>0?u:M==="/admin/community"&&m>0?m:null,B=(M,T)=>{T.protected&&!b&&(M.preventDefault(),l("عذراً، يجب تسجيل الدخول والتحقق من حسابك لاستخدام هذه الميزة.","الوصول محدود"),a("/login")),t()};return i.jsxs(i.Fragment,{children:[e&&i.jsx("div",{className:"sidebar-overlay",onClick:t}),i.jsxs("div",{className:`sidebar ${e?"open":""}`,children:[i.jsx("div",{className:"sidebar-header",children:i.jsxs("div",{className:"sidebar-brand",children:[i.jsx("img",{src:"/logo.png",alt:"رادار",className:"sidebar-brand-img"}),i.jsx("span",{className:"sidebar-brand-caption",children:"لوحة التنقّل"})]})}),i.jsxs("div",{className:"sidebar-menu",children:[z==="merchant"&&i.jsx("div",{className:"sidebar-role-pill sidebar-role-pill--merchant",children:"تاجر"}),z==="admin"&&i.jsx("div",{className:`sidebar-role-pill sidebar-role-pill--admin${C?" sidebar-role-pill--primary":""}`,children:localStorage.getItem("is_primary_admin")==="true"?"مدير أساسي":"مدير فرعي"}),I.map((M,T)=>{if(M.kind==="section")return i.jsx("div",{className:"sidebar-section-title",children:M.label},`sec-${T}`);const W=z==="admin"?k(M.path):null,U=wS(o,M.path);return i.jsxs(ke,{to:M.path,className:`menu-item${U?" menu-item--active":""}`,onClick:se=>B(se,M),children:[i.jsx("span",{className:"menu-icon-wrap",children:M.icon}),i.jsxs("span",{className:"menu-label-row",children:[i.jsx("span",{className:"menu-label",children:M.label}),W!=null?i.jsx("span",{className:"sidebar-pending-badge",title:"طلبات قيد المراجعة",children:W>99?"99+":W}):null]})]},T)}),i.jsx("div",{className:"sidebar-footer",children:i.jsxs("button",{type:"button",className:"menu-item menu-item--logout",onClick:E,children:[i.jsx("span",{className:"menu-icon-wrap menu-icon-wrap--muted",children:b?i.jsx(hj,{size:20}):i.jsx(Up,{size:20})}),i.jsx("span",{className:`menu-label menu-label--logout${b?" menu-label--danger":""}`,children:b?"تسجيل الخروج":"تسجيل الدخول"})]})})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
            font-weight: 900;
            line-height: 22px;
            text-align: center;
            box-shadow: 0 6px 16px rgba(0,0,0,0.12);
          }
        `}})]})]})};function Hs({maxWaitMs:e=2e4,goodEnoughM:t=95}={}){return new Promise((n,a)=>{if(!navigator.geolocation){a(new Error("unsupported"));return}let o=null,l=!1,c=null;const h=m=>{if(!l){if(l=!0,c!=null&&navigator.geolocation.clearWatch(c),clearTimeout(u),o){n(o);return}a(m||new Error("no fix"))}};c=navigator.geolocation.watchPosition(m=>{const g=m.coords.accuracy,x=Number.isFinite(g)?g:999999,v={latitude:m.coords.latitude,longitude:m.coords.longitude,accuracy:x};(!o||x<o.accuracy)&&(o=v),x<=t&&h(null)},m=>{m&&m.code===1&&h(m)},{enableHighAccuracy:!0,maximumAge:0});const u=setTimeout(()=>h(null),e)})}const o1=f.createContext(null);function jS({children:e}){const[t,n]=f.useState(null),[a,o]=f.useState(!1),[l,c]=f.useState(""),[h,u]=f.useState(0),m=f.useCallback(()=>new Promise(b=>{if(!navigator.geolocation){b(null);return}o(!0),Hs({maxWaitMs:22e3,goodEnoughM:110}).then(_=>{const j=[_.latitude,_.longitude];n(j),u(P=>P+1),o(!1),b({lat:_.latitude,lng:_.longitude,accuracyM:_.accuracy})}).catch(()=>{o(!1),b(null)})}),[]),g=f.useCallback((b,_)=>{const j=Number(b),P=Number(_);!Number.isFinite(j)||!Number.isFinite(P)||(n([j,P]),u(N=>N+1))},[]),x=f.useCallback(()=>{n(null),u(0)},[]),v=f.useMemo(()=>({userMapLocation:t,setUserMapLocation:n,setManualMapLocation:g,clearUserMapLocation:x,requestUserLocation:m,locating:a,searchQuery:l,setSearchQuery:c,locationFocusNonce:h}),[t,m,g,x,a,l,h]);return i.jsx(o1.Provider,{value:v,children:e})}function Zs(){const e=f.useContext(o1);if(!e)throw new Error("useMapExplore must be used within MapExploreProvider");return e}const s1=f.createContext(null);function Hg(){return localStorage.getItem("user_type")==="admin"&&!!localStorage.getItem("token")}const Zg="admin_notifications_last_seen_id";async function kS(e){if(!Array.isArray(e)||e.length===0||typeof window>"u")return;const t="/logo.png",n={icon:t,badge:t,lang:"ar",dir:"rtl"};try{if("serviceWorker"in navigator){const a=await navigator.serviceWorker.getRegistration();if(a!=null&&a.showNotification){for(const o of e)await a.showNotification(o.title||"رادار — إدارة",{body:o.body||"",tag:`admin-notif-${o.id}`,...n});return}}}catch{}if(!(typeof Notification>"u"||Notification.permission!=="granted"))for(const a of e)try{new Notification(a.title||"رادار — إدارة",{body:a.body||"",icon:t,tag:`admin-notif-${a.id}`})}catch{}}function SS({children:e}){const{refresh:t}=go(),[n,a]=f.useState([]),[o,l]=f.useState(0),[c,h]=f.useState(!1),u=f.useRef(Number(localStorage.getItem(Zg)||0)),m=f.useRef(0),g=f.useMemo(()=>{const _=u.current||0;return n.filter(j=>Number(j.id)>_).length},[n]),x=f.useCallback(()=>{u.current=o||u.current||0,localStorage.setItem(Zg,String(u.current||0)),a(_=>[..._])},[o]),v=f.useCallback(async()=>{if(Hg()){h(!0);try{const j=await G4(o||null),P=Array.isArray(j==null?void 0:j.results)?j.results:[],N=Number((j==null?void 0:j.latest_id)||0)||o||0;m.current+=1,P.length&&(a(w=>[...w,...P].slice(-120)),t==null||t(),m.current>1&&kS(P)),l(N)}catch{}finally{h(!1)}}},[o,t]);f.useEffect(()=>{if(!Hg())return;let _=!0;v();const j=window.setInterval(()=>{_&&v()},8e3);return()=>{_=!1,window.clearInterval(j)}},[v]);const b=f.useMemo(()=>({items:n,unreadCount:g,latestId:o,polling:c,markAllRead:x,pollOnce:v,lastSeenId:u.current}),[n,g,o,c,x,v]);return i.jsx(s1.Provider,{value:b,children:e})}function NS(){return f.useContext(s1)}function CS(){if(typeof window>"u")return!1;const e=window.navigator.userAgent||"";return/iPad|iPhone|iPod/.test(e)||e.includes("Mac")&&"ontouchend"in document}function PS(){if(typeof window>"u")return!1;const e=window.navigator.standalone===!0,t=window.matchMedia&&window.matchMedia("(display-mode: standalone)").matches;return e||t}function zS({className:e=""}){const{showConfirm:t,showAlert:n}=qe(),[a,o]=f.useState(null),[l,c]=f.useState(!1),[h,u]=f.useState(!1);f.useEffect(()=>{c(PS());const x=()=>c(!0);return window.addEventListener("appinstalled",x),()=>window.removeEventListener("appinstalled",x)},[]),f.useEffect(()=>{const x=v=>{v.preventDefault(),o(v)};return window.addEventListener("beforeinstallprompt",x),()=>window.removeEventListener("beforeinstallprompt",x)},[]);const m=f.useMemo(()=>l?"installed":a?"prompt":CS()?"ios":"none",[l,a]);if(m==="none"||m==="installed")return null;const g=async()=>{var v;if(await t(m==="ios"?"عرض تعليمات إضافة رادار إلى الشاشة الرئيسية على آيفون/آيباد؟":"تثبيت تطبيق رادار على هذا الجهاز؟","تثبيت التطبيق")){if(m==="ios"){u(b=>!b),await n("اتبع التعليمات أسفل الزر لإضافة الموقع إلى الشاشة الرئيسية.","تلميح");return}try{(v=a==null?void 0:a.prompt)==null||v.call(a);const b=await(a==null?void 0:a.userChoice);o(null),(b==null?void 0:b.outcome)==="accepted"?(c(!0),await n("تمت الموافقة على التثبيت. أكمل الخطوة من نافذة المتصفح إن ظهرت.","تم")):await n("تم إلغاء طلب التثبيت.","تنبيه")}catch{await n("تعذر إكمال التثبيت. حاول لاحقاً أو من متصفح آخر.","خطأ")}}};return i.jsxs("div",{className:`pwa-install ${e}`.trim(),children:[i.jsxs("button",{type:"button",className:"pwa-install__btn",onClick:g,children:[i.jsx("span",{className:"pwa-install__btn-ico","aria-hidden":!0,children:m==="ios"?i.jsx(xv,{size:18,strokeWidth:2}):i.jsx(ej,{size:18,strokeWidth:2})}),i.jsx("span",{className:"pwa-install__btn-txt",children:"تثبيت التطبيق"})]}),m==="ios"&&h?i.jsxs("div",{className:"pwa-install__help",children:["على iPhone/iPad: افتح الموقع في Safari ثم اضغط زر المشاركة (Share) واختر",i.jsx("strong",{children:" “Add to Home Screen”"}),"."]}):null]})}const Be=({children:e})=>{const{pathname:t}=wn(),n=Nt(),[a]=qc(),[o,l]=f.useState(!1),{requestUserLocation:c,locating:h,searchQuery:u,setSearchQuery:m}=Zs(),{showAlert:g}=qe(),[x,v]=f.useState([]),[b,_]=f.useState(!1),[j,P]=f.useState(()=>typeof window<"u"&&window.matchMedia("(max-width: 720px)").matches),N=NS();f.useEffect(()=>{t==="/search"&&m(a.get("q")??"")},[t,a,m]),f.useEffect(()=>{let F=!1;return V4().then(ge=>{const _e=Array.isArray(ge==null?void 0:ge.results)?ge.results:[];F||v(_e)}).catch(()=>{F||v([])}),()=>{F=!0}},[]);const w=()=>l(!o);f.useEffect(()=>{const F=window.setTimeout(()=>{window.dispatchEvent(new CustomEvent("radar-map-invalidate"))},320);return()=>window.clearTimeout(F)},[o]),f.useEffect(()=>{const F=window.matchMedia("(max-width: 720px)"),ge=()=>P(F.matches);return F.addEventListener("change",ge),()=>F.removeEventListener("change",ge)},[]),f.useEffect(()=>{if(!b||!j)return;const F=document.body.style.overflow;document.body.style.overflow="hidden";const ge=_e=>{_e.key==="Escape"&&_(!1)};return window.addEventListener("keydown",ge),()=>{document.body.style.overflow=F,window.removeEventListener("keydown",ge)}},[b,j]);const z=localStorage.getItem("isGuest")==="true",I=!!localStorage.getItem("token")&&!z,E=localStorage.getItem("user_name")||"",k=localStorage.getItem("user_type")||"shopper",B=I&&k==="admin",M=localStorage.getItem("is_primary_admin")==="true",{pendingTotal:T}=go(),W=k==="admin"?E||(M?"مدير أساسي":"مدير فرعي"):E||(I?"حسابي":""),U=I&&k==="merchant"?"merchant":I&&k==="admin"?"admin":"shopper",se=I&&k==="admin"&&t.startsWith("/admin"),de=t==="/map",he=t==="/register"||t==="/login",le=t==="/register"||t==="/login",V=t==="/stores",A=t==="/admin",ie=t==="/admin/stores",q=t==="/admin/ads",ce=t==="/admin/users",ne=t!=="/",ue=!se,$=f.useCallback(()=>{if(typeof window<"u"&&window.history.length>1){n(-1);return}if(t.startsWith("/admin")){n("/admin");return}if(t.startsWith("/merchant")){n("/merchant/dashboard");return}n("/")},[n,t]);f.useEffect(()=>{_(!1)},[t]);const G=B&&N&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"admin-notifs-pop__head",children:[i.jsx("strong",{children:"الإشعارات"}),i.jsx("button",{type:"button",className:"btn-toggle",onClick:async()=>{var F;try{await Promise.resolve((F=N.pollOnce)==null?void 0:F.call(N))}catch{await g("تعذر التحديث. حاول لاحقاً.","خطأ")}},children:"تحديث"})]}),i.jsxs("div",{className:"admin-notifs-list",children:[(N.items||[]).slice().reverse().slice(0,12).map(F=>i.jsxs("div",{className:"admin-notifs-item",children:[i.jsx("div",{className:"admin-notifs-item__title",children:F.title}),F.body?i.jsx("div",{className:"admin-notifs-item__body",children:F.body}):null,i.jsxs("div",{className:"admin-notifs-item__meta",children:[i.jsx("span",{children:F.event_type_label||F.event_type}),i.jsx("span",{className:"muted small",children:new Date(F.created_at).toLocaleString("ar")})]})]},F.id)),!N.items||N.items.length===0?i.jsx("div",{className:"muted small",style:{padding:10},children:"لا إشعارات بعد."}):null]})]});return i.jsxs("div",{className:`layout-container${o?" sidebar-open":""}${t==="/map"?" layout-container--map":""}`,dir:"rtl",lang:"ar",children:[he?null:i.jsxs("header",{className:`main-header main-header--market${ue?" main-header--shopper-market":""}${t==="/"?" main-header--home":""}`,children:[i.jsxs("div",{className:"main-header__primary",children:[i.jsxs("div",{className:"header-right",children:[ne&&!he?i.jsx("button",{type:"button",className:"header-back-btn",onClick:$,"aria-label":"رجوع للخلف",title:"رجوع",children:i.jsx(wh,{size:22,strokeWidth:2.25,"aria-hidden":!0})}):null,i.jsx(ke,{to:"/",className:"brand-block brand-block--toolbar",title:"رادار — الرئيسية",children:i.jsx("img",{className:"brand-block-logo brand-block-logo--toolbar",src:"/logo.png",alt:"رادار"})})]}),i.jsx("div",{className:"header-center",children:i.jsx(zS,{})}),i.jsxs("div",{className:"header-left",children:[B&&N?i.jsxs("div",{className:"admin-notifs",children:[i.jsxs("button",{type:"button",className:"admin-notifs-btn","aria-label":"إشعارات الإدارة",title:"إشعارات الإدارة","aria-expanded":b,onClick:F=>{F.stopPropagation(),_(ge=>{var Ve;const _e=!ge;return _e&&((Ve=N.markAllRead)==null||Ve.call(N)),_e}),typeof window<"u"&&"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission().catch(()=>{})},children:[i.jsx(U5,{size:20,strokeWidth:2,"aria-hidden":!0}),N.unreadCount>0?i.jsx("span",{className:"admin-notifs-badge",children:N.unreadCount>99?"99+":N.unreadCount}):null]}),!j&&b?i.jsx("div",{className:"admin-notifs-pop admin-notifs-pop--dropdown",role:"dialog","aria-modal":"true","aria-label":"إشعارات الإدارة",children:G}):null,j&&b&&typeof document<"u"&&uo.createPortal(i.jsxs(i.Fragment,{children:[i.jsx("button",{type:"button",className:"admin-notifs-backdrop","aria-label":"إغلاق الإشعارات",onClick:()=>_(!1)}),i.jsxs("div",{className:"admin-notifs-sheet",role:"dialog","aria-modal":"true","aria-label":"إشعارات الإدارة",onClick:F=>F.stopPropagation(),children:[i.jsx("div",{className:"admin-notifs-sheet__handle","aria-hidden":!0}),G]})]}),document.body)]}):null,I?i.jsxs("div",{className:"header-user-pill header-user-pill--member",title:W||"حسابي","aria-label":`المستخدم: ${W||"حسابي"}`,children:[i.jsx(Sc,{size:18,strokeWidth:1.85,"aria-hidden":!0,className:"header-user-pill__ico"}),i.jsx("span",{className:"header-user-pill__name",children:W||"حسابي"})]}):i.jsxs(ke,{to:"/register",className:"header-register-btn","aria-label":"إنشاء حساب — تسجيل",title:"تسجيل",children:[i.jsx(wv,{size:18,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{className:"header-register-btn__txt",children:"+ تسجيل"})]})]})]}),!se&&t!=="/map"?i.jsxs("div",{className:"header-mobile-search","aria-label":"بحث سريع",children:[i.jsx(ke,{to:"/categories",className:"header-mobile-search__filter","aria-label":"فلترة",children:i.jsx(jc,{size:18,strokeWidth:2,"aria-hidden":!0})}),i.jsxs(ke,{to:u!=null&&u.trim()?`/search?q=${encodeURIComponent(u.trim())}`:"/search",className:"header-mobile-search__bar","aria-label":"فتح البحث",title:"بحث",children:[i.jsx("span",{className:"header-mobile-search__placeholder",children:"ابحث عن متجر، منتج، أو قسم…"}),i.jsx("span",{className:"header-mobile-search__ico","aria-hidden":!0,children:i.jsx(Ps,{size:18,strokeWidth:2})})]})]}):null,se?i.jsxs("nav",{className:"header-nav header-nav--admin","aria-label":"تنقل لوحة الإدارة",children:[i.jsxs(ke,{to:"/admin",className:`header-nav-item${A?" header-nav-item--active":""}`,children:[i.jsx(wc,{size:20,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{children:"لوحة"})]}),i.jsxs(ke,{to:"/admin/stores",className:`header-nav-item${ie?" header-nav-item--active":""}`,children:[i.jsx(Gt,{size:20,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{children:"متاجر"})]}),i.jsxs(ke,{to:"/admin/ads",className:`header-nav-item${q?" header-nav-item--active":""}`,children:[i.jsx(jg,{size:20,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{children:"إعلانات"})]}),i.jsxs(ke,{to:"/admin/users",className:`header-nav-item${ce?" header-nav-item--active":""}`,children:[i.jsx(as,{size:20,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{children:"مستخدمون"})]}),i.jsxs("button",{type:"button",className:"header-nav-item header-nav-item--menu",onClick:w,"aria-label":"القائمة",children:[i.jsx(Ko,{size:20,strokeWidth:2,"aria-hidden":!0}),B&&T>0?i.jsx("span",{className:"nav-menu-badge","aria-label":`طلبات معلّقة: ${T}`,children:T>99?"99+":T}):null,i.jsx("span",{children:"القائمة"})]})]}):i.jsxs("nav",{className:"header-nav","aria-label":"التنقل",children:[i.jsxs(ke,{to:"/",className:`header-nav-item${t==="/"?" header-nav-item--active":""}`,children:[i.jsx(ro,{size:20,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{children:"الرئيسية"})]}),i.jsxs(ke,{to:"/map",className:`header-nav-item${t==="/map"?" header-nav-item--active":""}`,children:[i.jsx(jh,{size:20,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{children:"الخريطة"})]}),i.jsxs(ke,{to:"/stores",className:`header-nav-item${V?" header-nav-item--active":""}`,children:[i.jsx(Gt,{size:20,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{children:"المتاجر"})]}),i.jsxs("button",{type:"button",className:"header-nav-item header-nav-item--menu",onClick:w,"aria-label":"القائمة",children:[i.jsx(Ko,{size:20,strokeWidth:2,"aria-hidden":!0}),B&&T>0?i.jsx("span",{className:"nav-menu-badge","aria-label":`طلبات معلّقة: ${T}`,children:T>99?"99+":T}):null,i.jsx("span",{children:"القائمة"})]})]})]}),!he&&t!=="/map"&&x.length>0?i.jsx("div",{className:"site-announcements",role:"region","aria-label":"إعلانات عامة",children:x.map(F=>i.jsxs("div",{className:"site-announcement",children:[i.jsx(Rr,{size:18,strokeWidth:2,"aria-hidden":!0}),i.jsx("div",{className:"site-announcement__msg",children:F.message})]},F.id))}):null,i.jsx(_S,{isOpen:o,toggleSidebar:w,variant:U}),i.jsxs("main",{className:`content${t==="/"?" content--home":""}${t==="/map"?" content--map":""}${le?" content--auth":""}`,children:[ne&&de?i.jsx("div",{className:"layout-back-floating",children:i.jsx("button",{type:"button",className:"header-back-btn header-back-btn--floating",onClick:$,"aria-label":"رجوع للخلف",title:"رجوع",children:i.jsx(wh,{size:22,strokeWidth:2.25,"aria-hidden":!0})})}):null,e]}),le?null:se?i.jsxs("nav",{className:"bottom-nav","aria-label":"شريط الأدمن السفلي",children:[i.jsxs(ke,{to:"/admin",className:`bottom-nav-item${A?" bottom-nav-item--active":""}`,children:[i.jsx(wc,{size:22,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{children:"لوحة"})]}),i.jsxs(ke,{to:"/admin/stores",className:`bottom-nav-item${ie?" bottom-nav-item--active":""}`,children:[i.jsx(Gt,{size:22,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{children:"متاجر"})]}),i.jsxs(ke,{to:"/admin/ads",className:`bottom-nav-item${q?" bottom-nav-item--active":""}`,children:[i.jsx(jg,{size:22,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{children:"إعلانات"})]}),i.jsxs(ke,{to:"/admin/users",className:`bottom-nav-item${ce?" bottom-nav-item--active":""}`,children:[i.jsx(as,{size:22,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{children:"مستخدمون"})]}),i.jsxs("button",{type:"button",className:"bottom-nav-item",onClick:w,"aria-label":"القائمة",children:[i.jsx(Ko,{size:22,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{children:"القائمة"})]})]}):i.jsxs("nav",{className:"bottom-nav","aria-label":"شريط التنقل السفلي",children:[i.jsxs(ke,{to:"/",className:`bottom-nav-item${t==="/"?" bottom-nav-item--active":""}`,children:[i.jsx(ro,{size:22,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{children:"الرئيسية"})]}),i.jsxs(ke,{to:"/map",className:`bottom-nav-item${t==="/map"?" bottom-nav-item--active":""}`,children:[i.jsx(jh,{size:22,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{children:"الخريطة"})]}),i.jsxs(ke,{to:"/stores",className:`bottom-nav-item${V?" bottom-nav-item--active":""}`,children:[i.jsx(Gt,{size:22,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{children:"المتاجر"})]}),i.jsxs("button",{type:"button",className:"bottom-nav-item",onClick:w,"aria-label":"القائمة",children:[i.jsx(Ko,{size:22,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{children:"القائمة"})]})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
          overflow: visible;
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

        /* الصفحة الرئيسية على الجوال: صف ثانٍ كامل لعرض زر التثبيت دون تداخل مع الشعار/الحساب */
        @media (max-width: 720px) {
          .main-header--shopper-market.main-header--home .main-header__primary {
            display: grid;
            grid-template-columns: minmax(0, 1fr) auto;
            grid-template-rows: auto auto;
            gap: 8px 10px;
            align-items: start;
          }
          .main-header--shopper-market.main-header--home .header-right {
            grid-column: 1;
            grid-row: 1;
            min-width: 0;
          }
          .main-header--shopper-market.main-header--home .header-left {
            grid-column: 2;
            grid-row: 1;
            padding-inline-end: 0;
          }
          .main-header--shopper-market.main-header--home .header-center {
            grid-column: 1 / -1;
            grid-row: 2;
            justify-self: stretch;
            width: 100%;
          }
          .main-header--shopper-market.main-header--home .pwa-install {
            width: 100%;
            max-width: none;
          }
          .main-header--shopper-market.main-header--home .pwa-install__btn {
            width: 100%;
            max-width: none;
            min-height: 44px;
            padding: 10px 12px;
          }
          .main-header--shopper-market.main-header--home .pwa-install__btn-txt {
            display: inline;
          }
        }

        .header-left{
          display: inline-flex;
          align-items: center;
          gap: 8px;
          /* الصفحة RTL: end = أقصى اليسار */
          justify-self: end;
          min-width: 0;
          /* زيح أزرار اليسار للداخل قليلاً */
          padding-inline-end: 12px;
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
          max-width: min(320px, 42vw);
          min-width: 0;
          flex: 0 1 auto;
        }
        .header-user-pill--member {
          max-width: min(340px, 46vw);
        }
        .header-user-pill__ico{
          flex-shrink: 0;
        }
        .header-user-pill__name{
          font-weight: 950;
          color: var(--text-secondary);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          min-width: 0;
          flex: 1 1 auto;
        }
        .header-register-btn{
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          min-height: 40px;
          padding: 8px 12px;
          border-radius: 999px;
          font-size: 0.88rem;
          font-weight: 950;
          text-decoration: none;
          color: var(--secondary);
          background: rgba(255, 255, 255, 0.92);
          border: 1px solid var(--border);
          box-shadow: var(--shadow-sm);
          white-space: nowrap;
          flex-shrink: 0;
          transition: background 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease;
        }
        .header-register-btn:hover{
          border-color: rgba(255, 204, 0, 0.55);
          box-shadow: var(--shadow-sm);
          background: var(--white);
        }
        .header-register-btn__txt{
          letter-spacing: -0.02em;
        }

        /* تخطيط الهيدر: يمين/وسط/يسار */

        @media (max-width: 720px){
          .header-user-pill{
            max-width: min(280px, 52vw);
          }
          .header-user-pill--member{
            max-width: min(300px, 58vw);
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
            max-width: min(200px, 48vw);
          }
          .header-user-pill--member{
            max-width: min(220px, 52vw);
          }
          .header-user-pill__name{
            max-width: min(160px, 38vw);
          }
          .header-register-btn{
            padding: 6px 10px;
            font-size: 0.82rem;
            min-height: 38px;
          }
          img.brand-block-logo.brand-block-logo--toolbar{
            height: 64px;
            max-width: min(240px, 52vw);
          }
          .pwa-install__btn{
            max-width: max-content;
            padding: 8px;
            border-radius: 12px;
          }
          .pwa-install__btn-txt{
            display: none;
          }
          .pwa-install__btn-ico{
            margin: 0;
            width: 28px;
            height: 28px;
          }
        }

        /* أصغر الشاشات: اقتطاع اسم المستخدم مع الإبقاء على أيقونة + عنوان كامل في title */
        @media (max-width: 360px){
          img.brand-block-logo.brand-block-logo--toolbar{
            height: 56px;
            max-width: min(190px, 46vw);
          }
          .header-user-pill{
            padding: 6px 8px;
            max-width: min(140px, 42vw);
          }
          .header-user-pill--member{
            max-width: min(150px, 44vw);
          }
          .header-user-pill__name{
            max-width: min(100px, 30vw);
            font-size: 0.78rem;
          }
          .header-register-btn{
            padding: 6px 8px;
            font-size: 0.75rem;
            gap: 4px;
          }
          .header-register-btn__txt{
            max-width: 72px;
            overflow: hidden;
            text-overflow: ellipsis;
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

        .admin-notifs{
          position: relative;
          display: inline-flex;
          align-items: center;
          margin-inline-start: 0;
          overflow: visible;
          z-index: 1350;
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
        .admin-notifs-pop--dropdown{
          display: flex;
          flex-direction: column;
          position: absolute;
          top: calc(100% + 8px);
          inset-inline-end: 0;
          width: min(420px, calc(100vw - 24px));
          max-width: calc(100vw - 20px);
          background: rgba(255,255,255,0.98);
          border: 1px solid rgba(232, 230, 224, 0.95);
          border-radius: 18px;
          box-shadow: 0 18px 46px rgba(26, 29, 38, 0.18);
          overflow: hidden;
          z-index: 5000;
          box-sizing: border-box;
        }
        .admin-notifs-backdrop{
          position: fixed;
          inset: 0;
          z-index: 8000;
          border: none;
          padding: 0;
          margin: 0;
          cursor: pointer;
          background: rgba(14, 16, 22, 0.45);
          -webkit-backdrop-filter: blur(4px);
          backdrop-filter: blur(4px);
          touch-action: manipulation;
        }
        .admin-notifs-sheet{
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 8010;
          display: flex;
          flex-direction: column;
          max-height: min(82dvh, 580px);
          background: rgba(255,255,255,0.98);
          border-radius: 20px 20px 0 0;
          box-shadow: 0 -12px 40px rgba(0, 0, 0, 0.22);
          padding-bottom: env(safe-area-inset-bottom, 0px);
          box-sizing: border-box;
          overflow: hidden;
          touch-action: pan-y;
        }
        .admin-notifs-sheet__handle{
          width: 40px;
          height: 5px;
          border-radius: 999px;
          background: rgba(26, 29, 38, 0.2);
          margin: 10px auto 6px;
          flex-shrink: 0;
        }
        .admin-notifs-sheet .admin-notifs-list{
          flex: 1;
          min-height: 0;
          max-height: none;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          overscroll-behavior: contain;
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
          padding: 0;
          padding-inline: env(safe-area-inset-left, 0) env(safe-area-inset-right, 0);
          padding-bottom: calc(72px + env(safe-area-inset-bottom, 0px));
          background: var(--background);
          min-width: 0;
        }

        .content.content--auth {
          padding-bottom: env(safe-area-inset-bottom, 0px);
        }

        .content.content--home {
          padding: 0;
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

        .header-nav-item--menu{
          position: relative;
        }
        .nav-menu-badge{
          position: absolute;
          top: -6px;
          inset-inline-start: 10px; /* فوق الأيقونة */
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
          border: 2px solid rgba(255,255,255,0.95);
          box-shadow: 0 6px 16px rgba(0,0,0,0.18);
          pointer-events: none;
        }

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
            padding-bottom: clamp(8px, 1.5vw, 16px);
          }
          .content.content--home {
            padding-bottom: clamp(8px, 1.5vw, 16px);
          }
          .content.content--auth {
            padding-bottom: clamp(8px, 1.5vw, 16px);
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
      `}})]})},Dt=({icon:e,type:t="text",placeholder:n,value:a,onChange:o,required:l=!1,error:c,...h})=>i.jsxs("div",{className:"input-group-container",style:{marginBottom:"12px"},children:[i.jsxs("div",{className:`input-group ${c?"input-group--error":""}`,children:[e&&i.jsx("div",{className:"input-icon",children:e}),i.jsx("input",{type:t,placeholder:n,value:a,onChange:o,required:l,...h})]}),c&&i.jsx("p",{className:"input-error-msg",children:c}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]}),ES=[/\bdjango\b/i,/\bmigrate\b/i,/\bmigration\b/i,/\btraceback\b/i,/\bbackend\b/i,/\bpostgres(ql)?\b/i,/\bsqlite\b/i,/\bintegrityerror\b/i,/\boperationalerror\b/i,/\bprogrammingerror\b/i,/\bdatabase\b/i,/\bqueryset\b/i,/\bexception\b/i,/\bfile\s*["']/i,/\bline\s+\d+\b/i,/\bsettings\.py\b/i,/\bwsgi\b/i,/\basgi\b/i,/\bgunicorn\b/i,/\buvicorn\b/i,/\bwhitenoise\b/i,/\bredis\b/i,/\bcelery\b/i,/\bserver\s+error\b/i,/\b500\s*\(/i,/\b<!doctype\b/i,/<html[\s>]/i,/<body[\s>]/i];function LS(e){if(!e||typeof e!="string")return!0;const t=e.trim();return t.length>420||/[\x00-\x08\x0b\x0c\x0e-\x1f]/.test(t)?!0:ES.some(n=>n.test(t))}function MS(e){if(e==null)return null;const t=String(e).trim();return!t||LS(t)?null:t}function $e(e,t="تعذر إكمال العملية. حاول مرة أخرى."){var c,h,u;const n=(c=e==null?void 0:e.response)==null?void 0:c.status,a=(h=e==null?void 0:e.response)==null?void 0:h.data;if(!a)return(e==null?void 0:e.message)==="Network Error"?"تعذر الاتصال بالخدمة. تحقق من الشبكة وحاول مرة أخرى.":t;if(n>=500)return"حدث خطأ في الخدمة. حاول لاحقاً.";if(n===404)return"المحتوى غير متوفر أو لم يعد موجوداً.";if(n===403)return"لا تملك صلاحية تنفيذ هذا الإجراء.";if(n===401)return"يرجى تسجيل الدخول للمتابعة.";let o=null;if(typeof a.error=="string"&&a.error.trim())o=a.error.trim();else if(typeof a.detail=="string"&&a.detail.trim())o=a.detail.trim();else if(Array.isArray(a.detail))o=a.detail.map(String).join(" — ");else if((u=a.non_field_errors)!=null&&u.length)o=String(a.non_field_errors[0]);else try{const m=Object.values(a).flat().filter(g=>g!=null&&String(g).trim()).map(String);m.length&&(o=m.join(" — "))}catch{}const l=MS(o);return l||(n===400||n===422?"تعذر إكمال العملية. راجع البيانات وحاول مجدداً.":t)}const TS="هل تريد تنفيذ هذا الإجراء؟",Ht=({children:e,onClick:t,type:n="button",variant:a="primary",loading:o=!1,disabled:l=!1,icon:c,style:h={},confirm:u,confirmTitle:m="تأكيد",successMessage:g,successTitle:x="تم",errorFallback:v="تعذرت العملية.",showErrorAlert:b=!0,..._})=>{const{showConfirm:j,showAlert:P}=qe(),[N,w]=f.useState(!1),z=o||N,C=()=>u===!1?null:typeof u=="string"&&u.trim()?u.trim():TS,I=async E=>{var B;const k=C();if(n==="submit"){if(k){if(E.preventDefault(),!await j(k,m))return;const T=(B=E.currentTarget)==null?void 0:B.form;if(T){if(typeof T.checkValidity=="function"&&!T.checkValidity()){T.reportValidity();return}typeof T.requestSubmit=="function"?T.requestSubmit():T.submit()}}return}if(t&&!(k&&!await j(k,m))){w(!0);try{await Promise.resolve(t(E)),g&&await P(g,x)}catch(M){b&&await P($e(M,v),"خطأ")}finally{w(!1)}}};return i.jsxs("button",{type:n,onClick:I,className:`btn-${a} ${z?"loading":""}`,disabled:l||z,style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"10px",...h},..._,children:[z?i.jsx("span",{className:"spinner"}):i.jsxs(i.Fragment,{children:[c&&i.jsx("span",{className:"btn-icon",children:c}),e]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})},Ah="radar_remember_login",Ih="radar_saved_login_username",Rh="radar_saved_login_password_b64";function AS(e){try{return btoa(unescape(encodeURIComponent(e)))}catch{return""}}function IS(e){if(!e)return"";try{return decodeURIComponent(escape(atob(e)))}catch{return""}}function l1(){if(typeof localStorage>"u")return{username:"",password:"",rememberMe:!1};if(!(localStorage.getItem(Ah)==="true"))return{username:"",password:"",rememberMe:!1};const t=localStorage.getItem(Ih)||"",n=IS(localStorage.getItem(Rh)||"");return{username:t,password:n,rememberMe:!0}}function c1({username:e,password:t,rememberMe:n}){if(!(typeof localStorage>"u")){if(!n){localStorage.removeItem(Ah),localStorage.removeItem(Ih),localStorage.removeItem(Rh);return}localStorage.setItem(Ah,"true"),localStorage.setItem(Ih,String(e||"").trim()),localStorage.setItem(Rh,AS(String(t??"")))}}const RS=()=>{const[e,t]=f.useState(!1),[n,a]=f.useState(""),[o,l]=f.useState(""),[c,h]=f.useState(!1),[u,m]=f.useState(""),[g,x]=f.useState(!1),v=Nt(),{showAlert:b}=qe();f.useEffect(()=>{const P=l1();P.rememberMe&&(a(P.username),l(P.password),h(!0))},[]);const _=async()=>{localStorage.removeItem("token"),localStorage.removeItem("refresh"),localStorage.removeItem("user_type"),localStorage.removeItem("user_name"),localStorage.removeItem("is_verified"),localStorage.setItem("isGuest","true"),v("/",{replace:!0}),await b("أنت الآن في وضع الزائر.","تم")},j=async P=>{var N;P.preventDefault(),x(!0),m("");try{await $v(n.trim(),o),c1({username:n.trim(),password:o,rememberMe:c}),await b("تم تسجيل الدخول بنجاح.","تم"),v("/",{replace:!0})}catch(w){console.error("Login error:",w);const z=(N=w==null?void 0:w.response)==null?void 0:N.status,C=(w==null?void 0:w.message)==="Network Error"||!(w!=null&&w.response);z>=500||C?(m(""),await b($e(w,"تعذر تسجيل الدخول حالياً. حاول لاحقاً."),"خطأ")):(m("اسم المستخدم أو كلمة المرور غير صحيحة."),await b("بيانات الدخول غير صحيحة، يرجى التحقق من اسم المستخدم وكلمة المرور.","فشل"))}finally{x(!1)}};return i.jsx(Be,{children:i.jsxs("div",{className:"auth-page",children:[i.jsxs("div",{className:"auth-card",style:{maxWidth:420},children:[i.jsxs("div",{className:"auth-chip",children:[i.jsx(Ln,{size:18,strokeWidth:2.25,"aria-hidden":!0}),"رادار — محلاتك القريبة على الخريطة"]}),i.jsx("img",{className:"auth-logo",src:"/logo.png",alt:"رادار"}),i.jsx("h1",{className:"auth-title",children:"مرحباً بعودتك"}),i.jsx("p",{className:"auth-sub",children:"سجّل الدخول لمزامنة سلتك والعروض والمفضلة."}),u&&i.jsx("p",{style:{color:"#c62828",fontSize:"0.85rem",marginBottom:"12px",fontWeight:700},children:u}),i.jsxs("form",{onSubmit:j,children:[i.jsx(Dt,{icon:i.jsx(Sc,{size:18,strokeWidth:2}),placeholder:"اسم المستخدم",value:n,onChange:P=>a(P.target.value),required:!0}),i.jsxs("div",{className:"auth-password-field",children:[i.jsx(Dt,{icon:i.jsx(pv,{size:18,strokeWidth:2}),type:e?"text":"password",placeholder:"كلمة المرور",value:o,onChange:P=>l(P.target.value),required:!0}),i.jsx("button",{type:"button",className:"auth-password-eye-btn",onClick:()=>t(!e),"aria-label":e?"إخفاء كلمة المرور":"إظهار كلمة المرور",title:e?"إخفاء":"إظهار",children:e?i.jsx(ev,{size:18,strokeWidth:2,"aria-hidden":!0}):i.jsx(tv,{size:18,strokeWidth:2,"aria-hidden":!0})})]}),i.jsxs("label",{className:"auth-remember",title:"حفظ اسم المستخدم وكلمة المرور محلياً على هذا الجهاز لتعبئتهما تلقائياً لاحقاً",children:[i.jsx("span",{className:"auth-remember__txt",children:"تذكرني"}),i.jsx("input",{type:"checkbox",checked:c,onChange:P=>h(P.target.checked)})]}),i.jsx(Ht,{type:"submit",loading:g,style:{width:"100%",marginTop:"4px"},confirm:!1,showErrorAlert:!1,children:"تسجيل الدخول"})]}),i.jsxs("p",{className:"auth-footer-link",children:["لا تملك حساباً؟ ",i.jsx(ke,{to:"/register",children:"إنشاء حساب"})]}),i.jsx("button",{type:"button",className:"btn-ghost auth-guest-btn",onClick:_,children:"التصفّح كزائر"})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .auth-guest-btn {
            width: 100%;
            margin-top: 14px;
            font-family: inherit;
            font-size: 0.92rem;
          }
        `}})]})})};function d1(e,t){const n=f.useRef(t);f.useEffect(function(){t!==n.current&&e.attributionControl!=null&&(n.current!=null&&e.attributionControl.removeAttribution(n.current),t!=null&&e.attributionControl.addAttribution(t)),n.current=t},[e,t])}const OS=1;function BS(e){return Object.freeze({__version:OS,map:e})}function Kp(e,t){return Object.freeze({...e,...t})}const u1=f.createContext(null),Yp=u1.Provider;function $s(){const e=f.useContext(u1);if(e==null)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return e}function h1(e){function t(n,a){const{instance:o,context:l}=e(n).current;return f.useImperativeHandle(a,()=>o),n.children==null?null:Vi.createElement(Yp,{value:l},n.children)}return f.forwardRef(t)}function FS(e){function t(n,a){const[o,l]=f.useState(!1),{instance:c}=e(n,l).current;f.useImperativeHandle(a,()=>c),f.useEffect(function(){o&&c.update()},[c,o,n.children]);const h=c._contentNode;return h?uo.createPortal(n.children,h):null}return f.forwardRef(t)}function DS(e){function t(n,a){const{instance:o}=e(n).current;return f.useImperativeHandle(a,()=>o),null}return f.forwardRef(t)}function US(e){return function(n){const a=$s(),o=e(n,a),{instance:l}=o.current,c=f.useRef(n.position),{position:h}=n;return f.useEffect(function(){return l.addTo(a.map),function(){l.remove()}},[a.map,l]),f.useEffect(function(){h!=null&&h!==c.current&&(l.setPosition(h),c.current=h)},[l,h]),o}}function p1(e,t){const n=f.useRef();f.useEffect(function(){return t!=null&&e.instance.on(t),n.current=t,function(){n.current!=null&&e.instance.off(n.current),n.current=null}},[e,t])}function Qp(e,t){const n=e.pane??t.pane;return n?{...e,pane:n}:e}function WS(e,t){return function(a,o){const l=$s(),c=e(Qp(a,l),l);return d1(l.map,a.attribution),p1(c.current,a.eventHandlers),t(c.current,l,a,o),c}}var Oh={exports:{}};/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */(function(e,t){(function(n,a){a(t)})(w2,function(n){var a="1.9.4";function o(r){var s,d,p,y;for(d=1,p=arguments.length;d<p;d++){y=arguments[d];for(s in y)r[s]=y[s]}return r}var l=Object.create||function(){function r(){}return function(s){return r.prototype=s,new r}}();function c(r,s){var d=Array.prototype.slice;if(r.bind)return r.bind.apply(r,d.call(arguments,1));var p=d.call(arguments,2);return function(){return r.apply(s,p.length?p.concat(d.call(arguments)):arguments)}}var h=0;function u(r){return"_leaflet_id"in r||(r._leaflet_id=++h),r._leaflet_id}function m(r,s,d){var p,y,S,O;return O=function(){p=!1,y&&(S.apply(d,y),y=!1)},S=function(){p?y=arguments:(r.apply(d,arguments),setTimeout(O,s),p=!0)},S}function g(r,s,d){var p=s[1],y=s[0],S=p-y;return r===p&&d?r:((r-y)%S+S)%S+y}function x(){return!1}function v(r,s){if(s===!1)return r;var d=Math.pow(10,s===void 0?6:s);return Math.round(r*d)/d}function b(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function _(r){return b(r).split(/\s+/)}function j(r,s){Object.prototype.hasOwnProperty.call(r,"options")||(r.options=r.options?l(r.options):{});for(var d in s)r.options[d]=s[d];return r.options}function P(r,s,d){var p=[];for(var y in r)p.push(encodeURIComponent(d?y.toUpperCase():y)+"="+encodeURIComponent(r[y]));return(!s||s.indexOf("?")===-1?"?":"&")+p.join("&")}var N=/\{ *([\w_ -]+) *\}/g;function w(r,s){return r.replace(N,function(d,p){var y=s[p];if(y===void 0)throw new Error("No value provided for variable "+d);return typeof y=="function"&&(y=y(s)),y})}var z=Array.isArray||function(r){return Object.prototype.toString.call(r)==="[object Array]"};function C(r,s){for(var d=0;d<r.length;d++)if(r[d]===s)return d;return-1}var I="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function E(r){return window["webkit"+r]||window["moz"+r]||window["ms"+r]}var k=0;function B(r){var s=+new Date,d=Math.max(0,16-(s-k));return k=s+d,window.setTimeout(r,d)}var M=window.requestAnimationFrame||E("RequestAnimationFrame")||B,T=window.cancelAnimationFrame||E("CancelAnimationFrame")||E("CancelRequestAnimationFrame")||function(r){window.clearTimeout(r)};function W(r,s,d){if(d&&M===B)r.call(s);else return M.call(window,c(r,s))}function U(r){r&&T.call(window,r)}var se={__proto__:null,extend:o,create:l,bind:c,get lastId(){return h},stamp:u,throttle:m,wrapNum:g,falseFn:x,formatNum:v,trim:b,splitWords:_,setOptions:j,getParamString:P,template:w,isArray:z,indexOf:C,emptyImageUrl:I,requestFn:M,cancelFn:T,requestAnimFrame:W,cancelAnimFrame:U};function de(){}de.extend=function(r){var s=function(){j(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},d=s.__super__=this.prototype,p=l(d);p.constructor=s,s.prototype=p;for(var y in this)Object.prototype.hasOwnProperty.call(this,y)&&y!=="prototype"&&y!=="__super__"&&(s[y]=this[y]);return r.statics&&o(s,r.statics),r.includes&&(he(r.includes),o.apply(null,[p].concat(r.includes))),o(p,r),delete p.statics,delete p.includes,p.options&&(p.options=d.options?l(d.options):{},o(p.options,r.options)),p._initHooks=[],p.callInitHooks=function(){if(!this._initHooksCalled){d.callInitHooks&&d.callInitHooks.call(this),this._initHooksCalled=!0;for(var S=0,O=p._initHooks.length;S<O;S++)p._initHooks[S].call(this)}},s},de.include=function(r){var s=this.prototype.options;return o(this.prototype,r),r.options&&(this.prototype.options=s,this.mergeOptions(r.options)),this},de.mergeOptions=function(r){return o(this.prototype.options,r),this},de.addInitHook=function(r){var s=Array.prototype.slice.call(arguments,1),d=typeof r=="function"?r:function(){this[r].apply(this,s)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(d),this};function he(r){if(!(typeof L>"u"||!L||!L.Mixin)){r=z(r)?r:[r];for(var s=0;s<r.length;s++)r[s]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var le={on:function(r,s,d){if(typeof r=="object")for(var p in r)this._on(p,r[p],s);else{r=_(r);for(var y=0,S=r.length;y<S;y++)this._on(r[y],s,d)}return this},off:function(r,s,d){if(!arguments.length)delete this._events;else if(typeof r=="object")for(var p in r)this._off(p,r[p],s);else{r=_(r);for(var y=arguments.length===1,S=0,O=r.length;S<O;S++)y?this._off(r[S]):this._off(r[S],s,d)}return this},_on:function(r,s,d,p){if(typeof s!="function"){console.warn("wrong listener type: "+typeof s);return}if(this._listens(r,s,d)===!1){d===this&&(d=void 0);var y={fn:s,ctx:d};p&&(y.once=!0),this._events=this._events||{},this._events[r]=this._events[r]||[],this._events[r].push(y)}},_off:function(r,s,d){var p,y,S;if(this._events&&(p=this._events[r],!!p)){if(arguments.length===1){if(this._firingCount)for(y=0,S=p.length;y<S;y++)p[y].fn=x;delete this._events[r];return}if(typeof s!="function"){console.warn("wrong listener type: "+typeof s);return}var O=this._listens(r,s,d);if(O!==!1){var Z=p[O];this._firingCount&&(Z.fn=x,this._events[r]=p=p.slice()),p.splice(O,1)}}},fire:function(r,s,d){if(!this.listens(r,d))return this;var p=o({},s,{type:r,target:this,sourceTarget:s&&s.sourceTarget||this});if(this._events){var y=this._events[r];if(y){this._firingCount=this._firingCount+1||1;for(var S=0,O=y.length;S<O;S++){var Z=y[S],Q=Z.fn;Z.once&&this.off(r,Q,Z.ctx),Q.call(Z.ctx||this,p)}this._firingCount--}}return d&&this._propagateEvent(p),this},listens:function(r,s,d,p){typeof r!="string"&&console.warn('"string" type argument expected');var y=s;typeof s!="function"&&(p=!!s,y=void 0,d=void 0);var S=this._events&&this._events[r];if(S&&S.length&&this._listens(r,y,d)!==!1)return!0;if(p){for(var O in this._eventParents)if(this._eventParents[O].listens(r,s,d,p))return!0}return!1},_listens:function(r,s,d){if(!this._events)return!1;var p=this._events[r]||[];if(!s)return!!p.length;d===this&&(d=void 0);for(var y=0,S=p.length;y<S;y++)if(p[y].fn===s&&p[y].ctx===d)return y;return!1},once:function(r,s,d){if(typeof r=="object")for(var p in r)this._on(p,r[p],s,!0);else{r=_(r);for(var y=0,S=r.length;y<S;y++)this._on(r[y],s,d,!0)}return this},addEventParent:function(r){return this._eventParents=this._eventParents||{},this._eventParents[u(r)]=r,this},removeEventParent:function(r){return this._eventParents&&delete this._eventParents[u(r)],this},_propagateEvent:function(r){for(var s in this._eventParents)this._eventParents[s].fire(r.type,o({layer:r.target,propagatedFrom:r.target},r),!0)}};le.addEventListener=le.on,le.removeEventListener=le.clearAllEventListeners=le.off,le.addOneTimeEventListener=le.once,le.fireEvent=le.fire,le.hasEventListeners=le.listens;var V=de.extend(le);function A(r,s,d){this.x=d?Math.round(r):r,this.y=d?Math.round(s):s}var ie=Math.trunc||function(r){return r>0?Math.floor(r):Math.ceil(r)};A.prototype={clone:function(){return new A(this.x,this.y)},add:function(r){return this.clone()._add(q(r))},_add:function(r){return this.x+=r.x,this.y+=r.y,this},subtract:function(r){return this.clone()._subtract(q(r))},_subtract:function(r){return this.x-=r.x,this.y-=r.y,this},divideBy:function(r){return this.clone()._divideBy(r)},_divideBy:function(r){return this.x/=r,this.y/=r,this},multiplyBy:function(r){return this.clone()._multiplyBy(r)},_multiplyBy:function(r){return this.x*=r,this.y*=r,this},scaleBy:function(r){return new A(this.x*r.x,this.y*r.y)},unscaleBy:function(r){return new A(this.x/r.x,this.y/r.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=ie(this.x),this.y=ie(this.y),this},distanceTo:function(r){r=q(r);var s=r.x-this.x,d=r.y-this.y;return Math.sqrt(s*s+d*d)},equals:function(r){return r=q(r),r.x===this.x&&r.y===this.y},contains:function(r){return r=q(r),Math.abs(r.x)<=Math.abs(this.x)&&Math.abs(r.y)<=Math.abs(this.y)},toString:function(){return"Point("+v(this.x)+", "+v(this.y)+")"}};function q(r,s,d){return r instanceof A?r:z(r)?new A(r[0],r[1]):r==null?r:typeof r=="object"&&"x"in r&&"y"in r?new A(r.x,r.y):new A(r,s,d)}function ce(r,s){if(r)for(var d=s?[r,s]:r,p=0,y=d.length;p<y;p++)this.extend(d[p])}ce.prototype={extend:function(r){var s,d;if(!r)return this;if(r instanceof A||typeof r[0]=="number"||"x"in r)s=d=q(r);else if(r=ne(r),s=r.min,d=r.max,!s||!d)return this;return!this.min&&!this.max?(this.min=s.clone(),this.max=d.clone()):(this.min.x=Math.min(s.x,this.min.x),this.max.x=Math.max(d.x,this.max.x),this.min.y=Math.min(s.y,this.min.y),this.max.y=Math.max(d.y,this.max.y)),this},getCenter:function(r){return q((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,r)},getBottomLeft:function(){return q(this.min.x,this.max.y)},getTopRight:function(){return q(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(r){var s,d;return typeof r[0]=="number"||r instanceof A?r=q(r):r=ne(r),r instanceof ce?(s=r.min,d=r.max):s=d=r,s.x>=this.min.x&&d.x<=this.max.x&&s.y>=this.min.y&&d.y<=this.max.y},intersects:function(r){r=ne(r);var s=this.min,d=this.max,p=r.min,y=r.max,S=y.x>=s.x&&p.x<=d.x,O=y.y>=s.y&&p.y<=d.y;return S&&O},overlaps:function(r){r=ne(r);var s=this.min,d=this.max,p=r.min,y=r.max,S=y.x>s.x&&p.x<d.x,O=y.y>s.y&&p.y<d.y;return S&&O},isValid:function(){return!!(this.min&&this.max)},pad:function(r){var s=this.min,d=this.max,p=Math.abs(s.x-d.x)*r,y=Math.abs(s.y-d.y)*r;return ne(q(s.x-p,s.y-y),q(d.x+p,d.y+y))},equals:function(r){return r?(r=ne(r),this.min.equals(r.getTopLeft())&&this.max.equals(r.getBottomRight())):!1}};function ne(r,s){return!r||r instanceof ce?r:new ce(r,s)}function ue(r,s){if(r)for(var d=s?[r,s]:r,p=0,y=d.length;p<y;p++)this.extend(d[p])}ue.prototype={extend:function(r){var s=this._southWest,d=this._northEast,p,y;if(r instanceof G)p=r,y=r;else if(r instanceof ue){if(p=r._southWest,y=r._northEast,!p||!y)return this}else return r?this.extend(F(r)||$(r)):this;return!s&&!d?(this._southWest=new G(p.lat,p.lng),this._northEast=new G(y.lat,y.lng)):(s.lat=Math.min(p.lat,s.lat),s.lng=Math.min(p.lng,s.lng),d.lat=Math.max(y.lat,d.lat),d.lng=Math.max(y.lng,d.lng)),this},pad:function(r){var s=this._southWest,d=this._northEast,p=Math.abs(s.lat-d.lat)*r,y=Math.abs(s.lng-d.lng)*r;return new ue(new G(s.lat-p,s.lng-y),new G(d.lat+p,d.lng+y))},getCenter:function(){return new G((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new G(this.getNorth(),this.getWest())},getSouthEast:function(){return new G(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(r){typeof r[0]=="number"||r instanceof G||"lat"in r?r=F(r):r=$(r);var s=this._southWest,d=this._northEast,p,y;return r instanceof ue?(p=r.getSouthWest(),y=r.getNorthEast()):p=y=r,p.lat>=s.lat&&y.lat<=d.lat&&p.lng>=s.lng&&y.lng<=d.lng},intersects:function(r){r=$(r);var s=this._southWest,d=this._northEast,p=r.getSouthWest(),y=r.getNorthEast(),S=y.lat>=s.lat&&p.lat<=d.lat,O=y.lng>=s.lng&&p.lng<=d.lng;return S&&O},overlaps:function(r){r=$(r);var s=this._southWest,d=this._northEast,p=r.getSouthWest(),y=r.getNorthEast(),S=y.lat>s.lat&&p.lat<d.lat,O=y.lng>s.lng&&p.lng<d.lng;return S&&O},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(r,s){return r?(r=$(r),this._southWest.equals(r.getSouthWest(),s)&&this._northEast.equals(r.getNorthEast(),s)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function $(r,s){return r instanceof ue?r:new ue(r,s)}function G(r,s,d){if(isNaN(r)||isNaN(s))throw new Error("Invalid LatLng object: ("+r+", "+s+")");this.lat=+r,this.lng=+s,d!==void 0&&(this.alt=+d)}G.prototype={equals:function(r,s){if(!r)return!1;r=F(r);var d=Math.max(Math.abs(this.lat-r.lat),Math.abs(this.lng-r.lng));return d<=(s===void 0?1e-9:s)},toString:function(r){return"LatLng("+v(this.lat,r)+", "+v(this.lng,r)+")"},distanceTo:function(r){return _e.distance(this,F(r))},wrap:function(){return _e.wrapLatLng(this)},toBounds:function(r){var s=180*r/40075017,d=s/Math.cos(Math.PI/180*this.lat);return $([this.lat-s,this.lng-d],[this.lat+s,this.lng+d])},clone:function(){return new G(this.lat,this.lng,this.alt)}};function F(r,s,d){return r instanceof G?r:z(r)&&typeof r[0]!="object"?r.length===3?new G(r[0],r[1],r[2]):r.length===2?new G(r[0],r[1]):null:r==null?r:typeof r=="object"&&"lat"in r?new G(r.lat,"lng"in r?r.lng:r.lon,r.alt):s===void 0?null:new G(r,s,d)}var ge={latLngToPoint:function(r,s){var d=this.projection.project(r),p=this.scale(s);return this.transformation._transform(d,p)},pointToLatLng:function(r,s){var d=this.scale(s),p=this.transformation.untransform(r,d);return this.projection.unproject(p)},project:function(r){return this.projection.project(r)},unproject:function(r){return this.projection.unproject(r)},scale:function(r){return 256*Math.pow(2,r)},zoom:function(r){return Math.log(r/256)/Math.LN2},getProjectedBounds:function(r){if(this.infinite)return null;var s=this.projection.bounds,d=this.scale(r),p=this.transformation.transform(s.min,d),y=this.transformation.transform(s.max,d);return new ce(p,y)},infinite:!1,wrapLatLng:function(r){var s=this.wrapLng?g(r.lng,this.wrapLng,!0):r.lng,d=this.wrapLat?g(r.lat,this.wrapLat,!0):r.lat,p=r.alt;return new G(d,s,p)},wrapLatLngBounds:function(r){var s=r.getCenter(),d=this.wrapLatLng(s),p=s.lat-d.lat,y=s.lng-d.lng;if(p===0&&y===0)return r;var S=r.getSouthWest(),O=r.getNorthEast(),Z=new G(S.lat-p,S.lng-y),Q=new G(O.lat-p,O.lng-y);return new ue(Z,Q)}},_e=o({},ge,{wrapLng:[-180,180],R:6371e3,distance:function(r,s){var d=Math.PI/180,p=r.lat*d,y=s.lat*d,S=Math.sin((s.lat-r.lat)*d/2),O=Math.sin((s.lng-r.lng)*d/2),Z=S*S+Math.cos(p)*Math.cos(y)*O*O,Q=2*Math.atan2(Math.sqrt(Z),Math.sqrt(1-Z));return this.R*Q}}),Ve=6378137,Ie={R:Ve,MAX_LATITUDE:85.0511287798,project:function(r){var s=Math.PI/180,d=this.MAX_LATITUDE,p=Math.max(Math.min(d,r.lat),-d),y=Math.sin(p*s);return new A(this.R*r.lng*s,this.R*Math.log((1+y)/(1-y))/2)},unproject:function(r){var s=180/Math.PI;return new G((2*Math.atan(Math.exp(r.y/this.R))-Math.PI/2)*s,r.x*s/this.R)},bounds:function(){var r=Ve*Math.PI;return new ce([-r,-r],[r,r])}()};function Ee(r,s,d,p){if(z(r)){this._a=r[0],this._b=r[1],this._c=r[2],this._d=r[3];return}this._a=r,this._b=s,this._c=d,this._d=p}Ee.prototype={transform:function(r,s){return this._transform(r.clone(),s)},_transform:function(r,s){return s=s||1,r.x=s*(this._a*r.x+this._b),r.y=s*(this._c*r.y+this._d),r},untransform:function(r,s){return s=s||1,new A((r.x/s-this._b)/this._a,(r.y/s-this._d)/this._c)}};function Le(r,s,d,p){return new Ee(r,s,d,p)}var vt=o({},_e,{code:"EPSG:3857",projection:Ie,transformation:function(){var r=.5/(Math.PI*Ie.R);return Le(r,.5,-r,.5)}()}),ur=o({},vt,{code:"EPSG:900913"});function hr(r){return document.createElementNS("http://www.w3.org/2000/svg",r)}function X(r,s){var d="",p,y,S,O,Z,Q;for(p=0,S=r.length;p<S;p++){for(Z=r[p],y=0,O=Z.length;y<O;y++)Q=Z[y],d+=(y?"L":"M")+Q.x+" "+Q.y;d+=s?te.svg?"z":"x":""}return d||"M0 0"}var ye=document.documentElement.style,ve="ActiveXObject"in window,Pe=ve&&!document.addEventListener,Ge="msLaunchUri"in navigator&&!("documentMode"in document),at=oe("webkit"),Ye=oe("android"),Ct=oe("android 2")||oe("android 3"),Zt=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),pr=Ye&&oe("Google")&&Zt<537&&!("AudioNode"in window),fr=!!window.opera,Zr=!Ge&&oe("chrome"),Jt=oe("gecko")&&!at&&!fr&&!ve,hn=!Zr&&oe("safari"),$r=oe("phantom"),mr="OTransition"in ye,qr=navigator.platform.indexOf("Win")===0,pn=ve&&"transition"in ye,gr="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!Ct,Vr="MozPerspective"in ye,Qn=!window.L_DISABLE_3D&&(pn||gr||Vr)&&!mr&&!$r,xr=typeof orientation<"u"||oe("mobile"),da=xr&&at,yr=xr&&gr,vr=!window.PointerEvent&&window.MSPointerEvent,An=!!(window.PointerEvent||vr),In="ontouchstart"in window||!!window.TouchEvent,ua=!window.L_NO_TOUCH&&(In||An),br=xr&&fr,Xt=xr&&Jt,_n=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,Gr=function(){var r=!1;try{var s=Object.defineProperty({},"passive",{get:function(){r=!0}});window.addEventListener("testPassiveEventSupport",x,s),window.removeEventListener("testPassiveEventSupport",x,s)}catch{}return r}(),wr=function(){return!!document.createElement("canvas").getContext}(),Rn=!!(document.createElementNS&&hr("svg").createSVGRect),ha=!!Rn&&function(){var r=document.createElement("div");return r.innerHTML="<svg/>",(r.firstChild&&r.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"}(),D=!Rn&&function(){try{var r=document.createElement("div");r.innerHTML='<v:shape adj="1"/>';var s=r.firstChild;return s.style.behavior="url(#default#VML)",s&&typeof s.adj=="object"}catch{return!1}}(),H=navigator.platform.indexOf("Mac")===0,Y=navigator.platform.indexOf("Linux")===0;function oe(r){return navigator.userAgent.toLowerCase().indexOf(r)>=0}var te={ie:ve,ielt9:Pe,edge:Ge,webkit:at,android:Ye,android23:Ct,androidStock:pr,opera:fr,chrome:Zr,gecko:Jt,safari:hn,phantom:$r,opera12:mr,win:qr,ie3d:pn,webkit3d:gr,gecko3d:Vr,any3d:Qn,mobile:xr,mobileWebkit:da,mobileWebkit3d:yr,msPointer:vr,pointer:An,touch:ua,touchNative:In,mobileOpera:br,mobileGecko:Xt,retina:_n,passiveEvents:Gr,canvas:wr,svg:Rn,vml:D,inlineSvg:ha,mac:H,linux:Y},R=te.msPointer?"MSPointerDown":"pointerdown",K=te.msPointer?"MSPointerMove":"pointermove",ee=te.msPointer?"MSPointerUp":"pointerup",ae=te.msPointer?"MSPointerCancel":"pointercancel",pe={touchstart:R,touchmove:K,touchend:ee,touchcancel:ae},be={touchstart:$t,touchmove:It,touchend:It,touchcancel:It},Se={},Te=!1;function ct(r,s,d){return s==="touchstart"&&Jn(),be[s]?(d=be[s].bind(this,d),r.addEventListener(pe[s],d,!1),d):(console.warn("wrong event specified:",s),x)}function Qe(r,s,d){if(!pe[s]){console.warn("wrong event specified:",s);return}r.removeEventListener(pe[s],d,!1)}function We(r){Se[r.pointerId]=r}function nt(r){Se[r.pointerId]&&(Se[r.pointerId]=r)}function en(r){delete Se[r.pointerId]}function Jn(){Te||(document.addEventListener(R,We,!0),document.addEventListener(K,nt,!0),document.addEventListener(ee,en,!0),document.addEventListener(ae,en,!0),Te=!0)}function It(r,s){if(s.pointerType!==(s.MSPOINTER_TYPE_MOUSE||"mouse")){s.touches=[];for(var d in Se)s.touches.push(Se[d]);s.changedTouches=[s],r(s)}}function $t(r,s){s.MSPOINTER_TYPE_TOUCH&&s.pointerType===s.MSPOINTER_TYPE_TOUCH&&Lt(s),It(r,s)}function xo(r){var s={},d,p;for(p in r)d=r[p],s[p]=d&&d.bind?d.bind(r):d;return r=s,s.type="dblclick",s.detail=2,s.isTrusted=!1,s._simulated=!0,s}var Ci=200;function _r(r,s){r.addEventListener("dblclick",s);var d=0,p;function y(S){if(S.detail!==1){p=S.detail;return}if(!(S.pointerType==="mouse"||S.sourceCapabilities&&!S.sourceCapabilities.firesTouchEvents)){var O=af(S);if(!(O.some(function(Q){return Q instanceof HTMLLabelElement&&Q.attributes.for})&&!O.some(function(Q){return Q instanceof HTMLInputElement||Q instanceof HTMLSelectElement}))){var Z=Date.now();Z-d<=Ci?(p++,p===2&&s(xo(S))):p=1,d=Z}}}return r.addEventListener("click",y),{dblclick:s,simDblclick:y}}function pa(r,s){r.removeEventListener("dblclick",s.dblclick),r.removeEventListener("click",s.simDblclick)}var Kr=Ks(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),Fe=Ks(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),ot=Fe==="webkitTransition"||Fe==="OTransition"?Fe+"End":"transitionend";function jr(r){return typeof r=="string"?document.getElementById(r):r}function On(r,s){var d=r.style[s]||r.currentStyle&&r.currentStyle[s];if((!d||d==="auto")&&document.defaultView){var p=document.defaultView.getComputedStyle(r,null);d=p?p[s]:null}return d==="auto"?null:d}function Ne(r,s,d){var p=document.createElement(r);return p.className=s||"",d&&d.appendChild(p),p}function Je(r){var s=r.parentNode;s&&s.removeChild(r)}function Pi(r){for(;r.firstChild;)r.removeChild(r.firstChild)}function Yr(r){var s=r.parentNode;s&&s.lastChild!==r&&s.appendChild(r)}function fa(r){var s=r.parentNode;s&&s.firstChild!==r&&s.insertBefore(r,s.firstChild)}function od(r,s){if(r.classList!==void 0)return r.classList.contains(s);var d=Gs(r);return d.length>0&&new RegExp("(^|\\s)"+s+"(\\s|$)").test(d)}function Re(r,s){if(r.classList!==void 0)for(var d=_(s),p=0,y=d.length;p<y;p++)r.classList.add(d[p]);else if(!od(r,s)){var S=Gs(r);sd(r,(S?S+" ":"")+s)}}function gt(r,s){r.classList!==void 0?r.classList.remove(s):sd(r,b((" "+Gs(r)+" ").replace(" "+s+" "," ")))}function sd(r,s){r.className.baseVal===void 0?r.className=s:r.className.baseVal=s}function Gs(r){return r.correspondingElement&&(r=r.correspondingElement),r.className.baseVal===void 0?r.className:r.className.baseVal}function jn(r,s){"opacity"in r.style?r.style.opacity=s:"filter"in r.style&&N1(r,s)}function N1(r,s){var d=!1,p="DXImageTransform.Microsoft.Alpha";try{d=r.filters.item(p)}catch{if(s===1)return}s=Math.round(s*100),d?(d.Enabled=s!==100,d.Opacity=s):r.style.filter+=" progid:"+p+"(opacity="+s+")"}function Ks(r){for(var s=document.documentElement.style,d=0;d<r.length;d++)if(r[d]in s)return r[d];return!1}function zi(r,s,d){var p=s||new A(0,0);r.style[Kr]=(te.ie3d?"translate("+p.x+"px,"+p.y+"px)":"translate3d("+p.x+"px,"+p.y+"px,0)")+(d?" scale("+d+")":"")}function bt(r,s){r._leaflet_pos=s,te.any3d?zi(r,s):(r.style.left=s.x+"px",r.style.top=s.y+"px")}function Ei(r){return r._leaflet_pos||new A(0,0)}var yo,vo,ld;if("onselectstart"in document)yo=function(){Ae(window,"selectstart",Lt)},vo=function(){rt(window,"selectstart",Lt)};else{var bo=Ks(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);yo=function(){if(bo){var r=document.documentElement.style;ld=r[bo],r[bo]="none"}},vo=function(){bo&&(document.documentElement.style[bo]=ld,ld=void 0)}}function cd(){Ae(window,"dragstart",Lt)}function dd(){rt(window,"dragstart",Lt)}var Ys,ud;function hd(r){for(;r.tabIndex===-1;)r=r.parentNode;r.style&&(Qs(),Ys=r,ud=r.style.outlineStyle,r.style.outlineStyle="none",Ae(window,"keydown",Qs))}function Qs(){Ys&&(Ys.style.outlineStyle=ud,Ys=void 0,ud=void 0,rt(window,"keydown",Qs))}function nf(r){do r=r.parentNode;while((!r.offsetWidth||!r.offsetHeight)&&r!==document.body);return r}function pd(r){var s=r.getBoundingClientRect();return{x:s.width/r.offsetWidth||1,y:s.height/r.offsetHeight||1,boundingClientRect:s}}var C1={__proto__:null,TRANSFORM:Kr,TRANSITION:Fe,TRANSITION_END:ot,get:jr,getStyle:On,create:Ne,remove:Je,empty:Pi,toFront:Yr,toBack:fa,hasClass:od,addClass:Re,removeClass:gt,setClass:sd,getClass:Gs,setOpacity:jn,testProp:Ks,setTransform:zi,setPosition:bt,getPosition:Ei,get disableTextSelection(){return yo},get enableTextSelection(){return vo},disableImageDrag:cd,enableImageDrag:dd,preventOutline:hd,restoreOutline:Qs,getSizedParentNode:nf,getScale:pd};function Ae(r,s,d,p){if(s&&typeof s=="object")for(var y in s)md(r,y,s[y],d);else{s=_(s);for(var S=0,O=s.length;S<O;S++)md(r,s[S],d,p)}return this}var Xn="_leaflet_events";function rt(r,s,d,p){if(arguments.length===1)rf(r),delete r[Xn];else if(s&&typeof s=="object")for(var y in s)gd(r,y,s[y],d);else if(s=_(s),arguments.length===2)rf(r,function(Z){return C(s,Z)!==-1});else for(var S=0,O=s.length;S<O;S++)gd(r,s[S],d,p);return this}function rf(r,s){for(var d in r[Xn]){var p=d.split(/\d/)[0];(!s||s(p))&&gd(r,p,null,null,d)}}var fd={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function md(r,s,d,p){var y=s+u(d)+(p?"_"+u(p):"");if(r[Xn]&&r[Xn][y])return this;var S=function(Z){return d.call(p||r,Z||window.event)},O=S;!te.touchNative&&te.pointer&&s.indexOf("touch")===0?S=ct(r,s,S):te.touch&&s==="dblclick"?S=_r(r,S):"addEventListener"in r?s==="touchstart"||s==="touchmove"||s==="wheel"||s==="mousewheel"?r.addEventListener(fd[s]||s,S,te.passiveEvents?{passive:!1}:!1):s==="mouseenter"||s==="mouseleave"?(S=function(Z){Z=Z||window.event,yd(r,Z)&&O(Z)},r.addEventListener(fd[s],S,!1)):r.addEventListener(s,O,!1):r.attachEvent("on"+s,S),r[Xn]=r[Xn]||{},r[Xn][y]=S}function gd(r,s,d,p,y){y=y||s+u(d)+(p?"_"+u(p):"");var S=r[Xn]&&r[Xn][y];if(!S)return this;!te.touchNative&&te.pointer&&s.indexOf("touch")===0?Qe(r,s,S):te.touch&&s==="dblclick"?pa(r,S):"removeEventListener"in r?r.removeEventListener(fd[s]||s,S,!1):r.detachEvent("on"+s,S),r[Xn][y]=null}function Li(r){return r.stopPropagation?r.stopPropagation():r.originalEvent?r.originalEvent._stopped=!0:r.cancelBubble=!0,this}function xd(r){return md(r,"wheel",Li),this}function wo(r){return Ae(r,"mousedown touchstart dblclick contextmenu",Li),r._leaflet_disable_click=!0,this}function Lt(r){return r.preventDefault?r.preventDefault():r.returnValue=!1,this}function Mi(r){return Lt(r),Li(r),this}function af(r){if(r.composedPath)return r.composedPath();for(var s=[],d=r.target;d;)s.push(d),d=d.parentNode;return s}function of(r,s){if(!s)return new A(r.clientX,r.clientY);var d=pd(s),p=d.boundingClientRect;return new A((r.clientX-p.left)/d.x-s.clientLeft,(r.clientY-p.top)/d.y-s.clientTop)}var P1=te.linux&&te.chrome?window.devicePixelRatio:te.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function sf(r){return te.edge?r.wheelDeltaY/2:r.deltaY&&r.deltaMode===0?-r.deltaY/P1:r.deltaY&&r.deltaMode===1?-r.deltaY*20:r.deltaY&&r.deltaMode===2?-r.deltaY*60:r.deltaX||r.deltaZ?0:r.wheelDelta?(r.wheelDeltaY||r.wheelDelta)/2:r.detail&&Math.abs(r.detail)<32765?-r.detail*20:r.detail?r.detail/-32765*60:0}function yd(r,s){var d=s.relatedTarget;if(!d)return!0;try{for(;d&&d!==r;)d=d.parentNode}catch{return!1}return d!==r}var z1={__proto__:null,on:Ae,off:rt,stopPropagation:Li,disableScrollPropagation:xd,disableClickPropagation:wo,preventDefault:Lt,stop:Mi,getPropagationPath:af,getMousePosition:of,getWheelDelta:sf,isExternalTarget:yd,addListener:Ae,removeListener:rt},lf=V.extend({run:function(r,s,d,p){this.stop(),this._el=r,this._inProgress=!0,this._duration=d||.25,this._easeOutPower=1/Math.max(p||.5,.2),this._startPos=Ei(r),this._offset=s.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=W(this._animate,this),this._step()},_step:function(r){var s=+new Date-this._startTime,d=this._duration*1e3;s<d?this._runFrame(this._easeOut(s/d),r):(this._runFrame(1),this._complete())},_runFrame:function(r,s){var d=this._startPos.add(this._offset.multiplyBy(r));s&&d._round(),bt(this._el,d),this.fire("step")},_complete:function(){U(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(r){return 1-Math.pow(1-r,this._easeOutPower)}}),Ze=V.extend({options:{crs:vt,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(r,s){s=j(this,s),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(r),this._initLayout(),this._onResize=c(this._onResize,this),this._initEvents(),s.maxBounds&&this.setMaxBounds(s.maxBounds),s.zoom!==void 0&&(this._zoom=this._limitZoom(s.zoom)),s.center&&s.zoom!==void 0&&this.setView(F(s.center),s.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=Fe&&te.any3d&&!te.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),Ae(this._proxy,ot,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(r,s,d){if(s=s===void 0?this._zoom:this._limitZoom(s),r=this._limitCenter(F(r),s,this.options.maxBounds),d=d||{},this._stop(),this._loaded&&!d.reset&&d!==!0){d.animate!==void 0&&(d.zoom=o({animate:d.animate},d.zoom),d.pan=o({animate:d.animate,duration:d.duration},d.pan));var p=this._zoom!==s?this._tryAnimatedZoom&&this._tryAnimatedZoom(r,s,d.zoom):this._tryAnimatedPan(r,d.pan);if(p)return clearTimeout(this._sizeTimer),this}return this._resetView(r,s,d.pan&&d.pan.noMoveStart),this},setZoom:function(r,s){return this._loaded?this.setView(this.getCenter(),r,{zoom:s}):(this._zoom=r,this)},zoomIn:function(r,s){return r=r||(te.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+r,s)},zoomOut:function(r,s){return r=r||(te.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-r,s)},setZoomAround:function(r,s,d){var p=this.getZoomScale(s),y=this.getSize().divideBy(2),S=r instanceof A?r:this.latLngToContainerPoint(r),O=S.subtract(y).multiplyBy(1-1/p),Z=this.containerPointToLatLng(y.add(O));return this.setView(Z,s,{zoom:d})},_getBoundsCenterZoom:function(r,s){s=s||{},r=r.getBounds?r.getBounds():$(r);var d=q(s.paddingTopLeft||s.padding||[0,0]),p=q(s.paddingBottomRight||s.padding||[0,0]),y=this.getBoundsZoom(r,!1,d.add(p));if(y=typeof s.maxZoom=="number"?Math.min(s.maxZoom,y):y,y===1/0)return{center:r.getCenter(),zoom:y};var S=p.subtract(d).divideBy(2),O=this.project(r.getSouthWest(),y),Z=this.project(r.getNorthEast(),y),Q=this.unproject(O.add(Z).divideBy(2).add(S),y);return{center:Q,zoom:y}},fitBounds:function(r,s){if(r=$(r),!r.isValid())throw new Error("Bounds are not valid.");var d=this._getBoundsCenterZoom(r,s);return this.setView(d.center,d.zoom,s)},fitWorld:function(r){return this.fitBounds([[-90,-180],[90,180]],r)},panTo:function(r,s){return this.setView(r,this._zoom,{pan:s})},panBy:function(r,s){if(r=q(r).round(),s=s||{},!r.x&&!r.y)return this.fire("moveend");if(s.animate!==!0&&!this.getSize().contains(r))return this._resetView(this.unproject(this.project(this.getCenter()).add(r)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new lf,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),s.noMoveStart||this.fire("movestart"),s.animate!==!1){Re(this._mapPane,"leaflet-pan-anim");var d=this._getMapPanePos().subtract(r).round();this._panAnim.run(this._mapPane,d,s.duration||.25,s.easeLinearity)}else this._rawPanBy(r),this.fire("move").fire("moveend");return this},flyTo:function(r,s,d){if(d=d||{},d.animate===!1||!te.any3d)return this.setView(r,s,d);this._stop();var p=this.project(this.getCenter()),y=this.project(r),S=this.getSize(),O=this._zoom;r=F(r),s=s===void 0?O:s;var Z=Math.max(S.x,S.y),Q=Z*this.getZoomScale(O,s),fe=y.distanceTo(p)||1,we=1.42,Ce=we*we;function De(wt){var cl=wt?-1:1,x2=wt?Q:Z,y2=Q*Q-Z*Z+cl*Ce*Ce*fe*fe,v2=2*x2*Ce*fe,zd=y2/v2,Wf=Math.sqrt(zd*zd+1)-zd,b2=Wf<1e-9?-18:Math.log(Wf);return b2}function qt(wt){return(Math.exp(wt)-Math.exp(-wt))/2}function Pt(wt){return(Math.exp(wt)+Math.exp(-wt))/2}function Sn(wt){return qt(wt)/Pt(wt)}var tn=De(0);function ba(wt){return Z*(Pt(tn)/Pt(tn+we*wt))}function p2(wt){return Z*(Pt(tn)*Sn(tn+we*wt)-qt(tn))/Ce}function f2(wt){return 1-Math.pow(1-wt,1.5)}var m2=Date.now(),Df=(De(1)-tn)/we,g2=d.duration?1e3*d.duration:1e3*Df*.8;function Uf(){var wt=(Date.now()-m2)/g2,cl=f2(wt)*Df;wt<=1?(this._flyToFrame=W(Uf,this),this._move(this.unproject(p.add(y.subtract(p).multiplyBy(p2(cl)/fe)),O),this.getScaleZoom(Z/ba(cl),O),{flyTo:!0})):this._move(r,s)._moveEnd(!0)}return this._moveStart(!0,d.noMoveStart),Uf.call(this),this},flyToBounds:function(r,s){var d=this._getBoundsCenterZoom(r,s);return this.flyTo(d.center,d.zoom,s)},setMaxBounds:function(r){return r=$(r),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),r.isValid()?(this.options.maxBounds=r,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(r){var s=this.options.minZoom;return this.options.minZoom=r,this._loaded&&s!==r&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(r):this},setMaxZoom:function(r){var s=this.options.maxZoom;return this.options.maxZoom=r,this._loaded&&s!==r&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(r):this},panInsideBounds:function(r,s){this._enforcingBounds=!0;var d=this.getCenter(),p=this._limitCenter(d,this._zoom,$(r));return d.equals(p)||this.panTo(p,s),this._enforcingBounds=!1,this},panInside:function(r,s){s=s||{};var d=q(s.paddingTopLeft||s.padding||[0,0]),p=q(s.paddingBottomRight||s.padding||[0,0]),y=this.project(this.getCenter()),S=this.project(r),O=this.getPixelBounds(),Z=ne([O.min.add(d),O.max.subtract(p)]),Q=Z.getSize();if(!Z.contains(S)){this._enforcingBounds=!0;var fe=S.subtract(Z.getCenter()),we=Z.extend(S).getSize().subtract(Q);y.x+=fe.x<0?-we.x:we.x,y.y+=fe.y<0?-we.y:we.y,this.panTo(this.unproject(y),s),this._enforcingBounds=!1}return this},invalidateSize:function(r){if(!this._loaded)return this;r=o({animate:!1,pan:!0},r===!0?{animate:!0}:r);var s=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var d=this.getSize(),p=s.divideBy(2).round(),y=d.divideBy(2).round(),S=p.subtract(y);return!S.x&&!S.y?this:(r.animate&&r.pan?this.panBy(S):(r.pan&&this._rawPanBy(S),this.fire("move"),r.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(c(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:s,newSize:d}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(r){if(r=this._locateOptions=o({timeout:1e4,watch:!1},r),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var s=c(this._handleGeolocationResponse,this),d=c(this._handleGeolocationError,this);return r.watch?this._locationWatchId=navigator.geolocation.watchPosition(s,d,r):navigator.geolocation.getCurrentPosition(s,d,r),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(r){if(this._container._leaflet_id){var s=r.code,d=r.message||(s===1?"permission denied":s===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:s,message:"Geolocation error: "+d+"."})}},_handleGeolocationResponse:function(r){if(this._container._leaflet_id){var s=r.coords.latitude,d=r.coords.longitude,p=new G(s,d),y=p.toBounds(r.coords.accuracy*2),S=this._locateOptions;if(S.setView){var O=this.getBoundsZoom(y);this.setView(p,S.maxZoom?Math.min(O,S.maxZoom):O)}var Z={latlng:p,bounds:y,timestamp:r.timestamp};for(var Q in r.coords)typeof r.coords[Q]=="number"&&(Z[Q]=r.coords[Q]);this.fire("locationfound",Z)}},addHandler:function(r,s){if(!s)return this;var d=this[r]=new s(this);return this._handlers.push(d),this.options[r]&&d.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),Je(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(U(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var r;for(r in this._layers)this._layers[r].remove();for(r in this._panes)Je(this._panes[r]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(r,s){var d="leaflet-pane"+(r?" leaflet-"+r.replace("Pane","")+"-pane":""),p=Ne("div",d,s||this._mapPane);return r&&(this._panes[r]=p),p},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var r=this.getPixelBounds(),s=this.unproject(r.getBottomLeft()),d=this.unproject(r.getTopRight());return new ue(s,d)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(r,s,d){r=$(r),d=q(d||[0,0]);var p=this.getZoom()||0,y=this.getMinZoom(),S=this.getMaxZoom(),O=r.getNorthWest(),Z=r.getSouthEast(),Q=this.getSize().subtract(d),fe=ne(this.project(Z,p),this.project(O,p)).getSize(),we=te.any3d?this.options.zoomSnap:1,Ce=Q.x/fe.x,De=Q.y/fe.y,qt=s?Math.max(Ce,De):Math.min(Ce,De);return p=this.getScaleZoom(qt,p),we&&(p=Math.round(p/(we/100))*(we/100),p=s?Math.ceil(p/we)*we:Math.floor(p/we)*we),Math.max(y,Math.min(S,p))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new A(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(r,s){var d=this._getTopLeftPoint(r,s);return new ce(d,d.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(r){return this.options.crs.getProjectedBounds(r===void 0?this.getZoom():r)},getPane:function(r){return typeof r=="string"?this._panes[r]:r},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(r,s){var d=this.options.crs;return s=s===void 0?this._zoom:s,d.scale(r)/d.scale(s)},getScaleZoom:function(r,s){var d=this.options.crs;s=s===void 0?this._zoom:s;var p=d.zoom(r*d.scale(s));return isNaN(p)?1/0:p},project:function(r,s){return s=s===void 0?this._zoom:s,this.options.crs.latLngToPoint(F(r),s)},unproject:function(r,s){return s=s===void 0?this._zoom:s,this.options.crs.pointToLatLng(q(r),s)},layerPointToLatLng:function(r){var s=q(r).add(this.getPixelOrigin());return this.unproject(s)},latLngToLayerPoint:function(r){var s=this.project(F(r))._round();return s._subtract(this.getPixelOrigin())},wrapLatLng:function(r){return this.options.crs.wrapLatLng(F(r))},wrapLatLngBounds:function(r){return this.options.crs.wrapLatLngBounds($(r))},distance:function(r,s){return this.options.crs.distance(F(r),F(s))},containerPointToLayerPoint:function(r){return q(r).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(r){return q(r).add(this._getMapPanePos())},containerPointToLatLng:function(r){var s=this.containerPointToLayerPoint(q(r));return this.layerPointToLatLng(s)},latLngToContainerPoint:function(r){return this.layerPointToContainerPoint(this.latLngToLayerPoint(F(r)))},mouseEventToContainerPoint:function(r){return of(r,this._container)},mouseEventToLayerPoint:function(r){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(r))},mouseEventToLatLng:function(r){return this.layerPointToLatLng(this.mouseEventToLayerPoint(r))},_initContainer:function(r){var s=this._container=jr(r);if(s){if(s._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");Ae(s,"scroll",this._onScroll,this),this._containerId=u(s)},_initLayout:function(){var r=this._container;this._fadeAnimated=this.options.fadeAnimation&&te.any3d,Re(r,"leaflet-container"+(te.touch?" leaflet-touch":"")+(te.retina?" leaflet-retina":"")+(te.ielt9?" leaflet-oldie":"")+(te.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var s=On(r,"position");s!=="absolute"&&s!=="relative"&&s!=="fixed"&&s!=="sticky"&&(r.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var r=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),bt(this._mapPane,new A(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(Re(r.markerPane,"leaflet-zoom-hide"),Re(r.shadowPane,"leaflet-zoom-hide"))},_resetView:function(r,s,d){bt(this._mapPane,new A(0,0));var p=!this._loaded;this._loaded=!0,s=this._limitZoom(s),this.fire("viewprereset");var y=this._zoom!==s;this._moveStart(y,d)._move(r,s)._moveEnd(y),this.fire("viewreset"),p&&this.fire("load")},_moveStart:function(r,s){return r&&this.fire("zoomstart"),s||this.fire("movestart"),this},_move:function(r,s,d,p){s===void 0&&(s=this._zoom);var y=this._zoom!==s;return this._zoom=s,this._lastCenter=r,this._pixelOrigin=this._getNewPixelOrigin(r),p?d&&d.pinch&&this.fire("zoom",d):((y||d&&d.pinch)&&this.fire("zoom",d),this.fire("move",d)),this},_moveEnd:function(r){return r&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return U(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(r){bt(this._mapPane,this._getMapPanePos().subtract(r))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(r){this._targets={},this._targets[u(this._container)]=this;var s=r?rt:Ae;s(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&s(window,"resize",this._onResize,this),te.any3d&&this.options.transform3DLimit&&(r?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){U(this._resizeRequest),this._resizeRequest=W(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var r=this._getMapPanePos();Math.max(Math.abs(r.x),Math.abs(r.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(r,s){for(var d=[],p,y=s==="mouseout"||s==="mouseover",S=r.target||r.srcElement,O=!1;S;){if(p=this._targets[u(S)],p&&(s==="click"||s==="preclick")&&this._draggableMoved(p)){O=!0;break}if(p&&p.listens(s,!0)&&(y&&!yd(S,r)||(d.push(p),y))||S===this._container)break;S=S.parentNode}return!d.length&&!O&&!y&&this.listens(s,!0)&&(d=[this]),d},_isClickDisabled:function(r){for(;r&&r!==this._container;){if(r._leaflet_disable_click)return!0;r=r.parentNode}},_handleDOMEvent:function(r){var s=r.target||r.srcElement;if(!(!this._loaded||s._leaflet_disable_events||r.type==="click"&&this._isClickDisabled(s))){var d=r.type;d==="mousedown"&&hd(s),this._fireDOMEvent(r,d)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(r,s,d){if(r.type==="click"){var p=o({},r);p.type="preclick",this._fireDOMEvent(p,p.type,d)}var y=this._findEventTargets(r,s);if(d){for(var S=[],O=0;O<d.length;O++)d[O].listens(s,!0)&&S.push(d[O]);y=S.concat(y)}if(y.length){s==="contextmenu"&&Lt(r);var Z=y[0],Q={originalEvent:r};if(r.type!=="keypress"&&r.type!=="keydown"&&r.type!=="keyup"){var fe=Z.getLatLng&&(!Z._radius||Z._radius<=10);Q.containerPoint=fe?this.latLngToContainerPoint(Z.getLatLng()):this.mouseEventToContainerPoint(r),Q.layerPoint=this.containerPointToLayerPoint(Q.containerPoint),Q.latlng=fe?Z.getLatLng():this.layerPointToLatLng(Q.layerPoint)}for(O=0;O<y.length;O++)if(y[O].fire(s,Q,!0),Q.originalEvent._stopped||y[O].options.bubblingMouseEvents===!1&&C(this._mouseEvents,s)!==-1)return}},_draggableMoved:function(r){return r=r.dragging&&r.dragging.enabled()?r:this,r.dragging&&r.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var r=0,s=this._handlers.length;r<s;r++)this._handlers[r].disable()},whenReady:function(r,s){return this._loaded?r.call(s||this,{target:this}):this.on("load",r,s),this},_getMapPanePos:function(){return Ei(this._mapPane)||new A(0,0)},_moved:function(){var r=this._getMapPanePos();return r&&!r.equals([0,0])},_getTopLeftPoint:function(r,s){var d=r&&s!==void 0?this._getNewPixelOrigin(r,s):this.getPixelOrigin();return d.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(r,s){var d=this.getSize()._divideBy(2);return this.project(r,s)._subtract(d)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(r,s,d){var p=this._getNewPixelOrigin(d,s);return this.project(r,s)._subtract(p)},_latLngBoundsToNewLayerBounds:function(r,s,d){var p=this._getNewPixelOrigin(d,s);return ne([this.project(r.getSouthWest(),s)._subtract(p),this.project(r.getNorthWest(),s)._subtract(p),this.project(r.getSouthEast(),s)._subtract(p),this.project(r.getNorthEast(),s)._subtract(p)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(r){return this.latLngToLayerPoint(r).subtract(this._getCenterLayerPoint())},_limitCenter:function(r,s,d){if(!d)return r;var p=this.project(r,s),y=this.getSize().divideBy(2),S=new ce(p.subtract(y),p.add(y)),O=this._getBoundsOffset(S,d,s);return Math.abs(O.x)<=1&&Math.abs(O.y)<=1?r:this.unproject(p.add(O),s)},_limitOffset:function(r,s){if(!s)return r;var d=this.getPixelBounds(),p=new ce(d.min.add(r),d.max.add(r));return r.add(this._getBoundsOffset(p,s))},_getBoundsOffset:function(r,s,d){var p=ne(this.project(s.getNorthEast(),d),this.project(s.getSouthWest(),d)),y=p.min.subtract(r.min),S=p.max.subtract(r.max),O=this._rebound(y.x,-S.x),Z=this._rebound(y.y,-S.y);return new A(O,Z)},_rebound:function(r,s){return r+s>0?Math.round(r-s)/2:Math.max(0,Math.ceil(r))-Math.max(0,Math.floor(s))},_limitZoom:function(r){var s=this.getMinZoom(),d=this.getMaxZoom(),p=te.any3d?this.options.zoomSnap:1;return p&&(r=Math.round(r/p)*p),Math.max(s,Math.min(d,r))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){gt(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(r,s){var d=this._getCenterOffset(r)._trunc();return(s&&s.animate)!==!0&&!this.getSize().contains(d)?!1:(this.panBy(d,s),!0)},_createAnimProxy:function(){var r=this._proxy=Ne("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(r),this.on("zoomanim",function(s){var d=Kr,p=this._proxy.style[d];zi(this._proxy,this.project(s.center,s.zoom),this.getZoomScale(s.zoom,1)),p===this._proxy.style[d]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){Je(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var r=this.getCenter(),s=this.getZoom();zi(this._proxy,this.project(r,s),this.getZoomScale(s,1))},_catchTransitionEnd:function(r){this._animatingZoom&&r.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(r,s,d){if(this._animatingZoom)return!0;if(d=d||{},!this._zoomAnimated||d.animate===!1||this._nothingToAnimate()||Math.abs(s-this._zoom)>this.options.zoomAnimationThreshold)return!1;var p=this.getZoomScale(s),y=this._getCenterOffset(r)._divideBy(1-1/p);return d.animate!==!0&&!this.getSize().contains(y)?!1:(W(function(){this._moveStart(!0,d.noMoveStart||!1)._animateZoom(r,s,!0)},this),!0)},_animateZoom:function(r,s,d,p){this._mapPane&&(d&&(this._animatingZoom=!0,this._animateToCenter=r,this._animateToZoom=s,Re(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:r,zoom:s,noUpdate:p}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(c(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&gt(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function E1(r,s){return new Ze(r,s)}var Bn=de.extend({options:{position:"topright"},initialize:function(r){j(this,r)},getPosition:function(){return this.options.position},setPosition:function(r){var s=this._map;return s&&s.removeControl(this),this.options.position=r,s&&s.addControl(this),this},getContainer:function(){return this._container},addTo:function(r){this.remove(),this._map=r;var s=this._container=this.onAdd(r),d=this.getPosition(),p=r._controlCorners[d];return Re(s,"leaflet-control"),d.indexOf("bottom")!==-1?p.insertBefore(s,p.firstChild):p.appendChild(s),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(Je(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(r){this._map&&r&&r.screenX>0&&r.screenY>0&&this._map.getContainer().focus()}}),_o=function(r){return new Bn(r)};Ze.include({addControl:function(r){return r.addTo(this),this},removeControl:function(r){return r.remove(),this},_initControlPos:function(){var r=this._controlCorners={},s="leaflet-",d=this._controlContainer=Ne("div",s+"control-container",this._container);function p(y,S){var O=s+y+" "+s+S;r[y+S]=Ne("div",O,d)}p("top","left"),p("top","right"),p("bottom","left"),p("bottom","right")},_clearControlPos:function(){for(var r in this._controlCorners)Je(this._controlCorners[r]);Je(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var cf=Bn.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(r,s,d,p){return d<p?-1:p<d?1:0}},initialize:function(r,s,d){j(this,d),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var p in r)this._addLayer(r[p],p);for(p in s)this._addLayer(s[p],p,!0)},onAdd:function(r){this._initLayout(),this._update(),this._map=r,r.on("zoomend",this._checkDisabledLayers,this);for(var s=0;s<this._layers.length;s++)this._layers[s].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(r){return Bn.prototype.addTo.call(this,r),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var r=0;r<this._layers.length;r++)this._layers[r].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(r,s){return this._addLayer(r,s),this._map?this._update():this},addOverlay:function(r,s){return this._addLayer(r,s,!0),this._map?this._update():this},removeLayer:function(r){r.off("add remove",this._onLayerChange,this);var s=this._getLayer(u(r));return s&&this._layers.splice(this._layers.indexOf(s),1),this._map?this._update():this},expand:function(){Re(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var r=this._map.getSize().y-(this._container.offsetTop+50);return r<this._section.clientHeight?(Re(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=r+"px"):gt(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return gt(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var r="leaflet-control-layers",s=this._container=Ne("div",r),d=this.options.collapsed;s.setAttribute("aria-haspopup",!0),wo(s),xd(s);var p=this._section=Ne("section",r+"-list");d&&(this._map.on("click",this.collapse,this),Ae(s,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var y=this._layersLink=Ne("a",r+"-toggle",s);y.href="#",y.title="Layers",y.setAttribute("role","button"),Ae(y,{keydown:function(S){S.keyCode===13&&this._expandSafely()},click:function(S){Lt(S),this._expandSafely()}},this),d||this.expand(),this._baseLayersList=Ne("div",r+"-base",p),this._separator=Ne("div",r+"-separator",p),this._overlaysList=Ne("div",r+"-overlays",p),s.appendChild(p)},_getLayer:function(r){for(var s=0;s<this._layers.length;s++)if(this._layers[s]&&u(this._layers[s].layer)===r)return this._layers[s]},_addLayer:function(r,s,d){this._map&&r.on("add remove",this._onLayerChange,this),this._layers.push({layer:r,name:s,overlay:d}),this.options.sortLayers&&this._layers.sort(c(function(p,y){return this.options.sortFunction(p.layer,y.layer,p.name,y.name)},this)),this.options.autoZIndex&&r.setZIndex&&(this._lastZIndex++,r.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;Pi(this._baseLayersList),Pi(this._overlaysList),this._layerControlInputs=[];var r,s,d,p,y=0;for(d=0;d<this._layers.length;d++)p=this._layers[d],this._addItem(p),s=s||p.overlay,r=r||!p.overlay,y+=p.overlay?0:1;return this.options.hideSingleBase&&(r=r&&y>1,this._baseLayersList.style.display=r?"":"none"),this._separator.style.display=s&&r?"":"none",this},_onLayerChange:function(r){this._handlingClick||this._update();var s=this._getLayer(u(r.target)),d=s.overlay?r.type==="add"?"overlayadd":"overlayremove":r.type==="add"?"baselayerchange":null;d&&this._map.fire(d,s)},_createRadioElement:function(r,s){var d='<input type="radio" class="leaflet-control-layers-selector" name="'+r+'"'+(s?' checked="checked"':"")+"/>",p=document.createElement("div");return p.innerHTML=d,p.firstChild},_addItem:function(r){var s=document.createElement("label"),d=this._map.hasLayer(r.layer),p;r.overlay?(p=document.createElement("input"),p.type="checkbox",p.className="leaflet-control-layers-selector",p.defaultChecked=d):p=this._createRadioElement("leaflet-base-layers_"+u(this),d),this._layerControlInputs.push(p),p.layerId=u(r.layer),Ae(p,"click",this._onInputClick,this);var y=document.createElement("span");y.innerHTML=" "+r.name;var S=document.createElement("span");s.appendChild(S),S.appendChild(p),S.appendChild(y);var O=r.overlay?this._overlaysList:this._baseLayersList;return O.appendChild(s),this._checkDisabledLayers(),s},_onInputClick:function(){if(!this._preventClick){var r=this._layerControlInputs,s,d,p=[],y=[];this._handlingClick=!0;for(var S=r.length-1;S>=0;S--)s=r[S],d=this._getLayer(s.layerId).layer,s.checked?p.push(d):s.checked||y.push(d);for(S=0;S<y.length;S++)this._map.hasLayer(y[S])&&this._map.removeLayer(y[S]);for(S=0;S<p.length;S++)this._map.hasLayer(p[S])||this._map.addLayer(p[S]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var r=this._layerControlInputs,s,d,p=this._map.getZoom(),y=r.length-1;y>=0;y--)s=r[y],d=this._getLayer(s.layerId).layer,s.disabled=d.options.minZoom!==void 0&&p<d.options.minZoom||d.options.maxZoom!==void 0&&p>d.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var r=this._section;this._preventClick=!0,Ae(r,"click",Lt),this.expand();var s=this;setTimeout(function(){rt(r,"click",Lt),s._preventClick=!1})}}),L1=function(r,s,d){return new cf(r,s,d)},vd=Bn.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(r){var s="leaflet-control-zoom",d=Ne("div",s+" leaflet-bar"),p=this.options;return this._zoomInButton=this._createButton(p.zoomInText,p.zoomInTitle,s+"-in",d,this._zoomIn),this._zoomOutButton=this._createButton(p.zoomOutText,p.zoomOutTitle,s+"-out",d,this._zoomOut),this._updateDisabled(),r.on("zoomend zoomlevelschange",this._updateDisabled,this),d},onRemove:function(r){r.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(r){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(r.shiftKey?3:1))},_zoomOut:function(r){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(r.shiftKey?3:1))},_createButton:function(r,s,d,p,y){var S=Ne("a",d,p);return S.innerHTML=r,S.href="#",S.title=s,S.setAttribute("role","button"),S.setAttribute("aria-label",s),wo(S),Ae(S,"click",Mi),Ae(S,"click",y,this),Ae(S,"click",this._refocusOnMap,this),S},_updateDisabled:function(){var r=this._map,s="leaflet-disabled";gt(this._zoomInButton,s),gt(this._zoomOutButton,s),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||r._zoom===r.getMinZoom())&&(Re(this._zoomOutButton,s),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||r._zoom===r.getMaxZoom())&&(Re(this._zoomInButton,s),this._zoomInButton.setAttribute("aria-disabled","true"))}});Ze.mergeOptions({zoomControl:!0}),Ze.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new vd,this.addControl(this.zoomControl))});var M1=function(r){return new vd(r)},df=Bn.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(r){var s="leaflet-control-scale",d=Ne("div",s),p=this.options;return this._addScales(p,s+"-line",d),r.on(p.updateWhenIdle?"moveend":"move",this._update,this),r.whenReady(this._update,this),d},onRemove:function(r){r.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(r,s,d){r.metric&&(this._mScale=Ne("div",s,d)),r.imperial&&(this._iScale=Ne("div",s,d))},_update:function(){var r=this._map,s=r.getSize().y/2,d=r.distance(r.containerPointToLatLng([0,s]),r.containerPointToLatLng([this.options.maxWidth,s]));this._updateScales(d)},_updateScales:function(r){this.options.metric&&r&&this._updateMetric(r),this.options.imperial&&r&&this._updateImperial(r)},_updateMetric:function(r){var s=this._getRoundNum(r),d=s<1e3?s+" m":s/1e3+" km";this._updateScale(this._mScale,d,s/r)},_updateImperial:function(r){var s=r*3.2808399,d,p,y;s>5280?(d=s/5280,p=this._getRoundNum(d),this._updateScale(this._iScale,p+" mi",p/d)):(y=this._getRoundNum(s),this._updateScale(this._iScale,y+" ft",y/s))},_updateScale:function(r,s,d){r.style.width=Math.round(this.options.maxWidth*d)+"px",r.innerHTML=s},_getRoundNum:function(r){var s=Math.pow(10,(Math.floor(r)+"").length-1),d=r/s;return d=d>=10?10:d>=5?5:d>=3?3:d>=2?2:1,s*d}}),T1=function(r){return new df(r)},A1='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',bd=Bn.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(te.inlineSvg?A1+" ":"")+"Leaflet</a>"},initialize:function(r){j(this,r),this._attributions={}},onAdd:function(r){r.attributionControl=this,this._container=Ne("div","leaflet-control-attribution"),wo(this._container);for(var s in r._layers)r._layers[s].getAttribution&&this.addAttribution(r._layers[s].getAttribution());return this._update(),r.on("layeradd",this._addAttribution,this),this._container},onRemove:function(r){r.off("layeradd",this._addAttribution,this)},_addAttribution:function(r){r.layer.getAttribution&&(this.addAttribution(r.layer.getAttribution()),r.layer.once("remove",function(){this.removeAttribution(r.layer.getAttribution())},this))},setPrefix:function(r){return this.options.prefix=r,this._update(),this},addAttribution:function(r){return r?(this._attributions[r]||(this._attributions[r]=0),this._attributions[r]++,this._update(),this):this},removeAttribution:function(r){return r?(this._attributions[r]&&(this._attributions[r]--,this._update()),this):this},_update:function(){if(this._map){var r=[];for(var s in this._attributions)this._attributions[s]&&r.push(s);var d=[];this.options.prefix&&d.push(this.options.prefix),r.length&&d.push(r.join(", ")),this._container.innerHTML=d.join(' <span aria-hidden="true">|</span> ')}}});Ze.mergeOptions({attributionControl:!0}),Ze.addInitHook(function(){this.options.attributionControl&&new bd().addTo(this)});var I1=function(r){return new bd(r)};Bn.Layers=cf,Bn.Zoom=vd,Bn.Scale=df,Bn.Attribution=bd,_o.layers=L1,_o.zoom=M1,_o.scale=T1,_o.attribution=I1;var er=de.extend({initialize:function(r){this._map=r},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});er.addTo=function(r,s){return r.addHandler(s,this),this};var R1={Events:le},uf=te.touch?"touchstart mousedown":"mousedown",Qr=V.extend({options:{clickTolerance:3},initialize:function(r,s,d,p){j(this,p),this._element=r,this._dragStartTarget=s||r,this._preventOutline=d},enable:function(){this._enabled||(Ae(this._dragStartTarget,uf,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Qr._dragging===this&&this.finishDrag(!0),rt(this._dragStartTarget,uf,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(r){if(this._enabled&&(this._moved=!1,!od(this._element,"leaflet-zoom-anim"))){if(r.touches&&r.touches.length!==1){Qr._dragging===this&&this.finishDrag();return}if(!(Qr._dragging||r.shiftKey||r.which!==1&&r.button!==1&&!r.touches)&&(Qr._dragging=this,this._preventOutline&&hd(this._element),cd(),yo(),!this._moving)){this.fire("down");var s=r.touches?r.touches[0]:r,d=nf(this._element);this._startPoint=new A(s.clientX,s.clientY),this._startPos=Ei(this._element),this._parentScale=pd(d);var p=r.type==="mousedown";Ae(document,p?"mousemove":"touchmove",this._onMove,this),Ae(document,p?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(r){if(this._enabled){if(r.touches&&r.touches.length>1){this._moved=!0;return}var s=r.touches&&r.touches.length===1?r.touches[0]:r,d=new A(s.clientX,s.clientY)._subtract(this._startPoint);!d.x&&!d.y||Math.abs(d.x)+Math.abs(d.y)<this.options.clickTolerance||(d.x/=this._parentScale.x,d.y/=this._parentScale.y,Lt(r),this._moved||(this.fire("dragstart"),this._moved=!0,Re(document.body,"leaflet-dragging"),this._lastTarget=r.target||r.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),Re(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(d),this._moving=!0,this._lastEvent=r,this._updatePosition())}},_updatePosition:function(){var r={originalEvent:this._lastEvent};this.fire("predrag",r),bt(this._element,this._newPos),this.fire("drag",r)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(r){gt(document.body,"leaflet-dragging"),this._lastTarget&&(gt(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),rt(document,"mousemove touchmove",this._onMove,this),rt(document,"mouseup touchend touchcancel",this._onUp,this),dd(),vo();var s=this._moved&&this._moving;this._moving=!1,Qr._dragging=!1,s&&this.fire("dragend",{noInertia:r,distance:this._newPos.distanceTo(this._startPos)})}});function hf(r,s,d){var p,y=[1,4,2,8],S,O,Z,Q,fe,we,Ce,De;for(S=0,we=r.length;S<we;S++)r[S]._code=Ti(r[S],s);for(Z=0;Z<4;Z++){for(Ce=y[Z],p=[],S=0,we=r.length,O=we-1;S<we;O=S++)Q=r[S],fe=r[O],Q._code&Ce?fe._code&Ce||(De=Js(fe,Q,Ce,s,d),De._code=Ti(De,s),p.push(De)):(fe._code&Ce&&(De=Js(fe,Q,Ce,s,d),De._code=Ti(De,s),p.push(De)),p.push(Q));r=p}return r}function pf(r,s){var d,p,y,S,O,Z,Q,fe,we;if(!r||r.length===0)throw new Error("latlngs not passed");kn(r)||(console.warn("latlngs are not flat! Only the first ring will be used"),r=r[0]);var Ce=F([0,0]),De=$(r),qt=De.getNorthWest().distanceTo(De.getSouthWest())*De.getNorthEast().distanceTo(De.getNorthWest());qt<1700&&(Ce=wd(r));var Pt=r.length,Sn=[];for(d=0;d<Pt;d++){var tn=F(r[d]);Sn.push(s.project(F([tn.lat-Ce.lat,tn.lng-Ce.lng])))}for(Z=Q=fe=0,d=0,p=Pt-1;d<Pt;p=d++)y=Sn[d],S=Sn[p],O=y.y*S.x-S.y*y.x,Q+=(y.x+S.x)*O,fe+=(y.y+S.y)*O,Z+=O*3;Z===0?we=Sn[0]:we=[Q/Z,fe/Z];var ba=s.unproject(q(we));return F([ba.lat+Ce.lat,ba.lng+Ce.lng])}function wd(r){for(var s=0,d=0,p=0,y=0;y<r.length;y++){var S=F(r[y]);s+=S.lat,d+=S.lng,p++}return F([s/p,d/p])}var O1={__proto__:null,clipPolygon:hf,polygonCenter:pf,centroid:wd};function ff(r,s){if(!s||!r.length)return r.slice();var d=s*s;return r=D1(r,d),r=F1(r,d),r}function mf(r,s,d){return Math.sqrt(jo(r,s,d,!0))}function B1(r,s,d){return jo(r,s,d)}function F1(r,s){var d=r.length,p=typeof Uint8Array<"u"?Uint8Array:Array,y=new p(d);y[0]=y[d-1]=1,_d(r,y,s,0,d-1);var S,O=[];for(S=0;S<d;S++)y[S]&&O.push(r[S]);return O}function _d(r,s,d,p,y){var S=0,O,Z,Q;for(Z=p+1;Z<=y-1;Z++)Q=jo(r[Z],r[p],r[y],!0),Q>S&&(O=Z,S=Q);S>d&&(s[O]=1,_d(r,s,d,p,O),_d(r,s,d,O,y))}function D1(r,s){for(var d=[r[0]],p=1,y=0,S=r.length;p<S;p++)U1(r[p],r[y])>s&&(d.push(r[p]),y=p);return y<S-1&&d.push(r[S-1]),d}var gf;function xf(r,s,d,p,y){var S=p?gf:Ti(r,d),O=Ti(s,d),Z,Q,fe;for(gf=O;;){if(!(S|O))return[r,s];if(S&O)return!1;Z=S||O,Q=Js(r,s,Z,d,y),fe=Ti(Q,d),Z===S?(r=Q,S=fe):(s=Q,O=fe)}}function Js(r,s,d,p,y){var S=s.x-r.x,O=s.y-r.y,Z=p.min,Q=p.max,fe,we;return d&8?(fe=r.x+S*(Q.y-r.y)/O,we=Q.y):d&4?(fe=r.x+S*(Z.y-r.y)/O,we=Z.y):d&2?(fe=Q.x,we=r.y+O*(Q.x-r.x)/S):d&1&&(fe=Z.x,we=r.y+O*(Z.x-r.x)/S),new A(fe,we,y)}function Ti(r,s){var d=0;return r.x<s.min.x?d|=1:r.x>s.max.x&&(d|=2),r.y<s.min.y?d|=4:r.y>s.max.y&&(d|=8),d}function U1(r,s){var d=s.x-r.x,p=s.y-r.y;return d*d+p*p}function jo(r,s,d,p){var y=s.x,S=s.y,O=d.x-y,Z=d.y-S,Q=O*O+Z*Z,fe;return Q>0&&(fe=((r.x-y)*O+(r.y-S)*Z)/Q,fe>1?(y=d.x,S=d.y):fe>0&&(y+=O*fe,S+=Z*fe)),O=r.x-y,Z=r.y-S,p?O*O+Z*Z:new A(y,S)}function kn(r){return!z(r[0])||typeof r[0][0]!="object"&&typeof r[0][0]<"u"}function yf(r){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),kn(r)}function vf(r,s){var d,p,y,S,O,Z,Q,fe;if(!r||r.length===0)throw new Error("latlngs not passed");kn(r)||(console.warn("latlngs are not flat! Only the first ring will be used"),r=r[0]);var we=F([0,0]),Ce=$(r),De=Ce.getNorthWest().distanceTo(Ce.getSouthWest())*Ce.getNorthEast().distanceTo(Ce.getNorthWest());De<1700&&(we=wd(r));var qt=r.length,Pt=[];for(d=0;d<qt;d++){var Sn=F(r[d]);Pt.push(s.project(F([Sn.lat-we.lat,Sn.lng-we.lng])))}for(d=0,p=0;d<qt-1;d++)p+=Pt[d].distanceTo(Pt[d+1])/2;if(p===0)fe=Pt[0];else for(d=0,S=0;d<qt-1;d++)if(O=Pt[d],Z=Pt[d+1],y=O.distanceTo(Z),S+=y,S>p){Q=(S-p)/y,fe=[Z.x-Q*(Z.x-O.x),Z.y-Q*(Z.y-O.y)];break}var tn=s.unproject(q(fe));return F([tn.lat+we.lat,tn.lng+we.lng])}var W1={__proto__:null,simplify:ff,pointToSegmentDistance:mf,closestPointOnSegment:B1,clipSegment:xf,_getEdgeIntersection:Js,_getBitCode:Ti,_sqClosestPointOnSegment:jo,isFlat:kn,_flat:yf,polylineCenter:vf},jd={project:function(r){return new A(r.lng,r.lat)},unproject:function(r){return new G(r.y,r.x)},bounds:new ce([-180,-90],[180,90])},kd={R:6378137,R_MINOR:6356752314245179e-9,bounds:new ce([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(r){var s=Math.PI/180,d=this.R,p=r.lat*s,y=this.R_MINOR/d,S=Math.sqrt(1-y*y),O=S*Math.sin(p),Z=Math.tan(Math.PI/4-p/2)/Math.pow((1-O)/(1+O),S/2);return p=-d*Math.log(Math.max(Z,1e-10)),new A(r.lng*s*d,p)},unproject:function(r){for(var s=180/Math.PI,d=this.R,p=this.R_MINOR/d,y=Math.sqrt(1-p*p),S=Math.exp(-r.y/d),O=Math.PI/2-2*Math.atan(S),Z=0,Q=.1,fe;Z<15&&Math.abs(Q)>1e-7;Z++)fe=y*Math.sin(O),fe=Math.pow((1-fe)/(1+fe),y/2),Q=Math.PI/2-2*Math.atan(S*fe)-O,O+=Q;return new G(O*s,r.x*s/d)}},H1={__proto__:null,LonLat:jd,Mercator:kd,SphericalMercator:Ie},Z1=o({},_e,{code:"EPSG:3395",projection:kd,transformation:function(){var r=.5/(Math.PI*kd.R);return Le(r,.5,-r,.5)}()}),bf=o({},_e,{code:"EPSG:4326",projection:jd,transformation:Le(1/180,1,-1/180,.5)}),$1=o({},ge,{projection:jd,transformation:Le(1,0,-1,0),scale:function(r){return Math.pow(2,r)},zoom:function(r){return Math.log(r)/Math.LN2},distance:function(r,s){var d=s.lng-r.lng,p=s.lat-r.lat;return Math.sqrt(d*d+p*p)},infinite:!0});ge.Earth=_e,ge.EPSG3395=Z1,ge.EPSG3857=vt,ge.EPSG900913=ur,ge.EPSG4326=bf,ge.Simple=$1;var Fn=V.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(r){return r.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(r){return r&&r.removeLayer(this),this},getPane:function(r){return this._map.getPane(r?this.options[r]||r:this.options.pane)},addInteractiveTarget:function(r){return this._map._targets[u(r)]=this,this},removeInteractiveTarget:function(r){return delete this._map._targets[u(r)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(r){var s=r.target;if(s.hasLayer(this)){if(this._map=s,this._zoomAnimated=s._zoomAnimated,this.getEvents){var d=this.getEvents();s.on(d,this),this.once("remove",function(){s.off(d,this)},this)}this.onAdd(s),this.fire("add"),s.fire("layeradd",{layer:this})}}});Ze.include({addLayer:function(r){if(!r._layerAdd)throw new Error("The provided object is not a Layer.");var s=u(r);return this._layers[s]?this:(this._layers[s]=r,r._mapToAdd=this,r.beforeAdd&&r.beforeAdd(this),this.whenReady(r._layerAdd,r),this)},removeLayer:function(r){var s=u(r);return this._layers[s]?(this._loaded&&r.onRemove(this),delete this._layers[s],this._loaded&&(this.fire("layerremove",{layer:r}),r.fire("remove")),r._map=r._mapToAdd=null,this):this},hasLayer:function(r){return u(r)in this._layers},eachLayer:function(r,s){for(var d in this._layers)r.call(s,this._layers[d]);return this},_addLayers:function(r){r=r?z(r)?r:[r]:[];for(var s=0,d=r.length;s<d;s++)this.addLayer(r[s])},_addZoomLimit:function(r){(!isNaN(r.options.maxZoom)||!isNaN(r.options.minZoom))&&(this._zoomBoundLayers[u(r)]=r,this._updateZoomLevels())},_removeZoomLimit:function(r){var s=u(r);this._zoomBoundLayers[s]&&(delete this._zoomBoundLayers[s],this._updateZoomLevels())},_updateZoomLevels:function(){var r=1/0,s=-1/0,d=this._getZoomSpan();for(var p in this._zoomBoundLayers){var y=this._zoomBoundLayers[p].options;r=y.minZoom===void 0?r:Math.min(r,y.minZoom),s=y.maxZoom===void 0?s:Math.max(s,y.maxZoom)}this._layersMaxZoom=s===-1/0?void 0:s,this._layersMinZoom=r===1/0?void 0:r,d!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var ma=Fn.extend({initialize:function(r,s){j(this,s),this._layers={};var d,p;if(r)for(d=0,p=r.length;d<p;d++)this.addLayer(r[d])},addLayer:function(r){var s=this.getLayerId(r);return this._layers[s]=r,this._map&&this._map.addLayer(r),this},removeLayer:function(r){var s=r in this._layers?r:this.getLayerId(r);return this._map&&this._layers[s]&&this._map.removeLayer(this._layers[s]),delete this._layers[s],this},hasLayer:function(r){var s=typeof r=="number"?r:this.getLayerId(r);return s in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(r){var s=Array.prototype.slice.call(arguments,1),d,p;for(d in this._layers)p=this._layers[d],p[r]&&p[r].apply(p,s);return this},onAdd:function(r){this.eachLayer(r.addLayer,r)},onRemove:function(r){this.eachLayer(r.removeLayer,r)},eachLayer:function(r,s){for(var d in this._layers)r.call(s,this._layers[d]);return this},getLayer:function(r){return this._layers[r]},getLayers:function(){var r=[];return this.eachLayer(r.push,r),r},setZIndex:function(r){return this.invoke("setZIndex",r)},getLayerId:function(r){return u(r)}}),q1=function(r,s){return new ma(r,s)},kr=ma.extend({addLayer:function(r){return this.hasLayer(r)?this:(r.addEventParent(this),ma.prototype.addLayer.call(this,r),this.fire("layeradd",{layer:r}))},removeLayer:function(r){return this.hasLayer(r)?(r in this._layers&&(r=this._layers[r]),r.removeEventParent(this),ma.prototype.removeLayer.call(this,r),this.fire("layerremove",{layer:r})):this},setStyle:function(r){return this.invoke("setStyle",r)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var r=new ue;for(var s in this._layers){var d=this._layers[s];r.extend(d.getBounds?d.getBounds():d.getLatLng())}return r}}),V1=function(r,s){return new kr(r,s)},ga=de.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(r){j(this,r)},createIcon:function(r){return this._createIcon("icon",r)},createShadow:function(r){return this._createIcon("shadow",r)},_createIcon:function(r,s){var d=this._getIconUrl(r);if(!d){if(r==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var p=this._createImg(d,s&&s.tagName==="IMG"?s:null);return this._setIconStyles(p,r),(this.options.crossOrigin||this.options.crossOrigin==="")&&(p.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),p},_setIconStyles:function(r,s){var d=this.options,p=d[s+"Size"];typeof p=="number"&&(p=[p,p]);var y=q(p),S=q(s==="shadow"&&d.shadowAnchor||d.iconAnchor||y&&y.divideBy(2,!0));r.className="leaflet-marker-"+s+" "+(d.className||""),S&&(r.style.marginLeft=-S.x+"px",r.style.marginTop=-S.y+"px"),y&&(r.style.width=y.x+"px",r.style.height=y.y+"px")},_createImg:function(r,s){return s=s||document.createElement("img"),s.src=r,s},_getIconUrl:function(r){return te.retina&&this.options[r+"RetinaUrl"]||this.options[r+"Url"]}});function G1(r){return new ga(r)}var ko=ga.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(r){return typeof ko.imagePath!="string"&&(ko.imagePath=this._detectIconPath()),(this.options.imagePath||ko.imagePath)+ga.prototype._getIconUrl.call(this,r)},_stripUrl:function(r){var s=function(d,p,y){var S=p.exec(d);return S&&S[y]};return r=s(r,/^url\((['"])?(.+)\1\)$/,2),r&&s(r,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var r=Ne("div","leaflet-default-icon-path",document.body),s=On(r,"background-image")||On(r,"backgroundImage");if(document.body.removeChild(r),s=this._stripUrl(s),s)return s;var d=document.querySelector('link[href$="leaflet.css"]');return d?d.href.substring(0,d.href.length-11-1):""}}),wf=er.extend({initialize:function(r){this._marker=r},addHooks:function(){var r=this._marker._icon;this._draggable||(this._draggable=new Qr(r,r,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),Re(r,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&gt(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(r){var s=this._marker,d=s._map,p=this._marker.options.autoPanSpeed,y=this._marker.options.autoPanPadding,S=Ei(s._icon),O=d.getPixelBounds(),Z=d.getPixelOrigin(),Q=ne(O.min._subtract(Z).add(y),O.max._subtract(Z).subtract(y));if(!Q.contains(S)){var fe=q((Math.max(Q.max.x,S.x)-Q.max.x)/(O.max.x-Q.max.x)-(Math.min(Q.min.x,S.x)-Q.min.x)/(O.min.x-Q.min.x),(Math.max(Q.max.y,S.y)-Q.max.y)/(O.max.y-Q.max.y)-(Math.min(Q.min.y,S.y)-Q.min.y)/(O.min.y-Q.min.y)).multiplyBy(p);d.panBy(fe,{animate:!1}),this._draggable._newPos._add(fe),this._draggable._startPos._add(fe),bt(s._icon,this._draggable._newPos),this._onDrag(r),this._panRequest=W(this._adjustPan.bind(this,r))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(r){this._marker.options.autoPan&&(U(this._panRequest),this._panRequest=W(this._adjustPan.bind(this,r)))},_onDrag:function(r){var s=this._marker,d=s._shadow,p=Ei(s._icon),y=s._map.layerPointToLatLng(p);d&&bt(d,p),s._latlng=y,r.latlng=y,r.oldLatLng=this._oldLatLng,s.fire("move",r).fire("drag",r)},_onDragEnd:function(r){U(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",r)}}),Xs=Fn.extend({options:{icon:new ko,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(r,s){j(this,s),this._latlng=F(r)},onAdd:function(r){this._zoomAnimated=this._zoomAnimated&&r.options.markerZoomAnimation,this._zoomAnimated&&r.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(r){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&r.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(r){var s=this._latlng;return this._latlng=F(r),this.update(),this.fire("move",{oldLatLng:s,latlng:this._latlng})},setZIndexOffset:function(r){return this.options.zIndexOffset=r,this.update()},getIcon:function(){return this.options.icon},setIcon:function(r){return this.options.icon=r,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var r=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(r)}return this},_initIcon:function(){var r=this.options,s="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),d=r.icon.createIcon(this._icon),p=!1;d!==this._icon&&(this._icon&&this._removeIcon(),p=!0,r.title&&(d.title=r.title),d.tagName==="IMG"&&(d.alt=r.alt||"")),Re(d,s),r.keyboard&&(d.tabIndex="0",d.setAttribute("role","button")),this._icon=d,r.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&Ae(d,"focus",this._panOnFocus,this);var y=r.icon.createShadow(this._shadow),S=!1;y!==this._shadow&&(this._removeShadow(),S=!0),y&&(Re(y,s),y.alt=""),this._shadow=y,r.opacity<1&&this._updateOpacity(),p&&this.getPane().appendChild(this._icon),this._initInteraction(),y&&S&&this.getPane(r.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&rt(this._icon,"focus",this._panOnFocus,this),Je(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&Je(this._shadow),this._shadow=null},_setPos:function(r){this._icon&&bt(this._icon,r),this._shadow&&bt(this._shadow,r),this._zIndex=r.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(r){this._icon&&(this._icon.style.zIndex=this._zIndex+r)},_animateZoom:function(r){var s=this._map._latLngToNewLayerPoint(this._latlng,r.zoom,r.center).round();this._setPos(s)},_initInteraction:function(){if(this.options.interactive&&(Re(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),wf)){var r=this.options.draggable;this.dragging&&(r=this.dragging.enabled(),this.dragging.disable()),this.dragging=new wf(this),r&&this.dragging.enable()}},setOpacity:function(r){return this.options.opacity=r,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var r=this.options.opacity;this._icon&&jn(this._icon,r),this._shadow&&jn(this._shadow,r)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var r=this._map;if(r){var s=this.options.icon.options,d=s.iconSize?q(s.iconSize):q(0,0),p=s.iconAnchor?q(s.iconAnchor):q(0,0);r.panInside(this._latlng,{paddingTopLeft:p,paddingBottomRight:d.subtract(p)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function K1(r,s){return new Xs(r,s)}var Jr=Fn.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(r){this._renderer=r.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(r){return j(this,r),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&r&&Object.prototype.hasOwnProperty.call(r,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),el=Jr.extend({options:{fill:!0,radius:10},initialize:function(r,s){j(this,s),this._latlng=F(r),this._radius=this.options.radius},setLatLng:function(r){var s=this._latlng;return this._latlng=F(r),this.redraw(),this.fire("move",{oldLatLng:s,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(r){return this.options.radius=this._radius=r,this.redraw()},getRadius:function(){return this._radius},setStyle:function(r){var s=r&&r.radius||this._radius;return Jr.prototype.setStyle.call(this,r),this.setRadius(s),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var r=this._radius,s=this._radiusY||r,d=this._clickTolerance(),p=[r+d,s+d];this._pxBounds=new ce(this._point.subtract(p),this._point.add(p))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(r){return r.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function Y1(r,s){return new el(r,s)}var Sd=el.extend({initialize:function(r,s,d){if(typeof s=="number"&&(s=o({},d,{radius:s})),j(this,s),this._latlng=F(r),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(r){return this._mRadius=r,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var r=[this._radius,this._radiusY||this._radius];return new ue(this._map.layerPointToLatLng(this._point.subtract(r)),this._map.layerPointToLatLng(this._point.add(r)))},setStyle:Jr.prototype.setStyle,_project:function(){var r=this._latlng.lng,s=this._latlng.lat,d=this._map,p=d.options.crs;if(p.distance===_e.distance){var y=Math.PI/180,S=this._mRadius/_e.R/y,O=d.project([s+S,r]),Z=d.project([s-S,r]),Q=O.add(Z).divideBy(2),fe=d.unproject(Q).lat,we=Math.acos((Math.cos(S*y)-Math.sin(s*y)*Math.sin(fe*y))/(Math.cos(s*y)*Math.cos(fe*y)))/y;(isNaN(we)||we===0)&&(we=S/Math.cos(Math.PI/180*s)),this._point=Q.subtract(d.getPixelOrigin()),this._radius=isNaN(we)?0:Q.x-d.project([fe,r-we]).x,this._radiusY=Q.y-O.y}else{var Ce=p.unproject(p.project(this._latlng).subtract([this._mRadius,0]));this._point=d.latLngToLayerPoint(this._latlng),this._radius=this._point.x-d.latLngToLayerPoint(Ce).x}this._updateBounds()}});function Q1(r,s,d){return new Sd(r,s,d)}var Sr=Jr.extend({options:{smoothFactor:1,noClip:!1},initialize:function(r,s){j(this,s),this._setLatLngs(r)},getLatLngs:function(){return this._latlngs},setLatLngs:function(r){return this._setLatLngs(r),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(r){for(var s=1/0,d=null,p=jo,y,S,O=0,Z=this._parts.length;O<Z;O++)for(var Q=this._parts[O],fe=1,we=Q.length;fe<we;fe++){y=Q[fe-1],S=Q[fe];var Ce=p(r,y,S,!0);Ce<s&&(s=Ce,d=p(r,y,S))}return d&&(d.distance=Math.sqrt(s)),d},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return vf(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(r,s){return s=s||this._defaultShape(),r=F(r),s.push(r),this._bounds.extend(r),this.redraw()},_setLatLngs:function(r){this._bounds=new ue,this._latlngs=this._convertLatLngs(r)},_defaultShape:function(){return kn(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(r){for(var s=[],d=kn(r),p=0,y=r.length;p<y;p++)d?(s[p]=F(r[p]),this._bounds.extend(s[p])):s[p]=this._convertLatLngs(r[p]);return s},_project:function(){var r=new ce;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,r),this._bounds.isValid()&&r.isValid()&&(this._rawPxBounds=r,this._updateBounds())},_updateBounds:function(){var r=this._clickTolerance(),s=new A(r,r);this._rawPxBounds&&(this._pxBounds=new ce([this._rawPxBounds.min.subtract(s),this._rawPxBounds.max.add(s)]))},_projectLatlngs:function(r,s,d){var p=r[0]instanceof G,y=r.length,S,O;if(p){for(O=[],S=0;S<y;S++)O[S]=this._map.latLngToLayerPoint(r[S]),d.extend(O[S]);s.push(O)}else for(S=0;S<y;S++)this._projectLatlngs(r[S],s,d)},_clipPoints:function(){var r=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(r))){if(this.options.noClip){this._parts=this._rings;return}var s=this._parts,d,p,y,S,O,Z,Q;for(d=0,y=0,S=this._rings.length;d<S;d++)for(Q=this._rings[d],p=0,O=Q.length;p<O-1;p++)Z=xf(Q[p],Q[p+1],r,p,!0),Z&&(s[y]=s[y]||[],s[y].push(Z[0]),(Z[1]!==Q[p+1]||p===O-2)&&(s[y].push(Z[1]),y++))}},_simplifyPoints:function(){for(var r=this._parts,s=this.options.smoothFactor,d=0,p=r.length;d<p;d++)r[d]=ff(r[d],s)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(r,s){var d,p,y,S,O,Z,Q=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(r))return!1;for(d=0,S=this._parts.length;d<S;d++)for(Z=this._parts[d],p=0,O=Z.length,y=O-1;p<O;y=p++)if(!(!s&&p===0)&&mf(r,Z[y],Z[p])<=Q)return!0;return!1}});function J1(r,s){return new Sr(r,s)}Sr._flat=yf;var xa=Sr.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return pf(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(r){var s=Sr.prototype._convertLatLngs.call(this,r),d=s.length;return d>=2&&s[0]instanceof G&&s[0].equals(s[d-1])&&s.pop(),s},_setLatLngs:function(r){Sr.prototype._setLatLngs.call(this,r),kn(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return kn(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var r=this._renderer._bounds,s=this.options.weight,d=new A(s,s);if(r=new ce(r.min.subtract(d),r.max.add(d)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(r))){if(this.options.noClip){this._parts=this._rings;return}for(var p=0,y=this._rings.length,S;p<y;p++)S=hf(this._rings[p],r,!0),S.length&&this._parts.push(S)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(r){var s=!1,d,p,y,S,O,Z,Q,fe;if(!this._pxBounds||!this._pxBounds.contains(r))return!1;for(S=0,Q=this._parts.length;S<Q;S++)for(d=this._parts[S],O=0,fe=d.length,Z=fe-1;O<fe;Z=O++)p=d[O],y=d[Z],p.y>r.y!=y.y>r.y&&r.x<(y.x-p.x)*(r.y-p.y)/(y.y-p.y)+p.x&&(s=!s);return s||Sr.prototype._containsPoint.call(this,r,!0)}});function X1(r,s){return new xa(r,s)}var Nr=kr.extend({initialize:function(r,s){j(this,s),this._layers={},r&&this.addData(r)},addData:function(r){var s=z(r)?r:r.features,d,p,y;if(s){for(d=0,p=s.length;d<p;d++)y=s[d],(y.geometries||y.geometry||y.features||y.coordinates)&&this.addData(y);return this}var S=this.options;if(S.filter&&!S.filter(r))return this;var O=tl(r,S);return O?(O.feature=il(r),O.defaultOptions=O.options,this.resetStyle(O),S.onEachFeature&&S.onEachFeature(r,O),this.addLayer(O)):this},resetStyle:function(r){return r===void 0?this.eachLayer(this.resetStyle,this):(r.options=o({},r.defaultOptions),this._setLayerStyle(r,this.options.style),this)},setStyle:function(r){return this.eachLayer(function(s){this._setLayerStyle(s,r)},this)},_setLayerStyle:function(r,s){r.setStyle&&(typeof s=="function"&&(s=s(r.feature)),r.setStyle(s))}});function tl(r,s){var d=r.type==="Feature"?r.geometry:r,p=d?d.coordinates:null,y=[],S=s&&s.pointToLayer,O=s&&s.coordsToLatLng||Nd,Z,Q,fe,we;if(!p&&!d)return null;switch(d.type){case"Point":return Z=O(p),_f(S,r,Z,s);case"MultiPoint":for(fe=0,we=p.length;fe<we;fe++)Z=O(p[fe]),y.push(_f(S,r,Z,s));return new kr(y);case"LineString":case"MultiLineString":return Q=nl(p,d.type==="LineString"?0:1,O),new Sr(Q,s);case"Polygon":case"MultiPolygon":return Q=nl(p,d.type==="Polygon"?1:2,O),new xa(Q,s);case"GeometryCollection":for(fe=0,we=d.geometries.length;fe<we;fe++){var Ce=tl({geometry:d.geometries[fe],type:"Feature",properties:r.properties},s);Ce&&y.push(Ce)}return new kr(y);case"FeatureCollection":for(fe=0,we=d.features.length;fe<we;fe++){var De=tl(d.features[fe],s);De&&y.push(De)}return new kr(y);default:throw new Error("Invalid GeoJSON object.")}}function _f(r,s,d,p){return r?r(s,d):new Xs(d,p&&p.markersInheritOptions&&p)}function Nd(r){return new G(r[1],r[0],r[2])}function nl(r,s,d){for(var p=[],y=0,S=r.length,O;y<S;y++)O=s?nl(r[y],s-1,d):(d||Nd)(r[y]),p.push(O);return p}function Cd(r,s){return r=F(r),r.alt!==void 0?[v(r.lng,s),v(r.lat,s),v(r.alt,s)]:[v(r.lng,s),v(r.lat,s)]}function rl(r,s,d,p){for(var y=[],S=0,O=r.length;S<O;S++)y.push(s?rl(r[S],kn(r[S])?0:s-1,d,p):Cd(r[S],p));return!s&&d&&y.length>0&&y.push(y[0].slice()),y}function ya(r,s){return r.feature?o({},r.feature,{geometry:s}):il(s)}function il(r){return r.type==="Feature"||r.type==="FeatureCollection"?r:{type:"Feature",properties:{},geometry:r}}var Pd={toGeoJSON:function(r){return ya(this,{type:"Point",coordinates:Cd(this.getLatLng(),r)})}};Xs.include(Pd),Sd.include(Pd),el.include(Pd),Sr.include({toGeoJSON:function(r){var s=!kn(this._latlngs),d=rl(this._latlngs,s?1:0,!1,r);return ya(this,{type:(s?"Multi":"")+"LineString",coordinates:d})}}),xa.include({toGeoJSON:function(r){var s=!kn(this._latlngs),d=s&&!kn(this._latlngs[0]),p=rl(this._latlngs,d?2:s?1:0,!0,r);return s||(p=[p]),ya(this,{type:(d?"Multi":"")+"Polygon",coordinates:p})}}),ma.include({toMultiPoint:function(r){var s=[];return this.eachLayer(function(d){s.push(d.toGeoJSON(r).geometry.coordinates)}),ya(this,{type:"MultiPoint",coordinates:s})},toGeoJSON:function(r){var s=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(s==="MultiPoint")return this.toMultiPoint(r);var d=s==="GeometryCollection",p=[];return this.eachLayer(function(y){if(y.toGeoJSON){var S=y.toGeoJSON(r);if(d)p.push(S.geometry);else{var O=il(S);O.type==="FeatureCollection"?p.push.apply(p,O.features):p.push(O)}}}),d?ya(this,{geometries:p,type:"GeometryCollection"}):{type:"FeatureCollection",features:p}}});function jf(r,s){return new Nr(r,s)}var e2=jf,al=Fn.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(r,s,d){this._url=r,this._bounds=$(s),j(this,d)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(Re(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){Je(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(r){return this.options.opacity=r,this._image&&this._updateOpacity(),this},setStyle:function(r){return r.opacity&&this.setOpacity(r.opacity),this},bringToFront:function(){return this._map&&Yr(this._image),this},bringToBack:function(){return this._map&&fa(this._image),this},setUrl:function(r){return this._url=r,this._image&&(this._image.src=r),this},setBounds:function(r){return this._bounds=$(r),this._map&&this._reset(),this},getEvents:function(){var r={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(r.zoomanim=this._animateZoom),r},setZIndex:function(r){return this.options.zIndex=r,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var r=this._url.tagName==="IMG",s=this._image=r?this._url:Ne("img");if(Re(s,"leaflet-image-layer"),this._zoomAnimated&&Re(s,"leaflet-zoom-animated"),this.options.className&&Re(s,this.options.className),s.onselectstart=x,s.onmousemove=x,s.onload=c(this.fire,this,"load"),s.onerror=c(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(s.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),r){this._url=s.src;return}s.src=this._url,s.alt=this.options.alt},_animateZoom:function(r){var s=this._map.getZoomScale(r.zoom),d=this._map._latLngBoundsToNewLayerBounds(this._bounds,r.zoom,r.center).min;zi(this._image,d,s)},_reset:function(){var r=this._image,s=new ce(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),d=s.getSize();bt(r,s.min),r.style.width=d.x+"px",r.style.height=d.y+"px"},_updateOpacity:function(){jn(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var r=this.options.errorOverlayUrl;r&&this._url!==r&&(this._url=r,this._image.src=r)},getCenter:function(){return this._bounds.getCenter()}}),t2=function(r,s,d){return new al(r,s,d)},kf=al.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var r=this._url.tagName==="VIDEO",s=this._image=r?this._url:Ne("video");if(Re(s,"leaflet-image-layer"),this._zoomAnimated&&Re(s,"leaflet-zoom-animated"),this.options.className&&Re(s,this.options.className),s.onselectstart=x,s.onmousemove=x,s.onloadeddata=c(this.fire,this,"load"),r){for(var d=s.getElementsByTagName("source"),p=[],y=0;y<d.length;y++)p.push(d[y].src);this._url=d.length>0?p:[s.src];return}z(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(s.style,"objectFit")&&(s.style.objectFit="fill"),s.autoplay=!!this.options.autoplay,s.loop=!!this.options.loop,s.muted=!!this.options.muted,s.playsInline=!!this.options.playsInline;for(var S=0;S<this._url.length;S++){var O=Ne("source");O.src=this._url[S],s.appendChild(O)}}});function n2(r,s,d){return new kf(r,s,d)}var Sf=al.extend({_initImage:function(){var r=this._image=this._url;Re(r,"leaflet-image-layer"),this._zoomAnimated&&Re(r,"leaflet-zoom-animated"),this.options.className&&Re(r,this.options.className),r.onselectstart=x,r.onmousemove=x}});function r2(r,s,d){return new Sf(r,s,d)}var tr=Fn.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(r,s){r&&(r instanceof G||z(r))?(this._latlng=F(r),j(this,s)):(j(this,r),this._source=s),this.options.content&&(this._content=this.options.content)},openOn:function(r){return r=arguments.length?r:this._source._map,r.hasLayer(this)||r.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(r){return this._map?this.close():(arguments.length?this._source=r:r=this._source,this._prepareOpen(),this.openOn(r._map)),this},onAdd:function(r){this._zoomAnimated=r._zoomAnimated,this._container||this._initLayout(),r._fadeAnimated&&jn(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),r._fadeAnimated&&jn(this._container,1),this.bringToFront(),this.options.interactive&&(Re(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(r){r._fadeAnimated?(jn(this._container,0),this._removeTimeout=setTimeout(c(Je,void 0,this._container),200)):Je(this._container),this.options.interactive&&(gt(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(r){return this._latlng=F(r),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(r){return this._content=r,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var r={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(r.zoomanim=this._animateZoom),r},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&Yr(this._container),this},bringToBack:function(){return this._map&&fa(this._container),this},_prepareOpen:function(r){var s=this._source;if(!s._map)return!1;if(s instanceof kr){s=null;var d=this._source._layers;for(var p in d)if(d[p]._map){s=d[p];break}if(!s)return!1;this._source=s}if(!r)if(s.getCenter)r=s.getCenter();else if(s.getLatLng)r=s.getLatLng();else if(s.getBounds)r=s.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(r),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var r=this._contentNode,s=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof s=="string")r.innerHTML=s;else{for(;r.hasChildNodes();)r.removeChild(r.firstChild);r.appendChild(s)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var r=this._map.latLngToLayerPoint(this._latlng),s=q(this.options.offset),d=this._getAnchor();this._zoomAnimated?bt(this._container,r.add(d)):s=s.add(r).add(d);var p=this._containerBottom=-s.y,y=this._containerLeft=-Math.round(this._containerWidth/2)+s.x;this._container.style.bottom=p+"px",this._container.style.left=y+"px"}},_getAnchor:function(){return[0,0]}});Ze.include({_initOverlay:function(r,s,d,p){var y=s;return y instanceof r||(y=new r(p).setContent(s)),d&&y.setLatLng(d),y}}),Fn.include({_initOverlay:function(r,s,d,p){var y=d;return y instanceof r?(j(y,p),y._source=this):(y=s&&!p?s:new r(p,this),y.setContent(d)),y}});var ol=tr.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(r){return r=arguments.length?r:this._source._map,!r.hasLayer(this)&&r._popup&&r._popup.options.autoClose&&r.removeLayer(r._popup),r._popup=this,tr.prototype.openOn.call(this,r)},onAdd:function(r){tr.prototype.onAdd.call(this,r),r.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Jr||this._source.on("preclick",Li))},onRemove:function(r){tr.prototype.onRemove.call(this,r),r.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Jr||this._source.off("preclick",Li))},getEvents:function(){var r=tr.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(r.preclick=this.close),this.options.keepInView&&(r.moveend=this._adjustPan),r},_initLayout:function(){var r="leaflet-popup",s=this._container=Ne("div",r+" "+(this.options.className||"")+" leaflet-zoom-animated"),d=this._wrapper=Ne("div",r+"-content-wrapper",s);if(this._contentNode=Ne("div",r+"-content",d),wo(s),xd(this._contentNode),Ae(s,"contextmenu",Li),this._tipContainer=Ne("div",r+"-tip-container",s),this._tip=Ne("div",r+"-tip",this._tipContainer),this.options.closeButton){var p=this._closeButton=Ne("a",r+"-close-button",s);p.setAttribute("role","button"),p.setAttribute("aria-label","Close popup"),p.href="#close",p.innerHTML='<span aria-hidden="true">&#215;</span>',Ae(p,"click",function(y){Lt(y),this.close()},this)}},_updateLayout:function(){var r=this._contentNode,s=r.style;s.width="",s.whiteSpace="nowrap";var d=r.offsetWidth;d=Math.min(d,this.options.maxWidth),d=Math.max(d,this.options.minWidth),s.width=d+1+"px",s.whiteSpace="",s.height="";var p=r.offsetHeight,y=this.options.maxHeight,S="leaflet-popup-scrolled";y&&p>y?(s.height=y+"px",Re(r,S)):gt(r,S),this._containerWidth=this._container.offsetWidth},_animateZoom:function(r){var s=this._map._latLngToNewLayerPoint(this._latlng,r.zoom,r.center),d=this._getAnchor();bt(this._container,s.add(d))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var r=this._map,s=parseInt(On(this._container,"marginBottom"),10)||0,d=this._container.offsetHeight+s,p=this._containerWidth,y=new A(this._containerLeft,-d-this._containerBottom);y._add(Ei(this._container));var S=r.layerPointToContainerPoint(y),O=q(this.options.autoPanPadding),Z=q(this.options.autoPanPaddingTopLeft||O),Q=q(this.options.autoPanPaddingBottomRight||O),fe=r.getSize(),we=0,Ce=0;S.x+p+Q.x>fe.x&&(we=S.x+p-fe.x+Q.x),S.x-we-Z.x<0&&(we=S.x-Z.x),S.y+d+Q.y>fe.y&&(Ce=S.y+d-fe.y+Q.y),S.y-Ce-Z.y<0&&(Ce=S.y-Z.y),(we||Ce)&&(this.options.keepInView&&(this._autopanning=!0),r.fire("autopanstart").panBy([we,Ce]))}},_getAnchor:function(){return q(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),i2=function(r,s){return new ol(r,s)};Ze.mergeOptions({closePopupOnClick:!0}),Ze.include({openPopup:function(r,s,d){return this._initOverlay(ol,r,s,d).openOn(this),this},closePopup:function(r){return r=arguments.length?r:this._popup,r&&r.close(),this}}),Fn.include({bindPopup:function(r,s){return this._popup=this._initOverlay(ol,this._popup,r,s),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(r){return this._popup&&(this instanceof kr||(this._popup._source=this),this._popup._prepareOpen(r||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(r){return this._popup&&this._popup.setContent(r),this},getPopup:function(){return this._popup},_openPopup:function(r){if(!(!this._popup||!this._map)){Mi(r);var s=r.layer||r.target;if(this._popup._source===s&&!(s instanceof Jr)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(r.latlng);return}this._popup._source=s,this.openPopup(r.latlng)}},_movePopup:function(r){this._popup.setLatLng(r.latlng)},_onKeyPress:function(r){r.originalEvent.keyCode===13&&this._openPopup(r)}});var sl=tr.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(r){tr.prototype.onAdd.call(this,r),this.setOpacity(this.options.opacity),r.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(r){tr.prototype.onRemove.call(this,r),r.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var r=tr.prototype.getEvents.call(this);return this.options.permanent||(r.preclick=this.close),r},_initLayout:function(){var r="leaflet-tooltip",s=r+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=Ne("div",s),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+u(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(r){var s,d,p=this._map,y=this._container,S=p.latLngToContainerPoint(p.getCenter()),O=p.layerPointToContainerPoint(r),Z=this.options.direction,Q=y.offsetWidth,fe=y.offsetHeight,we=q(this.options.offset),Ce=this._getAnchor();Z==="top"?(s=Q/2,d=fe):Z==="bottom"?(s=Q/2,d=0):Z==="center"?(s=Q/2,d=fe/2):Z==="right"?(s=0,d=fe/2):Z==="left"?(s=Q,d=fe/2):O.x<S.x?(Z="right",s=0,d=fe/2):(Z="left",s=Q+(we.x+Ce.x)*2,d=fe/2),r=r.subtract(q(s,d,!0)).add(we).add(Ce),gt(y,"leaflet-tooltip-right"),gt(y,"leaflet-tooltip-left"),gt(y,"leaflet-tooltip-top"),gt(y,"leaflet-tooltip-bottom"),Re(y,"leaflet-tooltip-"+Z),bt(y,r)},_updatePosition:function(){var r=this._map.latLngToLayerPoint(this._latlng);this._setPosition(r)},setOpacity:function(r){this.options.opacity=r,this._container&&jn(this._container,r)},_animateZoom:function(r){var s=this._map._latLngToNewLayerPoint(this._latlng,r.zoom,r.center);this._setPosition(s)},_getAnchor:function(){return q(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),a2=function(r,s){return new sl(r,s)};Ze.include({openTooltip:function(r,s,d){return this._initOverlay(sl,r,s,d).openOn(this),this},closeTooltip:function(r){return r.close(),this}}),Fn.include({bindTooltip:function(r,s){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(sl,this._tooltip,r,s),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(r){if(!(!r&&this._tooltipHandlersAdded)){var s=r?"off":"on",d={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?d.add=this._openTooltip:(d.mouseover=this._openTooltip,d.mouseout=this.closeTooltip,d.click=this._openTooltip,this._map?this._addFocusListeners():d.add=this._addFocusListeners),this._tooltip.options.sticky&&(d.mousemove=this._moveTooltip),this[s](d),this._tooltipHandlersAdded=!r}},openTooltip:function(r){return this._tooltip&&(this instanceof kr||(this._tooltip._source=this),this._tooltip._prepareOpen(r)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(r){return this._tooltip&&this._tooltip.setContent(r),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(r){var s=typeof r.getElement=="function"&&r.getElement();s&&(Ae(s,"focus",function(){this._tooltip._source=r,this.openTooltip()},this),Ae(s,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(r){var s=typeof r.getElement=="function"&&r.getElement();s&&s.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(r){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var s=this;this._map.once("moveend",function(){s._openOnceFlag=!1,s._openTooltip(r)});return}this._tooltip._source=r.layer||r.target,this.openTooltip(this._tooltip.options.sticky?r.latlng:void 0)}},_moveTooltip:function(r){var s=r.latlng,d,p;this._tooltip.options.sticky&&r.originalEvent&&(d=this._map.mouseEventToContainerPoint(r.originalEvent),p=this._map.containerPointToLayerPoint(d),s=this._map.layerPointToLatLng(p)),this._tooltip.setLatLng(s)}});var Nf=ga.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(r){var s=r&&r.tagName==="DIV"?r:document.createElement("div"),d=this.options;if(d.html instanceof Element?(Pi(s),s.appendChild(d.html)):s.innerHTML=d.html!==!1?d.html:"",d.bgPos){var p=q(d.bgPos);s.style.backgroundPosition=-p.x+"px "+-p.y+"px"}return this._setIconStyles(s,"icon"),s},createShadow:function(){return null}});function o2(r){return new Nf(r)}ga.Default=ko;var So=Fn.extend({options:{tileSize:256,opacity:1,updateWhenIdle:te.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(r){j(this,r)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(r){r._addZoomLimit(this)},onRemove:function(r){this._removeAllTiles(),Je(this._container),r._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(Yr(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(fa(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(r){return this.options.opacity=r,this._updateOpacity(),this},setZIndex:function(r){return this.options.zIndex=r,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var r=this._clampZoom(this._map.getZoom());r!==this._tileZoom&&(this._tileZoom=r,this._updateLevels()),this._update()}return this},getEvents:function(){var r={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=m(this._onMoveEnd,this.options.updateInterval,this)),r.move=this._onMove),this._zoomAnimated&&(r.zoomanim=this._animateZoom),r},createTile:function(){return document.createElement("div")},getTileSize:function(){var r=this.options.tileSize;return r instanceof A?r:new A(r,r)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(r){for(var s=this.getPane().children,d=-r(-1/0,1/0),p=0,y=s.length,S;p<y;p++)S=s[p].style.zIndex,s[p]!==this._container&&S&&(d=r(d,+S));isFinite(d)&&(this.options.zIndex=d+r(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!te.ielt9){jn(this._container,this.options.opacity);var r=+new Date,s=!1,d=!1;for(var p in this._tiles){var y=this._tiles[p];if(!(!y.current||!y.loaded)){var S=Math.min(1,(r-y.loaded)/200);jn(y.el,S),S<1?s=!0:(y.active?d=!0:this._onOpaqueTile(y),y.active=!0)}}d&&!this._noPrune&&this._pruneTiles(),s&&(U(this._fadeFrame),this._fadeFrame=W(this._updateOpacity,this))}},_onOpaqueTile:x,_initContainer:function(){this._container||(this._container=Ne("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var r=this._tileZoom,s=this.options.maxZoom;if(r!==void 0){for(var d in this._levels)d=Number(d),this._levels[d].el.children.length||d===r?(this._levels[d].el.style.zIndex=s-Math.abs(r-d),this._onUpdateLevel(d)):(Je(this._levels[d].el),this._removeTilesAtZoom(d),this._onRemoveLevel(d),delete this._levels[d]);var p=this._levels[r],y=this._map;return p||(p=this._levels[r]={},p.el=Ne("div","leaflet-tile-container leaflet-zoom-animated",this._container),p.el.style.zIndex=s,p.origin=y.project(y.unproject(y.getPixelOrigin()),r).round(),p.zoom=r,this._setZoomTransform(p,y.getCenter(),y.getZoom()),x(p.el.offsetWidth),this._onCreateLevel(p)),this._level=p,p}},_onUpdateLevel:x,_onRemoveLevel:x,_onCreateLevel:x,_pruneTiles:function(){if(this._map){var r,s,d=this._map.getZoom();if(d>this.options.maxZoom||d<this.options.minZoom){this._removeAllTiles();return}for(r in this._tiles)s=this._tiles[r],s.retain=s.current;for(r in this._tiles)if(s=this._tiles[r],s.current&&!s.active){var p=s.coords;this._retainParent(p.x,p.y,p.z,p.z-5)||this._retainChildren(p.x,p.y,p.z,p.z+2)}for(r in this._tiles)this._tiles[r].retain||this._removeTile(r)}},_removeTilesAtZoom:function(r){for(var s in this._tiles)this._tiles[s].coords.z===r&&this._removeTile(s)},_removeAllTiles:function(){for(var r in this._tiles)this._removeTile(r)},_invalidateAll:function(){for(var r in this._levels)Je(this._levels[r].el),this._onRemoveLevel(Number(r)),delete this._levels[r];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(r,s,d,p){var y=Math.floor(r/2),S=Math.floor(s/2),O=d-1,Z=new A(+y,+S);Z.z=+O;var Q=this._tileCoordsToKey(Z),fe=this._tiles[Q];return fe&&fe.active?(fe.retain=!0,!0):(fe&&fe.loaded&&(fe.retain=!0),O>p?this._retainParent(y,S,O,p):!1)},_retainChildren:function(r,s,d,p){for(var y=2*r;y<2*r+2;y++)for(var S=2*s;S<2*s+2;S++){var O=new A(y,S);O.z=d+1;var Z=this._tileCoordsToKey(O),Q=this._tiles[Z];if(Q&&Q.active){Q.retain=!0;continue}else Q&&Q.loaded&&(Q.retain=!0);d+1<p&&this._retainChildren(y,S,d+1,p)}},_resetView:function(r){var s=r&&(r.pinch||r.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),s,s)},_animateZoom:function(r){this._setView(r.center,r.zoom,!0,r.noUpdate)},_clampZoom:function(r){var s=this.options;return s.minNativeZoom!==void 0&&r<s.minNativeZoom?s.minNativeZoom:s.maxNativeZoom!==void 0&&s.maxNativeZoom<r?s.maxNativeZoom:r},_setView:function(r,s,d,p){var y=Math.round(s);this.options.maxZoom!==void 0&&y>this.options.maxZoom||this.options.minZoom!==void 0&&y<this.options.minZoom?y=void 0:y=this._clampZoom(y);var S=this.options.updateWhenZooming&&y!==this._tileZoom;(!p||S)&&(this._tileZoom=y,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),y!==void 0&&this._update(r),d||this._pruneTiles(),this._noPrune=!!d),this._setZoomTransforms(r,s)},_setZoomTransforms:function(r,s){for(var d in this._levels)this._setZoomTransform(this._levels[d],r,s)},_setZoomTransform:function(r,s,d){var p=this._map.getZoomScale(d,r.zoom),y=r.origin.multiplyBy(p).subtract(this._map._getNewPixelOrigin(s,d)).round();te.any3d?zi(r.el,y,p):bt(r.el,y)},_resetGrid:function(){var r=this._map,s=r.options.crs,d=this._tileSize=this.getTileSize(),p=this._tileZoom,y=this._map.getPixelWorldBounds(this._tileZoom);y&&(this._globalTileRange=this._pxBoundsToTileRange(y)),this._wrapX=s.wrapLng&&!this.options.noWrap&&[Math.floor(r.project([0,s.wrapLng[0]],p).x/d.x),Math.ceil(r.project([0,s.wrapLng[1]],p).x/d.y)],this._wrapY=s.wrapLat&&!this.options.noWrap&&[Math.floor(r.project([s.wrapLat[0],0],p).y/d.x),Math.ceil(r.project([s.wrapLat[1],0],p).y/d.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(r){var s=this._map,d=s._animatingZoom?Math.max(s._animateToZoom,s.getZoom()):s.getZoom(),p=s.getZoomScale(d,this._tileZoom),y=s.project(r,this._tileZoom).floor(),S=s.getSize().divideBy(p*2);return new ce(y.subtract(S),y.add(S))},_update:function(r){var s=this._map;if(s){var d=this._clampZoom(s.getZoom());if(r===void 0&&(r=s.getCenter()),this._tileZoom!==void 0){var p=this._getTiledPixelBounds(r),y=this._pxBoundsToTileRange(p),S=y.getCenter(),O=[],Z=this.options.keepBuffer,Q=new ce(y.getBottomLeft().subtract([Z,-Z]),y.getTopRight().add([Z,-Z]));if(!(isFinite(y.min.x)&&isFinite(y.min.y)&&isFinite(y.max.x)&&isFinite(y.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var fe in this._tiles){var we=this._tiles[fe].coords;(we.z!==this._tileZoom||!Q.contains(new A(we.x,we.y)))&&(this._tiles[fe].current=!1)}if(Math.abs(d-this._tileZoom)>1){this._setView(r,d);return}for(var Ce=y.min.y;Ce<=y.max.y;Ce++)for(var De=y.min.x;De<=y.max.x;De++){var qt=new A(De,Ce);if(qt.z=this._tileZoom,!!this._isValidTile(qt)){var Pt=this._tiles[this._tileCoordsToKey(qt)];Pt?Pt.current=!0:O.push(qt)}}if(O.sort(function(tn,ba){return tn.distanceTo(S)-ba.distanceTo(S)}),O.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var Sn=document.createDocumentFragment();for(De=0;De<O.length;De++)this._addTile(O[De],Sn);this._level.el.appendChild(Sn)}}}},_isValidTile:function(r){var s=this._map.options.crs;if(!s.infinite){var d=this._globalTileRange;if(!s.wrapLng&&(r.x<d.min.x||r.x>d.max.x)||!s.wrapLat&&(r.y<d.min.y||r.y>d.max.y))return!1}if(!this.options.bounds)return!0;var p=this._tileCoordsToBounds(r);return $(this.options.bounds).overlaps(p)},_keyToBounds:function(r){return this._tileCoordsToBounds(this._keyToTileCoords(r))},_tileCoordsToNwSe:function(r){var s=this._map,d=this.getTileSize(),p=r.scaleBy(d),y=p.add(d),S=s.unproject(p,r.z),O=s.unproject(y,r.z);return[S,O]},_tileCoordsToBounds:function(r){var s=this._tileCoordsToNwSe(r),d=new ue(s[0],s[1]);return this.options.noWrap||(d=this._map.wrapLatLngBounds(d)),d},_tileCoordsToKey:function(r){return r.x+":"+r.y+":"+r.z},_keyToTileCoords:function(r){var s=r.split(":"),d=new A(+s[0],+s[1]);return d.z=+s[2],d},_removeTile:function(r){var s=this._tiles[r];s&&(Je(s.el),delete this._tiles[r],this.fire("tileunload",{tile:s.el,coords:this._keyToTileCoords(r)}))},_initTile:function(r){Re(r,"leaflet-tile");var s=this.getTileSize();r.style.width=s.x+"px",r.style.height=s.y+"px",r.onselectstart=x,r.onmousemove=x,te.ielt9&&this.options.opacity<1&&jn(r,this.options.opacity)},_addTile:function(r,s){var d=this._getTilePos(r),p=this._tileCoordsToKey(r),y=this.createTile(this._wrapCoords(r),c(this._tileReady,this,r));this._initTile(y),this.createTile.length<2&&W(c(this._tileReady,this,r,null,y)),bt(y,d),this._tiles[p]={el:y,coords:r,current:!0},s.appendChild(y),this.fire("tileloadstart",{tile:y,coords:r})},_tileReady:function(r,s,d){s&&this.fire("tileerror",{error:s,tile:d,coords:r});var p=this._tileCoordsToKey(r);d=this._tiles[p],d&&(d.loaded=+new Date,this._map._fadeAnimated?(jn(d.el,0),U(this._fadeFrame),this._fadeFrame=W(this._updateOpacity,this)):(d.active=!0,this._pruneTiles()),s||(Re(d.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:d.el,coords:r})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),te.ielt9||!this._map._fadeAnimated?W(this._pruneTiles,this):setTimeout(c(this._pruneTiles,this),250)))},_getTilePos:function(r){return r.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(r){var s=new A(this._wrapX?g(r.x,this._wrapX):r.x,this._wrapY?g(r.y,this._wrapY):r.y);return s.z=r.z,s},_pxBoundsToTileRange:function(r){var s=this.getTileSize();return new ce(r.min.unscaleBy(s).floor(),r.max.unscaleBy(s).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var r in this._tiles)if(!this._tiles[r].loaded)return!1;return!0}});function s2(r){return new So(r)}var va=So.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(r,s){this._url=r,s=j(this,s),s.detectRetina&&te.retina&&s.maxZoom>0?(s.tileSize=Math.floor(s.tileSize/2),s.zoomReverse?(s.zoomOffset--,s.minZoom=Math.min(s.maxZoom,s.minZoom+1)):(s.zoomOffset++,s.maxZoom=Math.max(s.minZoom,s.maxZoom-1)),s.minZoom=Math.max(0,s.minZoom)):s.zoomReverse?s.minZoom=Math.min(s.maxZoom,s.minZoom):s.maxZoom=Math.max(s.minZoom,s.maxZoom),typeof s.subdomains=="string"&&(s.subdomains=s.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(r,s){return this._url===r&&s===void 0&&(s=!0),this._url=r,s||this.redraw(),this},createTile:function(r,s){var d=document.createElement("img");return Ae(d,"load",c(this._tileOnLoad,this,s,d)),Ae(d,"error",c(this._tileOnError,this,s,d)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(d.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(d.referrerPolicy=this.options.referrerPolicy),d.alt="",d.src=this.getTileUrl(r),d},getTileUrl:function(r){var s={r:te.retina?"@2x":"",s:this._getSubdomain(r),x:r.x,y:r.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var d=this._globalTileRange.max.y-r.y;this.options.tms&&(s.y=d),s["-y"]=d}return w(this._url,o(s,this.options))},_tileOnLoad:function(r,s){te.ielt9?setTimeout(c(r,this,null,s),0):r(null,s)},_tileOnError:function(r,s,d){var p=this.options.errorTileUrl;p&&s.getAttribute("src")!==p&&(s.src=p),r(d,s)},_onTileRemove:function(r){r.tile.onload=null},_getZoomForUrl:function(){var r=this._tileZoom,s=this.options.maxZoom,d=this.options.zoomReverse,p=this.options.zoomOffset;return d&&(r=s-r),r+p},_getSubdomain:function(r){var s=Math.abs(r.x+r.y)%this.options.subdomains.length;return this.options.subdomains[s]},_abortLoading:function(){var r,s;for(r in this._tiles)if(this._tiles[r].coords.z!==this._tileZoom&&(s=this._tiles[r].el,s.onload=x,s.onerror=x,!s.complete)){s.src=I;var d=this._tiles[r].coords;Je(s),delete this._tiles[r],this.fire("tileabort",{tile:s,coords:d})}},_removeTile:function(r){var s=this._tiles[r];if(s)return s.el.setAttribute("src",I),So.prototype._removeTile.call(this,r)},_tileReady:function(r,s,d){if(!(!this._map||d&&d.getAttribute("src")===I))return So.prototype._tileReady.call(this,r,s,d)}});function Cf(r,s){return new va(r,s)}var Pf=va.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(r,s){this._url=r;var d=o({},this.defaultWmsParams);for(var p in s)p in this.options||(d[p]=s[p]);s=j(this,s);var y=s.detectRetina&&te.retina?2:1,S=this.getTileSize();d.width=S.x*y,d.height=S.y*y,this.wmsParams=d},onAdd:function(r){this._crs=this.options.crs||r.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var s=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[s]=this._crs.code,va.prototype.onAdd.call(this,r)},getTileUrl:function(r){var s=this._tileCoordsToNwSe(r),d=this._crs,p=ne(d.project(s[0]),d.project(s[1])),y=p.min,S=p.max,O=(this._wmsVersion>=1.3&&this._crs===bf?[y.y,y.x,S.y,S.x]:[y.x,y.y,S.x,S.y]).join(","),Z=va.prototype.getTileUrl.call(this,r);return Z+P(this.wmsParams,Z,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+O},setParams:function(r,s){return o(this.wmsParams,r),s||this.redraw(),this}});function l2(r,s){return new Pf(r,s)}va.WMS=Pf,Cf.wms=l2;var Cr=Fn.extend({options:{padding:.1},initialize:function(r){j(this,r),u(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),Re(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var r={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(r.zoomanim=this._onAnimZoom),r},_onAnimZoom:function(r){this._updateTransform(r.center,r.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(r,s){var d=this._map.getZoomScale(s,this._zoom),p=this._map.getSize().multiplyBy(.5+this.options.padding),y=this._map.project(this._center,s),S=p.multiplyBy(-d).add(y).subtract(this._map._getNewPixelOrigin(r,s));te.any3d?zi(this._container,S,d):bt(this._container,S)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var r in this._layers)this._layers[r]._reset()},_onZoomEnd:function(){for(var r in this._layers)this._layers[r]._project()},_updatePaths:function(){for(var r in this._layers)this._layers[r]._update()},_update:function(){var r=this.options.padding,s=this._map.getSize(),d=this._map.containerPointToLayerPoint(s.multiplyBy(-r)).round();this._bounds=new ce(d,d.add(s.multiplyBy(1+r*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),zf=Cr.extend({options:{tolerance:0},getEvents:function(){var r=Cr.prototype.getEvents.call(this);return r.viewprereset=this._onViewPreReset,r},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){Cr.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var r=this._container=document.createElement("canvas");Ae(r,"mousemove",this._onMouseMove,this),Ae(r,"click dblclick mousedown mouseup contextmenu",this._onClick,this),Ae(r,"mouseout",this._handleMouseOut,this),r._leaflet_disable_events=!0,this._ctx=r.getContext("2d")},_destroyContainer:function(){U(this._redrawRequest),delete this._ctx,Je(this._container),rt(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var r;this._redrawBounds=null;for(var s in this._layers)r=this._layers[s],r._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Cr.prototype._update.call(this);var r=this._bounds,s=this._container,d=r.getSize(),p=te.retina?2:1;bt(s,r.min),s.width=p*d.x,s.height=p*d.y,s.style.width=d.x+"px",s.style.height=d.y+"px",te.retina&&this._ctx.scale(2,2),this._ctx.translate(-r.min.x,-r.min.y),this.fire("update")}},_reset:function(){Cr.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(r){this._updateDashArray(r),this._layers[u(r)]=r;var s=r._order={layer:r,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=s),this._drawLast=s,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(r){this._requestRedraw(r)},_removePath:function(r){var s=r._order,d=s.next,p=s.prev;d?d.prev=p:this._drawLast=p,p?p.next=d:this._drawFirst=d,delete r._order,delete this._layers[u(r)],this._requestRedraw(r)},_updatePath:function(r){this._extendRedrawBounds(r),r._project(),r._update(),this._requestRedraw(r)},_updateStyle:function(r){this._updateDashArray(r),this._requestRedraw(r)},_updateDashArray:function(r){if(typeof r.options.dashArray=="string"){var s=r.options.dashArray.split(/[, ]+/),d=[],p,y;for(y=0;y<s.length;y++){if(p=Number(s[y]),isNaN(p))return;d.push(p)}r.options._dashArray=d}else r.options._dashArray=r.options.dashArray},_requestRedraw:function(r){this._map&&(this._extendRedrawBounds(r),this._redrawRequest=this._redrawRequest||W(this._redraw,this))},_extendRedrawBounds:function(r){if(r._pxBounds){var s=(r.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new ce,this._redrawBounds.extend(r._pxBounds.min.subtract([s,s])),this._redrawBounds.extend(r._pxBounds.max.add([s,s]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var r=this._redrawBounds;if(r){var s=r.getSize();this._ctx.clearRect(r.min.x,r.min.y,s.x,s.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var r,s=this._redrawBounds;if(this._ctx.save(),s){var d=s.getSize();this._ctx.beginPath(),this._ctx.rect(s.min.x,s.min.y,d.x,d.y),this._ctx.clip()}this._drawing=!0;for(var p=this._drawFirst;p;p=p.next)r=p.layer,(!s||r._pxBounds&&r._pxBounds.intersects(s))&&r._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(r,s){if(this._drawing){var d,p,y,S,O=r._parts,Z=O.length,Q=this._ctx;if(Z){for(Q.beginPath(),d=0;d<Z;d++){for(p=0,y=O[d].length;p<y;p++)S=O[d][p],Q[p?"lineTo":"moveTo"](S.x,S.y);s&&Q.closePath()}this._fillStroke(Q,r)}}},_updateCircle:function(r){if(!(!this._drawing||r._empty())){var s=r._point,d=this._ctx,p=Math.max(Math.round(r._radius),1),y=(Math.max(Math.round(r._radiusY),1)||p)/p;y!==1&&(d.save(),d.scale(1,y)),d.beginPath(),d.arc(s.x,s.y/y,p,0,Math.PI*2,!1),y!==1&&d.restore(),this._fillStroke(d,r)}},_fillStroke:function(r,s){var d=s.options;d.fill&&(r.globalAlpha=d.fillOpacity,r.fillStyle=d.fillColor||d.color,r.fill(d.fillRule||"evenodd")),d.stroke&&d.weight!==0&&(r.setLineDash&&r.setLineDash(s.options&&s.options._dashArray||[]),r.globalAlpha=d.opacity,r.lineWidth=d.weight,r.strokeStyle=d.color,r.lineCap=d.lineCap,r.lineJoin=d.lineJoin,r.stroke())},_onClick:function(r){for(var s=this._map.mouseEventToLayerPoint(r),d,p,y=this._drawFirst;y;y=y.next)d=y.layer,d.options.interactive&&d._containsPoint(s)&&(!(r.type==="click"||r.type==="preclick")||!this._map._draggableMoved(d))&&(p=d);this._fireEvent(p?[p]:!1,r)},_onMouseMove:function(r){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var s=this._map.mouseEventToLayerPoint(r);this._handleMouseHover(r,s)}},_handleMouseOut:function(r){var s=this._hoveredLayer;s&&(gt(this._container,"leaflet-interactive"),this._fireEvent([s],r,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(r,s){if(!this._mouseHoverThrottled){for(var d,p,y=this._drawFirst;y;y=y.next)d=y.layer,d.options.interactive&&d._containsPoint(s)&&(p=d);p!==this._hoveredLayer&&(this._handleMouseOut(r),p&&(Re(this._container,"leaflet-interactive"),this._fireEvent([p],r,"mouseover"),this._hoveredLayer=p)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,r),this._mouseHoverThrottled=!0,setTimeout(c(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(r,s,d){this._map._fireDOMEvent(s,d||s.type,r)},_bringToFront:function(r){var s=r._order;if(s){var d=s.next,p=s.prev;if(d)d.prev=p;else return;p?p.next=d:d&&(this._drawFirst=d),s.prev=this._drawLast,this._drawLast.next=s,s.next=null,this._drawLast=s,this._requestRedraw(r)}},_bringToBack:function(r){var s=r._order;if(s){var d=s.next,p=s.prev;if(p)p.next=d;else return;d?d.prev=p:p&&(this._drawLast=p),s.prev=null,s.next=this._drawFirst,this._drawFirst.prev=s,this._drawFirst=s,this._requestRedraw(r)}}});function Ef(r){return te.canvas?new zf(r):null}var No=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(r){return document.createElement("<lvml:"+r+' class="lvml">')}}catch{}return function(r){return document.createElement("<"+r+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),c2={_initContainer:function(){this._container=Ne("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(Cr.prototype._update.call(this),this.fire("update"))},_initPath:function(r){var s=r._container=No("shape");Re(s,"leaflet-vml-shape "+(this.options.className||"")),s.coordsize="1 1",r._path=No("path"),s.appendChild(r._path),this._updateStyle(r),this._layers[u(r)]=r},_addPath:function(r){var s=r._container;this._container.appendChild(s),r.options.interactive&&r.addInteractiveTarget(s)},_removePath:function(r){var s=r._container;Je(s),r.removeInteractiveTarget(s),delete this._layers[u(r)]},_updateStyle:function(r){var s=r._stroke,d=r._fill,p=r.options,y=r._container;y.stroked=!!p.stroke,y.filled=!!p.fill,p.stroke?(s||(s=r._stroke=No("stroke")),y.appendChild(s),s.weight=p.weight+"px",s.color=p.color,s.opacity=p.opacity,p.dashArray?s.dashStyle=z(p.dashArray)?p.dashArray.join(" "):p.dashArray.replace(/( *, *)/g," "):s.dashStyle="",s.endcap=p.lineCap.replace("butt","flat"),s.joinstyle=p.lineJoin):s&&(y.removeChild(s),r._stroke=null),p.fill?(d||(d=r._fill=No("fill")),y.appendChild(d),d.color=p.fillColor||p.color,d.opacity=p.fillOpacity):d&&(y.removeChild(d),r._fill=null)},_updateCircle:function(r){var s=r._point.round(),d=Math.round(r._radius),p=Math.round(r._radiusY||d);this._setPath(r,r._empty()?"M0 0":"AL "+s.x+","+s.y+" "+d+","+p+" 0,"+65535*360)},_setPath:function(r,s){r._path.v=s},_bringToFront:function(r){Yr(r._container)},_bringToBack:function(r){fa(r._container)}},ll=te.vml?No:hr,Co=Cr.extend({_initContainer:function(){this._container=ll("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=ll("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){Je(this._container),rt(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Cr.prototype._update.call(this);var r=this._bounds,s=r.getSize(),d=this._container;(!this._svgSize||!this._svgSize.equals(s))&&(this._svgSize=s,d.setAttribute("width",s.x),d.setAttribute("height",s.y)),bt(d,r.min),d.setAttribute("viewBox",[r.min.x,r.min.y,s.x,s.y].join(" ")),this.fire("update")}},_initPath:function(r){var s=r._path=ll("path");r.options.className&&Re(s,r.options.className),r.options.interactive&&Re(s,"leaflet-interactive"),this._updateStyle(r),this._layers[u(r)]=r},_addPath:function(r){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(r._path),r.addInteractiveTarget(r._path)},_removePath:function(r){Je(r._path),r.removeInteractiveTarget(r._path),delete this._layers[u(r)]},_updatePath:function(r){r._project(),r._update()},_updateStyle:function(r){var s=r._path,d=r.options;s&&(d.stroke?(s.setAttribute("stroke",d.color),s.setAttribute("stroke-opacity",d.opacity),s.setAttribute("stroke-width",d.weight),s.setAttribute("stroke-linecap",d.lineCap),s.setAttribute("stroke-linejoin",d.lineJoin),d.dashArray?s.setAttribute("stroke-dasharray",d.dashArray):s.removeAttribute("stroke-dasharray"),d.dashOffset?s.setAttribute("stroke-dashoffset",d.dashOffset):s.removeAttribute("stroke-dashoffset")):s.setAttribute("stroke","none"),d.fill?(s.setAttribute("fill",d.fillColor||d.color),s.setAttribute("fill-opacity",d.fillOpacity),s.setAttribute("fill-rule",d.fillRule||"evenodd")):s.setAttribute("fill","none"))},_updatePoly:function(r,s){this._setPath(r,X(r._parts,s))},_updateCircle:function(r){var s=r._point,d=Math.max(Math.round(r._radius),1),p=Math.max(Math.round(r._radiusY),1)||d,y="a"+d+","+p+" 0 1,0 ",S=r._empty()?"M0 0":"M"+(s.x-d)+","+s.y+y+d*2+",0 "+y+-d*2+",0 ";this._setPath(r,S)},_setPath:function(r,s){r._path.setAttribute("d",s)},_bringToFront:function(r){Yr(r._path)},_bringToBack:function(r){fa(r._path)}});te.vml&&Co.include(c2);function Lf(r){return te.svg||te.vml?new Co(r):null}Ze.include({getRenderer:function(r){var s=r.options.renderer||this._getPaneRenderer(r.options.pane)||this.options.renderer||this._renderer;return s||(s=this._renderer=this._createRenderer()),this.hasLayer(s)||this.addLayer(s),s},_getPaneRenderer:function(r){if(r==="overlayPane"||r===void 0)return!1;var s=this._paneRenderers[r];return s===void 0&&(s=this._createRenderer({pane:r}),this._paneRenderers[r]=s),s},_createRenderer:function(r){return this.options.preferCanvas&&Ef(r)||Lf(r)}});var Mf=xa.extend({initialize:function(r,s){xa.prototype.initialize.call(this,this._boundsToLatLngs(r),s)},setBounds:function(r){return this.setLatLngs(this._boundsToLatLngs(r))},_boundsToLatLngs:function(r){return r=$(r),[r.getSouthWest(),r.getNorthWest(),r.getNorthEast(),r.getSouthEast()]}});function d2(r,s){return new Mf(r,s)}Co.create=ll,Co.pointsToPath=X,Nr.geometryToLayer=tl,Nr.coordsToLatLng=Nd,Nr.coordsToLatLngs=nl,Nr.latLngToCoords=Cd,Nr.latLngsToCoords=rl,Nr.getFeature=ya,Nr.asFeature=il,Ze.mergeOptions({boxZoom:!0});var Tf=er.extend({initialize:function(r){this._map=r,this._container=r._container,this._pane=r._panes.overlayPane,this._resetStateTimeout=0,r.on("unload",this._destroy,this)},addHooks:function(){Ae(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){rt(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){Je(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(r){if(!r.shiftKey||r.which!==1&&r.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),yo(),cd(),this._startPoint=this._map.mouseEventToContainerPoint(r),Ae(document,{contextmenu:Mi,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(r){this._moved||(this._moved=!0,this._box=Ne("div","leaflet-zoom-box",this._container),Re(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(r);var s=new ce(this._point,this._startPoint),d=s.getSize();bt(this._box,s.min),this._box.style.width=d.x+"px",this._box.style.height=d.y+"px"},_finish:function(){this._moved&&(Je(this._box),gt(this._container,"leaflet-crosshair")),vo(),dd(),rt(document,{contextmenu:Mi,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(r){if(!(r.which!==1&&r.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(c(this._resetState,this),0);var s=new ue(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(s).fire("boxzoomend",{boxZoomBounds:s})}},_onKeyDown:function(r){r.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});Ze.addInitHook("addHandler","boxZoom",Tf),Ze.mergeOptions({doubleClickZoom:!0});var Af=er.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(r){var s=this._map,d=s.getZoom(),p=s.options.zoomDelta,y=r.originalEvent.shiftKey?d-p:d+p;s.options.doubleClickZoom==="center"?s.setZoom(y):s.setZoomAround(r.containerPoint,y)}});Ze.addInitHook("addHandler","doubleClickZoom",Af),Ze.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var If=er.extend({addHooks:function(){if(!this._draggable){var r=this._map;this._draggable=new Qr(r._mapPane,r._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),r.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),r.on("zoomend",this._onZoomEnd,this),r.whenReady(this._onZoomEnd,this))}Re(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){gt(this._map._container,"leaflet-grab"),gt(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var r=this._map;if(r._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var s=$(this._map.options.maxBounds);this._offsetLimit=ne(this._map.latLngToContainerPoint(s.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(s.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;r.fire("movestart").fire("dragstart"),r.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(r){if(this._map.options.inertia){var s=this._lastTime=+new Date,d=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(d),this._times.push(s),this._prunePositions(s)}this._map.fire("move",r).fire("drag",r)},_prunePositions:function(r){for(;this._positions.length>1&&r-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var r=this._map.getSize().divideBy(2),s=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=s.subtract(r).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(r,s){return r-(r-s)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var r=this._draggable._newPos.subtract(this._draggable._startPos),s=this._offsetLimit;r.x<s.min.x&&(r.x=this._viscousLimit(r.x,s.min.x)),r.y<s.min.y&&(r.y=this._viscousLimit(r.y,s.min.y)),r.x>s.max.x&&(r.x=this._viscousLimit(r.x,s.max.x)),r.y>s.max.y&&(r.y=this._viscousLimit(r.y,s.max.y)),this._draggable._newPos=this._draggable._startPos.add(r)}},_onPreDragWrap:function(){var r=this._worldWidth,s=Math.round(r/2),d=this._initialWorldOffset,p=this._draggable._newPos.x,y=(p-s+d)%r+s-d,S=(p+s+d)%r-s-d,O=Math.abs(y+d)<Math.abs(S+d)?y:S;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=O},_onDragEnd:function(r){var s=this._map,d=s.options,p=!d.inertia||r.noInertia||this._times.length<2;if(s.fire("dragend",r),p)s.fire("moveend");else{this._prunePositions(+new Date);var y=this._lastPos.subtract(this._positions[0]),S=(this._lastTime-this._times[0])/1e3,O=d.easeLinearity,Z=y.multiplyBy(O/S),Q=Z.distanceTo([0,0]),fe=Math.min(d.inertiaMaxSpeed,Q),we=Z.multiplyBy(fe/Q),Ce=fe/(d.inertiaDeceleration*O),De=we.multiplyBy(-Ce/2).round();!De.x&&!De.y?s.fire("moveend"):(De=s._limitOffset(De,s.options.maxBounds),W(function(){s.panBy(De,{duration:Ce,easeLinearity:O,noMoveStart:!0,animate:!0})}))}}});Ze.addInitHook("addHandler","dragging",If),Ze.mergeOptions({keyboard:!0,keyboardPanDelta:80});var Rf=er.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(r){this._map=r,this._setPanDelta(r.options.keyboardPanDelta),this._setZoomDelta(r.options.zoomDelta)},addHooks:function(){var r=this._map._container;r.tabIndex<=0&&(r.tabIndex="0"),Ae(r,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),rt(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var r=document.body,s=document.documentElement,d=r.scrollTop||s.scrollTop,p=r.scrollLeft||s.scrollLeft;this._map._container.focus(),window.scrollTo(p,d)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(r){var s=this._panKeys={},d=this.keyCodes,p,y;for(p=0,y=d.left.length;p<y;p++)s[d.left[p]]=[-1*r,0];for(p=0,y=d.right.length;p<y;p++)s[d.right[p]]=[r,0];for(p=0,y=d.down.length;p<y;p++)s[d.down[p]]=[0,r];for(p=0,y=d.up.length;p<y;p++)s[d.up[p]]=[0,-1*r]},_setZoomDelta:function(r){var s=this._zoomKeys={},d=this.keyCodes,p,y;for(p=0,y=d.zoomIn.length;p<y;p++)s[d.zoomIn[p]]=r;for(p=0,y=d.zoomOut.length;p<y;p++)s[d.zoomOut[p]]=-r},_addHooks:function(){Ae(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){rt(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(r){if(!(r.altKey||r.ctrlKey||r.metaKey)){var s=r.keyCode,d=this._map,p;if(s in this._panKeys){if(!d._panAnim||!d._panAnim._inProgress)if(p=this._panKeys[s],r.shiftKey&&(p=q(p).multiplyBy(3)),d.options.maxBounds&&(p=d._limitOffset(q(p),d.options.maxBounds)),d.options.worldCopyJump){var y=d.wrapLatLng(d.unproject(d.project(d.getCenter()).add(p)));d.panTo(y)}else d.panBy(p)}else if(s in this._zoomKeys)d.setZoom(d.getZoom()+(r.shiftKey?3:1)*this._zoomKeys[s]);else if(s===27&&d._popup&&d._popup.options.closeOnEscapeKey)d.closePopup();else return;Mi(r)}}});Ze.addInitHook("addHandler","keyboard",Rf),Ze.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var Of=er.extend({addHooks:function(){Ae(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){rt(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(r){var s=sf(r),d=this._map.options.wheelDebounceTime;this._delta+=s,this._lastMousePos=this._map.mouseEventToContainerPoint(r),this._startTime||(this._startTime=+new Date);var p=Math.max(d-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(c(this._performZoom,this),p),Mi(r)},_performZoom:function(){var r=this._map,s=r.getZoom(),d=this._map.options.zoomSnap||0;r._stop();var p=this._delta/(this._map.options.wheelPxPerZoomLevel*4),y=4*Math.log(2/(1+Math.exp(-Math.abs(p))))/Math.LN2,S=d?Math.ceil(y/d)*d:y,O=r._limitZoom(s+(this._delta>0?S:-S))-s;this._delta=0,this._startTime=null,O&&(r.options.scrollWheelZoom==="center"?r.setZoom(s+O):r.setZoomAround(this._lastMousePos,s+O))}});Ze.addInitHook("addHandler","scrollWheelZoom",Of);var u2=600;Ze.mergeOptions({tapHold:te.touchNative&&te.safari&&te.mobile,tapTolerance:15});var Bf=er.extend({addHooks:function(){Ae(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){rt(this._map._container,"touchstart",this._onDown,this)},_onDown:function(r){if(clearTimeout(this._holdTimeout),r.touches.length===1){var s=r.touches[0];this._startPos=this._newPos=new A(s.clientX,s.clientY),this._holdTimeout=setTimeout(c(function(){this._cancel(),this._isTapValid()&&(Ae(document,"touchend",Lt),Ae(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",s))},this),u2),Ae(document,"touchend touchcancel contextmenu",this._cancel,this),Ae(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function r(){rt(document,"touchend",Lt),rt(document,"touchend touchcancel",r)},_cancel:function(){clearTimeout(this._holdTimeout),rt(document,"touchend touchcancel contextmenu",this._cancel,this),rt(document,"touchmove",this._onMove,this)},_onMove:function(r){var s=r.touches[0];this._newPos=new A(s.clientX,s.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(r,s){var d=new MouseEvent(r,{bubbles:!0,cancelable:!0,view:window,screenX:s.screenX,screenY:s.screenY,clientX:s.clientX,clientY:s.clientY});d._simulated=!0,s.target.dispatchEvent(d)}});Ze.addInitHook("addHandler","tapHold",Bf),Ze.mergeOptions({touchZoom:te.touch,bounceAtZoomLimits:!0});var Ff=er.extend({addHooks:function(){Re(this._map._container,"leaflet-touch-zoom"),Ae(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){gt(this._map._container,"leaflet-touch-zoom"),rt(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(r){var s=this._map;if(!(!r.touches||r.touches.length!==2||s._animatingZoom||this._zooming)){var d=s.mouseEventToContainerPoint(r.touches[0]),p=s.mouseEventToContainerPoint(r.touches[1]);this._centerPoint=s.getSize()._divideBy(2),this._startLatLng=s.containerPointToLatLng(this._centerPoint),s.options.touchZoom!=="center"&&(this._pinchStartLatLng=s.containerPointToLatLng(d.add(p)._divideBy(2))),this._startDist=d.distanceTo(p),this._startZoom=s.getZoom(),this._moved=!1,this._zooming=!0,s._stop(),Ae(document,"touchmove",this._onTouchMove,this),Ae(document,"touchend touchcancel",this._onTouchEnd,this),Lt(r)}},_onTouchMove:function(r){if(!(!r.touches||r.touches.length!==2||!this._zooming)){var s=this._map,d=s.mouseEventToContainerPoint(r.touches[0]),p=s.mouseEventToContainerPoint(r.touches[1]),y=d.distanceTo(p)/this._startDist;if(this._zoom=s.getScaleZoom(y,this._startZoom),!s.options.bounceAtZoomLimits&&(this._zoom<s.getMinZoom()&&y<1||this._zoom>s.getMaxZoom()&&y>1)&&(this._zoom=s._limitZoom(this._zoom)),s.options.touchZoom==="center"){if(this._center=this._startLatLng,y===1)return}else{var S=d._add(p)._divideBy(2)._subtract(this._centerPoint);if(y===1&&S.x===0&&S.y===0)return;this._center=s.unproject(s.project(this._pinchStartLatLng,this._zoom).subtract(S),this._zoom)}this._moved||(s._moveStart(!0,!1),this._moved=!0),U(this._animRequest);var O=c(s._move,s,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=W(O,this,!0),Lt(r)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,U(this._animRequest),rt(document,"touchmove",this._onTouchMove,this),rt(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});Ze.addInitHook("addHandler","touchZoom",Ff),Ze.BoxZoom=Tf,Ze.DoubleClickZoom=Af,Ze.Drag=If,Ze.Keyboard=Rf,Ze.ScrollWheelZoom=Of,Ze.TapHold=Bf,Ze.TouchZoom=Ff,n.Bounds=ce,n.Browser=te,n.CRS=ge,n.Canvas=zf,n.Circle=Sd,n.CircleMarker=el,n.Class=de,n.Control=Bn,n.DivIcon=Nf,n.DivOverlay=tr,n.DomEvent=z1,n.DomUtil=C1,n.Draggable=Qr,n.Evented=V,n.FeatureGroup=kr,n.GeoJSON=Nr,n.GridLayer=So,n.Handler=er,n.Icon=ga,n.ImageOverlay=al,n.LatLng=G,n.LatLngBounds=ue,n.Layer=Fn,n.LayerGroup=ma,n.LineUtil=W1,n.Map=Ze,n.Marker=Xs,n.Mixin=R1,n.Path=Jr,n.Point=A,n.PolyUtil=O1,n.Polygon=xa,n.Polyline=Sr,n.Popup=ol,n.PosAnimation=lf,n.Projection=H1,n.Rectangle=Mf,n.Renderer=Cr,n.SVG=Co,n.SVGOverlay=Sf,n.TileLayer=va,n.Tooltip=sl,n.Transformation=Ee,n.Util=se,n.VideoOverlay=kf,n.bind=c,n.bounds=ne,n.canvas=Ef,n.circle=Q1,n.circleMarker=Y1,n.control=_o,n.divIcon=o2,n.extend=o,n.featureGroup=V1,n.geoJSON=jf,n.geoJson=e2,n.gridLayer=s2,n.icon=G1,n.imageOverlay=t2,n.latLng=F,n.latLngBounds=$,n.layerGroup=q1,n.map=E1,n.marker=K1,n.point=q,n.polygon=X1,n.polyline=J1,n.popup=i2,n.rectangle=d2,n.setOptions=j,n.stamp=u,n.svg=Lf,n.svgOverlay=r2,n.tileLayer=Cf,n.tooltip=a2,n.transformation=Le,n.version=a,n.videoOverlay=n2;var h2=window.L;n.noConflict=function(){return window.L=h2,this},window.L=n})})(Oh,Oh.exports);var ca=Oh.exports;const na=Uh(ca);function qs(e,t,n){return Object.freeze({instance:e,context:t,container:n})}function nd(e,t){return t==null?function(a,o){const l=f.useRef();return l.current||(l.current=e(a,o)),l}:function(a,o){const l=f.useRef();l.current||(l.current=e(a,o));const c=f.useRef(a),{instance:h}=l.current;return f.useEffect(function(){c.current!==a&&(t(h,a,c.current),c.current=a)},[h,a,o]),l}}function HS(e,t){f.useEffect(function(){return(t.layerContainer??t.map).addLayer(e.instance),function(){var l;(l=t.layerContainer)==null||l.removeLayer(e.instance),t.map.removeLayer(e.instance)}},[t,e])}function f1(e){return function(n){const a=$s(),o=e(Qp(n,a),a);return d1(a.map,n.attribution),p1(o.current,n.eventHandlers),HS(o.current,a),o}}function ZS(e,t){const n=nd(e,t),a=f1(n);return h1(a)}function m1(e,t){const n=nd(e),a=WS(n,t);return FS(a)}function $S(e,t){const n=nd(e,t),a=f1(n);return DS(a)}function qS(e,t,n){const{opacity:a,zIndex:o}=t;a!=null&&a!==n.opacity&&e.setOpacity(a),o!=null&&o!==n.zIndex&&e.setZIndex(o)}function cr(){return $s().map}function g1(e){const t=cr();return f.useEffect(function(){return t.on(e),function(){t.off(e)}},[t,e]),t}const VS=nd(function({children:t,...n},a){const o=new ca.Control.Layers(void 0,void 0,n);return qs(o,Kp(a,{layersControl:o}))},function(t,n,a){n.collapsed!==a.collapsed&&(n.collapsed===!0?t.collapse():t.expand())}),GS=US(VS),Ba=h1(GS);function x1(e){return function(n){const a=$s(),o=f.useRef(n),[l,c]=f.useState(null),{layersControl:h,map:u}=a,m=f.useCallback(v=>{h!=null&&(o.current.checked&&u.addLayer(v),e(h,v,o.current.name),c(v))},[h,u]),g=f.useCallback(v=>{h==null||h.removeLayer(v),c(null)},[h]),x=f.useMemo(()=>Kp(a,{layerContainer:{addLayer:m,removeLayer:g}}),[a,m,g]);return f.useEffect(()=>{l!==null&&o.current!==n&&(n.checked===!0&&(o.current.checked==null||o.current.checked===!1)?u.addLayer(l):o.current.checked===!0&&(n.checked==null||n.checked===!1)&&u.removeLayer(l),o.current=n)}),n.children?Vi.createElement(Yp,{value:x},n.children):null}}Ba.BaseLayer=x1(function(t,n,a){t.addBaseLayer(n,a)});Ba.Overlay=x1(function(t,n,a){t.addOverlay(n,a)});function Bh(){return Bh=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Bh.apply(this,arguments)}function KS({bounds:e,boundsOptions:t,center:n,children:a,className:o,id:l,placeholder:c,style:h,whenReady:u,zoom:m,...g},x){const[v]=f.useState({className:o,id:l,style:h}),[b,_]=f.useState(null);f.useImperativeHandle(x,()=>(b==null?void 0:b.map)??null,[b]);const j=f.useCallback(N=>{if(N!==null&&b===null){const w=new ca.Map(N,g);n!=null&&m!=null?w.setView(n,m):e!=null&&w.fitBounds(e,t),u!=null&&w.whenReady(u),_(BS(w))}},[]);f.useEffect(()=>()=>{b==null||b.map.remove()},[b]);const P=b?Vi.createElement(Yp,{value:b},a):c??null;return Vi.createElement("div",Bh({},v,{ref:j}),P)}const ra=f.forwardRef(KS),Or=ZS(function({position:t,...n},a){const o=new ca.Marker(t,n);return qs(o,Kp(a,{overlayContainer:o}))},function(t,n,a){n.position!==a.position&&t.setLatLng(n.position),n.icon!=null&&n.icon!==a.icon&&t.setIcon(n.icon),n.zIndexOffset!=null&&n.zIndexOffset!==a.zIndexOffset&&t.setZIndexOffset(n.zIndexOffset),n.opacity!=null&&n.opacity!==a.opacity&&t.setOpacity(n.opacity),t.dragging!=null&&n.draggable!==a.draggable&&(n.draggable===!0?t.dragging.enable():t.dragging.disable())}),Br=m1(function(t,n){const a=new ca.Popup(t,n.overlayContainer);return qs(a,n)},function(t,n,{position:a},o){f.useEffect(function(){const{instance:c}=t;function h(m){m.popup===c&&(c.update(),o(!0))}function u(m){m.popup===c&&o(!1)}return n.map.on({popupopen:h,popupclose:u}),n.overlayContainer==null?(a!=null&&c.setLatLng(a),c.openOn(n.map)):n.overlayContainer.bindPopup(c),function(){var g;n.map.off({popupopen:h,popupclose:u}),(g=n.overlayContainer)==null||g.unbindPopup(),n.map.removeLayer(c)}},[t,n,o,a])}),uu=$S(function({url:t,...n},a){const o=new ca.TileLayer(t,Qp(n,a));return qs(o,a)},function(t,n,a){qS(t,n,a);const{url:o}=n;o!=null&&o!==a.url&&t.setUrl(o)}),YS=m1(function(t,n){const a=new ca.Tooltip(t,n.overlayContainer);return qs(a,n)},function(t,n,{position:a},o){f.useEffect(function(){const c=n.overlayContainer;if(c==null)return;const{instance:h}=t,u=g=>{g.tooltip===h&&(a!=null&&h.setLatLng(a),h.update(),o(!0))},m=g=>{g.tooltip===h&&o(!1)};return c.on({tooltipopen:u,tooltipclose:m}),c.bindTooltip(h),function(){c.off({tooltipopen:u,tooltipclose:m}),c._map!=null&&c.unbindTooltip()}},[t,n,o,a])});function ia(){return i.jsxs(Ba,{position:"topright",children:[i.jsx(Ba.BaseLayer,{checked:!0,name:"شوارع وتفاصيل (OSM)",children:i.jsx(uu,{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",maxZoom:19,maxNativeZoom:19})}),i.jsx(Ba.BaseLayer,{name:"طرق أوضح (Carto Voyager)",children:i.jsx(uu,{attribution:'© <a href="https://www.openstreetmap.org/copyright">OSM</a> © <a href="https://carto.com/attributions">CARTO</a>',url:"https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",subdomains:"abcd",maxZoom:20})}),i.jsx(Ba.BaseLayer,{name:"معالم وشبكة طرق (Esri)",children:i.jsx(uu,{attribution:"Tiles © Esri — Source: Esri, Maxar, Earthstar Geographics",url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",maxZoom:19})})]})}function aa(){const e=cr();return f.useEffect(()=>{const t=()=>{e.invalidateSize({animate:!1})};return window.addEventListener("resize",t),window.addEventListener("radar-map-invalidate",t),()=>{window.removeEventListener("resize",t),window.removeEventListener("radar-map-invalidate",t)}},[e]),null}const QS="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABSCAMAAAAhFXfZAAAC91BMVEVMaXEzeak2f7I4g7g3g7cua5gzeKg8hJo3grY4g7c3grU0gLI2frE0daAubJc2gbQwd6QzeKk2gLMtd5sxdKIua5g1frA2f7IydaM0e6w2fq41fK01eqo3grgubJgta5cxdKI1f7AydaQydaMxc6EubJgvbJkwcZ4ubZkwcJwubZgubJcydqUydKIxapgubJctbJcubZcubJcvbJYubJcvbZkubJctbJctbZcubJg2f7AubJcrbZcubJcubJcua5g3grY0fq8ubJcubJdEkdEwhsw6i88vhswuhcsuhMtBjMgthMsrg8srgss6is8qgcs8i9A9iMYtg8spgcoogMo7hcMngMonf8olfso4gr8kfck5iM8jfMk4iM8he8k1fro7itAgesk2hs8eecgzfLcofssdeMg0hc4cd8g2hcsxeLQbdsgZdcgxeLImfcszhM0vda4xgckzhM4xg84wf8Yxgs4udKsvfcQucqhUndROmdM1fK0wcZ8vb5w0eqpQm9MzeKhXoNVcpdYydKNWn9VZotVKltJFjsIwcJ1Rms9OlslLmtH///8+kc9epdYzd6dbo9VHkMM2f7FHmNBClM8ydqVcpNY9hro3gLM9hLczealQmcw3fa46f7A8gLMxc6I3eagyc6FIldJMl9JSnNRSntNNl9JPnNJFi75UnM9ZodVKksg8kM45jc09e6ZHltFBk883gbRBh7pDk9EwcaBzn784g7dKkcY2i81Om9M7j85Llc81is09g7Q4grY/j9A0eqxKmdFFltBEjcXf6fFImdBCiLxJl9FGlNFBi78yiMxVndEvbpo6js74+vx+psPP3+o/ks5HkcpGmNCjwdZCkNDM3ehYoNJEls+lxNkxh8xHks0+jdC1zd5Lg6r+/v/H2ufz9/o3jM3t8/edvdM/k89Th61OiLBSjbZklbaTt9BfptdjmL1AicBHj8hGk9FAgK1dkLNTjLRekrdClc/k7fM0icy0y9tgp9c4jc2NtM9Dlc8zicxeXZn3AAAAQ3RSTlMAHDdTb4yPA+LtnEQmC4L2EmHqB7XA0d0sr478x4/Yd5i1zOfyPkf1sLVq4Nh3FvjxopQ2/STNuFzUwFIwxKaejILpIBEV9wAABhVJREFUeF6s1NdyFEcYBeBeoQIhRAkLlRDGrhIgY3BJL8CVeKzuyXFzzjkn5ZxzzuScg3PO8cKzu70JkO0LfxdTU//pM9vTu7Xgf6KqOVTb9X7toRrVEfBf1HTVjZccrT/2by1VV928Yty9ZbVuucdz90frG8DBjl9pVApbOstvmMuvVgaNXSfAAd6pGxpy6yxf5ph43pS/4f3uoaGm2rdu72S9xzOvMymkZFq/ptDrk90mhW7e4zl7HLzhxGWPR20xmSxJ/VqldG5m9XhaVOA1DadsNh3Pu5L2N6QtPO/32JpqQBVVk20oy/Pi2s23WEvyfHbe1thadVQttvm7Llf65gGmXK67XtupyoM7HQhmXdLS8oGWJNeOJ3C5fG5XCEJnkez3/oFdsvgJ4l2ANZwhrJKk/7OSXa+3Vw2WJMlKnGkobouYk6T0TyX30klOUnTD9HJ5qpckL3EW/w4XF3Xd0FGywXUrstrclVsqz5Pd/sXFYyDnPdrLcQODmGOK47IZb4CmibmMn+MYRzFZ5jg33ZL/EJrWcszHmANy3ARBK/IXtciJy8VsitPSdE3uuHxzougojcUdr8/32atnz/ev3f/K5wtpxUTpcaI45zusVDpYtZi+jg0oU9b3x74h7+n9ABvYEZeKaVq0sh0AtLKsFtqNBdeT0MrSzwwlq9+x6xAO4tgOtSzbCjrNQQiNvQUbUEubvzBUeGw26yDCsRHCoLkTHDa7IdOLIThs/gHvChszh2CimE8peRs47cxANI0lYNB5y1DljpOF0IhzBDPOZnDOqYYbeGKECbPzWnXludPphw5c2YBq5zlwXphIbO4VDCZ0gnPfUO1TwZoYwAs2ExPCedAu9DAjfQUjzITQb3jNj0KG2Sgt6BHaQUdYzWz+XmBktOHwanXjaSTcwwziBcuMOtwBmqPrTOxFQR/DRKKPqyur0aiW6cULYsx6tBm0jXpR/AUWR6HRq9WVW6MRhIq5jLyjbaCTDCijyYJNpCajdyobP/eTw0iexBAKkJ3gA5KcQb2zBXsIBckn+xVv8jkZSaEFHE+jFEleAEfayRU0MouNoBmB/L50Ai/HSLIHxcrpCvnhSQAuakKp2C/YbCylJjXRVy/z3+Kv/RrNcCo+WUzlVEhzKffnTQnxeN9fWF88fiNCUdSTsaufaChKWInHeysygfpIqagoakW+vV20J8uyl6TyNKEZWV4oRSPyCkWpgOLSbkCObT8o2r6tlG58HQquf6O0v50tB7JM7F4EORd2dx/K0w/KHsVkLPaoYrwgP/y7krr3SSMA4zj+OBgmjYkxcdIJQyQRKgg2viX9Hddi9UBb29LrKR7CVVEEEXWojUkXNyfTNDE14W9gbHJNuhjDettN3ZvbOvdOqCD3Jp/9l+/wJE+9PkYGjx/fqkys3S2rMozM/o2106rfMUINo6hVqz+eu/hd1c4xTg0TAfy5kV+4UG6+IthHTU9woWmxuKNbTfuCSfovBCxq7EtHqvYL4Sm6F8GVxsSXHMQ07TOi1DKtZxjWaaIyi4CXWjxPccUw8WVbMYY5wxC1mzEyXMJWkllpRloi+Kkoq69sxBTlElF6aAxYUbjXNlhlDZilDnM4U5SlN5biRsRHnbx3mbeWjEh4mEyiuJDl5XcWVmX5GvNkFgLWZM5qwsop4/AWfLhU1cR7k1VVvcYCWRkOI6Xy5gmnphCYIkvzuNYzHzosq2oNk2RtSs8khfUOfHIDgR6ysYBaMpl4uEgk2U/oJTs9AaTSwma7dT69geAE2ZpEjUsn2ieJNHeKfrI3EcAGJ2ZaNgVuC8EBctCLc57P5u5led6IOBkIYkuQMrmmjChs4VkfOerHqSBkPzZlhe06RslZ3zMjk2sscqKwY0RcjKK+LWbzd7KiHhkncs/siFJ+V5eXxD34B8nVuJEpGJNmxN2gH3vSvp7J70tF+D1Ej8qUJD1TkErAND2GZwTFg/LubvmgiBG3SOvdlsqFQrkEzJCL1rstlnVFROixZoDDSuXQFHESwVGlcuQcMb/b42NgjLowh5MTDFE3vNB5qStRIErdCQEh6pLPR92anSUb/wAIhldAaDMpGgAAAABJRU5ErkJggg==",JS="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=",XS="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAQAAAACach9AAACMUlEQVR4Ae3ShY7jQBAE0Aoz/f9/HTMzhg1zrdKUrJbdx+Kd2nD8VNudfsL/Th///dyQN2TH6f3y/BGpC379rV+S+qqetBOxImNQXL8JCAr2V4iMQXHGNJxeCfZXhSRBcQMfvkOWUdtfzlLgAENmZDcmo2TVmt8OSM2eXxBp3DjHSMFutqS7SbmemzBiR+xpKCNUIRkdkkYxhAkyGoBvyQFEJEefwSmmvBfJuJ6aKqKWnAkvGZOaZXTUgFqYULWNSHUckZuR1HIIimUExutRxwzOLROIG4vKmCKQt364mIlhSyzAf1m9lHZHJZrlAOMMztRRiKimp/rpdJDc9Awry5xTZCte7FHtuS8wJgeYGrex28xNTd086Dik7vUMscQOa8y4DoGtCCSkAKlNwpgNtphjrC6MIHUkR6YWxxs6Sc5xqn222mmCRFzIt8lEdKx+ikCtg91qS2WpwVfBelJCiQJwvzixfI9cxZQWgiSJelKnwBElKYtDOb2MFbhmUigbReQBV0Cg4+qMXSxXSyGUn4UbF8l+7qdSGnTC0XLCmahIgUHLhLOhpVCtw4CzYXvLQWQbJNmxoCsOKAxSgBJno75avolkRw8iIAFcsdc02e9iyCd8tHwmeSSoKTowIgvscSGZUOA7PuCN5b2BX9mQM7S0wYhMNU74zgsPBj3HU7wguAfnxxjFQGBE6pwN+GjME9zHY7zGp8wVxMShYX9NXvEWD3HbwJf4giO4CFIQxXScH1/TM+04kkBiAAAAAElFTkSuQmCC";delete na.Icon.Default.prototype._getIconUrl;na.Icon.Default.mergeOptions({iconRetinaUrl:QS,iconUrl:JS,shadowUrl:XS});const e8={"ميني مول":"mini_mall","سوبر ماركت":"supermarket","خضار و فواكه":"greengrocer",ملحمة:"butcher",حلويات:"sweets",مطعم:"restaurant",كافيه:"cafe","مساحات عمل":"coworking",صيدلية:"pharmacy","أدوات منزلية":"household","أدوات كهربائية":"electric_tools","المولدات و الطاقة الشمسية":"solar_generators","المولدات والطاقة الشمسية":"solar_generators",إلكترونيات:"electronics",الكترونيات:"electronics","أدوات بناء":"hardware","ملابس نسائي":"clothing_women","ملابس رجالي":"clothing_men","ملابس أطفال":"clothing_kids",أحذية:"shoes",كوزماتكس:"cosmetics"};function Jp(e){return(e||"").trim().replace(/[\u0640\u200c-\u200f]/g,"").replace(/[أإآٱ]/g,"ا").replace(/ى/g,"ي").replace(/ة/g,"ه").replace(/\s+/g," ")}const $g=(()=>{const e=new Map;for(const[t,n]of Object.entries(e8))e.set(t.trim(),n),e.set(Jp(t),n);return e})();function qg(e){const t=(e||"").trim();return t&&($g.get(t)||$g.get(Jp(t)))||null}const Vg=[["greengrocer",/(خضار|خضروات|خضرة|فاكهه|فاكهة|فواكه|بلح|موز|برتقال|طماطم|بندوره|خضار\s*و\s*فواكه|فواكه\s*و\s*خضار)/i],["clothing_women",/(ملابس\s*نسائي|ملابس\s*نسائيه|ملابس\s*نساء|عبايه\s*نسائي|محل\s*نسائي)/i],["clothing_men",/(ملابس\s*رجالي|ملابس\s*رجاليه|ملابس\s*رجال|بدله\s*رجالي|بدلة\s*رجالي)/i],["clothing_kids",/(ملابس\s*أطفال|ملابس\s*اطفال|ملابس\s*ولادي|ملابس\s*البيبي)/i],["clothing",/(ملابس|ملبسات|أزياء|عبايه|عباية|تيشيرت|جينز|فستان|بناطيل|محل\s*ملابس|براند)/i],["shoes",/(احذيه|أحذية|شوز|كوتشي|كوتش|صندل|نعل|احذيه\s*رياضيه)/i],["solar_generators",/(طاقه\s*شمسيه|طاقة\s*شمسية|الطاقة\s*الشمسية|مولدات\s*و|مولدات.*شمس|شمس.*مولد|بانل\s*شمس|بانوهات\s*شمس|انفرتر|اينفرتر|نظام\s*شمسي|solar|photovoltaic|pv\s*panel)/i],["electric_tools",/(ادوات\s*كهربائيه|أدوات\s*كهربائية|معدات\s*كهربائيه|أدوات\s*الكهرباء)/i],["electronics",/(الكترونيات|إلكترونيات|الكترون|إلكترون|موبايل|جوال|هاتف|كمبيوتر|لابتوب|كميرا|كاميرا|شاحن|سماعات|كهربائ)/i],["furniture",/(اثاث|أثاث|مفروشات|كنب|سرير|خزائن|مكاتب)/i],["hardware",/(عدد|عدّات|ادوات\s*يدويه|أدوات\s*يدوية|ادوات\s*بناء|أدوات\s*بناء|مواد\s*بناء|سباكه|كهربائي|نجار|حداد|قرميد|اسمنت|إسمنت|دهان|طلاء|بويه)/i],["cosmetics",/(مكياج|عطور|صيدلانيه\s*تجميل|تجميل|عنايه|عناية|كريمات|مستحضرات|كوزماتكس|كوسمتيك|كوسماتكس)/i],["pharmacy",/(صيدليه|صيدلية|دواء|ادويه|أدوية|روشته|روشتة)/i],["butcher",/(ملحمه|ملحمة|جزار|جزاره|لحوم|لحمه|لحمة|دواجن|مجمدات\s*لحوم)/i],["fish",/(سمك|بحري|بحريات|جمبري|شريده|شريدة|سوشي)/i],["bakery",/(مخبز|مخبوزات|معجنات|فطاير|كيك|حلويات\s*شرقيه|كعك)/i],["dairy",/(البان|ألبان|الألبان|حليب|اجبان|أجبان|اجبنه|أجبان|زبادي|لبنه)/i],["cafe",/(قهوه|قهوة|كافيه|كافية|مقهى|نسكافيه|شاي|bubble)/i],["restaurant",/(مطعم|مطاعم|شورما|شاورما|فلافل|فلافيل|برغر|بيتزا|وجبات|مأكولات)/i],["sweets",/(حلويات|شوكولاته|شوكولاتة|بسكويت|سكريات|حلاوه|حلاوة)/i],["spices",/(بهارات|توابل|عطاره|عطارة|زعتر|زارة\s*بهارات)/i],["flowers",/(ورد|ازهار|نباتات|نبات|ياسمين|بائع\s*ورد|محل\s*ورد)/i],["books",/(كتب|قرطاسيه|قرطاسية|أدوات\s*مدرسيه|أدوات\s*مدرسية|مكتبه|مكتبة)/i],["toys",/(العاب|ألعاب|العاب\s*اطفال|ألعاب\s*أطفال|دمي|دمى)/i],["sports",/(رياضه|رياضية|رياضي|جم|جيم|معدات\s*رياضيه|معدات\s*رياضية|كرة)/i],["pets",/(حيوانات\s*اليفه|حيوانات\s*أليفة|قطط|كلاب|طيور|اسماك\s*زينه|أحواض)/i],["jewelry",/(ذهب|فضه|مجوهرات|اكسسوار|إكسسوار|ساعات\s*ذهب)/i],["auto",/(سيارات|سياره|بطاريات|زيوت|زيت\s*سيارات|قطع\s*غيار|ميكانيك)/i],["cleaning",/(منظفات|تنظيف|مكانس|مساحات|كلور|صابون\s*غسيل)/i],["gifts",/(هدايا|تحف|ديكورات|سفر\s*مائده|سفرة)/i],["household",/(ادوات\s*منزليه|أدوات\s*منزلية|بلاستيك|تخزين|اواني|أواني|طناجر)/i],["coworking",/(مساحات\s*عمل|كوركنج|coworking|مكتب\s*مشترك|شركه\s*ناشئه)/i],["mini_mall",/(ميني\s*مول|مول\s*صغير|mini\s*mall)/i],["supermarket",/(سوبر|سوبير|ماركت|بقال|بقالة|هايبر|سوق\s*مركزي|تموين|جمله|جملة)/i]],Fh={greengrocer:{emoji:"🥬",bg:"#43a047"},clothing:{emoji:"👕",bg:"#3949ab"},clothing_women:{emoji:"👗",bg:"#c2185b"},clothing_men:{emoji:"👔",bg:"#283593"},clothing_kids:{emoji:"🧒",bg:"#ef6c00"},shoes:{emoji:"👟",bg:"#6d4c41"},electronics:{emoji:"📱",bg:"#1e88e5"},furniture:{emoji:"🪑",bg:"#8d6e63"},hardware:{emoji:"🔨",bg:"#78909c"},cosmetics:{emoji:"💄",bg:"#ec407a"},pharmacy:{emoji:"💊",bg:"#1565c0"},butcher:{emoji:"🥩",bg:"#c62828"},fish:{emoji:"🐟",bg:"#0277bd"},bakery:{emoji:"🥐",bg:"#ef6c00"},dairy:{emoji:"🥛",bg:"#5c6bc0"},cafe:{emoji:"☕",bg:"#4e342e"},restaurant:{emoji:"🍴",bg:"#d84315"},sweets:{emoji:"🍰",bg:"#ad1457"},spices:{emoji:"🌶",bg:"#e65100"},flowers:{emoji:"💐",bg:"#2e7d32"},books:{emoji:"📚",bg:"#5e35b1"},toys:{emoji:"🧸",bg:"#f9a825"},sports:{emoji:"⚽",bg:"#00897b"},pets:{emoji:"🐾",bg:"#6a1b9a"},jewelry:{emoji:"💍",bg:"#ffd54f"},auto:{emoji:"🚗",bg:"#37474f"},cleaning:{emoji:"🧹",bg:"#26a69a"},gifts:{emoji:"🎁",bg:"#c2185b"},household:{emoji:"🏠",bg:"#7e57c2"},supermarket:{emoji:"🛒",bg:"#2e7d32"},mini_mall:{emoji:"🏬",bg:"#6a1b9a"},coworking:{emoji:"💼",bg:"#455a64"},solar_generators:{emoji:"☀️",bg:"#f57c00"},electric_tools:{emoji:"🔌",bg:"#607d8b"},generic:{emoji:"🏪",bg:"#fbc02d"}};function y1(e){const t=(e||"").trim();if(!t)return null;const n=qg(t);if(n)return n;for(const[o,l]of Vg)if(l.test(t))return o;const a=Jp(t);if(a&&a!==t){const o=qg(a);if(o)return o;for(const[l,c]of Vg)if(c.test(a))return l}return null}function t8(e,t){if(!(t!=null&&t.length)||(e==null?void 0:e.category)==null)return null;const n=Number(e.category);if(!Number.isFinite(n))return null;const a=t.find(o=>Number(o.id)===n);return(a==null?void 0:a.name)||null}function v1(e,t){const n=new Set,a=[],o=l=>{const c=l&&String(l).trim()||"";c&&!n.has(c)&&(n.add(c),a.push(c))};o(e==null?void 0:e.category_name),o(t8(e,t)),o(e==null?void 0:e.store_name),o(e==null?void 0:e.description);for(const l of a){const c=y1(l);if(c)return c}return"generic"}function rd(e,t){const n=e==null?void 0:e.logo,a=e==null?void 0:e.category_image;if(n)return{type:"image",url:n};if(a)return{type:"image",url:a};const o=v1(e,t);return{type:"emoji",...Fh[o]}}function n8(e){const t=v1({category_name:e,category:null,store_name:"",description:""},null);return Fh[t]||Fh.generic}function Vs(e){var l,c;const t=(e==null?void 0:e.latitude)??(e==null?void 0:e.lat)??(e==null?void 0:e.location_lat)??((l=e==null?void 0:e.location)==null?void 0:l.lat),n=(e==null?void 0:e.longitude)??(e==null?void 0:e.lng)??(e==null?void 0:e.location_lng)??((c=e==null?void 0:e.location)==null?void 0:c.lng),a=Number(t),o=Number(n);return!Number.isFinite(a)||!Number.isFinite(o)||Math.abs(a)<.25&&Math.abs(o)<.25?null:[a,o]}function r8(e){return Vs(e)!=null}function i8(e){return e.type==="image"?na.icon({iconUrl:e.url,iconSize:[46,46],iconAnchor:[23,46],popupAnchor:[0,-42],className:"store-map-pin-img"}):na.divIcon({className:"store-map-pin-divicon",html:`<div class="store-map-pin-emoji-inner" style="background:${e.bg}">${e.emoji}</div>`,iconSize:[46,46],iconAnchor:[23,46],popupAnchor:[0,-40]})}const Gg=[31.5,34.4],a8=13;function o8({store:e}){const t=(e==null?void 0:e.rating_average)!=null?Number(e.rating_average):null,n=(e==null?void 0:e.rating_count)!=null?Number(e.rating_count):0,a=t!=null&&Number.isFinite(t)?t:null;if(!n||a==null)return i.jsx("div",{style:{fontSize:"0.82rem",color:"#666",marginBottom:8,lineHeight:1.4},children:"لا يوجد تقييم بعد"});const o=Math.min(5,Math.max(0,Math.round(a)));return i.jsxs("div",{dir:"ltr",style:{display:"flex",alignItems:"center",gap:8,marginBottom:8,flexWrap:"wrap"},children:[i.jsx("span",{style:{display:"inline-flex",gap:2,alignItems:"center"},"aria-hidden":!0,children:[1,2,3,4,5].map(l=>i.jsx(Ph,{size:16,color:"#f5c000",fill:l<=o?"#f5c000":"none",strokeWidth:l<=o?0:1.5},l))}),i.jsxs("span",{style:{fontSize:"0.84rem",color:"#333",fontWeight:800},children:[a.toFixed(1),i.jsxs("span",{style:{fontWeight:600,color:"#666"},children:[" · ",n," تقييم"]})]})]})}function s8(e,t,n,a,o,l){const c=(e==null?void 0:e.length)===2?`${Number(e[0]).toFixed(5)},${Number(e[1]).toFixed(5)}`:"none",h=(t||[]).map(g=>{const x=Number(g.latitude),v=Number(g.longitude);return!Number.isFinite(x)||!Number.isFinite(v)?null:`s:${g.id}:${x.toFixed(5)}:${v.toFixed(5)}`}).filter(Boolean),u=(n||[]).map(g=>{const x=Vs(g);return x?`c:${g.id}:${x[0].toFixed(5)}:${x[1].toFixed(5)}`:null}).filter(Boolean),m=l==="community"?u:l==="both"?[...h,...u]:h;return`${c}#${m.sort().join("|")}#${a}#${o?"R":"U"}#${l||"stores"}`}function l8({userLocation:e,stores:t,communityPoints:n,locationFocusNonce:a,focusOnResults:o,focusKind:l,autoFitStoresWhenNoUserLocation:c=!0}){const h=cr(),u=f.useRef("");return f.useEffect(()=>{const m=s8(e,t,n,a,o,l);if(m===u.current)return;u.current=m;const g=(t||[]).map(b=>{const _=Number(b.latitude),j=Number(b.longitude);return!Number.isFinite(_)||!Number.isFinite(j)?null:[_,j]}).filter(Boolean),x=(n||[]).map(b=>Vs(b)).filter(Boolean),v=l==="community"?x:l==="both"?[...g,...x]:g;if(o){if(v.length===0){if((e==null?void 0:e.length)===2){const b=Number(e[0]),_=Number(e[1]);Number.isFinite(b)&&Number.isFinite(_)&&h.flyTo([b,_],17,{duration:.55,animate:!0})}return}if(v.length===1){h.setView(v[0],17,{animate:!0});return}h.fitBounds(na.latLngBounds(v),{padding:[40,40],maxZoom:17,animate:!0});return}if(c&&g.length!==0){if(g.length===1){h.setView(g[0],15,{animate:!0});return}h.fitBounds(na.latLngBounds(g),{padding:[40,40],maxZoom:17,animate:!0})}},[h,e,t,n,a,o,l,c]),null}function oo({onPick:e}){return g1({click(t){typeof e=="function"&&e(t.latlng.lat,t.latlng.lng)}}),null}function c8({userLocation:e,locationFocusNonce:t}){const n=cr(),a=f.useRef(0);return f.useEffect(()=>{if(!e||e.length!==2){a.current=t;return}if(t<=a.current)return;const o=Number(e[0]),l=Number(e[1]);!Number.isFinite(o)||!Number.isFinite(l)||(n.flyTo([o,l],18,{duration:.85,animate:!0}),a.current=t)},[n,e,t]),null}function rr(e){e.stopPropagation()}function d8({gpsFabAlignStart:e,gpsLocating:t,gpsLabel:n,gpsLocatingLabel:a,clearLabel:o="إلغاء موقعي",onGpsClick:l,onClearUserLocation:c,showClearUserLocation:h}){const m=cr().getContainer(),g=!!(h&&typeof c=="function");return uo.createPortal(i.jsxs("div",{className:`shopper-map-gps-fab-stack${e?" shopper-map-gps-fab-stack--start":""}`,children:[g?i.jsxs("button",{type:"button",className:"shopper-map-gps-fab shopper-map-gps-fab--clear",onPointerDown:rr,onPointerUp:rr,onTouchStart:rr,onMouseDown:rr,onClick:x=>{rr(x),c()},title:"إزالة دبوس موقعك من الخريطة","aria-label":"إلغاء موقعي",children:[i.jsx(Mj,{size:18,strokeWidth:2.25,"aria-hidden":!0,className:"shopper-map-gps-fab__ico"}),i.jsx("span",{className:"shopper-map-gps-fab__txt",children:o})]}):null,i.jsxs("button",{type:"button",className:"shopper-map-gps-fab",onPointerDown:rr,onPointerUp:rr,onTouchStart:rr,onMouseDown:rr,onClick:x=>{rr(x),!t&&typeof l=="function"&&l()},disabled:t,title:"تحديد موقعي الحالي على الخريطة والتمركز عليه","aria-label":t?"جاري تحديد الموقع":"موقعي الحالي",children:[i.jsx(Ln,{size:20,strokeWidth:2.25,"aria-hidden":!0,className:"shopper-map-gps-fab__ico"}),i.jsx("span",{className:"shopper-map-gps-fab__txt",children:t?a:n})]})]}),m)}function u8({active:e}){const t=cr();return f.useEffect(()=>{const n=t.getContainer(),a="leaflet-pick-cursor";return e?n.classList.add(a):n.classList.remove(a),()=>n.classList.remove(a)},[t,e]),null}const h8={medical:"🏥",education:"📚",food:"🍲",water:"💧",institution:"🤝"};function p8(e){const t=h8[e]||"📍";return na.divIcon({className:"community-map-pin-wrap",html:`<div class="community-map-pin-inner community-map-pin-inner--pin"><span class="community-pin-emoji">${t}</span></div>`,iconSize:[38,38],iconAnchor:[19,38],popupAnchor:[0,-34]})}const f8=({stores:e,communityPoints:t=[],userLocation:n,locationFocusNonce:a=0,onManualLocationPick:o,categories:l,showGpsOnMap:c=!1,gpsLocating:h=!1,onGpsClick:u,onClearUserLocation:m,mapHeight:g="clamp(260px, 52dvh, 420px)",gpsLabel:x="موقعي الحالي",gpsLocatingLabel:v="جاري الموقع… (حتى ~20ث)",wrapperClassName:b="",gpsFabAlignStart:_=!1,gpsInline:j=!1,topControls:P=null,focusOnResults:N=!1,focusKind:w="stores",focusStoreId:z=null,focusCommunityPointId:C=null,onExpandClick:I,isFullscreen:E=!1,autoFitStoresWhenNoUserLocation:k=!0})=>{const B=f.useMemo(()=>{if((n==null?void 0:n.length)===2)return n;if(!k)return Gg;const V=(e||[]).find(A=>Number.isFinite(Number(A.latitude))&&Number.isFinite(Number(A.longitude)));return V?[Number(V.latitude),Number(V.longitude)]:Gg},[e,n,k]),M=f.useMemo(()=>{const V=new Map;for(const A of e||[]){const ie=A==null?void 0:A.id;if(ie==null)continue;const q=rd(A,l);V.set(String(ie),i8(q))}return V},[e,l]),[T,W]=f.useState(!1),U=typeof o=="function",se=f.useRef({}),de=f.useRef({}),he=E||typeof g=="string"&&(g.includes("100dvh")||g.includes("100vh")||g==="100%"),le=(V,A)=>{typeof o=="function"&&o(V,A),W(!1)};return i.jsxs("div",{className:`radar-map card radar-map--manual-wrap radar-map--market${T?" radar-map--pick-active":""}${he?" radar-map--fill":""}${E?" radar-map--fullscreen":""}${b?` ${b}`:""}`,style:{padding:0,overflow:"hidden",position:E?"absolute":"relative",...E?{inset:0,width:"100%",height:"100%",display:"flex",flexDirection:"column"}:he?{flex:1,minHeight:0,display:"flex",flexDirection:"column"}:{}},children:[U?i.jsx("div",{className:"shopper-map-manual-bar",role:"region","aria-label":"تحديد الموقع يدوياً",children:T?i.jsxs(i.Fragment,{children:[i.jsx("span",{className:"shopper-map-manual-hint",children:"انقر على الخريطة لتثبيت موقعك"}),i.jsx("button",{type:"button",className:"shopper-map-manual-btn shopper-map-manual-btn-cancel",onClick:()=>W(!1),children:"إلغاء"})]}):i.jsxs(i.Fragment,{children:[i.jsx("button",{type:"button",className:"shopper-map-manual-btn shopper-map-manual-btn-primary",onClick:()=>W(!0),children:"تحديد موقعي يدوياً على الخريطة"}),j&&c&&typeof u=="function"?i.jsxs("button",{type:"button",className:"shopper-map-gps-inline",onClick:u,disabled:h,title:"تحديد موقعي الحالي على الخريطة","aria-label":h?"جاري تحديد الموقع":"موقعي الحالي",children:[i.jsx(Ln,{size:18,strokeWidth:2.25,"aria-hidden":!0}),i.jsx("span",{children:h?v:x})]}):null]})}):null,P?i.jsx("div",{className:"shopper-map-topbar",role:"region","aria-label":"بحث وفلاتر الخريطة",children:P}):null,typeof I=="function"?i.jsx("button",{type:"button",className:"shopper-map-expand-btn",onClick:I,title:"تكبير الخريطة","aria-label":"تكبير الخريطة",children:i.jsx(fj,{size:20,strokeWidth:2.25,"aria-hidden":!0})}):null,i.jsxs(ra,{center:B,zoom:a8,minZoom:10,maxZoom:19,scrollWheelZoom:!0,style:he?{flex:1,minHeight:E?0:220,width:"100%"}:{height:g,width:"100%"},children:[i.jsx(ia,{}),i.jsx(aa,{}),i.jsx(u8,{active:T}),i.jsx(l8,{userLocation:n,stores:e,communityPoints:t,locationFocusNonce:a,focusOnResults:N,focusKind:w,autoFitStoresWhenNoUserLocation:k}),i.jsx(c8,{userLocation:n,locationFocusNonce:a}),z!=null?i.jsx(m8,{storeId:z,markerRefs:se}):null,C!=null?i.jsx(g8,{pointId:C,markerRefs:de}):null,U&&T?i.jsx(oo,{onPick:le}):null,(n==null?void 0:n.length)===2&&i.jsx(Or,{position:n,children:i.jsx(Br,{children:i.jsxs("div",{style:{maxWidth:220},children:[i.jsx("div",{style:{fontWeight:800,marginBottom:6},children:"موقعك للمقارنة بالمتاجر"}),i.jsx("div",{style:{fontSize:"0.88rem",lineHeight:1.45,color:"#444"},children:"استخدم «تحديد موقعي يدوياً على الخريطة» ثم انقر المكان، أو زر «موقعي الحالي» على حافة الخريطة للـ GPS."})]})})}),(t||[]).map(V=>{const A=Vs(V);if(!A)return null;const ie=V.category_slug||"",q=p8(ie),ce=ie==="water"&&V.water_is_potable!=null?V.water_is_potable?"مياه صالحة للشرب":"مياه غير صالحة للشرب":null;return i.jsxs(Or,{position:A,icon:q,ref:ne=>{const ue=(V==null?void 0:V.id)!=null?String(V.id):"";ue&&ne&&(de.current[ue]=ne)},children:[i.jsx(YS,{direction:"top",offset:[0,-34],opacity:.95,sticky:!0,children:i.jsxs("div",{style:{maxWidth:260},children:[i.jsx("div",{style:{fontWeight:900,marginBottom:4},children:V.title}),V.detail_description?i.jsxs("div",{style:{fontSize:"0.85rem",lineHeight:1.45,color:"#333"},children:[String(V.detail_description).slice(0,180),String(V.detail_description).length>180?"…":""]}):null]})}),i.jsx(Br,{children:i.jsxs("div",{style:{minWidth:200,maxWidth:280},children:[i.jsx("div",{style:{fontWeight:900,marginBottom:6},children:V.title}),i.jsx("div",{style:{fontSize:"0.82rem",color:"#555",marginBottom:6},children:V.category_name||"خدمة مجتمعية"}),ce?i.jsx("div",{style:{fontSize:"0.8rem",fontWeight:700,marginBottom:6},children:ce}):null,V.institution_scope_label&&V.institution_scope?i.jsxs("div",{style:{fontSize:"0.8rem",marginBottom:6},children:["النطاق: ",V.institution_scope_label]}):null,i.jsx("div",{style:{fontSize:"0.85rem",lineHeight:1.45,marginBottom:8},children:V.detail_description}),i.jsx("div",{style:{fontSize:"0.8rem",color:"#666"},children:V.address_text})]})})]},`c-${V.id}`)}),(e||[]).map(V=>{const A=Number(V.latitude),ie=Number(V.longitude);if(!Number.isFinite(A)||!Number.isFinite(ie))return null;const q=V.id!=null?String(V.id):"",ce=q?M.get(q):void 0;return i.jsx(Or,{position:[A,ie],icon:ce,ref:ne=>{q&&ne&&(se.current[q]=ne)},children:i.jsx(Br,{children:i.jsxs("div",{style:{minWidth:180},children:[i.jsx("div",{style:{fontWeight:900,marginBottom:4},children:V.store_name}),i.jsx(o8,{store:V}),i.jsx("div",{style:{color:"var(--text-secondary)",marginBottom:8},children:V.category_name||"متجر"}),i.jsx("div",{style:{color:"var(--text-secondary)",marginBottom:10},children:V.description||"لا يوجد وصف"}),i.jsx(ke,{to:`/stores/${V.id}`,style:{display:"inline-block",fontWeight:800,color:"var(--secondary)",background:"var(--primary)",padding:"8px 12px",borderRadius:10,textDecoration:"none",fontSize:"0.9rem"},children:"عرض المتجر"})]})})},V.id)}),!j&&c&&typeof u=="function"?i.jsx(d8,{gpsFabAlignStart:_,gpsLocating:h,gpsLabel:x,gpsLocatingLabel:v,onGpsClick:u,onClearUserLocation:m,showClearUserLocation:(n==null?void 0:n.length)===2}):null]})]})};function m8({storeId:e,markerRefs:t}){const n=cr();return f.useEffect(()=>{const a=e!=null?String(e):"";if(!a)return;let o=!1,l=0;const c=()=>{var u,m;if(o)return;const h=(u=t==null?void 0:t.current)==null?void 0:u[a];if(h){try{h.openPopup();const g=(m=h.getLatLng)==null?void 0:m.call(h);g&&n.panTo(g,{animate:!0})}catch{}return}l+=1,l<14&&window.setTimeout(c,100)};return window.setTimeout(c,60),()=>{o=!0}},[e,t,n]),null}function g8({pointId:e,markerRefs:t}){const n=cr();return f.useEffect(()=>{const a=e!=null?String(e):"";if(!a)return;let o=!1,l=0;const c=()=>{var u,m;if(o)return;const h=(u=t==null?void 0:t.current)==null?void 0:u[a];if(h){try{h.openPopup();const g=(m=h.getLatLng)==null?void 0:m.call(h);g&&n.panTo(g,{animate:!0})}catch{}return}l+=1,l<14&&window.setTimeout(c,100)};return window.setTimeout(c,60),()=>{o=!0}},[e,t,n]),null}function Es({position:e,zoom:t=17}){const n=cr(),a=f.useRef("");return f.useEffect(()=>{if(!e||e.length!==2)return;const o=Number(e[0]),l=Number(e[1]);if(!Number.isFinite(o)||!Number.isFinite(l))return;const c=`${o.toFixed(7)},${l.toFixed(7)}`;c!==a.current&&(a.current=c,n.flyTo([o,l],t,{duration:.55,animate:!0}))},[n,e,t]),null}const x8=[31.5,34.4],y8=["ميني مول","سوبر ماركت","خضار و فواكه","ملحمة","حلويات","مطعم","كافيه","مساحات عمل","صيدلية","أدوات منزلية","أدوات كهربائية","إلكترونيات","أدوات بناء","__CLOTHES__","أحذية","كوزماتكس"],v8=[{value:"نسائي",label:"ملابس نسائي"},{value:"رجالي",label:"ملابس رجالي"},{value:"أطفال",label:"ملابس أطفال"}];function b8(e,t,n){const a=o=>{var l;return((l=e.find(c=>c.name===o))==null?void 0:l.id)??null};if(t==="__CLOTHES__"){const l={نسائي:"ملابس نسائي",رجالي:"ملابس رجالي",أطفال:"ملابس أطفال"}[n];return l?a(l):null}return t?a(t):null}const w8=()=>{const[e,t]=f.useState("shopper"),[n,a]=f.useState(!1),[o,l]=f.useState(""),[c,h]=f.useState(""),[u,m]=f.useState(""),[g,x]=f.useState(""),[v,b]=f.useState("نسائي"),[_,j]=f.useState(""),[P,N]=f.useState(null),[w,z]=f.useState(!1),[C,I]=f.useState(!1),[E,k]=f.useState([]),[B,M]=f.useState(!1),[T,W]=f.useState(""),[U,se]=f.useState(!1),[de,he]=f.useState(!1),le=Nt(),{showAlert:V}=qe(),A=f.useMemo(()=>P&&P.length===2?P:x8,[P]);f.useEffect(()=>{const F=l1();F.rememberMe&&(l(F.username),h(F.password),he(!0))},[]),f.useEffect(()=>{let F=!1;return(async()=>{M(!0);try{const ge=await la();F||k(Array.isArray(ge)?ge:[])}catch{F||k([])}finally{F||M(!1)}})(),()=>{F=!0}},[]);const ie=f.useMemo(()=>b8(E,g,v),[E,g,v]),q=F=>{t(F),F==="shopper"&&(m(""),x(""),b("نسائي"),j(""),N(null),z(!1))},ce=async()=>{if(!navigator.geolocation){await V("المتصفح لا يدعم تحديد الموقع.","تنبيه");return}I(!0);try{const F=await Hs({maxWaitMs:18e3,goodEnoughM:150});N([F.latitude,F.longitude])}catch{await V("تعذر تحديد موقعك الحالي. جرّب النقر على الخريطة يدوياً.","الموقع")}finally{I(!1)}},ne={width:"100%",padding:"0.85rem 1rem",borderRadius:"var(--radius-md)",border:"1.5px solid var(--border)",background:"var(--surface)",fontSize:"0.95rem",textAlign:"right",marginBottom:"1.2rem"},ue=async F=>{if(F.preventDefault(),se(!0),W(""),e==="merchant"){if(!u.trim()){W("أدخل اسم المتجر."),se(!1);return}if(!g){W("اختر نوع المتجر (القسم)."),se(!1);return}if(!ie){W(B||E.length===0?"تعذر تحميل الأقسام. تأكد من تشغيل الخادم وتشغيل الترحيلات (migrate).":"القسم المحدد غير متوفر في النظام. حدّث الصفحة أو راجع الأدمن."),se(!1);return}if(!_.trim()){W("أدخل عنوان المتجر أو وصف الموقع نصاً (يظهر لاحقاً في صفحة المتجر)."),se(!1);return}}try{const ge={username:o.trim(),user_type:e,password:c};e==="merchant"&&(ge.store_name=u.trim(),ge.category=ie,ge.location_address=_.trim(),P&&P.length===2&&(ge.store_latitude=P[0],ge.store_longitude=P[1]));const _e=await g4(ge);e==="merchant"&&(_e!=null&&_e.merchant_subscription_notice)&&await V(_e.merchant_subscription_notice,"ملاحظة الاشتراك"),await $v(o.trim(),c),c1({username:o.trim(),password:c,rememberMe:de}),await V("تم إنشاء الحساب وتسجيل الدخول بنجاح.","تم"),le("/",{replace:!0})}catch(ge){const _e=$e(ge,"تعذر إنشاء الحساب. حاول مرة أخرى.");W(_e),await V(_e,"فشل"),console.error(ge)}finally{se(!1)}},$=async()=>{localStorage.removeItem("token"),localStorage.removeItem("refresh"),localStorage.removeItem("user_type"),localStorage.removeItem("user_name"),localStorage.removeItem("is_verified"),localStorage.removeItem("is_primary_admin"),localStorage.setItem("isGuest","true"),le("/",{replace:!0}),await V("أنت الآن في وضع الزائر.","تم")},G=e==="merchant"?480:420;return i.jsx(Be,{children:i.jsxs("div",{className:"auth-page",children:[i.jsxs("div",{className:"auth-card",style:{maxWidth:G},children:[i.jsx("img",{className:"auth-logo",src:"/logo.png",alt:"رادار"}),i.jsx("h1",{className:"auth-title",style:{marginBottom:"6px"},children:"إنشاء حساب"}),i.jsx("p",{className:"auth-sub",style:{marginBottom:"1rem"},children:"انضم كمتسوق أو افتح متجرك على رادار."}),i.jsxs("div",{className:"type-toggle",role:"tablist","aria-label":"نوع الحساب",children:[i.jsxs("button",{type:"button",role:"tab","aria-selected":e==="shopper",className:`type-item ${e==="shopper"?"active":""}`,onClick:()=>q("shopper"),children:[i.jsx("span",{className:"type-item__icon","aria-hidden":!0,children:i.jsx(Sc,{size:22,strokeWidth:2})}),i.jsx("span",{className:"type-item__label",children:"متسوق"})]}),i.jsxs("button",{type:"button",role:"tab","aria-selected":e==="merchant",className:`type-item ${e==="merchant"?"active":""}`,onClick:()=>q("merchant"),children:[i.jsx("span",{className:"type-item__icon","aria-hidden":!0,children:i.jsx(Gt,{size:22,strokeWidth:2})}),i.jsx("span",{className:"type-item__label",children:"تاجر"})]})]}),T&&i.jsx("p",{style:{color:"#c62828",fontSize:"0.85rem",marginBottom:"12px",fontWeight:700},children:T}),i.jsxs("form",{onSubmit:ue,children:[i.jsx(Dt,{icon:i.jsx(Sc,{size:18}),placeholder:"اسم المستخدم",value:o,onChange:F=>l(F.target.value),required:!0}),i.jsxs("div",{className:"auth-password-field",children:[i.jsx(Dt,{icon:i.jsx(pv,{size:18,strokeWidth:2}),type:n?"text":"password",placeholder:"كلمة المرور",value:c,onChange:F=>h(F.target.value),required:!0}),i.jsx("button",{type:"button",className:"auth-password-eye-btn",onClick:()=>a(!n),"aria-label":n?"إخفاء كلمة المرور":"إظهار كلمة المرور",title:n?"إخفاء":"إظهار",children:n?i.jsx(ev,{size:18,strokeWidth:2,"aria-hidden":!0}):i.jsx(tv,{size:18,strokeWidth:2,"aria-hidden":!0})})]}),i.jsxs("label",{className:"auth-remember",title:"حفظ اسم المستخدم وكلمة المرور محلياً على هذا الجهاز بعد إنشاء الحساب",children:[i.jsx("span",{className:"auth-remember__txt",children:"تذكرني"}),i.jsx("input",{type:"checkbox",checked:de,onChange:F=>he(F.target.checked)})]}),e==="merchant"&&i.jsxs(i.Fragment,{children:[i.jsx(Dt,{icon:i.jsx(Gt,{size:18}),placeholder:"اسم المتجر",value:u,onChange:F=>m(F.target.value),required:!0}),i.jsxs("div",{style:{marginBottom:10,textAlign:"right",display:"flex",alignItems:"center",gap:8,fontWeight:800,fontSize:"0.9rem",justifyContent:"flex-end"},children:[i.jsx(Ln,{size:18,"aria-hidden":!0}),"عنوان / موقع المتجر (نص تفصيلي)"]}),i.jsx("textarea",{value:_,onChange:F=>j(F.target.value),placeholder:"مثال: غزة — الرمال، بجوار… / شارع… (يُعرض للمتسوّقين بجانب وصف المتجر؛ منفصل عن النقطة على الخريطة)",required:!0,rows:3,style:{width:"100%",padding:"0.85rem 1rem",borderRadius:"var(--radius-md)",border:"1.5px solid var(--border)",background:"var(--surface)",marginBottom:"1.2rem",fontFamily:"inherit",fontSize:"0.95rem",resize:"vertical"}}),i.jsxs("div",{className:"register-merchant-map",children:[i.jsxs("div",{className:"register-merchant-map__head",children:[i.jsx(Ln,{size:18,"aria-hidden":!0}),i.jsx("span",{className:"register-merchant-map__title",children:"موقع المتجر على الخريطة"}),i.jsx("span",{className:"register-merchant-map__optional",children:"اختياري"})]}),i.jsx("p",{className:"register-merchant-map__hint",children:"انقر على الخريطة لوضع دبوس المتجر، أو استخدم «موقعي الحالي»، أو تجاوز الخطوة وحدّث الموقع لاحقاً من إعدادات المتجر."}),i.jsxs("div",{className:"register-merchant-map__toolbar",children:[i.jsx("button",{type:"button",className:"register-merchant-map__mini-btn",disabled:C,onClick:ce,children:C?"جاري الموقع…":"موقعي الحالي"}),P?i.jsx("button",{type:"button",className:"register-merchant-map__mini-btn register-merchant-map__mini-btn--ghost",onClick:()=>N(null),children:"إزالة النقطة"}):null,P?i.jsxs("span",{className:"register-merchant-map__coords",dir:"ltr",children:[P[0].toFixed(5)," ، ",P[1].toFixed(5)]}):null]}),i.jsxs("div",{className:"register-merchant-map__frame",children:[i.jsx("button",{type:"button",className:"register-merchant-map__expand-fab",onClick:()=>z(!0),"aria-label":"توسيع الخريطة",title:"توسيع الخريطة",children:"توسيع"}),i.jsxs(ra,{center:A,zoom:14,minZoom:10,maxZoom:19,scrollWheelZoom:!0,style:{height:"clamp(220px, 48dvh, 360px)",width:"100%"},children:[i.jsx(ia,{}),i.jsx(aa,{}),i.jsx(Es,{position:P}),i.jsx(oo,{onPick:(F,ge)=>N([F,ge])}),P?i.jsx(Or,{position:P,children:i.jsx(Br,{children:"موقع المتجر المقترح"})}):null]})]})]}),i.jsx("div",{style:{marginBottom:4,textAlign:"right",fontWeight:700,fontSize:"0.9rem"},children:"نوع المتجر (القسم)"}),i.jsxs("select",{"aria-label":"نوع المتجر",value:g,onChange:F=>x(F.target.value),style:ne,required:!0,disabled:B,children:[i.jsx("option",{value:"",children:"— اختر القسم —"}),y8.map(F=>i.jsx("option",{value:F,children:F==="__CLOTHES__"?"ملابس":F},F))]}),g==="__CLOTHES__"&&i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{marginBottom:4,textAlign:"right",fontWeight:700,fontSize:"0.9rem"},children:"نوع الملابس"}),i.jsx("select",{"aria-label":"نوع الملابس",value:v,onChange:F=>b(F.target.value),style:ne,children:v8.map(F=>i.jsx("option",{value:F.value,children:F.label},F.value))})]}),B?i.jsx("p",{style:{fontSize:"0.85rem",color:"var(--text-secondary)",textAlign:"right"},children:"جاري تحميل الأقسام..."}):null]}),i.jsx(Ht,{type:"submit",loading:U,style:{width:"100%",marginTop:"10px"},confirm:!1,showErrorAlert:!1,children:"سجل الآن"}),i.jsxs("div",{className:"flex-center",style:{margin:"15px 0"},children:[i.jsx("div",{style:{flex:1,height:"1px",background:"#eee"}}),i.jsx("span",{style:{padding:"0 10px",color:"#999",fontSize:"0.8rem"},children:"أو"}),i.jsx("div",{style:{flex:1,height:"1px",background:"#eee"}})]}),i.jsx(Ht,{variant:"secondary",type:"button",onClick:$,style:{width:"100%"},confirm:!1,showErrorAlert:!1,children:"تصفح كزائر"})]}),i.jsxs("p",{className:"auth-footer-link",children:["لديك حساب بالفعل؟ ",i.jsx(ke,{to:"/login",children:"تسجيل الدخول"})]})]}),w?i.jsx("div",{role:"dialog","aria-modal":"true","aria-label":"تحديد موقع المتجر على الخريطة",className:"register-map-modal-backdrop",onClick:()=>z(!1),children:i.jsxs("div",{className:"register-map-modal",onClick:F=>F.stopPropagation(),children:[i.jsxs("div",{className:"register-map-modal__bar",children:[i.jsx("button",{type:"button",className:"register-map-modal__btn register-map-modal__btn--primary",onClick:()=>z(!1),children:"تم"}),i.jsx("button",{type:"button",className:"register-map-modal__btn register-map-modal__btn--ghost",disabled:C,onClick:ce,children:C?"…":"موقعي"}),i.jsx("button",{type:"button",className:"register-map-modal__btn register-map-modal__btn--close",onClick:()=>z(!1),"aria-label":"إغلاق",children:"×"})]}),i.jsx("div",{className:"register-map-modal__map",children:i.jsxs(ra,{center:A,zoom:15,minZoom:10,maxZoom:19,scrollWheelZoom:!0,style:{height:"100%",width:"100%"},children:[i.jsx(ia,{}),i.jsx(aa,{}),i.jsx(Es,{position:P,zoom:16}),i.jsx(oo,{onPick:(F,ge)=>N([F,ge])}),P?i.jsx(Or,{position:P,children:i.jsx(Br,{children:"موقع المتجر"})}):null]})})]})}):null,i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        `}})]})})},_8=new Set(["/login","/register","/verify-whatsapp"]);function j8(){const{showConfirm:e}=qe(),t=o5(({nextLocation:a})=>!localStorage.getItem("token")||localStorage.getItem("isGuest")==="true"?!1:_8.has(a.pathname)),n=f.useRef(!1);return f.useEffect(()=>{t.state==="blocked"&&(n.current||(n.current=!0,(async()=>{try{await e("الرجوع يفتح صفحة تسجيل الدخول أو إنشاء حساب أو التحقق. هل تريد تسجيل الخروج والمتابعة؟ إذا اخترت «لا» تبقى في الصفحة الرئيسية.","تأكيد")?(qv(),t.proceed()):t.reset()}finally{n.current=!1}})()))},[t.state,t,e]),null}function Ut({images:e=[],alt:t="",className:n="",height:a=152,borderRadius:o=12,fill:l=!1}){const c=(Array.isArray(e)?e:[]).filter(Boolean),[h,u]=f.useState(0),m=c.length;f.useEffect(()=>{u(_=>m===0?0:Math.min(_,m-1))},[m]);const g=f.useCallback(_=>{m<=1||u(j=>(j+_+m)%m)},[m]);if(m===0)return null;const x={position:"relative",width:l?"100%":void 0,height:l?"100%":a,minHeight:l?0:void 0,borderRadius:o,overflow:"hidden",background:"var(--grey-light, #eee)"},v={width:"100%",height:"100%",objectFit:"cover",display:"block"},b={position:"absolute",top:"50%",transform:"translateY(-50%)",zIndex:2,border:"none",borderRadius:"50%",width:36,height:36,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",background:"rgba(255,255,255,0.92)",color:"var(--secondary)",boxShadow:"0 2px 8px rgba(0,0,0,0.12)"};return i.jsxs("div",{className:`radar-image-carousel ${n||""}`.trim(),style:x,children:[i.jsx("img",{src:c[h],alt:t,style:v}),m>1?i.jsxs(i.Fragment,{children:[i.jsx("button",{type:"button",style:{...b,insetInlineEnd:8},onClick:()=>g(1),"aria-label":"الصورة التالية",children:i.jsx(Dp,{size:22,strokeWidth:2.4})}),i.jsx("button",{type:"button",style:{...b,insetInlineStart:8},onClick:()=>g(-1),"aria-label":"الصورة السابقة",children:i.jsx(wh,{size:22,strokeWidth:2.4})}),i.jsx("div",{style:{position:"absolute",bottom:8,left:0,right:0,display:"flex",justifyContent:"center",gap:6,zIndex:2},children:c.map((_,j)=>i.jsx("button",{type:"button","aria-label":`صورة ${j+1} من ${m}`,onClick:()=>u(j),style:{width:j===h?22:8,height:8,borderRadius:4,border:"none",padding:0,cursor:"pointer",background:j===h?"var(--primary)":"rgba(255,255,255,0.75)",transition:"width 0.15s ease"}},j))})]}):null]})}function Xe(e){return e?Array.isArray(e.images)&&e.images.length>0?e.images.filter(Boolean):e.image?[e.image]:[]:[]}function Kg(e){return e?Array.isArray(e.line_images)&&e.line_images.length>0?e.line_images.filter(Boolean):Xe(e.product_details):[]}function Ls(e){if(!e||typeof e!="object")return!1;for(let t=0;t<7;t++){const n=e[String(t)]??e[t];if(Array.isArray(n))for(const a of n){if(!a||typeof a!="object")continue;const o=String(a.start??"").trim(),l=String(a.end??"").trim();if(o&&l)return!0}}return!1}function Ms(){if(!localStorage.getItem("token")||localStorage.getItem("isGuest")==="true")return!1;const e=localStorage.getItem("user_type")||"shopper";return e==="shopper"||e==="merchant"||e==="admin"}function hu(e,t){const a=m=>m*Math.PI/180,o=a(t[0]-e[0]),l=a(t[1]-e[1]),c=a(e[0]),h=a(t[0]),u=Math.sin(o/2)**2+Math.cos(c)*Math.cos(h)*Math.sin(l/2)**2;return 2*6371*Math.asin(Math.sqrt(u))}function zl(e){const t=Number(e.latitude),n=Number(e.longitude);return!(!Number.isFinite(t)||!Number.isFinite(n)||Math.abs(t)<.25&&Math.abs(n)<.25)}function k8(e){try{const t=new URLSearchParams(e).get("category");if(t==null||t==="")return null;const n=Number(t);return Number.isFinite(n)?n:null}catch{return null}}function Yg(e){try{return new URLSearchParams(e).get("filter")==="community"?"community":"stores"}catch{return"stores"}}function S8(e){try{const t=new URLSearchParams(e).get("cc");if(t==null||t==="")return null;const n=Number(t);return Number.isFinite(n)?n:null}catch{return null}}function N8(e){return(e||"").trim().toLowerCase().replace(/[أإآٱ]/g,"ا").replace(/ى/g,"ي").replace(/ة/g,"ه").replace(/ؤ/g,"و").replace(/ئ/g,"ي").replace(/\s+/g," ")}const C8=[{re:/مسجد|جامع|مصلى|mosque|islamic center/i,Icon:mj,tone:"#1b5e20"},{re:/كنيس|كنيسة|church|christian/i,Icon:K5,tone:"#3949ab"},{re:/جمعيه خيريه|جمعية خيرية|خيريه|خيرية|تطوع|ngo|charity|تكافل|أيتام/i,Icon:oj,tone:"#c2185b"},{re:/مدرسه|مدرسة|روضه|روضة|حضانه|حضانة|ابتدائ|اعداد|إعداد|ثانوي|school|kindergarten/i,Icon:Sj,tone:"#283593"},{re:/جامعه|جامعة|university|كليه|كلية/i,Icon:cv,tone:"#4527a0"},{re:/محام|قانون|legal|شرعي|عدل|نوتر|محكمه|محكمة|lawyer/i,Icon:kj,tone:"#37474f"},{re:/بلديه|بلدية|حكوم|وزاره|وزارة|دائرة|مركز خدمات|بلدي|municipal/i,Icon:_h,tone:"#455a64"},{re:/بنك|مصرف|صراف|مالي|bank|atm|تحويلات ماليه|تحويلات مالية/i,Icon:_h,tone:"#1565c0"},{re:/فندق|نزل|hotel|hostel|ضيافه|ضيافة/i,Icon:lj,tone:"#6a1b9a"},{re:/عقار|عقارات|وساطه|وساطة|real\s*estate|أراضي|املاك|أملاك/i,Icon:$5,tone:"#5d4037"},{re:/اسنان|أسنان|تقويم|مخدر|تجميل اسنان|dentist|dental|orthodont/i,Icon:Cj,tone:"#00897b"},{re:/بيطر|بيطريه|بيطرية|عياده بيط|عيادة بيط|حيوانات اهليه|حيوانات أهلية|veterinar/i,Icon:kh,tone:"#795548"},{re:/صيدل|دواء|pharm|روشته|روشتة|dispensary|صيدليات/i,Icon:Qy,tone:"#c62828"},{re:/عياده|عيادة|طبيب|دكتور|مستشفى|مستوصف|تحاليل طب|مختبر طب|طوارئ طب|clinic|emergency|ممرض/i,Icon:sj,tone:"#c62828"},{re:/اسعاف|إسعاف|هيئه اسعاف|هيئة إسعاف|paramedic/i,Icon:yv,tone:"#ad1457"},{re:/خضار|فواكه|فاكهه|فاكهة|خضروات|greengrocer|produce|فواكه وخضار/i,Icon:Ch,tone:"#2e7d32"},{re:/سمك|اسماك|أسماك|بحري|ماكولات بحر|مأكولات بحر|seafood|fish shop|fish store/i,Icon:rv,tone:"#0277bd"},{re:/لحوم|جزاره|جزارة|جزار|لحم|butcher|لحام|لحوم حمراء/i,Icon:qy,tone:"#6d4c41"},{re:/دواجن|دجاج|فراخ|ديك رومي|poultry|دواجن طازجه|دواجن طازجة/i,Icon:tj,tone:"#e65100"},{re:/البان|ألبان|اجبان|أجبان|حليب|جبن|dairy|cheese|البان واجبان|ألبان وأجبان/i,Icon:mv,tone:"#5d4037"},{re:/مكسرات|مكسره|مكسرة|فستق|لوز|سكب|كاجو|nuts/i,Icon:gj,tone:"#795548"},{re:/قمح|حبوب|اعلاف|أعلاف|علف|wheat|grain|مطحنه|مطحنة/i,Icon:Aj,tone:"#f9a825"},{re:/وقود|بنزين|ديزل|محطه وقود|محطة وقود|fuel|petrol|بترول|غاز سيارات/i,Icon:rj,tone:"#263238"},{re:/طاقه\s*شمسيه|طاقة\s*شمسية|الطاقة\s*الشمسية|مولدات\s*و|مولدات.*شمس|شمس.*مولد|بانل\s*شمس|انفرتر|solar|photovoltaic|pv\s*panel/i,Icon:vv,tone:"#f57c00"},{re:/اطارات|إطارات|بنشري|بنشر|اطار|إطار|tyre|tire|patch/i,Icon:bh,tone:"#37474f"},{re:/غسيل|مغسله|مغسلة|كوي|تنظيف جاف|laundry|dry\s*clean|مكوايه|مكواية/i,Icon:Jy,tone:"#0277bd"},{re:/طباعه|طباعة|مطبعه|مطبعة|نسخ|print|copy\s*center/i,Icon:wj,tone:"#424242"},{re:/ارجيله|أرجيلة|معسل|شيشه|شيشة|hookah|narghile/i,Icon:iv,tone:"#bf360c"},{re:/عصير|عصائر|مشروبات غاز|برتقال طرش|soft\s*drinks|مشروبات بارده|مشروبات باردة/i,Icon:X5,tone:"#ef6c00"},{re:/ايس كريم|آيس كريم|بوظه|بوظة|ايس|آيس|ice\s*cream|جلاطي|gelato/i,Icon:cj,tone:"#ec407a"},{re:/مفاتيح|اقفال|أقفال|اقفل|أقفل|locksmith|key\s*mak/i,Icon:uj,tone:"#5d4037"},{re:/مطعم|مأكول|اكل|أكل|restaurant|مشويات|سفره|سفرة|وجبات|فاست فود|fast\s*food|برجر|بيتزا|شاورما|فلافل|كنفه|ارز|أرز بال|بوفيه مفتوح|مندي|كبسه|كبسة|مطاعم/i,Icon:_v,tone:"#e65100"},{re:/كافيه|كافي|قهوه|قهوة|cafe|coffee|مقهى|قهوجي/i,Icon:Yy,tone:"#5d4037"},{re:/مخبز|حلو|حلويات|معجن|ساندوتش|سندوتش|كيك|كعك|معكروت|مخبوزات|pastry|donut|دونات/i,Icon:Q5,tone:"#f9a825"},{re:/سوبر|هايبر|ماركت|بقاله|بقالة|تموين|اقتصادي|grocery|minimarket|ماركت صغير/i,Icon:wi,tone:"#2e7d32"},{re:/اقمشه|أقمشة|قماش|مزاين|خياط|خياطه|خياطة|تفصيل|زي موحد/i,Icon:Sh,tone:"#ad1457"},{re:/ملابس|أزياء|موضه|موضة|نسائي|رجالي|احذيه|أحذيه|أحذية|حقائب|جلديات|عبايه|عباية|فاشن|fashion|boutique/i,Icon:Sh,tone:"#ad1457"},{re:/لابتوب|كمبيوتر مكتبي|كمبيوتر|حاسوب|كمبيتور|لاب توب|pc|gaming\s*pc|كمبيوترات/i,Icon:uv,tone:"#00695c"},{re:/موبايل|موبيل|هاتف|اتصالات|اتصال|جوال|mobile|phone|smartphone|شاحن|كابلات/i,Icon:_g,tone:"#00695c"},{re:/واي فاي|wifi|انترنت|إنترنت|net|راوتر/i,Icon:_g,tone:"#0277bd"},{re:/كتب|قرطاس|مكتبه|مكتبة|ادوات كتابيه|أدوات كتابية|دفتر|أقلام|stationery/i,Icon:Vy,tone:"#3949ab"},{re:/عطور|تجميل|مكياج|اظافر|أظافر|صالون|حلاق|حلاقه|حلاقة|barber|كوافير|cosmetic|beauty/i,Icon:Gn,tone:"#d81b60"},{re:/ذهب|مجوهر|مجوهرات|فضه|فضة|ساعه يد|ساعة يد|watch\s*shop/i,Icon:sv,tone:"#fbc02d"},{re:/زهور|ورود|نبات|حديقه|حديقة|مزهريه|مزهرية|flower|ورده|وردة/i,Icon:av,tone:"#2e7d32"},{re:/رياضه|رياضة|sport|لياقه|لياقة|جيم|صاله رياضيه|صالة رياضية|protein|مكملات غذائيه|مكملات غذائية/i,Icon:Xy,tone:"#ef6c00"},{re:/العاب|ألعاب|toys|playstation|دمى|دميه|دمية|games/i,Icon:ov,tone:"#7b1fa2"},{re:/حيوان|اليف|أليف|pet|قطه|قطة|كلب|بيطر|veterinar|عياده بيطريه|عيادة بيطرية/i,Icon:kh,tone:"#795548"},{re:/اثاث|أثاث|مفروشات|سجاد|كنب|ديكور|اناره|إنارة|مفروش|furniture|lamps|اضاءه|إضاءة/i,Icon:ro,tone:"#5d4037"},{re:/دهان|طلاء|بويه|بوية|دهانات|paint\s*shop|الوان|ألوان/i,Icon:xj,tone:"#8e24aa"},{re:/بناء|مقاول|انشاءات|إنشاءات|مقاولين|خرسان|هندسه|هندسة معمار|هندسة معماري/i,Icon:aj,tone:"#5d4037"},{re:/نجار|نجاره|نجارة|الخشب|الومنيوم زجاج|ألمنيوم|حداد|حداده|حدادة|حدادين|خشبيات/i,Icon:dv,tone:"#6d4c41"},{re:/كهرباء|سباك|سباكه|سباكة|تكييف|صيانه|صيانة|لحام|صيانة عامه|صيانة عامة|أدوات صناعيه|أدوات صناعية|عده|عدة/i,Icon:Ij,tone:"#607d8b"},{re:/سفريات|سياحه|سياحة|travel|طيران محلي|wings tour/i,Icon:vj,tone:"#0277bd"},{re:/شحن|توصيل|نقل بضائع|delivery|لوجست|logistics|ديلفري/i,Icon:Ej,tone:"#33691e"},{re:/هديا|هدايا|ورود و هدايا|gift/i,Icon:lv,tone:"#d84315"},{re:/تصوير|فوتو|استوديو|photo|كاميرا/i,Icon:q5,tone:"#ad1457"},{re:/نظارات|بصريات|optical|عدسات لاصقه|عدسات لاصقة/i,Icon:ij,tone:"#3f51b5"},{re:/دراجه|دراجة|سيكل|bike|bicycle/i,Icon:W5,tone:"#006064"},{re:/سيارات|ورشه|ورشة|ميكانيك|كراج|غسيل سيارات|car\s*wash|ورشه سيارات|ورشة سيارات/i,Icon:bh,tone:"#37474f"},{re:/مشتل|مشاتل|زراعه|زراعة|تربه|تربة|مزارع|agricultur|مبيدات زراعيه|مبيدات زراعية/i,Icon:Ch,tone:"#558b2f"}],Qg={medical:{Icon:yv,tone:"#c62828"},education:{Icon:cv,tone:"#4527a0"},food:{Icon:Pj,tone:"#e65100"},water:{Icon:Jy,tone:"#0277bd"},institution:{Icon:_h,tone:"#5d4037"}},Jg={mini_mall:{Icon:Tj,tone:"#6a1b9a"},supermarket:{Icon:wi,tone:"#2e7d32"},greengrocer:{Icon:Ch,tone:"#43a047"},butcher:{Icon:qy,tone:"#c62828"},fish:{Icon:rv,tone:"#0277bd"},dairy:{Icon:mv,tone:"#5c6bc0"},bakery:{Icon:J5,tone:"#ef6c00"},sweets:{Icon:V5,tone:"#ad1457"},spices:{Icon:iv,tone:"#e65100"},restaurant:{Icon:_v,tone:"#d84315"},cafe:{Icon:Yy,tone:"#4e342e"},coworking:{Icon:H5,tone:"#455a64"},solar_generators:{Icon:vv,tone:"#f57c00"},pharmacy:{Icon:Qy,tone:"#1565c0"},cosmetics:{Icon:Gn,tone:"#ec407a"},shoes:{Icon:nj,tone:"#6d4c41"},clothing:{Icon:kc,tone:"#3949ab"},clothing_women:{Icon:jj,tone:"#c2185b"},clothing_men:{Icon:Sh,tone:"#283593"},clothing_kids:{Icon:D5,tone:"#ef6c00"},electronics:{Icon:uv,tone:"#1e88e5"},electric_tools:{Icon:bj,tone:"#607d8b"},household:{Icon:ro,tone:"#7e57c2"},furniture:{Icon:B5,tone:"#8d6e63"},hardware:{Icon:dv,tone:"#78909c"},books:{Icon:Vy,tone:"#5e35b1"},toys:{Icon:ov,tone:"#f9a825"},sports:{Icon:Xy,tone:"#00897b"},pets:{Icon:kh,tone:"#6a1b9a"},jewelry:{Icon:sv,tone:"#ffd54f"},auto:{Icon:bh,tone:"#37474f"},cleaning:{Icon:Z5,tone:"#26a69a"},gifts:{Icon:lv,tone:"#c2185b"},flowers:{Icon:av,tone:"#2e7d32"},generic:{Icon:Gt,tone:"#fbc02d"}};function Xg(e,t=null){if(t&&Qg[t])return Qg[t];const n=y1(e);if(n&&Jg[n])return Jg[n];const a=N8(e);if(!a)return{Icon:Gt,tone:"var(--secondary)"};for(const o of C8)if(o.re.test(a))return{Icon:o.Icon,tone:o.tone};return{Icon:Gt,tone:"var(--secondary)"}}function El(e){const t=String(e||"");if(!t||t.startsWith("var("))return{background:"rgba(26, 29, 38, 0.06)",borderColor:"rgba(26, 29, 38, 0.12)"};const n=t.replace("#","");if(n.length!==6||!/^[0-9a-fA-F]+$/.test(n))return{background:"var(--primary-light)",borderColor:"rgba(255, 204, 0, 0.35)"};const a=parseInt(n.slice(0,2),16),o=parseInt(n.slice(2,4),16),l=parseInt(n.slice(4,6),16);return{background:`rgba(${a}, ${o}, ${l}, 0.15)`,borderColor:`rgba(${a}, ${o}, ${l}, 0.28)`}}const pu=6,P8=12,z8=8,ja=5*60*1e3,b1=()=>{var Y,oe,te;const[e,t]=qc(),n=Nt(),a=wn(),{showAlert:o,showPrompt:l,showSelect:c}=qe(),h=f.useRef(null),u=f.useRef(null),m=f.useRef(null),g=f.useRef(null),{userMapLocation:x,locationFocusNonce:v,setManualMapLocation:b,requestUserLocation:_,locating:j,searchQuery:P,setSearchQuery:N}=Zs(),[w,z]=f.useState(1),[C,I]=f.useState(1),[E,k]=f.useState(()=>typeof window<"u"?window.matchMedia("(max-width: 640px)").matches:!1),[B,M]=f.useState([]),[T,W]=f.useState([]),[U,se]=f.useState(!0),[de,he]=f.useState(!0),[le,V]=f.useState(""),[A,ie]=f.useState(null),[q,ce]=f.useState(!0),[ne,ue]=f.useState(()=>typeof window<"u"?Yg(window.location.search):"stores"),[$,G]=f.useState(()=>typeof window<"u"?k8(window.location.search):null),[F,ge]=f.useState(()=>typeof window<"u"?S8(window.location.search):null),[_e,Ve]=f.useState([]),[Ie,Ee]=f.useState(!0),[Le,vt]=f.useState({}),[ur,hr]=f.useState([]),[X,ye]=f.useState(!1),[ve,Pe]=f.useState([]),[Ge,at]=f.useState(!0),[Ye,Ct]=f.useState(null);f.useEffect(()=>{if(typeof window>"u")return;const R=window.matchMedia("(max-width: 640px)"),K=()=>k(R.matches);return K(),typeof R.addEventListener=="function"?R.addEventListener("change",K):R.addListener(K),()=>{typeof R.removeEventListener=="function"?R.removeEventListener("change",K):R.removeListener(K)}},[]);const[Zt,pr]=f.useState(0),[fr,Zr]=f.useState(0),[Jt,hn]=f.useState(0),[$r,mr]=f.useState(0),qr=f.useCallback((R,K,ee,ae)=>{if(!R)return()=>{};let pe=0;const be=()=>Array.from(R.querySelectorAll(K)),Se=()=>{const ct=be();if(ee(ct.length),ct.length===0){ae(0);return}const Qe=R.scrollLeft+R.clientWidth/2;let We=0,nt=1/0;for(let en=0;en<ct.length;en+=1){const Jn=ct[en],It=Jn.offsetLeft+Jn.offsetWidth/2,$t=Math.abs(It-Qe);$t<nt&&(nt=$t,We=en)}ae(We)},Te=()=>{pe||(pe=window.requestAnimationFrame(()=>{pe=0,Se()}))};return Se(),R.addEventListener("scroll",Te,{passive:!0}),window.addEventListener("resize",Se),()=>{pe&&window.cancelAnimationFrame(pe),R.removeEventListener("scroll",Te),window.removeEventListener("resize",Se)}},[]);f.useEffect(()=>qr(m.current,".home-exclusive-card",pr,Zr),[qr,ne,Ie,_e.length]),f.useEffect(()=>qr(g.current,".home-browse-item",hn,mr),[qr,ne,de,Ge,T.length,ve.length]);const pn=f.useCallback(R=>{R&&typeof R.preventDefault=="function"&&R.preventDefault();const K=P.trim();n(K?`/search?q=${encodeURIComponent(K)}`:"/search")},[n,P]);f.useEffect(()=>{ue(Yg(`?${e.toString()}`));const R=e.get("category");if(R==null||R==="")G(null);else{const ee=Number(R);G(Number.isFinite(ee)?ee:null)}const K=e.get("cc");if(K==null||K==="")ge(null);else{const ee=Number(K);ge(Number.isFinite(ee)?ee:null)}},[e]),f.useEffect(()=>{var ae;const R=(ae=a.state)==null?void 0:ae.mapFocus;if(!R)return;const K=Number(R.lat),ee=Number(R.lng);!Number.isFinite(K)||!Number.isFinite(ee)||(b(K,ee),n({pathname:a.pathname,search:a.search},{replace:!0,state:{}}))},[a.state,a.pathname,a.search,n,b]),f.useEffect(()=>{if(ne!=="stores"||$==null)return;const R=window.setTimeout(()=>{var K;(K=h.current)==null||K.scrollIntoView({behavior:"smooth",block:"start"})},180);return()=>window.clearTimeout(R)},[ne,$]);const[gr,Vr]=f.useState(()=>Math.floor(Date.now()/ja));f.useEffect(()=>{let R=0,K=0;return(()=>{const ae=Date.now(),pe=(Math.floor(ae/ja)+1)*ja,be=Math.max(250,pe-ae+50);R=window.setTimeout(()=>{Vr(Math.floor(Date.now()/ja)),K=window.setInterval(()=>{Vr(Math.floor(Date.now()/ja))},ja)},be)})(),()=>{R&&window.clearTimeout(R),K&&window.clearInterval(K)}},[]);const Qn=f.useMemo(()=>{const R=Array.isArray(_e)?_e:[],K=R.length;if(K<=1)return R;const ee=(gr%K+K)%K;return ee===0?R:[...R.slice(ee),...R.slice(0,ee)]},[_e,gr]);f.useEffect(()=>{z(1)},[ne,$]),f.useEffect(()=>{I(1)},[ne,$,q]);const xr=f.useCallback(async()=>{if(ne!=="stores"||de)return;const R=[{id:"__all__",label:"الكل",value:null},...T.map(ae=>({id:String(ae.id),label:ae.name,value:ae.id}))],K=await c("اختر القسم:","تصفية المتاجر",R);if(K==null)return;const ee=new URLSearchParams(e);ee.delete("filter"),ee.delete("cc"),K==="__all__"?ee.delete("category"):ee.set("category",String(K)),t(ee,{replace:!0})},[ne,de,T,c,e,t]),da=f.useCallback(async()=>{if(ne!=="community"||Ge)return;const R=[{id:"__all__",label:"الكل",value:null},...ve.map(ae=>({id:String(ae.id),label:ae.name,value:ae.id}))],K=await c("اختر القسم:","تصفية الخدمات",R);if(K==null)return;const ee=new URLSearchParams(e);ee.set("filter","community"),ee.delete("category"),K==="__all__"?ee.delete("cc"):ee.set("cc",String(K)),t(ee,{replace:!0})},[ne,Ge,ve,c,e,t]);f.useEffect(()=>{let R=!1;return(async()=>{try{const K=await mo();R||Pe(Array.isArray(K)?K:[])}catch(K){console.error(K),R||Pe([])}finally{R||at(!1)}})(),()=>{R=!0}},[]),f.useEffect(()=>{let R=!1;return(async()=>{try{const K=await la();R||W(Array.isArray(K)?K:[])}catch(K){console.error(K),R||W([])}finally{R||he(!1)}})(),()=>{R=!0}},[]),f.useEffect(()=>{let R=!1;return(async()=>{try{R||Ee(!0);const ee=await t1(ne==="stores"?$:null);R||Ve(Array.isArray(ee)?ee:[])}catch(K){console.error(K),R||Ve([])}finally{R||Ee(!1)}})(),()=>{R=!0}},[ne,$]),f.useEffect(()=>{let R=!1;const K=ne==="community";return(async()=>{K&&(R||ye(!0));try{const ee=K&&F!=null?F:null,ae=await Xc(ee);R||hr(Array.isArray(ae)?ae:[])}catch(ee){console.error(ee),R||hr([])}finally{!R&&K&&ye(!1)}})(),()=>{R=!0,ye(!1)}},[ne,F]),f.useEffect(()=>{let R=!1;return(async()=>{var ee;try{se(!0),V("");let ae,pe,be=null;(x==null?void 0:x.length)===2?(ae=x[0],pe=x[1],be=[ae,pe],R||ie(be)):(ae=31.5,pe=34.4,be=null,R||ie(null));const Se=await ed(ae,pe),Te=Array.isArray(Se)?Se:(Se==null?void 0:Se.results)||[];R||M(Te)}catch(ae){if(console.error("Error fetching stores:",ae),!R){const pe=(ee=ae.response)==null?void 0:ee.status;ae.response?pe>=500?V("الخادم أرجع خطأ أثناء تحميل المتاجر. راجع نافذة تشغيل Django أو أعد تشغيل السيرفر."):V(`تعذر تحميل المتاجر (رمز ${pe}). جرّب مرة أخرى.`):V("تعذر الاتصال بالخادم. من مجلد backend شغّل: python manage.py runserver ثم حدّث الصفحة (الواجهة على المنفذ 3000).")}}finally{R||se(!1)}})(),()=>{R=!0}},[x]);const yr=f.useMemo(()=>ne!=="stores"?[]:(B||[]).filter(R=>!($!=null&&(R.category==null||Number(R.category)!==Number($)))),[B,ne,$]),vr=f.useMemo(()=>yr.filter(R=>{const K=zl(R);return q?K:!0}),[yr,q]),An=f.useMemo(()=>{if(!A)return vr;const R=A;return[...vr].sort((K,ee)=>{const ae=[Number(K.latitude),Number(K.longitude)],pe=[Number(ee.latitude),Number(ee.longitude)];if(!zl(K))return 1;if(!zl(ee))return-1;const be=hu(R,ae),Se=hu(R,pe);return be-Se})},[vr,A]),In=Math.max(1,Math.ceil(Qn.length/pu)),ua=Math.min(w,In);f.useMemo(()=>{const R=(ua-1)*pu;return Qn.slice(R,R+pu)},[Qn,ua]),f.useEffect(()=>{w>In&&z(In)},[w,In]);const br=E?z8:P8,Xt=Math.max(1,Math.ceil(An.length/br)),_n=Math.min(C,Xt),Gr=f.useMemo(()=>{const R=(_n-1)*br;return An.slice(R,R+br)},[An,_n,br]);f.useEffect(()=>{C>Xt&&I(Xt)},[C,Xt]);const wr=localStorage.getItem("isGuest")==="true",Rn=!!localStorage.getItem("token")&&!wr&&localStorage.getItem("user_type")==="merchant",ha=!!localStorage.getItem("token")&&!wr;f.useEffect(()=>{if(ne!=="community"||Rn)return;const R=window.setTimeout(()=>{var K;(K=u.current)==null||K.scrollIntoView({behavior:"smooth",block:"nearest"})},200);return()=>window.clearTimeout(R)},[ne,F,Rn]),f.useEffect(()=>{if(!ha){vt({});return}let R=!1;return(async()=>{try{const K=await Va();if(R)return;const ee={};for(const ae of K||[])(ae.product==null||ae.product==="")&&ae.sponsored_ad!=null&&(ee[ae.sponsored_ad]=ae.id);vt(ee)}catch{R||vt({})}})(),()=>{R=!0}},[ha]);const D=()=>{const R=new URLSearchParams(e);R.delete("filter"),R.delete("cc"),t(R,{replace:!0})},H=()=>{const R=new URLSearchParams(e);R.set("filter","community"),R.delete("category"),t(R,{replace:!0})};return i.jsxs(Be,{children:[i.jsx(j8,{}),i.jsxs("div",{className:"home-container",children:[Rn?i.jsxs("div",{className:"card",role:"status",style:{marginBottom:18,padding:"14px 16px",display:"flex",alignItems:"flex-start",gap:14,background:"linear-gradient(135deg, rgba(245, 192, 0, 0.15) 0%, var(--surface) 55%)",border:"1.5px solid rgba(245, 192, 0, 0.45)",borderRadius:14},children:[i.jsx("div",{className:"flex-center",style:{flexShrink:0,width:44,height:44,borderRadius:12,background:"var(--primary-light)",color:"var(--secondary)"},children:i.jsx(Ko,{size:24,strokeWidth:2.25})}),i.jsxs("div",{style:{lineHeight:1.65,fontSize:"0.95rem",color:"var(--text-primary)"},children:[i.jsx("strong",{style:{display:"block",marginBottom:6,fontSize:"1rem"},children:"أنت في وضع التاجر على الصفحة الرئيسية"}),"لإدارة متجرك — مثل ",i.jsx("strong",{children:"منتجاتي"}),"، ",i.jsx("strong",{children:"الإعلانات"}),"، ",i.jsx("strong",{children:"الاشتراك"}),"، و",i.jsx("strong",{children:"إعدادات المتجر"}),"— افتح ",i.jsx("strong",{children:"القائمة الجانبية"})," من زر القائمة"," ",i.jsx("span",{style:{whiteSpace:"nowrap"},children:"(☰ أسفل الصفحة)"}),"؛ من هناك تتحكم بكل خيارات المتجر، وليس من روابط المتسوقين في هذه الصفحة."]})]}):null,Rn?null:i.jsxs("section",{className:"home-hero","aria-label":"ترحيب",children:[i.jsx("div",{className:"home-hero-backdrop","aria-hidden":!0}),i.jsxs("div",{className:"home-hero-inner",children:[i.jsxs("div",{className:"home-hero-copy",children:[i.jsx("h1",{className:"home-hero-title",children:"ماذا تبحث عنه اليوم؟"}),i.jsx("p",{className:"home-hero-sub",children:"تصفّح الأقسام، العروض، والمتاجر القريبة — ابحث من مربع البحث أدناه، ثم استخدم الخريطة لمطابقة المواقع."})]}),i.jsx("form",{className:"home-hero-search",onSubmit:pn,children:i.jsxs("div",{className:"home-hero-search-bar",children:[i.jsx(Ps,{size:20,strokeWidth:1.85,className:"home-hero-search-ico","aria-hidden":!0}),i.jsx("input",{type:"search",className:"home-hero-search-input",placeholder:"ابحث عن متجر أو قسم…",value:P,onChange:R=>N(R.target.value),"aria-label":"بحث في رادار",enterKeyHint:"search"}),i.jsx(ke,{to:"/categories",className:"home-hero-filter-btn",title:"الأقسام والتصفية","aria-label":"الأقسام والتصفية",onClick:R=>R.stopPropagation(),children:i.jsx(jc,{size:20,strokeWidth:1.85,"aria-hidden":!0})}),i.jsx("button",{type:"submit",className:"home-hero-submit-btn","aria-label":"تنفيذ البحث",children:i.jsx(Ps,{size:20,strokeWidth:1.85,"aria-hidden":!0})})]})})]})]}),i.jsx("div",{className:"home-top-grid",children:ne==="stores"?i.jsxs("section",{className:"home-top-grid__exclusive home-exclusive","aria-label":"عروض حصرية",children:[i.jsxs("div",{className:"home-exclusive-head",children:[i.jsxs("div",{className:"home-exclusive-head-text",children:[i.jsx("h2",{className:"home-exclusive-title",children:"عروض مميزة من المتاجر"}),i.jsx("p",{className:"home-exclusive-sub",children:"إعلانات ممولة — اضغط البطاقة لفتح المتجر"})]}),i.jsxs(ke,{to:"/offers",className:"home-exclusive-more",children:["عرض المزيد",i.jsx(Dp,{size:18,"aria-hidden":!0})]})]}),i.jsx("div",{className:"home-exclusive-rail",role:"list",ref:m,children:Ie?i.jsx(i.Fragment,{children:Array.from({length:4}).map((R,K)=>i.jsx("div",{className:"home-exclusive-skel","aria-hidden":!0},K))}):Qn.length===0?i.jsx("div",{className:"home-exclusive-empty",children:"لا توجد عروض ممولة حالياً."}):Qn.slice(0,10).map(R=>{const K=Xe(R)[0]||null;return i.jsxs(ke,{to:`/stores/${R.store}`,className:"home-exclusive-card",role:"listitem","aria-label":`${R.title} — ${R.store_name}`,children:[i.jsx("div",{className:"home-exclusive-cover",style:K?{backgroundImage:`url(${K})`}:void 0,"aria-hidden":!0}),i.jsx("span",{className:"home-exclusive-badge",children:"إعلان ممول"}),i.jsxs("div",{className:"home-exclusive-meta",children:[i.jsx("div",{className:"home-exclusive-ad-title",children:R.title}),i.jsx("div",{className:"home-exclusive-store",children:R.store_name})]})]},R.id)})}),Zt>1?i.jsx("div",{className:"scroll-dots","aria-label":"التنقل بين العروض",role:"tablist",children:Array.from({length:Zt}).slice(0,12).map((R,K)=>i.jsx("button",{type:"button",className:`scroll-dot${K===fr?" scroll-dot--active":""}`,"aria-label":`عرض ${K+1}`,"aria-selected":K===fr,onClick:()=>{const ee=m.current;if(!ee)return;const pe=Array.from(ee.querySelectorAll(".home-exclusive-card"))[K];pe&&ee.scrollTo({left:Math.max(0,pe.offsetLeft-12),behavior:"smooth"})}},K))}):null]}):null}),i.jsx("div",{className:"home-mode-strip",role:"presentation",children:i.jsxs("div",{className:"home-mode-switch",role:"tablist","aria-label":"تصفح المتاجر أو الخدمات المجتمعية",children:[i.jsxs("button",{type:"button",role:"tab","aria-selected":ne==="stores",title:"المتاجر والعروض التجارية",className:`home-mode-btn${ne==="stores"?" home-mode-btn--on":""}`,onClick:D,children:[i.jsx(Gt,{size:15,strokeWidth:2.25,"aria-hidden":!0}),i.jsx("span",{children:"متاجر"})]}),i.jsxs("button",{type:"button",role:"tab","aria-selected":ne==="community",title:"خدمات مجتمعية على الخريطة",className:`home-mode-btn${ne==="community"?" home-mode-btn--on":""}`,onClick:H,children:[i.jsx(Gn,{size:15,strokeWidth:2.25,"aria-hidden":!0}),i.jsx("span",{children:"مجتمعي"})]})]})}),Rn?null:i.jsxs("section",{className:"home-browse-block","aria-label":"تصفح حسب الفئات",children:[E?i.jsxs("div",{className:"home-browse-head",children:[i.jsx("h2",{className:"home-browse-title",children:"تصفية سريعة"}),i.jsxs("button",{type:"button",className:"home-browse-filterbtn",onClick:ne==="stores"?xr:da,disabled:ne==="stores"?de:Ge,"aria-label":ne==="stores"?"تصفية المتاجر حسب القسم":"تصفية الخدمات حسب القسم",children:[i.jsx(jc,{size:18,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{className:"home-browse-filterbtn-text",children:ne==="stores"?$==null?"كل الأقسام":((Y=T.find(R=>Number(R.id)===Number($)))==null?void 0:Y.name)||"القسم":F==null?"كل الخدمات":((oe=ve.find(R=>Number(R.id)===Number(F)))==null?void 0:oe.name)||"الخدمة"})]})]}):i.jsx("h2",{className:"home-browse-title",children:ne==="stores"?"تصفح حسب الفئات":"أقسام الخدمات المجتمعية"}),i.jsx("div",{className:"home-browse-scroll",ref:g,children:ne==="stores"?i.jsxs(i.Fragment,{children:[i.jsxs("button",{type:"button",className:`home-browse-item home-browse-item--all${$==null?" home-browse-item--active":""}`,onClick:()=>{const R=new URLSearchParams(e);R.delete("category"),R.delete("filter"),R.delete("cc"),t(R,{replace:!0})},children:[i.jsx("span",{className:"home-browse-tile",style:{color:"var(--secondary)",...El("var(--secondary)")},children:i.jsx(Cs,{size:22,strokeWidth:1.85,"aria-hidden":!0})}),i.jsx("span",{className:"home-browse-label",children:"الكل"})]}),de?null:T.map(R=>{const{Icon:K,tone:ee}=Xg(R.name),ae=El(ee);return i.jsxs("button",{type:"button",className:`home-browse-item${$===R.id?" home-browse-item--active":""}`,onClick:()=>{const pe=new URLSearchParams(e);pe.delete("filter"),pe.delete("cc"),pe.set("category",String(R.id)),t(pe,{replace:!0})},children:[i.jsx("span",{className:"home-browse-tile",style:{color:ee,background:ae.background,borderColor:ae.borderColor},children:i.jsx(K,{size:22,strokeWidth:1.85,"aria-hidden":!0})}),i.jsx("span",{className:"home-browse-label",children:R.name})]},R.id)})]}):i.jsxs(i.Fragment,{children:[i.jsxs("button",{type:"button",className:`home-browse-item home-browse-item--all${F==null?" home-browse-item--active":""}`,onClick:()=>{const R=new URLSearchParams(e);R.set("filter","community"),R.delete("cc"),R.delete("category"),t(R,{replace:!0})},children:[i.jsx("span",{className:"home-browse-tile",style:{color:"var(--secondary)",...El("var(--secondary)")},children:i.jsx(Cs,{size:22,strokeWidth:1.85,"aria-hidden":!0})}),i.jsx("span",{className:"home-browse-label",children:"الكل"})]}),Ge?null:ve.map(R=>{const{Icon:K,tone:ee}=Xg(R.name,R.slug),ae=El(ee);return i.jsxs("button",{type:"button",className:`home-browse-item${F===R.id?" home-browse-item--active":""}`,onClick:()=>{const pe=new URLSearchParams(e);pe.set("filter","community"),pe.set("cc",String(R.id)),pe.delete("category"),t(pe,{replace:!0})},children:[i.jsx("span",{className:"home-browse-tile",style:{color:ee,background:ae.background,borderColor:ae.borderColor},children:i.jsx(K,{size:22,strokeWidth:1.85,"aria-hidden":!0})}),i.jsx("span",{className:"home-browse-label",children:R.name})]},R.id)})]})}),Jt>1?i.jsx("div",{className:"scroll-dots scroll-dots--browse","aria-label":"التنقل بين الفئات",role:"tablist",children:Array.from({length:Jt}).slice(0,14).map((R,K)=>i.jsx("button",{type:"button",className:`scroll-dot${K===$r?" scroll-dot--active":""}`,"aria-label":`فئة ${K+1}`,"aria-selected":K===$r,onClick:()=>{const ee=g.current;if(!ee)return;const pe=Array.from(ee.querySelectorAll(".home-browse-item"))[K];pe&&ee.scrollTo({left:Math.max(0,pe.offsetLeft-12),behavior:"smooth"})}},K))}):null,ne==="community"?i.jsxs("div",{className:"home-community-below",ref:u,"aria-label":"نقاط الخدمة في القسم المحدد",children:[i.jsx("h3",{className:"home-community-below-title",children:F!=null?"النقاط في هذا القسم":"كل النقاط المعتمدة"}),X?i.jsx("p",{className:"home-community-below-loading",role:"status",children:"جاري تحميل النقاط…"}):ur.length===0?i.jsx("p",{className:"home-community-below-empty",children:F!=null?"لا توجد نقاط معتمدة في هذا القسم بعد.":"لا توجد نقاط خدمات مجتمعية معتمدة حالياً."}):i.jsx("ul",{className:"home-community-below-list",children:ur.map(R=>{const K=r8(R),ee=(R.detail_description||"").trim(),ae=ee.length>160?`${ee.slice(0,160).trimEnd()}…`:ee;return i.jsxs("li",{className:"home-community-point",children:[i.jsxs("div",{className:"home-community-point-body",children:[i.jsx("span",{className:"home-community-point-cat",children:R.category_name}),i.jsx("div",{className:"home-community-point-title",children:R.title}),R.category_slug==="water"&&R.water_is_potable!=null?i.jsx("span",{className:`home-community-point-chip${R.water_is_potable?" home-community-point-chip--ok":""}`,children:R.water_is_potable?"مياه صالحة للشرب":"مياه غير صالحة للشرب"}):null,R.institution_scope?i.jsx("span",{className:"home-community-point-chip home-community-point-chip--muted",children:R.institution_scope_label||R.institution_scope}):null,ae?i.jsx("p",{className:"home-community-point-desc",children:ae}):null,R.address_text?i.jsx("p",{className:"home-community-point-address",children:R.address_text}):null]}),K?i.jsxs("button",{type:"button",className:"home-community-point-mapbtn",onClick:()=>{const pe=Vs(R);pe&&n("/map",{state:{mapFocus:{lat:pe[0],lng:pe[1],communityPointId:R.id},mapPreset:{mode:"community",cc:R.category??null,q:R.title??""}}})},children:[i.jsx(Ln,{size:16,strokeWidth:2,"aria-hidden":!0}),"على الخريطة"]}):null]},R.id)})})]}):null]}),i.jsx("div",{className:`ads-section${ne==="stores"?" ads-section--panel":""}`,ref:h,children:ne==="community"?i.jsx("div",{className:"home-community-ads-footnote card",children:i.jsxs("p",{className:"home-community-ads-footnote-text",children:["لتفاصيل أكثر أو اقتراح نقطة جديدة:"," ",i.jsx(ke,{to:"/services",className:"home-community-ads-footnote-link",children:"صفحة الخدمات المجتمعية"})]})}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"nearby-head flex-between",children:[i.jsx("h3",{className:"nearby-title",children:$!=null?`المتاجر القريبة — ${((te=T.find(R=>Number(R.id)===Number($)))==null?void 0:te.name)||"القسم المختار"}`:"المتاجر القريبة"}),i.jsx("div",{className:"nearby-filter-option",children:i.jsxs("label",{className:"nearby-map-toggle",children:[i.jsx("input",{type:"checkbox",className:"nearby-map-toggle-input",checked:q,onChange:R=>ce(R.target.checked)}),i.jsx("span",{className:"nearby-map-toggle-track","aria-hidden":!0}),i.jsxs("span",{className:"nearby-map-toggle-copy",children:[i.jsx("span",{className:"nearby-map-toggle-title",children:"المتاجر على الخريطة فقط"}),i.jsx("span",{className:"nearby-map-toggle-hint",children:"مفعّل: تُخفى المحلات بدون نقطة على الخريطة. معطّل: تظهر كل النتائج."})]})]})})]}),U?i.jsx("p",{className:"nearby-loading",children:"جاري تحميل المتاجر..."}):An.length>0?i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"nearby-rail",children:Gr.map(R=>{const K=rd(R,T),ee=A&&zl(R)?hu(A,[Number(R.latitude),Number(R.longitude)]):null,ae=Ls(R.business_hours_weekly)&&R.is_open_now===!0?"مفتوح":Ls(R.business_hours_weekly)&&R.is_open_now===!1?"مغلق":null;return i.jsxs(ke,{to:`/stores/${R.id}`,className:"nearby-card",children:[i.jsxs("div",{className:"nearby-card-main",children:[i.jsxs("div",{className:"nearby-card-text",children:[i.jsx("span",{className:"nearby-card-name",children:R.store_name}),R.category_name?i.jsx("span",{className:"nearby-card-cat",children:R.category_name}):null,i.jsx("span",{className:"nearby-card-dist",children:ee!=null?i.jsxs(i.Fragment,{children:["📍 ",ee.toFixed(1)," كم"]}):i.jsx(i.Fragment,{children:"بدون مسافة"})})]}),ae?i.jsx("span",{className:"nearby-card-status",children:ae}):null]}),i.jsx("div",{className:"nearby-card-thumb",children:K.type==="image"?i.jsx("img",{className:"nearby-card-thumb-img",src:K.url,alt:""}):i.jsx("span",{className:"nearby-card-thumb-emoji",style:{background:K.bg},children:K.emoji})})]},R.id)})}),Xt>1?i.jsxs("div",{className:"home-pagination",role:"navigation","aria-label":"صفحات المتاجر",children:[i.jsx("button",{type:"button",className:"home-pagination-btn",disabled:_n<=1,onClick:()=>I(R=>Math.max(1,R-1)),children:"السابق"}),i.jsxs("span",{className:"home-pagination-meta",children:[_n," / ",Xt]}),i.jsx("button",{type:"button",className:"home-pagination-btn",disabled:_n>=Xt,onClick:()=>I(R=>Math.min(Xt,R+1)),children:"التالي"})]}):null,Xt>1?i.jsx("div",{className:"scroll-dots scroll-dots--pages","aria-label":"صفحات المتاجر",role:"tablist",children:Array.from({length:Xt}).slice(0,12).map((R,K)=>{const ee=K+1;return i.jsx("button",{type:"button",className:`scroll-dot${ee===_n?" scroll-dot--active":""}`,"aria-label":`صفحة ${ee}`,"aria-selected":ee===_n,onClick:()=>I(ee)},ee)})}):null]}):i.jsx("p",{className:"nearby-empty",children:"لا توجد متاجر ضمن الفلتر. جرّب «الكل» أو ألغِ «على الخريطة فقط» لرؤية متاجر بدون موقع. للبحث بالاسم استخدم مربع البحث في أعلى الصفحة (قسم الترحيب)."})]})}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
            grid-template-rows: 76px 1fr;
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
            padding: 8px 10px 10px;
            gap: 4px;
            min-height: 92px;
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
            gap: 10px;
            overflow: visible;
          }
          @media (min-width: 640px) {
            .home-offers-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 10px;
            }
          }
          @media (min-width: 900px) {
            .home-offers-grid {
              grid-template-columns: repeat(3, 1fr);
              gap: 10px;
            }
          }
          @media (min-width: 1100px) {
            .home-offers-grid {
              grid-template-columns: repeat(4, 1fr);
              gap: 10px;
            }
          }
          @media (min-width: 1320px) {
            .home-offers-grid {
              grid-template-columns: repeat(5, 1fr);
              gap: 10px;
            }
          }
          .home-offer-card {
            width: 100%;
            min-width: 0;
            border-radius: 13px;
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
            height: 76px;
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
            padding: 8px 10px 9px;
            display: flex;
            flex-direction: column;
            gap: 3px;
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
        `}})]})]})},Xp=({title:e,message:t})=>{const n=Nt();return i.jsxs("div",{className:"guest-access-prompt card flex-center",style:{flexDirection:"column",padding:"60px 40px",textAlign:"center",maxWidth:"500px",margin:"40px auto"},children:[i.jsx("div",{className:"icon-badge flex-center",style:{width:"80px",height:"80px",background:"rgba(30,190,165,0.1)",borderRadius:"50%",marginBottom:"25px",color:"var(--primary)"},children:i.jsx(Nj,{size:40})}),i.jsx("h2",{style:{marginBottom:"12px",color:"var(--secondary)"},children:e||"عذراً، هذه الميزة للمشتركين فقط"}),i.jsx("p",{style:{color:"#666",marginBottom:"30px",lineHeight:"1.6"},children:t||"يجب عليك إنشاء حساب أو تسجيل الدخول لتتمكن من استخدام هذه الميزة والاستمتاع بكافة خدمات رادار."}),i.jsxs("div",{className:"flex-center",style:{gap:"15px",width:"100%"},children:[i.jsxs(Ht,{onClick:()=>n("/login"),style:{flex:1,height:"50px"},variant:"secondary",confirm:"الانتقال إلى صفحة تسجيل الدخول؟",showErrorAlert:!1,children:[i.jsx(Up,{size:18,style:{marginLeft:"8px"}})," تسجيل الدخول"]}),i.jsxs(Ht,{onClick:()=>n("/register"),style:{flex:1,height:"50px"},confirm:"الانتقال إلى صفحة إنشاء حساب؟",showErrorAlert:!1,children:[i.jsx(wv,{size:18,style:{marginLeft:"8px"}})," إنشاء حساب"]})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
                .guest-access-prompt { border: 1px solid #eee; border-radius: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
                .icon-badge { animation: pulse 2s infinite; }
                @keyframes pulse {
                    0% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.1); opacity: 0.8; }
                    100% { transform: scale(1); opacity: 1; }
                }
            `}})]})},E8=()=>{var x,v;const[e,t]=f.useState("products"),[n,a]=f.useState(null),[o,l]=f.useState([]),[c,h]=f.useState(!0),[u,m]=f.useState(localStorage.getItem("isGuest")==="true");f.useEffect(()=>{(async()=>{try{const[_,j]=await Promise.all([Kv(),Gp()]);a(_),l(j)}catch(_){console.error("Error fetching dashboard data:",_)}finally{h(!1)}})()},[]);const g=[{label:"زوار الصفحة",value:(n==null?void 0:n.visitor_count)||"0",icon:i.jsx(bc,{size:24,color:"#FFCC00"})},{label:"الأكثر إضافة للسلة",value:((v=(x=n==null?void 0:n.top_products)==null?void 0:x[0])==null?void 0:v.product__name)||"قريباً",icon:i.jsx(bi,{size:24,color:"#FFCC00"})},{label:"الاشتراك المتبقي",value:"30 يوم",icon:i.jsx($a,{size:24,color:"#FFCC00"})}];return i.jsx(Be,{children:i.jsxs("div",{className:"dashboard-container",children:[u?i.jsx(Xp,{title:"لوحة التحكم خاصة بالتجار فقط",message:"يجب عليك إنشاء حساب تاجر لتتمكن من إضافة المنتجات، متابعة الإحصائيات، وطلب الإعلانات الممولة لمكانك."}):i.jsxs(i.Fragment,{children:[i.jsx("h1",{children:"لوحة تحكم التاجر"}),i.jsx("div",{className:"stats-grid",children:g.map((b,_)=>i.jsxs("div",{className:"stat-card card flex-center",style:{justifyContent:"space-between"},children:[i.jsxs("div",{className:"stat-info",children:[i.jsx("p",{children:b.label}),i.jsx("h3",{children:b.value})]}),i.jsx("div",{className:"stat-icon-box",children:b.icon})]},_))}),i.jsxs("div",{className:"dashboard-content card",children:[i.jsxs("div",{className:"tabs flex-center",children:[i.jsx("button",{className:`tab-btn ${e==="products"?"active":""}`,onClick:()=>t("products"),children:"منتجاتي"}),i.jsx("button",{className:`tab-btn ${e==="ads"?"active":""}`,onClick:()=>t("ads"),children:"طلب إعلان ممول"}),i.jsx("button",{className:`tab-btn ${e==="settings"?"active":""}`,onClick:()=>t("settings"),children:"إعدادات المتجر"})]}),i.jsxs("div",{className:"tab-pane",children:[e==="products"&&i.jsxs("div",{className:"products-pane",children:[i.jsxs("button",{className:"btn-primary",style:{width:"auto",marginBottom:"20px"},children:[i.jsx(Vc,{size:20})," إضافة منتج جديد"]}),i.jsx("div",{className:"products-table",children:c?i.jsx("p",{children:"جاري تحميل المنتجات..."}):o.length>0?i.jsx("div",{className:"products-grid",style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(min(200px, 100%), 1fr))",gap:"15px"},children:o.map(b=>i.jsxs("div",{className:"card product-item",style:{padding:"10px",textAlign:"center"},children:[i.jsx("h4",{children:b.name}),i.jsxs("p",{style:{color:"var(--secondary)",fontWeight:"bold"},children:[b.price," ₪"]})]},b.id))}):i.jsx("p",{children:"لا توجد منتجات حالياً. ابدأ بإضافة أول منتج لمتجرك!"})})]}),e==="ads"&&i.jsxs("div",{className:"ads-pane",children:[i.jsx("h3",{children:"اطلب إعلان ممول"}),i.jsx("p",{children:"اجعل متجرك يظهر في الواجهة الرئيسية بجانب المتاجر الكبرى."}),i.jsxs("form",{style:{marginTop:"20px"},onSubmit:b=>b.preventDefault(),children:[i.jsx("div",{className:"input-group",children:i.jsx("input",{type:"text",placeholder:"عنوان الإعلان"})}),i.jsx("div",{className:"input-group",children:i.jsx("textarea",{placeholder:"وصف الإعلان",style:{width:"100%",padding:"10px",borderRadius:"12px",border:"1px solid #eee"}})}),i.jsxs("button",{className:"btn-primary",type:"button",children:[i.jsx(Rr,{size:20})," طلب الإعلان الآن"]})]})]})]})]})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        `}})]})})},L8=()=>{const[e,t]=f.useState(null),[n,a]=f.useState(null),[o,l]=f.useState(!0),c=localStorage.getItem("user_name")||"تاجرنا";f.useEffect(()=>{(async()=>{try{const[j,P]=await Promise.all([Kv(),Qv()]);t(j),a(P)}finally{l(!1)}})()},[]);const h=f.useMemo(()=>{if(!(n!=null&&n.end_date))return null;const _=new Date(n.end_date).getTime(),j=Date.now(),P=Math.ceil((_-j)/(1e3*60*60*24));return Number.isFinite(P)?P:null},[n]),u=(e==null?void 0:e.product_insights)??[],m=(e==null?void 0:e.summary)??{},{maxCart:g,maxFav:x}=f.useMemo(()=>u.length?{maxCart:Math.max(1,...u.map(_=>_.in_carts_quantity)),maxFav:Math.max(1,...u.map(_=>_.favorites_count))}:{maxCart:1,maxFav:1},[u]),v=[{label:"زيارات متجرك اليوم",value:o?"…":(e==null?void 0:e.visitor_count)??0,hint:"عدد فتحات صفحة المتجر",icon:i.jsx(bc,{size:22,strokeWidth:2.2})},{label:"وحدات في سلال الزبائن",value:o?"…":m.total_units_in_carts??0,hint:"مجموع الكميات المضافة لسلال المشتريات",icon:i.jsx(wi,{size:22,strokeWidth:2.2})},{label:"تسجيلات مفضلة على منتجاتك",value:o?"…":m.total_favorite_marks??0,hint:"عدد مرات أضيف فيها منتج للمفضلة",icon:i.jsx(gi,{size:22,strokeWidth:2.2})},{label:"منتجاتك النشطة",value:o?"…":m.active_products??0,hint:"غير مؤرشفة وظاهرة للزبائن",icon:i.jsx(bi,{size:22,strokeWidth:2.2})}],b=h==null?null:Math.max(h,0);return i.jsx(Be,{children:i.jsxs("div",{className:"merchant-dashboard",children:[i.jsxs("header",{className:"mdash-hero card",children:[i.jsxs("div",{className:"mdash-hero-text",children:[i.jsxs("p",{className:"mdash-kicker",children:[i.jsx(Gn,{size:16})," مرحباً ",c]}),i.jsx("h1",{children:"لوحة تحكم متجرك"}),i.jsxs("p",{className:"mdash-lead",children:["لمحة سريعة عن اهتمام الزبائن بمنتجاتك — ",i.jsx("strong",{children:"السلة"})," تعكس رغبة الشراء، و",i.jsx("strong",{children:"المفضلة"})," ","تعكس الاهتمام. راقب البسيط واتخذ قرارات أوضح."]})]}),i.jsxs("div",{className:"mdash-hero-stat",children:[i.jsx("div",{className:"mdash-mini-label",children:"الاشتراك"}),i.jsx("div",{className:"mdash-mini-value",children:o?"…":b==null?"—":`${b} يوم`}),i.jsx($a,{size:18,className:"mdash-hero-clock"})]})]}),i.jsx("section",{className:"mdash-kpis",children:v.map((_,j)=>i.jsxs("div",{className:"card mdash-kpi",children:[i.jsxs("div",{className:"mdash-kpi-top",children:[i.jsx("div",{className:"mdash-kpi-icon",children:_.icon}),i.jsx("div",{className:"mdash-kpi-label",children:_.label})]}),i.jsx("div",{className:"mdash-kpi-value",children:_.value}),i.jsx("p",{className:"mdash-kpi-hint",children:_.hint})]},j))}),i.jsxs("section",{className:"card mdash-insights",children:[i.jsxs("div",{className:"mdash-insights-head",children:[i.jsxs("div",{children:[i.jsxs("h2",{children:[i.jsx(zj,{size:22,className:"inline-icon"})," تحليلات المنتجات"]}),i.jsx("p",{className:"mdash-insights-sub",children:"ترتيب حسب إجمالي الكمية في السلال ثم المفضلة — بيانات من نشاط المتسوقين الحقيقي."})]}),i.jsx(ke,{to:"/merchant/products",className:"mdash-link-products",children:"إدارة المنتجات"})]}),o?i.jsx("p",{className:"mdash-muted",children:"جاري التحميل…"}):u.length===0?i.jsxs("div",{className:"mdash-empty",children:[i.jsx(bi,{size:40,strokeWidth:1.5}),i.jsx("p",{children:"لا توجد منتجات نشطة بعد، أو لم يُسجَّل نشاط على السلة والمفضلة."}),i.jsx(ke,{to:"/merchant/products/new",className:"mdash-btn-outline",children:"إضافة منتج"})]}):i.jsx("div",{className:"mdash-table-wrap",children:i.jsxs("table",{className:"mdash-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"المنتج"}),i.jsx("th",{children:"في السلال (الكمية)"}),i.jsx("th",{children:"المفضلة"})]})}),i.jsx("tbody",{children:u.map(_=>i.jsxs("tr",{children:[i.jsx("td",{className:"mdash-td-name",children:_.name}),i.jsx("td",{children:i.jsxs("div",{className:"mdash-bar-cell",children:[i.jsx("div",{className:"mdash-bar-fill mdash-bar-cart",style:{width:`${Math.round(_.in_carts_quantity/g*100)}%`}}),i.jsx("span",{className:"mdash-bar-num",children:_.in_carts_quantity})]})}),i.jsx("td",{children:i.jsxs("div",{className:"mdash-bar-cell",children:[i.jsx("div",{className:"mdash-bar-fill mdash-bar-fav",style:{width:`${Math.round(_.favorites_count/x*100)}%`}}),i.jsx("span",{className:"mdash-bar-num",children:_.favorites_count})]})})]},_.id))})]})})]}),i.jsxs("section",{className:"card mdash-tip",children:[i.jsx("h3",{children:"ملاحظة سريعة"}),i.jsxs("p",{children:["من ",i.jsx("strong",{children:"القائمة الجانبية"})," تدير المنتجات، الإعلانات الممولة، والاشتراك. كلما زاد ظهور منتجاتك جودةً ووضوحاً، غالباً تتحسن أرقام السلة والمفضلة."]})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        `}})]})})},M8=()=>{const[e,t]=f.useState([]),[n,a]=f.useState(!0),o=async()=>{a(!0);try{const h=await Gp();t(h)}finally{a(!1)}};f.useEffect(()=>{o()},[]);const l=async h=>{await Yv(h.id,{is_archived:!h.is_archived}),await o()},c=async h=>{confirm("متأكد بدك تحذف المنتج نهائياً؟")&&(await E4(h.id),await o())};return i.jsx(Be,{children:i.jsxs("div",{className:"merchant-products",children:[i.jsxs("div",{className:"flex-between",style:{marginBottom:16},children:[i.jsx("h1",{style:{fontSize:"1.8rem"},children:"منتجاتي"}),i.jsxs(ke,{to:"/merchant/products/new",className:"btn-primary",style:{width:"auto",display:"inline-flex",gap:10,alignItems:"center"},children:[i.jsx(Vc,{size:18}),"إضافة منتج"]})]}),i.jsxs("div",{className:"card",style:{marginBottom:14,padding:"12px 16px",background:"var(--primary-light)",borderColor:"rgba(245,192,0,0.45)",fontSize:"0.92rem",lineHeight:1.55,color:"var(--text-primary)"},children:[i.jsx("strong",{children:"مهم:"})," المنتجات ذات الحالة «مؤرشف» لا تظهر في صفحة المتجر للمتسوّقين ولا على الخريطة كقائمة منتجات. اضغط أيقونة الأرشيف بجانب المنتج لإلغاء الأرشفة وجعله «نشطاً»."]}),i.jsx("div",{className:"card",style:{padding:0,overflow:"hidden"},children:n?i.jsx("div",{style:{padding:18},children:"جاري التحميل..."}):e.length===0?i.jsx("div",{style:{padding:18},children:"لا يوجد منتجات بعد."}):i.jsxs("div",{className:"table",children:[i.jsxs("div",{className:"row head",children:[i.jsx("div",{children:"المنتج"}),i.jsx("div",{children:"السعر"}),i.jsx("div",{children:"الحالة"}),i.jsx("div",{children:"إجراءات"})]}),e.map(h=>i.jsxs("div",{className:"row product-row",children:[i.jsxs("div",{className:"cell productCell",children:[i.jsx("div",{className:"product-thumb-wrap",children:Xe(h).length>0?i.jsx(Ut,{images:Xe(h),alt:h.name,height:76,borderRadius:14}):i.jsx("div",{className:"thumb thumb-empty",children:i.jsx(cn,{size:18})})}),i.jsxs("div",{className:"product-text",children:[i.jsx("div",{className:"product-name",children:h.name}),i.jsx("div",{className:"product-desc",children:h.description||"—"})]})]}),i.jsxs("div",{className:"product-row-meta",children:[i.jsx("div",{className:"cell cell-price","data-label":"السعر",children:i.jsxs("span",{className:"price-value",children:[h.price," ₪"]})}),i.jsxs("div",{className:"cell cell-status","data-label":"الحالة",children:[i.jsx("span",{className:"badge",style:{background:h.is_archived?"#eee":"var(--primary)",color:"var(--secondary)"},children:h.is_archived?"مؤرشف":"نشط"}),h.is_archived&&i.jsx("div",{className:"archived-hint",children:"مخفي عن صفحة المتجر"})]})]}),i.jsxs("div",{className:"cell actions","data-label":"إجراءات",children:[i.jsx(ke,{to:`/merchant/products/${h.id}/edit`,className:"iconBtn",title:"تعديل",children:i.jsx(Wp,{size:18})}),h.is_archived?null:i.jsx(ke,{to:"/merchant/ads",state:{prefillFromProduct:{id:h.id,name:h.name||"",description:(h.description||"").trim(),price:h.price,image:h.image||null,images:Xe(h)}},className:"iconBtn",title:"إعلان ممول لهذا المنتج","aria-label":"إعلان ممول لهذا المنتج",children:i.jsx(Rr,{size:18})}),i.jsx("button",{type:"button",className:"iconBtn",onClick:()=>l(h),title:h.is_archived?"إلغاء الأرشفة":"أرشفة",children:i.jsx(O5,{size:18})}),i.jsx("button",{type:"button",className:"iconBtn danger",onClick:()=>c(h),title:"حذف",children:i.jsx($i,{size:18})})]})]},h.id))]})}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        `}})]})})};function w1({urls:e=[],max:t=5}){const n=(Array.isArray(e)?e:[]).filter(Boolean).slice(0,t);if(n.length===0)return null;const a=72;return i.jsxs("div",{style:{marginBottom:12},"aria-label":"معاينة الصور المحددة",children:[i.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:10,alignItems:"center"},children:n.map((o,l)=>i.jsxs("div",{style:{width:a,height:a,borderRadius:12,overflow:"hidden",border:"2px solid rgba(245, 192, 0, 0.55)",background:"var(--grey-light)",flexShrink:0,position:"relative",boxSizing:"border-box"},children:[i.jsx("img",{src:o,alt:"",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}),i.jsx("span",{style:{position:"absolute",top:4,insetInlineStart:4,minWidth:20,height:20,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:900,background:"rgba(30, 30, 46, 0.88)",color:"#fff",borderRadius:6,padding:"0 5px",lineHeight:1},children:l+1})]},`${l}-${o.slice(0,32)}`))}),i.jsxs("p",{style:{margin:"10px 0 0",fontSize:"0.82rem",fontWeight:800,color:"var(--text-secondary)"},children:[n.length," من ",t," صورة — الترتيب كما سيظهر في المتجر (الأولى غلاف)"]})]})}function e0(e){return`${e.name}-${e.size}-${e.lastModified}`}function _1(e,t,n){const a=new Set(e.map(e0)),o=[...e];let l=0;for(const c of t){if(o.length>=n){l+=1;continue}const h=e0(c);a.has(h)||(a.add(h),o.push(c))}return{merged:o,skippedForCap:l}}const T8=()=>i.jsx("span",{title:"الشيكل الجديد (₪)","aria-hidden":!0,style:{fontWeight:900,fontSize:"1.05rem",lineHeight:1,color:"var(--secondary)"},children:"₪"}),t0=3,Fo=5,Do=5,n0=()=>{const{showAlert:e,showConfirm:t}=qe(),{id:n}=po(),a=!!n,o=Nt(),[l,c]=f.useState(""),[h,u]=f.useState(""),[m,g]=f.useState(""),[x,v]=f.useState([""]),[b,_]=f.useState([]),[j,P]=f.useState([]),[N,w]=f.useState(!1),z=f.useMemo(()=>j.map(M=>URL.createObjectURL(M)),[j]);f.useEffect(()=>()=>{z.forEach(M=>URL.revokeObjectURL(M))},[z]);const C=j.length>0?z:b;f.useEffect(()=>{(async()=>{if(!a)return;const T=await P4(n);c(T.name||""),u(T.price??""),g(T.description||"");const W=Array.isArray(T.product_features)?T.product_features.filter(Boolean):[];v(W.length?W.slice(0,Do):[""]),_(Xe(T)),P([])})()},[n,a]);const I=M=>{if(!(M!=null&&M.length))return;const T=Array.from(M);if(T.find(U=>U.size/(1024*1024)>t0)){e(`حجم إحدى الصور كبير. الحد الأقصى ${t0}MB لكل صورة`,"تنبيه");return}P(U=>{const{merged:se,skippedForCap:de}=_1(U,T,Fo);return de>0&&e(`وصلت للحد الأقصى ${Fo} صور. لم تُضف ${de} ملفاً من هذه الجولة — احذف بـ «إلغاء الصور» أو أرسل ثم عدّل لاحقاً.`,"تنبيه"),se})},E=async M=>{M.preventDefault(),w(!0);try{const T=x.map(U=>String(U||"").trim()).filter(Boolean).slice(0,Do),W=new FormData;if(W.append("name",l),W.append("price",h),W.append("description",m),W.append("product_features",JSON.stringify(T)),a){if(j.length>0)for(const U of j)W.append("images",U);await Yv(n,W),await e("تم حفظ تعديلات المنتج.","تم")}else{for(const U of j)W.append("images",U);await z4(W),await e("تمت إضافة المنتج بنجاح.","تم")}o("/merchant/products")}catch(T){await e($e(T,a?"تعذر حفظ المنتج.":"تعذر إضافة المنتج."),"فشل")}finally{w(!1)}},k=async()=>{await t("إضافة سطر تفصيل جديد؟","تأكيد")&&(v(T=>T.length>=Do?T:[...T,""]),await e("تمت إضافة السطر.","تم"))},B=async M=>{await t("حذف هذا السطر من تفاصيل المنتج؟","تأكيد")&&(v(W=>{const U=W.filter((se,de)=>de!==M);return U.length?U:[""]}),await e("تم حذف السطر.","تم"))};return i.jsx(Be,{children:i.jsxs("div",{className:"merchant-product-form",children:[i.jsx("h1",{style:{marginBottom:14,fontSize:"1.8rem"},children:a?"تعديل منتج":"إضافة منتج"}),i.jsx("div",{className:"card",style:{maxWidth:720,margin:"0 auto"},children:i.jsxs("form",{onSubmit:E,children:[i.jsx(Dt,{icon:i.jsx(bi,{size:18}),placeholder:"اسم المنتج",value:l,onChange:M=>c(M.target.value),required:!0}),i.jsx(Dt,{icon:i.jsx(T8,{}),placeholder:"السعر بالشيكل (₪)",value:h,onChange:M=>u(M.target.value),required:!0}),i.jsxs("div",{className:"input-group",children:[i.jsx("div",{className:"input-icon",children:i.jsx(nv,{size:18})}),i.jsx("textarea",{placeholder:"وصف المنتج",value:m,onChange:M=>g(M.target.value),style:{width:"100%",padding:"0.85rem 1rem",borderRadius:"var(--radius-md)",border:"1.5px solid var(--border)",background:"var(--surface)",minHeight:110,resize:"vertical"}})]}),i.jsxs("div",{style:{marginTop:18,paddingTop:16,borderTop:"1px solid var(--border)"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:8,fontWeight:800},children:[i.jsx(Gn,{size:18}),"تفاصيل المنتج (اختياري — حتى ",Do,")"]}),i.jsx("p",{style:{margin:"0 0 10px",fontSize:"0.88rem",color:"var(--text-secondary)",lineHeight:1.55},children:"اكتب تفاصيل قصيرة تظهر للمتسوّق (مثل: المقاس، اللون، الخامة…). كل سطر = تفصيل واحد."}),x.map((M,T)=>i.jsxs("div",{style:{display:"flex",gap:8,marginBottom:8,alignItems:"center"},children:[i.jsx("input",{type:"text",value:M,maxLength:80,placeholder:`تفصيل ${T+1}`,onChange:W=>{const U=W.target.value;v(se=>se.map((de,he)=>he===T?U:de))},style:{flex:1,padding:"0.75rem 0.9rem",borderRadius:"var(--radius-md)",border:"1.5px solid var(--border)",background:"var(--surface)"}}),x.length>1?i.jsx("button",{type:"button",onClick:()=>B(T),style:{padding:"8px 10px",borderRadius:10,border:"1px solid var(--border)",background:"var(--surface)",cursor:"pointer",fontWeight:700},children:"حذف"}):null]},T)),x.length<Do?i.jsx("button",{type:"button",onClick:k,style:{marginTop:4,padding:"8px 14px",borderRadius:10,border:"1px dashed var(--border)",background:"transparent",cursor:"pointer",fontWeight:700,color:"var(--secondary)"},children:"+ إضافة تفصيل"}):null]}),i.jsxs("div",{className:"card",style:{padding:14,marginBottom:14,background:"var(--surface)"},children:[i.jsx("div",{style:{fontWeight:900,marginBottom:6},children:"صور المنتج (معرض واحد)"}),i.jsxs("p",{style:{margin:"0 0 12px",fontSize:"0.9rem",color:"var(--text-secondary)",lineHeight:1.5},children:["يمكنك إضافة حتى ",i.jsxs("strong",{children:[Fo," صور"]}),". اختر من المعرض عدة مرات — كل اختيار ",i.jsx("strong",{children:"يُضاف"})," ","للصور الحالية حتى يكتمل العدد، وليس استبدالاً لها. يمكنك اختيار عدة ملفات دفعة واحدة أيضاً (Ctrl أو ⌘)."," ",a?"عند الإرسال بصور جديدة تُستبدل صور المتجر السابقة كلها بهذه المجموعة.":null]}),C.length>0?i.jsxs("div",{style:{marginBottom:12},children:[i.jsx(w1,{urls:C,max:Fo}),i.jsx(Ut,{images:C,alt:"",height:152,borderRadius:14})]}):i.jsx("div",{className:"thumbLg",style:{marginBottom:12,width:"100%",maxWidth:280,height:160,borderRadius:20,marginInline:"auto"},children:i.jsx(cn,{size:36})}),i.jsxs("label",{className:"iconBtn merchant-file-pick-label",style:{cursor:"pointer",display:"inline-flex",gap:8,position:"relative",overflow:"hidden",alignItems:"center"},children:[i.jsx(cn,{size:18}),a?"اختر صوراً جديدة (تستبدل الحالي)":`اختر الصور (حتى ${Fo})`,i.jsx("input",{type:"file",accept:"image/*,.jpg,.jpeg,.png,.webp,.heif,.heic",multiple:!0,style:{position:"absolute",inset:0,width:"100%",height:"100%",opacity:0,cursor:"pointer",fontSize:"inherit",zIndex:2},onChange:M=>{const T=M.target.files;T!=null&&T.length&&I(T),M.target.value=""}})]}),j.length>0?i.jsx("button",{type:"button",className:"iconBtn",style:{marginInlineStart:10,background:"transparent"},onClick:async()=>{await t("إلغاء الصور الجديدة المختارة للاستبدال؟","تأكيد")&&(P([]),await e("تم إلغاء اختيار الصور.","تم"))},children:"إلغاء الصور المختارة"}):null]}),i.jsx(Ht,{type:"submit",loading:N,style:{width:"100%"},confirm:!1,showErrorAlert:!1,children:a?"حفظ التعديل":"إضافة المنتج"})]})}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        `}})]})})},ka=3,Pr=5;function fu(e){return e?Xe(e).length>0:!1}function r0(e){return e==null||typeof e!="string"?"":e.trim().toLowerCase().replace(/\u0640/g,"").replace(/[\u064B-\u0652\u0670]/g,"").replace(/[أإآٱ]/g,"ا").replace(/ى/g,"ي").replace(/ة/g,"ه")}function A8(e,t){const n=r0(t);return!!(!n||[e==null?void 0:e.name,e==null?void 0:e.description,...(Array.isArray(e==null?void 0:e.product_features)?e.product_features:[]).map(o=>String(o??""))].some(o=>r0(o).includes(n))||String((e==null?void 0:e.price)??"").includes(t.trim())||String((e==null?void 0:e.id)??"")===t.trim())}const Uo="balipay_wallet",mu="bank_palestine";async function i0(e,t="product"){if(!e||typeof e!="string")return null;try{const n=await fetch(e,{mode:"cors",credentials:"include"});if(!n.ok)return null;const a=await n.blob();if(!a.size)return null;const o=a.type&&a.type.split("/")[1]||"jpg",l=String(t||"product").replace(/[^\w\u0600-\u06FF-]/g,"").slice(0,48)||"product";return new File([a],`${l}-ad.${o}`,{type:a.type||"image/jpeg"})}catch{return null}}const I8=()=>{const{showAlert:e}=qe(),t=wn(),n=Nt(),a=f.useRef(null),[o,l]=f.useState(""),[c,h]=f.useState(""),[u,m]=f.useState(""),[g,x]=f.useState(Uo),[v,b]=f.useState([]),[_,j]=f.useState(null),[P,N]=f.useState(!1),[w,z]=f.useState([]),[C,I]=f.useState(""),[E,k]=f.useState("");f.useEffect(()=>{var ce;const A=(ce=t.state)==null?void 0:ce.prefillFromProduct;if(!A||A.id==null)return;I(String(A.id)),l(String(A.name||"").trim()),h(String(A.description||"").trim()),m(A.price!=null&&A.price!==""?String(A.price):""),k(""),b([]),n(t.pathname,{replace:!0,state:{}});const ie=Array.isArray(A.images)&&A.images.length>0?A.images:A.image?[A.image]:[];ie.length>0&&Promise.all(ie.slice(0,Pr).map((ne,ue)=>i0(ne,`${A.name||"ad"}-${ue}`))).then(ne=>{b(ne.filter(Boolean))});const q=window.setTimeout(()=>{var ne;(ne=a.current)==null||ne.scrollIntoView({behavior:"smooth",block:"start"})},150);return()=>window.clearTimeout(q)},[t.state,t.pathname,n]),f.useEffect(()=>{let A=!1;return(async()=>{try{const ie=await Gp(),q=Array.isArray(ie)?ie:(ie==null?void 0:ie.results)??[];A||z(q.filter(ce=>!ce.is_archived))}catch{A||z([])}})(),()=>{A=!0}},[]);const B=f.useMemo(()=>v.map(A=>URL.createObjectURL(A)),[v]);f.useEffect(()=>()=>{B.forEach(A=>URL.revokeObjectURL(A))},[B]);const M=f.useMemo(()=>_?URL.createObjectURL(_):"",[_]),T=f.useMemo(()=>C?w.find(A=>String(A.id)===String(C))??null:null,[w,C]),W=!C||fu(T),U=!C||(T?!fu(T):!0),se=f.useMemo(()=>{const A=E.trim();let ie=w;A&&(ie=w.filter(ce=>A8(ce,A)));const q=C?w.find(ce=>String(ce.id)===String(C)):null;return q&&!ie.some(ce=>ce.id===q.id)&&(ie=[q,...ie]),ie},[w,E,C]),de=A=>{const ie=A.target.value;if(I(ie),!ie){b([]);return}const q=w.find(ne=>String(ne.id)===ie);if(!q)return;l(ne=>ne.trim()?ne:q.name||""),h(ne=>ne.trim()?ne:String(q.description||"").trim()),m(ne=>ne.trim()?ne:String(q.price??""));const ce=Xe(q);ce.length>0?Promise.all(ce.slice(0,Pr).map((ne,ue)=>i0(ne,`${q.name||"ad"}-${ue}`))).then(ne=>{b(ne.filter(Boolean))}):b([])},he=A=>{if(!(A!=null&&A.length))return;const ie=Array.from(A);if(ie.find(ce=>ce.size/(1024*1024)>ka)){e(`حجم إحدى الصور كبير. الحد الأقصى ${ka}MB لكل صورة`,"تنبيه");return}b(ce=>{const{merged:ne,skippedForCap:ue}=_1(ce,ie,Pr);return ue>0&&e(`وصلت للحد الأقصى ${Pr} صور للإعلان. لم تُضف ${ue} ملفاً من هذه الجولة.`,"تنبيه"),ne})},le=A=>{if(!A)return;if(A.size/(1024*1024)>ka){e(`حجم الصورة كبير. الحد الأقصى ${ka}MB`,"تنبيه");return}j(A)},V=async A=>{if(A.preventDefault(),U&&v.length===0){await e("اختر صوراً للإعلان، أو اربط الطلب بمنتج له صور في «منتجاتي» لنسخها تلقائياً على السيرفر.","تنبيه");return}if(W&&!c.trim()){await e("يرجى إدخال تفاصيل الإعلان.","تنبيه");return}if(!_){await e("لازم ترفع إشعار دفع الإعلان","تنبيه");return}const ie=parseFloat(String(u).replace(",","."));if(!Number.isFinite(ie)||ie<=0){await e("أدخل سعر المنتج المعروض في الإعلان (رقم أكبر من صفر)","تنبيه");return}N(!0);try{const q=new FormData;q.append("title",o),q.append("description",c.trim()),C&&q.append("product",String(C)),q.append("product_price",String(ie)),q.append("payment_method",g);for(const ce of v)q.append("images",ce);q.append("payment_receipt_image",_),await M4(q),l(""),h(""),m(""),I(""),k(""),x(Uo),b([]),j(null),await e("تم إرسال الطلب بنجاح. سيتم المراجعة خلال 24 ساعة.","تم")}catch(q){await e($e(q,"تعذر إرسال الطلب. تحقق من الاتصال والبيانات."),"فشل")}finally{N(!1)}};return i.jsx(Be,{children:i.jsxs("div",{className:"merchant-ads",children:[i.jsxs("div",{className:"flex-between",style:{marginBottom:14,flexWrap:"wrap",gap:12},children:[i.jsx("h1",{style:{fontSize:"1.8rem",margin:0},children:"طلب إعلان ممول"}),i.jsx(ke,{to:"/merchant/my-ads",className:"iconBtn",style:{textDecoration:"none"},children:"إعلاناتي الممولة"})]}),i.jsxs("div",{className:"card",style:{maxWidth:820,margin:"0 auto 18px auto"},children:[i.jsx("h3",{style:{marginBottom:10},children:"طلب إعلان ممول"}),i.jsxs("div",{className:"card",style:{padding:"14px 16px",marginBottom:16,background:"linear-gradient(135deg, #FFF9E6 0%, #fff 100%)",border:"1px solid rgba(245,192,0,0.35)",borderRadius:14,lineHeight:1.65,fontSize:"0.95rem"},children:[i.jsx("strong",{style:{color:"var(--secondary)"},children:"تنبيه مهم:"})," رسوم الإعلان الممول"," ",i.jsx("strong",{children:"5 شيكل"})," تُسدَّد عبر القناة التي تختارها أدناه، ومدة ظهور الإعلان بعد قبول الإدارة"," ",i.jsx("strong",{children:"24 ساعة"})," فقط. يمكنك إما ربط الإعلان بمنتج من صفحة «منتجاتي»، أو ترك الإعلان مستقلاً."]}),i.jsxs("div",{className:"card",style:{padding:"14px 16px",marginBottom:16,background:"linear-gradient(135deg, rgba(230, 239, 232, 0.9) 0%, #fff 100%)",border:"1px solid rgba(2, 119, 189, 0.22)",borderRadius:14,lineHeight:1.65,fontSize:"0.95rem"},children:[i.jsx("strong",{style:{color:"var(--secondary)"},children:"ملاحظة التحويل:"})," رقم التحويل الخاص بـ"," ",i.jsx("strong",{children:"رادار"})," هو ",i.jsx("strong",{dir:"ltr",children:"0592377078"})," باسم ",i.jsx("strong",{children:"اسماعيل عبدالعال"})," ","(بنك ومحفظة). سيتم الرد على طلبك خلال ",i.jsx("strong",{children:"24 ساعة"}),"."]}),i.jsxs("form",{ref:a,onSubmit:V,children:[i.jsx(Dt,{icon:i.jsx(Rr,{size:18}),placeholder:"عنوان الإعلان",value:o,onChange:A=>l(A.target.value),required:!0}),i.jsxs("div",{style:{marginBottom:14},children:[i.jsx("div",{style:{fontWeight:900,marginBottom:8},children:"ربط اختياري بمنتج من «منتجاتي»"}),i.jsxs("p",{style:{margin:"0 0 8px",fontSize:"0.88rem",color:"var(--text-secondary)"},children:["اترك القائمة على «إعلان مستقل» أو اختر منتجاً (غير مؤرشف). عند الاختيار نملأ العنوان والوصف والسعر، ونحاول جلب حتى ",Pr," صور من معرض المنتج للمعاينة. منتج بلا صور: يمكنك رفع صور الإعلان وتفاصيل الإعلان اختيارية."]}),i.jsx(Dt,{type:"search",autoComplete:"off",enterKeyHint:"search",icon:i.jsx(Ps,{size:18}),placeholder:"ابحث باسم المنتج، الوصف، السعر…",value:E,onChange:A=>k(A.target.value),onKeyDown:A=>{A.key==="Enter"&&A.preventDefault()}}),i.jsxs("select",{value:C,onChange:de,style:{width:"100%",padding:"0.85rem 1rem",borderRadius:"var(--radius-md)",border:"1.5px solid var(--border)",background:"var(--surface)",fontSize:"0.95rem",fontFamily:"inherit",marginTop:8},children:[i.jsx("option",{value:"",children:"— إعلان مستقل (بدون منتج في الكتالوج) —"}),se.map(A=>i.jsxs("option",{value:A.id,children:[A.name," — ",A.price," ₪"]},A.id))]}),w.length>0&&se.length===0?i.jsxs("p",{style:{marginTop:8,fontSize:"0.85rem",color:"var(--text-secondary)"},children:["لا نتائج مطابقة لـ «",E.trim(),"». جرّب بحثاً أقصر أو امسح الحقل لعرض الكل."]}):null,w.length===0?i.jsx("p",{style:{marginTop:8,fontSize:"0.85rem",color:"var(--text-secondary)"},children:"لا توجد منتجات بعد — يمكنك هذا الطلب كإعلان مستقل، أو أضف منتجات من «منتجاتي» لاحقاً لربط إعلاناتك بها."}):null]}),i.jsx(Dt,{type:"number",inputMode:"decimal",step:"0.01",min:"0.01",placeholder:"سعر المنتج المعروض في الإعلان (₪)",value:u,onChange:A=>m(A.target.value),required:!0}),i.jsxs("div",{className:"payment-method-block",style:{marginBottom:16},children:[i.jsx("div",{style:{fontWeight:900,marginBottom:8},children:"قناة دفع رسوم الإعلان"}),i.jsxs("div",{className:"payment-method-switch",role:"group","aria-label":"طريقة الدفع",style:{display:"grid",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",borderRadius:14,overflow:"hidden",border:"1.5px solid var(--border)",background:"var(--surface)"},children:[i.jsx("button",{type:"button",onClick:()=>x(Uo),style:{padding:"12px 8px",border:"none",cursor:"pointer",fontWeight:800,fontFamily:"inherit",fontSize:"clamp(0.76rem, 2.8vw, 0.9rem)",lineHeight:1.25,textAlign:"center",background:g===Uo?"var(--primary)":"transparent",color:g===Uo?"var(--secondary)":"var(--text-secondary)"},children:"محفظة بال باي"}),i.jsx("button",{type:"button",onClick:()=>x(mu),style:{padding:"12px 8px",border:"none",cursor:"pointer",fontWeight:800,fontFamily:"inherit",fontSize:"clamp(0.76rem, 2.8vw, 0.9rem)",lineHeight:1.25,textAlign:"center",borderInlineStart:"1.5px solid var(--border)",background:g===mu?"var(--primary)":"transparent",color:g===mu?"var(--secondary)":"var(--text-secondary)"},children:"بنك فلسطين"})]})]}),i.jsxs("div",{className:"input-group",children:[i.jsxs("div",{style:{fontWeight:800,marginBottom:8,color:"var(--secondary)"},children:["تفاصيل الإعلان",W?null:i.jsxs("span",{style:{fontWeight:600,color:"var(--text-secondary)",fontSize:"0.88rem"},children:[" ","(اختياري — منتج بلا صور)"]})]}),i.jsx("textarea",{placeholder:W?"تفاصيل الإعلان":"يمكنك تركه فارغاً عند ربط منتج بلا صور في الكتالوج",value:c,onChange:A=>h(A.target.value),style:{width:"100%",padding:"0.85rem 1rem",borderRadius:"var(--radius-md)",border:"1.5px solid var(--border)",background:"var(--surface)",minHeight:110,resize:"vertical"},required:W})]}),i.jsxs("div",{className:"card",style:{padding:14,marginBottom:14,background:"var(--surface)"},children:[i.jsxs("div",{style:{marginBottom:10,color:"var(--text-secondary)",fontSize:"0.88rem",lineHeight:1.55},children:["يمكن رفع حتى ",i.jsxs("strong",{children:[Pr," صور"]}),".                 كل مرة تضغط «اختر صوراً» تُضاف الصور الجديدة إلى التي اخترتها سابقاً حتى يكتمل العدد — دون استبدال ما أضفته قبلها. الصورة الأولى غلاف حيث يُعرض صورة واحدة فقط."]}),i.jsxs("div",{style:{display:"flex",gap:14,alignItems:"flex-start",justifyContent:"space-between",flexWrap:"wrap"},children:[i.jsx("div",{style:{flex:"1 1 220px",minWidth:0},children:B.length>0?i.jsxs(i.Fragment,{children:[i.jsx(w1,{urls:B,max:Pr}),i.jsx(Ut,{images:B,height:140,borderRadius:16})]}):i.jsx("div",{className:"thumbLg",style:{width:"100%",maxWidth:280,height:120},children:i.jsx(cn,{size:28})})}),i.jsxs("div",{style:{flex:"1 1 200px"},children:[i.jsxs("div",{style:{fontWeight:900},children:["صور الإعلان",U?i.jsxs("span",{style:{fontWeight:600,color:"var(--text-secondary)",fontSize:"0.85rem"},children:[" ","(مطلوب)"]}):i.jsxs("span",{style:{fontWeight:600,color:"var(--text-secondary)",fontSize:"0.85rem"},children:[" ","(اختياري — تُنسخ من معرض المنتج تلقائياً إن لم ترفع صوراً هنا)"]})]}),i.jsxs("div",{style:{color:"var(--text-secondary)",fontSize:"0.9rem",marginTop:6},children:["حتى ",Pr," صور — PNG/JPG حتى ",ka,"MB لكل صورة",fu(T)&&v.length===0?i.jsxs("span",{children:[" ","— يُفضَّل رفع صوراً؛ وإلا تُنسخ من معرض المنتج عند الإرسال."]}):null]}),i.jsxs("label",{className:"iconBtn merchant-file-pick-label",style:{cursor:"pointer",marginTop:12,display:"inline-flex",alignItems:"center",position:"relative",overflow:"hidden"},children:[U?`اختر صوراً (حتى ${Pr})`:"تغيير صور الإعلان (اختياري)",i.jsx("input",{type:"file",accept:"image/*,.jpg,.jpeg,.png,.webp,.heif,.heic",multiple:!0,style:{position:"absolute",inset:0,width:"100%",height:"100%",opacity:0,cursor:"pointer",fontSize:"inherit",zIndex:2},onChange:A=>{const ie=A.target.files;ie!=null&&ie.length&&he(ie),A.target.value=""}})]})]})]})]}),i.jsx("div",{className:"card",style:{padding:14,marginBottom:14,background:"var(--surface)"},children:i.jsxs("div",{style:{display:"flex",gap:14,alignItems:"center",justifyContent:"space-between",flexWrap:"wrap"},children:[i.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[i.jsx("div",{className:"thumbLg",children:M?i.jsx("img",{src:M,alt:"receipt"}):i.jsx(cn,{size:22})}),i.jsxs("div",{children:[i.jsx("div",{style:{fontWeight:900},children:"إشعار الدفع"}),i.jsxs("div",{style:{color:"var(--text-secondary)",fontSize:"0.9rem"},children:["PNG/JPG حتى ",ka,"MB"]})]})]}),i.jsxs("label",{className:"iconBtn merchant-file-pick-label",style:{cursor:"pointer",display:"inline-flex",gap:8,alignItems:"center",position:"relative",overflow:"hidden"},children:[i.jsx(bv,{size:18}),"رفع إشعار الدفع",i.jsx("input",{type:"file",accept:"image/*,.jpg,.jpeg,.png,.webp",style:{position:"absolute",inset:0,width:"100%",height:"100%",opacity:0,cursor:"pointer",fontSize:"inherit",zIndex:2},onChange:A=>{var q;const ie=(q=A.target.files)==null?void 0:q[0];ie&&le(ie),A.target.value=""}})]})]})}),i.jsx(Ht,{type:"submit",loading:P,style:{width:"100%"},confirm:!1,showErrorAlert:!1,children:"إرسال الطلب"})]})]}),i.jsxs("p",{style:{textAlign:"center",marginTop:18,color:"var(--text-secondary)"},children:["لمراجعة كل إعلاناتك (المنتهية والنشطة وغيرها) افتح"," ",i.jsx(ke,{to:"/merchant/my-ads",style:{fontWeight:800,color:"var(--secondary)"},children:"إعلاناتي الممولة"}),"."]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        `}})]})})};function Dh(e){if(!e)return"—";try{const t=new Date(e);return Number.isNaN(t.getTime())?String(e):t.toLocaleString("ar",{dateStyle:"medium",timeStyle:"short"})}catch{return String(e)}}function R8(e){if(e.status==="pending")return{label:"بانتظار موافقة الإدارة",className:"mb-pill mb-pill-pending"};if(e.status==="rejected")return{label:"مرفوض",className:"mb-pill mb-pill-rejected"};if(e.status==="expired")return{label:"منتهي الصلاحية",className:"mb-pill mb-pill-expired"};if(e.status==="active"&&e.approved_at){const t=new Date(e.approved_at),n=new Date(t.getTime()+24*60*60*1e3);return Date.now()<=n.getTime()?{label:`يعرض للمتسوّقين حتى ${Dh(n.toISOString())}`,className:"mb-pill mb-pill-active"}:{label:"نافذة العرض منتهية (يُحدَّث السجل تلقائياً)",className:"mb-pill mb-pill-warn"}}return{label:e.status,className:"mb-pill"}}function O8(){const{showAlert:e,showConfirm:t,showPrompt:n}=qe(),[a,o]=f.useState([]),[l,c]=f.useState(!0),h=f.useCallback(async()=>{c(!0);try{const g=await L4();o(Array.isArray(g)?g:[])}catch(g){console.error(g),o([]),await e("تعذر تحميل إعلاناتك.","خطأ")}finally{c(!1)}},[e]);f.useEffect(()=>{h()},[h]);const u=async g=>{if(await t("حذف هذا الطلب؟ (مسموح فقط أثناء انتظار الموافقة)","تأكيد"))try{await A4(g.id),await e("تم الحذف.","تم"),await h()}catch(v){console.error(v),await e("تعذر الحذف. قد لا يكون الطلب قيد الانتظار.","خطأ")}},m=async g=>{const x=await n("عدّل عنوان الإعلان","العنوان","تعديل الطلب",g.title||"");if(x==null)return;const v=await n("عدّل وصف الإعلان","الوصف","تعديل الطلب",g.description||"");if(v!=null)try{await T4(g.id,{title:x,description:v}),await e("تم التعديل.","تم"),await h()}catch(b){console.error(b),await e("تعذر التعديل.","خطأ")}};return i.jsx(Be,{children:i.jsxs("div",{className:"merchant-my-ads",children:[i.jsxs("div",{className:"flex-between",style:{marginBottom:14,flexWrap:"wrap",gap:12},children:[i.jsxs("div",{children:[i.jsx("h1",{style:{fontSize:"1.8rem",margin:"0 0 6px"},children:"إعلاناتي الممولة"}),i.jsx("p",{style:{margin:0,color:"var(--text-secondary)",lineHeight:1.65,maxWidth:640},children:"كل الطلبات التي أرسلتها: قيد المراجعة، المرفوضة، النشطة، أو المنتهية بعد 24 ساعة من الموافقة. التفاصيل كاملة لكل إعلان بما فيها المنتج المربوط (إن وُجد) وإشعار الدفع."})]}),i.jsx(ke,{to:"/merchant/ads",className:"btn-request-ad",children:"طلب إعلان ممول جديد"})]}),l?i.jsx("p",{children:"جاري التحميل…"}):a.length===0?i.jsxs("div",{className:"card",style:{padding:24,textAlign:"center"},children:[i.jsx("p",{style:{margin:0,color:"var(--text-secondary)"},children:"لا توجد إعلانات بعد."}),i.jsx(ke,{to:"/merchant/ads",style:{display:"inline-block",marginTop:14,fontWeight:800},children:"إرسال طلب إعلان ممول"})]}):i.jsx("div",{className:"my-ads-stack",children:a.map(g=>{var _;const x=R8(g),v=Xe(g),b=g.status==="pending";return i.jsx("article",{className:"card my-ad-card",children:i.jsxs("div",{className:"my-ad-top",children:[i.jsx("div",{className:"my-ad-media",children:v.length>0?i.jsx(Ut,{images:v,height:152,borderRadius:16}):i.jsx("div",{className:"my-ad-media-empty",children:i.jsx(cn,{size:32})})}),i.jsxs("div",{className:"my-ad-main",children:[i.jsxs("div",{className:"my-ad-title-row",children:[i.jsx("h2",{className:"my-ad-title",children:g.title}),i.jsx("span",{className:x.className,children:x.label})]}),i.jsxs("div",{className:"my-ad-meta",children:[i.jsxs("span",{children:[i.jsx("strong",{children:"سعر العرض في الإعلان:"})," ",Number(g.product_price)>0?`${Number(g.product_price).toFixed(2)} ₪`:"—"]}),i.jsxs("span",{children:[i.jsx("strong",{children:"قناة الدفع:"})," ",g.payment_method_label||"—"]}),i.jsxs("span",{children:[i.jsx("strong",{children:"أُنشئ:"})," ",Dh(g.created_at)]}),g.approved_at?i.jsxs("span",{children:[i.jsx("strong",{children:"وافقت الإدارة:"})," ",Dh(g.approved_at)]}):null]}),i.jsxs("div",{className:"my-ad-product-block",children:[i.jsx("strong",{children:"المنتج في الكتالوج:"})," ",g.product_details?i.jsxs(i.Fragment,{children:[i.jsx(ke,{to:`/merchant/products/${g.product}/edit`,children:g.product_details.name}),i.jsxs("span",{className:"muted",children:[" ","— سعر الكتالوج: ",Number(g.product_details.price).toFixed(2)," ₪"]})]}):g.product?i.jsxs("span",{children:["مرتبط بمنتج #",g.product]}):i.jsx("span",{className:"muted",children:"إعلان مستقل (غير مربوط بمنتج في «منتجاتي»)"})]}),i.jsxs("div",{className:"my-ad-desc",children:[i.jsx("strong",{children:"تفاصيل الإعلان"}),i.jsx("p",{children:(_=g.description)!=null&&_.trim()?g.description:i.jsx("span",{className:"muted",children:"لا يوجد وصف"})})]}),g.payment_receipt_image?i.jsxs("div",{className:"my-ad-receipt",children:[i.jsx("strong",{children:"إشعار الدفع"}),i.jsx("a",{href:g.payment_receipt_image,target:"_blank",rel:"noreferrer",children:i.jsx("img",{src:g.payment_receipt_image,alt:"إشعار الدفع",className:"receipt-thumb"})})]}):null,b?i.jsxs("div",{className:"my-ad-actions",children:[i.jsxs("button",{type:"button",className:"iconBtn",onClick:()=>m(g),title:"تعديل سريع",children:[i.jsx(Wp,{size:18}),"تعديل"]}),i.jsxs("button",{type:"button",className:"iconBtn danger",onClick:()=>u(g),title:"حذف",children:[i.jsx($i,{size:18}),"حذف"]})]}):null]})]})},g.id)})}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        `}})]})})}const gu=3,B8=()=>{const{showAlert:e}=qe(),[t,n]=f.useState(null),[a,o]=f.useState([]),[l,c]=f.useState(!0),[h,u]=f.useState(""),[m,g]=f.useState(null),[x,v]=f.useState(!1),[b,_]=f.useState("balipay_wallet"),j=I=>{const E=String(I||"").toLowerCase();return E==="approved"?"مقبول":E==="pending"?"قيد المراجعة":E==="rejected"?"مرفوض":I||"—"},P=f.useMemo(()=>m?URL.createObjectURL(m):"",[m]),N=f.useMemo(()=>{if(!(t!=null&&t.end_date))return null;const I=new Date(t.end_date).getTime(),E=Date.now(),k=Math.ceil((I-E)/(1e3*60*60*24));return Number.isFinite(k)?k:null},[t]),w=async()=>{c(!0);try{const[I,E]=await Promise.all([Qv(),I4()]);n(I),o(E)}finally{c(!1)}};f.useEffect(()=>{w()},[]);const z=I=>{if(!I)return;if(I.size/(1024*1024)>gu){e(`حجم الصورة كبير. الحد الأقصى ${gu}MB`,"تنبيه");return}g(I)},C=async I=>{if(I.preventDefault(),!m){await e("لازم ترفع إشعار الدفع (صورة)","تنبيه");return}v(!0);try{const E=new FormData;E.append("receipt_image",m),h&&E.append("notes",h),b&&E.append("payment_method",b),await R4(E),u(""),g(null),_("balipay_wallet"),await w(),await e("تم إرسال طلب التجديد بنجاح. سيتم المراجعة خلال 24 ساعة.","تم")}catch(E){await e($e(E,"تعذر إرسال طلب التجديد."),"فشل")}finally{v(!1)}};return i.jsx(Be,{children:i.jsxs("div",{className:"merchant-subscription",children:[i.jsx("h1",{style:{marginBottom:14,fontSize:"1.8rem"},children:"الاشتراك"}),i.jsx("div",{className:"card",style:{marginBottom:16},children:i.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,flexWrap:"wrap"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[i.jsx("div",{style:{background:"#FFF9E6",padding:10,borderRadius:14,display:"flex"},children:i.jsx($a,{size:22,color:"#FFCC00"})}),i.jsxs("div",{children:[i.jsx("div",{style:{fontWeight:900},children:"المدة المتبقية"}),i.jsx("div",{style:{color:"var(--text-secondary)"},children:l?"...":N==null?"—":`${Math.max(N,0)} يوم`})]})]}),i.jsx("span",{className:"badge",children:t!=null&&t.is_active?"نشط":"غير نشط"})]})}),i.jsxs("div",{className:"card",style:{padding:"14px 16px",marginBottom:16,background:"linear-gradient(135deg, #FFF9E6 0%, #fff 100%)",border:"1px solid rgba(245,192,0,0.35)",borderRadius:14,lineHeight:1.65,fontSize:"0.95rem"},children:[i.jsx("strong",{style:{color:"var(--secondary)"},children:"ملاحظة:"})," رسوم تجديد الاشتراك ",i.jsx("strong",{children:"10 شيكل"}),". رقم التحويل الخاص بـ ",i.jsx("strong",{children:"رادار"})," هو ",i.jsx("strong",{dir:"ltr",children:"0592377078"})," باسم"," ",i.jsx("strong",{children:"اسماعيل عبدالعال"})," (بنك ومحفظة). سيتم الرد على طلبك خلال ",i.jsx("strong",{children:"24 ساعة"}),"."]}),i.jsxs("div",{className:"card",style:{marginBottom:16},children:[i.jsx("h3",{style:{marginBottom:10},children:"طلب تجديد (رفع إشعار دفع)"}),i.jsxs("form",{onSubmit:C,children:[i.jsxs("div",{className:"card",style:{padding:12,marginBottom:14,background:"var(--surface)"},children:[i.jsx("div",{style:{fontWeight:900,marginBottom:8},children:"طريقة التحويل"}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",borderRadius:14,overflow:"hidden",border:"1.5px solid var(--border)",background:"var(--white)"},role:"group","aria-label":"طريقة التحويل",children:[i.jsx("button",{type:"button",onClick:()=>_("balipay_wallet"),style:{padding:"12px 8px",border:"none",cursor:"pointer",fontWeight:800,fontFamily:"inherit",background:b==="balipay_wallet"?"var(--primary)":"transparent",color:b==="balipay_wallet"?"var(--secondary)":"var(--text-secondary)"},children:"محفظة بال باي"}),i.jsx("button",{type:"button",onClick:()=>_("bank_palestine"),style:{padding:"12px 8px",border:"none",cursor:"pointer",fontWeight:800,fontFamily:"inherit",borderInlineStart:"1.5px solid var(--border)",background:b==="bank_palestine"?"var(--primary)":"transparent",color:b==="bank_palestine"?"var(--secondary)":"var(--text-secondary)"},children:"بنك فلسطين"})]}),i.jsx("div",{className:"muted small",style:{marginTop:8,lineHeight:1.5},children:"اختر القناة التي ستحوّل عليها."})]}),i.jsx("div",{className:"input-group",children:i.jsx("textarea",{placeholder:"ملاحظات (اختياري)",value:h,onChange:I=>u(I.target.value),style:{width:"100%",padding:"0.85rem 1rem",borderRadius:"var(--radius-md)",border:"1.5px solid var(--border)",background:"var(--surface)",minHeight:90,resize:"vertical"}})}),i.jsx("div",{className:"card",style:{padding:14,marginBottom:14,background:"var(--surface)"},children:i.jsxs("div",{style:{display:"flex",gap:14,alignItems:"center",justifyContent:"space-between",flexWrap:"wrap"},children:[i.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[i.jsx("div",{className:"thumbLg",children:P?i.jsx("img",{src:P,alt:"receipt"}):i.jsx(cn,{size:22})}),i.jsxs("div",{children:[i.jsx("div",{style:{fontWeight:900},children:"إشعار الدفع"}),i.jsxs("div",{style:{color:"var(--text-secondary)",fontSize:"0.9rem"},children:["PNG/JPG حتى ",gu,"MB"]})]})]}),i.jsxs("label",{className:"iconBtn",style:{cursor:"pointer"},children:[i.jsx(bv,{size:18}),"رفع صورة",i.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},onChange:I=>{var E;return z((E=I.target.files)==null?void 0:E[0])}})]})]})}),i.jsx(Ht,{type:"submit",loading:x,style:{width:"100%"},confirm:!1,showErrorAlert:!1,children:"إرسال طلب التجديد"})]})]}),i.jsxs("div",{className:"card",style:{padding:0,overflow:"hidden"},children:[i.jsx("div",{style:{padding:16,fontWeight:900,background:"var(--surface)",borderBottom:"1px solid var(--border)"},children:"طلبات التجديد"}),l?i.jsx("div",{style:{padding:16},children:"جاري التحميل..."}):a.length===0?i.jsx("div",{style:{padding:16},children:"لا يوجد طلبات بعد."}):a.map(I=>i.jsxs("div",{style:{padding:14,borderTop:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,flexWrap:"wrap"},children:[i.jsxs("div",{children:[i.jsxs("div",{style:{fontWeight:900},children:["طلب #",I.id]}),i.jsx("div",{style:{color:"var(--text-secondary)"},children:I.notes||"—"})]}),i.jsx("span",{className:"badge",children:j(I.status)})]},I.id))]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        `}})]})})},F8=[31.5,34.4];function D8({onPick:e}){return g1({click(t){e([t.latlng.lat,t.latlng.lng])}}),null}function U8({point:e}){const t=cr(),n=f.useRef("");return f.useEffect(()=>{if(!e||e.length!==2)return;const a=Number(e[0]),o=Number(e[1]);if(!Number.isFinite(a)||!Number.isFinite(o))return;const l=`${a.toFixed(7)},${o.toFixed(7)}`;l!==n.current&&(n.current=l,t.flyTo([a,o],18,{duration:.55}))},[t,e]),null}const W8=({value:e,onChange:t})=>{const[n,a]=f.useState(!1),{showAlert:o}=qe(),l=f.useMemo(()=>(e==null?void 0:e.length)===2?e:F8,[e]),c=async()=>{if(!navigator.geolocation)throw await o("المتصفح لا يدعم تحديد الموقع.","تنبيه"),new Error("no-geolocation");a(!0);try{const h=await Hs({maxWaitMs:22e3,goodEnoughM:110});if(t([h.latitude,h.longitude]),h.accuracy!=null&&h.accuracy>1200){const u=Math.round(h.accuracy);await o(`تم أخذ الموقع بعد عدة قراءات. الدقة لا تزال تقريبية (~${u} م). على الكمبيوتر غالباً لا يوجد GPS؛ للدقة استخدم الهاتف أو انقر موقع المتجر يدوياً على الخريطة.`,"تنبيه")}else await o("تم ضبط موقع المتجر من موقعك الحالي.","تم")}catch{throw await o("لم نتمكن من تحديد موقعك. تأكد من صلاحيات الموقع والموقع الدقيق في إعدادات النظام.","خطأ"),new Error("geo-failed")}finally{a(!1)}};return i.jsxs("div",{className:"card",style:{padding:0,overflow:"hidden"},children:[i.jsxs("div",{style:{padding:12,display:"flex",justifyContent:"space-between",alignItems:"center",gap:12,flexWrap:"wrap"},children:[i.jsx("div",{style:{fontWeight:900},children:"حدد موقع المتجر"}),i.jsx(Ht,{variant:"secondary",onClick:c,loading:n,style:{width:"auto"},confirm:"استخدام موقع جهازك الحالي (GPS) لتحديد المتجر؟",showErrorAlert:!1,children:"موقعي الحالي"})]}),i.jsxs(ra,{center:l,zoom:14,minZoom:10,maxZoom:19,scrollWheelZoom:!0,style:{height:"clamp(260px, 50dvh, 380px)",width:"100%"},children:[i.jsx(ia,{}),i.jsx(aa,{}),i.jsx(U8,{point:e}),i.jsx(D8,{onPick:t}),(e==null?void 0:e.length)===2&&i.jsx(Or,{position:e,children:i.jsx(Br,{children:"موقع المتجر"})})]}),i.jsx("div",{style:{padding:12,color:"var(--text-secondary)",fontSize:"0.9rem",lineHeight:1.5},children:"اضغط على الخريطة لتحديد الموقع، أو استخدم «موقعي الحالي» (يجب السماح بالموقع الدقيق). إن خزّن المتصفح موقعاً قديماً أو كانت الدقة ضعيفة قد تختلف النقطة — جرّب مرة أخرى بعد تفعيل الـ GPS أو صحّح بالنقر على الخريطة. يُحفظ الموقع عند الضغط على حفظ في أعلى النموذج."})]})},H8=["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],j1=()=>Array.from({length:7},()=>({start:"",end:""}));function Z8(e){const t=j1();if(!e||typeof e!="object")return t;for(let n=0;n<7;n++){const a=e[String(n)]??e[n];Array.isArray(a)&&a.length>0&&a[0]&&typeof a[0]=="object"&&(t[n].start=String(a[0].start||"").slice(0,5),t[n].end=String(a[0].end||"").slice(0,5))}return t}function $8(e){const t={};for(let n=0;n<7;n++){const a=(e[n].start||"").trim(),o=(e[n].end||"").trim();a&&o?t[String(n)]=[{start:a,end:o}]:t[String(n)]=[]}return t}const q8=()=>{const e=Nt(),{showAlert:t,showConfirm:n}=qe(),[a,o]=f.useState(!0),[l,c]=f.useState(!1),[h,u]=f.useState(""),[m,g]=f.useState(null),[x,v]=f.useState(""),[b,_]=f.useState(""),[j,P]=f.useState(""),[N,w]=f.useState(""),[z,C]=f.useState(""),[I,E]=f.useState(null),[k,B]=f.useState(null),[M,T]=f.useState(null),[W,U]=f.useState(""),[se,de]=f.useState([""]),[he,le]=f.useState(""),[V,A]=f.useState(j1),[ie,q]=f.useState("Asia/Gaza");f.useEffect(()=>{(async()=>{var F,ge,_e,Ve,Ie;u(""),o(!0);try{const Ee=await Xv();g(Ee.id!=null?Ee.id:null),v(Ee.store_name||""),_(Ee.description||""),P(Ee.latitude??""),w(Ee.longitude??""),C(Ee.location_address||""),T(Ee.logo||null),B(null),U(Ee.contact_whatsapp||"");const Le=Array.isArray(Ee.store_features)?Ee.store_features.filter(Boolean):[];de(Le.length?Le:[""]),le(Ee.business_hours_note||""),A(Z8(Ee.business_hours_weekly)),q((Ee.store_timezone||"Asia/Gaza").trim()||"Asia/Gaza"),Number.isFinite(Number(Ee.latitude))&&Number.isFinite(Number(Ee.longitude))&&E([Number(Ee.latitude),Number(Ee.longitude)])}catch(Ee){const Le=(F=Ee==null?void 0:Ee.response)==null?void 0:F.status,vt=((_e=(ge=Ee==null?void 0:Ee.response)==null?void 0:ge.data)==null?void 0:_e.detail)||((Ie=(Ve=Ee==null?void 0:Ee.response)==null?void 0:Ve.data)==null?void 0:Ie.error);u(Le===401?"الجلسة انتهت أو التوكن غير موجود. اعمل تسجيل خروج ثم تسجيل دخول كتاجر.":Le===403?"هذا الحساب ليس تاجر (أو لا يملك صلاحية). تأكد من نوع الحساب merchant.":`تعذر تحميل بيانات المتجر. ${vt?`(${vt})`:""}`.trim())}finally{o(!1)}})()},[]);const ce=(G,F)=>{const ge=se.map(_e=>String(_e||"").trim()).filter(Boolean).slice(0,10);return{store_name:x,description:b,location_address:z||"",latitude:G,longitude:F,contact_whatsapp:W.trim(),store_features:ge,business_hours_note:he.trim(),business_hours_weekly:$8(V),store_timezone:ie.trim()||"Asia/Gaza"}},ne=async G=>{G.preventDefault(),c(!0);try{const F=(I==null?void 0:I[0])??(j===""?null:Number(j)),ge=(I==null?void 0:I[1])??(N===""?null:Number(N)),_e=ce(F,ge);let Ve;if(k){const Le=new FormData;Le.append("store_name",_e.store_name),Le.append("description",_e.description||""),Le.append("location_address",_e.location_address),Le.append("contact_whatsapp",_e.contact_whatsapp),Le.append("business_hours_note",_e.business_hours_note),Le.append("store_timezone",_e.store_timezone),Le.append("store_features",JSON.stringify(_e.store_features)),Le.append("business_hours_weekly",JSON.stringify(_e.business_hours_weekly)),F!=null&&F!==""&&Le.append("latitude",String(F)),ge!=null&&ge!==""&&Le.append("longitude",String(ge)),Le.append("logo",k),Ve=Le}else Ve=_e;const Ie=await cS(Ve);(Ie==null?void 0:Ie.id)!=null&&g(Ie.id),Ie!=null&&Ie.logo&&T(Ie.logo),B(null),await t("تم حفظ المعلومات بنجاح","تم");const Ee=(Ie==null?void 0:Ie.id)??m;Ee!=null&&e(`/stores/${Ee}`)}catch(F){await t($e(F,"تعذر حفظ البيانات. حاول مرة أخرى."),"فشل")}finally{c(!1)}},ue=async()=>{await n("إضافة حقل ميزة جديد؟","تأكيد")&&(de(F=>F.length>=10?F:[...F,""]),await t("تمت إضافة حقل جديد.","تم"))},$=async G=>{await n("حذف هذا السطر من مميزات المتجر؟","تأكيد")&&(de(ge=>{const _e=ge.filter((Ve,Ie)=>Ie!==G);return _e.length?_e:[""]}),await t("تم حذف السطر.","تم"))};return i.jsx(Be,{children:i.jsxs("div",{className:"merchant-settings",style:{maxWidth:1240,marginInline:"auto",paddingInline:"clamp(8px, 2.2vw, 22px)",paddingBottom:32,boxSizing:"border-box"},children:[i.jsx("h1",{style:{marginBottom:14,fontSize:"1.8rem"},children:"إعدادات المتجر"}),i.jsx("div",{className:"card",children:a?i.jsx("div",{children:"جاري التحميل..."}):h?i.jsxs("div",{children:[i.jsx("p",{style:{color:"#c0392b",fontWeight:800,marginBottom:12},children:h}),i.jsx(Ht,{onClick:()=>window.location.reload(),style:{width:"100%"},confirm:"إعادة تحميل الصفحة الآن؟",showErrorAlert:!1,children:"إعادة المحاولة"})]}):i.jsxs("form",{onSubmit:ne,children:[i.jsx(Dt,{icon:i.jsx(Gt,{size:18}),placeholder:"اسم المتجر",value:x,onChange:G=>v(G.target.value),required:!0}),i.jsxs("div",{className:"input-group",children:[i.jsx("div",{className:"input-icon",children:i.jsx(nv,{size:18})}),i.jsx("textarea",{placeholder:"وصف المتجر",value:b,onChange:G=>_(G.target.value),style:{width:"100%",padding:"0.85rem 1rem",borderRadius:"var(--radius-md)",border:"1.5px solid var(--border)",background:"var(--surface)",minHeight:110,resize:"vertical"}})]}),i.jsxs("div",{style:{marginTop:18,paddingTop:16,borderTop:"1px solid var(--border)"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:8,fontWeight:800},children:[i.jsx(_c,{size:18}),"التواصل مع المتجر (واتساب)"]}),i.jsx("p",{style:{margin:"0 0 10px",fontSize:"0.88rem",color:"var(--text-secondary)",lineHeight:1.55},children:"يمكنك إدخال الرقم بصيغة محلية (مثال: 0599123456) أو دولية بدون + (970599123456). يظهر زر «تواصل معنا» للمتسوّقين بعد الحفظ هنا فقط."}),i.jsx(Dt,{icon:i.jsx(_c,{size:18}),placeholder:"رقم واتساب للاستفسارات",value:W,onChange:G=>U(G.target.value),type:"tel",autoComplete:"tel"})]}),i.jsxs("div",{style:{marginTop:18,paddingTop:16,borderTop:"1px solid var(--border)"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:8,fontWeight:800},children:[i.jsx(Gn,{size:18}),"مميزات المتجر (حتى 10)"]}),i.jsx("p",{style:{margin:"0 0 10px",fontSize:"0.88rem",color:"var(--text-secondary)",lineHeight:1.55},children:"تظهر كوسوم صغيرة في البروفايل وقائمة المحال القريبة — للعرض فقط وليس للفلترة."}),se.map((G,F)=>i.jsxs("div",{style:{display:"flex",gap:8,marginBottom:8,alignItems:"center"},children:[i.jsx("input",{type:"text",value:G,maxLength:80,placeholder:`ميزة ${F+1}`,onChange:ge=>{const _e=ge.target.value;de(Ve=>Ve.map((Ie,Ee)=>Ee===F?_e:Ie))},style:{flex:1,padding:"0.75rem 0.9rem",borderRadius:"var(--radius-md)",border:"1.5px solid var(--border)",background:"var(--surface)"}}),se.length>1?i.jsx("button",{type:"button",onClick:()=>$(F),style:{padding:"8px 10px",borderRadius:10,border:"1px solid var(--border)",background:"var(--surface)",cursor:"pointer",fontWeight:700},children:"حذف"}):null]},F)),se.length<10?i.jsx("button",{type:"button",onClick:ue,style:{marginTop:4,padding:"8px 14px",borderRadius:10,border:"1px dashed var(--border)",background:"transparent",cursor:"pointer",fontWeight:700,color:"var(--secondary)"},children:"+ إضافة ميزة"}):null]}),i.jsxs("div",{style:{marginTop:18,paddingTop:16,borderTop:"1px solid var(--border)"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:8,fontWeight:800},children:[i.jsx($a,{size:18}),"مواعيد العمل"]}),i.jsx("p",{style:{margin:"0 0 10px",fontSize:"0.88rem",color:"var(--text-secondary)",lineHeight:1.55},children:"النص أدناه يظهر للمتسوّقين كما هو. الجدول يُستخدم لحساب «مفتوح / مغلق» حسب المنطقة الزمنية."}),i.jsxs("div",{className:"input-group",style:{marginBottom:12},children:[i.jsx("div",{className:"input-icon",children:i.jsx($a,{size:18})}),i.jsx("textarea",{placeholder:"مواعيد العمل (نص للمتسوّقين)، مثال: السبت–الخميس 9–5، الجمعة إجازة",value:he,onChange:G=>le(G.target.value),style:{width:"100%",padding:"0.85rem 1rem",borderRadius:"var(--radius-md)",border:"1.5px solid var(--border)",background:"var(--surface)",minHeight:88,resize:"vertical"}})]}),i.jsx(Dt,{icon:i.jsx($a,{size:18}),placeholder:"المنطقة الزمنية (مثال: Asia/Gaza)",value:ie,onChange:G=>q(G.target.value)}),i.jsx("p",{style:{margin:"10px 0 12px",fontSize:"0.82rem",color:"var(--text-secondary)"},children:"الأيام من الأحد (0) إلى السبت (6). اترك الفترة فارغة ليوم إجازة. فترة واحدة يومياً في هذا النموذج."}),i.jsx("div",{style:{display:"grid",gap:8,fontSize:"0.9rem"},children:H8.map((G,F)=>i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"minmax(72px, 1fr) 1fr 1fr",gap:8,alignItems:"center"},children:[i.jsx("span",{style:{fontWeight:700},children:G}),i.jsx("input",{type:"time",value:V[F].start,onChange:ge=>{const _e=ge.target.value;A(Ve=>{const Ie=[...Ve];return Ie[F]={...Ie[F],start:_e},Ie})},style:{padding:"8px 10px",borderRadius:10,border:"1.5px solid var(--border)",background:"var(--surface)"}}),i.jsx("input",{type:"time",value:V[F].end,onChange:ge=>{const _e=ge.target.value;A(Ve=>{const Ie=[...Ve];return Ie[F]={...Ie[F],end:_e},Ie})},style:{padding:"8px 10px",borderRadius:10,border:"1.5px solid var(--border)",background:"var(--surface)"}})]},G))})]}),i.jsxs("div",{className:"input-group",children:[i.jsx("div",{className:"input-icon",children:i.jsx(Ln,{size:18})}),i.jsx("textarea",{placeholder:"عنوان / موقع المتجر نصاً (يظهر للمتسوّقين في البروفايل، منفصل عن الخريطة)",value:z,onChange:G=>C(G.target.value),style:{width:"100%",padding:"0.85rem 1rem",borderRadius:"var(--radius-md)",border:"1.5px solid var(--border)",background:"var(--surface)",minHeight:88,resize:"vertical"}})]}),i.jsxs("div",{style:{marginTop:6},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:8,fontWeight:700},children:[i.jsx(cn,{size:18}),"صورة المتجر (اختياري)"]}),i.jsx("p",{style:{margin:"0 0 10px",fontSize:"0.88rem",color:"var(--text-secondary)",lineHeight:1.5},children:"تظهر على الخريطة كرمز للمتجر. إن لم ترفع صورة، يُستخدم رمز حسب نوع القسم أو صورة القسم إن وُجدت."}),M?i.jsx("img",{src:M,alt:"",style:{width:120,height:120,objectFit:"cover",borderRadius:16,marginBottom:10,border:"1.5px solid var(--border)"}}):null,i.jsx("input",{type:"file",accept:"image/*",style:{width:"100%",fontSize:"0.9rem"},onChange:G=>{var ge;const F=(ge=G.target.files)==null?void 0:ge[0];F&&(T(_e=>(_e&&String(_e).startsWith("blob:")&&URL.revokeObjectURL(_e),URL.createObjectURL(F))),B(F))}})]}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12},children:[i.jsx(Dt,{icon:i.jsx(Ln,{size:18}),placeholder:"Latitude",value:j,onChange:G=>P(G.target.value)}),i.jsx(Dt,{icon:i.jsx(Ln,{size:18}),placeholder:"Longitude",value:N,onChange:G=>w(G.target.value)})]}),i.jsx("div",{style:{marginTop:14},children:i.jsx(W8,{value:I,onChange:G=>{E(G),P(String(G[0])),w(String(G[1]))}})}),i.jsx("div",{style:{marginTop:14},children:i.jsx(Ht,{type:"submit",loading:l,style:{width:"100%"},confirm:!1,showErrorAlert:!1,children:"حفظ"})})]})})]})})},V8=()=>{const[e,t]=f.useState(!0),[n,a]=f.useState(null);f.useEffect(()=>{(async()=>{try{const h=await Xv();a(h)}finally{t(!1)}})()},[]);const o=(n==null?void 0:n.products)||[],l=(n==null?void 0:n.sponsored_ads)||[];return i.jsx(Be,{children:i.jsxs("div",{className:"merchant-profile",children:[i.jsx("h1",{style:{marginBottom:14,fontSize:"1.8rem"},children:"بروفايل المتجر"}),i.jsx("div",{className:"card",style:{marginBottom:16},children:e?i.jsx("div",{children:"جاري التحميل..."}):i.jsxs("div",{style:{display:"flex",gap:16,alignItems:"flex-start",flexWrap:"wrap"},children:[i.jsx("div",{className:"logoBox",children:n!=null&&n.logo?i.jsx("img",{src:n.logo,alt:"logo"}):i.jsx(cn,{size:22})}),i.jsxs("div",{style:{flex:1,minWidth:240},children:[i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:12,flexWrap:"wrap"},children:[i.jsx("div",{style:{fontWeight:900,fontSize:"1.25rem"},children:n==null?void 0:n.store_name}),n?i.jsxs(ke,{to:"/merchant/settings",className:"btn-primary",style:{display:"inline-flex",alignItems:"center",gap:8,padding:"9px 14px",borderRadius:12,textDecoration:"none",fontWeight:800,fontSize:"0.88rem",whiteSpace:"nowrap"},children:[i.jsx(Wp,{size:17,strokeWidth:2.1,"aria-hidden":!0}),"تعديل معلومات المتجر"]}):null]}),i.jsx("div",{style:{color:"var(--text-secondary)",marginTop:6},children:(n==null?void 0:n.description)||"—"}),i.jsxs("div",{style:{marginTop:10,display:"flex",gap:10,flexWrap:"wrap",alignItems:"center"},children:[i.jsx("span",{className:"badge",children:(n==null?void 0:n.category_name)||"بدون قسم"}),Array.isArray(n==null?void 0:n.store_features)&&n.store_features.filter(Boolean).length>0?n.store_features.filter(Boolean).slice(0,10).map((c,h)=>i.jsx("span",{className:"badge",style:{background:"rgba(255, 204, 0, 0.16)"},children:c},`${h}-${c}`)):null]})]})]})}),i.jsxs("div",{className:"card",style:{padding:0,overflow:"hidden",marginBottom:16},children:[i.jsxs("div",{style:{padding:16,fontWeight:900,background:"var(--surface)",borderBottom:"1px solid var(--border)",display:"flex",gap:10,alignItems:"center"},children:[i.jsx(Rr,{size:18}),"الإعلانات الممولة"]}),e?i.jsx("div",{style:{padding:16},children:"..."}):l.length===0?i.jsx("div",{style:{padding:16},children:"لا يوجد إعلانات."}):l.map(c=>i.jsxs("div",{style:{padding:16,borderTop:"1px solid var(--border)",display:"flex",gap:12,alignItems:"center",justifyContent:"space-between",flexWrap:"wrap"},children:[i.jsxs("div",{style:{display:"flex",gap:12,alignItems:"flex-start"},children:[i.jsx("div",{style:{width:88,flexShrink:0},children:Xe(c).length>0?i.jsx(Ut,{images:Xe(c),height:56,borderRadius:14}):i.jsx("div",{className:"thumbSm",children:i.jsx(cn,{size:18})})}),i.jsxs("div",{children:[i.jsx("div",{style:{fontWeight:900},children:c.title}),i.jsx("div",{style:{color:"var(--text-secondary)"},children:c.description})]})]}),i.jsx("span",{className:"badge",children:c.status})]},c.id))]}),i.jsxs("div",{className:"card",style:{padding:0,overflow:"hidden"},children:[i.jsxs("div",{style:{padding:16,fontWeight:900,background:"var(--surface)",borderBottom:"1px solid var(--border)",display:"flex",gap:10,alignItems:"center"},children:[i.jsx(bi,{size:18}),"منتجات المتجر"]}),e?i.jsx("div",{style:{padding:16},children:"..."}):o.length===0?i.jsx("div",{style:{padding:16},children:"لا يوجد منتجات."}):i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(min(220px, 100%), 1fr))",gap:12,padding:16},children:o.map(c=>i.jsxs("div",{className:"card",style:{padding:14},children:[i.jsx("div",{style:{borderRadius:16,overflow:"hidden",marginBottom:8},children:Xe(c).length>0?i.jsx(Ut,{images:Xe(c),height:120,borderRadius:0}):i.jsx("div",{className:"thumbSm",style:{width:"100%",height:140,borderRadius:16},children:i.jsx(cn,{size:18})})}),i.jsx("div",{style:{marginTop:10,fontWeight:900},children:c.name}),i.jsx("div",{style:{color:"var(--text-secondary)"},children:c.description||"—"}),i.jsxs("div",{style:{marginTop:8,fontWeight:900,color:"var(--secondary)"},children:[c.price," ₪"]})]},c.id))})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        `}})]})})},G8=()=>{const[e,t]=f.useState([]),[n,a]=f.useState(!0);return f.useEffect(()=>{(async()=>{try{const l=await la();t(Array.isArray(l)?l:[])}catch(l){console.error("Error fetching categories:",l)}finally{a(!1)}})()},[]),i.jsx(Be,{children:i.jsxs("div",{className:"categories-page",children:[i.jsxs("header",{className:"categories-hero",children:[i.jsx("div",{className:"categories-hero-icon","aria-hidden":!0,children:i.jsx(Cs,{size:28,strokeWidth:2})}),i.jsx("h1",{className:"categories-hero-title",children:"أقسام رادار"}),i.jsx("p",{className:"categories-hero-sub",children:"اختر قسماً للانتقال إلى المتاجر القريبة في هذا النوع."})]}),n?i.jsx("div",{className:"categories-loading card",children:"جاري تحميل الأقسام…"}):e.length>0?i.jsx("div",{className:"categories-grid",children:e.map(o=>{const l=n8(o.name);return i.jsxs(ke,{to:`/?category=${o.id}`,className:"categories-card",children:[o.image?i.jsx("span",{className:"categories-card-photo-wrap",children:i.jsx("img",{className:"categories-card-photo",src:o.image,alt:"",loading:"lazy"})}):i.jsx("span",{className:"categories-card-emoji",style:{background:l.bg},children:l.emoji}),i.jsxs("div",{className:"categories-card-body",children:[i.jsx("h2",{className:"categories-card-name",children:o.name}),i.jsx("p",{className:"categories-card-desc",children:o.description||"عرض المحلات القريبة في هذا القسم"}),i.jsxs("span",{className:"categories-card-cta",children:["استكشف",i.jsx(Dp,{size:16,"aria-hidden":!0})]})]})]},o.id)})}):i.jsx("p",{className:"categories-empty",children:"لا توجد أقسام مسجلة حالياً."}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        `}})]})})},K8={medical:"🏥",education:"📚",food:"🍲",water:"💧",institution:"🤝"},Y8={medical:"#c62828",education:"#4527a0",food:"#e65100",water:"#0277bd",institution:"#5d4037"};function k1(e){return K8[e]||"✨"}function S1(e){return Y8[e]||"#1ebea5"}const Q8=()=>{const[e,t]=f.useState([]),[n,a]=f.useState([]),[o,l]=f.useState(!0),c=localStorage.getItem("isGuest")==="true",h=!!localStorage.getItem("token")&&!c,u=localStorage.getItem("user_type")||"shopper",m=h&&(u==="shopper"||u==="merchant");f.useEffect(()=>{let x=!1;return(async()=>{try{const[v,b]=await Promise.all([mo(),Xc()]);x||(t(Array.isArray(v)?v:[]),a(Array.isArray(b)?b:[]))}catch(v){console.error(v),x||(t([]),a([]))}finally{x||l(!1)}})(),()=>{x=!0}},[]);const g=f.useMemo(()=>{const x=new Map;for(const v of e)x.set(v.id,0);for(const v of n){const b=v.category;x.has(b)||x.set(b,0),x.set(b,x.get(b)+1)}return x},[e,n]);return i.jsx(Be,{children:i.jsxs("div",{className:"services-page",children:[i.jsxs("header",{className:"services-hero",children:[i.jsx("div",{className:"services-hero-icon","aria-hidden":!0,children:i.jsx(Gn,{size:26,strokeWidth:2})}),i.jsx("h1",{className:"services-hero-title",children:"الخدمات المجتمعية"}),i.jsx("p",{className:"services-hero-sub",children:"نقاط طبية وتعليمية وتوزيع طعام ومياه ومؤسسات مجتمعية — تظهر على الخريطة بعد موافقة الإدارة."}),m?i.jsxs(ke,{to:"/services/suggest",className:"services-cta",children:[i.jsx(gv,{size:20,"aria-hidden":!0}),"اقترح نقطة خدمة"]}):i.jsx("p",{className:"services-guest-note",children:"لتقديم اقتراح: سجّل الدخول كمتسوّق أو كتاجر (وليس زائراً)."})]}),o?i.jsx("div",{className:"services-loading card",children:"جاري تحميل الأقسام…"}):e.length===0?i.jsx("p",{className:"services-empty",children:"لا توجد أقسام مفعّلة حالياً."}):i.jsx("div",{className:"services-grid",role:"list",children:e.map(x=>{const v=S1(x.slug),b=k1(x.slug),_=g.get(x.id)??0;return i.jsxs(ke,{to:`/services/category/${encodeURIComponent(x.slug)}`,className:"services-grid-card card",role:"listitem",style:{"--svc-tone":v},children:[i.jsx("div",{className:"services-grid-card-visual","aria-hidden":!0,children:i.jsx("span",{className:"services-grid-card-emoji",children:b})}),i.jsxs("div",{className:"services-grid-card-body",children:[i.jsx("h2",{className:"services-grid-card-title",children:x.name}),x.description_hint?i.jsx("p",{className:"services-grid-card-hint",children:x.description_hint}):null,i.jsx("span",{className:"services-grid-card-count",children:_===0?"لا توجد نقاط بعد":`${_} ${_===1?"نقطة":"نقاط"} معتمدة`})]})]},x.id)})}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        `}})]})})},J8=()=>{const{categorySlug:e}=po(),t=Nt(),[n,a]=f.useState([]),[o,l]=f.useState([]),[c,h]=f.useState(!0);f.useEffect(()=>{let b=!1;return(async()=>{try{const[_,j]=await Promise.all([mo(),Xc()]);b||(a(Array.isArray(_)?_:[]),l(Array.isArray(j)?j:[]))}catch(_){console.error(_),b||(a([]),l([]))}finally{b||h(!1)}})(),()=>{b=!0}},[]);const u=f.useMemo(()=>n.find(b=>String(b.slug)===String(e)),[n,e]),m=f.useMemo(()=>u?o.filter(b=>Number(b.category)===Number(u.id)):[],[u,o]);f.useEffect(()=>{c||!n.length||(!e||!u)&&t("/services",{replace:!0})},[c,n.length,e,u,t]);const g=u?S1(u.slug):"#1ebea5",x=u?k1(u.slug):"✨",v=b=>{const _=Number(b==null?void 0:b.latitude),j=Number(b==null?void 0:b.longitude);return Number.isFinite(_)&&Number.isFinite(j)};return i.jsx(Be,{children:i.jsxs("div",{className:"services-page services-category-page",children:[i.jsxs("nav",{className:"services-breadcrumb",children:[i.jsx(ke,{to:"/services",className:"services-breadcrumb-link",children:"الخدمات المجتمعية"}),i.jsx("span",{className:"services-breadcrumb-sep","aria-hidden":!0,children:"/"}),i.jsx("span",{className:"services-breadcrumb-current",children:(u==null?void 0:u.name)||"…"})]}),i.jsxs("header",{className:"services-category-hero card",style:{"--cat-tone":g},children:[i.jsx("div",{className:"services-category-hero-visual","aria-hidden":!0,children:i.jsx("span",{className:"services-category-hero-emoji",children:x})}),i.jsx("h1",{className:"services-category-hero-title",children:(u==null?void 0:u.name)||"القسم"}),u!=null&&u.description_hint?i.jsx("p",{className:"services-category-hero-hint",children:u.description_hint}):null]}),c?i.jsx("div",{className:"services-loading card",children:"جاري تحميل النقاط…"}):m.length===0?i.jsx("p",{className:"services-empty card",children:"لا توجد نقاط معتمدة في هذا القسم بعد."}):i.jsx("ul",{className:"services-points",children:m.map(b=>i.jsxs("li",{className:"services-point",children:[i.jsx("div",{className:"services-point-title",children:b.title}),b.category_slug==="water"&&b.water_is_potable!=null?i.jsx("div",{className:"services-point-badge",children:b.water_is_potable?"مياه صالحة للشرب":"مياه غير صالحة للشرب"}):null,b.institution_scope?i.jsxs("div",{className:"services-point-meta",children:["النطاق: ",b.institution_scope_label||b.institution_scope]}):null,i.jsx("p",{className:"services-point-desc",children:b.detail_description}),i.jsx("p",{className:"services-point-address",children:b.address_text}),i.jsx("div",{className:"services-point-actions",children:i.jsxs("button",{type:"button",className:"services-point-mapbtn",disabled:!v(b),onClick:()=>{v(b)&&t("/map",{state:{mapFocus:{lat:b.latitude,lng:b.longitude,communityPointId:b.id},mapPreset:{mode:"community",cc:(u==null?void 0:u.id)??null}}})},title:v(b)?"عرض على الخريطة":"لا يوجد إحداثيات لهذا العنصر",children:[i.jsx(Ln,{size:16,"aria-hidden":!0}),"عرض على الخريطة"]})})]},b.id))}),i.jsxs("p",{className:"services-category-back-wrap",children:[i.jsxs("button",{type:"button",className:"services-category-back",onClick:()=>t(-1),children:[i.jsx($y,{size:18,"aria-hidden":!0}),"رجوع"]}),i.jsxs(ke,{to:"/services",className:"services-category-back-alt",children:[i.jsx(Gn,{size:16,"aria-hidden":!0}),"كل الأقسام"]})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        `}})]})})},X8=[31.5,34.4],eN=()=>{const e=Nt(),{showAlert:t}=qe(),a=(localStorage.getItem("user_type")||"shopper")==="admin",[o,l]=f.useState([]),[c,h]=f.useState(!0),[u,m]=f.useState(""),[g,x]=f.useState(""),[v,b]=f.useState(""),[_,j]=f.useState(""),[P,N]=f.useState(null),[w,z]=f.useState(""),[C,I]=f.useState(""),[E,k]=f.useState(!1),[B,M]=f.useState(!1),[T,W]=f.useState(!1);f.useEffect(()=>{let V=!1;return(async()=>{try{const A=await mo();V||l(Array.isArray(A)?A:[])}catch{V||l([])}finally{V||h(!1)}})(),()=>{V=!0}},[]);const U=f.useMemo(()=>o.find(V=>String(V.id)===String(u)),[o,u]),se=(U==null?void 0:U.slug)||"",de=async V=>{if(V.preventDefault(),!u){await t("اختر القسم.","تنبيه");return}if(!g.trim()||!v.trim()||!_.trim()){await t("عنوان الخدمة والوصف التفصيلي والعنوان النصي مطلوبة.","تنبيه");return}if(!P||P.length!==2){await t("انقر على الخريطة لتحديد موقع النقطة.","تنبيه");return}const A={category:Number(u),title:g.trim(),detail_description:v.trim(),latitude:P[0],longitude:P[1],address_text:_.trim()};if(se==="water"){if(w!=="true"&&w!=="false"){await t("حدد هل المياه صالحة للشرب.","تنبيه");return}A.water_is_potable=w==="true"}else A.water_is_potable=null;if(se==="institution"){if(!["local","international","charity"].includes(C)){await t("اختر نطاق المؤسسة (محلية / عالمية / خيرية).","تنبيه");return}A.institution_scope=C}else A.institution_scope="";k(!0);try{a?(await Gv(A),await t("تمت إضافة النقطة مباشرة (كمدير).","تم")):(await j4(A),await t("تم إرسال الطلب. سيظهر على الخريطة بعد موافقة الإدارة.","تم")),e("/services")}catch(ie){await t($e(ie,"تعذر إرسال الطلب."),"فشل")}finally{k(!1)}},he=P||X8,le=async()=>{if(!navigator.geolocation){await t("المتصفح لا يدعم تحديد الموقع.","تنبيه");return}M(!0);try{const V=await Hs({maxWaitMs:22e3,goodEnoughM:110});N([V.latitude,V.longitude]);const A=V.accuracy;A!=null&&A>1200?await t(`تم وضع الدبوس على موقعك. الدقة تقريبية (~${Math.round(A)} م). على الكمبيوتر غالباً لا يوجد GPS؛ للدقة استخدم الهاتف أو انقر الموقع يدوياً على الخريطة.`,"موقع تقريبي"):await t("تم ضبط الدبوس على موقعك الحالي.","تم")}catch{await t("لم نتمكن من تحديد موقعك. تأكد من السماح بالوصول للموقع في المتصفح أو حاول لاحقاً.","الموقع")}finally{M(!1)}};return i.jsx(Be,{children:i.jsxs("div",{className:"services-page",style:{maxWidth:1240,marginInline:"auto",paddingInline:"clamp(8px, 2.2vw, 22px)",paddingBottom:32,boxSizing:"border-box"},children:[i.jsx("p",{style:{marginBottom:16},children:i.jsx(ke,{to:"/services",style:{fontWeight:700,color:"var(--secondary)"},children:"← الخدمات المجتمعية"})}),i.jsx("h1",{children:"اقتراح نقطة خدمة مجتمعية"}),i.jsxs("p",{style:{lineHeight:1.65,color:"#555"},children:["املأ التفاصيل وحدد الموقع على الخريطة.",a?" سيتم إضافة النقطة مباشرة.":" الطلب يُراجع من الإدارة قبل الظهور للجميع."]}),c?i.jsx("p",{children:"جاري تحميل الأقسام…"}):i.jsxs("form",{onSubmit:de,className:"card",style:{padding:"clamp(16px, 4vw, 22px)",marginTop:20},children:[i.jsx("label",{style:{display:"block",fontWeight:800,marginBottom:8},children:"القسم"}),i.jsxs("select",{value:u,onChange:V=>{m(V.target.value),z(""),I("")},style:{width:"100%",padding:10,borderRadius:10,marginBottom:16},required:!0,children:[i.jsx("option",{value:"",children:"— اختر —"}),o.map(V=>i.jsx("option",{value:V.id,children:V.name},V.id))]}),U!=null&&U.description_hint?i.jsx("p",{style:{fontSize:"0.88rem",color:"#666",marginTop:-8,marginBottom:16},children:U.description_hint}):null,se==="water"?i.jsxs("div",{style:{marginBottom:16},children:[i.jsx("div",{style:{fontWeight:800,marginBottom:8},children:"المياه"}),i.jsxs("label",{style:{display:"flex",gap:8,alignItems:"center",marginBottom:6},children:[i.jsx("input",{type:"radio",name:"wp",checked:w==="true",onChange:()=>z("true")}),"صالحة للشرب"]}),i.jsxs("label",{style:{display:"flex",gap:8,alignItems:"center"},children:[i.jsx("input",{type:"radio",name:"wp",checked:w==="false",onChange:()=>z("false")}),"غير صالحة للشرب"]})]}):null,se==="institution"?i.jsxs("div",{style:{marginBottom:16},children:[i.jsx("label",{style:{display:"block",fontWeight:800,marginBottom:8},children:"نطاق المؤسسة"}),i.jsxs("select",{value:C,onChange:V=>I(V.target.value),style:{width:"100%",padding:10,borderRadius:10},required:se==="institution",children:[i.jsx("option",{value:"",children:"— اختر —"}),i.jsx("option",{value:"local",children:"محلية"}),i.jsx("option",{value:"international",children:"عالمية"}),i.jsx("option",{value:"charity",children:"خيرية"})]})]}):null,i.jsx("label",{style:{display:"block",fontWeight:800,marginBottom:8},children:"عنوان / اسم النقطة"}),i.jsx("input",{value:g,onChange:V=>x(V.target.value),style:{width:"100%",padding:10,borderRadius:10,marginBottom:16},maxLength:220,required:!0}),i.jsx("label",{style:{display:"block",fontWeight:800,marginBottom:8},children:"وصف تفصيلي للخدمة"}),i.jsx("textarea",{value:v,onChange:V=>b(V.target.value),rows:5,style:{width:"100%",padding:10,borderRadius:10,marginBottom:16,resize:"vertical"},required:!0}),i.jsx("label",{style:{display:"block",fontWeight:800,marginBottom:8},children:"الموقع النصي التفصيلي"}),i.jsx("textarea",{value:_,onChange:V=>j(V.target.value),rows:3,style:{width:"100%",padding:10,borderRadius:10,marginBottom:16,resize:"vertical"},required:!0}),i.jsx("div",{style:{fontWeight:800,marginBottom:8},children:"الموقع على الخريطة"}),i.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:10,alignItems:"center",marginBottom:10},children:[i.jsx(Ht,{type:"button",variant:"secondary",loading:B,onClick:le,style:{width:"auto"},confirm:!1,showErrorAlert:!1,children:"موقعي الحالي"}),i.jsxs("span",{style:{fontSize:"0.88rem",color:"#666"},children:["أو انقر على الخريطة لوضع الدبوس يدوياً.",P?` الإحداثيات: ${P[0].toFixed(5)}, ${P[1].toFixed(5)}`:""]})]}),i.jsx("div",{className:"card",style:{padding:0,overflow:"hidden",marginBottom:20},children:i.jsx("button",{type:"button",onClick:()=>W(!0),"aria-label":"تكبير الخريطة لتحديد الموقع",title:"اضغط لتكبير الخريطة",style:{width:"100%",padding:0,border:"none",background:"transparent",cursor:"zoom-in",display:"block",textAlign:"inherit"},children:i.jsxs(ra,{center:he,zoom:14,minZoom:10,maxZoom:19,scrollWheelZoom:!0,style:{height:"clamp(260px, 48dvh, 360px)",width:"100%"},children:[i.jsx(ia,{}),i.jsx(aa,{}),i.jsx(Es,{position:P}),i.jsx(oo,{onPick:(V,A)=>N([V,A])}),P?i.jsx(Or,{position:P,children:i.jsx(Br,{children:"موقع النقطة المقترحة"})}):null]})})}),T?i.jsx("div",{role:"dialog","aria-modal":"true","aria-label":"خريطة تحديد الموقع",onClick:()=>W(!1),style:{position:"fixed",inset:0,zIndex:6e3,background:"rgba(14, 16, 20, 0.62)",backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)",display:"flex",alignItems:"center",justifyContent:"center",padding:14},children:i.jsxs("div",{className:"card",onClick:V=>V.stopPropagation(),style:{position:"relative",width:"min(520px, 96vw)",height:"min(86dvh, calc(100dvh - 48px))",padding:0,overflow:"hidden",borderRadius:26},children:[i.jsx("button",{type:"button",onClick:()=>{if(!P||P.length!==2){t("انقر على الخريطة لتحديد الموقع أولاً.","تنبيه");return}W(!1)},"aria-label":"تأكيد الموقع",title:"تأكيد الموقع",style:{position:"absolute",top:10,insetInlineStart:10,zIndex:2500,pointerEvents:"auto",height:44,padding:"0 14px",borderRadius:999,border:"1px solid rgba(245, 192, 0, 0.55)",background:"linear-gradient(145deg, var(--primary) 0%, var(--primary-hover) 100%)",boxShadow:"var(--shadow-gold)",color:"var(--secondary)",cursor:"pointer",display:"inline-flex",alignItems:"center",justifyContent:"center",fontWeight:950,fontSize:"0.92rem"},children:"تأكيد الموقع"}),i.jsx("button",{type:"button",onClick:()=>W(!1),"aria-label":"إغلاق",title:"إغلاق",style:{position:"absolute",top:10,left:"50%",transform:"translateX(-50%)",zIndex:2500,pointerEvents:"auto",width:44,height:44,borderRadius:999,border:"1px solid rgba(245, 192, 0, 0.55)",background:"linear-gradient(145deg, var(--primary) 0%, var(--primary-hover) 100%)",boxShadow:"var(--shadow-gold)",color:"var(--secondary)",cursor:"pointer",display:"inline-flex",alignItems:"center",justifyContent:"center",fontWeight:900},children:"×"}),i.jsxs(ra,{center:he,zoom:15,minZoom:10,maxZoom:19,scrollWheelZoom:!0,style:{height:"100%",width:"100%"},children:[i.jsx(ia,{}),i.jsx(aa,{}),i.jsx(Es,{position:P}),i.jsx(oo,{onPick:(V,A)=>N([V,A])}),P?i.jsx(Or,{position:P,children:i.jsx(Br,{children:"موقع النقطة المقترحة"})}):null]})]})}):null,i.jsx(Ht,{type:"submit",loading:E,style:{width:"100%"},confirm:!1,showErrorAlert:!1,children:a?"إضافة النقطة":"إرسال الطلب للمراجعة"})]})]})})},tN=e=>typeof window>"u"||!e?"":`${window.location.origin}/share/cart/${e}`,a0=e=>{const t=String(e||"").trim();return t?["Cart link:",`‭${t}‬`,t]:[]},nN=()=>{const[e,t]=f.useState([]),[n,a]=f.useState(!0),[o,l]=f.useState(null),[c,h]=f.useState(null),[u,m]=f.useState(localStorage.getItem("isGuest")==="true"),{showAlert:g,showPrompt:x,showConfirm:v}=qe(),b=async()=>{try{const C=await qa();t(C)}catch(C){console.error("Error fetching carts:",C)}finally{a(!1)}};f.useEffect(()=>{(async()=>{if(await b(),!!Ms())try{const{notices:C}=await n1(),I=Array.isArray(C)?C:[];for(const E of I){const k=typeof E=="string"?E:E==null?void 0:E.text;k&&await g(k,"تنبيه")}}catch{}})()},[]);const _=async()=>{const C=await x("أدخل اسم السلة الجديدة (مثل: أغراض المنزل):","اسم السلة...");if(C)try{await td(C),b()}catch(I){g($e(I,"تعذر إنشاء السلة."),"خطأ")}},j=C=>{var I;if(C.effective_unit_price!=null&&C.effective_unit_price!==""){const E=Number(C.effective_unit_price);if(Number.isFinite(E))return E}return Number(((I=C.product_details)==null?void 0:I.price)??0)},P=C=>{const I=C.catalog_unit_price;if(I==null||I==="")return null;const E=Number(I);return Number.isFinite(E)?E:null},N=C=>j(C)*Number(C.quantity??0),w=async C=>{let I=C.share_token!=null&&C.share_token!==""?String(C.share_token):"";if(!I)try{const le=await e1(C.id);I=(le==null?void 0:le.share_token)!=null&&le.share_token!==""?String(le.share_token):""}catch{I=""}if(!I){g("تعذر الحصول على رابط المشاركة. تحقق من الاتصال بالخادم ثم حدّث الصفحة.","مشاركة السلة");return}const E=tN(I),k=C.name||"سلة المشتريات",B=C.items||[],M=B.reduce((le,V)=>le+N(V),0),T=B.map((le,V)=>{const A=le.product_details||{},ie=le.line_title||A.name||"منتج",q=j(le),ce=P(le),ne=Number(le.quantity??0),ue=N(le);let $=`${V+1}) ${ie}
   ${ne} × ${q.toFixed(2)} ₪ = ${ue.toFixed(2)} ₪`;le.is_promotional_line&&ce!=null&&Math.abs(q-ce)>1e-9?$+=`
   (سعر عرض ممول؛ السعر المعتاد في المتجر ${ce.toFixed(2)} ₪)`:le.is_promotional_line&&le.is_standalone_ad_line&&($+=`
   (عرض ممول مستقل — بسعر الإعلان)`);const G=(le.note||"").trim();return G&&($+=`
   📌 ملاحظة: ${G}`),$}),W=(C.notes||"").trim(),U=le=>le?[`رادار — ${k}`,`الإجمالي: ${M} ₪`,"التفاصيل الكاملة في الرابط أدناه.","","────────","رابط عرض السلة على موقع رادار:",...a0(E),"","تم إنشاء القائمة من تطبيق رادار."].join(`
`):[`رادار — ${k}`,...W?[`ملاحظة على السلة: ${W}`,"──────────────────"]:[],...T,"──────────────────",`الإجمالي: ${M} ₪`,"","────────","رابط عرض السلة على موقع رادار (اضغط للصفحة والصور):",...a0(E),"","تم إنشاء القائمة من تطبيق رادار."].join(`
`);let se=U(!1),de=`https://wa.me/?text=${encodeURIComponent(se)}`;de.length>6e3&&(se=U(!0),de=`https://wa.me/?text=${encodeURIComponent(se)}`),window.open(de,"_blank","noopener,noreferrer")||g("تعذر فتح واتساب. اسمح بالنوافذ المنبثقة ثم أعد المحاولة.","مشاركة السلة")},z=async C=>{if(await v(`حذف السلة «${C.name}» وجميع محتوياتها نهائياً؟ لا يمكن التراجع.`,"تأكيد حذف السلة"))try{await dS(C.id),await b()}catch(E){g($e(E,"تعذر حذف السلة."),"خطأ")}};return i.jsx(Be,{children:i.jsxs("div",{className:"carts-page",children:[u?i.jsx(Xp,{title:"سلال المشتريات متوفرة للأعضاء فقط",message:"قم بإنشاء حساب مجاني لتتمكن من إنشاء سلال مشتريات متعددة ومشاركتها مع عائلتك وأصدقائك عبر الواتساب."}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"carts-head flex-between",children:[i.jsx("h1",{className:"carts-title",children:"سلال المشتريات"}),i.jsxs("button",{className:"btn-primary carts-new-btn",onClick:_,children:[i.jsx(Vc,{size:20})," سلة جديدة"]})]}),n?i.jsx("p",{children:"جاري تحميل السلال..."}):e.length>0?i.jsx("div",{className:"carts-grid",children:e.map(C=>{const I=E=>E.includes("الإعلان الممول")&&(E.includes("انتهت")||E.includes("انتهاء")||E.includes("تمت إزالة")||E.includes("أُزيل")||E.includes("مستقل")||E.includes("غير مربوط")||E.includes("كتالوج")||E.includes("عُدِّ سعره")||E.includes("السعر الأصلي"));return String(C.notes||"").split(`
`).map(E=>E.trim()).filter(I),i.jsx("div",{className:"card shopping-cart-card",children:i.jsxs("div",{className:"cart-collapsed-row",children:[i.jsx(ke,{to:`/carts/${C.id}`,className:"cart-collapsed-link","aria-label":`فتح سلة ${C.name}`,children:i.jsx("h3",{className:"cart-collapsed-title",children:C.name})}),i.jsxs("div",{className:"actions flex-center",style:{gap:"10px"},children:[i.jsx("button",{type:"button",className:"action-btn share",title:"مشاركة واتساب",onClick:()=>w(C),children:i.jsx(xv,{size:18})}),i.jsx("button",{type:"button",className:"action-btn delete",title:"حذف السلة",onClick:()=>z(C),children:i.jsx($i,{size:18})})]})]})},C.id)})}):i.jsxs("div",{className:"empty-state card flex-center",style:{flexDirection:"column",padding:"50px"},children:[i.jsx("p",{children:"ليس لديك أي سلال مشتريات بعد."}),i.jsx("button",{className:"btn-primary",onClick:_,style:{width:"auto",marginTop:"20px"},children:"ابدأ بإنشاء أول سلة"})]})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        `}})]})})},rN=()=>{const{cartId:e}=po(),{showAlert:t,showConfirm:n}=qe(),[a,o]=f.useState(null),[l,c]=f.useState(!0),[h,u]=f.useState(null),[m,g]=f.useState(null),x=f.useCallback(async()=>{if(e){c(!0);try{const C=await e1(e);o(C)}catch(C){o(null),t($e(C,"تعذر تحميل السلة."),"خطأ")}finally{c(!1)}}},[e,t]);f.useEffect(()=>{x()},[x]);const v=C=>{var I;if(C.effective_unit_price!=null&&C.effective_unit_price!==""){const E=Number(C.effective_unit_price);if(Number.isFinite(E))return E}return Number(((I=C.product_details)==null?void 0:I.price)??0)},b=C=>{const I=C.catalog_unit_price;if(I==null||I==="")return null;const E=Number(I);return Number.isFinite(E)?E:null},_=C=>v(C)*Number(C.quantity??0),j=f.useMemo(()=>((a==null?void 0:a.items)||[]).reduce((I,E)=>I+_(E),0),[a]),P=async C=>{if(!a)return;const I=C??"";if((a.notes??"")!==I){g(a.id);try{await hS(a.id,{notes:I}),await x()}catch(E){t($e(E,"تعذر حفظ الملاحظة.")),await x()}finally{g(null)}}},N=async C=>{var k;const I=C.line_title||((k=C.product_details)==null?void 0:k.name)||"هذا السطر";if(await n(`هل تريد إزالة «${I}» من السلة؟`,"تأكيد الحذف")){u(C.id);try{await gS(C.id),await x()}catch(B){t($e(B,"تعذر حذف المنتج."))}finally{u(null)}}},w=async(C,I)=>{const E=Number(C.quantity??0)+I;if(E<1){await N(C);return}u(C.id);try{await Wg(C.id,{quantity:E}),await x()}catch(k){t($e(k,"تعذر تحديث الكمية."))}finally{u(null)}},z=async(C,I)=>{const E=parseInt(String(I),10);if(Number.isNaN(E)||E<1){t("الكمية يجب أن تكون رقماً صحيحاً ≥ ١"),await x();return}u(C.id);try{await Wg(C.id,{quantity:E}),await x()}catch(k){t($e(k,"تعذر تحديث الكمية.")),await x()}finally{u(null)}};return i.jsx(Be,{children:i.jsxs("div",{className:"cart-details-page",children:[i.jsx("div",{style:{marginBottom:12},children:i.jsx(ke,{to:"/carts",className:"cart-details-back",children:"← رجوع للسلال"})}),l?i.jsx("div",{className:"card cart-details-loading",children:"جاري تحميل السلة…"}):a?i.jsxs("div",{className:"card cart-details-card",children:[i.jsxs("div",{className:"cart-details-head",children:[i.jsx("h1",{className:"cart-details-title",children:a.name}),i.jsxs("div",{className:"cart-details-total",children:["الإجمالي: ",i.jsxs("span",{className:"cart-details-total-num",children:[j.toFixed(2)," ₪"]})]})]}),i.jsxs("div",{className:"cart-notes-section",children:[i.jsx("label",{className:"cart-note-label",htmlFor:`cart-notes-${a.id}`,children:"ملاحظة على السلة"}),i.jsx("textarea",{id:`cart-notes-${a.id}`,className:"cart-note-input",rows:2,placeholder:"مثال: موعد التوصيل، طلبات عامة على الطلب…",defaultValue:a.notes||"",disabled:m===a.id,onBlur:C=>P(C.target.value)},`${a.id}-cart-notes-${a.notes??""}`)]}),i.jsx("div",{className:"cart-items",children:Array.isArray(a.items)&&a.items.length>0?a.items.map(C=>i.jsx("div",{className:"cart-line-block",children:i.jsxs("div",{className:"item-row cart-item-row",style:{display:"grid",gridTemplateColumns:"56px minmax(0, 1fr) auto",gap:12,alignItems:"center",padding:"10px 0 6px",borderRadius:C.is_promotional_line?12:0,marginInline:C.is_promotional_line?-4:0,paddingInline:C.is_promotional_line?10:0,marginTop:C.is_promotional_line?6:0,background:C.is_promotional_line?"linear-gradient(135deg, rgba(245,192,0,0.12) 0%, rgba(255,249,230,0.35) 100%)":void 0,border:C.is_promotional_line?"1px solid rgba(245,192,0,0.4)":void 0},children:[i.jsx("div",{className:"cart-item-thumb",children:Kg(C).length>0?i.jsx(Ut,{images:Kg(C),height:56,borderRadius:12}):i.jsx("span",{className:"cart-item-thumb-placeholder flex-center",children:i.jsx(cn,{size:20,color:"var(--text-light)"})})}),i.jsxs("div",{style:{minWidth:0},children:[(()=>{var B,M,T,W;const I=((B=C==null?void 0:C.product_details)==null?void 0:B.store)??((M=C==null?void 0:C.product_details)==null?void 0:M.store_id)??(C==null?void 0:C.store)??null,E=(C==null?void 0:C.product)??((T=C==null?void 0:C.product_details)==null?void 0:T.id)??null,k=C.line_title||((W=C.product_details)==null?void 0:W.name);return I&&E?i.jsx(ke,{to:`/stores/${I}`,state:{scrollToProductId:E},style:{fontWeight:900,color:"var(--secondary)",textDecoration:"none"},title:"فتح المنتج داخل المتجر",children:k}):i.jsx("div",{style:{fontWeight:800},children:k})})(),C.is_promotional_line?i.jsxs("div",{style:{fontSize:"0.85rem",marginTop:6},children:[i.jsx("span",{style:{display:"inline-block",padding:"3px 10px",borderRadius:8,fontWeight:900,color:"var(--secondary)",background:"rgba(245,192,0,0.35)",border:"1px solid rgba(245,192,0,0.5)"},children:C.is_standalone_ad_line?`عرض ممول مستقل: ${v(C).toFixed(2)} ₪ للقطعة`:`عرض ممول: ${v(C).toFixed(2)} ₪ للقطعة`}),!C.is_standalone_ad_line&&b(C)!=null&&Math.abs(v(C)-b(C))>1e-9?i.jsxs("span",{style:{marginInlineStart:10,textDecoration:"line-through",color:"var(--text-secondary)"},children:["سعر المتجر ",b(C).toFixed(2)," ₪"]}):null,i.jsxs("span",{style:{color:"var(--text-light)",marginInlineStart:8},children:["· المجموع ",_(C).toFixed(2)," ₪"]})]}):i.jsxs("div",{style:{fontSize:"0.85rem",color:"var(--text-secondary)",marginTop:4},children:[(b(C)!=null?b(C):v(C)).toFixed(2)," ₪ للقطعة",i.jsxs("span",{style:{color:"var(--text-light)",marginInlineStart:8},children:["· المجموع ",_(C).toFixed(2)," ₪"]})]})]}),i.jsxs("div",{className:"flex-center cart-item-actions",children:[i.jsxs("div",{className:"cart-qty-stepper",dir:"ltr",children:[i.jsx("button",{type:"button",className:"cart-qty-stepper__btn cart-qty-stepper__btn--minus",disabled:h===C.id,onClick:()=>w(C,-1),"aria-label":"تقليل الكمية",children:i.jsx(Gy,{size:18,strokeWidth:2.5,"aria-hidden":!0})}),i.jsx("input",{type:"text",inputMode:"numeric",className:"cart-qty-stepper__input",disabled:h===C.id,defaultValue:C.quantity,onBlur:I=>z(C,I.target.value),"aria-label":"الكمية"},`${C.id}-${C.quantity}`),i.jsx("button",{type:"button",className:"cart-qty-stepper__btn cart-qty-stepper__btn--plus",disabled:h===C.id,onClick:()=>w(C,1),"aria-label":"زيادة الكمية",children:i.jsx(Ky,{size:18,strokeWidth:2.5,"aria-hidden":!0})})]}),i.jsx("button",{type:"button",className:"cart-item-remove",title:"حذف من السلة",disabled:h===C.id,onClick:()=>N(C),"aria-label":"حذف من السلة",children:i.jsx($i,{size:17,strokeWidth:2.25,"aria-hidden":!0})})]})]})},C.id)):i.jsx("p",{style:{color:"#999",fontSize:"0.9rem",margin:0},children:"السلة فارغة حالياً."})})]}):i.jsx("div",{className:"card cart-details-loading",children:"تعذر تحميل السلة."}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        `}})]})})},iN=()=>{const[e,t]=f.useState([]),[n,a]=f.useState(!0),{showAlert:o,showSelect:l,showPrompt:c}=qe(),h=localStorage.getItem("isGuest")==="true",u=!!localStorage.getItem("token")&&!h,m=Ms(),[g,x]=f.useState({}),[v,b]=f.useState({}),[_,j]=f.useState(null);f.useEffect(()=>{if(!u){x({}),b({});return}let E=!1;return(async()=>{try{const k=await Va();if(E)return;const B={},M={};for(const T of k||[])T.product!=null&&T.product!==""?M[String(T.product)]=T.id:T.sponsored_ad!=null&&(B[T.sponsored_ad]=T.id);x(B),b(M)}catch{E||(x({}),b({}))}})(),()=>{E=!0}},[u]),f.useEffect(()=>{(async()=>{try{const k=await t1();t(k)}catch(k){console.error("Error fetching offers:",k)}finally{a(!1)}})()},[]);const P=async E=>{if(!u){await o("سجّل الدخول لاستخدام المفضلة. وضع الزائر لا يدعمها.","تنبيه");return}try{if(!E.product){const M=g[E.id];if(M)await zs(M),x(T=>{const W={...T};return delete W[E.id],W}),await o("أُزيل العرض المستقل من المفضلة.","تم");else{await os(null,E.id);const W=(await Va()||[]).find(U=>U.sponsored_ad===E.id&&(U.product==null||U.product===""));W&&x(U=>({...U,[E.id]:W.id})),await o("تمت إضافة عرض الإعلان — يُزال تلقائياً عند انتهاء الإعلان.","تم")}return}const k=String(E.product),B=v[k];if(B)await zs(B),b(M=>{const T={...M};return delete T[k],T}),await o("أُزيل المنتج من المفضلة.","تم");else{await os(E.product,E.id);const T=(await Va()||[]).find(W=>W.product!=null&&String(W.product)===k);T&&b(W=>({...W,[k]:T.id})),await o("تمت إضافة المنتج للمفضلة.","تم")}}catch(k){await o($e(k,"تعذرت الإضافة للمفضلة."),"خطأ")}},N=E=>E.product?!!v[String(E.product)]:!!g[E.id],w=async E=>{if(!Ms()){await o("ميزة السلال للأعضاء المسجّلين فقط (متسوّق، تاجر، أو مدير) وليست لوضع الزائر. سجّل الدخول ثم أعد المحاولة.","تنبيه");return}j(E);const k=await qa(),B=Array.isArray(k)?k:[];if(B.length===0){await z(E,{isFirstCart:!0});return}const M=B.map(W=>({id:String(W.id),label:W.name||`سلة #${W.id}`,value:W.id,badge:Array.isArray(W.items)?W.items.length:0})),T=await l("اختر السلة التي تريد إضافة المنتج إليها:","إضافة إلى أي سلة؟",M,{primaryActionLabel:"سلة جديدة"});if(T!=null){if(T==="__primary__"){await z();return}await C({id:T})}},z=async(E,{isFirstCart:k=!1}={})=>{const B=E??_;if(!B)return;const M=await c(k?"لا توجد لديك سلال بعد. اكتب اسماً لسلتك الأولى — يُضاف المنتج إليها مباشرة.":"اكتب اسماً للسلة الجديدة ثم يُضاف المنتج إليها.",k?"مثال: سلة اليوم":"اسم السلة...",k?"إنشاء أول سلة":"سلة جديدة");if(!M||!String(M).trim())return;const T=await td(String(M).trim());await ao(T.id,B.productId??null,B.quantity??1,B.sponsoredAdId??null),await o("تمت إضافة المنتج إلى السلة.","تم"),j(null)},C=async E=>{const k=_;k&&(await ao(E.id,k.productId??null,k.quantity??1,k.sponsoredAdId??null),await o("تمت إضافة المنتج إلى السلة.","تم"),j(null))},I=async E=>{try{await w({productId:E.product??null,sponsoredAdId:E.id,quantity:1})}catch(k){await o($e(k,"تعذرت الإضافة للسلة."),"خطأ")}};return i.jsx(Be,{children:i.jsxs("div",{className:"offers-page-wrap",children:[i.jsxs("header",{className:"offers-hero",children:[i.jsx("div",{className:"offers-hero-icon","aria-hidden":!0,children:i.jsx(kc,{size:26,strokeWidth:2.25})}),i.jsxs("div",{className:"offers-hero-text",children:[i.jsx("h1",{className:"offers-hero-title",children:"عروض حصرية"}),i.jsx("p",{className:"offers-hero-sub",children:"عروض مُختارة من المتاجر — بطاقات مرتبة لتصفّح مريح على كل الأجهزة"})]})]}),n?i.jsx("p",{className:"offers-loading",children:"جاري تحميل العروض..."}):e.length>0?i.jsx("div",{className:"offers-grid",children:e.map(E=>i.jsxs("article",{className:"offers-card",children:[i.jsxs("div",{className:"offers-card-media",children:[Xe(E).length>0?i.jsx(Ut,{images:Xe(E),fill:!0,borderRadius:0}):i.jsx("div",{className:"offers-card-media-fallback",children:"عرض"}),i.jsxs("div",{className:"offers-card-media-overlay",children:[i.jsx("div",{className:"offers-card-media-title",children:E.title}),Number(E.product_price)>0?i.jsxs("div",{className:"offers-card-media-price",children:[Number(E.product_price).toFixed(2)," ₪"]}):null]}),i.jsx("button",{type:"button",className:`offers-card-media-cartbtn${m?"":" offers-card-media-cartbtn--muted"}`,onClick:k=>{k.stopPropagation(),I(E)},title:"إضافة إلى السلة","aria-label":"إضافة إلى السلة",children:i.jsx(wi,{size:18,strokeWidth:2,"aria-hidden":!0})}),i.jsx("button",{type:"button",className:`offers-card-media-favbtn${u?"":" offers-card-media-favbtn--muted"}`,onClick:k=>{k.stopPropagation(),P(E)},title:E.product?"":"يُزال من المفضلة عند انتهاء الإعلان","aria-label":N(E)?"إزالة من المفضلة":"إضافة للمفضلة",children:i.jsx(gi,{size:20,strokeWidth:2,color:"#e91e63",fill:N(E)?"#e91e63":"none"})})]}),i.jsxs("div",{className:"offers-card-body",children:[i.jsx("span",{className:"offers-card-store",children:E.store_name}),i.jsx(ke,{to:`/stores/${E.store}`,state:E.product?{scrollToProductId:E.product}:void 0,className:"offers-card-title-link",title:"فتح المنتج داخل المتجر",children:i.jsx("h2",{className:"offers-card-title",children:E.title})}),Number(E.product_price)>0?i.jsxs("div",{className:"offers-card-prices",children:[E.product_details&&Number(E.product_details.price)!==Number(E.product_price)?i.jsxs("span",{className:"offers-price-old",children:[Number(E.product_details.price).toFixed(2)," ₪"]}):null,i.jsxs("span",{className:"offers-price-now",children:[Number(E.product_price).toFixed(2)," ₪"]}),E.product_details&&Number(E.product_details.price)!==Number(E.product_price)?i.jsx("span",{className:"offers-price-badge",children:"عرض"}):null]}):null,E.description?i.jsx("p",{className:"offers-card-desc",children:E.description}):null,i.jsx(ke,{to:`/stores/${E.store}`,className:"offers-btn offers-btn--block",children:"عرض المتجر"})]})]},E.id))}):i.jsxs("div",{className:"offers-empty card",children:[i.jsx(kc,{size:44,color:"var(--text-light)","aria-hidden":!0}),i.jsx("p",{children:"لا توجد عروض حالياً. عد لاحقاً."})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
            gap: 14px;
            align-items: start;
          }
          @media (max-width: 720px) {
            .offers-page-wrap {
              padding-inline: clamp(6px, 2vw, 14px);
            }
            .offers-hero {
              padding: 14px 14px;
              margin-bottom: 16px;
              border-radius: 16px;
            }
            .offers-hero-icon {
              width: 44px;
              height: 44px;
              border-radius: 14px;
            }
            .offers-hero-title {
              font-size: 1.15rem;
            }
            .offers-hero-sub {
              font-size: 0.8rem;
              margin-top: 6px;
            }
            .offers-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 8px;
              align-items: stretch;
            }
            .offers-card {
              width: 100%;
              max-width: none;
              border-radius: 14px;
              min-width: 0;
            }
            .offers-card-media {
              aspect-ratio: 4 / 3;
              min-height: 0;
              max-height: 112px;
            }
            .offers-card-media-cartbtn {
              width: 32px;
              height: 32px;
              top: 6px;
              inset-inline-start: 6px;
              border-radius: 11px;
            }
            .offers-card-media-cartbtn svg {
              width: 15px;
              height: 15px;
            }
            .offers-card-media-favbtn {
              width: 32px;
              height: 32px;
              top: 6px;
              inset-inline-end: 6px;
              border-radius: 11px;
            }
            .offers-card-media-favbtn svg {
              width: 16px;
              height: 16px;
            }
            .offers-card-media-overlay {
              padding-block: 6px 5px;
              padding-inline: 7px;
            }
            .offers-card-media:has(.offers-card-media-cartbtn) .offers-card-media-overlay {
              padding-inline-start: 40px;
            }
            .offers-card-media:has(.offers-card-media-favbtn) .offers-card-media-overlay {
              padding-inline-end: 40px;
            }
            .offers-card-media-title {
              font-size: 0.68rem;
              -webkit-line-clamp: 2;
            }
            .offers-card-media-price {
              font-size: 0.68rem;
              padding: 3px 6px;
            }
            .offers-card-body {
              padding: 7px 8px 9px;
              gap: 0;
            }
            .offers-card-store {
              font-size: 0.62rem;
              padding: 3px 6px;
              margin-bottom: 4px;
              border-radius: 6px;
            }
            .offers-card-title {
              font-size: 0.78rem !important;
              margin: 0 0 4px !important;
              -webkit-line-clamp: 2;
            }
            .offers-card-prices {
              gap: 4px;
              margin-bottom: 4px;
            }
            .offers-price-old {
              font-size: 0.68rem;
            }
            .offers-price-now {
              font-size: 0.82rem;
            }
            .offers-price-badge {
              font-size: 0.58rem;
              padding: 2px 5px;
            }
            .offers-card-desc {
              font-size: 0.68rem;
              line-height: 1.4;
              margin: 0 0 6px;
              -webkit-line-clamp: 2;
            }
            .offers-btn {
              font-size: 0.68rem;
              padding: 7px 8px;
              border-radius: 10px;
              gap: 4px;
            }
            .offers-btn svg {
              width: 14px;
              height: 14px;
            }
            .offers-btn--block {
              min-height: 34px;
              padding: 6px 8px;
              font-size: 0.7rem;
              border-width: 1.5px;
            }
          }
          @media (min-width: 960px) {
            .offers-grid {
              grid-template-columns: repeat(3, 1fr);
              gap: 16px;
            }
          }
          @media (min-width: 1200px) {
            .offers-grid {
              grid-template-columns: repeat(4, minmax(0, 1fr));
              gap: 14px;
            }
          }
          .offers-card {
            border-radius: 18px;
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
            aspect-ratio: 3 / 2;
            min-height: 96px;
            max-height: 168px;
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
            inset-inline-start: 10px;
            z-index: 3;
            width: 40px;
            height: 40px;
            border-radius: 14px;
            border: 1px solid rgba(245,192,0,0.5);
            background: rgba(255, 255, 255, 0.94);
            box-shadow: 0 6px 18px rgba(26, 29, 38, 0.12);
            color: var(--secondary);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: transform 0.12s ease, filter 0.15s ease, box-shadow 0.15s ease;
          }
          .offers-card-media-cartbtn--muted {
            opacity: 0.88;
          }
          .offers-card-media-cartbtn:hover{
            transform: translateY(-1px);
            filter: brightness(1.02);
            box-shadow: 0 8px 22px rgba(245, 192, 0, 0.22);
          }
          .offers-card-media-cartbtn:active{
            transform: translateY(0);
          }
          .offers-card-media-favbtn{
            position: absolute;
            top: 10px;
            inset-inline-end: 10px;
            z-index: 3;
            width: 40px;
            height: 40px;
            border-radius: 14px;
            border: 1px solid rgba(233, 30, 99, 0.38);
            background: rgba(255, 255, 255, 0.94);
            box-shadow: 0 6px 18px rgba(26, 29, 38, 0.12);
            color: #e91e63;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: transform 0.12s ease, filter 0.15s ease, box-shadow 0.15s ease;
          }
          .offers-card-media-favbtn--muted {
            opacity: 0.88;
          }
          .offers-card-media-favbtn:hover{
            transform: translateY(-1px);
            filter: brightness(1.02);
            box-shadow: 0 8px 22px rgba(233, 30, 99, 0.18);
          }
          .offers-card-media-favbtn:active{
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
            padding-inline-start: 52px;
          }
          .offers-card-media:has(.offers-card-media-favbtn) .offers-card-media-overlay {
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
            padding: 12px 14px 14px;
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
            margin: 0 0 8px;
            font-size: 0.98rem;
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
        `}})]})})};function xu(e,t){const a=m=>m*Math.PI/180,o=a(t[0]-e[0]),l=a(t[1]-e[1]),c=a(e[0]),h=a(t[0]),u=Math.sin(o/2)**2+Math.cos(c)*Math.cos(h)*Math.sin(l/2)**2;return 6371*(2*Math.atan2(Math.sqrt(u),Math.sqrt(1-u)))}function yu(e){const t=Number(e==null?void 0:e.latitude),n=Number(e==null?void 0:e.longitude);return Number.isFinite(t)&&Number.isFinite(n)}const vu=12,aN=()=>{const[e]=qc(),t=e.get("q")||"",n=t.trim(),a=n.toLowerCase(),{userMapLocation:o,setSearchQuery:l}=Zs(),[c,h]=f.useState([]),[u,m]=f.useState([]),[g,x]=f.useState(!0),[v,b]=f.useState(""),[_,j]=f.useState(null),[P,N]=f.useState(1);f.useEffect(()=>{l(n)},[n,l]),f.useEffect(()=>{N(1)},[t]),f.useEffect(()=>{let k=!1;return(async()=>{try{const B=await la();k||m(Array.isArray(B)?B:[])}catch(B){console.error(B),k||m([])}})(),()=>{k=!0}},[]),f.useEffect(()=>{let k=!1;return(async()=>{try{x(!0),b("");let B,M,T=null;(o==null?void 0:o.length)===2?(B=o[0],M=o[1],T=[B,M],k||j(T)):(B=31.5,M=34.4,T=null,k||j(null));const W=await ed(B,M),U=Array.isArray(W)?W:(W==null?void 0:W.results)||[];k||h(U)}catch(B){console.error(B),k||(b("تعذر تحميل المتاجر. تحقق من الاتصال بالخادم."),h([]))}finally{k||x(!1)}})(),()=>{k=!0}},[o]);const w=f.useMemo(()=>a?(c||[]).filter(k=>{const B=(k.store_name||"").toLowerCase(),M=(k.category_name||"").toLowerCase();return B.includes(a)||M.includes(a)}):c,[c,a]),z=f.useMemo(()=>{if(!_)return w;const k=_;return[...w].sort((B,M)=>{if(!yu(B))return 1;if(!yu(M))return-1;const T=xu(k,[Number(B.latitude),Number(B.longitude)]),W=xu(k,[Number(M.latitude),Number(M.longitude)]);return T-W})},[w,_]),C=Math.max(1,Math.ceil(z.length/vu)),I=Math.min(P,C),E=f.useMemo(()=>{const k=(I-1)*vu;return z.slice(k,k+vu)},[z,I]);return f.useEffect(()=>{I!==P&&N(I)},[I,P]),i.jsx(Be,{children:i.jsxs("div",{className:"search-page",children:[i.jsx("header",{className:"search-page-hero",children:i.jsxs("div",{className:"search-page-head",children:[i.jsx("h1",{className:"search-page-title",children:"نتائج البحث"}),n?i.jsxs("p",{className:"search-page-query",children:[i.jsx(Ps,{size:18,"aria-hidden":!0}),"«",n,"»"]}):i.jsx("p",{className:"search-page-hint",children:"اكتب في شريط البحث أعلاه واضغط Enter أو زر البحث لعرض المتاجر المطابقة."})]})}),v?i.jsx("p",{className:"search-page-error",children:v}):null,g?i.jsx("p",{className:"search-page-loading",children:"جاري تحميل المتاجر…"}):z.length===0?i.jsx("p",{className:"search-page-empty",children:n?"لا توجد متاجر تطابق بحثك. جرّب كلمات أخرى أو تصفح من الصفحة الرئيسية.":"لا توجد نتائج بعد."}):i.jsxs(i.Fragment,{children:[i.jsxs("p",{className:"search-page-count",children:[z.length," متجر"]}),i.jsx("div",{className:"search-page-grid",children:E.map(k=>{const B=rd(k,u),M=_&&yu(k)?xu(_,[Number(k.latitude),Number(k.longitude)]):null,T=Ls(k.business_hours_weekly)&&k.is_open_now===!0?"مفتوح":Ls(k.business_hours_weekly)&&k.is_open_now===!1?"مغلق":null;return i.jsxs(ke,{to:`/stores/${k.id}`,className:"search-page-card",children:[i.jsxs("div",{className:"search-page-card-main",children:[i.jsxs("div",{className:"search-page-card-text",children:[i.jsx("span",{className:"search-page-card-name",children:k.store_name}),k.category_name?i.jsx("span",{className:"search-page-card-cat",children:k.category_name}):null,i.jsx("span",{className:"search-page-card-dist",children:M!=null?`📍 ${M.toFixed(1)} كم`:"بدون مسافة"})]}),T?i.jsx("span",{className:"search-page-card-status",children:T}):null]}),i.jsx("div",{className:"search-page-card-thumb",children:B.type==="image"?i.jsx("img",{className:"search-page-card-thumb-img",src:B.url,alt:""}):i.jsx("span",{className:"search-page-card-thumb-emoji",style:{background:B.bg},children:B.emoji})})]},k.id)})}),C>1?i.jsxs("div",{className:"search-page-pager",role:"navigation","aria-label":"تصفح الصفحات",children:[i.jsx("button",{type:"button",className:"search-page-pager-btn",disabled:I<=1,onClick:()=>N(k=>Math.max(1,k-1)),children:"السابق"}),i.jsxs("span",{className:"search-page-pager-meta",children:[I," / ",C]}),i.jsx("button",{type:"button",className:"search-page-pager-btn",disabled:I>=C,onClick:()=>N(k=>Math.min(C,k+1)),children:"التالي"})]}):null]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
            gap: 10px;
          }
          .search-page-card {
            display: flex;
            align-items: stretch;
            gap: 10px;
            padding: 12px 14px;
            border-radius: var(--radius-lg);
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
            width: 52px;
            height: 52px;
            border-radius: 12px;
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
        `}})]})})},oN=()=>{const[e,t]=f.useState([]),[n,a]=f.useState([]),[o,l]=f.useState(!0),[c,h]=f.useState("products"),[u,m]=f.useState(localStorage.getItem("isGuest")==="true"),{showAlert:g,showConfirm:x,showPrompt:v,showSelect:b}=qe(),[_,j]=f.useState(null),P=f.useCallback(async()=>{l(!0);try{const M=localStorage.getItem("token")&&localStorage.getItem("isGuest")!=="true"&&localStorage.getItem("user_type")==="shopper",[T,W,U]=await Promise.all([Va(),r1(),M?n1().catch(()=>({notices:[]})):Promise.resolve({notices:[]})]);t(Array.isArray(T)?T:(T==null?void 0:T.results)||[]),a(Array.isArray(W)?W:(W==null?void 0:W.results)||[]);const se=U==null?void 0:U.notices,de=Array.isArray(se)?se:[];for(const he of de){const le=typeof he=="string"?he:he==null?void 0:he.text;le&&await g(le,"تنبيه")}}catch(M){console.error("Error fetching favorites:",M),t([]),a([])}finally{l(!1)}},[g]);f.useEffect(()=>{P()},[P]);const N=async(M,{allowCreate:T=!0}={})=>{if(!Ms()){await g("ميزة السلال للأعضاء المسجّلين فقط (متسوّق، تاجر، أو مدير) وليست لوضع الزائر. سجّل الدخول ثم أعد المحاولة.");return}j(M);const W=await qa(),U=Array.isArray(W)?W:[];if(U.length===0&&T){await w(M,{isFirstCart:!0});return}const se=U.map(he=>({id:String(he.id),label:he.name||`سلة #${he.id}`,value:he.id,badge:Array.isArray(he.items)?he.items.length:0})),de=await b("اختر السلة التي تريد إضافة المنتج إليها:","إضافة إلى أي سلة؟",se,T?{primaryActionLabel:"سلة جديدة"}:{});if(de!=null){if(de==="__primary__"){if(!T)return;await w();return}await z({id:de})}},w=async(M,{isFirstCart:T=!1}={})=>{const W=M??_;if(!W)return;const U=await v(T?"لا توجد لديك سلال بعد. اكتب اسماً لسلتك الأولى — يُضاف المنتج إليها مباشرة.":"اكتب اسماً للسلة الجديدة ثم يُضاف المنتج إليها.",T?"مثال: سلة اليوم":"اسم السلة...",T?"إنشاء أول سلة":"سلة جديدة");if(!U||!String(U).trim())return;const se=await td(String(U).trim());await ao(se.id,W.productId??null,W.quantity??1,W.sponsoredAdId??null),await g(W.success||"تمت الإضافة للسلة.","تم"),j(null)},z=async M=>{const T=_;T&&(await ao(M.id,T.productId??null,T.quantity??1,T.sponsoredAdId??null),await g(T.success||"تمت الإضافة للسلة.","تم"),j(null))},C=async M=>{if(await x("إزالة هذا المنتج من المفضلة؟"))try{await zs(M),t(W=>W.filter(U=>U.id!==M)),await g("تمت إزالة المنتج من المفضلة.","تم")}catch(W){await g($e(W,"حدث خطأ أثناء الإزالة."),"خطأ")}},I=async M=>{if(await x("إزالة هذا المحل من المفضلة؟"))try{await i1(M),a(W=>W.filter(U=>U.id!==M)),await g("تمت إزالة المحل من المفضلة.","تم")}catch(W){await g($e(W,"حدث خطأ أثناء الإزالة."),"خطأ")}},E=async M=>{if(M==null||M===""){await g("معرّف المنتج غير متوفر. افتح صفحة المتجر وأعد المحاولة.");return}try{await N({productId:M,sponsoredAdId:null,quantity:1,success:"تمت إضافة المنتج للسلة."},{allowCreate:!0})}catch(T){await g($e(T,"تعذرت الإضافة للسلة."),"خطأ")}},k=async M=>{try{await N({productId:null,sponsoredAdId:M,quantity:1,success:"تمت إضافة عرض الإعلان المستقل للسلة."})}catch(T){await g($e(T,"تعذرت الإضافة للسلة."),"خطأ")}},B=(M,T,W)=>i.jsxs("button",{type:"button",className:`fav-tab ${c===M?"fav-tab-active":""}`,onClick:()=>h(M),children:[T,W>0?i.jsx("span",{className:"fav-tab-count",children:W}):null]});return i.jsxs(Be,{children:[i.jsx("div",{className:"favorites-page",children:u?i.jsx(Xp,{title:"المفضلة متوفرة للأعضاء فقط",message:"سجل دخولك لتجميع المنتجات والمحلات المفضّلة لديك."}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"favorites-head flex-center",children:[i.jsx("div",{className:"favorites-head-icon",children:i.jsx(gi,{size:24})}),i.jsx("h1",{className:"favorites-head-title",children:"المفضلة"})]}),i.jsxs("div",{className:"fav-tabs-row",children:[B("products","المنتجات المفضّلة",e.length),B("stores","المحلات المفضّلة",n.length)]}),o?i.jsx("p",{children:"جاري التحميل..."}):c==="products"?e.length>0?i.jsx("div",{className:"favorites-grid",children:e.map(M=>{const T=(M.product==null||M.product==="")&&M.sponsored_ad!=null,W=M.standalone_ad_display;if(T){if(!W)return i.jsxs("div",{className:"card favorite-card favorite-card--expired",children:[i.jsx("p",{className:"favorite-card-title",children:"عرض ممول مستقل"}),i.jsx("p",{className:"favorite-card-sub",children:"هذا الإعلان انتهى أو لم يعد متاحاً. يمكنك إزالته من المفضلة."}),i.jsx("button",{type:"button",className:"btn-primary",style:{marginTop:14},onClick:()=>C(M.id),children:"إزالة من المفضلة"})]},M.id);const V=Xe(W);return i.jsxs("div",{className:"card favorite-card",children:[i.jsx("div",{className:"favorite-card-media",children:V.length>0?i.jsx(Ut,{images:V,height:152,borderRadius:0}):i.jsx(Rr,{size:40,color:"var(--text-secondary)"})}),i.jsxs("div",{className:"favorite-card-body",children:[i.jsx("span",{className:"badge",style:{display:"inline-block",marginBottom:8,background:"#FFF9E6",color:"var(--secondary)",fontWeight:800,fontSize:"0.78rem"},children:"عرض ممول مستقل — يُزال تلقائياً عند انتهاء الإعلان"}),W.store_name?i.jsxs("p",{style:{margin:"0 0 8px",fontSize:"0.88rem",fontWeight:800,color:"var(--secondary)"},children:["المتجر: ",W.store_name]}):null,i.jsxs("div",{className:"flex-center",style:{justifyContent:"space-between",marginBottom:"12px"},children:[i.jsx("h3",{style:{fontSize:"1.2rem",margin:0},children:W.title}),i.jsx("button",{type:"button",className:"action-btn delete",onClick:()=>C(M.id),style:{background:"none",border:"none",cursor:"pointer",color:"#FF5252"},"aria-label":"إزالة من المفضلة",children:i.jsx($i,{size:20})})]}),i.jsxs("p",{style:{color:"var(--secondary)",fontWeight:"bold",fontSize:"1.1rem"},children:[Number(W.product_price).toFixed(2)," ₪"]}),i.jsx("p",{style:{color:"#666",fontSize:"0.85rem",marginTop:"5px"},children:W.description||"—"}),i.jsxs("div",{className:"actions",style:{marginTop:"20px",display:"flex",gap:8,flexWrap:"wrap"},children:[i.jsxs("button",{type:"button",className:"btn-primary",style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"10px"},onClick:()=>k(M.sponsored_ad),children:[i.jsx(Nh,{size:18})," إضافة للسلة"]}),W.store!=null?i.jsx(ke,{to:`/stores/${W.store}`,style:{display:"inline-flex",alignItems:"center",padding:"10px 14px",borderRadius:10,border:"1.5px solid var(--border)",textDecoration:"none",color:"var(--secondary)",fontWeight:700,fontSize:"0.9rem"},children:"المتجر"}):null]})]})]},M.id)}const U=M.product_details||{},se=U.id??M.product??null,de=Number(U.price),he=Number.isFinite(de)?de.toFixed(2):U.price??"",le=U.store??U.store_id??M.store??null;return i.jsxs("div",{className:"card favorite-card",children:[le?i.jsx(ke,{to:`/stores/${le}`,state:{scrollToProductId:U.id},className:"favorite-card-media",title:"فتح المنتج داخل المتجر",children:Xe(U).length>0?i.jsx(Ut,{images:Xe(U),height:152,borderRadius:0}):i.jsx(bi,{size:40,color:"var(--text-secondary)"})}):i.jsx("div",{className:"favorite-card-media",children:Xe(U).length>0?i.jsx(Ut,{images:Xe(U),height:152,borderRadius:0}):i.jsx(bi,{size:40,color:"var(--text-secondary)"})}),i.jsxs("div",{className:"favorite-card-body",children:[U.store_name?i.jsxs("p",{style:{margin:"0 0 8px",fontSize:"0.88rem",fontWeight:800,color:"var(--secondary)"},children:["المتجر: ",U.store_name]}):null,i.jsxs("div",{className:"flex-center",style:{justifyContent:"space-between",marginBottom:"12px"},children:[i.jsx("h3",{style:{fontSize:"1.2rem",margin:0},children:U.name}),i.jsx("button",{type:"button",className:"action-btn delete",onClick:()=>C(M.id),style:{background:"none",border:"none",cursor:"pointer",color:"#FF5252"},"aria-label":"إزالة من المفضلة",children:i.jsx($i,{size:20})})]}),i.jsxs("div",{className:"favorite-card-price",children:[he," ₪"]}),i.jsx("div",{className:"favorite-card-desc",children:U.description||"لا يوجد وصف"}),i.jsxs("div",{className:"actions",style:{marginTop:"20px",display:"flex",gap:8,flexWrap:"wrap"},children:[i.jsxs("button",{type:"button",className:"btn-primary",style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"10px"},disabled:se==null||se==="",title:se==null||se===""?"لا يمكن الإضافة — بيانات المنتج ناقصة":"إضافة المنتج إلى سلة تختارها",onClick:()=>E(se),children:[i.jsx(Nh,{size:18})," إضافة للسلة"]}),U.store!=null?i.jsx(ke,{to:`/stores/${U.store}`,className:"favorite-card-storebtn",style:{display:"inline-flex",alignItems:"center",padding:"10px 14px",borderRadius:10,border:"1.5px solid var(--border)",textDecoration:"none",color:"var(--secondary)",fontWeight:700,fontSize:"0.9rem"},children:"المتجر"}):null]})]})]},M.id)})}):i.jsxs("div",{className:"empty-state card flex-center",style:{flexDirection:"column",padding:"50px"},children:[i.jsx(gi,{size:48,color:"#ccc"}),i.jsx("p",{style:{marginTop:"15px",color:"#777"},children:"لا توجد منتجات مفضّلة بعد."}),i.jsx("p",{style:{color:"#999",fontSize:"0.9rem"},children:"افتح صفحة أي متجر واضغط القلب بجانب المنتج."})]}):n.length>0?i.jsx("div",{className:"favorites-grid",style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(min(280px, 100%), 1fr))",gap:"20px"},children:n.map(M=>{const T=M.store_details||{};return i.jsxs("div",{className:"card favorite-card favorite-card--store",children:[i.jsxs("div",{className:"flex-center",style:{justifyContent:"space-between",marginBottom:"12px"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[i.jsx("div",{style:{width:48,height:48,borderRadius:12,overflow:"hidden",background:"var(--grey-light)",display:"flex",alignItems:"center",justifyContent:"center"},children:T.logo?i.jsx("img",{src:T.logo,alt:"",style:{width:"100%",height:"100%",objectFit:"cover"}}):i.jsx(Gt,{size:22,color:"var(--text-secondary)"})}),i.jsxs("div",{children:[i.jsx("h3",{style:{fontSize:"1.15rem",margin:0},children:T.store_name}),i.jsx("div",{style:{fontSize:"0.85rem",color:"var(--text-secondary)",marginTop:4},children:T.category_name||"متجر"})]})]}),i.jsx("button",{type:"button",onClick:()=>I(M.id),style:{background:"none",border:"none",cursor:"pointer",color:"#FF5252"},"aria-label":"إزالة من المفضلة",children:i.jsx($i,{size:20})})]}),T.description?i.jsxs("p",{style:{color:"#666",fontSize:"0.88rem",lineHeight:1.5,marginTop:8},children:[T.description.slice(0,140),T.description.length>140?"…":""]}):null,i.jsx(ke,{to:`/stores/${T.id}`,className:"btn-primary",style:{display:"inline-flex",marginTop:16,padding:"10px 16px",borderRadius:10,textDecoration:"none",fontWeight:800},children:"عرض المتجر"})]},M.id)})}):i.jsxs("div",{className:"empty-state card flex-center",style:{flexDirection:"column",padding:"50px"},children:[i.jsx(Gt,{size:48,color:"#ccc"}),i.jsx("p",{style:{marginTop:"15px",color:"#777"},children:"لا توجد محلات مفضّلة بعد."}),i.jsx("p",{style:{color:"#999",fontSize:"0.9rem"},children:"افتح صفحة المتجر واضغط القلب بجانب الاسم."})]})]})}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
          gap: 12px;
        }
        @media (max-width: 720px) {
          .favorites-grid{
            grid-template-columns: 1fr;
            gap: 10px;
            justify-items: center;
            max-width: min(280px, 94vw);
            margin-inline: auto;
          }
          .favorite-card{
            width: 100%;
            max-width: min(280px, 94vw);
            border-radius: 16px;
          }
          .favorite-card-media{
            max-height: 132px;
            min-height: 88px;
            aspect-ratio: 3 / 2;
          }
          .favorite-card-body{
            padding: 9px 11px 11px;
          }
          .favorite-card--store{
            padding: 14px;
          }
        }
        @media (min-width: 960px) {
          .favorites-grid{
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 12px;
          }
        }
        @media (min-width: 1200px) {
          .favorites-grid{
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 12px;
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
          aspect-ratio: 3 / 2;
          max-height: 168px;
          min-height: 96px;
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
          padding: 11px 12px 13px;
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
      `}})]})},sN=()=>{const e=[{icon:i.jsx(pj,{size:24}),title:"البريد الإلكتروني",detail:"ismailnaser67@gmail.com",color:"#0984e3",action:{label:"تواصل عبر Gmail",href:"mailto:ismailnaser67@gmail.com?subject=%D8%AA%D9%88%D8%A7%D8%B5%D9%84%20%D9%85%D8%B9%20%D8%B1%D8%A7%D8%AF%D8%A7%D8%B1"}},{icon:i.jsx(fv,{size:24}),title:"واتساب الدعم",detail:"+970592377078",color:"#25D366",action:{label:"تواصل عبر واتساب",href:"https://wa.me/970592377078",target:"_blank",rel:"noreferrer",variant:"wa"}}];return i.jsx(Be,{children:i.jsxs("div",{className:"contact-page",children:[i.jsx("div",{className:"contact-hero card flex-center",children:i.jsxs("div",{children:[i.jsx("h1",{className:"contact-title",children:"اتصل بنا"}),i.jsx("p",{className:"contact-subtitle",children:"نعمل على مدار الساعة (24/7) للإجابة على استفساراتكم."})]})}),i.jsx("div",{className:"contact-grid",children:e.map((t,n)=>i.jsxs("div",{className:"card contact-info-card",children:[i.jsx("div",{className:"contact-icon",style:{background:`${t.color}15`,color:t.color},children:t.icon}),i.jsx("h3",{className:"contact-info-title",children:t.title}),i.jsx("p",{className:"contact-info-detail",children:t.detail}),t.action?i.jsx("a",{className:`contact-action-btn${t.action.variant==="wa"?" contact-action-btn--wa":""}`,href:t.action.href,target:t.action.target,rel:t.action.rel,"aria-label":t.action.label,title:t.action.label,children:t.action.label}):null]},n))}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        `}})]})})},lN=()=>{const[e,t]=f.useState(""),[n,a]=f.useState(!1),[o,l]=f.useState(!1),[c,h]=f.useState(60),u=Nt(),{showAlert:m,showConfirm:g}=qe();f.useEffect(()=>{let b;return c>0&&(b=setInterval(()=>h(_=>_-1),1e3)),()=>clearInterval(b)},[c]);const x=async b=>{if(b.preventDefault(),e.length<6)return m("يرجى إدخال رمز التحقق المكون من 6 أرقام");a(!0);try{await pS(e),m("تم التحقق من حسابك بنجاح! أهلاً بك في رادار.","نجاح التوثيق"),u("/")}catch(_){m($e(_,"تعذر التحقق. تأكد من الرمز ثم أعد المحاولة."),"خطأ في التحقق")}finally{a(!1)}},v=async()=>{if(await g("إعادة إرسال رمز تحقق جديد إلى واتساب؟","إعادة الإرسال")){l(!0);try{await fS(),m("تم إعادة إرسال رمز جديد إلى واتساب الخاص بك.","تم الإرسال"),h(60)}catch(_){m($e(_,"فشل في إعادة إرسال الرمز، يرجى المحاولة لاحقاً."),"خطأ")}finally{l(!1)}}};return i.jsx(Be,{children:i.jsxs("div",{className:"verify-container flex-center",children:[i.jsx("div",{className:"verify-overlay"}),i.jsxs("div",{className:"card verify-card",style:{padding:"2rem 2.5rem"},children:[i.jsx("div",{className:"verify-logo flex-center",style:{marginBottom:"10px"},children:i.jsx("img",{src:"/logo.png",alt:"رادار",style:{width:"220px",maxWidth:"100%",objectFit:"contain"}})}),i.jsx("div",{className:"verify-icon flex-center",children:i.jsx(fv,{size:40,color:"var(--primary)"})}),i.jsx("h2",{style:{marginBottom:"10px"},children:"تحقق من هويتك"}),i.jsx("p",{style:{color:"#666",marginBottom:"25px",fontSize:"0.95rem"},children:"لقد أرسلنا رمز التحقق المكون من 6 أرقام إلى حساب الواتساب الخاص بك. يرجى إدخاله للمتابعة."}),i.jsxs("form",{onSubmit:x,children:[i.jsx(Dt,{placeholder:"0 0 0 0 0 0",value:e,onChange:b=>t(b.target.value.replace(/[^0-9]/g,"").slice(0,6)),style:{textAlign:"center",fontSize:"1.8rem",letterSpacing:"8px",fontWeight:"bold"},required:!0}),i.jsx(Ht,{type:"submit",loading:n,style:{width:"100%",marginTop:"10px",height:"55px",fontSize:"1.1rem"},confirm:"إرسال رمز التحقق للتحقق من الحساب؟",showErrorAlert:!1,children:"تأكيد الرمز"})]}),i.jsx("div",{className:"verify-footer",style:{marginTop:"25px"},children:c>0?i.jsxs("p",{style:{color:"#999",fontSize:"0.9rem"},children:["يمكنك إعادة إرسال الرمز خلال ",i.jsx("span",{style:{color:"var(--secondary)",fontWeight:"bold"},children:c})," ثانية"]}):i.jsxs("button",{className:"resend-btn flex-center",onClick:v,disabled:o,style:{margin:"0 auto",gap:"8px",background:"transparent",border:"none",color:"var(--secondary)",cursor:"pointer",fontWeight:"bold"},children:[i.jsx(_j,{size:18,className:o?"spin":""}),"إعادة إرسال الرمز"]})}),i.jsx("button",{onClick:()=>u("/login"),style:{marginTop:"20px",background:"transparent",border:"none",color:"#888",cursor:"pointer",fontSize:"0.85rem",textDecoration:"underline"},children:"العودة لتسجيل الدخول"})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
                    .verify-container { min-height: 100vh; background: var(--background); position: relative; padding: 20px; }
                    .verify-overlay { position: absolute; inset: 0; background: radial-gradient(900px 420px at 80% 10%, var(--primary-light), transparent 60%); }
                    .verify-card { position: relative; z-index: 1; width: 100%; max-width: 440px; text-align: center; border-radius: 26px; box-shadow: var(--shadow-lg); }
                    .verify-icon { width: 82px; height: 82px; background: rgba(245, 192, 0, 0.14); border-radius: 24px; margin: 0 auto 18px; }
                    .spin { animation: spin 1s linear infinite; }
                    @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                `}})]})})};function cN(e){if(e==null||e==="")return"";const t="٠١٢٣٤٥٦٧٨٩",n="۰۱۲۳۴۵۶۷۸۹",a="0123456789";let o="";for(const l of String(e)){let c=t.indexOf(l);if(c>=0){o+=a[c];continue}if(c=n.indexOf(l),c>=0){o+=a[c];continue}o+=l}return o.replace(/\D/g,"")}function dN(e){let t=cN(e);return!t||(t.length===10&&t[0]==="0"&&t[1]==="5"?t=`970${t.slice(1)}`:t.length===9&&t[0]==="5"&&(t=`970${t}`),t.length<8)?null:`https://wa.me/${t}`}const o0=(e,t,n)=>{const a=parseInt(String(e),10);return Number.isNaN(a)?t:Math.min(n,Math.max(t,a))},s0=e=>!!e&&Number.isFinite(Number(e.latitude))&&Number.isFinite(Number(e.longitude)),uN=()=>{const{storeId:e}=po(),t=Nt(),n=wn(),{showAlert:a,showPrompt:o,showSelect:l}=qe(),[c,h]=f.useState(!0),[u,m]=f.useState(null),[g,x]=f.useState(""),[v,b]=f.useState({}),[_,j]=f.useState({}),[P,N]=f.useState(null),[w,z]=f.useState(null),[C,I]=f.useState({}),[E,k]=f.useState({}),[B,M]=f.useState(!1),[T,W]=f.useState(!1),[U,se]=f.useState(null),[de,he]=f.useState(null),le=localStorage.getItem("isGuest")==="true",V=!!localStorage.getItem("token")&&!le,A=Ms(),ie=V&&localStorage.getItem("user_type")==="shopper",q=async X=>{if(!ie){await a("التقييم متاح لحساب المتسوّق فقط (وليس وضع الزائر أو التاجر).","تنبيه");return}const ye=e!=null?Number(e):u==null?void 0:u.id;if(ye){W(!0);try{const ve=await C4(ye,X);m(Pe=>Pe&&{...Pe,rating_average:ve.rating_average??Pe.rating_average,rating_count:ve.rating_count??Pe.rating_count,my_rating:X}),await a("شكراً، تم حفظ تقييمك.","تم")}catch(ve){await a($e(ve,"تعذر إرسال التقييم."),"خطأ")}finally{W(!1)}}},ce=f.useCallback(async()=>{var X;if(!V){j({});return}try{const ve=(await qa())[0];if(!((X=ve==null?void 0:ve.items)!=null&&X.length)){j({});return}const Pe={};for(const Ge of ve.items)Pe[Ge.product]=Ge.quantity;j(Pe)}catch{j({})}},[V]);f.useEffect(()=>{let X=!1;return(async()=>{h(!0),x("");try{const ye=await N4(e);if(!X){m(ye);const ve={},Pe=ye.products||[];for(const Ge of Pe)ve[Ge.id]=1;b(ve)}}catch{X||(x("تعذر تحميل بيانات المتجر"),m(null))}finally{X||h(!1)}})(),()=>{X=!0}},[e]),f.useEffect(()=>{var ve;const X=(ve=n.state)==null?void 0:ve.scrollToProductId;if(X==null||X==="")return;const ye=window.setTimeout(()=>{const Pe=document.querySelector(`[data-store-product-id="${String(X)}"]`);Pe&&typeof Pe.scrollIntoView=="function"&&(Pe.scrollIntoView({behavior:"smooth",block:"center"}),he(String(X)),window.setTimeout(()=>he(null),1600))},220);return()=>window.clearTimeout(ye)},[n.state,e]),f.useEffect(()=>{ce()},[ce,e]),f.useEffect(()=>{if(!V||!(u!=null&&u.id)){z(null),I({}),k({});return}let X=!1;return(async()=>{var ye;try{const[ve,Pe]=await Promise.all([Va(),r1()]);if(X)return;const Ge={},at={};for(const Ye of ve||[]){const Ct=Ye.product??((ye=Ye.product_details)==null?void 0:ye.id);Ct!=null&&(Ge[Ct]=Ye.id),(Ye.product==null||Ye.product==="")&&Ye.sponsored_ad!=null&&(at[Ye.sponsored_ad]=Ye.id)}if(I(Ge),k(at),u.is_owner)z(null);else{const Ye=(Pe||[]).find(Ct=>{var Zt;return Number(Ct.store)===Number(u.id)||Number((Zt=Ct.store_details)==null?void 0:Zt.id)===Number(u.id)});z((Ye==null?void 0:Ye.id)??null)}}catch{X||(I({}),k({}),z(null))}})(),()=>{X=!0}},[V,u==null?void 0:u.id,u==null?void 0:u.is_owner]);const ne=()=>{const X=Number(u==null?void 0:u.latitude),ye=Number(u==null?void 0:u.longitude);if(!Number.isFinite(X)||!Number.isFinite(ye)){a("لا توجد إحداثيات خريطة محفوظة لهذا المتجر.");return}t("/map",{state:{mapFocus:{lat:X,lng:ye,storeId:u.id},mapPreset:{mode:"stores",category:(u==null?void 0:u.category)??null,q:(u==null?void 0:u.store_name)??""}}})},ue=X=>X.product?`p-${X.product}`:`ad-${X.id}`,$=async X=>{if(!A){a("ميزة السلال للأعضاء المسجّلين فقط (متسوّق، تاجر، أو مدير) وليست لوضع الزائر. سجّل الدخول ثم أعد المحاولة.");return}N(ue(X));try{const ye={productId:X.product??null,sponsoredAdId:X.id,quantity:1,success:"تمت إضافة العرض للسلة."};se(ye);const ve=await qa(),Pe=Array.isArray(ve)?ve:[];if(Pe.length===0){await G(ye,{isFirstCart:!0});return}const Ge=Pe.map(Ye=>({id:String(Ye.id),label:Ye.name||`سلة #${Ye.id}`,value:Ye.id,badge:Array.isArray(Ye.items)?Ye.items.length:0})),at=await l("اختر السلة التي تريد إضافة المنتج إليها:","إضافة إلى أي سلة؟",Ge,{primaryActionLabel:"سلة جديدة"});if(at==null)return;if(at==="__primary__"){await G();return}await F({id:at})}catch(ye){a($e(ye,"تعذرت الإضافة للسلة."),"خطأ")}finally{N(null)}},G=async(X,{isFirstCart:ye=!1}={})=>{const ve=X??U;if(!ve)return;const Pe=await o(ye?"لا توجد لديك سلال بعد. اكتب اسماً لسلتك الأولى — يُضاف المنتج إليها مباشرة.":"اكتب اسماً للسلة الجديدة ثم يُضاف المنتج إليها.",ye?"مثال: سلة اليوم":"اسم السلة...",ye?"إنشاء أول سلة":"سلة جديدة");if(!Pe||!String(Pe).trim())return;const Ge=await td(String(Pe).trim());await ao(Ge.id,ve.productId??null,ve.quantity??1,ve.sponsoredAdId??null),await ce(),await a(ve.success||"تمت الإضافة للسلة.","تم"),se(null)},F=async X=>{const ye=U;ye&&(await ao(X.id,ye.productId??null,ye.quantity??1,ye.sponsoredAdId??null),await ce(),await a(ye.success||"تمت الإضافة للسلة.","تم"),se(null))},ge=async X=>{if(!V){a("سجّل الدخول لاستخدام المفضلة. وضع الزائر لا يدعمها.");return}if(!B){M(!0);try{if(!X.product){const ve=E[X.id];if(ve)await zs(ve),k(Pe=>{const Ge={...Pe};return delete Ge[X.id],Ge}),a("أُزيل العرض المستقل من المفضلة.");else{const Pe=await os(null,X.id);k(Ge=>({...Ge,[X.id]:Pe.id})),a("أُضيف عرض الإعلان للمفضلة — يُزال تلقائياً عند انتهاء مدة الإعلان.")}return}const ye=await os(X.product,X.id);I(ve=>({...ve,[X.product]:ye.id})),a("أُضيف المنتج للمفضلة.")}catch(ye){a($e(ye,"تعذرت العملية."),"خطأ")}finally{M(!1)}}},_e=async()=>{var X,ye,ve,Pe,Ge;if(!V){a("سجّل الدخول لاستخدام المفضلة.");return}if(!u.is_owner&&!B){M(!0);try{if(w)await i1(w),z(null),a("أُزيل المحل من المفضلة.");else{const at=await vS(u.id);z(at.id),a("أُضيف المحل للمفضلة.")}}catch(at){const Ye=((ve=(ye=(X=at==null?void 0:at.response)==null?void 0:X.data)==null?void 0:ye.store)==null?void 0:ve[0])||((Ge=(Pe=at==null?void 0:at.response)==null?void 0:Pe.data)==null?void 0:Ge.detail);a(Ye?String(Ye):"تعذرت العملية.")}finally{M(!1)}}},Ve=async X=>{if(!V){a("سجّل الدخول لاستخدام المفضلة.");return}if(u.is_owner)return;const ye=C[X.id];if(!B){M(!0);try{if(ye)await zs(ye),I(ve=>{const Pe={...ve};return delete Pe[X.id],Pe}),a("أُزيل المنتج من المفضلة.");else{const ve=await os(X.id);I(Pe=>({...Pe,[X.id]:ve.id})),a("أُضيف المنتج للمفضلة.")}}catch{a("تعذرت العملية — ربما المنتج مضاف مسبقاً.")}finally{M(!1)}}},Ie=((u==null?void 0:u.products)||[]).filter(X=>{const ye=X.is_archived;return ye!==!0&&ye!==1&&ye!=="true"&&ye!=="True"}),Ee=(X,ye)=>{b(ve=>({...ve,[X]:o0(ye,1,9999)}))},Le=(X,ye)=>{b(ve=>({...ve,[X]:o0((ve[X]??1)+ye,1,9999)}))},vt=u!=null?u.contact_whatsapp_url||dN(u.contact_whatsapp):null,ur=u!=null?Ls(u.business_hours_weekly):!1,hr=async X=>{if(u!=null&&u.is_owner)return;if(!A){a("ميزة السلال للأعضاء المسجّلين فقط (متسوّق، تاجر، أو مدير) وليست لوضع الزائر. سجّل الدخول ثم أعد المحاولة.");return}const ye=v[X.id]??1;N(X.id);try{const ve={productId:X.id,sponsoredAdId:null,quantity:ye,success:`تمت إضافة «${X.name}» للسلة.`};se(ve);const Pe=await qa(),Ge=Array.isArray(Pe)?Pe:[];if(Ge.length===0){await G(ve,{isFirstCart:!0});return}const at=Ge.map(Ct=>({id:String(Ct.id),label:Ct.name||`سلة #${Ct.id}`,value:Ct.id,badge:Array.isArray(Ct.items)?Ct.items.length:0})),Ye=await l("اختر السلة التي تريد إضافة المنتج إليها:","إضافة إلى أي سلة؟",at,{primaryActionLabel:"سلة جديدة"});if(Ye==null)return;if(Ye==="__primary__"){await G();return}await F({id:Ye})}catch(ve){a($e(ve,"تعذر إضافة المنتج للسلة."),"خطأ")}finally{N(null)}};return i.jsxs(Be,{children:[i.jsxs("div",{style:{maxWidth:1240,marginInline:"auto",paddingBottom:48,paddingInline:"clamp(8px, 2.2vw, 22px)",boxSizing:"border-box"},children:[i.jsxs(ke,{to:"/map",className:"flex-center",style:{gap:8,marginBottom:16,color:"var(--text-secondary)",textDecoration:"none",fontWeight:700,width:"fit-content"},children:[i.jsx($y,{size:18}),"رجوع للخريطة"]}),c&&i.jsxs("div",{className:"card flex-center",style:{padding:48,gap:12},children:[i.jsx(hv,{className:"spin",size:28}),"جاري التحميل..."]}),!c&&g&&i.jsx("div",{className:"card",style:{color:"#c62828"},children:g}),!c&&u&&i.jsxs(i.Fragment,{children:[i.jsxs("header",{className:"card store-profile-hero",children:[i.jsx("div",{className:"store-profile-hero-banner"}),i.jsxs("div",{className:"store-profile-hero-body",children:[i.jsx("div",{className:"flex-between store-profile-hero-top",children:i.jsx("div",{className:"store-profile-hero-logo",children:u.logo?i.jsx("img",{src:u.logo,alt:"",className:"store-profile-hero-logo-img"}):i.jsx(Gt,{size:40,color:"var(--text-secondary)"})})}),i.jsxs("div",{className:"flex-between store-profile-hero-row",children:[i.jsx("h1",{className:"store-profile-title",children:u.store_name}),s0(u)||V&&!u.is_owner?i.jsxs("div",{className:"store-profile-hero-actions",children:[s0(u)?i.jsx("button",{type:"button",onClick:ne,title:"عرض موقع المتجر على الخريطة","aria-label":"عرض على الخريطة",className:"store-profile-icon-btn",children:i.jsx(Ln,{size:26,color:"var(--secondary)"})}):null,V&&!u.is_owner?i.jsx("button",{type:"button",onClick:_e,disabled:B,title:w?"إزالة من المفضلة":"إضافة للمفضلة","aria-label":"مفضلة المحل",className:`store-profile-icon-btn ${w?"store-profile-icon-btn--fav":""}`,style:{cursor:B?"wait":void 0},children:i.jsx(gi,{size:26,color:"#e91e63",fill:w?"#e91e63":"none"})}):null]}):null]}),i.jsx("div",{className:"store-profile-subtitle",children:u.category_name||"متجر"}),i.jsxs("div",{className:"store-profile-contact",children:[i.jsxs("div",{className:"store-profile-contact-head",children:[i.jsx(_c,{size:18,"aria-hidden":!0}),"تواصل معنا"]}),vt?i.jsxs("a",{href:vt,target:"_blank",rel:"noopener noreferrer",className:"store-profile-whatsapp-btn",children:[i.jsx(_c,{size:20}),"مراسلة عبر واتساب"]}):i.jsxs("div",{children:[i.jsx("p",{className:"store-profile-contact-note",children:"لم يُضف رقم واتساب للتواصل بعد — يظهر الزر تلقائياً عندما يضيفه صاحب المتجر من إعدادات المتجر."}),u.is_owner?i.jsx(ke,{to:"/merchant/settings",className:"store-profile-settings-link",children:"فتح إعدادات المتجر لإضافة الرقم"}):null]})]}),Array.isArray(u.store_features)&&u.store_features.filter(Boolean).length>0?i.jsx("div",{className:"store-profile-features",children:u.store_features.filter(Boolean).map((X,ye)=>i.jsx("span",{className:"store-feature-chip",children:X},`${ye}-${X}`))}):null,i.jsxs("div",{className:"store-profile-box",children:[i.jsxs("div",{className:"store-profile-box-row",children:[i.jsx("span",{className:"store-profile-box-title",children:"مواعيد العمل"}),ur?u.is_open_now===!0?i.jsx("span",{className:"store-profile-pill store-profile-pill--open",children:"مفتوح الآن"}):u.is_open_now===!1?i.jsx("span",{className:"store-profile-pill store-profile-pill--closed",children:"مغلق الآن"}):i.jsx("span",{className:"store-profile-pill store-profile-pill--muted",children:"—"}):i.jsx("span",{className:"store-profile-pill store-profile-pill--muted",children:"لا يوجد مواعيد عمل محددة"})]}),(u.business_hours_note||"").trim()?i.jsx("div",{className:"store-profile-note",children:u.business_hours_note.trim()}):null]}),i.jsxs("div",{className:"store-profile-box store-profile-box--rating",children:[i.jsx("div",{className:"store-profile-box-title",children:"تقييم المتجر (من 5 نجوم)"}),u.rating_count>0&&u.rating_average!=null?i.jsxs("div",{dir:"ltr",className:"store-profile-rating-row",children:[i.jsx("span",{className:"store-profile-rating-avg",children:Number(u.rating_average).toFixed(1)}),i.jsx("span",{className:"star-row-readonly","aria-hidden":!0,children:[1,2,3,4,5].map(X=>i.jsx(Ph,{size:22,color:"#f5c000",fill:X<=Math.round(Number(u.rating_average))?"#f5c000":"none",strokeWidth:X<=Math.round(Number(u.rating_average))?0:1.5},X))}),i.jsxs("span",{className:"store-profile-rating-count",children:["بناءً على ",u.rating_count," تقييم"]})]}):i.jsx("p",{className:"store-profile-muted",children:"لا يوجد تقييمات بعد."}),ie&&!u.is_owner?i.jsxs("div",{children:[i.jsx("div",{className:"store-profile-rate-hint",children:u.my_rating?"تقييمك الحالي (اضغط نجمة لتغييره)":"قيّم هذا المحل"}),i.jsx("div",{dir:"ltr",className:"store-profile-rate-row",children:[1,2,3,4,5].map(X=>i.jsx("button",{type:"button",disabled:T,onClick:()=>q(X),"aria-label":`تقييم ${X} من 5`,className:"store-profile-star-btn",style:{cursor:T?"wait":void 0},children:i.jsx(Ph,{size:30,color:"#f5c000",fill:X<=(u.my_rating||0)?"#f5c000":"none",strokeWidth:X<=(u.my_rating||0)?0:1.5})},X))})]}):u.is_owner?i.jsx("p",{className:"store-profile-muted store-profile-muted--tight",children:"يظهر تقييمك الإجمالي للزوار؛ التقييم من حسابات المتسوّقين فقط."}):V?null:i.jsxs("button",{type:"button",className:"store-profile-rating-login-cta",onClick:()=>t("/login"),children:[i.jsx("span",{className:"store-profile-rating-login-cta-icon","aria-hidden":!0,children:i.jsx(Up,{size:18,strokeWidth:2})}),i.jsx("span",{className:"store-profile-rating-login-cta-label",children:"سجّل دخول كمتسوّق لتتمكن من التقييم"})]})]}),u.description?i.jsx("p",{className:"store-profile-desc",children:u.description}):null,(u.location_address||"").trim()?i.jsxs("div",{className:"store-profile-box",children:[i.jsxs("div",{className:"store-profile-loc-head",children:[i.jsx(Ln,{size:18,"aria-hidden":!0}),"الموقع (نصاً)"]}),i.jsx("div",{className:"store-profile-loc-text",children:u.location_address.trim()})]}):null]})]}),Array.isArray(u.sponsored_ads)&&u.sponsored_ads.length>0&&i.jsxs("section",{className:"store-profile-sponsored",children:[i.jsx("h2",{className:"store-profile-section-title",children:"عروض وإعلانات"}),i.jsx("div",{className:"store-profile-sponsored-rail",children:u.sponsored_ads.map(X=>i.jsxs("div",{className:"card store-profile-sponsored-card",children:[Xe(X).length>0?i.jsxs("div",{className:"store-profile-sponsored-media",children:[i.jsx(Ut,{images:Xe(X),height:100,borderRadius:12}),u.is_owner?null:i.jsxs(i.Fragment,{children:[i.jsx("button",{type:"button",className:`store-profile-sponsored-fab store-profile-sponsored-fab--cart${A?"":" store-profile-sponsored-fab--muted"}`,onClick:ye=>{ye.stopPropagation(),$(X)},disabled:P===ue(X),title:"إضافة إلى السلة","aria-label":"إضافة إلى السلة",style:{cursor:P===ue(X)?"wait":"pointer"},children:i.jsx(wi,{size:16,strokeWidth:2,"aria-hidden":!0})}),i.jsx("button",{type:"button",className:`store-profile-sponsored-fab store-profile-sponsored-fab--fav${V?"":" store-profile-sponsored-fab--muted"}`,onClick:ye=>{ye.stopPropagation(),ge(X)},disabled:B,title:X.product?"مفضلة":"مفضلة — يُزال عند انتهاء الإعلان","aria-label":"مفضلة",style:{cursor:B?"wait":"pointer"},children:i.jsx(gi,{size:16,color:"#e91e63",fill:X.product?C[X.product]?"#e91e63":"none":E[X.id]?"#e91e63":"none","aria-hidden":!0})})]})]}):null,i.jsx("div",{className:"store-profile-sponsored-title",children:X.title}),Number(X.product_price)>0?i.jsxs("div",{className:"store-profile-sponsored-price-row",children:[X.catalog_product_price!=null&&X.catalog_product_price!==""&&Math.abs(Number(X.catalog_product_price)-Number(X.product_price))>1e-9?i.jsxs(i.Fragment,{children:[i.jsxs("span",{className:"store-profile-sponsored-old",children:[Number(X.catalog_product_price).toFixed(2)," ₪"]}),i.jsx("span",{className:"store-profile-sponsored-badge",children:"سعر العرض"})]}):null,i.jsxs("span",{className:"store-profile-sponsored-now",children:[Number(X.product_price).toFixed(2)," ₪"]})]}):null,i.jsx("div",{className:"store-profile-sponsored-desc",children:X.description})]},X.id))})]}),i.jsxs("section",{children:[i.jsx("h2",{className:"store-profile-section-title store-profile-section-title--products",children:"المنتجات"}),Ie.length===0?i.jsxs("div",{className:"card",style:{color:"var(--text-secondary)",lineHeight:1.65},children:[i.jsx("div",{children:"لا توجد منتجات متاحة للمتسوّقين حالياً."}),u.is_owner?i.jsx("div",{style:{marginTop:10,fontSize:"0.9rem"},children:"إن كنت صاحب/ة هذا المتجر: المنتجات «المؤرشفة» من صفحة «منتجاتي» لا تظهر هنا — عطّل الأرشفة ليظهر المنتج للجمهور."}):null]}):i.jsx("div",{className:"store-profile-products-grid",children:Ie.map(X=>{const ye=_[X.id];return i.jsxs("article",{className:"card store-profile-product-card","data-store-product-id":X.id,"data-flash":de!=null&&String(de)===String(X.id)?"true":"false",children:[i.jsxs("div",{className:"store-profile-product-media",children:[V&&!u.is_owner?i.jsx("button",{type:"button",onClick:()=>Ve(X),disabled:B,title:C[X.id]?"إزالة من المفضلة":"إضافة للمفضلة","aria-label":"مفضلة المنتج",className:"store-profile-product-favbtn",style:{cursor:B?"wait":"pointer"},children:i.jsx(gi,{size:18,color:"#e91e63",fill:C[X.id]?"#e91e63":"none"})}):null,Xe(X).length>0?i.jsx("div",{className:"store-profile-product-media-inner",children:i.jsx(Ut,{images:Xe(X),fill:!0,borderRadius:0,className:"store-product-grid-carousel"})}):i.jsx(cn,{size:32,color:"var(--text-light)"}),i.jsxs("div",{className:"store-profile-product-media-overlay",children:[i.jsx("div",{className:"store-profile-product-media-name",children:X.name}),i.jsxs("div",{className:"store-profile-product-media-price",children:[X.price," ₪"]})]}),u.is_owner?null:i.jsx("button",{type:"button",className:`store-profile-product-media-cartbtn${A?"":" store-profile-product-media-cartbtn--muted"}`,onClick:()=>hr(X),disabled:P===X.id,title:"إضافة إلى السلة","aria-label":"إضافة إلى السلة",style:{cursor:P===X.id?"wait":"pointer"},children:i.jsx(wi,{size:18})})]}),i.jsxs("div",{className:"store-profile-product-body",children:[X.description?i.jsx("div",{className:"store-profile-product-desc",children:X.description}):null,Array.isArray(X.product_features)&&X.product_features.filter(Boolean).length>0?i.jsx("div",{className:"store-profile-product-feats",children:X.product_features.map(ve=>String(ve||"").trim()).filter(Boolean).slice(0,5).map((ve,Pe)=>i.jsx("span",{className:"store-profile-product-feat",title:ve,children:ve},Pe))}):null,i.jsxs("div",{className:"store-profile-product-price",children:[X.price," ₪"]}),ye!=null&&ye>0&&i.jsxs("div",{className:"store-profile-in-cart",children:["في السلة: ",ye]}),i.jsxs("div",{className:"flex-between store-profile-qty-row",children:[i.jsx("button",{type:"button",onClick:()=>Le(X.id,-1),className:"store-profile-qty-btn","aria-label":"نقص الكمية",children:i.jsx(Gy,{size:18})}),i.jsx("input",{type:"text",inputMode:"numeric",value:v[X.id]??1,onChange:ve=>Ee(X.id,ve.target.value),onBlur:ve=>Ee(X.id,ve.target.value||1),className:"store-profile-qty-input"}),i.jsx("button",{type:"button",onClick:()=>Le(X.id,1),className:"store-profile-qty-btn","aria-label":"زيادة الكمية",children:i.jsx(Ky,{size:18})})]})]})]},X.id)})})]})]})]}),i.jsx("style",{children:`
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
          min-width: 188px;
          max-width: 228px;
          padding: 10px;
          flex-shrink: 0;
        }
        .store-profile-sponsored-media{
          position: relative;
          margin-bottom: 8px;
          border-radius: 12px;
          overflow: hidden;
        }
        .store-profile-sponsored-fab{
          position: absolute;
          top: 8px;
          z-index: 4;
          width: 34px;
          height: 34px;
          border-radius: 12px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          margin: 0;
          cursor: pointer;
          background: rgba(255,255,255,0.94);
          box-shadow: 0 4px 14px rgba(26,29,38,0.14);
          transition: transform 0.12s ease, filter 0.15s ease;
        }
        .store-profile-sponsored-fab--cart{
          inset-inline-start: 8px;
          border: 1px solid rgba(245,192,0,0.5);
          color: var(--secondary);
        }
        .store-profile-sponsored-fab--fav{
          inset-inline-end: 8px;
          border: 1px solid rgba(233, 30, 99, 0.35);
          background: rgba(255,255,255,0.96);
        }
        .store-profile-sponsored-fab:hover:not(:disabled){
          transform: translateY(-1px);
          filter: brightness(1.02);
        }
        .store-profile-sponsored-fab:disabled{
          opacity: 0.65;
          cursor: wait !important;
        }
        .store-profile-sponsored-fab--muted{
          opacity: 0.88;
        }
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
        .store-profile-products-grid{
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(136px, 100%), 1fr));
          gap: 12px;
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
          inset-inline-end: 8px;
          z-index: 4;
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
          max-height: 200px;
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
          inset-inline-start: 10px;
          z-index: 4;
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
        .store-profile-product-media-cartbtn--muted{
          opacity: 0.88;
        }
        .store-profile-product-media:has(.store-profile-product-favbtn) .store-profile-product-media-overlay{
          padding-inline-end: 44px;
        }
        .store-profile-product-media:has(.store-profile-product-media-cartbtn) .store-profile-product-media-overlay{
          padding-inline-start: 48px;
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
          padding: 10px;
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

      `})]})},hN=()=>{const{shareToken:e}=po(),[t,n]=f.useState(null),[a,o]=f.useState(!0),[l,c]=f.useState(""),h=!!localStorage.getItem("token"),u=localStorage.getItem("isGuest")==="true";f.useEffect(()=>{let x=!1;return(async()=>{o(!0),c("");try{const v=await uS(e);x||n(v)}catch{x||(c("تعذر تحميل السلة أو الرابط غير صالح."),n(null))}finally{x||o(!1)}})(),()=>{x=!0}},[e]);const m=(t==null?void 0:t.items)||[],g=(t==null?void 0:t.total)??"0";return i.jsxs(Be,{children:[i.jsxs("div",{style:{maxWidth:1240,marginInline:"auto",paddingInline:"clamp(8px, 2.2vw, 22px)",paddingBottom:40,boxSizing:"border-box"},children:[i.jsxs("div",{className:"flex-center",style:{justifyContent:"space-between",flexWrap:"wrap",gap:12,marginBottom:18},children:[i.jsx("h1",{style:{fontSize:"1.6rem",fontWeight:900},children:"سلة مشتركة"}),i.jsxs(ke,{to:"/",className:"flex-center",style:{gap:8,color:"var(--text-secondary)",textDecoration:"none",fontWeight:700,fontSize:"0.95rem"},children:[i.jsx(ro,{size:18}),"الرئيسية"]})]}),a&&i.jsxs("div",{className:"card flex-center",style:{padding:40,gap:12},children:[i.jsx(hv,{className:"spin",size:26}),"جاري التحميل..."]}),!a&&l&&i.jsx("div",{className:"card",style:{color:"#c62828"},children:l}),!a&&t&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"card",style:{marginBottom:16},children:[i.jsx("div",{style:{fontWeight:900,fontSize:"1.2rem",marginBottom:8},children:t.name}),t.notes?i.jsx("p",{style:{color:"var(--text-secondary)",lineHeight:1.6,marginTop:8},children:t.notes}):null,t.is_owner&&h&&!u&&i.jsxs(ke,{to:"/carts",className:"flex-center",style:{marginTop:14,gap:8,padding:"10px 14px",background:"var(--primary-light)",borderRadius:"var(--radius-md)",textDecoration:"none",color:"var(--secondary)",fontWeight:800,width:"fit-content"},children:[i.jsx(wi,{size:18}),"فتح سلتي وتعديلها"]})]}),m.length===0?i.jsx("div",{className:"card",style:{color:"var(--text-secondary)"},children:"السلة فارغة."}):i.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:m.map((x,v)=>{const b=!!x.is_promotional_line,_=!!x.is_standalone_ad_line,j=Number(x.price),P=x.catalog_price,N=P!=null&&String(P).trim()!==""&&!Number.isNaN(Number(P))?Number(P):null,w=b&&!_&&N!=null&&Math.abs(j-N)>1e-9;return i.jsxs("div",{className:"card",style:{display:"grid",gridTemplateColumns:"72px 1fr",gap:14,alignItems:"start",borderRadius:b?14:void 0,background:b?"linear-gradient(135deg, rgba(245,192,0,0.1) 0%, rgba(255,249,230,0.4) 100%)":void 0,border:b?"1px solid rgba(245,192,0,0.4)":void 0},children:[i.jsx("div",{style:{width:72,flexShrink:0,borderRadius:16,overflow:"hidden",background:"var(--primary-light)",border:"1px solid rgba(245,192,0,0.25)",display:"flex",alignItems:"center",justifyContent:"center"},children:Xe(x).length>0?i.jsx(Ut,{images:Xe(x),height:64,borderRadius:0}):i.jsx("div",{style:{width:72,height:72,display:"flex",alignItems:"center",justifyContent:"center"},children:i.jsx(cn,{size:22,color:"var(--text-light)"})})}),i.jsxs("div",{style:{minWidth:0},children:[i.jsx("div",{style:{fontWeight:900,fontSize:"1.05rem"},children:x.product_name}),x.description?i.jsx("div",{style:{fontSize:"0.88rem",color:"var(--text-secondary)",marginTop:4,lineHeight:1.45},children:x.description}):null,b?i.jsxs("div",{style:{marginTop:10,fontSize:"0.9rem",lineHeight:1.5},children:[i.jsx("span",{style:{display:"inline-block",padding:"3px 10px",borderRadius:8,fontWeight:900,color:"var(--secondary)",background:"rgba(245,192,0,0.35)",border:"1px solid rgba(245,192,0,0.5)"},children:_?`عرض ممول مستقل: ${Number.isFinite(j)?j.toFixed(2):x.price} ₪ للقطعة`:`عرض ممول: ${Number.isFinite(j)?j.toFixed(2):x.price} ₪ للقطعة`}),w?i.jsxs("span",{style:{marginInlineStart:10,textDecoration:"line-through",color:"var(--text-secondary)",fontWeight:700},children:["سعر المتجر ",N.toFixed(2)," ₪"]}):null,i.jsxs("div",{style:{marginTop:6,fontWeight:800,color:"var(--secondary)"},children:[Number.isFinite(j)?j.toFixed(2):x.price," ₪ × ",x.quantity," = ",x.line_total," ₪"]})]}):i.jsxs("div",{style:{marginTop:8,fontWeight:800,color:"var(--secondary)"},children:[x.price," ₪ × ",x.quantity," = ",x.line_total," ₪"]}),x.note?i.jsxs("div",{style:{marginTop:8,fontSize:"0.86rem",padding:"8px 10px",background:"var(--surface)",borderRadius:10,border:"1px solid var(--border)"},children:[i.jsx("span",{style:{fontWeight:800},children:"ملاحظة:"})," ",x.note]}):null]})]},v)})}),m.length>0&&i.jsxs("div",{className:"flex-center",style:{justifyContent:"space-between",marginTop:20,padding:"16px 20px",background:"var(--secondary)",color:"var(--primary)",borderRadius:"var(--radius-lg)",fontWeight:900,fontSize:"1.15rem"},children:[i.jsx("span",{children:"الإجمالي"}),i.jsxs("span",{children:[g," ₪"]})]}),i.jsx("p",{style:{textAlign:"center",marginTop:24,color:"var(--text-secondary)",fontSize:"0.95rem"},children:"تم إنشاء هذه القائمة من تطبيق رادار"})]})]}),i.jsx("style",{children:`
        @keyframes spin { to { transform: rotate(360deg); } }
        .spin { animation: spin 0.85s linear infinite; }
      `})]})},pN=[31.5,34.4];function fN(e){return String(e||"").trim().toLowerCase()}function l0(e){const t=Number(e);return Number.isFinite(t)?t:null}function mN(){const{userMapLocation:e,setManualMapLocation:t,clearUserMapLocation:n,requestUserLocation:a,locating:o,locationFocusNonce:l,searchQuery:c,setSearchQuery:h}=Zs(),u=wn(),m=Nt(),[g,x]=qc(),v=e||pN,[b,_]=f.useState([]),[j,P]=f.useState([]),[N,w]=f.useState([]),[z,C]=f.useState([]),[I,E]=f.useState(!0),[k,B]=f.useState(null),[M,T]=f.useState(null);f.useEffect(()=>{let ue=!0;return E(!0),Promise.all([la().catch(()=>[]),mo().catch(()=>[]),Xc(null).catch(()=>[]),ed(v[0],v[1],null).catch(()=>[])]).then(([$,G,F,ge])=>{ue&&(_(Array.isArray($)?$:[]),P(Array.isArray(G)?G:[]),C(Array.isArray(F)?F:[]),w(Array.isArray(ge)?ge:[]))}).finally(()=>{ue&&E(!1)}),()=>{ue=!1}},[v[0],v[1]]),f.useEffect(()=>{var ge,_e;const ue=(ge=u.state)==null?void 0:ge.mapFocus;if(!ue)return;const $=Number(ue.lat),G=Number(ue.lng);if(!Number.isFinite($)||!Number.isFinite(G))return;t($,G),B(ue.storeId??null),T(ue.communityPointId??null);const F=(_e=u.state)==null?void 0:_e.mapPreset;if(F){const Ve=new URLSearchParams;F.mode==="community"?Ve.set("mode","community"):F.mode==="stores"&&Ve.set("mode","stores"),F.category!=null&&String(F.category).trim()!==""&&Ve.set("category",String(F.category)),F.cc!=null&&String(F.cc).trim()!==""&&Ve.set("cc",String(F.cc));const Ie=F.q!=null?String(F.q).trim():"";Ie!==""&&Ve.set("q",Ie),m({pathname:u.pathname,search:Ve.toString()},{replace:!0,state:{}})}else m({pathname:u.pathname,search:u.search},{replace:!0,state:{}})},[u.state,u.pathname,u.search,m,t]),f.useEffect(()=>{const ue=g.get("q")||"";ue!==c&&h(ue)},[g]);const W=f.useCallback((ue,$)=>{const G=new URLSearchParams(g);$==null||String($)===""||String($)==="all"?G.delete(ue):G.set(ue,String($)),x(G,{replace:!0})},[g,x]),U=g.get("mode")==="community"?"community":"stores",se=l0(g.get("category")),de=l0(g.get("cc")),he=fN(c),le=f.useMemo(()=>{const ue=Array.isArray(N)?N:[],$=se?ue.filter(G=>Number(G.category)===Number(se)):ue;return he?$.filter(G=>`${G.store_name||""} ${G.category_name||""} ${G.description||""}`.toLowerCase().includes(he)):$},[N,se,he]),V=f.useMemo(()=>{const ue=Array.isArray(z)?z:[],$=de?ue.filter(G=>Number(G.category)===Number(de)):ue;return he?$.filter(G=>`${G.title||""} ${G.category_name||""} ${G.detail_description||""} ${G.address_text||""}`.toLowerCase().includes(he)):$},[z,de,he]),A=f.useMemo(()=>{const ue=U==="stores"?le:[];if(U!=="stores"||k==null)return ue;const $=Number(k);if(!Number.isFinite($)||ue.some(F=>Number(F==null?void 0:F.id)===$))return ue;const G=(N||[]).find(F=>Number(F==null?void 0:F.id)===$);return G?[...ue,G]:ue},[U,le,N,k]),ie=f.useMemo(()=>{const ue=U==="community"?V:[];if(U!=="community"||M==null)return ue;const $=Number(M);if(!Number.isFinite($)||ue.some(F=>Number(F==null?void 0:F.id)===$))return ue;const G=(z||[]).find(F=>Number(F==null?void 0:F.id)===$);return G?[...ue,G]:ue},[U,V,z,M]),q=!!he||(U==="stores"?se!=null:de!=null),ce=f.useCallback(async()=>{await a()},[a]),ne=f.useMemo(()=>"calc(100dvh - 180px)",[]);return i.jsx(Be,{children:i.jsxs("div",{className:"map-page",children:[i.jsx("div",{className:"map-page-stage","aria-busy":I?"true":"false",children:i.jsx(f8,{stores:A,communityPoints:ie,categories:b,userLocation:e,locationFocusNonce:l,onManualLocationPick:t,autoFitStoresWhenNoUserLocation:!1,showGpsOnMap:!0,gpsLocating:o,onGpsClick:ce,onClearUserLocation:n,mapHeight:ne,isFullscreen:!0,gpsLabel:"موقعي",gpsLocatingLabel:"جاري الموقع…",gpsFabAlignStart:!0,focusOnResults:q,focusKind:U==="community"?"community":"stores",focusStoreId:U==="stores"?k:null,focusCommunityPointId:U==="community"?M:null,topControls:i.jsxs("div",{className:"map-topbar",onClick:ue=>ue.stopPropagation(),children:[i.jsxs("div",{className:"map-topbar-row",children:[i.jsx("button",{type:"button",className:`map-topbar-chip ${U==="stores"?"map-topbar-chip--active":""}`,onClick:()=>W("mode","stores"),children:"المتاجر"}),i.jsx("button",{type:"button",className:`map-topbar-chip ${U==="community"?"map-topbar-chip--active":""}`,onClick:()=>W("mode","community"),children:"الخدمات"}),U==="stores"?i.jsxs("select",{className:"map-topbar-select",value:se??"all",onChange:ue=>W("category",ue.target.value),"aria-label":"فلتر الأقسام",children:[i.jsx("option",{value:"all",children:"كل الأقسام"}),b.map(ue=>i.jsx("option",{value:ue.id,children:ue.name},ue.id))]}):i.jsxs("select",{className:"map-topbar-select",value:de??"all",onChange:ue=>W("cc",ue.target.value),"aria-label":"فلتر الخدمات",children:[i.jsx("option",{value:"all",children:"كل الخدمات"}),j.map(ue=>i.jsx("option",{value:ue.id,children:ue.name},ue.id))]})]}),i.jsx("div",{className:"map-topbar-search",children:i.jsx("input",{className:"map-topbar-search-input",value:c,onChange:ue=>{const $=ue.target.value;h($),W("q",$)},placeholder:U==="community"?"ابحث عن خدمة أو مؤسسة…":"ابحث عن متجر…"})})]})})}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .map-page {
            width: 100%;
            max-width: none;
            margin-inline: 0;
            padding-inline: 0;
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
        `}})]})})}const gN=[31.5,34.4],bu=12;function Wo(e){const t=Number(e==null?void 0:e.latitude),n=Number(e==null?void 0:e.longitude);return Number.isFinite(t)&&Number.isFinite(n)}function wu(e,t){const n=u=>u*Math.PI/180,o=n(t[0]-e[0]),l=n(t[1]-e[1]),c=Math.sin(o/2)**2,h=Math.cos(n(e[0]))*Math.cos(n(t[0]))*Math.sin(l/2)**2;return 2*6371*Math.asin(Math.sqrt(c+h))}function xN(){var de;const{userMapLocation:e,setManualMapLocation:t,requestUserLocation:n,locating:a,locationFocusNonce:o}=Zs(),l=e||gN,{showSelect:c}=qe(),h=Nt(),[u,m]=f.useState([]),[g,x]=f.useState(!0),[v,b]=f.useState([]),[_,j]=f.useState(!0),[P,N]=f.useState(null),[w,z]=f.useState(!0),[C,I]=f.useState(1);f.useEffect(()=>{let he=!0;return x(!0),la().then(le=>{he&&m(Array.isArray(le)?le:[])}).catch(()=>{he&&m([])}).finally(()=>{he&&x(!1)}),()=>{he=!1}},[]),f.useEffect(()=>{let he=!0;return j(!0),ed(l[0],l[1],P).then(le=>{he&&b(Array.isArray(le)?le:[])}).catch(()=>{he&&b([])}).finally(()=>{he&&j(!1)}),()=>{he=!1}},[l[0],l[1],P]),f.useEffect(()=>{I(1)},[P,w]);const E=f.useMemo(()=>(Array.isArray(v)?v:[]).filter(le=>w?Wo(le):!0),[v,w]),k=f.useMemo(()=>{if(!l)return E;const he=l;return[...E].sort((le,V)=>Wo(le)?Wo(V)?wu(he,[Number(le.latitude),Number(le.longitude)])-wu(he,[Number(V.latitude),Number(V.longitude)]):-1:1)},[E,l]),B=Math.max(1,Math.ceil(k.length/bu)),M=Math.min(C,B),T=f.useMemo(()=>{const he=(M-1)*bu;return k.slice(he,he+bu)},[k,M]),W=f.useCallback(async()=>{if(g)return;const he=[{id:"__all__",label:"الكل",value:"__all__"},...u.map(V=>({id:String(V.id),label:V.name,value:V.id}))],le=await c("اختر القسم:","تصفية المتاجر",he);le!=null&&N(le==="__all__"?null:Number(le))},[g,u,c]),U=f.useMemo(()=>k.filter(he=>Wo(he)).length,[k]),se=P==null?"كل الأقسام":((de=u.find(he=>Number(he.id)===Number(P)))==null?void 0:de.name)||"القسم";return i.jsx(Be,{children:i.jsxs("div",{className:"stores-page",children:[i.jsxs("section",{className:"stores-hero","aria-label":"عنوان الصفحة وفتح الخريطة",children:[i.jsxs("div",{className:"stores-head",children:[i.jsxs("div",{className:"stores-head__titles",children:[i.jsx("h1",{className:"stores-title",children:"المتاجر"}),i.jsx("p",{className:"stores-sub",children:"فلترة سريعة + خريطة منبثقة عند الضغط."})]}),i.jsxs("div",{className:"stores-controls",children:[i.jsxs("button",{type:"button",className:"stores-filterbtn",onClick:W,disabled:g,title:"تصفية","aria-label":"تصفية المتاجر",children:[i.jsx(jc,{size:18,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{children:se})]}),i.jsxs("label",{className:"stores-onlymapped",children:[i.jsx("input",{type:"checkbox",checked:w,onChange:he=>z(he.target.checked)}),i.jsx("span",{children:"المتاجر الموجودة على الخريطة فقط"})]})]})]}),i.jsxs("button",{type:"button",className:"stores-mini-map",onClick:()=>h("/map"),"aria-label":"فتح الخريطة",children:[i.jsx("span",{className:"stores-mini-map__bg","aria-hidden":!0}),i.jsx("span",{className:"stores-mini-map__shine","aria-hidden":!0}),i.jsxs("span",{className:"stores-mini-map__badge",children:[i.jsx(jh,{size:16,strokeWidth:2,"aria-hidden":!0}),"اضغط لفتح الخريطة"]}),i.jsxs("span",{className:"stores-mini-map__hint",children:[U," متجر على الخريطة"]})]})]}),_?i.jsx("div",{className:"stores-loading",children:"جاري تحميل المتاجر…"}):T.length===0?i.jsx("div",{className:"stores-empty",children:"لا توجد متاجر ضمن الفلاتر الحالية."}):i.jsx("div",{className:"stores-grid",role:"list",children:T.map(he=>{const le=rd(he,u),V=l&&Wo(he)?wu(l,[Number(he.latitude),Number(he.longitude)]):null;return i.jsxs(ke,{to:`/stores/${he.id}`,className:"store-card",role:"listitem",children:[i.jsxs("div",{className:"store-card__text",children:[i.jsx("div",{className:"store-card__name",children:he.store_name}),i.jsxs("div",{className:"store-card__meta",children:[i.jsx("span",{className:"store-card__cat",children:he.category_name||"—"}),i.jsx("span",{className:"store-card__dot","aria-hidden":!0}),i.jsx("span",{className:"store-card__dist",children:V!=null?`${V.toFixed(1)} كم`:"بدون مسافة"})]})]}),i.jsx("div",{className:"store-card__thumb","aria-hidden":!0,children:le.type==="image"?i.jsx("img",{className:"store-card__thumb-img",src:le.url,alt:""}):i.jsx("span",{className:"store-card__thumb-emoji",style:{background:le.bg},children:le.emoji})})]},he.id)})}),B>1?i.jsxs("div",{className:"stores-pager","aria-label":"تنقل الصفحات",children:[i.jsx("button",{type:"button",onClick:()=>I(he=>Math.max(1,he-1)),disabled:M<=1,children:"السابق"}),i.jsxs("span",{children:[M," / ",B]}),i.jsx("button",{type:"button",onClick:()=>I(he=>Math.min(B,he+1)),disabled:M>=B,children:"التالي"})]}):null,i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
            gap: 10px;
          }
          @media (max-width: 420px) {
            .stores-grid { gap: 10px; }
          }
          .store-card {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            justify-content: space-between;
            gap: 8px;
            padding: 10px 10px 12px;
            border-radius: 16px;
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
            aspect-ratio: 4 / 3;
            max-height: 140px;
            height: auto;
            border-radius: 14px;
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

        `}})]})})}const dr=`
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
`,ef={pending:"قيد الانتظار",active:"نشط",rejected:"مرفوض",expired:"منتهي الصلاحية",approved:"مقبول"};function yN(){var c,h,u,m,g,x;const[e,t]=f.useState(null),[n,a]=f.useState(!0);f.useEffect(()=>{let v=!1;return(async()=>{a(!0);try{const b=await q4();v||t(b)}catch{v||t(null)}finally{v||a(!1)}})(),()=>{v=!0}},[]);const o=e==null?void 0:e.users,l=e==null?void 0:e.app_opens;return i.jsx(Be,{children:i.jsxs("div",{className:"admin-dash",children:[i.jsx("h1",{children:"لوحة الإدارة"}),i.jsxs("section",{className:"card admin-section",children:[i.jsx("div",{className:"admin-section-head",children:i.jsx("h2",{children:"ملخص سريع"})}),n?i.jsx("p",{children:"جاري التحميل…"}):e?i.jsxs("div",{className:"admin-cards",style:{marginTop:12},children:[i.jsx("article",{className:"admin-card",children:i.jsxs("div",{className:"admin-card-body",children:[i.jsx("h3",{children:"المستخدمون"}),i.jsxs("p",{className:"muted",children:["الإجمالي: ",(o==null?void 0:o.total)??0," · النشط: ",(o==null?void 0:o.active_total)??0]}),i.jsxs("p",{className:"muted",children:["متسوقين: ",((c=o==null?void 0:o.shopper)==null?void 0:c.total)??0," (نشط ",((h=o==null?void 0:o.shopper)==null?void 0:h.active)??0,")"]}),i.jsxs("p",{className:"muted",children:["تجار: ",((u=o==null?void 0:o.merchant)==null?void 0:u.total)??0," (نشط ",((m=o==null?void 0:o.merchant)==null?void 0:m.active)??0,")"]})]})}),i.jsx("article",{className:"admin-card",children:i.jsxs("div",{className:"admin-card-body",children:[i.jsx("h3",{children:"فتح التطبيق اليوم"}),i.jsx("p",{className:"muted",children:(l==null?void 0:l.today)??""}),i.jsx("p",{style:{fontWeight:900,fontSize:"1.2rem",marginTop:6},children:(l==null?void 0:l.opens_today)??0})]})}),i.jsx("article",{className:"admin-card",children:i.jsxs("div",{className:"admin-card-body",children:[i.jsx("h3",{children:"المتاجر"}),i.jsxs("p",{className:"muted",children:["الإجمالي: ",((g=e==null?void 0:e.stores)==null?void 0:g.total)??0]}),i.jsxs("p",{className:"muted",children:["معلقة: ",((x=e==null?void 0:e.stores)==null?void 0:x.suspended)??0]})]})})]}):i.jsx("p",{className:"admin-empty",children:"تعذر تحميل المؤشرات."})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:dr}})]})})}function vN(){const{showAlert:e,showConfirm:t}=qe(),n=(localStorage.getItem("user_name")||"").trim().toLowerCase(),[a,o]=f.useState([]),[l,c]=f.useState(!1),[h,u]=f.useState(!1),[m,g]=f.useState(""),[x,v]=f.useState(""),[b,_]=f.useState(""),[j,P]=f.useState("secondary"),[N,w]=f.useState(null),z=f.useCallback(async()=>{c(!0);try{const E=await H4();o(Array.isArray(E)?E:[])}catch(E){console.error(E),o([]),await e("تعذر تحميل قائمة المدراء.","خطأ")}finally{c(!1)}},[e]);f.useEffect(()=>{z()},[z]);const C=async E=>{if(E.preventDefault(),!m.trim()||!x.trim()||b.length<6){await e("أكمل اسم المستخدم ورقم الهاتف وكلمة مرور لا تقل عن 6 أحرف.","تنبيه");return}u(!0);try{await Z4({username:m.trim(),phone_number:x.trim(),password:b,tier:j}),await e(j==="primary"?"تم إنشاء مدير أساسي جديد.":"تم إنشاء مدير فرعي.","تم"),g(""),v(""),_(""),P("secondary"),z()}catch(k){console.error(k),await e($e(k,"تعذر إنشاء الحساب."),"خطأ")}finally{u(!1)}},I=async E=>{if(E.is_primary_admin)return;const k=!E.is_active;if(await t(`${k?"تفعيل":"تعطيل"} دخول هذا المدير الفرعي؟`,"تأكيد")){w(E.id);try{await $4(E.id,k),await e(k?"تم التفعيل.":"تم التعطيل.","تم"),z()}catch(T){console.error(T),await e("تعذر تحديث الحساب.","خطأ")}finally{w(null)}}};return i.jsx(Be,{children:i.jsxs("div",{className:"admin-dash",children:[i.jsx("h1",{children:"إدارة المدراء"}),i.jsxs("p",{className:"admin-intro",children:["إنشاء ",i.jsx("strong",{children:"مدير فرعي"})," أو ",i.jsx("strong",{children:"مدير أساسي"})," جديد، وتعطيل أو تفعيل دخول المدير الفرعي فقط."]}),i.jsxs("section",{className:"card admin-section admin-primary-only",children:[i.jsxs("form",{className:"admin-account-form",onSubmit:C,children:[i.jsxs("div",{className:"form-row-grid",children:[i.jsxs("label",{children:["اسم المستخدم",i.jsx("input",{type:"text",value:m,onChange:E=>g(E.target.value),autoComplete:"off"})]}),i.jsxs("label",{children:["رقم الهاتف",i.jsx("input",{type:"text",value:x,onChange:E=>v(E.target.value),autoComplete:"off"})]}),i.jsxs("label",{children:["كلمة المرور",i.jsx("input",{type:"password",value:b,onChange:E=>_(E.target.value),autoComplete:"new-password"})]}),i.jsxs("label",{children:["نوع الحساب",i.jsxs("select",{value:j,onChange:E=>P(E.target.value),children:[i.jsx("option",{value:"secondary",children:"مدير فرعي"}),i.jsx("option",{value:"primary",children:"مدير أساسي (مثلك)"})]})]})]}),i.jsx("button",{type:"submit",className:"btn-ok",disabled:h,children:h?"جاري الإنشاء…":"إنشاء حساب"})]}),l?i.jsx("p",{children:"جاري تحميل المدراء…"}):i.jsx("div",{className:"admin-table-wrap",children:i.jsxs("table",{className:"admin-accounts-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"المستخدم"}),i.jsx("th",{children:"الهاتف"}),i.jsx("th",{children:"النوع"}),i.jsx("th",{children:"الحالة"}),i.jsx("th",{})]})}),i.jsx("tbody",{children:a.map(E=>{const k=E.username.trim().toLowerCase()===n,B=!E.is_primary_admin;return i.jsxs("tr",{children:[i.jsxs("td",{children:[E.username,k?i.jsx("span",{className:"you-badge",children:"أنت"}):null]}),i.jsx("td",{children:E.phone_number}),i.jsx("td",{children:i.jsx("span",{className:E.is_primary_admin?"tier-badge tier-primary":"tier-badge tier-secondary",children:E.is_primary_admin?"أساسي":"فرعي"})}),i.jsx("td",{children:E.is_active?"نشط":"معطّل"}),i.jsx("td",{children:B?i.jsx("button",{type:"button",className:"btn-toggle",disabled:N===E.id||k,onClick:()=>I(E),title:k?"لا يمكنك تعطيل حسابك من هنا":"",children:E.is_active?"تعطيل الدخول":"تفعيل الدخول"}):i.jsx("span",{className:"muted small",children:"—"})})]},E.id)})})]})})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:dr}})]})})}function bN(){const{showAlert:e,showConfirm:t}=qe(),{refresh:n}=go(),[a,o]=f.useState("pending"),[l,c]=f.useState([]),[h,u]=f.useState(!0),[m,g]=f.useState(null),x=f.useCallback(async()=>{u(!0);try{const b=await B4(a);c(Array.isArray(b)?b:[])}catch(b){console.error(b),c([]),await e("تعذر تحميل الإعلانات.","خطأ")}finally{u(!1)}},[a,e]);f.useEffect(()=>{x()},[x]);const v=async(b,_)=>{if(await t(`تأكيد ${_==="active"?"قبول":"رفض"} هذا الإعلان؟`,"تأكيد")){g(b);try{await Jv(b,_),await e(_==="active"?"تم تفعيل الإعلان.":"تم رفض الإعلان.","تم"),await n(),x()}catch(N){console.error(N),await e("تعذر تحديث حالة الإعلان.","خطأ")}finally{g(null)}}};return i.jsx(Be,{children:i.jsxs("div",{className:"admin-dash",children:[i.jsx("h1",{children:"إدارة الإعلانات الممولة"}),i.jsx("p",{className:"admin-intro",children:"راجع إشعار الدفع ثم وافق على الإعلان أو ارفضه."}),i.jsxs("section",{className:"card admin-section",children:[i.jsxs("div",{className:"admin-section-head",children:[i.jsx("h2",{children:"قائمة الإعلانات"}),i.jsxs("select",{className:"admin-filter",value:a,onChange:b=>o(b.target.value),"aria-label":"تصفية حالة الإعلان",children:[i.jsx("option",{value:"pending",children:"بانتظار الموافقة"}),i.jsx("option",{value:"active",children:"نشط"}),i.jsx("option",{value:"rejected",children:"مرفوض"}),i.jsx("option",{value:"expired",children:"منتهي الصلاحية"}),i.jsx("option",{value:"",children:"الكل"})]})]}),h?i.jsx("p",{children:"جاري التحميل…"}):l.length===0?i.jsx("p",{className:"admin-empty",children:"لا توجد إعلانات في هذا الفلتر."}):i.jsx("div",{className:"admin-cards",children:l.map(b=>i.jsxs("article",{className:"admin-card",children:[i.jsxs("div",{className:"admin-card-media",children:[Xe(b).length>0?i.jsx(ke,{to:`/admin/ads/${b.id}`,title:"مراجعة الطلب",style:{display:"block"},children:i.jsx(Ut,{images:Xe(b),height:120,borderRadius:10})}):null,b.payment_receipt_image?i.jsx(ke,{to:`/admin/ads/${b.id}`,className:"receipt-link",children:"مراجعة إشعار الدفع"}):i.jsx("span",{className:"muted",children:"لا يوجد إشعار دفع"})]}),i.jsxs("div",{className:"admin-card-body",children:[i.jsx("h3",{children:b.title}),i.jsxs("p",{className:"store-line",children:["المتجر: ",b.store_name||`#${b.store}`]}),i.jsxs("p",{className:"desc",children:["سعر المنتج: ",Number(b.product_price)>0?`${Number(b.product_price).toFixed(2)} ₪`:"—"," — الدفع:"," ",b.payment_method_label||b.payment_method||"—"]}),i.jsx("p",{className:"desc",children:b.description}),i.jsxs("p",{className:"status-pill",children:["الحالة: ",i.jsx("strong",{children:ef[b.status]||b.status})]}),b.status==="pending"?i.jsxs("div",{className:"admin-actions",children:[i.jsx("button",{type:"button",className:"btn-ok",disabled:m===b.id,onClick:()=>v(b.id,"active"),children:"قبول وتفعيل"}),i.jsx("button",{type:"button",className:"btn-no",disabled:m===b.id,onClick:()=>v(b.id,"rejected"),children:"رفض"})]}):null]})]},b.id))})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:dr}})]})})}function wN(){var P;const{adId:e}=po(),t=Nt(),{showAlert:n,showConfirm:a}=qe(),{refresh:o}=go(),[l,c]=f.useState(null),[h,u]=f.useState(!0),[m,g]=f.useState(!1),[x,v]=f.useState(!1),b=f.useCallback(async()=>{if(e){u(!0);try{const N=await F4(e);c(N),v(!1)}catch(N){console.error(N),c(null),await n("تعذر تحميل بيانات الإعلان.","خطأ")}finally{u(!1)}}},[e,n]);f.useEffect(()=>{b()},[b]);const _=async N=>{if(!(!(l!=null&&l.id)||!await a(`تأكيد ${N==="active"?"قبول":"رفض"} هذا الإعلان؟`,"تأكيد"))){g(!0);try{await Jv(l.id,N),await n(N==="active"?"تم تفعيل الإعلان.":"تم رفض الإعلان.","تم"),await o(),t("/admin/ads")}catch(C){console.error(C),await n("تعذر تحديث حالة الإعلان.","خطأ")}finally{g(!1)}}},j=N=>{const w=Number(N);return Number.isFinite(w)?w.toFixed(2):"—"};return i.jsx(Be,{children:i.jsxs("div",{className:"admin-dash admin-ad-review",children:[i.jsxs(ke,{to:"/admin/ads",className:"admin-back-link",children:[i.jsx(F5,{size:18,"aria-hidden":!0}),"العودة لقائمة الإعلانات"]}),i.jsx("h1",{children:"مراجعة طلب إعلان ممول"}),i.jsx("p",{className:"admin-intro",children:"تُعرض صور الإعلان وإشعار الدفع هنا داخل الموقع. بعد التحقق يمكنك القبول أو الرفض."}),h?i.jsx("p",{children:"جاري التحميل…"}):l?i.jsxs(i.Fragment,{children:[i.jsxs("section",{className:"card admin-section",children:[i.jsx("h2",{style:{marginTop:0},children:"إشعار الدفع"}),l.payment_receipt_image&&!x?i.jsx("div",{className:"admin-review-receipt-wrap",children:i.jsx("img",{src:l.payment_receipt_image,alt:"إشعار الدفع",className:"admin-review-receipt-img",onError:()=>v(!0),loading:"lazy",referrerPolicy:"no-referrer"})}):i.jsxs("div",{className:"admin-review-receipt-wrap",style:{padding:14},children:[i.jsx("p",{className:"muted",style:{margin:0,lineHeight:1.6},children:l.payment_receipt_image?"تعذر عرض صورة إشعار الدفع حالياً.":"لا يوجد صورة لإشعار الدفع."}),l.payment_receipt_image?i.jsx("a",{href:l.payment_receipt_image,target:"_blank",rel:"noreferrer noopener",style:{display:"inline-flex",marginTop:10,fontWeight:900,color:"var(--secondary)",textDecoration:"underline"},children:"فتح الصورة في تبويب جديد"}):null]})]}),i.jsxs("section",{className:"card admin-section",children:[i.jsx("h2",{style:{marginTop:0},children:"صور الإعلان"}),Xe(l).length>0?i.jsx("div",{className:"admin-review-receipt-wrap",children:i.jsx(Ut,{images:Xe(l),height:260,borderRadius:12})}):i.jsx("p",{className:"muted",children:"لا توجد صور للإعلان."})]}),i.jsxs("section",{className:"card admin-section",children:[i.jsx("h2",{style:{marginTop:0},children:"التفاصيل"}),i.jsxs("p",{className:"desc",children:[i.jsx("strong",{children:"العنوان:"})," ",l.title]}),i.jsxs("p",{className:"desc",children:[i.jsx("strong",{children:"المتجر:"})," ",l.store_name||`#${l.store}`]}),i.jsxs("p",{className:"desc",children:[i.jsx("strong",{children:"الوصف:"})," ",l.description]}),i.jsxs("p",{className:"desc",children:[i.jsx("strong",{children:"المنتج المرتبط:"})," ",(P=l.product_details)!=null&&P.name?i.jsxs(i.Fragment,{children:[l.product_details.name," (معرّف ",l.product,")"]}):l.product?i.jsxs(i.Fragment,{children:["معرّف المنتج #",l.product]}):i.jsx(i.Fragment,{children:"لا يوجد"})]}),i.jsxs("p",{className:"desc",children:[i.jsx("strong",{children:"سعر المنتج في الإعلان:"})," ",j(l.product_price)," ₪"]}),i.jsxs("p",{className:"desc",children:[i.jsx("strong",{children:"قناة الدفع:"})," ",l.payment_method_label||l.payment_method||"—"]}),i.jsxs("p",{className:"status-pill",children:["الحالة: ",i.jsx("strong",{children:ef[l.status]||l.status})]}),l.status==="pending"?i.jsxs("div",{className:"admin-actions",children:[i.jsx("button",{type:"button",className:"btn-ok",disabled:m,onClick:()=>_("active"),children:"قبول وتفعيل"}),i.jsx("button",{type:"button",className:"btn-no",disabled:m,onClick:()=>_("rejected"),children:"رفض"})]}):null]})]}):i.jsx("p",{className:"admin-empty",children:"لم يُعثَر على الإعلان."}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`${dr}
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
          `}})]})})}function _N(){const{showAlert:e,showConfirm:t}=qe(),{refresh:n}=go(),[a,o]=f.useState("pending"),[l,c]=f.useState([]),[h,u]=f.useState(!0),[m,g]=f.useState(null),x=f.useCallback(async()=>{u(!0);try{const _=await D4(a);c(Array.isArray(_)?_:[])}catch(_){console.error(_),c([]),await e("تعذر تحميل طلبات التجديد.","خطأ")}finally{u(!1)}},[a,e]);f.useEffect(()=>{x()},[x]);const v=async _=>{if(await t("تأكيد قبول طلب التجديد وتمديد الاشتراك؟","تأكيد")){g(_);try{await U4(_),await e("تم قبول الطلب وتمديد الاشتراك.","تم"),await n(),x()}catch(P){console.error(P),await e("تعذر قبول الطلب.","خطأ")}finally{g(null)}}},b=async _=>{if(await t("تأكيد رفض طلب التجديد؟","تأكيد")){g(_);try{await W4(_),await e("تم رفض الطلب.","تم"),await n(),x()}catch(P){console.error(P),await e("تعذر رفض الطلب.","خطأ")}finally{g(null)}}};return i.jsx(Be,{children:i.jsxs("div",{className:"admin-dash",children:[i.jsx("h1",{children:"إدارة الاشتراكات"}),i.jsxs("p",{className:"admin-intro",children:["مراجعة طلبات ",i.jsx("strong",{children:"تجديد الاشتراك"})," وإشعارات الدفع. قيمة التجديد المعتمدة في الأرباح: ",i.jsx("strong",{children:"10 شيكل"}),"."]}),i.jsxs("section",{className:"card admin-section",children:[i.jsxs("div",{className:"admin-section-head",children:[i.jsx("h2",{children:"طلبات التجديد"}),i.jsxs("select",{className:"admin-filter",value:a,onChange:_=>o(_.target.value),"aria-label":"تصفية حالة طلب التجديد",children:[i.jsx("option",{value:"pending",children:"بانتظار المراجعة"}),i.jsx("option",{value:"approved",children:"مقبول"}),i.jsx("option",{value:"rejected",children:"مرفوض"}),i.jsx("option",{value:"",children:"الكل"})]})]}),h?i.jsx("p",{children:"جاري التحميل…"}):l.length===0?i.jsx("p",{className:"admin-empty",children:"لا توجد طلبات في هذا الفلتر."}):i.jsx("div",{className:"admin-cards",children:l.map(_=>i.jsxs("article",{className:"admin-card renew-card",children:[i.jsx("div",{className:"admin-card-media",children:_.receipt_image?i.jsx("a",{href:_.receipt_image,target:"_blank",rel:"noopener noreferrer",children:i.jsx("img",{src:_.receipt_image,alt:"إشعار الدفع"})}):i.jsx("span",{className:"muted",children:"لا صورة"})}),i.jsxs("div",{className:"admin-card-body",children:[i.jsx("h3",{children:_.store_name||`متجر #${_.store}`}),_.notes?i.jsxs("p",{className:"desc",children:["ملاحظات التاجر: ",_.notes]}):null,i.jsxs("p",{className:"status-pill",children:["الحالة: ",i.jsx("strong",{children:ef[_.status]||_.status})]}),_.decided_at?i.jsxs("p",{className:"muted small",children:["قرار سابق: ",_.decided_by_username?`${_.decided_by_username} — `:"",_.decided_at]}):null,_.status==="pending"?i.jsxs("div",{className:"admin-actions",children:[i.jsx("button",{type:"button",className:"btn-ok",disabled:m===_.id,onClick:()=>v(_.id),children:"قبول وتمديد الاشتراك"}),i.jsx("button",{type:"button",className:"btn-no",disabled:m===_.id,onClick:()=>b(_.id),children:"رفض"})]}):null]})]},_.id))})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:dr}})]})})}function jN(e){if(!e)return"—";try{const t=new Date(e);return Number.isNaN(t.getTime())?String(e):t.toLocaleString("ar",{dateStyle:"medium",timeStyle:"short"})}catch{return String(e)}}function c0(e){if(!e)return null;const t=new Date(e);if(Number.isNaN(t.getTime()))return null;const n=new Date,a=t.getTime()-n.getTime(),o=Math.ceil(a/(24*60*60*1e3));return o>0?`متبقي ${o} يوم`:o===0?"ينتهي اليوم":`منتهي منذ ${Math.abs(o)} يوم`}function kN(){var W;const{showAlert:e,showConfirm:t}=qe(),[n,a]=f.useState(""),[o,l]=f.useState(""),[c,h]=f.useState(null),[u,m]=f.useState([]),[g,x]=f.useState(!0),[v,b]=f.useState([]),[_,j]=f.useState({total_all_stores:0,total_filtered:0}),[P,N]=f.useState(!1),[w,z]=f.useState(null);f.useEffect(()=>{let U=!1;return(async()=>{x(!0);try{const se=await la();U||m(Array.isArray(se)?se:[])}catch{U||m([])}finally{U||x(!1)}})(),()=>{U=!0}},[]);const C=f.useCallback(async()=>{var U,se;N(!0);try{const de=await tS(n,c);de&&Array.isArray(de.results)?(b(de.results),j({total_all_stores:((U=de.meta)==null?void 0:U.total_all_stores)??de.results.length,total_filtered:((se=de.meta)==null?void 0:se.total_filtered)??de.results.length})):Array.isArray(de)?(b(de),j({total_all_stores:de.length,total_filtered:de.length})):(b([]),j({total_all_stores:0,total_filtered:0}))}catch(de){console.error(de),b([]),j({total_all_stores:0,total_filtered:0}),await e("تعذر تحميل قائمة المتاجر. تأكد أنك مدير أساسي.","خطأ")}finally{N(!1)}},[n,c,e]);f.useEffect(()=>{C()},[C]);const I=U=>{U.preventDefault(),a(o.trim())},E=async U=>{const se=!U.is_suspended_by_admin;if(await t(`هل تريد تأكيد: ${se?"تعليق المتجر على الخريطة والعامة":"إلغاء التعليق وإتاحة الظهور ضمن شروط الاشتراك"}؟`,"تأكيد الإجراء")){z(U.id);try{await nS(U.id,se),await e(se?"تم تعليق المتجر.":"تم إلغاء التعليق.","تم"),C()}catch(le){console.error(le),await e("تعذر تحديث حالة المتجر.","خطأ")}finally{z(null)}}},k=_.total_all_stores??0,B=_.total_filtered??v.length,M=!!n||c!=null,T=[n?`بحث «${n}»`:null,c!=null?`قسم: ${((W=u.find(U=>U.id===c))==null?void 0:W.name)||c}`:null].filter(Boolean).join(" — ");return i.jsx(Be,{children:i.jsxs("div",{className:"admin-dash admin-stores-page",children:[i.jsxs("div",{className:"admin-stores-heading-row",children:[i.jsxs("div",{children:[i.jsx("h1",{style:{margin:"0 0 6px"},children:"المتاجر المشتركة"}),i.jsxs("p",{className:"admin-intro",style:{margin:0},children:["عمود ",i.jsx("strong",{children:"القسم"})," لكل متجر، والعدد المرفوع يطابق دائماً فلترة القسم والبحث معاً (ومع «الكل» بدون بحث يظهر إجمالي المتاجر المسجّلة)."]})]}),i.jsxs("div",{className:"admin-stores-total-pill",title:M?`${B} متجراً مطابقاً للفلترة${T?` (${T})`:""} — إجمالي النظام ${k}`:`إجمالي المتاجر المسجّلة: ${B}`,children:[i.jsx("span",{className:"admin-stores-total-num",children:B}),i.jsx("span",{className:"admin-stores-total-label",children:"متجر ضمن الفلتر"}),M&&k!==B?i.jsxs("span",{className:"admin-stores-total-sub",children:["من أصل ",k," في النظام"]}):null]})]}),i.jsx("p",{className:"admin-stores-filter-hint muted",style:{marginBottom:"1rem"},children:M?i.jsxs(i.Fragment,{children:["الفلتر النشط: ",T||"—"," — العداد أعلاه = ",i.jsx("strong",{children:B})," متجراً."]}):i.jsxs(i.Fragment,{children:["لا يوجد فلتر نشط — يُعرض كل المتاجر المسجّلة (",i.jsx("strong",{children:B}),")."]})}),i.jsxs("section",{className:"card admin-section",children:[i.jsxs("div",{className:"map-filters admin-store-filters",style:{marginBottom:"1rem",padding:"12px 14px"},children:[i.jsx("div",{style:{fontWeight:800,marginBottom:8,color:"var(--secondary)"},children:"فلترة حسب القسم"}),i.jsx("p",{style:{margin:"0 0 10px",fontSize:"0.88rem",color:"var(--text-secondary)"},children:"نفس منطق الخريطة: اختر قسماً أو «الكل»، ويُطبَّق مع حقل البحث معاً."}),g?i.jsx("p",{style:{margin:0,color:"var(--text-secondary)"},children:"جاري تحميل الأقسام…"}):i.jsxs("div",{className:"category-chips",children:[i.jsx("button",{type:"button",className:`chip ${c==null?"chip-active":""}`,onClick:()=>h(null),children:"الكل"}),u.map(U=>i.jsx("button",{type:"button",className:`chip ${c===U.id?"chip-active":""}`,onClick:()=>h(U.id),children:U.name},U.id))]})]}),i.jsx("form",{className:"admin-account-form",onSubmit:I,style:{marginBottom:"1rem"},children:i.jsxs("div",{className:"form-row-grid",style:{alignItems:"flex-end"},children:[i.jsxs("label",{style:{flex:1},children:["بحث (يُركَّب مع القسم)",i.jsx("input",{type:"search",value:o,onChange:U=>l(U.target.value),placeholder:"اسم المتجر، المستخدم، الجوال، العنوان التفصيلي…",autoComplete:"off"})]}),i.jsx("button",{type:"submit",className:"btn-ok",children:"تنفيذ البحث"}),i.jsx("button",{type:"button",className:"btn-toggle",onClick:()=>{l(""),a(""),h(null)},children:"مسح الكل"})]})}),P?i.jsx("p",{children:"جاري التحميل…"}):i.jsxs("div",{className:"admin-table-wrap",children:[i.jsxs("table",{className:"admin-accounts-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"المتجر"}),i.jsx("th",{children:"التقييم"}),i.jsx("th",{children:"القسم"}),i.jsx("th",{children:"العنوان التفصيلي"}),i.jsx("th",{children:"صاحب المتجر"}),i.jsx("th",{children:"الجوال"}),i.jsx("th",{children:"الإحداثيات والخريطة"}),i.jsx("th",{children:"ينتهي الاشتراك"}),i.jsx("th",{children:"للعامة"}),i.jsx("th",{})]})}),i.jsx("tbody",{children:v.map(U=>{var se;return i.jsxs("tr",{children:[i.jsxs("td",{children:[i.jsx("strong",{children:U.store_name}),i.jsxs("span",{className:"muted small",style:{display:"block"},children:["#",U.id]})]}),i.jsx("td",{children:U.rating_count>0&&U.rating_average!=null?i.jsxs(i.Fragment,{children:[i.jsx("strong",{dir:"ltr",children:Number(U.rating_average).toFixed(1)}),i.jsxs("span",{className:"muted small",style:{display:"block"},children:[U.rating_count," تقييم"]})]}):i.jsx("span",{className:"muted small",children:"— بدون تقييم"})}),i.jsx("td",{children:U.category_name?i.jsx("span",{className:"admin-store-category-cell",children:U.category_name}):i.jsx("span",{className:"muted small",children:"— بدون قسم"})}),i.jsx("td",{style:{maxWidth:"280px",lineHeight:1.5},children:(se=U.location_address)!=null&&se.trim()?i.jsx("span",{children:U.location_address.trim()}):i.jsx("span",{className:"muted small",children:"— لم يُدخل عنوان نصي"})}),i.jsx("td",{children:U.merchant_username||"—"}),i.jsx("td",{dir:"ltr",style:{textAlign:"right"},children:U.merchant_phone||"—"}),i.jsx("td",{children:U.latitude!=null&&U.longitude!=null?i.jsxs(i.Fragment,{children:[i.jsxs("span",{className:"muted small",dir:"ltr",style:{display:"block"},children:[Number(U.latitude).toFixed(5),", ",Number(U.longitude).toFixed(5)]}),U.map_preview_url?i.jsx("a",{href:U.map_preview_url,target:"_blank",rel:"noreferrer",children:"فتح على الخريطة"}):null]}):i.jsx("span",{className:"muted small",children:"لم يُحدد"})}),i.jsxs("td",{children:[jN(U.subscription_end_date),c0(U.subscription_end_date)?i.jsx("span",{className:"muted small",style:{display:"block"},children:c0(U.subscription_end_date)}):null,i.jsx("span",{className:"muted small",style:{display:"block"},children:U.subscription_is_active?"علم نشط":"علم غير نشط"}),U.is_suspended_by_admin?i.jsx("span",{className:"tier-badge tier-secondary",style:{marginTop:"0.25rem"},children:"معلّق إدارياً"}):null]}),i.jsx("td",{children:U.is_publicly_visible?i.jsx("span",{className:"tier-badge tier-primary",children:"يظهر"}):i.jsx("span",{className:"tier-badge tier-secondary",children:"مخفي"})}),i.jsx("td",{children:i.jsx("button",{type:"button",className:"btn-toggle",disabled:w===U.id,onClick:()=>E(U),children:U.is_suspended_by_admin?"رفع التعليق":"تعليق المتجر"})})]},U.id)})})]}),!P&&v.length===0?i.jsx("p",{className:"muted",children:"لا توجد نتائج."}):null]})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:dr}}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        `}})]})})}const SN=[31.5,34.4];function NN(){const{showAlert:e,showPrompt:t,showConfirm:n}=qe(),[a,o]=f.useState("pending"),[l,c]=f.useState([]),[h,u]=f.useState(!0),[m,g]=f.useState(null),[x,v]=f.useState([]),[b,_]=f.useState(!0),[j,P]=f.useState(""),[N,w]=f.useState(""),[z,C]=f.useState(""),[I,E]=f.useState(""),[k,B]=f.useState(null),[M,T]=f.useState(""),[W,U]=f.useState(""),[se,de]=f.useState(!1),[he,le]=f.useState(!1),V=f.useCallback(async()=>{u(!0);try{const $=await k4(a);c(Array.isArray($)?$:[])}catch($){console.error($),c([]),await e("تعذر تحميل الطلبات.","خطأ")}finally{u(!1)}},[a,e]);f.useEffect(()=>{V()},[V]),f.useEffect(()=>{let $=!1;return(async()=>{try{const G=await mo();$||v(Array.isArray(G)?G:[])}catch{$||v([])}finally{$||_(!1)}})(),()=>{$=!0}},[]);const A=f.useMemo(()=>x.find($=>String($.id)===String(j)),[x,j]),ie=(A==null?void 0:A.slug)||"",q=async($,G)=>{let F="";if(G==="reject"){if(F=await t("أدخل سبب الرفض (مطلوب):","سبب الرفض…","رفض الطلب",""),F==null)return;if(F=String(F).trim(),!F){await e("سبب الرفض مطلوب.","تنبيه");return}}else if(G==="approve"&&!await n("تأكيد اعتماد هذه النقطة وإظهارها على الخريطة؟","تأكيد"))return;g($);try{await S4($,G,F),await e(G==="approve"?"تم الاعتماد.":G==="reject"?"تم الرفض.":G==="hide"?"تم إخفاء النقطة عن العامة.":"تم إظهار النقطة للعامة.","تم"),await refreshPendingCounts(),V()}catch(ge){await e($e(ge,"تعذر التحديث."),"خطأ")}finally{g(null)}},ce=async $=>{if($.preventDefault(),!j){await e("اختر القسم.","تنبيه");return}if(!N.trim()||!z.trim()||!I.trim()){await e("عنوان ووصف وعنوان نصي مطلوبة.","تنبيه");return}if(!k){await e("حدد الموقع على الخريطة.","تنبيه");return}const G={category:Number(j),title:N.trim(),detail_description:z.trim(),address_text:I.trim(),latitude:k[0],longitude:k[1]};if(ie==="water"){if(M!=="true"&&M!=="false"){await e("حدد صلاحية الشرب للمياه.","تنبيه");return}G.water_is_potable=M==="true"}else G.water_is_potable=null;if(ie==="institution"){if(!["local","international","charity"].includes(W)){await e("اختر نطاق المؤسسة.","تنبيه");return}G.institution_scope=W}else G.institution_scope="";de(!0);try{await Gv(G),await e("تمت إضافة النقطة معتمدة مباشرة.","تم"),w(""),C(""),E(""),B(null),T(""),U(""),V()}catch(F){await e($e(F,"تعذر الإضافة."),"خطأ")}finally{de(!1)}},ne=k||SN,ue=async()=>{if(!navigator.geolocation){await e("المتصفح لا يدعم تحديد الموقع.","تنبيه");return}le(!0);try{const $=await Hs({maxWaitMs:22e3,goodEnoughM:110});B([$.latitude,$.longitude]);const G=$.accuracy;G!=null&&G>1200?await e(`تم وضع الدبوس على موقعك. الدقة تقريبية (~${Math.round(G)} م). على الكمبيوتر غالباً لا يوجد GPS؛ للدقة استخدم الهاتف أو انقر الموقع يدوياً.`,"موقع تقريبي"):await e("تم ضبط الدبوس على موقعك الحالي.","تم")}catch{await e("لم نتمكن من تحديد موقعك. تأكد من السماح بالوصول للموقع في المتصفح.","الموقع")}finally{le(!1)}};return i.jsx(Be,{children:i.jsxs("div",{className:"admin-dash",children:[i.jsx("h1",{children:"الخدمات المجتمعية"}),i.jsx("p",{className:"admin-intro",children:"راجع طلبات المتسوّقين والتجار، أو أضف نقاطاً معتمدة مباشرة. المعتمد فقط يظهر على الخريطة وصفحة الخدمات."}),i.jsxs("section",{className:"card admin-section",children:[i.jsxs("div",{className:"admin-section-head",children:[i.jsx("h2",{children:"الطلبات والنقاط"}),i.jsxs("select",{className:"admin-filter",value:a,onChange:$=>o($.target.value),"aria-label":"تصفية الحالة",children:[i.jsx("option",{value:"pending",children:"قيد المراجعة"}),i.jsx("option",{value:"approved",children:"معتمد"}),i.jsx("option",{value:"rejected",children:"مرفوض"}),i.jsx("option",{value:"",children:"الكل"})]})]}),h?i.jsx("p",{children:"جاري التحميل…"}):l.length===0?i.jsx("p",{className:"admin-empty",children:"لا توجد عناصر في هذا الفلتر."}):i.jsx("div",{className:"admin-cards",children:l.map($=>i.jsx("article",{className:"admin-card",children:i.jsxs("div",{className:"admin-card-body",children:[i.jsx("h3",{children:$.title}),i.jsxs("p",{className:"muted",children:[$.category_name," · ",$.status==="pending"?"قيد المراجعة":$.status==="approved"?"معتمد":"مرفوض"]}),i.jsx("p",{style:{fontSize:"0.9rem",lineHeight:1.5},children:$.detail_description}),i.jsx("p",{style:{fontSize:"0.85rem",color:"#666"},children:$.address_text}),i.jsxs("p",{style:{fontSize:"0.82rem",color:"#888"},children:["من: ",$.submitted_by_username||$.submitted_by]}),$.status==="rejected"&&$.rejection_reason?i.jsxs("p",{style:{fontSize:"0.85rem",color:"#c0392b"},children:["سبب الرفض: ",$.rejection_reason]}):null,$.status==="pending"?i.jsxs("div",{className:"admin-actions",style:{marginTop:12},children:[i.jsx("button",{type:"button",className:"btn-ok",disabled:m===$.id,onClick:()=>q($.id,"approve"),children:"اعتماد"}),i.jsx("button",{type:"button",className:"btn-no",disabled:m===$.id,onClick:()=>q($.id,"reject"),children:"رفض"})]}):$.status==="approved"?i.jsx("div",{className:"admin-actions",style:{marginTop:12},children:i.jsx("button",{type:"button",className:$.is_hidden_by_admin?"btn-ok":"btn-no",disabled:m===$.id,onClick:()=>q($.id,$.is_hidden_by_admin?"unhide":"hide"),children:$.is_hidden_by_admin?"إظهار للعامة":"إخفاء عن العامة"})}):null]})},$.id))})]}),i.jsxs("section",{className:"card admin-section",style:{marginTop:24},children:[i.jsx("h2",{children:"إضافة نقطة معتمدة مباشرة"}),b?i.jsx("p",{children:"جاري تحميل الأقسام…"}):i.jsxs("form",{onSubmit:ce,children:[i.jsx("label",{style:{display:"block",fontWeight:800,margin:"12px 0 6px"},children:"القسم"}),i.jsxs("select",{value:j,onChange:$=>{P($.target.value),T(""),U("")},style:{width:"100%",maxWidth:420,padding:10,borderRadius:10},required:!0,children:[i.jsx("option",{value:"",children:"— اختر —"}),x.map($=>i.jsx("option",{value:$.id,children:$.name},$.id))]}),ie==="water"?i.jsxs("div",{style:{marginTop:12},children:[i.jsx("div",{style:{fontWeight:800,marginBottom:6},children:"المياه"}),i.jsxs("label",{style:{marginRight:16},children:[i.jsx("input",{type:"radio",name:"aw",checked:M==="true",onChange:()=>T("true")})," ","صالحة للشرب"]}),i.jsxs("label",{children:[i.jsx("input",{type:"radio",name:"aw",checked:M==="false",onChange:()=>T("false")})," ","غير صالحة"]})]}):null,ie==="institution"?i.jsxs("div",{style:{marginTop:12},children:[i.jsx("label",{style:{display:"block",fontWeight:800,marginBottom:6},children:"نطاق المؤسسة"}),i.jsxs("select",{value:W,onChange:$=>U($.target.value),style:{width:"100%",maxWidth:420,padding:10,borderRadius:10},children:[i.jsx("option",{value:"",children:"— اختر —"}),i.jsx("option",{value:"local",children:"محلية"}),i.jsx("option",{value:"international",children:"عالمية"}),i.jsx("option",{value:"charity",children:"خيرية"})]})]}):null,i.jsx("label",{style:{display:"block",fontWeight:800,margin:"12px 0 6px"},children:"العنوان"}),i.jsx("input",{value:N,onChange:$=>w($.target.value),style:{width:"100%",maxWidth:420,padding:10,borderRadius:10},required:!0}),i.jsx("label",{style:{display:"block",fontWeight:800,margin:"12px 0 6px"},children:"الوصف التفصيلي"}),i.jsx("textarea",{value:z,onChange:$=>C($.target.value),rows:4,style:{width:"100%",maxWidth:520,padding:10,borderRadius:10},required:!0}),i.jsx("label",{style:{display:"block",fontWeight:800,margin:"12px 0 6px"},children:"العنوان النصي"}),i.jsx("textarea",{value:I,onChange:$=>E($.target.value),rows:2,style:{width:"100%",maxWidth:520,padding:10,borderRadius:10},required:!0}),i.jsx("p",{style:{marginTop:12,fontWeight:800},children:"الخريطة"}),i.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:10,alignItems:"center",marginBottom:8},children:[i.jsx(Ht,{type:"button",variant:"secondary",loading:he,onClick:ue,style:{width:"auto"},confirm:"استخدام موقع جهازك الحالي؟",showErrorAlert:!1,children:"موقعي الحالي"}),i.jsxs("span",{style:{fontSize:"0.88rem",color:"#666"},children:["أو انقر على الخريطة.",k?` ${k[0].toFixed(5)}, ${k[1].toFixed(5)}`:""]})]}),i.jsx("div",{style:{maxWidth:520,marginTop:8,borderRadius:12,overflow:"hidden"},children:i.jsxs(ra,{center:ne,zoom:14,minZoom:10,maxZoom:19,scrollWheelZoom:!0,style:{height:"clamp(240px, 48dvh, 360px)",width:"100%"},children:[i.jsx(ia,{}),i.jsx(aa,{}),i.jsx(Es,{position:k}),i.jsx(oo,{onPick:($,G)=>B([$,G])}),k?i.jsx(Or,{position:k,children:i.jsx(Br,{children:"موقع النقطة"})}):null]})}),i.jsx("div",{style:{marginTop:16},children:i.jsx(Ht,{type:"submit",loading:se,confirm:"حفظ نقطة الخدمة المجتمعية كمعتمدة؟",showErrorAlert:!1,children:"حفظ كمعتمد"})})]})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:dr}})]})})}function CN(){const{showAlert:e,showConfirm:t}=qe(),[n,a]=f.useState(""),[o,l]=f.useState(""),[c,h]=f.useState(!0),[u,m]=f.useState(null),[g,x]=f.useState([]),v=f.useCallback(async()=>{h(!0);try{const P=await X4(n,o);x(Array.isArray(P==null?void 0:P.results)?P.results:[])}catch(P){x([]),await e($e(P,"تعذر تحميل المستخدمين."),"خطأ")}finally{h(!1)}},[n,o,e]);f.useEffect(()=>{v()},[v]);const b=P=>P==="merchant"?"تاجر":P==="shopper"?"متسوق":P==="admin"?"مدير":P,_=async P=>{const N=!P.is_active;if(await t(N?`تفعيل المستخدم «${P.username}»؟`:`إيقاف المستخدم «${P.username}»؟ سيتم منعه من الدخول، وإن كان تاجرًا سيتم تعليق متجره.`,"تأكيد")){m(P.id);try{await eS(P.id,N),await e(N?"تم تفعيل الحساب.":"تم إيقاف الحساب.","تم"),await v()}catch(z){await e($e(z,"تعذر تحديث الحساب."),"خطأ")}finally{m(null)}}},j=f.useMemo(()=>g.length,[g]);return i.jsx(Be,{children:i.jsxs("div",{className:"admin-dash",children:[i.jsx("h1",{children:"المستخدمون"}),i.jsx("p",{className:"admin-intro",children:"بحث وتفعيل/إيقاف حسابات المتسوقين والتجار."}),i.jsxs("section",{className:"card admin-section",children:[i.jsxs("div",{className:"admin-section-head",style:{alignItems:"flex-end",gap:12,flexWrap:"wrap"},children:[i.jsxs("div",{style:{flex:"1 1 260px"},children:[i.jsx("label",{className:"admin-label",htmlFor:"u-q",children:"بحث"}),i.jsx("input",{id:"u-q",className:"admin-input",value:n,onChange:P=>a(P.target.value),placeholder:"اسم المستخدم أو رقم الهاتف…"})]}),i.jsxs("div",{style:{width:200},children:[i.jsx("label",{className:"admin-label",htmlFor:"u-type",children:"النوع"}),i.jsxs("select",{id:"u-type",className:"admin-filter",value:o,onChange:P=>l(P.target.value),children:[i.jsx("option",{value:"",children:"الكل"}),i.jsx("option",{value:"shopper",children:"متسوق"}),i.jsx("option",{value:"merchant",children:"تاجر"}),i.jsx("option",{value:"admin",children:"مدير"})]})]}),i.jsx("button",{type:"button",className:"btn-primary",onClick:v,style:{height:44},children:"تحديث"})]}),c?i.jsx("p",{children:"جاري التحميل…"}):g.length===0?i.jsx("p",{className:"admin-empty",children:"لا توجد نتائج."}):i.jsxs(i.Fragment,{children:[i.jsxs("p",{className:"muted",style:{marginTop:8},children:["عدد النتائج: ",j]}),i.jsx("div",{className:"admin-cards",style:{marginTop:12},children:g.map(P=>i.jsx("article",{className:"admin-card",children:i.jsxs("div",{className:"admin-card-body",children:[i.jsx("h3",{style:{marginBottom:6},children:P.username}),i.jsxs("p",{className:"muted",style:{marginTop:0},children:[b(P.user_type)," · ",P.phone_number]}),i.jsxs("p",{className:"muted",style:{marginTop:6},children:["الحالة: ",P.is_active?"نشط":"موقوف"," · التحقق: ",P.is_whatsapp_verified?"تم":"لا"]}),i.jsx("div",{className:"admin-actions",style:{marginTop:12},children:i.jsx("button",{type:"button",className:P.is_active?"btn-no":"btn-ok",disabled:u===P.id,onClick:()=>_(P),children:P.is_active?"إيقاف الحساب":"تفعيل الحساب"})})]})},P.id))})]})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:dr}})]})})}function d0(e){if(!e)return"—";try{const t=new Date(e);return Number.isNaN(t.getTime())?String(e):t.toLocaleString("ar",{dateStyle:"medium",timeStyle:"short"})}catch{return String(e)}}function PN(){const{showAlert:e}=qe(),[t,n]=f.useState(""),[a,o]=f.useState(""),[l,c]=f.useState(""),[h,u]=f.useState(""),[m,g]=f.useState(""),[x,v]=f.useState(!1),[b,_]=f.useState([]),[j,P]=f.useState({total_count:0,total_amount_ils:"0.00"}),N=f.useCallback(async()=>{v(!0);try{const w=await J4({q:t,from:l,to:h,method:m,kind:a});_(Array.isArray(w==null?void 0:w.results)?w.results:[]),P((w==null?void 0:w.meta)||{total_count:0,total_amount_ils:"0.00"})}catch(w){console.error(w),_([]),P({total_count:0,total_amount_ils:"0.00"}),await e("تعذر تحميل التحويلات/الأرباح.","خطأ")}finally{v(!1)}},[t,l,h,m,a,e]);return f.useEffect(()=>{N()},[N]),i.jsx(Be,{children:i.jsxs("div",{className:"admin-dash admin-finance-page",children:[i.jsx("h1",{style:{marginTop:0},children:"الأرباح والتحويلات"}),i.jsx("p",{className:"admin-intro",children:"هذه الصفحة للمدير الأساسي: مراجعة التحويلات/الأرباح من الإعلانات الممولة وتجديد الاشتراكات المقبولة."}),i.jsxs("section",{className:"card admin-section",children:[i.jsx("div",{className:"admin-section-head",style:{alignItems:"flex-start"},children:i.jsxs("div",{children:[i.jsx("h2",{style:{margin:0},children:"الأرباح والتحويلات"}),i.jsxs("p",{className:"muted small",style:{margin:"6px 0 0"},children:["إجمالي التحويلات ضمن الفلتر: ",i.jsx("strong",{dir:"ltr",children:j.total_count??0})," — مجموع المبالغ:"," ",i.jsxs("strong",{dir:"ltr",children:[j.total_amount_ils??"0.00"," ₪"]})]})]})}),i.jsxs("div",{className:"admin-finance-filters",style:{marginBottom:12},children:[i.jsxs("label",{children:["بحث باسم المتجر/اليوزر/الجوال",i.jsx("input",{value:t,onChange:w=>n(w.target.value),placeholder:"مثال: اسم متجر أو 059...",autoComplete:"off"})]}),i.jsxs("label",{children:["مصدر الأرباح",i.jsxs("select",{value:a,onChange:w=>o(w.target.value),children:[i.jsx("option",{value:"",children:"الكل"}),i.jsx("option",{value:"sponsored_ad",children:"الإعلانات الممولة فقط"}),i.jsx("option",{value:"subscription_renewal",children:"الاشتراكات فقط"})]})]}),i.jsxs("label",{children:["من تاريخ",i.jsx("input",{type:"date",value:l,onChange:w=>c(w.target.value)})]}),i.jsxs("label",{children:["إلى تاريخ",i.jsx("input",{type:"date",value:h,onChange:w=>u(w.target.value)})]}),i.jsxs("label",{children:["طريقة التحويل",i.jsxs("select",{value:m,onChange:w=>g(w.target.value),children:[i.jsx("option",{value:"",children:"الكل"}),i.jsx("option",{value:"balipay_wallet",children:"محفظة بال باي"}),i.jsx("option",{value:"bank_palestine",children:"بنك فلسطين"}),i.jsx("option",{value:"other",children:"أخرى"})]})]}),i.jsx("button",{type:"button",className:"btn-ok",onClick:N,disabled:x,children:"تحديث"}),i.jsx("button",{type:"button",className:"btn-toggle",onClick:()=>{n(""),o(""),c(""),u(""),g("")},children:"مسح الفلاتر"})]}),x?i.jsx("p",{children:"جاري التحميل…"}):b.length===0?i.jsx("p",{className:"muted",children:"لا توجد تحويلات ضمن هذه الفلاتر."}):i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"admin-table-wrap admin-finance-table-wrap",children:i.jsxs("table",{className:"admin-accounts-table admin-finance-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"الإشعار"}),i.jsx("th",{children:"المتجر"}),i.jsx("th",{children:"صاحب المتجر"}),i.jsx("th",{children:"الجوال"}),i.jsx("th",{children:"النوع"}),i.jsx("th",{children:"طريقة التحويل"}),i.jsx("th",{children:"المبلغ"}),i.jsx("th",{children:"تاريخ/وقت التحويل"})]})}),i.jsx("tbody",{children:b.map(w=>i.jsxs("tr",{children:[i.jsx("td",{children:w.receipt_image?i.jsx("a",{href:w.receipt_image,target:"_blank",rel:"noreferrer",className:"fin-receipt",children:i.jsx("img",{src:w.receipt_image,alt:"إشعار التحويل",loading:"lazy"})}):i.jsx("span",{className:"muted small",children:"—"})}),i.jsxs("td",{children:[i.jsx("strong",{children:w.store_name}),i.jsxs("span",{className:"muted small",style:{display:"block"},children:["#",w.store_id]})]}),i.jsx("td",{children:w.merchant_username||"—"}),i.jsx("td",{dir:"ltr",style:{textAlign:"right"},children:w.merchant_phone||"—"}),i.jsx("td",{children:i.jsx("span",{className:"fin-pill fin-pill--kind",children:w.kind_label||w.kind})}),i.jsx("td",{children:i.jsx("span",{className:`fin-pill fin-pill--method fin-pill--${w.payment_method||"other"}`,children:w.payment_method_label||w.payment_method})}),i.jsxs("td",{className:"fin-amount",dir:"ltr",children:[w.amount_ils," ₪"]}),i.jsx("td",{className:"fin-dt",children:d0(w.created_at)})]},w.id))})]})}),i.jsx("div",{className:"fin-cards","aria-label":"قائمة التحويلات",children:b.map(w=>i.jsxs("article",{className:"fin-card",children:[i.jsxs("div",{className:"fin-card__top",children:[i.jsxs("div",{className:"fin-card__store",children:[i.jsx("div",{className:"fin-card__storeName",children:w.store_name}),i.jsxs("div",{className:"muted small",children:["#",w.store_id]})]}),i.jsxs("div",{className:"fin-card__amount",dir:"ltr",children:[w.amount_ils," ₪"]})]}),w.receipt_image?i.jsxs("a",{href:w.receipt_image,target:"_blank",rel:"noreferrer",className:"fin-card__receipt",children:[i.jsx("img",{src:w.receipt_image,alt:"إشعار التحويل",loading:"lazy"}),i.jsx("span",{children:"فتح إشعار التحويل"})]}):null,i.jsxs("div",{className:"fin-card__pills",children:[i.jsx("span",{className:"fin-pill fin-pill--kind",children:w.kind_label||w.kind}),i.jsx("span",{className:`fin-pill fin-pill--method fin-pill--${w.payment_method||"other"}`,children:w.payment_method_label||w.payment_method})]}),i.jsxs("div",{className:"fin-kv",children:[i.jsxs("div",{className:"fin-kv__row",children:[i.jsx("span",{className:"fin-kv__k",children:"صاحب المتجر"}),i.jsx("span",{className:"fin-kv__v",children:w.merchant_username||"—"})]}),i.jsxs("div",{className:"fin-kv__row",children:[i.jsx("span",{className:"fin-kv__k",children:"الجوال"}),i.jsx("span",{className:"fin-kv__v",dir:"ltr",children:w.merchant_phone||"—"})]}),i.jsxs("div",{className:"fin-kv__row",children:[i.jsx("span",{className:"fin-kv__k",children:"التاريخ"}),i.jsx("span",{className:"fin-kv__v",children:d0(w.created_at)})]})]})]},`m-${w.id}`))})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
            `}})]})]})})}function zN(){const{showAlert:e,showConfirm:t}=qe(),[n,a]=f.useState(""),[o,l]=f.useState([]),[c,h]=f.useState(!1),u=f.useCallback(async()=>{h(!0);try{const v=await K4();l(Array.isArray(v==null?void 0:v.results)?v.results:[])}catch(v){console.error(v),l([]),await e("تعذر تحميل الإعلانات.","خطأ")}finally{h(!1)}},[e]);f.useEffect(()=>{u()},[u]);const m=f.useMemo(()=>o.find(v=>v.is_active)||null,[o]),g=async()=>{const v=n.trim();if(!v)return e("اكتب نص الإعلان أولاً.","تنبيه");if(await t("نشر إعلان عام جديد؟ سيتم إيقاف الإعلان النشط السابق إن وُجد.","تأكيد"))try{await Y4(v),a(""),await u(),await e("تم نشر الإعلان.","تم")}catch(_){console.error(_),await e("تعذر نشر الإعلان.","خطأ")}},x=async()=>{if(!(!m||!await t("حذف/إيقاف الإعلان النشط؟","تأكيد")))try{await Q4(m.id),await u(),await e("تم حذف الإعلان.","تم")}catch(b){console.error(b),await e("تعذر حذف الإعلان.","خطأ")}};return i.jsx(Be,{children:i.jsxs("div",{className:"admin-dash",children:[i.jsx("h1",{children:"إعلان عام"}),i.jsx("p",{className:"admin-intro",children:"نشر إعلان عام يظهر لكل المستخدمين تحت الهيدر. يوجد إعلان نشط واحد فقط في نفس الوقت."}),i.jsxs("section",{className:"card admin-section",children:[i.jsxs("div",{className:"admin-section-head",children:[i.jsx("h2",{children:"الإعلان الحالي"}),c?i.jsx("span",{className:"muted small",children:"جاري التحميل…"}):null]}),m?i.jsxs("div",{className:"card",style:{padding:14,background:"var(--surface)",marginBottom:14},children:[i.jsx("div",{style:{fontWeight:900,marginBottom:8},children:"نشط الآن"}),i.jsx("div",{style:{whiteSpace:"pre-wrap",lineHeight:1.7},children:m.message}),i.jsx("div",{className:"admin-actions",children:i.jsx("button",{type:"button",className:"btn-no",onClick:x,children:"حذف الإعلان"})})]}):i.jsx("p",{className:"muted",style:{marginTop:0},children:"لا يوجد إعلان نشط حالياً."}),i.jsx("h2",{style:{marginTop:0},children:"نشر إعلان جديد"}),i.jsxs("label",{style:{display:"block",fontWeight:800},children:["نص الإعلان",i.jsx("textarea",{value:n,onChange:v=>a(v.target.value),placeholder:"اكتب إعلاناً عاماً يظهر للجميع…",style:{width:"100%",marginTop:8,padding:"0.85rem 1rem",borderRadius:14,border:"1.5px solid var(--border)",background:"var(--white)",minHeight:110,resize:"vertical",fontFamily:"inherit"}})]}),i.jsx("div",{className:"admin-actions",children:i.jsx("button",{type:"button",className:"btn-ok",onClick:g,children:"نشر الإعلان"})})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:dr}})]})})}function EN({src:e,alt:t}){return e?i.jsx("a",{className:"cat-thumb",href:e,target:"_blank",rel:"noreferrer",title:"فتح الصورة",children:i.jsx("img",{src:e,alt:t||"صورة",loading:"lazy"})}):i.jsx("span",{className:"muted small",children:"—"})}function LN(){const{showAlert:e,showConfirm:t}=qe(),[n,a]=f.useState("stores"),[o,l]=f.useState(!1),[c,h]=f.useState([]),[u,m]=f.useState([]),[g,x]=f.useState(""),[v,b]=f.useState(""),[_,j]=f.useState(""),[P,N]=f.useState(0),[w,z]=f.useState(null),C=f.useMemo(()=>n==="stores"?c:u,[n,c,u]),I=f.useCallback(async()=>{l(!0);try{const[M,T]=await Promise.all([rS(),oS()]);h(Array.isArray(M==null?void 0:M.results)?M.results:Array.isArray(M)?M:[]),m(Array.isArray(T==null?void 0:T.results)?T.results:Array.isArray(T)?T:[])}catch(M){console.error(M),h([]),m([]),await e("تعذر تحميل الأقسام.","خطأ")}finally{l(!1)}},[e]);f.useEffect(()=>{I()},[I]);const E=()=>{x(""),b(""),j(""),N(0),z(null)},k=async()=>{const M=g.trim();if(!M)return e("اكتب اسم القسم.","تنبيه");l(!0);try{n==="stores"?await iS({name:M,imageFile:w}):await sS({name:M,slug:v.trim(),description_hint:_.trim(),sort_order:Number(P)||0,imageFile:w}),E(),await I(),await e("تمت الإضافة.","تم")}catch(T){console.error(T),await e("تعذر إضافة القسم.","خطأ")}finally{l(!1)}},B=async M=>{if(await t(`حذف القسم: ${M.name}؟`,"تأكيد")){l(!0);try{n==="stores"?await aS(M.id):await lS(M.id),await I(),await e("تم الحذف.","تم")}catch(W){console.error(W),await e("تعذر الحذف. إن كان القسم مرتبط بنقاط خدمات مجتمعية سيتم تعطيله بدل الحذف.","تنبيه"),await I()}finally{l(!1)}}};return i.jsx(Be,{children:i.jsxs("div",{className:"admin-dash",children:[i.jsx("h1",{children:"إدارة الأقسام"}),i.jsx("p",{className:"admin-intro",children:"إضافة/حذف أقسام المتاجر وأقسام الخدمات المجتمعية، مع صورة افتراضية للقسم."}),i.jsxs("section",{className:"card admin-section",style:{marginBottom:16},children:[i.jsxs("div",{className:"admin-section-head",children:[i.jsx("h2",{style:{margin:0},children:"النوع"}),i.jsxs("div",{className:"cat-tabs",role:"tablist","aria-label":"نوع الأقسام",children:[i.jsx("button",{type:"button",className:`cat-tab${n==="stores"?" cat-tab--active":""}`,onClick:()=>a("stores"),children:"أقسام المتاجر"}),i.jsx("button",{type:"button",className:`cat-tab${n==="community"?" cat-tab--active":""}`,onClick:()=>a("community"),children:"أقسام الخدمات المجتمعية"})]})]}),i.jsxs("div",{className:"cat-form",children:[i.jsxs("label",{children:["اسم القسم",i.jsx("input",{value:g,onChange:M=>x(M.target.value),placeholder:"مثال: حلويات"})]}),n==="community"?i.jsxs(i.Fragment,{children:[i.jsxs("label",{children:["slug (اختياري)",i.jsx("input",{value:v,onChange:M=>b(M.target.value),placeholder:"يُنشأ تلقائياً إن تركته"})]}),i.jsxs("label",{style:{gridColumn:"1 / -1"},children:["تلميح/وصف (اختياري)",i.jsx("textarea",{value:_,onChange:M=>j(M.target.value),placeholder:"يظهر عند اقتراح نقطة خدمة"})]}),i.jsxs("label",{children:["ترتيب (اختياري)",i.jsx("input",{type:"number",value:P,onChange:M=>N(M.target.value)})]})]}):null,i.jsxs("label",{style:{gridColumn:"1 / -1"},children:["صورة افتراضية للقسم (اختياري)",i.jsx("input",{type:"file",accept:"image/*",onChange:M=>{var T;return z(((T=M.target.files)==null?void 0:T[0])||null)}}),i.jsx("span",{className:"muted small",children:"PNG/JPG"})]}),i.jsxs("div",{className:"admin-actions",style:{gridColumn:"1 / -1"},children:[i.jsx("button",{type:"button",className:"btn-ok",onClick:k,disabled:o,children:"إضافة قسم"}),i.jsx("button",{type:"button",className:"btn-toggle",onClick:E,disabled:o,children:"مسح الحقول"})]})]})]}),i.jsxs("section",{className:"card admin-section",children:[i.jsxs("div",{className:"admin-section-head",children:[i.jsx("h2",{style:{margin:0},children:"القائمة"}),o?i.jsx("span",{className:"muted small",children:"جاري…"}):i.jsxs("span",{className:"muted small",children:[C.length," قسم"]})]}),i.jsx("div",{className:"admin-table-wrap",children:i.jsxs("table",{className:"admin-accounts-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"الصورة"}),i.jsx("th",{children:"الاسم"}),n==="community"?i.jsx("th",{children:"slug"}):null,n==="community"?i.jsx("th",{children:"نشط"}):null,i.jsx("th",{})]})}),i.jsxs("tbody",{children:[C.map(M=>i.jsxs("tr",{children:[i.jsx("td",{children:i.jsx(EN,{src:M.image,alt:M.name})}),i.jsxs("td",{children:[i.jsx("strong",{children:M.name}),i.jsxs("span",{className:"muted small",style:{display:"block"},children:["#",M.id]})]}),n==="community"?i.jsx("td",{dir:"ltr",children:M.slug}):null,n==="community"?i.jsx("td",{children:M.is_active?"نعم":"لا"}):null,i.jsx("td",{children:i.jsx("button",{type:"button",className:"btn-no",onClick:()=>B(M),disabled:o,children:"حذف"})})]},M.id)),!o&&C.length===0?i.jsx("tr",{children:i.jsx("td",{colSpan:n==="community"?5:4,className:"muted",children:"لا يوجد أقسام."})}):null]})]})})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
            ${dr}
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
          `}})]})})}function MN(){const{showAlert:e,showConfirm:t}=qe(),n=localStorage.getItem("isGuest")==="true",o=!!localStorage.getItem("token")&&!n,l=f.useMemo(()=>localStorage.getItem("user_name")||"",[]),[c,h]=f.useState(l),[u,m]=f.useState(!1),[g,x]=f.useState(""),[v,b]=f.useState(""),[_,j]=f.useState(!1);if(!o)return i.jsx(Be,{children:i.jsxs("div",{dir:"rtl",style:{maxWidth:720,margin:"0 auto"},children:[i.jsxs("div",{className:"card",children:[i.jsx("h2",{style:{marginTop:0},children:"الإعدادات"}),i.jsx("div",{style:{color:"var(--text-secondary)",fontWeight:800,lineHeight:1.8},children:"هذه الصفحة متاحة للحسابات المسجّلة فقط."})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:u0}})]})});const P=async w=>{w.preventDefault();const z=(c||"").trim();if(!z){e("أدخل اسم المستخدم.","تنبيه");return}if(await t("تأكيد حفظ اسم المستخدم الجديد؟","تأكيد")){m(!0);try{const I=await xS(z),E=(I==null?void 0:I.username)||z;localStorage.setItem("user_name",E),h(E),e("تم تحديث اسم المستخدم.","تم")}catch(I){e($e(I,"تعذر تحديث اسم المستخدم. حاول لاحقاً."),"خطأ")}finally{m(!1)}}},N=async w=>{if(w.preventDefault(),!g){e("أدخل كلمة المرور الحالية.","تنبيه");return}if(!v||v.length<6){e("كلمة المرور الجديدة يجب أن تكون 6 أحرف على الأقل.","تنبيه");return}if(await t("تأكيد تغيير كلمة المرور؟","تأكيد")){j(!0);try{await yS({current_password:g,new_password:v}),x(""),b(""),e("تم تغيير كلمة المرور بنجاح.","تم")}catch(C){e($e(C,"تعذر تغيير كلمة المرور. تحقق من البيانات وحاول لاحقاً."),"خطأ")}finally{j(!1)}}};return i.jsx(Be,{children:i.jsxs("div",{dir:"rtl",style:{maxWidth:860,margin:"0 auto"},children:[i.jsxs("div",{className:"settings-wrap",children:[i.jsxs("div",{className:"card",children:[i.jsx("h2",{style:{marginTop:0},children:"الإعدادات"}),i.jsx("div",{className:"muted",children:"يمكنك هنا تحديث اسم المستخدم وكلمة المرور."})]}),i.jsxs("div",{className:"grid",children:[i.jsxs("div",{className:"card",children:[i.jsx("h3",{style:{marginTop:0},children:"تغيير اسم المستخدم"}),i.jsxs("form",{onSubmit:P,className:"form",children:[i.jsx("label",{className:"lbl",children:"اسم المستخدم"}),i.jsx("input",{className:"inp",value:c,onChange:w=>h(w.target.value),placeholder:"اسم المستخدم الجديد",autoComplete:"username"}),i.jsx("button",{className:"btn",type:"submit",disabled:u,children:u?"جاري الحفظ…":"حفظ"})]})]}),i.jsxs("div",{className:"card",children:[i.jsx("h3",{style:{marginTop:0},children:"تغيير كلمة المرور"}),i.jsxs("form",{onSubmit:N,className:"form",children:[i.jsx("label",{className:"lbl",children:"كلمة المرور الحالية"}),i.jsx("input",{className:"inp",type:"password",value:g,onChange:w=>x(w.target.value),autoComplete:"current-password"}),i.jsx("label",{className:"lbl",children:"كلمة المرور الجديدة"}),i.jsx("input",{className:"inp",type:"password",value:v,onChange:w=>b(w.target.value),autoComplete:"new-password"}),i.jsx("button",{className:"btn",type:"submit",disabled:_,children:_?"جاري الحفظ…":"تغيير كلمة المرور"})]})]})]})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:u0}})]})})}const u0=`
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
`;function TN(){const{showConfirm:e}=qe(),t=f.useRef(e);return t.current=e,f.useEffect(()=>(Ug(async()=>t.current("تم قطع الجلسة أو انتهت صلاحية الدخول (أحياناً بعد الرجوع في المتصفح). هل تريد الانتقال إلى صفحة تسجيل الدخول؟","تسجيل الخروج")),()=>Ug(null)),[]),null}const id=()=>!!localStorage.getItem("token"),ad=()=>localStorage.getItem("isGuest")==="true",AN=()=>localStorage.getItem("user_type")==="merchant",IN=()=>localStorage.getItem("user_type")==="admin",He=({children:e})=>e,Ll=({children:e})=>ad()||!id()?i.jsx(no,{to:"/login",replace:!0}):e,RN=()=>i.jsx(b1,{}),zr=({children:e})=>ad()||!id()||!AN()?i.jsx(no,{to:"/",replace:!0}):e,Un=({children:e})=>ad()||!id()||!IN()?i.jsx(no,{to:"/login",replace:!0}):e,Ho=({children:e})=>localStorage.getItem("is_primary_admin")!=="true"?i.jsx(no,{to:"/admin",replace:!0}):e,ON=({children:e})=>{if(ad()||!id())return i.jsx(no,{to:"/login",replace:!0});const t=localStorage.getItem("user_type");return t!=="shopper"&&t!=="merchant"?i.jsx(no,{to:"/services",replace:!0}):e};function BN(){return f.useEffect(()=>{mS().catch(()=>{})},[]),i.jsx(jS,{children:i.jsxs(_4,{children:[i.jsx(TN,{}),i.jsx(bS,{children:i.jsx(SS,{children:i.jsx(d5,{})})})]})})}const FN=v5(yh(i.jsxs(Me,{element:i.jsx(BN,{}),children:[i.jsx(Me,{path:"/login",element:i.jsx(RS,{})}),i.jsx(Me,{path:"/share/cart/:shareToken",element:i.jsx(hN,{})}),i.jsx(Me,{path:"/register",element:i.jsx(w8,{})}),i.jsx(Me,{path:"/verify-whatsapp",element:i.jsx(lN,{})}),i.jsx(Me,{path:"/settings",element:i.jsx(He,{children:i.jsx(Ll,{children:i.jsx(MN,{})})})}),i.jsx(Me,{path:"/admin",element:i.jsx(He,{children:i.jsx(Un,{children:i.jsx(yN,{})})})}),i.jsx(Me,{path:"/admin/accounts",element:i.jsx(He,{children:i.jsx(Un,{children:i.jsx(Ho,{children:i.jsx(vN,{})})})})}),i.jsx(Me,{path:"/admin/ads",element:i.jsx(He,{children:i.jsx(Un,{children:i.jsx(bN,{})})})}),i.jsx(Me,{path:"/admin/ads/:adId",element:i.jsx(He,{children:i.jsx(Un,{children:i.jsx(wN,{})})})}),i.jsx(Me,{path:"/admin/subscriptions",element:i.jsx(He,{children:i.jsx(Un,{children:i.jsx(_N,{})})})}),i.jsx(Me,{path:"/admin/stores",element:i.jsx(He,{children:i.jsx(Un,{children:i.jsx(Ho,{children:i.jsx(kN,{})})})})}),i.jsx(Me,{path:"/admin/finance",element:i.jsx(He,{children:i.jsx(Un,{children:i.jsx(Ho,{children:i.jsx(PN,{})})})})}),i.jsx(Me,{path:"/admin/announcements",element:i.jsx(He,{children:i.jsx(Un,{children:i.jsx(Ho,{children:i.jsx(zN,{})})})})}),i.jsx(Me,{path:"/admin/categories",element:i.jsx(He,{children:i.jsx(Un,{children:i.jsx(Ho,{children:i.jsx(LN,{})})})})}),i.jsx(Me,{path:"/admin/community",element:i.jsx(He,{children:i.jsx(Un,{children:i.jsx(NN,{})})})}),i.jsx(Me,{path:"/admin/users",element:i.jsx(He,{children:i.jsx(Un,{children:i.jsx(CN,{})})})}),i.jsx(Me,{path:"/dashboard",element:i.jsx(He,{children:i.jsx(E8,{})})}),i.jsx(Me,{path:"/merchant/dashboard",element:i.jsx(He,{children:i.jsx(zr,{children:i.jsx(L8,{})})})}),i.jsx(Me,{path:"/merchant/products",element:i.jsx(He,{children:i.jsx(zr,{children:i.jsx(M8,{})})})}),i.jsx(Me,{path:"/merchant/products/new",element:i.jsx(He,{children:i.jsx(zr,{children:i.jsx(n0,{})})})}),i.jsx(Me,{path:"/merchant/products/:id/edit",element:i.jsx(He,{children:i.jsx(zr,{children:i.jsx(n0,{})})})}),i.jsx(Me,{path:"/merchant/my-ads",element:i.jsx(He,{children:i.jsx(zr,{children:i.jsx(O8,{})})})}),i.jsx(Me,{path:"/merchant/ads",element:i.jsx(He,{children:i.jsx(zr,{children:i.jsx(I8,{})})})}),i.jsx(Me,{path:"/merchant/subscription",element:i.jsx(He,{children:i.jsx(zr,{children:i.jsx(B8,{})})})}),i.jsx(Me,{path:"/merchant/settings",element:i.jsx(He,{children:i.jsx(zr,{children:i.jsx(q8,{})})})}),i.jsx(Me,{path:"/merchant/profile",element:i.jsx(He,{children:i.jsx(zr,{children:i.jsx(V8,{})})})}),i.jsx(Me,{path:"/categories",element:i.jsx(He,{children:i.jsx(G8,{})})}),i.jsx(Me,{path:"/services",element:i.jsx(He,{children:i.jsx(Q8,{})})}),i.jsx(Me,{path:"/services/category/:categorySlug",element:i.jsx(He,{children:i.jsx(J8,{})})}),i.jsx(Me,{path:"/services/suggest",element:i.jsx(He,{children:i.jsx(ON,{children:i.jsx(eN,{})})})}),i.jsx(Me,{path:"/offers",element:i.jsx(He,{children:i.jsx(iN,{})})}),i.jsx(Me,{path:"/map",element:i.jsx(He,{children:i.jsx(mN,{})})}),i.jsx(Me,{path:"/stores",element:i.jsx(He,{children:i.jsx(xN,{})})}),i.jsx(Me,{path:"/search",element:i.jsx(He,{children:i.jsx(aN,{})})}),i.jsx(Me,{path:"/carts",element:i.jsx(He,{children:i.jsx(Ll,{children:i.jsx(nN,{})})})}),i.jsx(Me,{path:"/carts/:cartId",element:i.jsx(He,{children:i.jsx(Ll,{children:i.jsx(rN,{})})})}),i.jsx(Me,{path:"/favorites",element:i.jsx(He,{children:i.jsx(Ll,{children:i.jsx(oN,{})})})}),i.jsx(Me,{path:"/contact",element:i.jsx(He,{children:i.jsx(sN,{})})}),i.jsx(Me,{path:"/stores/:storeId",element:i.jsx(He,{children:i.jsx(uN,{})})}),i.jsx(Me,{path:"/",element:i.jsx(He,{children:i.jsx(RN,{})})}),i.jsx(Me,{path:"*",element:i.jsx(b1,{})})]})));function DN(){return i.jsx(P5,{router:FN})}class UN extends Vi.Component{constructor(t){super(t),this.state={error:null}}static getDerivedStateFromError(t){return{error:t}}componentDidCatch(t,n){console.error("ErrorBoundary:",t,n==null?void 0:n.componentStack)}render(){return this.state.error?i.jsxs("div",{style:{minHeight:"100vh",padding:"24px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"#f8f8f6",color:"#1e1e2e",fontFamily:"system-ui, Tahoma, sans-serif",direction:"rtl",textAlign:"center",boxSizing:"border-box"},children:[i.jsx("h1",{style:{fontSize:"1.25rem",marginBottom:12},children:"تعذّر تحميل الشاشة"}),i.jsx("p",{style:{maxWidth:420,lineHeight:1.7,marginBottom:20,color:"#5a5a6e"},children:"حدث خطأ غير متوقع. جرّب تحديث الصفحة أو المحاولة لاحقاً."}),i.jsx("button",{type:"button",onClick:()=>window.location.reload(),style:{marginTop:20,padding:"12px 24px",borderRadius:12,border:"none",background:"#f5c000",color:"#1e1e2e",fontWeight:800,cursor:"pointer"},children:"تحديث الصفحة"})]}):this.props.children}}const WN="modulepreload",HN=function(e){return"/"+e},h0={},ZN=function(t,n,a){let o=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),h=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));o=Promise.allSettled(n.map(u=>{if(u=HN(u),u in h0)return;h0[u]=!0;const m=u.endsWith(".css"),g=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${g}`))return;const x=document.createElement("link");if(x.rel=m?"stylesheet":WN,m||(x.as="script"),x.crossOrigin="",x.href=u,h&&x.setAttribute("nonce",h),document.head.appendChild(x),m)return new Promise((v,b)=>{x.addEventListener("load",v),x.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${u}`)))})}))}function l(c){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=c,window.dispatchEvent(h),!h.defaultPrevented)throw c}return o.then(c=>{for(const h of c||[])h.status==="rejected"&&l(h.reason);return t().catch(l)})};function $N(e={}){const{immediate:t=!1,onNeedRefresh:n,onOfflineReady:a,onRegistered:o,onRegisteredSW:l,onRegisterError:c}=e;let h,u;const m=async(x=!0)=>{await u};async function g(){if("serviceWorker"in navigator){if(h=await ZN(async()=>{const{Workbox:x}=await import("./workbox-window.prod.es5-vqzQaGvo.js");return{Workbox:x}},[]).then(({Workbox:x})=>new x("/sw.js",{scope:"/",type:"classic"})).catch(x=>{c==null||c(x)}),!h)return;h.addEventListener("activated",x=>{(x.isUpdate||x.isExternal)&&window.location.reload()}),h.addEventListener("installed",x=>{x.isUpdate||a==null||a()}),h.register({immediate:t}).then(x=>{l?l("/sw.js",x):o==null||o(x)}).catch(x=>{c==null||c(x)})}}return u=g(),m}function qN(){try{return window.navigator&&window.navigator.standalone?!0:window.matchMedia&&window.matchMedia("(display-mode: standalone)").matches}catch{return!1}}function tf(){document.title=qN()?"رادار":"رادار-دليلك للمحلات القريبة"}$N({immediate:!0});tf();window.addEventListener("appinstalled",tf);try{window.matchMedia("(display-mode: standalone)").addEventListener("change",tf)}catch{}const p0=document.getElementById("root");p0?_u.createRoot(p0).render(i.jsx(Vi.StrictMode,{children:i.jsx(UN,{children:i.jsx(DN,{})})})):document.body.innerHTML='<p style="font-family:sans-serif;padding:24px;direction:rtl;">عنصر #root غير موجود في الصفحة.</p>';
