import{h as O,u as V,a as X,r as n,a7 as Y,t as Z,j as e,L as W,S as tt,y as et,A as P,w as rt,x as at,z as st}from"./index-BpETrDVb.js";import{M as it,H as nt}from"./MainLayout-D1gNvmgX.js";import{I as ot}from"./ImageCarousel-BW75vxf7.js";import{c as lt}from"./cartAccess-DdSevxjw.js";import{v as dt}from"./productImages-BYfYSUZM.js";import{A as ct}from"./arrow-left-DwlIBZLV.js";import{I as ut}from"./image-BA5580ze.js";import{C as pt,a as mt}from"./chevron-up-pB1JqUnE.js";import"./chevron-left-CISDpb1T.js";function Nt(){const{storeId:c,itemType:m,itemId:I}=O(),w=V(),{showAlert:u,showPrompt:U,showSelect:B}=X(),[x,C]=n.useState(!0),[l,Q]=n.useState(null),[g,F]=n.useState(""),[j,f]=n.useState(!1),[N,p]=n.useState(null),[q,b]=n.useState(1),G=localStorage.getItem("isGuest")==="true",y=!!localStorage.getItem("token")&&!G,S=lt();n.useEffect(()=>{let a=!1;return(async()=>{var s,r;try{C(!0);const i=await Y(c);a||(Q(i),F(""))}catch(i){a||F(((r=(s=i==null?void 0:i.response)==null?void 0:s.data)==null?void 0:r.detail)||"تعذر تحميل تفاصيل المنتج.")}finally{a||C(!1)}})(),()=>{a=!0}},[c]);const t=n.useMemo(()=>{if(!l)return null;const a=Number(I);return Number.isFinite(a)?m==="product"?(l.products||[]).find(s=>Number(s.id)===a)||null:m==="sponsored"&&(l.sponsored_ads||[]).find(s=>Number(s.id)===a)||null:null},[l,m,I]),_=dt(t),o=m==="sponsored",M=(t==null?void 0:t.name)||(t==null?void 0:t.title)||"تفاصيل المنتج",z=(t==null?void 0:t.description)||"",h=o?t==null?void 0:t.product_price:t==null?void 0:t.price,v=o?t==null?void 0:t.catalog_product_price:null,T=Array.isArray(t==null?void 0:t.product_features)?t.product_features.map(a=>String(a||"").trim()).filter(Boolean).slice(0,8):[],$=N!=null,k=Number.isFinite(Number(q))?Math.max(1,Math.min(99,Number(q))):1;n.useEffect(()=>{if(!y||!t){p(null);return}let a=!1;return(async()=>{try{const s=await Z();if(a||!Array.isArray(s))return;const r=s.find(i=>o?Number(i.sponsored_ad)===Number(t.id):Number(i.product)===Number(t.id));p((r==null?void 0:r.id)??null)}catch{a||p(null)}})(),()=>{a=!0}},[y,t,o]);const R=()=>({productId:o?(t==null?void 0:t.product)??null:t==null?void 0:t.id,sponsoredAdId:o?t==null?void 0:t.id:null,quantity:k}),L=async(a,{isFirstCart:s=!1}={})=>{const r=await U(s?"لا توجد لديك سلال بعد. اكتب اسماً لسلتك الأولى — يُضاف المنتج إليها مباشرة.":"اكتب اسماً للسلة الجديدة ثم يُضاف المنتج إليها.",s?"مثال: سلة اليوم":"اسم السلة...",s?"إنشاء أول سلة":"سلة جديدة");if(!r||!String(r).trim())return!1;const i=await st(String(r).trim());return await P(i.id,a.productId??null,a.quantity??1,a.sponsoredAdId??null),!0},D=a=>{b(s=>{const r=Number(s),i=Number.isFinite(r)?r:1;return Math.max(1,Math.min(99,i+a))})},J=async()=>{var a,s;if(!y){w("/login",{state:{flash:"يجب تسجيل الدخول أولاً."}});return}if(S&&t){f(!0);try{const r=R(),i=await et(),E=Array.isArray(i)?i:[];if(E.length===0){if(!await L(r,{isFirstCart:!0}))return}else{const H=E.map(d=>({id:String(d.id),label:d.name||`سلة #${d.id}`,value:d.id,badge:Array.isArray(d.items)?d.items.length:0})),A=await B("اختر السلة التي تريد إضافة المنتج إليها:","إضافة إلى أي سلة؟",H,{primaryActionLabel:"سلة جديدة"});if(A==null)return;if(A==="__primary__"){if(!await L(r))return}else await P(Number(A),r.productId??null,r.quantity??1,r.sponsoredAdId??null)}await u("تمت إضافة العنصر إلى السلة.","تم")}catch(r){await u(((s=(a=r==null?void 0:r.response)==null?void 0:a.data)==null?void 0:s.error)||"تعذر الإضافة إلى السلة.","خطأ")}finally{f(!1)}}},K=async()=>{var a,s;if(!y){w("/login",{state:{flash:"يجب تسجيل الدخول أولاً."}});return}if(t){f(!0);try{if(N)await rt(N),p(null),await u("تمت إزالة العنصر من المفضلة.","تم");else{const r=await at(o?t.product??null:t.id,o?t.id:null);p((r==null?void 0:r.id)??!0),await u("تمت إضافة العنصر إلى المفضلة.","تم")}}catch(r){await u(((s=(a=r==null?void 0:r.response)==null?void 0:a.data)==null?void 0:s.error)||"تعذر تعديل المفضلة.","خطأ")}finally{f(!1)}}};return e.jsxs(it,{children:[e.jsxs("div",{style:{maxWidth:920,margin:"0 auto",padding:"12px clamp(10px, 2vw, 20px) 34px"},children:[e.jsxs("button",{type:"button",className:"item-details-back-btn",onClick:()=>w(`/stores/${c}`),children:[e.jsx(ct,{size:18}),"العودة إلى المتجر"]}),x?e.jsx("div",{className:"card",children:"جاري التحميل…"}):null,!x&&g?e.jsx("div",{className:"card",style:{color:"#c62828"},children:g}):null,!x&&!g&&!t?e.jsxs("div",{className:"card",children:["هذا العنصر غير موجود حالياً.",e.jsx("div",{style:{marginTop:10},children:e.jsx(W,{to:`/stores/${c}`,children:"الرجوع للمتجر"})})]}):null,!x&&!g&&t?e.jsxs("article",{className:"card",style:{overflow:"hidden",padding:0},children:[e.jsx("div",{style:{background:"var(--grey-light)",minHeight:260},children:_.length>0?e.jsx(ot,{images:_,alt:M,height:360,borderRadius:0}):e.jsx("div",{className:"flex-center",style:{minHeight:260},children:e.jsx(ut,{size:46,color:"var(--text-light)"})})}),e.jsxs("div",{style:{padding:"14px clamp(12px, 2vw, 20px) 18px"},children:[e.jsx("h1",{style:{margin:0,color:"var(--secondary)",fontSize:"clamp(1.18rem, 2.2vw, 1.7rem)"},children:M}),e.jsxs("div",{style:{marginTop:8,color:"var(--text-secondary)",fontWeight:700},children:["من متجر: ",e.jsx(W,{to:`/stores/${c}`,children:(l==null?void 0:l.store_name)||"المتجر"})]}),h!=null&&Number.isFinite(Number(h))?e.jsxs("div",{style:{marginTop:12,display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[v!=null&&Number.isFinite(Number(v))&&Number(v)>Number(h)?e.jsxs("span",{style:{textDecoration:"line-through",color:"var(--text-light)"},children:[Number(v).toFixed(2)," ₪"]}):null,e.jsxs("span",{style:{fontSize:"1.28rem",fontWeight:900,color:"var(--secondary)"},children:[Number(h).toFixed(2)," ₪"]})]}):null,e.jsxs("div",{className:"item-details-actions",children:[e.jsxs("div",{className:"item-details-qty",children:[e.jsx("button",{type:"button",className:"item-details-qty-btn",onClick:()=>D(-1),"aria-label":"نقص الكمية",children:e.jsx(pt,{size:18})}),e.jsx("input",{className:"item-details-qty-input",type:"text",inputMode:"numeric",value:k,onChange:a=>{const s=String(a.target.value||"").replace(/\D+/g,"");if(!s)return b(1);const r=Number(s);b(Number.isFinite(r)?Math.max(1,Math.min(99,r)):1)},onBlur:()=>b(k)}),e.jsx("button",{type:"button",className:"item-details-qty-btn",onClick:()=>D(1),"aria-label":"زيادة الكمية",children:e.jsx(mt,{size:18})})]}),e.jsxs("button",{type:"button",className:`item-details-action-btn${S?"":" item-details-action-btn--muted"}`,onClick:J,disabled:j||!S,children:[e.jsx(tt,{size:18}),j?"جارٍ التنفيذ…":"إضافة إلى السلة"]}),e.jsxs("button",{type:"button",className:"item-details-action-btn item-details-action-btn--fav",onClick:K,disabled:j,children:[e.jsx(nt,{size:18,color:"#e91e63",fill:$?"#e91e63":"none"}),$?"إزالة من المفضلة":"إضافة إلى المفضلة"]})]}),z?e.jsx("p",{style:{marginTop:12,lineHeight:1.8,color:"var(--text-primary)"},children:z}):null,T.length>0?e.jsx("div",{style:{marginTop:10,display:"flex",flexWrap:"wrap",gap:8},children:T.map((a,s)=>e.jsx("span",{className:"badge",style:{background:"var(--white)"},children:a},`${a}-${s}`))}):null]})]}):null]}),e.jsx("style",{children:`
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
        @media (max-width: 560px){
          .item-details-actions{ grid-template-columns: 1fr; }
        }
      `})]})}export{Nt as default};
