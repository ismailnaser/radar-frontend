function gv(e,t){for(var n=0;n<t.length;n++){const a=t[n];if(typeof a!="string"&&!Array.isArray(a)){for(const o in a)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(a,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>a[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();var xv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function gg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var xg={exports:{}},Ul={},yg={exports:{}},Ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oo=Symbol.for("react.element"),yv=Symbol.for("react.portal"),vv=Symbol.for("react.fragment"),bv=Symbol.for("react.strict_mode"),wv=Symbol.for("react.profiler"),_v=Symbol.for("react.provider"),jv=Symbol.for("react.context"),kv=Symbol.for("react.forward_ref"),Sv=Symbol.for("react.suspense"),Nv=Symbol.for("react.memo"),Cv=Symbol.for("react.lazy"),am=Symbol.iterator;function zv(e){return e===null||typeof e!="object"?null:(e=am&&e[am]||e["@@iterator"],typeof e=="function"?e:null)}var vg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bg=Object.assign,wg={};function ha(e,t,n){this.props=e,this.context=t,this.refs=wg,this.updater=n||vg}ha.prototype.isReactComponent={};ha.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ha.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function _g(){}_g.prototype=ha.prototype;function rh(e,t,n){this.props=e,this.context=t,this.refs=wg,this.updater=n||vg}var ih=rh.prototype=new _g;ih.constructor=rh;bg(ih,ha.prototype);ih.isPureReactComponent=!0;var om=Array.isArray,jg=Object.prototype.hasOwnProperty,ah={current:null},kg={key:!0,ref:!0,__self:!0,__source:!0};function Sg(e,t,n){var a,o={},l=null,d=null;if(t!=null)for(a in t.ref!==void 0&&(d=t.ref),t.key!==void 0&&(l=""+t.key),t)jg.call(t,a)&&!kg.hasOwnProperty(a)&&(o[a]=t[a]);var h=arguments.length-2;if(h===1)o.children=n;else if(1<h){for(var u=Array(h),f=0;f<h;f++)u[f]=arguments[f+2];o.children=u}if(e&&e.defaultProps)for(a in h=e.defaultProps,h)o[a]===void 0&&(o[a]=h[a]);return{$$typeof:Oo,type:e,key:l,ref:d,props:o,_owner:ah.current}}function Pv(e,t){return{$$typeof:Oo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function oh(e){return typeof e=="object"&&e!==null&&e.$$typeof===Oo}function Ev(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var sm=/\/+/g;function ed(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ev(""+e.key):t.toString(36)}function Gs(e,t,n,a,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var d=!1;if(e===null)d=!0;else switch(l){case"string":case"number":d=!0;break;case"object":switch(e.$$typeof){case Oo:case yv:d=!0}}if(d)return d=e,o=o(d),e=a===""?"."+ed(d,0):a,om(o)?(n="",e!=null&&(n=e.replace(sm,"$&/")+"/"),Gs(o,t,n,"",function(f){return f})):o!=null&&(oh(o)&&(o=Pv(o,n+(!o.key||d&&d.key===o.key?"":(""+o.key).replace(sm,"$&/")+"/")+e)),t.push(o)),1;if(d=0,a=a===""?".":a+":",om(e))for(var h=0;h<e.length;h++){l=e[h];var u=a+ed(l,h);d+=Gs(l,t,n,u,o)}else if(u=zv(e),typeof u=="function")for(e=u.call(e),h=0;!(l=e.next()).done;)l=l.value,u=a+ed(l,h++),d+=Gs(l,t,n,u,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return d}function Cs(e,t,n){if(e==null)return e;var a=[],o=0;return Gs(e,a,"","",function(l){return t.call(n,l,o++)}),a}function Lv(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Lt={current:null},Ks={transition:null},Mv={ReactCurrentDispatcher:Lt,ReactCurrentBatchConfig:Ks,ReactCurrentOwner:ah};function Ng(){throw Error("act(...) is not supported in production builds of React.")}Ee.Children={map:Cs,forEach:function(e,t,n){Cs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Cs(e,function(){t++}),t},toArray:function(e){return Cs(e,function(t){return t})||[]},only:function(e){if(!oh(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Ee.Component=ha;Ee.Fragment=vv;Ee.Profiler=wv;Ee.PureComponent=rh;Ee.StrictMode=bv;Ee.Suspense=Sv;Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mv;Ee.act=Ng;Ee.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=bg({},e.props),o=e.key,l=e.ref,d=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,d=ah.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var h=e.type.defaultProps;for(u in t)jg.call(t,u)&&!kg.hasOwnProperty(u)&&(a[u]=t[u]===void 0&&h!==void 0?h[u]:t[u])}var u=arguments.length-2;if(u===1)a.children=n;else if(1<u){h=Array(u);for(var f=0;f<u;f++)h[f]=arguments[f+2];a.children=h}return{$$typeof:Oo,type:e.type,key:o,ref:l,props:a,_owner:d}};Ee.createContext=function(e){return e={$$typeof:jv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:_v,_context:e},e.Consumer=e};Ee.createElement=Sg;Ee.createFactory=function(e){var t=Sg.bind(null,e);return t.type=e,t};Ee.createRef=function(){return{current:null}};Ee.forwardRef=function(e){return{$$typeof:kv,render:e}};Ee.isValidElement=oh;Ee.lazy=function(e){return{$$typeof:Cv,_payload:{_status:-1,_result:e},_init:Lv}};Ee.memo=function(e,t){return{$$typeof:Nv,type:e,compare:t===void 0?null:t}};Ee.startTransition=function(e){var t=Ks.transition;Ks.transition={};try{e()}finally{Ks.transition=t}};Ee.unstable_act=Ng;Ee.useCallback=function(e,t){return Lt.current.useCallback(e,t)};Ee.useContext=function(e){return Lt.current.useContext(e)};Ee.useDebugValue=function(){};Ee.useDeferredValue=function(e){return Lt.current.useDeferredValue(e)};Ee.useEffect=function(e,t){return Lt.current.useEffect(e,t)};Ee.useId=function(){return Lt.current.useId()};Ee.useImperativeHandle=function(e,t,n){return Lt.current.useImperativeHandle(e,t,n)};Ee.useInsertionEffect=function(e,t){return Lt.current.useInsertionEffect(e,t)};Ee.useLayoutEffect=function(e,t){return Lt.current.useLayoutEffect(e,t)};Ee.useMemo=function(e,t){return Lt.current.useMemo(e,t)};Ee.useReducer=function(e,t,n){return Lt.current.useReducer(e,t,n)};Ee.useRef=function(e){return Lt.current.useRef(e)};Ee.useState=function(e){return Lt.current.useState(e)};Ee.useSyncExternalStore=function(e,t,n){return Lt.current.useSyncExternalStore(e,t,n)};Ee.useTransition=function(){return Lt.current.useTransition()};Ee.version="18.3.1";yg.exports=Ee;var m=yg.exports;const Xr=gg(m),Tv=gv({__proto__:null,default:Xr},[m]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Av=m,Iv=Symbol.for("react.element"),Rv=Symbol.for("react.fragment"),Ov=Object.prototype.hasOwnProperty,Bv=Av.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Fv={key:!0,ref:!0,__self:!0,__source:!0};function Cg(e,t,n){var a,o={},l=null,d=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(d=t.ref);for(a in t)Ov.call(t,a)&&!Fv.hasOwnProperty(a)&&(o[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps,t)o[a]===void 0&&(o[a]=t[a]);return{$$typeof:Iv,type:e,key:l,ref:d,props:o,_owner:Bv.current}}Ul.Fragment=Rv;Ul.jsx=Cg;Ul.jsxs=Cg;xg.exports=Ul;var i=xg.exports,Hd={},zg={exports:{}},Gt={},Pg={exports:{}},Eg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(M,Y){var Z=M.length;M.push(Y);e:for(;0<Z;){var ne=Z-1>>>1,J=M[ne];if(0<o(J,Y))M[ne]=Y,M[Z]=J,Z=ne;else break e}}function n(M){return M.length===0?null:M[0]}function a(M){if(M.length===0)return null;var Y=M[0],Z=M.pop();if(Z!==Y){M[0]=Z;e:for(var ne=0,J=M.length,te=J>>>1;ne<te;){var O=2*(ne+1)-1,H=M[O],V=O+1,le=M[V];if(0>o(H,Z))V<J&&0>o(le,H)?(M[ne]=le,M[V]=Z,ne=V):(M[ne]=H,M[O]=Z,ne=O);else if(V<J&&0>o(le,Z))M[ne]=le,M[V]=Z,ne=V;else break e}}return Y}function o(M,Y){var Z=M.sortIndex-Y.sortIndex;return Z!==0?Z:M.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var d=Date,h=d.now();e.unstable_now=function(){return d.now()-h}}var u=[],f=[],x=1,y=null,v=3,_=!1,w=!1,N=!1,C=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(M){for(var Y=n(f);Y!==null;){if(Y.callback===null)a(f);else if(Y.startTime<=M)a(f),Y.sortIndex=Y.expirationTime,t(u,Y);else break;Y=n(f)}}function S(M){if(N=!1,k(M),!w)if(n(u)!==null)w=!0,X(E);else{var Y=n(f);Y!==null&&G(S,Y.startTime-M)}}function E(M,Y){w=!1,N&&(N=!1,z(D),D=-1),_=!0;var Z=v;try{for(k(Y),y=n(u);y!==null&&(!(y.expirationTime>Y)||M&&!U());){var ne=y.callback;if(typeof ne=="function"){y.callback=null,v=y.priorityLevel;var J=ne(y.expirationTime<=Y);Y=e.unstable_now(),typeof J=="function"?y.callback=J:y===n(u)&&a(u),k(Y)}else a(u);y=n(u)}if(y!==null)var te=!0;else{var O=n(f);O!==null&&G(S,O.startTime-Y),te=!1}return te}finally{y=null,v=Z,_=!1}}var P=!1,I=null,D=-1,T=5,R=-1;function U(){return!(e.unstable_now()-R<T)}function F(){if(I!==null){var M=e.unstable_now();R=M;var Y=!0;try{Y=I(!0,M)}finally{Y?oe():(P=!1,I=null)}}else P=!1}var oe;if(typeof b=="function")oe=function(){b(F)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,re=ae.port2;ae.port1.onmessage=F,oe=function(){re.postMessage(null)}}else oe=function(){C(F,0)};function X(M){I=M,P||(P=!0,oe())}function G(M,Y){D=C(function(){M(e.unstable_now())},Y)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){w||_||(w=!0,X(E))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(M){switch(v){case 1:case 2:case 3:var Y=3;break;default:Y=v}var Z=v;v=Y;try{return M()}finally{v=Z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,Y){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var Z=v;v=M;try{return Y()}finally{v=Z}},e.unstable_scheduleCallback=function(M,Y,Z){var ne=e.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ne+Z:ne):Z=ne,M){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=Z+J,M={id:x++,callback:Y,priorityLevel:M,startTime:Z,expirationTime:J,sortIndex:-1},Z>ne?(M.sortIndex=Z,t(f,M),n(u)===null&&M===n(f)&&(N?(z(D),D=-1):N=!0,G(S,Z-ne))):(M.sortIndex=J,t(u,M),w||_||(w=!0,X(E))),M},e.unstable_shouldYield=U,e.unstable_wrapCallback=function(M){var Y=v;return function(){var Z=v;v=Y;try{return M.apply(this,arguments)}finally{v=Z}}}})(Eg);Pg.exports=Eg;var Dv=Pg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wv=m,Vt=Dv;function se(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Lg=new Set,po={};function di(e,t){ea(e,t),ea(e+"Capture",t)}function ea(e,t){for(po[e]=t,e=0;e<t.length;e++)Lg.add(t[e])}var Qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zd=Object.prototype.hasOwnProperty,Uv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lm={},cm={};function Hv(e){return Zd.call(cm,e)?!0:Zd.call(lm,e)?!1:Uv.test(e)?cm[e]=!0:(lm[e]=!0,!1)}function Zv(e,t,n,a){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $v(e,t,n,a){if(t===null||typeof t>"u"||Zv(e,t,n,a))return!0;if(a)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Mt(e,t,n,a,o,l,d){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=d}var xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){xt[e]=new Mt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];xt[t]=new Mt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){xt[e]=new Mt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){xt[e]=new Mt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){xt[e]=new Mt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){xt[e]=new Mt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){xt[e]=new Mt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){xt[e]=new Mt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){xt[e]=new Mt(e,5,!1,e.toLowerCase(),null,!1,!1)});var sh=/[\-:]([a-z])/g;function lh(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(sh,lh);xt[t]=new Mt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(sh,lh);xt[t]=new Mt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(sh,lh);xt[t]=new Mt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){xt[e]=new Mt(e,1,!1,e.toLowerCase(),null,!1,!1)});xt.xlinkHref=new Mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){xt[e]=new Mt(e,1,!1,e.toLowerCase(),null,!0,!0)});function ch(e,t,n,a){var o=xt.hasOwnProperty(t)?xt[t]:null;(o!==null?o.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&($v(t,n,o,a)&&(n=null),a||o===null?Hv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,a=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,a?e.setAttributeNS(a,t,n):e.setAttribute(t,n))))}var tr=Wv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,zs=Symbol.for("react.element"),Ti=Symbol.for("react.portal"),Ai=Symbol.for("react.fragment"),dh=Symbol.for("react.strict_mode"),$d=Symbol.for("react.profiler"),Mg=Symbol.for("react.provider"),Tg=Symbol.for("react.context"),uh=Symbol.for("react.forward_ref"),qd=Symbol.for("react.suspense"),Vd=Symbol.for("react.suspense_list"),hh=Symbol.for("react.memo"),sr=Symbol.for("react.lazy"),Ag=Symbol.for("react.offscreen"),dm=Symbol.iterator;function Ra(e){return e===null||typeof e!="object"?null:(e=dm&&e[dm]||e["@@iterator"],typeof e=="function"?e:null)}var Je=Object.assign,td;function Qa(e){if(td===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);td=t&&t[1]||""}return`
`+td+e}var nd=!1;function rd(e,t){if(!e||nd)return"";nd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var a=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){a=f}e.call(t.prototype)}else{try{throw Error()}catch(f){a=f}e()}}catch(f){if(f&&a&&typeof f.stack=="string"){for(var o=f.stack.split(`
`),l=a.stack.split(`
`),d=o.length-1,h=l.length-1;1<=d&&0<=h&&o[d]!==l[h];)h--;for(;1<=d&&0<=h;d--,h--)if(o[d]!==l[h]){if(d!==1||h!==1)do if(d--,h--,0>h||o[d]!==l[h]){var u=`
`+o[d].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=d&&0<=h);break}}}finally{nd=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Qa(e):""}function qv(e){switch(e.tag){case 5:return Qa(e.type);case 16:return Qa("Lazy");case 13:return Qa("Suspense");case 19:return Qa("SuspenseList");case 0:case 2:case 15:return e=rd(e.type,!1),e;case 11:return e=rd(e.type.render,!1),e;case 1:return e=rd(e.type,!0),e;default:return""}}function Gd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ai:return"Fragment";case Ti:return"Portal";case $d:return"Profiler";case dh:return"StrictMode";case qd:return"Suspense";case Vd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Tg:return(e.displayName||"Context")+".Consumer";case Mg:return(e._context.displayName||"Context")+".Provider";case uh:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case hh:return t=e.displayName||null,t!==null?t:Gd(e.type)||"Memo";case sr:t=e._payload,e=e._init;try{return Gd(e(t))}catch{}}return null}function Vv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gd(t);case 8:return t===dh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function kr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ig(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Gv(e){var t=Ig(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(d){a=""+d,l.call(this,d)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(d){a=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ps(e){e._valueTracker||(e._valueTracker=Gv(e))}function Rg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Ig(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function cl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Kd(e,t){var n=t.checked;return Je({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function um(e,t){var n=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;n=kr(t.value!=null?t.value:n),e._wrapperState={initialChecked:a,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Og(e,t){t=t.checked,t!=null&&ch(e,"checked",t,!1)}function Qd(e,t){Og(e,t);var n=kr(t.value),a=t.type;if(n!=null)a==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Yd(e,t.type,n):t.hasOwnProperty("defaultValue")&&Yd(e,t.type,kr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function hm(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Yd(e,t,n){(t!=="number"||cl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ya=Array.isArray;function qi(e,t,n,a){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&a&&(e[n].defaultSelected=!0)}else{for(n=""+kr(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,a&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Jd(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(se(91));return Je({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function pm(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(se(92));if(Ya(n)){if(1<n.length)throw Error(se(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:kr(n)}}function Bg(e,t){var n=kr(t.value),a=kr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),a!=null&&(e.defaultValue=""+a)}function mm(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Fg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xd(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Fg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Es,Dg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,a,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,a,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Es=Es||document.createElement("div"),Es.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Es.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function mo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var to={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Kv=["Webkit","ms","Moz","O"];Object.keys(to).forEach(function(e){Kv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),to[t]=to[e]})});function Wg(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||to.hasOwnProperty(e)&&to[e]?(""+t).trim():t+"px"}function Ug(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var a=n.indexOf("--")===0,o=Wg(n,t[n],a);n==="float"&&(n="cssFloat"),a?e.setProperty(n,o):e[n]=o}}var Qv=Je({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function eu(e,t){if(t){if(Qv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(se(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(se(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(se(61))}if(t.style!=null&&typeof t.style!="object")throw Error(se(62))}}function tu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nu=null;function ph(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ru=null,Vi=null,Gi=null;function fm(e){if(e=Do(e)){if(typeof ru!="function")throw Error(se(280));var t=e.stateNode;t&&(t=Vl(t),ru(e.stateNode,e.type,t))}}function Hg(e){Vi?Gi?Gi.push(e):Gi=[e]:Vi=e}function Zg(){if(Vi){var e=Vi,t=Gi;if(Gi=Vi=null,fm(e),t)for(e=0;e<t.length;e++)fm(t[e])}}function $g(e,t){return e(t)}function qg(){}var id=!1;function Vg(e,t,n){if(id)return e(t,n);id=!0;try{return $g(e,t,n)}finally{id=!1,(Vi!==null||Gi!==null)&&(qg(),Zg())}}function fo(e,t){var n=e.stateNode;if(n===null)return null;var a=Vl(n);if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(se(231,t,typeof n));return n}var iu=!1;if(Qn)try{var Oa={};Object.defineProperty(Oa,"passive",{get:function(){iu=!0}}),window.addEventListener("test",Oa,Oa),window.removeEventListener("test",Oa,Oa)}catch{iu=!1}function Yv(e,t,n,a,o,l,d,h,u){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(x){this.onError(x)}}var no=!1,dl=null,ul=!1,au=null,Jv={onError:function(e){no=!0,dl=e}};function Xv(e,t,n,a,o,l,d,h,u){no=!1,dl=null,Yv.apply(Jv,arguments)}function e2(e,t,n,a,o,l,d,h,u){if(Xv.apply(this,arguments),no){if(no){var f=dl;no=!1,dl=null}else throw Error(se(198));ul||(ul=!0,au=f)}}function ui(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Gg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function gm(e){if(ui(e)!==e)throw Error(se(188))}function t2(e){var t=e.alternate;if(!t){if(t=ui(e),t===null)throw Error(se(188));return t!==e?null:e}for(var n=e,a=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(a=o.return,a!==null){n=a;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return gm(o),e;if(l===a)return gm(o),t;l=l.sibling}throw Error(se(188))}if(n.return!==a.return)n=o,a=l;else{for(var d=!1,h=o.child;h;){if(h===n){d=!0,n=o,a=l;break}if(h===a){d=!0,a=o,n=l;break}h=h.sibling}if(!d){for(h=l.child;h;){if(h===n){d=!0,n=l,a=o;break}if(h===a){d=!0,a=l,n=o;break}h=h.sibling}if(!d)throw Error(se(189))}}if(n.alternate!==a)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?e:t}function Kg(e){return e=t2(e),e!==null?Qg(e):null}function Qg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Qg(e);if(t!==null)return t;e=e.sibling}return null}var Yg=Vt.unstable_scheduleCallback,xm=Vt.unstable_cancelCallback,n2=Vt.unstable_shouldYield,r2=Vt.unstable_requestPaint,tt=Vt.unstable_now,i2=Vt.unstable_getCurrentPriorityLevel,mh=Vt.unstable_ImmediatePriority,Jg=Vt.unstable_UserBlockingPriority,hl=Vt.unstable_NormalPriority,a2=Vt.unstable_LowPriority,Xg=Vt.unstable_IdlePriority,Hl=null,En=null;function o2(e){if(En&&typeof En.onCommitFiberRoot=="function")try{En.onCommitFiberRoot(Hl,e,void 0,(e.current.flags&128)===128)}catch{}}var yn=Math.clz32?Math.clz32:c2,s2=Math.log,l2=Math.LN2;function c2(e){return e>>>=0,e===0?32:31-(s2(e)/l2|0)|0}var Ls=64,Ms=4194304;function Ja(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pl(e,t){var n=e.pendingLanes;if(n===0)return 0;var a=0,o=e.suspendedLanes,l=e.pingedLanes,d=n&268435455;if(d!==0){var h=d&~o;h!==0?a=Ja(h):(l&=d,l!==0&&(a=Ja(l)))}else d=n&~o,d!==0?a=Ja(d):l!==0&&(a=Ja(l));if(a===0)return 0;if(t!==0&&t!==a&&!(t&o)&&(o=a&-a,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(a&4&&(a|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)n=31-yn(t),o=1<<n,a|=e[n],t&=~o;return a}function d2(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function u2(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var d=31-yn(l),h=1<<d,u=o[d];u===-1?(!(h&n)||h&a)&&(o[d]=d2(h,t)):u<=t&&(e.expiredLanes|=h),l&=~h}}function ou(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function e0(){var e=Ls;return Ls<<=1,!(Ls&4194240)&&(Ls=64),e}function ad(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Bo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-yn(t),e[t]=n}function h2(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-yn(n),l=1<<o;t[o]=0,a[o]=-1,e[o]=-1,n&=~l}}function fh(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-yn(n),o=1<<a;o&t|e[a]&t&&(e[a]|=t),n&=~o}}var We=0;function t0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var n0,gh,r0,i0,a0,su=!1,Ts=[],mr=null,fr=null,gr=null,go=new Map,xo=new Map,cr=[],p2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ym(e,t){switch(e){case"focusin":case"focusout":mr=null;break;case"dragenter":case"dragleave":fr=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":go.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":xo.delete(t.pointerId)}}function Ba(e,t,n,a,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:l,targetContainers:[o]},t!==null&&(t=Do(t),t!==null&&gh(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function m2(e,t,n,a,o){switch(t){case"focusin":return mr=Ba(mr,e,t,n,a,o),!0;case"dragenter":return fr=Ba(fr,e,t,n,a,o),!0;case"mouseover":return gr=Ba(gr,e,t,n,a,o),!0;case"pointerover":var l=o.pointerId;return go.set(l,Ba(go.get(l)||null,e,t,n,a,o)),!0;case"gotpointercapture":return l=o.pointerId,xo.set(l,Ba(xo.get(l)||null,e,t,n,a,o)),!0}return!1}function o0(e){var t=$r(e.target);if(t!==null){var n=ui(t);if(n!==null){if(t=n.tag,t===13){if(t=Gg(n),t!==null){e.blockedOn=t,a0(e.priority,function(){r0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=lu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);nu=a,n.target.dispatchEvent(a),nu=null}else return t=Do(n),t!==null&&gh(t),e.blockedOn=n,!1;t.shift()}return!0}function vm(e,t,n){Qs(e)&&n.delete(t)}function f2(){su=!1,mr!==null&&Qs(mr)&&(mr=null),fr!==null&&Qs(fr)&&(fr=null),gr!==null&&Qs(gr)&&(gr=null),go.forEach(vm),xo.forEach(vm)}function Fa(e,t){e.blockedOn===t&&(e.blockedOn=null,su||(su=!0,Vt.unstable_scheduleCallback(Vt.unstable_NormalPriority,f2)))}function yo(e){function t(o){return Fa(o,e)}if(0<Ts.length){Fa(Ts[0],e);for(var n=1;n<Ts.length;n++){var a=Ts[n];a.blockedOn===e&&(a.blockedOn=null)}}for(mr!==null&&Fa(mr,e),fr!==null&&Fa(fr,e),gr!==null&&Fa(gr,e),go.forEach(t),xo.forEach(t),n=0;n<cr.length;n++)a=cr[n],a.blockedOn===e&&(a.blockedOn=null);for(;0<cr.length&&(n=cr[0],n.blockedOn===null);)o0(n),n.blockedOn===null&&cr.shift()}var Ki=tr.ReactCurrentBatchConfig,ml=!0;function g2(e,t,n,a){var o=We,l=Ki.transition;Ki.transition=null;try{We=1,xh(e,t,n,a)}finally{We=o,Ki.transition=l}}function x2(e,t,n,a){var o=We,l=Ki.transition;Ki.transition=null;try{We=4,xh(e,t,n,a)}finally{We=o,Ki.transition=l}}function xh(e,t,n,a){if(ml){var o=lu(e,t,n,a);if(o===null)fd(e,t,a,fl,n),ym(e,a);else if(m2(o,e,t,n,a))a.stopPropagation();else if(ym(e,a),t&4&&-1<p2.indexOf(e)){for(;o!==null;){var l=Do(o);if(l!==null&&n0(l),l=lu(e,t,n,a),l===null&&fd(e,t,a,fl,n),l===o)break;o=l}o!==null&&a.stopPropagation()}else fd(e,t,a,null,n)}}var fl=null;function lu(e,t,n,a){if(fl=null,e=ph(a),e=$r(e),e!==null)if(t=ui(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Gg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return fl=e,null}function s0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(i2()){case mh:return 1;case Jg:return 4;case hl:case a2:return 16;case Xg:return 536870912;default:return 16}default:return 16}}var ur=null,yh=null,Ys=null;function l0(){if(Ys)return Ys;var e,t=yh,n=t.length,a,o="value"in ur?ur.value:ur.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var d=n-e;for(a=1;a<=d&&t[n-a]===o[l-a];a++);return Ys=o.slice(e,1<a?1-a:void 0)}function Js(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function As(){return!0}function bm(){return!1}function Kt(e){function t(n,a,o,l,d){this._reactName=n,this._targetInst=o,this.type=a,this.nativeEvent=l,this.target=d,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(n=e[h],this[h]=n?n(l):l[h]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?As:bm,this.isPropagationStopped=bm,this}return Je(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=As)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=As)},persist:function(){},isPersistent:As}),t}var pa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vh=Kt(pa),Fo=Je({},pa,{view:0,detail:0}),y2=Kt(Fo),od,sd,Da,Zl=Je({},Fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Da&&(Da&&e.type==="mousemove"?(od=e.screenX-Da.screenX,sd=e.screenY-Da.screenY):sd=od=0,Da=e),od)},movementY:function(e){return"movementY"in e?e.movementY:sd}}),wm=Kt(Zl),v2=Je({},Zl,{dataTransfer:0}),b2=Kt(v2),w2=Je({},Fo,{relatedTarget:0}),ld=Kt(w2),_2=Je({},pa,{animationName:0,elapsedTime:0,pseudoElement:0}),j2=Kt(_2),k2=Je({},pa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),S2=Kt(k2),N2=Je({},pa,{data:0}),_m=Kt(N2),C2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},z2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},P2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function E2(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=P2[e])?!!t[e]:!1}function bh(){return E2}var L2=Je({},Fo,{key:function(e){if(e.key){var t=C2[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Js(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?z2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bh,charCode:function(e){return e.type==="keypress"?Js(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Js(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),M2=Kt(L2),T2=Je({},Zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jm=Kt(T2),A2=Je({},Fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bh}),I2=Kt(A2),R2=Je({},pa,{propertyName:0,elapsedTime:0,pseudoElement:0}),O2=Kt(R2),B2=Je({},Zl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),F2=Kt(B2),D2=[9,13,27,32],wh=Qn&&"CompositionEvent"in window,ro=null;Qn&&"documentMode"in document&&(ro=document.documentMode);var W2=Qn&&"TextEvent"in window&&!ro,c0=Qn&&(!wh||ro&&8<ro&&11>=ro),km=" ",Sm=!1;function d0(e,t){switch(e){case"keyup":return D2.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function u0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ii=!1;function U2(e,t){switch(e){case"compositionend":return u0(t);case"keypress":return t.which!==32?null:(Sm=!0,km);case"textInput":return e=t.data,e===km&&Sm?null:e;default:return null}}function H2(e,t){if(Ii)return e==="compositionend"||!wh&&d0(e,t)?(e=l0(),Ys=yh=ur=null,Ii=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return c0&&t.locale!=="ko"?null:t.data;default:return null}}var Z2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Z2[e.type]:t==="textarea"}function h0(e,t,n,a){Hg(a),t=gl(t,"onChange"),0<t.length&&(n=new vh("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var io=null,vo=null;function $2(e){j0(e,0)}function $l(e){var t=Bi(e);if(Rg(t))return e}function q2(e,t){if(e==="change")return t}var p0=!1;if(Qn){var cd;if(Qn){var dd="oninput"in document;if(!dd){var Cm=document.createElement("div");Cm.setAttribute("oninput","return;"),dd=typeof Cm.oninput=="function"}cd=dd}else cd=!1;p0=cd&&(!document.documentMode||9<document.documentMode)}function zm(){io&&(io.detachEvent("onpropertychange",m0),vo=io=null)}function m0(e){if(e.propertyName==="value"&&$l(vo)){var t=[];h0(t,vo,e,ph(e)),Vg($2,t)}}function V2(e,t,n){e==="focusin"?(zm(),io=t,vo=n,io.attachEvent("onpropertychange",m0)):e==="focusout"&&zm()}function G2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $l(vo)}function K2(e,t){if(e==="click")return $l(t)}function Q2(e,t){if(e==="input"||e==="change")return $l(t)}function Y2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var wn=typeof Object.is=="function"?Object.is:Y2;function bo(e,t){if(wn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var o=n[a];if(!Zd.call(t,o)||!wn(e[o],t[o]))return!1}return!0}function Pm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Em(e,t){var n=Pm(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Pm(n)}}function f0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?f0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function g0(){for(var e=window,t=cl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=cl(e.document)}return t}function _h(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function J2(e){var t=g0(),n=e.focusedElem,a=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&f0(n.ownerDocument.documentElement,n)){if(a!==null&&_h(n)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(a.start,o);a=a.end===void 0?l:Math.min(a.end,o),!e.extend&&l>a&&(o=a,a=l,l=o),o=Em(n,l);var d=Em(n,a);o&&d&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>a?(e.addRange(t),e.extend(d.node,d.offset)):(t.setEnd(d.node,d.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var X2=Qn&&"documentMode"in document&&11>=document.documentMode,Ri=null,cu=null,ao=null,du=!1;function Lm(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;du||Ri==null||Ri!==cl(a)||(a=Ri,"selectionStart"in a&&_h(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),ao&&bo(ao,a)||(ao=a,a=gl(cu,"onSelect"),0<a.length&&(t=new vh("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Ri)))}function Is(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Oi={animationend:Is("Animation","AnimationEnd"),animationiteration:Is("Animation","AnimationIteration"),animationstart:Is("Animation","AnimationStart"),transitionend:Is("Transition","TransitionEnd")},ud={},x0={};Qn&&(x0=document.createElement("div").style,"AnimationEvent"in window||(delete Oi.animationend.animation,delete Oi.animationiteration.animation,delete Oi.animationstart.animation),"TransitionEvent"in window||delete Oi.transitionend.transition);function ql(e){if(ud[e])return ud[e];if(!Oi[e])return e;var t=Oi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in x0)return ud[e]=t[n];return e}var y0=ql("animationend"),v0=ql("animationiteration"),b0=ql("animationstart"),w0=ql("transitionend"),_0=new Map,Mm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cr(e,t){_0.set(e,t),di(t,[e])}for(var hd=0;hd<Mm.length;hd++){var pd=Mm[hd],eb=pd.toLowerCase(),tb=pd[0].toUpperCase()+pd.slice(1);Cr(eb,"on"+tb)}Cr(y0,"onAnimationEnd");Cr(v0,"onAnimationIteration");Cr(b0,"onAnimationStart");Cr("dblclick","onDoubleClick");Cr("focusin","onFocus");Cr("focusout","onBlur");Cr(w0,"onTransitionEnd");ea("onMouseEnter",["mouseout","mouseover"]);ea("onMouseLeave",["mouseout","mouseover"]);ea("onPointerEnter",["pointerout","pointerover"]);ea("onPointerLeave",["pointerout","pointerover"]);di("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));di("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));di("onBeforeInput",["compositionend","keypress","textInput","paste"]);di("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));di("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));di("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nb=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xa));function Tm(e,t,n){var a=e.type||"unknown-event";e.currentTarget=n,e2(a,t,void 0,e),e.currentTarget=null}function j0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],o=a.event;a=a.listeners;e:{var l=void 0;if(t)for(var d=a.length-1;0<=d;d--){var h=a[d],u=h.instance,f=h.currentTarget;if(h=h.listener,u!==l&&o.isPropagationStopped())break e;Tm(o,h,f),l=u}else for(d=0;d<a.length;d++){if(h=a[d],u=h.instance,f=h.currentTarget,h=h.listener,u!==l&&o.isPropagationStopped())break e;Tm(o,h,f),l=u}}}if(ul)throw e=au,ul=!1,au=null,e}function $e(e,t){var n=t[fu];n===void 0&&(n=t[fu]=new Set);var a=e+"__bubble";n.has(a)||(k0(t,e,2,!1),n.add(a))}function md(e,t,n){var a=0;t&&(a|=4),k0(n,e,a,t)}var Rs="_reactListening"+Math.random().toString(36).slice(2);function wo(e){if(!e[Rs]){e[Rs]=!0,Lg.forEach(function(n){n!=="selectionchange"&&(nb.has(n)||md(n,!1,e),md(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Rs]||(t[Rs]=!0,md("selectionchange",!1,t))}}function k0(e,t,n,a){switch(s0(t)){case 1:var o=g2;break;case 4:o=x2;break;default:o=xh}n=o.bind(null,t,n,e),o=void 0,!iu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),a?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function fd(e,t,n,a,o){var l=a;if(!(t&1)&&!(t&2)&&a!==null)e:for(;;){if(a===null)return;var d=a.tag;if(d===3||d===4){var h=a.stateNode.containerInfo;if(h===o||h.nodeType===8&&h.parentNode===o)break;if(d===4)for(d=a.return;d!==null;){var u=d.tag;if((u===3||u===4)&&(u=d.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;d=d.return}for(;h!==null;){if(d=$r(h),d===null)return;if(u=d.tag,u===5||u===6){a=l=d;continue e}h=h.parentNode}}a=a.return}Vg(function(){var f=l,x=ph(n),y=[];e:{var v=_0.get(e);if(v!==void 0){var _=vh,w=e;switch(e){case"keypress":if(Js(n)===0)break e;case"keydown":case"keyup":_=M2;break;case"focusin":w="focus",_=ld;break;case"focusout":w="blur",_=ld;break;case"beforeblur":case"afterblur":_=ld;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=wm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=b2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=I2;break;case y0:case v0:case b0:_=j2;break;case w0:_=O2;break;case"scroll":_=y2;break;case"wheel":_=F2;break;case"copy":case"cut":case"paste":_=S2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=jm}var N=(t&4)!==0,C=!N&&e==="scroll",z=N?v!==null?v+"Capture":null:v;N=[];for(var b=f,k;b!==null;){k=b;var S=k.stateNode;if(k.tag===5&&S!==null&&(k=S,z!==null&&(S=fo(b,z),S!=null&&N.push(_o(b,S,k)))),C)break;b=b.return}0<N.length&&(v=new _(v,w,null,n,x),y.push({event:v,listeners:N}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",_=e==="mouseout"||e==="pointerout",v&&n!==nu&&(w=n.relatedTarget||n.fromElement)&&($r(w)||w[Yn]))break e;if((_||v)&&(v=x.window===x?x:(v=x.ownerDocument)?v.defaultView||v.parentWindow:window,_?(w=n.relatedTarget||n.toElement,_=f,w=w?$r(w):null,w!==null&&(C=ui(w),w!==C||w.tag!==5&&w.tag!==6)&&(w=null)):(_=null,w=f),_!==w)){if(N=wm,S="onMouseLeave",z="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(N=jm,S="onPointerLeave",z="onPointerEnter",b="pointer"),C=_==null?v:Bi(_),k=w==null?v:Bi(w),v=new N(S,b+"leave",_,n,x),v.target=C,v.relatedTarget=k,S=null,$r(x)===f&&(N=new N(z,b+"enter",w,n,x),N.target=k,N.relatedTarget=C,S=N),C=S,_&&w)t:{for(N=_,z=w,b=0,k=N;k;k=Ei(k))b++;for(k=0,S=z;S;S=Ei(S))k++;for(;0<b-k;)N=Ei(N),b--;for(;0<k-b;)z=Ei(z),k--;for(;b--;){if(N===z||z!==null&&N===z.alternate)break t;N=Ei(N),z=Ei(z)}N=null}else N=null;_!==null&&Am(y,v,_,N,!1),w!==null&&C!==null&&Am(y,C,w,N,!0)}}e:{if(v=f?Bi(f):window,_=v.nodeName&&v.nodeName.toLowerCase(),_==="select"||_==="input"&&v.type==="file")var E=q2;else if(Nm(v))if(p0)E=Q2;else{E=G2;var P=V2}else(_=v.nodeName)&&_.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(E=K2);if(E&&(E=E(e,f))){h0(y,E,n,x);break e}P&&P(e,v,f),e==="focusout"&&(P=v._wrapperState)&&P.controlled&&v.type==="number"&&Yd(v,"number",v.value)}switch(P=f?Bi(f):window,e){case"focusin":(Nm(P)||P.contentEditable==="true")&&(Ri=P,cu=f,ao=null);break;case"focusout":ao=cu=Ri=null;break;case"mousedown":du=!0;break;case"contextmenu":case"mouseup":case"dragend":du=!1,Lm(y,n,x);break;case"selectionchange":if(X2)break;case"keydown":case"keyup":Lm(y,n,x)}var I;if(wh)e:{switch(e){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else Ii?d0(e,n)&&(D="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(c0&&n.locale!=="ko"&&(Ii||D!=="onCompositionStart"?D==="onCompositionEnd"&&Ii&&(I=l0()):(ur=x,yh="value"in ur?ur.value:ur.textContent,Ii=!0)),P=gl(f,D),0<P.length&&(D=new _m(D,e,null,n,x),y.push({event:D,listeners:P}),I?D.data=I:(I=u0(n),I!==null&&(D.data=I)))),(I=W2?U2(e,n):H2(e,n))&&(f=gl(f,"onBeforeInput"),0<f.length&&(x=new _m("onBeforeInput","beforeinput",null,n,x),y.push({event:x,listeners:f}),x.data=I))}j0(y,t)})}function _o(e,t,n){return{instance:e,listener:t,currentTarget:n}}function gl(e,t){for(var n=t+"Capture",a=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=fo(e,n),l!=null&&a.unshift(_o(e,l,o)),l=fo(e,t),l!=null&&a.push(_o(e,l,o))),e=e.return}return a}function Ei(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Am(e,t,n,a,o){for(var l=t._reactName,d=[];n!==null&&n!==a;){var h=n,u=h.alternate,f=h.stateNode;if(u!==null&&u===a)break;h.tag===5&&f!==null&&(h=f,o?(u=fo(n,l),u!=null&&d.unshift(_o(n,u,h))):o||(u=fo(n,l),u!=null&&d.push(_o(n,u,h)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var rb=/\r\n?/g,ib=/\u0000|\uFFFD/g;function Im(e){return(typeof e=="string"?e:""+e).replace(rb,`
`).replace(ib,"")}function Os(e,t,n){if(t=Im(t),Im(e)!==t&&n)throw Error(se(425))}function xl(){}var uu=null,hu=null;function pu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mu=typeof setTimeout=="function"?setTimeout:void 0,ab=typeof clearTimeout=="function"?clearTimeout:void 0,Rm=typeof Promise=="function"?Promise:void 0,ob=typeof queueMicrotask=="function"?queueMicrotask:typeof Rm<"u"?function(e){return Rm.resolve(null).then(e).catch(sb)}:mu;function sb(e){setTimeout(function(){throw e})}function gd(e,t){var n=t,a=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(a===0){e.removeChild(o),yo(t);return}a--}else n!=="$"&&n!=="$?"&&n!=="$!"||a++;n=o}while(n);yo(t)}function xr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Om(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ma=Math.random().toString(36).slice(2),Pn="__reactFiber$"+ma,jo="__reactProps$"+ma,Yn="__reactContainer$"+ma,fu="__reactEvents$"+ma,lb="__reactListeners$"+ma,cb="__reactHandles$"+ma;function $r(e){var t=e[Pn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Yn]||n[Pn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Om(e);e!==null;){if(n=e[Pn])return n;e=Om(e)}return t}e=n,n=e.parentNode}return null}function Do(e){return e=e[Pn]||e[Yn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Bi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(se(33))}function Vl(e){return e[jo]||null}var gu=[],Fi=-1;function zr(e){return{current:e}}function qe(e){0>Fi||(e.current=gu[Fi],gu[Fi]=null,Fi--)}function Ze(e,t){Fi++,gu[Fi]=e.current,e.current=t}var Sr={},St=zr(Sr),Rt=zr(!1),ei=Sr;function ta(e,t){var n=e.type.contextTypes;if(!n)return Sr;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ot(e){return e=e.childContextTypes,e!=null}function yl(){qe(Rt),qe(St)}function Bm(e,t,n){if(St.current!==Sr)throw Error(se(168));Ze(St,t),Ze(Rt,n)}function S0(e,t,n){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return n;a=a.getChildContext();for(var o in a)if(!(o in t))throw Error(se(108,Vv(e)||"Unknown",o));return Je({},n,a)}function vl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Sr,ei=St.current,Ze(St,e),Ze(Rt,Rt.current),!0}function Fm(e,t,n){var a=e.stateNode;if(!a)throw Error(se(169));n?(e=S0(e,t,ei),a.__reactInternalMemoizedMergedChildContext=e,qe(Rt),qe(St),Ze(St,e)):qe(Rt),Ze(Rt,n)}var Hn=null,Gl=!1,xd=!1;function N0(e){Hn===null?Hn=[e]:Hn.push(e)}function db(e){Gl=!0,N0(e)}function Pr(){if(!xd&&Hn!==null){xd=!0;var e=0,t=We;try{var n=Hn;for(We=1;e<n.length;e++){var a=n[e];do a=a(!0);while(a!==null)}Hn=null,Gl=!1}catch(o){throw Hn!==null&&(Hn=Hn.slice(e+1)),Yg(mh,Pr),o}finally{We=t,xd=!1}}return null}var Di=[],Wi=0,bl=null,wl=0,rn=[],an=0,ti=null,Zn=1,$n="";function Hr(e,t){Di[Wi++]=wl,Di[Wi++]=bl,bl=e,wl=t}function C0(e,t,n){rn[an++]=Zn,rn[an++]=$n,rn[an++]=ti,ti=e;var a=Zn;e=$n;var o=32-yn(a)-1;a&=~(1<<o),n+=1;var l=32-yn(t)+o;if(30<l){var d=o-o%5;l=(a&(1<<d)-1).toString(32),a>>=d,o-=d,Zn=1<<32-yn(t)+o|n<<o|a,$n=l+e}else Zn=1<<l|n<<o|a,$n=e}function jh(e){e.return!==null&&(Hr(e,1),C0(e,1,0))}function kh(e){for(;e===bl;)bl=Di[--Wi],Di[Wi]=null,wl=Di[--Wi],Di[Wi]=null;for(;e===ti;)ti=rn[--an],rn[an]=null,$n=rn[--an],rn[an]=null,Zn=rn[--an],rn[an]=null}var qt=null,$t=null,Ve=!1,xn=null;function z0(e,t){var n=on(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Dm(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,qt=e,$t=xr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,qt=e,$t=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ti!==null?{id:Zn,overflow:$n}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=on(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,qt=e,$t=null,!0):!1;default:return!1}}function xu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function yu(e){if(Ve){var t=$t;if(t){var n=t;if(!Dm(e,t)){if(xu(e))throw Error(se(418));t=xr(n.nextSibling);var a=qt;t&&Dm(e,t)?z0(a,n):(e.flags=e.flags&-4097|2,Ve=!1,qt=e)}}else{if(xu(e))throw Error(se(418));e.flags=e.flags&-4097|2,Ve=!1,qt=e}}}function Wm(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qt=e}function Bs(e){if(e!==qt)return!1;if(!Ve)return Wm(e),Ve=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!pu(e.type,e.memoizedProps)),t&&(t=$t)){if(xu(e))throw P0(),Error(se(418));for(;t;)z0(e,t),t=xr(t.nextSibling)}if(Wm(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(se(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){$t=xr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}$t=null}}else $t=qt?xr(e.stateNode.nextSibling):null;return!0}function P0(){for(var e=$t;e;)e=xr(e.nextSibling)}function na(){$t=qt=null,Ve=!1}function Sh(e){xn===null?xn=[e]:xn.push(e)}var ub=tr.ReactCurrentBatchConfig;function Wa(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var a=n.stateNode}if(!a)throw Error(se(147,e));var o=a,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(d){var h=o.refs;d===null?delete h[l]:h[l]=d},t._stringRef=l,t)}if(typeof e!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,e))}return e}function Fs(e,t){throw e=Object.prototype.toString.call(t),Error(se(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Um(e){var t=e._init;return t(e._payload)}function E0(e){function t(z,b){if(e){var k=z.deletions;k===null?(z.deletions=[b],z.flags|=16):k.push(b)}}function n(z,b){if(!e)return null;for(;b!==null;)t(z,b),b=b.sibling;return null}function a(z,b){for(z=new Map;b!==null;)b.key!==null?z.set(b.key,b):z.set(b.index,b),b=b.sibling;return z}function o(z,b){return z=wr(z,b),z.index=0,z.sibling=null,z}function l(z,b,k){return z.index=k,e?(k=z.alternate,k!==null?(k=k.index,k<b?(z.flags|=2,b):k):(z.flags|=2,b)):(z.flags|=1048576,b)}function d(z){return e&&z.alternate===null&&(z.flags|=2),z}function h(z,b,k,S){return b===null||b.tag!==6?(b=kd(k,z.mode,S),b.return=z,b):(b=o(b,k),b.return=z,b)}function u(z,b,k,S){var E=k.type;return E===Ai?x(z,b,k.props.children,S,k.key):b!==null&&(b.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===sr&&Um(E)===b.type)?(S=o(b,k.props),S.ref=Wa(z,b,k),S.return=z,S):(S=al(k.type,k.key,k.props,null,z.mode,S),S.ref=Wa(z,b,k),S.return=z,S)}function f(z,b,k,S){return b===null||b.tag!==4||b.stateNode.containerInfo!==k.containerInfo||b.stateNode.implementation!==k.implementation?(b=Sd(k,z.mode,S),b.return=z,b):(b=o(b,k.children||[]),b.return=z,b)}function x(z,b,k,S,E){return b===null||b.tag!==7?(b=Qr(k,z.mode,S,E),b.return=z,b):(b=o(b,k),b.return=z,b)}function y(z,b,k){if(typeof b=="string"&&b!==""||typeof b=="number")return b=kd(""+b,z.mode,k),b.return=z,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case zs:return k=al(b.type,b.key,b.props,null,z.mode,k),k.ref=Wa(z,null,b),k.return=z,k;case Ti:return b=Sd(b,z.mode,k),b.return=z,b;case sr:var S=b._init;return y(z,S(b._payload),k)}if(Ya(b)||Ra(b))return b=Qr(b,z.mode,k,null),b.return=z,b;Fs(z,b)}return null}function v(z,b,k,S){var E=b!==null?b.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return E!==null?null:h(z,b,""+k,S);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case zs:return k.key===E?u(z,b,k,S):null;case Ti:return k.key===E?f(z,b,k,S):null;case sr:return E=k._init,v(z,b,E(k._payload),S)}if(Ya(k)||Ra(k))return E!==null?null:x(z,b,k,S,null);Fs(z,k)}return null}function _(z,b,k,S,E){if(typeof S=="string"&&S!==""||typeof S=="number")return z=z.get(k)||null,h(b,z,""+S,E);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case zs:return z=z.get(S.key===null?k:S.key)||null,u(b,z,S,E);case Ti:return z=z.get(S.key===null?k:S.key)||null,f(b,z,S,E);case sr:var P=S._init;return _(z,b,k,P(S._payload),E)}if(Ya(S)||Ra(S))return z=z.get(k)||null,x(b,z,S,E,null);Fs(b,S)}return null}function w(z,b,k,S){for(var E=null,P=null,I=b,D=b=0,T=null;I!==null&&D<k.length;D++){I.index>D?(T=I,I=null):T=I.sibling;var R=v(z,I,k[D],S);if(R===null){I===null&&(I=T);break}e&&I&&R.alternate===null&&t(z,I),b=l(R,b,D),P===null?E=R:P.sibling=R,P=R,I=T}if(D===k.length)return n(z,I),Ve&&Hr(z,D),E;if(I===null){for(;D<k.length;D++)I=y(z,k[D],S),I!==null&&(b=l(I,b,D),P===null?E=I:P.sibling=I,P=I);return Ve&&Hr(z,D),E}for(I=a(z,I);D<k.length;D++)T=_(I,z,D,k[D],S),T!==null&&(e&&T.alternate!==null&&I.delete(T.key===null?D:T.key),b=l(T,b,D),P===null?E=T:P.sibling=T,P=T);return e&&I.forEach(function(U){return t(z,U)}),Ve&&Hr(z,D),E}function N(z,b,k,S){var E=Ra(k);if(typeof E!="function")throw Error(se(150));if(k=E.call(k),k==null)throw Error(se(151));for(var P=E=null,I=b,D=b=0,T=null,R=k.next();I!==null&&!R.done;D++,R=k.next()){I.index>D?(T=I,I=null):T=I.sibling;var U=v(z,I,R.value,S);if(U===null){I===null&&(I=T);break}e&&I&&U.alternate===null&&t(z,I),b=l(U,b,D),P===null?E=U:P.sibling=U,P=U,I=T}if(R.done)return n(z,I),Ve&&Hr(z,D),E;if(I===null){for(;!R.done;D++,R=k.next())R=y(z,R.value,S),R!==null&&(b=l(R,b,D),P===null?E=R:P.sibling=R,P=R);return Ve&&Hr(z,D),E}for(I=a(z,I);!R.done;D++,R=k.next())R=_(I,z,D,R.value,S),R!==null&&(e&&R.alternate!==null&&I.delete(R.key===null?D:R.key),b=l(R,b,D),P===null?E=R:P.sibling=R,P=R);return e&&I.forEach(function(F){return t(z,F)}),Ve&&Hr(z,D),E}function C(z,b,k,S){if(typeof k=="object"&&k!==null&&k.type===Ai&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case zs:e:{for(var E=k.key,P=b;P!==null;){if(P.key===E){if(E=k.type,E===Ai){if(P.tag===7){n(z,P.sibling),b=o(P,k.props.children),b.return=z,z=b;break e}}else if(P.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===sr&&Um(E)===P.type){n(z,P.sibling),b=o(P,k.props),b.ref=Wa(z,P,k),b.return=z,z=b;break e}n(z,P);break}else t(z,P);P=P.sibling}k.type===Ai?(b=Qr(k.props.children,z.mode,S,k.key),b.return=z,z=b):(S=al(k.type,k.key,k.props,null,z.mode,S),S.ref=Wa(z,b,k),S.return=z,z=S)}return d(z);case Ti:e:{for(P=k.key;b!==null;){if(b.key===P)if(b.tag===4&&b.stateNode.containerInfo===k.containerInfo&&b.stateNode.implementation===k.implementation){n(z,b.sibling),b=o(b,k.children||[]),b.return=z,z=b;break e}else{n(z,b);break}else t(z,b);b=b.sibling}b=Sd(k,z.mode,S),b.return=z,z=b}return d(z);case sr:return P=k._init,C(z,b,P(k._payload),S)}if(Ya(k))return w(z,b,k,S);if(Ra(k))return N(z,b,k,S);Fs(z,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,b!==null&&b.tag===6?(n(z,b.sibling),b=o(b,k),b.return=z,z=b):(n(z,b),b=kd(k,z.mode,S),b.return=z,z=b),d(z)):n(z,b)}return C}var ra=E0(!0),L0=E0(!1),_l=zr(null),jl=null,Ui=null,Nh=null;function Ch(){Nh=Ui=jl=null}function zh(e){var t=_l.current;qe(_l),e._currentValue=t}function vu(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Qi(e,t){jl=e,Nh=Ui=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(It=!0),e.firstContext=null)}function cn(e){var t=e._currentValue;if(Nh!==e)if(e={context:e,memoizedValue:t,next:null},Ui===null){if(jl===null)throw Error(se(308));Ui=e,jl.dependencies={lanes:0,firstContext:e}}else Ui=Ui.next=e;return t}var qr=null;function Ph(e){qr===null?qr=[e]:qr.push(e)}function M0(e,t,n,a){var o=t.interleaved;return o===null?(n.next=n,Ph(t)):(n.next=o.next,o.next=n),t.interleaved=n,Jn(e,a)}function Jn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var lr=!1;function Eh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function T0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function yr(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,Ie&2){var o=a.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),a.pending=t,Jn(e,n)}return o=a.interleaved,o===null?(t.next=t,Ph(a)):(t.next=o.next,o.next=t),a.interleaved=t,Jn(e,n)}function Xs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,fh(e,n)}}function Hm(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var d={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=d:l=l.next=d,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:a.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:a.shared,effects:a.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function kl(e,t,n,a){var o=e.updateQueue;lr=!1;var l=o.firstBaseUpdate,d=o.lastBaseUpdate,h=o.shared.pending;if(h!==null){o.shared.pending=null;var u=h,f=u.next;u.next=null,d===null?l=f:d.next=f,d=u;var x=e.alternate;x!==null&&(x=x.updateQueue,h=x.lastBaseUpdate,h!==d&&(h===null?x.firstBaseUpdate=f:h.next=f,x.lastBaseUpdate=u))}if(l!==null){var y=o.baseState;d=0,x=f=u=null,h=l;do{var v=h.lane,_=h.eventTime;if((a&v)===v){x!==null&&(x=x.next={eventTime:_,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,next:null});e:{var w=e,N=h;switch(v=t,_=n,N.tag){case 1:if(w=N.payload,typeof w=="function"){y=w.call(_,y,v);break e}y=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=N.payload,v=typeof w=="function"?w.call(_,y,v):w,v==null)break e;y=Je({},y,v);break e;case 2:lr=!0}}h.callback!==null&&h.lane!==0&&(e.flags|=64,v=o.effects,v===null?o.effects=[h]:v.push(h))}else _={eventTime:_,lane:v,tag:h.tag,payload:h.payload,callback:h.callback,next:null},x===null?(f=x=_,u=y):x=x.next=_,d|=v;if(h=h.next,h===null){if(h=o.shared.pending,h===null)break;v=h,h=v.next,v.next=null,o.lastBaseUpdate=v,o.shared.pending=null}}while(!0);if(x===null&&(u=y),o.baseState=u,o.firstBaseUpdate=f,o.lastBaseUpdate=x,t=o.shared.interleaved,t!==null){o=t;do d|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);ri|=d,e.lanes=d,e.memoizedState=y}}function Zm(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],o=a.callback;if(o!==null){if(a.callback=null,a=n,typeof o!="function")throw Error(se(191,o));o.call(a)}}}var Wo={},Ln=zr(Wo),ko=zr(Wo),So=zr(Wo);function Vr(e){if(e===Wo)throw Error(se(174));return e}function Lh(e,t){switch(Ze(So,t),Ze(ko,e),Ze(Ln,Wo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Xd(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Xd(t,e)}qe(Ln),Ze(Ln,t)}function ia(){qe(Ln),qe(ko),qe(So)}function A0(e){Vr(So.current);var t=Vr(Ln.current),n=Xd(t,e.type);t!==n&&(Ze(ko,e),Ze(Ln,n))}function Mh(e){ko.current===e&&(qe(Ln),qe(ko))}var Qe=zr(0);function Sl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yd=[];function Th(){for(var e=0;e<yd.length;e++)yd[e]._workInProgressVersionPrimary=null;yd.length=0}var el=tr.ReactCurrentDispatcher,vd=tr.ReactCurrentBatchConfig,ni=0,Ye=null,lt=null,ht=null,Nl=!1,oo=!1,No=0,hb=0;function vt(){throw Error(se(321))}function Ah(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wn(e[n],t[n]))return!1;return!0}function Ih(e,t,n,a,o,l){if(ni=l,Ye=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,el.current=e===null||e.memoizedState===null?gb:xb,e=n(a,o),oo){l=0;do{if(oo=!1,No=0,25<=l)throw Error(se(301));l+=1,ht=lt=null,t.updateQueue=null,el.current=yb,e=n(a,o)}while(oo)}if(el.current=Cl,t=lt!==null&&lt.next!==null,ni=0,ht=lt=Ye=null,Nl=!1,t)throw Error(se(300));return e}function Rh(){var e=No!==0;return No=0,e}function zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ht===null?Ye.memoizedState=ht=e:ht=ht.next=e,ht}function dn(){if(lt===null){var e=Ye.alternate;e=e!==null?e.memoizedState:null}else e=lt.next;var t=ht===null?Ye.memoizedState:ht.next;if(t!==null)ht=t,lt=e;else{if(e===null)throw Error(se(310));lt=e,e={memoizedState:lt.memoizedState,baseState:lt.baseState,baseQueue:lt.baseQueue,queue:lt.queue,next:null},ht===null?Ye.memoizedState=ht=e:ht=ht.next=e}return ht}function Co(e,t){return typeof t=="function"?t(e):t}function bd(e){var t=dn(),n=t.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=e;var a=lt,o=a.baseQueue,l=n.pending;if(l!==null){if(o!==null){var d=o.next;o.next=l.next,l.next=d}a.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,a=a.baseState;var h=d=null,u=null,f=l;do{var x=f.lane;if((ni&x)===x)u!==null&&(u=u.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),a=f.hasEagerState?f.eagerState:e(a,f.action);else{var y={lane:x,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};u===null?(h=u=y,d=a):u=u.next=y,Ye.lanes|=x,ri|=x}f=f.next}while(f!==null&&f!==l);u===null?d=a:u.next=h,wn(a,t.memoizedState)||(It=!0),t.memoizedState=a,t.baseState=d,t.baseQueue=u,n.lastRenderedState=a}if(e=n.interleaved,e!==null){o=e;do l=o.lane,Ye.lanes|=l,ri|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function wd(e){var t=dn(),n=t.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=e;var a=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var d=o=o.next;do l=e(l,d.action),d=d.next;while(d!==o);wn(l,t.memoizedState)||(It=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,a]}function I0(){}function R0(e,t){var n=Ye,a=dn(),o=t(),l=!wn(a.memoizedState,o);if(l&&(a.memoizedState=o,It=!0),a=a.queue,Oh(F0.bind(null,n,a,e),[e]),a.getSnapshot!==t||l||ht!==null&&ht.memoizedState.tag&1){if(n.flags|=2048,zo(9,B0.bind(null,n,a,o,t),void 0,null),pt===null)throw Error(se(349));ni&30||O0(n,t,o)}return o}function O0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ye.updateQueue,t===null?(t={lastEffect:null,stores:null},Ye.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function B0(e,t,n,a){t.value=n,t.getSnapshot=a,D0(t)&&W0(e)}function F0(e,t,n){return n(function(){D0(t)&&W0(e)})}function D0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wn(e,n)}catch{return!0}}function W0(e){var t=Jn(e,1);t!==null&&vn(t,e,1,-1)}function $m(e){var t=zn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Co,lastRenderedState:e},t.queue=e,e=e.dispatch=fb.bind(null,Ye,e),[t.memoizedState,e]}function zo(e,t,n,a){return e={tag:e,create:t,destroy:n,deps:a,next:null},t=Ye.updateQueue,t===null?(t={lastEffect:null,stores:null},Ye.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e)),e}function U0(){return dn().memoizedState}function tl(e,t,n,a){var o=zn();Ye.flags|=e,o.memoizedState=zo(1|t,n,void 0,a===void 0?null:a)}function Kl(e,t,n,a){var o=dn();a=a===void 0?null:a;var l=void 0;if(lt!==null){var d=lt.memoizedState;if(l=d.destroy,a!==null&&Ah(a,d.deps)){o.memoizedState=zo(t,n,l,a);return}}Ye.flags|=e,o.memoizedState=zo(1|t,n,l,a)}function qm(e,t){return tl(8390656,8,e,t)}function Oh(e,t){return Kl(2048,8,e,t)}function H0(e,t){return Kl(4,2,e,t)}function Z0(e,t){return Kl(4,4,e,t)}function $0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function q0(e,t,n){return n=n!=null?n.concat([e]):null,Kl(4,4,$0.bind(null,t,e),n)}function Bh(){}function V0(e,t){var n=dn();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&Ah(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function G0(e,t){var n=dn();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&Ah(t,a[1])?a[0]:(e=e(),n.memoizedState=[e,t],e)}function K0(e,t,n){return ni&21?(wn(n,t)||(n=e0(),Ye.lanes|=n,ri|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,It=!0),e.memoizedState=n)}function pb(e,t){var n=We;We=n!==0&&4>n?n:4,e(!0);var a=vd.transition;vd.transition={};try{e(!1),t()}finally{We=n,vd.transition=a}}function Q0(){return dn().memoizedState}function mb(e,t,n){var a=br(e);if(n={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null},Y0(e))J0(t,n);else if(n=M0(e,t,n,a),n!==null){var o=Et();vn(n,e,a,o),X0(n,t,a)}}function fb(e,t,n){var a=br(e),o={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null};if(Y0(e))J0(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var d=t.lastRenderedState,h=l(d,n);if(o.hasEagerState=!0,o.eagerState=h,wn(h,d)){var u=t.interleaved;u===null?(o.next=o,Ph(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=M0(e,t,o,a),n!==null&&(o=Et(),vn(n,e,a,o),X0(n,t,a))}}function Y0(e){var t=e.alternate;return e===Ye||t!==null&&t===Ye}function J0(e,t){oo=Nl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function X0(e,t,n){if(n&4194240){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,fh(e,n)}}var Cl={readContext:cn,useCallback:vt,useContext:vt,useEffect:vt,useImperativeHandle:vt,useInsertionEffect:vt,useLayoutEffect:vt,useMemo:vt,useReducer:vt,useRef:vt,useState:vt,useDebugValue:vt,useDeferredValue:vt,useTransition:vt,useMutableSource:vt,useSyncExternalStore:vt,useId:vt,unstable_isNewReconciler:!1},gb={readContext:cn,useCallback:function(e,t){return zn().memoizedState=[e,t===void 0?null:t],e},useContext:cn,useEffect:qm,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,tl(4194308,4,$0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return tl(4194308,4,e,t)},useInsertionEffect:function(e,t){return tl(4,2,e,t)},useMemo:function(e,t){var n=zn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var a=zn();return t=n!==void 0?n(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=mb.bind(null,Ye,e),[a.memoizedState,e]},useRef:function(e){var t=zn();return e={current:e},t.memoizedState=e},useState:$m,useDebugValue:Bh,useDeferredValue:function(e){return zn().memoizedState=e},useTransition:function(){var e=$m(!1),t=e[0];return e=pb.bind(null,e[1]),zn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var a=Ye,o=zn();if(Ve){if(n===void 0)throw Error(se(407));n=n()}else{if(n=t(),pt===null)throw Error(se(349));ni&30||O0(a,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,qm(F0.bind(null,a,l,e),[e]),a.flags|=2048,zo(9,B0.bind(null,a,l,n,t),void 0,null),n},useId:function(){var e=zn(),t=pt.identifierPrefix;if(Ve){var n=$n,a=Zn;n=(a&~(1<<32-yn(a)-1)).toString(32)+n,t=":"+t+"R"+n,n=No++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=hb++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},xb={readContext:cn,useCallback:V0,useContext:cn,useEffect:Oh,useImperativeHandle:q0,useInsertionEffect:H0,useLayoutEffect:Z0,useMemo:G0,useReducer:bd,useRef:U0,useState:function(){return bd(Co)},useDebugValue:Bh,useDeferredValue:function(e){var t=dn();return K0(t,lt.memoizedState,e)},useTransition:function(){var e=bd(Co)[0],t=dn().memoizedState;return[e,t]},useMutableSource:I0,useSyncExternalStore:R0,useId:Q0,unstable_isNewReconciler:!1},yb={readContext:cn,useCallback:V0,useContext:cn,useEffect:Oh,useImperativeHandle:q0,useInsertionEffect:H0,useLayoutEffect:Z0,useMemo:G0,useReducer:wd,useRef:U0,useState:function(){return wd(Co)},useDebugValue:Bh,useDeferredValue:function(e){var t=dn();return lt===null?t.memoizedState=e:K0(t,lt.memoizedState,e)},useTransition:function(){var e=wd(Co)[0],t=dn().memoizedState;return[e,t]},useMutableSource:I0,useSyncExternalStore:R0,useId:Q0,unstable_isNewReconciler:!1};function fn(e,t){if(e&&e.defaultProps){t=Je({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function bu(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:Je({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ql={isMounted:function(e){return(e=e._reactInternals)?ui(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Et(),o=br(e),l=qn(a,o);l.payload=t,n!=null&&(l.callback=n),t=yr(e,l,o),t!==null&&(vn(t,e,o,a),Xs(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Et(),o=br(e),l=qn(a,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=yr(e,l,o),t!==null&&(vn(t,e,o,a),Xs(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Et(),a=br(e),o=qn(n,a);o.tag=2,t!=null&&(o.callback=t),t=yr(e,o,a),t!==null&&(vn(t,e,a,n),Xs(t,e,a))}};function Vm(e,t,n,a,o,l,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,l,d):t.prototype&&t.prototype.isPureReactComponent?!bo(n,a)||!bo(o,l):!0}function ex(e,t,n){var a=!1,o=Sr,l=t.contextType;return typeof l=="object"&&l!==null?l=cn(l):(o=Ot(t)?ei:St.current,a=t.contextTypes,l=(a=a!=null)?ta(e,o):Sr),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ql,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function Gm(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Ql.enqueueReplaceState(t,t.state,null)}function wu(e,t,n,a){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Eh(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=cn(l):(l=Ot(t)?ei:St.current,o.context=ta(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(bu(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ql.enqueueReplaceState(o,o.state,null),kl(e,n,o,a),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function aa(e,t){try{var n="",a=t;do n+=qv(a),a=a.return;while(a);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function _d(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function _u(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var vb=typeof WeakMap=="function"?WeakMap:Map;function tx(e,t,n){n=qn(-1,n),n.tag=3,n.payload={element:null};var a=t.value;return n.callback=function(){Pl||(Pl=!0,Mu=a),_u(e,t)},n}function nx(e,t,n){n=qn(-1,n),n.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var o=t.value;n.payload=function(){return a(o)},n.callback=function(){_u(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){_u(e,t),typeof a!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var d=t.stack;this.componentDidCatch(t.value,{componentStack:d!==null?d:""})}),n}function Km(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new vb;var o=new Set;a.set(t,o)}else o=a.get(t),o===void 0&&(o=new Set,a.set(t,o));o.has(n)||(o.add(n),e=Tb.bind(null,e,t,n),t.then(e,e))}function Qm(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ym(e,t,n,a,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=qn(-1,1),t.tag=2,yr(n,t,1))),n.lanes|=1),e)}var bb=tr.ReactCurrentOwner,It=!1;function zt(e,t,n,a){t.child=e===null?L0(t,null,n,a):ra(t,e.child,n,a)}function Jm(e,t,n,a,o){n=n.render;var l=t.ref;return Qi(t,o),a=Ih(e,t,n,a,l,o),n=Rh(),e!==null&&!It?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Xn(e,t,o)):(Ve&&n&&jh(t),t.flags|=1,zt(e,t,a,o),t.child)}function Xm(e,t,n,a,o){if(e===null){var l=n.type;return typeof l=="function"&&!qh(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,rx(e,t,l,a,o)):(e=al(n.type,null,a,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var d=l.memoizedProps;if(n=n.compare,n=n!==null?n:bo,n(d,a)&&e.ref===t.ref)return Xn(e,t,o)}return t.flags|=1,e=wr(l,a),e.ref=t.ref,e.return=t,t.child=e}function rx(e,t,n,a,o){if(e!==null){var l=e.memoizedProps;if(bo(l,a)&&e.ref===t.ref)if(It=!1,t.pendingProps=a=l,(e.lanes&o)!==0)e.flags&131072&&(It=!0);else return t.lanes=e.lanes,Xn(e,t,o)}return ju(e,t,n,a,o)}function ix(e,t,n){var a=t.pendingProps,o=a.children,l=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ze(Zi,Zt),Zt|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ze(Zi,Zt),Zt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=l!==null?l.baseLanes:n,Ze(Zi,Zt),Zt|=a}else l!==null?(a=l.baseLanes|n,t.memoizedState=null):a=n,Ze(Zi,Zt),Zt|=a;return zt(e,t,o,n),t.child}function ax(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ju(e,t,n,a,o){var l=Ot(n)?ei:St.current;return l=ta(t,l),Qi(t,o),n=Ih(e,t,n,a,l,o),a=Rh(),e!==null&&!It?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Xn(e,t,o)):(Ve&&a&&jh(t),t.flags|=1,zt(e,t,n,o),t.child)}function ef(e,t,n,a,o){if(Ot(n)){var l=!0;vl(t)}else l=!1;if(Qi(t,o),t.stateNode===null)nl(e,t),ex(t,n,a),wu(t,n,a,o),a=!0;else if(e===null){var d=t.stateNode,h=t.memoizedProps;d.props=h;var u=d.context,f=n.contextType;typeof f=="object"&&f!==null?f=cn(f):(f=Ot(n)?ei:St.current,f=ta(t,f));var x=n.getDerivedStateFromProps,y=typeof x=="function"||typeof d.getSnapshotBeforeUpdate=="function";y||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(h!==a||u!==f)&&Gm(t,d,a,f),lr=!1;var v=t.memoizedState;d.state=v,kl(t,a,d,o),u=t.memoizedState,h!==a||v!==u||Rt.current||lr?(typeof x=="function"&&(bu(t,n,x,a),u=t.memoizedState),(h=lr||Vm(t,n,h,a,v,u,f))?(y||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4194308)):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=u),d.props=a,d.state=u,d.context=f,a=h):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{d=t.stateNode,T0(e,t),h=t.memoizedProps,f=t.type===t.elementType?h:fn(t.type,h),d.props=f,y=t.pendingProps,v=d.context,u=n.contextType,typeof u=="object"&&u!==null?u=cn(u):(u=Ot(n)?ei:St.current,u=ta(t,u));var _=n.getDerivedStateFromProps;(x=typeof _=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(h!==y||v!==u)&&Gm(t,d,a,u),lr=!1,v=t.memoizedState,d.state=v,kl(t,a,d,o);var w=t.memoizedState;h!==y||v!==w||Rt.current||lr?(typeof _=="function"&&(bu(t,n,_,a),w=t.memoizedState),(f=lr||Vm(t,n,f,a,v,w,u)||!1)?(x||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(a,w,u),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(a,w,u)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof d.componentDidUpdate!="function"||h===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=w),d.props=a,d.state=w,d.context=u,a=f):(typeof d.componentDidUpdate!="function"||h===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),a=!1)}return ku(e,t,n,a,l,o)}function ku(e,t,n,a,o,l){ax(e,t);var d=(t.flags&128)!==0;if(!a&&!d)return o&&Fm(t,n,!1),Xn(e,t,l);a=t.stateNode,bb.current=t;var h=d&&typeof n.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&d?(t.child=ra(t,e.child,null,l),t.child=ra(t,null,h,l)):zt(e,t,h,l),t.memoizedState=a.state,o&&Fm(t,n,!0),t.child}function ox(e){var t=e.stateNode;t.pendingContext?Bm(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Bm(e,t.context,!1),Lh(e,t.containerInfo)}function tf(e,t,n,a,o){return na(),Sh(o),t.flags|=256,zt(e,t,n,a),t.child}var Su={dehydrated:null,treeContext:null,retryLane:0};function Nu(e){return{baseLanes:e,cachePool:null,transitions:null}}function sx(e,t,n){var a=t.pendingProps,o=Qe.current,l=!1,d=(t.flags&128)!==0,h;if((h=d)||(h=e!==null&&e.memoizedState===null?!1:(o&2)!==0),h?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Ze(Qe,o&1),e===null)return yu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(d=a.children,e=a.fallback,l?(a=t.mode,l=t.child,d={mode:"hidden",children:d},!(a&1)&&l!==null?(l.childLanes=0,l.pendingProps=d):l=Xl(d,a,0,null),e=Qr(e,a,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Nu(n),t.memoizedState=Su,e):Fh(t,d));if(o=e.memoizedState,o!==null&&(h=o.dehydrated,h!==null))return wb(e,t,d,a,h,o,n);if(l){l=a.fallback,d=t.mode,o=e.child,h=o.sibling;var u={mode:"hidden",children:a.children};return!(d&1)&&t.child!==o?(a=t.child,a.childLanes=0,a.pendingProps=u,t.deletions=null):(a=wr(o,u),a.subtreeFlags=o.subtreeFlags&14680064),h!==null?l=wr(h,l):(l=Qr(l,d,n,null),l.flags|=2),l.return=t,a.return=t,a.sibling=l,t.child=a,a=l,l=t.child,d=e.child.memoizedState,d=d===null?Nu(n):{baseLanes:d.baseLanes|n,cachePool:null,transitions:d.transitions},l.memoizedState=d,l.childLanes=e.childLanes&~n,t.memoizedState=Su,a}return l=e.child,e=l.sibling,a=wr(l,{mode:"visible",children:a.children}),!(t.mode&1)&&(a.lanes=n),a.return=t,a.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function Fh(e,t){return t=Xl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ds(e,t,n,a){return a!==null&&Sh(a),ra(t,e.child,null,n),e=Fh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function wb(e,t,n,a,o,l,d){if(n)return t.flags&256?(t.flags&=-257,a=_d(Error(se(422))),Ds(e,t,d,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=a.fallback,o=t.mode,a=Xl({mode:"visible",children:a.children},o,0,null),l=Qr(l,o,d,null),l.flags|=2,a.return=t,l.return=t,a.sibling=l,t.child=a,t.mode&1&&ra(t,e.child,null,d),t.child.memoizedState=Nu(d),t.memoizedState=Su,l);if(!(t.mode&1))return Ds(e,t,d,null);if(o.data==="$!"){if(a=o.nextSibling&&o.nextSibling.dataset,a)var h=a.dgst;return a=h,l=Error(se(419)),a=_d(l,a,void 0),Ds(e,t,d,a)}if(h=(d&e.childLanes)!==0,It||h){if(a=pt,a!==null){switch(d&-d){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(a.suspendedLanes|d)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,Jn(e,o),vn(a,e,o,-1))}return $h(),a=_d(Error(se(421))),Ds(e,t,d,a)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Ab.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,$t=xr(o.nextSibling),qt=t,Ve=!0,xn=null,e!==null&&(rn[an++]=Zn,rn[an++]=$n,rn[an++]=ti,Zn=e.id,$n=e.overflow,ti=t),t=Fh(t,a.children),t.flags|=4096,t)}function nf(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),vu(e.return,t,n)}function jd(e,t,n,a,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=a,l.tail=n,l.tailMode=o)}function lx(e,t,n){var a=t.pendingProps,o=a.revealOrder,l=a.tail;if(zt(e,t,a.children,n),a=Qe.current,a&2)a=a&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nf(e,n,t);else if(e.tag===19)nf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(Ze(Qe,a),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Sl(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),jd(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Sl(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}jd(t,!0,n,null,l);break;case"together":jd(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function nl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ri|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(se(153));if(t.child!==null){for(e=t.child,n=wr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=wr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function _b(e,t,n){switch(t.tag){case 3:ox(t),na();break;case 5:A0(t);break;case 1:Ot(t.type)&&vl(t);break;case 4:Lh(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,o=t.memoizedProps.value;Ze(_l,a._currentValue),a._currentValue=o;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(Ze(Qe,Qe.current&1),t.flags|=128,null):n&t.child.childLanes?sx(e,t,n):(Ze(Qe,Qe.current&1),e=Xn(e,t,n),e!==null?e.sibling:null);Ze(Qe,Qe.current&1);break;case 19:if(a=(n&t.childLanes)!==0,e.flags&128){if(a)return lx(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Ze(Qe,Qe.current),a)break;return null;case 22:case 23:return t.lanes=0,ix(e,t,n)}return Xn(e,t,n)}var cx,Cu,dx,ux;cx=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Cu=function(){};dx=function(e,t,n,a){var o=e.memoizedProps;if(o!==a){e=t.stateNode,Vr(Ln.current);var l=null;switch(n){case"input":o=Kd(e,o),a=Kd(e,a),l=[];break;case"select":o=Je({},o,{value:void 0}),a=Je({},a,{value:void 0}),l=[];break;case"textarea":o=Jd(e,o),a=Jd(e,a),l=[];break;default:typeof o.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=xl)}eu(n,a);var d;n=null;for(f in o)if(!a.hasOwnProperty(f)&&o.hasOwnProperty(f)&&o[f]!=null)if(f==="style"){var h=o[f];for(d in h)h.hasOwnProperty(d)&&(n||(n={}),n[d]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(po.hasOwnProperty(f)?l||(l=[]):(l=l||[]).push(f,null));for(f in a){var u=a[f];if(h=o!=null?o[f]:void 0,a.hasOwnProperty(f)&&u!==h&&(u!=null||h!=null))if(f==="style")if(h){for(d in h)!h.hasOwnProperty(d)||u&&u.hasOwnProperty(d)||(n||(n={}),n[d]="");for(d in u)u.hasOwnProperty(d)&&h[d]!==u[d]&&(n||(n={}),n[d]=u[d])}else n||(l||(l=[]),l.push(f,n)),n=u;else f==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,h=h?h.__html:void 0,u!=null&&h!==u&&(l=l||[]).push(f,u)):f==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(f,""+u):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(po.hasOwnProperty(f)?(u!=null&&f==="onScroll"&&$e("scroll",e),l||h===u||(l=[])):(l=l||[]).push(f,u))}n&&(l=l||[]).push("style",n);var f=l;(t.updateQueue=f)&&(t.flags|=4)}};ux=function(e,t,n,a){n!==a&&(t.flags|=4)};function Ua(e,t){if(!Ve)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function bt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,a|=o.subtreeFlags&14680064,a|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,a|=o.subtreeFlags,a|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function jb(e,t,n){var a=t.pendingProps;switch(kh(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bt(t),null;case 1:return Ot(t.type)&&yl(),bt(t),null;case 3:return a=t.stateNode,ia(),qe(Rt),qe(St),Th(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Bs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,xn!==null&&(Iu(xn),xn=null))),Cu(e,t),bt(t),null;case 5:Mh(t);var o=Vr(So.current);if(n=t.type,e!==null&&t.stateNode!=null)dx(e,t,n,a,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(se(166));return bt(t),null}if(e=Vr(Ln.current),Bs(t)){a=t.stateNode,n=t.type;var l=t.memoizedProps;switch(a[Pn]=t,a[jo]=l,e=(t.mode&1)!==0,n){case"dialog":$e("cancel",a),$e("close",a);break;case"iframe":case"object":case"embed":$e("load",a);break;case"video":case"audio":for(o=0;o<Xa.length;o++)$e(Xa[o],a);break;case"source":$e("error",a);break;case"img":case"image":case"link":$e("error",a),$e("load",a);break;case"details":$e("toggle",a);break;case"input":um(a,l),$e("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!l.multiple},$e("invalid",a);break;case"textarea":pm(a,l),$e("invalid",a)}eu(n,l),o=null;for(var d in l)if(l.hasOwnProperty(d)){var h=l[d];d==="children"?typeof h=="string"?a.textContent!==h&&(l.suppressHydrationWarning!==!0&&Os(a.textContent,h,e),o=["children",h]):typeof h=="number"&&a.textContent!==""+h&&(l.suppressHydrationWarning!==!0&&Os(a.textContent,h,e),o=["children",""+h]):po.hasOwnProperty(d)&&h!=null&&d==="onScroll"&&$e("scroll",a)}switch(n){case"input":Ps(a),hm(a,l,!0);break;case"textarea":Ps(a),mm(a);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(a.onclick=xl)}a=o,t.updateQueue=a,a!==null&&(t.flags|=4)}else{d=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Fg(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=d.createElement(n,{is:a.is}):(e=d.createElement(n),n==="select"&&(d=e,a.multiple?d.multiple=!0:a.size&&(d.size=a.size))):e=d.createElementNS(e,n),e[Pn]=t,e[jo]=a,cx(e,t,!1,!1),t.stateNode=e;e:{switch(d=tu(n,a),n){case"dialog":$e("cancel",e),$e("close",e),o=a;break;case"iframe":case"object":case"embed":$e("load",e),o=a;break;case"video":case"audio":for(o=0;o<Xa.length;o++)$e(Xa[o],e);o=a;break;case"source":$e("error",e),o=a;break;case"img":case"image":case"link":$e("error",e),$e("load",e),o=a;break;case"details":$e("toggle",e),o=a;break;case"input":um(e,a),o=Kd(e,a),$e("invalid",e);break;case"option":o=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},o=Je({},a,{value:void 0}),$e("invalid",e);break;case"textarea":pm(e,a),o=Jd(e,a),$e("invalid",e);break;default:o=a}eu(n,o),h=o;for(l in h)if(h.hasOwnProperty(l)){var u=h[l];l==="style"?Ug(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Dg(e,u)):l==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&mo(e,u):typeof u=="number"&&mo(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(po.hasOwnProperty(l)?u!=null&&l==="onScroll"&&$e("scroll",e):u!=null&&ch(e,l,u,d))}switch(n){case"input":Ps(e),hm(e,a,!1);break;case"textarea":Ps(e),mm(e);break;case"option":a.value!=null&&e.setAttribute("value",""+kr(a.value));break;case"select":e.multiple=!!a.multiple,l=a.value,l!=null?qi(e,!!a.multiple,l,!1):a.defaultValue!=null&&qi(e,!!a.multiple,a.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=xl)}switch(n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return bt(t),null;case 6:if(e&&t.stateNode!=null)ux(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(se(166));if(n=Vr(So.current),Vr(Ln.current),Bs(t)){if(a=t.stateNode,n=t.memoizedProps,a[Pn]=t,(l=a.nodeValue!==n)&&(e=qt,e!==null))switch(e.tag){case 3:Os(a.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Os(a.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else a=(n.nodeType===9?n:n.ownerDocument).createTextNode(a),a[Pn]=t,t.stateNode=a}return bt(t),null;case 13:if(qe(Qe),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ve&&$t!==null&&t.mode&1&&!(t.flags&128))P0(),na(),t.flags|=98560,l=!1;else if(l=Bs(t),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(se(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(se(317));l[Pn]=t}else na(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;bt(t),l=!1}else xn!==null&&(Iu(xn),xn=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,t.mode&1&&(e===null||Qe.current&1?ct===0&&(ct=3):$h())),t.updateQueue!==null&&(t.flags|=4),bt(t),null);case 4:return ia(),Cu(e,t),e===null&&wo(t.stateNode.containerInfo),bt(t),null;case 10:return zh(t.type._context),bt(t),null;case 17:return Ot(t.type)&&yl(),bt(t),null;case 19:if(qe(Qe),l=t.memoizedState,l===null)return bt(t),null;if(a=(t.flags&128)!==0,d=l.rendering,d===null)if(a)Ua(l,!1);else{if(ct!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(d=Sl(e),d!==null){for(t.flags|=128,Ua(l,!1),a=d.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=n,n=t.child;n!==null;)l=n,e=a,l.flags&=14680066,d=l.alternate,d===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=d.childLanes,l.lanes=d.lanes,l.child=d.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=d.memoizedProps,l.memoizedState=d.memoizedState,l.updateQueue=d.updateQueue,l.type=d.type,e=d.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ze(Qe,Qe.current&1|2),t.child}e=e.sibling}l.tail!==null&&tt()>oa&&(t.flags|=128,a=!0,Ua(l,!1),t.lanes=4194304)}else{if(!a)if(e=Sl(d),e!==null){if(t.flags|=128,a=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ua(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!Ve)return bt(t),null}else 2*tt()-l.renderingStartTime>oa&&n!==1073741824&&(t.flags|=128,a=!0,Ua(l,!1),t.lanes=4194304);l.isBackwards?(d.sibling=t.child,t.child=d):(n=l.last,n!==null?n.sibling=d:t.child=d,l.last=d)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=tt(),t.sibling=null,n=Qe.current,Ze(Qe,a?n&1|2:n&1),t):(bt(t),null);case 22:case 23:return Zh(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&t.mode&1?Zt&1073741824&&(bt(t),t.subtreeFlags&6&&(t.flags|=8192)):bt(t),null;case 24:return null;case 25:return null}throw Error(se(156,t.tag))}function kb(e,t){switch(kh(t),t.tag){case 1:return Ot(t.type)&&yl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ia(),qe(Rt),qe(St),Th(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Mh(t),null;case 13:if(qe(Qe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(se(340));na()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return qe(Qe),null;case 4:return ia(),null;case 10:return zh(t.type._context),null;case 22:case 23:return Zh(),null;case 24:return null;default:return null}}var Ws=!1,wt=!1,Sb=typeof WeakSet=="function"?WeakSet:Set,pe=null;function Hi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(a){Xe(e,t,a)}else n.current=null}function zu(e,t,n){try{n()}catch(a){Xe(e,t,a)}}var rf=!1;function Nb(e,t){if(uu=ml,e=g0(),_h(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var o=a.anchorOffset,l=a.focusNode;a=a.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var d=0,h=-1,u=-1,f=0,x=0,y=e,v=null;t:for(;;){for(var _;y!==n||o!==0&&y.nodeType!==3||(h=d+o),y!==l||a!==0&&y.nodeType!==3||(u=d+a),y.nodeType===3&&(d+=y.nodeValue.length),(_=y.firstChild)!==null;)v=y,y=_;for(;;){if(y===e)break t;if(v===n&&++f===o&&(h=d),v===l&&++x===a&&(u=d),(_=y.nextSibling)!==null)break;y=v,v=y.parentNode}y=_}n=h===-1||u===-1?null:{start:h,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(hu={focusedElem:e,selectionRange:n},ml=!1,pe=t;pe!==null;)if(t=pe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,pe=e;else for(;pe!==null;){t=pe;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var N=w.memoizedProps,C=w.memoizedState,z=t.stateNode,b=z.getSnapshotBeforeUpdate(t.elementType===t.type?N:fn(t.type,N),C);z.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var k=t.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(S){Xe(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,pe=e;break}pe=t.return}return w=rf,rf=!1,w}function so(e,t,n){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var o=a=a.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&zu(t,n,l)}o=o.next}while(o!==a)}}function Yl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var a=n.create;n.destroy=a()}n=n.next}while(n!==t)}}function Pu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function hx(e){var t=e.alternate;t!==null&&(e.alternate=null,hx(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Pn],delete t[jo],delete t[fu],delete t[lb],delete t[cb])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function px(e){return e.tag===5||e.tag===3||e.tag===4}function af(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||px(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Eu(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=xl));else if(a!==4&&(e=e.child,e!==null))for(Eu(e,t,n),e=e.sibling;e!==null;)Eu(e,t,n),e=e.sibling}function Lu(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(Lu(e,t,n),e=e.sibling;e!==null;)Lu(e,t,n),e=e.sibling}var ft=null,gn=!1;function or(e,t,n){for(n=n.child;n!==null;)mx(e,t,n),n=n.sibling}function mx(e,t,n){if(En&&typeof En.onCommitFiberUnmount=="function")try{En.onCommitFiberUnmount(Hl,n)}catch{}switch(n.tag){case 5:wt||Hi(n,t);case 6:var a=ft,o=gn;ft=null,or(e,t,n),ft=a,gn=o,ft!==null&&(gn?(e=ft,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ft.removeChild(n.stateNode));break;case 18:ft!==null&&(gn?(e=ft,n=n.stateNode,e.nodeType===8?gd(e.parentNode,n):e.nodeType===1&&gd(e,n),yo(e)):gd(ft,n.stateNode));break;case 4:a=ft,o=gn,ft=n.stateNode.containerInfo,gn=!0,or(e,t,n),ft=a,gn=o;break;case 0:case 11:case 14:case 15:if(!wt&&(a=n.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){o=a=a.next;do{var l=o,d=l.destroy;l=l.tag,d!==void 0&&(l&2||l&4)&&zu(n,t,d),o=o.next}while(o!==a)}or(e,t,n);break;case 1:if(!wt&&(Hi(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=n.memoizedProps,a.state=n.memoizedState,a.componentWillUnmount()}catch(h){Xe(n,t,h)}or(e,t,n);break;case 21:or(e,t,n);break;case 22:n.mode&1?(wt=(a=wt)||n.memoizedState!==null,or(e,t,n),wt=a):or(e,t,n);break;default:or(e,t,n)}}function of(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Sb),t.forEach(function(a){var o=Ib.bind(null,e,a);n.has(a)||(n.add(a),a.then(o,o))})}}function pn(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];try{var l=e,d=t,h=d;e:for(;h!==null;){switch(h.tag){case 5:ft=h.stateNode,gn=!1;break e;case 3:ft=h.stateNode.containerInfo,gn=!0;break e;case 4:ft=h.stateNode.containerInfo,gn=!0;break e}h=h.return}if(ft===null)throw Error(se(160));mx(l,d,o),ft=null,gn=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(f){Xe(o,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)fx(t,e),t=t.sibling}function fx(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(pn(t,e),Nn(e),a&4){try{so(3,e,e.return),Yl(3,e)}catch(N){Xe(e,e.return,N)}try{so(5,e,e.return)}catch(N){Xe(e,e.return,N)}}break;case 1:pn(t,e),Nn(e),a&512&&n!==null&&Hi(n,n.return);break;case 5:if(pn(t,e),Nn(e),a&512&&n!==null&&Hi(n,n.return),e.flags&32){var o=e.stateNode;try{mo(o,"")}catch(N){Xe(e,e.return,N)}}if(a&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,d=n!==null?n.memoizedProps:l,h=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{h==="input"&&l.type==="radio"&&l.name!=null&&Og(o,l),tu(h,d);var f=tu(h,l);for(d=0;d<u.length;d+=2){var x=u[d],y=u[d+1];x==="style"?Ug(o,y):x==="dangerouslySetInnerHTML"?Dg(o,y):x==="children"?mo(o,y):ch(o,x,y,f)}switch(h){case"input":Qd(o,l);break;case"textarea":Bg(o,l);break;case"select":var v=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var _=l.value;_!=null?qi(o,!!l.multiple,_,!1):v!==!!l.multiple&&(l.defaultValue!=null?qi(o,!!l.multiple,l.defaultValue,!0):qi(o,!!l.multiple,l.multiple?[]:"",!1))}o[jo]=l}catch(N){Xe(e,e.return,N)}}break;case 6:if(pn(t,e),Nn(e),a&4){if(e.stateNode===null)throw Error(se(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(N){Xe(e,e.return,N)}}break;case 3:if(pn(t,e),Nn(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{yo(t.containerInfo)}catch(N){Xe(e,e.return,N)}break;case 4:pn(t,e),Nn(e);break;case 13:pn(t,e),Nn(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(Uh=tt())),a&4&&of(e);break;case 22:if(x=n!==null&&n.memoizedState!==null,e.mode&1?(wt=(f=wt)||x,pn(t,e),wt=f):pn(t,e),Nn(e),a&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!x&&e.mode&1)for(pe=e,x=e.child;x!==null;){for(y=pe=x;pe!==null;){switch(v=pe,_=v.child,v.tag){case 0:case 11:case 14:case 15:so(4,v,v.return);break;case 1:Hi(v,v.return);var w=v.stateNode;if(typeof w.componentWillUnmount=="function"){a=v,n=v.return;try{t=a,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(N){Xe(a,n,N)}}break;case 5:Hi(v,v.return);break;case 22:if(v.memoizedState!==null){lf(y);continue}}_!==null?(_.return=v,pe=_):lf(y)}x=x.sibling}e:for(x=null,y=e;;){if(y.tag===5){if(x===null){x=y;try{o=y.stateNode,f?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(h=y.stateNode,u=y.memoizedProps.style,d=u!=null&&u.hasOwnProperty("display")?u.display:null,h.style.display=Wg("display",d))}catch(N){Xe(e,e.return,N)}}}else if(y.tag===6){if(x===null)try{y.stateNode.nodeValue=f?"":y.memoizedProps}catch(N){Xe(e,e.return,N)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===e)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break e;for(;y.sibling===null;){if(y.return===null||y.return===e)break e;x===y&&(x=null),y=y.return}x===y&&(x=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:pn(t,e),Nn(e),a&4&&of(e);break;case 21:break;default:pn(t,e),Nn(e)}}function Nn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(px(n)){var a=n;break e}n=n.return}throw Error(se(160))}switch(a.tag){case 5:var o=a.stateNode;a.flags&32&&(mo(o,""),a.flags&=-33);var l=af(e);Lu(e,l,o);break;case 3:case 4:var d=a.stateNode.containerInfo,h=af(e);Eu(e,h,d);break;default:throw Error(se(161))}}catch(u){Xe(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Cb(e,t,n){pe=e,gx(e)}function gx(e,t,n){for(var a=(e.mode&1)!==0;pe!==null;){var o=pe,l=o.child;if(o.tag===22&&a){var d=o.memoizedState!==null||Ws;if(!d){var h=o.alternate,u=h!==null&&h.memoizedState!==null||wt;h=Ws;var f=wt;if(Ws=d,(wt=u)&&!f)for(pe=o;pe!==null;)d=pe,u=d.child,d.tag===22&&d.memoizedState!==null?cf(o):u!==null?(u.return=d,pe=u):cf(o);for(;l!==null;)pe=l,gx(l),l=l.sibling;pe=o,Ws=h,wt=f}sf(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,pe=l):sf(e)}}function sf(e){for(;pe!==null;){var t=pe;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:wt||Yl(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!wt)if(n===null)a.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:fn(t.type,n.memoizedProps);a.componentDidUpdate(o,n.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Zm(t,l,a);break;case 3:var d=t.updateQueue;if(d!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Zm(t,d,n)}break;case 5:var h=t.stateNode;if(n===null&&t.flags&4){n=h;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var x=f.memoizedState;if(x!==null){var y=x.dehydrated;y!==null&&yo(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}wt||t.flags&512&&Pu(t)}catch(v){Xe(t,t.return,v)}}if(t===e){pe=null;break}if(n=t.sibling,n!==null){n.return=t.return,pe=n;break}pe=t.return}}function lf(e){for(;pe!==null;){var t=pe;if(t===e){pe=null;break}var n=t.sibling;if(n!==null){n.return=t.return,pe=n;break}pe=t.return}}function cf(e){for(;pe!==null;){var t=pe;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Yl(4,t)}catch(u){Xe(t,n,u)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var o=t.return;try{a.componentDidMount()}catch(u){Xe(t,o,u)}}var l=t.return;try{Pu(t)}catch(u){Xe(t,l,u)}break;case 5:var d=t.return;try{Pu(t)}catch(u){Xe(t,d,u)}}}catch(u){Xe(t,t.return,u)}if(t===e){pe=null;break}var h=t.sibling;if(h!==null){h.return=t.return,pe=h;break}pe=t.return}}var zb=Math.ceil,zl=tr.ReactCurrentDispatcher,Dh=tr.ReactCurrentOwner,sn=tr.ReactCurrentBatchConfig,Ie=0,pt=null,ot=null,gt=0,Zt=0,Zi=zr(0),ct=0,Po=null,ri=0,Jl=0,Wh=0,lo=null,At=null,Uh=0,oa=1/0,Un=null,Pl=!1,Mu=null,vr=null,Us=!1,hr=null,El=0,co=0,Tu=null,rl=-1,il=0;function Et(){return Ie&6?tt():rl!==-1?rl:rl=tt()}function br(e){return e.mode&1?Ie&2&&gt!==0?gt&-gt:ub.transition!==null?(il===0&&(il=e0()),il):(e=We,e!==0||(e=window.event,e=e===void 0?16:s0(e.type)),e):1}function vn(e,t,n,a){if(50<co)throw co=0,Tu=null,Error(se(185));Bo(e,n,a),(!(Ie&2)||e!==pt)&&(e===pt&&(!(Ie&2)&&(Jl|=n),ct===4&&dr(e,gt)),Bt(e,a),n===1&&Ie===0&&!(t.mode&1)&&(oa=tt()+500,Gl&&Pr()))}function Bt(e,t){var n=e.callbackNode;u2(e,t);var a=pl(e,e===pt?gt:0);if(a===0)n!==null&&xm(n),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(n!=null&&xm(n),t===1)e.tag===0?db(df.bind(null,e)):N0(df.bind(null,e)),ob(function(){!(Ie&6)&&Pr()}),n=null;else{switch(t0(a)){case 1:n=mh;break;case 4:n=Jg;break;case 16:n=hl;break;case 536870912:n=Xg;break;default:n=hl}n=kx(n,xx.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function xx(e,t){if(rl=-1,il=0,Ie&6)throw Error(se(327));var n=e.callbackNode;if(Yi()&&e.callbackNode!==n)return null;var a=pl(e,e===pt?gt:0);if(a===0)return null;if(a&30||a&e.expiredLanes||t)t=Ll(e,a);else{t=a;var o=Ie;Ie|=2;var l=vx();(pt!==e||gt!==t)&&(Un=null,oa=tt()+500,Kr(e,t));do try{Lb();break}catch(h){yx(e,h)}while(!0);Ch(),zl.current=l,Ie=o,ot!==null?t=0:(pt=null,gt=0,t=ct)}if(t!==0){if(t===2&&(o=ou(e),o!==0&&(a=o,t=Au(e,o))),t===1)throw n=Po,Kr(e,0),dr(e,a),Bt(e,tt()),n;if(t===6)dr(e,a);else{if(o=e.current.alternate,!(a&30)&&!Pb(o)&&(t=Ll(e,a),t===2&&(l=ou(e),l!==0&&(a=l,t=Au(e,l))),t===1))throw n=Po,Kr(e,0),dr(e,a),Bt(e,tt()),n;switch(e.finishedWork=o,e.finishedLanes=a,t){case 0:case 1:throw Error(se(345));case 2:Zr(e,At,Un);break;case 3:if(dr(e,a),(a&130023424)===a&&(t=Uh+500-tt(),10<t)){if(pl(e,0)!==0)break;if(o=e.suspendedLanes,(o&a)!==a){Et(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=mu(Zr.bind(null,e,At,Un),t);break}Zr(e,At,Un);break;case 4:if(dr(e,a),(a&4194240)===a)break;for(t=e.eventTimes,o=-1;0<a;){var d=31-yn(a);l=1<<d,d=t[d],d>o&&(o=d),a&=~l}if(a=o,a=tt()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*zb(a/1960))-a,10<a){e.timeoutHandle=mu(Zr.bind(null,e,At,Un),a);break}Zr(e,At,Un);break;case 5:Zr(e,At,Un);break;default:throw Error(se(329))}}}return Bt(e,tt()),e.callbackNode===n?xx.bind(null,e):null}function Au(e,t){var n=lo;return e.current.memoizedState.isDehydrated&&(Kr(e,t).flags|=256),e=Ll(e,t),e!==2&&(t=At,At=n,t!==null&&Iu(t)),e}function Iu(e){At===null?At=e:At.push.apply(At,e)}function Pb(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var a=0;a<n.length;a++){var o=n[a],l=o.getSnapshot;o=o.value;try{if(!wn(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function dr(e,t){for(t&=~Wh,t&=~Jl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-yn(t),a=1<<n;e[n]=-1,t&=~a}}function df(e){if(Ie&6)throw Error(se(327));Yi();var t=pl(e,0);if(!(t&1))return Bt(e,tt()),null;var n=Ll(e,t);if(e.tag!==0&&n===2){var a=ou(e);a!==0&&(t=a,n=Au(e,a))}if(n===1)throw n=Po,Kr(e,0),dr(e,t),Bt(e,tt()),n;if(n===6)throw Error(se(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Zr(e,At,Un),Bt(e,tt()),null}function Hh(e,t){var n=Ie;Ie|=1;try{return e(t)}finally{Ie=n,Ie===0&&(oa=tt()+500,Gl&&Pr())}}function ii(e){hr!==null&&hr.tag===0&&!(Ie&6)&&Yi();var t=Ie;Ie|=1;var n=sn.transition,a=We;try{if(sn.transition=null,We=1,e)return e()}finally{We=a,sn.transition=n,Ie=t,!(Ie&6)&&Pr()}}function Zh(){Zt=Zi.current,qe(Zi)}function Kr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ab(n)),ot!==null)for(n=ot.return;n!==null;){var a=n;switch(kh(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&yl();break;case 3:ia(),qe(Rt),qe(St),Th();break;case 5:Mh(a);break;case 4:ia();break;case 13:qe(Qe);break;case 19:qe(Qe);break;case 10:zh(a.type._context);break;case 22:case 23:Zh()}n=n.return}if(pt=e,ot=e=wr(e.current,null),gt=Zt=t,ct=0,Po=null,Wh=Jl=ri=0,At=lo=null,qr!==null){for(t=0;t<qr.length;t++)if(n=qr[t],a=n.interleaved,a!==null){n.interleaved=null;var o=a.next,l=n.pending;if(l!==null){var d=l.next;l.next=o,a.next=d}n.pending=a}qr=null}return e}function yx(e,t){do{var n=ot;try{if(Ch(),el.current=Cl,Nl){for(var a=Ye.memoizedState;a!==null;){var o=a.queue;o!==null&&(o.pending=null),a=a.next}Nl=!1}if(ni=0,ht=lt=Ye=null,oo=!1,No=0,Dh.current=null,n===null||n.return===null){ct=1,Po=t,ot=null;break}e:{var l=e,d=n.return,h=n,u=t;if(t=gt,h.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var f=u,x=h,y=x.tag;if(!(x.mode&1)&&(y===0||y===11||y===15)){var v=x.alternate;v?(x.updateQueue=v.updateQueue,x.memoizedState=v.memoizedState,x.lanes=v.lanes):(x.updateQueue=null,x.memoizedState=null)}var _=Qm(d);if(_!==null){_.flags&=-257,Ym(_,d,h,l,t),_.mode&1&&Km(l,f,t),t=_,u=f;var w=t.updateQueue;if(w===null){var N=new Set;N.add(u),t.updateQueue=N}else w.add(u);break e}else{if(!(t&1)){Km(l,f,t),$h();break e}u=Error(se(426))}}else if(Ve&&h.mode&1){var C=Qm(d);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Ym(C,d,h,l,t),Sh(aa(u,h));break e}}l=u=aa(u,h),ct!==4&&(ct=2),lo===null?lo=[l]:lo.push(l),l=d;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var z=tx(l,u,t);Hm(l,z);break e;case 1:h=u;var b=l.type,k=l.stateNode;if(!(l.flags&128)&&(typeof b.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(vr===null||!vr.has(k)))){l.flags|=65536,t&=-t,l.lanes|=t;var S=nx(l,h,t);Hm(l,S);break e}}l=l.return}while(l!==null)}wx(n)}catch(E){t=E,ot===n&&n!==null&&(ot=n=n.return);continue}break}while(!0)}function vx(){var e=zl.current;return zl.current=Cl,e===null?Cl:e}function $h(){(ct===0||ct===3||ct===2)&&(ct=4),pt===null||!(ri&268435455)&&!(Jl&268435455)||dr(pt,gt)}function Ll(e,t){var n=Ie;Ie|=2;var a=vx();(pt!==e||gt!==t)&&(Un=null,Kr(e,t));do try{Eb();break}catch(o){yx(e,o)}while(!0);if(Ch(),Ie=n,zl.current=a,ot!==null)throw Error(se(261));return pt=null,gt=0,ct}function Eb(){for(;ot!==null;)bx(ot)}function Lb(){for(;ot!==null&&!n2();)bx(ot)}function bx(e){var t=jx(e.alternate,e,Zt);e.memoizedProps=e.pendingProps,t===null?wx(e):ot=t,Dh.current=null}function wx(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=kb(n,t),n!==null){n.flags&=32767,ot=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ct=6,ot=null;return}}else if(n=jb(n,t,Zt),n!==null){ot=n;return}if(t=t.sibling,t!==null){ot=t;return}ot=t=e}while(t!==null);ct===0&&(ct=5)}function Zr(e,t,n){var a=We,o=sn.transition;try{sn.transition=null,We=1,Mb(e,t,n,a)}finally{sn.transition=o,We=a}return null}function Mb(e,t,n,a){do Yi();while(hr!==null);if(Ie&6)throw Error(se(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(se(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(h2(e,l),e===pt&&(ot=pt=null,gt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Us||(Us=!0,kx(hl,function(){return Yi(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=sn.transition,sn.transition=null;var d=We;We=1;var h=Ie;Ie|=4,Dh.current=null,Nb(e,n),fx(n,e),J2(hu),ml=!!uu,hu=uu=null,e.current=n,Cb(n),r2(),Ie=h,We=d,sn.transition=l}else e.current=n;if(Us&&(Us=!1,hr=e,El=o),l=e.pendingLanes,l===0&&(vr=null),o2(n.stateNode),Bt(e,tt()),t!==null)for(a=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],a(o.value,{componentStack:o.stack,digest:o.digest});if(Pl)throw Pl=!1,e=Mu,Mu=null,e;return El&1&&e.tag!==0&&Yi(),l=e.pendingLanes,l&1?e===Tu?co++:(co=0,Tu=e):co=0,Pr(),null}function Yi(){if(hr!==null){var e=t0(El),t=sn.transition,n=We;try{if(sn.transition=null,We=16>e?16:e,hr===null)var a=!1;else{if(e=hr,hr=null,El=0,Ie&6)throw Error(se(331));var o=Ie;for(Ie|=4,pe=e.current;pe!==null;){var l=pe,d=l.child;if(pe.flags&16){var h=l.deletions;if(h!==null){for(var u=0;u<h.length;u++){var f=h[u];for(pe=f;pe!==null;){var x=pe;switch(x.tag){case 0:case 11:case 15:so(8,x,l)}var y=x.child;if(y!==null)y.return=x,pe=y;else for(;pe!==null;){x=pe;var v=x.sibling,_=x.return;if(hx(x),x===f){pe=null;break}if(v!==null){v.return=_,pe=v;break}pe=_}}}var w=l.alternate;if(w!==null){var N=w.child;if(N!==null){w.child=null;do{var C=N.sibling;N.sibling=null,N=C}while(N!==null)}}pe=l}}if(l.subtreeFlags&2064&&d!==null)d.return=l,pe=d;else e:for(;pe!==null;){if(l=pe,l.flags&2048)switch(l.tag){case 0:case 11:case 15:so(9,l,l.return)}var z=l.sibling;if(z!==null){z.return=l.return,pe=z;break e}pe=l.return}}var b=e.current;for(pe=b;pe!==null;){d=pe;var k=d.child;if(d.subtreeFlags&2064&&k!==null)k.return=d,pe=k;else e:for(d=b;pe!==null;){if(h=pe,h.flags&2048)try{switch(h.tag){case 0:case 11:case 15:Yl(9,h)}}catch(E){Xe(h,h.return,E)}if(h===d){pe=null;break e}var S=h.sibling;if(S!==null){S.return=h.return,pe=S;break e}pe=h.return}}if(Ie=o,Pr(),En&&typeof En.onPostCommitFiberRoot=="function")try{En.onPostCommitFiberRoot(Hl,e)}catch{}a=!0}return a}finally{We=n,sn.transition=t}}return!1}function uf(e,t,n){t=aa(n,t),t=tx(e,t,1),e=yr(e,t,1),t=Et(),e!==null&&(Bo(e,1,t),Bt(e,t))}function Xe(e,t,n){if(e.tag===3)uf(e,e,n);else for(;t!==null;){if(t.tag===3){uf(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(vr===null||!vr.has(a))){e=aa(n,e),e=nx(t,e,1),t=yr(t,e,1),e=Et(),t!==null&&(Bo(t,1,e),Bt(t,e));break}}t=t.return}}function Tb(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),t=Et(),e.pingedLanes|=e.suspendedLanes&n,pt===e&&(gt&n)===n&&(ct===4||ct===3&&(gt&130023424)===gt&&500>tt()-Uh?Kr(e,0):Wh|=n),Bt(e,t)}function _x(e,t){t===0&&(e.mode&1?(t=Ms,Ms<<=1,!(Ms&130023424)&&(Ms=4194304)):t=1);var n=Et();e=Jn(e,t),e!==null&&(Bo(e,t,n),Bt(e,n))}function Ab(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),_x(e,n)}function Ib(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(se(314))}a!==null&&a.delete(t),_x(e,n)}var jx;jx=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Rt.current)It=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return It=!1,_b(e,t,n);It=!!(e.flags&131072)}else It=!1,Ve&&t.flags&1048576&&C0(t,wl,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;nl(e,t),e=t.pendingProps;var o=ta(t,St.current);Qi(t,n),o=Ih(null,t,a,e,o,n);var l=Rh();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ot(a)?(l=!0,vl(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Eh(t),o.updater=Ql,t.stateNode=o,o._reactInternals=t,wu(t,a,e,n),t=ku(null,t,a,!0,l,n)):(t.tag=0,Ve&&l&&jh(t),zt(null,t,o,n),t=t.child),t;case 16:a=t.elementType;e:{switch(nl(e,t),e=t.pendingProps,o=a._init,a=o(a._payload),t.type=a,o=t.tag=Ob(a),e=fn(a,e),o){case 0:t=ju(null,t,a,e,n);break e;case 1:t=ef(null,t,a,e,n);break e;case 11:t=Jm(null,t,a,e,n);break e;case 14:t=Xm(null,t,a,fn(a.type,e),n);break e}throw Error(se(306,a,""))}return t;case 0:return a=t.type,o=t.pendingProps,o=t.elementType===a?o:fn(a,o),ju(e,t,a,o,n);case 1:return a=t.type,o=t.pendingProps,o=t.elementType===a?o:fn(a,o),ef(e,t,a,o,n);case 3:e:{if(ox(t),e===null)throw Error(se(387));a=t.pendingProps,l=t.memoizedState,o=l.element,T0(e,t),kl(t,a,null,n);var d=t.memoizedState;if(a=d.element,l.isDehydrated)if(l={element:a,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=aa(Error(se(423)),t),t=tf(e,t,a,n,o);break e}else if(a!==o){o=aa(Error(se(424)),t),t=tf(e,t,a,n,o);break e}else for($t=xr(t.stateNode.containerInfo.firstChild),qt=t,Ve=!0,xn=null,n=L0(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(na(),a===o){t=Xn(e,t,n);break e}zt(e,t,a,n)}t=t.child}return t;case 5:return A0(t),e===null&&yu(t),a=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,d=o.children,pu(a,o)?d=null:l!==null&&pu(a,l)&&(t.flags|=32),ax(e,t),zt(e,t,d,n),t.child;case 6:return e===null&&yu(t),null;case 13:return sx(e,t,n);case 4:return Lh(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=ra(t,null,a,n):zt(e,t,a,n),t.child;case 11:return a=t.type,o=t.pendingProps,o=t.elementType===a?o:fn(a,o),Jm(e,t,a,o,n);case 7:return zt(e,t,t.pendingProps,n),t.child;case 8:return zt(e,t,t.pendingProps.children,n),t.child;case 12:return zt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(a=t.type._context,o=t.pendingProps,l=t.memoizedProps,d=o.value,Ze(_l,a._currentValue),a._currentValue=d,l!==null)if(wn(l.value,d)){if(l.children===o.children&&!Rt.current){t=Xn(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var h=l.dependencies;if(h!==null){d=l.child;for(var u=h.firstContext;u!==null;){if(u.context===a){if(l.tag===1){u=qn(-1,n&-n),u.tag=2;var f=l.updateQueue;if(f!==null){f=f.shared;var x=f.pending;x===null?u.next=u:(u.next=x.next,x.next=u),f.pending=u}}l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),vu(l.return,n,t),h.lanes|=n;break}u=u.next}}else if(l.tag===10)d=l.type===t.type?null:l.child;else if(l.tag===18){if(d=l.return,d===null)throw Error(se(341));d.lanes|=n,h=d.alternate,h!==null&&(h.lanes|=n),vu(d,n,t),d=l.sibling}else d=l.child;if(d!==null)d.return=l;else for(d=l;d!==null;){if(d===t){d=null;break}if(l=d.sibling,l!==null){l.return=d.return,d=l;break}d=d.return}l=d}zt(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,a=t.pendingProps.children,Qi(t,n),o=cn(o),a=a(o),t.flags|=1,zt(e,t,a,n),t.child;case 14:return a=t.type,o=fn(a,t.pendingProps),o=fn(a.type,o),Xm(e,t,a,o,n);case 15:return rx(e,t,t.type,t.pendingProps,n);case 17:return a=t.type,o=t.pendingProps,o=t.elementType===a?o:fn(a,o),nl(e,t),t.tag=1,Ot(a)?(e=!0,vl(t)):e=!1,Qi(t,n),ex(t,a,o),wu(t,a,o,n),ku(null,t,a,!0,e,n);case 19:return lx(e,t,n);case 22:return ix(e,t,n)}throw Error(se(156,t.tag))};function kx(e,t){return Yg(e,t)}function Rb(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function on(e,t,n,a){return new Rb(e,t,n,a)}function qh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ob(e){if(typeof e=="function")return qh(e)?1:0;if(e!=null){if(e=e.$$typeof,e===uh)return 11;if(e===hh)return 14}return 2}function wr(e,t){var n=e.alternate;return n===null?(n=on(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function al(e,t,n,a,o,l){var d=2;if(a=e,typeof e=="function")qh(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case Ai:return Qr(n.children,o,l,t);case dh:d=8,o|=8;break;case $d:return e=on(12,n,t,o|2),e.elementType=$d,e.lanes=l,e;case qd:return e=on(13,n,t,o),e.elementType=qd,e.lanes=l,e;case Vd:return e=on(19,n,t,o),e.elementType=Vd,e.lanes=l,e;case Ag:return Xl(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Mg:d=10;break e;case Tg:d=9;break e;case uh:d=11;break e;case hh:d=14;break e;case sr:d=16,a=null;break e}throw Error(se(130,e==null?e:typeof e,""))}return t=on(d,n,t,o),t.elementType=e,t.type=a,t.lanes=l,t}function Qr(e,t,n,a){return e=on(7,e,a,t),e.lanes=n,e}function Xl(e,t,n,a){return e=on(22,e,a,t),e.elementType=Ag,e.lanes=n,e.stateNode={isHidden:!1},e}function kd(e,t,n){return e=on(6,e,null,t),e.lanes=n,e}function Sd(e,t,n){return t=on(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Bb(e,t,n,a,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ad(0),this.expirationTimes=ad(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ad(0),this.identifierPrefix=a,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Vh(e,t,n,a,o,l,d,h,u){return e=new Bb(e,t,n,h,u),t===1?(t=1,l===!0&&(t|=8)):t=0,l=on(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:a,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Eh(l),e}function Fb(e,t,n){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ti,key:a==null?null:""+a,children:e,containerInfo:t,implementation:n}}function Sx(e){if(!e)return Sr;e=e._reactInternals;e:{if(ui(e)!==e||e.tag!==1)throw Error(se(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ot(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(se(171))}if(e.tag===1){var n=e.type;if(Ot(n))return S0(e,n,t)}return t}function Nx(e,t,n,a,o,l,d,h,u){return e=Vh(n,a,!0,e,o,l,d,h,u),e.context=Sx(null),n=e.current,a=Et(),o=br(n),l=qn(a,o),l.callback=t??null,yr(n,l,o),e.current.lanes=o,Bo(e,o,a),Bt(e,a),e}function ec(e,t,n,a){var o=t.current,l=Et(),d=br(o);return n=Sx(n),t.context===null?t.context=n:t.pendingContext=n,t=qn(l,d),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=yr(o,t,d),e!==null&&(vn(e,o,d,l),Xs(e,o,d)),d}function Ml(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function hf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Gh(e,t){hf(e,t),(e=e.alternate)&&hf(e,t)}function Db(){return null}var Cx=typeof reportError=="function"?reportError:function(e){console.error(e)};function Kh(e){this._internalRoot=e}tc.prototype.render=Kh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(se(409));ec(e,t,null,null)};tc.prototype.unmount=Kh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ii(function(){ec(null,e,null,null)}),t[Yn]=null}};function tc(e){this._internalRoot=e}tc.prototype.unstable_scheduleHydration=function(e){if(e){var t=i0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<cr.length&&t!==0&&t<cr[n].priority;n++);cr.splice(n,0,e),n===0&&o0(e)}};function Qh(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function nc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function pf(){}function Wb(e,t,n,a,o){if(o){if(typeof a=="function"){var l=a;a=function(){var f=Ml(d);l.call(f)}}var d=Nx(t,a,e,0,null,!1,!1,"",pf);return e._reactRootContainer=d,e[Yn]=d.current,wo(e.nodeType===8?e.parentNode:e),ii(),d}for(;o=e.lastChild;)e.removeChild(o);if(typeof a=="function"){var h=a;a=function(){var f=Ml(u);h.call(f)}}var u=Vh(e,0,!1,null,null,!1,!1,"",pf);return e._reactRootContainer=u,e[Yn]=u.current,wo(e.nodeType===8?e.parentNode:e),ii(function(){ec(t,u,n,a)}),u}function rc(e,t,n,a,o){var l=n._reactRootContainer;if(l){var d=l;if(typeof o=="function"){var h=o;o=function(){var u=Ml(d);h.call(u)}}ec(t,d,e,o)}else d=Wb(n,t,e,o,a);return Ml(d)}n0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ja(t.pendingLanes);n!==0&&(fh(t,n|1),Bt(t,tt()),!(Ie&6)&&(oa=tt()+500,Pr()))}break;case 13:ii(function(){var a=Jn(e,1);if(a!==null){var o=Et();vn(a,e,1,o)}}),Gh(e,1)}};gh=function(e){if(e.tag===13){var t=Jn(e,134217728);if(t!==null){var n=Et();vn(t,e,134217728,n)}Gh(e,134217728)}};r0=function(e){if(e.tag===13){var t=br(e),n=Jn(e,t);if(n!==null){var a=Et();vn(n,e,t,a)}Gh(e,t)}};i0=function(){return We};a0=function(e,t){var n=We;try{return We=e,t()}finally{We=n}};ru=function(e,t,n){switch(t){case"input":if(Qd(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var o=Vl(a);if(!o)throw Error(se(90));Rg(a),Qd(a,o)}}}break;case"textarea":Bg(e,n);break;case"select":t=n.value,t!=null&&qi(e,!!n.multiple,t,!1)}};$g=Hh;qg=ii;var Ub={usingClientEntryPoint:!1,Events:[Do,Bi,Vl,Hg,Zg,Hh]},Ha={findFiberByHostInstance:$r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Hb={bundleType:Ha.bundleType,version:Ha.version,rendererPackageName:Ha.rendererPackageName,rendererConfig:Ha.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Kg(e),e===null?null:e.stateNode},findFiberByHostInstance:Ha.findFiberByHostInstance||Db,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hs.isDisabled&&Hs.supportsFiber)try{Hl=Hs.inject(Hb),En=Hs}catch{}}Gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ub;Gt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qh(t))throw Error(se(200));return Fb(e,t,null,n)};Gt.createRoot=function(e,t){if(!Qh(e))throw Error(se(299));var n=!1,a="",o=Cx;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Vh(e,1,!1,null,null,n,!1,a,o),e[Yn]=t.current,wo(e.nodeType===8?e.parentNode:e),new Kh(t)};Gt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(se(188)):(e=Object.keys(e).join(","),Error(se(268,e)));return e=Kg(t),e=e===null?null:e.stateNode,e};Gt.flushSync=function(e){return ii(e)};Gt.hydrate=function(e,t,n){if(!nc(t))throw Error(se(200));return rc(null,e,t,!0,n)};Gt.hydrateRoot=function(e,t,n){if(!Qh(e))throw Error(se(405));var a=n!=null&&n.hydratedSources||null,o=!1,l="",d=Cx;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),t=Nx(t,null,e,1,n??null,o,!1,l,d),e[Yn]=t.current,wo(e),a)for(e=0;e<a.length;e++)n=a[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new tc(t)};Gt.render=function(e,t,n){if(!nc(t))throw Error(se(200));return rc(null,e,t,!1,n)};Gt.unmountComponentAtNode=function(e){if(!nc(e))throw Error(se(40));return e._reactRootContainer?(ii(function(){rc(null,null,e,!1,function(){e._reactRootContainer=null,e[Yn]=null})}),!0):!1};Gt.unstable_batchedUpdates=Hh;Gt.unstable_renderSubtreeIntoContainer=function(e,t,n,a){if(!nc(n))throw Error(se(200));if(e==null||e._reactInternals===void 0)throw Error(se(38));return rc(e,t,n,!1,a)};Gt.version="18.3.1-next-f1338f8080-20240426";function zx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zx)}catch(e){console.error(e)}}zx(),zg.exports=Gt;var ic=zg.exports,mf=ic;Hd.createRoot=mf.createRoot,Hd.hydrateRoot=mf.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Eo(){return Eo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Eo.apply(this,arguments)}var pr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(pr||(pr={}));const ff="popstate";function Zb(e){e===void 0&&(e={});function t(a,o){let{pathname:l,search:d,hash:h}=a.location;return Ru("",{pathname:l,search:d,hash:h},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(a,o){return typeof o=="string"?o:Tl(o)}return qb(t,n,null,e)}function nt(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Yh(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function $b(){return Math.random().toString(36).substr(2,8)}function gf(e,t){return{usr:e.state,key:e.key,idx:t}}function Ru(e,t,n,a){return n===void 0&&(n=null),Eo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?fa(t):t,{state:n,key:t&&t.key||a||$b()})}function Tl(e){let{pathname:t="/",search:n="",hash:a=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),a&&a!=="#"&&(t+=a.charAt(0)==="#"?a:"#"+a),t}function fa(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let a=e.indexOf("?");a>=0&&(t.search=e.substr(a),e=e.substr(0,a)),e&&(t.pathname=e)}return t}function qb(e,t,n,a){a===void 0&&(a={});let{window:o=document.defaultView,v5Compat:l=!1}=a,d=o.history,h=pr.Pop,u=null,f=x();f==null&&(f=0,d.replaceState(Eo({},d.state,{idx:f}),""));function x(){return(d.state||{idx:null}).idx}function y(){h=pr.Pop;let C=x(),z=C==null?null:C-f;f=C,u&&u({action:h,location:N.location,delta:z})}function v(C,z){h=pr.Push;let b=Ru(N.location,C,z);f=x()+1;let k=gf(b,f),S=N.createHref(b);try{d.pushState(k,"",S)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;o.location.assign(S)}l&&u&&u({action:h,location:N.location,delta:1})}function _(C,z){h=pr.Replace;let b=Ru(N.location,C,z);f=x();let k=gf(b,f),S=N.createHref(b);d.replaceState(k,"",S),l&&u&&u({action:h,location:N.location,delta:0})}function w(C){let z=o.location.origin!=="null"?o.location.origin:o.location.href,b=typeof C=="string"?C:Tl(C);return b=b.replace(/ $/,"%20"),nt(z,"No window.location.(origin|href) available to create URL for href: "+b),new URL(b,z)}let N={get action(){return h},get location(){return e(o,d)},listen(C){if(u)throw new Error("A history only accepts one active listener");return o.addEventListener(ff,y),u=C,()=>{o.removeEventListener(ff,y),u=null}},createHref(C){return t(o,C)},createURL:w,encodeLocation(C){let z=w(C);return{pathname:z.pathname,search:z.search,hash:z.hash}},push:v,replace:_,go(C){return d.go(C)}};return N}var xf;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(xf||(xf={}));function Vb(e,t,n){return n===void 0&&(n="/"),Gb(e,t,n)}function Gb(e,t,n,a){let o=typeof t=="string"?fa(t):t,l=Jh(o.pathname||"/",n);if(l==null)return null;let d=Px(e);Kb(d);let h=null;for(let u=0;h==null&&u<d.length;++u){let f=sw(l);h=iw(d[u],f)}return h}function Px(e,t,n,a){t===void 0&&(t=[]),n===void 0&&(n=[]),a===void 0&&(a="");let o=(l,d,h)=>{let u={relativePath:h===void 0?l.path||"":h,caseSensitive:l.caseSensitive===!0,childrenIndex:d,route:l};u.relativePath.startsWith("/")&&(nt(u.relativePath.startsWith(a),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(a.length));let f=_r([a,u.relativePath]),x=n.concat(u);l.children&&l.children.length>0&&(nt(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+f+'".')),Px(l.children,t,x,f)),!(l.path==null&&!l.index)&&t.push({path:f,score:nw(f,l.index),routesMeta:x})};return e.forEach((l,d)=>{var h;if(l.path===""||!((h=l.path)!=null&&h.includes("?")))o(l,d);else for(let u of Ex(l.path))o(l,d,u)}),t}function Ex(e){let t=e.split("/");if(t.length===0)return[];let[n,...a]=t,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(a.length===0)return o?[l,""]:[l];let d=Ex(a.join("/")),h=[];return h.push(...d.map(u=>u===""?l:[l,u].join("/"))),o&&h.push(...d),h.map(u=>e.startsWith("/")&&u===""?"/":u)}function Kb(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:rw(t.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}const Qb=/^:[\w-]+$/,Yb=3,Jb=2,Xb=1,ew=10,tw=-2,yf=e=>e==="*";function nw(e,t){let n=e.split("/"),a=n.length;return n.some(yf)&&(a+=tw),t&&(a+=Jb),n.filter(o=>!yf(o)).reduce((o,l)=>o+(Qb.test(l)?Yb:l===""?Xb:ew),a)}function rw(e,t){return e.length===t.length&&e.slice(0,-1).every((a,o)=>a===t[o])?e[e.length-1]-t[t.length-1]:0}function iw(e,t,n){let{routesMeta:a}=e,o={},l="/",d=[];for(let h=0;h<a.length;++h){let u=a[h],f=h===a.length-1,x=l==="/"?t:t.slice(l.length)||"/",y=aw({path:u.relativePath,caseSensitive:u.caseSensitive,end:f},x),v=u.route;if(!y)return null;Object.assign(o,y.params),d.push({params:o,pathname:_r([l,y.pathname]),pathnameBase:hw(_r([l,y.pathnameBase])),route:v}),y.pathnameBase!=="/"&&(l=_r([l,y.pathnameBase]))}return d}function aw(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=ow(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let l=o[0],d=l.replace(/(.)\/+$/,"$1"),h=o.slice(1);return{params:a.reduce((f,x,y)=>{let{paramName:v,isOptional:_}=x;if(v==="*"){let N=h[y]||"";d=l.slice(0,l.length-N.length).replace(/(.)\/+$/,"$1")}const w=h[y];return _&&!w?f[v]=void 0:f[v]=(w||"").replace(/%2F/g,"/"),f},{}),pathname:l,pathnameBase:d,pattern:e}}function ow(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Yh(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let a=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,h,u)=>(a.push({paramName:h,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),a]}function sw(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Yh(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Jh(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=e.charAt(n);return a&&a!=="/"?null:e.slice(n)||"/"}const lw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,cw=e=>lw.test(e);function dw(e,t){t===void 0&&(t="/");let{pathname:n,search:a="",hash:o=""}=typeof e=="string"?fa(e):e,l;if(n)if(cw(n))l=n;else{if(n.includes("//")){let d=n;n=n.replace(/\/\/+/g,"/"),Yh(!1,"Pathnames cannot have embedded double slashes - normalizing "+(d+" -> "+n))}n.startsWith("/")?l=vf(n.substring(1),"/"):l=vf(n,t)}else l=t;return{pathname:l,search:pw(a),hash:mw(o)}}function vf(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Nd(e,t,n,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function uw(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Xh(e,t){let n=uw(e);return t?n.map((a,o)=>o===n.length-1?a.pathname:a.pathnameBase):n.map(a=>a.pathnameBase)}function ep(e,t,n,a){a===void 0&&(a=!1);let o;typeof e=="string"?o=fa(e):(o=Eo({},e),nt(!o.pathname||!o.pathname.includes("?"),Nd("?","pathname","search",o)),nt(!o.pathname||!o.pathname.includes("#"),Nd("#","pathname","hash",o)),nt(!o.search||!o.search.includes("#"),Nd("#","search","hash",o)));let l=e===""||o.pathname==="",d=l?"/":o.pathname,h;if(d==null)h=n;else{let y=t.length-1;if(!a&&d.startsWith("..")){let v=d.split("/");for(;v[0]==="..";)v.shift(),y-=1;o.pathname=v.join("/")}h=y>=0?t[y]:"/"}let u=dw(o,h),f=d&&d!=="/"&&d.endsWith("/"),x=(l||d===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(f||x)&&(u.pathname+="/"),u}const _r=e=>e.join("/").replace(/\/\/+/g,"/"),hw=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),pw=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,mw=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function fw(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Lx=["post","put","patch","delete"];new Set(Lx);const gw=["get",...Lx];new Set(gw);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Lo(){return Lo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Lo.apply(this,arguments)}const tp=m.createContext(null),xw=m.createContext(null),Er=m.createContext(null),ac=m.createContext(null),nr=m.createContext({outlet:null,matches:[],isDataRoute:!1}),Mx=m.createContext(null);function yw(e,t){let{relative:n}=t===void 0?{}:t;ga()||nt(!1);let{basename:a,navigator:o}=m.useContext(Er),{hash:l,pathname:d,search:h}=Ax(e,{relative:n}),u=d;return a!=="/"&&(u=d==="/"?a:_r([a,d])),o.createHref({pathname:u,search:h,hash:l})}function ga(){return m.useContext(ac)!=null}function Qt(){return ga()||nt(!1),m.useContext(ac).location}function Tx(e){m.useContext(Er).static||m.useLayoutEffect(e)}function dt(){let{isDataRoute:e}=m.useContext(nr);return e?Lw():vw()}function vw(){ga()||nt(!1);let e=m.useContext(tp),{basename:t,future:n,navigator:a}=m.useContext(Er),{matches:o}=m.useContext(nr),{pathname:l}=Qt(),d=JSON.stringify(Xh(o,n.v7_relativeSplatPath)),h=m.useRef(!1);return Tx(()=>{h.current=!0}),m.useCallback(function(f,x){if(x===void 0&&(x={}),!h.current)return;if(typeof f=="number"){a.go(f);return}let y=ep(f,JSON.parse(d),l,x.relative==="path");e==null&&t!=="/"&&(y.pathname=y.pathname==="/"?t:_r([t,y.pathname])),(x.replace?a.replace:a.push)(y,x.state,x)},[t,a,d,l,e])}function xa(){let{matches:e}=m.useContext(nr),t=e[e.length-1];return t?t.params:{}}function Ax(e,t){let{relative:n}=t===void 0?{}:t,{future:a}=m.useContext(Er),{matches:o}=m.useContext(nr),{pathname:l}=Qt(),d=JSON.stringify(Xh(o,a.v7_relativeSplatPath));return m.useMemo(()=>ep(e,JSON.parse(d),l,n==="path"),[e,d,l,n])}function bw(e,t){return ww(e,t)}function ww(e,t,n,a){ga()||nt(!1);let{navigator:o}=m.useContext(Er),{matches:l}=m.useContext(nr),d=l[l.length-1],h=d?d.params:{};d&&d.pathname;let u=d?d.pathnameBase:"/";d&&d.route;let f=Qt(),x;if(t){var y;let C=typeof t=="string"?fa(t):t;u==="/"||(y=C.pathname)!=null&&y.startsWith(u)||nt(!1),x=C}else x=f;let v=x.pathname||"/",_=v;if(u!=="/"){let C=u.replace(/^\//,"").split("/");_="/"+v.replace(/^\//,"").split("/").slice(C.length).join("/")}let w=Vb(e,{pathname:_}),N=Nw(w&&w.map(C=>Object.assign({},C,{params:Object.assign({},h,C.params),pathname:_r([u,o.encodeLocation?o.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?u:_r([u,o.encodeLocation?o.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),l,n,a);return t&&N?m.createElement(ac.Provider,{value:{location:Lo({pathname:"/",search:"",hash:"",state:null,key:"default"},x),navigationType:pr.Pop}},N):N}function _w(){let e=Ew(),t=fw(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return m.createElement(m.Fragment,null,m.createElement("h2",null,"Unexpected Application Error!"),m.createElement("h3",{style:{fontStyle:"italic"}},t),n?m.createElement("pre",{style:o},n):null,null)}const jw=m.createElement(_w,null);class kw extends m.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?m.createElement(nr.Provider,{value:this.props.routeContext},m.createElement(Mx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Sw(e){let{routeContext:t,match:n,children:a}=e,o=m.useContext(tp);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),m.createElement(nr.Provider,{value:t},a)}function Nw(e,t,n,a){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),a===void 0&&(a=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=a)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let d=e,h=(o=n)==null?void 0:o.errors;if(h!=null){let x=d.findIndex(y=>y.route.id&&(h==null?void 0:h[y.route.id])!==void 0);x>=0||nt(!1),d=d.slice(0,Math.min(d.length,x+1))}let u=!1,f=-1;if(n&&a&&a.v7_partialHydration)for(let x=0;x<d.length;x++){let y=d[x];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(f=x),y.route.id){let{loaderData:v,errors:_}=n,w=y.route.loader&&v[y.route.id]===void 0&&(!_||_[y.route.id]===void 0);if(y.route.lazy||w){u=!0,f>=0?d=d.slice(0,f+1):d=[d[0]];break}}}return d.reduceRight((x,y,v)=>{let _,w=!1,N=null,C=null;n&&(_=h&&y.route.id?h[y.route.id]:void 0,N=y.route.errorElement||jw,u&&(f<0&&v===0?(Mw("route-fallback"),w=!0,C=null):f===v&&(w=!0,C=y.route.hydrateFallbackElement||null)));let z=t.concat(d.slice(0,v+1)),b=()=>{let k;return _?k=N:w?k=C:y.route.Component?k=m.createElement(y.route.Component,null):y.route.element?k=y.route.element:k=x,m.createElement(Sw,{match:y,routeContext:{outlet:x,matches:z,isDataRoute:n!=null},children:k})};return n&&(y.route.ErrorBoundary||y.route.errorElement||v===0)?m.createElement(kw,{location:n.location,revalidation:n.revalidation,component:N,error:_,children:b(),routeContext:{outlet:null,matches:z,isDataRoute:!0}}):b()},null)}var Ix=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Ix||{}),Rx=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Rx||{});function Cw(e){let t=m.useContext(tp);return t||nt(!1),t}function zw(e){let t=m.useContext(xw);return t||nt(!1),t}function Pw(e){let t=m.useContext(nr);return t||nt(!1),t}function Ox(e){let t=Pw(),n=t.matches[t.matches.length-1];return n.route.id||nt(!1),n.route.id}function Ew(){var e;let t=m.useContext(Mx),n=zw(),a=Ox();return t!==void 0?t:(e=n.errors)==null?void 0:e[a]}function Lw(){let{router:e}=Cw(Ix.UseNavigateStable),t=Ox(Rx.UseNavigateStable),n=m.useRef(!1);return Tx(()=>{n.current=!0}),m.useCallback(function(o,l){l===void 0&&(l={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Lo({fromRouteId:t},l)))},[e,t])}const bf={};function Mw(e,t,n){bf[e]||(bf[e]=!0)}function Tw(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function sa(e){let{to:t,replace:n,state:a,relative:o}=e;ga()||nt(!1);let{future:l,static:d}=m.useContext(Er),{matches:h}=m.useContext(nr),{pathname:u}=Qt(),f=dt(),x=ep(t,Xh(h,l.v7_relativeSplatPath),u,o==="path"),y=JSON.stringify(x);return m.useEffect(()=>f(JSON.parse(y),{replace:n,state:a,relative:o}),[f,y,o,n,a]),null}function Se(e){nt(!1)}function Aw(e){let{basename:t="/",children:n=null,location:a,navigationType:o=pr.Pop,navigator:l,static:d=!1,future:h}=e;ga()&&nt(!1);let u=t.replace(/^\/*/,"/"),f=m.useMemo(()=>({basename:u,navigator:l,static:d,future:Lo({v7_relativeSplatPath:!1},h)}),[u,h,l,d]);typeof a=="string"&&(a=fa(a));let{pathname:x="/",search:y="",hash:v="",state:_=null,key:w="default"}=a,N=m.useMemo(()=>{let C=Jh(x,u);return C==null?null:{location:{pathname:C,search:y,hash:v,state:_,key:w},navigationType:o}},[u,x,y,v,_,w,o]);return N==null?null:m.createElement(Er.Provider,{value:f},m.createElement(ac.Provider,{children:n,value:N}))}function Iw(e){let{children:t,location:n}=e;return bw(Ou(t),n)}new Promise(()=>{});function Ou(e,t){t===void 0&&(t=[]);let n=[];return m.Children.forEach(e,(a,o)=>{if(!m.isValidElement(a))return;let l=[...t,o];if(a.type===m.Fragment){n.push.apply(n,Ou(a.props.children,l));return}a.type!==Se&&nt(!1),!a.props.index||!a.props.children||nt(!1);let d={id:a.props.id||l.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(d.children=Ou(a.props.children,l)),n.push(d)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bu(){return Bu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Bu.apply(this,arguments)}function Rw(e,t){if(e==null)return{};var n={},a=Object.keys(e),o,l;for(l=0;l<a.length;l++)o=a[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Ow(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Bw(e,t){return e.button===0&&(!t||t==="_self")&&!Ow(e)}function Fu(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let a=e[n];return t.concat(Array.isArray(a)?a.map(o=>[n,o]):[[n,a]])},[]))}function Fw(e,t){let n=Fu(e);return t&&t.forEach((a,o)=>{n.has(o)||t.getAll(o).forEach(l=>{n.append(o,l)})}),n}const Dw=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Ww="6";try{window.__reactRouterVersion=Ww}catch{}const Uw="startTransition",wf=Tv[Uw];function Hw(e){let{basename:t,children:n,future:a,window:o}=e,l=m.useRef();l.current==null&&(l.current=Zb({window:o,v5Compat:!0}));let d=l.current,[h,u]=m.useState({action:d.action,location:d.location}),{v7_startTransition:f}=a||{},x=m.useCallback(y=>{f&&wf?wf(()=>u(y)):u(y)},[u,f]);return m.useLayoutEffect(()=>d.listen(x),[d,x]),m.useEffect(()=>Tw(a),[a]),m.createElement(Aw,{basename:t,children:n,location:h.location,navigationType:h.action,navigator:d,future:a})}const Zw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",$w=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ge=m.forwardRef(function(t,n){let{onClick:a,relative:o,reloadDocument:l,replace:d,state:h,target:u,to:f,preventScrollReset:x,viewTransition:y}=t,v=Rw(t,Dw),{basename:_}=m.useContext(Er),w,N=!1;if(typeof f=="string"&&$w.test(f)&&(w=f,Zw))try{let k=new URL(window.location.href),S=f.startsWith("//")?new URL(k.protocol+f):new URL(f),E=Jh(S.pathname,_);S.origin===k.origin&&E!=null?f=E+S.search+S.hash:N=!0}catch{}let C=yw(f,{relative:o}),z=qw(f,{replace:d,state:h,target:u,preventScrollReset:x,relative:o,viewTransition:y});function b(k){a&&a(k),k.defaultPrevented||z(k)}return m.createElement("a",Bu({},v,{href:w||C,onClick:N||l?a:b,ref:n,target:u}))});var _f;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(_f||(_f={}));var jf;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(jf||(jf={}));function qw(e,t){let{target:n,replace:a,state:o,preventScrollReset:l,relative:d,viewTransition:h}=t===void 0?{}:t,u=dt(),f=Qt(),x=Ax(e,{relative:d});return m.useCallback(y=>{if(Bw(y,n)){y.preventDefault();let v=a!==void 0?a:Tl(f)===Tl(x);u(e,{replace:v,state:o,preventScrollReset:l,relative:d,viewTransition:h})}},[f,u,x,a,o,n,e,l,d,h])}function oc(e){let t=m.useRef(Fu(e)),n=m.useRef(!1),a=Qt(),o=m.useMemo(()=>Fw(a.search,n.current?null:t.current),[a.search]),l=dt(),d=m.useCallback((h,u)=>{const f=Fu(typeof h=="function"?h(o):h);n.current=!0,l("?"+f,u)},[l,o]);return[o,d]}var Vw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Gw=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Q=(e,t)=>{const n=m.forwardRef(({color:a="currentColor",size:o=24,strokeWidth:l=2,absoluteStrokeWidth:d,children:h,...u},f)=>m.createElement("svg",{ref:f,...Vw,width:o,height:o,stroke:a,strokeWidth:d?Number(l)*24/Number(o):l,className:`lucide lucide-${Gw(e)}`,...u},[...t.map(([x,y])=>m.createElement(x,y)),...(Array.isArray(h)?h:[h])||[]]));return n.displayName=`${e}`,n},Kw=Q("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]),Qw=Q("Archive",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]]),Yw=Q("Armchair",[["path",{d:"M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3",key:"irtipd"}],["path",{d:"M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z",key:"1e01m0"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]]),Bx=Q("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]),Jw=Q("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),Xw=Q("Baby",[["path",{d:"M9 12h.01",key:"157uk2"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"5yv0yz"}]]),Al=Q("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]),Fx=Q("Beef",[["circle",{cx:"12.5",cy:"8.5",r:"2.5",key:"9738u8"}],["path",{d:"M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z",key:"o0f6za"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5",key:"k7p6i0"}]]),e_=Q("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]),t_=Q("Bike",[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]),Dx=Q("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]),n_=Q("Briefcase",[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2",key:"eto64e"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"zwj3tp"}]]),r_=Q("Brush",[["path",{d:"m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08",key:"1styjt"}],["path",{d:"M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z",key:"z0l1mu"}]]),i_=Q("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]),a_=Q("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]),o_=Q("Candy",[["path",{d:"m9.5 7.5-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Z",key:"ue6khb"}],["path",{d:"M14 6.5v10",key:"5xnk7c"}],["path",{d:"M10 7.5v10",key:"1uew51"}],["path",{d:"m16 7 1-5 1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1",key:"b9cp6k"}],["path",{d:"m8 17-1 5-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1",key:"5lney8"}]]),Du=Q("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]),s_=Q("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]),Wx=Q("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),np=Q("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),Wu=Q("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),Ux=Q("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]),l_=Q("Church",[["path",{d:"m18 7 4 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9l4-2",key:"gy5gyo"}],["path",{d:"M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4",key:"cpkuc4"}],["path",{d:"M18 22V5l-6-3-6 3v17",key:"1hsnhq"}],["path",{d:"M12 7v5",key:"ma6bk"}],["path",{d:"M10 9h4",key:"u4k05v"}]]),c_=Q("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]),Ji=Q("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]),Hx=Q("Coffee",[["path",{d:"M17 8h1a4 4 0 1 1 0 8h-1",key:"jx4kbh"}],["path",{d:"M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z",key:"1bxrl0"}],["line",{x1:"6",x2:"6",y1:"2",y2:"4",key:"1cr9l3"}],["line",{x1:"10",x2:"10",y1:"2",y2:"4",key:"170wym"}],["line",{x1:"14",x2:"14",y1:"2",y2:"4",key:"1c5f70"}]]),d_=Q("Cookie",[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",key:"laymnq"}],["path",{d:"M8.5 8.5v.01",key:"ue8clq"}],["path",{d:"M16 15.5v.01",key:"14dtrp"}],["path",{d:"M12 12v.01",key:"u5ubse"}],["path",{d:"M11 17v.01",key:"1hyl5a"}],["path",{d:"M7 14v.01",key:"uct60s"}]]),Cd=Q("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]),u_=Q("Croissant",[["path",{d:"m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z",key:"1ozxlb"}],["path",{d:"m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83",key:"ffuyb5"}],["path",{d:"M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4",key:"osnpzi"}],["path",{d:"m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2",key:"1vubaw"}],["path",{d:"M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5",key:"wxr772"}]]),Zx=Q("Cross",[["path",{d:"M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z",key:"1t5g7j"}]]),h_=Q("CupSoda",[["path",{d:"m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8",key:"8166m8"}],["path",{d:"M5 8h14",key:"pcz4l3"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0",key:"yjz344"}],["path",{d:"m12 8 1-6h2",key:"3ybfa4"}]]),p_=Q("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]),$x=Q("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]),m_=Q("Drumstick",[["path",{d:"M15.45 15.4c-2.13.65-4.3.32-5.7-1.1-2.29-2.27-1.76-6.5 1.17-9.42 2.93-2.93 7.15-3.46 9.43-1.18 1.41 1.41 1.74 3.57 1.1 5.71-1.4-.51-3.26-.02-4.64 1.36-1.38 1.38-1.87 3.23-1.36 4.63z",key:"1o96s0"}],["path",{d:"m11.25 15.6-2.16 2.16a2.5 2.5 0 1 1-4.56 1.73 2.49 2.49 0 0 1-1.41-4.24 2.5 2.5 0 0 1 3.14-.32l2.16-2.16",key:"14vv5h"}]]),qx=Q("Dumbbell",[["path",{d:"m6.5 6.5 11 11",key:"f7oqzb"}],["path",{d:"m21 21-1-1",key:"cpc6if"}],["path",{d:"m3 3 1 1",key:"d3rpuf"}],["path",{d:"m18 22 4-4",key:"1e32o6"}],["path",{d:"m2 6 4-4",key:"189tqz"}],["path",{d:"m3 10 7-7",key:"1bxui2"}],["path",{d:"m14 21 7-7",key:"16x78n"}]]),Vx=Q("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]),Gx=Q("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),Kx=Q("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]),Qx=Q("Fish",[["path",{d:"M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z",key:"15baut"}],["path",{d:"M18 12v.5",key:"18hhni"}],["path",{d:"M16 17.93a9.77 9.77 0 0 1 0-11.86",key:"16dt7o"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33",key:"l9di03"}],["path",{d:"M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4",key:"1kjonw"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98",key:"1zlm23"}]]),Yx=Q("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]),Jx=Q("Flower2",[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",key:"3pnvol"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M12 10v12",key:"6ubwww"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z",key:"9hd38g"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z",key:"ufn41s"}]]),f_=Q("Footprints",[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",key:"1dudjm"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",key:"l2t8xc"}],["path",{d:"M16 17h4",key:"1dejxt"}],["path",{d:"M4 13h4",key:"1bwh8b"}]]),g_=Q("Fuel",[["line",{x1:"3",x2:"15",y1:"22",y2:"22",key:"xegly4"}],["line",{x1:"4",x2:"14",y1:"9",y2:"9",key:"xcnuvu"}],["path",{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18",key:"16j0yd"}],["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",key:"8ur5zv"}]]),Xx=Q("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]),ey=Q("Gem",[["path",{d:"M6 3h12l4 6-10 13L2 9Z",key:"1pcd5k"}],["path",{d:"M11 3 8 9l4 13 4-13-3-6",key:"1fcu3u"}],["path",{d:"M2 9h20",key:"16fsjt"}]]),ty=Q("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]),x_=Q("Glasses",[["circle",{cx:"6",cy:"15",r:"4",key:"vux9w4"}],["circle",{cx:"18",cy:"15",r:"4",key:"18o8ve"}],["path",{d:"M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2",key:"1ag4bs"}],["path",{d:"M2.5 13 5 7c.7-1.3 1.4-2 3-2",key:"1hm1gs"}],["path",{d:"M21.5 13 19 7c-.7-1.3-1.5-2-3-2",key:"1r31ai"}]]),ny=Q("GraduationCap",[["path",{d:"M22 10v6M2 10l10-5 10 5-10 5z",key:"1ef52a"}],["path",{d:"M6 12v5c3 3 9 3 12 0v-5",key:"1f75yj"}]]),ry=Q("Hammer",[["path",{d:"m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9",key:"1afvon"}],["path",{d:"M17.64 15 22 10.64",key:"zsji6s"}],["path",{d:"m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91",key:"lehyy1"}]]),y_=Q("HardHat",[["path",{d:"M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z",key:"1dej2m"}],["path",{d:"M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5",key:"1p9q5i"}],["path",{d:"M4 15v-3a6 6 0 0 1 6-6h0",key:"1uc279"}],["path",{d:"M14 6h0a6 6 0 0 1 6 6v3",key:"1j9mnm"}]]),v_=Q("HeartHandshake",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"12sd6o"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]]),b_=Q("HeartPulse",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"1uw2ng"}]]),jr=Q("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]),la=Q("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]),w_=Q("Hotel",[["path",{d:"M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z",key:"p9z69c"}],["path",{d:"m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16",key:"1bvcvh"}],["path",{d:"M8 7h.01",key:"1vti4s"}],["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M12 7h.01",key:"1ivr5q"}],["path",{d:"M12 11h.01",key:"z322tv"}],["path",{d:"M16 11h.01",key:"xkw8gn"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M10 22v-6.5m4 0V22",key:"16gs4s"}]]),__=Q("IceCream",[["path",{d:"m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11",key:"1v6356"}],["path",{d:"M17 7A5 5 0 0 0 7 7",key:"151p3v"}],["path",{d:"M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4",key:"1sdaij"}]]),Ft=Q("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]),j_=Q("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]),k_=Q("KeyRound",[["path",{d:"M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z",key:"167ctg"}],["circle",{cx:"16.5",cy:"7.5",r:".5",key:"1kog09"}]]),Uu=Q("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]),iy=Q("Laptop",[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]]),Il=Q("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]),Mo=Q("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]),ay=Q("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),oy=Q("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]),sc=Q("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]),sy=Q("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]),S_=Q("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),ln=Q("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),Hu=Q("Map",[["polygon",{points:"3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21",key:"ok2ie8"}],["line",{x1:"9",x2:"9",y1:"3",y2:"18",key:"w34qz5"}],["line",{x1:"15",x2:"15",y1:"6",y2:"21",key:"volv9a"}]]),N_=Q("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]),Vn=Q("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]),eo=Q("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),Rl=Q("MessageCircle",[["path",{d:"m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z",key:"v2veuj"}]]),ly=Q("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]),cy=Q("Milk",[["path",{d:"M8 2h8",key:"1ssgc1"}],["path",{d:"M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2",key:"qtp12x"}],["path",{d:"M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0",key:"ygeh44"}]]),C_=Q("MoonStar",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}],["path",{d:"M19 3v4",key:"vgv24u"}],["path",{d:"M21 5h-4",key:"1wcg1f"}]]),z_=Q("Nut",[["path",{d:"M12 4V2",key:"1k5q1u"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4",key:"1tgyif"}],["path",{d:"M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z",key:"tnsqj"}]]),Nr=Q("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]),P_=Q("Paintbrush",[["path",{d:"M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z",key:"m6k5sh"}],["path",{d:"M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7",key:"arzq70"}],["path",{d:"M14.5 17.5 4.5 15",key:"s7fvrz"}]]),Zu=Q("PawPrint",[["circle",{cx:"11",cy:"4",r:"2",key:"vol9p0"}],["circle",{cx:"18",cy:"8",r:"2",key:"17gozi"}],["circle",{cx:"20",cy:"16",r:"2",key:"1v9bxh"}],["path",{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z",key:"1ydw1z"}]]),rp=Q("Pencil",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]),E_=Q("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]),L_=Q("Plane",[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]]),M_=Q("PlugZap",[["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m18 3-4 4h6l-4 4",key:"16psg9"}]]),dy=Q("PlusCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]),lc=Q("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),T_=Q("Printer",[["polyline",{points:"6 9 6 2 18 2 18 9",key:"1306q4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["rect",{width:"12",height:"8",x:"6",y:"14",key:"5ipwut"}]]),A_=Q("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]),I_=Q("Ribbon",[["path",{d:"M17.75 9.01c-.52 2.08-1.83 3.64-3.18 5.49l-2.6 3.54-2.97 4-3.5-2.54 3.85-4.97c-1.86-2.61-2.8-3.77-3.16-5.44",key:"1njedg"}],["path",{d:"M17.75 9.01A7 7 0 0 0 6.2 9.1C6.06 8.5 6 7.82 6 7c0-3.5 2.83-5 5.98-5C15.24 2 18 3.5 18 7c0 .73-.09 1.4-.25 2.01Z",key:"10len7"}],["path",{d:"m9.35 14.53 2.64-3.31",key:"1wfi09"}],["path",{d:"m11.97 18.04 2.99 4 3.54-2.54-3.93-5",key:"1ezyge"}],["path",{d:"M14 8c0 1-1 2-2.01 3.22C11 10 10 9 10 8a2 2 0 1 1 4 0",key:"aw0zq5"}]]),R_=Q("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]),O_=Q("School",[["path",{d:"m4 6 8-4 8 4",key:"1q0ilc"}],["path",{d:"m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2",key:"1vwozw"}],["path",{d:"M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4",key:"cpkuc4"}],["path",{d:"M18 5v17",key:"1sw6gf"}],["path",{d:"M6 5v17",key:"1xfsm0"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}]]),To=Q("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]),kf=Q("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),uy=Q("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]),B_=Q("ShieldAlert",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]),$u=Q("Shirt",[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]),qu=Q("ShoppingBasket",[["path",{d:"m5 11 4-7",key:"116ra9"}],["path",{d:"m19 11-4-7",key:"cnml18"}],["path",{d:"M2 11h20",key:"3eubbj"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4",key:"1x2lvw"}],["path",{d:"m9 11 1 9",key:"1ojof7"}],["path",{d:"M4.5 15.5h15",key:"13mye1"}],["path",{d:"m15 11-1 9",key:"5wnq3a"}]]),er=Q("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]),Ol=Q("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]),Sf=Q("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]),F_=Q("Smile",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]),D_=Q("Soup",[["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z",key:"4rw317"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M19.5 12 22 6",key:"shfsr5"}],["path",{d:"M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62",key:"rpc6vp"}],["path",{d:"M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62",key:"1lf63m"}],["path",{d:"M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62",key:"97tijn"}]]),bn=Q("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]),Vu=Q("Sprout",[["path",{d:"M7 20h10",key:"e6iznv"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10",key:"161w41"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",key:"9gtqwd"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",key:"bkxnd2"}]]),Gu=Q("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]),hy=Q("Stethoscope",[["path",{d:"M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3",key:"1jd90r"}],["path",{d:"M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4",key:"126ukv"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]]),Pt=Q("Store",[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7",key:"jon5kx"}]]),py=Q("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),Bl=Q("Tag",[["path",{d:"M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z",key:"14b2ls"}],["path",{d:"M7 7h.01",key:"7u93v4"}]]),Nf=Q("Tags",[["path",{d:"M9 5H2v7l6.29 6.29c.94.94 2.48.94 3.42 0l3.58-3.58c.94-.94.94-2.48 0-3.42L9 5Z",key:"gt587u"}],["path",{d:"M6 9.01V9",key:"1flxpt"}],["path",{d:"m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19",key:"1cbfv1"}]]),Yr=Q("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]),W_=Q("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]),U_=Q("Truck",[["path",{d:"M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11",key:"hs4xqm"}],["path",{d:"M14 9h4l4 4v4c0 .6-.4 1-1 1h-2",key:"11fp61"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}]]),my=Q("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]),H_=Q("UserCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]]),Z_=Q("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]),$_=Q("UserX",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13",key:"3nzzx3"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13",key:"1swrse"}]]),Fl=Q("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),uo=Q("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),fy=Q("UtensilsCrossed",[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",key:"n7qcjb"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",key:"d0u48b"}],["path",{d:"m2.1 21.8 6.4-6.3",key:"yn04lh"}],["path",{d:"m19 5-7 7",key:"194lzd"}]]),q_=Q("Warehouse",[["path",{d:"M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z",key:"gksnxg"}],["path",{d:"M6 18h12",key:"9pbo8z"}],["path",{d:"M6 14h12",key:"4cwo0f"}],["rect",{width:"12",height:"12",x:"6",y:"10",key:"apd30q"}]]),V_=Q("Wheat",[["path",{d:"M2 22 16 8",key:"60hf96"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1rdhi6"}],["path",{d:"M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1sdzmb"}],["path",{d:"M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"eoatbi"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z",key:"19rau1"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"tc8ph9"}],["path",{d:"M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"2m8kc5"}],["path",{d:"M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"vex3ng"}]]),G_=Q("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]),K_=Q("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function gy(e,t){return function(){return e.apply(t,arguments)}}const{toString:Q_}=Object.prototype,{getPrototypeOf:ip}=Object,{iterator:cc,toStringTag:xy}=Symbol,dc=(e=>t=>{const n=Q_.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),_n=e=>(e=e.toLowerCase(),t=>dc(t)===e),uc=e=>t=>typeof t===e,{isArray:ya}=Array,ca=uc("undefined");function Uo(e){return e!==null&&!ca(e)&&e.constructor!==null&&!ca(e.constructor)&&Dt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const yy=_n("ArrayBuffer");function Y_(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&yy(e.buffer),t}const J_=uc("string"),Dt=uc("function"),vy=uc("number"),Ho=e=>e!==null&&typeof e=="object",X_=e=>e===!0||e===!1,ol=e=>{if(dc(e)!=="object")return!1;const t=ip(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(xy in e)&&!(cc in e)},e5=e=>{if(!Ho(e)||Uo(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},t5=_n("Date"),n5=_n("File"),r5=e=>!!(e&&typeof e.uri<"u"),i5=e=>e&&typeof e.getParts<"u",a5=_n("Blob"),o5=_n("FileList"),s5=e=>Ho(e)&&Dt(e.pipe);function l5(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Cf=l5(),zf=typeof Cf.FormData<"u"?Cf.FormData:void 0,c5=e=>{let t;return e&&(zf&&e instanceof zf||Dt(e.append)&&((t=dc(e))==="formdata"||t==="object"&&Dt(e.toString)&&e.toString()==="[object FormData]"))},d5=_n("URLSearchParams"),[u5,h5,p5,m5]=["ReadableStream","Request","Response","Headers"].map(_n),f5=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Zo(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let a,o;if(typeof e!="object"&&(e=[e]),ya(e))for(a=0,o=e.length;a<o;a++)t.call(null,e[a],a,e);else{if(Uo(e))return;const l=n?Object.getOwnPropertyNames(e):Object.keys(e),d=l.length;let h;for(a=0;a<d;a++)h=l[a],t.call(null,e[h],h,e)}}function by(e,t){if(Uo(e))return null;t=t.toLowerCase();const n=Object.keys(e);let a=n.length,o;for(;a-- >0;)if(o=n[a],t===o.toLowerCase())return o;return null}const Gr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,wy=e=>!ca(e)&&e!==Gr;function Ku(){const{caseless:e,skipUndefined:t}=wy(this)&&this||{},n={},a=(o,l)=>{if(l==="__proto__"||l==="constructor"||l==="prototype")return;const d=e&&by(n,l)||l;ol(n[d])&&ol(o)?n[d]=Ku(n[d],o):ol(o)?n[d]=Ku({},o):ya(o)?n[d]=o.slice():(!t||!ca(o))&&(n[d]=o)};for(let o=0,l=arguments.length;o<l;o++)arguments[o]&&Zo(arguments[o],a);return n}const g5=(e,t,n,{allOwnKeys:a}={})=>(Zo(t,(o,l)=>{n&&Dt(o)?Object.defineProperty(e,l,{value:gy(o,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,l,{value:o,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:a}),e),x5=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),y5=(e,t,n,a)=>{e.prototype=Object.create(t.prototype,a),Object.defineProperty(e.prototype,"constructor",{value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},v5=(e,t,n,a)=>{let o,l,d;const h={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),l=o.length;l-- >0;)d=o[l],(!a||a(d,e,t))&&!h[d]&&(t[d]=e[d],h[d]=!0);e=n!==!1&&ip(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},b5=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const a=e.indexOf(t,n);return a!==-1&&a===n},w5=e=>{if(!e)return null;if(ya(e))return e;let t=e.length;if(!vy(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},_5=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ip(Uint8Array)),j5=(e,t)=>{const a=(e&&e[cc]).call(e);let o;for(;(o=a.next())&&!o.done;){const l=o.value;t.call(e,l[0],l[1])}},k5=(e,t)=>{let n;const a=[];for(;(n=e.exec(t))!==null;)a.push(n);return a},S5=_n("HTMLFormElement"),N5=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,a,o){return a.toUpperCase()+o}),Pf=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),C5=_n("RegExp"),_y=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),a={};Zo(n,(o,l)=>{let d;(d=t(o,l,e))!==!1&&(a[l]=d||o)}),Object.defineProperties(e,a)},z5=e=>{_y(e,(t,n)=>{if(Dt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const a=e[n];if(Dt(a)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},P5=(e,t)=>{const n={},a=o=>{o.forEach(l=>{n[l]=!0})};return ya(e)?a(e):a(String(e).split(t)),n},E5=()=>{},L5=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function M5(e){return!!(e&&Dt(e.append)&&e[xy]==="FormData"&&e[cc])}const T5=e=>{const t=new Array(10),n=(a,o)=>{if(Ho(a)){if(t.indexOf(a)>=0)return;if(Uo(a))return a;if(!("toJSON"in a)){t[o]=a;const l=ya(a)?[]:{};return Zo(a,(d,h)=>{const u=n(d,o+1);!ca(u)&&(l[h]=u)}),t[o]=void 0,l}}return a};return n(e,0)},A5=_n("AsyncFunction"),I5=e=>e&&(Ho(e)||Dt(e))&&Dt(e.then)&&Dt(e.catch),jy=((e,t)=>e?setImmediate:t?((n,a)=>(Gr.addEventListener("message",({source:o,data:l})=>{o===Gr&&l===n&&a.length&&a.shift()()},!1),o=>{a.push(o),Gr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Dt(Gr.postMessage)),R5=typeof queueMicrotask<"u"?queueMicrotask.bind(Gr):typeof process<"u"&&process.nextTick||jy,O5=e=>e!=null&&Dt(e[cc]),q={isArray:ya,isArrayBuffer:yy,isBuffer:Uo,isFormData:c5,isArrayBufferView:Y_,isString:J_,isNumber:vy,isBoolean:X_,isObject:Ho,isPlainObject:ol,isEmptyObject:e5,isReadableStream:u5,isRequest:h5,isResponse:p5,isHeaders:m5,isUndefined:ca,isDate:t5,isFile:n5,isReactNativeBlob:r5,isReactNative:i5,isBlob:a5,isRegExp:C5,isFunction:Dt,isStream:s5,isURLSearchParams:d5,isTypedArray:_5,isFileList:o5,forEach:Zo,merge:Ku,extend:g5,trim:f5,stripBOM:x5,inherits:y5,toFlatObject:v5,kindOf:dc,kindOfTest:_n,endsWith:b5,toArray:w5,forEachEntry:j5,matchAll:k5,isHTMLForm:S5,hasOwnProperty:Pf,hasOwnProp:Pf,reduceDescriptors:_y,freezeMethods:z5,toObjectSet:P5,toCamelCase:N5,noop:E5,toFiniteNumber:L5,findKey:by,global:Gr,isContextDefined:wy,isSpecCompliantForm:M5,toJSONObject:T5,isAsyncFn:A5,isThenable:I5,setImmediate:jy,asap:R5,isIterable:O5};let be=class ky extends Error{static from(t,n,a,o,l,d){const h=new ky(t.message,n||t.code,a,o,l);return h.cause=t,h.name=t.name,t.status!=null&&h.status==null&&(h.status=t.status),d&&Object.assign(h,d),h}constructor(t,n,a,o,l){super(t),Object.defineProperty(this,"message",{value:t,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),a&&(this.config=a),o&&(this.request=o),l&&(this.response=l,this.status=l.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:q.toJSONObject(this.config),code:this.code,status:this.status}}};be.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";be.ERR_BAD_OPTION="ERR_BAD_OPTION";be.ECONNABORTED="ECONNABORTED";be.ETIMEDOUT="ETIMEDOUT";be.ERR_NETWORK="ERR_NETWORK";be.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";be.ERR_DEPRECATED="ERR_DEPRECATED";be.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";be.ERR_BAD_REQUEST="ERR_BAD_REQUEST";be.ERR_CANCELED="ERR_CANCELED";be.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";be.ERR_INVALID_URL="ERR_INVALID_URL";const B5=null;function Qu(e){return q.isPlainObject(e)||q.isArray(e)}function Sy(e){return q.endsWith(e,"[]")?e.slice(0,-2):e}function zd(e,t,n){return e?e.concat(t).map(function(o,l){return o=Sy(o),!n&&l?"["+o+"]":o}).join(n?".":""):t}function F5(e){return q.isArray(e)&&!e.some(Qu)}const D5=q.toFlatObject(q,{},null,function(t){return/^is[A-Z]/.test(t)});function hc(e,t,n){if(!q.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=q.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(N,C){return!q.isUndefined(C[N])});const a=n.metaTokens,o=n.visitor||x,l=n.dots,d=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&q.isSpecCompliantForm(t);if(!q.isFunction(o))throw new TypeError("visitor must be a function");function f(w){if(w===null)return"";if(q.isDate(w))return w.toISOString();if(q.isBoolean(w))return w.toString();if(!u&&q.isBlob(w))throw new be("Blob is not supported. Use a Buffer instead.");return q.isArrayBuffer(w)||q.isTypedArray(w)?u&&typeof Blob=="function"?new Blob([w]):Buffer.from(w):w}function x(w,N,C){let z=w;if(q.isReactNative(t)&&q.isReactNativeBlob(w))return t.append(zd(C,N,l),f(w)),!1;if(w&&!C&&typeof w=="object"){if(q.endsWith(N,"{}"))N=a?N:N.slice(0,-2),w=JSON.stringify(w);else if(q.isArray(w)&&F5(w)||(q.isFileList(w)||q.endsWith(N,"[]"))&&(z=q.toArray(w)))return N=Sy(N),z.forEach(function(k,S){!(q.isUndefined(k)||k===null)&&t.append(d===!0?zd([N],S,l):d===null?N:N+"[]",f(k))}),!1}return Qu(w)?!0:(t.append(zd(C,N,l),f(w)),!1)}const y=[],v=Object.assign(D5,{defaultVisitor:x,convertValue:f,isVisitable:Qu});function _(w,N){if(!q.isUndefined(w)){if(y.indexOf(w)!==-1)throw Error("Circular reference detected in "+N.join("."));y.push(w),q.forEach(w,function(z,b){(!(q.isUndefined(z)||z===null)&&o.call(t,z,q.isString(b)?b.trim():b,N,v))===!0&&_(z,N?N.concat(b):[b])}),y.pop()}}if(!q.isObject(e))throw new TypeError("data must be an object");return _(e),t}function Ef(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(a){return t[a]})}function ap(e,t){this._pairs=[],e&&hc(e,this,t)}const Ny=ap.prototype;Ny.append=function(t,n){this._pairs.push([t,n])};Ny.toString=function(t){const n=t?function(a){return t.call(this,a,Ef)}:Ef;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function W5(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Cy(e,t,n){if(!t)return e;const a=n&&n.encode||W5,o=q.isFunction(n)?{serialize:n}:n,l=o&&o.serialize;let d;if(l?d=l(t,o):d=q.isURLSearchParams(t)?t.toString():new ap(t,o).toString(a),d){const h=e.indexOf("#");h!==-1&&(e=e.slice(0,h)),e+=(e.indexOf("?")===-1?"?":"&")+d}return e}class Lf{constructor(){this.handlers=[]}use(t,n,a){return this.handlers.push({fulfilled:t,rejected:n,synchronous:a?a.synchronous:!1,runWhen:a?a.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){q.forEach(this.handlers,function(a){a!==null&&t(a)})}}const op={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},U5=typeof URLSearchParams<"u"?URLSearchParams:ap,H5=typeof FormData<"u"?FormData:null,Z5=typeof Blob<"u"?Blob:null,$5={isBrowser:!0,classes:{URLSearchParams:U5,FormData:H5,Blob:Z5},protocols:["http","https","file","blob","url","data"]},sp=typeof window<"u"&&typeof document<"u",Yu=typeof navigator=="object"&&navigator||void 0,q5=sp&&(!Yu||["ReactNative","NativeScript","NS"].indexOf(Yu.product)<0),V5=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",G5=sp&&window.location.href||"http://localhost",K5=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:sp,hasStandardBrowserEnv:q5,hasStandardBrowserWebWorkerEnv:V5,navigator:Yu,origin:G5},Symbol.toStringTag,{value:"Module"})),_t={...K5,...$5};function Q5(e,t){return hc(e,new _t.classes.URLSearchParams,{visitor:function(n,a,o,l){return _t.isNode&&q.isBuffer(n)?(this.append(a,n.toString("base64")),!1):l.defaultVisitor.apply(this,arguments)},...t})}function Y5(e){return q.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function J5(e){const t={},n=Object.keys(e);let a;const o=n.length;let l;for(a=0;a<o;a++)l=n[a],t[l]=e[l];return t}function zy(e){function t(n,a,o,l){let d=n[l++];if(d==="__proto__")return!0;const h=Number.isFinite(+d),u=l>=n.length;return d=!d&&q.isArray(o)?o.length:d,u?(q.hasOwnProp(o,d)?o[d]=[o[d],a]:o[d]=a,!h):((!o[d]||!q.isObject(o[d]))&&(o[d]=[]),t(n,a,o[d],l)&&q.isArray(o[d])&&(o[d]=J5(o[d])),!h)}if(q.isFormData(e)&&q.isFunction(e.entries)){const n={};return q.forEachEntry(e,(a,o)=>{t(Y5(a),o,n,0)}),n}return null}function X5(e,t,n){if(q.isString(e))try{return(t||JSON.parse)(e),q.trim(e)}catch(a){if(a.name!=="SyntaxError")throw a}return(n||JSON.stringify)(e)}const $o={transitional:op,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const a=n.getContentType()||"",o=a.indexOf("application/json")>-1,l=q.isObject(t);if(l&&q.isHTMLForm(t)&&(t=new FormData(t)),q.isFormData(t))return o?JSON.stringify(zy(t)):t;if(q.isArrayBuffer(t)||q.isBuffer(t)||q.isStream(t)||q.isFile(t)||q.isBlob(t)||q.isReadableStream(t))return t;if(q.isArrayBufferView(t))return t.buffer;if(q.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let h;if(l){if(a.indexOf("application/x-www-form-urlencoded")>-1)return Q5(t,this.formSerializer).toString();if((h=q.isFileList(t))||a.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return hc(h?{"files[]":t}:t,u&&new u,this.formSerializer)}}return l||o?(n.setContentType("application/json",!1),X5(t)):t}],transformResponse:[function(t){const n=this.transitional||$o.transitional,a=n&&n.forcedJSONParsing,o=this.responseType==="json";if(q.isResponse(t)||q.isReadableStream(t))return t;if(t&&q.isString(t)&&(a&&!this.responseType||o)){const d=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t,this.parseReviver)}catch(h){if(d)throw h.name==="SyntaxError"?be.from(h,be.ERR_BAD_RESPONSE,this,null,this.response):h}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:_t.classes.FormData,Blob:_t.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};q.forEach(["delete","get","head","post","put","patch"],e=>{$o.headers[e]={}});const ej=q.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),tj=e=>{const t={};let n,a,o;return e&&e.split(`
`).forEach(function(d){o=d.indexOf(":"),n=d.substring(0,o).trim().toLowerCase(),a=d.substring(o+1).trim(),!(!n||t[n]&&ej[n])&&(n==="set-cookie"?t[n]?t[n].push(a):t[n]=[a]:t[n]=t[n]?t[n]+", "+a:a)}),t},Mf=Symbol("internals");function Za(e){return e&&String(e).trim().toLowerCase()}function sl(e){return e===!1||e==null?e:q.isArray(e)?e.map(sl):String(e).replace(/[\r\n]+$/,"")}function nj(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let a;for(;a=n.exec(e);)t[a[1]]=a[2];return t}const rj=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Pd(e,t,n,a,o){if(q.isFunction(a))return a.call(this,t,n);if(o&&(t=n),!!q.isString(t)){if(q.isString(a))return t.indexOf(a)!==-1;if(q.isRegExp(a))return a.test(t)}}function ij(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,a)=>n.toUpperCase()+a)}function aj(e,t){const n=q.toCamelCase(" "+t);["get","set","has"].forEach(a=>{Object.defineProperty(e,a+n,{value:function(o,l,d){return this[a].call(this,t,o,l,d)},configurable:!0})})}let Wt=class{constructor(t){t&&this.set(t)}set(t,n,a){const o=this;function l(h,u,f){const x=Za(u);if(!x)throw new Error("header name must be a non-empty string");const y=q.findKey(o,x);(!y||o[y]===void 0||f===!0||f===void 0&&o[y]!==!1)&&(o[y||u]=sl(h))}const d=(h,u)=>q.forEach(h,(f,x)=>l(f,x,u));if(q.isPlainObject(t)||t instanceof this.constructor)d(t,n);else if(q.isString(t)&&(t=t.trim())&&!rj(t))d(tj(t),n);else if(q.isObject(t)&&q.isIterable(t)){let h={},u,f;for(const x of t){if(!q.isArray(x))throw TypeError("Object iterator must return a key-value pair");h[f=x[0]]=(u=h[f])?q.isArray(u)?[...u,x[1]]:[u,x[1]]:x[1]}d(h,n)}else t!=null&&l(n,t,a);return this}get(t,n){if(t=Za(t),t){const a=q.findKey(this,t);if(a){const o=this[a];if(!n)return o;if(n===!0)return nj(o);if(q.isFunction(n))return n.call(this,o,a);if(q.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Za(t),t){const a=q.findKey(this,t);return!!(a&&this[a]!==void 0&&(!n||Pd(this,this[a],a,n)))}return!1}delete(t,n){const a=this;let o=!1;function l(d){if(d=Za(d),d){const h=q.findKey(a,d);h&&(!n||Pd(a,a[h],h,n))&&(delete a[h],o=!0)}}return q.isArray(t)?t.forEach(l):l(t),o}clear(t){const n=Object.keys(this);let a=n.length,o=!1;for(;a--;){const l=n[a];(!t||Pd(this,this[l],l,t,!0))&&(delete this[l],o=!0)}return o}normalize(t){const n=this,a={};return q.forEach(this,(o,l)=>{const d=q.findKey(a,l);if(d){n[d]=sl(o),delete n[l];return}const h=t?ij(l):String(l).trim();h!==l&&delete n[l],n[h]=sl(o),a[h]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return q.forEach(this,(a,o)=>{a!=null&&a!==!1&&(n[o]=t&&q.isArray(a)?a.join(", "):a)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const a=new this(t);return n.forEach(o=>a.set(o)),a}static accessor(t){const a=(this[Mf]=this[Mf]={accessors:{}}).accessors,o=this.prototype;function l(d){const h=Za(d);a[h]||(aj(o,d),a[h]=!0)}return q.isArray(t)?t.forEach(l):l(t),this}};Wt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);q.reduceDescriptors(Wt.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(a){this[n]=a}}});q.freezeMethods(Wt);function Ed(e,t){const n=this||$o,a=t||n,o=Wt.from(a.headers);let l=a.data;return q.forEach(e,function(h){l=h.call(n,l,o.normalize(),t?t.status:void 0)}),o.normalize(),l}function Py(e){return!!(e&&e.__CANCEL__)}let qo=class extends be{constructor(t,n,a){super(t??"canceled",be.ERR_CANCELED,n,a),this.name="CanceledError",this.__CANCEL__=!0}};function Ey(e,t,n){const a=n.config.validateStatus;!n.status||!a||a(n.status)?e(n):t(new be("Request failed with status code "+n.status,[be.ERR_BAD_REQUEST,be.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function oj(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function sj(e,t){e=e||10;const n=new Array(e),a=new Array(e);let o=0,l=0,d;return t=t!==void 0?t:1e3,function(u){const f=Date.now(),x=a[l];d||(d=f),n[o]=u,a[o]=f;let y=l,v=0;for(;y!==o;)v+=n[y++],y=y%e;if(o=(o+1)%e,o===l&&(l=(l+1)%e),f-d<t)return;const _=x&&f-x;return _?Math.round(v*1e3/_):void 0}}function lj(e,t){let n=0,a=1e3/t,o,l;const d=(f,x=Date.now())=>{n=x,o=null,l&&(clearTimeout(l),l=null),e(...f)};return[(...f)=>{const x=Date.now(),y=x-n;y>=a?d(f,x):(o=f,l||(l=setTimeout(()=>{l=null,d(o)},a-y)))},()=>o&&d(o)]}const Dl=(e,t,n=3)=>{let a=0;const o=sj(50,250);return lj(l=>{const d=l.loaded,h=l.lengthComputable?l.total:void 0,u=d-a,f=o(u),x=d<=h;a=d;const y={loaded:d,total:h,progress:h?d/h:void 0,bytes:u,rate:f||void 0,estimated:f&&h&&x?(h-d)/f:void 0,event:l,lengthComputable:h!=null,[t?"download":"upload"]:!0};e(y)},n)},Tf=(e,t)=>{const n=e!=null;return[a=>t[0]({lengthComputable:n,total:e,loaded:a}),t[1]]},Af=e=>(...t)=>q.asap(()=>e(...t)),cj=_t.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,_t.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(_t.origin),_t.navigator&&/(msie|trident)/i.test(_t.navigator.userAgent)):()=>!0,dj=_t.hasStandardBrowserEnv?{write(e,t,n,a,o,l,d){if(typeof document>"u")return;const h=[`${e}=${encodeURIComponent(t)}`];q.isNumber(n)&&h.push(`expires=${new Date(n).toUTCString()}`),q.isString(a)&&h.push(`path=${a}`),q.isString(o)&&h.push(`domain=${o}`),l===!0&&h.push("secure"),q.isString(d)&&h.push(`SameSite=${d}`),document.cookie=h.join("; ")},read(e){if(typeof document>"u")return null;const t=document.cookie.match(new RegExp("(?:^|; )"+e+"=([^;]*)"));return t?decodeURIComponent(t[1]):null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function uj(e){return typeof e!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function hj(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Ly(e,t,n){let a=!uj(t);return e&&(a||n==!1)?hj(e,t):t}const If=e=>e instanceof Wt?{...e}:e;function ai(e,t){t=t||{};const n={};function a(f,x,y,v){return q.isPlainObject(f)&&q.isPlainObject(x)?q.merge.call({caseless:v},f,x):q.isPlainObject(x)?q.merge({},x):q.isArray(x)?x.slice():x}function o(f,x,y,v){if(q.isUndefined(x)){if(!q.isUndefined(f))return a(void 0,f,y,v)}else return a(f,x,y,v)}function l(f,x){if(!q.isUndefined(x))return a(void 0,x)}function d(f,x){if(q.isUndefined(x)){if(!q.isUndefined(f))return a(void 0,f)}else return a(void 0,x)}function h(f,x,y){if(y in t)return a(f,x);if(y in e)return a(void 0,f)}const u={url:l,method:l,data:l,baseURL:d,transformRequest:d,transformResponse:d,paramsSerializer:d,timeout:d,timeoutMessage:d,withCredentials:d,withXSRFToken:d,adapter:d,responseType:d,xsrfCookieName:d,xsrfHeaderName:d,onUploadProgress:d,onDownloadProgress:d,decompress:d,maxContentLength:d,maxBodyLength:d,beforeRedirect:d,transport:d,httpAgent:d,httpsAgent:d,cancelToken:d,socketPath:d,responseEncoding:d,validateStatus:h,headers:(f,x,y)=>o(If(f),If(x),y,!0)};return q.forEach(Object.keys({...e,...t}),function(x){if(x==="__proto__"||x==="constructor"||x==="prototype")return;const y=q.hasOwnProp(u,x)?u[x]:o,v=y(e[x],t[x],x);q.isUndefined(v)&&y!==h||(n[x]=v)}),n}const My=e=>{const t=ai({},e);let{data:n,withXSRFToken:a,xsrfHeaderName:o,xsrfCookieName:l,headers:d,auth:h}=t;if(t.headers=d=Wt.from(d),t.url=Cy(Ly(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),h&&d.set("Authorization","Basic "+btoa((h.username||"")+":"+(h.password?unescape(encodeURIComponent(h.password)):""))),q.isFormData(n)){if(_t.hasStandardBrowserEnv||_t.hasStandardBrowserWebWorkerEnv)d.setContentType(void 0);else if(q.isFunction(n.getHeaders)){const u=n.getHeaders(),f=["content-type","content-length"];Object.entries(u).forEach(([x,y])=>{f.includes(x.toLowerCase())&&d.set(x,y)})}}if(_t.hasStandardBrowserEnv&&(a&&q.isFunction(a)&&(a=a(t)),a||a!==!1&&cj(t.url))){const u=o&&l&&dj.read(l);u&&d.set(o,u)}return t},pj=typeof XMLHttpRequest<"u",mj=pj&&function(e){return new Promise(function(n,a){const o=My(e);let l=o.data;const d=Wt.from(o.headers).normalize();let{responseType:h,onUploadProgress:u,onDownloadProgress:f}=o,x,y,v,_,w;function N(){_&&_(),w&&w(),o.cancelToken&&o.cancelToken.unsubscribe(x),o.signal&&o.signal.removeEventListener("abort",x)}let C=new XMLHttpRequest;C.open(o.method.toUpperCase(),o.url,!0),C.timeout=o.timeout;function z(){if(!C)return;const k=Wt.from("getAllResponseHeaders"in C&&C.getAllResponseHeaders()),E={data:!h||h==="text"||h==="json"?C.responseText:C.response,status:C.status,statusText:C.statusText,headers:k,config:e,request:C};Ey(function(I){n(I),N()},function(I){a(I),N()},E),C=null}"onloadend"in C?C.onloadend=z:C.onreadystatechange=function(){!C||C.readyState!==4||C.status===0&&!(C.responseURL&&C.responseURL.indexOf("file:")===0)||setTimeout(z)},C.onabort=function(){C&&(a(new be("Request aborted",be.ECONNABORTED,e,C)),C=null)},C.onerror=function(S){const E=S&&S.message?S.message:"Network Error",P=new be(E,be.ERR_NETWORK,e,C);P.event=S||null,a(P),C=null},C.ontimeout=function(){let S=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const E=o.transitional||op;o.timeoutErrorMessage&&(S=o.timeoutErrorMessage),a(new be(S,E.clarifyTimeoutError?be.ETIMEDOUT:be.ECONNABORTED,e,C)),C=null},l===void 0&&d.setContentType(null),"setRequestHeader"in C&&q.forEach(d.toJSON(),function(S,E){C.setRequestHeader(E,S)}),q.isUndefined(o.withCredentials)||(C.withCredentials=!!o.withCredentials),h&&h!=="json"&&(C.responseType=o.responseType),f&&([v,w]=Dl(f,!0),C.addEventListener("progress",v)),u&&C.upload&&([y,_]=Dl(u),C.upload.addEventListener("progress",y),C.upload.addEventListener("loadend",_)),(o.cancelToken||o.signal)&&(x=k=>{C&&(a(!k||k.type?new qo(null,e,C):k),C.abort(),C=null)},o.cancelToken&&o.cancelToken.subscribe(x),o.signal&&(o.signal.aborted?x():o.signal.addEventListener("abort",x)));const b=oj(o.url);if(b&&_t.protocols.indexOf(b)===-1){a(new be("Unsupported protocol "+b+":",be.ERR_BAD_REQUEST,e));return}C.send(l||null)})},fj=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let a=new AbortController,o;const l=function(f){if(!o){o=!0,h();const x=f instanceof Error?f:this.reason;a.abort(x instanceof be?x:new qo(x instanceof Error?x.message:x))}};let d=t&&setTimeout(()=>{d=null,l(new be(`timeout of ${t}ms exceeded`,be.ETIMEDOUT))},t);const h=()=>{e&&(d&&clearTimeout(d),d=null,e.forEach(f=>{f.unsubscribe?f.unsubscribe(l):f.removeEventListener("abort",l)}),e=null)};e.forEach(f=>f.addEventListener("abort",l));const{signal:u}=a;return u.unsubscribe=()=>q.asap(h),u}},gj=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let a=0,o;for(;a<n;)o=a+t,yield e.slice(a,o),a=o},xj=async function*(e,t){for await(const n of yj(e))yield*gj(n,t)},yj=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:a}=await t.read();if(n)break;yield a}}finally{await t.cancel()}},Rf=(e,t,n,a)=>{const o=xj(e,t);let l=0,d,h=u=>{d||(d=!0,a&&a(u))};return new ReadableStream({async pull(u){try{const{done:f,value:x}=await o.next();if(f){h(),u.close();return}let y=x.byteLength;if(n){let v=l+=y;n(v)}u.enqueue(new Uint8Array(x))}catch(f){throw h(f),f}},cancel(u){return h(u),o.return()}},{highWaterMark:2})},Of=64*1024,{isFunction:Zs}=q,vj=(({Request:e,Response:t})=>({Request:e,Response:t}))(q.global),{ReadableStream:Bf,TextEncoder:Ff}=q.global,Df=(e,...t)=>{try{return!!e(...t)}catch{return!1}},bj=e=>{e=q.merge.call({skipUndefined:!0},vj,e);const{fetch:t,Request:n,Response:a}=e,o=t?Zs(t):typeof fetch=="function",l=Zs(n),d=Zs(a);if(!o)return!1;const h=o&&Zs(Bf),u=o&&(typeof Ff=="function"?(w=>N=>w.encode(N))(new Ff):async w=>new Uint8Array(await new n(w).arrayBuffer())),f=l&&h&&Df(()=>{let w=!1;const N=new Bf,C=new n(_t.origin,{body:N,method:"POST",get duplex(){return w=!0,"half"}}).headers.has("Content-Type");return N.cancel(),w&&!C}),x=d&&h&&Df(()=>q.isReadableStream(new a("").body)),y={stream:x&&(w=>w.body)};o&&["text","arrayBuffer","blob","formData","stream"].forEach(w=>{!y[w]&&(y[w]=(N,C)=>{let z=N&&N[w];if(z)return z.call(N);throw new be(`Response type '${w}' is not supported`,be.ERR_NOT_SUPPORT,C)})});const v=async w=>{if(w==null)return 0;if(q.isBlob(w))return w.size;if(q.isSpecCompliantForm(w))return(await new n(_t.origin,{method:"POST",body:w}).arrayBuffer()).byteLength;if(q.isArrayBufferView(w)||q.isArrayBuffer(w))return w.byteLength;if(q.isURLSearchParams(w)&&(w=w+""),q.isString(w))return(await u(w)).byteLength},_=async(w,N)=>{const C=q.toFiniteNumber(w.getContentLength());return C??v(N)};return async w=>{let{url:N,method:C,data:z,signal:b,cancelToken:k,timeout:S,onDownloadProgress:E,onUploadProgress:P,responseType:I,headers:D,withCredentials:T="same-origin",fetchOptions:R}=My(w),U=t||fetch;I=I?(I+"").toLowerCase():"text";let F=fj([b,k&&k.toAbortSignal()],S),oe=null;const ae=F&&F.unsubscribe&&(()=>{F.unsubscribe()});let re;try{if(P&&f&&C!=="get"&&C!=="head"&&(re=await _(D,z))!==0){let ne=new n(N,{method:"POST",body:z,duplex:"half"}),J;if(q.isFormData(z)&&(J=ne.headers.get("content-type"))&&D.setContentType(J),ne.body){const[te,O]=Tf(re,Dl(Af(P)));z=Rf(ne.body,Of,te,O)}}q.isString(T)||(T=T?"include":"omit");const X=l&&"credentials"in n.prototype,G={...R,signal:F,method:C.toUpperCase(),headers:D.normalize().toJSON(),body:z,duplex:"half",credentials:X?T:void 0};oe=l&&new n(N,G);let M=await(l?U(oe,R):U(N,G));const Y=x&&(I==="stream"||I==="response");if(x&&(E||Y&&ae)){const ne={};["status","statusText","headers"].forEach(H=>{ne[H]=M[H]});const J=q.toFiniteNumber(M.headers.get("content-length")),[te,O]=E&&Tf(J,Dl(Af(E),!0))||[];M=new a(Rf(M.body,Of,te,()=>{O&&O(),ae&&ae()}),ne)}I=I||"text";let Z=await y[q.findKey(y,I)||"text"](M,w);return!Y&&ae&&ae(),await new Promise((ne,J)=>{Ey(ne,J,{data:Z,headers:Wt.from(M.headers),status:M.status,statusText:M.statusText,config:w,request:oe})})}catch(X){throw ae&&ae(),X&&X.name==="TypeError"&&/Load failed|fetch/i.test(X.message)?Object.assign(new be("Network Error",be.ERR_NETWORK,w,oe,X&&X.response),{cause:X.cause||X}):be.from(X,X&&X.code,w,oe,X&&X.response)}}},wj=new Map,Ty=e=>{let t=e&&e.env||{};const{fetch:n,Request:a,Response:o}=t,l=[a,o,n];let d=l.length,h=d,u,f,x=wj;for(;h--;)u=l[h],f=x.get(u),f===void 0&&x.set(u,f=h?new Map:bj(t)),x=f;return f};Ty();const lp={http:B5,xhr:mj,fetch:{get:Ty}};q.forEach(lp,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Wf=e=>`- ${e}`,_j=e=>q.isFunction(e)||e===null||e===!1;function jj(e,t){e=q.isArray(e)?e:[e];const{length:n}=e;let a,o;const l={};for(let d=0;d<n;d++){a=e[d];let h;if(o=a,!_j(a)&&(o=lp[(h=String(a)).toLowerCase()],o===void 0))throw new be(`Unknown adapter '${h}'`);if(o&&(q.isFunction(o)||(o=o.get(t))))break;l[h||"#"+d]=o}if(!o){const d=Object.entries(l).map(([u,f])=>`adapter ${u} `+(f===!1?"is not supported by the environment":"is not available in the build"));let h=n?d.length>1?`since :
`+d.map(Wf).join(`
`):" "+Wf(d[0]):"as no adapter specified";throw new be("There is no suitable adapter to dispatch the request "+h,"ERR_NOT_SUPPORT")}return o}const Ay={getAdapter:jj,adapters:lp};function Ld(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new qo(null,e)}function Uf(e){return Ld(e),e.headers=Wt.from(e.headers),e.data=Ed.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Ay.getAdapter(e.adapter||$o.adapter,e)(e).then(function(a){return Ld(e),a.data=Ed.call(e,e.transformResponse,a),a.headers=Wt.from(a.headers),a},function(a){return Py(a)||(Ld(e),a&&a.response&&(a.response.data=Ed.call(e,e.transformResponse,a.response),a.response.headers=Wt.from(a.response.headers))),Promise.reject(a)})}const Iy="1.14.0",pc={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{pc[e]=function(a){return typeof a===e||"a"+(t<1?"n ":" ")+e}});const Hf={};pc.transitional=function(t,n,a){function o(l,d){return"[Axios v"+Iy+"] Transitional option '"+l+"'"+d+(a?". "+a:"")}return(l,d,h)=>{if(t===!1)throw new be(o(d," has been removed"+(n?" in "+n:"")),be.ERR_DEPRECATED);return n&&!Hf[d]&&(Hf[d]=!0,console.warn(o(d," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(l,d,h):!0}};pc.spelling=function(t){return(n,a)=>(console.warn(`${a} is likely a misspelling of ${t}`),!0)};function kj(e,t,n){if(typeof e!="object")throw new be("options must be an object",be.ERR_BAD_OPTION_VALUE);const a=Object.keys(e);let o=a.length;for(;o-- >0;){const l=a[o],d=t[l];if(d){const h=e[l],u=h===void 0||d(h,l,e);if(u!==!0)throw new be("option "+l+" must be "+u,be.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new be("Unknown option "+l,be.ERR_BAD_OPTION)}}const ll={assertOptions:kj,validators:pc},nn=ll.validators;let Jr=class{constructor(t){this.defaults=t||{},this.interceptors={request:new Lf,response:new Lf}}async request(t,n){try{return await this._request(t,n)}catch(a){if(a instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const l=o.stack?o.stack.replace(/^.+\n/,""):"";try{a.stack?l&&!String(a.stack).endsWith(l.replace(/^.+\n.+\n/,""))&&(a.stack+=`
`+l):a.stack=l}catch{}}throw a}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=ai(this.defaults,n);const{transitional:a,paramsSerializer:o,headers:l}=n;a!==void 0&&ll.assertOptions(a,{silentJSONParsing:nn.transitional(nn.boolean),forcedJSONParsing:nn.transitional(nn.boolean),clarifyTimeoutError:nn.transitional(nn.boolean),legacyInterceptorReqResOrdering:nn.transitional(nn.boolean)},!1),o!=null&&(q.isFunction(o)?n.paramsSerializer={serialize:o}:ll.assertOptions(o,{encode:nn.function,serialize:nn.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),ll.assertOptions(n,{baseUrl:nn.spelling("baseURL"),withXsrfToken:nn.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let d=l&&q.merge(l.common,l[n.method]);l&&q.forEach(["delete","get","head","post","put","patch","common"],w=>{delete l[w]}),n.headers=Wt.concat(d,l);const h=[];let u=!0;this.interceptors.request.forEach(function(N){if(typeof N.runWhen=="function"&&N.runWhen(n)===!1)return;u=u&&N.synchronous;const C=n.transitional||op;C&&C.legacyInterceptorReqResOrdering?h.unshift(N.fulfilled,N.rejected):h.push(N.fulfilled,N.rejected)});const f=[];this.interceptors.response.forEach(function(N){f.push(N.fulfilled,N.rejected)});let x,y=0,v;if(!u){const w=[Uf.bind(this),void 0];for(w.unshift(...h),w.push(...f),v=w.length,x=Promise.resolve(n);y<v;)x=x.then(w[y++],w[y++]);return x}v=h.length;let _=n;for(;y<v;){const w=h[y++],N=h[y++];try{_=w(_)}catch(C){N.call(this,C);break}}try{x=Uf.call(this,_)}catch(w){return Promise.reject(w)}for(y=0,v=f.length;y<v;)x=x.then(f[y++],f[y++]);return x}getUri(t){t=ai(this.defaults,t);const n=Ly(t.baseURL,t.url,t.allowAbsoluteUrls);return Cy(n,t.params,t.paramsSerializer)}};q.forEach(["delete","get","head","options"],function(t){Jr.prototype[t]=function(n,a){return this.request(ai(a||{},{method:t,url:n,data:(a||{}).data}))}});q.forEach(["post","put","patch"],function(t){function n(a){return function(l,d,h){return this.request(ai(h||{},{method:t,headers:a?{"Content-Type":"multipart/form-data"}:{},url:l,data:d}))}}Jr.prototype[t]=n(),Jr.prototype[t+"Form"]=n(!0)});let Sj=class Ry{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(l){n=l});const a=this;this.promise.then(o=>{if(!a._listeners)return;let l=a._listeners.length;for(;l-- >0;)a._listeners[l](o);a._listeners=null}),this.promise.then=o=>{let l;const d=new Promise(h=>{a.subscribe(h),l=h}).then(o);return d.cancel=function(){a.unsubscribe(l)},d},t(function(l,d,h){a.reason||(a.reason=new qo(l,d,h),n(a.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=a=>{t.abort(a)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new Ry(function(o){t=o}),cancel:t}}};function Nj(e){return function(n){return e.apply(null,n)}}function Cj(e){return q.isObject(e)&&e.isAxiosError===!0}const Ju={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Ju).forEach(([e,t])=>{Ju[t]=e});function Oy(e){const t=new Jr(e),n=gy(Jr.prototype.request,t);return q.extend(n,Jr.prototype,t,{allOwnKeys:!0}),q.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return Oy(ai(e,o))},n}const rt=Oy($o);rt.Axios=Jr;rt.CanceledError=qo;rt.CancelToken=Sj;rt.isCancel=Py;rt.VERSION=Iy;rt.toFormData=hc;rt.AxiosError=be;rt.Cancel=rt.CanceledError;rt.all=function(t){return Promise.all(t)};rt.spread=Nj;rt.isAxiosError=Cj;rt.mergeConfig=ai;rt.AxiosHeaders=Wt;rt.formToJSON=e=>zy(q.isHTMLForm(e)?new FormData(e):e);rt.getAdapter=Ay.getAdapter;rt.HttpStatusCode=Ju;rt.default=rt;const{Axios:n8,AxiosError:r8,CanceledError:i8,isCancel:a8,CancelToken:o8,VERSION:s8,all:l8,Cancel:c8,isAxiosError:d8,spread:u8,toFormData:h8,AxiosHeaders:p8,HttpStatusCode:m8,formToJSON:f8,getAdapter:g8,mergeConfig:x8}=rt;function zj(){return"/api/"}const ce=rt.create({baseURL:zj()});ce.interceptors.request.use(e=>{const t=localStorage.getItem("token");return t&&(e.headers.Authorization=`Bearer ${t}`),e});ce.interceptors.response.use(e=>e,e=>(e.response&&e.response.status===401&&(window.location.pathname==="/login"||(localStorage.removeItem("token"),localStorage.removeItem("refresh"),localStorage.removeItem("is_primary_admin"),window.location.href="/login")),Promise.reject(e)));const By=async(e,t)=>{var a,o,l,d;const n=await ce.post("users/login/",{username:e,password:t});return n.data.access&&(localStorage.setItem("token",n.data.access),localStorage.setItem("refresh",n.data.refresh),localStorage.setItem("is_verified",((a=n.data.user)==null?void 0:a.is_whatsapp_verified)??"true"),localStorage.setItem("user_type",((o=n.data.user)==null?void 0:o.user_type)||"shopper"),localStorage.setItem("user_name",((l=n.data.user)==null?void 0:l.username)||e||""),localStorage.setItem("is_primary_admin",(d=n.data.user)!=null&&d.is_primary_admin?"true":"false"),localStorage.removeItem("isGuest")),n.data},Pj=async e=>(await ce.post("users/register/",e)).data,Fy=()=>{localStorage.removeItem("token"),localStorage.removeItem("refresh"),localStorage.removeItem("user_type"),localStorage.removeItem("user_name"),localStorage.removeItem("is_verified"),localStorage.removeItem("is_primary_admin"),localStorage.removeItem("isGuest")},Ej=({isOpen:e,onClose:t,title:n,message:a,type:o="info",onConfirm:l,inputValue:d,setInputValue:h,placeholder:u="أدخل القيمة هنا...",options:f,primaryActionLabel:x,onPrimaryAction:y})=>{if(!e)return null;const v=Array.isArray(f)?f:[],_=typeof window<"u"&&o==="select"&&window.matchMedia&&window.matchMedia("(max-width: 520px)").matches&&v.length>0,w=()=>{o==="prompt"?l&&l(d):o==="select"?l&&l(null):l?l(!0):t()};return i.jsx("div",{className:"modal-overlay flex-center",children:i.jsxs("div",{className:"modal-content card animate-float",children:[i.jsxs("div",{className:"modal-header flex-center",children:[i.jsxs("div",{className:`modal-icon flex-center ${o}`,children:[o==="info"&&i.jsx(j_,{size:24}),o==="confirm"&&i.jsx(Kw,{size:24}),o==="prompt"&&i.jsx(s_,{size:24}),o==="select"&&i.jsx(er,{size:24})]}),i.jsx("h3",{children:n}),i.jsx("button",{className:"close-btn",onClick:t,children:i.jsx(K_,{size:20})})]}),i.jsxs("div",{className:"modal-body",children:[i.jsx("p",{children:a}),o==="prompt"&&i.jsx("div",{className:"input-group",style:{marginTop:"15px"},children:i.jsx("input",{type:"text",value:d,onChange:N=>h(N.target.value),placeholder:u,autoFocus:!0})}),o==="select"&&i.jsx("div",{className:"modal-select-list",style:{marginTop:14},children:v.length===0?i.jsx("div",{style:{padding:"12px 14px",borderRadius:12,background:"var(--surface, #fdfdf9)",border:"1px solid var(--border, #e8e8e8)",color:"var(--text-secondary, #666)",lineHeight:1.6,fontWeight:700},children:"لا يوجد لديك أي سلال."}):v.map(N=>i.jsxs("button",{type:"button",className:"btn-secondary",onClick:()=>l&&l(N.value),style:{width:"100%",justifyContent:"space-between",display:"flex",alignItems:"center",gap:12,padding:"12px 14px",borderRadius:12,fontWeight:900},children:[i.jsx("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:N.label}),N.badge!=null?i.jsx("span",{style:{fontWeight:800,color:"var(--text-secondary)"},children:N.badge}):null]},N.id))})]}),i.jsxs("div",{className:"modal-footer flex-center",children:[(o==="confirm"||o==="prompt")&&i.jsx("button",{className:"btn-secondary",onClick:t,children:"إلغاء"}),o==="select"&&!_&&(x||y)?i.jsxs("button",{className:"btn-primary",type:"button",onClick:y||w,style:{display:"inline-flex",gap:8,alignItems:"center",justifyContent:"center"},children:[i.jsx(lc,{size:18}),x||"سلة جديدة"]}):o==="select"?null:i.jsx("button",{className:"btn-primary",onClick:w,children:o==="confirm"||o==="prompt"?"تأكيد":"حسناً"})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        `}})]})})},Lj=async()=>{},Mj=async()=>!1,Tj=async()=>null,Aj=async()=>null,Dy=m.createContext({showAlert:Lj,showConfirm:Mj,showPrompt:Tj,showSelect:Aj}),Oe=()=>m.useContext(Dy),Ij=({children:e})=>{const[t,n]=m.useState({isOpen:!1,title:"",message:"",type:"info",onConfirm:null,inputValue:"",placeholder:"",options:[],primaryActionLabel:"",onPrimaryAction:null}),a=(u,f="تنبيه")=>new Promise(x=>{n({isOpen:!0,title:f,message:u,type:"info",onConfirm:()=>{x(!0),h()},onClose:()=>{x(!1),h()},inputValue:"",placeholder:""})}),o=(u,f="تأكيد")=>new Promise(x=>{n({isOpen:!0,title:f,message:u,type:"confirm",onConfirm:()=>{x(!0),h()},onClose:()=>{x(!1),h()},inputValue:"",placeholder:""})}),l=(u,f="",x="إدخال بيانات",y="")=>new Promise(v=>{n({isOpen:!0,title:x,message:u,type:"prompt",onConfirm:_=>{v(_),h()},onClose:()=>{v(null),h()},inputValue:y!=null?String(y):"",placeholder:f,options:[],primaryActionLabel:"",onPrimaryAction:null})}),d=(u,f="اختر",x=[],{primaryActionLabel:y="",primaryValue:v="__primary__"}={})=>new Promise(_=>{n({isOpen:!0,title:f,message:u,type:"select",options:x,primaryActionLabel:y,onPrimaryAction:()=>{_(v),h()},onConfirm:w=>{_(w),h()},onClose:()=>{_(null),h()},inputValue:"",placeholder:""})}),h=()=>{n(u=>({...u,isOpen:!1}))};return i.jsxs(Dy.Provider,{value:{showAlert:a,showConfirm:o,showPrompt:l,showSelect:d},children:[e,i.jsx(Ej,{...t,onClose:t.onClose||h,setInputValue:u=>n(f=>({...f,inputValue:u}))})]})},hi=async()=>(await ce.get("stores/categories/")).data,va=async()=>(await ce.get("stores/community/categories/")).data,mc=async(e=null)=>{const t=e!=null&&String(e).trim()!==""?`?category=${encodeURIComponent(e)}`:"";return(await ce.get(`stores/community/points/${t}`)).data},Rj=async e=>(await ce.post("stores/community/points/submit/",e,{headers:{"Content-Type":"application/json"}})).data,Oj=async e=>{const t=e===""||e==null?"":`?status=${encodeURIComponent(e)}`;return(await ce.get(`stores/admin/community-points/${t}`)).data},Wy=async e=>(await ce.post("stores/admin/community-points/",e,{headers:{"Content-Type":"application/json"}})).data,Bj=async(e,t,n="")=>{const a={action:t};return n&&(a.rejection_reason=n),(await ce.patch(`stores/admin/community-points/${e}/moderate/`,a,{headers:{"Content-Type":"application/json"}})).data},fc=async(e,t,n=null)=>{let a=`stores/stores/?lat=${e}&lng=${t}`;return n&&(a+=`&category=${n}`),(await ce.get(a)).data},Fj=async e=>(await ce.get(`stores/stores/${e}/`)).data,Dj=async(e,t)=>{const n=Number(e),a=Number(t);return(await ce.post(`stores/stores/${n}/rate/`,{stars:a},{headers:{"Content-Type":"application/json"}})).data},Uy=async()=>(await ce.get("orders/merchant-stats/")).data,cp=async()=>(await ce.get("products/merchant/products/")).data,Wj=async e=>(await ce.get(`products/merchant/products/${e}/`)).data,Uj=async e=>(await ce.post("products/merchant/products/",e)).data,Hy=async(e,t)=>(await ce.patch(`products/merchant/products/${e}/`,t)).data,Hj=async e=>(await ce.delete(`products/merchant/products/${e}/`)).data,Zj=async()=>(await ce.get("products/merchant/ads/")).data,$j=async e=>(await ce.post("products/merchant/ads/",e)).data,qj=async(e,t)=>(await ce.patch(`products/merchant/ads/${e}/`,t)).data,Vj=async e=>(await ce.delete(`products/merchant/ads/${e}/`)).data,Zy=async()=>(await ce.get("products/merchant/subscription/")).data,Gj=async()=>(await ce.get("products/merchant/subscription/renew/")).data,Kj=async e=>(await ce.post("products/merchant/subscription/renew/",e)).data,Qj=async()=>(await ce.get("products/admin/pending-counts/")).data,Yj=async e=>{const t=e===""||e==null?"":`?status=${encodeURIComponent(e)}`;return(await ce.get(`products/admin/ads/${t}`)).data},Jj=async e=>(await ce.get(`products/admin/ads/${e}/`)).data,$y=async(e,t)=>(await ce.post(`products/admin/ads/${e}/set-status/`,{status:t})).data,Xj=async e=>{const t=e===""||e==null?"":`?status=${encodeURIComponent(e)}`;return(await ce.get(`products/admin/subscription/renew/${t}`)).data},ek=async e=>(await ce.post(`products/admin/subscription/renew/${e}/approve/`)).data,tk=async e=>(await ce.post(`products/admin/subscription/renew/${e}/reject/`)).data,nk=async()=>(await ce.get("users/admin/accounts/")).data,rk=async e=>(await ce.post("users/admin/accounts/",e)).data,ik=async(e,t)=>(await ce.patch(`users/admin/accounts/${e}/`,{is_active:t})).data,ak=async()=>(await ce.get("users/admin/metrics/")).data,ok=async()=>(await ce.get("users/public/announcements/")).data,sk=async(e=null)=>{const t={};return e!=null&&String(e).trim()!==""&&(t.since_id=String(e)),(await ce.get("users/admin/notifications/",{params:t})).data},lk=async()=>(await ce.get("users/admin/announcements/")).data,ck=async e=>(await ce.post("users/admin/announcements/",{message:e})).data,dk=async e=>(await ce.delete(`users/admin/announcements/${e}/`)).data,uk=async({q:e="",from:t="",to:n="",method:a="",kind:o=""}={})=>{const l={};return e&&String(e).trim()!==""&&(l.q=String(e).trim()),t&&String(t).trim()!==""&&(l.from=String(t).trim()),n&&String(n).trim()!==""&&(l.to=String(n).trim()),a&&String(a).trim()!==""&&(l.method=String(a).trim()),o&&String(o).trim()!==""&&(l.kind=String(o).trim()),(await ce.get("products/admin/finance/transfers/",{params:l})).data},hk=async(e="",t="")=>{const n={};return e!=null&&String(e).trim()!==""&&(n.q=String(e).trim()),t!=null&&String(t).trim()!==""&&(n.user_type=String(t).trim()),(await ce.get("users/admin/users/",{params:n})).data},pk=async(e,t)=>(await ce.patch(`users/admin/users/${e}/`,{is_active:t})).data,mk=async(e,t)=>{const n={};if(e!=null&&String(e).trim()!==""&&(n.q=String(e).trim()),t!=null&&String(t).trim()!==""){const o=Number(t);Number.isFinite(o)&&o>0&&(n.category=String(o))}return(await ce.get("stores/admin/stores/",{params:n})).data},fk=async(e,t)=>(await ce.patch(`stores/admin/stores/${e}/suspend/`,{is_suspended_by_admin:t})).data,gk=async()=>(await ce.get("stores/admin/categories/")).data,xk=async({name:e,imageFile:t}={})=>{const n=new FormData;return n.append("name",e||""),t&&n.append("image",t),(await ce.post("stores/admin/categories/",n)).data},yk=async e=>(await ce.delete(`stores/admin/categories/${e}/`)).data,vk=async()=>(await ce.get("stores/admin/community/categories/")).data,bk=async({name:e,slug:t="",description_hint:n="",sort_order:a=0,imageFile:o}={})=>{const l=new FormData;return l.append("name",e||""),t&&l.append("slug",t),n&&l.append("description_hint",n),a!=null&&l.append("sort_order",String(a)),o&&l.append("image",o),(await ce.post("stores/admin/community/categories/",l)).data},wk=async e=>(await ce.delete(`stores/admin/community/categories/${e}/`)).data,qy=async()=>(await ce.get("stores/merchant/profile/")).data,_k=async e=>{const t=e instanceof FormData?{}:void 0;return(await ce.patch("stores/merchant/profile/",e,t)).data},Xi=async()=>(await ce.get("orders/carts/")).data,Vy=async e=>(await ce.get(`orders/carts/${e}/`)).data,jk=async e=>{await ce.delete(`orders/carts/${e}/`)},kk=async e=>{const t=`/api/orders/carts/share/${e}/`,n=localStorage.getItem("token");let o=await fetch(t,n?(l=>({headers:{Authorization:`Bearer ${n}`}}))():{});if(o.status===401&&n&&(o=await fetch(t)),!o.ok)throw new Error("shared cart fetch failed");return o.json()},gc=async e=>(await ce.post("orders/carts/",{name:e})).data,Sk=async(e,t)=>(await ce.patch(`orders/carts/${e}/`,t)).data,Nk=async e=>(await ce.post("users/verify-whatsapp/",{code:e})).data,Ck=async()=>(await ce.post("users/resend-otp/")).data,zk=async()=>{const e=await fetch("/api/users/app-open/",{method:"POST"});return e.ok?e.json():null},da=async(e,t,n=1,a=null)=>{const o={cart:e,quantity:n};return t!=null&&t!==""&&(o.product=t),a!=null&&a!==""&&(o.sponsored_ad=a),(await ce.post("orders/cart-items/",o)).data},Zf=async(e,t)=>(await ce.patch(`orders/cart-items/${e}/`,t)).data,Pk=async e=>{await ce.delete(`orders/cart-items/${e}/`)},Gy=async(e=null)=>{const t=new URLSearchParams;if(e!=null&&e!==""){const o=Number(e);Number.isFinite(o)&&o>0&&t.set("category",String(o))}const n=t.toString()?`?${t.toString()}`:"";return(await ce.get(`products/public/ads/${n}`)).data},Ao=async()=>(await ce.get("products/user/favorites/")).data,ho=async(e,t=null)=>{const n={};return e!=null&&e!==""&&(n.product=e),t!=null&&t!==""&&(n.sponsored_ad=t),(await ce.post("products/user/favorites/",n)).data},Ky=async()=>(await ce.get("users/me/notices/")).data,Ek=async e=>(await ce.patch("users/me/username/",{username:e})).data,Lk=async({current_password:e,new_password:t})=>(await ce.post("users/me/password/",{current_password:e,new_password:t})).data,Wl=async e=>(await ce.delete(`products/user/favorites/${e}/`)).data,Qy=async()=>(await ce.get("products/user/store-favorites/")).data,Mk=async e=>(await ce.post("products/user/store-favorites/",{store:e})).data,Yy=async e=>(await ce.delete(`products/user/store-favorites/${e}/`)).data,Jy=m.createContext({pendingAds:0,pendingRenewals:0,pendingCommunityPoints:0,pendingTotal:0,refresh:async()=>{},loading:!1});function ba(){return m.useContext(Jy)}function Tk({children:e}){const{pathname:t}=Qt(),[n,a]=m.useState(0),[o,l]=m.useState(0),[d,h]=m.useState(0),[u,f]=m.useState(!1),x=m.useCallback(async()=>{if(localStorage.getItem("user_type")!=="admin"||!localStorage.getItem("token")){a(0),l(0),h(0);return}f(!0);try{const v=await Qj();a(Number(v==null?void 0:v.pending_ads)||0),l(Number(v==null?void 0:v.pending_renewals)||0),h(Number(v==null?void 0:v.pending_community_points)||0)}catch{a(0),l(0),h(0)}finally{f(!1)}},[]);m.useEffect(()=>{if(localStorage.getItem("user_type")!=="admin"||!localStorage.getItem("token")){a(0),l(0),h(0);return}x()},[t,x]),m.useEffect(()=>{const v=()=>{document.visibilityState==="visible"&&localStorage.getItem("user_type")==="admin"&&localStorage.getItem("token")&&x()};return document.addEventListener("visibilitychange",v),()=>document.removeEventListener("visibilitychange",v)},[x]);const y=m.useMemo(()=>({pendingAds:n,pendingRenewals:o,pendingCommunityPoints:d,pendingTotal:n+o+d,refresh:x,loading:u}),[n,o,d,x,u]);return i.jsx(Jy.Provider,{value:y,children:e})}function Ak(e,t){return t?t==="/"?e==="/":e===t||e.startsWith(`${t}/`):!1}const Ik=({isOpen:e,toggleSidebar:t,variant:n="shopper"})=>{const a=dt(),{pathname:o}=Qt(),{showAlert:l,showConfirm:d}=Oe(),{pendingAds:h,pendingRenewals:u,pendingCommunityPoints:f,pendingTotal:x}=ba(),y=localStorage.getItem("isGuest")==="true",_=!!localStorage.getItem("token")&&!y,w=localStorage.getItem("user_type")||"shopper",N=[{icon:i.jsx(la,{size:20}),label:"الرئيسية",path:"/"},{icon:i.jsx(Bl,{size:20}),label:"عروض حصرية",path:"/offers"},{icon:i.jsx(jr,{size:20}),label:"المفضلة",path:"/favorites",protected:!0},{icon:i.jsx(qu,{size:20}),label:"السلال",path:"/carts",protected:!0},{icon:i.jsx(Mo,{size:20}),label:"الأقسام",path:"/categories"},{icon:i.jsx(bn,{size:20}),label:"الخدمات المجتمعية",path:"/services"},{icon:i.jsx(E_,{size:20}),label:"اتصل بنا",path:"/contact"},{kind:"section",label:"الإعدادات"},{icon:i.jsx(kf,{size:20}),label:"إعدادات الحساب",path:"/settings",protected:!0}],C=[{kind:"section",label:"إدارة النظام"},{icon:i.jsx(Il,{size:20}),label:"لوحة الإدارة",path:"/admin"},{icon:i.jsx(uo,{size:20}),label:"المستخدمون",path:"/admin/users"},{icon:i.jsx(uo,{size:20}),label:"إدارة المدراء",path:"/admin/accounts"},{icon:i.jsx(Pt,{size:20}),label:"المتاجر المشتركة",path:"/admin/stores"},{icon:i.jsx(Al,{size:20}),label:"الأرباح والتحويلات",path:"/admin/finance"},{icon:i.jsx(Mo,{size:20}),label:"إدارة الأقسام",path:"/admin/categories"},{icon:i.jsx(Vn,{size:20}),label:"إدارة الإعلانات الممولة",path:"/admin/ads"},{icon:i.jsx(Cd,{size:20}),label:"إدارة الاشتراكات",path:"/admin/subscriptions"},{icon:i.jsx(bn,{size:20}),label:"مراجعة الخدمات المجتمعية",path:"/admin/community"},{kind:"section",label:"إعدادات عامة"},{icon:i.jsx(Vn,{size:20}),label:"إعلان عام",path:"/admin/announcements"}],z=[{kind:"section",label:"إدارة النظام"},{icon:i.jsx(Il,{size:20}),label:"لوحة الإدارة",path:"/admin"},{icon:i.jsx(uo,{size:20}),label:"المستخدمون",path:"/admin/users"},{icon:i.jsx(Vn,{size:20}),label:"إدارة الإعلانات الممولة",path:"/admin/ads"},{icon:i.jsx(Cd,{size:20}),label:"إدارة الاشتراكات",path:"/admin/subscriptions"},{icon:i.jsx(bn,{size:20}),label:"مراجعة الخدمات المجتمعية",path:"/admin/community"}],b=[{kind:"section",label:"إدارة المتجر"},{icon:i.jsx(Al,{size:20}),label:"إحصائيات المتجر",path:"/merchant/dashboard",protected:!0},{icon:i.jsx(Nr,{size:20}),label:"منتجاتي",path:"/merchant/products",protected:!0},{icon:i.jsx(c_,{size:20}),label:"إعلاناتي الممولة",path:"/merchant/my-ads",protected:!0},{icon:i.jsx(dy,{size:20}),label:"طلب إعلان ممول",path:"/merchant/ads",protected:!0},{icon:i.jsx(Cd,{size:20}),label:"الاشتراك",path:"/merchant/subscription",protected:!0},{icon:i.jsx(H_,{size:20}),label:"بروفايل المتجر",path:"/merchant/profile",protected:!0},{icon:i.jsx(kf,{size:20}),label:"إعدادات المتجر",path:"/merchant/settings",protected:!0}],k=_?w==="admin"?"admin":w==="merchant"?"merchant":"shopper":"shopper",S=localStorage.getItem("is_primary_admin")==="true",E=k==="admin"?[...N,...S?C:z]:k==="merchant"?[...N,...b]:N,P=async()=>{if(!_){a("/login"),t();return}await d("تأكيد تسجيل الخروج من الحساب؟","تسجيل الخروج")&&(localStorage.removeItem("isGuest"),Fy(),a("/login"),t(),await l("تم تسجيل الخروج بنجاح.","تم"))},I=T=>T==="/admin/ads"&&h>0?h:T==="/admin/subscriptions"&&u>0?u:T==="/admin/community"&&f>0?f:null,D=(T,R)=>{R.protected&&!_&&(T.preventDefault(),l("عذراً، يجب تسجيل الدخول والتحقق من حسابك لاستخدام هذه الميزة.","الوصول محدود"),a("/login")),t()};return i.jsxs(i.Fragment,{children:[e&&i.jsx("div",{className:"sidebar-overlay",onClick:t}),i.jsxs("div",{className:`sidebar ${e?"open":""}`,children:[i.jsx("div",{className:"sidebar-header",children:i.jsxs("div",{className:"sidebar-brand",children:[i.jsx("img",{src:"/logo.png",alt:"رادار",className:"sidebar-brand-img"}),i.jsx("span",{className:"sidebar-brand-caption",children:"لوحة التنقّل"})]})}),i.jsxs("div",{className:"sidebar-menu",children:[k==="merchant"&&i.jsx("div",{className:"sidebar-role-pill sidebar-role-pill--merchant",children:"تاجر"}),k==="admin"&&i.jsx("div",{className:`sidebar-role-pill sidebar-role-pill--admin${S?" sidebar-role-pill--primary":""}`,children:localStorage.getItem("is_primary_admin")==="true"?"مدير أساسي":"مدير فرعي"}),E.map((T,R)=>{if(T.kind==="section")return i.jsx("div",{className:"sidebar-section-title",children:T.label},`sec-${R}`);const U=k==="admin"?I(T.path):null,F=Ak(o,T.path);return i.jsxs(ge,{to:T.path,className:`menu-item${F?" menu-item--active":""}`,onClick:oe=>D(oe,T),children:[i.jsx("span",{className:"menu-icon-wrap",children:T.icon}),i.jsxs("span",{className:"menu-label-row",children:[i.jsx("span",{className:"menu-label",children:T.label}),U!=null?i.jsx("span",{className:"sidebar-pending-badge",title:"طلبات قيد المراجعة",children:U>99?"99+":U}):null]})]},R)}),i.jsx("div",{className:"sidebar-footer",children:i.jsxs("button",{type:"button",className:"menu-item menu-item--logout",onClick:P,children:[i.jsx("span",{className:"menu-icon-wrap menu-icon-wrap--muted",children:_?i.jsx(sy,{size:20}):i.jsx(sc,{size:20})}),i.jsx("span",{className:`menu-label menu-label--logout${_?" menu-label--danger":""}`,children:_?"تسجيل الخروج":"تسجيل الدخول"})]})})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        `}})]})]})};function Vo({maxWaitMs:e=2e4,goodEnoughM:t=95}={}){return new Promise((n,a)=>{if(!navigator.geolocation){a(new Error("unsupported"));return}let o=null,l=!1,d=null;const h=f=>{if(!l){if(l=!0,d!=null&&navigator.geolocation.clearWatch(d),clearTimeout(u),o){n(o);return}a(f||new Error("no fix"))}};d=navigator.geolocation.watchPosition(f=>{const x=f.coords.accuracy,y=Number.isFinite(x)?x:999999,v={latitude:f.coords.latitude,longitude:f.coords.longitude,accuracy:y};(!o||y<o.accuracy)&&(o=v),y<=t&&h(null)},f=>{f&&f.code===1&&h(f)},{enableHighAccuracy:!0,maximumAge:0});const u=setTimeout(()=>h(null),e)})}const Xy=m.createContext(null);function Rk({children:e}){const[t,n]=m.useState(null),[a,o]=m.useState(!1),[l,d]=m.useState(""),[h,u]=m.useState(0),f=m.useCallback(()=>new Promise(_=>{if(!navigator.geolocation){_(null);return}o(!0),Vo({maxWaitMs:22e3,goodEnoughM:110}).then(w=>{const N=[w.latitude,w.longitude];n(N),u(C=>C+1),o(!1),_({lat:w.latitude,lng:w.longitude,accuracyM:w.accuracy})}).catch(()=>{o(!1),_(null)})}),[]),x=m.useCallback((_,w)=>{const N=Number(_),C=Number(w);!Number.isFinite(N)||!Number.isFinite(C)||(n([N,C]),u(z=>z+1))},[]),y=m.useCallback(()=>{n(null),u(0)},[]),v=m.useMemo(()=>({userMapLocation:t,setUserMapLocation:n,setManualMapLocation:x,clearUserMapLocation:y,requestUserLocation:f,locating:a,searchQuery:l,setSearchQuery:d,locationFocusNonce:h}),[t,f,x,y,a,l,h]);return i.jsx(Xy.Provider,{value:v,children:e})}function Go(){const e=m.useContext(Xy);if(!e)throw new Error("useMapExplore must be used within MapExploreProvider");return e}const e1=m.createContext(null);function $f(){return localStorage.getItem("user_type")==="admin"&&!!localStorage.getItem("token")}const qf="admin_notifications_last_seen_id";async function Ok(e){if(!Array.isArray(e)||e.length===0||typeof window>"u")return;const t="/logo.png",n={icon:t,badge:t,lang:"ar",dir:"rtl"};try{if("serviceWorker"in navigator){const a=await navigator.serviceWorker.getRegistration();if(a!=null&&a.showNotification){for(const o of e)await a.showNotification(o.title||"رادار — إدارة",{body:o.body||"",tag:`admin-notif-${o.id}`,...n});return}}}catch{}if(!(typeof Notification>"u"||Notification.permission!=="granted"))for(const a of e)try{new Notification(a.title||"رادار — إدارة",{body:a.body||"",icon:t,tag:`admin-notif-${a.id}`})}catch{}}function Bk({children:e}){const{refresh:t}=ba(),[n,a]=m.useState([]),[o,l]=m.useState(0),[d,h]=m.useState(!1),u=m.useRef(Number(localStorage.getItem(qf)||0)),f=m.useRef(0),x=m.useMemo(()=>{const w=u.current||0;return n.filter(N=>Number(N.id)>w).length},[n]),y=m.useCallback(()=>{u.current=o||u.current||0,localStorage.setItem(qf,String(u.current||0)),a(w=>[...w])},[o]),v=m.useCallback(async()=>{if($f()){h(!0);try{const N=await sk(o||null),C=Array.isArray(N==null?void 0:N.results)?N.results:[],z=Number((N==null?void 0:N.latest_id)||0)||o||0;f.current+=1,C.length&&(a(b=>[...b,...C].slice(-120)),t==null||t(),f.current>1&&Ok(C)),l(z)}catch{}finally{h(!1)}}},[o,t]);m.useEffect(()=>{if(!$f())return;let w=!0;v();const N=window.setInterval(()=>{w&&v()},8e3);return()=>{w=!1,window.clearInterval(N)}},[v]);const _=m.useMemo(()=>({items:n,unreadCount:x,latestId:o,polling:d,markAllRead:y,pollOnce:v,lastSeenId:u.current}),[n,x,o,d,y,v]);return i.jsx(e1.Provider,{value:_,children:e})}function Fk(){return m.useContext(e1)}function Dk(){if(typeof window>"u")return!1;const e=window.navigator.userAgent||"";return/iPad|iPhone|iPod/.test(e)||e.includes("Mac")&&"ontouchend"in document}function Wk(){if(typeof window>"u")return!1;const e=window.navigator.standalone===!0,t=window.matchMedia&&window.matchMedia("(display-mode: standalone)").matches;return e||t}function Uk({className:e=""}){const{showConfirm:t,showAlert:n}=Oe(),[a,o]=m.useState(null),[l,d]=m.useState(!1),[h,u]=m.useState(!1);m.useEffect(()=>{d(Wk());const y=()=>d(!0);return window.addEventListener("appinstalled",y),()=>window.removeEventListener("appinstalled",y)},[]),m.useEffect(()=>{const y=v=>{v.preventDefault(),o(v)};return window.addEventListener("beforeinstallprompt",y),()=>window.removeEventListener("beforeinstallprompt",y)},[]);const f=m.useMemo(()=>l?"installed":a?"prompt":Dk()?"ios":"none",[l,a]);if(f==="none"||f==="installed")return null;const x=async()=>{var v;if(await t(f==="ios"?"عرض تعليمات إضافة رادار إلى الشاشة الرئيسية على آيفون/آيباد؟":"تثبيت تطبيق رادار على هذا الجهاز؟","تثبيت التطبيق")){if(f==="ios"){u(_=>!_),await n("اتبع التعليمات أسفل الزر لإضافة الموقع إلى الشاشة الرئيسية.","تلميح");return}try{(v=a==null?void 0:a.prompt)==null||v.call(a);const _=await(a==null?void 0:a.userChoice);o(null),(_==null?void 0:_.outcome)==="accepted"?(d(!0),await n("تمت الموافقة على التثبيت. أكمل الخطوة من نافذة المتصفح إن ظهرت.","تم")):await n("تم إلغاء طلب التثبيت.","تنبيه")}catch{await n("تعذر إكمال التثبيت. حاول لاحقاً أو من متصفح آخر.","خطأ")}}};return i.jsxs("div",{className:`pwa-install ${e}`.trim(),children:[i.jsxs("button",{type:"button",className:"pwa-install__btn",onClick:x,children:[i.jsx("span",{className:"pwa-install__btn-ico","aria-hidden":!0,children:f==="ios"?i.jsx(uy,{size:18,strokeWidth:2}):i.jsx(p_,{size:18,strokeWidth:2})}),i.jsx("span",{className:"pwa-install__btn-txt",children:"تثبيت التطبيق"})]}),f==="ios"&&h?i.jsxs("div",{className:"pwa-install__help",children:["على iPhone/iPad: افتح الموقع في Safari ثم اضغط زر المشاركة (Share) واختر",i.jsx("strong",{children:" “Add to Home Screen”"}),"."]}):null]})}const ze=({children:e})=>{const{pathname:t}=Qt(),n=dt(),[a]=oc(),[o,l]=m.useState(!1),{requestUserLocation:d,locating:h,searchQuery:u,setSearchQuery:f}=Go(),{showAlert:x,showConfirm:y}=Oe(),[v,_]=m.useState([]),[w,N]=m.useState(!1),[C,z]=m.useState(()=>typeof window<"u"&&window.matchMedia("(max-width: 720px)").matches),b=Fk();m.useEffect(()=>{t==="/search"&&f(a.get("q")??"")},[t,a,f]),m.useEffect(()=>{let le=!1;return ok().then(fe=>{const Me=Array.isArray(fe==null?void 0:fe.results)?fe.results:[];le||_(Me)}).catch(()=>{le||_([])}),()=>{le=!0}},[]);const k=()=>l(!o);m.useEffect(()=>{const le=window.setTimeout(()=>{window.dispatchEvent(new CustomEvent("radar-map-invalidate"))},320);return()=>window.clearTimeout(le)},[o]),m.useEffect(()=>{const le=window.matchMedia("(max-width: 720px)"),fe=()=>z(le.matches);return le.addEventListener("change",fe),()=>le.removeEventListener("change",fe)},[]),m.useEffect(()=>{if(!w||!C)return;const le=document.body.style.overflow;document.body.style.overflow="hidden";const fe=Me=>{Me.key==="Escape"&&N(!1)};return window.addEventListener("keydown",fe),()=>{document.body.style.overflow=le,window.removeEventListener("keydown",fe)}},[w,C]);const S=localStorage.getItem("isGuest")==="true",P=!!localStorage.getItem("token")&&!S,I=localStorage.getItem("user_name")||"",D=localStorage.getItem("user_type")||"shopper",T=P&&D==="admin",R=localStorage.getItem("is_primary_admin")==="true",{pendingTotal:U}=ba(),F=D==="admin"?I||(R?"مدير أساسي":"مدير فرعي"):I||(P?"حسابي":""),oe=P&&D==="merchant"?"merchant":P&&D==="admin"?"admin":"shopper",ae=P&&D==="admin"&&t.startsWith("/admin"),re=t==="/map",X=t==="/register"||t==="/login",G=t==="/register"||t==="/login",M=t==="/stores",Y=t==="/admin",Z=t==="/admin/stores",ne=t==="/admin/ads",J=t==="/admin/users",te=t!=="/",O=!ae,H=m.useCallback(()=>{if(typeof window<"u"&&window.history.length>1){n(-1);return}if(t.startsWith("/admin")){n("/admin");return}if(t.startsWith("/merchant")){n("/merchant/dashboard");return}n("/")},[n,t]);m.useEffect(()=>{N(!1)},[t]);const V=T&&b&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"admin-notifs-pop__head",children:[i.jsx("strong",{children:"الإشعارات"}),i.jsx("button",{type:"button",className:"btn-toggle",onClick:async()=>{var fe;if(await y("تحديث قائمة إشعارات الإدارة؟","تحديث"))try{await Promise.resolve((fe=b.pollOnce)==null?void 0:fe.call(b)),await x("تم تحديث القائمة.","تم")}catch{await x("تعذر التحديث. حاول لاحقاً.","خطأ")}},children:"تحديث"})]}),i.jsxs("div",{className:"admin-notifs-list",children:[(b.items||[]).slice().reverse().slice(0,12).map(le=>i.jsxs("div",{className:"admin-notifs-item",children:[i.jsx("div",{className:"admin-notifs-item__title",children:le.title}),le.body?i.jsx("div",{className:"admin-notifs-item__body",children:le.body}):null,i.jsxs("div",{className:"admin-notifs-item__meta",children:[i.jsx("span",{children:le.event_type_label||le.event_type}),i.jsx("span",{className:"muted small",children:new Date(le.created_at).toLocaleString("ar")})]})]},le.id)),!b.items||b.items.length===0?i.jsx("div",{className:"muted small",style:{padding:10},children:"لا إشعارات بعد."}):null]})]});return i.jsxs("div",{className:`layout-container${o?" sidebar-open":""}${t==="/map"?" layout-container--map":""}`,dir:"rtl",lang:"ar",children:[X?null:i.jsxs("header",{className:`main-header main-header--market${O?" main-header--shopper-market":""}${t==="/"?" main-header--home":""}`,children:[i.jsxs("div",{className:"main-header__primary",children:[i.jsxs("div",{className:"header-right",children:[te&&!X?i.jsx("button",{type:"button",className:"header-back-btn",onClick:H,"aria-label":"رجوع للخلف",title:"رجوع",children:i.jsx(Wu,{size:22,strokeWidth:2.25,"aria-hidden":!0})}):null,i.jsx(ge,{to:"/",className:"brand-block brand-block--toolbar",title:"رادار — الرئيسية",children:i.jsx("img",{className:"brand-block-logo brand-block-logo--toolbar",src:"/logo.png",alt:"رادار"})}),i.jsxs("div",{className:"header-user-pill",title:P?F:"زائر","aria-label":"حالة المستخدم",children:[i.jsx(Fl,{size:18,strokeWidth:1.85,"aria-hidden":!0}),i.jsx("span",{className:"header-user-pill__name",children:P?F:"زائر"})]})]}),i.jsx("div",{className:"header-center",children:i.jsx(Uk,{})}),i.jsxs("div",{className:"header-left",children:[T&&b?i.jsxs("div",{className:"admin-notifs",children:[i.jsxs("button",{type:"button",className:"admin-notifs-btn","aria-label":"إشعارات الإدارة",title:"إشعارات الإدارة","aria-expanded":w,onClick:le=>{le.stopPropagation(),N(fe=>{var je;const Me=!fe;return Me&&((je=b.markAllRead)==null||je.call(b)),Me}),typeof window<"u"&&"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission().catch(()=>{})},children:[i.jsx(e_,{size:20,strokeWidth:2,"aria-hidden":!0}),b.unreadCount>0?i.jsx("span",{className:"admin-notifs-badge",children:b.unreadCount>99?"99+":b.unreadCount}):null]}),!C&&w?i.jsx("div",{className:"admin-notifs-pop admin-notifs-pop--dropdown",role:"dialog","aria-modal":"true","aria-label":"إشعارات الإدارة",children:V}):null,C&&w&&typeof document<"u"&&ic.createPortal(i.jsxs(i.Fragment,{children:[i.jsx("button",{type:"button",className:"admin-notifs-backdrop","aria-label":"إغلاق الإشعارات",onClick:()=>N(!1)}),i.jsxs("div",{className:"admin-notifs-sheet",role:"dialog","aria-modal":"true","aria-label":"إشعارات الإدارة",onClick:le=>le.stopPropagation(),children:[i.jsx("div",{className:"admin-notifs-sheet__handle","aria-hidden":!0}),V]})]}),document.body)]}):null,P?i.jsxs("button",{type:"button",className:"header-logout-btn","aria-label":"تسجيل الخروج",title:"تسجيل الخروج",onClick:async()=>{await y("تأكيد تسجيل الخروج من الحساب؟","تسجيل الخروج")&&(localStorage.removeItem("isGuest"),Fy(),n("/login"),await x("تم تسجيل الخروج بنجاح.","تم"))},children:[i.jsx(sy,{size:20,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{className:"header-logout-btn__txt",children:"خروج"})]}):i.jsxs(ge,{to:"/login",className:"header-logout-btn header-logout-btn--login","aria-label":"تسجيل الدخول",title:"تسجيل الدخول",children:[i.jsx(sc,{size:20,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{className:"header-logout-btn__txt",children:"دخول"})]})]})]}),!ae&&t!=="/map"?i.jsxs("div",{className:"header-mobile-search","aria-label":"بحث سريع",children:[i.jsx(ge,{to:"/categories",className:"header-mobile-search__filter","aria-label":"فلترة",children:i.jsx(Ol,{size:18,strokeWidth:2,"aria-hidden":!0})}),i.jsxs(ge,{to:u!=null&&u.trim()?`/search?q=${encodeURIComponent(u.trim())}`:"/search",className:"header-mobile-search__bar","aria-label":"فتح البحث",title:"بحث",children:[i.jsx("span",{className:"header-mobile-search__placeholder",children:"ابحث عن متجر، منتج، أو قسم…"}),i.jsx("span",{className:"header-mobile-search__ico","aria-hidden":!0,children:i.jsx(To,{size:18,strokeWidth:2})})]})]}):null,ae?i.jsxs("nav",{className:"header-nav header-nav--admin","aria-label":"تنقل لوحة الإدارة",children:[i.jsxs(ge,{to:"/admin",className:`header-nav-item${Y?" header-nav-item--active":""}`,children:[i.jsx(Il,{size:20,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{children:"لوحة"})]}),i.jsxs(ge,{to:"/admin/stores",className:`header-nav-item${Z?" header-nav-item--active":""}`,children:[i.jsx(Pt,{size:20,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{children:"متاجر"})]}),i.jsxs(ge,{to:"/admin/ads",className:`header-nav-item${ne?" header-nav-item--active":""}`,children:[i.jsx(Nf,{size:20,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{children:"إعلانات"})]}),i.jsxs(ge,{to:"/admin/users",className:`header-nav-item${J?" header-nav-item--active":""}`,children:[i.jsx(uo,{size:20,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{children:"مستخدمون"})]}),i.jsxs("button",{type:"button",className:"header-nav-item header-nav-item--menu",onClick:k,"aria-label":"القائمة",children:[i.jsx(eo,{size:20,strokeWidth:2,"aria-hidden":!0}),T&&U>0?i.jsx("span",{className:"nav-menu-badge","aria-label":`طلبات معلّقة: ${U}`,children:U>99?"99+":U}):null,i.jsx("span",{children:"القائمة"})]})]}):i.jsxs("nav",{className:"header-nav","aria-label":"التنقل",children:[i.jsxs(ge,{to:"/",className:`header-nav-item${t==="/"?" header-nav-item--active":""}`,children:[i.jsx(la,{size:20,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{children:"الرئيسية"})]}),i.jsxs(ge,{to:"/map",className:`header-nav-item${t==="/map"?" header-nav-item--active":""}`,children:[i.jsx(Hu,{size:20,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{children:"الخريطة"})]}),i.jsxs(ge,{to:"/stores",className:`header-nav-item${M?" header-nav-item--active":""}`,children:[i.jsx(Pt,{size:20,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{children:"المتاجر"})]}),i.jsxs("button",{type:"button",className:"header-nav-item header-nav-item--menu",onClick:k,"aria-label":"القائمة",children:[i.jsx(eo,{size:20,strokeWidth:2,"aria-hidden":!0}),T&&U>0?i.jsx("span",{className:"nav-menu-badge","aria-label":`طلبات معلّقة: ${U}`,children:U>99?"99+":U}):null,i.jsx("span",{children:"القائمة"})]})]})]}),!X&&t!=="/map"&&v.length>0?i.jsx("div",{className:"site-announcements",role:"region","aria-label":"إعلانات عامة",children:v.map(le=>i.jsxs("div",{className:"site-announcement",children:[i.jsx(Vn,{size:18,strokeWidth:2,"aria-hidden":!0}),i.jsx("div",{className:"site-announcement__msg",children:le.message})]},le.id))}):null,i.jsx(Ik,{isOpen:o,toggleSidebar:k,variant:oe}),i.jsxs("main",{className:`content${t==="/"?" content--home":""}${t==="/map"?" content--map":""}${G?" content--auth":""}`,children:[te&&re?i.jsx("div",{className:"layout-back-floating",children:i.jsx("button",{type:"button",className:"header-back-btn header-back-btn--floating",onClick:H,"aria-label":"رجوع للخلف",title:"رجوع",children:i.jsx(Wu,{size:22,strokeWidth:2.25,"aria-hidden":!0})})}):null,e]}),G?null:ae?i.jsxs("nav",{className:"bottom-nav","aria-label":"شريط الأدمن السفلي",children:[i.jsxs(ge,{to:"/admin",className:`bottom-nav-item${Y?" bottom-nav-item--active":""}`,children:[i.jsx(Il,{size:22,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{children:"لوحة"})]}),i.jsxs(ge,{to:"/admin/stores",className:`bottom-nav-item${Z?" bottom-nav-item--active":""}`,children:[i.jsx(Pt,{size:22,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{children:"متاجر"})]}),i.jsxs(ge,{to:"/admin/ads",className:`bottom-nav-item${ne?" bottom-nav-item--active":""}`,children:[i.jsx(Nf,{size:22,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{children:"إعلانات"})]}),i.jsxs(ge,{to:"/admin/users",className:`bottom-nav-item${J?" bottom-nav-item--active":""}`,children:[i.jsx(uo,{size:22,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{children:"مستخدمون"})]}),i.jsxs("button",{type:"button",className:"bottom-nav-item",onClick:k,"aria-label":"القائمة",children:[i.jsx(eo,{size:22,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{children:"القائمة"})]})]}):i.jsxs("nav",{className:"bottom-nav","aria-label":"شريط التنقل السفلي",children:[i.jsxs(ge,{to:"/",className:`bottom-nav-item${t==="/"?" bottom-nav-item--active":""}`,children:[i.jsx(la,{size:22,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{children:"الرئيسية"})]}),i.jsxs(ge,{to:"/map",className:`bottom-nav-item${t==="/map"?" bottom-nav-item--active":""}`,children:[i.jsx(Hu,{size:22,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{children:"الخريطة"})]}),i.jsxs(ge,{to:"/stores",className:`bottom-nav-item${M?" bottom-nav-item--active":""}`,children:[i.jsx(Pt,{size:22,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{children:"المتاجر"})]}),i.jsxs("button",{type:"button",className:"bottom-nav-item",onClick:k,"aria-label":"القائمة",children:[i.jsx(eo,{size:22,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{children:"القائمة"})]})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})},jt=({icon:e,type:t="text",placeholder:n,value:a,onChange:o,required:l=!1,error:d,...h})=>i.jsxs("div",{className:"input-group-container",style:{marginBottom:"12px"},children:[i.jsxs("div",{className:`input-group ${d?"input-group--error":""}`,children:[e&&i.jsx("div",{className:"input-icon",children:e}),i.jsx("input",{type:t,placeholder:n,value:a,onChange:o,required:l,...h})]}),d&&i.jsx("p",{className:"input-error-msg",children:d}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]}),Hk=[/\bdjango\b/i,/\bmigrate\b/i,/\bmigration\b/i,/\btraceback\b/i,/\bbackend\b/i,/\bpostgres(ql)?\b/i,/\bsqlite\b/i,/\bintegrityerror\b/i,/\boperationalerror\b/i,/\bprogrammingerror\b/i,/\bdatabase\b/i,/\bqueryset\b/i,/\bexception\b/i,/\bfile\s*["']/i,/\bline\s+\d+\b/i,/\bsettings\.py\b/i,/\bwsgi\b/i,/\basgi\b/i,/\bgunicorn\b/i,/\buvicorn\b/i,/\bwhitenoise\b/i,/\bredis\b/i,/\bcelery\b/i,/\bserver\s+error\b/i,/\b500\s*\(/i,/\b<!doctype\b/i,/<html[\s>]/i,/<body[\s>]/i];function Zk(e){if(!e||typeof e!="string")return!0;const t=e.trim();return t.length>420||/[\x00-\x08\x0b\x0c\x0e-\x1f]/.test(t)?!0:Hk.some(n=>n.test(t))}function $k(e){if(e==null)return null;const t=String(e).trim();return!t||Zk(t)?null:t}function Ae(e,t="تعذر إكمال العملية. حاول مرة أخرى."){var d,h,u;const n=(d=e==null?void 0:e.response)==null?void 0:d.status,a=(h=e==null?void 0:e.response)==null?void 0:h.data;if(!a)return(e==null?void 0:e.message)==="Network Error"?"تعذر الاتصال بالخدمة. تحقق من الشبكة وحاول مرة أخرى.":t;if(n>=500)return"حدث خطأ في الخدمة. حاول لاحقاً.";if(n===404)return"المحتوى غير متوفر أو لم يعد موجوداً.";if(n===403)return"لا تملك صلاحية تنفيذ هذا الإجراء.";if(n===401)return"يرجى تسجيل الدخول للمتابعة.";let o=null;if(typeof a.error=="string"&&a.error.trim())o=a.error.trim();else if(typeof a.detail=="string"&&a.detail.trim())o=a.detail.trim();else if(Array.isArray(a.detail))o=a.detail.map(String).join(" — ");else if((u=a.non_field_errors)!=null&&u.length)o=String(a.non_field_errors[0]);else try{const f=Object.values(a).flat().filter(x=>x!=null&&String(x).trim()).map(String);f.length&&(o=f.join(" — "))}catch{}const l=$k(o);return l||(n===400||n===422?"تعذر إكمال العملية. راجع البيانات وحاول مجدداً.":t)}const qk="هل تريد تنفيذ هذا الإجراء؟",Nt=({children:e,onClick:t,type:n="button",variant:a="primary",loading:o=!1,disabled:l=!1,icon:d,style:h={},confirm:u,confirmTitle:f="تأكيد",successMessage:x,successTitle:y="تم",errorFallback:v="تعذرت العملية.",showErrorAlert:_=!0,...w})=>{const{showConfirm:N,showAlert:C}=Oe(),[z,b]=m.useState(!1),k=o||z,S=()=>u===!1?null:typeof u=="string"&&u.trim()?u.trim():qk,E=async P=>{var D;const I=S();if(n==="submit"){if(I){if(P.preventDefault(),!await N(I,f))return;const R=(D=P.currentTarget)==null?void 0:D.form;if(R){if(typeof R.checkValidity=="function"&&!R.checkValidity()){R.reportValidity();return}typeof R.requestSubmit=="function"?R.requestSubmit():R.submit()}}return}if(t&&!(I&&!await N(I,f))){b(!0);try{await Promise.resolve(t(P)),x&&await C(x,y)}catch(T){_&&await C(Ae(T,v),"خطأ")}finally{b(!1)}}};return i.jsxs("button",{type:n,onClick:E,className:`btn-${a} ${k?"loading":""}`,disabled:l||k,style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"10px",...h},...w,children:[k?i.jsx("span",{className:"spinner"}):i.jsxs(i.Fragment,{children:[d&&i.jsx("span",{className:"btn-icon",children:d}),e]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})},Vk=()=>{const[e,t]=m.useState(!1),[n,a]=m.useState(""),[o,l]=m.useState(""),[d,h]=m.useState(""),[u,f]=m.useState(!1),x=dt(),{showAlert:y}=Oe(),v=async()=>{localStorage.removeItem("token"),localStorage.removeItem("refresh"),localStorage.removeItem("user_type"),localStorage.removeItem("user_name"),localStorage.removeItem("is_verified"),localStorage.setItem("isGuest","true"),x("/"),await y("أنت الآن في وضع الزائر.","تم")},_=async w=>{var N;w.preventDefault(),f(!0),h("");try{await By(n.trim(),o),await y("تم تسجيل الدخول بنجاح.","تم"),x("/")}catch(C){console.error("Login error:",C);const z=(N=C==null?void 0:C.response)==null?void 0:N.status,b=(C==null?void 0:C.message)==="Network Error"||!(C!=null&&C.response);z>=500||b?(h(""),await y(Ae(C,"تعذر تسجيل الدخول حالياً. حاول لاحقاً."),"خطأ")):(h("اسم المستخدم أو كلمة المرور غير صحيحة."),await y("بيانات الدخول غير صحيحة، يرجى التحقق من اسم المستخدم وكلمة المرور.","فشل"))}finally{f(!1)}};return i.jsx(ze,{children:i.jsxs("div",{className:"auth-page",children:[i.jsxs("div",{className:"auth-card",style:{maxWidth:420},children:[i.jsxs("div",{className:"auth-chip",children:[i.jsx(ln,{size:18,strokeWidth:2.25,"aria-hidden":!0}),"رادار — محلاتك القريبة على الخريطة"]}),i.jsx("img",{className:"auth-logo",src:"/logo.png",alt:"رادار"}),i.jsx("h1",{className:"auth-title",children:"مرحباً بعودتك"}),i.jsx("p",{className:"auth-sub",children:"سجّل الدخول لمزامنة سلتك والعروض والمفضلة."}),d&&i.jsx("p",{style:{color:"#c62828",fontSize:"0.85rem",marginBottom:"12px",fontWeight:700},children:d}),i.jsxs("form",{onSubmit:_,children:[i.jsx(jt,{icon:i.jsx(Fl,{size:18,strokeWidth:2}),placeholder:"اسم المستخدم",value:n,onChange:w=>a(w.target.value),required:!0}),i.jsxs("div",{className:"auth-password-field",children:[i.jsx(jt,{icon:i.jsx(oy,{size:18,strokeWidth:2}),type:e?"text":"password",placeholder:"كلمة المرور",value:o,onChange:w=>l(w.target.value),required:!0}),i.jsx("button",{type:"button",className:"auth-password-eye-btn",onClick:()=>t(!e),"aria-label":e?"إخفاء كلمة المرور":"إظهار كلمة المرور",title:e?"إخفاء":"إظهار",children:e?i.jsx(Vx,{size:18,strokeWidth:2,"aria-hidden":!0}):i.jsx(Gx,{size:18,strokeWidth:2,"aria-hidden":!0})})]}),i.jsx(Nt,{type:"submit",loading:u,style:{width:"100%",marginTop:"8px"},confirm:!1,showErrorAlert:!1,children:"تسجيل الدخول"})]}),i.jsxs("p",{className:"auth-footer-link",children:["لا تملك حساباً؟ ",i.jsx(ge,{to:"/register",children:"إنشاء حساب"})]}),i.jsx("button",{type:"button",className:"btn-ghost auth-guest-btn",onClick:v,children:"التصفّح كزائر"})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .auth-guest-btn {
            width: 100%;
            margin-top: 14px;
            font-family: inherit;
            font-size: 0.92rem;
          }
        `}})]})})};function t1(e,t){const n=m.useRef(t);m.useEffect(function(){t!==n.current&&e.attributionControl!=null&&(n.current!=null&&e.attributionControl.removeAttribution(n.current),t!=null&&e.attributionControl.addAttribution(t)),n.current=t},[e,t])}const Gk=1;function Kk(e){return Object.freeze({__version:Gk,map:e})}function dp(e,t){return Object.freeze({...e,...t})}const n1=m.createContext(null),up=n1.Provider;function Ko(){const e=m.useContext(n1);if(e==null)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return e}function r1(e){function t(n,a){const{instance:o,context:l}=e(n).current;return m.useImperativeHandle(a,()=>o),n.children==null?null:Xr.createElement(up,{value:l},n.children)}return m.forwardRef(t)}function Qk(e){function t(n,a){const[o,l]=m.useState(!1),{instance:d}=e(n,l).current;m.useImperativeHandle(a,()=>d),m.useEffect(function(){o&&d.update()},[d,o,n.children]);const h=d._contentNode;return h?ic.createPortal(n.children,h):null}return m.forwardRef(t)}function Yk(e){function t(n,a){const{instance:o}=e(n).current;return m.useImperativeHandle(a,()=>o),null}return m.forwardRef(t)}function Jk(e){return function(n){const a=Ko(),o=e(n,a),{instance:l}=o.current,d=m.useRef(n.position),{position:h}=n;return m.useEffect(function(){return l.addTo(a.map),function(){l.remove()}},[a.map,l]),m.useEffect(function(){h!=null&&h!==d.current&&(l.setPosition(h),d.current=h)},[l,h]),o}}function i1(e,t){const n=m.useRef();m.useEffect(function(){return t!=null&&e.instance.on(t),n.current=t,function(){n.current!=null&&e.instance.off(n.current),n.current=null}},[e,t])}function hp(e,t){const n=e.pane??t.pane;return n?{...e,pane:n}:e}function Xk(e,t){return function(a,o){const l=Ko(),d=e(hp(a,l),l);return t1(l.map,a.attribution),i1(d.current,a.eventHandlers),t(d.current,l,a,o),d}}var Xu={exports:{}};/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */(function(e,t){(function(n,a){a(t)})(xv,function(n){var a="1.9.4";function o(r){var s,c,p,g;for(c=1,p=arguments.length;c<p;c++){g=arguments[c];for(s in g)r[s]=g[s]}return r}var l=Object.create||function(){function r(){}return function(s){return r.prototype=s,new r}}();function d(r,s){var c=Array.prototype.slice;if(r.bind)return r.bind.apply(r,c.call(arguments,1));var p=c.call(arguments,2);return function(){return r.apply(s,p.length?p.concat(c.call(arguments)):arguments)}}var h=0;function u(r){return"_leaflet_id"in r||(r._leaflet_id=++h),r._leaflet_id}function f(r,s,c){var p,g,j,A;return A=function(){p=!1,g&&(j.apply(c,g),g=!1)},j=function(){p?g=arguments:(r.apply(c,arguments),setTimeout(A,s),p=!0)},j}function x(r,s,c){var p=s[1],g=s[0],j=p-g;return r===p&&c?r:((r-g)%j+j)%j+g}function y(){return!1}function v(r,s){if(s===!1)return r;var c=Math.pow(10,s===void 0?6:s);return Math.round(r*c)/c}function _(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function w(r){return _(r).split(/\s+/)}function N(r,s){Object.prototype.hasOwnProperty.call(r,"options")||(r.options=r.options?l(r.options):{});for(var c in s)r.options[c]=s[c];return r.options}function C(r,s,c){var p=[];for(var g in r)p.push(encodeURIComponent(c?g.toUpperCase():g)+"="+encodeURIComponent(r[g]));return(!s||s.indexOf("?")===-1?"?":"&")+p.join("&")}var z=/\{ *([\w_ -]+) *\}/g;function b(r,s){return r.replace(z,function(c,p){var g=s[p];if(g===void 0)throw new Error("No value provided for variable "+c);return typeof g=="function"&&(g=g(s)),g})}var k=Array.isArray||function(r){return Object.prototype.toString.call(r)==="[object Array]"};function S(r,s){for(var c=0;c<r.length;c++)if(r[c]===s)return c;return-1}var E="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function P(r){return window["webkit"+r]||window["moz"+r]||window["ms"+r]}var I=0;function D(r){var s=+new Date,c=Math.max(0,16-(s-I));return I=s+c,window.setTimeout(r,c)}var T=window.requestAnimationFrame||P("RequestAnimationFrame")||D,R=window.cancelAnimationFrame||P("CancelAnimationFrame")||P("CancelRequestAnimationFrame")||function(r){window.clearTimeout(r)};function U(r,s,c){if(c&&T===D)r.call(s);else return T.call(window,d(r,s))}function F(r){r&&R.call(window,r)}var oe={__proto__:null,extend:o,create:l,bind:d,get lastId(){return h},stamp:u,throttle:f,wrapNum:x,falseFn:y,formatNum:v,trim:_,splitWords:w,setOptions:N,getParamString:C,template:b,isArray:k,indexOf:S,emptyImageUrl:E,requestFn:T,cancelFn:R,requestAnimFrame:U,cancelAnimFrame:F};function ae(){}ae.extend=function(r){var s=function(){N(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},c=s.__super__=this.prototype,p=l(c);p.constructor=s,s.prototype=p;for(var g in this)Object.prototype.hasOwnProperty.call(this,g)&&g!=="prototype"&&g!=="__super__"&&(s[g]=this[g]);return r.statics&&o(s,r.statics),r.includes&&(re(r.includes),o.apply(null,[p].concat(r.includes))),o(p,r),delete p.statics,delete p.includes,p.options&&(p.options=c.options?l(c.options):{},o(p.options,r.options)),p._initHooks=[],p.callInitHooks=function(){if(!this._initHooksCalled){c.callInitHooks&&c.callInitHooks.call(this),this._initHooksCalled=!0;for(var j=0,A=p._initHooks.length;j<A;j++)p._initHooks[j].call(this)}},s},ae.include=function(r){var s=this.prototype.options;return o(this.prototype,r),r.options&&(this.prototype.options=s,this.mergeOptions(r.options)),this},ae.mergeOptions=function(r){return o(this.prototype.options,r),this},ae.addInitHook=function(r){var s=Array.prototype.slice.call(arguments,1),c=typeof r=="function"?r:function(){this[r].apply(this,s)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(c),this};function re(r){if(!(typeof L>"u"||!L||!L.Mixin)){r=k(r)?r:[r];for(var s=0;s<r.length;s++)r[s]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var X={on:function(r,s,c){if(typeof r=="object")for(var p in r)this._on(p,r[p],s);else{r=w(r);for(var g=0,j=r.length;g<j;g++)this._on(r[g],s,c)}return this},off:function(r,s,c){if(!arguments.length)delete this._events;else if(typeof r=="object")for(var p in r)this._off(p,r[p],s);else{r=w(r);for(var g=arguments.length===1,j=0,A=r.length;j<A;j++)g?this._off(r[j]):this._off(r[j],s,c)}return this},_on:function(r,s,c,p){if(typeof s!="function"){console.warn("wrong listener type: "+typeof s);return}if(this._listens(r,s,c)===!1){c===this&&(c=void 0);var g={fn:s,ctx:c};p&&(g.once=!0),this._events=this._events||{},this._events[r]=this._events[r]||[],this._events[r].push(g)}},_off:function(r,s,c){var p,g,j;if(this._events&&(p=this._events[r],!!p)){if(arguments.length===1){if(this._firingCount)for(g=0,j=p.length;g<j;g++)p[g].fn=y;delete this._events[r];return}if(typeof s!="function"){console.warn("wrong listener type: "+typeof s);return}var A=this._listens(r,s,c);if(A!==!1){var W=p[A];this._firingCount&&(W.fn=y,this._events[r]=p=p.slice()),p.splice(A,1)}}},fire:function(r,s,c){if(!this.listens(r,c))return this;var p=o({},s,{type:r,target:this,sourceTarget:s&&s.sourceTarget||this});if(this._events){var g=this._events[r];if(g){this._firingCount=this._firingCount+1||1;for(var j=0,A=g.length;j<A;j++){var W=g[j],$=W.fn;W.once&&this.off(r,$,W.ctx),$.call(W.ctx||this,p)}this._firingCount--}}return c&&this._propagateEvent(p),this},listens:function(r,s,c,p){typeof r!="string"&&console.warn('"string" type argument expected');var g=s;typeof s!="function"&&(p=!!s,g=void 0,c=void 0);var j=this._events&&this._events[r];if(j&&j.length&&this._listens(r,g,c)!==!1)return!0;if(p){for(var A in this._eventParents)if(this._eventParents[A].listens(r,s,c,p))return!0}return!1},_listens:function(r,s,c){if(!this._events)return!1;var p=this._events[r]||[];if(!s)return!!p.length;c===this&&(c=void 0);for(var g=0,j=p.length;g<j;g++)if(p[g].fn===s&&p[g].ctx===c)return g;return!1},once:function(r,s,c){if(typeof r=="object")for(var p in r)this._on(p,r[p],s,!0);else{r=w(r);for(var g=0,j=r.length;g<j;g++)this._on(r[g],s,c,!0)}return this},addEventParent:function(r){return this._eventParents=this._eventParents||{},this._eventParents[u(r)]=r,this},removeEventParent:function(r){return this._eventParents&&delete this._eventParents[u(r)],this},_propagateEvent:function(r){for(var s in this._eventParents)this._eventParents[s].fire(r.type,o({layer:r.target,propagatedFrom:r.target},r),!0)}};X.addEventListener=X.on,X.removeEventListener=X.clearAllEventListeners=X.off,X.addOneTimeEventListener=X.once,X.fireEvent=X.fire,X.hasEventListeners=X.listens;var G=ae.extend(X);function M(r,s,c){this.x=c?Math.round(r):r,this.y=c?Math.round(s):s}var Y=Math.trunc||function(r){return r>0?Math.floor(r):Math.ceil(r)};M.prototype={clone:function(){return new M(this.x,this.y)},add:function(r){return this.clone()._add(Z(r))},_add:function(r){return this.x+=r.x,this.y+=r.y,this},subtract:function(r){return this.clone()._subtract(Z(r))},_subtract:function(r){return this.x-=r.x,this.y-=r.y,this},divideBy:function(r){return this.clone()._divideBy(r)},_divideBy:function(r){return this.x/=r,this.y/=r,this},multiplyBy:function(r){return this.clone()._multiplyBy(r)},_multiplyBy:function(r){return this.x*=r,this.y*=r,this},scaleBy:function(r){return new M(this.x*r.x,this.y*r.y)},unscaleBy:function(r){return new M(this.x/r.x,this.y/r.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=Y(this.x),this.y=Y(this.y),this},distanceTo:function(r){r=Z(r);var s=r.x-this.x,c=r.y-this.y;return Math.sqrt(s*s+c*c)},equals:function(r){return r=Z(r),r.x===this.x&&r.y===this.y},contains:function(r){return r=Z(r),Math.abs(r.x)<=Math.abs(this.x)&&Math.abs(r.y)<=Math.abs(this.y)},toString:function(){return"Point("+v(this.x)+", "+v(this.y)+")"}};function Z(r,s,c){return r instanceof M?r:k(r)?new M(r[0],r[1]):r==null?r:typeof r=="object"&&"x"in r&&"y"in r?new M(r.x,r.y):new M(r,s,c)}function ne(r,s){if(r)for(var c=s?[r,s]:r,p=0,g=c.length;p<g;p++)this.extend(c[p])}ne.prototype={extend:function(r){var s,c;if(!r)return this;if(r instanceof M||typeof r[0]=="number"||"x"in r)s=c=Z(r);else if(r=J(r),s=r.min,c=r.max,!s||!c)return this;return!this.min&&!this.max?(this.min=s.clone(),this.max=c.clone()):(this.min.x=Math.min(s.x,this.min.x),this.max.x=Math.max(c.x,this.max.x),this.min.y=Math.min(s.y,this.min.y),this.max.y=Math.max(c.y,this.max.y)),this},getCenter:function(r){return Z((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,r)},getBottomLeft:function(){return Z(this.min.x,this.max.y)},getTopRight:function(){return Z(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(r){var s,c;return typeof r[0]=="number"||r instanceof M?r=Z(r):r=J(r),r instanceof ne?(s=r.min,c=r.max):s=c=r,s.x>=this.min.x&&c.x<=this.max.x&&s.y>=this.min.y&&c.y<=this.max.y},intersects:function(r){r=J(r);var s=this.min,c=this.max,p=r.min,g=r.max,j=g.x>=s.x&&p.x<=c.x,A=g.y>=s.y&&p.y<=c.y;return j&&A},overlaps:function(r){r=J(r);var s=this.min,c=this.max,p=r.min,g=r.max,j=g.x>s.x&&p.x<c.x,A=g.y>s.y&&p.y<c.y;return j&&A},isValid:function(){return!!(this.min&&this.max)},pad:function(r){var s=this.min,c=this.max,p=Math.abs(s.x-c.x)*r,g=Math.abs(s.y-c.y)*r;return J(Z(s.x-p,s.y-g),Z(c.x+p,c.y+g))},equals:function(r){return r?(r=J(r),this.min.equals(r.getTopLeft())&&this.max.equals(r.getBottomRight())):!1}};function J(r,s){return!r||r instanceof ne?r:new ne(r,s)}function te(r,s){if(r)for(var c=s?[r,s]:r,p=0,g=c.length;p<g;p++)this.extend(c[p])}te.prototype={extend:function(r){var s=this._southWest,c=this._northEast,p,g;if(r instanceof H)p=r,g=r;else if(r instanceof te){if(p=r._southWest,g=r._northEast,!p||!g)return this}else return r?this.extend(V(r)||O(r)):this;return!s&&!c?(this._southWest=new H(p.lat,p.lng),this._northEast=new H(g.lat,g.lng)):(s.lat=Math.min(p.lat,s.lat),s.lng=Math.min(p.lng,s.lng),c.lat=Math.max(g.lat,c.lat),c.lng=Math.max(g.lng,c.lng)),this},pad:function(r){var s=this._southWest,c=this._northEast,p=Math.abs(s.lat-c.lat)*r,g=Math.abs(s.lng-c.lng)*r;return new te(new H(s.lat-p,s.lng-g),new H(c.lat+p,c.lng+g))},getCenter:function(){return new H((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new H(this.getNorth(),this.getWest())},getSouthEast:function(){return new H(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(r){typeof r[0]=="number"||r instanceof H||"lat"in r?r=V(r):r=O(r);var s=this._southWest,c=this._northEast,p,g;return r instanceof te?(p=r.getSouthWest(),g=r.getNorthEast()):p=g=r,p.lat>=s.lat&&g.lat<=c.lat&&p.lng>=s.lng&&g.lng<=c.lng},intersects:function(r){r=O(r);var s=this._southWest,c=this._northEast,p=r.getSouthWest(),g=r.getNorthEast(),j=g.lat>=s.lat&&p.lat<=c.lat,A=g.lng>=s.lng&&p.lng<=c.lng;return j&&A},overlaps:function(r){r=O(r);var s=this._southWest,c=this._northEast,p=r.getSouthWest(),g=r.getNorthEast(),j=g.lat>s.lat&&p.lat<c.lat,A=g.lng>s.lng&&p.lng<c.lng;return j&&A},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(r,s){return r?(r=O(r),this._southWest.equals(r.getSouthWest(),s)&&this._northEast.equals(r.getNorthEast(),s)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function O(r,s){return r instanceof te?r:new te(r,s)}function H(r,s,c){if(isNaN(r)||isNaN(s))throw new Error("Invalid LatLng object: ("+r+", "+s+")");this.lat=+r,this.lng=+s,c!==void 0&&(this.alt=+c)}H.prototype={equals:function(r,s){if(!r)return!1;r=V(r);var c=Math.max(Math.abs(this.lat-r.lat),Math.abs(this.lng-r.lng));return c<=(s===void 0?1e-9:s)},toString:function(r){return"LatLng("+v(this.lat,r)+", "+v(this.lng,r)+")"},distanceTo:function(r){return fe.distance(this,V(r))},wrap:function(){return fe.wrapLatLng(this)},toBounds:function(r){var s=180*r/40075017,c=s/Math.cos(Math.PI/180*this.lat);return O([this.lat-s,this.lng-c],[this.lat+s,this.lng+c])},clone:function(){return new H(this.lat,this.lng,this.alt)}};function V(r,s,c){return r instanceof H?r:k(r)&&typeof r[0]!="object"?r.length===3?new H(r[0],r[1],r[2]):r.length===2?new H(r[0],r[1]):null:r==null?r:typeof r=="object"&&"lat"in r?new H(r.lat,"lng"in r?r.lng:r.lon,r.alt):s===void 0?null:new H(r,s,c)}var le={latLngToPoint:function(r,s){var c=this.projection.project(r),p=this.scale(s);return this.transformation._transform(c,p)},pointToLatLng:function(r,s){var c=this.scale(s),p=this.transformation.untransform(r,c);return this.projection.unproject(p)},project:function(r){return this.projection.project(r)},unproject:function(r){return this.projection.unproject(r)},scale:function(r){return 256*Math.pow(2,r)},zoom:function(r){return Math.log(r/256)/Math.LN2},getProjectedBounds:function(r){if(this.infinite)return null;var s=this.projection.bounds,c=this.scale(r),p=this.transformation.transform(s.min,c),g=this.transformation.transform(s.max,c);return new ne(p,g)},infinite:!1,wrapLatLng:function(r){var s=this.wrapLng?x(r.lng,this.wrapLng,!0):r.lng,c=this.wrapLat?x(r.lat,this.wrapLat,!0):r.lat,p=r.alt;return new H(c,s,p)},wrapLatLngBounds:function(r){var s=r.getCenter(),c=this.wrapLatLng(s),p=s.lat-c.lat,g=s.lng-c.lng;if(p===0&&g===0)return r;var j=r.getSouthWest(),A=r.getNorthEast(),W=new H(j.lat-p,j.lng-g),$=new H(A.lat-p,A.lng-g);return new te(W,$)}},fe=o({},le,{wrapLng:[-180,180],R:6371e3,distance:function(r,s){var c=Math.PI/180,p=r.lat*c,g=s.lat*c,j=Math.sin((s.lat-r.lat)*c/2),A=Math.sin((s.lng-r.lng)*c/2),W=j*j+Math.cos(p)*Math.cos(g)*A*A,$=2*Math.atan2(Math.sqrt(W),Math.sqrt(1-W));return this.R*$}}),Me=6378137,je={R:Me,MAX_LATITUDE:85.0511287798,project:function(r){var s=Math.PI/180,c=this.MAX_LATITUDE,p=Math.max(Math.min(c,r.lat),-c),g=Math.sin(p*s);return new M(this.R*r.lng*s,this.R*Math.log((1+g)/(1-g))/2)},unproject:function(r){var s=180/Math.PI;return new H((2*Math.atan(Math.exp(r.y/this.R))-Math.PI/2)*s,r.x*s/this.R)},bounds:function(){var r=Me*Math.PI;return new ne([-r,-r],[r,r])}()};function _e(r,s,c,p){if(k(r)){this._a=r[0],this._b=r[1],this._c=r[2],this._d=r[3];return}this._a=r,this._b=s,this._c=c,this._d=p}_e.prototype={transform:function(r,s){return this._transform(r.clone(),s)},_transform:function(r,s){return s=s||1,r.x=s*(this._a*r.x+this._b),r.y=s*(this._c*r.y+this._d),r},untransform:function(r,s){return s=s||1,new M((r.x/s-this._b)/this._a,(r.y/s-this._d)/this._c)}};function Ue(r,s,c,p){return new _e(r,s,c,p)}var Ut=o({},fe,{code:"EPSG:3857",projection:je,transformation:function(){var r=.5/(Math.PI*je.R);return Ue(r,.5,-r,.5)}()}),mi=o({},Ut,{code:"EPSG:900913"});function rr(r){return document.createElementNS("http://www.w3.org/2000/svg",r)}function K(r,s){var c="",p,g,j,A,W,$;for(p=0,j=r.length;p<j;p++){for(W=r[p],g=0,A=W.length;g<A;g++)$=W[g],c+=(g?"L":"M")+$.x+" "+$.y;c+=s?xe.svg?"z":"x":""}return c||"M0 0"}var me=document.documentElement.style,he="ActiveXObject"in window,we=he&&!document.addEventListener,Be="msLaunchUri"in navigator&&!("documentMode"in document),Ge=Ht("webkit"),Fe=Ht("android"),yt=Ht("android 2")||Ht("android 3"),Lr=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),_c=Fe&&Ht("Google")&&Lr<537&&!("AudioNode"in window),fi=!!window.opera,Jo=!Be&&Ht("chrome"),wa=Ht("gecko")&&!Ge&&!fi&&!he,jc=!Jo&&Ht("safari"),_a=Ht("phantom"),Xo="OTransition"in me,gi=navigator.platform.indexOf("Win")===0,es=he&&"transition"in me,xi="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!yt,ja="MozPerspective"in me,Mr=!window.L_DISABLE_3D&&(es||xi||ja)&&!Xo&&!_a,Tr=typeof orientation<"u"||Ht("mobile"),kc=Tr&&Ge,ts=Tr&&xi,yi=!window.PointerEvent&&window.MSPointerEvent,Ar=!!(window.PointerEvent||yi),Ir="ontouchstart"in window||!!window.TouchEvent,ns=!window.L_NO_TOUCH&&(Ir||Ar),vi=Tr&&fi,Yt=Tr&&wa,An=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,Sc=function(){var r=!1;try{var s=Object.defineProperty({},"passive",{get:function(){r=!0}});window.addEventListener("testPassiveEventSupport",y,s),window.removeEventListener("testPassiveEventSupport",y,s)}catch{}return r}(),rs=function(){return!!document.createElement("canvas").getContext}(),In=!!(document.createElementNS&&rr("svg").createSVGRect),is=!!In&&function(){var r=document.createElement("div");return r.innerHTML="<svg/>",(r.firstChild&&r.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"}(),Nc=!In&&function(){try{var r=document.createElement("div");r.innerHTML='<v:shape adj="1"/>';var s=r.firstChild;return s.style.behavior="url(#default#VML)",s&&typeof s.adj=="object"}catch{return!1}}(),Cc=navigator.platform.indexOf("Mac")===0,as=navigator.platform.indexOf("Linux")===0;function Ht(r){return navigator.userAgent.toLowerCase().indexOf(r)>=0}var xe={ie:he,ielt9:we,edge:Be,webkit:Ge,android:Fe,android23:yt,androidStock:_c,opera:fi,chrome:Jo,gecko:wa,safari:jc,phantom:_a,opera12:Xo,win:gi,ie3d:es,webkit3d:xi,gecko3d:ja,any3d:Mr,mobile:Tr,mobileWebkit:kc,mobileWebkit3d:ts,msPointer:yi,pointer:Ar,touch:ns,touchNative:Ir,mobileOpera:vi,mobileGecko:Yt,retina:An,passiveEvents:Sc,canvas:rs,svg:In,vml:Nc,inlineSvg:is,mac:Cc,linux:as},B=xe.msPointer?"MSPointerDown":"pointerdown",ie=xe.msPointer?"MSPointerMove":"pointermove",de=xe.msPointer?"MSPointerUp":"pointerup",ye=xe.msPointer?"MSPointerCancel":"pointercancel",Ne={touchstart:B,touchmove:ie,touchend:de,touchcancel:ye},Jt={touchstart:cs,touchmove:wi,touchend:wi,touchcancel:wi},st={},Rr=!1;function bi(r,s,c){return s==="touchstart"&&ls(),Jt[s]?(c=Jt[s].bind(this,c),r.addEventListener(Ne[s],c,!1),c):(console.warn("wrong event specified:",s),y)}function zc(r,s,c){if(!Ne[s]){console.warn("wrong event specified:",s);return}r.removeEventListener(Ne[s],c,!1)}function os(r){st[r.pointerId]=r}function ss(r){st[r.pointerId]&&(st[r.pointerId]=r)}function Or(r){delete st[r.pointerId]}function ls(){Rr||(document.addEventListener(B,os,!0),document.addEventListener(ie,ss,!0),document.addEventListener(de,Or,!0),document.addEventListener(ye,Or,!0),Rr=!0)}function wi(r,s){if(s.pointerType!==(s.MSPOINTER_TYPE_MOUSE||"mouse")){s.touches=[];for(var c in st)s.touches.push(st[c]);s.changedTouches=[s],r(s)}}function cs(r,s){s.MSPOINTER_TYPE_TOUCH&&s.pointerType===s.MSPOINTER_TYPE_TOUCH&&mt(s),wi(r,s)}function x1(r){var s={},c,p;for(p in r)c=r[p],s[p]=c&&c.bind?c.bind(r):c;return r=s,s.type="dblclick",s.detail=2,s.isTrusted=!1,s._simulated=!0,s}var y1=200;function v1(r,s){r.addEventListener("dblclick",s);var c=0,p;function g(j){if(j.detail!==1){p=j.detail;return}if(!(j.pointerType==="mouse"||j.sourceCapabilities&&!j.sourceCapabilities.firesTouchEvents)){var A=wp(j);if(!(A.some(function($){return $ instanceof HTMLLabelElement&&$.attributes.for})&&!A.some(function($){return $ instanceof HTMLInputElement||$ instanceof HTMLSelectElement}))){var W=Date.now();W-c<=y1?(p++,p===2&&s(x1(j))):p=1,c=W}}}return r.addEventListener("click",g),{dblclick:s,simDblclick:g}}function b1(r,s){r.removeEventListener("dblclick",s.dblclick),r.removeEventListener("click",s.simDblclick)}var Pc=hs(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),ka=hs(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),xp=ka==="webkitTransition"||ka==="OTransition"?ka+"End":"transitionend";function yp(r){return typeof r=="string"?document.getElementById(r):r}function Sa(r,s){var c=r.style[s]||r.currentStyle&&r.currentStyle[s];if((!c||c==="auto")&&document.defaultView){var p=document.defaultView.getComputedStyle(r,null);c=p?p[s]:null}return c==="auto"?null:c}function Re(r,s,c){var p=document.createElement(r);return p.className=s||"",c&&c.appendChild(p),p}function Ke(r){var s=r.parentNode;s&&s.removeChild(r)}function ds(r){for(;r.firstChild;)r.removeChild(r.firstChild)}function _i(r){var s=r.parentNode;s&&s.lastChild!==r&&s.appendChild(r)}function ji(r){var s=r.parentNode;s&&s.firstChild!==r&&s.insertBefore(r,s.firstChild)}function Ec(r,s){if(r.classList!==void 0)return r.classList.contains(s);var c=us(r);return c.length>0&&new RegExp("(^|\\s)"+s+"(\\s|$)").test(c)}function Ce(r,s){if(r.classList!==void 0)for(var c=w(s),p=0,g=c.length;p<g;p++)r.classList.add(c[p]);else if(!Ec(r,s)){var j=us(r);Lc(r,(j?j+" ":"")+s)}}function et(r,s){r.classList!==void 0?r.classList.remove(s):Lc(r,_((" "+us(r)+" ").replace(" "+s+" "," ")))}function Lc(r,s){r.className.baseVal===void 0?r.className=s:r.className.baseVal=s}function us(r){return r.correspondingElement&&(r=r.correspondingElement),r.className.baseVal===void 0?r.className:r.className.baseVal}function Xt(r,s){"opacity"in r.style?r.style.opacity=s:"filter"in r.style&&w1(r,s)}function w1(r,s){var c=!1,p="DXImageTransform.Microsoft.Alpha";try{c=r.filters.item(p)}catch{if(s===1)return}s=Math.round(s*100),c?(c.Enabled=s!==100,c.Opacity=s):r.style.filter+=" progid:"+p+"(opacity="+s+")"}function hs(r){for(var s=document.documentElement.style,c=0;c<r.length;c++)if(r[c]in s)return r[c];return!1}function Br(r,s,c){var p=s||new M(0,0);r.style[Pc]=(xe.ie3d?"translate("+p.x+"px,"+p.y+"px)":"translate3d("+p.x+"px,"+p.y+"px,0)")+(c?" scale("+c+")":"")}function it(r,s){r._leaflet_pos=s,xe.any3d?Br(r,s):(r.style.left=s.x+"px",r.style.top=s.y+"px")}function Fr(r){return r._leaflet_pos||new M(0,0)}var Na,Ca,Mc;if("onselectstart"in document)Na=function(){ke(window,"selectstart",mt)},Ca=function(){He(window,"selectstart",mt)};else{var za=hs(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);Na=function(){if(za){var r=document.documentElement.style;Mc=r[za],r[za]="none"}},Ca=function(){za&&(document.documentElement.style[za]=Mc,Mc=void 0)}}function Tc(){ke(window,"dragstart",mt)}function Ac(){He(window,"dragstart",mt)}var ps,Ic;function Rc(r){for(;r.tabIndex===-1;)r=r.parentNode;r.style&&(ms(),ps=r,Ic=r.style.outlineStyle,r.style.outlineStyle="none",ke(window,"keydown",ms))}function ms(){ps&&(ps.style.outlineStyle=Ic,ps=void 0,Ic=void 0,He(window,"keydown",ms))}function vp(r){do r=r.parentNode;while((!r.offsetWidth||!r.offsetHeight)&&r!==document.body);return r}function Oc(r){var s=r.getBoundingClientRect();return{x:s.width/r.offsetWidth||1,y:s.height/r.offsetHeight||1,boundingClientRect:s}}var _1={__proto__:null,TRANSFORM:Pc,TRANSITION:ka,TRANSITION_END:xp,get:yp,getStyle:Sa,create:Re,remove:Ke,empty:ds,toFront:_i,toBack:ji,hasClass:Ec,addClass:Ce,removeClass:et,setClass:Lc,getClass:us,setOpacity:Xt,testProp:hs,setTransform:Br,setPosition:it,getPosition:Fr,get disableTextSelection(){return Na},get enableTextSelection(){return Ca},disableImageDrag:Tc,enableImageDrag:Ac,preventOutline:Rc,restoreOutline:ms,getSizedParentNode:vp,getScale:Oc};function ke(r,s,c,p){if(s&&typeof s=="object")for(var g in s)Fc(r,g,s[g],c);else{s=w(s);for(var j=0,A=s.length;j<A;j++)Fc(r,s[j],c,p)}return this}var jn="_leaflet_events";function He(r,s,c,p){if(arguments.length===1)bp(r),delete r[jn];else if(s&&typeof s=="object")for(var g in s)Dc(r,g,s[g],c);else if(s=w(s),arguments.length===2)bp(r,function(W){return S(s,W)!==-1});else for(var j=0,A=s.length;j<A;j++)Dc(r,s[j],c,p);return this}function bp(r,s){for(var c in r[jn]){var p=c.split(/\d/)[0];(!s||s(p))&&Dc(r,p,null,null,c)}}var Bc={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function Fc(r,s,c,p){var g=s+u(c)+(p?"_"+u(p):"");if(r[jn]&&r[jn][g])return this;var j=function(W){return c.call(p||r,W||window.event)},A=j;!xe.touchNative&&xe.pointer&&s.indexOf("touch")===0?j=bi(r,s,j):xe.touch&&s==="dblclick"?j=v1(r,j):"addEventListener"in r?s==="touchstart"||s==="touchmove"||s==="wheel"||s==="mousewheel"?r.addEventListener(Bc[s]||s,j,xe.passiveEvents?{passive:!1}:!1):s==="mouseenter"||s==="mouseleave"?(j=function(W){W=W||window.event,Uc(r,W)&&A(W)},r.addEventListener(Bc[s],j,!1)):r.addEventListener(s,A,!1):r.attachEvent("on"+s,j),r[jn]=r[jn]||{},r[jn][g]=j}function Dc(r,s,c,p,g){g=g||s+u(c)+(p?"_"+u(p):"");var j=r[jn]&&r[jn][g];if(!j)return this;!xe.touchNative&&xe.pointer&&s.indexOf("touch")===0?zc(r,s,j):xe.touch&&s==="dblclick"?b1(r,j):"removeEventListener"in r?r.removeEventListener(Bc[s]||s,j,!1):r.detachEvent("on"+s,j),r[jn][g]=null}function Dr(r){return r.stopPropagation?r.stopPropagation():r.originalEvent?r.originalEvent._stopped=!0:r.cancelBubble=!0,this}function Wc(r){return Fc(r,"wheel",Dr),this}function Pa(r){return ke(r,"mousedown touchstart dblclick contextmenu",Dr),r._leaflet_disable_click=!0,this}function mt(r){return r.preventDefault?r.preventDefault():r.returnValue=!1,this}function Wr(r){return mt(r),Dr(r),this}function wp(r){if(r.composedPath)return r.composedPath();for(var s=[],c=r.target;c;)s.push(c),c=c.parentNode;return s}function _p(r,s){if(!s)return new M(r.clientX,r.clientY);var c=Oc(s),p=c.boundingClientRect;return new M((r.clientX-p.left)/c.x-s.clientLeft,(r.clientY-p.top)/c.y-s.clientTop)}var j1=xe.linux&&xe.chrome?window.devicePixelRatio:xe.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function jp(r){return xe.edge?r.wheelDeltaY/2:r.deltaY&&r.deltaMode===0?-r.deltaY/j1:r.deltaY&&r.deltaMode===1?-r.deltaY*20:r.deltaY&&r.deltaMode===2?-r.deltaY*60:r.deltaX||r.deltaZ?0:r.wheelDelta?(r.wheelDeltaY||r.wheelDelta)/2:r.detail&&Math.abs(r.detail)<32765?-r.detail*20:r.detail?r.detail/-32765*60:0}function Uc(r,s){var c=s.relatedTarget;if(!c)return!0;try{for(;c&&c!==r;)c=c.parentNode}catch{return!1}return c!==r}var k1={__proto__:null,on:ke,off:He,stopPropagation:Dr,disableScrollPropagation:Wc,disableClickPropagation:Pa,preventDefault:mt,stop:Wr,getPropagationPath:wp,getMousePosition:_p,getWheelDelta:jp,isExternalTarget:Uc,addListener:ke,removeListener:He},kp=G.extend({run:function(r,s,c,p){this.stop(),this._el=r,this._inProgress=!0,this._duration=c||.25,this._easeOutPower=1/Math.max(p||.5,.2),this._startPos=Fr(r),this._offset=s.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=U(this._animate,this),this._step()},_step:function(r){var s=+new Date-this._startTime,c=this._duration*1e3;s<c?this._runFrame(this._easeOut(s/c),r):(this._runFrame(1),this._complete())},_runFrame:function(r,s){var c=this._startPos.add(this._offset.multiplyBy(r));s&&c._round(),it(this._el,c),this.fire("step")},_complete:function(){F(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(r){return 1-Math.pow(1-r,this._easeOutPower)}}),Te=G.extend({options:{crs:Ut,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(r,s){s=N(this,s),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(r),this._initLayout(),this._onResize=d(this._onResize,this),this._initEvents(),s.maxBounds&&this.setMaxBounds(s.maxBounds),s.zoom!==void 0&&(this._zoom=this._limitZoom(s.zoom)),s.center&&s.zoom!==void 0&&this.setView(V(s.center),s.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=ka&&xe.any3d&&!xe.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),ke(this._proxy,xp,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(r,s,c){if(s=s===void 0?this._zoom:this._limitZoom(s),r=this._limitCenter(V(r),s,this.options.maxBounds),c=c||{},this._stop(),this._loaded&&!c.reset&&c!==!0){c.animate!==void 0&&(c.zoom=o({animate:c.animate},c.zoom),c.pan=o({animate:c.animate,duration:c.duration},c.pan));var p=this._zoom!==s?this._tryAnimatedZoom&&this._tryAnimatedZoom(r,s,c.zoom):this._tryAnimatedPan(r,c.pan);if(p)return clearTimeout(this._sizeTimer),this}return this._resetView(r,s,c.pan&&c.pan.noMoveStart),this},setZoom:function(r,s){return this._loaded?this.setView(this.getCenter(),r,{zoom:s}):(this._zoom=r,this)},zoomIn:function(r,s){return r=r||(xe.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+r,s)},zoomOut:function(r,s){return r=r||(xe.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-r,s)},setZoomAround:function(r,s,c){var p=this.getZoomScale(s),g=this.getSize().divideBy(2),j=r instanceof M?r:this.latLngToContainerPoint(r),A=j.subtract(g).multiplyBy(1-1/p),W=this.containerPointToLatLng(g.add(A));return this.setView(W,s,{zoom:c})},_getBoundsCenterZoom:function(r,s){s=s||{},r=r.getBounds?r.getBounds():O(r);var c=Z(s.paddingTopLeft||s.padding||[0,0]),p=Z(s.paddingBottomRight||s.padding||[0,0]),g=this.getBoundsZoom(r,!1,c.add(p));if(g=typeof s.maxZoom=="number"?Math.min(s.maxZoom,g):g,g===1/0)return{center:r.getCenter(),zoom:g};var j=p.subtract(c).divideBy(2),A=this.project(r.getSouthWest(),g),W=this.project(r.getNorthEast(),g),$=this.unproject(A.add(W).divideBy(2).add(j),g);return{center:$,zoom:g}},fitBounds:function(r,s){if(r=O(r),!r.isValid())throw new Error("Bounds are not valid.");var c=this._getBoundsCenterZoom(r,s);return this.setView(c.center,c.zoom,s)},fitWorld:function(r){return this.fitBounds([[-90,-180],[90,180]],r)},panTo:function(r,s){return this.setView(r,this._zoom,{pan:s})},panBy:function(r,s){if(r=Z(r).round(),s=s||{},!r.x&&!r.y)return this.fire("moveend");if(s.animate!==!0&&!this.getSize().contains(r))return this._resetView(this.unproject(this.project(this.getCenter()).add(r)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new kp,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),s.noMoveStart||this.fire("movestart"),s.animate!==!1){Ce(this._mapPane,"leaflet-pan-anim");var c=this._getMapPanePos().subtract(r).round();this._panAnim.run(this._mapPane,c,s.duration||.25,s.easeLinearity)}else this._rawPanBy(r),this.fire("move").fire("moveend");return this},flyTo:function(r,s,c){if(c=c||{},c.animate===!1||!xe.any3d)return this.setView(r,s,c);this._stop();var p=this.project(this.getCenter()),g=this.project(r),j=this.getSize(),A=this._zoom;r=V(r),s=s===void 0?A:s;var W=Math.max(j.x,j.y),$=W*this.getZoomScale(A,s),ee=g.distanceTo(p)||1,ue=1.42,ve=ue*ue;function Pe(at){var Ns=at?-1:1,hv=at?$:W,pv=$*$-W*W+Ns*ve*ve*ee*ee,mv=2*hv*ve*ee,Xc=pv/mv,im=Math.sqrt(Xc*Xc+1)-Xc,fv=im<1e-9?-18:Math.log(im);return fv}function Ct(at){return(Math.exp(at)-Math.exp(-at))/2}function ut(at){return(Math.exp(at)+Math.exp(-at))/2}function tn(at){return Ct(at)/ut(at)}var Tt=Pe(0);function Pi(at){return W*(ut(Tt)/ut(Tt+ue*at))}function lv(at){return W*(ut(Tt)*tn(Tt+ue*at)-Ct(Tt))/ve}function cv(at){return 1-Math.pow(1-at,1.5)}var dv=Date.now(),nm=(Pe(1)-Tt)/ue,uv=c.duration?1e3*c.duration:1e3*nm*.8;function rm(){var at=(Date.now()-dv)/uv,Ns=cv(at)*nm;at<=1?(this._flyToFrame=U(rm,this),this._move(this.unproject(p.add(g.subtract(p).multiplyBy(lv(Ns)/ee)),A),this.getScaleZoom(W/Pi(Ns),A),{flyTo:!0})):this._move(r,s)._moveEnd(!0)}return this._moveStart(!0,c.noMoveStart),rm.call(this),this},flyToBounds:function(r,s){var c=this._getBoundsCenterZoom(r,s);return this.flyTo(c.center,c.zoom,s)},setMaxBounds:function(r){return r=O(r),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),r.isValid()?(this.options.maxBounds=r,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(r){var s=this.options.minZoom;return this.options.minZoom=r,this._loaded&&s!==r&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(r):this},setMaxZoom:function(r){var s=this.options.maxZoom;return this.options.maxZoom=r,this._loaded&&s!==r&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(r):this},panInsideBounds:function(r,s){this._enforcingBounds=!0;var c=this.getCenter(),p=this._limitCenter(c,this._zoom,O(r));return c.equals(p)||this.panTo(p,s),this._enforcingBounds=!1,this},panInside:function(r,s){s=s||{};var c=Z(s.paddingTopLeft||s.padding||[0,0]),p=Z(s.paddingBottomRight||s.padding||[0,0]),g=this.project(this.getCenter()),j=this.project(r),A=this.getPixelBounds(),W=J([A.min.add(c),A.max.subtract(p)]),$=W.getSize();if(!W.contains(j)){this._enforcingBounds=!0;var ee=j.subtract(W.getCenter()),ue=W.extend(j).getSize().subtract($);g.x+=ee.x<0?-ue.x:ue.x,g.y+=ee.y<0?-ue.y:ue.y,this.panTo(this.unproject(g),s),this._enforcingBounds=!1}return this},invalidateSize:function(r){if(!this._loaded)return this;r=o({animate:!1,pan:!0},r===!0?{animate:!0}:r);var s=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var c=this.getSize(),p=s.divideBy(2).round(),g=c.divideBy(2).round(),j=p.subtract(g);return!j.x&&!j.y?this:(r.animate&&r.pan?this.panBy(j):(r.pan&&this._rawPanBy(j),this.fire("move"),r.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(d(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:s,newSize:c}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(r){if(r=this._locateOptions=o({timeout:1e4,watch:!1},r),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var s=d(this._handleGeolocationResponse,this),c=d(this._handleGeolocationError,this);return r.watch?this._locationWatchId=navigator.geolocation.watchPosition(s,c,r):navigator.geolocation.getCurrentPosition(s,c,r),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(r){if(this._container._leaflet_id){var s=r.code,c=r.message||(s===1?"permission denied":s===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:s,message:"Geolocation error: "+c+"."})}},_handleGeolocationResponse:function(r){if(this._container._leaflet_id){var s=r.coords.latitude,c=r.coords.longitude,p=new H(s,c),g=p.toBounds(r.coords.accuracy*2),j=this._locateOptions;if(j.setView){var A=this.getBoundsZoom(g);this.setView(p,j.maxZoom?Math.min(A,j.maxZoom):A)}var W={latlng:p,bounds:g,timestamp:r.timestamp};for(var $ in r.coords)typeof r.coords[$]=="number"&&(W[$]=r.coords[$]);this.fire("locationfound",W)}},addHandler:function(r,s){if(!s)return this;var c=this[r]=new s(this);return this._handlers.push(c),this.options[r]&&c.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),Ke(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(F(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var r;for(r in this._layers)this._layers[r].remove();for(r in this._panes)Ke(this._panes[r]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(r,s){var c="leaflet-pane"+(r?" leaflet-"+r.replace("Pane","")+"-pane":""),p=Re("div",c,s||this._mapPane);return r&&(this._panes[r]=p),p},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var r=this.getPixelBounds(),s=this.unproject(r.getBottomLeft()),c=this.unproject(r.getTopRight());return new te(s,c)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(r,s,c){r=O(r),c=Z(c||[0,0]);var p=this.getZoom()||0,g=this.getMinZoom(),j=this.getMaxZoom(),A=r.getNorthWest(),W=r.getSouthEast(),$=this.getSize().subtract(c),ee=J(this.project(W,p),this.project(A,p)).getSize(),ue=xe.any3d?this.options.zoomSnap:1,ve=$.x/ee.x,Pe=$.y/ee.y,Ct=s?Math.max(ve,Pe):Math.min(ve,Pe);return p=this.getScaleZoom(Ct,p),ue&&(p=Math.round(p/(ue/100))*(ue/100),p=s?Math.ceil(p/ue)*ue:Math.floor(p/ue)*ue),Math.max(g,Math.min(j,p))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new M(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(r,s){var c=this._getTopLeftPoint(r,s);return new ne(c,c.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(r){return this.options.crs.getProjectedBounds(r===void 0?this.getZoom():r)},getPane:function(r){return typeof r=="string"?this._panes[r]:r},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(r,s){var c=this.options.crs;return s=s===void 0?this._zoom:s,c.scale(r)/c.scale(s)},getScaleZoom:function(r,s){var c=this.options.crs;s=s===void 0?this._zoom:s;var p=c.zoom(r*c.scale(s));return isNaN(p)?1/0:p},project:function(r,s){return s=s===void 0?this._zoom:s,this.options.crs.latLngToPoint(V(r),s)},unproject:function(r,s){return s=s===void 0?this._zoom:s,this.options.crs.pointToLatLng(Z(r),s)},layerPointToLatLng:function(r){var s=Z(r).add(this.getPixelOrigin());return this.unproject(s)},latLngToLayerPoint:function(r){var s=this.project(V(r))._round();return s._subtract(this.getPixelOrigin())},wrapLatLng:function(r){return this.options.crs.wrapLatLng(V(r))},wrapLatLngBounds:function(r){return this.options.crs.wrapLatLngBounds(O(r))},distance:function(r,s){return this.options.crs.distance(V(r),V(s))},containerPointToLayerPoint:function(r){return Z(r).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(r){return Z(r).add(this._getMapPanePos())},containerPointToLatLng:function(r){var s=this.containerPointToLayerPoint(Z(r));return this.layerPointToLatLng(s)},latLngToContainerPoint:function(r){return this.layerPointToContainerPoint(this.latLngToLayerPoint(V(r)))},mouseEventToContainerPoint:function(r){return _p(r,this._container)},mouseEventToLayerPoint:function(r){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(r))},mouseEventToLatLng:function(r){return this.layerPointToLatLng(this.mouseEventToLayerPoint(r))},_initContainer:function(r){var s=this._container=yp(r);if(s){if(s._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");ke(s,"scroll",this._onScroll,this),this._containerId=u(s)},_initLayout:function(){var r=this._container;this._fadeAnimated=this.options.fadeAnimation&&xe.any3d,Ce(r,"leaflet-container"+(xe.touch?" leaflet-touch":"")+(xe.retina?" leaflet-retina":"")+(xe.ielt9?" leaflet-oldie":"")+(xe.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var s=Sa(r,"position");s!=="absolute"&&s!=="relative"&&s!=="fixed"&&s!=="sticky"&&(r.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var r=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),it(this._mapPane,new M(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(Ce(r.markerPane,"leaflet-zoom-hide"),Ce(r.shadowPane,"leaflet-zoom-hide"))},_resetView:function(r,s,c){it(this._mapPane,new M(0,0));var p=!this._loaded;this._loaded=!0,s=this._limitZoom(s),this.fire("viewprereset");var g=this._zoom!==s;this._moveStart(g,c)._move(r,s)._moveEnd(g),this.fire("viewreset"),p&&this.fire("load")},_moveStart:function(r,s){return r&&this.fire("zoomstart"),s||this.fire("movestart"),this},_move:function(r,s,c,p){s===void 0&&(s=this._zoom);var g=this._zoom!==s;return this._zoom=s,this._lastCenter=r,this._pixelOrigin=this._getNewPixelOrigin(r),p?c&&c.pinch&&this.fire("zoom",c):((g||c&&c.pinch)&&this.fire("zoom",c),this.fire("move",c)),this},_moveEnd:function(r){return r&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return F(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(r){it(this._mapPane,this._getMapPanePos().subtract(r))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(r){this._targets={},this._targets[u(this._container)]=this;var s=r?He:ke;s(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&s(window,"resize",this._onResize,this),xe.any3d&&this.options.transform3DLimit&&(r?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){F(this._resizeRequest),this._resizeRequest=U(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var r=this._getMapPanePos();Math.max(Math.abs(r.x),Math.abs(r.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(r,s){for(var c=[],p,g=s==="mouseout"||s==="mouseover",j=r.target||r.srcElement,A=!1;j;){if(p=this._targets[u(j)],p&&(s==="click"||s==="preclick")&&this._draggableMoved(p)){A=!0;break}if(p&&p.listens(s,!0)&&(g&&!Uc(j,r)||(c.push(p),g))||j===this._container)break;j=j.parentNode}return!c.length&&!A&&!g&&this.listens(s,!0)&&(c=[this]),c},_isClickDisabled:function(r){for(;r&&r!==this._container;){if(r._leaflet_disable_click)return!0;r=r.parentNode}},_handleDOMEvent:function(r){var s=r.target||r.srcElement;if(!(!this._loaded||s._leaflet_disable_events||r.type==="click"&&this._isClickDisabled(s))){var c=r.type;c==="mousedown"&&Rc(s),this._fireDOMEvent(r,c)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(r,s,c){if(r.type==="click"){var p=o({},r);p.type="preclick",this._fireDOMEvent(p,p.type,c)}var g=this._findEventTargets(r,s);if(c){for(var j=[],A=0;A<c.length;A++)c[A].listens(s,!0)&&j.push(c[A]);g=j.concat(g)}if(g.length){s==="contextmenu"&&mt(r);var W=g[0],$={originalEvent:r};if(r.type!=="keypress"&&r.type!=="keydown"&&r.type!=="keyup"){var ee=W.getLatLng&&(!W._radius||W._radius<=10);$.containerPoint=ee?this.latLngToContainerPoint(W.getLatLng()):this.mouseEventToContainerPoint(r),$.layerPoint=this.containerPointToLayerPoint($.containerPoint),$.latlng=ee?W.getLatLng():this.layerPointToLatLng($.layerPoint)}for(A=0;A<g.length;A++)if(g[A].fire(s,$,!0),$.originalEvent._stopped||g[A].options.bubblingMouseEvents===!1&&S(this._mouseEvents,s)!==-1)return}},_draggableMoved:function(r){return r=r.dragging&&r.dragging.enabled()?r:this,r.dragging&&r.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var r=0,s=this._handlers.length;r<s;r++)this._handlers[r].disable()},whenReady:function(r,s){return this._loaded?r.call(s||this,{target:this}):this.on("load",r,s),this},_getMapPanePos:function(){return Fr(this._mapPane)||new M(0,0)},_moved:function(){var r=this._getMapPanePos();return r&&!r.equals([0,0])},_getTopLeftPoint:function(r,s){var c=r&&s!==void 0?this._getNewPixelOrigin(r,s):this.getPixelOrigin();return c.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(r,s){var c=this.getSize()._divideBy(2);return this.project(r,s)._subtract(c)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(r,s,c){var p=this._getNewPixelOrigin(c,s);return this.project(r,s)._subtract(p)},_latLngBoundsToNewLayerBounds:function(r,s,c){var p=this._getNewPixelOrigin(c,s);return J([this.project(r.getSouthWest(),s)._subtract(p),this.project(r.getNorthWest(),s)._subtract(p),this.project(r.getSouthEast(),s)._subtract(p),this.project(r.getNorthEast(),s)._subtract(p)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(r){return this.latLngToLayerPoint(r).subtract(this._getCenterLayerPoint())},_limitCenter:function(r,s,c){if(!c)return r;var p=this.project(r,s),g=this.getSize().divideBy(2),j=new ne(p.subtract(g),p.add(g)),A=this._getBoundsOffset(j,c,s);return Math.abs(A.x)<=1&&Math.abs(A.y)<=1?r:this.unproject(p.add(A),s)},_limitOffset:function(r,s){if(!s)return r;var c=this.getPixelBounds(),p=new ne(c.min.add(r),c.max.add(r));return r.add(this._getBoundsOffset(p,s))},_getBoundsOffset:function(r,s,c){var p=J(this.project(s.getNorthEast(),c),this.project(s.getSouthWest(),c)),g=p.min.subtract(r.min),j=p.max.subtract(r.max),A=this._rebound(g.x,-j.x),W=this._rebound(g.y,-j.y);return new M(A,W)},_rebound:function(r,s){return r+s>0?Math.round(r-s)/2:Math.max(0,Math.ceil(r))-Math.max(0,Math.floor(s))},_limitZoom:function(r){var s=this.getMinZoom(),c=this.getMaxZoom(),p=xe.any3d?this.options.zoomSnap:1;return p&&(r=Math.round(r/p)*p),Math.max(s,Math.min(c,r))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){et(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(r,s){var c=this._getCenterOffset(r)._trunc();return(s&&s.animate)!==!0&&!this.getSize().contains(c)?!1:(this.panBy(c,s),!0)},_createAnimProxy:function(){var r=this._proxy=Re("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(r),this.on("zoomanim",function(s){var c=Pc,p=this._proxy.style[c];Br(this._proxy,this.project(s.center,s.zoom),this.getZoomScale(s.zoom,1)),p===this._proxy.style[c]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){Ke(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var r=this.getCenter(),s=this.getZoom();Br(this._proxy,this.project(r,s),this.getZoomScale(s,1))},_catchTransitionEnd:function(r){this._animatingZoom&&r.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(r,s,c){if(this._animatingZoom)return!0;if(c=c||{},!this._zoomAnimated||c.animate===!1||this._nothingToAnimate()||Math.abs(s-this._zoom)>this.options.zoomAnimationThreshold)return!1;var p=this.getZoomScale(s),g=this._getCenterOffset(r)._divideBy(1-1/p);return c.animate!==!0&&!this.getSize().contains(g)?!1:(U(function(){this._moveStart(!0,c.noMoveStart||!1)._animateZoom(r,s,!0)},this),!0)},_animateZoom:function(r,s,c,p){this._mapPane&&(c&&(this._animatingZoom=!0,this._animateToCenter=r,this._animateToZoom=s,Ce(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:r,zoom:s,noUpdate:p}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(d(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&et(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function S1(r,s){return new Te(r,s)}var un=ae.extend({options:{position:"topright"},initialize:function(r){N(this,r)},getPosition:function(){return this.options.position},setPosition:function(r){var s=this._map;return s&&s.removeControl(this),this.options.position=r,s&&s.addControl(this),this},getContainer:function(){return this._container},addTo:function(r){this.remove(),this._map=r;var s=this._container=this.onAdd(r),c=this.getPosition(),p=r._controlCorners[c];return Ce(s,"leaflet-control"),c.indexOf("bottom")!==-1?p.insertBefore(s,p.firstChild):p.appendChild(s),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(Ke(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(r){this._map&&r&&r.screenX>0&&r.screenY>0&&this._map.getContainer().focus()}}),Ea=function(r){return new un(r)};Te.include({addControl:function(r){return r.addTo(this),this},removeControl:function(r){return r.remove(),this},_initControlPos:function(){var r=this._controlCorners={},s="leaflet-",c=this._controlContainer=Re("div",s+"control-container",this._container);function p(g,j){var A=s+g+" "+s+j;r[g+j]=Re("div",A,c)}p("top","left"),p("top","right"),p("bottom","left"),p("bottom","right")},_clearControlPos:function(){for(var r in this._controlCorners)Ke(this._controlCorners[r]);Ke(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Sp=un.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(r,s,c,p){return c<p?-1:p<c?1:0}},initialize:function(r,s,c){N(this,c),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var p in r)this._addLayer(r[p],p);for(p in s)this._addLayer(s[p],p,!0)},onAdd:function(r){this._initLayout(),this._update(),this._map=r,r.on("zoomend",this._checkDisabledLayers,this);for(var s=0;s<this._layers.length;s++)this._layers[s].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(r){return un.prototype.addTo.call(this,r),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var r=0;r<this._layers.length;r++)this._layers[r].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(r,s){return this._addLayer(r,s),this._map?this._update():this},addOverlay:function(r,s){return this._addLayer(r,s,!0),this._map?this._update():this},removeLayer:function(r){r.off("add remove",this._onLayerChange,this);var s=this._getLayer(u(r));return s&&this._layers.splice(this._layers.indexOf(s),1),this._map?this._update():this},expand:function(){Ce(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var r=this._map.getSize().y-(this._container.offsetTop+50);return r<this._section.clientHeight?(Ce(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=r+"px"):et(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return et(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var r="leaflet-control-layers",s=this._container=Re("div",r),c=this.options.collapsed;s.setAttribute("aria-haspopup",!0),Pa(s),Wc(s);var p=this._section=Re("section",r+"-list");c&&(this._map.on("click",this.collapse,this),ke(s,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var g=this._layersLink=Re("a",r+"-toggle",s);g.href="#",g.title="Layers",g.setAttribute("role","button"),ke(g,{keydown:function(j){j.keyCode===13&&this._expandSafely()},click:function(j){mt(j),this._expandSafely()}},this),c||this.expand(),this._baseLayersList=Re("div",r+"-base",p),this._separator=Re("div",r+"-separator",p),this._overlaysList=Re("div",r+"-overlays",p),s.appendChild(p)},_getLayer:function(r){for(var s=0;s<this._layers.length;s++)if(this._layers[s]&&u(this._layers[s].layer)===r)return this._layers[s]},_addLayer:function(r,s,c){this._map&&r.on("add remove",this._onLayerChange,this),this._layers.push({layer:r,name:s,overlay:c}),this.options.sortLayers&&this._layers.sort(d(function(p,g){return this.options.sortFunction(p.layer,g.layer,p.name,g.name)},this)),this.options.autoZIndex&&r.setZIndex&&(this._lastZIndex++,r.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;ds(this._baseLayersList),ds(this._overlaysList),this._layerControlInputs=[];var r,s,c,p,g=0;for(c=0;c<this._layers.length;c++)p=this._layers[c],this._addItem(p),s=s||p.overlay,r=r||!p.overlay,g+=p.overlay?0:1;return this.options.hideSingleBase&&(r=r&&g>1,this._baseLayersList.style.display=r?"":"none"),this._separator.style.display=s&&r?"":"none",this},_onLayerChange:function(r){this._handlingClick||this._update();var s=this._getLayer(u(r.target)),c=s.overlay?r.type==="add"?"overlayadd":"overlayremove":r.type==="add"?"baselayerchange":null;c&&this._map.fire(c,s)},_createRadioElement:function(r,s){var c='<input type="radio" class="leaflet-control-layers-selector" name="'+r+'"'+(s?' checked="checked"':"")+"/>",p=document.createElement("div");return p.innerHTML=c,p.firstChild},_addItem:function(r){var s=document.createElement("label"),c=this._map.hasLayer(r.layer),p;r.overlay?(p=document.createElement("input"),p.type="checkbox",p.className="leaflet-control-layers-selector",p.defaultChecked=c):p=this._createRadioElement("leaflet-base-layers_"+u(this),c),this._layerControlInputs.push(p),p.layerId=u(r.layer),ke(p,"click",this._onInputClick,this);var g=document.createElement("span");g.innerHTML=" "+r.name;var j=document.createElement("span");s.appendChild(j),j.appendChild(p),j.appendChild(g);var A=r.overlay?this._overlaysList:this._baseLayersList;return A.appendChild(s),this._checkDisabledLayers(),s},_onInputClick:function(){if(!this._preventClick){var r=this._layerControlInputs,s,c,p=[],g=[];this._handlingClick=!0;for(var j=r.length-1;j>=0;j--)s=r[j],c=this._getLayer(s.layerId).layer,s.checked?p.push(c):s.checked||g.push(c);for(j=0;j<g.length;j++)this._map.hasLayer(g[j])&&this._map.removeLayer(g[j]);for(j=0;j<p.length;j++)this._map.hasLayer(p[j])||this._map.addLayer(p[j]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var r=this._layerControlInputs,s,c,p=this._map.getZoom(),g=r.length-1;g>=0;g--)s=r[g],c=this._getLayer(s.layerId).layer,s.disabled=c.options.minZoom!==void 0&&p<c.options.minZoom||c.options.maxZoom!==void 0&&p>c.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var r=this._section;this._preventClick=!0,ke(r,"click",mt),this.expand();var s=this;setTimeout(function(){He(r,"click",mt),s._preventClick=!1})}}),N1=function(r,s,c){return new Sp(r,s,c)},Hc=un.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(r){var s="leaflet-control-zoom",c=Re("div",s+" leaflet-bar"),p=this.options;return this._zoomInButton=this._createButton(p.zoomInText,p.zoomInTitle,s+"-in",c,this._zoomIn),this._zoomOutButton=this._createButton(p.zoomOutText,p.zoomOutTitle,s+"-out",c,this._zoomOut),this._updateDisabled(),r.on("zoomend zoomlevelschange",this._updateDisabled,this),c},onRemove:function(r){r.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(r){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(r.shiftKey?3:1))},_zoomOut:function(r){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(r.shiftKey?3:1))},_createButton:function(r,s,c,p,g){var j=Re("a",c,p);return j.innerHTML=r,j.href="#",j.title=s,j.setAttribute("role","button"),j.setAttribute("aria-label",s),Pa(j),ke(j,"click",Wr),ke(j,"click",g,this),ke(j,"click",this._refocusOnMap,this),j},_updateDisabled:function(){var r=this._map,s="leaflet-disabled";et(this._zoomInButton,s),et(this._zoomOutButton,s),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||r._zoom===r.getMinZoom())&&(Ce(this._zoomOutButton,s),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||r._zoom===r.getMaxZoom())&&(Ce(this._zoomInButton,s),this._zoomInButton.setAttribute("aria-disabled","true"))}});Te.mergeOptions({zoomControl:!0}),Te.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new Hc,this.addControl(this.zoomControl))});var C1=function(r){return new Hc(r)},Np=un.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(r){var s="leaflet-control-scale",c=Re("div",s),p=this.options;return this._addScales(p,s+"-line",c),r.on(p.updateWhenIdle?"moveend":"move",this._update,this),r.whenReady(this._update,this),c},onRemove:function(r){r.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(r,s,c){r.metric&&(this._mScale=Re("div",s,c)),r.imperial&&(this._iScale=Re("div",s,c))},_update:function(){var r=this._map,s=r.getSize().y/2,c=r.distance(r.containerPointToLatLng([0,s]),r.containerPointToLatLng([this.options.maxWidth,s]));this._updateScales(c)},_updateScales:function(r){this.options.metric&&r&&this._updateMetric(r),this.options.imperial&&r&&this._updateImperial(r)},_updateMetric:function(r){var s=this._getRoundNum(r),c=s<1e3?s+" m":s/1e3+" km";this._updateScale(this._mScale,c,s/r)},_updateImperial:function(r){var s=r*3.2808399,c,p,g;s>5280?(c=s/5280,p=this._getRoundNum(c),this._updateScale(this._iScale,p+" mi",p/c)):(g=this._getRoundNum(s),this._updateScale(this._iScale,g+" ft",g/s))},_updateScale:function(r,s,c){r.style.width=Math.round(this.options.maxWidth*c)+"px",r.innerHTML=s},_getRoundNum:function(r){var s=Math.pow(10,(Math.floor(r)+"").length-1),c=r/s;return c=c>=10?10:c>=5?5:c>=3?3:c>=2?2:1,s*c}}),z1=function(r){return new Np(r)},P1='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',Zc=un.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(xe.inlineSvg?P1+" ":"")+"Leaflet</a>"},initialize:function(r){N(this,r),this._attributions={}},onAdd:function(r){r.attributionControl=this,this._container=Re("div","leaflet-control-attribution"),Pa(this._container);for(var s in r._layers)r._layers[s].getAttribution&&this.addAttribution(r._layers[s].getAttribution());return this._update(),r.on("layeradd",this._addAttribution,this),this._container},onRemove:function(r){r.off("layeradd",this._addAttribution,this)},_addAttribution:function(r){r.layer.getAttribution&&(this.addAttribution(r.layer.getAttribution()),r.layer.once("remove",function(){this.removeAttribution(r.layer.getAttribution())},this))},setPrefix:function(r){return this.options.prefix=r,this._update(),this},addAttribution:function(r){return r?(this._attributions[r]||(this._attributions[r]=0),this._attributions[r]++,this._update(),this):this},removeAttribution:function(r){return r?(this._attributions[r]&&(this._attributions[r]--,this._update()),this):this},_update:function(){if(this._map){var r=[];for(var s in this._attributions)this._attributions[s]&&r.push(s);var c=[];this.options.prefix&&c.push(this.options.prefix),r.length&&c.push(r.join(", ")),this._container.innerHTML=c.join(' <span aria-hidden="true">|</span> ')}}});Te.mergeOptions({attributionControl:!0}),Te.addInitHook(function(){this.options.attributionControl&&new Zc().addTo(this)});var E1=function(r){return new Zc(r)};un.Layers=Sp,un.Zoom=Hc,un.Scale=Np,un.Attribution=Zc,Ea.layers=N1,Ea.zoom=C1,Ea.scale=z1,Ea.attribution=E1;var kn=ae.extend({initialize:function(r){this._map=r},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});kn.addTo=function(r,s){return r.addHandler(s,this),this};var L1={Events:X},Cp=xe.touch?"touchstart mousedown":"mousedown",ir=G.extend({options:{clickTolerance:3},initialize:function(r,s,c,p){N(this,p),this._element=r,this._dragStartTarget=s||r,this._preventOutline=c},enable:function(){this._enabled||(ke(this._dragStartTarget,Cp,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(ir._dragging===this&&this.finishDrag(!0),He(this._dragStartTarget,Cp,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(r){if(this._enabled&&(this._moved=!1,!Ec(this._element,"leaflet-zoom-anim"))){if(r.touches&&r.touches.length!==1){ir._dragging===this&&this.finishDrag();return}if(!(ir._dragging||r.shiftKey||r.which!==1&&r.button!==1&&!r.touches)&&(ir._dragging=this,this._preventOutline&&Rc(this._element),Tc(),Na(),!this._moving)){this.fire("down");var s=r.touches?r.touches[0]:r,c=vp(this._element);this._startPoint=new M(s.clientX,s.clientY),this._startPos=Fr(this._element),this._parentScale=Oc(c);var p=r.type==="mousedown";ke(document,p?"mousemove":"touchmove",this._onMove,this),ke(document,p?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(r){if(this._enabled){if(r.touches&&r.touches.length>1){this._moved=!0;return}var s=r.touches&&r.touches.length===1?r.touches[0]:r,c=new M(s.clientX,s.clientY)._subtract(this._startPoint);!c.x&&!c.y||Math.abs(c.x)+Math.abs(c.y)<this.options.clickTolerance||(c.x/=this._parentScale.x,c.y/=this._parentScale.y,mt(r),this._moved||(this.fire("dragstart"),this._moved=!0,Ce(document.body,"leaflet-dragging"),this._lastTarget=r.target||r.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),Ce(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(c),this._moving=!0,this._lastEvent=r,this._updatePosition())}},_updatePosition:function(){var r={originalEvent:this._lastEvent};this.fire("predrag",r),it(this._element,this._newPos),this.fire("drag",r)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(r){et(document.body,"leaflet-dragging"),this._lastTarget&&(et(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),He(document,"mousemove touchmove",this._onMove,this),He(document,"mouseup touchend touchcancel",this._onUp,this),Ac(),Ca();var s=this._moved&&this._moving;this._moving=!1,ir._dragging=!1,s&&this.fire("dragend",{noInertia:r,distance:this._newPos.distanceTo(this._startPos)})}});function zp(r,s,c){var p,g=[1,4,2,8],j,A,W,$,ee,ue,ve,Pe;for(j=0,ue=r.length;j<ue;j++)r[j]._code=Ur(r[j],s);for(W=0;W<4;W++){for(ve=g[W],p=[],j=0,ue=r.length,A=ue-1;j<ue;A=j++)$=r[j],ee=r[A],$._code&ve?ee._code&ve||(Pe=fs(ee,$,ve,s,c),Pe._code=Ur(Pe,s),p.push(Pe)):(ee._code&ve&&(Pe=fs(ee,$,ve,s,c),Pe._code=Ur(Pe,s),p.push(Pe)),p.push($));r=p}return r}function Pp(r,s){var c,p,g,j,A,W,$,ee,ue;if(!r||r.length===0)throw new Error("latlngs not passed");en(r)||(console.warn("latlngs are not flat! Only the first ring will be used"),r=r[0]);var ve=V([0,0]),Pe=O(r),Ct=Pe.getNorthWest().distanceTo(Pe.getSouthWest())*Pe.getNorthEast().distanceTo(Pe.getNorthWest());Ct<1700&&(ve=$c(r));var ut=r.length,tn=[];for(c=0;c<ut;c++){var Tt=V(r[c]);tn.push(s.project(V([Tt.lat-ve.lat,Tt.lng-ve.lng])))}for(W=$=ee=0,c=0,p=ut-1;c<ut;p=c++)g=tn[c],j=tn[p],A=g.y*j.x-j.y*g.x,$+=(g.x+j.x)*A,ee+=(g.y+j.y)*A,W+=A*3;W===0?ue=tn[0]:ue=[$/W,ee/W];var Pi=s.unproject(Z(ue));return V([Pi.lat+ve.lat,Pi.lng+ve.lng])}function $c(r){for(var s=0,c=0,p=0,g=0;g<r.length;g++){var j=V(r[g]);s+=j.lat,c+=j.lng,p++}return V([s/p,c/p])}var M1={__proto__:null,clipPolygon:zp,polygonCenter:Pp,centroid:$c};function Ep(r,s){if(!s||!r.length)return r.slice();var c=s*s;return r=I1(r,c),r=A1(r,c),r}function Lp(r,s,c){return Math.sqrt(La(r,s,c,!0))}function T1(r,s,c){return La(r,s,c)}function A1(r,s){var c=r.length,p=typeof Uint8Array<"u"?Uint8Array:Array,g=new p(c);g[0]=g[c-1]=1,qc(r,g,s,0,c-1);var j,A=[];for(j=0;j<c;j++)g[j]&&A.push(r[j]);return A}function qc(r,s,c,p,g){var j=0,A,W,$;for(W=p+1;W<=g-1;W++)$=La(r[W],r[p],r[g],!0),$>j&&(A=W,j=$);j>c&&(s[A]=1,qc(r,s,c,p,A),qc(r,s,c,A,g))}function I1(r,s){for(var c=[r[0]],p=1,g=0,j=r.length;p<j;p++)R1(r[p],r[g])>s&&(c.push(r[p]),g=p);return g<j-1&&c.push(r[j-1]),c}var Mp;function Tp(r,s,c,p,g){var j=p?Mp:Ur(r,c),A=Ur(s,c),W,$,ee;for(Mp=A;;){if(!(j|A))return[r,s];if(j&A)return!1;W=j||A,$=fs(r,s,W,c,g),ee=Ur($,c),W===j?(r=$,j=ee):(s=$,A=ee)}}function fs(r,s,c,p,g){var j=s.x-r.x,A=s.y-r.y,W=p.min,$=p.max,ee,ue;return c&8?(ee=r.x+j*($.y-r.y)/A,ue=$.y):c&4?(ee=r.x+j*(W.y-r.y)/A,ue=W.y):c&2?(ee=$.x,ue=r.y+A*($.x-r.x)/j):c&1&&(ee=W.x,ue=r.y+A*(W.x-r.x)/j),new M(ee,ue,g)}function Ur(r,s){var c=0;return r.x<s.min.x?c|=1:r.x>s.max.x&&(c|=2),r.y<s.min.y?c|=4:r.y>s.max.y&&(c|=8),c}function R1(r,s){var c=s.x-r.x,p=s.y-r.y;return c*c+p*p}function La(r,s,c,p){var g=s.x,j=s.y,A=c.x-g,W=c.y-j,$=A*A+W*W,ee;return $>0&&(ee=((r.x-g)*A+(r.y-j)*W)/$,ee>1?(g=c.x,j=c.y):ee>0&&(g+=A*ee,j+=W*ee)),A=r.x-g,W=r.y-j,p?A*A+W*W:new M(g,j)}function en(r){return!k(r[0])||typeof r[0][0]!="object"&&typeof r[0][0]<"u"}function Ap(r){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),en(r)}function Ip(r,s){var c,p,g,j,A,W,$,ee;if(!r||r.length===0)throw new Error("latlngs not passed");en(r)||(console.warn("latlngs are not flat! Only the first ring will be used"),r=r[0]);var ue=V([0,0]),ve=O(r),Pe=ve.getNorthWest().distanceTo(ve.getSouthWest())*ve.getNorthEast().distanceTo(ve.getNorthWest());Pe<1700&&(ue=$c(r));var Ct=r.length,ut=[];for(c=0;c<Ct;c++){var tn=V(r[c]);ut.push(s.project(V([tn.lat-ue.lat,tn.lng-ue.lng])))}for(c=0,p=0;c<Ct-1;c++)p+=ut[c].distanceTo(ut[c+1])/2;if(p===0)ee=ut[0];else for(c=0,j=0;c<Ct-1;c++)if(A=ut[c],W=ut[c+1],g=A.distanceTo(W),j+=g,j>p){$=(j-p)/g,ee=[W.x-$*(W.x-A.x),W.y-$*(W.y-A.y)];break}var Tt=s.unproject(Z(ee));return V([Tt.lat+ue.lat,Tt.lng+ue.lng])}var O1={__proto__:null,simplify:Ep,pointToSegmentDistance:Lp,closestPointOnSegment:T1,clipSegment:Tp,_getEdgeIntersection:fs,_getBitCode:Ur,_sqClosestPointOnSegment:La,isFlat:en,_flat:Ap,polylineCenter:Ip},Vc={project:function(r){return new M(r.lng,r.lat)},unproject:function(r){return new H(r.y,r.x)},bounds:new ne([-180,-90],[180,90])},Gc={R:6378137,R_MINOR:6356752314245179e-9,bounds:new ne([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(r){var s=Math.PI/180,c=this.R,p=r.lat*s,g=this.R_MINOR/c,j=Math.sqrt(1-g*g),A=j*Math.sin(p),W=Math.tan(Math.PI/4-p/2)/Math.pow((1-A)/(1+A),j/2);return p=-c*Math.log(Math.max(W,1e-10)),new M(r.lng*s*c,p)},unproject:function(r){for(var s=180/Math.PI,c=this.R,p=this.R_MINOR/c,g=Math.sqrt(1-p*p),j=Math.exp(-r.y/c),A=Math.PI/2-2*Math.atan(j),W=0,$=.1,ee;W<15&&Math.abs($)>1e-7;W++)ee=g*Math.sin(A),ee=Math.pow((1-ee)/(1+ee),g/2),$=Math.PI/2-2*Math.atan(j*ee)-A,A+=$;return new H(A*s,r.x*s/c)}},B1={__proto__:null,LonLat:Vc,Mercator:Gc,SphericalMercator:je},F1=o({},fe,{code:"EPSG:3395",projection:Gc,transformation:function(){var r=.5/(Math.PI*Gc.R);return Ue(r,.5,-r,.5)}()}),Rp=o({},fe,{code:"EPSG:4326",projection:Vc,transformation:Ue(1/180,1,-1/180,.5)}),D1=o({},le,{projection:Vc,transformation:Ue(1,0,-1,0),scale:function(r){return Math.pow(2,r)},zoom:function(r){return Math.log(r)/Math.LN2},distance:function(r,s){var c=s.lng-r.lng,p=s.lat-r.lat;return Math.sqrt(c*c+p*p)},infinite:!0});le.Earth=fe,le.EPSG3395=F1,le.EPSG3857=Ut,le.EPSG900913=mi,le.EPSG4326=Rp,le.Simple=D1;var hn=G.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(r){return r.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(r){return r&&r.removeLayer(this),this},getPane:function(r){return this._map.getPane(r?this.options[r]||r:this.options.pane)},addInteractiveTarget:function(r){return this._map._targets[u(r)]=this,this},removeInteractiveTarget:function(r){return delete this._map._targets[u(r)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(r){var s=r.target;if(s.hasLayer(this)){if(this._map=s,this._zoomAnimated=s._zoomAnimated,this.getEvents){var c=this.getEvents();s.on(c,this),this.once("remove",function(){s.off(c,this)},this)}this.onAdd(s),this.fire("add"),s.fire("layeradd",{layer:this})}}});Te.include({addLayer:function(r){if(!r._layerAdd)throw new Error("The provided object is not a Layer.");var s=u(r);return this._layers[s]?this:(this._layers[s]=r,r._mapToAdd=this,r.beforeAdd&&r.beforeAdd(this),this.whenReady(r._layerAdd,r),this)},removeLayer:function(r){var s=u(r);return this._layers[s]?(this._loaded&&r.onRemove(this),delete this._layers[s],this._loaded&&(this.fire("layerremove",{layer:r}),r.fire("remove")),r._map=r._mapToAdd=null,this):this},hasLayer:function(r){return u(r)in this._layers},eachLayer:function(r,s){for(var c in this._layers)r.call(s,this._layers[c]);return this},_addLayers:function(r){r=r?k(r)?r:[r]:[];for(var s=0,c=r.length;s<c;s++)this.addLayer(r[s])},_addZoomLimit:function(r){(!isNaN(r.options.maxZoom)||!isNaN(r.options.minZoom))&&(this._zoomBoundLayers[u(r)]=r,this._updateZoomLevels())},_removeZoomLimit:function(r){var s=u(r);this._zoomBoundLayers[s]&&(delete this._zoomBoundLayers[s],this._updateZoomLevels())},_updateZoomLevels:function(){var r=1/0,s=-1/0,c=this._getZoomSpan();for(var p in this._zoomBoundLayers){var g=this._zoomBoundLayers[p].options;r=g.minZoom===void 0?r:Math.min(r,g.minZoom),s=g.maxZoom===void 0?s:Math.max(s,g.maxZoom)}this._layersMaxZoom=s===-1/0?void 0:s,this._layersMinZoom=r===1/0?void 0:r,c!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var ki=hn.extend({initialize:function(r,s){N(this,s),this._layers={};var c,p;if(r)for(c=0,p=r.length;c<p;c++)this.addLayer(r[c])},addLayer:function(r){var s=this.getLayerId(r);return this._layers[s]=r,this._map&&this._map.addLayer(r),this},removeLayer:function(r){var s=r in this._layers?r:this.getLayerId(r);return this._map&&this._layers[s]&&this._map.removeLayer(this._layers[s]),delete this._layers[s],this},hasLayer:function(r){var s=typeof r=="number"?r:this.getLayerId(r);return s in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(r){var s=Array.prototype.slice.call(arguments,1),c,p;for(c in this._layers)p=this._layers[c],p[r]&&p[r].apply(p,s);return this},onAdd:function(r){this.eachLayer(r.addLayer,r)},onRemove:function(r){this.eachLayer(r.removeLayer,r)},eachLayer:function(r,s){for(var c in this._layers)r.call(s,this._layers[c]);return this},getLayer:function(r){return this._layers[r]},getLayers:function(){var r=[];return this.eachLayer(r.push,r),r},setZIndex:function(r){return this.invoke("setZIndex",r)},getLayerId:function(r){return u(r)}}),W1=function(r,s){return new ki(r,s)},Rn=ki.extend({addLayer:function(r){return this.hasLayer(r)?this:(r.addEventParent(this),ki.prototype.addLayer.call(this,r),this.fire("layeradd",{layer:r}))},removeLayer:function(r){return this.hasLayer(r)?(r in this._layers&&(r=this._layers[r]),r.removeEventParent(this),ki.prototype.removeLayer.call(this,r),this.fire("layerremove",{layer:r})):this},setStyle:function(r){return this.invoke("setStyle",r)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var r=new te;for(var s in this._layers){var c=this._layers[s];r.extend(c.getBounds?c.getBounds():c.getLatLng())}return r}}),U1=function(r,s){return new Rn(r,s)},Si=ae.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(r){N(this,r)},createIcon:function(r){return this._createIcon("icon",r)},createShadow:function(r){return this._createIcon("shadow",r)},_createIcon:function(r,s){var c=this._getIconUrl(r);if(!c){if(r==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var p=this._createImg(c,s&&s.tagName==="IMG"?s:null);return this._setIconStyles(p,r),(this.options.crossOrigin||this.options.crossOrigin==="")&&(p.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),p},_setIconStyles:function(r,s){var c=this.options,p=c[s+"Size"];typeof p=="number"&&(p=[p,p]);var g=Z(p),j=Z(s==="shadow"&&c.shadowAnchor||c.iconAnchor||g&&g.divideBy(2,!0));r.className="leaflet-marker-"+s+" "+(c.className||""),j&&(r.style.marginLeft=-j.x+"px",r.style.marginTop=-j.y+"px"),g&&(r.style.width=g.x+"px",r.style.height=g.y+"px")},_createImg:function(r,s){return s=s||document.createElement("img"),s.src=r,s},_getIconUrl:function(r){return xe.retina&&this.options[r+"RetinaUrl"]||this.options[r+"Url"]}});function H1(r){return new Si(r)}var Ma=Si.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(r){return typeof Ma.imagePath!="string"&&(Ma.imagePath=this._detectIconPath()),(this.options.imagePath||Ma.imagePath)+Si.prototype._getIconUrl.call(this,r)},_stripUrl:function(r){var s=function(c,p,g){var j=p.exec(c);return j&&j[g]};return r=s(r,/^url\((['"])?(.+)\1\)$/,2),r&&s(r,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var r=Re("div","leaflet-default-icon-path",document.body),s=Sa(r,"background-image")||Sa(r,"backgroundImage");if(document.body.removeChild(r),s=this._stripUrl(s),s)return s;var c=document.querySelector('link[href$="leaflet.css"]');return c?c.href.substring(0,c.href.length-11-1):""}}),Op=kn.extend({initialize:function(r){this._marker=r},addHooks:function(){var r=this._marker._icon;this._draggable||(this._draggable=new ir(r,r,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),Ce(r,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&et(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(r){var s=this._marker,c=s._map,p=this._marker.options.autoPanSpeed,g=this._marker.options.autoPanPadding,j=Fr(s._icon),A=c.getPixelBounds(),W=c.getPixelOrigin(),$=J(A.min._subtract(W).add(g),A.max._subtract(W).subtract(g));if(!$.contains(j)){var ee=Z((Math.max($.max.x,j.x)-$.max.x)/(A.max.x-$.max.x)-(Math.min($.min.x,j.x)-$.min.x)/(A.min.x-$.min.x),(Math.max($.max.y,j.y)-$.max.y)/(A.max.y-$.max.y)-(Math.min($.min.y,j.y)-$.min.y)/(A.min.y-$.min.y)).multiplyBy(p);c.panBy(ee,{animate:!1}),this._draggable._newPos._add(ee),this._draggable._startPos._add(ee),it(s._icon,this._draggable._newPos),this._onDrag(r),this._panRequest=U(this._adjustPan.bind(this,r))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(r){this._marker.options.autoPan&&(F(this._panRequest),this._panRequest=U(this._adjustPan.bind(this,r)))},_onDrag:function(r){var s=this._marker,c=s._shadow,p=Fr(s._icon),g=s._map.layerPointToLatLng(p);c&&it(c,p),s._latlng=g,r.latlng=g,r.oldLatLng=this._oldLatLng,s.fire("move",r).fire("drag",r)},_onDragEnd:function(r){F(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",r)}}),gs=hn.extend({options:{icon:new Ma,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(r,s){N(this,s),this._latlng=V(r)},onAdd:function(r){this._zoomAnimated=this._zoomAnimated&&r.options.markerZoomAnimation,this._zoomAnimated&&r.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(r){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&r.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(r){var s=this._latlng;return this._latlng=V(r),this.update(),this.fire("move",{oldLatLng:s,latlng:this._latlng})},setZIndexOffset:function(r){return this.options.zIndexOffset=r,this.update()},getIcon:function(){return this.options.icon},setIcon:function(r){return this.options.icon=r,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var r=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(r)}return this},_initIcon:function(){var r=this.options,s="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),c=r.icon.createIcon(this._icon),p=!1;c!==this._icon&&(this._icon&&this._removeIcon(),p=!0,r.title&&(c.title=r.title),c.tagName==="IMG"&&(c.alt=r.alt||"")),Ce(c,s),r.keyboard&&(c.tabIndex="0",c.setAttribute("role","button")),this._icon=c,r.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&ke(c,"focus",this._panOnFocus,this);var g=r.icon.createShadow(this._shadow),j=!1;g!==this._shadow&&(this._removeShadow(),j=!0),g&&(Ce(g,s),g.alt=""),this._shadow=g,r.opacity<1&&this._updateOpacity(),p&&this.getPane().appendChild(this._icon),this._initInteraction(),g&&j&&this.getPane(r.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&He(this._icon,"focus",this._panOnFocus,this),Ke(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&Ke(this._shadow),this._shadow=null},_setPos:function(r){this._icon&&it(this._icon,r),this._shadow&&it(this._shadow,r),this._zIndex=r.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(r){this._icon&&(this._icon.style.zIndex=this._zIndex+r)},_animateZoom:function(r){var s=this._map._latLngToNewLayerPoint(this._latlng,r.zoom,r.center).round();this._setPos(s)},_initInteraction:function(){if(this.options.interactive&&(Ce(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Op)){var r=this.options.draggable;this.dragging&&(r=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Op(this),r&&this.dragging.enable()}},setOpacity:function(r){return this.options.opacity=r,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var r=this.options.opacity;this._icon&&Xt(this._icon,r),this._shadow&&Xt(this._shadow,r)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var r=this._map;if(r){var s=this.options.icon.options,c=s.iconSize?Z(s.iconSize):Z(0,0),p=s.iconAnchor?Z(s.iconAnchor):Z(0,0);r.panInside(this._latlng,{paddingTopLeft:p,paddingBottomRight:c.subtract(p)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function Z1(r,s){return new gs(r,s)}var ar=hn.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(r){this._renderer=r.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(r){return N(this,r),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&r&&Object.prototype.hasOwnProperty.call(r,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),xs=ar.extend({options:{fill:!0,radius:10},initialize:function(r,s){N(this,s),this._latlng=V(r),this._radius=this.options.radius},setLatLng:function(r){var s=this._latlng;return this._latlng=V(r),this.redraw(),this.fire("move",{oldLatLng:s,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(r){return this.options.radius=this._radius=r,this.redraw()},getRadius:function(){return this._radius},setStyle:function(r){var s=r&&r.radius||this._radius;return ar.prototype.setStyle.call(this,r),this.setRadius(s),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var r=this._radius,s=this._radiusY||r,c=this._clickTolerance(),p=[r+c,s+c];this._pxBounds=new ne(this._point.subtract(p),this._point.add(p))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(r){return r.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function $1(r,s){return new xs(r,s)}var Kc=xs.extend({initialize:function(r,s,c){if(typeof s=="number"&&(s=o({},c,{radius:s})),N(this,s),this._latlng=V(r),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(r){return this._mRadius=r,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var r=[this._radius,this._radiusY||this._radius];return new te(this._map.layerPointToLatLng(this._point.subtract(r)),this._map.layerPointToLatLng(this._point.add(r)))},setStyle:ar.prototype.setStyle,_project:function(){var r=this._latlng.lng,s=this._latlng.lat,c=this._map,p=c.options.crs;if(p.distance===fe.distance){var g=Math.PI/180,j=this._mRadius/fe.R/g,A=c.project([s+j,r]),W=c.project([s-j,r]),$=A.add(W).divideBy(2),ee=c.unproject($).lat,ue=Math.acos((Math.cos(j*g)-Math.sin(s*g)*Math.sin(ee*g))/(Math.cos(s*g)*Math.cos(ee*g)))/g;(isNaN(ue)||ue===0)&&(ue=j/Math.cos(Math.PI/180*s)),this._point=$.subtract(c.getPixelOrigin()),this._radius=isNaN(ue)?0:$.x-c.project([ee,r-ue]).x,this._radiusY=$.y-A.y}else{var ve=p.unproject(p.project(this._latlng).subtract([this._mRadius,0]));this._point=c.latLngToLayerPoint(this._latlng),this._radius=this._point.x-c.latLngToLayerPoint(ve).x}this._updateBounds()}});function q1(r,s,c){return new Kc(r,s,c)}var On=ar.extend({options:{smoothFactor:1,noClip:!1},initialize:function(r,s){N(this,s),this._setLatLngs(r)},getLatLngs:function(){return this._latlngs},setLatLngs:function(r){return this._setLatLngs(r),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(r){for(var s=1/0,c=null,p=La,g,j,A=0,W=this._parts.length;A<W;A++)for(var $=this._parts[A],ee=1,ue=$.length;ee<ue;ee++){g=$[ee-1],j=$[ee];var ve=p(r,g,j,!0);ve<s&&(s=ve,c=p(r,g,j))}return c&&(c.distance=Math.sqrt(s)),c},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Ip(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(r,s){return s=s||this._defaultShape(),r=V(r),s.push(r),this._bounds.extend(r),this.redraw()},_setLatLngs:function(r){this._bounds=new te,this._latlngs=this._convertLatLngs(r)},_defaultShape:function(){return en(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(r){for(var s=[],c=en(r),p=0,g=r.length;p<g;p++)c?(s[p]=V(r[p]),this._bounds.extend(s[p])):s[p]=this._convertLatLngs(r[p]);return s},_project:function(){var r=new ne;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,r),this._bounds.isValid()&&r.isValid()&&(this._rawPxBounds=r,this._updateBounds())},_updateBounds:function(){var r=this._clickTolerance(),s=new M(r,r);this._rawPxBounds&&(this._pxBounds=new ne([this._rawPxBounds.min.subtract(s),this._rawPxBounds.max.add(s)]))},_projectLatlngs:function(r,s,c){var p=r[0]instanceof H,g=r.length,j,A;if(p){for(A=[],j=0;j<g;j++)A[j]=this._map.latLngToLayerPoint(r[j]),c.extend(A[j]);s.push(A)}else for(j=0;j<g;j++)this._projectLatlngs(r[j],s,c)},_clipPoints:function(){var r=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(r))){if(this.options.noClip){this._parts=this._rings;return}var s=this._parts,c,p,g,j,A,W,$;for(c=0,g=0,j=this._rings.length;c<j;c++)for($=this._rings[c],p=0,A=$.length;p<A-1;p++)W=Tp($[p],$[p+1],r,p,!0),W&&(s[g]=s[g]||[],s[g].push(W[0]),(W[1]!==$[p+1]||p===A-2)&&(s[g].push(W[1]),g++))}},_simplifyPoints:function(){for(var r=this._parts,s=this.options.smoothFactor,c=0,p=r.length;c<p;c++)r[c]=Ep(r[c],s)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(r,s){var c,p,g,j,A,W,$=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(r))return!1;for(c=0,j=this._parts.length;c<j;c++)for(W=this._parts[c],p=0,A=W.length,g=A-1;p<A;g=p++)if(!(!s&&p===0)&&Lp(r,W[g],W[p])<=$)return!0;return!1}});function V1(r,s){return new On(r,s)}On._flat=Ap;var Ni=On.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Pp(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(r){var s=On.prototype._convertLatLngs.call(this,r),c=s.length;return c>=2&&s[0]instanceof H&&s[0].equals(s[c-1])&&s.pop(),s},_setLatLngs:function(r){On.prototype._setLatLngs.call(this,r),en(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return en(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var r=this._renderer._bounds,s=this.options.weight,c=new M(s,s);if(r=new ne(r.min.subtract(c),r.max.add(c)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(r))){if(this.options.noClip){this._parts=this._rings;return}for(var p=0,g=this._rings.length,j;p<g;p++)j=zp(this._rings[p],r,!0),j.length&&this._parts.push(j)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(r){var s=!1,c,p,g,j,A,W,$,ee;if(!this._pxBounds||!this._pxBounds.contains(r))return!1;for(j=0,$=this._parts.length;j<$;j++)for(c=this._parts[j],A=0,ee=c.length,W=ee-1;A<ee;W=A++)p=c[A],g=c[W],p.y>r.y!=g.y>r.y&&r.x<(g.x-p.x)*(r.y-p.y)/(g.y-p.y)+p.x&&(s=!s);return s||On.prototype._containsPoint.call(this,r,!0)}});function G1(r,s){return new Ni(r,s)}var Bn=Rn.extend({initialize:function(r,s){N(this,s),this._layers={},r&&this.addData(r)},addData:function(r){var s=k(r)?r:r.features,c,p,g;if(s){for(c=0,p=s.length;c<p;c++)g=s[c],(g.geometries||g.geometry||g.features||g.coordinates)&&this.addData(g);return this}var j=this.options;if(j.filter&&!j.filter(r))return this;var A=ys(r,j);return A?(A.feature=ws(r),A.defaultOptions=A.options,this.resetStyle(A),j.onEachFeature&&j.onEachFeature(r,A),this.addLayer(A)):this},resetStyle:function(r){return r===void 0?this.eachLayer(this.resetStyle,this):(r.options=o({},r.defaultOptions),this._setLayerStyle(r,this.options.style),this)},setStyle:function(r){return this.eachLayer(function(s){this._setLayerStyle(s,r)},this)},_setLayerStyle:function(r,s){r.setStyle&&(typeof s=="function"&&(s=s(r.feature)),r.setStyle(s))}});function ys(r,s){var c=r.type==="Feature"?r.geometry:r,p=c?c.coordinates:null,g=[],j=s&&s.pointToLayer,A=s&&s.coordsToLatLng||Qc,W,$,ee,ue;if(!p&&!c)return null;switch(c.type){case"Point":return W=A(p),Bp(j,r,W,s);case"MultiPoint":for(ee=0,ue=p.length;ee<ue;ee++)W=A(p[ee]),g.push(Bp(j,r,W,s));return new Rn(g);case"LineString":case"MultiLineString":return $=vs(p,c.type==="LineString"?0:1,A),new On($,s);case"Polygon":case"MultiPolygon":return $=vs(p,c.type==="Polygon"?1:2,A),new Ni($,s);case"GeometryCollection":for(ee=0,ue=c.geometries.length;ee<ue;ee++){var ve=ys({geometry:c.geometries[ee],type:"Feature",properties:r.properties},s);ve&&g.push(ve)}return new Rn(g);case"FeatureCollection":for(ee=0,ue=c.features.length;ee<ue;ee++){var Pe=ys(c.features[ee],s);Pe&&g.push(Pe)}return new Rn(g);default:throw new Error("Invalid GeoJSON object.")}}function Bp(r,s,c,p){return r?r(s,c):new gs(c,p&&p.markersInheritOptions&&p)}function Qc(r){return new H(r[1],r[0],r[2])}function vs(r,s,c){for(var p=[],g=0,j=r.length,A;g<j;g++)A=s?vs(r[g],s-1,c):(c||Qc)(r[g]),p.push(A);return p}function Yc(r,s){return r=V(r),r.alt!==void 0?[v(r.lng,s),v(r.lat,s),v(r.alt,s)]:[v(r.lng,s),v(r.lat,s)]}function bs(r,s,c,p){for(var g=[],j=0,A=r.length;j<A;j++)g.push(s?bs(r[j],en(r[j])?0:s-1,c,p):Yc(r[j],p));return!s&&c&&g.length>0&&g.push(g[0].slice()),g}function Ci(r,s){return r.feature?o({},r.feature,{geometry:s}):ws(s)}function ws(r){return r.type==="Feature"||r.type==="FeatureCollection"?r:{type:"Feature",properties:{},geometry:r}}var Jc={toGeoJSON:function(r){return Ci(this,{type:"Point",coordinates:Yc(this.getLatLng(),r)})}};gs.include(Jc),Kc.include(Jc),xs.include(Jc),On.include({toGeoJSON:function(r){var s=!en(this._latlngs),c=bs(this._latlngs,s?1:0,!1,r);return Ci(this,{type:(s?"Multi":"")+"LineString",coordinates:c})}}),Ni.include({toGeoJSON:function(r){var s=!en(this._latlngs),c=s&&!en(this._latlngs[0]),p=bs(this._latlngs,c?2:s?1:0,!0,r);return s||(p=[p]),Ci(this,{type:(c?"Multi":"")+"Polygon",coordinates:p})}}),ki.include({toMultiPoint:function(r){var s=[];return this.eachLayer(function(c){s.push(c.toGeoJSON(r).geometry.coordinates)}),Ci(this,{type:"MultiPoint",coordinates:s})},toGeoJSON:function(r){var s=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(s==="MultiPoint")return this.toMultiPoint(r);var c=s==="GeometryCollection",p=[];return this.eachLayer(function(g){if(g.toGeoJSON){var j=g.toGeoJSON(r);if(c)p.push(j.geometry);else{var A=ws(j);A.type==="FeatureCollection"?p.push.apply(p,A.features):p.push(A)}}}),c?Ci(this,{geometries:p,type:"GeometryCollection"}):{type:"FeatureCollection",features:p}}});function Fp(r,s){return new Bn(r,s)}var K1=Fp,_s=hn.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(r,s,c){this._url=r,this._bounds=O(s),N(this,c)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(Ce(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){Ke(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(r){return this.options.opacity=r,this._image&&this._updateOpacity(),this},setStyle:function(r){return r.opacity&&this.setOpacity(r.opacity),this},bringToFront:function(){return this._map&&_i(this._image),this},bringToBack:function(){return this._map&&ji(this._image),this},setUrl:function(r){return this._url=r,this._image&&(this._image.src=r),this},setBounds:function(r){return this._bounds=O(r),this._map&&this._reset(),this},getEvents:function(){var r={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(r.zoomanim=this._animateZoom),r},setZIndex:function(r){return this.options.zIndex=r,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var r=this._url.tagName==="IMG",s=this._image=r?this._url:Re("img");if(Ce(s,"leaflet-image-layer"),this._zoomAnimated&&Ce(s,"leaflet-zoom-animated"),this.options.className&&Ce(s,this.options.className),s.onselectstart=y,s.onmousemove=y,s.onload=d(this.fire,this,"load"),s.onerror=d(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(s.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),r){this._url=s.src;return}s.src=this._url,s.alt=this.options.alt},_animateZoom:function(r){var s=this._map.getZoomScale(r.zoom),c=this._map._latLngBoundsToNewLayerBounds(this._bounds,r.zoom,r.center).min;Br(this._image,c,s)},_reset:function(){var r=this._image,s=new ne(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),c=s.getSize();it(r,s.min),r.style.width=c.x+"px",r.style.height=c.y+"px"},_updateOpacity:function(){Xt(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var r=this.options.errorOverlayUrl;r&&this._url!==r&&(this._url=r,this._image.src=r)},getCenter:function(){return this._bounds.getCenter()}}),Q1=function(r,s,c){return new _s(r,s,c)},Dp=_s.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var r=this._url.tagName==="VIDEO",s=this._image=r?this._url:Re("video");if(Ce(s,"leaflet-image-layer"),this._zoomAnimated&&Ce(s,"leaflet-zoom-animated"),this.options.className&&Ce(s,this.options.className),s.onselectstart=y,s.onmousemove=y,s.onloadeddata=d(this.fire,this,"load"),r){for(var c=s.getElementsByTagName("source"),p=[],g=0;g<c.length;g++)p.push(c[g].src);this._url=c.length>0?p:[s.src];return}k(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(s.style,"objectFit")&&(s.style.objectFit="fill"),s.autoplay=!!this.options.autoplay,s.loop=!!this.options.loop,s.muted=!!this.options.muted,s.playsInline=!!this.options.playsInline;for(var j=0;j<this._url.length;j++){var A=Re("source");A.src=this._url[j],s.appendChild(A)}}});function Y1(r,s,c){return new Dp(r,s,c)}var Wp=_s.extend({_initImage:function(){var r=this._image=this._url;Ce(r,"leaflet-image-layer"),this._zoomAnimated&&Ce(r,"leaflet-zoom-animated"),this.options.className&&Ce(r,this.options.className),r.onselectstart=y,r.onmousemove=y}});function J1(r,s,c){return new Wp(r,s,c)}var Sn=hn.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(r,s){r&&(r instanceof H||k(r))?(this._latlng=V(r),N(this,s)):(N(this,r),this._source=s),this.options.content&&(this._content=this.options.content)},openOn:function(r){return r=arguments.length?r:this._source._map,r.hasLayer(this)||r.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(r){return this._map?this.close():(arguments.length?this._source=r:r=this._source,this._prepareOpen(),this.openOn(r._map)),this},onAdd:function(r){this._zoomAnimated=r._zoomAnimated,this._container||this._initLayout(),r._fadeAnimated&&Xt(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),r._fadeAnimated&&Xt(this._container,1),this.bringToFront(),this.options.interactive&&(Ce(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(r){r._fadeAnimated?(Xt(this._container,0),this._removeTimeout=setTimeout(d(Ke,void 0,this._container),200)):Ke(this._container),this.options.interactive&&(et(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(r){return this._latlng=V(r),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(r){return this._content=r,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var r={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(r.zoomanim=this._animateZoom),r},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&_i(this._container),this},bringToBack:function(){return this._map&&ji(this._container),this},_prepareOpen:function(r){var s=this._source;if(!s._map)return!1;if(s instanceof Rn){s=null;var c=this._source._layers;for(var p in c)if(c[p]._map){s=c[p];break}if(!s)return!1;this._source=s}if(!r)if(s.getCenter)r=s.getCenter();else if(s.getLatLng)r=s.getLatLng();else if(s.getBounds)r=s.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(r),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var r=this._contentNode,s=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof s=="string")r.innerHTML=s;else{for(;r.hasChildNodes();)r.removeChild(r.firstChild);r.appendChild(s)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var r=this._map.latLngToLayerPoint(this._latlng),s=Z(this.options.offset),c=this._getAnchor();this._zoomAnimated?it(this._container,r.add(c)):s=s.add(r).add(c);var p=this._containerBottom=-s.y,g=this._containerLeft=-Math.round(this._containerWidth/2)+s.x;this._container.style.bottom=p+"px",this._container.style.left=g+"px"}},_getAnchor:function(){return[0,0]}});Te.include({_initOverlay:function(r,s,c,p){var g=s;return g instanceof r||(g=new r(p).setContent(s)),c&&g.setLatLng(c),g}}),hn.include({_initOverlay:function(r,s,c,p){var g=c;return g instanceof r?(N(g,p),g._source=this):(g=s&&!p?s:new r(p,this),g.setContent(c)),g}});var js=Sn.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(r){return r=arguments.length?r:this._source._map,!r.hasLayer(this)&&r._popup&&r._popup.options.autoClose&&r.removeLayer(r._popup),r._popup=this,Sn.prototype.openOn.call(this,r)},onAdd:function(r){Sn.prototype.onAdd.call(this,r),r.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof ar||this._source.on("preclick",Dr))},onRemove:function(r){Sn.prototype.onRemove.call(this,r),r.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof ar||this._source.off("preclick",Dr))},getEvents:function(){var r=Sn.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(r.preclick=this.close),this.options.keepInView&&(r.moveend=this._adjustPan),r},_initLayout:function(){var r="leaflet-popup",s=this._container=Re("div",r+" "+(this.options.className||"")+" leaflet-zoom-animated"),c=this._wrapper=Re("div",r+"-content-wrapper",s);if(this._contentNode=Re("div",r+"-content",c),Pa(s),Wc(this._contentNode),ke(s,"contextmenu",Dr),this._tipContainer=Re("div",r+"-tip-container",s),this._tip=Re("div",r+"-tip",this._tipContainer),this.options.closeButton){var p=this._closeButton=Re("a",r+"-close-button",s);p.setAttribute("role","button"),p.setAttribute("aria-label","Close popup"),p.href="#close",p.innerHTML='<span aria-hidden="true">&#215;</span>',ke(p,"click",function(g){mt(g),this.close()},this)}},_updateLayout:function(){var r=this._contentNode,s=r.style;s.width="",s.whiteSpace="nowrap";var c=r.offsetWidth;c=Math.min(c,this.options.maxWidth),c=Math.max(c,this.options.minWidth),s.width=c+1+"px",s.whiteSpace="",s.height="";var p=r.offsetHeight,g=this.options.maxHeight,j="leaflet-popup-scrolled";g&&p>g?(s.height=g+"px",Ce(r,j)):et(r,j),this._containerWidth=this._container.offsetWidth},_animateZoom:function(r){var s=this._map._latLngToNewLayerPoint(this._latlng,r.zoom,r.center),c=this._getAnchor();it(this._container,s.add(c))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var r=this._map,s=parseInt(Sa(this._container,"marginBottom"),10)||0,c=this._container.offsetHeight+s,p=this._containerWidth,g=new M(this._containerLeft,-c-this._containerBottom);g._add(Fr(this._container));var j=r.layerPointToContainerPoint(g),A=Z(this.options.autoPanPadding),W=Z(this.options.autoPanPaddingTopLeft||A),$=Z(this.options.autoPanPaddingBottomRight||A),ee=r.getSize(),ue=0,ve=0;j.x+p+$.x>ee.x&&(ue=j.x+p-ee.x+$.x),j.x-ue-W.x<0&&(ue=j.x-W.x),j.y+c+$.y>ee.y&&(ve=j.y+c-ee.y+$.y),j.y-ve-W.y<0&&(ve=j.y-W.y),(ue||ve)&&(this.options.keepInView&&(this._autopanning=!0),r.fire("autopanstart").panBy([ue,ve]))}},_getAnchor:function(){return Z(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),X1=function(r,s){return new js(r,s)};Te.mergeOptions({closePopupOnClick:!0}),Te.include({openPopup:function(r,s,c){return this._initOverlay(js,r,s,c).openOn(this),this},closePopup:function(r){return r=arguments.length?r:this._popup,r&&r.close(),this}}),hn.include({bindPopup:function(r,s){return this._popup=this._initOverlay(js,this._popup,r,s),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(r){return this._popup&&(this instanceof Rn||(this._popup._source=this),this._popup._prepareOpen(r||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(r){return this._popup&&this._popup.setContent(r),this},getPopup:function(){return this._popup},_openPopup:function(r){if(!(!this._popup||!this._map)){Wr(r);var s=r.layer||r.target;if(this._popup._source===s&&!(s instanceof ar)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(r.latlng);return}this._popup._source=s,this.openPopup(r.latlng)}},_movePopup:function(r){this._popup.setLatLng(r.latlng)},_onKeyPress:function(r){r.originalEvent.keyCode===13&&this._openPopup(r)}});var ks=Sn.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(r){Sn.prototype.onAdd.call(this,r),this.setOpacity(this.options.opacity),r.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(r){Sn.prototype.onRemove.call(this,r),r.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var r=Sn.prototype.getEvents.call(this);return this.options.permanent||(r.preclick=this.close),r},_initLayout:function(){var r="leaflet-tooltip",s=r+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=Re("div",s),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+u(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(r){var s,c,p=this._map,g=this._container,j=p.latLngToContainerPoint(p.getCenter()),A=p.layerPointToContainerPoint(r),W=this.options.direction,$=g.offsetWidth,ee=g.offsetHeight,ue=Z(this.options.offset),ve=this._getAnchor();W==="top"?(s=$/2,c=ee):W==="bottom"?(s=$/2,c=0):W==="center"?(s=$/2,c=ee/2):W==="right"?(s=0,c=ee/2):W==="left"?(s=$,c=ee/2):A.x<j.x?(W="right",s=0,c=ee/2):(W="left",s=$+(ue.x+ve.x)*2,c=ee/2),r=r.subtract(Z(s,c,!0)).add(ue).add(ve),et(g,"leaflet-tooltip-right"),et(g,"leaflet-tooltip-left"),et(g,"leaflet-tooltip-top"),et(g,"leaflet-tooltip-bottom"),Ce(g,"leaflet-tooltip-"+W),it(g,r)},_updatePosition:function(){var r=this._map.latLngToLayerPoint(this._latlng);this._setPosition(r)},setOpacity:function(r){this.options.opacity=r,this._container&&Xt(this._container,r)},_animateZoom:function(r){var s=this._map._latLngToNewLayerPoint(this._latlng,r.zoom,r.center);this._setPosition(s)},_getAnchor:function(){return Z(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),ev=function(r,s){return new ks(r,s)};Te.include({openTooltip:function(r,s,c){return this._initOverlay(ks,r,s,c).openOn(this),this},closeTooltip:function(r){return r.close(),this}}),hn.include({bindTooltip:function(r,s){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(ks,this._tooltip,r,s),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(r){if(!(!r&&this._tooltipHandlersAdded)){var s=r?"off":"on",c={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?c.add=this._openTooltip:(c.mouseover=this._openTooltip,c.mouseout=this.closeTooltip,c.click=this._openTooltip,this._map?this._addFocusListeners():c.add=this._addFocusListeners),this._tooltip.options.sticky&&(c.mousemove=this._moveTooltip),this[s](c),this._tooltipHandlersAdded=!r}},openTooltip:function(r){return this._tooltip&&(this instanceof Rn||(this._tooltip._source=this),this._tooltip._prepareOpen(r)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(r){return this._tooltip&&this._tooltip.setContent(r),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(r){var s=typeof r.getElement=="function"&&r.getElement();s&&(ke(s,"focus",function(){this._tooltip._source=r,this.openTooltip()},this),ke(s,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(r){var s=typeof r.getElement=="function"&&r.getElement();s&&s.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(r){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var s=this;this._map.once("moveend",function(){s._openOnceFlag=!1,s._openTooltip(r)});return}this._tooltip._source=r.layer||r.target,this.openTooltip(this._tooltip.options.sticky?r.latlng:void 0)}},_moveTooltip:function(r){var s=r.latlng,c,p;this._tooltip.options.sticky&&r.originalEvent&&(c=this._map.mouseEventToContainerPoint(r.originalEvent),p=this._map.containerPointToLayerPoint(c),s=this._map.layerPointToLatLng(p)),this._tooltip.setLatLng(s)}});var Up=Si.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(r){var s=r&&r.tagName==="DIV"?r:document.createElement("div"),c=this.options;if(c.html instanceof Element?(ds(s),s.appendChild(c.html)):s.innerHTML=c.html!==!1?c.html:"",c.bgPos){var p=Z(c.bgPos);s.style.backgroundPosition=-p.x+"px "+-p.y+"px"}return this._setIconStyles(s,"icon"),s},createShadow:function(){return null}});function tv(r){return new Up(r)}Si.Default=Ma;var Ta=hn.extend({options:{tileSize:256,opacity:1,updateWhenIdle:xe.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(r){N(this,r)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(r){r._addZoomLimit(this)},onRemove:function(r){this._removeAllTiles(),Ke(this._container),r._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(_i(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(ji(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(r){return this.options.opacity=r,this._updateOpacity(),this},setZIndex:function(r){return this.options.zIndex=r,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var r=this._clampZoom(this._map.getZoom());r!==this._tileZoom&&(this._tileZoom=r,this._updateLevels()),this._update()}return this},getEvents:function(){var r={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=f(this._onMoveEnd,this.options.updateInterval,this)),r.move=this._onMove),this._zoomAnimated&&(r.zoomanim=this._animateZoom),r},createTile:function(){return document.createElement("div")},getTileSize:function(){var r=this.options.tileSize;return r instanceof M?r:new M(r,r)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(r){for(var s=this.getPane().children,c=-r(-1/0,1/0),p=0,g=s.length,j;p<g;p++)j=s[p].style.zIndex,s[p]!==this._container&&j&&(c=r(c,+j));isFinite(c)&&(this.options.zIndex=c+r(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!xe.ielt9){Xt(this._container,this.options.opacity);var r=+new Date,s=!1,c=!1;for(var p in this._tiles){var g=this._tiles[p];if(!(!g.current||!g.loaded)){var j=Math.min(1,(r-g.loaded)/200);Xt(g.el,j),j<1?s=!0:(g.active?c=!0:this._onOpaqueTile(g),g.active=!0)}}c&&!this._noPrune&&this._pruneTiles(),s&&(F(this._fadeFrame),this._fadeFrame=U(this._updateOpacity,this))}},_onOpaqueTile:y,_initContainer:function(){this._container||(this._container=Re("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var r=this._tileZoom,s=this.options.maxZoom;if(r!==void 0){for(var c in this._levels)c=Number(c),this._levels[c].el.children.length||c===r?(this._levels[c].el.style.zIndex=s-Math.abs(r-c),this._onUpdateLevel(c)):(Ke(this._levels[c].el),this._removeTilesAtZoom(c),this._onRemoveLevel(c),delete this._levels[c]);var p=this._levels[r],g=this._map;return p||(p=this._levels[r]={},p.el=Re("div","leaflet-tile-container leaflet-zoom-animated",this._container),p.el.style.zIndex=s,p.origin=g.project(g.unproject(g.getPixelOrigin()),r).round(),p.zoom=r,this._setZoomTransform(p,g.getCenter(),g.getZoom()),y(p.el.offsetWidth),this._onCreateLevel(p)),this._level=p,p}},_onUpdateLevel:y,_onRemoveLevel:y,_onCreateLevel:y,_pruneTiles:function(){if(this._map){var r,s,c=this._map.getZoom();if(c>this.options.maxZoom||c<this.options.minZoom){this._removeAllTiles();return}for(r in this._tiles)s=this._tiles[r],s.retain=s.current;for(r in this._tiles)if(s=this._tiles[r],s.current&&!s.active){var p=s.coords;this._retainParent(p.x,p.y,p.z,p.z-5)||this._retainChildren(p.x,p.y,p.z,p.z+2)}for(r in this._tiles)this._tiles[r].retain||this._removeTile(r)}},_removeTilesAtZoom:function(r){for(var s in this._tiles)this._tiles[s].coords.z===r&&this._removeTile(s)},_removeAllTiles:function(){for(var r in this._tiles)this._removeTile(r)},_invalidateAll:function(){for(var r in this._levels)Ke(this._levels[r].el),this._onRemoveLevel(Number(r)),delete this._levels[r];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(r,s,c,p){var g=Math.floor(r/2),j=Math.floor(s/2),A=c-1,W=new M(+g,+j);W.z=+A;var $=this._tileCoordsToKey(W),ee=this._tiles[$];return ee&&ee.active?(ee.retain=!0,!0):(ee&&ee.loaded&&(ee.retain=!0),A>p?this._retainParent(g,j,A,p):!1)},_retainChildren:function(r,s,c,p){for(var g=2*r;g<2*r+2;g++)for(var j=2*s;j<2*s+2;j++){var A=new M(g,j);A.z=c+1;var W=this._tileCoordsToKey(A),$=this._tiles[W];if($&&$.active){$.retain=!0;continue}else $&&$.loaded&&($.retain=!0);c+1<p&&this._retainChildren(g,j,c+1,p)}},_resetView:function(r){var s=r&&(r.pinch||r.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),s,s)},_animateZoom:function(r){this._setView(r.center,r.zoom,!0,r.noUpdate)},_clampZoom:function(r){var s=this.options;return s.minNativeZoom!==void 0&&r<s.minNativeZoom?s.minNativeZoom:s.maxNativeZoom!==void 0&&s.maxNativeZoom<r?s.maxNativeZoom:r},_setView:function(r,s,c,p){var g=Math.round(s);this.options.maxZoom!==void 0&&g>this.options.maxZoom||this.options.minZoom!==void 0&&g<this.options.minZoom?g=void 0:g=this._clampZoom(g);var j=this.options.updateWhenZooming&&g!==this._tileZoom;(!p||j)&&(this._tileZoom=g,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),g!==void 0&&this._update(r),c||this._pruneTiles(),this._noPrune=!!c),this._setZoomTransforms(r,s)},_setZoomTransforms:function(r,s){for(var c in this._levels)this._setZoomTransform(this._levels[c],r,s)},_setZoomTransform:function(r,s,c){var p=this._map.getZoomScale(c,r.zoom),g=r.origin.multiplyBy(p).subtract(this._map._getNewPixelOrigin(s,c)).round();xe.any3d?Br(r.el,g,p):it(r.el,g)},_resetGrid:function(){var r=this._map,s=r.options.crs,c=this._tileSize=this.getTileSize(),p=this._tileZoom,g=this._map.getPixelWorldBounds(this._tileZoom);g&&(this._globalTileRange=this._pxBoundsToTileRange(g)),this._wrapX=s.wrapLng&&!this.options.noWrap&&[Math.floor(r.project([0,s.wrapLng[0]],p).x/c.x),Math.ceil(r.project([0,s.wrapLng[1]],p).x/c.y)],this._wrapY=s.wrapLat&&!this.options.noWrap&&[Math.floor(r.project([s.wrapLat[0],0],p).y/c.x),Math.ceil(r.project([s.wrapLat[1],0],p).y/c.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(r){var s=this._map,c=s._animatingZoom?Math.max(s._animateToZoom,s.getZoom()):s.getZoom(),p=s.getZoomScale(c,this._tileZoom),g=s.project(r,this._tileZoom).floor(),j=s.getSize().divideBy(p*2);return new ne(g.subtract(j),g.add(j))},_update:function(r){var s=this._map;if(s){var c=this._clampZoom(s.getZoom());if(r===void 0&&(r=s.getCenter()),this._tileZoom!==void 0){var p=this._getTiledPixelBounds(r),g=this._pxBoundsToTileRange(p),j=g.getCenter(),A=[],W=this.options.keepBuffer,$=new ne(g.getBottomLeft().subtract([W,-W]),g.getTopRight().add([W,-W]));if(!(isFinite(g.min.x)&&isFinite(g.min.y)&&isFinite(g.max.x)&&isFinite(g.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var ee in this._tiles){var ue=this._tiles[ee].coords;(ue.z!==this._tileZoom||!$.contains(new M(ue.x,ue.y)))&&(this._tiles[ee].current=!1)}if(Math.abs(c-this._tileZoom)>1){this._setView(r,c);return}for(var ve=g.min.y;ve<=g.max.y;ve++)for(var Pe=g.min.x;Pe<=g.max.x;Pe++){var Ct=new M(Pe,ve);if(Ct.z=this._tileZoom,!!this._isValidTile(Ct)){var ut=this._tiles[this._tileCoordsToKey(Ct)];ut?ut.current=!0:A.push(Ct)}}if(A.sort(function(Tt,Pi){return Tt.distanceTo(j)-Pi.distanceTo(j)}),A.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var tn=document.createDocumentFragment();for(Pe=0;Pe<A.length;Pe++)this._addTile(A[Pe],tn);this._level.el.appendChild(tn)}}}},_isValidTile:function(r){var s=this._map.options.crs;if(!s.infinite){var c=this._globalTileRange;if(!s.wrapLng&&(r.x<c.min.x||r.x>c.max.x)||!s.wrapLat&&(r.y<c.min.y||r.y>c.max.y))return!1}if(!this.options.bounds)return!0;var p=this._tileCoordsToBounds(r);return O(this.options.bounds).overlaps(p)},_keyToBounds:function(r){return this._tileCoordsToBounds(this._keyToTileCoords(r))},_tileCoordsToNwSe:function(r){var s=this._map,c=this.getTileSize(),p=r.scaleBy(c),g=p.add(c),j=s.unproject(p,r.z),A=s.unproject(g,r.z);return[j,A]},_tileCoordsToBounds:function(r){var s=this._tileCoordsToNwSe(r),c=new te(s[0],s[1]);return this.options.noWrap||(c=this._map.wrapLatLngBounds(c)),c},_tileCoordsToKey:function(r){return r.x+":"+r.y+":"+r.z},_keyToTileCoords:function(r){var s=r.split(":"),c=new M(+s[0],+s[1]);return c.z=+s[2],c},_removeTile:function(r){var s=this._tiles[r];s&&(Ke(s.el),delete this._tiles[r],this.fire("tileunload",{tile:s.el,coords:this._keyToTileCoords(r)}))},_initTile:function(r){Ce(r,"leaflet-tile");var s=this.getTileSize();r.style.width=s.x+"px",r.style.height=s.y+"px",r.onselectstart=y,r.onmousemove=y,xe.ielt9&&this.options.opacity<1&&Xt(r,this.options.opacity)},_addTile:function(r,s){var c=this._getTilePos(r),p=this._tileCoordsToKey(r),g=this.createTile(this._wrapCoords(r),d(this._tileReady,this,r));this._initTile(g),this.createTile.length<2&&U(d(this._tileReady,this,r,null,g)),it(g,c),this._tiles[p]={el:g,coords:r,current:!0},s.appendChild(g),this.fire("tileloadstart",{tile:g,coords:r})},_tileReady:function(r,s,c){s&&this.fire("tileerror",{error:s,tile:c,coords:r});var p=this._tileCoordsToKey(r);c=this._tiles[p],c&&(c.loaded=+new Date,this._map._fadeAnimated?(Xt(c.el,0),F(this._fadeFrame),this._fadeFrame=U(this._updateOpacity,this)):(c.active=!0,this._pruneTiles()),s||(Ce(c.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:c.el,coords:r})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),xe.ielt9||!this._map._fadeAnimated?U(this._pruneTiles,this):setTimeout(d(this._pruneTiles,this),250)))},_getTilePos:function(r){return r.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(r){var s=new M(this._wrapX?x(r.x,this._wrapX):r.x,this._wrapY?x(r.y,this._wrapY):r.y);return s.z=r.z,s},_pxBoundsToTileRange:function(r){var s=this.getTileSize();return new ne(r.min.unscaleBy(s).floor(),r.max.unscaleBy(s).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var r in this._tiles)if(!this._tiles[r].loaded)return!1;return!0}});function nv(r){return new Ta(r)}var zi=Ta.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(r,s){this._url=r,s=N(this,s),s.detectRetina&&xe.retina&&s.maxZoom>0?(s.tileSize=Math.floor(s.tileSize/2),s.zoomReverse?(s.zoomOffset--,s.minZoom=Math.min(s.maxZoom,s.minZoom+1)):(s.zoomOffset++,s.maxZoom=Math.max(s.minZoom,s.maxZoom-1)),s.minZoom=Math.max(0,s.minZoom)):s.zoomReverse?s.minZoom=Math.min(s.maxZoom,s.minZoom):s.maxZoom=Math.max(s.minZoom,s.maxZoom),typeof s.subdomains=="string"&&(s.subdomains=s.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(r,s){return this._url===r&&s===void 0&&(s=!0),this._url=r,s||this.redraw(),this},createTile:function(r,s){var c=document.createElement("img");return ke(c,"load",d(this._tileOnLoad,this,s,c)),ke(c,"error",d(this._tileOnError,this,s,c)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(c.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(c.referrerPolicy=this.options.referrerPolicy),c.alt="",c.src=this.getTileUrl(r),c},getTileUrl:function(r){var s={r:xe.retina?"@2x":"",s:this._getSubdomain(r),x:r.x,y:r.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var c=this._globalTileRange.max.y-r.y;this.options.tms&&(s.y=c),s["-y"]=c}return b(this._url,o(s,this.options))},_tileOnLoad:function(r,s){xe.ielt9?setTimeout(d(r,this,null,s),0):r(null,s)},_tileOnError:function(r,s,c){var p=this.options.errorTileUrl;p&&s.getAttribute("src")!==p&&(s.src=p),r(c,s)},_onTileRemove:function(r){r.tile.onload=null},_getZoomForUrl:function(){var r=this._tileZoom,s=this.options.maxZoom,c=this.options.zoomReverse,p=this.options.zoomOffset;return c&&(r=s-r),r+p},_getSubdomain:function(r){var s=Math.abs(r.x+r.y)%this.options.subdomains.length;return this.options.subdomains[s]},_abortLoading:function(){var r,s;for(r in this._tiles)if(this._tiles[r].coords.z!==this._tileZoom&&(s=this._tiles[r].el,s.onload=y,s.onerror=y,!s.complete)){s.src=E;var c=this._tiles[r].coords;Ke(s),delete this._tiles[r],this.fire("tileabort",{tile:s,coords:c})}},_removeTile:function(r){var s=this._tiles[r];if(s)return s.el.setAttribute("src",E),Ta.prototype._removeTile.call(this,r)},_tileReady:function(r,s,c){if(!(!this._map||c&&c.getAttribute("src")===E))return Ta.prototype._tileReady.call(this,r,s,c)}});function Hp(r,s){return new zi(r,s)}var Zp=zi.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(r,s){this._url=r;var c=o({},this.defaultWmsParams);for(var p in s)p in this.options||(c[p]=s[p]);s=N(this,s);var g=s.detectRetina&&xe.retina?2:1,j=this.getTileSize();c.width=j.x*g,c.height=j.y*g,this.wmsParams=c},onAdd:function(r){this._crs=this.options.crs||r.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var s=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[s]=this._crs.code,zi.prototype.onAdd.call(this,r)},getTileUrl:function(r){var s=this._tileCoordsToNwSe(r),c=this._crs,p=J(c.project(s[0]),c.project(s[1])),g=p.min,j=p.max,A=(this._wmsVersion>=1.3&&this._crs===Rp?[g.y,g.x,j.y,j.x]:[g.x,g.y,j.x,j.y]).join(","),W=zi.prototype.getTileUrl.call(this,r);return W+C(this.wmsParams,W,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+A},setParams:function(r,s){return o(this.wmsParams,r),s||this.redraw(),this}});function rv(r,s){return new Zp(r,s)}zi.WMS=Zp,Hp.wms=rv;var Fn=hn.extend({options:{padding:.1},initialize:function(r){N(this,r),u(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),Ce(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var r={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(r.zoomanim=this._onAnimZoom),r},_onAnimZoom:function(r){this._updateTransform(r.center,r.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(r,s){var c=this._map.getZoomScale(s,this._zoom),p=this._map.getSize().multiplyBy(.5+this.options.padding),g=this._map.project(this._center,s),j=p.multiplyBy(-c).add(g).subtract(this._map._getNewPixelOrigin(r,s));xe.any3d?Br(this._container,j,c):it(this._container,j)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var r in this._layers)this._layers[r]._reset()},_onZoomEnd:function(){for(var r in this._layers)this._layers[r]._project()},_updatePaths:function(){for(var r in this._layers)this._layers[r]._update()},_update:function(){var r=this.options.padding,s=this._map.getSize(),c=this._map.containerPointToLayerPoint(s.multiplyBy(-r)).round();this._bounds=new ne(c,c.add(s.multiplyBy(1+r*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),$p=Fn.extend({options:{tolerance:0},getEvents:function(){var r=Fn.prototype.getEvents.call(this);return r.viewprereset=this._onViewPreReset,r},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){Fn.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var r=this._container=document.createElement("canvas");ke(r,"mousemove",this._onMouseMove,this),ke(r,"click dblclick mousedown mouseup contextmenu",this._onClick,this),ke(r,"mouseout",this._handleMouseOut,this),r._leaflet_disable_events=!0,this._ctx=r.getContext("2d")},_destroyContainer:function(){F(this._redrawRequest),delete this._ctx,Ke(this._container),He(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var r;this._redrawBounds=null;for(var s in this._layers)r=this._layers[s],r._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Fn.prototype._update.call(this);var r=this._bounds,s=this._container,c=r.getSize(),p=xe.retina?2:1;it(s,r.min),s.width=p*c.x,s.height=p*c.y,s.style.width=c.x+"px",s.style.height=c.y+"px",xe.retina&&this._ctx.scale(2,2),this._ctx.translate(-r.min.x,-r.min.y),this.fire("update")}},_reset:function(){Fn.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(r){this._updateDashArray(r),this._layers[u(r)]=r;var s=r._order={layer:r,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=s),this._drawLast=s,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(r){this._requestRedraw(r)},_removePath:function(r){var s=r._order,c=s.next,p=s.prev;c?c.prev=p:this._drawLast=p,p?p.next=c:this._drawFirst=c,delete r._order,delete this._layers[u(r)],this._requestRedraw(r)},_updatePath:function(r){this._extendRedrawBounds(r),r._project(),r._update(),this._requestRedraw(r)},_updateStyle:function(r){this._updateDashArray(r),this._requestRedraw(r)},_updateDashArray:function(r){if(typeof r.options.dashArray=="string"){var s=r.options.dashArray.split(/[, ]+/),c=[],p,g;for(g=0;g<s.length;g++){if(p=Number(s[g]),isNaN(p))return;c.push(p)}r.options._dashArray=c}else r.options._dashArray=r.options.dashArray},_requestRedraw:function(r){this._map&&(this._extendRedrawBounds(r),this._redrawRequest=this._redrawRequest||U(this._redraw,this))},_extendRedrawBounds:function(r){if(r._pxBounds){var s=(r.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new ne,this._redrawBounds.extend(r._pxBounds.min.subtract([s,s])),this._redrawBounds.extend(r._pxBounds.max.add([s,s]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var r=this._redrawBounds;if(r){var s=r.getSize();this._ctx.clearRect(r.min.x,r.min.y,s.x,s.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var r,s=this._redrawBounds;if(this._ctx.save(),s){var c=s.getSize();this._ctx.beginPath(),this._ctx.rect(s.min.x,s.min.y,c.x,c.y),this._ctx.clip()}this._drawing=!0;for(var p=this._drawFirst;p;p=p.next)r=p.layer,(!s||r._pxBounds&&r._pxBounds.intersects(s))&&r._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(r,s){if(this._drawing){var c,p,g,j,A=r._parts,W=A.length,$=this._ctx;if(W){for($.beginPath(),c=0;c<W;c++){for(p=0,g=A[c].length;p<g;p++)j=A[c][p],$[p?"lineTo":"moveTo"](j.x,j.y);s&&$.closePath()}this._fillStroke($,r)}}},_updateCircle:function(r){if(!(!this._drawing||r._empty())){var s=r._point,c=this._ctx,p=Math.max(Math.round(r._radius),1),g=(Math.max(Math.round(r._radiusY),1)||p)/p;g!==1&&(c.save(),c.scale(1,g)),c.beginPath(),c.arc(s.x,s.y/g,p,0,Math.PI*2,!1),g!==1&&c.restore(),this._fillStroke(c,r)}},_fillStroke:function(r,s){var c=s.options;c.fill&&(r.globalAlpha=c.fillOpacity,r.fillStyle=c.fillColor||c.color,r.fill(c.fillRule||"evenodd")),c.stroke&&c.weight!==0&&(r.setLineDash&&r.setLineDash(s.options&&s.options._dashArray||[]),r.globalAlpha=c.opacity,r.lineWidth=c.weight,r.strokeStyle=c.color,r.lineCap=c.lineCap,r.lineJoin=c.lineJoin,r.stroke())},_onClick:function(r){for(var s=this._map.mouseEventToLayerPoint(r),c,p,g=this._drawFirst;g;g=g.next)c=g.layer,c.options.interactive&&c._containsPoint(s)&&(!(r.type==="click"||r.type==="preclick")||!this._map._draggableMoved(c))&&(p=c);this._fireEvent(p?[p]:!1,r)},_onMouseMove:function(r){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var s=this._map.mouseEventToLayerPoint(r);this._handleMouseHover(r,s)}},_handleMouseOut:function(r){var s=this._hoveredLayer;s&&(et(this._container,"leaflet-interactive"),this._fireEvent([s],r,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(r,s){if(!this._mouseHoverThrottled){for(var c,p,g=this._drawFirst;g;g=g.next)c=g.layer,c.options.interactive&&c._containsPoint(s)&&(p=c);p!==this._hoveredLayer&&(this._handleMouseOut(r),p&&(Ce(this._container,"leaflet-interactive"),this._fireEvent([p],r,"mouseover"),this._hoveredLayer=p)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,r),this._mouseHoverThrottled=!0,setTimeout(d(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(r,s,c){this._map._fireDOMEvent(s,c||s.type,r)},_bringToFront:function(r){var s=r._order;if(s){var c=s.next,p=s.prev;if(c)c.prev=p;else return;p?p.next=c:c&&(this._drawFirst=c),s.prev=this._drawLast,this._drawLast.next=s,s.next=null,this._drawLast=s,this._requestRedraw(r)}},_bringToBack:function(r){var s=r._order;if(s){var c=s.next,p=s.prev;if(p)p.next=c;else return;c?c.prev=p:p&&(this._drawLast=p),s.prev=null,s.next=this._drawFirst,this._drawFirst.prev=s,this._drawFirst=s,this._requestRedraw(r)}}});function qp(r){return xe.canvas?new $p(r):null}var Aa=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(r){return document.createElement("<lvml:"+r+' class="lvml">')}}catch{}return function(r){return document.createElement("<"+r+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),iv={_initContainer:function(){this._container=Re("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(Fn.prototype._update.call(this),this.fire("update"))},_initPath:function(r){var s=r._container=Aa("shape");Ce(s,"leaflet-vml-shape "+(this.options.className||"")),s.coordsize="1 1",r._path=Aa("path"),s.appendChild(r._path),this._updateStyle(r),this._layers[u(r)]=r},_addPath:function(r){var s=r._container;this._container.appendChild(s),r.options.interactive&&r.addInteractiveTarget(s)},_removePath:function(r){var s=r._container;Ke(s),r.removeInteractiveTarget(s),delete this._layers[u(r)]},_updateStyle:function(r){var s=r._stroke,c=r._fill,p=r.options,g=r._container;g.stroked=!!p.stroke,g.filled=!!p.fill,p.stroke?(s||(s=r._stroke=Aa("stroke")),g.appendChild(s),s.weight=p.weight+"px",s.color=p.color,s.opacity=p.opacity,p.dashArray?s.dashStyle=k(p.dashArray)?p.dashArray.join(" "):p.dashArray.replace(/( *, *)/g," "):s.dashStyle="",s.endcap=p.lineCap.replace("butt","flat"),s.joinstyle=p.lineJoin):s&&(g.removeChild(s),r._stroke=null),p.fill?(c||(c=r._fill=Aa("fill")),g.appendChild(c),c.color=p.fillColor||p.color,c.opacity=p.fillOpacity):c&&(g.removeChild(c),r._fill=null)},_updateCircle:function(r){var s=r._point.round(),c=Math.round(r._radius),p=Math.round(r._radiusY||c);this._setPath(r,r._empty()?"M0 0":"AL "+s.x+","+s.y+" "+c+","+p+" 0,"+65535*360)},_setPath:function(r,s){r._path.v=s},_bringToFront:function(r){_i(r._container)},_bringToBack:function(r){ji(r._container)}},Ss=xe.vml?Aa:rr,Ia=Fn.extend({_initContainer:function(){this._container=Ss("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=Ss("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){Ke(this._container),He(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Fn.prototype._update.call(this);var r=this._bounds,s=r.getSize(),c=this._container;(!this._svgSize||!this._svgSize.equals(s))&&(this._svgSize=s,c.setAttribute("width",s.x),c.setAttribute("height",s.y)),it(c,r.min),c.setAttribute("viewBox",[r.min.x,r.min.y,s.x,s.y].join(" ")),this.fire("update")}},_initPath:function(r){var s=r._path=Ss("path");r.options.className&&Ce(s,r.options.className),r.options.interactive&&Ce(s,"leaflet-interactive"),this._updateStyle(r),this._layers[u(r)]=r},_addPath:function(r){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(r._path),r.addInteractiveTarget(r._path)},_removePath:function(r){Ke(r._path),r.removeInteractiveTarget(r._path),delete this._layers[u(r)]},_updatePath:function(r){r._project(),r._update()},_updateStyle:function(r){var s=r._path,c=r.options;s&&(c.stroke?(s.setAttribute("stroke",c.color),s.setAttribute("stroke-opacity",c.opacity),s.setAttribute("stroke-width",c.weight),s.setAttribute("stroke-linecap",c.lineCap),s.setAttribute("stroke-linejoin",c.lineJoin),c.dashArray?s.setAttribute("stroke-dasharray",c.dashArray):s.removeAttribute("stroke-dasharray"),c.dashOffset?s.setAttribute("stroke-dashoffset",c.dashOffset):s.removeAttribute("stroke-dashoffset")):s.setAttribute("stroke","none"),c.fill?(s.setAttribute("fill",c.fillColor||c.color),s.setAttribute("fill-opacity",c.fillOpacity),s.setAttribute("fill-rule",c.fillRule||"evenodd")):s.setAttribute("fill","none"))},_updatePoly:function(r,s){this._setPath(r,K(r._parts,s))},_updateCircle:function(r){var s=r._point,c=Math.max(Math.round(r._radius),1),p=Math.max(Math.round(r._radiusY),1)||c,g="a"+c+","+p+" 0 1,0 ",j=r._empty()?"M0 0":"M"+(s.x-c)+","+s.y+g+c*2+",0 "+g+-c*2+",0 ";this._setPath(r,j)},_setPath:function(r,s){r._path.setAttribute("d",s)},_bringToFront:function(r){_i(r._path)},_bringToBack:function(r){ji(r._path)}});xe.vml&&Ia.include(iv);function Vp(r){return xe.svg||xe.vml?new Ia(r):null}Te.include({getRenderer:function(r){var s=r.options.renderer||this._getPaneRenderer(r.options.pane)||this.options.renderer||this._renderer;return s||(s=this._renderer=this._createRenderer()),this.hasLayer(s)||this.addLayer(s),s},_getPaneRenderer:function(r){if(r==="overlayPane"||r===void 0)return!1;var s=this._paneRenderers[r];return s===void 0&&(s=this._createRenderer({pane:r}),this._paneRenderers[r]=s),s},_createRenderer:function(r){return this.options.preferCanvas&&qp(r)||Vp(r)}});var Gp=Ni.extend({initialize:function(r,s){Ni.prototype.initialize.call(this,this._boundsToLatLngs(r),s)},setBounds:function(r){return this.setLatLngs(this._boundsToLatLngs(r))},_boundsToLatLngs:function(r){return r=O(r),[r.getSouthWest(),r.getNorthWest(),r.getNorthEast(),r.getSouthEast()]}});function av(r,s){return new Gp(r,s)}Ia.create=Ss,Ia.pointsToPath=K,Bn.geometryToLayer=ys,Bn.coordsToLatLng=Qc,Bn.coordsToLatLngs=vs,Bn.latLngToCoords=Yc,Bn.latLngsToCoords=bs,Bn.getFeature=Ci,Bn.asFeature=ws,Te.mergeOptions({boxZoom:!0});var Kp=kn.extend({initialize:function(r){this._map=r,this._container=r._container,this._pane=r._panes.overlayPane,this._resetStateTimeout=0,r.on("unload",this._destroy,this)},addHooks:function(){ke(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){He(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){Ke(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(r){if(!r.shiftKey||r.which!==1&&r.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),Na(),Tc(),this._startPoint=this._map.mouseEventToContainerPoint(r),ke(document,{contextmenu:Wr,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(r){this._moved||(this._moved=!0,this._box=Re("div","leaflet-zoom-box",this._container),Ce(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(r);var s=new ne(this._point,this._startPoint),c=s.getSize();it(this._box,s.min),this._box.style.width=c.x+"px",this._box.style.height=c.y+"px"},_finish:function(){this._moved&&(Ke(this._box),et(this._container,"leaflet-crosshair")),Ca(),Ac(),He(document,{contextmenu:Wr,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(r){if(!(r.which!==1&&r.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(d(this._resetState,this),0);var s=new te(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(s).fire("boxzoomend",{boxZoomBounds:s})}},_onKeyDown:function(r){r.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});Te.addInitHook("addHandler","boxZoom",Kp),Te.mergeOptions({doubleClickZoom:!0});var Qp=kn.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(r){var s=this._map,c=s.getZoom(),p=s.options.zoomDelta,g=r.originalEvent.shiftKey?c-p:c+p;s.options.doubleClickZoom==="center"?s.setZoom(g):s.setZoomAround(r.containerPoint,g)}});Te.addInitHook("addHandler","doubleClickZoom",Qp),Te.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var Yp=kn.extend({addHooks:function(){if(!this._draggable){var r=this._map;this._draggable=new ir(r._mapPane,r._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),r.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),r.on("zoomend",this._onZoomEnd,this),r.whenReady(this._onZoomEnd,this))}Ce(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){et(this._map._container,"leaflet-grab"),et(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var r=this._map;if(r._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var s=O(this._map.options.maxBounds);this._offsetLimit=J(this._map.latLngToContainerPoint(s.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(s.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;r.fire("movestart").fire("dragstart"),r.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(r){if(this._map.options.inertia){var s=this._lastTime=+new Date,c=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(c),this._times.push(s),this._prunePositions(s)}this._map.fire("move",r).fire("drag",r)},_prunePositions:function(r){for(;this._positions.length>1&&r-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var r=this._map.getSize().divideBy(2),s=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=s.subtract(r).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(r,s){return r-(r-s)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var r=this._draggable._newPos.subtract(this._draggable._startPos),s=this._offsetLimit;r.x<s.min.x&&(r.x=this._viscousLimit(r.x,s.min.x)),r.y<s.min.y&&(r.y=this._viscousLimit(r.y,s.min.y)),r.x>s.max.x&&(r.x=this._viscousLimit(r.x,s.max.x)),r.y>s.max.y&&(r.y=this._viscousLimit(r.y,s.max.y)),this._draggable._newPos=this._draggable._startPos.add(r)}},_onPreDragWrap:function(){var r=this._worldWidth,s=Math.round(r/2),c=this._initialWorldOffset,p=this._draggable._newPos.x,g=(p-s+c)%r+s-c,j=(p+s+c)%r-s-c,A=Math.abs(g+c)<Math.abs(j+c)?g:j;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=A},_onDragEnd:function(r){var s=this._map,c=s.options,p=!c.inertia||r.noInertia||this._times.length<2;if(s.fire("dragend",r),p)s.fire("moveend");else{this._prunePositions(+new Date);var g=this._lastPos.subtract(this._positions[0]),j=(this._lastTime-this._times[0])/1e3,A=c.easeLinearity,W=g.multiplyBy(A/j),$=W.distanceTo([0,0]),ee=Math.min(c.inertiaMaxSpeed,$),ue=W.multiplyBy(ee/$),ve=ee/(c.inertiaDeceleration*A),Pe=ue.multiplyBy(-ve/2).round();!Pe.x&&!Pe.y?s.fire("moveend"):(Pe=s._limitOffset(Pe,s.options.maxBounds),U(function(){s.panBy(Pe,{duration:ve,easeLinearity:A,noMoveStart:!0,animate:!0})}))}}});Te.addInitHook("addHandler","dragging",Yp),Te.mergeOptions({keyboard:!0,keyboardPanDelta:80});var Jp=kn.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(r){this._map=r,this._setPanDelta(r.options.keyboardPanDelta),this._setZoomDelta(r.options.zoomDelta)},addHooks:function(){var r=this._map._container;r.tabIndex<=0&&(r.tabIndex="0"),ke(r,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),He(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var r=document.body,s=document.documentElement,c=r.scrollTop||s.scrollTop,p=r.scrollLeft||s.scrollLeft;this._map._container.focus(),window.scrollTo(p,c)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(r){var s=this._panKeys={},c=this.keyCodes,p,g;for(p=0,g=c.left.length;p<g;p++)s[c.left[p]]=[-1*r,0];for(p=0,g=c.right.length;p<g;p++)s[c.right[p]]=[r,0];for(p=0,g=c.down.length;p<g;p++)s[c.down[p]]=[0,r];for(p=0,g=c.up.length;p<g;p++)s[c.up[p]]=[0,-1*r]},_setZoomDelta:function(r){var s=this._zoomKeys={},c=this.keyCodes,p,g;for(p=0,g=c.zoomIn.length;p<g;p++)s[c.zoomIn[p]]=r;for(p=0,g=c.zoomOut.length;p<g;p++)s[c.zoomOut[p]]=-r},_addHooks:function(){ke(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){He(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(r){if(!(r.altKey||r.ctrlKey||r.metaKey)){var s=r.keyCode,c=this._map,p;if(s in this._panKeys){if(!c._panAnim||!c._panAnim._inProgress)if(p=this._panKeys[s],r.shiftKey&&(p=Z(p).multiplyBy(3)),c.options.maxBounds&&(p=c._limitOffset(Z(p),c.options.maxBounds)),c.options.worldCopyJump){var g=c.wrapLatLng(c.unproject(c.project(c.getCenter()).add(p)));c.panTo(g)}else c.panBy(p)}else if(s in this._zoomKeys)c.setZoom(c.getZoom()+(r.shiftKey?3:1)*this._zoomKeys[s]);else if(s===27&&c._popup&&c._popup.options.closeOnEscapeKey)c.closePopup();else return;Wr(r)}}});Te.addInitHook("addHandler","keyboard",Jp),Te.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var Xp=kn.extend({addHooks:function(){ke(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){He(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(r){var s=jp(r),c=this._map.options.wheelDebounceTime;this._delta+=s,this._lastMousePos=this._map.mouseEventToContainerPoint(r),this._startTime||(this._startTime=+new Date);var p=Math.max(c-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(d(this._performZoom,this),p),Wr(r)},_performZoom:function(){var r=this._map,s=r.getZoom(),c=this._map.options.zoomSnap||0;r._stop();var p=this._delta/(this._map.options.wheelPxPerZoomLevel*4),g=4*Math.log(2/(1+Math.exp(-Math.abs(p))))/Math.LN2,j=c?Math.ceil(g/c)*c:g,A=r._limitZoom(s+(this._delta>0?j:-j))-s;this._delta=0,this._startTime=null,A&&(r.options.scrollWheelZoom==="center"?r.setZoom(s+A):r.setZoomAround(this._lastMousePos,s+A))}});Te.addInitHook("addHandler","scrollWheelZoom",Xp);var ov=600;Te.mergeOptions({tapHold:xe.touchNative&&xe.safari&&xe.mobile,tapTolerance:15});var em=kn.extend({addHooks:function(){ke(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){He(this._map._container,"touchstart",this._onDown,this)},_onDown:function(r){if(clearTimeout(this._holdTimeout),r.touches.length===1){var s=r.touches[0];this._startPos=this._newPos=new M(s.clientX,s.clientY),this._holdTimeout=setTimeout(d(function(){this._cancel(),this._isTapValid()&&(ke(document,"touchend",mt),ke(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",s))},this),ov),ke(document,"touchend touchcancel contextmenu",this._cancel,this),ke(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function r(){He(document,"touchend",mt),He(document,"touchend touchcancel",r)},_cancel:function(){clearTimeout(this._holdTimeout),He(document,"touchend touchcancel contextmenu",this._cancel,this),He(document,"touchmove",this._onMove,this)},_onMove:function(r){var s=r.touches[0];this._newPos=new M(s.clientX,s.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(r,s){var c=new MouseEvent(r,{bubbles:!0,cancelable:!0,view:window,screenX:s.screenX,screenY:s.screenY,clientX:s.clientX,clientY:s.clientY});c._simulated=!0,s.target.dispatchEvent(c)}});Te.addInitHook("addHandler","tapHold",em),Te.mergeOptions({touchZoom:xe.touch,bounceAtZoomLimits:!0});var tm=kn.extend({addHooks:function(){Ce(this._map._container,"leaflet-touch-zoom"),ke(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){et(this._map._container,"leaflet-touch-zoom"),He(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(r){var s=this._map;if(!(!r.touches||r.touches.length!==2||s._animatingZoom||this._zooming)){var c=s.mouseEventToContainerPoint(r.touches[0]),p=s.mouseEventToContainerPoint(r.touches[1]);this._centerPoint=s.getSize()._divideBy(2),this._startLatLng=s.containerPointToLatLng(this._centerPoint),s.options.touchZoom!=="center"&&(this._pinchStartLatLng=s.containerPointToLatLng(c.add(p)._divideBy(2))),this._startDist=c.distanceTo(p),this._startZoom=s.getZoom(),this._moved=!1,this._zooming=!0,s._stop(),ke(document,"touchmove",this._onTouchMove,this),ke(document,"touchend touchcancel",this._onTouchEnd,this),mt(r)}},_onTouchMove:function(r){if(!(!r.touches||r.touches.length!==2||!this._zooming)){var s=this._map,c=s.mouseEventToContainerPoint(r.touches[0]),p=s.mouseEventToContainerPoint(r.touches[1]),g=c.distanceTo(p)/this._startDist;if(this._zoom=s.getScaleZoom(g,this._startZoom),!s.options.bounceAtZoomLimits&&(this._zoom<s.getMinZoom()&&g<1||this._zoom>s.getMaxZoom()&&g>1)&&(this._zoom=s._limitZoom(this._zoom)),s.options.touchZoom==="center"){if(this._center=this._startLatLng,g===1)return}else{var j=c._add(p)._divideBy(2)._subtract(this._centerPoint);if(g===1&&j.x===0&&j.y===0)return;this._center=s.unproject(s.project(this._pinchStartLatLng,this._zoom).subtract(j),this._zoom)}this._moved||(s._moveStart(!0,!1),this._moved=!0),F(this._animRequest);var A=d(s._move,s,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=U(A,this,!0),mt(r)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,F(this._animRequest),He(document,"touchmove",this._onTouchMove,this),He(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});Te.addInitHook("addHandler","touchZoom",tm),Te.BoxZoom=Kp,Te.DoubleClickZoom=Qp,Te.Drag=Yp,Te.Keyboard=Jp,Te.ScrollWheelZoom=Xp,Te.TapHold=em,Te.TouchZoom=tm,n.Bounds=ne,n.Browser=xe,n.CRS=le,n.Canvas=$p,n.Circle=Kc,n.CircleMarker=xs,n.Class=ae,n.Control=un,n.DivIcon=Up,n.DivOverlay=Sn,n.DomEvent=k1,n.DomUtil=_1,n.Draggable=ir,n.Evented=G,n.FeatureGroup=Rn,n.GeoJSON=Bn,n.GridLayer=Ta,n.Handler=kn,n.Icon=Si,n.ImageOverlay=_s,n.LatLng=H,n.LatLngBounds=te,n.Layer=hn,n.LayerGroup=ki,n.LineUtil=O1,n.Map=Te,n.Marker=gs,n.Mixin=L1,n.Path=ar,n.Point=M,n.PolyUtil=M1,n.Polygon=Ni,n.Polyline=On,n.Popup=js,n.PosAnimation=kp,n.Projection=B1,n.Rectangle=Gp,n.Renderer=Fn,n.SVG=Ia,n.SVGOverlay=Wp,n.TileLayer=zi,n.Tooltip=ks,n.Transformation=_e,n.Util=oe,n.VideoOverlay=Dp,n.bind=d,n.bounds=J,n.canvas=qp,n.circle=q1,n.circleMarker=$1,n.control=Ea,n.divIcon=tv,n.extend=o,n.featureGroup=U1,n.geoJSON=Fp,n.geoJson=K1,n.gridLayer=nv,n.icon=H1,n.imageOverlay=Q1,n.latLng=V,n.latLngBounds=O,n.layerGroup=W1,n.map=S1,n.marker=Z1,n.point=Z,n.polygon=G1,n.polyline=V1,n.popup=X1,n.rectangle=av,n.setOptions=N,n.stamp=u,n.svg=Vp,n.svgOverlay=J1,n.tileLayer=Hp,n.tooltip=ev,n.transformation=Ue,n.version=a,n.videoOverlay=Y1;var sv=window.L;n.noConflict=function(){return window.L=sv,this},window.L=n})})(Xu,Xu.exports);var pi=Xu.exports;const oi=gg(pi);function Qo(e,t,n){return Object.freeze({instance:e,context:t,container:n})}function xc(e,t){return t==null?function(a,o){const l=m.useRef();return l.current||(l.current=e(a,o)),l}:function(a,o){const l=m.useRef();l.current||(l.current=e(a,o));const d=m.useRef(a),{instance:h}=l.current;return m.useEffect(function(){d.current!==a&&(t(h,a,d.current),d.current=a)},[h,a,o]),l}}function e4(e,t){m.useEffect(function(){return(t.layerContainer??t.map).addLayer(e.instance),function(){var l;(l=t.layerContainer)==null||l.removeLayer(e.instance),t.map.removeLayer(e.instance)}},[t,e])}function a1(e){return function(n){const a=Ko(),o=e(hp(n,a),a);return t1(a.map,n.attribution),i1(o.current,n.eventHandlers),e4(o.current,a),o}}function t4(e,t){const n=xc(e,t),a=a1(n);return r1(a)}function o1(e,t){const n=xc(e),a=Xk(n,t);return Qk(a)}function n4(e,t){const n=xc(e,t),a=a1(n);return Yk(a)}function r4(e,t,n){const{opacity:a,zIndex:o}=t;a!=null&&a!==n.opacity&&e.setOpacity(a),o!=null&&o!==n.zIndex&&e.setZIndex(o)}function Mn(){return Ko().map}function s1(e){const t=Mn();return m.useEffect(function(){return t.on(e),function(){t.off(e)}},[t,e]),t}const i4=xc(function({children:t,...n},a){const o=new pi.Control.Layers(void 0,void 0,n);return Qo(o,dp(a,{layersControl:o}))},function(t,n,a){n.collapsed!==a.collapsed&&(n.collapsed===!0?t.collapse():t.expand())}),a4=Jk(i4),$i=r1(a4);function l1(e){return function(n){const a=Ko(),o=m.useRef(n),[l,d]=m.useState(null),{layersControl:h,map:u}=a,f=m.useCallback(v=>{h!=null&&(o.current.checked&&u.addLayer(v),e(h,v,o.current.name),d(v))},[h,u]),x=m.useCallback(v=>{h==null||h.removeLayer(v),d(null)},[h]),y=m.useMemo(()=>dp(a,{layerContainer:{addLayer:f,removeLayer:x}}),[a,f,x]);return m.useEffect(()=>{l!==null&&o.current!==n&&(n.checked===!0&&(o.current.checked==null||o.current.checked===!1)?u.addLayer(l):o.current.checked===!0&&(n.checked==null||n.checked===!1)&&u.removeLayer(l),o.current=n)}),n.children?Xr.createElement(up,{value:y},n.children):null}}$i.BaseLayer=l1(function(t,n,a){t.addBaseLayer(n,a)});$i.Overlay=l1(function(t,n,a){t.addOverlay(n,a)});function eh(){return eh=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},eh.apply(this,arguments)}function o4({bounds:e,boundsOptions:t,center:n,children:a,className:o,id:l,placeholder:d,style:h,whenReady:u,zoom:f,...x},y){const[v]=m.useState({className:o,id:l,style:h}),[_,w]=m.useState(null);m.useImperativeHandle(y,()=>(_==null?void 0:_.map)??null,[_]);const N=m.useCallback(z=>{if(z!==null&&_===null){const b=new pi.Map(z,x);n!=null&&f!=null?b.setView(n,f):e!=null&&b.fitBounds(e,t),u!=null&&b.whenReady(u),w(Kk(b))}},[]);m.useEffect(()=>()=>{_==null||_.map.remove()},[_]);const C=_?Xr.createElement(up,{value:_},a):d??null;return Xr.createElement("div",eh({},v,{ref:N}),C)}const si=m.forwardRef(o4),Gn=t4(function({position:t,...n},a){const o=new pi.Marker(t,n);return Qo(o,dp(a,{overlayContainer:o}))},function(t,n,a){n.position!==a.position&&t.setLatLng(n.position),n.icon!=null&&n.icon!==a.icon&&t.setIcon(n.icon),n.zIndexOffset!=null&&n.zIndexOffset!==a.zIndexOffset&&t.setZIndexOffset(n.zIndexOffset),n.opacity!=null&&n.opacity!==a.opacity&&t.setOpacity(n.opacity),t.dragging!=null&&n.draggable!==a.draggable&&(n.draggable===!0?t.dragging.enable():t.dragging.disable())}),Kn=o1(function(t,n){const a=new pi.Popup(t,n.overlayContainer);return Qo(a,n)},function(t,n,{position:a},o){m.useEffect(function(){const{instance:d}=t;function h(f){f.popup===d&&(d.update(),o(!0))}function u(f){f.popup===d&&o(!1)}return n.map.on({popupopen:h,popupclose:u}),n.overlayContainer==null?(a!=null&&d.setLatLng(a),d.openOn(n.map)):n.overlayContainer.bindPopup(d),function(){var x;n.map.off({popupopen:h,popupclose:u}),(x=n.overlayContainer)==null||x.unbindPopup(),n.map.removeLayer(d)}},[t,n,o,a])}),Md=n4(function({url:t,...n},a){const o=new pi.TileLayer(t,hp(n,a));return Qo(o,a)},function(t,n,a){r4(t,n,a);const{url:o}=n;o!=null&&o!==a.url&&t.setUrl(o)}),s4=o1(function(t,n){const a=new pi.Tooltip(t,n.overlayContainer);return Qo(a,n)},function(t,n,{position:a},o){m.useEffect(function(){const d=n.overlayContainer;if(d==null)return;const{instance:h}=t,u=x=>{x.tooltip===h&&(a!=null&&h.setLatLng(a),h.update(),o(!0))},f=x=>{x.tooltip===h&&o(!1)};return d.on({tooltipopen:u,tooltipclose:f}),d.bindTooltip(h),function(){d.off({tooltipopen:u,tooltipclose:f}),d._map!=null&&d.unbindTooltip()}},[t,n,o,a])});function li(){return i.jsxs($i,{position:"topright",children:[i.jsx($i.BaseLayer,{checked:!0,name:"شوارع وتفاصيل (OSM)",children:i.jsx(Md,{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",maxZoom:19,maxNativeZoom:19})}),i.jsx($i.BaseLayer,{name:"طرق أوضح (Carto Voyager)",children:i.jsx(Md,{attribution:'© <a href="https://www.openstreetmap.org/copyright">OSM</a> © <a href="https://carto.com/attributions">CARTO</a>',url:"https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",subdomains:"abcd",maxZoom:20})}),i.jsx($i.BaseLayer,{name:"معالم وشبكة طرق (Esri)",children:i.jsx(Md,{attribution:"Tiles © Esri — Source: Esri, Maxar, Earthstar Geographics",url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",maxZoom:19})})]})}function ci(){const e=Mn();return m.useEffect(()=>{const t=()=>{e.invalidateSize({animate:!1})};return window.addEventListener("resize",t),window.addEventListener("radar-map-invalidate",t),()=>{window.removeEventListener("resize",t),window.removeEventListener("radar-map-invalidate",t)}},[e]),null}const l4="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABSCAMAAAAhFXfZAAAC91BMVEVMaXEzeak2f7I4g7g3g7cua5gzeKg8hJo3grY4g7c3grU0gLI2frE0daAubJc2gbQwd6QzeKk2gLMtd5sxdKIua5g1frA2f7IydaM0e6w2fq41fK01eqo3grgubJgta5cxdKI1f7AydaQydaMxc6EubJgvbJkwcZ4ubZkwcJwubZgubJcydqUydKIxapgubJctbJcubZcubJcvbJYubJcvbZkubJctbJctbZcubJg2f7AubJcrbZcubJcubJcua5g3grY0fq8ubJcubJdEkdEwhsw6i88vhswuhcsuhMtBjMgthMsrg8srgss6is8qgcs8i9A9iMYtg8spgcoogMo7hcMngMonf8olfso4gr8kfck5iM8jfMk4iM8he8k1fro7itAgesk2hs8eecgzfLcofssdeMg0hc4cd8g2hcsxeLQbdsgZdcgxeLImfcszhM0vda4xgckzhM4xg84wf8Yxgs4udKsvfcQucqhUndROmdM1fK0wcZ8vb5w0eqpQm9MzeKhXoNVcpdYydKNWn9VZotVKltJFjsIwcJ1Rms9OlslLmtH///8+kc9epdYzd6dbo9VHkMM2f7FHmNBClM8ydqVcpNY9hro3gLM9hLczealQmcw3fa46f7A8gLMxc6I3eagyc6FIldJMl9JSnNRSntNNl9JPnNJFi75UnM9ZodVKksg8kM45jc09e6ZHltFBk883gbRBh7pDk9EwcaBzn784g7dKkcY2i81Om9M7j85Llc81is09g7Q4grY/j9A0eqxKmdFFltBEjcXf6fFImdBCiLxJl9FGlNFBi78yiMxVndEvbpo6js74+vx+psPP3+o/ks5HkcpGmNCjwdZCkNDM3ehYoNJEls+lxNkxh8xHks0+jdC1zd5Lg6r+/v/H2ufz9/o3jM3t8/edvdM/k89Th61OiLBSjbZklbaTt9BfptdjmL1AicBHj8hGk9FAgK1dkLNTjLRekrdClc/k7fM0icy0y9tgp9c4jc2NtM9Dlc8zicxeXZn3AAAAQ3RSTlMAHDdTb4yPA+LtnEQmC4L2EmHqB7XA0d0sr478x4/Yd5i1zOfyPkf1sLVq4Nh3FvjxopQ2/STNuFzUwFIwxKaejILpIBEV9wAABhVJREFUeF6s1NdyFEcYBeBeoQIhRAkLlRDGrhIgY3BJL8CVeKzuyXFzzjkn5ZxzzuScg3PO8cKzu70JkO0LfxdTU//pM9vTu7Xgf6KqOVTb9X7toRrVEfBf1HTVjZccrT/2by1VV928Yty9ZbVuucdz90frG8DBjl9pVApbOstvmMuvVgaNXSfAAd6pGxpy6yxf5ph43pS/4f3uoaGm2rdu72S9xzOvMymkZFq/ptDrk90mhW7e4zl7HLzhxGWPR20xmSxJ/VqldG5m9XhaVOA1DadsNh3Pu5L2N6QtPO/32JpqQBVVk20oy/Pi2s23WEvyfHbe1thadVQttvm7Llf65gGmXK67XtupyoM7HQhmXdLS8oGWJNeOJ3C5fG5XCEJnkez3/oFdsvgJ4l2ANZwhrJKk/7OSXa+3Vw2WJMlKnGkobouYk6T0TyX30klOUnTD9HJ5qpckL3EW/w4XF3Xd0FGywXUrstrclVsqz5Pd/sXFYyDnPdrLcQODmGOK47IZb4CmibmMn+MYRzFZ5jg33ZL/EJrWcszHmANy3ARBK/IXtciJy8VsitPSdE3uuHxzougojcUdr8/32atnz/ev3f/K5wtpxUTpcaI45zusVDpYtZi+jg0oU9b3x74h7+n9ABvYEZeKaVq0sh0AtLKsFtqNBdeT0MrSzwwlq9+x6xAO4tgOtSzbCjrNQQiNvQUbUEubvzBUeGw26yDCsRHCoLkTHDa7IdOLIThs/gHvChszh2CimE8peRs47cxANI0lYNB5y1DljpOF0IhzBDPOZnDOqYYbeGKECbPzWnXludPphw5c2YBq5zlwXphIbO4VDCZ0gnPfUO1TwZoYwAs2ExPCedAu9DAjfQUjzITQb3jNj0KG2Sgt6BHaQUdYzWz+XmBktOHwanXjaSTcwwziBcuMOtwBmqPrTOxFQR/DRKKPqyur0aiW6cULYsx6tBm0jXpR/AUWR6HRq9WVW6MRhIq5jLyjbaCTDCijyYJNpCajdyobP/eTw0iexBAKkJ3gA5KcQb2zBXsIBckn+xVv8jkZSaEFHE+jFEleAEfayRU0MouNoBmB/L50Ai/HSLIHxcrpCvnhSQAuakKp2C/YbCylJjXRVy/z3+Kv/RrNcCo+WUzlVEhzKffnTQnxeN9fWF88fiNCUdSTsaufaChKWInHeysygfpIqagoakW+vV20J8uyl6TyNKEZWV4oRSPyCkWpgOLSbkCObT8o2r6tlG58HQquf6O0v50tB7JM7F4EORd2dx/K0w/KHsVkLPaoYrwgP/y7krr3SSMA4zj+OBgmjYkxcdIJQyQRKgg2viX9Hddi9UBb29LrKR7CVVEEEXWojUkXNyfTNDE14W9gbHJNuhjDettN3ZvbOvdOqCD3Jp/9l+/wJE+9PkYGjx/fqkys3S2rMozM/o2106rfMUINo6hVqz+eu/hd1c4xTg0TAfy5kV+4UG6+IthHTU9woWmxuKNbTfuCSfovBCxq7EtHqvYL4Sm6F8GVxsSXHMQ07TOi1DKtZxjWaaIyi4CXWjxPccUw8WVbMYY5wxC1mzEyXMJWkllpRloi+Kkoq69sxBTlElF6aAxYUbjXNlhlDZilDnM4U5SlN5biRsRHnbx3mbeWjEh4mEyiuJDl5XcWVmX5GvNkFgLWZM5qwsop4/AWfLhU1cR7k1VVvcYCWRkOI6Xy5gmnphCYIkvzuNYzHzosq2oNk2RtSs8khfUOfHIDgR6ysYBaMpl4uEgk2U/oJTs9AaTSwma7dT69geAE2ZpEjUsn2ieJNHeKfrI3EcAGJ2ZaNgVuC8EBctCLc57P5u5led6IOBkIYkuQMrmmjChs4VkfOerHqSBkPzZlhe06RslZ3zMjk2sscqKwY0RcjKK+LWbzd7KiHhkncs/siFJ+V5eXxD34B8nVuJEpGJNmxN2gH3vSvp7J70tF+D1Ej8qUJD1TkErAND2GZwTFg/LubvmgiBG3SOvdlsqFQrkEzJCL1rstlnVFROixZoDDSuXQFHESwVGlcuQcMb/b42NgjLowh5MTDFE3vNB5qStRIErdCQEh6pLPR92anSUb/wAIhldAaDMpGgAAAABJRU5ErkJggg==",c4="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=",d4="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAQAAAACach9AAACMUlEQVR4Ae3ShY7jQBAE0Aoz/f9/HTMzhg1zrdKUrJbdx+Kd2nD8VNudfsL/Th///dyQN2TH6f3y/BGpC379rV+S+qqetBOxImNQXL8JCAr2V4iMQXHGNJxeCfZXhSRBcQMfvkOWUdtfzlLgAENmZDcmo2TVmt8OSM2eXxBp3DjHSMFutqS7SbmemzBiR+xpKCNUIRkdkkYxhAkyGoBvyQFEJEefwSmmvBfJuJ6aKqKWnAkvGZOaZXTUgFqYULWNSHUckZuR1HIIimUExutRxwzOLROIG4vKmCKQt364mIlhSyzAf1m9lHZHJZrlAOMMztRRiKimp/rpdJDc9Awry5xTZCte7FHtuS8wJgeYGrex28xNTd086Dik7vUMscQOa8y4DoGtCCSkAKlNwpgNtphjrC6MIHUkR6YWxxs6Sc5xqn222mmCRFzIt8lEdKx+ikCtg91qS2WpwVfBelJCiQJwvzixfI9cxZQWgiSJelKnwBElKYtDOb2MFbhmUigbReQBV0Cg4+qMXSxXSyGUn4UbF8l+7qdSGnTC0XLCmahIgUHLhLOhpVCtw4CzYXvLQWQbJNmxoCsOKAxSgBJno75avolkRw8iIAFcsdc02e9iyCd8tHwmeSSoKTowIgvscSGZUOA7PuCN5b2BX9mQM7S0wYhMNU74zgsPBj3HU7wguAfnxxjFQGBE6pwN+GjME9zHY7zGp8wVxMShYX9NXvEWD3HbwJf4giO4CFIQxXScH1/TM+04kkBiAAAAAElFTkSuQmCC";delete oi.Icon.Default.prototype._getIconUrl;oi.Icon.Default.mergeOptions({iconRetinaUrl:l4,iconUrl:c4,shadowUrl:d4});const u4={"ميني مول":"mini_mall","سوبر ماركت":"supermarket","خضار و فواكه":"greengrocer",ملحمة:"butcher",حلويات:"sweets",مطعم:"restaurant",كافيه:"cafe","مساحات عمل":"coworking",صيدلية:"pharmacy","أدوات منزلية":"household","أدوات كهربائية":"electric_tools","المولدات و الطاقة الشمسية":"solar_generators","المولدات والطاقة الشمسية":"solar_generators",إلكترونيات:"electronics",الكترونيات:"electronics","أدوات بناء":"hardware","ملابس نسائي":"clothing_women","ملابس رجالي":"clothing_men","ملابس أطفال":"clothing_kids",أحذية:"shoes",كوزماتكس:"cosmetics"};function pp(e){return(e||"").trim().replace(/[\u0640\u200c-\u200f]/g,"").replace(/[أإآٱ]/g,"ا").replace(/ى/g,"ي").replace(/ة/g,"ه").replace(/\s+/g," ")}const Vf=(()=>{const e=new Map;for(const[t,n]of Object.entries(u4))e.set(t.trim(),n),e.set(pp(t),n);return e})();function Gf(e){const t=(e||"").trim();return t&&(Vf.get(t)||Vf.get(pp(t)))||null}const Kf=[["greengrocer",/(خضار|خضروات|خضرة|فاكهه|فاكهة|فواكه|بلح|موز|برتقال|طماطم|بندوره|خضار\s*و\s*فواكه|فواكه\s*و\s*خضار)/i],["clothing_women",/(ملابس\s*نسائي|ملابس\s*نسائيه|ملابس\s*نساء|عبايه\s*نسائي|محل\s*نسائي)/i],["clothing_men",/(ملابس\s*رجالي|ملابس\s*رجاليه|ملابس\s*رجال|بدله\s*رجالي|بدلة\s*رجالي)/i],["clothing_kids",/(ملابس\s*أطفال|ملابس\s*اطفال|ملابس\s*ولادي|ملابس\s*البيبي)/i],["clothing",/(ملابس|ملبسات|أزياء|عبايه|عباية|تيشيرت|جينز|فستان|بناطيل|محل\s*ملابس|براند)/i],["shoes",/(احذيه|أحذية|شوز|كوتشي|كوتش|صندل|نعل|احذيه\s*رياضيه)/i],["solar_generators",/(طاقه\s*شمسيه|طاقة\s*شمسية|الطاقة\s*الشمسية|مولدات\s*و|مولدات.*شمس|شمس.*مولد|بانل\s*شمس|بانوهات\s*شمس|انفرتر|اينفرتر|نظام\s*شمسي|solar|photovoltaic|pv\s*panel)/i],["electric_tools",/(ادوات\s*كهربائيه|أدوات\s*كهربائية|معدات\s*كهربائيه|أدوات\s*الكهرباء)/i],["electronics",/(الكترونيات|إلكترونيات|الكترون|إلكترون|موبايل|جوال|هاتف|كمبيوتر|لابتوب|كميرا|كاميرا|شاحن|سماعات|كهربائ)/i],["furniture",/(اثاث|أثاث|مفروشات|كنب|سرير|خزائن|مكاتب)/i],["hardware",/(عدد|عدّات|ادوات\s*يدويه|أدوات\s*يدوية|ادوات\s*بناء|أدوات\s*بناء|مواد\s*بناء|سباكه|كهربائي|نجار|حداد|قرميد|اسمنت|إسمنت|دهان|طلاء|بويه)/i],["cosmetics",/(مكياج|عطور|صيدلانيه\s*تجميل|تجميل|عنايه|عناية|كريمات|مستحضرات|كوزماتكس|كوسمتيك|كوسماتكس)/i],["pharmacy",/(صيدليه|صيدلية|دواء|ادويه|أدوية|روشته|روشتة)/i],["butcher",/(ملحمه|ملحمة|جزار|جزاره|لحوم|لحمه|لحمة|دواجن|مجمدات\s*لحوم)/i],["fish",/(سمك|بحري|بحريات|جمبري|شريده|شريدة|سوشي)/i],["bakery",/(مخبز|مخبوزات|معجنات|فطاير|كيك|حلويات\s*شرقيه|كعك)/i],["dairy",/(البان|ألبان|الألبان|حليب|اجبان|أجبان|اجبنه|أجبان|زبادي|لبنه)/i],["cafe",/(قهوه|قهوة|كافيه|كافية|مقهى|نسكافيه|شاي|bubble)/i],["restaurant",/(مطعم|مطاعم|شورما|شاورما|فلافل|فلافيل|برغر|بيتزا|وجبات|مأكولات)/i],["sweets",/(حلويات|شوكولاته|شوكولاتة|بسكويت|سكريات|حلاوه|حلاوة)/i],["spices",/(بهارات|توابل|عطاره|عطارة|زعتر|زارة\s*بهارات)/i],["flowers",/(ورد|ازهار|نباتات|نبات|ياسمين|بائع\s*ورد|محل\s*ورد)/i],["books",/(كتب|قرطاسيه|قرطاسية|أدوات\s*مدرسيه|أدوات\s*مدرسية|مكتبه|مكتبة)/i],["toys",/(العاب|ألعاب|العاب\s*اطفال|ألعاب\s*أطفال|دمي|دمى)/i],["sports",/(رياضه|رياضية|رياضي|جم|جيم|معدات\s*رياضيه|معدات\s*رياضية|كرة)/i],["pets",/(حيوانات\s*اليفه|حيوانات\s*أليفة|قطط|كلاب|طيور|اسماك\s*زينه|أحواض)/i],["jewelry",/(ذهب|فضه|مجوهرات|اكسسوار|إكسسوار|ساعات\s*ذهب)/i],["auto",/(سيارات|سياره|بطاريات|زيوت|زيت\s*سيارات|قطع\s*غيار|ميكانيك)/i],["cleaning",/(منظفات|تنظيف|مكانس|مساحات|كلور|صابون\s*غسيل)/i],["gifts",/(هدايا|تحف|ديكورات|سفر\s*مائده|سفرة)/i],["household",/(ادوات\s*منزليه|أدوات\s*منزلية|بلاستيك|تخزين|اواني|أواني|طناجر)/i],["coworking",/(مساحات\s*عمل|كوركنج|coworking|مكتب\s*مشترك|شركه\s*ناشئه)/i],["mini_mall",/(ميني\s*مول|مول\s*صغير|mini\s*mall)/i],["supermarket",/(سوبر|سوبير|ماركت|بقال|بقالة|هايبر|سوق\s*مركزي|تموين|جمله|جملة)/i]],th={greengrocer:{emoji:"🥬",bg:"#43a047"},clothing:{emoji:"👕",bg:"#3949ab"},clothing_women:{emoji:"👗",bg:"#c2185b"},clothing_men:{emoji:"👔",bg:"#283593"},clothing_kids:{emoji:"🧒",bg:"#ef6c00"},shoes:{emoji:"👟",bg:"#6d4c41"},electronics:{emoji:"📱",bg:"#1e88e5"},furniture:{emoji:"🪑",bg:"#8d6e63"},hardware:{emoji:"🔨",bg:"#78909c"},cosmetics:{emoji:"💄",bg:"#ec407a"},pharmacy:{emoji:"💊",bg:"#1565c0"},butcher:{emoji:"🥩",bg:"#c62828"},fish:{emoji:"🐟",bg:"#0277bd"},bakery:{emoji:"🥐",bg:"#ef6c00"},dairy:{emoji:"🥛",bg:"#5c6bc0"},cafe:{emoji:"☕",bg:"#4e342e"},restaurant:{emoji:"🍴",bg:"#d84315"},sweets:{emoji:"🍰",bg:"#ad1457"},spices:{emoji:"🌶",bg:"#e65100"},flowers:{emoji:"💐",bg:"#2e7d32"},books:{emoji:"📚",bg:"#5e35b1"},toys:{emoji:"🧸",bg:"#f9a825"},sports:{emoji:"⚽",bg:"#00897b"},pets:{emoji:"🐾",bg:"#6a1b9a"},jewelry:{emoji:"💍",bg:"#ffd54f"},auto:{emoji:"🚗",bg:"#37474f"},cleaning:{emoji:"🧹",bg:"#26a69a"},gifts:{emoji:"🎁",bg:"#c2185b"},household:{emoji:"🏠",bg:"#7e57c2"},supermarket:{emoji:"🛒",bg:"#2e7d32"},mini_mall:{emoji:"🏬",bg:"#6a1b9a"},coworking:{emoji:"💼",bg:"#455a64"},solar_generators:{emoji:"☀️",bg:"#f57c00"},electric_tools:{emoji:"🔌",bg:"#607d8b"},generic:{emoji:"🏪",bg:"#fbc02d"}};function c1(e){const t=(e||"").trim();if(!t)return null;const n=Gf(t);if(n)return n;for(const[o,l]of Kf)if(l.test(t))return o;const a=pp(t);if(a&&a!==t){const o=Gf(a);if(o)return o;for(const[l,d]of Kf)if(d.test(a))return l}return null}function h4(e,t){if(!(t!=null&&t.length)||(e==null?void 0:e.category)==null)return null;const n=Number(e.category);if(!Number.isFinite(n))return null;const a=t.find(o=>Number(o.id)===n);return(a==null?void 0:a.name)||null}function d1(e,t){const n=new Set,a=[],o=l=>{const d=l&&String(l).trim()||"";d&&!n.has(d)&&(n.add(d),a.push(d))};o(e==null?void 0:e.category_name),o(h4(e,t)),o(e==null?void 0:e.store_name),o(e==null?void 0:e.description);for(const l of a){const d=c1(l);if(d)return d}return"generic"}function yc(e,t){const n=e==null?void 0:e.logo,a=e==null?void 0:e.category_image;if(n)return{type:"image",url:n};if(a)return{type:"image",url:a};const o=d1(e,t);return{type:"emoji",...th[o]}}function p4(e){const t=d1({category_name:e,category:null,store_name:"",description:""},null);return th[t]||th.generic}function Yo(e){var l,d;const t=(e==null?void 0:e.latitude)??(e==null?void 0:e.lat)??(e==null?void 0:e.location_lat)??((l=e==null?void 0:e.location)==null?void 0:l.lat),n=(e==null?void 0:e.longitude)??(e==null?void 0:e.lng)??(e==null?void 0:e.location_lng)??((d=e==null?void 0:e.location)==null?void 0:d.lng),a=Number(t),o=Number(n);return!Number.isFinite(a)||!Number.isFinite(o)||Math.abs(a)<.25&&Math.abs(o)<.25?null:[a,o]}function m4(e){return Yo(e)!=null}function f4(e){return e.type==="image"?oi.icon({iconUrl:e.url,iconSize:[46,46],iconAnchor:[23,46],popupAnchor:[0,-42],className:"store-map-pin-img"}):oi.divIcon({className:"store-map-pin-divicon",html:`<div class="store-map-pin-emoji-inner" style="background:${e.bg}">${e.emoji}</div>`,iconSize:[46,46],iconAnchor:[23,46],popupAnchor:[0,-40]})}const Qf=[31.5,34.4],g4=13;function x4({store:e}){const t=(e==null?void 0:e.rating_average)!=null?Number(e.rating_average):null,n=(e==null?void 0:e.rating_count)!=null?Number(e.rating_count):0,a=t!=null&&Number.isFinite(t)?t:null;if(!n||a==null)return i.jsx("div",{style:{fontSize:"0.82rem",color:"#666",marginBottom:8,lineHeight:1.4},children:"لا يوجد تقييم بعد"});const o=Math.min(5,Math.max(0,Math.round(a)));return i.jsxs("div",{dir:"ltr",style:{display:"flex",alignItems:"center",gap:8,marginBottom:8,flexWrap:"wrap"},children:[i.jsx("span",{style:{display:"inline-flex",gap:2,alignItems:"center"},"aria-hidden":!0,children:[1,2,3,4,5].map(l=>i.jsx(Gu,{size:16,color:"#f5c000",fill:l<=o?"#f5c000":"none",strokeWidth:l<=o?0:1.5},l))}),i.jsxs("span",{style:{fontSize:"0.84rem",color:"#333",fontWeight:800},children:[a.toFixed(1),i.jsxs("span",{style:{fontWeight:600,color:"#666"},children:[" · ",n," تقييم"]})]})]})}function y4(e,t,n,a,o,l){const d=(e==null?void 0:e.length)===2?`${Number(e[0]).toFixed(5)},${Number(e[1]).toFixed(5)}`:"none",h=(t||[]).map(x=>{const y=Number(x.latitude),v=Number(x.longitude);return!Number.isFinite(y)||!Number.isFinite(v)?null:`s:${x.id}:${y.toFixed(5)}:${v.toFixed(5)}`}).filter(Boolean),u=(n||[]).map(x=>{const y=Yo(x);return y?`c:${x.id}:${y[0].toFixed(5)}:${y[1].toFixed(5)}`:null}).filter(Boolean),f=l==="community"?u:l==="both"?[...h,...u]:h;return`${d}#${f.sort().join("|")}#${a}#${o?"R":"U"}#${l||"stores"}`}function v4({userLocation:e,stores:t,communityPoints:n,locationFocusNonce:a,focusOnResults:o,focusKind:l,autoFitStoresWhenNoUserLocation:d=!0}){const h=Mn(),u=m.useRef("");return m.useEffect(()=>{const f=y4(e,t,n,a,o,l);if(f===u.current)return;u.current=f;const x=(t||[]).map(_=>{const w=Number(_.latitude),N=Number(_.longitude);return!Number.isFinite(w)||!Number.isFinite(N)?null:[w,N]}).filter(Boolean),y=(n||[]).map(_=>Yo(_)).filter(Boolean),v=l==="community"?y:l==="both"?[...x,...y]:x;if(o){if(v.length===0){if((e==null?void 0:e.length)===2){const _=Number(e[0]),w=Number(e[1]);Number.isFinite(_)&&Number.isFinite(w)&&h.flyTo([_,w],17,{duration:.55,animate:!0})}return}if(v.length===1){h.setView(v[0],17,{animate:!0});return}h.fitBounds(oi.latLngBounds(v),{padding:[40,40],maxZoom:17,animate:!0});return}if(d&&x.length!==0){if(x.length===1){h.setView(x[0],15,{animate:!0});return}h.fitBounds(oi.latLngBounds(x),{padding:[40,40],maxZoom:17,animate:!0})}},[h,e,t,n,a,o,l,d]),null}function ua({onPick:e}){return s1({click(t){typeof e=="function"&&e(t.latlng.lat,t.latlng.lng)}}),null}function b4({userLocation:e,locationFocusNonce:t}){const n=Mn(),a=m.useRef(0);return m.useEffect(()=>{if(!e||e.length!==2){a.current=t;return}if(t<=a.current)return;const o=Number(e[0]),l=Number(e[1]);!Number.isFinite(o)||!Number.isFinite(l)||(n.flyTo([o,l],18,{duration:.85,animate:!0}),a.current=t)},[n,e,t]),null}function Cn(e){e.stopPropagation()}function w4({gpsFabAlignStart:e,gpsLocating:t,gpsLabel:n,gpsLocatingLabel:a,clearLabel:o="إلغاء موقعي",onGpsClick:l,onClearUserLocation:d,showClearUserLocation:h}){const f=Mn().getContainer(),x=!!(h&&typeof d=="function");return ic.createPortal(i.jsxs("div",{className:`shopper-map-gps-fab-stack${e?" shopper-map-gps-fab-stack--start":""}`,children:[x?i.jsxs("button",{type:"button",className:"shopper-map-gps-fab shopper-map-gps-fab--clear",onPointerDown:Cn,onPointerUp:Cn,onTouchStart:Cn,onMouseDown:Cn,onClick:y=>{Cn(y),d()},title:"إزالة دبوس موقعك من الخريطة","aria-label":"إلغاء موقعي",children:[i.jsx($_,{size:18,strokeWidth:2.25,"aria-hidden":!0,className:"shopper-map-gps-fab__ico"}),i.jsx("span",{className:"shopper-map-gps-fab__txt",children:o})]}):null,i.jsxs("button",{type:"button",className:"shopper-map-gps-fab",onPointerDown:Cn,onPointerUp:Cn,onTouchStart:Cn,onMouseDown:Cn,onClick:y=>{Cn(y),!t&&typeof l=="function"&&l()},disabled:t,title:"تحديد موقعي الحالي على الخريطة والتمركز عليه","aria-label":t?"جاري تحديد الموقع":"موقعي الحالي",children:[i.jsx(ln,{size:20,strokeWidth:2.25,"aria-hidden":!0,className:"shopper-map-gps-fab__ico"}),i.jsx("span",{className:"shopper-map-gps-fab__txt",children:t?a:n})]})]}),f)}function _4({active:e}){const t=Mn();return m.useEffect(()=>{const n=t.getContainer(),a="leaflet-pick-cursor";return e?n.classList.add(a):n.classList.remove(a),()=>n.classList.remove(a)},[t,e]),null}const j4={medical:"🏥",education:"📚",food:"🍲",water:"💧",institution:"🤝"};function k4(e){const t=j4[e]||"📍";return oi.divIcon({className:"community-map-pin-wrap",html:`<div class="community-map-pin-inner community-map-pin-inner--pin"><span class="community-pin-emoji">${t}</span></div>`,iconSize:[38,38],iconAnchor:[19,38],popupAnchor:[0,-34]})}const S4=({stores:e,communityPoints:t=[],userLocation:n,locationFocusNonce:a=0,onManualLocationPick:o,categories:l,showGpsOnMap:d=!1,gpsLocating:h=!1,onGpsClick:u,onClearUserLocation:f,mapHeight:x="clamp(260px, 52dvh, 420px)",gpsLabel:y="موقعي الحالي",gpsLocatingLabel:v="جاري الموقع… (حتى ~20ث)",wrapperClassName:_="",gpsFabAlignStart:w=!1,gpsInline:N=!1,topControls:C=null,focusOnResults:z=!1,focusKind:b="stores",focusStoreId:k=null,focusCommunityPointId:S=null,onExpandClick:E,isFullscreen:P=!1,autoFitStoresWhenNoUserLocation:I=!0})=>{const D=m.useMemo(()=>{if((n==null?void 0:n.length)===2)return n;if(!I)return Qf;const G=(e||[]).find(M=>Number.isFinite(Number(M.latitude))&&Number.isFinite(Number(M.longitude)));return G?[Number(G.latitude),Number(G.longitude)]:Qf},[e,n,I]),T=m.useMemo(()=>{const G=new Map;for(const M of e||[]){const Y=M==null?void 0:M.id;if(Y==null)continue;const Z=yc(M,l);G.set(String(Y),f4(Z))}return G},[e,l]),[R,U]=m.useState(!1),F=typeof o=="function",oe=m.useRef({}),ae=m.useRef({}),re=P||typeof x=="string"&&(x.includes("100dvh")||x.includes("100vh")||x==="100%"),X=(G,M)=>{typeof o=="function"&&o(G,M),U(!1)};return i.jsxs("div",{className:`radar-map card radar-map--manual-wrap radar-map--market${R?" radar-map--pick-active":""}${re?" radar-map--fill":""}${P?" radar-map--fullscreen":""}${_?` ${_}`:""}`,style:{padding:0,overflow:"hidden",position:P?"absolute":"relative",...P?{inset:0,width:"100%",height:"100%",display:"flex",flexDirection:"column"}:re?{flex:1,minHeight:0,display:"flex",flexDirection:"column"}:{}},children:[F?i.jsx("div",{className:"shopper-map-manual-bar",role:"region","aria-label":"تحديد الموقع يدوياً",children:R?i.jsxs(i.Fragment,{children:[i.jsx("span",{className:"shopper-map-manual-hint",children:"انقر على الخريطة لتثبيت موقعك"}),i.jsx("button",{type:"button",className:"shopper-map-manual-btn shopper-map-manual-btn-cancel",onClick:()=>U(!1),children:"إلغاء"})]}):i.jsxs(i.Fragment,{children:[i.jsx("button",{type:"button",className:"shopper-map-manual-btn shopper-map-manual-btn-primary",onClick:()=>U(!0),children:"تحديد موقعي يدوياً على الخريطة"}),N&&d&&typeof u=="function"?i.jsxs("button",{type:"button",className:"shopper-map-gps-inline",onClick:u,disabled:h,title:"تحديد موقعي الحالي على الخريطة","aria-label":h?"جاري تحديد الموقع":"موقعي الحالي",children:[i.jsx(ln,{size:18,strokeWidth:2.25,"aria-hidden":!0}),i.jsx("span",{children:h?v:y})]}):null]})}):null,C?i.jsx("div",{className:"shopper-map-topbar",role:"region","aria-label":"بحث وفلاتر الخريطة",children:C}):null,typeof E=="function"?i.jsx("button",{type:"button",className:"shopper-map-expand-btn",onClick:E,title:"تكبير الخريطة","aria-label":"تكبير الخريطة",children:i.jsx(N_,{size:20,strokeWidth:2.25,"aria-hidden":!0})}):null,i.jsxs(si,{center:D,zoom:g4,minZoom:10,maxZoom:19,scrollWheelZoom:!0,style:re?{flex:1,minHeight:P?0:220,width:"100%"}:{height:x,width:"100%"},children:[i.jsx(li,{}),i.jsx(ci,{}),i.jsx(_4,{active:R}),i.jsx(v4,{userLocation:n,stores:e,communityPoints:t,locationFocusNonce:a,focusOnResults:z,focusKind:b,autoFitStoresWhenNoUserLocation:I}),i.jsx(b4,{userLocation:n,locationFocusNonce:a}),k!=null?i.jsx(N4,{storeId:k,markerRefs:oe}):null,S!=null?i.jsx(C4,{pointId:S,markerRefs:ae}):null,F&&R?i.jsx(ua,{onPick:X}):null,(n==null?void 0:n.length)===2&&i.jsx(Gn,{position:n,children:i.jsx(Kn,{children:i.jsxs("div",{style:{maxWidth:220},children:[i.jsx("div",{style:{fontWeight:800,marginBottom:6},children:"موقعك للمقارنة بالمتاجر"}),i.jsx("div",{style:{fontSize:"0.88rem",lineHeight:1.45,color:"#444"},children:"استخدم «تحديد موقعي يدوياً على الخريطة» ثم انقر المكان، أو زر «موقعي الحالي» على حافة الخريطة للـ GPS."})]})})}),(t||[]).map(G=>{const M=Yo(G);if(!M)return null;const Y=G.category_slug||"",Z=k4(Y),ne=Y==="water"&&G.water_is_potable!=null?G.water_is_potable?"مياه صالحة للشرب":"مياه غير صالحة للشرب":null;return i.jsxs(Gn,{position:M,icon:Z,ref:J=>{const te=(G==null?void 0:G.id)!=null?String(G.id):"";te&&J&&(ae.current[te]=J)},children:[i.jsx(s4,{direction:"top",offset:[0,-34],opacity:.95,sticky:!0,children:i.jsxs("div",{style:{maxWidth:260},children:[i.jsx("div",{style:{fontWeight:900,marginBottom:4},children:G.title}),G.detail_description?i.jsxs("div",{style:{fontSize:"0.85rem",lineHeight:1.45,color:"#333"},children:[String(G.detail_description).slice(0,180),String(G.detail_description).length>180?"…":""]}):null]})}),i.jsx(Kn,{children:i.jsxs("div",{style:{minWidth:200,maxWidth:280},children:[i.jsx("div",{style:{fontWeight:900,marginBottom:6},children:G.title}),i.jsx("div",{style:{fontSize:"0.82rem",color:"#555",marginBottom:6},children:G.category_name||"خدمة مجتمعية"}),ne?i.jsx("div",{style:{fontSize:"0.8rem",fontWeight:700,marginBottom:6},children:ne}):null,G.institution_scope_label&&G.institution_scope?i.jsxs("div",{style:{fontSize:"0.8rem",marginBottom:6},children:["النطاق: ",G.institution_scope_label]}):null,i.jsx("div",{style:{fontSize:"0.85rem",lineHeight:1.45,marginBottom:8},children:G.detail_description}),i.jsx("div",{style:{fontSize:"0.8rem",color:"#666"},children:G.address_text})]})})]},`c-${G.id}`)}),(e||[]).map(G=>{const M=Number(G.latitude),Y=Number(G.longitude);if(!Number.isFinite(M)||!Number.isFinite(Y))return null;const Z=G.id!=null?String(G.id):"",ne=Z?T.get(Z):void 0;return i.jsx(Gn,{position:[M,Y],icon:ne,ref:J=>{Z&&J&&(oe.current[Z]=J)},children:i.jsx(Kn,{children:i.jsxs("div",{style:{minWidth:180},children:[i.jsx("div",{style:{fontWeight:900,marginBottom:4},children:G.store_name}),i.jsx(x4,{store:G}),i.jsx("div",{style:{color:"var(--text-secondary)",marginBottom:8},children:G.category_name||"متجر"}),i.jsx("div",{style:{color:"var(--text-secondary)",marginBottom:10},children:G.description||"لا يوجد وصف"}),i.jsx(ge,{to:`/stores/${G.id}`,style:{display:"inline-block",fontWeight:800,color:"var(--secondary)",background:"var(--primary)",padding:"8px 12px",borderRadius:10,textDecoration:"none",fontSize:"0.9rem"},children:"عرض المتجر"})]})})},G.id)}),!N&&d&&typeof u=="function"?i.jsx(w4,{gpsFabAlignStart:w,gpsLocating:h,gpsLabel:y,gpsLocatingLabel:v,onGpsClick:u,onClearUserLocation:f,showClearUserLocation:(n==null?void 0:n.length)===2}):null]})]})};function N4({storeId:e,markerRefs:t}){const n=Mn();return m.useEffect(()=>{const a=e!=null?String(e):"";if(!a)return;let o=!1,l=0;const d=()=>{var u,f;if(o)return;const h=(u=t==null?void 0:t.current)==null?void 0:u[a];if(h){try{h.openPopup();const x=(f=h.getLatLng)==null?void 0:f.call(h);x&&n.panTo(x,{animate:!0})}catch{}return}l+=1,l<14&&window.setTimeout(d,100)};return window.setTimeout(d,60),()=>{o=!0}},[e,t,n]),null}function C4({pointId:e,markerRefs:t}){const n=Mn();return m.useEffect(()=>{const a=e!=null?String(e):"";if(!a)return;let o=!1,l=0;const d=()=>{var u,f;if(o)return;const h=(u=t==null?void 0:t.current)==null?void 0:u[a];if(h){try{h.openPopup();const x=(f=h.getLatLng)==null?void 0:f.call(h);x&&n.panTo(x,{animate:!0})}catch{}return}l+=1,l<14&&window.setTimeout(d,100)};return window.setTimeout(d,60),()=>{o=!0}},[e,t,n]),null}function Io({position:e,zoom:t=17}){const n=Mn(),a=m.useRef("");return m.useEffect(()=>{if(!e||e.length!==2)return;const o=Number(e[0]),l=Number(e[1]);if(!Number.isFinite(o)||!Number.isFinite(l))return;const d=`${o.toFixed(7)},${l.toFixed(7)}`;d!==a.current&&(a.current=d,n.flyTo([o,l],t,{duration:.55,animate:!0}))},[n,e,t]),null}const z4=[31.5,34.4],P4=["ميني مول","سوبر ماركت","خضار و فواكه","ملحمة","حلويات","مطعم","كافيه","مساحات عمل","صيدلية","أدوات منزلية","أدوات كهربائية","إلكترونيات","أدوات بناء","__CLOTHES__","أحذية","كوزماتكس"],E4=[{value:"نسائي",label:"ملابس نسائي"},{value:"رجالي",label:"ملابس رجالي"},{value:"أطفال",label:"ملابس أطفال"}];function L4(e,t,n){const a=o=>{var l;return((l=e.find(d=>d.name===o))==null?void 0:l.id)??null};if(t==="__CLOTHES__"){const l={نسائي:"ملابس نسائي",رجالي:"ملابس رجالي",أطفال:"ملابس أطفال"}[n];return l?a(l):null}return t?a(t):null}const M4=()=>{const[e,t]=m.useState("shopper"),[n,a]=m.useState(!1),[o,l]=m.useState(""),[d,h]=m.useState(""),[u,f]=m.useState(""),[x,y]=m.useState(""),[v,_]=m.useState("نسائي"),[w,N]=m.useState(""),[C,z]=m.useState(null),[b,k]=m.useState(!1),[S,E]=m.useState(!1),[P,I]=m.useState([]),[D,T]=m.useState(!1),[R,U]=m.useState(""),[F,oe]=m.useState(!1),ae=dt(),{showAlert:re}=Oe(),X=m.useMemo(()=>C&&C.length===2?C:z4,[C]);m.useEffect(()=>{let O=!1;return(async()=>{T(!0);try{const H=await hi();O||I(Array.isArray(H)?H:[])}catch{O||I([])}finally{O||T(!1)}})(),()=>{O=!0}},[]);const G=m.useMemo(()=>L4(P,x,v),[P,x,v]),M=O=>{t(O),O==="shopper"&&(f(""),y(""),_("نسائي"),N(""),z(null),k(!1))},Y=async()=>{if(!navigator.geolocation){await re("المتصفح لا يدعم تحديد الموقع.","تنبيه");return}E(!0);try{const O=await Vo({maxWaitMs:18e3,goodEnoughM:150});z([O.latitude,O.longitude])}catch{await re("تعذر تحديد موقعك الحالي. جرّب النقر على الخريطة يدوياً.","الموقع")}finally{E(!1)}},Z={width:"100%",padding:"0.85rem 1rem",borderRadius:"var(--radius-md)",border:"1.5px solid var(--border)",background:"var(--surface)",fontSize:"0.95rem",textAlign:"right",marginBottom:"1.2rem"},ne=async O=>{if(O.preventDefault(),oe(!0),U(""),e==="merchant"){if(!u.trim()){U("أدخل اسم المتجر."),oe(!1);return}if(!x){U("اختر نوع المتجر (القسم)."),oe(!1);return}if(!G){U(D||P.length===0?"تعذر تحميل الأقسام. تأكد من تشغيل الخادم وتشغيل الترحيلات (migrate).":"القسم المحدد غير متوفر في النظام. حدّث الصفحة أو راجع الأدمن."),oe(!1);return}if(!w.trim()){U("أدخل عنوان المتجر أو وصف الموقع نصاً (يظهر لاحقاً في صفحة المتجر)."),oe(!1);return}}try{const H={username:o.trim(),user_type:e,password:d};e==="merchant"&&(H.store_name=u.trim(),H.category=G,H.location_address=w.trim(),C&&C.length===2&&(H.store_latitude=C[0],H.store_longitude=C[1]));const V=await Pj(H);e==="merchant"&&(V!=null&&V.merchant_subscription_notice)&&await re(V.merchant_subscription_notice,"ملاحظة الاشتراك"),await By(o.trim(),d),await re("تم إنشاء الحساب وتسجيل الدخول بنجاح.","تم"),ae("/")}catch(H){const V=Ae(H,"تعذر إنشاء الحساب. حاول مرة أخرى.");U(V),await re(V,"فشل"),console.error(H)}finally{oe(!1)}},J=async()=>{localStorage.removeItem("token"),localStorage.removeItem("refresh"),localStorage.removeItem("user_type"),localStorage.removeItem("user_name"),localStorage.removeItem("is_verified"),localStorage.removeItem("is_primary_admin"),localStorage.setItem("isGuest","true"),ae("/"),await re("أنت الآن في وضع الزائر.","تم")},te=e==="merchant"?480:420;return i.jsx(ze,{children:i.jsxs("div",{className:"auth-page",children:[i.jsxs("div",{className:"auth-card",style:{maxWidth:te},children:[i.jsx("img",{className:"auth-logo",src:"/logo.png",alt:"رادار"}),i.jsx("h1",{className:"auth-title",style:{marginBottom:"6px"},children:"إنشاء حساب"}),i.jsx("p",{className:"auth-sub",style:{marginBottom:"1rem"},children:"انضم كمتسوق أو افتح متجرك على رادار."}),i.jsxs("div",{className:"type-toggle",role:"tablist","aria-label":"نوع الحساب",children:[i.jsxs("button",{type:"button",role:"tab","aria-selected":e==="shopper",className:`type-item ${e==="shopper"?"active":""}`,onClick:()=>M("shopper"),children:[i.jsx("span",{className:"type-item__icon","aria-hidden":!0,children:i.jsx(Fl,{size:22,strokeWidth:2})}),i.jsx("span",{className:"type-item__label",children:"متسوق"})]}),i.jsxs("button",{type:"button",role:"tab","aria-selected":e==="merchant",className:`type-item ${e==="merchant"?"active":""}`,onClick:()=>M("merchant"),children:[i.jsx("span",{className:"type-item__icon","aria-hidden":!0,children:i.jsx(Pt,{size:22,strokeWidth:2})}),i.jsx("span",{className:"type-item__label",children:"تاجر"})]})]}),R&&i.jsx("p",{style:{color:"#c62828",fontSize:"0.85rem",marginBottom:"12px",fontWeight:700},children:R}),i.jsxs("form",{onSubmit:ne,children:[i.jsx(jt,{icon:i.jsx(Fl,{size:18}),placeholder:"اسم المستخدم",value:o,onChange:O=>l(O.target.value),required:!0}),i.jsxs("div",{className:"auth-password-field",children:[i.jsx(jt,{icon:i.jsx(oy,{size:18,strokeWidth:2}),type:n?"text":"password",placeholder:"كلمة المرور",value:d,onChange:O=>h(O.target.value),required:!0}),i.jsx("button",{type:"button",className:"auth-password-eye-btn",onClick:()=>a(!n),"aria-label":n?"إخفاء كلمة المرور":"إظهار كلمة المرور",title:n?"إخفاء":"إظهار",children:n?i.jsx(Vx,{size:18,strokeWidth:2,"aria-hidden":!0}):i.jsx(Gx,{size:18,strokeWidth:2,"aria-hidden":!0})})]}),e==="merchant"&&i.jsxs(i.Fragment,{children:[i.jsx(jt,{icon:i.jsx(Pt,{size:18}),placeholder:"اسم المتجر",value:u,onChange:O=>f(O.target.value),required:!0}),i.jsxs("div",{style:{marginBottom:10,textAlign:"right",display:"flex",alignItems:"center",gap:8,fontWeight:800,fontSize:"0.9rem",justifyContent:"flex-end"},children:[i.jsx(ln,{size:18,"aria-hidden":!0}),"عنوان / موقع المتجر (نص تفصيلي)"]}),i.jsx("textarea",{value:w,onChange:O=>N(O.target.value),placeholder:"مثال: غزة — الرمال، بجوار… / شارع… (يُعرض للمتسوّقين بجانب وصف المتجر؛ منفصل عن النقطة على الخريطة)",required:!0,rows:3,style:{width:"100%",padding:"0.85rem 1rem",borderRadius:"var(--radius-md)",border:"1.5px solid var(--border)",background:"var(--surface)",marginBottom:"1.2rem",fontFamily:"inherit",fontSize:"0.95rem",resize:"vertical"}}),i.jsxs("div",{className:"register-merchant-map",children:[i.jsxs("div",{className:"register-merchant-map__head",children:[i.jsx(ln,{size:18,"aria-hidden":!0}),i.jsx("span",{className:"register-merchant-map__title",children:"موقع المتجر على الخريطة"}),i.jsx("span",{className:"register-merchant-map__optional",children:"اختياري"})]}),i.jsx("p",{className:"register-merchant-map__hint",children:"انقر على الخريطة لوضع دبوس المتجر، أو استخدم «موقعي الحالي»، أو تجاوز الخطوة وحدّث الموقع لاحقاً من إعدادات المتجر."}),i.jsxs("div",{className:"register-merchant-map__toolbar",children:[i.jsx("button",{type:"button",className:"register-merchant-map__mini-btn",disabled:S,onClick:Y,children:S?"جاري الموقع…":"موقعي الحالي"}),C?i.jsx("button",{type:"button",className:"register-merchant-map__mini-btn register-merchant-map__mini-btn--ghost",onClick:()=>z(null),children:"إزالة النقطة"}):null,C?i.jsxs("span",{className:"register-merchant-map__coords",dir:"ltr",children:[C[0].toFixed(5)," ، ",C[1].toFixed(5)]}):null]}),i.jsxs("div",{className:"register-merchant-map__frame",children:[i.jsx("button",{type:"button",className:"register-merchant-map__expand-fab",onClick:()=>k(!0),"aria-label":"توسيع الخريطة",title:"توسيع الخريطة",children:"توسيع"}),i.jsxs(si,{center:X,zoom:14,minZoom:10,maxZoom:19,scrollWheelZoom:!0,style:{height:"clamp(220px, 48dvh, 360px)",width:"100%"},children:[i.jsx(li,{}),i.jsx(ci,{}),i.jsx(Io,{position:C}),i.jsx(ua,{onPick:(O,H)=>z([O,H])}),C?i.jsx(Gn,{position:C,children:i.jsx(Kn,{children:"موقع المتجر المقترح"})}):null]})]})]}),i.jsx("div",{style:{marginBottom:4,textAlign:"right",fontWeight:700,fontSize:"0.9rem"},children:"نوع المتجر (القسم)"}),i.jsxs("select",{"aria-label":"نوع المتجر",value:x,onChange:O=>y(O.target.value),style:Z,required:!0,disabled:D,children:[i.jsx("option",{value:"",children:"— اختر القسم —"}),P4.map(O=>i.jsx("option",{value:O,children:O==="__CLOTHES__"?"ملابس":O},O))]}),x==="__CLOTHES__"&&i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{marginBottom:4,textAlign:"right",fontWeight:700,fontSize:"0.9rem"},children:"نوع الملابس"}),i.jsx("select",{"aria-label":"نوع الملابس",value:v,onChange:O=>_(O.target.value),style:Z,children:E4.map(O=>i.jsx("option",{value:O.value,children:O.label},O.value))})]}),D?i.jsx("p",{style:{fontSize:"0.85rem",color:"var(--text-secondary)",textAlign:"right"},children:"جاري تحميل الأقسام..."}):null]}),i.jsx(Nt,{type:"submit",loading:F,style:{width:"100%",marginTop:"10px"},confirm:!1,showErrorAlert:!1,children:"سجل الآن"}),i.jsxs("div",{className:"flex-center",style:{margin:"15px 0"},children:[i.jsx("div",{style:{flex:1,height:"1px",background:"#eee"}}),i.jsx("span",{style:{padding:"0 10px",color:"#999",fontSize:"0.8rem"},children:"أو"}),i.jsx("div",{style:{flex:1,height:"1px",background:"#eee"}})]}),i.jsx(Nt,{variant:"secondary",type:"button",onClick:J,style:{width:"100%"},confirm:!1,showErrorAlert:!1,children:"تصفح كزائر"})]}),i.jsxs("p",{className:"auth-footer-link",children:["لديك حساب بالفعل؟ ",i.jsx(ge,{to:"/login",children:"تسجيل الدخول"})]})]}),b?i.jsx("div",{role:"dialog","aria-modal":"true","aria-label":"تحديد موقع المتجر على الخريطة",className:"register-map-modal-backdrop",onClick:()=>k(!1),children:i.jsxs("div",{className:"register-map-modal",onClick:O=>O.stopPropagation(),children:[i.jsxs("div",{className:"register-map-modal__bar",children:[i.jsx("button",{type:"button",className:"register-map-modal__btn register-map-modal__btn--primary",onClick:()=>k(!1),children:"تم"}),i.jsx("button",{type:"button",className:"register-map-modal__btn register-map-modal__btn--ghost",disabled:S,onClick:Y,children:S?"…":"موقعي"}),i.jsx("button",{type:"button",className:"register-map-modal__btn register-map-modal__btn--close",onClick:()=>k(!1),"aria-label":"إغلاق",children:"×"})]}),i.jsx("div",{className:"register-map-modal__map",children:i.jsxs(si,{center:X,zoom:15,minZoom:10,maxZoom:19,scrollWheelZoom:!0,style:{height:"100%",width:"100%"},children:[i.jsx(li,{}),i.jsx(ci,{}),i.jsx(Io,{position:C,zoom:16}),i.jsx(ua,{onPick:(O,H)=>z([O,H])}),C?i.jsx(Gn,{position:C,children:i.jsx(Kn,{children:"موقع المتجر"})}):null]})})]})}):null,i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        `}})]})})};function kt({images:e=[],alt:t="",className:n="",height:a=152,borderRadius:o=12,fill:l=!1}){const d=(Array.isArray(e)?e:[]).filter(Boolean),[h,u]=m.useState(0),f=d.length;m.useEffect(()=>{u(w=>f===0?0:Math.min(w,f-1))},[f]);const x=m.useCallback(w=>{f<=1||u(N=>(N+w+f)%f)},[f]);if(f===0)return null;const y={position:"relative",width:l?"100%":void 0,height:l?"100%":a,minHeight:l?0:void 0,borderRadius:o,overflow:"hidden",background:"var(--grey-light, #eee)"},v={width:"100%",height:"100%",objectFit:"cover",display:"block"},_={position:"absolute",top:"50%",transform:"translateY(-50%)",zIndex:2,border:"none",borderRadius:"50%",width:36,height:36,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",background:"rgba(255,255,255,0.92)",color:"var(--secondary)",boxShadow:"0 2px 8px rgba(0,0,0,0.12)"};return i.jsxs("div",{className:`radar-image-carousel ${n||""}`.trim(),style:y,children:[i.jsx("img",{src:d[h],alt:t,style:v}),f>1?i.jsxs(i.Fragment,{children:[i.jsx("button",{type:"button",style:{..._,insetInlineEnd:8},onClick:()=>x(1),"aria-label":"الصورة التالية",children:i.jsx(np,{size:22,strokeWidth:2.4})}),i.jsx("button",{type:"button",style:{..._,insetInlineStart:8},onClick:()=>x(-1),"aria-label":"الصورة السابقة",children:i.jsx(Wu,{size:22,strokeWidth:2.4})}),i.jsx("div",{style:{position:"absolute",bottom:8,left:0,right:0,display:"flex",justifyContent:"center",gap:6,zIndex:2},children:d.map((w,N)=>i.jsx("button",{type:"button","aria-label":`صورة ${N+1} من ${f}`,onClick:()=>u(N),style:{width:N===h?22:8,height:8,borderRadius:4,border:"none",padding:0,cursor:"pointer",background:N===h?"var(--primary)":"rgba(255,255,255,0.75)",transition:"width 0.15s ease"}},N))})]}):null]})}function De(e){return e?Array.isArray(e.images)&&e.images.length>0?e.images.filter(Boolean):e.image?[e.image]:[]:[]}function Yf(e){return e?Array.isArray(e.line_images)&&e.line_images.length>0?e.line_images.filter(Boolean):De(e.product_details):[]}function Ro(e){if(!e||typeof e!="object")return!1;for(let t=0;t<7;t++){const n=e[String(t)]??e[t];if(Array.isArray(n))for(const a of n){if(!a||typeof a!="object")continue;const o=String(a.start??"").trim(),l=String(a.end??"").trim();if(o&&l)return!0}}return!1}function vc(){if(!localStorage.getItem("token")||localStorage.getItem("isGuest")==="true")return!1;const e=localStorage.getItem("user_type")||"shopper";return e==="shopper"||e==="merchant"||e==="admin"}function Td(e,t){const a=f=>f*Math.PI/180,o=a(t[0]-e[0]),l=a(t[1]-e[1]),d=a(e[0]),h=a(t[0]),u=Math.sin(o/2)**2+Math.cos(d)*Math.cos(h)*Math.sin(l/2)**2;return 2*6371*Math.asin(Math.sqrt(u))}function $s(e){const t=Number(e.latitude),n=Number(e.longitude);return!(!Number.isFinite(t)||!Number.isFinite(n)||Math.abs(t)<.25&&Math.abs(n)<.25)}function T4(e){try{const t=new URLSearchParams(e).get("category");if(t==null||t==="")return null;const n=Number(t);return Number.isFinite(n)?n:null}catch{return null}}function Jf(e){try{return new URLSearchParams(e).get("filter")==="community"?"community":"stores"}catch{return"stores"}}function A4(e){try{const t=new URLSearchParams(e).get("cc");if(t==null||t==="")return null;const n=Number(t);return Number.isFinite(n)?n:null}catch{return null}}function I4(e){return(e||"").trim().toLowerCase().replace(/[أإآٱ]/g,"ا").replace(/ى/g,"ي").replace(/ة/g,"ه").replace(/ؤ/g,"و").replace(/ئ/g,"ي").replace(/\s+/g," ")}const R4=[{re:/مسجد|جامع|مصلى|mosque|islamic center/i,Icon:C_,tone:"#1b5e20"},{re:/كنيس|كنيسة|church|christian/i,Icon:l_,tone:"#3949ab"},{re:/جمعيه خيريه|جمعية خيرية|خيريه|خيرية|تطوع|ngo|charity|تكافل|أيتام/i,Icon:v_,tone:"#c2185b"},{re:/مدرسه|مدرسة|روضه|روضة|حضانه|حضانة|ابتدائ|اعداد|إعداد|ثانوي|school|kindergarten/i,Icon:O_,tone:"#283593"},{re:/جامعه|جامعة|university|كليه|كلية/i,Icon:ny,tone:"#4527a0"},{re:/محام|قانون|legal|شرعي|عدل|نوتر|محكمه|محكمة|lawyer/i,Icon:R_,tone:"#37474f"},{re:/بلديه|بلدية|حكوم|وزاره|وزارة|دائرة|مركز خدمات|بلدي|municipal/i,Icon:Uu,tone:"#455a64"},{re:/بنك|مصرف|صراف|مالي|bank|atm|تحويلات ماليه|تحويلات مالية/i,Icon:Uu,tone:"#1565c0"},{re:/فندق|نزل|hotel|hostel|ضيافه|ضيافة/i,Icon:w_,tone:"#6a1b9a"},{re:/عقار|عقارات|وساطه|وساطة|real\s*estate|أراضي|املاك|أملاك/i,Icon:i_,tone:"#5d4037"},{re:/اسنان|أسنان|تقويم|مخدر|تجميل اسنان|dentist|dental|orthodont/i,Icon:F_,tone:"#00897b"},{re:/بيطر|بيطريه|بيطرية|عياده بيط|عيادة بيط|حيوانات اهليه|حيوانات أهلية|veterinar/i,Icon:Zu,tone:"#795548"},{re:/صيدل|دواء|pharm|روشته|روشتة|dispensary|صيدليات/i,Icon:Zx,tone:"#c62828"},{re:/عياده|عيادة|طبيب|دكتور|مستشفى|مستوصف|تحاليل طب|مختبر طب|طوارئ طب|clinic|emergency|ممرض/i,Icon:b_,tone:"#c62828"},{re:/اسعاف|إسعاف|هيئه اسعاف|هيئة إسعاف|paramedic/i,Icon:hy,tone:"#ad1457"},{re:/خضار|فواكه|فاكهه|فاكهة|خضروات|greengrocer|produce|فواكه وخضار/i,Icon:Vu,tone:"#2e7d32"},{re:/سمك|اسماك|أسماك|بحري|ماكولات بحر|مأكولات بحر|seafood|fish shop|fish store/i,Icon:Qx,tone:"#0277bd"},{re:/لحوم|جزاره|جزارة|جزار|لحم|butcher|لحام|لحوم حمراء/i,Icon:Fx,tone:"#6d4c41"},{re:/دواجن|دجاج|فراخ|ديك رومي|poultry|دواجن طازجه|دواجن طازجة/i,Icon:m_,tone:"#e65100"},{re:/البان|ألبان|اجبان|أجبان|حليب|جبن|dairy|cheese|البان واجبان|ألبان وأجبان/i,Icon:cy,tone:"#5d4037"},{re:/مكسرات|مكسره|مكسرة|فستق|لوز|سكب|كاجو|nuts/i,Icon:z_,tone:"#795548"},{re:/قمح|حبوب|اعلاف|أعلاف|علف|wheat|grain|مطحنه|مطحنة/i,Icon:V_,tone:"#f9a825"},{re:/وقود|بنزين|ديزل|محطه وقود|محطة وقود|fuel|petrol|بترول|غاز سيارات/i,Icon:g_,tone:"#263238"},{re:/طاقه\s*شمسيه|طاقة\s*شمسية|الطاقة\s*الشمسية|مولدات\s*و|مولدات.*شمس|شمس.*مولد|بانل\s*شمس|انفرتر|solar|photovoltaic|pv\s*panel/i,Icon:py,tone:"#f57c00"},{re:/اطارات|إطارات|بنشري|بنشر|اطار|إطار|tyre|tire|patch/i,Icon:Du,tone:"#37474f"},{re:/غسيل|مغسله|مغسلة|كوي|تنظيف جاف|laundry|dry\s*clean|مكوايه|مكواية/i,Icon:$x,tone:"#0277bd"},{re:/طباعه|طباعة|مطبعه|مطبعة|نسخ|print|copy\s*center/i,Icon:T_,tone:"#424242"},{re:/ارجيله|أرجيلة|معسل|شيشه|شيشة|hookah|narghile/i,Icon:Yx,tone:"#bf360c"},{re:/عصير|عصائر|مشروبات غاز|برتقال طرش|soft\s*drinks|مشروبات بارده|مشروبات باردة/i,Icon:h_,tone:"#ef6c00"},{re:/ايس كريم|آيس كريم|بوظه|بوظة|ايس|آيس|ice\s*cream|جلاطي|gelato/i,Icon:__,tone:"#ec407a"},{re:/مفاتيح|اقفال|أقفال|اقفل|أقفل|locksmith|key\s*mak/i,Icon:k_,tone:"#5d4037"},{re:/مطعم|مأكول|اكل|أكل|restaurant|مشويات|سفره|سفرة|وجبات|فاست فود|fast\s*food|برجر|بيتزا|شاورما|فلافل|كنفه|ارز|أرز بال|بوفيه مفتوح|مندي|كبسه|كبسة|مطاعم/i,Icon:fy,tone:"#e65100"},{re:/كافيه|كافي|قهوه|قهوة|cafe|coffee|مقهى|قهوجي/i,Icon:Hx,tone:"#5d4037"},{re:/مخبز|حلو|حلويات|معجن|ساندوتش|سندوتش|كيك|كعك|معكروت|مخبوزات|pastry|donut|دونات/i,Icon:d_,tone:"#f9a825"},{re:/سوبر|هايبر|ماركت|بقاله|بقالة|تموين|اقتصادي|grocery|minimarket|ماركت صغير/i,Icon:er,tone:"#2e7d32"},{re:/اقمشه|أقمشة|قماش|مزاين|خياط|خياطه|خياطة|تفصيل|زي موحد/i,Icon:$u,tone:"#ad1457"},{re:/ملابس|أزياء|موضه|موضة|نسائي|رجالي|احذيه|أحذيه|أحذية|حقائب|جلديات|عبايه|عباية|فاشن|fashion|boutique/i,Icon:$u,tone:"#ad1457"},{re:/لابتوب|كمبيوتر مكتبي|كمبيوتر|حاسوب|كمبيتور|لاب توب|pc|gaming\s*pc|كمبيوترات/i,Icon:iy,tone:"#00695c"},{re:/موبايل|موبيل|هاتف|اتصالات|اتصال|جوال|mobile|phone|smartphone|شاحن|كابلات/i,Icon:Sf,tone:"#00695c"},{re:/واي فاي|wifi|انترنت|إنترنت|net|راوتر/i,Icon:Sf,tone:"#0277bd"},{re:/كتب|قرطاس|مكتبه|مكتبة|ادوات كتابيه|أدوات كتابية|دفتر|أقلام|stationery/i,Icon:Dx,tone:"#3949ab"},{re:/عطور|تجميل|مكياج|اظافر|أظافر|صالون|حلاق|حلاقه|حلاقة|barber|كوافير|cosmetic|beauty/i,Icon:bn,tone:"#d81b60"},{re:/ذهب|مجوهر|مجوهرات|فضه|فضة|ساعه يد|ساعة يد|watch\s*shop/i,Icon:ey,tone:"#fbc02d"},{re:/زهور|ورود|نبات|حديقه|حديقة|مزهريه|مزهرية|flower|ورده|وردة/i,Icon:Jx,tone:"#2e7d32"},{re:/رياضه|رياضة|sport|لياقه|لياقة|جيم|صاله رياضيه|صالة رياضية|protein|مكملات غذائيه|مكملات غذائية/i,Icon:qx,tone:"#ef6c00"},{re:/العاب|ألعاب|toys|playstation|دمى|دميه|دمية|games/i,Icon:Xx,tone:"#7b1fa2"},{re:/حيوان|اليف|أليف|pet|قطه|قطة|كلب|بيطر|veterinar|عياده بيطريه|عيادة بيطرية/i,Icon:Zu,tone:"#795548"},{re:/اثاث|أثاث|مفروشات|سجاد|كنب|ديكور|اناره|إنارة|مفروش|furniture|lamps|اضاءه|إضاءة/i,Icon:la,tone:"#5d4037"},{re:/دهان|طلاء|بويه|بوية|دهانات|paint\s*shop|الوان|ألوان/i,Icon:P_,tone:"#8e24aa"},{re:/بناء|مقاول|انشاءات|إنشاءات|مقاولين|خرسان|هندسه|هندسة معمار|هندسة معماري/i,Icon:y_,tone:"#5d4037"},{re:/نجار|نجاره|نجارة|الخشب|الومنيوم زجاج|ألمنيوم|حداد|حداده|حدادة|حدادين|خشبيات/i,Icon:ry,tone:"#6d4c41"},{re:/كهرباء|سباك|سباكه|سباكة|تكييف|صيانه|صيانة|لحام|صيانة عامه|صيانة عامة|أدوات صناعيه|أدوات صناعية|عده|عدة/i,Icon:G_,tone:"#607d8b"},{re:/سفريات|سياحه|سياحة|travel|طيران محلي|wings tour/i,Icon:L_,tone:"#0277bd"},{re:/شحن|توصيل|نقل بضائع|delivery|لوجست|logistics|ديلفري/i,Icon:U_,tone:"#33691e"},{re:/هديا|هدايا|ورود و هدايا|gift/i,Icon:ty,tone:"#d84315"},{re:/تصوير|فوتو|استوديو|photo|كاميرا/i,Icon:a_,tone:"#ad1457"},{re:/نظارات|بصريات|optical|عدسات لاصقه|عدسات لاصقة/i,Icon:x_,tone:"#3f51b5"},{re:/دراجه|دراجة|سيكل|bike|bicycle/i,Icon:t_,tone:"#006064"},{re:/سيارات|ورشه|ورشة|ميكانيك|كراج|غسيل سيارات|car\s*wash|ورشه سيارات|ورشة سيارات/i,Icon:Du,tone:"#37474f"},{re:/مشتل|مشاتل|زراعه|زراعة|تربه|تربة|مزارع|agricultur|مبيدات زراعيه|مبيدات زراعية/i,Icon:Vu,tone:"#558b2f"}],Xf={medical:{Icon:hy,tone:"#c62828"},education:{Icon:ny,tone:"#4527a0"},food:{Icon:D_,tone:"#e65100"},water:{Icon:$x,tone:"#0277bd"},institution:{Icon:Uu,tone:"#5d4037"}},eg={mini_mall:{Icon:q_,tone:"#6a1b9a"},supermarket:{Icon:er,tone:"#2e7d32"},greengrocer:{Icon:Vu,tone:"#43a047"},butcher:{Icon:Fx,tone:"#c62828"},fish:{Icon:Qx,tone:"#0277bd"},dairy:{Icon:cy,tone:"#5c6bc0"},bakery:{Icon:u_,tone:"#ef6c00"},sweets:{Icon:o_,tone:"#ad1457"},spices:{Icon:Yx,tone:"#e65100"},restaurant:{Icon:fy,tone:"#d84315"},cafe:{Icon:Hx,tone:"#4e342e"},coworking:{Icon:n_,tone:"#455a64"},solar_generators:{Icon:py,tone:"#f57c00"},pharmacy:{Icon:Zx,tone:"#1565c0"},cosmetics:{Icon:bn,tone:"#ec407a"},shoes:{Icon:f_,tone:"#6d4c41"},clothing:{Icon:Bl,tone:"#3949ab"},clothing_women:{Icon:I_,tone:"#c2185b"},clothing_men:{Icon:$u,tone:"#283593"},clothing_kids:{Icon:Xw,tone:"#ef6c00"},electronics:{Icon:iy,tone:"#1e88e5"},electric_tools:{Icon:M_,tone:"#607d8b"},household:{Icon:la,tone:"#7e57c2"},furniture:{Icon:Yw,tone:"#8d6e63"},hardware:{Icon:ry,tone:"#78909c"},books:{Icon:Dx,tone:"#5e35b1"},toys:{Icon:Xx,tone:"#f9a825"},sports:{Icon:qx,tone:"#00897b"},pets:{Icon:Zu,tone:"#6a1b9a"},jewelry:{Icon:ey,tone:"#ffd54f"},auto:{Icon:Du,tone:"#37474f"},cleaning:{Icon:r_,tone:"#26a69a"},gifts:{Icon:ty,tone:"#c2185b"},flowers:{Icon:Jx,tone:"#2e7d32"},generic:{Icon:Pt,tone:"#fbc02d"}};function tg(e,t=null){if(t&&Xf[t])return Xf[t];const n=c1(e);if(n&&eg[n])return eg[n];const a=I4(e);if(!a)return{Icon:Pt,tone:"var(--secondary)"};for(const o of R4)if(o.re.test(a))return{Icon:o.Icon,tone:o.tone};return{Icon:Pt,tone:"var(--secondary)"}}function qs(e){const t=String(e||"");if(!t||t.startsWith("var("))return{background:"rgba(26, 29, 38, 0.06)",borderColor:"rgba(26, 29, 38, 0.12)"};const n=t.replace("#","");if(n.length!==6||!/^[0-9a-fA-F]+$/.test(n))return{background:"var(--primary-light)",borderColor:"rgba(255, 204, 0, 0.35)"};const a=parseInt(n.slice(0,2),16),o=parseInt(n.slice(2,4),16),l=parseInt(n.slice(4,6),16);return{background:`rgba(${a}, ${o}, ${l}, 0.15)`,borderColor:`rgba(${a}, ${o}, ${l}, 0.28)`}}const Ad=6,O4=12,B4=8,Li=5*60*1e3,u1=()=>{var as,Ht,xe;const[e,t]=oc(),n=dt(),a=Qt(),{showAlert:o,showPrompt:l,showSelect:d}=Oe(),h=m.useRef(null),u=m.useRef(null),f=m.useRef(null),x=m.useRef(null),{userMapLocation:y,locationFocusNonce:v,setManualMapLocation:_,requestUserLocation:w,locating:N,searchQuery:C,setSearchQuery:z}=Go(),[b,k]=m.useState(1),[S,E]=m.useState(1),[P,I]=m.useState(()=>typeof window<"u"?window.matchMedia("(max-width: 640px)").matches:!1),[D,T]=m.useState([]),[R,U]=m.useState([]),[F,oe]=m.useState(!0),[ae,re]=m.useState(!0),[X,G]=m.useState(""),[M,Y]=m.useState(null),[Z,ne]=m.useState(!0),[J,te]=m.useState(()=>typeof window<"u"?Jf(window.location.search):"stores"),[O,H]=m.useState(()=>typeof window<"u"?T4(window.location.search):null),[V,le]=m.useState(()=>typeof window<"u"?A4(window.location.search):null),[fe,Me]=m.useState([]),[je,_e]=m.useState(!0),[Ue,Ut]=m.useState({}),[mi,rr]=m.useState([]),[K,me]=m.useState(!1),[he,we]=m.useState([]),[Be,Ge]=m.useState(!0),[Fe,yt]=m.useState(null);m.useEffect(()=>{if(typeof window>"u")return;const B=window.matchMedia("(max-width: 640px)"),ie=()=>I(B.matches);return ie(),typeof B.addEventListener=="function"?B.addEventListener("change",ie):B.addListener(ie),()=>{typeof B.removeEventListener=="function"?B.removeEventListener("change",ie):B.removeListener(ie)}},[]);const[Lr,_c]=m.useState(0),[fi,Jo]=m.useState(0),[wa,jc]=m.useState(0),[_a,Xo]=m.useState(0),gi=m.useCallback((B,ie,de,ye)=>{if(!B)return()=>{};let Ne=0;const Jt=()=>Array.from(B.querySelectorAll(ie)),st=()=>{const bi=Jt();if(de(bi.length),bi.length===0){ye(0);return}const zc=B.scrollLeft+B.clientWidth/2;let os=0,ss=1/0;for(let Or=0;Or<bi.length;Or+=1){const ls=bi[Or],wi=ls.offsetLeft+ls.offsetWidth/2,cs=Math.abs(wi-zc);cs<ss&&(ss=cs,os=Or)}ye(os)},Rr=()=>{Ne||(Ne=window.requestAnimationFrame(()=>{Ne=0,st()}))};return st(),B.addEventListener("scroll",Rr,{passive:!0}),window.addEventListener("resize",st),()=>{Ne&&window.cancelAnimationFrame(Ne),B.removeEventListener("scroll",Rr),window.removeEventListener("resize",st)}},[]);m.useEffect(()=>gi(f.current,".home-exclusive-card",_c,Jo),[gi,J,je,fe.length]),m.useEffect(()=>gi(x.current,".home-browse-item",jc,Xo),[gi,J,ae,Be,R.length,he.length]);const es=m.useCallback(B=>{B&&typeof B.preventDefault=="function"&&B.preventDefault();const ie=C.trim();n(ie?`/search?q=${encodeURIComponent(ie)}`:"/search")},[n,C]);m.useEffect(()=>{te(Jf(`?${e.toString()}`));const B=e.get("category");if(B==null||B==="")H(null);else{const de=Number(B);H(Number.isFinite(de)?de:null)}const ie=e.get("cc");if(ie==null||ie==="")le(null);else{const de=Number(ie);le(Number.isFinite(de)?de:null)}},[e]),m.useEffect(()=>{var ye;const B=(ye=a.state)==null?void 0:ye.mapFocus;if(!B)return;const ie=Number(B.lat),de=Number(B.lng);!Number.isFinite(ie)||!Number.isFinite(de)||(_(ie,de),n({pathname:a.pathname,search:a.search},{replace:!0,state:{}}))},[a.state,a.pathname,a.search,n,_]),m.useEffect(()=>{if(J!=="stores"||O==null)return;const B=window.setTimeout(()=>{var ie;(ie=h.current)==null||ie.scrollIntoView({behavior:"smooth",block:"start"})},180);return()=>window.clearTimeout(B)},[J,O]);const[xi,ja]=m.useState(()=>Math.floor(Date.now()/Li));m.useEffect(()=>{let B=0,ie=0;return(()=>{const ye=Date.now(),Ne=(Math.floor(ye/Li)+1)*Li,Jt=Math.max(250,Ne-ye+50);B=window.setTimeout(()=>{ja(Math.floor(Date.now()/Li)),ie=window.setInterval(()=>{ja(Math.floor(Date.now()/Li))},Li)},Jt)})(),()=>{B&&window.clearTimeout(B),ie&&window.clearInterval(ie)}},[]);const Mr=m.useMemo(()=>{const B=Array.isArray(fe)?fe:[],ie=B.length;if(ie<=1)return B;const de=(xi%ie+ie)%ie;return de===0?B:[...B.slice(de),...B.slice(0,de)]},[fe,xi]);m.useEffect(()=>{k(1)},[J,O]),m.useEffect(()=>{E(1)},[J,O,Z]);const Tr=m.useCallback(async()=>{if(J!=="stores"||ae)return;const B=[{id:"__all__",label:"الكل",value:null},...R.map(ye=>({id:String(ye.id),label:ye.name,value:ye.id}))],ie=await d("اختر القسم:","تصفية المتاجر",B);if(ie==null)return;const de=new URLSearchParams(e);de.delete("filter"),de.delete("cc"),ie==="__all__"?de.delete("category"):de.set("category",String(ie)),t(de,{replace:!0})},[J,ae,R,d,e,t]),kc=m.useCallback(async()=>{if(J!=="community"||Be)return;const B=[{id:"__all__",label:"الكل",value:null},...he.map(ye=>({id:String(ye.id),label:ye.name,value:ye.id}))],ie=await d("اختر القسم:","تصفية الخدمات",B);if(ie==null)return;const de=new URLSearchParams(e);de.set("filter","community"),de.delete("category"),ie==="__all__"?de.delete("cc"):de.set("cc",String(ie)),t(de,{replace:!0})},[J,Be,he,d,e,t]);m.useEffect(()=>{let B=!1;return(async()=>{try{const ie=await va();B||we(Array.isArray(ie)?ie:[])}catch(ie){console.error(ie),B||we([])}finally{B||Ge(!1)}})(),()=>{B=!0}},[]),m.useEffect(()=>{let B=!1;return(async()=>{try{const ie=await hi();B||U(Array.isArray(ie)?ie:[])}catch(ie){console.error(ie),B||U([])}finally{B||re(!1)}})(),()=>{B=!0}},[]),m.useEffect(()=>{let B=!1;return(async()=>{try{B||_e(!0);const de=await Gy(J==="stores"?O:null);B||Me(Array.isArray(de)?de:[])}catch(ie){console.error(ie),B||Me([])}finally{B||_e(!1)}})(),()=>{B=!0}},[J,O]),m.useEffect(()=>{let B=!1;const ie=J==="community";return(async()=>{ie&&(B||me(!0));try{const de=ie&&V!=null?V:null,ye=await mc(de);B||rr(Array.isArray(ye)?ye:[])}catch(de){console.error(de),B||rr([])}finally{!B&&ie&&me(!1)}})(),()=>{B=!0,me(!1)}},[J,V]),m.useEffect(()=>{let B=!1;return(async()=>{var de;try{oe(!0),G("");let ye,Ne,Jt=null;(y==null?void 0:y.length)===2?(ye=y[0],Ne=y[1],Jt=[ye,Ne],B||Y(Jt)):(ye=31.5,Ne=34.4,Jt=null,B||Y(null));const st=await fc(ye,Ne),Rr=Array.isArray(st)?st:(st==null?void 0:st.results)||[];B||T(Rr)}catch(ye){if(console.error("Error fetching stores:",ye),!B){const Ne=(de=ye.response)==null?void 0:de.status;ye.response?Ne>=500?G("الخادم أرجع خطأ أثناء تحميل المتاجر. راجع نافذة تشغيل Django أو أعد تشغيل السيرفر."):G(`تعذر تحميل المتاجر (رمز ${Ne}). جرّب مرة أخرى.`):G("تعذر الاتصال بالخادم. من مجلد backend شغّل: python manage.py runserver ثم حدّث الصفحة (الواجهة على المنفذ 3000).")}}finally{B||oe(!1)}})(),()=>{B=!0}},[y]);const ts=m.useMemo(()=>J!=="stores"?[]:(D||[]).filter(B=>!(O!=null&&(B.category==null||Number(B.category)!==Number(O)))),[D,J,O]),yi=m.useMemo(()=>ts.filter(B=>{const ie=$s(B);return Z?ie:!0}),[ts,Z]),Ar=m.useMemo(()=>{if(!M)return yi;const B=M;return[...yi].sort((ie,de)=>{const ye=[Number(ie.latitude),Number(ie.longitude)],Ne=[Number(de.latitude),Number(de.longitude)];if(!$s(ie))return 1;if(!$s(de))return-1;const Jt=Td(B,ye),st=Td(B,Ne);return Jt-st})},[yi,M]),Ir=Math.max(1,Math.ceil(Mr.length/Ad)),ns=Math.min(b,Ir);m.useMemo(()=>{const B=(ns-1)*Ad;return Mr.slice(B,B+Ad)},[Mr,ns]),m.useEffect(()=>{b>Ir&&k(Ir)},[b,Ir]);const vi=P?B4:O4,Yt=Math.max(1,Math.ceil(Ar.length/vi)),An=Math.min(S,Yt),Sc=m.useMemo(()=>{const B=(An-1)*vi;return Ar.slice(B,B+vi)},[Ar,An,vi]);m.useEffect(()=>{S>Yt&&E(Yt)},[S,Yt]);const rs=localStorage.getItem("isGuest")==="true",In=!!localStorage.getItem("token")&&!rs&&localStorage.getItem("user_type")==="merchant",is=!!localStorage.getItem("token")&&!rs&&localStorage.getItem("user_type")==="shopper";m.useEffect(()=>{if(J!=="community"||In)return;const B=window.setTimeout(()=>{var ie;(ie=u.current)==null||ie.scrollIntoView({behavior:"smooth",block:"nearest"})},200);return()=>window.clearTimeout(B)},[J,V,In]),m.useEffect(()=>{if(!is){Ut({});return}let B=!1;return(async()=>{try{const ie=await Ao();if(B)return;const de={};for(const ye of ie||[])(ye.product==null||ye.product==="")&&ye.sponsored_ad!=null&&(de[ye.sponsored_ad]=ye.id);Ut(de)}catch{B||Ut({})}})(),()=>{B=!0}},[is]);const Nc=()=>{const B=new URLSearchParams(e);B.delete("filter"),B.delete("cc"),t(B,{replace:!0})},Cc=()=>{const B=new URLSearchParams(e);B.set("filter","community"),B.delete("category"),t(B,{replace:!0})};return i.jsx(ze,{children:i.jsxs("div",{className:"home-container",children:[In?i.jsxs("div",{className:"card",role:"status",style:{marginBottom:18,padding:"14px 16px",display:"flex",alignItems:"flex-start",gap:14,background:"linear-gradient(135deg, rgba(245, 192, 0, 0.15) 0%, var(--surface) 55%)",border:"1.5px solid rgba(245, 192, 0, 0.45)",borderRadius:14},children:[i.jsx("div",{className:"flex-center",style:{flexShrink:0,width:44,height:44,borderRadius:12,background:"var(--primary-light)",color:"var(--secondary)"},children:i.jsx(eo,{size:24,strokeWidth:2.25})}),i.jsxs("div",{style:{lineHeight:1.65,fontSize:"0.95rem",color:"var(--text-primary)"},children:[i.jsx("strong",{style:{display:"block",marginBottom:6,fontSize:"1rem"},children:"أنت في وضع التاجر على الصفحة الرئيسية"}),"لإدارة متجرك — مثل ",i.jsx("strong",{children:"منتجاتي"}),"، ",i.jsx("strong",{children:"الإعلانات"}),"، ",i.jsx("strong",{children:"الاشتراك"}),"، و",i.jsx("strong",{children:"إعدادات المتجر"}),"— افتح ",i.jsx("strong",{children:"القائمة الجانبية"})," من زر القائمة"," ",i.jsx("span",{style:{whiteSpace:"nowrap"},children:"(☰ أسفل الصفحة)"}),"؛ من هناك تتحكم بكل خيارات المتجر، وليس من روابط المتسوقين في هذه الصفحة."]})]}):null,In?null:i.jsxs("section",{className:"home-hero","aria-label":"ترحيب",children:[i.jsx("div",{className:"home-hero-backdrop","aria-hidden":!0}),i.jsxs("div",{className:"home-hero-inner",children:[i.jsxs("div",{className:"home-hero-copy",children:[i.jsx("h1",{className:"home-hero-title",children:"ماذا تبحث عنه اليوم؟"}),i.jsx("p",{className:"home-hero-sub",children:"تصفّح الأقسام، العروض، والمتاجر القريبة — ابحث من مربع البحث أدناه، ثم استخدم الخريطة لمطابقة المواقع."})]}),i.jsx("form",{className:"home-hero-search",onSubmit:es,children:i.jsxs("div",{className:"home-hero-search-bar",children:[i.jsx(To,{size:20,strokeWidth:1.85,className:"home-hero-search-ico","aria-hidden":!0}),i.jsx("input",{type:"search",className:"home-hero-search-input",placeholder:"ابحث عن متجر أو قسم…",value:C,onChange:B=>z(B.target.value),"aria-label":"بحث في رادار",enterKeyHint:"search"}),i.jsx(ge,{to:"/categories",className:"home-hero-filter-btn",title:"الأقسام والتصفية","aria-label":"الأقسام والتصفية",onClick:B=>B.stopPropagation(),children:i.jsx(Ol,{size:20,strokeWidth:1.85,"aria-hidden":!0})}),i.jsx("button",{type:"submit",className:"home-hero-submit-btn","aria-label":"تنفيذ البحث",children:i.jsx(To,{size:20,strokeWidth:1.85,"aria-hidden":!0})})]})})]})]}),i.jsx("div",{className:"home-top-grid",children:J==="stores"?i.jsxs("section",{className:"home-top-grid__exclusive home-exclusive","aria-label":"عروض حصرية",children:[i.jsxs("div",{className:"home-exclusive-head",children:[i.jsxs("div",{className:"home-exclusive-head-text",children:[i.jsx("h2",{className:"home-exclusive-title",children:"عروض مميزة من المتاجر"}),i.jsx("p",{className:"home-exclusive-sub",children:"إعلانات ممولة — اضغط البطاقة لفتح المتجر"})]}),i.jsxs(ge,{to:"/offers",className:"home-exclusive-more",children:["عرض المزيد",i.jsx(np,{size:18,"aria-hidden":!0})]})]}),i.jsx("div",{className:"home-exclusive-rail",role:"list",ref:f,children:je?i.jsx(i.Fragment,{children:Array.from({length:4}).map((B,ie)=>i.jsx("div",{className:"home-exclusive-skel","aria-hidden":!0},ie))}):Mr.length===0?i.jsx("div",{className:"home-exclusive-empty",children:"لا توجد عروض ممولة حالياً."}):Mr.slice(0,10).map(B=>{const ie=De(B)[0]||null;return i.jsxs(ge,{to:`/stores/${B.store}`,className:"home-exclusive-card",role:"listitem","aria-label":`${B.title} — ${B.store_name}`,children:[i.jsx("div",{className:"home-exclusive-cover",style:ie?{backgroundImage:`url(${ie})`}:void 0,"aria-hidden":!0}),i.jsx("span",{className:"home-exclusive-badge",children:"إعلان ممول"}),i.jsxs("div",{className:"home-exclusive-meta",children:[i.jsx("div",{className:"home-exclusive-ad-title",children:B.title}),i.jsx("div",{className:"home-exclusive-store",children:B.store_name})]})]},B.id)})}),Lr>1?i.jsx("div",{className:"scroll-dots","aria-label":"التنقل بين العروض",role:"tablist",children:Array.from({length:Lr}).slice(0,12).map((B,ie)=>i.jsx("button",{type:"button",className:`scroll-dot${ie===fi?" scroll-dot--active":""}`,"aria-label":`عرض ${ie+1}`,"aria-selected":ie===fi,onClick:()=>{const de=f.current;if(!de)return;const Ne=Array.from(de.querySelectorAll(".home-exclusive-card"))[ie];Ne&&de.scrollTo({left:Math.max(0,Ne.offsetLeft-12),behavior:"smooth"})}},ie))}):null]}):null}),i.jsx("div",{className:"home-mode-strip",role:"presentation",children:i.jsxs("div",{className:"home-mode-switch",role:"tablist","aria-label":"تصفح المتاجر أو الخدمات المجتمعية",children:[i.jsxs("button",{type:"button",role:"tab","aria-selected":J==="stores",title:"المتاجر والعروض التجارية",className:`home-mode-btn${J==="stores"?" home-mode-btn--on":""}`,onClick:Nc,children:[i.jsx(Pt,{size:15,strokeWidth:2.25,"aria-hidden":!0}),i.jsx("span",{children:"متاجر"})]}),i.jsxs("button",{type:"button",role:"tab","aria-selected":J==="community",title:"خدمات مجتمعية على الخريطة",className:`home-mode-btn${J==="community"?" home-mode-btn--on":""}`,onClick:Cc,children:[i.jsx(bn,{size:15,strokeWidth:2.25,"aria-hidden":!0}),i.jsx("span",{children:"مجتمعي"})]})]})}),In?null:i.jsxs("section",{className:"home-browse-block","aria-label":"تصفح حسب الفئات",children:[P?i.jsxs("div",{className:"home-browse-head",children:[i.jsx("h2",{className:"home-browse-title",children:"تصفية سريعة"}),i.jsxs("button",{type:"button",className:"home-browse-filterbtn",onClick:J==="stores"?Tr:kc,disabled:J==="stores"?ae:Be,"aria-label":J==="stores"?"تصفية المتاجر حسب القسم":"تصفية الخدمات حسب القسم",children:[i.jsx(Ol,{size:18,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{className:"home-browse-filterbtn-text",children:J==="stores"?O==null?"كل الأقسام":((as=R.find(B=>Number(B.id)===Number(O)))==null?void 0:as.name)||"القسم":V==null?"كل الخدمات":((Ht=he.find(B=>Number(B.id)===Number(V)))==null?void 0:Ht.name)||"الخدمة"})]})]}):i.jsx("h2",{className:"home-browse-title",children:J==="stores"?"تصفح حسب الفئات":"أقسام الخدمات المجتمعية"}),i.jsx("div",{className:"home-browse-scroll",ref:x,children:J==="stores"?i.jsxs(i.Fragment,{children:[i.jsxs("button",{type:"button",className:`home-browse-item home-browse-item--all${O==null?" home-browse-item--active":""}`,onClick:()=>{const B=new URLSearchParams(e);B.delete("category"),B.delete("filter"),B.delete("cc"),t(B,{replace:!0})},children:[i.jsx("span",{className:"home-browse-tile",style:{color:"var(--secondary)",...qs("var(--secondary)")},children:i.jsx(Mo,{size:22,strokeWidth:1.85,"aria-hidden":!0})}),i.jsx("span",{className:"home-browse-label",children:"الكل"})]}),ae?null:R.map(B=>{const{Icon:ie,tone:de}=tg(B.name),ye=qs(de);return i.jsxs("button",{type:"button",className:`home-browse-item${O===B.id?" home-browse-item--active":""}`,onClick:()=>{const Ne=new URLSearchParams(e);Ne.delete("filter"),Ne.delete("cc"),Ne.set("category",String(B.id)),t(Ne,{replace:!0})},children:[i.jsx("span",{className:"home-browse-tile",style:{color:de,background:ye.background,borderColor:ye.borderColor},children:i.jsx(ie,{size:22,strokeWidth:1.85,"aria-hidden":!0})}),i.jsx("span",{className:"home-browse-label",children:B.name})]},B.id)})]}):i.jsxs(i.Fragment,{children:[i.jsxs("button",{type:"button",className:`home-browse-item home-browse-item--all${V==null?" home-browse-item--active":""}`,onClick:()=>{const B=new URLSearchParams(e);B.set("filter","community"),B.delete("cc"),B.delete("category"),t(B,{replace:!0})},children:[i.jsx("span",{className:"home-browse-tile",style:{color:"var(--secondary)",...qs("var(--secondary)")},children:i.jsx(Mo,{size:22,strokeWidth:1.85,"aria-hidden":!0})}),i.jsx("span",{className:"home-browse-label",children:"الكل"})]}),Be?null:he.map(B=>{const{Icon:ie,tone:de}=tg(B.name,B.slug),ye=qs(de);return i.jsxs("button",{type:"button",className:`home-browse-item${V===B.id?" home-browse-item--active":""}`,onClick:()=>{const Ne=new URLSearchParams(e);Ne.set("filter","community"),Ne.set("cc",String(B.id)),Ne.delete("category"),t(Ne,{replace:!0})},children:[i.jsx("span",{className:"home-browse-tile",style:{color:de,background:ye.background,borderColor:ye.borderColor},children:i.jsx(ie,{size:22,strokeWidth:1.85,"aria-hidden":!0})}),i.jsx("span",{className:"home-browse-label",children:B.name})]},B.id)})]})}),wa>1?i.jsx("div",{className:"scroll-dots scroll-dots--browse","aria-label":"التنقل بين الفئات",role:"tablist",children:Array.from({length:wa}).slice(0,14).map((B,ie)=>i.jsx("button",{type:"button",className:`scroll-dot${ie===_a?" scroll-dot--active":""}`,"aria-label":`فئة ${ie+1}`,"aria-selected":ie===_a,onClick:()=>{const de=x.current;if(!de)return;const Ne=Array.from(de.querySelectorAll(".home-browse-item"))[ie];Ne&&de.scrollTo({left:Math.max(0,Ne.offsetLeft-12),behavior:"smooth"})}},ie))}):null,J==="community"?i.jsxs("div",{className:"home-community-below",ref:u,"aria-label":"نقاط الخدمة في القسم المحدد",children:[i.jsx("h3",{className:"home-community-below-title",children:V!=null?"النقاط في هذا القسم":"كل النقاط المعتمدة"}),K?i.jsx("p",{className:"home-community-below-loading",role:"status",children:"جاري تحميل النقاط…"}):mi.length===0?i.jsx("p",{className:"home-community-below-empty",children:V!=null?"لا توجد نقاط معتمدة في هذا القسم بعد.":"لا توجد نقاط خدمات مجتمعية معتمدة حالياً."}):i.jsx("ul",{className:"home-community-below-list",children:mi.map(B=>{const ie=m4(B),de=(B.detail_description||"").trim(),ye=de.length>160?`${de.slice(0,160).trimEnd()}…`:de;return i.jsxs("li",{className:"home-community-point",children:[i.jsxs("div",{className:"home-community-point-body",children:[i.jsx("span",{className:"home-community-point-cat",children:B.category_name}),i.jsx("div",{className:"home-community-point-title",children:B.title}),B.category_slug==="water"&&B.water_is_potable!=null?i.jsx("span",{className:`home-community-point-chip${B.water_is_potable?" home-community-point-chip--ok":""}`,children:B.water_is_potable?"مياه صالحة للشرب":"مياه غير صالحة للشرب"}):null,B.institution_scope?i.jsx("span",{className:"home-community-point-chip home-community-point-chip--muted",children:B.institution_scope_label||B.institution_scope}):null,ye?i.jsx("p",{className:"home-community-point-desc",children:ye}):null,B.address_text?i.jsx("p",{className:"home-community-point-address",children:B.address_text}):null]}),ie?i.jsxs("button",{type:"button",className:"home-community-point-mapbtn",onClick:()=>{const Ne=Yo(B);Ne&&n("/map",{state:{mapFocus:{lat:Ne[0],lng:Ne[1],communityPointId:B.id},mapPreset:{mode:"community",cc:B.category??null,q:B.title??""}}})},children:[i.jsx(ln,{size:16,strokeWidth:2,"aria-hidden":!0}),"على الخريطة"]}):null]},B.id)})})]}):null]}),i.jsx("div",{className:`ads-section${J==="stores"?" ads-section--panel":""}`,ref:h,children:J==="community"?i.jsx("div",{className:"home-community-ads-footnote card",children:i.jsxs("p",{className:"home-community-ads-footnote-text",children:["لتفاصيل أكثر أو اقتراح نقطة جديدة:"," ",i.jsx(ge,{to:"/services",className:"home-community-ads-footnote-link",children:"صفحة الخدمات المجتمعية"})]})}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"nearby-head flex-between",children:[i.jsx("h3",{className:"nearby-title",children:O!=null?`المتاجر القريبة — ${((xe=R.find(B=>Number(B.id)===Number(O)))==null?void 0:xe.name)||"القسم المختار"}`:"المتاجر القريبة"}),i.jsx("div",{className:"nearby-filter-option",children:i.jsxs("label",{className:"nearby-map-toggle",children:[i.jsx("input",{type:"checkbox",className:"nearby-map-toggle-input",checked:Z,onChange:B=>ne(B.target.checked)}),i.jsx("span",{className:"nearby-map-toggle-track","aria-hidden":!0}),i.jsxs("span",{className:"nearby-map-toggle-copy",children:[i.jsx("span",{className:"nearby-map-toggle-title",children:"المتاجر على الخريطة فقط"}),i.jsx("span",{className:"nearby-map-toggle-hint",children:"مفعّل: تُخفى المحلات بدون نقطة على الخريطة. معطّل: تظهر كل النتائج."})]})]})})]}),F?i.jsx("p",{className:"nearby-loading",children:"جاري تحميل المتاجر..."}):Ar.length>0?i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"nearby-rail",children:Sc.map(B=>{const ie=yc(B,R),de=M&&$s(B)?Td(M,[Number(B.latitude),Number(B.longitude)]):null,ye=Ro(B.business_hours_weekly)&&B.is_open_now===!0?"مفتوح":Ro(B.business_hours_weekly)&&B.is_open_now===!1?"مغلق":null;return i.jsxs(ge,{to:`/stores/${B.id}`,className:"nearby-card",children:[i.jsxs("div",{className:"nearby-card-main",children:[i.jsxs("div",{className:"nearby-card-text",children:[i.jsx("span",{className:"nearby-card-name",children:B.store_name}),B.category_name?i.jsx("span",{className:"nearby-card-cat",children:B.category_name}):null,i.jsx("span",{className:"nearby-card-dist",children:de!=null?i.jsxs(i.Fragment,{children:["📍 ",de.toFixed(1)," كم"]}):i.jsx(i.Fragment,{children:"بدون مسافة"})})]}),ye?i.jsx("span",{className:"nearby-card-status",children:ye}):null]}),i.jsx("div",{className:"nearby-card-thumb",children:ie.type==="image"?i.jsx("img",{className:"nearby-card-thumb-img",src:ie.url,alt:""}):i.jsx("span",{className:"nearby-card-thumb-emoji",style:{background:ie.bg},children:ie.emoji})})]},B.id)})}),Yt>1?i.jsxs("div",{className:"home-pagination",role:"navigation","aria-label":"صفحات المتاجر",children:[i.jsx("button",{type:"button",className:"home-pagination-btn",disabled:An<=1,onClick:()=>E(B=>Math.max(1,B-1)),children:"السابق"}),i.jsxs("span",{className:"home-pagination-meta",children:[An," / ",Yt]}),i.jsx("button",{type:"button",className:"home-pagination-btn",disabled:An>=Yt,onClick:()=>E(B=>Math.min(Yt,B+1)),children:"التالي"})]}):null,Yt>1?i.jsx("div",{className:"scroll-dots scroll-dots--pages","aria-label":"صفحات المتاجر",role:"tablist",children:Array.from({length:Yt}).slice(0,12).map((B,ie)=>{const de=ie+1;return i.jsx("button",{type:"button",className:`scroll-dot${de===An?" scroll-dot--active":""}`,"aria-label":`صفحة ${de}`,"aria-selected":de===An,onClick:()=>E(de)},de)})}):null]}):i.jsx("p",{className:"nearby-empty",children:"لا توجد متاجر ضمن الفلتر. جرّب «الكل» أو ألغِ «على الخريطة فقط» لرؤية متاجر بدون موقع. للبحث بالاسم استخدم مربع البحث في أعلى الصفحة (قسم الترحيب)."})]})}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        `}})]})})},mp=({title:e,message:t})=>{const n=dt();return i.jsxs("div",{className:"guest-access-prompt card flex-center",style:{flexDirection:"column",padding:"60px 40px",textAlign:"center",maxWidth:"500px",margin:"40px auto"},children:[i.jsx("div",{className:"icon-badge flex-center",style:{width:"80px",height:"80px",background:"rgba(30,190,165,0.1)",borderRadius:"50%",marginBottom:"25px",color:"var(--primary)"},children:i.jsx(B_,{size:40})}),i.jsx("h2",{style:{marginBottom:"12px",color:"var(--secondary)"},children:e||"عذراً، هذه الميزة للمشتركين فقط"}),i.jsx("p",{style:{color:"#666",marginBottom:"30px",lineHeight:"1.6"},children:t||"يجب عليك إنشاء حساب أو تسجيل الدخول لتتمكن من استخدام هذه الميزة والاستمتاع بكافة خدمات رادار."}),i.jsxs("div",{className:"flex-center",style:{gap:"15px",width:"100%"},children:[i.jsxs(Nt,{onClick:()=>n("/login"),style:{flex:1,height:"50px"},variant:"secondary",confirm:"الانتقال إلى صفحة تسجيل الدخول؟",showErrorAlert:!1,children:[i.jsx(sc,{size:18,style:{marginLeft:"8px"}})," تسجيل الدخول"]}),i.jsxs(Nt,{onClick:()=>n("/register"),style:{flex:1,height:"50px"},confirm:"الانتقال إلى صفحة إنشاء حساب؟",showErrorAlert:!1,children:[i.jsx(Z_,{size:18,style:{marginLeft:"8px"}})," إنشاء حساب"]})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
                .guest-access-prompt { border: 1px solid #eee; border-radius: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
                .icon-badge { animation: pulse 2s infinite; }
                @keyframes pulse {
                    0% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.1); opacity: 0.8; }
                    100% { transform: scale(1); opacity: 1; }
                }
            `}})]})},F4=()=>{var y,v;const[e,t]=m.useState("products"),[n,a]=m.useState(null),[o,l]=m.useState([]),[d,h]=m.useState(!0),[u,f]=m.useState(localStorage.getItem("isGuest")==="true");m.useEffect(()=>{(async()=>{try{const[w,N]=await Promise.all([Uy(),cp()]);a(w),l(N)}catch(w){console.error("Error fetching dashboard data:",w)}finally{h(!1)}})()},[]);const x=[{label:"زوار الصفحة",value:(n==null?void 0:n.visitor_count)||"0",icon:i.jsx(Al,{size:24,color:"#FFCC00"})},{label:"الأكثر إضافة للسلة",value:((v=(y=n==null?void 0:n.top_products)==null?void 0:y[0])==null?void 0:v.product__name)||"قريباً",icon:i.jsx(Nr,{size:24,color:"#FFCC00"})},{label:"الاشتراك المتبقي",value:"30 يوم",icon:i.jsx(Ji,{size:24,color:"#FFCC00"})}];return i.jsx(ze,{children:i.jsxs("div",{className:"dashboard-container",children:[u?i.jsx(mp,{title:"لوحة التحكم خاصة بالتجار فقط",message:"يجب عليك إنشاء حساب تاجر لتتمكن من إضافة المنتجات، متابعة الإحصائيات، وطلب الإعلانات الممولة لمكانك."}):i.jsxs(i.Fragment,{children:[i.jsx("h1",{children:"لوحة تحكم التاجر"}),i.jsx("div",{className:"stats-grid",children:x.map((_,w)=>i.jsxs("div",{className:"stat-card card flex-center",style:{justifyContent:"space-between"},children:[i.jsxs("div",{className:"stat-info",children:[i.jsx("p",{children:_.label}),i.jsx("h3",{children:_.value})]}),i.jsx("div",{className:"stat-icon-box",children:_.icon})]},w))}),i.jsxs("div",{className:"dashboard-content card",children:[i.jsxs("div",{className:"tabs flex-center",children:[i.jsx("button",{className:`tab-btn ${e==="products"?"active":""}`,onClick:()=>t("products"),children:"منتجاتي"}),i.jsx("button",{className:`tab-btn ${e==="ads"?"active":""}`,onClick:()=>t("ads"),children:"طلب إعلان ممول"}),i.jsx("button",{className:`tab-btn ${e==="settings"?"active":""}`,onClick:()=>t("settings"),children:"إعدادات المتجر"})]}),i.jsxs("div",{className:"tab-pane",children:[e==="products"&&i.jsxs("div",{className:"products-pane",children:[i.jsxs("button",{className:"btn-primary",style:{width:"auto",marginBottom:"20px"},children:[i.jsx(lc,{size:20})," إضافة منتج جديد"]}),i.jsx("div",{className:"products-table",children:d?i.jsx("p",{children:"جاري تحميل المنتجات..."}):o.length>0?i.jsx("div",{className:"products-grid",style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(min(200px, 100%), 1fr))",gap:"15px"},children:o.map(_=>i.jsxs("div",{className:"card product-item",style:{padding:"10px",textAlign:"center"},children:[i.jsx("h4",{children:_.name}),i.jsxs("p",{style:{color:"var(--secondary)",fontWeight:"bold"},children:[_.price," ₪"]})]},_.id))}):i.jsx("p",{children:"لا توجد منتجات حالياً. ابدأ بإضافة أول منتج لمتجرك!"})})]}),e==="ads"&&i.jsxs("div",{className:"ads-pane",children:[i.jsx("h3",{children:"اطلب إعلان ممول"}),i.jsx("p",{children:"اجعل متجرك يظهر في الواجهة الرئيسية بجانب المتاجر الكبرى."}),i.jsxs("form",{style:{marginTop:"20px"},onSubmit:_=>_.preventDefault(),children:[i.jsx("div",{className:"input-group",children:i.jsx("input",{type:"text",placeholder:"عنوان الإعلان"})}),i.jsx("div",{className:"input-group",children:i.jsx("textarea",{placeholder:"وصف الإعلان",style:{width:"100%",padding:"10px",borderRadius:"12px",border:"1px solid #eee"}})}),i.jsxs("button",{className:"btn-primary",type:"button",children:[i.jsx(Vn,{size:20})," طلب الإعلان الآن"]})]})]})]})]})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        `}})]})})},D4=()=>{const[e,t]=m.useState(null),[n,a]=m.useState(null),[o,l]=m.useState(!0),d=localStorage.getItem("user_name")||"تاجرنا";m.useEffect(()=>{(async()=>{try{const[N,C]=await Promise.all([Uy(),Zy()]);t(N),a(C)}finally{l(!1)}})()},[]);const h=m.useMemo(()=>{if(!(n!=null&&n.end_date))return null;const w=new Date(n.end_date).getTime(),N=Date.now(),C=Math.ceil((w-N)/(1e3*60*60*24));return Number.isFinite(C)?C:null},[n]),u=(e==null?void 0:e.product_insights)??[],f=(e==null?void 0:e.summary)??{},{maxCart:x,maxFav:y}=m.useMemo(()=>u.length?{maxCart:Math.max(1,...u.map(w=>w.in_carts_quantity)),maxFav:Math.max(1,...u.map(w=>w.favorites_count))}:{maxCart:1,maxFav:1},[u]),v=[{label:"زيارات متجرك اليوم",value:o?"…":(e==null?void 0:e.visitor_count)??0,hint:"عدد فتحات صفحة المتجر",icon:i.jsx(Al,{size:22,strokeWidth:2.2})},{label:"وحدات في سلال الزبائن",value:o?"…":f.total_units_in_carts??0,hint:"مجموع الكميات المضافة لسلال المشتريات",icon:i.jsx(er,{size:22,strokeWidth:2.2})},{label:"تسجيلات مفضلة على منتجاتك",value:o?"…":f.total_favorite_marks??0,hint:"عدد مرات أضيف فيها منتج للمفضلة",icon:i.jsx(jr,{size:22,strokeWidth:2.2})},{label:"منتجاتك النشطة",value:o?"…":f.active_products??0,hint:"غير مؤرشفة وظاهرة للزبائن",icon:i.jsx(Nr,{size:22,strokeWidth:2.2})}],_=h==null?null:Math.max(h,0);return i.jsx(ze,{children:i.jsxs("div",{className:"merchant-dashboard",children:[i.jsxs("header",{className:"mdash-hero card",children:[i.jsxs("div",{className:"mdash-hero-text",children:[i.jsxs("p",{className:"mdash-kicker",children:[i.jsx(bn,{size:16})," مرحباً ",d]}),i.jsx("h1",{children:"لوحة تحكم متجرك"}),i.jsxs("p",{className:"mdash-lead",children:["لمحة سريعة عن اهتمام الزبائن بمنتجاتك — ",i.jsx("strong",{children:"السلة"})," تعكس رغبة الشراء، و",i.jsx("strong",{children:"المفضلة"})," ","تعكس الاهتمام. راقب البسيط واتخذ قرارات أوضح."]})]}),i.jsxs("div",{className:"mdash-hero-stat",children:[i.jsx("div",{className:"mdash-mini-label",children:"الاشتراك"}),i.jsx("div",{className:"mdash-mini-value",children:o?"…":_==null?"—":`${_} يوم`}),i.jsx(Ji,{size:18,className:"mdash-hero-clock"})]})]}),i.jsx("section",{className:"mdash-kpis",children:v.map((w,N)=>i.jsxs("div",{className:"card mdash-kpi",children:[i.jsxs("div",{className:"mdash-kpi-top",children:[i.jsx("div",{className:"mdash-kpi-icon",children:w.icon}),i.jsx("div",{className:"mdash-kpi-label",children:w.label})]}),i.jsx("div",{className:"mdash-kpi-value",children:w.value}),i.jsx("p",{className:"mdash-kpi-hint",children:w.hint})]},N))}),i.jsxs("section",{className:"card mdash-insights",children:[i.jsxs("div",{className:"mdash-insights-head",children:[i.jsxs("div",{children:[i.jsxs("h2",{children:[i.jsx(W_,{size:22,className:"inline-icon"})," تحليلات المنتجات"]}),i.jsx("p",{className:"mdash-insights-sub",children:"ترتيب حسب إجمالي الكمية في السلال ثم المفضلة — بيانات من نشاط المتسوقين الحقيقي."})]}),i.jsx(ge,{to:"/merchant/products",className:"mdash-link-products",children:"إدارة المنتجات"})]}),o?i.jsx("p",{className:"mdash-muted",children:"جاري التحميل…"}):u.length===0?i.jsxs("div",{className:"mdash-empty",children:[i.jsx(Nr,{size:40,strokeWidth:1.5}),i.jsx("p",{children:"لا توجد منتجات نشطة بعد، أو لم يُسجَّل نشاط على السلة والمفضلة."}),i.jsx(ge,{to:"/merchant/products/new",className:"mdash-btn-outline",children:"إضافة منتج"})]}):i.jsx("div",{className:"mdash-table-wrap",children:i.jsxs("table",{className:"mdash-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"المنتج"}),i.jsx("th",{children:"في السلال (الكمية)"}),i.jsx("th",{children:"المفضلة"})]})}),i.jsx("tbody",{children:u.map(w=>i.jsxs("tr",{children:[i.jsx("td",{className:"mdash-td-name",children:w.name}),i.jsx("td",{children:i.jsxs("div",{className:"mdash-bar-cell",children:[i.jsx("div",{className:"mdash-bar-fill mdash-bar-cart",style:{width:`${Math.round(w.in_carts_quantity/x*100)}%`}}),i.jsx("span",{className:"mdash-bar-num",children:w.in_carts_quantity})]})}),i.jsx("td",{children:i.jsxs("div",{className:"mdash-bar-cell",children:[i.jsx("div",{className:"mdash-bar-fill mdash-bar-fav",style:{width:`${Math.round(w.favorites_count/y*100)}%`}}),i.jsx("span",{className:"mdash-bar-num",children:w.favorites_count})]})})]},w.id))})]})})]}),i.jsxs("section",{className:"card mdash-tip",children:[i.jsx("h3",{children:"ملاحظة سريعة"}),i.jsxs("p",{children:["من ",i.jsx("strong",{children:"القائمة الجانبية"})," تدير المنتجات، الإعلانات الممولة، والاشتراك. كلما زاد ظهور منتجاتك جودةً ووضوحاً، غالباً تتحسن أرقام السلة والمفضلة."]})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        `}})]})})},W4=()=>{const[e,t]=m.useState([]),[n,a]=m.useState(!0),o=async()=>{a(!0);try{const h=await cp();t(h)}finally{a(!1)}};m.useEffect(()=>{o()},[]);const l=async h=>{await Hy(h.id,{is_archived:!h.is_archived}),await o()},d=async h=>{confirm("متأكد بدك تحذف المنتج نهائياً؟")&&(await Hj(h.id),await o())};return i.jsx(ze,{children:i.jsxs("div",{className:"merchant-products",children:[i.jsxs("div",{className:"flex-between",style:{marginBottom:16},children:[i.jsx("h1",{style:{fontSize:"1.8rem"},children:"منتجاتي"}),i.jsxs(ge,{to:"/merchant/products/new",className:"btn-primary",style:{width:"auto",display:"inline-flex",gap:10,alignItems:"center"},children:[i.jsx(lc,{size:18}),"إضافة منتج"]})]}),i.jsxs("div",{className:"card",style:{marginBottom:14,padding:"12px 16px",background:"var(--primary-light)",borderColor:"rgba(245,192,0,0.45)",fontSize:"0.92rem",lineHeight:1.55,color:"var(--text-primary)"},children:[i.jsx("strong",{children:"مهم:"})," المنتجات ذات الحالة «مؤرشف» لا تظهر في صفحة المتجر للمتسوّقين ولا على الخريطة كقائمة منتجات. اضغط أيقونة الأرشيف بجانب المنتج لإلغاء الأرشفة وجعله «نشطاً»."]}),i.jsx("div",{className:"card",style:{padding:0,overflow:"hidden"},children:n?i.jsx("div",{style:{padding:18},children:"جاري التحميل..."}):e.length===0?i.jsx("div",{style:{padding:18},children:"لا يوجد منتجات بعد."}):i.jsxs("div",{className:"table",children:[i.jsxs("div",{className:"row head",children:[i.jsx("div",{children:"المنتج"}),i.jsx("div",{children:"السعر"}),i.jsx("div",{children:"الحالة"}),i.jsx("div",{children:"إجراءات"})]}),e.map(h=>i.jsxs("div",{className:"row product-row",children:[i.jsxs("div",{className:"cell productCell",children:[i.jsx("div",{className:"product-thumb-wrap",children:De(h).length>0?i.jsx(kt,{images:De(h),alt:h.name,height:76,borderRadius:14}):i.jsx("div",{className:"thumb thumb-empty",children:i.jsx(Ft,{size:18})})}),i.jsxs("div",{className:"product-text",children:[i.jsx("div",{className:"product-name",children:h.name}),i.jsx("div",{className:"product-desc",children:h.description||"—"})]})]}),i.jsxs("div",{className:"product-row-meta",children:[i.jsx("div",{className:"cell cell-price","data-label":"السعر",children:i.jsxs("span",{className:"price-value",children:[h.price," ₪"]})}),i.jsxs("div",{className:"cell cell-status","data-label":"الحالة",children:[i.jsx("span",{className:"badge",style:{background:h.is_archived?"#eee":"var(--primary)",color:"var(--secondary)"},children:h.is_archived?"مؤرشف":"نشط"}),h.is_archived&&i.jsx("div",{className:"archived-hint",children:"مخفي عن صفحة المتجر"})]})]}),i.jsxs("div",{className:"cell actions","data-label":"إجراءات",children:[i.jsx(ge,{to:`/merchant/products/${h.id}/edit`,className:"iconBtn",title:"تعديل",children:i.jsx(rp,{size:18})}),h.is_archived?null:i.jsx(ge,{to:"/merchant/ads",state:{prefillFromProduct:{id:h.id,name:h.name||"",description:(h.description||"").trim(),price:h.price,image:h.image||null,images:De(h)}},className:"iconBtn",title:"إعلان ممول لهذا المنتج","aria-label":"إعلان ممول لهذا المنتج",children:i.jsx(Vn,{size:18})}),i.jsx("button",{type:"button",className:"iconBtn",onClick:()=>l(h),title:h.is_archived?"إلغاء الأرشفة":"أرشفة",children:i.jsx(Qw,{size:18})}),i.jsx("button",{type:"button",className:"iconBtn danger",onClick:()=>d(h),title:"حذف",children:i.jsx(Yr,{size:18})})]})]},h.id))]})}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        `}})]})})};function h1({urls:e=[],max:t=5}){const n=(Array.isArray(e)?e:[]).filter(Boolean).slice(0,t);if(n.length===0)return null;const a=72;return i.jsxs("div",{style:{marginBottom:12},"aria-label":"معاينة الصور المحددة",children:[i.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:10,alignItems:"center"},children:n.map((o,l)=>i.jsxs("div",{style:{width:a,height:a,borderRadius:12,overflow:"hidden",border:"2px solid rgba(245, 192, 0, 0.55)",background:"var(--grey-light)",flexShrink:0,position:"relative",boxSizing:"border-box"},children:[i.jsx("img",{src:o,alt:"",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}),i.jsx("span",{style:{position:"absolute",top:4,insetInlineStart:4,minWidth:20,height:20,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:900,background:"rgba(30, 30, 46, 0.88)",color:"#fff",borderRadius:6,padding:"0 5px",lineHeight:1},children:l+1})]},`${l}-${o.slice(0,32)}`))}),i.jsxs("p",{style:{margin:"10px 0 0",fontSize:"0.82rem",fontWeight:800,color:"var(--text-secondary)"},children:[n.length," من ",t," صورة — الترتيب كما سيظهر في المتجر (الأولى غلاف)"]})]})}function ng(e){return`${e.name}-${e.size}-${e.lastModified}`}function p1(e,t,n){const a=new Set(e.map(ng)),o=[...e];let l=0;for(const d of t){if(o.length>=n){l+=1;continue}const h=ng(d);a.has(h)||(a.add(h),o.push(d))}return{merged:o,skippedForCap:l}}const U4=()=>i.jsx("span",{title:"الشيكل الجديد (₪)","aria-hidden":!0,style:{fontWeight:900,fontSize:"1.05rem",lineHeight:1,color:"var(--secondary)"},children:"₪"}),rg=3,$a=5,qa=5,ig=()=>{const{showAlert:e,showConfirm:t}=Oe(),{id:n}=xa(),a=!!n,o=dt(),[l,d]=m.useState(""),[h,u]=m.useState(""),[f,x]=m.useState(""),[y,v]=m.useState([""]),[_,w]=m.useState([]),[N,C]=m.useState([]),[z,b]=m.useState(!1),k=m.useMemo(()=>N.map(T=>URL.createObjectURL(T)),[N]);m.useEffect(()=>()=>{k.forEach(T=>URL.revokeObjectURL(T))},[k]);const S=N.length>0?k:_;m.useEffect(()=>{(async()=>{if(!a)return;const R=await Wj(n);d(R.name||""),u(R.price??""),x(R.description||"");const U=Array.isArray(R.product_features)?R.product_features.filter(Boolean):[];v(U.length?U.slice(0,qa):[""]),w(De(R)),C([])})()},[n,a]);const E=T=>{if(!(T!=null&&T.length))return;const R=Array.from(T);if(R.find(F=>F.size/(1024*1024)>rg)){e(`حجم إحدى الصور كبير. الحد الأقصى ${rg}MB لكل صورة`,"تنبيه");return}C(F=>{const{merged:oe,skippedForCap:ae}=p1(F,R,$a);return ae>0&&e(`وصلت للحد الأقصى ${$a} صور. لم تُضف ${ae} ملفاً من هذه الجولة — احذف بـ «إلغاء الصور» أو أرسل ثم عدّل لاحقاً.`,"تنبيه"),oe})},P=async T=>{T.preventDefault(),b(!0);try{const R=y.map(F=>String(F||"").trim()).filter(Boolean).slice(0,qa),U=new FormData;if(U.append("name",l),U.append("price",h),U.append("description",f),U.append("product_features",JSON.stringify(R)),a){if(N.length>0)for(const F of N)U.append("images",F);await Hy(n,U),await e("تم حفظ تعديلات المنتج.","تم")}else{for(const F of N)U.append("images",F);await Uj(U),await e("تمت إضافة المنتج بنجاح.","تم")}o("/merchant/products")}catch(R){await e(Ae(R,a?"تعذر حفظ المنتج.":"تعذر إضافة المنتج."),"فشل")}finally{b(!1)}},I=async()=>{await t("إضافة سطر تفصيل جديد؟","تأكيد")&&(v(R=>R.length>=qa?R:[...R,""]),await e("تمت إضافة السطر.","تم"))},D=async T=>{await t("حذف هذا السطر من تفاصيل المنتج؟","تأكيد")&&(v(U=>{const F=U.filter((oe,ae)=>ae!==T);return F.length?F:[""]}),await e("تم حذف السطر.","تم"))};return i.jsx(ze,{children:i.jsxs("div",{className:"merchant-product-form",children:[i.jsx("h1",{style:{marginBottom:14,fontSize:"1.8rem"},children:a?"تعديل منتج":"إضافة منتج"}),i.jsx("div",{className:"card",style:{maxWidth:720,margin:"0 auto"},children:i.jsxs("form",{onSubmit:P,children:[i.jsx(jt,{icon:i.jsx(Nr,{size:18}),placeholder:"اسم المنتج",value:l,onChange:T=>d(T.target.value),required:!0}),i.jsx(jt,{icon:i.jsx(U4,{}),placeholder:"السعر بالشيكل (₪)",value:h,onChange:T=>u(T.target.value),required:!0}),i.jsxs("div",{className:"input-group",children:[i.jsx("div",{className:"input-icon",children:i.jsx(Kx,{size:18})}),i.jsx("textarea",{placeholder:"وصف المنتج",value:f,onChange:T=>x(T.target.value),style:{width:"100%",padding:"0.85rem 1rem",borderRadius:"var(--radius-md)",border:"1.5px solid var(--border)",background:"var(--surface)",minHeight:110,resize:"vertical"}})]}),i.jsxs("div",{style:{marginTop:18,paddingTop:16,borderTop:"1px solid var(--border)"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:8,fontWeight:800},children:[i.jsx(bn,{size:18}),"تفاصيل المنتج (اختياري — حتى ",qa,")"]}),i.jsx("p",{style:{margin:"0 0 10px",fontSize:"0.88rem",color:"var(--text-secondary)",lineHeight:1.55},children:"اكتب تفاصيل قصيرة تظهر للمتسوّق (مثل: المقاس، اللون، الخامة…). كل سطر = تفصيل واحد."}),y.map((T,R)=>i.jsxs("div",{style:{display:"flex",gap:8,marginBottom:8,alignItems:"center"},children:[i.jsx("input",{type:"text",value:T,maxLength:80,placeholder:`تفصيل ${R+1}`,onChange:U=>{const F=U.target.value;v(oe=>oe.map((ae,re)=>re===R?F:ae))},style:{flex:1,padding:"0.75rem 0.9rem",borderRadius:"var(--radius-md)",border:"1.5px solid var(--border)",background:"var(--surface)"}}),y.length>1?i.jsx("button",{type:"button",onClick:()=>D(R),style:{padding:"8px 10px",borderRadius:10,border:"1px solid var(--border)",background:"var(--surface)",cursor:"pointer",fontWeight:700},children:"حذف"}):null]},R)),y.length<qa?i.jsx("button",{type:"button",onClick:I,style:{marginTop:4,padding:"8px 14px",borderRadius:10,border:"1px dashed var(--border)",background:"transparent",cursor:"pointer",fontWeight:700,color:"var(--secondary)"},children:"+ إضافة تفصيل"}):null]}),i.jsxs("div",{className:"card",style:{padding:14,marginBottom:14,background:"var(--surface)"},children:[i.jsx("div",{style:{fontWeight:900,marginBottom:6},children:"صور المنتج (معرض واحد)"}),i.jsxs("p",{style:{margin:"0 0 12px",fontSize:"0.9rem",color:"var(--text-secondary)",lineHeight:1.5},children:["يمكنك إضافة حتى ",i.jsxs("strong",{children:[$a," صور"]}),". اختر من المعرض عدة مرات — كل اختيار ",i.jsx("strong",{children:"يُضاف"})," ","للصور الحالية حتى يكتمل العدد، وليس استبدالاً لها. يمكنك اختيار عدة ملفات دفعة واحدة أيضاً (Ctrl أو ⌘)."," ",a?"عند الإرسال بصور جديدة تُستبدل صور المتجر السابقة كلها بهذه المجموعة.":null]}),S.length>0?i.jsxs("div",{style:{marginBottom:12},children:[i.jsx(h1,{urls:S,max:$a}),i.jsx(kt,{images:S,alt:"",height:152,borderRadius:14})]}):i.jsx("div",{className:"thumbLg",style:{marginBottom:12,width:"100%",maxWidth:280,height:160,borderRadius:20,marginInline:"auto"},children:i.jsx(Ft,{size:36})}),i.jsxs("label",{className:"iconBtn merchant-file-pick-label",style:{cursor:"pointer",display:"inline-flex",gap:8,position:"relative",overflow:"hidden",alignItems:"center"},children:[i.jsx(Ft,{size:18}),a?"اختر صوراً جديدة (تستبدل الحالي)":`اختر الصور (حتى ${$a})`,i.jsx("input",{type:"file",accept:"image/*,.jpg,.jpeg,.png,.webp,.heif,.heic",multiple:!0,style:{position:"absolute",inset:0,width:"100%",height:"100%",opacity:0,cursor:"pointer",fontSize:"inherit",zIndex:2},onChange:T=>{const R=T.target.files;R!=null&&R.length&&E(R),T.target.value=""}})]}),N.length>0?i.jsx("button",{type:"button",className:"iconBtn",style:{marginInlineStart:10,background:"transparent"},onClick:async()=>{await t("إلغاء الصور الجديدة المختارة للاستبدال؟","تأكيد")&&(C([]),await e("تم إلغاء اختيار الصور.","تم"))},children:"إلغاء الصور المختارة"}):null]}),i.jsx(Nt,{type:"submit",loading:z,style:{width:"100%"},confirm:!1,showErrorAlert:!1,children:a?"حفظ التعديل":"إضافة المنتج"})]})}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        `}})]})})},Mi=3,Dn=5;function Id(e){return e?De(e).length>0:!1}function ag(e){return e==null||typeof e!="string"?"":e.trim().toLowerCase().replace(/\u0640/g,"").replace(/[\u064B-\u0652\u0670]/g,"").replace(/[أإآٱ]/g,"ا").replace(/ى/g,"ي").replace(/ة/g,"ه")}function H4(e,t){const n=ag(t);return!!(!n||[e==null?void 0:e.name,e==null?void 0:e.description,...(Array.isArray(e==null?void 0:e.product_features)?e.product_features:[]).map(o=>String(o??""))].some(o=>ag(o).includes(n))||String((e==null?void 0:e.price)??"").includes(t.trim())||String((e==null?void 0:e.id)??"")===t.trim())}const Va="balipay_wallet",Rd="bank_palestine";async function og(e,t="product"){if(!e||typeof e!="string")return null;try{const n=await fetch(e,{mode:"cors",credentials:"include"});if(!n.ok)return null;const a=await n.blob();if(!a.size)return null;const o=a.type&&a.type.split("/")[1]||"jpg",l=String(t||"product").replace(/[^\w\u0600-\u06FF-]/g,"").slice(0,48)||"product";return new File([a],`${l}-ad.${o}`,{type:a.type||"image/jpeg"})}catch{return null}}const Z4=()=>{const{showAlert:e}=Oe(),t=Qt(),n=dt(),a=m.useRef(null),[o,l]=m.useState(""),[d,h]=m.useState(""),[u,f]=m.useState(""),[x,y]=m.useState(Va),[v,_]=m.useState([]),[w,N]=m.useState(null),[C,z]=m.useState(!1),[b,k]=m.useState([]),[S,E]=m.useState(""),[P,I]=m.useState("");m.useEffect(()=>{var ne;const M=(ne=t.state)==null?void 0:ne.prefillFromProduct;if(!M||M.id==null)return;E(String(M.id)),l(String(M.name||"").trim()),h(String(M.description||"").trim()),f(M.price!=null&&M.price!==""?String(M.price):""),I(""),_([]),n(t.pathname,{replace:!0,state:{}});const Y=Array.isArray(M.images)&&M.images.length>0?M.images:M.image?[M.image]:[];Y.length>0&&Promise.all(Y.slice(0,Dn).map((J,te)=>og(J,`${M.name||"ad"}-${te}`))).then(J=>{_(J.filter(Boolean))});const Z=window.setTimeout(()=>{var J;(J=a.current)==null||J.scrollIntoView({behavior:"smooth",block:"start"})},150);return()=>window.clearTimeout(Z)},[t.state,t.pathname,n]),m.useEffect(()=>{let M=!1;return(async()=>{try{const Y=await cp(),Z=Array.isArray(Y)?Y:(Y==null?void 0:Y.results)??[];M||k(Z.filter(ne=>!ne.is_archived))}catch{M||k([])}})(),()=>{M=!0}},[]);const D=m.useMemo(()=>v.map(M=>URL.createObjectURL(M)),[v]);m.useEffect(()=>()=>{D.forEach(M=>URL.revokeObjectURL(M))},[D]);const T=m.useMemo(()=>w?URL.createObjectURL(w):"",[w]),R=m.useMemo(()=>S?b.find(M=>String(M.id)===String(S))??null:null,[b,S]),U=!S||Id(R),F=!S||(R?!Id(R):!0),oe=m.useMemo(()=>{const M=P.trim();let Y=b;M&&(Y=b.filter(ne=>H4(ne,M)));const Z=S?b.find(ne=>String(ne.id)===String(S)):null;return Z&&!Y.some(ne=>ne.id===Z.id)&&(Y=[Z,...Y]),Y},[b,P,S]),ae=M=>{const Y=M.target.value;if(E(Y),!Y){_([]);return}const Z=b.find(J=>String(J.id)===Y);if(!Z)return;l(J=>J.trim()?J:Z.name||""),h(J=>J.trim()?J:String(Z.description||"").trim()),f(J=>J.trim()?J:String(Z.price??""));const ne=De(Z);ne.length>0?Promise.all(ne.slice(0,Dn).map((J,te)=>og(J,`${Z.name||"ad"}-${te}`))).then(J=>{_(J.filter(Boolean))}):_([])},re=M=>{if(!(M!=null&&M.length))return;const Y=Array.from(M);if(Y.find(ne=>ne.size/(1024*1024)>Mi)){e(`حجم إحدى الصور كبير. الحد الأقصى ${Mi}MB لكل صورة`,"تنبيه");return}_(ne=>{const{merged:J,skippedForCap:te}=p1(ne,Y,Dn);return te>0&&e(`وصلت للحد الأقصى ${Dn} صور للإعلان. لم تُضف ${te} ملفاً من هذه الجولة.`,"تنبيه"),J})},X=M=>{if(!M)return;if(M.size/(1024*1024)>Mi){e(`حجم الصورة كبير. الحد الأقصى ${Mi}MB`,"تنبيه");return}N(M)},G=async M=>{if(M.preventDefault(),F&&v.length===0){await e("اختر صوراً للإعلان، أو اربط الطلب بمنتج له صور في «منتجاتي» لنسخها تلقائياً على السيرفر.","تنبيه");return}if(U&&!d.trim()){await e("يرجى إدخال تفاصيل الإعلان.","تنبيه");return}if(!w){await e("لازم ترفع إشعار دفع الإعلان","تنبيه");return}const Y=parseFloat(String(u).replace(",","."));if(!Number.isFinite(Y)||Y<=0){await e("أدخل سعر المنتج المعروض في الإعلان (رقم أكبر من صفر)","تنبيه");return}z(!0);try{const Z=new FormData;Z.append("title",o),Z.append("description",d.trim()),S&&Z.append("product",String(S)),Z.append("product_price",String(Y)),Z.append("payment_method",x);for(const ne of v)Z.append("images",ne);Z.append("payment_receipt_image",w),await $j(Z),l(""),h(""),f(""),E(""),I(""),y(Va),_([]),N(null),await e("تم إرسال الطلب بنجاح. سيتم المراجعة خلال 24 ساعة.","تم")}catch(Z){await e(Ae(Z,"تعذر إرسال الطلب. تحقق من الاتصال والبيانات."),"فشل")}finally{z(!1)}};return i.jsx(ze,{children:i.jsxs("div",{className:"merchant-ads",children:[i.jsxs("div",{className:"flex-between",style:{marginBottom:14,flexWrap:"wrap",gap:12},children:[i.jsx("h1",{style:{fontSize:"1.8rem",margin:0},children:"طلب إعلان ممول"}),i.jsx(ge,{to:"/merchant/my-ads",className:"iconBtn",style:{textDecoration:"none"},children:"إعلاناتي الممولة"})]}),i.jsxs("div",{className:"card",style:{maxWidth:820,margin:"0 auto 18px auto"},children:[i.jsx("h3",{style:{marginBottom:10},children:"طلب إعلان ممول"}),i.jsxs("div",{className:"card",style:{padding:"14px 16px",marginBottom:16,background:"linear-gradient(135deg, #FFF9E6 0%, #fff 100%)",border:"1px solid rgba(245,192,0,0.35)",borderRadius:14,lineHeight:1.65,fontSize:"0.95rem"},children:[i.jsx("strong",{style:{color:"var(--secondary)"},children:"تنبيه مهم:"})," رسوم الإعلان الممول"," ",i.jsx("strong",{children:"5 شيكل"})," تُسدَّد عبر القناة التي تختارها أدناه، ومدة ظهور الإعلان بعد قبول الإدارة"," ",i.jsx("strong",{children:"24 ساعة"})," فقط. يمكنك إما ربط الإعلان بمنتج من صفحة «منتجاتي»، أو ترك الإعلان مستقلاً."]}),i.jsxs("div",{className:"card",style:{padding:"14px 16px",marginBottom:16,background:"linear-gradient(135deg, rgba(230, 239, 232, 0.9) 0%, #fff 100%)",border:"1px solid rgba(2, 119, 189, 0.22)",borderRadius:14,lineHeight:1.65,fontSize:"0.95rem"},children:[i.jsx("strong",{style:{color:"var(--secondary)"},children:"ملاحظة التحويل:"})," رقم التحويل الخاص بـ"," ",i.jsx("strong",{children:"رادار"})," هو ",i.jsx("strong",{dir:"ltr",children:"0592377078"})," باسم ",i.jsx("strong",{children:"اسماعيل عبدالعال"})," ","(بنك ومحفظة). سيتم الرد على طلبك خلال ",i.jsx("strong",{children:"24 ساعة"}),"."]}),i.jsxs("form",{ref:a,onSubmit:G,children:[i.jsx(jt,{icon:i.jsx(Vn,{size:18}),placeholder:"عنوان الإعلان",value:o,onChange:M=>l(M.target.value),required:!0}),i.jsxs("div",{style:{marginBottom:14},children:[i.jsx("div",{style:{fontWeight:900,marginBottom:8},children:"ربط اختياري بمنتج من «منتجاتي»"}),i.jsxs("p",{style:{margin:"0 0 8px",fontSize:"0.88rem",color:"var(--text-secondary)"},children:["اترك القائمة على «إعلان مستقل» أو اختر منتجاً (غير مؤرشف). عند الاختيار نملأ العنوان والوصف والسعر، ونحاول جلب حتى ",Dn," صور من معرض المنتج للمعاينة. منتج بلا صور: يمكنك رفع صور الإعلان وتفاصيل الإعلان اختيارية."]}),i.jsx(jt,{type:"search",autoComplete:"off",enterKeyHint:"search",icon:i.jsx(To,{size:18}),placeholder:"ابحث باسم المنتج، الوصف، السعر…",value:P,onChange:M=>I(M.target.value),onKeyDown:M=>{M.key==="Enter"&&M.preventDefault()}}),i.jsxs("select",{value:S,onChange:ae,style:{width:"100%",padding:"0.85rem 1rem",borderRadius:"var(--radius-md)",border:"1.5px solid var(--border)",background:"var(--surface)",fontSize:"0.95rem",fontFamily:"inherit",marginTop:8},children:[i.jsx("option",{value:"",children:"— إعلان مستقل (بدون منتج في الكتالوج) —"}),oe.map(M=>i.jsxs("option",{value:M.id,children:[M.name," — ",M.price," ₪"]},M.id))]}),b.length>0&&oe.length===0?i.jsxs("p",{style:{marginTop:8,fontSize:"0.85rem",color:"var(--text-secondary)"},children:["لا نتائج مطابقة لـ «",P.trim(),"». جرّب بحثاً أقصر أو امسح الحقل لعرض الكل."]}):null,b.length===0?i.jsx("p",{style:{marginTop:8,fontSize:"0.85rem",color:"var(--text-secondary)"},children:"لا توجد منتجات بعد — يمكنك هذا الطلب كإعلان مستقل، أو أضف منتجات من «منتجاتي» لاحقاً لربط إعلاناتك بها."}):null]}),i.jsx(jt,{type:"number",inputMode:"decimal",step:"0.01",min:"0.01",placeholder:"سعر المنتج المعروض في الإعلان (₪)",value:u,onChange:M=>f(M.target.value),required:!0}),i.jsxs("div",{className:"payment-method-block",style:{marginBottom:16},children:[i.jsx("div",{style:{fontWeight:900,marginBottom:8},children:"قناة دفع رسوم الإعلان"}),i.jsxs("div",{className:"payment-method-switch",role:"group","aria-label":"طريقة الدفع",style:{display:"grid",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",borderRadius:14,overflow:"hidden",border:"1.5px solid var(--border)",background:"var(--surface)"},children:[i.jsx("button",{type:"button",onClick:()=>y(Va),style:{padding:"12px 8px",border:"none",cursor:"pointer",fontWeight:800,fontFamily:"inherit",fontSize:"clamp(0.76rem, 2.8vw, 0.9rem)",lineHeight:1.25,textAlign:"center",background:x===Va?"var(--primary)":"transparent",color:x===Va?"var(--secondary)":"var(--text-secondary)"},children:"محفظة بال باي"}),i.jsx("button",{type:"button",onClick:()=>y(Rd),style:{padding:"12px 8px",border:"none",cursor:"pointer",fontWeight:800,fontFamily:"inherit",fontSize:"clamp(0.76rem, 2.8vw, 0.9rem)",lineHeight:1.25,textAlign:"center",borderInlineStart:"1.5px solid var(--border)",background:x===Rd?"var(--primary)":"transparent",color:x===Rd?"var(--secondary)":"var(--text-secondary)"},children:"بنك فلسطين"})]})]}),i.jsxs("div",{className:"input-group",children:[i.jsxs("div",{style:{fontWeight:800,marginBottom:8,color:"var(--secondary)"},children:["تفاصيل الإعلان",U?null:i.jsxs("span",{style:{fontWeight:600,color:"var(--text-secondary)",fontSize:"0.88rem"},children:[" ","(اختياري — منتج بلا صور)"]})]}),i.jsx("textarea",{placeholder:U?"تفاصيل الإعلان":"يمكنك تركه فارغاً عند ربط منتج بلا صور في الكتالوج",value:d,onChange:M=>h(M.target.value),style:{width:"100%",padding:"0.85rem 1rem",borderRadius:"var(--radius-md)",border:"1.5px solid var(--border)",background:"var(--surface)",minHeight:110,resize:"vertical"},required:U})]}),i.jsxs("div",{className:"card",style:{padding:14,marginBottom:14,background:"var(--surface)"},children:[i.jsxs("div",{style:{marginBottom:10,color:"var(--text-secondary)",fontSize:"0.88rem",lineHeight:1.55},children:["يمكن رفع حتى ",i.jsxs("strong",{children:[Dn," صور"]}),".                 كل مرة تضغط «اختر صوراً» تُضاف الصور الجديدة إلى التي اخترتها سابقاً حتى يكتمل العدد — دون استبدال ما أضفته قبلها. الصورة الأولى غلاف حيث يُعرض صورة واحدة فقط."]}),i.jsxs("div",{style:{display:"flex",gap:14,alignItems:"flex-start",justifyContent:"space-between",flexWrap:"wrap"},children:[i.jsx("div",{style:{flex:"1 1 220px",minWidth:0},children:D.length>0?i.jsxs(i.Fragment,{children:[i.jsx(h1,{urls:D,max:Dn}),i.jsx(kt,{images:D,height:140,borderRadius:16})]}):i.jsx("div",{className:"thumbLg",style:{width:"100%",maxWidth:280,height:120},children:i.jsx(Ft,{size:28})})}),i.jsxs("div",{style:{flex:"1 1 200px"},children:[i.jsxs("div",{style:{fontWeight:900},children:["صور الإعلان",F?i.jsxs("span",{style:{fontWeight:600,color:"var(--text-secondary)",fontSize:"0.85rem"},children:[" ","(مطلوب)"]}):i.jsxs("span",{style:{fontWeight:600,color:"var(--text-secondary)",fontSize:"0.85rem"},children:[" ","(اختياري — تُنسخ من معرض المنتج تلقائياً إن لم ترفع صوراً هنا)"]})]}),i.jsxs("div",{style:{color:"var(--text-secondary)",fontSize:"0.9rem",marginTop:6},children:["حتى ",Dn," صور — PNG/JPG حتى ",Mi,"MB لكل صورة",Id(R)&&v.length===0?i.jsxs("span",{children:[" ","— يُفضَّل رفع صوراً؛ وإلا تُنسخ من معرض المنتج عند الإرسال."]}):null]}),i.jsxs("label",{className:"iconBtn merchant-file-pick-label",style:{cursor:"pointer",marginTop:12,display:"inline-flex",alignItems:"center",position:"relative",overflow:"hidden"},children:[F?`اختر صوراً (حتى ${Dn})`:"تغيير صور الإعلان (اختياري)",i.jsx("input",{type:"file",accept:"image/*,.jpg,.jpeg,.png,.webp,.heif,.heic",multiple:!0,style:{position:"absolute",inset:0,width:"100%",height:"100%",opacity:0,cursor:"pointer",fontSize:"inherit",zIndex:2},onChange:M=>{const Y=M.target.files;Y!=null&&Y.length&&re(Y),M.target.value=""}})]})]})]})]}),i.jsx("div",{className:"card",style:{padding:14,marginBottom:14,background:"var(--surface)"},children:i.jsxs("div",{style:{display:"flex",gap:14,alignItems:"center",justifyContent:"space-between",flexWrap:"wrap"},children:[i.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[i.jsx("div",{className:"thumbLg",children:T?i.jsx("img",{src:T,alt:"receipt"}):i.jsx(Ft,{size:22})}),i.jsxs("div",{children:[i.jsx("div",{style:{fontWeight:900},children:"إشعار الدفع"}),i.jsxs("div",{style:{color:"var(--text-secondary)",fontSize:"0.9rem"},children:["PNG/JPG حتى ",Mi,"MB"]})]})]}),i.jsxs("label",{className:"iconBtn merchant-file-pick-label",style:{cursor:"pointer",display:"inline-flex",gap:8,alignItems:"center",position:"relative",overflow:"hidden"},children:[i.jsx(my,{size:18}),"رفع إشعار الدفع",i.jsx("input",{type:"file",accept:"image/*,.jpg,.jpeg,.png,.webp",style:{position:"absolute",inset:0,width:"100%",height:"100%",opacity:0,cursor:"pointer",fontSize:"inherit",zIndex:2},onChange:M=>{var Z;const Y=(Z=M.target.files)==null?void 0:Z[0];Y&&X(Y),M.target.value=""}})]})]})}),i.jsx(Nt,{type:"submit",loading:C,style:{width:"100%"},confirm:!1,showErrorAlert:!1,children:"إرسال الطلب"})]})]}),i.jsxs("p",{style:{textAlign:"center",marginTop:18,color:"var(--text-secondary)"},children:["لمراجعة كل إعلاناتك (المنتهية والنشطة وغيرها) افتح"," ",i.jsx(ge,{to:"/merchant/my-ads",style:{fontWeight:800,color:"var(--secondary)"},children:"إعلاناتي الممولة"}),"."]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        `}})]})})};function nh(e){if(!e)return"—";try{const t=new Date(e);return Number.isNaN(t.getTime())?String(e):t.toLocaleString("ar",{dateStyle:"medium",timeStyle:"short"})}catch{return String(e)}}function $4(e){if(e.status==="pending")return{label:"بانتظار موافقة الإدارة",className:"mb-pill mb-pill-pending"};if(e.status==="rejected")return{label:"مرفوض",className:"mb-pill mb-pill-rejected"};if(e.status==="expired")return{label:"منتهي الصلاحية",className:"mb-pill mb-pill-expired"};if(e.status==="active"&&e.approved_at){const t=new Date(e.approved_at),n=new Date(t.getTime()+24*60*60*1e3);return Date.now()<=n.getTime()?{label:`يعرض للمتسوّقين حتى ${nh(n.toISOString())}`,className:"mb-pill mb-pill-active"}:{label:"نافذة العرض منتهية (يُحدَّث السجل تلقائياً)",className:"mb-pill mb-pill-warn"}}return{label:e.status,className:"mb-pill"}}function q4(){const{showAlert:e,showConfirm:t,showPrompt:n}=Oe(),[a,o]=m.useState([]),[l,d]=m.useState(!0),h=m.useCallback(async()=>{d(!0);try{const x=await Zj();o(Array.isArray(x)?x:[])}catch(x){console.error(x),o([]),await e("تعذر تحميل إعلاناتك.","خطأ")}finally{d(!1)}},[e]);m.useEffect(()=>{h()},[h]);const u=async x=>{if(await t("حذف هذا الطلب؟ (مسموح فقط أثناء انتظار الموافقة)","تأكيد"))try{await Vj(x.id),await e("تم الحذف.","تم"),await h()}catch(v){console.error(v),await e("تعذر الحذف. قد لا يكون الطلب قيد الانتظار.","خطأ")}},f=async x=>{const y=await n("عدّل عنوان الإعلان","العنوان","تعديل الطلب",x.title||"");if(y==null)return;const v=await n("عدّل وصف الإعلان","الوصف","تعديل الطلب",x.description||"");if(v!=null)try{await qj(x.id,{title:y,description:v}),await e("تم التعديل.","تم"),await h()}catch(_){console.error(_),await e("تعذر التعديل.","خطأ")}};return i.jsx(ze,{children:i.jsxs("div",{className:"merchant-my-ads",children:[i.jsxs("div",{className:"flex-between",style:{marginBottom:14,flexWrap:"wrap",gap:12},children:[i.jsxs("div",{children:[i.jsx("h1",{style:{fontSize:"1.8rem",margin:"0 0 6px"},children:"إعلاناتي الممولة"}),i.jsx("p",{style:{margin:0,color:"var(--text-secondary)",lineHeight:1.65,maxWidth:640},children:"كل الطلبات التي أرسلتها: قيد المراجعة، المرفوضة، النشطة، أو المنتهية بعد 24 ساعة من الموافقة. التفاصيل كاملة لكل إعلان بما فيها المنتج المربوط (إن وُجد) وإشعار الدفع."})]}),i.jsx(ge,{to:"/merchant/ads",className:"btn-request-ad",children:"طلب إعلان ممول جديد"})]}),l?i.jsx("p",{children:"جاري التحميل…"}):a.length===0?i.jsxs("div",{className:"card",style:{padding:24,textAlign:"center"},children:[i.jsx("p",{style:{margin:0,color:"var(--text-secondary)"},children:"لا توجد إعلانات بعد."}),i.jsx(ge,{to:"/merchant/ads",style:{display:"inline-block",marginTop:14,fontWeight:800},children:"إرسال طلب إعلان ممول"})]}):i.jsx("div",{className:"my-ads-stack",children:a.map(x=>{var w;const y=$4(x),v=De(x),_=x.status==="pending";return i.jsx("article",{className:"card my-ad-card",children:i.jsxs("div",{className:"my-ad-top",children:[i.jsx("div",{className:"my-ad-media",children:v.length>0?i.jsx(kt,{images:v,height:152,borderRadius:16}):i.jsx("div",{className:"my-ad-media-empty",children:i.jsx(Ft,{size:32})})}),i.jsxs("div",{className:"my-ad-main",children:[i.jsxs("div",{className:"my-ad-title-row",children:[i.jsx("h2",{className:"my-ad-title",children:x.title}),i.jsx("span",{className:y.className,children:y.label})]}),i.jsxs("div",{className:"my-ad-meta",children:[i.jsxs("span",{children:[i.jsx("strong",{children:"سعر العرض في الإعلان:"})," ",Number(x.product_price)>0?`${Number(x.product_price).toFixed(2)} ₪`:"—"]}),i.jsxs("span",{children:[i.jsx("strong",{children:"قناة الدفع:"})," ",x.payment_method_label||"—"]}),i.jsxs("span",{children:[i.jsx("strong",{children:"أُنشئ:"})," ",nh(x.created_at)]}),x.approved_at?i.jsxs("span",{children:[i.jsx("strong",{children:"وافقت الإدارة:"})," ",nh(x.approved_at)]}):null]}),i.jsxs("div",{className:"my-ad-product-block",children:[i.jsx("strong",{children:"المنتج في الكتالوج:"})," ",x.product_details?i.jsxs(i.Fragment,{children:[i.jsx(ge,{to:`/merchant/products/${x.product}/edit`,children:x.product_details.name}),i.jsxs("span",{className:"muted",children:[" ","— سعر الكتالوج: ",Number(x.product_details.price).toFixed(2)," ₪"]})]}):x.product?i.jsxs("span",{children:["مرتبط بمنتج #",x.product]}):i.jsx("span",{className:"muted",children:"إعلان مستقل (غير مربوط بمنتج في «منتجاتي»)"})]}),i.jsxs("div",{className:"my-ad-desc",children:[i.jsx("strong",{children:"تفاصيل الإعلان"}),i.jsx("p",{children:(w=x.description)!=null&&w.trim()?x.description:i.jsx("span",{className:"muted",children:"لا يوجد وصف"})})]}),x.payment_receipt_image?i.jsxs("div",{className:"my-ad-receipt",children:[i.jsx("strong",{children:"إشعار الدفع"}),i.jsx("a",{href:x.payment_receipt_image,target:"_blank",rel:"noreferrer",children:i.jsx("img",{src:x.payment_receipt_image,alt:"إشعار الدفع",className:"receipt-thumb"})})]}):null,_?i.jsxs("div",{className:"my-ad-actions",children:[i.jsxs("button",{type:"button",className:"iconBtn",onClick:()=>f(x),title:"تعديل سريع",children:[i.jsx(rp,{size:18}),"تعديل"]}),i.jsxs("button",{type:"button",className:"iconBtn danger",onClick:()=>u(x),title:"حذف",children:[i.jsx(Yr,{size:18}),"حذف"]})]}):null]})]})},x.id)})}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        `}})]})})}const Od=3,V4=()=>{const{showAlert:e}=Oe(),[t,n]=m.useState(null),[a,o]=m.useState([]),[l,d]=m.useState(!0),[h,u]=m.useState(""),[f,x]=m.useState(null),[y,v]=m.useState(!1),[_,w]=m.useState("balipay_wallet"),N=E=>{const P=String(E||"").toLowerCase();return P==="approved"?"مقبول":P==="pending"?"قيد المراجعة":P==="rejected"?"مرفوض":E||"—"},C=m.useMemo(()=>f?URL.createObjectURL(f):"",[f]),z=m.useMemo(()=>{if(!(t!=null&&t.end_date))return null;const E=new Date(t.end_date).getTime(),P=Date.now(),I=Math.ceil((E-P)/(1e3*60*60*24));return Number.isFinite(I)?I:null},[t]),b=async()=>{d(!0);try{const[E,P]=await Promise.all([Zy(),Gj()]);n(E),o(P)}finally{d(!1)}};m.useEffect(()=>{b()},[]);const k=E=>{if(!E)return;if(E.size/(1024*1024)>Od){e(`حجم الصورة كبير. الحد الأقصى ${Od}MB`,"تنبيه");return}x(E)},S=async E=>{if(E.preventDefault(),!f){await e("لازم ترفع إشعار الدفع (صورة)","تنبيه");return}v(!0);try{const P=new FormData;P.append("receipt_image",f),h&&P.append("notes",h),_&&P.append("payment_method",_),await Kj(P),u(""),x(null),w("balipay_wallet"),await b(),await e("تم إرسال طلب التجديد بنجاح. سيتم المراجعة خلال 24 ساعة.","تم")}catch(P){await e(Ae(P,"تعذر إرسال طلب التجديد."),"فشل")}finally{v(!1)}};return i.jsx(ze,{children:i.jsxs("div",{className:"merchant-subscription",children:[i.jsx("h1",{style:{marginBottom:14,fontSize:"1.8rem"},children:"الاشتراك"}),i.jsx("div",{className:"card",style:{marginBottom:16},children:i.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,flexWrap:"wrap"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[i.jsx("div",{style:{background:"#FFF9E6",padding:10,borderRadius:14,display:"flex"},children:i.jsx(Ji,{size:22,color:"#FFCC00"})}),i.jsxs("div",{children:[i.jsx("div",{style:{fontWeight:900},children:"المدة المتبقية"}),i.jsx("div",{style:{color:"var(--text-secondary)"},children:l?"...":z==null?"—":`${Math.max(z,0)} يوم`})]})]}),i.jsx("span",{className:"badge",children:t!=null&&t.is_active?"نشط":"غير نشط"})]})}),i.jsxs("div",{className:"card",style:{padding:"14px 16px",marginBottom:16,background:"linear-gradient(135deg, #FFF9E6 0%, #fff 100%)",border:"1px solid rgba(245,192,0,0.35)",borderRadius:14,lineHeight:1.65,fontSize:"0.95rem"},children:[i.jsx("strong",{style:{color:"var(--secondary)"},children:"ملاحظة:"})," رسوم تجديد الاشتراك ",i.jsx("strong",{children:"10 شيكل"}),". رقم التحويل الخاص بـ ",i.jsx("strong",{children:"رادار"})," هو ",i.jsx("strong",{dir:"ltr",children:"0592377078"})," باسم"," ",i.jsx("strong",{children:"اسماعيل عبدالعال"})," (بنك ومحفظة). سيتم الرد على طلبك خلال ",i.jsx("strong",{children:"24 ساعة"}),"."]}),i.jsxs("div",{className:"card",style:{marginBottom:16},children:[i.jsx("h3",{style:{marginBottom:10},children:"طلب تجديد (رفع إشعار دفع)"}),i.jsxs("form",{onSubmit:S,children:[i.jsxs("div",{className:"card",style:{padding:12,marginBottom:14,background:"var(--surface)"},children:[i.jsx("div",{style:{fontWeight:900,marginBottom:8},children:"طريقة التحويل"}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",borderRadius:14,overflow:"hidden",border:"1.5px solid var(--border)",background:"var(--white)"},role:"group","aria-label":"طريقة التحويل",children:[i.jsx("button",{type:"button",onClick:()=>w("balipay_wallet"),style:{padding:"12px 8px",border:"none",cursor:"pointer",fontWeight:800,fontFamily:"inherit",background:_==="balipay_wallet"?"var(--primary)":"transparent",color:_==="balipay_wallet"?"var(--secondary)":"var(--text-secondary)"},children:"محفظة بال باي"}),i.jsx("button",{type:"button",onClick:()=>w("bank_palestine"),style:{padding:"12px 8px",border:"none",cursor:"pointer",fontWeight:800,fontFamily:"inherit",borderInlineStart:"1.5px solid var(--border)",background:_==="bank_palestine"?"var(--primary)":"transparent",color:_==="bank_palestine"?"var(--secondary)":"var(--text-secondary)"},children:"بنك فلسطين"})]}),i.jsx("div",{className:"muted small",style:{marginTop:8,lineHeight:1.5},children:"اختر القناة التي ستحوّل عليها."})]}),i.jsx("div",{className:"input-group",children:i.jsx("textarea",{placeholder:"ملاحظات (اختياري)",value:h,onChange:E=>u(E.target.value),style:{width:"100%",padding:"0.85rem 1rem",borderRadius:"var(--radius-md)",border:"1.5px solid var(--border)",background:"var(--surface)",minHeight:90,resize:"vertical"}})}),i.jsx("div",{className:"card",style:{padding:14,marginBottom:14,background:"var(--surface)"},children:i.jsxs("div",{style:{display:"flex",gap:14,alignItems:"center",justifyContent:"space-between",flexWrap:"wrap"},children:[i.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[i.jsx("div",{className:"thumbLg",children:C?i.jsx("img",{src:C,alt:"receipt"}):i.jsx(Ft,{size:22})}),i.jsxs("div",{children:[i.jsx("div",{style:{fontWeight:900},children:"إشعار الدفع"}),i.jsxs("div",{style:{color:"var(--text-secondary)",fontSize:"0.9rem"},children:["PNG/JPG حتى ",Od,"MB"]})]})]}),i.jsxs("label",{className:"iconBtn",style:{cursor:"pointer"},children:[i.jsx(my,{size:18}),"رفع صورة",i.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},onChange:E=>{var P;return k((P=E.target.files)==null?void 0:P[0])}})]})]})}),i.jsx(Nt,{type:"submit",loading:y,style:{width:"100%"},confirm:!1,showErrorAlert:!1,children:"إرسال طلب التجديد"})]})]}),i.jsxs("div",{className:"card",style:{padding:0,overflow:"hidden"},children:[i.jsx("div",{style:{padding:16,fontWeight:900,background:"var(--surface)",borderBottom:"1px solid var(--border)"},children:"طلبات التجديد"}),l?i.jsx("div",{style:{padding:16},children:"جاري التحميل..."}):a.length===0?i.jsx("div",{style:{padding:16},children:"لا يوجد طلبات بعد."}):a.map(E=>i.jsxs("div",{style:{padding:14,borderTop:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,flexWrap:"wrap"},children:[i.jsxs("div",{children:[i.jsxs("div",{style:{fontWeight:900},children:["طلب #",E.id]}),i.jsx("div",{style:{color:"var(--text-secondary)"},children:E.notes||"—"})]}),i.jsx("span",{className:"badge",children:N(E.status)})]},E.id))]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        `}})]})})},G4=[31.5,34.4];function K4({onPick:e}){return s1({click(t){e([t.latlng.lat,t.latlng.lng])}}),null}function Q4({point:e}){const t=Mn(),n=m.useRef("");return m.useEffect(()=>{if(!e||e.length!==2)return;const a=Number(e[0]),o=Number(e[1]);if(!Number.isFinite(a)||!Number.isFinite(o))return;const l=`${a.toFixed(7)},${o.toFixed(7)}`;l!==n.current&&(n.current=l,t.flyTo([a,o],18,{duration:.55}))},[t,e]),null}const Y4=({value:e,onChange:t})=>{const[n,a]=m.useState(!1),{showAlert:o}=Oe(),l=m.useMemo(()=>(e==null?void 0:e.length)===2?e:G4,[e]),d=async()=>{if(!navigator.geolocation)throw await o("المتصفح لا يدعم تحديد الموقع.","تنبيه"),new Error("no-geolocation");a(!0);try{const h=await Vo({maxWaitMs:22e3,goodEnoughM:110});if(t([h.latitude,h.longitude]),h.accuracy!=null&&h.accuracy>1200){const u=Math.round(h.accuracy);await o(`تم أخذ الموقع بعد عدة قراءات. الدقة لا تزال تقريبية (~${u} م). على الكمبيوتر غالباً لا يوجد GPS؛ للدقة استخدم الهاتف أو انقر موقع المتجر يدوياً على الخريطة.`,"تنبيه")}else await o("تم ضبط موقع المتجر من موقعك الحالي.","تم")}catch{throw await o("لم نتمكن من تحديد موقعك. تأكد من صلاحيات الموقع والموقع الدقيق في إعدادات النظام.","خطأ"),new Error("geo-failed")}finally{a(!1)}};return i.jsxs("div",{className:"card",style:{padding:0,overflow:"hidden"},children:[i.jsxs("div",{style:{padding:12,display:"flex",justifyContent:"space-between",alignItems:"center",gap:12,flexWrap:"wrap"},children:[i.jsx("div",{style:{fontWeight:900},children:"حدد موقع المتجر"}),i.jsx(Nt,{variant:"secondary",onClick:d,loading:n,style:{width:"auto"},confirm:"استخدام موقع جهازك الحالي (GPS) لتحديد المتجر؟",showErrorAlert:!1,children:"موقعي الحالي"})]}),i.jsxs(si,{center:l,zoom:14,minZoom:10,maxZoom:19,scrollWheelZoom:!0,style:{height:"clamp(260px, 50dvh, 380px)",width:"100%"},children:[i.jsx(li,{}),i.jsx(ci,{}),i.jsx(Q4,{point:e}),i.jsx(K4,{onPick:t}),(e==null?void 0:e.length)===2&&i.jsx(Gn,{position:e,children:i.jsx(Kn,{children:"موقع المتجر"})})]}),i.jsx("div",{style:{padding:12,color:"var(--text-secondary)",fontSize:"0.9rem",lineHeight:1.5},children:"اضغط على الخريطة لتحديد الموقع، أو استخدم «موقعي الحالي» (يجب السماح بالموقع الدقيق). إن خزّن المتصفح موقعاً قديماً أو كانت الدقة ضعيفة قد تختلف النقطة — جرّب مرة أخرى بعد تفعيل الـ GPS أو صحّح بالنقر على الخريطة. يُحفظ الموقع عند الضغط على حفظ في أعلى النموذج."})]})},J4=["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],m1=()=>Array.from({length:7},()=>({start:"",end:""}));function X4(e){const t=m1();if(!e||typeof e!="object")return t;for(let n=0;n<7;n++){const a=e[String(n)]??e[n];Array.isArray(a)&&a.length>0&&a[0]&&typeof a[0]=="object"&&(t[n].start=String(a[0].start||"").slice(0,5),t[n].end=String(a[0].end||"").slice(0,5))}return t}function eS(e){const t={};for(let n=0;n<7;n++){const a=(e[n].start||"").trim(),o=(e[n].end||"").trim();a&&o?t[String(n)]=[{start:a,end:o}]:t[String(n)]=[]}return t}const tS=()=>{const e=dt(),{showAlert:t,showConfirm:n}=Oe(),[a,o]=m.useState(!0),[l,d]=m.useState(!1),[h,u]=m.useState(""),[f,x]=m.useState(null),[y,v]=m.useState(""),[_,w]=m.useState(""),[N,C]=m.useState(""),[z,b]=m.useState(""),[k,S]=m.useState(""),[E,P]=m.useState(null),[I,D]=m.useState(null),[T,R]=m.useState(null),[U,F]=m.useState(""),[oe,ae]=m.useState([""]),[re,X]=m.useState(""),[G,M]=m.useState(m1),[Y,Z]=m.useState("Asia/Gaza");m.useEffect(()=>{(async()=>{var V,le,fe,Me,je;u(""),o(!0);try{const _e=await qy();x(_e.id!=null?_e.id:null),v(_e.store_name||""),w(_e.description||""),C(_e.latitude??""),b(_e.longitude??""),S(_e.location_address||""),R(_e.logo||null),D(null),F(_e.contact_whatsapp||"");const Ue=Array.isArray(_e.store_features)?_e.store_features.filter(Boolean):[];ae(Ue.length?Ue:[""]),X(_e.business_hours_note||""),M(X4(_e.business_hours_weekly)),Z((_e.store_timezone||"Asia/Gaza").trim()||"Asia/Gaza"),Number.isFinite(Number(_e.latitude))&&Number.isFinite(Number(_e.longitude))&&P([Number(_e.latitude),Number(_e.longitude)])}catch(_e){const Ue=(V=_e==null?void 0:_e.response)==null?void 0:V.status,Ut=((fe=(le=_e==null?void 0:_e.response)==null?void 0:le.data)==null?void 0:fe.detail)||((je=(Me=_e==null?void 0:_e.response)==null?void 0:Me.data)==null?void 0:je.error);u(Ue===401?"الجلسة انتهت أو التوكن غير موجود. اعمل تسجيل خروج ثم تسجيل دخول كتاجر.":Ue===403?"هذا الحساب ليس تاجر (أو لا يملك صلاحية). تأكد من نوع الحساب merchant.":`تعذر تحميل بيانات المتجر. ${Ut?`(${Ut})`:""}`.trim())}finally{o(!1)}})()},[]);const ne=(H,V)=>{const le=oe.map(fe=>String(fe||"").trim()).filter(Boolean).slice(0,10);return{store_name:y,description:_,location_address:k||"",latitude:H,longitude:V,contact_whatsapp:U.trim(),store_features:le,business_hours_note:re.trim(),business_hours_weekly:eS(G),store_timezone:Y.trim()||"Asia/Gaza"}},J=async H=>{H.preventDefault(),d(!0);try{const V=(E==null?void 0:E[0])??(N===""?null:Number(N)),le=(E==null?void 0:E[1])??(z===""?null:Number(z)),fe=ne(V,le);let Me;if(I){const Ue=new FormData;Ue.append("store_name",fe.store_name),Ue.append("description",fe.description||""),Ue.append("location_address",fe.location_address),Ue.append("contact_whatsapp",fe.contact_whatsapp),Ue.append("business_hours_note",fe.business_hours_note),Ue.append("store_timezone",fe.store_timezone),Ue.append("store_features",JSON.stringify(fe.store_features)),Ue.append("business_hours_weekly",JSON.stringify(fe.business_hours_weekly)),V!=null&&V!==""&&Ue.append("latitude",String(V)),le!=null&&le!==""&&Ue.append("longitude",String(le)),Ue.append("logo",I),Me=Ue}else Me=fe;const je=await _k(Me);(je==null?void 0:je.id)!=null&&x(je.id),je!=null&&je.logo&&R(je.logo),D(null),await t("تم حفظ المعلومات بنجاح","تم");const _e=(je==null?void 0:je.id)??f;_e!=null&&e(`/stores/${_e}`)}catch(V){await t(Ae(V,"تعذر حفظ البيانات. حاول مرة أخرى."),"فشل")}finally{d(!1)}},te=async()=>{await n("إضافة حقل ميزة جديد؟","تأكيد")&&(ae(V=>V.length>=10?V:[...V,""]),await t("تمت إضافة حقل جديد.","تم"))},O=async H=>{await n("حذف هذا السطر من مميزات المتجر؟","تأكيد")&&(ae(le=>{const fe=le.filter((Me,je)=>je!==H);return fe.length?fe:[""]}),await t("تم حذف السطر.","تم"))};return i.jsx(ze,{children:i.jsxs("div",{className:"merchant-settings",style:{maxWidth:1240,marginInline:"auto",paddingInline:"clamp(8px, 2.2vw, 22px)",paddingBottom:32,boxSizing:"border-box"},children:[i.jsx("h1",{style:{marginBottom:14,fontSize:"1.8rem"},children:"إعدادات المتجر"}),i.jsx("div",{className:"card",children:a?i.jsx("div",{children:"جاري التحميل..."}):h?i.jsxs("div",{children:[i.jsx("p",{style:{color:"#c0392b",fontWeight:800,marginBottom:12},children:h}),i.jsx(Nt,{onClick:()=>window.location.reload(),style:{width:"100%"},confirm:"إعادة تحميل الصفحة الآن؟",showErrorAlert:!1,children:"إعادة المحاولة"})]}):i.jsxs("form",{onSubmit:J,children:[i.jsx(jt,{icon:i.jsx(Pt,{size:18}),placeholder:"اسم المتجر",value:y,onChange:H=>v(H.target.value),required:!0}),i.jsxs("div",{className:"input-group",children:[i.jsx("div",{className:"input-icon",children:i.jsx(Kx,{size:18})}),i.jsx("textarea",{placeholder:"وصف المتجر",value:_,onChange:H=>w(H.target.value),style:{width:"100%",padding:"0.85rem 1rem",borderRadius:"var(--radius-md)",border:"1.5px solid var(--border)",background:"var(--surface)",minHeight:110,resize:"vertical"}})]}),i.jsxs("div",{style:{marginTop:18,paddingTop:16,borderTop:"1px solid var(--border)"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:8,fontWeight:800},children:[i.jsx(Rl,{size:18}),"التواصل مع المتجر (واتساب)"]}),i.jsx("p",{style:{margin:"0 0 10px",fontSize:"0.88rem",color:"var(--text-secondary)",lineHeight:1.55},children:"يمكنك إدخال الرقم بصيغة محلية (مثال: 0599123456) أو دولية بدون + (970599123456). يظهر زر «تواصل معنا» للمتسوّقين بعد الحفظ هنا فقط."}),i.jsx(jt,{icon:i.jsx(Rl,{size:18}),placeholder:"رقم واتساب للاستفسارات",value:U,onChange:H=>F(H.target.value),type:"tel",autoComplete:"tel"})]}),i.jsxs("div",{style:{marginTop:18,paddingTop:16,borderTop:"1px solid var(--border)"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:8,fontWeight:800},children:[i.jsx(bn,{size:18}),"مميزات المتجر (حتى 10)"]}),i.jsx("p",{style:{margin:"0 0 10px",fontSize:"0.88rem",color:"var(--text-secondary)",lineHeight:1.55},children:"تظهر كوسوم صغيرة في البروفايل وقائمة المحال القريبة — للعرض فقط وليس للفلترة."}),oe.map((H,V)=>i.jsxs("div",{style:{display:"flex",gap:8,marginBottom:8,alignItems:"center"},children:[i.jsx("input",{type:"text",value:H,maxLength:80,placeholder:`ميزة ${V+1}`,onChange:le=>{const fe=le.target.value;ae(Me=>Me.map((je,_e)=>_e===V?fe:je))},style:{flex:1,padding:"0.75rem 0.9rem",borderRadius:"var(--radius-md)",border:"1.5px solid var(--border)",background:"var(--surface)"}}),oe.length>1?i.jsx("button",{type:"button",onClick:()=>O(V),style:{padding:"8px 10px",borderRadius:10,border:"1px solid var(--border)",background:"var(--surface)",cursor:"pointer",fontWeight:700},children:"حذف"}):null]},V)),oe.length<10?i.jsx("button",{type:"button",onClick:te,style:{marginTop:4,padding:"8px 14px",borderRadius:10,border:"1px dashed var(--border)",background:"transparent",cursor:"pointer",fontWeight:700,color:"var(--secondary)"},children:"+ إضافة ميزة"}):null]}),i.jsxs("div",{style:{marginTop:18,paddingTop:16,borderTop:"1px solid var(--border)"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:8,fontWeight:800},children:[i.jsx(Ji,{size:18}),"مواعيد العمل"]}),i.jsx("p",{style:{margin:"0 0 10px",fontSize:"0.88rem",color:"var(--text-secondary)",lineHeight:1.55},children:"النص أدناه يظهر للمتسوّقين كما هو. الجدول يُستخدم لحساب «مفتوح / مغلق» حسب المنطقة الزمنية."}),i.jsxs("div",{className:"input-group",style:{marginBottom:12},children:[i.jsx("div",{className:"input-icon",children:i.jsx(Ji,{size:18})}),i.jsx("textarea",{placeholder:"مواعيد العمل (نص للمتسوّقين)، مثال: السبت–الخميس 9–5، الجمعة إجازة",value:re,onChange:H=>X(H.target.value),style:{width:"100%",padding:"0.85rem 1rem",borderRadius:"var(--radius-md)",border:"1.5px solid var(--border)",background:"var(--surface)",minHeight:88,resize:"vertical"}})]}),i.jsx(jt,{icon:i.jsx(Ji,{size:18}),placeholder:"المنطقة الزمنية (مثال: Asia/Gaza)",value:Y,onChange:H=>Z(H.target.value)}),i.jsx("p",{style:{margin:"10px 0 12px",fontSize:"0.82rem",color:"var(--text-secondary)"},children:"الأيام من الأحد (0) إلى السبت (6). اترك الفترة فارغة ليوم إجازة. فترة واحدة يومياً في هذا النموذج."}),i.jsx("div",{style:{display:"grid",gap:8,fontSize:"0.9rem"},children:J4.map((H,V)=>i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"minmax(72px, 1fr) 1fr 1fr",gap:8,alignItems:"center"},children:[i.jsx("span",{style:{fontWeight:700},children:H}),i.jsx("input",{type:"time",value:G[V].start,onChange:le=>{const fe=le.target.value;M(Me=>{const je=[...Me];return je[V]={...je[V],start:fe},je})},style:{padding:"8px 10px",borderRadius:10,border:"1.5px solid var(--border)",background:"var(--surface)"}}),i.jsx("input",{type:"time",value:G[V].end,onChange:le=>{const fe=le.target.value;M(Me=>{const je=[...Me];return je[V]={...je[V],end:fe},je})},style:{padding:"8px 10px",borderRadius:10,border:"1.5px solid var(--border)",background:"var(--surface)"}})]},H))})]}),i.jsxs("div",{className:"input-group",children:[i.jsx("div",{className:"input-icon",children:i.jsx(ln,{size:18})}),i.jsx("textarea",{placeholder:"عنوان / موقع المتجر نصاً (يظهر للمتسوّقين في البروفايل، منفصل عن الخريطة)",value:k,onChange:H=>S(H.target.value),style:{width:"100%",padding:"0.85rem 1rem",borderRadius:"var(--radius-md)",border:"1.5px solid var(--border)",background:"var(--surface)",minHeight:88,resize:"vertical"}})]}),i.jsxs("div",{style:{marginTop:6},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:8,fontWeight:700},children:[i.jsx(Ft,{size:18}),"صورة المتجر (اختياري)"]}),i.jsx("p",{style:{margin:"0 0 10px",fontSize:"0.88rem",color:"var(--text-secondary)",lineHeight:1.5},children:"تظهر على الخريطة كرمز للمتجر. إن لم ترفع صورة، يُستخدم رمز حسب نوع القسم أو صورة القسم إن وُجدت."}),T?i.jsx("img",{src:T,alt:"",style:{width:120,height:120,objectFit:"cover",borderRadius:16,marginBottom:10,border:"1.5px solid var(--border)"}}):null,i.jsx("input",{type:"file",accept:"image/*",style:{width:"100%",fontSize:"0.9rem"},onChange:H=>{var le;const V=(le=H.target.files)==null?void 0:le[0];V&&(R(fe=>(fe&&String(fe).startsWith("blob:")&&URL.revokeObjectURL(fe),URL.createObjectURL(V))),D(V))}})]}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12},children:[i.jsx(jt,{icon:i.jsx(ln,{size:18}),placeholder:"Latitude",value:N,onChange:H=>C(H.target.value)}),i.jsx(jt,{icon:i.jsx(ln,{size:18}),placeholder:"Longitude",value:z,onChange:H=>b(H.target.value)})]}),i.jsx("div",{style:{marginTop:14},children:i.jsx(Y4,{value:E,onChange:H=>{P(H),C(String(H[0])),b(String(H[1]))}})}),i.jsx("div",{style:{marginTop:14},children:i.jsx(Nt,{type:"submit",loading:l,style:{width:"100%"},confirm:!1,showErrorAlert:!1,children:"حفظ"})})]})})]})})},nS=()=>{const[e,t]=m.useState(!0),[n,a]=m.useState(null);m.useEffect(()=>{(async()=>{try{const h=await qy();a(h)}finally{t(!1)}})()},[]);const o=(n==null?void 0:n.products)||[],l=(n==null?void 0:n.sponsored_ads)||[];return i.jsx(ze,{children:i.jsxs("div",{className:"merchant-profile",children:[i.jsx("h1",{style:{marginBottom:14,fontSize:"1.8rem"},children:"بروفايل المتجر"}),i.jsx("div",{className:"card",style:{marginBottom:16},children:e?i.jsx("div",{children:"جاري التحميل..."}):i.jsxs("div",{style:{display:"flex",gap:16,alignItems:"flex-start",flexWrap:"wrap"},children:[i.jsx("div",{className:"logoBox",children:n!=null&&n.logo?i.jsx("img",{src:n.logo,alt:"logo"}):i.jsx(Ft,{size:22})}),i.jsxs("div",{style:{flex:1,minWidth:240},children:[i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:12,flexWrap:"wrap"},children:[i.jsx("div",{style:{fontWeight:900,fontSize:"1.25rem"},children:n==null?void 0:n.store_name}),n?i.jsxs(ge,{to:"/merchant/settings",className:"btn-primary",style:{display:"inline-flex",alignItems:"center",gap:8,padding:"9px 14px",borderRadius:12,textDecoration:"none",fontWeight:800,fontSize:"0.88rem",whiteSpace:"nowrap"},children:[i.jsx(rp,{size:17,strokeWidth:2.1,"aria-hidden":!0}),"تعديل معلومات المتجر"]}):null]}),i.jsx("div",{style:{color:"var(--text-secondary)",marginTop:6},children:(n==null?void 0:n.description)||"—"}),i.jsxs("div",{style:{marginTop:10,display:"flex",gap:10,flexWrap:"wrap",alignItems:"center"},children:[i.jsx("span",{className:"badge",children:(n==null?void 0:n.category_name)||"بدون قسم"}),Array.isArray(n==null?void 0:n.store_features)&&n.store_features.filter(Boolean).length>0?n.store_features.filter(Boolean).slice(0,10).map((d,h)=>i.jsx("span",{className:"badge",style:{background:"rgba(255, 204, 0, 0.16)"},children:d},`${h}-${d}`)):null]})]})]})}),i.jsxs("div",{className:"card",style:{padding:0,overflow:"hidden",marginBottom:16},children:[i.jsxs("div",{style:{padding:16,fontWeight:900,background:"var(--surface)",borderBottom:"1px solid var(--border)",display:"flex",gap:10,alignItems:"center"},children:[i.jsx(Vn,{size:18}),"الإعلانات الممولة"]}),e?i.jsx("div",{style:{padding:16},children:"..."}):l.length===0?i.jsx("div",{style:{padding:16},children:"لا يوجد إعلانات."}):l.map(d=>i.jsxs("div",{style:{padding:16,borderTop:"1px solid var(--border)",display:"flex",gap:12,alignItems:"center",justifyContent:"space-between",flexWrap:"wrap"},children:[i.jsxs("div",{style:{display:"flex",gap:12,alignItems:"flex-start"},children:[i.jsx("div",{style:{width:88,flexShrink:0},children:De(d).length>0?i.jsx(kt,{images:De(d),height:56,borderRadius:14}):i.jsx("div",{className:"thumbSm",children:i.jsx(Ft,{size:18})})}),i.jsxs("div",{children:[i.jsx("div",{style:{fontWeight:900},children:d.title}),i.jsx("div",{style:{color:"var(--text-secondary)"},children:d.description})]})]}),i.jsx("span",{className:"badge",children:d.status})]},d.id))]}),i.jsxs("div",{className:"card",style:{padding:0,overflow:"hidden"},children:[i.jsxs("div",{style:{padding:16,fontWeight:900,background:"var(--surface)",borderBottom:"1px solid var(--border)",display:"flex",gap:10,alignItems:"center"},children:[i.jsx(Nr,{size:18}),"منتجات المتجر"]}),e?i.jsx("div",{style:{padding:16},children:"..."}):o.length===0?i.jsx("div",{style:{padding:16},children:"لا يوجد منتجات."}):i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(min(220px, 100%), 1fr))",gap:12,padding:16},children:o.map(d=>i.jsxs("div",{className:"card",style:{padding:14},children:[i.jsx("div",{style:{borderRadius:16,overflow:"hidden",marginBottom:8},children:De(d).length>0?i.jsx(kt,{images:De(d),height:120,borderRadius:0}):i.jsx("div",{className:"thumbSm",style:{width:"100%",height:140,borderRadius:16},children:i.jsx(Ft,{size:18})})}),i.jsx("div",{style:{marginTop:10,fontWeight:900},children:d.name}),i.jsx("div",{style:{color:"var(--text-secondary)"},children:d.description||"—"}),i.jsxs("div",{style:{marginTop:8,fontWeight:900,color:"var(--secondary)"},children:[d.price," ₪"]})]},d.id))})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        `}})]})})},rS=()=>{const[e,t]=m.useState([]),[n,a]=m.useState(!0);return m.useEffect(()=>{(async()=>{try{const l=await hi();t(Array.isArray(l)?l:[])}catch(l){console.error("Error fetching categories:",l)}finally{a(!1)}})()},[]),i.jsx(ze,{children:i.jsxs("div",{className:"categories-page",children:[i.jsxs("header",{className:"categories-hero",children:[i.jsx("div",{className:"categories-hero-icon","aria-hidden":!0,children:i.jsx(Mo,{size:28,strokeWidth:2})}),i.jsx("h1",{className:"categories-hero-title",children:"أقسام رادار"}),i.jsx("p",{className:"categories-hero-sub",children:"اختر قسماً للانتقال إلى المتاجر القريبة في هذا النوع."})]}),n?i.jsx("div",{className:"categories-loading card",children:"جاري تحميل الأقسام…"}):e.length>0?i.jsx("div",{className:"categories-grid",children:e.map(o=>{const l=p4(o.name);return i.jsxs(ge,{to:`/?category=${o.id}`,className:"categories-card",children:[o.image?i.jsx("span",{className:"categories-card-photo-wrap",children:i.jsx("img",{className:"categories-card-photo",src:o.image,alt:"",loading:"lazy"})}):i.jsx("span",{className:"categories-card-emoji",style:{background:l.bg},children:l.emoji}),i.jsxs("div",{className:"categories-card-body",children:[i.jsx("h2",{className:"categories-card-name",children:o.name}),i.jsx("p",{className:"categories-card-desc",children:o.description||"عرض المحلات القريبة في هذا القسم"}),i.jsxs("span",{className:"categories-card-cta",children:["استكشف",i.jsx(np,{size:16,"aria-hidden":!0})]})]})]},o.id)})}):i.jsx("p",{className:"categories-empty",children:"لا توجد أقسام مسجلة حالياً."}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        `}})]})})},iS={medical:"🏥",education:"📚",food:"🍲",water:"💧",institution:"🤝"},aS={medical:"#c62828",education:"#4527a0",food:"#e65100",water:"#0277bd",institution:"#5d4037"};function f1(e){return iS[e]||"✨"}function g1(e){return aS[e]||"#1ebea5"}const oS=()=>{const[e,t]=m.useState([]),[n,a]=m.useState([]),[o,l]=m.useState(!0),d=localStorage.getItem("isGuest")==="true",h=!!localStorage.getItem("token")&&!d,u=localStorage.getItem("user_type")||"shopper",f=h&&(u==="shopper"||u==="merchant");m.useEffect(()=>{let y=!1;return(async()=>{try{const[v,_]=await Promise.all([va(),mc()]);y||(t(Array.isArray(v)?v:[]),a(Array.isArray(_)?_:[]))}catch(v){console.error(v),y||(t([]),a([]))}finally{y||l(!1)}})(),()=>{y=!0}},[]);const x=m.useMemo(()=>{const y=new Map;for(const v of e)y.set(v.id,0);for(const v of n){const _=v.category;y.has(_)||y.set(_,0),y.set(_,y.get(_)+1)}return y},[e,n]);return i.jsx(ze,{children:i.jsxs("div",{className:"services-page",children:[i.jsxs("header",{className:"services-hero",children:[i.jsx("div",{className:"services-hero-icon","aria-hidden":!0,children:i.jsx(bn,{size:26,strokeWidth:2})}),i.jsx("h1",{className:"services-hero-title",children:"الخدمات المجتمعية"}),i.jsx("p",{className:"services-hero-sub",children:"نقاط طبية وتعليمية وتوزيع طعام ومياه ومؤسسات مجتمعية — تظهر على الخريطة بعد موافقة الإدارة."}),f?i.jsxs(ge,{to:"/services/suggest",className:"services-cta",children:[i.jsx(dy,{size:20,"aria-hidden":!0}),"اقترح نقطة خدمة"]}):i.jsx("p",{className:"services-guest-note",children:"لتقديم اقتراح: سجّل الدخول كمتسوّق أو كتاجر (وليس زائراً)."})]}),o?i.jsx("div",{className:"services-loading card",children:"جاري تحميل الأقسام…"}):e.length===0?i.jsx("p",{className:"services-empty",children:"لا توجد أقسام مفعّلة حالياً."}):i.jsx("div",{className:"services-grid",role:"list",children:e.map(y=>{const v=g1(y.slug),_=f1(y.slug),w=x.get(y.id)??0;return i.jsxs(ge,{to:`/services/category/${encodeURIComponent(y.slug)}`,className:"services-grid-card card",role:"listitem",style:{"--svc-tone":v},children:[i.jsx("div",{className:"services-grid-card-visual","aria-hidden":!0,children:i.jsx("span",{className:"services-grid-card-emoji",children:_})}),i.jsxs("div",{className:"services-grid-card-body",children:[i.jsx("h2",{className:"services-grid-card-title",children:y.name}),y.description_hint?i.jsx("p",{className:"services-grid-card-hint",children:y.description_hint}):null,i.jsx("span",{className:"services-grid-card-count",children:w===0?"لا توجد نقاط بعد":`${w} ${w===1?"نقطة":"نقاط"} معتمدة`})]})]},y.id)})}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        `}})]})})},sS=()=>{const{categorySlug:e}=xa(),t=dt(),[n,a]=m.useState([]),[o,l]=m.useState([]),[d,h]=m.useState(!0);m.useEffect(()=>{let _=!1;return(async()=>{try{const[w,N]=await Promise.all([va(),mc()]);_||(a(Array.isArray(w)?w:[]),l(Array.isArray(N)?N:[]))}catch(w){console.error(w),_||(a([]),l([]))}finally{_||h(!1)}})(),()=>{_=!0}},[]);const u=m.useMemo(()=>n.find(_=>String(_.slug)===String(e)),[n,e]),f=m.useMemo(()=>u?o.filter(_=>Number(_.category)===Number(u.id)):[],[u,o]);m.useEffect(()=>{d||!n.length||(!e||!u)&&t("/services",{replace:!0})},[d,n.length,e,u,t]);const x=u?g1(u.slug):"#1ebea5",y=u?f1(u.slug):"✨",v=_=>{const w=Number(_==null?void 0:_.latitude),N=Number(_==null?void 0:_.longitude);return Number.isFinite(w)&&Number.isFinite(N)};return i.jsx(ze,{children:i.jsxs("div",{className:"services-page services-category-page",children:[i.jsxs("nav",{className:"services-breadcrumb",children:[i.jsx(ge,{to:"/services",className:"services-breadcrumb-link",children:"الخدمات المجتمعية"}),i.jsx("span",{className:"services-breadcrumb-sep","aria-hidden":!0,children:"/"}),i.jsx("span",{className:"services-breadcrumb-current",children:(u==null?void 0:u.name)||"…"})]}),i.jsxs("header",{className:"services-category-hero card",style:{"--cat-tone":x},children:[i.jsx("div",{className:"services-category-hero-visual","aria-hidden":!0,children:i.jsx("span",{className:"services-category-hero-emoji",children:y})}),i.jsx("h1",{className:"services-category-hero-title",children:(u==null?void 0:u.name)||"القسم"}),u!=null&&u.description_hint?i.jsx("p",{className:"services-category-hero-hint",children:u.description_hint}):null]}),d?i.jsx("div",{className:"services-loading card",children:"جاري تحميل النقاط…"}):f.length===0?i.jsx("p",{className:"services-empty card",children:"لا توجد نقاط معتمدة في هذا القسم بعد."}):i.jsx("ul",{className:"services-points",children:f.map(_=>i.jsxs("li",{className:"services-point",children:[i.jsx("div",{className:"services-point-title",children:_.title}),_.category_slug==="water"&&_.water_is_potable!=null?i.jsx("div",{className:"services-point-badge",children:_.water_is_potable?"مياه صالحة للشرب":"مياه غير صالحة للشرب"}):null,_.institution_scope?i.jsxs("div",{className:"services-point-meta",children:["النطاق: ",_.institution_scope_label||_.institution_scope]}):null,i.jsx("p",{className:"services-point-desc",children:_.detail_description}),i.jsx("p",{className:"services-point-address",children:_.address_text}),i.jsx("div",{className:"services-point-actions",children:i.jsxs("button",{type:"button",className:"services-point-mapbtn",disabled:!v(_),onClick:()=>{v(_)&&t("/map",{state:{mapFocus:{lat:_.latitude,lng:_.longitude,communityPointId:_.id},mapPreset:{mode:"community",cc:(u==null?void 0:u.id)??null}}})},title:v(_)?"عرض على الخريطة":"لا يوجد إحداثيات لهذا العنصر",children:[i.jsx(ln,{size:16,"aria-hidden":!0}),"عرض على الخريطة"]})})]},_.id))}),i.jsxs("p",{className:"services-category-back-wrap",children:[i.jsxs("button",{type:"button",className:"services-category-back",onClick:()=>t(-1),children:[i.jsx(Bx,{size:18,"aria-hidden":!0}),"رجوع"]}),i.jsxs(ge,{to:"/services",className:"services-category-back-alt",children:[i.jsx(bn,{size:16,"aria-hidden":!0}),"كل الأقسام"]})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        `}})]})})},lS=[31.5,34.4],cS=()=>{const e=dt(),{showAlert:t}=Oe(),a=(localStorage.getItem("user_type")||"shopper")==="admin",[o,l]=m.useState([]),[d,h]=m.useState(!0),[u,f]=m.useState(""),[x,y]=m.useState(""),[v,_]=m.useState(""),[w,N]=m.useState(""),[C,z]=m.useState(null),[b,k]=m.useState(""),[S,E]=m.useState(""),[P,I]=m.useState(!1),[D,T]=m.useState(!1),[R,U]=m.useState(!1);m.useEffect(()=>{let G=!1;return(async()=>{try{const M=await va();G||l(Array.isArray(M)?M:[])}catch{G||l([])}finally{G||h(!1)}})(),()=>{G=!0}},[]);const F=m.useMemo(()=>o.find(G=>String(G.id)===String(u)),[o,u]),oe=(F==null?void 0:F.slug)||"",ae=async G=>{if(G.preventDefault(),!u){await t("اختر القسم.","تنبيه");return}if(!x.trim()||!v.trim()||!w.trim()){await t("عنوان الخدمة والوصف التفصيلي والعنوان النصي مطلوبة.","تنبيه");return}if(!C||C.length!==2){await t("انقر على الخريطة لتحديد موقع النقطة.","تنبيه");return}const M={category:Number(u),title:x.trim(),detail_description:v.trim(),latitude:C[0],longitude:C[1],address_text:w.trim()};if(oe==="water"){if(b!=="true"&&b!=="false"){await t("حدد هل المياه صالحة للشرب.","تنبيه");return}M.water_is_potable=b==="true"}else M.water_is_potable=null;if(oe==="institution"){if(!["local","international","charity"].includes(S)){await t("اختر نطاق المؤسسة (محلية / عالمية / خيرية).","تنبيه");return}M.institution_scope=S}else M.institution_scope="";I(!0);try{a?(await Wy(M),await t("تمت إضافة النقطة مباشرة (كمدير).","تم")):(await Rj(M),await t("تم إرسال الطلب. سيظهر على الخريطة بعد موافقة الإدارة.","تم")),e("/services")}catch(Y){await t(Ae(Y,"تعذر إرسال الطلب."),"فشل")}finally{I(!1)}},re=C||lS,X=async()=>{if(!navigator.geolocation){await t("المتصفح لا يدعم تحديد الموقع.","تنبيه");return}T(!0);try{const G=await Vo({maxWaitMs:22e3,goodEnoughM:110});z([G.latitude,G.longitude]);const M=G.accuracy;M!=null&&M>1200?await t(`تم وضع الدبوس على موقعك. الدقة تقريبية (~${Math.round(M)} م). على الكمبيوتر غالباً لا يوجد GPS؛ للدقة استخدم الهاتف أو انقر الموقع يدوياً على الخريطة.`,"موقع تقريبي"):await t("تم ضبط الدبوس على موقعك الحالي.","تم")}catch{await t("لم نتمكن من تحديد موقعك. تأكد من السماح بالوصول للموقع في المتصفح أو حاول لاحقاً.","الموقع")}finally{T(!1)}};return i.jsx(ze,{children:i.jsxs("div",{className:"services-page",style:{maxWidth:1240,marginInline:"auto",paddingInline:"clamp(8px, 2.2vw, 22px)",paddingBottom:32,boxSizing:"border-box"},children:[i.jsx("p",{style:{marginBottom:16},children:i.jsx(ge,{to:"/services",style:{fontWeight:700,color:"var(--secondary)"},children:"← الخدمات المجتمعية"})}),i.jsx("h1",{children:"اقتراح نقطة خدمة مجتمعية"}),i.jsxs("p",{style:{lineHeight:1.65,color:"#555"},children:["املأ التفاصيل وحدد الموقع على الخريطة.",a?" سيتم إضافة النقطة مباشرة.":" الطلب يُراجع من الإدارة قبل الظهور للجميع."]}),d?i.jsx("p",{children:"جاري تحميل الأقسام…"}):i.jsxs("form",{onSubmit:ae,className:"card",style:{padding:"clamp(16px, 4vw, 22px)",marginTop:20},children:[i.jsx("label",{style:{display:"block",fontWeight:800,marginBottom:8},children:"القسم"}),i.jsxs("select",{value:u,onChange:G=>{f(G.target.value),k(""),E("")},style:{width:"100%",padding:10,borderRadius:10,marginBottom:16},required:!0,children:[i.jsx("option",{value:"",children:"— اختر —"}),o.map(G=>i.jsx("option",{value:G.id,children:G.name},G.id))]}),F!=null&&F.description_hint?i.jsx("p",{style:{fontSize:"0.88rem",color:"#666",marginTop:-8,marginBottom:16},children:F.description_hint}):null,oe==="water"?i.jsxs("div",{style:{marginBottom:16},children:[i.jsx("div",{style:{fontWeight:800,marginBottom:8},children:"المياه"}),i.jsxs("label",{style:{display:"flex",gap:8,alignItems:"center",marginBottom:6},children:[i.jsx("input",{type:"radio",name:"wp",checked:b==="true",onChange:()=>k("true")}),"صالحة للشرب"]}),i.jsxs("label",{style:{display:"flex",gap:8,alignItems:"center"},children:[i.jsx("input",{type:"radio",name:"wp",checked:b==="false",onChange:()=>k("false")}),"غير صالحة للشرب"]})]}):null,oe==="institution"?i.jsxs("div",{style:{marginBottom:16},children:[i.jsx("label",{style:{display:"block",fontWeight:800,marginBottom:8},children:"نطاق المؤسسة"}),i.jsxs("select",{value:S,onChange:G=>E(G.target.value),style:{width:"100%",padding:10,borderRadius:10},required:oe==="institution",children:[i.jsx("option",{value:"",children:"— اختر —"}),i.jsx("option",{value:"local",children:"محلية"}),i.jsx("option",{value:"international",children:"عالمية"}),i.jsx("option",{value:"charity",children:"خيرية"})]})]}):null,i.jsx("label",{style:{display:"block",fontWeight:800,marginBottom:8},children:"عنوان / اسم النقطة"}),i.jsx("input",{value:x,onChange:G=>y(G.target.value),style:{width:"100%",padding:10,borderRadius:10,marginBottom:16},maxLength:220,required:!0}),i.jsx("label",{style:{display:"block",fontWeight:800,marginBottom:8},children:"وصف تفصيلي للخدمة"}),i.jsx("textarea",{value:v,onChange:G=>_(G.target.value),rows:5,style:{width:"100%",padding:10,borderRadius:10,marginBottom:16,resize:"vertical"},required:!0}),i.jsx("label",{style:{display:"block",fontWeight:800,marginBottom:8},children:"الموقع النصي التفصيلي"}),i.jsx("textarea",{value:w,onChange:G=>N(G.target.value),rows:3,style:{width:"100%",padding:10,borderRadius:10,marginBottom:16,resize:"vertical"},required:!0}),i.jsx("div",{style:{fontWeight:800,marginBottom:8},children:"الموقع على الخريطة"}),i.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:10,alignItems:"center",marginBottom:10},children:[i.jsx(Nt,{type:"button",variant:"secondary",loading:D,onClick:X,style:{width:"auto"},confirm:!1,showErrorAlert:!1,children:"موقعي الحالي"}),i.jsxs("span",{style:{fontSize:"0.88rem",color:"#666"},children:["أو انقر على الخريطة لوضع الدبوس يدوياً.",C?` الإحداثيات: ${C[0].toFixed(5)}, ${C[1].toFixed(5)}`:""]})]}),i.jsx("div",{className:"card",style:{padding:0,overflow:"hidden",marginBottom:20},children:i.jsx("button",{type:"button",onClick:()=>U(!0),"aria-label":"تكبير الخريطة لتحديد الموقع",title:"اضغط لتكبير الخريطة",style:{width:"100%",padding:0,border:"none",background:"transparent",cursor:"zoom-in",display:"block",textAlign:"inherit"},children:i.jsxs(si,{center:re,zoom:14,minZoom:10,maxZoom:19,scrollWheelZoom:!0,style:{height:"clamp(260px, 48dvh, 360px)",width:"100%"},children:[i.jsx(li,{}),i.jsx(ci,{}),i.jsx(Io,{position:C}),i.jsx(ua,{onPick:(G,M)=>z([G,M])}),C?i.jsx(Gn,{position:C,children:i.jsx(Kn,{children:"موقع النقطة المقترحة"})}):null]})})}),R?i.jsx("div",{role:"dialog","aria-modal":"true","aria-label":"خريطة تحديد الموقع",onClick:()=>U(!1),style:{position:"fixed",inset:0,zIndex:6e3,background:"rgba(14, 16, 20, 0.62)",backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)",display:"flex",alignItems:"center",justifyContent:"center",padding:14},children:i.jsxs("div",{className:"card",onClick:G=>G.stopPropagation(),style:{position:"relative",width:"min(520px, 96vw)",height:"min(86dvh, calc(100dvh - 48px))",padding:0,overflow:"hidden",borderRadius:26},children:[i.jsx("button",{type:"button",onClick:()=>{if(!C||C.length!==2){t("انقر على الخريطة لتحديد الموقع أولاً.","تنبيه");return}U(!1)},"aria-label":"تأكيد الموقع",title:"تأكيد الموقع",style:{position:"absolute",top:10,insetInlineStart:10,zIndex:2500,pointerEvents:"auto",height:44,padding:"0 14px",borderRadius:999,border:"1px solid rgba(245, 192, 0, 0.55)",background:"linear-gradient(145deg, var(--primary) 0%, var(--primary-hover) 100%)",boxShadow:"var(--shadow-gold)",color:"var(--secondary)",cursor:"pointer",display:"inline-flex",alignItems:"center",justifyContent:"center",fontWeight:950,fontSize:"0.92rem"},children:"تأكيد الموقع"}),i.jsx("button",{type:"button",onClick:()=>U(!1),"aria-label":"إغلاق",title:"إغلاق",style:{position:"absolute",top:10,left:"50%",transform:"translateX(-50%)",zIndex:2500,pointerEvents:"auto",width:44,height:44,borderRadius:999,border:"1px solid rgba(245, 192, 0, 0.55)",background:"linear-gradient(145deg, var(--primary) 0%, var(--primary-hover) 100%)",boxShadow:"var(--shadow-gold)",color:"var(--secondary)",cursor:"pointer",display:"inline-flex",alignItems:"center",justifyContent:"center",fontWeight:900},children:"×"}),i.jsxs(si,{center:re,zoom:15,minZoom:10,maxZoom:19,scrollWheelZoom:!0,style:{height:"100%",width:"100%"},children:[i.jsx(li,{}),i.jsx(ci,{}),i.jsx(Io,{position:C}),i.jsx(ua,{onPick:(G,M)=>z([G,M])}),C?i.jsx(Gn,{position:C,children:i.jsx(Kn,{children:"موقع النقطة المقترحة"})}):null]})]})}):null,i.jsx(Nt,{type:"submit",loading:P,style:{width:"100%"},confirm:!1,showErrorAlert:!1,children:a?"إضافة النقطة":"إرسال الطلب للمراجعة"})]})]})})},dS=e=>typeof window>"u"||!e?"":`${window.location.origin}/share/cart/${e}`,sg=e=>{const t=String(e||"").trim();return t?["Cart link:",`‭${t}‬`,t]:[]},uS=()=>{const[e,t]=m.useState([]),[n,a]=m.useState(!0),[o,l]=m.useState(null),[d,h]=m.useState(null),[u,f]=m.useState(localStorage.getItem("isGuest")==="true"),{showAlert:x,showPrompt:y,showConfirm:v}=Oe(),_=async()=>{try{const S=await Xi();t(S)}catch(S){console.error("Error fetching carts:",S)}finally{a(!1)}};m.useEffect(()=>{(async()=>{if(await _(),!!vc())try{const{notices:S}=await Ky(),E=Array.isArray(S)?S:[];for(const P of E){const I=typeof P=="string"?P:P==null?void 0:P.text;I&&await x(I,"تنبيه")}}catch{}})()},[]);const w=async()=>{const S=await y("أدخل اسم السلة الجديدة (مثل: أغراض المنزل):","اسم السلة...");if(S)try{await gc(S),_()}catch(E){x(Ae(E,"تعذر إنشاء السلة."),"خطأ")}},N=S=>{var E;if(S.effective_unit_price!=null&&S.effective_unit_price!==""){const P=Number(S.effective_unit_price);if(Number.isFinite(P))return P}return Number(((E=S.product_details)==null?void 0:E.price)??0)},C=S=>{const E=S.catalog_unit_price;if(E==null||E==="")return null;const P=Number(E);return Number.isFinite(P)?P:null},z=S=>N(S)*Number(S.quantity??0),b=async S=>{let E=S.share_token!=null&&S.share_token!==""?String(S.share_token):"";if(!E)try{const X=await Vy(S.id);E=(X==null?void 0:X.share_token)!=null&&X.share_token!==""?String(X.share_token):""}catch{E=""}if(!E){x("تعذر الحصول على رابط المشاركة. تحقق من الاتصال بالخادم ثم حدّث الصفحة.","مشاركة السلة");return}const P=dS(E),I=S.name||"سلة المشتريات",D=S.items||[],T=D.reduce((X,G)=>X+z(G),0),R=D.map((X,G)=>{const M=X.product_details||{},Y=X.line_title||M.name||"منتج",Z=N(X),ne=C(X),J=Number(X.quantity??0),te=z(X);let O=`${G+1}) ${Y}
   ${J} × ${Z.toFixed(2)} ₪ = ${te.toFixed(2)} ₪`;X.is_promotional_line&&ne!=null&&Math.abs(Z-ne)>1e-9?O+=`
   (سعر عرض ممول؛ السعر المعتاد في المتجر ${ne.toFixed(2)} ₪)`:X.is_promotional_line&&X.is_standalone_ad_line&&(O+=`
   (عرض ممول مستقل — بسعر الإعلان)`);const H=(X.note||"").trim();return H&&(O+=`
   📌 ملاحظة: ${H}`),O}),U=(S.notes||"").trim(),F=X=>X?[`رادار — ${I}`,`الإجمالي: ${T} ₪`,"التفاصيل الكاملة في الرابط أدناه.","","────────","رابط عرض السلة على موقع رادار:",...sg(P),"","تم إنشاء القائمة من تطبيق رادار."].join(`
`):[`رادار — ${I}`,...U?[`ملاحظة على السلة: ${U}`,"──────────────────"]:[],...R,"──────────────────",`الإجمالي: ${T} ₪`,"","────────","رابط عرض السلة على موقع رادار (اضغط للصفحة والصور):",...sg(P),"","تم إنشاء القائمة من تطبيق رادار."].join(`
`);let oe=F(!1),ae=`https://wa.me/?text=${encodeURIComponent(oe)}`;ae.length>6e3&&(oe=F(!0),ae=`https://wa.me/?text=${encodeURIComponent(oe)}`),window.open(ae,"_blank","noopener,noreferrer")||x("تعذر فتح واتساب. اسمح بالنوافذ المنبثقة ثم أعد المحاولة.","مشاركة السلة")},k=async S=>{if(await v(`حذف السلة «${S.name}» وجميع محتوياتها نهائياً؟ لا يمكن التراجع.`,"تأكيد حذف السلة"))try{await jk(S.id),await _()}catch(P){x(Ae(P,"تعذر حذف السلة."),"خطأ")}};return i.jsx(ze,{children:i.jsxs("div",{className:"carts-page",children:[u?i.jsx(mp,{title:"سلال المشتريات متوفرة للأعضاء فقط",message:"قم بإنشاء حساب مجاني لتتمكن من إنشاء سلال مشتريات متعددة ومشاركتها مع عائلتك وأصدقائك عبر الواتساب."}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"carts-head flex-between",children:[i.jsx("h1",{className:"carts-title",children:"سلال المشتريات"}),i.jsxs("button",{className:"btn-primary carts-new-btn",onClick:w,children:[i.jsx(lc,{size:20})," سلة جديدة"]})]}),n?i.jsx("p",{children:"جاري تحميل السلال..."}):e.length>0?i.jsx("div",{className:"carts-grid",children:e.map(S=>{const E=P=>P.includes("الإعلان الممول")&&(P.includes("انتهت")||P.includes("انتهاء")||P.includes("تمت إزالة")||P.includes("أُزيل")||P.includes("مستقل")||P.includes("غير مربوط")||P.includes("كتالوج")||P.includes("عُدِّ سعره")||P.includes("السعر الأصلي"));return String(S.notes||"").split(`
`).map(P=>P.trim()).filter(E),i.jsx("div",{className:"card shopping-cart-card",children:i.jsxs("div",{className:"cart-collapsed-row",children:[i.jsx(ge,{to:`/carts/${S.id}`,className:"cart-collapsed-link","aria-label":`فتح سلة ${S.name}`,children:i.jsx("h3",{className:"cart-collapsed-title",children:S.name})}),i.jsxs("div",{className:"actions flex-center",style:{gap:"10px"},children:[i.jsx("button",{type:"button",className:"action-btn share",title:"مشاركة واتساب",onClick:()=>b(S),children:i.jsx(uy,{size:18})}),i.jsx("button",{type:"button",className:"action-btn delete",title:"حذف السلة",onClick:()=>k(S),children:i.jsx(Yr,{size:18})})]})]})},S.id)})}):i.jsxs("div",{className:"empty-state card flex-center",style:{flexDirection:"column",padding:"50px"},children:[i.jsx("p",{children:"ليس لديك أي سلال مشتريات بعد."}),i.jsx("button",{className:"btn-primary",onClick:w,style:{width:"auto",marginTop:"20px"},children:"ابدأ بإنشاء أول سلة"})]})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        `}})]})})},hS=()=>{const{cartId:e}=xa(),{showAlert:t,showConfirm:n}=Oe(),[a,o]=m.useState(null),[l,d]=m.useState(!0),[h,u]=m.useState(null),[f,x]=m.useState(null),y=m.useCallback(async()=>{if(e){d(!0);try{const S=await Vy(e);o(S)}catch(S){o(null),t(Ae(S,"تعذر تحميل السلة."),"خطأ")}finally{d(!1)}}},[e,t]);m.useEffect(()=>{y()},[y]);const v=S=>{var E;if(S.effective_unit_price!=null&&S.effective_unit_price!==""){const P=Number(S.effective_unit_price);if(Number.isFinite(P))return P}return Number(((E=S.product_details)==null?void 0:E.price)??0)},_=S=>{const E=S.catalog_unit_price;if(E==null||E==="")return null;const P=Number(E);return Number.isFinite(P)?P:null},w=S=>v(S)*Number(S.quantity??0),N=m.useMemo(()=>((a==null?void 0:a.items)||[]).reduce((E,P)=>E+w(P),0),[a]),C=async S=>{if(!a)return;const E=S??"";if((a.notes??"")!==E){x(a.id);try{await Sk(a.id,{notes:E}),await y()}catch(P){t(Ae(P,"تعذر حفظ الملاحظة.")),await y()}finally{x(null)}}},z=async S=>{var I;const E=S.line_title||((I=S.product_details)==null?void 0:I.name)||"هذا السطر";if(await n(`هل تريد إزالة «${E}» من السلة؟`,"تأكيد الحذف")){u(S.id);try{await Pk(S.id),await y()}catch(D){t(Ae(D,"تعذر حذف المنتج."))}finally{u(null)}}},b=async(S,E)=>{const P=Number(S.quantity??0)+E;if(P<1){await z(S);return}u(S.id);try{await Zf(S.id,{quantity:P}),await y()}catch(I){t(Ae(I,"تعذر تحديث الكمية."))}finally{u(null)}},k=async(S,E)=>{const P=parseInt(String(E),10);if(Number.isNaN(P)||P<1){t("الكمية يجب أن تكون رقماً صحيحاً ≥ ١"),await y();return}u(S.id);try{await Zf(S.id,{quantity:P}),await y()}catch(I){t(Ae(I,"تعذر تحديث الكمية.")),await y()}finally{u(null)}};return i.jsx(ze,{children:i.jsxs("div",{className:"cart-details-page",children:[i.jsx("div",{style:{marginBottom:12},children:i.jsx(ge,{to:"/carts",className:"cart-details-back",children:"← رجوع للسلال"})}),l?i.jsx("div",{className:"card cart-details-loading",children:"جاري تحميل السلة…"}):a?i.jsxs("div",{className:"card cart-details-card",children:[i.jsxs("div",{className:"cart-details-head",children:[i.jsx("h1",{className:"cart-details-title",children:a.name}),i.jsxs("div",{className:"cart-details-total",children:["الإجمالي: ",i.jsxs("span",{className:"cart-details-total-num",children:[N.toFixed(2)," ₪"]})]})]}),i.jsxs("div",{className:"cart-notes-section",children:[i.jsx("label",{className:"cart-note-label",htmlFor:`cart-notes-${a.id}`,children:"ملاحظة على السلة"}),i.jsx("textarea",{id:`cart-notes-${a.id}`,className:"cart-note-input",rows:2,placeholder:"مثال: موعد التوصيل، طلبات عامة على الطلب…",defaultValue:a.notes||"",disabled:f===a.id,onBlur:S=>C(S.target.value)},`${a.id}-cart-notes-${a.notes??""}`)]}),i.jsx("div",{className:"cart-items",children:Array.isArray(a.items)&&a.items.length>0?a.items.map(S=>i.jsx("div",{className:"cart-line-block",children:i.jsxs("div",{className:"item-row cart-item-row",style:{display:"grid",gridTemplateColumns:"56px minmax(0, 1fr) auto",gap:12,alignItems:"center",padding:"10px 0 6px",borderRadius:S.is_promotional_line?12:0,marginInline:S.is_promotional_line?-4:0,paddingInline:S.is_promotional_line?10:0,marginTop:S.is_promotional_line?6:0,background:S.is_promotional_line?"linear-gradient(135deg, rgba(245,192,0,0.12) 0%, rgba(255,249,230,0.35) 100%)":void 0,border:S.is_promotional_line?"1px solid rgba(245,192,0,0.4)":void 0},children:[i.jsx("div",{className:"cart-item-thumb",children:Yf(S).length>0?i.jsx(kt,{images:Yf(S),height:56,borderRadius:12}):i.jsx("span",{className:"cart-item-thumb-placeholder flex-center",children:i.jsx(Ft,{size:20,color:"var(--text-light)"})})}),i.jsxs("div",{style:{minWidth:0},children:[(()=>{var D,T,R,U;const E=((D=S==null?void 0:S.product_details)==null?void 0:D.store)??((T=S==null?void 0:S.product_details)==null?void 0:T.store_id)??(S==null?void 0:S.store)??null,P=(S==null?void 0:S.product)??((R=S==null?void 0:S.product_details)==null?void 0:R.id)??null,I=S.line_title||((U=S.product_details)==null?void 0:U.name);return E&&P?i.jsx(ge,{to:`/stores/${E}`,state:{scrollToProductId:P},style:{fontWeight:900,color:"var(--secondary)",textDecoration:"none"},title:"فتح المنتج داخل المتجر",children:I}):i.jsx("div",{style:{fontWeight:800},children:I})})(),S.is_promotional_line?i.jsxs("div",{style:{fontSize:"0.85rem",marginTop:6},children:[i.jsx("span",{style:{display:"inline-block",padding:"3px 10px",borderRadius:8,fontWeight:900,color:"var(--secondary)",background:"rgba(245,192,0,0.35)",border:"1px solid rgba(245,192,0,0.5)"},children:S.is_standalone_ad_line?`عرض ممول مستقل: ${v(S).toFixed(2)} ₪ للقطعة`:`عرض ممول: ${v(S).toFixed(2)} ₪ للقطعة`}),!S.is_standalone_ad_line&&_(S)!=null&&Math.abs(v(S)-_(S))>1e-9?i.jsxs("span",{style:{marginInlineStart:10,textDecoration:"line-through",color:"var(--text-secondary)"},children:["سعر المتجر ",_(S).toFixed(2)," ₪"]}):null,i.jsxs("span",{style:{color:"var(--text-light)",marginInlineStart:8},children:["· المجموع ",w(S).toFixed(2)," ₪"]})]}):i.jsxs("div",{style:{fontSize:"0.85rem",color:"var(--text-secondary)",marginTop:4},children:[(_(S)!=null?_(S):v(S)).toFixed(2)," ₪ للقطعة",i.jsxs("span",{style:{color:"var(--text-light)",marginInlineStart:8},children:["· المجموع ",w(S).toFixed(2)," ₪"]})]})]}),i.jsxs("div",{className:"flex-center cart-item-actions",children:[i.jsxs("div",{className:"cart-qty-stepper",dir:"ltr",children:[i.jsx("button",{type:"button",className:"cart-qty-stepper__btn cart-qty-stepper__btn--minus",disabled:h===S.id,onClick:()=>b(S,-1),"aria-label":"تقليل الكمية",children:i.jsx(Wx,{size:18,strokeWidth:2.5,"aria-hidden":!0})}),i.jsx("input",{type:"text",inputMode:"numeric",className:"cart-qty-stepper__input",disabled:h===S.id,defaultValue:S.quantity,onBlur:E=>k(S,E.target.value),"aria-label":"الكمية"},`${S.id}-${S.quantity}`),i.jsx("button",{type:"button",className:"cart-qty-stepper__btn cart-qty-stepper__btn--plus",disabled:h===S.id,onClick:()=>b(S,1),"aria-label":"زيادة الكمية",children:i.jsx(Ux,{size:18,strokeWidth:2.5,"aria-hidden":!0})})]}),i.jsx("button",{type:"button",className:"cart-item-remove",title:"حذف من السلة",disabled:h===S.id,onClick:()=>z(S),"aria-label":"حذف من السلة",children:i.jsx(Yr,{size:17,strokeWidth:2.25,"aria-hidden":!0})})]})]})},S.id)):i.jsx("p",{style:{color:"#999",fontSize:"0.9rem",margin:0},children:"السلة فارغة حالياً."})})]}):i.jsx("div",{className:"card cart-details-loading",children:"تعذر تحميل السلة."}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        `}})]})})},pS=()=>{const[e,t]=m.useState([]),[n,a]=m.useState(!0),{showAlert:o,showPrompt:l,showSelect:d}=Oe(),h=localStorage.getItem("isGuest")==="true",u=vc(),f=!!localStorage.getItem("token")&&!h&&localStorage.getItem("user_type")==="shopper",[x,y]=m.useState({}),[v,_]=m.useState(null);m.useEffect(()=>{if(!f){y({});return}let k=!1;return(async()=>{try{const S=await Ao();if(k)return;const E={};for(const P of S||[])(P.product==null||P.product==="")&&P.sponsored_ad!=null&&(E[P.sponsored_ad]=P.id);y(E)}catch{k||y({})}})(),()=>{k=!0}},[f]),m.useEffect(()=>{(async()=>{try{const S=await Gy();t(S)}catch(S){console.error("Error fetching offers:",S)}finally{a(!1)}})()},[]);const w=async k=>{if(!u){await o("ميزة السلال للأعضاء المسجّلين فقط (متسوّق، تاجر، أو مدير) وليست لوضع الزائر. سجّل الدخول ثم أعد المحاولة.","تنبيه");return}_(k);const S=await Xi(),E=Array.isArray(S)?S:[];if(E.length===0){await N(k,{isFirstCart:!0});return}const P=E.map(D=>({id:String(D.id),label:D.name||`سلة #${D.id}`,value:D.id,badge:Array.isArray(D.items)?D.items.length:0})),I=await d("اختر السلة التي تريد إضافة المنتج إليها:","إضافة إلى أي سلة؟",P,{primaryActionLabel:"سلة جديدة"});if(I!=null){if(I==="__primary__"){await N();return}await C({id:I})}},N=async(k,{isFirstCart:S=!1}={})=>{const E=k??v;if(!E)return;const P=await l(S?"لا توجد لديك سلال بعد. اكتب اسماً لسلتك الأولى — يُضاف المنتج إليها مباشرة.":"اكتب اسماً للسلة الجديدة ثم يُضاف المنتج إليها.",S?"مثال: سلة اليوم":"اسم السلة...",S?"إنشاء أول سلة":"سلة جديدة");if(!P||!String(P).trim())return;const I=await gc(String(P).trim());await da(I.id,E.productId??null,E.quantity??1,E.sponsoredAdId??null),await o("تمت إضافة المنتج إلى السلة.","تم"),_(null)},C=async k=>{const S=v;S&&(await da(k.id,S.productId??null,S.quantity??1,S.sponsoredAdId??null),await o("تمت إضافة المنتج إلى السلة.","تم"),_(null))},z=async k=>{try{await w({productId:k.product??null,sponsoredAdId:k.id,quantity:1})}catch(S){await o(Ae(S,"تعذرت الإضافة للسلة."),"خطأ")}},b=async k=>{if(!f){await o("سجّل دخول كمتسوق لإضافة المنتج للمفضلة.","تنبيه");return}try{if(!k.product){const S=x[k.id];if(S)await Wl(S),y(E=>{const P={...E};return delete P[k.id],P}),await o("أُزيل العرض المستقل من المفضلة.","تم");else{await ho(null,k.id);const P=(await Ao()||[]).find(I=>I.sponsored_ad===k.id&&(I.product==null||I.product===""));P&&y(I=>({...I,[k.id]:P.id})),await o("تمت إضافة عرض الإعلان — يُزال تلقائياً عند انتهاء الإعلان.","تم")}return}await ho(k.product,k.id),await o("تمت إضافة المنتج للمفضلة.","تم")}catch(S){await o(Ae(S,"تعذرت الإضافة للمفضلة."),"خطأ")}};return i.jsx(ze,{children:i.jsxs("div",{className:"offers-page-wrap",children:[i.jsxs("header",{className:"offers-hero",children:[i.jsx("div",{className:"offers-hero-icon","aria-hidden":!0,children:i.jsx(Bl,{size:26,strokeWidth:2.25})}),i.jsxs("div",{className:"offers-hero-text",children:[i.jsx("h1",{className:"offers-hero-title",children:"عروض حصرية"}),i.jsx("p",{className:"offers-hero-sub",children:"عروض مُختارة من المتاجر — بطاقات مرتبة لتصفّح مريح على كل الأجهزة"})]})]}),n?i.jsx("p",{className:"offers-loading",children:"جاري تحميل العروض..."}):e.length>0?i.jsx("div",{className:"offers-grid",children:e.map(k=>i.jsxs("article",{className:"offers-card",children:[i.jsxs("div",{className:"offers-card-media",children:[De(k).length>0?i.jsx(kt,{images:De(k),fill:!0,borderRadius:0}):i.jsx("div",{className:"offers-card-media-fallback",children:"عرض"}),i.jsxs("div",{className:"offers-card-media-overlay",children:[i.jsx("div",{className:"offers-card-media-title",children:k.title}),Number(k.product_price)>0?i.jsxs("div",{className:"offers-card-media-price",children:[Number(k.product_price).toFixed(2)," ₪"]}):null]}),u?i.jsx("button",{type:"button",className:"offers-card-media-cartbtn",onClick:()=>z(k),title:"إضافة إلى السلة","aria-label":"إضافة إلى السلة",children:i.jsx(er,{size:18})}):null]}),i.jsxs("div",{className:"offers-card-body",children:[i.jsx("span",{className:"offers-card-store",children:k.store_name}),i.jsx(ge,{to:`/stores/${k.store}`,state:k.product?{scrollToProductId:k.product}:void 0,className:"offers-card-title-link",title:"فتح المنتج داخل المتجر",children:i.jsx("h2",{className:"offers-card-title",children:k.title})}),Number(k.product_price)>0?i.jsxs("div",{className:"offers-card-prices",children:[k.product_details&&Number(k.product_details.price)!==Number(k.product_price)?i.jsxs("span",{className:"offers-price-old",children:[Number(k.product_details.price).toFixed(2)," ₪"]}):null,i.jsxs("span",{className:"offers-price-now",children:[Number(k.product_price).toFixed(2)," ₪"]}),k.product_details&&Number(k.product_details.price)!==Number(k.product_price)?i.jsx("span",{className:"offers-price-badge",children:"عرض"}):null]}):null,k.description?i.jsx("p",{className:"offers-card-desc",children:k.description}):null,u||f?i.jsxs("div",{className:"offers-card-actions",children:[u?i.jsxs("button",{type:"button",className:"offers-btn offers-btn--primary",onClick:()=>z(k),children:[i.jsx(er,{size:18}),"إضافة للسلة"]}):null,f?i.jsxs("button",{type:"button",className:"offers-btn offers-btn--ghost",onClick:()=>b(k),title:k.product?"":"يُزال من المفضلة عند انتهاء الإعلان",children:[i.jsx(jr,{size:18,color:"#e91e63",fill:k.product?"none":x[k.id]?"#e91e63":"none"}),"مفضلة"]}):null]}):null,i.jsx(ge,{to:`/stores/${k.store}`,className:"offers-btn offers-btn--block",children:"عرض المتجر"})]})]},k.id))}):i.jsxs("div",{className:"offers-empty card",children:[i.jsx(Bl,{size:44,color:"var(--text-light)","aria-hidden":!0}),i.jsx("p",{children:"لا توجد عروض حالياً. عد لاحقاً."})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
              inset-inline-end: 6px;
              border-radius: 11px;
            }
            .offers-card-media-cartbtn svg {
              width: 15px;
              height: 15px;
            }
            .offers-card-media-overlay {
              padding-block: 6px 5px;
              padding-inline: 7px;
            }
            .offers-card-media:has(.offers-card-media-cartbtn) .offers-card-media-overlay {
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
            .offers-card-actions {
              grid-template-columns: 1fr;
              gap: 5px;
              margin-bottom: 6px;
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
        `}})]})})};function Bd(e,t){const a=f=>f*Math.PI/180,o=a(t[0]-e[0]),l=a(t[1]-e[1]),d=a(e[0]),h=a(t[0]),u=Math.sin(o/2)**2+Math.cos(d)*Math.cos(h)*Math.sin(l/2)**2;return 6371*(2*Math.atan2(Math.sqrt(u),Math.sqrt(1-u)))}function Fd(e){const t=Number(e==null?void 0:e.latitude),n=Number(e==null?void 0:e.longitude);return Number.isFinite(t)&&Number.isFinite(n)}const Dd=12,mS=()=>{const[e]=oc(),t=e.get("q")||"",n=t.trim(),a=n.toLowerCase(),{userMapLocation:o,setSearchQuery:l}=Go(),[d,h]=m.useState([]),[u,f]=m.useState([]),[x,y]=m.useState(!0),[v,_]=m.useState(""),[w,N]=m.useState(null),[C,z]=m.useState(1);m.useEffect(()=>{l(n)},[n,l]),m.useEffect(()=>{z(1)},[t]),m.useEffect(()=>{let I=!1;return(async()=>{try{const D=await hi();I||f(Array.isArray(D)?D:[])}catch(D){console.error(D),I||f([])}})(),()=>{I=!0}},[]),m.useEffect(()=>{let I=!1;return(async()=>{try{y(!0),_("");let D,T,R=null;(o==null?void 0:o.length)===2?(D=o[0],T=o[1],R=[D,T],I||N(R)):(D=31.5,T=34.4,R=null,I||N(null));const U=await fc(D,T),F=Array.isArray(U)?U:(U==null?void 0:U.results)||[];I||h(F)}catch(D){console.error(D),I||(_("تعذر تحميل المتاجر. تحقق من الاتصال بالخادم."),h([]))}finally{I||y(!1)}})(),()=>{I=!0}},[o]);const b=m.useMemo(()=>a?(d||[]).filter(I=>{const D=(I.store_name||"").toLowerCase(),T=(I.category_name||"").toLowerCase();return D.includes(a)||T.includes(a)}):d,[d,a]),k=m.useMemo(()=>{if(!w)return b;const I=w;return[...b].sort((D,T)=>{if(!Fd(D))return 1;if(!Fd(T))return-1;const R=Bd(I,[Number(D.latitude),Number(D.longitude)]),U=Bd(I,[Number(T.latitude),Number(T.longitude)]);return R-U})},[b,w]),S=Math.max(1,Math.ceil(k.length/Dd)),E=Math.min(C,S),P=m.useMemo(()=>{const I=(E-1)*Dd;return k.slice(I,I+Dd)},[k,E]);return m.useEffect(()=>{E!==C&&z(E)},[E,C]),i.jsx(ze,{children:i.jsxs("div",{className:"search-page",children:[i.jsx("header",{className:"search-page-hero",children:i.jsxs("div",{className:"search-page-head",children:[i.jsx("h1",{className:"search-page-title",children:"نتائج البحث"}),n?i.jsxs("p",{className:"search-page-query",children:[i.jsx(To,{size:18,"aria-hidden":!0}),"«",n,"»"]}):i.jsx("p",{className:"search-page-hint",children:"اكتب في شريط البحث أعلاه واضغط Enter أو زر البحث لعرض المتاجر المطابقة."})]})}),v?i.jsx("p",{className:"search-page-error",children:v}):null,x?i.jsx("p",{className:"search-page-loading",children:"جاري تحميل المتاجر…"}):k.length===0?i.jsx("p",{className:"search-page-empty",children:n?"لا توجد متاجر تطابق بحثك. جرّب كلمات أخرى أو تصفح من الصفحة الرئيسية.":"لا توجد نتائج بعد."}):i.jsxs(i.Fragment,{children:[i.jsxs("p",{className:"search-page-count",children:[k.length," متجر"]}),i.jsx("div",{className:"search-page-grid",children:P.map(I=>{const D=yc(I,u),T=w&&Fd(I)?Bd(w,[Number(I.latitude),Number(I.longitude)]):null,R=Ro(I.business_hours_weekly)&&I.is_open_now===!0?"مفتوح":Ro(I.business_hours_weekly)&&I.is_open_now===!1?"مغلق":null;return i.jsxs(ge,{to:`/stores/${I.id}`,className:"search-page-card",children:[i.jsxs("div",{className:"search-page-card-main",children:[i.jsxs("div",{className:"search-page-card-text",children:[i.jsx("span",{className:"search-page-card-name",children:I.store_name}),I.category_name?i.jsx("span",{className:"search-page-card-cat",children:I.category_name}):null,i.jsx("span",{className:"search-page-card-dist",children:T!=null?`📍 ${T.toFixed(1)} كم`:"بدون مسافة"})]}),R?i.jsx("span",{className:"search-page-card-status",children:R}):null]}),i.jsx("div",{className:"search-page-card-thumb",children:D.type==="image"?i.jsx("img",{className:"search-page-card-thumb-img",src:D.url,alt:""}):i.jsx("span",{className:"search-page-card-thumb-emoji",style:{background:D.bg},children:D.emoji})})]},I.id)})}),S>1?i.jsxs("div",{className:"search-page-pager",role:"navigation","aria-label":"تصفح الصفحات",children:[i.jsx("button",{type:"button",className:"search-page-pager-btn",disabled:E<=1,onClick:()=>z(I=>Math.max(1,I-1)),children:"السابق"}),i.jsxs("span",{className:"search-page-pager-meta",children:[E," / ",S]}),i.jsx("button",{type:"button",className:"search-page-pager-btn",disabled:E>=S,onClick:()=>z(I=>Math.min(S,I+1)),children:"التالي"})]}):null]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        `}})]})})},fS=()=>{const[e,t]=m.useState([]),[n,a]=m.useState([]),[o,l]=m.useState(!0),[d,h]=m.useState("products"),[u,f]=m.useState(localStorage.getItem("isGuest")==="true"),{showAlert:x,showConfirm:y,showPrompt:v,showSelect:_}=Oe(),[w,N]=m.useState(null),C=m.useCallback(async()=>{l(!0);try{const T=localStorage.getItem("token")&&localStorage.getItem("isGuest")!=="true"&&localStorage.getItem("user_type")==="shopper",[R,U,F]=await Promise.all([Ao(),Qy(),T?Ky().catch(()=>({notices:[]})):Promise.resolve({notices:[]})]);t(Array.isArray(R)?R:(R==null?void 0:R.results)||[]),a(Array.isArray(U)?U:(U==null?void 0:U.results)||[]);const oe=F==null?void 0:F.notices,ae=Array.isArray(oe)?oe:[];for(const re of ae){const X=typeof re=="string"?re:re==null?void 0:re.text;X&&await x(X,"تنبيه")}}catch(T){console.error("Error fetching favorites:",T),t([]),a([])}finally{l(!1)}},[x]);m.useEffect(()=>{C()},[C]);const z=async(T,{allowCreate:R=!0}={})=>{if(!vc()){await x("ميزة السلال للأعضاء المسجّلين فقط (متسوّق، تاجر، أو مدير) وليست لوضع الزائر. سجّل الدخول ثم أعد المحاولة.");return}N(T);const U=await Xi(),F=Array.isArray(U)?U:[];if(F.length===0&&R){await b(T,{isFirstCart:!0});return}const oe=F.map(re=>({id:String(re.id),label:re.name||`سلة #${re.id}`,value:re.id,badge:Array.isArray(re.items)?re.items.length:0})),ae=await _("اختر السلة التي تريد إضافة المنتج إليها:","إضافة إلى أي سلة؟",oe,R?{primaryActionLabel:"سلة جديدة"}:{});if(ae!=null){if(ae==="__primary__"){if(!R)return;await b();return}await k({id:ae})}},b=async(T,{isFirstCart:R=!1}={})=>{const U=T??w;if(!U)return;const F=await v(R?"لا توجد لديك سلال بعد. اكتب اسماً لسلتك الأولى — يُضاف المنتج إليها مباشرة.":"اكتب اسماً للسلة الجديدة ثم يُضاف المنتج إليها.",R?"مثال: سلة اليوم":"اسم السلة...",R?"إنشاء أول سلة":"سلة جديدة");if(!F||!String(F).trim())return;const oe=await gc(String(F).trim());await da(oe.id,U.productId??null,U.quantity??1,U.sponsoredAdId??null),await x(U.success||"تمت الإضافة للسلة.","تم"),N(null)},k=async T=>{const R=w;R&&(await da(T.id,R.productId??null,R.quantity??1,R.sponsoredAdId??null),await x(R.success||"تمت الإضافة للسلة.","تم"),N(null))},S=async T=>{if(await y("إزالة هذا المنتج من المفضلة؟"))try{await Wl(T),t(U=>U.filter(F=>F.id!==T)),await x("تمت إزالة المنتج من المفضلة.","تم")}catch(U){await x(Ae(U,"حدث خطأ أثناء الإزالة."),"خطأ")}},E=async T=>{if(await y("إزالة هذا المحل من المفضلة؟"))try{await Yy(T),a(U=>U.filter(F=>F.id!==T)),await x("تمت إزالة المحل من المفضلة.","تم")}catch(U){await x(Ae(U,"حدث خطأ أثناء الإزالة."),"خطأ")}},P=async T=>{if(T==null||T===""){await x("معرّف المنتج غير متوفر. افتح صفحة المتجر وأعد المحاولة.");return}try{await z({productId:T,sponsoredAdId:null,quantity:1,success:"تمت إضافة المنتج للسلة."},{allowCreate:!0})}catch(R){await x(Ae(R,"تعذرت الإضافة للسلة."),"خطأ")}},I=async T=>{try{await z({productId:null,sponsoredAdId:T,quantity:1,success:"تمت إضافة عرض الإعلان المستقل للسلة."})}catch(R){await x(Ae(R,"تعذرت الإضافة للسلة."),"خطأ")}},D=(T,R,U)=>i.jsxs("button",{type:"button",className:`fav-tab ${d===T?"fav-tab-active":""}`,onClick:()=>h(T),children:[R,U>0?i.jsx("span",{className:"fav-tab-count",children:U}):null]});return i.jsxs(ze,{children:[i.jsx("div",{className:"favorites-page",children:u?i.jsx(mp,{title:"المفضلة متوفرة للأعضاء فقط",message:"سجل دخولك لتجميع المنتجات والمحلات المفضّلة لديك."}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"favorites-head flex-center",children:[i.jsx("div",{className:"favorites-head-icon",children:i.jsx(jr,{size:24})}),i.jsx("h1",{className:"favorites-head-title",children:"المفضلة"})]}),i.jsxs("div",{className:"fav-tabs-row",children:[D("products","المنتجات المفضّلة",e.length),D("stores","المحلات المفضّلة",n.length)]}),o?i.jsx("p",{children:"جاري التحميل..."}):d==="products"?e.length>0?i.jsx("div",{className:"favorites-grid",children:e.map(T=>{const R=(T.product==null||T.product==="")&&T.sponsored_ad!=null,U=T.standalone_ad_display;if(R){if(!U)return i.jsxs("div",{className:"card favorite-card favorite-card--expired",children:[i.jsx("p",{className:"favorite-card-title",children:"عرض ممول مستقل"}),i.jsx("p",{className:"favorite-card-sub",children:"هذا الإعلان انتهى أو لم يعد متاحاً. يمكنك إزالته من المفضلة."}),i.jsx("button",{type:"button",className:"btn-primary",style:{marginTop:14},onClick:()=>S(T.id),children:"إزالة من المفضلة"})]},T.id);const G=De(U);return i.jsxs("div",{className:"card favorite-card",children:[i.jsx("div",{className:"favorite-card-media",children:G.length>0?i.jsx(kt,{images:G,height:152,borderRadius:0}):i.jsx(Vn,{size:40,color:"var(--text-secondary)"})}),i.jsxs("div",{className:"favorite-card-body",children:[i.jsx("span",{className:"badge",style:{display:"inline-block",marginBottom:8,background:"#FFF9E6",color:"var(--secondary)",fontWeight:800,fontSize:"0.78rem"},children:"عرض ممول مستقل — يُزال تلقائياً عند انتهاء الإعلان"}),U.store_name?i.jsxs("p",{style:{margin:"0 0 8px",fontSize:"0.88rem",fontWeight:800,color:"var(--secondary)"},children:["المتجر: ",U.store_name]}):null,i.jsxs("div",{className:"flex-center",style:{justifyContent:"space-between",marginBottom:"12px"},children:[i.jsx("h3",{style:{fontSize:"1.2rem",margin:0},children:U.title}),i.jsx("button",{type:"button",className:"action-btn delete",onClick:()=>S(T.id),style:{background:"none",border:"none",cursor:"pointer",color:"#FF5252"},"aria-label":"إزالة من المفضلة",children:i.jsx(Yr,{size:20})})]}),i.jsxs("p",{style:{color:"var(--secondary)",fontWeight:"bold",fontSize:"1.1rem"},children:[Number(U.product_price).toFixed(2)," ₪"]}),i.jsx("p",{style:{color:"#666",fontSize:"0.85rem",marginTop:"5px"},children:U.description||"—"}),i.jsxs("div",{className:"actions",style:{marginTop:"20px",display:"flex",gap:8,flexWrap:"wrap"},children:[i.jsxs("button",{type:"button",className:"btn-primary",style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"10px"},onClick:()=>I(T.sponsored_ad),children:[i.jsx(qu,{size:18})," إضافة للسلة"]}),U.store!=null?i.jsx(ge,{to:`/stores/${U.store}`,style:{display:"inline-flex",alignItems:"center",padding:"10px 14px",borderRadius:10,border:"1.5px solid var(--border)",textDecoration:"none",color:"var(--secondary)",fontWeight:700,fontSize:"0.9rem"},children:"المتجر"}):null]})]})]},T.id)}const F=T.product_details||{},oe=F.id??T.product??null,ae=Number(F.price),re=Number.isFinite(ae)?ae.toFixed(2):F.price??"",X=F.store??F.store_id??T.store??null;return i.jsxs("div",{className:"card favorite-card",children:[X?i.jsx(ge,{to:`/stores/${X}`,state:{scrollToProductId:F.id},className:"favorite-card-media",title:"فتح المنتج داخل المتجر",children:De(F).length>0?i.jsx(kt,{images:De(F),height:152,borderRadius:0}):i.jsx(Nr,{size:40,color:"var(--text-secondary)"})}):i.jsx("div",{className:"favorite-card-media",children:De(F).length>0?i.jsx(kt,{images:De(F),height:152,borderRadius:0}):i.jsx(Nr,{size:40,color:"var(--text-secondary)"})}),i.jsxs("div",{className:"favorite-card-body",children:[F.store_name?i.jsxs("p",{style:{margin:"0 0 8px",fontSize:"0.88rem",fontWeight:800,color:"var(--secondary)"},children:["المتجر: ",F.store_name]}):null,i.jsxs("div",{className:"flex-center",style:{justifyContent:"space-between",marginBottom:"12px"},children:[i.jsx("h3",{style:{fontSize:"1.2rem",margin:0},children:F.name}),i.jsx("button",{type:"button",className:"action-btn delete",onClick:()=>S(T.id),style:{background:"none",border:"none",cursor:"pointer",color:"#FF5252"},"aria-label":"إزالة من المفضلة",children:i.jsx(Yr,{size:20})})]}),i.jsxs("div",{className:"favorite-card-price",children:[re," ₪"]}),i.jsx("div",{className:"favorite-card-desc",children:F.description||"لا يوجد وصف"}),i.jsxs("div",{className:"actions",style:{marginTop:"20px",display:"flex",gap:8,flexWrap:"wrap"},children:[i.jsxs("button",{type:"button",className:"btn-primary",style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"10px"},disabled:oe==null||oe==="",title:oe==null||oe===""?"لا يمكن الإضافة — بيانات المنتج ناقصة":"إضافة المنتج إلى سلة تختارها",onClick:()=>P(oe),children:[i.jsx(qu,{size:18})," إضافة للسلة"]}),F.store!=null?i.jsx(ge,{to:`/stores/${F.store}`,className:"favorite-card-storebtn",style:{display:"inline-flex",alignItems:"center",padding:"10px 14px",borderRadius:10,border:"1.5px solid var(--border)",textDecoration:"none",color:"var(--secondary)",fontWeight:700,fontSize:"0.9rem"},children:"المتجر"}):null]})]})]},T.id)})}):i.jsxs("div",{className:"empty-state card flex-center",style:{flexDirection:"column",padding:"50px"},children:[i.jsx(jr,{size:48,color:"#ccc"}),i.jsx("p",{style:{marginTop:"15px",color:"#777"},children:"لا توجد منتجات مفضّلة بعد."}),i.jsx("p",{style:{color:"#999",fontSize:"0.9rem"},children:"افتح صفحة أي متجر واضغط القلب بجانب المنتج."})]}):n.length>0?i.jsx("div",{className:"favorites-grid",style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(min(280px, 100%), 1fr))",gap:"20px"},children:n.map(T=>{const R=T.store_details||{};return i.jsxs("div",{className:"card favorite-card favorite-card--store",children:[i.jsxs("div",{className:"flex-center",style:{justifyContent:"space-between",marginBottom:"12px"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[i.jsx("div",{style:{width:48,height:48,borderRadius:12,overflow:"hidden",background:"var(--grey-light)",display:"flex",alignItems:"center",justifyContent:"center"},children:R.logo?i.jsx("img",{src:R.logo,alt:"",style:{width:"100%",height:"100%",objectFit:"cover"}}):i.jsx(Pt,{size:22,color:"var(--text-secondary)"})}),i.jsxs("div",{children:[i.jsx("h3",{style:{fontSize:"1.15rem",margin:0},children:R.store_name}),i.jsx("div",{style:{fontSize:"0.85rem",color:"var(--text-secondary)",marginTop:4},children:R.category_name||"متجر"})]})]}),i.jsx("button",{type:"button",onClick:()=>E(T.id),style:{background:"none",border:"none",cursor:"pointer",color:"#FF5252"},"aria-label":"إزالة من المفضلة",children:i.jsx(Yr,{size:20})})]}),R.description?i.jsxs("p",{style:{color:"#666",fontSize:"0.88rem",lineHeight:1.5,marginTop:8},children:[R.description.slice(0,140),R.description.length>140?"…":""]}):null,i.jsx(ge,{to:`/stores/${R.id}`,className:"btn-primary",style:{display:"inline-flex",marginTop:16,padding:"10px 16px",borderRadius:10,textDecoration:"none",fontWeight:800},children:"عرض المتجر"})]},T.id)})}):i.jsxs("div",{className:"empty-state card flex-center",style:{flexDirection:"column",padding:"50px"},children:[i.jsx(Pt,{size:48,color:"#ccc"}),i.jsx("p",{style:{marginTop:"15px",color:"#777"},children:"لا توجد محلات مفضّلة بعد."}),i.jsx("p",{style:{color:"#999",fontSize:"0.9rem"},children:"افتح صفحة المتجر واضغط القلب بجانب الاسم."})]})]})}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})},gS=()=>{const e=[{icon:i.jsx(S_,{size:24}),title:"البريد الإلكتروني",detail:"ismailnaser67@gmail.com",color:"#0984e3",action:{label:"تواصل عبر Gmail",href:"mailto:ismailnaser67@gmail.com?subject=%D8%AA%D9%88%D8%A7%D8%B5%D9%84%20%D9%85%D8%B9%20%D8%B1%D8%A7%D8%AF%D8%A7%D8%B1"}},{icon:i.jsx(ly,{size:24}),title:"واتساب الدعم",detail:"+970592377078",color:"#25D366",action:{label:"تواصل عبر واتساب",href:"https://wa.me/970592377078",target:"_blank",rel:"noreferrer",variant:"wa"}}];return i.jsx(ze,{children:i.jsxs("div",{className:"contact-page",children:[i.jsx("div",{className:"contact-hero card flex-center",children:i.jsxs("div",{children:[i.jsx("h1",{className:"contact-title",children:"اتصل بنا"}),i.jsx("p",{className:"contact-subtitle",children:"نعمل على مدار الساعة (24/7) للإجابة على استفساراتكم."})]})}),i.jsx("div",{className:"contact-grid",children:e.map((t,n)=>i.jsxs("div",{className:"card contact-info-card",children:[i.jsx("div",{className:"contact-icon",style:{background:`${t.color}15`,color:t.color},children:t.icon}),i.jsx("h3",{className:"contact-info-title",children:t.title}),i.jsx("p",{className:"contact-info-detail",children:t.detail}),t.action?i.jsx("a",{className:`contact-action-btn${t.action.variant==="wa"?" contact-action-btn--wa":""}`,href:t.action.href,target:t.action.target,rel:t.action.rel,"aria-label":t.action.label,title:t.action.label,children:t.action.label}):null]},n))}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        `}})]})})},xS=()=>{const[e,t]=m.useState(""),[n,a]=m.useState(!1),[o,l]=m.useState(!1),[d,h]=m.useState(60),u=dt(),{showAlert:f,showConfirm:x}=Oe();m.useEffect(()=>{let _;return d>0&&(_=setInterval(()=>h(w=>w-1),1e3)),()=>clearInterval(_)},[d]);const y=async _=>{if(_.preventDefault(),e.length<6)return f("يرجى إدخال رمز التحقق المكون من 6 أرقام");a(!0);try{await Nk(e),f("تم التحقق من حسابك بنجاح! أهلاً بك في رادار.","نجاح التوثيق"),u("/")}catch(w){f(Ae(w,"تعذر التحقق. تأكد من الرمز ثم أعد المحاولة."),"خطأ في التحقق")}finally{a(!1)}},v=async()=>{if(await x("إعادة إرسال رمز تحقق جديد إلى واتساب؟","إعادة الإرسال")){l(!0);try{await Ck(),f("تم إعادة إرسال رمز جديد إلى واتساب الخاص بك.","تم الإرسال"),h(60)}catch(w){f(Ae(w,"فشل في إعادة إرسال الرمز، يرجى المحاولة لاحقاً."),"خطأ")}finally{l(!1)}}};return i.jsx(ze,{children:i.jsxs("div",{className:"verify-container flex-center",children:[i.jsx("div",{className:"verify-overlay"}),i.jsxs("div",{className:"card verify-card",style:{padding:"2rem 2.5rem"},children:[i.jsx("div",{className:"verify-logo flex-center",style:{marginBottom:"10px"},children:i.jsx("img",{src:"/logo.png",alt:"رادار",style:{width:"220px",maxWidth:"100%",objectFit:"contain"}})}),i.jsx("div",{className:"verify-icon flex-center",children:i.jsx(ly,{size:40,color:"var(--primary)"})}),i.jsx("h2",{style:{marginBottom:"10px"},children:"تحقق من هويتك"}),i.jsx("p",{style:{color:"#666",marginBottom:"25px",fontSize:"0.95rem"},children:"لقد أرسلنا رمز التحقق المكون من 6 أرقام إلى حساب الواتساب الخاص بك. يرجى إدخاله للمتابعة."}),i.jsxs("form",{onSubmit:y,children:[i.jsx(jt,{placeholder:"0 0 0 0 0 0",value:e,onChange:_=>t(_.target.value.replace(/[^0-9]/g,"").slice(0,6)),style:{textAlign:"center",fontSize:"1.8rem",letterSpacing:"8px",fontWeight:"bold"},required:!0}),i.jsx(Nt,{type:"submit",loading:n,style:{width:"100%",marginTop:"10px",height:"55px",fontSize:"1.1rem"},confirm:"إرسال رمز التحقق للتحقق من الحساب؟",showErrorAlert:!1,children:"تأكيد الرمز"})]}),i.jsx("div",{className:"verify-footer",style:{marginTop:"25px"},children:d>0?i.jsxs("p",{style:{color:"#999",fontSize:"0.9rem"},children:["يمكنك إعادة إرسال الرمز خلال ",i.jsx("span",{style:{color:"var(--secondary)",fontWeight:"bold"},children:d})," ثانية"]}):i.jsxs("button",{className:"resend-btn flex-center",onClick:v,disabled:o,style:{margin:"0 auto",gap:"8px",background:"transparent",border:"none",color:"var(--secondary)",cursor:"pointer",fontWeight:"bold"},children:[i.jsx(A_,{size:18,className:o?"spin":""}),"إعادة إرسال الرمز"]})}),i.jsx("button",{onClick:()=>u("/login"),style:{marginTop:"20px",background:"transparent",border:"none",color:"#888",cursor:"pointer",fontSize:"0.85rem",textDecoration:"underline"},children:"العودة لتسجيل الدخول"})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
                    .verify-container { min-height: 100vh; background: var(--background); position: relative; padding: 20px; }
                    .verify-overlay { position: absolute; inset: 0; background: radial-gradient(900px 420px at 80% 10%, var(--primary-light), transparent 60%); }
                    .verify-card { position: relative; z-index: 1; width: 100%; max-width: 440px; text-align: center; border-radius: 26px; box-shadow: var(--shadow-lg); }
                    .verify-icon { width: 82px; height: 82px; background: rgba(245, 192, 0, 0.14); border-radius: 24px; margin: 0 auto 18px; }
                    .spin { animation: spin 1s linear infinite; }
                    @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                `}})]})})};function yS(e){if(e==null||e==="")return"";const t="٠١٢٣٤٥٦٧٨٩",n="۰۱۲۳۴۵۶۷۸۹",a="0123456789";let o="";for(const l of String(e)){let d=t.indexOf(l);if(d>=0){o+=a[d];continue}if(d=n.indexOf(l),d>=0){o+=a[d];continue}o+=l}return o.replace(/\D/g,"")}function vS(e){let t=yS(e);return!t||(t.length===10&&t[0]==="0"&&t[1]==="5"?t=`970${t.slice(1)}`:t.length===9&&t[0]==="5"&&(t=`970${t}`),t.length<8)?null:`https://wa.me/${t}`}const lg=(e,t,n)=>{const a=parseInt(String(e),10);return Number.isNaN(a)?t:Math.min(n,Math.max(t,a))},cg=e=>!!e&&Number.isFinite(Number(e.latitude))&&Number.isFinite(Number(e.longitude)),bS=()=>{const{storeId:e}=xa(),t=dt(),n=Qt(),{showAlert:a,showPrompt:o,showSelect:l}=Oe(),[d,h]=m.useState(!0),[u,f]=m.useState(null),[x,y]=m.useState(""),[v,_]=m.useState({}),[w,N]=m.useState({}),[C,z]=m.useState(null),[b,k]=m.useState(null),[S,E]=m.useState({}),[P,I]=m.useState({}),[D,T]=m.useState(!1),[R,U]=m.useState(!1),[F,oe]=m.useState(null),[ae,re]=m.useState(null),X=localStorage.getItem("isGuest")==="true",G=!!localStorage.getItem("token")&&!X,M=vc(),Y=G&&localStorage.getItem("user_type")==="shopper",Z=async K=>{if(!Y){await a("التقييم متاح لحساب المتسوّق فقط (وليس وضع الزائر أو التاجر).","تنبيه");return}const me=e!=null?Number(e):u==null?void 0:u.id;if(me){U(!0);try{const he=await Dj(me,K);f(we=>we&&{...we,rating_average:he.rating_average??we.rating_average,rating_count:he.rating_count??we.rating_count,my_rating:K}),await a("شكراً، تم حفظ تقييمك.","تم")}catch(he){await a(Ae(he,"تعذر إرسال التقييم."),"خطأ")}finally{U(!1)}}},ne=m.useCallback(async()=>{var K;if(!G){N({});return}try{const he=(await Xi())[0];if(!((K=he==null?void 0:he.items)!=null&&K.length)){N({});return}const we={};for(const Be of he.items)we[Be.product]=Be.quantity;N(we)}catch{N({})}},[G]);m.useEffect(()=>{let K=!1;return(async()=>{h(!0),y("");try{const me=await Fj(e);if(!K){f(me);const he={},we=me.products||[];for(const Be of we)he[Be.id]=1;_(he)}}catch{K||(y("تعذر تحميل بيانات المتجر"),f(null))}finally{K||h(!1)}})(),()=>{K=!0}},[e]),m.useEffect(()=>{var he;const K=(he=n.state)==null?void 0:he.scrollToProductId;if(K==null||K==="")return;const me=window.setTimeout(()=>{const we=document.querySelector(`[data-store-product-id="${String(K)}"]`);we&&typeof we.scrollIntoView=="function"&&(we.scrollIntoView({behavior:"smooth",block:"center"}),re(String(K)),window.setTimeout(()=>re(null),1600))},220);return()=>window.clearTimeout(me)},[n.state,e]),m.useEffect(()=>{ne()},[ne,e]),m.useEffect(()=>{if(!G||!(u!=null&&u.id)){k(null),E({}),I({});return}let K=!1;return(async()=>{var me;try{const[he,we]=await Promise.all([Ao(),Qy()]);if(K)return;const Be={},Ge={};for(const Fe of he||[]){const yt=Fe.product??((me=Fe.product_details)==null?void 0:me.id);yt!=null&&(Be[yt]=Fe.id),(Fe.product==null||Fe.product==="")&&Fe.sponsored_ad!=null&&(Ge[Fe.sponsored_ad]=Fe.id)}if(E(Be),I(Ge),u.is_owner)k(null);else{const Fe=(we||[]).find(yt=>{var Lr;return Number(yt.store)===Number(u.id)||Number((Lr=yt.store_details)==null?void 0:Lr.id)===Number(u.id)});k((Fe==null?void 0:Fe.id)??null)}}catch{K||(E({}),I({}),k(null))}})(),()=>{K=!0}},[G,u==null?void 0:u.id,u==null?void 0:u.is_owner]);const J=()=>{const K=Number(u==null?void 0:u.latitude),me=Number(u==null?void 0:u.longitude);if(!Number.isFinite(K)||!Number.isFinite(me)){a("لا توجد إحداثيات خريطة محفوظة لهذا المتجر.");return}t("/map",{state:{mapFocus:{lat:K,lng:me,storeId:u.id},mapPreset:{mode:"stores",category:(u==null?void 0:u.category)??null,q:(u==null?void 0:u.store_name)??""}}})},te=K=>K.product?`p-${K.product}`:`ad-${K.id}`,O=async K=>{if(!M){a("ميزة السلال للأعضاء المسجّلين فقط (متسوّق، تاجر، أو مدير) وليست لوضع الزائر. سجّل الدخول ثم أعد المحاولة."),t("/login");return}z(te(K));try{const me={productId:K.product??null,sponsoredAdId:K.id,quantity:1,success:"تمت إضافة العرض للسلة."};oe(me);const he=await Xi(),we=Array.isArray(he)?he:[];if(we.length===0){await H(me,{isFirstCart:!0});return}const Be=we.map(Fe=>({id:String(Fe.id),label:Fe.name||`سلة #${Fe.id}`,value:Fe.id,badge:Array.isArray(Fe.items)?Fe.items.length:0})),Ge=await l("اختر السلة التي تريد إضافة المنتج إليها:","إضافة إلى أي سلة؟",Be,{primaryActionLabel:"سلة جديدة"});if(Ge==null)return;if(Ge==="__primary__"){await H();return}await V({id:Ge})}catch(me){a(Ae(me,"تعذرت الإضافة للسلة."),"خطأ")}finally{z(null)}},H=async(K,{isFirstCart:me=!1}={})=>{const he=K??F;if(!he)return;const we=await o(me?"لا توجد لديك سلال بعد. اكتب اسماً لسلتك الأولى — يُضاف المنتج إليها مباشرة.":"اكتب اسماً للسلة الجديدة ثم يُضاف المنتج إليها.",me?"مثال: سلة اليوم":"اسم السلة...",me?"إنشاء أول سلة":"سلة جديدة");if(!we||!String(we).trim())return;const Be=await gc(String(we).trim());await da(Be.id,he.productId??null,he.quantity??1,he.sponsoredAdId??null),await ne(),await a(he.success||"تمت الإضافة للسلة.","تم"),oe(null)},V=async K=>{const me=F;me&&(await da(K.id,me.productId??null,me.quantity??1,me.sponsoredAdId??null),await ne(),await a(me.success||"تمت الإضافة للسلة.","تم"),oe(null))},le=async K=>{if(!Y){a("سجّل دخولك كمتسوّق للمفضلة."),t("/login");return}if(!D){T(!0);try{if(!K.product){const he=P[K.id];if(he)await Wl(he),I(we=>{const Be={...we};return delete Be[K.id],Be}),a("أُزيل العرض المستقل من المفضلة.");else{const we=await ho(null,K.id);I(Be=>({...Be,[K.id]:we.id})),a("أُضيف عرض الإعلان للمفضلة — يُزال تلقائياً عند انتهاء مدة الإعلان.")}return}const me=await ho(K.product,K.id);E(he=>({...he,[K.product]:me.id})),a("أُضيف المنتج للمفضلة.")}catch(me){a(Ae(me,"تعذرت العملية."),"خطأ")}finally{T(!1)}}},fe=async()=>{var K,me,he,we,Be;if(!G){a("سجّل دخولك كمتسوّق لاستخدام المفضلة"),t("/login");return}if(!u.is_owner&&!D){T(!0);try{if(b)await Yy(b),k(null),a("أُزيل المحل من المفضلة.");else{const Ge=await Mk(u.id);k(Ge.id),a("أُضيف المحل للمفضلة.")}}catch(Ge){const Fe=((he=(me=(K=Ge==null?void 0:Ge.response)==null?void 0:K.data)==null?void 0:me.store)==null?void 0:he[0])||((Be=(we=Ge==null?void 0:Ge.response)==null?void 0:we.data)==null?void 0:Be.detail);a(Fe?String(Fe):"تعذرت العملية.")}finally{T(!1)}}},Me=async K=>{if(!G){a("سجّل دخولك كمتسوّق لاستخدام المفضلة"),t("/login");return}if(u.is_owner)return;const me=S[K.id];if(!D){T(!0);try{if(me)await Wl(me),E(he=>{const we={...he};return delete we[K.id],we}),a("أُزيل المنتج من المفضلة.");else{const he=await ho(K.id);E(we=>({...we,[K.id]:he.id})),a("أُضيف المنتج للمفضلة.")}}catch{a("تعذرت العملية — ربما المنتج مضاف مسبقاً.")}finally{T(!1)}}},je=((u==null?void 0:u.products)||[]).filter(K=>{const me=K.is_archived;return me!==!0&&me!==1&&me!=="true"&&me!=="True"}),_e=(K,me)=>{_(he=>({...he,[K]:lg(me,1,9999)}))},Ue=(K,me)=>{_(he=>({...he,[K]:lg((he[K]??1)+me,1,9999)}))},Ut=u!=null?u.contact_whatsapp_url||vS(u.contact_whatsapp):null,mi=u!=null?Ro(u.business_hours_weekly):!1,rr=async K=>{if(u!=null&&u.is_owner)return;if(!M){a("ميزة السلال للأعضاء المسجّلين فقط (متسوّق، تاجر، أو مدير) وليست لوضع الزائر. سجّل الدخول ثم أعد المحاولة."),t("/login");return}const me=v[K.id]??1;z(K.id);try{const he={productId:K.id,sponsoredAdId:null,quantity:me,success:`تمت إضافة «${K.name}» للسلة.`};oe(he);const we=await Xi(),Be=Array.isArray(we)?we:[];if(Be.length===0){await H(he,{isFirstCart:!0});return}const Ge=Be.map(yt=>({id:String(yt.id),label:yt.name||`سلة #${yt.id}`,value:yt.id,badge:Array.isArray(yt.items)?yt.items.length:0})),Fe=await l("اختر السلة التي تريد إضافة المنتج إليها:","إضافة إلى أي سلة؟",Ge,{primaryActionLabel:"سلة جديدة"});if(Fe==null)return;if(Fe==="__primary__"){await H();return}await V({id:Fe})}catch(he){a(Ae(he,"تعذر إضافة المنتج للسلة."),"خطأ")}finally{z(null)}};return i.jsxs(ze,{children:[i.jsxs("div",{style:{maxWidth:1240,marginInline:"auto",paddingBottom:48,paddingInline:"clamp(8px, 2.2vw, 22px)",boxSizing:"border-box"},children:[i.jsxs(ge,{to:"/map",className:"flex-center",style:{gap:8,marginBottom:16,color:"var(--text-secondary)",textDecoration:"none",fontWeight:700,width:"fit-content"},children:[i.jsx(Bx,{size:18}),"رجوع للخريطة"]}),d&&i.jsxs("div",{className:"card flex-center",style:{padding:48,gap:12},children:[i.jsx(ay,{className:"spin",size:28}),"جاري التحميل..."]}),!d&&x&&i.jsx("div",{className:"card",style:{color:"#c62828"},children:x}),!d&&u&&i.jsxs(i.Fragment,{children:[i.jsxs("header",{className:"card store-profile-hero",children:[i.jsx("div",{className:"store-profile-hero-banner"}),i.jsxs("div",{className:"store-profile-hero-body",children:[i.jsx("div",{className:"flex-between store-profile-hero-top",children:i.jsx("div",{className:"store-profile-hero-logo",children:u.logo?i.jsx("img",{src:u.logo,alt:"",className:"store-profile-hero-logo-img"}):i.jsx(Pt,{size:40,color:"var(--text-secondary)"})})}),i.jsxs("div",{className:"flex-between store-profile-hero-row",children:[i.jsx("h1",{className:"store-profile-title",children:u.store_name}),cg(u)||G&&!u.is_owner?i.jsxs("div",{className:"store-profile-hero-actions",children:[cg(u)?i.jsx("button",{type:"button",onClick:J,title:"عرض موقع المتجر على الخريطة","aria-label":"عرض على الخريطة",className:"store-profile-icon-btn",children:i.jsx(ln,{size:26,color:"var(--secondary)"})}):null,G&&!u.is_owner?i.jsx("button",{type:"button",onClick:fe,disabled:D,title:b?"إزالة من المفضلة":"إضافة للمفضلة","aria-label":"مفضلة المحل",className:`store-profile-icon-btn ${b?"store-profile-icon-btn--fav":""}`,style:{cursor:D?"wait":void 0},children:i.jsx(jr,{size:26,color:"#e91e63",fill:b?"#e91e63":"none"})}):null]}):null]}),i.jsx("div",{className:"store-profile-subtitle",children:u.category_name||"متجر"}),i.jsxs("div",{className:"store-profile-contact",children:[i.jsxs("div",{className:"store-profile-contact-head",children:[i.jsx(Rl,{size:18,"aria-hidden":!0}),"تواصل معنا"]}),Ut?i.jsxs("a",{href:Ut,target:"_blank",rel:"noopener noreferrer",className:"store-profile-whatsapp-btn",children:[i.jsx(Rl,{size:20}),"مراسلة عبر واتساب"]}):i.jsxs("div",{children:[i.jsx("p",{className:"store-profile-contact-note",children:"لم يُضف رقم واتساب للتواصل بعد — يظهر الزر تلقائياً عندما يضيفه صاحب المتجر من إعدادات المتجر."}),u.is_owner?i.jsx(ge,{to:"/merchant/settings",className:"store-profile-settings-link",children:"فتح إعدادات المتجر لإضافة الرقم"}):null]})]}),Array.isArray(u.store_features)&&u.store_features.filter(Boolean).length>0?i.jsx("div",{className:"store-profile-features",children:u.store_features.filter(Boolean).map((K,me)=>i.jsx("span",{className:"store-feature-chip",children:K},`${me}-${K}`))}):null,i.jsxs("div",{className:"store-profile-box",children:[i.jsxs("div",{className:"store-profile-box-row",children:[i.jsx("span",{className:"store-profile-box-title",children:"مواعيد العمل"}),mi?u.is_open_now===!0?i.jsx("span",{className:"store-profile-pill store-profile-pill--open",children:"مفتوح الآن"}):u.is_open_now===!1?i.jsx("span",{className:"store-profile-pill store-profile-pill--closed",children:"مغلق الآن"}):i.jsx("span",{className:"store-profile-pill store-profile-pill--muted",children:"—"}):i.jsx("span",{className:"store-profile-pill store-profile-pill--muted",children:"لا يوجد مواعيد عمل محددة"})]}),(u.business_hours_note||"").trim()?i.jsx("div",{className:"store-profile-note",children:u.business_hours_note.trim()}):null]}),i.jsxs("div",{className:"store-profile-box store-profile-box--rating",children:[i.jsx("div",{className:"store-profile-box-title",children:"تقييم المتجر (من 5 نجوم)"}),u.rating_count>0&&u.rating_average!=null?i.jsxs("div",{dir:"ltr",className:"store-profile-rating-row",children:[i.jsx("span",{className:"store-profile-rating-avg",children:Number(u.rating_average).toFixed(1)}),i.jsx("span",{className:"star-row-readonly","aria-hidden":!0,children:[1,2,3,4,5].map(K=>i.jsx(Gu,{size:22,color:"#f5c000",fill:K<=Math.round(Number(u.rating_average))?"#f5c000":"none",strokeWidth:K<=Math.round(Number(u.rating_average))?0:1.5},K))}),i.jsxs("span",{className:"store-profile-rating-count",children:["بناءً على ",u.rating_count," تقييم"]})]}):i.jsx("p",{className:"store-profile-muted",children:"لا يوجد تقييمات بعد."}),Y&&!u.is_owner?i.jsxs("div",{children:[i.jsx("div",{className:"store-profile-rate-hint",children:u.my_rating?"تقييمك الحالي (اضغط نجمة لتغييره)":"قيّم هذا المحل"}),i.jsx("div",{dir:"ltr",className:"store-profile-rate-row",children:[1,2,3,4,5].map(K=>i.jsx("button",{type:"button",disabled:R,onClick:()=>Z(K),"aria-label":`تقييم ${K} من 5`,className:"store-profile-star-btn",style:{cursor:R?"wait":void 0},children:i.jsx(Gu,{size:30,color:"#f5c000",fill:K<=(u.my_rating||0)?"#f5c000":"none",strokeWidth:K<=(u.my_rating||0)?0:1.5})},K))})]}):u.is_owner?i.jsx("p",{className:"store-profile-muted store-profile-muted--tight",children:"يظهر تقييمك الإجمالي للزوار؛ التقييم من حسابات المتسوّقين فقط."}):G?null:i.jsxs("button",{type:"button",className:"store-profile-rating-login-cta",onClick:()=>t("/login"),children:[i.jsx("span",{className:"store-profile-rating-login-cta-icon","aria-hidden":!0,children:i.jsx(sc,{size:18,strokeWidth:2})}),i.jsx("span",{className:"store-profile-rating-login-cta-label",children:"سجّل دخول كمتسوّق لتتمكن من التقييم"})]})]}),u.description?i.jsx("p",{className:"store-profile-desc",children:u.description}):null,(u.location_address||"").trim()?i.jsxs("div",{className:"store-profile-box",children:[i.jsxs("div",{className:"store-profile-loc-head",children:[i.jsx(ln,{size:18,"aria-hidden":!0}),"الموقع (نصاً)"]}),i.jsx("div",{className:"store-profile-loc-text",children:u.location_address.trim()})]}):null]})]}),Array.isArray(u.sponsored_ads)&&u.sponsored_ads.length>0&&i.jsxs("section",{className:"store-profile-sponsored",children:[i.jsx("h2",{className:"store-profile-section-title",children:"عروض وإعلانات"}),i.jsx("div",{className:"store-profile-sponsored-rail",children:u.sponsored_ads.map(K=>i.jsxs("div",{className:"card store-profile-sponsored-card",children:[De(K).length>0?i.jsx("div",{className:"store-profile-sponsored-media",children:i.jsx(kt,{images:De(K),height:100,borderRadius:12})}):null,i.jsx("div",{className:"store-profile-sponsored-title",children:K.title}),Number(K.product_price)>0?i.jsxs("div",{className:"store-profile-sponsored-price-row",children:[K.catalog_product_price!=null&&K.catalog_product_price!==""&&Math.abs(Number(K.catalog_product_price)-Number(K.product_price))>1e-9?i.jsxs(i.Fragment,{children:[i.jsxs("span",{className:"store-profile-sponsored-old",children:[Number(K.catalog_product_price).toFixed(2)," ₪"]}),i.jsx("span",{className:"store-profile-sponsored-badge",children:"سعر العرض"})]}):null,i.jsxs("span",{className:"store-profile-sponsored-now",children:[Number(K.product_price).toFixed(2)," ₪"]})]}):null,i.jsx("div",{className:"store-profile-sponsored-desc",children:K.description}),!u.is_owner&&(M||Y)?i.jsxs("div",{className:"store-profile-sponsored-actions",children:[M?i.jsxs("button",{type:"button",className:"btn-primary",style:{flex:1,fontSize:"0.85rem",padding:"8px 10px",border:"none",cursor:C===te(K)?"wait":"pointer",borderRadius:10,fontWeight:800,display:"inline-flex",alignItems:"center",justifyContent:"center",gap:6},disabled:C===te(K),onClick:()=>O(K),children:[i.jsx(er,{size:16}),"سلة"]}):null,Y?i.jsxs("button",{type:"button",className:"store-profile-sponsored-favbtn",style:{cursor:D?"wait":void 0,flex:1,fontSize:"0.85rem",padding:"8px 10px"},disabled:D,onClick:()=>le(K),title:K.product?"مفضلة":"مفضلة — يُزال عند انتهاء الإعلان",children:[i.jsx(jr,{size:16,color:"#e91e63",fill:K.product?S[K.product]?"#e91e63":"none":P[K.id]?"#e91e63":"none"}),"مفضلة"]}):null]}):null]},K.id))})]}),i.jsxs("section",{children:[i.jsx("h2",{className:"store-profile-section-title store-profile-section-title--products",children:"المنتجات"}),je.length===0?i.jsxs("div",{className:"card",style:{color:"var(--text-secondary)",lineHeight:1.65},children:[i.jsx("div",{children:"لا توجد منتجات متاحة للمتسوّقين حالياً."}),u.is_owner?i.jsx("div",{style:{marginTop:10,fontSize:"0.9rem"},children:"إن كنت صاحب/ة هذا المتجر: المنتجات «المؤرشفة» من صفحة «منتجاتي» لا تظهر هنا — عطّل الأرشفة ليظهر المنتج للجمهور."}):null]}):i.jsx("div",{className:"store-profile-products-grid",children:je.map(K=>{const me=w[K.id];return i.jsxs("article",{className:"card store-profile-product-card","data-store-product-id":K.id,"data-flash":ae!=null&&String(ae)===String(K.id)?"true":"false",children:[G&&!u.is_owner?i.jsx("button",{type:"button",onClick:()=>Me(K),disabled:D,title:S[K.id]?"إزالة من المفضلة":"إضافة للمفضلة","aria-label":"مفضلة المنتج",className:"store-profile-product-favbtn",style:{cursor:D?"wait":void 0},children:i.jsx(jr,{size:18,color:"#e91e63",fill:S[K.id]?"#e91e63":"none"})}):null,i.jsxs("div",{className:"store-profile-product-media",children:[De(K).length>0?i.jsx("div",{className:"store-profile-product-media-inner",children:i.jsx(kt,{images:De(K),fill:!0,borderRadius:0,className:"store-product-grid-carousel"})}):i.jsx(Ft,{size:32,color:"var(--text-light)"}),i.jsxs("div",{className:"store-profile-product-media-overlay",children:[i.jsx("div",{className:"store-profile-product-media-name",children:K.name}),i.jsxs("div",{className:"store-profile-product-media-price",children:[K.price," ₪"]})]}),M&&!u.is_owner?i.jsx("button",{type:"button",className:"store-profile-product-media-cartbtn",onClick:()=>rr(K),disabled:C===K.id,title:"إضافة إلى السلال","aria-label":"إضافة إلى السلال",style:{cursor:C===K.id?"wait":"pointer"},children:i.jsx(er,{size:18})}):null]}),i.jsxs("div",{className:"store-profile-product-body",children:[K.description?i.jsx("div",{className:"store-profile-product-desc",children:K.description}):null,Array.isArray(K.product_features)&&K.product_features.filter(Boolean).length>0?i.jsx("div",{className:"store-profile-product-feats",children:K.product_features.map(he=>String(he||"").trim()).filter(Boolean).slice(0,5).map((he,we)=>i.jsx("span",{className:"store-profile-product-feat",title:he,children:he},we))}):null,i.jsxs("div",{className:"store-profile-product-price",children:[K.price," ₪"]}),me!=null&&me>0&&i.jsxs("div",{className:"store-profile-in-cart",children:["في السلة: ",me]}),i.jsxs("div",{className:"flex-between store-profile-qty-row",children:[i.jsx("button",{type:"button",onClick:()=>Ue(K.id,-1),className:"store-profile-qty-btn","aria-label":"نقص الكمية",children:i.jsx(Wx,{size:18})}),i.jsx("input",{type:"text",inputMode:"numeric",value:v[K.id]??1,onChange:he=>_e(K.id,he.target.value),onBlur:he=>_e(K.id,he.target.value||1),className:"store-profile-qty-input"}),i.jsx("button",{type:"button",onClick:()=>Ue(K.id,1),className:"store-profile-qty-btn","aria-label":"زيادة الكمية",children:i.jsx(Ux,{size:18})})]}),M&&!u.is_owner?i.jsx("button",{type:"button",className:"btn-primary store-profile-add-btn",disabled:C===K.id,onClick:()=>rr(K),children:C===K.id?"...":"أضف للسلة"}):null]})]},K.id)})})]})]})]}),i.jsx("style",{children:`
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

        .store-profile-add-btn{
          padding: 10px;
          font-size: 0.92rem;
          margin-top: 4px;
          width: 100%;
          border-radius: 14px;
        }
      `})]})},wS=()=>{const{shareToken:e}=xa(),[t,n]=m.useState(null),[a,o]=m.useState(!0),[l,d]=m.useState(""),h=!!localStorage.getItem("token"),u=localStorage.getItem("isGuest")==="true";m.useEffect(()=>{let y=!1;return(async()=>{o(!0),d("");try{const v=await kk(e);y||n(v)}catch{y||(d("تعذر تحميل السلة أو الرابط غير صالح."),n(null))}finally{y||o(!1)}})(),()=>{y=!0}},[e]);const f=(t==null?void 0:t.items)||[],x=(t==null?void 0:t.total)??"0";return i.jsxs(ze,{children:[i.jsxs("div",{style:{maxWidth:1240,marginInline:"auto",paddingInline:"clamp(8px, 2.2vw, 22px)",paddingBottom:40,boxSizing:"border-box"},children:[i.jsxs("div",{className:"flex-center",style:{justifyContent:"space-between",flexWrap:"wrap",gap:12,marginBottom:18},children:[i.jsx("h1",{style:{fontSize:"1.6rem",fontWeight:900},children:"سلة مشتركة"}),i.jsxs(ge,{to:"/",className:"flex-center",style:{gap:8,color:"var(--text-secondary)",textDecoration:"none",fontWeight:700,fontSize:"0.95rem"},children:[i.jsx(la,{size:18}),"الرئيسية"]})]}),a&&i.jsxs("div",{className:"card flex-center",style:{padding:40,gap:12},children:[i.jsx(ay,{className:"spin",size:26}),"جاري التحميل..."]}),!a&&l&&i.jsx("div",{className:"card",style:{color:"#c62828"},children:l}),!a&&t&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"card",style:{marginBottom:16},children:[i.jsx("div",{style:{fontWeight:900,fontSize:"1.2rem",marginBottom:8},children:t.name}),t.notes?i.jsx("p",{style:{color:"var(--text-secondary)",lineHeight:1.6,marginTop:8},children:t.notes}):null,t.is_owner&&h&&!u&&i.jsxs(ge,{to:"/carts",className:"flex-center",style:{marginTop:14,gap:8,padding:"10px 14px",background:"var(--primary-light)",borderRadius:"var(--radius-md)",textDecoration:"none",color:"var(--secondary)",fontWeight:800,width:"fit-content"},children:[i.jsx(er,{size:18}),"فتح سلتي وتعديلها"]})]}),f.length===0?i.jsx("div",{className:"card",style:{color:"var(--text-secondary)"},children:"السلة فارغة."}):i.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:f.map((y,v)=>{const _=!!y.is_promotional_line,w=!!y.is_standalone_ad_line,N=Number(y.price),C=y.catalog_price,z=C!=null&&String(C).trim()!==""&&!Number.isNaN(Number(C))?Number(C):null,b=_&&!w&&z!=null&&Math.abs(N-z)>1e-9;return i.jsxs("div",{className:"card",style:{display:"grid",gridTemplateColumns:"72px 1fr",gap:14,alignItems:"start",borderRadius:_?14:void 0,background:_?"linear-gradient(135deg, rgba(245,192,0,0.1) 0%, rgba(255,249,230,0.4) 100%)":void 0,border:_?"1px solid rgba(245,192,0,0.4)":void 0},children:[i.jsx("div",{style:{width:72,flexShrink:0,borderRadius:16,overflow:"hidden",background:"var(--primary-light)",border:"1px solid rgba(245,192,0,0.25)",display:"flex",alignItems:"center",justifyContent:"center"},children:De(y).length>0?i.jsx(kt,{images:De(y),height:64,borderRadius:0}):i.jsx("div",{style:{width:72,height:72,display:"flex",alignItems:"center",justifyContent:"center"},children:i.jsx(Ft,{size:22,color:"var(--text-light)"})})}),i.jsxs("div",{style:{minWidth:0},children:[i.jsx("div",{style:{fontWeight:900,fontSize:"1.05rem"},children:y.product_name}),y.description?i.jsx("div",{style:{fontSize:"0.88rem",color:"var(--text-secondary)",marginTop:4,lineHeight:1.45},children:y.description}):null,_?i.jsxs("div",{style:{marginTop:10,fontSize:"0.9rem",lineHeight:1.5},children:[i.jsx("span",{style:{display:"inline-block",padding:"3px 10px",borderRadius:8,fontWeight:900,color:"var(--secondary)",background:"rgba(245,192,0,0.35)",border:"1px solid rgba(245,192,0,0.5)"},children:w?`عرض ممول مستقل: ${Number.isFinite(N)?N.toFixed(2):y.price} ₪ للقطعة`:`عرض ممول: ${Number.isFinite(N)?N.toFixed(2):y.price} ₪ للقطعة`}),b?i.jsxs("span",{style:{marginInlineStart:10,textDecoration:"line-through",color:"var(--text-secondary)",fontWeight:700},children:["سعر المتجر ",z.toFixed(2)," ₪"]}):null,i.jsxs("div",{style:{marginTop:6,fontWeight:800,color:"var(--secondary)"},children:[Number.isFinite(N)?N.toFixed(2):y.price," ₪ × ",y.quantity," = ",y.line_total," ₪"]})]}):i.jsxs("div",{style:{marginTop:8,fontWeight:800,color:"var(--secondary)"},children:[y.price," ₪ × ",y.quantity," = ",y.line_total," ₪"]}),y.note?i.jsxs("div",{style:{marginTop:8,fontSize:"0.86rem",padding:"8px 10px",background:"var(--surface)",borderRadius:10,border:"1px solid var(--border)"},children:[i.jsx("span",{style:{fontWeight:800},children:"ملاحظة:"})," ",y.note]}):null]})]},v)})}),f.length>0&&i.jsxs("div",{className:"flex-center",style:{justifyContent:"space-between",marginTop:20,padding:"16px 20px",background:"var(--secondary)",color:"var(--primary)",borderRadius:"var(--radius-lg)",fontWeight:900,fontSize:"1.15rem"},children:[i.jsx("span",{children:"الإجمالي"}),i.jsxs("span",{children:[x," ₪"]})]}),i.jsx("p",{style:{textAlign:"center",marginTop:24,color:"var(--text-secondary)",fontSize:"0.95rem"},children:"تم إنشاء هذه القائمة من تطبيق رادار"})]})]}),i.jsx("style",{children:`
        @keyframes spin { to { transform: rotate(360deg); } }
        .spin { animation: spin 0.85s linear infinite; }
      `})]})},_S=[31.5,34.4];function jS(e){return String(e||"").trim().toLowerCase()}function dg(e){const t=Number(e);return Number.isFinite(t)?t:null}function kS(){const{userMapLocation:e,setManualMapLocation:t,clearUserMapLocation:n,requestUserLocation:a,locating:o,locationFocusNonce:l,searchQuery:d,setSearchQuery:h}=Go(),u=Qt(),f=dt(),[x,y]=oc(),v=e||_S,[_,w]=m.useState([]),[N,C]=m.useState([]),[z,b]=m.useState([]),[k,S]=m.useState([]),[E,P]=m.useState(!0),[I,D]=m.useState(null),[T,R]=m.useState(null);m.useEffect(()=>{let te=!0;return P(!0),Promise.all([hi().catch(()=>[]),va().catch(()=>[]),mc(null).catch(()=>[]),fc(v[0],v[1],null).catch(()=>[])]).then(([O,H,V,le])=>{te&&(w(Array.isArray(O)?O:[]),C(Array.isArray(H)?H:[]),S(Array.isArray(V)?V:[]),b(Array.isArray(le)?le:[]))}).finally(()=>{te&&P(!1)}),()=>{te=!1}},[v[0],v[1]]),m.useEffect(()=>{var le,fe;const te=(le=u.state)==null?void 0:le.mapFocus;if(!te)return;const O=Number(te.lat),H=Number(te.lng);if(!Number.isFinite(O)||!Number.isFinite(H))return;t(O,H),D(te.storeId??null),R(te.communityPointId??null);const V=(fe=u.state)==null?void 0:fe.mapPreset;if(V){const Me=new URLSearchParams;V.mode==="community"?Me.set("mode","community"):V.mode==="stores"&&Me.set("mode","stores"),V.category!=null&&String(V.category).trim()!==""&&Me.set("category",String(V.category)),V.cc!=null&&String(V.cc).trim()!==""&&Me.set("cc",String(V.cc));const je=V.q!=null?String(V.q).trim():"";je!==""&&Me.set("q",je),f({pathname:u.pathname,search:Me.toString()},{replace:!0,state:{}})}else f({pathname:u.pathname,search:u.search},{replace:!0,state:{}})},[u.state,u.pathname,u.search,f,t]),m.useEffect(()=>{const te=x.get("q")||"";te!==d&&h(te)},[x]);const U=m.useCallback((te,O)=>{const H=new URLSearchParams(x);O==null||String(O)===""||String(O)==="all"?H.delete(te):H.set(te,String(O)),y(H,{replace:!0})},[x,y]),F=x.get("mode")==="community"?"community":"stores",oe=dg(x.get("category")),ae=dg(x.get("cc")),re=jS(d),X=m.useMemo(()=>{const te=Array.isArray(z)?z:[],O=oe?te.filter(H=>Number(H.category)===Number(oe)):te;return re?O.filter(H=>`${H.store_name||""} ${H.category_name||""} ${H.description||""}`.toLowerCase().includes(re)):O},[z,oe,re]),G=m.useMemo(()=>{const te=Array.isArray(k)?k:[],O=ae?te.filter(H=>Number(H.category)===Number(ae)):te;return re?O.filter(H=>`${H.title||""} ${H.category_name||""} ${H.detail_description||""} ${H.address_text||""}`.toLowerCase().includes(re)):O},[k,ae,re]),M=m.useMemo(()=>{const te=F==="stores"?X:[];if(F!=="stores"||I==null)return te;const O=Number(I);if(!Number.isFinite(O)||te.some(V=>Number(V==null?void 0:V.id)===O))return te;const H=(z||[]).find(V=>Number(V==null?void 0:V.id)===O);return H?[...te,H]:te},[F,X,z,I]),Y=m.useMemo(()=>{const te=F==="community"?G:[];if(F!=="community"||T==null)return te;const O=Number(T);if(!Number.isFinite(O)||te.some(V=>Number(V==null?void 0:V.id)===O))return te;const H=(k||[]).find(V=>Number(V==null?void 0:V.id)===O);return H?[...te,H]:te},[F,G,k,T]),Z=!!re||(F==="stores"?oe!=null:ae!=null),ne=m.useCallback(async()=>{await a()},[a]),J=m.useMemo(()=>"calc(100dvh - 180px)",[]);return i.jsx(ze,{children:i.jsxs("div",{className:"map-page",children:[i.jsx("div",{className:"map-page-stage","aria-busy":E?"true":"false",children:i.jsx(S4,{stores:M,communityPoints:Y,categories:_,userLocation:e,locationFocusNonce:l,onManualLocationPick:t,autoFitStoresWhenNoUserLocation:!1,showGpsOnMap:!0,gpsLocating:o,onGpsClick:ne,onClearUserLocation:n,mapHeight:J,isFullscreen:!0,gpsLabel:"موقعي",gpsLocatingLabel:"جاري الموقع…",gpsFabAlignStart:!0,focusOnResults:Z,focusKind:F==="community"?"community":"stores",focusStoreId:F==="stores"?I:null,focusCommunityPointId:F==="community"?T:null,topControls:i.jsxs("div",{className:"map-topbar",onClick:te=>te.stopPropagation(),children:[i.jsxs("div",{className:"map-topbar-row",children:[i.jsx("button",{type:"button",className:`map-topbar-chip ${F==="stores"?"map-topbar-chip--active":""}`,onClick:()=>U("mode","stores"),children:"المتاجر"}),i.jsx("button",{type:"button",className:`map-topbar-chip ${F==="community"?"map-topbar-chip--active":""}`,onClick:()=>U("mode","community"),children:"الخدمات"}),F==="stores"?i.jsxs("select",{className:"map-topbar-select",value:oe??"all",onChange:te=>U("category",te.target.value),"aria-label":"فلتر الأقسام",children:[i.jsx("option",{value:"all",children:"كل الأقسام"}),_.map(te=>i.jsx("option",{value:te.id,children:te.name},te.id))]}):i.jsxs("select",{className:"map-topbar-select",value:ae??"all",onChange:te=>U("cc",te.target.value),"aria-label":"فلتر الخدمات",children:[i.jsx("option",{value:"all",children:"كل الخدمات"}),N.map(te=>i.jsx("option",{value:te.id,children:te.name},te.id))]})]}),i.jsx("div",{className:"map-topbar-search",children:i.jsx("input",{className:"map-topbar-search-input",value:d,onChange:te=>{const O=te.target.value;h(O),U("q",O)},placeholder:F==="community"?"ابحث عن خدمة أو مؤسسة…":"ابحث عن متجر…"})})]})})}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        `}})]})})}const SS=[31.5,34.4],Wd=12;function Ga(e){const t=Number(e==null?void 0:e.latitude),n=Number(e==null?void 0:e.longitude);return Number.isFinite(t)&&Number.isFinite(n)}function Ud(e,t){const n=u=>u*Math.PI/180,o=n(t[0]-e[0]),l=n(t[1]-e[1]),d=Math.sin(o/2)**2,h=Math.cos(n(e[0]))*Math.cos(n(t[0]))*Math.sin(l/2)**2;return 2*6371*Math.asin(Math.sqrt(d+h))}function NS(){var ae;const{userMapLocation:e,setManualMapLocation:t,requestUserLocation:n,locating:a,locationFocusNonce:o}=Go(),l=e||SS,{showSelect:d}=Oe(),h=dt(),[u,f]=m.useState([]),[x,y]=m.useState(!0),[v,_]=m.useState([]),[w,N]=m.useState(!0),[C,z]=m.useState(null),[b,k]=m.useState(!0),[S,E]=m.useState(1);m.useEffect(()=>{let re=!0;return y(!0),hi().then(X=>{re&&f(Array.isArray(X)?X:[])}).catch(()=>{re&&f([])}).finally(()=>{re&&y(!1)}),()=>{re=!1}},[]),m.useEffect(()=>{let re=!0;return N(!0),fc(l[0],l[1],C).then(X=>{re&&_(Array.isArray(X)?X:[])}).catch(()=>{re&&_([])}).finally(()=>{re&&N(!1)}),()=>{re=!1}},[l[0],l[1],C]),m.useEffect(()=>{E(1)},[C,b]);const P=m.useMemo(()=>(Array.isArray(v)?v:[]).filter(X=>b?Ga(X):!0),[v,b]),I=m.useMemo(()=>{if(!l)return P;const re=l;return[...P].sort((X,G)=>Ga(X)?Ga(G)?Ud(re,[Number(X.latitude),Number(X.longitude)])-Ud(re,[Number(G.latitude),Number(G.longitude)]):-1:1)},[P,l]),D=Math.max(1,Math.ceil(I.length/Wd)),T=Math.min(S,D),R=m.useMemo(()=>{const re=(T-1)*Wd;return I.slice(re,re+Wd)},[I,T]),U=m.useCallback(async()=>{if(x)return;const re=[{id:"__all__",label:"الكل",value:"__all__"},...u.map(G=>({id:String(G.id),label:G.name,value:G.id}))],X=await d("اختر القسم:","تصفية المتاجر",re);X!=null&&z(X==="__all__"?null:Number(X))},[x,u,d]),F=m.useMemo(()=>I.filter(re=>Ga(re)).length,[I]),oe=C==null?"كل الأقسام":((ae=u.find(re=>Number(re.id)===Number(C)))==null?void 0:ae.name)||"القسم";return i.jsx(ze,{children:i.jsxs("div",{className:"stores-page",children:[i.jsxs("section",{className:"stores-hero","aria-label":"عنوان الصفحة وفتح الخريطة",children:[i.jsxs("div",{className:"stores-head",children:[i.jsxs("div",{className:"stores-head__titles",children:[i.jsx("h1",{className:"stores-title",children:"المتاجر"}),i.jsx("p",{className:"stores-sub",children:"فلترة سريعة + خريطة منبثقة عند الضغط."})]}),i.jsxs("div",{className:"stores-controls",children:[i.jsxs("button",{type:"button",className:"stores-filterbtn",onClick:U,disabled:x,title:"تصفية","aria-label":"تصفية المتاجر",children:[i.jsx(Ol,{size:18,strokeWidth:2,"aria-hidden":!0}),i.jsx("span",{children:oe})]}),i.jsxs("label",{className:"stores-onlymapped",children:[i.jsx("input",{type:"checkbox",checked:b,onChange:re=>k(re.target.checked)}),i.jsx("span",{children:"المتاجر الموجودة على الخريطة فقط"})]})]})]}),i.jsxs("button",{type:"button",className:"stores-mini-map",onClick:()=>h("/map"),"aria-label":"فتح الخريطة",children:[i.jsx("span",{className:"stores-mini-map__bg","aria-hidden":!0}),i.jsx("span",{className:"stores-mini-map__shine","aria-hidden":!0}),i.jsxs("span",{className:"stores-mini-map__badge",children:[i.jsx(Hu,{size:16,strokeWidth:2,"aria-hidden":!0}),"اضغط لفتح الخريطة"]}),i.jsxs("span",{className:"stores-mini-map__hint",children:[F," متجر على الخريطة"]})]})]}),w?i.jsx("div",{className:"stores-loading",children:"جاري تحميل المتاجر…"}):R.length===0?i.jsx("div",{className:"stores-empty",children:"لا توجد متاجر ضمن الفلاتر الحالية."}):i.jsx("div",{className:"stores-grid",role:"list",children:R.map(re=>{const X=yc(re,u),G=l&&Ga(re)?Ud(l,[Number(re.latitude),Number(re.longitude)]):null;return i.jsxs(ge,{to:`/stores/${re.id}`,className:"store-card",role:"listitem",children:[i.jsxs("div",{className:"store-card__text",children:[i.jsx("div",{className:"store-card__name",children:re.store_name}),i.jsxs("div",{className:"store-card__meta",children:[i.jsx("span",{className:"store-card__cat",children:re.category_name||"—"}),i.jsx("span",{className:"store-card__dot","aria-hidden":!0}),i.jsx("span",{className:"store-card__dist",children:G!=null?`${G.toFixed(1)} كم`:"بدون مسافة"})]})]}),i.jsx("div",{className:"store-card__thumb","aria-hidden":!0,children:X.type==="image"?i.jsx("img",{className:"store-card__thumb-img",src:X.url,alt:""}):i.jsx("span",{className:"store-card__thumb-emoji",style:{background:X.bg},children:X.emoji})})]},re.id)})}),D>1?i.jsxs("div",{className:"stores-pager","aria-label":"تنقل الصفحات",children:[i.jsx("button",{type:"button",onClick:()=>E(re=>Math.max(1,re-1)),disabled:T<=1,children:"السابق"}),i.jsxs("span",{children:[T," / ",D]}),i.jsx("button",{type:"button",onClick:()=>E(re=>Math.min(D,re+1)),disabled:T>=D,children:"التالي"})]}):null,i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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

        `}})]})})}const Tn=`
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
`,fp={pending:"قيد الانتظار",active:"نشط",rejected:"مرفوض",expired:"منتهي الصلاحية",approved:"مقبول"};function CS(){var d,h,u,f,x,y;const[e,t]=m.useState(null),[n,a]=m.useState(!0);m.useEffect(()=>{let v=!1;return(async()=>{a(!0);try{const _=await ak();v||t(_)}catch{v||t(null)}finally{v||a(!1)}})(),()=>{v=!0}},[]);const o=e==null?void 0:e.users,l=e==null?void 0:e.app_opens;return i.jsx(ze,{children:i.jsxs("div",{className:"admin-dash",children:[i.jsx("h1",{children:"لوحة الإدارة"}),i.jsxs("section",{className:"card admin-section",children:[i.jsx("div",{className:"admin-section-head",children:i.jsx("h2",{children:"ملخص سريع"})}),n?i.jsx("p",{children:"جاري التحميل…"}):e?i.jsxs("div",{className:"admin-cards",style:{marginTop:12},children:[i.jsx("article",{className:"admin-card",children:i.jsxs("div",{className:"admin-card-body",children:[i.jsx("h3",{children:"المستخدمون"}),i.jsxs("p",{className:"muted",children:["الإجمالي: ",(o==null?void 0:o.total)??0," · النشط: ",(o==null?void 0:o.active_total)??0]}),i.jsxs("p",{className:"muted",children:["متسوقين: ",((d=o==null?void 0:o.shopper)==null?void 0:d.total)??0," (نشط ",((h=o==null?void 0:o.shopper)==null?void 0:h.active)??0,")"]}),i.jsxs("p",{className:"muted",children:["تجار: ",((u=o==null?void 0:o.merchant)==null?void 0:u.total)??0," (نشط ",((f=o==null?void 0:o.merchant)==null?void 0:f.active)??0,")"]})]})}),i.jsx("article",{className:"admin-card",children:i.jsxs("div",{className:"admin-card-body",children:[i.jsx("h3",{children:"فتح التطبيق اليوم"}),i.jsx("p",{className:"muted",children:(l==null?void 0:l.today)??""}),i.jsx("p",{style:{fontWeight:900,fontSize:"1.2rem",marginTop:6},children:(l==null?void 0:l.opens_today)??0})]})}),i.jsx("article",{className:"admin-card",children:i.jsxs("div",{className:"admin-card-body",children:[i.jsx("h3",{children:"المتاجر"}),i.jsxs("p",{className:"muted",children:["الإجمالي: ",((x=e==null?void 0:e.stores)==null?void 0:x.total)??0]}),i.jsxs("p",{className:"muted",children:["معلقة: ",((y=e==null?void 0:e.stores)==null?void 0:y.suspended)??0]})]})})]}):i.jsx("p",{className:"admin-empty",children:"تعذر تحميل المؤشرات."})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:Tn}})]})})}function zS(){const{showAlert:e,showConfirm:t}=Oe(),n=(localStorage.getItem("user_name")||"").trim().toLowerCase(),[a,o]=m.useState([]),[l,d]=m.useState(!1),[h,u]=m.useState(!1),[f,x]=m.useState(""),[y,v]=m.useState(""),[_,w]=m.useState(""),[N,C]=m.useState("secondary"),[z,b]=m.useState(null),k=m.useCallback(async()=>{d(!0);try{const P=await nk();o(Array.isArray(P)?P:[])}catch(P){console.error(P),o([]),await e("تعذر تحميل قائمة المدراء.","خطأ")}finally{d(!1)}},[e]);m.useEffect(()=>{k()},[k]);const S=async P=>{if(P.preventDefault(),!f.trim()||!y.trim()||_.length<6){await e("أكمل اسم المستخدم ورقم الهاتف وكلمة مرور لا تقل عن 6 أحرف.","تنبيه");return}u(!0);try{await rk({username:f.trim(),phone_number:y.trim(),password:_,tier:N}),await e(N==="primary"?"تم إنشاء مدير أساسي جديد.":"تم إنشاء مدير فرعي.","تم"),x(""),v(""),w(""),C("secondary"),k()}catch(I){console.error(I),await e(Ae(I,"تعذر إنشاء الحساب."),"خطأ")}finally{u(!1)}},E=async P=>{if(P.is_primary_admin)return;const I=!P.is_active;if(await t(`${I?"تفعيل":"تعطيل"} دخول هذا المدير الفرعي؟`,"تأكيد")){b(P.id);try{await ik(P.id,I),await e(I?"تم التفعيل.":"تم التعطيل.","تم"),k()}catch(R){console.error(R),await e("تعذر تحديث الحساب.","خطأ")}finally{b(null)}}};return i.jsx(ze,{children:i.jsxs("div",{className:"admin-dash",children:[i.jsx("h1",{children:"إدارة المدراء"}),i.jsxs("p",{className:"admin-intro",children:["إنشاء ",i.jsx("strong",{children:"مدير فرعي"})," أو ",i.jsx("strong",{children:"مدير أساسي"})," جديد، وتعطيل أو تفعيل دخول المدير الفرعي فقط."]}),i.jsxs("section",{className:"card admin-section admin-primary-only",children:[i.jsxs("form",{className:"admin-account-form",onSubmit:S,children:[i.jsxs("div",{className:"form-row-grid",children:[i.jsxs("label",{children:["اسم المستخدم",i.jsx("input",{type:"text",value:f,onChange:P=>x(P.target.value),autoComplete:"off"})]}),i.jsxs("label",{children:["رقم الهاتف",i.jsx("input",{type:"text",value:y,onChange:P=>v(P.target.value),autoComplete:"off"})]}),i.jsxs("label",{children:["كلمة المرور",i.jsx("input",{type:"password",value:_,onChange:P=>w(P.target.value),autoComplete:"new-password"})]}),i.jsxs("label",{children:["نوع الحساب",i.jsxs("select",{value:N,onChange:P=>C(P.target.value),children:[i.jsx("option",{value:"secondary",children:"مدير فرعي"}),i.jsx("option",{value:"primary",children:"مدير أساسي (مثلك)"})]})]})]}),i.jsx("button",{type:"submit",className:"btn-ok",disabled:h,children:h?"جاري الإنشاء…":"إنشاء حساب"})]}),l?i.jsx("p",{children:"جاري تحميل المدراء…"}):i.jsx("div",{className:"admin-table-wrap",children:i.jsxs("table",{className:"admin-accounts-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"المستخدم"}),i.jsx("th",{children:"الهاتف"}),i.jsx("th",{children:"النوع"}),i.jsx("th",{children:"الحالة"}),i.jsx("th",{})]})}),i.jsx("tbody",{children:a.map(P=>{const I=P.username.trim().toLowerCase()===n,D=!P.is_primary_admin;return i.jsxs("tr",{children:[i.jsxs("td",{children:[P.username,I?i.jsx("span",{className:"you-badge",children:"أنت"}):null]}),i.jsx("td",{children:P.phone_number}),i.jsx("td",{children:i.jsx("span",{className:P.is_primary_admin?"tier-badge tier-primary":"tier-badge tier-secondary",children:P.is_primary_admin?"أساسي":"فرعي"})}),i.jsx("td",{children:P.is_active?"نشط":"معطّل"}),i.jsx("td",{children:D?i.jsx("button",{type:"button",className:"btn-toggle",disabled:z===P.id||I,onClick:()=>E(P),title:I?"لا يمكنك تعطيل حسابك من هنا":"",children:P.is_active?"تعطيل الدخول":"تفعيل الدخول"}):i.jsx("span",{className:"muted small",children:"—"})})]},P.id)})})]})})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:Tn}})]})})}function PS(){const{showAlert:e,showConfirm:t}=Oe(),{refresh:n}=ba(),[a,o]=m.useState("pending"),[l,d]=m.useState([]),[h,u]=m.useState(!0),[f,x]=m.useState(null),y=m.useCallback(async()=>{u(!0);try{const _=await Yj(a);d(Array.isArray(_)?_:[])}catch(_){console.error(_),d([]),await e("تعذر تحميل الإعلانات.","خطأ")}finally{u(!1)}},[a,e]);m.useEffect(()=>{y()},[y]);const v=async(_,w)=>{if(await t(`تأكيد ${w==="active"?"قبول":"رفض"} هذا الإعلان؟`,"تأكيد")){x(_);try{await $y(_,w),await e(w==="active"?"تم تفعيل الإعلان.":"تم رفض الإعلان.","تم"),await n(),y()}catch(z){console.error(z),await e("تعذر تحديث حالة الإعلان.","خطأ")}finally{x(null)}}};return i.jsx(ze,{children:i.jsxs("div",{className:"admin-dash",children:[i.jsx("h1",{children:"إدارة الإعلانات الممولة"}),i.jsx("p",{className:"admin-intro",children:"راجع إشعار الدفع ثم وافق على الإعلان أو ارفضه."}),i.jsxs("section",{className:"card admin-section",children:[i.jsxs("div",{className:"admin-section-head",children:[i.jsx("h2",{children:"قائمة الإعلانات"}),i.jsxs("select",{className:"admin-filter",value:a,onChange:_=>o(_.target.value),"aria-label":"تصفية حالة الإعلان",children:[i.jsx("option",{value:"pending",children:"بانتظار الموافقة"}),i.jsx("option",{value:"active",children:"نشط"}),i.jsx("option",{value:"rejected",children:"مرفوض"}),i.jsx("option",{value:"expired",children:"منتهي الصلاحية"}),i.jsx("option",{value:"",children:"الكل"})]})]}),h?i.jsx("p",{children:"جاري التحميل…"}):l.length===0?i.jsx("p",{className:"admin-empty",children:"لا توجد إعلانات في هذا الفلتر."}):i.jsx("div",{className:"admin-cards",children:l.map(_=>i.jsxs("article",{className:"admin-card",children:[i.jsxs("div",{className:"admin-card-media",children:[De(_).length>0?i.jsx(ge,{to:`/admin/ads/${_.id}`,title:"مراجعة الطلب",style:{display:"block"},children:i.jsx(kt,{images:De(_),height:120,borderRadius:10})}):null,_.payment_receipt_image?i.jsx(ge,{to:`/admin/ads/${_.id}`,className:"receipt-link",children:"مراجعة إشعار الدفع"}):i.jsx("span",{className:"muted",children:"لا يوجد إشعار دفع"})]}),i.jsxs("div",{className:"admin-card-body",children:[i.jsx("h3",{children:_.title}),i.jsxs("p",{className:"store-line",children:["المتجر: ",_.store_name||`#${_.store}`]}),i.jsxs("p",{className:"desc",children:["سعر المنتج: ",Number(_.product_price)>0?`${Number(_.product_price).toFixed(2)} ₪`:"—"," — الدفع:"," ",_.payment_method_label||_.payment_method||"—"]}),i.jsx("p",{className:"desc",children:_.description}),i.jsxs("p",{className:"status-pill",children:["الحالة: ",i.jsx("strong",{children:fp[_.status]||_.status})]}),_.status==="pending"?i.jsxs("div",{className:"admin-actions",children:[i.jsx("button",{type:"button",className:"btn-ok",disabled:f===_.id,onClick:()=>v(_.id,"active"),children:"قبول وتفعيل"}),i.jsx("button",{type:"button",className:"btn-no",disabled:f===_.id,onClick:()=>v(_.id,"rejected"),children:"رفض"})]}):null]})]},_.id))})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:Tn}})]})})}function ES(){var C;const{adId:e}=xa(),t=dt(),{showAlert:n,showConfirm:a}=Oe(),{refresh:o}=ba(),[l,d]=m.useState(null),[h,u]=m.useState(!0),[f,x]=m.useState(!1),[y,v]=m.useState(!1),_=m.useCallback(async()=>{if(e){u(!0);try{const z=await Jj(e);d(z),v(!1)}catch(z){console.error(z),d(null),await n("تعذر تحميل بيانات الإعلان.","خطأ")}finally{u(!1)}}},[e,n]);m.useEffect(()=>{_()},[_]);const w=async z=>{if(!(!(l!=null&&l.id)||!await a(`تأكيد ${z==="active"?"قبول":"رفض"} هذا الإعلان؟`,"تأكيد"))){x(!0);try{await $y(l.id,z),await n(z==="active"?"تم تفعيل الإعلان.":"تم رفض الإعلان.","تم"),await o(),t("/admin/ads")}catch(S){console.error(S),await n("تعذر تحديث حالة الإعلان.","خطأ")}finally{x(!1)}}},N=z=>{const b=Number(z);return Number.isFinite(b)?b.toFixed(2):"—"};return i.jsx(ze,{children:i.jsxs("div",{className:"admin-dash admin-ad-review",children:[i.jsxs(ge,{to:"/admin/ads",className:"admin-back-link",children:[i.jsx(Jw,{size:18,"aria-hidden":!0}),"العودة لقائمة الإعلانات"]}),i.jsx("h1",{children:"مراجعة طلب إعلان ممول"}),i.jsx("p",{className:"admin-intro",children:"تُعرض صور الإعلان وإشعار الدفع هنا داخل الموقع. بعد التحقق يمكنك القبول أو الرفض."}),h?i.jsx("p",{children:"جاري التحميل…"}):l?i.jsxs(i.Fragment,{children:[i.jsxs("section",{className:"card admin-section",children:[i.jsx("h2",{style:{marginTop:0},children:"إشعار الدفع"}),l.payment_receipt_image&&!y?i.jsx("div",{className:"admin-review-receipt-wrap",children:i.jsx("img",{src:l.payment_receipt_image,alt:"إشعار الدفع",className:"admin-review-receipt-img",onError:()=>v(!0),loading:"lazy",referrerPolicy:"no-referrer"})}):i.jsxs("div",{className:"admin-review-receipt-wrap",style:{padding:14},children:[i.jsx("p",{className:"muted",style:{margin:0,lineHeight:1.6},children:l.payment_receipt_image?"تعذر عرض صورة إشعار الدفع حالياً.":"لا يوجد صورة لإشعار الدفع."}),l.payment_receipt_image?i.jsx("a",{href:l.payment_receipt_image,target:"_blank",rel:"noreferrer noopener",style:{display:"inline-flex",marginTop:10,fontWeight:900,color:"var(--secondary)",textDecoration:"underline"},children:"فتح الصورة في تبويب جديد"}):null]})]}),i.jsxs("section",{className:"card admin-section",children:[i.jsx("h2",{style:{marginTop:0},children:"صور الإعلان"}),De(l).length>0?i.jsx("div",{className:"admin-review-receipt-wrap",children:i.jsx(kt,{images:De(l),height:260,borderRadius:12})}):i.jsx("p",{className:"muted",children:"لا توجد صور للإعلان."})]}),i.jsxs("section",{className:"card admin-section",children:[i.jsx("h2",{style:{marginTop:0},children:"التفاصيل"}),i.jsxs("p",{className:"desc",children:[i.jsx("strong",{children:"العنوان:"})," ",l.title]}),i.jsxs("p",{className:"desc",children:[i.jsx("strong",{children:"المتجر:"})," ",l.store_name||`#${l.store}`]}),i.jsxs("p",{className:"desc",children:[i.jsx("strong",{children:"الوصف:"})," ",l.description]}),i.jsxs("p",{className:"desc",children:[i.jsx("strong",{children:"المنتج المرتبط:"})," ",(C=l.product_details)!=null&&C.name?i.jsxs(i.Fragment,{children:[l.product_details.name," (معرّف ",l.product,")"]}):l.product?i.jsxs(i.Fragment,{children:["معرّف المنتج #",l.product]}):i.jsx(i.Fragment,{children:"لا يوجد"})]}),i.jsxs("p",{className:"desc",children:[i.jsx("strong",{children:"سعر المنتج في الإعلان:"})," ",N(l.product_price)," ₪"]}),i.jsxs("p",{className:"desc",children:[i.jsx("strong",{children:"قناة الدفع:"})," ",l.payment_method_label||l.payment_method||"—"]}),i.jsxs("p",{className:"status-pill",children:["الحالة: ",i.jsx("strong",{children:fp[l.status]||l.status})]}),l.status==="pending"?i.jsxs("div",{className:"admin-actions",children:[i.jsx("button",{type:"button",className:"btn-ok",disabled:f,onClick:()=>w("active"),children:"قبول وتفعيل"}),i.jsx("button",{type:"button",className:"btn-no",disabled:f,onClick:()=>w("rejected"),children:"رفض"})]}):null]})]}):i.jsx("p",{className:"admin-empty",children:"لم يُعثَر على الإعلان."}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`${Tn}
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
          `}})]})})}function LS(){const{showAlert:e,showConfirm:t}=Oe(),{refresh:n}=ba(),[a,o]=m.useState("pending"),[l,d]=m.useState([]),[h,u]=m.useState(!0),[f,x]=m.useState(null),y=m.useCallback(async()=>{u(!0);try{const w=await Xj(a);d(Array.isArray(w)?w:[])}catch(w){console.error(w),d([]),await e("تعذر تحميل طلبات التجديد.","خطأ")}finally{u(!1)}},[a,e]);m.useEffect(()=>{y()},[y]);const v=async w=>{if(await t("تأكيد قبول طلب التجديد وتمديد الاشتراك؟","تأكيد")){x(w);try{await ek(w),await e("تم قبول الطلب وتمديد الاشتراك.","تم"),await n(),y()}catch(C){console.error(C),await e("تعذر قبول الطلب.","خطأ")}finally{x(null)}}},_=async w=>{if(await t("تأكيد رفض طلب التجديد؟","تأكيد")){x(w);try{await tk(w),await e("تم رفض الطلب.","تم"),await n(),y()}catch(C){console.error(C),await e("تعذر رفض الطلب.","خطأ")}finally{x(null)}}};return i.jsx(ze,{children:i.jsxs("div",{className:"admin-dash",children:[i.jsx("h1",{children:"إدارة الاشتراكات"}),i.jsxs("p",{className:"admin-intro",children:["مراجعة طلبات ",i.jsx("strong",{children:"تجديد الاشتراك"})," وإشعارات الدفع. قيمة التجديد المعتمدة في الأرباح: ",i.jsx("strong",{children:"10 شيكل"}),"."]}),i.jsxs("section",{className:"card admin-section",children:[i.jsxs("div",{className:"admin-section-head",children:[i.jsx("h2",{children:"طلبات التجديد"}),i.jsxs("select",{className:"admin-filter",value:a,onChange:w=>o(w.target.value),"aria-label":"تصفية حالة طلب التجديد",children:[i.jsx("option",{value:"pending",children:"بانتظار المراجعة"}),i.jsx("option",{value:"approved",children:"مقبول"}),i.jsx("option",{value:"rejected",children:"مرفوض"}),i.jsx("option",{value:"",children:"الكل"})]})]}),h?i.jsx("p",{children:"جاري التحميل…"}):l.length===0?i.jsx("p",{className:"admin-empty",children:"لا توجد طلبات في هذا الفلتر."}):i.jsx("div",{className:"admin-cards",children:l.map(w=>i.jsxs("article",{className:"admin-card renew-card",children:[i.jsx("div",{className:"admin-card-media",children:w.receipt_image?i.jsx("a",{href:w.receipt_image,target:"_blank",rel:"noopener noreferrer",children:i.jsx("img",{src:w.receipt_image,alt:"إشعار الدفع"})}):i.jsx("span",{className:"muted",children:"لا صورة"})}),i.jsxs("div",{className:"admin-card-body",children:[i.jsx("h3",{children:w.store_name||`متجر #${w.store}`}),w.notes?i.jsxs("p",{className:"desc",children:["ملاحظات التاجر: ",w.notes]}):null,i.jsxs("p",{className:"status-pill",children:["الحالة: ",i.jsx("strong",{children:fp[w.status]||w.status})]}),w.decided_at?i.jsxs("p",{className:"muted small",children:["قرار سابق: ",w.decided_by_username?`${w.decided_by_username} — `:"",w.decided_at]}):null,w.status==="pending"?i.jsxs("div",{className:"admin-actions",children:[i.jsx("button",{type:"button",className:"btn-ok",disabled:f===w.id,onClick:()=>v(w.id),children:"قبول وتمديد الاشتراك"}),i.jsx("button",{type:"button",className:"btn-no",disabled:f===w.id,onClick:()=>_(w.id),children:"رفض"})]}):null]})]},w.id))})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:Tn}})]})})}function MS(e){if(!e)return"—";try{const t=new Date(e);return Number.isNaN(t.getTime())?String(e):t.toLocaleString("ar",{dateStyle:"medium",timeStyle:"short"})}catch{return String(e)}}function ug(e){if(!e)return null;const t=new Date(e);if(Number.isNaN(t.getTime()))return null;const n=new Date,a=t.getTime()-n.getTime(),o=Math.ceil(a/(24*60*60*1e3));return o>0?`متبقي ${o} يوم`:o===0?"ينتهي اليوم":`منتهي منذ ${Math.abs(o)} يوم`}function TS(){var U;const{showAlert:e,showConfirm:t}=Oe(),[n,a]=m.useState(""),[o,l]=m.useState(""),[d,h]=m.useState(null),[u,f]=m.useState([]),[x,y]=m.useState(!0),[v,_]=m.useState([]),[w,N]=m.useState({total_all_stores:0,total_filtered:0}),[C,z]=m.useState(!1),[b,k]=m.useState(null);m.useEffect(()=>{let F=!1;return(async()=>{y(!0);try{const oe=await hi();F||f(Array.isArray(oe)?oe:[])}catch{F||f([])}finally{F||y(!1)}})(),()=>{F=!0}},[]);const S=m.useCallback(async()=>{var F,oe;z(!0);try{const ae=await mk(n,d);ae&&Array.isArray(ae.results)?(_(ae.results),N({total_all_stores:((F=ae.meta)==null?void 0:F.total_all_stores)??ae.results.length,total_filtered:((oe=ae.meta)==null?void 0:oe.total_filtered)??ae.results.length})):Array.isArray(ae)?(_(ae),N({total_all_stores:ae.length,total_filtered:ae.length})):(_([]),N({total_all_stores:0,total_filtered:0}))}catch(ae){console.error(ae),_([]),N({total_all_stores:0,total_filtered:0}),await e("تعذر تحميل قائمة المتاجر. تأكد أنك مدير أساسي.","خطأ")}finally{z(!1)}},[n,d,e]);m.useEffect(()=>{S()},[S]);const E=F=>{F.preventDefault(),a(o.trim())},P=async F=>{const oe=!F.is_suspended_by_admin;if(await t(`هل تريد تأكيد: ${oe?"تعليق المتجر على الخريطة والعامة":"إلغاء التعليق وإتاحة الظهور ضمن شروط الاشتراك"}؟`,"تأكيد الإجراء")){k(F.id);try{await fk(F.id,oe),await e(oe?"تم تعليق المتجر.":"تم إلغاء التعليق.","تم"),S()}catch(X){console.error(X),await e("تعذر تحديث حالة المتجر.","خطأ")}finally{k(null)}}},I=w.total_all_stores??0,D=w.total_filtered??v.length,T=!!n||d!=null,R=[n?`بحث «${n}»`:null,d!=null?`قسم: ${((U=u.find(F=>F.id===d))==null?void 0:U.name)||d}`:null].filter(Boolean).join(" — ");return i.jsx(ze,{children:i.jsxs("div",{className:"admin-dash admin-stores-page",children:[i.jsxs("div",{className:"admin-stores-heading-row",children:[i.jsxs("div",{children:[i.jsx("h1",{style:{margin:"0 0 6px"},children:"المتاجر المشتركة"}),i.jsxs("p",{className:"admin-intro",style:{margin:0},children:["عمود ",i.jsx("strong",{children:"القسم"})," لكل متجر، والعدد المرفوع يطابق دائماً فلترة القسم والبحث معاً (ومع «الكل» بدون بحث يظهر إجمالي المتاجر المسجّلة)."]})]}),i.jsxs("div",{className:"admin-stores-total-pill",title:T?`${D} متجراً مطابقاً للفلترة${R?` (${R})`:""} — إجمالي النظام ${I}`:`إجمالي المتاجر المسجّلة: ${D}`,children:[i.jsx("span",{className:"admin-stores-total-num",children:D}),i.jsx("span",{className:"admin-stores-total-label",children:"متجر ضمن الفلتر"}),T&&I!==D?i.jsxs("span",{className:"admin-stores-total-sub",children:["من أصل ",I," في النظام"]}):null]})]}),i.jsx("p",{className:"admin-stores-filter-hint muted",style:{marginBottom:"1rem"},children:T?i.jsxs(i.Fragment,{children:["الفلتر النشط: ",R||"—"," — العداد أعلاه = ",i.jsx("strong",{children:D})," متجراً."]}):i.jsxs(i.Fragment,{children:["لا يوجد فلتر نشط — يُعرض كل المتاجر المسجّلة (",i.jsx("strong",{children:D}),")."]})}),i.jsxs("section",{className:"card admin-section",children:[i.jsxs("div",{className:"map-filters admin-store-filters",style:{marginBottom:"1rem",padding:"12px 14px"},children:[i.jsx("div",{style:{fontWeight:800,marginBottom:8,color:"var(--secondary)"},children:"فلترة حسب القسم"}),i.jsx("p",{style:{margin:"0 0 10px",fontSize:"0.88rem",color:"var(--text-secondary)"},children:"نفس منطق الخريطة: اختر قسماً أو «الكل»، ويُطبَّق مع حقل البحث معاً."}),x?i.jsx("p",{style:{margin:0,color:"var(--text-secondary)"},children:"جاري تحميل الأقسام…"}):i.jsxs("div",{className:"category-chips",children:[i.jsx("button",{type:"button",className:`chip ${d==null?"chip-active":""}`,onClick:()=>h(null),children:"الكل"}),u.map(F=>i.jsx("button",{type:"button",className:`chip ${d===F.id?"chip-active":""}`,onClick:()=>h(F.id),children:F.name},F.id))]})]}),i.jsx("form",{className:"admin-account-form",onSubmit:E,style:{marginBottom:"1rem"},children:i.jsxs("div",{className:"form-row-grid",style:{alignItems:"flex-end"},children:[i.jsxs("label",{style:{flex:1},children:["بحث (يُركَّب مع القسم)",i.jsx("input",{type:"search",value:o,onChange:F=>l(F.target.value),placeholder:"اسم المتجر، المستخدم، الجوال، العنوان التفصيلي…",autoComplete:"off"})]}),i.jsx("button",{type:"submit",className:"btn-ok",children:"تنفيذ البحث"}),i.jsx("button",{type:"button",className:"btn-toggle",onClick:()=>{l(""),a(""),h(null)},children:"مسح الكل"})]})}),C?i.jsx("p",{children:"جاري التحميل…"}):i.jsxs("div",{className:"admin-table-wrap",children:[i.jsxs("table",{className:"admin-accounts-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"المتجر"}),i.jsx("th",{children:"التقييم"}),i.jsx("th",{children:"القسم"}),i.jsx("th",{children:"العنوان التفصيلي"}),i.jsx("th",{children:"صاحب المتجر"}),i.jsx("th",{children:"الجوال"}),i.jsx("th",{children:"الإحداثيات والخريطة"}),i.jsx("th",{children:"ينتهي الاشتراك"}),i.jsx("th",{children:"للعامة"}),i.jsx("th",{})]})}),i.jsx("tbody",{children:v.map(F=>{var oe;return i.jsxs("tr",{children:[i.jsxs("td",{children:[i.jsx("strong",{children:F.store_name}),i.jsxs("span",{className:"muted small",style:{display:"block"},children:["#",F.id]})]}),i.jsx("td",{children:F.rating_count>0&&F.rating_average!=null?i.jsxs(i.Fragment,{children:[i.jsx("strong",{dir:"ltr",children:Number(F.rating_average).toFixed(1)}),i.jsxs("span",{className:"muted small",style:{display:"block"},children:[F.rating_count," تقييم"]})]}):i.jsx("span",{className:"muted small",children:"— بدون تقييم"})}),i.jsx("td",{children:F.category_name?i.jsx("span",{className:"admin-store-category-cell",children:F.category_name}):i.jsx("span",{className:"muted small",children:"— بدون قسم"})}),i.jsx("td",{style:{maxWidth:"280px",lineHeight:1.5},children:(oe=F.location_address)!=null&&oe.trim()?i.jsx("span",{children:F.location_address.trim()}):i.jsx("span",{className:"muted small",children:"— لم يُدخل عنوان نصي"})}),i.jsx("td",{children:F.merchant_username||"—"}),i.jsx("td",{dir:"ltr",style:{textAlign:"right"},children:F.merchant_phone||"—"}),i.jsx("td",{children:F.latitude!=null&&F.longitude!=null?i.jsxs(i.Fragment,{children:[i.jsxs("span",{className:"muted small",dir:"ltr",style:{display:"block"},children:[Number(F.latitude).toFixed(5),", ",Number(F.longitude).toFixed(5)]}),F.map_preview_url?i.jsx("a",{href:F.map_preview_url,target:"_blank",rel:"noreferrer",children:"فتح على الخريطة"}):null]}):i.jsx("span",{className:"muted small",children:"لم يُحدد"})}),i.jsxs("td",{children:[MS(F.subscription_end_date),ug(F.subscription_end_date)?i.jsx("span",{className:"muted small",style:{display:"block"},children:ug(F.subscription_end_date)}):null,i.jsx("span",{className:"muted small",style:{display:"block"},children:F.subscription_is_active?"علم نشط":"علم غير نشط"}),F.is_suspended_by_admin?i.jsx("span",{className:"tier-badge tier-secondary",style:{marginTop:"0.25rem"},children:"معلّق إدارياً"}):null]}),i.jsx("td",{children:F.is_publicly_visible?i.jsx("span",{className:"tier-badge tier-primary",children:"يظهر"}):i.jsx("span",{className:"tier-badge tier-secondary",children:"مخفي"})}),i.jsx("td",{children:i.jsx("button",{type:"button",className:"btn-toggle",disabled:b===F.id,onClick:()=>P(F),children:F.is_suspended_by_admin?"رفع التعليق":"تعليق المتجر"})})]},F.id)})})]}),!C&&v.length===0?i.jsx("p",{className:"muted",children:"لا توجد نتائج."}):null]})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:Tn}}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        `}})]})})}const AS=[31.5,34.4];function IS(){const{showAlert:e,showPrompt:t,showConfirm:n}=Oe(),[a,o]=m.useState("pending"),[l,d]=m.useState([]),[h,u]=m.useState(!0),[f,x]=m.useState(null),[y,v]=m.useState([]),[_,w]=m.useState(!0),[N,C]=m.useState(""),[z,b]=m.useState(""),[k,S]=m.useState(""),[E,P]=m.useState(""),[I,D]=m.useState(null),[T,R]=m.useState(""),[U,F]=m.useState(""),[oe,ae]=m.useState(!1),[re,X]=m.useState(!1),G=m.useCallback(async()=>{u(!0);try{const O=await Oj(a);d(Array.isArray(O)?O:[])}catch(O){console.error(O),d([]),await e("تعذر تحميل الطلبات.","خطأ")}finally{u(!1)}},[a,e]);m.useEffect(()=>{G()},[G]),m.useEffect(()=>{let O=!1;return(async()=>{try{const H=await va();O||v(Array.isArray(H)?H:[])}catch{O||v([])}finally{O||w(!1)}})(),()=>{O=!0}},[]);const M=m.useMemo(()=>y.find(O=>String(O.id)===String(N)),[y,N]),Y=(M==null?void 0:M.slug)||"",Z=async(O,H)=>{let V="";if(H==="reject"){if(V=await t("أدخل سبب الرفض (مطلوب):","سبب الرفض…","رفض الطلب",""),V==null)return;if(V=String(V).trim(),!V){await e("سبب الرفض مطلوب.","تنبيه");return}}else if(H==="approve"&&!await n("تأكيد اعتماد هذه النقطة وإظهارها على الخريطة؟","تأكيد"))return;x(O);try{await Bj(O,H,V),await e(H==="approve"?"تم الاعتماد.":H==="reject"?"تم الرفض.":H==="hide"?"تم إخفاء النقطة عن العامة.":"تم إظهار النقطة للعامة.","تم"),await refreshPendingCounts(),G()}catch(le){await e(Ae(le,"تعذر التحديث."),"خطأ")}finally{x(null)}},ne=async O=>{if(O.preventDefault(),!N){await e("اختر القسم.","تنبيه");return}if(!z.trim()||!k.trim()||!E.trim()){await e("عنوان ووصف وعنوان نصي مطلوبة.","تنبيه");return}if(!I){await e("حدد الموقع على الخريطة.","تنبيه");return}const H={category:Number(N),title:z.trim(),detail_description:k.trim(),address_text:E.trim(),latitude:I[0],longitude:I[1]};if(Y==="water"){if(T!=="true"&&T!=="false"){await e("حدد صلاحية الشرب للمياه.","تنبيه");return}H.water_is_potable=T==="true"}else H.water_is_potable=null;if(Y==="institution"){if(!["local","international","charity"].includes(U)){await e("اختر نطاق المؤسسة.","تنبيه");return}H.institution_scope=U}else H.institution_scope="";ae(!0);try{await Wy(H),await e("تمت إضافة النقطة معتمدة مباشرة.","تم"),b(""),S(""),P(""),D(null),R(""),F(""),G()}catch(V){await e(Ae(V,"تعذر الإضافة."),"خطأ")}finally{ae(!1)}},J=I||AS,te=async()=>{if(!navigator.geolocation){await e("المتصفح لا يدعم تحديد الموقع.","تنبيه");return}X(!0);try{const O=await Vo({maxWaitMs:22e3,goodEnoughM:110});D([O.latitude,O.longitude]);const H=O.accuracy;H!=null&&H>1200?await e(`تم وضع الدبوس على موقعك. الدقة تقريبية (~${Math.round(H)} م). على الكمبيوتر غالباً لا يوجد GPS؛ للدقة استخدم الهاتف أو انقر الموقع يدوياً.`,"موقع تقريبي"):await e("تم ضبط الدبوس على موقعك الحالي.","تم")}catch{await e("لم نتمكن من تحديد موقعك. تأكد من السماح بالوصول للموقع في المتصفح.","الموقع")}finally{X(!1)}};return i.jsx(ze,{children:i.jsxs("div",{className:"admin-dash",children:[i.jsx("h1",{children:"الخدمات المجتمعية"}),i.jsx("p",{className:"admin-intro",children:"راجع طلبات المتسوّقين والتجار، أو أضف نقاطاً معتمدة مباشرة. المعتمد فقط يظهر على الخريطة وصفحة الخدمات."}),i.jsxs("section",{className:"card admin-section",children:[i.jsxs("div",{className:"admin-section-head",children:[i.jsx("h2",{children:"الطلبات والنقاط"}),i.jsxs("select",{className:"admin-filter",value:a,onChange:O=>o(O.target.value),"aria-label":"تصفية الحالة",children:[i.jsx("option",{value:"pending",children:"قيد المراجعة"}),i.jsx("option",{value:"approved",children:"معتمد"}),i.jsx("option",{value:"rejected",children:"مرفوض"}),i.jsx("option",{value:"",children:"الكل"})]})]}),h?i.jsx("p",{children:"جاري التحميل…"}):l.length===0?i.jsx("p",{className:"admin-empty",children:"لا توجد عناصر في هذا الفلتر."}):i.jsx("div",{className:"admin-cards",children:l.map(O=>i.jsx("article",{className:"admin-card",children:i.jsxs("div",{className:"admin-card-body",children:[i.jsx("h3",{children:O.title}),i.jsxs("p",{className:"muted",children:[O.category_name," · ",O.status==="pending"?"قيد المراجعة":O.status==="approved"?"معتمد":"مرفوض"]}),i.jsx("p",{style:{fontSize:"0.9rem",lineHeight:1.5},children:O.detail_description}),i.jsx("p",{style:{fontSize:"0.85rem",color:"#666"},children:O.address_text}),i.jsxs("p",{style:{fontSize:"0.82rem",color:"#888"},children:["من: ",O.submitted_by_username||O.submitted_by]}),O.status==="rejected"&&O.rejection_reason?i.jsxs("p",{style:{fontSize:"0.85rem",color:"#c0392b"},children:["سبب الرفض: ",O.rejection_reason]}):null,O.status==="pending"?i.jsxs("div",{className:"admin-actions",style:{marginTop:12},children:[i.jsx("button",{type:"button",className:"btn-ok",disabled:f===O.id,onClick:()=>Z(O.id,"approve"),children:"اعتماد"}),i.jsx("button",{type:"button",className:"btn-no",disabled:f===O.id,onClick:()=>Z(O.id,"reject"),children:"رفض"})]}):O.status==="approved"?i.jsx("div",{className:"admin-actions",style:{marginTop:12},children:i.jsx("button",{type:"button",className:O.is_hidden_by_admin?"btn-ok":"btn-no",disabled:f===O.id,onClick:()=>Z(O.id,O.is_hidden_by_admin?"unhide":"hide"),children:O.is_hidden_by_admin?"إظهار للعامة":"إخفاء عن العامة"})}):null]})},O.id))})]}),i.jsxs("section",{className:"card admin-section",style:{marginTop:24},children:[i.jsx("h2",{children:"إضافة نقطة معتمدة مباشرة"}),_?i.jsx("p",{children:"جاري تحميل الأقسام…"}):i.jsxs("form",{onSubmit:ne,children:[i.jsx("label",{style:{display:"block",fontWeight:800,margin:"12px 0 6px"},children:"القسم"}),i.jsxs("select",{value:N,onChange:O=>{C(O.target.value),R(""),F("")},style:{width:"100%",maxWidth:420,padding:10,borderRadius:10},required:!0,children:[i.jsx("option",{value:"",children:"— اختر —"}),y.map(O=>i.jsx("option",{value:O.id,children:O.name},O.id))]}),Y==="water"?i.jsxs("div",{style:{marginTop:12},children:[i.jsx("div",{style:{fontWeight:800,marginBottom:6},children:"المياه"}),i.jsxs("label",{style:{marginRight:16},children:[i.jsx("input",{type:"radio",name:"aw",checked:T==="true",onChange:()=>R("true")})," ","صالحة للشرب"]}),i.jsxs("label",{children:[i.jsx("input",{type:"radio",name:"aw",checked:T==="false",onChange:()=>R("false")})," ","غير صالحة"]})]}):null,Y==="institution"?i.jsxs("div",{style:{marginTop:12},children:[i.jsx("label",{style:{display:"block",fontWeight:800,marginBottom:6},children:"نطاق المؤسسة"}),i.jsxs("select",{value:U,onChange:O=>F(O.target.value),style:{width:"100%",maxWidth:420,padding:10,borderRadius:10},children:[i.jsx("option",{value:"",children:"— اختر —"}),i.jsx("option",{value:"local",children:"محلية"}),i.jsx("option",{value:"international",children:"عالمية"}),i.jsx("option",{value:"charity",children:"خيرية"})]})]}):null,i.jsx("label",{style:{display:"block",fontWeight:800,margin:"12px 0 6px"},children:"العنوان"}),i.jsx("input",{value:z,onChange:O=>b(O.target.value),style:{width:"100%",maxWidth:420,padding:10,borderRadius:10},required:!0}),i.jsx("label",{style:{display:"block",fontWeight:800,margin:"12px 0 6px"},children:"الوصف التفصيلي"}),i.jsx("textarea",{value:k,onChange:O=>S(O.target.value),rows:4,style:{width:"100%",maxWidth:520,padding:10,borderRadius:10},required:!0}),i.jsx("label",{style:{display:"block",fontWeight:800,margin:"12px 0 6px"},children:"العنوان النصي"}),i.jsx("textarea",{value:E,onChange:O=>P(O.target.value),rows:2,style:{width:"100%",maxWidth:520,padding:10,borderRadius:10},required:!0}),i.jsx("p",{style:{marginTop:12,fontWeight:800},children:"الخريطة"}),i.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:10,alignItems:"center",marginBottom:8},children:[i.jsx(Nt,{type:"button",variant:"secondary",loading:re,onClick:te,style:{width:"auto"},confirm:"استخدام موقع جهازك الحالي؟",showErrorAlert:!1,children:"موقعي الحالي"}),i.jsxs("span",{style:{fontSize:"0.88rem",color:"#666"},children:["أو انقر على الخريطة.",I?` ${I[0].toFixed(5)}, ${I[1].toFixed(5)}`:""]})]}),i.jsx("div",{style:{maxWidth:520,marginTop:8,borderRadius:12,overflow:"hidden"},children:i.jsxs(si,{center:J,zoom:14,minZoom:10,maxZoom:19,scrollWheelZoom:!0,style:{height:"clamp(240px, 48dvh, 360px)",width:"100%"},children:[i.jsx(li,{}),i.jsx(ci,{}),i.jsx(Io,{position:I}),i.jsx(ua,{onPick:(O,H)=>D([O,H])}),I?i.jsx(Gn,{position:I,children:i.jsx(Kn,{children:"موقع النقطة"})}):null]})}),i.jsx("div",{style:{marginTop:16},children:i.jsx(Nt,{type:"submit",loading:oe,confirm:"حفظ نقطة الخدمة المجتمعية كمعتمدة؟",showErrorAlert:!1,children:"حفظ كمعتمد"})})]})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:Tn}})]})})}function RS(){const{showAlert:e,showConfirm:t}=Oe(),[n,a]=m.useState(""),[o,l]=m.useState(""),[d,h]=m.useState(!0),[u,f]=m.useState(null),[x,y]=m.useState([]),v=m.useCallback(async()=>{h(!0);try{const C=await hk(n,o);y(Array.isArray(C==null?void 0:C.results)?C.results:[])}catch(C){y([]),await e(Ae(C,"تعذر تحميل المستخدمين."),"خطأ")}finally{h(!1)}},[n,o,e]);m.useEffect(()=>{v()},[v]);const _=C=>C==="merchant"?"تاجر":C==="shopper"?"متسوق":C==="admin"?"مدير":C,w=async C=>{const z=!C.is_active;if(await t(z?`تفعيل المستخدم «${C.username}»؟`:`إيقاف المستخدم «${C.username}»؟ سيتم منعه من الدخول، وإن كان تاجرًا سيتم تعليق متجره.`,"تأكيد")){f(C.id);try{await pk(C.id,z),await e(z?"تم تفعيل الحساب.":"تم إيقاف الحساب.","تم"),await v()}catch(k){await e(Ae(k,"تعذر تحديث الحساب."),"خطأ")}finally{f(null)}}},N=m.useMemo(()=>x.length,[x]);return i.jsx(ze,{children:i.jsxs("div",{className:"admin-dash",children:[i.jsx("h1",{children:"المستخدمون"}),i.jsx("p",{className:"admin-intro",children:"بحث وتفعيل/إيقاف حسابات المتسوقين والتجار."}),i.jsxs("section",{className:"card admin-section",children:[i.jsxs("div",{className:"admin-section-head",style:{alignItems:"flex-end",gap:12,flexWrap:"wrap"},children:[i.jsxs("div",{style:{flex:"1 1 260px"},children:[i.jsx("label",{className:"admin-label",htmlFor:"u-q",children:"بحث"}),i.jsx("input",{id:"u-q",className:"admin-input",value:n,onChange:C=>a(C.target.value),placeholder:"اسم المستخدم أو رقم الهاتف…"})]}),i.jsxs("div",{style:{width:200},children:[i.jsx("label",{className:"admin-label",htmlFor:"u-type",children:"النوع"}),i.jsxs("select",{id:"u-type",className:"admin-filter",value:o,onChange:C=>l(C.target.value),children:[i.jsx("option",{value:"",children:"الكل"}),i.jsx("option",{value:"shopper",children:"متسوق"}),i.jsx("option",{value:"merchant",children:"تاجر"}),i.jsx("option",{value:"admin",children:"مدير"})]})]}),i.jsx("button",{type:"button",className:"btn-primary",onClick:v,style:{height:44},children:"تحديث"})]}),d?i.jsx("p",{children:"جاري التحميل…"}):x.length===0?i.jsx("p",{className:"admin-empty",children:"لا توجد نتائج."}):i.jsxs(i.Fragment,{children:[i.jsxs("p",{className:"muted",style:{marginTop:8},children:["عدد النتائج: ",N]}),i.jsx("div",{className:"admin-cards",style:{marginTop:12},children:x.map(C=>i.jsx("article",{className:"admin-card",children:i.jsxs("div",{className:"admin-card-body",children:[i.jsx("h3",{style:{marginBottom:6},children:C.username}),i.jsxs("p",{className:"muted",style:{marginTop:0},children:[_(C.user_type)," · ",C.phone_number]}),i.jsxs("p",{className:"muted",style:{marginTop:6},children:["الحالة: ",C.is_active?"نشط":"موقوف"," · التحقق: ",C.is_whatsapp_verified?"تم":"لا"]}),i.jsx("div",{className:"admin-actions",style:{marginTop:12},children:i.jsx("button",{type:"button",className:C.is_active?"btn-no":"btn-ok",disabled:u===C.id,onClick:()=>w(C),children:C.is_active?"إيقاف الحساب":"تفعيل الحساب"})})]})},C.id))})]})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:Tn}})]})})}function hg(e){if(!e)return"—";try{const t=new Date(e);return Number.isNaN(t.getTime())?String(e):t.toLocaleString("ar",{dateStyle:"medium",timeStyle:"short"})}catch{return String(e)}}function OS(){const{showAlert:e}=Oe(),[t,n]=m.useState(""),[a,o]=m.useState(""),[l,d]=m.useState(""),[h,u]=m.useState(""),[f,x]=m.useState(""),[y,v]=m.useState(!1),[_,w]=m.useState([]),[N,C]=m.useState({total_count:0,total_amount_ils:"0.00"}),z=m.useCallback(async()=>{v(!0);try{const b=await uk({q:t,from:l,to:h,method:f,kind:a});w(Array.isArray(b==null?void 0:b.results)?b.results:[]),C((b==null?void 0:b.meta)||{total_count:0,total_amount_ils:"0.00"})}catch(b){console.error(b),w([]),C({total_count:0,total_amount_ils:"0.00"}),await e("تعذر تحميل التحويلات/الأرباح.","خطأ")}finally{v(!1)}},[t,l,h,f,a,e]);return m.useEffect(()=>{z()},[z]),i.jsx(ze,{children:i.jsxs("div",{className:"admin-dash admin-finance-page",children:[i.jsx("h1",{style:{marginTop:0},children:"الأرباح والتحويلات"}),i.jsx("p",{className:"admin-intro",children:"هذه الصفحة للمدير الأساسي: مراجعة التحويلات/الأرباح من الإعلانات الممولة وتجديد الاشتراكات المقبولة."}),i.jsxs("section",{className:"card admin-section",children:[i.jsx("div",{className:"admin-section-head",style:{alignItems:"flex-start"},children:i.jsxs("div",{children:[i.jsx("h2",{style:{margin:0},children:"الأرباح والتحويلات"}),i.jsxs("p",{className:"muted small",style:{margin:"6px 0 0"},children:["إجمالي التحويلات ضمن الفلتر: ",i.jsx("strong",{dir:"ltr",children:N.total_count??0})," — مجموع المبالغ:"," ",i.jsxs("strong",{dir:"ltr",children:[N.total_amount_ils??"0.00"," ₪"]})]})]})}),i.jsxs("div",{className:"admin-finance-filters",style:{marginBottom:12},children:[i.jsxs("label",{children:["بحث باسم المتجر/اليوزر/الجوال",i.jsx("input",{value:t,onChange:b=>n(b.target.value),placeholder:"مثال: اسم متجر أو 059...",autoComplete:"off"})]}),i.jsxs("label",{children:["مصدر الأرباح",i.jsxs("select",{value:a,onChange:b=>o(b.target.value),children:[i.jsx("option",{value:"",children:"الكل"}),i.jsx("option",{value:"sponsored_ad",children:"الإعلانات الممولة فقط"}),i.jsx("option",{value:"subscription_renewal",children:"الاشتراكات فقط"})]})]}),i.jsxs("label",{children:["من تاريخ",i.jsx("input",{type:"date",value:l,onChange:b=>d(b.target.value)})]}),i.jsxs("label",{children:["إلى تاريخ",i.jsx("input",{type:"date",value:h,onChange:b=>u(b.target.value)})]}),i.jsxs("label",{children:["طريقة التحويل",i.jsxs("select",{value:f,onChange:b=>x(b.target.value),children:[i.jsx("option",{value:"",children:"الكل"}),i.jsx("option",{value:"balipay_wallet",children:"محفظة بال باي"}),i.jsx("option",{value:"bank_palestine",children:"بنك فلسطين"}),i.jsx("option",{value:"other",children:"أخرى"})]})]}),i.jsx("button",{type:"button",className:"btn-ok",onClick:z,disabled:y,children:"تحديث"}),i.jsx("button",{type:"button",className:"btn-toggle",onClick:()=>{n(""),o(""),d(""),u(""),x("")},children:"مسح الفلاتر"})]}),y?i.jsx("p",{children:"جاري التحميل…"}):_.length===0?i.jsx("p",{className:"muted",children:"لا توجد تحويلات ضمن هذه الفلاتر."}):i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"admin-table-wrap admin-finance-table-wrap",children:i.jsxs("table",{className:"admin-accounts-table admin-finance-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"الإشعار"}),i.jsx("th",{children:"المتجر"}),i.jsx("th",{children:"صاحب المتجر"}),i.jsx("th",{children:"الجوال"}),i.jsx("th",{children:"النوع"}),i.jsx("th",{children:"طريقة التحويل"}),i.jsx("th",{children:"المبلغ"}),i.jsx("th",{children:"تاريخ/وقت التحويل"})]})}),i.jsx("tbody",{children:_.map(b=>i.jsxs("tr",{children:[i.jsx("td",{children:b.receipt_image?i.jsx("a",{href:b.receipt_image,target:"_blank",rel:"noreferrer",className:"fin-receipt",children:i.jsx("img",{src:b.receipt_image,alt:"إشعار التحويل",loading:"lazy"})}):i.jsx("span",{className:"muted small",children:"—"})}),i.jsxs("td",{children:[i.jsx("strong",{children:b.store_name}),i.jsxs("span",{className:"muted small",style:{display:"block"},children:["#",b.store_id]})]}),i.jsx("td",{children:b.merchant_username||"—"}),i.jsx("td",{dir:"ltr",style:{textAlign:"right"},children:b.merchant_phone||"—"}),i.jsx("td",{children:i.jsx("span",{className:"fin-pill fin-pill--kind",children:b.kind_label||b.kind})}),i.jsx("td",{children:i.jsx("span",{className:`fin-pill fin-pill--method fin-pill--${b.payment_method||"other"}`,children:b.payment_method_label||b.payment_method})}),i.jsxs("td",{className:"fin-amount",dir:"ltr",children:[b.amount_ils," ₪"]}),i.jsx("td",{className:"fin-dt",children:hg(b.created_at)})]},b.id))})]})}),i.jsx("div",{className:"fin-cards","aria-label":"قائمة التحويلات",children:_.map(b=>i.jsxs("article",{className:"fin-card",children:[i.jsxs("div",{className:"fin-card__top",children:[i.jsxs("div",{className:"fin-card__store",children:[i.jsx("div",{className:"fin-card__storeName",children:b.store_name}),i.jsxs("div",{className:"muted small",children:["#",b.store_id]})]}),i.jsxs("div",{className:"fin-card__amount",dir:"ltr",children:[b.amount_ils," ₪"]})]}),b.receipt_image?i.jsxs("a",{href:b.receipt_image,target:"_blank",rel:"noreferrer",className:"fin-card__receipt",children:[i.jsx("img",{src:b.receipt_image,alt:"إشعار التحويل",loading:"lazy"}),i.jsx("span",{children:"فتح إشعار التحويل"})]}):null,i.jsxs("div",{className:"fin-card__pills",children:[i.jsx("span",{className:"fin-pill fin-pill--kind",children:b.kind_label||b.kind}),i.jsx("span",{className:`fin-pill fin-pill--method fin-pill--${b.payment_method||"other"}`,children:b.payment_method_label||b.payment_method})]}),i.jsxs("div",{className:"fin-kv",children:[i.jsxs("div",{className:"fin-kv__row",children:[i.jsx("span",{className:"fin-kv__k",children:"صاحب المتجر"}),i.jsx("span",{className:"fin-kv__v",children:b.merchant_username||"—"})]}),i.jsxs("div",{className:"fin-kv__row",children:[i.jsx("span",{className:"fin-kv__k",children:"الجوال"}),i.jsx("span",{className:"fin-kv__v",dir:"ltr",children:b.merchant_phone||"—"})]}),i.jsxs("div",{className:"fin-kv__row",children:[i.jsx("span",{className:"fin-kv__k",children:"التاريخ"}),i.jsx("span",{className:"fin-kv__v",children:hg(b.created_at)})]})]})]},`m-${b.id}`))})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
            `}})]})]})})}function BS(){const{showAlert:e,showConfirm:t}=Oe(),[n,a]=m.useState(""),[o,l]=m.useState([]),[d,h]=m.useState(!1),u=m.useCallback(async()=>{h(!0);try{const v=await lk();l(Array.isArray(v==null?void 0:v.results)?v.results:[])}catch(v){console.error(v),l([]),await e("تعذر تحميل الإعلانات.","خطأ")}finally{h(!1)}},[e]);m.useEffect(()=>{u()},[u]);const f=m.useMemo(()=>o.find(v=>v.is_active)||null,[o]),x=async()=>{const v=n.trim();if(!v)return e("اكتب نص الإعلان أولاً.","تنبيه");if(await t("نشر إعلان عام جديد؟ سيتم إيقاف الإعلان النشط السابق إن وُجد.","تأكيد"))try{await ck(v),a(""),await u(),await e("تم نشر الإعلان.","تم")}catch(w){console.error(w),await e("تعذر نشر الإعلان.","خطأ")}},y=async()=>{if(!(!f||!await t("حذف/إيقاف الإعلان النشط؟","تأكيد")))try{await dk(f.id),await u(),await e("تم حذف الإعلان.","تم")}catch(_){console.error(_),await e("تعذر حذف الإعلان.","خطأ")}};return i.jsx(ze,{children:i.jsxs("div",{className:"admin-dash",children:[i.jsx("h1",{children:"إعلان عام"}),i.jsx("p",{className:"admin-intro",children:"نشر إعلان عام يظهر لكل المستخدمين تحت الهيدر. يوجد إعلان نشط واحد فقط في نفس الوقت."}),i.jsxs("section",{className:"card admin-section",children:[i.jsxs("div",{className:"admin-section-head",children:[i.jsx("h2",{children:"الإعلان الحالي"}),d?i.jsx("span",{className:"muted small",children:"جاري التحميل…"}):null]}),f?i.jsxs("div",{className:"card",style:{padding:14,background:"var(--surface)",marginBottom:14},children:[i.jsx("div",{style:{fontWeight:900,marginBottom:8},children:"نشط الآن"}),i.jsx("div",{style:{whiteSpace:"pre-wrap",lineHeight:1.7},children:f.message}),i.jsx("div",{className:"admin-actions",children:i.jsx("button",{type:"button",className:"btn-no",onClick:y,children:"حذف الإعلان"})})]}):i.jsx("p",{className:"muted",style:{marginTop:0},children:"لا يوجد إعلان نشط حالياً."}),i.jsx("h2",{style:{marginTop:0},children:"نشر إعلان جديد"}),i.jsxs("label",{style:{display:"block",fontWeight:800},children:["نص الإعلان",i.jsx("textarea",{value:n,onChange:v=>a(v.target.value),placeholder:"اكتب إعلاناً عاماً يظهر للجميع…",style:{width:"100%",marginTop:8,padding:"0.85rem 1rem",borderRadius:14,border:"1.5px solid var(--border)",background:"var(--white)",minHeight:110,resize:"vertical",fontFamily:"inherit"}})]}),i.jsx("div",{className:"admin-actions",children:i.jsx("button",{type:"button",className:"btn-ok",onClick:x,children:"نشر الإعلان"})})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:Tn}})]})})}function FS({src:e,alt:t}){return e?i.jsx("a",{className:"cat-thumb",href:e,target:"_blank",rel:"noreferrer",title:"فتح الصورة",children:i.jsx("img",{src:e,alt:t||"صورة",loading:"lazy"})}):i.jsx("span",{className:"muted small",children:"—"})}function DS(){const{showAlert:e,showConfirm:t}=Oe(),[n,a]=m.useState("stores"),[o,l]=m.useState(!1),[d,h]=m.useState([]),[u,f]=m.useState([]),[x,y]=m.useState(""),[v,_]=m.useState(""),[w,N]=m.useState(""),[C,z]=m.useState(0),[b,k]=m.useState(null),S=m.useMemo(()=>n==="stores"?d:u,[n,d,u]),E=m.useCallback(async()=>{l(!0);try{const[T,R]=await Promise.all([gk(),vk()]);h(Array.isArray(T==null?void 0:T.results)?T.results:Array.isArray(T)?T:[]),f(Array.isArray(R==null?void 0:R.results)?R.results:Array.isArray(R)?R:[])}catch(T){console.error(T),h([]),f([]),await e("تعذر تحميل الأقسام.","خطأ")}finally{l(!1)}},[e]);m.useEffect(()=>{E()},[E]);const P=()=>{y(""),_(""),N(""),z(0),k(null)},I=async()=>{const T=x.trim();if(!T)return e("اكتب اسم القسم.","تنبيه");l(!0);try{n==="stores"?await xk({name:T,imageFile:b}):await bk({name:T,slug:v.trim(),description_hint:w.trim(),sort_order:Number(C)||0,imageFile:b}),P(),await E(),await e("تمت الإضافة.","تم")}catch(R){console.error(R),await e("تعذر إضافة القسم.","خطأ")}finally{l(!1)}},D=async T=>{if(await t(`حذف القسم: ${T.name}؟`,"تأكيد")){l(!0);try{n==="stores"?await yk(T.id):await wk(T.id),await E(),await e("تم الحذف.","تم")}catch(U){console.error(U),await e("تعذر الحذف. إن كان القسم مرتبط بنقاط خدمات مجتمعية سيتم تعطيله بدل الحذف.","تنبيه"),await E()}finally{l(!1)}}};return i.jsx(ze,{children:i.jsxs("div",{className:"admin-dash",children:[i.jsx("h1",{children:"إدارة الأقسام"}),i.jsx("p",{className:"admin-intro",children:"إضافة/حذف أقسام المتاجر وأقسام الخدمات المجتمعية، مع صورة افتراضية للقسم."}),i.jsxs("section",{className:"card admin-section",style:{marginBottom:16},children:[i.jsxs("div",{className:"admin-section-head",children:[i.jsx("h2",{style:{margin:0},children:"النوع"}),i.jsxs("div",{className:"cat-tabs",role:"tablist","aria-label":"نوع الأقسام",children:[i.jsx("button",{type:"button",className:`cat-tab${n==="stores"?" cat-tab--active":""}`,onClick:()=>a("stores"),children:"أقسام المتاجر"}),i.jsx("button",{type:"button",className:`cat-tab${n==="community"?" cat-tab--active":""}`,onClick:()=>a("community"),children:"أقسام الخدمات المجتمعية"})]})]}),i.jsxs("div",{className:"cat-form",children:[i.jsxs("label",{children:["اسم القسم",i.jsx("input",{value:x,onChange:T=>y(T.target.value),placeholder:"مثال: حلويات"})]}),n==="community"?i.jsxs(i.Fragment,{children:[i.jsxs("label",{children:["slug (اختياري)",i.jsx("input",{value:v,onChange:T=>_(T.target.value),placeholder:"يُنشأ تلقائياً إن تركته"})]}),i.jsxs("label",{style:{gridColumn:"1 / -1"},children:["تلميح/وصف (اختياري)",i.jsx("textarea",{value:w,onChange:T=>N(T.target.value),placeholder:"يظهر عند اقتراح نقطة خدمة"})]}),i.jsxs("label",{children:["ترتيب (اختياري)",i.jsx("input",{type:"number",value:C,onChange:T=>z(T.target.value)})]})]}):null,i.jsxs("label",{style:{gridColumn:"1 / -1"},children:["صورة افتراضية للقسم (اختياري)",i.jsx("input",{type:"file",accept:"image/*",onChange:T=>{var R;return k(((R=T.target.files)==null?void 0:R[0])||null)}}),i.jsx("span",{className:"muted small",children:"PNG/JPG"})]}),i.jsxs("div",{className:"admin-actions",style:{gridColumn:"1 / -1"},children:[i.jsx("button",{type:"button",className:"btn-ok",onClick:I,disabled:o,children:"إضافة قسم"}),i.jsx("button",{type:"button",className:"btn-toggle",onClick:P,disabled:o,children:"مسح الحقول"})]})]})]}),i.jsxs("section",{className:"card admin-section",children:[i.jsxs("div",{className:"admin-section-head",children:[i.jsx("h2",{style:{margin:0},children:"القائمة"}),o?i.jsx("span",{className:"muted small",children:"جاري…"}):i.jsxs("span",{className:"muted small",children:[S.length," قسم"]})]}),i.jsx("div",{className:"admin-table-wrap",children:i.jsxs("table",{className:"admin-accounts-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"الصورة"}),i.jsx("th",{children:"الاسم"}),n==="community"?i.jsx("th",{children:"slug"}):null,n==="community"?i.jsx("th",{children:"نشط"}):null,i.jsx("th",{})]})}),i.jsxs("tbody",{children:[S.map(T=>i.jsxs("tr",{children:[i.jsx("td",{children:i.jsx(FS,{src:T.image,alt:T.name})}),i.jsxs("td",{children:[i.jsx("strong",{children:T.name}),i.jsxs("span",{className:"muted small",style:{display:"block"},children:["#",T.id]})]}),n==="community"?i.jsx("td",{dir:"ltr",children:T.slug}):null,n==="community"?i.jsx("td",{children:T.is_active?"نعم":"لا"}):null,i.jsx("td",{children:i.jsx("button",{type:"button",className:"btn-no",onClick:()=>D(T),disabled:o,children:"حذف"})})]},T.id)),!o&&S.length===0?i.jsx("tr",{children:i.jsx("td",{colSpan:n==="community"?5:4,className:"muted",children:"لا يوجد أقسام."})}):null]})]})})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
            ${Tn}
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
          `}})]})})}function WS(){const{showAlert:e,showConfirm:t}=Oe(),n=localStorage.getItem("isGuest")==="true",o=!!localStorage.getItem("token")&&!n,l=m.useMemo(()=>localStorage.getItem("user_name")||"",[]),[d,h]=m.useState(l),[u,f]=m.useState(!1),[x,y]=m.useState(""),[v,_]=m.useState(""),[w,N]=m.useState(!1);if(!o)return i.jsx(ze,{children:i.jsxs("div",{dir:"rtl",style:{maxWidth:720,margin:"0 auto"},children:[i.jsxs("div",{className:"card",children:[i.jsx("h2",{style:{marginTop:0},children:"الإعدادات"}),i.jsx("div",{style:{color:"var(--text-secondary)",fontWeight:800,lineHeight:1.8},children:"هذه الصفحة متاحة للحسابات المسجّلة فقط."})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:pg}})]})});const C=async b=>{b.preventDefault();const k=(d||"").trim();if(!k){e("أدخل اسم المستخدم.","تنبيه");return}if(await t("تأكيد حفظ اسم المستخدم الجديد؟","تأكيد")){f(!0);try{const E=await Ek(k),P=(E==null?void 0:E.username)||k;localStorage.setItem("user_name",P),h(P),e("تم تحديث اسم المستخدم.","تم")}catch(E){e(Ae(E,"تعذر تحديث اسم المستخدم. حاول لاحقاً."),"خطأ")}finally{f(!1)}}},z=async b=>{if(b.preventDefault(),!x){e("أدخل كلمة المرور الحالية.","تنبيه");return}if(!v||v.length<6){e("كلمة المرور الجديدة يجب أن تكون 6 أحرف على الأقل.","تنبيه");return}if(await t("تأكيد تغيير كلمة المرور؟","تأكيد")){N(!0);try{await Lk({current_password:x,new_password:v}),y(""),_(""),e("تم تغيير كلمة المرور بنجاح.","تم")}catch(S){e(Ae(S,"تعذر تغيير كلمة المرور. تحقق من البيانات وحاول لاحقاً."),"خطأ")}finally{N(!1)}}};return i.jsx(ze,{children:i.jsxs("div",{dir:"rtl",style:{maxWidth:860,margin:"0 auto"},children:[i.jsxs("div",{className:"settings-wrap",children:[i.jsxs("div",{className:"card",children:[i.jsx("h2",{style:{marginTop:0},children:"الإعدادات"}),i.jsx("div",{className:"muted",children:"يمكنك هنا تحديث اسم المستخدم وكلمة المرور."})]}),i.jsxs("div",{className:"grid",children:[i.jsxs("div",{className:"card",children:[i.jsx("h3",{style:{marginTop:0},children:"تغيير اسم المستخدم"}),i.jsxs("form",{onSubmit:C,className:"form",children:[i.jsx("label",{className:"lbl",children:"اسم المستخدم"}),i.jsx("input",{className:"inp",value:d,onChange:b=>h(b.target.value),placeholder:"اسم المستخدم الجديد",autoComplete:"username"}),i.jsx("button",{className:"btn",type:"submit",disabled:u,children:u?"جاري الحفظ…":"حفظ"})]})]}),i.jsxs("div",{className:"card",children:[i.jsx("h3",{style:{marginTop:0},children:"تغيير كلمة المرور"}),i.jsxs("form",{onSubmit:z,className:"form",children:[i.jsx("label",{className:"lbl",children:"كلمة المرور الحالية"}),i.jsx("input",{className:"inp",type:"password",value:x,onChange:b=>y(b.target.value),autoComplete:"current-password"}),i.jsx("label",{className:"lbl",children:"كلمة المرور الجديدة"}),i.jsx("input",{className:"inp",type:"password",value:v,onChange:b=>_(b.target.value),autoComplete:"new-password"}),i.jsx("button",{className:"btn",type:"submit",disabled:w,children:w?"جاري الحفظ…":"تغيير كلمة المرور"})]})]})]})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:pg}})]})})}const pg=`
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
`,bc=()=>!!localStorage.getItem("token"),wc=()=>localStorage.getItem("isGuest")==="true",US=()=>localStorage.getItem("user_type")==="merchant",HS=()=>localStorage.getItem("user_type")==="admin",Le=({children:e})=>e,Vs=({children:e})=>wc()||!bc()?i.jsx(sa,{to:"/login",replace:!0}):e,ZS=()=>i.jsx(u1,{}),Wn=({children:e})=>wc()||!bc()||!US()?i.jsx(sa,{to:"/",replace:!0}):e,mn=({children:e})=>wc()||!bc()||!HS()?i.jsx(sa,{to:"/login",replace:!0}):e,Ka=({children:e})=>localStorage.getItem("is_primary_admin")!=="true"?i.jsx(sa,{to:"/admin",replace:!0}):e,$S=({children:e})=>{if(wc()||!bc())return i.jsx(sa,{to:"/login",replace:!0});const t=localStorage.getItem("user_type");return t!=="shopper"&&t!=="merchant"?i.jsx(sa,{to:"/services",replace:!0}):e};function qS(){return m.useEffect(()=>{zk().catch(()=>{})},[]),i.jsx(Hw,{children:i.jsx(Rk,{children:i.jsx(Ij,{children:i.jsx(Tk,{children:i.jsx(Bk,{children:i.jsxs(Iw,{children:[i.jsx(Se,{path:"/login",element:i.jsx(Vk,{})}),i.jsx(Se,{path:"/share/cart/:shareToken",element:i.jsx(wS,{})}),i.jsx(Se,{path:"/register",element:i.jsx(M4,{})}),i.jsx(Se,{path:"/verify-whatsapp",element:i.jsx(xS,{})}),i.jsx(Se,{path:"/settings",element:i.jsx(Le,{children:i.jsx(Vs,{children:i.jsx(WS,{})})})}),i.jsx(Se,{path:"/admin",element:i.jsx(Le,{children:i.jsx(mn,{children:i.jsx(CS,{})})})}),i.jsx(Se,{path:"/admin/accounts",element:i.jsx(Le,{children:i.jsx(mn,{children:i.jsx(Ka,{children:i.jsx(zS,{})})})})}),i.jsx(Se,{path:"/admin/ads",element:i.jsx(Le,{children:i.jsx(mn,{children:i.jsx(PS,{})})})}),i.jsx(Se,{path:"/admin/ads/:adId",element:i.jsx(Le,{children:i.jsx(mn,{children:i.jsx(ES,{})})})}),i.jsx(Se,{path:"/admin/subscriptions",element:i.jsx(Le,{children:i.jsx(mn,{children:i.jsx(LS,{})})})}),i.jsx(Se,{path:"/admin/stores",element:i.jsx(Le,{children:i.jsx(mn,{children:i.jsx(Ka,{children:i.jsx(TS,{})})})})}),i.jsx(Se,{path:"/admin/finance",element:i.jsx(Le,{children:i.jsx(mn,{children:i.jsx(Ka,{children:i.jsx(OS,{})})})})}),i.jsx(Se,{path:"/admin/announcements",element:i.jsx(Le,{children:i.jsx(mn,{children:i.jsx(Ka,{children:i.jsx(BS,{})})})})}),i.jsx(Se,{path:"/admin/categories",element:i.jsx(Le,{children:i.jsx(mn,{children:i.jsx(Ka,{children:i.jsx(DS,{})})})})}),i.jsx(Se,{path:"/admin/community",element:i.jsx(Le,{children:i.jsx(mn,{children:i.jsx(IS,{})})})}),i.jsx(Se,{path:"/admin/users",element:i.jsx(Le,{children:i.jsx(mn,{children:i.jsx(RS,{})})})}),i.jsx(Se,{path:"/dashboard",element:i.jsx(Le,{children:i.jsx(F4,{})})}),i.jsx(Se,{path:"/merchant/dashboard",element:i.jsx(Le,{children:i.jsx(Wn,{children:i.jsx(D4,{})})})}),i.jsx(Se,{path:"/merchant/products",element:i.jsx(Le,{children:i.jsx(Wn,{children:i.jsx(W4,{})})})}),i.jsx(Se,{path:"/merchant/products/new",element:i.jsx(Le,{children:i.jsx(Wn,{children:i.jsx(ig,{})})})}),i.jsx(Se,{path:"/merchant/products/:id/edit",element:i.jsx(Le,{children:i.jsx(Wn,{children:i.jsx(ig,{})})})}),i.jsx(Se,{path:"/merchant/my-ads",element:i.jsx(Le,{children:i.jsx(Wn,{children:i.jsx(q4,{})})})}),i.jsx(Se,{path:"/merchant/ads",element:i.jsx(Le,{children:i.jsx(Wn,{children:i.jsx(Z4,{})})})}),i.jsx(Se,{path:"/merchant/subscription",element:i.jsx(Le,{children:i.jsx(Wn,{children:i.jsx(V4,{})})})}),i.jsx(Se,{path:"/merchant/settings",element:i.jsx(Le,{children:i.jsx(Wn,{children:i.jsx(tS,{})})})}),i.jsx(Se,{path:"/merchant/profile",element:i.jsx(Le,{children:i.jsx(Wn,{children:i.jsx(nS,{})})})}),i.jsx(Se,{path:"/categories",element:i.jsx(Le,{children:i.jsx(rS,{})})}),i.jsx(Se,{path:"/services",element:i.jsx(Le,{children:i.jsx(oS,{})})}),i.jsx(Se,{path:"/services/category/:categorySlug",element:i.jsx(Le,{children:i.jsx(sS,{})})}),i.jsx(Se,{path:"/services/suggest",element:i.jsx(Le,{children:i.jsx($S,{children:i.jsx(cS,{})})})}),i.jsx(Se,{path:"/offers",element:i.jsx(Le,{children:i.jsx(pS,{})})}),i.jsx(Se,{path:"/map",element:i.jsx(Le,{children:i.jsx(kS,{})})}),i.jsx(Se,{path:"/stores",element:i.jsx(Le,{children:i.jsx(NS,{})})}),i.jsx(Se,{path:"/search",element:i.jsx(Le,{children:i.jsx(mS,{})})}),i.jsx(Se,{path:"/carts",element:i.jsx(Le,{children:i.jsx(Vs,{children:i.jsx(uS,{})})})}),i.jsx(Se,{path:"/carts/:cartId",element:i.jsx(Le,{children:i.jsx(Vs,{children:i.jsx(hS,{})})})}),i.jsx(Se,{path:"/favorites",element:i.jsx(Le,{children:i.jsx(Vs,{children:i.jsx(fS,{})})})}),i.jsx(Se,{path:"/contact",element:i.jsx(Le,{children:i.jsx(gS,{})})}),i.jsx(Se,{path:"/stores/:storeId",element:i.jsx(Le,{children:i.jsx(bS,{})})}),i.jsx(Se,{path:"/",element:i.jsx(Le,{children:i.jsx(ZS,{})})}),i.jsx(Se,{path:"*",element:i.jsx(u1,{})})]})})})})})})}class VS extends Xr.Component{constructor(t){super(t),this.state={error:null}}static getDerivedStateFromError(t){return{error:t}}componentDidCatch(t,n){console.error("ErrorBoundary:",t,n==null?void 0:n.componentStack)}render(){return this.state.error?i.jsxs("div",{style:{minHeight:"100vh",padding:"24px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"#f8f8f6",color:"#1e1e2e",fontFamily:"system-ui, Tahoma, sans-serif",direction:"rtl",textAlign:"center",boxSizing:"border-box"},children:[i.jsx("h1",{style:{fontSize:"1.25rem",marginBottom:12},children:"تعذّر تحميل الشاشة"}),i.jsx("p",{style:{maxWidth:420,lineHeight:1.7,marginBottom:20,color:"#5a5a6e"},children:"حدث خطأ غير متوقع. جرّب تحديث الصفحة أو المحاولة لاحقاً."}),i.jsx("button",{type:"button",onClick:()=>window.location.reload(),style:{marginTop:20,padding:"12px 24px",borderRadius:12,border:"none",background:"#f5c000",color:"#1e1e2e",fontWeight:800,cursor:"pointer"},children:"تحديث الصفحة"})]}):this.props.children}}const GS="modulepreload",KS=function(e){return"/"+e},mg={},QS=function(t,n,a){let o=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),h=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));o=Promise.allSettled(n.map(u=>{if(u=KS(u),u in mg)return;mg[u]=!0;const f=u.endsWith(".css"),x=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${x}`))return;const y=document.createElement("link");if(y.rel=f?"stylesheet":GS,f||(y.as="script"),y.crossOrigin="",y.href=u,h&&y.setAttribute("nonce",h),document.head.appendChild(y),f)return new Promise((v,_)=>{y.addEventListener("load",v),y.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${u}`)))})}))}function l(d){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=d,window.dispatchEvent(h),!h.defaultPrevented)throw d}return o.then(d=>{for(const h of d||[])h.status==="rejected"&&l(h.reason);return t().catch(l)})};function YS(e={}){const{immediate:t=!1,onNeedRefresh:n,onOfflineReady:a,onRegistered:o,onRegisteredSW:l,onRegisterError:d}=e;let h,u;const f=async(y=!0)=>{await u};async function x(){if("serviceWorker"in navigator){if(h=await QS(async()=>{const{Workbox:y}=await import("./workbox-window.prod.es5-vqzQaGvo.js");return{Workbox:y}},[]).then(({Workbox:y})=>new y("/sw.js",{scope:"/",type:"classic"})).catch(y=>{d==null||d(y)}),!h)return;h.addEventListener("activated",y=>{(y.isUpdate||y.isExternal)&&window.location.reload()}),h.addEventListener("installed",y=>{y.isUpdate||a==null||a()}),h.register({immediate:t}).then(y=>{l?l("/sw.js",y):o==null||o(y)}).catch(y=>{d==null||d(y)})}}return u=x(),f}function JS(){try{return window.navigator&&window.navigator.standalone?!0:window.matchMedia&&window.matchMedia("(display-mode: standalone)").matches}catch{return!1}}function gp(){document.title=JS()?"رادار":"رادار-دليلك للمحلات القريبة"}YS({immediate:!0});gp();window.addEventListener("appinstalled",gp);try{window.matchMedia("(display-mode: standalone)").addEventListener("change",gp)}catch{}const fg=document.getElementById("root");fg?Hd.createRoot(fg).render(i.jsx(Xr.StrictMode,{children:i.jsx(VS,{children:i.jsx(qS,{})})})):document.body.innerHTML='<p style="font-family:sans-serif;padding:24px;direction:rtl;">عنصر #root غير موجود في الصفحة.</p>';
