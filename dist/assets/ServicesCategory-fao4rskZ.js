import{h as y,u as f,r as i,o as j,s as w,j as r,L as u}from"./index-D-O0uzi9.js";import{M as N,b as k}from"./MainLayout-DDN34u42.js";import{c as _,a as z}from"./communityServiceCategoryVisual-BWfzN9ZR.js";import{M as C}from"./map-pin-DyF0wAMB.js";import{A as S}from"./arrow-left-_jkNqVVt.js";const F=()=>{const{categorySlug:a}=y(),n=f(),[o,m]=i.useState([]),[p,g]=i.useState([]),[l,v]=i.useState(!0);i.useEffect(()=>{let e=!1;return(async()=>{try{const[t,c]=await Promise.all([j(),w()]);e||(m(Array.isArray(t)?t:[]),g(Array.isArray(c)?c:[]))}catch(t){console.error(t),e||(m([]),g([]))}finally{e||v(!1)}})(),()=>{e=!0}},[]);const s=i.useMemo(()=>o.find(e=>String(e.slug)===String(a)),[o,a]),x=i.useMemo(()=>s?p.filter(e=>Number(e.category)===Number(s.id)):[],[s,p]);i.useEffect(()=>{l||!o.length||(!a||!s)&&n("/services",{replace:!0})},[l,o.length,a,s,n]);const b=s?_(s.slug):"#1ebea5",h=s?z(s.slug):"✨",d=e=>{const t=Number(e==null?void 0:e.latitude),c=Number(e==null?void 0:e.longitude);return Number.isFinite(t)&&Number.isFinite(c)};return r.jsx(N,{children:r.jsxs("div",{className:"services-page services-category-page",children:[r.jsxs("nav",{className:"services-breadcrumb",children:[r.jsx(u,{to:"/services",className:"services-breadcrumb-link",children:"الخدمات المجتمعية"}),r.jsx("span",{className:"services-breadcrumb-sep","aria-hidden":!0,children:"/"}),r.jsx("span",{className:"services-breadcrumb-current",children:(s==null?void 0:s.name)||"…"})]}),r.jsxs("header",{className:"services-category-hero card",style:{"--cat-tone":b},children:[r.jsx("div",{className:"services-category-hero-visual","aria-hidden":!0,children:r.jsx("span",{className:"services-category-hero-emoji",children:h})}),r.jsx("h1",{className:"services-category-hero-title",children:(s==null?void 0:s.name)||"القسم"}),s!=null&&s.description_hint?r.jsx("p",{className:"services-category-hero-hint",children:s.description_hint}):null]}),l?r.jsx("div",{className:"services-loading card",children:"جاري تحميل النقاط…"}):x.length===0?r.jsx("p",{className:"services-empty card",children:"لا توجد نقاط معتمدة في هذا القسم بعد."}):r.jsx("ul",{className:"services-points",children:x.map(e=>r.jsxs("li",{className:"services-point",children:[r.jsx("div",{className:"services-point-title",children:e.title}),e.category_slug==="water"&&e.water_is_potable!=null?r.jsx("div",{className:"services-point-badge",children:e.water_is_potable?"مياه صالحة للشرب":"مياه غير صالحة للشرب"}):null,e.institution_scope?r.jsxs("div",{className:"services-point-meta",children:["النطاق: ",e.institution_scope_label||e.institution_scope]}):null,r.jsx("p",{className:"services-point-desc",children:e.detail_description}),r.jsx("p",{className:"services-point-address",children:e.address_text}),r.jsx("div",{className:"services-point-actions",children:r.jsxs("button",{type:"button",className:"services-point-mapbtn",disabled:!d(e),onClick:()=>{d(e)&&n("/map",{state:{mapFocus:{lat:e.latitude,lng:e.longitude,communityPointId:e.id},mapPreset:{mode:"community",cc:(s==null?void 0:s.id)??null}}})},title:d(e)?"عرض على الخريطة":"لا يوجد إحداثيات لهذا العنصر",children:[r.jsx(C,{size:16,"aria-hidden":!0}),"عرض على الخريطة"]})})]},e.id))}),r.jsxs("p",{className:"services-category-back-wrap",children:[r.jsxs("button",{type:"button",className:"services-category-back",onClick:()=>n(-1),children:[r.jsx(S,{size:18,"aria-hidden":!0}),"رجوع"]}),r.jsxs(u,{to:"/services",className:"services-category-back-alt",children:[r.jsx(k,{size:16,"aria-hidden":!0}),"كل الأقسام"]})]}),r.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        `}})]})})};export{F as default};
