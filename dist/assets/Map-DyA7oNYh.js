import{o as X,b as Y,u as Z,c as ee,r as a,q as te,p as re,v as oe,x as ae,j as c,i as se}from"./index-Csgqv13q.js";import{M as ne}from"./MainLayout-DO4qX-Uc.js";import{S as ie}from"./ShopperMap-kY3ViTVL.js";import{F as ce}from"./FiltersDropdown-CsYof4Xb.js";import{s as me,a as ue}from"./storeCategories-CcVhHY8P.js";import"./LeafletInvalidateOnLayout-CCShosnL.js";import"./storePinDefaults-BR9yF6Rx.js";import"./communityPointCoords-kTz0Hp0U.js";import"./map-pin-BHXY1Ffm.js";import"./star-WOggZysK.js";const le=[31.5,34.4];function pe(i){return String(i||"").trim().toLowerCase()}function q(i){if(i==null)return[];const f=String(i).trim();if(!f)return[];const g=[];for(const M of f.split(",")){const b=Number(String(M).trim());Number.isFinite(b)&&g.push(b)}return Array.from(new Set(g))}function ve(){const i=se(),{userMapLocation:f,setManualMapLocation:g,clearUserMapLocation:M,requestUserLocation:b,locating:U,locationFocusNonce:$,searchQuery:F,setSearchQuery:S}=X(),l=Y(),A=Z(),[m,C]=ee(),v=f||le,[j,R]=a.useState([]),[z,O]=a.useState([]),[h,D]=a.useState([]),[y,G]=a.useState([]),[Q,k]=a.useState(!0),[N,T]=a.useState(null),[L,H]=a.useState(null);a.useEffect(()=>{let e=!0;return k(!0),Promise.all([te().catch(()=>[]),re().catch(()=>[]),oe(null).catch(()=>[]),i?Promise.resolve([]):ae(v[0],v[1],null).catch(()=>[])]).then(([t,r,o,p])=>{e&&(R(Array.isArray(t)?t:[]),O(Array.isArray(r)?r:[]),G(Array.isArray(o)?o:[]),D(Array.isArray(p)?p:[]))}).finally(()=>{e&&k(!1)}),()=>{e=!1}},[v[0],v[1],i]),a.useEffect(()=>{var p,n;const e=(p=l.state)==null?void 0:p.mapFocus;if(!e)return;const t=Number(e.lat),r=Number(e.lng);if(!Number.isFinite(t)||!Number.isFinite(r))return;g(t,r),T(e.storeId??null),H(e.communityPointId??null);const o=(n=l.state)==null?void 0:n.mapPreset;if(o){const u=new URLSearchParams;o.mode==="community"?u.set("mode","community"):o.mode==="stores"&&u.set("mode","stores"),o.category!=null&&String(o.category).trim()!==""&&u.set("category",String(o.category)),o.cc!=null&&String(o.cc).trim()!==""&&u.set("cc",String(o.cc));const E=o.q!=null?String(o.q).trim():"";E!==""&&u.set("q",E),A({pathname:l.pathname,search:u.toString()},{replace:!0,state:{}})}else A({pathname:l.pathname,search:l.search},{replace:!0,state:{}})},[l.state,l.pathname,l.search,A,g]),a.useEffect(()=>{const e=m.get("q")||"";e!==F&&S(e)},[m]),a.useEffect(()=>()=>{S("")},[S]),a.useEffect(()=>{if(!i)return;const e=m.get("mode"),t=new URLSearchParams(m);let r=!1;e!=="community"&&(t.set("mode","community"),r=!0),t.get("category")&&(t.delete("category"),r=!0),r&&C(t,{replace:!0})},[i,m,C]);const P=a.useCallback((e,t)=>{const r=new URLSearchParams(m);t==null||String(t)===""||String(t)==="all"?r.delete(e):r.set(e,String(t)),C(r,{replace:!0})},[m,C]),s=i||m.get("mode")==="community"?"community":"stores",x=q(m.get("category")),w=q(m.get("cc")),d=pe(F),_=a.useMemo(()=>{const e=Array.isArray(h)?h:[],t=x.length>0?e.filter(r=>me(r,x)):e;return d?t.filter(r=>`${r.store_name||""} ${ue(r)} ${r.description||""}`.toLowerCase().includes(d)):t},[h,x,d]),I=a.useMemo(()=>{const e=Array.isArray(y)?y:[],t=w.length>0?e.filter(r=>w.includes(Number(r.category))):e;return d?t.filter(r=>`${r.title||""} ${r.category_name||""} ${r.detail_description||""} ${r.address_text||""}`.toLowerCase().includes(d)):t},[y,w,d]),B=a.useMemo(()=>{const e=s==="stores"?_:[];if(s!=="stores"||N==null)return e;const t=Number(N);if(!Number.isFinite(t)||e.some(o=>Number(o==null?void 0:o.id)===t))return e;const r=(h||[]).find(o=>Number(o==null?void 0:o.id)===t);return r?[...e,r]:e},[s,_,h,N]),K=a.useMemo(()=>{const e=s==="community"?I:[];if(s!=="community"||L==null)return e;const t=Number(L);if(!Number.isFinite(t)||e.some(n=>Number(n==null?void 0:n.id)===t))return e;const r=(y||[]).find(n=>Number(n==null?void 0:n.id)===t),o=r?[...e,r]:e,p=new Set;return o.filter(n=>{const u=(n==null?void 0:n.id)!=null?String(n.id):"";return u?p.has(u)?!1:(p.add(u),!0):!0})},[s,I,y,L]),W=!!d||(s==="stores"?x.length>0:w.length>0),J=a.useCallback(async()=>{await b()},[b]),V=a.useMemo(()=>"calc(100dvh - 180px)",[]);return c.jsx(ne,{children:c.jsxs("div",{className:"map-page",children:[c.jsx("div",{className:"map-page-stage","aria-busy":Q?"true":"false",children:c.jsx(ie,{stores:B,communityPoints:K,categories:j,userLocation:f,locationFocusNonce:$,onManualLocationPick:g,autoFitStoresWhenNoUserLocation:!1,allowAutoCamera:!1,showGpsOnMap:!0,gpsLocating:U,onGpsClick:J,onClearUserLocation:M,mapHeight:V,isFullscreen:!0,gpsLabel:"موقعي",gpsLocatingLabel:"جاري الموقع…",gpsFabAlignStart:!0,focusOnResults:W,focusKind:s==="community"?"community":"stores",focusStoreId:s==="stores"?N:null,focusCommunityPointId:s==="community"?L:null,topControls:c.jsxs("div",{className:"map-topbar",onClick:e=>e.stopPropagation(),children:[c.jsxs("div",{className:"map-topbar-row",children:[i?null:c.jsx("button",{type:"button",className:`map-topbar-chip ${s==="stores"?"map-topbar-chip--active":""}`,onClick:()=>P("mode","stores"),children:"المتاجر"}),c.jsx("button",{type:"button",className:`map-topbar-chip ${s==="community"?"map-topbar-chip--active":""}`,onClick:()=>{i||P("mode","community")},disabled:i,children:"الخدمات"}),c.jsx(ce,{buttonLabel:"فلاتر",title:s==="stores"?"فلترة المتاجر حسب الأقسام":"فلترة الخدمات حسب الأقسام",allLabel:"الكل",options:(s==="stores"?j:z).map(e=>({id:e.id,label:e.name})),selectedIds:s==="stores"?x:w,onChangeSelectedIds:e=>{P(s==="stores"?"category":"cc",e&&e.length?e.join(","):"")}})]}),c.jsx("div",{className:"map-topbar-search",children:c.jsx("input",{className:"map-topbar-search-input",value:F,onChange:e=>{const t=e.target.value;S(t),P("q",t)},placeholder:s==="community"?"ابحث عن خدمة أو مؤسسة…":"ابحث عن متجر…"})})]})})}),c.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        `}})]})})}export{ve as default};
