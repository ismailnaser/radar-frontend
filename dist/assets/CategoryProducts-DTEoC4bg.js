import{c as V,a as Z,r as s,s as J,v as _,j as r,S as K,L as E,z as O,A as M,B as S,x as Q,y as X}from"./index-BYfKCLdA.js";import{M as ee,T as $,H as re}from"./MainLayout-CbAxM022.js";import{c as L}from"./cartAccess-DdSevxjw.js";import{f as te}from"./apiErrors-Bccm4O3Y.js";import{v as B}from"./productImages-BYfYSUZM.js";import{I as ae}from"./ImageCarousel-BxZQWly6.js";import"./chevron-left-BautS1pY.js";const z=24,pe=()=>{const[C]=V(),{showAlert:l,showPrompt:h,showSelect:R}=Z(),b=Number(C.get("category")||""),f=(C.get("category_name")||"").trim(),[y,P]=s.useState([]),[U,I]=s.useState(!0),[D,A]=s.useState(1),[w,F]=s.useState({}),[g,p]=s.useState({}),[se,v]=s.useState(null),j=s.useRef(null),G=L(),T=localStorage.getItem("isGuest")==="true",x=!!localStorage.getItem("token")&&!T;s.useEffect(()=>{let e=!1;return(async()=>{try{I(!0);const t=await J(Number.isFinite(b)?b:null);e||P(Array.isArray(t)?t:[])}catch(t){console.error(t),e||P([])}finally{e||I(!1)}})(),()=>{e=!0}},[b]),s.useEffect(()=>{if(!x){p({});return}let e=!1;return(async()=>{var t;try{const a=await _();if(e)return;const o={};for(const i of a||[]){const u=i.product??((t=i.product_details)==null?void 0:t.id);u!=null&&(o[String(u)]=i.id)}p(o)}catch{e||p({})}})(),()=>{e=!0}},[x]);const d=s.useMemo(()=>{const e=Array.isArray(y)?y:[];if(!f)return e;const t=f.toLowerCase();return e.filter(a=>String((a==null?void 0:a.store_category_name)||"").toLowerCase()===t)},[y,f]),m=Math.max(1,Math.ceil(d.length/z)),c=Math.min(D,m),W=s.useMemo(()=>{const e=(c-1)*z;return d.slice(e,e+z)},[d,c]);s.useEffect(()=>{F({})},[d.length,c]);const Y=async e=>{if(!L()){await l("ميزة السلال متاحة للأعضاء المسجلين فقط.","تنبيه");return}const t=await h("أضف ملاحظة على المنتج (اختياري).","مثال: بدون سكر","ملاحظة",(e==null?void 0:e.note)||""),a={...e,note:t==null?"":String(t).trim()};j.current=a,v(a);const o=await O(),i=Array.isArray(o)?o:[];if(i.length===0){const n=await h("اكتب اسماً لسلتك الأولى.","سلة اليوم","إنشاء سلة");if(!n||!String(n).trim())return;const N=await M(String(n).trim());await S(N.id,a.productId,1,null,a.note||""),await l("تمت إضافة المنتج إلى السلة."),v(null),j.current=null;return}const u=i.map(n=>({id:String(n.id),label:n.name||`سلة #${n.id}`})),k=await R("اختر السلة:","إضافة إلى أي سلة؟",u,{primaryActionLabel:"سلة جديدة"});if(k!=null){if(k==="__primary__"){const n=await h("اسم السلة الجديدة","سلة جديدة","سلة جديدة");if(!n||!String(n).trim())return;const N=await M(String(n).trim());await S(N.id,a.productId,1,null,a.note||"")}else await S(Number(k),a.productId,1,null,a.note||"");await l("تمت إضافة المنتج إلى السلة."),v(null),j.current=null}},H=async e=>{if(!x){await l("سجّل الدخول لاستخدام المفضلة.","تنبيه");return}const t=String(e.id);try{if(g[t])await Q(g[t]),p(a=>{const o={...a};return delete o[t],o});else{await X(e.id,null);const o=(await _()||[]).find(i=>i.product!=null&&String(i.product)===t);o&&p(i=>({...i,[t]:o.id}))}}catch(a){await l(te(a,"تعذرت العملية."),"خطأ")}},q=e=>{F(t=>({...t,[e]:!t[e]}))};return r.jsx(ee,{children:r.jsxs("div",{className:"offers-page-wrap",children:[r.jsxs("header",{className:"offers-hero",children:[r.jsx("div",{className:"offers-hero-icon","aria-hidden":!0,children:r.jsx($,{size:26,strokeWidth:2.25})}),r.jsxs("div",{className:"offers-hero-text",children:[r.jsx("h1",{className:"offers-hero-title",children:"منتجات القسم"}),r.jsx("p",{className:"offers-hero-sub",children:f?`كل منتجات قسم: ${f}`:"كل منتجات القسم المحدد"})]})]}),U?r.jsx("p",{className:"offers-loading",children:"جاري تحميل المنتجات..."}):d.length>0?r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"offers-grid",children:W.map(e=>r.jsxs("article",{className:"offers-card",children:[r.jsxs("div",{className:"offers-card-media",children:[B(e).length>0?r.jsx(ae,{images:B(e),fill:!0,borderRadius:0}):r.jsx("div",{className:"offers-card-media-fallback",children:"منتج"}),r.jsx("button",{type:"button",className:`offers-card-media-cartbtn${G?"":" offers-card-media-cartbtn--muted"}`,onClick:t=>{t.stopPropagation(),Y({productId:e.id,note:""})},title:"إضافة إلى السلة","aria-label":"إضافة إلى السلة",children:r.jsx(K,{size:18,strokeWidth:2,"aria-hidden":!0})}),r.jsx("button",{type:"button",className:`offers-card-media-favbtn${x?"":" offers-card-media-favbtn--muted"}`,onClick:t=>{t.stopPropagation(),H(e)},"aria-label":g[String(e.id)]?"إزالة من المفضلة":"إضافة للمفضلة",children:r.jsx(re,{size:20,strokeWidth:2,color:"#e91e63",fill:g[String(e.id)]?"#e91e63":"none"})})]}),r.jsxs("div",{className:"offers-card-body",children:[r.jsx("span",{className:"offers-card-store",children:e.store_name}),r.jsx("h2",{className:"offers-card-title",children:e.name}),Number(e.price)>0?r.jsxs("span",{className:"offers-price-now",children:[Number(e.price).toFixed(2)," ₪"]}):null,e.description?r.jsxs("div",{className:"offers-card-desc-wrap",children:[r.jsx("p",{className:`offers-card-desc${w[e.id]?" offers-card-desc--expanded":""}`,children:e.description}),String(e.description).length>150?r.jsx("button",{type:"button",className:"offers-card-desc-toggle",onClick:()=>q(e.id),"aria-expanded":w[e.id]?"true":"false",children:w[e.id]?"عرض أقل":"عرض المزيد"}):null]}):null,r.jsxs("div",{className:"offers-card-actions",children:[r.jsx(E,{to:`/stores/${e.store}/item/product/${e.id}`,className:"offers-detailsbtn",children:"عرض التفاصيل"}),r.jsx(E,{to:`/stores/${e.store}#product-${e.id}`,className:"offers-storebtn",children:"عرض داخل المتجر"})]})]})]},e.id))}),m>1?r.jsxs("div",{className:"offers-pager","aria-label":"تصفح المنتجات",children:[r.jsx("button",{type:"button",onClick:()=>A(e=>Math.max(1,e-1)),disabled:c<=1,children:"السابق"}),r.jsxs("span",{className:"offers-pager-meta",children:["صفحة ",c," من ",m," — ",d.length," منتج"]}),r.jsx("button",{type:"button",onClick:()=>A(e=>Math.min(m,e+1)),disabled:c>=m,children:"التالي"})]}):null]}):r.jsxs("div",{className:"offers-empty card",children:[r.jsx($,{size:44,color:"var(--text-light)","aria-hidden":!0}),r.jsx("p",{children:"لا توجد منتجات في هذا القسم حالياً."})]}),r.jsx("style",{children:`
          .offers-page-wrap{max-width:1240px;margin-inline:auto;padding-inline:clamp(8px,2.2vw,22px);padding-bottom:32px;box-sizing:border-box;}
          .offers-hero{display:flex;align-items:flex-start;gap:16px;margin-bottom:18px;padding:18px 20px;border-radius:22px;background:linear-gradient(135deg,rgba(255,250,232,.95) 0%,var(--white) 55%,var(--surface) 100%);border:1px solid rgba(245,192,0,.35);}
          .offers-hero-icon{flex-shrink:0;width:52px;height:52px;border-radius:16px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,var(--primary) 0%,var(--primary-hover) 100%);color:var(--secondary);}
          .offers-hero-title{margin:0;font-size:clamp(1.25rem,3.5vw,1.55rem);font-weight:900;color:var(--secondary);}
          .offers-hero-sub{margin:8px 0 0;font-size:.88rem;font-weight:600;color:var(--text-secondary);}
          .offers-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;align-items:stretch;}
          @media (min-width:900px){.offers-grid{grid-template-columns:repeat(4,minmax(0,1fr));}}
          .offers-card{border:1px solid rgba(232,230,224,.95);border-radius:14px;background:#fff;overflow:hidden;display:flex;flex-direction:column;height:100%;}
          .offers-card-media{position:relative;aspect-ratio:4/2.7;background:#f3f3f3;display:flex;min-height:0;}
          .offers-card-media > .radar-image-carousel,.offers-card-media > .offers-card-media-fallback{flex:1 1 auto;width:100%;min-height:0;}
          .offers-card-media img{display:block;width:100%;height:100%;object-fit:cover;}
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
          .offers-card-body{padding:8px;display:flex;flex-direction:column;gap:5px;flex:1 1 auto;min-height:0;}
          .offers-card-title{margin:0;font-size:.88rem;color:var(--secondary);}
          .offers-card-store{font-size:.78rem;color:var(--text-secondary);font-weight:800;}
          .offers-price-now{font-size:.9rem;font-weight:900;color:var(--secondary);}
          .offers-card-desc-wrap{margin:0 0 4px;}
          .offers-card-desc{margin:0;font-size:.76rem;color:var(--text-secondary);line-height:1.45;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;}
          .offers-card-desc--expanded{display:block;-webkit-line-clamp:unset;overflow:visible;}
          .offers-card-desc-toggle{margin-top:4px;border:none;background:transparent;color:var(--secondary);font-weight:800;font-size:.7rem;cursor:pointer;padding:0;}
          .offers-card-desc-toggle:hover{text-decoration:underline;}
          .offers-card-actions{margin-top:auto;padding-top:6px;display:flex;flex-direction:column;gap:8px;}
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
        `})]})})};export{pe as default};
