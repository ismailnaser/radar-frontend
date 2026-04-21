import{n as V,b as X,u as Y,c as Z,r as s,p as tt,o as et,s as rt,v as ot,j as i}from"./index-BRoAb6GP.js";import{M as at}from"./MainLayout-PAPPIjtx.js";import{S as st}from"./ShopperMap-xAMso9xa.js";import{F as nt}from"./FiltersDropdown-BbIbVbLy.js";import"./LeafletInvalidateOnLayout-CnehPFHS.js";import"./storePinDefaults-BR9yF6Rx.js";import"./communityPointCoords-kTz0Hp0U.js";import"./map-pin-C-yGXydy.js";import"./star-C9RwJPam.js";const it=[31.5,34.4];function ct(l){return String(l||"").trim().toLowerCase()}function E(l){if(l==null)return[];const g=String(l).trim();if(!g)return[];const x=[];for(const w of g.split(",")){const S=Number(String(w).trim());Number.isFinite(S)&&x.push(S)}return Array.from(new Set(x))}function yt(){const{userMapLocation:l,setManualMapLocation:g,clearUserMapLocation:x,requestUserLocation:w,locating:S,locationFocusNonce:$,searchQuery:P,setSearchQuery:M}=V(),m=X(),F=Y(),[p,j]=Z(),C=l||it,[k,U]=s.useState([]),[z,R]=s.useState([]),[b,D]=s.useState([]),[f,G]=s.useState([]),[Q,A]=s.useState(!0),[N,T]=s.useState(null),[v,H]=s.useState(null);s.useEffect(()=>{let t=!0;return A(!0),Promise.all([tt().catch(()=>[]),et().catch(()=>[]),rt(null).catch(()=>[]),ot(C[0],C[1],null).catch(()=>[])]).then(([e,r,o,u])=>{t&&(U(Array.isArray(e)?e:[]),R(Array.isArray(r)?r:[]),G(Array.isArray(o)?o:[]),D(Array.isArray(u)?u:[]))}).finally(()=>{t&&A(!1)}),()=>{t=!1}},[C[0],C[1]]),s.useEffect(()=>{var u,n;const t=(u=m.state)==null?void 0:u.mapFocus;if(!t)return;const e=Number(t.lat),r=Number(t.lng);if(!Number.isFinite(e)||!Number.isFinite(r))return;g(e,r),T(t.storeId??null),H(t.communityPointId??null);const o=(n=m.state)==null?void 0:n.mapPreset;if(o){const c=new URLSearchParams;o.mode==="community"?c.set("mode","community"):o.mode==="stores"&&c.set("mode","stores"),o.category!=null&&String(o.category).trim()!==""&&c.set("category",String(o.category)),o.cc!=null&&String(o.cc).trim()!==""&&c.set("cc",String(o.cc));const q=o.q!=null?String(o.q).trim():"";q!==""&&c.set("q",q),F({pathname:m.pathname,search:c.toString()},{replace:!0,state:{}})}else F({pathname:m.pathname,search:m.search},{replace:!0,state:{}})},[m.state,m.pathname,m.search,F,g]),s.useEffect(()=>{const t=p.get("q")||"";t!==P&&M(t)},[p]);const L=s.useCallback((t,e)=>{const r=new URLSearchParams(p);e==null||String(e)===""||String(e)==="all"?r.delete(t):r.set(t,String(e)),j(r,{replace:!0})},[p,j]),a=p.get("mode")==="community"?"community":"stores",h=E(p.get("category")),y=E(p.get("cc")),d=ct(P),_=s.useMemo(()=>{const t=Array.isArray(b)?b:[],e=h.length>0?t.filter(r=>h.includes(Number(r.category))):t;return d?e.filter(r=>`${r.store_name||""} ${r.category_name||""} ${r.description||""}`.toLowerCase().includes(d)):e},[b,h,d]),I=s.useMemo(()=>{const t=Array.isArray(f)?f:[],e=y.length>0?t.filter(r=>y.includes(Number(r.category))):t;return d?e.filter(r=>`${r.title||""} ${r.category_name||""} ${r.detail_description||""} ${r.address_text||""}`.toLowerCase().includes(d)):e},[f,y,d]),O=s.useMemo(()=>{const t=a==="stores"?_:[];if(a!=="stores"||N==null)return t;const e=Number(N);if(!Number.isFinite(e)||t.some(o=>Number(o==null?void 0:o.id)===e))return t;const r=(b||[]).find(o=>Number(o==null?void 0:o.id)===e);return r?[...t,r]:t},[a,_,b,N]),B=s.useMemo(()=>{const t=a==="community"?I:[];if(a!=="community"||v==null)return t;const e=Number(v);if(!Number.isFinite(e)||t.some(n=>Number(n==null?void 0:n.id)===e))return t;const r=(f||[]).find(n=>Number(n==null?void 0:n.id)===e),o=r?[...t,r]:t,u=new Set;return o.filter(n=>{const c=(n==null?void 0:n.id)!=null?String(n.id):"";return c?u.has(c)?!1:(u.add(c),!0):!0})},[a,I,f,v]),K=!!d||(a==="stores"?h.length>0:y.length>0),W=s.useCallback(async()=>{await w()},[w]),J=s.useMemo(()=>"calc(100dvh - 180px)",[]);return i.jsx(at,{children:i.jsxs("div",{className:"map-page",children:[i.jsx("div",{className:"map-page-stage","aria-busy":Q?"true":"false",children:i.jsx(st,{stores:O,communityPoints:B,categories:k,userLocation:l,locationFocusNonce:$,onManualLocationPick:g,autoFitStoresWhenNoUserLocation:!1,allowAutoCamera:!1,showGpsOnMap:!0,gpsLocating:S,onGpsClick:W,onClearUserLocation:x,mapHeight:J,isFullscreen:!0,gpsLabel:"موقعي",gpsLocatingLabel:"جاري الموقع…",gpsFabAlignStart:!0,focusOnResults:K,focusKind:a==="community"?"community":"stores",focusStoreId:a==="stores"?N:null,focusCommunityPointId:a==="community"?v:null,topControls:i.jsxs("div",{className:"map-topbar",onClick:t=>t.stopPropagation(),children:[i.jsxs("div",{className:"map-topbar-row",children:[i.jsx("button",{type:"button",className:`map-topbar-chip ${a==="stores"?"map-topbar-chip--active":""}`,onClick:()=>L("mode","stores"),children:"المتاجر"}),i.jsx("button",{type:"button",className:`map-topbar-chip ${a==="community"?"map-topbar-chip--active":""}`,onClick:()=>L("mode","community"),children:"الخدمات"}),i.jsx(nt,{buttonLabel:"فلاتر",title:a==="stores"?"فلترة المتاجر حسب الأقسام":"فلترة الخدمات حسب الأقسام",allLabel:"الكل",options:(a==="stores"?k:z).map(t=>({id:t.id,label:t.name})),selectedIds:a==="stores"?h:y,onChangeSelectedIds:t=>{L(a==="stores"?"category":"cc",t&&t.length?t.join(","):"")}})]}),i.jsx("div",{className:"map-topbar-search",children:i.jsx("input",{className:"map-topbar-search-input",value:P,onChange:t=>{const e=t.target.value;M(e),L("q",e)},placeholder:a==="community"?"ابحث عن خدمة أو مؤسسة…":"ابحث عن متجر…"})})]})})}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
              gap: 10px;
            }
            .map-page-stage {
              border-radius: 20px;
            }
          }
        `}})]})})}export{yt as default};
