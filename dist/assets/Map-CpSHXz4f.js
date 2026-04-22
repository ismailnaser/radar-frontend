import{n as V,b as X,u as Y,c as Z,r as s,p as ee,o as te,s as re,v as oe,j as i}from"./index-D-O0uzi9.js";import{M as ae}from"./MainLayout-DDN34u42.js";import{S as se}from"./ShopperMap-DWKFhuJL.js";import{F as ne}from"./FiltersDropdown-Dqi-ajf5.js";import{s as ie,a as ce}from"./storeCategories-CcVhHY8P.js";import"./LeafletInvalidateOnLayout-BFgzE6j9.js";import"./storePinDefaults-BR9yF6Rx.js";import"./communityPointCoords-kTz0Hp0U.js";import"./map-pin-DyF0wAMB.js";import"./star-DdJPYwOU.js";const me=[31.5,34.4];function ue(l){return String(l||"").trim().toLowerCase()}function E(l){if(l==null)return[];const g=String(l).trim();if(!g)return[];const x=[];for(const w of g.split(",")){const S=Number(String(w).trim());Number.isFinite(S)&&x.push(S)}return Array.from(new Set(x))}function Se(){const{userMapLocation:l,setManualMapLocation:g,clearUserMapLocation:x,requestUserLocation:w,locating:S,locationFocusNonce:$,searchQuery:P,setSearchQuery:F}=V(),m=X(),M=Y(),[p,A]=Z(),C=l||me,[j,U]=s.useState([]),[z,R]=s.useState([]),[b,D]=s.useState([]),[h,G]=s.useState([]),[Q,k]=s.useState(!0),[v,T]=s.useState(null),[N,H]=s.useState(null);s.useEffect(()=>{let e=!0;return k(!0),Promise.all([ee().catch(()=>[]),te().catch(()=>[]),re(null).catch(()=>[]),oe(C[0],C[1],null).catch(()=>[])]).then(([t,r,o,u])=>{e&&(U(Array.isArray(t)?t:[]),R(Array.isArray(r)?r:[]),G(Array.isArray(o)?o:[]),D(Array.isArray(u)?u:[]))}).finally(()=>{e&&k(!1)}),()=>{e=!1}},[C[0],C[1]]),s.useEffect(()=>{var u,n;const e=(u=m.state)==null?void 0:u.mapFocus;if(!e)return;const t=Number(e.lat),r=Number(e.lng);if(!Number.isFinite(t)||!Number.isFinite(r))return;g(t,r),T(e.storeId??null),H(e.communityPointId??null);const o=(n=m.state)==null?void 0:n.mapPreset;if(o){const c=new URLSearchParams;o.mode==="community"?c.set("mode","community"):o.mode==="stores"&&c.set("mode","stores"),o.category!=null&&String(o.category).trim()!==""&&c.set("category",String(o.category)),o.cc!=null&&String(o.cc).trim()!==""&&c.set("cc",String(o.cc));const q=o.q!=null?String(o.q).trim():"";q!==""&&c.set("q",q),M({pathname:m.pathname,search:c.toString()},{replace:!0,state:{}})}else M({pathname:m.pathname,search:m.search},{replace:!0,state:{}})},[m.state,m.pathname,m.search,M,g]),s.useEffect(()=>{const e=p.get("q")||"";e!==P&&F(e)},[p]);const L=s.useCallback((e,t)=>{const r=new URLSearchParams(p);t==null||String(t)===""||String(t)==="all"?r.delete(e):r.set(e,String(t)),A(r,{replace:!0})},[p,A]),a=p.get("mode")==="community"?"community":"stores",f=E(p.get("category")),y=E(p.get("cc")),d=ue(P),_=s.useMemo(()=>{const e=Array.isArray(b)?b:[],t=f.length>0?e.filter(r=>ie(r,f)):e;return d?t.filter(r=>`${r.store_name||""} ${ce(r)} ${r.description||""}`.toLowerCase().includes(d)):t},[b,f,d]),I=s.useMemo(()=>{const e=Array.isArray(h)?h:[],t=y.length>0?e.filter(r=>y.includes(Number(r.category))):e;return d?t.filter(r=>`${r.title||""} ${r.category_name||""} ${r.detail_description||""} ${r.address_text||""}`.toLowerCase().includes(d)):t},[h,y,d]),O=s.useMemo(()=>{const e=a==="stores"?_:[];if(a!=="stores"||v==null)return e;const t=Number(v);if(!Number.isFinite(t)||e.some(o=>Number(o==null?void 0:o.id)===t))return e;const r=(b||[]).find(o=>Number(o==null?void 0:o.id)===t);return r?[...e,r]:e},[a,_,b,v]),B=s.useMemo(()=>{const e=a==="community"?I:[];if(a!=="community"||N==null)return e;const t=Number(N);if(!Number.isFinite(t)||e.some(n=>Number(n==null?void 0:n.id)===t))return e;const r=(h||[]).find(n=>Number(n==null?void 0:n.id)===t),o=r?[...e,r]:e,u=new Set;return o.filter(n=>{const c=(n==null?void 0:n.id)!=null?String(n.id):"";return c?u.has(c)?!1:(u.add(c),!0):!0})},[a,I,h,N]),K=!!d||(a==="stores"?f.length>0:y.length>0),W=s.useCallback(async()=>{await w()},[w]),J=s.useMemo(()=>"calc(100dvh - 180px)",[]);return i.jsx(ae,{children:i.jsxs("div",{className:"map-page",children:[i.jsx("div",{className:"map-page-stage","aria-busy":Q?"true":"false",children:i.jsx(se,{stores:O,communityPoints:B,categories:j,userLocation:l,locationFocusNonce:$,onManualLocationPick:g,autoFitStoresWhenNoUserLocation:!1,allowAutoCamera:!1,showGpsOnMap:!0,gpsLocating:S,onGpsClick:W,onClearUserLocation:x,mapHeight:J,isFullscreen:!0,gpsLabel:"موقعي",gpsLocatingLabel:"جاري الموقع…",gpsFabAlignStart:!0,focusOnResults:K,focusKind:a==="community"?"community":"stores",focusStoreId:a==="stores"?v:null,focusCommunityPointId:a==="community"?N:null,topControls:i.jsxs("div",{className:"map-topbar",onClick:e=>e.stopPropagation(),children:[i.jsxs("div",{className:"map-topbar-row",children:[i.jsx("button",{type:"button",className:`map-topbar-chip ${a==="stores"?"map-topbar-chip--active":""}`,onClick:()=>L("mode","stores"),children:"المتاجر"}),i.jsx("button",{type:"button",className:`map-topbar-chip ${a==="community"?"map-topbar-chip--active":""}`,onClick:()=>L("mode","community"),children:"الخدمات"}),i.jsx(ne,{buttonLabel:"فلاتر",title:a==="stores"?"فلترة المتاجر حسب الأقسام":"فلترة الخدمات حسب الأقسام",allLabel:"الكل",options:(a==="stores"?j:z).map(e=>({id:e.id,label:e.name})),selectedIds:a==="stores"?f:y,onChangeSelectedIds:e=>{L(a==="stores"?"category":"cc",e&&e.length?e.join(","):"")}})]}),i.jsx("div",{className:"map-topbar-search",children:i.jsx("input",{className:"map-topbar-search-input",value:P,onChange:e=>{const t=e.target.value;F(t),L("q",t)},placeholder:a==="community"?"ابحث عن خدمة أو مؤسسة…":"ابحث عن متجر…"})})]})})}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .map-page {
            position: fixed;
            inset: clamp(6px, 1.2vw, 10px);
            z-index: 1;
            width: 100%;
            max-width: none;
            margin-inline: 0;
            padding-inline: 0;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            flex: 1 1 auto;
            height: auto;
            min-height: 0;
            gap: 0;
            overflow: hidden;
          }
          .map-page-stage {
            border-radius: 14px;
            overflow: hidden;
            border: none;
            box-shadow: none;
            background: #dfe8e3;
            position: relative;
            flex: 1 1 auto;
            height: 100%;
            min-height: 0;
          }

          .map-topbar{
            display: flex;
            flex-direction: column;
            gap: 6px;
            padding: 6px 8px;
            background: transparent;
            border: 1px solid rgba(0,0,0,0.08);
            border-radius: 16px;
            backdrop-filter: blur(10px);
            pointer-events: auto;
            max-width: min(420px, 100%);
            margin-inline: auto;
          }
          .map-topbar-row{
            display: flex;
            flex-wrap: nowrap;
            gap: 6px;
            align-items: center;
            justify-content: center;
          }
          .map-topbar-row > *{
            flex: 0 0 auto;
          }
          .map-topbar-chip{
            border: 1.5px solid var(--border);
            background: var(--white);
            color: var(--secondary);
            font-weight: 900;
            padding: 6px 8px;
            border-radius: 999px;
            cursor: pointer;
            font-size: 0.82rem;
            line-height: 1.1;
          }
          .map-topbar .filters-dd__btn{
            padding: 6px 8px;
            gap: 6px;
            font-size: 0.82rem;
          }
          .map-topbar .filters-dd__btn svg{
            width: 16px;
            height: 16px;
          }
          .map-topbar .filters-dd__btnwrap{
            flex-direction: row;
            align-items: center;
            gap: 0;
          }
          /* لا نعرض سطر الملخص تحت زر الفلاتر داخل شريط الخريطة */
          .map-topbar .filters-dd__summary{
            display: none !important;
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
          /* moved filter chips to FiltersDropdown component */
          .map-topbar-search{
            width: 100%;
          }
          .map-topbar-search-input{
            width: 100%;
            border: 1.5px solid rgba(232, 230, 224, 0.95);
            background: rgba(255, 255, 255, 0.92);
            border-radius: 999px;
            padding: 8px 10px;
            font-weight: 800;
            font-size: 0.92rem;
            outline: none;
          }
          .map-topbar-search-input:focus{
            border-color: rgba(245, 192, 0, 0.55);
            box-shadow: 0 0 0 2px rgba(245, 192, 0, 0.22);
          }

          @media (max-width: 720px) {
            .map-page {
              gap: 0;
            }
            .map-page-stage {
              border-radius: 12px;
            }
          }
        `}})]})})}export{Se as default};
