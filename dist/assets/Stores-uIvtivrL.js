import{n as F,u as P,r as a,p as R,v as T,j as r,L as D}from"./index-CvDauiYR.js";import{M as U,m as $}from"./MainLayout-Br3_17I3.js";import{g as q}from"./storePinDefaults-BR9yF6Rx.js";import{s as H,a as K}from"./storeCategories-CcVhHY8P.js";import{F as W}from"./FiltersDropdown-plMZEfEc.js";const B=[31.5,34.4],_=12;function g(s){const n=Number(s==null?void 0:s.latitude),o=Number(s==null?void 0:s.longitude);return!(!Number.isFinite(n)||!Number.isFinite(o)||Math.abs(n)<.25&&Math.abs(o)<.25)}function v(s,n){const o=b=>b*Math.PI/180,j=o(n[0]-s[0]),i=o(n[1]-s[1]),h=Math.sin(j/2)**2,m=Math.cos(o(s[0]))*Math.cos(o(n[0]))*Math.sin(i/2)**2;return 2*6371*Math.asin(Math.sqrt(h+m))}function Z(){const{userMapLocation:s,setManualMapLocation:n,requestUserLocation:o,locating:L,locationFocusNonce:j}=F(),i=s||B,h=P(),[m,b]=a.useState([]),[G,N]=a.useState(!0),[u,M]=a.useState([]),[C,k]=a.useState(!0),[d,E]=a.useState([]),[f,O]=a.useState(!1),[A,y]=a.useState(1);a.useEffect(()=>{let e=!0;return N(!0),R().then(t=>{e&&b(Array.isArray(t)?t:[])}).catch(()=>{e&&b([])}).finally(()=>{e&&N(!1)}),()=>{e=!1}},[]),a.useEffect(()=>{let e=!0;return k(!0),T(i[0],i[1],null).then(t=>{e&&M(Array.isArray(t)?t:[])}).catch(()=>{e&&M([])}).finally(()=>{e&&k(!1)}),()=>{e=!1}},[i[0],i[1]]),a.useEffect(()=>{y(1)},[d,f]);const S=a.useMemo(()=>{const e=Array.isArray(u)?u:[];return d.length===0?e:e.filter(t=>H(t,d))},[u,d]),w=a.useMemo(()=>S.filter(e=>f?g(e):!0),[S,f]),p=a.useMemo(()=>{if(!i)return w;const e=i;return[...w].sort((t,l)=>g(t)?g(l)?v(e,[Number(t.latitude),Number(t.longitude)])-v(e,[Number(l.latitude),Number(l.longitude)]):-1:1)},[w,i]),x=Math.max(1,Math.ceil(p.length/_)),c=Math.min(A,x),z=a.useMemo(()=>{const e=(c-1)*_;return p.slice(e,e+_)},[p,c]),I=a.useMemo(()=>p.filter(e=>g(e)).length,[p]);return d.length===0||`${d.length}`,r.jsx(U,{children:r.jsxs("div",{className:"stores-page",children:[r.jsxs("section",{className:"stores-hero","aria-label":"عنوان الصفحة وفتح الخريطة",children:[r.jsx("div",{className:"stores-head",children:r.jsxs("div",{className:"stores-head__titles",children:[r.jsx("h1",{className:"stores-title",children:"المتاجر"}),r.jsx("p",{className:"stores-sub",children:"فلترة سريعة + خريطة منبثقة عند الضغط."}),r.jsx("div",{className:"stores-controls",style:{marginTop:"14px",justifyContent:"flex-start"},children:r.jsx(W,{buttonLabel:"فلاتر",title:"فلترة المتاجر حسب الأقسام",allLabel:"كل الأقسام",options:(m||[]).map(e=>({id:e.id,label:e.name})),selectedIds:d,onChangeSelectedIds:e=>E(Array.isArray(e)?e:[])})})]})}),r.jsxs("button",{type:"button",className:"stores-mini-map",onClick:()=>h("/map"),"aria-label":"فتح الخريطة",children:[r.jsx("span",{className:"stores-mini-map__bg","aria-hidden":!0}),r.jsx("span",{className:"stores-mini-map__shine","aria-hidden":!0}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap",position:"relative",zIndex:1,width:"100%",justifyContent:"flex-start"},children:[r.jsxs("span",{className:"stores-mini-map__badge",style:{margin:0,padding:"8px 12px"},children:[r.jsx($,{size:16,strokeWidth:2,"aria-hidden":!0}),"اضغط لفتح الخريطة"]}),r.jsxs("span",{className:"stores-mini-map__hint",style:{margin:0},children:[I," متجر على الخريطة"]})]})]})]}),C?r.jsx("div",{className:"stores-loading",children:"جاري تحميل المتاجر…"}):z.length===0?r.jsx("div",{className:"stores-empty",children:"لا توجد متاجر ضمن الفلاتر الحالية."}):r.jsx("div",{className:"stores-grid",role:"list",children:z.map(e=>{const t=q(e,m),l=i&&g(e)?v(i,[Number(e.latitude),Number(e.longitude)]):null;return r.jsxs(D,{to:`/stores/${e.id}`,className:"store-card",role:"listitem",children:[r.jsxs("div",{className:"store-card__text",children:[r.jsx("div",{className:"store-card__name",children:e.store_name}),r.jsxs("div",{className:"store-card__meta",children:[r.jsx("span",{className:"store-card__cat",children:K(e)}),r.jsx("span",{className:"store-card__dot","aria-hidden":!0}),r.jsx("span",{className:"store-card__dist",children:l!=null?`${l.toFixed(1)} كم`:"بدون مسافة"})]})]}),r.jsx("div",{className:"store-card__thumb","aria-hidden":!0,children:t.type==="image"?r.jsx("img",{className:"store-card__thumb-img",src:t.url,alt:"",loading:"lazy",width:"800",height:"800"}):r.jsx("span",{className:"store-card__thumb-emoji",style:{background:t.bg},children:t.emoji})})]},e.id)})}),x>1?r.jsxs("div",{className:"stores-pager","aria-label":"تنقل الصفحات",children:[r.jsx("button",{type:"button",onClick:()=>y(e=>Math.max(1,e-1)),disabled:c<=1,children:"السابق"}),r.jsxs("span",{children:[c," / ",x]}),r.jsx("button",{type:"button",onClick:()=>y(e=>Math.min(x,e+1)),disabled:c>=x,children:"التالي"})]}):null,r.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
          /* moved chips UI to FiltersDropdown component */
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
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            gap: 10px;
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
            margin-top: 0;
            display: block;
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

        `}})]})})}export{Z as default};
