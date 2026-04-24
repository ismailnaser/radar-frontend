import{c as H,a as q,r as n,s as V,v as P,j as r,S as Z,L as F,z as D,A as _,B as k,x as J,y as K}from"./index-DCfiguep.js";import{M as O,T as M,H as Q}from"./MainLayout-MCq4V2LV.js";import{c as $}from"./cartAccess-DdSevxjw.js";import{f as X}from"./apiErrors-Bccm4O3Y.js";import{v as E}from"./productImages-BYfYSUZM.js";import{I as ee}from"./ImageCarousel-DXvnDo29.js";import"./chevron-left-DxwY8DZa.js";const S=24,ce=()=>{const[z]=H(),{showAlert:d,showPrompt:h,showSelect:L}=q(),b=Number(z.get("category")||""),c=(z.get("category_name")||"").trim(),[y,C]=n.useState([]),[R,A]=n.useState(!0),[U,I]=n.useState(1),[x,l]=n.useState({}),[re,v]=n.useState(null),w=n.useRef(null),B=$(),G=localStorage.getItem("isGuest")==="true",g=!!localStorage.getItem("token")&&!G;n.useEffect(()=>{let e=!1;return(async()=>{try{A(!0);const t=await V(Number.isFinite(b)?b:null);e||C(Array.isArray(t)?t:[])}catch(t){console.error(t),e||C([])}finally{e||A(!1)}})(),()=>{e=!0}},[b]),n.useEffect(()=>{if(!g){l({});return}let e=!1;return(async()=>{var t;try{const a=await P();if(e)return;const s={};for(const o of a||[]){const u=o.product??((t=o.product_details)==null?void 0:t.id);u!=null&&(s[String(u)]=o.id)}l(s)}catch{e||l({})}})(),()=>{e=!0}},[g]);const f=n.useMemo(()=>{const e=Array.isArray(y)?y:[];if(!c)return e;const t=c.toLowerCase();return e.filter(a=>String((a==null?void 0:a.store_category_name)||"").toLowerCase()===t)},[y,c]),p=Math.max(1,Math.ceil(f.length/S)),m=Math.min(U,p),T=n.useMemo(()=>{const e=(m-1)*S;return f.slice(e,e+S)},[f,m]),W=async e=>{if(!$()){await d("ميزة السلال متاحة للأعضاء المسجلين فقط.","تنبيه");return}const t=await h("أضف ملاحظة على المنتج (اختياري).","مثال: بدون سكر","ملاحظة",(e==null?void 0:e.note)||""),a={...e,note:t==null?"":String(t).trim()};w.current=a,v(a);const s=await D(),o=Array.isArray(s)?s:[];if(o.length===0){const i=await h("اكتب اسماً لسلتك الأولى.","سلة اليوم","إنشاء سلة");if(!i||!String(i).trim())return;const N=await _(String(i).trim());await k(N.id,a.productId,1,null,a.note||""),await d("تمت إضافة المنتج إلى السلة."),v(null),w.current=null;return}const u=o.map(i=>({id:String(i.id),label:i.name||`سلة #${i.id}`})),j=await L("اختر السلة:","إضافة إلى أي سلة؟",u,{primaryActionLabel:"سلة جديدة"});if(j!=null){if(j==="__primary__"){const i=await h("اسم السلة الجديدة","سلة جديدة","سلة جديدة");if(!i||!String(i).trim())return;const N=await _(String(i).trim());await k(N.id,a.productId,1,null,a.note||"")}else await k(Number(j),a.productId,1,null,a.note||"");await d("تمت إضافة المنتج إلى السلة."),v(null),w.current=null}},Y=async e=>{if(!g){await d("سجّل الدخول لاستخدام المفضلة.","تنبيه");return}const t=String(e.id);try{if(x[t])await J(x[t]),l(a=>{const s={...a};return delete s[t],s});else{await K(e.id,null);const s=(await P()||[]).find(o=>o.product!=null&&String(o.product)===t);s&&l(o=>({...o,[t]:s.id}))}}catch(a){await d(X(a,"تعذرت العملية."),"خطأ")}};return r.jsx(O,{children:r.jsxs("div",{className:"offers-page-wrap",children:[r.jsxs("header",{className:"offers-hero",children:[r.jsx("div",{className:"offers-hero-icon","aria-hidden":!0,children:r.jsx(M,{size:26,strokeWidth:2.25})}),r.jsxs("div",{className:"offers-hero-text",children:[r.jsx("h1",{className:"offers-hero-title",children:"منتجات القسم"}),r.jsx("p",{className:"offers-hero-sub",children:c?`كل منتجات قسم: ${c}`:"كل منتجات القسم المحدد"})]})]}),R?r.jsx("p",{className:"offers-loading",children:"جاري تحميل المنتجات..."}):f.length>0?r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"offers-grid",children:T.map(e=>r.jsxs("article",{className:"offers-card",children:[r.jsxs("div",{className:"offers-card-media",children:[E(e).length>0?r.jsx(ee,{images:E(e),fill:!0,borderRadius:0}):r.jsx("div",{className:"offers-card-media-fallback",children:"منتج"}),r.jsx("button",{type:"button",className:`offers-card-media-cartbtn${B?"":" offers-card-media-cartbtn--muted"}`,onClick:t=>{t.stopPropagation(),W({productId:e.id,note:""})},title:"إضافة إلى السلة","aria-label":"إضافة إلى السلة",children:r.jsx(Z,{size:18,strokeWidth:2,"aria-hidden":!0})}),r.jsx("button",{type:"button",className:`offers-card-media-favbtn${g?"":" offers-card-media-favbtn--muted"}`,onClick:t=>{t.stopPropagation(),Y(e)},"aria-label":x[String(e.id)]?"إزالة من المفضلة":"إضافة للمفضلة",children:r.jsx(Q,{size:20,strokeWidth:2,color:"#e91e63",fill:x[String(e.id)]?"#e91e63":"none"})})]}),r.jsxs("div",{className:"offers-card-body",children:[r.jsx("span",{className:"offers-card-store",children:e.store_name}),r.jsx("h2",{className:"offers-card-title",children:e.name}),Number(e.price)>0?r.jsxs("span",{className:"offers-price-now",children:[Number(e.price).toFixed(2)," ₪"]}):null,e.description?r.jsx("p",{className:"offers-card-desc",children:e.description}):null,r.jsxs("div",{className:"offers-card-actions",children:[r.jsx(F,{to:`/stores/${e.store}/item/product/${e.id}`,className:"offers-detailsbtn",children:"عرض التفاصيل"}),r.jsx(F,{to:`/stores/${e.store}#product-${e.id}`,className:"offers-storebtn",children:"عرض داخل المتجر"})]})]})]},e.id))}),p>1?r.jsxs("div",{className:"offers-pager","aria-label":"تصفح المنتجات",children:[r.jsx("button",{type:"button",onClick:()=>I(e=>Math.max(1,e-1)),disabled:m<=1,children:"السابق"}),r.jsxs("span",{className:"offers-pager-meta",children:["صفحة ",m," من ",p," — ",f.length," منتج"]}),r.jsx("button",{type:"button",onClick:()=>I(e=>Math.min(p,e+1)),disabled:m>=p,children:"التالي"})]}):null]}):r.jsxs("div",{className:"offers-empty card",children:[r.jsx(M,{size:44,color:"var(--text-light)","aria-hidden":!0}),r.jsx("p",{children:"لا توجد منتجات في هذا القسم حالياً."})]}),r.jsx("style",{children:`
          .offers-page-wrap{max-width:1240px;margin-inline:auto;padding-inline:clamp(8px,2.2vw,22px);padding-bottom:32px;box-sizing:border-box;}
          .offers-hero{display:flex;align-items:flex-start;gap:16px;margin-bottom:18px;padding:18px 20px;border-radius:22px;background:linear-gradient(135deg,rgba(255,250,232,.95) 0%,var(--white) 55%,var(--surface) 100%);border:1px solid rgba(245,192,0,.35);}
          .offers-hero-icon{flex-shrink:0;width:52px;height:52px;border-radius:16px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,var(--primary) 0%,var(--primary-hover) 100%);color:var(--secondary);}
          .offers-hero-title{margin:0;font-size:clamp(1.25rem,3.5vw,1.55rem);font-weight:900;color:var(--secondary);}
          .offers-hero-sub{margin:8px 0 0;font-size:.88rem;font-weight:600;color:var(--text-secondary);}
          .offers-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;}
          @media (min-width:900px){.offers-grid{grid-template-columns:repeat(4,minmax(0,1fr));}}
          .offers-card{border:1px solid rgba(232,230,224,.95);border-radius:14px;background:#fff;overflow:hidden;display:flex;flex-direction:column;}
          .offers-card-media{position:relative;aspect-ratio:4/2.7;background:#f3f3f3;}
          .offers-card-media-fallback{height:100%;display:flex;align-items:center;justify-content:center;font-weight:800;color:var(--text-secondary);}
          .offers-card-media-cartbtn{
            position:absolute;
            top:8px;
            inset-inline-start:8px;
            z-index:3;
            width:34px;
            height:34px;
            border-radius:11px;
            border:1px solid rgba(245,192,0,0.5);
            background:rgba(255,255,255,0.94);
            box-shadow:0 6px 18px rgba(26,29,38,0.12);
            color:var(--secondary);
            display:inline-flex;
            align-items:center;
            justify-content:center;
            cursor:pointer;
            transition: transform .12s ease, box-shadow .16s ease, filter .16s ease;
          }
          .offers-card-media-cartbtn--muted{opacity:.88;}
          .offers-card-media-cartbtn:hover:not(:disabled){
            transform:translateY(-1px) scale(1.04);
            box-shadow:0 8px 18px rgba(26,29,38,0.16);
            filter:brightness(1.02);
          }
          .offers-card-media-cartbtn:active{
            transform:scale(.9);
            filter:brightness(.98);
            box-shadow:0 3px 10px rgba(26,29,38,0.12);
          }
          .offers-card-media-favbtn{
            position:absolute;
            top:8px;
            inset-inline-end:8px;
            z-index:3;
            width:34px;
            height:34px;
            border-radius:11px;
            border:1px solid rgba(233,30,99,0.38);
            background:rgba(255,255,255,0.94);
            box-shadow:0 6px 18px rgba(26,29,38,0.12);
            color:#e91e63;
            display:inline-flex;
            align-items:center;
            justify-content:center;
            cursor:pointer;
            transition: transform .12s ease, box-shadow .16s ease, filter .16s ease;
          }
          .offers-card-media-favbtn--muted{opacity:.88;}
          .offers-card-media-favbtn:hover:not(:disabled){
            transform:translateY(-1px) scale(1.04);
            box-shadow:0 8px 18px rgba(26,29,38,0.16);
            filter:brightness(1.02);
          }
          .offers-card-media-favbtn:active{
            transform:scale(.9);
            filter:brightness(.98);
            box-shadow:0 3px 10px rgba(26,29,38,0.12);
          }
          .offers-card-body{padding:8px;display:flex;flex-direction:column;gap:5px}
          .offers-card-title{margin:0;font-size:.88rem;color:var(--secondary);}
          .offers-card-store{font-size:.78rem;color:var(--text-secondary);font-weight:800;}
          .offers-price-now{font-size:.9rem;font-weight:900;color:var(--secondary);}
          .offers-card-desc{margin:0;font-size:.76rem;color:var(--text-secondary);line-height:1.45;}
          .offers-card-actions{margin-top:auto;display:flex;flex-direction:column;gap:8px;}
          .offers-detailsbtn{
            width:100%;
            text-align:center;
            text-decoration:none;
            border-radius:12px;
            border:1.5px solid rgba(245,192,0,0.52);
            background:var(--primary-light);
            color:var(--secondary);
            font-weight:900;
            font-size:.76rem;
            padding:8px 10px;
            box-sizing:border-box;
            display:inline-block;
            cursor:pointer;
          }
          .offers-storebtn{
            width:100%;
            text-align:center;
            text-decoration:none;
            border-radius:12px;
            border:1.5px solid var(--primary);
            background:var(--white);
            color:var(--secondary);
            font-weight:900;
            font-size:.76rem;
            padding:8px 10px;
            box-sizing:border-box;
            display:inline-block;
            cursor:pointer;
          }
          .offers-detailsbtn:hover,.offers-storebtn:hover{
            transform:translateY(-1px) scale(1.01);
            filter:brightness(1.01);
            box-shadow:0 8px 16px rgba(245,192,0,.2);
          }
          .offers-pager{display:flex;align-items:center;justify-content:center;gap:10px;flex-wrap:wrap;margin-top:14px;}
          .offers-pager button{border-radius:10px;border:1px solid rgba(232,230,224,.95);background:linear-gradient(135deg,var(--primary) 0%,var(--primary-hover) 100%);color:var(--secondary);font-weight:900;padding:9px 13px;cursor:pointer;}
          .offers-pager-meta{font-size:.86rem;color:var(--text-secondary);font-weight:800;}
          .offers-loading{font-weight:800;color:var(--text-secondary);}
        `})]})})};export{ce as default};
