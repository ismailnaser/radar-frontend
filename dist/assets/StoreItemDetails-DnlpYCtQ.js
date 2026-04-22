import{h as O,u as X,a as Y,r as n,a7 as Z,t as tt,j as a,L as U,S as et,y as at,A as B,w as rt,x as it,z as st}from"./index-D-O0uzi9.js";import{M as nt,H as ot}from"./MainLayout-DDN34u42.js";import{I as lt}from"./ImageCarousel-5y-yMDSM.js";import{c as dt}from"./cartAccess-DdSevxjw.js";import{v as ct}from"./productImages-BYfYSUZM.js";import{A as ut}from"./arrow-left-_jkNqVVt.js";import{I as mt}from"./image-fBxI-Ocm.js";import{C as pt,a as xt}from"./chevron-up-BOMZEet2.js";import"./chevron-left-KEJh3ZD2.js";function St(){const{storeId:c,itemType:p,itemId:I}=O(),w=X(),{showAlert:u,showPrompt:C,showSelect:Q}=Y(),[x,F]=n.useState(!0),[l,G]=n.useState(null),[g,q]=n.useState(""),[N,f]=n.useState(!1),[j,m]=n.useState(null),[_,h]=n.useState(1),R=localStorage.getItem("isGuest")==="true",b=!!localStorage.getItem("token")&&!R,S=dt();n.useEffect(()=>{let r=!1;return(async()=>{var i,e;try{F(!0);const s=await Z(c);r||(G(s),q(""))}catch(s){r||q(((e=(i=s==null?void 0:s.response)==null?void 0:i.data)==null?void 0:e.detail)||"تعذر تحميل تفاصيل المنتج.")}finally{r||F(!1)}})(),()=>{r=!0}},[c]);const t=n.useMemo(()=>{if(!l)return null;const r=Number(I);return Number.isFinite(r)?p==="product"?(l.products||[]).find(i=>Number(i.id)===r)||null:p==="sponsored"&&(l.sponsored_ads||[]).find(i=>Number(i.id)===r)||null:null},[l,p,I]),M=ct(t),o=p==="sponsored",z=(t==null?void 0:t.name)||(t==null?void 0:t.title)||"تفاصيل المنتج",T=(t==null?void 0:t.description)||"",y=o?t==null?void 0:t.product_price:t==null?void 0:t.price,v=o?t==null?void 0:t.catalog_product_price:null,$=Array.isArray(t==null?void 0:t.product_features)?t.product_features.map(r=>String(r||"").trim()).filter(Boolean).slice(0,8):[],L=j!=null,k=Number.isFinite(Number(_))?Math.max(1,Math.min(99,Number(_))):1;n.useEffect(()=>{if(!b||!t){m(null);return}let r=!1;return(async()=>{try{const i=await tt();if(r||!Array.isArray(i))return;const e=i.find(s=>o?Number(s.sponsored_ad)===Number(t.id):Number(s.product)===Number(t.id));m((e==null?void 0:e.id)??null)}catch{r||m(null)}})(),()=>{r=!0}},[b,t,o]);const V=()=>({productId:o?(t==null?void 0:t.product)??null:t==null?void 0:t.id,sponsoredAdId:o?t==null?void 0:t.id:null,quantity:k,note:""}),D=async(r,{isFirstCart:i=!1}={})=>{const e=await C(i?"لا توجد لديك سلال بعد. اكتب اسماً لسلتك الأولى — يُضاف المنتج إليها مباشرة.":"اكتب اسماً للسلة الجديدة ثم يُضاف المنتج إليها.",i?"مثال: سلة اليوم":"اسم السلة...",i?"إنشاء أول سلة":"سلة جديدة");if(!e||!String(e).trim())return!1;const s=await st(String(e).trim());return await B(s.id,r.productId??null,r.quantity??1,r.sponsoredAdId??null,r.note??""),!0},E=r=>{h(i=>{const e=Number(i),s=Number.isFinite(e)?e:1;return Math.max(1,Math.min(99,s+r))})},J=async()=>{var r,i;if(!b){w("/login",{state:{flash:"يجب تسجيل الدخول أولاً."}});return}if(S&&t){f(!0);try{const e=V(),s=await C("أضف ملاحظة على هذا المنتج داخل السلة (اختياري). اترك الحقل فارغاً إذا لا تريد.","مثال: بدون بصل / توصيل بعد العصر","ملاحظة على المنتج","");e.note=s==null?"":String(s).trim();const W=await at(),H=Array.isArray(W)?W:[];if(H.length===0){if(!await D(e,{isFirstCart:!0}))return}else{const P=H.map(d=>({id:String(d.id),label:d.name||`سلة #${d.id}`,value:d.id,badge:Array.isArray(d.items)?d.items.length:0})),A=await Q("اختر السلة التي تريد إضافة المنتج إليها:","إضافة إلى أي سلة؟",P,{primaryActionLabel:"سلة جديدة"});if(A==null)return;if(A==="__primary__"){if(!await D(e))return}else await B(Number(A),e.productId??null,e.quantity??1,e.sponsoredAdId??null,e.note??"")}await u("تمت إضافة العنصر إلى السلة.","تم")}catch(e){await u(((i=(r=e==null?void 0:e.response)==null?void 0:r.data)==null?void 0:i.error)||"تعذر الإضافة إلى السلة.","خطأ")}finally{f(!1)}}},K=async()=>{var r,i;if(!b){w("/login",{state:{flash:"يجب تسجيل الدخول أولاً."}});return}if(t){f(!0);try{if(j)await rt(j),m(null),await u("تمت إزالة العنصر من المفضلة.","تم");else{const e=await it(o?t.product??null:t.id,o?t.id:null);m((e==null?void 0:e.id)??!0),await u("تمت إضافة العنصر إلى المفضلة.","تم")}}catch(e){await u(((i=(r=e==null?void 0:e.response)==null?void 0:r.data)==null?void 0:i.error)||"تعذر تعديل المفضلة.","خطأ")}finally{f(!1)}}};return a.jsxs(nt,{children:[a.jsxs("div",{style:{maxWidth:920,margin:"0 auto",padding:"12px clamp(10px, 2vw, 20px) 34px"},children:[a.jsxs("button",{type:"button",className:"item-details-back-btn",onClick:()=>w(`/stores/${c}`),children:[a.jsx(ut,{size:18}),"العودة إلى المتجر"]}),x?a.jsx("div",{className:"card",children:"جاري التحميل…"}):null,!x&&g?a.jsx("div",{className:"card",style:{color:"#c62828"},children:g}):null,!x&&!g&&!t?a.jsxs("div",{className:"card",children:["هذا العنصر غير موجود حالياً.",a.jsx("div",{style:{marginTop:10},children:a.jsx(U,{to:`/stores/${c}`,children:"الرجوع للمتجر"})})]}):null,!x&&!g&&t?a.jsxs("article",{className:"card",style:{overflow:"hidden",padding:0},children:[a.jsx("div",{className:"item-details-media-shell",children:M.length>0?a.jsx(lt,{images:M,alt:z,height:340,borderRadius:12,fit:"contain",className:"item-details-media-carousel"}):a.jsx("div",{className:"flex-center",style:{minHeight:260},children:a.jsx(mt,{size:46,color:"var(--text-light)"})})}),a.jsxs("div",{style:{padding:"14px clamp(12px, 2vw, 20px) 18px"},children:[a.jsx("h1",{style:{margin:0,color:"var(--secondary)",fontSize:"clamp(1.18rem, 2.2vw, 1.7rem)"},children:z}),a.jsxs("div",{style:{marginTop:8,color:"var(--text-secondary)",fontWeight:700},children:["من متجر: ",a.jsx(U,{to:`/stores/${c}`,children:(l==null?void 0:l.store_name)||"المتجر"})]}),y!=null&&Number.isFinite(Number(y))?a.jsxs("div",{style:{marginTop:12,display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[v!=null&&Number.isFinite(Number(v))&&Number(v)>Number(y)?a.jsxs("span",{style:{textDecoration:"line-through",color:"var(--text-light)"},children:[Number(v).toFixed(2)," ₪"]}):null,a.jsxs("span",{style:{fontSize:"1.28rem",fontWeight:900,color:"var(--secondary)"},children:[Number(y).toFixed(2)," ₪"]})]}):null,a.jsxs("div",{className:"item-details-actions",children:[a.jsxs("div",{className:"item-details-qty",children:[a.jsx("button",{type:"button",className:"item-details-qty-btn",onClick:()=>E(-1),"aria-label":"نقص الكمية",children:a.jsx(pt,{size:18})}),a.jsx("input",{className:"item-details-qty-input",type:"text",inputMode:"numeric",value:k,onChange:r=>{const i=String(r.target.value||"").replace(/\D+/g,"");if(!i)return h(1);const e=Number(i);h(Number.isFinite(e)?Math.max(1,Math.min(99,e)):1)},onBlur:()=>h(k)}),a.jsx("button",{type:"button",className:"item-details-qty-btn",onClick:()=>E(1),"aria-label":"زيادة الكمية",children:a.jsx(xt,{size:18})})]}),a.jsxs("button",{type:"button",className:`item-details-action-btn${S?"":" item-details-action-btn--muted"}`,onClick:J,disabled:N||!S,children:[a.jsx(et,{size:18}),N?"جارٍ التنفيذ…":"إضافة إلى السلة"]}),a.jsxs("button",{type:"button",className:"item-details-action-btn item-details-action-btn--fav",onClick:K,disabled:N,children:[a.jsx(ot,{size:18,color:"#e91e63",fill:L?"#e91e63":"none"}),L?"إزالة من المفضلة":"إضافة إلى المفضلة"]})]}),T?a.jsx("p",{style:{marginTop:12,lineHeight:1.8,color:"var(--text-primary)"},children:T}):null,$.length>0?a.jsx("div",{style:{marginTop:10,display:"flex",flexWrap:"wrap",gap:8},children:$.map((r,i)=>a.jsx("span",{className:"badge",style:{background:"var(--white)"},children:r},`${r}-${i}`))}):null]})]}):null]}),a.jsx("style",{children:`
        .item-details-back-btn{
          width: auto;
          margin-bottom: 12px;
          border: 1px solid var(--border);
          background: var(--white);
          color: var(--secondary);
          border-radius: 12px;
          padding: 10px 14px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-weight: 800;
          cursor: pointer;
        }
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
      `})]})}export{St as default};
