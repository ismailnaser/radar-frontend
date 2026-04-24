import{n as V,b as X,u as Y,c as Z,r as a,p as tt,o as et,t as rt,w as ot,j as i}from"./index-CQGeUD4O.js";import{M as at}from"./MainLayout-C4Pi49iX.js";import{S as st}from"./ShopperMap-DAlugYtf.js";import{F as nt}from"./FiltersDropdown-DeP9O9vR.js";import{s as it,a as ct}from"./storeCategories-CcVhHY8P.js";import"./LeafletInvalidateOnLayout-Nec7IJxX.js";import"./storePinDefaults-BR9yF6Rx.js";import"./communityPointCoords-kTz0Hp0U.js";import"./map-pin-DgwUpEDZ.js";import"./star-DG1VAZqZ.js";const ut=[31.5,34.4];function mt(l){return String(l||"").trim().toLowerCase()}function q(l){if(l==null)return[];const g=String(l).trim();if(!g)return[];const x=[];for(const w of g.split(",")){const S=Number(String(w).trim());Number.isFinite(S)&&x.push(S)}return Array.from(new Set(x))}function St(){const{userMapLocation:l,setManualMapLocation:g,clearUserMapLocation:x,requestUserLocation:w,locating:S,locationFocusNonce:$,searchQuery:M,setSearchQuery:C}=V(),u=X(),F=Y(),[p,A]=Z(),v=l||ut,[j,U]=a.useState([]),[z,R]=a.useState([]),[b,D]=a.useState([]),[f,G]=a.useState([]),[Q,k]=a.useState(!0),[N,T]=a.useState(null),[L,H]=a.useState(null);a.useEffect(()=>{let t=!0;return k(!0),Promise.all([tt().catch(()=>[]),et().catch(()=>[]),rt(null).catch(()=>[]),ot(v[0],v[1],null).catch(()=>[])]).then(([e,r,o,m])=>{t&&(U(Array.isArray(e)?e:[]),R(Array.isArray(r)?r:[]),G(Array.isArray(o)?o:[]),D(Array.isArray(m)?m:[]))}).finally(()=>{t&&k(!1)}),()=>{t=!1}},[v[0],v[1]]),a.useEffect(()=>{var m,n;const t=(m=u.state)==null?void 0:m.mapFocus;if(!t)return;const e=Number(t.lat),r=Number(t.lng);if(!Number.isFinite(e)||!Number.isFinite(r))return;g(e,r),T(t.storeId??null),H(t.communityPointId??null);const o=(n=u.state)==null?void 0:n.mapPreset;if(o){const c=new URLSearchParams;o.mode==="community"?c.set("mode","community"):o.mode==="stores"&&c.set("mode","stores"),o.category!=null&&String(o.category).trim()!==""&&c.set("category",String(o.category)),o.cc!=null&&String(o.cc).trim()!==""&&c.set("cc",String(o.cc));const E=o.q!=null?String(o.q).trim():"";E!==""&&c.set("q",E),F({pathname:u.pathname,search:c.toString()},{replace:!0,state:{}})}else F({pathname:u.pathname,search:u.search},{replace:!0,state:{}})},[u.state,u.pathname,u.search,F,g]),a.useEffect(()=>{const t=p.get("q")||"";t!==M&&C(t)},[p]),a.useEffect(()=>()=>{C("")},[C]);const P=a.useCallback((t,e)=>{const r=new URLSearchParams(p);e==null||String(e)===""||String(e)==="all"?r.delete(t):r.set(t,String(e)),A(r,{replace:!0})},[p,A]),s=p.get("mode")==="community"?"community":"stores",h=q(p.get("category")),y=q(p.get("cc")),d=mt(M),_=a.useMemo(()=>{const t=Array.isArray(b)?b:[],e=h.length>0?t.filter(r=>it(r,h)):t;return d?e.filter(r=>`${r.store_name||""} ${ct(r)} ${r.description||""}`.toLowerCase().includes(d)):e},[b,h,d]),I=a.useMemo(()=>{const t=Array.isArray(f)?f:[],e=y.length>0?t.filter(r=>y.includes(Number(r.category))):t;return d?e.filter(r=>`${r.title||""} ${r.category_name||""} ${r.detail_description||""} ${r.address_text||""}`.toLowerCase().includes(d)):e},[f,y,d]),O=a.useMemo(()=>{const t=s==="stores"?_:[];if(s!=="stores"||N==null)return t;const e=Number(N);if(!Number.isFinite(e)||t.some(o=>Number(o==null?void 0:o.id)===e))return t;const r=(b||[]).find(o=>Number(o==null?void 0:o.id)===e);return r?[...t,r]:t},[s,_,b,N]),B=a.useMemo(()=>{const t=s==="community"?I:[];if(s!=="community"||L==null)return t;const e=Number(L);if(!Number.isFinite(e)||t.some(n=>Number(n==null?void 0:n.id)===e))return t;const r=(f||[]).find(n=>Number(n==null?void 0:n.id)===e),o=r?[...t,r]:t,m=new Set;return o.filter(n=>{const c=(n==null?void 0:n.id)!=null?String(n.id):"";return c?m.has(c)?!1:(m.add(c),!0):!0})},[s,I,f,L]),K=!!d||(s==="stores"?h.length>0:y.length>0),W=a.useCallback(async()=>{await w()},[w]),J=a.useMemo(()=>"calc(100dvh - 180px)",[]);return i.jsx(at,{children:i.jsxs("div",{className:"map-page",children:[i.jsx("div",{className:"map-page-stage","aria-busy":Q?"true":"false",children:i.jsx(st,{stores:O,communityPoints:B,categories:j,userLocation:l,locationFocusNonce:$,onManualLocationPick:g,autoFitStoresWhenNoUserLocation:!1,allowAutoCamera:!1,showGpsOnMap:!0,gpsLocating:S,onGpsClick:W,onClearUserLocation:x,mapHeight:J,isFullscreen:!0,gpsLabel:"موقعي",gpsLocatingLabel:"جاري الموقع…",gpsFabAlignStart:!0,focusOnResults:K,focusKind:s==="community"?"community":"stores",focusStoreId:s==="stores"?N:null,focusCommunityPointId:s==="community"?L:null,topControls:i.jsxs("div",{className:"map-topbar",onClick:t=>t.stopPropagation(),children:[i.jsxs("div",{className:"map-topbar-row",children:[i.jsx("button",{type:"button",className:`map-topbar-chip ${s==="stores"?"map-topbar-chip--active":""}`,onClick:()=>P("mode","stores"),children:"المتاجر"}),i.jsx("button",{type:"button",className:`map-topbar-chip ${s==="community"?"map-topbar-chip--active":""}`,onClick:()=>P("mode","community"),children:"الخدمات"}),i.jsx(nt,{buttonLabel:"فلاتر",title:s==="stores"?"فلترة المتاجر حسب الأقسام":"فلترة الخدمات حسب الأقسام",allLabel:"الكل",options:(s==="stores"?j:z).map(t=>({id:t.id,label:t.name})),selectedIds:s==="stores"?h:y,onChangeSelectedIds:t=>{P(s==="stores"?"category":"cc",t&&t.length?t.join(","):"")}})]}),i.jsx("div",{className:"map-topbar-search",children:i.jsx("input",{className:"map-topbar-search-input",value:M,onChange:t=>{const e=t.target.value;C(e),P("q",e)},placeholder:s==="community"?"ابحث عن خدمة أو مؤسسة…":"ابحث عن متجر…"})})]})})}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .map-page {
            position: fixed;
            inset: clamp(6px, 1.2vw, 10px);
            z-index: 1;
            width: auto;
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
        `}})]})})}export{St as default};
