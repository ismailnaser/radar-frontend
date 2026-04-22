import{r as t,o as f,s as y,j as e,L as g}from"./index-DwdOFtKv.js";import{M as b,b as w,h as j}from"./MainLayout-LB5HW8Va.js";import{c as N,a as k}from"./communityServiceCategoryVisual-BWfzN9ZR.js";const I=()=>{const[a,n]=t.useState([]),[c,d]=t.useState([]),[m,p]=t.useState(!0),x=localStorage.getItem("isGuest")==="true",v=!!localStorage.getItem("token")&&!x,l=localStorage.getItem("user_type")||"shopper",h=v&&(l==="shopper"||l==="merchant");t.useEffect(()=>{let r=!1;return(async()=>{try{const[s,i]=await Promise.all([f(),y()]);r||(n(Array.isArray(s)?s:[]),d(Array.isArray(i)?i:[]))}catch(s){console.error(s),r||(n([]),d([]))}finally{r||p(!1)}})(),()=>{r=!0}},[]);const u=t.useMemo(()=>{const r=new Map;for(const s of a)r.set(s.id,0);for(const s of c){const i=s.category;r.has(i)||r.set(i,0),r.set(i,r.get(i)+1)}return r},[a,c]);return e.jsx(b,{children:e.jsxs("div",{className:"services-page",children:[e.jsxs("header",{className:"services-hero",children:[e.jsx("div",{className:"services-hero-icon","aria-hidden":!0,children:e.jsx(w,{size:26,strokeWidth:2})}),e.jsx("h1",{className:"services-hero-title",children:"الخدمات المجتمعية"}),e.jsx("p",{className:"services-hero-sub",children:"نقاط طبية وتعليمية وتوزيع طعام ومياه ومؤسسات مجتمعية — تظهر على الخريطة بعد موافقة الإدارة."}),h?e.jsxs(g,{to:"/services/suggest",className:"services-cta",children:[e.jsx(j,{size:20,"aria-hidden":!0}),"اقترح نقطة خدمة"]}):e.jsx("p",{className:"services-guest-note",children:"لتقديم اقتراح: سجّل الدخول كمتسوّق أو كتاجر (وليس زائراً)."})]}),m?e.jsx("div",{className:"services-loading card",children:"جاري تحميل الأقسام…"}):a.length===0?e.jsx("p",{className:"services-empty",children:"لا توجد أقسام مفعّلة حالياً."}):e.jsx("div",{className:"services-grid",role:"list",children:a.map(r=>{const s=N(r.slug),i=k(r.slug),o=u.get(r.id)??0;return e.jsxs(g,{to:`/services/category/${encodeURIComponent(r.slug)}`,className:"services-grid-card card",role:"listitem",style:{"--svc-tone":s},children:[e.jsx("div",{className:"services-grid-card-visual","aria-hidden":!0,children:e.jsx("span",{className:"services-grid-card-emoji",children:i})}),e.jsxs("div",{className:"services-grid-card-body",children:[e.jsx("h2",{className:"services-grid-card-title",children:r.name}),r.description_hint?e.jsx("p",{className:"services-grid-card-hint",children:r.description_hint}):null,e.jsx("span",{className:"services-grid-card-count",children:o===0?"لا توجد نقاط بعد":`${o} ${o===1?"نقطة":"نقاط"} معتمدة`})]})]},r.id)})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        `}})]})})};export{I as default};
