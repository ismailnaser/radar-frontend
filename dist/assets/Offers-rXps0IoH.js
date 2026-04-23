import{c as Q,r as n,a as X,v as k,j as t,S as Z,L as I,q as ee,x as F,y as E,z as re,A as te,B as M}from"./index-CuFDDgF-.js";import{M as ae,T as L,H as ie}from"./MainLayout-h57EYOUx.js";import{c as O}from"./cartAccess-DdSevxjw.js";import{I as se}from"./ImageCarousel-C-q20wwQ.js";import{v as T}from"./productImages-BYfYSUZM.js";import{f as R}from"./apiErrors-Bccm4O3Y.js";import"./chevron-left-C5HL-QIi.js";const N=20,me=()=>{const[z]=Q(),[b,$]=n.useState([]),[q,B]=n.useState(!0),[Y,y]=n.useState(1),{showAlert:d,showSelect:U,showPrompt:S}=X(),G=localStorage.getItem("isGuest")==="true",w=!!localStorage.getItem("token")&&!G,H=O(),[A,f]=n.useState({}),[_,x]=n.useState({}),[oe,v]=n.useState(null),m=n.useRef(null),j=(()=>{const e=z.get("category");if(e==null||e==="")return null;const r=Number(e);return Number.isFinite(r)?r:null})(),g=(z.get("category_name")||"").trim();n.useEffect(()=>{if(!w){f({}),x({});return}let e=!1;return(async()=>{try{const r=await k();if(e)return;const i={},s={};for(const a of r||[])a.product!=null&&a.product!==""?s[String(a.product)]=a.id:a.sponsored_ad!=null&&(i[a.sponsored_ad]=a.id);f(i),x(s)}catch{e||(f({}),x({}))}})(),()=>{e=!0}},[w]),n.useEffect(()=>{(async()=>{try{const r=await ee(j);$(r)}catch(r){console.error("Error fetching offers:",r)}finally{B(!1)}})()},[j]),n.useEffect(()=>{y(1)},[b.length]);const c=n.useMemo(()=>{const e=Array.isArray(b)?b:[];if(!g)return e;const r=g.toLowerCase();return e.filter(i=>String((i==null?void 0:i.store_category_name)||"").toLowerCase()===r)},[b,g]),h=Math.max(1,Math.ceil(((c==null?void 0:c.length)||0)/N)),u=Math.min(Y,h),W=n.useMemo(()=>{const e=Array.isArray(c)?c:[],r=(u-1)*N;return e.slice(r,r+N)},[c,u]),V=async e=>{if(!w){await d("سجّل الدخول لاستخدام المفضلة. وضع الزائر لا يدعمها.","تنبيه");return}try{if(!e.product){const s=A[e.id];if(s)await F(s),f(a=>{const o={...a};return delete o[e.id],o}),await d("أُزيل العرض المستقل من المفضلة.","تم");else{await E(null,e.id);const o=(await k()||[]).find(l=>l.sponsored_ad===e.id&&(l.product==null||l.product===""));o&&f(l=>({...l,[e.id]:o.id})),await d("تمت إضافة عرض الإعلان — يُزال تلقائياً عند انتهاء الإعلان.","تم")}return}const r=String(e.product),i=_[r];if(i)await F(i),x(s=>{const a={...s};return delete a[r],a}),await d("أُزيل المنتج من المفضلة.","تم");else{await E(e.product,e.id);const a=(await k()||[]).find(o=>o.product!=null&&String(o.product)===r);a&&x(o=>({...o,[r]:a.id})),await d("تمت إضافة المنتج للمفضلة.","تم")}}catch(r){await d(R(r,"تعذرت الإضافة للمفضلة."),"خطأ")}},C=e=>e.product?!!_[String(e.product)]:!!A[e.id],D=async e=>{if(!O()){await d("ميزة السلال للأعضاء المسجّلين فقط (متسوّق، تاجر، أو مدير) وليست لوضع الزائر. سجّل الدخول ثم أعد المحاولة.","تنبيه");return}const r=await S("أضف ملاحظة على هذا المنتج داخل السلة (اختياري). اترك الحقل فارغاً إذا لا تريد.","مثال: بدون بصل / توصيل بعد العصر","ملاحظة على المنتج",(e==null?void 0:e.note)||""),i={...e,note:r==null?"":String(r).trim()};m.current=i,v(i);const s=await re(),a=Array.isArray(s)?s:[];if(a.length===0){await P(i,{isFirstCart:!0});return}const o=a.map(p=>({id:String(p.id),label:p.name||`سلة #${p.id}`,value:p.id,badge:Array.isArray(p.items)?p.items.length:0})),l=await U("اختر السلة التي تريد إضافة المنتج إليها:","إضافة إلى أي سلة؟",o,{primaryActionLabel:"سلة جديدة"});if(l!=null){if(l==="__primary__"){await P();return}await J({id:l})}},P=async(e,{isFirstCart:r=!1}={})=>{const i=e??m.current;if(!i)return;const s=await S(r?"لا توجد لديك سلال بعد. اكتب اسماً لسلتك الأولى — يُضاف المنتج إليها مباشرة.":"اكتب اسماً للسلة الجديدة ثم يُضاف المنتج إليها.",r?"مثال: سلة اليوم":"اسم السلة...",r?"إنشاء أول سلة":"سلة جديدة");if(!s||!String(s).trim())return;const a=await te(String(s).trim());await M(a.id,i.productId??null,i.quantity??1,i.sponsoredAdId??null,i.note??""),await d("تمت إضافة المنتج إلى السلة.","تم"),v(null),m.current=null},J=async e=>{const r=m.current;r&&(await M(e.id,r.productId??null,r.quantity??1,r.sponsoredAdId??null,r.note??""),await d("تمت إضافة المنتج إلى السلة.","تم"),v(null),m.current=null)},K=async e=>{try{await D({productId:e.product??null,sponsoredAdId:e.id,quantity:1})}catch(r){await d(R(r,"تعذرت الإضافة للسلة."),"خطأ")}};return t.jsx(ae,{children:t.jsxs("div",{className:"offers-page-wrap",children:[t.jsxs("header",{className:"offers-hero",children:[t.jsx("div",{className:"offers-hero-icon","aria-hidden":!0,children:t.jsx(L,{size:26,strokeWidth:2.25})}),t.jsxs("div",{className:"offers-hero-text",children:[t.jsx("h1",{className:"offers-hero-title",children:"عروض حصرية"}),t.jsx("p",{className:"offers-hero-sub",children:j!=null||g?`كل عروض القسم: ${g||"المحدد"}`:"عروض مُختارة من المتاجر — بطاقات مرتبة لتصفّح مريح على كل الأجهزة"})]})]}),q?t.jsx("p",{className:"offers-loading",children:"جاري تحميل العروض..."}):c.length>0?t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"offers-grid",children:W.map(e=>t.jsxs("article",{className:"offers-card",children:[t.jsxs("div",{className:"offers-card-media",children:[T(e).length>0?t.jsx(se,{images:T(e),fill:!0,borderRadius:0}):t.jsx("div",{className:"offers-card-media-fallback",children:"عرض"}),t.jsx("button",{type:"button",className:`offers-card-media-cartbtn${H?"":" offers-card-media-cartbtn--muted"}`,onClick:r=>{r.stopPropagation(),K(e)},title:"إضافة إلى السلة","aria-label":"إضافة إلى السلة",children:t.jsx(Z,{size:18,strokeWidth:2,"aria-hidden":!0})}),t.jsx("button",{type:"button",className:`offers-card-media-favbtn${w?"":" offers-card-media-favbtn--muted"}`,onClick:r=>{r.stopPropagation(),V(e)},title:e.product?"":"يُزال من المفضلة عند انتهاء الإعلان","aria-label":C(e)?"إزالة من المفضلة":"إضافة للمفضلة",children:t.jsx(ie,{size:20,strokeWidth:2,color:"#e91e63",fill:C(e)?"#e91e63":"none"})})]}),t.jsxs("div",{className:"offers-card-body",children:[t.jsx("span",{className:"offers-card-store",children:e.store_name}),t.jsx(I,{to:`/stores/${e.store}`,state:e.product?{scrollToProductId:e.product}:void 0,className:"offers-card-title-link",title:"فتح المنتج داخل المتجر",children:t.jsx("h2",{className:"offers-card-title",children:e.title})}),Number(e.product_price)>0?t.jsxs("div",{className:"offers-card-prices",children:[e.product_details&&Number(e.product_details.price)!==Number(e.product_price)?t.jsxs("span",{className:"offers-price-old",children:[Number(e.product_details.price).toFixed(2)," ₪"]}):null,t.jsxs("span",{className:"offers-price-now",children:[Number(e.product_price).toFixed(2)," ₪"]}),e.product_details&&Number(e.product_details.price)!==Number(e.product_price)?t.jsx("span",{className:"offers-price-badge",children:"عرض"}):null]}):null,e.description?t.jsx("p",{className:"offers-card-desc",children:e.description}):null,t.jsx(I,{to:`/stores/${e.store}`,className:"offers-btn offers-btn--block",children:"عرض المتجر"})]})]},e.id))}),h>1?t.jsxs("div",{className:"offers-pager","aria-label":"تصفح العروض",children:[t.jsx("button",{type:"button",onClick:()=>y(e=>Math.max(1,e-1)),disabled:u<=1,children:"السابق"}),t.jsxs("span",{className:"offers-pager-meta",children:["صفحة ",u," من ",h," — ",c.length," عرضاً"]}),t.jsx("button",{type:"button",onClick:()=>y(e=>Math.min(h,e+1)),disabled:u>=h,children:"التالي"})]}):t.jsxs("p",{className:"offers-count-note","aria-live":"polite",children:[c.length," ",c.length===1?"عرض":"عروض"]})]}):t.jsxs("div",{className:"offers-empty card",children:[t.jsx(L,{size:44,color:"var(--text-light)","aria-hidden":!0}),t.jsx("p",{children:"لا توجد عروض حالياً. عد لاحقاً."})]}),t.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .offers-page-wrap {
            max-width: 1240px;
            margin-inline: auto;
            padding-inline: clamp(8px, 2.2vw, 22px);
            padding-bottom: 32px;
            box-sizing: border-box;
          }
          .offers-pager {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            gap: 12px;
            margin-top: 20px;
            padding: 14px 16px;
            border-radius: 18px;
            border: 1px solid rgba(232, 230, 224, 0.95);
            background: rgba(255, 255, 255, 0.92);
          }
          .offers-pager button {
            border-radius: 12px;
            border: 1px solid rgba(232, 230, 224, 0.95);
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
            color: var(--secondary);
            font-weight: 900;
            padding: 10px 16px;
            cursor: pointer;
            font-family: inherit;
          }
          .offers-pager button:disabled {
            opacity: 0.45;
            cursor: not-allowed;
          }
          .offers-pager-meta {
            font-weight: 800;
            font-size: 0.88rem;
            color: var(--text-secondary);
            text-align: center;
          }
          .offers-count-note {
            margin: 16px 0 0;
            text-align: center;
            font-size: 0.86rem;
            font-weight: 700;
            color: var(--text-secondary);
          }
          .offers-hero {
            display: flex;
            align-items: flex-start;
            gap: 16px;
            margin-bottom: clamp(22px, 4vw, 32px);
            padding: 20px 22px;
            border-radius: 22px;
            background: linear-gradient(135deg, rgba(255, 250, 232, 0.95) 0%, var(--white) 55%, var(--surface) 100%);
            border: 1px solid rgba(245, 192, 0, 0.35);
            box-shadow: 0 10px 32px rgba(30, 30, 46, 0.07);
          }
          .offers-hero-icon {
            flex-shrink: 0;
            width: 52px;
            height: 52px;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
            color: var(--secondary);
            box-shadow: var(--shadow-gold);
          }
          .offers-hero-title {
            margin: 0;
            font-size: clamp(1.35rem, 4vw, 1.65rem);
            font-weight: 900;
            color: var(--secondary);
            letter-spacing: -0.02em;
          }
          .offers-hero-sub {
            margin: 8px 0 0;
            font-size: 0.88rem;
            font-weight: 600;
            color: var(--text-secondary);
            line-height: 1.5;
            max-width: 520px;
          }
          .offers-loading {
            color: var(--text-secondary);
            font-weight: 700;
          }
          .offers-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
            align-items: start;
          }
          @media (max-width: 720px) {
            .offers-page-wrap {
              padding-inline: clamp(6px, 2vw, 14px);
            }
            .offers-hero {
              padding: 14px 14px;
              margin-bottom: 16px;
              border-radius: 16px;
            }
            .offers-hero-icon {
              width: 44px;
              height: 44px;
              border-radius: 14px;
            }
            .offers-hero-title {
              font-size: 1.15rem;
            }
            .offers-hero-sub {
              font-size: 0.8rem;
              margin-top: 6px;
            }
            .offers-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 8px;
              align-items: stretch;
            }
            .offers-card {
              width: 100%;
              max-width: none;
              border-radius: 14px;
              min-width: 0;
            }
            .offers-card-media {
              aspect-ratio: 3 / 2;
              min-height: 110px;
              max-height: 140px;
            }
            .offers-card-media-cartbtn {
              width: 32px;
              height: 32px;
              top: 6px;
              inset-inline-start: 6px;
              border-radius: 11px;
            }
            .offers-card-media-cartbtn svg {
              width: 15px;
              height: 15px;
            }
            .offers-card-media-favbtn {
              width: 32px;
              height: 32px;
              top: 6px;
              inset-inline-end: 6px;
              border-radius: 11px;
            }
            .offers-card-media-favbtn svg {
              width: 16px;
              height: 16px;
            }
            .offers-card-body {
              padding: 7px 8px 9px;
              gap: 0;
            }
            .offers-card-store {
              font-size: 0.62rem;
              padding: 3px 6px;
              margin-bottom: 4px;
              border-radius: 6px;
            }
            .offers-card-title {
              font-size: 0.78rem !important;
              margin: 0 0 4px !important;
              -webkit-line-clamp: 2;
            }
            .offers-card-prices {
              gap: 4px;
              margin-bottom: 4px;
            }
            .offers-price-old {
              font-size: 0.68rem;
            }
            .offers-price-now {
              font-size: 0.82rem;
            }
            .offers-price-badge {
              font-size: 0.58rem;
              padding: 2px 5px;
            }
            .offers-card-desc {
              font-size: 0.68rem;
              line-height: 1.4;
              margin: 0 0 6px;
              -webkit-line-clamp: 2;
            }
            .offers-btn {
              font-size: 0.68rem;
              padding: 7px 8px;
              border-radius: 10px;
              gap: 4px;
            }
            .offers-btn svg {
              width: 14px;
              height: 14px;
            }
            .offers-btn--block {
              min-height: 34px;
              padding: 6px 8px;
              font-size: 0.7rem;
              border-width: 1.5px;
            }
          }
          @media (min-width: 960px) {
            .offers-grid {
              grid-template-columns: repeat(3, 1fr);
              gap: 16px;
            }
          }
          @media (min-width: 1200px) {
            .offers-grid {
              grid-template-columns: repeat(4, minmax(0, 1fr));
              gap: 14px;
            }
          }
          .offers-card {
            border-radius: 18px;
            overflow: hidden;
            background: var(--white);
            border: 1px solid rgba(224, 223, 213, 0.95);
            box-shadow: 0 8px 28px rgba(30, 30, 46, 0.08);
            transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
            display: flex;
            flex-direction: column;
            min-height: 0;
          }
          .offers-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 14px 40px rgba(245, 192, 0, 0.16);
            border-color: rgba(245, 192, 0, 0.4);
          }
          .offers-card-media {
            flex: 0 0 auto;
            width: 100%;
            aspect-ratio: 3 / 2;
            min-height: 120px;
            max-height: 210px;
            background: linear-gradient(180deg, var(--grey-light), #f0efe8);
            position: relative;
            display: flex;
            flex-direction: column;
            min-width: 0;
          }
          .offers-card-media > .radar-image-carousel,
          .offers-card-media > .offers-card-media-fallback {
            flex: 1 1 auto;
            min-height: 0;
            width: 100%;
          }
          .offers-card-media img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .offers-card-media-cartbtn{
            position: absolute;
            top: 10px;
            inset-inline-start: 10px;
            z-index: 3;
            width: 40px;
            height: 40px;
            border-radius: 14px;
            border: 1px solid rgba(245,192,0,0.5);
            background: rgba(255, 255, 255, 0.94);
            box-shadow: 0 6px 18px rgba(26, 29, 38, 0.12);
            color: var(--secondary);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: transform 0.12s ease, filter 0.15s ease, box-shadow 0.15s ease;
          }
          .offers-card-media-cartbtn--muted {
            opacity: 0.88;
          }
          .offers-card-media-cartbtn:hover{
            transform: translateY(-1px);
            filter: brightness(1.02);
            box-shadow: 0 8px 22px rgba(245, 192, 0, 0.22);
          }
          .offers-card-media-cartbtn:active{
            transform: translateY(0);
          }
          .offers-card-media-favbtn{
            position: absolute;
            top: 10px;
            inset-inline-end: 10px;
            z-index: 3;
            width: 40px;
            height: 40px;
            border-radius: 14px;
            border: 1px solid rgba(233, 30, 99, 0.38);
            background: rgba(255, 255, 255, 0.94);
            box-shadow: 0 6px 18px rgba(26, 29, 38, 0.12);
            color: #e91e63;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: transform 0.12s ease, filter 0.15s ease, box-shadow 0.15s ease;
          }
          .offers-card-media-favbtn--muted {
            opacity: 0.88;
          }
          .offers-card-media-favbtn:hover{
            transform: translateY(-1px);
            filter: brightness(1.02);
            box-shadow: 0 8px 22px rgba(233, 30, 99, 0.18);
          }
          .offers-card-media-favbtn:active{
            transform: translateY(0);
          }
          .offers-card-media-fallback {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 900;
            color: var(--text-light);
            font-size: 1.1rem;
          }
          .offers-card-body {
            padding: 12px 14px 14px;
            flex: 1 1 auto;
            min-height: 0;
            display: flex;
            flex-direction: column;
            gap: 2px;
          }
          .offers-card-store {
            display: inline-block;
            font-size: 0.78rem;
            font-weight: 800;
            color: var(--secondary);
            background: var(--primary-light);
            padding: 5px 10px;
            border-radius: 8px;
            margin-bottom: 8px;
          }
          .offers-card-title {
            margin: 0 0 8px;
            font-size: 0.98rem;
            font-weight: 900;
            color: var(--secondary);
            line-height: 1.35;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .offers-card-title-link{
            text-decoration: none;
            color: inherit;
          }
          .offers-card-prices {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 8px;
            margin-bottom: 10px;
          }
          .offers-price-old {
            text-decoration: line-through;
            color: var(--text-secondary);
            font-size: 0.88rem;
            font-weight: 600;
          }
          .offers-price-now {
            font-weight: 900;
            font-size: 1.05rem;
            color: var(--secondary);
          }
          .offers-price-badge {
            font-size: 0.72rem;
            font-weight: 900;
            padding: 3px 8px;
            border-radius: 8px;
            background: rgba(245, 192, 0, 0.35);
            color: var(--secondary);
          }
          .offers-card-desc {
            margin: 0 0 14px;
            font-size: 0.88rem;
            color: var(--text-secondary);
            line-height: 1.55;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .offers-btn {
            font-family: inherit;
            font-weight: 800;
            font-size: 0.86rem;
            border-radius: 14px;
            padding: 11px 14px;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            text-decoration: none;
            border: none;
            transition: filter 0.15s ease, transform 0.12s ease;
          }
          .offers-btn:active {
            transform: scale(0.98);
          }
          .offers-btn--block {
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
            background: var(--white);
            border: 2px solid var(--primary);
            color: var(--secondary);
            margin-top: auto;
            flex-shrink: 0;
            min-height: 44px;
            line-height: 1.25;
            text-align: center;
            white-space: normal;
          }
          .offers-btn--block:hover {
            background: var(--primary-light);
          }
          .offers-empty {
            text-align: center;
            padding: 48px 24px;
            color: var(--text-secondary);
            font-weight: 700;
          }
          .offers-empty p {
            margin: 16px 0 0;
          }
        `}})]})})};export{me as default};
