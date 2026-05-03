import{h as O,u as X,a as Y,r as n,a9 as Z,w as tt,j as a,L as P,S as et,A as at,C as U,y as rt,z as it,B as st}from"./index-C-uy7Y56.js";import{M as nt,H as lt}from"./MainLayout-OjiTTNwV.js";import{I as ot}from"./ImageCarousel-C1a-APyy.js";import{c as dt}from"./cartAccess-DdSevxjw.js";import{v as ct}from"./productImages-BYfYSUZM.js";import{I as ut}from"./image-D2VWd0rA.js";import{C as mt,a as pt}from"./chevron-up-BcOX0UUf.js";import"./chevron-left-8xiNii6g.js";function Nt(){const{storeId:m,itemType:p,itemId:k}=O(),A=X(),{showAlert:c,showPrompt:C,showSelect:Q}=Y(),[g,F]=n.useState(!0),[o,G]=n.useState(null),[x,q]=n.useState(""),[w,f]=n.useState(!1),[N,u]=n.useState(null),[_,h]=n.useState(1),R=localStorage.getItem("isGuest")==="true",y=!!localStorage.getItem("token")&&!R,j=dt();n.useEffect(()=>{let r=!1;return(async()=>{var i,e;try{F(!0);const s=await Z(m);r||(G(s),q(""))}catch(s){r||q(((e=(i=s==null?void 0:s.response)==null?void 0:i.data)==null?void 0:e.detail)||"تعذر تحميل تفاصيل المنتج.")}finally{r||F(!1)}})(),()=>{r=!0}},[m]);const t=n.useMemo(()=>{if(!o)return null;const r=Number(k);return Number.isFinite(r)?p==="product"?(o.products||[]).find(i=>Number(i.id)===r)||null:p==="sponsored"&&(o.sponsored_ads||[]).find(i=>Number(i.id)===r)||null:null},[o,p,k]),M=ct(t),l=p==="sponsored",T=(t==null?void 0:t.name)||(t==null?void 0:t.title)||"تفاصيل المنتج",z=(t==null?void 0:t.description)||"",b=l?t==null?void 0:t.product_price:t==null?void 0:t.price,v=l?t==null?void 0:t.catalog_product_price:null,$=Array.isArray(t==null?void 0:t.product_features)?t.product_features.map(r=>String(r||"").trim()).filter(Boolean).slice(0,8):[],D=N!=null,S=Number.isFinite(Number(_))?Math.max(1,Math.min(99,Number(_))):1;n.useEffect(()=>{if(!y||!t){u(null);return}let r=!1;return(async()=>{try{const i=await tt();if(r||!Array.isArray(i))return;const e=i.find(s=>l?Number(s.sponsored_ad)===Number(t.id):Number(s.product)===Number(t.id));u((e==null?void 0:e.id)??null)}catch{r||u(null)}})(),()=>{r=!0}},[y,t,l]);const V=()=>({productId:l?(t==null?void 0:t.product)??null:t==null?void 0:t.id,sponsoredAdId:l?t==null?void 0:t.id:null,quantity:S,note:""}),E=async(r,{isFirstCart:i=!1}={})=>{const e=await C(i?"لا توجد لديك سلال بعد. اكتب اسماً لسلتك الأولى — يُضاف المنتج إليها مباشرة.":"اكتب اسماً للسلة الجديدة ثم يُضاف المنتج إليها.",i?"مثال: سلة اليوم":"اسم السلة...",i?"إنشاء أول سلة":"سلة جديدة");if(!e||!String(e).trim())return!1;const s=await st(String(e).trim());return await U(s.id,r.productId??null,r.quantity??1,r.sponsoredAdId??null,r.note??""),!0},L=r=>{h(i=>{const e=Number(i),s=Number.isFinite(e)?e:1;return Math.max(1,Math.min(99,s+r))})},J=async()=>{var r,i;if(!y){A("/login",{state:{flash:"يجب تسجيل الدخول أولاً."}});return}if(j&&t){f(!0);try{const e=V(),s=await C("أضف ملاحظة على هذا المنتج داخل السلة (اختياري). اترك الحقل فارغاً إذا لا تريد.","مثال: بدون بصل / توصيل بعد العصر","ملاحظة على المنتج","");e.note=s==null?"":String(s).trim();const W=await at(),B=Array.isArray(W)?W:[];if(B.length===0){if(!await E(e,{isFirstCart:!0}))return}else{const H=B.map(d=>({id:String(d.id),label:d.name||`سلة #${d.id}`,value:d.id,badge:Array.isArray(d.items)?d.items.length:0})),I=await Q("اختر السلة التي تريد إضافة المنتج إليها:","إضافة إلى أي سلة؟",H,{primaryActionLabel:"سلة جديدة"});if(I==null)return;if(I==="__primary__"){if(!await E(e))return}else await U(Number(I),e.productId??null,e.quantity??1,e.sponsoredAdId??null,e.note??"")}await c("تمت إضافة العنصر إلى السلة.","تم")}catch(e){await c(((i=(r=e==null?void 0:e.response)==null?void 0:r.data)==null?void 0:i.error)||"تعذر الإضافة إلى السلة.","خطأ")}finally{f(!1)}}},K=async()=>{var r,i;if(!y){A("/login",{state:{flash:"يجب تسجيل الدخول أولاً."}});return}if(t){f(!0);try{if(N)await rt(N),u(null),await c("تمت إزالة العنصر من المفضلة.","تم");else{const e=await it(l?t.product??null:t.id,l?t.id:null);u((e==null?void 0:e.id)??!0),await c("تمت إضافة العنصر إلى المفضلة.","تم")}}catch(e){await c(((i=(r=e==null?void 0:e.response)==null?void 0:r.data)==null?void 0:i.error)||"تعذر تعديل المفضلة.","خطأ")}finally{f(!1)}}};return a.jsxs(nt,{children:[a.jsxs("div",{style:{maxWidth:920,margin:"0 auto",padding:"12px clamp(10px, 2vw, 20px) 34px"},children:[g?a.jsx("div",{className:"card",children:"جاري التحميل…"}):null,!g&&x?a.jsx("div",{className:"card",style:{color:"#c62828"},children:x}):null,!g&&!x&&!t?a.jsxs("div",{className:"card",children:["هذا العنصر غير موجود حالياً.",a.jsx("div",{style:{marginTop:10},children:a.jsx(P,{to:`/stores/${m}`,children:"الرجوع للمتجر"})})]}):null,!g&&!x&&t?a.jsxs("article",{className:"card",style:{overflow:"hidden",padding:0},children:[a.jsx("div",{className:"item-details-media-shell",children:M.length>0?a.jsx(ot,{images:M,alt:T,height:340,borderRadius:12,fit:"contain",className:"item-details-media-carousel"}):a.jsx("div",{className:"flex-center",style:{minHeight:260},children:a.jsx(ut,{size:46,color:"var(--text-light)"})})}),a.jsxs("div",{style:{padding:"14px clamp(12px, 2vw, 20px) 18px"},children:[a.jsx("h1",{style:{margin:0,color:"var(--secondary)",fontSize:"clamp(1.18rem, 2.2vw, 1.7rem)"},children:T}),a.jsxs("div",{style:{marginTop:8,color:"var(--text-secondary)",fontWeight:700},children:["من متجر: ",a.jsx(P,{to:`/stores/${m}`,children:(o==null?void 0:o.store_name)||"المتجر"})]}),b!=null&&Number.isFinite(Number(b))?a.jsxs("div",{style:{marginTop:12,display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[v!=null&&Number.isFinite(Number(v))&&Number(v)>Number(b)?a.jsxs("span",{style:{textDecoration:"line-through",color:"var(--text-light)"},children:[Number(v).toFixed(2)," ₪"]}):null,a.jsxs("span",{style:{fontSize:"1.28rem",fontWeight:900,color:"var(--secondary)"},children:[Number(b).toFixed(2)," ₪"]})]}):null,a.jsxs("div",{className:"item-details-actions",children:[a.jsxs("div",{className:"item-details-qty",children:[a.jsx("button",{type:"button",className:"item-details-qty-btn",onClick:()=>L(-1),"aria-label":"نقص الكمية",children:a.jsx(mt,{size:18})}),a.jsx("input",{className:"item-details-qty-input",type:"text",inputMode:"numeric",value:S,onChange:r=>{const i=String(r.target.value||"").replace(/\D+/g,"");if(!i)return h(1);const e=Number(i);h(Number.isFinite(e)?Math.max(1,Math.min(99,e)):1)},onBlur:()=>h(S)}),a.jsx("button",{type:"button",className:"item-details-qty-btn",onClick:()=>L(1),"aria-label":"زيادة الكمية",children:a.jsx(pt,{size:18})})]}),a.jsxs("button",{type:"button",className:`item-details-action-btn${j?"":" item-details-action-btn--muted"}`,onClick:J,disabled:w||!j,children:[a.jsx(et,{size:18}),w?"جارٍ التنفيذ…":"إضافة إلى السلة"]}),a.jsxs("button",{type:"button",className:"item-details-action-btn item-details-action-btn--fav",onClick:K,disabled:w,children:[a.jsx(lt,{size:18,color:"#e91e63",fill:D?"#e91e63":"none"}),D?"إزالة من المفضلة":"إضافة إلى المفضلة"]})]}),z?a.jsx("p",{style:{marginTop:12,lineHeight:1.8,color:"var(--text-primary)"},children:z}):null,$.length>0?a.jsx("div",{style:{marginTop:10,display:"flex",flexWrap:"wrap",gap:8},children:$.map((r,i)=>a.jsx("span",{className:"badge",style:{background:"var(--white)"},children:r},`${r}-${i}`))}):null]})]}):null]}),a.jsx("style",{children:`
        .item-details-actions{
          margin-top: 14px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0,1fr));
          gap: 10px;
        }
        .item-details-qty{
          display: grid;
          grid-template-columns: 40px 1fr 40px;
          border: 1px solid var(--border);
          border-radius: 12px;
          overflow: hidden;
          background: var(--white);
          min-height: 42px;
        }
        .item-details-qty-btn{
          border: none;
          background: var(--surface);
          color: var(--secondary);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .item-details-qty-input{
          border: none;
          text-align: center;
          font-weight: 900;
          color: var(--secondary);
          background: var(--white);
        }
        .item-details-qty-input:focus{ outline: none; }
        .item-details-action-btn{
          border: 1px solid var(--border);
          background: var(--white);
          color: var(--secondary);
          border-radius: 12px;
          padding: 10px 12px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-weight: 800;
          cursor: pointer;
        }
        .item-details-action-btn--fav{
          border-color: rgba(233,30,99,0.32);
          background: rgba(255,255,255,0.95);
        }
        .item-details-action-btn--muted{
          opacity: .65;
          cursor: not-allowed;
        }
        .item-details-media-shell{
          background: var(--grey-light);
          min-height: 260px;
          padding: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .item-details-media-carousel{
          width: min(100%, 620px);
          margin-inline: auto;
        }
        @media (max-width: 560px){
          .item-details-actions{ grid-template-columns: 1fr; }
          .item-details-media-shell{ padding: 8px; }
          .item-details-media-carousel{ width: 100%; }
        }
      `})]})}export{Nt as default};
