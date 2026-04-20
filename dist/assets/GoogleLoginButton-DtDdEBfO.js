import{f as w,r as i,j as m}from"./index-C8OBBHsJ.js";const j=w("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]),L=w("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),M=w("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]),u="radar_remember_login",f="radar_saved_login_username",h="radar_saved_login_password_b64";function S(e){try{return btoa(unescape(encodeURIComponent(e)))}catch{return""}}function v(e){if(!e)return"";try{return decodeURIComponent(escape(atob(e)))}catch{return""}}function k(){if(typeof localStorage>"u")return{username:"",password:"",rememberMe:!1};if(!(localStorage.getItem(u)==="true"))return{username:"",password:"",rememberMe:!1};const n=localStorage.getItem(f)||"",r=v(localStorage.getItem(h)||"");return{username:n,password:r,rememberMe:!0}}function G({username:e,password:n,rememberMe:r}){if(!(typeof localStorage>"u")){if(!r){localStorage.removeItem(u),localStorage.removeItem(f),localStorage.removeItem(h);return}localStorage.setItem(u,"true"),localStorage.setItem(f,String(e||"").trim()),localStorage.setItem(h,S(String(n??"")))}}function E(){var e,n;return typeof window>"u"?Promise.reject(new Error("no window")):(n=(e=window.google)==null?void 0:e.accounts)!=null&&n.id?Promise.resolve():(window.__radar_gsi_loading_promise||(window.__radar_gsi_loading_promise=new Promise((r,g)=>{const t=document.createElement("script");t.src="https://accounts.google.com/gsi/client",t.async=!0,t.defer=!0,t.onload=()=>{console.log("[GSI] script loaded"),r()},t.onerror=s=>{console.error("[GSI] script failed to load",s),g(new Error("تعذر تحميل مكتبة Google Identity."))},document.head.appendChild(t)})),window.__radar_gsi_loading_promise)}function z({text:e="تسجيل الدخول عبر Google",onCredential:n,disabled:r=!1,style:g={},matchAuthButtonSize:t=!1}){const s=i.useRef(null),p=i.useRef(null),[d,y]=i.useState(!1),[x,_]=i.useState(320),l=i.useMemo(()=>"407689787967-7qo6llkgshi16oreveh6ndikj0aod9kt.apps.googleusercontent.com",[]);return i.useEffect(()=>{let c=!1;return(async()=>{try{if(console.log("[GSI] VITE_GOOGLE_CLIENT_ID =",l?`${String(l).slice(0,12)}…`:"(empty)"),!l||(await E(),c))return;window.google.accounts.id.initialize({client_id:l,callback:o=>{const a=o==null?void 0:o.credential;console.log("[GSI] credential received =",a?`${String(a).slice(0,18)}…`:"(empty)"),a&&typeof n=="function"&&n(a)},ux_mode:"popup"}),y(!0)}catch(o){console.error("[GSI] init failed",o),y(!1)}})(),()=>{c=!0}},[l,n]),i.useEffect(()=>{if(!s.current)return;const c=s.current,o=()=>{const b=Math.max(280,Math.floor(c.clientWidth||320));_(b)};o();const a=new ResizeObserver(o);return a.observe(c),window.addEventListener("resize",o),()=>{a.disconnect(),window.removeEventListener("resize",o)}},[]),i.useEffect(()=>{d&&p.current&&(p.current.innerHTML="",window.google.accounts.id.renderButton(p.current,{type:"standard",theme:"outline",size:"large",text:"continue_with",shape:"pill",locale:"ar",width:x}))},[d,x,t]),l?m.jsxs("div",{ref:s,className:t?"google-login-wrap google-login-wrap--match-auth":"google-login-wrap",style:{marginTop:12,width:"100%",...t?{minHeight:52}:null,...g},children:[m.jsx("div",{style:{position:"absolute",width:1,height:1,overflow:"hidden"},children:e}),m.jsx("div",{ref:p,style:{opacity:r?.6:1,pointerEvents:r?"none":"auto",display:"flex",justifyContent:"center"}}),d?null:m.jsx("div",{style:{marginTop:8,textAlign:"center",fontWeight:800,fontSize:"0.82rem",color:"#666"},children:"جاري تجهيز تسجيل الدخول عبر Google…"}),t?m.jsx("style",{children:`
          .google-login-wrap--match-auth .S9gUrf-YoZ4jf > div{
            display: flex !important;
            justify-content: center !important;
          }
          .google-login-wrap--match-auth [class*="nsm7Bb-HzV7m-LgbsSe"]{
            min-height: 52px !important;
            height: 52px !important;
            border-radius: 14px !important;
            justify-content: center !important;
            text-align: center !important;
          }
          .google-login-wrap--match-auth [class*="nsm7Bb-HzV7m-LgbsSe-MJoBVe"]{
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            width: 100% !important;
            height: 52px !important;
          }
          .google-login-wrap--match-auth [class*="nsm7Bb-HzV7m-LgbsSe-bN97Pc"]{
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            gap: 10px !important;
            width: auto !important;
            height: 100% !important;
            margin: 0 auto !important;
            padding-top: 0 !important;
            padding-bottom: 0 !important;
          }
          .google-login-wrap--match-auth [class*="nsm7Bb-HzV7m-LgbsSe-Bz112c"]{
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            flex: 0 1 auto !important;
            height: 100% !important;
            text-align: center !important;
          }
          .google-login-wrap--match-auth [class*="nsm7Bb-HzV7m-LgbsSe-BPrWId"]{
            display: inline-flex !important;
            align-items: center !important;
            flex: 0 0 auto !important;
            width: auto !important;
            height: 100% !important;
            margin: 0 !important;
            text-align: center !important;
            line-height: 1 !important;
          }
          .google-login-wrap--match-auth [class*="LgbsSe-Bz112c"]{
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            margin: 0 !important;
            padding: 0 !important;
            vertical-align: middle !important;
            position: relative !important;
            top: 0 !important;
            transform: translateY(0) !important;
            align-self: center !important;
          }
          .google-login-wrap--match-auth [class*="M5MNb"]{
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            height: 100% !important;
            padding-top: 0 !important;
            padding-bottom: 0 !important;
          }
        `}):null]}):null}export{j as E,z as G,M as L,L as a,k as l,G as s};
