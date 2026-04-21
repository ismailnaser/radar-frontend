import{r as d,a as U,t as Z,a3 as J,Z as K,j as e,L as x,w as O,a4 as Q,y as V,z as X,A as _}from"./index-BpETrDVb.js";import{M as Y,H as T,f as ee,j as P,P as R,S as W}from"./MainLayout-D1gNvmgX.js";import{G as te}from"./GuestAccessPrompt-B3GIKTWa.js";import{I as j}from"./ImageCarousel-BW75vxf7.js";import{v as m}from"./productImages-BYfYSUZM.js";import{c as re}from"./cartAccess-DdSevxjw.js";import{f as g}from"./apiErrors-Bccm4O3Y.js";import{T as w}from"./trash-2-CQDofV1L.js";import"./CustomButton-6zS12u6D.js";import"./chevron-left-CISDpb1T.js";const fe=()=>{const[f,u]=d.useState([]),[h,y]=d.useState([]),[L,N]=d.useState(!0),[S,B]=d.useState("products"),[E,ae]=d.useState(localStorage.getItem("isGuest")==="true"),{showAlert:o,showConfirm:z,showPrompt:G,showSelect:$}=U(),[ie,b]=d.useState(null),c=d.useRef(null),k=d.useCallback(async()=>{N(!0);try{const t=localStorage.getItem("token")&&localStorage.getItem("isGuest")!=="true"&&localStorage.getItem("user_type")==="shopper",[r,a,i]=await Promise.all([Z(),J(),t?K().catch(()=>({notices:[]})):Promise.resolve({notices:[]})]);u(Array.isArray(r)?r:(r==null?void 0:r.results)||[]),y(Array.isArray(a)?a:(a==null?void 0:a.results)||[]);const n=i==null?void 0:i.notices,l=Array.isArray(n)?n:[];for(const s of l){const p=typeof s=="string"?s:s==null?void 0:s.text;p&&await o(p,"تنبيه")}}catch(t){console.error("Error fetching favorites:",t),u([]),y([])}finally{N(!1)}},[o]);d.useEffect(()=>{k()},[k]);const A=async(t,{allowCreate:r=!0}={})=>{if(!re()){await o("ميزة السلال للأعضاء المسجّلين فقط (متسوّق، تاجر، أو مدير) وليست لوضع الزائر. سجّل الدخول ثم أعد المحاولة.");return}c.current=t,b(t);const a=await V(),i=Array.isArray(a)?a:[];if(i.length===0&&r){await C(t,{isFirstCart:!0});return}const n=i.map(s=>({id:String(s.id),label:s.name||`سلة #${s.id}`,value:s.id,badge:Array.isArray(s.items)?s.items.length:0})),l=await $("اختر السلة التي تريد إضافة المنتج إليها:","إضافة إلى أي سلة؟",n,r?{primaryActionLabel:"سلة جديدة"}:{});if(l!=null){if(l==="__primary__"){if(!r)return;await C();return}await D({id:l})}},C=async(t,{isFirstCart:r=!1}={})=>{const a=t??c.current;if(!a)return;const i=await G(r?"لا توجد لديك سلال بعد. اكتب اسماً لسلتك الأولى — يُضاف المنتج إليها مباشرة.":"اكتب اسماً للسلة الجديدة ثم يُضاف المنتج إليها.",r?"مثال: سلة اليوم":"اسم السلة...",r?"إنشاء أول سلة":"سلة جديدة");if(!i||!String(i).trim())return;const n=await X(String(i).trim());await _(n.id,a.productId??null,a.quantity??1,a.sponsoredAdId??null),await o(a.success||"تمت الإضافة للسلة.","تم"),b(null),c.current=null},D=async t=>{const r=c.current;r&&(await _(t.id,r.productId??null,r.quantity??1,r.sponsoredAdId??null),await o(r.success||"تمت الإضافة للسلة.","تم"),b(null),c.current=null)},v=async t=>{if(await z("إزالة هذا المنتج من المفضلة؟"))try{await O(t),u(a=>a.filter(i=>i.id!==t)),await o("تمت إزالة المنتج من المفضلة.","تم")}catch(a){await o(g(a,"حدث خطأ أثناء الإزالة."),"خطأ")}},q=async t=>{if(await z("إزالة هذا المحل من المفضلة؟"))try{await Q(t),y(a=>a.filter(i=>i.id!==t)),await o("تمت إزالة المحل من المفضلة.","تم")}catch(a){await o(g(a,"حدث خطأ أثناء الإزالة."),"خطأ")}},H=async t=>{if(t==null||t===""){await o("معرّف المنتج غير متوفر. افتح صفحة المتجر وأعد المحاولة.");return}try{await A({productId:t,sponsoredAdId:null,quantity:1,success:"تمت إضافة المنتج للسلة."},{allowCreate:!0})}catch(r){await o(g(r,"تعذرت الإضافة للسلة."),"خطأ")}},M=async t=>{try{await A({productId:null,sponsoredAdId:t,quantity:1,success:"تمت إضافة عرض الإعلان المستقل للسلة."})}catch(r){await o(g(r,"تعذرت الإضافة للسلة."),"خطأ")}},F=(t,r,a)=>e.jsxs("button",{type:"button",className:`fav-tab ${S===t?"fav-tab-active":""}`,onClick:()=>B(t),children:[r,a>0?e.jsx("span",{className:"fav-tab-count",children:a}):null]});return e.jsxs(Y,{children:[e.jsx("div",{className:"favorites-page",children:E?e.jsx(te,{title:"المفضلة متوفرة للأعضاء فقط",message:"سجل دخولك لتجميع المنتجات والمحلات المفضّلة لديك."}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"favorites-head flex-center",children:[e.jsx("div",{className:"favorites-head-icon",children:e.jsx(T,{size:24})}),e.jsx("h1",{className:"favorites-head-title",children:"المفضلة"})]}),e.jsxs("div",{className:"fav-tabs-row",children:[F("products","المنتجات المفضّلة",f.length),F("stores","المحلات المفضّلة",h.length)]}),L?e.jsx("p",{children:"جاري التحميل..."}):S==="products"?f.length>0?e.jsx("div",{className:"favorites-grid",children:f.map(t=>{const r=(t.product==null||t.product==="")&&t.sponsored_ad!=null,a=t.standalone_ad_display;if(r){if(!a)return e.jsxs("div",{className:"card favorite-card favorite-card--expired",children:[e.jsx("p",{className:"favorite-card-title",children:"عرض ممول مستقل"}),e.jsx("p",{className:"favorite-card-sub",children:"هذا الإعلان انتهى أو لم يعد متاحاً. يمكنك إزالته من المفضلة."}),e.jsx("button",{type:"button",className:"btn-primary",style:{marginTop:14},onClick:()=>v(t.id),children:"إزالة من المفضلة"})]},t.id);const I=m(a);return e.jsxs("div",{className:"card favorite-card",children:[e.jsx("div",{className:"favorite-card-media",children:I.length>0?e.jsx(j,{images:I,height:152,borderRadius:0}):e.jsx(ee,{size:40,color:"var(--text-secondary)"})}),e.jsxs("div",{className:"favorite-card-body",children:[e.jsx("span",{className:"badge",style:{display:"inline-block",marginBottom:8,background:"#FFF9E6",color:"var(--secondary)",fontWeight:800,fontSize:"0.78rem"},children:"عرض ممول مستقل — يُزال تلقائياً عند انتهاء الإعلان"}),a.store_name?e.jsxs("p",{style:{margin:"0 0 8px",fontSize:"0.88rem",fontWeight:800,color:"var(--secondary)"},children:["المتجر: ",a.store_name]}):null,e.jsxs("div",{className:"flex-center",style:{justifyContent:"space-between",marginBottom:"12px"},children:[e.jsx("h3",{style:{fontSize:"1.2rem",margin:0},children:a.title}),e.jsx("button",{type:"button",className:"action-btn delete",onClick:()=>v(t.id),style:{background:"none",border:"none",cursor:"pointer",color:"#FF5252"},"aria-label":"إزالة من المفضلة",children:e.jsx(w,{size:20})})]}),e.jsxs("p",{style:{color:"var(--secondary)",fontWeight:"bold",fontSize:"1.1rem"},children:[Number(a.product_price).toFixed(2)," ₪"]}),e.jsx("p",{style:{color:"#666",fontSize:"0.85rem",marginTop:"5px"},children:a.description||"—"}),e.jsxs("div",{className:"actions",style:{marginTop:"20px",display:"flex",gap:8,flexWrap:"wrap"},children:[e.jsxs("button",{type:"button",className:"btn-primary",style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"10px"},onClick:()=>M(t.sponsored_ad),children:[e.jsx(P,{size:18})," إضافة للسلة"]}),a.store!=null?e.jsx(x,{to:`/stores/${a.store}`,style:{display:"inline-flex",alignItems:"center",padding:"10px 14px",borderRadius:10,border:"1.5px solid var(--border)",textDecoration:"none",color:"var(--secondary)",fontWeight:700,fontSize:"0.9rem"},children:"المتجر"}):null]})]})]},t.id)}const i=t.product_details||{},n=i.id??t.product??null,l=Number(i.price),s=Number.isFinite(l)?l.toFixed(2):i.price??"",p=i.store??i.store_id??t.store??null;return e.jsxs("div",{className:"card favorite-card",children:[p?e.jsx(x,{to:`/stores/${p}`,state:{scrollToProductId:i.id},className:"favorite-card-media",title:"فتح المنتج داخل المتجر",children:m(i).length>0?e.jsx(j,{images:m(i),height:152,borderRadius:0}):e.jsx(R,{size:40,color:"var(--text-secondary)"})}):e.jsx("div",{className:"favorite-card-media",children:m(i).length>0?e.jsx(j,{images:m(i),height:152,borderRadius:0}):e.jsx(R,{size:40,color:"var(--text-secondary)"})}),e.jsxs("div",{className:"favorite-card-body",children:[i.store_name?e.jsxs("p",{style:{margin:"0 0 8px",fontSize:"0.88rem",fontWeight:800,color:"var(--secondary)"},children:["المتجر: ",i.store_name]}):null,e.jsxs("div",{className:"flex-center",style:{justifyContent:"space-between",marginBottom:"12px"},children:[e.jsx("h3",{style:{fontSize:"1.2rem",margin:0},children:i.name}),e.jsx("button",{type:"button",className:"action-btn delete",onClick:()=>v(t.id),style:{background:"none",border:"none",cursor:"pointer",color:"#FF5252"},"aria-label":"إزالة من المفضلة",children:e.jsx(w,{size:20})})]}),e.jsxs("div",{className:"favorite-card-price",children:[s," ₪"]}),e.jsx("div",{className:"favorite-card-desc",children:i.description||"لا يوجد وصف"}),e.jsxs("div",{className:"actions",style:{marginTop:"20px",display:"flex",gap:8,flexWrap:"wrap"},children:[e.jsxs("button",{type:"button",className:"btn-primary",style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"10px"},disabled:n==null||n==="",title:n==null||n===""?"لا يمكن الإضافة — بيانات المنتج ناقصة":"إضافة المنتج إلى سلة تختارها",onClick:()=>H(n),children:[e.jsx(P,{size:18})," إضافة للسلة"]}),i.store!=null?e.jsx(x,{to:`/stores/${i.store}`,className:"favorite-card-storebtn",style:{display:"inline-flex",alignItems:"center",padding:"10px 14px",borderRadius:10,border:"1.5px solid var(--border)",textDecoration:"none",color:"var(--secondary)",fontWeight:700,fontSize:"0.9rem"},children:"المتجر"}):null]})]})]},t.id)})}):e.jsxs("div",{className:"empty-state card flex-center",style:{flexDirection:"column",padding:"50px"},children:[e.jsx(T,{size:48,color:"#ccc"}),e.jsx("p",{style:{marginTop:"15px",color:"#777"},children:"لا توجد منتجات مفضّلة بعد."}),e.jsx("p",{style:{color:"#999",fontSize:"0.9rem"},children:"افتح صفحة أي متجر واضغط القلب بجانب المنتج."})]}):h.length>0?e.jsx("div",{className:"favorites-grid",style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(min(280px, 100%), 1fr))",gap:"20px"},children:h.map(t=>{const r=t.store_details||{};return e.jsxs("div",{className:"card favorite-card favorite-card--store",children:[e.jsxs("div",{className:"flex-center",style:{justifyContent:"space-between",marginBottom:"12px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[e.jsx("div",{style:{width:48,height:48,borderRadius:12,overflow:"hidden",background:"var(--grey-light)",display:"flex",alignItems:"center",justifyContent:"center"},children:r.logo?e.jsx("img",{src:r.logo,alt:"",style:{width:"100%",height:"100%",objectFit:"cover"},loading:"lazy",width:"88",height:"88"}):e.jsx(W,{size:22,color:"var(--text-secondary)"})}),e.jsxs("div",{children:[e.jsx("h3",{style:{fontSize:"1.15rem",margin:0},children:r.store_name}),e.jsx("div",{style:{fontSize:"0.85rem",color:"var(--text-secondary)",marginTop:4},children:r.category_name||"متجر"})]})]}),e.jsx("button",{type:"button",onClick:()=>q(t.id),style:{background:"none",border:"none",cursor:"pointer",color:"#FF5252"},"aria-label":"إزالة من المفضلة",children:e.jsx(w,{size:20})})]}),r.description?e.jsxs("p",{style:{color:"#666",fontSize:"0.88rem",lineHeight:1.5,marginTop:8},children:[r.description.slice(0,140),r.description.length>140?"…":""]}):null,e.jsx(x,{to:`/stores/${r.id}`,className:"btn-primary",style:{display:"inline-flex",marginTop:16,padding:"10px 16px",borderRadius:10,textDecoration:"none",fontWeight:800},children:"عرض المتجر"})]},t.id)})}):e.jsxs("div",{className:"empty-state card flex-center",style:{flexDirection:"column",padding:"50px"},children:[e.jsx(W,{size:48,color:"#ccc"}),e.jsx("p",{style:{marginTop:"15px",color:"#777"},children:"لا توجد محلات مفضّلة بعد."}),e.jsx("p",{style:{color:"#999",fontSize:"0.9rem"},children:"افتح صفحة المتجر واضغط القلب بجانب الاسم."})]})]})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .favorites-page{
          max-width: 1240px;
          margin-inline: auto;
          padding-inline: clamp(8px, 2.2vw, 22px);
          padding-bottom: 32px;
          box-sizing: border-box;
        }
        .favorites-head{
          justify-content: flex-start;
          gap: 14px;
          margin-bottom: 18px;
          flex-wrap: wrap;
        }
        .favorites-head-icon{
          background: linear-gradient(135deg, #ff6b6b, #ff3b3b);
          padding: 10px;
          border-radius: 14px;
          color: #fff;
          box-shadow: 0 10px 26px rgba(255, 82, 82, 0.22);
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .favorites-head-title{
          margin: 0;
          font-weight: 950;
          font-size: 1.65rem;
          color: var(--secondary);
          letter-spacing: -0.02em;
        }
        .fav-tabs-row{
          display: flex;
          gap: 10px;
          margin-bottom: 22px;
          flex-wrap: wrap;
        }
        .favorites-grid{
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }
        @media (max-width: 720px) {
          .favorites-grid{
            grid-template-columns: 1fr;
            gap: 10px;
            justify-items: center;
            max-width: min(280px, 94vw);
            margin-inline: auto;
          }
          .favorite-card{
            width: 100%;
            max-width: min(280px, 94vw);
            border-radius: 16px;
          }
          .favorite-card-media{
            max-height: 132px;
            min-height: 88px;
            aspect-ratio: 3 / 2;
          }
          .favorite-card-body{
            padding: 9px 11px 11px;
          }
          .favorite-card--store{
            padding: 14px;
          }
        }
        @media (min-width: 960px) {
          .favorites-grid{
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 12px;
          }
        }
        @media (min-width: 1200px) {
          .favorites-grid{
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 12px;
          }
        }
        .favorite-card{
          display: flex;
          flex-direction: column;
          overflow: hidden;
          padding: 0;
        }
        .favorite-card--store{
          aspect-ratio: auto;
          padding: 20px;
          gap: 0;
        }
        .favorite-card-media{
          flex: 0 0 auto;
          width: 100%;
          aspect-ratio: 3 / 2;
          max-height: 168px;
          min-height: 96px;
          background: var(--grey-light);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        a.favorite-card-media{
          text-decoration: none;
          color: inherit;
          cursor: pointer;
        }
        .favorite-card-body{
          flex: 1 1 auto;
          min-height: 0;
          display: flex;
          flex-direction: column;
          padding: 11px 12px 13px;
          overflow: hidden;
        }
        .favorite-card h3{
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .favorite-card-body p{
          margin-bottom: 8px;
        }
        .favorite-card-price{
          font-weight: 950;
          color: var(--secondary);
          font-size: 1.08rem;
          margin: 0 0 8px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          align-self: flex-start;
          padding: 7px 12px;
          border-radius: 999px;
          background: rgba(255, 204, 0, 0.22);
          border: 1px solid rgba(245, 192, 0, 0.45);
          box-shadow: 0 6px 18px rgba(245, 192, 0, 0.16);
        }
        .favorite-card-desc{
          color: var(--text-secondary);
          font-size: 0.86rem;
          line-height: 1.45;
          margin: 0 0 8px;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .favorite-card .actions{
          margin-top: auto !important;
        }
        .favorite-card .actions{
          display: grid !important;
          grid-template-columns: 1fr;
          gap: 8px !important;
          align-items: stretch;
          width: 100%;
        }
        .favorite-card .actions .btn-primary{
          width: 100%;
          padding: 10px 12px;
          font-size: 0.9rem;
          border-radius: 14px;
        }
        .favorite-card-storebtn{
          width: 100%;
          box-sizing: border-box;
          border-radius: 14px !important;
          font-weight: 900 !important;
          justify-content: center !important;
          background: var(--white) !important;
          border: 1.5px solid var(--border) !important;
        }
        .favorite-card--expired{
          padding: 20px;
        }
        .favorite-card-title{
          margin: 0;
          font-weight: 900;
          color: var(--secondary);
        }
        .favorite-card-sub{
          color: var(--text-secondary);
          font-size: 0.92rem;
          margin-top: 8px;
          line-height: 1.6;
        }
        .fav-tab {
          border: 1.5px solid var(--border);
          background: var(--white);
          color: var(--secondary);
          padding: 10px 18px;
          border-radius: 999px;
          font-weight: 800;
          font-size: 0.95rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: background 0.15s, border-color 0.15s;
        }
        .fav-tab:hover { background: var(--primary-light); border-color: var(--primary); }
        .fav-tab-active {
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
          color: var(--secondary);
          border-color: transparent;
          box-shadow: var(--shadow-gold);
        }
        .fav-tab-count {
          background: rgba(0,0,0,0.08);
          padding: 2px 8px;
          border-radius: 999px;
          font-size: 0.82rem;
        }
        .fav-tab-active .fav-tab-count { background: rgba(255,255,255,0.35); }
      `}})]})};export{fe as default};
