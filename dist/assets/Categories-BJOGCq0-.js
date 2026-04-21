import{r as i,j as e,L as n,p as c}from"./index-BRoAb6GP.js";import{M as g,L as l}from"./MainLayout-PAPPIjtx.js";import{a as p}from"./storePinDefaults-BR9yF6Rx.js";import{C as m}from"./chevron-left-CICpcYFM.js";const f=()=>{const[o,t]=i.useState([]),[s,d]=i.useState(!0);return i.useEffect(()=>{(async()=>{try{const a=await c();t(Array.isArray(a)?a:[])}catch(a){console.error("Error fetching categories:",a)}finally{d(!1)}})()},[]),e.jsx(g,{children:e.jsxs("div",{className:"categories-page",children:[e.jsxs("header",{className:"categories-hero",children:[e.jsx("div",{className:"categories-hero-icon","aria-hidden":!0,children:e.jsx(l,{size:28,strokeWidth:2})}),e.jsx("h1",{className:"categories-hero-title",children:"أقسام رادار"}),e.jsx("p",{className:"categories-hero-sub",children:"اختر قسماً للانتقال إلى المتاجر القريبة في هذا النوع."})]}),s?e.jsx("div",{className:"categories-loading card",children:"جاري تحميل الأقسام…"}):o.length>0?e.jsx("div",{className:"categories-grid",children:o.map(r=>{const a=p(r.name);return e.jsxs(n,{to:`/?category=${r.id}`,className:"categories-card",children:[r.image?e.jsx("span",{className:"categories-card-photo-wrap",children:e.jsx("img",{className:"categories-card-photo",src:r.image,alt:"",loading:"lazy",width:"320",height:"220"})}):e.jsx("span",{className:"categories-card-emoji",style:{background:a.bg},children:a.emoji}),e.jsxs("div",{className:"categories-card-body",children:[e.jsx("h2",{className:"categories-card-name",children:r.name}),e.jsx("p",{className:"categories-card-desc",children:r.description||"عرض المحلات القريبة في هذا القسم"}),e.jsxs("span",{className:"categories-card-cta",children:["استكشف",e.jsx(m,{size:16,"aria-hidden":!0})]})]})]},r.id)})}):e.jsx("p",{className:"categories-empty",children:"لا توجد أقسام مسجلة حالياً."}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        `}})]})})};export{f as default};
