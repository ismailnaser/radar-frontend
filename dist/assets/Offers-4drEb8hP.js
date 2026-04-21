import{r as d,a as V,t as v,j as r,S as D,L as A,q as J,w as _,x as P,y as K,z as Q,A as I}from"./index-XZ1LCLwc.js";import{M as X,T as C,H as Z}from"./MainLayout-DFUtA0Jr.js";import{c as F}from"./cartAccess-DdSevxjw.js";import{I as ee}from"./ImageCarousel-DAfdrWRM.js";import{v as E}from"./productImages-BYfYSUZM.js";import{f as M}from"./apiErrors-Bccm4O3Y.js";import"./chevron-left-DK4A_fnZ.js";const y=20,ce=()=>{const[n,O]=d.useState([]),[T,L]=d.useState(!0),[R,b]=d.useState(1),{showAlert:c,showSelect:Y,showPrompt:j}=V(),$=localStorage.getItem("isGuest")==="true",u=!!localStorage.getItem("token")&&!$,q=F(),[k,f]=d.useState({}),[N,x]=d.useState({}),[re,w]=d.useState(null),m=d.useRef(null);d.useEffect(()=>{if(!u){f({}),x({});return}let e=!1;return(async()=>{try{const t=await v();if(e)return;const i={},s={};for(const a of t||[])a.product!=null&&a.product!==""?s[String(a.product)]=a.id:a.sponsored_ad!=null&&(i[a.sponsored_ad]=a.id);f(i),x(s)}catch{e||(f({}),x({}))}})(),()=>{e=!0}},[u]),d.useEffect(()=>{(async()=>{try{const t=await J();O(t)}catch(t){console.error("Error fetching offers:",t)}finally{L(!1)}})()},[]),d.useEffect(()=>{b(1)},[n.length]);const g=Math.max(1,Math.ceil(((n==null?void 0:n.length)||0)/y)),h=Math.min(R,g),B=d.useMemo(()=>{const e=Array.isArray(n)?n:[],t=(h-1)*y;return e.slice(t,t+y)},[n,h]),U=async e=>{if(!u){await c("سجّل الدخول لاستخدام المفضلة. وضع الزائر لا يدعمها.","تنبيه");return}try{if(!e.product){const s=k[e.id];if(s)await _(s),f(a=>{const o={...a};return delete o[e.id],o}),await c("أُزيل العرض المستقل من المفضلة.","تم");else{await P(null,e.id);const o=(await v()||[]).find(l=>l.sponsored_ad===e.id&&(l.product==null||l.product===""));o&&f(l=>({...l,[e.id]:o.id})),await c("تمت إضافة عرض الإعلان — يُزال تلقائياً عند انتهاء الإعلان.","تم")}return}const t=String(e.product),i=N[t];if(i)await _(i),x(s=>{const a={...s};return delete a[t],a}),await c("أُزيل المنتج من المفضلة.","تم");else{await P(e.product,e.id);const a=(await v()||[]).find(o=>o.product!=null&&String(o.product)===t);a&&x(o=>({...o,[t]:a.id})),await c("تمت إضافة المنتج للمفضلة.","تم")}}catch(t){await c(M(t,"تعذرت الإضافة للمفضلة."),"خطأ")}},z=e=>e.product?!!N[String(e.product)]:!!k[e.id],G=async e=>{if(!F()){await c("ميزة السلال للأعضاء المسجّلين فقط (متسوّق، تاجر، أو مدير) وليست لوضع الزائر. سجّل الدخول ثم أعد المحاولة.","تنبيه");return}const t=await j("أضف ملاحظة على هذا المنتج داخل السلة (اختياري). اترك الحقل فارغاً إذا لا تريد.","مثال: بدون بصل / توصيل بعد العصر","ملاحظة على المنتج",(e==null?void 0:e.note)||""),i={...e,note:t==null?"":String(t).trim()};m.current=i,w(i);const s=await K(),a=Array.isArray(s)?s:[];if(a.length===0){await S(i,{isFirstCart:!0});return}const o=a.map(p=>({id:String(p.id),label:p.name||`سلة #${p.id}`,value:p.id,badge:Array.isArray(p.items)?p.items.length:0})),l=await Y("اختر السلة التي تريد إضافة المنتج إليها:","إضافة إلى أي سلة؟",o,{primaryActionLabel:"سلة جديدة"});if(l!=null){if(l==="__primary__"){await S();return}await H({id:l})}},S=async(e,{isFirstCart:t=!1}={})=>{const i=e??m.current;if(!i)return;const s=await j(t?"لا توجد لديك سلال بعد. اكتب اسماً لسلتك الأولى — يُضاف المنتج إليها مباشرة.":"اكتب اسماً للسلة الجديدة ثم يُضاف المنتج إليها.",t?"مثال: سلة اليوم":"اسم السلة...",t?"إنشاء أول سلة":"سلة جديدة");if(!s||!String(s).trim())return;const a=await Q(String(s).trim());await I(a.id,i.productId??null,i.quantity??1,i.sponsoredAdId??null,i.note??""),await c("تمت إضافة المنتج إلى السلة.","تم"),w(null),m.current=null},H=async e=>{const t=m.current;t&&(await I(e.id,t.productId??null,t.quantity??1,t.sponsoredAdId??null,t.note??""),await c("تمت إضافة المنتج إلى السلة.","تم"),w(null),m.current=null)},W=async e=>{try{await G({productId:e.product??null,sponsoredAdId:e.id,quantity:1})}catch(t){await c(M(t,"تعذرت الإضافة للسلة."),"خطأ")}};return r.jsx(X,{children:r.jsxs("div",{className:"offers-page-wrap",children:[r.jsxs("header",{className:"offers-hero",children:[r.jsx("div",{className:"offers-hero-icon","aria-hidden":!0,children:r.jsx(C,{size:26,strokeWidth:2.25})}),r.jsxs("div",{className:"offers-hero-text",children:[r.jsx("h1",{className:"offers-hero-title",children:"عروض حصرية"}),r.jsx("p",{className:"offers-hero-sub",children:"عروض مُختارة من المتاجر — بطاقات مرتبة لتصفّح مريح على كل الأجهزة"})]})]}),T?r.jsx("p",{className:"offers-loading",children:"جاري تحميل العروض..."}):n.length>0?r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"offers-grid",children:B.map(e=>r.jsxs("article",{className:"offers-card",children:[r.jsxs("div",{className:"offers-card-media",children:[E(e).length>0?r.jsx(ee,{images:E(e),fill:!0,borderRadius:0}):r.jsx("div",{className:"offers-card-media-fallback",children:"عرض"}),r.jsx("button",{type:"button",className:`offers-card-media-cartbtn${q?"":" offers-card-media-cartbtn--muted"}`,onClick:t=>{t.stopPropagation(),W(e)},title:"إضافة إلى السلة","aria-label":"إضافة إلى السلة",children:r.jsx(D,{size:18,strokeWidth:2,"aria-hidden":!0})}),r.jsx("button",{type:"button",className:`offers-card-media-favbtn${u?"":" offers-card-media-favbtn--muted"}`,onClick:t=>{t.stopPropagation(),U(e)},title:e.product?"":"يُزال من المفضلة عند انتهاء الإعلان","aria-label":z(e)?"إزالة من المفضلة":"إضافة للمفضلة",children:r.jsx(Z,{size:20,strokeWidth:2,color:"#e91e63",fill:z(e)?"#e91e63":"none"})})]}),r.jsxs("div",{className:"offers-card-body",children:[r.jsx("span",{className:"offers-card-store",children:e.store_name}),r.jsx(A,{to:`/stores/${e.store}`,state:e.product?{scrollToProductId:e.product}:void 0,className:"offers-card-title-link",title:"فتح المنتج داخل المتجر",children:r.jsx("h2",{className:"offers-card-title",children:e.title})}),Number(e.product_price)>0?r.jsxs("div",{className:"offers-card-prices",children:[e.product_details&&Number(e.product_details.price)!==Number(e.product_price)?r.jsxs("span",{className:"offers-price-old",children:[Number(e.product_details.price).toFixed(2)," ₪"]}):null,r.jsxs("span",{className:"offers-price-now",children:[Number(e.product_price).toFixed(2)," ₪"]}),e.product_details&&Number(e.product_details.price)!==Number(e.product_price)?r.jsx("span",{className:"offers-price-badge",children:"عرض"}):null]}):null,e.description?r.jsx("p",{className:"offers-card-desc",children:e.description}):null,r.jsx(A,{to:`/stores/${e.store}`,className:"offers-btn offers-btn--block",children:"عرض المتجر"})]})]},e.id))}),g>1?r.jsxs("div",{className:"offers-pager","aria-label":"تصفح العروض",children:[r.jsx("button",{type:"button",onClick:()=>b(e=>Math.max(1,e-1)),disabled:h<=1,children:"السابق"}),r.jsxs("span",{className:"offers-pager-meta",children:["صفحة ",h," من ",g," — ",n.length," عرضاً"]}),r.jsx("button",{type:"button",onClick:()=>b(e=>Math.min(g,e+1)),disabled:h>=g,children:"التالي"})]}):r.jsxs("p",{className:"offers-count-note","aria-live":"polite",children:[n.length," ",n.length===1?"عرض":"عروض"]})]}):r.jsxs("div",{className:"offers-empty card",children:[r.jsx(C,{size:44,color:"var(--text-light)","aria-hidden":!0}),r.jsx("p",{children:"لا توجد عروض حالياً. عد لاحقاً."})]}),r.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        `}})]})})};export{ce as default};
