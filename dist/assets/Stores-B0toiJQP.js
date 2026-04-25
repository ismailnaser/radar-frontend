import{n as D,u as $,c as q,r as t,p as H,w as K,j as r,L as W}from"./index-3KljEs72.js";import{M as B,m as G}from"./MainLayout-BleNp4n1.js";import{g as O}from"./storePinDefaults-BR9yF6Rx.js";import{s as Y}from"./storeCategories-CcVhHY8P.js";import{F as J}from"./FiltersDropdown--RSCf82g.js";const Q=[31.5,34.4],M=12;function V(a,n){if(a===n)return!0;if(!Array.isArray(a)||!Array.isArray(n)||a.length!==n.length)return!1;for(let i=0;i<a.length;i+=1)if(Number(a[i])!==Number(n[i]))return!1;return!0}function u(a){const n=Number(a==null?void 0:a.latitude),i=Number(a==null?void 0:a.longitude);return!(!Number.isFinite(n)||!Number.isFinite(i)||Math.abs(n)<.25&&Math.abs(i)<.25)}function S(a,n){const i=b=>b*Math.PI/180,k=i(n[0]-a[0]),o=i(n[1]-a[1]),y=Math.sin(k/2)**2,l=Math.cos(i(a[0]))*Math.cos(i(n[0]))*Math.sin(o/2)**2;return 2*6371*Math.asin(Math.sqrt(y+l))}function ie(){const{userMapLocation:a,setManualMapLocation:n,requestUserLocation:i,locating:I,locationFocusNonce:k}=D(),o=a||Q,y=$(),[l,b]=q(),[z,L]=t.useState([]),[X,A]=t.useState(!0),[w,C]=t.useState([]),[T,E]=t.useState(!0),[c,v]=t.useState([]),[_,Z]=t.useState(!1),P=t.useRef(!1),j=t.useMemo(()=>{const e=Number(l.get("page"));return Number.isFinite(e)&&e>0?Math.floor(e):1},[l]),[h,f]=t.useState(j);t.useEffect(()=>{const e=(l.get("category")||"").trim();if(!e){v(d=>d.length===0?d:[]);return}const s=e.split(",").map(d=>Number(String(d).trim())).filter(d=>Number.isFinite(d)&&d>0),p=Array.from(new Set(s));v(d=>V(d,p)?d:p)},[l]),t.useEffect(()=>{f(j)},[j]),t.useEffect(()=>{let e=!0;return A(!0),H().then(s=>{e&&L(Array.isArray(s)?s:[])}).catch(()=>{e&&L([])}).finally(()=>{e&&A(!1)}),()=>{e=!1}},[]),t.useEffect(()=>{let e=!0;return E(!0),K(o[0],o[1],null).then(s=>{e&&C(Array.isArray(s)?s:[])}).catch(()=>{e&&C([])}).finally(()=>{e&&E(!1)}),()=>{e=!1}},[o[0],o[1]]),t.useEffect(()=>{if(!P.current){P.current=!0;return}f(1)},[c,_]),t.useEffect(()=>{const e=new URLSearchParams(l);h>1?e.set("page",String(h)):e.delete("page"),e.toString()!==l.toString()&&b(e,{replace:!0})},[h,l,b]);const F=t.useMemo(()=>{const e=Array.isArray(w)?w:[];return c.length===0?e:e.filter(s=>Y(s,c))},[w,c]),N=t.useMemo(()=>F.filter(e=>_?u(e):!0),[F,_]),g=t.useMemo(()=>{if(!o)return N;const e=o;return[...N].sort((s,p)=>u(s)?u(p)?S(e,[Number(s.latitude),Number(s.longitude)])-S(e,[Number(p.latitude),Number(p.longitude)]):-1:1)},[N,o]),x=Math.max(1,Math.ceil(g.length/M)),m=Math.min(h,x),R=t.useMemo(()=>{const e=(m-1)*M;return g.slice(e,e+M)},[g,m]),U=t.useMemo(()=>g.filter(e=>u(e)).length,[g]);return c.length===0||`${c.length}`,r.jsx(B,{children:r.jsxs("div",{className:"stores-page",children:[r.jsxs("section",{className:"stores-hero","aria-label":"عنوان الصفحة وفتح الخريطة",children:[r.jsx("div",{className:"stores-head",children:r.jsxs("div",{className:"stores-head__titles",children:[r.jsx("h1",{className:"stores-title",children:"المتاجر"}),r.jsx("p",{className:"stores-sub",children:"فلترة سريعة + خريطة منبثقة عند الضغط."}),r.jsx("div",{className:"stores-controls",style:{marginTop:"14px",justifyContent:"flex-start"},children:r.jsx(J,{buttonLabel:"فلاتر",title:"فلترة المتاجر حسب الأقسام",allLabel:"كل الأقسام",options:(z||[]).map(e=>({id:e.id,label:e.name})),selectedIds:c,onChangeSelectedIds:e=>v(Array.isArray(e)?e:[])})})]})}),r.jsxs("button",{type:"button",className:"stores-mini-map",onClick:()=>y("/map"),"aria-label":"فتح الخريطة",children:[r.jsx("span",{className:"stores-mini-map__bg","aria-hidden":!0}),r.jsx("span",{className:"stores-mini-map__shine","aria-hidden":!0}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap",position:"relative",zIndex:1,width:"100%",justifyContent:"flex-start"},children:[r.jsxs("span",{className:"stores-mini-map__badge",style:{margin:0,padding:"8px 12px"},children:[r.jsx(G,{size:16,strokeWidth:2,"aria-hidden":!0}),"اضغط لفتح الخريطة"]}),r.jsxs("span",{className:"stores-mini-map__hint",style:{margin:0},children:[U," متجر على الخريطة"]})]})]})]}),T?r.jsx("div",{className:"stores-loading",children:"جاري تحميل المتاجر…"}):R.length===0?r.jsx("div",{className:"stores-empty",children:"لا توجد متاجر ضمن الفلاتر الحالية."}):r.jsx("div",{className:"stores-grid",role:"list",children:R.map(e=>{const s=O(e,z),p=o&&u(e)?S(o,[Number(e.latitude),Number(e.longitude)]):null;return r.jsxs(W,{to:`/stores/${e.id}`,className:"store-card",role:"listitem",children:[r.jsxs("div",{className:"store-card__text",children:[r.jsx("div",{className:"store-card__name",children:e.store_name}),r.jsx("div",{className:"store-card__meta",children:r.jsx("span",{className:"store-card__dist",children:p!=null?`${p.toFixed(1)} كم`:"بدون مسافة"})})]}),r.jsx("div",{className:"store-card__thumb","aria-hidden":!0,children:s.type==="image"?r.jsx("img",{className:"store-card__thumb-img",src:s.url,alt:"",loading:"lazy",width:"800",height:"800"}):r.jsx("span",{className:"store-card__thumb-emoji",style:{background:s.bg},children:s.emoji})})]},e.id)})}),x>1?r.jsxs("div",{className:"stores-pager","aria-label":"تنقل الصفحات",children:[r.jsx("button",{type:"button",onClick:()=>f(e=>Math.max(1,e-1)),disabled:m<=1,children:"السابق"}),r.jsxs("span",{children:[m," / ",x]}),r.jsx("button",{type:"button",onClick:()=>f(e=>Math.min(x,e+1)),disabled:m>=x,children:"التالي"})]}):null,r.jsx("style",{dangerouslySetInnerHTML:{__html:`
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

        `}})]})})}export{ie as default};
